import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const company = {
  name: "CareBridge Solutions LLC",
  shortName: "CareBridge Solutions",
  tagline: "Reliable Texas Medicaid personal assistance services at home.",
  website: "https://www.thecbscare.com/",
  phone: "(214) 400-8755",
  phoneHref: "+12144008755",
  fax: "(817) 305-8994",
  email: "admin@thecbscare.com",
  addressLine1: "4200 South Fwy, Ste 2350",
  addressLine2: "Fort Worth, TX 76115",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=4200+South+Freeway+Suite+2350+Fort+Worth+TX+76115",
  hours: "Monday – Friday, 8:00 AM – 5:00 PM",
};

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#medicaid-support", label: "Medicaid Support" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#about", label: "About" },
  { href: "#referrals", label: "Referrals" },
  { href: "#contact", label: "Contact" },
];

const trustBadges = [
  {
    title: "Licensed Care Provider",
    text: "Non-medical personal assistance services for eligible Texas Medicaid members.",
    icon: "shield",
  },
  {
    title: "Medicaid-Focused Support",
    text: "Guidance for families navigating Medicaid-based personal assistance services.",
    icon: "heart",
  },
  {
    title: "EVV-Supported Documentation",
    text: "Covered visits are documented through applicable Electronic Visit Verification workflows.",
    icon: "check",
  },
  {
    title: "Texas Communication",
    text: "Responsive support for members, family representatives, case managers, and referral partners.",
    icon: "location",
  },
];

const whoWeHelp = [
  {
    title: "Older Adults",
    text: "Support for daily routines, personal care, meals, and safe movement at home.",
  },
  {
    title: "Adults with Disabilities",
    text: "Dependable attendant support that helps members maintain comfort, dignity, and independence.",
  },
  {
    title: "Children and Young Adults",
    text: "Support for eligible members under applicable Medicaid programs and authorization requirements.",
  },
  {
    title: "Family Caregivers",
    text: "Clear communication and reliable scheduling to help families feel supported.",
  },
];

const services = [
  {
    title: "Personal Care Assistance",
    image: "/images/personal-care-assistance_1.png",
    imageAlt: "Caregiver assisting an older adult with safe daily support at home",
    text: "Help with bathing, dressing, grooming, toileting, and other approved personal care tasks.",
  },
  {
    title: "Mobility and Transfer Support",
    image: "/images/mobility-support.png",
    imageAlt: "Caregiver supporting an older adult using a walker at home",
    text: "Assistance with safe movement around the home, transfers, and positioning support within the approved care plan.",
  },
  {
    title: "Meal Preparation",
    image: "/images/meal-preparation.png",
    imageAlt: "Caregiver helping an older adult prepare a meal at home",
    text: "Support with preparing simple meals and maintaining daily nutrition routines.",
  },
  {
    title: "Light Housekeeping",
    image: "/images/light-housekeeping.png",
    imageAlt: "Clean home icon for light housekeeping support",
    text: "Help with approved household tasks related to the member’s health, safety, and daily living needs.",
  },
  {
    title: "Laundry and Linens",
    image: "/images/laundry-linens_1.png",
    imageAlt: "Caregiver and older adult folding laundry and linens at home",
    text: "Assistance with member-related laundry and basic home routines when included in the service plan.",
  },
  {
    title: "Attendant Support",
    image: "/images/attendant-support.png",
    imageAlt: "Caregiver and older adult sharing a warm moment at home",
    text: "Reliable non-medical support from trained staff following applicable Medicaid and agency requirements.",
  },
];

const servicesFootnote =
  "Services must be authorized and delivered within the member’s approved plan of care and applicable Medicaid program rules.";

const medicaidPrograms = [
  {
    title: "Personal Assistance Services",
    text: "Non-medical support for approved daily living and attendant care needs.",
  },
  {
    title: "PHC / FC / CAS",
    text: "Support for eligible Primary Home Care, Family Care, and Community Attendant Services members.",
  },
  {
    title: "STAR+PLUS",
    text: "Support for eligible adults receiving long-term services and supports through Medicaid managed care.",
  },
  {
    title: "STAR Kids",
    text: "Support for eligible children and young adults when services are authorized through applicable Medicaid programs.",
  },
  {
    title: "EVV-Supported Services",
    text: "CareBridge follows applicable Electronic Visit Verification requirements for covered services.",
  },
];

