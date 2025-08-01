import Link from "next/link";

export default function WebinarDetailPage() {
  return (
    <main className="pt-8 bg-white text-ttp-charcoal border-gray-400">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link className="hover:text-primary" href="/webinars">
            Webinars
          </Link>
          <span>/</span>
          <span className="text-primary">Webinar Details</span>
        </div>
      </div>
      {/* Main Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* MAIN CONTENT */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {/* Top Banner */}
                <div
                  className="bg-gradient-to-r rounded-lg p-8"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(126,63,242,0.10), rgba(39,195,136,0.10))",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 touch-manipulation select-none border-transparent font-medium"
                      style={{ background: "#27C388", color: "#fff" }}
                    >
                      Recording Available
                    </div>
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 touch-manipulation select-none text-foreground border-border hover:bg-accent hover:text-accent-foreground"
                      style={{
                        borderColor: "#E5E7EB" // gray-200
                      }}>
                      90 min
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold mb-4 text-foreground">
                    Digital Transformation in Trade Finance
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    Expert panel discussion exploring how digital technologies are revolutionizing traditional trade finance processes and creating new opportunities for financial institutions.
                  </p>
                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      {/* Calendar Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="lucide lucide-calendar h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <span>2024-02-15 at 14:00 GMT</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* Clock */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="lucide lucide-clock h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>90 min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* Users */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="lucide lucide-users h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      <span>1,250 attendees</span>
                    </div>
                  </div>
                </div>
                {/* Tabbed Sections (just the 'Sections' tab open) */}
                <div>
                  {/* Tabs */}
                  <div
                    role="tablist"
                    aria-orientation="horizontal"
                    className="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-5"
                    tabIndex={0}
                    style={{ outline: "none" }}
                  >
                    {["Sections", "Article", "Speakers", "Summary", "Key Takeaways"].map(
                      (tab, idx) => (
                        <button
                          key={tab}
                          type="button"
                          role="tab"
                          aria-selected={idx === 0}
                          aria-controls={`tab-content-${tab.toLowerCase().replace(/\s/g, "")}`}
                          data-state={idx === 0 ? "active" : "inactive"}
                          id={`tab-trigger-${tab.toLowerCase().replace(/\s/g, "")}`}
                          className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm${
                            idx === 0 ? " bg-background text-foreground shadow-sm" : ""
                          }`}
                          tabIndex={idx === 0 ? 0 : -1}
                          data-orientation="horizontal"
                          data-radix-collection-item=""
                        >
                          {tab}
                        </button>
                      )
                    )}
                  </div>
                  {/* Only first tab content open */}
                  <div
                    data-state="active"
                    data-orientation="horizontal"
                    role="tabpanel"
                    aria-labelledby="tab-trigger-sections"
                    id="tab-content-sections"
                    tabIndex={0}
                    className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-6"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Main Section Play Card & Details */}
                      <div className="lg:col-span-2">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                          <div className="p-0">
                            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="text-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    className="lucide lucide-play h-16 w-16 text-primary mb-4 mx-auto"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                  >
                                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                  </svg>
                                  <h3 className="text-lg font-semibold mb-2">
                                    Introduction &amp; Current State
                                  </h3>
                                  <p className="text-sm text-muted-foreground mb-4">
                                    Overview of traditional trade finance challenges and digital opportunities
                                  </p>
                                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      className="lucide lucide-play h-4 w-4 mr-2"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      viewBox="0 0 24 24"
                                    >
                                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                    </svg>
                                    Play Section
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Section Details */}
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-4">
                          <div className="flex flex-col space-y-1.5 p-6">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold tracking-tight text-lg">Introduction &amp; Current State</h3>
                              <div className="rounded-full border px-2.5 py-0.5 text-xs font-semibold flex items-center gap-1"
                                style={{
                                  borderColor: "#E5E7EB"
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  className="lucide lucide-clock h-3 w-3"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  viewBox="0 0 24 24"
                                >
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                20 minutes
                              </div>
                            </div>
                          </div>
                          <div className="p-6 pt-0">
                            <p className="text-muted-foreground mb-4">
                              Overview of traditional trade finance challenges and digital opportunities
                            </p>
                            <div>
                              <h4 className="font-semibold mb-2">Key Points:</h4>
                              <ul className="space-y-1">
                                {[
                                  "Legacy system limitations",
                                  "Paper-based process inefficiencies",
                                  "Regulatory compliance challenges",
                                ].map((text) => (
                                  <li
                                    key={text}
                                    className="flex items-start gap-2 text-sm"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      className="lucide lucide-circle-check-big h-4 w-4 text-primary mt-0.5 flex-shrink-0"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                      <path d="m9 11 3 3L22 4"></path>
                                    </svg>
                                    <span>{text}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Sidebar: Webinar Sections menu */}
                      <div className="lg:col-span-1">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                          <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="text-2xl font-semibold leading-none tracking-tight">Webinar Sections</h3>
                          </div>
                          <div className="p-0">
                            <div className="space-y-1">
                              {/* Section Buttons */}
                              {[
                                {
                                  title: "Introduction & Current State",
                                  summary: "Overview of traditional trade finance challenges and digital opportunities",
                                  duration: "20 minutes",
                                  start: "00:00",
                                  active: true,
                                },
                                {
                                  title: "Blockchain & DLT Solutions",
                                  summary: "Deep dive into distributed ledger technologies and their applications",
                                  duration: "25 minutes",
                                  start: "20:00",
                                },
                                {
                                  title: "AI & Automation",
                                  summary: "Artificial intelligence applications in trade finance processes",
                                  duration: "20 minutes",
                                  start: "45:00",
                                },
                                {
                                  title: "Implementation Strategies",
                                  summary: "Best practices for successful digital transformation",
                                  duration: "15 minutes",
                                  start: "65:00",
                                },
                                {
                                  title: "Q&A Session",
                                  summary: "Interactive discussion with audience questions",
                                  duration: "10 minutes",
                                  start: "80:00",
                                },
                              ].map((section, idx) => (
                                <button
                                  key={section.title}
                                  className={
                                    "w-full text-left p-4 border-b last:border-b-0 hover:bg-muted/50 transition-colors " +
                                    (section.active
                                      ? "bg-[#7E3FF2]/10 border-l-4 border-l-[#7E3FF2]"
                                      : "")
                                  }
                                  style={section.active ? {
                                    background:
                                      "linear-gradient(to right, rgba(126,63,242,0.10), rgba(39,195,136,0.10))",
                                    borderLeft: "4px solid #7E3FF2",
                                  } : {}}
                                >
                                  <div className="flex items-start justify-between gap-2">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-medium text-muted-foreground">
                                          Section {idx + 1}
                                        </span>
                                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold text-xs transition-colors text-foreground border-border hover:bg-accent hover:text-accent-foreground"
                                          style={{
                                            borderColor: "#E5E7EB"
                                          }}
                                        >
                                          {section.duration}
                                        </div>
                                      </div>
                                      <h4 className="font-medium text-sm mb-1">
                                        {section.title}
                                      </h4>
                                      <p className="text-xs text-muted-foreground line-clamp-2">
                                        {section.summary}
                                      </p>
                                      <div className="text-xs text-muted-foreground mt-1">
                                        Starts at {section.start}
                                      </div>
                                    </div>
                                    {section.active ? (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        className="lucide lucide-play h-4 w-4 text-primary flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                      >
                                        <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                      </svg>
                                    ) : null}
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Other tabs content would go here, hidden */}
                </div>
                {/* Event Sponsors Sidebar Section */}
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        className="lucide lucide-star h-5 w-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      Event Sponsors
                    </h3>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="space-y-8">
                      {/* Title Sponsor */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
                            Title Sponsor
                          </div>
                        </div>
                        <div className="grid gap-4 grid-cols-1">
                          <div className="rounded-lg text-card-foreground shadow-sm border transition-all duration-200 hover:shadow-md border-yellow-200 bg-yellow-50/50">
                            <div className="p-6">
                              <div className="space-y-4">
                                <div className="flex items-center justify-center h-20">
                                  <img
                                    src="/lovable-uploads/9c98d1b2-d787-47f5-b398-749a4ba861f7.png"
                                    alt="TechFlow Systems logo"
                                    className="max-w-full object-contain max-h-20"
                                  />
                                </div>
                                <div className="text-center space-y-2">
                                  <h3 className="font-semibold text-lg">TechFlow Systems</h3>
                                  <p className="text-sm text-muted-foreground">
                                    Leading provider of digital trade finance solutions
                                  </p>
                                </div>
                                <a
                                  href="https://techflowsystems.com"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="lucide lucide-external-link h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                  Visit Website
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Platinum Sponsor */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium bg-gradient-to-r from-slate-400 to-slate-600 text-white">
                            Platinum Sponsor
                          </div>
                        </div>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                          <div className="rounded-lg bg-card text-card-foreground shadow-sm border transition-all duration-200 hover:shadow-md">
                            <div className="p-6">
                              <div className="space-y-4">
                                <div className="flex items-center justify-center h-16">
                                  <img
                                    src="/lovable-uploads/a3d9e715-baa8-4e8b-86db-3930417e6d02.png"
                                    alt="Global Bank Solutions logo"
                                    className="max-w-full object-contain max-h-16"
                                  />
                                </div>
                                <div className="text-center space-y-2">
                                  <h3 className="font-semibold text-base">Global Bank Solutions</h3>
                                  <p className="text-sm text-muted-foreground">Enterprise banking technology platform</p>
                                </div>
                                <a href="https://globalbanksolutions.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="lucide lucide-external-link h-4 w-4"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                  Visit Website
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Gold Sponsor */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium bg-gradient-to-r from-yellow-300 to-yellow-500 text-black">
                            Gold Sponsor
                          </div>
                        </div>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                          <div className="rounded-lg bg-card text-card-foreground shadow-sm border transition-all duration-200 hover:shadow-md">
                            <div className="p-6">
                              <div className="space-y-4">
                                <div className="flex items-center justify-center h-16">
                                  <img src="/lovable-uploads/bf7467f5-bed0-45fc-bfe9-1004dd8e300e.png" alt="FinanceAI Corp logo" className="max-w-full object-contain max-h-16" />
                                </div>
                                <div className="text-center space-y-2">
                                  <h3 className="font-semibold text-base">FinanceAI Corp</h3>
                                  <p className="text-sm text-muted-foreground">AI-powered financial analytics</p>
                                </div>
                                <a href="https://financeai.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="lucide lucide-external-link h-4 w-4"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                  Visit Website
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Become Sponsor CTA */}
                      <div className="mt-8 p-4 bg-muted/50 rounded-lg text-center">
                        <p className="text-sm text-muted-foreground mb-3">
                          Interested in sponsoring our next webinar?
                        </p>
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                          Become a Sponsor
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* SIDEBAR (RIGHT) */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="space-y-6">
                  {/* Quick Actions */}
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="font-semibold tracking-tight text-lg">Quick Actions</h3>
                    </div>
                    <div className="p-6 pt-0 space-y-3">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          className="lucide lucide-play h-4 w-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <polygon points="6 3 20 12 6 21 6 3"></polygon>
                        </svg>
                        Watch Recording
                      </a>
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="lucide lucide-download h-4 w-4 mr-2" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                        Download Resources
                      </button>
                    </div>
                  </div>
                  {/* Event Details */}
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="font-semibold tracking-tight text-lg">Event Details</h3>
                    </div>
                    <div className="p-6 pt-0 space-y-4">
                      <div className="flex items-center gap-3">
                        {/* Calendar */}
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="lucide lucide-calendar h-4 w-4 text-muted-foreground"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                        <div>
                          <p className="font-medium">2024-02-15</p>
                          <p className="text-sm text-muted-foreground">14:00 GMT</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {/* Clock */}
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="lucide lucide-clock h-4 w-4 text-muted-foreground"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <div>
                          <p className="font-medium">90 min</p>
                          <p className="text-sm text-muted-foreground">Duration</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {/* Users */}
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="lucide lucide-users h-4 w-4 text-muted-foreground"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        <div>
                          <p className="font-medium">1,250</p>
                          <p className="text-sm text-muted-foreground">Attendees</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {/* Map Pin */}
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="lucide lucide-map-pin h-4 w-4 text-muted-foreground"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <div>
                          <p className="font-medium">Virtual Event</p>
                          <p className="text-sm text-muted-foreground">Online Platform</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Topics Covered */}
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="font-semibold tracking-tight text-lg flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="lucide lucide-tag h-4 w-4">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        Topics Covered
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="flex flex-wrap gap-2">
                        {["Digital Transformation", "Trade Finance", "Technology"].map((topic) => (
                          <div
                            key={topic}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold text-xs"
                            style={{
                              background: "#27C388",
                              color: "#fff",
                              borderColor: "transparent"
                            }}
                          >
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Presenter */}
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="font-semibold tracking-tight text-lg">Presenter</h3>
                    </div>
                    <div className="p-6 pt-0">
                      <p className="font-medium">Dr. Sarah Chen &amp; Expert Panel</p>
                      <p className="text-sm text-muted-foreground mt-1">HSBC</p>
                    </div>
                  </div>
                  {/* Related Content */}
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="font-semibold tracking-tight text-lg">Related Content</h3>
                    </div>
                    <div className="p-6 pt-0 space-y-3">
                      {[
                        {
                          title: "Trade Finance Trends 2024",
                          sub: "Previous Webinar",
                        },
                        {
                          title: "Digital Banking Innovation",
                          sub: "Related Article",
                        },
                        {
                          title: "Fintech Case Studies",
                          sub: "Resource Guide",
                        },
                      ].map((item) => (
                        <button
                          key={item.title}
                          className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground w-full justify-start p-2 h-auto"
                        >
                          <div className="text-left">
                            <p className="text-sm font-medium">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.sub}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* End sidebar */}
                </div>
              </div>
            </div>
            {/* End main grid */}
          </div>
        </div>
      </section>
    </main>
  );
}
