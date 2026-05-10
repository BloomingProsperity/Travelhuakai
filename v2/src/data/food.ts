import type { CityId } from "./transport";

export type CityFood = {
  cityId: CityId;
  cityEn: string;
  cityZh: string;
  cuisine: { en: string; zh: string; sourceId: string };
  districts: { en: string; zh: string; sourceId: string };
  deliveryNote: { en: string; zh: string; sourceId: string };
  pitfalls: Array<{ en: string; zh: string; sourceId: string }>;
};

export const cityFood: CityFood[] = [
  {
    cityId: "beijing",
    cityEn: "Beijing",
    cityZh: "北京",
    cuisine: {
      en: "Peking roast duck (Quanjude / Bianyifang traditions). Old-Beijing snacks: noodles with soybean paste, dou-zhi (fermented mung bean), tanghulu, copper-pot mutton hotpot. Halal options well-established.",
      zh: "北京烤鸭（全聚德、便宜坊传承）；老北京小吃：炸酱面、豆汁、糖葫芦、铜锅涮羊肉；清真选择普及。",
      sourceId: "beijing-roast-duck"
    },
    districts: {
      en: "Sanlitun (foreign restaurants, English menus common); Guomao CBD (international hotel dining); Wangfujing snack street; Hutong areas of central axis.",
      zh: "三里屯（西餐多、英文菜单常见）；国贸 CBD（高星酒店餐饮）；王府井小吃街；中轴线胡同片区。",
      sourceId: "beijing-axis-snacks"
    },
    deliveryNote: {
      en: "Meituan / Eleme apps require a Chinese mobile number for SMS verification and a working domestic payment method (Alipay/WeChat). Foreign tourists generally cannot place orders without local support.",
      zh: "美团/饿了么 App 注册需中国大陆手机号 + 国内支付方式（支付宝/微信），外国游客一般无本地协助难以下单。",
      sourceId: "beijing-roast-duck"
    },
    pitfalls: [
      {
        en: "Tea ceremony scams near tourist areas (Wangfujing/Houhai). Walk away if invited by 'students' to a tea house.",
        zh: "王府井/后海一带有'学生邀请去茶馆'的茶艺馆骗局，遇到主动搭讪请直接离开。",
        sourceId: "beijing-roast-duck"
      },
      {
        en: "Some smaller hutong shops are cash-only; Visa swipe is rare outside hotels.",
        zh: "胡同里的小店多为现金；高星酒店外刷外卡概率低。",
        sourceId: "beijing-axis-snacks"
      }
    ]
  },
  {
    cityId: "shanghai",
    cityEn: "Shanghai",
    cityZh: "上海",
    cuisine: {
      en: "Benbang (Shanghainese): braised pork in soy, sweet-soy ribs, drunken chicken. Xiaolongbao (Nanxiang Mantou Dian, Ding Tai Fung style). Strong international cuisine scene around Bund and former French Concession.",
      zh: "本帮菜：红烧肉、糖醋小排、醉鸡；小笼包（南翔馒头店、鼎泰丰风格）；外滩与原法租界国际菜系丰富。",
      sourceId: "shanghai-xiaolongbao"
    },
    districts: {
      en: "Xintiandi (English menus standard); Jing'an (mid-range international); the Bund (high-end); Former French Concession (cafés and bistros).",
      zh: "新天地（英文菜单标配）；静安（中端国际餐饮）；外滩（高端）；原法租界（咖啡馆与小酒馆）。",
      sourceId: "shanghai-xiaolongbao"
    },
    deliveryNote: {
      en: "Same as Beijing — Meituan/Eleme need a Chinese mobile + domestic payment. Hotels often have curated room-service menus in English as a workaround.",
      zh: "同北京——美团/饿了么 需国内手机号 + 支付。酒店通常有英文菜单的客房送餐替代方案。",
      sourceId: "shanghai-xiaolongbao"
    },
    pitfalls: [
      {
        en: "Xiaolongbao broth is scalding hot. Bite a small hole first, sip the soup, then eat. Multiple ER visits per year for tourist burns.",
        zh: "小笼包汤汁极烫——先咬小口吸汤再吃，每年都有外国游客烫伤就医的案例。",
        sourceId: "shanghai-xiaolongbao"
      },
      {
        en: "Confusing Hongqiao Airport (SHA) with Hongqiao Railway Station gates can lose 30 min. Plan dinner near where you'll actually depart from.",
        zh: "虹桥机场和虹桥火车站进站口容易混，差 30 分钟。订晚餐前先确认你是从哪边出。",
        sourceId: "shanghai-xiaolongbao"
      }
    ]
  },
  {
    cityId: "guangzhou",
    cityEn: "Guangzhou",
    cityZh: "广州",
    cuisine: {
      en: "Cantonese yum cha (morning dim sum), slow-simmered soups (lao-huo tang), char siu and roast meats, herbal tea (liang cha). Traditionally one of the most foreign-friendly food cities in China.",
      zh: "粤式早茶（点心）、老火汤、烧味（叉烧、烧鹅）、凉茶；传统上是国内对外籍游客最友好的美食城市之一。",
      sourceId: "gz-foreigner-guide-pdf"
    },
    districts: {
      en: "Shamian Island (historic concession area, English menus common); Tianhe (CBD international hotel dining); Beijing Road / Shangxiajiu pedestrian streets (snacks).",
      zh: "沙面（历史租界，英文菜单普及）；天河（CBD 国际酒店）；北京路/上下九步行街（小吃）。",
      sourceId: "gz-foreigner-guide-pdf"
    },
    deliveryNote: {
      en: "Same Meituan/Eleme constraints. Hotel concierge can sometimes order on your behalf — ask at check-in.",
      zh: "美团/饿了么 同样限制；酒店礼宾有时可代点，入住时直接问。",
      sourceId: "gz-foreigner-guide-pdf"
    },
    pitfalls: [
      {
        en: "Tea-seat fee (cha-wei): Cantonese restaurants charge a small per-person fee for tea + service (typically ¥3–10). It's normal, not a scam.",
        zh: "茶位费：粤菜餐厅按人收茶位费（一般 ¥3-10），是正常收费，不是诈骗。",
        sourceId: "gz-foreigner-guide-pdf"
      },
      {
        en: "Avoid yum cha at the 10:00–12:00 peak — wait can be 90+ minutes at famous places. Earlier (07:00–09:00) is calmer and traditional.",
        zh: "10:00-12:00 是早茶高峰，名店等位 90 分钟以上。07:00-09:00 更安静、更传统。",
        sourceId: "gz-foreigner-guide-pdf"
      },
      {
        en: "Humid climate: easy to underestimate water needs. Dim sum tea + extra water is the local norm.",
        zh: "湿热气候容易忽略补水；除点心茶外多备一瓶水。",
        sourceId: "gz-foreigner-guide-pdf"
      }
    ]
  },
  {
    cityId: "shenzhen",
    cityEn: "Shenzhen",
    cityZh: "深圳",
    cuisine: {
      en: "Hakka cuisine (salt-baked chicken, stuffed tofu) plus China-wide migrant cuisines — Sichuan, Hunan, Northeastern. Heavy Cantonese influence in older districts.",
      zh: "客家菜（盐焗鸡、酿豆腐）+ 全国迁徙菜系（川、湘、东北）；老城区粤菜影响重。",
      sourceId: "sz-baoan-airport-plan"
    },
    districts: {
      en: "Futian CBD (international hotel dining, English menus); Sea World / Shekou (expat-oriented); Nanshan (tech-park lunch culture); OCT-LOFT (cafés and indie restaurants).",
      zh: "福田 CBD（国际酒店餐饮、英文菜单）；海上世界/蛇口（外籍社区餐饮）；南山（科技园午餐）；华侨城 OCT-LOFT（咖啡与独立餐厅）。",
      sourceId: "sz-baoan-airport-plan"
    },
    deliveryNote: {
      en: "Meituan/Eleme constraints same as other cities. Hong Kong cross-border tourists often use AlipayHK to order from Shenzhen restaurants directly.",
      zh: "美团/饿了么 限制同四城；港客常用 AlipayHK 直接在深圳餐厅扫码点单。",
      sourceId: "sz-tax-refund-alipayhk"
    },
    pitfalls: [
      {
        en: "Many small eateries lack English menus despite the city's modern image. Translation app + photo menu is essential.",
        zh: "尽管深圳形象现代，但小店英文菜单仍少；翻译 App + 图片菜单是常用方案。",
        sourceId: "sz-baoan-airport-plan"
      },
      {
        en: "Cross-border food haul: dairy, fresh meat, and fresh fruit can be restricted by HK customs on the way back. Check before buying gifts.",
        zh: "跨境带食品：乳制品、生鲜肉类、新鲜水果回港会被海关限制，购物前先查规则。",
        sourceId: "sz-tax-refund-alipayhk"
      }
    ]
  }
];

import { pitfallSourceIds } from "./practical-other";

export function foodSourceIds(cityId?: CityId): string[] {
  const ids = new Set<string>();
  const cities = cityId ? cityFood.filter((c) => c.cityId === cityId) : cityFood;
  cities.forEach((c) => {
    ids.add(c.cuisine.sourceId);
    ids.add(c.districts.sourceId);
    ids.add(c.deliveryNote.sourceId);
    c.pitfalls.forEach((p) => ids.add(p.sourceId));
  });
  pitfallSourceIds("food", cityId).forEach((id) => ids.add(id));
  return [...ids];
}

export const allergyCardEn =
  "I am severely allergic to ____. I cannot eat or come into contact with any soup, sauce, oil, ingredients, or cookware that contain ____. Please do not include ____. If you are unsure, please tell me. Thank you.";

export const allergyCardZh =
  "我对 ____ 严重过敏，不能吃，也不能接触含有 ____ 的汤、酱、油、配料或厨具。请不要放 ____。如果不确定，请告诉我。谢谢。";
