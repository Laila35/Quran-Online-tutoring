import Image from "next/image";
import { Container } from "../shared/Container";
import { asText } from "@prismicio/helpers";

export default function Resources({ heading, items }) {
  // heading comes as an array → grab the first item
  const title = heading?.[0]?.title || "";
  // const description = heading?.[0]?.description
  //   ? asText(heading[0].description)
  //   : "";

  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="py-12 sm:py-16"
    >
      <Container>
        <h2 className="mt-8 text-center font-display text-2xl sm:text-3xl font-semibold">
          {title.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-primary">{title.split(" ").slice(-1)}</span>
        </h2>
        {/* <p className="mt-4 text-center">{description}</p> */}
      </Container>

      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {items?.map((resource, i) => (
            <li
              key={i}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <Image
                  src={resource.image?.url}
                  alt={resource.image?.alt || resource.title || 'Resource Image'}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {asText(resource.description)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
