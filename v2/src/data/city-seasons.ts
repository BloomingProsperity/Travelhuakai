import type { CityId } from "./transport";

export type RainfallLevel = "low" | "med" | "high";
export type CrowdLevel = "low" | "med" | "high";

export type CitySeason = {
  cityId: CityId;
  bestMonths: { en: string; zh: string };
  reason: { en: string; zh: string };
  sourceId: string;
  monthlyClimate: Array<{
    monthRange: string;
    tempC: { low: number; high: number };
    rainfall: RainfallLevel;
    summary: { en: string; zh: string };
    crowdLevel: CrowdLevel;
    sourceId: string;
  }>;
  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
};

export const citySeasons: CitySeason[] = [
  {
    cityId: "beijing",
    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
    reason: {
      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
    },
    sourceId: "noaa-wmo-beijing-54511",
    monthlyClimate: [
      {
        monthRange: "Mar-May",
        tempC: { low: 2, high: 27 },
        rainfall: "low",
        crowdLevel: "high",
        sourceId: "noaa-wmo-beijing-54511",
        summary: {
          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
        }
      },
      {
        monthRange: "Jun-Aug",
        tempC: { low: 20, high: 32 },
        rainfall: "high",
        crowdLevel: "med",
        sourceId: "noaa-wmo-beijing-54511",
        summary: {
          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
        }
      },
      {
        monthRange: "Sep-Nov",
        tempC: { low: 1, high: 27 },
        rainfall: "med",
        crowdLevel: "high",
        sourceId: "noaa-wmo-beijing-54511",
        summary: {
          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
        }
      },
      {
        monthRange: "Dec-Feb",
        tempC: { low: -7, high: 6 },
        rainfall: "low",
        crowdLevel: "low",
        sourceId: "noaa-wmo-beijing-54511",
        summary: {
          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
        }
      }
    ],
    watchOuts: [
      {
        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
        sourceId: "beijing-spring-dust"
      },
      {
        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
        sourceId: "beijing-climate-geography"
      },
      {
        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
        sourceId: "beijing-heavy-air-pollution-plan"
      }
    ]
  },
  {
    cityId: "shanghai",
    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
    reason: {
      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
    },
    sourceId: "noaa-wmo-shanghai-baoshan-58362",
    monthlyClimate: [
      {
        monthRange: "Mar-May",
        tempC: { low: 7, high: 25 },
        rainfall: "med",
        crowdLevel: "high",
        sourceId: "noaa-wmo-shanghai-baoshan-58362",
        summary: {
          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
        }
      },
      {
        monthRange: "Jun-Aug",
        tempC: { low: 22, high: 32 },
        rainfall: "high",
        crowdLevel: "med",
        sourceId: "noaa-wmo-shanghai-baoshan-58362",
        summary: {
          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
        }
      },
      {
        monthRange: "Sep-Nov",
        tempC: { low: 11, high: 28 },
        rainfall: "med",
        crowdLevel: "high",
        sourceId: "noaa-wmo-shanghai-baoshan-58362",
        summary: {
          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
        }
      },
      {
        monthRange: "Dec-Feb",
        tempC: { low: 2, high: 11 },
        rainfall: "med",
        crowdLevel: "low",
        sourceId: "noaa-wmo-shanghai-baoshan-58362",
        summary: {
          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
        }
      }
    ],
    watchOuts: [
      {
        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
        sourceId: "shanghai-plum-rain"
      },
      {
        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
        sourceId: "shanghai-meteorological-regulations"
      },
      {
        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
        sourceId: "noaa-wmo-shanghai-baoshan-58362"
      }
    ]
  },
  {
    cityId: "guangzhou",
    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
    reason: {
      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
    },
    sourceId: "noaa-wmo-guangzhou-59287",
    monthlyClimate: [
      {
        monthRange: "Mar-May",
        tempC: { low: 16, high: 30 },
        rainfall: "high",
        crowdLevel: "high",
        sourceId: "noaa-wmo-guangzhou-59287",
        summary: {
          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
        }
      },
      {
        monthRange: "Jun-Aug",
        tempC: { low: 25, high: 33 },
        rainfall: "high",
        crowdLevel: "low",
        sourceId: "noaa-wmo-guangzhou-59287",
        summary: {
          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
        }
      },
      {
        monthRange: "Sep-Nov",
        tempC: { low: 17, high: 32 },
        rainfall: "med",
        crowdLevel: "high",
        sourceId: "noaa-wmo-guangzhou-59287",
        summary: {
          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
        }
      },
      {
        monthRange: "Dec-Feb",
        tempC: { low: 11, high: 21 },
        rainfall: "low",
        crowdLevel: "med",
        sourceId: "noaa-wmo-guangzhou-59287",
        summary: {
          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
        }
      }
    ],
    watchOuts: [
      {
        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
        sourceId: "guangzhou-climate-geography"
      },
      {
        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
        sourceId: "guangzhou-climate-geography"
      },
      {
        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
        sourceId: "noaa-wmo-guangzhou-59287"
      }
    ]
  },
  {
    cityId: "shenzhen",
    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
    reason: {
      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
    },
    sourceId: "shenzhen-climate-seasons",
    monthlyClimate: [
      {
        monthRange: "Mar-May",
        tempC: { low: 17, high: 30 },
        rainfall: "high",
        crowdLevel: "med",
        sourceId: "shenzhen-climate-seasons",
        summary: {
          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
        }
      },
      {
        monthRange: "Jun-Aug",
        tempC: { low: 26, high: 32 },
        rainfall: "high",
        crowdLevel: "low",
        sourceId: "shenzhen-climate-seasons",
        summary: {
          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
        }
      },
      {
        monthRange: "Sep-Nov",
        tempC: { low: 19, high: 32 },
        rainfall: "med",
        crowdLevel: "high",
        sourceId: "shenzhen-climate-seasons",
        summary: {
          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
        }
      },
      {
        monthRange: "Dec-Feb",
        tempC: { low: 13, high: 22 },
        rainfall: "low",
        crowdLevel: "med",
        sourceId: "shenzhen-climate-seasons",
        summary: {
          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
        }
      }
    ],
    watchOuts: [
      {
        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
        sourceId: "shenzhen-back-south"
      },
      {
        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
        sourceId: "shenzhen-climate-seasons"
      },
      {
        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
        sourceId: "shenzhen-climate-seasons"
      }
    ]
  }
];

export function seasonByCity(cityId: CityId): CitySeason {
  const season = citySeasons.find((item) => item.cityId === cityId);
  if (!season) {
    throw new Error(`Missing season data for city: ${cityId}`);
  }
  return season;
}

export function seasonSourceIds(cityId?: CityId): string[] {
  const ids = new Set<string>();
  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
  seasons.forEach((season) => {
    ids.add(season.sourceId);
    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
    season.watchOuts.forEach((item) => ids.add(item.sourceId));
  });
  return [...ids];
}
