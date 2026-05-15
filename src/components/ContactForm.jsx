import React, { useState } from "react";
import { company } from "../data/company.js";
import { AnimatedSection } from "./AnimatedSection.jsx";

const ROLE_OPTIONS = [
  "Member",
  "Family member",
  "Case manager",
  "Referral partner",
  "Other",
];

// TODO: Connect this form to a secure, HIPAA-appropriate intake workflow before collecting sensitive member information.

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const lines = [
      `Name: ${data.get("fullName")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `I am a: ${data.get("role")}`,
      `Member ZIP: ${data.get("zip")}`,
      `Medicaid plan/program: ${data.get("program") || "Not provided"}`,
      `Support needed: ${data.get("supportType")}`,
      `Best time to contact: ${data.get("contactTime") || "Not provided"}`,
      "",
      `Message:`,
      `${data.get("message") || "—"}`,
    ];

    const body = encodeURIComponent(lines.join("\n"));
    const subject = encodeURIComponent("CareBridge Care Services Request");
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="section section-white" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-layout">
        <AnimatedSection className="contact-layout__form-wrap">
          <h2 id="contact-heading">Request Care Services</h2>
          <p>
            Complete the form below and a CareBridge team member will contact you about next steps.
          </p>

          {submitted ? (
            <p className="form-success" role="status">
              Your email app should open with your request. If it does not, please call{" "}
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>.
            </p>
          ) : (
            <form className="intake-form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="fullName">Full name</label>
                <input id="fullName" name="fullName" type="text" required autoComplete="name" />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="form-field">
                <label htmlFor="role">I am a</label>
                <select id="role" name="role" required defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  {ROLE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="zip">Member ZIP code</label>
                <input id="zip" name="zip" type="text" inputMode="numeric" required />
              </div>
              <div className="form-field">
                <label htmlFor="program">Medicaid plan or program, if known</label>
                <input id="program" name="program" type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="supportType">Type of support needed</label>
                <textarea id="supportType" name="supportType" rows={3} required />
              </div>
              <div className="form-field">
                <label htmlFor="contactTime">Best time to contact</label>
                <input id="contactTime" name="contactTime" type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} />
              </div>
              <div className="form-field form-field--checkbox">
                <input id="consent" name="consent" type="checkbox" required />
                <label htmlFor="consent">
                  By submitting this form, I agree that CareBridge Solutions LLC may contact me using
                  the information provided. I understand this form should not be used for emergencies
                  or urgent medical needs.
                </label>
              </div>
              <p className="form-privacy">
                Please do not include sensitive medical information in this form. For emergencies,
                call 911.
              </p>
              <button type="submit" className="btn btn-primary btn--full">
                Submit Request
              </button>
            </form>
          )}
        </AnimatedSection>

        <aside className="contact-layout__info">
          <h3 className="contact-info__title">{company.name}</h3>
          <address className="contact-info">
            <p>
              <span className="contact-label">Address</span>
              <a href={company.mapHref} target="_blank" rel="noopener noreferrer">
                {company.addressLine1}
                <br />
                {company.addressLine2}
              </a>
            </p>
            <p>
              <span className="contact-label">Phone</span>
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            </p>
            <p>
              <span className="contact-label">Fax</span>
              {company.fax}
            </p>
            <p>
              <span className="contact-label">Email</span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <p>
              <span className="contact-label">Office hours</span>
              {company.hours}
            </p>
          </address>
        </aside>
      </div>
    </section>
  );
}
