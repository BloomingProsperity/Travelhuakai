import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Lang } from "../data/i18n";
import { translate } from "../lib/i18n";
import { LanguageContext } from "./language";

export const LANGUAGE_STORAGE_KEY = "chinaAtlas:language";

export const readInitialLanguage = (): Lang => {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === "zh" ? "zh" : "en";
};

export const htmlLangFor = (lang: Lang): "en" | "zh-Hans" => (lang === "zh" ? "zh-Hans" : "en");

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "zh") setLangState("zh");
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLangFor(lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
    }
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: (key: string) => translate(lang, key) }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
