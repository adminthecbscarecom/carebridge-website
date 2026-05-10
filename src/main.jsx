import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const company = {
  name: "CareBridge Solutions LLC",
  phone: "(214) 400-8755",
  phoneHref: "+12144008755",
  fax: "(817) 305-8994",
  email: "admin@thecbscare.com",
  address: "1505 Misty Glen Trail, Apt 621, Arlington, TX 76011",
  license: "HCSSA #024033",
  npi: "NPI 1144015751",
  tpi: "TPI 5056061-01",
};

const services = [
  {
    icon: "♡",
    title: "Personal Assistance Services",
    text: "Non-medical support designed to help eligible members remain safe and independent at home.",
  },
  {
    icon: "👥",
    title: "PHC / FC / CAS Services",
    text: "Primary Home Care, Family Care, and Community Attendant Services delivered under Texas Medicaid requirements.",
  },
  {
    icon: "✓",
    title: "EVV-Compliant Care",
    text: "Visits are documented through Electronic Visit Verification standards and supported by required service records.",
  },
];

const plans = [
  "TMHP Medicaid Approved",
  "Texas Children’s Health Plan",
  "Superior HealthPlan",
  "Aetna Better Health of Texas",
  "Additional MCO credentialing in progress as applicable",
];

const compliance = [
  "Texas HCSSA Personal Assistance Services license",
  "Medicaid-certified non-medical home care agency",
  "HIPAA-conscious communications and record handling",
  "Monthly OIG exclusion checks for staff",
  "HHSC, TMHP, EVV, and MCO documentation standards",
  "Administrative and service records retained per required timelines",
];

function Button({ href, children, variant = "primary" }) {
  return <a href={href} className={`button ${variant}`}>{children}</a>;
}

function App() {
  return (
    <div>
      <header className="site-header">
        <div className="container header-inner">
          <div>
            <p className="brand">CareBridge Solutions</p>
            <p className="tagline">Texas Medicaid Personal Assistance Services</p>
          </div>
          <nav>
            <a href="#services">Services</a>
            <a href="#referrals">Referrals</a>
            <a href="#compliance">Compliance</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </nav>
          <Button href={`tel:${company.phoneHref}`}>Call Now</Button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="badge">Licensed Texas HCSSA PAS Provider • {company.license}</div>
              <h1>Compassionate in-home support for eligible Texas Medicaid members.</h1>
              <p className="hero-text">
                CareBridge Solutions LLC provides non-medical Personal Assistance Services with a focus on safety, dignity, reliable documentation, and coordinated care.
              </p>
              <div className="button-row">
                <Button href="#referrals">Start a Referral</Button>
                <Button href={`mailto:${company.email}`} variant="outline">Email CareBridge</Button>
              </div>
            </div>

            <div className="card provider-card">
              <div className="icon-dark">✓</div>
              <h2>Provider Snapshot</h2>
              <p><strong>Licensed:</strong> {company.license}</p>
              <p><strong>Identifiers:</strong> {company.npi} • {company.tpi}</p>
              <p><strong>Service Category:</strong> Personal Assistance Services</p>
              <p><strong>EVV Vendor:</strong> HHAeXchange</p>
              <p><strong>Service Regions:</strong> Texas Medicaid PHC/FC/CAS Regions 3 and 6</p>
            </div>
          </div>
        </section>

        <section id="services" className="section container">
          <p className="section-label">Services</p>
          <h2>Support built around daily living needs.</h2>
          <div className="cards-3">
            {services.map((service) => (
              <div className="card" key={service.title}>
                <div className="icon-light">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="referrals" className="dark-section">
          <div className="container referral-grid">
            <div>
              <p className="section-label light">Referrals</p>
              <h2>Send a referral or request service information.</h2>
              <p>
                CareBridge verifies eligibility, authorization requirements, service area, and payer requirements before services begin. Please do not send protected health information through an unsecured form.
              </p>
              <div className="button-row">
                <Button href={`mailto:${company.email}?subject=CareBridge Referral Request`} variant="secondary">Email Referral Request</Button>
                <Button href={`tel:${company.phoneHref}`} variant="dark-outline">Call {company.phone}</Button>
              </div>
            </div>
            <div className="referral-card">
              <h3>Referral checklist</h3>
              <ul>
                <li>Member name and contact information</li>
                <li>Medicaid or plan information</li>
                <li>Requested service type and service area</li>
                <li>Authorization or case manager details, if available</li>
                <li>Preferred start date and scheduling needs</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="compliance" className="section container compliance-grid">
          <div>
            <p className="section-label">Compliance</p>
            <h2>Credentialed, documented, and audit-ready operations.</h2>
            <p>
              CareBridge maintains required licensing, Medicaid enrollment, insurance coverage, EVV documentation, and operational oversight standards for non-medical home care services.
            </p>
          </div>
          <div className="compliance-list">
            {compliance.map((item) => <div className="mini-card" key={item}>✓ {item}</div>)}
          </div>
        </section>

        <section className="section white">
          <div className="container">
            <p className="section-label">Plans & Coordination</p>
            <h2>Payer relationships and managed care coordination.</h2>
            <div className="plan-grid">
              {plans.map((plan) => <div className="plan" key={plan}>{plan}</div>)}
            </div>
          </div>
        </section>

        <section id="careers" className="section container">
          <div className="card career-card">
            <div className="icon-light">▣</div>
            <div>
              <h2>Careers</h2>
              <p>
                CareBridge hires W-2 employees for attendant roles. Applicants must complete required screening, training, competency checks, and ongoing compliance requirements before assignment.
              </p>
              <Button href={`mailto:${company.email}?subject=CareBridge Employment Inquiry`}>Apply by Email</Button>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <p className="section-label">Contact</p>
              <h2>Reach CareBridge Solutions LLC.</h2>
              <p>For referrals, payer coordination, employment inquiries, or general questions, contact the administrative office.</p>
            </div>
            <div className="card contact-card">
              <p><strong>Phone:</strong> <a href={`tel:${company.phoneHref}`}>{company.phone}</a></p>
              <p><strong>Fax:</strong> {company.fax}</p>
              <p><strong>Email:</strong> <a href={`mailto:${company.email}`}>{company.email}</a></p>
              <p><strong>Address:</strong> {company.address}</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} CareBridge Solutions LLC. All rights reserved.</p>
          <p>{company.license} • {company.npi}</p>
        </div>
      </footer>
    </div>
  );
}

console.assert(company.phoneHref.startsWith("+1"), "Phone href should be E.164-like.");
console.assert(services.length === 3, "Expected three service cards.");
console.assert(compliance.some((item) => item.includes("HCSSA")), "Compliance should mention HCSSA.");
console.assert(plans.includes("TMHP Medicaid Approved"), "Plans should include TMHP Medicaid Approved.");
console.assert(company.email.includes("@"), "Company email should be valid-looking.");

createRoot(document.getElementById('root')).render(<App />);
