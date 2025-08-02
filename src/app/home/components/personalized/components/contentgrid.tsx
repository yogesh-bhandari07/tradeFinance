import React from "react";
import { Card, CardContent } from "@/shared/components/card";
import { Button } from "@/shared/components/button";
import { Badge } from "@/shared/components/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/shared/components/avatar";
import { ContentLoadingState } from "@/app/home/components/personalized/components/loading";
import { PersonalizedContent } from "@/app/types/prefrences";
import {
  Filter,
  Bookmark,
  BookmarkCheck,
  BookText,
  CirclePlus,
  CircleDot,
} from "lucide-react";

interface PersonalizedContentGridProps {
  contentLoading: boolean;
  filteredContent: PersonalizedContent[];
  onBookmark: (contentId: string) => void;
  onResetFilters: () => void;
}

const DifficultyIndicator: React.FC<{
  level: "beginner" | "intermediate" | "advanced" | "expert";
}> = ({ level }) => {
  const configs = {
    beginner: {
      dots: 1,
      color: "bg-ttp-green",
      label: "Beginner",
      animation: "animate-pulse",
    },
    intermediate: {
      dots: 2,
      color: "bg-ttp-orange",
      label: "Intermediate",
      animation: "animate-bounce",
    },
    advanced: {
      dots: 3,
      color: "bg-ttp-purple",
      label: "Advanced",
      animation: "animate-pulse",
    },
    expert: {
      dots: 4,
      color: "bg-red-500",
      label: "Expert",
      animation: "animate-ping",
    },
  };

  const config = configs[level];

  return (
    <div className="flex items-center gap-1" title={config.label}>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            i < config.dots
              ? `${config.color} ${config.animation}`
              : "bg-gray-600"
          }`}
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
};

export const PersonalizedContentGrid: React.FC<
  PersonalizedContentGridProps
> = ({ contentLoading, filteredContent, onBookmark, onResetFilters }) => {
  if (contentLoading) {
    return <ContentLoadingState />;
  }

  if (filteredContent.length === 0) {
    return (
      <Card className="p-12 text-center border-dashed border-2 border-gray-600 bg-gray-800/50 backdrop-blur-sm">
        <Filter className="w-16 h-16 text-gray-400 mx-auto mb-6" />
        <h3 className="text-xl font-semibold text-white mb-3">
          No content found
        </h3>
        <p className="text-gray-300 mb-6 max-w-md mx-auto">
          Adjust your filters or check back later for new content.
        </p>
        <Button
          variant="outline"
          onClick={onResetFilters}
          className="border-ttp-orange text-ttp-orange hover:bg-ttp-orange hover:text-white"
        >
          Reset All Filters
        </Button>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredContent.map((content, index) => (
        <div
          key={content.id}
          className={`${
            index === 0
              ? "md:col-span-2"
              : index === 3
              ? "md:col-span-2"
              : "md:col-span-1"
          }`}
        >
          <Card className="group bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 hover:border-ttp-orange overflow-hidden">
            {content.contentImage && (
              <div className="relative h-48 overflow-hidden">
                <img
                  src={content.contentImage}
                  alt={content.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge className="bg-gray-900/80 text-white border-gray-600 backdrop-blur-sm capitalize">
                    {content.type}
                  </Badge>
                  {content.type === "guide" && (
                    <Badge className="bg-ttp-green/80 text-white border-ttp-green backdrop-blur-sm">
                      <BookText className="w-3 h-3 mr-1" />
                      Guide
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <CirclePlus className="w-4 h-4 text-ttp-orange animate-pulse" />
                  {content.difficulty && (
                    <DifficultyIndicator level={content.difficulty} />
                  )}
                </div>
              </div>
            )}
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-10 h-10 border-2 border-ttp-orange/20">
                  <AvatarImage src={content.authorImage} alt={content.author} />
                  <AvatarFallback className="bg-ttp-orange/10 text-ttp-orange">
                    {content.author
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white text-sm font-medium">
                    {content.author}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {content.publishDate.toLocaleDateString()}
                  </p>
                </div>
                <div className="ml-auto">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onBookmark(content.id)}
                    className="text-gray-400 hover:text-ttp-orange"
                  >
                    {content.isBookmarked ? (
                      <BookmarkCheck className="w-4 h-4 text-ttp-orange animate-pulse" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-3 text-white group-hover:text-ttp-orange transition-colors">
                {content.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {content.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {content.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs bg-ttp-purple/10 text-ttp-purple border-ttp-purple/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {content.difficulty && !content.contentImage && (
                    <DifficultyIndicator level={content.difficulty} />
                  )}
                  {content.relevanceScore && (
                    <Badge className="bg-ttp-green/20 text-ttp-green border-ttp-green/30 flex items-center gap-1">
                      <CircleDot className="w-3 h-3 animate-pulse" />
                      {Math.round(content.relevanceScore * 100)}% match
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};
