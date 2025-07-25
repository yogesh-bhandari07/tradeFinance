'use client';

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/shared/components/button";
import { Badge } from "@/shared/components/badge";
import { Card, CardContent } from "@/shared/components/card";
import {
  Calendar,
  FileText,
  Download,
  Eye,
  ArrowLeft,
  Share2,
  Bookmark,
} from "lucide-react";
import { getEditionBySlug } from "@/app/types/webinar";

const EditionDetailPage = () => {
  const params = useParams();
  const editionSlug = params?.slug as string;
  const edition = editionSlug ? getEditionBySlug(editionSlug) : null;

  if (!edition) {
    return (
      <div className="min-h-screen bg-[#ffffff]">
        <main className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FileText className="w-16 h-16 text-[#d1d5db] mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-[#111827] mb-2">
              Publication Not Found
            </h1>
            <p className="text-[#4b5563] mb-6">
              The publication youre looking for doesnt exist or has been moved.
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "monthly":
        return "bg-[#6A4B9C] text-[#ffffff]";
      case "annual":
        return "bg-[#F47E1E] text-[#ffffff]";
      case "special":
        return "bg-[#00B29E] text-[#ffffff]";
      default:
        return "bg-[#6B7280] text-[#ffffff]";
    }
  };

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <main className="pt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-2 text-sm text-[#6B7280]">
            <Link href="/publications" className="hover:text-[#F47E1E]">
              Publications
            </Link>
            <span>/</span>
            <span className="text-[#F47E1E]">Publication Details</span>
          </div>
        </div>

        <section className="py-16" style={{ background: "linear-gradient(to right, #1C1C24, #6A4B9C)", color: "#ffffff" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex gap-2">
                <Badge className={getCategoryColor(edition.category)}>
                  {edition.category.charAt(0).toUpperCase() + edition.category.slice(1)}
                </Badge>
                {edition.featured && (
                  <Badge className="bg-[#EF4444] text-white">Featured</Badge>
                )}
              </div>
              {edition.companyName && (
                <Badge className="bg-[#F47E1E] text-white">
                  {edition.companyName}
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{edition.title}</h1>
            <p className="text-xl mb-8 opacity-90">{edition.description}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-[#F47E1E]" />
                <span>
                  Issue #{edition.issueNumber}
                  {edition.volume && ` Vol. ${edition.volume}`}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-[#F47E1E]" />
                <span>{new Date(edition.publishDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-[#F47E1E]" />
                <span>{edition.pageCount} pages</span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-[#F47E1E]" />
                <span>{edition.articles.length} articles</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="bg-[#F47E1E] hover:bg-[#f68f40] text-white">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </Button>
              {edition.previewUrl && (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#1C1C24]"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Preview
                </Button>
              )}
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#1C1C24]"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#1C1C24]"
              >
                <Bookmark className="w-5 h-5 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="aspect-[3/4] mb-8 bg-[#f3f4f6] rounded-lg overflow-hidden">
                  <img
                    src={edition.coverImage}
                    alt={edition.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-2xl font-bold text-[#1C1C24] mb-4">About This Publication</h2>
                <div className="prose prose-lg text-[#374151] mb-8">
                  <p>{edition.description}</p>
                  <p>
                    This comprehensive publication provides in-depth analysis and expert insights...
                  </p>
                </div>

                <h3 className="text-xl font-bold text-[#1C1C24] mb-4">Featured Articles</h3>
                <div className="space-y-3 mb-8">
                  {edition.articles.map((article, index) => (
                    <div key={index} className="p-4 bg-[#f9fafb] rounded-lg">
                      <h4 className="font-medium text-[#1C1C24]">{article}</h4>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {edition.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#F47E1E] text-[#F47E1E]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#1C1C24] mb-4">Publication Details</h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <span className="font-medium text-[#111827]">Category:</span>
                        <div className="mt-1">
                          <Badge className={getCategoryColor(edition.category)}>
                            {edition.category.charAt(0).toUpperCase() +
                              edition.category.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <span className="font-medium text-[#111827]">Issue:</span>
                        <p className="text-[#4B5563] mt-1">
                          #{edition.issueNumber}
                          {edition.volume && ` Vol. ${edition.volume}`}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-[#111827]">Published:</span>
                        <p className="text-[#4B5563] mt-1">
                          {new Date(edition.publishDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-[#111827]">Pages:</span>
                        <p className="text-[#4B5563] mt-1">{edition.pageCount}</p>
                      </div>
                      <div>
                        <span className="font-medium text-[#111827]">Articles:</span>
                        <p className="text-[#4B5563] mt-1">{edition.articles.length}</p>
                      </div>
                      {edition.companyName && (
                        <div>
                          <span className="font-medium text-[#111827]">Partner:</span>
                          <p className="text-[#4B5563] mt-1">{edition.companyName}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EditionDetailPage;
