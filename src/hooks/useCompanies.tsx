// src/hooks/useCompanyDetails.ts
'use client';
import { useEffect, useState } from "react";

import { useMemo } from "react";

// ====================
// Type Definitions
// ====================
export type Company = {
  id: string;
  name: string;
  slug: string;
  logo_url: string;
  website_url?: string;
  description?: string;
  company_type?: string;
  industry?: string;
  headquarters?: string;
  regions?: string[];
  founded?: number;
  employee_count?: string;
  featured?: boolean;
  verified?: boolean;
  sponsored?: boolean;
  sponsorship_level?: string;
  tags?: string[];
  integration_support?: string[];
  product_types?: string[];
  functions?: string[];
  custom_branding?: string | null;
  usps?: string[];
  contact_email?: string;
  contact_phone?: string;
  linkedin_url?: string;
  twitter_url?: string;
  created_at?: string;
  updated_at?: string;
};

export type Video = {
  id: string;
  title: string;
  companyId: string;
  url: string;
};

export type Podcast = {
  id: string;
  title: string;
  companyId: string;
  url: string;
};

export type Webinar = {
  id: string;
  title: string;
  companyId: string;
  url: string;
};

export type Author = {
  id: string;
  name: string;
  companyId: string;
  bio?: string;
};

export type Conference = {
  id: string;
  name: string;
  companyId: string;
  date: string;
};

export type Edition = {
  id: string;
  title: string;
  companyName: string;
  year: number;
};

// ====================
// Mock Data
// ====================
const mockCompanies: Company[] = [
  {
    id: "1",
    name: "HSBC",
    slug: "hsbc",
    logo_url: "https://example.com/logo.png",
    website_url: "https://hsbc.com",
    description: "Global bank with trade finance solutions.",
    company_type: "Bank",
    industry: "Finance",
    headquarters: "London",
    regions: ["Europe", "Asia"],
    founded: 1865,
    employee_count: "226,000",
    featured: true,
    verified: true,
    sponsored: true,
    sponsorship_level: "gold",
    tags: ["Trade", "Finance", "Digital"],
    integration_support: ["API"],
    product_types: ["Trade Platform"],
    functions: ["Payments", "Compliance"],
    custom_branding: null,
    usps: ["Global network", "Digital platform"],
    contact_email: "info@hsbc.com",
    contact_phone: "+44 20 7999 9000",
    linkedin_url: "https://linkedin.com/company/hsbc",
    twitter_url: "https://twitter.com/hsbc",
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  // Add more companies...
];

const mockVideos: Video[] = [
  { id: "v1", title: "HSBC Trade Insights", companyId: "1", url: "https://video.com/1" },
];

const mockPodcasts: Podcast[] = [
  { id: "p1", title: "HSBC Talks Trade", companyId: "1", url: "https://podcast.com/1" },
];

const mockWebinars: Webinar[] = [
  { id: "w1", title: "Global Trade Webinar", companyId: "1", url: "https://webinar.com/1" },
];

const mockAuthors: Author[] = [
  { id: "a1", name: "Jane Doe", companyId: "1", bio: "Trade expert at HSBC" },
];

const mockConferences: Conference[] = [
  { id: "c1", name: "Trade Summit 2024", companyId: "1", date: "2024-11-20" },
];

const mockEditions: Edition[] = [
  { id: "e1", title: "HSBC Trade Review 2023", companyName: "HSBC", year: 2023 },
];

// ====================
// useCompanyDetails Hook
// ====================
export const useCompanyDetails = (slug: string) => {
  return useMemo(() => {
    const company = mockCompanies.find((c) => c.slug === slug);
    const companyId = company?.id;

    return {
      company,
      videos: mockVideos.filter((v) => v.companyId === companyId),
      podcasts: mockPodcasts.filter((p) => p.companyId === companyId),
      webinars: mockWebinars.filter((w) => w.companyId === companyId),
      authors: mockAuthors.filter((a) => a.companyId === companyId),
      conferences: mockConferences.filter((c) => c.companyId === companyId),
      editions: mockEditions.filter((e) => e.companyName === company?.name),
    };
  }, [slug]);
};

export const useCompanyBySlug = (slug: string) => {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const found = mockCompanies.find((c) => c.slug === slug);
    setCompany(found || null);
    setLoading(false);
  }, [slug]);

  return { company, loading, error: company ? null : "Not Found" };
};

