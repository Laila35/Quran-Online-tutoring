import Image from "next/image";
import Link from "next/link";

 

export default function FeatureHighlights({ scores, scoretitle }) {
  return (
    <section className="py-12 sm:py-16">
      {/* ===== Section Title ===== */}
      <div className="text-center mb-12">
        <h2 className="text-xl lg:text-3xl font-semibold font-inter">
          {scoretitle && scoretitle[0]?.text.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-primary">
            {scoretitle && scoretitle[0]?.text.split(" ").slice(-1)}
          </span>
        </h2>
      </div>

      {/* ===== Dynamic Sections ===== */}
      <div className="space-y-12">
        {scores.map((item, index) => (
          <div key={index}>
            {index % 2 === 0 ? (
              // ===== Even Sections (Image Left) =====
              <div className="container mx-auto grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                {/* Image */}
                <div className="flex justify-center md:justify-start order-last md:order-first">
                  <Image
                    src={item.image.url}
                    alt={item.image.alt || "Section image"}
                    width={400}
                    height={350}
                    className="rounded-lg"
                  />
                </div>

                {/* Content */}
                <div className="bg-gray-50 px-6 py-10 rounded-lg shadow-sm order-first">
                  <h3 className="mb-4 text-xl font-bold text-slate-900 text-center md:text-left">
                    {item.title[0]?.text}
                  </h3>

                  {/* Render All Description Items */}
                  <ul className=" list-inside space-y-2 text-slate-700 text-sm leading-relaxed text-left">
                    {item.description?.map((desc, i) => (
                      <li key={i}>{desc.text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              // ===== Odd Sections (Image Right) =====
              <div className="container mx-auto grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                {/* Content */}
                <div className="bg-gray-50 px-6 py-10 rounded-lg shadow-sm">
                  <h3 className="mb-4 text-xl font-bold text-slate-900 text-center md:text-left">
                    {item.title[0]?.text}
                  </h3>

                  <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm leading-relaxed text-left">
                    {item.description?.map((desc, i) => (
                      <li key={i}>{desc.text}</li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="flex justify-center md:justify-end">
                  <Image
                    src={item.image.url}
                    alt={item.image.alt || "Section image"}
                    width={450}
                    height={350}
                    className="rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ===== Call-to-Action ===== */}
      <div className="text-center mt-16">
        <Link
          href="/register-now"
          className="inline-block py-3 px-8 bg-gradient-to-r from-[#A86739] to-[#DC913F] text-white rounded-sm hover:bg-secondary/90 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
