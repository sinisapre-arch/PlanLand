import { useLang } from "./LangContext";

/**
 * Build a locale-prefixed route path. Russian (the default) is un-prefixed
 * (`/portfolio/`); English is prefixed (`/en/portfolio/`).
 */
const LOCALE_PREFIX: Record<string, string> = {
  ru: "",
  en: "/en",
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
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice("/en".length);
  return pathname;
}
