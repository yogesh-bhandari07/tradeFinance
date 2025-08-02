export interface UserPreferences {
  id: string;
  userId: string;
  industries: string[];
  regions: string[];
  expertiseLevel: "beginner" | "intermediate" | "advanced" | "expert";
  contentAreas: string[];
  preferredContentTypes: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PersonalizedContent {
  id: string;
  title: string;
  type: "article" | "video" | "podcast" | "webinar" | "report" | "guide";
  category: string;
  tags: string[];
  author: string;
  authorImage?: string;
  contentImage?: string;
  publishDate: Date;
  readTime?: number;
  duration?: number;
  difficulty: "beginner" | "intermediate" | "advanced" | "expert";
  region: string;
  industry: string;
  href: string;
  description: string;
  relevanceScore?: number;
  isBookmarked: boolean;
  isRead: boolean;
}

export interface FilterOptions {
  industries: string[];
  regions: string[];
  expertiseLevels: ("beginner" | "intermediate" | "advanced" | "expert")[];
  contentAreas: string[];
  contentTypes: string[];
}
