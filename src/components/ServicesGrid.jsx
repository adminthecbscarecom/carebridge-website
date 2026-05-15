import React from "react";
import { services, servicesFootnote } from "../data/services.js";
import { AnimatedSection } from "./AnimatedSection.jsx";
import { ServiceImage } from "./ServiceImage.jsx";

export function ServicesGrid() {
  return (
    <section className="section section-white" id="services" aria-labelledby="services-heading">
      <div className="container">
        <AnimatedSection className="section-header">
          <h2 id="services-heading">Personal Assistance Services Designed Around Daily Life</h2>
          <p>
            Our services focus on non-medical in-home assistance. CareBridge helps eligible members
            with practical daily support while following Medicaid, authorization, documentation, and
            EVV requirements.
          </p>
        </AnimatedSection>
        <AnimatedSection className="service-grid reveal--stagger" stagger>
          {services.map((service, index) => (
            <article className="service-card" key={service.title} style={{ "--i": index }}>
              <ServiceImage src={service.image} fallback={service.fallbackImage} alt={service.imageAlt} />
              <div className="service-card__body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </AnimatedSection>
        <p className="section-footnote">{servicesFootnote}</p>
      </div>
    </section>
  );
}
