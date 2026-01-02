import Link from "next/link"
export default function AboutCta() {
  return (
    <div className="bg-primary py-12 sm:py-16">
      <div className="  ">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold  text-white sm:text-3xl">
          Join Thousands of Students Learning Qur’an Worldwide

          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-white">
             Book a free trial class today and begin your journey with Quran Online Tutoring.

          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/register-now"
              className="rounded-md bg-gradient-to-r from-[#A86739] to-[#DC913F] px-3.5 py-2.5 text-sm font-semibold  text-white shadow-xs hover:bg-amber-500 -visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </Link>
            <Link href="/register-now" className="text-sm/6 font-semibold text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
