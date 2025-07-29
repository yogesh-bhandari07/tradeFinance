
import { AdBanner } from '@/app/types/ads';

const ads: AdBanner[] = [
  {
    id: '1',
    type: 'header',
    title: 'Transform Your Trade Finance Operations',
    description: 'Discover how HSBC\'s digital platform streamlines international trade processes.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    company: 'HSBC',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    url: 'https://hsbc.com/trade-finance',
    cta: 'Learn More',
    sponsored: true,
    dimensions: {
      width: 728,
      height: 90
    }
  },
  {
    id: '2',
    type: 'banner',
    title: 'Next-Gen Treasury Solutions',
    description: 'Advanced cash management and liquidity optimization tools for modern enterprises.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    company: 'JPMorgan Chase',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    url: 'https://jpmorgan.com/treasury',
    cta: 'Explore Solutions',
    sponsored: true,
    dimensions: {
      width: 728,
      height: 90
    }
  },
  {
    id: '3',
    type: 'skyscraper',
    title: 'Digital Payment Innovation',
    description: 'Leading the future of cross-border payments with blockchain technology.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    company: 'Ripple',
    logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    url: 'https://ripple.com',
    cta: 'Discover More',
    sponsored: true,
    dimensions: {
      width: 160,
      height: 600
    }
  },
  {
    id: '4',
    type: 'square',
    title: 'Trade Finance Simplified',
    description: 'Streamline your documentary credit processes with our digital platform.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    company: 'Standard Chartered',
    logo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    url: 'https://standardchartered.com/trade',
    cta: 'Get Started',
    sponsored: true,
    dimensions: {
      width: 300,
      height: 250
    }
  }
];

export const getAdsForPage = (page: string): AdBanner[] => {
  // In a real implementation, this would filter ads based on page context
  return ads;
};

export { ads };
