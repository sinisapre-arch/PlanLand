import { useLang } from "../i18n/LangContext";
import { useT } from "../i18n/useT";

/**
 * Small disclaimer used alongside 3D renders/visualizations to clarify that
 * planting shown is illustrative only. Originally requested for the Nadya
 * landscaping project page; reusable across any project detail.
 */
export default function RenderDisclaimer({ className = "" }: { className?: string }) {
  const t = useT();
  const { contentLocale } = useLang();
  return (
    <p
      data-i18n={contentLocale === "en" ? "todo" : undefined}
      className={`text-[10px] uppercase leading-relaxed tracking-[0.16em] text-graphite/55 ${className}`}
    >
      {t("disclaimer.renders")}
    </p>
  );
}
