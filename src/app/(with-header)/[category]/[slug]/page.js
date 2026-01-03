// app/[category]/[slug]/page.js
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/helpers";
import Script from "next/script";

import Testimonial from "../../../../components/shared/Testimonial";
import ChildHero from "../../../../components/services/child/Hero";
import ChildCta from "../../../../components/services/child/Cta";
import Faqs from "../../../../slices/Faqs";
import WhyChooseUS from "../../../../components/services/child/whyChooseUs";
import ChildCourses from "../../../../components/services/ChildCourses";
import SessionStructure from "../../../../components/shared/SessionStructure";
import ChildFeatures from "../../../../components/services/child/ChildFeatures";

// 🔥 THIS LINE IS THE KEY FIX
export const dynamic = "force-dynamic";

const siteUrl = "https://quranonlinetutoring.com";

// ❌ REMOVE STATIC PARAMS (VERY IMPORTANT)
// export async function generateStaticParams() {
//   const client = createClient();
//   const docs = await client.getAllByType("childcourses");

//   return docs.map((doc) => ({
//     category: doc.data.category || "courses",
//     slug: doc.uid,
//   }));
// }

// ✅ Metadata (still safe)
export async function generateMetadata({ params }) {
  const { category, slug } = params;
  const client = createClient();

  try {
    const data = await client.getByUID("childcourses", slug);

    if (!data?.data) {
      return {
        title: "Not Found",
        description: "Page not found",
        robots: { index: false, follow: false },
      };
    }

    const title = data.data.meta_title || asText(data.data.title) || slug;
    const description = data.data.meta_description || "Learn with us online.";
    const image = data.data.meta_image?.url || `${siteUrl}/default-og.png`;
    const canonical = `${siteUrl}/${category}/${slug}`;

    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: "Quran Online Tutoring",
        images: [{ url: image, alt: title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    };
  } catch {
    return {
      title: "Not Found",
      description: "Page not found",
      robots: { index: false, follow: false },
    };
  }
}

// ✅ Page
export default async function SubPage({ params }) {
  const { category, slug } = params;
  const client = createClient();

  let data;
  try {
    data = await client.getByUID("childcourses", slug);

    if (!data?.data) return notFound();
    if (data.data.category && data.data.category !== category) {
      return notFound();
    }
  } catch {
    return notFound();
  }

  const d = data.data;

  return (
    <div>
      {d.faqs?.length > 0 && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: d.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question || faq.title || "",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: asText(faq.answer || []),
                },
              })),
            }),
          }}
        />
      )}

      <ChildHero heroo={d.hero || {}} />

      <SessionStructure
        session={d.cards || []}
        sectionContent={d.card_title_des || ""}
      />

      <ChildFeatures
        services_sections={d.services_sections || []}
        servicetitle={d.services_title || ""}
      />

      <WhyChooseUS
        items={d.why_choose_us_cards || []}
        title={d.why_choose_us_title_des || ""}
      />

      <Testimonial
        featuredTestimonial={d.testimonials?.[0] || {}}
        testimonials={d.testimonials || []}
      />

      <ChildCta
        title={d.cta?.[0]?.title || ""}
        description={asText(d.cta?.[0]?.description || [])}
        imageSrc={d.cta?.[0]?.image?.url || ""}
        buttonText="Get Started"
        buttonLink="/register-now"
      />

      <ChildCourses
        course={d.related_courses || []}
        ctitle={data.uid}
      />

      <Faqs
        faqs={(d.faqs || []).map((faq) => ({
          question: faq.question || faq.title || "",
          answer: asText(faq.answer || []),
        }))}
      />
    </div>
  );
}
