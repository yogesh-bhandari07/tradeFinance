"use client";
import React from "react";
// import { useLocation } from "react-router-dom";
import { usePathname } from "next/navigation";

import { Button } from "@/shared/components/button";
import { Badge } from "@/shared/components/badge";
import { Card, CardContent } from "@/shared/components/card";
import {
  FileText,
  Download,
  Calendar,
  User,
  ArrowRight,
  BookOpen,
} from "lucide-react";

const ContentPage = () => {
  //   const location = useLocation();
  //   const pathSegments = location.pathname.split("/");

  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const contentType = pathSegments[pathSegments.length - 1];
  const getContentInfo = () => {
    const contentMap: Record<
      string,
      { title: string; description: string; icon: any }
    > = {
      "latest-articles": {
        title: "Latest Articles",
        description:
          "Stay up to date with the latest news and insights in trade finance, treasury, and payments.",
        icon: FileText,
      },
      "guides-tutorials": {
        title: "Guides & Tutorials",
        description:
          "Step-by-step guides and tutorials to help you navigate complex financial processes.",
        icon: BookOpen,
      },
      glossary: {
        title: "Financial Glossary",
        description:
          "Comprehensive definitions of terms used in trade finance, treasury, and payments.",
        icon: FileText,
      },
      "best-practices": {
        title: "Best Practices",
        description:
          "Industry best practices and proven methodologies from leading experts.",
        icon: FileText,
      },
      templates: {
        title: "Document Templates",
        description:
          "Ready-to-use templates for trade finance documentation and processes.",
        icon: Download,
      },
      "training-programs": {
        title: "Training Programs",
        description:
          "Professional development programs designed for industry professionals.",
        icon: BookOpen,
      },
      certification: {
        title: "Certification Courses",
        description:
          "Earn industry-recognized certifications in trade finance and treasury management.",
        icon: FileText,
      },
      whitepapers: {
        title: "Research Whitepapers",
        description:
          "In-depth research papers on emerging trends and technologies.",
        icon: FileText,
      },
      "market-data": {
        title: "Market Data & Analytics",
        description:
          "Real-time market data and comprehensive analytics for informed decision-making.",
        icon: FileText,
      },
      surveys: {
        title: "Industry Surveys",
        description:
          "Comprehensive surveys and reports on industry trends and benchmarks.",
        icon: FileText,
      },
    };

    return (
      contentMap[contentType] || {
        title: "Content Library",
        description: "Explore our comprehensive content library.",
        icon: FileText,
      }
    );
  };

  const contentInfo = getContentInfo();
  const IconComponent = contentInfo.icon;

  const sampleContent = [
    {
      id: "1",
      title: "Understanding Letters of Credit: A Complete Guide",
      description:
        "Comprehensive guide covering the fundamentals of letters of credit in international trade.",
      author: "Sarah Chen",
      date: "2025-01-15",
      readTime: "12 min read",
      category: "Trade Finance",
      type: "guide",
    },
    {
      id: "2",
      title: "Digital Payment Rails: Infrastructure and Implementation",
      description:
        "Technical overview of modern payment infrastructure and implementation strategies.",
      author: "Michael Rodriguez",
      date: "2025-01-14",
      readTime: "8 min read",
      category: "Payments",
      type: "whitepaper",
    },
    {
      id: "3",
      title: "Treasury Risk Management Framework",
      description:
        "Best practices for implementing comprehensive risk management in treasury operations.",
      author: "Jennifer Park",
      date: "2025-01-13",
      readTime: "15 min read",
      category: "Treasury",
      type: "template",
    },
    {
      id: "4",
      title: "SWIFT Messaging Standards Update",
      description:
        "Latest updates to SWIFT messaging standards and their impact on financial institutions.",
      author: "David Kim",
      date: "2025-01-12",
      readTime: "6 min read",
      category: "Compliance",
      type: "article",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      =
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#3E3D4C] to-[#6A0DAD] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <IconComponent className="h-8 w-8 text-ttp-orange" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  {contentInfo.title}
                </h1>
              </div>
              <p className="text-xl opacity-90 mb-8">
                {contentInfo.description}
              </p>
              <div className="flex gap-4">
                <Button className="bg-ttp-orange hover:bg-ttp-orange/90">
                  Explore Content
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  Subscribe for Updates
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {sampleContent.map((item) => (
                <Card
                  key={item.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className="bg-ttp-orange text-white">
                        {item.category}
                      </Badge>
                      <Badge variant="outline" className="text-black">
                        {item.type}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-semibold text-ttp-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{item.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <span>{item.readTime}</span>
                    </div>

                    <Button className="w-full group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More Content
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-ttp-charcoal mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest insights delivered to your inbox weekly.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ttp-orange"
              />
              <Button className="bg-ttp-orange hover:bg-ttp-orange/90">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContentPage;
