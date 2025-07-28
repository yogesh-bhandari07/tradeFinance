import { SimplifiedContentGrid } from '@/app/companies/components/tab';
import { CompanyContent, CompanyEvent, CompanyPublication } from "@/hooks/useCompanies";

interface CompanyContentTabsProps {
  content: CompanyContent[];
  events: CompanyEvent[];
  publications: CompanyPublication[];
  loading: boolean;
}

export const CompanyContentTabs = ({ content, events, publications, loading }: CompanyContentTabsProps) => {
  return (
    <SimplifiedContentGrid 
      content={content}
      events={events}
      publications={publications}
      loading={loading}
    />
  );
};