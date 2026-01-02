 import Testimonial from "../../shared/Testimonial";

const Testimonials = ({testimonials}) => {
    const featuredTestimonial = testimonials[0]
  return (
    <>
     <Testimonial featuredTestimonial={featuredTestimonial} testimonials={testimonials} /> 
    </>
  );
};

export default Testimonials;
