export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  features: string[];
  deliverables: string[];
  scope: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  servicesSupplied: string[];
  benefits: string[];
}

export interface CompanyInfo {
  name: string;
  legalTradeName: string;
  location: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  displayPhone: string;
  whatsappUrl: string;
  hours: string;
  addressSnippet: string;
}
