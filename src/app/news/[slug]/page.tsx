'use client';
import React, {  useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { Progress } from '@/shared/components/progress';
import { Card, CardContent } from '@/shared/components/card';
import { Button } from '@/shared/components/button';
import { 
  Clock, 
  Share2, 
  Bookmark, 
  Calendar,
  AlertCircle,
  Users
} from 'lucide-react';
import { LiveNewsHero } from '@/app/news/[slug]/components/hero';
import { LiveNewsSidebar } from '@/app/news/[slug]/components/sidebar';
import { NewsUpdateTimeline } from '@/app/news/[slug]/components/timeline';
import { NewsMediaEmbed } from '@/app/news/[slug]/components/embed';
import { RelatedLiveNews } from '@/app/news/[slug]/components/related';
import { ContentAds } from '@/shared/components/contentads';
import { AdBanner } from '@/shared/components/adbanner';
import { getAdsForPage } from '@/app/types/adsdata';
import type { Post } from '@/app/types/post';

// Extended news post type with live updates
interface LiveNewsPost extends Post {
  post_type: string;
  status: string;
  updates: NewsUpdate[];
  isLive: boolean;
  lastUpdated: string;
  authors: NewsAuthor[];
  published_at:string;
  created_at:string;
  updated_at:string;
  author_role:string;
}

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

interface NewsAuthor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  expertise: string[];
  lastContribution: string;
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

const NewsStoryLive = () => {
  const { newsSlug } = useParams();
  const [readingProgress, setReadingProgress] = useState(0);
  console.log(readingProgress);
//   const [isLive, setIsLive] = useState(true);
//   const [lastUpdate, setLastUpdate] = useState(new Date().toISOString());

  // Mock live news data
  const newsData: Record<string, LiveNewsPost> = {
    'us-china-trade-tensions-escalate': {
      id: '1',
      title: 'US-China Trade Tensions Escalate as New Sanctions Announced',
      slug: 'us-china-trade-tensions-escalate',
      post_type: 'article',
      status: 'published',
      featuredImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      published_at: '2024-01-28T08:00:00Z',
      created_at: '2024-01-28T08:00:00Z',
      updated_at: new Date().toISOString(),
      author_role: 'author',
      isLive: true,
      lastUpdated: new Date().toISOString(),
      authors: [
        {
          id: '1',
          name: 'Sarah Chen',
          role: 'Trade Policy Correspondent',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c05b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
          expertise: ['Trade Policy', 'US-China Relations', 'Economics'],
          lastContribution: '2024-01-28T14:30:00Z'
        },
        {
          id: '2',
          name: 'Marcus Thompson',
          role: 'Financial Markets Analyst',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
          expertise: ['Financial Markets', 'Currency Analysis', 'Economic Policy'],
          lastContribution: '2024-01-28T13:45:00Z'
        },
        {
          id: '3',
          name: 'Dr. Elena Rodriguez',
          role: 'Senior Trade Economist',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
          expertise: ['International Trade', 'Economic Analysis', 'Policy Research'],
          lastContribution: '2024-01-28T12:15:00Z'
        }
      ],
      updates: [
        {
          id: '1',
          timestamp: '2024-01-28T14:30:00Z',
          authorId: '1',
          authorName: 'Sarah Chen',
          authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c05b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
          type: 'breaking',
          content: 'BREAKING: The US Treasury Department has announced sweeping new sanctions targeting Chinese technology companies, effective immediately. The measures affect 23 companies in the semiconductor and artificial intelligence sectors, representing the most significant escalation in trade tensions since 2019. Markets have reacted with sharp volatility, with the Chinese yuan dropping 2.3% against the dollar in early trading.',
          mediaEmbeds: [
            {
              id: '1',
              type: 'image',
              url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
              caption: 'US Treasury Department building in Washington DC where the announcement was made',
              credits: 'Reuters'
            }
          ]
        },
        {
          id: '2',
          timestamp: '2024-01-28T13:45:00Z',
          authorId: '2',
          authorName: 'Marcus Thompson',
          authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
          type: 'analysis',
          content: 'MARKET ANALYSIS: The USD/CNY currency pair has shown immediate and significant movement following the Treasury announcement, with a 2.3% spike representing one of the largest single-day movements in recent months. Trading volumes have surged 400% above the daily average as institutional investors rapidly adjust their positions. "This level of volatility hasn\'t been seen since the initial trade war escalation in 2019," said Jennifer Walsh, Chief Currency Strategist at Morgan Stanley. "We\'re seeing flight-to-safety flows that could persist for several trading sessions." The Shanghai Composite has fallen 3.8% in after-hours trading, while US futures suggest a mixed opening on Wall Street.',
          mediaEmbeds: [
            {
              id: '2',
              type: 'chart',
              url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              caption: 'USD/CNY exchange rate movement showing 2.3% spike (Last 24 hours)',
              credits: 'TradingView'
            },
            {
              id: '3',
              type: 'tweet',
              url: '',
              caption: 'USD/CNY just hit 7.234 - highest level since March 2023. Expecting continued volatility as markets digest new sanctions. Watch for potential PBOC intervention around 7.25 level. #ForexTrading #USDCNY',
              authorName: '@ForexAnalystPro',
              timestamp: '45m ago'
            }
          ]
        },
        {
          id: '3',
          timestamp: '2024-01-28T12:15:00Z',
          authorId: '3',
          authorName: 'Dr. Elena Rodriguez',
          authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
          type: 'update',
          content: 'OFFICIAL RESPONSE: The Chinese Ministry of Commerce has issued a strongly worded statement calling the latest US sanctions "unwarranted and counterproductive to global economic stability." Commerce Ministry spokesperson Liu Wei told reporters in Beijing: "These actions violate international trade principles and will only harm both economies and global supply chains." Sources within the ministry suggest that retaliatory measures targeting American technology and agricultural imports are being actively considered. "We will take all necessary measures to protect our legitimate interests and those of our enterprises," the statement continued. European Union trade officials have also expressed concern, with EU Trade Commissioner saying the bloc is "deeply troubled by this escalation."',
          mediaEmbeds: [
            {
              id: '4',
              type: 'linkedin',
              url: '',
              caption: 'China\'s response to new US sanctions shows the need for multilateral dialogue. As someone who has worked on US-China trade issues for over a decade, I believe we need urgent diplomatic intervention to prevent further escalation. The business community on both sides wants predictability and stability.',
              authorName: 'Dr. Michael Chang, Trade Policy Institute',
              timestamp: '2h ago'
            }
          ]
        },
        {
          id: '4',
          timestamp: '2024-01-28T08:00:00Z',
          authorId: '1',
          authorName: 'Sarah Chen',
          authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c05b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
          type: 'update',
          content: 'DEVELOPING: Initial reports emerged early this morning of new US trade restrictions targeting Chinese semiconductor and artificial intelligence companies. The restrictions, which sources describe as "the most comprehensive since 2019," appear to focus on companies with alleged ties to military applications. Treasury Department officials confirmed a briefing would be held at 2 PM EST to provide full details. Industry analysts are already warning of significant disruptions to global tech supply chains. "This could affect everything from smartphones to automotive electronics," said technology sector analyst Robert Kim. The targeted companies reportedly include some of China\'s largest chip manufacturers and AI research firms.'
        }
      ]
    }
  };

  const currentNews: LiveNewsPost = newsData[newsSlug || ''] || newsData['us-china-trade-tensions-escalate'];
  const bannerAds = getAdsForPage('news-detail').filter(ad => ad.type === 'banner');

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (docHeight - winHeight)) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO Metadata
  useEffect(() => {
    document.title = `${currentNews.title} | Live News - Trade Treasury Payments`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && currentNews.updates.length > 0) {
      const latestUpdate = currentNews.updates[0].content;
      metaDescription.setAttribute('content', `${latestUpdate.substring(0, 150)}...`);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      const keywords = currentNews.authors.flatMap(author => author.expertise).join(', ');
      metaKeywords.setAttribute('content', keywords);
    }
  }, [currentNews]);

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const formatRelativeTime = (timestamp: string) => {
    const now = new Date();
    const updateTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now.getTime() - updateTime.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return updateTime.toLocaleDateString();
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40">
        <Progress 
          value={readingProgress} 
          className="h-1 rounded-none [&>div]:bg-red-500"
        />
      </div>

      {/* Live News Header */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">LIVE</span>
              </div>
              <span className="text-sm">
                Last updated: {formatTime(currentNews.lastUpdated)}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {currentNews.authors.length} reporters
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <LiveNewsHero news={currentNews} />

      {/* Main Content */}
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              
              {/* Breaking News Banner */}
              {currentNews.isLive && (
                <Card className="mb-6 border-red-200 bg-red-50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-red-600">
                      <AlertCircle className="w-5 h-5" />
                      <span className="font-semibold">This is a developing story.</span>
                      <span className="text-sm">We will continue to update this article as more information becomes available.</span>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Multi-Author Display - Removed and moved to sidebar */}

              {/* Engagement Bar - Simplified */}
              <Card className="mb-6">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-ttp-charcoal" />
                        <span className='text-ttp-charcoal'> Published {new Date(currentNews.published_at || '').toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-ttp-charcoal" />
                        <span className='text-ttp-charcoal'>Updated {formatRelativeTime(currentNews.lastUpdated)}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm">
                        <Bookmark className="w-4 h-4 mr-2" />
                        Save
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Banner Ad */}
              {bannerAds.length > 0 && (
                <div className="mb-6">
                  <AdBanner ad={bannerAds[0]} className="w-full" />
                </div>
              )}

              {/* News Timeline */}
              <NewsUpdateTimeline updates={currentNews.updates} />

              {/* Related Content */}
              <RelatedLiveNews currentNewsId={currentNews.id} />
              
              <ContentAds />
            </div>

            {/* Live News Sidebar */}
            <div className="lg:col-span-1">
              <LiveNewsSidebar currentNewsId={currentNews.id} authors={currentNews.authors} />
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default NewsStoryLive;