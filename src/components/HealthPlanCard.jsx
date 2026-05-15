import React from "react";

export function HealthPlanCard({ plan, index = 0 }) {
  return (
    <article className="plan-status-card" style={{ "--i": index }}>
      <div className="plan-status-card__top">
        <h3>{plan.name}</h3>
        <span className="status-badge active">{plan.status}</span>
      </div>
      <p>{plan.text}</p>
    </article>
  );
}
