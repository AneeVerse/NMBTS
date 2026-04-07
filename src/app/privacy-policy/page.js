import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | NMBTS - Navi Mumbai Business & Training Solutions',
  description: 'Privacy Policy for Navi Mumbai Business & Training Solutions (NMBTS). Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-navy py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-gold text-xs font-semibold tracking-wider uppercase mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Legal</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-white/50 text-sm">Last updated: April 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
        <div className="prose prose-gray max-w-none space-y-10">

          {/* Intro */}
          <section>
            <p className="text-gray-600 leading-relaxed text-base">
              Navi Mumbai Business &amp; Training Solutions (<strong>"NMBTS"</strong>, <strong>"we"</strong>, <strong>"our"</strong>, or <strong>"us"</strong>) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or contact us through any of our platforms.
            </p>
            <p className="text-gray-600 leading-relaxed text-base mt-4">
              Please read this policy carefully. If you disagree with its terms, please discontinue use of our website.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-navy mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We may collect the following types of information:</p>
            <div className="space-y-4">
              <div className="pl-4 border-l-2 border-gold/40">
                <h3 className="font-semibold text-navy text-sm uppercase tracking-wide mb-1">Personal Information</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Name, phone number, WhatsApp number, email address, and business/company name — provided voluntarily when you fill our contact form or reach out to us directly.
                </p>
              </div>
              <div className="pl-4 border-l-2 border-gold/40">
                <h3 className="font-semibold text-navy text-sm uppercase tracking-wide mb-1">Enquiry Information</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Messages and queries you submit through our contact form regarding our platforms (BNI, TAB, Corporate Connections, YBounce, DealsFlow).
                </p>
              </div>
              <div className="pl-4 border-l-2 border-gold/40">
                <h3 className="font-semibold text-navy text-sm uppercase tracking-wide mb-1">Usage Data</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Browser type, IP address, pages visited, and time spent on our website — collected automatically via standard web server logs.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-navy mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="space-y-2">
              {[
                'Respond to your enquiries and connect you with the right platform',
                'Send you relevant information about NMBTS events, platforms, and opportunities (only with your consent)',
                'Improve our website and services based on how visitors interact with them',
                'Comply with legal and regulatory obligations',
                'Prevent fraudulent or unauthorised use of our services',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-gray-100" />

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-navy mb-4">3. Data Storage &amp; Security</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Your information is stored securely in our database. We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm mt-3">
              We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-navy mb-4">4. Sharing of Information</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-3">
              We do <strong>not</strong> sell, trade, or rent your personal information to third parties. We may share information only in the following limited circumstances:
            </p>
            <ul className="space-y-2">
              {[
                'With trusted service providers who assist in operating our website and conducting our business, subject to strict confidentiality agreements',
                'When required by law, court order, or government authority',
                'To protect the rights, property, or safety of NMBTS, our members, or the public',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-gray-100" />

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-navy mb-4">5. Cookies</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of the website may not function properly without cookies.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-navy mb-4">6. Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Our website may contain links to third-party websites including WhatsApp, LinkedIn, Facebook, and Instagram. We are not responsible for the privacy practices of those sites and encourage you to review their respective privacy policies.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-navy mb-4">7. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-3">You have the right to:</p>
            <ul className="space-y-2">
              {[
                'Access the personal information we hold about you',
                'Request correction of inaccurate or incomplete data',
                'Request deletion of your personal data (subject to legal requirements)',
                'Opt out of receiving marketing communications from us at any time',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed text-sm mt-3">
              To exercise any of these rights, please contact us using the details below.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-navy mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <hr className="border-gray-100" />

          {/* 9 — Contact */}
          <section>
            <h2 className="text-xl font-bold text-navy mb-4">9. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-5">
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 space-y-3">
              <p className="font-bold text-navy">Navi Mumbai Business &amp; Training Solutions</p>
              <p className="text-sm text-gray-600">Managed by Pankaj Harwansh</p>
              <p className="text-sm text-gray-600">Shelton Sapphire, A Wing, Office 707, Near Belapur Sessions Court,<br />Sector 15, CBD Belapur, Navi Mumbai — 400614</p>
              <p className="text-sm">
                <a href="mailto:pankaj@bni-india.in" className="text-gold hover:text-navy transition-colors font-medium">
                  pankaj@bni-india.in
                </a>
              </p>
              <p className="text-sm">
                <a href="tel:+919372477160" className="text-gold hover:text-navy transition-colors font-medium">
                  +91 93724 77160
                </a>
              </p>
              <p className="text-xs text-gray-400 pt-2">GST No.: 27AAQFN6854P1Z6</p>
            </div>
          </section>

        </div>
      </div>

      {/* Footer strip */}
      <div className="bg-navy-900 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Navi Mumbai Business &amp; Training Solutions. All rights reserved.
          </p>
          <Link href="/" className="text-xs text-white/40 hover:text-gold transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
