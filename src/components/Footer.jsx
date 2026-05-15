import React from "react";
import { company } from "../data/company.js";

const footerServices = [
  "Personal Care Assistance",
  "Attendant Support",
  "Meal Preparation",
  "Mobility Support",
  "Light Housekeeping",
];

const footerPrograms = [
  "Personal Assistance Services",
  "PHC / FC / CAS",
  "STAR+PLUS",
  "STAR Kids",
  "EVV-Supported Services",
];

function AddressBlock({ className = "" }) {
  return (
    <a
      href={company.mapHref}
      className={`address-block ${className}`.trim()}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="address-line">{company.addressLine1}</span>
      <span className="address-line">{company.addressLine2}</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col footer-col--brand">
          <p className="footer-brand-name">{company.name}</p>
          <p className="footer-tagline">{company.tagline}</p>
          <p className="footer-service-area">{company.serviceArea}</p>
        </div>

        <nav className="footer-col" aria-label="Footer services">
          <p className="footer-heading">Services</p>
          <ul>
            {footerServices.map((item) => (
              <li key={item}>
                <a href="#services">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Footer programs">
          <p className="footer-heading">Programs</p>
          <ul>
            {footerPrograms.map((item) => (
              <li key={item}>
                <a href="#medicaid-support">{item}</a>
              </li>
            ))}
            <li>
              <a href="#health-plans">Health Plan Status</a>
            </li>
          </ul>
        </nav>

        <div className="footer-col footer-col--contact">
          <p className="footer-heading">Contact</p>
          <p>
            <span className="footer-contact-label">Phone</span>
            <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
          </p>
          <p>
            <span className="footer-contact-label">Fax</span>
            <span>{company.fax}</span>
          </p>
          <p>
            <span className="footer-contact-label">Email</span>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <p className="footer-address-wrap">
            <span className="footer-address-label">Address</span>
            <AddressBlock />
          </p>
        </div>
      </div>

      <div className="container footer-legal-block" id="privacy">
        <p className="footer-legal-main copy-block--wide">
          {company.name} provides non-medical personal assistance services subject to eligibility,
          authorization, health plan participation, credentialing status, and applicable Medicaid
          program requirements.
        </p>

        <nav className="footer-legal-nav" aria-label="Legal">
          <a href="#privacy">Privacy Notice</a>
          <a href="#accessibility">Accessibility</a>
          <a href="#nondiscrimination">Non-Discrimination Notice</a>
          <a href="#contact">Contact</a>
        </nav>

        <div id="accessibility" className="footer-legal-details">
          <div className="footer-legal-detail">
            <h3>Accessibility</h3>
            <p>
              CareBridge is committed to providing a website that is accessible to the widest possible
              audience. If you experience difficulty accessing content, please contact us at{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a> or{" "}
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>.
            </p>
          </div>

          <div id="nondiscrimination" className="footer-legal-detail">
            <h3>Non-Discrimination Notice</h3>
            <p>
              CareBridge Solutions LLC does not discriminate on the basis of race, color, national
              origin, sex, age, or disability. We provide respectful, non-discriminatory service in
              accordance with applicable requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
