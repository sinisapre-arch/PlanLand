import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { projects, type ProjectCategory } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import { useLang } from "../i18n/LangContext";
import { useT } from "../i18n/useT";

type Filter = "all" | ProjectCategory;

const FILTERS: Filter[] = ["all", "private", "public"];

function isFilter(value: string | null): value is Filter {
  return value === "all" || value === "private" || value === "public";
}

export default function Portfolio() {
  const t = useT();
  const { contentLocale } = useLang();
  const [searchParams, setSearchParams] = useSearchParams();
  const active = isFilter(searchParams.get("category"))
    ? (searchParams.get("category") as Filter)
    : "all";

  const visible = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  const setFilter = (next: Filter) => {
    const params = new URLSearchParams(searchParams);
    if (next === "all") {
      params.delete("category");
    } else {
      params.set("category", next);
    }
    setSearchParams(params, { replace: true });
  };

  const filterLabels: Record<Filter, ReturnType<typeof useT>> = {
    all: t("portfolio.filter.all"),
    private: t("portfolio.filter.private"),
    public: t("portfolio.filter.public"),
  };

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
      <PageHeader eyebrow={t("nav.portfolio")} title={t("portfolio.title")} tone="cream" />

      <section className="bg-cream px-4 pb-20 text-graphite sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1760px]">
          <div className="mb-8 flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setFilter(filter)}
                className={`border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                  active === filter
                    ? "border-graphite bg-graphite text-cream"
                    : "border-graphite/30 text-graphite/70 hover:border-graphite"
                }`}
              >
                {filterLabels[filter]}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                feature={index % 5 === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
