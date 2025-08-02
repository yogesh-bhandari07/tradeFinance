import React from "react";
import { Play, Eye, Star, Globe } from "lucide-react";
import { Badge } from "@/shared/components/badge";
import { Card, CardContent } from "@/shared/components/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/avatar";
import { getTypeIcon, getTypeColor } from "@/app/types/media";

interface MediaItem {
  id: string;
  type: string;
  title: string;
  author: string;
  authorAvatar: string;
  company: string;
  thumbnail: string;
  duration: string;
  views: string;
  category: string;
  featured: boolean;
}

interface MediaCardProps {
  item: MediaItem;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export const MediaCard = ({
  item,
  isHovered,
  onHover,
  onLeave,
}: MediaCardProps) => {
  const TypeIcon = getTypeIcon(item.type);

  return (
    <Card
      className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden bg-white/20 backdrop-blur-lg border border-white/30"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative">
        <div className="absolute top-3 left-3 z-10">
          <Badge
            className={`${getTypeColor(
              item.type
            )} flex items-center gap-1 px-2 py-1 text-xs`}
          >
            <TypeIcon className="w-3 h-3" />
            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </Badge>
        </div>

        {(item.featured || item.type === "livestream") && (
          <div className="absolute top-3 right-3 z-10">
            {item.featured && (
              <Badge className="bg-yellow-500 text-white text-xs px-2 py-1">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
            {item.type === "livestream" && (
              <Badge className="bg-red-600 text-white animate-pulse text-xs px-2 py-1 ml-2">
                <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                LIVE
              </Badge>
            )}
          </div>
        )}

        <div className="relative h-48 overflow-hidden">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
              <Play className="w-5 h-5 text-ttp-orange ml-1" />
            </div>
          </div>

          <div className="absolute bottom-3 right-3">
            <Badge className="bg-black/70 text-white text-xs px-2 py-1">
              {item.type === "livestream" ? (
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  LIVE
                </span>
              ) : (
                item.duration
              )}
            </Badge>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-ttp-charcoal mb-2 line-clamp-2 group-hover:text-ttp-orange transition-colors">
          {item.title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <Avatar className="w-6 h-6">
            <AvatarImage src={item.authorAvatar} alt={item.author} />
            <AvatarFallback className="text-xs">
              {item.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-gray-600">{item.author}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3 text-gray-500">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{item.views}</span>
            </div>
            <Badge variant="outline" className="text-xs text-ttp-charcoal">
              {item.category}
            </Badge>
          </div>

          {isHovered && (
            <div className="flex items-center gap-1 text-ttp-orange">
              <span className="text-xs font-medium">VIEW</span>
              <Globe className="w-3 h-3" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
