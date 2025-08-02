import React from "react";

export const MediaWallHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center space-x-2 bg-white/40 backdrop-blur-lg px-4 py-2 rounded-full mb-4 border border-white/30 shadow-lg">
        <div className="w-2 h-2 bg-ttp-orange rounded-full"></div>
        <span className="text-ttp-orange font-medium text-sm">
          Media Showcase
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-ttp-charcoal mb-4">
        Every Story, Every Format
      </h2>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        From breaking news to deep analysis, live coverage to exclusive
        interviews - discover our comprehensive multimedia content.
      </p>
    </div>
  );
};
