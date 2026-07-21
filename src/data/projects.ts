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

const img = (id: string) => `https://ext.same-assets.com/3686561945/${id}.webp`;

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
    gallery: [img("91979756")],
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
    gallery: [img("4001111318")],
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
    gallery: [img("2927797396")],
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
    gallery: [],
    featured: true,
  },
  {
    slug: "buxus",
    title: "BUXUS",
    place: {
      ru: "Джурсхольм, Швеция",
      en: "Djursholm, Sweden",
    },
    category: "private",
    image: "/images/projects/djur2/cover.webp",
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
    gallery: [],
    featured: true,
  },
  {
    slug: "hugel",
    title: "HUGEL",
    place: {
      ru: "Медное озеро, Ленинградская область",
      en: "Mednoye lake, Leningrad region",
    },
    category: "private",
    image: img("4282744907"),
    specs: {
      area: { ru: "0.6 ГА", en: "0.6 ha" },
      year: "2023",
      location: { ru: "Медное озеро", en: "Mednoye lake" },
      status: "realized",
    },
    description: {
      ru: "Участок на берегу Медного озера. Холм (Hugel) организует видовые раскрытия и скрывает служебные зоны, формируя последовательность кадров по мере движения к воде.",
      en: "A plot on the shore of Mednoye lake. A hill (Hugel) organizes framed views and conceals utility zones, building a sequence of shots as you move toward the water.",
    },
    gallery: [img("2524636883")],
    featured: true,
  },
  {
    slug: "haus-im-wald",
    title: "HAUS IM WALD",
    place: {
      ru: "Московская область, Россия",
      en: "Moscow region, Russia",
    },
    category: "private",
    image: img("3005789875"),
    specs: {
      area: { ru: "1 ГА", en: "1 ha" },
      year: "2021",
      location: { ru: "Московская область", en: "Moscow region" },
      status: "realized",
    },
    description: {
      ru: "«Дом в лесу»: минимальное вмешательство в существующий лесной массив. Тонкие маршруты-настилы и небольшие площадки не нарушают естественный рельеф и корневую систему.",
      en: "A “house in the woods”: minimal intervention into the existing forest. Thin boardwalk routes and small platforms leave the natural terrain and root systems intact.",
    },
    gallery: [],
    featured: true,
  },
  {
    slug: "level-up",
    title: "LEVEL UP",
    place: {
      ru: "Московская область, Россия",
      en: "Moscow region, Russia",
    },
    category: "private",
    image: img("4043791363"),
    specs: {
      area: { ru: "0.4 ГА", en: "0.4 ha" },
      year: "2020",
      location: { ru: "Московская область", en: "Moscow region" },
      status: "realized",
    },
    description: {
      ru: "Компактный сад с перепадом высот. Серия террас решает задачу вертикальной планировки и превращает технические подпорные стены в активные элементы среды.",
      en: "A compact garden on a slope. A series of terraces solves the vertical grading and turns retaining walls into active elements of the environment.",
    },
    gallery: [],
    featured: true,
  },
  {
    slug: "villa-1905",
    title: "Японская вилла 1905",
    place: { ru: "Калининград", en: "Kaliningrad" },
    category: "private",
    image: img("1598934213"),
    specs: {
      area: { ru: "0.25 ГА", en: "0.25 ha" },
      year: "2019",
      location: { ru: "Калининград", en: "Kaliningrad" },
      status: "realized",
    },
    description: {
      ru: "Историческая вилла 1905 года. Сад отсылает к японской эстетике: сдержанная палитра, мшистые покрытия, листопадные сорта с выраженной сезонностью.",
      en: "A historic 1905 villa. The garden references Japanese aesthetics: a restrained palette, moss surfaces, deciduous species with strong seasonality.",
    },
    gallery: [],
  },
  {
    slug: "hrustalnoe",
    title: "Хрустальное",
    place: {
      ru: "Курортный район Санкт-Петербурга",
      en: "Resort district of St. Petersburg",
    },
    category: "public",
    image: img("962186290"),
    specs: {
      area: { ru: "12 ГА", en: "12 ha" },
      year: "2024",
      location: { ru: "Санкт-Петербург", en: "St. Petersburg" },
      status: "realized",
    },
    description: {
      ru: "Общественное пространство в Курортном районе. Сценарий ориентирован на отдыхающих и местных жителей: прогулочные маршруты, зоны тишины и точки активности у воды.",
      en: "A public space in the Resort district. The program is built around holidaymakers and locals: walking routes, quiet zones and activity hubs by the water.",
    },
    gallery: [],
  },
  {
    slug: "divnyy-sad",
    title: "Дивный сад",
    place: {
      ru: "Солнечное, Санкт-Петербург",
      en: "Solnechnoye, St. Petersburg",
    },
    category: "private",
    image: img("4137702356"),
    specs: {
      area: { ru: "0.5 ГА", en: "0.5 ha" },
      year: "2018",
      location: { ru: "Солнечное", en: "Solnechnoye" },
      status: "realized",
    },
    description: {
      ru: "«Дивный сад» — игра с масштабом и перспективой: миниатюрные сцены и крупные формальные посадки чередуются, создавая ощущение большего пространства на небольшом участке.",
      en: "A “wondrous garden” — a play of scale and perspective: miniature scenes alternate with large formal plantings, creating a sense of greater space on a small plot.",
    },
    gallery: [],
  },
  {
    slug: "dubldomovo",
    title: "DUBLDOMOVO",
    place: {
      ru: "Снегири, Московская область",
      en: "Snegiri, Moscow region",
    },
    category: "public",
    image: img("1503215495"),
    specs: {
      area: { ru: "0.3 ГА", en: "0.3 ha" },
      year: "2019",
      location: { ru: "Снегири", en: "Snegiri" },
      status: "realized",
    },
    description: {
      ru: "Шоурум-сад для производителя модульных домов. Растения и материалы подобраны так, чтобы продемонстрировать разные сценарии озеленения типовых участков.",
      en: "A showroom-garden for a manufacturer of modular houses. Plants and materials are chosen to demonstrate different planting scenarios for typical plots.",
    },
    gallery: [],
  },
  {
    slug: "les",
    title: "ЛЕС",
    place: { ru: "Ленинградская область", en: "Leningrad region" },
    category: "private",
    image: img("3005789875"),
    specs: {
      area: { ru: "2.5 ГА", en: "2.5 ha" },
      year: "2022",
      location: { ru: "Ленинградская область", en: "Leningrad region" },
      status: "concept",
    },
    description: {
      ru: "Концепция загородной резиденции в существующем лесу. Основная задача — сохранить характер древостоя и встроить функциональные площадки в междурядья.",
      en: "A concept for a country residence within an existing forest. The main task is to preserve the stand’s character and fit functional platforms between the trees.",
    },
    gallery: [],
  },
  {
    slug: "severnyy-sad",
    title: "Северный сад",
    place: { ru: "Карелия", en: "Karelia" },
    category: "private",
    image: img("91979756"),
    specs: {
      area: { ru: "0.7 ГА", en: "0.7 ha" },
      year: "2021",
      location: { ru: "Карелия", en: "Karelia" },
      status: "realized",
    },
    description: {
      ru: "Северный сад: палитра ограничена холодными оттенками хвои и серого камня. Растения морозостойки и подобраны с учётом короткого вегетационного периода.",
      en: "A northern garden: the palette is limited to cool conifer tones and grey stone. Plants are frost-hardy and chosen for a short growing season.",
    },
    gallery: [],
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
