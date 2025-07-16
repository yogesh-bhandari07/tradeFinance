export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <div className="w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="CBDC Trade Finance"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-ttp-orange text-white" style={{ backgroundColor: '#F97316' }}>
              Trade Finance
            </span>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-ttp-purple text-white" style={{ backgroundColor: '#994fb2' }}>
              Article
            </span>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-white/20 text-white border-white/30 backdrop-blur-sm">
              CBDC
            </span>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-white/20 text-white border-white/30 backdrop-blur-sm">
              Stablecoins
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            CBDC Integration in Trade Finance: Transforming Global Commerce
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl">
            Exploring the transformative impact of Central Bank Digital Currencies on global trade finance operations and cross-border payments.
          </p>
        </div>
      </div>
    </section>
  );
}
