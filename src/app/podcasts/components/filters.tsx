import React from "react";
import { Search,  Grid, List } from "lucide-react";
import { Button } from "@/shared/components/button";
import { Input } from "@/shared/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/select";

interface PodcastFiltersProps {
  viewMode: "grid" | "list";
  sortBy: string;
  filterBy: string;
  onViewModeChange: (mode: "grid" | "list") => void;
  onSortByChange: (value: string) => void;
  onFilterByChange: (value: string) => void;
}

export const PodcastFilters = ({
  viewMode,
  sortBy,
  filterBy,
  onViewModeChange,
  onSortByChange,
  onFilterByChange,
}: PodcastFiltersProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-1">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Search podcasts..."   className="pl-10 border border-gray-300 text-[#3E3D4C] bg-white placeholder:text-gray-400"
/>
        </div>

        <Select value={filterBy} onValueChange={onFilterByChange}>
                <SelectTrigger   className="border border-gray-300 bg-white text-[#3E3D4C] w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
                <SelectContent className="bg-white text-[#3E3D4C]">
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="deep-dive">Deep Dive</SelectItem>
            <SelectItem value="news">News & Updates</SelectItem>
            <SelectItem value="interview">Interviews</SelectItem>
            <SelectItem value="educational">Educational</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={onSortByChange}>
                <SelectTrigger   className="border border-gray-300 bg-white text-[#3E3D4C] w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
                <SelectContent className="bg-white text-[#3E3D4C]">
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="duration">Duration</SelectItem>
            <SelectItem value="alphabetical">A-Z</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant={viewMode === "grid" ? "default" : "outline"}
          size="sm"
          onClick={() => onViewModeChange("grid")}
        >
          <Grid className="w-4 h-4" />
        </Button>
        <Button
          variant={viewMode === "list" ? "default" : "outline"}
          size="sm"
          onClick={() => onViewModeChange("list")}
        >
          <List className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
