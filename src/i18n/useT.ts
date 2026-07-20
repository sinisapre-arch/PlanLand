import { useLang } from "./LangContext";

/**
 * Dictionary of UI strings. RU is the source of truth.
 * EN is filled for the chrome (nav, footer, buttons, page intros).
 * Missing EN keys fall back to RU at render time so the site never shows
 * an empty string — untranslated spots are easy to find later.
 */
export const strings = {
  // ---- Header / nav ----
  "nav.private": { ru: "Частные сады", en: "Private gardens" },
  "nav.public": {
    ru: "Общественные пространства",
    en: "Public spaces",
  },
  "nav.home": { ru: "Главная", en: "Home" },
  "nav.portfolio": { ru: "Портфолио", en: "Portfolio" },
  "nav.scandinavian": { ru: "Скандинавский сад", en: "Scandinavian garden" },
  "nav.services": { ru: "Услуги", en: "Services" },
  "nav.team": { ru: "Команда", en: "Team" },
  "nav.contacts": { ru: "Контакты", en: "Contacts" },
  "nav.blog": { ru: "Блог", en: "Blog" },
  "header.openMenu": { ru: "Открыть меню", en: "Open menu" },

  // ---- Hero ----
  "hero.eyebrow": {
    ru: "Студия ландшафтного дизайна PlanoLand. Создаём скандинавские сады полного цикла.",
    en: "PlanoLand landscape design studio. We create full-cycle Scandinavian gardens.",
  },
  "hero.title": {
    ru: "Сад как состояние",
    en: "Garden as a state",
  },
  "hero.lede": {
    ru: "Мы — ландшафтная студия полного цикла. Создаём скандинавские сады в любых климатических зонах: от Калининграда до Владивостока и Сочи, а также за пределами России.",
    en: "We are a full-cycle landscape studio. We create Scandinavian gardens in any climate zone — from Kaliningrad to Vladivostok and Sochi, and beyond Russia.",
  },
  "hero.stat1.value": { ru: "с 2014", en: "since 2014" },
  "hero.stat1.label": { ru: "года работаем", en: "in the craft" },
  "hero.stat2.value": { ru: "300+", en: "300+" },
  "hero.stat2.label": { ru: "садов в портфолио", en: "gardens in portfolio" },
  "hero.stat3.value": { ru: "7", en: "7" },
  "hero.stat3.label": { ru: "стран мира", en: "countries worldwide" },

  // ---- Featured projects ----
  "featured.label": { ru: "проект", en: "project" },

  // ---- Studio ----
  "studio.eyebrow": {
    ru: "Студия ландшафтного дизайна PlanoLand",
    en: "PlanoLand landscape design studio",
  },
  "studio.title": {
    ru: "Создаём среду, где рождаются новые сценарии жизни",
    en: "We create spaces where new life scenarios are born",
  },
  "studio.caption": {
    ru: "Синиша Предраговић и Лыхно Георгий Александрович — основатели PlanoLand",
    en: "Siniša Predragović and Georgiy A. Lykhno — founders of PlanoLand",
  },
  "studio.quote": {
    ru: "Не «у меня есть сад», а «я нахожусь в саду».",
    en: "Not “I have a garden”, but “I am in the garden”.",
  },
  "studio.body1": {
    ru: "Сад — это способ быть здесь и сейчас. Пространство, которое меняет образ мыслей и жизни, где человек чувствует опору, связь с собой и миром.",
    en: "A garden is a way to be here and now. A space that changes how you think and live, where a person feels grounded and connected to themselves and the world.",
  },
  "studio.body2": {
    ru: "Скандинавский сад — фирменный стиль PlanoLand. Это философия ощущения, состояния и мысли, в которой среда формируется вокруг человека.",
    en: "The Scandinavian garden is PlanoLand’s signature style — a philosophy of feeling, state and thought, where the environment is shaped around the person.",
  },
  "studio.cta": { ru: "Подробнее о нас", en: "More about us" },

  // ---- Principles ----
  "principles.title": {
    ru: "Принципы скандинавского сада",
    en: "Principles of the Scandinavian garden",
  },
  "principles.lede": {
    ru: "Гармония и спокойствие. Уверенность и безопасность. Взрыв эмоций и вдохновение. Такой сад становится настоящей инвестицией в состояние человека.",
    en: "Harmony and calm. Confidence and safety. A burst of emotion and inspiration. Such a garden becomes a real investment in a person’s state of being.",
  },

  // ---- Portfolio ----
  "portfolio.title": { ru: "Портфолио", en: "Portfolio" },
  "portfolio.all": { ru: "Все проекты", en: "All projects" },
  "portfolio.filter.all": { ru: "Все", en: "All" },
  "portfolio.filter.private": { ru: "Частные", en: "Private" },
  "portfolio.filter.public": { ru: "Общественные", en: "Public" },

  // ---- Catalog CTA ----
  "cta.eyebrow": {
    ru: "Каталог частных садов",
    en: "Private gardens catalogue",
  },
  "cta.title": {
    ru: "Получите подборку проектов PlanoLand",
    en: "Get a selection of PlanoLand projects",
  },
  "cta.name": { ru: "Ваше имя", en: "Your name" },
  "cta.contact": { ru: "Телефон или email", en: "Phone or email" },
  "cta.submit": { ru: "Скачать каталог", en: "Download catalogue" },
  "cta.consent": {
    ru: "Нажимая кнопку, вы соглашаетесь на обработку персональных данных.",
    en: "By clicking the button you agree to the processing of personal data.",
  },

  // ---- Form status / validation (Telegram submission) ----
  "form.message": {
    ru: "Сообщение",
    en: "Message",
  },
  "form.messagePlaceholder": {
    ru: "Расскажите о своём участке",
    en: "Tell us about your plot",
  },
  "form.submit": { ru: "Отправить", en: "Send" },
  "form.sending": { ru: "Отправка…", en: "Sending…" },
  "form.success": {
    ru: "Сообщение отправлено! ✓",
    en: "Message sent! ✓",
  },
  "form.error.required": {
    ru: "Пожалуйста, заполните обязательные поля.",
    en: "Please fill in the required fields.",
  },
  "form.error.too_short": {
    ru: "Слишком короткое значение.",
    en: "Value is too short.",
  },
  "form.error.too_long": {
    ru: "Слишком длинное значение.",
    en: "Value is too long.",
  },
  "form.error.name": {
    ru: "Введите имя (2–100 символов).",
    en: "Please enter a name (2–100 characters).",
  },
  "form.error.contact": {
    ru: "Введите телефон или email (5–254 символа).",
    en: "Please enter a phone or email (5–254 characters).",
  },
  "form.error.message": {
    ru: "Сообщение слишком короткое или слишком длинное (10–2000 символов).",
    en: "Message is too short or too long (10–2000 characters).",
  },
  "form.error.send": {
    ru: "Ошибка отправки. Попробуйте ещё раз.",
    en: "Failed to send. Please try again.",
  },

  // ---- Footer ----
  "footer.msk": { ru: "Москва, ул. Саврасова, д. 7, помещ. 2", en: "Moscow, Savrasova st., 7, prem. 2" },
  "footer.spb": {
    ru: "Санкт-Петербург, Большой Сампсониевский пр., 28 корп. 2, БЦ Mezon Plaza, офис 643",
    en: "St. Petersburg, Bolshoy Sampsonievsky pr., 28 bldg. 2, Mezon Plaza BC, office 643",
  },
  "footer.rights": {
    ru: "2020–2026. Материалы сайта могут быть использованы только с разрешения PlanoLand.",
    en: "2020–2026. Site materials may be used only with permission of PlanoLand.",
  },
  "footer.policy": {
    ru: "Политика обработки персональных данных",
    en: "Personal data processing policy",
  },
  "footer.agree": {
    ru: "Пользовательское соглашение",
    en: "User agreement",
  },
  "footer.documents": { ru: "Документы", en: "Documents" },

  // ---- Cookie / chat ----
  "cookie.text": {
    ru: "Наш сайт использует cookies для улучшения работы. Сервис Яндекс.Метрика также использует cookies.",
    en: "Our site uses cookies to improve your experience. Yandex.Metrica also uses cookies.",
  },
  "cookie.ok": { ru: "OK", en: "OK" },
  "chat.label": { ru: "чат", en: "chat" },

  // ---- Project detail ----
  "project.next": { ru: "Следующий проект", en: "Next project" },
  "project.backToPortfolio": {
    ru: "Все проекты",
    en: "All projects",
  },
  "project.spec.area": { ru: "Площадь", en: "Area" },
  "project.spec.year": { ru: "Год", en: "Year" },
  "project.spec.location": { ru: "Локация", en: "Location" },
  "project.spec.status": { ru: "Статус", en: "Status" },
  "project.spec.status.realized": { ru: "Реализован", en: "Realized" },
  "project.spec.status.concept": { ru: "Концепция", en: "Concept" },
  "project.aboutTitle": { ru: "О проекте", en: "About the project" },

  // ---- Render disclaimer (for visualization-only imagery) ----
  "disclaimer.renders": {
    ru: "Растения и озеленение на визуализациях приведены исключительно для наглядности и не являются посадочной ведомостью или итоговым ассортиментом.",
    en: "Plants and greenery in the renders are shown for visualization purposes only and do not constitute a planting schedule or final plant list.",
  },

  // ---- Services ----
  "services.eyebrow": {
    ru: "Услуги студии",
    en: "Studio services",
  },
  "services.title": {
    ru: "Полный цикл создания сада",
    en: "A full cycle of garden making",
  },
  "services.lede": {
    ru: "Ведём проект от первой встречи до реализации и ухода. Каждая стадия закреплена за специалистом и сопровождается договором.",
    en: "We carry the project from the first meeting to implementation and maintenance. Each stage has a dedicated specialist and a contract.",
  },

  // ---- Team ----
  "team.eyebrow": { ru: "Команда PlanoLand", en: "The PlanoLand team" },
  "team.title": {
    ru: "Люди, которые создают сады",
    en: "The people who make gardens",
  },
  "team.lede": {
    ru: "Архитекторы, инженеры, дендрологи и менеджеры проектов — все работают в студии штатно и сопровождают каждый сад лично.",
    en: "Architects, engineers, dendrologists and project managers — all in-house, each personally guiding every garden.",
  },

  // ---- Contacts ----
  "contacts.eyebrow": { ru: "Контакты", en: "Contacts" },
  "contacts.title": {
    ru: "Расскажите о своём участке",
    en: "Tell us about your plot",
  },
  "contacts.lede": {
    ru: "Оставьте заявку — менеджер свяжется в течение рабочего дня и предложит время для первой встречи.",
    en: "Leave a request — the manager will contact you within a business day and propose a time for the first meeting.",
  },
  "contacts.msk": { ru: "Офис в Москве", en: "Moscow office" },
  "contacts.spb": { ru: "Офис в Санкт-Петербурге", en: "St. Petersburg office" },

  // ---- Blog ----
  "blog.eyebrow": { ru: "Журнал", en: "Journal" },
  "blog.title": {
    ru: "Статьи и заметки студии",
    en: "Articles and notes from the studio",
  },
  "blog.lede": {
    ru: "Пишем о скандинавском саде, материалах, растениях и процессе работы над проектами.",
    en: "We write about the Scandinavian garden, materials, plants and the working process.",
  },

  // ---- Legal ----
  "legal.updated": { ru: "Последнее обновление", en: "Last updated" },
  "legal.toc": { ru: "Содержание", en: "Contents" },

  // ---- 404 ----
  "notfound.title": { ru: "Страница не найдена", en: "Page not found" },
  "notfound.body": {
    ru: "По этому адресу ничего нет. Вернитесь на главную или откройте портфолио.",
    en: "Nothing here at that address. Head back home or open the portfolio.",
  },
  "notfound.cta": { ru: "На главную", en: "Go home" },
} as const;

export type StringKey = keyof typeof strings;

/** Look up a localized string. Falls back to RU if EN is missing. */
export function useT() {
  const { contentLocale } = useLang();
  return (key: StringKey): string => {
    const entry = strings[key];
    if (!entry) return key;
    const value = entry[contentLocale];
    return value ?? entry.ru;
  };
}

/** Non-hook variant for use inside event handlers or outside components. */
export function translate(key: StringKey, locale: "ru" | "en"): string {
  const entry = strings[key];
  if (!entry) return key;
  return entry[locale] ?? entry.ru;
}
