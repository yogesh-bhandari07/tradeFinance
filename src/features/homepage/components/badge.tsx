export default function BadgeNotification() {
  return (
    <div className="rounded-lg border bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 text-card-foreground shadow-sm">
      <div className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">

          {/* Points, Streak, and Badge */}
          <div className="flex flex-wrap items-center gap-4"  style={{ color: '#F97316' }}>
            {/* Points */}
            <div className="flex items-center gap-2 text-ttp-orange">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-ttp-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
              <span className="font-medium text-black">+150 Points</span>
            </div>

            {/* Streak */}
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
              <span className="text-sm text-gray-600">7 day streak</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-100 text-purple-800 border-transparent hover:bg-primary/80 transition-colors">
              New Badge: CBDC Expert
            </div>
          </div>

          {/* CTA Button */}
          <div className="sm:mt-0 mt-2">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-gray-600">
              View Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
