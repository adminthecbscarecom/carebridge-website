import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const company = {
  name: "CareBridge Solutions LLC",
  phone: "(214) 400-8755",
  phoneHref: "+12144008755",
  fax: "(817) 305-8994",
  email: "admin@thecbscare.com",
  addressLine1: "4200 SOUTH FWY STE 2350",
  addressLine2: "FORT WORTH, TX 76115",
};

const services = [
  {
    title: "Personal Assistance Services",
    image: "/images/daily-support.png",
    text: "Non-medical daily living support for eligible members who want to remain safe, comfortable, and independent at home.",
  },
  {
    title: "Daily Living Support",
    image: "/images/family-support.png",
    text: "Caregivers may assist with personal care support, light household tasks, meal preparation, reminders, mobility support, and companionship.",
  },
  {
    title: "Care Coordination",
    image: "/images/companionship.png",
    text: "We coordinate with members, families, case managers, and health plans to support authorized care and clear communication.",
  },
];

const healthPlans = [
  {
    name: "UnitedHealthcare",
    short: "UHC",
    status: "Active Agreement",
  },
  {
    name: "Cook Children's",
    short: "CCHP",
    status: "Active Agreement",
  },
  {
    name: "Aetna Better Health",
    short: "Aetna",
    status: "Active Agreement",
  },
  {
    name: "Superior HealthPlan",
    short: "Superior",
    status: "Active Agreement",
  },
  {
    name: "Texas Children’s Health Plan",
    short: "TCHP",
    status: "Active Agreement",
  },
];

const values = [
  "Compassion",
  "Reliability",
  "Dignity",
  "Accountability",
  "Clear Communication",
  "Compliance",
];

const careStories = [
  {
    title: "A safer morning routine",
    text: "Simple daily tasks can become stressful when a person needs support. A dependable caregiver can help create a safer, calmer start to the day while preserving dignity and independence.",
  },
  {
    title: "Helping families feel supported",
    text: "Families often balance caregiving with work, appointments, and daily responsibilities. CareBridge helps bridge that gap through dependable support and clear communication.",
  },
  {
    title: "Independence at home",
    text: "Home is where routines, memories, and comfort live. Personal assistance services can help eligible members remain in familiar surroundings with respectful daily support.",
  },
];

function Button({ href, children, variant = "primary" }) {
  return (
    <a href={href} className={`button ${variant}`}>
      {children}
    </a>
  );
}

function Logo() {
  return (
    <a href="#home" className="logo" aria-label="CareBridge Solutions Home">
      <img src="/images/logo-full.png" alt="CareBridge Solutions logo" />
    </a>
  );
}

