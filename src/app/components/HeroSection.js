import Image from 'next/image';

export default function HeroSection({ data }) {
  const whatsappUrl = `https://wa.me/${data.whatsappPhone}?text=${encodeURIComponent("Hi, I'd like to know more about NMBTS.")}`;

  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-navy overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        {/* Accent glows */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gold/8 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-navy-light/50 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left — text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-7">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold">Navi Mumbai Business & Training Solutions</span>
            </div>

            <h1 className="text-[32px] sm:text-4xl lg:text-[54px] font-bold text-white leading-[1.1] mb-6 tracking-tight">
              {data.headline}
            </h1>

            <p className="text-base lg:text-lg text-white/70 max-w-2xl mb-9 leading-relaxed">
              {data.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-dark text-navy font-semibold px-7 py-3.5 rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {data.ctaText}
              </a>
              <a
                href="#ecosystem"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/90 hover:text-white font-medium px-7 py-3.5 rounded-lg text-sm transition-all duration-200 hover:bg-white/5"
              >
                Explore Platforms
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-8">
              <div>
                <div className="text-2xl font-bold text-gold">750<span className="text-gold/60">+</span></div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-0.5">Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold">19</div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-0.5">BNI Chapters</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold">30<span className="text-gold/60">+</span></div>
                <div className="text-xs text-white/60 uppercase tracking-wider mt-0.5">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right — image */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-gold/20 rounded-2xl" />
              <div className="absolute -inset-6 border border-white/5 rounded-2xl" />

              {/* Main image */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85&auto=format&fit=crop"
                  alt="Business professionals networking"
                  fill
                  sizes="(max-width: 1024px) 0vw, 40vw"
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
              </div>

              {/* Floating badge card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-2xl p-4 flex items-center gap-3 max-w-[240px]">
                <div className="w-11 h-11 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-navy">Trusted Platform</div>
                  <div className="text-[11px] text-gray-500">2,500+ Cr Generated</div>
                </div>
              </div>

              {/* Floating top-right accent */}
              <div className="absolute -top-4 -right-4 bg-gold rounded-xl shadow-xl p-4 text-navy">
                <div className="text-2xl font-bold leading-none">5</div>
                <div className="text-[10px] font-semibold uppercase tracking-wider mt-1">Platforms</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
