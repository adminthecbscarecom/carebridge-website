import React from "react";
import { AnimatedSection } from "./AnimatedSection.jsx";

export function AboutSection() {
  return (
    <section className="section section-cream" id="about" aria-labelledby="about-heading">
      <div className="container about-layout">
        <div className="about-layout__media">
          <img
            src="/images/carebridge-caregiver-home-support.jpg"
            alt="Caregiver helping an older adult walk safely at home"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/images/about-care.png";
            }}
          />
        </div>
        <AnimatedSection className="about-layout__copy">
          <h2 id="about-heading">About CareBridge Solutions</h2>
          <p>
            CareBridge Solutions LLC is a Texas-based personal assistance services provider focused on
            dependable, respectful, non-medical support at home. Our mission is to help eligible
            Medicaid members and families feel informed, supported, and confident throughout the care
            process.
          </p>
          <p>
            We believe good care starts with clear communication, reliable scheduling, proper
            documentation, and respect for each member&apos;s dignity and independence.
          </p>
          <blockquote className="mission-quote">
            <p>
              Our mission is to bridge families to trusted in-home support through compassionate
              service, compliance-focused operations, and dependable care coordination.
            </p>
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
}
