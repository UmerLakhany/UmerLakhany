import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

const HOME_PROJECT_LIMIT = 4;

export default function Projects() {
  const featured = getFeaturedProjects().slice(0, HOME_PROJECT_LIMIT);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Portfolio</span>
          <h2 className="section-title mb-2">Selected Work</h2>
          <p className="section-sub">
            Real projects, client work, and software I&apos;ve built throughout my development journey.
          </p>
        </Reveal>

        <div className="row g-4">
          {featured.map((project, i) => (
            <div className="col-md-6" key={project.slug}>
              <Reveal delay={i * 80} className="h-100">
                <ProjectCard project={project} />
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal delay={160} className="text-center mt-5">
          <Link href="/projects" className="btn btn-primary btn-lg">
            View All Projects <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
