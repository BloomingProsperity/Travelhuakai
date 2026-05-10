export type TopQuestion = {
  id: string;
  questionEn: string;
  questionZh: string;
  answerEn: string;
  answerZh: string;
  sourceId: string;
};

export const topQuestions: TopQuestion[] = [
  {
    id: "visa-need",
    questionEn: "Do I need a visa to enter China?",
    questionZh: "我需要签证才能入境中国吗？",
    answerEn: "50 nationalities have unilateral 30-day visa-free entry; 55 nationalities qualify for 240-hour transit visa-free across 65 ports / 24 provinces. Use the Visa Checker above for your specific passport.",
    answerZh: "50 个国家可单方面 30 天免签；55 个国家可享 240 小时过境免签，覆盖 65 口岸 / 24 省级地区。用上方校验器输入你的护照国籍查询。",
    sourceId: "nia-unilateral-list"
  },
  {
    id: "online-entry-card",
    questionEn: "Do I need to fill in an arrival card?",
    questionZh: "需要填入境卡吗？",
    answerEn: "Yes. Since 2025-11-20 the Foreigner Entry/Exit Card can be pre-filled online for free at the official NIA portal. Kiosks and paper cards are still available at the port. Watch out for fake fee-charging sites.",
    answerZh: "需要。自 2025-11-20 起可在国家移民管理局官网免费线上预填；口岸也提供自助设备和纸卡。请警惕仿冒收费网站。",
    sourceId: "nia-online-entry-card"
  },
  {
    id: "pay-foreign-card",
    questionEn: "Will my foreign credit card work in China?",
    questionZh: "外卡在中国能用吗？",
    answerEn: "Set up Alipay or WeChat Pay before you fly and link a Visa or Mastercard. PBOC raised the cap to USD 5,000 per transaction / USD 50,000 annually in 2024. Standalone Visa/Mastercard swipes work mainly at airports, hotels, and major retailers.",
    answerZh: "出发前在 Alipay 或微信支付绑定外卡（Visa / Mastercard）。央行 2024 年起单笔上限 USD 5,000、年累 USD 50,000。机场、酒店、大型商场和超市通常可刷外卡，街边小型商户多使用支付宝/微信。",
    sourceId: "pboc-payment-uplift"
  },
  {
    id: "cash-customs",
    questionEn: "How much cash can I bring in?",
    questionZh: "我能带多少现金入境？",
    answerEn: "Up to ¥20,000 RMB without declaration. Foreign currency above the equivalent of USD 5,000 must be declared on arrival.",
    answerZh: "人民币现金不超过 ¥20,000；外币现金折合超过 USD 5,000 必须申报。",
    sourceId: "customs-clearance-guide"
  },
  {
    id: "internet-apps",
    questionEn: "Will Google Maps and WhatsApp work?",
    questionZh: "Google 地图和 WhatsApp 在中国能用吗？",
    answerEn: "Several international services may be intermittent or unavailable in mainland China. Install local alternatives before you fly: Amap (gaode.com) for navigation, Baidu Translate for menus, WeChat for messaging, Alipay for payments. International roaming SIM/eSIM typically works as on your home plan.",
    answerZh: "部分国际服务在大陆可能不稳定或无法访问。出发前装好本地替代：高德地图（导航）、百度翻译（菜单）、微信（通信）、支付宝（支付）。国际漫游 SIM/eSIM 一般保留你原本的服务。",
    sourceId: "pboc-payment-uplift"
  },
  {
    id: "emergency-numbers",
    questionEn: "What's the emergency number if something happens?",
    questionZh: "遇到紧急情况拨打什么电话？",
    answerEn: "110 police, 119 fire, 120 ambulance, 122 traffic — all free. Beijing 12345 supports 10 languages 24/7; Shanghai 12345 supports 18 languages (press 7); Guangzhou 960169 is a three-party language bridge.",
    answerZh: "110 警务、119 火警、120 急救、122 交警，全部免费。北京 12345 24/7 支持 10 种语言；上海 12345 支持 18 种语言（按 7）；广州 960169 提供三方翻译转接服务。",
    sourceId: "shanghai-emergency-numbers"
  },
  {
    id: "rail-passport",
    questionEn: "Can I book high-speed rail with a foreign passport?",
    questionZh: "能用护照在 12306 买高铁票吗？",
    answerEn: "Yes via 12306.cn/en. Online auto-verification is fastest; if it fails, manual review of passport + selfie takes 3–5 working days, or visit any station counter on arrival.",
    answerZh: "可以，前往 12306.cn/en。自动认证最快；失败后可上传护照 + 自拍，人工审核需 3-5 个工作日，或抵达后到车站窗口现场办理。",
    sourceId: "rail-12306-faq"
  },
  {
    id: "tap-water",
    questionEn: "Is tap water safe to drink?",
    questionZh: "自来水能喝吗？",
    answerEn: "China's tap water is treated but boiling before drinking is the local norm. Hotel rooms typically include kettles and bottled water. Bottled water is widely sold for ¥2–3.",
    answerZh: "中国自来水经处理，但当地习惯烧开后再喝。酒店通常配电热水壶和瓶装水。瓶装水商超普遍，约 ¥2-3 一瓶。",
    sourceId: "shanghai-public-transport"
  }
];

export const topQuestionSourceIds: string[] = topQuestions.map((q) => q.sourceId);
