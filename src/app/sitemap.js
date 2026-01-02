const baseURL ="https://quranonlinetutoring.com";
import { createClient } from "../../prismicio";

const client = createClient();

export default async function sitemap() { 

  const staticPages = [
    "",  
    "/how-it-works",  
    "/teachers",  
    "/teachers/male", 
    "/teachers/female",  
    "/pricing",
    "/blog",
    "/about-us",
    "/contact-us",
    "/programs",
  ];

  const staticPagesSitemap = staticPages.map((path) => ({
    url: `${baseURL}${path}`,
    lastModified: new Date("2024-06-20T08:29:19.071Z"),
  })); 
 
  let mainCourses = [];
  try {
    const res = await client.getByType("maincourses", { pageSize: 100 });
    mainCourses = res.results;
  } catch (e) {
    console.error("Error fetching main courses:", e);
  }

  const mainCoursesSitemap = mainCourses.map((course) => ({
    url: `${baseURL}/${course.uid}`,
    lastModified: new Date(course.last_publication_date),
  }));

  // 👶 Child Courses
  let childCourses = [];
  try {
    const res = await client.getByType("childcourses", { pageSize: 100 });
    childCourses = res.results;
  } catch (e) {
    console.error("Error fetching child courses:", e);
  }

  const childCoursesSitemap = childCourses.map((course) => {
    const category = course.data.category || ""; // matches params.category
    const slug = course.uid; // matches params.slug

    return {
      url: `${baseURL}/${category}/${slug}`,
      lastModified: new Date(course.last_publication_date),
    };
  });

  // 📰 Blogs
  let blogs = [];
  try {
    const res = await client.getByType("blog", { pageSize: 100 });
    blogs = res.results;
  } catch (e) {
    console.error("Error fetching blogs:", e);
  }

  const blogsSitemap = blogs.map((blog) => ({
    url: `${baseURL}/blog/${blog.uid}`,
    lastModified: blog.last_publication_date
      ? new Date(blog.last_publication_date).toISOString()
      : new Date().toISOString(),
  }));

  // 🧩 Combine all routes
  return [
    ...staticPagesSitemap,
    ...mainCoursesSitemap,
    ...childCoursesSitemap,
    ...blogsSitemap,
  ];
}
