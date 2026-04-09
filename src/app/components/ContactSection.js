'use client';

import { useState } from 'react';

export default function ContactSection({ whatsappPhone, callPhone }) {
  const [form, setForm] = useState({ name: '', phone: '', business: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const displayPhone = callPhone || (whatsappPhone?.startsWith('91')
    ? whatsappPhone.slice(2)
    : whatsappPhone);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setForm({ name: '', phone: '', business: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Section header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-10 bg-gold" />
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gold">Contact Us</span>
        </div>
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight mb-3">
            Start a Conversation
          </h2>
          <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
            Tell us where you are in your business journey — we&apos;ll point you to the right platform. No pressure, no pitch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left — contact info card */}
          <div className="lg:col-span-4">
            <div className="bg-navy rounded-2xl p-8 h-full flex flex-col justify-between gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Get in Touch</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Reach out directly or fill the form — we respond within one business day.
                </p>
              </div>

              <div className="space-y-5">
                <a
                  href="mailto:pankaj@bni-india.in"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold/25 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Email</div>
                    <div className="text-sm text-white/80 group-hover:text-gold transition-colors">pankaj@bni-india.in</div>
                  </div>
                </a>

                <a
                  href={`tel:+91${displayPhone}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold/25 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Phone</div>
                    <div className="text-sm text-white/80 group-hover:text-gold transition-colors">+91 {displayPhone}</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center text-gold flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Office</div>
                    <div className="text-sm text-white/70 leading-relaxed">
                      Shelton Sapphire, CBD Belapur,<br />Navi Mumbai - 400614
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp shortcut */}
              <a
                href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hi, I'd like to know more about NMBTS.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-dark text-navy font-semibold text-sm px-5 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-20 px-8 border border-gray-100 rounded-2xl bg-gray-50 min-h-[480px]">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Message Sent!</h3>
                <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                  We&apos;ve received your message and will get back to you within one business day.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-xs font-semibold text-gold hover:text-gold-dark transition-colors underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
                      Your Name <span className="text-gold">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Full name"
                      className="w-full border border-gray-200 focus:border-gold rounded-lg px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-gray-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
                      Phone / WhatsApp <span className="text-gold">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="+91 98765 43210"
                      className="w-full border border-gray-200 focus:border-gold rounded-lg px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-gray-400 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
                    Business / Company
                  </label>
                  <input
                    type="text"
                    value={form.business}
                    onChange={update('business')}
                    placeholder="Your business name"
                    className="w-full border border-gray-200 focus:border-gold rounded-lg px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-gray-400 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-gray-500 mb-2">
                    Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us what you're looking for — networking, advisory, M&A, or just a conversation..."
                    className="w-full border border-gray-200 focus:border-gold rounded-lg px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-gray-400 bg-white resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3.5 rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-60 w-full sm:w-auto"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  {status === 'error' && (
                    <span className="text-xs text-red-500">
                      Something went wrong —{' '}
                      <a
                        href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hi, I'd like to know more about NMBTS.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-red-400"
                      >
                        try WhatsApp instead
                      </a>
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-400">
                  * Required. We don&apos;t share your details with anyone.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
