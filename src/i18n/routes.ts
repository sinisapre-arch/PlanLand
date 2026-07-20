import { useLang } from "./LangContext";

/**
 * Build a locale-prefixed route path. Russian (the default) is un-prefixed,
 * matching the reference site: `/portfolio/`. English gets `/en/portfolio/`.
 * `de` and `ar` are routed under their own prefix but render EN content.
 */
const LOCALE_PREFIX: Record<string, string> = {
  ru: "",
  en: "/en",
  de: "/de",
  ar: "/ar",
};

export function localePath(locale: string, path: string): string {
  const prefix = LOCALE_PREFIX[locale] ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${prefix}${normalized}`;
}

/** Hook: returns a function to build locale-aware routes for the current locale. */
export function useLocalePath() {
  const { locale } = useLang();
  return (path: string) => localePath(locale, path);
}

/** Strip a known locale prefix from a pathname, returning the base path. */
export function stripLocalePrefix(pathname: string): string {
  for (const prefix of ["/en", "/de", "/ar"]) {
    if (pathname === prefix) return "/";
    if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  }
  return pathname;
}
