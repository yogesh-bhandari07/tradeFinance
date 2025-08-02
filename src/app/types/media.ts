import {
  Video,
  Headphones,
  Download,
  Radio,
  Tv,
  FileText,
} from "lucide-react";

export const mediaContent = [
  {
    id: "1",
    type: "video",
    title: "Digital Trade Finance Revolution",
    author: "Dr. Sarah Kim",
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b372?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    company: "Deutsche Bank",
    thumbnail: "/lovable-uploads/3f360997-7e62-4e9a-a6b8-70c1450af2a5.png",
    duration: "25:42",
    views: "18.5k",
    category: "Trade Finance",
    featured: true,
  },
  {
    id: "2",
    type: "podcast",
    title: "Trade Talks: Fed Digital Dollar",
    author: "James Mitchell",
    authorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    company: "Federal Reserve",
    thumbnail: "/lovable-uploads/a3d9e715-baa8-4e8b-86db-3930417e6d02.png",
    duration: "52:18",
    views: "28k",
    category: "CBDC",
    featured: false,
  },
  {
    id: "3",
    type: "webinar",
    title: "AI in Risk Management",
    author: "Maria Santos",
    authorAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    company: "Goldman Sachs",
    thumbnail: "/lovable-uploads/76a51d2e-550a-4613-8be1-3e62d3fbd019.png",
    duration: "45:30",
    views: "12.3k",
    category: "Technology",
    featured: false,
  },
  {
    id: "4",
    type: "article",
    title: "Letters of Credit: Court Ruling Analysis",
    author: "Deepesh Patel",
    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    company: "TTP Editorial",
    thumbnail: "/lovable-uploads/f9970701-3c17-4d9b-9f98-f9843217bbdc.png",
    duration: "8 min read",
    views: "42k",
    category: "Legal",
    featured: true,
  },
  {
    id: "5",
    type: "livestream",
    title: "Global Trade Summit LIVE",
    author: "TTP Editorial",
    authorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    company: "ICC Banking",
    thumbnail: "/lovable-uploads/2969e421-527b-4994-b540-85f275696008.png",
    duration: "LIVE",
    views: "5.2k",
    category: "Conference",
    featured: true,
  },
  {
    id: "6",
    type: "report",
    title: "Treasury Operations Guide 2025",
    author: "Eleanor Hill",
    authorAvatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    company: "Treasury Alliance",
    thumbnail: "/lovable-uploads/9c98d1b2-d787-47f5-b398-749a4ba861f7.png",
    duration: "85 pages",
    views: "15.7k",
    category: "Research",
    featured: false,
  },
];

export const getTypeIcon = (type: string) => {
  switch (type) {
    case "video":
      return Video;
    case "podcast":
      return Headphones;
    case "webinar":
      return Tv;
    case "livestream":
      return Radio;
    case "article":
      return FileText;
    case "report":
      return Download;
    default:
      return Video;
  }
};

export const getTypeColor = (type: string) => {
  switch (type) {
    case "video":
      return "bg-ttp-orange text-white";
    case "podcast":
      return "bg-ttp-green text-white";
    case "webinar":
      return "bg-blue-600 text-white";
    case "livestream":
      return "bg-red-600 text-white animate-pulse";
    case "article":
      return "bg-ttp-charcoal text-white";
    case "report":
      return "bg-gray-600 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};
