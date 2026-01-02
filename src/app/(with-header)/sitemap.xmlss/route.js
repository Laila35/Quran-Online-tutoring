import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.quranonlinetutoring.com';

// Replace dynamic slugs with actual course slugs or fallbacks
const DYNAMIC_SEGMENT_VALUES = {
  slug: ['learn-noorani-qaida-online', 'quran-reading-with-tajweed', 'quran-memorization' ,'tafseer-of-the-quran' ,
    'arabic-learn-online' , 'learn-islamic-studies-online' , 'taleem-ul-islam' , 'quran-with-translation-course' ,
     'online-ijazah-course'  ,'learn-ten-qirat-online'  , 'memorization-of-selected-surahs' , 'learn-daily-supplication-online' ,
      'pillars-of-islam' , 'fiqh-and-islamic-jurisprudence' , 'Seerah-of-muhammad' ,'islamic-beliefs-aqeedah' ,'history-of-islam' ,
       'ramadan-special-courses' , 'the-companions-of-muhammad' ,'stories-of-the-prophets' ], // Sample slugs
};

function isValidPage(fileName) {
  return ['page.js', 'page.jsx', 'page.ts', 'page.tsx'].includes(fileName);
}

function replaceDynamicSegments(routePath) {
  return routePath.replace(/\[([^\]]+)\]/g, (_, key) => {
    const values = DYNAMIC_SEGMENT_VALUES[key];
    if (!values || values.length === 0) return key; // fallback if none provided
    return `__DYNAMIC__${key}__`; // Placeholder
  });
}

function getRoutes(dirPath, routePrefix = '') {
  let routes = [];

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const name = entry.name;

    if (name === 'api' || name === '404' || name === 'admin' || name.startsWith('(')) {
      continue;
    }

    const fullPath = path.join(dirPath, name);
    const rawRoutePath = `${routePrefix}/${name}`;
    const routePath = rawRoutePath.replace(/\/page$/, '');

    if (entry.isDirectory()) {
      const children = fs.readdirSync(fullPath);
      const pageFile = children.find(isValidPage);

      const cleanRoute = replaceDynamicSegments(routePath);

      if (pageFile) {
        const pagePath = path.join(fullPath, pageFile);
        const stats = fs.statSync(pagePath);
        const lastmod = stats.mtime.toISOString();

        // If dynamic segments exist, duplicate routes with all possible values
        if (/\[([^\]]+)\]/.test(routePath)) {
          const dynamicKeys = [...routePath.matchAll(/\[([^\]]+)\]/g)].map((m) => m[1]);
          const permutations = dynamicKeys.reduce(
            (acc, key) => {
              const values = DYNAMIC_SEGMENT_VALUES[key] || [];
              return acc.flatMap((route) => values.map((val) => route.replace(`__DYNAMIC__${key}__`, val)));
            },
            [cleanRoute]
          );

          permutations.forEach((finalRoute) => {
            routes.push({
              url: `${BASE_URL}${finalRoute}`,
              lastmod,
            });
          });
        } else {
          routes.push({
            url: `${BASE_URL}${routePath}`,
            lastmod,
          });
        }
      }

      routes = routes.concat(getRoutes(fullPath, routePath));
    }
  }

  return routes;
}

export async function GET() {
  const appDir = path.join(process.cwd(), 'src', 'app');
  const routes = getRoutes(appDir);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
