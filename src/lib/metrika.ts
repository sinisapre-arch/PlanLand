/**
 * Yandex.Metrica integration.
 *
 * The counter snippet lives in index.html; this module is the typed helper
 * for everything the SPA needs on top of it: manual hits on route change
 * and conversion goals.
 *
 * Counter: PlanoLand (planoland.vercel.app), id 113770921.
 */
export const METRIKA_ID = 113770921;

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

/** Safe call — no-ops until the snippet has defined window.ym. */
export function metrikaHit(title: string): void {
  if (typeof window !== "undefined" && typeof window.ym === "function") {
    window.ym(METRIKA_ID, "hit", window.location.href, { title });
  }
}

/** Conversion event. Set up matching goals in Metrica (JavaScript-event goals). */
export function metrikaGoal(name: string, params?: Record<string, unknown>): void {
  if (typeof window !== "undefined" && typeof window.ym === "function") {
    window.ym(METRIKA_ID, "reachGoal", name, params ?? {});
  }
}
