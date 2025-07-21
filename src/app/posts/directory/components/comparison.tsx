import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import { Button } from "@/shared/components/button";
import { Badge } from "@/shared/components/badge";
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
  const comparisonAttributes = [
    { key: "type", label: "Company Type", icon: Building2 },
    { key: "headquarters", label: "Headquarters", icon: MapPin },
    { key: "founded", label: "Founded", icon: Calendar },
    { key: "employeeCount", label: "Team Size", icon: Users },
    { key: "regions", label: "Geographic Presence", icon: Globe },
    { key: "productTypes", label: "Products & Services", icon: null },
    { key: "complianceTags", label: "Compliance Standards", icon: Shield },
    { key: "verified", label: "TTP Verified", icon: CheckCircle },
    { key: "sponsored", label: "Featured Partner", icon: Star },
  ];

  const renderAttributeValue = (company: Company, attribute: any) => {
    const value = company[attribute.key as keyof Company];

    switch (attribute.key) {
      case "type":
        return (
          <Badge variant="outline" className="text-xs capitalize">
            {String(value).replace("-", " ")}
          </Badge>
        );

      case "regions":
        return Array.isArray(value) ? (
          <div className="flex flex-wrap gap-1">
            {(value as string[]).slice(0, 2).map((region) => (
              <Badge key={region} variant="outline" className="text-xs">
                {region}
              </Badge>
            ))}
            {(value as string[]).length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{(value as string[]).length - 2}
              </Badge>
            )}
          </div>
        ) : (
          "-"
        );

      case "productTypes":
      case "complianceTags":
        return Array.isArray(value) && (value as string[]).length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {(value as string[]).slice(0, 2).map((item) => (
              <Badge key={item} variant="outline" className="text-xs">
                {item}
              </Badge>
            ))}
            {(value as string[]).length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{(value as string[]).length - 2}
              </Badge>
            )}
          </div>
        ) : (
          "-"
        );

      case "verified":
      case "sponsored":
        return value ? (
          <CheckCircle className="w-4 h-4 text-green-600" />
        ) : (
          <X className="w-4 h-4 text-gray-400" />
        );

      default:
        return value ? String(value) : "-";
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Company Comparison
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-48">Attribute</TableHead>
                {companies.map((company) => (
                  <TableHead key={company.id} className="min-w-64">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        {company.logo ? (
                          <img
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="h-8 w-8 object-contain rounded"
                          />
                        ) : (
                          <div className="h-8 w-8 bg-gray-100 rounded flex items-center justify-center">
                            <Building2 className="w-4 h-4 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-sm truncate">
                            {company.name}
                          </h4>
                          {company.sponsored && (
                            <Badge className="bg-ttp-orange text-white text-xs">
                              <Star className="w-2 h-2 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onRemoveCompany(company.id)}
                            className="text-xs h-6 px-2"
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
                                <ExternalLink className="w-3 h-3" />
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
                <TableRow key={attribute.key}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {attribute.icon && (
                        <attribute.icon className="w-4 h-4 text-gray-500" />
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
          <Button onClick={onClose} variant="outline">
            Close Comparison
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
