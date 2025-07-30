/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";

const getInstitutionTag = (tag: { tag: any; }) => tag.tag || tag;

interface AboutReachProps {
  data: any; 
}

export const AboutReach = ({ data }: AboutReachProps) => {
  const aboutUs = data;

  const statsData = aboutUs?.whoWeReachCardSection || [];
  const finalStats = {
    members: parseInt(statsData?.[0]?.number?.replace(/,/g, "")) || 0,
    subscribers: parseInt(statsData?.[1]?.number?.replace(/,/g, "")) || 0,
    countries: parseInt(statsData?.[2]?.number?.replace(/,/g, "")) || 0,
    partners: parseInt(statsData?.[3]?.number?.replace(/,/g, "")) || 0,
  };

  const [animatedStats, setAnimatedStats] = useState({
    members: 0,
    subscribers: 0,
    countries: 0,
    partners: 0,
  });

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
  }, [finalStats.members, finalStats.subscribers, finalStats.countries, finalStats.partners]);

  type StatKey = "members" | "subscribers" | "countries" | "partners";
  const statKeys: StatKey[] = ["members", "subscribers", "countries", "partners"];

  const stats = statsData.map((item: { icon: any; content: any; }, idx: number) => ({
    icon: <span dangerouslySetInnerHTML={{ __html: item.icon }} />,
    label: item.content,
    value: `${animatedStats[statKeys[idx]].toLocaleString()}${idx < 2 ? "+" : ""}`,
    color: [
      "text-ttp-orange",
      "text-ttp-green",
      "text-ttp-purple",
      "text-ttp-charcoal",
    ][idx],
    bgColor: [
      "bg-ttp-orange/10",
      "bg-ttp-green/10",
      "bg-ttp-purple/10",
      "bg-ttp-charcoal/10",
    ][idx],
  }));

  // Audience from API
  const audience = (aboutUs?.globalDecisionTags || []).map((tag: { tag: unknown; }) => ({
    icon: <span className="w-8 h-8 flex items-center justify-center mx-auto mb-3 text-ttp-charcoal group-hover:text-ttp-orange transition-colors">{/* Optionally map icon by idx or tag */}</span>,
    label: tag.tag,
    description: "", // Optionally fill if CMS has descriptions per audience
  }));

  // Social proof institutions from API
  const institutions = aboutUs?.stakeholderBottomTags || [];

  return (
    <section id="reach" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#994fb2]/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-ttp-green rounded-full"></div>
            <span className="text-ttp-green font-medium">
              {aboutUs?.globalImpactHeading}
            </span>
          </div>
          <h2 className="heading-2 mb-8 text-ttp-charcoal">
            {aboutUs?.whoWeReachHeading}
          </h2>
          <p className="body-large max-w-4xl mx-auto leading-relaxed mb-12 text-ttp-charcoal">
            {aboutUs?.whoWeReachContent}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat: { bgColor: unknown; icon: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; color: unknown; value: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; label: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-white border-2 border-gray-100 hover:border-gray-200"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  {stat.icon}
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
          {audience.map((group: { icon: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; label: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 bg-gray-50 hover:bg-white border-l-4 border-l-[#7fb44a]"
            >
              <CardContent className="p-6 text-center">
                {/* API does not provide audience breakdown icons -- customize as needed */}
                <div className="w-8 h-8 text-ttp-charcoal mx-auto mb-3 group-hover:text-ttp-orange transition-colors flex justify-center items-center">
                  {/* Optionally render an icon based on tag */}
                  {group.icon}
                </div>
                <h4 className="font-bold text-ttp-charcoal mb-2 group-hover:text-ttp-orange transition-colors">
                  {group.label}
                </h4>
                {!!group.description && (
                  <p className="text-xs text-gray-600 leading-relaxed">{group.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-4">
            {aboutUs?.stakeholderBottonText}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {institutions.map((institution: any) => (
              <Badge
                key={getInstitutionTag(institution)}
                variant="outline"
                className="border-gray-300 text-gray-500 hover:border-ttp-orange hover:text-ttp-orange transition-colors"
              >
                {getInstitutionTag(institution)}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
