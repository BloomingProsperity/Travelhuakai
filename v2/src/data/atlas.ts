export type CityRecord = {
  id: string;
  name: string;
  zh: string;
  province: string;
  museum: string;
  museumZh: string;
  museumRole: string;
  museumRoleZh: string;
  history: string;
  historyZh: string;
  sites: string[];
  sitesZh: string[];
  baseViews: number;
  notes: number;
  verified: string;
  access: "High" | "Medium" | "Low";
  status: "Official facts pending" | "Needs visitor notes" | "Needs review";
};

export type ProvinceRecord = {
  id: string;
  name: string;
  zh: string;
  type: "Municipality" | "Province";
  color: string;
  cities: CityRecord[];
};

export const atlasData: ProvinceRecord[] = [
  {
    id: "beijing",
    name: "Beijing",
    zh: "北京",
    type: "Municipality",
    color: "red",
    cities: [
      {
        id: "beijing-city",
        name: "Beijing",
        zh: "北京市",
        province: "Beijing",
        museum: "Capital Museum / Beijing Grand Canal Museum",
        museumZh: "首都博物馆 / 北京大运河博物馆",
        museumRole:
          "The first stop for understanding Beijing as an imperial capital, political center, and living city shaped by ritual, walls, waterways, and modern institutions.",
        museumRoleZh:
          "理解北京作为帝都、政治中心和生活城市的第一入口，可看到礼制、城墙、水系和现代机构如何共同塑造这座城市。",
        history:
          "Beijing is one of China's most important historical capitals, with layers from Yuan Dadu, Ming and Qing imperial planning, Republican-era transitions, and contemporary national institutions.",
        historyZh: "北京是中国最重要的历史都城之一，层次包括元大都、明清都城规划、近现代转型以及当代国家机构。",
        sites: ["Forbidden City", "Temple of Heaven", "Beijing Central Axis", "Beijing City Wall remains"],
        sitesZh: ["故宫", "天坛", "北京中轴线", "北京城墙遗存"],
        baseViews: 18642,
        notes: 42,
        verified: "2026-05",
        access: "Medium",
        status: "Official facts pending"
      }
    ]
  },
  {
    id: "shanghai",
    name: "Shanghai",
    zh: "上海",
    type: "Municipality",
    color: "blue",
    cities: [
      {
        id: "shanghai-city",
        name: "Shanghai",
        zh: "上海市",
        province: "Shanghai",
        museum: "Shanghai Museum / Shanghai History Museum",
        museumZh: "上海博物馆 / 上海市历史博物馆",
        museumRole:
          "A practical entry point for understanding Jiangnan culture, port-city growth, modern urban life, and Shanghai's role in global exchange.",
        museumRoleZh: "理解江南文化、港口城市成长、近现代都市生活以及上海参与全球交流的实用入口。",
        history:
          "Shanghai grew from a Jiangnan county and port into a treaty-port metropolis, then a central city of modern industry, finance, publishing, cinema, and urban culture.",
        historyZh: "上海从江南县城和港口发展为通商口岸都市，随后成为现代工业、金融、出版、电影和城市文化的重要中心。",
        sites: ["Shanghai History Museum", "Yu Garden area", "The Bund", "Former French Concession streets"],
        sitesZh: ["上海市历史博物馆", "豫园片区", "外滩", "原法租界街区"],
        baseViews: 14380,
        notes: 37,
        verified: "2026-05",
        access: "High",
        status: "Needs visitor notes"
      }
    ]
  },
  {
    id: "shaanxi",
    name: "Shaanxi",
    zh: "陕西",
    type: "Province",
    color: "gold",
    cities: [
      {
        id: "xian",
        name: "Xi'an",
        zh: "西安",
        province: "Shaanxi",
        museum: "Shaanxi History Museum / Xi'an Museum",
        museumZh: "陕西历史博物馆 / 西安博物院",
        museumRole:
          "The clearest starting point for Zhou, Qin, Han, Tang, Chang'an urban history, Silk Road exchange, and imperial material culture.",
        museumRoleZh: "理解周秦汉唐、长安城市史、丝绸之路交流和帝国物质文化的清晰入口。",
        history:
          "Xi'an sits near the core of ancient Chang'an, one of the great capitals of Chinese history and a key anchor for understanding early imperial statecraft and Silk Road exchange.",
        historyZh: "西安位于古代长安核心区域附近，是中国历史上重要都城之一，也是理解早期帝国制度和丝绸之路交流的关键城市。",
        sites: ["Terracotta Army", "Xi'an City Wall", "Big Wild Goose Pagoda", "Daming Palace site"],
        sitesZh: ["秦始皇兵马俑", "西安城墙", "大雁塔", "大明宫遗址"],
        baseViews: 16890,
        notes: 51,
        verified: "2026-05",
        access: "Medium",
        status: "Official facts pending"
      },
      {
        id: "xianyang",
        name: "Xianyang",
        zh: "咸阳",
        province: "Shaanxi",
        museum: "Xianyang Museum",
        museumZh: "咸阳博物院",
        museumRole: "Useful for understanding Qin imperial foundations and the political geography surrounding the ancient capital region.",
        museumRoleZh: "适合理解秦帝国基础，以及古都区域周边的政治地理。",
        history:
          "Xianyang is closely associated with the Qin state and Qin dynasty, making it a strong context city for understanding the rise of China's first imperial order.",
        historyZh: "咸阳与秦国、秦朝关系密切，是理解中国第一个大一统帝国兴起的重要背景城市。",
        sites: ["Han Yang Ling Museum", "Qianling area", "Qin and Han heritage sites"],
        sitesZh: ["汉阳陵博物院", "乾陵片区", "秦汉遗址"],
        baseViews: 4280,
        notes: 9,
        verified: "2026-04",
        access: "Low",
        status: "Needs review"
      },
      {
        id: "yanan",
        name: "Yan'an",
        zh: "延安",
        province: "Shaanxi",
        museum: "Yan'an Revolutionary Memorial Hall",
        museumZh: "延安革命纪念馆",
        museumRole: "The starting point for modern revolutionary history and the political memory of twentieth-century China.",
        museumRoleZh: "理解中国近现代革命史和二十世纪政治记忆的起点。",
        history:
          "Yan'an is central to understanding the Chinese revolutionary period and the narratives, institutions, and landscapes associated with the Communist base area.",
        historyZh: "延安是理解中国革命时期、根据地叙事、制度建设和相关历史景观的核心城市。",
        sites: ["Yangjialing", "Zaoyuan", "Pagoda Hill"],
        sitesZh: ["杨家岭", "枣园", "宝塔山"],
        baseViews: 3120,
        notes: 7,
        verified: "2026-04",
        access: "Low",
        status: "Needs visitor notes"
      }
    ]
  },
  {
    id: "henan",
    name: "Henan",
    zh: "河南",
    type: "Province",
    color: "jade",
    cities: [
      {
        id: "luoyang",
        name: "Luoyang",
        zh: "洛阳",
        province: "Henan",
        museum: "Luoyang Museum / Erlitou Site Museum",
        museumZh: "洛阳博物馆 / 二里头夏都遗址博物馆",
        museumRole: "A strong entry point for the Central Plains, ancient capitals, ritual bronzes, early states, and Buddhist art.",
        museumRoleZh: "理解中原、古都、礼器青铜、早期国家和佛教艺术的重要入口。",
        history:
          "Luoyang is one of China's major ancient capitals, connected with the Xia-related Erlitou site, Eastern Zhou, Han-Wei urban history, Sui-Tang Luoyang, and Longmen Buddhist art.",
        historyZh: "洛阳是中国重要古都之一，关联二里头、东周、汉魏洛阳城、隋唐洛阳城和龙门佛教艺术。",
        sites: ["Longmen Grottoes", "White Horse Temple", "Sui-Tang Luoyang City site", "Erlitou Site Museum"],
        sitesZh: ["龙门石窟", "白马寺", "隋唐洛阳城遗址", "二里头夏都遗址博物馆"],
        baseViews: 9240,
        notes: 28,
        verified: "2026-05",
        access: "Medium",
        status: "Official facts pending"
      },
      {
        id: "kaifeng",
        name: "Kaifeng",
        zh: "开封",
        province: "Henan",
        museum: "Kaifeng Museum",
        museumZh: "开封博物馆",
        museumRole: "Best first stop for Northern Song urban history, river management, trade, and capital culture.",
        museumRoleZh: "理解北宋城市史、河流治理、商业贸易和都城文化的第一站。",
        history:
          "Kaifeng is strongly associated with the Northern Song capital Bianjing, a city of commerce, administration, literature, and dense urban life.",
        historyZh: "开封与北宋都城汴京紧密相关，是商业、行政、文学和繁华城市生活的重要代表。",
        sites: ["Dragon Pavilion area", "Iron Pagoda", "Daxiangguo Temple", "Ancient city remains"],
        sitesZh: ["龙亭片区", "铁塔", "大相国寺", "古城遗存"],
        baseViews: 6110,
        notes: 18,
        verified: "2026-04",
        access: "Low",
        status: "Needs review"
      },
      {
        id: "anyang",
        name: "Anyang",
        zh: "安阳",
        province: "Henan",
        museum: "Yinxu Museum",
        museumZh: "殷墟博物馆",
        museumRole: "The direct entry point for oracle bones, Shang royal archaeology, bronze culture, and early Chinese writing.",
        museumRoleZh: "理解甲骨文、商王朝考古、青铜文化和早期汉字的直接入口。",
        history:
          "Anyang is essential for understanding the late Shang capital at Yinxu, oracle bone inscriptions, early state ritual, and archaeological evidence for ancient China.",
        historyZh: "安阳对于理解殷墟晚商都城、甲骨刻辞、早期国家礼制和中国古代考古证据非常关键。",
        sites: ["Yinxu", "National Museum of Chinese Writing", "Fu Hao Tomb area"],
        sitesZh: ["殷墟", "中国文字博物馆", "妇好墓片区"],
        baseViews: 5480,
        notes: 15,
        verified: "2026-04",
        access: "Medium",
        status: "Needs visitor notes"
      }
    ]
  },
  {
    id: "jiangsu",
    name: "Jiangsu",
    zh: "江苏",
    type: "Province",
    color: "blue",
    cities: [
      {
        id: "nanjing",
        name: "Nanjing",
        zh: "南京",
        province: "Jiangsu",
        museum: "Nanjing Museum / Six Dynasties Museum",
        museumZh: "南京博物院 / 六朝博物馆",
        museumRole: "The first stop for Six Dynasties culture, Ming capital history, Republican-era history, and Jiangnan material culture.",
        museumRoleZh: "理解六朝文化、明初都城、民国历史和江南物质文化的第一入口。",
        history:
          "Nanjing has served as a capital across several periods and is key to understanding southern dynastic culture, Ming statecraft, and modern Chinese political history.",
        historyZh: "南京在多个历史时期曾为都城，是理解南朝文化、明代国家建设和中国近现代政治史的重要城市。",
        sites: ["Ming Xiaoling Mausoleum", "Nanjing City Wall", "Presidential Palace", "Confucius Temple area"],
        sitesZh: ["明孝陵", "南京城墙", "总统府", "夫子庙片区"],
        baseViews: 12110,
        notes: 36,
        verified: "2026-05",
        access: "High",
        status: "Official facts pending"
      },
      {
        id: "suzhou",
        name: "Suzhou",
        zh: "苏州",
        province: "Jiangsu",
        museum: "Suzhou Museum",
        museumZh: "苏州博物馆",
        museumRole: "A concise entry into Wu culture, literati gardens, canal trade, silk, painting, and urban refinement.",
        museumRoleZh: "进入吴文化、文人园林、运河贸易、丝绸、绘画和城市审美的简洁入口。",
        history:
          "Suzhou is deeply tied to Jiangnan culture, classical gardens, canal networks, silk production, and elite urban life from the Song through Ming-Qing periods.",
        historyZh: "苏州与江南文化、古典园林、运河网络、丝绸生产，以及宋至明清以来的城市生活密切相关。",
        sites: ["Humble Administrator's Garden", "Pingjiang Road", "Suzhou section of the Grand Canal", "Tiger Hill"],
        sitesZh: ["拙政园", "平江路", "大运河苏州段", "虎丘"],
        baseViews: 10740,
        notes: 33,
        verified: "2026-05",
        access: "High",
        status: "Needs visitor notes"
      },
      {
        id: "yangzhou",
        name: "Yangzhou",
        zh: "扬州",
        province: "Jiangsu",
        museum: "Yangzhou Museum / China Grand Canal Museum",
        museumZh: "扬州博物馆 / 中国大运河博物馆",
        museumRole: "A strong starting point for Grand Canal culture, salt merchants, gardens, and Qing-era urban prosperity.",
        museumRoleZh: "理解大运河文化、盐商、园林和清代城市繁荣的重要入口。",
        history:
          "Yangzhou is central to Grand Canal history, salt commerce, literary culture, gardens, and the movement of goods and people between north and south China.",
        historyZh: "扬州是理解大运河、盐业商业、文学文化、园林，以及南北物资与人员流动的重要城市。",
        sites: ["Slender West Lake", "Dongguan Street", "Ge Garden", "Grand Canal sites"],
        sitesZh: ["瘦西湖", "东关街", "个园", "大运河遗产点"],
        baseViews: 4660,
        notes: 12,
        verified: "2026-04",
        access: "Medium",
        status: "Needs review"
      }
    ]
  },
  {
    id: "sichuan",
    name: "Sichuan",
    zh: "四川",
    type: "Province",
    color: "jade",
    cities: [
      {
        id: "chengdu",
        name: "Chengdu",
        zh: "成都",
        province: "Sichuan",
        museum: "Chengdu Museum / Jinsha Site Museum",
        museumZh: "成都博物馆 / 金沙遗址博物馆",
        museumRole:
          "The first stop for ancient Shu culture, basin geography, urban life, local crafts, and the relationship between Chengdu and Sichuan's wider cultural landscape.",
        museumRoleZh: "理解古蜀文化、盆地地理、城市生活、地方工艺，以及成都与四川整体文化景观关系的第一入口。",
        history:
          "Chengdu is a long-lived urban center in the Sichuan Basin, associated with ancient Shu civilization, Qin-Han integration, Shu Han memory, commerce, and everyday urban culture.",
        historyZh: "成都是四川盆地长期延续的城市中心，关联古蜀文明、秦汉整合、蜀汉记忆、商业和日常城市文化。",
        sites: ["Jinsha Site Museum", "Wuhou Shrine", "Du Fu Thatched Cottage", "Dujiangyan"],
        sitesZh: ["金沙遗址博物馆", "武侯祠", "杜甫草堂", "都江堰"],
        baseViews: 13320,
        notes: 40,
        verified: "2026-05",
        access: "High",
        status: "Official facts pending"
      },
      {
        id: "leshan",
        name: "Leshan",
        zh: "乐山",
        province: "Sichuan",
        museum: "Leshan Museum",
        museumZh: "乐山博物馆",
        museumRole: "A practical entry for river geography, Buddhist carving, local trade, and the wider Emei-Leshan heritage landscape.",
        museumRoleZh: "理解河流地理、佛教造像、地方贸易和峨眉山—乐山整体遗产景观的实用入口。",
        history:
          "Leshan is shaped by river confluences, Buddhist monumental art, and its relationship with Mount Emei and southwest travel routes.",
        historyZh: "乐山受到江河交汇、佛教大型造像、峨眉山关系和西南交通路线的共同塑造。",
        sites: ["Leshan Giant Buddha", "Mount Emei", "Lingyun Mountain area"],
        sitesZh: ["乐山大佛", "峨眉山", "凌云山片区"],
        baseViews: 7060,
        notes: 23,
        verified: "2026-04",
        access: "Medium",
        status: "Needs visitor notes"
      }
    ]
  }
];

