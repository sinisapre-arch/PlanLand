import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Locale = "ru" | "en";

const LOCALE_TO_CONTENT: Record<Locale, "ru" | "en"> = {
  ru: "ru",
  en: "en",
};

const STORAGE_KEY = "lburo.locale";
const DEFAULT_LOCALE: Locale = "ru";
const VALID_LOCALES: Locale[] = ["ru", "en"];

type LangContextValue = {
  locale: Locale;
  /** The locale whose content actually gets rendered. */
  contentLocale: "ru" | "en";
  setLocale: (locale: Locale) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

/**
 * Read the stored locale, migrating any now-removed locale (de/ar) to its
 * closest equivalent so users who previously picked one don't get bounced
 * back to the default.
 */
function readInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && VALID_LOCALES.includes(stored)) return stored;
  // Migrate removed locales: de/ar previously rendered English content.
  if (stored === "de" || stored === "ar") {
    window.localStorage.setItem(STORAGE_KEY, "en");
    return "en";
  }
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
