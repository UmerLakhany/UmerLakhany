import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { focusAreas } from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `More about ${siteConfig.name} — a Full-Stack Developer at Slynx Technologies and BSCS student.`,
  alternates: { canonical: "/about" },
};

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
              <h1 className="section-title">Full-Stack Developer.</h1>
              <p className="fs-5">
                I&apos;m Umer Lakhany — a Full-Stack Developer based in {siteConfig.location}, currently
                working as a Software Developer at Slynx Technologies (Remote).
              </p>
              <p>
                I have hands-on experience developing, deploying, and maintaining responsive web
                applications. I&apos;m proficient in JavaScript, TypeScript, React.js, Next.js, Angular,
                Node.js, and Express.js, with experience in database integration, REST API development,
                authentication, and payment gateway integration.
              </p>
              <p>
                I&apos;m skilled in troubleshooting application errors, resolving technical issues, and
                configuring website hosting and domains, and I have experience taking web projects from
                requirements through development and deployment.
              </p>
              <p>
                I&apos;m currently pursuing a Bachelor of Science in Computer Science at Federal Urdu
                University of Arts, Sciences &amp; Technology, and I&apos;m looking for opportunities to
                contribute to a development team and expand my full-stack engineering expertise.
              </p>

              <p className="fw-semibold text-uppercase small mb-3 mt-4" style={{ letterSpacing: "0.08em", color: "var(--text-secondary)" }}>
                What I work on
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
                See my projects <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Experience />
      <Education />

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">Let&apos;s connect.</h2>
          <Link href="/contact" className="btn btn-primary btn-lg mt-2">
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
