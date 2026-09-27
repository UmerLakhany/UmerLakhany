import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="grid-overlay" aria-hidden="true" />
      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="hero-kicker">
              <span className="dot" aria-hidden="true" />
              Full-Stack Developer
            </span>

            <h1 className="hero-title">
              I Build Modern
              <br />
              Web Applications
              <br />
              That Solve <span className="highlight">Real Problems.</span>
            </h1>

            <p className="hero-desc">
              I&apos;m a Software Developer at Slynx Technologies, developing, deploying, and maintaining
              responsive web applications — from frontend interfaces to REST APIs, databases,
              authentication, and payment integrations.
            </p>

            <div className="hero-stack">
              <span>React.js</span>
              <span>Next.js</span>
              <span>Angular</span>
              <span>Node.js</span>
              <span>TypeScript</span>
            </div>

            <div className="hero-cta-row">
              <Link href="/projects" className="btn btn-primary btn-lg">
                View My Work <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn btn-outline-light btn-lg">
                Get In Touch
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-visual">
              <div className="hero-visual-frame">
                <div className="glow" aria-hidden="true" />
                <Image
                  src="/my_pic.png"
                  alt="Umer Lakhany, Full-Stack Developer"
                  fill
                  sizes="(max-width: 991px) 80vw, 380px"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  priority
                />
              </div>
              <div className="hero-float-card card-top">
                <Briefcase size={14} />
                Software Developer @ Slynx Technologies
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
