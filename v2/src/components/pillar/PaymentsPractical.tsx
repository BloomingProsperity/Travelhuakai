import clsx from "clsx";
import { practicalPayments, type PracticalGotcha, type PracticalGotchaPhase } from "../../data/practical-payments";
import { useLang } from "../../store/language";

const PHASE_LABEL: Record<PracticalGotchaPhase, { en: string; zh: string }> = {
  "before-fly": { en: "Before you fly", zh: "出发前" },
  setup: { en: "Account setup & KYC", zh: "实名 / 绑卡阶段" },
  "day-one": { en: "Day 1 paying", zh: "落地第一天付款" },
  "post-trip": { en: "After your trip", zh: "回国之后" }
};

const PHASE_ORDER: PracticalGotchaPhase[] = ["before-fly", "setup", "day-one", "post-trip"];

const APP_LABEL = {
  alipay: { en: "Alipay", zh: "支付宝", style: "bg-blue-100 text-blue-900" },
  wechat: { en: "WeChat", zh: "微信", style: "bg-emerald-100 text-emerald-900" },
  both: { en: "Both", zh: "两个 App", style: "bg-amber-100 text-amber-900" }
} as const;

export default function PaymentsPractical() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  const grouped = PHASE_ORDER.map((phase) => ({
    phase,
    items: practicalPayments.filter((g) => g.phase === phase)
  }));

  return (
    <section className="flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50/40 p-5">
      <header>
        <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
          {isZh ? "实际支付提示" : "Practical pitfalls"}
        </span>
        <h3 className="text-lg font-bold">
          {isZh ? "Alipay / 微信外卡用户常见问题" : "What official sources don't tell you"}
        </h3>
      </header>

      <div className="grid gap-3">
        {grouped.map(({ phase, items }) => (
          <PhaseGroup key={phase} phase={phase} items={items} isZh={isZh} />
        ))}
      </div>
    </section>
  );
}

function PhaseGroup({ phase, items, isZh }: { phase: PracticalGotchaPhase; items: PracticalGotcha[]; isZh: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-xs font-bold uppercase tracking-widest text-muted">
        {isZh ? PHASE_LABEL[phase].zh : PHASE_LABEL[phase].en}
      </h4>
      <ul className="grid gap-2 md:grid-cols-2">
        {items.map((g) => (
          <li key={g.id} className="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3">
            <div className="flex items-center gap-2">
              <span className={clsx("rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", APP_LABEL[g.app].style)}>
                {isZh ? APP_LABEL[g.app].zh : APP_LABEL[g.app].en}
              </span>
              <strong className="text-sm leading-tight">
                {isZh ? g.titleZh : g.titleEn}
              </strong>
            </div>
            <p className="text-xs leading-relaxed text-ink/80">
              {isZh ? g.bodyZh : g.bodyEn}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
