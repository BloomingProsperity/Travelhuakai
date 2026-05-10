import { useId, useMemo, useState } from "react";
import {
  checkEligibility,
  phase1TransitPorts,
  transitPolicy,
  unilateralPolicy,
  unilateralVisaFreeCountries,
  type EligibilityResult
} from "../../data/entry-policies";
import { useLang } from "../../store/language";
import PracticalBlock from "../common/PracticalBlock";

const collator = new Intl.Collator("en");

export default function VisaChecker() {
  const { lang } = useLang();
  const selectId = useId();
  const [country, setCountry] = useState("");

  const sortedCountries = useMemo(
    () =>
      [...unilateralVisaFreeCountries].sort((a, b) =>
        collator.compare(lang === "zh" ? a.countryZh : a.countryEn, lang === "zh" ? b.countryZh : b.countryEn)
      ),
    [lang]
  );

  const result: EligibilityResult | null = country ? checkEligibility(country) : null;

  return (
    <section id="entry-visa" className="flex flex-col gap-4">
      <header>
        <span className="text-xs font-bold uppercase tracking-widest text-muted">
          {lang === "zh" ? "支柱 1" : "Pillar 1"}
        </span>
        <h2 className="text-2xl font-bold">
          {lang === "zh" ? "入境与签证" : "Entry & Visa"}
        </h2>
        <p className="text-sm text-muted">
          {lang === "zh"
            ? "选择你的护照国籍，看是否需要签证。所有结论来自国家移民管理局（NIA）和国务院公告。"
            : "Pick your passport country to see what applies. Every answer cites China's NIA and State Council announcements."}
        </p>
      </header>

      <div className="grid gap-4 rounded-xl border border-line bg-white p-5 md:grid-cols-[260px_1fr]">
        <div className="flex flex-col gap-3">
          <label htmlFor={selectId} className="text-xs font-bold uppercase tracking-widest text-muted">
            {lang === "zh" ? "护照国籍" : "Passport country"}
          </label>
          <select
            id={selectId}
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            className="rounded-lg border border-line bg-paper px-3 py-2 text-sm focus:border-ink focus:outline-none"
          >
            <option value="">{lang === "zh" ? "请选择..." : "Select country..."}</option>
            {sortedCountries.map((c) => (
              <option key={c.countryEn} value={c.countryEn}>
                {lang === "zh" ? `${c.countryZh} (${c.countryEn})` : `${c.countryEn} (${c.countryZh})`}
              </option>
            ))}
            <option disabled>──────────</option>
            <option value="Other">{lang === "zh" ? "其它（不在免签名单）" : "Other (not on visa-free lists)"}</option>
          </select>
        </div>

        <ResultPanel result={result} />
      </div>

      <PolicySummary />
      <Phase1PortsList />
      <PracticalBlock pillar="entry" />
    </section>
  );
}

