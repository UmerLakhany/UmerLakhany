import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { experienceRole } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal className="section-head" as="div">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Professional Experience</h2>
        </Reveal>

        <Reveal>
          <div className="role-card">
            <div className="role-meta">
              <div>
                <h3 className="h4 mb-1">{experienceRole.title}</h3>
                <p className="mb-0 text-secondary-token">{experienceRole.org}</p>
              </div>
              <span className="role-badge">{experienceRole.period}</span>
            </div>
            <ul className="role-list">
              {experienceRole.responsibilities.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
