// Optimize gallery images from each project's P/ subfolder into WebP.
// Center-crops every image to 1:1 square (matching the gallery's uniform grid).
//
// Source: public/images/Project Images/<Folder>/P/NN - name.png
// Output: public/images/projects/<slug>/gallery/NN.webp  (1200x1200)
//
// Run with: node scripts/optimize-galleries.mjs
import sharp from "sharp";
import { readdir, stat, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const SRC_ROOT = "public/images/Project Images";
const OUT_ROOT = "public/images/projects";
const SQUARE_SIZE = 1200; // 1:1 output dimension
const QUALITY = 80;

// Project folder name → output slug
const PROJECTS = [
  { folder: "DJURSHOLM", slug: "djursholm" },
  { folder: "Sollentuna", slug: "sollentuna" },
  { folder: "Gustavsberg", slug: "gustavsberg" },
  { folder: "Lidingo", slug: "lidingo" },
  { folder: "Djur2", slug: "buxus" },
];

async function pathExists(p) {
  try { await stat(p); return true; } catch { return false; }
}

async function processProject({ folder, slug }) {
  const srcDir = join(SRC_ROOT, folder, "P");
  const outDir = join(OUT_ROOT, slug, "gallery");
  if (!(await pathExists(srcDir))) {
    console.log(`[${slug}] no P/ folder at ${srcDir}, skipping`);
    return [];
  }

  // Wipe the old gallery so removed images don't linger.
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const files = (await readdir(srcDir))
    .filter((f) => /\.(png|jpg|jpeg)$/i.test(f))
    .sort(); // numeric prefixes make this the right order

  const results = [];
  let outIdx = 0;
  for (const file of files) {
    outIdx += 1;
    const src = join(srcDir, file);
    const num = String(outIdx).padStart(2, "0");
    const out = join(outDir, `${num}.webp`);

    const srcMeta = await sharp(src).metadata();
    // resize(W, H, { fit: 'cover' }) center-crops to exact W×H.
    await sharp(src)
      .resize(SQUARE_SIZE, SQUARE_SIZE, { fit: "cover", position: "center" })
      .webp({ quality: QUALITY })
      .toFile(out);
    const outSize = (await stat(out)).size;
    console.log(
      `  ${file.padEnd(50)} ${srcMeta.width}x${srcMeta.height} → ${num}.webp ${SQUARE_SIZE}x${SQUARE_SIZE} ${Math.round(outSize / 1024)}KB`,
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
  const formatted = paths.map((p) => `"${p}"`).join(",\n      ");
  console.log(`    gallery: [\n      ${formatted},\n    ],`);
}
console.log("\n✅ Done.");
