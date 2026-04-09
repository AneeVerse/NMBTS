import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | NMBTS',
  description: 'Terms and Conditions for using the NMBTS website and services.',
};

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-navy py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Legal</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">Terms &amp; Conditions</h1>
          <p className="text-sm text-white/50">Last updated: April 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 lg:px-8 py-14 lg:py-20 space-y-10 text-gray-700 text-sm leading-relaxed">

        <section>
          <h2 className="text-lg font-bold text-navy mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website <strong>www.nmbts.co.in</strong> ("Site") operated by <strong>Navi Mumbai Business Training Services</strong> ("NMBTS", "we", "us", or "our"), you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use this Site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-3">2. About NMBTS</h2>
          <p>
            NMBTS is a multi-platform business growth ecosystem led by Pankaj Harwansh, offering services that include referral networking (BNI Navi Mumbai), peer advisory (The Alternative Board – TAB), premium B2B networking (Corporate Connections), business broking &amp; M&amp;A advisory (YBounce Ventures LLP), and franchising &amp; distribution (DealsFlow Ventures). Our registered office is at Shelton Sapphire, A Wing, Office 707, Sector 15, CBD Belapur, Navi Mumbai – 400614.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-3">3. Use of the Site</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>You must be at least 18 years of age to use this Site.</li>
            <li>You agree to use this Site only for lawful purposes and in a manner that does not infringe the rights of others.</li>
            <li>You must not attempt to gain unauthorised access to any part of the Site or any system/network connected to it.</li>
            <li>You must not use automated tools, bots, or scrapers to extract data from this Site.</li>
            <li>NMBTS reserves the right to terminate access for any user who violates these terms.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-3">4. Information Accuracy</h2>
          <p>
            We strive to keep all content on this Site accurate and up to date. However, NMBTS makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information provided. Any reliance you place on such information is strictly at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-3">5. Contact Form &amp; Enquiries</h2>
          <p>
            When you submit an enquiry via our contact form, you consent to us storing your name, phone number, business name, and message for the sole purpose of responding to your enquiry. We do not share your details with third parties for marketing purposes. Please refer to our{' '}
            <Link href="/privacy-policy" className="text-gold underline underline-offset-2 hover:text-navy transition-colors">
              Privacy Policy
            </Link>{' '}
            for full details on data handling.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-3">6. Intellectual Property</h2>
          <p>
            All content on this Site — including text, graphics, logos, images, and software — is the property of NMBTS or its content suppliers and is protected under applicable Indian intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission from NMBTS.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-3">7. Third-Party Links</h2>
          <p>
            This Site may contain links to external websites (such as BNI India, The Alternative Board, DealsFlow Ventures, etc.). These links are provided for your convenience. NMBTS has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-3">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, NMBTS shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of this Site or the services described herein. This includes, without limitation, damages for loss of business, profits, data, or goodwill.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-3">9. GST &amp; Business Registrations</h2>
          <p>
            NMBTS operates under GST registration number <strong>27AAQFN6854P1Z6</strong>. All business transactions conducted through NMBTS or its affiliated platforms are subject to applicable Indian taxation laws.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-3">10. Governing Law</h2>
          <p>
            These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Navi Mumbai, Maharashtra.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-3">11. Changes to These Terms</h2>
          <p>
            NMBTS reserves the right to update these Terms &amp; Conditions at any time without prior notice. Changes will be effective immediately upon posting to the Site. Your continued use of the Site following any changes constitutes your acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-navy mb-3">12. Contact Us</h2>
          <p>
            If you have any questions regarding these Terms &amp; Conditions, please contact us:
          </p>
          <div className="mt-4 bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-1.5">
            <p><span className="font-semibold text-navy">NMBTS</span> — Navi Mumbai Business Training Services</p>
            <p>Shelton Sapphire, A Wing, Office 707, Sector 15, CBD Belapur, Navi Mumbai – 400614</p>
            <p>Email: <a href="mailto:pankaj@bni-india.in" className="text-gold hover:underline">pankaj@bni-india.in</a></p>
            <p>Phone: <a href="tel:+919820496991" className="text-gold hover:underline">+91 98204 96991</a></p>
          </div>
        </section>

      </div>

      {/* Footer link */}
      <div className="border-t border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 flex gap-6 text-xs text-gray-400">
          <Link href="/" className="hover:text-navy transition-colors">← Back to Home</Link>
          <Link href="/privacy-policy" className="hover:text-navy transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </main>
  );
}
