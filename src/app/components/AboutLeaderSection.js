export default function AboutLeaderSection({ data }) {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Leadership</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
            {data.headline}
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Leader profile card */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full flex flex-col">
              {/* Avatar area */}
              <div className="bg-navy p-8 text-center relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-navy-light/30 to-transparent" />
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gold/30">
                    <span className="text-3xl font-bold text-gold">PH</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Pankaj Harwansh</h3>
                  <p className="text-sm text-gold/80 mt-1 font-medium">Executive Director</p>
                </div>
              </div>
              {/* Info */}
              <div className="p-6 space-y-3 flex-1">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-maroon flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" /></svg>
                  BNI Navi Mumbai
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-maroon flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                  TAB India (Mumbai)
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-maroon flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                  30+ Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Bio content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 lg:p-10 h-full flex flex-col justify-center">
              {data.body.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-600 text-[15px] leading-[1.8] mb-5 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
