import type { Metadata } from "next";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Live projects developed by Umer Lakhany — including Zeno eSIM, Saudagran, Weekly Team Fun, LIVIDOUSA, Janet Adenusi, SaaS products, and business websites.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--header-h) + 3rem)" }}>
      <div className="container">
        <div className="section-head mx-auto text-center">
          <span className="eyebrow justify-content-center">Portfolio</span>
          <h1 className="section-title">Projects</h1>
          <p className="section-sub">Live web platforms and applications I&apos;ve developed.</p>
        </div>
        <ProjectsGrid />
      </div>
    </section>
  );
}
