// One-off image optimization. Converts the raw dropped-in PNGs to WebP at
// sensible web sizes. Run with: node scripts/optimize-images.mjs
//
// Hero:   keep 16:9 frame, downscale to 2560px wide. Quality 78.
// Studio: portrait 3:4, downscale to ~1200px wide. Quality 80.
import sharp from "sharp";
import { readFile } from "node:fs/promises";

const QUALITY_HERO = 78;
const QUALITY_STUDIO = 80;

async function run() {
  // ---- Hero ----
  const heroIn = "public/images/hero/K3_00265_.png";
  const heroOut = "public/images/hero/hero.webp";
  console.log(`Hero: ${heroIn} -> ${heroOut}`);
  const heroData = await readFile(heroIn);
  const heroMeta = await sharp(heroData).metadata();
  console.log(`  source: ${heroMeta.width}x${heroMeta.height}, ${(heroData.length / 1024 / 1024).toFixed(2)} MB`);

  // Resize only if wider than 2560, preserve aspect (16:9 frame kept).
  const heroResized = heroMeta.width > 2560
    ? sharp(heroData).resize({ width: 2560, withoutEnlargement: true })
    : sharp(heroData);

  await heroResized
    .webp({ quality: QUALITY_HERO })
    .toFile(heroOut);
  const heroResult = await sharp(await readFile(heroOut)).metadata();
  const heroSize = (await readFile(heroOut)).length;
  console.log(`  output: ${heroResult.width}x${heroResult.height}, ${(heroSize / 1024).toFixed(0)} KB`);

  // ---- Studio ----
  const studioIn = "public/images/studio/ChatGPT Image Jul 20, 2026, 03_22_19 PM.png";
  const studioOut = "public/images/studio/founders.webp";
  console.log(`\nStudio: ${studioIn} -> ${studioOut}`);
  const studioData = await readFile(studioIn);
  const studioMeta = await sharp(studioData).metadata();
  console.log(`  source: ${studioMeta.width}x${studioMeta.height}, ${(studioData.length / 1024 / 1024).toFixed(2)} MB`);

  const studioResized = studioMeta.width > 1200
    ? sharp(studioData).resize({ width: 1200, withoutEnlargement: true })
    : sharp(studioData);

  await studioResized
    .webp({ quality: QUALITY_STUDIO })
    .toFile(studioOut);
  const studioResult = await sharp(await readFile(studioOut)).metadata();
  const studioSize = (await readFile(studioOut)).length;
  console.log(`  output: ${studioResult.width}x${studioResult.height}, ${(studioSize / 1024).toFixed(0)} KB`);

  console.log("\n✅ Done.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
