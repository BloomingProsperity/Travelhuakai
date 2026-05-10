import clsx from "clsx";
import type { CityRecord } from "../../data/atlas";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";
import { useCityViewCount, useRecordCityView } from "../../hooks/useCityViews";
import { formatNumber } from "../../lib/format";

export default function CityList({ cities }: { cities: CityRecord[] }) {
  const { t, lang } = useLang();
  const { selectedCityId, selectCity } = useAtlas();
  const recordView = useRecordCityView();

  if (!cities.length) {
    return (
      <div className="grid place-items-center rounded-xl border border-dashed border-line p-8 text-sm text-muted">
        {t("mapHintPending")}
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {cities.map((city) => (
        <CityCard
          key={city.id}
          city={city}
          active={city.id === selectedCityId}
          onSelect={() => {
            recordView(city.id);
            selectCity(city.id);
          }}
          viewsLabel={t("views")}
          lang={lang}
        />
      ))}
    </ul>
  );
}

type CardProps = {
  city: CityRecord;
  active: boolean;
  onSelect: () => void;
  viewsLabel: string;
  lang: "en" | "zh";
};

function CityCard({ city, active, onSelect, viewsLabel, lang }: CardProps) {
  const total = useCityViewCount(city.id, city.baseViews);
  return (
    <li>
      <button
        type="button"
        onClick={onSelect}
        className={clsx(
          "flex w-full flex-col gap-1 rounded-xl border bg-white px-4 py-3 text-left transition",
          active ? "border-jade ring-1 ring-jade/40" : "border-line hover:border-jade/40"
        )}
      >
        <strong className="text-base">{lang === "zh" ? city.zh : city.name}</strong>
        <span className="text-xs text-muted">{lang === "zh" ? city.name : city.zh}</span>
        <span className="text-sm">{lang === "zh" ? city.museumZh || city.museum : city.museum}</span>
        <span className="mt-1 text-xs text-muted">
          {formatNumber(total)} {viewsLabel}
        </span>
      </button>
    </li>
  );
}
