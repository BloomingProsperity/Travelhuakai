import { i18n, type Lang } from "../data/i18n";

export const translate = (lang: Lang, key: string): string =>
  i18n[lang]?.[key] ?? i18n.en[key] ?? key;
