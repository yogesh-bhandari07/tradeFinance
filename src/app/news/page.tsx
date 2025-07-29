'use client';
import React, { useState } from 'react';
import { Card, CardContent } from '@/shared/components/card';
import { Badge } from '@/shared/components/badge';
import { Button } from '@/shared/components/button';
import { Input } from '@/shared/components/input';
import { 
    Search, 
  Eye, 
  TrendingUp,
  Zap,
  Users,
  ArrowRight,
  Bell
} from 'lucide-react';
import Link  from 'next/link';

interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  lastUpdated: string;
  isLive: boolean;
  isTrending: boolean;
  views: number;
  updateCount: number;
  authors: string[];
  image: string;
  readTime: string;
}

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showLiveOnly, setShowLiveOnly] = useState(false);

  // Mock news data
  const newsArticles: NewsArticle[] = [
    {
      id: '1',
      slug: 'us-china-trade-tensions-escalate',
      title: 'US-China Trade Tensions Escalate as New Sanctions Announced',
      summary: 'Latest developments in the ongoing trade dispute as both nations implement new restrictions affecting global supply chains and financial markets.',
      category: 'Trade Policy',
      publishedAt: '2024-01-28T08:00:00Z',
      lastUpdated: '2024-01-28T14:30:00Z',
      isLive: true,
      isTrending: true,
      views: 15420,
      updateCount: 6,
      authors: ['Sarah Chen', 'Marcus Thompson'],
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '8 min'
    },
    {
      id: '2',
      slug: 'ecb-emergency-rate-decision',
      title: 'ECB Considers Emergency Rate Decision Following Trade Disruption',
      summary: 'European Central Bank officials discussing unscheduled policy meeting as trade tensions affect eurozone economic outlook.',
      category: 'Central Banking',
      publishedAt: '2024-01-28T10:30:00Z',
      lastUpdated: '2024-01-28T13:45:00Z',
      isLive: true,
      isTrending: false,
      views: 8920,
      updateCount: 4,
      authors: ['Marco Delacroix', 'Anna Bernstein'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '6 min'
    },
    {
      id: '3',
      slug: 'supply-chain-disruptions-intensify',
      title: 'Global Supply Chain Disruptions Intensify Amid Sanctions',
      summary: 'Major shipping companies report significant delays and route changes as new trade restrictions complicate international logistics.',
      category: 'Supply Chain',
      publishedAt: '2024-01-28T09:00:00Z',
      lastUpdated: '2024-01-28T12:20:00Z',
      isLive: false,
      isTrending: true,
      views: 12340,
      updateCount: 3,
      authors: ['Jennifer Park', 'Ahmed Hassan'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '5 min'
    },
    {
      id: '4',
      slug: 'crypto-markets-volatility',
      title: 'Cryptocurrency Markets See Heavy Volatility Amid Trade Uncertainty',
      summary: 'Bitcoin and major altcoins experience significant price swings as investors react to escalating trade tensions and seek safe haven assets.',
      category: 'Cryptocurrency',
      publishedAt: '2024-01-28T07:15:00Z',
      lastUpdated: '2024-01-28T11:30:00Z',
      isLive: false,
      isTrending: false,
      views: 6750,
      updateCount: 2,
      authors: ['Ryan Mitchell'],
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '4 min'
    }
  ];

  const categories = ['all', 'Trade Policy', 'Central Banking', 'Supply Chain', 'Cryptocurrency', 'Financial Markets'];

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesLiveFilter = !showLiveOnly || article.isLive;
    
    return matchesSearch && matchesCategory && matchesLiveFilter;
  });

  const liveNewsCount = newsArticles.filter(article => article.isLive).length;

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
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold uppercase tracking-wide">Live News Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Breaking Trade Finance News
            </h1>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Stay updated with real-time coverage of global trade developments, policy changes, 
              and market movements affecting international commerce.
            </p>
            <div className="flex items-center justify-center gap-6 text-red-100">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>{liveNewsCount} live stories</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                <span>24/7 coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Expert analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search breaking news..."
                    value={searchTerm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md bg-background"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                
                <Button
                  variant={showLiveOnly ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowLiveOnly(!showLiveOnly)}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Live Only
                </Button>
                
                <Button variant="outline" size="sm">
                  <Bell className="w-4 h-4 mr-2" />
                  Alerts
                </Button>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="space-y-6">
            {filteredNews.map((article) => (
              <Card key={article.id} className={`group hover:shadow-lg transition-all duration-200 ${
                article.isLive ? 'border-red-200 bg-red-50/20' : ''
              }`}>
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-4 gap-6">
                    {/* Image */}
                    <div className="lg:col-span-1 relative">
                      <div className="aspect-video lg:aspect-square relative overflow-hidden">
                        <img 
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                        {article.isLive && (
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-red-600 text-white animate-pulse">
                              <Zap className="w-3 h-3 mr-1" />
                              LIVE
                            </Badge>
                          </div>
                        )}
                        {article.isTrending && (
                          <div className="absolute top-3 right-3">
                            <Badge className="bg-orange-600 text-white">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              Trending
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className='text-ttp-charcoal'>{article.category}</Badge>
                          <span className="text-sm text-muted-foreground text-ttp-charcoal">
                            {formatRelativeTime(article.lastUpdated)}
                          </span>
                          <span className="text-sm text-muted-foreground text-ttp-charcoal">
                            {article.readTime} read
                          </span>
                        </div>
                        {article.isLive && (
                          <Badge variant="secondary" className="text-xs text-ttp-charcoal">
                            {article.updateCount} updates
                          </Badge>
                        )}
                      </div>

                      <Link href={`/news/${article.slug}`}>
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 text-black">
                          {article.title}
                        </h2>
                      </Link>

                      <p className="text-muted-foreground mb-4 line-clamp-3 text-ttp-charcoal">
                        {article.summary}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1 text-ttp-charcoal">
                            <Users className="w-4 h-4" />
                            {article.authors.length > 1 
                              ? `${article.authors[0]} + ${article.authors.length - 1} more`
                              : article.authors[0]
                            }
                          </span>
                          <span className="flex items-center gap-1 text-ttp-charcoal">
                            <Eye className="w-4 h-4" />
                            {(article.views / 1000).toFixed(1)}k views
                          </span>
                        </div>
                        
                        <Link href={`/news/${article.slug}`}>
                          <Button variant="ghost" size="sm">
                            {article.isLive ? 'Follow Live' : 'Read More'}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Stories
            </Button>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default NewsPage;