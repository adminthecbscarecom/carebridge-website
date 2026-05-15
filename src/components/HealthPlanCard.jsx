import React, { useState } from "react";

export function HealthPlanCard({ plan }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const isPending = plan.status.toLowerCase().includes("progress");

  return (
    <article className="credential-card">
      <div className="credential-top">
        <div className="credential-logo-wrap">
          {!logoFailed ? (
            <img
              src={plan.logo}
              alt={plan.logoAlt}
              className="credential-logo"
              loading="lazy"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <span className="credential-monogram" aria-hidden="true">
              {plan.short}
            </span>
          )}
        </div>
        <span className={`status-badge ${isPending ? "pending" : "active"}`}>{plan.status}</span>
      </div>
      <p className="credential-name">{plan.name}</p>
    </article>
  );
}
