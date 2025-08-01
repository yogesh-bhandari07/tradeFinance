'use client';
import React, { useState } from "react";
import { Scroller } from "@/shared/components/scroller";
import { Button } from "@/shared/components/button";
import { PodcastSubscriptionCTA } from "@/app/podcasts/components/cta";
import { PodcastFilters } from "@/app/podcasts/components/filters";
import Link  from "next/link";
import { Badge } from "@/shared/components/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import {
  Calendar,
  Clock,
  User,
  Download,
  Play,     
  Headphones,
} from "lucide-react";
import { getAllContent } from "@/app/types/webinar";

const PodcastPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("latest");
  const [filterBy, setFilterBy] = useState("all");

  const { podcasts } = getAllContent();

  const filteredPodcasts = podcasts.filter((podcast:any) => {
    if (filterBy === "all") return true;
    return podcast.category === filterBy;
  });

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "deep-dive":
        return "bg-ttp-purple text-white";
      case "news":
        return "bg-ttp-orange text-white";
      case "interview":
        return "bg-ttp-green text-white";
      case "educational":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Scroller />

      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span>Resources</span>
              <span>/</span>
              <span className="text-ttp-orange">Podcasts</span>
            </div>
            <h1 className="text-4xl font-bold text-ttp-charcoal mb-4">
              TTP Podcast Network
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Listen to expert insights, industry analysis, and
              thought-provoking discussions on trade finance, treasury
              management, and digital payments. Available on all major podcast
              platforms.
            </p>
          </div>

          <PodcastSubscriptionCTA />

          <PodcastFilters
            viewMode={viewMode}
            sortBy={sortBy}
            filterBy={filterBy}
            onViewModeChange={setViewMode}
            onSortByChange={setSortBy}
            onFilterByChange={setFilterBy}
          />

          {/* Podcast Grid */}
          <div
            className={
              viewMode === "grid"
                ? "grid lg:grid-cols-3 md:grid-cols-2 gap-6"
                : "space-y-4"
            }
          >
            {filteredPodcasts.map((podcast) => (
              <Link
                key={podcast.id}
                href={`/podcasts/${createSlug(podcast.title)}`}
                className="block"
              >
                <Card className="group hover:shadow-lg transition-shadow duration-300">
                  {viewMode === "grid" ? (
                    <>
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={podcast.image}
                          alt={podcast.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className={getCategoryColor(podcast.category)}>
                            {podcast.category.charAt(0).toUpperCase() +
                              podcast.category.slice(1).replace("-", " ")}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                          {podcast.duration}
                        </div>
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                      </div>

                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs text-ttp-charcoal">
                            Season {podcast.season}, Episode {podcast.episode}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg leading-tight group-hover:text-ttp-orange transition-colors line-clamp-2">
                          {podcast.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {podcast.description}
                        </p>

                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>Host: {podcast.host}</span>
                          </div>
                          {podcast.guest && (
                            <div className="flex items-center gap-2">
                              <Headphones className="w-4 h-4" />
                              <span>Guest: {podcast.guest}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(
                                podcast.publishDate
                              ).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            <span>{podcast.downloads} downloads</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {podcast.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs text-ttp-charcoal"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <Button className="w-full">
                          <Play className="w-4 h-4 mr-2" />
                          Listen Now
                        </Button>
                      </CardContent>
                    </>
                  ) : (
                    <div className="flex gap-6 p-6">
                      <div className="w-32 h-32 flex-shrink-0">
                        <img
                          src={podcast.image}
                          alt={podcast.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getCategoryColor(podcast.category)}>
                            {podcast.category.charAt(0).toUpperCase() +
                              podcast.category.slice(1).replace("-", " ")}
                          </Badge>
                          <Badge variant="outline" className="text-xs text-ttp-charcoal">
                            Season {podcast.season}, Episode {podcast.episode}
                          </Badge>
                        </div>
                        <h3 className="font-bold text-xl text-ttp-charcoal group-hover:text-ttp-orange transition-colors mb-2">
                          {podcast.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {podcast.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{podcast.host}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{podcast.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-ttp-orange text-ttp-orange hover:bg-ttp-orange hover:text-white"
            >
              Load More Episodes
            </Button>
          </div>
        </div>
      </main>

    </div>
  );
};

export default PodcastPage;