export type AdministrativeSeed = {
  zh: string;
  en: string;
  type: "county" | "town" | "village";
  provinceId: string;
  cityId?: string;
  aliases?: string[];
};

export const administrativeSearchSeed: AdministrativeSeed[] = [
  { zh: "东城区", en: "Dongcheng District", type: "county", provinceId: "beijing", cityId: "beijing-city", aliases: ["dongcheng"] },
  { zh: "延庆区", en: "Yanqing District", type: "county", provinceId: "beijing", cityId: "beijing-city", aliases: ["yanqing"] },
  { zh: "古北口镇", en: "Gubeikou Town", type: "town", provinceId: "beijing", cityId: "beijing-city", aliases: ["古北口", "gubeikou"] },
  { zh: "爨底下村", en: "Cuandixia Village", type: "village", provinceId: "beijing", cityId: "beijing-city", aliases: ["cuandixia", "爨底下"] },
  { zh: "黄浦区", en: "Huangpu District", type: "county", provinceId: "shanghai", cityId: "shanghai-city", aliases: ["huangpu"] },
  { zh: "朱家角镇", en: "Zhujiajiao Town", type: "town", provinceId: "shanghai", cityId: "shanghai-city", aliases: ["zhujiajiao", "朱家角"] },
  { zh: "雁塔区", en: "Yanta District", type: "county", provinceId: "shaanxi", cityId: "xian", aliases: ["yanta"] },
  { zh: "临潼区", en: "Lintong District", type: "county", provinceId: "shaanxi", cityId: "xian", aliases: ["lintong"] },
  { zh: "秦淮区", en: "Qinhuai District", type: "county", provinceId: "jiangsu", cityId: "nanjing", aliases: ["qinhuai"] },
  { zh: "昆山市", en: "Kunshan City", type: "county", provinceId: "jiangsu", cityId: "suzhou", aliases: ["kunshan"] },
  { zh: "周庄镇", en: "Zhouzhuang Town", type: "town", provinceId: "jiangsu", cityId: "suzhou", aliases: ["zhouzhuang", "周庄"] },
  { zh: "同里镇", en: "Tongli Town", type: "town", provinceId: "jiangsu", cityId: "suzhou", aliases: ["tongli", "同里"] },
  { zh: "广陵区", en: "Guangling District", type: "county", provinceId: "jiangsu", cityId: "yangzhou", aliases: ["guangling"] },
  { zh: "都江堰市", en: "Dujiangyan City", type: "county", provinceId: "sichuan", cityId: "chengdu", aliases: ["dujiangyan", "都江堰"] },
  { zh: "洛带镇", en: "Luodai Town", type: "town", provinceId: "sichuan", cityId: "chengdu", aliases: ["luodai", "洛带"] },
  { zh: "黄龙溪镇", en: "Huanglongxi Town", type: "town", provinceId: "sichuan", cityId: "chengdu", aliases: ["huanglongxi", "黄龙溪"] },
  { zh: "峨眉山市", en: "Emeishan City", type: "county", provinceId: "sichuan", cityId: "leshan", aliases: ["emeishan", "峨眉山"] }
];

