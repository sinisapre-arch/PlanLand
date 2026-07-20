import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  lede?: string;
  tone?: "cream" | "graphite" | "sage";
  children?: ReactNode;
};

const TONES: Record<NonNullable<Props["tone"]>, string> = {
  cream: "bg-cream text-graphite",
  graphite: "bg-graphite text-cream",
  sage: "bg-sage text-cream",
};

/** Standard inner-page hero: eyebrow, big display title, optional lede. */
export default function PageHeader({
  eyebrow,
  title,
  lede,
  tone = "cream",
  children,
}: Props) {
  return (
    <section className={`px-4 pb-10 pt-32 sm:px-6 sm:pt-36 lg:px-10 lg:pb-14 lg:pt-44 ${TONES[tone]}`}>
      <div className="mx-auto max-w-[1760px]">
        {eyebrow && (
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] opacity-60">
            {eyebrow}
          </p>
        )}
        <h1 className="font-expanded text-5xl font-black uppercase leading-[0.86] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-80 lg:text-xl">
            {lede}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
