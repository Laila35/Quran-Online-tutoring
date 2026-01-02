// app/blog/page.tsx
import { createClient } from "../../../prismicio";
import BlogCard from "../../../components/blog/Card";

// ✅ Static SEO metadata for blog listing page
export const metadata = {
  title: "Quran Blog – Learn Quran Online with Tips & Guides",
  description:
    "Explore our latest articles about learning the Quran online, Islamic studies, and tips to enhance your Quranic journey.",
  alternates: {
    canonical: "https://www.quranonlinetutoring.com/blog",
  },
  openGraph: {
    title: "Quran Blog – Learn Quran Online with Tips & Guides",
    description:
      "Read insightful blogs about Quran learning, online classes, and Islamic knowledge.",
    url: "https://www.quranonlinetutoring.com/blog",
    type: "website",
    images: [
      {
        url: "https://www.quranonlinetutoring.com/Images/courses/qot-hifz-classes-online.png", // ✅ change to your blog banner or logo
        width: 1200,
        height: 630,
        alt: "Quran Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quran Blog – Learn Quran Online with Tips & Guides",
    description:
      "Latest blog posts about online Quran classes, Islamic learning, and guidance.",
    images: [
      "https://www.quranonlinetutoring.com/Images/courses/qot-hifz-classes-online.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function BlogListPage() {
  const client = createClient();

  const posts = await client.getAllByType("blog", {
    orderings: [{ field: "document.first_publication_date", direction: "desc" }],
  });

  // 🔥 Convert Prismic response to BlogCard shape
  const formattedPosts = posts.map((post) => ({
    href: `/blog/${post.uid}`,
    title: post.data.title || "Untitled",
    description:
      post.data.meta_description ||
      post.data.description ||
      "No description available.",
    image: {
      src: post.data.image?.url || "/default-blog.jpg",
      width: post.data.image?.dimensions?.width || 400,
      height: post.data.image?.dimensions?.height || 250,
    },
  }));

  return <BlogCard posts={formattedPosts} />;
}
