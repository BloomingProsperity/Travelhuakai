import { useMemo, useState } from "react";
import clsx from "clsx";
import { attractionsByCity } from "../../data/city-attractions";
import type { CityId } from "../../data/transport";
import { useLang } from "../../store/language";

type Props = { cityId: CityId };

const CITY_BLURB: Record<CityId, { en: string; zh: string }> = {
  beijing: {
    en: "Beijing is the imperial capital — 600 years of palace, temple, and tomb sit on a single north–south axis through the city. The Great Wall is an hour out. Hutong alleys hide the best dumplings. Plan 4–6 days; you will not be bored.",
    zh: "北京是中国的政治与文化首都——600 年皇城中轴线、故宫、北郊的长城、老城胡同、全国最密集的博物馆与寺庙。外国游客首访通常停留 4–6 天。"
  },
  shanghai: {
    en: "Shanghai is China at its most international. The Bund — old European banks on the river — stares at the glass towers of Pudong. The former French Concession is plane trees, garden villas, and good coffee. Hangzhou and Suzhou are an hour away by high-speed rail. 3–5 days does it.",
    zh: "上海是中国的商贸门户——外滩租界银行群正对浦东金融天际线；原法租界梧桐街道与咖啡馆文化；一小时高铁可达杭州西湖与苏州园林。首访建议 3–5 天。"
  },
  guangzhou: {
    en: "Guangzhou has been a trading port for 2,200 years and still works that way. Yum cha at dawn, Cantonese spoken on the street, Lingnan-style courtyards, and the Pearl River through it all. Twice a year (April and October) the Canton Fair fills the city; prices spike. Hong Kong is 47 minutes away by HSR. 2–3 days is enough for a first trip.",
    zh: "广州是华南 2200 年商都——清晨饮茶、岭南建筑、珠江、粤语城市气质，半年一届的广交会（4 月 / 10 月）期间价格明显上涨。高铁 47 分钟到香港西九龙。首访安排 2–3 天较合适。"
  },
  shenzhen: {
    en: "Shenzhen went from fishing village to one of the world's top tech cities in 40 years. It's also Hong Kong's backyard — five border crossings, an hour by metro from Causeway Bay. Most foreigners come for a 1–2 day shopping/eating run rather than a stand-alone trip. Window of the World, the OCT creative district, and Dapeng's old coast are the main draws.",
    zh: "深圳是中国最年轻的一线城市——40 年从渔村到全球科技中心。世界之窗、华侨城创意园、蛇口外籍友好海滨、大鹏古城、5 个深港陆海口岸——更常被安排为深港跨境 1–2 天行程，而非单独目的地。"
  }
};

const CITY_FACTS: Record<CityId, Array<{ en: string; zh: string }>> = {
  beijing: [
    { en: "16 districts", zh: "16 个行政区" },
    { en: "21.9 M residents", zh: "常住人口 2,190 万" },
    { en: "PEK + PKX airports", zh: "首都 + 大兴 双机场" },
    { en: "29 metro lines / 523 stations", zh: "29 条地铁线 / 523 站" }
  ],
  shanghai: [
    { en: "16 districts", zh: "16 个行政区" },
    { en: "24.9 M residents", zh: "常住人口 2,490 万" },
    { en: "PVG + SHA airports", zh: "浦东 + 虹桥 双机场" },
    { en: "21 metro lines / 517 stations", zh: "21 条地铁线 / 517 站" }
  ],
  guangzhou: [
    { en: "11 districts", zh: "11 个行政区" },
    { en: "18.7 M residents", zh: "常住人口 1,870 万" },
    { en: "CAN (Baiyun) — T3 opened 2025-10", zh: "白云机场 — T3 2025-10 启用" },
    { en: "16 metro lines + Foshan + intercity rail", zh: "16 条地铁 + 佛山线 + 城际" }
  ],
  shenzhen: [
    { en: "10 districts", zh: "10 个行政区" },
    { en: "17.8 M residents", zh: "常住人口 1,780 万" },
    { en: "SZX (Bao'an) airport", zh: "宝安机场" },
    { en: "5 HK border crossings", zh: "5 个深港口岸" }
  ]
};

