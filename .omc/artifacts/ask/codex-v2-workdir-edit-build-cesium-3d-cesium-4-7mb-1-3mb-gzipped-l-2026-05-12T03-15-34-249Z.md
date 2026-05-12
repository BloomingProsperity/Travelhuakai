# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-12T03:15:34.250Z

## Original task

在 v2/ workdir 真的 edit + build。

任务：移动端完全不加载 Cesium 3D。当前 Cesium 是 4.7MB/1.3MB gzipped 的 lazy chunk，移动端用户首次加载会卡死。

需求：
1. 创建 v2/src/hooks/useIsDesktop.ts —— useSyncExternalStore + matchMedia('(min-width: 768px)') 实现，SSR/SSG safe（默认 false）
2. 在 HeroMap.tsx / Province3DOverlay.tsx 里，桌面端保持现行 3D 行为；移动端：
   a. 用户点省份只显示 ProvinceInfoCard，不进 3D（atlas.is3DEnabled 不切换）
   b. 在 ProvinceInfoCard 里加一条小文字告知 '3D scene available on desktop' / '3D 视图仅在桌面端提供'
   c. 3D toggle 按钮在 HeroMap 移动端隐藏
3. 关键：要确保移动端连 Map3D 的 lazy import 都不发生（不能仅 hide UI）。检查 Province3DOverlay 里 Suspense + lazy 是否会在 mobile 触发 — 如果 is3DEnabled 默认 false 且按钮也藏掉，应该自然不触发，验证一下

完成后 npx tsc --noEmit + npm run build 通过。

报告 200 字以内：新建/改了什么、移动端验证 Cesium 不下载（chunk 分析或代码逻辑确认）、build 状态。

## Final prompt

在 v2/ workdir 真的 edit + build。

任务：移动端完全不加载 Cesium 3D。当前 Cesium 是 4.7MB/1.3MB gzipped 的 lazy chunk，移动端用户首次加载会卡死。

需求：
1. 创建 v2/src/hooks/useIsDesktop.ts —— useSyncExternalStore + matchMedia('(min-width: 768px)') 实现，SSR/SSG safe（默认 false）
2. 在 HeroMap.tsx / Province3DOverlay.tsx 里，桌面端保持现行 3D 行为；移动端：
   a. 用户点省份只显示 ProvinceInfoCard，不进 3D（atlas.is3DEnabled 不切换）
   b. 在 ProvinceInfoCard 里加一条小文字告知 '3D scene available on desktop' / '3D 视图仅在桌面端提供'
   c. 3D toggle 按钮在 HeroMap 移动端隐藏
3. 关键：要确保移动端连 Map3D 的 lazy import 都不发生（不能仅 hide UI）。检查 Province3DOverlay 里 Suspense + lazy 是否会在 mobile 触发 — 如果 is3DEnabled 默认 false 且按钮也藏掉，应该自然不触发，验证一下

完成后 npx tsc --noEmit + npm run build 通过。

报告 200 字以内：新建/改了什么、移动端验证 Cesium 不下载（chunk 分析或代码逻辑确认）、build 状态。

## Raw output

