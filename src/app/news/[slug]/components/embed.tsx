import React from 'react';
import { Card, CardContent } from '@/shared/components/card';
import { Button } from '@/shared/components/button';
import { Badge } from '@/shared/components/badge';
import { 
  Play, 
  Image as ImageIcon, 
  BarChart3, 
  ExternalLink,
  Download,
  Maximize2
} from 'lucide-react';

interface NewsMediaEmbed {
  id: string;
  type: 'image' | 'video' | 'chart' | 'tweet' | 'linkedin';
  url: string;
  caption?: string;
  credits?: string;
  authorName?: string;
  authorHandle?: string;
  timestamp?: string;
}

interface NewsMediaEmbedProps {
  media: NewsMediaEmbed;
}

export const NewsMediaEmbed: React.FC<NewsMediaEmbedProps> = ({ media }) => {
  const getMediaIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <ImageIcon className="w-4 h-4" />;
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'chart':
        return <BarChart3 className="w-4 h-4" />;
      case 'linkedin':
        return <ExternalLink className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  const getMediaTypeLabel = (type: string) => {
    switch (type) {
      case 'image':
        return 'Image';
      case 'video':
        return 'Video';
      case 'chart':
        return 'Chart';
      case 'tweet':
        return 'X Post';
      case 'linkedin':
        return 'LinkedIn Post';
      default:
        return 'Media';
    }
  };

  const renderMediaContent = () => {
    switch (media.type) {
      case 'image':
      case 'chart':
        return (
          <div className="relative group">
            <img 
              src={media.url}
              alt={media.caption || 'News media'}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" className="h-8">
                  <Maximize2 className="w-3 h-3" />
                </Button>
                <Button variant="secondary" size="sm" className="h-8">
                  <Download className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        );
      
      case 'video':
        return (
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <img 
              src={media.url}
              alt={media.caption || 'Video thumbnail'}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <Button variant="secondary" size="lg" className="rounded-full">
                <Play className="w-6 h-6 ml-1" />
              </Button>
            </div>
            <Badge className="absolute top-2 left-2 bg-black/80 text-white">
              VIDEO
            </Badge>
          </div>
        );
      
      case 'tweet':
        return (
          <div className="border border-border rounded-lg p-4 bg-background">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">𝕏</span>
              </div>
              <div>
                <div className="font-medium text-sm">{media.authorName || '@TradingPost'}</div>
                <div className="text-xs text-muted-foreground">{media.timestamp || '2h ago'}</div>
              </div>
            </div>
            <p className="text-sm mb-3">
              {media.caption || "Breaking: Major developments in global trade policy affecting cross-border payments..."}
            </p>
            <Button variant="outline" size="sm">
              <ExternalLink className="w-3 h-3 mr-2" />
              View on X
            </Button>
          </div>
        );
      
      case 'linkedin':
        return (
          <div className="border border-border rounded-lg p-4 bg-background">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">in</span>
              </div>
              <div>
                <div className="font-medium text-sm">{media.authorName || 'Trade Finance Expert'}</div>
                <div className="text-xs text-muted-foreground">{media.timestamp || '3h ago'}</div>
              </div>
            </div>
            <p className="text-sm mb-3">
              {media.caption || "Sharing insights on the latest trade finance developments and their implications for global commerce..."}
            </p>
            <Button variant="outline" size="sm">
              <ExternalLink className="w-3 h-3 mr-2 text-ttp-charcoal" />
              View on LinkedIn
            </Button>
          </div>
        );
      
      default:
        return (
          <div className="border border-dashed border-border rounded-lg p-8 text-center">
            <p className="text-muted-foreground">Media content not available</p>
          </div>
        );
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        {/* Media Header */}
        <div className="p-3 border-b bg-muted/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {getMediaIcon(media.type)}
              <span className="text-sm font-medium">{getMediaTypeLabel(media.type)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <ExternalLink className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>

        {/* Media Content */}
        <div className="p-4">
          {renderMediaContent()}
        </div>

        {/* Media Caption */}
        {(media.caption || media.credits) && (
          <div className="px-4 pb-4">
            {media.caption && (
              <p className="text-sm text-muted-foreground mb-1">
                {media.caption}
              </p>
            )}
            {media.credits && (
              <p className="text-xs text-muted-foreground">
                Credit: {media.credits}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};