export default function CTA() {
  return (
    <div className="bg-gradient-to-r from-[#0a0864] via-gray-900 to-gray-800 rounded-xl p-8 text-center text-white ">
      <h3 className="text-2xl font-bold mb-2">Stay Ahead of the Curve</h3>
      <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
        Get exclusive insights, expert analysis, and breaking news in trade finance delivered to your inbox
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        {/* Subscribe Button */}
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-ttp-orange hover:bg-ttp-orange/90 text-white transition-colors flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ttp-orange"  style={{ backgroundColor: '#F97316' }}>
          Subscribe to Newsletter
        </button>

        {/* Explore Button */}
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 border border-white text-white hover:bg-white hover:text-ttp-charcoal transition-colors flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
          Explore Courses
        </button>
      </div>
    </div>
  );
}
