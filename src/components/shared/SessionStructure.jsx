// components/SessionStructure.tsx
import Image from "next/image";
import { Container } from "./Container";
import { asText } from "@prismicio/helpers";

// Reusable Card Component
function SessionCard({ session }) {
  return (
    <div className="bg-white shadow-md rounded-2xl px-6 py-6 hover:border-primary border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col items-center text-center">
      {/* Icon */}
      <div className="flex items-center justify-center rounded-full mb-6">
        <Image
          src={session.icon?.url}
          alt={session.icon?.alt || session.title}
          width={70}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {session.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {asText(session.description)}
      </p>
    </div>
  );
}

export default function SessionStructure({ session, sectionContent }) {
  return (
    <Container className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16">
      <div className="text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold mb-12">
          {sectionContent[0]?.title.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-primary">
            {sectionContent[0]?.title.split(" ").slice(-1)}
          </span>
        </h2>

        {/* Description */}
        

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {session.map((item, i) => (
            <SessionCard key={i} session={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
