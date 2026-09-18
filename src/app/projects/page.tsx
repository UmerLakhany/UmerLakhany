import type { Metadata } from "next";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Real projects, client work, and software Umer Lakhany has built — nonprofit platforms, SaaS products, marketplaces, and business websites.",
};

export default function ProjectsPage() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--header-h) + 3rem)" }}>
      <div className="container">
        <div className="section-head mx-auto text-center">
          <span className="eyebrow justify-content-center">Portfolio</span>
          <h1 className="section-title">Selected Work</h1>
          <p className="section-sub">
            Real projects, client work, experiments, and software I&apos;ve built throughout my
            development journey.
          </p>
        </div>
        <ProjectsGrid />
      </div>
    </section>
  );
}
