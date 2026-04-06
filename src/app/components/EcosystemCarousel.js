'use client';

import { useRef } from 'react';
import Image from 'next/image';

const cardIcons = [
  // BNI - globe/network (filled)
  <svg key="bni" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>,
  // Corporate Connections - handshake
  <svg key="cc" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M16.48 10.41c-.39.39-1.04.39-1.43 0l-4.47-4.46-7.05 7.04-.66-.63a3 3 0 010-4.24l4.24-4.24a3 3 0 014.24 0L16.48 9c.39.39.39 1.02 0 1.41zm.7 2.12a1.003 1.003 0 00-1.42 0l-3.54 3.54a1.003 1.003 0 000 1.42c.39.39 1.02.39 1.41 0l3.54-3.54c.4-.39.4-1.03.01-1.42zm3.54-1.42a1.003 1.003 0 00-1.42 0l-3.54 3.54c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l3.54-3.54c.4-.39.4-1.02.01-1.41zm-2.12 4.24a1.003 1.003 0 00-1.42 0l-1.06 1.06c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.06-1.06c.4-.39.4-1.02.01-1.41z"/></svg>,
  // TAB - shield/mentorship
  <svg key="tab" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>,
  // YBounce - trending up
  <svg key="yb" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>,
  // DealsFlow - swap/exchange
  <svg key="df" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/></svg>,
];

const cardColors = [
  'bg-navy',
  'bg-navy-light',
  'bg-maroon',
  'bg-navy',
  'bg-maroon-dark',
];

export default function EcosystemCarousel({ cards }) {
  const scrollRef = useRef(null);

  const featured = cards[0];
  const rest = cards.slice(1);

  return (
    <div>
      {/* Featured card (first card - BNI) — full-width immersive layout */}
      <div className="mb-8 relative rounded-2xl overflow-hidden shadow-lg group">
        {/* Full-width background image */}
        <div className="relative min-h-[320px] lg:min-h-[420px]">
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
              <p className="text-sm lg:text-base text-white/75 leading-relaxed mb-5 max-w-xl">{featured.description}</p>
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
              <a href={`https://wa.me/919372477160?text=${encodeURIComponent(`Hi, I'd like to know more about ${featured.name}.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-dark text-navy font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:shadow-gold/20">
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
              className="snap-start flex-shrink-0 w-[300px] group bg-navy rounded-2xl p-6 hover:bg-navy-light transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-4">
                {cardIcons[i + 1]}
              </div>
              <h3 className="text-base font-bold text-white leading-snug mb-1">{card.name}</h3>
              <p className="text-xs font-medium text-gold/70 mb-3">{card.tagline}</p>
              <p className="text-sm text-white/60 leading-relaxed mb-5">{card.description}</p>
              <a href={`https://wa.me/919372477160?text=${encodeURIComponent(`Hi, I'd like to know more about ${card.name}.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gold font-semibold text-xs hover:gap-3 transition-all">
                Learn More
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 4-column grid for remaining cards */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-4">
        {rest.map((card, i) => (
          <div
            key={i}
            className="group bg-navy rounded-2xl p-6 hover:bg-navy-light hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-4 group-hover:bg-gold/25 transition-colors duration-300">
              {cardIcons[i + 1]}
            </div>
            <h3 className="text-base font-bold text-white leading-snug mb-1">{card.name}</h3>
            <p className="text-xs font-medium text-gold/70 mb-3">{card.tagline}</p>
            <p className="text-sm text-white/60 leading-relaxed mb-5">{card.description}</p>
            <a href={`https://wa.me/919372477160?text=${encodeURIComponent(`Hi, I'd like to know more about ${card.name}.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gold font-semibold text-xs group-hover:gap-3 transition-all duration-300">
              Learn More
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
