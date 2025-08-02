import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import { Button } from "@/shared/components/button";
import { Badge } from "@/shared/components/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/select";
import { UserPreferences } from "@/app/types/prefrences";
import { usePersonalization } from "@/hooks/usePersonalization";
import { X, Settings } from "lucide-react";

interface PersonalizationSetupProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export const PersonalizationSetup: React.FC<PersonalizationSetupProps> = ({
  isOpen,
  onClose,
  onComplete,
}) => {
  const { preferences, updatePreferences, getFilterOptions } =
    usePersonalization();
  const filterOptions = getFilterOptions();

  const [selectedIndustries, setSelectedIndustries] = useState<string[]>(
    preferences?.industries || []
  );
  const [selectedRegions, setSelectedRegions] = useState<string[]>(
    preferences?.regions || []
  );
  const [expertiseLevel, setExpertiseLevel] = useState<string>(
    preferences?.expertiseLevel || "intermediate"
  );
  const [selectedContentAreas, setSelectedContentAreas] = useState<string[]>(
    preferences?.contentAreas || []
  );
  const [selectedContentTypes, setSelectedContentTypes] = useState<string[]>(
    preferences?.preferredContentTypes || []
  );

  if (!isOpen) return null;

  const handleIndustryToggle = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((i) => i !== industry)
        : [...prev, industry]
    );
  };

  const handleRegionToggle = (region: string) => {
    setSelectedRegions((prev) =>
      prev.includes(region)
        ? prev.filter((r) => r !== region)
        : [...prev, region]
    );
  };

  const handleContentAreaToggle = (area: string) => {
    setSelectedContentAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleContentTypeToggle = (type: string) => {
    setSelectedContentTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSave = async () => {
    await updatePreferences({
      industries: selectedIndustries,
      regions: selectedRegions,
      expertiseLevel: expertiseLevel as UserPreferences["expertiseLevel"],
      contentAreas: selectedContentAreas,
      preferredContentTypes:
        selectedContentTypes as UserPreferences["preferredContentTypes"],
    });
    onComplete();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-ttp-orange" />
            <CardTitle>Personalize Your Experience</CardTitle>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-3">Industries of Interest</h3>
            <div className="flex flex-wrap gap-2">
              {filterOptions.industries.map((industry) => (
                <Badge
                  key={industry}
                  variant={
                    selectedIndustries.includes(industry)
                      ? "default"
                      : "outline"
                  }
                  className={`cursor-pointer transition-colors ${
                    selectedIndustries.includes(industry)
                      ? "bg-ttp-orange text-white"
                      : "hover:bg-ttp-orange/10"
                  }`}
                  onClick={() => handleIndustryToggle(industry)}
                >
                  {industry}
                </Badge>
              ))}
            </div>
          </div>

          {/* Regions */}
          <div>
            <h3 className="font-semibold mb-3">Regions</h3>
            <div className="flex flex-wrap gap-2">
              {filterOptions.regions.map((region) => (
                <Badge
                  key={region}
                  variant={
                    selectedRegions.includes(region) ? "default" : "outline"
                  }
                  className={`cursor-pointer transition-colors ${
                    selectedRegions.includes(region)
                      ? "bg-ttp-orange text-white"
                      : "hover:bg-ttp-orange/10"
                  }`}
                  onClick={() => handleRegionToggle(region)}
                >
                  {region}
                </Badge>
              ))}
            </div>
          </div>

          {/* Expertise Level */}
          <div>
            <h3 className="font-semibold mb-3">Expertise Level</h3>
            <Select value={expertiseLevel} onValueChange={setExpertiseLevel}>
              <SelectTrigger className="w-full max-w-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.expertiseLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Content Areas */}
          <div>
            <h3 className="font-semibold mb-3">Content Areas</h3>
            <div className="flex flex-wrap gap-2">
              {filterOptions.contentAreas.map((area) => (
                <Badge
                  key={area}
                  variant={
                    selectedContentAreas.includes(area) ? "default" : "outline"
                  }
                  className={`cursor-pointer transition-colors ${
                    selectedContentAreas.includes(area)
                      ? "bg-ttp-orange text-white"
                      : "hover:bg-ttp-orange/10"
                  }`}
                  onClick={() => handleContentAreaToggle(area)}
                >
                  {area}
                </Badge>
              ))}
            </div>
          </div>

          {/* Content Types */}
          <div>
            <h3 className="font-semibold mb-3">Preferred Content Types</h3>
            <div className="flex flex-wrap gap-2">
              {filterOptions.contentTypes.map((type) => (
                <Badge
                  key={type}
                  variant={
                    selectedContentTypes.includes(type) ? "default" : "outline"
                  }
                  className={`cursor-pointer transition-colors ${
                    selectedContentTypes.includes(type)
                      ? "bg-ttp-orange text-white"
                      : "hover:bg-ttp-orange/10"
                  }`}
                  onClick={() => handleContentTypeToggle(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              className="bg-ttp-orange hover:bg-ttp-orange/90"
            >
              Save Preferences
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
