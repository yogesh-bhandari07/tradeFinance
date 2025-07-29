import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/avatar';
import { Badge } from '@/shared/components/badge';
import { Button } from '@/shared/components/button';
import { Separator } from '@/shared/components/separator';
import { Input } from '@/shared/components/input';
import { 
  Clock, 
  TrendingUp, 
  Zap, 
  Bell,
  Eye,
  ArrowUp,
  ArrowDown,
  Mail,
  User
} from 'lucide-react';

interface LiveNewsItem {
  id: string;
  title: string;
  time: string;
  type: 'breaking' | 'update' | 'trending';
  views: number;
  isNew?: boolean;
  summary: string;
  trend?: 'up' | 'down' | 'neutral';
}

interface NewsAuthor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  expertise: string[];
  lastContribution: string;
}

interface LiveNewsSidebarProps {
  currentNewsId: string;
  authors: NewsAuthor[];
}

export const LiveNewsSidebar: React.FC<LiveNewsSidebarProps> = ({ authors }) => {
  const [liveNews, setLiveNews] = useState<LiveNewsItem[]>([
    {
      id: '1',
      title: 'Fed Signals Rate Hold Amid Trade Uncertainty',
      time: '14:32',
      type: 'breaking',
      views: 8420,
      isNew: true,
      summary: 'Federal Reserve maintains current rates following escalating trade tensions',
      trend: 'up'
    },
    {
      id: '2',
      title: 'European Markets React to Sanctions',
      time: '14:15',
      type: 'update',
      views: 5230,
      summary: 'DAX down 1.2%, FTSE shows volatility',
      trend: 'down'
    },
    {
      id: '3',
      title: 'IMF Revises Global Growth Forecast',
      time: '13:58',
      type: 'trending',
      views: 3450,
      summary: 'International body cites trade disruptions as key concern',
      trend: 'neutral'
    },
    {
      id: '4',
      title: 'Asian Markets Open Lower',
      time: '13:45',
      type: 'update',
      views: 2890,
      summary: 'Nikkei, Hang Seng show immediate response',
      trend: 'down'
    },
    {
      id: '5',
      title: 'Oil Prices Surge on Supply Concerns',
      time: '13:30',
      type: 'trending',
      views: 4120,
      summary: 'Brent crude up 2.8% in early trading',
      trend: 'up'
    }
  ]);

  const formatLastContribution = (timestamp: string) => {
    const now = new Date();
    const contributionTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now.getTime() - contributionTime.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return contributionTime.toLocaleDateString();
  };

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveNews(prev => {
        const updated = [...prev];
        // Mark items as not new after 30 seconds
        updated.forEach(item => {
          if (item.isNew) {
            setTimeout(() => {
              item.isNew = false;
            }, 30000);
          }
        });
        return updated;
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'breaking':
        return <Zap className="w-3 h-3 text-red-500" />;
      case 'trending':
        return <TrendingUp className="w-3 h-3 text-orange-500" />;
      default:
        return <Clock className="w-3 h-3 text-blue-500" />;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <ArrowUp className="w-3 h-3 text-green-500" />;
      case 'down':
        return <ArrowDown className="w-3 h-3 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Live Alerts */}
      <Card>
        <CardHeader className="pb-3 text-ttp-charcoal">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              Live News
            </CardTitle>
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 max-h-96 overflow-y-auto text-ttp-charcoal">
          {liveNews.map((item, index) => (
            <div key={item.id}>
              <div className="group cursor-pointer hover:bg-muted/50 p-2 rounded-lg transition-colors">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(item.type)}
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.time}
                    </span>
                    {item.isNew && (
                      <Badge variant="secondary" className="text-xs px-1.5 py-0.5 bg-red-100 text-red-700">
                        NEW
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    {getTrendIcon(item.trend || '')}
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {(item.views / 1000).toFixed(1)}k
                    </span>
                  </div>
                </div>
                <h4 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {item.summary}
                </p>
              </div>
              {index < liveNews.length - 1 && <Separator className="my-3" />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Reporting Team */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Reporting Team</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-ttp-charcoal">
          {authors.map((author, index) => (
            <div key={author.id}>
              <div className="flex items-start gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={author.avatar} alt={author.name} />
                  <AvatarFallback>
                    {author.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-sm">{author.name}</h4>
                    {index === 0 && (
                      <Badge variant="secondary" className="text-xs text-ttp-charcoal">Lead</Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{author.role}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {author.expertise.slice(0, 2).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs text-ttp-charcoal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Last update: {formatLastContribution(author.lastContribution)}
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-auto p-1">
                  <User className="w-3 h-3" />
                </Button>
              </div>
              {index < authors.length - 1 && <Separator className="mt-3" />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Newsletter Subscription */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Stay Updated</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground text-ttp-charcoal">
            Get notified when this story updates.
          </p>
          <div className="space-y-2">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="text-sm text-ttp-charcoal border-black/20"
            />
            <Button className="w-full" size="sm">
              <Mail className="w-4 h-4 mr-2" />
              Follow This Story
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Trending Now</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2 ">
            <Badge variant="outline" className="w-full justify-center text-ttp-charcoal">#TradeTensions</Badge>
            <Badge variant="outline" className="w-full justify-center text-ttp-charcoal">#CurrencyVolatility</Badge>
            <Badge variant="outline" className="w-full justify-center text-ttp-charcoal">#SanctionsImpact</Badge>
            <Badge variant="outline" className="w-full justify-center text-ttp-charcoal">#SupplyChainDisruption</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Breaking News Alerts */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Breaking News Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3 text-ttp-charcoal">
            Get instant notifications for breaking trade finance news.
          </p>
          <Button className="w-full" size="sm">
            <Bell className="w-4 h-4 mr-2" />
            Subscribe to Alerts
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};