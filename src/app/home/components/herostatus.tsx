import React from "react";
import { TrendingUp } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  icon: React.ComponentType<any>;
  trend: string;
}

interface HeroStatsProps {
  stats: Stat[];
}

export const HeroStats: React.FC<HeroStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/40 backdrop-blur-lg rounded-xl p-4 border border-white/30 hover:shadow-lg transition-all duration-300 group shadow-md"
        >
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-ttp-orange/10 to-ttp-purple/10 rounded-lg mb-2 group-hover:scale-110 transition-transform duration-300">
            <stat.icon className="w-4 h-4 text-ttp-orange" />
          </div>
          <div className="text-lg font-bold text-ttp-charcoal mb-1">
            {stat.value}
          </div>
          <div className="text-xs text-gray-600 mb-1">{stat.label}</div>
          <div className="text-xs text-green-600 font-medium flex items-center">
            <TrendingUp className="w-3 h-3 mr-1" />
            {stat.trend}
          </div>
        </div>
      ))}
    </div>
  );
};
