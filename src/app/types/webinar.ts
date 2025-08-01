export interface ContentItem {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  tags: string[];
  companyId?: string;
  companyName?: string;
}

export interface Podcast extends ContentItem {
  host: string;
  guest?: string;
  duration: string;
  episode: number;
  season: number;
  downloads: string;
  category: "deep-dive" | "news" | "interview" | "educational";
  image: string;
  audioUrl: string;
}

export interface Webinar extends ContentItem {
  presenter: string;
  duration: string;
  date: string;
  time: string;
  attendees: string;
  status: "upcoming" | "completed" | "live";
  image: string;
  registrationUrl?: string;
  recordingUrl?: string;
}

export interface Video extends ContentItem {
  presenter: string;
  duration: string;
  views: string;
  likes: string;
  category: "education" | "panel" | "interview" | "case-study";
  image: string;
  videoUrl: string;
}

export interface Author extends ContentItem {
  name: string;
  position: string;
  bio: string;
  avatar: string;
  expertise: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  articleCount: number;
}

export interface Conference extends ContentItem {
  location: string;
  date: string;
  attendees: string;
  status: "upcoming" | "completed" | "ongoing";
  image: string;
  registrationUrl?: string;
  speakers: string[];
}

export interface Edition extends ContentItem {
  issueNumber: number;
  volume?: number;
  coverImage: string;
  featured: boolean;
  downloadUrl: string;
  previewUrl?: string;
  pageCount: number;
  category: "monthly" | "special" | "annual";
  articles: string[];
}

export const mockPodcasts: Podcast[] = [
  {
    id: "1",
    title: "HSBC Digital Trade Platform: Revolutionizing Global Commerce",
    description:
      "Deep dive into HSBC's latest digital trade finance solutions and their impact on emerging markets.",
    host: "Sarah Chen",
    guest: "Mark Thompson, Head of Digital Trade at HSBC",
    duration: "42:15",
    publishDate: "2024-01-25",
    episode: 28,
    season: 2,
    downloads: "12.5k",
    category: "deep-dive",
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Digital Transformation", "Trade Finance", "Banking"],
    audioUrl: "#",
    companyId: "1",
    companyName: "HSBC",
  },
  {
    id: "2",
    title: "Weekly Roundup: Global Payment Trends",
    description:
      "A quick overview of the week's most important developments in global payments, CBDCs, and regulatory updates.",
    host: "Emma Rodriguez",
    duration: "18:32",
    publishDate: "2024-01-22",
    episode: 156,
    season: 3,
    downloads: "8.9k",
    category: "news",
    image:
      "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Weekly Update", "Global Payments", "CBDC"],
    audioUrl: "#",
  },
  {
    id: "3",
    title: "Weekly Roundup: Global Payment Trends",
    description:
      "A quick overview of the week's most important developments in global payments, CBDCs, and regulatory updates.",
    host: "Emma Rodriguez",
    duration: "18:32",
    publishDate: "2024-01-22",
    episode: 156,
    season: 3,
    downloads: "8.9k",
    category: "news",
    image:
      "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Weekly Update", "Global Payments", "CBDC"],
    audioUrl: "#",
  },
  {
    id: "4",
    title: "Weekly Roundup: Global Payment Trends",
    description:
      "A quick overview of the week's most important developments in global payments, CBDCs, and regulatory updates.",
    host: "Emma Rodriguez",
    duration: "18:32",
    publishDate: "2024-01-22",
    episode: 156,
    season: 3,
    downloads: "8.9k",
    category: "news",
    image:
      "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Weekly Update", "Global Payments", "CBDC"],
    audioUrl: "#",
  },
  {
    id: "5",
    title: "Weekly Roundup: Global Payment Trends",
    description:
      "A quick overview of the week's most important developments in global payments, CBDCs, and regulatory updates.",
    host: "Emma Rodriguez",
    duration: "18:32",
    publishDate: "2024-01-22",
    episode: 156,
    season: 3,
    downloads: "8.9k",
    category: "news",
    image:
      "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Weekly Update", "Global Payments", "CBDC"],
    audioUrl: "#",
  },
  {
    id: "6",
    title: "Weekly Roundup: Global Payment Trends",
    description:
      "A quick overview of the week's most important developments in global payments, CBDCs, and regulatory updates.",
    host: "Emma Rodriguez",
    duration: "18:32",
    publishDate: "2024-01-22",
    episode: 156,
    season: 3,
    downloads: "8.9k",
    category: "news",
    image:
      "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Weekly Update", "Global Payments", "CBDC"],
    audioUrl: "#",
  },
  {
    id: "7",
    title: "Weekly Roundup: Global Payment Trends",
    description:
      "A quick overview of the week's most important developments in global payments, CBDCs, and regulatory updates.",
    host: "Emma Rodriguez",
    duration: "18:32",
    publishDate: "2024-01-22",
    episode: 156,
    season: 3,
    downloads: "8.9k",
    category: "news",
    image:
      "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Weekly Update", "Global Payments", "CBDC"],
    audioUrl: "#",
  },
  {
    id: "8",
    title: "Weekly Roundup: Global Payment Trends",
    description:
      "A quick overview of the week's most important developments in global payments, CBDCs, and regulatory updates.",
    host: "Emma Rodriguez",
    duration: "18:32",
    publishDate: "2024-01-22",
    episode: 156,
    season: 3,
    downloads: "8.9k",
    category: "news",
    image:
      "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Weekly Update", "Global Payments", "CBDC"],
    audioUrl: "#",
  },
];