```text
SUCCESS: The process with PID 609060 (child process of PID 610316) has been terminated.
SUCCESS: The process with PID 610316 (child process of PID 610380) has been terminated.
SUCCESS: The process with PID 610380 (child process of PID 606968) has been terminated.
SUCCESS: The process with PID 606968 (child process of PID 609792) has been terminated.
SUCCESS: The process with PID 610488 (child process of PID 609968) has been terminated.
SUCCESS: The process with PID 609968 (child process of PID 603684) has been terminated.
SUCCESS: The process with PID 603684 (child process of PID 606728) has been terminated.
SUCCESS: The process with PID 606728 (child process of PID 609792) has been terminated.
SUCCESS: The process with PID 609340 (child process of PID 607748) has been terminated.
SUCCESS: The process with PID 607748 (child process of PID 607936) has been terminated.
SUCCESS: The process with PID 607936 (child process of PID 500244) has been terminated.
SUCCESS: The process with PID 500244 (child process of PID 609792) has been terminated.
已在 `v2` 完成：新增 `useIsDesktop`，地图点击在移动端传 `enable3D=false`，InfoCard 加桌面 3D 提示，HeroMap 移动端不显示 3D 按钮，Province3DOverlay 非桌面直接返回不进 Suspense。

验证：MapPage 首屏不 preload Map3D/Cesium；Cesium 仍为独立 `4.7MB / 1.3MB gzip` chunk，移动端路径不会触发 lazy import。`npx tsc --noEmit` 与 `npm run build` 均通过。


OpenAI Codex v0.128.0 (research preview)
--------
workdir: C:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1a2a-4a8d-7590-8d58-58e67d9a986d
--------
user
在 v2/ workdir 真的 edit + build。

任务：移动端完全不加载 Cesium 3D。当前 Cesium 是 4.7MB/1.3MB gzipped 的 lazy chunk，移动端用户首次加载会卡死。

需求：
1. 创建 v2/src/hooks/useIsDesktop.ts —— useSyncExternalStore + matchMedia('(min-width: 768px)') 实现，SSR/SSG safe（默认 false）
2. 在 HeroMap.tsx / Province3DOverlay.tsx 里，桌面端保持现行 3D 行为；移动端：
   a. 用户点省份只显示 ProvinceInfoCard，不进 3D（atlas.is3DEnabled 不切换）
   b. 在 ProvinceInfoCard 里加一条小文字告知 '3D scene available on desktop' / '3D 视图仅在桌面端提供'
   c. 3D toggle 按钮在 HeroMap 移动端隐藏
3. 关键：要确保移动端连 Map3D 的 lazy import 都不发生（不能仅 hide UI）。检查 Province3DOverlay 里 Suspense + lazy 是否会在 mobile 触发 — 如果 is3DEnabled 默认 false 且按钮也藏掉，应该自然不触发，验证一下

完成后 npx tsc --noEmit + npm run build 通过。

报告 200 字以内：新建/改了什么、移动端验证 Cesium 不下载（chunk 分析或代码逻辑确认）、build 状态。
codex
我会先按 React/Next 相关改动加载 `react-best-practices`，然后在 `v2` 里定位地图组件和现有构建脚本，确认移动端触发路径后再改文件。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'C:\\Users\\h\\.codex\\plugins\\cache\\openai-curated\\build-web-apps\\63976030\\skills\\react-best-practices\\SKILL.md'" in C:\Users\h\Documents\New project 2
 succeeded in 402ms:
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
技能重点是 `bundle-conditional`：重型模块必须只在功能实际激活时导入。我现在检查现有 lazy 边界、状态流和移动端 UI 路径。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Force' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg --files' in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"HeroMap|Province3DOverlay|Map3D|is3DEnabled|ProvinceInfoCard|lazy\\(|Suspense\" src" in C:\Users\h\Documents\New project 2\v2
 succeeded in 754ms:
vite.config.ts
tsconfig.node.json
tsconfig.json
tsconfig.app.json
STYLE_GUIDE.md
index.html
eslint.config.js
package-lock.json
package.json
README.md
react-router.config.ts
src\App.tsx
src\routes.ts
src\root.tsx
public\favicon.svg
scripts\interaction-check.mjs
scripts\restart-dev.mjs
research\alipay-wechat-foreigner-registration.md
research\blog-platform-bureau-sweep.md
src\main.tsx
research\china-platforms-02-maps-reviews.md
research\china-platforms-01-video.md
research\china-platforms-03-ugc.md
research\zh-mandarin-audit.md
research\ugc-qa-implementation.md
research\seo-05-our-action-plan.md
research\seo-04-multi-engine.md
research\seo-02-decompose-winners.md
research\seo-01-landscape.md
research\evaluation-04-rewrites-applied.md
research\evaluation-04-en-machine-feel.md
research\evaluation-03-home-vs-competitors.md
research\evaluation-02-seo-paid.md
research\evaluation-01-acceptance.md
research\city-shenzhen-deep.md
research\city-shanghai-deep.md
research\city-guangzhou-deep.md
research\city-beijing-deep.md
research\china-platforms-04-legal.md
src\styles\globals.css
src\pages\SourcesPage.tsx
src\pages\SharePage.tsx
src\pages\MapPage.tsx
src\pages\HomePage.tsx
src\pages\GuidePage.tsx
src\pages\CityPage.tsx
src\pages\AskPage.tsx
src\data\atlas.ts
src\data\city-attractions.ts
src\data\types.ts
src\data\transport.ts
src\data\top-questions.ts
src\data\sources.ts
src\data\practical-payments.ts
src\data\practical-other.ts
src\data\phase2-preview.ts
src\data\payments.ts
src\data\map-sources.ts
src\data\i18n.ts
src\data\food.ts
src\data\entry-policies.ts
src\data\emergency.ts
src\data\city-tourism-portals.ts
src\lib\unsplash.ts
src\hooks\useProvinceShapes.ts
src\lib\shapes.ts
src\hooks\useCityViews.ts
src\lib\search.ts
src\lib\i18n.ts
src\lib\format.ts
src\lib\cityRoutes.ts
src\services\notes.ts
src\store\atlas.ts
src\store\LanguageProvider.tsx
src\store\language.ts
src\store\AtlasProvider.tsx
public\assets\three.module.min.js
public\assets\earth-bluemarble.jpg
public\assets\china-province-shapes.json
public\assets\china-map-gs2022-4309.jpg
public\assets\province-map-textures\zhejiang.png
public\assets\province-map-textures\yunnan.png
public\assets\province-map-textures\xinjiang.png
public\assets\province-map-textures\tibet.png
public\assets\province-map-textures\tianjin.png
public\assets\province-map-textures\taiwan.png
public\assets\province-map-textures\sichuan.png
public\assets\province-map-textures\shanxi.png
public\assets\province-map-textures\shanghai.png
public\assets\province-map-textures\shandong.png
public\assets\province-map-textures\shaanxi.png
public\assets\province-map-textures\qinghai.png
public\assets\province-map-textures\ningxia.png
public\assets\province-map-textures\macau.png
public\assets\province-map-textures\liaoning.png
public\assets\province-map-textures\jilin.png
public\assets\province-map-textures\jiangxi.png
public\assets\province-map-textures\jiangsu.png
public\assets\province-map-textures\inner-mongolia.png
public\assets\province-map-textures\hunan.png
public\assets\province-map-textures\hubei.png
public\assets\province-map-textures\hong-kong.png
public\assets\province-map-textures\henan.png
public\assets\province-map-textures\heilongjiang.png
public\assets\province-map-textures\hebei.png
public\assets\province-map-textures\hainan.png
public\assets\province-map-textures\guizhou.png
public\assets\province-map-textures\guangxi.png
public\assets\province-map-textures\guangdong.png
public\assets\province-map-textures\gansu.png
public\assets\province-map-textures\fujian.png
public\assets\province-map-textures\chongqing.png
public\assets\province-map-textures\beijing.png
public\assets\province-map-textures\anhui.png
src\components\sections\TopQuestions.tsx
src\components\layout\LanguageSwitch.tsx
src\components\layout\SiteHeader.tsx
src\components\layout\SiteFooter.tsx
src\components\city\CuisineDrawer.tsx
src\components\city\CityNav.tsx
src\components\city\CityIntro.tsx
src\components\city\CityImagePanel.tsx
src\components\common\SourcesNote.tsx
src\components\common\PracticalBlock.tsx
src\components\common\MapErrorBoundary.tsx
src\components\common\CityFurtherReading.tsx
src\components\map\Map3D.tsx
src\components\map\HeroMap.tsx
src\components\map\Province3DOverlay.tsx
src\components\map\MapPreview.tsx
src\components\map\provinceColors.ts
src\components\policy\TravelAlerts.tsx
src\components\map\ProvinceInfoCard.tsx
src\components\map\ProvinceHitAreaLayer.tsx
src\components\map\ProvinceShapeLayer.tsx
src\components\map\ProvinceLabelLayer.tsx
src\components\map\SpecialRegionMarkers.tsx
src\components\pillar\EmergencyBriefing.tsx
src\components\pillar\VisaChecker.tsx
src\components\pillar\TransportGuide.tsx
src\components\pillar\PaymentsPractical.tsx
src\components\pillar\PaymentsChecklist.tsx
src\components\pillar\FoodGuide.tsx

 succeeded in 795ms:
src\pages\MapPage.tsx:3:import HeroMap from "../components/map/HeroMap";
src\pages\MapPage.tsx:30:      <HeroMap />
src\store\atlas.ts:8:  is3DEnabled: boolean;
src\store\atlas.ts:20:  is3DEnabled: false
src\store\atlas.ts:30:        is3DEnabled: Boolean(action.provinceId)
src\store\atlas.ts:33:      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
src\store\atlas.ts:35:      return { ...state, is3DEnabled: !state.is3DEnabled };
src\components\map\Province3DOverlay.tsx:1:import { lazy, Suspense } from "react";
src\components\map\Province3DOverlay.tsx:6:const Map3D = lazy(() => import("./Map3D"));
src\components\map\Province3DOverlay.tsx:8:export default function Province3DOverlay() {
src\components\map\Province3DOverlay.tsx:9:  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
src\components\map\Province3DOverlay.tsx:12:  if (!selectedProvinceId || !province || !is3DEnabled) return null;
src\components\map\Province3DOverlay.tsx:73:          <Suspense
src\components\map\Province3DOverlay.tsx:80:            <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
src\components\map\Province3DOverlay.tsx:81:          </Suspense>
src\components\map\Map3D.tsx:16:type Map3DProps = {
src\components\map\Map3D.tsx:334:export default function Map3D({ province, provinceId, lang }: Map3DProps) {
src\components\map\ProvinceInfoCard.tsx:8:export default function ProvinceInfoCard() {
src\components\map\ProvinceInfoCard.tsx:9:  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
src\components\map\ProvinceInfoCard.tsx:14:  if (!selectedProvinceId || !province || is3DEnabled) return null;
src\components\map\HeroMap.tsx:6:import ProvinceInfoCard from "./ProvinceInfoCard";
src\components\map\HeroMap.tsx:7:import Province3DOverlay from "./Province3DOverlay";
src\components\map\HeroMap.tsx:11:export default function HeroMap() {
src\components\map\HeroMap.tsx:13:  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
src\components\map\HeroMap.tsx:31:      data-3d-enabled={is3DEnabled ? "true" : "false"}
src\components\map\HeroMap.tsx:50:          <ProvinceInfoCard />
src\components\map\HeroMap.tsx:51:          <Province3DOverlay />
src\components\map\HeroMap.tsx:53:        {focused && !is3DEnabled && (

 succeeded in 900ms:


    目录: C:\Users\h\Documents\New project 2


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----         2026/5/10     22:45                .claude                                                              
d--h--         2026/5/12     11:09                .git                                                                 
d-----         2026/5/12     11:11                .omc                                                                 
d-----         2026/5/10     23:56                .playwright-mcp                                                      
d-----          2026/5/9     16:47                assets                                                               
d-----          2026/5/9     22:56                node_modules                                                         
d-----          2026/5/9     17:01                src                                                                  
d-----         2026/5/12     11:09                v2                                                                   
-a----         2026/5/10     22:52            499 .gitignore                                                           
-a----          2026/5/9     17:21          27818 app.js                                                               
-a----          2026/5/9     17:00          13022 index.html                                                           
-a----          2026/5/9     17:30          11678 map3d.js                                                             
-a----          2026/5/9     22:56           3170 package-lock.json                                                    
-a----          2026/5/9     22:56             62 package.json                                                         
-a----         2026/5/10      1:35          24842 PROJECT_PLAN.md                                                      
-a----          2026/5/9     17:21          41244 styles.css                                                           



exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\store\\atlas.ts" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\components\\map\\HeroMap.tsx" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\components\\map\\Province3DOverlay.tsx" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\components\\map\\ProvinceInfoCard.tsx" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path package.json' in C:\Users\h\Documents\New project 2\v2
 succeeded in 841ms:
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

 succeeded in 878ms:
import { useEffect } from "react";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";
import ProvinceShapeLayer from "./ProvinceShapeLayer";
import ProvinceLabelLayer from "./ProvinceLabelLayer";
import ProvinceInfoCard from "./ProvinceInfoCard";
import Province3DOverlay from "./Province3DOverlay";
import SpecialRegionMarkers from "./SpecialRegionMarkers";
import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";

export default function HeroMap() {
  const { lang } = useLang();
  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
  const focused = Boolean(selectedProvinceId);
  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";

  useEffect(() => {
    if (!focused) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") reset();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [focused, reset]);

  return (
    <section
      aria-label="China interactive map"
      data-selected-province={selectedProvinceId ?? undefined}
      data-province-present={province ? "true" : "false"}
      data-3d-enabled={is3DEnabled ? "true" : "false"}
      className="flex min-w-0 flex-col gap-2"
    >
      {focused && province && (
        <header className="flex items-end justify-between">
          <h2 className="text-xl font-bold leading-tight">{provinceLabel}</h2>
        </header>
      )}

      <div
        aria-live="polite"
        className={`china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm ${focused ? "min-h-[420px]" : "min-h-[300px] sm:min-h-[260px]"}`}
        style={{ aspectRatio: "9463 / 6675" }}
      >
        <div className="absolute inset-0">
          <ProvinceShapeLayer />
          <ProvinceLabelLayer />
          <ProvinceHitAreaLayer />
          <SpecialRegionMarkers />
          <ProvinceInfoCard />
          <Province3DOverlay />
        </div>
        {focused && !is3DEnabled && (
          <button
            type="button"
            onClick={reset}
            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
          >
            {lang === "zh" ? "閲嶇疆" : "Reset"}
          </button>
        )}
      </div>
    </section>
  );
}

 succeeded in 893ms:
import { lazy, Suspense } from "react";
import MapErrorBoundary from "../common/MapErrorBoundary";
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
        <MapErrorBoundary
          resetKey={selectedProvinceId}
          fallback={
            <div
              role="alert"
              className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
            >
              <div className="max-w-sm space-y-4">
                <p className="text-sm font-semibold leading-6 text-white/85">
                  {lang === "zh"
                    ? "3D 瑙嗗浘鍔犺浇澶辫触锛岀偣鍑婚噸缃繑鍥炰簩缁村湴鍥俱€?
                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
                >
                  {lang === "zh" ? "閲嶇疆" : "Reset"}
                </button>
              </div>
            </div>
          }
        >
          <Suspense
            fallback={
              <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
              {lang === "zh" ? "姝ｅ湪鍔犺浇澶╁湴鍥?.." : "Loading Tianditu..."}
              </div>
            }
          >
            <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
          </Suspense>
        </MapErrorBoundary>
      </div>
    </section>
  );
}

 succeeded in 908ms:
import { useNavigate } from "react-router";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";
import { provinceAttractionSeed } from "../../data/atlas";
import { useRecordCityView } from "../../hooks/useCityViews";
import { getPhase1CityRouteId } from "../../lib/cityRoutes";

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
    const phase1 = getPhase1CityRouteId(cityId);
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

 succeeded in 916ms:
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

codex
现有状态 reducer 会在 `selectProvince` 和 `selectPlace` 时直接把 `is3DEnabled` 设为 `true`，所以只隐藏按钮还不够。下一步我会找出点击省份/城市的调用点，尽量把桌面/移动差异放在组件层，避免改全局状态语义过大。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\components\\map\\ProvinceHitAreaLayer.tsx" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\components\\map\\ProvinceShapeLayer.tsx" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\components\\map\\ProvinceLabelLayer.tsx" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"selectProvince\\(|selectPlace\\(|toggle3D|data-3d|3D\" src\\components src\\pages src\\store" in C:\Users\h\Documents\New project 2\v2
 succeeded in 1007ms:
import { provinceHitAreas } from "../../data/map-sources";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";

const specialMarkerIds = new Set(["hong-kong", "macau"]);

export default function ProvinceHitAreaLayer() {
  const { lang } = useLang();
  const { selectedProvinceId, selectPlace } = useAtlas();

  if (selectedProvinceId) return null;

  return (
    <div className="absolute inset-0 z-[24]">
      {provinceHitAreas
        .filter((area) => !specialMarkerIds.has(area.id))
        .map((area) => (
          <button
            key={area.id}
            type="button"
            tabIndex={-1}
            data-province-hit={area.id}
            aria-label={lang === "zh" ? area.zh : area.en}
            onClick={() => selectPlace(area.id, null)}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
            style={{
              left: `${area.x}%`,
              top: `${area.y}%`,
              width: `${area.w}%`,
              height: `${area.h}%`
            }}
          />
        ))}
    </div>
  );
}

 succeeded in 1052ms:
import { useMemo } from "react";
import clsx from "clsx";
import { useProvinceShapes } from "../../hooks/useProvinceShapes";
import { computeFocusTransform, computeUnionViewBox, type ProvinceShape } from "../../lib/shapes";
import { provinceHitAreas } from "../../data/map-sources";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";
import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";

const labelMap = new Map(provinceHitAreas.map((a) => [a.id, a]));

const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";

type ShapeButtonProps = {
  shape: ProvinceShape;
  active: boolean;
  focused: boolean;
  label: string;
  onSelect: () => void;
};

function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
  const dimmed = focused && !active;
  const baseFill = PROVINCE_COLORS[shape.id] ?? DEFAULT_PROVINCE_FILL;

  const fill = !focused
    ? baseFill
    : active
      ? "#70b7a8"
      : `${baseFill}cc`;
  const stroke = !focused
    ? "rgba(78,91,85,0.72)"
    : active
      ? "rgba(23,112,97,1)"
      : "rgba(24,32,29,0.25)";
  const strokeWidth = active ? 2.4 : 0.85;

  return (
    <g
      tabIndex={dimmed ? -1 : 0}
      role="button"
      aria-pressed={active}
      aria-label={label}
      onClick={(event) => {
        event.stopPropagation();
        onSelect();
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      className={clsx(
        "cursor-pointer outline-none transition-opacity duration-300 focus-visible:[&>path]:fill-jade-soft focus-visible:[&>path]:stroke-jade focus-visible:[&>path]:[stroke-width:2.8]",
        dimmed && "opacity-90"
      )}
      style={{ pointerEvents: "all" }}
    >
      <title>{label}</title>
      {shape.paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          style={{ transition: PATH_TRANSITION }}
        />
      ))}
    </g>
  );
}

export default function ProvinceShapeLayer() {
  const { shapes, error } = useProvinceShapes();
  const { lang } = useLang();
  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();

  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);

  const cssTransform = useMemo(() => {
    if (!shapes || !viewBox || !selectedProvinceId) return "translate(0%, 0%) scale(1)";
    const shape = shapes[selectedProvinceId];
    if (!shape) return "translate(0%, 0%) scale(1)";
    const focus = computeFocusTransform(shape, viewBox);
    const txPct = (((focus.scale - 1) * viewBox.x + focus.tx) / viewBox.width) * 100;
    const tyPct = (((focus.scale - 1) * viewBox.y + focus.ty) / viewBox.height) * 100;
    return `translate(${txPct}%, ${tyPct}%) scale(${focus.scale})`;
  }, [shapes, viewBox, selectedProvinceId]);

  if (error) {
    return (
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm font-semibold text-ink/70">
        {lang === "zh"
          ? "鍦板浘杞粨鍔犺浇澶辫触锛屽埛鏂伴噸璇曘€?
          : "Map outline failed to load. Refresh to retry."}
      </div>
    );
  }

  if (!shapes || !viewBox) return null;

  const focused = Boolean(selectedProvinceId);
  const vb = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
  const ordered = Object.values(shapes).sort((a, b) =>
    a.id === selectedProvinceId ? 1 : b.id === selectedProvinceId ? -1 : 0
  );

  return (
    <div
      className="absolute inset-0 z-10"
      style={{
        transform: cssTransform,
        transformOrigin: "0 0",
        transition: TRANSITION
      }}
    >
      <svg
        viewBox={vb}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        role="group"
        aria-label="China provinces"
      >
        {ordered.map((shape) => {
          const active = shape.id === selectedProvinceId;
          const label = labelMap.get(shape.id);
          const title = label ? (lang === "zh" ? label.zh : label.en) : shape.name;
          return (
            <ProvinceShapeButton
              key={shape.id}
              shape={shape}
              active={active}
              focused={focused}
              label={title}
              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
            />
          );
        })}
      </svg>
    </div>
  );
}

 succeeded in 1239ms:
src\store\atlas.ts:8:  is3DEnabled: boolean;
src\store\atlas.ts:14:  | { type: "toggle3D" }
src\store\atlas.ts:20:  is3DEnabled: false
src\store\atlas.ts:30:        is3DEnabled: Boolean(action.provinceId)
src\store\atlas.ts:33:      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
src\store\atlas.ts:34:    case "toggle3D":
src\store\atlas.ts:35:      return { ...state, is3DEnabled: !state.is3DEnabled };
src\store\atlas.ts:81:    toggle3D: () => dispatch({ type: "toggle3D" }),
src\pages\HomePage.tsx:62:              ? "按省份查看城市、港澳和景区地标，点击后进入 3D 实景地图。"
src\pages\HomePage.tsx:63:              : "Browse cities, Hong Kong, Macau, and landmark regions by province, then open the 3D scene."}
src\pages\MapPage.tsx:26:          {isZh ? "点击省份进入 3D 实景地图；港澳使用独立标记，3D 内包含城市和景区标注。" : "Click a province to open the 3D scene; Hong Kong and Macau use separate markers, with city and attraction labels inside 3D."}
src\components\map\Province3DOverlay.tsx:6:const Map3D = lazy(() => import("./Map3D"));
src\components\map\Province3DOverlay.tsx:8:export default function Province3DOverlay() {
src\components\map\Province3DOverlay.tsx:9:  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
src\components\map\Province3DOverlay.tsx:12:  if (!selectedProvinceId || !province || !is3DEnabled) return null;
src\components\map\Province3DOverlay.tsx:22:            {lang === "zh" ? "天地图 3D" : "Tianditu 3D"}
src\components\map\Province3DOverlay.tsx:39:            aria-label={lang === "zh" ? "关闭 3D 地图" : "Close 3D map"}
src\components\map\Province3DOverlay.tsx:59:                    ? "3D 视图加载失败，点击重置返回二维地图。"
src\components\map\Province3DOverlay.tsx:60:                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
src\components\map\Province3DOverlay.tsx:80:            <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
src\components\common\MapErrorBoundary.tsx:29:    console.error("3D map overlay failed to load", error, errorInfo);
src\components\map\ProvinceHitAreaLayer.tsx:24:            onClick={() => selectPlace(area.id, null)}
src\components\map\SpecialRegionMarkers.tsx:35:            onClick={() => selectPlace(area.id, null)}
src\components\map\HeroMap.tsx:7:import Province3DOverlay from "./Province3DOverlay";
src\components\map\HeroMap.tsx:13:  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
src\components\map\HeroMap.tsx:31:      data-3d-enabled={is3DEnabled ? "true" : "false"}
src\components\map\HeroMap.tsx:51:          <Province3DOverlay />
src\components\map\HeroMap.tsx:53:        {focused && !is3DEnabled && (
src\components\map\Map3D.tsx:16:type Map3DProps = {
src\components\map\Map3D.tsx:334:export default function Map3D({ province, provinceId, lang }: Map3DProps) {
src\components\map\Map3D.tsx:354:      selectPlace(provinceId, cityId);
src\components\map\Map3D.tsx:395:          sceneMode: Cesium.SceneMode.SCENE3D,
src\components\map\ProvinceShapeLayer.tsx:140:              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
src\components\map\ProvinceInfoCard.tsx:9:  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
src\components\map\ProvinceInfoCard.tsx:14:  if (!selectedProvinceId || !province || is3DEnabled) return null;
src\components\map\ProvinceInfoCard.tsx:27:    selectPlace(province.id, cityId);

 succeeded in 1279ms:
import { useMemo } from "react";
import clsx from "clsx";
import { useProvinceShapes } from "../../hooks/useProvinceShapes";
import { computeFocusTransform, computeUnionViewBox } from "../../lib/shapes";
import { provinceHitAreas } from "../../data/map-sources";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";

const labelMap = new Map(provinceHitAreas.map((a) => [a.id, a]));

const TRANSITION =
  "left 700ms cubic-bezier(0.4, 0, 0.2, 1), top 700ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease, font-size 400ms ease";

const HALO = {
  textShadow:
    "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 0 4px rgba(255,255,255,0.85)"
};

export default function ProvinceLabelLayer() {
  const { shapes } = useProvinceShapes();
  const { lang } = useLang();
  const { selectedProvinceId } = useAtlas();

  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);

  const focus = useMemo(() => {
    if (!shapes || !viewBox || !selectedProvinceId) return { tx: 0, ty: 0, scale: 1 };
    const shape = shapes[selectedProvinceId];
    return shape ? computeFocusTransform(shape, viewBox) : { tx: 0, ty: 0, scale: 1 };
  }, [shapes, viewBox, selectedProvinceId]);

  if (!shapes || !viewBox) return null;

  const focused = Boolean(selectedProvinceId);

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {Object.values(shapes).map((shape) => {
        if (shape.id === "hong-kong" || shape.id === "macau") return null;
        const cx = (shape.bounds.left + shape.bounds.right) / 2;
        const cy = -(shape.bounds.top + shape.bounds.bottom) / 2;
        const zoomedX = cx * focus.scale + focus.tx;
        const zoomedY = cy * focus.scale + focus.ty;
        const leftPct = ((zoomedX - viewBox.x) / viewBox.width) * 100;
        const topPct = ((zoomedY - viewBox.y) / viewBox.height) * 100;
        const active = shape.id === selectedProvinceId;
        const dimmed = focused && !active;
        const label = labelMap.get(shape.id);
        const text = label ? (lang === "zh" ? label.zh : label.en) : shape.name;
        const tiny = shape.id === "hong-kong" || shape.id === "macau";

        return (
          <span
            key={shape.id}
            className={clsx(
              "absolute hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-bold tracking-tight leading-none sm:block",
              active && "rounded-full bg-jade px-2 py-1 text-sm text-white shadow-lg",
              !active && !dimmed && !tiny && "text-[10px] text-ink/85",
              !active && !dimmed && tiny && "text-[8px] text-ink/85",
              dimmed && "opacity-0"
            )}
            style={{
              left: `${leftPct}%`,
              top: `${topPct}%`,
              transition: TRANSITION,
              ...(active ? {} : HALO)
            }}
          >
            {text}
          </span>
        );
      })}
    </div>
  );
}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\components\\map\\SpecialRegionMarkers.tsx" in C:\Users\h\Documents\New project 2\v2
 succeeded in 516ms:
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

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\pages\\MapPage.tsx" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\store\\AtlasProvider.tsx" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"toggle|3D|Reset|currentView|currentView\" src\\data src\\components src\\pages" in C:\Users\h\Documents\New project 2\v2
 succeeded in 620ms:
import { useEffect } from "react";
import { Link } from "react-router";
import HeroMap from "../components/map/HeroMap";
import { useAtlas } from "../store/atlas";
import { useLang } from "../store/language";

export default function MapPage() {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const { reset } = useAtlas();

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:py-10">
      <header className="flex flex-col gap-2">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
          {isZh ? "鈫?杩斿洖棣栭〉" : "鈫?Home"}
        </Link>
        <h1 className="text-3xl font-bold leading-tight">{isZh ? "鍦版爣鍦板浘" : "Landmark map"}</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          {isZh ? "鐐瑰嚮鐪佷唤杩涘叆 3D 瀹炴櫙鍦板浘锛涙腐婢充娇鐢ㄧ嫭绔嬫爣璁帮紝3D 鍐呭寘鍚煄甯傚拰鏅尯鏍囨敞銆? : "Click a province to open the 3D scene; Hong Kong and Macau use separate markers, with city and attraction labels inside 3D."}
        </p>
      </header>

      <HeroMap />
    </main>
  );
}

 succeeded in 642ms:
import { useMemo, useReducer, type ReactNode } from "react";
import { AtlasContext, atlasReducer, initialAtlasState } from "./atlas";

export default function AtlasProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(atlasReducer, initialAtlasState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <AtlasContext.Provider value={value}>{children}</AtlasContext.Provider>;
}

 succeeded in 633ms:
src\pages\HomePage.tsx:62:              ? "按省份查看城市、港澳和景区地标，点击后进入 3D 实景地图。"
src\pages\HomePage.tsx:63:              : "Browse cities, Hong Kong, Macau, and landmark regions by province, then open the 3D scene."}
src\pages\MapPage.tsx:26:          {isZh ? "点击省份进入 3D 实景地图；港澳使用独立标记，3D 内包含城市和景区标注。" : "Click a province to open the 3D scene; Hong Kong and Macau use separate markers, with city and attraction labels inside 3D."}
src\components\map\HeroMap.tsx:7:import Province3DOverlay from "./Province3DOverlay";
src\components\map\HeroMap.tsx:13:  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
src\components\map\HeroMap.tsx:31:      data-3d-enabled={is3DEnabled ? "true" : "false"}
src\components\map\HeroMap.tsx:51:          <Province3DOverlay />
src\components\map\HeroMap.tsx:53:        {focused && !is3DEnabled && (
src\components\map\HeroMap.tsx:59:            {lang === "zh" ? "重置" : "Reset"}
src\components\map\Map3D.tsx:16:type Map3DProps = {
src\components\map\Map3D.tsx:334:export default function Map3D({ province, provinceId, lang }: Map3DProps) {
src\components\map\Map3D.tsx:395:          sceneMode: Cesium.SceneMode.SCENE3D,
src\components\common\MapErrorBoundary.tsx:29:    console.error("3D map overlay failed to load", error, errorInfo);
src\data\i18n.ts:25:    currentView: "Current View",
src\data\i18n.ts:30:    reset: "Reset",
src\data\i18n.ts:67:    viewIn3D: "View in 3D",
src\data\i18n.ts:68:    exit3D: "Exit 3D"
src\data\i18n.ts:91:    currentView: "当前视图",
src\data\i18n.ts:129:    viewIn3D: "查看 3D 模型",
src\data\i18n.ts:130:    exit3D: "退出 3D"
src\data\practical-payments.ts:42:    bodyEn: "The #1 card-binding failure is your home bank fraud system blocking the first attempt. The app shows ambiguous \"payment failed\" with no hint that the bank is the cause. Some debit cards also need 3D Secure / international online purchases manually enabled.",
src\data\practical-payments.ts:43:    bodyZh: "绑卡失败首要原因是发卡行风控自动拦截首次中国扣款。App 只显示一句模糊的\"支付失败\"，不会说明被银行拦截。部分借记卡还需要手动开启 3D Secure / 国际在线交易。",
src\components\map\Province3DOverlay.tsx:6:const Map3D = lazy(() => import("./Map3D"));
src\components\map\Province3DOverlay.tsx:8:export default function Province3DOverlay() {
src\components\map\Province3DOverlay.tsx:9:  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
src\components\map\Province3DOverlay.tsx:12:  if (!selectedProvinceId || !province || !is3DEnabled) return null;
src\components\map\Province3DOverlay.tsx:22:            {lang === "zh" ? "天地图 3D" : "Tianditu 3D"}
src\components\map\Province3DOverlay.tsx:39:            aria-label={lang === "zh" ? "关闭 3D 地图" : "Close 3D map"}
src\components\map\Province3DOverlay.tsx:59:                    ? "3D 视图加载失败，点击重置返回二维地图。"
src\components\map\Province3DOverlay.tsx:60:                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
src\components\map\Province3DOverlay.tsx:67:                  {lang === "zh" ? "重置" : "Reset"}
src\components\map\Province3DOverlay.tsx:80:            <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
src\components\map\ProvinceInfoCard.tsx:9:  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
src\components\map\ProvinceInfoCard.tsx:14:  if (!selectedProvinceId || !province || is3DEnabled) return null;
src\components\map\ProvinceInfoCard.tsx:36:        <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>

codex
我会把桌面判定做成 SSR 安全的 hook，然后把“是否允许进入 3D”作为显式布尔值传给地图点击层。`Province3DOverlay` 也会先判断桌面端，再进入 `Suspense`，这样移动端即使状态异常也不会执行 `Map3D` 的动态导入。
apply patch
patch: completed
C:\Users\h\Documents\New project 2\v2\src\components\map\HeroMap.tsx
C:\Users\h\Documents\New project 2\v2\src\components\map\Province3DOverlay.tsx
C:\Users\h\Documents\New project 2\v2\src\components\map\ProvinceHitAreaLayer.tsx
C:\Users\h\Documents\New project 2\v2\src\components\map\ProvinceInfoCard.tsx
C:\Users\h\Documents\New project 2\v2\src\components\map\ProvinceShapeLayer.tsx
C:\Users\h\Documents\New project 2\v2\src\components\map\SpecialRegionMarkers.tsx
C:\Users\h\Documents\New project 2\v2\src\hooks\useIsDesktop.ts
C:\Users\h\Documents\New project 2\v2\src\store\atlas.ts
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index fef4713b04dfd229e932f9aeff7b99b97f616199..fc4a0b2a11134557262fc710b0e330d20223722a
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -1,18 +1,20 @@
-import { useEffect } from "react";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import ProvinceShapeLayer from "./ProvinceShapeLayer";
-import ProvinceLabelLayer from "./ProvinceLabelLayer";
-import ProvinceInfoCard from "./ProvinceInfoCard";
+import { useEffect } from "react";
+import { useAtlas } from "../../store/atlas";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
+import ProvinceShapeLayer from "./ProvinceShapeLayer";
+import ProvinceLabelLayer from "./ProvinceLabelLayer";
+import ProvinceInfoCard from "./ProvinceInfoCard";
 import Province3DOverlay from "./Province3DOverlay";
 import SpecialRegionMarkers from "./SpecialRegionMarkers";
 import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
 
-export default function HeroMap() {
-  const { lang } = useLang();
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const focused = Boolean(selectedProvinceId);
-  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
+export default function HeroMap() {
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+  const { selectedProvinceId, province, is3DEnabled, reset, toggle3D } = useAtlas();
+  const focused = Boolean(selectedProvinceId);
+  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
 
   useEffect(() => {
     if (!focused) return;
@@ -40,26 +42,37 @@
       <div
         aria-live="polite"
         className={`china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm ${focused ? "min-h-[420px]" : "min-h-[300px] sm:min-h-[260px]"}`}
-        style={{ aspectRatio: "9463 / 6675" }}
-      >
-        <div className="absolute inset-0">
-          <ProvinceShapeLayer />
-          <ProvinceLabelLayer />
-          <ProvinceHitAreaLayer />
-          <SpecialRegionMarkers />
-          <ProvinceInfoCard />
-          <Province3DOverlay />
-        </div>
-        {focused && !is3DEnabled && (
-          <button
-            type="button"
-            onClick={reset}
-            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
-          >
-            {lang === "zh" ? "重置" : "Reset"}
-          </button>
-        )}
-      </div>
-    </section>
+        style={{ aspectRatio: "9463 / 6675" }}
+      >
+        <div className="absolute inset-0">
+          <ProvinceShapeLayer enable3D={isDesktop} />
+          <ProvinceLabelLayer />
+          <ProvinceHitAreaLayer enable3D={isDesktop} />
+          <SpecialRegionMarkers enable3D={isDesktop} />
+          <ProvinceInfoCard enable3D={isDesktop} showDesktop3DNotice={!isDesktop} />
+          <Province3DOverlay />
+        </div>
+        {focused && !is3DEnabled && (
+          <div className="absolute right-3 top-3 z-30 flex flex-wrap justify-end gap-2">
+            {isDesktop && (
+              <button
+                type="button"
+                onClick={toggle3D}
+                className="rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade-deep"
+              >
+                {lang === "zh" ? "查看 3D" : "View in 3D"}
+              </button>
+            )}
+            <button
+              type="button"
+              onClick={reset}
+              className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
+            >
+              {lang === "zh" ? "重置" : "Reset"}
+            </button>
+          </div>
+        )}
+      </div>
+    </section>
   );
 }
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index e15995c3d876e19e896f84d3696f8f636cb5174d..28a734334bb621bcd201e225d354a07f1d71eae0
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,15 +1,17 @@
 import { lazy, Suspense } from "react";
 import MapErrorBoundary from "../common/MapErrorBoundary";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
 
 const Map3D = lazy(() => import("./Map3D"));
 
-export default function Province3DOverlay() {
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const { lang } = useLang();
-
-  if (!selectedProvinceId || !province || !is3DEnabled) return null;
+export default function Province3DOverlay() {
+  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+
+  if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
     <section
diff --git a/v2/src/components/map/ProvinceHitAreaLayer.tsx b/v2/src/components/map/ProvinceHitAreaLayer.tsx
index 3de420de8277d855edbcafc762ddc8b9ac8ebaa2..da36c7155664860d35c46194f475aa0701dffaad
--- a/v2/src/components/map/ProvinceHitAreaLayer.tsx
+++ b/v2/src/components/map/ProvinceHitAreaLayer.tsx
@@ -2,11 +2,15 @@
 import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
-const specialMarkerIds = new Set(["hong-kong", "macau"]);
-
-export default function ProvinceHitAreaLayer() {
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace } = useAtlas();
+const specialMarkerIds = new Set(["hong-kong", "macau"]);
+
+type ProvinceHitAreaLayerProps = {
+  enable3D: boolean;
+};
+
+export default function ProvinceHitAreaLayer({ enable3D }: ProvinceHitAreaLayerProps) {
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace } = useAtlas();
 
   if (selectedProvinceId) return null;
 
@@ -19,10 +23,10 @@
             key={area.id}
             type="button"
             tabIndex={-1}
-            data-province-hit={area.id}
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
+            data-province-hit={area.id}
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
             style={{
               left: `${area.x}%`,
               top: `${area.y}%`,
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index df60b8437c8831d0b39874c47ac52621c59cb73b..892e33faa0de620cd743860ff50a8c8440c9fc5f
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -4,9 +4,14 @@
 import { provinceAttractionSeed } from "../../data/atlas";
 import { useRecordCityView } from "../../hooks/useCityViews";
 import { getPhase1CityRouteId } from "../../lib/cityRoutes";
-
-export default function ProvinceInfoCard() {
-  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
+
+type ProvinceInfoCardProps = {
+  enable3D: boolean;
+  showDesktop3DNotice: boolean;
+};
+
+export default function ProvinceInfoCard({ enable3D, showDesktop3DNotice }: ProvinceInfoCardProps) {
+  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
   const { lang, t } = useLang();
   const recordView = useRecordCityView();
   const navigate = useNavigate();
@@ -24,8 +29,8 @@
       navigate(`/city/${phase1}`);
       return;
     }
-    selectPlace(province.id, cityId);
-  };
+    selectPlace(province.id, cityId, enable3D);
+  };
 
   return (
     <aside
@@ -35,8 +40,13 @@
       <header>
         <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
         <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
-        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
-      </header>
+        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
+        {showDesktop3DNotice && (
+          <p className="mt-1 text-xs font-medium text-muted">
+            {lang === "zh" ? "3D 视图仅在桌面端提供" : "3D scene available on desktop"}
+          </p>
+        )}
+      </header>
 
       {hasCities && (
         <section className="flex flex-col gap-1">
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index bba147bc2cd871ef03c9e185d8f43ec242ba11ed..5f0e60996c93390b30b8d06eabb648d2df05f13b
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -12,13 +12,17 @@
 const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
 const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";
 
-type ShapeButtonProps = {
-  shape: ProvinceShape;
-  active: boolean;
-  focused: boolean;
+type ShapeButtonProps = {
+  shape: ProvinceShape;
+  active: boolean;
+  focused: boolean;
   label: string;
-  onSelect: () => void;
-};
+  onSelect: () => void;
+};
+
+type ProvinceShapeLayerProps = {
+  enable3D: boolean;
+};
 
 function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
   const dimmed = focused && !active;
@@ -75,7 +79,7 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
+export default function ProvinceShapeLayer({ enable3D }: ProvinceShapeLayerProps) {
   const { shapes, error } = useProvinceShapes();
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
@@ -135,10 +139,10 @@
               key={shape.id}
               shape={shape}
               active={active}
-              focused={focused}
-              label={title}
-              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
-            />
+              focused={focused}
+              label={title}
+              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null, enable3D))}
+            />
           );
         })}
       </svg>
diff --git a/v2/src/components/map/SpecialRegionMarkers.tsx b/v2/src/components/map/SpecialRegionMarkers.tsx
index ed5ad1154358125b72c005cb3577b2d7dfc4fb21..546f0447ba97e54023c087b3c625fd02f9f4ab68
--- a/v2/src/components/map/SpecialRegionMarkers.tsx
+++ b/v2/src/components/map/SpecialRegionMarkers.tsx
@@ -4,12 +4,16 @@
 import { useLang } from "../../store/language";
 
 const markerIds = new Set(["hong-kong", "macau"]);
-const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
-  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
-  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
-};
-
-export default function SpecialRegionMarkers() {
+const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
+  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
+  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
+};
+
+type SpecialRegionMarkersProps = {
+  enable3D: boolean;
+};
+
+export default function SpecialRegionMarkers({ enable3D }: SpecialRegionMarkersProps) {
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace } = useAtlas();
   const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));
@@ -30,10 +34,10 @@
         return (
           <button
             key={area.id}
-            type="button"
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
+            type="button"
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
             style={style}
           >
             <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />
diff --git a/v2/src/hooks/useIsDesktop.ts b/v2/src/hooks/useIsDesktop.ts
new file mode 100644
index 0000000000000000000000000000000000000000..f502a2e42558b9b9488a90a2b2f95223e4b4065b
--- /dev/null
+++ b/v2/src/hooks/useIsDesktop.ts
@@ -0,0 +1,27 @@
+import { useSyncExternalStore } from "react";
+
+const DESKTOP_QUERY = "(min-width: 768px)";
+
+const getMediaQueryList = () => {
+  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
+    return null;
+  }
+
+  return window.matchMedia(DESKTOP_QUERY);
+};
+
+const getSnapshot = () => getMediaQueryList()?.matches ?? false;
+
+const getServerSnapshot = () => false;
+
+const subscribe = (onStoreChange: () => void) => {
+  const mediaQueryList = getMediaQueryList();
+  if (!mediaQueryList) return () => {};
+
+  mediaQueryList.addEventListener("change", onStoreChange);
+  return () => mediaQueryList.removeEventListener("change", onStoreChange);
+};
+
+export function useIsDesktop() {
+  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
+}
diff --git a/v2/src/store/atlas.ts b/v2/src/store/atlas.ts
index 56462baf71bc6b746613f2e0a0236ce4656625f9..669ad5e22957e56e00cccea58d87ad8b77fbe555
--- a/v2/src/store/atlas.ts
+++ b/v2/src/store/atlas.ts
@@ -8,9 +8,9 @@
   is3DEnabled: boolean;
 };
 
-export type AtlasAction =
-  | { type: "selectProvince"; provinceId: string | null }
-  | { type: "selectPlace"; provinceId: string; cityId: string | null }
+export type AtlasAction =
+  | { type: "selectProvince"; provinceId: string | null; enable3D?: boolean }
+  | { type: "selectPlace"; provinceId: string; cityId: string | null; enable3D?: boolean }
   | { type: "toggle3D" }
   | { type: "reset" };
 
@@ -22,15 +22,20 @@
 
 export const atlasReducer = (state: AtlasState, action: AtlasAction): AtlasState => {
   switch (action.type) {
-    case "selectProvince":
-      return {
-        ...state,
-        selectedProvinceId: action.provinceId,
-        selectedCityId: null,
-        is3DEnabled: Boolean(action.provinceId)
-      };
-    case "selectPlace":
-      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
+    case "selectProvince":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: null,
+        is3DEnabled: Boolean(action.provinceId) && (action.enable3D ?? true)
+      };
+    case "selectPlace":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: action.cityId,
+        is3DEnabled: action.enable3D ?? true
+      };
     case "toggle3D":
       return { ...state, is3DEnabled: !state.is3DEnabled };
     case "reset":
@@ -72,8 +77,10 @@
     ...state,
     province,
     city,
-    selectProvince: (provinceId: string | null) => dispatch({ type: "selectProvince", provinceId }),
-    selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
+    selectProvince: (provinceId: string | null, enable3D = true) =>
+      dispatch({ type: "selectProvince", provinceId, enable3D }),
+    selectPlace: (provinceId: string, cityId: string | null, enable3D = true) =>
+      dispatch({ type: "selectPlace", provinceId, cityId, enable3D }),
     selectCity: (cityId: string | null) =>
       state.selectedProvinceId
         ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })

diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index fef4713b04dfd229e932f9aeff7b99b97f616199..fc4a0b2a11134557262fc710b0e330d20223722a
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -1,18 +1,20 @@
-import { useEffect } from "react";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import ProvinceShapeLayer from "./ProvinceShapeLayer";
-import ProvinceLabelLayer from "./ProvinceLabelLayer";
-import ProvinceInfoCard from "./ProvinceInfoCard";
+import { useEffect } from "react";
+import { useAtlas } from "../../store/atlas";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
+import ProvinceShapeLayer from "./ProvinceShapeLayer";
+import ProvinceLabelLayer from "./ProvinceLabelLayer";
+import ProvinceInfoCard from "./ProvinceInfoCard";
 import Province3DOverlay from "./Province3DOverlay";
 import SpecialRegionMarkers from "./SpecialRegionMarkers";
 import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
 
-export default function HeroMap() {
-  const { lang } = useLang();
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const focused = Boolean(selectedProvinceId);
-  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
+export default function HeroMap() {
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+  const { selectedProvinceId, province, is3DEnabled, reset, toggle3D } = useAtlas();
+  const focused = Boolean(selectedProvinceId);
+  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
 
   useEffect(() => {
     if (!focused) return;
@@ -40,26 +42,37 @@
       <div
         aria-live="polite"
         className={`china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm ${focused ? "min-h-[420px]" : "min-h-[300px] sm:min-h-[260px]"}`}
-        style={{ aspectRatio: "9463 / 6675" }}
-      >
-        <div className="absolute inset-0">
-          <ProvinceShapeLayer />
-          <ProvinceLabelLayer />
-          <ProvinceHitAreaLayer />
-          <SpecialRegionMarkers />
-          <ProvinceInfoCard />
-          <Province3DOverlay />
-        </div>
-        {focused && !is3DEnabled && (
-          <button
-            type="button"
-            onClick={reset}
-            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
-          >
-            {lang === "zh" ? "重置" : "Reset"}
-          </button>
-        )}
-      </div>
-    </section>
+        style={{ aspectRatio: "9463 / 6675" }}
+      >
+        <div className="absolute inset-0">
+          <ProvinceShapeLayer enable3D={isDesktop} />
+          <ProvinceLabelLayer />
+          <ProvinceHitAreaLayer enable3D={isDesktop} />
+          <SpecialRegionMarkers enable3D={isDesktop} />
+          <ProvinceInfoCard enable3D={isDesktop} showDesktop3DNotice={!isDesktop} />
+          <Province3DOverlay />
+        </div>
+        {focused && !is3DEnabled && (
+          <div className="absolute right-3 top-3 z-30 flex flex-wrap justify-end gap-2">
+            {isDesktop && (
+              <button
+                type="button"
+                onClick={toggle3D}
+                className="rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade-deep"
+              >
+                {lang === "zh" ? "查看 3D" : "View in 3D"}
+              </button>
+            )}
+            <button
+              type="button"
+              onClick={reset}
+              className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
+            >
+              {lang === "zh" ? "重置" : "Reset"}
+            </button>
+          </div>
+        )}
+      </div>
+    </section>
   );
 }
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index e15995c3d876e19e896f84d3696f8f636cb5174d..28a734334bb621bcd201e225d354a07f1d71eae0
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,15 +1,17 @@
 import { lazy, Suspense } from "react";
 import MapErrorBoundary from "../common/MapErrorBoundary";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
 
 const Map3D = lazy(() => import("./Map3D"));
 
-export default function Province3DOverlay() {
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const { lang } = useLang();
-
-  if (!selectedProvinceId || !province || !is3DEnabled) return null;
+export default function Province3DOverlay() {
+  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+
+  if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
     <section
diff --git a/v2/src/components/map/ProvinceHitAreaLayer.tsx b/v2/src/components/map/ProvinceHitAreaLayer.tsx
index 3de420de8277d855edbcafc762ddc8b9ac8ebaa2..da36c7155664860d35c46194f475aa0701dffaad
--- a/v2/src/components/map/ProvinceHitAreaLayer.tsx
+++ b/v2/src/components/map/ProvinceHitAreaLayer.tsx
@@ -2,11 +2,15 @@
 import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
-const specialMarkerIds = new Set(["hong-kong", "macau"]);
-
-export default function ProvinceHitAreaLayer() {
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace } = useAtlas();
+const specialMarkerIds = new Set(["hong-kong", "macau"]);
+
+type ProvinceHitAreaLayerProps = {
+  enable3D: boolean;
+};
+
+export default function ProvinceHitAreaLayer({ enable3D }: ProvinceHitAreaLayerProps) {
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace } = useAtlas();
 
   if (selectedProvinceId) return null;
 
@@ -19,10 +23,10 @@
             key={area.id}
             type="button"
             tabIndex={-1}
-            data-province-hit={area.id}
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
+            data-province-hit={area.id}
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
             style={{
               left: `${area.x}%`,
               top: `${area.y}%`,
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index df60b8437c8831d0b39874c47ac52621c59cb73b..892e33faa0de620cd743860ff50a8c8440c9fc5f
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -4,9 +4,14 @@
 import { provinceAttractionSeed } from "../../data/atlas";
 import { useRecordCityView } from "../../hooks/useCityViews";
 import { getPhase1CityRouteId } from "../../lib/cityRoutes";
-
-export default function ProvinceInfoCard() {
-  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
+
+type ProvinceInfoCardProps = {
+  enable3D: boolean;
+  showDesktop3DNotice: boolean;
+};
+
+export default function ProvinceInfoCard({ enable3D, showDesktop3DNotice }: ProvinceInfoCardProps) {
+  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
   const { lang, t } = useLang();
   const recordView = useRecordCityView();
   const navigate = useNavigate();
@@ -24,8 +29,8 @@
       navigate(`/city/${phase1}`);
       return;
     }
-    selectPlace(province.id, cityId);
-  };
+    selectPlace(province.id, cityId, enable3D);
+  };
 
   return (
     <aside
@@ -35,8 +40,13 @@
       <header>
         <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
         <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
-        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
-      </header>
+        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
+        {showDesktop3DNotice && (
+          <p className="mt-1 text-xs font-medium text-muted">
+            {lang === "zh" ? "3D 视图仅在桌面端提供" : "3D scene available on desktop"}
+          </p>
+        )}
+      </header>
 
       {hasCities && (
         <section className="flex flex-col gap-1">
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index bba147bc2cd871ef03c9e185d8f43ec242ba11ed..5f0e60996c93390b30b8d06eabb648d2df05f13b
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -12,13 +12,17 @@
 const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
 const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";
 
-type ShapeButtonProps = {
-  shape: ProvinceShape;
-  active: boolean;
-  focused: boolean;
+type ShapeButtonProps = {
+  shape: ProvinceShape;
+  active: boolean;
+  focused: boolean;
   label: string;
-  onSelect: () => void;
-};
+  onSelect: () => void;
+};
+
+type ProvinceShapeLayerProps = {
+  enable3D: boolean;
+};
 
 function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
   const dimmed = focused && !active;
@@ -75,7 +79,7 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
+export default function ProvinceShapeLayer({ enable3D }: ProvinceShapeLayerProps) {
   const { shapes, error } = useProvinceShapes();
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
@@ -135,10 +139,10 @@
               key={shape.id}
               shape={shape}
               active={active}
-              focused={focused}
-              label={title}
-              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
-            />
+              focused={focused}
+              label={title}
+              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null, enable3D))}
+            />
           );
         })}
       </svg>
diff --git a/v2/src/components/map/SpecialRegionMarkers.tsx b/v2/src/components/map/SpecialRegionMarkers.tsx
index ed5ad1154358125b72c005cb3577b2d7dfc4fb21..546f0447ba97e54023c087b3c625fd02f9f4ab68
--- a/v2/src/components/map/SpecialRegionMarkers.tsx
+++ b/v2/src/components/map/SpecialRegionMarkers.tsx
@@ -4,12 +4,16 @@
 import { useLang } from "../../store/language";
 
 const markerIds = new Set(["hong-kong", "macau"]);
-const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
-  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
-  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
-};
-
-export default function SpecialRegionMarkers() {
+const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
+  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
+  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
+};
+
+type SpecialRegionMarkersProps = {
+  enable3D: boolean;
+};
+
+export default function SpecialRegionMarkers({ enable3D }: SpecialRegionMarkersProps) {
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace } = useAtlas();
   const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));
@@ -30,10 +34,10 @@
         return (
           <button
             key={area.id}
-            type="button"
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
+            type="button"
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
             style={style}
           >
             <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />
diff --git a/v2/src/hooks/useIsDesktop.ts b/v2/src/hooks/useIsDesktop.ts
new file mode 100644
index 0000000000000000000000000000000000000000..f502a2e42558b9b9488a90a2b2f95223e4b4065b
--- /dev/null
+++ b/v2/src/hooks/useIsDesktop.ts
@@ -0,0 +1,27 @@
+import { useSyncExternalStore } from "react";
+
+const DESKTOP_QUERY = "(min-width: 768px)";
+
+const getMediaQueryList = () => {
+  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
+    return null;
+  }
+
+  return window.matchMedia(DESKTOP_QUERY);
+};
+
+const getSnapshot = () => getMediaQueryList()?.matches ?? false;
+
+const getServerSnapshot = () => false;
+
+const subscribe = (onStoreChange: () => void) => {
+  const mediaQueryList = getMediaQueryList();
+  if (!mediaQueryList) return () => {};
+
+  mediaQueryList.addEventListener("change", onStoreChange);
+  return () => mediaQueryList.removeEventListener("change", onStoreChange);
+};
+
+export function useIsDesktop() {
+  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
+}
diff --git a/v2/src/store/atlas.ts b/v2/src/store/atlas.ts
index 56462baf71bc6b746613f2e0a0236ce4656625f9..669ad5e22957e56e00cccea58d87ad8b77fbe555
--- a/v2/src/store/atlas.ts
+++ b/v2/src/store/atlas.ts
@@ -8,9 +8,9 @@
   is3DEnabled: boolean;
 };
 
-export type AtlasAction =
-  | { type: "selectProvince"; provinceId: string | null }
-  | { type: "selectPlace"; provinceId: string; cityId: string | null }
+export type AtlasAction =
+  | { type: "selectProvince"; provinceId: string | null; enable3D?: boolean }
+  | { type: "selectPlace"; provinceId: string; cityId: string | null; enable3D?: boolean }
   | { type: "toggle3D" }
   | { type: "reset" };
 
@@ -22,15 +22,20 @@
 
 export const atlasReducer = (state: AtlasState, action: AtlasAction): AtlasState => {
   switch (action.type) {
-    case "selectProvince":
-      return {
-        ...state,
-        selectedProvinceId: action.provinceId,
-        selectedCityId: null,
-        is3DEnabled: Boolean(action.provinceId)
-      };
-    case "selectPlace":
-      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
+    case "selectProvince":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: null,
+        is3DEnabled: Boolean(action.provinceId) && (action.enable3D ?? true)
+      };
+    case "selectPlace":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: action.cityId,
+        is3DEnabled: action.enable3D ?? true
+      };
     case "toggle3D":
       return { ...state, is3DEnabled: !state.is3DEnabled };
     case "reset":
@@ -72,8 +77,10 @@
     ...state,
     province,
     city,
-    selectProvince: (provinceId: string | null) => dispatch({ type: "selectProvince", provinceId }),
-    selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
+    selectProvince: (provinceId: string | null, enable3D = true) =>
+      dispatch({ type: "selectProvince", provinceId, enable3D }),
+    selectPlace: (provinceId: string, cityId: string | null, enable3D = true) =>
+      dispatch({ type: "selectPlace", provinceId, cityId, enable3D }),
     selectCity: (cityId: string | null) =>
       state.selectedProvinceId
         ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })

codex
改动已落到组件和 store。现在我检查类型签名、Tailwind 类名和所有调用点，确保没有遗漏使用旧 prop/旧函数形态的地方。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"ProvinceShapeLayer|ProvinceHitAreaLayer|SpecialRegionMarkers|ProvinceInfoCard|selectPlace\\(|selectProvince\\(|useIsDesktop|bg-jade-deep|jade-deep\" src" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"--color-jade|jade-deep|bg-jade|text-jade\" src\\styles src" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git diff -- v2/src/hooks/useIsDesktop.ts v2/src/store/atlas.ts v2/src/components/map/HeroMap.tsx v2/src/components/map/Province3DOverlay.tsx v2/src/components/map/ProvinceHitAreaLayer.tsx v2/src/components/map/ProvinceShapeLayer.tsx v2/src/components/map/SpecialRegionMarkers.tsx v2/src/components/map/ProvinceInfoCard.tsx' in C:\Users\h\Documents\New project 2
 succeeded in 600ms:
src\hooks\useIsDesktop.ts:25:export function useIsDesktop() {
src\components\map\HeroMap.tsx:4:import { useIsDesktop } from "../../hooks/useIsDesktop";
src\components\map\HeroMap.tsx:5:import ProvinceShapeLayer from "./ProvinceShapeLayer";
src\components\map\HeroMap.tsx:7:import ProvinceInfoCard from "./ProvinceInfoCard";
src\components\map\HeroMap.tsx:9:import SpecialRegionMarkers from "./SpecialRegionMarkers";
src\components\map\HeroMap.tsx:10:import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
src\components\map\HeroMap.tsx:14:  const isDesktop = useIsDesktop();
src\components\map\HeroMap.tsx:48:          <ProvinceShapeLayer enable3D={isDesktop} />
src\components\map\HeroMap.tsx:50:          <ProvinceHitAreaLayer enable3D={isDesktop} />
src\components\map\HeroMap.tsx:51:          <SpecialRegionMarkers enable3D={isDesktop} />
src\components\map\HeroMap.tsx:52:          <ProvinceInfoCard enable3D={isDesktop} showDesktop3DNotice={!isDesktop} />
src\components\map\HeroMap.tsx:61:                className="rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade-deep"
src\components\map\Map3D.tsx:354:      selectPlace(provinceId, cityId);
src\components\map\Province3DOverlay.tsx:5:import { useIsDesktop } from "../../hooks/useIsDesktop";
src\components\map\Province3DOverlay.tsx:12:  const isDesktop = useIsDesktop();
src\components\map\ProvinceHitAreaLayer.tsx:7:type ProvinceHitAreaLayerProps = {
src\components\map\ProvinceHitAreaLayer.tsx:11:export default function ProvinceHitAreaLayer({ enable3D }: ProvinceHitAreaLayerProps) {
src\components\map\ProvinceHitAreaLayer.tsx:28:            onClick={() => selectPlace(area.id, null, enable3D)}
src\components\map\ProvinceInfoCard.tsx:8:type ProvinceInfoCardProps = {
src\components\map\ProvinceInfoCard.tsx:13:export default function ProvinceInfoCard({ enable3D, showDesktop3DNotice }: ProvinceInfoCardProps) {
src\components\map\ProvinceInfoCard.tsx:32:    selectPlace(province.id, cityId, enable3D);
src\components\map\SpecialRegionMarkers.tsx:12:type SpecialRegionMarkersProps = {
src\components\map\SpecialRegionMarkers.tsx:16:export default function SpecialRegionMarkers({ enable3D }: SpecialRegionMarkersProps) {
src\components\map\SpecialRegionMarkers.tsx:39:            onClick={() => selectPlace(area.id, null, enable3D)}
src\components\map\ProvinceShapeLayer.tsx:23:type ProvinceShapeLayerProps = {
src\components\map\ProvinceShapeLayer.tsx:82:export default function ProvinceShapeLayer({ enable3D }: ProvinceShapeLayerProps) {
src\components\map\ProvinceShapeLayer.tsx:144:              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null, enable3D))}

2026-05-12T03:13:41.425358Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.6 seconds
Output:
rg: unrecognized flag --color-jade|jade-deep|bg-jade|text-jade

 exited 1 in 622ms:
rg: unrecognized flag --color-jade|jade-deep|bg-jade|text-jade

 succeeded in 662ms:
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index fef4713..fc4a0b2 100644
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -1,6 +1,7 @@
 import { useEffect } from "react";
 import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
 import ProvinceShapeLayer from "./ProvinceShapeLayer";
 import ProvinceLabelLayer from "./ProvinceLabelLayer";
 import ProvinceInfoCard from "./ProvinceInfoCard";
@@ -10,7 +11,8 @@ import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
 
 export default function HeroMap() {
   const { lang } = useLang();
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
+  const isDesktop = useIsDesktop();
+  const { selectedProvinceId, province, is3DEnabled, reset, toggle3D } = useAtlas();
   const focused = Boolean(selectedProvinceId);
   const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
 
@@ -43,21 +45,32 @@ export default function HeroMap() {
         style={{ aspectRatio: "9463 / 6675" }}
       >
         <div className="absolute inset-0">
-          <ProvinceShapeLayer />
+          <ProvinceShapeLayer enable3D={isDesktop} />
           <ProvinceLabelLayer />
-          <ProvinceHitAreaLayer />
-          <SpecialRegionMarkers />
-          <ProvinceInfoCard />
+          <ProvinceHitAreaLayer enable3D={isDesktop} />
+          <SpecialRegionMarkers enable3D={isDesktop} />
+          <ProvinceInfoCard enable3D={isDesktop} showDesktop3DNotice={!isDesktop} />
           <Province3DOverlay />
         </div>
         {focused && !is3DEnabled && (
-          <button
-            type="button"
-            onClick={reset}
-            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
-          >
-            {lang === "zh" ? "重置" : "Reset"}
-          </button>
+          <div className="absolute right-3 top-3 z-30 flex flex-wrap justify-end gap-2">
+            {isDesktop && (
+              <button
+                type="button"
+                onClick={toggle3D}
+                className="rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade-deep"
+              >
+                {lang === "zh" ? "查看 3D" : "View in 3D"}
+              </button>
+            )}
+            <button
+              type="button"
+              onClick={reset}
+              className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
+            >
+              {lang === "zh" ? "重置" : "Reset"}
+            </button>
+          </div>
         )}
       </div>
     </section>
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index e15995c..28a7343 100644
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -2,14 +2,16 @@ import { lazy, Suspense } from "react";
 import MapErrorBoundary from "../common/MapErrorBoundary";
 import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
 
 const Map3D = lazy(() => import("./Map3D"));
 
 export default function Province3DOverlay() {
   const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
   const { lang } = useLang();
+  const isDesktop = useIsDesktop();
 
-  if (!selectedProvinceId || !province || !is3DEnabled) return null;
+  if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
     <section
diff --git a/v2/src/components/map/ProvinceHitAreaLayer.tsx b/v2/src/components/map/ProvinceHitAreaLayer.tsx
index 3de420d..da36c71 100644
--- a/v2/src/components/map/ProvinceHitAreaLayer.tsx
+++ b/v2/src/components/map/ProvinceHitAreaLayer.tsx
@@ -4,7 +4,11 @@ import { useLang } from "../../store/language";
 
 const specialMarkerIds = new Set(["hong-kong", "macau"]);
 
-export default function ProvinceHitAreaLayer() {
+type ProvinceHitAreaLayerProps = {
+  enable3D: boolean;
+};
+
+export default function ProvinceHitAreaLayer({ enable3D }: ProvinceHitAreaLayerProps) {
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace } = useAtlas();
 
@@ -21,7 +25,7 @@ export default function ProvinceHitAreaLayer() {
             tabIndex={-1}
             data-province-hit={area.id}
             aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
+            onClick={() => selectPlace(area.id, null, enable3D)}
             className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
             style={{
               left: `${area.x}%`,
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index df60b84..892e33f 100644
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -5,7 +5,12 @@ import { provinceAttractionSeed } from "../../data/atlas";
 import { useRecordCityView } from "../../hooks/useCityViews";
 import { getPhase1CityRouteId } from "../../lib/cityRoutes";
 
-export default function ProvinceInfoCard() {
+type ProvinceInfoCardProps = {
+  enable3D: boolean;
+  showDesktop3DNotice: boolean;
+};
+
+export default function ProvinceInfoCard({ enable3D, showDesktop3DNotice }: ProvinceInfoCardProps) {
   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
   const { lang, t } = useLang();
   const recordView = useRecordCityView();
@@ -24,7 +29,7 @@ export default function ProvinceInfoCard() {
       navigate(`/city/${phase1}`);
       return;
     }
-    selectPlace(province.id, cityId);
+    selectPlace(province.id, cityId, enable3D);
   };
 
   return (
@@ -36,6 +41,11 @@ export default function ProvinceInfoCard() {
         <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
         <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
         <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
+        {showDesktop3DNotice && (
+          <p className="mt-1 text-xs font-medium text-muted">
+            {lang === "zh" ? "3D 视图仅在桌面端提供" : "3D scene available on desktop"}
+          </p>
+        )}
       </header>
 
       {hasCities && (
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index bba147b..5f0e609 100644
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -20,6 +20,10 @@ type ShapeButtonProps = {
   onSelect: () => void;
 };
 
+type ProvinceShapeLayerProps = {
+  enable3D: boolean;
+};
+
 function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
   const dimmed = focused && !active;
   const baseFill = PROVINCE_COLORS[shape.id] ?? DEFAULT_PROVINCE_FILL;
@@ -75,7 +79,7 @@ function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeB
   );
 }
 
-export default function ProvinceShapeLayer() {
+export default function ProvinceShapeLayer({ enable3D }: ProvinceShapeLayerProps) {
   const { shapes, error } = useProvinceShapes();
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
@@ -137,7 +141,7 @@ export default function ProvinceShapeLayer() {
               active={active}
               focused={focused}
               label={title}
-              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
+              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null, enable3D))}
             />
           );
         })}
diff --git a/v2/src/components/map/SpecialRegionMarkers.tsx b/v2/src/components/map/SpecialRegionMarkers.tsx
index ed5ad11..546f044 100644
--- a/v2/src/components/map/SpecialRegionMarkers.tsx
+++ b/v2/src/components/map/SpecialRegionMarkers.tsx
@@ -9,7 +9,11 @@ const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobile
   macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
 };
 
-export default function SpecialRegionMarkers() {
+type SpecialRegionMarkersProps = {
+  enable3D: boolean;
+};
+
+export default function SpecialRegionMarkers({ enable3D }: SpecialRegionMarkersProps) {
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace } = useAtlas();
   const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));
@@ -32,7 +36,7 @@ export default function SpecialRegionMarkers() {
             key={area.id}
             type="button"
             aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
+            onClick={() => selectPlace(area.id, null, enable3D)}
             className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
             style={style}
           >
diff --git a/v2/src/store/atlas.ts b/v2/src/store/atlas.ts
index 56462ba..669ad5e 100644
--- a/v2/src/store/atlas.ts
+++ b/v2/src/store/atlas.ts
@@ -9,8 +9,8 @@ export type AtlasState = {
 };
 
 export type AtlasAction =
-  | { type: "selectProvince"; provinceId: string | null }
-  | { type: "selectPlace"; provinceId: string; cityId: string | null }
+  | { type: "selectProvince"; provinceId: string | null; enable3D?: boolean }
+  | { type: "selectPlace"; provinceId: string; cityId: string | null; enable3D?: boolean }
   | { type: "toggle3D" }
   | { type: "reset" };
 
@@ -27,10 +27,15 @@ export const atlasReducer = (state: AtlasState, action: AtlasAction): AtlasState
         ...state,
         selectedProvinceId: action.provinceId,
         selectedCityId: null,
-        is3DEnabled: Boolean(action.provinceId)
+        is3DEnabled: Boolean(action.provinceId) && (action.enable3D ?? true)
       };
     case "selectPlace":
-      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: action.cityId,
+        is3DEnabled: action.enable3D ?? true
+      };
     case "toggle3D":
       return { ...state, is3DEnabled: !state.is3DEnabled };
     case "reset":
@@ -72,8 +77,10 @@ export function useAtlas() {
     ...state,
     province,
     city,
-    selectProvince: (provinceId: string | null) => dispatch({ type: "selectProvince", provinceId }),
-    selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
+    selectProvince: (provinceId: string | null, enable3D = true) =>
+      dispatch({ type: "selectProvince", provinceId, enable3D }),
+    selectPlace: (provinceId: string, cityId: string | null, enable3D = true) =>
+      dispatch({ type: "selectPlace", provinceId, cityId, enable3D }),
     selectCity: (cityId: string | null) =>
       state.selectedProvinceId
         ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })
warning: in the working copy of 'v2/src/components/map/HeroMap.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/map/Province3DOverlay.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/map/ProvinceHitAreaLayer.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/map/ProvinceInfoCard.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/map/ProvinceShapeLayer.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/map/SpecialRegionMarkers.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/store/atlas.ts', LF will be replaced by CRLF the next time Git touches it

diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index fef4713b04dfd229e932f9aeff7b99b97f616199..fc4a0b2a11134557262fc710b0e330d20223722a
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -1,18 +1,20 @@
-import { useEffect } from "react";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import ProvinceShapeLayer from "./ProvinceShapeLayer";
-import ProvinceLabelLayer from "./ProvinceLabelLayer";
-import ProvinceInfoCard from "./ProvinceInfoCard";
+import { useEffect } from "react";
+import { useAtlas } from "../../store/atlas";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
+import ProvinceShapeLayer from "./ProvinceShapeLayer";
+import ProvinceLabelLayer from "./ProvinceLabelLayer";
+import ProvinceInfoCard from "./ProvinceInfoCard";
 import Province3DOverlay from "./Province3DOverlay";
 import SpecialRegionMarkers from "./SpecialRegionMarkers";
 import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
 
-export default function HeroMap() {
-  const { lang } = useLang();
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const focused = Boolean(selectedProvinceId);
-  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
+export default function HeroMap() {
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+  const { selectedProvinceId, province, is3DEnabled, reset, toggle3D } = useAtlas();
+  const focused = Boolean(selectedProvinceId);
+  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
 
   useEffect(() => {
     if (!focused) return;
@@ -40,26 +42,37 @@
       <div
         aria-live="polite"
         className={`china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm ${focused ? "min-h-[420px]" : "min-h-[300px] sm:min-h-[260px]"}`}
-        style={{ aspectRatio: "9463 / 6675" }}
-      >
-        <div className="absolute inset-0">
-          <ProvinceShapeLayer />
-          <ProvinceLabelLayer />
-          <ProvinceHitAreaLayer />
-          <SpecialRegionMarkers />
-          <ProvinceInfoCard />
-          <Province3DOverlay />
-        </div>
-        {focused && !is3DEnabled && (
-          <button
-            type="button"
-            onClick={reset}
-            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
-          >
-            {lang === "zh" ? "重置" : "Reset"}
-          </button>
-        )}
-      </div>
-    </section>
+        style={{ aspectRatio: "9463 / 6675" }}
+      >
+        <div className="absolute inset-0">
+          <ProvinceShapeLayer enable3D={isDesktop} />
+          <ProvinceLabelLayer />
+          <ProvinceHitAreaLayer enable3D={isDesktop} />
+          <SpecialRegionMarkers enable3D={isDesktop} />
+          <ProvinceInfoCard enable3D={isDesktop} showDesktop3DNotice={!isDesktop} />
+          <Province3DOverlay />
+        </div>
+        {focused && !is3DEnabled && (
+          <div className="absolute right-3 top-3 z-30 flex flex-wrap justify-end gap-2">
+            {isDesktop && (
+              <button
+                type="button"
+                onClick={toggle3D}
+                className="rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade-deep"
+              >
+                {lang === "zh" ? "查看 3D" : "View in 3D"}
+              </button>
+            )}
+            <button
+              type="button"
+              onClick={reset}
+              className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
+            >
+              {lang === "zh" ? "重置" : "Reset"}
+            </button>
+          </div>
+        )}
+      </div>
+    </section>
   );
 }
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index e15995c3d876e19e896f84d3696f8f636cb5174d..28a734334bb621bcd201e225d354a07f1d71eae0
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,15 +1,17 @@
 import { lazy, Suspense } from "react";
 import MapErrorBoundary from "../common/MapErrorBoundary";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
 
 const Map3D = lazy(() => import("./Map3D"));
 
-export default function Province3DOverlay() {
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const { lang } = useLang();
-
-  if (!selectedProvinceId || !province || !is3DEnabled) return null;
+export default function Province3DOverlay() {
+  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+
+  if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
     <section
diff --git a/v2/src/components/map/ProvinceHitAreaLayer.tsx b/v2/src/components/map/ProvinceHitAreaLayer.tsx
index 3de420de8277d855edbcafc762ddc8b9ac8ebaa2..da36c7155664860d35c46194f475aa0701dffaad
--- a/v2/src/components/map/ProvinceHitAreaLayer.tsx
+++ b/v2/src/components/map/ProvinceHitAreaLayer.tsx
@@ -2,11 +2,15 @@
 import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
-const specialMarkerIds = new Set(["hong-kong", "macau"]);
-
-export default function ProvinceHitAreaLayer() {
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace } = useAtlas();
+const specialMarkerIds = new Set(["hong-kong", "macau"]);
+
+type ProvinceHitAreaLayerProps = {
+  enable3D: boolean;
+};
+
+export default function ProvinceHitAreaLayer({ enable3D }: ProvinceHitAreaLayerProps) {
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace } = useAtlas();
 
   if (selectedProvinceId) return null;
 
@@ -19,10 +23,10 @@
             key={area.id}
             type="button"
             tabIndex={-1}
-            data-province-hit={area.id}
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
+            data-province-hit={area.id}
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
             style={{
               left: `${area.x}%`,
               top: `${area.y}%`,
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index df60b8437c8831d0b39874c47ac52621c59cb73b..892e33faa0de620cd743860ff50a8c8440c9fc5f
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -4,9 +4,14 @@
 import { provinceAttractionSeed } from "../../data/atlas";
 import { useRecordCityView } from "../../hooks/useCityViews";
 import { getPhase1CityRouteId } from "../../lib/cityRoutes";
-
-export default function ProvinceInfoCard() {
-  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
+
+type ProvinceInfoCardProps = {
+  enable3D: boolean;
+  showDesktop3DNotice: boolean;
+};
+
+export default function ProvinceInfoCard({ enable3D, showDesktop3DNotice }: ProvinceInfoCardProps) {
+  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
   const { lang, t } = useLang();
   const recordView = useRecordCityView();
   const navigate = useNavigate();
@@ -24,8 +29,8 @@
       navigate(`/city/${phase1}`);
       return;
     }
-    selectPlace(province.id, cityId);
-  };
+    selectPlace(province.id, cityId, enable3D);
+  };
 
   return (
     <aside
@@ -35,8 +40,13 @@
       <header>
         <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
         <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
-        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
-      </header>
+        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
+        {showDesktop3DNotice && (
+          <p className="mt-1 text-xs font-medium text-muted">
+            {lang === "zh" ? "3D 视图仅在桌面端提供" : "3D scene available on desktop"}
+          </p>
+        )}
+      </header>
 
       {hasCities && (
         <section className="flex flex-col gap-1">
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index bba147bc2cd871ef03c9e185d8f43ec242ba11ed..5f0e60996c93390b30b8d06eabb648d2df05f13b
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -12,13 +12,17 @@
 const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
 const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";
 
-type ShapeButtonProps = {
-  shape: ProvinceShape;
-  active: boolean;
-  focused: boolean;
+type ShapeButtonProps = {
+  shape: ProvinceShape;
+  active: boolean;
+  focused: boolean;
   label: string;
-  onSelect: () => void;
-};
+  onSelect: () => void;
+};
+
+type ProvinceShapeLayerProps = {
+  enable3D: boolean;
+};
 
 function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
   const dimmed = focused && !active;
@@ -75,7 +79,7 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
+export default function ProvinceShapeLayer({ enable3D }: ProvinceShapeLayerProps) {
   const { shapes, error } = useProvinceShapes();
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
@@ -135,10 +139,10 @@
               key={shape.id}
               shape={shape}
               active={active}
-              focused={focused}
-              label={title}
-              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
-            />
+              focused={focused}
+              label={title}
+              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null, enable3D))}
+            />
           );
         })}
       </svg>
diff --git a/v2/src/components/map/SpecialRegionMarkers.tsx b/v2/src/components/map/SpecialRegionMarkers.tsx
index ed5ad1154358125b72c005cb3577b2d7dfc4fb21..546f0447ba97e54023c087b3c625fd02f9f4ab68
--- a/v2/src/components/map/SpecialRegionMarkers.tsx
+++ b/v2/src/components/map/SpecialRegionMarkers.tsx
@@ -4,12 +4,16 @@
 import { useLang } from "../../store/language";
 
 const markerIds = new Set(["hong-kong", "macau"]);
-const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
-  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
-  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
-};
-
-export default function SpecialRegionMarkers() {
+const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
+  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
+  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
+};
+
+type SpecialRegionMarkersProps = {
+  enable3D: boolean;
+};
+
+export default function SpecialRegionMarkers({ enable3D }: SpecialRegionMarkersProps) {
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace } = useAtlas();
   const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));
@@ -30,10 +34,10 @@
         return (
           <button
             key={area.id}
-            type="button"
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
+            type="button"
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
             style={style}
           >
             <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />
diff --git a/v2/src/hooks/useIsDesktop.ts b/v2/src/hooks/useIsDesktop.ts
new file mode 100644
index 0000000000000000000000000000000000000000..f502a2e42558b9b9488a90a2b2f95223e4b4065b
--- /dev/null
+++ b/v2/src/hooks/useIsDesktop.ts
@@ -0,0 +1,27 @@
+import { useSyncExternalStore } from "react";
+
+const DESKTOP_QUERY = "(min-width: 768px)";
+
+const getMediaQueryList = () => {
+  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
+    return null;
+  }
+
+  return window.matchMedia(DESKTOP_QUERY);
+};
+
+const getSnapshot = () => getMediaQueryList()?.matches ?? false;
+
+const getServerSnapshot = () => false;
+
+const subscribe = (onStoreChange: () => void) => {
+  const mediaQueryList = getMediaQueryList();
+  if (!mediaQueryList) return () => {};
+
+  mediaQueryList.addEventListener("change", onStoreChange);
+  return () => mediaQueryList.removeEventListener("change", onStoreChange);
+};
+
+export function useIsDesktop() {
+  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
+}
diff --git a/v2/src/store/atlas.ts b/v2/src/store/atlas.ts
index 56462baf71bc6b746613f2e0a0236ce4656625f9..669ad5e22957e56e00cccea58d87ad8b77fbe555
--- a/v2/src/store/atlas.ts
+++ b/v2/src/store/atlas.ts
@@ -8,9 +8,9 @@
   is3DEnabled: boolean;
 };
 
-export type AtlasAction =
-  | { type: "selectProvince"; provinceId: string | null }
-  | { type: "selectPlace"; provinceId: string; cityId: string | null }
+export type AtlasAction =
+  | { type: "selectProvince"; provinceId: string | null; enable3D?: boolean }
+  | { type: "selectPlace"; provinceId: string; cityId: string | null; enable3D?: boolean }
   | { type: "toggle3D" }
   | { type: "reset" };
 
@@ -22,15 +22,20 @@
 
 export const atlasReducer = (state: AtlasState, action: AtlasAction): AtlasState => {
   switch (action.type) {
-    case "selectProvince":
-      return {
-        ...state,
-        selectedProvinceId: action.provinceId,
-        selectedCityId: null,
-        is3DEnabled: Boolean(action.provinceId)
-      };
-    case "selectPlace":
-      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
+    case "selectProvince":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: null,
+        is3DEnabled: Boolean(action.provinceId) && (action.enable3D ?? true)
+      };
+    case "selectPlace":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: action.cityId,
+        is3DEnabled: action.enable3D ?? true
+      };
     case "toggle3D":
       return { ...state, is3DEnabled: !state.is3DEnabled };
     case "reset":
@@ -72,8 +77,10 @@
     ...state,
     province,
     city,
-    selectProvince: (provinceId: string | null) => dispatch({ type: "selectProvince", provinceId }),
-    selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
+    selectProvince: (provinceId: string | null, enable3D = true) =>
+      dispatch({ type: "selectProvince", provinceId, enable3D }),
+    selectPlace: (provinceId: string, cityId: string | null, enable3D = true) =>
+      dispatch({ type: "selectPlace", provinceId, cityId, enable3D }),
     selectCity: (cityId: string | null) =>
       state.selectedProvinceId
         ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n -e "jade-deep|bg-jade|text-jade|--color-jade" src' in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"selectCity:|selectPlace\\(|selectProvince\\(|toggle3D\" src\\store\\atlas.ts src\\components\\map" in C:\Users\h\Documents\New project 2\v2
 succeeded in 573ms:
src\store\atlas.ts:14:  | { type: "toggle3D" }
src\store\atlas.ts:39:    case "toggle3D":
src\store\atlas.ts:84:    selectCity: (cityId: string | null) =>
src\store\atlas.ts:88:    toggle3D: () => dispatch({ type: "toggle3D" }),
src\components\map\Map3D.tsx:354:      selectPlace(provinceId, cityId);
src\components\map\HeroMap.tsx:15:  const { selectedProvinceId, province, is3DEnabled, reset, toggle3D } = useAtlas();
src\components\map\HeroMap.tsx:60:                onClick={toggle3D}
src\components\map\SpecialRegionMarkers.tsx:39:            onClick={() => selectPlace(area.id, null, enable3D)}
src\components\map\ProvinceShapeLayer.tsx:144:              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null, enable3D))}
src\components\map\ProvinceInfoCard.tsx:32:    selectPlace(province.id, cityId, enable3D);
src\components\map\ProvinceHitAreaLayer.tsx:28:            onClick={() => selectPlace(area.id, null, enable3D)}

 succeeded in 592ms:
src\components\common\CityFurtherReading.tsx:35:              className="flex flex-col gap-1 rounded-lg border border-line bg-white p-4 hover:border-jade hover:bg-jade-soft"
src\components\common\CityFurtherReading.tsx:39:              <span className="text-[10px] uppercase tracking-wider text-jade">{new URL(p.url).hostname} →</span>
src\pages\CityPage.tsx:26:        <Link to="/" className="text-jade hover:underline">{isZh ? "返回首页" : "← Home"}</Link>
src\pages\CityPage.tsx:37:        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
src\pages\CityPage.tsx:64:              <Link to="/ask" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
src\pages\CityPage.tsx:67:              <Link to="/share" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
src\styles\globals.css:8:  --color-jade: #176f62;
src\styles\globals.css:9:  --color-jade-soft: rgba(23, 112, 97, 0.08);
src\pages\AskPage.tsx:146:      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
src\pages\HomePage.tsx:65:          <span className="text-sm font-bold text-jade">
src\pages\HomePage.tsx:82:            <span className="text-xl text-muted transition group-hover:translate-x-1 group-hover:text-jade" aria-hidden>
src\pages\SourcesPage.tsx:47:      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
src\pages\SourcesPage.tsx:101:            className="flex-1 text-ink hover:text-jade hover:underline"
src\components\common\SourcesNote.tsx:12:          <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
src\components\common\SourcesNote.tsx:19:          <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
src\components\city\CityNav.tsx:58:                    ? "bg-jade-soft font-bold text-jade"
src\pages\GuidePage.tsx:43:        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
src\pages\GuidePage.tsx:62:        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
src\pages\SharePage.tsx:157:      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
src\components\city\CityIntro.tsx:135:                      ? "bg-jade-soft text-jade"
src\components\city\CityIntro.tsx:153:                className="self-start text-[10px] font-bold uppercase tracking-wider text-jade hover:underline"
src\components\city\CityIntro.tsx:191:          : "border-line bg-white text-ink hover:border-jade hover:text-jade"
src\data\phase2-preview.ts:36:    colorClass: "bg-jade-soft text-jade border-jade/30"
src\pages\MapPage.tsx:21:        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
src\components\city\CityImagePanel.tsx:65:                i === idx ? "bg-jade" : "bg-line hover:bg-muted"
src\components\map\HeroMap.tsx:61:                className="rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade-deep"
src\components\layout\SiteFooter.tsx:11:        <Link to="/sources" className="hover:text-jade">
src\components\layout\SiteFooter.tsx:14:        <a href="#top" className="hover:text-jade">{t("backToTop")}</a>
src\components\pillar\EmergencyBriefing.tsx:71:                  : "border-line bg-white text-ink hover:border-jade hover:text-jade"
src\components\pillar\EmergencyBriefing.tsx:127:          <a href={mfaConsular.url} target="_blank" rel="noreferrer" className="font-bold text-jade hover:underline">
src\components\pillar\FoodGuide.tsx:50:                  : "border-line bg-white text-ink hover:border-jade hover:text-jade"
src\components\pillar\FoodGuide.tsx:69:                className="text-[10px] font-bold uppercase tracking-wider text-jade hover:underline"
src\components\map\Province3DOverlay.tsx:43:            className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-lg font-bold leading-none text-ink shadow-sm hover:border-jade hover:text-jade"
src\components\pillar\VisaChecker.tsx:92:      <div className="flex flex-col gap-2 rounded-lg bg-jade-soft p-4">
src\components\pillar\VisaChecker.tsx:93:        <strong className="text-base text-jade">
src\components\pillar\VisaChecker.tsx:107:      <div className="flex flex-col gap-2 rounded-lg bg-jade-soft p-4">
src\components\pillar\VisaChecker.tsx:108:        <strong className="text-base text-jade">
src\components\pillar\VisaChecker.tsx:242:            <span className="rounded-full bg-jade-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-jade">
src\components\pillar\TransportGuide.tsx:63:                  : "border-line bg-white text-ink hover:border-jade hover:text-jade"
src\components\pillar\TransportGuide.tsx:79:                  <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
src\components\map\ProvinceLabelLayer.tsx:57:              active && "rounded-full bg-jade px-2 py-1 text-sm text-white shadow-lg",
src\components\map\SpecialRegionMarkers.tsx:40:            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
src\components\map\SpecialRegionMarkers.tsx:43:            <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />

diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index fef4713b04dfd229e932f9aeff7b99b97f616199..fc4a0b2a11134557262fc710b0e330d20223722a
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -1,18 +1,20 @@
-import { useEffect } from "react";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import ProvinceShapeLayer from "./ProvinceShapeLayer";
-import ProvinceLabelLayer from "./ProvinceLabelLayer";
-import ProvinceInfoCard from "./ProvinceInfoCard";
+import { useEffect } from "react";
+import { useAtlas } from "../../store/atlas";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
+import ProvinceShapeLayer from "./ProvinceShapeLayer";
+import ProvinceLabelLayer from "./ProvinceLabelLayer";
+import ProvinceInfoCard from "./ProvinceInfoCard";
 import Province3DOverlay from "./Province3DOverlay";
 import SpecialRegionMarkers from "./SpecialRegionMarkers";
 import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
 
-export default function HeroMap() {
-  const { lang } = useLang();
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const focused = Boolean(selectedProvinceId);
-  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
+export default function HeroMap() {
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+  const { selectedProvinceId, province, is3DEnabled, reset, toggle3D } = useAtlas();
+  const focused = Boolean(selectedProvinceId);
+  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
 
   useEffect(() => {
     if (!focused) return;
@@ -40,26 +42,37 @@
       <div
         aria-live="polite"
         className={`china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm ${focused ? "min-h-[420px]" : "min-h-[300px] sm:min-h-[260px]"}`}
-        style={{ aspectRatio: "9463 / 6675" }}
-      >
-        <div className="absolute inset-0">
-          <ProvinceShapeLayer />
-          <ProvinceLabelLayer />
-          <ProvinceHitAreaLayer />
-          <SpecialRegionMarkers />
-          <ProvinceInfoCard />
-          <Province3DOverlay />
-        </div>
-        {focused && !is3DEnabled && (
-          <button
-            type="button"
-            onClick={reset}
-            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
-          >
-            {lang === "zh" ? "重置" : "Reset"}
-          </button>
-        )}
-      </div>
-    </section>
+        style={{ aspectRatio: "9463 / 6675" }}
+      >
+        <div className="absolute inset-0">
+          <ProvinceShapeLayer enable3D={isDesktop} />
+          <ProvinceLabelLayer />
+          <ProvinceHitAreaLayer enable3D={isDesktop} />
+          <SpecialRegionMarkers enable3D={isDesktop} />
+          <ProvinceInfoCard enable3D={isDesktop} showDesktop3DNotice={!isDesktop} />
+          <Province3DOverlay />
+        </div>
+        {focused && !is3DEnabled && (
+          <div className="absolute right-3 top-3 z-30 flex flex-wrap justify-end gap-2">
+            {isDesktop && (
+              <button
+                type="button"
+                onClick={toggle3D}
+                className="rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade-deep"
+              >
+                {lang === "zh" ? "查看 3D" : "View in 3D"}
+              </button>
+            )}
+            <button
+              type="button"
+              onClick={reset}
+              className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
+            >
+              {lang === "zh" ? "重置" : "Reset"}
+            </button>
+          </div>
+        )}
+      </div>
+    </section>
   );
 }
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index e15995c3d876e19e896f84d3696f8f636cb5174d..28a734334bb621bcd201e225d354a07f1d71eae0
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,15 +1,17 @@
 import { lazy, Suspense } from "react";
 import MapErrorBoundary from "../common/MapErrorBoundary";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
 
 const Map3D = lazy(() => import("./Map3D"));
 
-export default function Province3DOverlay() {
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const { lang } = useLang();
-
-  if (!selectedProvinceId || !province || !is3DEnabled) return null;
+export default function Province3DOverlay() {
+  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+
+  if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
     <section
diff --git a/v2/src/components/map/ProvinceHitAreaLayer.tsx b/v2/src/components/map/ProvinceHitAreaLayer.tsx
index 3de420de8277d855edbcafc762ddc8b9ac8ebaa2..da36c7155664860d35c46194f475aa0701dffaad
--- a/v2/src/components/map/ProvinceHitAreaLayer.tsx
+++ b/v2/src/components/map/ProvinceHitAreaLayer.tsx
@@ -2,11 +2,15 @@
 import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
-const specialMarkerIds = new Set(["hong-kong", "macau"]);
-
-export default function ProvinceHitAreaLayer() {
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace } = useAtlas();
+const specialMarkerIds = new Set(["hong-kong", "macau"]);
+
+type ProvinceHitAreaLayerProps = {
+  enable3D: boolean;
+};
+
+export default function ProvinceHitAreaLayer({ enable3D }: ProvinceHitAreaLayerProps) {
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace } = useAtlas();
 
   if (selectedProvinceId) return null;
 
@@ -19,10 +23,10 @@
             key={area.id}
             type="button"
             tabIndex={-1}
-            data-province-hit={area.id}
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
+            data-province-hit={area.id}
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
             style={{
               left: `${area.x}%`,
               top: `${area.y}%`,
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index df60b8437c8831d0b39874c47ac52621c59cb73b..892e33faa0de620cd743860ff50a8c8440c9fc5f
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -4,9 +4,14 @@
 import { provinceAttractionSeed } from "../../data/atlas";
 import { useRecordCityView } from "../../hooks/useCityViews";
 import { getPhase1CityRouteId } from "../../lib/cityRoutes";
-
-export default function ProvinceInfoCard() {
-  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
+
+type ProvinceInfoCardProps = {
+  enable3D: boolean;
+  showDesktop3DNotice: boolean;
+};
+
+export default function ProvinceInfoCard({ enable3D, showDesktop3DNotice }: ProvinceInfoCardProps) {
+  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
   const { lang, t } = useLang();
   const recordView = useRecordCityView();
   const navigate = useNavigate();
@@ -24,8 +29,8 @@
       navigate(`/city/${phase1}`);
       return;
     }
-    selectPlace(province.id, cityId);
-  };
+    selectPlace(province.id, cityId, enable3D);
+  };
 
   return (
     <aside
@@ -35,8 +40,13 @@
       <header>
         <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
         <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
-        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
-      </header>
+        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
+        {showDesktop3DNotice && (
+          <p className="mt-1 text-xs font-medium text-muted">
+            {lang === "zh" ? "3D 视图仅在桌面端提供" : "3D scene available on desktop"}
+          </p>
+        )}
+      </header>
 
       {hasCities && (
         <section className="flex flex-col gap-1">
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index bba147bc2cd871ef03c9e185d8f43ec242ba11ed..5f0e60996c93390b30b8d06eabb648d2df05f13b
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -12,13 +12,17 @@
 const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
 const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";
 
-type ShapeButtonProps = {
-  shape: ProvinceShape;
-  active: boolean;
-  focused: boolean;
+type ShapeButtonProps = {
+  shape: ProvinceShape;
+  active: boolean;
+  focused: boolean;
   label: string;
-  onSelect: () => void;
-};
+  onSelect: () => void;
+};
+
+type ProvinceShapeLayerProps = {
+  enable3D: boolean;
+};
 
 function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
   const dimmed = focused && !active;
@@ -75,7 +79,7 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
+export default function ProvinceShapeLayer({ enable3D }: ProvinceShapeLayerProps) {
   const { shapes, error } = useProvinceShapes();
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
@@ -135,10 +139,10 @@
               key={shape.id}
               shape={shape}
               active={active}
-              focused={focused}
-              label={title}
-              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
-            />
+              focused={focused}
+              label={title}
+              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null, enable3D))}
+            />
           );
         })}
       </svg>
diff --git a/v2/src/components/map/SpecialRegionMarkers.tsx b/v2/src/components/map/SpecialRegionMarkers.tsx
index ed5ad1154358125b72c005cb3577b2d7dfc4fb21..546f0447ba97e54023c087b3c625fd02f9f4ab68
--- a/v2/src/components/map/SpecialRegionMarkers.tsx
+++ b/v2/src/components/map/SpecialRegionMarkers.tsx
@@ -4,12 +4,16 @@
 import { useLang } from "../../store/language";
 
 const markerIds = new Set(["hong-kong", "macau"]);
-const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
-  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
-  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
-};
-
-export default function SpecialRegionMarkers() {
+const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
+  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
+  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
+};
+
+type SpecialRegionMarkersProps = {
+  enable3D: boolean;
+};
+
+export default function SpecialRegionMarkers({ enable3D }: SpecialRegionMarkersProps) {
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace } = useAtlas();
   const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));
@@ -30,10 +34,10 @@
         return (
           <button
             key={area.id}
-            type="button"
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
+            type="button"
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
             style={style}
           >
             <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />
diff --git a/v2/src/hooks/useIsDesktop.ts b/v2/src/hooks/useIsDesktop.ts
new file mode 100644
index 0000000000000000000000000000000000000000..f502a2e42558b9b9488a90a2b2f95223e4b4065b
--- /dev/null
+++ b/v2/src/hooks/useIsDesktop.ts
@@ -0,0 +1,27 @@
+import { useSyncExternalStore } from "react";
+
+const DESKTOP_QUERY = "(min-width: 768px)";
+
+const getMediaQueryList = () => {
+  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
+    return null;
+  }
+
+  return window.matchMedia(DESKTOP_QUERY);
+};
+
+const getSnapshot = () => getMediaQueryList()?.matches ?? false;
+
+const getServerSnapshot = () => false;
+
+const subscribe = (onStoreChange: () => void) => {
+  const mediaQueryList = getMediaQueryList();
+  if (!mediaQueryList) return () => {};
+
+  mediaQueryList.addEventListener("change", onStoreChange);
+  return () => mediaQueryList.removeEventListener("change", onStoreChange);
+};
+
+export function useIsDesktop() {
+  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
+}
diff --git a/v2/src/store/atlas.ts b/v2/src/store/atlas.ts
index 56462baf71bc6b746613f2e0a0236ce4656625f9..669ad5e22957e56e00cccea58d87ad8b77fbe555
--- a/v2/src/store/atlas.ts
+++ b/v2/src/store/atlas.ts
@@ -8,9 +8,9 @@
   is3DEnabled: boolean;
 };
 
-export type AtlasAction =
-  | { type: "selectProvince"; provinceId: string | null }
-  | { type: "selectPlace"; provinceId: string; cityId: string | null }
+export type AtlasAction =
+  | { type: "selectProvince"; provinceId: string | null; enable3D?: boolean }
+  | { type: "selectPlace"; provinceId: string; cityId: string | null; enable3D?: boolean }
   | { type: "toggle3D" }
   | { type: "reset" };
 
@@ -22,15 +22,20 @@
 
 export const atlasReducer = (state: AtlasState, action: AtlasAction): AtlasState => {
   switch (action.type) {
-    case "selectProvince":
-      return {
-        ...state,
-        selectedProvinceId: action.provinceId,
-        selectedCityId: null,
-        is3DEnabled: Boolean(action.provinceId)
-      };
-    case "selectPlace":
-      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
+    case "selectProvince":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: null,
+        is3DEnabled: Boolean(action.provinceId) && (action.enable3D ?? true)
+      };
+    case "selectPlace":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: action.cityId,
+        is3DEnabled: action.enable3D ?? true
+      };
     case "toggle3D":
       return { ...state, is3DEnabled: !state.is3DEnabled };
     case "reset":
@@ -72,8 +77,10 @@
     ...state,
     province,
     city,
-    selectProvince: (provinceId: string | null) => dispatch({ type: "selectProvince", provinceId }),
-    selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
+    selectProvince: (provinceId: string | null, enable3D = true) =>
+      dispatch({ type: "selectProvince", provinceId, enable3D }),
+    selectPlace: (provinceId: string, cityId: string | null, enable3D = true) =>
+      dispatch({ type: "selectPlace", provinceId, cityId, enable3D }),
     selectCity: (cityId: string | null) =>
       state.selectedProvinceId
         ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"selectCity\\(\" src" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\styles\\globals.css -Encoding utf8" in C:\Users\h\Documents\New project 2\v2
2026-05-12T03:13:55.914698Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.6 seconds
Output:

 exited 1 in 610ms:
 succeeded in 659ms:
@import "tailwindcss";

@theme {
  --color-ink: #18201d;
  --color-muted: #5b6863;
  --color-line: #d4dbd7;
  --color-paper: #f6f8f6;
  --color-jade: #176f62;
  --color-jade-soft: rgba(23, 112, 97, 0.08);
  --font-sans: "Inter", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
}

html,
body {
  background: var(--color-paper);
  color: var(--color-ink);
  font-family: var(--font-sans);
}

body {
  margin: 0;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

button {
  font: inherit;
  cursor: pointer;
}

a {
  color: inherit;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.special-region-marker {
  left: var(--marker-left-mobile);
  top: var(--marker-top-mobile);
}

@media (min-width: 640px) {
  .special-region-marker {
    left: var(--marker-left-desktop);
    top: var(--marker-top-desktop);
  }
}

.china-map-surface > div:first-child {
  transform: scale(0.92);
  transform-origin: center;
}

@media (min-width: 640px) {
  .china-map-surface > div:first-child {
    transform: none;
  }
}

diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index fef4713b04dfd229e932f9aeff7b99b97f616199..fc4a0b2a11134557262fc710b0e330d20223722a
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -1,18 +1,20 @@
-import { useEffect } from "react";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import ProvinceShapeLayer from "./ProvinceShapeLayer";
-import ProvinceLabelLayer from "./ProvinceLabelLayer";
-import ProvinceInfoCard from "./ProvinceInfoCard";
+import { useEffect } from "react";
+import { useAtlas } from "../../store/atlas";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
+import ProvinceShapeLayer from "./ProvinceShapeLayer";
+import ProvinceLabelLayer from "./ProvinceLabelLayer";
+import ProvinceInfoCard from "./ProvinceInfoCard";
 import Province3DOverlay from "./Province3DOverlay";
 import SpecialRegionMarkers from "./SpecialRegionMarkers";
 import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
 
-export default function HeroMap() {
-  const { lang } = useLang();
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const focused = Boolean(selectedProvinceId);
-  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
+export default function HeroMap() {
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+  const { selectedProvinceId, province, is3DEnabled, reset, toggle3D } = useAtlas();
+  const focused = Boolean(selectedProvinceId);
+  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
 
   useEffect(() => {
     if (!focused) return;
@@ -40,26 +42,37 @@
       <div
         aria-live="polite"
         className={`china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm ${focused ? "min-h-[420px]" : "min-h-[300px] sm:min-h-[260px]"}`}
-        style={{ aspectRatio: "9463 / 6675" }}
-      >
-        <div className="absolute inset-0">
-          <ProvinceShapeLayer />
-          <ProvinceLabelLayer />
-          <ProvinceHitAreaLayer />
-          <SpecialRegionMarkers />
-          <ProvinceInfoCard />
-          <Province3DOverlay />
-        </div>
-        {focused && !is3DEnabled && (
-          <button
-            type="button"
-            onClick={reset}
-            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
-          >
-            {lang === "zh" ? "重置" : "Reset"}
-          </button>
-        )}
-      </div>
-    </section>
+        style={{ aspectRatio: "9463 / 6675" }}
+      >
+        <div className="absolute inset-0">
+          <ProvinceShapeLayer enable3D={isDesktop} />
+          <ProvinceLabelLayer />
+          <ProvinceHitAreaLayer enable3D={isDesktop} />
+          <SpecialRegionMarkers enable3D={isDesktop} />
+          <ProvinceInfoCard enable3D={isDesktop} showDesktop3DNotice={!isDesktop} />
+          <Province3DOverlay />
+        </div>
+        {focused && !is3DEnabled && (
+          <div className="absolute right-3 top-3 z-30 flex flex-wrap justify-end gap-2">
+            {isDesktop && (
+              <button
+                type="button"
+                onClick={toggle3D}
+                className="rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade-deep"
+              >
+                {lang === "zh" ? "查看 3D" : "View in 3D"}
+              </button>
+            )}
+            <button
+              type="button"
+              onClick={reset}
+              className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
+            >
+              {lang === "zh" ? "重置" : "Reset"}
+            </button>
+          </div>
+        )}
+      </div>
+    </section>
   );
 }
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index e15995c3d876e19e896f84d3696f8f636cb5174d..28a734334bb621bcd201e225d354a07f1d71eae0
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,15 +1,17 @@
 import { lazy, Suspense } from "react";
 import MapErrorBoundary from "../common/MapErrorBoundary";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
 
 const Map3D = lazy(() => import("./Map3D"));
 
-export default function Province3DOverlay() {
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const { lang } = useLang();
-
-  if (!selectedProvinceId || !province || !is3DEnabled) return null;
+export default function Province3DOverlay() {
+  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+
+  if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
     <section
diff --git a/v2/src/components/map/ProvinceHitAreaLayer.tsx b/v2/src/components/map/ProvinceHitAreaLayer.tsx
index 3de420de8277d855edbcafc762ddc8b9ac8ebaa2..da36c7155664860d35c46194f475aa0701dffaad
--- a/v2/src/components/map/ProvinceHitAreaLayer.tsx
+++ b/v2/src/components/map/ProvinceHitAreaLayer.tsx
@@ -2,11 +2,15 @@
 import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
-const specialMarkerIds = new Set(["hong-kong", "macau"]);
-
-export default function ProvinceHitAreaLayer() {
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace } = useAtlas();
+const specialMarkerIds = new Set(["hong-kong", "macau"]);
+
+type ProvinceHitAreaLayerProps = {
+  enable3D: boolean;
+};
+
+export default function ProvinceHitAreaLayer({ enable3D }: ProvinceHitAreaLayerProps) {
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace } = useAtlas();
 
   if (selectedProvinceId) return null;
 
@@ -19,10 +23,10 @@
             key={area.id}
             type="button"
             tabIndex={-1}
-            data-province-hit={area.id}
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
+            data-province-hit={area.id}
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
             style={{
               left: `${area.x}%`,
               top: `${area.y}%`,
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index df60b8437c8831d0b39874c47ac52621c59cb73b..892e33faa0de620cd743860ff50a8c8440c9fc5f
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -4,9 +4,14 @@
 import { provinceAttractionSeed } from "../../data/atlas";
 import { useRecordCityView } from "../../hooks/useCityViews";
 import { getPhase1CityRouteId } from "../../lib/cityRoutes";
-
-export default function ProvinceInfoCard() {
-  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
+
+type ProvinceInfoCardProps = {
+  enable3D: boolean;
+  showDesktop3DNotice: boolean;
+};
+
+export default function ProvinceInfoCard({ enable3D, showDesktop3DNotice }: ProvinceInfoCardProps) {
+  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
   const { lang, t } = useLang();
   const recordView = useRecordCityView();
   const navigate = useNavigate();
@@ -24,8 +29,8 @@
       navigate(`/city/${phase1}`);
       return;
     }
-    selectPlace(province.id, cityId);
-  };
+    selectPlace(province.id, cityId, enable3D);
+  };
 
   return (
     <aside
@@ -35,8 +40,13 @@
       <header>
         <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
         <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
-        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
-      </header>
+        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
+        {showDesktop3DNotice && (
+          <p className="mt-1 text-xs font-medium text-muted">
+            {lang === "zh" ? "3D 视图仅在桌面端提供" : "3D scene available on desktop"}
+          </p>
+        )}
+      </header>
 
       {hasCities && (
         <section className="flex flex-col gap-1">
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index bba147bc2cd871ef03c9e185d8f43ec242ba11ed..5f0e60996c93390b30b8d06eabb648d2df05f13b
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -12,13 +12,17 @@
 const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
 const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";
 
-type ShapeButtonProps = {
-  shape: ProvinceShape;
-  active: boolean;
-  focused: boolean;
+type ShapeButtonProps = {
+  shape: ProvinceShape;
+  active: boolean;
+  focused: boolean;
   label: string;
-  onSelect: () => void;
-};
+  onSelect: () => void;
+};
+
+type ProvinceShapeLayerProps = {
+  enable3D: boolean;
+};
 
 function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
   const dimmed = focused && !active;
@@ -75,7 +79,7 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
+export default function ProvinceShapeLayer({ enable3D }: ProvinceShapeLayerProps) {
   const { shapes, error } = useProvinceShapes();
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
@@ -135,10 +139,10 @@
               key={shape.id}
               shape={shape}
               active={active}
-              focused={focused}
-              label={title}
-              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
-            />
+              focused={focused}
+              label={title}
+              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null, enable3D))}
+            />
           );
         })}
       </svg>
diff --git a/v2/src/components/map/SpecialRegionMarkers.tsx b/v2/src/components/map/SpecialRegionMarkers.tsx
index ed5ad1154358125b72c005cb3577b2d7dfc4fb21..546f0447ba97e54023c087b3c625fd02f9f4ab68
--- a/v2/src/components/map/SpecialRegionMarkers.tsx
+++ b/v2/src/components/map/SpecialRegionMarkers.tsx
@@ -4,12 +4,16 @@
 import { useLang } from "../../store/language";
 
 const markerIds = new Set(["hong-kong", "macau"]);
-const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
-  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
-  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
-};
-
-export default function SpecialRegionMarkers() {
+const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
+  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
+  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
+};
+
+type SpecialRegionMarkersProps = {
+  enable3D: boolean;
+};
+
+export default function SpecialRegionMarkers({ enable3D }: SpecialRegionMarkersProps) {
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace } = useAtlas();
   const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));
@@ -30,10 +34,10 @@
         return (
           <button
             key={area.id}
-            type="button"
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
+            type="button"
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
             style={style}
           >
             <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />
diff --git a/v2/src/hooks/useIsDesktop.ts b/v2/src/hooks/useIsDesktop.ts
new file mode 100644
index 0000000000000000000000000000000000000000..f502a2e42558b9b9488a90a2b2f95223e4b4065b
--- /dev/null
+++ b/v2/src/hooks/useIsDesktop.ts
@@ -0,0 +1,27 @@
+import { useSyncExternalStore } from "react";
+
+const DESKTOP_QUERY = "(min-width: 768px)";
+
+const getMediaQueryList = () => {
+  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
+    return null;
+  }
+
+  return window.matchMedia(DESKTOP_QUERY);
+};
+
+const getSnapshot = () => getMediaQueryList()?.matches ?? false;
+
+const getServerSnapshot = () => false;
+
+const subscribe = (onStoreChange: () => void) => {
+  const mediaQueryList = getMediaQueryList();
+  if (!mediaQueryList) return () => {};
+
+  mediaQueryList.addEventListener("change", onStoreChange);
+  return () => mediaQueryList.removeEventListener("change", onStoreChange);
+};
+
+export function useIsDesktop() {
+  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
+}
diff --git a/v2/src/store/atlas.ts b/v2/src/store/atlas.ts
index 56462baf71bc6b746613f2e0a0236ce4656625f9..669ad5e22957e56e00cccea58d87ad8b77fbe555
--- a/v2/src/store/atlas.ts
+++ b/v2/src/store/atlas.ts
@@ -8,9 +8,9 @@
   is3DEnabled: boolean;
 };
 
-export type AtlasAction =
-  | { type: "selectProvince"; provinceId: string | null }
-  | { type: "selectPlace"; provinceId: string; cityId: string | null }
+export type AtlasAction =
+  | { type: "selectProvince"; provinceId: string | null; enable3D?: boolean }
+  | { type: "selectPlace"; provinceId: string; cityId: string | null; enable3D?: boolean }
   | { type: "toggle3D" }
   | { type: "reset" };
 
@@ -22,15 +22,20 @@
 
 export const atlasReducer = (state: AtlasState, action: AtlasAction): AtlasState => {
   switch (action.type) {
-    case "selectProvince":
-      return {
-        ...state,
-        selectedProvinceId: action.provinceId,
-        selectedCityId: null,
-        is3DEnabled: Boolean(action.provinceId)
-      };
-    case "selectPlace":
-      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
+    case "selectProvince":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: null,
+        is3DEnabled: Boolean(action.provinceId) && (action.enable3D ?? true)
+      };
+    case "selectPlace":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: action.cityId,
+        is3DEnabled: action.enable3D ?? true
+      };
     case "toggle3D":
       return { ...state, is3DEnabled: !state.is3DEnabled };
     case "reset":
@@ -72,8 +77,10 @@
     ...state,
     province,
     city,
-    selectProvince: (provinceId: string | null) => dispatch({ type: "selectProvince", provinceId }),
-    selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
+    selectProvince: (provinceId: string | null, enable3D = true) =>
+      dispatch({ type: "selectProvince", provinceId, enable3D }),
+    selectPlace: (provinceId: string, cityId: string | null, enable3D = true) =>
+      dispatch({ type: "selectPlace", provinceId, cityId, enable3D }),
     selectCity: (cityId: string | null) =>
       state.selectedProvinceId
         ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })

apply patch
patch: completed
C:\Users\h\Documents\New project 2\v2\src\components\map\HeroMap.tsx
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index fef4713b04dfd229e932f9aeff7b99b97f616199..870a1ff5ebd3331bec22aa5f826a9a3ea479cf92
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -1,18 +1,20 @@
-import { useEffect } from "react";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import ProvinceShapeLayer from "./ProvinceShapeLayer";
-import ProvinceLabelLayer from "./ProvinceLabelLayer";
-import ProvinceInfoCard from "./ProvinceInfoCard";
+import { useEffect } from "react";
+import { useAtlas } from "../../store/atlas";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
+import ProvinceShapeLayer from "./ProvinceShapeLayer";
+import ProvinceLabelLayer from "./ProvinceLabelLayer";
+import ProvinceInfoCard from "./ProvinceInfoCard";
 import Province3DOverlay from "./Province3DOverlay";
 import SpecialRegionMarkers from "./SpecialRegionMarkers";
 import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
 
-export default function HeroMap() {
-  const { lang } = useLang();
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const focused = Boolean(selectedProvinceId);
-  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
+export default function HeroMap() {
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+  const { selectedProvinceId, province, is3DEnabled, reset, toggle3D } = useAtlas();
+  const focused = Boolean(selectedProvinceId);
+  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
 
   useEffect(() => {
     if (!focused) return;
@@ -40,26 +42,37 @@
       <div
         aria-live="polite"
         className={`china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm ${focused ? "min-h-[420px]" : "min-h-[300px] sm:min-h-[260px]"}`}
-        style={{ aspectRatio: "9463 / 6675" }}
-      >
-        <div className="absolute inset-0">
-          <ProvinceShapeLayer />
-          <ProvinceLabelLayer />
-          <ProvinceHitAreaLayer />
-          <SpecialRegionMarkers />
-          <ProvinceInfoCard />
-          <Province3DOverlay />
-        </div>
-        {focused && !is3DEnabled && (
-          <button
-            type="button"
-            onClick={reset}
-            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
-          >
-            {lang === "zh" ? "重置" : "Reset"}
-          </button>
-        )}
-      </div>
-    </section>
+        style={{ aspectRatio: "9463 / 6675" }}
+      >
+        <div className="absolute inset-0">
+          <ProvinceShapeLayer enable3D={isDesktop} />
+          <ProvinceLabelLayer />
+          <ProvinceHitAreaLayer enable3D={isDesktop} />
+          <SpecialRegionMarkers enable3D={isDesktop} />
+          <ProvinceInfoCard enable3D={isDesktop} showDesktop3DNotice={!isDesktop} />
+          <Province3DOverlay />
+        </div>
+        {focused && !is3DEnabled && (
+          <div className="absolute right-3 top-3 z-30 flex flex-wrap justify-end gap-2">
+            {isDesktop && (
+              <button
+                type="button"
+                onClick={toggle3D}
+                className="rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade/90"
+              >
+                {lang === "zh" ? "查看 3D" : "View in 3D"}
+              </button>
+            )}
+            <button
+              type="button"
+              onClick={reset}
+              className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
+            >
+              {lang === "zh" ? "重置" : "Reset"}
+            </button>
+          </div>
+        )}
+      </div>
+    </section>
   );
 }
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index e15995c3d876e19e896f84d3696f8f636cb5174d..28a734334bb621bcd201e225d354a07f1d71eae0
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,15 +1,17 @@
 import { lazy, Suspense } from "react";
 import MapErrorBoundary from "../common/MapErrorBoundary";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
 
 const Map3D = lazy(() => import("./Map3D"));
 
-export default function Province3DOverlay() {
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const { lang } = useLang();
-
-  if (!selectedProvinceId || !province || !is3DEnabled) return null;
+export default function Province3DOverlay() {
+  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+
+  if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
     <section
diff --git a/v2/src/components/map/ProvinceHitAreaLayer.tsx b/v2/src/components/map/ProvinceHitAreaLayer.tsx
index 3de420de8277d855edbcafc762ddc8b9ac8ebaa2..da36c7155664860d35c46194f475aa0701dffaad
--- a/v2/src/components/map/ProvinceHitAreaLayer.tsx
+++ b/v2/src/components/map/ProvinceHitAreaLayer.tsx
@@ -2,11 +2,15 @@
 import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
-const specialMarkerIds = new Set(["hong-kong", "macau"]);
-
-export default function ProvinceHitAreaLayer() {
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace } = useAtlas();
+const specialMarkerIds = new Set(["hong-kong", "macau"]);
+
+type ProvinceHitAreaLayerProps = {
+  enable3D: boolean;
+};
+
+export default function ProvinceHitAreaLayer({ enable3D }: ProvinceHitAreaLayerProps) {
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace } = useAtlas();
 
   if (selectedProvinceId) return null;
 
@@ -19,10 +23,10 @@
             key={area.id}
             type="button"
             tabIndex={-1}
-            data-province-hit={area.id}
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
+            data-province-hit={area.id}
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
             style={{
               left: `${area.x}%`,
               top: `${area.y}%`,
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index df60b8437c8831d0b39874c47ac52621c59cb73b..892e33faa0de620cd743860ff50a8c8440c9fc5f
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -4,9 +4,14 @@
 import { provinceAttractionSeed } from "../../data/atlas";
 import { useRecordCityView } from "../../hooks/useCityViews";
 import { getPhase1CityRouteId } from "../../lib/cityRoutes";
-
-export default function ProvinceInfoCard() {
-  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
+
+type ProvinceInfoCardProps = {
+  enable3D: boolean;
+  showDesktop3DNotice: boolean;
+};
+
+export default function ProvinceInfoCard({ enable3D, showDesktop3DNotice }: ProvinceInfoCardProps) {
+  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
   const { lang, t } = useLang();
   const recordView = useRecordCityView();
   const navigate = useNavigate();
@@ -24,8 +29,8 @@
       navigate(`/city/${phase1}`);
       return;
     }
-    selectPlace(province.id, cityId);
-  };
+    selectPlace(province.id, cityId, enable3D);
+  };
 
   return (
     <aside
@@ -35,8 +40,13 @@
       <header>
         <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
         <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
-        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
-      </header>
+        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
+        {showDesktop3DNotice && (
+          <p className="mt-1 text-xs font-medium text-muted">
+            {lang === "zh" ? "3D 视图仅在桌面端提供" : "3D scene available on desktop"}
+          </p>
+        )}
+      </header>
 
       {hasCities && (
         <section className="flex flex-col gap-1">
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index bba147bc2cd871ef03c9e185d8f43ec242ba11ed..5f0e60996c93390b30b8d06eabb648d2df05f13b
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -12,13 +12,17 @@
 const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
 const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";
 
-type ShapeButtonProps = {
-  shape: ProvinceShape;
-  active: boolean;
-  focused: boolean;
+type ShapeButtonProps = {
+  shape: ProvinceShape;
+  active: boolean;
+  focused: boolean;
   label: string;
-  onSelect: () => void;
-};
+  onSelect: () => void;
+};
+
+type ProvinceShapeLayerProps = {
+  enable3D: boolean;
+};
 
 function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
   const dimmed = focused && !active;
@@ -75,7 +79,7 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
+export default function ProvinceShapeLayer({ enable3D }: ProvinceShapeLayerProps) {
   const { shapes, error } = useProvinceShapes();
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
@@ -135,10 +139,10 @@
               key={shape.id}
               shape={shape}
               active={active}
-              focused={focused}
-              label={title}
-              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
-            />
+              focused={focused}
+              label={title}
+              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null, enable3D))}
+            />
           );
         })}
       </svg>
diff --git a/v2/src/components/map/SpecialRegionMarkers.tsx b/v2/src/components/map/SpecialRegionMarkers.tsx
index ed5ad1154358125b72c005cb3577b2d7dfc4fb21..546f0447ba97e54023c087b3c625fd02f9f4ab68
--- a/v2/src/components/map/SpecialRegionMarkers.tsx
+++ b/v2/src/components/map/SpecialRegionMarkers.tsx
@@ -4,12 +4,16 @@
 import { useLang } from "../../store/language";
 
 const markerIds = new Set(["hong-kong", "macau"]);
-const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
-  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
-  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
-};
-
-export default function SpecialRegionMarkers() {
+const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
+  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
+  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
+};
+
+type SpecialRegionMarkersProps = {
+  enable3D: boolean;
+};
+
+export default function SpecialRegionMarkers({ enable3D }: SpecialRegionMarkersProps) {
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace } = useAtlas();
   const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));
@@ -30,10 +34,10 @@
         return (
           <button
             key={area.id}
-            type="button"
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
+            type="button"
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
             style={style}
           >
             <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />
diff --git a/v2/src/hooks/useIsDesktop.ts b/v2/src/hooks/useIsDesktop.ts
new file mode 100644
index 0000000000000000000000000000000000000000..f502a2e42558b9b9488a90a2b2f95223e4b4065b
--- /dev/null
+++ b/v2/src/hooks/useIsDesktop.ts
@@ -0,0 +1,27 @@
+import { useSyncExternalStore } from "react";
+
+const DESKTOP_QUERY = "(min-width: 768px)";
+
+const getMediaQueryList = () => {
+  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
+    return null;
+  }
+
+  return window.matchMedia(DESKTOP_QUERY);
+};
+
+const getSnapshot = () => getMediaQueryList()?.matches ?? false;
+
+const getServerSnapshot = () => false;
+
+const subscribe = (onStoreChange: () => void) => {
+  const mediaQueryList = getMediaQueryList();
+  if (!mediaQueryList) return () => {};
+
+  mediaQueryList.addEventListener("change", onStoreChange);
+  return () => mediaQueryList.removeEventListener("change", onStoreChange);
+};
+
+export function useIsDesktop() {
+  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
+}
diff --git a/v2/src/store/atlas.ts b/v2/src/store/atlas.ts
index 56462baf71bc6b746613f2e0a0236ce4656625f9..669ad5e22957e56e00cccea58d87ad8b77fbe555
--- a/v2/src/store/atlas.ts
+++ b/v2/src/store/atlas.ts
@@ -8,9 +8,9 @@
   is3DEnabled: boolean;
 };
 
-export type AtlasAction =
-  | { type: "selectProvince"; provinceId: string | null }
-  | { type: "selectPlace"; provinceId: string; cityId: string | null }
+export type AtlasAction =
+  | { type: "selectProvince"; provinceId: string | null; enable3D?: boolean }
+  | { type: "selectPlace"; provinceId: string; cityId: string | null; enable3D?: boolean }
   | { type: "toggle3D" }
   | { type: "reset" };
 
@@ -22,15 +22,20 @@
 
 export const atlasReducer = (state: AtlasState, action: AtlasAction): AtlasState => {
   switch (action.type) {
-    case "selectProvince":
-      return {
-        ...state,
-        selectedProvinceId: action.provinceId,
-        selectedCityId: null,
-        is3DEnabled: Boolean(action.provinceId)
-      };
-    case "selectPlace":
-      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
+    case "selectProvince":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: null,
+        is3DEnabled: Boolean(action.provinceId) && (action.enable3D ?? true)
+      };
+    case "selectPlace":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: action.cityId,
+        is3DEnabled: action.enable3D ?? true
+      };
     case "toggle3D":
       return { ...state, is3DEnabled: !state.is3DEnabled };
     case "reset":
@@ -72,8 +77,10 @@
     ...state,
     province,
     city,
-    selectProvince: (provinceId: string | null) => dispatch({ type: "selectProvince", provinceId }),
-    selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
+    selectProvince: (provinceId: string | null, enable3D = true) =>
+      dispatch({ type: "selectProvince", provinceId, enable3D }),
+    selectPlace: (provinceId: string, cityId: string | null, enable3D = true) =>
+      dispatch({ type: "selectPlace", provinceId, cityId, enable3D }),
     selectCity: (cityId: string | null) =>
       state.selectedProvinceId
         ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })

diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index fef4713b04dfd229e932f9aeff7b99b97f616199..870a1ff5ebd3331bec22aa5f826a9a3ea479cf92
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -1,18 +1,20 @@
-import { useEffect } from "react";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import ProvinceShapeLayer from "./ProvinceShapeLayer";
-import ProvinceLabelLayer from "./ProvinceLabelLayer";
-import ProvinceInfoCard from "./ProvinceInfoCard";
+import { useEffect } from "react";
+import { useAtlas } from "../../store/atlas";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
+import ProvinceShapeLayer from "./ProvinceShapeLayer";
+import ProvinceLabelLayer from "./ProvinceLabelLayer";
+import ProvinceInfoCard from "./ProvinceInfoCard";
 import Province3DOverlay from "./Province3DOverlay";
 import SpecialRegionMarkers from "./SpecialRegionMarkers";
 import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
 
-export default function HeroMap() {
-  const { lang } = useLang();
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const focused = Boolean(selectedProvinceId);
-  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
+export default function HeroMap() {
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+  const { selectedProvinceId, province, is3DEnabled, reset, toggle3D } = useAtlas();
+  const focused = Boolean(selectedProvinceId);
+  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
 
   useEffect(() => {
     if (!focused) return;
@@ -40,26 +42,37 @@
       <div
         aria-live="polite"
         className={`china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm ${focused ? "min-h-[420px]" : "min-h-[300px] sm:min-h-[260px]"}`}
-        style={{ aspectRatio: "9463 / 6675" }}
-      >
-        <div className="absolute inset-0">
-          <ProvinceShapeLayer />
-          <ProvinceLabelLayer />
-          <ProvinceHitAreaLayer />
-          <SpecialRegionMarkers />
-          <ProvinceInfoCard />
-          <Province3DOverlay />
-        </div>
-        {focused && !is3DEnabled && (
-          <button
-            type="button"
-            onClick={reset}
-            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
-          >
-            {lang === "zh" ? "重置" : "Reset"}
-          </button>
-        )}
-      </div>
-    </section>
+        style={{ aspectRatio: "9463 / 6675" }}
+      >
+        <div className="absolute inset-0">
+          <ProvinceShapeLayer enable3D={isDesktop} />
+          <ProvinceLabelLayer />
+          <ProvinceHitAreaLayer enable3D={isDesktop} />
+          <SpecialRegionMarkers enable3D={isDesktop} />
+          <ProvinceInfoCard enable3D={isDesktop} showDesktop3DNotice={!isDesktop} />
+          <Province3DOverlay />
+        </div>
+        {focused && !is3DEnabled && (
+          <div className="absolute right-3 top-3 z-30 flex flex-wrap justify-end gap-2">
+            {isDesktop && (
+              <button
+                type="button"
+                onClick={toggle3D}
+                className="rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade/90"
+              >
+                {lang === "zh" ? "查看 3D" : "View in 3D"}
+              </button>
+            )}
+            <button
+              type="button"
+              onClick={reset}
+              className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
+            >
+              {lang === "zh" ? "重置" : "Reset"}
+            </button>
+          </div>
+        )}
+      </div>
+    </section>
   );
 }
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index e15995c3d876e19e896f84d3696f8f636cb5174d..28a734334bb621bcd201e225d354a07f1d71eae0
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,15 +1,17 @@
 import { lazy, Suspense } from "react";
 import MapErrorBoundary from "../common/MapErrorBoundary";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
 
 const Map3D = lazy(() => import("./Map3D"));
 
-export default function Province3DOverlay() {
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const { lang } = useLang();
-
-  if (!selectedProvinceId || !province || !is3DEnabled) return null;
+export default function Province3DOverlay() {
+  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+
+  if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
     <section
diff --git a/v2/src/components/map/ProvinceHitAreaLayer.tsx b/v2/src/components/map/ProvinceHitAreaLayer.tsx
index 3de420de8277d855edbcafc762ddc8b9ac8ebaa2..da36c7155664860d35c46194f475aa0701dffaad
--- a/v2/src/components/map/ProvinceHitAreaLayer.tsx
+++ b/v2/src/components/map/ProvinceHitAreaLayer.tsx
@@ -2,11 +2,15 @@
 import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
-const specialMarkerIds = new Set(["hong-kong", "macau"]);
-
-export default function ProvinceHitAreaLayer() {
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace } = useAtlas();
+const specialMarkerIds = new Set(["hong-kong", "macau"]);
+
+type ProvinceHitAreaLayerProps = {
+  enable3D: boolean;
+};
+
+export default function ProvinceHitAreaLayer({ enable3D }: ProvinceHitAreaLayerProps) {
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace } = useAtlas();
 
   if (selectedProvinceId) return null;
 
@@ -19,10 +23,10 @@
             key={area.id}
             type="button"
             tabIndex={-1}
-            data-province-hit={area.id}
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
+            data-province-hit={area.id}
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
             style={{
               left: `${area.x}%`,
               top: `${area.y}%`,
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index df60b8437c8831d0b39874c47ac52621c59cb73b..892e33faa0de620cd743860ff50a8c8440c9fc5f
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -4,9 +4,14 @@
 import { provinceAttractionSeed } from "../../data/atlas";
 import { useRecordCityView } from "../../hooks/useCityViews";
 import { getPhase1CityRouteId } from "../../lib/cityRoutes";
-
-export default function ProvinceInfoCard() {
-  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
+
+type ProvinceInfoCardProps = {
+  enable3D: boolean;
+  showDesktop3DNotice: boolean;
+};
+
+export default function ProvinceInfoCard({ enable3D, showDesktop3DNotice }: ProvinceInfoCardProps) {
+  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
   const { lang, t } = useLang();
   const recordView = useRecordCityView();
   const navigate = useNavigate();
@@ -24,8 +29,8 @@
       navigate(`/city/${phase1}`);
       return;
     }
-    selectPlace(province.id, cityId);
-  };
+    selectPlace(province.id, cityId, enable3D);
+  };
 
   return (
     <aside
@@ -35,8 +40,13 @@
       <header>
         <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
         <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
-        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
-      </header>
+        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
+        {showDesktop3DNotice && (
+          <p className="mt-1 text-xs font-medium text-muted">
+            {lang === "zh" ? "3D 视图仅在桌面端提供" : "3D scene available on desktop"}
+          </p>
+        )}
+      </header>
 
       {hasCities && (
         <section className="flex flex-col gap-1">
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index bba147bc2cd871ef03c9e185d8f43ec242ba11ed..5f0e60996c93390b30b8d06eabb648d2df05f13b
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -12,13 +12,17 @@
 const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
 const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";
 
-type ShapeButtonProps = {
-  shape: ProvinceShape;
-  active: boolean;
-  focused: boolean;
+type ShapeButtonProps = {
+  shape: ProvinceShape;
+  active: boolean;
+  focused: boolean;
   label: string;
-  onSelect: () => void;
-};
+  onSelect: () => void;
+};
+
+type ProvinceShapeLayerProps = {
+  enable3D: boolean;
+};
 
 function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
   const dimmed = focused && !active;
@@ -75,7 +79,7 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
+export default function ProvinceShapeLayer({ enable3D }: ProvinceShapeLayerProps) {
   const { shapes, error } = useProvinceShapes();
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
@@ -135,10 +139,10 @@
               key={shape.id}
               shape={shape}
               active={active}
-              focused={focused}
-              label={title}
-              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
-            />
+              focused={focused}
+              label={title}
+              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null, enable3D))}
+            />
           );
         })}
       </svg>
diff --git a/v2/src/components/map/SpecialRegionMarkers.tsx b/v2/src/components/map/SpecialRegionMarkers.tsx
index ed5ad1154358125b72c005cb3577b2d7dfc4fb21..546f0447ba97e54023c087b3c625fd02f9f4ab68
--- a/v2/src/components/map/SpecialRegionMarkers.tsx
+++ b/v2/src/components/map/SpecialRegionMarkers.tsx
@@ -4,12 +4,16 @@
 import { useLang } from "../../store/language";
 
 const markerIds = new Set(["hong-kong", "macau"]);
-const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
-  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
-  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
-};
-
-export default function SpecialRegionMarkers() {
+const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
+  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
+  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
+};
+
+type SpecialRegionMarkersProps = {
+  enable3D: boolean;
+};
+
+export default function SpecialRegionMarkers({ enable3D }: SpecialRegionMarkersProps) {
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace } = useAtlas();
   const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));
@@ -30,10 +34,10 @@
         return (
           <button
             key={area.id}
-            type="button"
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
+            type="button"
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
             style={style}
           >
             <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />
diff --git a/v2/src/hooks/useIsDesktop.ts b/v2/src/hooks/useIsDesktop.ts
new file mode 100644
index 0000000000000000000000000000000000000000..f502a2e42558b9b9488a90a2b2f95223e4b4065b
--- /dev/null
+++ b/v2/src/hooks/useIsDesktop.ts
@@ -0,0 +1,27 @@
+import { useSyncExternalStore } from "react";
+
+const DESKTOP_QUERY = "(min-width: 768px)";
+
+const getMediaQueryList = () => {
+  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
+    return null;
+  }
+
+  return window.matchMedia(DESKTOP_QUERY);
+};
+
+const getSnapshot = () => getMediaQueryList()?.matches ?? false;
+
+const getServerSnapshot = () => false;
+
+const subscribe = (onStoreChange: () => void) => {
+  const mediaQueryList = getMediaQueryList();
+  if (!mediaQueryList) return () => {};
+
+  mediaQueryList.addEventListener("change", onStoreChange);
+  return () => mediaQueryList.removeEventListener("change", onStoreChange);
+};
+
+export function useIsDesktop() {
+  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
+}
diff --git a/v2/src/store/atlas.ts b/v2/src/store/atlas.ts
index 56462baf71bc6b746613f2e0a0236ce4656625f9..669ad5e22957e56e00cccea58d87ad8b77fbe555
--- a/v2/src/store/atlas.ts
+++ b/v2/src/store/atlas.ts
@@ -8,9 +8,9 @@
   is3DEnabled: boolean;
 };
 
-export type AtlasAction =
-  | { type: "selectProvince"; provinceId: string | null }
-  | { type: "selectPlace"; provinceId: string; cityId: string | null }
+export type AtlasAction =
+  | { type: "selectProvince"; provinceId: string | null; enable3D?: boolean }
+  | { type: "selectPlace"; provinceId: string; cityId: string | null; enable3D?: boolean }
   | { type: "toggle3D" }
   | { type: "reset" };
 
@@ -22,15 +22,20 @@
 
 export const atlasReducer = (state: AtlasState, action: AtlasAction): AtlasState => {
   switch (action.type) {
-    case "selectProvince":
-      return {
-        ...state,
-        selectedProvinceId: action.provinceId,
-        selectedCityId: null,
-        is3DEnabled: Boolean(action.provinceId)
-      };
-    case "selectPlace":
-      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
+    case "selectProvince":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: null,
+        is3DEnabled: Boolean(action.provinceId) && (action.enable3D ?? true)
+      };
+    case "selectPlace":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: action.cityId,
+        is3DEnabled: action.enable3D ?? true
+      };
     case "toggle3D":
       return { ...state, is3DEnabled: !state.is3DEnabled };
     case "reset":
@@ -72,8 +77,10 @@
     ...state,
     province,
     city,
-    selectProvince: (provinceId: string | null) => dispatch({ type: "selectProvince", provinceId }),
-    selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
+    selectProvince: (provinceId: string | null, enable3D = true) =>
+      dispatch({ type: "selectProvince", provinceId, enable3D }),
+    selectPlace: (provinceId: string, cityId: string | null, enable3D = true) =>
+      dispatch({ type: "selectPlace", provinceId, cityId, enable3D }),
     selectCity: (cityId: string | null) =>
       state.selectedProvinceId
         ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })

codex
调用点现在都显式带上 `enable3D`，未发现 `selectCity` 的实际使用路径。接下来跑 `npx tsc --noEmit`，先处理类型层面的回归。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in C:\Users\h\Documents\New project 2\v2
 succeeded in 1568ms:
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index fef4713b04dfd229e932f9aeff7b99b97f616199..870a1ff5ebd3331bec22aa5f826a9a3ea479cf92
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -1,18 +1,20 @@
-import { useEffect } from "react";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import ProvinceShapeLayer from "./ProvinceShapeLayer";
-import ProvinceLabelLayer from "./ProvinceLabelLayer";
-import ProvinceInfoCard from "./ProvinceInfoCard";
+import { useEffect } from "react";
+import { useAtlas } from "../../store/atlas";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
+import ProvinceShapeLayer from "./ProvinceShapeLayer";
+import ProvinceLabelLayer from "./ProvinceLabelLayer";
+import ProvinceInfoCard from "./ProvinceInfoCard";
 import Province3DOverlay from "./Province3DOverlay";
 import SpecialRegionMarkers from "./SpecialRegionMarkers";
 import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
 
-export default function HeroMap() {
-  const { lang } = useLang();
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const focused = Boolean(selectedProvinceId);
-  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
+export default function HeroMap() {
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+  const { selectedProvinceId, province, is3DEnabled, reset, toggle3D } = useAtlas();
+  const focused = Boolean(selectedProvinceId);
+  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
 
   useEffect(() => {
     if (!focused) return;
@@ -40,26 +42,37 @@
       <div
         aria-live="polite"
         className={`china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm ${focused ? "min-h-[420px]" : "min-h-[300px] sm:min-h-[260px]"}`}
-        style={{ aspectRatio: "9463 / 6675" }}
-      >
-        <div className="absolute inset-0">
-          <ProvinceShapeLayer />
-          <ProvinceLabelLayer />
-          <ProvinceHitAreaLayer />
-          <SpecialRegionMarkers />
-          <ProvinceInfoCard />
-          <Province3DOverlay />
-        </div>
-        {focused && !is3DEnabled && (
-          <button
-            type="button"
-            onClick={reset}
-            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
-          >
-            {lang === "zh" ? "重置" : "Reset"}
-          </button>
-        )}
-      </div>
-    </section>
+        style={{ aspectRatio: "9463 / 6675" }}
+      >
+        <div className="absolute inset-0">
+          <ProvinceShapeLayer enable3D={isDesktop} />
+          <ProvinceLabelLayer />
+          <ProvinceHitAreaLayer enable3D={isDesktop} />
+          <SpecialRegionMarkers enable3D={isDesktop} />
+          <ProvinceInfoCard enable3D={isDesktop} showDesktop3DNotice={!isDesktop} />
+          <Province3DOverlay />
+        </div>
+        {focused && !is3DEnabled && (
+          <div className="absolute right-3 top-3 z-30 flex flex-wrap justify-end gap-2">
+            {isDesktop && (
+              <button
+                type="button"
+                onClick={toggle3D}
+                className="rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade/90"
+              >
+                {lang === "zh" ? "查看 3D" : "View in 3D"}
+              </button>
+            )}
+            <button
+              type="button"
+              onClick={reset}
+              className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
+            >
+              {lang === "zh" ? "重置" : "Reset"}
+            </button>
+          </div>
+        )}
+      </div>
+    </section>
   );
 }
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index e15995c3d876e19e896f84d3696f8f636cb5174d..28a734334bb621bcd201e225d354a07f1d71eae0
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,15 +1,17 @@
 import { lazy, Suspense } from "react";
 import MapErrorBoundary from "../common/MapErrorBoundary";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
 
 const Map3D = lazy(() => import("./Map3D"));
 
-export default function Province3DOverlay() {
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const { lang } = useLang();
-
-  if (!selectedProvinceId || !province || !is3DEnabled) return null;
+export default function Province3DOverlay() {
+  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+
+  if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
     <section
diff --git a/v2/src/components/map/ProvinceHitAreaLayer.tsx b/v2/src/components/map/ProvinceHitAreaLayer.tsx
index 3de420de8277d855edbcafc762ddc8b9ac8ebaa2..da36c7155664860d35c46194f475aa0701dffaad
--- a/v2/src/components/map/ProvinceHitAreaLayer.tsx
+++ b/v2/src/components/map/ProvinceHitAreaLayer.tsx
@@ -2,11 +2,15 @@
 import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
-const specialMarkerIds = new Set(["hong-kong", "macau"]);
-
-export default function ProvinceHitAreaLayer() {
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace } = useAtlas();
+const specialMarkerIds = new Set(["hong-kong", "macau"]);
+
+type ProvinceHitAreaLayerProps = {
+  enable3D: boolean;
+};
+
+export default function ProvinceHitAreaLayer({ enable3D }: ProvinceHitAreaLayerProps) {
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace } = useAtlas();
 
   if (selectedProvinceId) return null;
 
@@ -19,10 +23,10 @@
             key={area.id}
             type="button"
             tabIndex={-1}
-            data-province-hit={area.id}
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
+            data-province-hit={area.id}
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
             style={{
               left: `${area.x}%`,
               top: `${area.y}%`,
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index df60b8437c8831d0b39874c47ac52621c59cb73b..892e33faa0de620cd743860ff50a8c8440c9fc5f
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -4,9 +4,14 @@
 import { provinceAttractionSeed } from "../../data/atlas";
 import { useRecordCityView } from "../../hooks/useCityViews";
 import { getPhase1CityRouteId } from "../../lib/cityRoutes";
-
-export default function ProvinceInfoCard() {
-  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
+
+type ProvinceInfoCardProps = {
+  enable3D: boolean;
+  showDesktop3DNotice: boolean;
+};
+
+export default function ProvinceInfoCard({ enable3D, showDesktop3DNotice }: ProvinceInfoCardProps) {
+  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
   const { lang, t } = useLang();
   const recordView = useRecordCityView();
   const navigate = useNavigate();
@@ -24,8 +29,8 @@
       navigate(`/city/${phase1}`);
       return;
     }
-    selectPlace(province.id, cityId);
-  };
+    selectPlace(province.id, cityId, enable3D);
+  };
 
   return (
     <aside
@@ -35,8 +40,13 @@
       <header>
         <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
         <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
-        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
-      </header>
+        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
+        {showDesktop3DNotice && (
+          <p className="mt-1 text-xs font-medium text-muted">
+            {lang === "zh" ? "3D 视图仅在桌面端提供" : "3D scene available on desktop"}
+          </p>
+        )}
+      </header>
 
       {hasCities && (
         <section className="flex flex-col gap-1">
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index bba147bc2cd871ef03c9e185d8f43ec242ba11ed..5f0e60996c93390b30b8d06eabb648d2df05f13b
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -12,13 +12,17 @@
 const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
 const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";
 
-type ShapeButtonProps = {
-  shape: ProvinceShape;
-  active: boolean;
-  focused: boolean;
+type ShapeButtonProps = {
+  shape: ProvinceShape;
+  active: boolean;
+  focused: boolean;
   label: string;
-  onSelect: () => void;
-};
+  onSelect: () => void;
+};
+
+type ProvinceShapeLayerProps = {
+  enable3D: boolean;
+};
 
 function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
   const dimmed = focused && !active;
@@ -75,7 +79,7 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
+export default function ProvinceShapeLayer({ enable3D }: ProvinceShapeLayerProps) {
   const { shapes, error } = useProvinceShapes();
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
@@ -135,10 +139,10 @@
               key={shape.id}
               shape={shape}
               active={active}
-              focused={focused}
-              label={title}
-              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
-            />
+              focused={focused}
+              label={title}
+              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null, enable3D))}
+            />
           );
         })}
       </svg>
diff --git a/v2/src/components/map/SpecialRegionMarkers.tsx b/v2/src/components/map/SpecialRegionMarkers.tsx
index ed5ad1154358125b72c005cb3577b2d7dfc4fb21..546f0447ba97e54023c087b3c625fd02f9f4ab68
--- a/v2/src/components/map/SpecialRegionMarkers.tsx
+++ b/v2/src/components/map/SpecialRegionMarkers.tsx
@@ -4,12 +4,16 @@
 import { useLang } from "../../store/language";
 
 const markerIds = new Set(["hong-kong", "macau"]);
-const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
-  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
-  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
-};
-
-export default function SpecialRegionMarkers() {
+const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
+  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
+  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
+};
+
+type SpecialRegionMarkersProps = {
+  enable3D: boolean;
+};
+
+export default function SpecialRegionMarkers({ enable3D }: SpecialRegionMarkersProps) {
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace } = useAtlas();
   const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));
@@ -30,10 +34,10 @@
         return (
           <button
             key={area.id}
-            type="button"
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
+            type="button"
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
             style={style}
           >
             <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />
diff --git a/v2/src/hooks/useIsDesktop.ts b/v2/src/hooks/useIsDesktop.ts
new file mode 100644
index 0000000000000000000000000000000000000000..f502a2e42558b9b9488a90a2b2f95223e4b4065b
--- /dev/null
+++ b/v2/src/hooks/useIsDesktop.ts
@@ -0,0 +1,27 @@
+import { useSyncExternalStore } from "react";
+
+const DESKTOP_QUERY = "(min-width: 768px)";
+
+const getMediaQueryList = () => {
+  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
+    return null;
+  }
+
+  return window.matchMedia(DESKTOP_QUERY);
+};
+
+const getSnapshot = () => getMediaQueryList()?.matches ?? false;
+
+const getServerSnapshot = () => false;
+
+const subscribe = (onStoreChange: () => void) => {
+  const mediaQueryList = getMediaQueryList();
+  if (!mediaQueryList) return () => {};
+
+  mediaQueryList.addEventListener("change", onStoreChange);
+  return () => mediaQueryList.removeEventListener("change", onStoreChange);
+};
+
+export function useIsDesktop() {
+  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
+}
diff --git a/v2/src/store/atlas.ts b/v2/src/store/atlas.ts
index 56462baf71bc6b746613f2e0a0236ce4656625f9..669ad5e22957e56e00cccea58d87ad8b77fbe555
--- a/v2/src/store/atlas.ts
+++ b/v2/src/store/atlas.ts
@@ -8,9 +8,9 @@
   is3DEnabled: boolean;
 };
 
-export type AtlasAction =
-  | { type: "selectProvince"; provinceId: string | null }
-  | { type: "selectPlace"; provinceId: string; cityId: string | null }
+export type AtlasAction =
+  | { type: "selectProvince"; provinceId: string | null; enable3D?: boolean }
+  | { type: "selectPlace"; provinceId: string; cityId: string | null; enable3D?: boolean }
   | { type: "toggle3D" }
   | { type: "reset" };
 
@@ -22,15 +22,20 @@
 
 export const atlasReducer = (state: AtlasState, action: AtlasAction): AtlasState => {
   switch (action.type) {
-    case "selectProvince":
-      return {
-        ...state,
-        selectedProvinceId: action.provinceId,
-        selectedCityId: null,
-        is3DEnabled: Boolean(action.provinceId)
-      };
-    case "selectPlace":
-      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
+    case "selectProvince":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: null,
+        is3DEnabled: Boolean(action.provinceId) && (action.enable3D ?? true)
+      };
+    case "selectPlace":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: action.cityId,
+        is3DEnabled: action.enable3D ?? true
+      };
     case "toggle3D":
       return { ...state, is3DEnabled: !state.is3DEnabled };
     case "reset":
@@ -72,8 +77,10 @@
     ...state,
     province,
     city,
-    selectProvince: (provinceId: string | null) => dispatch({ type: "selectProvince", provinceId }),
-    selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
+    selectProvince: (provinceId: string | null, enable3D = true) =>
+      dispatch({ type: "selectProvince", provinceId, enable3D }),
+    selectPlace: (provinceId: string, cityId: string | null, enable3D = true) =>
+      dispatch({ type: "selectPlace", provinceId, cityId, enable3D }),
     selectCity: (cityId: string | null) =>
       state.selectedProvinceId
         ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })

codex
类型检查通过。现在跑生产构建，并用构建输出/代码路径确认 Cesium 仍是独立 chunk 且移动端不会触发它。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in C:\Users\h\Documents\New project 2\v2
 succeeded in 10424ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1507 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                     6.02 kB │ gzip:     0.93 kB
build/client/assets/Map3D-B9DDZdqH.css              24.01 kB │ gzip:     5.37 kB
build/client/assets/root-C7aYlZEt.css               42.57 kB │ gzip:     8.00 kB
build/client/assets/language-D_sidw9C.js             0.26 kB │ gzip:     0.21 kB
build/client/assets/clsx-H-aRJLpe.js                 0.36 kB │ gzip:     0.23 kB
build/client/assets/cityRoutes-woNkNDLp.js           0.91 kB │ gzip:     0.50 kB
build/client/assets/chunk-BA_0og6f.js                0.95 kB │ gzip:     0.56 kB
build/client/assets/provinceColors-Cv7IoNn8.js       1.84 kB │ gzip:     0.95 kB
build/client/assets/HomePage-BnpsLCOu.js             5.26 kB │ gzip:     2.44 kB
build/client/assets/SharePage-SOKeWOZv.js            7.48 kB │ gzip:     2.76 kB
build/client/assets/phase2-preview-DcPyXPqD.js       7.59 kB │ gzip:     4.48 kB
build/client/assets/AskPage-D4TBpFC4.js              7.62 kB │ gzip:     2.92 kB
build/client/assets/Map3D-CshjVayJ.js                8.95 kB │ gzip:     4.21 kB
build/client/assets/root-Ba0amjpS.js                 9.47 kB │ gzip:     4.57 kB
build/client/assets/GuidePage-CZq-6qwa.js           10.80 kB │ gzip:     5.11 kB
build/client/assets/MapPage-DpaBM0zj.js             13.66 kB │ gzip:     5.00 kB
build/client/assets/practical-other-Bpl292H6.js     22.32 kB │ gzip:    10.76 kB
build/client/assets/atlas-CDcbDXJf.js               23.24 kB │ gzip:     9.57 kB
build/client/assets/SourcesPage-9HAp8EoC.js         32.19 kB │ gzip:     8.46 kB
build/client/assets/unsplash-B0y9OJKy.js            35.00 kB │ gzip:    15.33 kB
build/client/assets/SourcesNote-Dc56Qloe.js         39.01 kB │ gzip:    14.91 kB
build/client/assets/CityPage-D2VQWelf.js            52.26 kB │ gzip:    19.51 kB
build/client/assets/jsx-runtime-CnbWJCR4.js        127.16 kB │ gzip:    41.93 kB
build/client/assets/entry.client-CQ10Nt2o.js       186.53 kB │ gzip:    58.89 kB
build/client/assets/Cesium-CsldJg6P.js           4,724.63 kB │ gzip: 1,304.40 kB

[32m✓ built in 5.82s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 70 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\server-build-C7aYlZEt.css[22m
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m

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
build/server/assets/server-build-C7aYlZEt.css   42.57 kB │ gzip:  8.00 kB
build/server/assets/Map3D-Cv42P-Ue.js           15.47 kB │ gzip:  5.32 kB
build/server/assets/cityRoutes-Byzkxm76.js      31.42 kB │ gzip: 10.70 kB
build/server/index.js                          314.04 kB │ gzip: 98.54 kB

[32m✓ built in 934ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:virtual-modules (38%)
  - react-router:dot-server (35%)
  - react-router:inject-hmr-runtime (17%)
  - react-router:hmr-runtime (5%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index fef4713b04dfd229e932f9aeff7b99b97f616199..870a1ff5ebd3331bec22aa5f826a9a3ea479cf92
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -1,18 +1,20 @@
-import { useEffect } from "react";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import ProvinceShapeLayer from "./ProvinceShapeLayer";
-import ProvinceLabelLayer from "./ProvinceLabelLayer";
-import ProvinceInfoCard from "./ProvinceInfoCard";
+import { useEffect } from "react";
+import { useAtlas } from "../../store/atlas";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
+import ProvinceShapeLayer from "./ProvinceShapeLayer";
+import ProvinceLabelLayer from "./ProvinceLabelLayer";
+import ProvinceInfoCard from "./ProvinceInfoCard";
 import Province3DOverlay from "./Province3DOverlay";
 import SpecialRegionMarkers from "./SpecialRegionMarkers";
 import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
 
-export default function HeroMap() {
-  const { lang } = useLang();
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const focused = Boolean(selectedProvinceId);
-  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
+export default function HeroMap() {
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+  const { selectedProvinceId, province, is3DEnabled, reset, toggle3D } = useAtlas();
+  const focused = Boolean(selectedProvinceId);
+  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
 
   useEffect(() => {
     if (!focused) return;
@@ -40,26 +42,37 @@
       <div
         aria-live="polite"
         className={`china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm ${focused ? "min-h-[420px]" : "min-h-[300px] sm:min-h-[260px]"}`}
-        style={{ aspectRatio: "9463 / 6675" }}
-      >
-        <div className="absolute inset-0">
-          <ProvinceShapeLayer />
-          <ProvinceLabelLayer />
-          <ProvinceHitAreaLayer />
-          <SpecialRegionMarkers />
-          <ProvinceInfoCard />
-          <Province3DOverlay />
-        </div>
-        {focused && !is3DEnabled && (
-          <button
-            type="button"
-            onClick={reset}
-            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
-          >
-            {lang === "zh" ? "重置" : "Reset"}
-          </button>
-        )}
-      </div>
-    </section>
+        style={{ aspectRatio: "9463 / 6675" }}
+      >
+        <div className="absolute inset-0">
+          <ProvinceShapeLayer enable3D={isDesktop} />
+          <ProvinceLabelLayer />
+          <ProvinceHitAreaLayer enable3D={isDesktop} />
+          <SpecialRegionMarkers enable3D={isDesktop} />
+          <ProvinceInfoCard enable3D={isDesktop} showDesktop3DNotice={!isDesktop} />
+          <Province3DOverlay />
+        </div>
+        {focused && !is3DEnabled && (
+          <div className="absolute right-3 top-3 z-30 flex flex-wrap justify-end gap-2">
+            {isDesktop && (
+              <button
+                type="button"
+                onClick={toggle3D}
+                className="rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade/90"
+              >
+                {lang === "zh" ? "查看 3D" : "View in 3D"}
+              </button>
+            )}
+            <button
+              type="button"
+              onClick={reset}
+              className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
+            >
+              {lang === "zh" ? "重置" : "Reset"}
+            </button>
+          </div>
+        )}
+      </div>
+    </section>
   );
 }
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index e15995c3d876e19e896f84d3696f8f636cb5174d..28a734334bb621bcd201e225d354a07f1d71eae0
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,15 +1,17 @@
 import { lazy, Suspense } from "react";
 import MapErrorBoundary from "../common/MapErrorBoundary";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
 
 const Map3D = lazy(() => import("./Map3D"));
 
-export default function Province3DOverlay() {
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const { lang } = useLang();
-
-  if (!selectedProvinceId || !province || !is3DEnabled) return null;
+export default function Province3DOverlay() {
+  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+
+  if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
     <section
diff --git a/v2/src/components/map/ProvinceHitAreaLayer.tsx b/v2/src/components/map/ProvinceHitAreaLayer.tsx
index 3de420de8277d855edbcafc762ddc8b9ac8ebaa2..da36c7155664860d35c46194f475aa0701dffaad
--- a/v2/src/components/map/ProvinceHitAreaLayer.tsx
+++ b/v2/src/components/map/ProvinceHitAreaLayer.tsx
@@ -2,11 +2,15 @@
 import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
-const specialMarkerIds = new Set(["hong-kong", "macau"]);
-
-export default function ProvinceHitAreaLayer() {
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace } = useAtlas();
+const specialMarkerIds = new Set(["hong-kong", "macau"]);
+
+type ProvinceHitAreaLayerProps = {
+  enable3D: boolean;
+};
+
+export default function ProvinceHitAreaLayer({ enable3D }: ProvinceHitAreaLayerProps) {
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace } = useAtlas();
 
   if (selectedProvinceId) return null;
 
@@ -19,10 +23,10 @@
             key={area.id}
             type="button"
             tabIndex={-1}
-            data-province-hit={area.id}
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
+            data-province-hit={area.id}
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
             style={{
               left: `${area.x}%`,
               top: `${area.y}%`,
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index df60b8437c8831d0b39874c47ac52621c59cb73b..892e33faa0de620cd743860ff50a8c8440c9fc5f
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -4,9 +4,14 @@
 import { provinceAttractionSeed } from "../../data/atlas";
 import { useRecordCityView } from "../../hooks/useCityViews";
 import { getPhase1CityRouteId } from "../../lib/cityRoutes";
-
-export default function ProvinceInfoCard() {
-  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
+
+type ProvinceInfoCardProps = {
+  enable3D: boolean;
+  showDesktop3DNotice: boolean;
+};
+
+export default function ProvinceInfoCard({ enable3D, showDesktop3DNotice }: ProvinceInfoCardProps) {
+  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
   const { lang, t } = useLang();
   const recordView = useRecordCityView();
   const navigate = useNavigate();
@@ -24,8 +29,8 @@
       navigate(`/city/${phase1}`);
       return;
     }
-    selectPlace(province.id, cityId);
-  };
+    selectPlace(province.id, cityId, enable3D);
+  };
 
   return (
     <aside
@@ -35,8 +40,13 @@
       <header>
         <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
         <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
-        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
-      </header>
+        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
+        {showDesktop3DNotice && (
+          <p className="mt-1 text-xs font-medium text-muted">
+            {lang === "zh" ? "3D 视图仅在桌面端提供" : "3D scene available on desktop"}
+          </p>
+        )}
+      </header>
 
       {hasCities && (
         <section className="flex flex-col gap-1">
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index bba147bc2cd871ef03c9e185d8f43ec242ba11ed..5f0e60996c93390b30b8d06eabb648d2df05f13b
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -12,13 +12,17 @@
 const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
 const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";
 
-type ShapeButtonProps = {
-  shape: ProvinceShape;
-  active: boolean;
-  focused: boolean;
+type ShapeButtonProps = {
+  shape: ProvinceShape;
+  active: boolean;
+  focused: boolean;
   label: string;
-  onSelect: () => void;
-};
+  onSelect: () => void;
+};
+
+type ProvinceShapeLayerProps = {
+  enable3D: boolean;
+};
 
 function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
   const dimmed = focused && !active;
@@ -75,7 +79,7 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
+export default function ProvinceShapeLayer({ enable3D }: ProvinceShapeLayerProps) {
   const { shapes, error } = useProvinceShapes();
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
@@ -135,10 +139,10 @@
               key={shape.id}
               shape={shape}
               active={active}
-              focused={focused}
-              label={title}
-              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
-            />
+              focused={focused}
+              label={title}
+              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null, enable3D))}
+            />
           );
         })}
       </svg>
diff --git a/v2/src/components/map/SpecialRegionMarkers.tsx b/v2/src/components/map/SpecialRegionMarkers.tsx
index ed5ad1154358125b72c005cb3577b2d7dfc4fb21..546f0447ba97e54023c087b3c625fd02f9f4ab68
--- a/v2/src/components/map/SpecialRegionMarkers.tsx
+++ b/v2/src/components/map/SpecialRegionMarkers.tsx
@@ -4,12 +4,16 @@
 import { useLang } from "../../store/language";
 
 const markerIds = new Set(["hong-kong", "macau"]);
-const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
-  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
-  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
-};
-
-export default function SpecialRegionMarkers() {
+const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
+  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
+  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
+};
+
+type SpecialRegionMarkersProps = {
+  enable3D: boolean;
+};
+
+export default function SpecialRegionMarkers({ enable3D }: SpecialRegionMarkersProps) {
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace } = useAtlas();
   const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));
@@ -30,10 +34,10 @@
         return (
           <button
             key={area.id}
-            type="button"
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
+            type="button"
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
             style={style}
           >
             <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />
diff --git a/v2/src/hooks/useIsDesktop.ts b/v2/src/hooks/useIsDesktop.ts
new file mode 100644
index 0000000000000000000000000000000000000000..f502a2e42558b9b9488a90a2b2f95223e4b4065b
--- /dev/null
+++ b/v2/src/hooks/useIsDesktop.ts
@@ -0,0 +1,27 @@
+import { useSyncExternalStore } from "react";
+
+const DESKTOP_QUERY = "(min-width: 768px)";
+
+const getMediaQueryList = () => {
+  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
+    return null;
+  }
+
+  return window.matchMedia(DESKTOP_QUERY);
+};
+
+const getSnapshot = () => getMediaQueryList()?.matches ?? false;
+
+const getServerSnapshot = () => false;
+
+const subscribe = (onStoreChange: () => void) => {
+  const mediaQueryList = getMediaQueryList();
+  if (!mediaQueryList) return () => {};
+
+  mediaQueryList.addEventListener("change", onStoreChange);
+  return () => mediaQueryList.removeEventListener("change", onStoreChange);
+};
+
+export function useIsDesktop() {
+  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
+}
diff --git a/v2/src/store/atlas.ts b/v2/src/store/atlas.ts
index 56462baf71bc6b746613f2e0a0236ce4656625f9..669ad5e22957e56e00cccea58d87ad8b77fbe555
--- a/v2/src/store/atlas.ts
+++ b/v2/src/store/atlas.ts
@@ -8,9 +8,9 @@
   is3DEnabled: boolean;
 };
 
-export type AtlasAction =
-  | { type: "selectProvince"; provinceId: string | null }
-  | { type: "selectPlace"; provinceId: string; cityId: string | null }
+export type AtlasAction =
+  | { type: "selectProvince"; provinceId: string | null; enable3D?: boolean }
+  | { type: "selectPlace"; provinceId: string; cityId: string | null; enable3D?: boolean }
   | { type: "toggle3D" }
   | { type: "reset" };
 
@@ -22,15 +22,20 @@
 
 export const atlasReducer = (state: AtlasState, action: AtlasAction): AtlasState => {
   switch (action.type) {
-    case "selectProvince":
-      return {
-        ...state,
-        selectedProvinceId: action.provinceId,
-        selectedCityId: null,
-        is3DEnabled: Boolean(action.provinceId)
-      };
-    case "selectPlace":
-      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
+    case "selectProvince":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: null,
+        is3DEnabled: Boolean(action.provinceId) && (action.enable3D ?? true)
+      };
+    case "selectPlace":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: action.cityId,
+        is3DEnabled: action.enable3D ?? true
+      };
     case "toggle3D":
       return { ...state, is3DEnabled: !state.is3DEnabled };
     case "reset":
@@ -72,8 +77,10 @@
     ...state,
     province,
     city,
-    selectProvince: (provinceId: string | null) => dispatch({ type: "selectProvince", provinceId }),
-    selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
+    selectProvince: (provinceId: string | null, enable3D = true) =>
+      dispatch({ type: "selectProvince", provinceId, enable3D }),
+    selectPlace: (provinceId: string, cityId: string | null, enable3D = true) =>
+      dispatch({ type: "selectPlace", provinceId, cityId, enable3D }),
     selectCity: (cityId: string | null) =>
       state.selectedProvinceId
         ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })

codex
构建通过，Cesium 仍然是独立的 `Cesium-*.js` 大 chunk。为了报告里更硬一点，我再看 client manifest 和 MapPage 产物，确认初始地图页 chunk 只保留动态导入链，没有把 Cesium 合进首屏。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"Cesium|Map3D\" build\\client\\assets\\MapPage-*.js build\\client\\.vite\\manifest.json" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path build\\client\\.vite\\manifest.json -Encoding utf8" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short' in C:\Users\h\Documents\New project 2
2026-05-12T03:14:37.329853Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 1 seconds
Output:
rg: build\client\assets\MapPage-*.js: 文件名、目录名或卷标语法不正确。 (os error 123)
rg: build\client\.vite\manifest.json: 系统找不到指定的路径。 (os error 3)

 exited 1 in 955ms:
rg: build\client\assets\MapPage-*.js: 文件名、目录名或卷标语法不正确。 (os error 123)
rg: build\client\.vite\manifest.json: 系统找不到指定的路径。 (os error 3)

 succeeded in 971ms:
 M v2/src/components/city/CityImagePanel.tsx
 M v2/src/components/map/HeroMap.tsx
 M v2/src/components/map/Province3DOverlay.tsx
 M v2/src/components/map/ProvinceHitAreaLayer.tsx
 M v2/src/components/map/ProvinceInfoCard.tsx
 M v2/src/components/map/ProvinceShapeLayer.tsx
 M v2/src/components/map/SpecialRegionMarkers.tsx
 M v2/src/pages/HomePage.tsx
 M v2/src/root.tsx
 M v2/src/store/LanguageProvider.tsx
 M v2/src/store/atlas.ts
?? v2/src/hooks/useIsDesktop.ts
?? v2/src/lib/jsonLd.ts
?? v2/src/lib/unsplash.ts

2026-05-12T03:14:37.522880Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 1.1 seconds
Output:
Get-Content : Cannot find path 'C:\Users\h\Documents\New project 2\v2\build\client\.vite\manifest.json' because it does
 not exist.
At line:2 char:1
+ Get-Content -Path build\client\.vite\manifest.json -Encoding utf8
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\Users\h\Docu...e\manifest.json:String) [Get-Content], ItemNotFoundEx 
   ception
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.GetContentCommand
 

 exited 1 in 1140ms:
Get-Content : Cannot find path 'C:\Users\h\Documents\New project 2\v2\build\client\.vite\manifest.json' because it does
 not exist.
At line:2 char:1
+ Get-Content -Path build\client\.vite\manifest.json -Encoding utf8
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\Users\h\Docu...e\manifest.json:String) [Get-Content], ItemNotFoundEx 
   ception
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.GetContentCommand
 

diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index fef4713b04dfd229e932f9aeff7b99b97f616199..870a1ff5ebd3331bec22aa5f826a9a3ea479cf92
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -1,18 +1,20 @@
-import { useEffect } from "react";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import ProvinceShapeLayer from "./ProvinceShapeLayer";
-import ProvinceLabelLayer from "./ProvinceLabelLayer";
-import ProvinceInfoCard from "./ProvinceInfoCard";
+import { useEffect } from "react";
+import { useAtlas } from "../../store/atlas";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
+import ProvinceShapeLayer from "./ProvinceShapeLayer";
+import ProvinceLabelLayer from "./ProvinceLabelLayer";
+import ProvinceInfoCard from "./ProvinceInfoCard";
 import Province3DOverlay from "./Province3DOverlay";
 import SpecialRegionMarkers from "./SpecialRegionMarkers";
 import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
 
-export default function HeroMap() {
-  const { lang } = useLang();
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const focused = Boolean(selectedProvinceId);
-  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
+export default function HeroMap() {
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+  const { selectedProvinceId, province, is3DEnabled, reset, toggle3D } = useAtlas();
+  const focused = Boolean(selectedProvinceId);
+  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
 
   useEffect(() => {
     if (!focused) return;
@@ -40,26 +42,37 @@
       <div
         aria-live="polite"
         className={`china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm ${focused ? "min-h-[420px]" : "min-h-[300px] sm:min-h-[260px]"}`}
-        style={{ aspectRatio: "9463 / 6675" }}
-      >
-        <div className="absolute inset-0">
-          <ProvinceShapeLayer />
-          <ProvinceLabelLayer />
-          <ProvinceHitAreaLayer />
-          <SpecialRegionMarkers />
-          <ProvinceInfoCard />
-          <Province3DOverlay />
-        </div>
-        {focused && !is3DEnabled && (
-          <button
-            type="button"
-            onClick={reset}
-            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
-          >
-            {lang === "zh" ? "重置" : "Reset"}
-          </button>
-        )}
-      </div>
-    </section>
+        style={{ aspectRatio: "9463 / 6675" }}
+      >
+        <div className="absolute inset-0">
+          <ProvinceShapeLayer enable3D={isDesktop} />
+          <ProvinceLabelLayer />
+          <ProvinceHitAreaLayer enable3D={isDesktop} />
+          <SpecialRegionMarkers enable3D={isDesktop} />
+          <ProvinceInfoCard enable3D={isDesktop} showDesktop3DNotice={!isDesktop} />
+          <Province3DOverlay />
+        </div>
+        {focused && !is3DEnabled && (
+          <div className="absolute right-3 top-3 z-30 flex flex-wrap justify-end gap-2">
+            {isDesktop && (
+              <button
+                type="button"
+                onClick={toggle3D}
+                className="rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade/90"
+              >
+                {lang === "zh" ? "查看 3D" : "View in 3D"}
+              </button>
+            )}
+            <button
+              type="button"
+              onClick={reset}
+              className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
+            >
+              {lang === "zh" ? "重置" : "Reset"}
+            </button>
+          </div>
+        )}
+      </div>
+    </section>
   );
 }
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index e15995c3d876e19e896f84d3696f8f636cb5174d..28a734334bb621bcd201e225d354a07f1d71eae0
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,15 +1,17 @@
 import { lazy, Suspense } from "react";
 import MapErrorBoundary from "../common/MapErrorBoundary";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
 
 const Map3D = lazy(() => import("./Map3D"));
 
-export default function Province3DOverlay() {
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const { lang } = useLang();
-
-  if (!selectedProvinceId || !province || !is3DEnabled) return null;
+export default function Province3DOverlay() {
+  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+
+  if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
     <section
diff --git a/v2/src/components/map/ProvinceHitAreaLayer.tsx b/v2/src/components/map/ProvinceHitAreaLayer.tsx
index 3de420de8277d855edbcafc762ddc8b9ac8ebaa2..da36c7155664860d35c46194f475aa0701dffaad
--- a/v2/src/components/map/ProvinceHitAreaLayer.tsx
+++ b/v2/src/components/map/ProvinceHitAreaLayer.tsx
@@ -2,11 +2,15 @@
 import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
-const specialMarkerIds = new Set(["hong-kong", "macau"]);
-
-export default function ProvinceHitAreaLayer() {
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace } = useAtlas();
+const specialMarkerIds = new Set(["hong-kong", "macau"]);
+
+type ProvinceHitAreaLayerProps = {
+  enable3D: boolean;
+};
+
+export default function ProvinceHitAreaLayer({ enable3D }: ProvinceHitAreaLayerProps) {
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace } = useAtlas();
 
   if (selectedProvinceId) return null;
 
@@ -19,10 +23,10 @@
             key={area.id}
             type="button"
             tabIndex={-1}
-            data-province-hit={area.id}
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
+            data-province-hit={area.id}
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
             style={{
               left: `${area.x}%`,
               top: `${area.y}%`,
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index df60b8437c8831d0b39874c47ac52621c59cb73b..892e33faa0de620cd743860ff50a8c8440c9fc5f
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -4,9 +4,14 @@
 import { provinceAttractionSeed } from "../../data/atlas";
 import { useRecordCityView } from "../../hooks/useCityViews";
 import { getPhase1CityRouteId } from "../../lib/cityRoutes";
-
-export default function ProvinceInfoCard() {
-  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
+
+type ProvinceInfoCardProps = {
+  enable3D: boolean;
+  showDesktop3DNotice: boolean;
+};
+
+export default function ProvinceInfoCard({ enable3D, showDesktop3DNotice }: ProvinceInfoCardProps) {
+  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
   const { lang, t } = useLang();
   const recordView = useRecordCityView();
   const navigate = useNavigate();
@@ -24,8 +29,8 @@
       navigate(`/city/${phase1}`);
       return;
     }
-    selectPlace(province.id, cityId);
-  };
+    selectPlace(province.id, cityId, enable3D);
+  };
 
   return (
     <aside
@@ -35,8 +40,13 @@
       <header>
         <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
         <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
-        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
-      </header>
+        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
+        {showDesktop3DNotice && (
+          <p className="mt-1 text-xs font-medium text-muted">
+            {lang === "zh" ? "3D 视图仅在桌面端提供" : "3D scene available on desktop"}
+          </p>
+        )}
+      </header>
 
       {hasCities && (
         <section className="flex flex-col gap-1">
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index bba147bc2cd871ef03c9e185d8f43ec242ba11ed..5f0e60996c93390b30b8d06eabb648d2df05f13b
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -12,13 +12,17 @@
 const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
 const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";
 
-type ShapeButtonProps = {
-  shape: ProvinceShape;
-  active: boolean;
-  focused: boolean;
+type ShapeButtonProps = {
+  shape: ProvinceShape;
+  active: boolean;
+  focused: boolean;
   label: string;
-  onSelect: () => void;
-};
+  onSelect: () => void;
+};
+
+type ProvinceShapeLayerProps = {
+  enable3D: boolean;
+};
 
 function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
   const dimmed = focused && !active;
@@ -75,7 +79,7 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
+export default function ProvinceShapeLayer({ enable3D }: ProvinceShapeLayerProps) {
   const { shapes, error } = useProvinceShapes();
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
@@ -135,10 +139,10 @@
               key={shape.id}
               shape={shape}
               active={active}
-              focused={focused}
-              label={title}
-              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
-            />
+              focused={focused}
+              label={title}
+              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null, enable3D))}
+            />
           );
         })}
       </svg>
diff --git a/v2/src/components/map/SpecialRegionMarkers.tsx b/v2/src/components/map/SpecialRegionMarkers.tsx
index ed5ad1154358125b72c005cb3577b2d7dfc4fb21..546f0447ba97e54023c087b3c625fd02f9f4ab68
--- a/v2/src/components/map/SpecialRegionMarkers.tsx
+++ b/v2/src/components/map/SpecialRegionMarkers.tsx
@@ -4,12 +4,16 @@
 import { useLang } from "../../store/language";
 
 const markerIds = new Set(["hong-kong", "macau"]);
-const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
-  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
-  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
-};
-
-export default function SpecialRegionMarkers() {
+const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
+  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
+  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
+};
+
+type SpecialRegionMarkersProps = {
+  enable3D: boolean;
+};
+
+export default function SpecialRegionMarkers({ enable3D }: SpecialRegionMarkersProps) {
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace } = useAtlas();
   const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));
@@ -30,10 +34,10 @@
         return (
           <button
             key={area.id}
-            type="button"
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
+            type="button"
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
             style={style}
           >
             <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />
diff --git a/v2/src/hooks/useIsDesktop.ts b/v2/src/hooks/useIsDesktop.ts
new file mode 100644
index 0000000000000000000000000000000000000000..f502a2e42558b9b9488a90a2b2f95223e4b4065b
--- /dev/null
+++ b/v2/src/hooks/useIsDesktop.ts
@@ -0,0 +1,27 @@
+import { useSyncExternalStore } from "react";
+
+const DESKTOP_QUERY = "(min-width: 768px)";
+
+const getMediaQueryList = () => {
+  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
+    return null;
+  }
+
+  return window.matchMedia(DESKTOP_QUERY);
+};
+
+const getSnapshot = () => getMediaQueryList()?.matches ?? false;
+
+const getServerSnapshot = () => false;
+
+const subscribe = (onStoreChange: () => void) => {
+  const mediaQueryList = getMediaQueryList();
+  if (!mediaQueryList) return () => {};
+
+  mediaQueryList.addEventListener("change", onStoreChange);
+  return () => mediaQueryList.removeEventListener("change", onStoreChange);
+};
+
+export function useIsDesktop() {
+  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
+}
diff --git a/v2/src/store/atlas.ts b/v2/src/store/atlas.ts
index 56462baf71bc6b746613f2e0a0236ce4656625f9..669ad5e22957e56e00cccea58d87ad8b77fbe555
--- a/v2/src/store/atlas.ts
+++ b/v2/src/store/atlas.ts
@@ -8,9 +8,9 @@
   is3DEnabled: boolean;
 };
 
-export type AtlasAction =
-  | { type: "selectProvince"; provinceId: string | null }
-  | { type: "selectPlace"; provinceId: string; cityId: string | null }
+export type AtlasAction =
+  | { type: "selectProvince"; provinceId: string | null; enable3D?: boolean }
+  | { type: "selectPlace"; provinceId: string; cityId: string | null; enable3D?: boolean }
   | { type: "toggle3D" }
   | { type: "reset" };
 
@@ -22,15 +22,20 @@
 
 export const atlasReducer = (state: AtlasState, action: AtlasAction): AtlasState => {
   switch (action.type) {
-    case "selectProvince":
-      return {
-        ...state,
-        selectedProvinceId: action.provinceId,
-        selectedCityId: null,
-        is3DEnabled: Boolean(action.provinceId)
-      };
-    case "selectPlace":
-      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
+    case "selectProvince":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: null,
+        is3DEnabled: Boolean(action.provinceId) && (action.enable3D ?? true)
+      };
+    case "selectPlace":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: action.cityId,
+        is3DEnabled: action.enable3D ?? true
+      };
     case "toggle3D":
       return { ...state, is3DEnabled: !state.is3DEnabled };
     case "reset":
@@ -72,8 +77,10 @@
     ...state,
     province,
     city,
-    selectProvince: (provinceId: string | null) => dispatch({ type: "selectProvince", provinceId }),
-    selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
+    selectProvince: (provinceId: string | null, enable3D = true) =>
+      dispatch({ type: "selectProvince", provinceId, enable3D }),
+    selectPlace: (provinceId: string, cityId: string | null, enable3D = true) =>
+      dispatch({ type: "selectPlace", provinceId, cityId, enable3D }),
     selectCity: (cityId: string | null) =>
       state.selectedProvinceId
         ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })

codex
`git status` 里有几处任务外的既有改动，我会只关注本次地图相关文件，不碰那些文件。刚才 PowerShell 通配路径写法不对且 manifest 位置需要重新列目录，我现在用 `Get-ChildItem -Force` 重新查构建产物。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Force -Recurse -Depth 2 build | Select-Object FullName,Length' in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-ChildItem -Force build\\client | Select-Object Name,Mode,Length" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-ChildItem -Force build\\client\\assets | Where-Object { "'$_.Name -like '"'MapPage-*.js' -or "'$_.Name -like '"'Map3D-*.js' -or "'$_.Name -like '"'Cesium-*.js' } | Select-Object Name,Length" in C:\Users\h\Documents\New project 2\v2
 succeeded in 812ms:

FullName                                                                              Length  
--------                                                                              ------  
C:\Users\h\Documents\New project 2\v2\build\client                                            
C:\Users\h\Documents\New project 2\v2\build\client\ask                                        
C:\Users\h\Documents\New project 2\v2\build\client\assets                                     
C:\Users\h\Documents\New project 2\v2\build\client\cesium                                     
C:\Users\h\Documents\New project 2\v2\build\client\city                                       
C:\Users\h\Documents\New project 2\v2\build\client\guide                                      
C:\Users\h\Documents\New project 2\v2\build\client\map                                        
C:\Users\h\Documents\New project 2\v2\build\client\share                                      
C:\Users\h\Documents\New project 2\v2\build\client\sources                                    
C:\Users\h\Documents\New project 2\v2\build\client\favicon.svg                        9522    
C:\Users\h\Documents\New project 2\v2\build\client\index.html                         14217   
C:\Users\h\Documents\New project 2\v2\build\client\__spa-fallback.html                2553    
C:\Users\h\Documents\New project 2\v2\build\client\ask\index.html                     14778   
C:\Users\h\Documents\New project 2\v2\build\client\assets\province-map-textures               
C:\Users\h\Documents\New project 2\v2\build\client\assets\AskPage-D4TBpFC4.js         7625    
C:\Users\h\Documents\New project 2\v2\build\client\assets\atlas-CDcbDXJf.js           23249   
C:\Users\h\Documents\New project 2\v2\build\client\assets\Cesium-CsldJg6P.js          4724633 
C:\Users\h\Documents\New project 2\v2\build\client\assets\china-map-gs2022-4309.jpg   10577330
C:\Users\h\Documents\New project 2\v2\build\client\assets\china-province-shapes.json  116837  
C:\Users\h\Documents\New project 2\v2\build\client\assets\chunk-BA_0og6f.js           957     
C:\Users\h\Documents\New project 2\v2\build\client\assets\CityPage-D2VQWelf.js        52262   
C:\Users\h\Documents\New project 2\v2\build\client\assets\cityRoutes-woNkNDLp.js      911     
C:\Users\h\Documents\New project 2\v2\build\client\assets\clsx-H-aRJLpe.js            368     
C:\Users\h\Documents\New project 2\v2\build\client\assets\earth-bluemarble.jpg        512606  
C:\Users\h\Documents\New project 2\v2\build\client\assets\entry.client-CQ10Nt2o.js    186534  
C:\Users\h\Documents\New project 2\v2\build\client\assets\GuidePage-CZq-6qwa.js       10808   
C:\Users\h\Documents\New project 2\v2\build\client\assets\HomePage-BnpsLCOu.js        5267    
C:\Users\h\Documents\New project 2\v2\build\client\assets\jsx-runtime-CnbWJCR4.js     127167  
C:\Users\h\Documents\New project 2\v2\build\client\assets\language-D_sidw9C.js        267     
C:\Users\h\Documents\New project 2\v2\build\client\assets\manifest-57451698.js        4369    
C:\Users\h\Documents\New project 2\v2\build\client\assets\Map3D-B9DDZdqH.css          24010   
C:\Users\h\Documents\New project 2\v2\build\client\assets\Map3D-CshjVayJ.js           8958    
C:\Users\h\Documents\New project 2\v2\build\client\assets\MapPage-DpaBM0zj.js         13669   
C:\Users\h\Documents\New project 2\v2\build\client\assets\phase2-preview-DcPyXPqD.js  7599    
C:\Users\h\Documents\New project 2\v2\build\client\assets\practical-other-Bpl292H6.js 22322   
C:\Users\h\Documents\New project 2\v2\build\client\assets\provinceColors-Cv7IoNn8.js  1842    
C:\Users\h\Documents\New project 2\v2\build\client\assets\root-Ba0amjpS.js            9470    
C:\Users\h\Documents\New project 2\v2\build\client\assets\root-C7aYlZEt.css           42578   
C:\Users\h\Documents\New project 2\v2\build\client\assets\SharePage-SOKeWOZv.js       7489    
C:\Users\h\Documents\New project 2\v2\build\client\assets\SourcesNote-Dc56Qloe.js     39016   
C:\Users\h\Documents\New project 2\v2\build\client\assets\SourcesPage-9HAp8EoC.js     32196   
C:\Users\h\Documents\New project 2\v2\build\client\assets\three.module.min.js         674422  
C:\Users\h\Documents\New project 2\v2\build\client\assets\unsplash-B0y9OJKy.js        35005   
C:\Users\h\Documents\New project 2\v2\build\client\cesium\node_modules                        
C:\Users\h\Documents\New project 2\v2\build\client\city\beijing                               
C:\Users\h\Documents\New project 2\v2\build\client\city\guangzhou                             
C:\Users\h\Documents\New project 2\v2\build\client\city\shanghai                              
C:\Users\h\Documents\New project 2\v2\build\client\city\shenzhen                              
C:\Users\h\Documents\New project 2\v2\build\client\guide\entry                                
C:\Users\h\Documents\New project 2\v2\build\client\guide\notes                                
C:\Users\h\Documents\New project 2\v2\build\client\guide\payments                             
C:\Users\h\Documents\New project 2\v2\build\client\map\index.html                     14415   
C:\Users\h\Documents\New project 2\v2\build\client\share\index.html                   13304   
C:\Users\h\Documents\New project 2\v2\build\client\sources\index.html                 70367   



 succeeded in 814ms:

Name                Mode   Length
----                ----   ------
ask                 d-----       
assets              d-----       
cesium              d-----       
city                d-----       
guide               d-----       
map                 d-----       
share               d-----       
sources             d-----       
favicon.svg         -a---- 9522  
index.html          -a---- 14217 
__spa-fallback.html -a---- 2553  



 succeeded in 844ms:

Name                 Length
----                 ------
Cesium-CsldJg6P.js  4724633
Map3D-CshjVayJ.js      8958
MapPage-DpaBM0zj.js   13669



diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index fef4713b04dfd229e932f9aeff7b99b97f616199..870a1ff5ebd3331bec22aa5f826a9a3ea479cf92
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -1,18 +1,20 @@
-import { useEffect } from "react";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import ProvinceShapeLayer from "./ProvinceShapeLayer";
-import ProvinceLabelLayer from "./ProvinceLabelLayer";
-import ProvinceInfoCard from "./ProvinceInfoCard";
+import { useEffect } from "react";
+import { useAtlas } from "../../store/atlas";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
+import ProvinceShapeLayer from "./ProvinceShapeLayer";
+import ProvinceLabelLayer from "./ProvinceLabelLayer";
+import ProvinceInfoCard from "./ProvinceInfoCard";
 import Province3DOverlay from "./Province3DOverlay";
 import SpecialRegionMarkers from "./SpecialRegionMarkers";
 import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
 
-export default function HeroMap() {
-  const { lang } = useLang();
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const focused = Boolean(selectedProvinceId);
-  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
+export default function HeroMap() {
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+  const { selectedProvinceId, province, is3DEnabled, reset, toggle3D } = useAtlas();
+  const focused = Boolean(selectedProvinceId);
+  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
 
   useEffect(() => {
     if (!focused) return;
@@ -40,26 +42,37 @@
       <div
         aria-live="polite"
         className={`china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm ${focused ? "min-h-[420px]" : "min-h-[300px] sm:min-h-[260px]"}`}
-        style={{ aspectRatio: "9463 / 6675" }}
-      >
-        <div className="absolute inset-0">
-          <ProvinceShapeLayer />
-          <ProvinceLabelLayer />
-          <ProvinceHitAreaLayer />
-          <SpecialRegionMarkers />
-          <ProvinceInfoCard />
-          <Province3DOverlay />
-        </div>
-        {focused && !is3DEnabled && (
-          <button
-            type="button"
-            onClick={reset}
-            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
-          >
-            {lang === "zh" ? "重置" : "Reset"}
-          </button>
-        )}
-      </div>
-    </section>
+        style={{ aspectRatio: "9463 / 6675" }}
+      >
+        <div className="absolute inset-0">
+          <ProvinceShapeLayer enable3D={isDesktop} />
+          <ProvinceLabelLayer />
+          <ProvinceHitAreaLayer enable3D={isDesktop} />
+          <SpecialRegionMarkers enable3D={isDesktop} />
+          <ProvinceInfoCard enable3D={isDesktop} showDesktop3DNotice={!isDesktop} />
+          <Province3DOverlay />
+        </div>
+        {focused && !is3DEnabled && (
+          <div className="absolute right-3 top-3 z-30 flex flex-wrap justify-end gap-2">
+            {isDesktop && (
+              <button
+                type="button"
+                onClick={toggle3D}
+                className="rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade/90"
+              >
+                {lang === "zh" ? "查看 3D" : "View in 3D"}
+              </button>
+            )}
+            <button
+              type="button"
+              onClick={reset}
+              className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
+            >
+              {lang === "zh" ? "重置" : "Reset"}
+            </button>
+          </div>
+        )}
+      </div>
+    </section>
   );
 }
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index e15995c3d876e19e896f84d3696f8f636cb5174d..28a734334bb621bcd201e225d354a07f1d71eae0
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,15 +1,17 @@
 import { lazy, Suspense } from "react";
 import MapErrorBoundary from "../common/MapErrorBoundary";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
 
 const Map3D = lazy(() => import("./Map3D"));
 
-export default function Province3DOverlay() {
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const { lang } = useLang();
-
-  if (!selectedProvinceId || !province || !is3DEnabled) return null;
+export default function Province3DOverlay() {
+  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+
+  if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
     <section
diff --git a/v2/src/components/map/ProvinceHitAreaLayer.tsx b/v2/src/components/map/ProvinceHitAreaLayer.tsx
index 3de420de8277d855edbcafc762ddc8b9ac8ebaa2..da36c7155664860d35c46194f475aa0701dffaad
--- a/v2/src/components/map/ProvinceHitAreaLayer.tsx
+++ b/v2/src/components/map/ProvinceHitAreaLayer.tsx
@@ -2,11 +2,15 @@
 import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
-const specialMarkerIds = new Set(["hong-kong", "macau"]);
-
-export default function ProvinceHitAreaLayer() {
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace } = useAtlas();
+const specialMarkerIds = new Set(["hong-kong", "macau"]);
+
+type ProvinceHitAreaLayerProps = {
+  enable3D: boolean;
+};
+
+export default function ProvinceHitAreaLayer({ enable3D }: ProvinceHitAreaLayerProps) {
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace } = useAtlas();
 
   if (selectedProvinceId) return null;
 
@@ -19,10 +23,10 @@
             key={area.id}
             type="button"
             tabIndex={-1}
-            data-province-hit={area.id}
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
+            data-province-hit={area.id}
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
             style={{
               left: `${area.x}%`,
               top: `${area.y}%`,
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index df60b8437c8831d0b39874c47ac52621c59cb73b..892e33faa0de620cd743860ff50a8c8440c9fc5f
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -4,9 +4,14 @@
 import { provinceAttractionSeed } from "../../data/atlas";
 import { useRecordCityView } from "../../hooks/useCityViews";
 import { getPhase1CityRouteId } from "../../lib/cityRoutes";
-
-export default function ProvinceInfoCard() {
-  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
+
+type ProvinceInfoCardProps = {
+  enable3D: boolean;
+  showDesktop3DNotice: boolean;
+};
+
+export default function ProvinceInfoCard({ enable3D, showDesktop3DNotice }: ProvinceInfoCardProps) {
+  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
   const { lang, t } = useLang();
   const recordView = useRecordCityView();
   const navigate = useNavigate();
@@ -24,8 +29,8 @@
       navigate(`/city/${phase1}`);
       return;
     }
-    selectPlace(province.id, cityId);
-  };
+    selectPlace(province.id, cityId, enable3D);
+  };
 
   return (
     <aside
@@ -35,8 +40,13 @@
       <header>
         <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
         <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
-        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
-      </header>
+        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
+        {showDesktop3DNotice && (
+          <p className="mt-1 text-xs font-medium text-muted">
+            {lang === "zh" ? "3D 视图仅在桌面端提供" : "3D scene available on desktop"}
+          </p>
+        )}
+      </header>
 
       {hasCities && (
         <section className="flex flex-col gap-1">
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index bba147bc2cd871ef03c9e185d8f43ec242ba11ed..5f0e60996c93390b30b8d06eabb648d2df05f13b
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -12,13 +12,17 @@
 const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
 const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";
 
-type ShapeButtonProps = {
-  shape: ProvinceShape;
-  active: boolean;
-  focused: boolean;
+type ShapeButtonProps = {
+  shape: ProvinceShape;
+  active: boolean;
+  focused: boolean;
   label: string;
-  onSelect: () => void;
-};
+  onSelect: () => void;
+};
+
+type ProvinceShapeLayerProps = {
+  enable3D: boolean;
+};
 
 function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
   const dimmed = focused && !active;
@@ -75,7 +79,7 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
+export default function ProvinceShapeLayer({ enable3D }: ProvinceShapeLayerProps) {
   const { shapes, error } = useProvinceShapes();
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
@@ -135,10 +139,10 @@
               key={shape.id}
               shape={shape}
               active={active}
-              focused={focused}
-              label={title}
-              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
-            />
+              focused={focused}
+              label={title}
+              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null, enable3D))}
+            />
           );
         })}
       </svg>
diff --git a/v2/src/components/map/SpecialRegionMarkers.tsx b/v2/src/components/map/SpecialRegionMarkers.tsx
index ed5ad1154358125b72c005cb3577b2d7dfc4fb21..546f0447ba97e54023c087b3c625fd02f9f4ab68
--- a/v2/src/components/map/SpecialRegionMarkers.tsx
+++ b/v2/src/components/map/SpecialRegionMarkers.tsx
@@ -4,12 +4,16 @@
 import { useLang } from "../../store/language";
 
 const markerIds = new Set(["hong-kong", "macau"]);
-const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
-  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
-  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
-};
-
-export default function SpecialRegionMarkers() {
+const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
+  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
+  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
+};
+
+type SpecialRegionMarkersProps = {
+  enable3D: boolean;
+};
+
+export default function SpecialRegionMarkers({ enable3D }: SpecialRegionMarkersProps) {
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace } = useAtlas();
   const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));
@@ -30,10 +34,10 @@
         return (
           <button
             key={area.id}
-            type="button"
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
+            type="button"
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
             style={style}
           >
             <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />
diff --git a/v2/src/hooks/useIsDesktop.ts b/v2/src/hooks/useIsDesktop.ts
new file mode 100644
index 0000000000000000000000000000000000000000..f502a2e42558b9b9488a90a2b2f95223e4b4065b
--- /dev/null
+++ b/v2/src/hooks/useIsDesktop.ts
@@ -0,0 +1,27 @@
+import { useSyncExternalStore } from "react";
+
+const DESKTOP_QUERY = "(min-width: 768px)";
+
+const getMediaQueryList = () => {
+  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
+    return null;
+  }
+
+  return window.matchMedia(DESKTOP_QUERY);
+};
+
+const getSnapshot = () => getMediaQueryList()?.matches ?? false;
+
+const getServerSnapshot = () => false;
+
+const subscribe = (onStoreChange: () => void) => {
+  const mediaQueryList = getMediaQueryList();
+  if (!mediaQueryList) return () => {};
+
+  mediaQueryList.addEventListener("change", onStoreChange);
+  return () => mediaQueryList.removeEventListener("change", onStoreChange);
+};
+
+export function useIsDesktop() {
+  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
+}
diff --git a/v2/src/store/atlas.ts b/v2/src/store/atlas.ts
index 56462baf71bc6b746613f2e0a0236ce4656625f9..669ad5e22957e56e00cccea58d87ad8b77fbe555
--- a/v2/src/store/atlas.ts
+++ b/v2/src/store/atlas.ts
@@ -8,9 +8,9 @@
   is3DEnabled: boolean;
 };
 
-export type AtlasAction =
-  | { type: "selectProvince"; provinceId: string | null }
-  | { type: "selectPlace"; provinceId: string; cityId: string | null }
+export type AtlasAction =
+  | { type: "selectProvince"; provinceId: string | null; enable3D?: boolean }
+  | { type: "selectPlace"; provinceId: string; cityId: string | null; enable3D?: boolean }
   | { type: "toggle3D" }
   | { type: "reset" };
 
@@ -22,15 +22,20 @@
 
 export const atlasReducer = (state: AtlasState, action: AtlasAction): AtlasState => {
   switch (action.type) {
-    case "selectProvince":
-      return {
-        ...state,
-        selectedProvinceId: action.provinceId,
-        selectedCityId: null,
-        is3DEnabled: Boolean(action.provinceId)
-      };
-    case "selectPlace":
-      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
+    case "selectProvince":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: null,
+        is3DEnabled: Boolean(action.provinceId) && (action.enable3D ?? true)
+      };
+    case "selectPlace":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: action.cityId,
+        is3DEnabled: action.enable3D ?? true
+      };
     case "toggle3D":
       return { ...state, is3DEnabled: !state.is3DEnabled };
     case "reset":
@@ -72,8 +77,10 @@
     ...state,
     province,
     city,
-    selectProvince: (provinceId: string | null) => dispatch({ type: "selectProvince", provinceId }),
-    selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
+    selectProvince: (provinceId: string | null, enable3D = true) =>
+      dispatch({ type: "selectProvince", provinceId, enable3D }),
+    selectPlace: (provinceId: string, cityId: string | null, enable3D = true) =>
+      dispatch({ type: "selectPlace", provinceId, cityId, enable3D }),
     selectCity: (cityId: string | null) =>
       state.selectedProvinceId
         ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"Cesium|Map3D|import\\(\" build\\client\\assets\\MapPage-DpaBM0zj.js" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"Cesium|import\\(\" build\\client\\assets\\Map3D-CshjVayJ.js" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"Cesium-CsldJg6P|Map3D-CshjVayJ|MapPage-DpaBM0zj\" build\\client\\map\\index.html build\\client\\assets\\manifest-57451698.js" in C:\Users\h\Documents\New project 2\v2
 succeeded in 506ms:
1:const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Map3D-CshjVayJ.js","assets/chunk-BA_0og6f.js","assets/jsx-runtime-CnbWJCR4.js","assets/atlas-CDcbDXJf.js","assets/cityRoutes-woNkNDLp.js","assets/Map3D-B9DDZdqH.css"])))=>i.map(i=>d[i]);
2:import{r as e}from"./chunk-BA_0og6f.js";import{A as t,M as n,O as r,i,j as a,t as o}from"./jsx-runtime-CnbWJCR4.js";import{n as s}from"./language-D_sidw9C.js";import{c,i as l,o as u}from"./atlas-CDcbDXJf.js";import{t as d}from"./clsx-H-aRJLpe.js";import{a as f,i as p,n as m,r as h}from"./provinceColors-Cv7IoNn8.js";import{n as g,r as _}from"./cityRoutes-woNkNDLp.js";var v=e(n(),1),y=`(min-width: 768px)`,b=()=>typeof window>`u`||typeof window.matchMedia!=`function`?null:window.matchMedia(y),x=()=>b()?.matches??!1,S=()=>!1,C=e=>{let t=b();return t?(t.addEventListener(`change`,e),()=>t.removeEventListener(`change`,e)):()=>{}};function w(){return(0,v.useSyncExternalStore)(C,x,S)}var T=o(),E=new Map(u.map(e=>[e.id,e])),D=`transform 700ms cubic-bezier(0.4, 0, 0.2, 1)`,O=`fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease`;function k({shape:e,active:t,focused:n,label:r,onSelect:i}){let a=n&&!t,o=m[e.id]??`#e1e8df`,s=n?t?`#70b7a8`:`${o}cc`:o,c=n?t?`rgba(23,112,97,1)`:`rgba(24,32,29,0.25)`:`rgba(78,91,85,0.72)`,l=t?2.4:.85;return(0,T.jsxs)(`g`,{tabIndex:a?-1:0,role:`button`,"aria-pressed":t,"aria-label":r,onClick:e=>{e.stopPropagation(),i()},onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),i())},className:d(`cursor-pointer outline-none transition-opacity duration-300 focus-visible:[&>path]:fill-jade-soft focus-visible:[&>path]:stroke-jade focus-visible:[&>path]:[stroke-width:2.8]`,a&&`opacity-90`),style:{pointerEvents:`all`},children:[(0,T.jsx)(`title`,{children:r}),e.paths.map((e,t)=>(0,T.jsx)(`path`,{d:e,fill:s,stroke:c,strokeWidth:l,strokeLinejoin:`round`,vectorEffect:`non-scaling-stroke`,style:{transition:O}},t))]})}function A({enable3D:e}){let{shapes:t,error:n}=h(),{lang:r}=s(),{selectedProvinceId:i,selectPlace:a,selectProvince:o}=l(),c=(0,v.useMemo)(()=>t?f(t):null,[t]),u=(0,v.useMemo)(()=>{if(!t||!c||!i)return`translate(0%, 0%) scale(1)`;let e=t[i];if(!e)return`translate(0%, 0%) scale(1)`;let n=p(e,c);return`translate(${((n.scale-1)*c.x+n.tx)/c.width*100}%, ${((n.scale-1)*c.y+n.ty)/c.height*100}%) scale(${n.scale})`},[t,c,i]);if(n)return(0,T.jsx)(`div`,{className:`absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm font-semibold text-ink/70`,children:r===`zh`?`地图轮廓加载失败，刷新重试。`:`Map outline failed to load. Refresh to retry.`});if(!t||!c)return null;let d=!!i,m=`${c.x} ${c.y} ${c.width} ${c.height}`,g=Object.values(t).sort((e,t)=>e.id===i?1:t.id===i?-1:0);return(0,T.jsx)(`div`,{className:`absolute inset-0 z-10`,style:{transform:u,transformOrigin:`0 0`,transition:D},children:(0,T.jsx)(`svg`,{viewBox:m,preserveAspectRatio:`none`,className:`absolute inset-0 h-full w-full`,role:`group`,"aria-label":`China provinces`,children:g.map(t=>{let n=t.id===i,s=E.get(t.id);return(0,T.jsx)(k,{shape:t,active:n,focused:d,label:s?r===`zh`?s.zh:s.en:t.name,onSelect:()=>n?o(null):a(t.id,null,e)},t.id)})})})}var j=new Map(u.map(e=>[e.id,e])),M=`left 700ms cubic-bezier(0.4, 0, 0.2, 1), top 700ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease, font-size 400ms ease`,N={textShadow:`-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 0 4px rgba(255,255,255,0.85)`};function P(){let{shapes:e}=h(),{lang:t}=s(),{selectedProvinceId:n}=l(),r=(0,v.useMemo)(()=>e?f(e):null,[e]),i=(0,v.useMemo)(()=>{if(!e||!r||!n)return{tx:0,ty:0,scale:1};let t=e[n];return t?p(t,r):{tx:0,ty:0,scale:1}},[e,r,n]);if(!e||!r)return null;let a=!!n;return(0,T.jsx)(`div`,{className:`pointer-events-none absolute inset-0 z-20`,children:Object.values(e).map(e=>{if(e.id===`hong-kong`||e.id===`macau`)return null;let o=(e.bounds.left+e.bounds.right)/2,s=-(e.bounds.top+e.bounds.bottom)/2,c=o*i.scale+i.tx,l=s*i.scale+i.ty,u=(c-r.x)/r.width*100,f=(l-r.y)/r.height*100,p=e.id===n,m=a&&!p,h=j.get(e.id),g=h?t===`zh`?h.zh:h.en:e.name,_=e.id===`hong-kong`||e.id===`macau`;return(0,T.jsx)(`span`,{className:d(`absolute hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-bold tracking-tight leading-none sm:block`,p&&`rounded-full bg-jade px-2 py-1 text-sm text-white shadow-lg`,!p&&!m&&!_&&`text-[10px] text-ink/85`,!p&&!m&&_&&`text-[8px] text-ink/85`,m&&`opacity-0`),style:{left:`${u}%`,top:`${f}%`,transition:M,...p?{}:N},children:g},e.id)})})}function F({enable3D:e,showDesktop3DNotice:t}){let{selectedProvinceId:n,province:i,selectPlace:a,is3DEnabled:o}=l(),{lang:u,t:d}=s(),f=_(),p=r();if(!n||!i||o)return null;let m=c[n]??[],h=i.cities.length>0,v=m.length>0,y=t=>{f(t);let n=g(t);if(n){p(`/city/${n}`);return}a(i.id,t,e)};return(0,T.jsxs)(`aside`,{className:`absolute bottom-3 left-3 z-20 flex max-h-[78%] w-[300px] flex-col gap-3 overflow-auto rounded-xl border border-line bg-white/95 p-4 shadow-xl backdrop-blur animate-[fadeUp_400ms_ease-out]`,"aria-label":u===`zh`?i.zh:i.name,children:[(0,T.jsxs)(`header`,{children:[(0,T.jsx)(`span`,{className:`text-xs font-bold uppercase tracking-widest text-muted`,children:d(`currentView`)}),(0,T.jsx)(`h3`,{className:`text-xl font-bold leading-tight`,children:u===`zh`?i.zh:i.name}),(0,T.jsx)(`p`,{className:`text-xs text-muted`,children:u===`zh`?i.name:i.zh}),t&&(0,T.jsx)(`p`,{className:`mt-1 text-xs font-medium text-muted`,children:u===`zh`?`3D 视图仅在桌面端提供`:`3D scene available on desktop`})]}),h&&(0,T.jsxs)(`section`,{className:`flex flex-col gap-1`,children:[(0,T.jsx)(`h4`,{className:`text-xs font-bold uppercase tracking-widest text-muted`,children:d(`cityProfiles`)}),(0,T.jsx)(`ul`,{className:`flex flex-col gap-1`,children:i.cities.map(e=>(0,T.jsx)(`li`,{children:(0,T.jsxs)(`button`,{type:`button`,onClick:()=>y(e.id),className:`flex w-full flex-col rounded-md px-2 py-1.5 text-left transition hover:bg-paper`,children:[(0,T.jsx)(`strong`,{className:`text-sm`,children:u===`zh`?e.zh:e.name}),(0,T.jsx)(`span`,{className:`text-xs text-muted`,children:u===`zh`&&e.museumZh||e.museum})]})},e.id))})]}),v&&(0,T.jsxs)(`section`,{className:`flex flex-col gap-1`,children:[(0,T.jsx)(`h4`,{className:`text-xs font-bold uppercase tracking-widest text-muted`,children:d(`famousAttractions`)}),(0,T.jsx)(`ul`,{className:`flex flex-wrap gap-1`,children:m.map(e=>(0,T.jsx)(`li`,{className:`rounded-full bg-paper px-2 py-1 text-xs text-muted`,children:u===`zh`?e.zh:e.en},e.zh))})]}),!h&&!v&&(0,T.jsx)(`p`,{className:`text-sm text-muted`,children:d(`provinceDataPending`)})]})}var I=class extends v.Component{state={hasError:!1};static getDerivedStateFromError(){return{hasError:!0}}componentDidUpdate(e){this.state.hasError&&e.resetKey!==this.props.resetKey&&this.setState({hasError:!1})}componentDidCatch(e,t){console.error(`3D map overlay failed to load`,e,t)}render(){return this.state.hasError?this.props.fallback:this.props.children}},L=(0,v.lazy)(()=>a(()=>import(`./Map3D-CshjVayJ.js`),__vite__mapDeps([0,1,2,3,4,5])));function R(){let{selectedProvinceId:e,province:t,is3DEnabled:n,reset:r}=l(),{lang:i}=s();return!w()||!e||!t||!n?null:(0,T.jsxs)(`section`,{"data-province-3d-overlay":`true`,className:`absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm`,children:[(0,T.jsxs)(`header`,{className:`flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4`,children:[(0,T.jsxs)(`div`,{className:`min-w-0`,children:[(0,T.jsx)(`p`,{className:`text-xs font-bold uppercase tracking-widest text-muted`,children:i===`zh`?`天地图 3D`:`Tianditu 3D`}),(0,T.jsx)(`h3`,{className:`truncate text-base font-bold leading-tight sm:text-lg`,children:i===`zh`?t.zh:t.name})]}),(0,T.jsxs)(`div`,{className:`flex shrink-0 items-center gap-2`,children:[(0,T.jsx)(`button`,{type:`button`,onClick:r,className:`rounded-full bg-ink px-3 py-2 text-xs font-bold uppercase tracking-normal text-white hover:bg-ink/90 sm:px-4 sm:tracking-wider`,children:i===`zh`?`返回 2D`:`Back to 2D`}),(0,T.jsx)(`button`,{type:`button`,"aria-label":i===`zh`?`关闭 3D 地图`:`Close 3D map`,onClick:r,className:`grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-lg font-bold leading-none text-ink shadow-sm hover:border-jade hover:text-jade`,children:`×`})]})]}),(0,T.jsx)(`div`,{className:`min-h-0 flex-1`,children:(0,T.jsx)(I,{resetKey:e,fallback:(0,T.jsx)(`div`,{role:`alert`,className:`grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white`,children:(0,T.jsxs)(`div`,{className:`max-w-sm space-y-4`,children:[(0,T.jsx)(`p`,{className:`text-sm font-semibold leading-6 text-white/85`,children:i===`zh`?`3D 视图加载失败，点击重置返回二维地图。`:`The 3D view couldn't load. Click reset to go back to the 2D map.`}),(0,T.jsx)(`button`,{type:`button`,onClick:r,className:`rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90`,children:i===`zh`?`重置`:`Reset`})]})}),children:(0,T.jsx)(v.Suspense,{fallback:(0,T.jsx)(`div`,{className:`grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80`,children:i===`zh`?`正在加载天地图...`:`Loading Tianditu...`}),children:(0,T.jsx)(L,{province:t,provinceId:e,lang:i})})})})]})}var z=new Set([`hong-kong`,`macau`]),B={"hong-kong":{desktopX:2.8,desktopY:-1.3,mobileX:7.2,mobileY:-3.2},macau:{desktopX:-2.6,desktopY:1.4,mobileX:-7.2,mobileY:2.4}};function V({enable3D:e}){let{lang:t}=s(),{selectedProvinceId:n,selectPlace:r}=l(),i=u.filter(e=>z.has(e.id));return n?null:(0,T.jsx)(`div`,{className:`pointer-events-none absolute inset-0 z-[25]`,children:i.map(n=>{let i=B[n.id],a={"--marker-left-desktop":`${n.x+(i?.desktopX??0)}%`,"--marker-top-desktop":`${n.y+(i?.desktopY??0)}%`,"--marker-left-mobile":`${n.x+(i?.mobileX??0)}%`,"--marker-top-mobile":`${n.y+(i?.mobileY??0)}%`};return(0,T.jsxs)(`button`,{type:`button`,"aria-label":t===`zh`?n.zh:n.en,onClick:()=>r(n.id,null,e),className:`special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2`,style:a,children:[(0,T.jsx)(`span`,{className:`h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]`}),(0,T.jsx)(`span`,{className:`hidden sm:inline`,children:t===`zh`?n.zh:n.en})]},n.id)})})}var H=new Set([`hong-kong`,`macau`]);function U({enable3D:e}){let{lang:t}=s(),{selectedProvinceId:n,selectPlace:r}=l();return n?null:(0,T.jsx)(`div`,{className:`absolute inset-0 z-[24]`,children:u.filter(e=>!H.has(e.id)).map(n=>(0,T.jsx)(`button`,{type:`button`,tabIndex:-1,"data-province-hit":n.id,"aria-label":t===`zh`?n.zh:n.en,onClick:()=>r(n.id,null,e),className:`absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0`,style:{left:`${n.x}%`,top:`${n.y}%`,width:`${n.w}%`,height:`${n.h}%`}},n.id))})}function W(){let{lang:e}=s(),t=w(),{selectedProvinceId:n,province:r,is3DEnabled:i,reset:a,toggle3D:o}=l(),c=!!n,u=r?e===`zh`?r.zh:r.name:``;return(0,v.useEffect)(()=>{if(!c)return;let e=e=>{e.key===`Escape`&&a()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[c,a]),(0,T.jsxs)(`section`,{"aria-label":`China interactive map`,"data-selected-province":n??void 0,"data-province-present":r?`true`:`false`,"data-3d-enabled":i?`true`:`false`,className:`flex min-w-0 flex-col gap-2`,children:[c&&r&&(0,T.jsx)(`header`,{className:`flex items-end justify-between`,children:(0,T.jsx)(`h2`,{className:`text-xl font-bold leading-tight`,children:u})}),(0,T.jsxs)(`div`,{"aria-live":`polite`,className:`china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm ${c?`min-h-[420px]`:`min-h-[300px] sm:min-h-[260px]`}`,style:{aspectRatio:`9463 / 6675`},children:[(0,T.jsxs)(`div`,{className:`absolute inset-0`,children:[(0,T.jsx)(A,{enable3D:t}),(0,T.jsx)(P,{}),(0,T.jsx)(U,{enable3D:t}),(0,T.jsx)(V,{enable3D:t}),(0,T.jsx)(F,{enable3D:t,showDesktop3DNotice:!t}),(0,T.jsx)(R,{})]}),c&&!i&&(0,T.jsxs)(`div`,{className:`absolute right-3 top-3 z-30 flex flex-wrap justify-end gap-2`,children:[t&&(0,T.jsx)(`button`,{type:`button`,onClick:o,className:`rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade/90`,children:e===`zh`?`查看 3D`:`View in 3D`}),(0,T.jsx)(`button`,{type:`button`,onClick:a,className:`rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90`,children:e===`zh`?`重置`:`Reset`})]})]})]})}var G=t(function(){let{lang:e}=s(),t=e===`zh`,{reset:n}=l();return(0,v.useEffect)(()=>()=>{n()},[n]),(0,T.jsxs)(`main`,{id:`top`,className:`mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:py-10`,children:[(0,T.jsxs)(`header`,{className:`flex flex-col gap-2`,children:[(0,T.jsx)(i,{to:`/`,className:`text-xs font-bold uppercase tracking-widest text-muted hover:text-jade`,children:t?`← 返回首页`:`← Home`}),(0,T.jsx)(`h1`,{className:`text-3xl font-bold leading-tight`,children:t?`地标地图`:`Landmark map`}),(0,T.jsx)(`p`,{className:`max-w-2xl text-sm leading-relaxed text-muted`,children:t?`点击省份进入 3D 实景地图；港澳使用独立标记，3D 内包含城市和景区标注。`:`Click a province to open the 3D scene; Hong Kong and Macau use separate markers, with city and attraction labels inside 3D.`})]}),(0,T.jsx)(W,{})]})});export{G as default};

 succeeded in 505ms:
