import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
import type { Lang } from "../../data/i18n";
import { useRecordCityView } from "../../hooks/useCityViews";
import { getPhase1AttractionRouteId, getPhase1CityRouteId } from "../../lib/cityRoutes";
import { useAtlas } from "../../store/atlas";
import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";

type CesiumModule = typeof import("cesium");
type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;

type Map3DProps = {
  province: ProvinceRecord;
  provinceId: string;
  lang: Lang;
};

type LonLat = {
  lon: number;
  lat: number;
};

type CameraBounds = {
  west: number;
  south: number;
  east: number;
  north: number;
};

type MapLoadState = "loading" | "ready" | "missing-key" | "blocked" | "error";

const CHINA_BOUNDS = {
  west: 73,
  east: 135,
  south: 18,
  north: 54
};

const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
const CITY_ENTITY_PREFIX = "city:";
const CITY_ROUTE_ENTITY_PREFIX = "city-route:";

const FALLBACK_AREA: ProvinceHitArea = {
  id: "china",
  en: "China",
  zh: "中国",
  x: 55,
  y: 55,
  w: 42,
  h: 34
};

const ATTRACTION_OFFSETS = [
  { lon: -0.9, lat: 0.55 },
  { lon: 0.95, lat: 0.45 },
  { lon: -0.45, lat: -0.72 },
  { lon: 0.65, lat: -0.62 },
  { lon: 0, lat: 0.95 }
];

function percentToLonLat(x: number, y: number): LonLat {
  return {
    lon: CHINA_BOUNDS.west + (x / 100) * (CHINA_BOUNDS.east - CHINA_BOUNDS.west),
    lat: CHINA_BOUNDS.north - (y / 100) * (CHINA_BOUNDS.north - CHINA_BOUNDS.south)
  };
}

function areaToCameraBounds(area: ProvinceHitArea): CameraBounds {
  const center = percentToLonLat(area.x, area.y);
  const lonSpan = Math.max(1.2, (area.w / 100) * (CHINA_BOUNDS.east - CHINA_BOUNDS.west) * 0.7);
  const latSpan = Math.max(1, (area.h / 100) * (CHINA_BOUNDS.north - CHINA_BOUNDS.south) * 0.7);

  return {
    west: Math.max(CHINA_BOUNDS.west, center.lon - lonSpan),
    south: Math.max(CHINA_BOUNDS.south, center.lat - latSpan),
    east: Math.min(CHINA_BOUNDS.east, center.lon + lonSpan),
    north: Math.min(CHINA_BOUNDS.north, center.lat + latSpan)
  };
}

function getProvinceArea(provinceId: string) {
  return provinceHitAreas.find((area) => area.id === provinceId) ?? FALLBACK_AREA;
}

function getProvinceLabel(province: ProvinceRecord, lang: Lang) {
  return lang === "zh" ? province.zh : province.name;
}

function getEntityText(zh: string, en: string, lang: Lang) {
  return lang === "zh" ? zh : en;
}

function getCityPosition(cityId: string, fallbackArea: ProvinceHitArea, index: number): LonLat {
  const point = cityMapPoints[cityId];
  if (point) return percentToLonLat(point.x, point.y);

  const center = percentToLonLat(fallbackArea.x, fallbackArea.y);
  const spreadLon = Math.max(0.35, (fallbackArea.w / 100) * (CHINA_BOUNDS.east - CHINA_BOUNDS.west) * 0.18);
  const spreadLat = Math.max(0.28, (fallbackArea.h / 100) * (CHINA_BOUNDS.north - CHINA_BOUNDS.south) * 0.18);
  const angle = (Math.PI * 2 * index) / Math.max(3, fallbackArea.w);

  return {
    lon: center.lon + Math.cos(angle) * spreadLon,
    lat: center.lat + Math.sin(angle) * spreadLat
  };
}

function getAttractionPosition(area: ProvinceHitArea, index: number): LonLat {
  const center = percentToLonLat(area.x, area.y);
  const offset = ATTRACTION_OFFSETS[index % ATTRACTION_OFFSETS.length];
  const spreadLon = Math.max(0.45, (area.w / 100) * (CHINA_BOUNDS.east - CHINA_BOUNDS.west) * 0.2);
  const spreadLat = Math.max(0.36, (area.h / 100) * (CHINA_BOUNDS.north - CHINA_BOUNDS.south) * 0.2);

  return {
    lon: center.lon + offset.lon * spreadLon,
    lat: center.lat + offset.lat * spreadLat
  };
}

