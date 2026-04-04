export default function HeroSection({ data }) {
  const whatsappUrl = `https://wa.me/${data.whatsappPhone}?text=${encodeURIComponent("Hi, I'd like to know more about NMBTS.")}`;

  return (
    <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center bg-navy overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-navy-dark/50 to-transparent" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        {/* Accent shapes */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-navy-light/50 rounded-full blur-[120px]" />
        {/* Decorative line */}
        <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-gold via-gold/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-3xl">
          {/* Top label */}
          <div className="inline-flex items-center gap-2.5 mb-8">
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Navi Mumbai Business & Training Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-white leading-[1.15] mb-6 tracking-tight">
            {data.headline}
          </h1>

          <p className="text-base lg:text-lg text-white/70 max-w-2xl mb-10 leading-relaxed">
            {data.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
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
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white/90 hover:text-white font-medium px-7 py-3.5 rounded-lg text-sm transition-all duration-200 hover:bg-white/5"
            >
              Explore Platforms
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold/50 to-transparent" />
    </section>
  );
}