const howItWorksSteps = [
  {
    step: "1",
    title: "Contact CareBridge",
    text: "Call us or submit a request so we can understand the support needed.",
  },
  {
    step: "2",
    title: "Review Eligibility and Authorization",
    text: "We review basic program information and explain what documentation or authorization may be required.",
  },
  {
    step: "3",
    title: "Coordinate the Care Plan",
    text: "CareBridge works with the member, family, representative, and applicable program requirements to prepare for service.",
  },
  {
    step: "4",
    title: "Begin In-Home Support",
    text: "Approved services begin with trained staff, clear scheduling, and EVV-supported visit documentation.",
  },
];

const whyChooseFeatures = [
  "Licensed Texas personal assistance services provider",
  "Medicaid-focused service coordination",
  "EVV-supported visit documentation",
  "Clear communication with families and representatives",
  "Trained W-2 staff",
  "Respectful, non-discriminatory service",
  "Texas care coordination",
  "Documentation-focused operations",
];

const healthPlanIntro =
  "CareBridge Solutions works with participating Texas Medicaid health plans for eligible members receiving personal assistance services. Participation, eligibility, authorization, covered services, and credentialing status may vary by plan, service area, and member circumstances.";

const healthPlans = [
  {
    name: "Aetna Better Health of Texas",
    status: "Active Agreement",
    text: "CareBridge supports eligible members according to plan requirements, service area rules, member eligibility, authorization, claims rules, and ongoing credentialing requirements.",
  },
  {
    name: "Cook Children’s Health Plan",
    status: "Active Agreement",
    text: "CareBridge support depends on applicable lines of business, member eligibility, authorization, service area, plan participation, and operational readiness.",
  },
  {
    name: "Superior HealthPlan",
    status: "Active Agreement",
    text: "CareBridge support is subject to member eligibility verification, prior authorization when required, credentialing status, system activation, and EVV-supported service documentation.",
  },
  {
    name: "UnitedHealthcare Community Plan of Texas",
    status: "Active Agreement",
    text: "CareBridge participation is governed by applicable agreement terms, effective date, eligibility verification, authorization requirements, and plan-specific administrative rules.",
  },
  {
    name: "Texas Children’s Health Plan",
    status: "Active Agreement",
    text: "CareBridge may support eligible members in accordance with applicable agreement terms, service authorization requirements, member eligibility verification, and ongoing compliance obligations.",
  },
];

const healthPlanDisclaimer =
  "Health plan participation, member eligibility, authorization, covered services, and credentialing status must be verified before services begin. Listing a health plan does not guarantee eligibility, approval, service availability, or service hours. Participation and credentialing status may change.";

const faqItems = [
  {
    question: "What does CareBridge Solutions provide?",
    answer:
      "CareBridge provides non-medical personal assistance services for eligible Medicaid members who need help with approved daily living and attendant care needs.",
  },
  {
    question: "Is CareBridge a medical home health agency?",
    answer:
      "CareBridge provides Personal Assistance Services. We are not skilled nursing, emergency care, or hospital-level medical care.",
  },
  {
    question: "Do I need Medicaid authorization?",
    answer:
      "Many services require eligibility verification, authorization, and an approved service plan. CareBridge can help explain next steps.",
  },
  {
    question: "Can family members contact CareBridge?",
    answer:
      "Yes. Members, family representatives, case managers, and referral partners may contact CareBridge to discuss possible services.",
  },
  {
    question: "Does CareBridge use EVV?",
    answer:
      "CareBridge follows applicable Electronic Visit Verification requirements for covered services.",
  },
  {
    question: "Can I send private medical information through the website?",
    answer:
      "Please avoid sending sensitive medical information through the general website form. A CareBridge team member can provide instructions for appropriate next steps.",
  },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

function useInView({ once = true, threshold = 0.12 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setInView(true);
      return undefined;
    }

    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold, reducedMotion]);

  return [ref, inView || reducedMotion];
}

