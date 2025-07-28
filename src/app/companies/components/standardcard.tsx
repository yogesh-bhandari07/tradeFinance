import React from "react";
import { Card, CardContent } from "@/app/posts/events/components/card";
import { Badge } from "@/shared/components/badge";
import { Button } from "@/shared/components/button";
import { Company } from "@/app/types/directorycompany";
import {
  Building2,
  ExternalLink,
  MapPin,
  Calendar,
  Globe,
  CheckCircle,
} from "lucide-react";

interface StandardCompanyCardProps {
  company: Company;
  className?: string;
}

export const StandardCompanyCard: React.FC<StandardCompanyCardProps> = ({
  company,
  className = "",
}) => {
  return (
    <Card
      className={`border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 ${className}`}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {company.logo ? (
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-12 w-12 object-contain rounded border border-gray-200"
              />
            ) : (
              <div className="h-12 w-12 bg-gray-100 border border-gray-200 rounded flex items-center justify-center">
                <Building2 className="w-6 h-6 text-gray-400" />
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">
                {company.name}
              </h3>
              {company.verified && (
                <Badge variant="outline" className="text-xs text-black">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>

            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {company.description}
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
              <div className="flex items-center gap-1">
                <Building2 className="w-3 h-3" />
                <span className="capitalize">
                  {company.type.replace("-", " ")}
                </span>
              </div>
              {company.headquarters && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{company.headquarters}</span>
                </div>
              )}
              {company.founded && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{company.founded}</span>
                </div>
              )}
            </div>

            {/* Product Types */}
            {company.productTypes && company.productTypes.length > 0 && (
              <div className="mb-3">
                <div className="flex flex-wrap gap-1">
                  {company.productTypes.slice(0, 3).map((product) => (
                    <Badge
                      key={product}
                      variant="outline"
                      className="text-xs bg-gray-50 text-gray-500"
                    >
                      {product}
                    </Badge>
                  ))}
                  {company.productTypes.length > 3 && (
                    <Badge variant="outline" className="text-xs bg-gray-50">
                      +{company.productTypes.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            )}

            {/* Compliance Tags */}
            {company.complianceTags && company.complianceTags.length > 0 && (
              <div className="mb-3">
                <div className="flex flex-wrap gap-1">
                  {company.complianceTags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs bg-ttp-purple/10 text-ttp-purple"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Regions */}
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
              <Globe className="w-3 h-3" />
              <span>
                {company.regions.length === 1
                  ? company.regions[0]
                  : `${company.regions.length} regions`}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() =>
                  (window.location.href = `/companies/${company.slug}`)
                }
              >
                View Profile
              </Button>
              {company.website && (
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
