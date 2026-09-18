import type { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    label: "Frontend",
    items: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      { name: "Python", icon: "python" },
      { name: "REST APIs", icon: "api" },
      { name: "JWT", icon: "jwt" },
      { name: "Authentication", icon: "auth" },
    ],
  },
  {
    key: "database",
    label: "Database",
    items: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "Firebase", icon: "firebase" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    key: "tools",
    label: "Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "VS Code", icon: "vscode" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
];
