export interface Post {
  id: string;
  databaseId: number;
  title: string;
  slug: string;
  uri: string;
  content: string;
  excerpt: string;
  date: string;
  categories: CategoryConnection;
  tags: TagConnection;
  featuredImage: FeaturedImage | string;
  singlePostPage: SinglePostPage;
  author: Author;
}

export interface CategoryConnection {
  edges: CategoryEdge[];
}

export interface CategoryEdge {
  node: Category;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  uri: string;
}

export interface TagConnection {
  nodes: Tag[];
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  uri: string;
}

export interface FeaturedImage {
  node: {
    altText: string;
    mediaDetails: {
      sizes: ImageSize[];
    };
  };
}

export interface ImageSize {
  name: string;
  sourceUrl: string;
}

export interface SinglePostPage {
  downloadPdfButton: string;
  downloadPdfLink: string;
  downloadPdfContent: string;
}

export interface Author {
  node: {
    id: string;
    databaseId: number;
    name: string;
    firstName: string;
    lastName: string;
    description: string;
    avatar: {
      url: string;
    };
  };
}

export interface PostSetting {
  bottomSectionHeading: string;
  bottomSectionContent: string;
  newsletterButton: string;
  newsletterButtonLink: string;
  coursesButton: string;
  coursesButtonLink: string;
  heading: string;
  description: string;
  subscribeFreeButton: string;
  subscribeFreeButtonLink: string;
  addScript: string;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterFormShortcode: string;
  newsletterBottomContent: string;
  advertisementScript: string;
  advertisementImage: PostSettingsAdvertisementImage;
}

export interface PostSettingsAdvertisementImage {
  node: {
    mediaItemUrl: string;
  };
}

// ==================== Related Posts ====================

export interface RelatedPostAuthor {
  node: {
    name: string;
  };
}

export interface RelatedPostFeaturedImage {
  node: {
    mediaDetails: {
      sizes: ImageSize[];
    };
  };
}

export interface RelatedPostCategoryNode {
  name: string;
}

export interface RelatedPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  author: RelatedPostAuthor;
  featuredImage: RelatedPostFeaturedImage;
  categories: {
    nodes: RelatedPostCategoryNode[];
  };
}

export interface RelatedPosts {
  nodes: RelatedPost[];
}
