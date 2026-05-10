import { ViteReactSSG } from "vite-react-ssg";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { Suspense, createContext, lazy, useCallback, useContext, useEffect, useId, useMemo, useReducer, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import clsx from "clsx";
//#region src/data/i18n.ts
var i18n = {
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
		historyVideoBody: "A video position for explaining China through dynasties, capitals, borders, routes, museums, and cultural exchange before users explore cities.",
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
		selectCityBody: "The city profile will show the museum entry point, real visitor signals, official source status, and historical direction.",
		close: "Close",
		startHere: "Start here",
		pageViews: "Page views",
		visitorNotes: "Visitor notes",
		lastVerified: "Last verified",
		englishAccess: "English access",
		historicalIdentity: "Historical identity",
		thenExplore: "Then explore",
		sourcePolicy: "Source policy",
		sourcePolicyBody: "Official facts require source links. Visitor notes require explicit contributor authorization. Images are omitted unless licensed or contributed.",
		museumTitle: "Museum-first Page Template",
		museumBody: "Every city starts with the institution that explains its origin, timeline, people, and material culture.",
		flowOneTitle: "City Museum",
		flowOneBody: "Main city museum, provincial museum, archaeological site museum, or history hall.",
		flowTwoTitle: "Historical Context",
		flowTwoBody: "Dynasties, trade routes, wars, migration, local industries, and cultural identity.",
		flowThreeTitle: "Visitor Reality",
		flowThreeBody: "Passport booking, English labels, crowd level, access issues, and current notes.",
		flowFourTitle: "Explore After",
		flowFourBody: "Nearby historical sites, old streets, temples, relic parks, and heritage locations.",
		sourcesTitle: "Image and Source Rules",
		sourcesBody: "This template intentionally uses no scraped web photos. Production pages should use official facts, authorized visitor notes, licensed images, and visible attribution.",
		ruleOne: "Official text is used for factual extraction, not copied as prose.",
		ruleTwo: "AI summaries must trace important claims back to source records.",
		ruleThree: "Visitor notes require permission to publish and translate.",
		ruleFour: "Images need ownership, open license, or written authorization.",
		footerNote: "China Atlas template. Demo data only.",
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
		historyVideoBody: "这里用于插入视频，用朝代、都城、疆域、路线、博物馆和文化交流解释中国，再让用户进入城市探索。",
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
		sourcesBody: "此模板故意不使用抓取来的网络图片。正式页面应使用官方事实、授权游客笔记、合规图片和可见署名。",
		ruleOne: "官方文字只提取事实，不直接复制成正文。",
		ruleTwo: "AI 摘要中的关键事实必须能追溯到来源记录。",
		ruleThree: "游客笔记必须获得发布和翻译授权。",
		ruleFour: "图片必须具备所有权、开放许可或书面授权。",
		footerNote: "China Atlas 模板。当前为演示数据。",
		backToTop: "回到顶部",
		cityProfiles: "个城市档案",
		views: "次浏览",
		viewIn3D: "查看 3D 模型",
		exit3D: "退出 3D"
	}
};
var placeTypeLabels = {
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
//#endregion
//#region src/lib/i18n.ts
var translate = (lang, key) => i18n[lang]?.[key] ?? i18n.en[key] ?? key;
//#endregion
//#region src/store/language.ts
var LanguageContext = createContext(null);
function useLang() {
	const value = useContext(LanguageContext);
	if (!value) throw new Error("useLang must be used within <LanguageProvider>");
	return value;
}
//#endregion
//#region src/store/LanguageProvider.tsx
var STORAGE_KEY = "chinaAtlas:language";
var readInitial = () => {
	if (typeof window === "undefined") return "en";
	return window.localStorage.getItem(STORAGE_KEY) === "zh" ? "zh" : "en";
};
function LanguageProvider({ children }) {
	const [lang, setLangState] = useState(readInitial);
	useEffect(() => {
		document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
	}, [lang]);
	const setLang = useCallback((next) => {
		setLangState(next);
		if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, next);
	}, []);
	const value = useMemo(() => ({
		lang,
		setLang,
		t: (key) => translate(lang, key)
	}), [lang, setLang]);
	return /* @__PURE__ */ jsx(LanguageContext.Provider, {
		value,
		children
	});
}
//#endregion
//#region src/data/atlas.ts
var atlasData = [
	{
		id: "beijing",
		name: "Beijing",
		zh: "北京",
		type: "Municipality",
		color: "red",
		cities: [{
			id: "beijing-city",
			name: "Beijing",
			zh: "北京市",
			province: "Beijing",
			museum: "Capital Museum / Beijing Grand Canal Museum",
			museumZh: "首都博物馆 / 北京大运河博物馆",
			museumRole: "The first stop for understanding Beijing as an imperial capital, political center, and living city shaped by ritual, walls, waterways, and modern institutions.",
			museumRoleZh: "理解北京作为帝都、政治中心和生活城市的第一入口，可看到礼制、城墙、水系和现代机构如何共同塑造这座城市。",
			history: "Beijing is one of China's most important historical capitals, with layers from Yuan Dadu, Ming and Qing imperial planning, Republican-era transitions, and contemporary national institutions.",
			historyZh: "北京是中国最重要的历史都城之一，层次包括元大都、明清都城规划、近现代转型以及当代国家机构。",
			sites: [
				"Forbidden City",
				"Temple of Heaven",
				"Beijing Central Axis",
				"Beijing City Wall remains"
			],
			sitesZh: [
				"故宫",
				"天坛",
				"北京中轴线",
				"北京城墙遗存"
			],
			baseViews: 18642,
			notes: 42,
			verified: "2026-05",
			access: "Medium",
			status: "Official facts pending"
		}]
	},
	{
		id: "shanghai",
		name: "Shanghai",
		zh: "上海",
		type: "Municipality",
		color: "blue",
		cities: [{
			id: "shanghai-city",
			name: "Shanghai",
			zh: "上海市",
			province: "Shanghai",
			museum: "Shanghai Museum / Shanghai History Museum",
			museumZh: "上海博物馆 / 上海市历史博物馆",
			museumRole: "A practical entry point for understanding Jiangnan culture, port-city growth, modern urban life, and Shanghai's role in global exchange.",
			museumRoleZh: "理解江南文化、港口城市成长、近现代都市生活以及上海参与全球交流的实用入口。",
			history: "Shanghai grew from a Jiangnan county and port into a treaty-port metropolis, then a central city of modern industry, finance, publishing, cinema, and urban culture.",
			historyZh: "上海从江南县城和港口发展为通商口岸都市，随后成为现代工业、金融、出版、电影和城市文化的重要中心。",
			sites: [
				"Shanghai History Museum",
				"Yu Garden area",
				"The Bund",
				"Former French Concession streets"
			],
			sitesZh: [
				"上海市历史博物馆",
				"豫园片区",
				"外滩",
				"原法租界街区"
			],
			baseViews: 14380,
			notes: 37,
			verified: "2026-05",
			access: "High",
			status: "Needs visitor notes"
		}]
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
				museumRole: "The clearest starting point for Zhou, Qin, Han, Tang, Chang'an urban history, Silk Road exchange, and imperial material culture.",
				museumRoleZh: "理解周秦汉唐、长安城市史、丝绸之路交流和帝国物质文化的清晰入口。",
				history: "Xi'an sits near the core of ancient Chang'an, one of the great capitals of Chinese history and a key anchor for understanding early imperial statecraft and Silk Road exchange.",
				historyZh: "西安位于古代长安核心区域附近，是中国历史上重要都城之一，也是理解早期帝国制度和丝绸之路交流的关键城市。",
				sites: [
					"Terracotta Army",
					"Xi'an City Wall",
					"Big Wild Goose Pagoda",
					"Daming Palace site"
				],
				sitesZh: [
					"秦始皇兵马俑",
					"西安城墙",
					"大雁塔",
					"大明宫遗址"
				],
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
				history: "Xianyang is closely associated with the Qin state and Qin dynasty, making it a strong context city for understanding the rise of China's first imperial order.",
				historyZh: "咸阳与秦国、秦朝关系密切，是理解中国第一个大一统帝国兴起的重要背景城市。",
				sites: [
					"Han Yang Ling Museum",
					"Qianling area",
					"Qin and Han heritage sites"
				],
				sitesZh: [
					"汉阳陵博物院",
					"乾陵片区",
					"秦汉遗址"
				],
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
				history: "Yan'an is central to understanding the Chinese revolutionary period and the narratives, institutions, and landscapes associated with the Communist base area.",
				historyZh: "延安是理解中国革命时期、根据地叙事、制度建设和相关历史景观的核心城市。",
				sites: [
					"Yangjialing",
					"Zaoyuan",
					"Pagoda Hill"
				],
				sitesZh: [
					"杨家岭",
					"枣园",
					"宝塔山"
				],
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
				history: "Luoyang is one of China's major ancient capitals, connected with the Xia-related Erlitou site, Eastern Zhou, Han-Wei urban history, Sui-Tang Luoyang, and Longmen Buddhist art.",
				historyZh: "洛阳是中国重要古都之一，关联二里头、东周、汉魏洛阳城、隋唐洛阳城和龙门佛教艺术。",
				sites: [
					"Longmen Grottoes",
					"White Horse Temple",
					"Sui-Tang Luoyang City site",
					"Erlitou Site Museum"
				],
				sitesZh: [
					"龙门石窟",
					"白马寺",
					"隋唐洛阳城遗址",
					"二里头夏都遗址博物馆"
				],
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
				history: "Kaifeng is strongly associated with the Northern Song capital Bianjing, a city of commerce, administration, literature, and dense urban life.",
				historyZh: "开封与北宋都城汴京紧密相关，是商业、行政、文学和繁华城市生活的重要代表。",
				sites: [
					"Dragon Pavilion area",
					"Iron Pagoda",
					"Daxiangguo Temple",
					"Ancient city remains"
				],
				sitesZh: [
					"龙亭片区",
					"铁塔",
					"大相国寺",
					"古城遗存"
				],
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
				history: "Anyang is essential for understanding the late Shang capital at Yinxu, oracle bone inscriptions, early state ritual, and archaeological evidence for ancient China.",
				historyZh: "安阳对于理解殷墟晚商都城、甲骨刻辞、早期国家礼制和中国古代考古证据非常关键。",
				sites: [
					"Yinxu",
					"National Museum of Chinese Writing",
					"Fu Hao Tomb area"
				],
				sitesZh: [
					"殷墟",
					"中国文字博物馆",
					"妇好墓片区"
				],
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
				history: "Nanjing has served as a capital across several periods and is key to understanding southern dynastic culture, Ming statecraft, and modern Chinese political history.",
				historyZh: "南京在多个历史时期曾为都城，是理解南朝文化、明代国家建设和中国近现代政治史的重要城市。",
				sites: [
					"Ming Xiaoling Mausoleum",
					"Nanjing City Wall",
					"Presidential Palace",
					"Confucius Temple area"
				],
				sitesZh: [
					"明孝陵",
					"南京城墙",
					"总统府",
					"夫子庙片区"
				],
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
				history: "Suzhou is deeply tied to Jiangnan culture, classical gardens, canal networks, silk production, and elite urban life from the Song through Ming-Qing periods.",
				historyZh: "苏州与江南文化、古典园林、运河网络、丝绸生产，以及宋至明清以来的城市生活密切相关。",
				sites: [
					"Humble Administrator's Garden",
					"Pingjiang Road",
					"Suzhou section of the Grand Canal",
					"Tiger Hill"
				],
				sitesZh: [
					"拙政园",
					"平江路",
					"大运河苏州段",
					"虎丘"
				],
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
				museumRoleZh: "理解大运河文化、盐商、园林和清代城市繁荣的强入口。",
				history: "Yangzhou is central to Grand Canal history, salt commerce, literary culture, gardens, and the movement of goods and people between north and south China.",
				historyZh: "扬州是理解大运河、盐业商业、文学文化、园林，以及南北物资与人员流动的重要城市。",
				sites: [
					"Slender West Lake",
					"Dongguan Street",
					"Ge Garden",
					"Grand Canal sites"
				],
				sitesZh: [
					"瘦西湖",
					"东关街",
					"个园",
					"大运河遗产点"
				],
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
		cities: [{
			id: "chengdu",
			name: "Chengdu",
			zh: "成都",
			province: "Sichuan",
			museum: "Chengdu Museum / Jinsha Site Museum",
			museumZh: "成都博物馆 / 金沙遗址博物馆",
			museumRole: "The first stop for ancient Shu culture, basin geography, urban life, local crafts, and the relationship between Chengdu and Sichuan's wider cultural landscape.",
			museumRoleZh: "理解古蜀文化、盆地地理、城市生活、地方工艺，以及成都与四川整体文化景观关系的第一入口。",
			history: "Chengdu is a long-lived urban center in the Sichuan Basin, associated with ancient Shu civilization, Qin-Han integration, Shu Han memory, commerce, and everyday urban culture.",
			historyZh: "成都是四川盆地长期延续的城市中心，关联古蜀文明、秦汉整合、蜀汉记忆、商业和日常城市文化。",
			sites: [
				"Jinsha Site Museum",
				"Wuhou Shrine",
				"Du Fu Thatched Cottage",
				"Dujiangyan"
			],
			sitesZh: [
				"金沙遗址博物馆",
				"武侯祠",
				"杜甫草堂",
				"都江堰"
			],
			baseViews: 13320,
			notes: 40,
			verified: "2026-05",
			access: "High",
			status: "Official facts pending"
		}, {
			id: "leshan",
			name: "Leshan",
			zh: "乐山",
			province: "Sichuan",
			museum: "Leshan Museum",
			museumZh: "乐山博物馆",
			museumRole: "A practical entry for river geography, Buddhist carving, local trade, and the wider Emei-Leshan heritage landscape.",
			museumRoleZh: "理解河流地理、佛教造像、地方贸易和峨眉山—乐山整体遗产景观的实用入口。",
			history: "Leshan is shaped by river confluences, Buddhist monumental art, and its relationship with Mount Emei and southwest travel routes.",
			historyZh: "乐山受到江河交汇、佛教大型造像、峨眉山关系和西南交通路线的共同塑造。",
			sites: [
				"Leshan Giant Buddha",
				"Mount Emei",
				"Lingyun Mountain area"
			],
			sitesZh: [
				"乐山大佛",
				"峨眉山",
				"凌云山片区"
			],
			baseViews: 7060,
			notes: 23,
			verified: "2026-04",
			access: "Medium",
			status: "Needs visitor notes"
		}]
	}
];
var administrativeSearchSeed = [
	{
		zh: "东城区",
		en: "Dongcheng District",
		type: "county",
		provinceId: "beijing",
		cityId: "beijing-city",
		aliases: ["dongcheng"]
	},
	{
		zh: "延庆区",
		en: "Yanqing District",
		type: "county",
		provinceId: "beijing",
		cityId: "beijing-city",
		aliases: ["yanqing"]
	},
	{
		zh: "古北口镇",
		en: "Gubeikou Town",
		type: "town",
		provinceId: "beijing",
		cityId: "beijing-city",
		aliases: ["古北口", "gubeikou"]
	},
	{
		zh: "爨底下村",
		en: "Cuandixia Village",
		type: "village",
		provinceId: "beijing",
		cityId: "beijing-city",
		aliases: ["cuandixia", "爨底下"]
	},
	{
		zh: "黄浦区",
		en: "Huangpu District",
		type: "county",
		provinceId: "shanghai",
		cityId: "shanghai-city",
		aliases: ["huangpu"]
	},
	{
		zh: "朱家角镇",
		en: "Zhujiajiao Town",
		type: "town",
		provinceId: "shanghai",
		cityId: "shanghai-city",
		aliases: ["zhujiajiao", "朱家角"]
	},
	{
		zh: "雁塔区",
		en: "Yanta District",
		type: "county",
		provinceId: "shaanxi",
		cityId: "xian",
		aliases: ["yanta"]
	},
	{
		zh: "临潼区",
		en: "Lintong District",
		type: "county",
		provinceId: "shaanxi",
		cityId: "xian",
		aliases: ["lintong"]
	},
	{
		zh: "秦淮区",
		en: "Qinhuai District",
		type: "county",
		provinceId: "jiangsu",
		cityId: "nanjing",
		aliases: ["qinhuai"]
	},
	{
		zh: "昆山市",
		en: "Kunshan City",
		type: "county",
		provinceId: "jiangsu",
		cityId: "suzhou",
		aliases: ["kunshan"]
	},
	{
		zh: "周庄镇",
		en: "Zhouzhuang Town",
		type: "town",
		provinceId: "jiangsu",
		cityId: "suzhou",
		aliases: ["zhouzhuang", "周庄"]
	},
	{
		zh: "同里镇",
		en: "Tongli Town",
		type: "town",
		provinceId: "jiangsu",
		cityId: "suzhou",
		aliases: ["tongli", "同里"]
	},
	{
		zh: "广陵区",
		en: "Guangling District",
		type: "county",
		provinceId: "jiangsu",
		cityId: "yangzhou",
		aliases: ["guangling"]
	},
	{
		zh: "都江堰市",
		en: "Dujiangyan City",
		type: "county",
		provinceId: "sichuan",
		cityId: "chengdu",
		aliases: ["dujiangyan", "都江堰"]
	},
	{
		zh: "洛带镇",
		en: "Luodai Town",
		type: "town",
		provinceId: "sichuan",
		cityId: "chengdu",
		aliases: ["luodai", "洛带"]
	},
	{
		zh: "黄龙溪镇",
		en: "Huanglongxi Town",
		type: "town",
		provinceId: "sichuan",
		cityId: "chengdu",
		aliases: ["huanglongxi", "黄龙溪"]
	},
	{
		zh: "峨眉山市",
		en: "Emeishan City",
		type: "county",
		provinceId: "sichuan",
		cityId: "leshan",
		aliases: ["emeishan", "峨眉山"]
	}
];
var provinceAttractionSeed = {
	beijing: [
		{
			zh: "故宫",
			en: "Forbidden City"
		},
		{
			zh: "天坛",
			en: "Temple of Heaven"
		},
		{
			zh: "北京中轴线",
			en: "Beijing Central Axis"
		}
	],
	tianjin: [
		{
			zh: "五大道",
			en: "Five Great Avenues"
		},
		{
			zh: "古文化街",
			en: "Ancient Culture Street"
		},
		{
			zh: "天津博物馆",
			en: "Tianjin Museum"
		}
	],
	hebei: [
		{
			zh: "承德避暑山庄",
			en: "Chengde Mountain Resort"
		},
		{
			zh: "山海关",
			en: "Shanhaiguan"
		},
		{
			zh: "西柏坡",
			en: "Xibaipo"
		}
	],
	shanxi: [
		{
			zh: "云冈石窟",
			en: "Yungang Grottoes"
		},
		{
			zh: "平遥古城",
			en: "Pingyao Ancient City"
		},
		{
			zh: "五台山",
			en: "Mount Wutai"
		}
	],
	"inner-mongolia": [
		{
			zh: "呼伦贝尔草原",
			en: "Hulunbuir Grassland"
		},
		{
			zh: "成吉思汗陵",
			en: "Mausoleum of Genghis Khan"
		},
		{
			zh: "响沙湾",
			en: "Xiangshawan"
		}
	],
	liaoning: [
		{
			zh: "沈阳故宫",
			en: "Shenyang Palace Museum"
		},
		{
			zh: "大连老虎滩",
			en: "Dalian Tiger Beach"
		},
		{
			zh: "本溪水洞",
			en: "Benxi Water Cave"
		}
	],
	jilin: [
		{
			zh: "长白山",
			en: "Changbai Mountain"
		},
		{
			zh: "伪满皇宫博物院",
			en: "Museum of the Imperial Palace of Manchukuo"
		},
		{
			zh: "净月潭",
			en: "Jingyuetan"
		}
	],
	heilongjiang: [
		{
			zh: "哈尔滨中央大街",
			en: "Harbin Central Street"
		},
		{
			zh: "圣索菲亚教堂",
			en: "Saint Sophia Cathedral"
		},
		{
			zh: "太阳岛",
			en: "Sun Island"
		},
		{
			zh: "五大连池",
			en: "Wudalianchi"
		},
		{
			zh: "镜泊湖",
			en: "Jingpo Lake"
		}
	],
	shanghai: [
		{
			zh: "外滩",
			en: "The Bund"
		},
		{
			zh: "豫园",
			en: "Yu Garden"
		},
		{
			zh: "上海博物馆",
			en: "Shanghai Museum"
		}
	],
	jiangsu: [
		{
			zh: "明孝陵",
			en: "Ming Xiaoling Mausoleum"
		},
		{
			zh: "苏州园林",
			en: "Classical Gardens of Suzhou"
		},
		{
			zh: "中国大运河博物馆",
			en: "China Grand Canal Museum"
		}
	],
	zhejiang: [
		{
			zh: "西湖",
			en: "West Lake"
		},
		{
			zh: "乌镇",
			en: "Wuzhen"
		},
		{
			zh: "普陀山",
			en: "Mount Putuo"
		}
	],
	anhui: [
		{
			zh: "黄山",
			en: "Mount Huangshan"
		},
		{
			zh: "宏村",
			en: "Hongcun"
		},
		{
			zh: "西递",
			en: "Xidi"
		}
	],
	fujian: [
		{
			zh: "武夷山",
			en: "Wuyi Mountain"
		},
		{
			zh: "福建土楼",
			en: "Fujian Tulou"
		},
		{
			zh: "鼓浪屿",
			en: "Gulangyu"
		}
	],
	jiangxi: [
		{
			zh: "庐山",
			en: "Mount Lu"
		},
		{
			zh: "景德镇",
			en: "Jingdezhen"
		},
		{
			zh: "滕王阁",
			en: "Tengwang Pavilion"
		}
	],
	shandong: [
		{
			zh: "泰山",
			en: "Mount Tai"
		},
		{
			zh: "曲阜三孔",
			en: "Three Confucian Sites in Qufu"
		},
		{
			zh: "蓬莱阁",
			en: "Penglai Pavilion"
		}
	],
	henan: [
		{
			zh: "龙门石窟",
			en: "Longmen Grottoes"
		},
		{
			zh: "殷墟",
			en: "Yinxu"
		},
		{
			zh: "少林寺",
			en: "Shaolin Temple"
		}
	],
	hubei: [
		{
			zh: "黄鹤楼",
			en: "Yellow Crane Tower"
		},
		{
			zh: "武当山",
			en: "Wudang Mountains"
		},
		{
			zh: "湖北省博物馆",
			en: "Hubei Provincial Museum"
		}
	],
	hunan: [
		{
			zh: "张家界国家森林公园",
			en: "Zhangjiajie National Forest Park"
		},
		{
			zh: "凤凰古城",
			en: "Fenghuang Ancient Town"
		},
		{
			zh: "岳麓书院",
			en: "Yuelu Academy"
		}
	],
	guangdong: [
		{
			zh: "广州塔",
			en: "Canton Tower"
		},
		{
			zh: "陈家祠",
			en: "Chen Clan Ancestral Hall"
		},
		{
			zh: "开平碉楼",
			en: "Kaiping Diaolou"
		}
	],
	guangxi: [
		{
			zh: "桂林漓江",
			en: "Li River"
		},
		{
			zh: "阳朔",
			en: "Yangshuo"
		},
		{
			zh: "德天瀑布",
			en: "Detian Waterfall"
		}
	],
	hainan: [
		{
			zh: "亚龙湾",
			en: "Yalong Bay"
		},
		{
			zh: "蜈支洲岛",
			en: "Wuzhizhou Island"
		},
		{
			zh: "海口骑楼老街",
			en: "Haikou Qilou Old Street"
		}
	],
	chongqing: [
		{
			zh: "洪崖洞",
			en: "Hongya Cave"
		},
		{
			zh: "大足石刻",
			en: "Dazu Rock Carvings"
		},
		{
			zh: "磁器口古镇",
			en: "Ciqikou Ancient Town"
		}
	],
	sichuan: [
		{
			zh: "都江堰",
			en: "Dujiangyan"
		},
		{
			zh: "乐山大佛",
			en: "Leshan Giant Buddha"
		},
		{
			zh: "九寨沟",
			en: "Jiuzhaigou"
		}
	],
	guizhou: [
		{
			zh: "黄果树瀑布",
			en: "Huangguoshu Waterfall"
		},
		{
			zh: "西江千户苗寨",
			en: "Xijiang Miao Village"
		},
		{
			zh: "梵净山",
			en: "Fanjing Mountain"
		}
	],
	yunnan: [
		{
			zh: "丽江古城",
			en: "Old Town of Lijiang"
		},
		{
			zh: "大理古城",
			en: "Dali Old Town"
		},
		{
			zh: "石林",
			en: "Stone Forest"
		}
	],
	tibet: [
		{
			zh: "布达拉宫",
			en: "Potala Palace"
		},
		{
			zh: "大昭寺",
			en: "Jokhang Temple"
		},
		{
			zh: "纳木错",
			en: "Namtso"
		}
	],
	shaanxi: [
		{
			zh: "秦始皇兵马俑",
			en: "Terracotta Army"
		},
		{
			zh: "西安城墙",
			en: "Xi'an City Wall"
		},
		{
			zh: "陕西历史博物馆",
			en: "Shaanxi History Museum"
		}
	],
	gansu: [
		{
			zh: "莫高窟",
			en: "Mogao Caves"
		},
		{
			zh: "嘉峪关",
			en: "Jiayuguan Pass"
		},
		{
			zh: "张掖丹霞",
			en: "Zhangye Danxia"
		}
	],
	qinghai: [
		{
			zh: "青海湖",
			en: "Qinghai Lake"
		},
		{
			zh: "塔尔寺",
			en: "Kumbum Monastery"
		},
		{
			zh: "茶卡盐湖",
			en: "Chaka Salt Lake"
		}
	],
	ningxia: [
		{
			zh: "沙坡头",
			en: "Shapotou"
		},
		{
			zh: "西夏陵",
			en: "Western Xia Mausoleums"
		},
		{
			zh: "水洞沟",
			en: "Shuidonggou"
		}
	],
	xinjiang: [
		{
			zh: "天山天池",
			en: "Heavenly Lake of Tianshan"
		},
		{
			zh: "喀纳斯",
			en: "Kanas Lake"
		},
		{
			zh: "喀什古城",
			en: "Kashgar Old City"
		}
	],
	"hong-kong": [
		{
			zh: "太平山顶",
			en: "Victoria Peak"
		},
		{
			zh: "天星小轮",
			en: "Star Ferry"
		},
		{
			zh: "香港故宫文化博物馆",
			en: "Hong Kong Palace Museum"
		}
	],
	macau: [
		{
			zh: "大三巴牌坊",
			en: "Ruins of St. Paul's"
		},
		{
			zh: "议事亭前地",
			en: "Senado Square"
		},
		{
			zh: "妈阁庙",
			en: "A-Ma Temple"
		}
	],
	taiwan: [
		{
			zh: "台北故宫博物院",
			en: "National Palace Museum"
		},
		{
			zh: "日月潭",
			en: "Sun Moon Lake"
		},
		{
			zh: "阿里山",
			en: "Alishan"
		}
	]
};
//#endregion
//#region src/data/map-sources.ts
var provinceHitAreas = [
	{
		id: "xinjiang",
		en: "Xinjiang",
		zh: "新疆",
		x: 26,
		y: 36,
		w: 24,
		h: 26
	},
	{
		id: "tibet",
		en: "Tibet",
		zh: "西藏",
		x: 25,
		y: 61,
		w: 27,
		h: 22
	},
	{
		id: "qinghai",
		en: "Qinghai",
		zh: "青海",
		x: 41,
		y: 56,
		w: 15,
		h: 15
	},
	{
		id: "gansu",
		en: "Gansu",
		zh: "甘肃",
		x: 49,
		y: 46,
		w: 13,
		h: 14
	},
	{
		id: "ningxia",
		en: "Ningxia",
		zh: "宁夏",
		x: 55,
		y: 43,
		w: 5,
		h: 7
	},
	{
		id: "inner-mongolia",
		en: "Inner Mongolia",
		zh: "内蒙古",
		x: 63,
		y: 32,
		w: 28,
		h: 18
	},
	{
		id: "heilongjiang",
		en: "Heilongjiang",
		zh: "黑龙江",
		x: 78,
		y: 20,
		w: 18,
		h: 15
	},
	{
		id: "jilin",
		en: "Jilin",
		zh: "吉林",
		x: 78,
		y: 32,
		w: 9,
		h: 8
	},
	{
		id: "liaoning",
		en: "Liaoning",
		zh: "辽宁",
		x: 75,
		y: 39,
		w: 9,
		h: 8
	},
	{
		id: "beijing",
		en: "Beijing",
		zh: "北京",
		x: 68,
		y: 42,
		w: 4,
		h: 4
	},
	{
		id: "tianjin",
		en: "Tianjin",
		zh: "天津",
		x: 70,
		y: 44,
		w: 4,
		h: 4
	},
	{
		id: "hebei",
		en: "Hebei",
		zh: "河北",
		x: 67,
		y: 46,
		w: 9,
		h: 9
	},
	{
		id: "shanxi",
		en: "Shanxi",
		zh: "山西",
		x: 63,
		y: 47,
		w: 7,
		h: 10
	},
	{
		id: "shaanxi",
		en: "Shaanxi",
		zh: "陕西",
		x: 59,
		y: 51,
		w: 8,
		h: 12
	},
	{
		id: "henan",
		en: "Henan",
		zh: "河南",
		x: 65,
		y: 54,
		w: 9,
		h: 9
	},
	{
		id: "shandong",
		en: "Shandong",
		zh: "山东",
		x: 72,
		y: 51,
		w: 9,
		h: 7
	},
	{
		id: "jiangsu",
		en: "Jiangsu",
		zh: "江苏",
		x: 73,
		y: 57,
		w: 8,
		h: 9
	},
	{
		id: "anhui",
		en: "Anhui",
		zh: "安徽",
		x: 69,
		y: 60,
		w: 8,
		h: 10
	},
	{
		id: "hubei",
		en: "Hubei",
		zh: "湖北",
		x: 63,
		y: 61,
		w: 10,
		h: 9
	},
	{
		id: "sichuan",
		en: "Sichuan",
		zh: "四川",
		x: 53,
		y: 64,
		w: 14,
		h: 14
	},
	{
		id: "chongqing",
		en: "Chongqing",
		zh: "重庆",
		x: 59,
		y: 65,
		w: 6,
		h: 7
	},
	{
		id: "hunan",
		en: "Hunan",
		zh: "湖南",
		x: 64,
		y: 69,
		w: 8,
		h: 10
	},
	{
		id: "jiangxi",
		en: "Jiangxi",
		zh: "江西",
		x: 70,
		y: 69,
		w: 8,
		h: 10
	},
	{
		id: "zhejiang",
		en: "Zhejiang",
		zh: "浙江",
		x: 75,
		y: 66,
		w: 7,
		h: 8
	},
	{
		id: "shanghai",
		en: "Shanghai",
		zh: "上海",
		x: 78,
		y: 59,
		w: 4,
		h: 4
	},
	{
		id: "fujian",
		en: "Fujian",
		zh: "福建",
		x: 73,
		y: 75,
		w: 8,
		h: 10
	},
	{
		id: "guizhou",
		en: "Guizhou",
		zh: "贵州",
		x: 57,
		y: 73,
		w: 9,
		h: 9
	},
	{
		id: "yunnan",
		en: "Yunnan",
		zh: "云南",
		x: 50,
		y: 78,
		w: 12,
		h: 15
	},
	{
		id: "guangxi",
		en: "Guangxi",
		zh: "广西",
		x: 61,
		y: 79,
		w: 10,
		h: 10
	},
	{
		id: "guangdong",
		en: "Guangdong",
		zh: "广东",
		x: 68,
		y: 80,
		w: 12,
		h: 9
	},
	{
		id: "hainan",
		en: "Hainan",
		zh: "海南",
		x: 64,
		y: 91,
		w: 5,
		h: 5
	},
	{
		id: "hong-kong",
		en: "Hong Kong",
		zh: "香港",
		x: 72,
		y: 82,
		w: 3,
		h: 3
	},
	{
		id: "macau",
		en: "Macau",
		zh: "澳门",
		x: 70,
		y: 82,
		w: 3,
		h: 3
	},
	{
		id: "taiwan",
		en: "Taiwan",
		zh: "台湾",
		x: 79,
		y: 75,
		w: 6,
		h: 10
	}
];
//#endregion
//#region src/store/atlas.ts
var initialAtlasState = {
	selectedProvinceId: null,
	selectedCityId: null,
	is3DEnabled: false
};
var atlasReducer = (state, action) => {
	switch (action.type) {
		case "selectProvince": return {
			...state,
			selectedProvinceId: action.provinceId,
			selectedCityId: null
		};
		case "selectPlace": return {
			...state,
			selectedProvinceId: action.provinceId,
			selectedCityId: action.cityId
		};
		case "toggle3D": return {
			...state,
			is3DEnabled: !state.is3DEnabled
		};
		case "reset": return initialAtlasState;
		default: return state;
	}
};
var AtlasContext = createContext(null);
var findProvince = (id) => {
	if (!id) return null;
	const match = atlasData.find((p) => p.id === id);
	if (match) return match;
	const area = provinceHitAreas.find((a) => a.id === id);
	return area ? {
		id: area.id,
		name: area.en,
		zh: area.zh,
		type: "Province",
		color: "muted",
		cities: []
	} : null;
};
var findCity = (province, cityId) => {
	if (!province || !cityId) return null;
	return province.cities.find((c) => c.id === cityId) ?? null;
};
function useAtlas() {
	const ctx = useContext(AtlasContext);
	if (!ctx) throw new Error("useAtlas must be used within <AtlasProvider>");
	const { state, dispatch } = ctx;
	const province = findProvince(state.selectedProvinceId);
	const city = findCity(province, state.selectedCityId);
	return {
		...state,
		province,
		city,
		selectProvince: (provinceId) => dispatch({
			type: "selectProvince",
			provinceId
		}),
		selectPlace: (provinceId, cityId) => dispatch({
			type: "selectPlace",
			provinceId,
			cityId
		}),
		selectCity: (cityId) => state.selectedProvinceId ? dispatch({
			type: "selectPlace",
			provinceId: state.selectedProvinceId,
			cityId
		}) : dispatch({
			type: "selectProvince",
			provinceId: null
		}),
		toggle3D: () => dispatch({ type: "toggle3D" }),
		reset: () => dispatch({ type: "reset" })
	};
}
//#endregion
//#region src/store/AtlasProvider.tsx
function AtlasProvider({ children }) {
	const [state, dispatch] = useReducer(atlasReducer, initialAtlasState);
	const value = useMemo(() => ({
		state,
		dispatch
	}), [state]);
	return /* @__PURE__ */ jsx(AtlasContext.Provider, {
		value,
		children
	});
}
//#endregion
//#region src/data/practical-other.ts
var pitfalls = [
	{
		id: "entry-third-country-rule",
		pillar: "entry",
		titleEn: "240-hour transit: onward ticket must leave to a DIFFERENT country",
		titleZh: "240 小时过境：下一程必须飞往不同的国家",
		bodyEn: "New York → Shanghai → New York is denied at immigration. New York → Shanghai → Singapore is approved. Hong Kong, Macau, and Taiwan count as separate regions for this rule.",
		bodyZh: "纽约 → 上海 → 纽约会被边检拒绝；纽约 → 上海 → 新加坡 通过。香港 / 澳门 / 台湾 在这条规则里算作不同地区。",
		sourceId: "blog-cft-transit"
	},
	{
		id: "entry-clock-immigration",
		pillar: "entry",
		titleEn: "240-hour clock starts at the immigration STAMP, not wheels-down",
		titleZh: "240 小时从盖章那一刻起算，不是落地",
		bodyEn: "Land at 23:00, clear immigration at 00:30 = you've already lost a day. Many travellers miscalculate and overstay.",
		bodyZh: "23:00 落地、0:30 通关 = 第一天就少掉一大半。常见误算导致超期滞留。",
		sourceId: "blog-cft-transit"
	},
	{
		id: "entry-digital-card",
		pillar: "entry",
		titleEn: "Digital arrival card mandatory since 2025-11; airlines don't tell you",
		titleZh: "2025-11 起强制线上申报入境卡；航司不会提醒",
		bodyEn: "Fill the NIA digital card (s.nia.gov.cn) within 72 hours before arrival. Skipping it sends you to a secondary desk that adds 20–40 minutes at the airport.",
		bodyZh: "抵达前 72 小时内在国家移民管理局官网（s.nia.gov.cn）填好。没填到了会被转到二次受理台，多花 20–40 分钟。",
		sourceId: "blog-smartsh-faq"
	},
	{
		id: "entry-wrong-queue",
		pillar: "entry",
		cityScope: ["beijing", "shanghai"],
		titleEn: "Use the dedicated TWOV counter — wrong queue = +30 min",
		titleZh: "走过境免签（TWOV）专用通道——排错队多 30 分钟",
		bodyEn: "240-hour transit travellers must use the TWOV counter, not general immigration. Pudong T2 marks it clearly; Beijing T3 barely labels it — look for the small \"Visa-Free Transit\" sign.",
		bodyZh: "过境免签必须走 TWOV 专用通道。浦东 T2 标识清楚；北京 T3 标牌很小，认准 \"Visa-Free Transit\" / \"过境免签\"。",
		sourceId: "blog-cft-transit"
	},
	{
		id: "entry-extension-fail",
		pillar: "entry",
		titleEn: "Visa-free extensions almost always rejected — apply 8+ days early",
		titleZh: "免签延期几乎都拒——非要试就提前 8 天以上",
		bodyEn: "SmartShanghai staff tried — rejected for \"insufficient reason\". Processing takes up to 7 working days, so you must apply at least 8 days before expiry. Plan your trip length up front.",
		bodyZh: "SmartShanghai 编辑亲测被拒，理由 \"insufficient reason\"。审批最长 7 个工作日，要试至少提前 8 天。出发前就把行程时长定好。",
		sourceId: "blog-smartsh-faq"
	},
	{
		id: "entry-overstay-ban",
		pillar: "entry",
		titleEn: "Overstay penalty = entry ban, not just a fine",
		titleZh: "超期滞留：罚款 + 禁入，不是只罚款",
		bodyEn: "Overstays beyond a few days trigger a 1–5 year re-entry ban PLUS fines from CNY 500/day. Don't gamble on the last day.",
		bodyZh: "超期几天可能被禁入境 1–5 年，外加每天 500 起的罚款。最后一天千万别赌。",
		sourceId: "blog-cft-transit"
	},
	{
		id: "entry-unlicensed-accom",
		pillar: "entry",
		titleEn: "Unlicensed guesthouses / Airbnb-style hosts can't legally take foreign guests",
		titleZh: "无证民宿 / Airbnb 不能合法接待外国客人",
		bodyEn: "Chinese law requires accommodation to register foreign guests with police. Budget guesthouses and many Airbnb listings lack the licence. Both you and the host face fines.",
		bodyZh: "法律要求住宿登记外国客人到当地派出所。便宜民宿和大量 Airbnb 没这资质。出事住客和房东都要罚款。",
		sourceId: "blog-thechinajourney"
	},
	{
		id: "entry-police-register-24h",
		pillar: "entry",
		titleEn: "Private accommodation: register with police within 24h",
		titleZh: "住私人住所：24 小时内派出所登记",
		bodyEn: "Hotels do this for you automatically. At an Airbnb / private rental, you OR your host must register at the local police station (paichusuo) within 24 hours of check-in. Failure is a fine for both parties.",
		bodyZh: "酒店会自动帮你登记。住 Airbnb / 朋友家：你或房东必须 24 小时内到属地派出所做\"境外人员临时住宿登记\"。漏了双方都罚。",
		sourceId: "blog-thechinajourney"
	},
	{
		id: "transport-bj-tap-lanes",
		pillar: "transport",
		cityScope: ["beijing"],
		titleEn: "Beijing Metro tap-and-go: only at end-of-row gate lanes",
		titleZh: "北京地铁外卡刷闸：只有每排尽头那台闸机能刷",
		bodyEn: "Since 2024-09 all 490 stations support contactless Visa/Mastercard, but the international-card turnstile is at a specific lane (usually the end of the row). Tapping a domestic-only gate just rejects.",
		bodyZh: "2024-09 起全 490 站支持外卡刷闸，但只有指定闸机（通常每排尽头那一台）能用。其他闸机刷外卡直接拒。",
		sourceId: "bj-subway-tap-2024"
	},
	{
		id: "transport-alipay-qr-percity",
		pillar: "transport",
		titleEn: "Alipay transit QR: must activate per city",
		titleZh: "Alipay 公交码：每个城市要单独开通",
		bodyEn: "Activating Beijing's transit code does NOT activate Shanghai / Guangzhou / Shenzhen. Open the Transport tab, pick the target city, and activate before reaching the turnstile.",
		bodyZh: "在北京开通的公交码到上海 / 广州 / 深圳 都不能用。先在 Alipay 出行 tab 选目标城市重新开通，再去过闸。",
		sourceId: "blog-cgl-publictransport"
	},
	{
		id: "transport-alipay-qr-5min",
		pillar: "transport",
		titleEn: "Alipay transit QR expires in 5 minutes — regenerate at the gate",
		titleZh: "Alipay 公交码 5 分钟过期——临过闸现刷",
		bodyEn: "If you generated the code while walking and 5+ minutes passed, the turnstile rejects it. Regenerate immediately before scanning.",
		bodyZh: "提前生成的码 5 分钟会失效。走路时间一长就过期，临到闸前再刷一次。",
		sourceId: "blog-cgl-publictransport"
	},
	{
		id: "transport-12306-verify-3-7d",
		pillar: "transport",
		titleEn: "12306 passport verification takes 3–7 days — last-minute booking fails",
		titleZh: "12306 护照人工审核 3–7 天——临时买票来不及",
		bodyEn: "Online passport verification at 12306.cn requires a passport photo + selfie holding the passport. Processing: typically 3–5 days, up to 7 in peak season. New 12306 accounts can't book trains for next-day travel. Trip.com verifies in 1–2 hours and is the practical fallback.",
		bodyZh: "12306 上传护照 + 手持护照自拍后人工审，旺季 3–5 天，最长 7 天。新注册账号买不到次日票。Trip.com 1–2 小时审完，是常用备胎。",
		sourceId: "blog-cgl-train"
	},
	{
		id: "transport-no-passport-machines",
		pillar: "transport",
		titleEn: "Self-service ticket machines reject passports — go to staffed window",
		titleZh: "自助取票机不识别护照——去人工窗口",
		bodyEn: "Auto-collection machines only read Chinese ID cards. Foreign passport holders must queue at staffed windows. At Beijing West / Shanghai Hongqiao that's 20–30 min on a busy day.",
		bodyZh: "自助取票机只刷二代证，护照不识别。外国旅客必须排人工窗口。北京西 / 虹桥高峰要排 20–30 分钟。",
		sourceId: "blog-cgl-train"
	},
	{
		id: "transport-12306-group-verify",
		pillar: "transport",
		titleEn: "Group bookings on 12306: each passport needs its own 3–7 day verification",
		titleZh: "12306 给家人订票：每本护照都要走 3–7 天审核",
		bodyEn: "Adding extra passengers to your 12306 booking means each one's passport runs a separate verification cycle. Family of 4 = all 4 passports must clear before any tickets issue. Use Trip.com for groups.",
		bodyZh: "12306 给家人添乘车人：每本护照都要单独审一次。一家四口，四本护照都过了才能出票。家庭出行直接用 Trip.com。",
		sourceId: "blog-cgl-train"
	},
	{
		id: "transport-bj-stations",
		pillar: "transport",
		cityScope: ["beijing"],
		titleEn: "Beijing has 5+ rail stations — book the right one",
		titleZh: "北京有 5+ 个火车站——订票要看清是哪个",
		bodyEn: "Beijing main, West, South, North, Chaoyang. Different stations are 30–60 min apart by metro. Confirm the specific station name when booking, not just \"Beijing\".",
		bodyZh: "北京站、北京西、北京南、北京北、北京朝阳——彼此地铁要 30–60 分钟。订票时看清具体哪个站，不是只看 \"北京\"。",
		sourceId: "blog-cgl-train"
	},
	{
		id: "transport-bj-t3-touts",
		pillar: "transport",
		cityScope: ["beijing"],
		titleEn: "Black taxi touts at Capital T3 information desk — 3–4× meter",
		titleZh: "首都 T3 询问台附近的黑车——3–4 倍打表价",
		bodyEn: "Men posing as helpers near the T3 taxi info desk single out foreign-looking travellers and quote 3–4× meter. Legitimate Beijing taxis show \"Jing B\" plates. Anyone who approaches you first isn't legit — walk to the official taxi queue.",
		bodyZh: "T3 询问台附近有人冒充工作人员专挑老外报 3–4 倍价。正规北京出租车牌是 \"京 B\"。主动凑上来的都不是正规的，走到官方出租车排队点。",
		sourceId: "blog-flyertalk-bjtaxi"
	},
	{
		id: "transport-gz-station-touts",
		pillar: "transport",
		cityScope: ["guangzhou"],
		titleEn: "Black taxi touts at Guangzhou South / East stations — 3–5× meter",
		titleZh: "广州南站 / 东站门口黑车——3–5 倍打表价",
		bodyEn: "Touts work the main exits. Use DiDi from the in-station app pickup zone, or walk all the way past the touts to the official metered taxi rank.",
		bodyZh: "南站 / 东站出口有大量拉客的。从站内 DiDi 上车点叫车，或者一直走到官方出租车排队点（穿过所有拉客的）。",
		sourceId: "blog-beforeyougo-gz"
	},
	{
		id: "transport-didi-chuxing-app",
		pillar: "transport",
		titleEn: "Use DiDi Chuxing app, NOT \"DiDi Rider\" international",
		titleZh: "用 \"DiDi Chuxing\" 不是 \"DiDi Rider\" 国际版",
		bodyEn: "DiDi Rider international has limited mainland coverage. DiDi Chuxing (mainland version) has a full English UI, broader vehicles, and accepts Alipay / WeChat with foreign cards reliably.",
		bodyZh: "国际版 \"DiDi Rider\" 在大陆覆盖差。装 \"DiDi Chuxing\"（大陆版），有英文界面，车多，外卡 Alipay / 微信付款都稳。",
		sourceId: "blog-wise-didi"
	},
	{
		id: "transport-sz-octopus-no",
		pillar: "transport",
		cityScope: ["shenzhen"],
		titleEn: "Octopus card does NOT work on Shenzhen Metro",
		titleZh: "八达通在深圳地铁不能用",
		bodyEn: "Hong Kong tourists assume Octopus works — it doesn't on Shenzhen Metro. Options: (1) Alipay transit QR activated for Shenzhen; (2) Shenzhen Tong physical card (CNY 20 deposit); (3) \"Hu Tong Xing\" dual-card sold in Shenzhen for CNY 68 — has both Octopus (HKD) and Shenzhen Tong (CNY) purses, each topped up separately.",
		bodyZh: "港客以为八达通能用——深圳地铁不收。三个选项：(1) Alipay 公交码开通深圳；(2) 深圳通实体卡（押金 ¥20）；(3) 深圳卖的 \"互通行\" 联名卡 ¥68，里面是八达通（HKD）+ 深圳通（CNY）两个钱包，要各自分别充值。",
		sourceId: "eyeshenzhen-octopus-interop"
	},
	{
		id: "transport-sh-metro-refund-window",
		pillar: "transport",
		cityScope: ["shanghai"],
		titleEn: "Shanghai metro refunds: only 11:00–14:00 at pink service desk",
		titleZh: "上海地铁退票：只在粉色服务台 11:00–14:00 受理",
		bodyEn: "Bought the wrong ticket from a vending machine? Refunds processed only at pink service counters during 11:00–14:00 daily. Outside those hours = no refund. Bring the original ticket and your passport.",
		bodyZh: "在自动售票机买错票？只有粉色服务台 11:00–14:00 退。错过这个窗口就没办法。带上原票和护照。",
		sourceId: "blog-travelchinatips-shmetro"
	},
	{
		id: "transport-sh-yellow-white-taxi",
		pillar: "transport",
		cityScope: ["shanghai"],
		titleEn: "Shanghai street taxi: stick to yellow (Qiangsheng) or white (Jinjiang)",
		titleZh: "上海路边打车：只上黄色（强生）或白色（锦江）",
		bodyEn: "Other liveries (red, dark blue, etc.) are smaller companies with weaker accountability. DiDi is preferable; if hailing on the street, only flag yellow or white.",
		bodyZh: "其他颜色（红 / 深蓝）是小公司，出问题难追。优先 DiDi；非要路边打就只挥黄的或白的。",
		sourceId: "blog-travelchinawith-taxi"
	},
	{
		id: "food-veg-pork-stock",
		pillar: "food",
		titleEn: "\"Vegetarian\" dishes often cooked in pork stock or lard",
		titleZh: "素菜常用猪骨汤或猪油烹制",
		bodyEn: "Ordering a vegetable dish at a regular restaurant doesn't make it vegetarian — many are blanched in pork-bone broth or stir-fried in lard. Only Buddhist vegetarian restaurants (素食 Su Shi) reliably skip pork — but they use seitan (pure gluten) for mock meats, a separate problem for coeliacs.",
		bodyZh: "在普通餐厅点 \"素菜\" 不等于真素：多用猪骨汤焯水或猪油下锅。只有挂 \"素食\" 牌子的佛教素菜馆才稳没猪——但它们用面筋（纯麸质）做素肉，麸质不耐受要避开。",
		sourceId: "blog-alittleadrift-veg"
	},
	{
		id: "food-soy-wheat",
		pillar: "food",
		titleEn: "Soy sauce contains wheat — \"no soy\" rarely eliminates gluten",
		titleZh: "酱油含小麦——\"不放酱油\" 通常不能完全去麸",
		bodyEn: "酱油 jiangyou contains wheat and is in nearly every wok dish. Asking for \"no soy sauce\" usually means less, not none. Truly gluten-free eating in China requires steamed dishes ordered in writing to the kitchen.",
		bodyZh: "酱油含小麦，几乎每道炒菜里都有。说 \"少放\" 厨房会少放，但很难完全没有。真要无麸质：点蒸菜，给厨房写中文条子说明。",
		sourceId: "blog-sinotales-allergies"
	},
	{
		id: "food-hidden-shrimp",
		pillar: "food",
		titleEn: "Dried shrimp / shrimp paste hidden in non-seafood dishes",
		titleZh: "虾皮 / 虾酱常作为提鲜底料藏在非海鲜菜里",
		bodyEn: "Dried shrimp (虾皮) and shrimp paste (虾酱) are routinely added to vegetable stir-fries, congee, and soups as flavour enhancers. Menu shows zero seafood. Show a Chinese-language allergy card directly to KITCHEN staff, not just the waiter.",
		bodyZh: "虾皮和虾酱常被加进炒青菜、粥、汤里提鲜，菜名上完全看不出。把过敏卡直接拿到后厨给厨师看，不要只给服务员。",
		sourceId: "blog-sinotales-allergies"
	},
	{
		id: "food-shared-wok",
		pillar: "food",
		titleEn: "Shared woks = cross-contamination even when staff understand the allergy",
		titleZh: "共用炒锅 = 即使厨师懂过敏也会交叉污染",
		bodyEn: "Traditional kitchens use 1–2 woks for everything, rinsed only with hot water between dishes. Severe allergies need restaurants with visibly separated cooking equipment.",
		bodyZh: "传统厨房就 1–2 口炒锅做所有菜，间隙只是热水冲一下。严重过敏要找看得见专用厨具的餐厅。",
		sourceId: "blog-travelchinawith-allergies"
	},
	{
		id: "food-tea-house-scam",
		pillar: "food",
		cityScope: [
			"beijing",
			"shanghai",
			"guangzhou"
		],
		titleEn: "Tea house scam: \"practice English\" → CNY 500–5000 bill",
		titleZh: "茶馆骗局：\"想练英语\" → 账单 ¥500–5000",
		bodyEn: "Documented at Wangfujing / Houhai (BJ), Nanjing Road / People's Park (SH), Shamian Island (GZ). The new \"friend\" disappears; staff block exits until payment. If you walk in with strangers, demand to see a menu with prices BEFORE sitting down.",
		bodyZh: "经典骗局：王府井 / 后海（北京）、南京路 / 人民公园（上海）、沙面（广州）有人凑上来 \"想练英语\"，带你进茶馆，新朋友溜了，账单 ¥500–5000，不付不让走。和陌生人进店前必须先看带价格的菜单。",
		sourceId: "blog-chinamike"
	},
	{
		id: "food-short-change",
		pillar: "food",
		cityScope: [
			"beijing",
			"shanghai",
			"guangzhou"
		],
		titleEn: "Tourist-area restaurants short-change by CNY 20–100",
		titleZh: "景区餐厅找零差 ¥20–100",
		bodyEn: "Documented near Shamian (GZ), Yu Garden (SH), Wangfujing (BJ). Count change immediately; demand an itemised receipt (发票 fapiao) before paying.",
		bodyZh: "沙面（广州）、豫园（上海）、王府井（北京）景区餐厅常少找零。当场清点，付款前先要发票。",
		sourceId: "blog-beforeyougo-gz"
	},
	{
		id: "food-tap-water",
		pillar: "food",
		titleEn: "Tap water requires boiling — even in 4-star hotels",
		titleZh: "自来水必须烧开——四星酒店也一样",
		bodyEn: "All four cities' tap water needs boiling before drinking. Hotel rooms include a kettle or filtered dispenser. Ice in budget restaurants may be tap-water-based. Bottled water 2–5 CNY for 550 ml.",
		bodyZh: "北上广深的自来水都要烧开再喝。酒店都有烧水壶或饮水机。便宜餐厅的冰块可能是生水做的。瓶装水 ¥2–5 / 550ml。",
		sourceId: "blog-thechinajourney"
	},
	{
		id: "food-canton-fair",
		pillar: "food",
		cityScope: ["guangzhou"],
		titleEn: "Canton Fair (Apr / Oct): restaurant prices +30–60%, fake bookings",
		titleZh: "广交会（4 月 / 10 月）：餐厅涨价 30–60%，假预订平台",
		bodyEn: "Bi-annual Canton Fair brings 200,000+ trade visitors; Pazhou and Tianhe restaurant supply gets overwhelmed and prices spike 30–60%. Fake reservation platforms ask for deposits — book only via Dianping (大众点评) or Meituan.",
		bodyZh: "一年两次广交会 20 万 + 商务客；琶洲、天河餐厅供给紧张，价格涨 30–60%。出现山寨预订平台收押金。订餐只用大众点评或美团。",
		sourceId: "blog-beforeyougo-gz"
	},
	{
		id: "emerg-taxi-vs-ambulance",
		pillar: "emergency",
		titleEn: "Taxi to hospital is faster than 120 ambulance for non-spinal cases",
		titleZh: "非脊柱伤的紧急情况，打车比 120 救护车快",
		bodyEn: "120 ambulances aren't equipped to Western paramedic standards and average 20+ min in urban traffic. Long-term expats consistently say: for non-spinal emergencies, take a taxi to the nearest 3A hospital.",
		bodyZh: "120 救护车配置达不到欧美急救水平，城市交通里平均 20 分钟以上。长期住中国的老外一致建议：非脊柱伤就直接打车去最近的三甲医院更快。",
		sourceId: "blog-thechinaguide-medical"
	},
	{
		id: "emerg-cash-deposit",
		pillar: "emergency",
		titleEn: "Public hospital admission needs CNY 5K–20K cash deposit upfront",
		titleZh: "公立医院住院前要先交 ¥5K–20K 押金",
		bodyEn: "Beyond emergency stabilisation, hospitalisation requires a CNY 5,000–20,000 deposit BEFORE treatment. Ambulance fees (~CNY 7/km, CNY 80/h waiting) also billed upfront. Most travel insurance reimburses afterwards — verify your insurer's direct-billing hospital list before flying.",
		bodyZh: "急救稳定之后要住院 = 先交 ¥5,000–20,000 押金才治疗。救护车费用约 ¥7 / 公里 + ¥80 / 小时等候费也得先付。大多数旅行保险是事后报销——出发前先查保险公司有没有合作的直付医院。",
		sourceId: "blog-expatden-shhospital"
	},
	{
		id: "emerg-medical-card",
		pillar: "emergency",
		cityScope: ["beijing", "shanghai"],
		titleEn: "Public hospitals: get a Medical Card (医疗卡) before any appointment",
		titleZh: "公立医院：先在挂号处办 \"医疗卡 / 就诊卡\"",
		bodyEn: "New patients can't walk in directly — first get a card at the registration desk: passport + CNY 50, takes 15–20 min. Skipping this step is a common foreigner mistake.",
		bodyZh: "新病人不能直接挂号——先到挂号处办就诊卡：护照 + ¥50，15–20 分钟。直接走到诊室是常见错误。",
		sourceId: "blog-expatden-shhospital"
	},
	{
		id: "emerg-intl-cost",
		pillar: "emergency",
		cityScope: ["beijing", "shanghai"],
		titleEn: "International hospital departments cost 6–12× standard rates",
		titleZh: "国际部 / 高端私立 = 普通公立 6–12 倍",
		bodyEn: "Beijing United Family / PUMCH international wing / Raffles Shanghai have English-speaking staff but outpatient registration alone is CNY 300–600 vs CNY 10–30 at standard public departments. Without direct-billing insurance, one visit can be CNY 2,000–5,000+.",
		bodyZh: "和睦家 / 协和国际部 / 上海莱佛士 有英语医生，但光挂号费 ¥300–600，普通公立才 ¥10–30。没有直付国际保险，一次就诊轻松 ¥2,000–5,000+。",
		sourceId: "blog-internationalinsurance"
	},
	{
		id: "emerg-western-meds",
		pillar: "emergency",
		titleEn: "Most Western prescriptions unavailable — bring your own + 20% extra",
		titleZh: "西药品牌药大陆基本买不到——自带 + 多带 20%",
		bodyEn: "Chinese pharmacies don't stock most Western brand-name medications. Controlled substances (some painkillers, ADHD drugs, anxiety meds) are restricted and may be confiscated at customs without a physician's letter. Bring full supply in original labelled bottles.",
		bodyZh: "国内药店多数西药品牌药没有。管制药（部分止痛、ADHD、焦虑用药）受严控，没有医生证明海关可能没收。装在原瓶里带够，多带 20% 备用。",
		sourceId: "blog-thechinajourney"
	},
	{
		id: "emerg-bj-999",
		pillar: "emergency",
		cityScope: ["beijing"],
		titleEn: "Beijing has 3 emergency numbers — 999 sometimes faster than 120",
		titleZh: "北京 3 套急救号——999（红十字）有时比 120 快",
		bodyEn: "Beijing: 120 (public emergency), 999 (Red Cross / private ambulance, faster in some districts), 110 (police). US Embassy medical assistance +86-10-8531-4000. Beijing United 24h ER +86-10-5927-7120. PUMCH 24h ER +86-10-69155288.",
		bodyZh: "北京：120 公立急救、999 红十字 / 民营（部分区比 120 快）、110 公安。美国使馆医疗求助 +86-10-8531-4000；北京和睦家 24h 急诊 +86-10-5927-7120；协和 24h 急诊 +86-10-69155288。",
		sourceId: "bj-medical-guide-quickservices"
	}
];
function pitfallsForPillar(pillar, cityId) {
	return pitfalls.filter((p) => {
		if (p.pillar !== pillar) return false;
		if (!p.cityScope) return true;
		if (!cityId) return true;
		return p.cityScope.includes(cityId);
	});
}
function pitfallSourceIds(pillar, cityId) {
	const items = pillar ? pitfallsForPillar(pillar, cityId) : pitfalls;
	return Array.from(new Set(items.map((p) => p.sourceId)));
}
//#endregion
//#region src/data/transport.ts
var CITY_LABELS = {
	beijing: {
		en: "Beijing",
		zh: "北京"
	},
	shanghai: {
		en: "Shanghai",
		zh: "上海"
	},
	guangzhou: {
		en: "Guangzhou",
		zh: "广州"
	},
	shenzhen: {
		en: "Shenzhen",
		zh: "深圳"
	}
};
var railBooking = {
	registration: {
		en: "Register at 12306.cn/en with passport. Email magic link OR Chinese mobile SMS. Online auto-verify; if it fails, upload passport + selfie (3-5 working days) or visit any station counter.",
		zh: "在 12306.cn/en 用护照注册：邮箱激活链接 / 国内手机短信。自动认证失败可上传护照+自拍人工审 3-5 工作日，或到车站窗口现场办。",
		sourceId: "rail-12306-faq"
	},
	payment: {
		en: "12306 English portal accepts Visa, Mastercard, JCB, Diners Club, UnionPay; Alipay/WeChat referenced in the central government expat guide.",
		zh: "12306 英文版接受 Visa/MC/JCB/Diners/银联；央政府外籍生活指南还提到支付宝/微信支付。",
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
};
var cityTransport = [
	{
		cityId: "beijing",
		cityEn: "Beijing",
		cityZh: "北京",
		airports: [{
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
					routeZh: "到达层官方出租车排队点；打表",
					costCNY: "100–150",
					timeMin: "40–80",
					paymentEn: "Cash + Alipay/WeChat; foreign cards inconsistent",
					paymentZh: "现金 + 支付宝/微信；外卡支持不稳",
					sourceId: "beijing-airport-services"
				}
			]
		}, {
			code: "PKX",
			nameEn: "Daxing International (PKX)",
			nameZh: "大兴国际机场",
			options: [{
				kind: "fastest",
				routeEn: "Daxing Airport Express → Caoqiao (transfer Line 10/7)",
				routeZh: "大兴机场线直达草桥（换 10/7 号线）",
				costCNY: "35",
				timeMin: "~19",
				paymentEn: "5-network tap-to-ride",
				paymentZh: "5 大外卡刷卡",
				sourceId: "beijing-daxing-final-train"
			}, {
				kind: "cheapest",
				routeEn: "Daxing Airport shuttle bus to Beijing/West Railway Station",
				routeZh: "机场巴士至北京站/北京西站",
				costCNY: "40",
				timeMin: "70–100",
				paymentEn: "Cash",
				paymentZh: "现金",
				sourceId: "beijing-airport-services"
			}]
		}],
		metro: {
			summaryEn: "All 29 lines / 523 stations: Visa, Mastercard, UnionPay, JCB, Amex tap-to-ride at every gate (since 2025-06-15). World's first metro to support all 5 networks.",
			summaryZh: "全 29 线 / 523 站：Visa/MC/UnionPay/JCB/Amex 全部支持闸机刷卡，2025-06-15 起。全球首个支持 5 大卡组织全网刷卡的地铁。",
			sourceId: "beijing-subway-five-cards"
		},
		rideHail: {
			en: "DiDi accepts foreign phone + Visa/Mastercard with English UI; in-app 24/7 English customer service. Take official taxi queue at airport, never solicitations inside terminal.",
			zh: "DiDi 接受外国手机号 + Visa/MC 国际信用卡，英文界面，应用内 24 小时英语客服；机场只走官方排队点，不要在到达层跟拉客的走。",
			sourceId: "beijing-airport-services"
		},
		pitfalls: [{
			en: "T1 is not on Capital Airport Express. T2/T3 only — confirm terminal before boarding.",
			zh: "首都机场线只到 T2/T3，不到 T1。上车前先确认航站楼。",
			sourceId: "beijing-airport-express"
		}, {
			en: "PEK and PKX are 80 km apart — confirm IATA code before transit.",
			zh: "首都（PEK）与大兴（PKX）相距 80 公里，安排接送时先确认 IATA 代码。",
			sourceId: "beijing-daxing-final-train"
		}]
	},
	{
		cityId: "shanghai",
		cityEn: "Shanghai",
		cityZh: "上海",
		airports: [{
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
		}, {
			code: "SHA",
			nameEn: "Hongqiao International (SHA)",
			nameZh: "虹桥国际机场",
			options: [{
				kind: "fastest",
				routeEn: "Metro Line 10 from T1 / Lines 2/10/17 from T2",
				routeZh: "T1 走 10 号线 / T2 走 2、10、17 号线",
				costCNY: "5–7",
				timeMin: "25–35",
				paymentEn: "5-network tap-to-ride",
				paymentZh: "5 大卡组织刷卡",
				sourceId: "shanghai-metro-five-cards"
			}]
		}],
		metro: {
			summaryEn: "All 21 lines / 517 stations / 896 km: 5 networks + e-CNY tap-to-ride (since 2025-06-28). Card must support ODA. UnionPay channel takes priority on dual-brand cards.",
			summaryZh: "全 21 线 / 517 站 / 896 km：5 大卡 + 数字人民币闸机刷卡（2025-06-28 起）。卡需支持 ODA 离线认证；双标卡优先走银联通道。",
			sourceId: "shanghai-metro-five-cards"
		},
		rideHail: {
			en: "DiDi accepts foreign phone and credit card. Official taxi queue at PVG arrivals; metered fare ~CNY 150-200 to city centre.",
			zh: "DiDi 接受外国手机号和信用卡。浦东到达层有官方出租车排队点，打表到市区约 ¥150-200。",
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
				zh: "不支持 ODA 离线认证的卡会被闸机拒收，备点现金。",
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
		airports: [{
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
		}],
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
		pitfalls: [{
			en: "T3 opened 2025-10-30. Some apps still show old terminal assignments — verify on the airline's confirmation.",
			zh: "T3 是 2025-10-30 才启用，部分 app 仍按老航站楼分配，订票后看航司原文确认。",
			sourceId: "gz-baiyun-t3-airport"
		}, {
			en: "Metro Line 3 doesn't reach T3 directly — shuttle bus from Gaozeng adds 20–30 min.",
			zh: "地铁 3 号线不直达 T3，要从高增换接驳巴士，多加 20-30 分钟。",
			sourceId: "gz-baiyun-t3-airport"
		}]
	},
	{
		cityId: "shenzhen",
		cityEn: "Shenzhen",
		cityZh: "深圳",
		airports: [{
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
		}],
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
				zh: "11 号线是快线，跳站较多，上车前先看站点表。",
				sourceId: "sz-baoan-airport-plan"
			},
			{
				en: "Metro gate-level foreign card tap is not yet confirmed citywide — keep cash or prepaid Shenzhen Tong as fallback.",
				zh: "深圳地铁闸机外卡直接刷卡尚未全网，备现金或先去客服中心办深圳通。",
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
//#endregion
//#region src/components/layout/LanguageSwitch.tsx
var OPTIONS = [{
	code: "en",
	label: "EN"
}, {
	code: "zh",
	label: "中文"
}];
function LanguageSwitch() {
	const { lang, setLang } = useLang();
	return /* @__PURE__ */ jsx("div", {
		className: "inline-flex overflow-hidden rounded-full border border-line",
		children: OPTIONS.map((option) => /* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: () => setLang(option.code),
			className: clsx("px-3 py-1 text-xs font-bold uppercase tracking-widest transition", option.code === lang ? "bg-ink text-white" : "bg-white text-muted hover:text-ink"),
			children: option.label
		}, option.code))
	});
}
//#endregion
//#region src/lib/search.ts
var NORMALIZE_PATTERN = /[·,，。.\s/'’\-]+/g;
var normalize$1 = (value) => value.toLowerCase().replace(NORMALIZE_PATTERN, "").trim();
var splitGroup = (value) => (value ?? "").split("/").map((s) => s.trim()).filter(Boolean);
var buildIndex = () => {
	const records = [];
	const seen = /* @__PURE__ */ new Set();
	const push = (record) => {
		const key = `${record.type}|${record.provinceId}|${record.cityId ?? ""}|${normalize$1(record.zh)}|${normalize$1(record.en)}`;
		if (seen.has(key)) return;
		seen.add(key);
		records.push(record);
	};
	atlasData.forEach((province) => {
		push({
			zh: province.zh,
			en: province.name,
			type: "province",
			provinceId: province.id,
			aliases: [
				province.zh,
				province.name,
				province.id
			]
		});
		province.cities.forEach((city) => {
			push({
				zh: city.zh,
				en: city.name,
				type: "city",
				provinceId: province.id,
				cityId: city.id,
				aliases: [
					city.zh,
					city.name,
					city.id,
					city.province
				]
			});
			const museumsZh = splitGroup(city.museumZh);
			const museumsEn = splitGroup(city.museum);
			const museumPairs = Math.max(museumsZh.length, museumsEn.length);
			for (let i = 0; i < museumPairs; i++) {
				const zh = museumsZh[i] ?? museumsEn[i] ?? "";
				const en = museumsEn[i] ?? museumsZh[i] ?? "";
				if (!zh && !en) continue;
				push({
					zh,
					en,
					type: "museum",
					provinceId: province.id,
					cityId: city.id,
					aliases: [zh, en].filter(Boolean)
				});
			}
			city.sites.forEach((siteEn, index) => {
				const siteZh = city.sitesZh[index] ?? siteEn;
				push({
					zh: siteZh,
					en: siteEn,
					type: "site",
					provinceId: province.id,
					cityId: city.id,
					aliases: [siteEn, siteZh]
				});
			});
		});
	});
	provinceHitAreas.forEach((area) => {
		push({
			zh: area.zh,
			en: area.en,
			type: "province",
			provinceId: area.id,
			aliases: [
				area.zh,
				area.en,
				area.id
			]
		});
	});
	Object.entries(provinceAttractionSeed).forEach(([provinceId, attractions]) => {
		attractions.forEach((attraction) => {
			push({
				zh: attraction.zh,
				en: attraction.en,
				type: "site",
				provinceId,
				aliases: [attraction.zh, attraction.en]
			});
		});
	});
	administrativeSearchSeed.forEach((item) => {
		push({
			zh: item.zh,
			en: item.en,
			type: item.type,
			provinceId: item.provinceId,
			cityId: item.cityId,
			aliases: [
				item.zh,
				item.en,
				...item.aliases ?? []
			]
		});
	});
	return records;
};
var searchIndex = buildIndex();
var tokenIndex = searchIndex.map((record) => ({
	record,
	tokens: [
		record.zh,
		record.en,
		...record.aliases
	].map(normalize$1).filter(Boolean)
}));
var getAllRecords = () => searchIndex;
var findBestMatch = (query) => {
	const target = normalize$1(query);
	if (!target) return null;
	let best = null;
	for (const { record, tokens } of tokenIndex) {
		let score = 0;
		if (tokens.some((token) => token === target)) score = 3;
		else if (tokens.some((token) => token.startsWith(target))) score = 2;
		else if (tokens.some((token) => token.includes(target) || target.includes(token))) score = 1;
		if (score > 0 && (!best || score > best.score)) {
			best = {
				record,
				score
			};
			if (score === 3) break;
		}
	}
	return best?.record ?? null;
};
//#endregion
//#region src/components/search/PlaceSearch.tsx
function PlaceSearch() {
	const { t, lang } = useLang();
	const { selectPlace } = useAtlas();
	const [value, setValue] = useState("");
	const [hint, setHint] = useState(null);
	const datalistId = useId();
	const suggestions = useMemo(() => getAllRecords().slice(0, 120), []);
	const submit = (event) => {
		event.preventDefault();
		const record = findBestMatch(value);
		if (!record) {
			setHint(t("searchNoMatch"));
			return;
		}
		selectPlace(record.provinceId, record.cityId ?? null);
		setHint(`${t("searchJumped")} ${lang === "zh" ? record.zh : record.en}`);
		document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ jsxs("form", {
		onSubmit: submit,
		className: "flex flex-1 items-center gap-2",
		children: [
			/* @__PURE__ */ jsx("input", {
				type: "search",
				list: datalistId,
				autoComplete: "off",
				value,
				onChange: (e) => setValue(e.target.value),
				placeholder: t("searchPlaceholder"),
				className: "min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2 text-sm focus:border-ink focus:outline-none"
			}),
			/* @__PURE__ */ jsx("button", {
				type: "submit",
				className: "rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white",
				children: t("searchButton")
			}),
			/* @__PURE__ */ jsx("datalist", {
				id: datalistId,
				children: suggestions.map((record, i) => {
					const primary = lang === "zh" ? record.zh : record.en;
					return /* @__PURE__ */ jsx("option", {
						value: primary,
						label: `${primary} · ${placeTypeLabels[lang][record.type] ?? record.type}`
					}, `${record.provinceId}-${record.cityId ?? ""}-${i}`);
				})
			}),
			hint && /* @__PURE__ */ jsx("span", {
				className: "ml-2 hidden text-xs text-muted lg:inline",
				children: hint
			})
		]
	});
}
//#endregion
//#region src/components/layout/SiteHeader.tsx
var CITY_IDS = [
	"beijing",
	"shanghai",
	"guangzhou",
	"shenzhen"
];
var SECONDARY = [{
	path: "/ask",
	en: "Ask",
	zh: "提问"
}, {
	path: "/share",
	en: "Share",
	zh: "分享"
}];
var navClass = ({ isActive }) => `shrink-0 rounded-full px-3 py-1 font-bold transition ${isActive ? "bg-ink text-white" : "text-ink/80 hover:bg-jade-soft hover:text-jade"}`;
function SiteHeader() {
	const { lang, t } = useLang();
	const isZh = lang === "zh";
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-30 flex flex-col gap-3 border-b border-line bg-paper/85 px-4 py-3 backdrop-blur lg:flex-row lg:items-center",
		children: [
			/* @__PURE__ */ jsxs(Link, {
				to: "/",
				className: "flex shrink-0 items-center gap-2",
				children: [/* @__PURE__ */ jsx("span", {
					className: "grid h-9 w-9 place-items-center rounded-lg bg-ink text-white",
					children: "中"
				}), /* @__PURE__ */ jsxs("span", {
					className: "leading-tight",
					children: [/* @__PURE__ */ jsx("strong", {
						className: "block text-base font-bold",
						children: "China Atlas"
					}), /* @__PURE__ */ jsx("small", {
						className: "block text-xs text-muted",
						children: t("brandSubtitle")
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("nav", {
				className: "-mx-1 flex flex-1 items-center gap-1 overflow-x-auto pb-1 text-sm lg:overflow-visible lg:pb-0",
				children: [
					CITY_IDS.map((id) => /* @__PURE__ */ jsx(NavLink, {
						to: `/city/${id}`,
						className: navClass,
						children: isZh ? CITY_LABELS[id].zh : CITY_LABELS[id].en
					}, id)),
					/* @__PURE__ */ jsx("span", {
						className: "mx-1 h-4 w-px bg-line",
						"aria-hidden": true
					}),
					SECONDARY.map((item) => /* @__PURE__ */ jsx(NavLink, {
						to: item.path,
						className: navClass,
						children: isZh ? item.zh : item.en
					}, item.path))
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center gap-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "hidden md:block md:w-72",
					children: /* @__PURE__ */ jsx(PlaceSearch, {})
				}), /* @__PURE__ */ jsx(LanguageSwitch, {})]
			})
		]
	});
}
//#endregion
//#region src/components/layout/SiteFooter.tsx
function SiteFooter() {
	const { t, lang } = useLang();
	const isZh = lang === "zh";
	return /* @__PURE__ */ jsxs("footer", {
		className: "mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between",
		children: [/* @__PURE__ */ jsx("p", { children: t("footerNote") }), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-4",
			children: [/* @__PURE__ */ jsx(Link, {
				to: "/sources",
				className: "hover:text-jade",
				children: isZh ? "信息来源" : "References"
			}), /* @__PURE__ */ jsx("a", {
				href: "#top",
				className: "hover:text-jade",
				children: t("backToTop")
			})]
		})]
	});
}
//#endregion
//#region src/lib/shapes.ts
var cached = null;
var loadProvinceShapes = () => {
	if (!cached) cached = fetch("/assets/china-province-shapes.json").then((response) => {
		if (!response.ok) throw new Error("Failed to load province shapes");
		return response.json();
	}).then((data) => Object.freeze(data?.provinces ?? {}));
	return cached;
};
var computeUnionViewBox = (shapes, padPercent = .02) => {
	const list = Object.values(shapes);
	if (!list.length) return {
		x: 0,
		y: 0,
		width: 1,
		height: 1
	};
	const left = Math.min(...list.map((s) => s.bounds.left));
	const right = Math.max(...list.map((s) => s.bounds.right));
	const bottom = Math.min(...list.map((s) => s.bounds.bottom));
	const top = Math.max(...list.map((s) => s.bounds.top));
	const width = right - left;
	const height = top - bottom;
	const padX = width * padPercent;
	const padY = height * padPercent;
	return {
		x: left - padX,
		y: -(top + padY),
		width: width + padX * 2,
		height: height + padY * 2
	};
};
var computeFocusTransform = (shape, viewBox, zoomPad = .78) => {
	if (!shape) return {
		tx: 0,
		ty: 0,
		scale: 1
	};
	const b = shape.bounds;
	const provinceCenterX = (b.left + b.right) / 2;
	const provinceCenterY = -(b.top + b.bottom) / 2;
	const provinceWidth = b.right - b.left;
	const provinceHeight = b.top - b.bottom;
	const fitX = viewBox.width / provinceWidth;
	const fitY = viewBox.height / provinceHeight;
	const scale = Math.min(fitX, fitY) * zoomPad;
	const viewCenterX = viewBox.x + viewBox.width / 2;
	const viewCenterY = viewBox.y + viewBox.height / 2;
	return {
		tx: viewCenterX - provinceCenterX * scale,
		ty: viewCenterY - provinceCenterY * scale,
		scale
	};
};
//#endregion
//#region src/hooks/useProvinceShapes.ts
function useProvinceShapes() {
	const [shapes, setShapes] = useState(null);
	useEffect(() => {
		let cancelled = false;
		loadProvinceShapes().then((data) => {
			if (!cancelled) setShapes(data);
		}).catch((error) => {
			console.warn("Province shapes failed to load:", error);
		});
		return () => {
			cancelled = true;
		};
	}, []);
	return shapes;
}
//#endregion
//#region src/components/map/ProvinceShapeLayer.tsx
var labelMap$1 = new Map(provinceHitAreas.map((a) => [a.id, a]));
var TRANSITION$1 = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
var PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";
function ProvinceShapeButton({ shape, active, focused, label, onSelect }) {
	const dimmed = focused && !active;
	const fill = !focused ? "rgba(248,250,247,0.95)" : active ? "rgba(23,112,97,0.18)" : "rgba(248,250,247,0.92)";
	const stroke = !focused ? "rgba(91,104,99,0.55)" : active ? "rgba(23,112,97,1)" : "rgba(24,32,29,0.25)";
	const strokeWidth = active ? 2.2 : .7;
	return /* @__PURE__ */ jsxs("g", {
		tabIndex: dimmed ? -1 : 0,
		role: "button",
		"aria-pressed": active,
		"aria-label": label,
		onClick: (event) => {
			event.stopPropagation();
			onSelect();
		},
		onKeyDown: (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				onSelect();
			}
		},
		className: clsx("cursor-pointer outline-none transition-opacity duration-300", dimmed && "opacity-90"),
		style: { pointerEvents: "all" },
		children: [/* @__PURE__ */ jsx("title", { children: label }), shape.paths.map((d, i) => /* @__PURE__ */ jsx("path", {
			d,
			fill,
			stroke,
			strokeWidth,
			strokeLinejoin: "round",
			vectorEffect: "non-scaling-stroke",
			style: { transition: PATH_TRANSITION }
		}, i))]
	});
}
function ProvinceShapeLayer() {
	const shapes = useProvinceShapes();
	const { lang } = useLang();
	const { selectedProvinceId, selectProvince } = useAtlas();
	const viewBox = useMemo(() => shapes ? computeUnionViewBox(shapes) : null, [shapes]);
	const cssTransform = useMemo(() => {
		if (!shapes || !viewBox || !selectedProvinceId) return "translate(0%, 0%) scale(1)";
		const shape = shapes[selectedProvinceId];
		if (!shape) return "translate(0%, 0%) scale(1)";
		const focus = computeFocusTransform(shape, viewBox);
		return `translate(${((focus.scale - 1) * viewBox.x + focus.tx) / viewBox.width * 100}%, ${((focus.scale - 1) * viewBox.y + focus.ty) / viewBox.height * 100}%) scale(${focus.scale})`;
	}, [
		shapes,
		viewBox,
		selectedProvinceId
	]);
	if (!shapes || !viewBox) return null;
	const focused = Boolean(selectedProvinceId);
	const vb = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
	const ordered = Object.values(shapes).sort((a, b) => a.id === selectedProvinceId ? 1 : b.id === selectedProvinceId ? -1 : 0);
	return /* @__PURE__ */ jsx("div", {
		className: "absolute inset-0 z-10",
		style: {
			transform: cssTransform,
			transformOrigin: "0 0",
			transition: TRANSITION$1
		},
		children: /* @__PURE__ */ jsx("svg", {
			viewBox: vb,
			preserveAspectRatio: "none",
			className: "absolute inset-0 h-full w-full",
			role: "group",
			"aria-label": "China provinces",
			children: ordered.map((shape) => {
				const active = shape.id === selectedProvinceId;
				const label = labelMap$1.get(shape.id);
				return /* @__PURE__ */ jsx(ProvinceShapeButton, {
					shape,
					active,
					focused,
					label: label ? lang === "zh" ? label.zh : label.en : shape.name,
					onSelect: () => selectProvince(active ? null : shape.id)
				}, shape.id);
			})
		})
	});
}
//#endregion
//#region src/components/map/ProvinceLabelLayer.tsx
var labelMap = new Map(provinceHitAreas.map((a) => [a.id, a]));
var TRANSITION = "left 700ms cubic-bezier(0.4, 0, 0.2, 1), top 700ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease, font-size 400ms ease";
var HALO = { textShadow: "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 0 4px rgba(255,255,255,0.85)" };
function ProvinceLabelLayer() {
	const shapes = useProvinceShapes();
	const { lang } = useLang();
	const { selectedProvinceId } = useAtlas();
	const viewBox = useMemo(() => shapes ? computeUnionViewBox(shapes) : null, [shapes]);
	const focus = useMemo(() => {
		if (!shapes || !viewBox || !selectedProvinceId) return {
			tx: 0,
			ty: 0,
			scale: 1
		};
		const shape = shapes[selectedProvinceId];
		return shape ? computeFocusTransform(shape, viewBox) : {
			tx: 0,
			ty: 0,
			scale: 1
		};
	}, [
		shapes,
		viewBox,
		selectedProvinceId
	]);
	if (!shapes || !viewBox) return null;
	const focused = Boolean(selectedProvinceId);
	return /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none absolute inset-0 z-20",
		children: Object.values(shapes).map((shape) => {
			const cx = (shape.bounds.left + shape.bounds.right) / 2;
			const cy = -(shape.bounds.top + shape.bounds.bottom) / 2;
			const zoomedX = cx * focus.scale + focus.tx;
			const zoomedY = cy * focus.scale + focus.ty;
			const leftPct = (zoomedX - viewBox.x) / viewBox.width * 100;
			const topPct = (zoomedY - viewBox.y) / viewBox.height * 100;
			const active = shape.id === selectedProvinceId;
			const dimmed = focused && !active;
			const label = labelMap.get(shape.id);
			const text = label ? lang === "zh" ? label.zh : label.en : shape.name;
			const tiny = shape.id === "hong-kong" || shape.id === "macau";
			return /* @__PURE__ */ jsx("span", {
				className: clsx("absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-bold tracking-tight leading-none", active && "rounded-full bg-jade px-2 py-1 text-sm text-white shadow-lg", !active && !dimmed && !tiny && "text-[10px] text-ink/85", !active && !dimmed && tiny && "text-[8px] text-ink/85", dimmed && "opacity-0"),
				style: {
					left: `${leftPct}%`,
					top: `${topPct}%`,
					transition: TRANSITION,
					...active ? {} : HALO
				},
				children: text
			}, shape.id);
		})
	});
}
//#endregion
//#region src/hooks/useCityViews.ts
var KEY_PREFIX = "chinaAtlas:views:";
var listeners = /* @__PURE__ */ new Set();
var isBrowser = typeof window !== "undefined";
var notify = () => listeners.forEach((listener) => listener());
var readCount = (cityId) => {
	if (!isBrowser) return 0;
	const stored = Number(window.localStorage.getItem(KEY_PREFIX + cityId) ?? 0);
	return Number.isFinite(stored) ? stored : 0;
};
function useRecordCityView() {
	return useCallback((cityId) => {
		if (!isBrowser) return;
		const next = readCount(cityId) + 1;
		window.localStorage.setItem(KEY_PREFIX + cityId, String(next));
		notify();
	}, []);
}
//#endregion
//#region src/components/map/ProvinceInfoCard.tsx
function ProvinceInfoCard() {
	const { selectedProvinceId, province, selectPlace } = useAtlas();
	const { lang, t } = useLang();
	const recordView = useRecordCityView();
	if (!selectedProvinceId || !province) return null;
	const attractions = provinceAttractionSeed[selectedProvinceId] ?? [];
	const hasCities = province.cities.length > 0;
	const hasAttractions = attractions.length > 0;
	const goToCity = (cityId) => {
		recordView(cityId);
		selectPlace(province.id, cityId);
		document.querySelector("#atlas")?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	return /* @__PURE__ */ jsxs("aside", {
		className: "absolute bottom-3 left-3 z-20 flex max-h-[78%] w-[300px] flex-col gap-3 overflow-auto rounded-xl border border-line bg-white/95 p-4 shadow-xl backdrop-blur animate-[fadeUp_400ms_ease-out]",
		"aria-label": lang === "zh" ? province.zh : province.name,
		children: [
			/* @__PURE__ */ jsxs("header", { children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold uppercase tracking-widest text-muted",
					children: t("currentView")
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "text-xl font-bold leading-tight",
					children: lang === "zh" ? province.zh : province.name
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xs text-muted",
					children: lang === "zh" ? province.name : province.zh
				})
			] }),
			hasCities && /* @__PURE__ */ jsxs("section", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ jsx("h4", {
					className: "text-xs font-bold uppercase tracking-widest text-muted",
					children: t("cityProfiles")
				}), /* @__PURE__ */ jsx("ul", {
					className: "flex flex-col gap-1",
					children: province.cities.map((city) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => goToCity(city.id),
						className: "flex w-full flex-col rounded-md px-2 py-1.5 text-left transition hover:bg-paper",
						children: [/* @__PURE__ */ jsx("strong", {
							className: "text-sm",
							children: lang === "zh" ? city.zh : city.name
						}), /* @__PURE__ */ jsx("span", {
							className: "text-xs text-muted",
							children: lang === "zh" ? city.museumZh || city.museum : city.museum
						})]
					}) }, city.id))
				})]
			}),
			hasAttractions && /* @__PURE__ */ jsxs("section", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ jsx("h4", {
					className: "text-xs font-bold uppercase tracking-widest text-muted",
					children: t("famousAttractions")
				}), /* @__PURE__ */ jsx("ul", {
					className: "flex flex-wrap gap-1",
					children: attractions.map((attraction) => /* @__PURE__ */ jsx("li", {
						className: "rounded-full bg-paper px-2 py-1 text-xs text-muted",
						children: lang === "zh" ? attraction.zh : attraction.en
					}, attraction.zh))
				})]
			}),
			!hasCities && !hasAttractions && /* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted",
				children: t("provinceDataPending")
			})
		]
	});
}
//#endregion
//#region src/components/map/Province3DOverlay.tsx
var Map3D = lazy(() => import("./assets/Map3D-Bz7qnwU1.js"));
function Province3DOverlay() {
	const { selectedProvinceId, province, is3DEnabled } = useAtlas();
	const { lang } = useLang();
	if (!is3DEnabled || !selectedProvinceId) return null;
	const label = province ? lang === "zh" ? province.zh : province.name : selectedProvinceId;
	return /* @__PURE__ */ jsx("div", {
		className: "pointer-events-none absolute inset-0 z-20 grid place-items-center bg-paper/55 backdrop-blur-sm",
		children: /* @__PURE__ */ jsx("div", {
			className: "pointer-events-auto relative h-[80%] w-[60%]",
			children: /* @__PURE__ */ jsx(Suspense, {
				fallback: /* @__PURE__ */ jsx("div", {
					className: "grid h-full place-items-center text-xs text-muted",
					children: "Loading 3D…"
				}),
				children: /* @__PURE__ */ jsx(Map3D, {
					provinceId: selectedProvinceId,
					provinceName: label
				})
			})
		})
	});
}
//#endregion
//#region src/components/map/HeroMap.tsx
var EarthIntro = lazy(() => import("./assets/EarthIntro-DDSGkUby.js"));
var REVEAL_MS = 600;
function HeroMap() {
	const { t, lang } = useLang();
	const { selectedProvinceId, province, is3DEnabled, toggle3D, reset } = useAtlas();
	const focused = Boolean(selectedProvinceId);
	const provinceLabel = province ? lang === "zh" ? province.zh : province.name : "";
	const [introDone, setIntroDone] = useState(false);
	useEffect(() => {
		if (!focused) return;
		const onKey = (event) => {
			if (event.key === "Escape") reset();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [focused, reset]);
	return /* @__PURE__ */ jsxs("section", {
		"aria-label": "China interactive map",
		className: "flex flex-col gap-3",
		children: [focused && /* @__PURE__ */ jsxs("header", {
			className: "flex items-end justify-between",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "text-2xl font-bold leading-tight",
				children: provinceLabel
			}), /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: toggle3D,
				className: "rounded-full border border-line bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink hover:border-jade hover:text-jade",
				children: is3DEnabled ? t("exit3D") : t("viewIn3D")
			})]
		}), /* @__PURE__ */ jsxs("div", {
			"aria-live": "polite",
			className: "relative",
			style: { aspectRatio: "9463 / 6675" },
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0",
					style: {
						opacity: introDone ? 1 : 0,
						transform: introDone ? "scale(1)" : "scale(0.94)",
						transition: `opacity ${REVEAL_MS}ms ease, transform ${REVEAL_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
					},
					children: [
						/* @__PURE__ */ jsx(ProvinceShapeLayer, {}),
						/* @__PURE__ */ jsx(ProvinceLabelLayer, {}),
						/* @__PURE__ */ jsx(ProvinceInfoCard, {}),
						/* @__PURE__ */ jsx(Province3DOverlay, {})
					]
				}),
				!introDone && /* @__PURE__ */ jsx(Suspense, {
					fallback: null,
					children: /* @__PURE__ */ jsx(EarthIntro, { onDone: () => setIntroDone(true) })
				}),
				focused && /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: reset,
					className: "absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90",
					children: t("reset")
				})
			]
		})]
	});
}
//#endregion
//#region src/data/entry-policies.ts
/**
* Source: NIA "List of Countries Covered by Unilateral Visa Exemption Policies"
* URL: https://en.nia.gov.cn/n147418/n147463/c183390/content.html
* Page dated: 2026-02-17 — list of 50 ordinary-passport nationalities, max stay 30 days.
* Eligible purposes per page: business, tourism, visit relatives/friends, exchange, transit.
* Source id in sources.ts: nia-unilateral-list
*/
var unilateralVisaFreeCountries = [
	{
		countryEn: "Andorra",
		countryZh: "安道尔",
		region: "Europe"
	},
	{
		countryEn: "Austria",
		countryZh: "奥地利",
		region: "Europe"
	},
	{
		countryEn: "Belgium",
		countryZh: "比利时",
		region: "Europe"
	},
	{
		countryEn: "Bulgaria",
		countryZh: "保加利亚",
		region: "Europe"
	},
	{
		countryEn: "Croatia",
		countryZh: "克罗地亚",
		region: "Europe"
	},
	{
		countryEn: "Cyprus",
		countryZh: "塞浦路斯",
		region: "Europe"
	},
	{
		countryEn: "Denmark",
		countryZh: "丹麦",
		region: "Europe"
	},
	{
		countryEn: "Estonia",
		countryZh: "爱沙尼亚",
		region: "Europe"
	},
	{
		countryEn: "Finland",
		countryZh: "芬兰",
		region: "Europe"
	},
	{
		countryEn: "France",
		countryZh: "法国",
		region: "Europe"
	},
	{
		countryEn: "Germany",
		countryZh: "德国",
		region: "Europe"
	},
	{
		countryEn: "Greece",
		countryZh: "希腊",
		region: "Europe"
	},
	{
		countryEn: "Hungary",
		countryZh: "匈牙利",
		region: "Europe"
	},
	{
		countryEn: "Iceland",
		countryZh: "冰岛",
		region: "Europe"
	},
	{
		countryEn: "Ireland",
		countryZh: "爱尔兰",
		region: "Europe"
	},
	{
		countryEn: "Italy",
		countryZh: "意大利",
		region: "Europe"
	},
	{
		countryEn: "Latvia",
		countryZh: "拉脱维亚",
		region: "Europe"
	},
	{
		countryEn: "Liechtenstein",
		countryZh: "列支敦士登",
		region: "Europe"
	},
	{
		countryEn: "Luxembourg",
		countryZh: "卢森堡",
		region: "Europe"
	},
	{
		countryEn: "Malta",
		countryZh: "马耳他",
		region: "Europe"
	},
	{
		countryEn: "Monaco",
		countryZh: "摩纳哥",
		region: "Europe"
	},
	{
		countryEn: "Montenegro",
		countryZh: "黑山",
		region: "Europe"
	},
	{
		countryEn: "Netherlands",
		countryZh: "荷兰",
		region: "Europe"
	},
	{
		countryEn: "North Macedonia",
		countryZh: "北马其顿",
		region: "Europe"
	},
	{
		countryEn: "Norway",
		countryZh: "挪威",
		region: "Europe"
	},
	{
		countryEn: "Poland",
		countryZh: "波兰",
		region: "Europe"
	},
	{
		countryEn: "Portugal",
		countryZh: "葡萄牙",
		region: "Europe"
	},
	{
		countryEn: "Romania",
		countryZh: "罗马尼亚",
		region: "Europe"
	},
	{
		countryEn: "Russian Federation",
		countryZh: "俄罗斯",
		region: "Europe"
	},
	{
		countryEn: "Slovakia",
		countryZh: "斯洛伐克",
		region: "Europe"
	},
	{
		countryEn: "Slovenia",
		countryZh: "斯洛文尼亚",
		region: "Europe"
	},
	{
		countryEn: "Spain",
		countryZh: "西班牙",
		region: "Europe"
	},
	{
		countryEn: "Sweden",
		countryZh: "瑞典",
		region: "Europe"
	},
	{
		countryEn: "Switzerland",
		countryZh: "瑞士",
		region: "Europe"
	},
	{
		countryEn: "United Kingdom",
		countryZh: "英国",
		region: "Europe"
	},
	{
		countryEn: "Australia",
		countryZh: "澳大利亚",
		region: "Oceania"
	},
	{
		countryEn: "New Zealand",
		countryZh: "新西兰",
		region: "Oceania"
	},
	{
		countryEn: "Bahrain",
		countryZh: "巴林",
		region: "Asia"
	},
	{
		countryEn: "Brunei Darussalam",
		countryZh: "文莱",
		region: "Asia"
	},
	{
		countryEn: "Japan",
		countryZh: "日本",
		region: "Asia"
	},
	{
		countryEn: "Kuwait",
		countryZh: "科威特",
		region: "Asia"
	},
	{
		countryEn: "Oman",
		countryZh: "阿曼",
		region: "Asia"
	},
	{
		countryEn: "Republic of Korea",
		countryZh: "韩国",
		region: "Asia"
	},
	{
		countryEn: "Saudi Arabia",
		countryZh: "沙特阿拉伯",
		region: "Asia"
	},
	{
		countryEn: "Argentina",
		countryZh: "阿根廷",
		region: "Americas"
	},
	{
		countryEn: "Brazil",
		countryZh: "巴西",
		region: "Americas"
	},
	{
		countryEn: "Canada",
		countryZh: "加拿大",
		region: "Americas"
	},
	{
		countryEn: "Chile",
		countryZh: "智利",
		region: "Americas"
	},
	{
		countryEn: "Peru",
		countryZh: "秘鲁",
		region: "Americas"
	},
	{
		countryEn: "Uruguay",
		countryZh: "乌拉圭",
		region: "Americas"
	}
];
var unilateralPolicy = {
	maxStayDays: 30,
	eligiblePurposes: [
		"business",
		"tourism",
		"visit relatives/friends",
		"exchange",
		"transit"
	],
	sourceId: "nia-unilateral-list"
};
/**
* Source: NIA transit visa-free policy page (2023-10-19) for the country list
* Source: State Council 2025-11-04 announcement for the headline (55 countries, 65 ports, 24 provinces, 240 hours)
* URL: https://en.nia.gov.cn/n147418/n147463/c156094/content.html
* URL: https://english.www.gov.cn/news/202511/04/content_WS69094ae0c6d00ca5f9a07472.html
*
* NIA's 2023-10-19 page lists the country pool used for transit visa-free.
* The State Council 2025-11-04 page confirms the 240-hour upgrade effective 2025-11-05
* but does not enumerate ports or countries; we reference both sources together.
*/
var transitVisaFreeCountries = [
	"Austria",
	"Belgium",
	"Czech Republic",
	"Denmark",
	"Estonia",
	"Finland",
	"France",
	"Germany",
	"Greece",
	"Hungary",
	"Iceland",
	"Italy",
	"Latvia",
	"Lithuania",
	"Luxembourg",
	"Malta",
	"Netherlands",
	"Poland",
	"Portugal",
	"Slovakia",
	"Slovenia",
	"Spain",
	"Sweden",
	"Switzerland",
	"Croatia",
	"Russia",
	"United Kingdom",
	"Ireland",
	"Cyprus",
	"Bulgaria",
	"Romania",
	"Ukraine",
	"Serbia",
	"Bosnia and Herzegovina",
	"Montenegro",
	"North Macedonia",
	"Albania",
	"Monaco",
	"Belarus",
	"United States",
	"Canada",
	"Brazil",
	"Mexico",
	"Argentina",
	"Chile",
	"Australia",
	"New Zealand",
	"South Korea",
	"Japan",
	"Singapore",
	"Brunei",
	"United Arab Emirates",
	"Qatar"
];
/**
* Phase 1 ports — the four cities the product covers, all confirmed at 240 hours
* by the State Council 2025-11-04 announcement (sources.ts: state-council-240h)
* and corroborated by the city-level government English pages.
*/
var phase1TransitPorts = [
	{
		city: "Beijing",
		cityZh: "北京",
		portEn: "Capital International Airport",
		portZh: "首都国际机场",
		province: "Beijing",
		maxHours: 240
	},
	{
		city: "Beijing",
		cityZh: "北京",
		portEn: "Daxing International Airport",
		portZh: "大兴国际机场",
		province: "Beijing",
		maxHours: 240
	},
	{
		city: "Shanghai",
		cityZh: "上海",
		portEn: "Pudong International Airport",
		portZh: "浦东国际机场",
		province: "Shanghai",
		maxHours: 240
	},
	{
		city: "Shanghai",
		cityZh: "上海",
		portEn: "Hongqiao International Airport",
		portZh: "虹桥国际机场",
		province: "Shanghai",
		maxHours: 240
	},
	{
		city: "Guangzhou",
		cityZh: "广州",
		portEn: "Baiyun International Airport",
		portZh: "白云国际机场",
		province: "Guangdong",
		maxHours: 240
	},
	{
		city: "Shenzhen",
		cityZh: "深圳",
		portEn: "Bao'an International Airport",
		portZh: "宝安国际机场",
		province: "Guangdong",
		maxHours: 240
	}
];
var transitPolicy = {
	maxHours: 240,
	effectiveDate: "2025-11-05",
	totalCountries: 55,
	totalPorts: 65,
	provincialRegions: 24,
	thirdCountryRequired: true,
	sourceIds: ["state-council-240h", "nia-transit-list"]
};
var onlineEntryCard = {
	effectiveDate: "2025-11-20",
	free: true,
	alternativesAtPort: ["self-service kiosk", "paper card"],
	sourceIds: ["nia-online-entry-card", "nia-card-fraud-warning"]
};
var unilateralSet = new Set(unilateralVisaFreeCountries.map((c) => c.countryEn));
var transitSet = new Set(transitVisaFreeCountries);
var aliases = {
	"United Kingdom of Great Britain and Northern Ireland": "United Kingdom",
	"UK": "United Kingdom",
	"Russia": "Russian Federation",
	"South Korea": "Republic of Korea",
	"Korea": "Republic of Korea",
	"Brunei": "Brunei Darussalam",
	"USA": "United States",
	"U.S.": "United States",
	"U.S.A.": "United States"
};
var normalize = (name) => aliases[name] ?? name;
function checkEligibility(country) {
	const canonical = normalize(country);
	const unilateral = unilateralSet.has(canonical);
	const transit = transitSet.has(canonical) || transitSet.has(country);
	if (unilateral && transit) return {
		kind: "both",
		unilateralDays: unilateralPolicy.maxStayDays,
		transitHours: transitPolicy.maxHours,
		sourceIds: [unilateralPolicy.sourceId, ...transitPolicy.sourceIds]
	};
	if (unilateral) return {
		kind: "unilateral",
		maxStayDays: unilateralPolicy.maxStayDays,
		sourceId: unilateralPolicy.sourceId
	};
	if (transit) return {
		kind: "transit-only",
		maxHours: transitPolicy.maxHours,
		sourceId: transitPolicy.sourceIds[0]
	};
	return {
		kind: "visa-required",
		applyUrl: "https://www.visaforchina.cn"
	};
}
[
	unilateralPolicy.sourceId,
	...transitPolicy.sourceIds,
	...onlineEntryCard.sourceIds,
	...pitfallSourceIds("entry")
];
//#endregion
//#region src/components/policy/TravelAlerts.tsx
var UNILATERAL_EXPIRY = "2026-12-31";
function daysUntil(dateStr) {
	const target = new Date(dateStr).getTime();
	return Math.max(0, Math.round((target - Date.now()) / 864e5));
}
function TravelAlerts() {
	const { lang } = useLang();
	const alerts = useMemo(() => {
		const days = daysUntil(UNILATERAL_EXPIRY);
		return [
			{
				id: "transit-240h",
				severity: "info",
				titleEn: `240-hour transit visa-free is live`,
				titleZh: "240 小时过境免签已生效",
				bodyEn: `Effective ${transitPolicy.effectiveDate}. Covers ${transitPolicy.totalCountries} countries across ${transitPolicy.totalPorts} ports / ${transitPolicy.provincialRegions} provincial regions. Onward third-country ticket required.`,
				bodyZh: `自 ${transitPolicy.effectiveDate} 起。${transitPolicy.totalCountries} 国可用、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区可活动。须持第三国机票。`,
				sourceId: transitPolicy.sourceIds[0]
			},
			{
				id: "online-entry-card",
				severity: "info",
				titleEn: "Online entry card now available — beware fake sites",
				titleZh: "外国人入境卡已可线上填报，警惕收费山寨网站",
				bodyEn: `Free pre-fill at the official NIA portal since ${onlineEntryCard.effectiveDate}. Kiosk and paper card remain available at the port.`,
				bodyZh: `自 ${onlineEntryCard.effectiveDate} 起在国家移民管理局官网免费预填；未提前填可在口岸设备或纸卡补填。`,
				sourceId: onlineEntryCard.sourceIds[0]
			},
			{
				id: "unilateral-expiry",
				severity: days < 90 ? "warn" : "info",
				titleEn: `Unilateral 30-day visa-free expires in ${days} days`,
				titleZh: `单方面 30 天免签政策剩余 ${days} 天`,
				bodyEn: `Current ${unilateralVisaFreeCountries.length}-country list runs until ${UNILATERAL_EXPIRY}. Re-verify NIA before booking trips after that date.`,
				bodyZh: `当前 ${unilateralVisaFreeCountries.length} 国清单截止 ${UNILATERAL_EXPIRY}。该日之后出行需重新核验 NIA 公告。`,
				sourceId: unilateralPolicy.sourceId
			}
		];
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		id: "travel-alerts",
		"aria-label": "Travel alerts",
		className: "flex flex-col gap-3",
		children: [/* @__PURE__ */ jsx("header", {
			className: "flex items-end justify-between",
			children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
				className: "text-xs font-bold uppercase tracking-widest text-muted",
				children: lang === "zh" ? "政策时效" : "Travel Alerts"
			}), /* @__PURE__ */ jsx("h2", {
				className: "text-2xl font-bold",
				children: lang === "zh" ? "出行前必看的政策动态" : "What changed before you book"
			})] })
		}), /* @__PURE__ */ jsx("ul", {
			className: "grid gap-3 md:grid-cols-3",
			children: alerts.map((alert) => /* @__PURE__ */ jsxs("li", {
				className: clsx("flex flex-col gap-2 rounded-xl border p-4", alert.severity === "warn" ? "border-amber-300 bg-amber-50" : "border-line bg-white"),
				children: [/* @__PURE__ */ jsx("strong", {
					className: "text-sm leading-tight",
					children: lang === "zh" ? alert.titleZh : alert.titleEn
				}), /* @__PURE__ */ jsx("p", {
					className: "text-xs leading-snug text-ink/80",
					children: lang === "zh" ? alert.bodyZh : alert.bodyEn
				})]
			}, alert.id))
		})]
	});
}
//#endregion
//#region src/components/common/PracticalBlock.tsx
var HEADER_LABEL = {
	entry: {
		en: "What to know before landing",
		zh: "落地前要知道的事"
	},
	transport: {
		en: "Practical transport pitfalls",
		zh: "交通实操避坑"
	},
	food: {
		en: "Practical food pitfalls",
		zh: "餐饮实操避坑"
	},
	emergency: {
		en: "Practical medical & emergency pitfalls",
		zh: "医疗 / 紧急实操避坑"
	}
};
function PracticalBlock({ pillar, cityId }) {
	const { lang } = useLang();
	const isZh = lang === "zh";
	const items = pitfallsForPillar(pillar, cityId);
	if (items.length === 0) return null;
	return /* @__PURE__ */ jsxs("section", {
		className: "flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50/40 p-5",
		children: [/* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("span", {
			className: "text-xs font-bold uppercase tracking-widest text-amber-800",
			children: isZh ? HEADER_LABEL[pillar].zh : HEADER_LABEL[pillar].en
		}) }), /* @__PURE__ */ jsx("ul", {
			className: "grid gap-2 md:grid-cols-2",
			children: items.map((p) => /* @__PURE__ */ jsxs("li", {
				className: "flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3",
				children: [/* @__PURE__ */ jsx("strong", {
					className: "text-sm leading-tight",
					children: isZh ? p.titleZh : p.titleEn
				}), /* @__PURE__ */ jsx("p", {
					className: "text-xs leading-relaxed text-ink/80",
					children: isZh ? p.bodyZh : p.bodyEn
				})]
			}, p.id))
		})]
	});
}
//#endregion
//#region src/components/pillar/VisaChecker.tsx
var collator = new Intl.Collator("en");
function VisaChecker() {
	const { lang } = useLang();
	const selectId = useId();
	const [country, setCountry] = useState("");
	const sortedCountries = useMemo(() => [...unilateralVisaFreeCountries].sort((a, b) => collator.compare(lang === "zh" ? a.countryZh : a.countryEn, lang === "zh" ? b.countryZh : b.countryEn)), [lang]);
	const result = country ? checkEligibility(country) : null;
	return /* @__PURE__ */ jsxs("section", {
		id: "entry-visa",
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ jsxs("header", { children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold uppercase tracking-widest text-muted",
					children: lang === "zh" ? "支柱 1" : "Pillar 1"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold",
					children: lang === "zh" ? "入境与签证" : "Entry & Visa"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted",
					children: lang === "zh" ? "选择你的护照国籍，看是否需要签证。所有结论来自国家移民管理局（NIA）和国务院公告。" : "Pick your passport country to see what applies. Every answer cites China's NIA and State Council announcements."
				})
			] }),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-4 rounded-xl border border-line bg-white p-5 md:grid-cols-[260px_1fr]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-3",
					children: [/* @__PURE__ */ jsx("label", {
						htmlFor: selectId,
						className: "text-xs font-bold uppercase tracking-widest text-muted",
						children: lang === "zh" ? "护照国籍" : "Passport country"
					}), /* @__PURE__ */ jsxs("select", {
						id: selectId,
						value: country,
						onChange: (event) => setCountry(event.target.value),
						className: "rounded-lg border border-line bg-paper px-3 py-2 text-sm focus:border-ink focus:outline-none",
						children: [
							/* @__PURE__ */ jsx("option", {
								value: "",
								children: lang === "zh" ? "请选择..." : "Select country..."
							}),
							sortedCountries.map((c) => /* @__PURE__ */ jsx("option", {
								value: c.countryEn,
								children: lang === "zh" ? `${c.countryZh} (${c.countryEn})` : `${c.countryEn} (${c.countryZh})`
							}, c.countryEn)),
							/* @__PURE__ */ jsx("option", {
								disabled: true,
								children: "──────────"
							}),
							/* @__PURE__ */ jsx("option", {
								value: "Other",
								children: lang === "zh" ? "其它（不在免签名单）" : "Other (not on visa-free lists)"
							})
						]
					})]
				}), /* @__PURE__ */ jsx(ResultPanel, { result })]
			}),
			/* @__PURE__ */ jsx(PolicySummary, {}),
			/* @__PURE__ */ jsx(Phase1PortsList, {}),
			/* @__PURE__ */ jsx(PracticalBlock, { pillar: "entry" })
		]
	});
}
function ResultPanel({ result }) {
	const { lang } = useLang();
	if (!result) return /* @__PURE__ */ jsx("div", {
		className: "grid place-items-center rounded-lg border border-dashed border-line p-6 text-sm text-muted",
		children: lang === "zh" ? "请先选择国籍" : "Pick a passport country first."
	});
	if (result.kind === "both") return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-2 rounded-lg bg-jade-soft p-4",
		children: [/* @__PURE__ */ jsx("strong", {
			className: "text-base text-jade",
			children: lang === "zh" ? "两种免签都可用" : "Both visa-free routes available"
		}), /* @__PURE__ */ jsx("p", {
			className: "text-sm",
			children: lang === "zh" ? `单方面免签 ${result.unilateralDays} 天 · 过境免签 ${result.transitHours} 小时（需第三国机票）` : `${result.unilateralDays}-day unilateral visa-free · ${result.transitHours}-hour transit visa-free (third-country onward ticket required).`
		})]
	});
	if (result.kind === "unilateral") return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-2 rounded-lg bg-jade-soft p-4",
		children: [/* @__PURE__ */ jsx("strong", {
			className: "text-base text-jade",
			children: lang === "zh" ? "单方面免签可用" : "Unilateral visa-free"
		}), /* @__PURE__ */ jsx("p", {
			className: "text-sm",
			children: lang === "zh" ? `普通护照可在中国停留至 ${result.maxStayDays} 天，用途含商务、旅游、探亲、交流、过境。` : `Up to ${result.maxStayDays} days for ordinary passports; covers business, tourism, family visit, exchange, transit.`
		})]
	});
	if (result.kind === "transit-only") return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-2 rounded-lg bg-paper p-4",
		children: [/* @__PURE__ */ jsx("strong", {
			className: "text-base",
			children: lang === "zh" ? "可使用过境免签" : "Transit visa-free only"
		}), /* @__PURE__ */ jsx("p", {
			className: "text-sm",
			children: lang === "zh" ? `若行程经第三国，可用 ${result.maxHours} 小时过境免签；其它情况仍需办签证。` : `If transiting via China to a third country, ${result.maxHours} hours visa-free is available. Otherwise apply for a visa.`
		})]
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-2 rounded-lg bg-amber-50 p-4",
		children: [
			/* @__PURE__ */ jsx("strong", {
				className: "text-base text-amber-900",
				children: lang === "zh" ? "需要签证" : "Visa required"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-sm",
				children: lang === "zh" ? "目前免签名单未涵盖该国籍，请前往中国签证申请服务中心办理。" : "Not currently covered by China's visa-free policies. Apply via the official Chinese Visa Application Service Center."
			}),
			/* @__PURE__ */ jsx("a", {
				href: result.applyUrl,
				target: "_blank",
				rel: "noreferrer",
				className: "inline-flex w-fit items-center gap-1 rounded-full bg-ink px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90",
				children: "visaforchina.cn →"
			})
		]
	});
}
function PolicySummary() {
	const { lang } = useLang();
	return /* @__PURE__ */ jsxs("div", {
		className: "grid gap-3 md:grid-cols-3",
		children: [
			/* @__PURE__ */ jsx(Card$1, {
				title: lang === "zh" ? "单方面免签" : "Unilateral visa-free",
				figure: `${unilateralVisaFreeCountries.length}`,
				unit: lang === "zh" ? "国" : "countries",
				body: lang === "zh" ? `普通护照 ${unilateralPolicy.maxStayDays} 天，含商务/旅游/探亲/交流/过境。` : `Ordinary passports, ${unilateralPolicy.maxStayDays}-day stay, business/tourism/family/exchange/transit.`
			}),
			/* @__PURE__ */ jsx(Card$1, {
				title: lang === "zh" ? "240 小时过境免签" : "240-hour transit",
				figure: `${transitPolicy.totalPorts}`,
				unit: lang === "zh" ? "口岸" : "ports",
				body: lang === "zh" ? `${transitPolicy.totalCountries} 国可用，${transitPolicy.provincialRegions} 个省级地区可活动；自 ${transitPolicy.effectiveDate} 起。` : `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.provincialRegions} provincial regions; effective ${transitPolicy.effectiveDate}.`
			}),
			/* @__PURE__ */ jsx(Card$1, {
				title: lang === "zh" ? "线上入境卡" : "Online entry card",
				figure: "2025-11-20",
				unit: "",
				body: lang === "zh" ? "免费线上预填；未提前填可在口岸设备或纸卡补填；勿使用收费山寨网站。" : "Free pre-fill online; kiosk or paper card available at port; ignore counterfeit pay-to-fill sites."
			})
		]
	});
}
function Card$1({ title, figure, unit, body }) {
	return /* @__PURE__ */ jsxs("article", {
		className: "flex flex-col gap-2 rounded-xl border border-line bg-white p-4",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "text-xs font-bold uppercase tracking-widest text-muted",
				children: title
			}),
			/* @__PURE__ */ jsxs("strong", {
				className: "text-3xl leading-none",
				children: [
					figure,
					" ",
					/* @__PURE__ */ jsx("small", {
						className: "text-base font-bold text-muted",
						children: unit
					})
				]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-sm leading-snug text-ink/80",
				children: body
			})
		]
	});
}
function Phase1PortsList() {
	const { lang } = useLang();
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-line bg-white p-5",
		children: [/* @__PURE__ */ jsxs("header", {
			className: "mb-3",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-base font-bold",
				children: lang === "zh" ? "本站覆盖的四城口岸（240 小时）" : "Phase 1 cities — all 240-hour transit"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-xs text-muted",
				children: lang === "zh" ? "与国务院 2025-11-04 公告对齐；其它 59 口岸暂未在本站列出。" : "Aligned with State Council 2025-11-04 announcement; the other 59 ports are not yet covered here."
			})]
		}), /* @__PURE__ */ jsx("ul", {
			className: "grid gap-2 sm:grid-cols-2",
			children: phase1TransitPorts.map((port) => /* @__PURE__ */ jsxs("li", {
				className: "flex items-center justify-between rounded-lg bg-paper px-3 py-2",
				children: [/* @__PURE__ */ jsxs("span", { children: [
					/* @__PURE__ */ jsx("strong", {
						className: "text-sm",
						children: lang === "zh" ? port.cityZh : port.city
					}),
					" ",
					/* @__PURE__ */ jsx("span", {
						className: "text-xs text-muted",
						children: lang === "zh" ? port.portZh : port.portEn
					})
				] }), /* @__PURE__ */ jsxs("span", {
					className: "rounded-full bg-jade-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-jade",
					children: [port.maxHours, "h"]
				})]
			}, port.portEn))
		})]
	});
}
//#endregion
//#region src/data/top-questions.ts
var topQuestions = [
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
		answerZh: "需要。自 2025-11-20 起可在国家移民管理局官网免费线上预填；口岸也提供自助设备和纸卡。注意收费山寨网站。",
		sourceId: "nia-online-entry-card"
	},
	{
		id: "pay-foreign-card",
		questionEn: "Will my foreign credit card work in China?",
		questionZh: "外卡在中国能用吗？",
		answerEn: "Set up Alipay or WeChat Pay before you fly and link a Visa or Mastercard. PBOC raised the cap to USD 5,000 per transaction / USD 50,000 annually in 2024. Standalone Visa/Mastercard swipes work mainly at airports, hotels, and major retailers.",
		answerZh: "出发前在 Alipay 或微信支付绑外卡（Visa / Mastercard）。央行 2024 年起单笔上限 USD 5,000、年累 USD 50,000。机场、酒店、大型商超刷外卡通常可用，街边小店多走支付宝/微信。",
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
		questionZh: "出事打什么电话？",
		answerEn: "110 police, 119 fire, 120 ambulance, 122 traffic — all free. Beijing 12345 supports 10 languages 24/7; Shanghai 12345 supports 18 languages (press 7); Guangzhou 960169 is a three-party language bridge.",
		answerZh: "110 警务、119 火警、120 急救、122 交警，全部免费。北京 12345 24/7 支持 10 语；上海 12345 18 语（按 7）；广州 960169 三方翻译桥。",
		sourceId: "shanghai-emergency-numbers"
	},
	{
		id: "rail-passport",
		questionEn: "Can I book high-speed rail with a foreign passport?",
		questionZh: "能用护照在 12306 买高铁票吗？",
		answerEn: "Yes via 12306.cn/en. Online auto-verification is fastest; if it fails, manual review of passport + selfie takes 3–5 working days, or visit any station counter on arrival.",
		answerZh: "可以，去 12306.cn/en。自动认证最快；失败可上传护照+自拍人工审 3-5 工作日，或抵达后到车站窗口现场办。",
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
topQuestions.map((q) => q.sourceId);
//#endregion
//#region src/components/sections/TopQuestions.tsx
function TopQuestions() {
	const { lang } = useLang();
	const isZh = lang === "zh";
	const [openId, setOpenId] = useState(topQuestions[0].id);
	return /* @__PURE__ */ jsxs("section", {
		id: "top-questions",
		className: "flex flex-col gap-3",
		children: [/* @__PURE__ */ jsxs("header", { children: [
			/* @__PURE__ */ jsx("span", {
				className: "text-xs font-bold uppercase tracking-widest text-muted",
				children: isZh ? "出行前最关心的问题" : "Pre-arrival FAQ"
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "text-2xl font-bold",
				children: isZh ? "最常被问到的问题" : "Top questions before you fly"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-sm text-muted",
				children: isZh ? "答案全部引自官方源；点开看详情和链接。" : "Every answer cites an official source. Tap to expand."
			})
		] }), /* @__PURE__ */ jsx("ul", {
			className: "flex flex-col gap-2",
			children: topQuestions.map((q) => {
				const open = openId === q.id;
				return /* @__PURE__ */ jsxs("li", {
					className: "rounded-xl border border-line bg-white",
					children: [/* @__PURE__ */ jsxs("button", {
						type: "button",
						"aria-expanded": open,
						onClick: () => setOpenId(open ? null : q.id),
						className: "flex w-full items-center justify-between gap-3 px-4 py-3 text-left",
						children: [/* @__PURE__ */ jsx("strong", {
							className: "text-sm leading-tight",
							children: isZh ? q.questionZh : q.questionEn
						}), /* @__PURE__ */ jsx("span", {
							className: clsx("shrink-0 text-xl text-muted transition-transform", open && "rotate-45"),
							"aria-hidden": true,
							children: "+"
						})]
					}), open && /* @__PURE__ */ jsx("div", {
						className: "border-t border-line px-4 py-3",
						children: /* @__PURE__ */ jsx("p", {
							className: "text-sm leading-relaxed",
							children: isZh ? q.answerZh : q.answerEn
						})
					})]
				}, q.id);
			})
		})]
	});
}
//#endregion
//#region src/components/common/SourcesNote.tsx
function SourcesNote() {
	const { lang } = useLang();
	return /* @__PURE__ */ jsx("p", {
		className: "mt-6 border-t border-line pt-4 text-xs text-muted",
		children: lang === "zh" ? /* @__PURE__ */ jsxs(Fragment, { children: ["本页所有数字、政策、地址均引自中国政府官方公开来源；实操坑点引自老外旅行社区博客，每条标注作者与日期。", /* @__PURE__ */ jsx(Link, {
			to: "/sources",
			className: "ml-1 font-bold text-jade hover:underline",
			children: "查看全部信息来源 →"
		})] }) : /* @__PURE__ */ jsxs(Fragment, { children: ["Every figure, policy, and address on this page is cited from official Chinese government sources. Practical pitfalls are cited from traveler community blogs, each shown with author and date.", /* @__PURE__ */ jsx(Link, {
			to: "/sources",
			className: "ml-1 font-bold text-jade hover:underline",
			children: "See all references →"
		})] })
	});
}
//#endregion
//#region src/pages/HomePage.tsx
function HomePage() {
	return /* @__PURE__ */ jsxs("main", {
		id: "top",
		className: "mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10",
		children: [
			/* @__PURE__ */ jsx(HeroMap, {}),
			/* @__PURE__ */ jsx(TravelAlerts, {}),
			/* @__PURE__ */ jsx(VisaChecker, {}),
			/* @__PURE__ */ jsx(TopQuestions, {}),
			/* @__PURE__ */ jsx(SourcesNote, {})
		]
	});
}
//#endregion
//#region src/data/practical-payments.ts
var practicalPayments = [
	{
		id: "timing",
		phase: "before-fly",
		app: "both",
		titleEn: "Set up both apps 2–4 weeks before you fly",
		titleZh: "出发前 2–4 周完成两个 App 的设置",
		bodyEn: "KYC can take up to 24h, WeChat may need a friend-scan, and your home bank needs time to whitelist Chinese merchants. Doing it all on landing day is a known failure scenario.",
		bodyZh: "实名最长可能要 24 小时；微信可能需要熟人扫码协助；银行需要时间为中国商户加白名单。落地当天临时搞定是高频翻车场景。",
		sourceId: "blog-fanketravel-payments"
	},
	{
		id: "tour-card-dead",
		phase: "before-fly",
		app: "alipay",
		titleEn: "Don't bother with Tour Card — shutting down 2026-05-29",
		titleZh: "Tour Card（即将关停 2026-05-29），不要再用",
		bodyEn: "The Alipay Tour Card mini-program stops accepting new applications on May 29, 2026. Older guides still recommend it; ignore them and bind your Visa/Mastercard directly to the regular Alipay app instead.",
		bodyZh: "Alipay Tour Card 小程序 2026-05-29 停止新申请。旧攻略还在推荐它，不要用——直接在标准 Alipay App 内绑定 Visa / Mastercard。",
		sourceId: "blog-chinaguidelines-tourcard"
	},
	{
		id: "bank-whitelist",
		phase: "before-fly",
		app: "both",
		titleEn: "Call your bank: whitelist China + enable international online purchases",
		titleZh: "提前打电话给发卡行：China 加白名单 + 开启国际在线交易",
		bodyEn: "The #1 card-binding failure is your home bank fraud system blocking the first attempt. The app shows ambiguous \"payment failed\" with no hint that the bank is the cause. Some debit cards also need 3D Secure / international online purchases manually enabled.",
		bodyZh: "绑卡失败首要原因是发卡行风控自动拦截首次中国扣款。App 只显示一句模糊的\"支付失败\"，不提是银行拦的。部分借记卡还需要手动开启 3D Secure / 国际在线交易。",
		sourceId: "blog-wanderinchina-alipay"
	},
	{
		id: "wechat-friend-scan-prearrange",
		phase: "before-fly",
		app: "wechat",
		titleEn: "WeChat friend-scan: line one up before you fly",
		titleZh: "微信熟人扫码：出发前先安排好",
		bodyEn: "About 80% of new WeChat accounts hit a mandatory \"have a friend scan this QR\" screen. The verifier must have used WeChat 6+ months, have WeChat Pay active, and not have verified anyone else this month. Remote scan via screen-share works — solo travellers should ask a friend in advance.",
		bodyZh: "约 80% 的新微信账号会卡在\"找熟人扫码验证\"那一步。验证人必须用微信 6 个月以上、开了微信支付、本月没帮别人验证过。可远程让对方截图扫码——独行旅客出发前先找好人。",
		sourceId: "blog-realchinatrip-wechat"
	},
	{
		id: "wechat-register-prefly",
		phase: "before-fly",
		app: "wechat",
		titleEn: "Register WeChat before boarding — SMS unreliable on roaming/eSIM",
		titleZh: "出发前先注册微信——漫游 / eSIM 收 SMS 不稳",
		bodyEn: "International roaming SMS into China is unreliable and eSIM data access does not guarantee SMS delivery. Complete WeChat registration on home-country signal, not after landing.",
		bodyZh: "中国境内国际漫游 SMS 不稳定，eSIM 有数据不代表能收短信。注册要在出发地的本地网络完成，落地后再注册容易卡在收不到验证码的死循环。",
		sourceId: "blog-baoziinchina-wechat"
	},
	{
		id: "alipay-app-name",
		phase: "setup",
		app: "alipay",
		titleEn: "Install the standard Alipay (blue icon) — not AlipayHK",
		titleZh: "安装标准支付宝（蓝色图标）——不是 AlipayHK",
		bodyEn: "There is one app for foreign tourists: standard Alipay (Hangzhou Technology Co., bundle id com.eg.android.AlipayGphone). AlipayHK is a separate Hong Kong product that does NOT work on the mainland.",
		bodyZh: "只用一个 App：标准支付宝（杭州蚂蚁，bundle id com.eg.android.AlipayGphone）。AlipayHK 是香港独立产品，在大陆用不了。",
		sourceId: "blog-wanderinchina-alipay"
	},
	{
		id: "vpn-off",
		phase: "setup",
		app: "both",
		titleEn: "Turn VPN OFF during KYC, card binding, and payments",
		titleZh: "实名 / 绑卡 / 付款时必须关 VPN",
		bodyEn: "Both Alipay and WeChat compare GPS (Beijing) against IP location (e.g. Los Angeles). The mismatch triggers fraud flags that can freeze the account mid-KYC and require a manual support ticket to recover.",
		bodyZh: "两个 App 都会比对 GPS（北京）和 IP 定位（比如 LA）。不一致直接触发风控冻结，最容易在实名上传那一步卡死，要走客服工单解。",
		sourceId: "blog-hiddenchina-payments"
	},
	{
		id: "alipay-name-mrz",
		phase: "setup",
		app: "alipay",
		titleEn: "Use your passport MRZ name exactly — uppercase, no nicknames",
		titleZh: "实名姓名严格按护照机读区（MRZ）填——大写，不要用昵称",
		bodyEn: "Real-name verification rejects mismatched names: middle names, hyphenated surnames, double-barrelled names. The app gives no specific reason — it just says \"verification failed\".",
		bodyZh: "实名校验对姓名匹配很严：中间名、连字符姓、双姓常被拒。App 只回一句\"实名失败\"，不说为啥失败。",
		sourceId: "blog-letstravel-alipay"
	},
	{
		id: "wechat-microcharge",
		phase: "setup",
		app: "wechat",
		titleEn: "WeChat's USD 0.05 verification charge will trigger your bank's fraud alert",
		titleZh: "微信绑卡那笔 0.05 美元验证扣款会触发发卡行风控",
		bodyEn: "WeChat charges ~$0.05 USD to validate the card during binding. This tiny charge is the most common reason the binding fails. If you see the charge get rejected, immediately approve it in your banking app and retry the binding within the same session.",
		bodyZh: "微信绑卡时会扣约 0.05 美元做验证。这笔小额扣款是绑卡失败的高频原因。在 App 里看到这笔被拒后，立刻去网银里通过它，再重新绑卡。",
		sourceId: "blog-wildchina-wechat"
	},
	{
		id: "alipay-kyc-500",
		phase: "setup",
		app: "alipay",
		titleEn: "USD 500 is the real KYC threshold — not the PBOC USD 5,000 figure",
		titleZh: "实名审核真正的门槛是 500 美元——不是央行公告的 5,000",
		bodyEn: "PBOC raised the policy limit to USD 5,000/tx in 2024, but Alipay's own identity-verification system kicks in at USD 500. Plan for the lower number when budgeting big-ticket items (hotel deposits, high-speed rail).",
		bodyZh: "央行 2024 年把政策上限提到 5,000 美元/笔，但 Alipay 自家系统在 500 美元就开始要求二次验证。预算大额（酒店押金、高铁票）按 500 来算。",
		sourceId: "blog-wildchina-alipay"
	},
	{
		id: "wechat-15k-cap",
		phase: "setup",
		app: "wechat",
		titleEn: "WeChat: hard RMB 15,000 stay-total cap until you finish real-name auth",
		titleZh: "微信：实名前整次行程累计上限 RMB 15,000",
		bodyEn: "Without real-name authentication, WeChat caps cumulative spend at ~RMB 15,000 for the entire stay (not per transaction, not per day). Hits sooner than most people expect. Complete real-name early.",
		bodyZh: "没完成实名时，微信对你这次在中国累计支出上限约 RMB 15,000——不是单笔不是单日，整次行程的累计。比想象中快用完，先完成实名再大额消费。",
		sourceId: "blog-wildchina-wechat"
	},
	{
		id: "personal-qr-reverse-scan",
		phase: "day-one",
		app: "both",
		titleEn: "Personal QR codes reject foreign cards — let merchant scan you instead",
		titleZh: "个人收款码不收外卡——改让商家扫你的码",
		bodyEn: "Street vendors and small restaurants almost always show a personal collection QR (个人收款码), not a business merchant code. These only accept payment from RMB wallet balance or a Chinese bank card — your foreign-card-backed Alipay/WeChat is rejected. Workaround: open YOUR app's payment barcode and ask them to scan you. Reverse direction usually works.",
		bodyZh: "街边小店、馆子用的几乎都是\"个人收款码\"，不是\"商家收款码\"。个人码只接受 RMB 余额或中国银行卡，外卡绑的 Alipay / 微信会被拒。变通：打开自己 App 里的付款条码，让对方扫你。反向扫描多半能成。",
		sourceId: "blog-travelchinawith-alipay"
	},
	{
		id: "split-200",
		phase: "day-one",
		app: "alipay",
		titleEn: "Over RMB 200? Split the bill — Alipay charges 3% above that",
		titleZh: "超过 RMB 200 拆单付——Alipay 这条线以上收 3% 手续费",
		bodyEn: "Alipay foreign-card transactions: 0% fee under RMB 200, 3% over. Splitting a 400 RMB bill into two 200 RMB scans eliminates the fee. Cashiers in China understand split payment without explanation.",
		bodyZh: "Alipay 外卡：单笔 RMB 200 以内免手续费，超过收 3%。把一笔 400 拆成两笔 200，手续费全省。中国收银员对拆单很习惯，不用解释。",
		sourceId: "blog-wanderinchina-alipay"
	},
	{
		id: "cash-backup",
		phase: "day-one",
		app: "both",
		titleEn: "Carry RMB 200–500 cash — by law (since 2026-02-01) merchants must accept it",
		titleZh: "随身备 RMB 200–500 现金——2026-02-01 起法律强制商家收现金",
		bodyEn: "Since 2026-02-01 Chinese law requires merchants to accept physical RMB; refusing now carries penalties. Reliable cash sources: 7-Eleven / FamilyMart / Lawson; ICBC / BOC / CCB ATMs accept Visa/Mastercard with English UI.",
		bodyZh: "2026-02-01 起法律强制商家收人民币现金，拒收会被罚。可靠取/付现金渠道：7-11 / 全家 / 罗森；中行 / 工行 / 建行 ATM 接受 Visa/MC，有英文界面。",
		sourceId: "blog-hiddenchina-payments"
	},
	{
		id: "minigram-sim-required",
		phase: "day-one",
		app: "wechat",
		titleEn: "Didi / Meituan / Ele.me mini-programs need a +86 SIM",
		titleZh: "微信里的 Didi / 美团 / 饿了么小程序，要 +86 中国手机号",
		bodyEn: "Even with WeChat Pay working, the Didi / Meituan / Ele.me mini-programs INSIDE WeChat require a Chinese mainland phone number to register. Use the standalone Didi app instead (which accepts foreign numbers + foreign cards).",
		bodyZh: "微信支付能用归能用，但微信里那个 Didi / 美团 / 饿了么小程序要求注册时填 +86 中国号，外国号注册不进。改用独立的 Didi App（接受外国号 + 外卡）。",
		sourceId: "blog-wildchina-wechat"
	},
	{
		id: "alipay-3month-freeze",
		phase: "post-trip",
		app: "alipay",
		titleEn: "Alipay freezes after ~3 months of inactivity",
		titleZh: "Alipay 闲置约 3 个月会自动冻结",
		bodyEn: "If you don't use Alipay for ~3 months after returning home, the account enters a restricted state. Reactivation needs passport + selfie video + transaction explanation. Returning visitors hit a locked account on Day 1 of their next trip — start unlocking before you fly back.",
		bodyZh: "回国后约 3 个月不用，Alipay 自动进入受限状态。重新激活要传护照 + 自拍视频 + 写最近一笔交易。下次再来中国第一天才发现被锁就晚了——下次出发前提前解。",
		sourceId: "blog-letstravel-alipay"
	},
	{
		id: "refund-3-7-days",
		phase: "post-trip",
		app: "alipay",
		titleEn: "Refunds take 3–7 business days to your card — not instant to wallet",
		titleZh: "退款 3–7 个工作日回信用卡——不是立刻回钱包",
		bodyEn: "Foreign-card-backed Alipay refunds go back to the issuing card on a 3–7 business day cycle, not instantly to your Alipay wallet. A failed train booking will show \"refunding\" for days with no balance in the app — that's normal.",
		bodyZh: "外卡 Alipay 的退款 3–7 个工作日回到原信用卡，不是立刻回 Alipay 钱包。订票失败显示\"退款中\"好几天 App 里没钱回——这是正常流程。",
		sourceId: "blog-hiddenchina-payments"
	},
	{
		id: "wechat-redpacket-blocked",
		phase: "post-trip",
		app: "wechat",
		titleEn: "Foreign WeChat: red packets and P2P transfers are permanently blocked",
		titleZh: "外卡微信：红包和好友转账永久禁用",
		bodyEn: "Foreign-card-backed WeChat accounts cannot send OR receive red packets, and cannot transfer money to other users — only merchant QR payments work. If a Chinese friend wants to split dinner via WeChat transfer, you'll need an alternative (cash, Alipay merchant scan).",
		bodyZh: "外卡微信账号不能发也不能收红包，也不能给好友转账，只能扫商家收款码。中国朋友要发红包 / 转账给你 AA，得换别的方式（现金、Alipay 商家码）。",
		sourceId: "blog-ltl-wechat"
	}
];
//#endregion
//#region src/data/payments.ts
var platformLimits = {
	alipay: {
		perTransactionUSD: 5e3,
		annualCumulativeUSD: 5e4,
		sourceId: "pboc-payment-uplift"
	},
	wechat: {
		perTransactionUSD: 5e3,
		annualCumulativeUSD: 5e4,
		sourceId: "pboc-payment-uplift"
	}
};
var atmRule = {
	bank: "Bank of China",
	perWithdrawalCNY: 3e3,
	acceptedNetworks: [
		"Visa",
		"Mastercard",
		"JCB",
		"American Express",
		"UnionPay"
	],
	sourceId: "boc-atm-en"
};
var customsRules = [
	{
		id: "rmb-cash",
		titleEn: "RMB cash carry limit",
		titleZh: "携带人民币现金上限",
		bodyEn: "Inbound and outbound passengers may carry up to ¥20,000 RMB. Excess must be remitted via banking channels.",
		bodyZh: "出入境旅客单次最多可携带 20,000 元人民币现金；超出部分须通过银行渠道汇兑。",
		sourceId: "customs-clearance-guide"
	},
	{
		id: "foreign-cash",
		titleEn: "Foreign currency declaration",
		titleZh: "外币申报阈值",
		bodyEn: "Foreign currency above the equivalent of USD 5,000 must be declared in writing on arrival. Undeclared amounts can be confiscated.",
		bodyZh: "携带外币现金超过 5,000 美元等值时必须在入境时书面申报，未申报可被没收。",
		sourceId: "customs-clearance-guide"
	},
	{
		id: "personal-goods",
		titleEn: "Personal-use goods (non-resident)",
		titleZh: "随身物品（非居民）",
		bodyEn: "Reasonable personal-use items are duty-exempt. Goods totalling above ¥2,000 in value intended for non-personal use require duty assessment.",
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
];
var preArrivalChecklist = [
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
		bodyEn: "RMB carry cap ¥20,000. Foreign cash above USD 5,000 equivalent must be declared on the arrival form.",
		bodyZh: "人民币现金上限 ¥20,000；外币现金超 5,000 美元等值必须填申报单。",
		sourceId: "customs-clearance-guide"
	},
	{
		id: "atm-strategy",
		titleEn: "Bank of China ATMs are the most reliable for foreign cards",
		titleZh: "中国银行 ATM 接受外卡最稳",
		bodyEn: "BOC ATMs accept all five major networks; CNY 3,000 per withdrawal. Issuer's own daily/weekly limits also apply.",
		bodyZh: "中行 ATM 接受 5 大卡组织外卡；单笔上限 ¥3,000，发卡行自有日/周限额另算。",
		sourceId: "boc-atm-en"
	},
	{
		id: "card-fallback",
		titleEn: "POS coverage is broadest at airports and major hotels",
		titleZh: "外卡 POS 覆盖最高的是机场与高星酒店",
		bodyEn: "Outside those, small merchants tend to be Alipay/WeChat-only or cash. Don't rely on Visa swipe in mom-and-pop shops.",
		bodyZh: "机场和高星酒店外卡 POS 覆盖最好；街边小店多为支付宝/微信或现金，不要依赖外卡刷卡。",
		sourceId: "pboc-payment-uplift"
	}
];
var cityPaymentNotes = [
	{
		cityId: "beijing",
		cityEn: "Beijing",
		cityZh: "北京",
		bullets: [{
			en: "Subway tap-to-ride: all 5 networks (Visa, Mastercard, UnionPay, JCB, Amex) on every line; effective 2025-06-15.",
			zh: "地铁全网刷卡：5 大卡组织（Visa/MC/银联/JCB/Amex）已支持，2025-06-15 起。",
			sourceId: "beijing-subway-five-cards"
		}, {
			en: "Capital + Daxing airports: 24 ATMs, 7 currency desks; over 11,000 city merchants accept foreign cards.",
			zh: "首都与大兴机场：合计 24 台外卡 ATM、7 处换汇点；全市 11,000+ 商户支持外卡。",
			sourceId: "beijing-airport-services"
		}]
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
		bullets: [{
			en: "Metro tap-to-ride for 5 networks city-wide; effective 2025-10-12.",
			zh: "广州地铁全网 5 卡组织刷卡；2025-10-12 起。",
			sourceId: "gz-metro-tap-to-ride"
		}, {
			en: "AlipayHK works on metro/bus/tram/ferry since 2024-03-04; HKD settlement; monthly 20–50% rebate.",
			zh: "AlipayHK 自 2024-03-04 起可坐地铁/公交/有轨/轮渡；按 HKD 结算；月度 20–50% 返现。",
			sourceId: "gz-alipayhk-transit"
		}]
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
//#endregion
//#region src/components/pillar/PaymentsPractical.tsx
var PHASE_LABEL = {
	"before-fly": {
		en: "Before you fly",
		zh: "出发前"
	},
	setup: {
		en: "Account setup & KYC",
		zh: "实名 / 绑卡阶段"
	},
	"day-one": {
		en: "Day 1 paying",
		zh: "落地第一天付款"
	},
	"post-trip": {
		en: "After your trip",
		zh: "回国之后"
	}
};
var PHASE_ORDER = [
	"before-fly",
	"setup",
	"day-one",
	"post-trip"
];
var APP_LABEL = {
	alipay: {
		en: "Alipay",
		zh: "支付宝",
		style: "bg-blue-100 text-blue-900"
	},
	wechat: {
		en: "WeChat",
		zh: "微信",
		style: "bg-emerald-100 text-emerald-900"
	},
	both: {
		en: "Both",
		zh: "两个 App",
		style: "bg-amber-100 text-amber-900"
	}
};
function PaymentsPractical() {
	const { lang } = useLang();
	const isZh = lang === "zh";
	const grouped = PHASE_ORDER.map((phase) => ({
		phase,
		items: practicalPayments.filter((g) => g.phase === phase)
	}));
	return /* @__PURE__ */ jsxs("section", {
		className: "flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50/40 p-5",
		children: [/* @__PURE__ */ jsxs("header", { children: [/* @__PURE__ */ jsx("span", {
			className: "text-xs font-bold uppercase tracking-widest text-amber-800",
			children: isZh ? "实操避坑" : "Practical pitfalls"
		}), /* @__PURE__ */ jsx("h3", {
			className: "text-lg font-bold",
			children: isZh ? "Alipay / 微信外卡用户真实坑点" : "What official sources don't tell you"
		})] }), /* @__PURE__ */ jsx("div", {
			className: "grid gap-3",
			children: grouped.map(({ phase, items }) => /* @__PURE__ */ jsx(PhaseGroup, {
				phase,
				items,
				isZh
			}, phase))
		})]
	});
}
function PhaseGroup({ phase, items, isZh }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ jsx("h4", {
			className: "text-xs font-bold uppercase tracking-widest text-muted",
			children: isZh ? PHASE_LABEL[phase].zh : PHASE_LABEL[phase].en
		}), /* @__PURE__ */ jsx("ul", {
			className: "grid gap-2 md:grid-cols-2",
			children: items.map((g) => /* @__PURE__ */ jsxs("li", {
				className: "flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: clsx("rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", APP_LABEL[g.app].style),
						children: isZh ? APP_LABEL[g.app].zh : APP_LABEL[g.app].en
					}), /* @__PURE__ */ jsx("strong", {
						className: "text-sm leading-tight",
						children: isZh ? g.titleZh : g.titleEn
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "text-xs leading-relaxed text-ink/80",
					children: isZh ? g.bodyZh : g.bodyEn
				})]
			}, g.id))
		})]
	});
}
//#endregion
//#region src/components/pillar/PaymentsChecklist.tsx
function PaymentsChecklist({ cityId }) {
	const { lang } = useLang();
	const isZh = lang === "zh";
	const cityScoped = Boolean(cityId);
	const cities = cityId ? cityPaymentNotes.filter((c) => c.cityId === cityId) : cityPaymentNotes;
	return /* @__PURE__ */ jsxs("section", {
		id: "payments",
		className: "flex flex-col gap-4",
		children: [
			!cityScoped && /* @__PURE__ */ jsxs("header", { children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold uppercase tracking-widest text-muted",
					children: isZh ? "支柱 2" : "Pillar 2"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold",
					children: isZh ? "支付准备" : "Payments"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted",
					children: isZh ? "出发前必做、海关阈值、ATM 选择，每条都来自央行、海关、各市政府英文页。" : "What to set up before you fly, customs thresholds, ATM rules. Cites PBOC, China Customs, and city government English pages."
				})
			] }),
			cityScoped && /* @__PURE__ */ jsx("h2", {
				className: "text-xl font-bold",
				children: isZh ? "支付" : "Payments"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ jsx(Card, {
						title: isZh ? "Alipay 单笔" : "Alipay per-tx",
						big: `$${platformLimits.alipay.perTransactionUSD.toLocaleString()}`,
						note: isZh ? `年累 $${platformLimits.alipay.annualCumulativeUSD.toLocaleString()}` : `annual $${platformLimits.alipay.annualCumulativeUSD.toLocaleString()}`
					}),
					/* @__PURE__ */ jsx(Card, {
						title: isZh ? "WeChat Pay 单笔" : "WeChat Pay per-tx",
						big: `$${platformLimits.wechat.perTransactionUSD.toLocaleString()}`,
						note: isZh ? `年累 $${platformLimits.wechat.annualCumulativeUSD.toLocaleString()}` : `annual $${platformLimits.wechat.annualCumulativeUSD.toLocaleString()}`
					}),
					/* @__PURE__ */ jsx(Card, {
						title: isZh ? "中行 ATM" : "BOC ATM",
						big: `¥${atmRule.perWithdrawalCNY.toLocaleString()}`,
						note: atmRule.acceptedNetworks.join(" / ")
					}),
					/* @__PURE__ */ jsx(Card, {
						title: isZh ? "外币现金申报" : "Foreign cash declare",
						big: "$5,000",
						note: isZh ? "超过等值须申报" : "above this must declare"
					})
				]
			}),
			/* @__PURE__ */ jsx(Block$1, {
				title: isZh ? "出发前清单" : "Before you fly",
				children: /* @__PURE__ */ jsx("ul", {
					className: "grid gap-2",
					children: preArrivalChecklist.map((step, i) => /* @__PURE__ */ jsxs("li", {
						className: "flex gap-3 rounded-lg border border-line bg-white p-3",
						children: [/* @__PURE__ */ jsx("span", {
							className: "grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white",
							children: i + 1
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-1 flex-col gap-1",
							children: [/* @__PURE__ */ jsx("strong", {
								className: "text-sm",
								children: isZh ? step.titleZh : step.titleEn
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs leading-relaxed text-ink/80",
								children: isZh ? step.bodyZh : step.bodyEn
							})]
						})]
					}, step.id))
				})
			}),
			/* @__PURE__ */ jsx(Block$1, {
				title: isZh ? "海关申报阈值" : "China Customs thresholds",
				children: /* @__PURE__ */ jsx("ul", {
					className: "grid gap-2 sm:grid-cols-2",
					children: customsRules.map((rule) => /* @__PURE__ */ jsxs("li", {
						className: "flex flex-col gap-1 rounded-lg border border-line bg-white p-3",
						children: [/* @__PURE__ */ jsx("strong", {
							className: "text-sm",
							children: isZh ? rule.titleZh : rule.titleEn
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs leading-relaxed text-ink/80",
							children: isZh ? rule.bodyZh : rule.bodyEn
						})]
					}, rule.id))
				})
			}),
			/* @__PURE__ */ jsx(PaymentsPractical, {}),
			/* @__PURE__ */ jsx(Block$1, {
				title: cityScoped ? isZh ? "本城支付现状" : "This city — payment status" : isZh ? "四城支付现状" : "Four-city payment status",
				children: /* @__PURE__ */ jsx("ul", {
					className: `grid gap-2 ${cityScoped ? "" : "md:grid-cols-2"}`,
					children: cities.map((city) => /* @__PURE__ */ jsxs("li", {
						className: "flex flex-col gap-2 rounded-lg border border-line bg-white p-3",
						children: [!cityScoped && /* @__PURE__ */ jsx("strong", {
							className: "text-sm",
							children: isZh ? city.cityZh : city.cityEn
						}), /* @__PURE__ */ jsx("ul", {
							className: "grid gap-1.5",
							children: city.bullets.map((bullet, i) => /* @__PURE__ */ jsx("li", {
								className: "text-xs leading-relaxed text-ink/80",
								children: isZh ? bullet.zh : bullet.en
							}, i))
						})]
					}, city.cityId))
				})
			})
		]
	});
}
function Card({ title, big, note }) {
	return /* @__PURE__ */ jsxs("article", {
		className: "flex flex-col gap-1 rounded-xl border border-line bg-white p-4",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "text-xs font-bold uppercase tracking-widest text-muted",
				children: title
			}),
			/* @__PURE__ */ jsx("strong", {
				className: "text-2xl leading-none",
				children: big
			}),
			/* @__PURE__ */ jsx("span", {
				className: "text-xs text-muted",
				children: note
			})
		]
	});
}
function Block$1({ title, children }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ jsx("h3", {
			className: "text-sm font-bold uppercase tracking-widest text-muted",
			children: title
		}), children]
	});
}
//#endregion
//#region src/components/pillar/TransportGuide.tsx
var KIND_LABEL = {
	cheapest: {
		en: "Cheapest",
		zh: "最便宜"
	},
	fastest: {
		en: "Fastest",
		zh: "最快"
	},
	stable: {
		en: "Most stable",
		zh: "最稳"
	}
};
function TransportGuide({ cityId }) {
	const { lang } = useLang();
	const isZh = lang === "zh";
	const cityScoped = Boolean(cityId);
	const [activeId, setActiveId] = useState(cityId ?? "beijing");
	const effectiveId = cityId ?? activeId;
	const active = cityTransport.find((c) => c.cityId === effectiveId);
	return /* @__PURE__ */ jsxs("section", {
		id: "transport",
		className: "flex flex-col gap-4",
		children: [
			!cityScoped && /* @__PURE__ */ jsxs("header", { children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold uppercase tracking-widest text-muted",
					children: isZh ? "支柱 3" : "Pillar 3"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold",
					children: isZh ? "交通" : "Transport"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted",
					children: isZh ? "12306 国际版购票 + 四城机场到市区 + 地铁外卡接受度 + 网约车实情。" : "12306 international booking + airport-to-city for the four cities + metro foreign-card status + ride-hail reality."
				})
			] }),
			cityScoped && /* @__PURE__ */ jsx("h2", {
				className: "text-xl font-bold",
				children: isZh ? "交通" : "Transport"
			}),
			/* @__PURE__ */ jsxs("article", {
				className: "flex flex-col gap-3 rounded-xl border border-line bg-white p-5",
				children: [
					/* @__PURE__ */ jsx("h3", {
						className: "text-sm font-bold uppercase tracking-widest text-muted",
						children: isZh ? "12306 国际版" : "12306 international"
					}),
					/* @__PURE__ */ jsx(RailRow, {
						titleEn: "Registration",
						titleZh: "注册",
						en: railBooking.registration.en,
						zh: railBooking.registration.zh
					}),
					/* @__PURE__ */ jsx(RailRow, {
						titleEn: "Payment",
						titleZh: "支付",
						en: railBooking.payment.en,
						zh: railBooking.payment.zh
					}),
					/* @__PURE__ */ jsx(RailRow, {
						titleEn: "Refund",
						titleZh: "退票",
						en: railBooking.refund.en,
						zh: railBooking.refund.zh
					}),
					/* @__PURE__ */ jsx(RailRow, {
						titleEn: "Real-name",
						titleZh: "实名",
						en: railBooking.realName.en,
						zh: railBooking.realName.zh
					})
				]
			}),
			!cityScoped && /* @__PURE__ */ jsx("div", {
				role: "tablist",
				"aria-label": "City selector",
				className: "flex flex-wrap gap-2",
				children: cityTransport.map((city) => /* @__PURE__ */ jsx("button", {
					type: "button",
					role: "tab",
					"aria-selected": activeId === city.cityId,
					onClick: () => setActiveId(city.cityId),
					className: clsx("rounded-full border px-4 py-1.5 text-sm font-bold transition", activeId === city.cityId ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-jade hover:text-jade"),
					children: isZh ? CITY_LABELS[city.cityId].zh : CITY_LABELS[city.cityId].en
				}, city.cityId))
			}),
			/* @__PURE__ */ jsxs("article", {
				className: "flex flex-col gap-4 rounded-xl border border-line bg-white p-5",
				children: [
					active.airports.map((airport) => /* @__PURE__ */ jsxs("section", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ jsxs("h4", {
							className: "text-sm font-bold",
							children: [
								airport.code,
								" · ",
								isZh ? airport.nameZh : airport.nameEn
							]
						}), /* @__PURE__ */ jsx("ul", {
							className: "grid gap-2 md:grid-cols-3",
							children: airport.options.map((opt) => /* @__PURE__ */ jsxs("li", {
								className: "flex flex-col gap-1 rounded-lg bg-paper p-3",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-[10px] font-bold uppercase tracking-widest text-jade",
										children: isZh ? KIND_LABEL[opt.kind].zh : KIND_LABEL[opt.kind].en
									}),
									/* @__PURE__ */ jsx("strong", {
										className: "text-sm leading-tight",
										children: isZh ? opt.routeZh : opt.routeEn
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "text-xs text-muted",
										children: [
											"¥",
											opt.costCNY,
											" · ",
											opt.timeMin,
											" ",
											isZh ? "分钟" : "min"
										]
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-xs leading-snug",
										children: isZh ? opt.paymentZh : opt.paymentEn
									})
								]
							}, opt.kind))
						})]
					}, airport.code)),
					/* @__PURE__ */ jsxs("section", {
						className: "flex flex-col gap-2 border-t border-line pt-3",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "text-sm font-bold",
							children: isZh ? "地铁支付" : "Metro payment"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm leading-relaxed",
							children: isZh ? active.metro.summaryZh : active.metro.summaryEn
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "flex flex-col gap-2 border-t border-line pt-3",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "text-sm font-bold",
							children: isZh ? "网约车 / 出租" : "Ride-hail & taxi"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm leading-relaxed",
							children: isZh ? active.rideHail.zh : active.rideHail.en
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "flex flex-col gap-2 border-t border-line pt-3",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "text-sm font-bold",
							children: isZh ? "常见翻车点" : "Common pitfalls"
						}), /* @__PURE__ */ jsx("ul", {
							className: "grid gap-2",
							children: active.pitfalls.map((p, i) => /* @__PURE__ */ jsx("li", {
								className: "rounded-lg bg-amber-50 p-3 text-sm",
								children: isZh ? p.zh : p.en
							}, i))
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx(PracticalBlock, {
				pillar: "transport",
				cityId
			})
		]
	});
}
function RailRow({ titleEn, titleZh, en, zh }) {
	const { lang } = useLang();
	const isZh = lang === "zh";
	return /* @__PURE__ */ jsxs("div", {
		className: "grid gap-1 border-t border-line pt-2 first:border-t-0 first:pt-0 md:grid-cols-[100px_1fr]",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-xs font-bold uppercase tracking-widest text-muted",
			children: isZh ? titleZh : titleEn
		}), /* @__PURE__ */ jsx("p", {
			className: "text-sm leading-relaxed",
			children: isZh ? zh : en
		})]
	});
}
//#endregion
//#region src/data/food.ts
var cityFood = [
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
		pitfalls: [{
			en: "Tea ceremony scams near tourist areas (Wangfujing/Houhai). Walk away if invited by 'students' to a tea house.",
			zh: "王府井/后海一带有'学生邀请去茶馆'的茶艺馆骗局，遇到主动搭讪请直接离开。",
			sourceId: "beijing-roast-duck"
		}, {
			en: "Some smaller hutong shops are cash-only; Visa swipe is rare outside hotels.",
			zh: "胡同里的小店多为现金；高星酒店外刷外卡概率低。",
			sourceId: "beijing-axis-snacks"
		}]
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
		pitfalls: [{
			en: "Xiaolongbao broth is scalding hot. Bite a small hole first, sip the soup, then eat. Multiple ER visits per year for tourist burns.",
			zh: "小笼包汤汁极烫——先咬小口吸汤再吃，每年都有外国游客烫伤就医的案例。",
			sourceId: "shanghai-xiaolongbao"
		}, {
			en: "Confusing Hongqiao Airport (SHA) with Hongqiao Railway Station gates can lose 30 min. Plan dinner near where you'll actually depart from.",
			zh: "虹桥机场和虹桥火车站进站口容易混，差 30 分钟。订晚餐前先确认你是从哪边出。",
			sourceId: "shanghai-xiaolongbao"
		}]
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
		pitfalls: [{
			en: "Many small eateries lack English menus despite the city's modern image. Translation app + photo menu is essential.",
			zh: "尽管深圳形象现代，但小店英文菜单仍少；翻译 App + 图片菜单是常用方案。",
			sourceId: "sz-baoan-airport-plan"
		}, {
			en: "Cross-border food haul: dairy, fresh meat, and fresh fruit can be restricted by HK customs on the way back. Check before buying gifts.",
			zh: "跨境带食品：乳制品、生鲜肉类、新鲜水果回港会被海关限制，购物前先查规则。",
			sourceId: "sz-tax-refund-alipayhk"
		}]
	}
];
var allergyCardEn = "I am severely allergic to ____. I cannot eat or come into contact with any soup, sauce, oil, ingredients, or cookware that contain ____. Please do not include ____. If you are unsure, please tell me. Thank you.";
var allergyCardZh = "我对 ____ 严重过敏，不能吃，也不能接触含有 ____ 的汤、酱、油、配料或厨具。请不要放 ____。如果不确定，请告诉我。谢谢。";
//#endregion
//#region src/components/pillar/FoodGuide.tsx
function FoodGuide({ cityId }) {
	const { lang } = useLang();
	const isZh = lang === "zh";
	const cityScoped = Boolean(cityId);
	const [activeId, setActiveId] = useState(cityId ?? "beijing");
	const effectiveId = cityId ?? activeId;
	const active = cityFood.find((c) => c.cityId === effectiveId);
	return /* @__PURE__ */ jsxs("section", {
		id: "food",
		className: "flex flex-col gap-4",
		children: [
			!cityScoped && /* @__PURE__ */ jsxs("header", { children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold uppercase tracking-widest text-muted",
					children: isZh ? "支柱 4" : "Pillar 4"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold",
					children: isZh ? "餐饮" : "Food"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted",
					children: isZh ? "四城地方菜文化、外国人友好餐区、外卖现状、过敏中文卡。" : "Local cuisines, foreigner-friendly districts, delivery-app reality, and an allergy card."
				})
			] }),
			cityScoped && /* @__PURE__ */ jsx("h2", {
				className: "text-xl font-bold",
				children: isZh ? "餐饮" : "Food"
			}),
			!cityScoped && /* @__PURE__ */ jsx("div", {
				role: "tablist",
				className: "flex flex-wrap gap-2",
				children: cityFood.map((city) => /* @__PURE__ */ jsx("button", {
					type: "button",
					role: "tab",
					"aria-selected": activeId === city.cityId,
					onClick: () => setActiveId(city.cityId),
					className: clsx("rounded-full border px-4 py-1.5 text-sm font-bold transition", activeId === city.cityId ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-jade hover:text-jade"),
					children: isZh ? CITY_LABELS[city.cityId].zh : CITY_LABELS[city.cityId].en
				}, city.cityId))
			}),
			/* @__PURE__ */ jsxs("article", {
				className: "grid gap-4 rounded-xl border border-line bg-white p-5 md:grid-cols-2",
				children: [
					/* @__PURE__ */ jsx(Block, {
						titleEn: "Local cuisine",
						titleZh: "地方菜文化",
						en: active.cuisine.en,
						zh: active.cuisine.zh
					}),
					/* @__PURE__ */ jsx(Block, {
						titleEn: "Foreigner-friendly districts",
						titleZh: "外国人友好餐区",
						en: active.districts.en,
						zh: active.districts.zh
					}),
					/* @__PURE__ */ jsx(Block, {
						titleEn: "Delivery apps",
						titleZh: "外卖平台",
						en: active.deliveryNote.en,
						zh: active.deliveryNote.zh
					}),
					/* @__PURE__ */ jsxs("section", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-xs font-bold uppercase tracking-widest text-muted",
							children: isZh ? "翻车点" : "Pitfalls"
						}), /* @__PURE__ */ jsx("ul", {
							className: "grid gap-2",
							children: active.pitfalls.map((p, i) => /* @__PURE__ */ jsx("li", {
								className: "rounded-lg bg-amber-50 p-3 text-xs leading-relaxed",
								children: isZh ? p.zh : p.en
							}, i))
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("article", {
				className: "flex flex-col gap-3 rounded-xl border border-line bg-paper p-5",
				children: [/* @__PURE__ */ jsxs("header", { children: [/* @__PURE__ */ jsx("h3", {
					className: "text-base font-bold",
					children: isZh ? "过敏 / 忌口卡（直接给服务员看）" : "Allergy / dietary card (show to staff)"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-xs text-muted",
					children: isZh ? "把 ____ 替换成你的过敏原（中英都给）。出发前截屏存手机相册。" : "Fill in your allergen in both versions. Save a screenshot before you fly."
				})] }), /* @__PURE__ */ jsxs("div", {
					className: "grid gap-3 md:grid-cols-2",
					children: [/* @__PURE__ */ jsx("pre", {
						className: "whitespace-pre-wrap rounded-lg border border-line bg-white p-4 text-sm leading-relaxed",
						children: allergyCardEn
					}), /* @__PURE__ */ jsx("pre", {
						className: "whitespace-pre-wrap rounded-lg border border-line bg-white p-4 text-sm leading-relaxed",
						children: allergyCardZh
					})]
				})]
			}),
			/* @__PURE__ */ jsx(PracticalBlock, {
				pillar: "food",
				cityId
			})
		]
	});
}
function Block({ titleEn, titleZh, en, zh }) {
	const { lang } = useLang();
	const isZh = lang === "zh";
	return /* @__PURE__ */ jsxs("section", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ jsx("h3", {
			className: "text-xs font-bold uppercase tracking-widest text-muted",
			children: isZh ? titleZh : titleEn
		}), /* @__PURE__ */ jsx("p", {
			className: "text-sm leading-relaxed",
			children: isZh ? zh : en
		})]
	});
}
//#endregion
//#region src/data/emergency.ts
var nationalEmergency = [
	{
		number: "110",
		labelEn: "Police",
		labelZh: "公安",
		noteEn: "Free. Shanghai 110 supports 8 languages.",
		noteZh: "免费。上海 110 支持 8 种语言。",
		sourceId: "shanghai-emergency-numbers"
	},
	{
		number: "119",
		labelEn: "Fire & Rescue",
		labelZh: "消防",
		noteEn: "Free. Foreign-language support in Shanghai.",
		noteZh: "免费。上海支持外语。",
		sourceId: "shanghai-emergency-numbers"
	},
	{
		number: "120",
		labelEn: "Ambulance",
		labelZh: "急救",
		noteEn: "Free. National medical emergency dispatch.",
		noteZh: "免费。全国医疗急救调度。",
		sourceId: "beijing-emergency-numbers"
	},
	{
		number: "122",
		labelEn: "Traffic Police",
		labelZh: "交警",
		noteEn: "Free. Foreign-language support pending.",
		noteZh: "免费。外语支持待核验。",
		sourceId: "beijing-emergency-numbers"
	}
];
var hospitals = [
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
var cityHotlines = [
	{
		cityId: "beijing",
		number: "12345",
		langs: [
			"EN",
			"JA",
			"KO",
			"DE",
			"FR",
			"RU",
			"ES",
			"AR",
			"PT",
			"IT"
		],
		noteEn: "10 languages. English line 24/7; others ~8 hours/day.",
		noteZh: "10 种语言。英语 24/7；其他 8 小时/天。",
		sourceId: "beijing-12345-hotline"
	},
	{
		cityId: "shanghai",
		number: "12345",
		langs: [
			"EN",
			"FR",
			"DE",
			"JA",
			"KO",
			"ES",
			"IT",
			"RU",
			"TH",
			"FA"
		],
		noteEn: "Press 7 for foreign-language services. 24/7.",
		noteZh: "按 7 进入外语服务，24/7。",
		sourceId: "shanghai-12345"
	},
	{
		cityId: "guangzhou",
		number: "020-12345 / 960169",
		langs: [
			"EN 24/7",
			"JA",
			"KO"
		],
		noteEn: "960169 is a 3-party interpretation bridge — call it, then it conferences in 110/119/120/12345 for you.",
		noteZh: "960169 是三方翻译桥——拨通后再帮你接 110/119/120/12345。",
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
var embassies = [
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
var mfaConsular = {
	url: "https://www.fmprc.gov.cn/web/fw_673051/lbfw_673061/fgzl_673083/",
	noteEn: "Full directory of foreign missions in China (MFA).",
	noteZh: "中华人民共和国外交部领事司外国驻华使领馆名录。",
	sourceId: "mfa-consular-directory"
};
var hospitalVisitFlow = [
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
		titleZh: "带文件",
		bodyEn: "Original passport (copy not enough). International insurance card + policy. Letter of guarantee from insurer if claiming direct billing.",
		bodyZh: "护照原件（复印件不行）。国际医保卡 + 保单。若走直付保险，须备保险公司保函。",
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
];
//#endregion
//#region src/components/pillar/EmergencyBriefing.tsx
var CITIES = [
	"beijing",
	"shanghai",
	"guangzhou",
	"shenzhen"
];
function EmergencyBriefing({ cityId }) {
	const { lang } = useLang();
	const isZh = lang === "zh";
	const cityScoped = Boolean(cityId);
	const [activeId, setActiveId] = useState(cityId ?? "beijing");
	const effectiveId = cityId ?? activeId;
	const cityHospitals = hospitals.filter((h) => h.cityId === effectiveId);
	const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId);
	return /* @__PURE__ */ jsxs("section", {
		id: "emergency",
		className: "flex flex-col gap-4",
		children: [
			!cityScoped && /* @__PURE__ */ jsxs("header", { children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold uppercase tracking-widest text-muted",
					children: isZh ? "支柱 5" : "Pillar 5"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold",
					children: isZh ? "紧急 / 医疗 / 领事" : "Emergency, Medical & Consular"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted",
					children: isZh ? "国家急救号、四城外籍友好医院和热线、主要驻华使领馆。" : "National emergency lines, foreign-friendly hospitals + multilingual hotlines, embassy contacts."
				})
			] }),
			cityScoped && /* @__PURE__ */ jsx("h2", {
				className: "text-xl font-bold",
				children: isZh ? "应急 / 医疗" : "Emergency & Medical"
			}),
			/* @__PURE__ */ jsx("ul", {
				className: "grid gap-2 grid-cols-2 md:grid-cols-4",
				children: nationalEmergency.map((row) => /* @__PURE__ */ jsxs("li", {
					className: "flex flex-col gap-1 rounded-xl border border-line bg-white p-4",
					children: [
						/* @__PURE__ */ jsx("strong", {
							className: "text-3xl leading-none",
							children: row.number
						}),
						/* @__PURE__ */ jsx("span", {
							className: "text-xs font-bold uppercase tracking-widest text-muted",
							children: isZh ? row.labelZh : row.labelEn
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs leading-snug text-ink/80",
							children: isZh ? row.noteZh : row.noteEn
						})
					]
				}, row.number))
			}),
			!cityScoped && /* @__PURE__ */ jsx("div", {
				role: "tablist",
				className: "flex flex-wrap gap-2",
				children: CITIES.map((id) => /* @__PURE__ */ jsx("button", {
					type: "button",
					role: "tab",
					"aria-selected": activeId === id,
					onClick: () => setActiveId(id),
					className: clsx("rounded-full border px-4 py-1.5 text-sm font-bold transition", activeId === id ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-jade hover:text-jade"),
					children: isZh ? CITY_LABELS[id].zh : CITY_LABELS[id].en
				}, id))
			}),
			/* @__PURE__ */ jsxs("article", {
				className: "grid gap-4 rounded-xl border border-line bg-white p-5 md:grid-cols-[260px_1fr]",
				children: [/* @__PURE__ */ jsxs("section", {
					className: "flex flex-col gap-2 rounded-lg bg-paper p-4",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-xs font-bold uppercase tracking-widest text-muted",
							children: isZh ? "城市热线" : "City hotline"
						}),
						/* @__PURE__ */ jsx("strong", {
							className: "text-2xl leading-none",
							children: cityHotline.number
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "flex flex-wrap gap-1 text-[10px] uppercase tracking-wider",
							children: cityHotline.langs.map((l) => /* @__PURE__ */ jsx("li", {
								className: "rounded-full bg-white px-2 py-0.5 text-muted",
								children: l
							}, l))
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs leading-snug",
							children: isZh ? cityHotline.noteZh : cityHotline.noteEn
						})
					]
				}), /* @__PURE__ */ jsxs("section", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold uppercase tracking-widest text-muted",
						children: isZh ? "外籍友好医院" : "Foreign-friendly hospitals"
					}), /* @__PURE__ */ jsx("ul", {
						className: "grid gap-2",
						children: cityHospitals.map((h) => /* @__PURE__ */ jsxs("li", {
							className: "flex flex-col gap-1 rounded-lg border border-line p-3",
							children: [
								/* @__PURE__ */ jsx("strong", {
									className: "text-sm leading-tight",
									children: isZh ? h.nameZh : h.nameEn
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-xs text-muted",
									children: h.addressEn
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap gap-x-4 gap-y-1 text-xs",
									children: [/* @__PURE__ */ jsxs("span", { children: [
										/* @__PURE__ */ jsxs("span", {
											className: "font-bold",
											children: [isZh ? "总机" : "Main", ":"]
										}),
										" ",
										h.phone
									] }), h.emergencyPhone && /* @__PURE__ */ jsxs("span", { children: [
										/* @__PURE__ */ jsxs("span", {
											className: "font-bold",
											children: [isZh ? "急诊" : "ER", ":"]
										}),
										" ",
										h.emergencyPhone
									] })]
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-xs text-muted",
									children: h.intlDept
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-xs text-muted",
									children: h.hours
								})
							]
						}, h.nameEn))
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ jsx("h3", {
						className: "text-sm font-bold uppercase tracking-widest text-muted",
						children: isZh ? "主要驻华大使馆" : "Major embassies in China"
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "grid gap-2 md:grid-cols-2 lg:grid-cols-3",
						children: embassies.map((e) => /* @__PURE__ */ jsxs("li", {
							className: "flex flex-col gap-1 rounded-lg border border-line bg-white p-3",
							children: [
								/* @__PURE__ */ jsx("strong", {
									className: "text-sm",
									children: isZh ? `${e.countryZh}（${e.country}）` : e.country
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-xs text-muted",
									children: e.address
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "text-xs",
									children: [
										/* @__PURE__ */ jsxs("span", {
											className: "font-bold",
											children: [isZh ? "总机" : "Main", ":"]
										}),
										" ",
										e.phone
									]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "text-xs",
									children: [
										/* @__PURE__ */ jsxs("span", {
											className: "font-bold",
											children: [isZh ? "应急" : "Emergency", ":"]
										}),
										" ",
										e.emergency
									]
								})
							]
						}, e.country))
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "text-xs text-muted",
						children: [isZh ? "完整名录：" : "Full directory: ", /* @__PURE__ */ jsxs("a", {
							href: mfaConsular.url,
							target: "_blank",
							rel: "noreferrer",
							className: "font-bold text-jade hover:underline",
							children: ["MFA — ", isZh ? mfaConsular.noteZh : mfaConsular.noteEn]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "flex flex-col gap-2 rounded-xl border border-line bg-white p-5",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-sm font-bold uppercase tracking-widest text-muted",
					children: isZh ? "看病流程" : "Hospital visit flow"
				}), /* @__PURE__ */ jsx("ol", {
					className: "grid gap-2",
					children: hospitalVisitFlow.map((step) => /* @__PURE__ */ jsxs("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ jsx("span", {
							className: "grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white",
							children: step.step
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-1 flex-col gap-1",
							children: [/* @__PURE__ */ jsx("strong", {
								className: "text-sm",
								children: isZh ? step.titleZh : step.titleEn
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs leading-relaxed text-ink/80",
								children: isZh ? step.bodyZh : step.bodyEn
							})]
						})]
					}, step.step))
				})]
			}),
			/* @__PURE__ */ jsx(PracticalBlock, {
				pillar: "emergency",
				cityId
			})
		]
	});
}
//#endregion
//#region src/data/city-tourism-portals.ts
var cityTourismPortals = {
	beijing: [{
		url: "https://english.visitbeijing.com.cn/",
		labelEn: "Visit Beijing",
		labelZh: "Visit Beijing",
		noteEn: "Tourism bureau site — events, itinerary routes, ticketing portal, 7-language coverage.",
		noteZh: "市文旅局推广站——演出活动、主题路线、官方购票入口，7 种语言。"
	}, {
		url: "https://english.beijing.gov.cn/travellinginbeijing/",
		labelEn: "Beijing Government — Travelling in Beijing",
		labelZh: "北京市政府 · 在京旅行",
		noteEn: "Government practical resource: visa, transport, payment, SIM cards, tax refunds, FAQs.",
		noteZh: "政府实用资料：签证、交通、支付、SIM 卡、退税、常见问题。"
	}],
	shanghai: [{
		url: "https://www.meet-in-shanghai.net/",
		labelEn: "Meet in Shanghai",
		labelZh: "Meet in Shanghai",
		noteEn: "Tourism bureau site — citywalk routes, river cruises, 13-language coverage.",
		noteZh: "市文旅局推广站——城市漫步、黄浦江游船、13 种语言。"
	}, {
		url: "https://english.shanghai.gov.cn/en-GuideforForeignTourists/index.html",
		labelEn: "Shanghai Government — Guide for Foreign Tourists",
		labelZh: "上海市政府 · 外籍游客指南",
		noteEn: "Practical: visa, payment, currency exchange at metro stations, ride-hailing for foreigners.",
		noteZh: "实用：签证、支付、地铁站换汇、外籍游客打车攻略。"
	}],
	guangzhou: [{
		url: "https://www.gz.gov.cn/guangzhouinternational/",
		labelEn: "Guangzhou International",
		labelZh: "广州国际",
		noteEn: "Government English gateway — Visitors / Business / Residents tracks; consulate directory; Canton Fair info.",
		noteZh: "市政府英文门户——访客 / 商务 / 居民三条线；领事馆名录；广交会信息。"
	}],
	shenzhen: [{
		url: "https://www.eyeshenzhen.com/",
		labelEn: "EyeShenzhen",
		labelZh: "EyeShenzhen",
		noteEn: "Flagship international portal — 27 self-guided routes, expat service videos, HK-SZ card interop guide.",
		noteZh: "市政府国际门户——27 条自助路线、生活服务视频、深港交通卡互通指南。"
	}, {
		url: "https://www.sz.gov.cn/en_szgov/travel/index.html",
		labelEn: "Shenzhen Government — Travel",
		labelZh: "深圳市政府 · 旅游",
		noteEn: "Supplementary: natural landscapes, cultural attractions, shopping districts, travel agencies.",
		noteZh: "辅助：自然景观、文化景点、购物商圈、旅行社。"
	}]
};
//#endregion
//#region src/components/common/CityFurtherReading.tsx
function CityFurtherReading({ cityId }) {
	const { lang } = useLang();
	const isZh = lang === "zh";
	const portals = cityTourismPortals[cityId];
	if (!portals || portals.length === 0) return null;
	return /* @__PURE__ */ jsxs("section", {
		className: "flex flex-col gap-3",
		children: [/* @__PURE__ */ jsxs("header", { children: [
			/* @__PURE__ */ jsx("span", {
				className: "text-xs font-bold uppercase tracking-widest text-muted",
				children: isZh ? "官方延伸阅读" : "Official further reading"
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "text-xl font-bold",
				children: isZh ? "本市官方文旅 / 政府英文门户" : "City tourism bureau & government portals"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-xs text-muted",
				children: isZh ? "这些是该市自己运营的官方英文站。本网站没收录的更细信息（活动、路线、季节性内容）建议直接看这些。" : "Each city's own official English-language portals. For city-specific details we don't cover (events, seasonal routes, hyperlocal news), go straight to these."
			})
		] }), /* @__PURE__ */ jsx("ul", {
			className: "grid gap-2 md:grid-cols-2",
			children: portals.map((p) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
				href: p.url,
				target: "_blank",
				rel: "noreferrer",
				className: "flex flex-col gap-1 rounded-lg border border-line bg-white p-4 hover:border-jade hover:bg-jade-soft",
				children: [
					/* @__PURE__ */ jsx("strong", {
						className: "text-sm",
						children: isZh ? p.labelZh : p.labelEn
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-xs text-muted",
						children: isZh ? p.noteZh : p.noteEn
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "text-[10px] uppercase tracking-wider text-jade",
						children: [new URL(p.url).hostname, " →"]
					})
				]
			}) }, p.url))
		})]
	});
}
//#endregion
//#region src/pages/CityPage.tsx
var VALID_IDS = [
	"beijing",
	"shanghai",
	"guangzhou",
	"shenzhen"
];
function CityPage() {
	const { cityId } = useParams();
	const { lang } = useLang();
	const isZh = lang === "zh";
	if (!cityId || !VALID_IDS.includes(cityId)) return /* @__PURE__ */ jsxs("main", {
		className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "text-2xl font-bold",
			children: isZh ? "未知城市" : "Unknown city"
		}), /* @__PURE__ */ jsx(Link, {
			to: "/",
			className: "text-jade hover:underline",
			children: isZh ? "返回首页" : "← Home"
		})]
	});
	const id = cityId;
	const label = CITY_LABELS[id];
	return /* @__PURE__ */ jsxs("main", {
		id: "top",
		className: "mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "text-xs font-bold uppercase tracking-widest text-muted hover:text-jade",
						children: isZh ? "← 全部城市" : "← All cities"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "text-4xl font-bold leading-tight",
						children: isZh ? label.zh : label.en
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted",
						children: isZh ? label.en : label.zh
					})
				]
			}),
			/* @__PURE__ */ jsx(VisaChecker, {}),
			/* @__PURE__ */ jsx(PaymentsChecklist, { cityId: id }),
			/* @__PURE__ */ jsx(TransportGuide, { cityId: id }),
			/* @__PURE__ */ jsx(FoodGuide, { cityId: id }),
			/* @__PURE__ */ jsx(EmergencyBriefing, { cityId: id }),
			/* @__PURE__ */ jsx(CityFurtherReading, { cityId: id }),
			/* @__PURE__ */ jsxs("section", {
				className: "flex flex-col gap-3 rounded-xl border border-dashed border-line bg-paper p-6",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-base font-bold",
						children: isZh ? "Phase 2 即将上线" : "Phase 2 — coming soon"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted",
						children: isZh ? "向中国本地用户提问、分享你的旅行经验功能正在开发。" : "Ask Chinese locals and share-your-trip features are in development."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest",
						children: [/* @__PURE__ */ jsx(Link, {
							to: "/ask",
							className: "rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade",
							children: isZh ? "向中国人提问" : "Ask Chinese locals"
						}), /* @__PURE__ */ jsx(Link, {
							to: "/share",
							className: "rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade",
							children: isZh ? "分享旅行" : "Share your trip"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx(SourcesNote, {})
		]
	});
}
//#endregion
//#region src/data/phase2-preview.ts
var badgeLadder = [
	{
		id: 0,
		nameEn: "Visitor",
		nameZh: "访客",
		criteriaEn: "Any logged-in user",
		criteriaZh: "任意登录用户",
		rightsEn: "Can ask questions, can vote on existing answers.",
		rightsZh: "可提问、可对已有答案投票。",
		colorClass: "bg-paper text-muted border-line"
	},
	{
		id: 1,
		nameEn: "Community Member",
		nameZh: "社区成员",
		criteriaEn: "3+ questions with net-positive votes + verified email",
		criteriaZh: "3 个被点赞问题 + 邮箱已验证",
		rightsEn: "Can post answers; cannot yet display a city-resident badge.",
		rightsZh: "可回答；暂不能展示本地常驻徽章。",
		colorClass: "bg-jade-soft text-jade border-jade/30"
	},
	{
		id: 2,
		nameEn: "Local Answerer",
		nameZh: "本地答主",
		criteriaEn: "Tier 1 + verified +86 phone number + 5 answers (≥3 with score ≥3)",
		criteriaZh: "T1 + 完成 +86 手机号 OTP + 累计 5 个答案，其中至少 3 个分数 ≥3",
		rightsEn: "Answers display a \"Local\" badge. Cannot vouch for others yet.",
		rightsZh: "答案旁显示\"本地\"徽章；暂不能为他人作担保。",
		colorClass: "bg-emerald-100 text-emerald-900 border-emerald-300"
	},
	{
		id: 3,
		nameEn: "Verified Local",
		nameZh: "认证本地",
		criteriaEn: "Tier 2 + vouched by 2 existing T3 users, OR 50 cumulative net-positive answer votes",
		criteriaZh: "T2 + 2 位 T3 用户担保，或累计 50 个净赞",
		rightsEn: "Answers display a verified-local badge. Can vouch for new T3 candidates (capped).",
		rightsZh: "显示\"认证本地\"徽章；可为新 T3 候选人作担保（每人有上限）。",
		colorClass: "bg-amber-100 text-amber-900 border-amber-300"
	}
];
var sampleQuestions = [
	{
		id: "q-bj-airport-late",
		questionEn: "Landing at PEK at 23:30 — will the Airport Express still be running?",
		questionZh: "晚上 23:30 落地首都机场，机场快线还有车吗？",
		topic: "Transport",
		cityScope: "beijing",
		answer: {
			answererTier: 3,
			answererCity: "Beijing · 9 yrs",
			bodyEn: "Last train from PEK T2/T3 to Dongzhimen leaves around 22:50. After that, take the airport shuttle bus or a Beijing B-plate taxi from the official rank — your hotel can confirm fare before you flag one.",
			bodyZh: "首都机场线 T2/T3 末班车约 22:50。之后只能坐机场大巴或在官方排队点打表京 B 出租车，提前问酒店大概多少钱。",
			votes: 24,
			postedDays: 4,
			lastVerifiedAgainstPolicy: "2026-04-15"
		}
	},
	{
		id: "q-sh-allergy-card",
		questionEn: "Severe peanut allergy — does the Mandarin allergy card actually work in small Shanghai restaurants?",
		questionZh: "严重花生过敏，中文过敏卡在上海小馆子真的有用吗？",
		topic: "Food / Allergy",
		cityScope: "shanghai",
		answer: {
			answererTier: 2,
			answererCity: "Shanghai · 4 yrs",
			bodyEn: "Mostly. Hand the card to the kitchen, not the waiter. Watch out for shared woks — peanut oil is poured in early. Stick to clearly-fried-to-order venues, avoid pre-prepped sauces. If the staff look uncertain, leave.",
			bodyZh: "基本能用。把卡递给后厨不是服务员。要注意共用炒锅—花生油很早就下锅。优先去明火现炒的店，避开预制酱料。员工答得含糊就别冒险。",
			votes: 17,
			postedDays: 12,
			lastVerifiedAgainstPolicy: "2026-03-22"
		}
	},
	{
		id: "q-sz-octopus",
		questionEn: "Coming from HK — what's the actual cheapest card setup for 3 days in Shenzhen?",
		questionZh: "从香港过去，深圳玩 3 天最便宜的交通卡组合是？",
		topic: "Transport",
		cityScope: "shenzhen",
		answer: {
			answererTier: 3,
			answererCity: "Shenzhen · 6 yrs",
			bodyEn: "Skip Octopus — doesn't work on SZ Metro. Three days = activate Alipay transit QR for Shenzhen (no deposit, refund unused balance). Need physical card? Shenzhen Tong at any service centre, ¥20 deposit refundable.",
			bodyZh: "别想八达通——深圳地铁不收。三天的话直接 Alipay 公交码开通深圳就行（无押金，余额可退）。要实体卡就在任意客服中心办深圳通，¥20 押金可退。",
			votes: 31,
			postedDays: 2,
			lastVerifiedAgainstPolicy: "2026-05-01"
		}
	}
];
var sampleShares = [{
	id: "share-1",
	authorAlias: "Ana M.",
	authorCountry: "ES",
	cityEn: "Guangzhou",
	cityZh: "广州",
	daysAgo: 3,
	textEn: "Three things I wish I'd known before flying to Guangzhou: (1) Canton Fair was on, restaurant prices were 40% up — book Pazhou hotels weeks early. (2) The yum cha tea-seat fee surprised me until a local explained — it's normal, not a scam. (3) Metro foreign-card tap actually works fine since October 2025; was way easier than I read in 2024 blogs.",
	textZh: "去广州前希望知道的三件事：(1) 广交会期间餐厅涨 40%，琶洲酒店要提前几周订。(2) 早茶茶位费一开始我以为被宰，后来本地朋友说是正常的。(3) 地铁外卡刷闸 2025-10 起就能用了，2024 年攻略说不行其实早过期了。",
	imageCount: 3,
	status: "published"
}, {
	id: "share-2",
	authorAlias: "Daniel K.",
	authorCountry: "DE",
	cityEn: "Shanghai",
	cityZh: "上海",
	daysAgo: 9,
	textEn: "PSA for fellow Germans: do NOT try to register WeChat after landing — German T-Mobile roaming SMS just doesn't deliver in China. I was stuck for 6 hours. My hotel concierge eventually did the friend-scan in 30 seconds. Set this up before boarding next time.",
	textZh: "提醒德国同胞：千万别落地后再注册微信。T-Mobile 漫游短信在中国就是收不到。我卡了 6 小时，最后酒店前台 30 秒帮我扫码搞定。下次一定出发前在德国本地搞好。",
	imageCount: 1,
	status: "published"
}];
var moderationFlow = [
	{
		id: "submit",
		titleEn: "1. You write & authorize",
		titleZh: "1. 写完并勾选授权",
		bodyEn: "Up to 1500 chars + 5 photos. You explicitly tick \"I authorize publication and translation of this content\". Both EXIF and original language are stored.",
		bodyZh: "1500 字 + 最多 5 张图。必须勾选\"我授权发布和翻译这条内容\"。EXIF 会被剥掉，原始语言版本会被保留。"
	},
	{
		id: "keyword",
		titleEn: "2. Keyword filter",
		titleZh: "2. 关键词硬拦截",
		bodyEn: "Hard reject: URLs, phone numbers, prices in ¥/$/€/£, email addresses, WeChat IDs, contact-soliciting words. No commercial leakage path.",
		bodyZh: "URL / 手机号 / 含 ¥/$/€/£ 的价格 / 邮箱 / 微信号 / 联系类用语 → 命中即拒。封死商业引流路径。"
	},
	{
		id: "ai",
		titleEn: "3. AI moderation",
		titleZh: "3. AI 审核",
		bodyEn: "OpenAI omni-moderation (text + image, 13 categories) scores the post. Chinese text is auto-translated to English first because no production API handles Chinese well. Score < 0.2 → auto-publish; > 0.85 → auto-reject; 0.2–0.85 → human queue.",
		bodyZh: "OpenAI omni-moderation 给文本 + 图片 13 类打分。中文先自动翻成英文再过 API（目前没有生产级中文审核 API）。<0.2 直发；>0.85 直拒；0.2–0.85 进人工队列。"
	},
	{
		id: "review",
		titleEn: "4. Human review (gray zone)",
		titleZh: "4. 人工复核（灰区）",
		bodyEn: "About 5–15% lands here. Reviewer sees original content + AI scores per category + policy links + approve / reject / escalate. Target SLA 2 hours. Decision is logged with reviewer ID.",
		bodyZh: "约 5–15% 进这层。审核员看原文 + AI 各类分数 + 政策条款 + 通过/拒/上报。目标 SLA 2 小时。决策带审核员 ID 写入日志。"
	},
	{
		id: "publish",
		titleEn: "5. Publish or notify",
		titleZh: "5. 发布或通知",
		bodyEn: "Approved → published with city tag, country code, and \"visitor note · authored by [alias] · not officially verified\" badge. Rejected → email with reason.",
		bodyZh: "通过 → 带城市 tag、国家码、\"访客笔记 · [署名] · 非官方核验\"标签发布。拒绝 → 邮件说明原因。"
	}
];
//#endregion
//#region src/pages/SharePage.tsx
function SharePage() {
	const { lang } = useLang();
	const isZh = lang === "zh";
	return /* @__PURE__ */ jsxs("main", {
		className: "mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "self-start rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800",
						children: isZh ? "Phase 2 · 即将上线" : "Phase 2 · coming soon"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "text-4xl font-bold leading-tight",
						children: isZh ? "分享你的旅行" : "Share your trip"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-base leading-relaxed text-ink/80",
						children: isZh ? "外国游客在北上广深的真实经历——文字 + 照片 + 国家代码。投稿必须勾选发布与翻译授权，所有内容过 AI 审核 + 关键词过滤。" : "Foreign tourists' real experiences in Beijing, Shanghai, Guangzhou, Shenzhen — text + photos + country code. Submission requires explicit publication-and-translation consent and passes AI moderation + keyword filter."
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ jsxs("header", { children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold uppercase tracking-widest text-muted",
					children: isZh ? "审核管线（投稿到发布）" : "Moderation pipeline (submit → publish)"
				}), /* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold",
					children: isZh ? "每条投稿 5 步流程" : "Every submission goes through 5 steps"
				})] }), /* @__PURE__ */ jsx("ol", {
					className: "grid gap-3 md:grid-cols-2 lg:grid-cols-3",
					children: moderationFlow.map((step) => /* @__PURE__ */ jsxs("li", {
						className: "flex flex-col gap-2 rounded-xl border border-line bg-white p-4",
						children: [/* @__PURE__ */ jsx("strong", {
							className: "text-sm leading-tight",
							children: isZh ? step.titleZh : step.titleEn
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs leading-relaxed text-ink/80",
							children: isZh ? step.bodyZh : step.bodyEn
						})]
					}, step.id))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ jsxs("header", { children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold uppercase tracking-widest text-muted",
					children: isZh ? "投稿表单（设计预览）" : "Submission form (design preview)"
				}), /* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold",
					children: isZh ? "授权 checkbox 是必勾项" : "The consent checkbox is non-skippable"
				})] }), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-3 rounded-xl border border-dashed border-line bg-paper p-6 opacity-90",
					children: [
						/* @__PURE__ */ jsxs("label", {
							className: "flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted",
							children: [isZh ? "你想分享哪个城市？" : "Which city are you writing about?", /* @__PURE__ */ jsx("select", {
								disabled: true,
								className: "rounded-lg border border-line bg-white px-3 py-2 text-sm",
								children: /* @__PURE__ */ jsx("option", { children: isZh ? "北京 · Beijing" : "Beijing" })
							})]
						}),
						/* @__PURE__ */ jsxs("label", {
							className: "flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted",
							children: [isZh ? "你的国家（公开显示为 2 字母代码）" : "Your country (public, shown as 2-letter code)", /* @__PURE__ */ jsx("input", {
								disabled: true,
								type: "text",
								placeholder: "DE / US / JP / FR …",
								className: "rounded-lg border border-line bg-white px-3 py-2 text-sm placeholder-muted"
							})]
						}),
						/* @__PURE__ */ jsxs("label", {
							className: "flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted",
							children: [isZh ? "正文（最多 1500 字）" : "Body (≤ 1500 chars)", /* @__PURE__ */ jsx("textarea", {
								disabled: true,
								rows: 5,
								placeholder: isZh ? "写下你的真实经历——什么有用、什么坑、出发前希望知道的事…" : "What worked, what didn't, what you wish you'd known before flying…",
								className: "rounded-lg border border-line bg-white px-3 py-2 text-sm placeholder-muted"
							})]
						}),
						/* @__PURE__ */ jsxs("label", {
							className: "flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted",
							children: [isZh ? "照片（最多 5 张，每张 ≤ 2 MB）" : "Photos (up to 5, ≤ 2 MB each)", /* @__PURE__ */ jsx("div", {
								className: "flex h-24 items-center justify-center rounded-lg border-2 border-dashed border-line bg-white text-xs text-muted",
								children: isZh ? "拖拽或点击上传" : "Drop files or click to upload"
							})]
						}),
						/* @__PURE__ */ jsxs("label", {
							className: "mt-2 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 p-3",
							children: [/* @__PURE__ */ jsx("input", {
								type: "checkbox",
								disabled: true,
								className: "mt-0.5 h-4 w-4"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-xs leading-relaxed",
								children: isZh ? "我拥有或有权发布此内容。我同意本站发布它，并为外国读者翻译。我保留对作品的版权。" : "I own or have permission to post this. I agree that this site may publish it and translate it for readers. I keep my rights."
							})]
						}),
						/* @__PURE__ */ jsxs("label", {
							className: "flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 p-3",
							children: [/* @__PURE__ */ jsx("input", {
								type: "checkbox",
								disabled: true,
								className: "mt-0.5 h-4 w-4"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-xs leading-relaxed",
								children: isZh ? "我理解这条内容（含翻译版本）会在中国境外展示。提供商：本站托管在境外服务器，AI 审核会调用境外 API。我可以随时编辑或删除，但已分发的翻译副本可能仍然存在。" : "I understand this content (including translations) may be displayed outside China. The site is hosted on overseas servers and AI moderation calls overseas APIs. I can edit or delete it later, subject to cached or already-distributed copies."
							})]
						}),
						/* @__PURE__ */ jsx("button", {
							disabled: true,
							className: "self-start rounded-full bg-ink px-5 py-2 text-xs font-bold uppercase tracking-widest text-white opacity-60",
							children: isZh ? "提交（Phase 2 上线后启用）" : "Submit (enabled when Phase 2 ships)"
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ jsxs("header", { children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold uppercase tracking-widest text-muted",
					children: isZh ? "已发布投稿（占位预览）" : "Published notes (mock preview)"
				}), /* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold",
					children: isZh ? "正文 + 照片 + 国家码 + 城市 tag" : "Text + photos + country + city tag"
				})] }), /* @__PURE__ */ jsx("ul", {
					className: "grid gap-3 md:grid-cols-2",
					children: sampleShares.map((s) => /* @__PURE__ */ jsxs("li", {
						className: "flex flex-col gap-2 rounded-xl border border-line bg-white p-5",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center gap-2 text-xs",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "rounded-full bg-paper px-2 py-0.5 font-bold uppercase tracking-wider text-muted",
										children: s.authorCountry
									}),
									/* @__PURE__ */ jsx("span", {
										className: "font-bold",
										children: s.authorAlias
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-muted",
										children: "·"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-muted",
										children: isZh ? s.cityZh : s.cityEn
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-muted",
										children: "·"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-muted",
										children: isZh ? `${s.daysAgo} 天前` : `${s.daysAgo} days ago`
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm leading-relaxed text-ink/85",
								children: isZh ? s.textZh : s.textEn
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted",
								children: [/* @__PURE__ */ jsxs("span", {
									className: "rounded-full bg-paper px-2 py-0.5 font-bold",
									children: [
										s.imageCount,
										" ",
										isZh ? "张图" : s.imageCount === 1 ? "photo" : "photos"
									]
								}), /* @__PURE__ */ jsx("span", {
									className: "rounded-full bg-amber-50 px-2 py-0.5 font-bold text-amber-800",
									children: isZh ? "访客笔记 · 非官方核验" : "visitor note · not officially verified"
								})]
							})
						]
					}, s.id))
				})]
			}),
			/* @__PURE__ */ jsx(Link, {
				to: "/",
				className: "self-start text-sm font-bold text-jade hover:underline",
				children: isZh ? "← 返回首页" : "← Back home"
			})
		]
	});
}
//#endregion
//#region src/pages/AskPage.tsx
function AskPage() {
	const { lang } = useLang();
	const isZh = lang === "zh";
	return /* @__PURE__ */ jsxs("main", {
		className: "mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "self-start rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800",
						children: isZh ? "Phase 2 · 即将上线" : "Phase 2 · coming soon"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "text-4xl font-bold leading-tight",
						children: isZh ? "向中国本地用户提问" : "Ask Chinese locals"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-base leading-relaxed text-ink/80",
						children: isZh ? "对北上广深的具体细节提问，由经过验证的本地长居用户回答。提问免费，浏览不需要登录。" : "Ask a specific question about Beijing, Shanghai, Guangzhou, or Shenzhen. Verified long-term residents answer. Browsing is free; login only when posting."
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ jsxs("header", { children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold uppercase tracking-widest text-muted",
						children: isZh ? "答主等级（earn-not-claim）" : "Answerer tier ladder (earn-not-claim)"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-bold",
						children: isZh ? "本地徽章不能买，只能赚" : "Local badge cannot be bought — only earned"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted",
						children: isZh ? "答主等级靠贡献自动累积，不能购买。我们不会收集中国身份证或 WeChat / Alipay 实名信息。" : "Tiers accumulate from contribution, never purchased. We do not collect Chinese national ID, passport scans, or WeChat / Alipay real-name tokens."
					})
				] }), /* @__PURE__ */ jsx("ol", {
					className: "grid gap-3 md:grid-cols-2",
					children: badgeLadder.map((tier) => /* @__PURE__ */ jsx(BadgeCard, {
						tier,
						isZh
					}, tier.id))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ jsxs("header", { children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold uppercase tracking-widest text-muted",
					children: isZh ? "样例问答（占位预览）" : "Sample Q&A (mock preview)"
				}), /* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold",
					children: isZh ? "答案旁显示答主常驻城市与等级徽章" : "Answers show the answerer's city and tier badge"
				})] }), /* @__PURE__ */ jsx("ul", {
					className: "flex flex-col gap-3",
					children: sampleQuestions.map((qa) => {
						const tier = badgeLadder[qa.answer.answererTier];
						return /* @__PURE__ */ jsxs("li", {
							className: "flex flex-col gap-3 rounded-xl border border-line bg-white p-5",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "rounded-full bg-paper px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted",
										children: qa.topic
									}), qa.cityScope && /* @__PURE__ */ jsx("span", {
										className: "rounded-full bg-paper px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted",
										children: qa.cityScope.toUpperCase()
									})]
								}),
								/* @__PURE__ */ jsx("strong", {
									className: "text-base leading-tight",
									children: isZh ? qa.questionZh : qa.questionEn
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col gap-2 rounded-lg border border-line bg-paper p-4",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex flex-wrap items-center gap-2 text-xs",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: clsx("rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", tier.colorClass),
													children: isZh ? `T${tier.id} ${tier.nameZh}` : `Tier ${tier.id} · ${tier.nameEn}`
												}),
												/* @__PURE__ */ jsx("span", {
													className: "text-muted",
													children: qa.answer.answererCity
												}),
												/* @__PURE__ */ jsx("span", {
													className: "text-muted",
													children: "·"
												}),
												/* @__PURE__ */ jsx("span", {
													className: "text-muted",
													children: isZh ? `${qa.answer.votes} 净赞` : `${qa.answer.votes} net votes`
												}),
												/* @__PURE__ */ jsx("span", {
													className: "text-muted",
													children: "·"
												}),
												/* @__PURE__ */ jsx("span", {
													className: "text-muted",
													children: isZh ? `${qa.answer.postedDays} 天前` : `${qa.answer.postedDays} days ago`
												})
											]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-sm leading-relaxed",
											children: isZh ? qa.answer.bodyZh : qa.answer.bodyEn
										}),
										/* @__PURE__ */ jsx("span", {
											className: "self-start text-[10px] uppercase tracking-wider text-muted",
											children: isZh ? `已对照官方政策核验：${qa.answer.lastVerifiedAgainstPolicy}` : `Last verified against policy: ${qa.answer.lastVerifiedAgainstPolicy}`
										})
									]
								})
							]
						}, qa.id);
					})
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "flex flex-col gap-3 rounded-xl border border-line bg-paper p-6",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-lg font-bold",
					children: isZh ? "怎么验证答主真的住在那个城市？" : "How is the answerer actually verified?"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "grid gap-2 md:grid-cols-2 text-sm leading-relaxed",
					children: [
						/* @__PURE__ */ jsxs("li", {
							className: "flex flex-col gap-1 rounded-lg border border-line bg-white p-3",
							children: [/* @__PURE__ */ jsx("strong", { children: isZh ? "+86 手机号 OTP" : "+86 phone OTP" }), /* @__PURE__ */ jsx("span", {
								className: "text-xs text-muted",
								children: isZh ? "中国 SIM 卡注册时实名上传到工信部。+86 OTP 只是软信号——但已能筛掉绝大多数非本地用户。" : "China SIMs are real-name registered with the Ministry of IT at activation. A +86 OTP is a soft but meaningful signal that filters out the vast majority of non-China users."
							})]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex flex-col gap-1 rounded-lg border border-line bg-white p-3",
							children: [/* @__PURE__ */ jsx("strong", { children: isZh ? "答题分数累积" : "Cumulative answer score" }), /* @__PURE__ */ jsx("span", {
								className: "text-xs text-muted",
								children: isZh ? "Stack Overflow 思路：被点赞的回答多了自动升级。可观察、可衡量、不靠人工评判。" : "Stack Overflow approach: enough net-positive answers and you auto-promote. Observable, measurable, no editorial gating."
							})]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex flex-col gap-1 rounded-lg border border-line bg-white p-3",
							children: [/* @__PURE__ */ jsx("strong", { children: isZh ? "T3 用户互相担保" : "T3 user vouching" }), /* @__PURE__ */ jsx("span", {
								className: "text-xs text-muted",
								children: isZh ? "PGP web-of-trust 模式：两个已认证 T3 用户为新人担保。每个 T3 担保上限有限，避免小圈子互保。" : "PGP web-of-trust pattern: two existing T3 users vouch for a new candidate. Each voucher has a cap to prevent cliques."
							})]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex flex-col gap-1 rounded-lg border border-line bg-white p-3",
							children: [/* @__PURE__ */ jsx("strong", { children: isZh ? "我们不会做的事" : "What we will NOT do" }), /* @__PURE__ */ jsx("span", {
								className: "text-xs text-muted",
								children: isZh ? "不收中国身份证号、不收护照扫描、不绑定微信/支付宝实名 token。这是 PIPL 高压线，外国平台跨境收这类数据需安全评估，得不偿失。" : "We will NOT collect Chinese national ID numbers, passport scans, or WeChat/Alipay real-name tokens. PIPL forbids cross-border collection without a security assessment — the risk far outweighs the benefit."
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx(Link, {
				to: "/",
				className: "self-start text-sm font-bold text-jade hover:underline",
				children: isZh ? "← 返回首页" : "← Back home"
			})
		]
	});
}
function BadgeCard({ tier, isZh }) {
	return /* @__PURE__ */ jsxs("li", {
		className: "flex flex-col gap-2 rounded-xl border border-line bg-white p-4",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "flex items-center justify-between",
				children: /* @__PURE__ */ jsx("span", {
					className: clsx("rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", tier.colorClass),
					children: isZh ? `T${tier.id} · ${tier.nameZh}` : `Tier ${tier.id} · ${tier.nameEn}`
				})
			}),
			/* @__PURE__ */ jsxs("strong", {
				className: "text-sm leading-tight",
				children: [isZh ? "门槛：" : "Criteria: ", /* @__PURE__ */ jsx("span", {
					className: "font-normal text-ink/80",
					children: isZh ? tier.criteriaZh : tier.criteriaEn
				})]
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "text-xs text-muted",
				children: [isZh ? "权限：" : "Rights: ", isZh ? tier.rightsZh : tier.rightsEn]
			})
		]
	});
}
//#endregion
//#region src/data/sources.ts
var TODAY = "2026-05-09";
var make = (record) => ({
	...record,
	domain: new URL(record.url).hostname
});
var list = [
	make({
		id: "nia-unilateral-list",
		url: "https://en.nia.gov.cn/n147418/n147463/c183390/content.html",
		publisher: "NIA",
		publisherUrl: "https://en.nia.gov.cn",
		pageTitleEn: "List of Countries Covered by Unilateral Visa Exemption Policies",
		publishedDate: "2026-02-17",
		verifiedDate: TODAY
	}),
	make({
		id: "nia-transit-list",
		url: "https://en.nia.gov.cn/n147418/n147463/c156094/content.html",
		publisher: "NIA",
		publisherUrl: "https://en.nia.gov.cn",
		pageTitleEn: "Transit Visa-Free Policy",
		publishedDate: "2023-10-19",
		verifiedDate: TODAY
	}),
	make({
		id: "state-council-240h",
		url: "https://english.www.gov.cn/news/202511/04/content_WS69094ae0c6d00ca5f9a07472.html",
		publisher: "State Council",
		publisherUrl: "https://english.www.gov.cn",
		pageTitleEn: "China expands 240-hour visa-free transit to 65 ports",
		publishedDate: "2025-11-04",
		verifiedDate: TODAY
	}),
	make({
		id: "nia-online-entry-card",
		url: "https://en.nia.gov.cn/n147418/n147468/c187308/content.html",
		publisher: "NIA",
		publisherUrl: "https://en.nia.gov.cn",
		pageTitleEn: "Online Foreigner Entry/Exit Card pre-filling service",
		publishedDate: "2025-11-20",
		verifiedDate: TODAY
	}),
	make({
		id: "nia-card-fraud-warning",
		url: "https://en.nia.gov.cn/n147418/n147463/c191530/content.html",
		publisher: "NIA",
		publisherUrl: "https://en.nia.gov.cn",
		pageTitleEn: "Warning on counterfeit entry-card websites",
		verifiedDate: TODAY
	}),
	make({
		id: "mfa-consular-directory",
		url: "https://www.fmprc.gov.cn/web/fw_673051/lbfw_673061/fgzl_673083/",
		publisher: "MFA",
		publisherUrl: "https://www.fmprc.gov.cn",
		pageTitleEn: "Foreign Consular Missions in China",
		verifiedDate: TODAY
	}),
	make({
		id: "visa-application-center",
		url: "https://www.visaforchina.cn",
		publisher: "Chinese Visa Application Service Center",
		publisherUrl: "https://www.visaforchina.cn",
		pageTitleEn: "Chinese Visa Application Service Center",
		verifiedDate: TODAY
	}),
	make({
		id: "beijing-airport-services",
		url: "https://english.beijing.gov.cn/livinginbeijing/transportation/airport/202501/t20250108_3984022.html",
		publisher: "Beijing Government",
		publisherUrl: "https://english.beijing.gov.cn",
		pageTitleEn: "Beijing Service counters at Capital and Daxing airports",
		publishedDate: "2025-01-08",
		verifiedDate: TODAY
	}),
	make({
		id: "beijing-subway-foreign-card",
		url: "https://english.beijing.gov.cn/travellinginbeijing/essentials/inboundtourismfacilitationmeasures/202603/t20260326_4566767.html",
		publisher: "Beijing Government",
		publisherUrl: "https://english.beijing.gov.cn",
		pageTitleEn: "Beijing subway accepts UnionPay/Visa/Mastercard/JCB/Amex tap-to-ride",
		publishedDate: "2026-03-26",
		verifiedDate: TODAY
	}),
	make({
		id: "beijing-medical-guide",
		url: "https://english.beijing.gov.cn/latest/news/202511/t20251110_4267485.html",
		publisher: "Beijing Government",
		publisherUrl: "https://english.beijing.gov.cn",
		pageTitleEn: "Foreigner medical service guide for Beijing (17 international hospitals)",
		publishedDate: "2025-11-10",
		verifiedDate: TODAY
	}),
	make({
		id: "beijing-12345-hotline",
		url: "https://english.beijing.gov.cn/12345hotline/index.html?src=4",
		publisher: "Beijing Government",
		publisherUrl: "https://english.beijing.gov.cn",
		pageTitleEn: "Beijing 12345 multilingual hotline (10 languages)",
		verifiedDate: TODAY
	}),
	make({
		id: "shanghai-customs-immigration",
		url: "https://english.shanghai.gov.cn/en-CustomsImmigration/20251112/c90227e252884a949f2091c37a0818ac.html",
		publisher: "Shanghai Government",
		publisherUrl: "https://english.shanghai.gov.cn",
		pageTitleEn: "Shanghai online entry card and Hongqiao e-filing service",
		publishedDate: "2025-11-12",
		verifiedDate: TODAY
	}),
	make({
		id: "shanghai-maglev-foreign-card",
		url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20250614/a5c7bac93f024324ace770d3275d28b6.html",
		publisher: "Shanghai Government",
		publisherUrl: "https://english.shanghai.gov.cn",
		pageTitleEn: "Maglev accepts foreign cards",
		publishedDate: "2025-06-14",
		verifiedDate: TODAY
	}),
	make({
		id: "shanghai-public-transport",
		url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240422/5251c321845b4a488723bb51dd23adc2.html",
		publisher: "Shanghai Government",
		publisherUrl: "https://english.shanghai.gov.cn",
		pageTitleEn: "Shanghai metro / bus / ferry payment options",
		publishedDate: "2024-04-22",
		verifiedDate: TODAY
	}),
	make({
		id: "shanghai-healthcare-foreign",
		url: "https://english.shanghai.gov.cn/en-Healthcare/20250227/54af530f3bd4400da6a6fa8111bd308f.html",
		publisher: "Shanghai Government",
		publisherUrl: "https://english.shanghai.gov.cn",
		pageTitleEn: "Shanghai foreigner-friendly hospitals (Huashan international etc.)",
		publishedDate: "2025-02-27",
		verifiedDate: TODAY
	}),
	make({
		id: "gz-baiyun-t3",
		url: "https://www.gz.gov.cn/zwfw/zxfw/jtfw/content/post_10658828.html",
		publisher: "Guangzhou Government",
		publisherUrl: "https://www.gz.gov.cn",
		pageTitleEn: "Baiyun Airport T3 international/regional flights",
		verifiedDate: TODAY
	}),
	make({
		id: "gz-metro-foreign-card",
		url: "https://www.gz.gov.cn/guangzhouinternational/138/content/post_10480554.html",
		publisher: "Guangzhou Government",
		publisherUrl: "https://www.gz.gov.cn",
		pageTitleEn: "Guangzhou metro accepts UnionPay/Mastercard/Visa/JCB/Amex (since 2025-10-12)",
		publishedDate: "2025-10-12",
		verifiedDate: TODAY
	}),
	make({
		id: "gz-payment-acceptance",
		url: "https://www.gz.gov.cn/zt/qltjygadwqjsxsdzgzlfzdf/gzzxd/content/post_9577269.html",
		publisher: "Guangzhou Government",
		publisherUrl: "https://www.gz.gov.cn",
		pageTitleEn: "Guangzhou foreign-card acceptance program",
		verifiedDate: TODAY
	}),
	make({
		id: "sz-airport-gtc",
		url: "https://jtys.sz.gov.cn/ydmh/jtcx/sjcx/jcgk/content/post_8527201.html",
		publisher: "Shenzhen Transport Bureau",
		publisherUrl: "https://jtys.sz.gov.cn",
		pageTitleEn: "Bao'an Airport ground transport center (GTC)",
		verifiedDate: TODAY
	}),
	make({
		id: "sz-metro-foreign-card",
		url: "https://jtys.sz.gov.cn/ydmh/jtzx/zyhy_1510/content/post_11264754.html",
		publisher: "Shenzhen Transport Bureau",
		publisherUrl: "https://jtys.sz.gov.cn",
		pageTitleEn: "Shenzhen metro foreign-card POS at 8 hubs + cash retained",
		verifiedDate: TODAY
	}),
	make({
		id: "sz-cross-border-payment",
		url: "https://www.sz.gov.cn/cn/xxgk/zfxxgj/zwdt/content/post_12305039.html",
		publisher: "Shenzhen Government",
		publisherUrl: "https://www.sz.gov.cn",
		pageTitleEn: "Shenzhen cross-border payment program (AlipayHK)",
		verifiedDate: TODAY
	}),
	make({
		id: "sz-line11-airport",
		url: "https://jtys.sz.gov.cn/ydmh/jtcx/sjcx/jcgk/content/post_8527070.html",
		publisher: "Shenzhen Transport Bureau",
		publisherUrl: "https://jtys.sz.gov.cn",
		pageTitleEn: "Metro Line 11 airport route to Qianhai/Nanshan/Futian/Gangshabei",
		verifiedDate: TODAY
	}),
	make({
		id: "sz-night-bus",
		url: "https://jtys.sz.gov.cn/zwgk/jtzx/cxtx/content/post_10939875.html",
		publisher: "Shenzhen Transport Bureau",
		publisherUrl: "https://jtys.sz.gov.cn",
		pageTitleEn: "Shenzhen Zero Hour Express (overnight airport bus)",
		verifiedDate: TODAY
	}),
	make({
		id: "rail-12306-en",
		url: "https://www.12306.cn/en/index.html",
		publisher: "China Railway",
		publisherUrl: "https://www.12306.cn",
		pageTitleEn: "12306 international ticket platform",
		verifiedDate: TODAY
	}),
	make({
		id: "rail-12306-faq",
		url: "https://www.12306.cn/en/faq.html",
		publisher: "China Railway",
		publisherUrl: "https://www.12306.cn",
		pageTitleEn: "12306 FAQ — registration / payment / refund",
		verifiedDate: TODAY
	}),
	make({
		id: "beijing-train-id-verify",
		url: "https://wb.beijing.gov.cn/home/index/wsjx/202401/t20240115_3535596.html",
		publisher: "Beijing Foreign Affairs Office",
		publisherUrl: "https://wb.beijing.gov.cn",
		pageTitleEn: "Identity verification for buying train tickets in China",
		publishedDate: "2024-01-15",
		verifiedDate: TODAY
	}),
	make({
		id: "beijing-subway-five-cards",
		url: "https://wb.beijing.gov.cn/en/express/202508/t20250828_4186027.html",
		publisher: "Beijing Foreign Affairs Office",
		publisherUrl: "https://wb.beijing.gov.cn",
		pageTitleEn: "Beijing Subway: tap-to-go with all 5 international card brands",
		publishedDate: "2025-08-28",
		verifiedDate: TODAY
	}),
	make({
		id: "beijing-airport-express",
		url: "https://english.beijing.gov.cn/travellinginbeijing/transportation/airport/202005/t20200516_1899219.html",
		publisher: "Beijing Government",
		publisherUrl: "https://english.beijing.gov.cn",
		pageTitleEn: "Beijing Capital International Airport — Airport Express info",
		verifiedDate: TODAY
	}),
	make({
		id: "beijing-daxing-final-train",
		url: "https://english.beijing.gov.cn/livinginbeijing/transportation/beijingsubway/202411/t20241110_3937243.html",
		publisher: "Beijing Government",
		publisherUrl: "https://english.beijing.gov.cn",
		pageTitleEn: "Daxing Airport Express — operating hours",
		publishedDate: "2024-11-10",
		verifiedDate: TODAY
	}),
	make({
		id: "shanghai-metro-five-cards",
		url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20250627/d8f21f2e7d3b45a5b03757e35039b806.html",
		publisher: "Shanghai Government",
		publisherUrl: "https://english.shanghai.gov.cn",
		pageTitleEn: "Shanghai Metro full-network tap-to-ride (5 networks + e-CNY)",
		publishedDate: "2025-06-27",
		verifiedDate: TODAY
	}),
	make({
		id: "shanghai-maglev-bank-cards",
		url: "https://english.pudong.gov.cn/2025-06/16/c_1100880.htm",
		publisher: "Pudong Government",
		publisherUrl: "https://english.pudong.gov.cn",
		pageTitleEn: "Shanghai Maglev accepts foreign bank cards (since 2025-06-14)",
		publishedDate: "2025-06-16",
		verifiedDate: TODAY
	}),
	make({
		id: "shanghai-maglev-fare",
		url: "https://english.pudong.gov.cn/chinashftz/2018-09/01/c_262635.htm",
		publisher: "Pudong Government",
		publisherUrl: "https://english.pudong.gov.cn",
		pageTitleEn: "Shanghai Maglev — fare and operating hours",
		verifiedDate: TODAY
	}),
	make({
		id: "shanghai-airport-link",
		url: "https://english.shanghai.gov.cn/en-Transportation/20241231/f66f14bbd4b549ab88e6f3aec375790c.html",
		publisher: "Shanghai Government",
		publisherUrl: "https://english.shanghai.gov.cn",
		pageTitleEn: "How to take Airport Link Line (PVG ↔ SHA)",
		publishedDate: "2024-12-31",
		verifiedDate: TODAY
	}),
	make({
		id: "gz-metro-tap-to-ride",
		url: "http://www.eguangzhou.gov.cn/gzservice/content/post_39343.html",
		publisher: "Guangzhou Government",
		publisherUrl: "http://www.eguangzhou.gov.cn",
		pageTitleEn: "Guangzhou Metro tap-to-ride foreign cards (since 2025-10-12)",
		publishedDate: "2025-10-12",
		verifiedDate: TODAY
	}),
	make({
		id: "gz-baiyun-t3-airport",
		url: "http://www.eguangzhou.gov.cn/gzservice/content/post_39620.html",
		publisher: "Guangzhou Government",
		publisherUrl: "http://www.eguangzhou.gov.cn",
		pageTitleEn: "Baiyun Airport T3 transport guide",
		verifiedDate: TODAY
	}),
	make({
		id: "gz-alipayhk-transit",
		url: "https://www.gz.gov.cn/guangzhouinternational/home/citynews/content/post_9529430.html",
		publisher: "Guangzhou Government",
		publisherUrl: "https://www.gz.gov.cn",
		pageTitleEn: "AlipayHK accepted on Guangzhou metro/bus (since 2024-03-04)",
		publishedDate: "2024-03-04",
		verifiedDate: TODAY
	}),
	make({
		id: "sz-baoan-airport-plan",
		url: "https://www.sz.gov.cn/en_szgov/news/infocus/SZCitywalk/Explore/Plan/content/post_11908152.html",
		publisher: "Shenzhen Government",
		publisherUrl: "https://www.sz.gov.cn",
		pageTitleEn: "Bao'an Airport — full ground transport map",
		verifiedDate: TODAY
	}),
	make({
		id: "sz-metro-pos",
		url: "https://www.sz.gov.cn/en_szgov/news/latest/content/post_11628100.html",
		publisher: "Shenzhen Government",
		publisherUrl: "https://www.sz.gov.cn",
		pageTitleEn: "Shenzhen Metro POS terminals at 391 service centres (6 networks)",
		publishedDate: "2024-10-14",
		verifiedDate: TODAY
	}),
	make({
		id: "sz-hk-cross-border-qr",
		url: "https://www.sz.gov.cn/en_szgov/news/infocus/block/news/travel/content/post_10622813.html",
		publisher: "Shenzhen Government",
		publisherUrl: "https://www.sz.gov.cn",
		pageTitleEn: "SZ-HK cross-border single QR (since 2023-06-01)",
		publishedDate: "2023-06-01",
		verifiedDate: TODAY
	}),
	make({
		id: "sz-tax-refund-alipayhk",
		url: "https://www.sz.gov.cn/en_szgov/news/latest/content/post_12373687.html",
		publisher: "Shenzhen Government",
		publisherUrl: "https://www.sz.gov.cn",
		pageTitleEn: "Shenzhen instant tax refund via AlipayHK (up to 11%)",
		publishedDate: "2025-09-08",
		verifiedDate: TODAY
	}),
	make({
		id: "pboc-payment-uplift",
		url: "https://english.www.gov.cn/news/202404/11/content_WS6617c858c6d0868f4e8e5f4d.html",
		publisher: "State Council",
		publisherUrl: "https://english.www.gov.cn",
		pageTitleEn: "PBOC payment service guide for overseas visitors (USD 5K / 50K limits)",
		publishedDate: "2024-04-11",
		verifiedDate: TODAY
	}),
	make({
		id: "customs-clearance-guide",
		url: "http://english.customs.gov.cn/statics/88707c1e-aa4e-40ca-a968-bdbdbb565e4f.html",
		publisher: "China Customs (GACC)",
		publisherUrl: "http://english.customs.gov.cn",
		pageTitleEn: "Customs Clearance Guide for International Passengers",
		verifiedDate: TODAY
	}),
	make({
		id: "boc-atm-en",
		url: "https://www.boc.cn/english/individuals/pbk/sch/202601/t20260105_25639179.html",
		publisher: "Bank of China",
		publisherUrl: "https://www.boc.cn",
		pageTitleEn: "BOC ATM — accepts Visa/MC/JCB/Amex/UnionPay; CNY 3,000/tx",
		publishedDate: "2026-01-05",
		verifiedDate: TODAY
	}),
	make({
		id: "unionpay-intl-tips",
		url: "https://m.unionpayintl.com/wap/en/serviceCenter/cardUsingInstructions/1435.shtml",
		publisher: "UnionPay International",
		publisherUrl: "https://m.unionpayintl.com",
		pageTitleEn: "UnionPay overseas-card usage in China",
		verifiedDate: TODAY
	}),
	make({
		id: "shanghai-emergency-numbers",
		url: "https://english.shanghai.gov.cn/en-EmergencyNumbers/20241210/cbc5280b9f96440a93234bfc5e0c1023.html",
		publisher: "Shanghai Government",
		publisherUrl: "https://english.shanghai.gov.cn",
		pageTitleEn: "What to do in an emergency — Shanghai 110 in 8 languages",
		publishedDate: "2024-12-10",
		verifiedDate: TODAY
	}),
	make({
		id: "beijing-emergency-numbers",
		url: "https://english.beijing.gov.cn/travellinginbeijing/quickguideontravelservices/traveltips/202108/t20210811_2466839.html",
		publisher: "Beijing Government",
		publisherUrl: "https://english.beijing.gov.cn",
		pageTitleEn: "Beijing emergency numbers (110/119/120/122)",
		publishedDate: "2021-08-11",
		verifiedDate: TODAY
	}),
	make({
		id: "pumch-foreign-care",
		url: "https://www.pumch.cn/en/medical_care.html",
		publisher: "Peking Union Medical College Hospital",
		publisherUrl: "https://www.pumch.cn",
		pageTitleEn: "PUMCH international medical services",
		verifiedDate: TODAY
	}),
	make({
		id: "ufh-beijing",
		url: "https://beijing.ufh.com.cn/locations/main-campus?lang=en",
		publisher: "United Family Healthcare",
		publisherUrl: "https://beijing.ufh.com.cn",
		pageTitleEn: "Beijing United Family Hospital — main campus",
		verifiedDate: TODAY
	}),
	make({
		id: "huashan-shanghai",
		url: "https://english.shanghai.gov.cn/en-Hospitals/20241014/e3bebde56c344efcbc3ca57e3a50e55a.html",
		publisher: "Shanghai Government",
		publisherUrl: "https://english.shanghai.gov.cn",
		pageTitleEn: "Huashan Hospital — World Health Clinic",
		publishedDate: "2024-10-14",
		verifiedDate: TODAY
	}),
	make({
		id: "ufh-shanghai",
		url: "https://shanghai.ufh.com.cn/locations/puxi-main-hospital/?lang=en",
		publisher: "United Family Healthcare",
		publisherUrl: "https://shanghai.ufh.com.cn",
		pageTitleEn: "Shanghai United Family Hospital — Puxi",
		verifiedDate: TODAY
	}),
	make({
		id: "fahsysu-gz",
		url: "https://www.fahsysu.org.cn/en/basic/5855",
		publisher: "First Affiliated Hospital, Sun Yat-sen University",
		publisherUrl: "https://www.fahsysu.org.cn",
		pageTitleEn: "International Medicine — FAH-SYSU Guangzhou",
		verifiedDate: TODAY
	}),
	make({
		id: "ufh-guangzhou",
		url: "https://guangzhou.ufh.com.cn/locations/guangzhou-united-family-hospital?lang=en",
		publisher: "United Family Healthcare",
		publisherUrl: "https://guangzhou.ufh.com.cn",
		pageTitleEn: "Guangzhou United Family Hospital",
		verifiedDate: TODAY
	}),
	make({
		id: "hku-szh",
		url: "https://www.hku-szh.org/en/imc/index.html",
		publisher: "HKU-Shenzhen Hospital",
		publisherUrl: "https://www.hku-szh.org",
		pageTitleEn: "International Medical Center — HKU-Shenzhen Hospital",
		verifiedDate: TODAY
	}),
	make({
		id: "sz-hospitals-municipal",
		url: "https://www.sz.gov.cn/en_szgov/life/hospitals/municipal/content/post_11220998.html",
		publisher: "Shenzhen Government",
		publisherUrl: "https://www.sz.gov.cn",
		pageTitleEn: "Shenzhen municipal hospitals directory",
		verifiedDate: TODAY
	}),
	make({
		id: "shanghai-12345",
		url: "https://english.shanghai.gov.cn/en/20231223/7b8359d283634bd99b4e7a2c5a89314c.html",
		publisher: "Shanghai Government",
		publisherUrl: "https://english.shanghai.gov.cn",
		pageTitleEn: "Shanghai 12345 (18 languages, press 7 for foreign)",
		publishedDate: "2023-12-23",
		verifiedDate: TODAY
	}),
	make({
		id: "gz-960169-bridge",
		url: "https://www.gz.gov.cn/guangzhouinternational/pageelements/bottom/contactus/",
		publisher: "Guangzhou Government",
		publisherUrl: "https://www.gz.gov.cn",
		pageTitleEn: "Guangzhou 960169 multilingual interpretation bridge",
		verifiedDate: TODAY
	}),
	make({
		id: "sz-12345-pingshan",
		url: "https://www.szpsq.gov.cn/English/SERVICES/Hotlines/content/post_11567594.html",
		publisher: "Shenzhen Pingshan District",
		publisherUrl: "https://www.szpsq.gov.cn",
		pageTitleEn: "Shenzhen 12345 + iShenzhen multilingual app",
		verifiedDate: TODAY
	}),
	make({
		id: "us-embassy-china",
		url: "https://china.usembassy-china.org.cn/embassy-consulates/beijing/",
		publisher: "U.S. Embassy Beijing",
		publisherUrl: "https://china.usembassy-china.org.cn",
		pageTitleEn: "U.S. Embassy Beijing contact",
		verifiedDate: TODAY
	}),
	make({
		id: "uk-embassy-china",
		url: "https://www.gov.uk/world/organisations/british-embassy-beijing",
		publisher: "FCDO (UK)",
		publisherUrl: "https://www.gov.uk",
		pageTitleEn: "British Embassy Beijing",
		verifiedDate: TODAY
	}),
	make({
		id: "ca-embassy-china",
		url: "https://www.international.gc.ca/country-pays/china-chine/beijing.aspx?lang=eng",
		publisher: "Global Affairs Canada",
		publisherUrl: "https://www.international.gc.ca",
		pageTitleEn: "Embassy of Canada to China",
		verifiedDate: TODAY
	}),
	make({
		id: "au-embassy-china",
		url: "https://china.embassy.gov.au/bjng/contact-us.html",
		publisher: "Australian Embassy Beijing",
		publisherUrl: "https://china.embassy.gov.au",
		pageTitleEn: "Australian Embassy Beijing",
		verifiedDate: TODAY
	}),
	make({
		id: "jp-embassy-china",
		url: "https://www.cn.emb-japan.go.jp/",
		publisher: "Embassy of Japan in China",
		publisherUrl: "https://www.cn.emb-japan.go.jp",
		pageTitleEn: "Embassy of Japan in China",
		verifiedDate: TODAY
	}),
	make({
		id: "beijing-roast-duck",
		url: "https://english.beijing.gov.cn/livinginbeijing/dining/202005/t20200513_1896788.html",
		publisher: "Beijing Government",
		publisherUrl: "https://english.beijing.gov.cn",
		pageTitleEn: "Beijing roast duck — official dining guide",
		verifiedDate: TODAY
	}),
	make({
		id: "beijing-axis-snacks",
		url: "https://english.beijing.gov.cn/specials/centralaxis/sightseeingalongthecentralaxis/202206/t20220602_2728696.html",
		publisher: "Beijing Government",
		publisherUrl: "https://english.beijing.gov.cn",
		pageTitleEn: "Beijing central-axis old-Beijing snacks",
		verifiedDate: TODAY
	}),
	make({
		id: "shanghai-xiaolongbao",
		url: "https://english.shanghai.gov.cn/en-ExpressNewsClips-Videos-WhatsNew/20250217/9795ba943afe49f8992604bf20d5ae08.html",
		publisher: "Shanghai Government",
		publisherUrl: "https://english.shanghai.gov.cn",
		pageTitleEn: "Shanghai xiaolongbao — official dining feature",
		publishedDate: "2025-02-17",
		verifiedDate: TODAY
	}),
	make({
		id: "gz-foreigner-guide-pdf",
		url: "https://www.gz.gov.cn/attachment/7/7792/7792046/10199330.pdf",
		publisher: "Guangzhou Government",
		publisherUrl: "https://www.gz.gov.cn",
		pageTitleEn: "Guangzhou foreigner travel and dining guide (PDF)",
		verifiedDate: TODAY
	}),
	make({
		id: "blog-wanderinchina-alipay",
		url: "https://www.wanderinchina.com/survival-guide/useful-mobile-apps/alipay/",
		publisher: "WanderinChina",
		publisherUrl: "https://www.wanderinchina.com",
		pageTitleEn: "Alipay survival guide for foreign tourists",
		publishedDate: "2026-03",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-chinaguidelines-tourcard",
		url: "https://chinaguidelines.com/en/posts/tour-card",
		publisher: "ChinaGuidelines",
		publisherUrl: "https://chinaguidelines.com",
		pageTitleEn: "Tour Card shutdown timeline",
		publishedDate: "2026",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-hiddenchina-payments",
		url: "https://hiddenchinatravel.com/digital-survival-china-payment-guide/",
		publisher: "Hidden China Travel",
		publisherUrl: "https://hiddenchinatravel.com",
		pageTitleEn: "Digital survival — China payment guide",
		publishedDate: "2026",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-hiddenchina-kyc",
		url: "https://hiddenchinatravel.com/alipay-wechat-pay-verification-failed/",
		publisher: "Hidden China Travel",
		publisherUrl: "https://hiddenchinatravel.com",
		pageTitleEn: "Alipay / WeChat verification failed — diagnosis",
		publishedDate: "2025-2026",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-letstravel-alipay",
		url: "https://letstraveltochina.com/how-to-use-alipay-in-china/",
		publisher: "LetsTravelToChina",
		publisherUrl: "https://letstraveltochina.com",
		pageTitleEn: "How to use Alipay in China",
		publishedDate: "2026",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-baoziinchina-wechat",
		url: "https://baoziinchina.com/how-to-set-up-wechat/",
		publisher: "Baozi in China",
		publisherUrl: "https://baoziinchina.com",
		pageTitleEn: "How to set up WeChat as a foreigner",
		publishedDate: "2026",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-wildchina-alipay",
		url: "https://wildchina.com/2025/10/guide-to-using-alipay-2025/",
		publisher: "WildChina",
		publisherUrl: "https://wildchina.com",
		pageTitleEn: "Guide to using Alipay 2025",
		publishedDate: "2025-10",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-wildchina-wechat",
		url: "https://wildchina.com/2025/05/wechat-pay-in-2025/",
		publisher: "WildChina",
		publisherUrl: "https://wildchina.com",
		pageTitleEn: "WeChat Pay in 2025",
		publishedDate: "2025-05",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-travelchinawith-alipay",
		url: "https://travelchinawith.me/china-travel-how-tos/how-to-use-alipay-in-china/",
		publisher: "TravelChinaWith.Me",
		publisherUrl: "https://travelchinawith.me",
		pageTitleEn: "How to use Alipay in China — practical guide",
		publishedDate: "2026-03-11",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-realchinatrip-wechat",
		url: "https://realchinatrip.com/blogs/tips/wechat-setup-guide-tourists",
		publisher: "RealChinaTrip",
		publisherUrl: "https://realchinatrip.com",
		pageTitleEn: "WeChat setup guide for tourists",
		publishedDate: "2026-03-24",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-expatden-wechat",
		url: "https://www.expatden.com/china/wechat-pay/",
		publisher: "ExpatDen",
		publisherUrl: "https://www.expatden.com",
		pageTitleEn: "WeChat Pay — expat community guide",
		publishedDate: "2026-03-10",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-fanketravel-payments",
		url: "https://fanketravel.com/blogs/blog/how-to-use-alipay-and-wechat-pay-as-a-tourist-in-china-2025-guide",
		publisher: "Fanke Travel",
		publisherUrl: "https://fanketravel.com",
		pageTitleEn: "Alipay & WeChat Pay tourist guide 2025",
		publishedDate: "2025",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-ltl-alipay",
		url: "https://ltl-school.com/alipay-for-foreigners/",
		publisher: "LTL Mandarin School",
		publisherUrl: "https://ltl-school.com",
		pageTitleEn: "Alipay for foreigners",
		publishedDate: "2026",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-ltl-wechat",
		url: "https://ltl-school.com/wechat-pay-for-foreigners/",
		publisher: "LTL Mandarin School",
		publisherUrl: "https://ltl-school.com",
		pageTitleEn: "WeChat Pay for foreigners",
		publishedDate: "2026",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-travelofchina-alipay",
		url: "https://www.travelofchina.com/alipay-for-foreigners-china-2025-guide/",
		publisher: "TravelOfChina",
		publisherUrl: "https://www.travelofchina.com",
		pageTitleEn: "Alipay for foreigners — China 2025 guide",
		publishedDate: "2025",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-cft-transit",
		url: "https://chinafortravelers.com/guides/china-visa-free-transit/",
		publisher: "ChinaForTravelers",
		publisherUrl: "https://chinafortravelers.com",
		pageTitleEn: "China visa-free transit — practitioner guide",
		publishedDate: "2025",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-smartsh-faq",
		url: "https://www.smartshanghai.com/articles/shanghai-life/the-faq-china-visa-on-arrivals-need-to-know",
		publisher: "SmartShanghai",
		publisherUrl: "https://www.smartshanghai.com",
		pageTitleEn: "Visa on arrival — what to know",
		publishedDate: "2025",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-thechinajourney",
		url: "https://www.thechinajourney.com/china-travel-tips/",
		publisher: "TheChinaJourney",
		publisherUrl: "https://www.thechinajourney.com",
		pageTitleEn: "China travel tips — accommodation, water, prescriptions, registration",
		publishedDate: "2025-2026",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-rachelmeetschina",
		url: "https://rachelmeetschina.com/2024/10/29/traveling-to-china-how-to-connect-your-foreign-bank-card-to-the-alipay-and-wechat/",
		publisher: "Rachel Meets China",
		publisherUrl: "https://rachelmeetschina.com",
		pageTitleEn: "Connecting foreign bank cards to Alipay / WeChat",
		publishedDate: "2024-10-29",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-cgl-publictransport",
		url: "https://chinaguidelines.com/en/posts/public-transport",
		publisher: "ChinaGuidelines",
		publisherUrl: "https://chinaguidelines.com",
		pageTitleEn: "Public transport for foreign tourists",
		publishedDate: "2026",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-cgl-train",
		url: "https://chinaguidelines.com/en/posts/high-speed-train",
		publisher: "ChinaGuidelines",
		publisherUrl: "https://chinaguidelines.com",
		pageTitleEn: "High-speed train booking with foreign passport",
		publishedDate: "2026",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-flyertalk-bjtaxi",
		url: "https://www.flyertalk.com/forum/china/1897228-beijing-airport-taxi-scam-attempt-taxi-information-desk.html",
		publisher: "FlyerTalk forum",
		publisherUrl: "https://www.flyertalk.com",
		pageTitleEn: "Beijing airport taxi scam reports",
		publishedDate: "ongoing",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-beforeyougo-gz",
		url: "https://beforeyougotravels.com/destinations/guangzhou",
		publisher: "BeforeYouGoTravels",
		publisherUrl: "https://beforeyougotravels.com",
		pageTitleEn: "Guangzhou — taxi touts, QR fraud, Canton Fair impact",
		publishedDate: "2025-2026",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-wise-didi",
		url: "https://wise.com/sg/blog/how-to-use-didi-china",
		publisher: "Wise",
		publisherUrl: "https://wise.com",
		pageTitleEn: "How to use DiDi in China",
		publishedDate: "2025-2026",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-travelchinatips-shmetro",
		url: "https://travelchina.tips/blogs/practical-guides/shanghai-metro-faq-for-tourists",
		publisher: "TravelChina.tips",
		publisherUrl: "https://travelchina.tips",
		pageTitleEn: "Shanghai metro FAQ for tourists",
		publishedDate: "2025",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-travelchinawith-taxi",
		url: "https://travelchinawith.me/china-travel-blog/taxi-and-didi-scams-in-china/",
		publisher: "TravelChinaWith.Me",
		publisherUrl: "https://travelchinawith.me",
		pageTitleEn: "Taxi and DiDi scams in China",
		publishedDate: "2025-2026",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-alittleadrift-veg",
		url: "https://alittleadrift.com/vegetarian-food-in-china/",
		publisher: "A Little Adrift",
		publisherUrl: "https://alittleadrift.com",
		pageTitleEn: "Vegetarian food in China",
		publishedDate: "2024",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-sinotales-allergies",
		url: "https://sinotales.com/interests/food-drink/first-time-travel-china-food-allergies/",
		publisher: "Sinotales",
		publisherUrl: "https://sinotales.com",
		pageTitleEn: "First-time travel — food allergies in China",
		publishedDate: "2025",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-travelchinawith-allergies",
		url: "https://travelchinawith.me/china-travel-blog/survival-guide-for-food-allergies-in-china/",
		publisher: "TravelChinaWith.Me",
		publisherUrl: "https://travelchinawith.me",
		pageTitleEn: "Survival guide for food allergies in China",
		publishedDate: "2025-2026",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-chinamike",
		url: "https://www.china-mike.com/china-travel-tips/avoiding-scams/",
		publisher: "China Mike",
		publisherUrl: "https://www.china-mike.com",
		pageTitleEn: "Avoiding scams — tea house and tourist traps",
		publishedDate: "2024-2025",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-thechinaguide-medical",
		url: "https://www.thechinaguide.com/blog/healthcare-and-insurance",
		publisher: "TheChinaGuide",
		publisherUrl: "https://www.thechinaguide.com",
		pageTitleEn: "Healthcare and insurance in China",
		publishedDate: "2024",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-expatden-shhospital",
		url: "https://www.expatden.com/china/hospital-in-shanghai/",
		publisher: "ExpatDen",
		publisherUrl: "https://www.expatden.com",
		pageTitleEn: "Hospitals in Shanghai — practical guide",
		publishedDate: "2024",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "blog-internationalinsurance",
		url: "https://www.internationalinsurance.com/countries/china/hospitals/",
		publisher: "International Insurance",
		publisherUrl: "https://www.internationalinsurance.com",
		pageTitleEn: "China hospitals — international department pricing",
		publishedDate: "2024",
		verifiedDate: TODAY,
		community: true
	}),
	make({
		id: "bj-subway-tap-2024",
		url: "https://english.beijing.gov.cn/livinginbeijing/transportation/beijingsubway/202409/t20240914_3891497.html",
		publisher: "Beijing Government",
		publisherUrl: "https://english.beijing.gov.cn",
		pageTitleEn: "Beijing subway contactless Visa/Mastercard tap (Sept 2024)",
		publishedDate: "2024-09-14",
		verifiedDate: TODAY
	}),
	make({
		id: "eyeshenzhen-octopus-interop",
		url: "https://www.eyeshenzhen.com/content/2024-04/01/content_30840321.htm",
		publisher: "EyeShenzhen",
		publisherUrl: "https://www.eyeshenzhen.com",
		pageTitleEn: "Shenzhen Tong / Octopus / Hu Tong Xing card interoperability",
		publishedDate: "2024-04",
		verifiedDate: TODAY
	}),
	make({
		id: "bj-medical-guide-quickservices",
		url: "https://english.beijing.gov.cn/quickguideservices/medicalguide/index.html",
		publisher: "Beijing Government",
		publisherUrl: "https://english.beijing.gov.cn",
		pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
		publishedDate: "2024",
		verifiedDate: TODAY
	})
];
var sources = Object.fromEntries(list.map((s) => [s.id, s]));
//#endregion
//#region src/pages/SourcesPage.tsx
function SourcesPage() {
	const { lang } = useLang();
	const isZh = lang === "zh";
	const all = Object.values(sources);
	const official = all.filter((s) => !s.community);
	const community = all.filter((s) => s.community);
	return /* @__PURE__ */ jsxs("main", {
		className: "mx-auto flex max-w-4xl flex-col gap-10 px-4 py-12",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "self-start text-xs font-bold uppercase tracking-widest text-muted",
						children: isZh ? "信息来源汇总" : "Reference list"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "text-3xl font-bold leading-tight",
						children: isZh ? "全部引用源" : "All references"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm leading-relaxed text-muted",
						children: isZh ? `本网站全部数据均来自下列 ${all.length} 个公开来源。其中 ${official.length} 条来自政府或机构官方网站，${community.length} 条来自旅行社区博客 / 论坛 / 老外住华博主，用于补充官方源不公开的实操坑。每条都带域名 + 出版日期 + 我们最近一次核验日期，可直接点击查看原文。` : `Every fact on this site traces to one of the ${all.length} sources below. ${official.length} come from official government and institutional websites; ${community.length} come from traveler community blogs and forums covering practical pitfalls that official sources do not publish. Each entry shows the domain, the publication date, and our last verification date — click to read the original.`
					})
				]
			}),
			/* @__PURE__ */ jsx(Section, {
				titleEn: `Official sources (${official.length})`,
				titleZh: `官方源（${official.length} 条）`,
				descEn: "Chinese government bodies, central ministries, city governments, hospitals, banks, payment networks, foreign embassies in China.",
				descZh: "中国政府部委、城市政府、医院、银行、支付组织、外国驻华使领馆。",
				children: /* @__PURE__ */ jsx(ReferenceList, {
					items: official,
					isZh
				})
			}),
			/* @__PURE__ */ jsx(Section, {
				titleEn: `Traveler community references (${community.length})`,
				titleZh: `旅行社区资料（${community.length} 条）`,
				descEn: "Foreign travel bloggers, expat publications, Reddit threads and similar. Used only for operational pitfalls that .gov.cn does not publish; never used as authority for policy facts, prices, addresses, or hours.",
				descZh: "境外旅行博主、老外住华媒体、Reddit 等。仅用于政府不公开的实操坑；政策、价格、地址、营业时间不引用社区源。",
				children: /* @__PURE__ */ jsx(ReferenceList, {
					items: community,
					isZh
				})
			}),
			/* @__PURE__ */ jsx(Link, {
				to: "/",
				className: "self-start text-sm font-bold text-jade hover:underline",
				children: isZh ? "← 返回首页" : "← Back home"
			})
		]
	});
}
function Section({ titleEn, titleZh, descEn, descZh, children }) {
	const { lang } = useLang();
	const isZh = lang === "zh";
	return /* @__PURE__ */ jsxs("section", {
		className: "flex flex-col gap-3",
		children: [/* @__PURE__ */ jsxs("header", { children: [/* @__PURE__ */ jsx("h2", {
			className: "text-xl font-bold",
			children: isZh ? titleZh : titleEn
		}), /* @__PURE__ */ jsx("p", {
			className: "text-xs text-muted",
			children: isZh ? descZh : descEn
		})] }), children]
	});
}
function ReferenceList({ items, isZh }) {
	return /* @__PURE__ */ jsx("ol", {
		className: "grid gap-1.5 text-sm leading-relaxed",
		children: [...items].sort((a, b) => a.publisher.localeCompare(b.publisher)).map((s, i) => /* @__PURE__ */ jsxs("li", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ jsxs("span", {
				className: "shrink-0 tabular-nums text-muted",
				children: [
					"[",
					i + 1,
					"]"
				]
			}), /* @__PURE__ */ jsxs("a", {
				href: s.url,
				target: "_blank",
				rel: "noreferrer",
				className: "flex-1 text-ink hover:text-jade hover:underline",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "font-bold",
						children: s.publisher
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "text-muted",
						children: [" · ", s.pageTitleEn]
					}),
					s.publishedDate && /* @__PURE__ */ jsxs("span", {
						className: "text-muted",
						children: [" · ", s.publishedDate]
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "ml-1 text-xs text-muted/70",
						children: ["— ", s.domain]
					}),
					/* @__PURE__ */ jsx("span", {
						className: "ml-2 text-[10px] uppercase tracking-wider text-muted/70",
						children: isZh ? `核验 ${s.verifiedDate}` : `verified ${s.verifiedDate}`
					})
				]
			})]
		}, s.id))
	});
}
//#endregion
//#region src/App.tsx
function Layout() {
	return /* @__PURE__ */ jsx(LanguageProvider, { children: /* @__PURE__ */ jsxs(AtlasProvider, { children: [
		/* @__PURE__ */ jsx(SiteHeader, {}),
		/* @__PURE__ */ jsx(Outlet, {}),
		/* @__PURE__ */ jsx(SiteFooter, {})
	] }) });
}
//#endregion
//#region src/main.tsx
var createRoot = ViteReactSSG({ routes: [{
	path: "/",
	Component: Layout,
	children: [
		{
			index: true,
			Component: HomePage
		},
		{
			path: "city/:cityId",
			Component: CityPage,
			getStaticPaths: () => [
				"/city/beijing",
				"/city/shanghai",
				"/city/guangzhou",
				"/city/shenzhen"
			]
		},
		{
			path: "share",
			Component: SharePage
		},
		{
			path: "ask",
			Component: AskPage
		},
		{
			path: "sources",
			Component: SourcesPage
		},
		{
			path: "*",
			Component: HomePage
		}
	]
}] });
//#endregion
export { createRoot };
