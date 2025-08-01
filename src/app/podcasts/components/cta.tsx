import React from "react";

export const PodcastSubscriptionCTA = () => {
  return (
    <div className="bg-gradient-to-r from-[#6C4B9E] to-[#F15A29] text-white rounded-lg p-8 mb-8">
  <div className="text-center mb-6">
    <h2 className="text-2xl font-bold mb-3">Listen to Us Everywhere</h2>
    <p className="text-white/90 text-lg">Subscribe to TTP Podcasts on your favorite platform and never miss an episode</p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 bg-[#111827] hover:bg-[#1f2937] text-white border-0 h-16 flex flex-col items-center justify-center gap-1 text-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
        <path d="M12 18h.01"></path>
      </svg>
      <span className="text-sm font-medium">Apple Podcasts</span>
    </a>

    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 bg-[#1DB954] hover:bg-[#17a34a] text-white border-0 h-16 flex flex-col items-center justify-center gap-1 text-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 18V5l12-2v13"></path>
        <circle cx="6" cy="18" r="3"></circle>
        <circle cx="18" cy="16" r="3"></circle>
      </svg>
      <span className="text-sm font-medium">Spotify</span>
    </a>

    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 bg-[#1A73E8] hover:bg-[#1666cc] text-white border-0 h-16 flex flex-col items-center justify-center gap-1 text-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
      </svg>
      <span className="text-sm font-medium">Google Podcasts</span>
    </a>

    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 bg-[#F15A29] hover:bg-[#e15022] text-white border-0 h-16 flex flex-col items-center justify-center gap-1 text-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 11a9 9 0 0 1 9 9"></path>
        <path d="M4 4a16 16 0 0 1 16 16"></path>
        <circle cx="5" cy="19" r="1"></circle>
      </svg>
      <span className="text-sm font-medium">RSS Feed</span>
    </a>
  </div>

  <div className="mt-6 text-center">
    <div className="flex items-center justify-center gap-4 text-sm text-white/80">
      <div className="flex items-center gap-2">
        {['Weekly Episodes', 'Expert Insights', 'Industry Leaders'].map((label) => (
          <div
            key={label}
            className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 bg-white/20 text-white border-0"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  
  );
};
