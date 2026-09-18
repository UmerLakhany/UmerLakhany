"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { useScrolled } from "@/lib/hooks";

export default function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolled(16);
  const panelRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const closeMobileNav = () => {
    const el = panelRef.current;
    if (!el || typeof window === "undefined") return;
    const bootstrap = (window as unknown as { bootstrap?: { Offcanvas: { getOrCreateInstance: (e: Element) => { hide: () => void } } } }).bootstrap;
    bootstrap?.Offcanvas.getOrCreateInstance(el).hide();
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <Link href="/" className="brand-mark">
          <span className="brand-dot" aria-hidden="true" />
          UMER LAKHANY
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={isActive(link.href) ? "is-active" : ""}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-cta">
          <a href={siteConfig.resumeUrl} className="btn btn-outline-light btn-sm" download>
            <Download size={15} /> Download Resume
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Open menu"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileNav"
            aria-controls="mobileNav"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end mobile-nav-panel"
        tabIndex={-1}
        id="mobileNav"
        aria-labelledby="mobileNavLabel"
        ref={panelRef}
      >
        <div className="offcanvas-header">
          <span className="brand-mark" id="mobileNavLabel">
            <span className="brand-dot" aria-hidden="true" />
            UMER LAKHANY
          </span>
          <button
            type="button"
            className="nav-toggle"
            data-bs-dismiss="offcanvas"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
          <nav className="nav-links mb-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? "is-active" : ""}
                onClick={closeMobileNav}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a href={siteConfig.resumeUrl} className="btn btn-primary w-100" download>
            <Download size={16} /> Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
