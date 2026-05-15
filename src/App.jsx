import React, { useEffect, useState } from "react";
import { company } from "./data/company.js";
import { navLinks } from "./data/navLinks.js";
import { services, servicesFootnote } from "./data/services.js";
import { healthPlans } from "./data/healthPlans.js";
import { values } from "./data/values.js";
import { careStories } from "./data/careStories.js";
import { howItWorksSteps } from "./data/howItWorks.js";
import { faqItems } from "./data/faq.js";
import { serviceAreaRegions, serviceAreaNote } from "./data/serviceArea.js";
import { HealthPlanCard } from "./components/HealthPlanCard.jsx";
import { IconCheck, IconLock, IconChevron } from "./components/Icons.jsx";

function Header({ menuOpen, setMenuOpen }) {
  const close = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="container header-inner">
        <a href="#home" className="logo" aria-label="CareBridge Solutions Home" onClick={close}>
          <img src="/images/logo-full.png" alt="CareBridge Solutions" width="200" height="48" />
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="nav-toggle-label">{menuOpen ? "Close menu" : "Menu"}</span>
          <span className="nav-toggle-bars" aria-hidden="true" />
        </button>
        <nav id="site-nav" className={`site-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a href={`tel:${company.phoneHref}`} className="header-cta header-cta--mobile" onClick={close}>
            Call {company.phone}
          </a>
        </nav>
        <a href={`tel:${company.phoneHref}`} className="header-cta header-cta--desktop">
          Call Now
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/images/logo-full.png" alt="" className="footer-logo" width="180" height="44" />
          <p>
            Compassionate, compliant Personal Assistance Services for eligible Texas Medicaid
            members and families in North Texas.
          </p>
        </div>
        <div className="footer-links">
          <p className="footer-heading">Explore</p>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-contact">
          <p className="footer-heading">Contact</p>
          <p>
            <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
          </p>
          <p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <p>
            {company.addressLine1}
            <br />
            {company.addressLine2}
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        <p>{company.tagline}</p>
        <p className="footer-legal">
          Health plan names and logos are trademarks of their respective owners. Display does not
          imply endorsement. Illustrative care stories are not client testimonials.
        </p>
      </div>
    </footer>
  );
}

function FaqItem({ item, open, onToggle }) {
  return (
    <div className={`faq-item${open ? " is-open" : ""}`}>
      <button type="button" className="faq-question" aria-expanded={open} onClick={onToggle}>
        <span>{item.question}</span>
        <IconChevron open={open} />
      </button>
      {open && <div className="faq-answer"><p>{item.answer}</p></div>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const trustItems = ["Licensed PAS provider", "Medicaid-focused care", "W-2 caregiver team"];

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-heading">
          <div className="hero-bg">
            <img src="/images/hero-care.png" alt="" role="presentation" fetchPriority="high" />
          </div>
          <div className="container hero-content">
            <div className="hero-panel">
              <p className="badge">Texas Medicaid · Personal Assistance Services</p>
              <h1 id="hero-heading">
                Dependable in-home support for Medicaid members—and peace of mind for families.
              </h1>
              <p className="hero-text">
                CareBridge Solutions LLC provides non-medical Personal Assistance Services across
                North Texas—focused on safety, dignity, clear communication, and reliable daily
                support at home.
              </p>
              <div className="btn-row">
                <a href="#referrals" className="btn btn-primary">
                  Request service information
                </a>
                <a href="#careers" className="btn btn-ghost">
                  Join our caregiver team
                </a>
              </div>
              <ul className="trust-row" aria-label="Trust highlights">
                {trustItems.map((item) => (
                  <li key={item}>
                    <IconCheck className="trust-icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-white" id="about">
          <div className="container about-grid">
            <div className="image-card">
              <img
                src="/images/about-care.png"
                alt="Caregiver assisting an older adult with meal preparation"
                loading="lazy"
              />
            </div>
            <div>
              <p className="section-label">Who We Are</p>
              <h2>A North Texas partner built for members, families, and care teams.</h2>
              <p>
                CareBridge Solutions LLC is a Texas-based agency providing non-medical Personal
                Assistance Services. We help eligible Medicaid members receive dependable in-home
                support while preserving dignity, safety, and independence.
              </p>
              <p>
                Our work centers on reliable W-2 caregivers, respectful communication, service
                coordination, and documentation practices aligned with Medicaid care expectations.
              </p>
              <div className="mission-vision">
                <article>
                  <h3>Our mission</h3>
                  <p>
                    To deliver compassionate, dependable, and respectful in-home support that helps
                    members live safely and comfortably in their own homes.
                  </p>
                </article>
                <article>
                  <h3>Our vision</h3>
                  <p>
                    To be a trusted community care partner known for dignity, reliability,
                    compliance, and meaningful support for families across North Texas.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-header">
              <p className="section-label">What We Do</p>
              <h2>Support built around daily living needs.</h2>
              <p>
                Non-medical services that help members follow their approved service plan and remain
                independent at home.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <img src={service.image} alt="" loading="lazy" />
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="section-footnote">{servicesFootnote}</p>
          </div>
        </section>

        <section className="section section-light" id="how-it-works">
          <div className="container">
            <div className="section-header">
              <p className="section-label">How It Works</p>
              <h2>From inquiry to ongoing support.</h2>
              <p>A clear path for referrals, families, and care coordinators.</p>
            </div>
            <ol className="steps-grid">
              {howItWorksSteps.map((step) => (
                <li className="step-card" key={step.step}>
                  <span className="step-number">{step.step}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="dark-section" id="referrals">
          <div className="container referral-grid">
            <div>
              <p className="section-label section-label-light">Referrals &amp; Inquiries</p>
              <h2>Refer a member or request service information.</h2>
              <p>
                We verify eligibility, authorization, service area, and payer requirements before
                services begin. Please do not send protected health information through unsecured
                messages.
              </p>
              <div className="btn-row">
                <a
                  href={`mailto:${company.email}?subject=CareBridge%20Referral%20Request`}
                  className="btn btn-secondary"
                >
                  Email referral request
                </a>
                <a href={`tel:${company.phoneHref}`} className="btn btn-dark-outline">
                  Call {company.phone}
                </a>
              </div>
              <div className="callout callout--dark">
                <IconLock className="callout-icon" />
                <p>
                  <strong>Privacy notice:</strong> For secure documents, use encrypted email or call
                  us to arrange a HIPAA-compliant transfer method.
                </p>
              </div>
            </div>
            <div className="referral-card">
              <h3>Helpful referral details</h3>
              <ul>
                <li>Member name and contact information</li>
                <li>Medicaid or health plan information</li>
                <li>Requested service type and location</li>
                <li>Case manager or authorization contact, if known</li>
                <li>Preferred start date and scheduling needs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-cream" id="values">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Our Values</p>
              <h2>The way we serve matters.</h2>
              <p>Principles that guide every visit, call, and care plan conversation.</p>
            </div>
            <ul className="values-list">
              {values.map((value) => (
                <li className="value-item" key={value.title}>
                  <IconCheck className="value-icon" />
                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section-white" id="plans">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Health Plans</p>
              <h2>Health plan participation &amp; credentialing</h2>
              <p>
                We coordinate with Texas Medicaid managed care organizations. Status labels are for
                general information only and do not constitute an endorsement.
              </p>
            </div>
            <div className="credential-grid">
              {healthPlans.map((plan) => (
                <HealthPlanCard key={plan.name} plan={plan} />
              ))}
            </div>
            <div className="callout">
              <p>
                <strong>Note:</strong> Credentialing statuses change over time. Contact us for the
                most current information. CareBridge does not guarantee service availability or
                authorization from any health plan.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="service-area">
          <div className="container service-area-wrap">
            <div>
              <p className="section-label">Service Area</p>
              <h2>Serving families across North Texas.</h2>
              <p>{serviceAreaNote}</p>
            </div>
            <ul className="area-list">
              {serviceAreaRegions.map((region) => (
                <li key={region}>{region}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section-white stories-section" id="stories">
          <div className="container">
            <div className="section-header section-header--center">
              <p className="section-label">Care Stories</p>
              <h2>Why in-home support matters</h2>
              <p>
                Care is more than a scheduled visit—it is dependable support that helps someone feel
                safe, respected, and less alone at home.
              </p>
            </div>
            <div className="callout callout--center">
              <p>
                <strong>Illustrative examples only.</strong> These stories reflect our purpose. They
                are not client testimonials and do not include protected health information.
              </p>
            </div>
            <div className="stories-layout">
              <div className="story-images">
                <img src="/images/community-care.png" alt="Community care gathering" loading="lazy" />
                <img src="/images/community-all-care.png" alt="Care team community event" loading="lazy" />
              </div>
              <div className="story-list">
                {careStories.map((story) => (
                  <article className="story-card" key={story.title}>
                    <h3>{story.title}</h3>
                    <p>{story.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-light" id="careers">
          <div className="container career-layout">
            <div>
              <p className="section-label">Careers</p>
              <h2>Build a career that matters—in your community.</h2>
              <p>
                We welcome motivated caregivers who want to make a difference. Our team provides
                non-medical Personal Assistance Services that help eligible members remain safe,
                comfortable, and independent at home.
              </p>
              <p>
                Caregivers may assist with personal care support, light household tasks, meal
                preparation, mobility support, reminders, companionship, and approved plan activities.
              </p>
              <div className="callout callout--success">
                <IconCheck className="callout-icon" />
                <p>
                  <strong>W-2 employee positions.</strong> Applicants complete screening, orientation,
                  training, competency checks, and ongoing compliance requirements before assignments.
                </p>
              </div>
              <div className="btn-row">
                <a
                  href={`mailto:${company.email}?subject=CareBridge%20Caregiver%20Application`}
                  className="btn btn-primary"
                >
                  Apply as a caregiver
                </a>
                <a href={`tel:${company.phoneHref}`} className="btn btn-outline-dark">
                  Ask about open roles
                </a>
              </div>
            </div>
            <aside className="career-aside">
              <img src="/images/care-collage.png" alt="Caregivers supporting members at home" loading="lazy" />
              <h3>Qualities we value</h3>
              <ul>
                <li>Compassionate and patient</li>
                <li>Reliable with attendance and communication</li>
                <li>Respectful of dignity and privacy</li>
                <li>Follows care instructions and documentation rules</li>
                <li>Committed to safe, professional service</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container faq-wrap">
            <div className="section-header">
              <p className="section-label">FAQ</p>
              <h2>Common questions</h2>
              <p>Quick answers for families, referrers, and caregiver applicants.</p>
            </div>
            <div className="faq-list">
              {faqItems.map((item, index) => (
                <FaqItem
                  key={item.question}
                  item={item}
                  open={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="section-label">Contact</p>
              <h2>We are here to help.</h2>
              <p>
                Reach us for referrals, service coordination, employment inquiries, or general
                business information.
              </p>
              <p className="contact-hours">
                <strong>Hours:</strong> {company.hours}
              </p>
            </div>
            <address className="contact-card">
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
                <span className="contact-label">Address</span>
                {company.addressLine1}
                <br />
                {company.addressLine2}
              </p>
            </address>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
