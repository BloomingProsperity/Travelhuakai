export type Region = "Europe" | "Asia" | "Oceania" | "Americas";

export type UnilateralCountry = {
  countryEn: string;
  countryZh: string;
  region: Region;
};

/**
 * Source: NIA "List of Countries Covered by Unilateral Visa Exemption Policies"
 * URL: https://en.nia.gov.cn/n147418/n147463/c183390/content.html
 * Page dated: 2026-02-17 — list of 50 ordinary-passport nationalities, max stay 30 days.
 * Eligible purposes per page: business, tourism, visit relatives/friends, exchange, transit.
 * Source id in sources.ts: nia-unilateral-list
 */
export const unilateralVisaFreeCountries: UnilateralCountry[] = [
  // Europe (35)
  { countryEn: "Andorra", countryZh: "安道尔", region: "Europe" },
  { countryEn: "Austria", countryZh: "奥地利", region: "Europe" },
  { countryEn: "Belgium", countryZh: "比利时", region: "Europe" },
  { countryEn: "Bulgaria", countryZh: "保加利亚", region: "Europe" },
  { countryEn: "Croatia", countryZh: "克罗地亚", region: "Europe" },
  { countryEn: "Cyprus", countryZh: "塞浦路斯", region: "Europe" },
  { countryEn: "Denmark", countryZh: "丹麦", region: "Europe" },
  { countryEn: "Estonia", countryZh: "爱沙尼亚", region: "Europe" },
  { countryEn: "Finland", countryZh: "芬兰", region: "Europe" },
  { countryEn: "France", countryZh: "法国", region: "Europe" },
  { countryEn: "Germany", countryZh: "德国", region: "Europe" },
  { countryEn: "Greece", countryZh: "希腊", region: "Europe" },
  { countryEn: "Hungary", countryZh: "匈牙利", region: "Europe" },
  { countryEn: "Iceland", countryZh: "冰岛", region: "Europe" },
  { countryEn: "Ireland", countryZh: "爱尔兰", region: "Europe" },
  { countryEn: "Italy", countryZh: "意大利", region: "Europe" },
  { countryEn: "Latvia", countryZh: "拉脱维亚", region: "Europe" },
  { countryEn: "Liechtenstein", countryZh: "列支敦士登", region: "Europe" },
  { countryEn: "Luxembourg", countryZh: "卢森堡", region: "Europe" },
  { countryEn: "Malta", countryZh: "马耳他", region: "Europe" },
  { countryEn: "Monaco", countryZh: "摩纳哥", region: "Europe" },
  { countryEn: "Montenegro", countryZh: "黑山", region: "Europe" },
  { countryEn: "Netherlands", countryZh: "荷兰", region: "Europe" },
  { countryEn: "North Macedonia", countryZh: "北马其顿", region: "Europe" },
  { countryEn: "Norway", countryZh: "挪威", region: "Europe" },
  { countryEn: "Poland", countryZh: "波兰", region: "Europe" },
  { countryEn: "Portugal", countryZh: "葡萄牙", region: "Europe" },
  { countryEn: "Romania", countryZh: "罗马尼亚", region: "Europe" },
  { countryEn: "Russian Federation", countryZh: "俄罗斯", region: "Europe" },
  { countryEn: "Slovakia", countryZh: "斯洛伐克", region: "Europe" },
  { countryEn: "Slovenia", countryZh: "斯洛文尼亚", region: "Europe" },
  { countryEn: "Spain", countryZh: "西班牙", region: "Europe" },
  { countryEn: "Sweden", countryZh: "瑞典", region: "Europe" },
  { countryEn: "Switzerland", countryZh: "瑞士", region: "Europe" },
  { countryEn: "United Kingdom", countryZh: "英国", region: "Europe" },
  // Oceania (2)
  { countryEn: "Australia", countryZh: "澳大利亚", region: "Oceania" },
  { countryEn: "New Zealand", countryZh: "新西兰", region: "Oceania" },
  // Asia (7)
  { countryEn: "Bahrain", countryZh: "巴林", region: "Asia" },
  { countryEn: "Brunei Darussalam", countryZh: "文莱", region: "Asia" },
  { countryEn: "Japan", countryZh: "日本", region: "Asia" },
  { countryEn: "Kuwait", countryZh: "科威特", region: "Asia" },
  { countryEn: "Oman", countryZh: "阿曼", region: "Asia" },
  { countryEn: "Republic of Korea", countryZh: "韩国", region: "Asia" },
  { countryEn: "Saudi Arabia", countryZh: "沙特阿拉伯", region: "Asia" },
  // Americas (6)
  { countryEn: "Argentina", countryZh: "阿根廷", region: "Americas" },
  { countryEn: "Brazil", countryZh: "巴西", region: "Americas" },
  { countryEn: "Canada", countryZh: "加拿大", region: "Americas" },
  { countryEn: "Chile", countryZh: "智利", region: "Americas" },
  { countryEn: "Peru", countryZh: "秘鲁", region: "Americas" },
  { countryEn: "Uruguay", countryZh: "乌拉圭", region: "Americas" }
];

export const unilateralPolicy = {
  maxStayDays: 30,
  eligiblePurposes: ["business", "tourism", "visit relatives/friends", "exchange", "transit"],
  sourceId: "nia-unilateral-list"
} as const;

