export default function NewsletterSignup() {
  return (
    <div className="rounded-lg border bg-gradient-to-br from-purple-600 to-purple-900 text-white shadow-lg">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          {/* Mail Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-orange-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <h3 className="font-semibold text-sm">Stay Updated</h3>
        </div>

        {/* Description */}
        <p className="text-xs text-white/90 mb-3">
          Get the latest insights on trade finance, treasury management, and global payments delivered to your inbox.
        </p>

        {/* Input & Button */}
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-8 text-xs rounded-md px-3 py-2 bg-white/10 border border-white/20 placeholder:text-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          />
          <button className="w-full h-8 px-4 py-2 text-xs font-medium rounded-md bg-orange-500 hover:bg-orange-400 transition text-white">
            Subscribe Now
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-white/70 mt-2">Join 25,000+ professionals. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
