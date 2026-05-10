export type CityId = "beijing" | "shanghai" | "guangzhou" | "shenzhen";

export const CITY_LABELS: Record<CityId, { en: string; zh: string }> = {
  beijing: { en: "Beijing", zh: "北京" },
  shanghai: { en: "Shanghai", zh: "上海" },
  guangzhou: { en: "Guangzhou", zh: "广州" },
  shenzhen: { en: "Shenzhen", zh: "深圳" }
};

export type AirportOption = {
  kind: "cheapest" | "fastest" | "stable";
  routeEn: string;
  routeZh: string;
  costCNY: string;
  timeMin: string;
  paymentEn: string;
  paymentZh: string;
  sourceId: string;
};

export type CityTransport = {
  cityId: CityId;
  cityEn: string;
  cityZh: string;
  airports: Array<{
    code: string;
    nameEn: string;
    nameZh: string;
    options: AirportOption[];
  }>;
  metro: {
    summaryEn: string;
    summaryZh: string;
    sourceId: string;
  };
  rideHail: {
    en: string;
    zh: string;
    sourceId: string;
  };
  pitfalls: Array<{ en: string; zh: string; sourceId: string }>;
};

export const railBooking = {
  registration: {
    en: "Register at 12306.cn/en with passport. Email magic link OR Chinese mobile SMS. Online auto-verify; if it fails, upload passport + selfie (3-5 working days) or visit any station counter.",
    zh: "在 12306.cn/en 用护照注册：邮箱激活链接 / 国内手机短信。自动认证失败可上传护照 + 自拍，人工审核需 3-5 个工作日，或到车站窗口现场办理。",
    sourceId: "rail-12306-faq"
  },
  payment: {
    en: "12306 English portal accepts Visa, Mastercard, JCB, Diners Club, UnionPay; Alipay/WeChat referenced in the central government expat guide.",
    zh: "12306 英文版接受 Visa/MC/JCB/Diners/银联；中央政府外籍生活指南还提到支付宝/微信支付。",
    sourceId: "rail-12306-faq"
  },
  refund: {
    en: "≥8 days before departure: 0% fee. 48h-8d: 5%. 24-48h: 10%. <24h: 20%. One free change (date/train/seat) until 48h before departure.",
    zh: "退票费：发车前 ≥8 天 0%；48h-8 天 5%；24-48h 10%；<24h 20%。每票可免费改签一次，发车前 48h 内改签按差价 5-40% 收费。",
    sourceId: "rail-12306-faq"
  },
  realName: {
    en: "Passport name on the ticket must match the bio page exactly. Carry passport on board for inspection. E-tickets are linked to passport number.",
    zh: "车票护照名必须与首页一致。乘车时随身携带护照备查。电子票绑定护照号。",
    sourceId: "rail-12306-faq"
  }
} as const;

