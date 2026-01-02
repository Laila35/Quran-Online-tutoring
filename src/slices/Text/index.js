import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TextSlice} TextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSlice>} TextProps
 * @type {import("react").FC<TextProps>}
 */
const Text = ({ slice }) => {
  return (
    <section
      className="max-w-4xl mx-auto px-4 py-6 prose prose-lg text-justify"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.text ? (
        <PrismicRichText
          className="text-justify"
          field={slice.primary.text}
          components={{
            heading1: ({ children }) => (
              <h1 className="text-4xl font-bold mb-4">{children}</h1>
            ),
            heading2: ({ children }) => (
              <h2 className="text-2xl font-bold mb-3">{children}</h2>
            ),
            heading3: ({ children }) => (
              <h3 className="text-xl font-semibold mb-2">{children}</h3>
            ),
            heading4: ({ children }) => (
              <h4 className="text-xl font-medium mb-2">{children}</h4>
            ),
            paragraph: ({ children }) => (
              <p className="mb-4 leading-relaxed">{children}</p>
            ),
            strong: ({ children }) => (
              <strong className="font-bold text-gray-900">{children}</strong>
            ),
            list: ({ children }) => (
              <ul className="list-disc list-inside pl-5 mb-4 space-y-2 px-2">
                {children}
              </ul>
            ),
            oList: ({ children }) => (
              <ol className="list-decimal list-inside pl-5 mb-4 space-y-2 px-2">
                {children}
              </ol>
            ),
            listItem: ({ children }) => <li>{children}</li>,
            oListItem: ({ children }) => <li>{children}</li>,
            hyperlink: ({ node, children }) => (
              <a
                href={node.data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {children}
              </a>
            ),
          }}
        />
      ) : (
        <p>No text available.</p>
      )}
    </section>
  );
};

export default Text;
