import AnimatedCounter from './AnimatedCounter';

const bulletIcons = [
  // Referrals - handshake
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
  // Sounding board - chat
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>,
  // Buy/sell/franchise - briefcase
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>,
  // Peers - users group
  <svg key="4" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>,
];

export default function WhoThisIsForSection({ data, whatsappPhone }) {
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hi, I'd like to find the right platform for me.")}`;

  return (
    <section id="who-this-is-for">
      {/* Main content */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Header */}
          <div className="mb-14 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Who This Is For</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight mb-5">
              {data.headline}
            </h2>
          </div>

          {/* Icon cards grid — like "Why Choose Us" in reference */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {data.bullets.map((bullet, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-xl border border-gray-200 hover:border-gold/30 hover:shadow-sm transition-all duration-300 bg-white">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-maroon/10 flex items-center justify-center text-maroon">
                  {bulletIcons[i]}
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed text-[15px]">{bullet}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
            >
              {data.ctaText}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar — like the red stat strip in reference */}
      <div className="bg-maroon">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {data.stats.map((stat, i) => (
              <div key={i} className={`py-4 lg:py-0 ${i < data.stats.length - 1 ? 'lg:border-r lg:border-white/15' : ''}`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
