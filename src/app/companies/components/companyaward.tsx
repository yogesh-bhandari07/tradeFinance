import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import { Trophy, Star, Award, Medal } from "lucide-react";
import { Company } from "@/hooks/useCompanies";

interface CompanyAwardsShowcaseProps {
  company: Company;
}

export const CompanyAwardsShowcase = ({ company }: CompanyAwardsShowcaseProps) => {
  // Mock awards data - in real implementation, this would come from the database
  const awards = [
    {
      id: 1,
      title: "Best Trade Finance Innovation 2024",
      category: "Technology",
      year: 2024,
      issuer: "Trade Finance Global",
      description: "Recognized for groundbreaking digital trade finance solutions",
      icon: Trophy,
      color: "text-yellow-600"
    },
    {
      id: 2,
      title: "Customer Excellence Award",
      category: "Service",
      year: 2023,
      issuer: "Financial Services Institute",
      description: "Outstanding customer service and satisfaction ratings",
      icon: Star,
      color: "text-blue-600"
    },
    {
      id: 3,
      title: "Sustainable Finance Leader",
      category: "ESG",
      year: 2023,
      issuer: "Green Finance Council",
      description: "Leading initiatives in sustainable trade finance",
      icon: Award,
      color: "text-green-600"
    },
    {
      id: 4,
      title: "Innovation in Cross-Border Payments",
      category: "Technology",
      year: 2022,
      issuer: "Payments Innovation Awards",
      description: "Revolutionary approach to international payment processing",
      icon: Medal,
      color: "text-purple-600"
    }
  ];

  

  if (!company.featured && awards.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Awards Section - Simplified */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary text-ttp-orange" />
            Awards & Recognition
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {awards.slice(0, 4).map((award) => {
              const IconComponent = award.icon;
              return (
                <div key={award.id} className="p-4 rounded-lg border hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="w-5 h-5 text-primary text-ttp-orange" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-semibold text-sm text-ttp-orange">{award.title}</h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Badge variant="outline" className="text-xs text-ttp-charcoal ">
                          {award.category}
                        </Badge>
                        <span className="text-ttp-charcoal">{award.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

    </div>
  );
};