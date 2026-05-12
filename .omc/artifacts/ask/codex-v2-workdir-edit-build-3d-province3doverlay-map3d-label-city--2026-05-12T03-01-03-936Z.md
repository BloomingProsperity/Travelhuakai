# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-12T03:01:03.937Z

## Original task

在 v2/ workdir 直接修代码（真的 edit + build，不是写建议）。

任务：让 3D 地图（Province3DOverlay → Map3D）里的城市 / 景点 label 在点击时跳转到 /city/:cityId（仅 Phase 1 的 4 城）。

mapping（atlas 内部 cityId → 路由用的 CityId）：
- beijing-city → beijing
- shanghai-city → shanghai
- guangzhou-city → guangzhou
- shenzhen-city → shenzhen

读这些文件理解 3D label 渲染：
- v2/src/components/map/Map3D.tsx（codex 之前指 251-259 行附近）
- v2/src/components/map/Province3DOverlay.tsx
- v2/src/components/map/SpecialRegionMarkers.tsx
- v2/src/components/map/MapPreview.tsx（如果它也有 city label）
- v2/src/store/atlas.ts（看 selectPlace 是怎么用的）

修法：用 useNavigate from 'react-router'。Phase 1 city label 加 onClick 触发 navigate('/city/<routeId>')。非 Phase 1 城市保持现行行为（只在 3D 里 select 不跳页）。如果 3D 用 three.js 渲染需要 raycast 处理点击；如果是 HTML overlay 就直接绑 onClick。

完成后跑 npx tsc --noEmit 和 npm run build，要 0 error。

返回简短报告：哪些文件改了 + 哪些 label 现在能 nav + build 状态。200 字以内。

## Final prompt

在 v2/ workdir 直接修代码（真的 edit + build，不是写建议）。

任务：让 3D 地图（Province3DOverlay → Map3D）里的城市 / 景点 label 在点击时跳转到 /city/:cityId（仅 Phase 1 的 4 城）。

mapping（atlas 内部 cityId → 路由用的 CityId）：
- beijing-city → beijing
- shanghai-city → shanghai
- guangzhou-city → guangzhou
- shenzhen-city → shenzhen

读这些文件理解 3D label 渲染：
- v2/src/components/map/Map3D.tsx（codex 之前指 251-259 行附近）
- v2/src/components/map/Province3DOverlay.tsx
- v2/src/components/map/SpecialRegionMarkers.tsx
- v2/src/components/map/MapPreview.tsx（如果它也有 city label）
- v2/src/store/atlas.ts（看 selectPlace 是怎么用的）

修法：用 useNavigate from 'react-router'。Phase 1 city label 加 onClick 触发 navigate('/city/<routeId>')。非 Phase 1 城市保持现行行为（只在 3D 里 select 不跳页）。如果 3D 用 three.js 渲染需要 raycast 处理点击；如果是 HTML overlay 就直接绑 onClick。

完成后跑 npx tsc --noEmit 和 npm run build，要 0 error。

返回简短报告：哪些文件改了 + 哪些 label 现在能 nav + build 状态。200 字以内。

## Raw output

