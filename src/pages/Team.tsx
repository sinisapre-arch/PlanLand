import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import { team } from "../data/content";
import { useLang } from "../i18n/LangContext";
import { useT } from "../i18n/useT";

export default function Team() {
  const t = useT();
  const { contentLocale } = useLang();

  return (
    <>
      <Seo title={t("nav.team")} description={t("team.lede")} />
      <PageHeader
        eyebrow={t("team.eyebrow")}
        title={t("team.title")}
        lede={t("team.lede")}
        tone="cream"
      />

      <section className="bg-cream px-4 pb-20 text-graphite sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1760px] gap-6 sm:grid-cols-2">
          {team.map((member) => {
            const role = member.role[contentLocale] ?? member.role.ru;
            const bio = member.bio[contentLocale] ?? member.bio.ru;
            return (
              <article
                key={member.name}
                className="overflow-hidden bg-graphite/5"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-graphite">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-90"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-expanded text-3xl font-black uppercase leading-none tracking-[-0.04em]">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite/65">
                    {role}
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-graphite/80">
                    {bio}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
