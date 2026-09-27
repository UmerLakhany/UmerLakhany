import type { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    key: "languages",
    label: "Languages",
    items: [
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
    ],
  },
  {
    key: "frontend",
    label: "Frontend",
    items: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Angular", icon: "angular" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      { name: "REST APIs", icon: "api" },
      { name: "JWT Authentication", icon: "jwt" },
    ],
  },
  {
    key: "databases",
    label: "Databases",
    items: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    key: "integrations",
    label: "Integrations",
    items: [
      { name: "PayPal", icon: "paypal" },
      { name: "Stripe", icon: "stripe" },
      { name: "Google APIs", icon: "google" },
      { name: "Third-Party APIs", icon: "plug" },
    ],
  },
  {
    key: "support",
    label: "Technical Support",
    items: [
      { name: "Bug Fixing", icon: "bug" },
      { name: "Error Resolution", icon: "error" },
      { name: "Debugging", icon: "debug" },
      { name: "Hosting & Domains", icon: "hosting" },
    ],
  },
];
