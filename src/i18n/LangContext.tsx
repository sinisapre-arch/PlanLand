import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Locale = "ru" | "en" | "de" | "ar";

/**
 * `de` and `ar` are not yet translated — they render the English content
 * as a placeholder until translations are filled in.
 */
const LOCALE_TO_CONTENT: Record<Locale, "ru" | "en"> = {
  ru: "ru",
  en: "en",
  de: "en",
  ar: "en",
};

const STORAGE_KEY = "lburo.locale";
const DEFAULT_LOCALE: Locale = "ru";

type LangContextValue = {
  locale: Locale;
  /** The locale whose content actually gets rendered (after de/ar fallback). */
  contentLocale: "ru" | "en";
  setLocale: (locale: Locale) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

function readInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && ["ru", "en", "de", "ar"].includes(stored)) return stored;
  return DEFAULT_LOCALE;
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const value = useMemo<LangContextValue>(
    () => ({
      locale,
      contentLocale: LOCALE_TO_CONTENT[locale],
      setLocale,
    }),
    [locale],
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
