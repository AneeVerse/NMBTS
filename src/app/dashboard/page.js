'use client';

import { useState, useEffect } from 'react';

const SECTION_CONFIG = {
  hero: {
    label: 'Hero Section',
    fields: {
      headline: { type: 'text', label: 'Headline' },
      subheadline: { type: 'textarea', label: 'Subheadline' },
      ctaText: { type: 'text', label: 'CTA Button Text' },
      whatsappPhone: { type: 'text', label: 'WhatsApp Phone (with country code, no +)' },
    },
  },
  intro: {
    label: 'Intro Section',
    fields: {
      paragraph: { type: 'textarea', label: 'Intro Paragraph' },
    },
  },
  ecosystem: {
    label: 'The Ecosystem (5 Cards)',
    fields: {
      title: { type: 'text', label: 'Section Title' },
    },
    arrayField: {
      key: 'cards',
      label: 'Ecosystem Cards',
      fields: {
        name: { type: 'text', label: 'Card Name' },
        tagline: { type: 'text', label: 'Tagline' },
        description: { type: 'textarea', label: 'Description' },
      },
    },
  },
  whoThisIsFor: {
    label: 'Who This Is For',
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
    fields: {
      headline: { type: 'text', label: 'Headline' },
      body: { type: 'textarea', label: 'Body (use blank lines for paragraphs)', rows: 8 },
    },
  },
  finalCta: {
    label: 'Final CTA Banner',
    fields: {
      headline: { type: 'text', label: 'Headline' },
      body: { type: 'textarea', label: 'Body Text' },
      ctaText: { type: 'text', label: 'CTA Button Text' },
    },
  },
  footer: {
    label: 'Footer',
    fields: {
      companyName: { type: 'text', label: 'Company Name' },
      managedBy: { type: 'text', label: 'Managed By' },
      address: { type: 'textarea', label: 'Address' },
      gst: { type: 'text', label: 'GST Number' },
      email: { type: 'text', label: 'Email' },
      phone: { type: 'text', label: 'Phone' },
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

export default function DashboardPage() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState({});
  const [toast, setToast] = useState(null);
  const [openSection, setOpenSection] = useState('hero');

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        showToast('Failed to load content', 'error');
      });
  }, []);

  function showToast(message, type = 'success') {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }

  async function handleSave(sectionId) {
    setSaving((prev) => ({ ...prev, [sectionId]: true }));
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sectionId, fields: content[sectionId] }),
      });
      if (!res.ok) throw new Error('Failed');
      showToast(`${SECTION_CONFIG[sectionId].label} saved successfully!`);
    } catch {
      showToast('Failed to save. Please try again.', 'error');
    } finally {
      setSaving((prev) => ({ ...prev, [sectionId]: false }));
    }
  }

  function updateField(sectionId, field, value) {
    setContent((prev) => ({
      ...prev,
      [sectionId]: { ...prev[sectionId], [field]: value },
    }));
  }

  function updateArrayItem(sectionId, arrayKey, index, field, value) {
    setContent((prev) => {
      const arr = [...prev[sectionId][arrayKey]];
      if (typeof arr[index] === 'string') {
        arr[index] = value;
      } else {
        arr[index] = { ...arr[index], [field]: value };
      }
      return { ...prev, [sectionId]: { ...prev[sectionId], [arrayKey]: arr } };
    });
  }

  function addArrayItem(sectionId, arrayKey, template) {
    setContent((prev) => {
      const arr = [...prev[sectionId][arrayKey], template];
      return { ...prev, [sectionId]: { ...prev[sectionId], [arrayKey]: arr } };
    });
  }

  function removeArrayItem(sectionId, arrayKey, index) {
    setContent((prev) => {
      const arr = prev[sectionId][arrayKey].filter((_, i) => i !== index);
      return { ...prev, [sectionId]: { ...prev[sectionId], [arrayKey]: arr } };
    });
  }

  function updateSocialLink(field, value) {
    setContent((prev) => ({
      ...prev,
      footer: {
        ...prev.footer,
        socialLinks: { ...prev.footer.socialLinks, [field]: value },
      },
    }));
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-gold border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500">Loading content...</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-600 mb-4">Failed to load content. Make sure the database is seeded.</p>
        <button
          onClick={async () => {
            await fetch('/api/seed', { method: 'POST' });
            window.location.reload();
          }}
          className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 py-2.5 rounded-lg transition-colors"
        >
          Seed Default Content
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-5 py-3 rounded-lg shadow-lg text-white text-sm font-medium transition-all ${
          toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'
        }`}>
          {toast.message}
        </div>
      )}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-navy">Content Manager</h2>
          <p className="text-gray-500 text-sm mt-1">Edit any section below and click Save to update the website.</p>
        </div>
        <button
          onClick={async () => {
            await fetch('/api/seed', { method: 'POST' });
            window.location.reload();
          }}
          className="text-sm text-gray-400 hover:text-navy border border-gray-200 hover:border-gray-300 px-4 py-2 rounded-lg transition-colors"
        >
          Reset to Defaults
        </button>
      </div>

      {/* Sections accordion */}
      <div className="space-y-4">
        {Object.entries(SECTION_CONFIG).map(([sectionId, config]) => (
          <div key={sectionId} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Accordion header */}
            <button
              onClick={() => setOpenSection(openSection === sectionId ? null : sectionId)}
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${openSection === sectionId ? 'bg-gold' : 'bg-gray-300'}`} />
                <span className="font-semibold text-navy">{config.label}</span>
              </div>
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform ${openSection === sectionId ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {/* Accordion body */}
            {openSection === sectionId && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="space-y-4 mt-4">
                  {/* Regular fields */}
                  {config.fields && Object.entries(config.fields).map(([fieldKey, fieldConfig]) => (
                    <div key={fieldKey}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{fieldConfig.label}</label>
                      {fieldConfig.type === 'textarea' ? (
                        <textarea
                          value={content[sectionId]?.[fieldKey] || ''}
                          onChange={(e) => updateField(sectionId, fieldKey, e.target.value)}
                          rows={fieldConfig.rows || 3}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all resize-y"
                        />
                      ) : (
                        <input
                          type={fieldConfig.type}
                          value={content[sectionId]?.[fieldKey] || ''}
                          onChange={(e) => updateField(sectionId, fieldKey, e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all"
                        />
                      )}
                    </div>
                  ))}

                  {/* Array fields (cards, bullets) */}
                  {config.arrayField && (
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-navy mb-3">{config.arrayField.label}</h4>
                      <div className="space-y-3">
                        {(content[sectionId]?.[config.arrayField.key] || []).map((item, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200 relative">
                            <button
                              onClick={() => removeArrayItem(sectionId, config.arrayField.key, idx)}
                              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                              title="Remove"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                            {config.arrayField.isSimple ? (
                              <input
                                type="text"
                                value={item}
                                onChange={(e) => updateArrayItem(sectionId, config.arrayField.key, idx, null, e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none"
                              />
                            ) : (
                              <div className="space-y-2 pr-6">
                                {Object.entries(config.arrayField.fields).map(([fk, fc]) => (
                                  <div key={fk}>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">{fc.label}</label>
                                    {fc.type === 'textarea' ? (
                                      <textarea
                                        value={item[fk] || ''}
                                        onChange={(e) => updateArrayItem(sectionId, config.arrayField.key, idx, fk, e.target.value)}
                                        rows={2}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none resize-y"
                                      />
                                    ) : (
                                      <input
                                        type="text"
                                        value={item[fk] || ''}
                                        onChange={(e) => updateArrayItem(sectionId, config.arrayField.key, idx, fk, e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none"
                                      />
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => {
                          const template = config.arrayField.isSimple
                            ? ''
                            : Object.fromEntries(Object.keys(config.arrayField.fields).map((k) => [k, '']));
                          addArrayItem(sectionId, config.arrayField.key, template);
                        }}
                        className="mt-3 text-sm text-gold hover:text-gold-dark font-medium flex items-center gap-1 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add Item
                      </button>
                    </div>
                  )}

                  {/* Stats field (whoThisIsFor) */}
                  {config.statsField && (
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-navy mb-3">{config.statsField.label}</h4>
                      <div className="space-y-3">
                        {(content[sectionId]?.[config.statsField.key] || []).map((stat, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200 relative">
                            <button
                              onClick={() => removeArrayItem(sectionId, config.statsField.key, idx)}
                              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                              title="Remove"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                            <div className="grid grid-cols-3 gap-3 pr-6">
                              {Object.entries(config.statsField.fields).map(([fk, fc]) => (
                                <div key={fk}>
                                  <label className="block text-xs font-medium text-gray-500 mb-1">{fc.label}</label>
                                  <input
                                    type={fc.type}
                                    value={stat[fk] ?? ''}
                                    onChange={(e) => {
                                      const val = fc.type === 'number' ? Number(e.target.value) : e.target.value;
                                      updateArrayItem(sectionId, config.statsField.key, idx, fk, val);
                                    }}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => addArrayItem(sectionId, config.statsField.key, { label: '', value: 0, suffix: '' })}
                        className="mt-3 text-sm text-gold hover:text-gold-dark font-medium flex items-center gap-1 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add Stat
                      </button>
                    </div>
                  )}

                  {/* Social links (footer) */}
                  {config.socialFields && (
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-navy mb-3">{config.socialFields.label}</h4>
                      <div className="space-y-3">
                        {Object.entries(config.socialFields.fields).map(([fk, fc]) => (
                          <div key={fk}>
                            <label className="block text-xs font-medium text-gray-500 mb-1">{fc.label}</label>
                            <input
                              type="text"
                              value={content.footer?.socialLinks?.[fk] || ''}
                              onChange={(e) => updateSocialLink(fk, e.target.value)}
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Save button */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
                  <button
                    onClick={() => handleSave(sectionId)}
                    disabled={saving[sectionId]}
                    className="bg-navy hover:bg-navy-light text-white font-medium px-6 py-2.5 rounded-lg transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    {saving[sectionId] ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Save {config.label}
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