function Icon({ name, className = "", decorative = true }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": decorative ? "true" : undefined,
    role: decorative ? undefined : "img",
  };

  const strokeProps = {
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    shield: (
      <svg {...props}>
        <path {...strokeProps} d="M12 3.2 5.3 5.7v5.4c0 4.3 2.8 8.2 6.7 9.6 3.9-1.4 6.7-5.3 6.7-9.6V5.7L12 3.2Z" />
        <path {...strokeProps} d="m8.8 12.2 2.1 2.1 4.5-5" />
      </svg>
    ),
    heart: (
      <svg {...props}>
        <path {...strokeProps} d="M20.8 8.6c0 5.1-8.8 10.2-8.8 10.2S3.2 13.7 3.2 8.6A4.5 4.5 0 0 1 11 5.5l1 1 1-1a4.5 4.5 0 0 1 7.8 3.1Z" />
      </svg>
    ),
    check: (
      <svg {...props}>
        <path {...strokeProps} d="M20 6 9 17l-5-5" />
      </svg>
    ),
    location: (
      <svg {...props}>
        <path {...strokeProps} d="M12 21s7-5.2 7-11.1a7 7 0 1 0-14 0C5 15.8 12 21 12 21Z" />
        <path {...strokeProps} d="M12 12.2a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z" />
      </svg>
    ),
    home: (
      <svg {...props}>
        <path {...strokeProps} d="m3 11.5 9-7.3 9 7.3" />
        <path {...strokeProps} d="M5.5 10.5V20h13v-9.5" />
        <path {...strokeProps} d="M9.5 20v-5.8h5V20" />
      </svg>
    ),
    phone: (
      <svg {...props}>
        <path {...strokeProps} d="M6.6 3.8 8.8 3c.7-.2 1.5.1 1.8.8l1 2.4c.2.6.1 1.3-.4 1.8L10 9.1a11.4 11.4 0 0 0 5 5l1.1-1.2c.5-.5 1.2-.6 1.8-.4l2.4 1c.7.3 1 1.1.8 1.8l-.8 2.2c-.2.7-.8 1.1-1.5 1.1A15.4 15.4 0 0 1 5.5 5.3c0-.7.4-1.3 1.1-1.5Z" />
      </svg>
    ),
    mail: (
      <svg {...props}>
        <path {...strokeProps} d="M4 6.5h16v11H4z" />
        <path {...strokeProps} d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    ),
    clock: (
      <svg {...props}>
        <circle {...strokeProps} cx="12" cy="12" r="8.5" />
        <path {...strokeProps} d="M12 7.5V12l3.1 2" />
      </svg>
    ),
    sparkle: (
      <svg {...props}>
        <path {...strokeProps} d="M12 3.5 13.8 9l5.7 1.2-5.7 1.2L12 17l-1.8-5.6-5.7-1.2L10.2 9 12 3.5Z" />
        <path {...strokeProps} d="m18 15 .8 2.3 2.2.7-2.2.7L18 22l-.8-2.3-2.2-.7 2.2-.7L18 15Z" />
      </svg>
    ),
    chevron: (
      <svg {...props}>
        <path {...strokeProps} d="m6 9 6 6 6-6" />
      </svg>
    ),
  };

  return icons[name] || icons.check;
}

function AnimatedSection({ children, className = "", id }) {
  const [ref, inView] = useInView();

  return (
    <section id={id} ref={ref} className={`${className} reveal ${inView ? "reveal--visible" : ""}`}>
      {children}
    </section>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="logo" href="#top" aria-label={`${company.name} home`}>
          <img src="/images/logo-header.png" alt={company.name} />
        </a>

        <nav className="site-nav site-nav--desktop" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions header-actions--desktop">
          <a className="btn btn-outline-dark btn--header" href="#contact">
            Request Care Services
          </a>
          <a className="header-cta" href={`tel:${company.phoneHref}`} aria-label={`Call ${company.name}`}>
            <Icon name="phone" className="btn-icon" />
            Call Now
          </a>
        </div>

        <a className="header-cta header-cta--mobile" href={`tel:${company.phoneHref}`} aria-label={`Call ${company.name}`}>
          <Icon name="phone" className="btn-icon" />
          Call Now
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        <img className="hero-media__image" src="/images/hero-care.png" alt="" />
        <div className="hero-media__overlay" />
      </div>

      <div className="container hero-content">
        <div className="hero-copy hero-copy--animate">
          <span className="hero-eyebrow">Texas Medicaid Personal Assistance Services</span>
          <h1>Warm, dependable in-home support for eligible Texas Medicaid members.</h1>
          <p className="hero-lead">
            CareBridge Solutions LLC provides non-medical personal assistance services that help members with approved daily living needs while supporting family communication, documentation, and Medicaid program requirements.
          </p>
          <p className="hero-trust">
            Licensed Texas Personal Assistance Services provider · Medicaid-focused support · EVV-supported documentation
          </p>
          <div className="btn-row">
            <a className="btn btn-primary" href={`tel:${company.phoneHref}`}>
              Call {company.phone}
            </a>
            <a className="btn btn-secondary-light" href="#contact">
              Request Services
            </a>
          </div>
          <p className="hero-disclaimer">
            Eligibility, authorization, health plan participation, credentialing status, and service availability must be verified before services begin.
          </p>
        </div>
      </div>
    </section>
  );
}

