import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Webhook, Database, ShieldCheck, CreditCard, Globe } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const focusAreas = [
  { icon: Layers, label: "Full-Stack Development" },
  { icon: Webhook, label: "REST API Development" },
  { icon: Database, label: "Database Integration" },
  { icon: ShieldCheck, label: "Authentication" },
  { icon: CreditCard, label: "Payment Gateway Integration" },
  { icon: Globe, label: "Hosting & Domains" },
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
              <h2 className="section-title">Professional Summary</h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="fs-5">
                I&apos;m a Full-Stack Developer with hands-on experience developing, deploying, and
                maintaining responsive web applications.
              </p>
              <p>
                I work with JavaScript, TypeScript, React.js, Next.js, Angular, Node.js, and Express.js,
                with experience in database integration, REST API development, authentication, and
                payment gateway integration. I&apos;m also skilled in troubleshooting application errors,
                resolving technical issues, and configuring website hosting and domains.
              </p>
              <p>
                I take web projects from requirements through development and deployment, and I&apos;m
                currently pursuing a Bachelor of Science in Computer Science.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <p className="fw-semibold text-uppercase small mb-3" style={{ letterSpacing: "0.08em", color: "var(--text-secondary)" }}>
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
