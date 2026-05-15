import React, { useRef, useState } from "react";
import { useIsDesktopVideo, usePrefersReducedMotion } from "../hooks/useInView.js";

const POSTER = "/media/carebridge-home-care-hero-poster.jpg";
const FALLBACK = "/images/carebridge-caregiver-home-support.jpg";
const HERO_ALT = "Caregiver helping an older adult walk safely at home";

export function VideoHero() {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const showVideo = useIsDesktopVideo();
  const reducedMotion = usePrefersReducedMotion();

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  };

  const useStatic = !showVideo || reducedMotion;

  return (
    <div className="hero-media" aria-hidden="true">
      {useStatic ? (
        <img
          className="hero-media__image"
          src={POSTER}
          alt=""
          fetchPriority="high"
          onError={(e) => {
            e.currentTarget.src = FALLBACK;
          }}
        />
      ) : (
        <>
          <video
            ref={videoRef}
            className="hero-media__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={POSTER}
          >
            <source src="/media/carebridge-home-care-hero.webm" type="video/webm" />
            <source src="/media/carebridge-home-care-hero.mp4" type="video/mp4" />
          </video>
          <button
            type="button"
            className="hero-media__control"
            onClick={togglePlayback}
            aria-pressed={paused}
            aria-label={paused ? "Play background video" : "Pause background video"}
          >
            {paused ? "Play" : "Pause"}
          </button>
        </>
      )}
      <div className="hero-media__overlay" />
    </div>
  );
}
