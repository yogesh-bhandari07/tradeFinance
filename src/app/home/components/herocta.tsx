import React from "react";
import { Button } from "@/shared/components/button";
import { Zap, ArrowRight } from "lucide-react";

export const HeroCTA = () => {
  return (
    <div className="text-center bg-gradient-to-r from-ttp-charcoal to-ttp-purple rounded-xl bg-ttp-purple p-6 text-white relative overflow-hidden shadow-2xl backdrop-blur-lg border border-white/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-2">Join the Highway</h2>
        <p className="text-white/90 mb-4 max-w-xl mx-auto">
          Connect with the flow of global trade, treasury, and payments
          intelligence. Your personalized route to market insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            className="bg-ttp-orange hover:bg-ttp-orange/90 text-white px-6 py-2 text-sm rounded-full"
          >
            <Zap className="mr-2 w-4 h-4" />
            Start Your Journey
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-6 py-2 text-sm rounded-full backdrop-blur-sm"
          >
            Explore Content
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
