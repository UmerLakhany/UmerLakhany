export type ProjectStatus = "Live" | "In Development";

export type ProjectCategory =
  | "Platform"
  | "Full-Stack"
  | "Web Application"
  | "SaaS"
  | "Nonprofit"
  | "E-commerce"
  | "Website"
  | "Personal";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  categories: ProjectCategory[];
  techStack: string[];
  role: string;
  status: ProjectStatus;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  coverImage?: ProjectImage;
  gallery?: ProjectImage[];
  highlights: string[];
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  key: string;
  label: string;
  items: SkillItem[];
}
