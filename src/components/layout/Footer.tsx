import Link from "next/link";
import { Github, Linkedin, Mail, Briefcase, Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const { social, email } = siteConfig;

  const links = [
    { href: social.github, label: "GitHub", icon: Github },
    { href: social.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: social.fiverr, label: "Fiverr", icon: Briefcase },
    { href: social.facebook, label: "Facebook", icon: Facebook },
    { href: social.instagram, label: "Instagram", icon: Instagram },
    { href: `mailto:${email}`, label: "Email", icon: Mail },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-4 align-items-start">
          <div className="col-lg-6">
            <div className="footer-brand">UMER LAKHANY</div>
            <div className="footer-role">Full-Stack Web Developer</div>
            <div className="footer-stack">React.js · Next.js · Node.js · TypeScript · Python</div>
          </div>
          <div className="col-lg-6 d-flex justify-content-lg-end align-items-start">
            <div className="footer-links">
              {links.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="icon-btn"
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Umer Lakhany</span>
          <span>All rights reserved.</span>
          <Link href="/contact" className="link-arrow">
            Let&apos;s work together
          </Link>
        </div>
      </div>
    </footer>
  );
}
