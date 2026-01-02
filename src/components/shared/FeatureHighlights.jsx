import Image from "next/image";
import Link from "next/link";

export default function FeatureHighlights({ scores, scoretitle }) {
  return (
    <section className="py-12 sm:py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-xl lg:text-3xl font-semibold font-inter">
          {scoretitle &&
            scoretitle[0]?.text.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-primary">
            {scoretitle && scoretitle[0]?.text.split(" ").slice(-1)}
          </span>
        </h2>
      </div>

      {/* Dynamic Sections */}
      <div className="space-y-12">
        {scores.map((item, index) => {
          const imageProps = {
            src: item.image?.url,
            alt: item.image?.alt || "Program image",
            width: 420,
            height: 350,
            className: "rounded",
            loading: index === 0 ? "eager" : "lazy", // first image loads eagerly for LCP
            priority: index === 0, // improves LCP
          };

          return (
            <div key={index}>
              {index % 2 === 0 ? (
                /* === Image Left, Content Right === */
                <div className="container mx-auto grid grid-col-reverse md:grid-cols-2 gap-2 md:gap-10 items-center">
                  {/* Image */}
                  <div className="w-full order-last md:order-first flex justify-center md:justify-start">
                    <Image {...imageProps} />
                  </div>

                  {/* Content */}
                  <div className="w-full bg-gray-50 px-6 py-12 md:py-16 shadow-sm order-first rounded-xl">
                    <h3 className="mb-4 text-xl font-bold text-center md:text-left">
                      {item.title?.[0]?.text}
                    </h3>
                    <p className="leading-relaxed text-center md:text-left mb-6">
                      {item.description?.[0]?.text}
                    </p>

                    {/* Dynamic Button */}
                    {item.btn?.url && (
                      <div className="text-center md:text-left">
                        <Link
                          href={item.btn.url}
                          className="inline-block hover:underline text-primary rounded-md hover:opacity-90 transition-all"
                        >
                          {item.btn.text || "Learn More"}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* === Content Left, Image Right === */
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                  <div className="w-full bg-gray-50 px-6 py-12 md:py-16 shadow-sm rounded-xl flex flex-col justify-center">
                    <h3 className="mb-4 text-xl font-bold text-center md:text-left">
                      {item.title?.[0]?.text}
                    </h3>
                    <p className="leading-relaxed text-center md:text-left mb-6">
                      {item.description?.[0]?.text}
                    </p>

                    {item.btn?.url && (
                      <div className="text-center md:text-left">
                        <Link
                          href={item.btn.url}
                          className="inline-block hover:underline text-primary rounded-md hover:opacity-90 transition-all"
                        >
                          {item.btn.text || "Learn More"}
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Image */}
                  <div className="w-full flex justify-center md:justify-end">
                    <Image {...imageProps} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Final CTA Button */}
      <div className="text-center mt-16">
        <Link
          href="/register-now"
          className="inline-block py-3 px-8 bg-gradient-to-r from-[#A86739] to-[#DC913F] text-white rounded-md hover:opacity-90 transition-all"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
