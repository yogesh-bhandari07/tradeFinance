import React from 'react';
import { Card, CardContent } from '@/shared/components/card';
import { Badge } from '@/shared/components/badge';
import { Award, Star, Trophy, Medal } from 'lucide-react';
import { Company } from '@/app/types/directorycompany';

interface AwardsShowcaseProps {
  companies: Company[];
}

export const AwardsShowcase: React.FC<AwardsShowcaseProps> = ({ companies }) => {
  // Mock award data - in real implementation this would come from the database
  const awardWinners = companies.filter(company => 
    company.verified && company.featured
  ).map(company => ({
    ...company,
    award: {
      year: '2024',
      category: getAwardCategory(company.type),
      title: `${getAwardCategory(company.type)} of the Year`,
      description: `Recognized for excellence in ${company.industry.toLowerCase()}`
    }
  })).slice(0, 6);

  function getAwardCategory(type: string): string {
    const categories: Record<string, string> = {
      'bank': 'Global Bank',
      'digital-bank': 'Digital Innovation',
      'fintech': 'Fintech Excellence',
      'mobile-money': 'Financial Inclusion',
      'infrastructure': 'Technology Innovation',
      'microfinance': 'Social Impact',
      'remittance': 'Cross-border Payments',
      'payment-processor': 'Payment Innovation'
    };
    return categories[type] || 'Industry Excellence';
  }

  function getAwardIcon(index: number) {
    const icons = [Trophy, Medal, Award, Star];
    const Icon = icons[index % icons.length];
    return <Icon className="w-5 h-5" />;
  }

  if (awardWinners.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Trophy className="w-8 h-8 text-ttp-orange" />
          <h2 className="text-3xl font-bold text-foreground text-ttp-charcoal">TTP Annual Awards Winners</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-ttp-charcoal">
          Celebrating excellence and innovation in trade finance, treasury, and payments technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awardWinners.map((company, index) => (
          <Card key={company.id} className="group hover:shadow-lg transition-all duration-300 border-ttp-orange/20 hover:border-ttp-orange/40">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  {company.logo ? (
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="h-12 w-12 object-contain rounded border border-border"
                    />
                  ) : (
                    <div className="h-12 w-12 bg-muted border border-border rounded flex items-center justify-center bg-ttp-charcoal">
                      {getAwardIcon(index)}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-ttp-orange transition-colors text-ttp-charcoal">
                      {company.name}
                    </h3>
                    <Badge variant="outline" className="bg-ttp-orange/10 text-ttp-orange border-ttp-orange/30">
                      {company.award.year} Winner
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-3 text-ttp-charcoal">
                    {getAwardIcon(index)}
                    <span className="text-sm font-medium text-ttp-orange">
                      {company.award.title}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 text-ttp-charcoal">
                    {company.award.description}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground text-ttp-charcoal">
                  <span>{company.headquarters}</span>
                  <span>•</span>
                  <span className="capitalize">{company.type.replace('-', ' ')}</span>
                </div>
                <button 
                  onClick={() => window.location.href = `/companies/${company.slug}`}
                  className="text-sm text-ttp-orange hover:text-ttp-orange/80 font-medium transition-colors"
                >
                  View Profile →
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};