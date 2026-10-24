/**
 * Shared site assets (hero imagery, socials). Centralized so pages can
 * import what they need without repeating URLs.
 */
export const assets = {
  // Local optimized assets (see scripts/optimize-images.mjs).
  hero: "/images/hero/hero.webp",
  studio: "/images/studio/founders.webp",
  bg3: "https://ext.same-assets.com/3686561945/3311752931.webp",
  socials: {
    youtube: "https://ext.same-assets.com/3686561945/3827234797.svg",
    vkVideo: "https://ext.same-assets.com/3686561945/791344163.svg",
    vk: "https://ext.same-assets.com/3686561945/842575269.svg",
    telegram: "https://ext.same-assets.com/3686561945/3499437485.svg",
    instagram: "https://ext.same-assets.com/3686561945/135172820.svg",
    dzen: "https://ext.same-assets.com/3686561945/1200593527.svg",
    pinterest: "https://ext.same-assets.com/3686561945/2913827335.svg",
  },
} as const;

export const contactInfo = {
  phone: "+7 916 979-65-65",
  phoneHref: "tel:+79169796565",
  email: "pl@planoland.ru",
  emailHref: "mailto:pl@planoland.ru",
} as const;
