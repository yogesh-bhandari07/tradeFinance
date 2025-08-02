import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import { Button } from "@/shared/components/button";
import { Badge } from "@/shared/components/badge";
import {
  MapPin,
  Calendar,
  Brain,
  Zap,
  Heart,
  BookOpen,
  TrendingUp,
  CircleDot,
  Shield,
  Award,
  Users,
} from "lucide-react";

interface PersonalizedSidebarProps {
  onOpenPreferences: () => void;
}

// Mock nearby events data
const mockNearbyEvents = [
  {
    id: "e1",
    title: "Digital Banking Summit 2025",
    date: new Date("2025-01-15"),
    location: "London, UK",
    type: "Conference",
    distance: "2.3 km",
  },
  {
    id: "e2",
    title: "Fintech Innovation Workshop",
    date: new Date("2025-01-22"),
    location: "Manchester, UK",
    type: "Workshop",
    distance: "45 km",
  },
];

export const PersonalizedSidebar: React.FC<PersonalizedSidebarProps> = ({
  onOpenPreferences,
}) => {
  return (
    <div className="space-y-6">
      {/* Trust & Authority Section */}
      <Card className="bg-gray-800/50 backdrop-blur-sm shadow-2xl border border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2 text-white">
            <Shield className="w-5 h-5 text-ttp-green animate-pulse" />
            Trusted Authority
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-ttp-green/10 rounded-lg border border-ttp-green/20">
            <span className="text-sm font-medium text-white">
              World Leaders
            </span>
            <Badge className="bg-ttp-green text-white flex items-center gap-1">
              <Users className="w-3 h-3 animate-bounce" />
              500+
            </Badge>
          </div>

          <div className="flex items-center justify-between p-3 bg-ttp-orange/10 rounded-lg border border-ttp-orange/20">
            <span className="text-sm font-medium text-white">
              Enterprise Clients
            </span>
            <Badge className="bg-ttp-orange text-white flex items-center gap-1">
              <Shield className="w-3 h-3 animate-pulse" />
              50+
            </Badge>
          </div>

          <div className="flex items-center justify-between p-3 bg-ttp-purple/10 rounded-lg border border-ttp-purple/20">
            <span className="text-sm font-medium text-white">
              Industry Awards
            </span>
            <Badge className="bg-ttp-purple text-white flex items-center gap-1">
              <Award className="w-3 h-3 animate-bounce" />
              12
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Events Near You */}
      <Card className="bg-gray-800/50 backdrop-blur-sm shadow-2xl border border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2 text-white">
            <MapPin className="w-5 h-5 text-ttp-orange animate-pulse" />
            Events Near You
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockNearbyEvents.map((event) => (
            <div
              key={event.id}
              className="p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-ttp-orange transition-colors"
            >
              <h4 className="font-medium text-white text-sm mb-2">
                {event.title}
              </h4>
              <div className="flex items-center justify-between text-xs text-gray-300">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 animate-pulse" />
                  {event.date.toLocaleDateString()}
                </span>
                <Badge
                  variant="outline"
                  className="text-xs bg-ttp-green/10 text-ttp-green border-ttp-green/30"
                >
                  {event.distance}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Neural Activity */}
      <Card className="bg-gray-800/50 backdrop-blur-sm shadow-2xl border border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2 text-white">
            <Brain className="w-5 h-5 text-ttp-green animate-pulse" />
            Neural Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <span className="text-sm font-medium text-white">
              Content Processed
            </span>
            <Badge className="bg-blue-500 text-white flex items-center gap-1">
              <CircleDot className="w-3 h-3 animate-ping" />
              23
            </Badge>
          </div>

          <div className="flex items-center justify-between p-4 bg-ttp-green/10 rounded-lg border border-ttp-green/20">
            <span className="text-sm font-medium text-white">Neural Hours</span>
            <Badge className="bg-ttp-green text-white flex items-center gap-1">
              <Zap className="w-3 h-3 animate-pulse" />
              12.5h
            </Badge>
          </div>

          <div className="flex items-center justify-between p-4 bg-ttp-purple/10 rounded-lg border border-ttp-purple/20">
            <span className="text-sm font-medium text-white">Bookmarked</span>
            <Badge className="bg-ttp-purple text-white flex items-center gap-1">
              <Heart className="w-3 h-3 animate-bounce" />8
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Quick Neural Actions - Fixed button text visibility */}
      <Card className="bg-gray-800/50 backdrop-blur-sm shadow-2xl border border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2 text-white">
            <Zap className="w-5 h-5 text-ttp-purple animate-pulse" />
            Neural Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            variant="outline"
            className="w-full justify-start bg-gray-700/50 border-ttp-orange/50 text-white hover:bg-ttp-orange hover:border-ttp-orange hover:text-white transition-all"
            size="sm"
          >
            <BookOpen className="w-4 h-4 mr-2 text-ttp-orange" />
            Neural Library
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start bg-gray-700/50 border-ttp-green/50 text-white hover:bg-ttp-green hover:border-ttp-green hover:text-white transition-all"
            size="sm"
          >
            <TrendingUp className="w-4 h-4 mr-2 text-ttp-green" />
            Trending Insights
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start bg-gray-700/50 border-ttp-purple/50 text-white hover:bg-ttp-purple hover:border-ttp-purple hover:text-white transition-all"
            size="sm"
            onClick={onOpenPreferences}
          >
            <Brain className="w-4 h-4 mr-2 text-ttp-purple" />
            Neural Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
