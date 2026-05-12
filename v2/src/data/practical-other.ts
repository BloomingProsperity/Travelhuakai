import type { CityId } from "./transport";

export type PillarId = "entry" | "transport" | "food" | "emergency";

export type Pitfall = {
  id: string;
  pillar: PillarId;
  cityScope?: CityId[];
  titleEn: string;
  titleZh: string;
  bodyEn: string;
  bodyZh: string;
  sourceId: string;
};

export const pitfalls: Pitfall[] = [
  // ENTRY
  {
    id: "entry-third-country-rule",
    pillar: "entry",
    titleEn: "240-hour transit: onward ticket must leave to a DIFFERENT country",
    titleZh: "240 小时过境：下一程必须飞往不同的国家",
    bodyEn: "New York → Shanghai → New York is denied at immigration. New York → Shanghai → Singapore is approved. Hong Kong, Macau, and Taiwan count as separate regions for this rule.",
    bodyZh: "纽约 → 上海 → 纽约会被边检拒绝；纽约 → 上海 → 新加坡可通过。香港 / 澳门 / 台湾在这条规则中视为不同地区。",
    sourceId: "blog-cft-transit"
  },
  {
    id: "entry-clock-immigration",
    pillar: "entry",
    titleEn: "240-hour clock starts at the immigration STAMP, not wheels-down",
    titleZh: "240 小时从盖章那一刻起算，不是落地时间",
    bodyEn: "Land at 23:00, clear immigration at 00:30 = you've already lost a day. Many travellers miscalculate and overstay.",
    bodyZh: "23:00 落地、0:30 通关 = 第一天已少了大半天。常见误算会导致超期滞留。",
    sourceId: "blog-cft-transit"
  },
  {
    id: "entry-digital-card",
    pillar: "entry",
    titleEn: "Digital arrival card mandatory since 2025-11; airlines don't tell you",
    titleZh: "2025-11 起强制线上申报入境卡；航司不会提醒",
    bodyEn: "Fill the NIA digital card (s.nia.gov.cn) within 72 hours before arrival. Skipping it sends you to a secondary desk that adds 20–40 minutes at the airport.",
    bodyZh: "抵达前 72 小时内在国家移民管理局官网（s.nia.gov.cn）填好。未提前填报会被转到二次受理台，通常多花 20–40 分钟。",
    sourceId: "blog-smartsh-faq"
  },
  {
    id: "entry-wrong-queue",
    pillar: "entry",
    cityScope: ["beijing", "shanghai"],
    titleEn: "Use the dedicated TWOV counter — wrong queue = +30 min",
    titleZh: "走过境免签（TWOV）专用通道——排错队会增加 30 分钟",
    bodyEn: "240-hour transit travellers must use the TWOV counter, not general immigration. Pudong T2 marks it clearly; Beijing T3 barely labels it — look for the small \"Visa-Free Transit\" sign.",
    bodyZh: "过境免签必须走 TWOV 专用通道。浦东 T2 标识清楚；北京 T3 标牌很小，请留意 \"Visa-Free Transit\" / \"过境免签\"。",
    sourceId: "blog-cft-transit"
  },
  {
    id: "entry-extension-fail",
    pillar: "entry",
    titleEn: "Visa-free extensions almost always rejected — apply 8+ days early",
    titleZh: "免签延期几乎都被拒——确需申请请提前 8 天以上",
    bodyEn: "SmartShanghai staff tried — rejected for \"insufficient reason\". Processing takes up to 7 working days, so you must apply at least 8 days before expiry. Plan your trip length up front.",
    bodyZh: "SmartShanghai 编辑实际申请被拒，理由 \"insufficient reason\"。审批最长 7 个工作日，确需申请至少提前 8 天。出发前应先确认行程时长。",
    sourceId: "blog-smartsh-faq"
  },
  {
    id: "entry-overstay-ban",
    pillar: "entry",
    titleEn: "Overstay penalty = entry ban, not just a fine",
    titleZh: "超期滞留：罚款 + 禁入，不是只罚款",
    bodyEn: "Overstays beyond a few days trigger a 1–5 year re-entry ban PLUS fines from CNY 500/day. Don't gamble on the last day.",
    bodyZh: "超期几天可能被禁入境 1–5 年，外加每天 500 起的罚款。最后一天不要冒险。",
    sourceId: "blog-cft-transit"
  },
  {
    id: "entry-unlicensed-accom",
    pillar: "entry",
    titleEn: "Unlicensed guesthouses / Airbnb-style hosts can't legally take foreign guests",
    titleZh: "无证民宿 / Airbnb 不能合法接待外国客人",
    bodyEn: "Chinese law requires accommodation to register foreign guests with police. Budget guesthouses and many Airbnb listings lack the licence. Both you and the host face fines.",
    bodyZh: "法律要求住宿方将外国客人信息登记到当地派出所。低价民宿和大量 Airbnb 房源不具备这类资质，住客和房东均可能被罚。",
    sourceId: "blog-thechinajourney"
  },
  {
    id: "entry-police-register-24h",
    pillar: "entry",
    titleEn: "Private accommodation: register with police within 24h",
    titleZh: "住私人住所：24 小时内派出所登记",
    bodyEn: "Hotels do this for you automatically. At an Airbnb / private rental, you OR your host must register at the local police station (paichusuo) within 24 hours of check-in. Failure is a fine for both parties.",
    bodyZh: "酒店会自动帮你登记。住 Airbnb / 朋友家：你或房东必须 24 小时内到属地派出所办理\"境外人员临时住宿登记\"。未登记双方均可能被罚。",
    sourceId: "blog-thechinajourney"
  },

  // PAYMENTS additions handled in practical-payments.ts. Three new community blog items below
  // are kept here so they stay grouped with their pillar — but they will be merged in via the
  // practical-payments file pattern. (Skipped duplicating here.)

  // TRANSPORT
  {
    id: "transport-bj-tap-lanes",
    pillar: "transport",
    cityScope: ["beijing"],
    titleEn: "Beijing Metro tap-and-go: only at end-of-row gate lanes",
    titleZh: "北京地铁外卡刷闸：通常只有每排尽头对应闸机可用",
    bodyEn: "Since 2024-09 all 490 stations support contactless Visa/Mastercard, but the international-card turnstile is at a specific lane (usually the end of the row). Tapping a domestic-only gate just rejects.",
    bodyZh: "2024-09 起全 490 站支持外卡刷闸，但只有指定闸机（通常每排尽头那一台）能用。其他闸机刷外卡会被拒。",
    sourceId: "bj-subway-tap-2024"
  },
  {
    id: "transport-alipay-qr-percity",
    pillar: "transport",
    titleEn: "Alipay transit QR: must activate per city",
    titleZh: "Alipay 公交码：每个城市要单独开通",
    bodyEn: "Activating Beijing's transit code does NOT activate Shanghai / Guangzhou / Shenzhen. Open the Transport tab, pick the target city, and activate before reaching the turnstile.",
    bodyZh: "在北京开通的公交码到上海 / 广州 / 深圳都不能用。先在 Alipay 出行页面选择目标城市重新开通，再进站过闸。",
    sourceId: "blog-cgl-publictransport"
  },
  {
    id: "transport-alipay-qr-5min",
    pillar: "transport",
    titleEn: "Alipay transit QR expires in 5 minutes — regenerate at the gate",
    titleZh: "Alipay 公交码 5 分钟过期——进站前重新生成",
    bodyEn: "If you generated the code while walking and 5+ minutes passed, the turnstile rejects it. Regenerate immediately before scanning.",
    bodyZh: "提前生成的码 5 分钟会失效。若步行时间较长，进闸前应重新生成一次。",
    sourceId: "blog-cgl-publictransport"
  },
  {
    id: "transport-12306-verify-3-7d",
    pillar: "transport",
    titleEn: "12306 passport verification takes 3–7 days — last-minute booking fails",
    titleZh: "12306 护照人工审核 3–7 天——临时买票来不及",
    bodyEn: "Online passport verification at 12306.cn requires a passport photo plus a selfie holding the passport. Processing typically takes 3–5 days, up to 7 in peak season. New accounts can't book next-day trains. If you're short on time, use Trip.com — verification usually clears in 1–2 hours.",
    bodyZh: "12306 上传护照 + 手持护照自拍后进入人工审核，旺季通常 3–5 天，最长 7 天。新注册账号可能无法购买次日票。Trip.com 通常 1–2 小时完成审核，是常用替代方案。",
    sourceId: "blog-cgl-train"
  },
  {
    id: "transport-no-passport-machines",
    pillar: "transport",
    titleEn: "Self-service ticket machines reject passports — go to staffed window",
    titleZh: "自助取票机不识别护照——去人工窗口",
    bodyEn: "Auto-collection machines only read Chinese ID cards. Foreign passport holders must queue at staffed windows. At Beijing West / Shanghai Hongqiao that's 20–30 min on a busy day.",
    bodyZh: "自助取票机只读取中国居民身份证，不能识别护照。外国旅客必须排人工窗口。北京西 / 虹桥高峰期通常需排 20–30 分钟。",
    sourceId: "blog-cgl-train"
  },
  {
    id: "transport-12306-group-verify",
    pillar: "transport",
    titleEn: "Group bookings on 12306: each passport needs its own 3–7 day verification",
    titleZh: "12306 给家人订票：每本护照都要走 3–7 天审核",
    bodyEn: "Adding extra passengers to your 12306 booking means each one's passport runs a separate verification cycle. Family of 4 = all 4 passports must clear before any tickets issue. Use Trip.com for groups.",
    bodyZh: "12306 为家人添加乘车人时，每本护照都要单独审核一次。四人家庭需四本护照全部通过后才能出票。家庭出行可直接使用 Trip.com。",
    sourceId: "blog-cgl-train"
  },
  {
    id: "transport-bj-stations",
    pillar: "transport",
    cityScope: ["beijing"],
    titleEn: "Beijing has 5+ rail stations — book the right one",
    titleZh: "北京有 5+ 个火车站——订票要确认具体车站",
    bodyEn: "Beijing main, West, South, North, Chaoyang. Different stations are 30–60 min apart by metro. Confirm the specific station name when booking, not just \"Beijing\".",
    bodyZh: "北京站、北京西、北京南、北京北、北京朝阳——彼此地铁需 30–60 分钟。订票时确认具体车站，不要只看 \"北京\"。",
    sourceId: "blog-cgl-train"
  },
  {
    id: "transport-bj-t3-touts",
    pillar: "transport",
    cityScope: ["beijing"],
    titleEn: "Black taxi touts at Capital T3 information desk — 3–4× meter",
    titleZh: "首都 T3 询问台附近的黑车——3–4 倍计价器费用",
    bodyEn: "Men posing as helpers near the T3 taxi info desk single out foreign-looking travellers and quote 3–4× meter. Legitimate Beijing taxis show \"Jing B\" plates. Anyone who approaches you first isn't legit — walk to the official taxi queue.",
    bodyZh: "T3 询问台附近有人冒充工作人员，专向外籍旅客报 3–4 倍价格。正规北京出租车牌是 \"京 B\"。主动上前招揽的通常不是正规车辆，请前往官方出租车排队点。",
    sourceId: "blog-flyertalk-bjtaxi"
  },
  {
    id: "transport-gz-station-touts",
    pillar: "transport",
    cityScope: ["guangzhou"],
    titleEn: "Black taxi touts at Guangzhou South / East stations — 3–5× meter",
    titleZh: "广州南站 / 东站门口黑车——3–5 倍计价器费用",
    bodyEn: "Touts work the main exits. Use DiDi from the in-station app pickup zone, or walk all the way past the touts to the official metered taxi rank.",
    bodyZh: "南站 / 东站出口有大量揽客人员。建议从站内 DiDi 上车点叫车，或直接走到官方出租车排队点（绕开所有揽客人员）。",
    sourceId: "blog-beforeyougo-gz"
  },
  {
    id: "transport-didi-chuxing-app",
    pillar: "transport",
    titleEn: "Use DiDi Chuxing app, NOT \"DiDi Rider\" international",
    titleZh: "用 \"DiDi Chuxing\" 不是 \"DiDi Rider\" 国际版",
    bodyEn: "DiDi Rider international has limited mainland coverage. DiDi Chuxing (mainland version) has a full English UI, broader vehicles, and accepts Alipay / WeChat with foreign cards reliably.",
    bodyZh: "国际版 \"DiDi Rider\" 在大陆覆盖有限。建议安装 \"DiDi Chuxing\"（大陆版），有英文界面、车型更多，外卡 Alipay / 微信付款较稳定。",
    sourceId: "blog-wise-didi"
  },
  {
    id: "transport-sz-octopus-no",
    pillar: "transport",
    cityScope: ["shenzhen"],
    titleEn: "Octopus card does NOT work on Shenzhen Metro",
    titleZh: "八达通在深圳地铁不能用",
    bodyEn: "Hong Kong tourists assume Octopus works — it doesn't on Shenzhen Metro. Options: (1) Alipay transit QR activated for Shenzhen; (2) Shenzhen Tong physical card (CNY 20 deposit); (3) \"Hu Tong Xing\" dual-card sold in Shenzhen for CNY 68 — has both Octopus (HKD) and Shenzhen Tong (CNY) purses, each topped up separately.",
    bodyZh: "香港游客常以为八达通可用，但深圳地铁不支持。三个选项：(1) Alipay 公交码开通深圳；(2) 深圳通实体卡（押金 ¥20）；(3) 深圳销售的 \"互通行\" 联名卡 ¥68，包含八达通（HKD）+ 深圳通（CNY）两个钱包，需分别充值。",
    sourceId: "eyeshenzhen-octopus-interop"
  },
  {
    id: "transport-sh-metro-refund-window",
    pillar: "transport",
    cityScope: ["shanghai"],
    titleEn: "Shanghai metro refunds: only 11:00–14:00 at pink service desk",
    titleZh: "上海地铁退票：只在粉色服务台 11:00–14:00 受理",
    bodyEn: "Bought the wrong ticket from a vending machine? Refunds processed only at pink service counters during 11:00–14:00 daily. Outside those hours = no refund. Bring the original ticket and your passport.",
    bodyZh: "在自动售票机买错票？只有粉色服务台 11:00–14:00 受理退票。错过该时间段不予办理。请携带原票和护照。",
    sourceId: "blog-travelchinatips-shmetro"
  },
  {
    id: "transport-sh-yellow-white-taxi",
    pillar: "transport",
    cityScope: ["shanghai"],
    titleEn: "Shanghai street taxi: stick to yellow (Qiangsheng) or white (Jinjiang)",
    titleZh: "上海路边扬招出租车：优先选择黄色（强生）或白色（锦江）",
    bodyEn: "Other liveries (red, dark blue, etc.) are smaller companies with weaker accountability. DiDi is preferable; if hailing on the street, only flag yellow or white.",
    bodyZh: "其他颜色（红 / 深蓝）多为规模较小的公司，出现问题后追责较难。优先使用 DiDi；如需路边扬招，建议只选择黄色或白色车辆。",
    sourceId: "blog-travelchinawith-taxi"
  },

  // FOOD
  {
    id: "food-veg-pork-stock",
    pillar: "food",
    titleEn: "\"Vegetarian\" dishes often cooked in pork stock or lard",
    titleZh: "素菜常用猪骨汤或猪油烹制",
    bodyEn: "Ordering a vegetable dish at a regular restaurant doesn't make it vegetarian — many are blanched in pork-bone broth or stir-fried in lard. Only Buddhist vegetarian restaurants (素食 Su Shi) reliably skip pork — but they use seitan (pure gluten) for mock meats, a separate problem for coeliacs.",
    bodyZh: "在普通餐厅点 \"素菜\" 不等于严格素食：许多菜会用猪骨汤焯水或用猪油烹制。只有挂 \"素食\" 牌子的佛教素菜馆通常不使用猪肉或猪油，但它们常用面筋（纯麸质）做素肉，麸质不耐受者需避开。",
    sourceId: "blog-alittleadrift-veg"
  },
  {
    id: "food-soy-wheat",
    pillar: "food",
    titleEn: "Soy sauce contains wheat — \"no soy\" rarely eliminates gluten",
    titleZh: "酱油含小麦——\"不放酱油\" 通常不能完全去除麸质",
    bodyEn: "酱油 jiangyou contains wheat and is in nearly every wok dish. Asking for \"no soy sauce\" usually means less, not none. Truly gluten-free eating in China requires steamed dishes ordered in writing to the kitchen.",
    bodyZh: "酱油含小麦，几乎每道炒菜都可能使用。说 \"少放\" 通常只能减少用量，很难完全没有。若需无麸质饮食，建议点蒸菜，并用中文书面说明给厨房。",
    sourceId: "blog-sinotales-allergies"
  },
  {
    id: "food-hidden-shrimp",
    pillar: "food",
    titleEn: "Dried shrimp / shrimp paste hidden in non-seafood dishes",
    titleZh: "虾皮 / 虾酱常作为提鲜底料藏在非海鲜菜里",
    bodyEn: "Dried shrimp (虾皮) and shrimp paste (虾酱) are routinely added to vegetable stir-fries, congee, and soups as flavour enhancers. Menu shows zero seafood. Show a Chinese-language allergy card directly to KITCHEN staff, not just the waiter.",
    bodyZh: "虾皮和虾酱常被加进炒青菜、粥、汤里提鲜，菜单名称通常不会显示。请把过敏卡直接交给后厨厨师，不要只交给服务员。",
    sourceId: "blog-sinotales-allergies"
  },
  {
    id: "food-shared-wok",
    pillar: "food",
    titleEn: "Shared woks = cross-contamination even when staff understand the allergy",
    titleZh: "共用炒锅 = 即使厨师懂过敏也会交叉污染",
    bodyEn: "Traditional kitchens use 1–2 woks for everything, rinsed only with hot water between dishes. Severe allergies need restaurants with visibly separated cooking equipment.",
    bodyZh: "传统厨房常用 1–2 口炒锅处理所有菜品，菜品之间通常只用热水冲洗。严重过敏者应选择能看到专用厨具的餐厅。",
    sourceId: "blog-travelchinawith-allergies"
  },
  {
    id: "food-tea-house-scam",
    pillar: "food",
    cityScope: ["beijing", "shanghai", "guangzhou"],
    titleEn: "Tea house scam: \"practice English\" → CNY 500–5000 bill",
    titleZh: "茶馆骗局：\"想练英语\" → 账单 ¥500–5000",
    bodyEn: "Documented at Wangfujing / Houhai (BJ), Nanjing Road / People's Park (SH), Shamian Island (GZ). The new \"friend\" disappears; staff block exits until payment. If you walk in with strangers, demand to see a menu with prices BEFORE sitting down.",
    bodyZh: "常见骗局：王府井 / 后海（北京）、南京路 / 人民公园（上海）、沙面（广州）有人主动上前说 \"想练英语\"，随后带你进茶馆，同行者离开后出现 ¥500–5000 账单，并阻止离店。与陌生人进店前必须先看带价格的菜单。",
    sourceId: "blog-chinamike"
  },
  {
    id: "food-short-change",
    pillar: "food",
    cityScope: ["beijing", "shanghai", "guangzhou"],
    titleEn: "Tourist-area restaurants short-change by CNY 20–100",
    titleZh: "景区餐厅找零短少 ¥20–100",
    bodyEn: "Documented near Shamian (GZ), Yu Garden (SH), Wangfujing (BJ). Count change immediately; demand an itemised receipt (发票 fapiao) before paying.",
    bodyZh: "沙面（广州）、豫园（上海）、王府井（北京）部分景区餐厅可能少找零。请当场清点，付款前先索要发票。",
    sourceId: "blog-beforeyougo-gz"
  },
  {
    id: "food-tap-water",
    pillar: "food",
    titleEn: "Tap water requires boiling — even in 4-star hotels",
    titleZh: "自来水必须烧开——四星酒店也一样",
    bodyEn: "All four cities' tap water needs boiling before drinking. Hotel rooms include a kettle or filtered dispenser. Ice in budget restaurants may be tap-water-based. Bottled water 2–5 CNY for 550 ml.",
    bodyZh: "北上广深的自来水都要烧开再喝。酒店通常配有烧水壶或饮水机。平价餐厅的冰块可能由未烧开的自来水制成。瓶装水 ¥2–5 / 550ml。",
    sourceId: "blog-thechinajourney"
  },
  {
    id: "food-canton-fair",
    pillar: "food",
    cityScope: ["guangzhou"],
    titleEn: "Canton Fair (Apr / Oct): restaurant prices +30–60%, fake bookings",
    titleZh: "广交会（4 月 / 10 月）：餐厅涨价 30–60%，警惕虚假预订平台",
    bodyEn: "Bi-annual Canton Fair brings 200,000+ trade visitors; Pazhou and Tianhe restaurant supply gets overwhelmed and prices spike 30–60%. Fake reservation platforms ask for deposits — book only via Dianping (大众点评) or Meituan.",
    bodyZh: "一年两次广交会带来 20 万 + 商务客；琶洲、天河餐厅供给紧张，价格涨 30–60%。可能出现仿冒预订平台收取押金。订餐建议只使用大众点评或美团。",
    sourceId: "blog-beforeyougo-gz"
  },

  // EMERGENCY
  {
    id: "emerg-taxi-vs-ambulance",
    pillar: "emergency",
    titleEn: "Taxi to hospital is faster than 120 ambulance for non-spinal cases",
    titleZh: "非脊柱伤的紧急情况，乘出租车可能比 120 救护车更快",
    bodyEn: "120 ambulances aren't equipped to Western paramedic standards and average 20+ min in urban traffic. Long-term expats consistently say: for non-spinal emergencies, take a taxi to the nearest 3A hospital.",
    bodyZh: "120 救护车配置未必达到欧美院前急救标准，在城市交通中平均等待 20 分钟以上。长期在华外籍人士普遍建议：非脊柱伤可直接乘出租车前往最近的三甲医院，通常更快。",
    sourceId: "blog-thechinaguide-medical"
  },
  {
    id: "emerg-cash-deposit",
    pillar: "emergency",
    titleEn: "Public hospital admission needs CNY 5K–20K cash deposit upfront",
    titleZh: "公立医院住院前通常需先交 ¥5K–20K 押金",
    bodyEn: "Hospitals will stabilise you in the ER, then ask for a CNY 5,000–20,000 deposit before any further treatment. Ambulances charge upfront too — about CNY 7 per km plus CNY 80 per hour of waiting. Most travel insurers reimburse you later, so check your insurer's direct-billing hospital list before you fly.",
    bodyZh: "急救稳定之后若需住院，通常须先交 ¥5,000–20,000 押金才继续治疗。救护车费用约 ¥7 / 公里 + ¥80 / 小时等候费也需先付。大多数旅行保险是事后报销，出发前请查询保险公司是否有合作的直付医院。",
    sourceId: "blog-expatden-shhospital"
  },
  {
    id: "emerg-medical-card",
    pillar: "emergency",
    cityScope: ["beijing", "shanghai"],
    titleEn: "Public hospitals: get a Medical Card (医疗卡) before any appointment",
    titleZh: "公立医院：先在挂号处办理 \"医疗卡 / 就诊卡\"",
    bodyEn: "New patients can't walk in directly. Go to the registration desk first — bring your passport and CNY 50, and allow 15–20 minutes. Head straight to the consultation room without doing this and staff will send you back.",
    bodyZh: "新病人不能直接就诊——先到挂号处办理就诊卡：护照 + ¥50，约 15–20 分钟。直接前往诊室是常见错误。",
    sourceId: "blog-expatden-shhospital"
  },
  {
    id: "emerg-intl-cost",
    pillar: "emergency",
    cityScope: ["beijing", "shanghai"],
    titleEn: "International hospital departments cost 6–12× standard rates",
    titleZh: "国际部 / 高端私立费用约为普通公立 6–12 倍",
    bodyEn: "Beijing United Family, PUMCH international wing, and Raffles Shanghai all have English-speaking staff, but outpatient registration starts at CNY 300–600 versus CNY 10–30 at a standard public department. Plan on CNY 2,000–5,000+ per visit if your insurer doesn't direct-bill.",
    bodyZh: "和睦家 / 协和国际部 / 上海莱佛士有英语医生，但仅挂号费就需 ¥300–600，普通公立科室约 ¥10–30。没有直付国际保险时，一次就诊可能达到 ¥2,000–5,000+。",
    sourceId: "blog-internationalinsurance"
  },
  {
    id: "emerg-western-meds",
    pillar: "emergency",
    titleEn: "Most Western prescriptions unavailable — bring your own + 20% extra",
    titleZh: "西药品牌药大陆较难购买——自备并多带 20%",
    bodyEn: "Chinese pharmacies don't stock most Western brand-name medications. Controlled substances (some painkillers, ADHD drugs, anxiety meds) are restricted and may be confiscated at customs without a physician's letter. Bring full supply in original labelled bottles.",
    bodyZh: "国内药店通常不销售多数西药品牌药。管制药（部分止痛、ADHD、焦虑用药）受严控，没有医生证明海关可能没收。请装在原瓶里携带足量药品，并多带 20% 备用。",
    sourceId: "blog-thechinajourney"
  },
  {
    id: "emerg-bj-999",
    pillar: "emergency",
    cityScope: ["beijing"],
    titleEn: "Beijing has 3 emergency numbers — 999 sometimes faster than 120",
    titleZh: "北京有 3 类急救号码——999（红十字）部分情况下比 120 快",
    bodyEn: "Beijing: 120 (public emergency), 999 (Red Cross / private ambulance, faster in some districts), 110 (police). US Embassy medical assistance +86-10-8531-4000. Beijing United 24h ER +86-10-5927-7120. PUMCH 24h ER +86-10-69155288.",
    bodyZh: "北京：120 公立急救、999 红十字 / 民营（部分区可能比 120 快）、110 公安。美国使馆医疗求助 +86-10-8531-4000；北京和睦家 24h 急诊 +86-10-5927-7120；协和 24h 急诊 +86-10-69155288。",
    sourceId: "bj-medical-guide-quickservices"
  }
];

export function pitfallsForPillar(pillar: PillarId, cityId?: CityId): Pitfall[] {
  return pitfalls.filter((p) => {
    if (p.pillar !== pillar) return false;
    if (!p.cityScope) return true;
    if (!cityId) return true;
    return p.cityScope.includes(cityId);
  });
}

export function pitfallSourceIds(pillar?: PillarId, cityId?: CityId): string[] {
  const items = pillar ? pitfallsForPillar(pillar, cityId) : pitfalls;
  return Array.from(new Set(items.map((p) => p.sourceId)));
}
