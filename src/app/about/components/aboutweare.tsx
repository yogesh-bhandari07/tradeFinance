import React from "react";
import { Card, CardContent } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import { FileText, Users, Globe, Award } from "lucide-react";

export const AboutWhoWeAre = () => {
  const principles = [
    {
      icon: FileText,
      title: "Editorially-Led",
      description:
        "Every piece of content is created by our editorial team, following journalistic standards and the IPSO Editors' Code.",
      badge: "Editorial Charter",
    },
    {
      icon: Users,
      title: "Independent",
      description:
        "We maintain editorial independence from commercial interests, ensuring unbiased coverage of trade and treasury markets.",
      badge: "No Pay-to-Play",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "Our content reflects the interconnected nature of international trade, with insights from every major market.",
      badge: "Worldwide Coverage",
    },
    {
      icon: Award,
      title: "Free Access",
      description:
        "Quality financial journalism and market intelligence should be accessible to all industry professionals.",
      badge: "Always Free",
    },
  ];

  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#F16814]/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-ttp-orange rounded-full"></div>
            <span className="text-ttp-orange font-medium">Our Foundation</span>
          </div>

          <h2 className="heading-2 mb-8 text-ttp-charcoal">Who We Are</h2>

          <p className="body-large max-w-4xl mx-auto text-ttp-charcoal leading-relaxed mb-12">
            We are an independent media and intelligence platform, built for
            global decision-makers across capital, liquidity, and risk. Our
            editorial-first approach ensures that every insight, analysis, and
            report meets the highest standards of journalistic integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#F16814] hover-lift"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ttp-orange/10 rounded-lg flex items-center justify-center group-hover:bg-[#F16814]/20 transition-colors">
                    <principle.icon className="w-6 h-6 text-ttp-orange" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-ttp-charcoal group-hover:text-ttp-orange transition-colors">
                        {principle.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="border-ttp-orange text-ttp-orange text-xs"
                      >
                        {principle.badge}
                      </Badge>
                    </div>
                    <p className="body-medium text-ttp-charcoal">{principle.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-[#3E3D4C] to-[#994fb2] text-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Built for Global Decision-Makers
              </h3>
              <p className="text-lg text-white/90 mb-6">
                From central banks to multinational corporations, from emerging
                fintechs to established financial institutions – we serve the
                professionals who move money, manage risk, and facilitate global
                trade.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Global Banks",
                  "Fintechs",
                  "Policymakers",
                  "Multilateral Institutions",
                  "MNCs",
                ].map((audience) => (
                  <Badge
                    key={audience}
                    variant="secondary"
                    className="bg-white/20 text-white border-white/30"
                  >
                    {audience}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
