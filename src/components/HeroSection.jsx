import React from "react";
import { company } from "../data/company.js";
import { VideoHero } from "./VideoHero.jsx";

export function HeroSection() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <VideoHero />
      <div className="container hero-content">
        <div className="hero-copy hero-copy--animate">
          <p className="hero-eyebrow">Texas Medicaid · Personal Assistance Services</p>
          <h1 id="hero-heading">Reliable Texas Medicaid Personal Assistance Services at Home</h1>
          <p className="hero-lead">
            CareBridge Solutions helps eligible Medicaid members receive dependable, non-medical
            in-home support with daily living, personal care, and attendant services.
          </p>
          <p className="hero-trust">
            Licensed Texas Personal Assistance Services provider supporting eligible Medicaid
            members.
          </p>
          <div className="btn-row">
            <a href="#contact" className="btn btn-primary">
              Request Care Services
            </a>
            <a href={`tel:${company.phoneHref}`} className="btn btn-secondary-light">
              Call {company.phone}
            </a>
          </div>
          <p className="hero-disclaimer">Eligibility, authorization, and plan rules may apply.</p>
        </div>
      </div>
    </section>
  );
}