export const cityTransport: CityTransport[] = [
  {
    cityId: "beijing",
    cityEn: "Beijing",
    cityZh: "北京",
    airports: [
      {
        code: "PEK",
        nameEn: "Capital International (PEK)",
        nameZh: "首都国际机场",
        options: [
          {
            kind: "fastest",
            routeEn: "Capital Airport Express → Dongzhimen (Line 2/13)",
            routeZh: "首都机场线直达东直门（换 2/13 号线）",
            costCNY: "25 flat",
            timeMin: "~16",
            paymentEn: "5-network tap-to-ride",
            paymentZh: "5 大外卡刷卡",
            sourceId: "beijing-airport-express"
          },
          {
            kind: "cheapest",
            routeEn: "Airport shuttle bus to Beijing Railway Station (T2 Gate 11 / T3 Gate 7)",
            routeZh: "机场巴士到北京站（T2 11 号门 / T3 7 号门上车）",
            costCNY: "20–30",
            timeMin: "60–90",
            paymentEn: "Cash; foreign card support pending",
            paymentZh: "现金；外卡支持暂未官方确认",
            sourceId: "beijing-airport-services"
          },
          {
            kind: "stable",
            routeEn: "Official taxi queue at arrivals; metered fare",
            routeZh: "到达层官方出租车排队点；按计价器计费",
            costCNY: "100–150",
            timeMin: "40–80",
            paymentEn: "Cash + Alipay/WeChat; foreign cards inconsistent",
            paymentZh: "现金 + 支付宝/微信；外卡支持不稳定",
            sourceId: "beijing-airport-services"
          }
        ]
      },
      {
        code: "PKX",
        nameEn: "Daxing International (PKX)",
        nameZh: "大兴国际机场",
        options: [
          {
            kind: "fastest",
            routeEn: "Daxing Airport Express → Caoqiao (transfer Line 10/7)",
            routeZh: "大兴机场线直达草桥（换 10/7 号线）",
            costCNY: "35",
            timeMin: "~19",
            paymentEn: "5-network tap-to-ride",
            paymentZh: "5 大外卡刷卡",
            sourceId: "beijing-daxing-final-train"
          },
          {
            kind: "cheapest",
            routeEn: "Daxing Airport shuttle bus to Beijing/West Railway Station",
            routeZh: "机场巴士至北京站/北京西站",
            costCNY: "40",
            timeMin: "70–100",
            paymentEn: "Cash",
            paymentZh: "现金",
            sourceId: "beijing-airport-services"
          }
        ]
      }
    ],
    metro: {
      summaryEn: "All 29 lines / 523 stations: Visa, Mastercard, UnionPay, JCB, Amex tap-to-ride at every gate (since 2025-06-15). World's first metro to support all 5 networks.",
      summaryZh: "全 29 线 / 523 站：Visa/MC/UnionPay/JCB/Amex 全部支持闸机刷卡，2025-06-15 起。全球首个支持 5 大卡组织全网刷卡的地铁。",
      sourceId: "beijing-subway-five-cards"
    },
    rideHail: {
      en: "DiDi accepts foreign phone + Visa/Mastercard with English UI; in-app 24/7 English customer service. Take official taxi queue at airport, never solicitations inside terminal.",
      zh: "DiDi 接受外国手机号 + Visa/MC 国际信用卡，英文界面，应用内 24 小时英语客服；机场请只走官方排队点，不要跟随到达层揽客人员。",
      sourceId: "beijing-airport-services"
    },
    pitfalls: [
      {
        en: "T1 is not on Capital Airport Express. T2/T3 only — confirm terminal before boarding.",
        zh: "首都机场线只到 T2/T3，不到 T1。上车前先确认航站楼。",
        sourceId: "beijing-airport-express"
      },
      {
        en: "PEK and PKX are 80 km apart — confirm IATA code before transit.",
        zh: "首都（PEK）与大兴（PKX）相距 80 公里，安排接送时先确认 IATA 代码。",
        sourceId: "beijing-daxing-final-train"
      }
    ]
  },
  {
    cityId: "shanghai",
    cityEn: "Shanghai",
    cityZh: "上海",
    airports: [
      {
        code: "PVG",
        nameEn: "Pudong International (PVG)",
        nameZh: "浦东国际机场",
        options: [
          {
            kind: "fastest",
            routeEn: "Maglev → Longyang Road (transfer Line 2/7)",
            routeZh: "磁悬浮直达龙阳路（换 2/7 号线）",
            costCNY: "50 single / 80 round-trip",
            timeMin: "~8",
            paymentEn: "Visa/MC/Amex/JCB tap (since 2025-06-14) + e-CNY + cash",
            paymentZh: "Visa/MC/Amex/JCB 刷卡（2025-06-14 起）+ 数字人民币 + 现金",
            sourceId: "shanghai-maglev-bank-cards"
          },
          {
            kind: "cheapest",
            routeEn: "Metro Line 2 → city",
            routeZh: "地铁 2 号线进城",
            costCNY: "7–9",
            timeMin: "60–70",
            paymentEn: "5-network tap-to-ride",
            paymentZh: "5 大卡组织刷卡",
            sourceId: "shanghai-metro-five-cards"
          },
          {
            kind: "stable",
            routeEn: "Airport Link Line → Hongqiao T2",
            routeZh: "机场联络线直达虹桥 T2",
            costCNY: "fare pending",
            timeMin: "~40",
            paymentEn: "5-network tap-to-ride",
            paymentZh: "5 大卡组织刷卡",
            sourceId: "shanghai-airport-link"
          }
        ]
      },
      {
        code: "SHA",
        nameEn: "Hongqiao International (SHA)",
        nameZh: "虹桥国际机场",
        options: [
          {
            kind: "fastest",
            routeEn: "Metro Line 10 from T1 / Lines 2/10/17 from T2",
            routeZh: "T1 走 10 号线 / T2 走 2、10、17 号线",
            costCNY: "5–7",
            timeMin: "25–35",
            paymentEn: "5-network tap-to-ride",
            paymentZh: "5 大卡组织刷卡",
            sourceId: "shanghai-metro-five-cards"
          }
        ]
      }
    ],
    metro: {
      summaryEn: "All 21 lines / 517 stations / 896 km: 5 networks + e-CNY tap-to-ride (since 2025-06-28). Card must support ODA. UnionPay channel takes priority on dual-brand cards.",
      summaryZh: "全 21 线 / 517 站 / 896 km：5 大卡 + 数字人民币闸机刷卡（2025-06-28 起）。卡需支持 ODA 离线认证；双标卡优先走银联通道。",
      sourceId: "shanghai-metro-five-cards"
    },
    rideHail: {
      en: "DiDi accepts foreign phone and credit card. Official taxi queue at PVG arrivals; metered fare ~CNY 150-200 to city centre.",
      zh: "DiDi 接受外国手机号和信用卡。浦东到达层有官方出租车排队点，按计价器到市区约 ¥150-200。",
      sourceId: "shanghai-public-transport"
    },
    pitfalls: [
      {
        en: "Maglev terminates at Longyang Road, not city centre. Add 30–45 min for Metro Line 2 transfer.",
        zh: "磁悬浮终点是龙阳路，不是市中心，去市中心还要换 2 号线，再加 30-45 分钟。",
        sourceId: "shanghai-maglev-fare"
      },
      {
        en: "Cards lacking ODA functionality will be rejected at metro gates. Have cash as backup.",
        zh: "不支持 ODA 离线认证的卡会被闸机拒收，请备少量现金。",
        sourceId: "shanghai-metro-five-cards"
      },
      {
        en: "Most international flights use PVG, not SHA. Confirm airport code on your booking.",
        zh: "国际航班几乎都在浦东（PVG），不在虹桥（SHA）。订票时先确认机场代码。",
        sourceId: "shanghai-airport-link"
      }
    ]
  },
  {
    cityId: "guangzhou",
    cityEn: "Guangzhou",
    cityZh: "广州",
    airports: [
      {
        code: "CAN",
        nameEn: "Baiyun International (CAN)",
        nameZh: "白云国际机场",
        options: [
          {
            kind: "cheapest",
            routeEn: "Metro Line 3 to Gaozeng → T3 shuttle bus (every 5–10 min)",
            routeZh: "地铁 3 号线到高增 → 转 T3 接驳巴士（每 5-10 分钟一班）",
            costCNY: "7–10 (metro) + 2 (shuttle)",
            timeMin: "75–90",
            paymentEn: "5-network metro tap; cash on shuttle",
            paymentZh: "地铁 5 大卡刷卡；接驳巴士现金",
            sourceId: "gz-baiyun-t3-airport"
          },
          {
            kind: "fastest",
            routeEn: "Intercity rail to Baiyun Airport East Station (T3 transit centre)",
            routeZh: "城际铁路至白云机场东站（T3 交通中心）",
            costCNY: "fare pending",
            timeMin: "~30",
            paymentEn: "Foreign card via 12306",
            paymentZh: "外卡走 12306 购票",
            sourceId: "gz-baiyun-t3-airport"
          },
          {
            kind: "stable",
            routeEn: "Taxi from T3 Gate 72 / Ride-hail from P12",
            routeZh: "出租车 T3 72 号门 / 网约车 P12 停车场",
            costCNY: "60–100",
            timeMin: "40–60",
            paymentEn: "Cash + Alipay/WeChat",
            paymentZh: "现金 + 支付宝/微信",
            sourceId: "gz-baiyun-t3-airport"
          }
        ]
      }
    ],
    metro: {
      summaryEn: "All Guangzhou Metro lines: Visa, Mastercard, UnionPay, JCB, Amex tap-to-ride (since 2025-10-12). AlipayHK QR code also works since 2024-03-04.",
      summaryZh: "广州地铁全网：Visa/MC/UnionPay/JCB/Amex 闸机刷卡（2025-10-12 起）。AlipayHK 二维码自 2024-03-04 起可用。",
      sourceId: "gz-metro-tap-to-ride"
    },
    rideHail: {
      en: "DiDi has an official Guangzhou expat guide; foreign phone + foreign card both work. Take regulated taxi queue at T3 Gate 72.",
      zh: "DiDi 有广州官方外籍人士指南；外国手机号和外卡都能用。出租车走 T3 72 号门官方排队点。",
      sourceId: "gz-baiyun-t3-airport"
    },
    pitfalls: [
      {
        en: "T3 opened 2025-10-30. Some apps still show old terminal assignments — verify on the airline's confirmation.",
        zh: "T3 于 2025-10-30 启用，部分 App 仍按旧航站楼分配，订票后请以航司确认信息为准。",
        sourceId: "gz-baiyun-t3-airport"
      },
      {
        en: "Metro Line 3 doesn't reach T3 directly — shuttle bus from Gaozeng adds 20–30 min.",
        zh: "地铁 3 号线不直达 T3，要从高增换接驳巴士，多加 20-30 分钟。",
        sourceId: "gz-baiyun-t3-airport"
      }
    ]
  },
  {
    cityId: "shenzhen",
    cityEn: "Shenzhen",
    cityZh: "深圳",
    airports: [
      {
        code: "SZX",
        nameEn: "Bao'an International (SZX)",
        nameZh: "宝安国际机场",
        options: [
          {
            kind: "fastest",
            routeEn: "Metro Line 11 → Futian (CBD) / Shenzhen North (HSR)",
            routeZh: "地铁 11 号线 → 福田（CBD）/ 深圳北站（高铁枢纽）",
            costCNY: "5–12",
            timeMin: "30–40",
            paymentEn: "POS at service centre (6 networks); gate-tap pending",
            paymentZh: "服务中心 POS 收外卡（6 大卡）；闸机刷卡尚未全网",
            sourceId: "sz-baoan-airport-plan"
          },
          {
            kind: "cheapest",
            routeEn: "Bus M592 (24h) / public bus from GTC Door 16",
            routeZh: "M592 通宵公交 / GTC 16 号门普通公交",
            costCNY: "2–10",
            timeMin: "45–90",
            paymentEn: "Cash + Shenzhen Tong / Alipay",
            paymentZh: "现金 + 深圳通 / 支付宝",
            sourceId: "sz-baoan-airport-plan"
          },
          {
            kind: "stable",
            routeEn: "Taxi from GTC 2F Door 13 / Ride-hail GTC south",
            routeZh: "出租车 GTC 二楼 13 号门 / 网约车 GTC 南侧",
            costCNY: "60–120",
            timeMin: "35–60",
            paymentEn: "Cash + Alipay/WeChat",
            paymentZh: "现金 + 支付宝/微信",
            sourceId: "sz-baoan-airport-plan"
          }
        ]
      }
    ],
    metro: {
      summaryEn: "Foreign-card POS at 391 service centres / 440 devices: Visa, Mastercard, Discover, Amex, Diners Club, JCB. Universal gate-tap not yet confirmed; use service centre POS or cash.",
      summaryZh: "深圳地铁 391 个客服中心 / 440 台 POS 收外卡：Visa/MC/Discover/Amex/Diners/JCB；闸机外卡刷卡尚未全网，先去客服中心 POS 或用现金。",
      sourceId: "sz-metro-pos"
    },
    rideHail: {
      en: "DiDi works with foreign phone + foreign card. Cross-border note: Futian/Lo Wu MTR crossings need a HK Entry permit; HSR via Shenzhen North to HK West Kowloon needs passport real-name on 12306.",
      zh: "DiDi 接受外国手机号和外卡。跨境提示：福田/罗湖地铁口岸需要香港入境许可；深圳北 → 香港西九龙高铁需在 12306 用护照实名买票。",
      sourceId: "sz-baoan-airport-plan"
    },
    pitfalls: [
      {
        en: "Line 11 is express — skips many intermediate stops. Check station list before boarding.",
        zh: "11 号线是快线，跳站较多，上车前请先查看站点表。",
        sourceId: "sz-baoan-airport-plan"
      },
      {
        en: "Metro gate-level foreign card tap is not yet confirmed citywide — keep cash or prepaid Shenzhen Tong as fallback.",
        zh: "深圳地铁闸机外卡直接刷卡尚未全网，建议备现金或先去客服中心办理深圳通。",
        sourceId: "sz-metro-pos"
      },
      {
        en: "AlipayHK and Octopus card are not interchangeable on Shenzhen metro — different code systems.",
        zh: "AlipayHK 和八达通在深圳地铁不通用，是两套不同的码。",
        sourceId: "sz-hk-cross-border-qr"
      }
    ]
  }
];

import { pitfallSourceIds } from "./practical-other";

export function transportSourceIds(cityId?: CityId): string[] {
  const ids = new Set<string>();
  Object.values(railBooking).forEach((r) => ids.add(r.sourceId));
  const cities = cityId ? cityTransport.filter((c) => c.cityId === cityId) : cityTransport;
  cities.forEach((city) => {
    city.airports.forEach((a) => a.options.forEach((o) => ids.add(o.sourceId)));
    ids.add(city.metro.sourceId);
    ids.add(city.rideHail.sourceId);
    city.pitfalls.forEach((p) => ids.add(p.sourceId));
  });
  pitfallSourceIds("transport", cityId).forEach((id) => ids.add(id));
  return [...ids];
}
