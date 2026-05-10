import { createContext, useContext } from "react";
import type { Lang } from "../data/i18n";

export type LanguageContextValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
  t: (key: string) => string;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLang(): LanguageContextValue {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLang must be used within <LanguageProvider>");
  return value;
}
