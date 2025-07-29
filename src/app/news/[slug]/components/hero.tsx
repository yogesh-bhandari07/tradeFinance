import React from 'react';
import { Badge } from '@/shared/components/badge';
import { Clock, Zap, TrendingUp } from 'lucide-react';

interface LiveNewsPost {
  id: string;
  title: string;
  featured_image_url?: string;
  isLive: boolean;
  published_at?: string;
}

interface LiveNewsHeroProps {
  news: LiveNewsPost;
}

export const LiveNewsHero: React.FC<LiveNewsHeroProps> = ({ news }) => {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${news.featured_image_url})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/80" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Breaking News Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {news.isLive && (
              <Badge className="bg-red-600 text-white text-sm px-3 py-1 animate-pulse">
                <Zap className="w-4 h-4 mr-1" />
                BREAKING
              </Badge>
            )}
            <Badge variant="outline" className="text-white border-white/20 bg-white/10">
              <TrendingUp className="w-4 h-4 mr-1" />
              Trending
            </Badge>
            <Badge variant="outline" className="text-white border-white/20 bg-white/10">
              Trade Policy
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {news.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Follow live updates as this developing story unfolds. Our team of reporters 
            is providing real-time coverage and analysis of the latest developments.
          </p>
          
          {/* Engagement Stats */}
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Live Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">
                Published {new Date(news.published_at || '').toLocaleDateString()}
              </span>
            </div>
            <div className="text-sm">
              Live coverage with real-time updates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};