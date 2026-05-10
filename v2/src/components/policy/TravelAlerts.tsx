import { useMemo } from "react";
import clsx from "clsx";
import {
  onlineEntryCard,
  transitPolicy,
  unilateralPolicy,
  unilateralVisaFreeCountries
} from "../../data/entry-policies";
import { useLang } from "../../store/language";

type Alert = {
  id: string;
  severity: "info" | "warn";
  titleEn: string;
  titleZh: string;
  bodyEn: string;
  bodyZh: string;
  sourceId: string;
};

const UNILATERAL_EXPIRY = "2026-12-31";

function daysUntil(dateStr: string): number {
  const target = new Date(dateStr).getTime();
  const now = Date.now();
  return Math.max(0, Math.round((target - now) / 86_400_000));
}

export default function TravelAlerts() {
  const { lang } = useLang();

  const alerts = useMemo<Alert[]>(() => {
    const days = daysUntil(UNILATERAL_EXPIRY);
    return [
      {
        id: "transit-240h",
        severity: "info",
        titleEn: `240-hour transit visa-free is live`,
        titleZh: "240 小时过境免签已生效",
        bodyEn: `Effective ${transitPolicy.effectiveDate}. Covers ${transitPolicy.totalCountries} countries across ${transitPolicy.totalPorts} ports / ${transitPolicy.provincialRegions} provincial regions. Onward third-country ticket required.`,
        bodyZh: `自 ${transitPolicy.effectiveDate} 起。${transitPolicy.totalCountries} 国可用、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区可活动。须持第三国机票。`,
        sourceId: transitPolicy.sourceIds[0]
      },
      {
        id: "online-entry-card",
        severity: "info",
        titleEn: "Online entry card now available — beware fake sites",
        titleZh: "外国人入境卡已可线上填报，警惕收费山寨网站",
        bodyEn: `Free pre-fill at the official NIA portal since ${onlineEntryCard.effectiveDate}. Kiosk and paper card remain available at the port.`,
        bodyZh: `自 ${onlineEntryCard.effectiveDate} 起在国家移民管理局官网免费预填；未提前填可在口岸设备或纸卡补填。`,
        sourceId: onlineEntryCard.sourceIds[0]
      },
      {
        id: "unilateral-expiry",
        severity: days < 90 ? "warn" : "info",
        titleEn: `Unilateral 30-day visa-free expires in ${days} days`,
        titleZh: `单方面 30 天免签政策剩余 ${days} 天`,
        bodyEn: `Current ${unilateralVisaFreeCountries.length}-country list runs until ${UNILATERAL_EXPIRY}. Re-verify NIA before booking trips after that date.`,
        bodyZh: `当前 ${unilateralVisaFreeCountries.length} 国清单截止 ${UNILATERAL_EXPIRY}。该日之后出行需重新核验 NIA 公告。`,
        sourceId: unilateralPolicy.sourceId
      }
    ];
  }, []);

  return (
    <section id="travel-alerts" aria-label="Travel alerts" className="flex flex-col gap-3">
      <header className="flex items-end justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {lang === "zh" ? "政策时效" : "Travel Alerts"}
          </span>
          <h2 className="text-2xl font-bold">
            {lang === "zh" ? "出行前必看的政策动态" : "What changed before you book"}
          </h2>
        </div>
      </header>
      <ul className="grid gap-3 md:grid-cols-3">
        {alerts.map((alert) => (
          <li
            key={alert.id}
            className={clsx(
              "flex flex-col gap-2 rounded-xl border p-4",
              alert.severity === "warn" ? "border-amber-300 bg-amber-50" : "border-line bg-white"
            )}
          >
            <strong className="text-sm leading-tight">
              {lang === "zh" ? alert.titleZh : alert.titleEn}
            </strong>
            <p className="text-xs leading-snug text-ink/80">
              {lang === "zh" ? alert.bodyZh : alert.bodyEn}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
