import React from "react"; 
import FeatureHighlights from "./FeatureHighlights";
import { Container } from "../../shared/Container";
const ChildFeatures = ({servicetitle,services_sections}) => { 
  const scoretitle = [
  {
    type: "paragraph",
    text: servicetitle?.[0]?.title || "",
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
  }));

  return (

    <Container>
    <FeatureHighlights scores={scores} scoretitle={scoretitle}/>
   
    </Container>
  );
};

export default ChildFeatures;