export const mockWebinars: Webinar[] = [
  {
    id: "1",
    title: "HSBC Treasury Solutions: Optimizing Cash Management",
    description:
      "Expert panel discussion on HSBC's latest treasury management solutions for multinational corporations.",
    presenter: "Dr. Sarah Chen & HSBC Panel",
    duration: "45 min",
    date: "2024-02-15",
    time: "14:00 GMT",
    attendees: "1,250",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Treasury Management", "Cash Management", "Banking"],
    registrationUrl: "#",
    publishDate: "2024-02-15",
    companyId: "1",
    companyName: "HSBC",
  },
  {
    id: "2",
    title: "CBDC Implementation: Global Perspectives and Challenges",
    description:
      "Central bank digital currency developments across major economies and their impact on international payments.",
    presenter: "Michael Rodriguez",
    duration: "60 min",
    date: "2024-01-28",
    time: "15:00 GMT",
    attendees: "890",
    status: "completed",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd8a72f9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["CBDC", "Central Banking", "Payments"],
    recordingUrl: "#",
    publishDate: "2024-01-28",
  },
];

export const mockVideos: Video[] = [
  {
    id: "1",
    title: "HSBC Trade Finance Evolution: From Paper to Digital",
    description:
      "A comprehensive look at how HSBC has transformed trade finance operations over the past decade.",
    presenter: "Dr. Sarah Chen",
    duration: "18:42",
    publishDate: "2024-01-20",
    views: "12.5k",
    likes: "485",
    category: "education",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Trade Finance", "Digital Transformation", "Documentation"],
    videoUrl: "#",
    companyId: "1",
    companyName: "HSBC",
  },
  {
    id: "2",
    title: "Expert Panel: CBDC Implementation Challenges",
    description:
      "Leading central bank officials and fintech experts discuss the practical challenges of implementing central bank digital currencies.",
    presenter: "Panel Discussion",
    duration: "45:15",
    publishDate: "2024-01-15",
    views: "8.9k",
    likes: "324",
    category: "panel",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["CBDC", "Central Banking", "Implementation"],
    videoUrl: "#",
  },
];

