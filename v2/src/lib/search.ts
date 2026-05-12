import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
import { cityAttractions } from "../data/city-attractions";
import {
  onlineEntryCard,
  phase1TransitPorts,
  transitPolicy,
  transitVisaFreeCountries,
  unilateralPolicy,
  unilateralVisaFreeCountries
} from "../data/entry-policies";
import { provinceHitAreas } from "../data/map-sources";
import { practicalPayments } from "../data/practical-payments";
import { pitfalls } from "../data/practical-other";
import { phraseCategories } from "../data/phrasebook";
import { topQuestions } from "../data/top-questions";
import type { CityId } from "../data/transport";

export type SearchRecord = {
  zh: string;
  en: string;
  type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
  provinceId: string;
  cityId?: string;
  aliases: string[];
};

export type SearchIndexEntry = {
  id: string;
  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
  titleEn: string;
  titleZh: string;
  snippetEn: string;
  snippetZh: string;
  href: string;
};

const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;

const normalize = (value: string): string =>
  value.toLowerCase().replace(NORMALIZE_PATTERN, "").trim();

const splitGroup = (value: string | undefined): string[] =>
  (value ?? "").split("/").map((s) => s.trim()).filter(Boolean);

const buildIndex = (): readonly SearchRecord[] => {
  const records: SearchRecord[] = [];
  const seen = new Set<string>();

  const push = (record: SearchRecord) => {
    const key = `${record.type}|${record.provinceId}|${record.cityId ?? ""}|${normalize(record.zh)}|${normalize(record.en)}`;
    if (seen.has(key)) return;
    seen.add(key);
    records.push(record);
  };

  atlasData.forEach((province) => {
    push({
      zh: province.zh,
      en: province.name,
      type: "province",
      provinceId: province.id,
      aliases: [province.zh, province.name, province.id]
    });

    province.cities.forEach((city) => {
      push({
        zh: city.zh,
        en: city.name,
        type: "city",
        provinceId: province.id,
        cityId: city.id,
        aliases: [city.zh, city.name, city.id, city.province]
      });

      const museumsZh = splitGroup(city.museumZh);
      const museumsEn = splitGroup(city.museum);
      const museumPairs = Math.max(museumsZh.length, museumsEn.length);
      for (let i = 0; i < museumPairs; i++) {
        const zh = museumsZh[i] ?? museumsEn[i] ?? "";
        const en = museumsEn[i] ?? museumsZh[i] ?? "";
        if (!zh && !en) continue;
        push({
          zh,
          en,
          type: "museum",
          provinceId: province.id,
          cityId: city.id,
          aliases: [zh, en].filter(Boolean)
        });
      }

      city.sites.forEach((siteEn, index) => {
        const siteZh = city.sitesZh[index] ?? siteEn;
        push({
          zh: siteZh,
          en: siteEn,
          type: "site",
          provinceId: province.id,
          cityId: city.id,
          aliases: [siteEn, siteZh]
        });
      });
    });
  });

  provinceHitAreas.forEach((area) => {
    push({
      zh: area.zh,
      en: area.en,
      type: "province",
      provinceId: area.id,
      aliases: [area.zh, area.en, area.id]
    });
  });

  Object.entries(provinceAttractionSeed).forEach(([provinceId, attractions]) => {
    attractions.forEach((attraction) => {
      push({
        zh: attraction.zh,
        en: attraction.en,
        type: "site",
        provinceId,
        aliases: [attraction.zh, attraction.en]
      });
    });
  });

  administrativeSearchSeed.forEach((item) => {
    push({
      zh: item.zh,
      en: item.en,
      type: item.type,
      provinceId: item.provinceId,
      cityId: item.cityId,
      aliases: [item.zh, item.en, ...(item.aliases ?? [])]
    });
  });

  return records;
};

const searchIndex = buildIndex();
const tokenIndex = searchIndex.map((record) => ({
  record,
  tokens: [record.zh, record.en, ...record.aliases].map(normalize).filter(Boolean)
}));

export const getAllRecords = (): readonly SearchRecord[] => searchIndex;

export const findBestMatch = (query: string): SearchRecord | null => {
  const target = normalize(query);
  if (!target) return null;

  let best: { record: SearchRecord; score: number } | null = null;
  for (const { record, tokens } of tokenIndex) {
    let score = 0;
    if (tokens.some((token) => token === target)) score = 3;
    else if (tokens.some((token) => token.startsWith(target))) score = 2;
    else if (tokens.some((token) => token.includes(target) || target.includes(token))) score = 1;
    if (score > 0 && (!best || score > best.score)) {
      best = { record, score };
      if (score === 3) break;
    }
  }
  return best?.record ?? null;
};

