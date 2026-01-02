import React from "react";
import { Container } from "./Container"; 
function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonial({ featuredTestimonial, testimonials }) {
  return (
    <Container className="relative isolate py-12 sm:py-16">
      {/* Background visuals */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[max(50%,38rem)] aspect-1313/771 w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-balance sm:text-3xl">
            What Our Students <span className="text-primary">Say</span>
          </h2>
        </div> 
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-3">
          
          {/* Featured Testimonial */}
          <figure className="rounded-2xl bg-white ring-1 shadow-lg ring-gray-900/5 p-6 sm:col-span-2">
            <blockquote className="text-lg tracking-tight">
              {featuredTestimonial.description[0].text}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-x-4">
              <div className="size-10 flex-none rounded-full bg-primary text-white flex items-center justify-center">
                {getInitials(featuredTestimonial.name)}
              </div>
              <div className="flex-auto">
                <div className="font-semibold">{featuredTestimonial.name}</div>
                <div className="text-gray-600">{featuredTestimonial.address}</div>
              </div>
            </figcaption>
          </figure>

          {/* Other Testimonials */}
          {testimonials.slice(1).map((testimonial, idx) => (
            <figure
              key={idx}
              className="rounded-2xl bg-white ring-1 shadow-lg ring-gray-900/5 p-6"
            >
              <blockquote className="text-gray-900">
                {testimonial.description[0].text}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div className="size-10 rounded-full bg-primary text-white font-semibold flex items-center justify-center">
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.address}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Container>
  );
}













//  import React from "react";
// import { Container } from "./Container"; 


// // Utility to get initials from full name
// function getInitials(name) {
//   return name
//     .split(" ")
//     .map((n) => n[0])
//     .join("")
//     .toUpperCase();
// }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Testimonial({featuredTestimonial,testimonials}) {
//   return (
//     <Container className="relative isolate py-12 sm:py-16">
//       {/* Background visuals */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
//       >
//         <div
//           style={{
//             clipPath:
//               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//           }}
//           className="ml-[max(50%,38rem)] aspect-1313/771 w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
//         />
//       </div>

//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Header */}
//         <div className="mx-auto max-w-2xl text-center"> 
           
//           <h2 className="mt-2 text-xl font-semibold tracking-tight text-balance sm:text-3xl">
//            What Our Students <span className="text-primary">Say</span>
//           </h2>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6  sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
//           {/* Featured Testimonial */}
//           <figure className="rounded-2xl bg-white ring-1 shadow-lg ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
//             <blockquote className="p-6 text-lg  tracking-tight sm:p-12 ">
//               <p>{`“${featuredTestimonial.body}”`}</p>
//             </blockquote>
//             <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t px-6 py-4 sm:flex-nowrap">
//               <div className="size-10 flex-none rounded-full bg-primary text-white flex items-center justify-center">
//                 {getInitials(featuredTestimonial.author.name)}
//               </div>
//               <div className="flex-auto">
//                 <div className="font-semibold">{featuredTestimonial.author.name}</div>
//                 <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
//               </div>
//               {/* <img
//                 alt=""
//                 src={featuredTestimonial.author.logoUrl}
//                 className="h-10 w-auto flex-none"
//               /> */}
//             </figcaption>
//           </figure>

//           {/* Other Testimonials */}
//           {testimonials.map((columnGroup, columnGroupIdx) => (
//             <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
//               {columnGroup.map((column, columnIdx) => (
//                 <div
//                   key={columnIdx}
//                   className={classNames(
//                     (columnGroupIdx === 0 && columnIdx === 0) ||
//                       (columnGroupIdx === testimonials.length - 1 &&
//                         columnIdx === columnGroup.length - 1)
//                       ? "xl:row-span-2"
//                       : "xl:row-start-1",
//                     "space-y-8"
//                   )}
//                 >
//                   {column.map((testimonial) => (
//                     <figure
//                       key={testimonial.author.handle}
//                       className="rounded-2xl bg-white p-6 ring-1 shadow-lg ring-gray-900/5"
//                     >
//                       <blockquote className="text-gray-900">
//                         <p>{`“${testimonial.body}”`}</p>
//                       </blockquote>
//                       <figcaption className="mt-6 flex items-center gap-x-4">
//                         <div className="size-10 rounded-full bg-primary text-white font-semibold flex items-center justify-center">
//                           {getInitials(testimonial.author.name)}
//                         </div>
//                         <div>
//                           <div className="font-semibold">{testimonial.author.name}</div>
//                           <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
//                         </div>
//                       </figcaption>
//                     </figure>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </Container>
//   );
// }
