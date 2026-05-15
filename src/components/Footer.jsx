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

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <p className="footer-brand-name">{company.name}</p>
          <p>{company.tagline}</p>
        </div>
        <div className="footer-col">
          <p className="footer-heading">Services</p>
          <ul>
            {footerServices.map((item) => (
              <li key={item}>
                <a href="#services">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <p className="footer-heading">Programs</p>
          <ul>
            {footerPrograms.map((item) => (
              <li key={item}>
                <a href="#medicaid-support">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col footer-col--contact">
          <p className="footer-heading">Contact</p>
          <p>
            Phone: <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
          </p>
          <p>Fax: {company.fax}</p>
          <p>
            Email: <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <p>
            Address:{" "}
            <a href={company.mapHref} target="_blank" rel="noopener noreferrer">
              {company.addressLine1}, {company.addressLine2}
            </a>
          </p>
        </div>
      </div>

      <div className="container footer-legal-block" id="privacy">
        <p className="footer-legal-main">
          {company.name} provides non-medical personal assistance services subject to eligibility,
          authorization, and applicable Medicaid program requirements.
        </p>
        <nav className="footer-legal-nav" aria-label="Legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#accessibility">Accessibility</a>
          <a href="#nondiscrimination">Non-Discrimination Notice</a>
          <a href="#contact">Contact</a>
        </nav>
        <div id="accessibility" className="footer-legal-detail">
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

      <div className="container footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {company.name}
        </p>
      </div>
    </footer>
  );
}
