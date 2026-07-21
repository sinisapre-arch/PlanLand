import { useState } from "react";
import { useLang } from "../i18n/LangContext";
import { type StringKey, useT } from "../i18n/useT";
import {
  type ProjectType,
  type TelegramSubmitResult,
  submitToTelegram,
  validateField,
} from "./telegram";

export type FormStatus =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error"; messageKey: StringKey };

type FormValues = {
  name: string;
  contact: string;
  message: string;
};

const EMPTY: FormValues = { name: "", contact: "", message: "" };

/**
 * Shared contact-form state for both the Contacts page form and the Home
 * CatalogCta form. Handles validation, submission to the Telegram worker,
 * and localized status messages.
 */
export function useTelegramForm(source: ProjectType) {
  const t = useT();
  const { contentLocale } = useLang();
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [status, setStatus] = useState<FormStatus>({ kind: "idle" });

  const setValue = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear any error as soon as the user edits a field.
    if (status.kind === "error") setStatus({ kind: "idle" });
  };

  const reset = () => {
    setValues(EMPTY);
    setStatus({ kind: "idle" });
  };

  const validate = (): { ok: true } | { ok: false; messageKey: StringKey } => {
    const vName = validateField(values.name, "name");
    if (!vName.ok) {
      return { ok: false, messageKey: mapFieldError("name", vName.reason) };
    }
    const vContact = validateField(values.contact, "contact");
    if (!vContact.ok) {
      return {
        ok: false,
        messageKey: mapFieldError("contact", vContact.reason),
      };
    }
    const vMessage = validateField(values.message, "message");
    if (!vMessage.ok) {
      return {
        ok: false,
        messageKey: mapFieldError("message", vMessage.reason),
      };
    }
    return { ok: true };
  };

  /** Returns true if submission succeeded. */
  const submit = async (): Promise<boolean> => {
    const v = validate();
    if (!v.ok) {
      setStatus({ kind: "error", messageKey: v.messageKey });
      return false;
    }

    setStatus({ kind: "sending" });
    const result: TelegramSubmitResult = await submitToTelegram({
      name: values.name,
      contact: values.contact,
      message: values.message,
      source,
    });

    if (result.ok) {
      setStatus({ kind: "success" });
      setValues(EMPTY);
      return true;
    }
    setStatus({ kind: "error", messageKey: "form.error.send" });
    return false;
  };

  const statusText = (() => {
    switch (status.kind) {
      case "idle":
        return "";
      case "sending":
        return t("form.sending");
      case "success":
        return t("form.success");
      case "error":
        return t(status.messageKey);
    }
  })();

  // Keep language toggle honest: re-derive the visible status text on locale
  // change. (t already depends on contentLocale via useLang inside useT.)
  void contentLocale;

  return {
    values,
    setValue,
    status,
    statusText,
    submit,
    reset,
  };
}

function mapFieldError(
  field: "name" | "contact" | "message",
  reason: "required" | "too_short" | "too_long",
): StringKey {
  if (field === "name") return "form.error.name";
  if (field === "contact") return "form.error.contact";
  if (reason === "required") return "form.error.required";
  if (reason === "too_short") return "form.error.too_short";
  return "form.error.too_long";
}
