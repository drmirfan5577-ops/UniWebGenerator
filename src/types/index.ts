// All TypeScript types for Uni Website Generator

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  flag: string;
}

export interface TemplateCategory {
  id: string;
  icon: string;
  labelKey: string;
  color: string;
  gradient: string;
  count: number;
}

export interface Template {
  id: string;
  name: string;
  nameUrdu?: string;
  categoryId: string;
  thumbnail: string;
  tags: string[];
  rating: number;
  downloads: number;
  isPremium: boolean;
  isFeatured?: boolean;
  colors: string[];
  description: string;
}

export interface SocialPlatform {
  id: string;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  baseUrl: string;
  placeholder: string;
}

export interface AdminState {
  isLoggedIn: boolean;
  lastLogin?: string;
}

export interface SiteConfig {
  siteName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  country: string;
  currency: string;
  socialLinks: Record<string, string>;
  activeTemplateId: string;
  primaryColor: string;
  language: string;
  logoUrl: string;
  marqueeText: string[];
}

export interface Translations {
  [key: string]: {
    [lang: string]: string;
  };
}

export type ViewType = 'home' | 'templates' | 'generator' | 'social' | 'marketing' | 'admin' | 'preview';
