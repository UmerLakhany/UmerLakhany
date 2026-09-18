import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Layers, Rocket, Server, LayoutDashboard, Gauge, type LucideIcon } from "lucide-react";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "What I build — web development, full-stack applications, SaaS products, APIs, dashboards and website optimization.",
};

const ICONS: Record<string, LucideIcon> = {
  code: Code2,
  layers: Layers,
  rocket: Rocket,
  server: Server,
  "layout-dashboard": LayoutDashboard,
  gauge: Gauge,
};

export default function ServicesPage() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--header-h) + 3rem)" }}>
      <div className="container">
        <div className="section-head mx-auto text-center">
          <span className="eyebrow justify-content-center">What I Do</span>
          <h1 className="section-title">What I Build</h1>
          <p className="section-sub">
            From marketing sites to full backend systems — a range of software built around what a
            project actually needs.
          </p>
        </div>

        <div className="row g-4 services-grid">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Code2;
            return (
              <div className={`col-md-6 col-lg-4 ${i === 0 ? "col-feature" : ""}`} key={service.title}>
                <div className="service-card h-100">
                  <span className="icon-tile">
                    <Icon size={24} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-5">
          <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>
            Need something specific?
          </h2>
          <Link href="/contact" className="btn btn-primary btn-lg mt-2">
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
