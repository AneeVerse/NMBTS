import Image from 'next/image';

export default function FinalCTASection({ data, whatsappPhone }) {
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hi, I'd like to learn more about NMBTS.")}`;

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80&auto=format&fit=crop"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy/90" />
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/80 to-navy-light/90" />
          </div>

          {/* Gold accent corners */}
          <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none z-10">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gold/40" />
            <div className="absolute top-0 left-0 w-[2px] h-full bg-gold/40" />
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none z-10">
            <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gold/40" />
            <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gold/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-20">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left — text */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-10 bg-gold" />
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold">Get Started</span>
                </div>
                <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 tracking-tight leading-snug">
                  {data.headline}
                </h2>
                <p className="text-base text-white/60 leading-relaxed max-w-lg">
                  {data.body}
                </p>
              </div>

              {/* Right — CTA card */}
              <div className="lg:col-span-5">
                <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-gold" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <p className="text-sm text-white/50 mb-5">No pressure, no pitch - just clarity.</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-3.5 rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    {data.ctaText}
                  </a>
                  <p className="text-[11px] text-white/30 mt-3">Typically replies within 2 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
