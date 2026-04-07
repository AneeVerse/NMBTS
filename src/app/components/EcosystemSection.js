import EcosystemCarousel from './EcosystemCarousel';

export default function EcosystemSection({ data }) {
  return (
    <section id="ecosystem" className="py-14 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gold">Our Platforms</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
            {data.title}
          </h2>
        </div>

        <EcosystemCarousel cards={data.cards} />
      </div>
    </section>
  );
}
