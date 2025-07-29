export interface AdBanner {
  id: string;
  type: 'header' | 'skyscraper' | 'banner' | 'square' | 'native';
  title: string;
  description: string;
  image: string;
  company: string;
  logo?: string;
  url: string;
  cta: string;
  sponsored?: boolean;
  dimensions: {
    width: number;
    height: number;
  };
}

export interface AdPlacement {
  position: 'header' | 'sidebar' | 'content' | 'footer';
  page: string[];
  priority: number;
}
