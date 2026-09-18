import Reveal from "@/components/ui/Reveal";
import { journey } from "@/data/experience";

export default function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <Reveal className="section-head mx-auto" as="div">
          <span className="eyebrow justify-content-center">My Story</span>
          <h2 className="section-title">My Development Journey</h2>
          <p className="section-sub">
            Skills are only part of the picture — here&apos;s how I actually got here.
          </p>
        </Reveal>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="timeline">
              {journey.map((entry, i) => (
                <div className={`timeline-item ${entry.current ? "is-current" : ""}`} key={entry.title}>
                  <span className="timeline-dot" />
                  <Reveal delay={i * 90}>
                    <div className="timeline-card">
                      <span className="timeline-year">{entry.year}</span>
                      <h3>{entry.title}</h3>
                      <p>{entry.description}</p>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
