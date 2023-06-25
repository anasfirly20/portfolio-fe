import React, { useState, useEffect } from "react";

// Miscellaneous
import { Blurhash } from "react-blurhash";

const LazyImageComponent = ({ src, className, classNameDiv, hash, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <React.Fragment>
      <div
        style={{ display: imageLoaded ? "none" : "inline" }}
        className={`animate-pulse ${classNameDiv}`}
      >
        <Blurhash
          hash={hash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        src={src}
        style={{ display: !imageLoaded ? "none" : "inline" }}
        className={className}
        alt={alt}
      />
    </React.Fragment>
  );
};

export default LazyImageComponent;
