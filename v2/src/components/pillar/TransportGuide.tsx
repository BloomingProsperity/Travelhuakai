import { useState } from "react";
import clsx from "clsx";
import { CITY_LABELS, cityTransport, railBooking, type CityId } from "../../data/transport";
import { useLang } from "../../store/language";
import PracticalBlock from "../common/PracticalBlock";

const KIND_LABEL = {
  cheapest: { en: "Cheapest", zh: "最便宜" },
  fastest: { en: "Fastest", zh: "最快" },
  stable: { en: "Most stable", zh: "最可靠" }
};

type Props = { cityId?: CityId };

export default function TransportGuide({ cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const cityScoped = Boolean(cityId);
  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
  const effectiveId: CityId = cityId ?? activeId;
  const active = cityTransport.find((c) => c.cityId === effectiveId)!;

  return (
    <section id="transport" className="flex flex-col gap-4">
      {!cityScoped && (
        <header>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "支柱 3" : "Pillar 3"}
          </span>
          <h2 className="text-2xl font-bold">{isZh ? "交通" : "Transport"}</h2>
          <p className="text-sm text-muted">
            {isZh
              ? "12306 国际版购票 + 四城机场到市区 + 地铁外卡接受度 + 网约车实际情况。"
              : "12306 international booking + airport-to-city for the four cities + metro foreign-card status + ride-hail reality."}
          </p>
        </header>
      )}
      {cityScoped && <h2 className="text-xl font-bold">{isZh ? "交通" : "Transport"}</h2>}

      <article className="flex flex-col gap-3 rounded-xl border border-line bg-white p-5">
        <h3 className="text-sm font-bold uppercase tracking-widest text-muted">
          {isZh ? "12306 国际版" : "12306 international"}
        </h3>
        <RailRow titleEn="Registration" titleZh="注册" en={railBooking.registration.en} zh={railBooking.registration.zh} />
        <RailRow titleEn="Payment" titleZh="支付" en={railBooking.payment.en} zh={railBooking.payment.zh} />
        <RailRow titleEn="Refund" titleZh="退票" en={railBooking.refund.en} zh={railBooking.refund.zh} />
        <RailRow titleEn="Real-name" titleZh="实名" en={railBooking.realName.en} zh={railBooking.realName.zh} />
      </article>

      {!cityScoped && (
        <div role="tablist" aria-label="City selector" className="flex flex-wrap gap-2">
          {cityTransport.map((city) => (
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

      <article className="flex flex-col gap-4 rounded-xl border border-line bg-white p-5">
        {active.airports.map((airport) => (
          <section key={airport.code} className="flex flex-col gap-2">
            <h4 className="text-sm font-bold">{airport.code} · {isZh ? airport.nameZh : airport.nameEn}</h4>
            <ul className="grid gap-2 md:grid-cols-3">
              {airport.options.map((opt) => (
                <li key={opt.kind} className="flex flex-col gap-1 rounded-lg bg-paper p-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
                    {isZh ? KIND_LABEL[opt.kind].zh : KIND_LABEL[opt.kind].en}
                  </span>
                  <strong className="text-sm leading-tight">{isZh ? opt.routeZh : opt.routeEn}</strong>
                  <div className="text-xs text-muted">¥{opt.costCNY} · {opt.timeMin} {isZh ? "分钟" : "min"}</div>
                  <span className="text-xs leading-snug">{isZh ? opt.paymentZh : opt.paymentEn}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="flex flex-col gap-2 border-t border-line pt-3">
          <h4 className="text-sm font-bold">{isZh ? "地铁支付" : "Metro payment"}</h4>
          <p className="text-sm leading-relaxed">{isZh ? active.metro.summaryZh : active.metro.summaryEn}</p>
        </section>

        <section className="flex flex-col gap-2 border-t border-line pt-3">
          <h4 className="text-sm font-bold">{isZh ? "网约车 / 出租" : "Ride-hail & taxi"}</h4>
          <p className="text-sm leading-relaxed">{isZh ? active.rideHail.zh : active.rideHail.en}</p>
        </section>

        <section className="flex flex-col gap-2 border-t border-line pt-3">
          <h4 className="text-sm font-bold">{isZh ? "常见注意事项" : "Common pitfalls"}</h4>
          <ul className="grid gap-2">
            {active.pitfalls.map((p, i) => (
              <li key={i} className="rounded-lg bg-amber-50 p-3 text-sm">
                {isZh ? p.zh : p.en}
              </li>
            ))}
          </ul>
        </section>
      </article>

      <PracticalBlock pillar="transport" cityId={cityId} />
    </section>
  );
}

function RailRow({ titleEn, titleZh, en, zh }: { titleEn: string; titleZh: string; en: string; zh: string }) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  return (
    <div className="grid gap-1 border-t border-line pt-2 first:border-t-0 first:pt-0 md:grid-cols-[100px_1fr]">
      <span className="text-xs font-bold uppercase tracking-widest text-muted">{isZh ? titleZh : titleEn}</span>
      <p className="text-sm leading-relaxed">{isZh ? zh : en}</p>
    </div>
  );
}
