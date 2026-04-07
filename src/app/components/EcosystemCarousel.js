'use client';

import { useRef } from 'react';
import Image from 'next/image';

const cardIcons = [
  // BNI - people/network
  <svg key="bni" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
  // Corporate Connections - building
  <svg key="cc" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" /></svg>,
  // TAB - lightbulb
  <svg key="tab" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>,
  // YBounce - chart
  <svg key="yb" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
  // DealsFlow - arrows exchange
  <svg key="df" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>,
];

const cardColors = [
  'bg-navy',
  'bg-navy-light',
  'bg-maroon',
  'bg-navy',
  'bg-maroon-dark',
];

export default function EcosystemCarousel({ cards, whatsappPhone }) {
  const scrollRef = useRef(null);

  const featured = cards[0];
  const rest = cards.slice(1);

  return (
    <div>
      {/* Featured card (first card - BNI) — full-width immersive layout */}
      <div className="mb-8 relative rounded-2xl overflow-hidden shadow-lg group">
        {/* Full-width background image */}
        <div className="relative min-h-[440px] lg:min-h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=85&auto=format&fit=crop"
            alt="BNI Navi Mumbai networking"
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

          {/* Content overlay */}
          <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between">
            {/* Top row — label + stats */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-gold/20 backdrop-blur-sm border border-gold/30 flex items-center justify-center text-gold">
                  {cardIcons[0]}
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold block">Flagship Platform</span>
                  <span className="text-sm text-white/70 font-medium">{featured.tagline}</span>
                </div>
              </div>
              {/* Stats row — top right */}
              <div className="hidden lg:flex items-center gap-5">
                <div className="flex items-center gap-6 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-6 py-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white leading-none">19</div>
                    <div className="text-[9px] text-white/60 uppercase tracking-wider mt-1">Chapters</div>
                  </div>
                  <div className="h-8 w-px bg-white/15" />
                  <div className="text-center">
                    <div className="text-lg font-bold text-white leading-none">750+</div>
                    <div className="text-[9px] text-white/60 uppercase tracking-wider mt-1">Members</div>
                  </div>
                  <div className="h-8 w-px bg-white/15" />
                  <div className="text-center">
                    <div className="text-lg font-bold text-white leading-none">2,500+Cr</div>
                    <div className="text-[9px] text-white/60 uppercase tracking-wider mt-1">Business</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row — name + description + CTA */}
            <div className="max-w-2xl">
              <h3 className="text-2xl lg:text-4xl font-bold text-white mb-3 tracking-tight">{featured.name}</h3>
              <p className="hidden sm:block text-sm lg:text-base text-white/75 leading-relaxed mb-5 max-w-xl">{featured.description}</p>
              {/* Mobile stats */}
              <div className="flex lg:hidden items-center gap-5 mb-5">
                <div>
                  <span className="text-lg font-bold text-gold">19</span>
                  <span className="text-xs text-white/60 ml-1">Chapters</span>
                </div>
                <div>
                  <span className="text-lg font-bold text-gold">750+</span>
                  <span className="text-xs text-white/60 ml-1">Members</span>
                </div>
              </div>
              <a href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(`Hi, I'd like to know more about ${featured.name}.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-dark text-navy font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:shadow-gold/20">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: horizontal scroll for remaining cards */}
      <div className="lg:hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
        >
          {rest.map((card, i) => (
            <div
              key={i}
              className="snap-start flex-shrink-0 w-[300px] group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-gold/30 transition-all duration-300 relative"
            >
              <div className="absolute top-0 left-0 w-1 h-12 bg-gold rounded-r-full" />
              <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center text-navy mb-4">
                {cardIcons[i + 1]}
              </div>
              <h3 className="text-base font-bold text-navy leading-snug mb-1">{card.name}</h3>
              <p className="text-xs font-medium text-gold mb-3">{card.tagline}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{card.description}</p>
              <a href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(`Hi, I'd like to know more about ${card.name}.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-navy font-semibold text-xs hover:text-gold hover:gap-2.5 transition-all">
                Learn More
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 4-column grid for remaining cards */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-5">
        {rest.map((card, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 relative"
          >
            {/* Gold accent bar */}
            <div className="absolute top-0 left-0 w-1 h-12 bg-gold rounded-r-full" />
            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center text-navy mb-4 group-hover:bg-gold/10 group-hover:text-gold transition-colors duration-300">
              {cardIcons[i + 1]}
            </div>
            {/* Name + tagline */}
            <h3 className="text-base font-bold text-navy leading-snug mb-1">{card.name}</h3>
            <p className="text-xs font-medium text-gold mb-3">{card.tagline}</p>
            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed mb-5">{card.description}</p>
            {/* CTA */}
            <a href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(`Hi, I'd like to know more about ${card.name}.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-navy font-semibold text-xs group-hover:text-gold group-hover:gap-2.5 transition-all">
              Learn More
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
