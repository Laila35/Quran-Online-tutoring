// app/components/CallToAction.tsx
import Link from "next/link";
import { Container } from "../shared/Container";
export default function CallToAction() {
  return (
    <Container className="relative bg-gradient-to-r  py-12 sm:py-16 ">
      <div className="max-w-4xl mx-auto   text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Simple, Professional, and <span className="text-primary">Student-Focused</span> 
        </h2>

        {/* Subtext */}
        <p className=" mb-8 opacity-90 leading-relaxed">
          From free trial to progress reports — our system ensures every student
          learns Qur’an and Islam with clarity and confidence.
        </p>

        {/* CTA Button */}
        <Link
          href="/register-now"
          className="inline-block bg-gradient-to-r from-[#A86739] to-[#DC913F] text-white font-semibold px-8 py-4 rounded-full shadow-lg  transition duration-300"
        >
         Book Free Trial Class
        </Link>
      </div>
    </Container>
  );
}
