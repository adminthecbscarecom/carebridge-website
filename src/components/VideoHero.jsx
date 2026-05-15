import React from "react";

const HERO_IMAGE = "/images/carebridge-caregiver-home-support.jpg";
const HERO_FALLBACK = "/images/hero-care.png";

export function VideoHero() {
  return (
    <div className="hero-media" aria-hidden="true">
      <img
        className="hero-media__image"
        src={HERO_IMAGE}
        alt=""
        fetchPriority="high"
        onError={(e) => {
          e.currentTarget.src = HERO_FALLBACK;
        }}
      />
      <div className="hero-media__overlay" />
    </div>
  );
}
