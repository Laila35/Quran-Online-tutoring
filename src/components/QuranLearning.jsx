// app/components/StepProcess.tsx
import Image from "next/image";
import { Container } from "./shared/Container";
const steps = [
  {
    id: 1,
    title: "Book a Free Trial Class",
    description: [
      "Book a 30-minute free trial session.",
      "Meet your teacher (male or female).",
      "Experience Qur’an recitation and Islamic Studies teaching style.",
    ],
    icon: "/Images/works/_Free Trial Class.jpg",
  },
  { 
    id: 2,
    title: "Placement Assessment",
    description: [
      "Teacher assesses student’s Qur’an level (Qaida, Tajweed, memorization, or fluency).",
      "For kids & teens → age-appropriate Islamic Studies assessment.",
      "For adults & reverts → personalized discussion of learning goals.",
    ],
    icon: "/Images/works/Placement Assessment.jpg",
  },
  {
    id: 3,
    title: "Choose Your Learning Path",
    description: [
      "Qur’an-Only Program.",
      "Qur’an + Islamic Studies Program (5–10 min in every session).",
      "Flexibility to change pathway later as needed.",
    ],
    icon: "/Images/works/Choose Your Learning Path.jpg",
  },
  {
    id: 4,
    title: "Start Your Classes",
    description: [
      "One-to-one online sessions.",
      "Choose 30 minutes (standard) or 1 hour (for Hifz/advanced).",
      "Flexible scheduling available, choose between 2–7 days per week.",
    ],
    icon: "/Images/works/Start Your Classes.jpg",
  },
  {
    id: 5,
    title: "Progress Tracking",
    description: [
      "Monthly reports for parents & students.",
      "Teachers share strengths, improvements & next steps.",
      "Certification at key milestones (Qaida, Tajweed, Hifz)."
    ],
    icon: "/Images/works/Progress Tracking.jpg",
  },
];

export default function QuranLearning() {
  return (
    <Container className="bg-gray-50  py-12 sm-py-16">
      <div className="max-w-6xl mx-auto ">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
          Simple, Professional <span className="text-primary">Onboarding</span>
        </h2>

        {/* Steps Layout */}
        <div className="grid lg:grid-cols-3 gap-10">
          {steps.slice(0, 3).map((step) => (
            <Card key={step.id} step={step} />
          ))}
        </div>

        {/* Last 2 cards centered */}
        <div className="mt-10 flex flex-wrap justify-center gap-10">
          {steps.slice(3).map((step) => (
            <div key={step.id} className="w-full md:w-1/2 lg:w-1/3 max-w-sm">
              <Card step={step} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

// ✅ Extracted Card Component for clean code
function Card({ step }) {
  return (
    <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center hover:shadow-lg hover:border hover:border-primary transition-shadow duration-300">
      {/* Icon */}
      <div className="flex items-center justify-center w-20 h-20 rounded-full shadow mb-6">
        <Image src={step.icon} alt={step.title} width={60} height={40} />
      </div>
 
      {/* Title */}
      <h3 className="text-md font-semibold text-gray-800 mb-4">
        {step.id}. {step.title}
      </h3>

      {/* Description */}
      <ul className="list-inside text-gray-600 space-y-2 text-sm text-left">
        {step.description.map((desc, idx) => (
          <li key={idx}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}


 








// import React from "react"; 
// import FeatureHighlights from "./shared/FeatureHighlights";
// import { Container } from "./shared/Container";
// const QuranLearning = () => {

//   const scoretitle = [
//   {
//     type: "paragraph",
//     text: "Simple, Professional Onboarding",
//     spans: [],
//     direction: "ltr",
//   },
// ];

// const scores = [
//   {
//     title: [
//       {
//         type: "heading3",
//         text: "Book a Free Trial Class ",
//         spans: [],
//       },
//     ],
//     image: {
//       url: "/Images/homepage/Home_Bookss.svg",
//       alt: "Map test preparation services",
//     },
//     description: [
//       {
//         type: "paragraph",
//         text:
//           "Experience our teaching before you commit.",
//         spans: [],
//       },
//     ],
//   },
//   {
//     title: [
//       {
//         type: "heading3",
//         text: "Placement Test",
//         spans: [],
//       },
//     ],
//     image: {
//       url: "/Images/homepage/Home_Placement Test.jpg",
//       alt: "Online map practice test questions session",
//     },
//     description: [
//       {
//         type: "paragraph",
//         text:
//           "We assess Qur’an reading, Tajweed, and Islamic Studies level.",
//         spans: [],
//       },
//     ],
//   },
   
//   {
//     title: [
//       {
//         type: "heading3",
//         text: "Choose Your Path",
//         spans: [],
//       },
//     ],
//     image: {
//       url: "/Images/homepage/Home_Choose Your Path.jpg",
//       alt: "Effective online map test time management test practice",
//     },
//     description: [
//       {
//         type: "paragraph",
//         text:
//           "Qur’an-only or Qur’an + Islamic Studies.",
//         spans: [],
//       },
//     ],
//   },
//    {
//     title: [
//       {
//         type: "heading3",
//         text: "Start Classes",
//         spans: [],
//       },
//     ],
//     image: {
//       url: "/Images/homepage/Home_Start Classes-15.jpg",
//       alt: "Effective online map test time management test practice",
//     },
//     description: [
//       {
//         type: "paragraph",
//         text:
//           "Flexible scheduling, certified teachers, one-to-one learning.",
//         spans: [],
//       },
//     ],
//   },
//    {
//     title: [
//       {
//         type: "heading4",
//         text: "Track Progress ",
//         spans: [],
//       },
//     ],
//     image: {
//       url: "/Images/homepage/Home_Start Classes-16.jpg",
//       alt: "Effective online map test time management test practice",
//     },
//     description: [
//       {
//         type: "paragraph",
//         text:
//           "Monthly reports for parents and certificates at milestones.",
//         spans: [],
//       },
//     ],
//   },
// ];

//   return (

//     <Container>
//     <FeatureHighlights scores={scores} scoretitle={scoretitle}/> 
//     </Container>
//   );
// };

// export default QuranLearning;
