import React from 'react'
import Testimonial from '../shared/Testimonial';
const featuredTestimonial = {
  description: [{ type: "paragraph", text: "My son improved his Tajweed in just 3 months. His teacher is patient and motivating." }],
  name: "Ahmed USA",
  address: "ahmed",
};

const testimonials = [
  {
    description: [{ type: "paragraph", text: "As a revert, I was guided step by step to read Qur’an and perform Salah confidently." }],
    name: "Aisha UK",
    address: "aisha",
  },
  {
    description: [{ type: "paragraph", text: "My daughter loves her female teacher and looks forward to every class. The reports keep us updated." }],
    name: "Fatima Canada",
    address: "fatima",
  },
  {
    description: [{ type: "paragraph", text: "The structured classes and guidance have greatly improved my Tajweed. I’m truly grateful!" }],
    name: "Ali UAE",
    address: "ali",
  },
  {
    description: [{ type: "paragraph", text: "QuranOnline Tutoring has been a blessing for me. The convenience of learning from home is unmatched!" }],
    name: "Yusuf Canada",
    address: "yusuf",
  },
   {
    description: [{ type: "paragraph", text: "As a revert, I was guided step by step to read Qur’an and perform Salah confidently." }],
    name: "Aisha UK",
    address: "aisha",
  },
];
 
const Testimonials = () => {
  return (
    <div>
       <Testimonial 
      featuredTestimonial={featuredTestimonial} 
      testimonials={testimonials} />
    </div>
  )
}

export default Testimonials