function createTiandituProvider(
  Cesium: CesiumModule,
  token: string,
  service: "img" | "ter" | "cia",
  credit: string
) {
  return new Cesium.WebMapTileServiceImageryProvider({
    url: `https://t{s}.tianditu.gov.cn/${service}_w/wmts?tk=${token}`,
    layer: service,
    style: "default",
    format: "tiles",
    tileMatrixSetID: "w",
    subdomains: TDT_SUBDOMAINS,
    tileMatrixLabels: TILE_MATRIX_LABELS,
    maximumLevel: 18,
    credit: new Cesium.Credit(credit)
  });
}

function buildTiandituTileUrl(
  token: string,
  service: "img" | "ter" | "cia",
  tileMatrix = 4,
  tileRow = 6,
  tileCol = 12
) {
  const params = new URLSearchParams({
    SERVICE: "WMTS",
    REQUEST: "GetTile",
    VERSION: "1.0.0",
    LAYER: service,
    STYLE: "default",
    TILEMATRIXSET: "w",
    FORMAT: "tiles",
    TILEMATRIX: String(tileMatrix),
    TILEROW: String(tileRow),
    TILECOL: String(tileCol),
    tk: token
  });

  return `https://t0.tianditu.gov.cn/${service}_w/wmts?${params.toString()}`;
}

function preloadImage(src: string) {
  return new Promise<void>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve();
    image.onerror = () => reject(new Error("Tianditu tile failed to load"));
    image.decoding = "async";
    image.src = src;
  });
}

function addTiandituLayers(Cesium: CesiumModule, viewer: CesiumViewer, token: string) {
  viewer.imageryLayers.removeAll();

  const imageLayer = viewer.imageryLayers.addImageryProvider(
    createTiandituProvider(Cesium, token, "img", "Tianditu imagery")
  );
  imageLayer.saturation = 1.12;
  imageLayer.contrast = 1.08;
  imageLayer.brightness = 0.96;

  const terrainLayer = viewer.imageryLayers.addImageryProvider(
    createTiandituProvider(Cesium, token, "ter", "Tianditu terrain relief")
  );
  terrainLayer.alpha = 0.28;

  const labelLayer = viewer.imageryLayers.addImageryProvider(
    createTiandituProvider(Cesium, token, "cia", "Tianditu labels")
  );
  labelLayer.alpha = 0.92;
}

function addProvinceFrame(
  Cesium: CesiumModule,
  viewer: CesiumViewer,
  bounds: CameraBounds,
  provinceLabel: string
) {
  viewer.entities.add({
    id: "selected-province-frame",
    name: provinceLabel,
    rectangle: {
      coordinates: Cesium.Rectangle.fromDegrees(bounds.west, bounds.south, bounds.east, bounds.north),
      material: Cesium.Color.fromCssColorString("#53d1bd").withAlpha(0.12),
      outline: true,
      outlineColor: Cesium.Color.fromCssColorString("#55f2d9")
    }
  });
}

function addLabelEntity(
  Cesium: CesiumModule,
  viewer: CesiumViewer,
  position: LonLat,
  text: string,
  color: string,
  size: number,
  entityId?: string
) {
  viewer.entities.add({
    id: entityId,
    name: text,
    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
    point: {
      pixelSize: size,
      color: Cesium.Color.fromCssColorString(color),
      outlineColor: Cesium.Color.WHITE,
      outlineWidth: 2,
      disableDepthTestDistance: Number.POSITIVE_INFINITY
    },
    label: {
      text,
      font: "600 14px Microsoft YaHei, system-ui, sans-serif",
      fillColor: Cesium.Color.WHITE,
      outlineColor: Cesium.Color.fromCssColorString("#101815"),
      outlineWidth: 4,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      pixelOffset: new Cesium.Cartesian2(0, -12),
      disableDepthTestDistance: Number.POSITIVE_INFINITY
    }
  });
}

