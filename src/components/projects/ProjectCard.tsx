import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import type { Project } from "@/lib/types";
import ProjectMedia from "./ProjectMedia";

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const hasCaseStudy = Boolean(project.caseStudy);

  return (
    <article className={`project-card ${featured ? "is-featured" : ""}`}>
      <ProjectMedia project={project} />
      <div className="project-body">
        <div className="project-category">{project.categories[0]}</div>
        <h3>{project.name}</h3>
        <p>{project.tagline}</p>

        <div className="project-tags">
          {project.techStack.slice(0, 4).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
              Live Website <ArrowUpRight size={15} />
            </a>
          )}
          {hasCaseStudy && (
            <Link href={`/projects/${project.slug}`} className="link-arrow">
              Case Study <FileText size={14} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
