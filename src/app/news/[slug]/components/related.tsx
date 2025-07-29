import React from 'react';
import { Card, CardContent} from '@/shared/components/card';
import { Badge } from '@/shared/components/badge';
import { Button } from '@/shared/components/button';
import { 
  Clock, 
  TrendingUp, 
  Eye, 
  ArrowRight,
  Zap,
  Users
} from 'lucide-react';

interface RelatedNewsItem {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
  lastUpdated: string;
  isLive: boolean;
  views: number;
  updateCount: number;
  authors: string[];
  category: string;
  image: string;
}

interface RelatedLiveNewsProps {
  currentNewsId: string;
}

export const RelatedLiveNews: React.FC<RelatedLiveNewsProps> = ({ }) => {
  const relatedNews: RelatedNewsItem[] = [
    {
      id: '2',
      title: 'ECB Considers Emergency Rate Decision Following Trade Disruption',
      summary: 'European Central Bank officials reportedly discussing unscheduled policy meeting as trade tensions affect eurozone outlook.',
      publishedAt: '2024-01-28T10:30:00Z',
      lastUpdated: '2024-01-28T14:15:00Z',
      isLive: true,
      views: 8920,
      updateCount: 6,
      authors: ['Marco Delacroix', 'Anna Bernstein'],
      category: 'Central Banking',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '3',
      title: 'Global Supply Chain Disruptions Intensify Amid Sanctions',
      summary: 'Major shipping companies report delays and route changes as new trade restrictions complicate international logistics.',
      publishedAt: '2024-01-28T09:00:00Z',
      lastUpdated: '2024-01-28T13:30:00Z',
      isLive: true,
      views: 12340,
      updateCount: 8,
      authors: ['Jennifer Park', 'Ahmed Hassan', 'Lisa Weber'],
      category: 'Supply Chain',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '4',
      title: 'Cryptocurrency Markets React to Trade War Escalation',
      summary: 'Bitcoin and major altcoins see significant volatility as investors seek safe haven assets amid growing trade uncertainty.',
      publishedAt: '2024-01-28T08:45:00Z',
      lastUpdated: '2024-01-28T12:20:00Z',
      isLive: false,
      views: 6750,
      updateCount: 4,
      authors: ['Ryan Mitchell'],
      category: 'Cryptocurrency',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const formatRelativeTime = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInMinutes = Math.floor((now.getTime() - time.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return time.toLocaleDateString();
  };

  return (
    <div className="space-y-6 mt-8 text-ttp-charcoal">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Related Live Coverage</h3>
        <Button variant="outline" size="sm">
          View All News
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="grid gap-6">
        {relatedNews.map((news) => (
          <Card key={news.id} className={`group cursor-pointer hover:shadow-lg transition-all duration-200 ${
            news.isLive ? 'border-red-200 bg-red-50/20' : ''
          }`}>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-4">
                {/* Image */}
                <div className="relative overflow-hidden md:col-span-1">
                  <img 
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  {news.isLive && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-red-600 text-white animate-pulse">
                        <Zap className="w-3 h-3 mr-1" />
                        LIVE
                      </Badge>
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2">
                    <Badge variant="secondary" className="text-xs">
                      {news.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {news.title}
                    </h4>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {news.summary}
                  </p>

                  {/* Metadata */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Updated {formatRelativeTime(news.lastUpdated)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {(news.views / 1000).toFixed(1)}k views
                      </span>
                      {news.isLive && (
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {news.updateCount} updates
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {news.authors.length > 1 
                            ? `${news.authors[0]} + ${news.authors.length - 1} more`
                            : news.authors[0]
                          }
                        </span>
                      </div>
                      <Button variant="ghost" size="sm">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* More Stories */}
      <Card className="border-dashed">
        <CardContent className="p-6 text-center">
          <div className="space-y-3">
            <h4 className="font-medium">Stay Updated on Breaking News</h4>
            <p className="text-sm text-muted-foreground">
              Get real-time alerts for developing stories in trade finance and global markets.
            </p>
            <Button variant="outline">
              <Zap className="w-4 h-4 mr-2" />
              Enable Breaking News Alerts
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};