// import {
//   Company,
//   CompanyContent,
//   CompanyEvent,
//   CompanyFilter,
//   CompanyPersonnel,
//   CompanyPublication,
// } from "@/app/types/co";
// import {
//   mockCompanies,
//   mockCompanyPersonnel,
//   mockCompanyContent,
//   mockCompanyEvents,
//   mockCompanyPublications,
// } from "@/app/mock/companies";

// export const useCompanyPersonnel = (companyId: string) => {
//   const [personnel, setPersonnel] = useState<CompanyPersonnel[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setPersonnel(mockCompanyPersonnel[companyId] || []);
//     setLoading(false);
//   }, [companyId]);

//   return { personnel, loading };
// };


// import { useState, useEffect } from 'react';
// import { supabase } from '@/integrations/supabase/client';

// export interface Company {
//   id: string;
//   name: string;
//   slug: string;
//   logo_url?: string;
//   website_url?: string;
//   description?: string;
//   company_type: string;
//   industry?: string;
//   headquarters?: string;
//   regions: string[];
//   founded?: number;
//   employee_count?: string;
//   featured: boolean;
//   verified: boolean;
//   sponsored: boolean;
//   sponsorship_level?: string;
//   tags: string[];
//   integration_support: string[];
//   product_types: string[];
//   functions: string[];
//   custom_branding: any;
//   usps: string[];
//   contact_email?: string;
//   contact_phone?: string;
//   linkedin_url?: string;
//   twitter_url?: string;
//   created_at: string;
//   updated_at: string;
// }

export interface CompanyPersonnel {
  id: string;
  company_id: string;
  name: string;
  title?: string;
  bio?: string;
  avatar_url?: string;
  linkedin_url?: string;
  email?: string;
  sort_order: number;
  is_featured: boolean;
}

export interface CompanyContent {
  id: string;
  company_id: string;
  content_type: string;
  title: string;
  url: string;
  thumbnail_url?: string;
  duration?: string;
  description?: string;
  issue_number?: string;
  date?: string;
  excerpt?: string;
  sort_order: number;
}

export interface CompanyEvent {
  id: string;
  company_id: string;
  event_type: string;
  title: string;
  date: string;
  location?: string;
  description?: string;
  partner_logo_url?: string;
  partner_name?: string;
  registration_url?: string;
  event_url?: string;
  sort_order: number;
}

export interface CompanyPublication {
  id: string;
  company_id: string;
  title: string;
  publication_type: string;
  description?: string;
  thumbnail_url?: string;
  pdf_url?: string;
  download_url?: string;
  published_date?: string;
  sort_order: number;
}

export interface CompanyFilter {
  company_type?: string;
  industry?: string;
  region?: string;
  featured?: boolean;
  verified?: boolean;
  sponsored?: boolean;
  product_type?: string;
  integration_support?: string;
  function?: string;
  search?: string;
}

// export const useCompanies = (filter?: CompanyFilter) => {
//   const [companies, setCompanies] = useState<Company[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         setLoading(true);
//         let query = supabase.from('companies').select('*');

