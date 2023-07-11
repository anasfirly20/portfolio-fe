import React, { useState, useEffect } from "react";

// Miscellaneous
import { Blurhash } from "react-blurhash";

interface IProps {
  src: string,
  className?: string,
  classNameDiv?: string,
  hash: string,
  alt?: string
}

const LazyImageComponent = ({ src, className, classNameDiv, hash, alt } : IProps): React.JSX.Element => {
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
        className={`relative animate-pulse ${classNameDiv}`}
      >
        {/* <div className="absolute inset-0 bg-layer z-10" /> */}
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
