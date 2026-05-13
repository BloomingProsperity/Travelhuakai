import type { CityId } from "./transport";

export type AttractionTier = "must-visit" | "worth-it";

export type Attraction = {
  id: string;
  cityId: CityId;
  nameEn: string;
  nameZh: string;
  districtEn: string;
  districtZh: string;
  tier: AttractionTier;
  whyEn: string;
  whyZh: string;
  officialUrl: string;
  imageUrl: string;
  imageCredit: string;
};

export const cityAttractions: Attraction[] = [
  // BEIJING
  {
    id: "bj-forbidden-city",
    cityId: "beijing",
    nameEn: "Forbidden City / Palace Museum",
    nameZh: "故宫博物院",
    districtEn: "Dongcheng",
    districtZh: "东城区",
    tier: "must-visit",
    whyEn: "The largest intact imperial palace complex in the world: 180 acres, 980 buildings, 8,728 rooms. 24 emperors lived here across the Ming and Qing dynasties (1420–1912). 7-day advance booking is mandatory; 40,000-person daily cap sells out within minutes for peak weekends.",
    whyZh: "世界上最大、最完整的宫殿建筑群——180 英亩、980 栋建筑、8,728 间房，明清两代 24 位皇帝在此居住（1420–1912）。必须提前 7 天预约，每日限 4 万人，旺季周末常在数分钟内售罄。",
    officialUrl: "https://intl.dpm.org.cn/visit.html?l=en",
    imageUrl: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Ling Tang on Unsplash"
  },
  {
    id: "bj-mutianyu",
    cityId: "beijing",
    nameEn: "Great Wall at Mutianyu",
    nameZh: "慕田峪长城",
    districtEn: "Huairou",
    districtZh: "怀柔区",
    tier: "must-visit",
    whyEn: "The Great Wall section most recommended by experienced foreign travellers: well-restored Ming masonry, 23 watchtowers across a 2.25 km open stretch, cable car or chair lift up plus a toboggan descent. The official English website accepts international cards directly. 1 million foreign visitors in 2025.",
    whyZh: "许多外籍游客首选的长城段：明代修缮完整、23 座敌台、2.25 公里开放段，缆车 / 索道上山，可选择滑道下山。官方英文网站可直接使用外卡支付。2025 年外籍游客 100 万。",
    officialUrl: "https://en.mutianyugreatwall.com",
    imageUrl: "https://images.unsplash.com/photo-1509624780899-f812439647e4?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Vincent Guth on Unsplash"
  },
  {
    id: "bj-summer-palace",
    cityId: "beijing",
    nameEn: "Summer Palace",
    nameZh: "颐和园",
    districtEn: "Haidian",
    districtZh: "海淀区",
    tier: "must-visit",
    whyEn: "The best-preserved imperial garden in China and a UNESCO World Heritage Site. 220-hectare Kunming Lake with Longevity Hill behind it, the 728 m painted Long Corridor, and a theatrical landscape designed for Qing imperial leisure. Audio guides in 19 languages.",
    whyZh: "中国保存最完好的皇家园林，UNESCO 世界遗产。220 公顷昆明湖背靠万寿山，728 米彩绘长廊，清代皇室避暑园林。19 语种语音导览。",
    officialUrl: "https://english.beijing.gov.cn/specials/parktours/guidevisitors/summerpalace/",
    imageUrl: "https://images.unsplash.com/photo-1619825479213-62e158b5a79d?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Nakaharu Line on Unsplash"
  },
  {
    id: "bj-temple-of-heaven",
    cityId: "beijing",
    nameEn: "Temple of Heaven",
    nameZh: "天坛",
    districtEn: "Dongcheng",
    districtZh: "东城区",
    tier: "must-visit",
    whyEn: "The largest extant sacrificial altar complex in China (built 1406–1420), used by every Ming and Qing emperor to pray for harvest. The triple-eaved circular blue-roofed Hall of Prayer for Good Harvests is one of the most architecturally perfect timber structures in Chinese history. The park grounds double as a morning tai chi venue.",
    whyZh: "中国现存最大的祭祀建筑群（1406–1420 建），明清每位皇帝祈谷之处。三檐圆形蓝顶的祈年殿是中国木构建筑的巅峰之一。清晨园区是市民练太极的场所。",
    officialUrl: "https://english.beijing.gov.cn/specials/parktours/guidevisitors/templeofheaven/",
    imageUrl: "https://images.unsplash.com/photo-1569165755139-296fac054979?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "ZQ Lee on Unsplash"
  },
  {
    id: "bj-lama-temple",
    cityId: "beijing",
    nameEn: "Lama Temple (Yonghe Gong)",
    nameZh: "雍和宫",
    districtEn: "Dongcheng",
    districtZh: "东城区",
    tier: "must-visit",
    whyEn: "The most important Tibetan Buddhist temple in Beijing and one of the most significant Gelug monasteries outside Tibet. Originally an imperial princely mansion (1694), converted to a lamasery in 1744. The Wanfu Pavilion houses an 18 m Maitreya Buddha carved from a single sandalwood tree — the tallest sandalwood statue in the world.",
    whyZh: "北京最重要的藏传佛教寺院，也是西藏以外最重要的格鲁派寺院之一。原为皇子府邸（1694），1744 年改为喇嘛庙。万福阁内 18 米高的弥勒佛由单根白檀木雕成，是世界最高的檀香木佛像。",
    officialUrl: "https://english.beijing.gov.cn/specials/ticketing/",
    imageUrl: "https://images.unsplash.com/photo-1590301729964-23833732ee04?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Peter Zhou on Unsplash"
  },
  {
    id: "bj-tiananmen",
    cityId: "beijing",
    nameEn: "Tiananmen Square",
    nameZh: "天安门广场",
    districtEn: "Dongcheng",
    districtZh: "东城区",
    tier: "must-visit",
    whyEn: "The world's third-largest public square (440,000 sq m) and the symbolic centre of the People's Republic. Daily flag-raising ceremony at sunrise, flag-lowering at sunset. Free entry but mandatory advance reservation (1–7 days ahead) — walk-up visitors are turned back at the security checkpoint.",
    whyZh: "世界第三大广场（44 万平方米），中华人民共和国象征性中心。每日日出升旗、日落降旗。免费入场但必须提前 1–7 天线上预约，未预约会被安检拦下。",
    officialUrl: "https://english.beijing.gov.cn/travellinginbeijing/",
    imageUrl: "https://images.unsplash.com/photo-1604844252839-f9c364adacdd?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Zixi Zhou on Unsplash"
  },

  // SHANGHAI
  {
    id: "sh-bund",
    cityId: "shanghai",
    nameEn: "The Bund",
    nameZh: "外滩",
    districtEn: "Huangpu",
    districtZh: "黄浦区",
    tier: "must-visit",
    whyEn: "Shanghai's essential postcard view: a 1.5 km Huangpu River promenade where early-20th-century banks and trading houses face the Pudong skyline. The simplest place to read both Shanghai's treaty-port past and its vertical-finance present in one frame. Sunrise for low crowds; evening for the skyline lights.",
    whyZh: "上海的代表景观：1.5 公里黄浦江岸步道，20 世纪初银行 / 商行建筑群正对浦东天际线。这里是理解上海租界历史与现代金融景观的直观地点。日出时人流较少，夜晚适合观赏灯光秀。",
    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231205/584672cc6d044eabb5f7f6fc9049a19f.html",
    imageUrl: "https://images.unsplash.com/photo-1506158669146-619067262a00?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Hanny Naibaho on Unsplash"
  },
  {
    id: "sh-yu-garden",
    cityId: "shanghai",
    nameEn: "Yu Garden",
    nameZh: "豫园",
    districtEn: "Huangpu",
    districtZh: "黄浦区",
    tier: "must-visit",
    whyEn: "Shanghai's best central classical Chinese garden: Ming-dynasty rockeries, pavilions, ponds, zigzag bridges, the City God Temple area, and the surrounding old-city bazaar streets all compressed into a walkable historic quarter. The clearest contrast to the Bund's European riverfront.",
    whyZh: "上海市中心代表性的中式园林：明代假山、亭台、池塘、九曲桥，加上城隍庙区与老城厢市集。可与外滩欧式江岸形成鲜明对照。",
    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231205/dc76893b94c248d195eaf7f4d44c6597.html",
    imageUrl: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Li Yang on Unsplash"
  },
  {
    id: "sh-shanghai-tower",
    cityId: "shanghai",
    nameEn: "Shanghai Tower",
    nameZh: "上海中心大厦",
    districtEn: "Pudong",
    districtZh: "浦东新区",
    tier: "must-visit",
    whyEn: "China's highest observation deck and the clearest \"future Shanghai\" attraction. The 118th-floor Top of Shanghai Observatory gives a 360° view over Lujiazui, the Bund, Suzhou Creek, and the city's full scale. Heavily affected by haze, rain, and low cloud — book close to the visit date.",
    whyZh: "中国最高观景台，也是直观感受\"未来上海\"的景点。118 层 \"上海之巅\" 360° 俯瞰陆家嘴、外滩、苏州河和全城规模。受雾霾、雨、低云影响明显，建议临近日期再订票。",
    officialUrl: "https://www.shanghaitower.com/",
    imageUrl: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Denys Nevozhai on Unsplash"
  },
  {
    id: "sh-lujiazui",
    cityId: "shanghai",
    nameEn: "Lujiazui Skyline & Oriental Pearl Tower",
    nameZh: "陆家嘴 / 东方明珠",
    districtEn: "Pudong",
    districtZh: "浦东新区",
    tier: "must-visit",
    whyEn: "The compact skyline cluster opposite the Bund: Oriental Pearl Tower, Shanghai Tower, World Financial Center, Jin Mao, IFC, riverside promenades. Iconic photos, sky decks, malls, and easy riverfront contrast with the Bund. Outdoor district free; sky-deck tickets via official ticketing.",
    whyZh: "外滩对面的紧凑天际线：东方明珠、上海中心、环球金融中心、金茂、IFC、滨江漫道。适合标志性合影、登顶观景和商场休憩，也可与外滩形成直接对照。室外区免费，登顶通过官方票务。",
    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231205/19a5f5184eca45728fd57a4d4c8efc61.html",
    imageUrl: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Edward He on Unsplash"
  },
  {
    id: "sh-wukang",
    cityId: "shanghai",
    nameEn: "Wukang Road & Wukang Mansion",
    nameZh: "武康路 / 武康大楼",
    districtEn: "Xuhui",
    districtZh: "徐汇区",
    tier: "must-visit",
    whyEn: "The most visitor-friendly slice of the former French Concession: plane-tree streets, garden villas, writer residences, cafes, Ferguson Lane, and the flatiron Wukang Mansion photo spot. Better as a slow walk than a single attraction. Police barriers control the crowds at the photo intersection on weekends.",
    whyZh: "原法租界最适合游客的一段：梧桐街道、花园洋房、名人故居、咖啡馆、费尔根巷、三角形的武康大楼合影点。更适合从容步行游览，不宜只为拍照打卡。周末交警会在拍照路口分流。",
    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231218/596192f5f59048bbbc3fa54d92304e93.html",
    imageUrl: "https://images.unsplash.com/photo-1574504500022-de9a6309a501?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Katherine Gu on Unsplash"
  },
  {
    id: "sh-museum",
    cityId: "shanghai",
    nameEn: "Shanghai Museum (People's Square)",
    nameZh: "上海博物馆 人民广场馆",
    districtEn: "Huangpu",
    districtZh: "黄浦区",
    tier: "must-visit",
    whyEn: "The strongest single stop for ancient Chinese art in central Shanghai: bronzes, ceramics, jade, calligraphy, painting, seals, furniture. Since 2025-09 individual visitors no longer need reservations for the People's Square site during normal periods — entry with passport. Closed Mondays.",
    whyZh: "市中心集中展示中国古代艺术的重要场馆：青铜、陶瓷、玉器、书法、绘画、印章、家具。2025-09 起人民广场馆普通散客不需预约，凭护照入馆。周一闭馆。",
    officialUrl: "https://english.shanghai.gov.cn/en-MuseumsGalleries/20231218/01fdd3f62d0c4877bc289ec0b1de6afa.html",
    imageUrl: "https://images.unsplash.com/photo-1508742066636-3b9fb738ee0e?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "zhang kaiyv on Unsplash"
  },

  // GUANGZHOU
  {
    id: "gz-canton-tower",
    cityId: "guangzhou",
    nameEn: "Canton Tower",
    nameZh: "广州塔",
    districtEn: "Haizhu",
    districtZh: "海珠区",
    tier: "must-visit",
    whyEn: "At 600 m, the tallest TV/observation tower in China and third tallest in the world. The twisted-waist design is one of Guangzhou's most recognisable silhouettes. Indoor and outdoor observation decks; the glass sky walk and bubble tram revolving outside the structure offer extra thrills. Best at dusk for the daylight-to-LED transition.",
    whyZh: "600 米，中国最高电视塔，世界第三。\"小蛮腰\" 扭转造型是广州的标志性轮廓。室内外观景台、户外玻璃栈道和外圈 \"摩天轮\" 太空舱各具特色。黄昏最适合观赏从白天到夜灯的过渡。",
    officialUrl: "https://www.cantontower.com/en/",
    imageUrl: "https://images.unsplash.com/photo-1563090162-6b4c2a20d658?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Lycheeart on Unsplash"
  },
  {
    id: "gz-shamian",
    cityId: "guangzhou",
    nameEn: "Shamian Island",
    nameZh: "沙面岛",
    districtEn: "Liwan",
    districtZh: "荔湾区",
    tier: "must-visit",
    whyEn: "A 0.3 km² sand-bar in the Pearl River that served as the British and French concession from 1859 to 1943. Over 150 European-style buildings — consulates, banks, churches, trading-house villas — shaded by 200-year-old banyan trees. No cars, no admission, no hawkers inside. Often described as the calmest 90 minutes in Guangzhou.",
    whyZh: "珠江上 0.3 平方公里的沙洲，1859–1943 是英法租界。150+ 栋欧式建筑（领事馆、银行、教堂、洋行别墅）掩映在 200 岁榕树下。无车、无门票，少有叫卖。常被形容为广州最安静的 90 分钟。",
    officialUrl: "https://www.gz.gov.cn/guangzhouinternational/",
    imageUrl: "https://images.unsplash.com/photo-1636259584602-5a3c9c0d05ff?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "choi wingkin on Unsplash"
  },
  {
    id: "gz-chen-clan",
    cityId: "guangzhou",
    nameEn: "Chen Clan Ancestral Hall",
    nameZh: "陈家祠",
    districtEn: "Liwan",
    districtZh: "荔湾区",
    tier: "must-visit",
    whyEn: "Step inside and almost every surface is decorated — polychrome ceramic figurines crowd the rooflines, dense wood carvings line the screen walls, stone reliefs frame the doorways, brick reliefs cover the gables. The compound was put up in the 1890s through pooled contributions from 72 Chen-surname clans, who used it as both a Confucian study hall for exam candidates and a shared ancestral temple. The decoration density is hard to match anywhere else in Lingnan.",
    whyZh: "走进去会发现几乎每一面都做了装饰——屋脊上挤满彩瓷塑，影壁布满细密木雕，门洞外是石雕，山墙外做砖雕。建筑建于 1890 年代，由 72 个陈姓宗族出资共建，既作为参加科举考试的族人住所兼学馆，也是共同的祠堂。这种装饰密度在岭南其他建筑里很难再见。",
    officialUrl: "https://www.gz.gov.cn/guangzhouinternational/visitors/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Chan_Clan_Ancestral_Hall.JPG",
    imageCredit: "Lai.jack on Wikimedia, CC BY-SA 3.0"
  },
  {
    id: "gz-yuexiu-park",
    cityId: "guangzhou",
    nameEn: "Yuexiu Park & Five Rams Statue",
    nameZh: "越秀公园 / 五羊雕像",
    districtEn: "Yuexiu",
    districtZh: "越秀区",
    tier: "must-visit",
    whyEn: "The Five Rams Statue (1959, 11 m, 130+ pieces of granite) is Guangzhou's civic symbol, rooted in the legend of five celestial rams who brought rice seeds to bless the city. Yuexiu Park (860,000 sq m) is the city's largest urban park and contains Zhenhai Tower (Ming-dynasty watchtower, now Guangzhou Museum) and remnants of the ancient city wall. Free entry; packed with locals doing tai chi from 6 AM.",
    whyZh: "五羊雕像（1959，11 米，130+ 块花岗岩拼成）是广州市徽——五仙人骑五羊降下稻穗赐福此城。越秀公园（86 万平方米）是市内最大公园，含明代镇海楼（现广州博物馆）和古城墙遗迹。免费，清晨 6 点起常见市民练太极。",
    officialUrl: "http://www.gz.gov.cn/guangzhouinternational/visitors/whattosee/",
    imageUrl: "https://images.unsplash.com/photo-1630831241310-3984f1b3d711?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Wally Yang on Unsplash"
  },
  {
    id: "gz-pearl-river",
    cityId: "guangzhou",
    nameEn: "Pearl River Night Cruise",
    nameZh: "珠江夜游",
    districtEn: "Haizhu / Tianhe",
    districtZh: "海珠 / 天河",
    tier: "must-visit",
    whyEn: "The illuminated-skyline cruise is Guangzhou's signature evening activity. The 60–90 min route passes below Canton Tower, along Zhujiang New Town's glittering skyline, past the colonial Shamian shores, and through bridges lit in colour. The 8 PM departure catches the full LED show on Canton Tower.",
    whyZh: "广州的代表性夜游项目。60–90 分钟航线穿过广州塔下，沿珠江新城天际线，经过沙面租界岸和彩灯桥。20:00 班次可观赏广州塔完整 LED 秀。",
    officialUrl: "https://www.cantontower.com/en/pearlriver/otherships/",
    imageUrl: "https://images.unsplash.com/photo-1563090162-6b4c2a20d658?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Lycheeart on Unsplash"
  },
  {
    id: "gz-baiyun-mountain",
    cityId: "guangzhou",
    nameEn: "Baiyun Mountain",
    nameZh: "白云山",
    districtEn: "Baiyun",
    districtZh: "白云区",
    tier: "worth-it",
    whyEn: "A 5A national scenic area 12 km from the centre. The Moxing Ridge peak (382 m) gives panoramic views over Greater Guangzhou on clear days. 21 sq km park with cable car, Mingchun Valley aviary (5,000+ birds), Yunxi Botanical Garden, and the Sculpture Park. 20 million visitors per year. Popular for early-morning Cantonese exercise culture.",
    whyZh: "市中心 12 公里外的国家 5A 风景区。摩星岭（382 米）天气晴好时可俯瞰广州都市景观。21 平方公里园区有缆车、鸣春谷鸟类观赏区（5,000+ 鸟）、云溪植物园、雕塑公园。年接待游客约 2,000 万人。清晨市民晨练氛围浓厚。",
    officialUrl: "http://www.baiyunshan.com.cn",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/42/Guangzhou_Opera_House_and_Canton_Tower.JPG",
    imageCredit: "Ecow, CC0 Public Domain (Guangzhou skyline reference)"
  },

  // SHENZHEN
  {
    id: "sz-window-of-the-world",
    cityId: "shenzhen",
    nameEn: "Window of the World",
    nameZh: "世界之窗",
    districtEn: "Nanshan",
    districtZh: "南山区",
    tier: "must-visit",
    whyEn: "Shenzhen's classic theme-park shorthand: global landmarks rebuilt at miniature or reduced scale, evening shows, and a distinctly Shenzhen \"world showcase\" atmosphere. Useful for families, Hong Kong day-trippers, and visitors who want an unmistakably Shenzhen attraction rather than another mall. 09:00–22:30 daily.",
    whyZh: "深圳的标志性主题公园：全球地标按比例缩小重建，并配有夜场表演。适合亲子游客、香港一日游旅客，以及希望体验深圳特色而非单纯购物的人。每日 09:00–22:30。",
    officialUrl: "https://www.sz.gov.cn/en_szgov/news/infocus/SZCitywalk/Explore/Attractions/content/post_11857074.html",
    imageUrl: "https://images.unsplash.com/photo-1767628366824-be007ab6e7cf?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Luc L on Unsplash"
  },
  {
    id: "sz-octloft",
    cityId: "shenzhen",
    nameEn: "OCT-LOFT Creative Culture Park",
    nameZh: "华侨城创意文化园",
    districtEn: "Nanshan",
    districtZh: "南山区",
    tier: "must-visit",
    whyEn: "Shenzhen's easiest creative-neighbourhood stop: converted industrial buildings, cafes, design shops, small galleries, bookstores, and periodic markets. Pairs well with the OCT theme-park cluster and works as a lower-pressure alternative to paid theme parks. Public district, free entry; shops Tuesday–Sunday.",
    whyZh: "深圳较易游览的创意社区：旧工业建筑改造，咖啡馆、设计店、小画廊、书店、定期集市。可与 OCT 主题公园一并安排，也是付费主题公园之外的另一选择。开放街区免费，店家周二至周日营业。",
    officialUrl: "https://www.octloft.cn/en/",
    imageUrl: "https://images.unsplash.com/photo-1728241733556-65b2afb65120?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Oskar Kadaksoo on Unsplash"
  },
  {
    id: "sz-sea-world",
    cityId: "shenzhen",
    nameEn: "Sea World & Culture and Arts Center",
    nameZh: "蛇口海上世界 / 海上世界文化艺术中心",
    districtEn: "Nanshan / Shekou",
    districtZh: "南山 蛇口",
    tier: "must-visit",
    whyEn: "Shekou Sea World is the most foreigner-friendly dining and nightlife node in Shenzhen: waterfront plaza, restaurants, bars, the Minghua ship landmark, and the Sea World Culture & Arts Center (Design Society) for design exhibitions. A strong first-night choice for visitors arriving from Hong Kong or by ferry.",
    whyZh: "蛇口海上世界是深圳对外籍游客较友好的餐饮夜生活区：海滨广场、餐厅、酒吧、明华轮地标、海上世界文化艺术中心（设计互联）的设计展。适合从香港或乘船抵达后的第一晚安排。",
    officialUrl: "https://www.eyeshenzhen.com/content/2023-05/12/content_30192680.htm",
    imageUrl: "https://images.unsplash.com/photo-1634647626758-ad751a260e9f?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "ダモ リ on Unsplash"
  },
  {
    id: "sz-dameisha",
    cityId: "shenzhen",
    nameEn: "Dameisha & Xiaomeisha Beaches",
    nameZh: "大梅沙 / 小梅沙",
    districtEn: "Yantian",
    districtZh: "盐田区",
    tier: "worth-it",
    whyEn: "The easiest named beaches from central Shenzhen, now reachable comfortably by Metro Line 8. Dameisha is the classic public beach; Xiaomeisha has been redeveloped and is more resort-like. Best for \"I want the coast and seafood without a full Dapeng day\". Avoid peak midday in summer.",
    whyZh: "从市中心较易抵达的知名海滩，地铁 8 号线直达。大梅沙是经典公众海滩，小梅沙改造后更具度假氛围。适合想看海、吃海鲜但不计划安排大鹏全天行程的游客。夏天避开正午。",
    officialUrl: "https://www.sz.gov.cn/en_szgov/news/infocus/park/csgy/content/post_10986843.html",
    imageUrl: "https://images.unsplash.com/photo-1759970729294-99c7eebeaf54?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "T Y on Unsplash"
  },
  {
    id: "sz-lianhuashan",
    cityId: "shenzhen",
    nameEn: "Lianhuashan Park",
    nameZh: "莲花山公园",
    districtEn: "Futian",
    districtZh: "福田区",
    tier: "worth-it",
    whyEn: "The central Shenzhen orientation hill: free, easy by metro, good city views, and famous for the Deng Xiaoping statue overlooking the CBD. One of the cleanest ways to read Shenzhen's reform-era identity to a first-time visitor.",
    whyZh: "市中心的城市观景山：免费、地铁可达、城市景观开阔，邓小平雕像俯瞰 CBD，是深圳地标。这里有助于初访游客理解深圳与\"改革开放\"的关系。",
    officialUrl: "https://www.sz.gov.cn/en_szgov/news/infocus/park/index.html",
    imageUrl: "https://images.unsplash.com/photo-1759970729216-49c024cd89fb?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "T Y on Unsplash"
  },
  {
    id: "sz-dapeng",
    cityId: "shenzhen",
    nameEn: "Dapeng Fortress & Peninsula",
    nameZh: "大鹏所城 / 大鹏半岛",
    districtEn: "Dapeng New District",
    districtZh: "大鹏新区",
    tier: "must-visit",
    whyEn: "The closest thing Shenzhen has to a historic coastal village plus a beach/hiking day. The Ming/Qing-era fortress gives military-history texture; nearby Jiaochangwei, Yangmeikeng, Xichong/Dongchong and coastal routes make it a full-day nature trip. A private driver or tour reduces friction for foreign visitors.",
    whyZh: "深圳最接近历史海边村庄、海滩与徒步组合的目的地。明清古城呈现军事历史层次；附近较场尾、杨梅坑、西涌 / 东涌、海岸线步道适合安排一整天。外国游客可通过包车或随团降低交通难度。",
    officialUrl: "https://www.sz.gov.cn/en_szgov/news/infocus/SZCitywalk/Explore/Districts/DapengNewDistrict/content/mpost_11892734.html",
    imageUrl: "https://images.unsplash.com/photo-1636821771168-d13e578a88ba?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "ダモ リ on Unsplash"
  }
];

export function attractionsByCity(cityId: CityId): Attraction[] {
  return cityAttractions.filter((a) => a.cityId === cityId);
}
