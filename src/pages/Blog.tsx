import { Link } from "react-router-dom";
import { blogPosts } from "../data/content";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import { useLang } from "../i18n/LangContext";
import { useLocalePath } from "../i18n/routes";
import { useT } from "../i18n/useT";

export default function Blog() {
  const t = useT();
  const lp = useLocalePath();
  const { contentLocale } = useLang();

  return (
    <>
      <Seo title={t("nav.blog")} description={t("blog.lede")} />
      <PageHeader
        eyebrow={t("blog.eyebrow")}
        title={t("blog.title")}
        lede={t("blog.lede")}
        tone="cream"
      />

      <section className="bg-cream px-4 pb-20 text-graphite sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1760px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => {
            const title = post.title[contentLocale] ?? post.title.ru;
            const excerpt = post.excerpt[contentLocale] ?? post.excerpt.ru;
            return (
              <Link
                key={post.slug}
                to={lp(`/blog/${post.slug}`)}
                className="group overflow-hidden bg-graphite/5"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite">
                  <img
                    src={post.image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-graphite/55">
                    {new Date(post.date).toLocaleDateString(
                      contentLocale === "en" ? "en-GB" : "ru-RU",
                      { day: "2-digit", month: "long", year: "numeric" },
                    )}
                  </p>
                  <h3 className="mt-3 font-expanded text-2xl font-black uppercase leading-tight tracking-[-0.03em]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite/75">{excerpt}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
