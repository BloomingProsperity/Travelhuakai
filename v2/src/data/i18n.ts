export type Lang = "en" | "zh";

export const i18n: Record<Lang, Record<string, string>> = {
  en: {
    brandSubtitle: "中国城市与博物馆索引",
    navAtlas: "Atlas",
    navVideo: "Video",
    navMuseums: "Museums",
    navSources: "Sources",
    searchPlaceholder: "Search city, county, town, village, scenic area",
    searchButton: "Search",
    searchNoMatch: "No matching place in the current demo index.",
    searchJumped: "Map jumped to",
    mapHintPending: "This province is listed on the map. City and museum data are not connected yet.",
    historyVideoTitle: "China Historical Evolution Video",
    historyVideoBody:
      "A video position for explaining China through dynasties, capitals, borders, routes, museums, and cultural exchange before users explore cities.",
    historyVideoMeta: "Official video: Discover a China Beyond Your Imagination",
    historyVideoSource: "Official source: Chinaculture.org",
    atlasTitle: "Administrative Atlas",
    atlasBody: "Click a province-level region to list cities. City pins open museum-first profiles.",
    provinceMode: "Province",
    cityMode: "City",
    provinceLevelRegions: "Province-level regions",
    currentView: "Current View",
    famousAttractions: "Famous attractions",
    scenicEntry: "Scenic entry",
    museumEntry: "Museum entry",
    provinceDataPending: "Famous attraction data for this province is not connected yet.",
    reset: "Reset",
    selectCity: "Select a city",
    selectCityBody:
      "The city profile will show the museum entry point, real visitor signals, official source status, and historical direction.",
    close: "Close",
    startHere: "Start here",
    pageViews: "Page views",
    visitorNotes: "Visitor notes",
    lastVerified: "Last verified",
    englishAccess: "English access",
    historicalIdentity: "Historical identity",
    thenExplore: "Then explore",
    sourcePolicy: "Source policy",
    sourcePolicyBody:
      "Official facts require source links. Visitor notes require explicit contributor authorization. Images are omitted unless licensed or contributed.",
    museumTitle: "Museum-first Page Template",
    museumBody:
      "Every city starts with the institution that explains its origin, timeline, people, and material culture.",
    flowOneTitle: "City Museum",
    flowOneBody: "Main city museum, provincial museum, archaeological site museum, or history hall.",
    flowTwoTitle: "Historical Context",
    flowTwoBody: "Dynasties, trade routes, wars, migration, local industries, and cultural identity.",
    flowThreeTitle: "Visitor Reality",
    flowThreeBody: "Passport booking, English labels, crowd level, access issues, and current notes.",
    flowFourTitle: "Explore After",
    flowFourBody: "Nearby historical sites, old streets, temples, relic parks, and heritage locations.",
    sourcesTitle: "Image and Source Rules",
    sourcesBody:
      "This template intentionally uses no scraped web photos. Production pages should use official facts, authorized visitor notes, licensed images, and visible attribution.",
    ruleOne: "Official text is used for factual extraction, not copied as prose.",
    ruleTwo: "AI summaries must trace important claims back to source records.",
    ruleThree: "Visitor notes require permission to publish and translate.",
    ruleFour: "Images need ownership, open license, or written authorization.",
    footerNote: "Travel China demo data only.",
    backToTop: "Back to top",
    cityProfiles: "city profiles",
    views: "views",
    viewIn3D: "View in 3D",
    exit3D: "Exit 3D"
  },
  zh: {
    brandSubtitle: "中国城市与博物馆索引",
    navAtlas: "地图",
    navVideo: "视频",
    navMuseums: "博物馆",
    navSources: "来源",
    searchPlaceholder: "搜索城市、县、镇、村、景区",
    searchButton: "搜索",
    searchNoMatch: "当前演示索引里没有匹配地点。",
    searchJumped: "地图已跳转到",
    mapHintPending: "该省份已列入地图，但城市和博物馆数据尚未接入。",
    historyVideoTitle: "中国历史演变视频",
    historyVideoBody:
      "这里用于插入视频，用朝代、都城、疆域、路线、博物馆和文化交流解释中国，再让用户进入城市探索。",
    historyVideoMeta: "官方视频：Discover a China Beyond Your Imagination",
    historyVideoSource: "官方来源：Chinaculture.org",
    atlasTitle: "行政区划地图",
    atlasBody: "点击省级地区查看城市列表，再点击城市打开博物馆优先档案。",
    provinceMode: "省份",
    cityMode: "城市",
    provinceLevelRegions: "省级地区",
    currentView: "当前视图",
    famousAttractions: "著名景点",
    scenicEntry: "景区入口",
    museumEntry: "博物馆入口",
    provinceDataPending: "该省著名景点数据尚未接入。",
    reset: "重置",
    selectCity: "选择城市",
    selectCityBody: "城市档案会展示博物馆入口、真实浏览信号、官方来源状态和历史脉络。",
    close: "关闭",
    startHere: "从这里开始",
    pageViews: "页面浏览",
    visitorNotes: "游客笔记",
    lastVerified: "最后核验",
    englishAccess: "英文友好度",
    historicalIdentity: "历史定位",
    thenExplore: "随后探索",
    sourcePolicy: "来源规则",
    sourcePolicyBody: "官方事实必须保留来源链接。游客笔记必须取得投稿授权。图片无授权或开放许可时不展示。",
    museumTitle: "博物馆优先页面模板",
    museumBody: "每座城市先从解释其起源、时间线、人物和物质文化的机构开始。",
    flowOneTitle: "城市博物馆",
    flowOneBody: "市级博物馆、省级博物馆、考古遗址博物馆或地方文史馆。",
    flowTwoTitle: "历史脉络",
    flowTwoBody: "朝代、商路、战争、移民、地方产业和文化身份。",
    flowThreeTitle: "真实体验",
    flowThreeBody: "护照预约、英文展签、人流情况、交通难度和最新反馈。",
    flowFourTitle: "继续探索",
    flowFourBody: "附近历史遗址、老街、寺庙、文物公园和文化遗产地点。",
    sourcesTitle: "图片与来源规则",
    sourcesBody: "此模板不使用抓取的网络图片。正式页面应使用官方事实、授权游客笔记、合规图片和可见署名。",
    ruleOne: "官方文字只提取事实，不直接复制成正文。",
    ruleTwo: "AI 摘要中的关键事实必须能追溯到来源记录。",
    ruleThree: "游客笔记必须获得发布和翻译授权。",
    ruleFour: "图片必须具备所有权、开放许可或书面授权。",
    footerNote: "旅行中国。当前为演示数据。",
    backToTop: "回到顶部",
    cityProfiles: "个城市档案",
    views: "次浏览",
    viewIn3D: "查看 3D 模型",
    exit3D: "退出 3D"
  }
};

export const typeLabels: Record<Lang, Record<string, string>> = {
  en: { Municipality: "Municipality", Province: "Province" },
  zh: { Municipality: "直辖市", Province: "省" }
};

export const accessLabels: Record<Lang, Record<string, string>> = {
  en: { High: "High", Medium: "Medium", Low: "Low" },
  zh: { High: "高", Medium: "中", Low: "低" }
};

export const statusLabels: Record<Lang, Record<string, string>> = {
  en: {
    "Official facts pending": "Official facts pending",
    "Needs visitor notes": "Needs visitor notes",
    "Needs review": "Needs review"
  },
  zh: {
    "Official facts pending": "官方资料待核验",
    "Needs visitor notes": "需要游客笔记",
    "Needs review": "需要复核"
  }
};

export const placeTypeLabels: Record<Lang, Record<string, string>> = {
  en: {
    province: "Province",
    city: "City",
    county: "County",
    town: "Town",
    village: "Village",
    museum: "Museum",
    site: "Scenic area"
  },
  zh: {
    province: "省级地区",
    city: "城市",
    county: "县区",
    town: "镇",
    village: "村",
    museum: "博物馆",
    site: "景区"
  }
};
