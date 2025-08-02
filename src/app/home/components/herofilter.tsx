import React from "react";
import { Button } from "@/shared/components/button";

interface Theme {
  id: string;
  label: string;
  color: string;
}

interface HeroThemeFilterProps {
  themes: Theme[];
  activeTheme: string;
  onThemeChange: (themeId: string) => void;
}

export const HeroThemeFilter: React.FC<HeroThemeFilterProps> = ({
  themes,
  activeTheme,
  onThemeChange,
}) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col items-center mb-4">
        <span className="text-sm text-gray-500 mb-3">Navigate your route:</span>
        <div className="flex flex-wrap justify-center gap-2">
          {themes.map((theme) => (
            <Button
              key={theme.id}
              size="sm"
              variant={activeTheme === theme.id ? "default" : "outline"}
              onClick={() => onThemeChange(theme.id)}
              className={`${
                activeTheme === theme.id
                  ? `${theme.color} text-white hover:opacity-90`
                  : "border-gray-300 text-gray-700 hover:bg-white/50 backdrop-blur-sm"
              } text-xs px-3 py-1.5 rounded-full transition-all duration-300`}
            >
              {theme.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
