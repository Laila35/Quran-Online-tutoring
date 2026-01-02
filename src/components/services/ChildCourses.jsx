import Link from "next/link";
import Image from "next/image";
import { Container } from "../shared/Container";
import { asText } from "@prismicio/helpers";

export default function ChildCourses({ ctitle, course = [] }) {
  if (!Array.isArray(course) || course.length === 0) {
    return null;
  }

  const mappedCourses = course.map((c, i) => {
    const title = asText(c.title) || `Course ${i + 1}`;

    // Try to extract link from span
    const spanLink = c.title?.[0]?.spans?.find(span => span.type === "hyperlink");
    const href = spanLink?.data?.url || null; // set to null if no hyperlink

    return {
      href,
      title,
      image: c.image?.url || "/fallback.png",
      alt: c.image?.alt || title,
    };
  });

  const firstFour = mappedCourses.slice(0, 4);
  const lastTwo = mappedCourses.slice(4);

  const CourseCard = ({ item }) => {
    const isLinked = !!item.href;

    const cardClasses = `relative ${
      isLinked ? "group" : ""
    } block w-40 h-12 rounded-full border overflow-hidden shadow-sm ${
      isLinked ? "hover:shadow-md cursor-pointer" : "bg-gray-200 cursor-not-allowed"
    } transition duration-300`;

    const overlayClasses = `absolute inset-0 ${
      isLinked ? "bg-gradient-to-r from-[#A86739] to-[#DC913F] group-hover:bg-black/60" : "bg-gray-300"
    } transition-colors duration-300 z-10`;

    const textColor = isLinked ? "text-white" : "text-gray-600";

    const content = (
      <>
        <Image
          src={item.image}
          alt={item.alt  || 'Course Image'}
          fill
          sizes="100px"
          className={`object-cover transition-opacity duration-300 ${
            isLinked ? "opacity-0 group-hover:opacity-100" : "opacity-30"
          }`}
        />
        <div className={overlayClasses} />
        <div className="relative z-20 flex items-center justify-center h-full">
          <h3 className={`text-sm font-semibold text-center px-2 ${textColor}`}>
            {item.title}
          </h3>
        </div>
      </>
    );

    return isLinked ? (
      <Link href={item.href} className={cardClasses}>
        {content}
      </Link>
    ) : (
      <div className={cardClasses} title="No link available">
        {content}
      </div>
    );
  };

  return (
    <Container className="py-12 sm:py-16 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
        Explore Our Online  <span className="text-primary">Courses</span>
      </h2>

      {/* First 4 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 mb-12 justify-items-center">
        {firstFour.map((c, i) => (
          <CourseCard key={i} item={c} />
        ))}
      </div> 

      {/* Last 2 */}
      {lastTwo.length > 0 && (
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-6 sm:gap-12  mx-auto">
            {lastTwo.map((c, i) => (
              <CourseCard key={i} item={c} />
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}
