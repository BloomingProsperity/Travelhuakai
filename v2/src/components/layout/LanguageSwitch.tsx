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
    <div className="inline-flex shrink-0 overflow-hidden rounded-full border border-line">
      {OPTIONS.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLang(option.code)}
          className={clsx(
            "px-2.5 py-1 text-xs font-bold uppercase tracking-normal transition sm:px-3 sm:tracking-widest",
            option.code === lang ? "bg-ink text-white" : "bg-white text-muted hover:text-ink"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
