import Reveal from "@/components/ui/Reveal";

const steps = [
  { num: "01", title: "Understand", desc: "Understand the business, users, requirements and desired outcome." },
  { num: "02", title: "Plan", desc: "Define features, architecture, technologies and development approach." },
  { num: "03", title: "Build", desc: "Develop the frontend, backend, integrations and functionality." },
  { num: "04", title: "Launch & Improve", desc: "Test, deploy, monitor and improve the product." },
];

export default function Process() {
  return (
    <section className="section section-alt">
      <div className="container">
        <Reveal className="section-head mx-auto" as="div">
          <span className="eyebrow justify-content-center">Process</span>
          <h2 className="section-title">How I Work</h2>
        </Reveal>

        <div className="process-row">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 100} className="process-step">
              <span className="step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
