import React from "react";
import { howItWorksSteps } from "../data/howItWorks.js";
import { AnimatedSection } from "./AnimatedSection.jsx";
import { useInView } from "../hooks/useInView.js";

export function HowItWorks() {
  const [timelineRef, timelineVisible] = useInView({ once: true });

  return (
    <section className="section section-cream" id="how-it-works" aria-labelledby="how-heading">
      <div className="container">
        <AnimatedSection className="section-header section-header--center">
          <h2 id="how-heading">Getting Started Is Simple</h2>
          <p>
            We help families understand the next step and coordinate services with care, clarity, and
            compliance.
          </p>
        </AnimatedSection>
        <ol
          ref={timelineRef}
          className={`steps-timeline reveal reveal--stagger${timelineVisible ? " reveal--visible" : ""}`}
        >
          {howItWorksSteps.map((step, index) => (
            <li className="step-card" key={step.step} style={{ "--i": index }}>
              <span className="step-card__number" aria-hidden="true">
                {step.step}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="section-cta-wrap section-cta-wrap--center">
          <a href="#contact" className="btn btn-primary">
            Start a Care Request
          </a>
        </p>
      </div>
    </section>
  );
}
