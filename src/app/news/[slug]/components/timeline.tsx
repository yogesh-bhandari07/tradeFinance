import React from 'react';
import { Card, CardContent } from '@/shared/components/card';
import { Badge } from '@/shared/components/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/avatar';
import { Button } from '@/shared/components/button';
import { 
  Clock, 
  Zap, 
  AlertTriangle, 
  BarChart3
} from 'lucide-react';
import { NewsMediaEmbed } from '@/app/news/[slug]/components/embed';

interface NewsUpdate {
  id: string;
  timestamp: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  type: 'breaking' | 'update' | 'correction' | 'analysis';
  mediaEmbeds?: NewsMediaEmbed[];
}

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

interface NewsUpdateTimelineProps {
  updates: NewsUpdate[];
}

export const NewsUpdateTimeline: React.FC<NewsUpdateTimelineProps> = ({ updates }) => {
  const getUpdateIcon = (type: string) => {
    switch (type) {
      case 'breaking':
        return <Zap className="w-5 h-5 text-red-500" />;
      case 'analysis':
        return <BarChart3 className="w-5 h-5 text-blue-500" />;
      case 'correction':
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getUpdateTypeLabel = (type: string) => {
    switch (type) {
      case 'breaking':
        return 'BREAKING';
      case 'analysis':
        return 'ANALYSIS';
      case 'correction':
        return 'CORRECTION';
      default:
        return 'UPDATE';
    }
  };

  const getUpdateTypeColor = (type: string) => {
    switch (type) {
      case 'breaking':
        return 'bg-red-600 text-white';
      case 'analysis':
        return 'bg-blue-600 text-white';
      case 'correction':
        return 'bg-orange-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return {
      time: date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }),
      date: date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      })
    };
  };

  const formatRelativeTime = (timestamp: string) => {
    const now = new Date();
    const updateTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now.getTime() - updateTime.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hour${Math.floor(diffInMinutes / 60) === 1 ? '' : 's'} ago`;
    return updateTime.toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-ttp-charcoal">Live Updates</h2>
        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
          {updates.length} updates
        </Badge>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

        {updates.map((update) => {
          const timeInfo = formatTime(update.timestamp);
          
          return (
            <div key={update.id} className="relative pl-16 pb-8">
              {/* Timeline Node */}
              <div className="absolute left-4 w-4 h-4 bg-background  border-2 border-primary rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full bg-orange-500"></div>
              </div>

              {/* Update Card */}
              <Card className={`${update.type === 'breaking' ? 'border-red-200 bg-red-50/30' : ''}`}>
                <CardContent className="p-6">
                  {/* Update Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Badge className={getUpdateTypeColor(update.type)}>
                        {getUpdateIcon(update.type)}
                        <span className="ml-1 text-xs font-semibold">
                          {getUpdateTypeLabel(update.type)}
                        </span>
                      </Badge>
                      <div className="text-sm text-muted-foreground text-ttp-charcoal">
                        {timeInfo.time} · {timeInfo.date}
                      </div>
                      <div className="text-xs text-muted-foreground text-ttp-charcoal">
                        {formatRelativeTime(update.timestamp)}
                      </div>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={update.authorAvatar} alt={update.authorName} />
                      <AvatarFallback>
                        {update.authorName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm text-ttp-charcoal">{update.authorName}</div>
                      <div className="text-xs text-muted-foreground text-ttp-charcoal">Senior Correspondent</div>
                    </div>
                  </div>

                  {/* Update Content */}
                  <div className="prose prose-sm max-w-none">
                    <p className="text-foreground leading-relaxed text-ttp-charcoal">
                      {update.content}
                    </p>
                  </div>

                  {/* Media Embeds */}
                  {update.mediaEmbeds && update.mediaEmbeds.length > 0 && (
                    <div className="mt-4 space-y-4 text-ttp-charcoal">
                      {update.mediaEmbeds.map((media) => (
                        <NewsMediaEmbed key={media.id} media={media} />
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Load More Updates */}
      <Card className="border-dashed">
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground mb-4 text-ttp-charcoal">
            You have reached the beginning of this story
          </p>
          <Button variant="outline">
            View Earlier Coverage
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};