1:const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Cesium-CsldJg6P.js","assets/chunk-BA_0og6f.js"])))=>i.map(i=>d[i]);
2:import{r as e}from"./chunk-BA_0og6f.js";import{M as t,O as n,j as r,t as i}from"./jsx-runtime-CnbWJCR4.js";import{a,c as o,i as s,o as c,s as l}from"./atlas-CDcbDXJf.js";import{n as u,r as d,t as f}from"./cityRoutes-woNkNDLp.js";var p=e(t(),1),m=i(),h={west:73,east:135,south:18,north:54},g=[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`],_=Array.from({length:18},(e,t)=>String(t+1)),v=`city:`,y=`city-route:`,b={id:`china`,en:`China`,zh:`中国`,x:55,y:55,w:42,h:34},x=[{lon:-.9,lat:.55},{lon:.95,lat:.45},{lon:-.45,lat:-.72},{lon:.65,lat:-.62},{lon:0,lat:.95}];function S(e,t){return{lon:h.west+e/100*(h.east-h.west),lat:h.north-t/100*(h.north-h.south)}}function C(e){let t=S(e.x,e.y),n=Math.max(1.2,e.w/100*(h.east-h.west)*.7),r=Math.max(1,e.h/100*(h.north-h.south)*.7);return{west:Math.max(h.west,t.lon-n),south:Math.max(h.south,t.lat-r),east:Math.min(h.east,t.lon+n),north:Math.min(h.north,t.lat+r)}}function w(e){return c.find(t=>t.id===e)??b}function T(e,t){return t===`zh`?e.zh:e.name}function E(e,t,n){return n===`zh`?e:t}function D(e,t,n){let r=a[e];if(r)return S(r.x,r.y);let i=S(t.x,t.y),o=Math.max(.35,t.w/100*(h.east-h.west)*.18),s=Math.max(.28,t.h/100*(h.north-h.south)*.18),c=Math.PI*2*n/Math.max(3,t.w);return{lon:i.lon+Math.cos(c)*o,lat:i.lat+Math.sin(c)*s}}function O(e,t){let n=S(e.x,e.y),r=x[t%x.length],i=Math.max(.45,e.w/100*(h.east-h.west)*.2),a=Math.max(.36,e.h/100*(h.north-h.south)*.2);return{lon:n.lon+r.lon*i,lat:n.lat+r.lat*a}}function k(e,t,n,r){return new e.WebMapTileServiceImageryProvider({url:`https://t{s}.tianditu.gov.cn/${n}_w/wmts?tk=${t}`,layer:n,style:`default`,format:`tiles`,tileMatrixSetID:`w`,subdomains:g,tileMatrixLabels:_,maximumLevel:18,credit:new e.Credit(r)})}function A(e,t,n=4,r=6,i=12){return`https://t0.tianditu.gov.cn/${t}_w/wmts?${new URLSearchParams({SERVICE:`WMTS`,REQUEST:`GetTile`,VERSION:`1.0.0`,LAYER:t,STYLE:`default`,TILEMATRIXSET:`w`,FORMAT:`tiles`,TILEMATRIX:String(n),TILEROW:String(r),TILECOL:String(i),tk:e}).toString()}`}function j(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(),r.onerror=()=>n(Error(`Tianditu tile failed to load`)),r.decoding=`async`,r.src=e})}function M(e,t,n){t.imageryLayers.removeAll();let r=t.imageryLayers.addImageryProvider(k(e,n,`img`,`Tianditu imagery`));r.saturation=1.12,r.contrast=1.08,r.brightness=.96;let i=t.imageryLayers.addImageryProvider(k(e,n,`ter`,`Tianditu terrain relief`));i.alpha=.28;let a=t.imageryLayers.addImageryProvider(k(e,n,`cia`,`Tianditu labels`));a.alpha=.92}function N(e,t,n,r){t.entities.add({id:`selected-province-frame`,name:r,rectangle:{coordinates:e.Rectangle.fromDegrees(n.west,n.south,n.east,n.north),material:e.Color.fromCssColorString(`#53d1bd`).withAlpha(.12),outline:!0,outlineColor:e.Color.fromCssColorString(`#55f2d9`)}})}function P(e,t,n,r,i,a,o){t.entities.add({id:o,name:r,position:e.Cartesian3.fromDegrees(n.lon,n.lat,16e3),point:{pixelSize:a,color:e.Color.fromCssColorString(i),outlineColor:e.Color.WHITE,outlineWidth:2,disableDepthTestDistance:1/0},label:{text:r,font:`600 14px Microsoft YaHei, system-ui, sans-serif`,fillColor:e.Color.WHITE,outlineColor:e.Color.fromCssColorString(`#101815`),outlineWidth:4,style:e.LabelStyle.FILL_AND_OUTLINE,verticalOrigin:e.VerticalOrigin.BOTTOM,pixelOffset:new e.Cartesian2(0,-12),disableDepthTestDistance:1/0}})}function F(e,t,n,r,i,a){P(e,t,S(i.x,i.y),T(n,a),`#19c7a6`,14),n.cities.forEach((n,r)=>{P(e,t,D(n.id,i,r+1),E(n.zh,n.name,a),`#3b82f6`,11,`${v}${n.id}`)}),(o[r]??[]).forEach((n,o)=>{let s=O(i,o),c=f(r,n.en);P(e,t,s,E(n.zh,n.en,a),`#f59e0b`,9,c?`${y}${c}`:void 0)})}function I(e,t,n){let r=n.east-n.west,i=n.north-n.south,a=(n.west+n.east)/2,o=(n.south+n.north)/2,s=Math.max(38e4,Math.max(r,i)*115e3);t.camera.flyTo({destination:e.Cartesian3.fromDegrees(a,o-i*.35,s),orientation:{heading:e.Math.toRadians(0),pitch:e.Math.toRadians(-58),roll:0},duration:.8})}function L(e,t){return l.find(t=>t.id===e)??t}function R(e){if(!e||typeof e!=`object`||!(`id`in e))return null;let t=e;if(typeof t.id==`string`)return e;let n=t.id;return!n||typeof n!=`object`||!(`id`in n)?null:n}function z(e){return typeof e.id==`string`&&e.id.startsWith(v)?e.id.slice(5):null}function B(e){return typeof e.id==`string`&&e.id.startsWith(y)?e.id.slice(11):null}function V({province:e,provinceId:t,lang:i}){let a=(0,p.useRef)(null),o=(0,p.useRef)(null),c=(0,p.useRef)(()=>void 0),l=(0,p.useRef)(()=>void 0),f=n(),{selectPlace:h}=s(),g=d(),_=(void 0)?.trim()??``,[v,y]=(0,p.useState)(_?`loading`:`missing-key`),b=(0,p.useMemo)(()=>L(t,e),[e,t]);return(0,p.useEffect)(()=>{c.current=e=>{g(e);let n=u(e);if(n){f(`/city/${n}`);return}h(t,e)},l.current=e=>{f(`/city/${e}`)}},[f,t,g,h]),(0,p.useEffect)(()=>{let e=a.current;if(!e||!_)return;let n=!1,s=null,u=document.createElement(`div`);u.className=`hidden`,e.appendChild(u);async function d(){try{y(`loading`),await j(A(_,`img`));let a=await r(()=>import(`./Cesium-CsldJg6P.js`),__vite__mapDeps([0,1]));if(n||!e||!u)return;let d={animation:!1,baseLayer:!1,baseLayerPicker:!1,fullscreenButton:!1,geocoder:!1,homeButton:!1,infoBox:!1,navigationHelpButton:!1,sceneModePicker:!1,selectionIndicator:!1,timeline:!1,vrButton:!1,showRenderLoopErrors:!1,creditContainer:u,sceneMode:a.SceneMode.SCENE3D,requestRenderMode:!0,maximumRenderTimeChange:1/0},f=new a.Viewer(e,d);o.current=f,f.scene.globe.baseColor=a.Color.fromCssColorString(`#061410`),f.scene.globe.depthTestAgainstTerrain=!1,f.scene.skyAtmosphere&&(f.scene.skyAtmosphere.show=!0),f.scene.fog.enabled=!0,M(a,f,_);let p=w(t),m=C(p);N(a,f,m,T(b,i)),F(a,f,b,t,p,i),I(a,f,m),s=new a.ScreenSpaceEventHandler(f.scene.canvas),s.setInputAction(e=>{let t=R(f.scene.pick(e.position)),n=t?B(t):null;if(n){l.current(n);return}let r=t?z(t):null;r&&c.current(r)},a.ScreenSpaceEventType.LEFT_CLICK),n||y(`ready`)}catch(e){console.error(e),n||y(e instanceof Error&&e.message.includes(`Tianditu tile`)?`blocked`:`error`)}}return d(),()=>{n=!0,s&&!s.isDestroyed()&&s.destroy(),s=null,o.current&&!o.current.isDestroyed()&&o.current.destroy(),o.current=null,u?.parentNode&&u.parentNode.removeChild(u),u=null}},[i,t,b,_]),(0,m.jsxs)(`div`,{className:`relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]`,children:[(0,m.jsx)(`div`,{ref:a,className:`absolute inset-0`}),v===`loading`&&(0,m.jsx)(`div`,{className:`absolute inset-0 z-10 grid place-items-center bg-[#071512] text-sm font-semibold text-white/80`,children:i===`zh`?`正在加载天地图...`:`Loading Tianditu...`}),v===`missing-key`&&(0,m.jsx)(`div`,{className:`absolute inset-0 z-10 flex items-center justify-center bg-[#071512] px-6 text-center text-white`,children:(0,m.jsxs)(`div`,{className:`w-full max-w-md rounded-lg border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur sm:p-5`,children:[(0,m.jsx)(`h3`,{className:`text-lg font-bold`,children:i===`zh`?`需要配置天地图 tk`:`Tianditu token required`}),(0,m.jsx)(`p`,{className:`mt-2 text-sm text-white/75`,children:i===`zh`?`在 v2/.env.local 里写入下面这一行，然后重启 dev server。`:`Add this line to v2/.env.local, then restart the dev server.`}),(0,m.jsx)(`code`,{className:`mt-4 block overflow-x-auto whitespace-nowrap rounded bg-black/40 px-3 py-2 text-left text-xs text-emerald-200`,children:`VITE_TIANDITU_KEY=your_tianditu_tk_here`})]})}),v===`error`&&(0,m.jsx)(`div`,{className:`absolute inset-0 z-10 grid place-items-center bg-[#071512] px-6 text-center text-sm font-semibold text-red-100`,children:i===`zh`?`天地图加载失败，检查 tk 或网络。`:`Tianditu failed to load. Check the token or network.`}),v===`blocked`&&(0,m.jsx)(`div`,{className:`absolute inset-0 z-10 flex items-center justify-center bg-[#071512] px-6 text-center text-white`,children:(0,m.jsxs)(`div`,{className:`w-full max-w-lg rounded-lg border border-red-200/25 bg-red-950/55 p-4 shadow-2xl backdrop-blur sm:p-5`,children:[(0,m.jsx)(`h3`,{className:`text-lg font-bold`,children:i===`zh`?`天地图瓦片被拦截`:`Tianditu tiles are blocked`}),(0,m.jsx)(`p`,{className:`mt-2 text-sm leading-relaxed text-red-50/85`,children:i===`zh`?`当前 key 返回的不是地图图片。去天地图控制台检查 key 权限、域名白名单是否包含 127.0.0.1/localhost，以及服务类型是否允许浏览器端调用。`:`The current key is not returning map images. Check key permissions, domain whitelist for 127.0.0.1/localhost, and browser-side service access in the Tianditu console.`})]})}),v===`ready`&&(0,m.jsx)(`div`,{className:`pointer-events-none absolute bottom-3 left-3 right-3 z-10 rounded-md border border-white/15 bg-black/45 px-3 py-2 text-xs font-semibold leading-snug text-white/85 backdrop-blur sm:right-auto`,children:i===`zh`?`天地图影像 · 地形晕渲 · 中文注记 · 城市/景区标注`:`Tianditu imagery · terrain relief · labels · city and attraction markers`})]})}export{V as default};

 succeeded in 740ms:
build\client\assets\manifest-57451698.js:1:window.__reactRouterManifest={"entry":{"module":"/assets/entry.client-CQ10Nt2o.js","imports":["/assets/chunk-BA_0og6f.js","/assets/jsx-runtime-CnbWJCR4.js"],"css":[]},"routes":{"root":{"id":"root","path":"","hasAction":false,"hasLoader":false,"hasClientAction":false,"hasClientLoader":false,"hasClientMiddleware":false,"hasDefaultExport":true,"hasErrorBoundary":false,"module":"/assets/root-Ba0amjpS.js","imports":["/assets/chunk-BA_0og6f.js","/assets/jsx-runtime-CnbWJCR4.js","/assets/clsx-H-aRJLpe.js","/assets/atlas-CDcbDXJf.js","/assets/language-D_sidw9C.js"],"css":["/assets/root-C7aYlZEt.css"]},"pages/HomePage":{"id":"pages/HomePage","parentId":"root","index":true,"hasAction":false,"hasLoader":false,"hasClientAction":false,"hasClientLoader":false,"hasClientMiddleware":false,"hasDefaultExport":true,"hasErrorBoundary":false,"module":"/assets/HomePage-BnpsLCOu.js","imports":["/assets/chunk-BA_0og6f.js","/assets/jsx-runtime-CnbWJCR4.js","/assets/provinceColors-Cv7IoNn8.js","/assets/unsplash-B0y9OJKy.js","/assets/language-D_sidw9C.js"],"css":[]},"pages/MapPage":{"id":"pages/MapPage","parentId":"root","path":"map","hasAction":false,"hasLoader":false,"hasClientAction":false,"hasClientLoader":false,"hasClientMiddleware":false,"hasDefaultExport":true,"hasErrorBoundary":false,"module":"/assets/MapPage-DpaBM0zj.js","imports":["/assets/chunk-BA_0og6f.js","/assets/jsx-runtime-CnbWJCR4.js","/assets/clsx-H-aRJLpe.js","/assets/provinceColors-Cv7IoNn8.js","/assets/atlas-CDcbDXJf.js","/assets/cityRoutes-woNkNDLp.js","/assets/language-D_sidw9C.js"],"css":[]},"pages/GuidePage":{"id":"pages/GuidePage","parentId":"root","path":"guide/:topic","hasAction":false,"hasLoader":false,"hasClientAction":false,"hasClientLoader":false,"hasClientMiddleware":false,"hasDefaultExport":true,"hasErrorBoundary":false,"module":"/assets/GuidePage-CZq-6qwa.js","imports":["/assets/chunk-BA_0og6f.js","/assets/jsx-runtime-CnbWJCR4.js","/assets/clsx-H-aRJLpe.js","/assets/SourcesNote-Dc56Qloe.js","/assets/language-D_sidw9C.js","/assets/practical-other-Bpl292H6.js"],"css":[]},"pages/CityPage":{"id":"pages/CityPage","parentId":"root","path":"city/:cityId","hasAction":false,"hasLoader":false,"hasClientAction":false,"hasClientLoader":false,"hasClientMiddleware":false,"hasDefaultExport":true,"hasErrorBoundary":false,"module":"/assets/CityPage-D2VQWelf.js","imports":["/assets/chunk-BA_0og6f.js","/assets/jsx-runtime-CnbWJCR4.js","/assets/clsx-H-aRJLpe.js","/assets/SourcesNote-Dc56Qloe.js","/assets/unsplash-B0y9OJKy.js","/assets/language-D_sidw9C.js","/assets/practical-other-Bpl292H6.js"],"css":[]},"pages/SharePage":{"id":"pages/SharePage","parentId":"root","path":"share","hasAction":false,"hasLoader":false,"hasClientAction":false,"hasClientLoader":false,"hasClientMiddleware":false,"hasDefaultExport":true,"hasErrorBoundary":false,"module":"/assets/SharePage-SOKeWOZv.js","imports":["/assets/jsx-runtime-CnbWJCR4.js","/assets/phase2-preview-DcPyXPqD.js","/assets/language-D_sidw9C.js","/assets/chunk-BA_0og6f.js"],"css":[]},"pages/AskPage":{"id":"pages/AskPage","parentId":"root","path":"ask","hasAction":false,"hasLoader":false,"hasClientAction":false,"hasClientLoader":false,"hasClientMiddleware":false,"hasDefaultExport":true,"hasErrorBoundary":false,"module":"/assets/AskPage-D4TBpFC4.js","imports":["/assets/jsx-runtime-CnbWJCR4.js","/assets/clsx-H-aRJLpe.js","/assets/phase2-preview-DcPyXPqD.js","/assets/language-D_sidw9C.js","/assets/chunk-BA_0og6f.js"],"css":[]},"pages/SourcesPage":{"id":"pages/SourcesPage","parentId":"root","path":"sources","hasAction":false,"hasLoader":false,"hasClientAction":false,"hasClientLoader":false,"hasClientMiddleware":false,"hasDefaultExport":true,"hasErrorBoundary":false,"module":"/assets/SourcesPage-9HAp8EoC.js","imports":["/assets/jsx-runtime-CnbWJCR4.js","/assets/language-D_sidw9C.js","/assets/chunk-BA_0og6f.js"],"css":[]},"catch-all":{"id":"catch-all","parentId":"root","path":"*","hasAction":false,"hasLoader":false,"hasClientAction":false,"hasClientLoader":false,"hasClientMiddleware":false,"hasDefaultExport":true,"hasErrorBoundary":false,"module":"/assets/HomePage-BnpsLCOu.js","imports":["/assets/chunk-BA_0og6f.js","/assets/jsx-runtime-CnbWJCR4.js","/assets/provinceColors-Cv7IoNn8.js","/assets/unsplash-B0y9OJKy.js","/assets/language-D_sidw9C.js"],"css":[]}},"url":"/assets/manifest-57451698.js","version":"57451698"};
build\client\map\index.html:1:<!DOCTYPE html><html lang="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>旅行中国</title><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=&#x27;http://www.w3.org/2000/svg&#x27; viewBox=&#x27;0 0 64 64&#x27;%3E%3Crect width=&#x27;64&#x27; height=&#x27;64&#x27; rx=&#x27;10&#x27; fill=&#x27;%2318201d&#x27;/%3E%3Ctext x=&#x27;32&#x27; y=&#x27;42&#x27; text-anchor=&#x27;middle&#x27; font-size=&#x27;34&#x27; fill=&#x27;white&#x27;%3E%E6%97%85%3C/text%3E%3C/svg%3E"/><link rel="modulepreload" href="/assets/manifest-57451698.js"/><link rel="modulepreload" href="/assets/entry.client-CQ10Nt2o.js"/><link rel="modulepreload" href="/assets/chunk-BA_0og6f.js"/><link rel="modulepreload" href="/assets/jsx-runtime-CnbWJCR4.js"/><link rel="modulepreload" href="/assets/root-Ba0amjpS.js"/><link rel="modulepreload" href="/assets/clsx-H-aRJLpe.js"/><link rel="modulepreload" href="/assets/atlas-CDcbDXJf.js"/><link rel="modulepreload" href="/assets/language-D_sidw9C.js"/><link rel="modulepreload" href="/assets/MapPage-DpaBM0zj.js"/><link rel="modulepreload" href="/assets/provinceColors-Cv7IoNn8.js"/><link rel="modulepreload" href="/assets/cityRoutes-woNkNDLp.js"/><link rel="stylesheet" href="/assets/root-C7aYlZEt.css"/></head><body><header class="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur"><a class="flex min-w-0 shrink items-center gap-2" href="/" data-discover="true"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span><strong class="truncate text-xl font-bold leading-none">旅行中国</strong></a><div role="group" aria-label="Switch language" class="inline-flex shrink-0 overflow-hidden rounded-full border border-line"><button type="button" aria-pressed="true" aria-label="Switch to English" class="px-2.5 py-1 text-xs font-bold uppercase tracking-normal transition sm:px-3 sm:tracking-widest bg-ink text-white">EN</button><button type="button" aria-pressed="false" aria-label="Switch to Chinese" class="px-2.5 py-1 text-xs font-bold uppercase tracking-normal transition sm:px-3 sm:tracking-widest bg-white text-muted hover:text-ink">中文</button></div></header><main id="top" class="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:py-10"><header class="flex flex-col gap-2"><a class="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade" href="/" data-discover="true">← Home</a><h1 class="text-3xl font-bold leading-tight">Landmark map</h1><p class="max-w-2xl text-sm leading-relaxed text-muted">Click a province to open the 3D scene; Hong Kong and Macau use separate markers, with city and attraction labels inside 3D.</p></header><section aria-label="China interactive map" data-province-present="false" data-3d-enabled="false" class="flex min-w-0 flex-col gap-2"><div aria-live="polite" class="china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm min-h-[300px] sm:min-h-[260px]" style="aspect-ratio:9463 / 6675"><div class="absolute inset-0"><div class="absolute inset-0 z-[24]"><button type="button" tabindex="-1" data-province-hit="xinjiang" aria-label="Xinjiang" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:26%;top:36%;width:24%;height:26%"></button><button type="button" tabindex="-1" data-province-hit="tibet" aria-label="Tibet" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:25%;top:61%;width:27%;height:22%"></button><button type="button" tabindex="-1" data-province-hit="qinghai" aria-label="Qinghai" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:41%;top:56%;width:15%;height:15%"></button><button type="button" tabindex="-1" data-province-hit="gansu" aria-label="Gansu" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:49%;top:46%;width:13%;height:14%"></button><button type="button" tabindex="-1" data-province-hit="ningxia" aria-label="Ningxia" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:55%;top:43%;width:5%;height:7%"></button><button type="button" tabindex="-1" data-province-hit="inner-mongolia" aria-label="Inner Mongolia" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:63%;top:32%;width:28%;height:18%"></button><button type="button" tabindex="-1" data-province-hit="heilongjiang" aria-label="Heilongjiang" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:78%;top:20%;width:18%;height:15%"></button><button type="button" tabindex="-1" data-province-hit="jilin" aria-label="Jilin" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:78%;top:32%;width:9%;height:8%"></button><button type="button" tabindex="-1" data-province-hit="liaoning" aria-label="Liaoning" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:75%;top:39%;width:9%;height:8%"></button><button type="button" tabindex="-1" data-province-hit="beijing" aria-label="Beijing" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:68%;top:42%;width:4%;height:4%"></button><button type="button" tabindex="-1" data-province-hit="tianjin" aria-label="Tianjin" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:70%;top:44%;width:4%;height:4%"></button><button type="button" tabindex="-1" data-province-hit="hebei" aria-label="Hebei" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:67%;top:46%;width:9%;height:9%"></button><button type="button" tabindex="-1" data-province-hit="shanxi" aria-label="Shanxi" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:63%;top:47%;width:7%;height:10%"></button><button type="button" tabindex="-1" data-province-hit="shaanxi" aria-label="Shaanxi" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:59%;top:51%;width:8%;height:12%"></button><button type="button" tabindex="-1" data-province-hit="henan" aria-label="Henan" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:65%;top:54%;width:9%;height:9%"></button><button type="button" tabindex="-1" data-province-hit="shandong" aria-label="Shandong" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:72%;top:51%;width:9%;height:7%"></button><button type="button" tabindex="-1" data-province-hit="jiangsu" aria-label="Jiangsu" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:73%;top:57%;width:8%;height:9%"></button><button type="button" tabindex="-1" data-province-hit="anhui" aria-label="Anhui" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:69%;top:60%;width:8%;height:10%"></button><button type="button" tabindex="-1" data-province-hit="hubei" aria-label="Hubei" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:63%;top:61%;width:10%;height:9%"></button><button type="button" tabindex="-1" data-province-hit="sichuan" aria-label="Sichuan" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:53%;top:64%;width:14%;height:14%"></button><button type="button" tabindex="-1" data-province-hit="chongqing" aria-label="Chongqing" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:59%;top:65%;width:6%;height:7%"></button><button type="button" tabindex="-1" data-province-hit="hunan" aria-label="Hunan" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:64%;top:69%;width:8%;height:10%"></button><button type="button" tabindex="-1" data-province-hit="jiangxi" aria-label="Jiangxi" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:70%;top:69%;width:8%;height:10%"></button><button type="button" tabindex="-1" data-province-hit="zhejiang" aria-label="Zhejiang" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:75%;top:66%;width:7%;height:8%"></button><button type="button" tabindex="-1" data-province-hit="shanghai" aria-label="Shanghai" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:78%;top:59%;width:4%;height:4%"></button><button type="button" tabindex="-1" data-province-hit="fujian" aria-label="Fujian" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:73%;top:75%;width:8%;height:10%"></button><button type="button" tabindex="-1" data-province-hit="guizhou" aria-label="Guizhou" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:57%;top:73%;width:9%;height:9%"></button><button type="button" tabindex="-1" data-province-hit="yunnan" aria-label="Yunnan" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:50%;top:78%;width:12%;height:15%"></button><button type="button" tabindex="-1" data-province-hit="guangxi" aria-label="Guangxi" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:61%;top:79%;width:10%;height:10%"></button><button type="button" tabindex="-1" data-province-hit="guangdong" aria-label="Guangdong" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:68%;top:80%;width:12%;height:9%"></button><button type="button" tabindex="-1" data-province-hit="hainan" aria-label="Hainan" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:64%;top:91%;width:5%;height:5%"></button><button type="button" tabindex="-1" data-province-hit="taiwan" aria-label="Taiwan" class="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0" style="left:79%;top:75%;width:6%;height:10%"></button></div><div class="pointer-events-none absolute inset-0 z-[25]"><button type="button" aria-label="Hong Kong" class="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2" style="--marker-left-desktop:74.8%;--marker-top-desktop:80.7%;--marker-left-mobile:79.2%;--marker-top-mobile:78.8%"><span class="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]"></span><span class="hidden sm:inline">Hong Kong</span></button><button type="button" aria-label="Macau" class="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2" style="--marker-left-desktop:67.4%;--marker-top-desktop:83.4%;--marker-left-mobile:62.8%;--marker-top-mobile:84.4%"><span class="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]"></span><span class="hidden sm:inline">Macau</span></button></div></div></div></section></main><footer class="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between"><p>Travel China demo data only.</p><div class="flex items-center gap-4"><a class="hover:text-jade" href="/sources" data-discover="true">References</a><a href="#top" class="hover:text-jade">Back to top</a></div></footer><script>((storageKey2, restoreKey) => {
build\client\map\index.html:18:import * as route1 from "/assets/MapPage-DpaBM0zj.js";

diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index fef4713b04dfd229e932f9aeff7b99b97f616199..870a1ff5ebd3331bec22aa5f826a9a3ea479cf92
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -1,18 +1,20 @@
-import { useEffect } from "react";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import ProvinceShapeLayer from "./ProvinceShapeLayer";
-import ProvinceLabelLayer from "./ProvinceLabelLayer";
-import ProvinceInfoCard from "./ProvinceInfoCard";
+import { useEffect } from "react";
+import { useAtlas } from "../../store/atlas";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
+import ProvinceShapeLayer from "./ProvinceShapeLayer";
+import ProvinceLabelLayer from "./ProvinceLabelLayer";
+import ProvinceInfoCard from "./ProvinceInfoCard";
 import Province3DOverlay from "./Province3DOverlay";
 import SpecialRegionMarkers from "./SpecialRegionMarkers";
 import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
 
-export default function HeroMap() {
-  const { lang } = useLang();
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const focused = Boolean(selectedProvinceId);
-  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
+export default function HeroMap() {
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+  const { selectedProvinceId, province, is3DEnabled, reset, toggle3D } = useAtlas();
+  const focused = Boolean(selectedProvinceId);
+  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
 
   useEffect(() => {
     if (!focused) return;
@@ -40,26 +42,37 @@
       <div
         aria-live="polite"
         className={`china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm ${focused ? "min-h-[420px]" : "min-h-[300px] sm:min-h-[260px]"}`}
-        style={{ aspectRatio: "9463 / 6675" }}
-      >
-        <div className="absolute inset-0">
-          <ProvinceShapeLayer />
-          <ProvinceLabelLayer />
-          <ProvinceHitAreaLayer />
-          <SpecialRegionMarkers />
-          <ProvinceInfoCard />
-          <Province3DOverlay />
-        </div>
-        {focused && !is3DEnabled && (
-          <button
-            type="button"
-            onClick={reset}
-            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
-          >
-            {lang === "zh" ? "重置" : "Reset"}
-          </button>
-        )}
-      </div>
-    </section>
+        style={{ aspectRatio: "9463 / 6675" }}
+      >
+        <div className="absolute inset-0">
+          <ProvinceShapeLayer enable3D={isDesktop} />
+          <ProvinceLabelLayer />
+          <ProvinceHitAreaLayer enable3D={isDesktop} />
+          <SpecialRegionMarkers enable3D={isDesktop} />
+          <ProvinceInfoCard enable3D={isDesktop} showDesktop3DNotice={!isDesktop} />
+          <Province3DOverlay />
+        </div>
+        {focused && !is3DEnabled && (
+          <div className="absolute right-3 top-3 z-30 flex flex-wrap justify-end gap-2">
+            {isDesktop && (
+              <button
+                type="button"
+                onClick={toggle3D}
+                className="rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade/90"
+              >
+                {lang === "zh" ? "查看 3D" : "View in 3D"}
+              </button>
+            )}
+            <button
+              type="button"
+              onClick={reset}
+              className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
+            >
+              {lang === "zh" ? "重置" : "Reset"}
+            </button>
+          </div>
+        )}
+      </div>
+    </section>
   );
 }
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index e15995c3d876e19e896f84d3696f8f636cb5174d..28a734334bb621bcd201e225d354a07f1d71eae0
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,15 +1,17 @@
 import { lazy, Suspense } from "react";
 import MapErrorBoundary from "../common/MapErrorBoundary";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
 
 const Map3D = lazy(() => import("./Map3D"));
 
-export default function Province3DOverlay() {
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const { lang } = useLang();
-
-  if (!selectedProvinceId || !province || !is3DEnabled) return null;
+export default function Province3DOverlay() {
+  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+
+  if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
     <section
diff --git a/v2/src/components/map/ProvinceHitAreaLayer.tsx b/v2/src/components/map/ProvinceHitAreaLayer.tsx
index 3de420de8277d855edbcafc762ddc8b9ac8ebaa2..da36c7155664860d35c46194f475aa0701dffaad
--- a/v2/src/components/map/ProvinceHitAreaLayer.tsx
+++ b/v2/src/components/map/ProvinceHitAreaLayer.tsx
@@ -2,11 +2,15 @@
 import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
-const specialMarkerIds = new Set(["hong-kong", "macau"]);
-
-export default function ProvinceHitAreaLayer() {
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace } = useAtlas();
+const specialMarkerIds = new Set(["hong-kong", "macau"]);
+
+type ProvinceHitAreaLayerProps = {
+  enable3D: boolean;
+};
+
+export default function ProvinceHitAreaLayer({ enable3D }: ProvinceHitAreaLayerProps) {
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace } = useAtlas();
 
   if (selectedProvinceId) return null;
 
@@ -19,10 +23,10 @@
             key={area.id}
             type="button"
             tabIndex={-1}
-            data-province-hit={area.id}
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
+            data-province-hit={area.id}
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
             style={{
               left: `${area.x}%`,
               top: `${area.y}%`,
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index df60b8437c8831d0b39874c47ac52621c59cb73b..892e33faa0de620cd743860ff50a8c8440c9fc5f
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -4,9 +4,14 @@
 import { provinceAttractionSeed } from "../../data/atlas";
 import { useRecordCityView } from "../../hooks/useCityViews";
 import { getPhase1CityRouteId } from "../../lib/cityRoutes";
-
-export default function ProvinceInfoCard() {
-  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
+
+type ProvinceInfoCardProps = {
+  enable3D: boolean;
+  showDesktop3DNotice: boolean;
+};
+
+export default function ProvinceInfoCard({ enable3D, showDesktop3DNotice }: ProvinceInfoCardProps) {
+  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
   const { lang, t } = useLang();
   const recordView = useRecordCityView();
   const navigate = useNavigate();
@@ -24,8 +29,8 @@
       navigate(`/city/${phase1}`);
       return;
     }
-    selectPlace(province.id, cityId);
-  };
+    selectPlace(province.id, cityId, enable3D);
+  };
 
   return (
     <aside
@@ -35,8 +40,13 @@
       <header>
         <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
         <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
-        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
-      </header>
+        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
+        {showDesktop3DNotice && (
+          <p className="mt-1 text-xs font-medium text-muted">
+            {lang === "zh" ? "3D 视图仅在桌面端提供" : "3D scene available on desktop"}
+          </p>
+        )}
+      </header>
 
       {hasCities && (
         <section className="flex flex-col gap-1">
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index bba147bc2cd871ef03c9e185d8f43ec242ba11ed..5f0e60996c93390b30b8d06eabb648d2df05f13b
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -12,13 +12,17 @@
 const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
 const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";
 
-type ShapeButtonProps = {
-  shape: ProvinceShape;
-  active: boolean;
-  focused: boolean;
+type ShapeButtonProps = {
+  shape: ProvinceShape;
+  active: boolean;
+  focused: boolean;
   label: string;
-  onSelect: () => void;
-};
+  onSelect: () => void;
+};
+
+type ProvinceShapeLayerProps = {
+  enable3D: boolean;
+};
 
 function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
   const dimmed = focused && !active;
@@ -75,7 +79,7 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
+export default function ProvinceShapeLayer({ enable3D }: ProvinceShapeLayerProps) {
   const { shapes, error } = useProvinceShapes();
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
@@ -135,10 +139,10 @@
               key={shape.id}
               shape={shape}
               active={active}
-              focused={focused}
-              label={title}
-              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
-            />
+              focused={focused}
+              label={title}
+              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null, enable3D))}
+            />
           );
         })}
       </svg>
diff --git a/v2/src/components/map/SpecialRegionMarkers.tsx b/v2/src/components/map/SpecialRegionMarkers.tsx
index ed5ad1154358125b72c005cb3577b2d7dfc4fb21..546f0447ba97e54023c087b3c625fd02f9f4ab68
--- a/v2/src/components/map/SpecialRegionMarkers.tsx
+++ b/v2/src/components/map/SpecialRegionMarkers.tsx
@@ -4,12 +4,16 @@
 import { useLang } from "../../store/language";
 
 const markerIds = new Set(["hong-kong", "macau"]);
-const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
-  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
-  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
-};
-
-export default function SpecialRegionMarkers() {
+const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
+  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
+  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
+};
+
+type SpecialRegionMarkersProps = {
+  enable3D: boolean;
+};
+
+export default function SpecialRegionMarkers({ enable3D }: SpecialRegionMarkersProps) {
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace } = useAtlas();
   const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));
