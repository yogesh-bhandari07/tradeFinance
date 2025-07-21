'use client'
import React, { useState, useMemo } from "react";
import { Button } from "@/shared/components/button";
import { SponsoredCompanyCard } from "./components/sponsorcompanycard";
import { StandardCompanyCard } from "./components/standardcard";
import { AdvancedFilters } from "./components/advancedfilter";
import { CompanyComparison } from "./components/comparison";
import { getCompanies } from "@/shared/data/companies";
import { CompanyFilter, Company } from "@/app/types/directorycompany";
import { Building2, BarChart3, ArrowRight, Zap } from "lucide-react";

const CompanyDirectory = () => {
  const [filter, setFilter] = useState<CompanyFilter>({});
  const [compareList, setCompareList] = useState<Company[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const companies = useMemo(() => {
    const filtered = getCompanies(filter);
    // Sort to show sponsored companies first
    return filtered.sort((a, b) => {
      if (a.sponsored && !b.sponsored) return -1;
      if (!a.sponsored && b.sponsored) return 1;
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [filter]);

  const sponsoredCompanies = companies.filter((c) => c.sponsored);
  const standardCompanies = companies.filter((c) => !c.sponsored);

  const handleAddToCompare = (company: Company) => {
    if (
      compareList.length < 3 &&
      !compareList.find((c) => c.id === company.id)
    ) {
      setCompareList([...compareList, company]);
    }
  };

  const handleRemoveFromCompare = (companyId: string) => {
    setCompareList(compareList.filter((c) => c.id !== companyId));
  };

  const clearFilters = () => {
    setFilter({});
  };

  return (
    <div className="min-h-screen bg-background bg-white">

      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-ttp-orange" />
              <h1 className="text-4xl font-bold text-gray-900">
                TTP Intelligence Directory
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
              Your comprehensive guide to leading companies in trade finance,
              treasury operations, and payments technology. Discover verified
              solutions, compare providers, and connect with industry leaders
              shaping global commerce.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Zap className="w-4 h-4 text-ttp-orange" />
              <span>Updated daily with editorial insights</span>
              <span>•</span>
              <span>{companies.length} companies</span>
              <span>•</span>
              <span>{sponsoredCompanies.length} featured partners</span>
            </div>
          </div>

          {/* Advanced Filters */}
          <AdvancedFilters
            filters={filter}
            onFiltersChange={setFilter}
            onClearFilters={clearFilters}
            resultsCount={companies.length}
          />

          {/* Comparison Bar */}
          {compareList.length > 0 && (
            <div className="bg-ttp-orange/10 border border-ttp-orange/20 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-ttp-orange" />
                    <span className="font-medium text-gray-900">
                      Compare ({compareList.length}/3)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {compareList.map((company) => (
                      <div
                        key={company.id}
                        className="flex items-center gap-2 bg-white rounded px-3 py-1"
                      >
                        <span className="text-sm font-medium">
                          {company.name}
                        </span>
                        <button
                          onClick={() => handleRemoveFromCompare(company.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => setShowComparison(true)}
                    disabled={compareList.length < 2}
                    className="bg-ttp-orange hover:bg-ttp-orange/90"
                  >
                    Compare Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setCompareList([])}
                    className="text-gray-600"
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Comparison Modal */}
          {showComparison && compareList.length >= 2 && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto">
                <CompanyComparison
                  companies={compareList}
                  onRemoveCompany={handleRemoveFromCompare}
                  onClose={() => setShowComparison(false)}
                />
              </div>
            </div>
          )}

          {/* Results */}
          {companies.length > 0 ? (
            <div className="space-y-8">
              {/* Sponsored Companies */}
              {sponsoredCompanies.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Featured Partners
                    </h2>
                    <div className="h-px bg-gradient-to-r from-ttp-orange/50 to-transparent flex-1"></div>
                  </div>
                  <div className="space-y-6">
                    {sponsoredCompanies.map((company) => (
                      <div key={company.id} className="relative">
                        <SponsoredCompanyCard company={company} />
                        <div className="absolute top-4 right-4">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleAddToCompare(company)}
                            disabled={
                              compareList.length >= 3 ||
                              compareList.some((c) => c.id === company.id)
                            }
                            className="text-xs"
                          >
                            {compareList.some((c) => c.id === company.id)
                              ? "Added"
                              : "Compare"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Standard Companies */}
              {standardCompanies.length > 0 && (
                <div>
                  {sponsoredCompanies.length > 0 && (
                    <div className="flex items-center gap-2 mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">
                        All Companies
                      </h2>
                      <div className="h-px bg-gradient-to-r from-gray-300 to-transparent flex-1"></div>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {standardCompanies.map((company) => (
                      <div key={company.id} className="relative">
                        <StandardCompanyCard company={company} />
                        <div className="absolute top-4 right-4">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleAddToCompare(company)}
                            disabled={
                              compareList.length >= 3 ||
                              compareList.some((c) => c.id === company.id)
                            }
                            className="text-xs"
                          >
                            {compareList.some((c) => c.id === company.id)
                              ? "Added"
                              : "Compare"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No companies found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filters to find what youre looking
                for.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>

    </div>
  );
};

export default CompanyDirectory;
