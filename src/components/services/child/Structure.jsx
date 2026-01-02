import { Container } from '../../shared/Container'  
import { StylizedImage } from '../../shared/StylizedImage'
import { PrismicRichText } from "@prismicio/react";

function Section({ title, image, children }) {
  return (
    <div className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-between lg:gap-x-8 xl:gap-x-20 flex-col-reverse sm:flex-row">
        
        {/* Image */}
        <div className="flex justify-center lg:w-1/2">
          <div className="w-[10rem] sm:w-[24rem] flex-none hidden sm:block">
            {image?.src ? (
              <StylizedImage {...image} className="justify-center sm:justify-start" />
            ) : (
              <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-gray-500 text-sm">No image available</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 lg:mt-0 lg:w-1/2">
          <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
            {title}
          </h2>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </div>
  )
}

function Discover({ structure }) {
  if (!structure) return null; // avoid crash

  const imageProps = structure.image
    ? {
        src: structure.image.url,
        alt: structure.image.alt || "",
        width: 400,
        height: 400,
      }
    : null;

  return (
    <Section title={structure.title} image={imageProps}>
      <div className="space-y-6 prose prose-lg">
        {structure?.description?.length > 0 ? (
          <PrismicRichText field={structure.description} />
        ) : (
          <p>No description available</p>
        )}
      </div>
    </Section>
  )
}

export default function Process({ structure }) {
  if (!structure) return null;

  return (
    <Container className="py-12 sm:py-16">
      <Discover structure={structure[0]} /> 
    </Container> 
  )
}
