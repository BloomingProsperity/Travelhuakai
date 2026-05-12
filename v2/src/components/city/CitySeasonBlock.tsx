import clsx from "clsx";
import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
import { CITY_LABELS, type CityId } from "../../data/transport";
import { useLang } from "../../store/language";

type Props = { cityId: CityId };

const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
  low: { en: "Low rain", zh: "少雨", strength: 1 },
  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
};

const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
};

export default function CitySeasonBlock({ cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const season = seasonByCity(cityId);
  const city = CITY_LABELS[cityId];

  return (
    <div className="flex flex-col gap-5">
      <header className="flex flex-col gap-1">
        <span className="text-xs font-bold uppercase tracking-widest text-muted">
          {isZh ? "最佳季节" : "When to visit"}
        </span>
        <h2 className="text-xl font-bold">
          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
        </h2>
      </header>

      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
          {isZh ? "最佳月份" : "Best months"}
        </span>
        <div className="mt-2 text-2xl font-bold text-yellow-950">
          {isZh ? season.bestMonths.zh : season.bestMonths.en}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
          {isZh ? season.reason.zh : season.reason.en}
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {season.monthlyClimate.map((climate) => {
          const rain = rainfallMeta[climate.rainfall];
          const crowd = crowdMeta[climate.crowdLevel];
          return (
            <article
              key={climate.monthRange}
              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold">{climate.monthRange}</h3>
                  <p className="text-2xl font-bold tabular-nums">
                    {climate.tempC.low} - {climate.tempC.high} C
                  </p>
                </div>
                <RainIcon level={climate.rainfall} />
              </div>

              <div className="grid gap-2 text-xs">
                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
                    {isZh ? crowd.zh : crowd.en}
                  </span>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-ink/80">
                {isZh ? climate.summary.zh : climate.summary.en}
              </p>
            </article>
          );
        })}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
        <ul className="grid gap-2">
          {season.watchOuts.map((item) => (
            <li
              key={item.en}
              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
            >
              {isZh ? item.zh : item.en}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function RainIcon({ level }: { level: RainfallLevel }) {
  const { strength } = rainfallMeta[level];
  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
    >
      {[1, 2, 3].map((value) => (
        <span
          key={value}
          className={clsx(
            "mb-2 block w-1.5 rounded-full bg-sky-600",
            value <= strength ? "opacity-90" : "opacity-20",
            value === 1 && "h-2",
            value === 2 && "h-3",
            value === 3 && "h-4"
          )}
        />
      ))}
    </span>
  );
}
