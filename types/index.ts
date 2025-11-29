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
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  current: boolean;
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
