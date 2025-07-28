'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/tabs';
import { EnhancedCompanyHero } from '@/app/companies/components/companyhero';
import { CompanyAwardsShowcase } from '@/app/companies/components/companyaward';
import { CompanyContentTabs } from '@/app/companies/components/companytab';
import { InteractiveTeamProfiles } from '@/app/companies/components/companyteam';
import { FeaturedContentSection } from '@/app/companies/components/featuredsection';

const CompanyPage = () => {
  const company = {
    id: 'mock-hsbc',
    name: 'HSBC',
    slug: 'hsbc',
    logo_url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    website_url: 'https://hsbc.com',
    description: 'Leading financial services provider offering innovative solutions in trade finance, payments, and digital banking. Serving millions of customers worldwide with cutting-edge technology and exceptional service.',
    company_type: 'financial_services',
    industry: 'Financial Services',
    headquarters: 'London, UK',
    founded: 1865,
    employee_count: '200,000+',
    verified: true,
    featured: true,
    sponsored: true,
    regions: ['Global', 'Asia-Pacific', 'Europe', 'Africa', 'Americas'],
    product_types: ['Trade Finance', 'Digital Payments', 'Cross-border Transfers', 'Treasury Management'],
    integration_support: ['API', 'SDK', 'Webhooks', 'White-label'],
    functions: ['Payment Processing', 'KYC/AML', 'Risk Management', 'Compliance'],
    usps: [
      'Industry-leading digital solutions',
      '24/7 global customer support',
      'Regulatory compliance expertise',
      'Advanced security protocols'
    ],
    tags: ['FinTech', 'Digital Banking', 'Trade Finance', 'Payments', 'Innovation'],
    sponsorship_level: 'premium',
    contact_email: 'info@hsbc.com',
    contact_phone: '+1-800-FINANCE',
    twitter_url: 'https://twitter.com/hsbc',
    linkedin_url: 'https://linkedin.com/company/hsbc',
    custom_branding: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  const content = [
    {
      id: 'mock-content-1',
      company_id: 'mock-company',
      content_type: 'video',
      title: 'Digital Transformation in Trade Finance',
      description: 'Exploring how AI and blockchain are revolutionizing international trade',
      url: 'https://example.com/video1',
      thumbnail_url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop',
      duration: '8:45',
      date: '2024-01-20T00:00:00Z',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      sort_order: 1,
      excerpt: undefined,
      issue_number: undefined
    },
    {
      id: 'mock-content-2',
      company_id: 'mock-company',
      content_type: 'article',
      title: 'The Future of Cross-Border Payments',
      description: 'Industry insights on emerging payment technologies and regulatory trends',
      url: 'https://example.com/article1',
      thumbnail_url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=200&fit=crop',
      duration: undefined,
      date: '2024-01-15T00:00:00Z',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      sort_order: 2,
      excerpt: 'Revolutionary changes in the payments landscape are reshaping how businesses handle international transactions.',
      issue_number: undefined
    }
  ];

  const events = [
    {
      id: 'mock-event-1',
      company_id: 'mock-company',
      event_type: 'conference',
      title: 'Global Trade Finance Summit 2024',
      description: 'Join industry leaders discussing the future of trade finance and digital innovation',
      date: '2024-03-15T00:00:00Z',
      location: 'London, UK',
      event_url: 'https://example.com/summit',
      registration_url: 'https://example.com/register',
      partner_name: 'Trade Finance Association',
      partner_logo_url: undefined,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      sort_order: 1
    }
  ];

  const personnel = [
    {
      id: 'mock-person-1',
      company_id: 'mock-company',
      name: 'Sarah Chen',
      title: 'Head of Digital Innovation',
      bio: 'Leading digital transformation initiatives with 15+ years experience in fintech and banking innovation.',
      avatar_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face',
      email: 'sarah.chen@company.com',
      linkedin_url: 'https://linkedin.com/in/sarachen',
      is_featured: true,
      sort_order: 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 'mock-person-2',
      company_id: 'mock-company',
      name: 'Michael Rodriguez',
      title: 'VP of Trade Finance',
      bio: 'Expert in international trade and cross-border payment solutions with global banking experience.',
      avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      email: 'michael.rodriguez@company.com',
      linkedin_url: 'https://linkedin.com/in/mrodriguez',
      is_featured: true,
      sort_order: 2,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ];

  const publications = [
    {
      id: 'mock-pub-1',
      company_id: 'mock-company',
      publication_type: 'whitepaper',
      title: 'Digital Trade Finance: 2024 Market Report',
      description: 'Comprehensive analysis of market trends and technology adoption in trade finance.',
      thumbnail_url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=150&h=200&fit=crop',
      pdf_url: 'https://example.com/report.pdf',
      download_url: 'https://example.com/download/report.pdf',
      published_date: '2024-01-10T00:00:00Z',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      sort_order: 1
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="container mx-auto px-4 text-center text-sm">
          🚀 <strong>Demo Mode:</strong> This is a preview of enhanced company features with sample data
        </div>
      </div>

      <main>
        <EnhancedCompanyHero company={company} />

        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="overview" className="space-y-8 bg-gray">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <FeaturedContentSection 
                content={content}
                events={events}
                publications={publications}
              />
              <CompanyAwardsShowcase company={company} />
            </TabsContent>

            <TabsContent value="content">
              <CompanyContentTabs 
                content={content}
                events={events}
                publications={publications}
                loading={false}
              />
            </TabsContent>

            <TabsContent value="team">
              <InteractiveTeamProfiles 
                personnel={personnel}
                loading={false}
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default CompanyPage;
