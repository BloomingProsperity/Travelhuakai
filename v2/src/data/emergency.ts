import type { CityId } from "./transport";

export const nationalEmergency = [
  { number: "110", labelEn: "Police", labelZh: "公安", noteEn: "Free. Shanghai 110 supports 8 languages.", noteZh: "免费。上海 110 支持 8 种语言。", sourceId: "shanghai-emergency-numbers" },
  { number: "119", labelEn: "Fire & Rescue", labelZh: "消防", noteEn: "Free. Foreign-language support in Shanghai.", noteZh: "免费。上海支持外语。", sourceId: "shanghai-emergency-numbers" },
  { number: "120", labelEn: "Ambulance", labelZh: "急救", noteEn: "Free. National medical emergency dispatch.", noteZh: "免费。全国医疗急救调度。", sourceId: "beijing-emergency-numbers" },
  { number: "122", labelEn: "Traffic Police", labelZh: "交警", noteEn: "Free. Foreign-language support pending.", noteZh: "免费。外语支持待核验。", sourceId: "beijing-emergency-numbers" }
] as const;

export type Hospital = {
  cityId: CityId;
  nameEn: string;
  nameZh: string;
  addressEn: string;
  phone: string;
  emergencyPhone?: string;
  intlDept: string;
  hours: string;
  sourceId: string;
};

export const hospitals: Hospital[] = [
  {
    cityId: "beijing",
    nameEn: "Peking Union Medical College Hospital (PUMCH)",
    nameZh: "北京协和医院",
    addressEn: "1 Shuaifuyuan, Wangfujing, Dongcheng District",
    phone: "+86 10 6915 1188",
    emergencyPhone: "24/7",
    intlDept: "International Medical Services (IMS)",
    hours: "Mon–Fri 08:00–17:00; Sat–Sun 08:00–12:00; ER 24/7",
    sourceId: "pumch-foreign-care"
  },
  {
    cityId: "beijing",
    nameEn: "Beijing United Family Hospital",
    nameZh: "北京和睦家医院",
    addressEn: "2 Jiangtai Road, Chaoyang District",
    phone: "+86 10 5927 7000",
    emergencyPhone: "+86 10 5927 7120",
    intlDept: "Full-hospital international model",
    hours: "ER 24/7; outpatient varies",
    sourceId: "ufh-beijing"
  },
  {
    cityId: "shanghai",
    nameEn: "Huashan Hospital — World Health Clinic",
    nameZh: "复旦大学附属华山医院 国际医疗部",
    addressEn: "Building 5, 221 West Yan'an Road, Jing'an District",
    phone: "+86 21 6248 3986",
    emergencyPhone: "via main switchboard",
    intlDept: "World Health Clinic (外宾医疗部)",
    hours: "Mon–Fri 08:00–12:00, 13:30–17:00; ER 24/7",
    sourceId: "huashan-shanghai"
  },
  {
    cityId: "shanghai",
    nameEn: "Shanghai United Family Hospital — Puxi",
    nameZh: "上海和睦家医院 浦西院区",
    addressEn: "699 Pingtang Road, Changning District",
    phone: "+86 21 2216 3900",
    emergencyPhone: "+86 21 2216 3999",
    intlDept: "Full-hospital international model",
    hours: "ER 24/7",
    sourceId: "ufh-shanghai"
  },
  {
    cityId: "guangzhou",
    nameEn: "First Affiliated Hospital of Sun Yat-sen University",
    nameZh: "中山大学附属第一医院",
    addressEn: "58 Zhongshan 2nd Road, Yuexiu District",
    phone: "+86 20 8733 2200",
    emergencyPhone: "via main switchboard",
    intlDept: "International Medical Center (Liu Luanxiong Building, opened 2025-03)",
    hours: "Mon–Fri 08:00–12:00, 14:30–17:30; ER 24/7",
    sourceId: "fahsysu-gz"
  },
  {
    cityId: "guangzhou",
    nameEn: "Guangzhou United Family Hospital",
    nameZh: "广州和睦家医院",
    addressEn: "31 Pazhou Avenue, Haizhu District",
    phone: "+86 20 3610 2333",
    emergencyPhone: "+86 20 3610 2333",
    intlDept: "Full-hospital international; 40+ language phone interpretation",
    hours: "ER 24/7",
    sourceId: "ufh-guangzhou"
  },
  {
    cityId: "shenzhen",
    nameEn: "University of Hong Kong–Shenzhen Hospital (HKU-SZH)",
    nameZh: "香港大学深圳医院",
    addressEn: "1 Haiyuan First Road, Futian District",
    phone: "+86 755 8691 3388",
    intlDept: "International Medical Center (IMC)",
    hours: "Mon–Fri 08:00–17:30; Sat 08:00–17:30; Sun 08:30–12:30",
    sourceId: "hku-szh"
  },
  {
    cityId: "shenzhen",
    nameEn: "Shenzhen People's Hospital",
    nameZh: "深圳市人民医院",
    addressEn: "1017 Dongmen North Road, Luohu District",
    phone: "+86 755 2553 3018",
    intlDept: "VIP unit (English contact pending)",
    hours: "ER 24/7",
    sourceId: "sz-hospitals-municipal"
  }
];

