import React from "react";
import { Badge } from "@/shared/components/badge";
import { Clock, User } from "lucide-react";

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

interface HeroSecondaryStoriesProps {
  stories: Story[];
}

export const HeroSecondaryStories: React.FC<HeroSecondaryStoriesProps> = ({
  stories,
}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stories.map((story, index) => (
        <div
          key={index}
          className="bg-white/30 backdrop-blur-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-white/40"
        >
          <div className="aspect-[4/3] relative overflow-hidden">
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-2 left-2">
              <Badge className="bg-ttp-orange text-white text-xs backdrop-blur-sm">
                {story.type}
              </Badge>
            </div>
          </div>

          <div className="p-3">
            <Badge
              variant="outline"
              className="text-xs mb-2 bg-white/20 backdrop-blur-sm text-ttp-charcoal"
            >
              {story.category}
            </Badge>

            <h3 className="text-sm font-bold text-ttp-charcoal mb-2 line-clamp-2 group-hover:text-ttp-orange transition-colors">
              {story.title}
            </h3>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{story.time}</span>
              </span>
              <span className="flex items-center space-x-1">
                <User className="w-3 h-3" />
                <span>{story.author}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
