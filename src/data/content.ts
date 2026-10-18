import type { LocalizedString } from "./projects";

/** Principles shown on the home page and Scandinavian-garden page. */
export const principles: LocalizedString[] = [
  { ru: "Сад, как продолжение дома", en: "A garden as a continuation of the home" },
  { ru: "Эргономика и функциональное зонирование", en: "Ergonomics and functional zoning" },
  { ru: "Сад, который растёт сам, пока вы отдыхаете", en: "A garden that grows by itself while you rest" },
  { ru: "Создаётся на поколения", en: "Built to last for generations" },
  { ru: "Честный бюджет и практичность", en: "Honest budget and practicality" },
  { ru: "Для неспешного утра и долгого вечера", en: "For slow mornings and long evenings" },
];

/** Services (title + body pairs for the Services page). */
export const services: { title: LocalizedString; body: LocalizedString }[] = [
  {
    title: { ru: "Предпроектное обследование", en: "Pre-project survey" },
    body: {
      ru: "Выезжаем на участок, чтобы понять, чего хочет заказчик, как он будет пользоваться пространством и какие у него есть референсы. Проверяем официальные кадастровые чертежи и самостоятельно замеряем территорию, чтобы определить, что действительно возможно.",
      en: "We visit the site to understand what the client wants, how they will use the space and what references they have in mind. We check the official cadastral drawings and measure the site ourselves to confirm what is feasible.",
    },
  },
  {
    title: { ru: "Концептуальный проект", en: "Concept design" },
    body: {
      ru: "Используем фотограмметрию и 3D-визуализацию, чтобы точно передать особенности участка и наглядно показать будущий результат. Для каждого клиента создаём персональную страницу проекта с чертежами, концептуальными решениями и 3D-визуализациями. Вы можете следить за ходом работы, знакомиться с решениями на каждом этапе и согласовывать проект до утверждения финального плана.",
      en: "We use photogrammetry and 3D visualizations to capture the site's character and clearly show the result. Each client gets a personal project page with drawings, design concepts and 3D views. You can follow progress, review decisions at every stage and approve the design before the final plan is signed off.",
    },
  },
  {
    title: { ru: "Рабочая документация", en: "Detailed design" },
    body: {
      ru: "Разбивочные и посадочные чертежи, схемы освещения и полива, подбор материалов, решения по дренажу, организации парковки и уборке снега, план озеленения с рулонным или посевным газоном — все детали, необходимые для точной реализации проекта.",
      en: "Setting-out and planting plans, lighting and irrigation schemes, material selections, and solutions for drainage, parking and snow removal. The planting plan covers both ready-laid turf and seeded lawns — every detail needed to build the project accurately.",
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
      ru: "Полный цикл реализации ландшафтного проекта — от вертикальной планировки до посадки крупномеров. Собственные строительные бригады и авторский надзор руководителя компании обеспечивают точное воплощение решений на каждом этапе. Благодаря личному участию руководителя в проектировании и реализации замысел сохраняется в деталях — от чертежа до готового сада.",
      en: "We deliver the complete landscape project, from grading to planting mature trees. Our own construction teams and the company director's design supervision ensure that every decision is carried through accurately. With the director personally involved in both design and construction, the original vision is preserved in every detail, from drawing to finished garden.",
    },
  },
  {
    title: { ru: "Уход", en: "Maintenance" },
    body: {
      ru: "Сезонный уход, чтобы сад прижился и жил десятилетиями.",
      en: "Seasonal care helps the garden establish itself and thrive for decades.",
    },
  },
];

/** Team members. */
export const team: {
  name: LocalizedString;
  role: LocalizedString;
  bio: LocalizedString;
  photo: string;
}[] = [
  {
    name: { ru: "Синиша Предраговић", en: "Sinisa Predragović" },
    role: {
      ru: "Сооснователь PlanoLand, дизайнер и строитель",
      en: "PlanoLand co-founder, designer and builder",
    },
    bio: {
      ru: "Синиша 15 лет проектировал и строил ландшафты в Швеции, прежде чем привезти это ремесло в Подмосковье и основать PlanoLand. Он участвует в каждом проекте от первого эскиза до последнего камня: сам проектирует и строит сад. Его страсть — создавать пространства на поколения, которые приносят красоту, тишину и радость тем, кто в них живёт.",
      en: "Sinisa spent 15 years designing and building landscapes in Sweden before bringing his craft to the Moscow region and co-founding PlanoLand. He takes part in every project from the first sketch to the last stone, designing and building the garden himself. His passion is creating spaces that last for generations and bring beauty, calm and joy to the people who live in them.",
    },
    photo: "/images/studio/founders.webp",
  },
  {
    name: { ru: "Георгий Лыхно", en: "Georgy Lykhno" },
    role: {
      ru: "Сооснователь, работа с клиентами",
      en: "Co-founder, client relations",
    },
    bio: {
      ru: "Георгий — основатель компании «Планодом», которая строит каркасные и каменные дома в Подмосковье и по всей России. В PlanoLand он ведёт клиентскую сторону каждого проекта — от первого контакта до сдачи, чтобы заказчики получали в саду ту же надёжность полного цикла, что и клиенты «Планодома» при строительстве дома.",
      en: "Georgy is the founder of Planodom, which builds timber-frame and stone houses across the Moscow region and throughout Russia. At PlanoLand, he leads the client side of every project from first contact to handover, giving garden clients the same full-cycle reliability that Planodom's homebuilding clients receive.",
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
