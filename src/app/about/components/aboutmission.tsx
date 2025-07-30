import React from "react";
import { Card, CardContent } from "@/shared/components/card";
import { TrendingUp, Shield, Network, Target } from "lucide-react";

export const AboutMission = ({ data }: { data: any }) => {
  const missionIcons = [TrendingUp, Shield, Network, Target];

  const missionPoints = data?.ourMissionCardSection || [];

  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#994fb2]/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-ttp-purple rounded-full"></div>
            <span className="text-ttp-purple font-medium text-sm">
              {data?.ourPurposeHeading }
            </span>
          </div>

          <h2 className="heading-2 mb-8 text-ttp-charcoal">
            {data?.ourMissionHeading }
          </h2>

          <p className="body-large max-w-4xl mx-auto mb-12 text-ttp-charcoal">
            {data?.ourMissionContent ||''}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {missionPoints.map((point: any, index: number) => {
            const Icon = missionIcons[index % missionIcons.length];
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#994fb2] hover-lift bg-white"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#994fb2]/10 rounded-lg flex items-center justify-center group-hover:bg-[#994fb2]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#994fb2]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-ttp-charcoal mb-3 group-hover:text-ttp-purple transition-colors">
                        {point.heading}
                      </h3>
                      <p className="body-medium text-ttp-charcoal">
                        {point.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