export const mockAuthors: Author[] = [
  {
    id: "1",
    name: "Mark Thompson",
    title: "HSBC Digital Trade Expert Insights",
    description:
      "Thought leadership from HSBC's Head of Digital Trade on emerging market opportunities.",
    position: "Head of Digital Trade",
    bio: "Mark Thompson leads HSBC's digital trade finance initiatives across emerging markets with over 15 years of experience in international banking.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    expertise: [
      "Digital Trade Finance",
      "Emerging Markets",
      "Trade Technology",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/markthompson",
      email: "mark.thompson@hsbc.com",
    },
    articleCount: 12,
    publishDate: "2024-01-01",
    tags: ["Trade Finance", "Digital Banking", "Emerging Markets"],
    companyId: "1",
    companyName: "HSBC",
  },
  {
    id: "2",
    name: "Sarah Chen",
    title: "Senior Trade Finance Director Insights",
    description:
      "Expert analysis and insights on digital transformation in trade finance.",
    position: "Senior Trade Finance Director",
    bio: "Sarah Chen is a seasoned trade finance professional with over 15 years of experience in international banking. She specializes in digital transformation of trade finance operations and has led several major initiatives in blockchain adoption for letters of credit.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b593?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    expertise: [
      "Trade Finance",
      "Digital Transformation",
      "Blockchain",
      "Letters of Credit",
      "Supply Chain Finance",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen",
    },
    articleCount: 23,
    publishDate: "2024-01-01",
    tags: ["Digital Transformation", "Trade Finance", "Blockchain"],
  },
];

export const mockConferences: Conference[] = [
  {
    id: "1",
    title: "HSBC Trade Finance Summit 2024",
    description:
      "Annual conference hosted by HSBC focusing on the future of trade finance and emerging market opportunities.",
    location: "London, UK",
    date: "2024-03-15",
    attendees: "500+",
    status: "upcoming",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    registrationUrl: "#",
    speakers: ["Mark Thompson (HSBC)", "Sarah Chen", "Dr. Michael Rodriguez"],
    publishDate: "2024-03-15",
    tags: ["Trade Finance", "Conference", "Banking"],
    companyId: "1",
    companyName: "HSBC",
  },
];

