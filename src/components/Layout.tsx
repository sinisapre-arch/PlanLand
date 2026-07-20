import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useLang } from "../i18n/LangContext";
import { useT } from "../i18n/useT";
import Header from "./Header";
import Footer from "./Footer";

function CookieAndChat() {
  const t = useT();
  const [accepted, setAccepted] = useState(false);

  if (accepted) {
    return (
      <button
        type="button"
        className="fixed bottom-24 right-4 z-40 grid h-16 w-16 place-items-center rounded-full bg-graphite text-[10px] font-black uppercase tracking-[0.18em] text-cream shadow-2xl sm:bottom-8 sm:right-8"
        aria-label={t("chat.label")}
      >
        {t("chat.label")}
      </button>
    );
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-graphite/20 bg-cream/95 px-4 py-3 text-graphite shadow-2xl backdrop-blur sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-xl sm:border">
        <div className="flex items-start gap-4">
          <p className="text-[10px] uppercase leading-relaxed tracking-[0.13em] text-graphite/70">
            {t("cookie.text")}
          </p>
          <button
            type="button"
            onClick={() => setAccepted(true)}
            className="shrink-0 border border-graphite px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em]"
          >
            {t("cookie.ok")}
          </button>
        </div>
      </div>
      <button
        type="button"
        className="fixed bottom-24 right-4 z-40 grid h-16 w-16 place-items-center rounded-full bg-graphite text-[10px] font-black uppercase tracking-[0.18em] text-cream shadow-2xl sm:bottom-8 sm:right-8"
        aria-label={t("chat.label")}
      >
        {t("chat.label")}
      </button>
    </>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  const { contentLocale } = useLang();

  // Scroll to top on route change for a normal page-transition feel.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  // Keep document language in sync (LangContext already sets it, but this
  // guarantees it on first paint regardless of provider order).
  useEffect(() => {
    document.documentElement.lang = contentLocale;
  }, [contentLocale]);

  return (
    <main className="min-h-screen bg-cream font-body text-graphite selection:bg-moss selection:text-cream">
      <Header />
      <Outlet />
      <Footer />
      <CookieAndChat />
    </main>
  );
}
