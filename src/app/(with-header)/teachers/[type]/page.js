import { notFound } from "next/navigation";
import { teacherData } from "../../../../lib/teachersData";
import TecherHero from "../../../../components/teachers/child/Hero";
import SpecializeSection from "../../../../components/teachers/child/SpecializeSection";
import ChecklistSection from "../../../../components/teachers/child/ChecklistSection";
import Testimonials from "../../../../components/teachers/child/Testimonials"; 
import TutorCta from "../../../../components/teachers/Cta";
import Faqs from "../../../../components/shared/Faqs";
import { Container } from "../../../../components/shared/Container";
import Script from "next/script";

 
export async function generateMetadata({ params }) {
  const { type } = params;
  const teacher = teacherData[type];

  if (!teacher) return notFound();

  const canonicalUrl = `https://quranonlinetutoring.com/qot-teachers/${type}`;

  return {
    title: teacher.metaTitle,
    description: teacher.metaDescrption,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: teacher.metaTitle,
      description: teacher.metaDescrption,
      url: canonicalUrl,
      siteName: "Quran Online Tutoring",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `https://quranonlinetutoring.com${teacher.image}`,
          width: 1200,
          height: 630,
          alt: teacher.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: teacher.metaTitle,
      description: teacher.metaDescrption,
      images: [`https://quranonlinetutoring.com${teacher.image}`],
    },
    robots: { index: true, follow: true },
  };
}

 
export default function TeacherTypePage({ params }) {
  const { type } = params;
  const teacher = teacherData[type];

  if (!teacher) return notFound();
 
  const faqSchema =
    teacher.faqs && teacher.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: teacher.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <> 
      {faqSchema && (
        <Script
          id={`faq-schema-${type}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
 
      <TecherHero teacher={teacher} />
      <SpecializeSection specialize={teacher.specialize} />
      <ChecklistSection data={teacher.whyChooseTeachers} />
      <Testimonials testimonials={teacher.testimonials} />
      <Container>
        <TutorCta cta={teacher.ctaData} />
      </Container>
      <Faqs faqs={teacher.faqs} />
    </>
  );
}
