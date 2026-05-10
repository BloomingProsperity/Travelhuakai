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
    <div className="inline-flex overflow-hidden rounded-full border border-line">
      {OPTIONS.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLang(option.code)}
          className={clsx(
            "px-3 py-1 text-xs font-bold uppercase tracking-widest transition",
            option.code === lang ? "bg-ink text-white" : "bg-white text-muted hover:text-ink"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
