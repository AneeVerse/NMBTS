'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SECTION_CONFIG = {
  meta: {
    label: 'SEO & Meta Tags',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
    fields: {
      title: { type: 'text', label: 'Meta Title' },
      description: { type: 'textarea', label: 'Meta Description' },
      keywords: { type: 'textarea', label: 'Meta Keywords (comma separated)', rows: 4 },
      ogTitle: { type: 'text', label: 'OG Title (WhatsApp/Social preview)' },
      ogDescription: { type: 'textarea', label: 'OG Description (WhatsApp/Social preview)' },
    },
  },
  hero: {
    label: 'Hero Section',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    fields: {
      eyebrow: { type: 'text', label: 'Eyebrow Label' },
      headline: { type: 'text', label: 'Headline' },
      subheadline: { type: 'textarea', label: 'Subheadline' },
      ctaText: { type: 'text', label: 'CTA Button Text' },
      whatsappPhone: { type: 'text', label: 'WhatsApp Phone (with country code, no +)' },
    },
  },
  intro: {
    label: 'Intro Section',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
      </svg>
    ),
    fields: {
      paragraph: { type: 'textarea', label: 'Intro Paragraph' },
    },
  },
  ecosystem: {
    label: 'Ecosystem / Platforms',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    fields: {
      title: { type: 'text', label: 'Section Title' },
    },
    arrayField: {
      key: 'cards',
      label: 'Platform Cards',
      fields: {
        name: { type: 'text', label: 'Card Name' },
        tagline: { type: 'text', label: 'Tagline' },
        description: { type: 'textarea', label: 'Description' },
      },
    },
  },
  whoThisIsFor: {
    label: 'Who This Is For',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    fields: {
      headline: { type: 'textarea', label: 'Headline' },
      ctaText: { type: 'text', label: 'CTA Button Text' },
    },
    arrayField: {
      key: 'bullets',
      label: 'Bullet Points',
      isSimple: true,
    },
    statsField: {
      key: 'stats',
      label: 'Stats (Animated Counters)',
      fields: {
        label: { type: 'text', label: 'Label' },
        value: { type: 'number', label: 'Value' },
        suffix: { type: 'text', label: 'Suffix (e.g. +, Cr)' },
      },
    },
  },
  aboutLeader: {
    label: 'About the Leader',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    fields: {
      headline: { type: 'text', label: 'Headline' },
      body: { type: 'textarea', label: 'Body (use blank lines for paragraphs)', rows: 8 },
    },
  },
  finalCta: {
    label: 'Final CTA Banner',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    fields: {
      headline: { type: 'text', label: 'Headline' },
      body: { type: 'textarea', label: 'Body Text' },
      ctaText: { type: 'text', label: 'CTA Button Text' },
    },
  },
  footer: {
    label: 'Footer',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
      </svg>
    ),
    fields: {
      companyName: { type: 'text', label: 'Company Name' },
      managedBy: { type: 'text', label: 'Managed By' },
      address: { type: 'textarea', label: 'Address' },
      gst: { type: 'text', label: 'GST Number' },
      email: { type: 'text', label: 'Email' },
      phone: { type: 'text', label: 'WhatsApp Number (10 digits, no country code — used for all WhatsApp links site-wide)' },
      callPhone: { type: 'text', label: 'Call Number (for tel: call links — can be different from WhatsApp)' },
    },
    socialFields: {
      label: 'Social Links',
      fields: {
        linkedin: { type: 'text', label: 'LinkedIn URL' },
        facebook: { type: 'text', label: 'Facebook URL' },
        instagram: { type: 'text', label: 'Instagram URL' },
      },
    },
  },
};

