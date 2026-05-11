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
  { name: "UnitedHealthcare Community Plan of Texas", short: "UHC", status: "Credentialing in Progress" },
  { name: "Cook Children's Health Plan", short: "CCHP", status: "Credentialing in Progress" },
  { name: "Aetna Better Health of Texas", short: "Aetna", status: "Active Agreement" },
  { name: "Superior HealthPlan", short: "Superior", status: "Active Agreement" },
  { name: "Texas Children's Health Plan", short: "TCHP", status: "Active Agreement" },
];

const values = [
  "Compassion", "Reliability", "Dignity", "Accountability", "Clear Communication", "Compliance"
];

const careStories = [
  {
    title: "A safer morning routine",
    text: "For many members, the day begins with simple tasks that may no longer feel simple: getting dressed, preparing breakfast, moving safely through the home, or remembering the next step in a daily routine. A dependable caregiver can help turn a stressful morning into a safer, calmer start to the day.",
  },
  {
    title: "Helping families feel supported",
    text: "Families often carry the weight of caregiving while also managing work, appointments, transportation, and daily responsibilities. CareBridge helps bridge that gap by providing dependable personal assistance services, clear communication, and respectful support.",
  },
  {
    title: "Independence at home",
    text: "Home is where many people feel most comfortable. Personal assistance services can help eligible members continue living at home while receiving support with daily needs, routines, mobility, companionship, and approved service-plan activities.",
  },
  {
    title: "Small acts, meaningful impact",
    text: "Care is often found in small moments: a warm greeting, a safe transfer, a prepared meal, a clean living space, or simply taking time to listen. These moments can make a meaningful difference in comfort, confidence, and quality of life.",
  },
  {
    title: "A bridge between care and confidence",
    text: "The name CareBridge reflects our purpose: connecting members, families, caregivers, and care teams through dependable support. We help members feel seen, families feel informed, and caregivers understand the value of their work in the community.",
  },
];

