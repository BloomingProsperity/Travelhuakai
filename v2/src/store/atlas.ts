import { createContext, useContext, type Dispatch } from "react";
import { atlasData, type CityRecord, type ProvinceRecord } from "../data/atlas";
import { provinceHitAreas } from "../data/map-sources";

export type AtlasState = {
  selectedProvinceId: string | null;
  selectedCityId: string | null;
  is3DEnabled: boolean;
};

export type AtlasAction =
  | { type: "selectProvince"; provinceId: string | null; enable3D?: boolean }
  | { type: "selectPlace"; provinceId: string; cityId: string | null; enable3D?: boolean }
  | { type: "toggle3D" }
  | { type: "reset" };

export const initialAtlasState: AtlasState = {
  selectedProvinceId: null,
  selectedCityId: null,
  is3DEnabled: false
};

export const atlasReducer = (state: AtlasState, action: AtlasAction): AtlasState => {
  switch (action.type) {
    case "selectProvince":
      return {
        ...state,
        selectedProvinceId: action.provinceId,
        selectedCityId: null,
        is3DEnabled: Boolean(action.provinceId) && (action.enable3D ?? true)
      };
    case "selectPlace":
      return {
        ...state,
        selectedProvinceId: action.provinceId,
        selectedCityId: action.cityId,
        is3DEnabled: action.enable3D ?? true
      };
    case "toggle3D":
      return { ...state, is3DEnabled: !state.is3DEnabled };
    case "reset":
      return initialAtlasState;
    default:
      return state;
  }
};

export type AtlasContextValue = {
  state: AtlasState;
  dispatch: Dispatch<AtlasAction>;
};

export const AtlasContext = createContext<AtlasContextValue | null>(null);

const findProvince = (id: string | null): ProvinceRecord | null => {
  if (!id) return null;
  const match = atlasData.find((p) => p.id === id);
  if (match) return match;
  const area = provinceHitAreas.find((a) => a.id === id);
  return area
    ? { id: area.id, name: area.en, zh: area.zh, type: "Province", color: "muted", cities: [] }
    : null;
};

const findCity = (province: ProvinceRecord | null, cityId: string | null): CityRecord | null => {
  if (!province || !cityId) return null;
  return province.cities.find((c) => c.id === cityId) ?? null;
};

export function useAtlas() {
  const ctx = useContext(AtlasContext);
  if (!ctx) throw new Error("useAtlas must be used within <AtlasProvider>");
  const { state, dispatch } = ctx;
  const province = findProvince(state.selectedProvinceId);
  const city = findCity(province, state.selectedCityId);
  return {
    ...state,
    province,
    city,
    selectProvince: (provinceId: string | null, enable3D = true) =>
      dispatch({ type: "selectProvince", provinceId, enable3D }),
    selectPlace: (provinceId: string, cityId: string | null, enable3D = true) =>
      dispatch({ type: "selectPlace", provinceId, cityId, enable3D }),
    selectCity: (cityId: string | null) =>
      state.selectedProvinceId
        ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })
        : dispatch({ type: "selectProvince", provinceId: null }),
    toggle3D: () => dispatch({ type: "toggle3D" }),
    reset: () => dispatch({ type: "reset" })
  };
}
