import React, { useState, useEffect } from "react";
import { Button } from "@/shared/components/button";

export const AboutNavigation = () => {
  const [activeSection, setActiveSection] = useState("who-we-are");

  const navItems = [
    { id: "who-we-are", label: "Who We Are" },
    { id: "mission", label: "Mission" },
    { id: "reach", label: "Reach" },
    { id: "team", label: "Team" },
    { id: "advisory", label: "Advisory" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-4">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-ttp-orange text-white shadow-sm hover:bg-ttp-orange/90"
                    : "text-gray-600 hover:text-ttp-orange hover:bg-white"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