export type Hotline = {
  cityId: CityId;
  number: string;
  langs: string[];
  noteEn: string;
  noteZh: string;
  sourceId: string;
};

export const cityHotlines: Hotline[] = [
  {
    cityId: "beijing",
    number: "12345",
    langs: ["EN", "JA", "KO", "DE", "FR", "RU", "ES", "AR", "PT", "IT"],
    noteEn: "10 languages. English line 24/7; others ~8 hours/day.",
    noteZh: "10 种语言。英语 24/7；其他 8 小时/天。",
    sourceId: "beijing-12345-hotline"
  },
  {
    cityId: "shanghai",
    number: "12345",
    langs: ["EN", "FR", "DE", "JA", "KO", "ES", "IT", "RU", "TH", "FA"],
    noteEn: "Press 7 for foreign-language services. 24/7.",
    noteZh: "按 7 进入外语服务，24/7。",
    sourceId: "shanghai-12345"
  },
  {
    cityId: "guangzhou",
    number: "020-12345 / 960169",
    langs: ["EN 24/7", "JA", "KO"],
    noteEn: "960169 is a 3-party interpretation bridge — call it, then it conferences in 110/119/120/12345 for you.",
    noteZh: "960169 是三方翻译转接服务——拨通后再帮你接 110/119/120/12345。",
    sourceId: "gz-960169-bridge"
  },
  {
    cityId: "shenzhen",
    number: "0755-12345",
    langs: ["iShenzhen app: EN, FR, AR, JA, KO, ES, DE, PT, RU"],
    noteEn: "Direct English phone line availability pending; iShenzhen app supports 9 languages.",
    noteZh: "电话英语直拨支持待核验；iShenzhen App 支持 9 种语言。",
    sourceId: "sz-12345-pingshan"
  }
];

export type Embassy = {
  country: string;
  countryZh: string;
  name: string;
  address: string;
  phone: string;
  emergency: string;
  sourceId: string;
};

