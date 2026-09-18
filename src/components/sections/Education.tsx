import { GraduationCap } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { education } from "@/data/experience";

export default function Education() {
  return (
    <section className="section section-alt">
      <div className="container">
        <Reveal className="section-head" as="div">
          <span className="eyebrow">Education</span>
          <h2 className="section-title">Academic Foundation</h2>
          <p className="section-sub">Academic fundamentals, combined with real-world development.</p>
        </Reveal>

        <Reveal>
          <div className="edu-card">
            <span className="edu-icon">
              <GraduationCap size={26} />
            </span>
            <div>
              <h3 className="h5 mb-1">{education.degree}</h3>
              <p className="mb-1 fw-semibold" style={{ color: "var(--text-primary)" }}>
                {education.school}
              </p>
              <p className="mb-0 text-secondary-token">{education.period}</p>
              <div className="coursework-list">
                {education.coursework.map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
