import { createContext, useCallback, useContext, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type Locale = "ru" | "en";

type LangContextValue = {
  locale: Locale;
  /** The locale whose content actually gets rendered. */
  contentLocale: Locale;
  setLocale: (locale: Locale) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ru";
}

function pathWithoutLocale(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice("/en".length);
  return pathname;
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const locale = localeFromPath(pathname);

  const setLocale = useCallback(
    (next: Locale) => {
      const basePath = pathWithoutLocale(pathname);
      const localizedPath =
        next === "en"
          ? basePath === "/"
            ? "/en/"
            : `/en${basePath}`
          : basePath;
      navigate(`${localizedPath}${search}${hash}`);
    },
    [hash, navigate, pathname, search],
  );

  const value = useMemo<LangContextValue>(
    () => ({ locale, contentLocale: locale, setLocale }),
    [locale, setLocale],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return ctx;
}
