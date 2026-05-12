import { useState } from "react";
import clsx from "clsx";
import { allergyCardEn, allergyCardZh, cityFood } from "../../data/food";
import { CITY_LABELS, type CityId } from "../../data/transport";
import { useLang } from "../../store/language";
import PracticalBlock from "../common/PracticalBlock";
import CuisineDrawer from "../city/CuisineDrawer";

type Props = { cityId?: CityId };

export default function FoodGuide({ cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const cityScoped = Boolean(cityId);
  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const effectiveId: CityId = cityId ?? activeId;
  const active = cityFood.find((c) => c.cityId === effectiveId)!;

  return (
    <section
      id={cityScoped ? undefined : "food"}
      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
    >
      {!cityScoped && (
        <header>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "支柱 4" : "Pillar 4"}
          </span>
          <h2 className="text-2xl font-bold">{isZh ? "餐饮" : "Food"}</h2>
          <p className="text-sm text-muted">
            {isZh
              ? "四城地方菜文化、外国人友好餐区、外卖现状、过敏中文卡。"
              : "Local cuisines, foreigner-friendly districts, delivery-app reality, and an allergy card."}
          </p>
        </header>
      )}
      {cityScoped && <h2 className="text-xl font-bold">{isZh ? "餐饮" : "Food"}</h2>}

      {!cityScoped && (
        <div role="tablist" className="flex flex-wrap gap-2">
          {cityFood.map((city) => (
            <button
              key={city.cityId}
              type="button"
              role="tab"
              aria-selected={activeId === city.cityId}
              onClick={() => setActiveId(city.cityId)}
              className={clsx(
                "rounded-full border px-4 py-1.5 text-sm font-bold transition",
                activeId === city.cityId
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-ink hover:border-jade hover:text-jade"
              )}
            >
              {isZh ? CITY_LABELS[city.cityId].zh : CITY_LABELS[city.cityId].en}
            </button>
          ))}
        </div>
      )}

      <article className="grid gap-4 rounded-xl border border-line bg-white p-5 md:grid-cols-2">
        <section className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted">
              {isZh ? "地方菜文化" : "Local cuisine"}
            </h3>
            {active.cuisine.culturalNotes && (
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="text-[10px] font-bold uppercase tracking-wider text-jade hover:underline"
              >
                {isZh ? "查看吃法 →" : "How to eat it →"}
              </button>
            )}
          </div>
          <p className="text-sm leading-relaxed">{isZh ? active.cuisine.zh : active.cuisine.en}</p>
        </section>
        <Block titleEn="Foreigner-friendly districts" titleZh="外籍游客友好餐区" en={active.districts.en} zh={active.districts.zh} />
        <Block titleEn="Delivery apps" titleZh="外卖平台" en={active.deliveryNote.en} zh={active.deliveryNote.zh} />
        <section className="flex flex-col gap-2">
          <h3 className="text-xs font-bold uppercase tracking-widest text-muted">{isZh ? "注意事项" : "Pitfalls"}</h3>
          <ul className="grid gap-2">
            {active.pitfalls.map((p, i) => (
              <li key={i} className="rounded-lg bg-amber-50 p-3 text-xs leading-relaxed">
                {isZh ? p.zh : p.en}
              </li>
            ))}
          </ul>
        </section>
      </article>

      <CuisineDrawer city={active} open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <article className="flex flex-col gap-3 rounded-xl border border-line bg-paper p-5">
        <header>
          <h3 className="text-base font-bold">{isZh ? "过敏 / 忌口卡（交给服务员查看）" : "Allergy / dietary card (show to staff)"}</h3>
          <p className="text-xs text-muted">
            {isZh ? "把 ____ 替换成你的过敏原（中英都给）。出发前截屏存手机相册。" : "Fill in your allergen in both versions. Save a screenshot before you fly."}
          </p>
        </header>
        <div className="grid gap-3 md:grid-cols-2">
          <pre className="whitespace-pre-wrap rounded-lg border border-line bg-white p-4 text-sm leading-relaxed">{allergyCardEn}</pre>
          <pre className="whitespace-pre-wrap rounded-lg border border-line bg-white p-4 text-sm leading-relaxed">{allergyCardZh}</pre>
        </div>
      </article>

      <PracticalBlock pillar="food" cityId={cityId} />
    </section>
  );
}

function Block({ titleEn, titleZh, en, zh }: { titleEn: string; titleZh: string; en: string; zh: string }) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-xs font-bold uppercase tracking-widest text-muted">{isZh ? titleZh : titleEn}</h3>
      <p className="text-sm leading-relaxed">{isZh ? zh : en}</p>
    </section>
  );
}
