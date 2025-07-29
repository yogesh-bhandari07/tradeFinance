import React from 'react';
import { Badge } from '@/shared/components/badge';
import { AdBanner as AdBannerType } from '@/app/types/ads';

interface AdBannerProps {
  ad: AdBannerType;
  className?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({ ad, className = '' }) => {
  const handleClick = () => {
    // In a real implementation, this would track ad clicks
    console.log(`Ad clicked: ${ad.id}`);
    window.open(ad.url, '_blank');
  };

  // Calculate smaller dimensions (reduce by 25%)
  const displayWidth = Math.min(ad.dimensions.width * 0.75, 400);
  const displayHeight = Math.min(ad.dimensions.height * 0.75, 150);

  return (
    <div 
      className={`group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer ${className}`}
      style={{ 
        width: displayWidth, 
        height: displayHeight,
        maxWidth: '100%'
      }}
      onClick={handleClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={ad.image} 
          alt={ad.title}
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
      </div>

      {/* Sponsored Badge - Always visible for sponsored ads */}
      <Badge className="absolute top-2 right-2 z-10 bg-gray-800/90 text-white text-xs backdrop-blur-sm">
        Sponsored
      </Badge>

      {/* Company Logo - Bottom Left */}
      {ad.logo && (
        <div className="absolute bottom-2 left-2 w-6 h-6 bg-white/90 rounded shadow-sm flex items-center justify-center">
          <img 
            src={ad.logo} 
            alt={ad.company}
            className="w-4 h-4 object-contain"
          />
        </div>
      )}

      {/* Company Name - Bottom Right */}
      <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
        <span className="text-xs font-medium text-gray-800">
          {ad.company}
        </span>
      </div>

      {/* Title overlay - only for larger ads */}
      {displayHeight > 100 && (
        <div className="absolute top-2 left-2 right-12 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
          <h4 className="font-semibold text-gray-800 text-xs line-clamp-1">
            {ad.title}
          </h4>
        </div>
      )}
    </div>
  );
};