const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
  cityScope?.[0] ?? "beijing";

export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
  const entries: SearchIndexEntry[] = [];
  const seen = new Set<string>();

  const push = (entry: SearchIndexEntry) => {
    const key = `${entry.type}|${entry.id}`;
    if (seen.has(key)) return;
    seen.add(key);
    entries.push(entry);
  };

  cityAttractions.forEach((attraction) => {
    push({
      id: `attraction-${attraction.id}`,
      type: "attraction",
      titleEn: attraction.nameEn,
      titleZh: attraction.nameZh,
      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
      href: `/city/${attraction.cityId}#${attraction.id}`
    });
  });

  phraseCategories.forEach((category) => {
    category.phrases.forEach((phrase, index) => {
      push({
        id: `phrase-${category.key}-${index}`,
        type: "phrase",
        titleEn: phrase.en,
        titleZh: phrase.zh,
        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
        href: "/phrasebook"
      });
    });
  });

  topQuestions.forEach((question) => {
    push({
      id: `faq-${question.id}`,
      type: "faq",
      titleEn: question.questionEn,
      titleZh: question.questionZh,
      snippetEn: question.answerEn,
      snippetZh: question.answerZh,
      href: "/guide/notes#top-questions"
    });
  });

  practicalPayments.forEach((pitfall) => {
    push({
      id: `pitfall-payment-${pitfall.id}`,
      type: "pitfall",
      titleEn: pitfall.titleEn,
      titleZh: pitfall.titleZh,
      snippetEn: pitfall.bodyEn,
      snippetZh: pitfall.bodyZh,
      href: "/guide/payments#payments"
    });
  });

  pitfalls
    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
    .forEach((pitfall) => {
      const cityId = defaultCityForPitfall(pitfall.cityScope);
      push({
        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
        type: "pitfall",
        titleEn: pitfall.titleEn,
        titleZh: pitfall.titleZh,
        snippetEn: pitfall.bodyEn,
        snippetZh: pitfall.bodyZh,
        href: `/city/${cityId}#${pitfall.pillar}`
      });
    });

  pitfalls
    .filter((pitfall) => pitfall.pillar === "entry")
    .forEach((pitfall) => {
      push({
        id: `visa-entry-${pitfall.id}`,
        type: "visa",
        titleEn: pitfall.titleEn,
        titleZh: pitfall.titleZh,
        snippetEn: pitfall.bodyEn,
        snippetZh: pitfall.bodyZh,
        href: "/guide/entry#entry-visa"
      });
    });

  push({
    id: "visa-unilateral-policy",
    type: "visa",
    titleEn: "30-day unilateral visa-free entry",
    titleZh: "30 天单方面免签入境",
    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
    href: "/guide/entry#entry-visa"
  });

  push({
    id: "visa-transit-policy",
    type: "visa",
    titleEn: "240-hour transit visa-free rule",
    titleZh: "240 小时过境免签规则",
    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
    href: "/guide/entry#entry-visa"
  });

  push({
    id: "visa-online-entry-card",
    type: "visa",
    titleEn: "Online Foreigner Entry/Exit Card",
    titleZh: "线上外国人入出境卡",
    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
    href: "/guide/entry#entry-visa"
  });

  phase1TransitPorts.forEach((port) => {
    push({
      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      type: "visa",
      titleEn: `${port.city} ${port.portEn}`,
      titleZh: `${port.cityZh} ${port.portZh}`,
      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
      href: "/guide/entry#entry-visa"
    });
  });

  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
  const visaCountries = new Set<string>([
    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
    ...transitVisaFreeCountries
  ]);

  Array.from(visaCountries)
    .sort((a, b) => a.localeCompare(b))
    .forEach((country) => {
      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
      const transit = transitVisaFreeCountries.includes(country);
      const countryZh = countryZhByEn.get(country) ?? country;
      const routeEn = [
        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
      ].filter(Boolean).join(" + ");
      const routeZh = [
        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
      ].filter(Boolean).join(" + ");

      push({
        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        type: "visa",
        titleEn: `${country} visa-free rules`,
        titleZh: `${countryZh} 免签规则`,
        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
        href: "/guide/entry#entry-visa"
      });
    });

  return entries;
};
