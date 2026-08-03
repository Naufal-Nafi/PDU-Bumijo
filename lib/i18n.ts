export const locales = ["id", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "id";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function localizeField<T extends Record<string, unknown>>(
  obj: T,
  field: string,
  locale: Locale
): string {
  if (locale === "en") {
    const engValue = obj[`${field}_eng`];
    if (typeof engValue === "string" && engValue.trim() !== "") {
      return engValue;
    }
  }
  return (obj[field] as string) ?? "";
}
