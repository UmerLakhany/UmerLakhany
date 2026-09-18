"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import TechIcon from "@/components/ui/TechIcon";
import { skillCategories } from "@/data/skills";

export default function TechStack() {
  const [active, setActive] = useState(skillCategories[0].key);
  const current = skillCategories.find((c) => c.key === active) ?? skillCategories[0];

  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head mx-auto" as="div">
          <span className="eyebrow justify-content-center">Technology</span>
          <h2 className="section-title">Tools &amp; Technologies</h2>
          <p className="section-sub">The stack I reach for most, organized by where it fits.</p>
        </Reveal>

        <Reveal className="d-flex justify-content-center mb-5">
          <div className="tech-tabs" role="tablist" aria-label="Technology categories">
            {skillCategories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={active === cat.key}
                className={active === cat.key ? "is-active" : ""}
                onClick={() => setActive(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="tech-grid" role="tabpanel">
          {current.items.map((item) => (
            <div className="tech-item" key={item.name}>
              <span className="tech-icon">
                <TechIcon icon={item.icon} />
              </span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
