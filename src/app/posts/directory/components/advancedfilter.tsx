import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
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
import { Checkbox } from "@/shared/components/checkbox";
import { CompanyFilter, CompanyType } from "@/app/types/directorycompany";
import {
  Search,
  Filter,
  X,
  Star,
  Shield,
  Award,
} from "lucide-react";

interface AdvancedFiltersProps {
  filters: CompanyFilter;
  onFiltersChange: (filters: CompanyFilter) => void;
  onClearFilters: () => void;
  resultsCount: number;
}

export const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({
  filters,
  onFiltersChange,
  onClearFilters,
  resultsCount,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const companyTypes: { value: CompanyType; label: string }[] = [
    { value: "bank", label: "Banks" },
    { value: "digital-bank", label: "Digital Banks" },
    { value: "fintech", label: "Fintech" },
    { value: "payment-processor", label: "Payment Processors" },
    { value: "trade-finance", label: "Trade Finance" },
    { value: "technology", label: "Technology" },
    { value: "consultant", label: "Consultants" },
    { value: "regulatory", label: "Regulatory" },
    { value: "infrastructure", label: "Infrastructure" },
  ];

  const productTypes = [
    "Letters of Credit",
    "Trade Finance",
    "Supply Chain Finance",
    "Treasury Management",
    "Cross-border Payments",
    "FX Services",
    "Cash Management",
    "Risk Management",
    "Compliance Tools",
    "Digital Banking",
    "API Banking",
    "Blockchain Solutions",
  ];

  const complianceTags = [
    "Basel IV",
    "PCI DSS",
    "SOX",
    "GDPR",
    "PSD2",
    "Open Banking",
    "AML/KYC",
    "SWIFT CSP",
    "ISO 27001",
    "eBL Ready",
  ];

  const regions = [
    "Global",
    "North America",
    "Europe",
    "Asia-Pacific",
    "Middle East",
    "Africa",
    "Latin America",
    "Caribbean",
  ];

  const functions = [
    "Treasury",
    "Trade Finance",
    "Payments",
    "Risk Management",
    "Compliance",
    "Operations",
    "Technology",
  ];

  const ttlContentTypes = [
    "Featured in Latest Issue",
    "TTP Podcast Guest",
    "Sibos Speaker",
    "TTP Award Winner",
    "Conference Partner",
    "Editorial Contributor",
  ];

  const updateFilter = (key: keyof CompanyFilter, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const hasActiveFilters = Object.keys(filters).some(
    (key) =>
      filters[key as keyof CompanyFilter] !== undefined &&
      filters[key as keyof CompanyFilter] !== ""
  );

  return (
    <Card className="mb-6">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Advanced Filters
          </CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              {resultsCount} companies found
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Less Filters" : "More Filters"}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search companies, products, or technologies..."
            className="pl-10"
            value={filters.search || ""}
            onChange={(e) => updateFilter("search", e.target.value)}
          />
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filters.sponsored ? "default" : "outline"}
            size="sm"
            onClick={() =>
              updateFilter("sponsored", filters.sponsored ? undefined : true)
            }
            className="text-xs"
          >
            <Star className="w-3 h-3 mr-1" />
            Featured Companies
          </Button>
          <Button
            variant={filters.verified ? "default" : "outline"}
            size="sm"
            onClick={() =>
              updateFilter("verified", filters.verified ? undefined : true)
            }
            className="text-xs"
          >
            <Shield className="w-3 h-3 mr-1" />
            TTP Verified
          </Button>
          <Button
            variant={filters.ttlContent ? "default" : "outline"}
            size="sm"
            onClick={() =>
              updateFilter(
                "ttlContent",
                filters.ttlContent ? undefined : "Featured in Latest Issue"
              )
            }
            className="text-xs"
          >
            <Award className="w-3 h-3 mr-1" />
            As Seen in TTP
          </Button>
        </div>

        {/* Main Filter Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white">
          <div>
            <label className="block text-sm font-medium text-forground mb-2">
              Company Type
            </label>
            <Select
              value={filters.type || "all"}
              onValueChange={(value) =>
                updateFilter(
                  "type",
                  value === "all" ? undefined : (value as CompanyType)
                )
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
                {companyTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-forground mb-2">
              Region
            </label>
            <Select
              value={filters.region || "all"}
              onValueChange={(value) =>
                updateFilter("region", value === "all" ? undefined : value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="All regions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All regions</SelectItem>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-forground mb-2">
              Function
            </label>
            <Select
              value={filters.function || "all"}
              onValueChange={(value) =>
                updateFilter("function", value === "all" ? undefined : value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="All functions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All functions</SelectItem>
                {functions.map((func) => (
                  <SelectItem key={func} value={func}>
                    {func}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Expanded Filters */}
        {isExpanded && (
          <div className="space-y-6 pt-4 border-t">
            {/* Product Types */}
            <div>
              <label className="block text-sm font-medium text-forground mb-3">
                Product Types
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {productTypes.map((product) => (
                  <div key={product} className="flex items-center space-x-2">
                    <Checkbox
                      id={product}
                      checked={filters.productType === product}
                      onCheckedChange={(checked: any) =>
                        updateFilter(
                          "productType",
                          checked ? product : undefined
                        )
                      }
                    />
                    <label htmlFor={product} className="text-sm text-forground">
                      {product}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Tags */}
            <div>
              <label className="block text-sm font-medium text-forground mb-3">
                Compliance & Standards
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {complianceTags.map((tag) => (
                  <div key={tag} className="flex items-center space-x-2">
                    <Checkbox
                      id={tag}
                      checked={filters.complianceTag === tag}
                      onCheckedChange={(checked) =>
                        updateFilter("complianceTag", checked ? tag : undefined)
                      }
                    />
                    <label htmlFor={tag} className="text-sm text-forground">
                      {tag}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* TTP Editorial Filters */}
            <div>
              <label className="block text-sm font-medium text-forground mb-3">
                TTP Editorial
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {ttlContentTypes.map((content) => (
                  <div key={content} className="flex items-center space-x-2">
                    <Checkbox
                      id={content}
                      checked={filters.ttlContent === content}
                      onCheckedChange={(checked) =>
                        updateFilter(
                          "ttlContent",
                          checked ? content : undefined
                        )
                      }
                    />
                    <label htmlFor={content} className="text-sm text-forground">
                      {content}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Active Filters & Clear */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 pt-4 border-t">
            <span className="text-sm text-gray-600">Active filters:</span>
            <div className="flex flex-wrap gap-2">
              {Object.entries(filters).map(([key, value]) => {
                if (!value) return null;
                return (
                  <Badge key={key} variant="secondary" className="text-xs">
                    {String(value)}
                    <button
                      onClick={() =>
                        updateFilter(key as keyof CompanyFilter, undefined)
                      }
                      className="ml-1 hover:text-red-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                );
              })}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-xs ml-auto"
            >
              Clear All
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
