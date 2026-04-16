# Webinar Lead Capture — Implementation Plan

> Status: **Not started.** Plan drafted on 2026-04-15, waiting for explicit go-ahead before implementation begins.

## Context

NMBTS is promoting free webinars on social media. Traffic from those posts needs to land on the website and go through a gated flow: see the webinar, fill a registration form, unlock the embedded video. Leads must be captured as Google Sheet rows **and** as email notifications (no database), because the operator wants them immediately visible in both channels.

The feature must be reusable for future webinars, and the operator wants to add/edit/activate webinars from the existing [`/dashboard`](../src/app/dashboard/DashboardClient.js) admin — no code edits per webinar.

### User decisions captured
- **URL pattern**: single index page `/webinar` listing every webinar marked active in the dashboard; clicking a card opens `/webinar/[slug]` with the form + gated video.
- **Lead storage**: Google Sheet (via Apps Script webhook) **and** email — no MongoDB writes for leads.
- **Video host**: flexible — admin enters a full embed URL per webinar (supports Vimeo, YouTube, etc.).
- **Admin UI**: webinars must plug into `/dashboard` as a new section, same pattern as `ecosystem.cards`.

---

## Approach (high level)

Reuse the existing content pipeline end-to-end:

1. Add a `webinars` section to [src/lib/defaults.js](../src/lib/defaults.js). It becomes the schema anchor — `/api/content` PUT validates against this ([api/content/route.js:20-22](../src/app/api/content/route.js#L20-L22)).
2. Register `webinars` in `SECTION_CONFIG` inside [src/app/dashboard/DashboardClient.js](../src/app/dashboard/DashboardClient.js) using the existing `arrayField` repeater pattern (same shape as `ecosystem`).
3. Add a new **`checkbox`** field type to the DashboardClient field renderers so the operator can toggle `active: true/false` on each webinar. Currently only `text`, `textarea`, `number` are rendered ([DashboardClient.js:413-427](../src/app/dashboard/DashboardClient.js#L413-L427) and [:474-488](../src/app/dashboard/DashboardClient.js#L474-L488)).
4. Build public pages `/webinar` (list) and `/webinar/[slug]` (detail), both server components, both pulling content via `getAllContent()` ([src/lib/content.js:9](../src/lib/content.js#L9)), mirroring the existing home page pattern ([src/app/page.js](../src/app/page.js)). Both import `Navbar` + `Footer` directly, like [privacy-policy](../src/app/privacy-policy/) does.
5. Build a `WebinarForm` client component that mirrors [`ContactSection.js`](../src/app/components/ContactSection.js) — same state machine (`idle | loading | success | error`), same navy/gold Tailwind styling. On success it replaces itself with the embedded iframe using the `embedUrl` prop.
6. Build an API route `/api/webinar-lead` that validates, forwards the lead to the Google Apps Script webhook **and** sends an email via the existing nodemailer Gmail transporter (same pattern as [api/contact/route.js](../src/app/api/contact/route.js) but **no Mongo insert**).
7. Document the one-time Google Apps Script setup the operator needs to do, and add one env var: `GOOGLE_SHEETS_WEBHOOK_URL`.

---

## Files to create

### `src/app/webinar/page.js` (index page)
- Server component with `export const dynamic = 'force-dynamic'`.
- Fetches `getAllContent()`, falls back to `defaults` on DB error (same pattern as [page.js:17-28](../src/app/page.js#L17-L28)).
- Renders `Navbar`, a page header (title + subheading from `content.webinars.heading`/`subheading`), and a responsive grid of cards — one per webinar where `active === true`. Each card is a `<Link href={\`/webinar/${w.slug}\`}>` with title, short description, and optional thumbnail.
- Empty state: "No live webinars right now — check back soon." when the filtered list is empty.
- Exports `metadata` (title, description) statically.
- Renders `Footer` at the bottom. Uses the same `whatsappPhone` / `callPhone` derivation from [page.js:30-34](../src/app/page.js#L30-L34).

### `src/app/webinar/[slug]/page.js` (detail page)
- Server component with `export const dynamic = 'force-dynamic'`.
- `params` is a Promise in Next 16 App Router — await it: `const { slug } = await params;` (this is one of the breaking changes warned about in [AGENTS.md](../AGENTS.md); verify against `node_modules/next/dist/docs/` before coding).
- Fetches content, finds the webinar by `slug`. If not found or `active === false`, calls `notFound()` from `next/navigation`.
- Renders `Navbar`, a hero-style header (title, description, presenter, date if present), and `<WebinarForm webinar={webinar} />`, then `Footer`.
- Generates per-webinar `metadata` from the webinar title/description (`export async function generateMetadata`).

### `src/app/components/WebinarForm.js` (client component)
- `'use client'`. State: `form` object (firstName, lastName, email, phone, company, role, city, challenge) + `status` (`idle | loading | success | error`) — same shape as [ContactSection.js](../src/app/components/ContactSection.js).
- Props: `webinar` (needs `slug`, `title`, `embedUrl`).
- Fields rendered in a 2-column grid on `md+`, single column on mobile. `role` is a `<select>` with a hardcoded list (Founder / CEO / CXO / Director / Senior Manager / Manager / Consultant / Other — ok to tune). `challenge` is a textarea.
- Submits via `fetch('/api/webinar-lead', { method: 'POST', body: JSON.stringify({ ...form, webinarSlug: webinar.slug, webinarTitle: webinar.title }) })`.
- On `status === 'success'`: replace the form entirely with a thank-you block containing the message *"Thank you for registering. Your session is unlocked below."* and a responsive `<iframe>` wrapper:
  ```jsx
  <div className="aspect-video w-full rounded-xl overflow-hidden border border-gray-200">
    <iframe src={webinar.embedUrl} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="w-full h-full" />
  </div>
  ```
- Styling: reuse navy/gold Tailwind tokens from ContactSection — labels `uppercase tracking-[0.15em]`, inputs `border-gray-200 focus:border-gold`, submit button `bg-gold hover:bg-gold-dark`.

### `src/app/api/webinar-lead/route.js`
- `export const dynamic = 'force-dynamic'`.
- Imports `nodemailer` and reuses the same transporter config as [api/contact/route.js:6-12](../src/app/api/contact/route.js#L6-L12).
- `POST`: parses body, validates `firstName`, `lastName`, `email`, `phone`, `webinarSlug` (return 400 if missing).
- **Google Sheet**: `fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })`. Uses `Promise.allSettled` alongside the email send so one failure doesn't block the other.
- **Email**: `transporter.sendMail` with subject `New webinar registration: ${webinarTitle}` and an HTML table of all fields (mirror the table in [api/contact/route.js:37-45](../src/app/api/contact/route.js#L37-L45)).
- Returns `{ success: true }` if at least one sink succeeded; 500 otherwise. Log failures with `console.error`.
- **No `clientPromise` import, no DB writes.**

---

## Files to modify

### `src/lib/defaults.js` — add the `webinars` section
Add a new top-level key after `finalCta`:

```js
webinars: {
  heading: "Live & On-Demand Webinars",
  subheading: "Free sessions from NMBTS — register to watch instantly.",
  list: [
    {
      slug: "sample-webinar",
      title: "Sample Webinar Title",
      description: "Short 1–2 sentence description for the card and detail page.",
      presenter: "Pankaj Harwansh",
      date: "",               // free-text, e.g. "Recorded · 45 min"
      embedUrl: "",           // full iframe src (Vimeo player URL, YouTube embed URL, etc.)
      active: false,          // toggle from dashboard to publish
    },
  ],
},
```

**Why this shape**: it mirrors `ecosystem.cards` so the dashboard `arrayField` renderer works unchanged, and the public page can just `.filter(w => w.active)` to get the live list.

### `src/app/dashboard/DashboardClient.js` — register section + add checkbox renderer

**Add to `SECTION_CONFIG`** (after `finalCta`, before `footer`):

```js
webinars: {
  label: 'Webinars',
  icon: (/* a play-in-circle SVG, same stroke style as other icons */),
  fields: {
    heading: { type: 'text', label: 'Section Heading' },
    subheading: { type: 'textarea', label: 'Section Subheading' },
  },
  arrayField: {
    key: 'list',
    label: 'Webinars',
    fields: {
      slug: { type: 'text', label: 'URL Slug (e.g. scaling-your-sme)' },
      title: { type: 'text', label: 'Webinar Title' },
      description: { type: 'textarea', label: 'Short Description' },
      presenter: { type: 'text', label: 'Presenter' },
      date: { type: 'text', label: 'Date / Duration (free text)' },
      embedUrl: { type: 'text', label: 'Video Embed URL (Vimeo/YouTube iframe src)' },
      active: { type: 'checkbox', label: 'Published (visible on site)' },
    },
  },
},
```

**Add checkbox rendering in two places** — regular fields block at [:410-429](../src/app/dashboard/DashboardClient.js#L410-L429), and the array-field inner block at [:469-491](../src/app/dashboard/DashboardClient.js#L469-L491). Minimal diff:

```jsx
// Regular field
fieldConfig.type === 'checkbox' ? (
  <label className="flex items-center gap-3 cursor-pointer select-none">
    <input
      type="checkbox"
      checked={!!content[sectionId]?.[fieldKey]}
      onChange={(e) => updateField(sectionId, fieldKey, e.target.checked)}
      className="w-4 h-4 accent-gold"
    />
    <span className="text-sm text-gray-600">Enabled</span>
  </label>
) : fieldConfig.type === 'textarea' ? (...) : (...)
```

Same shape in the array-field block, except the onChange calls `updateArrayItem(sectionId, config.arrayField.key, idx, fk, e.target.checked)`. The existing `updateArrayItem` at [:195-201](../src/app/dashboard/DashboardClient.js#L195-L201) already handles arbitrary field values, so no helper changes needed.

### `src/app/components/Navbar.js` — optional
Add a "Webinars" link to the nav. Confirm with user if they want it visible in the main nav or only accessible via social traffic. **Default: skip unless asked** — social links will deep-link directly to `/webinar/[slug]`.

---

## Environment & external setup

### Add to `.env.local`
```
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/…/exec
```

### Google Apps Script (one-time, operator does this)
Operator creates a Google Sheet with a header row (Timestamp, First Name, Last Name, Email, Phone, Company, Role, City, Challenge, Webinar Slug, Webinar Title), opens **Extensions → Apps Script**, pastes:

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(), data.firstName, data.lastName, data.email, data.phone,
    data.company, data.role, data.city, data.challenge,
    data.webinarSlug, data.webinarTitle,
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Then **Deploy → New deployment → Web app**, execute as "Me", access "Anyone". The resulting URL is the value for `GOOGLE_SHEETS_WEBHOOK_URL`. After implementation, add a short entry to [CLAUDE.md](../CLAUDE.md) under "Required environment".

---

## Next.js 16 caveats to check before coding

Per [AGENTS.md](../AGENTS.md), read the relevant guide in `node_modules/next/dist/docs/` before writing code. Specifically verify:
- **Dynamic route params** — whether `params` is a Promise that must be awaited in `page.js` (it is in recent versions; confirm).
- **`notFound()` import path** and behavior with `force-dynamic`.
- **`metadata` / `generateMetadata`** signature in Next 16.
- That `Response.json()` is still the idiomatic route-handler response.

---

## Verification plan

1. **Dashboard round-trip**
   - `npm run dev`, log into `/dashboard`, open the new **Webinars** section.
   - Edit the seeded sample: set title, description, `embedUrl` (paste a real Vimeo or YouTube embed URL), tick **Published**. Save.
   - Hit `GET /api/content` and confirm `webinars.list[0]` has the changes and `active: true`.

2. **Index page**
   - Visit `/webinar` — sample webinar card shows. Untick **Published** in dashboard, save, refresh — card disappears, empty state shows.

3. **Detail page gating**
   - Publish it again. Visit `/webinar/sample-webinar`. Form is visible, video iframe is **not** in the DOM yet (inspect element to confirm — we only render it after success).
   - Submit form with valid fields. Confirm:
     - Network request `POST /api/webinar-lead` returns 200.
     - New row appears in the Google Sheet.
     - Email arrives at `EMAIL_TO`.
     - Page swaps form for thank-you message + playable iframe. Video actually plays.
   - Submit with missing required fields → 400 response, error banner shows.
   - Kill `GOOGLE_SHEETS_WEBHOOK_URL` (temp bad value), re-submit → email still sends, API still returns 200 (graceful degradation via `Promise.allSettled`).

4. **Negative cases**
   - Visit `/webinar/does-not-exist` → 404 page.
   - Set `active: false` and visit the slug directly → 404 (don't leak unpublished content).
   - Resize to mobile width — index grid collapses to 1 column, form stacks vertically, iframe stays `aspect-video`.

5. **Lint + build**
   - `npm run lint`
   - `npm run build` — must pass. Check for Next 16 warnings about the new dynamic route.

---

## Out of scope (not doing unless asked)
- Navbar link to `/webinar` (defer to user's call).
- Thumbnails / hero images for webinars (schema leaves room via a future `thumbnail` field; not adding until requested).
- reCAPTCHA / bot protection on the form (current contact form has none either — keep consistent).
- Analytics events on form submission.
- Scheduling / "starts at" countdown timers — current shape treats all webinars as on-demand.
