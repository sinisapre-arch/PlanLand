import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import { assets } from "../data/assets";
import { principles } from "../data/content";
import { useLang } from "../i18n/LangContext";
import { useLocalePath } from "../i18n/routes";
import { useT } from "../i18n/useT";

export default function ScandinavianGarden() {
  const t = useT();
  const lp = useLocalePath();
  const { contentLocale } = useLang();

  return (
    <>
      <Seo title={t("nav.scandinavian")} description={t("principles.lede")} />
      <PageHeader
        eyebrow={t("nav.scandinavian")}
        title={t("principles.title")}
        lede={t("principles.lede")}
        tone="cream"
      />

      {/* Full-bleed image */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden bg-graphite">
        <img
          src={assets.bg3}
          alt={t("nav.scandinavian")}
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
      </section>

      {/* Principles list */}
      <section className="bg-cream px-4 py-16 text-graphite sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1760px]">
          <div className="grid border-y border-graphite/20 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => {
              const text = principle[contentLocale] ?? principle.ru;
              return (
                <div
                  key={text}
                  className="flex min-h-[180px] flex-col justify-between border-b border-graphite/15 p-5 transition hover:bg-graphite hover:text-cream md:border-r lg:min-h-[220px]"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] opacity-70">
                    0{index + 1}
                  </span>
                  <span className="max-w-xs text-2xl uppercase leading-none tracking-[-0.04em] sm:text-3xl">
                    {text}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-12 max-w-2xl text-lg leading-relaxed text-graphite/80">
            <p>{t("studio.body2")}</p>
            <Link
              to={lp("/portfolio")}
              className="mt-8 inline-flex border-b border-graphite pb-1 text-[11px] font-bold uppercase tracking-[0.2em]"
            >
              {t("portfolio.all")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
