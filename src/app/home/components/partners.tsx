import React from "react";

export const Partners = () => {
  const partners = [
    {
      name: "Swiss Re Corporate Solutions",
      logo: "/lovable-uploads/4d8a8fc6-9cb3-4580-8e04-3b031e423d17.png",
    },
    {
      name: "Surecomp",
      logo: "/lovable-uploads/9f0842f1-8387-4c20-9d1f-2329d12df084.png",
    },
    {
      name: "Marsh",
      logo: "/lovable-uploads/20bafe9c-97b4-44f1-a472-98206110a22f.png",
    },
    {
      name: "Credit Agricole Corporate & Investment Bank",
      logo: "/lovable-uploads/0d053528-6d5e-4e1d-9d98-545b87bf91fd.png",
    },
    {
      name: "ITFA",
      logo: "/lovable-uploads/9bb55f5a-572f-495e-b115-439318c57d2d.png",
    },
    {
      name: "ICC Digital Standards Initiative",
      logo: "/lovable-uploads/fa34d0d3-e62c-4bbf-ac46-3bbfd11c7365.png",
    },
    {
      name: "ICC Austria",
      logo: "/lovable-uploads/7c8d3ae0-7d29-406b-b507-00d6775fbc19.png",
    },
    {
      name: "BAFT",
      logo: "/lovable-uploads/ad267867-0229-43dc-9b23-b7479eb03ddb.png",
    },
    {
      name: "ADB TSCFP",
      logo: "/lovable-uploads/2c550c37-dbc2-4323-8534-ad453f21b63e.png",
    },
    {
      name: "European Bank for Reconstruction and Development",
      logo: "/lovable-uploads/2cac68fb-a05d-4f46-ba39-509c92ed7172.png",
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ttp-charcoal mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-gray-600">
            Our affiliate partners and industry associations worldwide
          </p>
        </div>

        {/* Scrolling Partners Logo */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300 group"
              >
                <div className="bg-gray-50 hover:bg-white border border-gray-200 hover:border-ttp-orange/30 rounded-xl p-6 w-48 h-24 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 max-w-40 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-ttp-orange mb-2">50+</div>
            <div className="text-sm text-gray-600">Global Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-ttp-green mb-2">25+</div>
            <div className="text-sm text-gray-600">Industry Associations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-ttp-charcoal mb-2">
              100+
            </div>
            <div className="text-sm text-gray-600">Countries Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Global Network</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
