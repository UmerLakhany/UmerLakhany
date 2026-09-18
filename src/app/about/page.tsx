import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Rocket, Server, Webhook, Database, Gauge } from "lucide-react";
import Journey from "@/components/sections/Journey";
import Education from "@/components/sections/Education";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `More about ${siteConfig.name} — a Computer Science student and freelance Full-Stack Web Developer.`,
  alternates: { canonical: "/about" },
};

const focusAreas = [
  { icon: Layers, label: "Full-Stack Development" },
  { icon: Rocket, label: "SaaS Applications" },
  { icon: Server, label: "Backend Systems" },
  { icon: Webhook, label: "API Development" },
  { icon: Database, label: "Database Systems" },
  { icon: Gauge, label: "Performance & SEO" },
];

export default function AboutPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "calc(var(--header-h) + 3rem)" }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div className="about-photo-frame">
                <Image src="/my_pic.png" alt="Umer Lakhany" fill sizes="(max-width: 991px) 90vw, 420px" style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="col-lg-7">
              <span className="eyebrow">About Me</span>
              <h1 className="section-title">Student, Developer, Builder.</h1>
              <p className="fs-5">
                I&apos;m Umer Lakhany — a Computer Science student at Federal Urdu University of Arts,
                Sciences &amp; Technology and a freelance Full-Stack Web Developer.
              </p>
              <p>
                I started freelancing in 2024, before I&apos;d even begun my formal Computer Science
                degree, taking on real client websites and slowly working my way into more ambitious
                full-stack projects: applications with authentication, databases, APIs, and integrations
                with third-party services.
              </p>
              <p>
                Since then, my work has run in parallel with my studies — client projects giving me
                practical experience that classroom fundamentals alone don&apos;t, and coursework in
                data structures, algorithms, and software engineering giving my client work a stronger
                foundation. I see the two as feeding each other, not competing.
              </p>
              <p>
                I&apos;m not positioning myself as a senior engineer or architect — I&apos;m a student
                who is already building real software for real clients, and I&apos;m continuing to grow
                toward more advanced systems: SaaS products, larger backend architectures, and more
                sophisticated engineering practice.
              </p>

              <p className="fw-semibold text-uppercase small mb-3 mt-4" style={{ letterSpacing: "0.08em", color: "var(--text-secondary)" }}>
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

              <Link href="/projects" className="link-arrow">
                See what I&apos;ve built <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Journey />
      <Education />

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Let&apos;s build something together.</h2>
          <Link href="/contact" className="btn btn-primary btn-lg mt-2">
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
