import { useT } from "../i18n/useT";

/**
 * Small disclaimer shown next to 3D renders/visualizations to clarify that
 * planting shown is illustrative only.
 */
export default function RenderDisclaimer({
  className = "",
}: { className?: string }) {
  const t = useT();
  return (
    <p
      className={`text-[10px] uppercase leading-relaxed tracking-[0.16em] text-graphite/55 ${className}`}
    >
      {t("disclaimer.renders")}
    </p>
  );
}
