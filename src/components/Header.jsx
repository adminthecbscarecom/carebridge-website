import React, { useEffect, useState } from "react";
import { company } from "../data/company.js";
import { navLinks } from "../data/navLinks.js";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="container header-inner">
        <a href="#home" className="logo" aria-label="CareBridge Solutions Home">
          <span className="logo-shell">
            <img
              src="/images/logo-full.png"
              alt="CareBridge Solutions"
              width="160"
              height="38"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("logo-text--hidden");
              }}
            />
            <span className="logo-text logo-text--hidden">{company.shortName}</span>
          </span>
        </a>

        <nav className="site-nav site-nav--desktop" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions header-actions--desktop">
          <a href="#contact" className="btn btn-primary btn--header">
            Request Care Services
          </a>
          <a href={`tel:${company.phoneHref}`} className="header-cta">
            Call Now
          </a>
        </div>

        <a href={`tel:${company.phoneHref}`} className="header-cta header-cta--mobile">
          Call Now
        </a>
      </div>
    </header>
  );
}
