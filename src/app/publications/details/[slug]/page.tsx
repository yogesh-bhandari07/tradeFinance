'use client';
import React, { useState } from "react";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/shared/components/button";
import { ArrowLeft, Share2 } from "lucide-react";
import { getEditionBySlug } from "@/app/types/webinar";
import { PublicationSummary } from "@/shared/components/publicationsummary";
import { TableOfContents } from "@/shared/components/contenttable";
import { PublicationPDFViewer } from "@/shared/components/publicationpdfviewer";
import { RelatedBlogPosts } from "@/shared/components/relatedblog";

const EditionReaderPage = () => {
    const [showShareMenu, setShowShareMenu] = useState(false);
    
      const params = useParams();
      const editionSlug = params?.slug as string;
      console.log("Edition slug:", editionSlug);
      const edition = editionSlug ? getEditionBySlug(editionSlug) : null;

  if (!edition) {
    return (
      <div className="min-h-screen bg-background">
        <main className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Publication Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The publication youre looking for doesnt exist or has been
              moved.
            </p>
            <Button asChild>
              <Link href="/publications">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Publications
              </Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  // Mock data for authors and partners - in a real app, this would come from the API
  const authors = [
    {
      name: "Sarah Chen",
      title: "Senior Trade Finance Director",
      company: "TTP Editorial Board",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b593?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Mark Thompson",
      title: "Head of Digital Trade",
      company: "HSBC",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const partners = [
    {
      name: "HSBC",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      role: "Technology Partner",
    },
    {
      name: "International Trade Finance Association",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd8a72f9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      role: "Industry Partner",
    },
  ];

  // Mock blog posts related to this publication
  const relatedBlogPosts = [
    {
      id: "1",
      title: "Digital Trade Finance: The Future is Now",
      description:
        "Exploring how digital transformation is revolutionizing trade finance operations across global markets.",
      thumbnail:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      publishDate: "2024-03-10",
      author: "Sarah Chen",
      readTime: "8 min read",
      category: "Digital Transformation",
      slug: "digital-trade-finance-future",
    },
    {
      id: "2",
      title: "Central Bank Digital Currencies: A New Era of Payments",
      description:
        "An in-depth analysis of CBDC implementation and its impact on international trade settlements.",
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd8a72f9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      publishDate: "2024-03-12",
      author: "Mark Thompson",
      readTime: "12 min read",
      category: "CBDC",
      slug: "cbdc-new-era-payments",
    },
    {
      id: "3",
      title: "ESG in Supply Chain Finance: Sustainable Growth",
      description:
        "How environmental, social, and governance factors are shaping the future of supply chain financing.",
      thumbnail:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      publishDate: "2024-03-14",
      author: "Sarah Chen",
      readTime: "10 min read",
      category: "ESG",
      slug: "esg-supply-chain-finance",
    },
    {
      id: "4",
      title: "Cross-border Payment Innovations Transforming Trade",
      description:
        "Latest innovations in cross-border payments and their implications for international trade.",
      thumbnail:
        "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      publishDate: "2024-03-16",
      author: "Mark Thompson",
      readTime: "7 min read",
      category: "Payments",
      slug: "cross-border-payment-innovations",
    },
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: edition.title,
        text: edition.description,
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      setShowShareMenu(true);
      setTimeout(() => setShowShareMenu(false), 2000);
    }
  };

  const handleArticleClick = (index: number) => {
    console.log(`Navigate to article ${index + 1}: ${edition.articles[index]}`);
  };

  return (
  <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
    <main className="pt-4 lg:pt-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 lg:mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: "#999999" }}>
            <Link href="/publications" className="hover:underline" style={{ color: "#F37021" }}>
              Publications
            </Link>
            <span>/</span>
            <span style={{ color: "#F37021" }} className="line-clamp-1">
              {edition.title}
            </span>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="hover:bg-opacity-90"
              style={{
                borderColor: "#F37021",
                color: "#F37021",
                backgroundColor: "transparent",
              }}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>

            {showShareMenu && (
              <div
                className="absolute right-4 top-16 z-50 shadow-lg p-2 text-sm rounded-lg"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  color: "#16a34a",
                }}
              >
                Link copied to clipboard!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Summary and TOC */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            <PublicationSummary
              title={edition.title}
              description={edition.description}
              publishDate={edition.publishDate}
              pageCount={edition.pageCount}
              category={edition.category}
              authors={authors}
              partners={partners}
              tags={edition.tags}
              coverImage={edition.coverImage}
              downloadUrl={edition.downloadUrl}
            />

            <TableOfContents
              articles={edition.articles}
              onArticleClick={handleArticleClick}
            />
          </div>

          {/* Right Column - PDF Reader */}
          <div className="space-y-6">
            <PublicationPDFViewer
              title={edition.title}
              downloadUrl={edition.downloadUrl}
              previewUrl={edition.previewUrl}
              coverImage={edition.coverImage}
            />
          </div>
        </div>

        {/* Related Blog Posts Section */}
        <div className="mt-12 lg:mt-16">
          <RelatedBlogPosts
            publicationTitle={edition.title}
            blogPosts={relatedBlogPosts}
          />
        </div>
      </div>
    </main>
  </div>
);

};

export default EditionReaderPage;