function addProvinceEntities(
  Cesium: CesiumModule,
  viewer: CesiumViewer,
  province: ProvinceRecord,
  provinceId: string,
  area: ProvinceHitArea,
  lang: Lang
) {
  const center = percentToLonLat(area.x, area.y);
  addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);

  province.cities.forEach((city, index) => {
    const position = getCityPosition(city.id, area, index + 1);
    addLabelEntity(
      Cesium,
      viewer,
      position,
      getEntityText(city.zh, city.name, lang),
      "#3b82f6",
      11,
      `${CITY_ENTITY_PREFIX}${city.id}`
    );
  });

  const attractions = provinceAttractionSeed[provinceId] ?? [];
  attractions.forEach((attraction, index) => {
    const position = getAttractionPosition(area, index);
    const routeId = getPhase1AttractionRouteId(provinceId, attraction.en);
    addLabelEntity(
      Cesium,
      viewer,
      position,
      getEntityText(attraction.zh, attraction.en, lang),
      "#f59e0b",
      9,
      routeId ? `${CITY_ROUTE_ENTITY_PREFIX}${routeId}` : undefined
    );
  });
}

function focusCamera(Cesium: CesiumModule, viewer: CesiumViewer, bounds: CameraBounds) {
  const width = bounds.east - bounds.west;
  const height = bounds.north - bounds.south;
  const centerLon = (bounds.west + bounds.east) / 2;
  const centerLat = (bounds.south + bounds.north) / 2;
  const altitude = Math.max(380000, Math.max(width, height) * 115000);

  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(centerLon, centerLat - height * 0.35, altitude),
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-58),
      roll: 0
    },
    duration: 0.8
  });
}

function resolveProvince(provinceId: string, province: ProvinceRecord) {
  return atlasData.find((item) => item.id === provinceId) ?? province;
}

function getPickedEntity(picked: unknown): CesiumEntity | null {
  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
  const pickedWithId = picked as { id?: unknown };
  if (typeof pickedWithId.id === "string") return picked as CesiumEntity;
  const candidate = pickedWithId.id;
  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
  return candidate as CesiumEntity;
}

function getPickedCityId(entity: CesiumEntity): string | null {
  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
    : null;
}

function getPickedRouteCityId(entity: CesiumEntity): string | null {
  return typeof entity.id === "string" && entity.id.startsWith(CITY_ROUTE_ENTITY_PREFIX)
    ? entity.id.slice(CITY_ROUTE_ENTITY_PREFIX.length)
    : null;
}

