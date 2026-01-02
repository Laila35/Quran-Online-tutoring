 
'use client'
export default function RegesterHero({ onGetStartedClick }) {
  

  return (
    <div className="bg-white"> 
      <div className="relative isolate ">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-12 sm:py-16">
           
          <div className="text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-balance sm:text-4xl">
           Begin Your Journey of 
<span className="text-primary">Qur’an Learning</span> 
            </h1>
            <p className="mt-8">
          Every journey to the Qur’an begins with a single step — and a sincere niyyah (intention).
 At Quran Online Tutoring, you can start learning today by registering for a free one-on-one trial class with one of our certified Qur’an teachers.
Whether you’re a parent, a new Muslim, or a busy adult seeking connection with the Qur’an — we’ll guide you with patience, structure, and adab.
 No commitment, no hidden fees — just a sincere opportunity to begin your journey with the Book of Allah.

            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
               <button
            onClick={onGetStartedClick}
                className="rounded-md bg-gradient-to-r from-[#A86739] to-[#DC913F] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </button>
              <button
            onClick={onGetStartedClick}className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
