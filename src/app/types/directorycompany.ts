
export interface Company {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  website?: string;
  description?: string;
  type: CompanyType;
  industry: string;
  headquarters?: string;
  regions: string[];
  founded?: number;
  employeeCount?: string;
  featured: boolean;
  verified: boolean;
  sponsored: boolean;
  sponsorshipLevel?: 'premium' | 'featured' | 'standard';
  tags?: string[];
  integrationSupport?: string[];
  productTypes?: string[];
  functions?: string[];
  content?: ContentItem[];
  events?: EventContent[];
  authors?: Author[];
  leadCapture?: LeadCaptureConfig;
  badges?: CompanyBadge[];
  complianceTags?: string[];
  ttlContent?: TTPContent[];
  mediaContent?: MediaContent[];
  createdAt: string;
  updatedAt: string;
}
export interface TTPContent {
  id: string;
  type: "article" | "interview" | "award" | "feature";
  title: string;
  url: string;
  issueNumber?: string;
  date: string;
  excerpt?: string;
}
export interface EventContent {
  id: string;
  type: 'conference' | 'webinar' | 'roundtable' | 'summit';
  title: string;
  date: string;
  location?: string;
  description?: string;
  partnerLogo?: string;
  partnerName?: string;
  registrationUrl?: string;
  eventUrl?: string;
}
export interface Author {
  id: string;
  name: string;
  title?: string;
  avatar?: string;
  bio?: string;
  linkedinUrl?: string;
  email?: string;
}
export interface MediaContent {
  id: string;
  type: "video" | "podcast" | "webinar" | "interview";
  title: string;
  url: string;
  thumbnail?: string;
  duration?: string;
  description?: string;
}

export interface ContentItem {
  id: string;
  type: 'video' | 'podcast' | 'webinar' | 'interview' | 'article' | 'award' | 'feature';
  title: string;
  url: string;
  thumbnail?: string;
  duration?: string;
  description?: string;
  issueNumber?: string;
  date?: string;
  excerpt?: string;
}
export interface TTpContent {
  id: string;
  type: "article" | "interview" | "award" | "feature";
  title: string;
  url: string;
  issueNumber?: string;
  date: string;
  excerpt?: string;
}

export interface LeadCaptureConfig {
  enabled: boolean;
  ctaText: string;
  formFields: string[];
  webhookUrl?: string;
}

export interface CompanyBadge {
  id: string;
  text: string;
  type: "compliance" | "certification" | "partnership" | "editorial";
  color: string;
  icon?: string;
}

export type CompanyType =
  | "bank"
  | "fintech"
  | "consultant"
  | "technology"
  | "payment-processor"
  | "trade-finance"
  | "regulatory"
  | "advisory"
  | "infrastructure"
  | "microfinance"
  | "digital-bank"
  | "crypto-exchange"
  | "remittance"
  | "mobile-money"
  | "insurtech"
  | "regtech"
  | "other";

export interface CompanyFilter {
  type?: CompanyType;
  industry?: string;
  region?: string;
  featured?: boolean;
  verified?: boolean;
  sponsored?: boolean;
  productType?: string;
  complianceTag?: string;
  integrationSupport?: string;
  function?: string;
  ttlContent?: string;
  search?: string;
}

export interface CompanyDisplayProps {
  company: Company;
  variant: "logo" | "text" | "card" | "sponsored" | "comparison";
  size?: "sm" | "md" | "lg";
  showDescription?: boolean;
  showMedia?: boolean;
  showLeadCapture?: boolean;
}

export interface CompanyComparison {
  companies: Company[];
  attributes: string[];
}
