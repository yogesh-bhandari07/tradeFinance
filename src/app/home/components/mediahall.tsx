'use client';
import React, { useState } from "react";
import { MediaWallBackground } from "./mediabg";
import { MediaWallHeader } from "./mediaheader";
import { MediaCard } from "./mediacard";
import { mediaContent } from "@/app/types/media";

export const MediaWall = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      <MediaWallBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MediaWallHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaContent.map((item) => (
            <MediaCard
              key={item.id}
              item={item}
              isHovered={hoveredItem === item.id}
              onHover={() => setHoveredItem(item.id)}
              onLeave={() => setHoveredItem(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
