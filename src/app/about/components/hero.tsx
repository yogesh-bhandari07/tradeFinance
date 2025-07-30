import React from "react";
import { Card, CardContent } from "@/shared/components/card";
import { Users, Globe, ShieldCheck, Zap } from "lucide-react";

// Accept `data` as props
export const AboutHero = ({ data }: { data: any }) => {
  const stats = data?.bannerTrustFactors || [];

  return (
    <section className="py-20 bg-gradient-to-br from-[#3E3D4C] via-[#3E3D4C] to-[#994fb2] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(241,104,20,0.1),transparent)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-6 border border-white/20 shadow-lg">
            <div className="w-2 h-2 bg-ttp-orange rounded-full animate-pulse"></div>
            <span className="text-white font-medium text-sm">
              {data?.bannerTag}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {data?.bannerHeading}
            <br />
            <span className="text-ttp-orange">{data?.bannerOriangeHeading}</span>
          </h1>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            {data?.bannerContent}
          </p>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat: any, index: number) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/15 transition-all duration-300 shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  {/* Consider mapping `icon` string to an actual Lucide icon if needed */}
                  <div className="w-8 h-8 mx-auto mb-3 text-ttp-orange">
                    <Zap className="w-8 h-8 mx-auto text-ttp-orange" />
                  </div>
                  <div className="text-2xl font-bold mb-1 text-white">
                    {stat.heading}
                  </div>
                  <div className="text-sm text-white/80 font-medium">
                    {stat.text}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
