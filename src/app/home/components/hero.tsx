'use client';
import React, { useState } from "react";
import { Users, BookOpen, Award, Globe } from "lucide-react";
import { HeroBackground } from "@/app/home/components/herobg";
import { HeroHeader } from "@/app/home/components/heroheader";
import { HeroThemeFilter } from "@/app/home/components/herofilter";
import { HeroFeaturedStory } from "@/app/home/components/herostory";
import { HeroSecondaryStories } from "@/app/home/components/herostories";
import { HeroRecentNews } from "@/app/home/components/news";
import { HeroStats } from "@/app/home/components/herostatus";
import { HeroCTA } from "@/app/home/components/herocta";

export const Hero = () => {
  const [activeTheme, setActiveTheme] = useState("all");

  const themes = [
    { id: "all", label: "All Stories", color: "bg-ttp-charcoal" },
    { id: "trade", label: "Trade Finance", color: "bg-ttp-orange" },
    { id: "treasury", label: "Treasury", color: "bg-ttp-green" },
    { id: "payments", label: "Payments", color: "bg-ttp-purple" },
    { id: "credit", label: "Credit Insurance", color: "bg-orange-600" },
    { id: "letters", label: "Letters of Credit", color: "bg-blue-600" },
  ];

  const allStories = [
    {
      theme: "letters",
      type: "Breaking News",
      title: "False representation claim dismissed in letters of credit case",
      description:
        "High Court ruling provides clarity on documentary credit disputes and representation requirements",
      time: "2h",
      author: "Deepesh Patel",
      category: "Letters of Credit",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isBreaking: true,
    },
    {
      theme: "trade",
      type: "Breaking News",
      title: "ICC expands sustainable trade framework with new guidelines",
      description:
        "International Chamber of Commerce launches comprehensive sustainability standards for global trade",
      time: "5h",
      author: "Deepesh Patel",
      category: "Trade Finance",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isBreaking: true,
    },
    {
      theme: "treasury",
      type: "Industry Analysis",
      title: "Welcome to the treasury multiverse: Which path will you choose?",
      description:
        "Exploring the diverse technological pathways reshaping corporate treasury operations",
      time: "1d",
      author: "Eleanor Hill",
      category: "Treasury Management",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isBreaking: false,
    },
    {
      theme: "payments",
      type: "Market Report",
      title: "Global B2B payments market to reach $137 trillion by 2030",
      description:
        "Comprehensive analysis reveals explosive growth in business-to-business payment solutions",
      time: "2d",
      author: "Devanshee Dave",
      category: "Digital Payments",
      image:
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isBreaking: false,
    },
    {
      theme: "trade",
      type: "Company News",
      title: "Bunge and Viterra complete landmark merger in commodity trading",
      description:
        "Agricultural giants finalize $34 billion deal creating new global commodity powerhouse",
      time: "3d",
      author: "Devanshee Dave",
      category: "Commodity Trading",
      image:
        "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isBreaking: false,
    },
    {
      theme: "credit",
      type: "Market Analysis",
      title:
        "ICISA reports solid growth as trade credit insurers adapt to global risks",
      description:
        "International Credit Insurance & Surety Association highlights industry resilience amid challenging conditions",
      time: "1w",
      author: "Carter Hoffman",
      category: "Credit Insurance",
      image:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isBreaking: false,
    },
    {
      theme: "payments",
      type: "Regulatory Update",
      title: "FSB recommendations push for regulatory clarity on stablecoins",
      description:
        "Financial Stability Board releases new guidelines as stablecoin volumes surge past $6 billion",
      time: "1w",
      author: "Carter Hoffman",
      category: "Digital Payments",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isBreaking: false,
    },
    {
      theme: "treasury",
      type: "Fintech News",
      title: "GTreasury launches GSmart AI for dedicated treasury operations",
      description:
        "Advanced artificial intelligence platform designed to revolutionize corporate treasury management",
      time: "2w",
      author: "Carter Hoffman",
      category: "Treasury Technology",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isBreaking: false,
    },
  ];

  const filteredStories =
    activeTheme === "all"
      ? allStories
      : allStories.filter((story) => story.theme === activeTheme);

  const featuredStory = filteredStories[0];
  const secondaryStories = filteredStories.slice(1, 5);

  const recentNews = [
    {
      headline: "Trade Treasury Payments joins TF COP Task Force",
      time: "5h",
      category: "Trade Finance",
    },
    {
      headline: "UNCTAD report reveals world economy in decline",
      time: "1d",
      category: "Global Economy",
    },
    {
      headline: "SWIFT reports 23% decline in RMB cross-border usage",
      time: "2d",
      category: "Payments",
    },
    {
      headline: "High Court rules Trafigura can retain $208m in Ghana dispute",
      time: "3d",
      category: "Commodity Finance",
    },
    {
      headline:
        "UKEF expands direct lending to support infrastructure projects",
      time: "4d",
      category: "Export Finance",
    },
    {
      headline:
        "Davis Commodities launches $30 million bitcoin treasury strategy",
      time: "5d",
      category: "Digital Assets",
    },
    {
      headline:
        "Armenia enacts crypto regulation law, introduces licensing framework",
      time: "1w",
      category: "Regulation",
    },
    {
      headline: "Bank of America enables higher-value real-time payments",
      time: "1w",
      category: "Payments",
    },
  ];

  const stats = [
    { label: "Active Readers", value: "160K+", icon: Users, trend: "+18%" },
    { label: "Daily Stories", value: "50+", icon: BookOpen, trend: "+12%" },
    { label: "Expert Authors", value: "200+", icon: Award, trend: "+15%" },
    { label: "Global Reach", value: "100+", icon: Globe, trend: "+22%" },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 min-h-screen relative overflow-hidden">
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <HeroHeader />

        <HeroThemeFilter
          themes={themes}
          activeTheme={activeTheme}
          onThemeChange={setActiveTheme}
        />

        {featuredStory && <HeroFeaturedStory story={featuredStory} />}

        <HeroSecondaryStories stories={secondaryStories} />

        <HeroRecentNews news={recentNews} />

        <HeroStats stats={stats} />

        <HeroCTA />
      </div>
    </section>
  );
};
