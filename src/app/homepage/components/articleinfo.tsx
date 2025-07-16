export default function ArticleInfo() {
  return (
    <div className="  rounded-lg border text-card-foreground bg-white shadow-sm">
    <div className="p-4  ">
      <h3 className="font-semibold text-sm text-gray-900 mb-3">Article Info</h3>

      {/* Date, Read Time, Level */}
      <div className="space-y-2 text-xs">
        <div className="flex items-center gap-2 text-gray-600">
          {/* Calendar Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
          </svg>
          <span>January 15, 2024</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          {/* Clock Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>15–18 minutes</span>
        </div>

        {/* Level */}
        <div className="mt-2">
          <span className="inline-flex items-center rounded-full bg-orange-500 text-white border font-semibold text-xs px-2 py-1">
            Expert Level
          </span>
        </div>
      </div>

      {/* Share + Save Buttons */}
      <div className="flex gap-1 mt-3">
        {/* Share */}
        <button className="inline-flex items-center justify-center gap-2 text-xs text-black font-medium border bg-white hover:bg-gray-50 hover:text-black rounded-md px-3 flex-1 h-8 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          Share
        </button>

        {/* Save */}
        <button className="inline-flex items-center justify-center gap-2 text-xs font-medium text-black border  bg-white hover:bg-gray-50 hover:text-black rounded-md px-3 flex-1 h-8 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
          </svg>
          Save
        </button>
      </div>
    </div>
    </div>
  );
}
