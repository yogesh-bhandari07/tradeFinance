import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import {
  Users,
  Mail,
  Linkedin,
  Globe,
  TrendingUp,
  Building,
} from "lucide-react";

export const AboutReach = () => {
  const [animatedStats, setAnimatedStats] = useState({
    members: 0,
    subscribers: 0,
    countries: 0,
    partners: 0,
  });

  const finalStats = {
    members: 160000,
    subscribers: 45000,
    countries: 100,
    partners: 250,
  };

  useEffect(() => {
    const duration = 2500;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats({
        members: Math.floor(finalStats.members * easeOut),
        subscribers: Math.floor(finalStats.subscribers * easeOut),
        countries: Math.floor(finalStats.countries * easeOut),
        partners: Math.floor(finalStats.partners * easeOut),
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      label: "Active Community Members",
      value: `${animatedStats.members.toLocaleString()}+`,
      color: "text-ttp-orange",
      bgColor: "bg-ttp-orange/10",
    },
    {
      icon: Mail,
      label: "Newsletter Subscribers",
      value: `${animatedStats.subscribers.toLocaleString()}+`,
      color: "text-ttp-green",
      bgColor: "bg-ttp-green/10",
    },
    {
      icon: Globe,
      label: "Countries Reached",
      value: `${animatedStats.countries}+`,
      color: "text-ttp-purple",
      bgColor: "bg-ttp-purple/10",
    },
    {
      icon: Building,
      label: "Institutional Partners",
      value: `${animatedStats.partners}+`,
      color: "text-ttp-charcoal",
      bgColor: "bg-ttp-charcoal/10",
    },
  ];

  const audience = [
    {
      icon: Building,
      label: "Global Banks",
      description: "Tier 1 & 2 banks worldwide",
    },
    {
      icon: TrendingUp,
      label: "Fintechs",
      description: "Emerging payment & trade tech companies",
    },
    {
      icon: Users,
      label: "Policymakers",
      description: "Central banks & regulatory bodies",
    },
    {
      icon: Globe,
      label: "Multilateral Institutions",
      description: "World Bank, IMF, development banks",
    },
    {
      icon: Linkedin,
      label: "MNCs",
      description: "Fortune 500 treasury & trade teams",
    },
  ];

  return (
    <section id="reach" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#994fb2]/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-ttp-green rounded-full"></div>
            <span className="text-ttp-green font-medium">Global Impact</span>
          </div>

          <h2 className="heading-2 mb-8 text-ttp-charcoal">Who We Reach</h2>

          <p className="body-large max-w-4xl mx-auto leading-relaxed mb-12 text-ttp-charcoal">
            Our platform serves a global community of financial professionals,
            from emerging fintech startups to established central banks. We are
            proud to be the trusted source for intelligence across the
            international trade and treasury ecosystem.
          </p>
        </div>

        {/* Animated Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-white border-2 border-gray-100 hover:border-gray-200"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Audience Breakdown */}
        <div className="grid md:grid-cols-5 gap-6">
          {audience.map((group, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 bg-gray-50 hover:bg-white border-l-4 border-l-[#7fb44a]"
            >
              <CardContent className="p-6 text-center">
                <group.icon className="w-8 h-8 text-ttp-charcoal mx-auto mb-3 group-hover:text-ttp-orange transition-colors" />
                <h4 className="font-bold text-ttp-charcoal mb-2 group-hover:text-ttp-orange transition-colors">
                  {group.label}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {group.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Trusted by leading institutions worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "HSBC",
              "JPMorgan",
              "Standard Chartered",
              "World Bank",
              "IMF",
              "BIS",
              "Federal Reserve",
              "ECB",
            ].map((institution) => (
              <Badge
                key={institution}
                variant="outline"
                className="border-gray-300 text-gray-500 hover:border-ttp-orange hover:text-ttp-orange transition-colors"
              >
                {institution}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