//         if (filter?.company_type) {
//           query = query.eq('company_type', filter.company_type);
//         }
//         if (filter?.industry) {
//           query = query.eq('industry', filter.industry);
//         }
//         if (filter?.region) {
//           query = query.contains('regions', [filter.region]);
//         }
//         if (filter?.featured !== undefined) {
//           query = query.eq('featured', filter.featured);
//         }
//         if (filter?.verified !== undefined) {
//           query = query.eq('verified', filter.verified);
//         }
//         if (filter?.sponsored !== undefined) {
//           query = query.eq('sponsored', filter.sponsored);
//         }
//         if (filter?.product_type) {
//           query = query.contains('product_types', [filter.product_type]);
//         }
//         if (filter?.integration_support) {
//           query = query.contains('integration_support', [filter.integration_support]);
//         }
//         if (filter?.function) {
//           query = query.contains('functions', [filter.function]);
//         }
//         if (filter?.search) {
//           query = query.or(`name.ilike.%${filter.search}%,description.ilike.%${filter.search}%`);
//         }

//         query = query.order('featured', { ascending: false })
//                      .order('sponsored', { ascending: false })
//                      .order('verified', { ascending: false })
//                      .order('name');

//         const { data, error: queryError } = await query;

//         if (queryError) throw queryError;
//         setCompanies(data || []);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'An error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCompanies();
//   }, [filter]);

//   return { companies, loading, error };
// };

// export const useCompanyBySlug = (slug: string) => {
//   const [company, setCompany] = useState<Company | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCompany = async () => {
//       if (!slug) return;

//       try {
//         setLoading(true);
//         const { data, error: queryError } = await supabase
//           .from('companies')
//           .select('*')
//           .eq('slug', slug)
//           .single();

//         if (queryError) throw queryError;
//         setCompany(data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'Company not found');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCompany();
//   }, [slug]);

//   return { company, loading, error };
// };

// export const useCompanyPersonnel = (companyId: string) => {
//   const [personnel, setPersonnel] = useState<CompanyPersonnel[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPersonnel = async () => {
//       if (!companyId) return;

//       try {
//         const { data } = await supabase
//           .from('company_personnel')
//           .select('*')
//           .eq('company_id', companyId)
//           .order('sort_order')
//           .order('name');

//         setPersonnel(data || []);
//       } catch (err) {
//         console.error('Error fetching personnel:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPersonnel();
//   }, [companyId]);

//   return { personnel, loading };
// };

// export const useCompanyContent = (companyId: string) => {
//   const [content, setContent] = useState<CompanyContent[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchContent = async () => {
//       if (!companyId) return;

//       try {
//         const { data } = await supabase
//           .from('company_content')
//           .select('*')
//           .eq('company_id', companyId)
//           .order('sort_order')
//           .order('date', { ascending: false });

//         setContent(data || []);
//       } catch (err) {
//         console.error('Error fetching content:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContent();
//   }, [companyId]);

//   return { content, loading };
// };

// export const useCompanyEvents = (companyId: string) => {
//   const [events, setEvents] = useState<CompanyEvent[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       if (!companyId) return;

//       try {
//         const { data } = await supabase
//           .from('company_events')
//           .select('*')
//           .eq('company_id', companyId)
//           .order('date', { ascending: false });

//         setEvents(data || []);
//       } catch (err) {
//         console.error('Error fetching events:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, [companyId]);

//   return { events, loading };
// };

// export const useCompanyPublications = (companyId: string) => {
//   const [publications, setPublications] = useState<CompanyPublication[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPublications = async () => {
//       if (!companyId) return;

//       try {
//         const { data } = await supabase
//           .from('company_publications')
//           .select('*')
//           .eq('company_id', companyId)
//           .order('published_date', { ascending: false });

//         setPublications(data || []);
//       } catch (err) {
//         console.error('Error fetching publications:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPublications();
//   }, [companyId]);

//   return { publications, loading };
// };

// export const submitCompanyLead = async (leadData: {
//   company_id: string;
//   full_name: string;
//   email: string;
//   company_name?: string;
//   phone?: string;
//   message?: string;
//   form_type?: string;
// }) => {
//   const { data, error } = await supabase
//     .from('company_leads')
//     .insert([leadData]);

//   if (error) throw error;
//   return data;
// };