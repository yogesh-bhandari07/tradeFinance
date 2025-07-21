import { Company } from "@/app/types/directorycompany";

export const mockCompanies: Company[] = [
  {
    id: "1",
    name: "HSBC",
    slug: "hsbc",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    website: "https://hsbc.com",
    description:
      "Global banking and financial services organization serving more than 40 million customers worldwide with strong presence in Asia-Pacific emerging markets.",
    type: "bank",
    industry: "Global Banking",
    headquarters: "London, UK",
    regions: [
      "Global",
      "Asia-Pacific",
      "Europe",
      "Middle East",
      "North America",
      "Latin America",
    ],
    founded: 1865,
    employeeCount: "200,000+",
    featured: true,
    verified: true,
    sponsored: true,
    sponsorshipLevel: "premium",
    tags: ["trade-finance", "emerging-markets", "correspondent-banking"],
    productTypes: [
      "Letters of Credit",
      "Trade Finance",
      "Treasury Management",
      "Cross-border Payments",
    ],
    complianceTags: ["Basel IV", "PCI DSS", "SWIFT CSP"],
    functions: ["Trade Finance", "Treasury", "Payments"],
    mediaContent: [
      {
        id: "hsbc-1",
        type: "video",
        title: "Digital Trade Finance Revolution",
        url: "https://example.com/video1",
        description:
          "How HSBC is transforming trade finance with digital solutions",
        duration: "5:30",
      },
      {
        id: "hsbc-2",
        type: "podcast",
        title: "TTP Podcast: Future of Emerging Markets",
        url: "https://example.com/podcast1",
        description: "HSBC leadership discusses emerging market opportunities",
      },
    ],
    ttlContent: [
      {
        id: "hsbc-ttp-1",
        type: "article",
        title: "HSBC Launches New eBL Platform",
        url: "https://example.com/article1",
        issueNumber: "12",
        date: "2024-01-15",
        excerpt:
          "Revolutionary blockchain-based electronic bills of lading solution",
      },
    ],
    leadCapture: {
      enabled: true,
      ctaText: "Book a Demo",
      formFields: ["name", "email", "company", "message"],
    },
    badges: [
      {
        id: "hsbc-badge-1",
        text: "eBL Ready",
        type: "compliance",
        color: "green",
        icon: "check",
      },
      {
        id: "hsbc-badge-2",
        text: "TTP Certified",
        type: "certification",
        color: "orange",
        icon: "star",
      },
    ],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "Bank of America",
    slug: "bank-of-america",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    website: "https://bankofamerica.com",
    description:
      "Leading financial institution providing banking, investing, asset management and other financial services with growing emerging markets focus.",
    type: "bank",
    industry: "Banking",
    headquarters: "Charlotte, NC",
    regions: ["North America", "Latin America"],
    founded: 1904,
    employeeCount: "200,000+",
    featured: true,
    verified: true,
    sponsored: false,
    tags: ["corporate-banking", "investment-banking"],
    productTypes: ["Treasury Management", "Cash Management", "Trade Finance"],
    complianceTags: ["SOX", "PCI DSS"],
    functions: ["Treasury", "Risk Management"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "3",
    name: "M-Pesa (Safaricom)",
    slug: "m-pesa",
    logo: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    website: "https://safaricom.co.ke/mpesa",
    description:
      "Revolutionary mobile money transfer service that transformed financial inclusion across Africa and emerging markets.",
    type: "mobile-money",
    industry: "Mobile Payments",
    headquarters: "Nairobi, Kenya",
    regions: ["Africa"],
    founded: 2007,
    employeeCount: "5,000-10,000",
    featured: true,
    verified: true,
    sponsored: true,
    sponsorshipLevel: "featured",
    tags: ["financial-inclusion", "mobile-payments", "emerging-markets"],
    productTypes: ["Mobile Money", "Cross-border Payments", "Digital Banking"],
    complianceTags: ["PCI DSS", "AML/KYC"],
    functions: ["Payments", "Financial Inclusion"],
    mediaContent: [
      {
        id: "mpesa-1",
        type: "interview",
        title: "TTP Interview: M-Pesa Success Story",
        url: "https://example.com/interview1",
        description: "How M-Pesa revolutionized mobile payments in Africa",
      },
    ],
    leadCapture: {
      enabled: true,
      ctaText: "Learn More",
      formFields: ["name", "email", "company"],
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "4",
    name: "Ant Financial",
    slug: "ant-financial",
    logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    website: "https://antgroup.com",
    description:
      "Leading fintech company providing digital payment and financial services across Asia-Pacific emerging markets.",
    type: "fintech",
    industry: "Digital Payments",
    headquarters: "Hangzhou, China",
    regions: ["Asia-Pacific"],
    founded: 2014,
    employeeCount: "100,000+",
    featured: true,
    verified: true,
    sponsored: false,
    tags: ["digital-payments", "super-app", "emerging-markets"],
    productTypes: ["Digital Payments", "API Banking", "Digital Banking"],
    complianceTags: ["PCI DSS", "ISO 27001"],
    functions: ["Payments", "Technology"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "5",
    name: "Swift",
    slug: "swift",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    website: "https://swift.com",
    description:
      "Global provider of secure financial messaging services connecting more than 11,000 institutions worldwide.",
    type: "infrastructure",
    industry: "Financial Infrastructure",
    headquarters: "Brussels, Belgium",
    regions: ["Global"],
    founded: 1973,
    employeeCount: "5,000-10,000",
    featured: true,
    verified: true,
    sponsored: false,
    tags: ["messaging", "correspondent-banking", "cross-border"],
    productTypes: ["Messaging", "Cross-border Payments", "Compliance Tools"],
    complianceTags: ["SWIFT CSP", "ISO 27001"],
    functions: ["Payments", "Compliance", "Operations"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "6",
    name: "Grameen Bank",
    slug: "grameen-bank",
    logo: "https://images.unsplash.com/photo-1559526324-593bc054d0ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    website: "https://grameenbank.org.bd",
    description:
      "Pioneer in microfinance providing small loans to entrepreneurs in rural Bangladesh without collateral.",
    type: "microfinance",
    industry: "Microfinance",
    headquarters: "Dhaka, Bangladesh",
    regions: ["Asia-Pacific"],
    founded: 1983,
    employeeCount: "20,000+",
    featured: false,
    verified: true,
    sponsored: false,
    tags: ["microfinance", "financial-inclusion", "rural-banking"],
    productTypes: ["Microfinance", "Rural Banking"],
    complianceTags: ["AML/KYC"],
    functions: ["Financial Inclusion"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "7",
    name: "Remitly",
    slug: "remitly",
    logo: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    website: "https://remitly.com",
    description:
      "Digital remittance platform connecting migrants to their families across emerging markets.",
    type: "remittance",
    industry: "Cross-border Payments",
    headquarters: "Seattle, WA",
    regions: ["Global", "Latin America", "Asia-Pacific", "Africa"],
    founded: 2011,
    employeeCount: "1,000-5,000",
    featured: false,
    verified: true,
    sponsored: false,
    tags: ["remittances", "cross-border", "emerging-markets"],
    productTypes: ["Remittances", "Cross-border Payments"],
    complianceTags: ["AML/KYC", "PCI DSS"],
    functions: ["Payments"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "8",
    name: "Nubank",
    slug: "nubank",
    logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    website: "https://nubank.com.br",
    description:
      "Latin America's largest digital bank serving millions of customers across Brazil, Mexico, and Colombia.",
    type: "digital-bank",
    industry: "Digital Banking",
    headquarters: "São Paulo, Brazil",
    regions: ["Latin America"],
    founded: 2013,
    employeeCount: "5,000+",
    featured: true,
    verified: true,
    sponsored: false,
    tags: ["digital-banking", "financial-inclusion", "credit-cards"],
    productTypes: ["Digital Banking", "Credit Cards", "Payments"],
    complianceTags: ["PCI DSS", "AML/KYC"],
    functions: ["Banking", "Payments"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
];

export const companyRegions = [
  "Global",
  "Asia-Pacific",
  "Europe",
  "North America",
  "Latin America",
  "Africa",
  "Middle East",
];

export const getCompanies = (filter?: any) => {
  let filtered = [...mockCompanies];

  if (filter?.type) {
    filtered = filtered.filter((company) => company.type === filter.type);
  }

  if (filter?.region) {
    filtered = filtered.filter((company) =>
      company.regions.includes(filter.region)
    );
  }

  if (filter?.featured !== undefined) {
    filtered = filtered.filter(
      (company) => company.featured === filter.featured
    );
  }

  if (filter?.verified !== undefined) {
    filtered = filtered.filter(
      (company) => company.verified === filter.verified
    );
  }

  if (filter?.search) {
    const search = filter.search.toLowerCase();
    filtered = filtered.filter(
      (company) =>
        company.name.toLowerCase().includes(search) ||
        company.description?.toLowerCase().includes(search) ||
        company.industry.toLowerCase().includes(search) ||
        company.tags?.some((tag) => tag.toLowerCase().includes(search))
    );
  }

  return filtered;
};

export const getCompanyBySlug = (slug: string) => {
  return mockCompanies.find((company) => company.slug === slug);
};

export const getCompanyById = (id: string) => {
  return mockCompanies.find((company) => company.id === id);
};
