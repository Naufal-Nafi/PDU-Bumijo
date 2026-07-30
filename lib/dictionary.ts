import "server-only";
import type { Locale } from "./i18n";

const dictionaries = {
  id: () => import("@/messages/id").then((module) => module.default),
  en: () => import("@/messages/en").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;