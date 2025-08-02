import React from "react";
import { Card, CardContent } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import { Button } from "@/shared/components/button";
import {
  BookOpen,
  Download,
  ExternalLink,
  Star,
  Calendar,
  FileText,
  Award,
  Eye,
} from "lucide-react";

export const Publications = () => {
  const featuredEdition = {
    title: "Trade Treasury Payments Magazine - Issue #23",
    subtitle:
      "New Crossroads: How Connector Nations are Rewriting Trade Routes",
    description:
      'In ports and boardrooms around the world, patterns of commerce that once seemed immutable are shifting with the geopolitical tides. A new cohort of "connector" trade nations is emerging, countries that act as mid-stations between trading partners.',
    image: "/lovable-uploads/deee8b7f-f5cb-418b-90d5-8b669e58a071.png",
    issueNumber: "Issue #23",
    publishDate: "June 2025",
    pages: 84,
    featured: true,
    downloadCount: "25.3k",
    rating: 4.9,
    readTime: "45 min",
  };

  const publications = [
    {
      title: "Trade Digitisation's Bumpy Road to Interoperability",
      type: "TTP x ICC DSI Whitepaper",
      description:
        "Comprehensive analysis of digital trade infrastructure challenges and the path toward seamless interoperability across global platforms",
      image: "/lovable-uploads/467c4de5-4302-466c-b223-47feb762f6e6.png",
      tags: ["ICC", "Digital Standards", "Interoperability"],
      downloadCount: "12.5k",
      rating: 4.9,
      pages: 156,
      publishDate: "May 2025",
      category: "report",
    },
    {
      title: "The Unseen Side of Trade Digitalisation",
      type: "TTP Research Report",
      description:
        "Data inequality and the global economic divide - exploring how digital transformation is reshaping international trade dynamics",
      image: "/lovable-uploads/d0a1952b-03f8-4eb1-90db-1a87b541ca43.png",
      tags: ["Digital Trade", "Economic Research", "Global Markets"],
      downloadCount: "8.2k",
      rating: 4.8,
      pages: 89,
      publishDate: "April 2025",
      category: "research",
    },
    {
      title: "History of Tariffs: From Ancient Times to Modern Day",
      type: "Historical Analysis",
      description:
        "A comprehensive journey through the evolution of tariffs and their impact on global trade patterns throughout history",
      image: "/lovable-uploads/a2045825-c655-4d80-875e-7ea4738838fb.png",
      tags: ["Trade History", "Tariffs", "Policy Analysis"],
      downloadCount: "6.7k",
      rating: 4.7,
      pages: 124,
      publishDate: "March 2025",
      category: "guide",
    },
    {
      title: "Trade Finance Guide: Back to Basics",
      type: "ITFA Partnership",
      description:
        "A comprehensive back-to-basics guide covering fundamental concepts and modern applications of trade finance",
      image: "/lovable-uploads/718c0fe5-8c79-4770-935a-fbc9faf4b90b.png",
      tags: ["ITFA", "Trade Finance", "Educational"],
      downloadCount: "18.9k",
      rating: 4.8,
      pages: 76,
      publishDate: "February 2025",
      category: "guide",
    },
    {
      title: "There's No New Normal - Issue 01",
      type: "Inaugural Issue",
      description:
        "Brave new world for liquidity and risk management - exploring post-pandemic financial landscapes and emerging opportunities",
      image: "/lovable-uploads/c43aac6a-8f10-4bcd-a827-a98eb2689686.png",
      tags: ["Risk Management", "Liquidity", "Post-Pandemic"],
      downloadCount: "15.2k",
      rating: 4.9,
      pages: 92,
      publishDate: "January 2025",
      category: "magazine",
    },
    {
      title: "Trade Credit Insurance Guide",
      type: "ICISA Partnership",
      description:
        "A comprehensive guide to credit insurance and risk mitigation strategies for international trade professionals",
      image: "/lovable-uploads/d4be37da-82a1-4dd4-8342-60aa362ba1d8.png",
      tags: ["ICISA", "Credit Insurance", "Risk Management"],
      downloadCount: "9.8k",
      rating: 4.6,
      pages: 68,
      publishDate: "December 2024",
      category: "guide",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "magazine":
        return "bg-ttp-orange text-white";
      case "report":
        return "bg-ttp-purple text-white";
      case "guide":
        return "bg-ttp-green text-white";
      case "research":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "magazine":
        return BookOpen;
      case "report":
        return FileText;
      case "guide":
        return Award;
      case "research":
        return Star;
      default:
        return BookOpen;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50/50 via-white/30 to-white/50 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(241,104,20,0.03),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/40 backdrop-blur-lg px-4 py-2 rounded-full mb-4 border border-white/30 shadow-lg">
            <BookOpen className="w-5 h-5 text-ttp-orange" />
            <span className="text-ttp-orange font-medium">
              Publications & Resources
            </span>
          </div>
          <h2 className="text-4xl font-bold text-ttp-charcoal mb-4">
            Magazine, Reports & Expert Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our flagship magazine, exclusive industry reports, and
            comprehensive guides from leading financial institutions
          </p>
        </div>

        {/* Featured Magazine Edition */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-gradient-to-r from-ttp-charcoal to-ttp-purple text-white shadow-2xl backdrop-blur-lg border border-white/20">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0 bg-[#994fb2]">
                <div className="relative p-6">
                  <div className="aspect-[3/4] bg-gray-100/10 rounded-lg overflow-hidden max-w-sm mx-auto ">
                    <img
                      src={featuredEdition.image}
                      alt={featuredEdition.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-10 left-10">
                    <Badge className="bg-ttp-orange text-ttp-charcoal flex items-center gap-1 ">
                      <Star className="w-3 h-3" />
                      Latest Edition
                    </Badge>
                  </div>
                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="flex justify-between items-center text-white/90 text-sm">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {featuredEdition.downloadCount}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {featuredEdition.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <Badge className="bg-white/20 text-white mb-2">
                      {featuredEdition.issueNumber}
                    </Badge>
                    <h3 className="text-3xl font-bold mb-2">
                      {featuredEdition.title}
                    </h3>
                    <h4 className="text-xl text-ttp-orange mb-4">
                      {featuredEdition.subtitle}
                    </h4>
                  </div>

                  <p className="text-white/90 mb-6 text-lg leading-relaxed">
                    {featuredEdition.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                    <div>
                      <div className="text-2xl font-bold text-ttp-orange">
                        {featuredEdition.pages}
                      </div>
                      <div className="text-white/80 text-sm">Pages</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-ttp-orange">
                        {featuredEdition.readTime}
                      </div>
                      <div className="text-white/80 text-sm">Read Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-ttp-orange">
                        {featuredEdition.publishDate}
                      </div>
                      <div className="text-white/80 text-sm">Published</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1 bg-ttp-orange hover:bg-ttp-orange/90 text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Read Magazine
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Publications Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {publications.map((pub, index) => {
            const CategoryIcon = getCategoryIcon(pub.category);
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/40 backdrop-blur-lg border border-white/30"
              >
                <div className="relative p-4">
                  <div className="aspect-[3/4] bg-gray-100/50 overflow-hidden rounded-lg max-w-[200px] mx-auto">
                    <img
                      src={pub.image}
                      alt={pub.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-8 left-8">
                    <Badge
                      className="flex items-center gap-1 text-ttp-charcoal"
                    >
                      <CategoryIcon className="w-3 h-3 " />
                      {pub.type}
                    </Badge>
                  </div>
                  <div className="absolute bottom-8 right-8">
                    <Badge
                      variant="secondary"
                      className="bg-black/70 text-white backdrop-blur-sm"
                    >
                      {pub.pages} pages
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-ttp-charcoal mb-2 group-hover:text-ttp-orange transition-colors line-clamp-2">
                    {pub.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {pub.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {pub.tags.slice(0, 2).map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs text-ttp-charcoal">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        {pub.rating}
                      </div>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        {pub.downloadCount}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {pub.publishDate}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-ttp-orange hover:bg-ttp-orange/90"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-ttp-orange text-ttp-orange"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-ttp-orange hover:bg-ttp-orange/90 text-white px-8 backdrop-blur-lg"
          >
            View All Publications
            <BookOpen className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
