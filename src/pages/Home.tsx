import { Link } from "react-router-dom";
import { assets } from "../data/assets";
import { featuredProjects, projects } from "../data/projects";
import { principles } from "../data/content";
import ProjectCard from "../components/ProjectCard";
import Seo from "../components/Seo";
import FormStatus from "../components/FormStatus";
import { useTelegramForm } from "../lib/useTelegramForm";
import { FIELD_LIMITS } from "../lib/telegram";
import { useLang } from "../i18n/LangContext";
import { useLocalePath } from "../i18n/routes";
import { useT } from "../i18n/useT";

function Hero() {
  const t = useT();
  const lp = useLocalePath();
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-cream pt-24 text-graphite">
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-multiply"
        style={{
          backgroundImage: `url(${assets.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-cream via-cream/70 to-transparent" />
      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-[1760px] grid-cols-1 content-end gap-10 px-4 pb-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pb-16">
        <div className="max-w-5xl">
          <p className="mb-8 max-w-xl text-[11px] font-semibold uppercase leading-relaxed tracking-[0.26em] text-graphite/70">
            {t("hero.eyebrow")}
          </p>
          <h1 className="font-expanded text-[18vw] font-black uppercase leading-[0.78] tracking-[-0.075em] sm:text-[13vw] lg:text-[9.4vw]">
            {t("hero.title").split(" ").map((word, i) => (
              <span key={`${word}-${i}`} className="block">
                {word}
              </span>
            ))}
          </h1>
        </div>
        <div className="flex flex-col justify-end gap-10 lg:items-end">
          <p className="max-w-xl text-base leading-relaxed text-graphite/85 sm:text-xl lg:text-2xl lg:leading-snug">
            {t("hero.lede")}
          </p>
          <dl className="grid w-full max-w-2xl grid-cols-2 gap-px overflow-hidden border border-graphite/20 bg-graphite/20 sm:grid-cols-4">
            {(
              [
                ["hero.stat1.value", "hero.stat1.label"],
                ["hero.stat2.value", "hero.stat2.label"],
                ["hero.stat3.value", "hero.stat3.label"],
                ["hero.stat4.value", "hero.stat4.label"],
              ] as const
            ).map(([valueKey, labelKey]) => (
              <div key={valueKey} className="bg-cream/85 p-4 sm:p-5">
                <dt className="font-expanded text-2xl font-black uppercase tracking-[-0.04em] sm:text-3xl">
                  {t(valueKey)}
                </dt>
                <dd className="mt-3 text-[10px] font-semibold uppercase leading-snug tracking-[0.16em] text-graphite/65">
                  {t(labelKey)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const t = useT();
  const lp = useLocalePath();
  const { contentLocale } = useLang();
  return (
    <section className="bg-graphite py-6 text-cream sm:py-10">
      <div className="no-scrollbar flex snap-x gap-3 overflow-x-auto px-4 sm:px-6 lg:px-10">
        {featuredProjects.map((project, index) => (
          <Link
            key={project.slug}
            to={lp(`/portfolio/${project.slug}`)}
            className="group relative h-[62vh] min-h-[480px] w-[78vw] max-w-[560px] shrink-0 snap-center overflow-hidden bg-black sm:w-[44vw] lg:w-[29vw]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute left-5 right-5 top-5 flex justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/75">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{t("featured.label")}</span>
            </div>
            <div className="absolute inset-x-5 bottom-6">
              <h2 className="font-expanded text-4xl font-black uppercase leading-none tracking-[-0.05em] sm:text-5xl">
                {project.title}
              </h2>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-cream/75">
                {project.place[contentLocale] ?? project.place.ru}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Studio() {
  const t = useT();
  const lp = useLocalePath();
  return (
    <section className="bg-cream px-4 py-20 text-graphite sm:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1760px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="relative min-h-[520px] overflow-hidden lg:min-h-[760px]">
          <img
            src={assets.studio}
            alt="Peter Lari and Valery Fedotov"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-6 text-cream">
            <p className="max-w-xs text-xs font-semibold uppercase leading-relaxed tracking-[0.18em]">
              {t("studio.caption")}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-16">
          <div>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-graphite/55">
              {t("studio.eyebrow")}
            </p>
            <h2 className="font-expanded text-5xl font-black uppercase leading-[0.86] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              {t("studio.title")}
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <blockquote className="border-l border-graphite pl-5 text-xl uppercase leading-tight tracking-[-0.02em] sm:text-2xl">
              {t("studio.quote")}
            </blockquote>
            <div className="space-y-5 text-base leading-relaxed text-graphite/80 sm:text-lg">
              <p>{t("studio.body1")}</p>
              <p>{t("studio.body2")}</p>
              <Link
                to={lp("/team")}
                className="inline-flex border-b border-graphite pb-1 text-[11px] font-bold uppercase tracking-[0.2em]"
              >
                {t("studio.cta")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const t = useT();
  const lp = useLocalePath();
  const { contentLocale } = useLang();
  return (
    <section className="relative overflow-hidden bg-sage px-4 py-20 text-cream sm:px-6 lg:px-10 lg:py-28">
      <div
        className="absolute inset-0 opacity-20 mix-blend-multiply"
        style={{
          backgroundImage: `url(${assets.bg3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto max-w-[1760px]">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="font-expanded text-5xl font-black uppercase leading-[0.84] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            {t("principles.title")}
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-cream/85 lg:pt-4">
            {t("principles.lede")}
          </p>
        </div>
        <div className="grid border-y border-cream/35 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => {
            const text = principle[contentLocale] ?? principle.ru;
            return (
              <Link
                key={text}
                to={lp("/skandinavskiy-sad")}
                className="group flex min-h-[180px] flex-col justify-between border-b border-cream/30 p-5 transition hover:bg-cream hover:text-graphite md:border-r lg:min-h-[240px]"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] opacity-70">
                  0{index + 1}
                </span>
                <span className="max-w-xs text-2xl uppercase leading-none tracking-[-0.04em] sm:text-3xl">
                  {text}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PortfolioPreview() {
  const t = useT();
  const lp = useLocalePath();
  // First 12 projects on the home grid.
  const preview = projects.slice(0, 12);
  return (
    <section id="portfolio" className="bg-cream px-4 py-20 text-graphite sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1760px]">
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-graphite/25 pb-5">
          <h2 className="font-expanded text-6xl font-black uppercase leading-none tracking-[-0.07em] sm:text-8xl lg:text-9xl">
            {t("portfolio.title")}
          </h2>
          <Link
            to={lp("/portfolio")}
            className="hidden border-b border-graphite pb-1 text-[11px] font-bold uppercase tracking-[0.2em] sm:inline-flex"
          >
            {t("portfolio.all")}
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((project, index) => (
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
  );
}

function CatalogCta() {
  const t = useT();
  const form = useTelegramForm("catalog");
  const isSending = form.status.kind === "sending";
  return (
    <section className="bg-graphite px-4 py-16 text-cream sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1760px] gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
        <div>
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-cream/55">
            {t("cta.eyebrow")}
          </p>
          <h2 className="font-expanded max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            {t("cta.title")}
          </h2>
        </div>
        <form
          className="grid gap-3 border border-cream/30 p-4 sm:p-6"
          onSubmit={async (event) => {
            event.preventDefault();
            await form.submit();
          }}
        >
          <input
            type="text"
            required
            minLength={FIELD_LIMITS.name.min}
            maxLength={FIELD_LIMITS.name.max}
            value={form.values.name}
            onChange={(e) => form.setValue("name", e.target.value)}
            className="h-12 border border-cream/30 bg-transparent px-4 text-sm uppercase tracking-[0.12em] outline-none placeholder:text-cream/45"
            placeholder={t("cta.name")}
          />
          <input
            type="text"
            required
            minLength={FIELD_LIMITS.contact.min}
            maxLength={FIELD_LIMITS.contact.max}
            value={form.values.contact}
            onChange={(e) => form.setValue("contact", e.target.value)}
            className="h-12 border border-cream/30 bg-transparent px-4 text-sm uppercase tracking-[0.12em] outline-none placeholder:text-cream/45"
            placeholder={t("cta.contact")}
          />
          <button
            type="submit"
            disabled={isSending}
            className="mt-2 flex h-14 items-center justify-between bg-cream px-5 text-[11px] font-black uppercase tracking-[0.22em] text-graphite transition hover:bg-moss hover:text-cream disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? t("form.sending") : t("cta.submit")}
            <img src={assets.download} alt="" className="h-5 w-5" />
          </button>
          <FormStatus status={form.status} text={form.statusText} tone="light" />
          <p className="text-[10px] leading-relaxed text-cream/50">{t("cta.consent")}</p>
        </form>
      </div>
    </section>
  );
}

export default function Home() {
  const t = useT();
  return (
    <>
      <Seo title="PlanoLand — Ландшафтная студия полного цикла" description={t("hero.lede")} />
      <Hero />
      <FeaturedProjects />
      <Studio />
      <Principles />
      <PortfolioPreview />
      <CatalogCta />
    </>
  );
}
