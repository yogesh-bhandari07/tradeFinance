/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Card, CardContent } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import { Zap } from "lucide-react";

export const AboutWhoWeAre = ({ data }: { data: any }) => {
  const principles = data?.whoWeAreCardSection || [];

  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#F16814]/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-ttp-orange rounded-full"></div>
            <span className="text-ttp-orange font-medium">
              {data?.ourFoundationHeading}
            </span>
          </div>

          <h2 className="heading-2 mb-8 text-ttp-charcoal">{data?.whoWeAreHeading}</h2>

          <p className="body-large max-w-4xl mx-auto text-ttp-charcoal leading-relaxed mb-12">
            {data?.whoWeAreContent}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle: any, index: number) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#F16814] hover-lift"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ttp-orange/10 rounded-lg flex items-center justify-center group-hover:bg-[#F16814]/20 transition-colors">
                    <Zap className="w-6 h-6 text-ttp-orange" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-ttp-charcoal group-hover:text-ttp-orange transition-colors">
                        {principle.heading}
                      </h3>
                      <Badge
                        variant="outline"
                        className="border-ttp-orange text-ttp-orange text-xs"
                      >
                        {principle.tag}
                      </Badge>
                    </div>
                    <p className="body-medium text-ttp-charcoal">{principle.content}</p>
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
                {data?.globalDecisionHeading}
              </h3>
              <p className="text-lg text-white/90 mb-6">
                {data?.globalDecisionContent}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {(data?.globalDecisionTags || []).map((tag: any, idx: number) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-white/20 text-white border-white/30"
                  >
                    {tag.tag}
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
