# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start Next.js dev server on localhost:3000
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint (flat config, `eslint-config-next`)

There is no test suite.

## Required environment (`.env.local`)

- `MONGODB_URI` — required at boot; `src/lib/mongodb.js` throws if missing
- `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO` — Gmail SMTP credentials used by the contact form (`src/app/api/contact/route.js`)

## Architecture

This is a single-page marketing site for NMBTS with a MongoDB-backed CMS and a password-protected `/dashboard` used to edit every section of the homepage.

### Content pipeline (the core abstraction)

All editable copy flows through one shape:

1. `src/lib/defaults.js` — source of truth for the content schema. Every section (`meta`, `hero`, `intro`, `ecosystem`, `whoThisIsFor`, `aboutLeader`, `finalCta`, `footer`, …) is a key here with its default fields. **Adding or renaming a section must happen here first.**
2. `src/lib/content.js` — `getAllContent()` merges the `content` collection over `defaults`; `updateSection(sectionId, fields)` upserts by `sectionId`; `seedDefaults()` bulk-upserts initial docs.
3. `src/app/page.js` — server component, `dynamic = 'force-dynamic'`. Fetches content, falls back to `defaults` on any DB error, and passes each section as a `data` prop to its component in `src/app/components/`.
4. `src/app/api/content/route.js` — `GET` returns merged content; `PUT` validates `sectionId` against `Object.keys(defaults)` before upserting. Any new section key must exist in `defaults` or the PUT is rejected.
5. `src/app/dashboard/DashboardClient.js` — `SECTION_CONFIG` describes how each section renders in the admin UI (field types, labels, icons). When you add a field to `defaults`, also add it here or it won't be editable.

Phone numbers have a subtle contract: `page.js` derives `whatsappPhone` from `content.footer.phone` (prefixed with `91`) and falls back to `content.hero.whatsappPhone`; `callPhone` comes from `content.footer.callPhone`. Components receive these as props — do not read them from content directly in components.

### Auth & dashboard

- `src/middleware.js` gates `/dashboard/*` (except `/dashboard/login`) by presence of the `nmbts_admin` cookie. It does **not** verify the session against the DB — actual verification happens in the route handlers that read/write content via `verifySession` in `src/lib/auth.js`.
- `src/lib/auth.js` — PBKDF2-hashed admin users in `admin_users`, session tokens in `admin_sessions` with a 7-day TTL. `ensureAdmin()` seeds a default admin on first run (see file for the seeded credentials).
- Login/logout routes: `src/app/api/admin/login`, `src/app/api/admin/logout`. Seed route: `src/app/api/seed/route.js`.

### MongoDB client

`src/lib/mongodb.js` memoizes the client on `global._mongoClientPromise` in development to survive HMR, and creates a fresh client in production. The database name is hardcoded to `nmbts` in `src/lib/content.js` and `src/lib/auth.js` — the contact route uses the default DB from the URI instead, so the URI's default DB should also be `nmbts`.

### Path alias

`@/*` → `./src/*` (see `jsconfig.json`). Use it for all cross-directory imports.
