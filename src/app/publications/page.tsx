'use client';
import React, { useState } from "react";
// import { NewsScroller } from "@/shared/components/scroller";
import {
  Search,
  Grid,
  List,
  Download,
  Eye,
  Calendar,
  FileText,
  BookOpen,
  Star,
  Building,
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
import { Card, CardContent} from "@/shared/components/card";
import  Link  from "next/link";
// import { getAllContent } from "@/app/types/content";

const EditionsPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("latest");
  const [filterBy, setFilterBy] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredPublication, setHoveredPublication] = useState<string | null>(
    null
  );

  // Enhanced publication data with the new categories
  const publications = [
    {
      id: "ttp-magazine-q1-2024",
      title: "Trade Treasury & Payments Q1 2024",
      subtitle:
        "THERE'S NO NEW NORMAL - Brave new world for liquidity and risk management",
      description:
        "Comprehensive quarterly analysis of trade finance trends, digital transformation, and market insights from leading industry experts.",
      coverImage: "https://picsum.photos/200/300/?blur",
      category: "magazine",
      type: "Quarterly Magazine",
      issueNumber: 1,
      publishDate: "2024-03-15",
      pageCount: 84,
      featured: true,
      sponsored: false,
      partnerPublication: false,
      companyName: "",
      tags: [
        "Trade Finance",
        "Digital Transformation",
        "Risk Management",
        "Liquidity",
      ],
      articles: [
        "The Future of Digital Trade Finance",
        "Central Bank Digital Currencies: A New Era",
        "ESG in Supply Chain Finance",
        "Cross-border Payment Innovations",
      ],
      downloadCount: "2.5k",
      views: "12.8k",
    },
    {
      id: "trade-credit-insurance-guide",
      title: "Trade Credit Insurance Guide",
      subtitle: "A guide to credit insurance and risk mitigation",
      description:
        "Comprehensive guide covering credit insurance fundamentals, risk assessment, and mitigation strategies for trade finance professionals.",
      coverImage: "https://picsum.photos/200/300/?blur",
      category: "guide",
      type: "Educational Guide",
      issueNumber: 1,
      publishDate: "2024-02-01",
      pageCount: 156,
      featured: true,
      sponsored: false,
      partnerPublication: true,
      companyName: "ICISA",
      tags: [
        "Credit Insurance",
        "Risk Management",
        "Trade Finance",
        "Insurance",
      ],
      articles: [
        "Understanding Credit Insurance",
        "Risk Assessment Frameworks",
        "Claims Management",
        "Market Trends and Outlook",
      ],
      downloadCount: "1.8k",
      views: "8.2k",
    },
    {
      id: "trade-finance-guide-2024",
      title: "Trade Finance Guide 2024",
      subtitle: "A back to the basics guide of trade finance",
      description:
        "Essential guide for trade finance professionals covering fundamental concepts, instruments, and best practices.",
      coverImage: "https://picsum.photos/200/300/?blur",
      category: "guide",
      type: "Educational Guide",
      issueNumber: 2,
      publishDate: "2024-01-15",
      pageCount: 124,
      featured: false,
      sponsored: false,
      partnerPublication: true,
      companyName: "ITFA",
      tags: [
        "Trade Finance",
        "Fundamentals",
        "Letters of Credit",
        "Documentary Collections",
      ],
      articles: [
        "Trade Finance Fundamentals",
        "Letters of Credit Explained",
        "Documentary Collections",
        "Trade Finance Instruments",
      ],
      downloadCount: "3.2k",
      views: "15.6k",
    },
    {
      id: "history-of-tariffs",
      title: "History of Tariffs",
      subtitle: "From ancient times to the modern day",
      description:
        "In-depth analysis of tariff evolution and its impact on global trade from historical perspectives to modern applications.",
      coverImage: "https://picsum.photos/200/300/?blur",
      category: "report",
      type: "Monthly Report",
      issueNumber: 3,
      publishDate: "2024-01-01",
      pageCount: 92,
      featured: false,
      sponsored: false,
      partnerPublication: false,
      companyName: "",
      tags: ["Tariffs", "Trade Policy", "Economic History", "Global Trade"],
      articles: [
        "Ancient Trade Barriers",
        "Modern Tariff Systems",
        "Economic Impact Analysis",
        "Future of Trade Policy",
      ],
      downloadCount: "1.4k",
      views: "6.8k",
    },
    {
      id: "data-inequality-report",
      title: "Data Inequality and the Global Economic Divide",
      subtitle: "The unseen side of trade digitisation",
      description:
        "Critical analysis of how digital transformation in trade is creating new forms of inequality and economic divides.",
      coverImage: "https://picsum.photos/200/300/?blur",
      category: "report",
      type: "Special Report",
      issueNumber: 4,
      publishDate: "2023-12-15",
      pageCount: 76,
      featured: true,
      sponsored: false,
      partnerPublication: false,
      companyName: "",
      tags: [
        "Digital Divide",
        "Trade Digitisation",
        "Economic Inequality",
        "Technology",
      ],
      articles: [
        "Digital Trade Barriers",
        "Technology Access Gaps",
        "Economic Impact Assessment",
        "Policy Recommendations",
      ],
      downloadCount: "2.1k",
      views: "9.4k",
    },
    {
      id: "trade-digitisation-interoperability",
      title: "Trade Digitisation's Bumpy Road to Interoperability",
      subtitle: "Challenges and solutions in digital trade integration",
      description:
        "Comprehensive roundtable discussion on interoperability challenges in trade digitisation and potential solutions.",
      coverImage: "https://picsum.photos/200/300/?blur",
      category: "roundtable",
      type: "Industry Roundtable",
      issueNumber: 1,
      publishDate: "2023-11-30",
      pageCount: 64,
      featured: false,
      sponsored: true,
      partnerPublication: true,
      companyName: "ICC Digital Standards Initiative",
      tags: [
        "Digital Standards",
        "Interoperability",
        "Trade Technology",
        "Industry Roundtable",
      ],
      articles: [
        "Current Interoperability Challenges",
        "Industry Expert Perspectives",
        "Technology Solutions",
        "Future Roadmap",
      ],
      downloadCount: "1.6k",
      views: "7.2k",
    },
    {
      id: "new-crossroads-report",
      title: "New Crossroads: How Connector Nations are Rewriting Trade Routes",
      subtitle: "Strategic analysis of emerging trade corridors",
      description:
        "Analysis of how connector nations are reshaping global trade routes and creating new economic opportunities.",
      coverImage: "https://picsum.photos/200/300/?blur",
      category: "roundtable",
      type: "Industry Roundtable",
      issueNumber: 2,
      publishDate: "2023-10-15",
      pageCount: 88,
      featured: false,
      sponsored: false,
      partnerPublication: false,
      companyName: "",
      tags: [
        "Trade Routes",
        "Connector Nations",
        "Economic Geography",
        "Strategic Analysis",
      ],
      articles: [
        "Emerging Trade Corridors",
        "Connector Nation Strategies",
        "Economic Impact Analysis",
        "Future Trade Patterns",
      ],
      downloadCount: "1.9k",
      views: "8.7k",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "magazine":
        return "bg-ttp-purple text-white";
      case "guide":
        return "bg-ttp-orange text-white";
      case "report":
        return "bg-ttp-green text-white";
      case "roundtable":
        return "bg-blue-600 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getTypeIcon = (category: string) => {
    switch (category) {
      case "magazine":
        return <BookOpen className="w-4 h-4" />;
      case "guide":
        return <FileText className="w-4 h-4" />;
      case "report":
        return <FileText className="w-4 h-4" />;
      case "roundtable":
        return <Users className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const filteredPublications = publications.filter((pub) => {
    const matchesFilter = filterBy === "all" || pub.category === filterBy;
    const matchesSearch =
      searchTerm === "" ||
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesFilter && matchesSearch;
  });

  const sortedPublications = [...filteredPublications].sort((a, b) => {
    switch (sortBy) {
      case "latest":
        return (
          new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
        );
      case "oldest":
        return (
          new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime()
        );
      case "featured":
        return b.featured ? 1 : -1;
      case "pages":
        return b.pageCount - a.pageCount;
      case "popular":
        return (
          parseInt(b.downloadCount.replace("k", "")) -
          parseInt(a.downloadCount.replace("k", ""))
        );
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">

      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span>Resources</span>
              <span>/</span>
              <span className="text-ttp-orange">Publications</span>
            </div>
            <h1 className="text-4xl font-bold text-ttp-charcoal mb-4">
              Digital Publications
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Access our comprehensive collection of quarterly magazines,
              educational guides, monthly reports, and industry roundtables
              featuring expert analysis and insights.
            </p>
          </div>

          {/* Publication Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-ttp-purple" />
                <div>
                  <p className="text-sm text-gray-600">Quarterly Magazine</p>
                  <p className="text-2xl font-bold text-ttp-charcoal">
                    {
                      41
                      // publications.filter((p) => p.category === "magazine")
                      //   .length
                    }
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-ttp-orange" />
                <div>
                  <p className="text-sm text-gray-600">Educational Guides</p>
                  <p className="text-2xl font-bold text-ttp-charcoal">
                    20
                    {/* {publications.filter((p) => p.category === "guide").length} */}
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-ttp-green" />
                <div>
                  <p className="text-sm text-gray-600">Reports</p>
                  <p className="text-2xl font-bold text-ttp-charcoal">
                    23786
                    {/* {publications.filter((p) => p.category === "report").length} */}
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Roundtables</p>
                  <p className="text-2xl font-bold text-ttp-charcoal">
                    {
                      978
                      // publications.filter((p) => p.category === "roundtable")
                      //   .length
                    }
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Enhanced Filters and Controls */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search publications, topics, or authors..."
  className="pl-10 border border-gray-300 text-[#3E3D4C] bg-white placeholder:text-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger   className="border border-gray-300 bg-white text-[#3E3D4C] w-56">
                  <SelectValue placeholder="Publication Type" />
                </SelectTrigger>
                <SelectContent className="bg-white text-[#3E3D4C]">
                  <SelectItem value="all">All Publications</SelectItem>
                  <SelectItem value="magazine">Quarterly Magazine</SelectItem>
                  <SelectItem value="guide">Educational Guides</SelectItem>
                  <SelectItem value="report">Reports</SelectItem>
                  <SelectItem value="roundtable">Roundtables</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger   className="border border-gray-300 bg-white text-[#3E3D4C] w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-white text-[#3E3D4C]">
                  <SelectItem value="latest">Latest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="popular">Most Downloaded</SelectItem>
                  <SelectItem value="pages">Page Count</SelectItem>
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

          {/* Publications Grid */}
          <section className="pb-12">
  {/* Example toggle buttons (optional) */}
  <div className="flex justify-end mb-4 gap-2">
    <button
      className={`px-3 py-1 rounded border text-sm ${
        viewMode === 'grid'
          ? 'bg-[#F37021] text-white border-[#F37021]'
          : 'bg-white text-black border-gray-300'
      }`}
      onClick={() => setViewMode('grid')}
    >
      Grid View
    </button>
    <button
      className={`px-3 py-1 rounded border text-sm ${
        viewMode === 'list'
          ? 'bg-[#F37021] text-white border-[#F37021]'
          : 'bg-white text-black border-gray-300'
      }`}
      onClick={() => setViewMode('list')}
    >
      List View
    </button>
  </div>

  {/* Layout logic */}
  <div
    className={
      viewMode === 'grid'
        ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
        : 'flex flex-col gap-6'
    }
  >
    {sortedPublications.map((publication) => (
      <Card
        key={publication.id}
        className={`group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer ${
          viewMode === 'list' ? 'flex flex-col md:flex-row gap-6' : ''
        }`}
        onMouseEnter={() => setHoveredPublication(publication.id)}
        onMouseLeave={() => setHoveredPublication(null)}
      >
        {/* Image */}
        <div className="relative w-full md:w-[390px] shrink-0">
          <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
            <img
              src={publication.coverImage}
              alt={publication.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {hoveredPublication === publication.id && (
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center transition-opacity duration-300">
                <div className="text-center text-white p-4">
                  <Eye className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm mb-2">Preview Available</p>
                  <p className="text-xs opacity-75">Click to view full publication</p>
                </div>
              </div>
            )}
          </div>

          {/* Top-left badges */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <Badge className={getCategoryColor(publication.category)}>
                {getTypeIcon(publication.category)}
                <span className="ml-1">{publication.type}</span>
              </Badge>
              {publication.featured && (
                <Badge className="bg-[#EF4444] text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}
              {publication.sponsored && (
                <Badge className="bg-[#FACC15] text-black">Sponsored</Badge>
              )}
              {publication.partnerPublication && (
                <Badge className="bg-[#3B82F6] text-white">
                  <Building className="w-3 h-3 mr-1" />
                  Partner
                </Badge>
              )}
            </div>
          </div>

          {/* Bottom stats */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <Badge
              variant="secondary"
              className="bg-black/70 text-white backdrop-blur-sm"
            >
              {publication.pageCount} pages
            </Badge>
            <div className="flex gap-2">
              <Badge
                variant="secondary"
                className="bg-black/70 text-white backdrop-blur-sm text-xs"
              >
                <Download className="w-3 h-3 mr-1" />
                {publication.downloadCount}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-black/70 text-white backdrop-blur-sm text-xs"
              >
                <Eye className="w-3 h-3 mr-1" />
                {publication.views}
              </Badge>
            </div>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-6 w-full">
          <h3 className="text-xl font-bold text-[#212121] mb-2 group-hover:text-[#F37021] transition-colors line-clamp-2">
            {publication.title}
          </h3>
          {publication.subtitle && (
            <p className="text-sm font-medium text-gray-700 mb-2 line-clamp-1">
              {publication.subtitle}
            </p>
          )}
          <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{publication.description}</p>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {/* {new Date(publication.publishDate).toLocaleDateString()} */}
            </div>
            <div className="flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              {publication.articles.length} articles
            </div>
          </div>

          {publication.companyName && (
            <div className="mb-4">
              <Badge className="bg-[#F37021] text-white">
                <Building className="w-3 h-3 mr-1" />
                {publication.companyName}
              </Badge>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {publication.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs text-black">
                {tag}
              </Badge>
            ))}
            {publication.tags.length > 3 && (
              <Badge variant="outline" className="text-xs text-black">
                +{publication.tags.length - 3} more
              </Badge>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              asChild
              size="sm"
              className="flex-1 bg-[#F37021] hover:bg-[#F37021]/90"
            >
              <Link href={`/publications/details/${publication.id}`}>
                <BookOpen className="w-4 h-4 mr-2" />
                Read Now
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-[#F37021] text-[#F37021]"
            >
              <Link href={`/publications/${publication.id}`}>
                <Eye className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="sm" variant="outline" className="border-gray-300">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</section>

        </div>
      </main>

    </div>
  );
};

export default EditionsPage;
