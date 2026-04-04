'use client';

import { useRef } from 'react';

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

export default function EcosystemCarousel({ cards }) {
  const scrollRef = useRef(null);

  const featured = cards[0];
  const rest = cards.slice(1);

  return (
    <div>
      {/* Featured card (first card - BNI) — large layout like reference */}
      <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Left — colored panel */}
          <div className="bg-navy relative p-10 lg:p-14 flex flex-col justify-center min-h-[280px]">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-light/30 to-transparent" />
            <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-gold mb-6">
                {cardIcons[0]}
              </div>
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-gold/80 block mb-2">FLAGSHIP PLATFORM</span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{featured.name}</h3>
              <p className="text-sm font-medium text-gold">{featured.tagline}</p>
            </div>
          </div>
          {/* Right — description */}
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <p className="text-gray-600 text-base leading-relaxed mb-6">{featured.description}</p>
            <a href={`https://wa.me/919372477160?text=${encodeURIComponent(`Hi, I'd like to know more about ${featured.name}.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-maroon font-semibold text-sm hover:gap-3 transition-all">
              Learn More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </a>
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
              className="snap-start flex-shrink-0 w-[300px] bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className={`${cardColors[i + 1]} p-5 relative`}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent" />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-gold">
                    {cardIcons[i + 1]}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">{card.name}</h3>
                    <p className="text-xs text-gold/80 font-medium">{card.tagline}</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{card.description}</p>
                <a href={`https://wa.me/919372477160?text=${encodeURIComponent(`Hi, I'd like to know more about ${card.name}.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-maroon font-semibold text-xs hover:gap-2.5 transition-all">
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 4-column grid for remaining cards */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-5">
        {rest.map((card, i) => (
          <div
            key={i}
            className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-300"
          >
            <div className={`${cardColors[i + 1]} p-5 relative transition-all duration-300`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-gold mb-3">
                  {cardIcons[i + 1]}
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{card.name}</h3>
                <p className="text-xs font-medium text-gold/80 mt-1">{card.tagline}</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{card.description}</p>
              <a href={`https://wa.me/919372477160?text=${encodeURIComponent(`Hi, I'd like to know more about ${card.name}.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-maroon font-semibold text-xs group-hover:gap-2.5 transition-all">
                Learn More
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
