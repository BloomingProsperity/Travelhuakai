import {
  atmRule,
  cityPaymentNotes,
  customsRules,
  platformLimits,
  preArrivalChecklist
} from "../../data/payments";
import type { CityId } from "../../data/transport";
import { useLang } from "../../store/language";
import PaymentsPractical from "./PaymentsPractical";

type Props = { cityId?: CityId };

export default function PaymentsChecklist({ cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const cityScoped = Boolean(cityId);
  const cities = cityId
    ? cityPaymentNotes.filter((c) => c.cityId === cityId)
    : cityPaymentNotes;

  return (
    <section id="payments" className="flex flex-col gap-4">
      {!cityScoped && (
        <header>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "支柱 2" : "Pillar 2"}
          </span>
          <h2 className="text-2xl font-bold">{isZh ? "支付准备" : "Payments"}</h2>
          <p className="text-sm text-muted">
            {isZh
              ? "出发前必做、海关阈值、ATM 选择，每条都来自央行、海关、各市政府英文页。"
              : "What to set up before you fly, customs thresholds, ATM rules. Cites PBOC, China Customs, and city government English pages."}
          </p>
        </header>
      )}
      {cityScoped && <h2 className="text-xl font-bold">{isZh ? "支付" : "Payments"}</h2>}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card title={isZh ? "Alipay 单笔" : "Alipay per-tx"} big={`$${platformLimits.alipay.perTransactionUSD.toLocaleString()}`} note={isZh ? `年累 $${platformLimits.alipay.annualCumulativeUSD.toLocaleString()}` : `annual $${platformLimits.alipay.annualCumulativeUSD.toLocaleString()}`} />
        <Card title={isZh ? "WeChat Pay 单笔" : "WeChat Pay per-tx"} big={`$${platformLimits.wechat.perTransactionUSD.toLocaleString()}`} note={isZh ? `年累 $${platformLimits.wechat.annualCumulativeUSD.toLocaleString()}` : `annual $${platformLimits.wechat.annualCumulativeUSD.toLocaleString()}`} />
        <Card title={isZh ? "中行 ATM" : "BOC ATM"} big={`¥${atmRule.perWithdrawalCNY.toLocaleString()}`} note={atmRule.acceptedNetworks.join(" / ")} />
        <Card title={isZh ? "外币现金申报" : "Foreign cash declare"} big="$5,000" note={isZh ? "超过等值须申报" : "above this must declare"} />
      </div>

      <Block title={isZh ? "出发前清单" : "Before you fly"}>
        <ul className="grid gap-2">
          {preArrivalChecklist.map((step, i) => (
            <li key={step.id} className="flex gap-3 rounded-lg border border-line bg-white p-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
              <div className="flex flex-1 flex-col gap-1">
                <strong className="text-sm">{isZh ? step.titleZh : step.titleEn}</strong>
                <p className="text-xs leading-relaxed text-ink/80">{isZh ? step.bodyZh : step.bodyEn}</p>
              </div>
            </li>
          ))}
        </ul>
      </Block>

      <Block title={isZh ? "海关申报阈值" : "China Customs thresholds"}>
        <ul className="grid gap-2 sm:grid-cols-2">
          {customsRules.map((rule) => (
            <li key={rule.id} className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
              <strong className="text-sm">{isZh ? rule.titleZh : rule.titleEn}</strong>
              <p className="text-xs leading-relaxed text-ink/80">{isZh ? rule.bodyZh : rule.bodyEn}</p>
            </li>
          ))}
        </ul>
      </Block>

      <PaymentsPractical />

      <Block title={cityScoped ? (isZh ? "本城支付现状" : "This city — payment status") : (isZh ? "四城支付现状" : "Four-city payment status")}>
        <ul className={`grid gap-2 ${cityScoped ? "" : "md:grid-cols-2"}`}>
          {cities.map((city) => (
            <li key={city.cityId} className="flex flex-col gap-2 rounded-lg border border-line bg-white p-3">
              {!cityScoped && <strong className="text-sm">{isZh ? city.cityZh : city.cityEn}</strong>}
              <ul className="grid gap-1.5">
                {city.bullets.map((bullet, i) => (
                  <li key={i} className="text-xs leading-relaxed text-ink/80">
                    {isZh ? bullet.zh : bullet.en}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Block>
    </section>
  );
}

function Card({ title, big, note }: { title: string; big: string; note: string }) {
  return (
    <article className="flex flex-col gap-1 rounded-xl border border-line bg-white p-4">
      <span className="text-xs font-bold uppercase tracking-widest text-muted">{title}</span>
      <strong className="text-2xl leading-none">{big}</strong>
      <span className="text-xs text-muted">{note}</span>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-sm font-bold uppercase tracking-widest text-muted">{title}</h3>
      {children}
    </section>
  );
}
