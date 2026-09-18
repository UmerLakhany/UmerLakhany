export type ProjectStatus = "Completed" | "In Development" | "Ongoing";

export type ProjectCategory =
  | "Client Work"
  | "Web Application"
  | "SaaS"
  | "Nonprofit"
  | "Backend"
  | "Personal"
  | "Marketplace"
  | "E-commerce";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface CaseStudyContent {
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  role: string;
  architecture?: string;
  process?: string;
  challenges?: string;
  outcome: string;
  learned?: string;
  future?: string;
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
  caseStudy?: CaseStudyContent;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  current?: boolean;
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
