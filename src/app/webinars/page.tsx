'use client'
import React, { useState } from "react";
import { Scroller } from "@/shared/components/scroller";
import {
  Search,
  Grid,
  List,
  Calendar,
  User,
  Clock,
  Play,
  Users,
} from "lucide-react";
import { Button } from "@/shared/components/button";
import { Badge } from "@/shared/components/badge";
import { Input } from "@/shared/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/select";
// import { Link } from "react-router-dom";
import Link from "next/link";

import { getAllContent } from "@/app/types/webinar";

const WebinarPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("latest");
  const [filterBy, setFilterBy] = useState("all");

  const { webinars } = getAllContent();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-green-500 text-white";
      case "completed":
        return "bg-blue-500 text-white";
      case "live":
        return "bg-red-500 text-white animate-pulse";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const filteredWebinars = webinars.filter((webinar) => {
    if (filterBy === "all") return true;
    return webinar.status === filterBy;
  });

  // const createSlug = (title: string) => {
  //   return title
  //     .toLowerCase()
  //     .replace(/[^a-z0-9]+/g, "-")
  //     .replace(/(^-|-$)/g, "");
  // };

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
              <span className="text-ttp-orange">Webinars</span>
            </div>
            <h1 className="text-4xl font-bold text-ttp-charcoal mb-4">
              Expert Webinars
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Join our industry experts for in-depth discussions on the latest
              trends, regulations, and innovations in trade finance, treasury
              management, and digital payments.
            </p>
          </div>

          {/* Filters and Controls */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
 <Input
  placeholder="Search companies, products, or technologies..."
  className="pl-10 border border-gray-300 text-[#3E3D4C] bg-white placeholder:text-gray-400"
/>              </div>

              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger   className="border border-gray-300 bg-white text-[#3E3D4C] w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-white text-[#3E3D4C]">
                  <SelectItem value="all">All Webinars</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="live">Live Now</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger   className="border border-gray-300 bg-white text-[#3E3D4C] w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-white text-[#3E3D4C]">
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="upcoming">Upcoming First</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="alphabetical">A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Webinar Grid/List */}
          <div
            className={
              viewMode === "grid"
                ? "grid lg:grid-cols-3 md:grid-cols-2 gap-6"
                : "space-y-4"
            }
          >
            {filteredWebinars.map((webinar) => (
              <Link
                key={webinar.id}
                href={`/webinardetails`}
                className={`group cursor-pointer block ${
                  viewMode === "list"
                    ? "flex gap-6 p-6 bg-white rounded-lg border hover:shadow-lg transition-shadow"
                    : "bg-white rounded-lg border hover:shadow-lg transition-shadow overflow-hidden"
                }`}
              >
                {viewMode === "grid" ? (
                  <>
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={webinar.image}
                        alt={webinar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getStatusColor(webinar.status)}>
                          {webinar.status.charAt(0).toUpperCase() +
                            webinar.status.slice(1)}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-lg text-ttp-charcoal mb-2 group-hover:text-ttp-orange transition-colors line-clamp-2">
                        {webinar.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {webinar.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {webinar.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {webinar.companyName && (
                        <div className="mb-3">
                          <Badge className="bg-ttp-orange/10 text-ttp-orange text-xs">
                            {webinar.companyName}
                          </Badge>
                        </div>
                      )}

                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{webinar.presenter}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(webinar.date).toLocaleDateString()} at{" "}
                            {webinar.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{webinar.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{webinar.attendees} attendees</span>
                        </div>
                      </div>

                      <Button
                        className="w-full"
                        variant={
                          webinar.status === "upcoming" ? "default" : "outline"
                        }
                      >
                        {webinar.status === "upcoming"
                          ? "Register Now"
                          : "Watch Recording"}
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-64 flex-shrink-0">
                      <div className="aspect-video relative overflow-hidden rounded-lg">
                        <img
                          src={webinar.image}
                          alt={webinar.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className={getStatusColor(webinar.status)}>
                            {webinar.status.charAt(0).toUpperCase() +
                              webinar.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-ttp-charcoal group-hover:text-ttp-orange transition-colors mb-2">
                        {webinar.title}
                      </h3>

                      <p className="text-gray-600 mb-4">
                        {webinar.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {webinar.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {webinar.companyName && (
                          <Badge className="bg-ttp-orange/10 text-ttp-orange text-xs">
                            {webinar.companyName}
                          </Badge>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{webinar.presenter}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(webinar.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{webinar.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{webinar.attendees} attendees</span>
                        </div>
                      </div>

                      <Button
                        className="w-full max-w-48"
                        variant={
                          webinar.status === "upcoming" ? "default" : "outline"
                        }
                      >
                        {webinar.status === "upcoming"
                          ? "Register Now"
                          : "Watch Recording"}
                      </Button>
                    </div>
                  </>
                )}
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
              Load More Webinars
            </Button>
          </div>
        </div>
      </main>

    </div>
  );
};

export default WebinarPage;
