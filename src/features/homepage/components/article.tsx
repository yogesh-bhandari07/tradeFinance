
export default function RelatedArticles() {
  return (
    <section className="mt-12 mb-8 mx-2 bg-white ">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Related Articles</h2>
        <button className="inline-flex items-center gap-2 text-sm font-medium text-black border  border-gray-300 bg-white hover:bg-gray-100 hover:text-black rounded-md px-3 h-9 transition">
          View All
 <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    className="w-3 h-3 ml-1 fill-current"
    aria-hidden="true"
  >
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
  </svg>        </button>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <article
            key={index}
            className="rounded-lg  bg-white text-gray-900 shadow-sm group hover:shadow-lg transition-shadow cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 p-6 pb-2">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition">
                  {article.category}
                </span>
                <span className="text-xs text-gray-500">{article.readTime}</span>
              </div>

              <h3 className="text-lg font-semibold group-hover:text-orange-600 transition-colors">
                {article.title}
              </h3>
            </div>

            {/* Footer */}
            <div className="p-6 pt-0">
              <p className="text-sm text-gray-600 mb-3">{article.description}</p>
              <div className="flex items-center text-xs text-gray-500">
                <span>{article.author}</span>
                <span className="mx-2">•</span>
                <span>{article.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// Mock Data
const articles = [
  {
    title: "Blockchain Integration in Trade Finance: The Next Frontier",
    description:
      "Exploring how distributed ledger technology is revolutionizing traditional trade finance operations.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Technology",
    readTime: "8 min read",
    author: "Michael Torres",
    date: "January 18, 2024",
  },
  {
    title: "Cross-Border Payment Evolution: SWIFT vs CBDCs",
    description:
      "A comprehensive comparison of traditional SWIFT networks and emerging CBDC payment rails.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Payments",
    readTime: "12 min read",
    author: "Lisa Wong",
    date: "January 16, 2024",
  },
  {
    title: "Regulatory Compliance in the Digital Currency Era",
    description:
      "Navigating the complex regulatory landscape as financial institutions adopt digital currencies.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Regulatory",
    readTime: "10 min read",
    author: "David Kim",
    date: "January 14, 2024",
  },
];