```text
SUCCESS: The process with PID 607444 (child process of PID 558480) has been terminated.
SUCCESS: The process with PID 558480 (child process of PID 607868) has been terminated.
SUCCESS: The process with PID 607868 (child process of PID 607316) has been terminated.
SUCCESS: The process with PID 607316 (child process of PID 580180) has been terminated.
SUCCESS: The process with PID 607620 (child process of PID 535716) has been terminated.
SUCCESS: The process with PID 535716 (child process of PID 607884) has been terminated.
SUCCESS: The process with PID 607884 (child process of PID 607340) has been terminated.
SUCCESS: The process with PID 607340 (child process of PID 580180) has been terminated.
SUCCESS: The process with PID 607384 (child process of PID 594292) has been terminated.
SUCCESS: The process with PID 594292 (child process of PID 607876) has been terminated.
SUCCESS: The process with PID 607876 (child process of PID 607328) has been terminated.
SUCCESS: The process with PID 607328 (child process of PID 580180) has been terminated.
已直接改代码并构建通过。

改动：`Map3D.tsx`、`ProvinceInfoCard.tsx`、新增 `src/lib/cityRoutes.ts`。

现在 3D 城市 label：北京、上海、广州、深圳会跳 `/city/beijing|shanghai|guangzhou|shenzhen`；非 Phase 1 城市仍只 `selectPlace`。景点 label：故宫、天坛、北京中轴线、外滩、豫园、上海博物馆、广州塔、陈家祠会跳对应城市。

验证：`npx tsc --noEmit` 0 error；`npm run build` 0 error。


OpenAI Codex v0.128.0 (research preview)
--------
workdir: c:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1a1a-c309-7583-8ae5-c7f11c71bd5c
--------
user
在 v2/ workdir 直接修代码（真的 edit + build，不是写建议）。

任务：让 3D 地图（Province3DOverlay → Map3D）里的城市 / 景点 label 在点击时跳转到 /city/:cityId（仅 Phase 1 的 4 城）。

mapping（atlas 内部 cityId → 路由用的 CityId）：
- beijing-city → beijing
- shanghai-city → shanghai
- guangzhou-city → guangzhou
- shenzhen-city → shenzhen

读这些文件理解 3D label 渲染：
- v2/src/components/map/Map3D.tsx（codex 之前指 251-259 行附近）
- v2/src/components/map/Province3DOverlay.tsx
- v2/src/components/map/SpecialRegionMarkers.tsx
- v2/src/components/map/MapPreview.tsx（如果它也有 city label）
- v2/src/store/atlas.ts（看 selectPlace 是怎么用的）

修法：用 useNavigate from 'react-router'。Phase 1 city label 加 onClick 触发 navigate('/city/<routeId>')。非 Phase 1 城市保持现行行为（只在 3D 里 select 不跳页）。如果 3D 用 three.js 渲染需要 raycast 处理点击；如果是 HTML overlay 就直接绑 onClick。

完成后跑 npx tsc --noEmit 和 npm run build，要 0 error。

返回简短报告：哪些文件改了 + 哪些 label 现在能 nav + build 状态。200 字以内。
codex
我会直接在 `v2/` 里改实现并跑类型检查和构建。先按 React 相关改动加载 `react-best-practices`，然后看 3D label 的点击路径。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path \"C:\\Users\\h\\.codex\\plugins\\cache\\openai-curated\\build-web-apps\\63976030\\skills\\react-best-practices\\SKILL.md\"" in c:\Users\h\Documents\New project 2
 succeeded in 437ms:
---
name: react-best-practices
description: React and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing, reviewing, or refactoring React/Next.js code to ensure optimal performance patterns. Triggers on tasks involving React components, Next.js pages, data fetching, bundle optimization, or performance improvements.
metadata:
  author: vercel
  version: "1.0.0"
---

# Vercel React Best Practices

Comprehensive performance optimization guide for React and Next.js applications, maintained by Vercel. Contains 64 rules across 8 categories, prioritized by impact to guide automated refactoring and code generation.

## When to Apply

Reference these guidelines when:
- Writing new React components or Next.js pages
- Implementing data fetching (client or server-side)
- Reviewing code for performance issues
- Refactoring existing React/Next.js code
- Optimizing bundle size or load times

## Rule Categories by Priority

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Eliminating Waterfalls | CRITICAL | `async-` |
| 2 | Bundle Size Optimization | CRITICAL | `bundle-` |
| 3 | Server-Side Performance | HIGH | `server-` |
| 4 | Client-Side Data Fetching | MEDIUM-HIGH | `client-` |
| 5 | Re-render Optimization | MEDIUM | `rerender-` |
| 6 | Rendering Performance | MEDIUM | `rendering-` |
| 7 | JavaScript Performance | LOW-MEDIUM | `js-` |
| 8 | Advanced Patterns | LOW | `advanced-` |

## Quick Reference

### 1. Eliminating Waterfalls (CRITICAL)

- `async-defer-await` - Move await into branches where actually used
- `async-parallel` - Use Promise.all() for independent operations
- `async-dependencies` - Use better-all for partial dependencies
- `async-api-routes` - Start promises early, await late in API routes
- `async-suspense-boundaries` - Use Suspense to stream content

### 2. Bundle Size Optimization (CRITICAL)

- `bundle-barrel-imports` - Import directly, avoid barrel files
- `bundle-dynamic-imports` - Use next/dynamic for heavy components
- `bundle-defer-third-party` - Load analytics/logging after hydration
- `bundle-conditional` - Load modules only when feature is activated
- `bundle-preload` - Preload on hover/focus for perceived speed

### 3. Server-Side Performance (HIGH)

- `server-auth-actions` - Authenticate server actions like API routes
- `server-cache-react` - Use React.cache() for per-request deduplication
- `server-cache-lru` - Use LRU cache for cross-request caching
- `server-dedup-props` - Avoid duplicate serialization in RSC props
- `server-hoist-static-io` - Hoist static I/O (fonts, logos) to module level
- `server-serialization` - Minimize data passed to client components
- `server-parallel-fetching` - Restructure components to parallelize fetches
- `server-after-nonblocking` - Use after() for non-blocking operations

### 4. Client-Side Data Fetching (MEDIUM-HIGH)

- `client-swr-dedup` - Use SWR for automatic request deduplication
- `client-event-listeners` - Deduplicate global event listeners
- `client-passive-event-listeners` - Use passive listeners for scroll
- `client-localstorage-schema` - Version and minimize localStorage data

### 5. Re-render Optimization (MEDIUM)

- `rerender-defer-reads` - Don't subscribe to state only used in callbacks
- `rerender-memo` - Extract expensive work into memoized components
- `rerender-memo-with-default-value` - Hoist default non-primitive props
- `rerender-dependencies` - Use primitive dependencies in effects
- `rerender-derived-state` - Subscribe to derived booleans, not raw values
- `rerender-derived-state-no-effect` - Derive state during render, not effects
- `rerender-functional-setstate` - Use functional setState for stable callbacks
- `rerender-lazy-state-init` - Pass function to useState for expensive values
- `rerender-simple-expression-in-memo` - Avoid memo for simple primitives
- `rerender-split-combined-hooks` - Split hooks with independent dependencies
- `rerender-move-effect-to-event` - Put interaction logic in event handlers
- `rerender-transitions` - Use startTransition for non-urgent updates
- `rerender-use-deferred-value` - Defer expensive renders to keep input responsive
- `rerender-use-ref-transient-values` - Use refs for transient frequent values
- `rerender-no-inline-components` - Don't define components inside components

### 6. Rendering Performance (MEDIUM)

- `rendering-animate-svg-wrapper` - Animate div wrapper, not SVG element
- `rendering-content-visibility` - Use content-visibility for long lists
- `rendering-hoist-jsx` - Extract static JSX outside components
- `rendering-svg-precision` - Reduce SVG coordinate precision
- `rendering-hydration-no-flicker` - Use inline script for client-only data
- `rendering-hydration-suppress-warning` - Suppress expected mismatches
- `rendering-activity` - Use Activity component for show/hide
- `rendering-conditional-render` - Use ternary, not && for conditionals
- `rendering-usetransition-loading` - Prefer useTransition for loading state
- `rendering-resource-hints` - Use React DOM resource hints for preloading
- `rendering-script-defer-async` - Use defer or async on script tags

### 7. JavaScript Performance (LOW-MEDIUM)

- `js-batch-dom-css` - Group CSS changes via classes or cssText
- `js-index-maps` - Build Map for repeated lookups
- `js-cache-property-access` - Cache object properties in loops
- `js-cache-function-results` - Cache function results in module-level Map
- `js-cache-storage` - Cache localStorage/sessionStorage reads
- `js-combine-iterations` - Combine multiple filter/map into one loop
- `js-length-check-first` - Check array length before expensive comparison
- `js-early-exit` - Return early from functions
- `js-hoist-regexp` - Hoist RegExp creation outside loops
- `js-min-max-loop` - Use loop for min/max instead of sort
- `js-set-map-lookups` - Use Set/Map for O(1) lookups
- `js-tosorted-immutable` - Use toSorted() for immutability
- `js-flatmap-filter` - Use flatMap to map and filter in one pass

### 8. Advanced Patterns (LOW)

- `advanced-event-handler-refs` - Store event handlers in refs
- `advanced-init-once` - Initialize app once per app load
- `advanced-use-latest` - useLatest for stable callback refs

## How to Use

Read individual rule files for detailed explanations and code examples:

```
rules/async-parallel.md
rules/bundle-barrel-imports.md
```

Each rule file contains:
- Brief explanation of why it matters
- Incorrect code example with explanation
- Correct code example with explanation
- Additional context and references

## Full Compiled Document

For the complete guide with all rules expanded: `AGENTS.md`

codex
我现在检查相关组件和 atlas store，重点确认 label 是 DOM overlay 还是 three.js 射线命中对象，以及现有 `selectPlace` 是否已经挂在点击上。
  → Inspect map label rendering and routing context
  • Patch Phase 1 city label navigation
  • Run TypeScript and production build
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path \"v2\\src\\components\\map\\Map3D.tsx\"" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path \"v2\\src\\components\\map\\Province3DOverlay.tsx\"" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path \"v2\\src\\components\\map\\SpecialRegionMarkers.tsx\"" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path \"v2\\src\\components\\map\\MapPreview.tsx\"" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path \"v2\\src\\store\\atlas.ts\"" in c:\Users\h\Documents\New project 2
 succeeded in 934ms:
import { lazy, Suspense } from "react";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";

const Map3D = lazy(() => import("./Map3D"));

export default function Province3DOverlay() {
  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
  const { lang } = useLang();

  if (!selectedProvinceId || !province || !is3DEnabled) return null;

  return (
    <section
      data-province-3d-overlay="true"
      className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
    >
      <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-widest text-muted">
            {lang === "zh" ? "澶╁湴鍥?3D" : "Tianditu 3D"}
          </p>
          <h3 className="truncate text-base font-bold leading-tight sm:text-lg">
            {lang === "zh" ? province.zh : province.name}
          </h3>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-ink px-3 py-2 text-xs font-bold uppercase tracking-normal text-white hover:bg-ink/90 sm:px-4 sm:tracking-wider"
          >
            {lang === "zh" ? "杩斿洖 2D" : "Back to 2D"}
          </button>
          <button
            type="button"
            aria-label={lang === "zh" ? "鍏抽棴 3D 鍦板浘" : "Close 3D map"}
            onClick={reset}
            className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-lg font-bold leading-none text-ink shadow-sm hover:border-jade hover:text-jade"
          >
            脳
          </button>
        </div>
      </header>

      <div className="min-h-0 flex-1">
        <Suspense
          fallback={
            <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
              {lang === "zh" ? "姝ｅ湪鍔犺浇澶╁湴鍥?.." : "Loading Tianditu..."}
            </div>
          }
        >
          <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
        </Suspense>
      </div>
    </section>
  );
}

 succeeded in 1009ms:
import { useEffect, useMemo, useRef, useState } from "react";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
import type { Lang } from "../../data/i18n";
import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";

type CesiumModule = typeof import("cesium");
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

const FALLBACK_AREA: ProvinceHitArea = {
  id: "china",
  en: "China",
  zh: "涓浗",
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
  size: number
) {
  viewer.entities.add({
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
    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
  });

  const attractions = provinceAttractionSeed[provinceId] ?? [];
  attractions.forEach((attraction, index) => {
    const position = getAttractionPosition(area, index);
    addLabelEntity(Cesium, viewer, position, getEntityText(attraction.zh, attraction.en, lang), "#f59e0b", 9);
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

export default function Map3D({ province, provinceId, lang }: Map3DProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<CesiumViewer | null>(null);
  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!token) return;

    let cancelled = false;
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
          {lang === "zh" ? "姝ｅ湪鍔犺浇澶╁湴鍥?.." : "Loading Tianditu..."}
        </div>
      )}

      {loadState === "missing-key" && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#071512] px-6 text-center text-white">
          <div className="w-full max-w-md rounded-lg border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur sm:p-5">
            <h3 className="text-lg font-bold">{lang === "zh" ? "闇€瑕侀厤缃ぉ鍦板浘 tk" : "Tianditu token required"}</h3>
            <p className="mt-2 text-sm text-white/75">
              {lang === "zh"
                ? "鍦?v2/.env.local 閲屽啓鍏ヤ笅闈㈣繖涓€琛岋紝鐒跺悗閲嶅惎 dev server銆?
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
          {lang === "zh" ? "澶╁湴鍥惧姞杞藉け璐ワ紝妫€鏌?tk 鎴栫綉缁溿€? : "Tianditu failed to load. Check the token or network."}
        </div>
      )}

      {loadState === "blocked" && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#071512] px-6 text-center text-white">
          <div className="w-full max-w-lg rounded-lg border border-red-200/25 bg-red-950/55 p-4 shadow-2xl backdrop-blur sm:p-5">
            <h3 className="text-lg font-bold">
              {lang === "zh" ? "澶╁湴鍥剧摝鐗囪鎷︽埅" : "Tianditu tiles are blocked"}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-red-50/85">
              {lang === "zh"
                ? "褰撳墠 key 杩斿洖鐨勪笉鏄湴鍥惧浘鐗囥€傚幓澶╁湴鍥炬帶鍒跺彴妫€鏌?key 鏉冮檺銆佸煙鍚嶇櫧鍚嶅崟鏄惁鍖呭惈 127.0.0.1/localhost锛屼互鍙婃湇鍔＄被鍨嬫槸鍚﹀厑璁告祻瑙堝櫒绔皟鐢ㄣ€?
                : "The current key is not returning map images. Check key permissions, domain whitelist for 127.0.0.1/localhost, and browser-side service access in the Tianditu console."}
            </p>
          </div>
        </div>
      )}

      {loadState === "ready" && (
        <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-10 rounded-md border border-white/15 bg-black/45 px-3 py-2 text-xs font-semibold leading-snug text-white/85 backdrop-blur sm:right-auto">
          {lang === "zh" ? "澶╁湴鍥惧奖鍍?路 鍦板舰鏅曟覆 路 涓枃娉ㄨ 路 鍩庡競/鏅尯鏍囨敞" : "Tianditu imagery 路 terrain relief 路 labels 路 city and attraction markers"}
        </div>
      )}
    </div>
  );
}

 succeeded in 999ms:
import { createContext, useContext, type Dispatch } from "react";
import { atlasData, type CityRecord, type ProvinceRecord } from "../data/atlas";
import { provinceHitAreas } from "../data/map-sources";

export type AtlasState = {
  selectedProvinceId: string | null;
  selectedCityId: string | null;
  is3DEnabled: boolean;
};

export type AtlasAction =
  | { type: "selectProvince"; provinceId: string | null }
  | { type: "selectPlace"; provinceId: string; cityId: string | null }
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
        is3DEnabled: Boolean(action.provinceId)
      };
    case "selectPlace":
      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
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
    selectProvince: (provinceId: string | null) => dispatch({ type: "selectProvince", provinceId }),
    selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
    selectCity: (cityId: string | null) =>
      state.selectedProvinceId
        ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })
        : dispatch({ type: "selectProvince", provinceId: null }),
    toggle3D: () => dispatch({ type: "toggle3D" }),
    reset: () => dispatch({ type: "reset" })
  };
}

 succeeded in 1027ms:
import { useMemo } from "react";
import { useProvinceShapes } from "../../hooks/useProvinceShapes";
import { computeUnionViewBox } from "../../lib/shapes";
import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";

export default function MapPreview() {
  const shapes = useProvinceShapes();
  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);

  if (!shapes || !viewBox) {
    return <div className="h-full w-full bg-white/70" />;
  }

  return (
    <svg
      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      aria-hidden
    >
      {Object.values(shapes).map((shape) =>
        shape.paths.map((path, index) => (
          <path
            key={`${shape.id}-${index}`}
            d={path}
            fill={PROVINCE_COLORS[shape.id] ?? DEFAULT_PROVINCE_FILL}
            stroke="rgba(78,91,85,0.72)"
            strokeWidth={0.85}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        ))
      )}
    </svg>
  );
}

 succeeded in 1067ms:
import type { CSSProperties } from "react";
import { provinceHitAreas } from "../../data/map-sources";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";

const markerIds = new Set(["hong-kong", "macau"]);
const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
};

export default function SpecialRegionMarkers() {
  const { lang } = useLang();
  const { selectedProvinceId, selectPlace } = useAtlas();
  const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));

  if (selectedProvinceId) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[25]">
      {visible.map((area) => {
        const offsets = markerOffsets[area.id];
        const style = {
          "--marker-left-desktop": `${area.x + (offsets?.desktopX ?? 0)}%`,
          "--marker-top-desktop": `${area.y + (offsets?.desktopY ?? 0)}%`,
          "--marker-left-mobile": `${area.x + (offsets?.mobileX ?? 0)}%`,
          "--marker-top-mobile": `${area.y + (offsets?.mobileY ?? 0)}%`
        } as CSSProperties;

        return (
          <button
            key={area.id}
            type="button"
            aria-label={lang === "zh" ? area.zh : area.en}
            onClick={() => selectPlace(area.id, null)}
            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
            style={style}
          >
            <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />
            <span className="hidden sm:inline">{lang === "zh" ? area.zh : area.en}</span>
          </button>
        );
      })}
    </div>
  );
}

codex
`Map3D` 用 Cesium entity 渲染 label/point，不是 HTML overlay；需要给城市 entity 带上可识别 metadata，再在 Cesium click handler 里 pick entity 后决定 select 或 navigate。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg \"useNavigate|/city/|cityId|CityId\" v2\\src" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg \"beijing-city|shanghai-city|guangzhou-city|shenzhen-city\" v2\\src" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path \"v2\\package.json\"" in c:\Users\h\Documents\New project 2
 succeeded in 878ms:
v2\src\App.tsx:            <Route path="/city/:cityId" element={<CityPage />} />
v2\src\data\atlas.ts:  cityId?: string;
v2\src\data\atlas.ts:  { zh: "东城区", en: "Dongcheng District", type: "county", provinceId: "beijing", cityId: "beijing-city", aliases: ["dongcheng"] },
v2\src\data\atlas.ts:  { zh: "延庆区", en: "Yanqing District", type: "county", provinceId: "beijing", cityId: "beijing-city", aliases: ["yanqing"] },
v2\src\data\atlas.ts:  { zh: "古北口镇", en: "Gubeikou Town", type: "town", provinceId: "beijing", cityId: "beijing-city", aliases: ["古北口", "gubeikou"] },
v2\src\data\atlas.ts:  { zh: "爨底下村", en: "Cuandixia Village", type: "village", provinceId: "beijing", cityId: "beijing-city", aliases: ["cuandixia", "爨底下"] },
v2\src\data\atlas.ts:  { zh: "黄浦区", en: "Huangpu District", type: "county", provinceId: "shanghai", cityId: "shanghai-city", aliases: ["huangpu"] },
v2\src\data\atlas.ts:  { zh: "朱家角镇", en: "Zhujiajiao Town", type: "town", provinceId: "shanghai", cityId: "shanghai-city", aliases: ["zhujiajiao", "朱家角"] },
v2\src\data\atlas.ts:  { zh: "雁塔区", en: "Yanta District", type: "county", provinceId: "shaanxi", cityId: "xian", aliases: ["yanta"] },
v2\src\data\atlas.ts:  { zh: "临潼区", en: "Lintong District", type: "county", provinceId: "shaanxi", cityId: "xian", aliases: ["lintong"] },
v2\src\data\atlas.ts:  { zh: "秦淮区", en: "Qinhuai District", type: "county", provinceId: "jiangsu", cityId: "nanjing", aliases: ["qinhuai"] },
v2\src\data\atlas.ts:  { zh: "昆山市", en: "Kunshan City", type: "county", provinceId: "jiangsu", cityId: "suzhou", aliases: ["kunshan"] },
v2\src\data\atlas.ts:  { zh: "周庄镇", en: "Zhouzhuang Town", type: "town", provinceId: "jiangsu", cityId: "suzhou", aliases: ["zhouzhuang", "周庄"] },
v2\src\data\atlas.ts:  { zh: "同里镇", en: "Tongli Town", type: "town", provinceId: "jiangsu", cityId: "suzhou", aliases: ["tongli", "同里"] },
v2\src\data\atlas.ts:  { zh: "广陵区", en: "Guangling District", type: "county", provinceId: "jiangsu", cityId: "yangzhou", aliases: ["guangling"] },
v2\src\data\atlas.ts:  { zh: "都江堰市", en: "Dujiangyan City", type: "county", provinceId: "sichuan", cityId: "chengdu", aliases: ["dujiangyan", "都江堰"] },
v2\src\data\atlas.ts:  { zh: "洛带镇", en: "Luodai Town", type: "town", provinceId: "sichuan", cityId: "chengdu", aliases: ["luodai", "洛带"] },
v2\src\data\atlas.ts:  { zh: "黄龙溪镇", en: "Huanglongxi Town", type: "town", provinceId: "sichuan", cityId: "chengdu", aliases: ["huanglongxi", "黄龙溪"] },
v2\src\data\atlas.ts:  { zh: "峨眉山市", en: "Emeishan City", type: "county", provinceId: "sichuan", cityId: "leshan", aliases: ["emeishan", "峨眉山"] }
v2\src\routes.ts:  route("city/:cityId", "./pages/CityPage.tsx"),
v2\src\hooks\useCityViews.ts:const readCount = (cityId: string): number => {
v2\src\hooks\useCityViews.ts:  const stored = Number(window.localStorage.getItem(KEY_PREFIX + cityId) ?? 0);
v2\src\hooks\useCityViews.ts:export function useCityViewCount(cityId: string, baseViews: number): number {
v2\src\hooks\useCityViews.ts:    () => readCount(cityId),
v2\src\hooks\useCityViews.ts:export function useRecordCityView(): (cityId: string) => void {
v2\src\hooks\useCityViews.ts:  return useCallback((cityId: string) => {
v2\src\hooks\useCityViews.ts:    const next = readCount(cityId) + 1;
v2\src\hooks\useCityViews.ts:    window.localStorage.setItem(KEY_PREFIX + cityId, String(next));
v2\src\lib\search.ts:  cityId?: string;
v2\src\lib\search.ts:    const key = `${record.type}|${record.provinceId}|${record.cityId ?? ""}|${normalize(record.zh)}|${normalize(record.en)}`;
v2\src\lib\search.ts:        cityId: city.id,
v2\src\lib\search.ts:          cityId: city.id,
v2\src\lib\search.ts:          cityId: city.id,
v2\src\lib\search.ts:      cityId: item.cityId,
v2\src\data\city-tourism-portals.ts:import type { CityId } from "./transport";
v2\src\data\city-tourism-portals.ts:export const cityTourismPortals: Record<CityId, Portal[]> = {
v2\src\data\city-attractions.ts:import type { CityId } from "./transport";
v2\src\data\city-attractions.ts:  cityId: CityId;
v2\src\data\city-attractions.ts:    cityId: "beijing",
v2\src\data\city-attractions.ts:    cityId: "beijing",
v2\src\data\city-attractions.ts:    cityId: "beijing",
v2\src\data\city-attractions.ts:    cityId: "beijing",
v2\src\data\city-attractions.ts:    cityId: "beijing",
v2\src\data\city-attractions.ts:    cityId: "beijing",
v2\src\data\city-attractions.ts:    cityId: "shanghai",
v2\src\data\city-attractions.ts:    cityId: "shanghai",
v2\src\data\city-attractions.ts:    cityId: "shanghai",
v2\src\data\city-attractions.ts:    cityId: "shanghai",
v2\src\data\city-attractions.ts:    cityId: "shanghai",
v2\src\data\city-attractions.ts:    cityId: "shanghai",
v2\src\data\city-attractions.ts:    cityId: "guangzhou",
v2\src\data\city-attractions.ts:    cityId: "guangzhou",
v2\src\data\city-attractions.ts:    cityId: "guangzhou",
v2\src\data\city-attractions.ts:    cityId: "guangzhou",
v2\src\data\city-attractions.ts:    cityId: "guangzhou",
v2\src\data\city-attractions.ts:    cityId: "guangzhou",
v2\src\data\city-attractions.ts:    cityId: "shenzhen",
v2\src\data\city-attractions.ts:    cityId: "shenzhen",
v2\src\data\city-attractions.ts:    cityId: "shenzhen",
v2\src\data\city-attractions.ts:    cityId: "shenzhen",
v2\src\data\city-attractions.ts:    cityId: "shenzhen",
v2\src\data\city-attractions.ts:    cityId: "shenzhen",
v2\src\data\city-attractions.ts:export function attractionsByCity(cityId: CityId): Attraction[] {
v2\src\data\city-attractions.ts:  return cityAttractions.filter((a) => a.cityId === cityId);
v2\src\components\atlas\CityList.tsx:  const { selectedCityId, selectCity } = useAtlas();
v2\src\components\atlas\CityList.tsx:          active={city.id === selectedCityId}
v2\src\data\food.ts:import type { CityId } from "./transport";
v2\src\data\food.ts:  cityId: CityId;
v2\src\data\food.ts:    cityId: "beijing",
v2\src\data\food.ts:    cityId: "shanghai",
v2\src\data\food.ts:    cityId: "guangzhou",
v2\src\data\food.ts:    cityId: "shenzhen",
v2\src\data\food.ts:export function foodSourceIds(cityId?: CityId): string[] {
v2\src\data\food.ts:  const cities = cityId ? cityFood.filter((c) => c.cityId === cityId) : cityFood;
v2\src\data\food.ts:  pitfallSourceIds("food", cityId).forEach((id) => ids.add(id));
v2\src\components\city\CityHero.tsx:import type { CityId } from "../../data/transport";
v2\src\components\city\CityHero.tsx:type Props = { cityId: CityId };
v2\src\components\city\CityHero.tsx:export default function CityHero({ cityId }: Props) {
v2\src\components\city\CityHero.tsx:  const attractions = attractionsByCity(cityId);
v2\src\components\city\CityImagePanel.tsx:import type { CityId } from "../../data/transport";
v2\src\components\city\CityImagePanel.tsx:type Props = { cityId: CityId };
v2\src\components\city\CityImagePanel.tsx:export default function CityImagePanel({ cityId }: Props) {
v2\src\components\city\CityImagePanel.tsx:  const attractions = attractionsByCity(cityId).filter((a) => a.tier === "must-visit");
v2\src\pages\CityPage.tsx:import { CITY_LABELS, type CityId } from "../data/transport";
v2\src\pages\CityPage.tsx:import CityNav from "../components/city/CityNav";
v2\src\pages\CityPage.tsx:import CityIntro from "../components/city/CityIntro";
v2\src\pages\CityPage.tsx:import CityImagePanel from "../components/city/CityImagePanel";
v2\src\pages\CityPage.tsx:const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
v2\src\pages\CityPage.tsx:  const { cityId } = useParams<{ cityId: string }>();
v2\src\pages\CityPage.tsx:  if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
v2\src\pages\CityPage.tsx:  const id = cityId as CityId;
v2\src\pages\CityPage.tsx:          <CityIntro cityId={id} />
v2\src\pages\CityPage.tsx:          <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
v2\src\pages\CityPage.tsx:          <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>
v2\src\pages\CityPage.tsx:          <section id="food" className="scroll-mt-24"><FoodGuide cityId={id} /></section>
v2\src\pages\CityPage.tsx:          <section id="emergency" className="scroll-mt-24"><EmergencyBriefing cityId={id} /></section>
v2\src\pages\CityPage.tsx:          <section id="portals" className="scroll-mt-24"><CityFurtherReading cityId={id} /></section>
v2\src\pages\CityPage.tsx:        <CityImagePanel cityId={id} />
v2\src\data\types.ts:  cityId: string;
v2\src\data\types.ts:export type CityId = "beijing-city" | "shanghai-city" | "guangzhou-city" | "shenzhen-city";
v2\src\services\notes.ts:export async function getUserNotes(cityId: string): Promise<UserNote[]> {
v2\src\services\notes.ts:  void cityId;
v2\src\services\notes.ts:  cityId: string;
v2\src\pages\HomePage.tsx:import { CITY_LABELS, type CityId } from "../data/transport";
v2\src\pages\HomePage.tsx:const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
v2\src\pages\HomePage.tsx:function pickCityPhoto(cityId: CityId): Attraction {
v2\src\pages\HomePage.tsx:  return attractionsByCity(cityId)[0];
v2\src\pages\HomePage.tsx:        {CITY_IDS.map((cityId) => (
v2\src\pages\HomePage.tsx:          <CityPhotoCard key={cityId} cityId={cityId} attraction={pickCityPhoto(cityId)} isZh={isZh} />
v2\src\pages\HomePage.tsx:  cityId,
v2\src\pages\HomePage.tsx:  cityId: CityId;
v2\src\pages\HomePage.tsx:  const city = CITY_LABELS[cityId];
v2\src\pages\HomePage.tsx:      to={`/city/${cityId}`}
v2\src\pages\HomePage.tsx:        loading={cityId === "beijing" ? "eager" : "lazy"}
v2\src\components\search\PlaceSearch.tsx:    selectPlace(record.provinceId, record.cityId ?? null);
v2\src\components\search\PlaceSearch.tsx:          return <option key={`${record.provinceId}-${record.cityId ?? ""}-${i}`} value={primary} label={`${primary} · ${typeLabel}`} />;
v2\src\store\atlas.ts:  selectedCityId: string | null;
v2\src\store\atlas.ts:  | { type: "selectPlace"; provinceId: string; cityId: string | null }
v2\src\store\atlas.ts:  selectedCityId: null,
v2\src\store\atlas.ts:        selectedCityId: null,
v2\src\store\atlas.ts:      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
v2\src\store\atlas.ts:const findCity = (province: ProvinceRecord | null, cityId: string | null): CityRecord | null => {
v2\src\store\atlas.ts:  if (!province || !cityId) return null;
v2\src\store\atlas.ts:  return province.cities.find((c) => c.id === cityId) ?? null;
v2\src\store\atlas.ts:  const city = findCity(province, state.selectedCityId);
v2\src\store\atlas.ts:    selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
v2\src\store\atlas.ts:    selectCity: (cityId: string | null) =>
v2\src\store\atlas.ts:        ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })
v2\src\components\common\PracticalBlock.tsx:import type { CityId } from "../../data/transport";
v2\src\components\common\PracticalBlock.tsx:type Props = { pillar: PillarId; cityId?: CityId };
v2\src\components\common\PracticalBlock.tsx:export default function PracticalBlock({ pillar, cityId }: Props) {
v2\src\components\common\PracticalBlock.tsx:  const items = pitfallsForPillar(pillar, cityId);
v2\src\components\city\CityIntro.tsx:import type { CityId } from "../../data/transport";
v2\src\components\city\CityIntro.tsx:type Props = { cityId: CityId };
v2\src\components\city\CityIntro.tsx:const CITY_BLURB: Record<CityId, { en: string; zh: string }> = {
v2\src\components\city\CityIntro.tsx:const CITY_FACTS: Record<CityId, Array<{ en: string; zh: string }>> = {
v2\src\components\city\CityIntro.tsx:export default function CityIntro({ cityId }: Props) {
v2\src\components\city\CityIntro.tsx:  const attractions = attractionsByCity(cityId);
v2\src\components\city\CityIntro.tsx:  const blurb = CITY_BLURB[cityId];
v2\src\components\city\CityIntro.tsx:  const facts = CITY_FACTS[cityId];
v2\src\components\common\CityFurtherReading.tsx:import type { CityId } from "../../data/transport";
v2\src\components\common\CityFurtherReading.tsx:type Props = { cityId: CityId };
v2\src\components\common\CityFurtherReading.tsx:export default function CityFurtherReading({ cityId }: Props) {
v2\src\components\common\CityFurtherReading.tsx:  const portals = cityTourismPortals[cityId];
v2\src\data\practical-other.ts:import type { CityId } from "./transport";
v2\src\data\practical-other.ts:  cityScope?: CityId[];
v2\src\data\practical-other.ts:export function pitfallsForPillar(pillar: PillarId, cityId?: CityId): Pitfall[] {
v2\src\data\practical-other.ts:    if (!cityId) return true;
v2\src\data\practical-other.ts:    return p.cityScope.includes(cityId);
v2\src\data\practical-other.ts:export function pitfallSourceIds(pillar?: PillarId, cityId?: CityId): string[] {
v2\src\data\practical-other.ts:  const items = pillar ? pitfallsForPillar(pillar, cityId) : pitfalls;
v2\src\data\payments.ts:import type { CityId } from "./transport";
v2\src\data\payments.ts:  cityId: CityId;
v2\src\data\payments.ts:    cityId: "beijing",
v2\src\data\payments.ts:    cityId: "shanghai",
v2\src\data\payments.ts:    cityId: "guangzhou",
v2\src\data\payments.ts:    cityId: "shenzhen",
v2\src\data\payments.ts:export function paymentsSourceIds(cityId?: CityId): string[] {
v2\src\data\payments.ts:  const cities = cityId ? cityPaymentNotes.filter((c) => c.cityId === cityId) : cityPaymentNotes;
v2\src\components\pillar\PaymentsChecklist.tsx:import type { CityId } from "../../data/transport";
v2\src\components\pillar\PaymentsChecklist.tsx:type Props = { cityId?: CityId };
v2\src\components\pillar\PaymentsChecklist.tsx:export default function PaymentsChecklist({ cityId }: Props) {
v2\src\components\pillar\PaymentsChecklist.tsx:  const cityScoped = Boolean(cityId);
v2\src\components\pillar\PaymentsChecklist.tsx:  const cities = cityId
v2\src\components\pillar\PaymentsChecklist.tsx:    ? cityPaymentNotes.filter((c) => c.cityId === cityId)
v2\src\components\pillar\PaymentsChecklist.tsx:            <li key={city.cityId} className="flex flex-col gap-2 rounded-lg border border-line bg-white p-3">
v2\src\components\pillar\EmergencyBriefing.tsx:import { CITY_LABELS, type CityId } from "../../data/transport";
v2\src\components\pillar\EmergencyBriefing.tsx:const CITIES: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
v2\src\components\pillar\EmergencyBriefing.tsx:type Props = { cityId?: CityId };
v2\src\components\pillar\EmergencyBriefing.tsx:export default function EmergencyBriefing({ cityId }: Props) {
v2\src\components\pillar\EmergencyBriefing.tsx:  const cityScoped = Boolean(cityId);
v2\src\components\pillar\EmergencyBriefing.tsx:  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
v2\src\components\pillar\EmergencyBriefing.tsx:  const effectiveId: CityId = cityId ?? activeId;
v2\src\components\pillar\EmergencyBriefing.tsx:  const cityHospitals = hospitals.filter((h) => h.cityId === effectiveId);
v2\src\components\pillar\EmergencyBriefing.tsx:  const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
v2\src\components\pillar\EmergencyBriefing.tsx:      <PracticalBlock pillar="emergency" cityId={cityId} />
v2\src\components\pillar\FoodGuide.tsx:import { CITY_LABELS, type CityId } from "../../data/transport";
v2\src\components\pillar\FoodGuide.tsx:import CuisineDrawer from "../city/CuisineDrawer";
v2\src\components\pillar\FoodGuide.tsx:type Props = { cityId?: CityId };
v2\src\components\pillar\FoodGuide.tsx:export default function FoodGuide({ cityId }: Props) {
v2\src\components\pillar\FoodGuide.tsx:  const cityScoped = Boolean(cityId);
v2\src\components\pillar\FoodGuide.tsx:  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
v2\src\components\pillar\FoodGuide.tsx:  const effectiveId: CityId = cityId ?? activeId;
v2\src\components\pillar\FoodGuide.tsx:  const active = cityFood.find((c) => c.cityId === effectiveId)!;
v2\src\components\pillar\FoodGuide.tsx:              key={city.cityId}
v2\src\components\pillar\FoodGuide.tsx:              aria-selected={activeId === city.cityId}
v2\src\components\pillar\FoodGuide.tsx:              onClick={() => setActiveId(city.cityId)}
v2\src\components\pillar\FoodGuide.tsx:                activeId === city.cityId
v2\src\components\pillar\FoodGuide.tsx:              {isZh ? CITY_LABELS[city.cityId].zh : CITY_LABELS[city.cityId].en}
v2\src\components\pillar\FoodGuide.tsx:      <PracticalBlock pillar="food" cityId={cityId} />
v2\src\components\pillar\TransportGuide.tsx:import { CITY_LABELS, cityTransport, railBooking, type CityId } from "../../data/transport";
v2\src\components\pillar\TransportGuide.tsx:type Props = { cityId?: CityId };
v2\src\components\pillar\TransportGuide.tsx:export default function TransportGuide({ cityId }: Props) {
v2\src\components\pillar\TransportGuide.tsx:  const cityScoped = Boolean(cityId);
v2\src\components\pillar\TransportGuide.tsx:  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
v2\src\components\pillar\TransportGuide.tsx:  const effectiveId: CityId = cityId ?? activeId;
v2\src\components\pillar\TransportGuide.tsx:  const active = cityTransport.find((c) => c.cityId === effectiveId)!;
v2\src\components\pillar\TransportGuide.tsx:              key={city.cityId}
v2\src\components\pillar\TransportGuide.tsx:              aria-selected={activeId === city.cityId}
v2\src\components\pillar\TransportGuide.tsx:              onClick={() => setActiveId(city.cityId)}
v2\src\components\pillar\TransportGuide.tsx:                activeId === city.cityId
v2\src\components\pillar\TransportGuide.tsx:              {isZh ? CITY_LABELS[city.cityId].zh : CITY_LABELS[city.cityId].en}
v2\src\components\pillar\TransportGuide.tsx:      <PracticalBlock pillar="transport" cityId={cityId} />
v2\src\data\emergency.ts:import type { CityId } from "./transport";
v2\src\data\emergency.ts:  cityId: CityId;
v2\src\data\emergency.ts:    cityId: "beijing",
v2\src\data\emergency.ts:    cityId: "beijing",
v2\src\data\emergency.ts:    cityId: "shanghai",
v2\src\data\emergency.ts:    cityId: "shanghai",
v2\src\data\emergency.ts:    cityId: "guangzhou",
v2\src\data\emergency.ts:    cityId: "guangzhou",
v2\src\data\emergency.ts:    cityId: "shenzhen",
v2\src\data\emergency.ts:    cityId: "shenzhen",
v2\src\data\emergency.ts:  cityId: CityId;
v2\src\data\emergency.ts:    cityId: "beijing",
v2\src\data\emergency.ts:    cityId: "shanghai",
v2\src\data\emergency.ts:    cityId: "guangzhou",
v2\src\data\emergency.ts:    cityId: "shenzhen",
v2\src\data\emergency.ts:export function emergencySourceIds(cityId?: CityId): string[] {
v2\src\data\emergency.ts:  if (cityId) {
v2\src\data\emergency.ts:    hospitals.filter((h) => h.cityId === cityId).forEach((h) => ids.add(h.sourceId));
v2\src\data\emergency.ts:    const ch = cityHotlines.find((h) => h.cityId === cityId);
v2\src\data\emergency.ts:  pitfallSourceIds("emergency", cityId).forEach((id) => ids.add(id));
v2\src\data\transport.ts:export type CityId = "beijing" | "shanghai" | "guangzhou" | "shenzhen";
v2\src\data\transport.ts:export const CITY_LABELS: Record<CityId, { en: string; zh: string }> = {
v2\src\data\transport.ts:  cityId: CityId;
v2\src\data\transport.ts:    cityId: "beijing",
v2\src\data\transport.ts:    cityId: "shanghai",
v2\src\data\transport.ts:    cityId: "guangzhou",
v2\src\data\transport.ts:    cityId: "shenzhen",
v2\src\data\transport.ts:export function transportSourceIds(cityId?: CityId): string[] {
v2\src\data\transport.ts:  const cities = cityId ? cityTransport.filter((c) => c.cityId === cityId) : cityTransport;
v2\src\data\transport.ts:  pitfallSourceIds("transport", cityId).forEach((id) => ids.add(id));
v2\src\components\map\Map3D.tsx:function getCityPosition(cityId: string, fallbackArea: ProvinceHitArea, index: number): LonLat {
v2\src\components\map\Map3D.tsx:  const point = cityMapPoints[cityId];
v2\src\components\map\ProvinceInfoCard.tsx:import { useNavigate } from "react-router";
v2\src\components\map\ProvinceInfoCard.tsx:  const navigate = useNavigate();
v2\src\components\map\ProvinceInfoCard.tsx:  const goToCity = (cityId: string) => {
v2\src\components\map\ProvinceInfoCard.tsx:    recordView(cityId);
v2\src\components\map\ProvinceInfoCard.tsx:    const phase1 = PHASE1_CITY_ROUTES[cityId];
v2\src\components\map\ProvinceInfoCard.tsx:      navigate(`/city/${phase1}`);
v2\src\components\map\ProvinceInfoCard.tsx:    selectPlace(province.id, cityId);

 succeeded in 878ms:
v2\src\data\atlas.ts:        id: "beijing-city",
v2\src\data\atlas.ts:        id: "shanghai-city",
v2\src\data\atlas.ts:        id: "guangzhou-city",
v2\src\data\atlas.ts:        id: "shenzhen-city",
v2\src\data\atlas.ts:  { zh: "东城区", en: "Dongcheng District", type: "county", provinceId: "beijing", cityId: "beijing-city", aliases: ["dongcheng"] },
v2\src\data\atlas.ts:  { zh: "延庆区", en: "Yanqing District", type: "county", provinceId: "beijing", cityId: "beijing-city", aliases: ["yanqing"] },
v2\src\data\atlas.ts:  { zh: "古北口镇", en: "Gubeikou Town", type: "town", provinceId: "beijing", cityId: "beijing-city", aliases: ["古北口", "gubeikou"] },
v2\src\data\atlas.ts:  { zh: "爨底下村", en: "Cuandixia Village", type: "village", provinceId: "beijing", cityId: "beijing-city", aliases: ["cuandixia", "爨底下"] },
v2\src\data\atlas.ts:  { zh: "黄浦区", en: "Huangpu District", type: "county", provinceId: "shanghai", cityId: "shanghai-city", aliases: ["huangpu"] },
v2\src\data\atlas.ts:  { zh: "朱家角镇", en: "Zhujiajiao Town", type: "town", provinceId: "shanghai", cityId: "shanghai-city", aliases: ["zhujiajiao", "朱家角"] },
v2\src\data\map-sources.ts:  "beijing-city": { x: 68.8, y: 43.6 },
v2\src\data\map-sources.ts:  "shanghai-city": { x: 78.4, y: 60.2 },
v2\src\data\types.ts:export type CityId = "beijing-city" | "shanghai-city" | "guangzhou-city" | "shenzhen-city";
v2\src\components\map\ProvinceInfoCard.tsx:  "beijing-city": "beijing",
v2\src\components\map\ProvinceInfoCard.tsx:  "shanghai-city": "shanghai",
v2\src\components\map\ProvinceInfoCard.tsx:  "guangzhou-city": "guangzhou",
v2\src\components\map\ProvinceInfoCard.tsx:  "shenzhen-city": "shenzhen"

 succeeded in 905ms:
{
  "name": "v2",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "react-router dev",
    "build": "react-router build",
    "lint": "eslint .",
    "test:interactions": "node scripts/interaction-check.mjs",
    "preview": "react-router-serve ./build/server/index.js"
  },
  "dependencies": {
    "@react-router/node": "^7.15.0",
    "@tailwindcss/vite": "^4.3.0",
    "@types/three": "^0.184.1",
    "cesium": "^1.141.0",
    "clsx": "^2.1.1",
    "isbot": "^5.1.40",
    "react": "^19.2.5",
    "react-dom": "^19.2.5",
    "react-router-dom": "^7.15.0",
    "tailwindcss": "^4.3.0",
    "three": "^0.184.0",
    "vite-plugin-static-copy": "^4.1.0"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@react-router/dev": "^7.15.0",
    "@types/node": "^24.12.2",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.2.1",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.5.0",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.58.2",
    "vite": "^8.0.10"
  }
}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path \"v2\\src\\components\\map\\ProvinceInfoCard.tsx\"" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path \"v2\\src\\data\\atlas.ts\"" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path \"v2\\src\\data\\map-sources.ts\"" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path \"v2\\src\\data\\transport.ts\"" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path \"v2\\tsconfig.json\"" in c:\Users\h\Documents\New project 2
 succeeded in 681ms:
import { useNavigate } from "react-router";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";
import { provinceAttractionSeed } from "../../data/atlas";
import { useRecordCityView } from "../../hooks/useCityViews";

const PHASE1_CITY_ROUTES: Record<string, string> = {
  "beijing-city": "beijing",
  "shanghai-city": "shanghai",
  "guangzhou-city": "guangzhou",
  "shenzhen-city": "shenzhen"
};

export default function ProvinceInfoCard() {
  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
  const { lang, t } = useLang();
  const recordView = useRecordCityView();
  const navigate = useNavigate();

  if (!selectedProvinceId || !province || is3DEnabled) return null;

  const attractions = provinceAttractionSeed[selectedProvinceId] ?? [];
  const hasCities = province.cities.length > 0;
  const hasAttractions = attractions.length > 0;

  const goToCity = (cityId: string) => {
    recordView(cityId);
    const phase1 = PHASE1_CITY_ROUTES[cityId];
    if (phase1) {
      navigate(`/city/${phase1}`);
      return;
    }
    selectPlace(province.id, cityId);
  };

  return (
    <aside
      className="absolute bottom-3 left-3 z-20 flex max-h-[78%] w-[300px] flex-col gap-3 overflow-auto rounded-xl border border-line bg-white/95 p-4 shadow-xl backdrop-blur animate-[fadeUp_400ms_ease-out]"
      aria-label={lang === "zh" ? province.zh : province.name}
    >
      <header>
        <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
        <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
      </header>

      {hasCities && (
        <section className="flex flex-col gap-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("cityProfiles")}</h4>
          <ul className="flex flex-col gap-1">
            {province.cities.map((city) => (
              <li key={city.id}>
                <button
                  type="button"
                  onClick={() => goToCity(city.id)}
                  className="flex w-full flex-col rounded-md px-2 py-1.5 text-left transition hover:bg-paper"
                >
                  <strong className="text-sm">{lang === "zh" ? city.zh : city.name}</strong>
                  <span className="text-xs text-muted">{lang === "zh" ? city.museumZh || city.museum : city.museum}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {hasAttractions && (
        <section className="flex flex-col gap-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("famousAttractions")}</h4>
          <ul className="flex flex-wrap gap-1">
            {attractions.map((attraction) => (
              <li
                key={attraction.zh}
                className="rounded-full bg-paper px-2 py-1 text-xs text-muted"
              >
                {lang === "zh" ? attraction.zh : attraction.en}
              </li>
            ))}
          </ul>
        </section>
      )}

      {!hasCities && !hasAttractions && (
        <p className="text-sm text-muted">{t("provinceDataPending")}</p>
      )}
    </aside>
  );
}

 succeeded in 705ms:
export type ProvinceHitArea = {
  id: string;
  en: string;
  zh: string;
  /** Approximate centre x in % of full-China image width */
  x: number;
  /** Approximate centre y in % of full-China image height */
  y: number;
  /** Width in % */
  w: number;
  /** Height in % */
  h: number;
};

export const provinceHitAreas: ProvinceHitArea[] = [
  { id: "xinjiang", en: "Xinjiang", zh: "鏂扮枂", x: 26, y: 36, w: 24, h: 26 },
  { id: "tibet", en: "Tibet", zh: "瑗胯棌", x: 25, y: 61, w: 27, h: 22 },
  { id: "qinghai", en: "Qinghai", zh: "闈掓捣", x: 41, y: 56, w: 15, h: 15 },
  { id: "gansu", en: "Gansu", zh: "鐢樿們", x: 49, y: 46, w: 13, h: 14 },
  { id: "ningxia", en: "Ningxia", zh: "瀹佸", x: 55, y: 43, w: 5, h: 7 },
  { id: "inner-mongolia", en: "Inner Mongolia", zh: "鍐呰挋鍙?, x: 63, y: 32, w: 28, h: 18 },
  { id: "heilongjiang", en: "Heilongjiang", zh: "榛戦緳姹?, x: 78, y: 20, w: 18, h: 15 },
  { id: "jilin", en: "Jilin", zh: "鍚夋灄", x: 78, y: 32, w: 9, h: 8 },
  { id: "liaoning", en: "Liaoning", zh: "杈藉畞", x: 75, y: 39, w: 9, h: 8 },
  { id: "beijing", en: "Beijing", zh: "鍖椾含", x: 68, y: 42, w: 4, h: 4 },
  { id: "tianjin", en: "Tianjin", zh: "澶╂触", x: 70, y: 44, w: 4, h: 4 },
  { id: "hebei", en: "Hebei", zh: "娌冲寳", x: 67, y: 46, w: 9, h: 9 },
  { id: "shanxi", en: "Shanxi", zh: "灞辫タ", x: 63, y: 47, w: 7, h: 10 },
  { id: "shaanxi", en: "Shaanxi", zh: "闄曡タ", x: 59, y: 51, w: 8, h: 12 },
  { id: "henan", en: "Henan", zh: "娌冲崡", x: 65, y: 54, w: 9, h: 9 },
  { id: "shandong", en: "Shandong", zh: "灞变笢", x: 72, y: 51, w: 9, h: 7 },
  { id: "jiangsu", en: "Jiangsu", zh: "姹熻嫃", x: 73, y: 57, w: 8, h: 9 },
  { id: "anhui", en: "Anhui", zh: "瀹夊窘", x: 69, y: 60, w: 8, h: 10 },
  { id: "hubei", en: "Hubei", zh: "婀栧寳", x: 63, y: 61, w: 10, h: 9 },
  { id: "sichuan", en: "Sichuan", zh: "鍥涘窛", x: 53, y: 64, w: 14, h: 14 },
  { id: "chongqing", en: "Chongqing", zh: "閲嶅簡", x: 59, y: 65, w: 6, h: 7 },
  { id: "hunan", en: "Hunan", zh: "婀栧崡", x: 64, y: 69, w: 8, h: 10 },
  { id: "jiangxi", en: "Jiangxi", zh: "姹熻タ", x: 70, y: 69, w: 8, h: 10 },
  { id: "zhejiang", en: "Zhejiang", zh: "娴欐睙", x: 75, y: 66, w: 7, h: 8 },
  { id: "shanghai", en: "Shanghai", zh: "涓婃捣", x: 78, y: 59, w: 4, h: 4 },
  { id: "fujian", en: "Fujian", zh: "绂忓缓", x: 73, y: 75, w: 8, h: 10 },
  { id: "guizhou", en: "Guizhou", zh: "璐靛窞", x: 57, y: 73, w: 9, h: 9 },
  { id: "yunnan", en: "Yunnan", zh: "浜戝崡", x: 50, y: 78, w: 12, h: 15 },
  { id: "guangxi", en: "Guangxi", zh: "骞胯タ", x: 61, y: 79, w: 10, h: 10 },
  { id: "guangdong", en: "Guangdong", zh: "骞夸笢", x: 68, y: 80, w: 12, h: 9 },
  { id: "hainan", en: "Hainan", zh: "娴峰崡", x: 64, y: 91, w: 5, h: 5 },
  { id: "hong-kong", en: "Hong Kong", zh: "棣欐腐", x: 72, y: 82, w: 3, h: 3 },
  { id: "macau", en: "Macau", zh: "婢抽棬", x: 70, y: 82, w: 3, h: 3 },
  { id: "taiwan", en: "Taiwan", zh: "鍙版咕", x: 79, y: 75, w: 6, h: 10 }
];

export const fullChinaMapSrc = "/assets/china-map-gs2022-4309.jpg";

export const provinceTextureSrc = (provinceId: string) =>
  `/assets/province-map-textures/${provinceId}.png`;

export const officialMapCredit = "GS(2022)4309";

export const officialProvinceMapEndpoint =
  "https://bzdt.tianditu.gov.cn/iserver/services/map-2200_China_Map/rest/maps/2200%E4%B8%87%E8%87%AA%E5%8A%A9%E5%88%B6%E5%9B%BE/image.png";

export type ProvinceBounds = { left: number; right: number; bottom: number; top: number };

export const officialProvinceBounds: Record<string, ProvinceBounds> = {
  xinjiang: { left: -3032441.53, right: -1095560.84, bottom: 4013419.31, top: 5519261.34 },
  tibet: { left: -2882534.85, right: -1040616.29, bottom: 2962762.13, top: 4178547.46 },
  qinghai: { left: -1835055.56, right: -612083.66, bottom: 3444039.15, top: 4331644.9 },
  gansu: { left: -1491215.4, right: -112713.32, bottom: 3475643.67, top: 4682283.18 },
  ningxia: { left: -504506.31, right: -203525.02, bottom: 3770553.13, top: 4236435.59 },
  "inner-mongolia": { left: -1036871.83, right: 1145761.66, bottom: 4021980.8, top: 5824342.47 },
  heilongjiang: { left: 780015.14, right: 1846587.07, bottom: 4843626.39, top: 5865660.27 },
  jilin: { left: 899328.46, right: 1692097.1, bottom: 4500493.69, top: 5081871.4 },
  liaoning: { left: 732146.17, right: 1299136.85, bottom: 4208835.76, top: 4768536.48 },
  beijing: { left: 457475.45, right: 624372.18, bottom: 4255681.44, top: 4438320.04 },
  tianjin: { left: 571919.7, right: 682570.7, bottom: 4160698.69, top: 4348965.89 },
  hebei: { left: 304313.42, right: 830519.25, bottom: 3863236.55, top: 4616713.01 },
  shanxi: { left: 23286.77, right: 383195.26, bottom: 3689180.12, top: 4391002.08 },
  shaanxi: { left: -413593.96, right: 107833.84, bottom: 3364465.74, top: 4253438.85 },
  henan: { left: 32572.5, right: 603139.29, bottom: 3340938.75, top: 3894526.89 },
  shandong: { left: 431224.49, right: 1101153.13, bottom: 3696141.86, top: 4125449.53 },
  jiangsu: { left: 570739.53, right: 1108936.9, bottom: 3310867.27, top: 3788214.02 },
  anhui: { left: 448683.13, right: 905226.53, bottom: 3137559.78, top: 3717298.96 },
  hubei: { left: -154897.4, right: 585411.56, bottom: 3072268.07, top: 3538243.38 },
  sichuan: { left: -1161673.21, right: -134304.7, bottom: 2765189.84, top: 3717970.63 },
  chongqing: { left: -452010.48, right: 18937.26, bottom: 2966193.32, top: 3423037.52 },
  hunan: { left: -121706.04, right: 421919.97, bottom: 2575984.25, top: 3187827.45 },
  jiangxi: { left: 351746.12, right: 820820.93, bottom: 2568339.09, top: 3201359.39 },
  zhejiang: { left: 771678.89, right: 1155409.96, bottom: 2907626.2, top: 3350021.18 },
  shanghai: { left: 1022373.93, right: 1119414.86, bottom: 3310265.48, top: 3402302.89 },
  fujian: { left: 589488.24, right: 1026850.39, bottom: 2484360.41, top: 3021531.41 },
  guizhou: { left: -631422.1, right: -44202.72, bottom: 2582518.52, top: 3086858.03 },
  yunnan: { left: -1269416.25, right: -390924.8, bottom: 2228423.99, top: 3144480.28 },
  guangxi: { left: -562723.31, right: 209095.02, bottom: 2218039.46, top: 2768889.85 },
  guangdong: { left: -35662.94, right: 733721, bottom: 2090661.16, top: 2677365.63 },
  hainan: { left: -148669.65, right: 110738.03, bottom: 1866031, top: 2083103.51 },
  "hong-kong": { left: 406816.38, right: 458023.17, bottom: 2322423.4, top: 2354059.1 },
  macau: { left: 347654.34, right: 390296.84, bottom: 2289105.45, top: 2331747.95 },
  taiwan: { left: 1035105.54, right: 1207740.72, bottom: 2334741.53, top: 2715823.31 }
};

export const cityMapPoints: Record<string, { x: number; y: number }> = {
  "beijing-city": { x: 68.8, y: 43.6 },
  "shanghai-city": { x: 78.4, y: 60.2 },
  xian: { x: 62.2, y: 56.7 },
  xianyang: { x: 61.4, y: 56.6 },
  yanan: { x: 60.7, y: 52.4 },
  luoyang: { x: 66.0, y: 56.0 },
  kaifeng: { x: 68.0, y: 55.4 },
  anyang: { x: 67.6, y: 52.7 },
  nanjing: { x: 73.7, y: 59.2 },
  suzhou: { x: 76.5, y: 60.3 },
  yangzhou: { x: 74.6, y: 58.5 },
  chengdu: { x: 57.0, y: 66.8 },
  leshan: { x: 56.8, y: 69.6 }
};

 succeeded in 789ms:
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
    zh: "鍖椾含",
    type: "Municipality",
    color: "red",
    cities: [
      {
        id: "beijing-city",
        name: "Beijing",
        zh: "鍖椾含甯?,
        province: "Beijing",
        museum: "Capital Museum / Beijing Grand Canal Museum",
        museumZh: "棣栭兘鍗氱墿棣?/ 鍖椾含澶ц繍娌冲崥鐗╅",
        museumRole:
          "The first stop for understanding Beijing as an imperial capital, political center, and living city shaped by ritual, walls, waterways, and modern institutions.",
        museumRoleZh:
          "鐞嗚В鍖椾含浣滀负甯濋兘銆佹斂娌讳腑蹇冨拰鐢熸椿鍩庡競鐨勭涓€鍏ュ彛锛屽彲鐪嬪埌绀煎埗銆佸煄澧欍€佹按绯诲拰鐜颁唬鏈烘瀯濡備綍鍏卞悓濉戦€犺繖搴у煄甯傘€?,
        history:
          "Beijing is one of China's most important historical capitals, with layers from Yuan Dadu, Ming and Qing imperial planning, Republican-era transitions, and contemporary national institutions.",
        historyZh: "鍖椾含鏄腑鍥芥渶閲嶈鐨勫巻鍙查兘鍩庝箣涓€锛屽眰娆″寘鎷厓澶ч兘銆佹槑娓呴兘鍩庤鍒掋€佽繎鐜颁唬杞瀷浠ュ強褰撲唬鍥藉鏈烘瀯銆?,
        sites: ["Forbidden City", "Temple of Heaven", "Beijing Central Axis", "Beijing City Wall remains"],
        sitesZh: ["鏁呭", "澶╁潧", "鍖椾含涓酱绾?, "鍖椾含鍩庡閬楀瓨"],
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
    zh: "涓婃捣",
    type: "Municipality",
    color: "blue",
    cities: [
      {
        id: "shanghai-city",
        name: "Shanghai",
        zh: "涓婃捣甯?,
        province: "Shanghai",
        museum: "Shanghai Museum / Shanghai History Museum",
        museumZh: "涓婃捣鍗氱墿棣?/ 涓婃捣甯傚巻鍙插崥鐗╅",
        museumRole:
          "A practical entry point for understanding Jiangnan culture, port-city growth, modern urban life, and Shanghai's role in global exchange.",
        museumRoleZh: "鐞嗚В姹熷崡鏂囧寲銆佹腐鍙ｅ煄甯傛垚闀裤€佽繎鐜颁唬閮藉競鐢熸椿浠ュ強涓婃捣鍙備笌鍏ㄧ悆浜ゆ祦鐨勫疄鐢ㄥ叆鍙ｃ€?,
        history:
          "Shanghai grew from a Jiangnan county and port into a treaty-port metropolis, then a central city of modern industry, finance, publishing, cinema, and urban culture.",
        historyZh: "涓婃捣浠庢睙鍗楀幙鍩庡拰娓彛鍙戝睍涓洪€氬晢鍙ｅ哺閮藉競锛岄殢鍚庢垚涓虹幇浠ｅ伐涓氥€侀噾铻嶃€佸嚭鐗堛€佺數褰卞拰鍩庡競鏂囧寲鐨勯噸瑕佷腑蹇冦€?,
        sites: ["Shanghai History Museum", "Yu Garden area", "The Bund", "Former French Concession streets"],
        sitesZh: ["涓婃捣甯傚巻鍙插崥鐗╅", "璞洯鐗囧尯", "澶栨哗", "鍘熸硶绉熺晫琛楀尯"],
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
    zh: "闄曡タ",
    type: "Province",
    color: "gold",
    cities: [
      {
        id: "xian",
        name: "Xi'an",
        zh: "瑗垮畨",
        province: "Shaanxi",
        museum: "Shaanxi History Museum / Xi'an Museum",
        museumZh: "闄曡タ鍘嗗彶鍗氱墿棣?/ 瑗垮畨鍗氱墿闄?,
        museumRole:
          "The clearest starting point for Zhou, Qin, Han, Tang, Chang'an urban history, Silk Road exchange, and imperial material culture.",
        museumRoleZh: "鐞嗚В鍛ㄧЕ姹夊攼銆侀暱瀹夊煄甯傚彶銆佷笣缁镐箣璺氦娴佸拰甯濆浗鐗╄川鏂囧寲鐨勬竻鏅板叆鍙ｃ€?,
        history:
          "Xi'an sits near the core of ancient Chang'an, one of the great capitals of Chinese history and a key anchor for understanding early imperial statecraft and Silk Road exchange.",
        historyZh: "瑗垮畨浣嶄簬鍙や唬闀垮畨鏍稿績鍖哄煙闄勮繎锛屾槸涓浗鍘嗗彶涓婇噸瑕侀兘鍩庝箣涓€锛屼篃鏄悊瑙ｆ棭鏈熷笣鍥藉埗搴﹀拰涓濈桓涔嬭矾浜ゆ祦鐨勫叧閿煄甯傘€?,
        sites: ["Terracotta Army", "Xi'an City Wall", "Big Wild Goose Pagoda", "Daming Palace site"],
        sitesZh: ["绉﹀鐨囧叺椹繎", "瑗垮畨鍩庡", "澶ч泚濉?, "澶ф槑瀹仐鍧€"],
        baseViews: 16890,
        notes: 51,
        verified: "2026-05",
        access: "Medium",
        status: "Official facts pending"
      },
      {
        id: "xianyang",
        name: "Xianyang",
        zh: "鍜搁槼",
        province: "Shaanxi",
        museum: "Xianyang Museum",
        museumZh: "鍜搁槼鍗氱墿闄?,
        museumRole: "Useful for understanding Qin imperial foundations and the political geography surrounding the ancient capital region.",
        museumRoleZh: "閫傚悎鐞嗚В绉﹀笣鍥藉熀纭€锛屼互鍙婂彜閮藉尯鍩熷懆杈圭殑鏀挎不鍦扮悊銆?,
        history:
          "Xianyang is closely associated with the Qin state and Qin dynasty, making it a strong context city for understanding the rise of China's first imperial order.",
        historyZh: "鍜搁槼涓庣Е鍥姐€佺Е鏈濆叧绯诲瘑鍒囷紝鏄悊瑙ｄ腑鍥界涓€涓ぇ涓€缁熷笣鍥藉叴璧风殑閲嶈鑳屾櫙鍩庡競銆?,
        sites: ["Han Yang Ling Museum", "Qianling area", "Qin and Han heritage sites"],
        sitesZh: ["姹夐槼闄靛崥鐗╅櫌", "涔鹃櫟鐗囧尯", "绉︽眽閬楀潃"],
        baseViews: 4280,
        notes: 9,
        verified: "2026-04",
        access: "Low",
        status: "Needs review"
      },
      {
        id: "yanan",
        name: "Yan'an",
        zh: "寤跺畨",
        province: "Shaanxi",
        museum: "Yan'an Revolutionary Memorial Hall",
        museumZh: "寤跺畨闈╁懡绾康棣?,
        museumRole: "The starting point for modern revolutionary history and the political memory of twentieth-century China.",
        museumRoleZh: "鐞嗚В涓浗杩戠幇浠ｉ潻鍛藉彶鍜屼簩鍗佷笘绾斂娌昏蹇嗙殑璧风偣銆?,
        history:
          "Yan'an is central to understanding the Chinese revolutionary period and the narratives, institutions, and landscapes associated with the Communist base area.",
        historyZh: "寤跺畨鏄悊瑙ｄ腑鍥介潻鍛芥椂鏈熴€佹牴鎹湴鍙欎簨銆佸埗搴﹀缓璁惧拰鐩稿叧鍘嗗彶鏅鐨勬牳蹇冨煄甯傘€?,
        sites: ["Yangjialing", "Zaoyuan", "Pagoda Hill"],
        sitesZh: ["鏉ㄥ宀?, "鏋ｅ洯", "瀹濆灞?],
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
    zh: "娌冲崡",
    type: "Province",
    color: "jade",
    cities: [
      {
        id: "luoyang",
        name: "Luoyang",
        zh: "娲涢槼",
        province: "Henan",
        museum: "Luoyang Museum / Erlitou Site Museum",
        museumZh: "娲涢槼鍗氱墿棣?/ 浜岄噷澶村閮介仐鍧€鍗氱墿棣?,
        museumRole: "A strong entry point for the Central Plains, ancient capitals, ritual bronzes, early states, and Buddhist art.",
        museumRoleZh: "鐞嗚В涓師銆佸彜閮姐€佺ぜ鍣ㄩ潚閾溿€佹棭鏈熷浗瀹跺拰浣涙暀鑹烘湳鐨勯噸瑕佸叆鍙ｃ€?,
        history:
          "Luoyang is one of China's major ancient capitals, connected with the Xia-related Erlitou site, Eastern Zhou, Han-Wei urban history, Sui-Tang Luoyang, and Longmen Buddhist art.",
        historyZh: "娲涢槼鏄腑鍥介噸瑕佸彜閮戒箣涓€锛屽叧鑱斾簩閲屽ご銆佷笢鍛ㄣ€佹眽榄忔礇闃冲煄銆侀殝鍞愭礇闃冲煄鍜岄緳闂ㄤ經鏁欒壓鏈€?,
        sites: ["Longmen Grottoes", "White Horse Temple", "Sui-Tang Luoyang City site", "Erlitou Site Museum"],
        sitesZh: ["榫欓棬鐭崇獰", "鐧介┈瀵?, "闅嬪攼娲涢槼鍩庨仐鍧€", "浜岄噷澶村閮介仐鍧€鍗氱墿棣?],
        baseViews: 9240,
        notes: 28,
        verified: "2026-05",
        access: "Medium",
        status: "Official facts pending"
      },
      {
        id: "kaifeng",
        name: "Kaifeng",
        zh: "寮€灏?,
        province: "Henan",
        museum: "Kaifeng Museum",
        museumZh: "寮€灏佸崥鐗╅",
        museumRole: "Best first stop for Northern Song urban history, river management, trade, and capital culture.",
        museumRoleZh: "鐞嗚В鍖楀畫鍩庡競鍙层€佹渤娴佹不鐞嗐€佸晢涓氳锤鏄撳拰閮藉煄鏂囧寲鐨勭涓€绔欍€?,
        history:
          "Kaifeng is strongly associated with the Northern Song capital Bianjing, a city of commerce, administration, literature, and dense urban life.",
        historyZh: "寮€灏佷笌鍖楀畫閮藉煄姹翠含绱у瘑鐩稿叧锛屾槸鍟嗕笟銆佽鏀裤€佹枃瀛﹀拰绻佸崕鍩庡競鐢熸椿鐨勯噸瑕佷唬琛ㄣ€?,
        sites: ["Dragon Pavilion area", "Iron Pagoda", "Daxiangguo Temple", "Ancient city remains"],
        sitesZh: ["榫欎涵鐗囧尯", "閾佸", "澶х浉鍥藉", "鍙ゅ煄閬楀瓨"],
        baseViews: 6110,
        notes: 18,
        verified: "2026-04",
        access: "Low",
        status: "Needs review"
      },
      {
        id: "anyang",
        name: "Anyang",
        zh: "瀹夐槼",
        province: "Henan",
        museum: "Yinxu Museum",
        museumZh: "娈峰鍗氱墿棣?,
        museumRole: "The direct entry point for oracle bones, Shang royal archaeology, bronze culture, and early Chinese writing.",
        museumRoleZh: "鐞嗚В鐢查鏂囥€佸晢鐜嬫湞鑰冨彜銆侀潚閾滄枃鍖栧拰鏃╂湡姹夊瓧鐨勭洿鎺ュ叆鍙ｃ€?,
        history:
          "Anyang is essential for understanding the late Shang capital at Yinxu, oracle bone inscriptions, early state ritual, and archaeological evidence for ancient China.",
        historyZh: "瀹夐槼瀵逛簬鐞嗚В娈峰鏅氬晢閮藉煄銆佺敳楠ㄥ埢杈炪€佹棭鏈熷浗瀹剁ぜ鍒跺拰涓浗鍙や唬鑰冨彜璇佹嵁闈炲父鍏抽敭銆?,
        sites: ["Yinxu", "National Museum of Chinese Writing", "Fu Hao Tomb area"],
        sitesZh: ["娈峰", "涓浗鏂囧瓧鍗氱墿棣?, "濡囧ソ澧撶墖鍖?],
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
    zh: "姹熻嫃",
    type: "Province",
    color: "blue",
    cities: [
      {
        id: "nanjing",
        name: "Nanjing",
        zh: "鍗椾含",
        province: "Jiangsu",
        museum: "Nanjing Museum / Six Dynasties Museum",
        museumZh: "鍗椾含鍗氱墿闄?/ 鍏湞鍗氱墿棣?,
        museumRole: "The first stop for Six Dynasties culture, Ming capital history, Republican-era history, and Jiangnan material culture.",
        museumRoleZh: "鐞嗚В鍏湞鏂囧寲銆佹槑鍒濋兘鍩庛€佹皯鍥藉巻鍙插拰姹熷崡鐗╄川鏂囧寲鐨勭涓€鍏ュ彛銆?,
        history:
          "Nanjing has served as a capital across several periods and is key to understanding southern dynastic culture, Ming statecraft, and modern Chinese political history.",
        historyZh: "鍗椾含鍦ㄥ涓巻鍙叉椂鏈熸浘涓洪兘鍩庯紝鏄悊瑙ｅ崡鏈濇枃鍖栥€佹槑浠ｅ浗瀹跺缓璁惧拰涓浗杩戠幇浠ｆ斂娌诲彶鐨勯噸瑕佸煄甯傘€?,
        sites: ["Ming Xiaoling Mausoleum", "Nanjing City Wall", "Presidential Palace", "Confucius Temple area"],
        sitesZh: ["鏄庡瓭闄?, "鍗椾含鍩庡", "鎬荤粺搴?, "澶瓙搴欑墖鍖?],
        baseViews: 12110,
        notes: 36,
        verified: "2026-05",
        access: "High",
        status: "Official facts pending"
      },
      {
        id: "suzhou",
        name: "Suzhou",
        zh: "鑻忓窞",
        province: "Jiangsu",
        museum: "Suzhou Museum",
        museumZh: "鑻忓窞鍗氱墿棣?,
        museumRole: "A concise entry into Wu culture, literati gardens, canal trade, silk, painting, and urban refinement.",
        museumRoleZh: "杩涘叆鍚存枃鍖栥€佹枃浜哄洯鏋椼€佽繍娌宠锤鏄撱€佷笣缁搞€佺粯鐢诲拰鍩庡競瀹＄編鐨勭畝娲佸叆鍙ｃ€?,
        history:
          "Suzhou is deeply tied to Jiangnan culture, classical gardens, canal networks, silk production, and elite urban life from the Song through Ming-Qing periods.",
        historyZh: "鑻忓窞涓庢睙鍗楁枃鍖栥€佸彜鍏稿洯鏋椼€佽繍娌崇綉缁溿€佷笣缁哥敓浜э紝浠ュ強瀹嬭嚦鏄庢竻浠ユ潵鐨勫煄甯傜敓娲诲瘑鍒囩浉鍏炽€?,
        sites: ["Humble Administrator's Garden", "Pingjiang Road", "Suzhou section of the Grand Canal", "Tiger Hill"],
        sitesZh: ["鎷欐斂鍥?, "骞虫睙璺?, "澶ц繍娌宠嫃宸炴", "铏庝笜"],
        baseViews: 10740,
        notes: 33,
        verified: "2026-05",
        access: "High",
        status: "Needs visitor notes"
      },
      {
        id: "yangzhou",
        name: "Yangzhou",
        zh: "鎵窞",
        province: "Jiangsu",
        museum: "Yangzhou Museum / China Grand Canal Museum",
        museumZh: "鎵窞鍗氱墿棣?/ 涓浗澶ц繍娌冲崥鐗╅",
        museumRole: "A strong starting point for Grand Canal culture, salt merchants, gardens, and Qing-era urban prosperity.",
        museumRoleZh: "鐞嗚В澶ц繍娌虫枃鍖栥€佺洂鍟嗐€佸洯鏋楀拰娓呬唬鍩庡競绻佽崳鐨勯噸瑕佸叆鍙ｃ€?,
        history:
          "Yangzhou is central to Grand Canal history, salt commerce, literary culture, gardens, and the movement of goods and people between north and south China.",
        historyZh: "鎵窞鏄悊瑙ｅぇ杩愭渤銆佺洂涓氬晢涓氥€佹枃瀛︽枃鍖栥€佸洯鏋楋紝浠ュ強鍗楀寳鐗╄祫涓庝汉鍛樻祦鍔ㄧ殑閲嶈鍩庡競銆?,
        sites: ["Slender West Lake", "Dongguan Street", "Ge Garden", "Grand Canal sites"],
        sitesZh: ["鐦﹁タ婀?, "涓滃叧琛?, "涓洯", "澶ц繍娌抽仐浜х偣"],
        baseViews: 4660,
        notes: 12,
        verified: "2026-04",
        access: "Medium",
        status: "Needs review"
      }
    ]
  },
  {
    id: "guangdong",
    name: "Guangdong",
    zh: "骞夸笢",
    type: "Province",
    color: "jade",
    cities: [
      {
        id: "guangzhou-city",
        name: "Guangzhou",
        zh: "骞垮窞",
        province: "Guangdong",
        museum: "Guangdong Provincial Museum / Guangzhou Museum",
        museumZh: "骞夸笢鐪佸崥鐗╅ / 骞垮窞鍗氱墿棣?,
        museumRole:
          "A practical entry point for Lingnan culture, Cantonese urban life, 2,200 years of port history, and Guangdong's role in maritime trade and modern reform.",
        museumRoleZh: "鐞嗚В宀崡鏂囧寲銆佸箍搴滈兘甯傜敓娲汇€?200 骞存腐鍙ｅ彶锛屼互鍙婂箍涓滃湪娴蜂笂璐告槗鍜岃繎鐜颁唬鏀归潻涓綔鐢ㄧ殑瀹炵敤鍏ュ彛銆?,
        history:
          "Guangzhou has been a trading port since the Qin鈥揌an period and is central to understanding maritime Silk Road history, Cantonese culture, Republican-era reform, and southern China's urban networks.",
        historyZh: "骞垮窞鑷Е姹変互鏉ヤ竴鐩存槸閫氬晢鍙ｅ哺锛屾槸鐞嗚В娴蜂笂涓濈桓涔嬭矾銆佸箍搴滄枃鍖栥€佹皯鍥芥敼闈╋紝浠ュ強鍗庡崡鍩庡競缃戠粶鐨勯噸瑕佸煄甯傘€?,
        sites: ["Canton Tower", "Chen Clan Ancestral Hall", "Shamian Island", "Yuexiu Park"],
        sitesZh: ["骞垮窞濉?, "闄堝绁?, "娌欓潰宀?, "瓒婄鍏洯"],
        baseViews: 9870,
        notes: 26,
        verified: "2026-05",
        access: "High",
        status: "Official facts pending"
      },
      {
        id: "shenzhen-city",
        name: "Shenzhen",
        zh: "娣卞湷",
        province: "Guangdong",
        museum: "Shenzhen Museum / Reform and Opening-up Exhibition Hall",
        museumZh: "娣卞湷鍗氱墿棣?/ 鏀归潻寮€鏀惧睍瑙堥",
        museumRole:
          "A direct entry into the reform-era story: how a Pearl River Delta border town became a global tech city in four decades, and what that means for cross-border life with Hong Kong.",
        museumRoleZh: "鐞嗚В鏀归潻寮€鏀惧彊浜嬬殑鐩存帴鍏ュ彛锛氱彔涓夎杈瑰灏忓煄濡備綍鐢ㄥ洓鍗佸勾鎴愪负鍏ㄧ悆绉戞妧閮藉競锛屼互鍙婁笌棣欐腐璺ㄥ鐢熸椿鐨勫叧绯汇€?,
        history:
          "Shenzhen was designated China's first Special Economic Zone in 1980 and has grown from a fishing-village border area into a global technology hub closely linked with Hong Kong.",
        historyZh: "娣卞湷 1980 骞存垚涓轰腑鍥界涓€涓粡娴庣壒鍖猴紝浠庢笖鏉戣竟澧冨湴鍖哄彂灞曚负涓庨娓揣瀵嗙浉杩炵殑鍏ㄧ悆绉戞妧涓績銆?,
        sites: ["Window of the World", "OCT Loft", "Dapeng Fortress", "Shenzhen Bay border crossings"],
        sitesZh: ["涓栫晫涔嬬獥", "鍗庝鲸鍩庡垱鎰忓洯", "澶ч箯鎵€鍩?, "娣卞湷婀惧彛宀?],
        baseViews: 8420,
        notes: 21,
        verified: "2026-05",
        access: "High",
        status: "Official facts pending"
      }
    ]
  },
  {
    id: "sichuan",
    name: "Sichuan",
    zh: "鍥涘窛",
    type: "Province",
    color: "jade",
    cities: [
      {
        id: "chengdu",
        name: "Chengdu",
        zh: "鎴愰兘",
        province: "Sichuan",
        museum: "Chengdu Museum / Jinsha Site Museum",
        museumZh: "鎴愰兘鍗氱墿棣?/ 閲戞矙閬楀潃鍗氱墿棣?,
        museumRole:
          "The first stop for ancient Shu culture, basin geography, urban life, local crafts, and the relationship between Chengdu and Sichuan's wider cultural landscape.",
        museumRoleZh: "鐞嗚В鍙よ渶鏂囧寲銆佺泦鍦板湴鐞嗐€佸煄甯傜敓娲汇€佸湴鏂瑰伐鑹猴紝浠ュ強鎴愰兘涓庡洓宸濇暣浣撴枃鍖栨櫙瑙傚叧绯荤殑绗竴鍏ュ彛銆?,
        history:
          "Chengdu is a long-lived urban center in the Sichuan Basin, associated with ancient Shu civilization, Qin-Han integration, Shu Han memory, commerce, and everyday urban culture.",
        historyZh: "鎴愰兘鏄洓宸濈泦鍦伴暱鏈熷欢缁殑鍩庡競涓績锛屽叧鑱斿彜铚€鏂囨槑銆佺Е姹夋暣鍚堛€佽渶姹夎蹇嗐€佸晢涓氬拰鏃ュ父鍩庡競鏂囧寲銆?,
        sites: ["Jinsha Site Museum", "Wuhou Shrine", "Du Fu Thatched Cottage", "Dujiangyan"],
        sitesZh: ["閲戞矙閬楀潃鍗氱墿棣?, "姝︿警绁?, "鏉滅敨鑽夊爞", "閮芥睙鍫?],
        baseViews: 13320,
        notes: 40,
        verified: "2026-05",
        access: "High",
        status: "Official facts pending"
      },
      {
        id: "leshan",
        name: "Leshan",
        zh: "涔愬北",
        province: "Sichuan",
        museum: "Leshan Museum",
        museumZh: "涔愬北鍗氱墿棣?,
        museumRole: "A practical entry for river geography, Buddhist carving, local trade, and the wider Emei-Leshan heritage landscape.",
        museumRoleZh: "鐞嗚В娌虫祦鍦扮悊銆佷經鏁欓€犲儚銆佸湴鏂硅锤鏄撳拰宄ㄧ湁灞扁€斾箰灞辨暣浣撻仐浜ф櫙瑙傜殑瀹炵敤鍏ュ彛銆?,
        history:
          "Leshan is shaped by river confluences, Buddhist monumental art, and its relationship with Mount Emei and southwest travel routes.",
        historyZh: "涔愬北鍙楀埌姹熸渤浜ゆ眹銆佷經鏁欏ぇ鍨嬮€犲儚銆佸敞鐪夊北鍏崇郴鍜岃タ鍗椾氦閫氳矾绾跨殑鍏卞悓濉戦€犮€?,
        sites: ["Leshan Giant Buddha", "Mount Emei", "Lingyun Mountain area"],
        sitesZh: ["涔愬北澶т經", "宄ㄧ湁灞?, "鍑屼簯灞辩墖鍖?],
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
  { zh: "涓滃煄鍖?, en: "Dongcheng District", type: "county", provinceId: "beijing", cityId: "beijing-city", aliases: ["dongcheng"] },
  { zh: "寤跺簡鍖?, en: "Yanqing District", type: "county", provinceId: "beijing", cityId: "beijing-city", aliases: ["yanqing"] },
  { zh: "鍙ゅ寳鍙ｉ晣", en: "Gubeikou Town", type: "town", provinceId: "beijing", cityId: "beijing-city", aliases: ["鍙ゅ寳鍙?, "gubeikou"] },
  { zh: "鐖ㄥ簳涓嬫潙", en: "Cuandixia Village", type: "village", provinceId: "beijing", cityId: "beijing-city", aliases: ["cuandixia", "鐖ㄥ簳涓?] },
  { zh: "榛勬郸鍖?, en: "Huangpu District", type: "county", provinceId: "shanghai", cityId: "shanghai-city", aliases: ["huangpu"] },
  { zh: "鏈卞瑙掗晣", en: "Zhujiajiao Town", type: "town", provinceId: "shanghai", cityId: "shanghai-city", aliases: ["zhujiajiao", "鏈卞瑙?] },
  { zh: "闆佸鍖?, en: "Yanta District", type: "county", provinceId: "shaanxi", cityId: "xian", aliases: ["yanta"] },
  { zh: "涓存郊鍖?, en: "Lintong District", type: "county", provinceId: "shaanxi", cityId: "xian", aliases: ["lintong"] },
  { zh: "绉︽樊鍖?, en: "Qinhuai District", type: "county", provinceId: "jiangsu", cityId: "nanjing", aliases: ["qinhuai"] },
  { zh: "鏄嗗北甯?, en: "Kunshan City", type: "county", provinceId: "jiangsu", cityId: "suzhou", aliases: ["kunshan"] },
  { zh: "鍛ㄥ簞闀?, en: "Zhouzhuang Town", type: "town", provinceId: "jiangsu", cityId: "suzhou", aliases: ["zhouzhuang", "鍛ㄥ簞"] },
  { zh: "鍚岄噷闀?, en: "Tongli Town", type: "town", provinceId: "jiangsu", cityId: "suzhou", aliases: ["tongli", "鍚岄噷"] },
  { zh: "骞块櫟鍖?, en: "Guangling District", type: "county", provinceId: "jiangsu", cityId: "yangzhou", aliases: ["guangling"] },
  { zh: "閮芥睙鍫板競", en: "Dujiangyan City", type: "county", provinceId: "sichuan", cityId: "chengdu", aliases: ["dujiangyan", "閮芥睙鍫?] },
  { zh: "娲涘甫闀?, en: "Luodai Town", type: "town", provinceId: "sichuan", cityId: "chengdu", aliases: ["luodai", "娲涘甫"] },
  { zh: "榛勯緳婧晣", en: "Huanglongxi Town", type: "town", provinceId: "sichuan", cityId: "chengdu", aliases: ["huanglongxi", "榛勯緳婧?] },
  { zh: "宄ㄧ湁灞卞競", en: "Emeishan City", type: "county", provinceId: "sichuan", cityId: "leshan", aliases: ["emeishan", "宄ㄧ湁灞?] }
];

export const provinceAttractionSeed: Record<string, Array<{ zh: string; en: string }>> = {
  beijing: [
    { zh: "鏁呭", en: "Forbidden City" },
    { zh: "澶╁潧", en: "Temple of Heaven" },
    { zh: "鍖椾含涓酱绾?, en: "Beijing Central Axis" }
  ],
  tianjin: [
    { zh: "浜斿ぇ閬?, en: "Five Great Avenues" },
    { zh: "鍙ゆ枃鍖栬", en: "Ancient Culture Street" },
    { zh: "澶╂触鍗氱墿棣?, en: "Tianjin Museum" }
  ],
  hebei: [
    { zh: "鎵垮痉閬挎殤灞卞簞", en: "Chengde Mountain Resort" },
    { zh: "灞辨捣鍏?, en: "Shanhaiguan" },
    { zh: "瑗挎煆鍧?, en: "Xibaipo" }
  ],
  shanxi: [
    { zh: "浜戝唸鐭崇獰", en: "Yungang Grottoes" },
    { zh: "骞抽仴鍙ゅ煄", en: "Pingyao Ancient City" },
    { zh: "浜斿彴灞?, en: "Mount Wutai" }
  ],
  "inner-mongolia": [
    { zh: "鍛间鸡璐濆皵鑽夊師", en: "Hulunbuir Grassland" },
    { zh: "鎴愬悏鎬濇睏闄?, en: "Mausoleum of Genghis Khan" },
    { zh: "鍝嶆矙婀?, en: "Xiangshawan" }
  ],
  liaoning: [
    { zh: "娌堥槼鏁呭", en: "Shenyang Palace Museum" },
    { zh: "澶ц繛鑰佽檸婊?, en: "Dalian Tiger Beach" },
    { zh: "鏈邯姘存礊", en: "Benxi Water Cave" }
  ],
  jilin: [
    { zh: "闀跨櫧灞?, en: "Changbai Mountain" },
    { zh: "浼弧鐨囧鍗氱墿闄?, en: "Museum of the Imperial Palace of Manchukuo" },
    { zh: "鍑€鏈堟江", en: "Jingyuetan" }
  ],
  heilongjiang: [
    { zh: "鍝堝皵婊ㄤ腑澶ぇ琛?, en: "Harbin Central Street" },
    { zh: "鍦ｇ储鑿蹭簹鏁欏爞", en: "Saint Sophia Cathedral" },
    { zh: "澶槼宀?, en: "Sun Island" },
    { zh: "浜斿ぇ杩炴睜", en: "Wudalianchi" },
    { zh: "闀滄硦婀?, en: "Jingpo Lake" }
  ],
  shanghai: [
    { zh: "澶栨哗", en: "The Bund" },
    { zh: "璞洯", en: "Yu Garden" },
    { zh: "涓婃捣鍗氱墿棣?, en: "Shanghai Museum" }
  ],
  jiangsu: [
    { zh: "鏄庡瓭闄?, en: "Ming Xiaoling Mausoleum" },
    { zh: "鑻忓窞鍥灄", en: "Classical Gardens of Suzhou" },
    { zh: "涓浗澶ц繍娌冲崥鐗╅", en: "China Grand Canal Museum" }
  ],
  zhejiang: [
    { zh: "瑗挎箹", en: "West Lake" },
    { zh: "涔岄晣", en: "Wuzhen" },
    { zh: "鏅檧灞?, en: "Mount Putuo" }
  ],
  anhui: [
    { zh: "榛勫北", en: "Mount Huangshan" },
    { zh: "瀹忔潙", en: "Hongcun" },
    { zh: "瑗块€?, en: "Xidi" }
  ],
  fujian: [
    { zh: "姝﹀し灞?, en: "Wuyi Mountain" },
    { zh: "绂忓缓鍦熸ゼ", en: "Fujian Tulou" },
    { zh: "榧撴氮灞?, en: "Gulangyu" }
  ],
  jiangxi: [
    { zh: "搴愬北", en: "Mount Lu" },
    { zh: "鏅痉闀?, en: "Jingdezhen" },
    { zh: "婊曠帇闃?, en: "Tengwang Pavilion" }
  ],
  shandong: [
    { zh: "娉板北", en: "Mount Tai" },
    { zh: "鏇查槣涓夊瓟", en: "Three Confucian Sites in Qufu" },
    { zh: "钃幈闃?, en: "Penglai Pavilion" }
  ],
  henan: [
    { zh: "榫欓棬鐭崇獰", en: "Longmen Grottoes" },
    { zh: "娈峰", en: "Yinxu" },
    { zh: "灏戞灄瀵?, en: "Shaolin Temple" }
  ],
  hubei: [
    { zh: "榛勯工妤?, en: "Yellow Crane Tower" },
    { zh: "姝﹀綋灞?, en: "Wudang Mountains" },
    { zh: "婀栧寳鐪佸崥鐗╅", en: "Hubei Provincial Museum" }
  ],
  hunan: [
    { zh: "寮犲鐣屽浗瀹舵．鏋楀叕鍥?, en: "Zhangjiajie National Forest Park" },
    { zh: "鍑ゅ嚢鍙ゅ煄", en: "Fenghuang Ancient Town" },
    { zh: "宀抽簱涔﹂櫌", en: "Yuelu Academy" }
  ],
  guangdong: [
    { zh: "骞垮窞濉?, en: "Canton Tower" },
    { zh: "闄堝绁?, en: "Chen Clan Ancestral Hall" },
    { zh: "寮€骞崇妤?, en: "Kaiping Diaolou" }
  ],
  guangxi: [
    { zh: "妗傛灄婕撴睙", en: "Li River" },
    { zh: "闃虫湐", en: "Yangshuo" },
    { zh: "寰峰ぉ鐎戝竷", en: "Detian Waterfall" }
  ],
  hainan: [
    { zh: "浜氶緳婀?, en: "Yalong Bay" },
    { zh: "铚堟敮娲插矝", en: "Wuzhizhou Island" },
    { zh: "娴峰彛楠戞ゼ鑰佽", en: "Haikou Qilou Old Street" }
  ],
  chongqing: [
    { zh: "娲礀娲?, en: "Hongya Cave" },
    { zh: "澶ц冻鐭冲埢", en: "Dazu Rock Carvings" },
    { zh: "纾佸櫒鍙ｅ彜闀?, en: "Ciqikou Ancient Town" }
  ],
  sichuan: [
    { zh: "閮芥睙鍫?, en: "Dujiangyan" },
    { zh: "涔愬北澶т經", en: "Leshan Giant Buddha" },
    { zh: "涔濆娌?, en: "Jiuzhaigou" }
  ],
  guizhou: [
    { zh: "榛勬灉鏍戠€戝竷", en: "Huangguoshu Waterfall" },
    { zh: "瑗挎睙鍗冩埛鑻楀", en: "Xijiang Miao Village" },
    { zh: "姊靛噣灞?, en: "Fanjing Mountain" }
  ],
  yunnan: [
    { zh: "涓芥睙鍙ゅ煄", en: "Old Town of Lijiang" },
    { zh: "澶х悊鍙ゅ煄", en: "Dali Old Town" },
    { zh: "鐭虫灄", en: "Stone Forest" }
  ],
  tibet: [
    { zh: "甯冭揪鎷夊", en: "Potala Palace" },
    { zh: "澶ф槶瀵?, en: "Jokhang Temple" },
    { zh: "绾虫湪閿?, en: "Namtso" }
  ],
  shaanxi: [
    { zh: "绉﹀鐨囧叺椹繎", en: "Terracotta Army" },
    { zh: "瑗垮畨鍩庡", en: "Xi'an City Wall" },
    { zh: "闄曡タ鍘嗗彶鍗氱墿棣?, en: "Shaanxi History Museum" }
  ],
  gansu: [
    { zh: "鑾珮绐?, en: "Mogao Caves" },
    { zh: "鍢夊唱鍏?, en: "Jiayuguan Pass" },
    { zh: "寮犳帠涓归湠", en: "Zhangye Danxia" }
  ],
  qinghai: [
    { zh: "闈掓捣婀?, en: "Qinghai Lake" },
    { zh: "濉斿皵瀵?, en: "Kumbum Monastery" },
    { zh: "鑼跺崱鐩愭箹", en: "Chaka Salt Lake" }
  ],
  ningxia: [
    { zh: "娌欏潯澶?, en: "Shapotou" },
    { zh: "瑗垮闄?, en: "Western Xia Mausoleums" },
    { zh: "姘存礊娌?, en: "Shuidonggou" }
  ],
  xinjiang: [
    { zh: "澶╁北澶╂睜", en: "Heavenly Lake of Tianshan" },
    { zh: "鍠€绾虫柉", en: "Kanas Lake" },
    { zh: "鍠€浠€鍙ゅ煄", en: "Kashgar Old City" }
  ],
  "hong-kong": [
    { zh: "澶钩灞遍《", en: "Victoria Peak" },
    { zh: "澶╂槦灏忚疆", en: "Star Ferry" },
    { zh: "棣欐腐鏁呭鏂囧寲鍗氱墿棣?, en: "Hong Kong Palace Museum" }
  ],
  macau: [
    { zh: "澶т笁宸寸墝鍧?, en: "Ruins of St. Paul's" },
    { zh: "璁簨浜墠鍦?, en: "Senado Square" },
    { zh: "濡堥榿搴?, en: "A-Ma Temple" }
  ],
  taiwan: [
    { zh: "鍙板寳鏁呭鍗氱墿闄?, en: "National Palace Museum" },
    { zh: "鏃ユ湀娼?, en: "Sun Moon Lake" },
    { zh: "闃块噷灞?, en: "Alishan" }
  ]
};

 succeeded in 750ms:
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

 succeeded in 752ms:
export type CityId = "beijing" | "shanghai" | "guangzhou" | "shenzhen";

export const CITY_LABELS: Record<CityId, { en: string; zh: string }> = {
  beijing: { en: "Beijing", zh: "鍖椾含" },
  shanghai: { en: "Shanghai", zh: "涓婃捣" },
  guangzhou: { en: "Guangzhou", zh: "骞垮窞" },
  shenzhen: { en: "Shenzhen", zh: "娣卞湷" }
};

export type AirportOption = {
  kind: "cheapest" | "fastest" | "stable";
  routeEn: string;
  routeZh: string;
  costCNY: string;
  timeMin: string;
  paymentEn: string;
  paymentZh: string;
  sourceId: string;
};

export type CityTransport = {
  cityId: CityId;
  cityEn: string;
  cityZh: string;
  airports: Array<{
    code: string;
    nameEn: string;
    nameZh: string;
    options: AirportOption[];
  }>;
  metro: {
    summaryEn: string;
    summaryZh: string;
    sourceId: string;
  };
  rideHail: {
    en: string;
    zh: string;
    sourceId: string;
  };
  pitfalls: Array<{ en: string; zh: string; sourceId: string }>;
};

export const railBooking = {
  registration: {
    en: "Register at 12306.cn/en using your passport. You'll get either an email magic link or a Chinese-mobile SMS to confirm. Verification usually clears automatically; if it doesn't, upload your passport and a selfie 鈥?manual review takes 3鈥? working days, or visit any station counter.",
    zh: "鍦?12306.cn/en 鐢ㄦ姢鐓ф敞鍐岋細閭婵€娲婚摼鎺?/ 鍥藉唴鎵嬫満鐭俊銆傝嚜鍔ㄨ璇佸け璐ュ彲涓婁紶鎶ょ収 + 鑷媿锛屼汉宸ュ鏍搁渶 3-5 涓伐浣滄棩锛屾垨鍒拌溅绔欑獥鍙ｇ幇鍦哄姙鐞嗐€?,
    sourceId: "rail-12306-faq"
  },
  payment: {
    en: "The 12306 English portal accepts Visa, Mastercard, JCB, Diners Club, and UnionPay. Alipay and WeChat Pay also work 鈥?the central government expat guide lists both.",
    zh: "12306 鑻辨枃鐗堟帴鍙?Visa/MC/JCB/Diners/閾惰仈锛涗腑澶斂搴滃绫嶇敓娲绘寚鍗楄繕鎻愬埌鏀粯瀹?寰俊鏀粯銆?,
    sourceId: "rail-12306-faq"
  },
  refund: {
    en: "鈮? days before departure: 0% fee. 48h-8d: 5%. 24-48h: 10%. <24h: 20%. One free change (date/train/seat) until 48h before departure.",
    zh: "閫€绁ㄨ垂锛氬彂杞﹀墠 鈮? 澶?0%锛?8h-8 澶?5%锛?4-48h 10%锛?24h 20%銆傛瘡绁ㄥ彲鍏嶈垂鏀圭涓€娆★紝鍙戣溅鍓?48h 鍐呮敼绛炬寜宸环 5-40% 鏀惰垂銆?,
    sourceId: "rail-12306-faq"
  },
  realName: {
    en: "Passport name on the ticket must match the bio page exactly. Carry passport on board for inspection. E-tickets are linked to passport number.",
    zh: "杞︾エ鎶ょ収鍚嶅繀椤讳笌棣栭〉涓€鑷淬€備箻杞︽椂闅忚韩鎼哄甫鎶ょ収澶囨煡銆傜數瀛愮エ缁戝畾鎶ょ収鍙枫€?,
    sourceId: "rail-12306-faq"
  }
} as const;

export const cityTransport: CityTransport[] = [
  {
    cityId: "beijing",
    cityEn: "Beijing",
    cityZh: "鍖椾含",
    airports: [
      {
        code: "PEK",
        nameEn: "Capital International (PEK)",
        nameZh: "棣栭兘鍥介檯鏈哄満",
        options: [
          {
            kind: "fastest",
            routeEn: "Capital Airport Express 鈫?Dongzhimen (Line 2/13)",
            routeZh: "棣栭兘鏈哄満绾跨洿杈句笢鐩撮棬锛堟崲 2/13 鍙风嚎锛?,
            costCNY: "25 flat",
            timeMin: "~16",
            paymentEn: "5-network tap-to-ride",
            paymentZh: "5 澶у鍗″埛鍗?,
            sourceId: "beijing-airport-express"
          },
          {
            kind: "cheapest",
            routeEn: "Airport shuttle bus to Beijing Railway Station (T2 Gate 11 / T3 Gate 7)",
            routeZh: "鏈哄満宸村＋鍒板寳浜珯锛圱2 11 鍙烽棬 / T3 7 鍙烽棬涓婅溅锛?,
            costCNY: "20鈥?0",
            timeMin: "60鈥?0",
            paymentEn: "Cash; bring exact change 鈥?foreign cards not accepted on shuttles",
            paymentZh: "鐜伴噾锛涘鍗℃敮鎸佹殏鏈畼鏂圭‘璁?,
            sourceId: "beijing-airport-services"
          },
          {
            kind: "stable",
            routeEn: "Official taxi queue at arrivals; metered fare",
            routeZh: "鍒拌揪灞傚畼鏂瑰嚭绉熻溅鎺掗槦鐐癸紱鎸夎浠峰櫒璁¤垂",
            costCNY: "100鈥?50",
            timeMin: "40鈥?0",
            paymentEn: "Cash + Alipay/WeChat; foreign cards inconsistent",
            paymentZh: "鐜伴噾 + 鏀粯瀹?寰俊锛涘鍗℃敮鎸佷笉绋冲畾",
            sourceId: "beijing-airport-services"
          }
        ]
      },
      {
        code: "PKX",
        nameEn: "Daxing International (PKX)",
        nameZh: "澶у叴鍥介檯鏈哄満",
        options: [
          {
            kind: "fastest",
            routeEn: "Daxing Airport Express 鈫?Caoqiao (transfer Line 10/7)",
            routeZh: "澶у叴鏈哄満绾跨洿杈捐崏妗ワ紙鎹?10/7 鍙风嚎锛?,
            costCNY: "35",
            timeMin: "~19",
            paymentEn: "5-network tap-to-ride",
            paymentZh: "5 澶у鍗″埛鍗?,
            sourceId: "beijing-daxing-final-train"
          },
          {
            kind: "cheapest",
            routeEn: "Daxing Airport shuttle bus to Beijing/West Railway Station",
            routeZh: "鏈哄満宸村＋鑷冲寳浜珯/鍖椾含瑗跨珯",
            costCNY: "40",
            timeMin: "70鈥?00",
            paymentEn: "Cash",
            paymentZh: "鐜伴噾",
            sourceId: "beijing-airport-services"
          }
        ]
      }
    ],
    metro: {
      summaryEn: "All 29 lines / 523 stations: Visa, Mastercard, UnionPay, JCB, Amex tap-to-ride at every gate (since 2025-06-15). World's first metro to support all 5 networks.",
      summaryZh: "鍏?29 绾?/ 523 绔欙細Visa/MC/UnionPay/JCB/Amex 鍏ㄩ儴鏀寔闂告満鍒峰崱锛?025-06-15 璧枫€傚叏鐞冮涓敮鎸?5 澶у崱缁勭粐鍏ㄧ綉鍒峰崱鐨勫湴閾併€?,
      sourceId: "beijing-subway-five-cards"
    },
    rideHail: {
      en: "DiDi accepts foreign phone + Visa/Mastercard with English UI; in-app 24/7 English customer service. Take official taxi queue at airport, never solicitations inside terminal.",
      zh: "DiDi 鎺ュ彈澶栧浗鎵嬫満鍙?+ Visa/MC 鍥介檯淇＄敤鍗★紝鑻辨枃鐣岄潰锛屽簲鐢ㄥ唴 24 灏忔椂鑻辫瀹㈡湇锛涙満鍦鸿鍙蛋瀹樻柟鎺掗槦鐐癸紝涓嶈璺熼殢鍒拌揪灞傛徑瀹汉鍛樸€?,
      sourceId: "beijing-airport-services"
    },
    pitfalls: [
      {
        en: "T1 is not on Capital Airport Express. T2/T3 only 鈥?confirm terminal before boarding.",
        zh: "棣栭兘鏈哄満绾垮彧鍒?T2/T3锛屼笉鍒?T1銆備笂杞﹀墠鍏堢‘璁よ埅绔欐ゼ銆?,
        sourceId: "beijing-airport-express"
      },
      {
        en: "PEK and PKX are 80 km apart 鈥?confirm IATA code before transit.",
        zh: "棣栭兘锛圥EK锛変笌澶у叴锛圥KX锛夌浉璺?80 鍏噷锛屽畨鎺掓帴閫佹椂鍏堢‘璁?IATA 浠ｇ爜銆?,
        sourceId: "beijing-daxing-final-train"
      }
    ]
  },
  {
    cityId: "shanghai",
    cityEn: "Shanghai",
    cityZh: "涓婃捣",
    airports: [
      {
        code: "PVG",
        nameEn: "Pudong International (PVG)",
        nameZh: "娴︿笢鍥介檯鏈哄満",
        options: [
          {
            kind: "fastest",
            routeEn: "Maglev 鈫?Longyang Road (transfer Line 2/7)",
            routeZh: "纾佹偓娴洿杈鹃緳闃宠矾锛堟崲 2/7 鍙风嚎锛?,
            costCNY: "50 single / 80 round-trip",
            timeMin: "~8",
            paymentEn: "Visa/MC/Amex/JCB tap (since 2025-06-14) + e-CNY + cash",
            paymentZh: "Visa/MC/Amex/JCB 鍒峰崱锛?025-06-14 璧凤級+ 鏁板瓧浜烘皯甯?+ 鐜伴噾",
            sourceId: "shanghai-maglev-bank-cards"
          },
          {
            kind: "cheapest",
            routeEn: "Metro Line 2 鈫?city",
            routeZh: "鍦伴搧 2 鍙风嚎杩涘煄",
            costCNY: "7鈥?",
            timeMin: "60鈥?0",
            paymentEn: "5-network tap-to-ride",
            paymentZh: "5 澶у崱缁勭粐鍒峰崱",
            sourceId: "shanghai-metro-five-cards"
          },
          {
            kind: "stable",
            routeEn: "Airport Link Line 鈫?Hongqiao T2",
            routeZh: "鏈哄満鑱旂粶绾跨洿杈捐櫣妗?T2",
            costCNY: "fare not yet published 鈥?check operator site",
            timeMin: "~40",
            paymentEn: "5-network tap-to-ride",
            paymentZh: "5 澶у崱缁勭粐鍒峰崱",
            sourceId: "shanghai-airport-link"
          }
        ]
      },
      {
        code: "SHA",
        nameEn: "Hongqiao International (SHA)",
        nameZh: "铏规ˉ鍥介檯鏈哄満",
        options: [
          {
            kind: "fastest",
            routeEn: "Metro Line 10 from T1 / Lines 2/10/17 from T2",
            routeZh: "T1 璧?10 鍙风嚎 / T2 璧?2銆?0銆?7 鍙风嚎",
            costCNY: "5鈥?",
            timeMin: "25鈥?5",
            paymentEn: "5-network tap-to-ride",
            paymentZh: "5 澶у崱缁勭粐鍒峰崱",
            sourceId: "shanghai-metro-five-cards"
          }
        ]
      }
    ],
    metro: {
      summaryEn: "All 21 lines / 517 stations / 896 km: 5 networks + e-CNY tap-to-ride (since 2025-06-28). Card must support ODA. UnionPay channel takes priority on dual-brand cards.",
      summaryZh: "鍏?21 绾?/ 517 绔?/ 896 km锛? 澶у崱 + 鏁板瓧浜烘皯甯侀椄鏈哄埛鍗★紙2025-06-28 璧凤級銆傚崱闇€鏀寔 ODA 绂荤嚎璁よ瘉锛涘弻鏍囧崱浼樺厛璧伴摱鑱旈€氶亾銆?,
      sourceId: "shanghai-metro-five-cards"
    },
    rideHail: {
      en: "DiDi accepts foreign phone and credit card. Official taxi queue at PVG arrivals; metered fare ~CNY 150-200 to city centre.",
      zh: "DiDi 鎺ュ彈澶栧浗鎵嬫満鍙峰拰淇＄敤鍗°€傛郸涓滃埌杈惧眰鏈夊畼鏂瑰嚭绉熻溅鎺掗槦鐐癸紝鎸夎浠峰櫒鍒板競鍖虹害 楼150-200銆?,
      sourceId: "shanghai-public-transport"
    },
    pitfalls: [
      {
        en: "Maglev terminates at Longyang Road, not city centre. Add 30鈥?5 min for Metro Line 2 transfer.",
        zh: "纾佹偓娴粓鐐规槸榫欓槼璺紝涓嶆槸甯備腑蹇冿紝鍘诲競涓績杩樿鎹?2 鍙风嚎锛屽啀鍔?30-45 鍒嗛挓銆?,
        sourceId: "shanghai-maglev-fare"
      },
      {
        en: "Cards lacking ODA functionality will be rejected at metro gates. Have cash as backup.",
        zh: "涓嶆敮鎸?ODA 绂荤嚎璁よ瘉鐨勫崱浼氳闂告満鎷掓敹锛岃澶囧皯閲忕幇閲戙€?,
        sourceId: "shanghai-metro-five-cards"
      },
      {
        en: "Most international flights use PVG, not SHA. Confirm airport code on your booking.",
        zh: "鍥介檯鑸彮鍑犱箮閮藉湪娴︿笢锛圥VG锛夛紝涓嶅湪铏规ˉ锛圫HA锛夈€傝绁ㄦ椂鍏堢‘璁ゆ満鍦轰唬鐮併€?,
        sourceId: "shanghai-airport-link"
      }
    ]
  },
  {
    cityId: "guangzhou",
    cityEn: "Guangzhou",
    cityZh: "骞垮窞",
    airports: [
      {
        code: "CAN",
        nameEn: "Baiyun International (CAN)",
        nameZh: "鐧戒簯鍥介檯鏈哄満",
        options: [
          {
            kind: "cheapest",
            routeEn: "Metro Line 3 to Gaozeng 鈫?T3 shuttle bus (every 5鈥?0 min)",
            routeZh: "鍦伴搧 3 鍙风嚎鍒伴珮澧?鈫?杞?T3 鎺ラ┏宸村＋锛堟瘡 5-10 鍒嗛挓涓€鐝級",
            costCNY: "7鈥?0 (metro) + 2 (shuttle)",
            timeMin: "75鈥?0",
            paymentEn: "5-network metro tap; cash on shuttle",
            paymentZh: "鍦伴搧 5 澶у崱鍒峰崱锛涙帴椹冲反澹幇閲?,
            sourceId: "gz-baiyun-t3-airport"
          },
          {
            kind: "fastest",
            routeEn: "Intercity rail to Baiyun Airport East Station (T3 transit centre)",
            routeZh: "鍩庨檯閾佽矾鑷崇櫧浜戞満鍦轰笢绔欙紙T3 浜ら€氫腑蹇冿級",
            costCNY: "fare not yet published 鈥?check 12306 or operator site",
            timeMin: "~30",
            paymentEn: "Foreign card via 12306",
            paymentZh: "澶栧崱璧?12306 璐エ",
            sourceId: "gz-baiyun-t3-airport"
          },
          {
            kind: "stable",
            routeEn: "Taxi from T3 Gate 72 / Ride-hail from P12",
            routeZh: "鍑虹杞?T3 72 鍙烽棬 / 缃戠害杞?P12 鍋滆溅鍦?,
            costCNY: "60鈥?00",
            timeMin: "40鈥?0",
            paymentEn: "Cash + Alipay/WeChat",
            paymentZh: "鐜伴噾 + 鏀粯瀹?寰俊",
            sourceId: "gz-baiyun-t3-airport"
          }
        ]
      }
    ],
    metro: {
      summaryEn: "All Guangzhou Metro lines: Visa, Mastercard, UnionPay, JCB, Amex tap-to-ride (since 2025-10-12). AlipayHK QR code also works since 2024-03-04.",
      summaryZh: "骞垮窞鍦伴搧鍏ㄧ綉锛歏isa/MC/UnionPay/JCB/Amex 闂告満鍒峰崱锛?025-10-12 璧凤級銆侫lipayHK 浜岀淮鐮佽嚜 2024-03-04 璧峰彲鐢ㄣ€?,
      sourceId: "gz-metro-tap-to-ride"
    },
    rideHail: {
      en: "DiDi has an official Guangzhou expat guide; foreign phone + foreign card both work. Take regulated taxi queue at T3 Gate 72.",
      zh: "DiDi 鏈夊箍宸炲畼鏂瑰绫嶄汉澹寚鍗楋紱澶栧浗鎵嬫満鍙峰拰澶栧崱閮借兘鐢ㄣ€傚嚭绉熻溅璧?T3 72 鍙烽棬瀹樻柟鎺掗槦鐐广€?,
      sourceId: "gz-baiyun-t3-airport"
    },
    pitfalls: [
      {
        en: "T3 opened 2025-10-30. Some apps still show old terminal assignments 鈥?verify on the airline's confirmation.",
        zh: "T3 浜?2025-10-30 鍚敤锛岄儴鍒?App 浠嶆寜鏃ц埅绔欐ゼ鍒嗛厤锛岃绁ㄥ悗璇蜂互鑸徃纭淇℃伅涓哄噯銆?,
        sourceId: "gz-baiyun-t3-airport"
      },
      {
        en: "Metro Line 3 doesn't reach T3 directly 鈥?shuttle bus from Gaozeng adds 20鈥?0 min.",
        zh: "鍦伴搧 3 鍙风嚎涓嶇洿杈?T3锛岃浠庨珮澧炴崲鎺ラ┏宸村＋锛屽鍔?20-30 鍒嗛挓銆?,
        sourceId: "gz-baiyun-t3-airport"
      }
    ]
  },
  {
    cityId: "shenzhen",
    cityEn: "Shenzhen",
    cityZh: "娣卞湷",
    airports: [
      {
        code: "SZX",
        nameEn: "Bao'an International (SZX)",
        nameZh: "瀹濆畨鍥介檯鏈哄満",
        options: [
          {
            kind: "fastest",
            routeEn: "Metro Line 11 鈫?Futian (CBD) / Shenzhen North (HSR)",
            routeZh: "鍦伴搧 11 鍙风嚎 鈫?绂忕敯锛圕BD锛? 娣卞湷鍖楃珯锛堥珮閾佹灑绾斤級",
            costCNY: "5鈥?2",
            timeMin: "30鈥?0",
            paymentEn: "POS at service centre (6 networks); gate-level tap not yet universal 鈥?buy at service centre or use cash",
            paymentZh: "鏈嶅姟涓績 POS 鏀跺鍗★紙6 澶у崱锛夛紱闂告満鍒峰崱灏氭湭鍏ㄧ綉",
            sourceId: "sz-baoan-airport-plan"
          },
          {
            kind: "cheapest",
            routeEn: "Bus M592 (24h) / public bus from GTC Door 16",
            routeZh: "M592 閫氬鍏氦 / GTC 16 鍙烽棬鏅€氬叕浜?,
            costCNY: "2鈥?0",
            timeMin: "45鈥?0",
            paymentEn: "Cash + Shenzhen Tong / Alipay",
            paymentZh: "鐜伴噾 + 娣卞湷閫?/ 鏀粯瀹?,
            sourceId: "sz-baoan-airport-plan"
          },
          {
            kind: "stable",
            routeEn: "Taxi from GTC 2F Door 13 / Ride-hail GTC south",
            routeZh: "鍑虹杞?GTC 浜屾ゼ 13 鍙烽棬 / 缃戠害杞?GTC 鍗椾晶",
            costCNY: "60鈥?20",
            timeMin: "35鈥?0",
            paymentEn: "Cash + Alipay/WeChat",
            paymentZh: "鐜伴噾 + 鏀粯瀹?寰俊",
            sourceId: "sz-baoan-airport-plan"
          }
        ]
      }
    ],
    metro: {
      summaryEn: "Foreign-card POS at 391 service centres / 440 devices: Visa, Mastercard, Discover, Amex, Diners Club, JCB. Gate-level tap doesn't work at every turnstile yet 鈥?pay at the service centre POS or use cash.",
      summaryZh: "娣卞湷鍦伴搧 391 涓鏈嶄腑蹇?/ 440 鍙?POS 鏀跺鍗★細Visa/MC/Discover/Amex/Diners/JCB锛涢椄鏈哄鍗″埛鍗″皻鏈叏缃戯紝鍏堝幓瀹㈡湇涓績 POS 鎴栫敤鐜伴噾銆?,
      sourceId: "sz-metro-pos"
    },
    rideHail: {
      en: "DiDi works with foreign phone + foreign card. Cross-border note: Futian/Lo Wu MTR crossings need a HK Entry permit; HSR via Shenzhen North to HK West Kowloon needs passport real-name on 12306.",
      zh: "DiDi 鎺ュ彈澶栧浗鎵嬫満鍙峰拰澶栧崱銆傝法澧冩彁绀猴細绂忕敯/缃楁箹鍦伴搧鍙ｅ哺闇€瑕侀娓叆澧冭鍙紱娣卞湷鍖?鈫?棣欐腐瑗夸節榫欓珮閾侀渶鍦?12306 鐢ㄦ姢鐓у疄鍚嶄拱绁ㄣ€?,
      sourceId: "sz-baoan-airport-plan"
    },
    pitfalls: [
      {
        en: "Line 11 is express 鈥?skips many intermediate stops. Check station list before boarding.",
        zh: "11 鍙风嚎鏄揩绾匡紝璺崇珯杈冨锛屼笂杞﹀墠璇峰厛鏌ョ湅绔欑偣琛ㄣ€?,
        sourceId: "sz-baoan-airport-plan"
      },
      {
        en: "Foreign card tap doesn't work at every Shenzhen metro gate 鈥?keep cash or a prepaid Shenzhen Tong card as backup.",
        zh: "娣卞湷鍦伴搧闂告満澶栧崱鐩存帴鍒峰崱灏氭湭鍏ㄧ綉锛屽缓璁鐜伴噾鎴栧厛鍘诲鏈嶄腑蹇冨姙鐞嗘繁鍦抽€氥€?,
        sourceId: "sz-metro-pos"
      },
      {
        en: "AlipayHK and Octopus card are not interchangeable on Shenzhen metro 鈥?different code systems.",
        zh: "AlipayHK 鍜屽叓杈鹃€氬湪娣卞湷鍦伴搧涓嶉€氱敤锛屾槸涓ゅ涓嶅悓鐨勭爜銆?,
        sourceId: "sz-hk-cross-border-qr"
      }
    ]
  }
];

import { pitfallSourceIds } from "./practical-other";

export function transportSourceIds(cityId?: CityId): string[] {
  const ids = new Set<string>();
  Object.values(railBooking).forEach((r) => ids.add(r.sourceId));
  const cities = cityId ? cityTransport.filter((c) => c.cityId === cityId) : cityTransport;
  cities.forEach((city) => {
    city.airports.forEach((a) => a.options.forEach((o) => ids.add(o.sourceId)));
    ids.add(city.metro.sourceId);
    ids.add(city.rideHail.sourceId);
    city.pitfalls.forEach((p) => ids.add(p.sourceId));
  });
  pitfallSourceIds("transport", cityId).forEach((id) => ids.add(id));
  return [...ids];
}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg \"Forbidden City|Temple of Heaven|Central Axis|The Bund|Yu Garden|Shanghai Museum|Canton Tower|Chen Clan|Kaiping|Window of the World|OCT|Dapeng|Shenzhen Bay\" v2\\src\\data\\city-attractions.ts" in c:\Users\h\Documents\New project 2
 succeeded in 354ms:
    nameEn: "Forbidden City / Palace Museum",
    nameEn: "Temple of Heaven",
    nameEn: "The Bund",
    nameEn: "Yu Garden",
    nameEn: "Shanghai Museum (People's Square)",
    nameEn: "Canton Tower",
    nameEn: "Chen Clan Ancestral Hall",
    whyEn: "The illuminated-skyline cruise is Guangzhou's signature evening activity. The 60–90 min route passes below Canton Tower, along Zhujiang New Town's glittering skyline, past the colonial Shamian shores, and through bridges lit in colour. The 8 PM departure catches the full LED show on Canton Tower.",
    nameEn: "Window of the World",
    nameEn: "OCT-LOFT Creative Culture Park",
    whyEn: "Shenzhen's easiest creative-neighbourhood stop: converted industrial buildings, cafes, design shops, small galleries, bookstores, and periodic markets. Pairs well with the OCT theme-park cluster and works as a lower-pressure alternative to paid theme parks. Public district, free entry; shops Tuesday–Sunday.",
    whyZh: "深圳较易游览的创意社区：旧工业建筑改造，咖啡馆、设计店、小画廊、书店、定期集市。可与 OCT 主题公园一并安排，也是付费主题公园之外的另一选择。开放街区免费，店家周二至周日营业。",
    whyEn: "The easiest named beaches from central Shenzhen, now reachable comfortably by Metro Line 8. Dameisha is the classic public beach; Xiaomeisha has been redeveloped and is more resort-like. Best for \"I want the coast and seafood without a full Dapeng day\". Avoid peak midday in summer.",
    nameEn: "Dapeng Fortress & Peninsula",
    districtEn: "Dapeng New District",
    officialUrl: "https://www.sz.gov.cn/en_szgov/news/infocus/SZCitywalk/Explore/Districts/DapengNewDistrict/content/mpost_11892734.html",

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path \"v2\\src\\data\\city-attractions.ts\" | Select-Object -First 240" in c:\Users\h\Documents\New project 2
 succeeded in 840ms:
import type { CityId } from "./transport";

export type AttractionTier = "must-visit" | "worth-it";

export type Attraction = {
  id: string;
  cityId: CityId;
  nameEn: string;
  nameZh: string;
  districtEn: string;
  districtZh: string;
  tier: AttractionTier;
  whyEn: string;
  whyZh: string;
  officialUrl: string;
  imageUrl: string;
  imageCredit: string;
};

export const cityAttractions: Attraction[] = [
  // BEIJING
  {
    id: "bj-forbidden-city",
    cityId: "beijing",
    nameEn: "Forbidden City / Palace Museum",
    nameZh: "鏁呭鍗氱墿闄?,
    districtEn: "Dongcheng",
    districtZh: "涓滃煄鍖?,
    tier: "must-visit",
    whyEn: "The largest intact imperial palace complex in the world: 180 acres, 980 buildings, 8,728 rooms. 24 emperors lived here across the Ming and Qing dynasties (1420鈥?912). 7-day advance booking is mandatory; 40,000-person daily cap sells out within minutes for peak weekends.",
    whyZh: "涓栫晫涓婃渶澶с€佹渶瀹屾暣鐨勫娈垮缓绛戠兢鈥斺€?80 鑻变憨銆?80 鏍嬪缓绛戙€?,728 闂存埧锛屾槑娓呬袱浠?24 浣嶇殗甯濆湪姝ゅ眳浣忥紙1420鈥?912锛夈€傚繀椤绘彁鍓?7 澶╅绾︼紝姣忔棩闄?4 涓囦汉锛屾椇瀛ｅ懆鏈父鍦ㄦ暟鍒嗛挓鍐呭敭缃勩€?,
    officialUrl: "https://intl.dpm.org.cn/visit.html?l=en",
    imageUrl: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Ling Tang on Unsplash"
  },
  {
    id: "bj-mutianyu",
    cityId: "beijing",
    nameEn: "Great Wall at Mutianyu",
    nameZh: "鎱曠敯宄暱鍩?,
    districtEn: "Huairou",
    districtZh: "鎬€鏌斿尯",
    tier: "must-visit",
    whyEn: "The Great Wall section most recommended by experienced foreign travellers: well-restored Ming masonry, 23 watchtowers across a 2.25 km open stretch, cable car or chair lift up plus a toboggan descent. The official English website accepts international cards directly. 1 million foreign visitors in 2025.",
    whyZh: "璁稿澶栫睄娓稿棣栭€夌殑闀垮煄娈碉細鏄庝唬淇籍瀹屾暣銆?3 搴ф晫鍙般€?.25 鍏噷寮€鏀炬锛岀紗杞?/ 绱㈤亾涓婂北锛屽彲閫夋嫨婊戦亾涓嬪北銆傚畼鏂硅嫳鏂囩綉绔欏彲鐩存帴浣跨敤澶栧崱鏀粯銆?025 骞村绫嶆父瀹?100 涓囥€?,
    officialUrl: "https://en.mutianyugreatwall.com",
    imageUrl: "https://images.unsplash.com/photo-1509624780899-f812439647e4?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Vincent Guth on Unsplash"
  },
  {
    id: "bj-summer-palace",
    cityId: "beijing",
    nameEn: "Summer Palace",
    nameZh: "棰愬拰鍥?,
    districtEn: "Haidian",
    districtZh: "娴锋穩鍖?,
    tier: "must-visit",
    whyEn: "The best-preserved imperial garden in China and a UNESCO World Heritage Site. 220-hectare Kunming Lake with Longevity Hill behind it, the 728 m painted Long Corridor, and a theatrical landscape designed for Qing imperial leisure. Audio guides in 19 languages.",
    whyZh: "涓浗淇濆瓨鏈€瀹屽ソ鐨勭殗瀹跺洯鏋楋紝UNESCO 涓栫晫閬椾骇銆?20 鍏》鏄嗘槑婀栬儗闈犱竾瀵垮北锛?28 绫冲僵缁橀暱寤婏紝娓呬唬鐨囧閬挎殤鍥灄銆?9 璇璇煶瀵艰銆?,
    officialUrl: "https://english.beijing.gov.cn/specials/parktours/guidevisitors/summerpalace/",
    imageUrl: "https://images.unsplash.com/photo-1619825479213-62e158b5a79d?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Nakaharu Line on Unsplash"
  },
  {
    id: "bj-temple-of-heaven",
    cityId: "beijing",
    nameEn: "Temple of Heaven",
    nameZh: "澶╁潧",
    districtEn: "Dongcheng",
    districtZh: "涓滃煄鍖?,
    tier: "must-visit",
    whyEn: "The largest extant sacrificial altar complex in China (built 1406鈥?420), used by every Ming and Qing emperor to pray for harvest. The triple-eaved circular blue-roofed Hall of Prayer for Good Harvests is one of the most architecturally perfect timber structures in Chinese history. The park grounds double as a morning tai chi venue.",
    whyZh: "涓浗鐜板瓨鏈€澶х殑绁寤虹瓚缇わ紙1406鈥?420 寤猴級锛屾槑娓呮瘡浣嶇殗甯濈璋蜂箣澶勩€備笁妾愬渾褰㈣摑椤剁殑绁堝勾娈挎槸涓浗鏈ㄦ瀯寤虹瓚鐨勫穮宄颁箣涓€銆傛竻鏅ㄥ洯鍖烘槸甯傛皯缁冨お鏋佺殑鍦烘墍銆?,
    officialUrl: "https://english.beijing.gov.cn/specials/parktours/guidevisitors/templeofheaven/",
    imageUrl: "https://images.unsplash.com/photo-1569165755139-296fac054979?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "ZQ Lee on Unsplash"
  },
  {
    id: "bj-lama-temple",
    cityId: "beijing",
    nameEn: "Lama Temple (Yonghe Gong)",
    nameZh: "闆嶅拰瀹?,
    districtEn: "Dongcheng",
    districtZh: "涓滃煄鍖?,
    tier: "must-visit",
    whyEn: "The most important Tibetan Buddhist temple in Beijing and one of the most significant Gelug monasteries outside Tibet. Originally an imperial princely mansion (1694), converted to a lamasery in 1744. The Wanfu Pavilion houses an 18 m Maitreya Buddha carved from a single sandalwood tree 鈥?the tallest sandalwood statue in the world.",
    whyZh: "鍖椾含鏈€閲嶈鐨勮棌浼犱經鏁欏闄紝涔熸槸瑗胯棌浠ュ鏈€閲嶈鐨勬牸椴佹淳瀵洪櫌涔嬩竴銆傚師涓虹殗瀛愬簻閭革紙1694锛夛紝1744 骞存敼涓哄枃鍢涘簷銆備竾绂忛榿鍐?18 绫抽珮鐨勫讥鍕掍經鐢卞崟鏍圭櫧妾€鏈ㄩ洉鎴愶紝鏄笘鐣屾渶楂樼殑妾€棣欐湪浣涘儚銆?,
    officialUrl: "https://english.beijing.gov.cn/specials/ticketing/",
    imageUrl: "https://images.unsplash.com/photo-1590301729964-23833732ee04?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Peter Zhou on Unsplash"
  },
  {
    id: "bj-tiananmen",
    cityId: "beijing",
    nameEn: "Tiananmen Square",
    nameZh: "澶╁畨闂ㄥ箍鍦?,
    districtEn: "Dongcheng",
    districtZh: "涓滃煄鍖?,
    tier: "must-visit",
    whyEn: "The world's third-largest public square (440,000 sq m) and the symbolic centre of the People's Republic. Daily flag-raising ceremony at sunrise, flag-lowering at sunset. Free entry but mandatory advance reservation (1鈥? days ahead) 鈥?walk-up visitors are turned back at the security checkpoint.",
    whyZh: "涓栫晫绗笁澶у箍鍦猴紙44 涓囧钩鏂圭背锛夛紝涓崕浜烘皯鍏卞拰鍥借薄寰佹€т腑蹇冦€傛瘡鏃ユ棩鍑哄崌鏃椼€佹棩钀介檷鏃椼€傚厤璐瑰叆鍦轰絾蹇呴』鎻愬墠 1鈥? 澶╃嚎涓婇绾︼紝鏈绾︿細琚畨妫€鎷︿笅銆?,
    officialUrl: "https://english.beijing.gov.cn/travellinginbeijing/",
    imageUrl: "https://images.unsplash.com/photo-1604844252839-f9c364adacdd?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Zixi Zhou on Unsplash"
  },

  // SHANGHAI
  {
    id: "sh-bund",
    cityId: "shanghai",
    nameEn: "The Bund",
    nameZh: "澶栨哗",
    districtEn: "Huangpu",
    districtZh: "榛勬郸鍖?,
    tier: "must-visit",
    whyEn: "Shanghai's essential postcard view: a 1.5 km Huangpu River promenade where early-20th-century banks and trading houses face the Pudong skyline. The simplest place to read both Shanghai's treaty-port past and its vertical-finance present in one frame. Sunrise for low crowds; evening for the skyline lights.",
    whyZh: "涓婃捣鐨勪唬琛ㄦ櫙瑙傦細1.5 鍏噷榛勬郸姹熷哺姝ラ亾锛?0 涓栫邯鍒濋摱琛?/ 鍟嗚寤虹瓚缇ゆ瀵规郸涓滃ぉ闄呯嚎銆傝繖閲屾槸鐞嗚В涓婃捣绉熺晫鍘嗗彶涓庣幇浠ｉ噾铻嶆櫙瑙傜殑鐩磋鍦扮偣銆傛棩鍑烘椂浜烘祦杈冨皯锛屽鏅氶€傚悎瑙傝祻鐏厜绉€銆?,
    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231205/584672cc6d044eabb5f7f6fc9049a19f.html",
    imageUrl: "https://images.unsplash.com/photo-1506158669146-619067262a00?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Hanny Naibaho on Unsplash"
  },
  {
    id: "sh-yu-garden",
    cityId: "shanghai",
    nameEn: "Yu Garden",
    nameZh: "璞洯",
    districtEn: "Huangpu",
    districtZh: "榛勬郸鍖?,
    tier: "must-visit",
    whyEn: "Shanghai's best central classical Chinese garden: Ming-dynasty rockeries, pavilions, ponds, zigzag bridges, the City God Temple area, and the surrounding old-city bazaar streets all compressed into a walkable historic quarter. The clearest contrast to the Bund's European riverfront.",
    whyZh: "涓婃捣甯備腑蹇冧唬琛ㄦ€х殑涓紡鍥灄锛氭槑浠ｅ亣灞便€佷涵鍙般€佹睜濉樸€佷節鏇叉ˉ锛屽姞涓婂煄闅嶅簷鍖轰笌鑰佸煄鍘㈠競闆嗐€傚彲涓庡婊╂寮忔睙宀稿舰鎴愰矞鏄庡鐓с€?,
    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231205/dc76893b94c248d195eaf7f4d44c6597.html",
    imageUrl: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Li Yang on Unsplash"
  },
  {
    id: "sh-shanghai-tower",
    cityId: "shanghai",
    nameEn: "Shanghai Tower",
    nameZh: "涓婃捣涓績澶у帵",
    districtEn: "Pudong",
    districtZh: "娴︿笢鏂板尯",
    tier: "must-visit",
    whyEn: "China's highest observation deck and the clearest \"future Shanghai\" attraction. The 118th-floor Top of Shanghai Observatory gives a 360掳 view over Lujiazui, the Bund, Suzhou Creek, and the city's full scale. Heavily affected by haze, rain, and low cloud 鈥?book close to the visit date.",
    whyZh: "涓浗鏈€楂樿鏅彴锛屼篃鏄洿瑙傛劅鍙梊"鏈潵涓婃捣\"鐨勬櫙鐐广€?18 灞?\"涓婃捣涔嬪穮\" 360掳 淇灠闄嗗鍢淬€佸婊┿€佽嫃宸炴渤鍜屽叏鍩庤妯°€傚彈闆鹃溇銆侀洦銆佷綆浜戝奖鍝嶆槑鏄撅紝寤鸿涓磋繎鏃ユ湡鍐嶈绁ㄣ€?,
    officialUrl: "https://www.shanghaitower.com/",
    imageUrl: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Denys Nevozhai on Unsplash"
  },
  {
    id: "sh-lujiazui",
    cityId: "shanghai",
    nameEn: "Lujiazui Skyline & Oriental Pearl Tower",
    nameZh: "闄嗗鍢?/ 涓滄柟鏄庣彔",
    districtEn: "Pudong",
    districtZh: "娴︿笢鏂板尯",
    tier: "must-visit",
    whyEn: "The compact skyline cluster opposite the Bund: Oriental Pearl Tower, Shanghai Tower, World Financial Center, Jin Mao, IFC, riverside promenades. Iconic photos, sky decks, malls, and easy riverfront contrast with the Bund. Outdoor district free; sky-deck tickets via official ticketing.",
    whyZh: "澶栨哗瀵归潰鐨勭揣鍑戝ぉ闄呯嚎锛氫笢鏂规槑鐝犮€佷笂娴蜂腑蹇冦€佺幆鐞冮噾铻嶄腑蹇冦€侀噾鑼傘€両FC銆佹花姹熸极閬撱€傞€傚悎鏍囧織鎬у悎褰便€佺櫥椤惰鏅拰鍟嗗満浼戞啯锛屼篃鍙笌澶栨哗褰㈡垚鐩存帴瀵圭収銆傚澶栧尯鍏嶈垂锛岀櫥椤堕€氳繃瀹樻柟绁ㄥ姟銆?,
    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231205/19a5f5184eca45728fd57a4d4c8efc61.html",
    imageUrl: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Edward He on Unsplash"
  },
  {
    id: "sh-wukang",
    cityId: "shanghai",
    nameEn: "Wukang Road & Wukang Mansion",
    nameZh: "姝﹀悍璺?/ 姝﹀悍澶фゼ",
    districtEn: "Xuhui",
    districtZh: "寰愭眹鍖?,
    tier: "must-visit",
    whyEn: "The most visitor-friendly slice of the former French Concession: plane-tree streets, garden villas, writer residences, cafes, Ferguson Lane, and the flatiron Wukang Mansion photo spot. Better as a slow walk than a single attraction. Police barriers control the crowds at the photo intersection on weekends.",
    whyZh: "鍘熸硶绉熺晫鏈€閫傚悎娓稿鐨勪竴娈碉細姊ф琛楅亾銆佽姳鍥磱鎴裤€佸悕浜烘晠灞呫€佸挅鍟￠銆佽垂灏旀牴宸枫€佷笁瑙掑舰鐨勬搴峰ぇ妤煎悎褰辩偣銆傛洿閫傚悎浠庡姝ヨ娓歌锛屼笉瀹滃彧涓烘媿鐓ф墦鍗°€傚懆鏈氦璀︿細鍦ㄦ媿鐓ц矾鍙ｅ垎娴併€?,
    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231218/596192f5f59048bbbc3fa54d92304e93.html",
    imageUrl: "https://images.unsplash.com/photo-1574504500022-de9a6309a501?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Katherine Gu on Unsplash"
  },
  {
    id: "sh-museum",
    cityId: "shanghai",
    nameEn: "Shanghai Museum (People's Square)",
    nameZh: "涓婃捣鍗氱墿棣?浜烘皯骞垮満棣?,
    districtEn: "Huangpu",
    districtZh: "榛勬郸鍖?,
    tier: "must-visit",
    whyEn: "The strongest single stop for ancient Chinese art in central Shanghai: bronzes, ceramics, jade, calligraphy, painting, seals, furniture. Since 2025-09 individual visitors no longer need reservations for the People's Square site during normal periods 鈥?entry with passport. Closed Mondays.",
    whyZh: "甯備腑蹇冮泦涓睍绀轰腑鍥藉彜浠ｈ壓鏈殑閲嶈鍦洪锛氶潚閾溿€侀櫠鐡枫€佺帀鍣ㄣ€佷功娉曘€佺粯鐢汇€佸嵃绔犮€佸鍏枫€?025-09 璧蜂汉姘戝箍鍦洪鏅€氭暎瀹笉闇€棰勭害锛屽嚟鎶ょ収鍏ラ銆傚懆涓€闂銆?,
    officialUrl: "https://english.shanghai.gov.cn/en-MuseumsGalleries/20231218/01fdd3f62d0c4877bc289ec0b1de6afa.html",
    imageUrl: "https://images.unsplash.com/photo-1508742066636-3b9fb738ee0e?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "zhang kaiyv on Unsplash"
  },

  // GUANGZHOU
  {
    id: "gz-canton-tower",
    cityId: "guangzhou",
    nameEn: "Canton Tower",
    nameZh: "骞垮窞濉?,
    districtEn: "Haizhu",
    districtZh: "娴风彔鍖?,
    tier: "must-visit",
    whyEn: "At 600 m, the tallest TV/observation tower in China and third tallest in the world. The twisted-waist design is one of Guangzhou's most recognisable silhouettes. Indoor and outdoor observation decks; the glass sky walk and bubble tram revolving outside the structure offer extra thrills. Best at dusk for the daylight-to-LED transition.",
    whyZh: "600 绫筹紝涓浗鏈€楂樼數瑙嗗锛屼笘鐣岀涓夈€俓"灏忚洰鑵癨" 鎵浆閫犲瀷鏄箍宸炵殑鏍囧織鎬ц疆寤撱€傚鍐呭瑙傛櫙鍙般€佹埛澶栫幓鐠冩爤閬撳拰澶栧湀 \"鎽╁ぉ杞甛" 澶┖鑸卞悇鍏风壒鑹层€傞粍鏄忔渶閫傚悎瑙傝祻浠庣櫧澶╁埌澶滅伅鐨勮繃娓°€?,
    officialUrl: "https://www.cantontower.com/en/",
    imageUrl: "https://images.unsplash.com/photo-1563090162-6b4c2a20d658?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Lycheeart on Unsplash"
  },
  {
    id: "gz-shamian",
    cityId: "guangzhou",
    nameEn: "Shamian Island",
    nameZh: "娌欓潰宀?,
    districtEn: "Liwan",
    districtZh: "鑽旀咕鍖?,
    tier: "must-visit",
    whyEn: "A 0.3 km虏 sand-bar in the Pearl River that served as the British and French concession from 1859 to 1943. Over 150 European-style buildings 鈥?consulates, banks, churches, trading-house villas 鈥?shaded by 200-year-old banyan trees. No cars, no admission, no hawkers inside. Often described as the calmest 90 minutes in Guangzhou.",
    whyZh: "鐝犳睙涓?0.3 骞虫柟鍏噷鐨勬矙娲诧紝1859鈥?943 鏄嫳娉曠鐣屻€?50+ 鏍嬫寮忓缓绛戯紙棰嗕簨棣嗐€侀摱琛屻€佹暀鍫傘€佹磱琛屽埆澧咃級鎺╂槧鍦?200 宀佹鏍戜笅銆傛棤杞︺€佹棤闂ㄧエ锛屽皯鏈夊彨鍗栥€傚父琚舰瀹逛负骞垮窞鏈€瀹夐潤鐨?90 鍒嗛挓銆?,
    officialUrl: "https://www.gz.gov.cn/guangzhouinternational/",
    imageUrl: "https://images.unsplash.com/photo-1636259584602-5a3c9c0d05ff?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "choi wingkin on Unsplash"
  },
  {
    id: "gz-chen-clan",
    cityId: "guangzhou",
    nameEn: "Chen Clan Ancestral Hall",
    nameZh: "闄堝绁?,
    districtEn: "Liwan",
    districtZh: "鑽旀咕鍖?,
    tier: "must-visit",
    whyEn: "Built 1888鈥?894 by 72 Chen-surname clans as an exam-preparation hostel and worship site, this compound is the supreme surviving example of Lingnan decorative architecture. Every surface 鈥?ridge beams, screen walls, courtyards 鈥?is covered in polychrome ceramic figurines, wood carvings, stone reliefs, and brick carvings. \"The Pearl of Lingnan Architecture.\"",
    whyZh: "1888鈥?894 鐢?72 涓檲濮撳畻鏃忛泦璧勫缓閫狅紝浣滀负鑰冩 + 绁犲爞銆傚箔鍗楄楗板缓绛戠殑宸呭嘲涔嬩綔鈥斺€斿眿鑴娿€佸奖澹併€佸涵闄㈡瘡涓€闈㈤兘甯冩弧褰╃摲濉戙€佹湪闆曘€佺煶闆曘€佺爾闆曘€傝绉颁负\"宀崡寤虹瓚鏄庣彔\"銆?,
    officialUrl: "https://www.gz.gov.cn/guangzhouinternational/visitors/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Chan_Clan_Ancestral_Hall.JPG",
    imageCredit: "Lai.jack on Wikimedia, CC BY-SA 3.0"
  },
  {
    id: "gz-yuexiu-park",
    cityId: "guangzhou",
    nameEn: "Yuexiu Park & Five Rams Statue",
    nameZh: "瓒婄鍏洯 / 浜旂緤闆曞儚",

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path \"v2\\src\\hooks\\useCityViews.ts\"" in c:\Users\h\Documents\New project 2
 succeeded in 561ms:
import { useCallback, useSyncExternalStore } from "react";

const KEY_PREFIX = "chinaAtlas:views:";
const listeners = new Set<() => void>();

const isBrowser = typeof window !== "undefined";

const subscribe = (listener: () => void): (() => void) => {
  listeners.add(listener);
  if (isBrowser) window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    if (isBrowser) window.removeEventListener("storage", listener);
  };
};

const notify = () => listeners.forEach((listener) => listener());

const readCount = (cityId: string): number => {
  if (!isBrowser) return 0;
  const stored = Number(window.localStorage.getItem(KEY_PREFIX + cityId) ?? 0);
  return Number.isFinite(stored) ? stored : 0;
};

export function useCityViewCount(cityId: string, baseViews: number): number {
  const stored = useSyncExternalStore(
    subscribe,
    () => readCount(cityId),
    () => 0
  );
  return baseViews + stored;
}

export function useRecordCityView(): (cityId: string) => void {
  return useCallback((cityId: string) => {
    if (!isBrowser) return;
    const next = readCount(cityId) + 1;
    window.localStorage.setItem(KEY_PREFIX + cityId, String(next));
    notify();
  }, []);
}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg \"useCityViewCount\" v2\\src" in c:\Users\h\Documents\New project 2
 succeeded in 406ms:
v2\src\hooks\useCityViews.ts:export function useCityViewCount(cityId: string, baseViews: number): number {
v2\src\components\atlas\CityProfile.tsx:import { useCityViewCount } from "../../hooks/useCityViews";
v2\src\components\atlas\CityProfile.tsx:  const views = useCityViewCount(city?.id ?? "", city?.baseViews ?? 0);
v2\src\components\atlas\CityList.tsx:import { useCityViewCount, useRecordCityView } from "../../hooks/useCityViews";
v2\src\components\atlas\CityList.tsx:  const total = useCityViewCount(city.id, city.baseViews);

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short' in c:\Users\h\Documents\New project 2\v2
 succeeded in 463ms:
 M ../.omc/project-memory.json
 D src/components/atlas/AtlasSection.tsx
 D src/components/atlas/CityList.tsx
 D src/components/atlas/CityProfile.tsx
 D src/components/atlas/ProvinceRail.tsx
 D src/components/city/CityHero.tsx
 D src/components/common/PageSources.tsx
 M src/components/layout/LanguageSwitch.tsx
 D src/components/map/EarthIntro.tsx
 M src/components/pillar/EmergencyBriefing.tsx
 M src/components/pillar/FoodGuide.tsx
 M src/components/pillar/PaymentsChecklist.tsx
 M src/components/pillar/TransportGuide.tsx
 D src/components/search/PlaceSearch.tsx
 D src/components/sections/HistoryVideo.tsx
 D src/components/sections/MuseumFlow.tsx
 D src/components/sections/SourcesNote.tsx
 M src/pages/GuidePage.tsx
 M src/pages/MapPage.tsx
?? ../.omc/artifacts/ask/codex-v2-workdir-edit-build-citypage-section-id-citypage-tsx-50-53-2026-05-12T02-55-49-934Z.md

codex
工作区里已有不少未提交改动和删除，我会只碰这次点击跳转相关文件，不回滚其他内容。接下来把 Phase 1 路由映射抽成共享 helper，再给 Cesium label entity 加点击识别。
  ✓ Inspect map label rendering and routing context
  → Patch Phase 1 city label navigation
  • Run TypeScript and production build
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\lib\cityRoutes.ts
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..2d581f4ee1dd4b20c757bf0c031de1475fb239b2
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,12 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}

diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..2d581f4ee1dd4b20c757bf0c031de1475fb239b2
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,12 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\map\ProvinceInfoCard.tsx
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..2d581f4ee1dd4b20c757bf0c031de1475fb239b2
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,12 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}

diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..2d581f4ee1dd4b20c757bf0c031de1475fb239b2
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,12 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\map\Map3D.tsx
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb6ec598a14c787f3bddefd8ab4c4f84af5..37cefdad4b113312073aa51f69f121bcc0e64bad
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,11 +1,17 @@
-import { useEffect, useMemo, useRef, useState } from "react";
-import "cesium/Build/Cesium/Widgets/widgets.css";
-import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
-import type { Lang } from "../../data/i18n";
-import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
-
-type CesiumModule = typeof import("cesium");
-type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
+import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
+import "cesium/Build/Cesium/Widgets/widgets.css";
+import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
+import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
+import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
+
+type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
+type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
   province: ProvinceRecord;
@@ -34,8 +40,9 @@
   north: 54
 };
 
-const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
-const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
+const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -206,17 +213,20 @@
   });
 }
 
-function addLabelEntity(
-  Cesium: CesiumModule,
-  viewer: CesiumViewer,
-  position: LonLat,
-  text: string,
-  color: string,
-  size: number
-) {
-  viewer.entities.add({
-    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
-    point: {
+function addLabelEntity(
+  Cesium: CesiumModule,
+  viewer: CesiumViewer,
+  position: LonLat,
+  text: string,
+  color: string,
+  size: number,
+  entityId?: string
+) {
+  viewer.entities.add({
+    id: entityId,
+    name: text,
+    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
+    point: {
       pixelSize: size,
       color: Cesium.Color.fromCssColorString(color),
       outlineColor: Cesium.Color.WHITE,
@@ -237,7 +247,7 @@
   });
 }
 
-function addProvinceEntities(
+function addProvinceEntities(
   Cesium: CesiumModule,
   viewer: CesiumViewer,
   province: ProvinceRecord,
@@ -248,10 +258,18 @@
   const center = percentToLonLat(area.x, area.y);
   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 
-  province.cities.forEach((city, index) => {
-    const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
-  });
+  province.cities.forEach((city, index) => {
+    const position = getCityPosition(city.id, area, index + 1);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
+  });
 
   const attractions = provinceAttractionSeed[provinceId] ?? [];
   attractions.forEach((attraction, index) => {
@@ -278,25 +296,55 @@
   });
 }
 
-function resolveProvince(provinceId: string, province: ProvinceRecord) {
-  return atlasData.find((item) => item.id === provinceId) ?? province;
-}
-
-export default function Map3D({ province, provinceId, lang }: Map3DProps) {
-  const containerRef = useRef<HTMLDivElement | null>(null);
-  const viewerRef = useRef<CesiumViewer | null>(null);
-  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
-  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
-  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
-
-  useEffect(() => {
+function resolveProvince(provinceId: string, province: ProvinceRecord) {
+  return atlasData.find((item) => item.id === provinceId) ?? province;
+}
+
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const candidate = (picked as { id?: unknown }).id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
+export default function Map3D({ province, provinceId, lang }: Map3DProps) {
+  const containerRef = useRef<HTMLDivElement | null>(null);
+  const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
+  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
+  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
+  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
+
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
+  useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
 
     if (!token) return;
 
-    let cancelled = false;
-    let creditContainer: HTMLDivElement | null = document.createElement("div");
+    let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
+    let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
 
@@ -341,11 +389,18 @@
 
         const area = getProvinceArea(provinceId);
         const bounds = areaToCameraBounds(area);
-        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
-        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
-        focusCamera(Cesium, viewer, bounds);
-
-        if (!cancelled) setLoadState("ready");
+        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
+        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
+        focusCamera(Cesium, viewer, bounds);
+
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
+        if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
         if (!cancelled) {
@@ -356,10 +411,14 @@
 
     void initCesium();
 
-    return () => {
-      cancelled = true;
-      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
-        viewerRef.current.destroy();
+    return () => {
+      cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
+      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
+        viewerRef.current.destroy();
       }
       viewerRef.current = null;
       if (creditContainer?.parentNode) {
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..2d581f4ee1dd4b20c757bf0c031de1475fb239b2
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,12 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}

diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb6ec598a14c787f3bddefd8ab4c4f84af5..37cefdad4b113312073aa51f69f121bcc0e64bad
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,11 +1,17 @@
-import { useEffect, useMemo, useRef, useState } from "react";
-import "cesium/Build/Cesium/Widgets/widgets.css";
-import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
-import type { Lang } from "../../data/i18n";
-import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
-
-type CesiumModule = typeof import("cesium");
-type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
+import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
+import "cesium/Build/Cesium/Widgets/widgets.css";
+import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
+import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
+import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
+
+type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
+type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
   province: ProvinceRecord;
@@ -34,8 +40,9 @@
   north: 54
 };
 
-const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
-const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
+const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -206,17 +213,20 @@
   });
 }
 
-function addLabelEntity(
-  Cesium: CesiumModule,
-  viewer: CesiumViewer,
-  position: LonLat,
-  text: string,
-  color: string,
-  size: number
-) {
-  viewer.entities.add({
-    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
-    point: {
+function addLabelEntity(
+  Cesium: CesiumModule,
+  viewer: CesiumViewer,
+  position: LonLat,
+  text: string,
+  color: string,
+  size: number,
+  entityId?: string
+) {
+  viewer.entities.add({
+    id: entityId,
+    name: text,
+    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
+    point: {
       pixelSize: size,
       color: Cesium.Color.fromCssColorString(color),
       outlineColor: Cesium.Color.WHITE,
@@ -237,7 +247,7 @@
   });
 }
 
-function addProvinceEntities(
+function addProvinceEntities(
   Cesium: CesiumModule,
   viewer: CesiumViewer,
   province: ProvinceRecord,
@@ -248,10 +258,18 @@
   const center = percentToLonLat(area.x, area.y);
   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 
-  province.cities.forEach((city, index) => {
-    const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
-  });
+  province.cities.forEach((city, index) => {
+    const position = getCityPosition(city.id, area, index + 1);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
+  });
 
   const attractions = provinceAttractionSeed[provinceId] ?? [];
   attractions.forEach((attraction, index) => {
@@ -278,25 +296,55 @@
   });
 }
 
-function resolveProvince(provinceId: string, province: ProvinceRecord) {
-  return atlasData.find((item) => item.id === provinceId) ?? province;
-}
-
-export default function Map3D({ province, provinceId, lang }: Map3DProps) {
-  const containerRef = useRef<HTMLDivElement | null>(null);
-  const viewerRef = useRef<CesiumViewer | null>(null);
-  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
-  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
-  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
-
-  useEffect(() => {
+function resolveProvince(provinceId: string, province: ProvinceRecord) {
+  return atlasData.find((item) => item.id === provinceId) ?? province;
+}
+
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const candidate = (picked as { id?: unknown }).id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
+export default function Map3D({ province, provinceId, lang }: Map3DProps) {
+  const containerRef = useRef<HTMLDivElement | null>(null);
+  const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
+  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
+  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
+  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
+
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
+  useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
 
     if (!token) return;
 
-    let cancelled = false;
-    let creditContainer: HTMLDivElement | null = document.createElement("div");
+    let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
+    let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
 
@@ -341,11 +389,18 @@
 
         const area = getProvinceArea(provinceId);
         const bounds = areaToCameraBounds(area);
-        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
-        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
-        focusCamera(Cesium, viewer, bounds);
-
-        if (!cancelled) setLoadState("ready");
+        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
+        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
+        focusCamera(Cesium, viewer, bounds);
+
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
+        if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
         if (!cancelled) {
@@ -356,10 +411,14 @@
 
     void initCesium();
 
-    return () => {
-      cancelled = true;
-      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
-        viewerRef.current.destroy();
+    return () => {
+      cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
+      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
+        viewerRef.current.destroy();
       }
       viewerRef.current = null;
       if (creditContainer?.parentNode) {
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..2d581f4ee1dd4b20c757bf0c031de1475fb239b2
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,12 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}

codex
核心改动已落下：城市 label entity 现在带 `city:<atlasId>`，Cesium 左键点击会 pick entity，再对 Phase 1 跳路由，其他城市继续走 `selectPlace`。我先跑类型检查，必要时按报错收紧类型。
  ✓ Inspect map label rendering and routing context
  ✓ Patch Phase 1 city label navigation
  → Run TypeScript and production build
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb6ec598a14c787f3bddefd8ab4c4f84af5..37cefdad4b113312073aa51f69f121bcc0e64bad
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,11 +1,17 @@
-import { useEffect, useMemo, useRef, useState } from "react";
-import "cesium/Build/Cesium/Widgets/widgets.css";
-import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
-import type { Lang } from "../../data/i18n";
-import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
-
-type CesiumModule = typeof import("cesium");
-type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
+import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
+import "cesium/Build/Cesium/Widgets/widgets.css";
+import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
+import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
+import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
+
+type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
+type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
   province: ProvinceRecord;
@@ -34,8 +40,9 @@
   north: 54
 };
 
-const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
-const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
+const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -206,17 +213,20 @@
   });
 }
 
-function addLabelEntity(
-  Cesium: CesiumModule,
-  viewer: CesiumViewer,
-  position: LonLat,
-  text: string,
-  color: string,
-  size: number
-) {
-  viewer.entities.add({
-    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
-    point: {
+function addLabelEntity(
+  Cesium: CesiumModule,
+  viewer: CesiumViewer,
+  position: LonLat,
+  text: string,
+  color: string,
+  size: number,
+  entityId?: string
+) {
+  viewer.entities.add({
+    id: entityId,
+    name: text,
+    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
+    point: {
       pixelSize: size,
       color: Cesium.Color.fromCssColorString(color),
       outlineColor: Cesium.Color.WHITE,
@@ -237,7 +247,7 @@
   });
 }
 
-function addProvinceEntities(
+function addProvinceEntities(
   Cesium: CesiumModule,
   viewer: CesiumViewer,
   province: ProvinceRecord,
@@ -248,10 +258,18 @@
   const center = percentToLonLat(area.x, area.y);
   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 
-  province.cities.forEach((city, index) => {
-    const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
-  });
+  province.cities.forEach((city, index) => {
+    const position = getCityPosition(city.id, area, index + 1);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
+  });
 
   const attractions = provinceAttractionSeed[provinceId] ?? [];
   attractions.forEach((attraction, index) => {
@@ -278,25 +296,55 @@
   });
 }
 
-function resolveProvince(provinceId: string, province: ProvinceRecord) {
-  return atlasData.find((item) => item.id === provinceId) ?? province;
-}
-
-export default function Map3D({ province, provinceId, lang }: Map3DProps) {
-  const containerRef = useRef<HTMLDivElement | null>(null);
-  const viewerRef = useRef<CesiumViewer | null>(null);
-  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
-  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
-  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
-
-  useEffect(() => {
+function resolveProvince(provinceId: string, province: ProvinceRecord) {
+  return atlasData.find((item) => item.id === provinceId) ?? province;
+}
+
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const candidate = (picked as { id?: unknown }).id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
+export default function Map3D({ province, provinceId, lang }: Map3DProps) {
+  const containerRef = useRef<HTMLDivElement | null>(null);
+  const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
+  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
+  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
+  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
+
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
+  useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
 
     if (!token) return;
 
-    let cancelled = false;
-    let creditContainer: HTMLDivElement | null = document.createElement("div");
+    let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
+    let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
 
@@ -341,11 +389,18 @@
 
         const area = getProvinceArea(provinceId);
         const bounds = areaToCameraBounds(area);
-        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
-        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
-        focusCamera(Cesium, viewer, bounds);
-
-        if (!cancelled) setLoadState("ready");
+        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
+        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
+        focusCamera(Cesium, viewer, bounds);
+
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
+        if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
         if (!cancelled) {
@@ -356,10 +411,14 @@
 
     void initCesium();
 
-    return () => {
-      cancelled = true;
-      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
-        viewerRef.current.destroy();
+    return () => {
+      cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
+      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
+        viewerRef.current.destroy();
       }
       viewerRef.current = null;
       if (creditContainer?.parentNode) {
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..2d581f4ee1dd4b20c757bf0c031de1475fb239b2
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,12 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
 succeeded in 1327ms:
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb6ec598a14c787f3bddefd8ab4c4f84af5..37cefdad4b113312073aa51f69f121bcc0e64bad
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,11 +1,17 @@
-import { useEffect, useMemo, useRef, useState } from "react";
-import "cesium/Build/Cesium/Widgets/widgets.css";
-import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
-import type { Lang } from "../../data/i18n";
-import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
-
-type CesiumModule = typeof import("cesium");
-type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
+import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
+import "cesium/Build/Cesium/Widgets/widgets.css";
+import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
+import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
+import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
+
+type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
+type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
   province: ProvinceRecord;
@@ -34,8 +40,9 @@
   north: 54
 };
 
-const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
-const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
+const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -206,17 +213,20 @@
   });
 }
 
-function addLabelEntity(
-  Cesium: CesiumModule,
-  viewer: CesiumViewer,
-  position: LonLat,
-  text: string,
-  color: string,
-  size: number
-) {
-  viewer.entities.add({
-    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
-    point: {
+function addLabelEntity(
+  Cesium: CesiumModule,
+  viewer: CesiumViewer,
+  position: LonLat,
+  text: string,
+  color: string,
+  size: number,
+  entityId?: string
+) {
+  viewer.entities.add({
+    id: entityId,
+    name: text,
+    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
+    point: {
       pixelSize: size,
       color: Cesium.Color.fromCssColorString(color),
       outlineColor: Cesium.Color.WHITE,
@@ -237,7 +247,7 @@
   });
 }
 
-function addProvinceEntities(
+function addProvinceEntities(
   Cesium: CesiumModule,
   viewer: CesiumViewer,
   province: ProvinceRecord,
@@ -248,10 +258,18 @@
   const center = percentToLonLat(area.x, area.y);
   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 
-  province.cities.forEach((city, index) => {
-    const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
-  });
+  province.cities.forEach((city, index) => {
+    const position = getCityPosition(city.id, area, index + 1);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
+  });
 
   const attractions = provinceAttractionSeed[provinceId] ?? [];
   attractions.forEach((attraction, index) => {
@@ -278,25 +296,55 @@
   });
 }
 
-function resolveProvince(provinceId: string, province: ProvinceRecord) {
-  return atlasData.find((item) => item.id === provinceId) ?? province;
-}
-
-export default function Map3D({ province, provinceId, lang }: Map3DProps) {
-  const containerRef = useRef<HTMLDivElement | null>(null);
-  const viewerRef = useRef<CesiumViewer | null>(null);
-  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
-  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
-  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
-
-  useEffect(() => {
+function resolveProvince(provinceId: string, province: ProvinceRecord) {
+  return atlasData.find((item) => item.id === provinceId) ?? province;
+}
+
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const candidate = (picked as { id?: unknown }).id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
+export default function Map3D({ province, provinceId, lang }: Map3DProps) {
+  const containerRef = useRef<HTMLDivElement | null>(null);
+  const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
+  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
+  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
+  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
+
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
+  useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
 
     if (!token) return;
 
-    let cancelled = false;
-    let creditContainer: HTMLDivElement | null = document.createElement("div");
+    let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
+    let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
 
@@ -341,11 +389,18 @@
 
         const area = getProvinceArea(provinceId);
         const bounds = areaToCameraBounds(area);
-        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
-        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
-        focusCamera(Cesium, viewer, bounds);
-
-        if (!cancelled) setLoadState("ready");
+        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
+        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
+        focusCamera(Cesium, viewer, bounds);
+
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
+        if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
         if (!cancelled) {
@@ -356,10 +411,14 @@
 
     void initCesium();
 
-    return () => {
-      cancelled = true;
-      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
-        viewerRef.current.destroy();
+    return () => {
+      cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
+      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
+        viewerRef.current.destroy();
       }
       viewerRef.current = null;
       if (creditContainer?.parentNode) {
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..2d581f4ee1dd4b20c757bf0c031de1475fb239b2
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,12 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}

codex
`npx tsc --noEmit` 已通过。现在跑生产构建，看 React Router/Vite 打包阶段是否还有导入或资源问题。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 7917ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1503 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                     6.03 kB │ gzip:     0.93 kB
build/client/assets/Map3D-B9DDZdqH.css              24.01 kB │ gzip:     5.37 kB
build/client/assets/root-BBuZXC1J.css               41.09 kB │ gzip:     7.74 kB
build/client/assets/language-D_sidw9C.js             0.26 kB │ gzip:     0.21 kB
build/client/assets/clsx-H-aRJLpe.js                 0.36 kB │ gzip:     0.23 kB
build/client/assets/cityRoutes-C8LpQgYp.js           0.56 kB │ gzip:     0.37 kB
build/client/assets/chunk-BA_0og6f.js                0.95 kB │ gzip:     0.56 kB
build/client/assets/provinceColors-ChY8jySF.js       1.72 kB │ gzip:     0.91 kB
build/client/assets/HomePage-B317R2EY.js             4.69 kB │ gzip:     2.12 kB
build/client/assets/SharePage-SOKeWOZv.js            7.48 kB │ gzip:     2.76 kB
build/client/assets/phase2-preview-DcPyXPqD.js       7.59 kB │ gzip:     4.48 kB
build/client/assets/AskPage-D4TBpFC4.js              7.62 kB │ gzip:     2.92 kB
build/client/assets/Map3D-ERQismly.js                8.66 kB │ gzip:     4.12 kB
build/client/assets/root-C7TFZHRt.js                 9.47 kB │ gzip:     4.57 kB
build/client/assets/GuidePage-CZq-6qwa.js           10.80 kB │ gzip:     5.11 kB
build/client/assets/MapPage-IdJvlQZw.js             11.34 kB │ gzip:     4.14 kB
build/client/assets/practical-other-Bpl292H6.js     22.32 kB │ gzip:    10.76 kB
build/client/assets/atlas-B_AAPFrX.js               23.18 kB │ gzip:     9.54 kB
build/client/assets/SourcesPage-9HAp8EoC.js         32.19 kB │ gzip:     8.46 kB
build/client/assets/transport-DZFQFqdz.js           34.86 kB │ gzip:    15.24 kB
build/client/assets/SourcesNote-Dc56Qloe.js         39.01 kB │ gzip:    14.91 kB
build/client/assets/CityPage-DjIxpOcJ.js            52.17 kB │ gzip:    19.45 kB
build/client/assets/jsx-runtime-CnbWJCR4.js        127.16 kB │ gzip:    41.93 kB
build/client/assets/entry.client-CQ10Nt2o.js       186.53 kB │ gzip:    58.89 kB
build/client/assets/Cesium-CsldJg6P.js           4,724.63 kB │ gzip: 1,304.40 kB

[32m✓ built in 4.43s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 66 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m
[2mbuild\server\assets\server-build-BBuZXC1J.css[22m

Prerender (html): / -> [1mbuild\client\index.html[22m
Prerender (html): /map -> [1mbuild\client\map\index.html[22m
Prerender (html): /guide/entry -> [1mbuild\client\guide\entry\index.html[22m
Prerender (html): /guide/payments -> [1mbuild\client\guide\payments\index.html[22m
Prerender (html): /guide/notes -> [1mbuild\client\guide\notes\index.html[22m
Prerender (html): /share -> [1mbuild\client\share\index.html[22m
Prerender (html): /ask -> [1mbuild\client\ask\index.html[22m
Prerender (html): /sources -> [1mbuild\client\sources\index.html[22m
Prerender (html): /city/beijing -> [1mbuild\client\city\beijing\index.html[22m
Prerender (html): /city/shanghai -> [1mbuild\client\city\shanghai\index.html[22m
Prerender (html): /city/guangzhou -> [1mbuild\client\city\guangzhou\index.html[22m
Prerender (html): /city/shenzhen -> [1mbuild\client\city\shenzhen\index.html[22m
Prerender (html): SPA Fallback -> [1mbuild\client\__spa-fallback.html[22m
Removing the server build in [32mC:\Users\h\Documents\New project 2\v2\build\server[39m due to ssr:false
computing gzip size...
build/server/.vite/manifest.json                 0.74 kB │ gzip:  0.27 kB
build/server/assets/Map3D-B9DDZdqH.css          24.01 kB │ gzip:  5.37 kB
build/server/assets/server-build-BBuZXC1J.css   41.09 kB │ gzip:  7.74 kB
build/server/assets/Map3D-DZorFu3b.js           14.68 kB │ gzip:  5.16 kB
build/server/assets/cityRoutes-u8IPbmeT.js      30.78 kB │ gzip: 10.55 kB
build/server/index.js                          309.10 kB │ gzip: 96.89 kB

[32m✓ built in 547ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:dot-server (41%)
  - react-router:virtual-modules (34%)
  - react-router:inject-hmr-runtime (16%)
  - react-router:hmr-runtime (5%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb6ec598a14c787f3bddefd8ab4c4f84af5..37cefdad4b113312073aa51f69f121bcc0e64bad
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,11 +1,17 @@
-import { useEffect, useMemo, useRef, useState } from "react";
-import "cesium/Build/Cesium/Widgets/widgets.css";
-import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
-import type { Lang } from "../../data/i18n";
-import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
-
-type CesiumModule = typeof import("cesium");
-type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
+import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
+import "cesium/Build/Cesium/Widgets/widgets.css";
+import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
+import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
+import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
+
+type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
+type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
   province: ProvinceRecord;
@@ -34,8 +40,9 @@
   north: 54
 };
 
-const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
-const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
+const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -206,17 +213,20 @@
   });
 }
 
-function addLabelEntity(
-  Cesium: CesiumModule,
-  viewer: CesiumViewer,
-  position: LonLat,
-  text: string,
-  color: string,
-  size: number
-) {
-  viewer.entities.add({
-    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
-    point: {
+function addLabelEntity(
+  Cesium: CesiumModule,
+  viewer: CesiumViewer,
+  position: LonLat,
+  text: string,
+  color: string,
+  size: number,
+  entityId?: string
+) {
+  viewer.entities.add({
+    id: entityId,
+    name: text,
+    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
+    point: {
       pixelSize: size,
       color: Cesium.Color.fromCssColorString(color),
       outlineColor: Cesium.Color.WHITE,
@@ -237,7 +247,7 @@
   });
 }
 
-function addProvinceEntities(
+function addProvinceEntities(
   Cesium: CesiumModule,
   viewer: CesiumViewer,
   province: ProvinceRecord,
@@ -248,10 +258,18 @@
   const center = percentToLonLat(area.x, area.y);
   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 
-  province.cities.forEach((city, index) => {
-    const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
-  });
+  province.cities.forEach((city, index) => {
+    const position = getCityPosition(city.id, area, index + 1);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
+  });
 
   const attractions = provinceAttractionSeed[provinceId] ?? [];
   attractions.forEach((attraction, index) => {
@@ -278,25 +296,55 @@
   });
 }
 
-function resolveProvince(provinceId: string, province: ProvinceRecord) {
-  return atlasData.find((item) => item.id === provinceId) ?? province;
-}
-
-export default function Map3D({ province, provinceId, lang }: Map3DProps) {
-  const containerRef = useRef<HTMLDivElement | null>(null);
-  const viewerRef = useRef<CesiumViewer | null>(null);
-  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
-  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
-  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
-
-  useEffect(() => {
+function resolveProvince(provinceId: string, province: ProvinceRecord) {
+  return atlasData.find((item) => item.id === provinceId) ?? province;
+}
+
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const candidate = (picked as { id?: unknown }).id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
+export default function Map3D({ province, provinceId, lang }: Map3DProps) {
+  const containerRef = useRef<HTMLDivElement | null>(null);
+  const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
+  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
+  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
+  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
+
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
+  useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
 
     if (!token) return;
 
-    let cancelled = false;
-    let creditContainer: HTMLDivElement | null = document.createElement("div");
+    let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
+    let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
 
@@ -341,11 +389,18 @@
 
         const area = getProvinceArea(provinceId);
         const bounds = areaToCameraBounds(area);
-        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
-        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
-        focusCamera(Cesium, viewer, bounds);
-
-        if (!cancelled) setLoadState("ready");
+        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
+        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
+        focusCamera(Cesium, viewer, bounds);
+
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
+        if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
         if (!cancelled) {
@@ -356,10 +411,14 @@
 
     void initCesium();
 
-    return () => {
-      cancelled = true;
-      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
-        viewerRef.current.destroy();
+    return () => {
+      cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
+      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
+        viewerRef.current.destroy();
       }
       viewerRef.current = null;
       if (creditContainer?.parentNode) {
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..2d581f4ee1dd4b20c757bf0c031de1475fb239b2
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,12 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git diff -- src/components/map/Map3D.tsx src/components/map/ProvinceInfoCard.tsx src/lib/cityRoutes.ts' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short src/components/map/Map3D.tsx src/components/map/ProvinceInfoCard.tsx src/lib/cityRoutes.ts' in c:\Users\h\Documents\New project 2\v2
 succeeded in 968ms:
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb..37cefda 100644
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,10 +1,16 @@
 import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
 import "cesium/Build/Cesium/Widgets/widgets.css";
 import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
 import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
 import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
 
 type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
 type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
@@ -36,6 +42,7 @@ const CHINA_BOUNDS = {
 
 const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
 const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -212,9 +219,12 @@ function addLabelEntity(
   position: LonLat,
   text: string,
   color: string,
-  size: number
+  size: number,
+  entityId?: string
 ) {
   viewer.entities.add({
+    id: entityId,
+    name: text,
     position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
     point: {
       pixelSize: size,
@@ -250,7 +260,15 @@ function addProvinceEntities(
 
   province.cities.forEach((city, index) => {
     const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
   });
 
   const attractions = provinceAttractionSeed[provinceId] ?? [];
@@ -282,13 +300,42 @@ function resolveProvince(provinceId: string, province: ProvinceRecord) {
   return atlasData.find((item) => item.id === provinceId) ?? province;
 }
 
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const candidate = (picked as { id?: unknown }).id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
 export default function Map3D({ province, provinceId, lang }: Map3DProps) {
   const containerRef = useRef<HTMLDivElement | null>(null);
   const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
   const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
   const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
   const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
 
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
   useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
@@ -296,6 +343,7 @@ export default function Map3D({ province, provinceId, lang }: Map3DProps) {
     if (!token) return;
 
     let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
     let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
@@ -345,6 +393,13 @@ export default function Map3D({ province, provinceId, lang }: Map3DProps) {
         addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
         focusCamera(Cesium, viewer, bounds);
 
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
         if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
@@ -358,6 +413,10 @@ export default function Map3D({ province, provinceId, lang }: Map3DProps) {
 
     return () => {
       cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
       if (viewerRef.current && !viewerRef.current.isDestroyed()) {
         viewerRef.current.destroy();
       }
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2f..df60b84 100644
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -3,13 +3,7 @@ import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 import { provinceAttractionSeed } from "../../data/atlas";
 import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -25,7 +19,7 @@ export default function ProvinceInfoCard() {
 
   const goToCity = (cityId: string) => {
     recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
+    const phase1 = getPhase1CityRouteId(cityId);
     if (phase1) {
       navigate(`/city/${phase1}`);
       return;
warning: in the working copy of 'v2/src/components/map/Map3D.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/map/ProvinceInfoCard.tsx', LF will be replaced by CRLF the next time Git touches it

 succeeded in 973ms:
 M src/components/map/Map3D.tsx
 M src/components/map/ProvinceInfoCard.tsx
?? src/lib/cityRoutes.ts

diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb6ec598a14c787f3bddefd8ab4c4f84af5..37cefdad4b113312073aa51f69f121bcc0e64bad
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,11 +1,17 @@
-import { useEffect, useMemo, useRef, useState } from "react";
-import "cesium/Build/Cesium/Widgets/widgets.css";
-import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
-import type { Lang } from "../../data/i18n";
-import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
-
-type CesiumModule = typeof import("cesium");
-type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
+import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
+import "cesium/Build/Cesium/Widgets/widgets.css";
+import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
+import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
+import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
+
+type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
+type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
   province: ProvinceRecord;
@@ -34,8 +40,9 @@
   north: 54
 };
 
-const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
-const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
+const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -206,17 +213,20 @@
   });
 }
 
-function addLabelEntity(
-  Cesium: CesiumModule,
-  viewer: CesiumViewer,
-  position: LonLat,
-  text: string,
-  color: string,
-  size: number
-) {
-  viewer.entities.add({
-    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
-    point: {
+function addLabelEntity(
+  Cesium: CesiumModule,
+  viewer: CesiumViewer,
+  position: LonLat,
+  text: string,
+  color: string,
+  size: number,
+  entityId?: string
+) {
+  viewer.entities.add({
+    id: entityId,
+    name: text,
+    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
+    point: {
       pixelSize: size,
       color: Cesium.Color.fromCssColorString(color),
       outlineColor: Cesium.Color.WHITE,
@@ -237,7 +247,7 @@
   });
 }
 
-function addProvinceEntities(
+function addProvinceEntities(
   Cesium: CesiumModule,
   viewer: CesiumViewer,
   province: ProvinceRecord,
@@ -248,10 +258,18 @@
   const center = percentToLonLat(area.x, area.y);
   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 
-  province.cities.forEach((city, index) => {
-    const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
-  });
+  province.cities.forEach((city, index) => {
+    const position = getCityPosition(city.id, area, index + 1);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
+  });
 
   const attractions = provinceAttractionSeed[provinceId] ?? [];
   attractions.forEach((attraction, index) => {
@@ -278,25 +296,55 @@
   });
 }
 
-function resolveProvince(provinceId: string, province: ProvinceRecord) {
-  return atlasData.find((item) => item.id === provinceId) ?? province;
-}
-
-export default function Map3D({ province, provinceId, lang }: Map3DProps) {
-  const containerRef = useRef<HTMLDivElement | null>(null);
-  const viewerRef = useRef<CesiumViewer | null>(null);
-  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
-  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
-  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
-
-  useEffect(() => {
+function resolveProvince(provinceId: string, province: ProvinceRecord) {
+  return atlasData.find((item) => item.id === provinceId) ?? province;
+}
+
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const candidate = (picked as { id?: unknown }).id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
+export default function Map3D({ province, provinceId, lang }: Map3DProps) {
+  const containerRef = useRef<HTMLDivElement | null>(null);
+  const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
+  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
+  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
+  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
+
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
+  useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
 
     if (!token) return;
 
-    let cancelled = false;
-    let creditContainer: HTMLDivElement | null = document.createElement("div");
+    let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
+    let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
 
@@ -341,11 +389,18 @@
 
         const area = getProvinceArea(provinceId);
         const bounds = areaToCameraBounds(area);
-        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
-        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
-        focusCamera(Cesium, viewer, bounds);
-
-        if (!cancelled) setLoadState("ready");
+        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
+        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
+        focusCamera(Cesium, viewer, bounds);
+
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
+        if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
         if (!cancelled) {
@@ -356,10 +411,14 @@
 
     void initCesium();
 
-    return () => {
-      cancelled = true;
-      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
-        viewerRef.current.destroy();
+    return () => {
+      cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
+      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
+        viewerRef.current.destroy();
       }
       viewerRef.current = null;
       if (creditContainer?.parentNode) {
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..2d581f4ee1dd4b20c757bf0c031de1475fb239b2
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,12 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}

codex
类型检查和构建都通过。最后我再收紧一下 pick helper 的兼容性，确保无论 Cesium 返回的是 primitive 包着 entity，还是直接返回 entity，都能识别城市 id，然后复跑检查。
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\map\Map3D.tsx
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb6ec598a14c787f3bddefd8ab4c4f84af5..13b204311c9db573bbeeae883292ab5273af6721
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,11 +1,17 @@
-import { useEffect, useMemo, useRef, useState } from "react";
-import "cesium/Build/Cesium/Widgets/widgets.css";
-import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
-import type { Lang } from "../../data/i18n";
-import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
-
-type CesiumModule = typeof import("cesium");
-type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
+import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
+import "cesium/Build/Cesium/Widgets/widgets.css";
+import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
+import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
+import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
+
+type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
+type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
   province: ProvinceRecord;
@@ -34,8 +40,9 @@
   north: 54
 };
 
-const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
-const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
+const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -206,17 +213,20 @@
   });
 }
 
-function addLabelEntity(
-  Cesium: CesiumModule,
-  viewer: CesiumViewer,
-  position: LonLat,
-  text: string,
-  color: string,
-  size: number
-) {
-  viewer.entities.add({
-    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
-    point: {
+function addLabelEntity(
+  Cesium: CesiumModule,
+  viewer: CesiumViewer,
+  position: LonLat,
+  text: string,
+  color: string,
+  size: number,
+  entityId?: string
+) {
+  viewer.entities.add({
+    id: entityId,
+    name: text,
+    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
+    point: {
       pixelSize: size,
       color: Cesium.Color.fromCssColorString(color),
       outlineColor: Cesium.Color.WHITE,
@@ -237,7 +247,7 @@
   });
 }
 
-function addProvinceEntities(
+function addProvinceEntities(
   Cesium: CesiumModule,
   viewer: CesiumViewer,
   province: ProvinceRecord,
@@ -248,10 +258,18 @@
   const center = percentToLonLat(area.x, area.y);
   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 
-  province.cities.forEach((city, index) => {
-    const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
-  });
+  province.cities.forEach((city, index) => {
+    const position = getCityPosition(city.id, area, index + 1);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
+  });
 
   const attractions = provinceAttractionSeed[provinceId] ?? [];
   attractions.forEach((attraction, index) => {
@@ -278,25 +296,57 @@
   });
 }
 
-function resolveProvince(provinceId: string, province: ProvinceRecord) {
-  return atlasData.find((item) => item.id === provinceId) ?? province;
-}
-
-export default function Map3D({ province, provinceId, lang }: Map3DProps) {
-  const containerRef = useRef<HTMLDivElement | null>(null);
-  const viewerRef = useRef<CesiumViewer | null>(null);
-  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
-  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
-  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
-
-  useEffect(() => {
+function resolveProvince(provinceId: string, province: ProvinceRecord) {
+  return atlasData.find((item) => item.id === provinceId) ?? province;
+}
+
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const pickedWithId = picked as { id?: unknown };
+  if (typeof pickedWithId.id === "string") return picked as CesiumEntity;
+  const candidate = pickedWithId.id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
+export default function Map3D({ province, provinceId, lang }: Map3DProps) {
+  const containerRef = useRef<HTMLDivElement | null>(null);
+  const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
+  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
+  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
+  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
+
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
+  useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
 
     if (!token) return;
 
-    let cancelled = false;
-    let creditContainer: HTMLDivElement | null = document.createElement("div");
+    let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
+    let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
 
@@ -341,11 +391,18 @@
 
         const area = getProvinceArea(provinceId);
         const bounds = areaToCameraBounds(area);
-        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
-        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
-        focusCamera(Cesium, viewer, bounds);
-
-        if (!cancelled) setLoadState("ready");
+        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
+        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
+        focusCamera(Cesium, viewer, bounds);
+
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
+        if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
         if (!cancelled) {
@@ -356,10 +413,14 @@
 
     void initCesium();
 
-    return () => {
-      cancelled = true;
-      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
-        viewerRef.current.destroy();
+    return () => {
+      cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
+      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
+        viewerRef.current.destroy();
       }
       viewerRef.current = null;
       if (creditContainer?.parentNode) {
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..2d581f4ee1dd4b20c757bf0c031de1475fb239b2
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,12 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}

diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb6ec598a14c787f3bddefd8ab4c4f84af5..13b204311c9db573bbeeae883292ab5273af6721
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,11 +1,17 @@
-import { useEffect, useMemo, useRef, useState } from "react";
-import "cesium/Build/Cesium/Widgets/widgets.css";
-import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
-import type { Lang } from "../../data/i18n";
-import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
-
-type CesiumModule = typeof import("cesium");
-type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
+import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
+import "cesium/Build/Cesium/Widgets/widgets.css";
+import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
+import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
+import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
+
+type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
+type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
   province: ProvinceRecord;
@@ -34,8 +40,9 @@
   north: 54
 };
 
-const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
-const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
+const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -206,17 +213,20 @@
   });
 }
 
-function addLabelEntity(
-  Cesium: CesiumModule,
-  viewer: CesiumViewer,
-  position: LonLat,
-  text: string,
-  color: string,
-  size: number
-) {
-  viewer.entities.add({
-    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
-    point: {
+function addLabelEntity(
+  Cesium: CesiumModule,
+  viewer: CesiumViewer,
+  position: LonLat,
+  text: string,
+  color: string,
+  size: number,
+  entityId?: string
+) {
+  viewer.entities.add({
+    id: entityId,
+    name: text,
+    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
+    point: {
       pixelSize: size,
       color: Cesium.Color.fromCssColorString(color),
       outlineColor: Cesium.Color.WHITE,
@@ -237,7 +247,7 @@
   });
 }
 
-function addProvinceEntities(
+function addProvinceEntities(
   Cesium: CesiumModule,
   viewer: CesiumViewer,
   province: ProvinceRecord,
@@ -248,10 +258,18 @@
   const center = percentToLonLat(area.x, area.y);
   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 
-  province.cities.forEach((city, index) => {
-    const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
-  });
+  province.cities.forEach((city, index) => {
+    const position = getCityPosition(city.id, area, index + 1);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
+  });
 
   const attractions = provinceAttractionSeed[provinceId] ?? [];
   attractions.forEach((attraction, index) => {
@@ -278,25 +296,57 @@
   });
 }
 
-function resolveProvince(provinceId: string, province: ProvinceRecord) {
-  return atlasData.find((item) => item.id === provinceId) ?? province;
-}
-
-export default function Map3D({ province, provinceId, lang }: Map3DProps) {
-  const containerRef = useRef<HTMLDivElement | null>(null);
-  const viewerRef = useRef<CesiumViewer | null>(null);
-  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
-  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
-  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
-
-  useEffect(() => {
+function resolveProvince(provinceId: string, province: ProvinceRecord) {
+  return atlasData.find((item) => item.id === provinceId) ?? province;
+}
+
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const pickedWithId = picked as { id?: unknown };
+  if (typeof pickedWithId.id === "string") return picked as CesiumEntity;
+  const candidate = pickedWithId.id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
+export default function Map3D({ province, provinceId, lang }: Map3DProps) {
+  const containerRef = useRef<HTMLDivElement | null>(null);
+  const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
+  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
+  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
+  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
+
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
+  useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
 
     if (!token) return;
 
-    let cancelled = false;
-    let creditContainer: HTMLDivElement | null = document.createElement("div");
+    let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
+    let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
 
@@ -341,11 +391,18 @@
 
         const area = getProvinceArea(provinceId);
         const bounds = areaToCameraBounds(area);
-        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
-        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
-        focusCamera(Cesium, viewer, bounds);
-
-        if (!cancelled) setLoadState("ready");
+        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
+        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
+        focusCamera(Cesium, viewer, bounds);
+
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
+        if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
         if (!cancelled) {
@@ -356,10 +413,14 @@
 
     void initCesium();
 
-    return () => {
-      cancelled = true;
-      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
-        viewerRef.current.destroy();
+    return () => {
+      cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
+      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
+        viewerRef.current.destroy();
       }
       viewerRef.current = null;
       if (creditContainer?.parentNode) {
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..2d581f4ee1dd4b20c757bf0c031de1475fb239b2
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,12 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 2076ms:
 succeeded in 8252ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1503 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                     6.03 kB │ gzip:     0.93 kB
build/client/assets/Map3D-B9DDZdqH.css              24.01 kB │ gzip:     5.37 kB
build/client/assets/root-BBuZXC1J.css               41.09 kB │ gzip:     7.74 kB
build/client/assets/language-D_sidw9C.js             0.26 kB │ gzip:     0.21 kB
build/client/assets/clsx-H-aRJLpe.js                 0.36 kB │ gzip:     0.23 kB
build/client/assets/cityRoutes-C8LpQgYp.js           0.56 kB │ gzip:     0.37 kB
build/client/assets/chunk-BA_0og6f.js                0.95 kB │ gzip:     0.56 kB
build/client/assets/provinceColors-ChY8jySF.js       1.72 kB │ gzip:     0.91 kB
build/client/assets/HomePage-B317R2EY.js             4.69 kB │ gzip:     2.12 kB
build/client/assets/SharePage-SOKeWOZv.js            7.48 kB │ gzip:     2.76 kB
build/client/assets/phase2-preview-DcPyXPqD.js       7.59 kB │ gzip:     4.48 kB
build/client/assets/AskPage-D4TBpFC4.js              7.62 kB │ gzip:     2.92 kB
build/client/assets/Map3D-dwQnEaSY.js                8.71 kB │ gzip:     4.13 kB
build/client/assets/root-C7TFZHRt.js                 9.47 kB │ gzip:     4.57 kB
build/client/assets/GuidePage-CZq-6qwa.js           10.80 kB │ gzip:     5.11 kB
build/client/assets/MapPage-2onvcjdZ.js             11.34 kB │ gzip:     4.14 kB
build/client/assets/practical-other-Bpl292H6.js     22.32 kB │ gzip:    10.76 kB
build/client/assets/atlas-B_AAPFrX.js               23.18 kB │ gzip:     9.54 kB
build/client/assets/SourcesPage-9HAp8EoC.js         32.19 kB │ gzip:     8.46 kB
build/client/assets/transport-DZFQFqdz.js           34.86 kB │ gzip:    15.24 kB
build/client/assets/SourcesNote-Dc56Qloe.js         39.01 kB │ gzip:    14.91 kB
build/client/assets/CityPage-DjIxpOcJ.js            52.17 kB │ gzip:    19.45 kB
build/client/assets/jsx-runtime-CnbWJCR4.js        127.16 kB │ gzip:    41.93 kB
build/client/assets/entry.client-CQ10Nt2o.js       186.53 kB │ gzip:    58.89 kB
build/client/assets/Cesium-CsldJg6P.js           4,724.63 kB │ gzip: 1,304.40 kB

[32m✓ built in 3.92s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 66 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m
[2mbuild\server\assets\server-build-BBuZXC1J.css[22m

Prerender (html): / -> [1mbuild\client\index.html[22m
Prerender (html): /map -> [1mbuild\client\map\index.html[22m
Prerender (html): /guide/entry -> [1mbuild\client\guide\entry\index.html[22m
Prerender (html): /guide/payments -> [1mbuild\client\guide\payments\index.html[22m
Prerender (html): /guide/notes -> [1mbuild\client\guide\notes\index.html[22m
Prerender (html): /share -> [1mbuild\client\share\index.html[22m
Prerender (html): /ask -> [1mbuild\client\ask\index.html[22m
Prerender (html): /sources -> [1mbuild\client\sources\index.html[22m
Prerender (html): /city/beijing -> [1mbuild\client\city\beijing\index.html[22m
Prerender (html): /city/shanghai -> [1mbuild\client\city\shanghai\index.html[22m
Prerender (html): /city/guangzhou -> [1mbuild\client\city\guangzhou\index.html[22m
Prerender (html): /city/shenzhen -> [1mbuild\client\city\shenzhen\index.html[22m
Prerender (html): SPA Fallback -> [1mbuild\client\__spa-fallback.html[22m
Removing the server build in [32mC:\Users\h\Documents\New project 2\v2\build\server[39m due to ssr:false
computing gzip size...
build/server/.vite/manifest.json                 0.74 kB │ gzip:  0.27 kB
build/server/assets/Map3D-B9DDZdqH.css          24.01 kB │ gzip:  5.37 kB
build/server/assets/server-build-BBuZXC1J.css   41.09 kB │ gzip:  7.74 kB
build/server/assets/Map3D-DrIIAqSu.js           14.77 kB │ gzip:  5.18 kB
build/server/assets/cityRoutes-u8IPbmeT.js      30.78 kB │ gzip: 10.55 kB
build/server/index.js                          309.10 kB │ gzip: 96.89 kB

[32m✓ built in 737ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:dot-server (39%)
  - react-router:virtual-modules (37%)
  - react-router:inject-hmr-runtime (16%)
  - react-router:hmr-runtime (5%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb6ec598a14c787f3bddefd8ab4c4f84af5..13b204311c9db573bbeeae883292ab5273af6721
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,11 +1,17 @@
-import { useEffect, useMemo, useRef, useState } from "react";
-import "cesium/Build/Cesium/Widgets/widgets.css";
-import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
-import type { Lang } from "../../data/i18n";
-import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
-
-type CesiumModule = typeof import("cesium");
-type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
+import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
+import "cesium/Build/Cesium/Widgets/widgets.css";
+import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
+import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
+import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
+
+type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
+type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
   province: ProvinceRecord;
@@ -34,8 +40,9 @@
   north: 54
 };
 
-const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
-const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
+const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -206,17 +213,20 @@
   });
 }
 
-function addLabelEntity(
-  Cesium: CesiumModule,
-  viewer: CesiumViewer,
-  position: LonLat,
-  text: string,
-  color: string,
-  size: number
-) {
-  viewer.entities.add({
-    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
-    point: {
+function addLabelEntity(
+  Cesium: CesiumModule,
+  viewer: CesiumViewer,
+  position: LonLat,
+  text: string,
+  color: string,
+  size: number,
+  entityId?: string
+) {
+  viewer.entities.add({
+    id: entityId,
+    name: text,
+    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
+    point: {
       pixelSize: size,
       color: Cesium.Color.fromCssColorString(color),
       outlineColor: Cesium.Color.WHITE,
@@ -237,7 +247,7 @@
   });
 }
 
-function addProvinceEntities(
+function addProvinceEntities(
   Cesium: CesiumModule,
   viewer: CesiumViewer,
   province: ProvinceRecord,
@@ -248,10 +258,18 @@
   const center = percentToLonLat(area.x, area.y);
   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 
-  province.cities.forEach((city, index) => {
-    const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
-  });
+  province.cities.forEach((city, index) => {
+    const position = getCityPosition(city.id, area, index + 1);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
+  });
 
   const attractions = provinceAttractionSeed[provinceId] ?? [];
   attractions.forEach((attraction, index) => {
@@ -278,25 +296,57 @@
   });
 }
 
-function resolveProvince(provinceId: string, province: ProvinceRecord) {
-  return atlasData.find((item) => item.id === provinceId) ?? province;
-}
-
-export default function Map3D({ province, provinceId, lang }: Map3DProps) {
-  const containerRef = useRef<HTMLDivElement | null>(null);
-  const viewerRef = useRef<CesiumViewer | null>(null);
-  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
-  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
-  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
-
-  useEffect(() => {
+function resolveProvince(provinceId: string, province: ProvinceRecord) {
+  return atlasData.find((item) => item.id === provinceId) ?? province;
+}
+
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const pickedWithId = picked as { id?: unknown };
+  if (typeof pickedWithId.id === "string") return picked as CesiumEntity;
+  const candidate = pickedWithId.id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
+export default function Map3D({ province, provinceId, lang }: Map3DProps) {
+  const containerRef = useRef<HTMLDivElement | null>(null);
+  const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
+  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
+  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
+  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
+
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
+  useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
 
     if (!token) return;
 
-    let cancelled = false;
-    let creditContainer: HTMLDivElement | null = document.createElement("div");
+    let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
+    let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
 
@@ -341,11 +391,18 @@
 
         const area = getProvinceArea(provinceId);
         const bounds = areaToCameraBounds(area);
-        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
-        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
-        focusCamera(Cesium, viewer, bounds);
-
-        if (!cancelled) setLoadState("ready");
+        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
+        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
+        focusCamera(Cesium, viewer, bounds);
+
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
+        if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
         if (!cancelled) {
@@ -356,10 +413,14 @@
 
     void initCesium();
 
-    return () => {
-      cancelled = true;
-      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
-        viewerRef.current.destroy();
+    return () => {
+      cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
+      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
+        viewerRef.current.destroy();
       }
       viewerRef.current = null;
       if (creditContainer?.parentNode) {
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..2d581f4ee1dd4b20c757bf0c031de1475fb239b2
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,12 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}

  ✓ Inspect map label rendering and routing context
  ✓ Patch Phase 1 city label navigation
  ✓ Run TypeScript and production build
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb6ec598a14c787f3bddefd8ab4c4f84af5..13b204311c9db573bbeeae883292ab5273af6721
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,11 +1,17 @@
-import { useEffect, useMemo, useRef, useState } from "react";
-import "cesium/Build/Cesium/Widgets/widgets.css";
-import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
-import type { Lang } from "../../data/i18n";
-import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
-
-type CesiumModule = typeof import("cesium");
-type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
+import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
+import "cesium/Build/Cesium/Widgets/widgets.css";
+import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
+import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
+import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
+
+type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
+type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
   province: ProvinceRecord;
@@ -34,8 +40,9 @@
   north: 54
 };
 
-const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
-const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
+const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -206,17 +213,20 @@
   });
 }
 
-function addLabelEntity(
-  Cesium: CesiumModule,
-  viewer: CesiumViewer,
-  position: LonLat,
-  text: string,
-  color: string,
-  size: number
-) {
-  viewer.entities.add({
-    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
-    point: {
+function addLabelEntity(
+  Cesium: CesiumModule,
+  viewer: CesiumViewer,
+  position: LonLat,
+  text: string,
+  color: string,
+  size: number,
+  entityId?: string
+) {
+  viewer.entities.add({
+    id: entityId,
+    name: text,
+    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
+    point: {
       pixelSize: size,
       color: Cesium.Color.fromCssColorString(color),
       outlineColor: Cesium.Color.WHITE,
@@ -237,7 +247,7 @@
   });
 }
 
-function addProvinceEntities(
+function addProvinceEntities(
   Cesium: CesiumModule,
   viewer: CesiumViewer,
   province: ProvinceRecord,
@@ -248,10 +258,18 @@
   const center = percentToLonLat(area.x, area.y);
   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 
-  province.cities.forEach((city, index) => {
-    const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
-  });
+  province.cities.forEach((city, index) => {
+    const position = getCityPosition(city.id, area, index + 1);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
+  });
 
   const attractions = provinceAttractionSeed[provinceId] ?? [];
   attractions.forEach((attraction, index) => {
@@ -278,25 +296,57 @@
   });
 }
 
-function resolveProvince(provinceId: string, province: ProvinceRecord) {
-  return atlasData.find((item) => item.id === provinceId) ?? province;
-}
-
-export default function Map3D({ province, provinceId, lang }: Map3DProps) {
-  const containerRef = useRef<HTMLDivElement | null>(null);
-  const viewerRef = useRef<CesiumViewer | null>(null);
-  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
-  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
-  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
-
-  useEffect(() => {
+function resolveProvince(provinceId: string, province: ProvinceRecord) {
+  return atlasData.find((item) => item.id === provinceId) ?? province;
+}
+
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const pickedWithId = picked as { id?: unknown };
+  if (typeof pickedWithId.id === "string") return picked as CesiumEntity;
+  const candidate = pickedWithId.id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
+export default function Map3D({ province, provinceId, lang }: Map3DProps) {
+  const containerRef = useRef<HTMLDivElement | null>(null);
+  const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
+  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
+  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
+  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
+
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
+  useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
 
     if (!token) return;
 
-    let cancelled = false;
-    let creditContainer: HTMLDivElement | null = document.createElement("div");
+    let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
+    let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
 
@@ -341,11 +391,18 @@
 
         const area = getProvinceArea(provinceId);
         const bounds = areaToCameraBounds(area);
-        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
-        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
-        focusCamera(Cesium, viewer, bounds);
-
-        if (!cancelled) setLoadState("ready");
+        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
+        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
+        focusCamera(Cesium, viewer, bounds);
+
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
+        if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
         if (!cancelled) {
@@ -356,10 +413,14 @@
 
     void initCesium();
 
-    return () => {
-      cancelled = true;
-      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
-        viewerRef.current.destroy();
+    return () => {
+      cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
+      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
+        viewerRef.current.destroy();
       }
       viewerRef.current = null;
       if (creditContainer?.parentNode) {
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..2d581f4ee1dd4b20c757bf0c031de1475fb239b2
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,12 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}

codex
我注意到 3D 里景点也是同一套 Cesium label。为了覆盖“城市 / 景点 label”的原始要求，我会把能明确归属 Phase 1 城市的景点也挂到对应 `/city/...`，广东的开平碉楼不归 4 城之一，保持不跳转。
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\lib\cityRoutes.ts
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb6ec598a14c787f3bddefd8ab4c4f84af5..13b204311c9db573bbeeae883292ab5273af6721
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,11 +1,17 @@
-import { useEffect, useMemo, useRef, useState } from "react";
-import "cesium/Build/Cesium/Widgets/widgets.css";
-import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
-import type { Lang } from "../../data/i18n";
-import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
-
-type CesiumModule = typeof import("cesium");
-type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
+import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
+import "cesium/Build/Cesium/Widgets/widgets.css";
+import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
+import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
+import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
+
+type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
+type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
   province: ProvinceRecord;
@@ -34,8 +40,9 @@
   north: 54
 };
 
-const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
-const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
+const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -206,17 +213,20 @@
   });
 }
 
-function addLabelEntity(
-  Cesium: CesiumModule,
-  viewer: CesiumViewer,
-  position: LonLat,
-  text: string,
-  color: string,
-  size: number
-) {
-  viewer.entities.add({
-    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
-    point: {
+function addLabelEntity(
+  Cesium: CesiumModule,
+  viewer: CesiumViewer,
+  position: LonLat,
+  text: string,
+  color: string,
+  size: number,
+  entityId?: string
+) {
+  viewer.entities.add({
+    id: entityId,
+    name: text,
+    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
+    point: {
       pixelSize: size,
       color: Cesium.Color.fromCssColorString(color),
       outlineColor: Cesium.Color.WHITE,
@@ -237,7 +247,7 @@
   });
 }
 
-function addProvinceEntities(
+function addProvinceEntities(
   Cesium: CesiumModule,
   viewer: CesiumViewer,
   province: ProvinceRecord,
@@ -248,10 +258,18 @@
   const center = percentToLonLat(area.x, area.y);
   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 
-  province.cities.forEach((city, index) => {
-    const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
-  });
+  province.cities.forEach((city, index) => {
+    const position = getCityPosition(city.id, area, index + 1);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
+  });
 
   const attractions = provinceAttractionSeed[provinceId] ?? [];
   attractions.forEach((attraction, index) => {
@@ -278,25 +296,57 @@
   });
 }
 
-function resolveProvince(provinceId: string, province: ProvinceRecord) {
-  return atlasData.find((item) => item.id === provinceId) ?? province;
-}
-
-export default function Map3D({ province, provinceId, lang }: Map3DProps) {
-  const containerRef = useRef<HTMLDivElement | null>(null);
-  const viewerRef = useRef<CesiumViewer | null>(null);
-  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
-  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
-  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
-
-  useEffect(() => {
+function resolveProvince(provinceId: string, province: ProvinceRecord) {
+  return atlasData.find((item) => item.id === provinceId) ?? province;
+}
+
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const pickedWithId = picked as { id?: unknown };
+  if (typeof pickedWithId.id === "string") return picked as CesiumEntity;
+  const candidate = pickedWithId.id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
+export default function Map3D({ province, provinceId, lang }: Map3DProps) {
+  const containerRef = useRef<HTMLDivElement | null>(null);
+  const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
+  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
+  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
+  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
+
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
+  useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
 
     if (!token) return;
 
-    let cancelled = false;
-    let creditContainer: HTMLDivElement | null = document.createElement("div");
+    let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
+    let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
 
@@ -341,11 +391,18 @@
 
         const area = getProvinceArea(provinceId);
         const bounds = areaToCameraBounds(area);
-        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
-        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
-        focusCamera(Cesium, viewer, bounds);
-
-        if (!cancelled) setLoadState("ready");
+        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
+        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
+        focusCamera(Cesium, viewer, bounds);
+
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
+        if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
         if (!cancelled) {
@@ -356,10 +413,14 @@
 
     void initCesium();
 
-    return () => {
-      cancelled = true;
-      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
-        viewerRef.current.destroy();
+    return () => {
+      cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
+      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
+        viewerRef.current.destroy();
       }
       viewerRef.current = null;
       if (creditContainer?.parentNode) {
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..02a88ec6745cbb0cbb2a9f4fb2cfc2d0d7ffb711
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,27 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+const PHASE1_ATTRACTION_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing|Forbidden City": "beijing",
+  "beijing|Temple of Heaven": "beijing",
+  "beijing|Beijing Central Axis": "beijing",
+  "shanghai|The Bund": "shanghai",
+  "shanghai|Yu Garden": "shanghai",
+  "shanghai|Shanghai Museum": "shanghai",
+  "guangdong|Canton Tower": "guangzhou",
+  "guangdong|Chen Clan Ancestral Hall": "guangzhou"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}
+
+export function getPhase1AttractionRouteId(provinceId: string, attractionEn: string): CityId | undefined {
+  return PHASE1_ATTRACTION_ROUTES[`${provinceId}|${attractionEn}`];
+}

diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb6ec598a14c787f3bddefd8ab4c4f84af5..13b204311c9db573bbeeae883292ab5273af6721
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,11 +1,17 @@
-import { useEffect, useMemo, useRef, useState } from "react";
-import "cesium/Build/Cesium/Widgets/widgets.css";
-import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
-import type { Lang } from "../../data/i18n";
-import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
-
-type CesiumModule = typeof import("cesium");
-type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
+import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
+import "cesium/Build/Cesium/Widgets/widgets.css";
+import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
+import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
+import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
+
+type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
+type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
   province: ProvinceRecord;
@@ -34,8 +40,9 @@
   north: 54
 };
 
-const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
-const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
+const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -206,17 +213,20 @@
   });
 }
 
-function addLabelEntity(
-  Cesium: CesiumModule,
-  viewer: CesiumViewer,
-  position: LonLat,
-  text: string,
-  color: string,
-  size: number
-) {
-  viewer.entities.add({
-    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
-    point: {
+function addLabelEntity(
+  Cesium: CesiumModule,
+  viewer: CesiumViewer,
+  position: LonLat,
+  text: string,
+  color: string,
+  size: number,
+  entityId?: string
+) {
+  viewer.entities.add({
+    id: entityId,
+    name: text,
+    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
+    point: {
       pixelSize: size,
       color: Cesium.Color.fromCssColorString(color),
       outlineColor: Cesium.Color.WHITE,
@@ -237,7 +247,7 @@
   });
 }
 
-function addProvinceEntities(
+function addProvinceEntities(
   Cesium: CesiumModule,
   viewer: CesiumViewer,
   province: ProvinceRecord,
@@ -248,10 +258,18 @@
   const center = percentToLonLat(area.x, area.y);
   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 
-  province.cities.forEach((city, index) => {
-    const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
-  });
+  province.cities.forEach((city, index) => {
+    const position = getCityPosition(city.id, area, index + 1);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
+  });
 
   const attractions = provinceAttractionSeed[provinceId] ?? [];
   attractions.forEach((attraction, index) => {
@@ -278,25 +296,57 @@
   });
 }
 
-function resolveProvince(provinceId: string, province: ProvinceRecord) {
-  return atlasData.find((item) => item.id === provinceId) ?? province;
-}
-
-export default function Map3D({ province, provinceId, lang }: Map3DProps) {
-  const containerRef = useRef<HTMLDivElement | null>(null);
-  const viewerRef = useRef<CesiumViewer | null>(null);
-  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
-  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
-  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
-
-  useEffect(() => {
+function resolveProvince(provinceId: string, province: ProvinceRecord) {
+  return atlasData.find((item) => item.id === provinceId) ?? province;
+}
+
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const pickedWithId = picked as { id?: unknown };
+  if (typeof pickedWithId.id === "string") return picked as CesiumEntity;
+  const candidate = pickedWithId.id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
+export default function Map3D({ province, provinceId, lang }: Map3DProps) {
+  const containerRef = useRef<HTMLDivElement | null>(null);
+  const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
+  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
+  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
+  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
+
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
+  useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
 
     if (!token) return;
 
-    let cancelled = false;
-    let creditContainer: HTMLDivElement | null = document.createElement("div");
+    let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
+    let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
 
@@ -341,11 +391,18 @@
 
         const area = getProvinceArea(provinceId);
         const bounds = areaToCameraBounds(area);
-        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
-        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
-        focusCamera(Cesium, viewer, bounds);
-
-        if (!cancelled) setLoadState("ready");
+        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
+        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
+        focusCamera(Cesium, viewer, bounds);
+
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
+        if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
         if (!cancelled) {
@@ -356,10 +413,14 @@
 
     void initCesium();
 
-    return () => {
-      cancelled = true;
-      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
-        viewerRef.current.destroy();
+    return () => {
+      cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
+      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
+        viewerRef.current.destroy();
       }
       viewerRef.current = null;
       if (creditContainer?.parentNode) {
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..02a88ec6745cbb0cbb2a9f4fb2cfc2d0d7ffb711
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,27 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+const PHASE1_ATTRACTION_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing|Forbidden City": "beijing",
+  "beijing|Temple of Heaven": "beijing",
+  "beijing|Beijing Central Axis": "beijing",
+  "shanghai|The Bund": "shanghai",
+  "shanghai|Yu Garden": "shanghai",
+  "shanghai|Shanghai Museum": "shanghai",
+  "guangdong|Canton Tower": "guangzhou",
+  "guangdong|Chen Clan Ancestral Hall": "guangzhou"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}
+
+export function getPhase1AttractionRouteId(provinceId: string, attractionEn: string): CityId | undefined {
+  return PHASE1_ATTRACTION_ROUTES[`${provinceId}|${attractionEn}`];
+}

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\map\Map3D.tsx
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb6ec598a14c787f3bddefd8ab4c4f84af5..83fd041e29496a2cbdec5a256645075881e67de1
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,11 +1,17 @@
-import { useEffect, useMemo, useRef, useState } from "react";
-import "cesium/Build/Cesium/Widgets/widgets.css";
-import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
-import type { Lang } from "../../data/i18n";
-import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
-
-type CesiumModule = typeof import("cesium");
-type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
+import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
+import "cesium/Build/Cesium/Widgets/widgets.css";
+import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
+import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1AttractionRouteId, getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
+import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
+
+type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
+type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
   province: ProvinceRecord;
@@ -34,8 +40,10 @@
   north: 54
 };
 
-const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
-const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
+const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
+const CITY_ROUTE_ENTITY_PREFIX = "city-route:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -206,17 +214,20 @@
   });
 }
 
-function addLabelEntity(
-  Cesium: CesiumModule,
-  viewer: CesiumViewer,
-  position: LonLat,
-  text: string,
-  color: string,
-  size: number
-) {
-  viewer.entities.add({
-    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
-    point: {
+function addLabelEntity(
+  Cesium: CesiumModule,
+  viewer: CesiumViewer,
+  position: LonLat,
+  text: string,
+  color: string,
+  size: number,
+  entityId?: string
+) {
+  viewer.entities.add({
+    id: entityId,
+    name: text,
+    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
+    point: {
       pixelSize: size,
       color: Cesium.Color.fromCssColorString(color),
       outlineColor: Cesium.Color.WHITE,
@@ -237,7 +248,7 @@
   });
 }
 
-function addProvinceEntities(
+function addProvinceEntities(
   Cesium: CesiumModule,
   viewer: CesiumViewer,
   province: ProvinceRecord,
@@ -248,17 +259,34 @@
   const center = percentToLonLat(area.x, area.y);
   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 
-  province.cities.forEach((city, index) => {
-    const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
-  });
+  province.cities.forEach((city, index) => {
+    const position = getCityPosition(city.id, area, index + 1);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
+  });
 
-  const attractions = provinceAttractionSeed[provinceId] ?? [];
-  attractions.forEach((attraction, index) => {
-    const position = getAttractionPosition(area, index);
-    addLabelEntity(Cesium, viewer, position, getEntityText(attraction.zh, attraction.en, lang), "#f59e0b", 9);
-  });
-}
+  const attractions = provinceAttractionSeed[provinceId] ?? [];
+  attractions.forEach((attraction, index) => {
+    const position = getAttractionPosition(area, index);
+    const routeId = getPhase1AttractionRouteId(provinceId, attraction.en);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(attraction.zh, attraction.en, lang),
+      "#f59e0b",
+      9,
+      routeId ? `${CITY_ROUTE_ENTITY_PREFIX}${routeId}` : undefined
+    );
+  });
+}
 
 function focusCamera(Cesium: CesiumModule, viewer: CesiumViewer, bounds: CameraBounds) {
   const width = bounds.east - bounds.west;
@@ -278,25 +306,67 @@
   });
 }
 
-function resolveProvince(provinceId: string, province: ProvinceRecord) {
-  return atlasData.find((item) => item.id === provinceId) ?? province;
-}
-
-export default function Map3D({ province, provinceId, lang }: Map3DProps) {
-  const containerRef = useRef<HTMLDivElement | null>(null);
-  const viewerRef = useRef<CesiumViewer | null>(null);
-  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
-  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
-  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
-
-  useEffect(() => {
+function resolveProvince(provinceId: string, province: ProvinceRecord) {
+  return atlasData.find((item) => item.id === provinceId) ?? province;
+}
+
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const pickedWithId = picked as { id?: unknown };
+  if (typeof pickedWithId.id === "string") return picked as CesiumEntity;
+  const candidate = pickedWithId.id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
+function getPickedRouteCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ROUTE_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ROUTE_ENTITY_PREFIX.length)
+    : null;
+}
+
+export default function Map3D({ province, provinceId, lang }: Map3DProps) {
+  const containerRef = useRef<HTMLDivElement | null>(null);
+  const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const handleRouteClickRef = useRef<(routeId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
+  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
+  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
+  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
+
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+    handleRouteClickRef.current = (routeId: string) => {
+      navigate(`/city/${routeId}`);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
+  useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
 
     if (!token) return;
 
-    let cancelled = false;
-    let creditContainer: HTMLDivElement | null = document.createElement("div");
+    let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
+    let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
 
@@ -341,11 +411,23 @@
 
         const area = getProvinceArea(provinceId);
         const bounds = areaToCameraBounds(area);
-        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
-        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
-        focusCamera(Cesium, viewer, bounds);
-
-        if (!cancelled) setLoadState("ready");
+        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
+        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
+        focusCamera(Cesium, viewer, bounds);
+
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const routeCityId = entity ? getPickedRouteCityId(entity) : null;
+          if (routeCityId) {
+            handleRouteClickRef.current(routeCityId);
+            return;
+          }
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
+        if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
         if (!cancelled) {
@@ -356,10 +438,14 @@
 
     void initCesium();
 
-    return () => {
-      cancelled = true;
-      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
-        viewerRef.current.destroy();
+    return () => {
+      cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
+      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
+        viewerRef.current.destroy();
       }
       viewerRef.current = null;
       if (creditContainer?.parentNode) {
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..02a88ec6745cbb0cbb2a9f4fb2cfc2d0d7ffb711
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,27 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+const PHASE1_ATTRACTION_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing|Forbidden City": "beijing",
+  "beijing|Temple of Heaven": "beijing",
+  "beijing|Beijing Central Axis": "beijing",
+  "shanghai|The Bund": "shanghai",
+  "shanghai|Yu Garden": "shanghai",
+  "shanghai|Shanghai Museum": "shanghai",
+  "guangdong|Canton Tower": "guangzhou",
+  "guangdong|Chen Clan Ancestral Hall": "guangzhou"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}
+
+export function getPhase1AttractionRouteId(provinceId: string, attractionEn: string): CityId | undefined {
+  return PHASE1_ATTRACTION_ROUTES[`${provinceId}|${attractionEn}`];
+}

diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb6ec598a14c787f3bddefd8ab4c4f84af5..83fd041e29496a2cbdec5a256645075881e67de1
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,11 +1,17 @@
-import { useEffect, useMemo, useRef, useState } from "react";
-import "cesium/Build/Cesium/Widgets/widgets.css";
-import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
-import type { Lang } from "../../data/i18n";
-import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
-
-type CesiumModule = typeof import("cesium");
-type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
+import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
+import "cesium/Build/Cesium/Widgets/widgets.css";
+import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
+import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1AttractionRouteId, getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
+import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
+
+type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
+type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
   province: ProvinceRecord;
@@ -34,8 +40,10 @@
   north: 54
 };
 
-const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
-const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
+const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
+const CITY_ROUTE_ENTITY_PREFIX = "city-route:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -206,17 +214,20 @@
   });
 }
 
-function addLabelEntity(
-  Cesium: CesiumModule,
-  viewer: CesiumViewer,
-  position: LonLat,
-  text: string,
-  color: string,
-  size: number
-) {
-  viewer.entities.add({
-    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
-    point: {
+function addLabelEntity(
+  Cesium: CesiumModule,
+  viewer: CesiumViewer,
+  position: LonLat,
+  text: string,
+  color: string,
+  size: number,
+  entityId?: string
+) {
+  viewer.entities.add({
+    id: entityId,
+    name: text,
+    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
+    point: {
       pixelSize: size,
       color: Cesium.Color.fromCssColorString(color),
       outlineColor: Cesium.Color.WHITE,
@@ -237,7 +248,7 @@
   });
 }
 
-function addProvinceEntities(
+function addProvinceEntities(
   Cesium: CesiumModule,
   viewer: CesiumViewer,
   province: ProvinceRecord,
@@ -248,17 +259,34 @@
   const center = percentToLonLat(area.x, area.y);
   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 
-  province.cities.forEach((city, index) => {
-    const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
-  });
+  province.cities.forEach((city, index) => {
+    const position = getCityPosition(city.id, area, index + 1);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
+  });
 
-  const attractions = provinceAttractionSeed[provinceId] ?? [];
-  attractions.forEach((attraction, index) => {
-    const position = getAttractionPosition(area, index);
-    addLabelEntity(Cesium, viewer, position, getEntityText(attraction.zh, attraction.en, lang), "#f59e0b", 9);
-  });
-}
+  const attractions = provinceAttractionSeed[provinceId] ?? [];
+  attractions.forEach((attraction, index) => {
+    const position = getAttractionPosition(area, index);
+    const routeId = getPhase1AttractionRouteId(provinceId, attraction.en);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(attraction.zh, attraction.en, lang),
+      "#f59e0b",
+      9,
+      routeId ? `${CITY_ROUTE_ENTITY_PREFIX}${routeId}` : undefined
+    );
+  });
+}
 
 function focusCamera(Cesium: CesiumModule, viewer: CesiumViewer, bounds: CameraBounds) {
   const width = bounds.east - bounds.west;
@@ -278,25 +306,67 @@
   });
 }
 
-function resolveProvince(provinceId: string, province: ProvinceRecord) {
-  return atlasData.find((item) => item.id === provinceId) ?? province;
-}
-
-export default function Map3D({ province, provinceId, lang }: Map3DProps) {
-  const containerRef = useRef<HTMLDivElement | null>(null);
-  const viewerRef = useRef<CesiumViewer | null>(null);
-  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
-  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
-  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
-
-  useEffect(() => {
+function resolveProvince(provinceId: string, province: ProvinceRecord) {
+  return atlasData.find((item) => item.id === provinceId) ?? province;
+}
+
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const pickedWithId = picked as { id?: unknown };
+  if (typeof pickedWithId.id === "string") return picked as CesiumEntity;
+  const candidate = pickedWithId.id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
+function getPickedRouteCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ROUTE_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ROUTE_ENTITY_PREFIX.length)
+    : null;
+}
+
+export default function Map3D({ province, provinceId, lang }: Map3DProps) {
+  const containerRef = useRef<HTMLDivElement | null>(null);
+  const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const handleRouteClickRef = useRef<(routeId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
+  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
+  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
+  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
+
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+    handleRouteClickRef.current = (routeId: string) => {
+      navigate(`/city/${routeId}`);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
+  useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
 
     if (!token) return;
 
-    let cancelled = false;
-    let creditContainer: HTMLDivElement | null = document.createElement("div");
+    let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
+    let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
 
@@ -341,11 +411,23 @@
 
         const area = getProvinceArea(provinceId);
         const bounds = areaToCameraBounds(area);
-        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
-        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
-        focusCamera(Cesium, viewer, bounds);
-
-        if (!cancelled) setLoadState("ready");
+        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
+        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
+        focusCamera(Cesium, viewer, bounds);
+
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const routeCityId = entity ? getPickedRouteCityId(entity) : null;
+          if (routeCityId) {
+            handleRouteClickRef.current(routeCityId);
+            return;
+          }
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
+        if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
         if (!cancelled) {
@@ -356,10 +438,14 @@
 
     void initCesium();
 
-    return () => {
-      cancelled = true;
-      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
-        viewerRef.current.destroy();
+    return () => {
+      cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
+      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
+        viewerRef.current.destroy();
       }
       viewerRef.current = null;
       if (creditContainer?.parentNode) {
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..02a88ec6745cbb0cbb2a9f4fb2cfc2d0d7ffb711
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,27 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+const PHASE1_ATTRACTION_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing|Forbidden City": "beijing",
+  "beijing|Temple of Heaven": "beijing",
+  "beijing|Beijing Central Axis": "beijing",
+  "shanghai|The Bund": "shanghai",
+  "shanghai|Yu Garden": "shanghai",
+  "shanghai|Shanghai Museum": "shanghai",
+  "guangdong|Canton Tower": "guangzhou",
+  "guangdong|Chen Clan Ancestral Hall": "guangzhou"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}
+
+export function getPhase1AttractionRouteId(provinceId: string, attractionEn: string): CityId | undefined {
+  return PHASE1_ATTRACTION_ROUTES[`${provinceId}|${attractionEn}`];
+}

codex
景点路由补齐了；现在再次跑 `tsc` 和 build，确认没有因为新增 helper 或 Cesium entity id 类型引入问题。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 1441ms:
 succeeded in 7516ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1503 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                     6.03 kB │ gzip:     0.93 kB
build/client/assets/Map3D-B9DDZdqH.css              24.01 kB │ gzip:     5.37 kB
build/client/assets/root-BBuZXC1J.css               41.09 kB │ gzip:     7.74 kB
build/client/assets/language-D_sidw9C.js             0.26 kB │ gzip:     0.21 kB
build/client/assets/clsx-H-aRJLpe.js                 0.36 kB │ gzip:     0.23 kB
build/client/assets/cityRoutes-woNkNDLp.js           0.91 kB │ gzip:     0.50 kB
build/client/assets/chunk-BA_0og6f.js                0.95 kB │ gzip:     0.56 kB
build/client/assets/provinceColors-ChY8jySF.js       1.72 kB │ gzip:     0.91 kB
build/client/assets/HomePage-B317R2EY.js             4.69 kB │ gzip:     2.12 kB
build/client/assets/SharePage-SOKeWOZv.js            7.48 kB │ gzip:     2.76 kB
build/client/assets/phase2-preview-DcPyXPqD.js       7.59 kB │ gzip:     4.48 kB
build/client/assets/AskPage-D4TBpFC4.js              7.62 kB │ gzip:     2.92 kB
build/client/assets/Map3D-F4jhmUWP.js                8.95 kB │ gzip:     4.21 kB
build/client/assets/root-C7TFZHRt.js                 9.47 kB │ gzip:     4.57 kB
build/client/assets/GuidePage-CZq-6qwa.js           10.80 kB │ gzip:     5.11 kB
build/client/assets/MapPage-DZ2-j_bR.js             11.34 kB │ gzip:     4.14 kB
build/client/assets/practical-other-Bpl292H6.js     22.32 kB │ gzip:    10.76 kB
build/client/assets/atlas-B_AAPFrX.js               23.18 kB │ gzip:     9.54 kB
build/client/assets/SourcesPage-9HAp8EoC.js         32.19 kB │ gzip:     8.46 kB
build/client/assets/transport-DZFQFqdz.js           34.86 kB │ gzip:    15.24 kB
build/client/assets/SourcesNote-Dc56Qloe.js         39.01 kB │ gzip:    14.91 kB
build/client/assets/CityPage-DjIxpOcJ.js            52.17 kB │ gzip:    19.45 kB
build/client/assets/jsx-runtime-CnbWJCR4.js        127.16 kB │ gzip:    41.93 kB
build/client/assets/entry.client-CQ10Nt2o.js       186.53 kB │ gzip:    58.89 kB
build/client/assets/Cesium-CsldJg6P.js           4,724.63 kB │ gzip: 1,304.40 kB

[32m✓ built in 3.88s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 66 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m
[2mbuild\server\assets\server-build-BBuZXC1J.css[22m

Prerender (html): / -> [1mbuild\client\index.html[22m
Prerender (html): /map -> [1mbuild\client\map\index.html[22m
Prerender (html): /guide/entry -> [1mbuild\client\guide\entry\index.html[22m
Prerender (html): /guide/payments -> [1mbuild\client\guide\payments\index.html[22m
Prerender (html): /guide/notes -> [1mbuild\client\guide\notes\index.html[22m
Prerender (html): /share -> [1mbuild\client\share\index.html[22m
Prerender (html): /ask -> [1mbuild\client\ask\index.html[22m
Prerender (html): /sources -> [1mbuild\client\sources\index.html[22m
Prerender (html): /city/beijing -> [1mbuild\client\city\beijing\index.html[22m
Prerender (html): /city/shanghai -> [1mbuild\client\city\shanghai\index.html[22m
Prerender (html): /city/guangzhou -> [1mbuild\client\city\guangzhou\index.html[22m
Prerender (html): /city/shenzhen -> [1mbuild\client\city\shenzhen\index.html[22m
Prerender (html): SPA Fallback -> [1mbuild\client\__spa-fallback.html[22m
Removing the server build in [32mC:\Users\h\Documents\New project 2\v2\build\server[39m due to ssr:false
computing gzip size...
build/server/.vite/manifest.json                 0.74 kB │ gzip:  0.27 kB
build/server/assets/Map3D-B9DDZdqH.css          24.01 kB │ gzip:  5.37 kB
build/server/assets/server-build-BBuZXC1J.css   41.09 kB │ gzip:  7.74 kB
build/server/assets/Map3D-BaGBNPwJ.js           15.47 kB │ gzip:  5.32 kB
build/server/assets/cityRoutes-BO_Rh2Z3.js      31.31 kB │ gzip: 10.67 kB
build/server/index.js                          309.10 kB │ gzip: 96.89 kB

[32m✓ built in 653ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:virtual-modules (40%)
  - react-router:dot-server (35%)
  - react-router:inject-hmr-runtime (15%)
  - react-router:hmr-runtime (5%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb6ec598a14c787f3bddefd8ab4c4f84af5..83fd041e29496a2cbdec5a256645075881e67de1
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,11 +1,17 @@
-import { useEffect, useMemo, useRef, useState } from "react";
-import "cesium/Build/Cesium/Widgets/widgets.css";
-import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
-import type { Lang } from "../../data/i18n";
-import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
-
-type CesiumModule = typeof import("cesium");
-type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
+import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
+import "cesium/Build/Cesium/Widgets/widgets.css";
+import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
+import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1AttractionRouteId, getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
+import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
+
+type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
+type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
   province: ProvinceRecord;
@@ -34,8 +40,10 @@
   north: 54
 };
 
-const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
-const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
+const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
+const CITY_ROUTE_ENTITY_PREFIX = "city-route:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -206,17 +214,20 @@
   });
 }
 
-function addLabelEntity(
-  Cesium: CesiumModule,
-  viewer: CesiumViewer,
-  position: LonLat,
-  text: string,
-  color: string,
-  size: number
-) {
-  viewer.entities.add({
-    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
-    point: {
+function addLabelEntity(
+  Cesium: CesiumModule,
+  viewer: CesiumViewer,
+  position: LonLat,
+  text: string,
+  color: string,
+  size: number,
+  entityId?: string
+) {
+  viewer.entities.add({
+    id: entityId,
+    name: text,
+    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
+    point: {
       pixelSize: size,
       color: Cesium.Color.fromCssColorString(color),
       outlineColor: Cesium.Color.WHITE,
@@ -237,7 +248,7 @@
   });
 }
 
-function addProvinceEntities(
+function addProvinceEntities(
   Cesium: CesiumModule,
   viewer: CesiumViewer,
   province: ProvinceRecord,
@@ -248,17 +259,34 @@
   const center = percentToLonLat(area.x, area.y);
   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 
-  province.cities.forEach((city, index) => {
-    const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
-  });
+  province.cities.forEach((city, index) => {
+    const position = getCityPosition(city.id, area, index + 1);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
+  });
 
-  const attractions = provinceAttractionSeed[provinceId] ?? [];
-  attractions.forEach((attraction, index) => {
-    const position = getAttractionPosition(area, index);
-    addLabelEntity(Cesium, viewer, position, getEntityText(attraction.zh, attraction.en, lang), "#f59e0b", 9);
-  });
-}
+  const attractions = provinceAttractionSeed[provinceId] ?? [];
+  attractions.forEach((attraction, index) => {
+    const position = getAttractionPosition(area, index);
+    const routeId = getPhase1AttractionRouteId(provinceId, attraction.en);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(attraction.zh, attraction.en, lang),
+      "#f59e0b",
+      9,
+      routeId ? `${CITY_ROUTE_ENTITY_PREFIX}${routeId}` : undefined
+    );
+  });
+}
 
 function focusCamera(Cesium: CesiumModule, viewer: CesiumViewer, bounds: CameraBounds) {
   const width = bounds.east - bounds.west;
@@ -278,25 +306,67 @@
   });
 }
 
-function resolveProvince(provinceId: string, province: ProvinceRecord) {
-  return atlasData.find((item) => item.id === provinceId) ?? province;
-}
-
-export default function Map3D({ province, provinceId, lang }: Map3DProps) {
-  const containerRef = useRef<HTMLDivElement | null>(null);
-  const viewerRef = useRef<CesiumViewer | null>(null);
-  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
-  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
-  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
-
-  useEffect(() => {
+function resolveProvince(provinceId: string, province: ProvinceRecord) {
+  return atlasData.find((item) => item.id === provinceId) ?? province;
+}
+
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const pickedWithId = picked as { id?: unknown };
+  if (typeof pickedWithId.id === "string") return picked as CesiumEntity;
+  const candidate = pickedWithId.id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
+function getPickedRouteCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ROUTE_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ROUTE_ENTITY_PREFIX.length)
+    : null;
+}
+
+export default function Map3D({ province, provinceId, lang }: Map3DProps) {
+  const containerRef = useRef<HTMLDivElement | null>(null);
+  const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const handleRouteClickRef = useRef<(routeId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
+  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
+  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
+  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
+
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+    handleRouteClickRef.current = (routeId: string) => {
+      navigate(`/city/${routeId}`);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
+  useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
 
     if (!token) return;
 
-    let cancelled = false;
-    let creditContainer: HTMLDivElement | null = document.createElement("div");
+    let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
+    let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
 
@@ -341,11 +411,23 @@
 
         const area = getProvinceArea(provinceId);
         const bounds = areaToCameraBounds(area);
-        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
-        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
-        focusCamera(Cesium, viewer, bounds);
-
-        if (!cancelled) setLoadState("ready");
+        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
+        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
+        focusCamera(Cesium, viewer, bounds);
+
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const routeCityId = entity ? getPickedRouteCityId(entity) : null;
+          if (routeCityId) {
+            handleRouteClickRef.current(routeCityId);
+            return;
+          }
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
+        if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
         if (!cancelled) {
@@ -356,10 +438,14 @@
 
     void initCesium();
 
-    return () => {
-      cancelled = true;
-      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
-        viewerRef.current.destroy();
+    return () => {
+      cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
+      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
+        viewerRef.current.destroy();
       }
       viewerRef.current = null;
       if (creditContainer?.parentNode) {
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..02a88ec6745cbb0cbb2a9f4fb2cfc2d0d7ffb711
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,27 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+const PHASE1_ATTRACTION_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing|Forbidden City": "beijing",
+  "beijing|Temple of Heaven": "beijing",
+  "beijing|Beijing Central Axis": "beijing",
+  "shanghai|The Bund": "shanghai",
+  "shanghai|Yu Garden": "shanghai",
+  "shanghai|Shanghai Museum": "shanghai",
+  "guangdong|Canton Tower": "guangzhou",
+  "guangdong|Chen Clan Ancestral Hall": "guangzhou"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}
+
+export function getPhase1AttractionRouteId(provinceId: string, attractionEn: string): CityId | undefined {
+  return PHASE1_ATTRACTION_ROUTES[`${provinceId}|${attractionEn}`];
+}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short src/components/map/Map3D.tsx src/components/map/ProvinceInfoCard.tsx src/lib/cityRoutes.ts build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 402ms:
 M src/components/map/Map3D.tsx
 M src/components/map/ProvinceInfoCard.tsx
?? src/lib/cityRoutes.ts

diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb6ec598a14c787f3bddefd8ab4c4f84af5..83fd041e29496a2cbdec5a256645075881e67de1
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,11 +1,17 @@
-import { useEffect, useMemo, useRef, useState } from "react";
-import "cesium/Build/Cesium/Widgets/widgets.css";
-import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
-import type { Lang } from "../../data/i18n";
-import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
-
-type CesiumModule = typeof import("cesium");
-type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
+import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
+import "cesium/Build/Cesium/Widgets/widgets.css";
+import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
+import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1AttractionRouteId, getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
+import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
+
+type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
+type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
   province: ProvinceRecord;
@@ -34,8 +40,10 @@
   north: 54
 };
 
-const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
-const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
+const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
+const CITY_ROUTE_ENTITY_PREFIX = "city-route:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -206,17 +214,20 @@
   });
 }
 
-function addLabelEntity(
-  Cesium: CesiumModule,
-  viewer: CesiumViewer,
-  position: LonLat,
-  text: string,
-  color: string,
-  size: number
-) {
-  viewer.entities.add({
-    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
-    point: {
+function addLabelEntity(
+  Cesium: CesiumModule,
+  viewer: CesiumViewer,
+  position: LonLat,
+  text: string,
+  color: string,
+  size: number,
+  entityId?: string
+) {
+  viewer.entities.add({
+    id: entityId,
+    name: text,
+    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
+    point: {
       pixelSize: size,
       color: Cesium.Color.fromCssColorString(color),
       outlineColor: Cesium.Color.WHITE,
@@ -237,7 +248,7 @@
   });
 }
 
-function addProvinceEntities(
+function addProvinceEntities(
   Cesium: CesiumModule,
   viewer: CesiumViewer,
   province: ProvinceRecord,
@@ -248,17 +259,34 @@
   const center = percentToLonLat(area.x, area.y);
   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 
-  province.cities.forEach((city, index) => {
-    const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
-  });
+  province.cities.forEach((city, index) => {
+    const position = getCityPosition(city.id, area, index + 1);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
+  });
 
-  const attractions = provinceAttractionSeed[provinceId] ?? [];
-  attractions.forEach((attraction, index) => {
-    const position = getAttractionPosition(area, index);
-    addLabelEntity(Cesium, viewer, position, getEntityText(attraction.zh, attraction.en, lang), "#f59e0b", 9);
-  });
-}
+  const attractions = provinceAttractionSeed[provinceId] ?? [];
+  attractions.forEach((attraction, index) => {
+    const position = getAttractionPosition(area, index);
+    const routeId = getPhase1AttractionRouteId(provinceId, attraction.en);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(attraction.zh, attraction.en, lang),
+      "#f59e0b",
+      9,
+      routeId ? `${CITY_ROUTE_ENTITY_PREFIX}${routeId}` : undefined
+    );
+  });
+}
 
 function focusCamera(Cesium: CesiumModule, viewer: CesiumViewer, bounds: CameraBounds) {
   const width = bounds.east - bounds.west;
@@ -278,25 +306,67 @@
   });
 }
 
-function resolveProvince(provinceId: string, province: ProvinceRecord) {
-  return atlasData.find((item) => item.id === provinceId) ?? province;
-}
-
-export default function Map3D({ province, provinceId, lang }: Map3DProps) {
-  const containerRef = useRef<HTMLDivElement | null>(null);
-  const viewerRef = useRef<CesiumViewer | null>(null);
-  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
-  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
-  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
-
-  useEffect(() => {
+function resolveProvince(provinceId: string, province: ProvinceRecord) {
+  return atlasData.find((item) => item.id === provinceId) ?? province;
+}
+
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const pickedWithId = picked as { id?: unknown };
+  if (typeof pickedWithId.id === "string") return picked as CesiumEntity;
+  const candidate = pickedWithId.id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
+function getPickedRouteCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ROUTE_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ROUTE_ENTITY_PREFIX.length)
+    : null;
+}
+
+export default function Map3D({ province, provinceId, lang }: Map3DProps) {
+  const containerRef = useRef<HTMLDivElement | null>(null);
+  const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const handleRouteClickRef = useRef<(routeId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
+  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
+  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
+  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
+
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+    handleRouteClickRef.current = (routeId: string) => {
+      navigate(`/city/${routeId}`);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
+  useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
 
     if (!token) return;
 
-    let cancelled = false;
-    let creditContainer: HTMLDivElement | null = document.createElement("div");
+    let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
+    let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
 
@@ -341,11 +411,23 @@
 
         const area = getProvinceArea(provinceId);
         const bounds = areaToCameraBounds(area);
-        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
-        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
-        focusCamera(Cesium, viewer, bounds);
-
-        if (!cancelled) setLoadState("ready");
+        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
+        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
+        focusCamera(Cesium, viewer, bounds);
+
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const routeCityId = entity ? getPickedRouteCityId(entity) : null;
+          if (routeCityId) {
+            handleRouteClickRef.current(routeCityId);
+            return;
+          }
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
+        if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
         if (!cancelled) {
@@ -356,10 +438,14 @@
 
     void initCesium();
 
-    return () => {
-      cancelled = true;
-      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
-        viewerRef.current.destroy();
+    return () => {
+      cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
+      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
+        viewerRef.current.destroy();
       }
       viewerRef.current = null;
       if (creditContainer?.parentNode) {
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..02a88ec6745cbb0cbb2a9f4fb2cfc2d0d7ffb711
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,27 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+const PHASE1_ATTRACTION_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing|Forbidden City": "beijing",
+  "beijing|Temple of Heaven": "beijing",
+  "beijing|Beijing Central Axis": "beijing",
+  "shanghai|The Bund": "shanghai",
+  "shanghai|Yu Garden": "shanghai",
+  "shanghai|Shanghai Museum": "shanghai",
+  "guangdong|Canton Tower": "guangzhou",
+  "guangdong|Chen Clan Ancestral Hall": "guangzhou"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}
+
+export function getPhase1AttractionRouteId(provinceId: string, attractionEn: string): CityId | undefined {
+  return PHASE1_ATTRACTION_ROUTES[`${provinceId}|${attractionEn}`];
+}

codex
已直接改代码并构建通过。

改动：`Map3D.tsx`、`ProvinceInfoCard.tsx`、新增 `src/lib/cityRoutes.ts`。

现在 3D 城市 label：北京、上海、广州、深圳会跳 `/city/beijing|shanghai|guangzhou|shenzhen`；非 Phase 1 城市仍只 `selectPlace`。景点 label：故宫、天坛、北京中轴线、外滩、豫园、上海博物馆、广州塔、陈家祠会跳对应城市。

验证：`npx tsc --noEmit` 0 error；`npm run build` 0 error。
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index b3080cb6ec598a14c787f3bddefd8ab4c4f84af5..83fd041e29496a2cbdec5a256645075881e67de1
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -1,11 +1,17 @@
-import { useEffect, useMemo, useRef, useState } from "react";
-import "cesium/Build/Cesium/Widgets/widgets.css";
-import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
-import type { Lang } from "../../data/i18n";
-import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
-
-type CesiumModule = typeof import("cesium");
-type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
+import { useEffect, useMemo, useRef, useState } from "react";
+import { useNavigate } from "react-router";
+import "cesium/Build/Cesium/Widgets/widgets.css";
+import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
+import type { Lang } from "../../data/i18n";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1AttractionRouteId, getPhase1CityRouteId } from "../../lib/cityRoutes";
+import { useAtlas } from "../../store/atlas";
+import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
+
+type CesiumModule = typeof import("cesium");
+type CesiumEntity = InstanceType<CesiumModule["Entity"]>;
+type CesiumScreenSpaceEventHandler = InstanceType<CesiumModule["ScreenSpaceEventHandler"]>;
+type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
 
 type Map3DProps = {
   province: ProvinceRecord;
@@ -34,8 +40,10 @@
   north: 54
 };
 
-const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
-const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
+const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
+const CITY_ENTITY_PREFIX = "city:";
+const CITY_ROUTE_ENTITY_PREFIX = "city-route:";
 
 const FALLBACK_AREA: ProvinceHitArea = {
   id: "china",
@@ -206,17 +214,20 @@
   });
 }
 
-function addLabelEntity(
-  Cesium: CesiumModule,
-  viewer: CesiumViewer,
-  position: LonLat,
-  text: string,
-  color: string,
-  size: number
-) {
-  viewer.entities.add({
-    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
-    point: {
+function addLabelEntity(
+  Cesium: CesiumModule,
+  viewer: CesiumViewer,
+  position: LonLat,
+  text: string,
+  color: string,
+  size: number,
+  entityId?: string
+) {
+  viewer.entities.add({
+    id: entityId,
+    name: text,
+    position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
+    point: {
       pixelSize: size,
       color: Cesium.Color.fromCssColorString(color),
       outlineColor: Cesium.Color.WHITE,
@@ -237,7 +248,7 @@
   });
 }
 
-function addProvinceEntities(
+function addProvinceEntities(
   Cesium: CesiumModule,
   viewer: CesiumViewer,
   province: ProvinceRecord,
@@ -248,17 +259,34 @@
   const center = percentToLonLat(area.x, area.y);
   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 
-  province.cities.forEach((city, index) => {
-    const position = getCityPosition(city.id, area, index + 1);
-    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
-  });
+  province.cities.forEach((city, index) => {
+    const position = getCityPosition(city.id, area, index + 1);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(city.zh, city.name, lang),
+      "#3b82f6",
+      11,
+      `${CITY_ENTITY_PREFIX}${city.id}`
+    );
+  });
 
-  const attractions = provinceAttractionSeed[provinceId] ?? [];
-  attractions.forEach((attraction, index) => {
-    const position = getAttractionPosition(area, index);
-    addLabelEntity(Cesium, viewer, position, getEntityText(attraction.zh, attraction.en, lang), "#f59e0b", 9);
-  });
-}
+  const attractions = provinceAttractionSeed[provinceId] ?? [];
+  attractions.forEach((attraction, index) => {
+    const position = getAttractionPosition(area, index);
+    const routeId = getPhase1AttractionRouteId(provinceId, attraction.en);
+    addLabelEntity(
+      Cesium,
+      viewer,
+      position,
+      getEntityText(attraction.zh, attraction.en, lang),
+      "#f59e0b",
+      9,
+      routeId ? `${CITY_ROUTE_ENTITY_PREFIX}${routeId}` : undefined
+    );
+  });
+}
 
 function focusCamera(Cesium: CesiumModule, viewer: CesiumViewer, bounds: CameraBounds) {
   const width = bounds.east - bounds.west;
@@ -278,25 +306,67 @@
   });
 }
 
-function resolveProvince(provinceId: string, province: ProvinceRecord) {
-  return atlasData.find((item) => item.id === provinceId) ?? province;
-}
-
-export default function Map3D({ province, provinceId, lang }: Map3DProps) {
-  const containerRef = useRef<HTMLDivElement | null>(null);
-  const viewerRef = useRef<CesiumViewer | null>(null);
-  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
-  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
-  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
-
-  useEffect(() => {
+function resolveProvince(provinceId: string, province: ProvinceRecord) {
+  return atlasData.find((item) => item.id === provinceId) ?? province;
+}
+
+function getPickedEntity(picked: unknown): CesiumEntity | null {
+  if (!picked || typeof picked !== "object" || !("id" in picked)) return null;
+  const pickedWithId = picked as { id?: unknown };
+  if (typeof pickedWithId.id === "string") return picked as CesiumEntity;
+  const candidate = pickedWithId.id;
+  if (!candidate || typeof candidate !== "object" || !("id" in candidate)) return null;
+  return candidate as CesiumEntity;
+}
+
+function getPickedCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ENTITY_PREFIX.length)
+    : null;
+}
+
+function getPickedRouteCityId(entity: CesiumEntity): string | null {
+  return typeof entity.id === "string" && entity.id.startsWith(CITY_ROUTE_ENTITY_PREFIX)
+    ? entity.id.slice(CITY_ROUTE_ENTITY_PREFIX.length)
+    : null;
+}
+
+export default function Map3D({ province, provinceId, lang }: Map3DProps) {
+  const containerRef = useRef<HTMLDivElement | null>(null);
+  const viewerRef = useRef<CesiumViewer | null>(null);
+  const handleCityClickRef = useRef<(cityId: string) => void>(() => undefined);
+  const handleRouteClickRef = useRef<(routeId: string) => void>(() => undefined);
+  const navigate = useNavigate();
+  const { selectPlace } = useAtlas();
+  const recordView = useRecordCityView();
+  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
+  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
+  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
+
+  useEffect(() => {
+    handleCityClickRef.current = (cityId: string) => {
+      recordView(cityId);
+      const phase1 = getPhase1CityRouteId(cityId);
+      if (phase1) {
+        navigate(`/city/${phase1}`);
+        return;
+      }
+      selectPlace(provinceId, cityId);
+    };
+    handleRouteClickRef.current = (routeId: string) => {
+      navigate(`/city/${routeId}`);
+    };
+  }, [navigate, provinceId, recordView, selectPlace]);
+
+  useEffect(() => {
     const container = containerRef.current;
     if (!container) return;
 
     if (!token) return;
 
-    let cancelled = false;
-    let creditContainer: HTMLDivElement | null = document.createElement("div");
+    let cancelled = false;
+    let clickHandler: CesiumScreenSpaceEventHandler | null = null;
+    let creditContainer: HTMLDivElement | null = document.createElement("div");
     creditContainer.className = "hidden";
     container.appendChild(creditContainer);
 
@@ -341,11 +411,23 @@
 
         const area = getProvinceArea(provinceId);
         const bounds = areaToCameraBounds(area);
-        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
-        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
-        focusCamera(Cesium, viewer, bounds);
-
-        if (!cancelled) setLoadState("ready");
+        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
+        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
+        focusCamera(Cesium, viewer, bounds);
+
+        clickHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
+        clickHandler.setInputAction((movement: { position: InstanceType<CesiumModule["Cartesian2"]> }) => {
+          const entity = getPickedEntity(viewer.scene.pick(movement.position));
+          const routeCityId = entity ? getPickedRouteCityId(entity) : null;
+          if (routeCityId) {
+            handleRouteClickRef.current(routeCityId);
+            return;
+          }
+          const cityId = entity ? getPickedCityId(entity) : null;
+          if (cityId) handleCityClickRef.current(cityId);
+        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
+
+        if (!cancelled) setLoadState("ready");
       } catch (error) {
         console.error(error);
         if (!cancelled) {
@@ -356,10 +438,14 @@
 
     void initCesium();
 
-    return () => {
-      cancelled = true;
-      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
-        viewerRef.current.destroy();
+    return () => {
+      cancelled = true;
+      if (clickHandler && !clickHandler.isDestroyed()) {
+        clickHandler.destroy();
+      }
+      clickHandler = null;
+      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
+        viewerRef.current.destroy();
       }
       viewerRef.current = null;
       if (creditContainer?.parentNode) {
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index b0fea2fc81977d18e40520b2507c12ad7013d33e..df60b8437c8831d0b39874c47ac52621c59cb73b
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -1,15 +1,9 @@
 import { useNavigate } from "react-router";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { provinceAttractionSeed } from "../../data/atlas";
-import { useRecordCityView } from "../../hooks/useCityViews";
-
-const PHASE1_CITY_ROUTES: Record<string, string> = {
-  "beijing-city": "beijing",
-  "shanghai-city": "shanghai",
-  "guangzhou-city": "guangzhou",
-  "shenzhen-city": "shenzhen"
-};
+import { useLang } from "../../store/language";
+import { provinceAttractionSeed } from "../../data/atlas";
+import { useRecordCityView } from "../../hooks/useCityViews";
+import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
 export default function ProvinceInfoCard() {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
@@ -23,12 +17,12 @@
   const hasCities = province.cities.length > 0;
   const hasAttractions = attractions.length > 0;
 
-  const goToCity = (cityId: string) => {
-    recordView(cityId);
-    const phase1 = PHASE1_CITY_ROUTES[cityId];
-    if (phase1) {
-      navigate(`/city/${phase1}`);
-      return;
+  const goToCity = (cityId: string) => {
+    recordView(cityId);
+    const phase1 = getPhase1CityRouteId(cityId);
+    if (phase1) {
+      navigate(`/city/${phase1}`);
+      return;
     }
     selectPlace(province.id, cityId);
   };
diff --git a/v2/src/lib/cityRoutes.ts b/v2/src/lib/cityRoutes.ts
new file mode 100644
index 0000000000000000000000000000000000000000..02a88ec6745cbb0cbb2a9f4fb2cfc2d0d7ffb711
--- /dev/null
+++ b/v2/src/lib/cityRoutes.ts
@@ -0,0 +1,27 @@
+import type { CityId } from "../data/transport";
+
+export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing-city": "beijing",
+  "shanghai-city": "shanghai",
+  "guangzhou-city": "guangzhou",
+  "shenzhen-city": "shenzhen"
+};
+
+const PHASE1_ATTRACTION_ROUTES: Partial<Record<string, CityId>> = {
+  "beijing|Forbidden City": "beijing",
+  "beijing|Temple of Heaven": "beijing",
+  "beijing|Beijing Central Axis": "beijing",
+  "shanghai|The Bund": "shanghai",
+  "shanghai|Yu Garden": "shanghai",
+  "shanghai|Shanghai Museum": "shanghai",
+  "guangdong|Canton Tower": "guangzhou",
+  "guangdong|Chen Clan Ancestral Hall": "guangzhou"
+};
+
+export function getPhase1CityRouteId(cityId: string): CityId | undefined {
+  return PHASE1_CITY_ROUTES[cityId];
+}
+
+export function getPhase1AttractionRouteId(provinceId: string, attractionEn: string): CityId | undefined {
+  return PHASE1_ATTRACTION_ROUTES[`${provinceId}|${attractionEn}`];
+}

tokens used
132,200

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
