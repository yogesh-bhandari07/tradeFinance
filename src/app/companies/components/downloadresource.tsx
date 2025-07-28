import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/card';
import { Button } from '@/shared/components/button';
import { Badge } from '@/shared/components/badge';
import { 
  Download, FileText, BookOpen, Presentation, 
  BarChart3, Shield, ExternalLink 
} from 'lucide-react';
import { Company } from '@/app/types/directorycompany';

interface DownloadableResourcesProps {
  companies: Company[];
}

interface Resource {
  id: string;
  title: string;
  type: 'case-study' | 'product-brochure' | 'whitepaper' | 'annual-report';
  company: Company;
  description: string;
  downloadUrl: string;
  fileSize: string;
  pages?: number;
}

export const DownloadableResources: React.FC<DownloadableResourcesProps> = ({ companies }) => {
  // Mock downloadable resources - in real implementation this would come from the database
  const resources: Resource[] = companies
    .filter(company => company.featured || company.sponsored)
    .map(company => [
      {
        id: `${company.id}-case-study`,
        title: `${company.name} Digital Transformation Case Study`,
        type: 'case-study' as const,
        company,
        description: `Learn how ${company.name} revolutionized their ${company.industry.toLowerCase()} operations`,
        downloadUrl: `/downloads/${company.slug}-case-study.pdf`,
        fileSize: '2.4 MB',
        pages: 12
      },
      {
        id: `${company.id}-brochure`,
        title: `${company.name} Product Portfolio`,
        type: 'product-brochure' as const,
        company,
        description: `Comprehensive overview of ${company.name}'s product offerings and capabilities`,
        downloadUrl: `/downloads/${company.slug}-brochure.pdf`,
        fileSize: '5.1 MB',
        pages: 24
      }
    ])
    .flat()
    .slice(0, 8);

  const getResourceIcon = (type: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const icons: Record<string, React.ComponentType<any>> = {
      'case-study': BookOpen,
      'product-brochure': Presentation,
      'whitepaper': FileText,
      'annual-report': BarChart3
    };
    return icons[type] || FileText;
  };

  const getResourceBadge = (type: string) => {
    const badges: Record<string, { label: string; color: string }> = {
      'case-study': { label: 'Case Study', color: 'bg-blue-100 text-blue-700 border-blue-200' },
      'product-brochure': { label: 'Product Brochure', color: 'bg-green-100 text-green-700 border-green-200' },
      'whitepaper': { label: 'Whitepaper', color: 'bg-purple-100 text-purple-700 border-purple-200' },
      'annual-report': { label: 'Annual Report', color: 'bg-orange-100 text-orange-700 border-orange-200' }
    };
    return badges[type] || badges['whitepaper'];
  };

  const handleDownload = (resource: Resource) => {
    // In real implementation, this would track downloads and handle the actual file download
    console.log(`Downloading ${resource.title}`);
    // window.open(resource.downloadUrl, '_blank');
  };

  if (resources.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2 text-ttp-charcoal">Downloadable Resources</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-ttp-charcoal">
          Access case studies, product brochures, and whitepapers from leading companies in the TTP ecosystem
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource) => {
          const Icon = getResourceIcon(resource.type);
          const badge = getResourceBadge(resource.type);
          
          return (
            <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300 hover:border-ttp-orange/40">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-ttp-orange/10 rounded-lg">
                      <Icon className="w-5 h-5 text-ttp-orange" />
                    </div>
                    <div className="flex-shrink-0">
                      {resource.company.logo ? (
                        <img 
                          src={resource.company.logo} 
                          alt={`${resource.company.name} logo`}
                          className="h-8 w-8 object-contain rounded"
                        />
                      ) : (
                        <div className="h-8 w-8 bg-muted rounded flex items-center justify-center">
                          <Shield className="w-4 h-4 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <Badge variant="outline" className={`text-xs w-fit ${badge.color}`}>
                  {badge.label}
                </Badge>
                
                <CardTitle className="text-sm line-clamp-2 group-hover:text-ttp-orange transition-colors">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-xs text-muted-foreground line-clamp-3 mb-4 text-ttp-charcoal">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 text-ttp-charcoal">
                  <span>{resource.fileSize}</span>
                  {resource.pages && <span>{resource.pages} pages</span>}
                </div>
                
                <div className="space-y-2">
                  <Button 
                    size="sm" 
                    className="w-full bg-ttp-orange hover:bg-ttp-orange/90 text-white"
                    onClick={() => handleDownload(resource)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-xs"
                    onClick={() => window.location.href = `/companies/${resource.company.slug}`}
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    View Company
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};