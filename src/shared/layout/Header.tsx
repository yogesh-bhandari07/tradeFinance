'use client';

import Link from 'next/link';
import { useState } from 'react';

const dropdownContent = {
    Learn: (
  <div className="fixed inset-0 top-16 z-50 overflow-y-auto bg-white w-[100vw]">
  <div className="max-w-7xl mx-auto p-6">
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-3xl font-bold text-[#2e2e2e]">Learn</h2>
        <p className="mt-2 text-[#4b5563]">Your structured, evergreen education and insight layer</p>
      </div>
      <button className="p-2 rounded-lg transition-colors hover:bg-[#f3f4f6]">
        <svg className="h-6 w-6 text-[#4b5563]" fill="none"  stroke-width="2" viewBox="0 0 24 24">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </button>
    </div>

    <div className="grid lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8">
        <div className="grid md:grid-cols-3 gap-4">

          {/* <!-- Trade --> */}
          <div className="p-4 rounded-lg border border-[#f3f4f6] bg-gradient-to-br from-[#fff7ed] to-[#fff3e6]">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-[#e76f00]">
              Trade <div className="w-1.5 h-1.5 rounded-full bg-[#e76f00]"></div>
            </h3>
            <div className="space-y-2 text-sm text-[#2e2e2e]">
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#e76f00]" href="/topics/trade-policy-regulation">Trade Policy & Regulation</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#e76f00]" href="/topics/trade-finance">Trade Finance</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#e76f00]" href="/topics/export-credit-risk">Export Credit & Risk</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#e76f00]" href="/topics/supply-chains">Supply Chains</a>
            </div>
          </div>

          {/* <!-- Treasury --> */}
          <div className="p-4 rounded-lg border border-[#f3f4f6] bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe]">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-[#6a3fc8]">
              Treasury <div className="w-1.5 h-1.5 rounded-full bg-[#6a3fc8]"></div>
            </h3>
            <div className="space-y-2 text-sm text-[#2e2e2e]">
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#6a3fc8]" href="/topics/liquidity-risk">Liquidity & Risk</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#6a3fc8]" href="/topics/fx-hedging">FX & Hedging</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#6a3fc8]" href="/topics/working-capital">Working Capital</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#6a3fc8]" href="/topics/receivables-finance">Receivables Finance</a>
            </div>
          </div>

          {/* <!-- Payments --> */}
          <div className="p-4 rounded-lg border border-[#f3f4f6] bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7]">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-[#108442]">
              Payments <div className="w-1.5 h-1.5 rounded-full bg-[#108442]"></div>
            </h3>
            <div className="space-y-2 text-sm text-[#2e2e2e]">
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#108442]" href="/topics/cross-border-payments">Cross-border Payments</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#108442]" href="/topics/embedded-finance">Embedded Finance</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#108442]" href="/topics/digital-currencies">Digital Currencies</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#108442]" href="/topics/compliance-fraud">Compliance & Fraud</a>
            </div>
          </div>

        </div>

        <div className="mt-6">
          <a className="inline-flex items-center gap-2 font-medium text-[#e76f00] hover:text-[#cf6300]" href="/topics">
            <span>Explore All Topics</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* <!-- Sidebar --> */}
      <div className="lg:col-span-4 space-y-4">
        <div className="rounded-lg border border-[#f3f4f6] bg-[#f9fafb] p-4">
          <h4 className="text-base font-bold mb-3 flex items-center gap-2 text-[#e76f00]">
            <svg className="w-4 h-4 text-[#e76f00]" fill="none" stroke="currentColor"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            Featured Learning
          </h4>
          <div className="space-y-2">
            <div className="p-3 bg-white rounded-md border border-[#f3f4f6]">
              <h6 className="text-sm font-medium text-[#2e2e2e] mb-1">Digital Trade Finance Revolution</h6>
              <p className="text-xs text-[#6b7280]">Comprehensive guide</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg p-4 text-white bg-[#2e2e2e]">
          <h4 className="text-base font-bold mb-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-[#e76f00]" fill="none" stroke="currentColor"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
            Quick Access
          </h4>
          <div className="space-y-2">
            <button className="w-full h-8 bg-white text-sm text-[#2e2e2e] font-medium rounded-md px-4 py-2 border border-[#e5e7eb] hover:bg-[#f9fafb] flex items-center gap-2">
              <svg className="w-3 h-3 text-[#108442]" fill="none" stroke="currentColor"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
              Learning Path
            </button>
            <button className="w-full h-8 bg-white text-sm text-[#2e2e2e] font-medium rounded-md px-4 py-2 border border-[#e5e7eb] hover:bg-[#f9fafb] flex items-center gap-2">
              <svg className="w-3 h-3 text-[#6a3fc8]" fill="none" stroke="currentColor"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
              Study Guides
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

  ),

  'Media & Events': (
    <div className="fixed inset-0 top-16 z-50 overflow-y-auto bg-white w-[100vw]">
  <div className="max-w-7xl mx-auto p-6">
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-3xl font-bold text-[#2e2e2e]">Media & Events</h2>
        <p className="mt-2 text-[#4b5563]">Access all content formats, events, and series — across any topic</p>
      </div>
      <button className="p-2 rounded-lg transition-colors hover:bg-[#f3f4f6]">
        <svg className="h-6 w-6 text-[#4b5563]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </button>
    </div>

    <div className="grid lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8">
        <div className="grid md:grid-cols-2 gap-4">

          {/* <!-- Shows & Series --> */}
          <div className="p-4 rounded-lg border border-[#f3f4f6] bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe]">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-[#6a3fc8]">
              Shows & Series <div className="w-1.5 h-1.5 rounded-full bg-[#6a3fc8]"></div>
            </h3>
            <div className="space-y-2 text-sm text-[#2e2e2e]">
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#6a3fc8]" href="/podcasts">Podcasts</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#6a3fc8]" href="/videos">Video Interviews</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#6a3fc8]" href="/webinars">Webinars</a>
              {/* <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#6a3fc8]" href="/triple-t-episodes">"Triple T Episodes</a> */}
            </div>
          </div>

          {/* <!-- Editorial --> */}
          <div className="p-4 rounded-lg border border-[#f3f4f6] bg-gradient-to-br from-[#fff7ed] to-[#fff3e6]">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-[#e76f00]">
              Editorial <div className="w-1.5 h-1.5 rounded-full bg-[#e76f00]"></div>
            </h3>
            <div className="space-y-2 text-sm text-[#2e2e2e]">
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#e76f00]" href="/posts/latest-articles">Latest Articles</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#e76f00]" href="/thought-leadership">Thought Leadership</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#e76f00]" href="/opinion-analysis">Opinion & Analysis</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#e76f00]" href="/news-announcements">News & Announcements</a>
            </div>
          </div>

          {/* <!-- Publications --> */}
          <div className="p-4 rounded-lg border border-[#f3f4f6] bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7]">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-[#108442]">
              Publications <div className="w-1.5 h-1.5 rounded-full bg-[#108442]"></div>
            </h3>
            <div className="space-y-2 text-sm text-[#2e2e2e]">
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#108442]" href="/publications">Magazine Editions</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#108442]" href="/whitepapers-guides">Whitepapers & Guides</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#108442]" href="/partner-reports">Partner Reports</a>
            </div>
          </div>

          {/* <!-- Events --> */}
          <div className="p-4 rounded-lg border border-[#f3f4f6] bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe]">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-[#6a3fc8]">
              Events <div className="w-1.5 h-1.5 rounded-full bg-[#6a3fc8]"></div>
            </h3>
            <div className="space-y-2 text-sm text-[#2e2e2e]">
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#6a3fc8]" href="/events">TTP Events</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#6a3fc8]" href="/partner-events">Partner Events</a>
              <a className="block font-medium transition-all duration-200 hover:translate-x-1 hover:text-[#6a3fc8]" href="/event-calendar">Event Calendar</a>
            </div>
          </div>

        </div>
      </div>

      {/* <!-- Sidebar --> */}
      <div className="lg:col-span-4 space-y-4">
        <div className="rounded-lg border border-[#f3f4f6] bg-[#f9fafb] p-4">
          <h4 className="text-base font-bold mb-3 flex items-center gap-2 text-[#e76f00]">
            <svg className="w-4 h-4 text-[#e76f00]" fill="none" stroke="currentColor"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
            Latest Content
          </h4>
          <div className="space-y-2">
            <div className="p-3 bg-white rounded-md border border-[#f3f4f6]">
              <h6 className="text-sm font-medium text-[#2e2e2e] mb-1">Future of Trade Finance</h6>
              <p className="text-xs text-[#6b7280] flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                45 min podcast
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg p-4 border border-[#ffe5d0] bg-gradient-to-br from-[#fff7ed] to-[#f5f3ff]">
          <h4 className="text-base font-bold mb-2 text-[#2e2e2e]">Stay Connected</h4>
          <p className="text-sm text-[#4b5563] mb-3">Join 50,000+ professionals</p>
          <button className="w-full h-8 bg-[#e76f00] hover:bg-[#cf6300] text-white text-sm font-medium px-4 py-2 rounded-md">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</div>

  ),

  'Network & About': (
   <div
    className="fixed inset-0 top-16 bg-white z-50 overflow-y-auto"
    style={{ width: '100vw' }}
  >
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold" style={{ color: '#1C1C1C' }}>Network & About</h2>
          <p className="mt-2" style={{ color: '#4B5563' }}>Trust, transparency, and access to your ecosystem</p>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="h-6 w-6" style={{ color: '#4B5563' }}
          >
            <path d="M18 6 6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-8">
          <div className="grid md:grid-cols-3 gap-4">
            {/* About TTP */}
            <div className="p-4 rounded-lg border border-gray-100" style={{ background: 'linear-gradient(to bottom right, #FFE9D6, #FFF2E6)' }}>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: '#E57200' }}>
                About TTP
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#E57200' }}></div>
              </h3>
              <div className="space-y-2 text-sm font-medium">
                <Link href="/about" className="block hover:translate-x-1 transition-all duration-200" style={{ color: '#1C1C1C' }}>About Us</Link>
                <Link href="/our-governance" className="block hover:translate-x-1 transition-all duration-200" style={{ color: '#1C1C1C' }}>Governance & Editorial Charter</Link>
                <Link href="/work-with-us" className="block hover:translate-x-1 transition-all duration-200" style={{ color: '#1C1C1C' }}>Work With Us</Link>
                <Link href="/careers" className="block hover:translate-x-1 transition-all duration-200" style={{ color: '#1C1C1C' }}>Careers</Link>
              </div>
            </div>

            {/* Ecosystem */}
            <div className="p-4 rounded-lg border border-gray-100" style={{ background: 'linear-gradient(to bottom right, #DFF6ED, #EFFAF5)' }}>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: '#00A86B' }}>
                Ecosystem
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#00A86B' }}></div>
              </h3>
              <div className="space-y-2 text-sm font-medium">
                <Link href="/organisations" className="block hover:translate-x-1 transition-all duration-200" style={{ color: '#1C1C1C' }}>Company Directory</Link>
                <Link href="/associations-partners" className="block hover:translate-x-1 transition-all duration-200" style={{ color: '#1C1C1C' }}>Associations & Partners</Link>
                <Link href="/advisory-board" className="block hover:translate-x-1 transition-all duration-200" style={{ color: '#1C1C1C' }}>Advisory Board</Link>
                <Link href="/contact" className="block hover:translate-x-1 transition-all duration-200" style={{ color: '#1C1C1C' }}>Contact Us</Link>
              </div>
            </div>

            {/* Subscribe / Join */}
            <div className="p-4 rounded-lg border border-gray-100" style={{ background: 'linear-gradient(to bottom right, #ECECFF, #F5F5FF)' }}>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: '#6C63FF' }}>
                Subscribe / Join
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#6C63FF' }}></div>
              </h3>
              <div className="space-y-2 text-sm font-medium">
                <Link href="/newsletter" className="block hover:translate-x-1 transition-all duration-200" style={{ color: '#1C1C1C' }}>Newsletter</Link>
                <Link href="/submit-story" className="block hover:translate-x-1 transition-all duration-200" style={{ color: '#1C1C1C' }}>Submit a Story</Link>
                <Link href="/join-network" className="block hover:translate-x-1 transition-all duration-200" style={{ color: '#1C1C1C' }}>Join Our Network</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          {/* Join Community */}
          <div className="rounded-lg p-4 border border-gray-100" style={{ backgroundColor: '#F9FAFB' }}>
            <h4 className="font-bold text-base mb-3 flex items-center gap-2" style={{ color: '#E57200' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="#E57200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Join Our Community
            </h4>
            <div className="space-y-2">
              <div className="p-3 bg-white rounded-md border border-gray-100">
                <h6 className="font-medium text-sm mb-1" style={{ color: '#1C1C1C' }}>Professional Network</h6>
                <p className="text-xs" style={{ color: '#6B7280' }}>50,000+ members worldwide</p>
              </div>
            </div>
          </div>

          {/* Get Involved CTA */}
          <div className="rounded-lg p-4 border" style={{ background: 'linear-gradient(to bottom right, #DFF6ED, #ECECFF)', borderColor: '#00A86B33' }}>
            <h4 className="font-bold text-base mb-2" style={{ color: '#1C1C1C' }}>Get Involved</h4>
            <p className="text-sm mb-3" style={{ color: '#4B5563' }}>Shape the future of trade</p>
            <button
              className="inline-flex items-center justify-center gap-2 px-4 py-2 w-full rounded-md font-medium text-sm h-8 transition-colors"
              style={{
                backgroundColor: '#00A86B',
                color: '#FFFFFF'
              }}
            >
              Join Network
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  ),
};
export default function Header() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="https://trade-treasury-payments.lovable.app/lovable-uploads/71ee7b01-b2fa-4d85-8487-6c164311c1dd.png"
              alt="Trade Treasury Payments Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              // priority
            />
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex text-black items-center space-x-8 relative">
            {["Learn", "Media & Events", "Network & About"].map((item) => (
              <div
                key={item}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-ttp-charcoal hover:text-ttp-orange font-medium transition-colors">
                  <span>{item}</span>
                  <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {activeDropdown === item && dropdownContent[item as keyof typeof dropdownContent]}
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search (hidden on mobile) */}
            <button className="hidden sm:flex items-center text-black text-ttp-charcoal hover:text-ttp-orange h-9 px-3 rounded-md transition">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </button>

            {/* Notification */}
            <button className="relative flex items-center text-black text-ttp-charcoal hover:text-ttp-orange h-9 px-3 rounded-md transition">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
              <span className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-ttp-orange text-white flex items-center justify-center rounded-full" style={{ backgroundColor: '#F97316' }}>3</span>
            </button>

            {/* User Profile */}
            <button className="flex items-center space-x-2 h-10 px-4 py-2 rounded-md text-sm font-medium text-ttp-charcoal hover:text-ttp-orange transition">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
                alt="User"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              <span className="hidden md:block text-black">My Account</span>
              <svg className="hidden md:block w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-ttp-charcoal hover:text-ttp-orange h-10 w-10 flex items-center justify-center rounded-md transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
