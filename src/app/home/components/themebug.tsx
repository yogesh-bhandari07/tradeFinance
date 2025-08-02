import React from "react";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Globe,
  Zap,
  Building,
  FileText,
  CreditCard,
} from "lucide-react";

export const ThemeHubs = () => {
  const themes = [
    {
      title: "Trade Finance",
      description:
        "Letters of credit, supply chain finance, and trade digitization",
      icon: Globe,
      color: "bg-ttp-orange",
      articles: "248 Articles",
      trending: "+12 this week",
    },
    {
      title: "Treasury Management",
      description: "Cash management, FX hedging, and liquidity solutions",
      icon: TrendingUp,
      color: "bg-ttp-purple",
      articles: "186 Articles",
      trending: "+8 this week",
    },
    {
      title: "Payments",
      description:
        "Cross-border payments, CBDCs, and digital payment innovations",
      icon: Zap,
      color: "bg-ttp-green",
      articles: "204 Articles",
      trending: "+15 this week",
    },
    {
      title: "Credit Insurance",
      description:
        "Trade credit insurance, political risk, and export finance protection",
      icon: CreditCard,
      color: "bg-ttp-orange",
      articles: "142 Articles",
      trending: "+9 this week",
    },
    {
      title: "Development Finance",
      description:
        "DFI funding, multilateral lending, and emerging market finance",
      icon: Building,
      color: "bg-ttp-purple",
      articles: "118 Articles",
      trending: "+7 this week",
    },
    {
      title: "Banking Technology",
      description:
        "Core banking systems, API banking, and digital transformation",
      icon: Building,
      color: "bg-ttp-green",
      articles: "132 Articles",
      trending: "+11 this week",
    },
    {
      title: "Regulatory Updates",
      description: "Basel III, ESG compliance, and global regulatory changes",
      icon: FileText,
      color: "bg-ttp-orange",
      articles: "156 Articles",
      trending: "+13 this week",
    },
    {
      title: "Risk and CPRI",
      description:
        "Country and political risk insurance, sanctions, and risk management",
      icon: Shield,
      color: "bg-ttp-purple",
      articles: "164 Articles",
      trending: "+10 this week",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ttp-charcoal mb-4">
            Explore Knowledge by Theme
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into specialized areas with our curated content hubs. Each
            theme brings together articles, videos, expert insights, and
            real-time updates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {themes.map((theme) => {
            const IconComponent = theme.icon;
            return (
              <div
                key={theme.title}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className={`${theme.color} p-6 text-white`}>
                  <IconComponent className="h-8 w-8 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{theme.title}</h3>
                  <p className="text-sm opacity-90">{theme.description}</p>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-600">
                      {theme.articles}
                    </span>
                    <span className="text-sm text-ttp-green font-medium">
                      {theme.trending}
                    </span>
                  </div>

                  <div className="flex items-center text-ttp-orange group-hover:text-ttp-orange/80 transition-colors">
                    <span className="text-sm font-medium">Explore Theme</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
