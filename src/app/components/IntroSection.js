export default function IntroSection({ data }) {
  return (
    <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-gold" />
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gold">About NMBTS</span>
          <div className="h-px w-8 bg-gold" />
        </div>
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light max-w-3xl mx-auto">
          {data.paragraph}
        </p>
      </div>
    </section>
  );
}