@@ -30,10 +34,10 @@
         return (
           <button
             key={area.id}
-            type="button"
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
+            type="button"
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
             style={style}
           >
             <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />
diff --git a/v2/src/hooks/useIsDesktop.ts b/v2/src/hooks/useIsDesktop.ts
new file mode 100644
index 0000000000000000000000000000000000000000..f502a2e42558b9b9488a90a2b2f95223e4b4065b
--- /dev/null
+++ b/v2/src/hooks/useIsDesktop.ts
@@ -0,0 +1,27 @@
+import { useSyncExternalStore } from "react";
+
+const DESKTOP_QUERY = "(min-width: 768px)";
+
+const getMediaQueryList = () => {
+  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
+    return null;
+  }
+
+  return window.matchMedia(DESKTOP_QUERY);
+};
+
+const getSnapshot = () => getMediaQueryList()?.matches ?? false;
+
+const getServerSnapshot = () => false;
+
+const subscribe = (onStoreChange: () => void) => {
+  const mediaQueryList = getMediaQueryList();
+  if (!mediaQueryList) return () => {};
+
+  mediaQueryList.addEventListener("change", onStoreChange);
+  return () => mediaQueryList.removeEventListener("change", onStoreChange);
+};
+
+export function useIsDesktop() {
+  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
+}
diff --git a/v2/src/store/atlas.ts b/v2/src/store/atlas.ts
index 56462baf71bc6b746613f2e0a0236ce4656625f9..669ad5e22957e56e00cccea58d87ad8b77fbe555
--- a/v2/src/store/atlas.ts
+++ b/v2/src/store/atlas.ts
@@ -8,9 +8,9 @@
   is3DEnabled: boolean;
 };
 
