import { useEffect } from "react";

type Props = {
  title: string;
  description?: string;
};

const SITE_NAME = "L.BURO";

/** Lightweight per-route document title/meta manager (no extra deps). */
export default function Seo({ title, description }: Props) {
  useEffect(() => {
    document.title = title.includes(SITE_NAME)
      ? title
      : `${title} — ${SITE_NAME}`;

    if (description) {
      let meta = document.querySelector(
        'meta[name="description"]',
      ) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
