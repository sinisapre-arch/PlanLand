import { assets } from "../data/assets";
import { services } from "../data/content";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import { useLang } from "../i18n/LangContext";
import { useT } from "../i18n/useT";

export default function Services() {
  const t = useT();
  const { contentLocale } = useLang();

  return (
    <>
      <Seo title={t("nav.services")} description={t("services.lede")} />
      <PageHeader
        eyebrow={t("services.eyebrow")}
        title={t("services.title")}
        lede={t("services.lede")}
        tone="cream"
      />

      <section className="bg-cream px-4 pb-20 text-graphite sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1760px]">
          <div className="grid border-t border-graphite/20">
            {services.map((service, index) => {
              const title = service.title[contentLocale] ?? service.title.ru;
              const body = service.body[contentLocale] ?? service.body.ru;
              return (
                <div
                  key={title}
                  className="grid gap-4 border-b border-graphite/20 py-8 lg:grid-cols-[0.5fr_0.7fr_1.8fr] lg:gap-10"
                >
                  <span className="font-expanded text-3xl font-black uppercase tracking-[-0.04em] text-graphite/40">
                    0{index + 1}
                  </span>
                  <h3 className="font-expanded text-2xl font-black uppercase leading-tight tracking-[-0.03em] sm:text-3xl">
                    {title}
                  </h3>
                  <p className="text-base leading-relaxed text-graphite/80">{body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden bg-graphite">
        <img
          src={assets.studio}
          alt={t("nav.services")}
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
      </section>
    </>
  );
}
