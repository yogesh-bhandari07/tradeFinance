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
