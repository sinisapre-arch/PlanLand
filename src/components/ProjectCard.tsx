import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import { useLang } from "../i18n/LangContext";
import { useLocalePath } from "../i18n/routes";

type Props = {
  project: Project;
  /** Make the card span 2×2 in the grid (used for featured tiles). */
  feature?: boolean;
  index?: number;
};

export default function ProjectCard({
  project,
  feature = false,
  index = 0,
}: Props) {
  const lp = useLocalePath();
  const { contentLocale } = useLang();
  const label = project.label?.[contentLocale] ?? project.label?.ru;

  return (
    <Link
      to={lp(`/portfolio/${project.slug}`)}
      className={`group relative overflow-hidden bg-graphite ${
        feature ? "sm:col-span-2 sm:row-span-2" : ""
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="aspect-[4/3] h-full min-h-[300px] w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
      {label && (
        <span className="absolute left-4 top-4 max-w-[10rem] text-[9px] font-bold uppercase leading-tight tracking-[0.18em] text-cream/80">
          {label}
        </span>
      )}
      {typeof index === "number" && (
        <span className="absolute right-4 top-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/70">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <div className="absolute inset-x-4 bottom-4 text-cream">
        <h3 className="font-expanded text-3xl font-black uppercase leading-none tracking-[-0.05em]">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
