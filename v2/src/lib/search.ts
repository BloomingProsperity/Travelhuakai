import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
import { provinceHitAreas } from "../data/map-sources";

export type SearchRecord = {
  zh: string;
  en: string;
  type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
  provinceId: string;
  cityId?: string;
  aliases: string[];
};

const NORMALIZE_PATTERN = /[·,，。.\s/'’\-]+/g;

const normalize = (value: string): string =>
  value.toLowerCase().replace(NORMALIZE_PATTERN, "").trim();

const splitGroup = (value: string | undefined): string[] =>
  (value ?? "").split("/").map((s) => s.trim()).filter(Boolean);

const buildIndex = (): readonly SearchRecord[] => {
  const records: SearchRecord[] = [];
  const seen = new Set<string>();

  const push = (record: SearchRecord) => {
    const key = `${record.type}|${record.provinceId}|${record.cityId ?? ""}|${normalize(record.zh)}|${normalize(record.en)}`;
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
      aliases: [province.zh, province.name, province.id]
    });

    province.cities.forEach((city) => {
      push({
        zh: city.zh,
        en: city.name,
        type: "city",
        provinceId: province.id,
        cityId: city.id,
        aliases: [city.zh, city.name, city.id, city.province]
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
      aliases: [area.zh, area.en, area.id]
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
      aliases: [item.zh, item.en, ...(item.aliases ?? [])]
    });
  });

  return records;
};

const searchIndex = buildIndex();
const tokenIndex = searchIndex.map((record) => ({
  record,
  tokens: [record.zh, record.en, ...record.aliases].map(normalize).filter(Boolean)
}));

export const getAllRecords = (): readonly SearchRecord[] => searchIndex;

export const findBestMatch = (query: string): SearchRecord | null => {
  const target = normalize(query);
  if (!target) return null;

  let best: { record: SearchRecord; score: number } | null = null;
  for (const { record, tokens } of tokenIndex) {
    let score = 0;
    if (tokens.some((token) => token === target)) score = 3;
    else if (tokens.some((token) => token.startsWith(target))) score = 2;
    else if (tokens.some((token) => token.includes(target) || target.includes(token))) score = 1;
    if (score > 0 && (!best || score > best.score)) {
      best = { record, score };
      if (score === 3) break;
    }
  }
  return best?.record ?? null;
};
