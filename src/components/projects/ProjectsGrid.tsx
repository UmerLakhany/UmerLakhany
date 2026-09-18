"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects, projectCategories } from "@/data/projects";
import type { ProjectCategory } from "@/lib/types";

export default function ProjectsGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.categories.includes(active as ProjectCategory));
  }, [active]);

  return (
    <div>
      <div className="project-filters mb-5">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={active === cat ? "is-active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {filtered.map((project) => (
          <div className="col-md-6 col-lg-4" key={project.slug}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-secondary-token py-5">No projects in this category yet.</p>
      )}
    </div>
  );
}
