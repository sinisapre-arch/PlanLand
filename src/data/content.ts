import type { LocalizedString } from "./projects";

/** Principles shown on the home page and Scandinavian-garden page. */
export const principles: LocalizedString[] = [
  { ru: "Растёт из натуральных материалов", en: "Grows from natural materials" },
  { ru: "Спокойный до того, как станет спроектированным", en: "Feels calm before it feels designed" },
  { ru: "Работает так, как вы живёте", en: "Works for the way you actually live" },
  { ru: "Создан на поколения", en: "Built to last for generations" },
  { ru: "Честный с бюджетом, щедрый заботой", en: "Honest about budget, generous with care" },
  { ru: "Для медленных утра и долгих вечеров", en: "Made for slow mornings and long evenings" },
];

/** Services (title + body pairs for the Services page). */
export const services: { title: LocalizedString; body: LocalizedString }[] = [
  {
    title: { ru: "Предпроектное обследование", en: "Pre-project survey" },
    body: {
      ru: "Выезд на участок, чтобы услышать, чего хочет клиент, как он будет пользоваться пространством и какие референсы у него есть. Мы проверяем официальные кадастровые чертежи и замеряем территорию самостоятельно, чтобы подтвердить, что реально возможно.",
      en: "On-site consultation to hear what the client wants, how they'll use the space, and any references they have. We review the official cadastral surveyor drawings and then take our own measurements on site to confirm what's actually possible.",
    },
  },
  {
    title: { ru: "Концептуальный проект", en: "Concept design" },
    body: {
      ru: "Строим дизайн в цифре с помощью фотограмметрии и 3D-визуализации. Каждому клиенту даём доступ к приватной странице проекта, где живут все концептуальные чертежи и 3D-изображения — ведём через каждый этап дизайна до утверждённого плана.",
      en: "We build out the design digitally, using photogrammetry and 3D visualization. Every client gets a private project site where all concept drawings and 3D images live, walking them through each design phase up to a final approved plan.",
    },
  },
  {
    title: { ru: "Рабочая документация", en: "Detailed design" },
    body: {
      ru: "Разбивочные и посадочные чертежи, схемы полива и освещения, материалы, дренаж, сносоуборочное оборудование, парковка, посадки (газон рулонный или посевной) — каждый деталь, формирующая итоговую стройку.",
      en: "Setting-out and planting drawings, irrigation and lighting schemes, materials, drainage, snow removal, parking, planting areas (turf laid or seeded) — every detail that shapes the final build.",
    },
  },
  {
    title: { ru: "Авторский надзор", en: "Design supervision" },
    body: {
      ru: "Остаёмся на объекте в ходе стройки, проверяем работы на соответствие утверждённому проекту и вносим правки по месту при необходимости.",
      en: "We stay on site through construction, checking the work against the approved design and adjusting details on the spot as needed.",
    },
  },
  {
    title: { ru: "Реализация", en: "Implementation" },
    body: {
      ru: "Свои бригады строят сад — полный цикл, от вертикальной планировки до посадки крупномеров. Так как Синиша и проектировщик, и строитель, ничего не теряется между чертежом и реальностью.",
      en: "Our own crews build the garden — full cycle, from grading to planting mature specimens. Because Sinisa is both the designer and the builder, nothing gets lost between drawing and reality.",
    },
  },
  {
    title: { ru: "Уход", en: "Maintenance" },
    body: {
      ru: "Сезонный уход, чтобы сад прижился и жил десятилетиями.",
      en: "Seasonal care to help the garden settle in and keep it thriving for years.",
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
      ru: "Сооснователь, дизайнер и строитель",
      en: "Co-founder, designer & builder",
    },
    bio: {
      ru: "Синиша 15 лет проектировал и строил ландшафты в Швеции, прежде чем принести этот ремесло в Подмосковье с PlanoLand. Он участвует в каждом проекте от первого эскиза до последнего камня — он и проектирует сад, и строит его. Строительство — его страсть: создавать пространства, которые стоят поколениями и приносят красоту, тишину и радость тем, кто в них живёт.",
      en: "Sinisa spent 15 years designing and building landscapes in Sweden before bringing that craft to the Moscow region with PlanoLand. He's involved in every project from the first sketch to the last stone — he's the one who designs the garden, and the one who builds it. Construction is his passion: creating spaces that stand for generations, and that bring beauty, quiet, and joy to the people who live in them.",
    },
    photo: "/images/studio/founders.webp",
  },
  {
    // Name rendered in Russian (site primary language).
    name: "Лыхно Георгий Александрович",
    role: {
      ru: "Сооснователь, работа с клиентами",
      en: "Co-founder, client relations",
    },
    bio: {
      ru: "Георгий — основатель Planodom (https://planodom.ru), строящего подключаемые модульные дома по Подмосковью с репутацией быстрых, надёжных за 60 дней и стройкой, за которую он отвечает лично. В PlanoLand он ведёт клиентскую сторону каждого проекта — от первого контакта до сдачи — чтобы клиенты получали ту же полноцикловую надёжность в саде, что и клиенты Planodom в доме.",
      en: "Georgy is the founder of Planodom (https://planodom.ru), building turnkey modular homes across the Moscow region with a reputation for fast, reliable 60-day builds and construction he personally stands behind. At PlanoLand, he leads the client side of every project — from first contact through handover — so that clients get the same full-cycle trust in their garden that Planodom clients get in their home.",
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
    slug: "scandinavian-design-russian-winters",
    title: {
      ru: "Скандинавский дизайн, русские зимы",
      en: "Scandinavian design, Russian winters",
    },
    excerpt: {
      ru: "Как шведская ландшафтная техника адаптируется к более суровому, снежному климату.",
      en: "How Swedish landscape technique adapts to a harsher, snowier climate.",
    },
    date: "2026-03-14",
    image: "https://ext.same-assets.com/3686561945/3311752931.webp",
  },
  {
    slug: "what-photogrammetry-does-for-your-garden",
    title: {
      ru: "Что делает фотограмметрия для вашего сада",
      en: "What photogrammetry actually does for your garden design",
    },
    excerpt: {
      ru: "Простое объяснение процесса съёмки/3D, через который проходит каждый клиент.",
      en: "A plain-English explanation of the survey/3D process every client goes through.",
    },
    date: "2026-02-02",
    image: "https://ext.same-assets.com/3686561945/3484833766.webp",
  },
  {
    slug: "you-dont-have-to-build-it-all-in-one-summer",
    title: {
      ru: "Не обязательно строить всё за одно лето",
      en: "You don't have to build it all in one summer",
    },
    excerpt: {
      ru: "Как поэтапное, сезон-за-сезоном строительство делает большой сад доступным.",
      en: "How phased, season-by-season construction makes a bigger garden affordable.",
    },
    date: "2026-01-20",
    image: "https://ext.same-assets.com/3686561945/2915188378.webp",
  },
];
