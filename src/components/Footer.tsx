import { Link } from "react-router-dom";
import { assets, contactInfo } from "../data/assets";
import { useLocalePath } from "../i18n/routes";
import { useT } from "../i18n/useT";
import Wordmark from "./Wordmark";

export default function Footer() {
  const t = useT();
  const lp = useLocalePath();

  return (
    <footer className="bg-cream px-4 py-10 text-graphite sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1760px] gap-10 border-t border-graphite/25 pt-10 lg:grid-cols-[0.8fr_1.2fr_1fr]">
        <div>
          <Link to={lp("/")}>
            <Wordmark size="lg" />
          </Link>
          <div className="mt-8 flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.12em]">
            <a href={contactInfo.phoneHrefs[0]}>{contactInfo.phones[0]}</a>
            <a href={contactInfo.phoneHrefs[1]}>{contactInfo.phones[1]}</a>
            <a href={contactInfo.emailHref}>{contactInfo.email}</a>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <address className="not-italic text-sm uppercase leading-relaxed tracking-[0.1em] text-graphite/75">
            {t("footer.msk")}
          </address>
          <address className="not-italic text-sm uppercase leading-relaxed tracking-[0.1em] text-graphite/75">
            {t("footer.spb")}
          </address>
        </div>
        <div className="flex flex-col justify-between gap-8">
          <div className="flex flex-wrap gap-3">
            {Object.entries(assets.socials).map(([name, src]) => (
              <a
                key={name}
                href="#social"
                className="grid h-10 w-10 place-items-center border border-graphite/25 transition hover:bg-graphite hover:invert"
                aria-label={name}
              >
                <img src={src} alt="" className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-[10px] uppercase leading-relaxed tracking-[0.16em] text-graphite/50">
            {t("footer.rights")}
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1760px] flex-wrap gap-x-6 gap-y-2 border-t border-graphite/15 pt-5 text-[10px] uppercase tracking-[0.14em] text-graphite/55">
        <Link to={lp("/policy")}>{t("footer.policy")}</Link>
        <Link to={lp("/agree")}>{t("footer.agree")}</Link>
        <Link to={lp("/documents")}>{t("footer.documents")}</Link>
      </div>
    </footer>
  );
}