-export type AtlasAction =
-  | { type: "selectProvince"; provinceId: string | null }
-  | { type: "selectPlace"; provinceId: string; cityId: string | null }
+export type AtlasAction =
+  | { type: "selectProvince"; provinceId: string | null; enable3D?: boolean }
+  | { type: "selectPlace"; provinceId: string; cityId: string | null; enable3D?: boolean }
   | { type: "toggle3D" }
   | { type: "reset" };
 
@@ -22,15 +22,20 @@
 
 export const atlasReducer = (state: AtlasState, action: AtlasAction): AtlasState => {
   switch (action.type) {
-    case "selectProvince":
-      return {
-        ...state,
-        selectedProvinceId: action.provinceId,
-        selectedCityId: null,
-        is3DEnabled: Boolean(action.provinceId)
-      };
-    case "selectPlace":
-      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
+    case "selectProvince":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: null,
+        is3DEnabled: Boolean(action.provinceId) && (action.enable3D ?? true)
+      };
+    case "selectPlace":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: action.cityId,
+        is3DEnabled: action.enable3D ?? true
+      };
     case "toggle3D":
       return { ...state, is3DEnabled: !state.is3DEnabled };
     case "reset":
@@ -72,8 +77,10 @@
     ...state,
     province,
     city,
-    selectProvince: (provinceId: string | null) => dispatch({ type: "selectProvince", provinceId }),
-    selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
+    selectProvince: (provinceId: string | null, enable3D = true) =>
+      dispatch({ type: "selectProvince", provinceId, enable3D }),
+    selectPlace: (provinceId: string, cityId: string | null, enable3D = true) =>
+      dispatch({ type: "selectPlace", provinceId, cityId, enable3D }),
     selectCity: (cityId: string | null) =>
       state.selectedProvinceId
         ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })

