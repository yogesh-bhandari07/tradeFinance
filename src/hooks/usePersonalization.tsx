import { useState, useEffect } from "react";
import {
  UserPreferences,
  FilterOptions,
} from "@/app/types/prefrences";

// Mock data for demonstration
const mockPreferences: UserPreferences = {
  id: "1",
  userId: "user-1",
  industries: ["Banking", "Fintech", "Insurance"],
  regions: ["North America", "Europe"],
  expertiseLevel: "intermediate",
  contentAreas: ["Trade Finance", "Treasury", "Payments"],
  preferredContentTypes: ["articles", "videos", "webinars", "guides"],
  createdAt: new Date(),
  updatedAt: new Date(),
};

const filterOptions: FilterOptions = {
  industries: [
    "Banking",
    "Fintech",
    "Insurance",
    "Corporate Treasury",
    "Technology",
    "Manufacturing",
    "Energy",
    "Healthcare",
  ],
  regions: [
    "North America",
    "Europe",
    "Asia Pacific",
    "Latin America",
    "Middle East",
    "Africa",
  ],
  expertiseLevels: ["beginner", "intermediate", "advanced", "expert"],
  contentAreas: [
    "Trade Finance",
    "Treasury",
    "Payments",
    "Compliance",
    "Risk Management",
    "Digital Transformation",
  ],
  contentTypes: [
    "articles",
    "videos",
    "podcasts",
    "webinars",
    "reports",
    "guides",
  ],
};

export const usePersonalization = () => {
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading preferences
    setTimeout(() => {
      setPreferences(mockPreferences);
      setIsLoading(false);
    }, 500);
  }, []);

  const updatePreferences = async (
    newPreferences: Partial<UserPreferences>
  ) => {
    if (preferences) {
      const updated = {
        ...preferences,
        ...newPreferences,
        updatedAt: new Date(),
      };
      setPreferences(updated);
      // Here you would normally save to backend
      console.log("Preferences updated:", updated);
    }
  };

  const getFilterOptions = () => filterOptions;

  return {
    preferences,
    isLoading,
    updatePreferences,
    getFilterOptions,
  };
};
