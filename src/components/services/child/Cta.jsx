import Image from "next/image"
import { Container } from "../../shared/Container"

export default function ChildCta({ title, description, imageSrc, buttonText, buttonLink }) {
  return (
    <Container className="overflow-hidden py-12 sm:py-16">
      <div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-2xl font-semibold sm:text-4xl">
              {title}
            </h2>
            <p className="mt-6">
              {description}
            </p>
            <div className="mt-10 flex">
              <a
                href={buttonLink}
                className="rounded-md bg-gradient-to-r from-[#A86739] to-[#DC913F] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {buttonText} <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                alt={title || 'Cta Image'}
                src={imageSrc}
                className="aspect-7/5 rounded-2xl object-cover"
                width={500} 
                height={500}
                loading="lazy"
              /> 
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
