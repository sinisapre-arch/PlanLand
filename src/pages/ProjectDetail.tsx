import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import RenderDisclaimer from "../components/RenderDisclaimer";
import Seo from "../components/Seo";
import { getNextProject, getProjectBySlug } from "../data/projects";
import { useLang } from "../i18n/LangContext";
import { useLocalePath } from "../i18n/routes";
import { useT } from "../i18n/useT";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug = "" } = useParams();
  const t = useT();
  const lp = useLocalePath();
  const { contentLocale } = useLang();
  const project = getProjectBySlug(slug);

  if (!project) return <NotFound />;

  const description =
    project.description[contentLocale] ?? project.description.ru;
  const area = project.specs.area[contentLocale] ?? project.specs.area.ru;
  const next = getNextProject(project.slug);

  const specRows = [
    { label: t("project.spec.area"), value: area },
    { label: t("project.spec.year"), value: project.specs.year },
    {
      label: t("project.spec.status"),
      value: project.specs.status
        ? t(
            project.specs.status === "realized"
              ? "project.spec.status.realized"
              : "project.spec.status.concept",
          )
        : "—",
    },
  ];

  return (
    <>
      <Seo
        title={`${project.title} — ${t("nav.portfolio")}`}
        description={description}
      />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[460px] w-full overflow-hidden bg-graphite text-cream">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-[1760px] px-4 pb-10 sm:px-6 lg:px-10 lg:pb-16">
            <Link
              to={lp("/portfolio")}
              className="mb-6 inline-flex border-b border-cream/60 pb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-cream/85 transition hover:text-cream"
            >
              ← {t("project.backToPortfolio")}
            </Link>
            <h1 className="font-expanded text-6xl font-black uppercase leading-[0.84] tracking-[-0.06em] sm:text-8xl lg:text-9xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* About + specs */}
      <section className="bg-cream px-4 py-16 text-graphite sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1760px] gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
          <div>
            <h2 className="font-expanded text-4xl font-black uppercase leading-none tracking-[-0.05em] sm:text-5xl">
              {t("project.aboutTitle")}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite/80">
              {description}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-px border border-graphite/20 bg-graphite/20 lg:grid-cols-1">
            {specRows.map((row) => (
              <div key={row.label} className="bg-cream p-5">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-graphite/55">
                  {row.label}
                </dt>
                <dd className="mt-2 font-expanded text-2xl font-black uppercase tracking-[-0.03em]">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Gallery — uniform 1:1 square grid. */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-graphite px-4 py-16 text-cream sm:px-6 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-[1760px]">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[project.image, ...(project.gallery ?? [])].map((src, i) => (
                <div key={`${src}-${i}`} className="overflow-hidden bg-black">
                  <img
                    src={src}
                    alt={`${project.title} — ${i + 1}`}
                    loading="lazy"
                    className="aspect-square w-full object-cover opacity-90 transition duration-700 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
            <RenderDisclaimer className="mt-8 text-cream/55" />
          </div>
        </section>
      )}

      {/* Next project */}
      <section className="bg-cream px-4 py-12 text-graphite sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1760px]">
          <Link
            to={lp(`/portfolio/${next.slug}`)}
            className="group grid items-center gap-6 border-t border-graphite/20 pt-10 sm:grid-cols-[1fr_auto]"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-graphite/55">
                {t("project.next")}
              </p>
              <h3 className="mt-2 font-expanded text-4xl font-black uppercase leading-none tracking-[-0.05em] transition group-hover:opacity-70 sm:text-6xl">
                {next.title}
              </h3>
            </div>
            <span className="justify-self-start text-[11px] font-bold uppercase tracking-[0.2em] sm:justify-self-end">
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
