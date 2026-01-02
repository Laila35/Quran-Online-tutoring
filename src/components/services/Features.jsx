import React from "react";
import FeatureHighlights from "../shared/FeatureHighlights";
import { Container } from "../shared/Container";
import { asText } from "@prismicio/helpers";

export default function Features({ services_title, services_sections }) {
  // Convert title
  // console.log(services_sections)
  const scoretitle = [
    {
      type: "paragraph",
      text: services_title?.[0]?.title || "",
      spans: [],
      direction: "ltr",
    },
  ];

  // Map sections into FeatureHighlights format
  const scores = services_sections?.map((section) => ({
    title: [
      {
        type: "heading3",
        text: section.title,
        spans: [],
      },
    ],
    image: {
      url: section.image?.url,
      alt: section.image?.alt || section.title,
    },
    description: section.description, // keep raw rich text
    btn: section.btn
  }));

  return (
    <Container>
      <FeatureHighlights scores={scores} scoretitle={scoretitle} />
    </Container>
  );
}