function App() {
  return (
    <div id="home">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="logo" aria-label="CareBridge Solutions Home">
            <img src="/images/logo-full.png" alt="CareBridge Solutions logo" />
          </a>
          <nav aria-label="Main navigation">
            <a href="#about">Who We Are</a>
            <a href="#services">Services</a>
            <a href="#plans">Health Plans</a>
            <a href="#stories">Care Stories</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href={`tel:${company.phoneHref}`} className="header-cta">Call Now</a>
        </div>
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section className="hero" id="home">
          <div className="hero-bg" aria-hidden="true"></div>
          <div className="container hero-content">
            <div className="hero-panel">
              <div className="badge">Texas Medicaid Personal Assistance Services</div>
              <h1 id="hero-heading">Compassionate in-home support for eligible Medicaid members and families.</h1>
              <p className="hero-text">
                CareBridge Solutions LLC provides non-medical Personal Assistance Services focused
                on safety, dignity, communication, and dependable daily support at home.
              </p>
              <div className="btn-row">
                <a href="#referrals" className="btn btn-primary">Request Service Information</a>
                <a href="#careers" className="btn btn-outline">Become a Caregiver</a>
              </div>
              <div className="trust-row">
                <span>Licensed PAS Provider</span>
                <span>Medicaid-Focused Care</span>
                <span>W-2 Caregiver Team</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section className="section section-white" id="about">
          <div className="container about-grid">
            <div className="image-card">
              <img src="/images/about-care.png" alt="Caregiver assisting an older adult with meal preparation in a home kitchen" />
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

        {/* ===== SERVICES ===== */}
        <section className="section" id="services">
          <div className="container">
            <div className="section-header">
              <p className="section-label">What We Do</p>
              <h2>Support built around daily living needs.</h2>
              <p>
                CareBridge provides non-medical support that helps members follow their approved
                service plan and remain independent at home.
              </p>
            </div>
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
          </div>
        </section>

        {/* ===== REFERRALS ===== */}
        <section className="dark-section" id="referrals">
          <div className="container referral-grid">
            <div>
              <p className="section-label section-label-light">Referrals &amp; Inquiries</p>
              <h2>Send a referral or request service information.</h2>
              <p>
                CareBridge verifies eligibility, authorization requirements, service area, and
                payer requirements before services begin. Please do not send protected health
                information through unsecured messages.
              </p>
              <div className="btn-row">
                <a href={`mailto:${company.email}?subject=CareBridge%20Referral%20Request`} className="btn btn-secondary">
                  Email Referral Request
                </a>
                <a href={`tel:${company.phoneHref}`} className="btn btn-dark-outline">
                  Call {company.phone}
                </a>
              </div>
              <div className="referral-note">
                <strong>🔒 Privacy notice:</strong> For secure document submission, please use
                encrypted email or call us to arrange a HIPAA-compliant transfer method.
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

        {/* ===== VALUES ===== */}
        <section className="section section-light" id="values">
          <div className="container values-wrap">
            <div>
              <p className="section-label">Our Values</p>
              <h2>The way we serve matters.</h2>
              <p>
                CareBridge is built around practical support, respectful service, reliable
                caregivers, and dependable communication.
              </p>
            </div>
            <div className="value-grid">
              {values.map((value) => (
                <span className="value-pill" key={value}>{value}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== HEALTH PLANS ===== */}
        <section className="section" id="plans">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Health Plan Status</p>
              <h2>Health plan and credentialing status.</h2>
              <p>
                CareBridge coordinates with Medicaid health plans and maintains credentialing
                activity for eligible services. Status labels are shown for general informational
                purposes only and do not constitute an endorsement.
              </p>
            </div>
            <div className="credential-grid">
              {healthPlans.map((plan) => (
                <article className="credential-card" key={plan.name}>
                  <div className="credential-top">
                    <h3>{plan.short}</h3>
                    <span className={`status-badge ${plan.status.includes("Progress") ? "pending" : "active"}`}>
                      {plan.status}
                    </span>
                  </div>
                  <p>{plan.name}</p>
                </article>
              ))}
            </div>
            <div className="plan-disclaimer">
              ⚕️ <strong>Note:</strong> Credentialing statuses change over time. Contact us for the
              most current information. CareBridge does not guarantee service availability or
              authorization from any health plan.
            </div>
          </div>
        </section>

        {/* ===== CARE STORIES ===== */}
        <section className="section section-white stories-section" id="stories">
          <div className="container">
            <div className="section-header center">
              <p className="section-label">Care Stories</p>
              <h2>Why CareBridge Matters</h2>
              <p>
                At CareBridge Solutions, care is more than a scheduled visit. It is the small,
                dependable support that helps someone feel safe, respected, and less alone at home.
              </p>
            </div>
            <div className="story-disclaimer">
              <strong>📖 Illustrative stories:</strong> These are examples that reflect the purpose
              of CareBridge Solutions LLC. They are not actual client testimonials and do not include
              protected health information.
            </div>
            <div className="stories-layout">
              <div className="story-image">
                <img src="/images/community-care.png" alt="Community care gathering with members, family, and caregivers" />
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

        {/* ===== CAREERS ===== */}
        <section className="section careers-section" id="careers">
          <div className="container career-card">
            <div>
              <p className="section-label">Careers</p>
              <h2>Join CareBridge as a caregiver.</h2>
              <p>
                CareBridge Solutions LLC is always looking for motivated, dependable caregivers who
                want to make a meaningful difference in the community. Our caregivers provide
                non-medical Personal Assistance Services that help eligible members remain safe,
                comfortable, and independent at home.
              </p>
              <p>
                Caregivers may assist with daily living support such as personal care assistance,
                light household tasks, meal preparation, mobility support, reminders,
                companionship, and helping members follow their approved service plan.
              </p>
              <div className="careers-note">
                <strong>✅ W-2 employee positions.</strong> Applicants must complete required
                screening, orientation, training, competency checks, and ongoing compliance
                requirements before receiving assignments.
              </div>
              <div className="btn-row">
                <a href={`mailto:${company.email}?subject=CareBridge%20Caregiver%20Application`} className="btn btn-primary">
                  Apply to Become a Caregiver
                </a>
                <a href={`tel:${company.phoneHref}`} className="btn btn-outline">
                  Ask About Open Roles
                </a>
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

        {/* ===== CONTACT ===== */}
        <section className="section contact-section" id="contact">
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
              <p><strong>Phone:</strong> <a href={`tel:${company.phoneHref}`}>{company.phone}</a></p>
              <p><strong>Fax:</strong> {company.fax}</p>
              <p><strong>Email:</strong> <a href={`mailto:${company.email}`}>{company.email}</a></p>
              <p>
                <strong>Address:</strong><br />
                {company.addressLine1}<br />
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

createRoot(document.getElementById("root")).render(<App />);
