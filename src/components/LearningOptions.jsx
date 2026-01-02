// import React from "react";
// import { HiComputerDesktop } from "react-icons/hi2";
// import { IoCalendarOutline, IoExtensionPuzzleOutline } from "react-icons/io5";
// import { RiPresentationFill } from "react-icons/ri";
// import Image from "next/image";
// import Link from "next/link";
// import { Container } from "./shared/Container";

// const learningOptions = [
//   {
//     image: "/Images/homepage/qot-laptop-quran.png",
//     title: "Qur’an Track",
//     description:
//       "Start from Noorani Qaida → Tajweed mastery → Fluent Qur’an recitation → Memorization (short surahs to full Hifz) → Ijāzah certification.",
//     link: "/courses/quran-track",
//   },
//   {
//     image: "/Images/homepage/qot-laptop-quran.png",
//     title: "Islamic Studies",
//     description:
//       "Kids: Daily Duʿās, Hadith, Stories of Prophets. Teens: Aqeedah, Seerah, Fiqh, Islamic History. Adults: Comparative Religion, Tafsīr, Hadith Studies.",
//     link: "/courses/islamic-studies",
//   },
//   {
//     image: "/Images/homepage/qot-laptop-quran.png",
//     title: "Arabic Track",
//     description:
//       "Learn the language of Qur’an step by step: Alphabet → Qur’anic Arabic → Salah & Duʿās → Conversation.",
//     link: "/courses/arabic-track",
//   },
//   {
//     image: "/Images/homepage/qot-laptop-quran.png",
//     title: "Specialized Tracks",
//     description:
//       "Programs for Reverts, Sisters, Ramadan intensives, Short Islamic Courses, Tafsīr studies, and Qirāʾāt.",
//     link: "/courses/specialized-tracks",
//   },
// ];

// const LearningOptions = () => {
//   return (
//     <Container className="relative py-12 sm:py-16">
//       <h1 className="text-xl sm:text-3xl text-center font-semibold leading-snug font-inter mb-12">
//         A Complete Qur’an & Islamic Learning{" "}
//         <span className="text-primary">Journey</span>
//       </h1>

//       <div className="grid md:grid-cols-2 gap-8">
//         {learningOptions.map((option, index) => (
//           <div
//             key={index}
//             className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
//           >
//             {/* Left Image */}
//             <div className="relative sm:w-1/3 w-full h-40 sm:h-auto">
//               <Image
//                 src={option.image}
//                 alt={option.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-t-xl sm:rounded-l-xl sm:rounded-t-none"
//               />
//             </div>

//             {/* Right Content */}
//             <div className="flex flex-col justify-center p-5 sm:w-2/3">
//               <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
//               <p className="text-sm text-gray-600 mb-3">{option.description}</p>

//               {/* Read More Link */}
//               <Link
//                 href={option.link}
//                 className="text-primary text-sm font-medium hover:underline inline-flex items-center"
//               >
//                 Read more →
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default LearningOptions;



import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./shared/Container";

const learningOptions = [
  {
    image: "/Images/homepage/Quranic Track.jpg",
    title: "Qur’an Track",
    description:
      "Start from Noorani Qaida → Tajweed mastery → Fluent Qur’an recitation → Memorization (short surahs to full Hifz) → Ijāzah certification.",
    link: "/quran-track",
  },
  {
    image: "/Images/homepage/Islamic Track.jpg",
    title: "Islamic Studies",
    description:
      "Kids: Daily Duʿās, Hadith, Stories of Prophets. Teens: Aqeedah, Seerah, Fiqh, Islamic History. Adults: Comparative Religion, Tafsīr, Hadith Studies.",
    link: "/islamic-studies",
  },
  {
    image: "/Images/homepage/Arabic Track.jpg",
    title: "Arabic Track",
    description:
      "Learn the language of Qur’an step by step: Alphabet → Pronunciation → Qur’anic Arabic → Grammer → Salah & Duʿās → Conversation.",
    link: "/arabic-track",
  },
  {
    image: "/Images/homepage/Specialized Track.jpg",
    title: "Specialized Tracks",
    description:
      "Programs for Reverts, Sisters, Ramadan intensives, basic islamic teachings, Short Islamic Courses, Tafsīr studies, Quran understanding, and Qirāʾāt.",
    link: "/specialized-tracks",
  },
];

const LearningOptions = () => {
  return (
    <Container className="relative py-12 sm:py-16">
      <h1 className="text-xl sm:text-3xl text-center font-semibold leading-snug font-inter mb-12">
        A Complete Qur’an & Islamic Learning{" "}
        <span className="text-primary">Journey</span>
      </h1>

      {/* Grid - 2 cols on desktop, 1 col on mobile */}
      <div className="grid md:grid-cols-2 gap-8">
        {learningOptions.map((option, index) => (
          <div
            key={index}
            className="flex flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
              <Image
                src={option.image}
                alt={option.title || 'ss'}
                width={150}
                height={150}
                objectFit="cover"
                className="rounded-t-xl sm:rounded-l-xl sm:rounded-t-none"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center p-5 sm:w-2/3">
              <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{option.description}</p> 
              
              <Link
                href={option.link}
                className="text-primary text-sm font-medium hover:underline inline-flex items-center"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default LearningOptions;
