import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { contactInfo } from "../data/assets";
import { useLang, type Locale } from "../i18n/LangContext";
import { useLocalePath } from "../i18n/routes";
import { useT } from "../i18n/useT";
import type { StringKey } from "../i18n/useT";
import Wordmark from "./Wordmark";

const navItems: { to: string; key: StringKey }[] = [
  { to: "/", key: "nav.home" },
  { to: "/portfolio", key: "nav.portfolio" },
  { to: "/skandinavskiy-sad", key: "nav.scandinavian" },
  { to: "/services", key: "nav.services" },
  { to: "/team", key: "nav.team" },
  { to: "/contacts", key: "nav.contacts" },
];

const LOCALES: Locale[] = ["ru", "en", "de", "ar"];

function LanguageSwitcher() {
  const { locale, setLocale } = useLang();
  return (
    <div className="hidden items-center gap-2 sm:flex">
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`uppercase transition ${
            code === locale ? "text-graphite" : "text-graphite/35 hover:text-graphite/60"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const t = useT();
  const lp = useLocalePath();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone/20 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1760px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
        <div className="hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-graphite/70 lg:flex">
          <Link className="border-b border-graphite pb-1" to={lp("/portfolio?category=private")}>
            {t("nav.private")}
          </Link>
          <Link className="pb-1" to={lp("/portfolio?category=public")}>
            {t("nav.public")}
          </Link>
        </div>
        <Link to={lp("/")} className="shrink-0" aria-label="PlanoLand home">
          <Wordmark size="sm" />
        </Link>
        <nav className="hidden flex-1 justify-center gap-5 xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={lp(item.to)}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-[11px] font-semibold uppercase tracking-[0.18em] transition hover:text-graphite ${
                  isActive ? "text-graphite" : "text-graphite/80"
                }`
              }
            >
              {t(item.key)}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-graphite/80">
          <div className="hidden gap-3 lg:flex">
            <a href={contactInfo.phoneHrefs[0]}>{contactInfo.phones[0]}</a>
            <a href={contactInfo.phoneHrefs[1]}>{contactInfo.phones[1]}</a>
          </div>
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-9 w-9 place-items-center border border-graphite/35 xl:hidden"
            aria-label={t("header.openMenu")}
            aria-expanded={menuOpen}
          >
            <span className="h-px w-5 bg-graphite shadow-[0_6px_0_#33372f,0_-6px_0_#33372f]" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-graphite/15 bg-cream px-4 py-4 xl:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={lp(item.to)}
                end={item.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-xs font-semibold uppercase tracking-[0.18em] ${
                    isActive ? "text-graphite" : "text-graphite/70"
                  }`
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
