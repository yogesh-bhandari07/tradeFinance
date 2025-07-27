import React from "react";
import { Card, CardContent } from "@/shared/components/card";
import { TrendingUp, Shield, Network, Target } from "lucide-react";

export const AboutMission = () => {
  const missionPoints = [
    {
      icon: TrendingUp,
      title: "Market Clarity",
      description:
        "Bringing transparency to complex global trade and treasury markets through expert analysis and editorial insight.",
    },
    {
      icon: Shield,
      title: "Risk Intelligence",
      description:
        "Helping decision-makers understand and navigate regulatory, operational, and market risks across borders.",
    },
    {
      icon: Network,
      title: "Global Connection",
      description:
        "Connecting markets, institutions, and professionals across the international trade finance ecosystem.",
    },
    {
      icon: Target,
      title: "Informed Decision-Making",
      description:
        "Empowering executives with the intelligence needed to trade with confidence and manage liquidity effectively.",
    },
  ];

  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#994fb2]/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-ttp-purple rounded-full"></div>
            <span className="text-ttp-purple font-medium text-sm ">
              Our Purpose
            </span>
          </div>

          <h2 className="heading-2 mb-8 text-ttp-charcoal">Our Mission</h2>

          <p className="body-large max-w-4xl mx-auto mb-12 text-ttp-charcoal">
            To bring clarity to the systems behind global trade, liquidity, and
            money flows. We help markets trade with confidence, manage risk, and
            connect across borders through independent editorial excellence and
            expert analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {missionPoints.map((point, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#994fb2] hover-lift bg-white"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#994fb2]/10 rounded-lg flex items-center justify-center group-hover:bg-[#994fb2]/20 transition-colors">
                    <point.icon className="w-6 h-6 text-[#994fb2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ttp-charcoal mb-3 group-hover:text-ttp-purple transition-colors">
                      {point.title}
                    </h3>
                    <p className="body-medium text-ttp-charcoal">{point.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