export const mockEditions: Edition[] = [
  {
    id: "ttp-magazine-q1-2024",
    title: "Trade Treasury & Payments Q1 2024",
    description:
      "Comprehensive quarterly analysis of trade finance trends, digital transformation, and market insights from leading industry experts.",
    issueNumber: 1,
    publishDate: "2024-03-15",
    coverImage: "https://picsum.photos/200/300/?blur",
    featured: true,
    downloadUrl: "#",
    previewUrl: "#",
    pageCount: 84,
    category: "monthly",
    tags: [
      "Trade Finance",
      "Digital Transformation",
      "Risk Management",
      "Liquidity",
    ],
    articles: [
      "The Future of Digital Trade Finance",
      "Central Bank Digital Currencies: A New Era",
      "ESG in Supply Chain Finance",
      "Cross-border Payment Innovations",
    ],
    companyName: "",
  },
  {
    id: "trade-credit-insurance-guide",
    title: "Trade Credit Insurance Guide",
    description:
      "Comprehensive guide covering credit insurance fundamentals, risk assessment, and mitigation strategies for trade finance professionals.",
    issueNumber: 1,
    publishDate: "2024-02-01",
    coverImage: "https://picsum.photos/200/300/?blur",
    featured: true,
    downloadUrl: "#",
    previewUrl: "#",
    pageCount: 156,
    category: "annual",
    tags: ["Credit Insurance", "Risk Management", "Trade Finance", "Insurance"],
    articles: [
      "Understanding Credit Insurance",
      "Risk Assessment Frameworks",
      "Claims Management",
      "Market Trends and Outlook",
    ],
    companyName: "ICISA",
  },
  {
    id: "trade-finance-guide-2024",
    title: "Trade Finance Guide 2024",
    description:
      "Essential guide for trade finance professionals covering fundamental concepts, instruments, and best practices.",
    issueNumber: 2,
    publishDate: "2024-01-15",
    coverImage: "https://picsum.photos/200/300/?blur",
    featured: false,
    downloadUrl: "#",
    previewUrl: "#",
    pageCount: 124,
    category: "annual",
    tags: [
      "Trade Finance",
      "Fundamentals",
      "Letters of Credit",
      "Documentary Collections",
    ],
    articles: [
      "Trade Finance Fundamentals",
      "Letters of Credit Explained",
      "Documentary Collections",
      "Trade Finance Instruments",
    ],
    companyName: "ITFA",
  },
  {
    id: "history-of-tariffs",
    title: "History of Tariffs",
    description:
      "In-depth analysis of tariff evolution and its impact on global trade from historical perspectives to modern applications.",
    issueNumber: 3,
    publishDate: "2024-01-01",
    coverImage: "https://picsum.photos/200/300/?blur",
    featured: false,
    downloadUrl: "#",
    previewUrl: "#",
    pageCount: 92,
    category: "special",
    tags: ["Tariffs", "Trade Policy", "Economic History", "Global Trade"],
    articles: [
      "Ancient Trade Barriers",
      "Modern Tariff Systems",
      "Economic Impact Analysis",
      "Future of Trade Policy",
    ],
  },
  {
    id: "data-inequality-report",
    title: "Data Inequality and the Global Economic Divide",
    description:
      "Critical analysis of how digital transformation in trade is creating new forms of inequality and economic divides.",
    issueNumber: 4,
    publishDate: "2023-12-15",
    coverImage: "https://picsum.photos/200/300/?blur",
    featured: true,
    downloadUrl: "#",
    previewUrl: "#",
    pageCount: 76,
    category: "special",
    tags: [
      "Digital Divide",
      "Trade Digitisation",
      "Economic Inequality",
      "Technology",
    ],
    articles: [
      "Digital Trade Barriers",
      "Technology Access Gaps",
      "Economic Impact Assessment",
      "Policy Recommendations",
    ],
  },
  {
    id: "trade-digitisation-interoperability",
    title: "Trade Digitisation's Bumpy Road to Interoperability",
    description:
      "Comprehensive roundtable discussion on interoperability challenges in trade digitisation and potential solutions.",
    issueNumber: 1,
    publishDate: "2023-11-30",
    coverImage: "https://picsum.photos/200/300/?blur",
    featured: false,
    downloadUrl: "#",
    previewUrl: "#",
    pageCount: 64,
    category: "special",
    tags: [
      "Digital Standards",
      "Interoperability",
      "Trade Technology",
      "Industry Roundtable",
    ],
    articles: [
      "Current Interoperability Challenges",
      "Industry Expert Perspectives",
      "Technology Solutions",
      "Future Roadmap",
    ],
    companyName: "ICC Digital Standards Initiative",
  },
  {
    id: "new-crossroads-report",
    title: "New Crossroads: How Connector Nations are Rewriting Trade Routes",
    description:
      "Analysis of how connector nations are reshaping global trade routes and creating new economic opportunities.",
    issueNumber: 2,
    publishDate: "2023-10-15",
    coverImage: "https://picsum.photos/200/300/?blur",
    featured: false,
    downloadUrl: "#",
    previewUrl: "#",
    pageCount: 88,
    category: "special",
    tags: [
      "Trade Routes",
      "Connector Nations",
      "Economic Geography",
      "Strategic Analysis",
    ],
    articles: [
      "Emerging Trade Corridors",
      "Connector Nation Strategies",
      "Economic Impact Analysis",
      "Future Trade Patterns",
    ],
  },
];
export const getAllContent = () => ({
  podcasts: mockPodcasts,
  webinars: mockWebinars,
  videos: mockVideos,
  authors: mockAuthors,
  conferences: mockConferences,
  editions: mockEditions,
});

export const getAllContentPodcast = (): AllContent => ({
  podcasts: mockPodcasts,
 
});

interface AllContent {
  podcasts: Podcast[];
}


export const getEditionBySlug = (slug: string): Edition | null => {
  console.log("Looking for edition with slug:", slug);

  // First try to find by exact ID match
  let edition = mockEditions.find((edition) => edition.id === slug);

  // If not found, try to find by generated slug
  if (!edition) {
    edition = mockEditions.find(
      (edition) => createSlug(edition.title) === slug
    );
  }

  console.log("Found edition:", edition);
  return edition || null;
};

export const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export const getPodcastBySlug = (slug: string): Podcast | null => {
  return (
    mockPodcasts.find((podcast) => createSlug(podcast.title) === slug) || null
  );
};

export const getVideoBySlug = (slug: string): Video | null => {
  return mockVideos.find((video) => createSlug(video.title) === slug) || null;
};