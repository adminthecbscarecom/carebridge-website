import React from "react";
import { company } from "../data/company.js";
import { navLinks } from "../data/navLinks.js";

export function Header({ menuOpen, setMenuOpen }) {
  const close = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {menuOpen && (
        <button type="button" className="nav-backdrop" aria-label="Close menu" onClick={close} />
      )}
      <div className="container header-inner">
        <a href="#home" className="logo" aria-label="CareBridge Solutions Home" onClick={close}>
          <img
            src="/images/logo-full.png"
            alt="CareBridge Solutions"
            width="200"
            height="48"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling?.classList.remove("logo-text--hidden");
            }}
          />
          <span className="logo-text logo-text--hidden">{company.shortName}</span>
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-label">{menuOpen ? "Close" : "Menu"}</span>
          <span className="nav-toggle-bars" aria-hidden="true" />
        </button>
        <nav id="site-nav" className={`site-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn--nav" onClick={close}>
            Request Care Services
          </a>
          <a href={`tel:${company.phoneHref}`} className="header-cta header-cta--mobile" onClick={close}>
            Call Now
          </a>
        </nav>
        <div className="header-actions">
          <a href="#contact" className="btn btn-primary btn--header">
            Request Care Services
          </a>
          <a href={`tel:${company.phoneHref}`} className="header-cta header-cta--desktop">
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