export default function DashboardClient() {
  const router = useRouter();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState({});
  const [saved, setSaved] = useState({});
  const [toast, setToast] = useState(null);
  const [openSection, setOpenSection] = useState('hero');

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => { setContent(data); setLoading(false); })
      .catch(() => { setLoading(false); showToast('Failed to load content', 'error'); });
  }, []);

  function showToast(message, type = 'success') {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/dashboard/login');
  }

  async function handleSave(sectionId) {
    setSaving((p) => ({ ...p, [sectionId]: true }));
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sectionId, fields: content[sectionId] }),
      });
      if (!res.ok) throw new Error();
      setSaved((p) => ({ ...p, [sectionId]: true }));
      setTimeout(() => setSaved((p) => ({ ...p, [sectionId]: false })), 2500);
      showToast(`${SECTION_CONFIG[sectionId].label} saved!`);
    } catch {
      showToast('Failed to save. Please try again.', 'error');
    } finally {
      setSaving((p) => ({ ...p, [sectionId]: false }));
    }
  }

  function updateField(sectionId, field, value) {
    setContent((prev) => ({ ...prev, [sectionId]: { ...prev[sectionId], [field]: value } }));
  }

  function updateArrayItem(sectionId, arrayKey, index, field, value) {
    setContent((prev) => {
      const arr = [...prev[sectionId][arrayKey]];
      arr[index] = typeof arr[index] === 'string' ? value : { ...arr[index], [field]: value };
      return { ...prev, [sectionId]: { ...prev[sectionId], [arrayKey]: arr } };
    });
  }

  function addArrayItem(sectionId, arrayKey, template) {
    setContent((prev) => ({ ...prev, [sectionId]: { ...prev[sectionId], [arrayKey]: [...prev[sectionId][arrayKey], template] } }));
  }

  function removeArrayItem(sectionId, arrayKey, index) {
    setContent((prev) => ({ ...prev, [sectionId]: { ...prev[sectionId], [arrayKey]: prev[sectionId][arrayKey].filter((_, i) => i !== index) } }));
  }

  function updateSocialLink(field, value) {
    setContent((prev) => ({ ...prev, footer: { ...prev.footer, socialLinks: { ...prev.footer.socialLinks, [field]: value } } }));
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-navy/20 border-t-gold rounded-full animate-spin" />
          <p className="text-gray-400 text-sm font-medium">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center max-w-sm">
          <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h3 className="font-semibold text-navy mb-1">Content not loaded</h3>
          <p className="text-gray-400 text-sm mb-6">Database may need seeding.</p>
          <button
            onClick={async () => { await fetch('/api/seed', { method: 'POST' }); window.location.reload(); }}
            className="bg-navy text-white font-semibold px-6 py-2.5 rounded-xl text-sm hover:bg-navy-light transition-colors"
          >
            Seed Default Content
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-lg text-white text-sm font-medium transition-all ${
          toast.type === 'error' ? 'bg-red-500 shadow-red-200' : 'bg-emerald-500 shadow-emerald-200'
        }`}>
          {toast.type === 'error' ? (
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          )}
          {toast.message}
        </div>
      )}

      {/* Top navbar */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 rounded-sm bg-gold" />
            </div>
            <div>
              <span className="font-bold text-navy text-sm">NMBTS</span>
              <span className="text-gray-300 mx-2">·</span>
              <span className="text-gray-400 text-sm">Content Manager</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs text-gray-400 hover:text-navy border border-gray-200 hover:border-gray-300 px-3 py-1.5 rounded-lg transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              View Site
            </a>
            <button
              onClick={async () => { await fetch('/api/seed', { method: 'POST' }); window.location.reload(); }}
              className="hidden sm:flex items-center gap-1.5 text-xs text-gray-400 hover:text-navy border border-gray-200 hover:border-gray-300 px-3 py-1.5 rounded-lg transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              Reset Defaults
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-600 border border-red-100 hover:border-red-200 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy">Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">Select a section to edit and save changes to your live website.</p>
        </div>

        <div className="flex gap-6">
          {/* Sidebar nav */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2 sticky top-24">
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-400 px-3 pt-2 pb-3">Sections</p>
              <nav className="space-y-0.5">
                {Object.entries(SECTION_CONFIG).map(([id, config]) => (
                  <button
                    key={id}
                    onClick={() => setOpenSection(id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                      openSection === id
                        ? 'bg-navy text-white shadow-sm'
                        : 'text-gray-500 hover:text-navy hover:bg-gray-50'
                    }`}
                  >
                    <span className={openSection === id ? 'text-gold' : 'text-gray-400'}>{config.icon}</span>
                    {config.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Mobile section tabs */}
          <div className="lg:hidden w-full mb-4">
            <select
              value={openSection}
              onChange={(e) => setOpenSection(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-navy font-medium bg-white focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none"
            >
              {Object.entries(SECTION_CONFIG).map(([id, config]) => (
                <option key={id} value={id}>{config.label}</option>
              ))}
            </select>
          </div>

          {/* Main content panel */}
          <main className="flex-1 min-w-0">
            {Object.entries(SECTION_CONFIG).map(([sectionId, config]) => (
              openSection === sectionId && (
                <div key={sectionId} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  {/* Panel header */}
                  <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-navy/5 rounded-xl flex items-center justify-center text-navy">
                        {config.icon}
                      </div>
                      <div>
                        <h2 className="font-bold text-navy text-base">{config.label}</h2>
                        <p className="text-gray-400 text-xs mt-0.5">Edit fields and save to update live site</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSave(sectionId)}
                      disabled={saving[sectionId]}
                      className={`flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl text-sm transition-all ${
                        saved[sectionId]
                          ? 'bg-emerald-500 text-white shadow-emerald-200 shadow-md'
                          : 'bg-navy hover:bg-navy-light text-white shadow-navy/20 shadow-md hover:shadow-lg'
                      } disabled:opacity-50`}
                    >
                      {saving[sectionId] ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Saving...
                        </>
                      ) : saved[sectionId] ? (
                        <>
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          Saved!
                        </>
                      ) : (
                        <>
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                          </svg>
                          Save Changes
                        </>
                      )}
                    </button>
                  </div>

                  {/* Fields */}
                  <div className="p-6 space-y-5">
                    {/* Regular fields */}
                    {config.fields && Object.entries(config.fields).map(([fieldKey, fieldConfig]) => (
                      <div key={fieldKey}>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-[0.08em] mb-2">{fieldConfig.label}</label>
                        {fieldConfig.type === 'textarea' ? (
                          <textarea
                            value={content[sectionId]?.[fieldKey] || ''}
                            onChange={(e) => updateField(sectionId, fieldKey, e.target.value)}
                            rows={fieldConfig.rows || 3}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none transition-all resize-y bg-gray-50 focus:bg-white"
                          />
                        ) : (
                          <input
                            type={fieldConfig.type}
                            value={content[sectionId]?.[fieldKey] || ''}
                            onChange={(e) => updateField(sectionId, fieldKey, e.target.value)}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none transition-all bg-gray-50 focus:bg-white"
                          />
                        )}
                      </div>
                    ))}

                    {/* Array fields */}
                    {config.arrayField && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between mb-3">
                          <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.08em]">{config.arrayField.label}</label>
                          <button
                            onClick={() => {
                              const template = config.arrayField.isSimple
                                ? ''
                                : Object.fromEntries(Object.keys(config.arrayField.fields).map((k) => [k, '']));
                              addArrayItem(sectionId, config.arrayField.key, template);
                            }}
                            className="flex items-center gap-1.5 text-xs text-gold hover:text-gold-dark font-semibold transition-colors"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add Item
                          </button>
                        </div>
                        <div className="space-y-3">
                          {(content[sectionId]?.[config.arrayField.key] || []).map((item, idx) => (
                            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-4 relative group">
                              <button
                                onClick={() => removeArrayItem(sectionId, config.arrayField.key, idx)}
                                className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
                              >
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                              {config.arrayField.isSimple ? (
                                <input
                                  type="text"
                                  value={item}
                                  onChange={(e) => updateArrayItem(sectionId, config.arrayField.key, idx, null, e.target.value)}
                                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none bg-white pr-8"
                                />
                              ) : (
                                <div className="space-y-3 pr-6">
                                  {Object.entries(config.arrayField.fields).map(([fk, fc]) => (
                                    <div key={fk}>
                                      <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5">{fc.label}</label>
                                      {fc.type === 'textarea' ? (
                                        <textarea
                                          value={item[fk] || ''}
                                          onChange={(e) => updateArrayItem(sectionId, config.arrayField.key, idx, fk, e.target.value)}
                                          rows={2}
                                          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none resize-y bg-white"
                                        />
                                      ) : (
                                        <input
                                          type="text"
                                          value={item[fk] || ''}
                                          onChange={(e) => updateArrayItem(sectionId, config.arrayField.key, idx, fk, e.target.value)}
                                          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none bg-white"
                                        />
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Stats field */}
                    {config.statsField && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between mb-3">
                          <label className="text-xs font-semibold text-gray-500 uppercase tracking-[0.08em]">{config.statsField.label}</label>
                          <button
                            onClick={() => addArrayItem(sectionId, config.statsField.key, { label: '', value: 0, suffix: '' })}
                            className="flex items-center gap-1.5 text-xs text-gold hover:text-gold-dark font-semibold transition-colors"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add Stat
                          </button>
                        </div>
                        <div className="space-y-3">
                          {(content[sectionId]?.[config.statsField.key] || []).map((stat, idx) => (
                            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-4 relative group">
                              <button
                                onClick={() => removeArrayItem(sectionId, config.statsField.key, idx)}
                                className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
                              >
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                              <div className="grid grid-cols-3 gap-3 pr-8">
                                {Object.entries(config.statsField.fields).map(([fk, fc]) => (
                                  <div key={fk}>
                                    <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5">{fc.label}</label>
                                    <input
                                      type={fc.type}
                                      value={stat[fk] ?? ''}
                                      onChange={(e) => {
                                        const val = fc.type === 'number' ? Number(e.target.value) : e.target.value;
                                        updateArrayItem(sectionId, config.statsField.key, idx, fk, val);
                                      }}
                                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none bg-white"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Social links */}
                    {config.socialFields && (
                      <div className="mt-2 pt-4 border-t border-gray-100">
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-[0.08em] mb-3">{config.socialFields.label}</label>
                        <div className="space-y-3">
                          {Object.entries(config.socialFields.fields).map(([fk, fc]) => (
                            <div key={fk}>
                              <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1.5">{fc.label}</label>
                              <input
                                type="text"
                                value={content.footer?.socialLinks?.[fk] || ''}
                                onChange={(e) => updateSocialLink(fk, e.target.value)}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none bg-gray-50 focus:bg-white transition-all"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom save bar */}
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-xs text-gray-400">Changes are saved to the live database immediately.</p>
                    <button
                      onClick={() => handleSave(sectionId)}
                      disabled={saving[sectionId]}
                      className={`flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl text-sm transition-all ${
                        saved[sectionId]
                          ? 'bg-emerald-500 text-white'
                          : 'bg-navy hover:bg-navy-light text-white'
                      } disabled:opacity-50`}
                    >
                      {saving[sectionId] ? (
                        <><div className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />Saving...</>
                      ) : saved[sectionId] ? (
                        <><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Saved!</>
                      ) : (
                        <>Save Changes</>
                      )}
                    </button>
                  </div>
                </div>
              )
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
