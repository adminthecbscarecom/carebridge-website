import React from "react";
import { company } from "../data/company.js";
import { navLinks } from "../data/navLinks.js";

export function Header({ menuOpen, setMenuOpen }) {
  const close = () => setMenuOpen(false);
  const toggle = () => setMenuOpen((open) => !open);

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="container header-inner">
        <a href="#home" className="logo" aria-label="CareBridge Solutions Home" onClick={close}>
          <img
            src="/images/logo-full.png"
            alt="CareBridge Solutions"
            width="168"
            height="40"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling?.classList.remove("logo-text--hidden");
            }}
          />
          <span className="logo-text logo-text--hidden">{company.shortName}</span>
        </a>

        <nav className="site-nav site-nav--desktop" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-primary btn--header">
            Request Care Services
          </a>
          <a href={`tel:${company.phoneHref}`} className="header-cta">
            Call Now
          </a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={toggle}
        >
          <span className="nav-toggle-bars" aria-hidden="true" />
        </button>
      </div>

      {menuOpen && (
        <button type="button" className="nav-backdrop" aria-label="Close menu" onClick={close} />
      )}

      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu__head">
          <span className="mobile-menu__title">Menu</span>
          <button type="button" className="mobile-menu__close" onClick={close} aria-label="Close menu">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <nav className="mobile-menu__nav" aria-label="Mobile navigation links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__actions">
          <a href="#contact" className="btn btn-primary btn--full" onClick={close}>
            Request Care Services
          </a>
          <a href={`tel:${company.phoneHref}`} className="btn btn-outline-dark btn--full" onClick={close}>
            Call {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="mobile-menu__email" onClick={close}>
            {company.email}
          </a>
        </div>
      </div>
    </header>
  );
}
