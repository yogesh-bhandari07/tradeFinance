/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Card, CardContent } from "@/shared/components/card";
import { Button } from "@/shared/components/button";
import Link from "next/link";

interface AboutUsData {
  oversightHeading: string;
  governanceFrameworkHeading: string;
  governanceFrameworkContent: string;
  comprehensiveGovernanceHeading: string;
  comprehensiveGovernanceContent: string;
  comprehensiveGovernanceList?: Array<{ icon: any; text: React.ReactNode }>;
  comprehensiveGovernanceButtonLink?: string;
  comprehensiveGovernanceIcon: any;
  comprehensiveGovernanceNumberTextList?: Array<{ number: React.ReactNode; text: React.ReactNode }>;
}

export const AboutGovernanceLink = ({ data }: { data: AboutUsData }) => {
  const aboutUs = data;
  if (!aboutUs) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-ttp-green/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-ttp-green rounded-full"></div>
            <span className="text-ttp-green font-medium">
              {aboutUs.oversightHeading}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-ttp-charcoal mb-4">
            {aboutUs.governanceFrameworkHeading}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {aboutUs.governanceFrameworkContent}
          </p>
        </div>

        {/* Governance Card */}
        <Card className="bg-gradient-to-r from-[#3E3D4C] to-[#994fb2] text-white max-w-4xl mx-auto">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left: Governance details and highlights */}
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  {aboutUs.comprehensiveGovernanceHeading}
                </h3>
                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                  {aboutUs.comprehensiveGovernanceContent}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {aboutUs.comprehensiveGovernanceList?.map((item: { icon: any; text: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, idx: React.Key | null | undefined) => (
                    <div className="flex items-center space-x-3" key={idx}>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={idx === 0 || idx === 3
                          ? { background: "#F16814" }
                          : idx === 1
                            ? { background: "#7fb44a" }
                            : { background: "#994fb2" }}>
                        <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                      </div>
                      <span className="text-white/90 text-sm">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="bg-ttp-orange hover:bg-ttp-orange/90 text-white font-semibold px-8 py-6 text-lg"
                >
                  <Link href={aboutUs.comprehensiveGovernanceButtonLink || "#"}>
                    Explore Our Governance
                  </Link>
                </Button>
              </div>

              {/* Right: Large icon and stats */}
              <div className="lg:text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-full mb-6 mx-auto">
                  <span
                    dangerouslySetInnerHTML={{ __html: aboutUs.comprehensiveGovernanceIcon }}
                  />
                </div>
                <div className="space-y-4">
                  {aboutUs.comprehensiveGovernanceNumberTextList?.map((item: { number: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; text: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, idx: React.Key | null | undefined) => (
                    <div className="text-center" key={idx}>
                      <div className="text-3xl font-bold text-white">{item.number}</div>
                      <div className="text-white/80 text-sm">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
