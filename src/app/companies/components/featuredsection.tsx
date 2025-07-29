/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import { Button } from "@/shared/components/button";
import { 
  Play,
  Clock,
  MapPin,
  ChevronRight,
  Sparkles
} from "lucide-react";

import { CompanyContent, CompanyEvent, CompanyPublication } from "@/hooks/useCompanies";

interface FeaturedContentSectionProps {
  content: CompanyContent[];
  events: CompanyEvent[];
  publications: CompanyPublication[];
}

export const FeaturedContentSection = ({ content, events, publications }: FeaturedContentSectionProps) => {
  // Combine and sort all content by date
  const allItems = [
    ...content.map(item => ({ ...item, itemType: 'content' as const })),
    ...events.map(item => ({ ...item, itemType: 'event' as const })),
    ...publications.map(item => ({ ...item, itemType: 'publication' as const }))
  ].sort((a, b) => {
    const getDate = (item: any) => {
      if (item.itemType === 'content') return item.date;
      if (item.itemType === 'event') return item.date;
      if (item.itemType === 'publication') return item.published_date;
      return new Date().toISOString();
    };
    return new Date(getDate(b)).getTime() - new Date(getDate(a)).getTime();
  });

  if (allItems.length === 0) {
    return null;
  }

  const featuredItem = allItems[0];
  const secondaryItems = allItems.slice(1, 5);

  const getContentTypeDisplay = (item: any) => {
    if (item.itemType === 'content') {
      return item.content_type?.replace('_', ' ') || 'Article';
    }
    if (item.itemType === 'event') {
      return item.event_type?.replace('_', ' ') || 'Event';
    }
    return item.publication_type?.replace('_', ' ') || 'Publication';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const getItemDate = (item: any) => {
    if (item.itemType === 'content') return item.date;
    if (item.itemType === 'event') return item.date;
    if (item.itemType === 'publication') return item.published_date;
    return new Date().toISOString();
  };

  const getItemThumbnail = (item: any) => {
    if (item.itemType === 'content' && item.thumbnail_url) return item.thumbnail_url;
    if (item.itemType === 'publication' && item.thumbnail_url) return item.thumbnail_url;
    // Default image based on content type
    if (item.itemType === 'event') return 'https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=800&h=400&fit=crop';
    if (item.itemType === 'content' && item.content_type === 'video') return 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop';
    if (item.itemType === 'publication') return 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop';
    return 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-ttp-charcoal">Featured Content</h2>
        <Badge variant="outline">{allItems.length} items</Badge>
      </div>

      {/* Featured Story - Large Card */}
      <div className="relative overflow-hidden rounded-xl shadow-xl group cursor-pointer bg-card border">
        <div className="aspect-[3/1] relative">
          <img 
            src={getItemThumbnail(featuredItem)}
            alt={featuredItem.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
            <div className="flex flex-wrap gap-2 mb-3">
              {featuredItem.itemType === 'content' && (
                <Badge className="bg-primary text-white text-xs">
                  <Sparkles className="w-3 h-3 mr-1" />
                  FEATURED
                </Badge>
              )}
              <Badge variant="outline" className="bg-white/20 text-white border-white/30 text-xs backdrop-blur-sm">
                {getContentTypeDisplay(featuredItem)}
              </Badge>
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight ">
              {featuredItem.title}
            </h3>
            <p className="text-sm text-white/90 mb-3 max-w-2xl line-clamp-2">
              {featuredItem.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 text-xs text-white/80">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{formatDate(getItemDate(featuredItem))}</span>
                </div>
                {featuredItem.itemType === 'content' && featuredItem.duration && (
                  <div className="flex items-center space-x-1">
                    <Play className="w-3 h-3" />
                    <span>{featuredItem.duration}</span>
                  </div>
                )}
                {featuredItem.itemType === 'event' && featuredItem.location && (
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{featuredItem.location}</span>
                  </div>
                )}
              </div>
              <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs backdrop-blur-sm">
                View Details
                <ChevronRight className="ml-1 w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Stories Grid */}
      {secondaryItems.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondaryItems.map((item) => (
            <Card
              key={`${item.itemType}-${item.id}`}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={getItemThumbnail(item)}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 left-2">
                  <Badge className="bg-primary text-white text-xs backdrop-blur-sm text-ttp-charcoal">
                    {getContentTypeDisplay(item)}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-3">
                <h4 className="text-sm font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors text-ttp-charcoal">
                  {item.title}
                </h4>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-ttp-charcoal" />
                    <span className="text-ttp-charcoal">{formatDate(getItemDate(item))}</span>
                  </span>
                  {item.itemType === 'content' && item.duration && (
                    <span className="flex items-center space-x-1">
                      <Play className="w-3 h-3 text-ttp-charcoal" />
                      <span className="text-ttp-charcoal">{item.duration}</span>
                    </span>
                  )}
                </div>
                
                {item.description && (
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2 text-ttp-charcoal">
                    {item.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};