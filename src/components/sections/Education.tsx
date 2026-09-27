import { GraduationCap, Languages } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { education, languages } from "@/data/experience";

export default function Education() {
  return (
    <section className="section section-alt">
      <div className="container">
        <Reveal className="section-head" as="div">
          <span className="eyebrow">Education</span>
          <h2 className="section-title">Education &amp; Languages</h2>
        </Reveal>

        <div className="row g-4">
          <div className="col-lg-7">
            <Reveal className="h-100">
              <div className="edu-card h-100">
                <span className="edu-icon">
                  <GraduationCap size={26} />
                </span>
                <div>
                  <h3 className="h5 mb-1">{education.degree}</h3>
                  <p className="mb-1 fw-semibold" style={{ color: "var(--text-primary)" }}>
                    {education.school}
                  </p>
                  <p className="mb-0 text-secondary-token">{education.period}</p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="col-lg-5">
            <Reveal delay={80} className="h-100">
              <div className="edu-card h-100">
                <span className="edu-icon">
                  <Languages size={26} />
                </span>
                <div>
                  <h3 className="h5 mb-2">Languages</h3>
                  {languages.map((l) => (
                    <p key={l.name} className="mb-1">
                      <span className="fw-semibold" style={{ color: "var(--text-primary)" }}>
                        {l.name}
                      </span>{" "}
                      <span className="text-secondary-token">— {l.level}</span>
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
