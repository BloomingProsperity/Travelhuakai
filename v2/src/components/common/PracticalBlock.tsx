import { pitfallsForPillar, type PillarId } from "../../data/practical-other";
import type { CityId } from "../../data/transport";
import { useLang } from "../../store/language";

const HEADER_LABEL: Record<PillarId, { en: string; zh: string }> = {
  entry: { en: "What to know before landing", zh: "落地前要知道的事" },
  transport: { en: "Practical transport pitfalls", zh: "交通实操避坑" },
  food: { en: "Practical food pitfalls", zh: "餐饮实操避坑" },
  emergency: { en: "Practical medical & emergency pitfalls", zh: "医疗 / 紧急实操避坑" }
};

type Props = { pillar: PillarId; cityId?: CityId };

export default function PracticalBlock({ pillar, cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const items = pitfallsForPillar(pillar, cityId);
  if (items.length === 0) return null;

  return (
    <section className="flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50/40 p-5">
      <header>
        <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
          {isZh ? HEADER_LABEL[pillar].zh : HEADER_LABEL[pillar].en}
        </span>
      </header>
      <ul className="grid gap-2 md:grid-cols-2">
        {items.map((p) => (
          <li key={p.id} className="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3">
            <strong className="text-sm leading-tight">{isZh ? p.titleZh : p.titleEn}</strong>
            <p className="text-xs leading-relaxed text-ink/80">{isZh ? p.bodyZh : p.bodyEn}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
