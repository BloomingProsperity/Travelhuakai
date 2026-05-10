import clsx from "clsx";
import { atlasData } from "../../data/atlas";
import { typeLabels } from "../../data/i18n";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";

export default function ProvinceRail() {
  const { lang, t } = useLang();
  const { selectedProvinceId, selectProvince } = useAtlas();

  return (
    <aside aria-label={t("provinceLevelRegions")} className="flex flex-col gap-2">
      <header className="flex items-baseline justify-between px-1">
        <strong className="text-xs font-bold uppercase tracking-widest text-muted">{t("provinceLevelRegions")}</strong>
        <span className="text-xs text-muted">{atlasData.length}</span>
      </header>
      <div className="flex max-h-[420px] flex-col gap-1 overflow-y-auto pr-1">
        {atlasData.map((p) => {
          const active = p.id === selectedProvinceId;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => selectProvince(p.id)}
              className={clsx(
                "flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-left transition",
                active ? "border-jade/40 bg-jade-soft" : "hover:bg-paper"
              )}
            >
              <span className="leading-tight">
                <strong className="block text-sm font-bold">{lang === "zh" ? p.zh : p.name}</strong>
                <small className="block text-xs text-muted">
                  {lang === "zh" ? `${p.name} · ${typeLabels.zh[p.type]}` : `${p.zh} · ${typeLabels.en[p.type]}`}
                </small>
              </span>
              <span className="text-xs text-muted">{p.cities.length}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