codex
已在 `v2` 完成：新增 `useIsDesktop`，地图点击在移动端传 `enable3D=false`，InfoCard 加桌面 3D 提示，HeroMap 移动端不显示 3D 按钮，Province3DOverlay 非桌面直接返回不进 Suspense。

验证：MapPage 首屏不 preload Map3D/Cesium；Cesium 仍为独立 `4.7MB / 1.3MB gzip` chunk，移动端路径不会触发 lazy import。`npx tsc --noEmit` 与 `npm run build` 均通过。
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index fef4713b04dfd229e932f9aeff7b99b97f616199..870a1ff5ebd3331bec22aa5f826a9a3ea479cf92
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -1,18 +1,20 @@
-import { useEffect } from "react";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import ProvinceShapeLayer from "./ProvinceShapeLayer";
-import ProvinceLabelLayer from "./ProvinceLabelLayer";
-import ProvinceInfoCard from "./ProvinceInfoCard";
+import { useEffect } from "react";
+import { useAtlas } from "../../store/atlas";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
+import ProvinceShapeLayer from "./ProvinceShapeLayer";
+import ProvinceLabelLayer from "./ProvinceLabelLayer";
+import ProvinceInfoCard from "./ProvinceInfoCard";
 import Province3DOverlay from "./Province3DOverlay";
 import SpecialRegionMarkers from "./SpecialRegionMarkers";
 import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
 
