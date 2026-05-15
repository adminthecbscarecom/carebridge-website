import React from "react";
import { whoWeHelp } from "../data/whoWeHelp.js";
import { AnimatedSection } from "./AnimatedSection.jsx";

export function WhoWeHelp() {
  return (
    <section className="section section-cream" id="who-we-help" aria-labelledby="who-heading">
      <div className="container">
        <AnimatedSection className="section-header">
          <h2 id="who-heading">Helping Families Find Reliable Support at Home</h2>
          <p>
            CareBridge supports eligible Medicaid members who need help with daily living activities,
            personal care routines, and safe support at home. We work with members, families,
            representatives, and referral partners to make the next step clear.
          </p>
          <p className="section-local">
            Serving families across Fort Worth, Arlington, Tarrant County, and the Dallas-Fort Worth
            area.
          </p>
        </AnimatedSection>
        <AnimatedSection className="card-grid card-grid--four reveal--stagger" stagger>
          {whoWeHelp.map((item, index) => (
            <article className="info-card" key={item.title} style={{ "--i": index }}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </AnimatedSection>
        <p className="section-cta-wrap">
          <a href="#contact" className="btn btn-primary">
            Talk to CareBridge
          </a>
        </p>
      </div>
    </section>
  );
}
