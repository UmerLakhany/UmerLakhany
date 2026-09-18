import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Rocket, Server, Webhook, Database, Gauge } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const focusAreas = [
  { icon: Layers, label: "Full-Stack Development" },
  { icon: Rocket, label: "SaaS Applications" },
  { icon: Server, label: "Backend Systems" },
  { icon: Webhook, label: "API Development" },
  { icon: Database, label: "Database Systems" },
  { icon: Gauge, label: "Performance & SEO" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <Reveal variant="scale">
              <div className="about-photo-frame">
                <Image
                  src="/my_pic.png"
                  alt="Umer Lakhany"
                  fill
                  sizes="(max-width: 991px) 90vw, 420px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Reveal>
          </div>

          <div className="col-lg-7">
            <Reveal>
              <span className="eyebrow">About Me</span>
              <h2 className="section-title">Building Software With Purpose.</h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="fs-5">
                I&apos;m a Computer Science student and freelance Full-Stack Web Developer focused on
                building practical software solutions.
              </p>
              <p>
                I work across the frontend and backend, turning business requirements and ideas into
                responsive web applications, SaaS products, APIs, dashboards and database-driven systems.
              </p>
              <p>
                I started freelancing while studying Computer Science, and I&apos;ve been learning by
                combining academic fundamentals with real client projects — building things for actual
                users rather than only working through exercises.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <p className="fw-semibold text-uppercase small mb-3" style={{ letterSpacing: "0.08em", color: "var(--text-secondary)" }}>
                Currently focused on
              </p>
              <ul className="about-focus-list list-unstyled">
                {focusAreas.map(({ icon: Icon, label }) => (
                  <li key={label}>
                    <Icon size={17} />
                    {label}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="link-arrow">
                More About Me <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
