import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import { Button } from "@/shared/components/button";
import { BookOpen, ArrowRight } from "lucide-react";

interface TableOfContentsProps {
  articles: string[];
  onArticleClick?: (index: number) => void;
}

export const TableOfContents = ({
  articles,
  onArticleClick,
}: TableOfContentsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-lg lg:text-xl">
          <BookOpen className="w-5 h-5 mr-2 text-ttp-orange" />
          Table of Contents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {articles.map((article, index) => (
            <div key={index} className="group">
              <Button
                variant="ghost"
                className="w-full justify-between p-3 lg:p-4 h-auto text-left hover:bg-gray-50 transition-all duration-200"
                onClick={() => onArticleClick?.(index)}
              >
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  <span className="text-ttp-orange font-medium min-w-[2rem] text-sm lg:text-base">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ttp-charcoal group-hover:text-ttp-orange transition-colors text-sm lg:text-base leading-relaxed">
                    {article}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-ttp-orange transition-colors flex-shrink-0 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
