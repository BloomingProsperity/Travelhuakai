import type { CityId } from "./transport";

export type CityFood = {
  cityId: CityId;
  cityEn: string;
  cityZh: string;
  cuisine: {
    en: string;
    zh: string;
    sourceId: string;
    culturalNotes?: { en: string; zh: string };
  };
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
      en: "Peking roast duck — carved tableside, paired with thin pancakes, scallion, and sweet bean sauce. Old-Beijing snacks: noodles with soybean paste, dou-zhi (fermented mung bean), tanghulu skewers, copper-pot mutton hotpot. Halal options widely available.",
      zh: "北京烤鸭——现场片皮，配薄饼、葱丝、甜面酱。老北京小吃：炸酱面、豆汁、糖葫芦、铜锅涮羊肉。清真选择普及。",
      sourceId: "beijing-roast-duck",
      culturalNotes: {
        en: "The duck is roasted whole until the skin is glassy, then sliced thin tableside. You wrap each slice in a delicate pancake with scallion, cucumber, and a dab of sweet bean sauce. Eating it is part performance, part shared meal — best with a small group ordering a whole duck. The classic version isn't halal; halal restaurants substitute chicken. Order chrysanthemum tea or a local beer with it; the tradition doesn't add chilli oil. Old-Beijing snacks (noodles with soybean paste, dou-zhi, tanghulu skewers) survive in walking-street stalls and small storefronts; pick one with locals queuing — that's your quality signal. Copper-pot mutton hotpot belongs to winter, served with sesame paste and pickled garlic on the side.",
        zh: "整鸭烤至外皮明亮酥脆，桌边片成薄片。每片用极薄的春饼裹好，配葱丝、黄瓜条、抹一勺甜面酱。吃法本身带有仪式感，适合几人共同点一只整鸭。经典做法用猪油处理面饼，并非清真；清真餐厅一般以鸡代鸭。配菊花茶或本地啤酒较自然，传统吃法不加辣油。老北京小吃（炸酱面、豆汁、糖葫芦）在步行街摊位和老店里仍能找到；建议选择本地顾客较多的摊位。铜锅涮羊肉属于冬季菜品，蘸麻酱、配腊八蒜。"
      }
    },
    districts: {
      en: "Sanlitun (foreign restaurants, English menus common); Guomao CBD (international hotel dining); Wangfujing snack street; Hutong areas of central axis.",
      zh: "三里屯（西餐多、英文菜单常见）；国贸 CBD（高星酒店餐饮）；王府井小吃街；中轴线胡同片区。",
      sourceId: "beijing-axis-snacks"
    },
    deliveryNote: {
      en: "Meituan and Ele.me both require a Chinese mobile number for SMS verification plus a domestic payment method. Ask your hotel concierge to order for you, or stick to restaurants you can walk into.",
      zh: "美团/饿了么 App 注册需中国大陆手机号 + 国内支付方式（支付宝/微信），外国游客一般无本地协助难以下单。",
      sourceId: "beijing-roast-duck"
    },
    pitfalls: [
      {
        en: "Tea ceremony scams near tourist areas (Wangfujing/Houhai). Walk away if invited by 'students' to a tea house.",
        zh: "王府井/后海一带有'学生邀请去茶馆'的茶艺馆骗局，遇到陌生人主动邀请请直接离开。",
        sourceId: "beijing-roast-duck"
      },
      {
        en: "Some smaller hutong shops are cash-only; Visa swipe is rare outside hotels.",
        zh: "胡同里的小型店铺多收现金；高星酒店之外刷外卡概率低。",
        sourceId: "beijing-axis-snacks"
      }
    ]
  },
  {
    cityId: "shanghai",
    cityEn: "Shanghai",
    cityZh: "上海",
    cuisine: {
      en: "Benbang Shanghainese cuisine: red-braised pork (hong-shao rou), sweet-soy ribs, drunken chicken. Xiaolongbao soup dumplings. International cuisine concentrates around the Bund and the former French Concession.",
      zh: "本帮菜：红烧肉、糖醋小排、醉鸡；小笼包。外滩与原法租界国际菜系丰富。",
      sourceId: "shanghai-xiaolongbao",
      culturalNotes: {
        en: "Shanghainese cooking leans sweet — soy reduces with rock sugar until it glazes pork belly mahogany red; sweet-soy ribs are a holiday staple; drunken chicken is poached cold and steeped in shaoxing wine for hours. Xiaolongbao is the everyday lunch icon — eighteen pleats, all about the broth inside. The technique: bite a tiny hole at the top, sip the broth out, then eat the wrapper and filling. Burning your tongue on the first try is a rite of passage. Compared with Beijing, Shanghainese tabletop manners feel gentler — smaller plates, more sharing, less ceremony. International dining (French, Japanese, Italian) has real depth here that you won't find as easily elsewhere in mainland China.",
        zh: "本帮菜偏甜——酱油配冰糖收汁，红烧肉光亮如琥珀；糖醋小排是节日常菜；醉鸡冷食，在绍兴黄酒里浸数小时。小笼包是日常午餐的代表——十八道褶捏好，重点在里面的汤汁。吃法：先在顶端咬一个小口，吸出汤汁，再吃皮和馅。初次食用要注意烫口。和北京菜相比，本帮菜的桌面礼仪更从容——分量更小、共享更多，排场感较弱。国际餐饮（法、日、意）在这里积累较深，在中国大陆其他城市相对少见。"
      }
    },
    districts: {
      en: "Xintiandi (English menus standard); Jing'an (mid-range international); the Bund (high-end); Former French Concession (cafés and bistros).",
      zh: "新天地（英文菜单标配）；静安（中端国际餐饮）；外滩（高端）；原法租界（咖啡馆与小酒馆）。",
      sourceId: "shanghai-xiaolongbao"
    },
    deliveryNote: {
      en: "Same as Beijing — Meituan/Eleme need a Chinese mobile + domestic payment. Hotels often have curated room-service menus in English as a workaround.",
      zh: "同北京——美团/饿了么需国内手机号 + 支付。酒店通常有英文菜单的客房送餐替代方案。",
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
        zh: "虹桥机场和虹桥火车站进站口容易混淆，可能相差 30 分钟。订晚餐前先确认实际出发位置。",
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
      sourceId: "gz-foreigner-guide-pdf",
      culturalNotes: {
        en: "Cantonese eating is a daylong rhythm. Yum cha (literally 'drink tea') starts at sunrise — families bring babies and grandparents, dim sum trays circle the table, conversations stretch for hours. Tea is bottomless; the small tea-seat fee (¥3–10 per person) covers leaves and table service, and is normal across Cantonese restaurants — never a scam, even if it surprises you on the bill. Slow-simmered soup (lao-huo tang) opens dinner — bones and herbs simmered five hours. Herbal tea (liang cha, sold from corner shops) is closer to medicine than refreshment, especially in summer humidity. Char siu and roast goose hang in shop windows; the skin should crackle when cut. Order more than you think you need — empty plates embarrass the host. English menus are common in tourist areas but small neighbourhood places use picture menus or just Chinese — translation app in hand.",
        zh: "粤菜贯穿一天的餐饮节奏。早茶（即 \"饮茶\"）清晨开始，常见一家三代围坐一桌，点心车不断推过，聊天可持续整个上午。茶位费（每人 ¥3–10）是茶叶 + 桌面服务的费用，粤菜餐厅普遍收取，属于正常收费。晚餐常从老火汤开始——骨头和药材熬五小时。凉茶（街边凉茶铺售卖）更接近药用饮品，夏天湿热时尤其常见。烧味店里挂着叉烧和烧鹅，外皮应在切开时有脆响。点菜讲究丰盛，空盘会让主人显得招待不周。英文菜单在游客区常见，社区里的小型餐馆多用图片菜单或纯中文菜单，建议准备好翻译 App。"
      }
    },
    districts: {
      en: "Shamian Island (historic concession area, English menus common); Tianhe (CBD international hotel dining); Beijing Road / Shangxiajiu pedestrian streets (snacks).",
      zh: "沙面（历史租界，英文菜单普及）；天河（CBD 国际酒店）；北京路/上下九步行街（小吃）。",
      sourceId: "gz-foreigner-guide-pdf"
    },
    deliveryNote: {
      en: "Same Meituan/Eleme constraints. Hotel concierge can sometimes order on your behalf — ask at check-in.",
      zh: "美团/饿了么同样受限；酒店礼宾有时可代点，入住时可直接询问。",
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
      sourceId: "sz-baoan-airport-plan",
      culturalNotes: {
        en: "Shenzhen has no native cuisine of its own — the city is 30 million people from every province cooking what they grew up with. The Hakka tradition that pre-dates the boom leans on salt and preservation: salt-baked chicken roasts whole inside coarse salt; stuffed tofu has minced pork tucked into bean curd squares; pounded fish-paste dishes are a daily staple in older Hakka neighbourhoods. The other 80% of the food scene is Sichuan, Hunan, Northeastern, Cantonese, and lately Yunnan — each clustered where its migrant wave settled. The newest layer is Hong Kong-style cha chaan teng (tea restaurants), recognisable by bilingual menus, stainless-steel milk-tea kettles, and meals that mix Cantonese, British, and Southeast Asian ideas (egg tarts, French toast, Hainan chicken rice). Spice tolerance varies wildly between restaurants — ask for 'mild' if you mean it.",
        zh: "深圳的餐饮结构以移民城市为底色，来自全国各省的人带来各自饮食传统。早于经济特区存在的客家传统偏重盐味和腌制：盐焗鸡以粗盐包裹整鸡烘制；酿豆腐把猪肉碎填进豆腐块；老客家社区里仍能吃到现打的鱼丸鱼面。其余餐饮类型以川、湘、东北、粤菜为主，近年云南菜也较常见，大致随各代移民聚居地分布。新近的一层是港式茶餐厅，可通过双语菜单、不锈钢奶茶壶，以及粤式 + 英式 + 东南亚混搭菜品（蛋挞、西多士、海南鸡饭）识别。各餐厅辣度差异较大，不能吃辣时请明确说明 \"微辣\"。"
      }
    },
    districts: {
      en: "Futian CBD (international hotel dining, English menus); Sea World / Shekou (expat-oriented); Nanshan (tech-park lunch culture); OCT-LOFT (cafés and indie restaurants).",
      zh: "福田 CBD（国际酒店餐饮、英文菜单）；海上世界/蛇口（外籍社区餐饮）；南山（科技园午餐）；华侨城 OCT-LOFT（咖啡与独立餐厅）。",
      sourceId: "sz-baoan-airport-plan"
    },
    deliveryNote: {
      en: "Meituan/Eleme constraints same as other cities. Hong Kong cross-border tourists often use AlipayHK to order from Shenzhen restaurants directly.",
      zh: "美团/饿了么限制同其他城市；香港游客常用 AlipayHK 直接在深圳餐厅扫码点单。",
      sourceId: "sz-tax-refund-alipayhk"
    },
    pitfalls: [
      {
        en: "Many small eateries lack English menus despite the city's modern image. Translation app + photo menu is essential.",
        zh: "尽管深圳形象现代，但小型餐馆英文菜单仍少；翻译 App + 图片菜单是常用方案。",
        sourceId: "sz-baoan-airport-plan"
      },
      {
        en: "Cross-border food haul: dairy, fresh meat, and fresh fruit can be restricted by HK customs on the way back. Check before buying gifts.",
        zh: "跨境带食品：乳制品、生鲜肉类、新鲜水果回港会被海关限制，购物前请先查询规则。",
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
