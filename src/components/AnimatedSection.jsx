import React from "react";
import { useInView } from "../hooks/useInView.js";

export function AnimatedSection({
  children,
  className = "",
  as: Tag = "div",
  stagger = false,
  id,
  "aria-labelledby": ariaLabelledby,
}) {
  const [ref, inView] = useInView({ once: true });
  const classes = [
    "reveal",
    stagger ? "reveal--stagger" : "",
    inView ? "reveal--visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} id={id} aria-labelledby={ariaLabelledby}>
      {children}
    </Tag>
  );
}
