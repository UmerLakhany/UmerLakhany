export const PROJECT_TYPES = [
  "Business Website",
  "Web Application",
  "SaaS Product",
  "Backend / API",
  "Admin Dashboard",
  "Website Improvement",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000+",
  "Not sure yet",
] as const;

export interface ContactFormValues {
  name: string;
  email: string;
  projectType: (typeof PROJECT_TYPES)[number];
  budget: (typeof BUDGET_RANGES)[number];
  message: string;
}
