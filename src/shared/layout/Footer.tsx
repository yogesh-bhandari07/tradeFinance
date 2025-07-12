// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-[#3e3d4b] text-white w-full">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand + Subscribe */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-ttp-orange text-white px-3 py-2 rounded font-bold text-xl" style={{ backgroundColor  : '#F97316' }}>TTP</div>
              <div>
                <h3 className="text-xl font-semibold">
                  Trade Treasury <span className="text-ttp-orange" style={{ color: '#F97316' }}>Payments</span>
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Trade Treasury and Payments (TTP) is the only totally free media platform in transaction banking, bringing together the biggest voices, heavyweight leaders, and the meaningful conversations that matter. No spin, no bias, no gatekeeping—just honest, high-value insights.
            </p>
            <div className="space-y-4">
              <h4 className="font-semibold">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ttp-orange"
                />
                <button className="bg-ttp-orange hover:bg-ttp-orange/90 text-white px-4 py-2 rounded-md text-sm font-medium" style={{ backgroundColor: '#F97316' }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {["Trade Finance", "Treasury", "Digital Payments", "Compliance", "Events"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-ttp-orange transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal & Policies</h4>
            <ul className="space-y-2">
              {[
                "Terms and Conditions",
                "Disclaimer",
                "Privacy",
                "Complaints",
                "Editorial Policy",
                "Cookie Policy",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-ttp-orange transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/10">
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-ttp-orange" style={{ color: '#F97316' }}>Resources</h4>
            <ul className="space-y-2">
              {["Careers", "Contact Us", "Partners", "Newsletter"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-ttp-orange transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div className="md:col-span-3">
            <h4 className="font-semibold mb-4 text-ttp-orange" style={{ color: '#F97316' }}>Company Information</h4>
            <div className="text-sm text-gray-400 space-y-2 leading-relaxed">
              <p>
                Trade Treasury Payments is the trading name of Trade & Transaction Finance Media Services Ltd (company number: 16228111),
                incorporated in England and Wales, at 34-35 Clarges St, London W1J 7EJ.
              </p>
              <p>
                TTP is registered as a Data Controller under the ICO: ZB882947. VAT Number: 485 4500 78.
              </p>
              <p className="text-gray-500">IPSO regulated • Independent editorial standards</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Trade Treasury Payments. All Rights Reserved.
          </div>
          <div className="flex space-x-4">
            {[
              { icon: "mail", href: "#" },
              { icon: "linkedin", href: "#" },
              { icon: "twitter", href: "#" },
              { icon: "youtube", href: "#" },
            ].map(({ icon, href }) => (
              <a key={icon} href={href} className="text-gray-400 hover:text-ttp-orange transition-colors">
                <i className={`lucide lucide-${icon} h-5 w-5`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
