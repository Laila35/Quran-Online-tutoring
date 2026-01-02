import Image from "next/image";
import Link from "next/link";

const tracks = [
  {
    id: 1,
    title: "Qur’an Studies Track",
    description:
      "Learn to recite, memorize, and master the Qur’an step by step. From Noorani Qaida to advanced Ijāzah, students receive structured Tajweed training and recitation correction in one-on-one sessions.",
    items: [
      "Qaida Foundations",
      "Tajweed Practice",
      "Recitation with Fluency",
      "Hifz & Ijāzah Programs",
      "Optional: Qur’an + Islamic Studies",
    ],
    linkText: "Explore Qur’an Track",
    link: "/quran-track",
    image: "/2 (1).jpg",
  },
  {
    id: 2,
    title: "Islamic Studies Track",
    description:
      "Build faith, manners, and understanding through authentic Islamic learning. Designed by qualified scholars, this track covers Duʿās, ʿAqīdah, Fiqh, Seerah, and Tafsīr — customized for Kids, Teens, and Adults.",
    items: [
      "Level 1: Kids (4–7)",
      "Level 2: Kids (7–12)",
      "Level 3: Teens (13–18)",
      "Level 4: Adults (18+)",
    ],
    linkText: "Explore Islamic Studies Track",
    link: "/islamic-studies",
    image: "/2 (1).webp",
  },
  {
    id: 3,
    title: "Arabic Track",
    description:
      "Understand the language of the Qur’an — read, comprehend, and speak with clarity. Covers Arabic reading, grammar, vocabulary, and conversation skills for both Qur’anic and daily use.",
    items: [
      "Level 1: Arabic for Beginners",
      "Level 2: Qur’anic Arabic",
      "Level 3: Arabic for Salah & Duʿās",
      "Level 4: Arabic Conversation (optional)",
    ],
    linkText: "Explore Arabic Track",
    link: "/arabic-track",
    image: "/4.svg",
  },
  {
    id: 4,
    title: "Specialized Programs",
    description:
      "Tailored courses for unique learners and spiritual growth. Perfect for new Muslims, sisters seeking female teachers, or advanced Qur’anic study seekers.",
    items: [
      "Revert Program (Adults & Kids)",
      "Sisters Program",
      "Ramadan Courses",
      "Short Islamic Courses",
      "Advanced Tafsīr & Qirāʾāt",
    ],
    linkText: "Explore Specialized Tracks",
    link: "/specialized-tracks",
    image: "/2 (2).svg",
  },
];

export default function LearningTracks() {
  return (
    <section className="relative bg-gradient-to-b from-[#F8FCFD] to-white px-4 py-12 sm:px-[4.2rem] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(29,137,163,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Explore Our{" "}
            <span className="text-[#1D89A3]">Main Learning Programs</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our four core Qur’an and Islamic learning tracks —
            each guided by qualified teachers and tailored to your goals.
          </p>
        </div>

        {/* Tracks */}
        <div className="space-y-24">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className={`flex flex-col items-center md:items-stretch gap-10 md:gap-16 lg:gap-20 ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Image */}
              <div
                className={`md:w-1/2 w-full  flex ${
                  index % 2 === 1 ? "justify-end" : "justify-start"
                }`}
              >
                <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl ">
                  <Image
                    src={track.image}
                    alt={track.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain transition-transform duration-700 ease-in-out hover:scale-105"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="md:w-1/2 w-full flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {track.title}
                </h3>
                <p className="text-gray-700 mb-5 leading-relaxed">
                  {track.description}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                  {track.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <Link
                  href={track.link}
                  className="inline-flex items-center gap-2 text-[#1D89A3] hover:underline font-medium transition-all"
                >
                  {track.linkText} <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
