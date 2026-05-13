import { useEffect, useState } from "react";
import { attractionsByCity } from "../../data/city-attractions";
import type { CityId } from "../../data/transport";
import { unsplashSrcSet } from "../../lib/unsplash";
import { useLang } from "../../store/language";

type Props = { cityId: CityId };

const ROTATE_MS = 5000;

export default function CityImagePanel({ cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const attractions = attractionsByCity(cityId).filter((a) => a.tier === "must-visit");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (attractions.length <= 1) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % attractions.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [attractions.length]);

  if (attractions.length === 0) return null;
  const current = attractions[idx];

  return (
    <div className="hidden min-w-0 lg:block">
    <aside aria-label={isZh ? "城市代表图" : "City landmark"} className="self-start lg:sticky lg:top-24">
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="aspect-[3/4] w-full">
            <img
              key={current.id}
              src={current.imageUrl}
              srcSet={unsplashSrcSet(current.imageUrl)}
              sizes="(min-width: 1024px) 300px, 100vw"
              alt={isZh ? current.nameZh : current.nameEn}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="h-full w-full animate-[fadeUp_500ms_ease] object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div className="flex flex-col gap-1 p-3">
            <strong className="text-sm leading-tight">
              {isZh ? current.nameZh : current.nameEn}
            </strong>
            <span className="text-[10px] text-muted-foreground">
              {isZh ? current.districtZh : current.districtEn} · {current.imageCredit}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          {attractions.map((a, i) => (
            <button
              key={a.id}
              type="button"
              aria-label={isZh ? a.nameZh : a.nameEn}
              onClick={() => setIdx(i)}
              className={`h-1.5 w-6 rounded-full transition ${
                i === idx ? "bg-primary" : "bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
      </aside>
    </div>
  );
}