function SectionHeader({ label, title, text, center = false }) {
  return (
    <div className={`section-header ${center ? "center" : ""}`}>
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  return (
    <div id="home">
      <header className="site-header">
        <div className="container header-inner">
          <Logo />

          <nav aria-label="Main navigation">
            <a href="#about">Who We Are</a>
            <a href="#services">Services</a>
            <a href="#plans">Health Plans</a>
            <a href="#stories">Stories</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </nav>

          <Button href={`tel:${company.phoneHref}`}>Call Now</Button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-bg" />
          <div className="container hero-content">
            <div className="hero-panel">
              <div className="badge">Texas Medicaid Personal Assistance Services</div>

              <h1>Compassionate in-home support for eligible Medicaid members and families.</h1>

              <p className="hero-text">
                CareBridge Solutions LLC provides non-medical personal assistance services focused
                on safety, dignity, communication, and dependable daily support at home.
              </p>

              <div className="button-row">
                <Button href="#referrals">Request Service Information</Button>
                <Button href="#careers" variant="outline">
                  Become a Caregiver
                </Button>
              </div>

              <div className="trust-row">
                <span>Licensed PAS Provider</span>
                <span>Medicaid-Focused Care</span>
                <span>W-2 Caregiver Team</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section white">
          <div className="container about-grid">
            <div className="image-card">
              <img src="/images/about-care.png" alt="Caregiver helping an older adult prepare a meal at home" />
            </div>

            <div>
              <p className="section-label">Who We Are</p>

              <h2>Built to support members, families, caregivers, and care teams.</h2>

              <p>
                CareBridge Solutions LLC is a Texas-based non-medical home care agency focused on
                Personal Assistance Services. We help eligible members receive dependable in-home
                support while maintaining dignity, safety, and independence.
              </p>

              <p>
                Our work is centered on reliable caregivers, clear communication, service
                coordination, and documentation standards expected in Medicaid care environments.
              </p>

              <div className="mission-vision">
                <div>
                  <h3>Our Mission</h3>
                  <p>
                    To provide compassionate, dependable, and respectful in-home support that helps
                    members live safely and comfortably in their own homes.
                  </p>
                </div>

                <div>
                  <h3>Our Vision</h3>
                  <p>
                    To become a trusted community care partner known for dignity, reliability,
                    compliance, and meaningful support for families across North Texas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section container">
          <SectionHeader
            label="What We Do"
            title="Support built around daily living needs."
            text="CareBridge provides non-medical support that helps members follow their approved service plan and remain independent at home."
          />

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <img src={service.image} alt={`${service.title} by CareBridge Solutions`} />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="referrals" className="dark-section">
          <div className="container referral-grid">
            <div>
              <p className="section-label light">Referrals</p>

              <h2>Send a referral or request service information.</h2>

              <p>
                CareBridge verifies eligibility, authorization requirements, service area, and
                payer requirements before services begin. Please do not send protected health
                information through unsecured messages.
              </p>

              <div className="button-row">
                <Button
                  href={`mailto:${company.email}?subject=CareBridge Referral Request`}
                  variant="secondary"
                >
                  Email Referral Request
                </Button>

                <Button href={`tel:${company.phoneHref}`} variant="dark-outline">
                  Call {company.phone}
                </Button>
              </div>
            </div>

            <div className="referral-card">
              <h3>Helpful referral details</h3>

              <ul>
                <li>Member name and contact information</li>
                <li>Medicaid or health plan information</li>
                <li>Requested service type and service area</li>
                <li>Case manager or authorization details, if available</li>
                <li>Preferred start date and scheduling needs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section light-band">
          <div className="container values-wrap">
            <SectionHeader
              label="Our Values"
              title="The way we serve matters."
              text="CareBridge is built around practical support, respectful service, reliable caregivers, and dependable communication."
            />

            <div className="value-grid">
              {values.map((value) => (
                <div className="value-pill" key={value}>
                  {value}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className="section container">
          <SectionHeader
            label="Health Plan Status"
            title="Health plan and credentialing status."
            text="CareBridge coordinates with Medicaid health plans and maintains credentialing activity for eligible services. Status labels are shown for general informational purposes."
          />

          <div className="credential-grid">
            {healthPlans.map((plan) => (
              <article className="credential-card" key={plan.name}>
                <div className="credential-top">
                  <h3>{plan.short}</h3>

                  <span
                    className={`status-badge ${
                      plan.status.includes("Progress") ? "pending" : "active"
                    }`}
                  >
                    {plan.status}
                  </span>
                </div>

                <p>{plan.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="stories" className="section white stories-section">
          <div className="container">
            <SectionHeader
              label="Why CareBridge Matters"
              title="Stories of care, dignity, and independence."
              text="These illustrative care stories reflect the purpose of CareBridge Solutions. They are not actual client testimonials and do not include protected health information."
              center
            />

            <div className="stories-layout">
              <div className="story-image">
                <img src="/images/community-care.png" alt="Community care moment with members, family, and caregivers" />
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

        <section id="careers" className="section careers-section">
          <div className="container career-card">
            <div>
              <p className="section-label">Careers</p>

              <h2>Join CareBridge as a caregiver.</h2>

              <p>
                CareBridge Solutions LLC is always looking for motivated, dependable caregivers who
                want to make a meaningful difference in the community. Our caregivers provide
                non-medical personal assistance services that help eligible members remain safe,
                comfortable, and independent at home.
              </p>

              <p>
                Caregivers may assist with daily living support such as personal care assistance,
                light household tasks, meal preparation, mobility support, reminders,
                companionship, and helping members follow their approved service plan.
              </p>

              <p className="careers-note">
                All caregiver positions are W-2 employee positions. Applicants must complete
                required screening, orientation, training, competency checks, and ongoing compliance
                requirements before receiving assignments.
              </p>

              <div className="button-row">
                <Button href={`mailto:${company.email}?subject=CareBridge Caregiver Application`}>
                  Apply to Become a Caregiver
                </Button>

                <Button href={`tel:${company.phoneHref}`} variant="outline">
                  Ask About Open Roles
                </Button>
              </div>
            </div>

            <aside className="career-box">
              <img src="/images/care-collage.png" alt="Caregivers supporting members in home care settings" />
              <h3>Caregiver qualities we value</h3>

              <ul>
                <li>Compassionate and patient</li>
                <li>Reliable with attendance and communication</li>
                <li>Respectful of client dignity and privacy</li>
                <li>Willing to follow care instructions and documentation rules</li>
                <li>Committed to safe, professional service</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <p className="section-label">Contact</p>

              <h2>Reach CareBridge Solutions LLC.</h2>

              <p>
                Contact us for referral questions, service coordination, employment inquiries, or
                general business information.
              </p>
            </div>

            <div className="contact-card">
              <p>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
              </p>

              <p>
                <strong>Fax:</strong> {company.fax}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </p>

              <p>
                <strong>Address:</strong>
                <br />
                {company.addressLine1}
                <br />
                {company.addressLine2}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} CareBridge Solutions LLC. All rights reserved.</p>
          <p>Texas Medicaid Personal Assistance Services</p>
        </div>
      </footer>
    </div>
  );
}

console.assert(company.email.includes("@"), "Company email should be valid-looking.");
console.assert(services.length === 3, "Expected three service cards.");
console.assert(healthPlans.length === 5, "Expected five health plan status cards.");
console.assert(values.includes("Compliance"), "Values should include Compliance.");
console.assert(company.addressLine1.includes("4200"), "Address should reflect Fort Worth location.");

createRoot(document.getElementById("root")).render(<App />);
