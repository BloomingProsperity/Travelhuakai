import { Link } from "react-router";
import { attractionsByCity } from "../../data/city-attractions";
import { CITY_LABELS, type CityId } from "../../data/transport";
import { useLang } from "../../store/language";

const CITY_ORDER: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];

const CITY_TAGLINE: Record<CityId, { en: string; zh: string; days: string }> = {
  beijing: {
    en: "Imperial capital · palace, hutong, Great Wall",
    zh: "皇城首都 · 宫殿、胡同、长城",
    days: "4–6"
  },
  shanghai: {
    en: "Bund colonial banks face Pudong glass towers",
    zh: "外滩对话浦东天际线",
    days: "3–5"
  },
  guangzhou: {
    en: "2,200-year trading port · yum cha · Cantonese street life",
    zh: "2200 年商都 · 早茶 · 粤语城市",
    days: "2–3"
  },
  shenzhen: {
    en: "Tech-city neighbour to Hong Kong · 5 border crossings",
    zh: "深港相邻的科技一线城 · 5 个口岸",
    days: "1–2"
  }
};

export default function CityPicker() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  return (
    <section aria-label={isZh ? "选城市" : "Pick a city"} className="flex flex-col gap-3">
      <header>
        <span className="text-xs font-bold uppercase tracking-widest text-muted">
          {isZh ? "Phase 1 城市" : "Phase 1 cities"}
        </span>
        <h2 className="text-2xl font-bold">
          {isZh ? "去哪个城市？" : "Which city are you going to?"}
        </h2>
      </header>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {CITY_ORDER.map((id) => {
          const hero = attractionsByCity(id)[0];
          const tag = CITY_TAGLINE[id];
          const label = CITY_LABELS[id];
          return (
            <li key={id}>
              <Link
                to={`/city/${id}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition hover:border-jade hover:shadow-md"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-paper">
                  <img
                    src={hero.imageUrl}
                    alt={isZh ? hero.nameZh : hero.nameEn}
                    loading="lazy"
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1 p-4">
                  <strong className="text-base font-bold leading-tight">
                    {isZh ? label.zh : label.en}
                  </strong>
                  <p className="text-xs leading-snug text-muted">{isZh ? tag.zh : tag.en}</p>
                  <span className="mt-auto pt-2 text-[10px] font-bold uppercase tracking-wider text-jade">
                    {isZh ? `建议 ${tag.days} 天 →` : `Stay ${tag.days} days →`}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
