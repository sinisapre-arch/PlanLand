import type { LocalizedString } from "./projects";

/** Principles shown on the home page and Scandinavian-garden page. */
export const principles: LocalizedString[] = [
  { ru: "Приглашает природу на участок", en: "Invites nature onto the plot" },
  { ru: "Имеет характер", en: "Has character" },
  { ru: "Геометричен", en: "Is geometric" },
  { ru: "Обладает чистотой основы", en: "Has clarity of base" },
  { ru: "Вдохновлён нуаром", en: "Is noir-inspired" },
  { ru: "Сказочный", en: "Is fairy-tale" },
];

/** Services (title + body pairs for the Services page). */
export const services: { title: LocalizedString; body: LocalizedString }[] = [
  {
    title: { ru: "Предпроектное обследование", en: "Pre-project survey" },
    body: {
      ru: "Выезд на участок, инженерная и дендрологическая съёмка, анализ почв и инсоляции. На этом этапе фиксируются ограничения и возможности территории.",
      en: "Site visit, engineering and dendrological survey, soil and insolation analysis. Constraints and opportunities of the plot are fixed at this stage.",
    },
  },
  {
    title: { ru: "Концептуальный проект", en: "Concept design" },
    body: {
      ru: "Эскизное планировочное решение, зонирование, образ сада. Согласуем сценарии и характер среды до перехода к рабочей документации.",
      en: "Sketch planning solution, zoning, the garden’s image. We agree on scenarios and the character of the environment before moving to working documentation.",
    },
  },
  {
    title: { ru: "Рабочая документация", en: "Detailed design" },
    body: {
      ru: "Разбивочный и посадочный чертежи, схемы полива и освещения, малые формы. Полный комплект для реализации под ключ.",
      en: "Setting-out and planting drawings, irrigation and lighting schemes, street furniture. A full set for turnkey implementation.",
    },
  },
  {
    title: { ru: "Авторский надзор", en: "Design supervision" },
    body: {
      ru: "Сопровождаем стройку, контролируем соблюдение проекта и оперативно вносим корректировки по месту.",
      en: "We supervise construction, check compliance with the design and make prompt on-site adjustments.",
    },
  },
  {
    title: { ru: "Реализация", en: "Implementation" },
    body: {
      ru: "Заводим собственные бригады и подрядчиков. Полный цикл работ по благоустройству — от вертикальной планировки до посадки крупномеров.",
      en: "We bring our own crews and contractors. A full scope of works — from vertical grading to planting mature specimens.",
    },
  },
  {
    title: { ru: "Уход", en: "Maintenance" },
    body: {
      ru: "Сезонное обслуживание сада по регламенту. Помогаем саду войти в форму и поддерживаем его десятилетиями.",
      en: "Seasonal maintenance on a schedule. We help the garden settle in and maintain it for decades.",
    },
  },
];

/** Team members. */
export const team: {
  name: string;
  role: LocalizedString;
  bio: LocalizedString;
  photo: string;
}[] = [
  {
    // Name rendered in Russian (site primary language).
    name: "Синиша Предраговић",
    role: {
      ru: "Сооснователь",
      en: "Co-founder",
    },
    bio: {
      ru: "Сооснователь PlanoLand. Отвечает за творческое направление студии и архитектурные решения проектов.",
      en: "Co-founder of PlanoLand. Leads the studio’s creative direction and the architectural decisions behind each project.",
    },
    photo: "/images/studio/founders.webp",
  },
  {
    // Name rendered in Russian (site primary language).
    name: "Лыхно Георгий Александрович",
    role: {
      ru: "Сооснователь",
      en: "Co-founder",
    },
    bio: {
      ru: "Сооснователь PlanoLand. Курирует операционную часть студии и сопровождает проекты от первой встречи до сдачи сада.",
      en: "Co-founder of PlanoLand. Oversees the studio’s operations and guides projects from the first meeting to garden handover.",
    },
    photo: "/images/studio/founders.webp",
  },
];

/** Blog posts (representative stubs). */
export const blogPosts: {
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  date: string;
  image: string;
}[] = [
  {
    slug: "scandinavian-garden-philosophy",
    title: {
      ru: "Философия скандинавского сада",
      en: "The philosophy of the Scandinavian garden",
    },
    excerpt: {
      ru: "Почему сдержанность и геометрия важнее обилия деталей, и как это связано с климатом.",
      en: "Why restraint and geometry matter more than abundance of detail, and how it ties to climate.",
    },
    date: "2026-03-14",
    image: "https://ext.same-assets.com/3686561945/3311752931.webp",
  },
  {
    slug: "materials-and-texture",
    title: {
      ru: "Материалы и текстура: кортен, камень, мох",
      en: "Materials and texture: corten, stone, moss",
    },
    excerpt: {
      ru: "Как палитра поверхностей формирует ощущение сада зимой и летом.",
      en: "How the surface palette shapes the feel of the garden in winter and summer.",
    },
    date: "2026-02-02",
    image: "https://ext.same-assets.com/3686561945/3484833766.webp",
  },
  {
    slug: "north-climate-planting",
    title: {
      ru: "Посадки для северного климата",
      en: "Planting for a northern climate",
    },
    excerpt: {
      ru: "Подбор ассортимента для короткого вегетационного периода и холодных зим.",
      en: "Choosing a plant palette for a short growing season and cold winters.",
    },
    date: "2026-01-20",
    image: "https://ext.same-assets.com/3686561945/2915188378.webp",
  },
];
