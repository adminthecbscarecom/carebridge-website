import React from "react";
import { medicaidPrograms, medicaidDisclaimer } from "../data/medicaidPrograms.js";
import { AnimatedSection } from "./AnimatedSection.jsx";

export function MedicaidSupport() {
  return (
    <section className="section section-navy" id="medicaid-support" aria-labelledby="medicaid-heading">
      <div className="container">
        <AnimatedSection className="section-header copy-block">
          <h2 id="medicaid-heading">Support for Eligible Texas Medicaid Services</h2>
          <p>
            CareBridge helps eligible members and families understand personal assistance service
            pathways, including Medicaid attendant care and managed care requirements.
          </p>
        </AnimatedSection>
        <AnimatedSection className="program-grid reveal--stagger" stagger>
          {medicaidPrograms.map((program, index) => (
            <article className="program-card" key={program.title} style={{ "--i": index }}>
              <h3>{program.title}</h3>
              <p>{program.text}</p>
            </article>
          ))}
        </AnimatedSection>
        <p className="section-footnote section-footnote--light">{medicaidDisclaimer}</p>
      </div>
    </section>
  );
}
