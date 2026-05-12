import type { CityId } from "../data/transport";

export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
  "beijing-city": "beijing",
  "shanghai-city": "shanghai",
  "guangzhou-city": "guangzhou",
  "shenzhen-city": "shenzhen"
};

const PHASE1_ATTRACTION_ROUTES: Partial<Record<string, CityId>> = {
  "beijing|Forbidden City": "beijing",
  "beijing|Temple of Heaven": "beijing",
  "beijing|Beijing Central Axis": "beijing",
  "shanghai|The Bund": "shanghai",
  "shanghai|Yu Garden": "shanghai",
  "shanghai|Shanghai Museum": "shanghai",
  "guangdong|Canton Tower": "guangzhou",
  "guangdong|Chen Clan Ancestral Hall": "guangzhou"
};

export function getPhase1CityRouteId(cityId: string): CityId | undefined {
  return PHASE1_CITY_ROUTES[cityId];
}

export function getPhase1AttractionRouteId(provinceId: string, attractionEn: string): CityId | undefined {
  return PHASE1_ATTRACTION_ROUTES[`${provinceId}|${attractionEn}`];
}
