import { useCallback, useRef } from "react";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import Seo from "../components/Seo";
import { projects } from "../data/projects";
import { useLang } from "../i18n/LangContext";
import { useT } from "../i18n/useT";

export default function Portfolio() {
  const t = useT();
  const { contentLocale } = useLang();
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  return (
    <>
      <Seo
        title={t("portfolio.title")}
        description={
          contentLocale === "en"
            ? "PlanoLand landscape projects in Moscow and St. Petersburg."
            : "Портфолио проектов ландшафтной студии PlanoLand в Москве и Санкт-Петербурге."
        }
      />
      <PageHeader
        eyebrow={t("nav.portfolio")}
        title={t("portfolio.title")}
        tone="cream"
      />

      <section className="bg-cream pb-20 text-graphite">
        <div
          ref={scrollerRef}
          className="no-scrollbar flex snap-x gap-4 overflow-x-auto px-4 scroll-smooth sm:px-6 lg:px-10"
          aria-label={t("portfolio.title")}
        >
          {projects.map((project, index) => (
            <div
              key={project.slug}
              data-card
              className="h-[54vh] min-h-[400px] w-[82vw] max-w-[520px] shrink-0 snap-center sm:w-[58vw] lg:w-[38vw]"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-[1760px] justify-end gap-3 px-4 sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label={t("featured.prev")}
            className="grid h-11 w-11 place-items-center rounded-full border border-graphite/40 transition hover:bg-graphite hover:text-cream"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label={t("featured.next")}
            className="grid h-11 w-11 place-items-center rounded-full border border-graphite/40 transition hover:bg-graphite hover:text-cream"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>
    </>
  );
}
