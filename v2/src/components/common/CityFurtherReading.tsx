import { cityTourismPortals } from "../../data/city-tourism-portals";
import type { CityId } from "../../data/transport";
import { useLang } from "../../store/language";

type Props = { cityId: CityId };

export default function CityFurtherReading({ cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const portals = cityTourismPortals[cityId];
  if (!portals || portals.length === 0) return null;

  return (
    <section className="flex flex-col gap-3">
      <header>
        <span className="text-xs font-bold uppercase tracking-widest text-muted">
          {isZh ? "官方延伸阅读" : "Official further reading"}
        </span>
        <h2 className="text-xl font-bold">
          {isZh ? "本市官方文旅 / 政府英文门户" : "City tourism bureau & government portals"}
        </h2>
      </header>
      <ul className="grid gap-2 md:grid-cols-2">
        {portals.map((p) => (
          <li key={p.url}>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-1 rounded-lg border border-line bg-white p-4 hover:border-jade hover:bg-jade-soft"
            >
              <strong className="text-sm">{isZh ? p.labelZh : p.labelEn}</strong>
              <span className="text-xs text-muted">{isZh ? p.noteZh : p.noteEn}</span>
              <span className="text-[10px] uppercase tracking-wider text-jade">{new URL(p.url).hostname} →</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
