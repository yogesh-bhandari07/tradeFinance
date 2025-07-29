/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from "@/shared/components/card";
import { Badge } from "@/shared/components/badge";
import { Button } from "@/shared/components/button";
import { 
  FileText, 
  Video, 
  Mic, 
  Calendar,
  ExternalLink,
  Download,
  Play,
  Clock,
  MapPin
} from "lucide-react";
import { CompanyContent, CompanyEvent, CompanyPublication } from "@/hooks/useCompanies";

interface SimplifiedContentGridProps {
  content: CompanyContent[];
  events: CompanyEvent[];
  publications: CompanyPublication[];
  loading: boolean;
}

export const SimplifiedContentGrid = ({ content, events, publications, loading }: SimplifiedContentGridProps) => {
  const getContentIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'video': return Video;
      case 'podcast': return Mic;
      case 'webinar': return Video;
      default: return FileText;
    }
  };

  const getEventIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'webinar': return Video;
      case 'conference': return Calendar;
      default: return Calendar;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-4">
              <div className="h-4 bg-muted rounded w-3/4 mb-2" />
              <div className="h-3 bg-muted rounded w-1/2 mb-4" />
              <div className="h-8 bg-muted rounded" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  // Combine all content types into a single array with proper type handling
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
    return (
      <div className="text-center py-12">
        <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-medium mb-2">No Content Available</h3>
        <p className="text-muted-foreground">This company has not published any content yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-ttp-charcoal">Company Content</h2>
        <Badge variant="outline">{allItems.length} items</Badge>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allItems.map((item) => {
          const getIcon = () => {
            if (item.itemType === 'content') {
              return getContentIcon((item as any).content_type || 'article');
            }
            if (item.itemType === 'event') {
              return getEventIcon((item as any).event_type || 'event');
            }
            return FileText;
          };
          
          const IconComponent = getIcon();

          return (
            <Card key={`${item.itemType}-${item.id}`} className="group hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#F16814] rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors text-ttp-charcoal">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs text-ttp-charcoal">
                        {item.itemType === 'content' 
                          ? (item as any).content_type?.replace('_', ' ') 
                          : item.itemType === 'event' 
                          ? (item as any).event_type?.replace('_', ' ')
                          : (item as any).publication_type?.replace('_', ' ') || item.itemType
                        }
                      </Badge>
                      {item.itemType === 'content' && (item as any).duration && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 text-ttp-charcoal" />
                          <div className="text-ttp-charcoal">{(item as any).duration}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  {item.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2 text-ttp-charcoal">
                      {item.description}
                    </p>
                  )}

                  {/* Event specific info */}
                  {item.itemType === 'event' && (item as any).location && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 text-ttp-charcoal" />
                      <div className="text-ttp-charcoal">

                      {(item as any).location}
                      </div>
                    </div>
                  )}

                  {/* Date */}
                  <div className="text-xs text-muted-foreground text-ttp-charcoal">
                    {item.itemType === 'content' && (item as any).date && formatDate((item as any).date)}
                    {item.itemType === 'event' && (item as any).date && formatDate((item as any).date)}
                    {item.itemType === 'publication' && (item as any).published_date && formatDate((item as any).published_date)}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                  {item.itemType === 'content' && (
                    <Button size="sm" variant="outline" className="flex-1">
                      <Play className="w-3 h-3 mr-1" />
                      View
                    </Button>
                  )}
                  
                  {item.itemType === 'event' && (
                    <Button 
                      size="sm" 
                      variant={new Date((item as any).date) > new Date() ? "default" : "outline"}
                      className="flex-1"
                    >
                      {new Date((item as any).date) > new Date() ? 'Register' : 'View'}
                    </Button>
                  )}
                  
                  {item.itemType === 'publication' && (
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                  )}
                  
                  {((item as any).url || (item as any).event_url || (item as any).pdf_url) && (
                    <Button size="sm" variant="ghost" className="px-2">
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};