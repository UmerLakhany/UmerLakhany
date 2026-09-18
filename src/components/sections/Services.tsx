import { Code2, Layers, Rocket, Server, LayoutDashboard, Gauge, ArrowUpRight, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

const ICONS: Record<string, LucideIcon> = {
  code: Code2,
  layers: Layers,
  rocket: Rocket,
  server: Server,
  "layout-dashboard": LayoutDashboard,
  gauge: Gauge,
};

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <Reveal className="section-head mx-auto" as="div">
          <span className="eyebrow justify-content-center">What I Do</span>
          <h2 className="section-title">What I Build</h2>
          <p className="section-sub">
            From marketing sites to full backend systems — a range of software built around what a
            project actually needs.
          </p>
        </Reveal>

        <div className="row g-4 services-grid">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Code2;
            return (
              <div className={`col-md-6 col-lg-4 ${i === 0 ? "col-feature" : ""}`} key={service.title}>
                <Reveal delay={i * 70} className="h-100">
                  <div className="service-card">
                    <span className="icon-tile">
                      <Icon size={24} />
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="explore-link">
                      Explore <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
