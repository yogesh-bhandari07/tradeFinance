import React from "react";
import { Card, CardContent } from "@/shared/components/card";
import { Button } from "@/shared/components/button";
import { Badge } from "@/shared/components/badge";
import { ArrowRight, Sparkles, Users, Award } from "lucide-react";

export const WhatWeDoCTA = () => {
  return (
    <>
      {/* Sticky CTA Bar */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
        <Card className="bg-ttp-orange text-white shadow-xl border-none">
          <CardContent className="px-8 py-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span className="font-medium">Ready to work together?</span>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="bg-white text-ttp-orange hover:bg-gray-100"
              >
                Contact Our Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#3E3D4C] via-[#3E3D4C] to-[#994fb2] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-ttp-orange/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-ttp-orange" />
            <span className="text-ttp-orange font-medium">
              Let Create Something Together
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            TTP is where influence meets insight.
          </h2>

          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            From strategic communications to executive content, we help you
            build authority, engage stakeholders, and drive meaningful outcomes
            in global trade and treasury markets.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Users,
                title: "160k+ Professionals",
                description: "in our global network",
              },
              {
                icon: Award,
                title: "Trusted by Leaders",
                description: "across 100+ countries",
              },
              {
                icon: Sparkles,
                title: "Full-Service Partner",
                description: "from strategy to execution",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="w-8 h-8 mx-auto mb-3 text-ttp-orange" />
                <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-ttp-orange hover:bg-ttp-orange/90 text-white px-8 py-4 text-lg"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#3E3D4C] px-8 py-4 text-lg"
            >
              Speak to the Editorial Team
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Strategic Communications",
              "Content Creation",
              "Event Programming",
              "Executive Positioning",
            ].map((service) => (
              <Badge
                key={service}
                variant="secondary"
                className="bg-white/20 text-white border-white/30"
              >
                {service}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
