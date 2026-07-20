/**
 * Shared site assets (logos, hero imagery, socials).
 * Centralized so pages can import what they need without repeating URLs.
 */
export const assets = {
  logo: "https://ext.same-assets.com/3686561945/4078982152.svg",
  hero: "https://ext.same-assets.com/3686561945/2915188378.webp",
  studio: "https://ext.same-assets.com/3686561945/3484833766.webp",
  bg3: "https://ext.same-assets.com/3686561945/3311752931.webp",
  download: "https://ext.same-assets.com/3686561945/4226156107.svg",
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
  phones: ["+7 (495) 822-66-55", "+7 (812) 507-66-55"],
  phoneHrefs: ["tel:+74958226655", "tel:+78125076655"],
  email: "lb@lburo.ru",
  emailHref: "mailto:lb@lburo.ru",
} as const;
