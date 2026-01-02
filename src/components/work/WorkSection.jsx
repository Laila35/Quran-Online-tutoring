// app/components/WorkSection.tsx
import { Container } from "../shared/Container";
import ContactForm from "../ContactForm";

export default function WorkSection() {
  return (
    <Container className="relative bg-white py-12 sm:py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#f9f9f9_1px,transparent_1px)] bg-[size:80px_120px] opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1">
            <p className="text-xs font-semibold text-primary mb-4">
              Our Process
            </p>

            <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight leading-tight">
              How It Works – From Trial Class to{" "}
              <span className="text-primary">Progress Reports</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-gray-600">
              At Quran Online Tutoring, we believe that Islamic learning should
              be professional, structured, and tailored to each student. That’s
              why we follow a clear onboarding process — from free trial class
              to placement test, personalized plan, and continuous progress
              tracking.
            </p>

            {/* Optional: brief steps or bullets */}
            {/* <ul className="mt-6 space-y-3 text-gray-700 text-sm sm:text-base">
              <li>1. Book your free trial class</li>
              <li>2. Take a placement test with a qualified teacher</li>
              <li>3. Receive a personalized learning plan</li>
              <li>4. Start regular classes with monthly progress reports</li>
            </ul> */}
          </div>

          {/* Right: Contact form */}
          <div className="flex-1 w-full lg:max-w-md    "> 
           
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
}