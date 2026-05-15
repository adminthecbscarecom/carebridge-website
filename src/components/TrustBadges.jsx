import React from "react";
import { trustBadges } from "../data/trustBadges.js";
import { AnimatedSection } from "./AnimatedSection.jsx";
import { IconCheck, IconShield } from "./Icons.jsx";

function TrustIcon({ type }) {
  if (type === "shield") return <IconShield className="trust-card__icon" />;
  return <IconCheck className="trust-card__icon" />;
}

export function TrustBadges() {
  return (
    <section className="section section-aqua" id="trust" aria-labelledby="trust-heading">
      <div className="container">
        <AnimatedSection className="section-header section-header--center">
          <h2 id="trust-heading">Trusted Support for Texas Medicaid Members</h2>
        </AnimatedSection>
        <AnimatedSection className="trust-grid reveal--stagger" stagger>
          {trustBadges.map((badge, index) => (
            <article className="trust-card" key={badge.title} style={{ "--i": index }}>
              <TrustIcon type={badge.icon} />
              <h3>{badge.title}</h3>
              <p>{badge.text}</p>
            </article>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
