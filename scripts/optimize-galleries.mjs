// Optimize gallery images from each project's P/ subfolder into WebP.
// Preserves the numeric prefix order from the source filenames.
//
// Source: public/images/Project Images/<Folder>/P/NN - name.png
// Output: public/images/projects/<slug>/gallery/NN.webp
//
// Run with: node scripts/optimize-galleries.mjs
import sharp from "sharp";
import { readdir, stat, mkdir } from "node:fs/promises";
import { join } from "node:path";

const SRC_ROOT = "public/images/Project Images";
const OUT_ROOT = "public/images/projects";

// Project folder name → output slug
const PROJECTS = [
  { folder: "DJURSHOLM", slug: "djursholm" },
  { folder: "Sollentuna", slug: "sollentuna" },
  { folder: "Gustavsberg", slug: "gustavsberg" },
  { folder: "Lidingo", slug: "lidingo" },
  { folder: "Djur2", slug: "djur2" },
];

async function pathExists(p) {
  try { await stat(p); return true; } catch { return false; }
}

async function processProject({ folder, slug }) {
  const srcDir = join(SRC_ROOT, folder, "P");
  const outDir = join(OUT_ROOT, slug, "gallery");
  await mkdir(outDir, { recursive: true });
  if (!(await pathExists(srcDir))) {
    console.log(`[${slug}] no P/ folder at ${srcDir}, skipping`);
    return [];
  }

  const files = (await readdir(srcDir))
    .filter((f) => /\.(png|jpg|jpeg)$/i.test(f))
    .sort(); // numeric prefixes make this the right order

  const results = [];
  for (const file of files) {
    const src = join(srcDir, file);
    const numMatch = file.match(/^(\d+)/);
    const num = numMatch ? numMatch[1].padStart(2, "0") : String(results.length + 1).padStart(2, "0");
    const out = join(outDir, `${num}.webp`);

    const srcMeta = await sharp(src).metadata();
    await sharp(src)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(out);
    const outSize = (await stat(out)).size;
    console.log(
      `  ${file.padEnd(50)} ${srcMeta.width}x${srcMeta.height} → ${num}.webp ${Math.round(outSize / 1024)}KB`,
    );
    results.push(`/images/projects/${slug}/gallery/${num}.webp`);
  }
  return results;
}

const allResults = {};
for (const project of PROJECTS) {
  console.log(`\n[${project.slug}]`);
  allResults[project.slug] = await processProject(project);
}

console.log("\n=== Gallery arrays for projects.ts ===");
for (const [slug, paths] of Object.entries(allResults)) {
  if (paths.length === 0) continue;
  const formatted = paths.map((p) => `"${p}"`).join(", ");
  console.log(`${slug}: [${formatted}],`);
}
console.log("\n✅ Done.");
