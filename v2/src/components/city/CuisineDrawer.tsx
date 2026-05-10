import { useEffect } from "react";
import clsx from "clsx";
import type { CityFood } from "../../data/food";
import { useLang } from "../../store/language";

type Props = {
  city: CityFood;
  open: boolean;
  onClose: () => void;
};

export default function CuisineDrawer({ city, open, onClose }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const notes = city.cuisine.culturalNotes;

  return (
    <>
      <div
        aria-hidden
        onClick={onClose}
        className={clsx(
          "fixed inset-0 z-40 bg-ink/30 backdrop-blur-sm transition-opacity duration-200",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={isZh ? "美食文化与吃法" : "Food culture and how to eat it"}
        className={clsx(
          "fixed inset-x-0 bottom-0 z-50 flex max-h-[85vh] flex-col rounded-t-2xl bg-paper shadow-2xl transition-transform duration-300 sm:bottom-auto sm:right-0 sm:top-0 sm:h-full sm:max-h-none sm:max-w-[480px] sm:rounded-none sm:rounded-l-2xl",
          open
            ? "translate-y-0 sm:translate-x-0"
            : "translate-y-full sm:translate-y-0 sm:translate-x-full"
        )}
      >
        <header className="flex items-start justify-between gap-3 border-b border-line px-5 py-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-bold uppercase tracking-widest text-muted">
              {isZh ? "城市美食文化" : "Local food culture"}
            </span>
            <h2 className="text-xl font-bold leading-tight">
              {isZh ? city.cityZh : city.cityEn}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={isZh ? "关闭" : "Close"}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted hover:bg-line/40 hover:text-ink"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </header>
        <div className="flex flex-col gap-4 overflow-y-auto px-5 py-5 text-sm leading-relaxed">
          <p className="text-ink/90">{isZh ? city.cuisine.zh : city.cuisine.en}</p>
          {notes && (
            <section className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-muted">
                {isZh ? "文化与吃法" : "Culture & how to eat it"}
              </span>
              <p className="text-ink/85">{isZh ? notes.zh : notes.en}</p>
            </section>
          )}
          <p className="border-t border-line pt-3 text-[11px] text-muted">
            {isZh
              ? "本站只介绍菜系与饮食习惯，不推荐具体餐厅。具体到店选择请用大众点评 / 美团等本地平台。"
              : "We cover cuisines and food culture only — no specific restaurant picks. Use Dianping / Meituan for venue selection."}
          </p>
        </div>
      </aside>
    </>
  );
}
