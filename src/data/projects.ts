/**
 * Project records. `slug` matches the lburo.ru URL convention so future
 * content swaps are trivial. Image URLs reuse the same-assets CDN already
 * in use across the site.
 */
export type ProjectCategory = "private" | "public";

export type LocalizedString = {
  ru: string;
  en?: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Short place line shown on cards. */
  place: LocalizedString;
  category: ProjectCategory;
  /** Cover image used on cards & detail hero. */
  image: string;
  /** Optional badge shown on cards. Currently unused (no awards to display). */
  label?: LocalizedString;
  /** Detail-page specs. */
  specs: {
    area: LocalizedString;
    year: string;
    location: LocalizedString;
    status?: "realized" | "concept";
  };
  /** Optional awards list. Currently unused (no awards to display). */
  awards?: LocalizedString[];
  /** Long-form description shown on the detail page. */
  description: LocalizedString;
  /** Extra gallery images (besides the hero). */
  gallery?: string[];
  /** Featured on the home carousel. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "djursholm",
    title: "Серый Гранит",
    place: { ru: "Стокгольм, Швеция", en: "Stockholm, Sweden" },
    category: "private",
    image: "/images/projects/djursholm/cover.webp",
    specs: {
      area: { ru: "6 ГА", en: "6 ha" },
      year: "2023",
      location: { ru: "Стокгольм, Швеция", en: "Stockholm, Sweden" },
      status: "realized",
    },
    description: {
      ru: "Большая усадьба в Рязанской области: лесной массив, луговые зоны и фермерское хозяйство собраны в единую среду. Парадный вход раскрыт к южному фасаду, служебные и хозяйственные сценарии отведены на периферию.",
      en: "A large estate in the Ryazan region: woodland, meadow zones and a working farm are woven into a single environment. The ceremonial entrance opens to the southern facade, while utility scenarios are pushed to the periphery.",
    },
    gallery: [
      "/images/projects/djursholm/gallery/01.webp",
      "/images/projects/djursholm/gallery/02.webp",
      "/images/projects/djursholm/gallery/03.webp",
      "/images/projects/djursholm/gallery/04.webp",
      "/images/projects/djursholm/gallery/05.webp",
      "/images/projects/djursholm/gallery/06.webp",
      "/images/projects/djursholm/gallery/07.webp",
      "/images/projects/djursholm/gallery/08.webp",
      "/images/projects/djursholm/gallery/09.webp",
      "/images/projects/djursholm/gallery/10.webp",
      "/images/projects/djursholm/gallery/11.webp",
      "/images/projects/djursholm/gallery/12.webp",
      "/images/projects/djursholm/gallery/13.webp",
      "/images/projects/djursholm/gallery/14.webp",
      "/images/projects/djursholm/gallery/15.webp",
    ],
    featured: true,
  },
  {
    slug: "sollentuna",
    title: "Терракота и Вода",
    place: { ru: "Соллентуна, Швеция", en: "Sollentuna, Sweden" },
    category: "private",
    image: "/images/projects/sollentuna/cover.webp",
    specs: {
      area: { ru: "1.2 ГА", en: "1.2 ha" },
      year: "2022",
      location: { ru: "Соллентуна, Швеция", en: "Sollentuna, Sweden" },
      status: "realized",
    },
    description: {
      ru: "Загородный дом на берегу водоёма. Композиция построена на контрасте строгих геометрических площадок и свободных луговых посадок, повторяющих природный рельеф.",
      en: "A waterside country house. The composition is built on the contrast of strict geometric terraces and free meadow plantings that echo the natural terrain.",
    },
    gallery: [
      "/images/projects/sollentuna/gallery/01.webp",
      "/images/projects/sollentuna/gallery/02.webp",
      "/images/projects/sollentuna/gallery/03.webp",
      "/images/projects/sollentuna/gallery/04.webp",
    ],
    featured: true,
  },
  {
    slug: "gustavsberg",
    title: "Тёмный Сланец",
    place: {
      ru: "Густавсберг, Швеция",
      en: "Gustavsberg, Sweden",
    },
    category: "private",
    image: "/images/projects/gustavsberg/cover.webp",
    specs: {
      area: { ru: "0.8 ГА", en: "0.8 ha" },
      year: "2021",
      location: { ru: "Густавсберг, Швеция", en: "Gustavsberg, Sweden" },
      status: "realized",
    },
    description: {
      ru: "Архитектурный сад с выраженной каменной оградой (Mauer). Внутренний двор-сад раскрывается по мере движения: от сдержанного входа к открытой лужайке с видом на лес.",
      en: "An architectural garden defined by a strong stone wall (Mauer). The inner courtyard-garden reveals itself as you move — from a restrained entrance to an open lawn facing the forest.",
    },
    gallery: [
      "/images/projects/gustavsberg/gallery/01.webp",
      "/images/projects/gustavsberg/gallery/02.webp",
      "/images/projects/gustavsberg/gallery/03.webp",
      "/images/projects/gustavsberg/gallery/04.webp",
      "/images/projects/gustavsberg/gallery/05.webp",
      "/images/projects/gustavsberg/gallery/06.webp",
      "/images/projects/gustavsberg/gallery/07.webp",
    ],
    featured: true,
  },
  {
    slug: "lidingo",
    title: "Гранитный Булыжник",
    place: {
      ru: "Лидингё, Швеция",
      en: "Lidingö, Sweden",
    },
    category: "private",
    image: "/images/projects/lidingo/cover.webp",
    specs: {
      area: { ru: "1.5 ГА", en: "1.5 ha" },
      year: "2020",
      location: { ru: "Лидингё, Швеция", en: "Lidingö, Sweden" },
      status: "realized",
    },
    description: {
      ru: "Сад, в котором металл, кортен и дикий камень формируют сдержанную палитру материалов. Растительность подобрана так, чтобы подчеркнуть текстуру поверхностей в любое время года.",
      en: "A garden where metal, corten and wild stone shape a restrained material palette. Planting is chosen to highlight the surface texture year-round.",
    },
    gallery: [
      "/images/projects/lidingo/gallery/01.webp",
      "/images/projects/lidingo/gallery/02.webp",
      "/images/projects/lidingo/gallery/03.webp",
      "/images/projects/lidingo/gallery/04.webp",
      "/images/projects/lidingo/gallery/05.webp",
      "/images/projects/lidingo/gallery/06.webp",
      "/images/projects/lidingo/gallery/07.webp",
      "/images/projects/lidingo/gallery/08.webp",
      "/images/projects/lidingo/gallery/09.webp",
      "/images/projects/lidingo/gallery/10.webp",
      "/images/projects/lidingo/gallery/11.webp",
    ],
    featured: true,
  },
  {
    slug: "buxus",
    title: "БУКСУС",
    place: {
      ru: "Джурсхольм, Швеция",
      en: "Djursholm, Sweden",
    },
    category: "private",
    image: "/images/projects/buxus/cover.webp",
    specs: {
      area: { ru: "2 ГА", en: "2 ha" },
      year: "2022",
      location: { ru: "Джурсхольм, Швеция", en: "Djursholm, Sweden" },
      status: "realized",
    },
    description: {
      ru: "Концепция «замедленного» сада: маршруты и площадки спроектированы так, чтобы снизить темп движения и настроить восприятие на тишину и детали.",
      en: "A “slow” garden concept: routes and platforms are designed to slow the pace and tune perception to quiet and detail.",
    },
    gallery: [
      "/images/projects/buxus/gallery/01.webp",
      "/images/projects/buxus/gallery/02.webp",
      "/images/projects/buxus/gallery/03.webp",
      "/images/projects/buxus/gallery/04.webp",
    ],
    featured: true,
  },
  {
    slug: "hacienda",
    title: "АСЬЕНДА",
    place: {
      ru: "Медное озеро, Ленинградская область",
      en: "Mednoye lake, Leningrad region",
    },
    category: "private",
    image: "/images/projects/hacienda/cover.webp",
    specs: {
      area: { ru: "0.6 ГА", en: "0.6 ha" },
      year: "2023",
      location: { ru: "Медное озеро", en: "Mednoye lake" },
      status: "realized",
    },
    description: {
      ru: "Участок на берегу Медного озера. Холм организует видовые раскрытия и скрывает служебные зоны, формируя последовательность кадров по мере движения к воде.",
      en: "A plot on the shore of Mednoye lake. A hill organizes framed views and conceals utility zones, building a sequence of shots as you move toward the water.",
    },
    gallery: [
      "/images/projects/hacienda/gallery/01.webp",
      "/images/projects/hacienda/gallery/02.webp",
      "/images/projects/hacienda/gallery/03.webp",
    ],
    featured: true,
  },
  {
    slug: "terrasso",
    title: "ТЕРРАССО",
    place: {
      ru: "Стокгольм, Швеция",
      en: "Stockholm, Sweden",
    },
    category: "private",
    image: "/images/projects/terrasso/cover.webp",
    specs: {
      area: { ru: "1 ГА", en: "1 ha" },
      year: "2021",
      location: { ru: "Стокгольм, Швеция", en: "Stockholm, Sweden" },
      status: "realized",
    },
    description: {
      ru: "«Дом в лесу»: минимальное вмешательство в существующий лесной массив. Тонкие маршруты-настилы и небольшие площадки не нарушают естественный рельеф и корневую систему.",
      en: "A “house in the woods”: minimal intervention into the existing forest. Thin boardwalk routes and small platforms leave the natural terrain and root systems intact.",
    },
    gallery: [
      "/images/projects/terrasso/gallery/01.webp",
      "/images/projects/terrasso/gallery/02.webp",
      "/images/projects/terrasso/gallery/03.webp",
      "/images/projects/terrasso/gallery/04.webp",
      "/images/projects/terrasso/gallery/05.webp",
      "/images/projects/terrasso/gallery/06.webp",
      "/images/projects/terrasso/gallery/07.webp",
    ],
    featured: true,
  },
  {
    slug: "sad",
    title: "САД",
    place: {
      ru: "Стокгольм, Швеция",
      en: "Stockholm, Sweden",
    },
    category: "private",
    image: "/images/projects/garden/cover.webp",
    specs: {
      area: { ru: "0.4 ГА", en: "0.4 ha" },
      year: "2020",
      location: { ru: "Стокгольм, Швеция", en: "Stockholm, Sweden" },
      status: "realized",
    },
    description: {
      ru: "Компактный сад с перепадом высот. Серия террас решает задачу вертикальной планировки и превращает технические подпорные стены в активные элементы среды.",
      en: "A compact garden on a slope. A series of terraces solves the vertical grading and turns retaining walls into active elements of the environment.",
    },
    gallery: [
      "/images/projects/garden/gallery/01.webp",
      "/images/projects/garden/gallery/02.webp",
      "/images/projects/garden/gallery/03.webp",
      "/images/projects/garden/gallery/04.webp",
      "/images/projects/garden/gallery/05.webp",
      "/images/projects/garden/gallery/06.webp",
      "/images/projects/garden/gallery/07.webp",
      "/images/projects/garden/gallery/08.webp",
      "/images/projects/garden/gallery/09.webp",
      "/images/projects/garden/gallery/10.webp",
      "/images/projects/garden/gallery/11.webp",
    ],
    featured: true,
  },
];

/** Lookup by slug, returns `undefined` for unknown slugs (handled by route). */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Next project in the array, wrapping around for the last one. */
export function getNextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
}

/** Quick accessor for the home-page carousel. */
export const featuredProjects = projects.filter((project) => project.featured);
