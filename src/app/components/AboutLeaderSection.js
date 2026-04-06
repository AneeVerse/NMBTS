import Image from 'next/image';

export default function AboutLeaderSection({ data }) {
  return (
    <section id="about" className="relative bg-gray-50 overflow-hidden py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left — image with overlay details */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Gold corner accents */}
              <div className="absolute -left-3 -top-3 w-16 h-16 pointer-events-none z-10">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold/50" />
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gold/50" />
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                <Image
                  src="/pankaj (1).png"
                  alt="Pankaj Harwansh - Executive Director"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-px w-6 bg-gold" />
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold">Executive Director</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Pankaj Harwansh</h3>
                  {/* Role pills */}
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] font-medium text-white/90">
                      <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m3-6h.75m-.75 3h.75" /></svg>
                      BNI Navi Mumbai
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] font-medium text-white/90">
                      <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3" /></svg>
                      TAB India
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] font-medium text-white/90">
                      <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25" /></svg>
                      30+ Years
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom-right corner accent */}
              <div className="absolute -right-3 -bottom-3 w-16 h-16 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gold/50" />
                <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gold/50" />
              </div>
            </div>
          </div>

          {/* Right — header + bio text */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold">Leadership</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight mb-8 leading-snug">
              {data.headline}
            </h2>

            <div className="space-y-5">
              {data.body.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-600 text-[15px] leading-[1.85]">
                  {para}
                </p>
              ))}
            </div>

            {/* Signature-style accent */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                  <span className="text-sm font-bold text-gold">PH</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">Pankaj Harwansh</div>
                  <div className="text-xs text-gray-500">Founder & Executive Director, NMBTS</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
