import { useId, useMemo, useState } from "react";
import { useLang } from "../../store/language";
import { useAtlas } from "../../store/atlas";
import { findBestMatch, getAllRecords } from "../../lib/search";
import { placeTypeLabels } from "../../data/i18n";

export default function PlaceSearch() {
  const { t, lang } = useLang();
  const { selectPlace } = useAtlas();
  const [value, setValue] = useState("");
  const [hint, setHint] = useState<string | null>(null);
  const datalistId = useId();

  const suggestions = useMemo(() => getAllRecords().slice(0, 120), []);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const record = findBestMatch(value);
    if (!record) {
      setHint(t("searchNoMatch"));
      return;
    }
    selectPlace(record.provinceId, record.cityId ?? null);
    setHint(`${t("searchJumped")} ${lang === "zh" ? record.zh : record.en}`);
    document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={submit} className="flex flex-1 items-center gap-2">
      <input
        type="search"
        list={datalistId}
        autoComplete="off"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={t("searchPlaceholder")}
        className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2 text-sm focus:border-ink focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
      >
        {t("searchButton")}
      </button>
      <datalist id={datalistId}>
        {suggestions.map((record, i) => {
          const primary = lang === "zh" ? record.zh : record.en;
          const typeLabel = placeTypeLabels[lang][record.type] ?? record.type;
          return <option key={`${record.provinceId}-${record.cityId ?? ""}-${i}`} value={primary} label={`${primary} · ${typeLabel}`} />;
        })}
      </datalist>
      {hint && <span className="ml-2 hidden text-xs text-muted lg:inline">{hint}</span>}
    </form>
  );
}
