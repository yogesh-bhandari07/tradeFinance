import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/card";
import { Button } from "@/shared/components/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/table";
import { Company } from "@/app/types/directorycompany";
import {
  Building2,
  ExternalLink,
  Globe,
  MapPin,
  Calendar,
  CheckCircle,
  X,
  Star,
  Shield,
  Users,
} from "lucide-react";

interface CompanyComparisonProps {
  companies: Company[];
  onRemoveCompany: (companyId: string) => void;
  onClose: () => void;
}

export const CompanyComparison: React.FC<CompanyComparisonProps> = ({
  companies,
  onRemoveCompany,
  onClose,
}) => {
  // const comparisonAttributes = [
  //   { key: "type", label: "Company Type", icon: Building2 },
  //   { key: "headquarters", label: "Headquarters", icon: MapPin },
  //   { key: "founded", label: "Founded", icon: Calendar },
  //   { key: "employeeCount", label: "Team Size", icon: Users },
  //   { key: "regions", label: "Geographic Presence", icon: Globe },
  //   { key: "productTypes", label: "Products & Services", icon: null },
  //   { key: "complianceTags", label: "Compliance Standards", icon: Shield },
  //   { key: "verified", label: "TTP Verified", icon: CheckCircle },
  //   { key: "sponsored", label: "Featured Partner", icon: Star },
  // ];
  const comparisonAttributes: AttributeFilter[] = [
  { key: "type", label: "Company Type", icon: Building2 },
  { key: "headquarters", label: "Headquarters", icon: MapPin },
  { key: "founded", label: "Founded", icon: Calendar },
  { key: "employeeCount", label: "Team Size", icon: Users },
  { key: "regions", label: "Geographic Presence", icon: Globe },
  { key: "productTypes", label: "Products & Services" },
  { key: "complianceTags", label: "Compliance Standards", icon: Shield },
  { key: "verified", label: "TTP Verified", icon: CheckCircle },
  { key: "sponsored", label: "Featured Partner", icon: Star },
];

type AttributeFilter = {
  key: keyof Company;
  label: string;
  icon?: React.ElementType;
};

const renderAttributeValue = (company: Company, attribute: AttributeFilter) => {
    const value = company[attribute.key as keyof Company];

    switch (attribute.key) {
      case "type":
        return (
          <span
            className="text-xs capitalize rounded px-2 py-1"
            style={{
              backgroundColor: "#F3F4F6",
              color: "#1F2937",
            }}
          >
            {String(value).replace("-", " ")}
          </span>
        );

      case "regions":
      case "productTypes":
      case "complianceTags":
        return Array.isArray(value) ? (
          <div className="flex flex-wrap gap-1">
            {(value as string[]).slice(0, 2).map((item) => (
              <span
                key={item}
                className="text-xs rounded px-2 py-1"
                style={{
                  backgroundColor: "#F3F4F6",
                  color: "#1F2937",
                }}
              >
                {item}
              </span>
            ))}
            {(value as string[]).length > 2 && (
              <span
                className="text-xs rounded px-2 py-1"
                style={{
                  backgroundColor: "#F3F4F6",
                  color: "#1F2937",
                }}
              >
                +{(value as string[]).length - 2}
              </span>
            )}
          </div>
        ) : (
          "-"
        );

      case "verified":
      case "sponsored":
        return value ? (
          <CheckCircle className="w-4 h-4" style={{ color: "#16A34A" }} />
        ) : (
          <X className="w-4 h-4" style={{ color: "#9CA3AF" }} />
        );

      default:
        return value ? (
          <span style={{ color: "#1F2937" }}>{String(value)}</span>
        ) : (
          "-"
        );
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-[#1F2937]">
            <Building2 className="w-5 h-5" style={{ color: "#6B7280" }} />
            Company Comparison
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" style={{ color: "#6B7280" }} />
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table className="min-w-full text-sm text-[#1F2937]">
            <TableHeader className="bg-white border-b" style={{ borderColor: "#E5E7EB" }}>
              <TableRow>
                <TableHead className="w-48 text-[#1F2937]">Attribute</TableHead>
                {companies.map((company) => (
                  <TableHead key={company.id} className="min-w-64 text-[#1F2937]">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        {company.logo ? (
                          <img
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="h-8 w-8 object-contain rounded"
                          />
                        ) : (
                          <div className="h-8 w-8 bg-[#F3F4F6] rounded flex items-center justify-center">
                            <Building2 className="w-4 h-4" style={{ color: "#9CA3AF" }} />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-sm truncate text-[#1F2937]">
                            {company.name}
                          </h4>
                          {company.sponsored && (
                            <span className="text-xs px-2 py-1 rounded flex items-center gap-1" style={{ backgroundColor: "#FF6B00", color: "#FFFFFF" }}>
                              <Star className="w-3 h-3" />
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onRemoveCompany(company.id)}
                            className="text-xs h-6 px-2"
                            style={{ color: "#374151" }}
                          >
                            Remove
                          </Button>
                          {company.website && (
                            <Button
                              variant="ghost"
                              size="sm"
                              asChild
                              className="h-6 px-2"
                            >
                              <a
                                href={company.website}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-3 h-3 text-[#6B7280]" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {comparisonAttributes.map((attribute) => (
                <TableRow key={attribute.key} className="border-t" style={{ borderColor: "#E5E7EB" }}>
                  <TableCell className="font-medium text-[#1F2937]">
                    <div className="flex items-center gap-2">
                      {attribute.icon && (
                        <attribute.icon className="w-4 h-4" style={{ color: "#6B7280" }} />
                      )}
                      {attribute.label}
                    </div>
                  </TableCell>
                  {companies.map((company) => (
                    <TableCell key={company.id}>
                      {renderAttributeValue(company, attribute)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 flex justify-center">
          <Button
            onClick={onClose}
            variant="outline"
            style={{ color: "#1F2937", borderColor: "#E5E7EB" }}
          >
            Close Comparison
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
