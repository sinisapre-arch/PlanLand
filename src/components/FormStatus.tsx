import type { FormStatus } from "../lib/useTelegramForm";

type Props = {
  status: FormStatus;
  text: string;
  /** Tailwind text-color token for error/success messages on this surface. */
  tone?: "dark" | "light";
};

/**
 * Renders validation/submission feedback under a form. Idle state renders
 * nothing so layout stays clean before first submit.
 */
export default function FormStatus({ status, text, tone = "dark" }: Props) {
  if (status.kind === "idle" || !text) return null;

  const base = "text-[10px] uppercase leading-relaxed tracking-[0.13em]";
  const color =
    status.kind === "success"
      ? tone === "dark"
        ? "text-moss"
        : "text-cream"
      : tone === "dark"
        ? "text-destructive"
        : "text-cream";

  return (
    <p role="status" aria-live="polite" className={`${base} ${color}`}>
      {text}
    </p>
  );
}
