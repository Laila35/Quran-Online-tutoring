import Image from "next/image";
import { Container } from "./Container";

const features = [
  {
    name: "Certified male & female Qur’an teachers",
    description: "(Tajweed, Hifz, Islamic Studies).",
    icon: "/Images/homepage/Home_Certified male & female Qur’an teachers.jpg",
  },
  {
    name: "Flexible sessions",
    description: "30 minutes or 1 hour, 2–7 days per week.",
    icon: "/Images/homepage/Home_Flexible sessions.svg",
  },
  {
    name: "Qur’an-only",
    description: "Qur’an + Islamic Studies — your choice.",
    icon: "/Images/homepage/Home_Qur’an-only.svg",
  },
  {
    name: "One-to-one classes",
    description:
      "Personalized attention for kids, teens, adults, and reverts.",
    icon: "/Images/homepage/Home_One-to-one classes.svg",
  },
  {
    name: "Available globally",
    description: "USA, UK, Canada, Australia, Europe, Middle East.",
    icon: "/Images/homepage/Home_Available globally.svg",
  },
  {
    name: "Monthly reports & certificates",
    description: "Real progress, tracked professionally.",
    icon: "/Images/homepage/Home_Monthly reports & certificates.jpg",
  },
];

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for Quran Academy"
      className="py-12 sm:py-16 bg-gray-50"
    >
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl sm:text-3xl font-medium tracking-tight text-gray-900">
            Your Trusted Qur’an Academy{" "}
            <span className="text-primary">Worldwide.</span>
          </h2>
          <p className="mt-2 text-center font-inter text-gray-700">
            Parents and students around the world choose Quran Online Tutoring
            because we bring together Islamic authenticity, modern
            professionalism, and global accessibility. Whether it’s a 5-year-old
            beginning Noorani Qaida, a teen preparing for Hifz, or a revert
            learning Salah for the first time — our programs guide every learner
            with patience, clarity, and respect.
          </p>
        </div>

        {/* Features Grid */}
        <ul
          role="list"
          className="mx-auto mt-8 max-w-2xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8 hover:shadow-md transition-shadow duration-300 bg-white"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.name}
                  width={48}
                  height={48}
                  className="mx-auto"
                />
              </div>
              <h3 className="mt-6 font-semibold text-gray-900 text-center">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700 text-center">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
