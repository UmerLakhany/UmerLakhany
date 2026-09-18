import Link from "next/link";
import { Github, Linkedin, Mail, Briefcase, Facebook, Instagram, MapPin, ArrowUpRight } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const { social, email, location } = siteConfig;

  const socialLinks = [
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
        <div className="footer-top row gy-5">
          <div className="col-lg-5">
            <Link href="/" className="footer-brand">
              <span className="brand-dot" aria-hidden="true" />
              UMER LAKHANY
            </Link>
            <p className="footer-desc">{siteConfig.description}</p>
            <div className="footer-links">
              {socialLinks.map(({ href, label, icon: Icon }) => (
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

          <div className="col-lg-3 col-6">
            <div className="footer-heading">Quick Links</div>
            <ul className="footer-nav">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4 col-6">
            <div className="footer-heading">Get In Touch</div>
            <ul className="footer-contact">
              <li>
                <Mail size={16} />
                <a href={`mailto:${email}`}>{email}</a>
              </li>
              <li>
                <MapPin size={16} />
                <span>{location}</span>
              </li>
            </ul>
            <Link href="/contact" className="footer-cta">
              Let&apos;s work together <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {siteConfig.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
