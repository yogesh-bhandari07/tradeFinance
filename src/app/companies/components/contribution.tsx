import React, { useState } from 'react';
import { Card, CardContent } from '@/shared/components/card';
import { Badge } from '@/shared/components/badge';
import { Button } from '@/shared/components/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/tabs';
import { 
  Mic, Video, FileText, Calendar, 
   ExternalLink 
} from 'lucide-react';
import { Company } from '@/app/types/directorycompany';

interface ContentContributorsSectionProps {
  companies: Company[];
}

export const ContentContributorsSection: React.FC<ContentContributorsSectionProps> = ({ companies }) => {
  const [activeTab, setActiveTab] = useState('podcasts');

  // Filter companies that have content
  const contentContributors = companies.filter(company => 
    company.content && company.content.length > 0
  );

  const getContentByType = (type: string) => {
    return contentContributors.map(company => ({
      company,
      content: company.content?.filter(item => item.type === type) || []
    })).filter(item => item.content.length > 0);
  };

  const getContentIcon = (type: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const icons: Record<string, React.ComponentType<any>> = {
      'podcast': Mic,
      'video': Video,
      'article': FileText,
      'webinar': Calendar,
      'interview': Mic
    };
    return icons[type] || FileText;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ContentCard = ({ company, contentItem }: { company: Company, contentItem: any }) => {
    const Icon = getContentIcon(contentItem.type);
    
    return (
      <Card className="group hover:shadow-md transition-all duration-200 hover:border-ttp-orange/30">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              {company.logo ? (
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="h-10 w-10 object-contain rounded border border-border"
                />
              ) : (
                <div className="h-10 w-10 bg-muted border border-border rounded flex items-center justify-center">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-xs bg-ttp-orange/10 text-ttp-orange">
                  <Icon className="w-3 h-3 mr-1" />
                  {contentItem.type}
                </Badge>
                {contentItem.duration && (
                  <Badge variant="outline" className="text-xs">
                    {contentItem.duration}
                  </Badge>
                )}
              </div>
              
              <h4 className="font-medium text-foreground group-hover:text-ttp-orange transition-colors line-clamp-2 mb-2">
                {contentItem.title}
              </h4>
              
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {contentItem.description || contentItem.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium">{company.name}</span>
                  {contentItem.date && (
                    <>
                      <span>•</span>
                      <span>{new Date(contentItem.date).toLocaleDateString()}</span>
                    </>
                  )}
                  {contentItem.issueNumber && (
                    <>
                      <span>•</span>
                      <span>Issue #{contentItem.issueNumber}</span>
                    </>
                  )}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => window.open(contentItem.url, '_blank')}
                  className="text-xs"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  View
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  if (contentContributors.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Content Contributors</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Companies actively contributing to TTP  content ecosystem through podcasts, videos, and publications
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="podcasts" className="flex items-center gap-2">
            <Mic className="w-4 h-4" />
            Podcasts
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center gap-2">
            <Video className="w-4 h-4" />
            Videos
          </TabsTrigger>
          <TabsTrigger value="articles" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Articles
          </TabsTrigger>
          <TabsTrigger value="interviews" className="flex items-center gap-2">
            <Mic className="w-4 h-4" />
            Interviews
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="podcasts" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getContentByType('podcast').map(({ company, content }) => 
              content.map(item => (
                <ContentCard key={`${company.id}-${item.id}`} company={company} contentItem={item} />
              ))
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="videos" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getContentByType('video').map(({ company, content }) => 
              content.map(item => (
                <ContentCard key={`${company.id}-${item.id}`} company={company} contentItem={item} />
              ))
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="articles" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getContentByType('article').map(({ company, content }) => 
              content.map(item => (
                <ContentCard key={`${company.id}-${item.id}`} company={company} contentItem={item} />
              ))
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="interviews" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getContentByType('interview').map(({ company, content }) => 
              content.map(item => (
                <ContentCard key={`${company.id}-${item.id}`} company={company} contentItem={item} />
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};