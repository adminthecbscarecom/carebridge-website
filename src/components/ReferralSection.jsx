import React from "react";
import { company } from "../data/company.js";
import { AnimatedSection } from "./AnimatedSection.jsx";

export function ReferralSection() {
  return (
    <section className="section section-teal-soft" id="referrals" aria-labelledby="referrals-heading">
      <div className="container referral-layout">
        <AnimatedSection className="copy-block">
          <h2 id="referrals-heading">For Referral Partners and Care Coordinators</h2>
          <p>
            CareBridge welcomes referrals from case managers, service coordinators, health plans,
            community organizations, discharge planners, and family representatives.
          </p>
          <p>
            Send a referral or contact our office to discuss whether CareBridge may be a fit for an
            eligible member&apos;s personal assistance needs.
          </p>
          <div className="btn-row">
            <a href="#contact" className="btn btn-primary">
              Submit a Referral
            </a>
            <a href={`tel:${company.phoneHref}`} className="btn btn-outline-dark">
              Call Provider Office
            </a>
          </div>
          <p className="referral-note">
            <strong>Please do not send urgent medical information through this website.</strong> For
            emergencies, call 911.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
