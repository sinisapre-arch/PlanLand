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
    ru: "Скандинавский дизайн, построенный своими руками",
    en: "Scandinavian design, built by hand",
  },
  "hero.title": {
    ru: "От первого эскиза до последнего камня",
    en: "From the first sketch to the last stone",
  },
  "hero.lede": {
    ru: "Мы проектируем ваш сад и строим его — одни и те же руки, от начала до конца. Пятнадцать лет скандинавского ландшафтного мастерства теперь работают в Подмосковье.",
    en: "We design your garden and we build it — the same hands, start to finish. Fifteen years of Scandinavian landscape craft, now at work in the Moscow region.",
  },
  "hero.stat1.value": { ru: "15 лет", en: "15 years" },
  "hero.stat1.label": { ru: "скандинавский дизайн и стройка", en: "Scandinavian design & construction" },
  "hero.stat2.value": { ru: "300+", en: "300+" },
  "hero.stat2.label": { ru: "садов спроектировано и построено", en: "gardens designed and built" },
  "hero.stat3.value": { ru: "1 команда", en: "1 team" },
  "hero.stat3.label": { ru: "дизайн через стройку, от начала до конца", en: "design through construction, start to finish" },

  // ---- Featured projects ----
  "featured.label": { ru: "проект", en: "project" },
  "featured.prev": { ru: "Предыдущий проект", en: "Previous project" },
  "featured.next": { ru: "Следующий проект", en: "Next project" },

  // ---- Studio ----
  "studio.eyebrow": {
    ru: "PlanoLand — студия ландшафтного дизайна",
    en: "PlanoLand landscape design studio",
  },
  "studio.title": {
    ru: "Создаём среду, где жизнь обретает новые сценарии",
    en: "We create spaces where life takes on new scenarios",
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
  "footer.msk": {
    ru: "Москва, ул. Зорге, д. 9А",
    en: "Zorge street 9A, Moscow",
  },
  "footer.rights": {
    ru: "2026. Материалы сайта могут быть использованы только с разрешения PlanoLand.",
    en: "2026. Site materials may be used only with permission of PlanoLand.",
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
      ru: "Ведём проект от первой встречи до реализации и ухода. Дизайн и замеры — у нас внутри, поэтому дешевле, чем нанимать их отдельно. Сад можно строить поэтадно, по сезонам — не обязательно всё сразу.",
      en: "We carry the project from the first meeting to implementation and maintenance. Design and surveying are in-house, so it costs less than hiring them separately. The garden can be built in phases across seasons — you don't have to build everything at once.",
    },

  // ---- Team ----
  "team.eyebrow": { ru: "Команда PlanoLand", en: "The PlanoLand team" },
  "team.title": {
    ru: "Люди, которые создают сады",
    en: "The people who make gardens",
  },
  "team.lede": {
    ru: "Синиша — дизайнер и строитель с 15-летним опытом в Швеции. Георгий — основатель Planodom, строит дома под ключ за 60 дней. Вместе — полный цикл: дом и сад.",
    en: "Sinisa — designer & builder with 15 years in Sweden. Georgy — founder of Planodom, builds turnkey homes in 60 days. Together — full cycle: house and garden.",
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
  "contacts.msk": { ru: "Офис в Подмосковье", en: "Moscow region office" },

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
