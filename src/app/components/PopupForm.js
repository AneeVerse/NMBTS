'use client';

import { useState, useEffect } from 'react';

export default function PopupForm() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', query: '' });

  useEffect(() => {
    const dismissed = sessionStorage.getItem('popup_dismissed');
    if (dismissed) return;

    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    setShow(false);
    sessionStorage.setItem('popup_dismissed', '1');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(close, 2500);
      }
    } catch {
      // silently fail
    } finally {
      setSending(false);
    }
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={close} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-navy px-6 py-5">
          <button onClick={close} className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <h3 className="text-lg font-bold text-white">Get in Touch</h3>
          <p className="text-sm text-white/50 mt-1">We'll get back to you shortly.</p>
        </div>

        {submitted ? (
          <div className="px-6 py-12 text-center">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            </div>
            <p className="text-navy font-semibold">Thank you!</p>
            <p className="text-sm text-gray-500 mt-1">We'll reach out to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all placeholder:text-gray-400"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all placeholder:text-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all placeholder:text-gray-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Query"
                required
                rows={3}
                value={form.query}
                onChange={(e) => setForm({ ...form, query: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all resize-none placeholder:text-gray-400"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold py-3 rounded-lg text-sm transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {sending ? (
                <>
                  <div className="w-4 h-4 border-2 border-navy border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
