'use client';

import { useEffect, useState } from 'react';

export default function Contents() {
  const sections = [
    "Introduction",
    "Current Regulatory Landscape",
    "Market Impact Analysis",
    "Expert Insights",
    "Case Studies",
    "Implementation Challenges",
    "Technological Infrastructure",
    "Future Outlook",
    "Strategic Recommendations",
    "Conclusion",
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

useEffect(() => {
  const handleScroll = () => {
  const sectionElements = sections.map((id) => document.getElementById(id));
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  const firstSection = sectionElements[0];
  // const lastSection = sectionElements[sectionElements.length - 1];

  // If user is above the first section
  if (firstSection) {
    const rect = firstSection.getBoundingClientRect();
    if (rect.top > 0) {
      setActiveIndex(0);
      return;
    }
  }

  // If user is below the last section
  if (scrollY + windowHeight >= docHeight - 10) {
    setActiveIndex(sections.length - 1);
    return;
  }

  // Otherwise: normal in-view detection
  for (let i = 0; i < sectionElements.length; i++) {
    const el = sectionElements[i];
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        setActiveIndex(i);
        return;
      }
    }
  }

  // If nothing matches, keep the last known index
};


  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // initial run

  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      <h3 className="font-bold text-gray-900 mb-4 text-lg">Contents</h3>
      <nav className="space-y-2">
        {sections.map((title, index) => {
          const isActive = index === activeIndex;
          return (
            <a
              key={index}
              href={`#${title}`}
              className={`block w-full text-left text-sm py-2 px-3 rounded-md transition-colors duration-100 ease-in-out ${
                isActive
                  ? "bg-orange-500 text-white shadow-sm"
                  : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
              }`}

            >
              <div className="flex items-center gap-2">
                <span className="text-xs opacity-60 font-medium ">{index + 1}.</span>
                <span className="font-medium">{title}</span>
              </div>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