function ResultPanel({ result }: { result: EligibilityResult | null }) {
  const { lang } = useLang();

  if (!result) {
    return (
      <div className="grid place-items-center rounded-lg border border-dashed border-line p-6 text-sm text-muted">
        {lang === "zh" ? "请先选择国籍" : "Pick a passport country first."}
      </div>
    );
  }

  if (result.kind === "both") {
    return (
      <div className="flex flex-col gap-2 rounded-lg bg-jade-soft p-4">
        <strong className="text-base text-jade">
          {lang === "zh" ? "两种免签都可用" : "Both visa-free routes available"}
        </strong>
        <p className="text-sm">
          {lang === "zh"
            ? `单方面免签 ${result.unilateralDays} 天 · 过境免签 ${result.transitHours} 小时（需第三国机票）`
            : `${result.unilateralDays}-day unilateral visa-free · ${result.transitHours}-hour transit visa-free (third-country onward ticket required).`}
        </p>
      </div>
    );
  }

  if (result.kind === "unilateral") {
    return (
      <div className="flex flex-col gap-2 rounded-lg bg-jade-soft p-4">
        <strong className="text-base text-jade">
          {lang === "zh" ? "单方面免签可用" : "Unilateral visa-free"}
        </strong>
        <p className="text-sm">
          {lang === "zh"
            ? `普通护照可在中国停留至 ${result.maxStayDays} 天，用途含商务、旅游、探亲、交流、过境。`
            : `Up to ${result.maxStayDays} days for ordinary passports; covers business, tourism, family visit, exchange, transit.`}
        </p>
      </div>
    );
  }

  if (result.kind === "transit-only") {
    return (
      <div className="flex flex-col gap-2 rounded-lg bg-paper p-4">
        <strong className="text-base">
          {lang === "zh" ? "可使用过境免签" : "Transit visa-free only"}
        </strong>
        <p className="text-sm">
          {lang === "zh"
            ? `若行程经第三国，可用 ${result.maxHours} 小时过境免签；其它情况仍需办签证。`
            : `If transiting via China to a third country, ${result.maxHours} hours visa-free is available. Otherwise apply for a visa.`}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-amber-50 p-4">
      <strong className="text-base text-amber-900">
        {lang === "zh" ? "需要签证" : "Visa required"}
      </strong>
      <p className="text-sm">
        {lang === "zh"
          ? "目前免签名单未涵盖该国籍，请前往中国签证申请服务中心办理。"
          : "Not currently covered by China's visa-free policies. Apply via the official Chinese Visa Application Service Center."}
      </p>
      <a
        href={result.applyUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-fit items-center gap-1 rounded-full bg-ink px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
      >
        visaforchina.cn →
      </a>
    </div>
  );
}

function PolicySummary() {
  const { lang } = useLang();
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <Card
        title={lang === "zh" ? "单方面免签" : "Unilateral visa-free"}
        figure={`${unilateralVisaFreeCountries.length}`}
        unit={lang === "zh" ? "国" : "countries"}
        body={
          lang === "zh"
            ? `普通护照 ${unilateralPolicy.maxStayDays} 天，含商务/旅游/探亲/交流/过境。`
            : `Ordinary passports, ${unilateralPolicy.maxStayDays}-day stay, business/tourism/family/exchange/transit.`
        }
      />
      <Card
        title={lang === "zh" ? "240 小时过境免签" : "240-hour transit"}
        figure={`${transitPolicy.totalPorts}`}
        unit={lang === "zh" ? "口岸" : "ports"}
        body={
          lang === "zh"
            ? `${transitPolicy.totalCountries} 国可用，${transitPolicy.provincialRegions} 个省级地区可活动；自 ${transitPolicy.effectiveDate} 起。`
            : `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.provincialRegions} provincial regions; effective ${transitPolicy.effectiveDate}.`
        }
      />
      <Card
        title={lang === "zh" ? "线上入境卡" : "Online entry card"}
        figure="2025-11-20"
        unit=""
        body={
          lang === "zh"
            ? "免费线上预填；未提前填可在口岸设备或纸卡补填；勿使用收费山寨网站。"
            : "Free pre-fill online; kiosk or paper card available at port; ignore counterfeit pay-to-fill sites."
        }
      />
    </div>
  );
}

function Card({
  title,
  figure,
  unit,
  body
}: {
  title: string;
  figure: string;
  unit: string;
  body: string;
}) {
  return (
    <article className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
      <span className="text-xs font-bold uppercase tracking-widest text-muted">{title}</span>
      <strong className="text-3xl leading-none">
        {figure} <small className="text-base font-bold text-muted">{unit}</small>
      </strong>
      <p className="text-sm leading-snug text-ink/80">{body}</p>
    </article>
  );
}

function Phase1PortsList() {
  const { lang } = useLang();
  return (
    <div className="rounded-xl border border-line bg-white p-5">
      <header className="mb-3">
        <h3 className="text-base font-bold">
          {lang === "zh" ? "本站覆盖的四城口岸（240 小时）" : "Phase 1 cities — all 240-hour transit"}
        </h3>
        <p className="text-xs text-muted">
          {lang === "zh"
            ? "与国务院 2025-11-04 公告对齐；其它 59 口岸暂未在本站列出。"
            : "Aligned with State Council 2025-11-04 announcement; the other 59 ports are not yet covered here."}
        </p>
      </header>
      <ul className="grid gap-2 sm:grid-cols-2">
        {phase1TransitPorts.map((port) => (
          <li key={port.portEn} className="flex items-center justify-between rounded-lg bg-paper px-3 py-2">
            <span>
              <strong className="text-sm">
                {lang === "zh" ? port.cityZh : port.city}
              </strong>{" "}
              <span className="text-xs text-muted">
                {lang === "zh" ? port.portZh : port.portEn}
              </span>
            </span>
            <span className="rounded-full bg-jade-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-jade">
              {port.maxHours}h
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
