import React from "react";
import { Badge } from "@/shared/components/badge";
import { Button } from "@/shared/components/button";
import { Clock, ArrowRight, ChevronRight } from "lucide-react";

interface NewsItem {
  headline: string;
  time: string;
  category: string;
}

interface HeroRecentNewsProps {
  news: NewsItem[];
}

export const HeroRecentNews: React.FC<HeroRecentNewsProps> = ({ news }) => {
  return (
    <div className="bg-white/30 backdrop-blur-lg rounded-xl p-6 mb-8 border border-white/40 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-ttp-charcoal flex items-center">
          <Clock className="w-5 h-5 mr-2 text-ttp-orange" />
          Highway Updates
        </h3>
        <Button
          variant="ghost"
          size="sm"
          className="text-ttp-orange hover:text-ttp-orange/80 hover:bg-white/20 backdrop-blur-sm"
        >
          View All
          <ArrowRight className="ml-1 w-4 h-4" />
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {news.map((newsItem, index) => (
          <div
            key={index}
            className="flex items-start justify-between p-3 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-colors cursor-pointer group"
          >
            <div className="flex-1 mr-3">
              <h4 className="text-sm font-medium text-ttp-charcoal group-hover:text-ttp-orange transition-colors mb-1">
                {newsItem.headline}
              </h4>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Badge
                  variant="outline"
                  className="text-xs py-0 px-2 bg-white/20 backdrop-blur-sm text-ttp-charcoal"
                >
                  {newsItem.category}
                </Badge>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{newsItem.time}</span>
                </span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-ttp-orange transition-colors flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
