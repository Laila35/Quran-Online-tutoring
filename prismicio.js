import { createClient as baseCreateClient } from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "./slicemachine.config.json";

export const repositoryName = sm.repositoryName;

// ✅ Route resolvers
const routes = [
  // { type: "homepage", path: "/" },
  { type: "maincourses", path: "/:uid" },
  { type: "childcourses", path: "/:uid" },
  { type: "blog", path: "/blog/:uid" },
];

export function createClient(config = {}) {
  const client = baseCreateClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  enableAutoPreviews({ client });

  return client;
}
