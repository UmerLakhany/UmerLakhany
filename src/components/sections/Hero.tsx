import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="grid-overlay" aria-hidden="true" />
      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="hero-kicker">
              <span className="dot" aria-hidden="true" />
              Full-Stack Web Developer
            </span>

            <h1 className="hero-title">
              I Build Modern
              <br />
              Web Applications
              <br />
              That Solve <span className="highlight">Real Problems.</span>
            </h1>

            <p className="hero-desc">
              I&apos;m a Computer Science student and freelance Full-Stack Web Developer focused on
              building modern websites, web applications, SaaS products, APIs, and backend systems.
            </p>

            <div className="hero-stack">
              <span>React.js</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>TypeScript</span>
              <span>Python</span>
            </div>

            <div className="hero-cta-row">
              <Link href="/projects" className="btn btn-primary btn-lg">
                View My Work <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn btn-outline-light btn-lg">
                Let&apos;s Work Together
              </Link>
            </div>

            <Link href="/journey" className="hero-explore">
              Explore My Journey <ChevronDown size={16} />
            </Link>
          </div>

          <div className="col-lg-6">
            <div className="hero-visual">
              <div className="hero-visual-frame">
                <div className="glow" aria-hidden="true" />
                <Image
                  src="/my_pic.png"
                  alt="Umer Lakhany, Full-Stack Web Developer"
                  fill
                  sizes="(max-width: 991px) 80vw, 380px"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  priority
                />
              </div>
              <div className="hero-float-card card-top">
                <span className="badge-dot" aria-hidden="true" />
                Available for freelance work
              </div>
              <div className="hero-float-card card-bottom">
                <Sparkles size={14} />
                BSCS Student &amp; Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
