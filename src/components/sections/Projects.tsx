import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

export default function Projects() {
  const featured = getFeaturedProjects();

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 section-head" style={{ maxWidth: "none" }}>
          <Reveal>
            <span className="eyebrow">Portfolio</span>
            <h2 className="section-title mb-2">Selected Work</h2>
            <p className="section-sub">
              Real projects, client work, and software I&apos;ve built throughout my development journey.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Link href="/projects" className="link-arrow">
              View All Projects <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="row g-4">
          {featured.map((project, i) => (
            <div className="col-md-6" key={project.slug}>
              <Reveal delay={i * 80} className="h-100">
                <ProjectCard project={project} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
