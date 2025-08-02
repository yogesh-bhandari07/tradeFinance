'use client';
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
// import { AISearchInterface } from "@/components/search/AISearchInterface";
import { PersonalizedSidebar } from "@/app/home/components/personalized/components/sidebar";
import { PersonalizedContentGrid } from "@/app/home/components/personalized/components/contentgrid";
import { PersonalizationSetup } from "@/app/home/components/personalized/components/setup";
import { usePersonalization } from "@/hooks/usePersonalization";
import { PersonalizedContent } from "@/app/types/prefrences";
import { Button } from "@/shared/components/button";
import { Settings, Sparkles } from "lucide-react";

// Mock personalized content data
const mockPersonalizedContent: PersonalizedContent[] = [
  {
    id: "1",
    title: "HSBC Digital Trade Platform: Emerging Markets Opportunity",
    description:
      "Comprehensive analysis of HSBC's latest digital trade finance solutions and their impact on emerging market opportunities.",
    type: "article",
    category: "Trade Finance",
    author: "Mark Thompson",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    publishDate: new Date("2024-01-25"),
    contentImage:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Trade Finance", "Digital Banking", "Emerging Markets", "HSBC"],
    relevanceScore: 0.95,
    difficulty: "intermediate",
    region: "Global",
    industry: "Banking",
    href: "/posts/hsbc-digital-trade-platform",
    isBookmarked: false,
    isRead: false,
  },
  {
    id: "2",
    title: "Treasury Management Best Practices for 2024",
    description:
      "Essential treasury management strategies for corporate treasurers and finance teams in the current economic climate.",
    type: "guide",
    category: "Treasury",
    author: "Sarah Chen",
    authorImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b593?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    publishDate: new Date("2024-01-15"),
    contentImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Treasury", "Cash Management", "Risk Management"],
    relevanceScore: 0.88,
    difficulty: "intermediate",
    region: "North America",
    industry: "Corporate Treasury",
    href: "/posts/treasury-best-practices",
    isBookmarked: true,
    isRead: false,
  },
  {
    id: "3",
    title: "Cross-border Payments Innovation: A Deep Dive",
    description:
      "Latest developments in cross-border payment technologies and regulatory frameworks, including CBDCs and real-time payment systems.",
    type: "article",
    category: "Payments",
    author: "Michael Rodriguez",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd8a72f9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    publishDate: new Date("2024-01-08"),
    contentImage:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Payments", "Technology", "Regulation"],
    relevanceScore: 0.82,
    difficulty: "advanced",
    region: "Europe",
    industry: "Fintech",
    href: "/posts/cross-border-payments",
    isBookmarked: false,
    isRead: false,
  },
  {
    id: "4",
    title: "Webinar Recording: Navigating Regulatory Changes in Trade Finance",
    description:
      "Expert panel discussion on the latest regulatory changes impacting trade finance and compliance, with practical guidance for financial institutions.",
    type: "webinar",
    category: "Compliance",
    author: "Panel Discussion",
    authorImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    publishDate: new Date("2024-01-02"),
    contentImage:
      "https://images.unsplash.com/photo-1542744166-e35c9a063451?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Trade Finance", "Compliance", "Regulation"],
    relevanceScore: 0.75,
    difficulty: "intermediate",
    region: "Global",
    industry: "Banking",
    href: "/webinars/regulatory-changes-trade-finance",
    isBookmarked: false,
    isRead: false,
  },
];

export const PersonalizedHomepage = () => {
  const [showPreferences, setShowPreferences] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [filteredContent, setFilteredContent] = useState(
    mockPersonalizedContent
  );
  const [contentLoading, setContentLoading] = useState(false);

  const { preferences, isLoading: preferencesLoading } = usePersonalization();

  console.log("PersonalizedHomepage rendering:", {
    preferencesLoading,
    preferences,
    filteredContent: filteredContent.length,
    isSearchExpanded,
  });

  const handleBookmark = (contentId: string) => {
    setFilteredContent((prev) =>
      prev.map((item) =>
        item.id === contentId
          ? { ...item, isBookmarked: !item.isBookmarked }
          : item
      )
    );
  };

  const handleResetFilters = () => {
    setFilteredContent(mockPersonalizedContent);
  };

  // Show setup if no preferences
  if (!preferencesLoading && !preferences) {
    return (
      <section className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-ttp-orange/5 via-transparent to-ttp-purple/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ttp-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ttp-purple/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Card className="border-2 border-dashed border-ttp-orange/30 bg-gradient-to-br from-ttp-orange/5 to-amber-50/10 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <Sparkles className="w-16 h-16 text-ttp-orange mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-3">
                  Welcome to Your Personalized Intelligence Hub
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Get content recommendations tailored to your interests,
                  expertise level, and industry focus. Set up your preferences
                  to unlock a curated feed of insights.
                </p>
                <Button
                  onClick={() => setShowPreferences(true)}
                  className="bg-gradient-to-r from-ttp-orange to-amber-500 hover:from-ttp-orange/90 hover:to-amber-500/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Settings className="w-5 h-5 mr-2" />
                  Configure Your Hub
                </Button>
              </div>
            </CardContent>
          </Card>

          <PersonalizationSetup
            isOpen={showPreferences}
            onClose={() => setShowPreferences(false)}
            onComplete={() => {
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-ttp-orange/5 via-transparent to-ttp-purple/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ttp-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ttp-purple/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <h2 className="text-3xl font-bold text-white">
              Your Personalized Intelligence Hub
            </h2>
            <Button
              onClick={() => setShowPreferences(true)}
              variant="outline"
              className="border-ttp-orange text-ttp-orange hover:bg-ttp-orange hover:text-white"
            >
              <Settings className="w-4 h-4 mr-2" />
              Configure
            </Button>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            AI-powered content discovery tailored to your expertise and
            interests
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <PersonalizedSidebar
              onOpenPreferences={() => setShowPreferences(true)}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* AI Search Interface */}
            <div className="mb-6">
              {/* <AISearchInterface
                isExpanded={isSearchExpanded}
                onToggle={() => setIsSearchExpanded(!isSearchExpanded)}
              /> */}
            </div>

            {/* Personalized Content */}
            <Card className="bg-gray-800/50 backdrop-blur-sm shadow-xl border border-gray-700">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-white flex items-center gap-3">
                  <div className="w-7 h-7 bg-gradient-to-r from-ttp-orange to-ttp-purple rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AI</span>
                  </div>
                  Curated For You
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PersonalizedContentGrid
                  contentLoading={contentLoading}
                  filteredContent={filteredContent}
                  onBookmark={handleBookmark}
                  onResetFilters={handleResetFilters}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Personalization Setup Modal */}
      <PersonalizationSetup
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
        onComplete={() => {
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }}
      />
    </section>
  );
};
