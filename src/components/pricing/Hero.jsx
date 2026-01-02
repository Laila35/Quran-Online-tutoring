import { Container } from '../shared/Container'
import Image from 'next/image'
import Link from 'next/link'
export default function HeroSection() {
  return (
    <Container className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className=" lg:grid lg:grid-cols-2 lg:gap-x-8  lg:py-16">
          {/* LEFT SIDE */}
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-2xl font-semibold tracking-tight text-pretty sm:text-4xl">
                  Fee and <span className="text-primary">Schedule Plan</span>
                </h1>
                <p className="mt-6 text-lg/8 text-gray-600">
                  We offer flexible and affordable fee plans to accommodate students
                  from all over the world. Our fee structure is designed to provide
                  high-quality Quranic education at competitive prices.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/register-now"
                    className="rounded-md bg-gradient-to-r from-[#A86739] to-[#DC913F] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Find your course
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div className="mt-20 sm:mt-24 lg:mt-0 flex items-center justify-end">
            <Image
              width={400}
              height={400}
              priority
              src="/Images/payments/Fee and Schedule Plan.svg"  
              alt="Quran learning illustration"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
