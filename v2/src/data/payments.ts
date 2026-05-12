import type { CityId } from "./transport";

export type PaymentLimit = {
  perTransactionUSD: number;
  annualCumulativeUSD: number;
  sourceId: string;
};

export const platformLimits: Record<"alipay" | "wechat", PaymentLimit> = {
  alipay: {
    perTransactionUSD: 5000,
    annualCumulativeUSD: 50000,
    sourceId: "pboc-payment-uplift"
  },
  wechat: {
    perTransactionUSD: 5000,
    annualCumulativeUSD: 50000,
    sourceId: "pboc-payment-uplift"
  }
};

export const atmRule = {
  bank: "Bank of China",
  perWithdrawalCNY: 3000,
  acceptedNetworks: ["Visa", "Mastercard", "JCB", "American Express", "UnionPay"],
  sourceId: "boc-atm-en"
} as const;

export const customsRules = [
  {
    id: "rmb-cash",
    titleEn: "RMB cash carry limit",
    titleZh: "携带人民币现金上限",
    bodyEn: "Carry up to ¥20,000 RMB in cash when crossing the border. Any amount above that must go through a bank — you can't carry it in person.",
    bodyZh: "出入境旅客单次最多可携带 20,000 元人民币现金；超出部分须通过银行渠道汇兑。",
    sourceId: "customs-clearance-guide"
  },
  {
    id: "foreign-cash",
    titleEn: "Foreign currency declaration",
    titleZh: "外币申报阈值",
    bodyEn: "Declare any foreign cash above the USD 5,000 equivalent when you land — customs gives you a paper form at the arrivals desk. Leave it undeclared and the excess can be confiscated.",
    bodyZh: "携带外币现金超过 5,000 美元等值时必须在入境时书面申报，未申报可被没收。",
    sourceId: "customs-clearance-guide"
  },
  {
    id: "personal-goods",
    titleEn: "Personal-use goods (non-resident)",
    titleZh: "随身物品（非居民）",
    bodyEn: "Personal-use items you're bringing for yourself clear customs duty-free. If you're carrying goods worth more than ¥2,000 that aren't for your own use, declare them at the red channel and pay the assessed duty.",
    bodyZh: "合理自用物品免税；非自用、总值超 2,000 元的物品须报关并按规定纳税。",
    sourceId: "customs-clearance-guide"
  },
  {
    id: "duty-free-allowance",
    titleEn: "Duty-free allowance",
    titleZh: "免税额度",
    bodyEn: "Tobacco: 400 cigarettes (foreign passenger). Alcohol: 1.5 L (18+ only).",
    bodyZh: "烟草：外籍旅客 400 支香烟；酒类：1.5 升（18 岁以上）。",
    sourceId: "customs-clearance-guide"
  }
] as const;

export type PreArrivalStep = {
  id: string;
  titleEn: string;
  titleZh: string;
  bodyEn: string;
  bodyZh: string;
  sourceId: string;
};

export const preArrivalChecklist: PreArrivalStep[] = [
  {
    id: "bind-alipay",
    titleEn: "Set up Alipay or WeChat Pay before departure",
    titleZh: "出发前在 Alipay 或微信支付绑定外卡",
    bodyEn: "Both platforms accept Visa and Mastercard binding for foreign passport users. Per-transaction USD 5,000 / annual USD 50,000 (PBOC, 2024-04).",
    bodyZh: "两个平台均支持外籍护照用户绑定 Visa/Mastercard。单笔 5,000 美元、年累 50,000 美元（央行 2024-04 起）。",
    sourceId: "pboc-payment-uplift"
  },
  {
    id: "carry-cash",
    titleEn: "Bring backup cash, declare if > USD 5,000",
    titleZh: "备少量现金；超过 5,000 美元等值需申报",
    bodyEn: "RMB carry cap ¥20,000. Declare any foreign cash above USD 5,000 equivalent on the arrival form.",
    bodyZh: "人民币现金上限 ¥20,000；外币现金超 5,000 美元等值必须填申报单。",
    sourceId: "customs-clearance-guide"
  },
  {
    id: "atm-strategy",
    titleEn: "Bank of China ATMs are the most reliable for foreign cards",
    titleZh: "中国银行 ATM 接受外卡最可靠",
    bodyEn: "BOC ATMs accept all five major networks; CNY 3,000 per withdrawal. Issuer's own daily/weekly limits also apply.",
    bodyZh: "中行 ATM 接受 5 大卡组织外卡；单笔上限 ¥3,000，发卡行自有日/周限额另算。",
    sourceId: "boc-atm-en"
  },
  {
    id: "card-fallback",
    titleEn: "POS coverage is broadest at airports and major hotels",
    titleZh: "外卡 POS 覆盖最高的是机场与高星酒店",
    bodyEn: "Outside those, small merchants tend to be Alipay/WeChat-only or cash. Don't rely on Visa swipe in mom-and-pop shops.",
    bodyZh: "机场和高星酒店外卡 POS 覆盖最好；小型商户多使用支付宝/微信或现金，不要依赖外卡刷卡。",
    sourceId: "pboc-payment-uplift"
  }
];

