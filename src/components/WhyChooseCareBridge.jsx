import React from "react";
import { whyChooseFeatures } from "../data/whyChoose.js";
import { AnimatedSection } from "./AnimatedSection.jsx";
import { IconCheck } from "./Icons.jsx";

export function WhyChooseCareBridge() {
  return (
    <section className="section section-white" id="why-carebridge" aria-labelledby="why-heading">
      <div className="container why-grid">
        <AnimatedSection className="why-grid__copy">
          <h2 id="why-heading">Why Families Choose CareBridge</h2>
          <p>
            Families need more than a caregiver. They need a provider that communicates clearly,
            follows Medicaid requirements, and treats every member with dignity.
          </p>
        </AnimatedSection>
        <AnimatedSection className="why-grid__list reveal--stagger" stagger>
          <ul className="feature-list">
            {whyChooseFeatures.map((feature, index) => (
              <li key={feature} style={{ "--i": index }}>
                <IconCheck className="feature-list__icon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
