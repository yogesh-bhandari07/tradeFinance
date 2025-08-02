import React from "react";
import { Badge } from "@/shared/components/badge";
import { Button } from "@/shared/components/button";
import { Sparkles, Clock, User, ChevronRight } from "lucide-react";

interface Story {
  theme: string;
  type: string;
  title: string;
  description: string;
  time: string;
  author: string;
  category: string;
  image: string;
  isBreaking: boolean;
}

interface HeroFeaturedStoryProps {
  story: Story;
}

export const HeroFeaturedStory: React.FC<HeroFeaturedStoryProps> = ({
  story,
}) => {
  return (
    <div className="mb-8">
      <div className="relative overflow-hidden rounded-xl shadow-xl group cursor-pointer bg-white/20 backdrop-blur-lg border border-white/30">
        <div className="aspect-[3/1] relative">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
            <div className="flex flex-wrap gap-2 mb-3">
              {story.isBreaking && (
                <Badge className="bg-red-600 text-white animate-pulse text-xs">
                  <Sparkles className="w-3 h-3 mr-1" />
                  BREAKING
                </Badge>
              )}
              <Badge
                variant="outline"
                className="bg-white/20 text-white border-white/30 text-xs backdrop-blur-sm"
              >
                {story.category}
              </Badge>
            </div>

            <h2 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
              {story.title}
            </h2>
            <p className="text-sm text-white/90 mb-3 max-w-2xl">
              {story.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 text-xs text-white/80">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{story.time}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="w-3 h-3" />
                  <span>{story.author}</span>
                </div>
              </div>
              <Button
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs backdrop-blur-sm"
              >
                Read More
                <ChevronRight className="ml-1 w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
