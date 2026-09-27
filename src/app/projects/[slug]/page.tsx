import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectMedia from "@/components/projects/ProjectMedia";
import ProjectCard from "@/components/projects/ProjectCard";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.name,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug && p.categories.some((c) => project.categories.includes(c))).slice(0, 3);

  return (
    <>
      <section className="case-hero">
        <div className="container">
          <Link href="/projects" className="backlink mb-4 d-inline-flex">
            <ArrowLeft size={15} /> Back to Projects
          </Link>

          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span className="eyebrow">{project.categories[0]}</span>
              <h1 className="section-title mb-3">{project.name}</h1>
              <p className="fs-5">{project.tagline}</p>

              <div className="case-meta-list mt-4">
                <div className="case-meta-item">
                  <div className="label">Status</div>
                  <div className="value">{project.status}</div>
                </div>
                <div className="case-meta-item">
                  <div className="label">Role</div>
                  <div className="value">{project.role}</div>
                </div>
                <div className="case-meta-item">
                  <div className="label">Category</div>
                  <div className="value">{project.categories.join(", ")}</div>
                </div>
                <div className="case-meta-item">
                  <div className="label">Live Site</div>
                  <div className="value">
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
                        Live Project <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      "Not public yet"
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="case-media-frame">
                <ProjectMedia project={project} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <span className="case-label">Overview</span>
              <p className="fs-5">{project.description}</p>
            </div>
            <div className="col-lg-5">
              <div className="surface-card p-4">
                <h3 className="h6 mb-3">Technology</h3>
                <div className="project-tags mb-0">
                  {project.techStack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {project.highlights.length > 0 && (
        <section className="case-section">
          <div className="container">
            <span className="case-label">Highlights</span>
            <h2 className="h3 mb-4">What I built</h2>
            <ul className="feature-list">
              {project.highlights.map((h) => (
                <li key={h}>
                  <CheckCircle2 size={18} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="case-section">
          <div className="container">
            <span className="case-label">More Projects</span>
            <h2 className="h3 mb-4">More work like this</h2>
            <div className="row g-4">
              {related.map((r) => (
                <div className="col-md-4" key={r.slug}>
                  <ProjectCard project={r} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Want to get in touch?</h2>
          <Link href="/contact" className="btn btn-primary btn-lg mt-2">
            Contact Me <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
