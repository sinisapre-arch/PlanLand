import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Props = {
  title: string;
  description?: string;
};

const SITE_NAME = "PlanoLand";
const SITE_URL = "https://plan-land.vercel.app";

/** Ensure a <head> element exists (by selector), apply changes, return it. */
function upsertHead(
  selector: string,
  create: () => HTMLElement,
  apply: (el: HTMLElement) => void,
) {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  apply(el);
}

/**
 * Per-route document title, description, canonical URL and hreflang
 * alternates (no extra deps). Russian is the default locale; English lives
 * under /en/. Missing descriptions fall back to the static index.html tags.
 */
export default function Seo({ title, description }: Props) {
  const location = useLocation();

  useEffect(() => {
    document.title = title.includes(SITE_NAME)
      ? title
      : `${title} — ${SITE_NAME}`;

    if (description) {
      upsertHead(
        'meta[name="description"]',
        () => {
          const meta = document.createElement("meta");
          meta.setAttribute("name", "description");
          return meta;
        },
        (el) => el.setAttribute("content", description),
      );
    }

    // Path without the /en prefix: the Russian canonical form.
    const isEn = location.pathname.startsWith("/en");
    const basePath = isEn
      ? location.pathname.slice(3).replace(/\/+$/, "") || "/"
      : location.pathname.replace(/\/+$/, "") || "/";
    const canonical = `${SITE_URL}${basePath === "/" ? "/" : basePath}`;
    const canonicalEn = `${SITE_URL}${basePath === "/" ? "/en/" : `/en${basePath}`}`;

    upsertHead(
      'link[rel="canonical"]',
      () => {
        const link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        return link;
      },
      (el) => el.setAttribute("href", canonical),
    );

    const alternates: Array<[string, string]> = [
      ["ru", canonical],
      ["en", canonicalEn],
      ["x-default", canonical],
    ];
    for (const [lang, href] of alternates) {
      upsertHead(
        `link[rel="alternate"][hreflang="${lang}"]`,
        () => {
          const link = document.createElement("link");
          link.setAttribute("rel", "alternate");
          link.setAttribute("hreflang", lang);
          return link;
        },
        (el) => el.setAttribute("href", href),
      );
    }

    // Keep social previews in sync for scrapers that render JS.
    upsertHead(
      'meta[property="og:title"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:title");
        return meta;
      },
      (el) => el.setAttribute("content", document.title),
    );
    if (description) {
      upsertHead(
        'meta[property="og:description"]',
        () => {
          const meta = document.createElement("meta");
          meta.setAttribute("property", "og:description");
          return meta;
        },
        (el) => el.setAttribute("content", description),
      );
    }
    upsertHead(
      'meta[property="og:url"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:url");
        return meta;
      },
      (el) => el.setAttribute("content", canonical),
    );
  }, [title, description, location.pathname]);

  return null;
}