const ALL_KEY = "__all";

export default function CityIntro({ cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const attractions = attractionsByCity(cityId);
  const blurb = CITY_BLURB[cityId];
  const facts = CITY_FACTS[cityId];

  const districts = useMemo(() => {
    const seen = new Map<string, { en: string; zh: string; count: number }>();
    for (const a of attractions) {
      const key = a.districtEn;
      const existing = seen.get(key);
      if (existing) existing.count += 1;
      else seen.set(key, { en: a.districtEn, zh: a.districtZh, count: 1 });
    }
    return Array.from(seen.entries()).map(([key, value]) => ({ key, ...value }));
  }, [attractions]);

  const [selected, setSelected] = useState<string>(ALL_KEY);

  const visible = selected === ALL_KEY
    ? attractions
    : attractions.filter((a) => a.districtEn === selected);

  return (
    <section id="intro" className="flex flex-col gap-6 scroll-mt-24">
      <div className="flex flex-col gap-3">
        <p className="text-base leading-relaxed text-ink/85">
          {isZh ? blurb.zh : blurb.en}
        </p>
        <ul className="flex flex-wrap gap-2">
          {facts.map((f) => (
            <li
              key={f.en}
              className="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-muted"
            >
              {isZh ? f.zh : f.en}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <header className="flex flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "标志景点 · 按区筛选" : "Signature attractions · filter by district"}
          </span>
          <h2 className="text-xl font-bold">
            {isZh ? "按区查看景点" : "Pick a district to see what's there"}
          </h2>
        </header>

        <div role="tablist" aria-label={isZh ? "区筛选" : "District filter"} className="flex flex-wrap gap-2">
          <DistrictChip
            label={isZh ? "全部" : "All"}
            count={attractions.length}
            active={selected === ALL_KEY}
            onClick={() => setSelected(ALL_KEY)}
          />
          {districts.map((d) => (
            <DistrictChip
              key={d.key}
              label={isZh ? d.zh : d.en}
              count={d.count}
              active={selected === d.key}
              onClick={() => setSelected(d.key)}
            />
          ))}
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {visible.map((a) => (
            <li id={a.id} key={a.id} className="scroll-mt-24 flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
              <div className="flex items-center justify-between gap-2">
                <span
                  className={clsx(
                    "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                    a.tier === "must-visit"
                      ? "bg-jade-soft text-jade"
                      : "bg-amber-100 text-amber-900"
                  )}
                >
                  {a.tier === "must-visit"
                    ? isZh ? "必看" : "Must-visit"
                    : isZh ? "值得一看" : "Worth-it"}
                </span>
                <span className="text-[10px] text-muted">{isZh ? a.districtZh : a.districtEn}</span>
              </div>
              <strong className="text-sm leading-tight">{isZh ? a.nameZh : a.nameEn}</strong>
              <p className="text-xs leading-relaxed text-ink/80">
                {isZh ? a.whyZh : a.whyEn}
              </p>
              <a
                href={a.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="self-start text-[10px] font-bold uppercase tracking-wider text-jade hover:underline"
              >
                {isZh ? "官方页面 →" : "Official →"}
              </a>
            </li>
          ))}
        </ul>
        {visible.length === 0 && (
          <p className="rounded-lg border border-dashed border-line bg-paper p-4 text-sm text-muted">
            {isZh ? "本区暂无收录景点" : "No attractions yet for this district."}
          </p>
        )}
      </div>
    </section>
  );
}

function DistrictChip({
  label,
  count,
  active,
  onClick
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={clsx(
        "rounded-full border px-3 py-1.5 text-xs font-bold transition",
        active
          ? "border-ink bg-ink text-white"
          : "border-line bg-white text-ink hover:border-jade hover:text-jade"
      )}
    >
      {label}
      <span className={clsx("ml-1.5 text-[10px]", active ? "text-white/70" : "text-muted")}>
        {count}
      </span>
    </button>
  );
}
