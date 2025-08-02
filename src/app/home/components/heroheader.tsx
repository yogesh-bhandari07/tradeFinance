import React from "react";

export const HeroHeader = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center space-x-2 bg-white/40 backdrop-blur-lg px-6 py-3 rounded-full mb-6 border border-white/30 shadow-lg">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-ttp-orange rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 bg-ttp-green rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="w-2 h-2 bg-ttp-purple rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <span className="text-ttp-charcoal font-semibold">
          The Highway for Liquidity & Risk Management
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-ttp-charcoal mb-4 leading-tight">
        Connecting{" "}
        <span className="bg-gradient-to-r from-ttp-orange to-ttp-orange/70 text-ttp-orange bg-clip-text text-transparent">
          Trade
        </span>
        ,{" "}
        <span className="bg-gradient-to-r from-ttp-purple to-ttp-purple/70 bg-clip-text text-ttp-purple text-transparent">
          Treasury
        </span>
        <span className="bg-gradient-to-r from-ttp-orange via-ttp-green to-ttp-purple bg-clip-text text-ttp-teal text-transparent block">
          & Payments
        </span>
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
        Your highway for market intelligence, expert analysis, and risk
        management insights across the global financial ecosystem.
      </p>
    </div>
  );
};
