import clsx from "clsx";
import { useLang } from "../../store/language";
import type { Lang } from "../../data/i18n";

const OPTIONS: Array<{ code: Lang; label: string }> = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" }
];

export default function LanguageSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label={lang === "zh" ? "切换语言" : "Switch language"}
      className="inline-flex shrink-0 overflow-hidden rounded-full border border-line"
    >
      {OPTIONS.map((option) => {
        const active = option.code === lang;
        return (
          <button
            key={option.code}
            type="button"
            aria-pressed={active}
            aria-label={
              option.code === "en"
                ? lang === "zh" ? "切换到英文" : "Switch to English"
                : lang === "zh" ? "切换到中文" : "Switch to Chinese"
            }
            onClick={() => setLang(option.code)}
            className={clsx(
              "px-2.5 py-1 text-xs font-bold uppercase tracking-normal transition sm:px-3 sm:tracking-widest",
              active ? "bg-ink text-white" : "bg-white text-muted hover:text-ink dark:bg-paper"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
