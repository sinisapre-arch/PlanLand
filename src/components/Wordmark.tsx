/**
 * PlanoLand text wordmark.
 *
 * Renders the brand name in the site's expanded-black display typeface.
 * No external logo asset required — scales crisply at any size and matches
 * the design system. Two heights to mirror the old logo <img> sizing:
 *   <Wordmark size="sm" />  → header (h-9 / sm:h-11)
 *   <Wordmark size="lg" />  → footer (h-12)
 */
type Props = {
  size?: "sm" | "lg";
  className?: string;
};

const SIZE_CLASSES: Record<NonNullable<Props["size"]>, string> = {
  sm: "text-[1.7rem] leading-none sm:text-[2.1rem]",
  lg: "text-[2.4rem] leading-none",
};

export default function Wordmark({ size = "sm", className = "" }: Props) {
  return (
    <span
      className={`font-expanded inline-flex items-center font-black uppercase leading-none tracking-[-0.04em] ${SIZE_CLASSES[size]} ${className}`}
      aria-label="PlanoLand"
    >
      Plano<span className="text-moss">Land</span>
    </span>
  );
}
