import { Container } from './Container';
import Image from "next/image";

const Cta = ({
  title,
  description, 
  imageSrc,
  buttonText,
  buttonLink,
}) => {
  return (
    <Container className={'bg-gray-50 py-12 sm:py-16'}>
      <div className="relative isolate">
        <div className=" ">
          <div className="mx-auto flex   flex-col gap-16   sm:rounded-3xl  lg:max-w-none lg:flex-row lg:items-center   xl:gap-x-20  ">
            <Image
              alt="ss"
              src={imageSrc}
              height={500}
              width={500}
              className="h-96 w-full flex-none rounded-xl  lg:h-auto lg:max-w-sm"
            />
            <div className="w-full flex-auto">
              <h2 className="text-xl font-semibold tracking-tight text-pretty  sm:text-3xl">
                {title}
              </h2>
              <p className="mt-6 text-pretty ">{description}</p>
               
              <div className="mt-10 flex">
                <a href={buttonLink} className=" text-secondary">
                  {buttonText} <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-1318/752 w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
      </div>
    </Container>
  );
};

export default Cta;
