/**
 * Generates public/sitemap.xml with hreflang alternates for every route
 * (Russian default + /en versions). Run: node scripts/generate-sitemap.mjs
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://plan-land.vercel.app";

const projectSlugs = [
  "djursholm",
  "sollentuna",
  "gustavsberg",
  "lidingo",
  "buxus",
  "hacienda",
  "terrasso",
  "sad",
];

// path (no locale prefix) -> priority
const pages = {
  "/": "1.0",
  "/portfolio": "0.9",
  "/skandinavskiy-sad": "0.8",
  "/services": "0.8",
  "/team": "0.7",
  "/contacts": "0.8",
  "/blog": "0.5",
  ...Object.fromEntries(projectSlugs.map((s) => [`/portfolio/${s}`, "0.7"])),
  "/policy": "0.2",
  "/agree": "0.2",
  "/documents": "0.2",
  "/op": "0.2",
  "/policy-yandex": "0.2",
};

const lastmod = new Date().toISOString().slice(0, 10);

const entry = (p, priority) => {
  const ru = `${SITE}${p}`;
  const en = `${SITE}/en${p === "/" ? "" : p}`;
  return `  <url>
    <loc>${ru}</loc>
    <xhtml:link rel="alternate" hreflang="ru" href="${ru}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${ru}"/>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>
  <url>
    <loc>${en}</loc>
    <xhtml:link rel="alternate" hreflang="ru" href="${ru}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${ru}"/>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`;
};

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${Object.entries(pages)
  .map(([p, priority]) => entry(p, priority))
  .join("\n")}
</urlset>
`;

writeFileSync(path.join(root, "public", "sitemap.xml"), xml);
console.log(`sitemap.xml done: ${Object.keys(pages).length * 2} URLs`);
