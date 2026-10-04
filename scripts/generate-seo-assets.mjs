/**
 * Generates SEO/social assets into public/:
 *  - og-image.jpg (1200x630) from the djursholm cover photo, with wordmark overlay
 *  - favicon-32.png, apple-touch-icon.png from inline SVG monograms
 * Run: node scripts/generate-seo-assets.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");

// ---- OG image (1200x630) ----------------------------------------------------
const cover = path.join(publicDir, "images/projects/djursholm/cover.webp");

const ogOverlay = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#000000" stop-opacity="0.78"/>
      <stop offset="0.55" stop-color="#000000" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="60" y="452" width="64" height="4" fill="#a8b078"/>
  <text x="58" y="540" font-family="Arial, Helvetica, sans-serif" font-size="84" font-weight="800" letter-spacing="4"><tspan fill="#ebeae4">PLANO</tspan><tspan fill="#a8b078">LAND</tspan></text>
  <text x="62" y="584" font-family="Arial, Helvetica, sans-serif" font-size="27" font-weight="600" letter-spacing="7" fill="#d8d7cf">СКАНДИНАВСКИЙ САД ПОД КЛЮЧ</text>
</svg>`;

await sharp(cover)
  .resize(1200, 630, { fit: "cover", position: "attention" })
  .composite([{ input: Buffer.from(ogOverlay) }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(publicDir, "og-image.jpg"));
console.log("og-image.jpg done");

// ---- Favicons ----------------------------------------------------------------
// Rounded variant for browser tabs (SVG favicon uses it directly).
const rounded = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#33372f"/>
  <circle cx="47" cy="45" r="7" fill="#828856"/>
  <text x="30" y="43" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="800" text-anchor="middle" letter-spacing="-1" fill="#ebeae4">PL</text>
</svg>`;

// Full-bleed square for iOS home-screen icon (Apple applies its own mask).
const square = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="#33372f"/>
  <circle cx="133" cy="127" r="19" fill="#828856"/>
  <text x="84" y="122" font-family="Arial, Helvetica, sans-serif" font-size="86" font-weight="800" text-anchor="middle" letter-spacing="-3" fill="#ebeae4">PL</text>
</svg>`;

await sharp(Buffer.from(rounded))
  .resize(32, 32)
  .png()
  .toFile(path.join(publicDir, "favicon-32.png"));
console.log("favicon-32.png done");

await sharp(Buffer.from(square))
  .resize(180, 180)
  .png()
  .toFile(path.join(publicDir, "apple-touch-icon.png"));
console.log("apple-touch-icon.png done");
