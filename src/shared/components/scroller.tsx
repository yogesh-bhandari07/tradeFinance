'use client'
import React, { useState, useEffect } from "react";
// import { Badge } from "@/select/components/badge";
import { Clock } from "lucide-react";

export const Scroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const newsItems = [
    {
      headline:
        "HSBC launches new trade finance platform powered by blockchain technology",
      time: "2m",
    },
    {
      headline:
        "European Central Bank announces new digital euro pilot program",
      time: "15m",
    },
    {
      headline:
        "Standard Chartered reports 25% increase in supply chain finance volumes",
      time: "32m",
    },
    {
      headline:
        "UAE and India sign new bilateral trade finance agreement worth $100bn",
      time: "1h",
    },
    {
      headline:
        "JP Morgan integrates AI-powered risk assessment in treasury operations",
      time: "2h",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [newsItems.length]);

  return (
    <section className="bg-ttp-charcoal text-white py-2 border-b border-ttp-orange/20 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-1.5 h-1.5 bg-ttp-orange rounded-full animate-pulse"></div>
              <span className="font-bold text-ttp-orange text-xs">
                BREAKING
              </span>
            </div>

            <div className="flex-1 overflow-hidden">
              <div className="relative h-5">
                {newsItems.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === currentIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
                  >
                    <div className="flex items-center space-x-2 h-full">
                      <span className="text-white text-xs font-medium truncate">
                        {item.headline}
                      </span>
                      <span className="text-gray-400 text-xs flex items-center flex-shrink-0">
                        <Clock className="w-2.5 h-2.5 mr-1" />
                        {item.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-2 h-2 bg-ttp-orange rounded-full animate-pulse"></div>
              <span className="font-bold text-ttp-orange text-sm">
                BREAKING
              </span>
            </div>

            <div className="w-px h-4 bg-ttp-orange/30"></div>

            <div className="flex-1 overflow-hidden">
              <div className="relative h-6">
                {newsItems.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === currentIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
                  >
                    <div className="flex items-center space-x-3 h-full">
                      <span className="text-white text-sm font-medium">
                        {item.headline}
                      </span>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        <span className="text-gray-400 text-xs flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