export type CityPaymentNote = {
  cityId: CityId;
  cityEn: string;
  cityZh: string;
  bullets: Array<{ en: string; zh: string; sourceId: string }>;
};

export const cityPaymentNotes: CityPaymentNote[] = [
  {
    cityId: "beijing",
    cityEn: "Beijing",
    cityZh: "北京",
    bullets: [
      {
        en: "Subway tap-to-ride: all 5 networks (Visa, Mastercard, UnionPay, JCB, Amex) on every line; effective 2025-06-15.",
        zh: "地铁全网刷卡：5 大卡组织（Visa/MC/银联/JCB/Amex）已支持，2025-06-15 起。",
        sourceId: "beijing-subway-five-cards"
      },
      {
        en: "Capital + Daxing airports: 24 ATMs, 7 currency desks; over 11,000 city merchants accept foreign cards.",
        zh: "首都与大兴机场：合计 24 台外卡 ATM、7 处换汇点；全市 11,000+ 商户支持外卡。",
        sourceId: "beijing-airport-services"
      }
    ]
  },
  {
    cityId: "shanghai",
    cityEn: "Shanghai",
    cityZh: "上海",
    bullets: [
      {
        en: "Metro full network (21 lines / 517 stations) tap-to-ride; effective 2025-06-28. Cards must support ODA.",
        zh: "地铁全网（21 线 / 517 站）2025-06-28 起支持外卡刷卡；要求卡具备 ODA 离线认证。",
        sourceId: "shanghai-metro-five-cards"
      },
      {
        en: "Maglev to Pudong Airport accepts foreign cards from 2025-06-14.",
        zh: "浦东机场磁悬浮 2025-06-14 起支持外卡刷卡。",
        sourceId: "shanghai-maglev-bank-cards"
      },
      {
        en: "Taxis since 2024-04: Dazhong + others accept Visa/MC/Amex/JCB/UnionPay/Diners.",
        zh: "出租车自 2024-04 起：大众等接受 Visa/MC/Amex/JCB/UnionPay/Diners。",
        sourceId: "shanghai-public-transport"
      }
    ]
  },
  {
    cityId: "guangzhou",
    cityEn: "Guangzhou",
    cityZh: "广州",
    bullets: [
      {
        en: "Metro tap-to-ride for 5 networks city-wide; effective 2025-10-12.",
        zh: "广州地铁全网 5 卡组织刷卡；2025-10-12 起。",
        sourceId: "gz-metro-tap-to-ride"
      },
      {
        en: "AlipayHK works on metro/bus/tram/ferry since 2024-03-04; HKD settlement; monthly 20–50% rebate.",
        zh: "AlipayHK 自 2024-03-04 起可坐地铁/公交/有轨/轮渡；按 HKD 结算；月度 20–50% 返现。",
        sourceId: "gz-alipayhk-transit"
      }
    ]
  },
  {
    cityId: "shenzhen",
    cityEn: "Shenzhen",
    cityZh: "深圳",
    bullets: [
      {
        en: "Metro foreign-card POS at 391 service centres (440 devices); accepts 6 networks. Gate-level tap not yet universal.",
        zh: "地铁 391 个服务中心、440 台 POS 收外卡（6 大卡组织）；闸机刷卡尚未全网铺开。",
        sourceId: "sz-metro-pos"
      },
      {
        en: "Cross-border SZ-HK single QR (Shenzhen Tong / AlipayHK / Alipay) since 2023-06-01.",
        zh: "深港跨境单一二维码（深圳通 / AlipayHK / 支付宝）2023-06-01 起。",
        sourceId: "sz-hk-cross-border-qr"
      },
      {
        en: "Instant tax refund via AlipayHK in Shenzhen retail since 2025-09-08; up to 11% rebate in HKD.",
        zh: "深圳零售即时退税通过 AlipayHK，2025-09-08 起，最高 11% HKD 返现。",
        sourceId: "sz-tax-refund-alipayhk"
      }
    ]
  }
];

import { practicalPaymentsSourceIds } from "./practical-payments";

export function paymentsSourceIds(cityId?: CityId): string[] {
  const ids = new Set<string>();
  ids.add(platformLimits.alipay.sourceId);
  ids.add(platformLimits.wechat.sourceId);
  ids.add(atmRule.sourceId);
  customsRules.forEach((r) => ids.add(r.sourceId));
  preArrivalChecklist.forEach((s) => ids.add(s.sourceId));
  const cities = cityId ? cityPaymentNotes.filter((c) => c.cityId === cityId) : cityPaymentNotes;
  cities.forEach((c) => c.bullets.forEach((b) => ids.add(b.sourceId)));
  practicalPaymentsSourceIds().forEach((id) => ids.add(id));
  return [...ids];
}