/**
 * Source: NIA transit visa-free policy page (2023-10-19) for the country list
 * Source: State Council 2025-11-04 announcement for the headline (55 countries, 65 ports, 24 provinces, 240 hours)
 * URL: https://en.nia.gov.cn/n147418/n147463/c156094/content.html
 * URL: https://english.www.gov.cn/news/202511/04/content_WS69094ae0c6d00ca5f9a07472.html
 *
 * NIA's 2023-10-19 page lists the country pool used for transit visa-free.
 * The State Council 2025-11-04 page confirms the 240-hour upgrade effective 2025-11-05
 * but does not enumerate ports or countries; we reference both sources together.
 */
export const transitVisaFreeCountries: string[] = [
  // Schengen (25)
  "Austria", "Belgium", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany",
  "Greece", "Hungary", "Iceland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta",
  "Netherlands", "Poland", "Portugal", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland",
  "Croatia",
  // Other Europe (14)
  "Russia", "United Kingdom", "Ireland", "Cyprus", "Bulgaria", "Romania", "Ukraine", "Serbia",
  "Bosnia and Herzegovina", "Montenegro", "North Macedonia", "Albania", "Monaco", "Belarus",
  // Americas (6)
  "United States", "Canada", "Brazil", "Mexico", "Argentina", "Chile",
  // Oceania (2)
  "Australia", "New Zealand",
  // Asia (6)
  "South Korea", "Japan", "Singapore", "Brunei", "United Arab Emirates", "Qatar"
];

export type TransitPort = {
  city: string;
  cityZh: string;
  portEn: string;
  portZh: string;
  province: string;
  /** Hours the transit traveller may stay. State Council 2025-11-04 raised most from 144 to 240. */
  maxHours: 240 | 144 | 72;
};

/**
 * Phase 1 ports — the four cities the product covers, all confirmed at 240 hours
 * by the State Council 2025-11-04 announcement (sources.ts: state-council-240h)
 * and corroborated by the city-level government English pages.
 */
export const phase1TransitPorts: TransitPort[] = [
  { city: "Beijing", cityZh: "北京", portEn: "Capital International Airport", portZh: "首都国际机场", province: "Beijing", maxHours: 240 },
  { city: "Beijing", cityZh: "北京", portEn: "Daxing International Airport", portZh: "大兴国际机场", province: "Beijing", maxHours: 240 },
  { city: "Shanghai", cityZh: "上海", portEn: "Pudong International Airport", portZh: "浦东国际机场", province: "Shanghai", maxHours: 240 },
  { city: "Shanghai", cityZh: "上海", portEn: "Hongqiao International Airport", portZh: "虹桥国际机场", province: "Shanghai", maxHours: 240 },
  { city: "Guangzhou", cityZh: "广州", portEn: "Baiyun International Airport", portZh: "白云国际机场", province: "Guangdong", maxHours: 240 },
  { city: "Shenzhen", cityZh: "深圳", portEn: "Bao'an International Airport", portZh: "宝安国际机场", province: "Guangdong", maxHours: 240 }
];

export const transitPolicy = {
  maxHours: 240,
  effectiveDate: "2025-11-05",
  totalCountries: 55,
  totalPorts: 65,
  provincialRegions: 24,
  thirdCountryRequired: true,
  sourceIds: ["state-council-240h", "nia-transit-list"]
} as const;

export const onlineEntryCard = {
  effectiveDate: "2025-11-20",
  free: true,
  alternativesAtPort: ["self-service kiosk", "paper card"],
  sourceIds: ["nia-online-entry-card", "nia-card-fraud-warning"]
} as const;

export type EligibilityResult =
  | { kind: "unilateral"; maxStayDays: number; sourceId: string }
  | { kind: "transit-only"; maxHours: number; sourceId: string }
  | { kind: "both"; unilateralDays: number; transitHours: number; sourceIds: string[] }
  | { kind: "visa-required"; applyUrl: string };

const unilateralSet = new Set(unilateralVisaFreeCountries.map((c) => c.countryEn));
const transitSet = new Set(transitVisaFreeCountries);

const aliases: Record<string, string> = {
  "United Kingdom of Great Britain and Northern Ireland": "United Kingdom",
  "UK": "United Kingdom",
  "Russia": "Russian Federation",
  "South Korea": "Republic of Korea",
  "Korea": "Republic of Korea",
  "Brunei": "Brunei Darussalam",
  "USA": "United States",
  "U.S.": "United States",
  "U.S.A.": "United States"
};

const normalize = (name: string): string => aliases[name] ?? name;

export function checkEligibility(country: string): EligibilityResult {
  const canonical = normalize(country);
  const unilateral = unilateralSet.has(canonical);
  const transitCanonical = transitSet.has(canonical) || transitSet.has(country);
  const transit = transitCanonical;

  if (unilateral && transit) {
    return {
      kind: "both",
      unilateralDays: unilateralPolicy.maxStayDays,
      transitHours: transitPolicy.maxHours,
      sourceIds: [unilateralPolicy.sourceId, ...transitPolicy.sourceIds]
    };
  }
  if (unilateral) {
    return {
      kind: "unilateral",
      maxStayDays: unilateralPolicy.maxStayDays,
      sourceId: unilateralPolicy.sourceId
    };
  }
  if (transit) {
    return {
      kind: "transit-only",
      maxHours: transitPolicy.maxHours,
      sourceId: transitPolicy.sourceIds[0]
    };
  }
  return {
    kind: "visa-required",
    applyUrl: "https://www.visaforchina.cn"
  };
}

import { pitfallSourceIds } from "./practical-other";

export const entryPolicySourceIds: string[] = [
  unilateralPolicy.sourceId,
  ...transitPolicy.sourceIds,
  ...onlineEntryCard.sourceIds,
  "visa-application-center",
  ...pitfallSourceIds("entry")
];
