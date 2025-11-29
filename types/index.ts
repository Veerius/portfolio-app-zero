export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  size?: 'small' | 'medium' | 'large';
  titleEn?: string;
  descriptionEn?: string;
  longDescriptionEn?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  current: boolean;
  startDate: string; // Format: 'YYYY-MM'
  endDate?: string; // Format: 'YYYY-MM' or undefined if current
  descriptionEn?: string;
  roleEn?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  avatar: string;
  resumeUrl: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}
