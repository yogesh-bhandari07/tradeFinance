
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import {
  Calendar,
  FileText,
  Users,
  Building,
  Download,
  Eye,
} from "lucide-react";
import { Button } from "@/shared/components/button";

interface Author {
  name: string;
  title: string;
  company?: string;
  avatar: string;
}

interface Partner {
  name: string;
  logo: string;
  role: string;
}

interface PublicationSummaryProps {
  title: string;
  description: string;
  publishDate: string;
  pageCount: number;
  category: string;
  authors: Author[];
  partners: Partner[];
  tags: string[];
  coverImage: string;
  downloadUrl: string;
}

export const PublicationSummary = ({
  title,
  description,
  publishDate,
  pageCount,
  category,
  authors,
  partners,
  tags,
  coverImage,
  downloadUrl,
}: PublicationSummaryProps) => {
  return (
    <div className="space-y-6">
      {/* Main Summary with Cover Image */}
      <Card>
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-3 gap-6 p-6">
            {/* Cover Image */}
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={coverImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <Button
                  className="flex-1 bg-ttp-orange hover:bg-ttp-orange/90"
                  onClick={() => window.open(downloadUrl, "_blank")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline" className="flex-1">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
              </div>
            </div>

            {/* Publication Details */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <Badge className="bg-ttp-purple text-white w-fit">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Badge>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(publishDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-1" />
                    {pageCount} pages
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-ttp-charcoal mb-4">
                  {title}
                </h1>
                <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-ttp-orange text-ttp-orange"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Authors */}
      {authors.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg lg:text-xl">
              <Users className="w-5 h-5 mr-2 text-ttp-orange" />
              Key Authors & Contributors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {authors.map((author, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                >
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-ttp-charcoal truncate">
                      {author.name}
                    </h4>
                    <p className="text-sm text-gray-600 truncate">
                      {author.title}
                    </p>
                    {author.company && (
                      <p className="text-xs text-gray-500 truncate">
                        {author.company}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Partner Organizations */}
      {partners.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg lg:text-xl">
              <Building className="w-5 h-5 mr-2 text-ttp-orange" />
              Partner Organizations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-12 h-12 bg-white rounded border flex items-center justify-center flex-shrink-0">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-ttp-charcoal truncate">
                      {partner.name}
                    </h4>
                    <p className="text-sm text-gray-600 truncate">
                      {partner.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
