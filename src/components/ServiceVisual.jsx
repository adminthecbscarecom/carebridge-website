import React, { useState } from "react";
import { ServiceIcon } from "./ServiceIcons.jsx";

export function ServiceVisual({ image, icon, alt }) {
  const [useIcon, setUseIcon] = useState(!image);

  if (useIcon) {
    return (
      <div className="service-card__visual service-card__visual--icon" role="img" aria-label={alt}>
        <ServiceIcon name={icon} />
      </div>
    );
  }

  return (
    <img
      className="service-card__visual"
      src={image}
      alt={alt}
      loading="lazy"
      onError={() => setUseIcon(true)}
    />
  );
}