-export default function HeroMap() {
-  const { lang } = useLang();
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const focused = Boolean(selectedProvinceId);
-  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
+export default function HeroMap() {
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+  const { selectedProvinceId, province, is3DEnabled, reset, toggle3D } = useAtlas();
+  const focused = Boolean(selectedProvinceId);
+  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
 
   useEffect(() => {
     if (!focused) return;
@@ -40,26 +42,37 @@
       <div
         aria-live="polite"
         className={`china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm ${focused ? "min-h-[420px]" : "min-h-[300px] sm:min-h-[260px]"}`}
-        style={{ aspectRatio: "9463 / 6675" }}
-      >
-        <div className="absolute inset-0">
-          <ProvinceShapeLayer />
-          <ProvinceLabelLayer />
-          <ProvinceHitAreaLayer />
-          <SpecialRegionMarkers />
-          <ProvinceInfoCard />
-          <Province3DOverlay />
-        </div>
-        {focused && !is3DEnabled && (
-          <button
-            type="button"
-            onClick={reset}
-            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
-          >
-            {lang === "zh" ? "重置" : "Reset"}
-          </button>
-        )}
-      </div>
-    </section>
+        style={{ aspectRatio: "9463 / 6675" }}
+      >
+        <div className="absolute inset-0">
+          <ProvinceShapeLayer enable3D={isDesktop} />
+          <ProvinceLabelLayer />
+          <ProvinceHitAreaLayer enable3D={isDesktop} />
+          <SpecialRegionMarkers enable3D={isDesktop} />
+          <ProvinceInfoCard enable3D={isDesktop} showDesktop3DNotice={!isDesktop} />
+          <Province3DOverlay />
+        </div>
+        {focused && !is3DEnabled && (
+          <div className="absolute right-3 top-3 z-30 flex flex-wrap justify-end gap-2">
+            {isDesktop && (
+              <button
+                type="button"
+                onClick={toggle3D}
+                className="rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade/90"
+              >
+                {lang === "zh" ? "查看 3D" : "View in 3D"}
+              </button>
+            )}
+            <button
+              type="button"
+              onClick={reset}
+              className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
+            >
+              {lang === "zh" ? "重置" : "Reset"}
+            </button>
+          </div>
+        )}
+      </div>
+    </section>
   );
 }
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index e15995c3d876e19e896f84d3696f8f636cb5174d..28a734334bb621bcd201e225d354a07f1d71eae0
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,15 +1,17 @@
 import { lazy, Suspense } from "react";
 import MapErrorBoundary from "../common/MapErrorBoundary";
 import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
+import { useLang } from "../../store/language";
+import { useIsDesktop } from "../../hooks/useIsDesktop";
 
 const Map3D = lazy(() => import("./Map3D"));
 
-export default function Province3DOverlay() {
-  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
-  const { lang } = useLang();
-
-  if (!selectedProvinceId || !province || !is3DEnabled) return null;
+export default function Province3DOverlay() {
+  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
+  const { lang } = useLang();
+  const isDesktop = useIsDesktop();
+
+  if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
     <section
diff --git a/v2/src/components/map/ProvinceHitAreaLayer.tsx b/v2/src/components/map/ProvinceHitAreaLayer.tsx
index 3de420de8277d855edbcafc762ddc8b9ac8ebaa2..da36c7155664860d35c46194f475aa0701dffaad
--- a/v2/src/components/map/ProvinceHitAreaLayer.tsx
+++ b/v2/src/components/map/ProvinceHitAreaLayer.tsx
@@ -2,11 +2,15 @@
 import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
-const specialMarkerIds = new Set(["hong-kong", "macau"]);
-
-export default function ProvinceHitAreaLayer() {
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace } = useAtlas();
+const specialMarkerIds = new Set(["hong-kong", "macau"]);
+
+type ProvinceHitAreaLayerProps = {
+  enable3D: boolean;
+};
+
+export default function ProvinceHitAreaLayer({ enable3D }: ProvinceHitAreaLayerProps) {
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace } = useAtlas();
 
   if (selectedProvinceId) return null;
 
@@ -19,10 +23,10 @@
             key={area.id}
             type="button"
             tabIndex={-1}
-            data-province-hit={area.id}
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
+            data-province-hit={area.id}
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
             style={{
               left: `${area.x}%`,
               top: `${area.y}%`,
diff --git a/v2/src/components/map/ProvinceInfoCard.tsx b/v2/src/components/map/ProvinceInfoCard.tsx
index df60b8437c8831d0b39874c47ac52621c59cb73b..892e33faa0de620cd743860ff50a8c8440c9fc5f
--- a/v2/src/components/map/ProvinceInfoCard.tsx
+++ b/v2/src/components/map/ProvinceInfoCard.tsx
@@ -4,9 +4,14 @@
 import { provinceAttractionSeed } from "../../data/atlas";
 import { useRecordCityView } from "../../hooks/useCityViews";
 import { getPhase1CityRouteId } from "../../lib/cityRoutes";
-
-export default function ProvinceInfoCard() {
-  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
+
+type ProvinceInfoCardProps = {
+  enable3D: boolean;
+  showDesktop3DNotice: boolean;
+};
+
+export default function ProvinceInfoCard({ enable3D, showDesktop3DNotice }: ProvinceInfoCardProps) {
+  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
   const { lang, t } = useLang();
   const recordView = useRecordCityView();
   const navigate = useNavigate();
@@ -24,8 +29,8 @@
       navigate(`/city/${phase1}`);
       return;
     }
-    selectPlace(province.id, cityId);
-  };
+    selectPlace(province.id, cityId, enable3D);
+  };
 
   return (
     <aside
@@ -35,8 +40,13 @@
       <header>
         <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
         <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
-        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
-      </header>
+        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
+        {showDesktop3DNotice && (
+          <p className="mt-1 text-xs font-medium text-muted">
+            {lang === "zh" ? "3D 视图仅在桌面端提供" : "3D scene available on desktop"}
+          </p>
+        )}
+      </header>
 
       {hasCities && (
         <section className="flex flex-col gap-1">
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index bba147bc2cd871ef03c9e185d8f43ec242ba11ed..5f0e60996c93390b30b8d06eabb648d2df05f13b
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -12,13 +12,17 @@
 const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
 const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";
 
-type ShapeButtonProps = {
-  shape: ProvinceShape;
-  active: boolean;
-  focused: boolean;
+type ShapeButtonProps = {
+  shape: ProvinceShape;
+  active: boolean;
+  focused: boolean;
   label: string;
-  onSelect: () => void;
-};
+  onSelect: () => void;
+};
+
+type ProvinceShapeLayerProps = {
+  enable3D: boolean;
+};
 
 function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
   const dimmed = focused && !active;
@@ -75,7 +79,7 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
+export default function ProvinceShapeLayer({ enable3D }: ProvinceShapeLayerProps) {
   const { shapes, error } = useProvinceShapes();
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
@@ -135,10 +139,10 @@
               key={shape.id}
               shape={shape}
               active={active}
-              focused={focused}
-              label={title}
-              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
-            />
+              focused={focused}
+              label={title}
+              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null, enable3D))}
+            />
           );
         })}
       </svg>
diff --git a/v2/src/components/map/SpecialRegionMarkers.tsx b/v2/src/components/map/SpecialRegionMarkers.tsx
index ed5ad1154358125b72c005cb3577b2d7dfc4fb21..546f0447ba97e54023c087b3c625fd02f9f4ab68
--- a/v2/src/components/map/SpecialRegionMarkers.tsx
+++ b/v2/src/components/map/SpecialRegionMarkers.tsx
@@ -4,12 +4,16 @@
 import { useLang } from "../../store/language";
 
 const markerIds = new Set(["hong-kong", "macau"]);
-const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
-  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
-  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
-};
-
-export default function SpecialRegionMarkers() {
+const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
+  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
+  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
+};
+
+type SpecialRegionMarkersProps = {
+  enable3D: boolean;
+};
+
+export default function SpecialRegionMarkers({ enable3D }: SpecialRegionMarkersProps) {
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace } = useAtlas();
   const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));
@@ -30,10 +34,10 @@
         return (
           <button
             key={area.id}
-            type="button"
-            aria-label={lang === "zh" ? area.zh : area.en}
-            onClick={() => selectPlace(area.id, null)}
-            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
+            type="button"
+            aria-label={lang === "zh" ? area.zh : area.en}
+            onClick={() => selectPlace(area.id, null, enable3D)}
+            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
             style={style}
           >
             <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />
diff --git a/v2/src/hooks/useIsDesktop.ts b/v2/src/hooks/useIsDesktop.ts
new file mode 100644
index 0000000000000000000000000000000000000000..f502a2e42558b9b9488a90a2b2f95223e4b4065b
--- /dev/null
+++ b/v2/src/hooks/useIsDesktop.ts
@@ -0,0 +1,27 @@
+import { useSyncExternalStore } from "react";
+
+const DESKTOP_QUERY = "(min-width: 768px)";
+
+const getMediaQueryList = () => {
+  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
+    return null;
+  }
+
+  return window.matchMedia(DESKTOP_QUERY);
+};
+
+const getSnapshot = () => getMediaQueryList()?.matches ?? false;
+
+const getServerSnapshot = () => false;
+
+const subscribe = (onStoreChange: () => void) => {
+  const mediaQueryList = getMediaQueryList();
+  if (!mediaQueryList) return () => {};
+
+  mediaQueryList.addEventListener("change", onStoreChange);
+  return () => mediaQueryList.removeEventListener("change", onStoreChange);
+};
+
+export function useIsDesktop() {
+  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
+}
diff --git a/v2/src/store/atlas.ts b/v2/src/store/atlas.ts
index 56462baf71bc6b746613f2e0a0236ce4656625f9..669ad5e22957e56e00cccea58d87ad8b77fbe555
--- a/v2/src/store/atlas.ts
+++ b/v2/src/store/atlas.ts
@@ -8,9 +8,9 @@
   is3DEnabled: boolean;
 };
 
-export type AtlasAction =
-  | { type: "selectProvince"; provinceId: string | null }
-  | { type: "selectPlace"; provinceId: string; cityId: string | null }
+export type AtlasAction =
+  | { type: "selectProvince"; provinceId: string | null; enable3D?: boolean }
+  | { type: "selectPlace"; provinceId: string; cityId: string | null; enable3D?: boolean }
   | { type: "toggle3D" }
   | { type: "reset" };
 
@@ -22,15 +22,20 @@
 
 export const atlasReducer = (state: AtlasState, action: AtlasAction): AtlasState => {
   switch (action.type) {
-    case "selectProvince":
-      return {
-        ...state,
-        selectedProvinceId: action.provinceId,
-        selectedCityId: null,
-        is3DEnabled: Boolean(action.provinceId)
-      };
-    case "selectPlace":
-      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
+    case "selectProvince":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: null,
+        is3DEnabled: Boolean(action.provinceId) && (action.enable3D ?? true)
+      };
+    case "selectPlace":
+      return {
+        ...state,
+        selectedProvinceId: action.provinceId,
+        selectedCityId: action.cityId,
+        is3DEnabled: action.enable3D ?? true
+      };
     case "toggle3D":
       return { ...state, is3DEnabled: !state.is3DEnabled };
     case "reset":
@@ -72,8 +77,10 @@
     ...state,
     province,
     city,
-    selectProvince: (provinceId: string | null) => dispatch({ type: "selectProvince", provinceId }),
-    selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
+    selectProvince: (provinceId: string | null, enable3D = true) =>
+      dispatch({ type: "selectProvince", provinceId, enable3D }),
+    selectPlace: (provinceId: string, cityId: string | null, enable3D = true) =>
+      dispatch({ type: "selectPlace", provinceId, cityId, enable3D }),
     selectCity: (cityId: string | null) =>
       state.selectedProvinceId
         ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })

tokens used
83,491

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
