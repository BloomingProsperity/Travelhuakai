import clsx from "clsx";
import { attractionsByCity, type Attraction } from "../../data/city-attractions";
import type { CityId } from "../../data/transport";
import { useLang } from "../../store/language";

type Props = { cityId: CityId };

export default function CityHero({ cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const attractions = attractionsByCity(cityId);
  if (attractions.length === 0) return null;

  return (
    <section className="flex flex-col gap-3">
      <header>
        <span className="text-xs font-bold uppercase tracking-widest text-muted">
          {isZh ? "本市标志景点" : "Signature attractions"}
        </span>
        <h2 className="text-2xl font-bold">
          {isZh ? "去之前先认认这几个地方" : "Know these places before you go"}
        </h2>
      </header>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {attractions.map((a) => (
          <AttractionCard key={a.id} attraction={a} isZh={isZh} />
        ))}
      </ul>
    </section>
  );
}

function AttractionCard({ attraction: a, isZh }: { attraction: Attraction; isZh: boolean }) {
  return (
    <li className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
      <a
        href={a.officialUrl}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-col gap-0"
      >
        <div className="aspect-[16/10] w-full overflow-hidden bg-paper">
          <img
            src={a.imageUrl}
            alt={isZh ? a.nameZh : a.nameEn}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
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
                ? isZh ? "必去" : "Must-visit"
                : isZh ? "值得去" : "Worth-it"}
            </span>
            <span className="text-[10px] text-muted">
              {isZh ? a.districtZh : a.districtEn}
            </span>
          </div>
          <strong className="text-sm leading-tight">
            {isZh ? a.nameZh : a.nameEn}
          </strong>
          <p className="line-clamp-3 text-xs leading-relaxed text-ink/80">
            {isZh ? a.whyZh : a.whyEn}
          </p>
          <span className="text-[10px] text-muted/70">
            {isZh ? "图片：" : "Photo: "}
            {a.imageCredit}
          </span>
        </div>
      </a>
    </li>
  );
}
