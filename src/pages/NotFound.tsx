import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { useLocalePath } from "../i18n/routes";
import { useT } from "../i18n/useT";

export default function NotFound() {
  const t = useT();
  const lp = useLocalePath();
  return (
    <>
      <Seo title={t("notfound.title")} />
      <section className="flex min-h-screen flex-col justify-center bg-cream px-4 pt-24 pb-20 text-graphite sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1760px]">
          <p className="font-expanded text-[26vw] font-black uppercase leading-[0.78] tracking-[-0.06em] text-graphite/15 sm:text-[18vw] lg:text-[14vw]">
            404
          </p>
          <h1 className="mt-2 font-expanded text-4xl font-black uppercase leading-[0.86] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {t("notfound.title")}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-graphite/75 sm:text-lg">
            {t("notfound.body")}
          </p>
          <Link
            to={lp("/")}
            className="mt-8 inline-flex border-b border-graphite pb-1 text-[11px] font-bold uppercase tracking-[0.2em]"
          >
            {t("notfound.cta")}
          </Link>
        </div>
      </section>
    </>
  );
}