function TrustBadges() {
  return (
    <AnimatedSection className="section section-white" id="trust">
      <div className="container">
        <div className="trust-grid reveal--stagger">
          {trustBadges.map((badge, index) => (
            <article className="trust-card" style={{ "--i": index }} key={badge.title}>
              <Icon name={badge.icon} className="trust-card__icon" />
              <h3>{badge.title}</h3>
              <p>{badge.text}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function WhoWeHelp() {
  return (
    <AnimatedSection className="section section-cream" id="who-we-help">
      <div className="container">
        <div className="section-header copy-block">
          <span className="section-kicker">Who We Help</span>
          <h2>Support built around dignity, safety, and daily life at home.</h2>
          <p className="long-copy">
            CareBridge supports eligible members and families who need reliable help with approved non-medical daily living needs. Our role is to coordinate clearly, document carefully, and provide respectful assistance in the home.
          </p>
          <p className="section-local">Serving families across Texas.</p>
        </div>

        <div className="card-grid card-grid--four reveal--stagger">
          {whoWeHelp.map((item, index) => (
            <article className="info-card" style={{ "--i": index }} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function ServiceVisual({ service }) {
  if (service.image) {
    return <img className="service-card__visual" src={service.image} alt={service.imageAlt} loading="lazy" />;
  }

  return (
    <div className="service-card__visual service-card__visual--icon" aria-label={service.imageAlt}>
      <Icon name={service.icon || "home"} className="service-icon" decorative={false} />
    </div>
  );
}

function ServicesGrid() {
  return (
    <AnimatedSection className="section section-white" id="services">
      <div className="container">
        <div className="section-header copy-block">
          <span className="section-kicker">Services</span>
          <h2>Personal assistance services for approved daily living needs.</h2>
          <p className="long-copy">
            Our services are non-medical and must match the member’s approved plan of care, eligibility, authorization, and applicable Texas Medicaid program requirements.
          </p>
        </div>

        <div className="service-grid reveal--stagger">
          {services.map((service, index) => (
            <article className="service-card" style={{ "--i": index }} key={service.title}>
              <ServiceVisual service={service} />
              <div className="service-card__body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="section-footnote long-copy">{servicesFootnote}</p>
      </div>
    </AnimatedSection>
  );
}

function MedicaidSupport() {
  return (
    <AnimatedSection className="section section-navy" id="medicaid-support">
      <div className="container">
        <div className="section-header copy-block--wide">
          <span className="section-kicker section-kicker--light">Medicaid Support</span>
          <h2>Focused on Texas Medicaid personal assistance programs.</h2>
          <p className="long-copy">
            CareBridge coordinates non-medical personal assistance services for eligible members when program requirements, eligibility, authorization, service area, and health plan participation are verified.
          </p>
        </div>

        <div className="program-grid reveal--stagger">
          {medicaidPrograms.map((program, index) => (
            <article className="program-card" style={{ "--i": index }} key={program.title}>
              <h3>{program.title}</h3>
              <p>{program.text}</p>
            </article>
          ))}
        </div>

        <p className="section-footnote section-footnote--light long-copy">
          Program availability, eligibility, authorization, and plan participation may vary. Contact CareBridge to discuss next steps.
        </p>
      </div>
    </AnimatedSection>
  );
}

function HowItWorks() {
  return (
    <AnimatedSection className="section section-cream" id="how-it-works">
      <div className="container">
        <div className="section-header section-header--center copy-block">
          <span className="section-kicker">How It Works</span>
          <h2>A clear path from first call to approved in-home support.</h2>
          <p className="long-copy">
            CareBridge helps members, families, representatives, and referral partners understand the next step without overpromising eligibility, approval, or service hours.
          </p>
        </div>

        <ol className="steps-timeline reveal--stagger">
          {howItWorksSteps.map((item, index) => (
            <li className="step-card" style={{ "--i": index }} key={item.step}>
              <span className="step-card__number">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </AnimatedSection>
  );
}

function WhyChooseCareBridge() {
  return (
    <AnimatedSection className="section section-white" id="why-carebridge">
      <div className="container why-grid">
        <div className="copy-block why-copy">
          <span className="section-kicker">Why CareBridge</span>
          <h2>Premium communication with practical Medicaid discipline.</h2>
          <p className="long-copy">
            Families deserve warm, reliable support. Medicaid programs also require accurate eligibility checks, authorization awareness, visit documentation, and respectful coordination. CareBridge is built around both needs.
          </p>
          <p className="long-copy">
            Our approach is steady, documentation-focused, and designed to support members at home while helping families understand what must be verified before services begin.
          </p>
        </div>

        <ul className="feature-list reveal--stagger" aria-label="CareBridge service strengths">
          {whyChooseFeatures.map((feature, index) => (
            <li style={{ "--i": index }} key={feature}>
              <Icon name="check" className="feature-list__icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}

function HealthPlanStatus() {
  return (
    <AnimatedSection className="section section-teal-soft" id="health-plans">
      <div className="container">
        <div className="section-header copy-block--wide">
          <span className="section-kicker">Health Plan Status</span>
          <h2>Health Plan Participation Status</h2>
          <p className="long-copy">{healthPlanIntro}</p>
        </div>

        <div className="plan-status-grid reveal--stagger">
          {healthPlans.map((plan, index) => (
            <article className="plan-status-card" style={{ "--i": index }} key={plan.name}>
              <div className="plan-status-card__top">
                <span className="status-badge">{plan.status}</span>
                <h3>{plan.name}</h3>
              </div>
              <p>{plan.text}</p>
            </article>
          ))}
        </div>

        <p className="section-footnote long-copy">{healthPlanDisclaimer}</p>
      </div>
    </AnimatedSection>
  );
}

function ReferralSection() {
  return (
    <AnimatedSection className="section section-navy" id="referrals">
      <div className="container referral-layout">
        <span className="section-kicker section-kicker--light">Referrals</span>
        <h2>Referral partners can contact CareBridge for next-step coordination.</h2>
        <p className="long-copy">
          Case managers, discharge planners, community organizations, and family representatives may contact CareBridge to discuss possible personal assistance services for eligible Medicaid members.
        </p>
        <p className="referral-note long-copy">
          Please do not submit protected health information through a general website form. CareBridge can provide appropriate instructions for next steps.
        </p>
        <div className="btn-row">
          <a className="btn btn-secondary-light" href={`mailto:${company.email}`}>
            Email CareBridge
          </a>
          <a className="btn btn-secondary-light" href={`tel:${company.phoneHref}`}>
            Call {company.phone}
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

function AboutSection() {
  return (
    <AnimatedSection className="section section-white" id="about">
      <div className="container about-layout">
        <div className="about-layout__media">
          <img src="/images/community-care.png" alt="Caregiver and older adult receiving warm in-home support" loading="lazy" />
        </div>

        <div className="copy-block about-copy">
          <span className="section-kicker">About CareBridge</span>
          <h2>Built to bridge families, care needs, and Medicaid requirements.</h2>
          <p className="long-copy">
            CareBridge Solutions LLC provides non-medical personal assistance services for eligible Texas Medicaid members. Our work centers on respectful in-home support, clear communication, and documentation-conscious operations.
          </p>
          <p className="long-copy">
            We serve members and families with a calm, professional approach that keeps expectations clear. Eligibility, authorization, health plan participation, and service availability are verified before services begin.
          </p>

          <blockquote className="mission-quote">
            <p>“Care should feel personal, dependable, and clear from the first conversation”</p>
          </blockquote>
        </div>
      </div>
    </AnimatedSection>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent("CareBridge Website Service Request");
    const message = encodeURIComponent(
      [
        "CareBridge Solutions website request",
        "",
        `Name: ${form.get("name") || ""}`,
        `Phone: ${form.get("phone") || ""}`,
        `Email: ${form.get("email") || ""}`,
        `Best time to contact: ${form.get("bestTime") || ""}`,
        `Relationship: ${form.get("relationship") || ""}`,
        "",
        "General message:",
        form.get("message") || "",
        "",
        "Privacy acknowledgement: The sender was instructed not to include sensitive medical information in this general website form.",
      ].join("\n")
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${message}`;
    setStatus("A draft email should open on your device. Please review it before sending and avoid including sensitive medical information.");
  };

  return (
    <AnimatedSection className="section section-cream" id="contact">
      <div className="container contact-layout">
        <div>
          <div className="section-header copy-block contact-copy">
            <span className="section-kicker">Contact</span>
            <h2>Talk with CareBridge about possible services.</h2>
            <p className="long-copy">
              Call CareBridge or send a general request. A team member can explain next steps for eligibility, authorization, and health plan verification.
            </p>
          </div>

          <form className="intake-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" autoComplete="name" required />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" required />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" />
              </div>

              <div className="form-field">
                <label htmlFor="bestTime">Best time to contact</label>
                <select id="bestTime" name="bestTime" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="relationship">I am a</label>
              <select id="relationship" name="relationship" defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option>Medicaid member</option>
                <option>Family member or representative</option>
                <option>Case manager or referral partner</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">General message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Please keep this general. Do not include detailed medical information, Medicaid IDs, Social Security numbers, or other sensitive information."
              />
            </div>

            <div className="form-field form-field--checkbox">
              <input id="privacy" type="checkbox" required />
              <label htmlFor="privacy">
                I understand this general website form should not be used to send sensitive medical information or private identifiers.
              </label>
            </div>

            <button className="btn btn-primary btn--full" type="submit">
              Request Contact
            </button>

            <p className="form-privacy long-copy">
              For urgent or emergency needs, call 911 or seek immediate medical assistance. CareBridge does not provide emergency services.
            </p>

            {status ? <p className="form-success">{status}</p> : null}
          </form>
        </div>

        <address className="contact-info">
          <h3 className="contact-info__title">CareBridge Solutions LLC</h3>

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
            <span className="contact-label">Hours</span>
            {company.hours}
          </p>

          <p>
            <span className="contact-label">Office</span>
            <a className="address-block" href={company.mapHref} target="_blank" rel="noreferrer">
              <span className="address-line">{company.addressLine1}</span>
              <span className="address-line">{company.addressLine2}</span>
            </a>
          </p>
        </address>
      </div>
    </AnimatedSection>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <AnimatedSection className="section section-white" id="faq">
      <div className="container faq-container">
        <div className="section-header section-header--center copy-block">
          <span className="section-kicker">FAQ</span>
          <h2>Common Questions</h2>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = open === index;
            return (
              <article className="faq-item" key={item.question}>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <Icon name="chevron" className={`icon-chevron ${isOpen ? "icon-chevron--open" : ""}`} />
                </button>
                {isOpen ? (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <p className="footer-brand-name">{company.name}</p>
            <p className="footer-tagline long-copy">
              {company.tagline} CareBridge provides non-medical Texas Medicaid-focused personal assistance services for eligible members.
            </p>
          </div>

          <div className="footer-col">
            <p className="footer-heading">Explore</p>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-heading">Contact</p>
            <ul>
              <li>
                <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
              </li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>{company.hours}</li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-heading">Office</p>
            <a className="address-block" href={company.mapHref} target="_blank" rel="noreferrer">
              <span className="address-line">{company.addressLine1}</span>
              <span className="address-line">{company.addressLine2}</span>
            </a>
          </div>
        </div>

        <div className="footer-legal-block">
          <p className="footer-legal-main long-copy">
            CareBridge Solutions LLC provides non-medical personal assistance services. Eligibility, authorization, covered services, service hours, health plan participation, credentialing status, and service availability must be verified before services begin. This website does not guarantee Medicaid eligibility, approval, or authorization.
          </p>

          <div className="footer-legal-details">
            <div className="footer-legal-detail">
              <h3>Privacy Notice</h3>
              <p>
                Please do not submit sensitive medical information, Medicaid IDs, Social Security numbers, banking information, or private identifiers through general website forms.
              </p>
            </div>

            <div className="footer-legal-detail">
              <h3>Emergency Notice</h3>
              <p>
                CareBridge does not provide emergency medical services. For urgent or life-threatening emergencies, call 911.
              </p>
            </div>
          </div>
        </div>

        <p className="footer-bottom">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta" role="navigation" aria-label="Quick contact actions">
      <a className="mobile-sticky-cta__btn mobile-sticky-cta__btn--call" href={`tel:${company.phoneHref}`}>
        <Icon name="phone" className="btn-icon" />
        Call
      </a>
      <a className="mobile-sticky-cta__btn mobile-sticky-cta__btn--request" href="#contact">
        Request Services
      </a>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <HeroSection />
        <TrustBadges />
        <WhoWeHelp />
        <ServicesGrid />
        <MedicaidSupport />
        <HowItWorks />
        <WhyChooseCareBridge />
        <HealthPlanStatus />
        <ReferralSection />
        <AboutSection />
        <ContactForm />
        <FAQSection />
      </main>

      <Footer />
      <MobileStickyCTA />
    </>
  );
}
