import React from "react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @type {import("react").FC<ImageProps>}
 */
const Image = ({ slice }) => {
  return (
    <section
      className="max-w-4xl mx-auto px-4 py-6"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.image ? (
        <div className="w-full flex justify-center">
          <PrismicNextImage
            field={slice.primary.image}
            className="rounded-lg shadow-md object-cover w-full max-h-[23rem]"
            alt={slice.primary.image.alt || "Blog image"}
          />
        </div>
      ) : (
        <p>No image available.</p>
      )}
    </section>
  );
};

export default Image;
