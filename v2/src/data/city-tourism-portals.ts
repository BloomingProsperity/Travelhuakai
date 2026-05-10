import type { CityId } from "./transport";

export type Portal = {
  url: string;
  labelEn: string;
  labelZh: string;
  noteEn: string;
  noteZh: string;
};

export const cityTourismPortals: Record<CityId, Portal[]> = {
  beijing: [
    {
      url: "https://english.visitbeijing.com.cn/",
      labelEn: "Visit Beijing",
      labelZh: "Visit Beijing",
      noteEn: "Tourism bureau site — events, itinerary routes, ticketing portal, 7-language coverage.",
      noteZh: "市文旅局推广站——演出活动、主题路线、官方购票入口，7 种语言。"
    },
    {
      url: "https://english.beijing.gov.cn/travellinginbeijing/",
      labelEn: "Beijing Government — Travelling in Beijing",
      labelZh: "北京市政府 · 在京旅行",
      noteEn: "Government practical resource: visa, transport, payment, SIM cards, tax refunds, FAQs.",
      noteZh: "政府实用资料：签证、交通、支付、SIM 卡、退税、常见问题。"
    }
  ],
  shanghai: [
    {
      url: "https://www.meet-in-shanghai.net/",
      labelEn: "Meet in Shanghai",
      labelZh: "Meet in Shanghai",
      noteEn: "Tourism bureau site — citywalk routes, river cruises, 13-language coverage.",
      noteZh: "市文旅局推广站——城市漫步、黄浦江游船、13 种语言。"
    },
    {
      url: "https://english.shanghai.gov.cn/en-GuideforForeignTourists/index.html",
      labelEn: "Shanghai Government — Guide for Foreign Tourists",
      labelZh: "上海市政府 · 外籍游客指南",
      noteEn: "Practical: visa, payment, currency exchange at metro stations, ride-hailing for foreigners.",
      noteZh: "实用：签证、支付、地铁站换汇、外籍游客出租车出行指南。"
    }
  ],
  guangzhou: [
    {
      url: "https://www.gz.gov.cn/guangzhouinternational/",
      labelEn: "Guangzhou International",
      labelZh: "广州国际",
      noteEn: "Government English gateway — Visitors / Business / Residents tracks; consulate directory; Canton Fair info.",
      noteZh: "市政府英文门户——访客 / 商务 / 居民三类信息；领事馆名录；广交会信息。"
    }
  ],
  shenzhen: [
    {
      url: "https://www.eyeshenzhen.com/",
      labelEn: "EyeShenzhen",
      labelZh: "EyeShenzhen",
      noteEn: "Flagship international portal — 27 self-guided routes, expat service videos, HK-SZ card interop guide.",
      noteZh: "市政府国际门户——27 条自助路线、生活服务视频、深港交通卡互通指南。"
    },
    {
      url: "https://www.sz.gov.cn/en_szgov/travel/index.html",
      labelEn: "Shenzhen Government — Travel",
      labelZh: "深圳市政府 · 旅游",
      noteEn: "Supplementary: natural landscapes, cultural attractions, shopping districts, travel agencies.",
      noteZh: "辅助：自然景观、文化景点、购物商圈、旅行社。"
    }
  ]
};