export const provinceAttractionSeed: Record<string, Array<{ zh: string; en: string }>> = {
  beijing: [
    { zh: "故宫", en: "Forbidden City" },
    { zh: "天坛", en: "Temple of Heaven" },
    { zh: "北京中轴线", en: "Beijing Central Axis" }
  ],
  tianjin: [
    { zh: "五大道", en: "Five Great Avenues" },
    { zh: "古文化街", en: "Ancient Culture Street" },
    { zh: "天津博物馆", en: "Tianjin Museum" }
  ],
  hebei: [
    { zh: "承德避暑山庄", en: "Chengde Mountain Resort" },
    { zh: "山海关", en: "Shanhaiguan" },
    { zh: "西柏坡", en: "Xibaipo" }
  ],
  shanxi: [
    { zh: "云冈石窟", en: "Yungang Grottoes" },
    { zh: "平遥古城", en: "Pingyao Ancient City" },
    { zh: "五台山", en: "Mount Wutai" }
  ],
  "inner-mongolia": [
    { zh: "呼伦贝尔草原", en: "Hulunbuir Grassland" },
    { zh: "成吉思汗陵", en: "Mausoleum of Genghis Khan" },
    { zh: "响沙湾", en: "Xiangshawan" }
  ],
  liaoning: [
    { zh: "沈阳故宫", en: "Shenyang Palace Museum" },
    { zh: "大连老虎滩", en: "Dalian Tiger Beach" },
    { zh: "本溪水洞", en: "Benxi Water Cave" }
  ],
  jilin: [
    { zh: "长白山", en: "Changbai Mountain" },
    { zh: "伪满皇宫博物院", en: "Museum of the Imperial Palace of Manchukuo" },
    { zh: "净月潭", en: "Jingyuetan" }
  ],
  heilongjiang: [
    { zh: "哈尔滨中央大街", en: "Harbin Central Street" },
    { zh: "圣索菲亚教堂", en: "Saint Sophia Cathedral" },
    { zh: "太阳岛", en: "Sun Island" },
    { zh: "五大连池", en: "Wudalianchi" },
    { zh: "镜泊湖", en: "Jingpo Lake" }
  ],
  shanghai: [
    { zh: "外滩", en: "The Bund" },
    { zh: "豫园", en: "Yu Garden" },
    { zh: "上海博物馆", en: "Shanghai Museum" }
  ],
  jiangsu: [
    { zh: "明孝陵", en: "Ming Xiaoling Mausoleum" },
    { zh: "苏州园林", en: "Classical Gardens of Suzhou" },
    { zh: "中国大运河博物馆", en: "China Grand Canal Museum" }
  ],
  zhejiang: [
    { zh: "西湖", en: "West Lake" },
    { zh: "乌镇", en: "Wuzhen" },
    { zh: "普陀山", en: "Mount Putuo" }
  ],
  anhui: [
    { zh: "黄山", en: "Mount Huangshan" },
    { zh: "宏村", en: "Hongcun" },
    { zh: "西递", en: "Xidi" }
  ],
  fujian: [
    { zh: "武夷山", en: "Wuyi Mountain" },
    { zh: "福建土楼", en: "Fujian Tulou" },
    { zh: "鼓浪屿", en: "Gulangyu" }
  ],
  jiangxi: [
    { zh: "庐山", en: "Mount Lu" },
    { zh: "景德镇", en: "Jingdezhen" },
    { zh: "滕王阁", en: "Tengwang Pavilion" }
  ],
  shandong: [
    { zh: "泰山", en: "Mount Tai" },
    { zh: "曲阜三孔", en: "Three Confucian Sites in Qufu" },
    { zh: "蓬莱阁", en: "Penglai Pavilion" }
  ],
  henan: [
    { zh: "龙门石窟", en: "Longmen Grottoes" },
    { zh: "殷墟", en: "Yinxu" },
    { zh: "少林寺", en: "Shaolin Temple" }
  ],
  hubei: [
    { zh: "黄鹤楼", en: "Yellow Crane Tower" },
    { zh: "武当山", en: "Wudang Mountains" },
    { zh: "湖北省博物馆", en: "Hubei Provincial Museum" }
  ],
  hunan: [
    { zh: "张家界国家森林公园", en: "Zhangjiajie National Forest Park" },
    { zh: "凤凰古城", en: "Fenghuang Ancient Town" },
    { zh: "岳麓书院", en: "Yuelu Academy" }
  ],
  guangdong: [
    { zh: "广州塔", en: "Canton Tower" },
    { zh: "陈家祠", en: "Chen Clan Ancestral Hall" },
    { zh: "开平碉楼", en: "Kaiping Diaolou" }
  ],
  guangxi: [
    { zh: "桂林漓江", en: "Li River" },
    { zh: "阳朔", en: "Yangshuo" },
    { zh: "德天瀑布", en: "Detian Waterfall" }
  ],
  hainan: [
    { zh: "亚龙湾", en: "Yalong Bay" },
    { zh: "蜈支洲岛", en: "Wuzhizhou Island" },
    { zh: "海口骑楼老街", en: "Haikou Qilou Old Street" }
  ],
  chongqing: [
    { zh: "洪崖洞", en: "Hongya Cave" },
    { zh: "大足石刻", en: "Dazu Rock Carvings" },
    { zh: "磁器口古镇", en: "Ciqikou Ancient Town" }
  ],
  sichuan: [
    { zh: "都江堰", en: "Dujiangyan" },
    { zh: "乐山大佛", en: "Leshan Giant Buddha" },
    { zh: "九寨沟", en: "Jiuzhaigou" }
  ],
  guizhou: [
    { zh: "黄果树瀑布", en: "Huangguoshu Waterfall" },
    { zh: "西江千户苗寨", en: "Xijiang Miao Village" },
    { zh: "梵净山", en: "Fanjing Mountain" }
  ],
  yunnan: [
    { zh: "丽江古城", en: "Old Town of Lijiang" },
    { zh: "大理古城", en: "Dali Old Town" },
    { zh: "石林", en: "Stone Forest" }
  ],
  tibet: [
    { zh: "布达拉宫", en: "Potala Palace" },
    { zh: "大昭寺", en: "Jokhang Temple" },
    { zh: "纳木错", en: "Namtso" }
  ],
  shaanxi: [
    { zh: "秦始皇兵马俑", en: "Terracotta Army" },
    { zh: "西安城墙", en: "Xi'an City Wall" },
    { zh: "陕西历史博物馆", en: "Shaanxi History Museum" }
  ],
  gansu: [
    { zh: "莫高窟", en: "Mogao Caves" },
    { zh: "嘉峪关", en: "Jiayuguan Pass" },
    { zh: "张掖丹霞", en: "Zhangye Danxia" }
  ],
  qinghai: [
    { zh: "青海湖", en: "Qinghai Lake" },
    { zh: "塔尔寺", en: "Kumbum Monastery" },
    { zh: "茶卡盐湖", en: "Chaka Salt Lake" }
  ],
  ningxia: [
    { zh: "沙坡头", en: "Shapotou" },
    { zh: "西夏陵", en: "Western Xia Mausoleums" },
    { zh: "水洞沟", en: "Shuidonggou" }
  ],
  xinjiang: [
    { zh: "天山天池", en: "Heavenly Lake of Tianshan" },
    { zh: "喀纳斯", en: "Kanas Lake" },
    { zh: "喀什古城", en: "Kashgar Old City" }
  ],
  "hong-kong": [
    { zh: "太平山顶", en: "Victoria Peak" },
    { zh: "天星小轮", en: "Star Ferry" },
    { zh: "香港故宫文化博物馆", en: "Hong Kong Palace Museum" }
  ],
  macau: [
    { zh: "大三巴牌坊", en: "Ruins of St. Paul's" },
    { zh: "议事亭前地", en: "Senado Square" },
    { zh: "妈阁庙", en: "A-Ma Temple" }
  ],
  taiwan: [
    { zh: "台北故宫博物院", en: "National Palace Museum" },
    { zh: "日月潭", en: "Sun Moon Lake" },
    { zh: "阿里山", en: "Alishan" }
  ]
};
