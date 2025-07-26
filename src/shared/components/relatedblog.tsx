import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import { Button } from "@/shared/components/button";
import { Calendar, ArrowRight, User, Clock } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishDate: string;
  author: string;
  readTime: string;
  category: string;
  slug: string;
}

interface RelatedBlogPostsProps {
  publicationTitle: string;
  blogPosts: BlogPost[];
}

export const RelatedBlogPosts = ({
  publicationTitle,
  blogPosts,
}: RelatedBlogPostsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl lg:text-2xl" style={{ color: "#333333" }}>
          From This Publication: {publicationTitle}
        </CardTitle>
        <p style={{ color: "#666666" }} className="text-sm lg:text-base">
          Explore individual articles and insights published from this edition
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-md"
            >
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs w-fit">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs" style={{ color: "#999999" }}>
                    <div className="flex items-center mr-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <h3
                  className="font-semibold mb-2 line-clamp-2 group-hover:underline transition-colors text-sm lg:text-base leading-tight"
                  style={{ color: "#333333" }}
                >
                  {post.title}
                </h3>

                <p
                  className="text-xs lg:text-sm mb-4 line-clamp-3 leading-relaxed"
                  style={{ color: "#666666" }}
                >
                  {post.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs min-w-0 flex-1" style={{ color: "#999999" }}>
                    <User className="w-3 h-3 mr-1 flex-shrink-0" />
                    <span className="truncate">{post.author}</span>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    variant="ghost"
                    className="flex-shrink-0"
                    style={{ color: "#F37021" }}
                  >
                    <Link href={`/posts/${post.slug}`}>
                      Read
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
