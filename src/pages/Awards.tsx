import { awards } from "../data/content";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import { useLang } from "../i18n/LangContext";
import { useT } from "../i18n/useT";

export default function Awards() {
  const t = useT();
  const { contentLocale } = useLang();

  return (
    <>
      <Seo title={t("nav.awards")} description={t("awards.lede")} />
      <PageHeader
        eyebrow={t("awards.eyebrow")}
        title={t("awards.title")}
        lede={t("awards.lede")}
        tone="graphite"
      />

      <section className="bg-graphite px-4 pb-20 text-cream sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1760px]">
          <div className="border-t border-cream/20">
            {awards.map((award, index) => {
              const title = award.title[contentLocale] ?? award.title.ru;
              return (
                <div
                  key={`${award.year}-${award.project}-${index}`}
                  className="grid gap-3 border-b border-cream/20 py-8 sm:grid-cols-[0.4fr_0.6fr_1.6fr]"
                >
                  <span className="font-expanded text-3xl font-black uppercase tracking-[-0.04em] text-cream/50">
                    {award.year}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.16em] text-cream/70">
                    {award.project}
                  </span>
                  <h3 className="font-expanded text-2xl font-black uppercase leading-tight tracking-[-0.03em] sm:text-3xl">
                    {title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