export default function Map3D({ province, provinceId, lang }: Map3DProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<CesiumViewer | null>(null);
  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
  const handleRouteClickRef = useRef<(routeId: string) => void>(() => undefined);
  const navigate = useNavigate();
  const { selectPlace } = useAtlas();
  const recordView = useRecordCityView();
  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);

  useEffect(() => {
    handleCityClickRef.current = (cityId: string) => {
      recordView(cityId);
      const phase1 = getPhase1CityRouteId(cityId);
      if (phase1) {
        navigate(`/city/${phase1}`);
        return;
      }
      selectPlace(provinceId, cityId);
    };
    handleRouteClickRef.current = (routeId: string) => {
      navigate(`/city/${routeId}`);
    };
  }, [navigate, provinceId, recordView, selectPlace]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!token) return;

    let cancelled = false;
    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
    let creditContainer: HTMLDivElement | null = document.createElement("div");
    creditContainer.className = "hidden";
    container.appendChild(creditContainer);

    async function initCesium() {
      try {
        setLoadState("loading");
        await preloadImage(buildTiandituTileUrl(token, "img"));
        const Cesium = await import("cesium");
        if (cancelled || !container || !creditContainer) return;

        const viewerOptions = {
          animation: false,
          baseLayer: false,
          baseLayerPicker: false,
          fullscreenButton: false,
          geocoder: false,
          homeButton: false,
          infoBox: false,
          navigationHelpButton: false,
          sceneModePicker: false,
          selectionIndicator: false,
          timeline: false,
          vrButton: false,
          showRenderLoopErrors: false,
          creditContainer,
          sceneMode: Cesium.SceneMode.SCENE3D,
          requestRenderMode: true,
          maximumRenderTimeChange: Infinity
        } as ConstructorParameters<CesiumModule["Viewer"]>[1];

        const viewer = new Cesium.Viewer(container, viewerOptions);
        viewerRef.current = viewer;

        viewer.scene.globe.baseColor = Cesium.Color.fromCssColorString("#061410");
        viewer.scene.globe.depthTestAgainstTerrain = false;
        if (viewer.scene.skyAtmosphere) {
          viewer.scene.skyAtmosphere.show = true;
        }
        viewer.scene.fog.enabled = true;

        addTiandituLayers(Cesium, viewer, token);

        const area = getProvinceArea(provinceId);
        const bounds = areaToCameraBounds(area);
        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
        focusCamera(Cesium, viewer, bounds);

        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
          const entity = getPickedEntity(viewer.scene.pick(movement.position));
          const routeCityId = entity ? getPickedRouteCityId(entity) : null;
          if (routeCityId) {
            handleRouteClickRef.current(routeCityId);
            return;
          }
          const cityId = entity ? getPickedCityId(entity) : null;
          if (cityId) handleCityClickRef.current(cityId);
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

        if (!cancelled) setLoadState("ready");
      } catch (error) {
        console.error(error);
        if (!cancelled) {
          setLoadState(error instanceof Error && error.message.includes("Tianditu tile") ? "blocked" : "error");
        }
      }
    }

    void initCesium();

    return () => {
      cancelled = true;
      if (clickHandler && !clickHandler.isDestroyed()) {
        clickHandler.destroy();
      }
      clickHandler = null;
      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
        viewerRef.current.destroy();
      }
      viewerRef.current = null;
      if (creditContainer?.parentNode) {
        creditContainer.parentNode.removeChild(creditContainer);
      }
      creditContainer = null;
    };
  }, [lang, provinceId, selectedProvince, token]);

  return (
    <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
      <div ref={containerRef} className="absolute inset-0" />

      {loadState === "loading" && (
        <div className="absolute inset-0 z-10 grid place-items-center bg-[#071512] text-sm font-semibold text-white/80">
          {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
        </div>
      )}

      {loadState === "missing-key" && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#071512] px-6 text-center text-white">
          <div className="w-full max-w-md rounded-lg border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur sm:p-5">
            <h3 className="text-lg font-bold">{lang === "zh" ? "需要配置天地图 tk" : "Tianditu token required"}</h3>
            <p className="mt-2 text-sm text-white/75">
              {lang === "zh"
                ? "在 v2/.env.local 里写入下面这一行，然后重启 dev server。"
                : "Add this line to v2/.env.local, then restart the dev server."}
            </p>
            <code className="mt-4 block overflow-x-auto whitespace-nowrap rounded bg-black/40 px-3 py-2 text-left text-xs text-emerald-200">
              VITE_TIANDITU_KEY=your_tianditu_tk_here
            </code>
          </div>
        </div>
      )}

      {loadState === "error" && (
        <div className="absolute inset-0 z-10 grid place-items-center bg-[#071512] px-6 text-center text-sm font-semibold text-red-100">
          {lang === "zh" ? "天地图加载失败，检查 tk 或网络。" : "Tianditu failed to load. Check the token or network."}
        </div>
      )}

      {loadState === "blocked" && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#071512] px-6 text-center text-white">
          <div className="w-full max-w-lg rounded-lg border border-red-200/25 bg-red-950/55 p-4 shadow-2xl backdrop-blur sm:p-5">
            <h3 className="text-lg font-bold">
              {lang === "zh" ? "天地图瓦片被拦截" : "Tianditu tiles are blocked"}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-red-50/85">
              {lang === "zh"
                ? "当前 key 返回的不是地图图片。去天地图控制台检查 key 权限、域名白名单是否包含 127.0.0.1/localhost，以及服务类型是否允许浏览器端调用。"
                : "The current key is not returning map images. Check key permissions, domain whitelist for 127.0.0.1/localhost, and browser-side service access in the Tianditu console."}
            </p>
          </div>
        </div>
      )}

      {loadState === "ready" && (
        <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-10 rounded-md border border-white/15 bg-black/45 px-3 py-2 text-xs font-semibold leading-snug text-white/85 backdrop-blur sm:right-auto">
          {lang === "zh" ? "天地图影像 · 地形晕渲 · 中文注记 · 城市/景区标注" : "Tianditu imagery · terrain relief · labels · city and attraction markers"}
        </div>
      )}
    </div>
  );
}
