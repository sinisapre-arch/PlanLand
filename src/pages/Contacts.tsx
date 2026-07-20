import { contactInfo } from "../data/assets";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import { useLang } from "../i18n/LangContext";
import { useT } from "../i18n/useT";

export default function Contacts() {
  const t = useT();
  const { contentLocale } = useLang();

  const offices = [
    {
      label: t("contacts.msk"),
      address: t("footer.msk"),
      phone: contactInfo.phones[0],
      phoneHref: contactInfo.phoneHrefs[0],
    },
    {
      label: t("contacts.spb"),
      address: t("footer.spb"),
      phone: contactInfo.phones[1],
      phoneHref: contactInfo.phoneHrefs[1],
    },
  ];

  return (
    <>
      <Seo title={t("nav.contacts")} description={t("contacts.lede")} />
      <PageHeader
        eyebrow={t("contacts.eyebrow")}
        title={t("contacts.title")}
        lede={t("contacts.lede")}
        tone="cream"
      />

      <section className="bg-cream px-4 pb-20 text-graphite sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1760px] gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Form */}
          <form
            className="grid gap-3 border border-graphite/25 p-5 sm:p-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              className="h-12 border border-graphite/30 bg-transparent px-4 text-sm uppercase tracking-[0.12em] outline-none placeholder:text-graphite/45"
              placeholder={t("cta.name")}
            />
            <input
              className="h-12 border border-graphite/30 bg-transparent px-4 text-sm uppercase tracking-[0.12em] outline-none placeholder:text-graphite/45"
              placeholder={t("cta.contact")}
            />
            <textarea
              rows={5}
              className="border border-graphite/30 bg-transparent px-4 py-3 text-sm uppercase tracking-[0.12em] outline-none placeholder:text-graphite/45"
              placeholder={contentLocale === "en" ? "Tell us about your plot" : "Расскажите о своём участке"}
            />
            <button
              type="submit"
              className="mt-2 flex h-14 items-center justify-center bg-graphite text-[11px] font-black uppercase tracking-[0.22em] text-cream transition hover:bg-moss"
            >
              {contentLocale === "en" ? "Send request" : "Отправить заявку"}
            </button>
            <p className="text-[10px] leading-relaxed text-graphite/50">{t("cta.consent")}</p>
          </form>

          {/* Offices */}
          <div className="grid content-start gap-8">
            {offices.map((office) => (
              <div key={office.label}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-graphite/55">
                  {office.label}
                </p>
                <p className="mt-3 text-sm uppercase leading-relaxed tracking-[0.1em] text-graphite/80">
                  {office.address}
                </p>
                <a
                  href={office.phoneHref}
                  className="mt-3 inline-flex border-b border-graphite pb-1 text-sm font-semibold uppercase tracking-[0.12em]"
                >
                  {office.phone}
                </a>
              </div>
            ))}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-graphite/55">
                {contentLocale === "en" ? "Email" : "Почта"}
              </p>
              <a
                href={contactInfo.emailHref}
                className="mt-3 inline-flex border-b border-graphite pb-1 text-sm font-semibold uppercase tracking-[0.12em]"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
