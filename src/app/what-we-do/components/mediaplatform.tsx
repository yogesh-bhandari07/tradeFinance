import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import { FileText, Mic, Video, Calendar, Users, Mail } from "lucide-react";

export const MediaPlatform = () => {
  const platformFeatures = [
    {
      icon: FileText,
      title: "TTP Magazine",
      description:
        "In-depth editorial coverage of global trade finance, treasury management, and payments innovation.",
      features: [
        "Weekly publications",
        "Expert analysis",
        "Market insights",
        "Regulatory updates",
      ],
      color: "border-ttp-orange",
    },
    {
      icon: Mic,
      title: "Podcasts",
      description:
        "Industry-leading podcast series featuring conversations with senior executives and market experts.",
      features: [
        "Trade Talks series",
        "Executive interviews",
        "Market commentary",
        "Thought leadership",
      ],
      color: "border-ttp-purple",
    },
    {
      icon: Video,
      title: "Video Content",
      description:
        "Professional video production for webinars, conferences, and educational content.",
      features: [
        "Webinar hosting",
        "Conference coverage",
        "Expert panels",
        "Educational series",
      ],
      color: "border-ttp-green",
    },
    {
      icon: Users,
      title: "Roundtables",
      description:
        "Exclusive executive roundtables bringing together industry leaders for strategic discussions.",
      features: [
        "C-suite participation",
        "Strategic insights",
        "Networking opportunities",
        "Thought leadership",
      ],
      color: "border-ttp-charcoal",
    },
    {
      icon: Calendar,
      title: "Editorial Calendar",
      description:
        "Comprehensive monthly editorial calendar covering key topics and market developments.",
      features: [
        "Planned coverage",
        "Seasonal topics",
        "Market events",
        "Regulatory calendar",
      ],
      color: "border-ttp-orange",
    },
    {
      icon: Mail,
      title: "Newsletter Syndication",
      description:
        "Custom topic hubs and newsletter distribution to targeted professional audiences.",
      features: [
        "Targeted distribution",
        "Custom topics",
        "Audience segmentation",
        "Performance analytics",
      ],
      color: "border-ttp-purple",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white/10 via-slate-50/20 to-white/10 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(241,104,20,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(153,79,178,0.06),transparent_70%)]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-xl px-6 py-3 rounded-full mb-6 border border-white/20 shadow-2xl">
            <div className="w-2 h-2 bg-ttp-orange rounded-full animate-pulse"></div>
            <span className="text-ttp-orange font-semibold">
              Media Powerhouse
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ttp-charcoal mb-8">
            Omnipresent Media Intelligence
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We do not just cover the industry - we ARE the industry conversation.
            From breaking news to deep analysis, live events to exclusive
            interviews, we deliver across every channel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformFeatures.map((feature, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 border-l-4 ${feature.color} bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 hover:scale-105`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center group-hover:bg-ttp-orange/20 transition-all duration-300 border border-white/20 shadow-lg">
                    <feature.icon className="w-6 h-6 text-ttp-charcoal group-hover:text-ttp-orange transition-colors" />
                  </div>
                  <CardTitle className="text-lg text-ttp-charcoal group-hover:text-ttp-orange transition-colors">
                    {feature.title}
                  </CardTitle>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {feature.features.map((item, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-white/20 backdrop-blur-xl border border-white/20 text-ttp-charcoal"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className=" bg-ttp-orange  text-white max-w-4xl mx-auto backdrop-blur-xl border border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold mb-4">
                160k+ Professionals Can not Be Wrong
              </h3>
              <p className="text-lg text-white/90 mb-6">
                From central bank governors to fintech founders, our media
                ecosystem reaches every corner of the global trade finance and
                treasury community with unmatched authority.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "45k Newsletter Subscribers",
                  "100+ Countries Reached",
                  "250+ Institutional Partners",
                ].map((stat) => (
                  <Badge
                    key={stat}
                    variant="secondary"
                    className="bg-white/20 text-white border-white/20 backdrop-blur-xl"
                  >
                    {stat}
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
