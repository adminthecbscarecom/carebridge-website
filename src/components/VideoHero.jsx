import React from "react";

const HERO_IMAGE = "/images/hero-care.png";

export function VideoHero() {
  return (
    <div className="hero-media" aria-hidden="true">
      <img className="hero-media__image" src={HERO_IMAGE} alt="" fetchPriority="high" />
      <div className="hero-media__overlay" />
    </div>
  );
}
