import React from "react";
import { company } from "../data/company.js";
import { IconPhone } from "./Icons.jsx";

export function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta" aria-label="Quick actions">
      <a href={`tel:${company.phoneHref}`} className="mobile-sticky-cta__btn mobile-sticky-cta__btn--call">
        <IconPhone />
        Call
      </a>
      <a href="#contact" className="mobile-sticky-cta__btn mobile-sticky-cta__btn--request">
        Request Services
      </a>
    </div>
  );
}
