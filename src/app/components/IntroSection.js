export default function IntroSection({ data }) {
  return (
    <section className="py-14 lg:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="h-px w-16 bg-gold" />
          </div>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light">
            {data.paragraph}
          </p>
        </div>
      </div>
    </section>
  );
}
