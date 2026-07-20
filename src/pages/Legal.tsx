import { useParams, useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import { useLang } from "../i18n/LangContext";
import { useT, type StringKey } from "../i18n/useT";

// TODO(rebrand): domain + legal entity below are placeholders for the old
// lburo.ru / ООО «Л-Бюро» values. Replace with PlanoLand's real domain and
// registered legal entity once confirmed.
const SITE_DOMAIN = "planoland.ru";

type LegalDoc = {
  key: "policy" | "agree" | "documents" | "policy-yandex";
  titleKey: StringKey;
  updated: string;
  // Plain representative paragraphs (real legal copy would replace these).
  body: { ru: string[]; en: string[] };
};

const docs: LegalDoc[] = [
  {
    key: "policy",
    titleKey: "footer.policy",
    updated: "2026-01-15",
    body: {
      ru: [
        `Настоящая Политика обработки персональных данных определяет порядок обработки и защиты PlanoLand информации о физических лицах, которая может быть получена при использовании сайта ${SITE_DOMAIN}.`,
        "Обработка персональных данных осуществляется на принципах законности, целевого использования и конфиденциальности. Согласие пользователя является правовым основанием обработки.",
        "Пользователь вправе отозвать согласие, направив заявление на электронную почту студии.",
      ],
      en: [
        `This Personal Data Processing Policy defines how PlanoLand handles and protects information about individuals obtained through the use of ${SITE_DOMAIN}.`,
        "Personal data is processed on the principles of legality, purpose limitation and confidentiality. User consent is the legal basis for processing.",
        "The user may withdraw consent by sending a statement to the studio email.",
      ],
    },
  },
  {
    key: "agree",
    titleKey: "footer.agree",
    updated: "2026-01-15",
    body: {
      ru: [
        `Используя сайт ${SITE_DOMAIN}, пользователь соглашается с настоящим Пользовательским соглашением.`,
        "Все материалы сайта являются объектом авторского права и могут быть использованы только с письменного разрешения PlanoLand.",
      ],
      en: [
        `By using ${SITE_DOMAIN}, the user agrees to this User Agreement.`,
        "All site materials are protected by copyright and may be used only with written permission of PlanoLand.",
      ],
    },
  },
  {
    key: "documents",
    titleKey: "footer.documents",
    updated: "2026-01-15",
    body: {
      ru: [
        "Раздел содержит документы, необходимые для работы с PlanoLand: уставные документы, реквизиты, типовые формы договоров.",
        "По запросу менеджер пришлёт актуальный комплект документов на электронную почту.",
      ],
      en: [
        "This section contains the documents needed to work with PlanoLand: statutory documents, company details and standard contract templates.",
        "On request, the manager will send the current document set by email.",
      ],
    },
  },
  {
    key: "policy-yandex",
    titleKey: "footer.policy",
    updated: "2026-01-15",
    body: {
      ru: [
        `Сайт ${SITE_DOMAIN} использует сервис Яндекс.Метрика, который применяет cookies для сбора статистики посещений.`,
        "Отключить сбор данных можно в настройках браузера или через сервис Яндекса.",
      ],
      en: [
        `The ${SITE_DOMAIN} site uses Yandex.Metrica, which uses cookies to collect visit statistics.`,
        "Data collection can be disabled in the browser settings or via the Yandex service.",
      ],
    },
  },
];

/** Map the `/op/` slug from the reference site to the user-agreement doc. */
function resolveKey(slug: string | undefined, pathname: string): LegalDoc["key"] {
  if (slug === "op" || pathname.endsWith("/op")) return "agree";
  if (slug === "policy-yandex" || pathname.endsWith("/policy-yandex")) return "policy-yandex";
  if (slug === "documents" || pathname.endsWith("/documents")) return "documents";
  return "policy";
}

export default function Legal() {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const t = useT();
  const { contentLocale } = useLang();
  const lang = contentLocale;

  const key = resolveKey(slug, pathname);
  const doc = docs.find((d) => d.key === key) ?? docs[0];
  const paragraphs = doc.body[lang];

  return (
    <>
      <Seo title={t(doc.titleKey)} description={paragraphs[0]} />
      <PageHeader eyebrow={t("legal.updated")} title={t(doc.titleKey)} tone="cream" />

      <section className="bg-cream px-4 pb-20 text-graphite sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-graphite/55">
            {t("legal.updated")}: {new Date(doc.updated).toLocaleDateString(lang === "en" ? "en-GB" : "ru-RU")}
          </p>
          <div className="space-y-6 text-base leading-relaxed text-graphite/80 sm:text-lg">
            {paragraphs.map((p, i) => (
              <p key={`${doc.key}-${i}`}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
