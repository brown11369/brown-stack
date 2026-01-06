"use client";
import { CldImage } from "next-cloudinary";

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
const Image = ({ src, css, alt }) => {
  return (
    <CldImage
      src={src}
      className={css}
      alt={alt}
      crop={{
        type: "auto",
        source: true,
      }}
      fill
    />
  );
};

export default Image;
