import React from "react";
import { healthPlanIntro, healthPlans, healthPlanDisclaimer } from "../data/healthPlans.js";
import { HealthPlanCard } from "./HealthPlanCard.jsx";
import { AnimatedSection } from "./AnimatedSection.jsx";

export function HealthPlanStatus() {
  return (
    <section className="section section-white" id="health-plans" aria-labelledby="health-plans-heading">
      <div className="container">
        <AnimatedSection className="section-header copy-block copy-block--wide">
          <h2 id="health-plans-heading">Health Plan Participation Status</h2>
          <p>{healthPlanIntro}</p>
        </AnimatedSection>
        <AnimatedSection className="plan-status-grid reveal--stagger" stagger>
          {healthPlans.map((plan, index) => (
            <HealthPlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </AnimatedSection>
        <p className="section-footnote">{healthPlanDisclaimer}</p>
      </div>
    </section>
  );
}