export const embassies: Embassy[] = [
  {
    country: "United States",
    countryZh: "美国",
    name: "U.S. Embassy Beijing",
    address: "55 Anjialou Road, Chaoyang District",
    phone: "+86 10 8531 4000",
    emergency: "+1 202 501 4444 (State Dept Ops 24/7)",
    sourceId: "us-embassy-china"
  },
  {
    country: "United Kingdom",
    countryZh: "英国",
    name: "British Embassy Beijing",
    address: "11 Guanghua Road, Chaoyang District",
    phone: "+86 10 5192 4000",
    emergency: "+86 10 5192 4000 (24/7 prompts)",
    sourceId: "uk-embassy-china"
  },
  {
    country: "Canada",
    countryZh: "加拿大",
    name: "Embassy of Canada to China",
    address: "19 Dongzhimenwai Dajie, Chaoyang District",
    phone: "+86 10 5139 4000",
    emergency: "+86 10 5139 4000 (24/7)",
    sourceId: "ca-embassy-china"
  },
  {
    country: "Australia",
    countryZh: "澳大利亚",
    name: "Australian Embassy Beijing",
    address: "21 Dongzhimenwai Dajie",
    phone: "+86 10 5140 4111",
    emergency: "+61 2 6261 3305 (Canberra 24/7)",
    sourceId: "au-embassy-china"
  },
  {
    country: "Japan",
    countryZh: "日本",
    name: "Embassy of Japan in China",
    address: "1 Liangmaqiao East Street, Chaoyang District",
    phone: "+86 10 8531 9800",
    emergency: "+86 10 6532 5964 (Consular Protection)",
    sourceId: "jp-embassy-china"
  }
];

export const mfaConsular = {
  url: "https://www.fmprc.gov.cn/web/fw_673051/lbfw_673061/fgzl_673083/",
  noteEn: "Full directory of foreign missions in China (MFA).",
  noteZh: "中华人民共和国外交部领事司外国驻华使领馆名录。",
  sourceId: "mfa-consular-directory"
} as const;

import { pitfallSourceIds } from "./practical-other";

export function emergencySourceIds(cityId?: CityId): string[] {
  const ids = new Set<string>();
  nationalEmergency.forEach((r) => ids.add(r.sourceId));
  embassies.forEach((e) => ids.add(e.sourceId));
  ids.add(mfaConsular.sourceId);
  if (cityId) {
    hospitals.filter((h) => h.cityId === cityId).forEach((h) => ids.add(h.sourceId));
    const ch = cityHotlines.find((h) => h.cityId === cityId);
    if (ch) ids.add(ch.sourceId);
  } else {
    hospitals.forEach((h) => ids.add(h.sourceId));
    cityHotlines.forEach((h) => ids.add(h.sourceId));
  }
  hospitalVisitFlow.forEach((s) => ids.add(s.sourceId));
  pitfallSourceIds("emergency", cityId).forEach((id) => ids.add(id));
  return [...ids];
}

export const hospitalVisitFlow = [
  {
    step: 1,
    titleEn: "Make an appointment",
    titleZh: "预约",
    bodyEn: "Public hospital IMS desks accept walk-in registration; private hospitals (UFH/SOS/HKU-SZH IMC) prefer prior phone or app booking.",
    bodyZh: "公立医院 IMS 窗口接受现场挂号；私立国际医院（UFH/SOS/HKU-SZH IMC）需提前电话或 App 预约。",
    sourceId: "pumch-foreign-care"
  },
  {
    step: 2,
    titleEn: "Bring documents",
    titleZh: "携带文件",
    bodyEn: "Original passport (copy not enough). International insurance card + policy. Letter of guarantee from insurer if claiming direct billing.",
    bodyZh: "必须携带护照原件，复印件不可替代。还需国际医保卡 + 保单。如使用直付保险，须备保险公司保函。",
    sourceId: "pumch-foreign-care"
  },
  {
    step: 3,
    titleEn: "Pay at counter or direct-billing",
    titleZh: "结算",
    bodyEn: "Cash + Alipay/WeChat universal. UnionPay card universal. Visa/MC mainly at IMS/VIP desks. Direct billing only at hospitals contracted with your insurer.",
    bodyZh: "现金 + Alipay/微信支付通用；银联卡通用；外卡 Visa/MC 主要在 IMS/VIP 窗口。保险直付仅限合作机构。",
    sourceId: "pumch-foreign-care"
  }
] as const;
