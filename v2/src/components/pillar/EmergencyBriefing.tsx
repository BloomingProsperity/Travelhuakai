import { useState } from "react";
import clsx from "clsx";
import {
  cityHotlines,
  embassies,
  hospitals,
  hospitalVisitFlow,
  mfaConsular,
  nationalEmergency
} from "../../data/emergency";
import { CITY_LABELS, type CityId } from "../../data/transport";
import { useLang } from "../../store/language";
import PracticalBlock from "../common/PracticalBlock";

const CITIES: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];

type Props = { cityId?: CityId };

export default function EmergencyBriefing({ cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const cityScoped = Boolean(cityId);
  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
  const effectiveId: CityId = cityId ?? activeId;

  const cityHospitals = hospitals.filter((h) => h.cityId === effectiveId);
  const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;

  return (
    <section
      id={cityScoped ? undefined : "emergency"}
      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
    >
      {!cityScoped && (
        <header>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "支柱 5" : "Pillar 5"}
          </span>
          <h2 className="text-2xl font-bold">{isZh ? "紧急 / 医疗 / 领事" : "Emergency, Medical & Consular"}</h2>
        </header>
      )}
      {cityScoped && <h2 className="text-xl font-bold">{isZh ? "应急 / 医疗" : "Emergency & Medical"}</h2>}

      <ul className="grid gap-2 grid-cols-2 md:grid-cols-4">
        {nationalEmergency.map((row) => (
          <li key={row.number} className="flex flex-col gap-1 rounded-xl border border-line bg-white p-4">
            <strong className="text-3xl leading-none">{row.number}</strong>
            <span className="text-xs font-bold uppercase tracking-widest text-muted">
              {isZh ? row.labelZh : row.labelEn}
            </span>
            <p className="text-xs leading-snug text-ink/80">{isZh ? row.noteZh : row.noteEn}</p>
          </li>
        ))}
      </ul>

      {!cityScoped && (
        <div role="tablist" className="flex flex-wrap gap-2">
          {CITIES.map((id) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeId === id}
              onClick={() => setActiveId(id)}
              className={clsx(
                "rounded-full border px-4 py-1.5 text-sm font-bold transition",
                activeId === id
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-ink hover:border-jade hover:text-jade"
              )}
            >
              {isZh ? CITY_LABELS[id].zh : CITY_LABELS[id].en}
            </button>
          ))}
        </div>
      )}

      <article className="grid gap-4 rounded-xl border border-line bg-white p-5 md:grid-cols-[260px_1fr]">
        <section className="flex flex-col gap-2 rounded-lg bg-paper p-4">
          <span className="text-xs font-bold uppercase tracking-widest text-muted">{isZh ? "城市热线" : "City hotline"}</span>
          <strong className="text-2xl leading-none">{cityHotline.number}</strong>
          <ul className="flex flex-wrap gap-1 text-[10px] uppercase tracking-wider">
            {cityHotline.langs.map((l) => (
              <li key={l} className="rounded-full bg-white px-2 py-0.5 text-muted">{l}</li>
            ))}
          </ul>
          <p className="text-xs leading-snug">{isZh ? cityHotline.noteZh : cityHotline.noteEn}</p>
        </section>

        <section className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-muted">{isZh ? "外籍友好医院" : "Foreign-friendly hospitals"}</span>
          <ul className="grid gap-2">
            {cityHospitals.map((h) => (
              <li key={h.nameEn} className="flex flex-col gap-1 rounded-lg border border-line p-3">
                <strong className="text-sm leading-tight">{isZh ? h.nameZh : h.nameEn}</strong>
                <span className="text-xs text-muted">{h.addressEn}</span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
                  <span><span className="font-bold">{isZh ? "总机" : "Main"}:</span> {h.phone}</span>
                  {h.emergencyPhone && (
                    <span><span className="font-bold">{isZh ? "急诊" : "ER"}:</span> {h.emergencyPhone}</span>
                  )}
                </div>
                <span className="text-xs text-muted">{h.intlDept}</span>
                <span className="text-xs text-muted">{h.hours}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <section className="flex flex-col gap-2">
        <h3 className="text-sm font-bold uppercase tracking-widest text-muted">{isZh ? "主要驻华大使馆" : "Major embassies in China"}</h3>
        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {embassies.map((e) => (
            <li key={e.country} className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
              <strong className="text-sm">{isZh ? `${e.countryZh}（${e.country}）` : e.country}</strong>
              <span className="text-xs text-muted">{e.address}</span>
              <span className="text-xs"><span className="font-bold">{isZh ? "总机" : "Main"}:</span> {e.phone}</span>
              <span className="text-xs"><span className="font-bold">{isZh ? "应急" : "Emergency"}:</span> {e.emergency}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted">
          {isZh ? "完整名录：" : "Full directory: "}
          <a href={mfaConsular.url} target="_blank" rel="noreferrer" className="font-bold text-jade hover:underline">
            MFA — {isZh ? mfaConsular.noteZh : mfaConsular.noteEn}
          </a>
        </p>
      </section>

      <section className="flex flex-col gap-2 rounded-xl border border-line bg-white p-5">
        <h3 className="text-sm font-bold uppercase tracking-widest text-muted">{isZh ? "看病流程" : "Hospital visit flow"}</h3>
        <ol className="grid gap-2">
          {hospitalVisitFlow.map((step) => (
            <li key={step.step} className="flex gap-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">{step.step}</span>
              <div className="flex flex-1 flex-col gap-1">
                <strong className="text-sm">{isZh ? step.titleZh : step.titleEn}</strong>
                <p className="text-xs leading-relaxed text-ink/80">{isZh ? step.bodyZh : step.bodyEn}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <PracticalBlock pillar="emergency" cityId={cityId} />
    </section>
  );
}
