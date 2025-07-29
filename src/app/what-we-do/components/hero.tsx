import React from "react";
import { Card, CardContent } from "@/shared/components/card";
import { Button } from "@/shared/components/button";
import { ArrowRight, Sparkles, Users, Target } from "lucide-react";

export const WhatWeDoHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#3E3D4C] via-[#3E3D4C] to-[#994fb2] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-ttp-orange/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-ttp-orange" />
            <span className="text-ttp-orange font-medium">
              Media & Communications Partner
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            What We <span className="text-ttp-orange">Do</span>
          </h1>

          <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
            We are your media and communications partner in trade, treasury, and
            payments.
          </p>

          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
            From editorial to events, PR to podcasting — we produce the
            narratives that drive markets. Whether you need content strategy,
            white-label services, or strategic communications, we deliver
            results that matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              Speak to Our Team
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Target,
              title: "Strategic Focus",
              description:
                "Specialized expertise in trade, treasury, and payments markets",
            },
            {
              icon: Users,
              title: "Trusted Partner",
              description:
                "Working with leading banks, fintechs, and institutions globally",
            },
            {
              icon: Sparkles,
              title: "Full-Service",
              description:
                "From editorial to events, we handle every aspect of your story",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <feature.icon className="w-8 h-8 mx-auto mb-3 text-ttp-orange" />
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-white/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
