import type { CityId } from "./transport";

export type ItineraryDay = {
  dayNumber: 1 | 2 | 3;
  themeEn: string;
  themeZh: string;
  morning: { en: string; zh: string; attractionId?: string };
  afternoon: { en: string; zh: string; attractionId?: string };
  evening: { en: string; zh: string; attractionId?: string };
  travelTipEn: string;
  travelTipZh: string;
};

export type CityItinerary = {
  cityId: CityId;
  subtitleEn: string;
  subtitleZh: string;
  days: ItineraryDay[];
};

export const cityItineraries: CityItinerary[] = [
  {
    cityId: "beijing",
    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
    days: [
      {
        dayNumber: 1,
        themeEn: "Imperial axis first",
        themeZh: "先看皇城中轴线",
        morning: {
          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
          attractionId: "bj-forbidden-city"
        },
        afternoon: {
          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
          zh: "午后转到天安门广场，预留安检和拍照时间。",
          attractionId: "bj-tiananmen"
        },
        evening: {
          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
        },
        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
      },
      {
        dayNumber: 2,
        themeEn: "Temples, gardens, and hutongs",
        themeZh: "寺庙、园林与胡同",
        morning: {
          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
          attractionId: "bj-temple-of-heaven"
        },
        afternoon: {
          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
          attractionId: "bj-lama-temple"
        },
        evening: {
          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
        },
        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
      },
      {
        dayNumber: 3,
        themeEn: "Great Wall day with a soft landing",
        themeZh: "长城一日与轻松收尾",
        morning: {
          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
          attractionId: "bj-mutianyu"
        },
        afternoon: {
          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
          attractionId: "bj-summer-palace"
        },
        evening: {
          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
        },
        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
      }
    ]
  },
  {
    cityId: "shanghai",
    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
    days: [
      {
        dayNumber: 1,
        themeEn: "Old Shanghai to neon Shanghai",
        themeZh: "从老上海到霓虹上海",
        morning: {
          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
          attractionId: "sh-bund"
        },
        afternoon: {
          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
          attractionId: "sh-yu-garden"
        },
        evening: {
          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
        },
        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
      },
      {
        dayNumber: 2,
        themeEn: "Museums and plane-tree streets",
        themeZh: "博物馆与梧桐街区",
        morning: {
          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
          attractionId: "sh-museum"
        },
        afternoon: {
          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
          attractionId: "sh-wukang"
        },
        evening: {
          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
        },
        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
      },
      {
        dayNumber: 3,
        themeEn: "Pudong skyline and river contrast",
        themeZh: "浦东天际线与江岸对照",
        morning: {
          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
          attractionId: "sh-lujiazui"
        },
        afternoon: {
          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
          attractionId: "sh-shanghai-tower"
        },
        evening: {
          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
        },
        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
      }
    ]
  },
  {
    cityId: "guangzhou",
    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
    days: [
      {
        dayNumber: 1,
        themeEn: "Lingnan craft and first skyline view",
        themeZh: "岭南工艺与第一眼天际线",
        morning: {
          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
          attractionId: "gz-chen-clan"
        },
        afternoon: {
          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
          attractionId: "gz-shamian"
        },
        evening: {
          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
          attractionId: "gz-canton-tower"
        },
        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
      },
      {
        dayNumber: 2,
        themeEn: "Old city breakfast and civic landmarks",
        themeZh: "老城早茶与城市地标",
        morning: {
          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
          attractionId: "gz-yuexiu-park"
        },
        afternoon: {
          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
          attractionId: "gz-baiyun-mountain"
        },
        evening: {
          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
        },
        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
      },
      {
        dayNumber: 3,
        themeEn: "Markets, museums, and Pearl River night",
        themeZh: "市场、博物馆与珠江夜色",
        morning: {
          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
        },
        afternoon: {
          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
        },
        evening: {
          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
          attractionId: "gz-pearl-river"
        },
        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
      }
    ]
  },
  {
    cityId: "shenzhen",
    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
    days: [
      {
        dayNumber: 1,
        themeEn: "OCT cluster and Shekou night",
        themeZh: "华侨城组团与蛇口夜晚",
        morning: {
          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
          attractionId: "sz-window-of-the-world"
        },
        afternoon: {
          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
          attractionId: "sz-octloft"
        },
        evening: {
          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
          attractionId: "sz-sea-world"
        },
        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
      },
      {
        dayNumber: 2,
        themeEn: "Reform-era city views and beach air",
        themeZh: "改革城市视角与海边空气",
        morning: {
          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
          attractionId: "sz-lianhuashan"
        },
        afternoon: {
          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
          attractionId: "sz-dameisha"
        },
        evening: {
          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
        },
        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
      },
      {
        dayNumber: 3,
        themeEn: "Dapeng coast and historic village",
        themeZh: "大鹏海岸与古城",
        morning: {
          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
          attractionId: "sz-dapeng"
        },
        afternoon: {
          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
        },
        evening: {
          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
        },
        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
      }
    ]
  }
];
