export interface NavItem {
  title: string;
  href: string;
  hasDropdown?: boolean;
}

export interface Company {
  name: string;
  description: string;
  slug: string;
  headline: string;
  summary: string;
  vision?: string;
  mission?: string;
  values?: string[];
  content?: string[];
  keywords: string[];
  image?: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  content: string;
  company: string;
}
