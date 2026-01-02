 
import ContactFormRegister from '../ContactForm-register.jsx'



export default function RegesterForm({ scrollRef }) {
   
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-12 lg:px-8" ref={scrollRef}>
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-64}
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-2xl font-semibold tracking-tight text-pretty  sm:text-3xl text-center">
         Start Your Free <span className="text-primary">Trial</span> 
        </h2> 
        <div className="mt-12 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form action="#" method="POST" className="lg:flex-auto">
            <div >
              
             <ContactFormRegister/>
             
           
             
            <p className="mt-4 text-sm/6 text-center text-gray-500">
              By submitting this form, I agree to the{' '}
              <a href="#" className="font-semibold text-primary">
                privacy&nbsp;policy
              </a>
              .
            </p>
             </div>
          </form>
         
        </div>
      </div>
    </div>
  )
}
