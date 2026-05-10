import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Lang } from "../data/i18n";
import { translate } from "../lib/i18n";
import { LanguageContext } from "./language";

const STORAGE_KEY = "chinaAtlas:language";

const readInitial = (): Lang => {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem(STORAGE_KEY) === "zh" ? "zh" : "en";
};

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitial);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: (key: string) => translate(lang, key) }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
