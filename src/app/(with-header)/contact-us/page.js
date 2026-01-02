// app/contact/page.tsx
import ContactForm from "../../../components/ContactForm";
import { Container } from "../../../components/shared/Container";
import Cta from "../../../components/shared/Cta";
import Faqs from "../../../components/shared/Faqs";
import InfoSections from "../../../components/about-us/InfoSections";
import { EnvelopeIcon, PhoneIcon, GlobeAltIcon, ClockIcon } from "@heroicons/react/24/solid";
import Script from "next/script";

// ✅ Metadata for SEO
export const metadata = {
  title: "Contact Quran Online Tutoring — Get in Touch Today",
  description:
    "Contact Quran Online Tutoring for online Quran classes. Reach us via WhatsApp, phone, email, or the contact form. Available for kids, adults & reverts worldwide.",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://www.quranonlinetutoring.com/contact",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact Quran Online Tutoring — Get in Touch Today",
    description:
      "Contact Quran Online Tutoring for online Quran classes. Reach us via WhatsApp, phone, email, or the contact form. Available for kids, adults & reverts worldwide.",
    url: "https://www.quranonlinetutoring.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Quran Online Tutoring — Get in Touch Today",
    description:
      "Reach us via WhatsApp, phone, email, or the contact form. Available for kids, adults & reverts worldwide.",
  },
  icons: {
    icon: "/images/favicon.ico",
  },
};

// ✅ FAQ Data
const faqs = [
  {
    id: 1,
    question: "How can I contact Quran Online Tutoring?",
    answer:
      "You can reach us via WhatsApp, phone, email, or our contact form. Our team responds promptly to inquiries.",
  },
  {
    id: 2,
    question: "What are your working hours?",
    answer:
      "We respond within 24 hours, and usually faster via WhatsApp. Our online support is available worldwide.",
  },
  {
    id: 3,
    question: "Can I schedule a trial class?",
    answer:
      "Yes! You can fill the form or contact us directly to book a trial class with our certified teachers.",
  },
  {
    id: 4,
    question: "Who can join your online classes?",
    answer:
      "Students of all ages, including children, adults, and reverts, are welcome to join our Quran learning programs.",
  },
];

export default function ContactPage() {
  // ✅ Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Quran Online Tutoring",
    url: "https://www.quranonlinetutoring.com",
    logo: "https://www.quranonlinetutoring.com/images/logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "admin@quranonlinetutoring.com",
        telephone: "+1 (914) 455-0557",
        contactType: "customer service",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [
      "https://facebook.com/yourpage",
      "https://twitter.com/yourhandle",
      "https://instagram.com/yourhandle",
    ],
  };

  return (
    <>
      {/* ✅ Structured Data */}
      <Script id="quran-online-tutoring-ld-json" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      {/* ✅ Hero Section */}
      <Container className="bg-gray-50">
        <div className="relative isolate overflow-hidden  ">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] ring-1 ring-[#DC913F]/20 shadow-xl shadow-[#A86739]/20 sm:-mr-80 lg:-mr-96"
          />
          <div className="py-16 sm:py-24 text-center lg:text-left">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-4xl sm:text-4xl font-bold tracking-tight text-gray-900">
                Contact{" "}
                <span className="text-primary">
                  Quran Online Tutoring
                </span>{" "}
                Academy
              </h1>
              <p className="mt-6   text-gray-700 leading-8">
                Begin your Qur’an and Islamic learning journey today. Whether you’re a parent,
                student, or revert, our team is ready to guide you through enrollment and answer all
                your questions.
              </p>
          
            </div>
          </div>
        </div>
      </Container>

      {/* ✅ Contact Info + Form */}
      <Container>
        <section
          id="contact-form"
          className="relative isolate bg-white py-16 sm:py-20 grid md:grid-cols-2 gap-10"
        >
          {/* Left Side: Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4 text-center sm:text-start">
              How to Reach{" "}
              <span className="text-primary">
                Us
              </span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8 text-center sm:text-start">
              We’re here to support your Quran learning journey every step of the way. Whether you
              have questions, want to book a trial lesson, or just need guidance — we’re happy to
              help.
            </p>

            <ul className="space-y-4 text-gray-700 text-sm ">
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <EnvelopeIcon className="h-5 w-5 text-[#DC913F]" />
                <strong>Email:</strong>
                <a
                  href="mailto:admin@quranonlinetutoring.com"
                  className="text-blue-600 underline ml-1"
                >
                  admin@quranonlinetutoring.com
                </a>
              </li>

              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <PhoneIcon className="h-5 w-5 text-[#DC913F]" />
                <strong>WhatsApp:</strong>
                <a
                  href="https://wa.me/19144550557"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline ml-1"
                >
                  +1 (914) 455-0557
                </a>
                <span className="text-xs text-gray-500 ml-2">(Quickest response)</span>
              </li>

              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <GlobeAltIcon className="h-5 w-5 text-[#DC913F]" />
                <strong>Live Form:</strong>
                <span className="ml-1">Fill the form to get started.</span>
              </li>

              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <ClockIcon className="h-5 w-5 text-[#DC913F]" />
                <strong>Response Time:</strong>
                <span className="ml-1">Within 24 hours (usually faster via WhatsApp)</span>
              </li>
            </ul>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full px-6 py-6 rounded-3xl shadow border border-gray-100 ">
            <ContactForm />
          </div>
        </section>
      </Container>

      {/* ✅ Info Sections, CTA, FAQs */}
      <InfoSections />
      <Cta
        title="Have Questions? We’re Here to Help"
        description="Reach out today and let us guide you through the process. From trial class to placement test, we make Qur’an learning simple and professional."
        imageSrc="/Images/contact/Have Questions We’re Here to Help.jpg"
        buttonText="Book Free Trial Class"
        buttonLink="#"
      />
      <div id="faqs">
        <Faqs faqs={faqs} />
      </div>
    </>
  );
}
