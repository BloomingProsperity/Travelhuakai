# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-12T03:37:36.244Z

## Original task

在 v2/ workdir 真的 edit + build。

新功能：每个城市页加 'When to visit' 季节/天气块

要求：
1. 新建 v2/src/data/city-seasons.ts —— 4 个 phase 1 城市的最佳出行月份 + 各季节真实情况，结构：
type CitySeason = {
  cityId: CityId;
  bestMonths: { en: string; zh: string };  // 例：'Sep - Nov, Mar - Apr' / '9-11 月、3-4 月'
  reason: { en: string; zh: string };  // 一句为什么
  monthlyClimate: Array<{
    monthRange: string;   // 例：'Mar-May'
    tempC: { low: number; high: number };
    rainfall: 'low' | 'med' | 'high';
    summary: { en: string; zh: string };
    crowdLevel: 'low' | 'med' | 'high';  // 旅游淡旺季
  }>;  // 4 季覆盖
  watchOuts: Array<{ en: string; zh: string }>;  // 极端天气、雾霾、台风、酸雨等本城特有的
};

数据来自 NOAA / 各市气象局公开数据，每条都要真实可信，标 sourceId（用现有 sourceIds 体系）。北京春沙尘、上海梅雨、广州台风、深圳台风+回南天都要提及。

2. 新建 v2/src/components/city/CitySeasonBlock.tsx —— 渲染：
- bestMonths 黄色高亮卡
- monthlyClimate 4 列 grid（mobile 1 列），每列显示温度区间 + 雨量图标 + 拥挤度
- watchOuts 列表，每条带 amber 边框

3. 在 v2/src/pages/CityPage.tsx 内的 CityNav 列表加 'season' 入口；在 CityIntro 下面 / VisaChecker 上面加 <section id='season' className='scroll-mt-24'><CitySeasonBlock cityId={id} /></section>

4. CityNav 的 CITY_NAV_ITEMS 数组加 { id: 'season', en: 'When to visit', zh: '最佳季节' }

完成后 npx tsc --noEmit + npm run build 0 error。

报告 300 字以内：4 城数据简述、文件改了哪些、build 状态。

## Final prompt

在 v2/ workdir 真的 edit + build。

新功能：每个城市页加 'When to visit' 季节/天气块

要求：
1. 新建 v2/src/data/city-seasons.ts —— 4 个 phase 1 城市的最佳出行月份 + 各季节真实情况，结构：
type CitySeason = {
  cityId: CityId;
  bestMonths: { en: string; zh: string };  // 例：'Sep - Nov, Mar - Apr' / '9-11 月、3-4 月'
  reason: { en: string; zh: string };  // 一句为什么
  monthlyClimate: Array<{
    monthRange: string;   // 例：'Mar-May'
    tempC: { low: number; high: number };
    rainfall: 'low' | 'med' | 'high';
    summary: { en: string; zh: string };
    crowdLevel: 'low' | 'med' | 'high';  // 旅游淡旺季
  }>;  // 4 季覆盖
  watchOuts: Array<{ en: string; zh: string }>;  // 极端天气、雾霾、台风、酸雨等本城特有的
};

数据来自 NOAA / 各市气象局公开数据，每条都要真实可信，标 sourceId（用现有 sourceIds 体系）。北京春沙尘、上海梅雨、广州台风、深圳台风+回南天都要提及。

2. 新建 v2/src/components/city/CitySeasonBlock.tsx —— 渲染：
- bestMonths 黄色高亮卡
- monthlyClimate 4 列 grid（mobile 1 列），每列显示温度区间 + 雨量图标 + 拥挤度
- watchOuts 列表，每条带 amber 边框

3. 在 v2/src/pages/CityPage.tsx 内的 CityNav 列表加 'season' 入口；在 CityIntro 下面 / VisaChecker 上面加 <section id='season' className='scroll-mt-24'><CitySeasonBlock cityId={id} /></section>

4. CityNav 的 CITY_NAV_ITEMS 数组加 { id: 'season', en: 'When to visit', zh: '最佳季节' }

完成后 npx tsc --noEmit + npm run build 0 error。

报告 300 字以内：4 城数据简述、文件改了哪些、build 状态。

## Raw output

```text
SUCCESS: The process with PID 610668 (child process of PID 375428) has been terminated.
SUCCESS: The process with PID 375428 (child process of PID 611084) has been terminated.
SUCCESS: The process with PID 611084 (child process of PID 497900) has been terminated.
SUCCESS: The process with PID 497900 (child process of PID 609792) has been terminated.
SUCCESS: The process with PID 600860 (child process of PID 607688) has been terminated.
SUCCESS: The process with PID 607688 (child process of PID 607456) has been terminated.
SUCCESS: The process with PID 607456 (child process of PID 607748) has been terminated.
SUCCESS: The process with PID 607748 (child process of PID 609792) has been terminated.
SUCCESS: The process with PID 577372 (child process of PID 609736) has been terminated.
SUCCESS: The process with PID 609736 (child process of PID 612144) has been terminated.
SUCCESS: The process with PID 612144 (child process of PID 611592) has been terminated.
SUCCESS: The process with PID 611592 (child process of PID 609792) has been terminated.
已完成。

4 城数据：北京秋/早春，含春沙尘与冬季 AQI；上海春秋，含梅雨和夏末风雨；广州 11-12 月/3 月，含前汛期和台风；深圳 10-12 月/3 月，含台风 + 回南天。来源已入 `sources.ts`：NOAA WMO、北京/上海/广州/深圳官方气象或政府源。

改动文件：`city-seasons.ts`、`CitySeasonBlock.tsx`、`CityNav.tsx`、`CityPage.tsx`、`sources.ts`，并修正 `SourcesNote.tsx` / `SourcesPage.tsx` 的来源说明。

验证：`npx tsc --noEmit` 0 error；`npm run build` 0 error，仅 Vite chunk/plugin timing warning。


OpenAI Codex v0.128.0 (research preview)
--------
workdir: c:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1a36-4934-7bb2-b26b-56ef222114da
--------
user
在 v2/ workdir 真的 edit + build。

新功能：每个城市页加 'When to visit' 季节/天气块

要求：
1. 新建 v2/src/data/city-seasons.ts —— 4 个 phase 1 城市的最佳出行月份 + 各季节真实情况，结构：
type CitySeason = {
  cityId: CityId;
  bestMonths: { en: string; zh: string };  // 例：'Sep - Nov, Mar - Apr' / '9-11 月、3-4 月'
  reason: { en: string; zh: string };  // 一句为什么
  monthlyClimate: Array<{
    monthRange: string;   // 例：'Mar-May'
    tempC: { low: number; high: number };
    rainfall: 'low' | 'med' | 'high';
    summary: { en: string; zh: string };
    crowdLevel: 'low' | 'med' | 'high';  // 旅游淡旺季
  }>;  // 4 季覆盖
  watchOuts: Array<{ en: string; zh: string }>;  // 极端天气、雾霾、台风、酸雨等本城特有的
};

数据来自 NOAA / 各市气象局公开数据，每条都要真实可信，标 sourceId（用现有 sourceIds 体系）。北京春沙尘、上海梅雨、广州台风、深圳台风+回南天都要提及。

2. 新建 v2/src/components/city/CitySeasonBlock.tsx —— 渲染：
- bestMonths 黄色高亮卡
- monthlyClimate 4 列 grid（mobile 1 列），每列显示温度区间 + 雨量图标 + 拥挤度
- watchOuts 列表，每条带 amber 边框

3. 在 v2/src/pages/CityPage.tsx 内的 CityNav 列表加 'season' 入口；在 CityIntro 下面 / VisaChecker 上面加 <section id='season' className='scroll-mt-24'><CitySeasonBlock cityId={id} /></section>

4. CityNav 的 CITY_NAV_ITEMS 数组加 { id: 'season', en: 'When to visit', zh: '最佳季节' }

完成后 npx tsc --noEmit + npm run build 0 error。

报告 300 字以内：4 城数据简述、文件改了哪些、build 状态。
codex
我会先在 `v2` 下看现有数据、sourceId 和城市页结构，再按现有模式加数据与组件，最后跑 `tsc` 和 build。React 组件改动会按项目现有 React 写法处理。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw 'C:/Users/h/.codex/plugins/cache/openai-curated/build-web-apps/63976030/skills/react-best-practices/SKILL.md'" in c:\Users\h\Documents\New project 2
 succeeded in 670ms:
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
我先定位 `v2` 的类型、城市数据和 source 体系，避免新数据文件和导航改法脱离现有约定。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg --files' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "sourceId|sourceIds|CityId|CITY_NAV_ITEMS|CityIntro|VisaChecker|CityNav" src' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Force' in c:\Users\h\Documents\New project 2\v2
 succeeded in 806ms:
vite.config.ts
tsconfig.node.json
tsconfig.json
tsconfig.app.json
STYLE_GUIDE.md
index.html
README.md
eslint.config.js
react-router.config.ts
package-lock.json
package.json
public\sitemap.xml
public\robots.txt
public\favicon.svg
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
research\china-platforms-03-ugc.md
research\china-platforms-02-maps-reviews.md
research\china-platforms-01-video.md
research\blog-platform-bureau-sweep.md
research\alipay-wechat-foreigner-registration.md
src\main.tsx
src\routes.ts
src\root.tsx
src\App.tsx
src\styles\globals.css
scripts\restart-dev.mjs
scripts\interaction-check.mjs
public\assets\three.module.min.js
public\assets\china-province-shapes.json
public\assets\china-map-gs2022-4309.jpg
public\assets\earth-bluemarble.jpg
src\store\AtlasProvider.tsx
src\store\LanguageProvider.tsx
src\store\atlas.ts
src\store\language.ts
src\lib\unsplash.ts
src\lib\shapes.ts
src\lib\search.ts
src\lib\jsonLd.ts
src\lib\i18n.ts
src\lib\format.ts
src\lib\cityRoutes.ts
src\services\notes.ts
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
src\data\city-attractions.ts
src\data\atlas.ts
src\hooks\useProvinceShapes.ts
src\hooks\useCityViews.ts
public\assets\province-map-textures\gansu.png
src\hooks\useIsDesktop.ts
public\assets\province-map-textures\fujian.png
public\assets\province-map-textures\chongqing.png
public\assets\province-map-textures\beijing.png
public\assets\province-map-textures\anhui.png
public\assets\province-map-textures\heilongjiang.png
public\assets\province-map-textures\hebei.png
public\assets\province-map-textures\hainan.png
public\assets\province-map-textures\guizhou.png
public\assets\province-map-textures\guangxi.png
public\assets\province-map-textures\guangdong.png
public\assets\province-map-textures\hubei.png
public\assets\province-map-textures\hong-kong.png
public\assets\province-map-textures\henan.png
public\assets\province-map-textures\hunan.png
public\assets\province-map-textures\inner-mongolia.png
public\assets\province-map-textures\jilin.png
public\assets\province-map-textures\jiangxi.png
public\assets\province-map-textures\jiangsu.png
public\assets\province-map-textures\liaoning.png
public\assets\province-map-textures\macau.png
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
src\pages\SourcesPage.tsx
src\pages\SharePage.tsx
src\pages\MapPage.tsx
src\pages\HomePage.tsx
src\pages\GuidePage.tsx
src\pages\CityPage.tsx
src\pages\AskPage.tsx
src\components\map\SpecialRegionMarkers.tsx
src\components\map\ProvinceShapeLayer.tsx
src\components\map\ProvinceLabelLayer.tsx
src\components\map\ProvinceInfoCard.tsx
src\components\map\ProvinceHitAreaLayer.tsx
src\components\map\provinceColors.ts
src\components\map\Province3DOverlay.tsx
src\components\map\MapPreview.tsx
src\components\map\Map3D.tsx
src\components\map\HeroMap.tsx
src\components\common\MapErrorBoundary.tsx
src\components\common\CityFurtherReading.tsx
src\components\common\PracticalBlock.tsx
src\components\common\SourcesNote.tsx
src\components\city\CuisineDrawer.tsx
src\components\city\CityNav.tsx
src\components\city\CityIntro.tsx
src\components\city\CityImagePanel.tsx
src\components\pillar\PaymentsChecklist.tsx
src\components\pillar\EmergencyBriefing.tsx
src\components\pillar\VisaChecker.tsx
src\components\pillar\FoodGuide.tsx
src\components\pillar\PaymentsPractical.tsx
src\components\pillar\TransportGuide.tsx
src\components\layout\SiteHeader.tsx
src\components\layout\SiteFooter.tsx
src\components\layout\LanguageSwitch.tsx
src\components\sections\TopQuestions.tsx
src\components\policy\TravelAlerts.tsx

 succeeded in 862ms:
src\data\city-attractions.ts:1:import type { CityId } from "./transport";
src\data\city-attractions.ts:7:  cityId: CityId;
src\data\city-attractions.ts:366:export function attractionsByCity(cityId: CityId): Attraction[] {
src\lib\cityRoutes.ts:1:import type { CityId } from "../data/transport";
src\lib\cityRoutes.ts:3:export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
src\lib\cityRoutes.ts:10:const PHASE1_ATTRACTION_ROUTES: Partial<Record<string, CityId>> = {
src\lib\cityRoutes.ts:21:export function getPhase1CityRouteId(cityId: string): CityId | undefined {
src\lib\cityRoutes.ts:25:export function getPhase1AttractionRouteId(provinceId: string, attractionEn: string): CityId | undefined {
src\data\city-tourism-portals.ts:1:import type { CityId } from "./transport";
src\data\city-tourism-portals.ts:11:export const cityTourismPortals: Record<CityId, Portal[]> = {
src\data\emergency.ts:1:import type { CityId } from "./transport";
src\data\emergency.ts:4:  { number: "110", labelEn: "Police", labelZh: "公安", noteEn: "Free. Shanghai 110 supports 8 languages.", noteZh: "免费。上海 110 支持 8 种语言。", sourceId: "shanghai-emergency-numbers" },
src\data\emergency.ts:5:  { number: "119", labelEn: "Fire & Rescue", labelZh: "消防", noteEn: "Free. Foreign-language support in Shanghai.", noteZh: "免费。上海支持外语。", sourceId: "shanghai-emergency-numbers" },
src\data\emergency.ts:6:  { number: "120", labelEn: "Ambulance", labelZh: "急救", noteEn: "Free. National medical emergency dispatch.", noteZh: "免费。全国医疗急救调度。", sourceId: "beijing-emergency-numbers" },
src\data\emergency.ts:7:  { number: "122", labelEn: "Traffic Police", labelZh: "交警", noteEn: "Free. No confirmed English line — use 110 or your hotline app for translation.", noteZh: "免费。外语支持待核验。", sourceId: "beijing-emergency-numbers" }
src\data\emergency.ts:11:  cityId: CityId;
src\data\emergency.ts:19:  sourceId: string;
src\data\emergency.ts:32:    sourceId: "pumch-foreign-care"
src\data\emergency.ts:43:    sourceId: "ufh-beijing"
src\data\emergency.ts:54:    sourceId: "huashan-shanghai"
src\data\emergency.ts:65:    sourceId: "ufh-shanghai"
src\data\emergency.ts:76:    sourceId: "fahsysu-gz"
src\data\emergency.ts:87:    sourceId: "ufh-guangzhou"
src\data\emergency.ts:97:    sourceId: "hku-szh"
src\data\emergency.ts:107:    sourceId: "sz-hospitals-municipal"
src\data\emergency.ts:112:  cityId: CityId;
src\data\emergency.ts:117:  sourceId: string;
src\data\emergency.ts:127:    sourceId: "beijing-12345-hotline"
src\data\emergency.ts:135:    sourceId: "shanghai-12345"
src\data\emergency.ts:143:    sourceId: "gz-960169-bridge"
src\data\emergency.ts:151:    sourceId: "sz-12345-pingshan"
src\data\emergency.ts:162:  sourceId: string;
src\data\emergency.ts:173:    sourceId: "us-embassy-china"
src\data\emergency.ts:182:    sourceId: "uk-embassy-china"
src\data\emergency.ts:191:    sourceId: "ca-embassy-china"
src\data\emergency.ts:200:    sourceId: "au-embassy-china"
src\data\emergency.ts:209:    sourceId: "jp-embassy-china"
src\data\emergency.ts:217:  sourceId: "mfa-consular-directory"
src\data\emergency.ts:222:export function emergencySourceIds(cityId?: CityId): string[] {
src\data\emergency.ts:224:  nationalEmergency.forEach((r) => ids.add(r.sourceId));
src\data\emergency.ts:225:  embassies.forEach((e) => ids.add(e.sourceId));
src\data\emergency.ts:226:  ids.add(mfaConsular.sourceId);
src\data\emergency.ts:228:    hospitals.filter((h) => h.cityId === cityId).forEach((h) => ids.add(h.sourceId));
src\data\emergency.ts:230:    if (ch) ids.add(ch.sourceId);
src\data\emergency.ts:232:    hospitals.forEach((h) => ids.add(h.sourceId));
src\data\emergency.ts:233:    cityHotlines.forEach((h) => ids.add(h.sourceId));
src\data\emergency.ts:235:  hospitalVisitFlow.forEach((s) => ids.add(s.sourceId));
src\data\emergency.ts:247:    sourceId: "pumch-foreign-care"
src\data\emergency.ts:255:    sourceId: "pumch-foreign-care"
src\data\emergency.ts:263:    sourceId: "pumch-foreign-care"
src\data\food.ts:1:import type { CityId } from "./transport";
src\data\food.ts:4:  cityId: CityId;
src\data\food.ts:10:    sourceId: string;
src\data\food.ts:13:  districts: { en: string; zh: string; sourceId: string };
src\data\food.ts:14:  deliveryNote: { en: string; zh: string; sourceId: string };
src\data\food.ts:15:  pitfalls: Array<{ en: string; zh: string; sourceId: string }>;
src\data\food.ts:26:      sourceId: "beijing-roast-duck",
src\data\food.ts:35:      sourceId: "beijing-axis-snacks"
src\data\food.ts:40:      sourceId: "beijing-roast-duck"
src\data\food.ts:46:        sourceId: "beijing-roast-duck"
src\data\food.ts:51:        sourceId: "beijing-axis-snacks"
src\data\food.ts:62:      sourceId: "shanghai-xiaolongbao",
src\data\food.ts:71:      sourceId: "shanghai-xiaolongbao"
src\data\food.ts:76:      sourceId: "shanghai-xiaolongbao"
src\data\food.ts:82:        sourceId: "shanghai-xiaolongbao"
src\data\food.ts:87:        sourceId: "shanghai-xiaolongbao"
src\data\food.ts:98:      sourceId: "gz-foreigner-guide-pdf",
src\data\food.ts:107:      sourceId: "gz-foreigner-guide-pdf"
src\data\food.ts:112:      sourceId: "gz-foreigner-guide-pdf"
src\data\food.ts:118:        sourceId: "gz-foreigner-guide-pdf"
src\data\food.ts:123:        sourceId: "gz-foreigner-guide-pdf"
src\data\food.ts:128:        sourceId: "gz-foreigner-guide-pdf"
src\data\food.ts:139:      sourceId: "sz-baoan-airport-plan",
src\data\food.ts:148:      sourceId: "sz-baoan-airport-plan"
src\data\food.ts:153:      sourceId: "sz-tax-refund-alipayhk"
src\data\food.ts:159:        sourceId: "sz-baoan-airport-plan"
src\data\food.ts:164:        sourceId: "sz-tax-refund-alipayhk"
src\data\food.ts:172:export function foodSourceIds(cityId?: CityId): string[] {
src\data\food.ts:176:    ids.add(c.cuisine.sourceId);
src\data\food.ts:177:    ids.add(c.districts.sourceId);
src\data\food.ts:178:    ids.add(c.deliveryNote.sourceId);
src\data\food.ts:179:    c.pitfalls.forEach((p) => ids.add(p.sourceId));
src\data\entry-policies.ts:76:  sourceId: "nia-unilateral-list"
src\data\entry-policies.ts:137:  sourceIds: ["state-council-240h", "nia-transit-list"]
src\data\entry-policies.ts:144:  sourceIds: ["nia-online-entry-card", "nia-card-fraud-warning"]
src\data\entry-policies.ts:148:  | { kind: "unilateral"; maxStayDays: number; sourceId: string }
src\data\entry-policies.ts:149:  | { kind: "transit-only"; maxHours: number; sourceId: string }
src\data\entry-policies.ts:150:  | { kind: "both"; unilateralDays: number; transitHours: number; sourceIds: string[] }
src\data\entry-policies.ts:181:      sourceIds: [unilateralPolicy.sourceId, ...transitPolicy.sourceIds]
src\data\entry-policies.ts:188:      sourceId: unilateralPolicy.sourceId
src\data\entry-policies.ts:195:      sourceId: transitPolicy.sourceIds[0]
src\data\entry-policies.ts:207:  unilateralPolicy.sourceId,
src\data\entry-policies.ts:208:  ...transitPolicy.sourceIds,
src\data\entry-policies.ts:209:  ...onlineEntryCard.sourceIds,
src\components\city\CityIntro.tsx:4:import type { CityId } from "../../data/transport";
src\components\city\CityIntro.tsx:7:type Props = { cityId: CityId };
src\components\city\CityIntro.tsx:9:const CITY_BLURB: Record<CityId, { en: string; zh: string }> = {
src\components\city\CityIntro.tsx:28:const CITY_FACTS: Record<CityId, Array<{ en: string; zh: string }>> = {
src\components\city\CityIntro.tsx:57:export default function CityIntro({ cityId }: Props) {
src\components\city\CityImagePanel.tsx:3:import type { CityId } from "../../data/transport";
src\components\city\CityImagePanel.tsx:7:type Props = { cityId: CityId };
src\components\common\PracticalBlock.tsx:2:import type { CityId } from "../../data/transport";
src\components\common\PracticalBlock.tsx:12:type Props = { pillar: PillarId; cityId?: CityId };
src\components\common\CityFurtherReading.tsx:2:import type { CityId } from "../../data/transport";
src\components\common\CityFurtherReading.tsx:5:type Props = { cityId: CityId };
src\data\types.ts:11:export type CityId = "beijing-city" | "shanghai-city" | "guangzhou-city" | "shenzhen-city";
src\components\city\CityNav.tsx:5:type CityNavItem = { id: string; en: string; zh: string };
src\components\city\CityNav.tsx:7:const CITY_NAV_ITEMS: CityNavItem[] = [
src\components\city\CityNav.tsx:17:export default function CityNav() {
src\components\city\CityNav.tsx:23:    const sections = CITY_NAV_ITEMS
src\components\city\CityNav.tsx:49:        {CITY_NAV_ITEMS.map((item) => {
src\data\transport.ts:1:export type CityId = "beijing" | "shanghai" | "guangzhou" | "shenzhen";
src\data\transport.ts:3:export const CITY_LABELS: Record<CityId, { en: string; zh: string }> = {
src\data\transport.ts:18:  sourceId: string;
src\data\transport.ts:22:  cityId: CityId;
src\data\transport.ts:34:    sourceId: string;
src\data\transport.ts:39:    sourceId: string;
src\data\transport.ts:41:  pitfalls: Array<{ en: string; zh: string; sourceId: string }>;
src\data\transport.ts:48:    sourceId: "rail-12306-faq"
src\data\transport.ts:53:    sourceId: "rail-12306-faq"
src\data\transport.ts:58:    sourceId: "rail-12306-faq"
src\data\transport.ts:63:    sourceId: "rail-12306-faq"
src\data\transport.ts:86:            sourceId: "beijing-airport-express"
src\data\transport.ts:96:            sourceId: "beijing-airport-services"
src\data\transport.ts:106:            sourceId: "beijing-airport-services"
src\data\transport.ts:123:            sourceId: "beijing-daxing-final-train"
src\data\transport.ts:133:            sourceId: "beijing-airport-services"
src\data\transport.ts:141:      sourceId: "beijing-subway-five-cards"
src\data\transport.ts:146:      sourceId: "beijing-airport-services"
src\data\transport.ts:152:        sourceId: "beijing-airport-express"
src\data\transport.ts:157:        sourceId: "beijing-daxing-final-train"
src\data\transport.ts:179:            sourceId: "shanghai-maglev-bank-cards"
src\data\transport.ts:189:            sourceId: "shanghai-metro-five-cards"
src\data\transport.ts:199:            sourceId: "shanghai-airport-link"
src\data\transport.ts:216:            sourceId: "shanghai-metro-five-cards"
src\data\transport.ts:224:      sourceId: "shanghai-metro-five-cards"
src\data\transport.ts:229:      sourceId: "shanghai-public-transport"
src\data\transport.ts:235:        sourceId: "shanghai-maglev-fare"
src\data\transport.ts:240:        sourceId: "shanghai-metro-five-cards"
src\data\transport.ts:245:        sourceId: "shanghai-airport-link"
src\data\transport.ts:267:            sourceId: "gz-baiyun-t3-airport"
src\data\transport.ts:277:            sourceId: "gz-baiyun-t3-airport"
src\data\transport.ts:287:            sourceId: "gz-baiyun-t3-airport"
src\data\transport.ts:295:      sourceId: "gz-metro-tap-to-ride"
src\data\transport.ts:300:      sourceId: "gz-baiyun-t3-airport"
src\data\transport.ts:306:        sourceId: "gz-baiyun-t3-airport"
src\data\transport.ts:311:        sourceId: "gz-baiyun-t3-airport"
src\data\transport.ts:333:            sourceId: "sz-baoan-airport-plan"
src\data\transport.ts:343:            sourceId: "sz-baoan-airport-plan"
src\data\transport.ts:353:            sourceId: "sz-baoan-airport-plan"
src\data\transport.ts:361:      sourceId: "sz-metro-pos"
src\data\transport.ts:366:      sourceId: "sz-baoan-airport-plan"
src\data\transport.ts:372:        sourceId: "sz-baoan-airport-plan"
src\data\transport.ts:377:        sourceId: "sz-metro-pos"
src\data\transport.ts:382:        sourceId: "sz-hk-cross-border-qr"
src\data\transport.ts:390:export function transportSourceIds(cityId?: CityId): string[] {
src\data\transport.ts:392:  Object.values(railBooking).forEach((r) => ids.add(r.sourceId));
src\data\transport.ts:395:    city.airports.forEach((a) => a.options.forEach((o) => ids.add(o.sourceId)));
src\data\transport.ts:396:    ids.add(city.metro.sourceId);
src\data\transport.ts:397:    ids.add(city.rideHail.sourceId);
src\data\transport.ts:398:    city.pitfalls.forEach((p) => ids.add(p.sourceId));
src\data\practical-other.ts:1:import type { CityId } from "./transport";
src\data\practical-other.ts:8:  cityScope?: CityId[];
src\data\practical-other.ts:13:  sourceId: string;
src\data\practical-other.ts:25:    sourceId: "blog-cft-transit"
src\data\practical-other.ts:34:    sourceId: "blog-cft-transit"
src\data\practical-other.ts:43:    sourceId: "blog-smartsh-faq"
src\data\practical-other.ts:53:    sourceId: "blog-cft-transit"
src\data\practical-other.ts:62:    sourceId: "blog-smartsh-faq"
src\data\practical-other.ts:71:    sourceId: "blog-cft-transit"
src\data\practical-other.ts:80:    sourceId: "blog-thechinajourney"
src\data\practical-other.ts:89:    sourceId: "blog-thechinajourney"
src\data\practical-other.ts:105:    sourceId: "bj-subway-tap-2024"
src\data\practical-other.ts:114:    sourceId: "blog-cgl-publictransport"
src\data\practical-other.ts:123:    sourceId: "blog-cgl-publictransport"
src\data\practical-other.ts:132:    sourceId: "blog-cgl-train"
src\data\practical-other.ts:141:    sourceId: "blog-cgl-train"
src\data\practical-other.ts:150:    sourceId: "blog-cgl-train"
src\data\practical-other.ts:160:    sourceId: "blog-cgl-train"
src\data\practical-other.ts:170:    sourceId: "blog-flyertalk-bjtaxi"
src\data\practical-other.ts:180:    sourceId: "blog-beforeyougo-gz"
src\data\practical-other.ts:189:    sourceId: "blog-wise-didi"
src\data\practical-other.ts:199:    sourceId: "eyeshenzhen-octopus-interop"
src\data\practical-other.ts:209:    sourceId: "blog-travelchinatips-shmetro"
src\data\practical-other.ts:219:    sourceId: "blog-travelchinawith-taxi"
src\data\practical-other.ts:230:    sourceId: "blog-alittleadrift-veg"
src\data\practical-other.ts:239:    sourceId: "blog-sinotales-allergies"
src\data\practical-other.ts:248:    sourceId: "blog-sinotales-allergies"
src\data\practical-other.ts:257:    sourceId: "blog-travelchinawith-allergies"
src\data\practical-other.ts:267:    sourceId: "blog-chinamike"
src\data\practical-other.ts:277:    sourceId: "blog-beforeyougo-gz"
src\data\practical-other.ts:286:    sourceId: "blog-thechinajourney"
src\data\practical-other.ts:296:    sourceId: "blog-beforeyougo-gz"
src\data\practical-other.ts:307:    sourceId: "blog-thechinaguide-medical"
src\data\practical-other.ts:316:    sourceId: "blog-expatden-shhospital"
src\data\practical-other.ts:326:    sourceId: "blog-expatden-shhospital"
src\data\practical-other.ts:336:    sourceId: "blog-internationalinsurance"
src\data\practical-other.ts:345:    sourceId: "blog-thechinajourney"
src\data\practical-other.ts:355:    sourceId: "bj-medical-guide-quickservices"
src\data\practical-other.ts:359:export function pitfallsForPillar(pillar: PillarId, cityId?: CityId): Pitfall[] {
src\data\practical-other.ts:368:export function pitfallSourceIds(pillar?: PillarId, cityId?: CityId): string[] {
src\data\practical-other.ts:370:  return Array.from(new Set(items.map((p) => p.sourceId)));
src\data\top-questions.ts:7:  sourceId: string;
src\data\top-questions.ts:17:    sourceId: "nia-unilateral-list"
src\data\top-questions.ts:25:    sourceId: "nia-online-entry-card"
src\data\top-questions.ts:33:    sourceId: "pboc-payment-uplift"
src\data\top-questions.ts:41:    sourceId: "customs-clearance-guide"
src\data\top-questions.ts:49:    sourceId: "pboc-payment-uplift"
src\data\top-questions.ts:57:    sourceId: "shanghai-emergency-numbers"
src\data\top-questions.ts:65:    sourceId: "rail-12306-faq"
src\data\top-questions.ts:73:    sourceId: "shanghai-public-transport"
src\data\top-questions.ts:77:export const topQuestionSourceIds: string[] = topQuestions.map((q) => q.sourceId);
src\pages\HomePage.tsx:4:import { CITY_LABELS, type CityId } from "../data/transport";
src\pages\HomePage.tsx:9:const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
src\pages\HomePage.tsx:49:function pickCityPhoto(cityId: CityId): Attraction {
src\pages\HomePage.tsx:140:  cityId: CityId;
src\data\practical-payments.ts:12:  sourceId: string;
src\data\practical-payments.ts:24:    sourceId: "blog-fanketravel-payments"
src\data\practical-payments.ts:34:    sourceId: "blog-chinaguidelines-tourcard"
src\data\practical-payments.ts:44:    sourceId: "blog-wanderinchina-alipay"
src\data\practical-payments.ts:54:    sourceId: "blog-realchinatrip-wechat"
src\data\practical-payments.ts:64:    sourceId: "blog-baoziinchina-wechat"
src\data\practical-payments.ts:75:    sourceId: "blog-wanderinchina-alipay"
src\data\practical-payments.ts:85:    sourceId: "blog-hiddenchina-payments"
src\data\practical-payments.ts:95:    sourceId: "blog-letstravel-alipay"
src\data\practical-payments.ts:105:    sourceId: "blog-wildchina-wechat"
src\data\practical-payments.ts:115:    sourceId: "blog-wildchina-alipay"
src\data\practical-payments.ts:125:    sourceId: "blog-wildchina-wechat"
src\data\practical-payments.ts:136:    sourceId: "blog-travelchinawith-alipay"
src\data\practical-payments.ts:146:    sourceId: "blog-wanderinchina-alipay"
src\data\practical-payments.ts:156:    sourceId: "blog-hiddenchina-payments"
src\data\practical-payments.ts:166:    sourceId: "blog-wildchina-wechat"
src\data\practical-payments.ts:177:    sourceId: "blog-letstravel-alipay"
src\data\practical-payments.ts:187:    sourceId: "blog-hiddenchina-payments"
src\data\practical-payments.ts:197:    sourceId: "blog-ltl-wechat"
src\data\practical-payments.ts:202:  Array.from(new Set(practicalPayments.map((g) => g.sourceId)));
src\pages\GuidePage.tsx:3:import VisaChecker from "../components/pillar/VisaChecker";
src\pages\GuidePage.tsx:105:      {current === "entry" && <VisaChecker />}
src\data\payments.ts:1:import type { CityId } from "./transport";
src\data\payments.ts:6:  sourceId: string;
src\data\payments.ts:13:    sourceId: "pboc-payment-uplift"
src\data\payments.ts:18:    sourceId: "pboc-payment-uplift"
src\data\payments.ts:26:  sourceId: "boc-atm-en"
src\data\payments.ts:36:    sourceId: "customs-clearance-guide"
src\data\payments.ts:44:    sourceId: "customs-clearance-guide"
src\data\payments.ts:52:    sourceId: "customs-clearance-guide"
src\data\payments.ts:60:    sourceId: "customs-clearance-guide"
src\data\payments.ts:70:  sourceId: string;
src\data\payments.ts:80:    sourceId: "pboc-payment-uplift"
src\data\payments.ts:88:    sourceId: "customs-clearance-guide"
src\data\payments.ts:96:    sourceId: "boc-atm-en"
src\data\payments.ts:104:    sourceId: "pboc-payment-uplift"
src\data\payments.ts:109:  cityId: CityId;
src\data\payments.ts:112:  bullets: Array<{ en: string; zh: string; sourceId: string }>;
src\data\payments.ts:124:        sourceId: "beijing-subway-five-cards"
src\data\payments.ts:129:        sourceId: "beijing-airport-services"
src\data\payments.ts:141:        sourceId: "shanghai-metro-five-cards"
src\data\payments.ts:146:        sourceId: "shanghai-maglev-bank-cards"
src\data\payments.ts:151:        sourceId: "shanghai-public-transport"
src\data\payments.ts:163:        sourceId: "gz-metro-tap-to-ride"
src\data\payments.ts:168:        sourceId: "gz-alipayhk-transit"
src\data\payments.ts:180:        sourceId: "sz-metro-pos"
src\data\payments.ts:185:        sourceId: "sz-hk-cross-border-qr"
src\data\payments.ts:190:        sourceId: "sz-tax-refund-alipayhk"
src\data\payments.ts:198:export function paymentsSourceIds(cityId?: CityId): string[] {
src\data\payments.ts:200:  ids.add(platformLimits.alipay.sourceId);
src\data\payments.ts:201:  ids.add(platformLimits.wechat.sourceId);
src\data\payments.ts:202:  ids.add(atmRule.sourceId);
src\data\payments.ts:203:  customsRules.forEach((r) => ids.add(r.sourceId));
src\data\payments.ts:204:  preArrivalChecklist.forEach((s) => ids.add(s.sourceId));
src\data\payments.ts:206:  cities.forEach((c) => c.bullets.forEach((b) => ids.add(b.sourceId)));
src\pages\CityPage.tsx:3:import { CITY_LABELS, type CityId } from "../data/transport";
src\pages\CityPage.tsx:6:import VisaChecker from "../components/pillar/VisaChecker";
src\pages\CityPage.tsx:13:import CityNav from "../components/city/CityNav";
src\pages\CityPage.tsx:14:import CityIntro from "../components/city/CityIntro";
src\pages\CityPage.tsx:17:const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
src\pages\CityPage.tsx:19:function cityStructuredData(cityId: CityId) {
src\pages\CityPage.tsx:64:function cityBreadcrumbStructuredData(cityId: CityId) {
src\pages\CityPage.tsx:79:  if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
src\pages\CityPage.tsx:88:  const id = cityId as CityId;
src\pages\CityPage.tsx:113:        <CityNav />
src\pages\CityPage.tsx:116:          <CityIntro cityId={id} />
src\pages\CityPage.tsx:117:          <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
src\components\policy\TravelAlerts.tsx:18:  sourceId: string;
src\components\policy\TravelAlerts.tsx:42:        sourceId: transitPolicy.sourceIds[0]
src\components\policy\TravelAlerts.tsx:51:        sourceId: onlineEntryCard.sourceIds[0]
src\components\policy\TravelAlerts.tsx:60:        sourceId: unilateralPolicy.sourceId
src\store\atlas.ts:7:  selectedCityId: string | null;
src\store\atlas.ts:19:  selectedCityId: null,
src\store\atlas.ts:29:        selectedCityId: null,
src\store\atlas.ts:36:        selectedCityId: action.cityId,
src\store\atlas.ts:75:  const city = findCity(province, state.selectedCityId);
src\components\map\Map3D.tsx:322:function getPickedCityId(entity: CesiumEntity): string | null {
src\components\map\Map3D.tsx:328:function getPickedRouteCityId(entity: CesiumEntity): string | null {
src\components\map\Map3D.tsx:421:          const routeCityId = entity ? getPickedRouteCityId(entity) : null;
src\components\map\Map3D.tsx:422:          if (routeCityId) {
src\components\map\Map3D.tsx:423:            handleRouteClickRef.current(routeCityId);
src\components\map\Map3D.tsx:426:          const cityId = entity ? getPickedCityId(entity) : null;
src\components\pillar\EmergencyBriefing.tsx:11:import { CITY_LABELS, type CityId } from "../../data/transport";
src\components\pillar\EmergencyBriefing.tsx:15:const CITIES: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
src\components\pillar\EmergencyBriefing.tsx:17:type Props = { cityId?: CityId };
src\components\pillar\EmergencyBriefing.tsx:23:  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
src\components\pillar\EmergencyBriefing.tsx:24:  const effectiveId: CityId = cityId ?? activeId;
src\components\pillar\FoodGuide.tsx:4:import { CITY_LABELS, type CityId } from "../../data/transport";
src\components\pillar\FoodGuide.tsx:9:type Props = { cityId?: CityId };
src\components\pillar\FoodGuide.tsx:15:  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
src\components\pillar\FoodGuide.tsx:17:  const effectiveId: CityId = cityId ?? activeId;
src\components\pillar\PaymentsChecklist.tsx:8:import type { CityId } from "../../data/transport";
src\components\pillar\PaymentsChecklist.tsx:12:type Props = { cityId?: CityId };
src\components\pillar\TransportGuide.tsx:3:import { CITY_LABELS, cityTransport, railBooking, type CityId } from "../../data/transport";
src\components\pillar\TransportGuide.tsx:13:type Props = { cityId?: CityId };
src\components\pillar\TransportGuide.tsx:19:  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
src\components\pillar\TransportGuide.tsx:20:  const effectiveId: CityId = cityId ?? activeId;
src\components\pillar\VisaChecker.tsx:15:export default function VisaChecker() {

 succeeded in 949ms:


    目录: C:\Users\h\Documents\New project 2\v2


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----         2026/5/12     11:19                .omc                                                                 
d-----         2026/5/11      0:09                .react-router                                                        
d-----         2026/5/10     22:41                .vite-react-ssg-temp                                                 
d-----         2026/5/12     11:19                build                                                                
d-----         2026/5/10     22:42                dist                                                                 
d-----         2026/5/12     10:46                node_modules                                                         
d-----         2026/5/12     11:14                public                                                               
d-----         2026/5/11      0:08                research                                                             
d-----         2026/5/12     10:17                scripts                                                              
d-----         2026/5/12     10:17                src                                                                  
-a----         2026/5/12     10:17            158 .editorconfig                                                        
-a----         2026/5/12     10:17             41 .env.example                                                         
-a----          2026/5/9     17:35            253 .gitignore                                                           
-a----         2026/5/12     10:17            639 eslint.config.js                                                     
-a----          2026/5/9     17:41            592 index.html                                                           
-a----         2026/5/12     10:47         181665 package-lock.json                                                    
-a----         2026/5/12     10:17           1191 package.json                                                         
-a----         2026/5/12     10:45            414 react-router.config.ts                                               
-a----          2026/5/9     17:35           2425 README.md                                                            
-a----         2026/5/10     23:58           8245 STYLE_GUIDE.md                                                       
-a----          2026/5/9     17:35            617 tsconfig.app.json                                                    
-a----          2026/5/9     17:35            119 tsconfig.json                                                        
-a----         2026/5/10     22:50            617 tsconfig.node.json                                                   
-a----          2026/5/9     23:06              0 vite-dev.err.log                                                     
-a----          2026/5/9     23:13            335 vite-dev.out.log                                                     
-a----         2026/5/12     10:17            806 vite.config.ts                                                       



exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw src\\data\\sources.ts" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw src\\components\\city\\CityNav.tsx" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw src\\pages\\CityPage.tsx" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw src\\components\\common\\SourcesNote.tsx" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw src\\components\\city\\CityIntro.tsx" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw src\\data\\transport.ts" in c:\Users\h\Documents\New project 2\v2
 succeeded in 1404ms:
import { Link } from "react-router";
import { useLang } from "../../store/language";

export default function SourcesNote() {
  const { lang } = useLang();
  const isZh = lang === "zh";
  return (
    <p className="mt-6 border-t border-line pt-4 text-xs text-muted">
      {isZh ? (
        <>
          鏈〉鎵€鏈夋暟瀛椼€佹斂绛栥€佸湴鍧€鍧囧紩鑷腑鍥芥斂搴滃畼鏂瑰叕寮€鏉ユ簮锛涘疄闄呮敞鎰忎簨椤瑰紩鑷绫嶆父瀹㈡梾琛岀ぞ鍖哄崥瀹紝姣忔潯鏍囨敞浣滆€呬笌鏃ユ湡銆?          <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
            鏌ョ湅鍏ㄩ儴淇℃伅鏉ユ簮 鈫?          </Link>
        </>
      ) : (
        <>
          Every figure, policy, and address on this page is cited from official Chinese government sources. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
          <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
            See all references 鈫?          </Link>
        </>
      )}
    </p>
  );
}


 succeeded in 1459ms:
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useLang } from "../../store/language";

type CityNavItem = { id: string; en: string; zh: string };

const CITY_NAV_ITEMS: CityNavItem[] = [
  { id: "intro", en: "City overview", zh: "鍩庡競浠嬬粛" },
  { id: "visa", en: "Entry & Visa", zh: "鍏ュ绛捐瘉" },
  { id: "payments", en: "Payments", zh: "鏀粯" },
  { id: "transport", en: "Transport", zh: "浜ら€? },
  { id: "food", en: "Food", zh: "缇庨" },
  { id: "emergency", en: "Emergency & Medical", zh: "绱ф€?/ 鍖荤枟" },
  { id: "portals", en: "Official portals", zh: "瀹樻柟寤朵几" }
];

export default function CityNav() {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const [active, setActive] = useState<string>("intro");

  useEffect(() => {
    const sections = CITY_NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label={isZh ? "鍩庡競椤靛鑸? : "City page navigation"}
      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
    >
      <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
        {CITY_NAV_ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="shrink-0 lg:shrink">
              <a
                href={`#${item.id}`}
                className={clsx(
                  "block whitespace-nowrap rounded-lg px-3 py-2 text-sm transition lg:whitespace-normal",
                  isActive
                    ? "bg-jade-soft font-bold text-jade"
                    : "text-ink/80 hover:bg-paper hover:text-ink"
                )}
              >
                {isZh ? item.zh : item.en}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}


 succeeded in 1437ms:
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


 succeeded in 1553ms:
export type SourceCitation = {
  id: string;
  url: string;
  publisher: string;
  publisherUrl: string;
  pageTitleEn: string;
  pageTitleZh?: string;
  publishedDate?: string;
  verifiedDate: string;
  domain: string;
  community?: boolean;
};

const TODAY = "2026-05-09";

const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
  ...record,
  domain: new URL(record.url).hostname
});

const list: SourceCitation[] = [
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
    pageTitleEn: "12306 FAQ 鈥?registration / payment / refund",
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
    pageTitleEn: "Beijing Capital International Airport 鈥?Airport Express info",
    verifiedDate: TODAY
  }),
  make({
    id: "beijing-daxing-final-train",
    url: "https://english.beijing.gov.cn/livinginbeijing/transportation/beijingsubway/202411/t20241110_3937243.html",
    publisher: "Beijing Government",
    publisherUrl: "https://english.beijing.gov.cn",
    pageTitleEn: "Daxing Airport Express 鈥?operating hours",
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
    pageTitleEn: "Shanghai Maglev 鈥?fare and operating hours",
    verifiedDate: TODAY
  }),
  make({
    id: "shanghai-airport-link",
    url: "https://english.shanghai.gov.cn/en-Transportation/20241231/f66f14bbd4b549ab88e6f3aec375790c.html",
    publisher: "Shanghai Government",
    publisherUrl: "https://english.shanghai.gov.cn",
    pageTitleEn: "How to take Airport Link Line (PVG 鈫?SHA)",
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
    pageTitleEn: "Bao'an Airport 鈥?full ground transport map",
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
    pageTitleEn: "BOC ATM 鈥?accepts Visa/MC/JCB/Amex/UnionPay; CNY 3,000/tx",
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
    pageTitleEn: "What to do in an emergency 鈥?Shanghai 110 in 8 languages",
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
    pageTitleEn: "Beijing United Family Hospital 鈥?main campus",
    verifiedDate: TODAY
  }),
  make({
    id: "huashan-shanghai",
    url: "https://english.shanghai.gov.cn/en-Hospitals/20241014/e3bebde56c344efcbc3ca57e3a50e55a.html",
    publisher: "Shanghai Government",
    publisherUrl: "https://english.shanghai.gov.cn",
    pageTitleEn: "Huashan Hospital 鈥?World Health Clinic",
    publishedDate: "2024-10-14",
    verifiedDate: TODAY
  }),
  make({
    id: "ufh-shanghai",
    url: "https://shanghai.ufh.com.cn/locations/puxi-main-hospital/?lang=en",
    publisher: "United Family Healthcare",
    publisherUrl: "https://shanghai.ufh.com.cn",
    pageTitleEn: "Shanghai United Family Hospital 鈥?Puxi",
    verifiedDate: TODAY
  }),
  make({
    id: "fahsysu-gz",
    url: "https://www.fahsysu.org.cn/en/basic/5855",
    publisher: "First Affiliated Hospital, Sun Yat-sen University",
    publisherUrl: "https://www.fahsysu.org.cn",
    pageTitleEn: "International Medicine 鈥?FAH-SYSU Guangzhou",
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
    pageTitleEn: "International Medical Center 鈥?HKU-Shenzhen Hospital",
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
    pageTitleEn: "Beijing roast duck 鈥?official dining guide",
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
    pageTitleEn: "Shanghai xiaolongbao 鈥?official dining feature",
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
    pageTitleEn: "Digital survival 鈥?China payment guide",
    publishedDate: "2026",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-hiddenchina-kyc",
    url: "https://hiddenchinatravel.com/alipay-wechat-pay-verification-failed/",
    publisher: "Hidden China Travel",
    publisherUrl: "https://hiddenchinatravel.com",
    pageTitleEn: "Alipay / WeChat verification failed 鈥?diagnosis",
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
    pageTitleEn: "How to use Alipay in China 鈥?practical guide",
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
    pageTitleEn: "WeChat Pay 鈥?expat community guide",
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
    pageTitleEn: "Alipay for foreigners 鈥?China 2025 guide",
    publishedDate: "2025",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-cft-transit",
    url: "https://chinafortravelers.com/guides/china-visa-free-transit/",
    publisher: "ChinaForTravelers",
    publisherUrl: "https://chinafortravelers.com",
    pageTitleEn: "China visa-free transit 鈥?practitioner guide",
    publishedDate: "2025",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-smartsh-faq",
    url: "https://www.smartshanghai.com/articles/shanghai-life/the-faq-china-visa-on-arrivals-need-to-know",
    publisher: "SmartShanghai",
    publisherUrl: "https://www.smartshanghai.com",
    pageTitleEn: "Visa on arrival 鈥?what to know",
    publishedDate: "2025",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-thechinajourney",
    url: "https://www.thechinajourney.com/china-travel-tips/",
    publisher: "TheChinaJourney",
    publisherUrl: "https://www.thechinajourney.com",
    pageTitleEn: "China travel tips 鈥?accommodation, water, prescriptions, registration",
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
    pageTitleEn: "Guangzhou 鈥?taxi touts, QR fraud, Canton Fair impact",
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
    pageTitleEn: "First-time travel 鈥?food allergies in China",
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
    pageTitleEn: "Avoiding scams 鈥?tea house and tourist traps",
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
    pageTitleEn: "Hospitals in Shanghai 鈥?practical guide",
    publishedDate: "2024",
    verifiedDate: TODAY,
    community: true
  }),
  make({
    id: "blog-internationalinsurance",
    url: "https://www.internationalinsurance.com/countries/china/hospitals/",
    publisher: "International Insurance",
    publisherUrl: "https://www.internationalinsurance.com",
    pageTitleEn: "China hospitals 鈥?international department pricing",
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

export const sources: Record<string, SourceCitation> = Object.fromEntries(
  list.map((s) => [s.id, s])
);

export const getSource = (id: string): SourceCitation | undefined => sources[id];


 succeeded in 1586ms:
import { Link, useParams } from "react-router";
import { attractionsByCity } from "../data/city-attractions";
import { CITY_LABELS, type CityId } from "../data/transport";
import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
import { useLang } from "../store/language";
import VisaChecker from "../components/pillar/VisaChecker";
import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
import TransportGuide from "../components/pillar/TransportGuide";
import FoodGuide from "../components/pillar/FoodGuide";
import EmergencyBriefing from "../components/pillar/EmergencyBriefing";
import CityFurtherReading from "../components/common/CityFurtherReading";
import SourcesNote from "../components/common/SourcesNote";
import CityNav from "../components/city/CityNav";
import CityIntro from "../components/city/CityIntro";
import CityImagePanel from "../components/city/CityImagePanel";

const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];

function cityStructuredData(cityId: CityId) {
  const city = CITY_LABELS[cityId];
  const cityUrl = absoluteUrl(`/city/${cityId}`);
  const cityNodeId = `${cityUrl}#city`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "City",
        "@id": cityNodeId,
        name: [
          { "@language": "en", "@value": city.en },
          { "@language": "zh-CN", "@value": city.zh }
        ],
        url: cityUrl,
        containedInPlace: {
          "@type": "Country",
          name: "China"
        }
      },
      ...attractionsByCity(cityId).map((attraction) => ({
        "@type": "TouristAttraction",
        "@id": `${cityUrl}#${attraction.id}`,
        name: [
          { "@language": "en", "@value": attraction.nameEn },
          { "@language": "zh-CN", "@value": attraction.nameZh }
        ],
        description: attraction.whyEn,
        image: attraction.imageUrl,
        url: attraction.officialUrl,
        address: {
          "@type": "PostalAddress",
          addressLocality: city.en,
          addressRegion: attraction.districtEn,
          addressCountry: "CN"
        },
        containedInPlace: {
          "@id": cityNodeId
        }
      }))
    ]
  };
}

function cityBreadcrumbStructuredData(cityId: CityId) {
  const city = CITY_LABELS[cityId];

  return breadcrumbListJsonLd([
    { name: "Home", path: "/" },
    { name: "City", path: `/city/${cityId}` },
    { name: city.zh }
  ]);
}

export default function CityPage() {
  const { cityId } = useParams<{ cityId: string }>();
  const { lang } = useLang();
  const isZh = lang === "zh";

  if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
    return (
      <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
        <h1 className="text-2xl font-bold">{isZh ? "鏈煡鍩庡競" : "Unknown city"}</h1>
        <Link to="/" className="text-jade hover:underline">{isZh ? "杩斿洖棣栭〉" : "鈫?Home"}</Link>
      </main>
    );
  }

  const id = cityId as CityId;
  const label = CITY_LABELS[id];
  const cityJsonLd = cityStructuredData(id);
  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
      />
      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
      <header className="mb-6 flex flex-col gap-2">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
          {isZh ? "鈫?鍏ㄩ儴鍩庡競" : "鈫?All cities"}
        </Link>
        <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
        <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
      </header>

      <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
        <CityNav />

        <div className="flex min-w-0 flex-col gap-12">
          <CityIntro cityId={id} />
          <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
          <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
          <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>
          <section id="food" className="scroll-mt-24"><FoodGuide cityId={id} /></section>
          <section id="emergency" className="scroll-mt-24"><EmergencyBriefing cityId={id} /></section>
          <section id="portals" className="scroll-mt-24"><CityFurtherReading cityId={id} /></section>

          <section className="flex flex-col gap-3 rounded-xl border border-dashed border-line bg-paper p-6">
            <h2 className="text-base font-bold">{isZh ? "Phase 2 鍗冲皢涓婄嚎" : "Phase 2 鈥?coming soon"}</h2>
            <p className="text-sm text-muted">
              {isZh
                ? "鍚戜腑鍥芥湰鍦扮敤鎴锋彁闂€佸垎浜綘鐨勬梾琛岀粡楠屽姛鑳芥鍦ㄥ紑鍙戙€?
                : "Ask Chinese locals and share-your-trip features are in development."}
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest">
              <Link to="/ask" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
                {isZh ? "鍚戜腑鍥芥湰鍦扮敤鎴锋彁闂? : "Ask Chinese locals"}
              </Link>
              <Link to="/share" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
                {isZh ? "鍒嗕韩鏃呰" : "Share your trip"}
              </Link>
            </div>
          </section>

          <SourcesNote />
        </div>

        <CityImagePanel cityId={id} />
      </div>
      </main>
    </>
  );
}


 succeeded in 1580ms:
import { useMemo, useState } from "react";
import clsx from "clsx";
import { attractionsByCity } from "../../data/city-attractions";
import type { CityId } from "../../data/transport";
import { useLang } from "../../store/language";

type Props = { cityId: CityId };

const CITY_BLURB: Record<CityId, { en: string; zh: string }> = {
  beijing: {
    en: "Beijing is the imperial capital 鈥?600 years of palace, temple, and tomb sit on a single north鈥搒outh axis through the city. The Great Wall is an hour out. Hutong alleys hide the best dumplings. Plan 4鈥? days; you will not be bored.",
    zh: "鍖椾含鏄腑鍥界殑鏀挎不涓庢枃鍖栭閮解€斺€?00 骞寸殗鍩庝腑杞寸嚎銆佹晠瀹€佸寳閮婄殑闀垮煄銆佽€佸煄鑳″悓銆佸叏鍥芥渶瀵嗛泦鐨勫崥鐗╅涓庡搴欍€傚鍥芥父瀹㈤璁块€氬父鍋滅暀 4鈥? 澶┿€?
  },
  shanghai: {
    en: "Shanghai is China at its most international. The Bund 鈥?old European banks on the river 鈥?stares at the glass towers of Pudong. The former French Concession is plane trees, garden villas, and good coffee. Hangzhou and Suzhou are an hour away by high-speed rail. 3鈥? days does it.",
    zh: "涓婃捣鏄腑鍥界殑鍟嗚锤闂ㄦ埛鈥斺€斿婊╃鐣岄摱琛岀兢姝ｅ娴︿笢閲戣瀺澶╅檯绾匡紱鍘熸硶绉熺晫姊ф琛楅亾涓庡挅鍟￠鏂囧寲锛涗竴灏忔椂楂橀搧鍙揪鏉窞瑗挎箹涓庤嫃宸炲洯鏋椼€傞璁垮缓璁?3鈥? 澶┿€?
  },
  guangzhou: {
    en: "Guangzhou has been a trading port for 2,200 years and still works that way. Yum cha at dawn, Cantonese spoken on the street, Lingnan-style courtyards, and the Pearl River through it all. Twice a year (April and October) the Canton Fair fills the city; prices spike. Hong Kong is 47 minutes away by HSR. 2鈥? days is enough for a first trip.",
    zh: "骞垮窞鏄崕鍗?2200 骞村晢閮解€斺€旀竻鏅ㄩギ鑼躲€佸箔鍗楀缓绛戙€佺彔姹熴€佺菠璇煄甯傛皵璐紝鍗婂勾涓€灞婄殑骞夸氦浼氾紙4 鏈?/ 10 鏈堬級鏈熼棿浠锋牸鏄庢樉涓婃定銆傞珮閾?47 鍒嗛挓鍒伴娓タ涔濋緳銆傞璁垮畨鎺?2鈥? 澶╄緝鍚堥€傘€?
  },
  shenzhen: {
    en: "Shenzhen went from fishing village to one of the world's top tech cities in 40 years. It's also Hong Kong's backyard 鈥?five border crossings, an hour by metro from Causeway Bay. Most foreigners come for a 1鈥? day shopping/eating run rather than a stand-alone trip. Window of the World, the OCT creative district, and Dapeng's old coast are the main draws.",
    zh: "娣卞湷鏄腑鍥芥渶骞磋交鐨勪竴绾垮煄甯傗€斺€?0 骞翠粠娓旀潙鍒板叏鐞冪鎶€涓績銆備笘鐣屼箣绐椼€佸崕渚ㄥ煄鍒涙剰鍥€佽泧鍙ｅ绫嶅弸濂芥捣婊ㄣ€佸ぇ楣忓彜鍩庛€? 涓繁娓檰娴峰彛宀糕€斺€旀洿甯歌瀹夋帓涓烘繁娓法澧?1鈥? 澶╄绋嬶紝鑰岄潪鍗曠嫭鐩殑鍦般€?
  }
};

const CITY_FACTS: Record<CityId, Array<{ en: string; zh: string }>> = {
  beijing: [
    { en: "16 districts", zh: "16 涓鏀垮尯" },
    { en: "21.9 M residents", zh: "甯镐綇浜哄彛 2,190 涓? },
    { en: "PEK + PKX airports", zh: "棣栭兘 + 澶у叴 鍙屾満鍦? },
    { en: "29 metro lines / 523 stations", zh: "29 鏉″湴閾佺嚎 / 523 绔? }
  ],
  shanghai: [
    { en: "16 districts", zh: "16 涓鏀垮尯" },
    { en: "24.9 M residents", zh: "甯镐綇浜哄彛 2,490 涓? },
    { en: "PVG + SHA airports", zh: "娴︿笢 + 铏规ˉ 鍙屾満鍦? },
    { en: "21 metro lines / 517 stations", zh: "21 鏉″湴閾佺嚎 / 517 绔? }
  ],
  guangzhou: [
    { en: "11 districts", zh: "11 涓鏀垮尯" },
    { en: "18.7 M residents", zh: "甯镐綇浜哄彛 1,870 涓? },
    { en: "CAN (Baiyun) 鈥?T3 opened 2025-10", zh: "鐧戒簯鏈哄満 鈥?T3 2025-10 鍚敤" },
    { en: "16 metro lines + Foshan + intercity rail", zh: "16 鏉″湴閾?+ 浣涘北绾?+ 鍩庨檯" }
  ],
  shenzhen: [
    { en: "10 districts", zh: "10 涓鏀垮尯" },
    { en: "17.8 M residents", zh: "甯镐綇浜哄彛 1,780 涓? },
    { en: "SZX (Bao'an) airport", zh: "瀹濆畨鏈哄満" },
    { en: "5 HK border crossings", zh: "5 涓繁娓彛宀? }
  ]
};

const ALL_KEY = "__all";

export default function CityIntro({ cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const attractions = attractionsByCity(cityId);
  const blurb = CITY_BLURB[cityId];
  const facts = CITY_FACTS[cityId];

  const districts = useMemo(() => {
    const seen = new Map<string, { en: string; zh: string; count: number }>();
    for (const a of attractions) {
      const key = a.districtEn;
      const existing = seen.get(key);
      if (existing) existing.count += 1;
      else seen.set(key, { en: a.districtEn, zh: a.districtZh, count: 1 });
    }
    return Array.from(seen.entries()).map(([key, value]) => ({ key, ...value }));
  }, [attractions]);

  const [selected, setSelected] = useState<string>(ALL_KEY);

  const visible = selected === ALL_KEY
    ? attractions
    : attractions.filter((a) => a.districtEn === selected);

  return (
    <section id="intro" className="flex flex-col gap-6 scroll-mt-24">
      <div className="flex flex-col gap-3">
        <p className="text-base leading-relaxed text-ink/85">
          {isZh ? blurb.zh : blurb.en}
        </p>
        <ul className="flex flex-wrap gap-2">
          {facts.map((f) => (
            <li
              key={f.en}
              className="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-muted"
            >
              {isZh ? f.zh : f.en}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <header className="flex flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "鏍囧織鏅偣 路 鎸夊尯绛涢€? : "Signature attractions 路 filter by district"}
          </span>
          <h2 className="text-xl font-bold">
            {isZh ? "鎸夊尯鏌ョ湅鏅偣" : "Pick a district to see what's there"}
          </h2>
        </header>

        <div role="tablist" aria-label={isZh ? "鍖虹瓫閫? : "District filter"} className="flex flex-wrap gap-2">
          <DistrictChip
            label={isZh ? "鍏ㄩ儴" : "All"}
            count={attractions.length}
            active={selected === ALL_KEY}
            onClick={() => setSelected(ALL_KEY)}
          />
          {districts.map((d) => (
            <DistrictChip
              key={d.key}
              label={isZh ? d.zh : d.en}
              count={d.count}
              active={selected === d.key}
              onClick={() => setSelected(d.key)}
            />
          ))}
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {visible.map((a) => (
            <li key={a.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
              <div className="flex items-center justify-between gap-2">
                <span
                  className={clsx(
                    "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                    a.tier === "must-visit"
                      ? "bg-jade-soft text-jade"
                      : "bg-amber-100 text-amber-900"
                  )}
                >
                  {a.tier === "must-visit"
                    ? isZh ? "蹇呯湅" : "Must-visit"
                    : isZh ? "鍊煎緱涓€鐪? : "Worth-it"}
                </span>
                <span className="text-[10px] text-muted">{isZh ? a.districtZh : a.districtEn}</span>
              </div>
              <strong className="text-sm leading-tight">{isZh ? a.nameZh : a.nameEn}</strong>
              <p className="text-xs leading-relaxed text-ink/80">
                {isZh ? a.whyZh : a.whyEn}
              </p>
              <a
                href={a.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="self-start text-[10px] font-bold uppercase tracking-wider text-jade hover:underline"
              >
                {isZh ? "瀹樻柟椤甸潰 鈫? : "Official 鈫?}
              </a>
            </li>
          ))}
        </ul>
        {visible.length === 0 && (
          <p className="rounded-lg border border-dashed border-line bg-paper p-4 text-sm text-muted">
            {isZh ? "鏈尯鏆傛棤鏀跺綍鏅偣" : "No attractions yet for this district."}
          </p>
        )}
      </div>
    </section>
  );
}

function DistrictChip({
  label,
  count,
  active,
  onClick
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={clsx(
        "rounded-full border px-3 py-1.5 text-xs font-bold transition",
        active
          ? "border-ink bg-ink text-white"
          : "border-line bg-white text-ink hover:border-jade hover:text-jade"
      )}
    >
      {label}
      <span className={clsx("ml-1.5 text-[10px]", active ? "text-white/70" : "text-muted")}>
        {count}
      </span>
    </button>
  );
}


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Raw src\\components\\city\\CityNav.tsx" in c:\Users\h\Documents\New project 2\v2
 succeeded in 559ms:
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useLang } from "../../store/language";

type CityNavItem = { id: string; en: string; zh: string };

const CITY_NAV_ITEMS: CityNavItem[] = [
  { id: "intro", en: "City overview", zh: "城市介绍" },
  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
  { id: "payments", en: "Payments", zh: "支付" },
  { id: "transport", en: "Transport", zh: "交通" },
  { id: "food", en: "Food", zh: "美食" },
  { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
  { id: "portals", en: "Official portals", zh: "官方延伸" }
];

export default function CityNav() {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const [active, setActive] = useState<string>("intro");

  useEffect(() => {
    const sections = CITY_NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label={isZh ? "城市页导航" : "City page navigation"}
      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
    >
      <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
        {CITY_NAV_ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="shrink-0 lg:shrink">
              <a
                href={`#${item.id}`}
                className={clsx(
                  "block whitespace-nowrap rounded-lg px-3 py-2 text-sm transition lg:whitespace-normal",
                  isActive
                    ? "bg-jade-soft font-bold text-jade"
                    : "text-ink/80 hover:bg-paper hover:text-ink"
                )}
              >
                {isZh ? item.zh : item.en}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Raw src\\pages\\SourcesPage.tsx" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"SourceIds|sourceIds\\(|transportSourceIds|paymentsSourceIds|foodSourceIds|emergencySourceIds|getSource|sources\" src" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Encoding utf8 -Raw package.json' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Raw src\\styles\\globals.css" in c:\Users\h\Documents\New project 2\v2
 succeeded in 827ms:
import { Link } from "react-router";
import { sources } from "../data/sources";
import { useLang } from "../store/language";

export default function SourcesPage() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  const all = Object.values(sources);
  const official = all.filter((s) => !s.community);
  const community = all.filter((s) => s.community);

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-12">
      <header className="flex flex-col gap-3">
        <span className="self-start text-xs font-bold uppercase tracking-widest text-muted">
          {isZh ? "信息来源汇总" : "Reference list"}
        </span>
        <h1 className="text-3xl font-bold leading-tight">
          {isZh ? "全部引用源" : "All references"}
        </h1>
        <p className="text-sm leading-relaxed text-muted">
          {isZh
            ? `本网站全部数据均来自下列 ${all.length} 个公开来源。其中 ${official.length} 条来自政府或机构官方网站，${community.length} 条来自旅行社区博客 / 论坛 / 在华外籍人士作者，用于补充官方源未覆盖的实际操作注意事项。每条都标注域名 + 出版日期 + 我们最近一次核验日期，可点击查看原文。`
            : `Every fact on this site traces to one of the ${all.length} sources below. ${official.length} come from official government and institutional websites; ${community.length} come from traveler community blogs and forums covering practical pitfalls that official sources do not publish. Each entry shows the domain, the publication date, and our last verification date — click to read the original.`}
        </p>
      </header>

      <Section
        titleEn={`Official sources (${official.length})`}
        titleZh={`官方源（${official.length} 条）`}
        descEn="Chinese government bodies, central ministries, city governments, hospitals, banks, payment networks, foreign embassies in China."
        descZh="中国政府部委、城市政府、医院、银行、支付组织、外国驻华使领馆。"
      >
        <ReferenceList items={official} isZh={isZh} />
      </Section>

      <Section
        titleEn={`Traveler community references (${community.length})`}
        titleZh={`旅行社区资料（${community.length} 条）`}
        descEn="Foreign travel bloggers, expat publications, Reddit threads and similar. Used only for operational pitfalls that .gov.cn does not publish; never used as authority for policy facts, prices, addresses, or hours."
        descZh="境外旅行博主、在华外籍人士媒体、Reddit 等。仅用于政府未公开的实际操作注意事项；政策、价格、地址、营业时间不引用社区源。"
      >
        <ReferenceList items={community} isZh={isZh} />
      </Section>

      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
        {isZh ? "← 返回首页" : "← Back home"}
      </Link>
    </main>
  );
}

function Section({
  titleEn,
  titleZh,
  descEn,
  descZh,
  children
}: {
  titleEn: string;
  titleZh: string;
  descEn: string;
  descZh: string;
  children: React.ReactNode;
}) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  return (
    <section className="flex flex-col gap-3">
      <header>
        <h2 className="text-xl font-bold">{isZh ? titleZh : titleEn}</h2>
        <p className="text-xs text-muted">{isZh ? descZh : descEn}</p>
      </header>
      {children}
    </section>
  );
}

type Item = {
  id: string;
  url: string;
  publisher: string;
  pageTitleEn: string;
  publishedDate?: string;
  verifiedDate: string;
  domain: string;
};

function ReferenceList({ items, isZh }: { items: Item[]; isZh: boolean }) {
  const sorted = [...items].sort((a, b) => a.publisher.localeCompare(b.publisher));
  return (
    <ol className="grid gap-1.5 text-sm leading-relaxed">
      {sorted.map((s, i) => (
        <li key={s.id} className="flex gap-2">
          <span className="shrink-0 tabular-nums text-muted">[{i + 1}]</span>
          <a
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-ink hover:text-jade hover:underline"
          >
            <span className="font-bold">{s.publisher}</span>
            <span className="text-muted"> · {s.pageTitleEn}</span>
            {s.publishedDate && <span className="text-muted"> · {s.publishedDate}</span>}
            <span className="ml-1 text-xs text-muted/70">— {s.domain}</span>
            <span className="ml-2 text-[10px] uppercase tracking-wider text-muted/70">
              {isZh ? `核验 ${s.verifiedDate}` : `verified ${s.verifiedDate}`}
            </span>
          </a>
        </li>
      ))}
    </ol>
  );
}


 succeeded in 865ms:
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


 succeeded in 873ms:
src\App.tsx:27:            <Route path="/sources" element={<SourcesPage />} />
src\routes.ts:10:  route("sources", "./pages/SourcesPage.tsx"),
src\pages\HomePage.tsx:80:            : "Policy and official information cite Chinese government sources; community tips and operational pitfalls are attributed."}
src\pages\SourcesPage.tsx:2:import { sources } from "../data/sources";
src\pages\SourcesPage.tsx:9:  const all = Object.values(sources);
src\pages\SourcesPage.tsx:25:            : `Every fact on this site traces to one of the ${all.length} sources below. ${official.length} come from official government and institutional websites; ${community.length} come from traveler community blogs and forums covering practical pitfalls that official sources do not publish. Each entry shows the domain, the publication date, and our last verification date — click to read the original.`}
src\pages\SourcesPage.tsx:30:        titleEn={`Official sources (${official.length})`}
src\components\layout\SiteFooter.tsx:11:        <Link to="/sources" className="hover:text-jade">
src\data\emergency.ts:220:import { pitfallSourceIds } from "./practical-other";
src\data\emergency.ts:222:export function emergencySourceIds(cityId?: CityId): string[] {
src\data\emergency.ts:236:  pitfallSourceIds("emergency", cityId).forEach((id) => ids.add(id));
src\lib\search.ts:2:import { provinceHitAreas } from "../data/map-sources";
src\data\entry-policies.ts:14: * Source id in sources.ts: nia-unilateral-list
src\data\entry-policies.ts:87: * but does not enumerate ports or countries; we reference both sources together.
src\data\entry-policies.ts:118: * by the State Council 2025-11-04 announcement (sources.ts: state-council-240h)
src\data\entry-policies.ts:204:import { pitfallSourceIds } from "./practical-other";
src\data\entry-policies.ts:206:export const entryPolicySourceIds: string[] = [
src\data\entry-policies.ts:211:  ...pitfallSourceIds("entry")
src\components\pillar\PaymentsPractical.tsx:36:          {isZh ? "Alipay / 微信外卡用户常见问题" : "What official sources don't tell you"}
src\data\food.ts:170:import { pitfallSourceIds } from "./practical-other";
src\data\food.ts:172:export function foodSourceIds(cityId?: CityId): string[] {
src\data\food.ts:181:  pitfallSourceIds("food", cityId).forEach((id) => ids.add(id));
src\data\i18n.ts:56:    sourcesTitle: "Image and Source Rules",
src\data\i18n.ts:57:    sourcesBody:
src\data\i18n.ts:119:    sourcesTitle: "图片与来源规则",
src\data\i18n.ts:120:    sourcesBody: "此模板不使用抓取的网络图片。正式页面应使用官方事实、授权游客笔记、合规图片和可见署名。",
src\data\payments.ts:196:import { practicalPaymentsSourceIds } from "./practical-payments";
src\data\payments.ts:198:export function paymentsSourceIds(cityId?: CityId): string[] {
src\data\payments.ts:207:  practicalPaymentsSourceIds().forEach((id) => ids.add(id));
src\components\common\SourcesNote.tsx:12:          <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
src\components\common\SourcesNote.tsx:18:          Every figure, policy, and address on this page is cited from official Chinese government sources. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
src\components\common\SourcesNote.tsx:19:          <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
src\data\practical-other.ts:368:export function pitfallSourceIds(pillar?: PillarId, cityId?: CityId): string[] {
src\data\practical-payments.ts:154:    bodyEn: "Since 2026-02-01 Chinese law requires merchants to accept physical RMB; refusing now carries penalties. Reliable cash sources: 7-Eleven / FamilyMart / Lawson; ICBC / BOC / CCB ATMs accept Visa/Mastercard with English UI.",
src\data\practical-payments.ts:201:export const practicalPaymentsSourceIds = (): string[] =>
src\store\atlas.ts:3:import { provinceHitAreas } from "../data/map-sources";
src\data\sources.ts:939:export const sources: Record<string, SourceCitation> = Object.fromEntries(
src\data\sources.ts:943:export const getSource = (id: string): SourceCitation | undefined => sources[id];
src\data\top-questions.ts:77:export const topQuestionSourceIds: string[] = topQuestions.map((q) => q.sourceId);
src\components\map\Map3D.tsx:9:import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
src\data\transport.ts:388:import { pitfallSourceIds } from "./practical-other";
src\data\transport.ts:390:export function transportSourceIds(cityId?: CityId): string[] {
src\data\transport.ts:400:  pitfallSourceIds("transport", cityId).forEach((id) => ids.add(id));
src\components\map\ProvinceHitAreaLayer.tsx:1:import { provinceHitAreas } from "../../data/map-sources";
src\components\map\ProvinceLabelLayer.tsx:5:import { provinceHitAreas } from "../../data/map-sources";
src\components\map\ProvinceShapeLayer.tsx:5:import { provinceHitAreas } from "../../data/map-sources";
src\components\map\SpecialRegionMarkers.tsx:2:import { provinceHitAreas } from "../../data/map-sources";

 succeeded in 870ms:
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


web search: 
web search: NOAA climate normals Beijing monthly temperature rainfall
web search: 
web search: site:english.beijing.gov.cn Beijing climate average rainfall monthly spring sand dust meteorological
web search: 
web search: site:www.gz.gov.cn 广州 气候 特征 降雨 台风 气象
web search: 
web search: https://www.ncei.noaa.gov/products/wmo-climate-normals
web search: 
web search: 
web search: 
web search: 
web search: 
web search: 
codex
官方气候常值放在 NOAA/WMO 的 1991-2020 normals 目录里；网页目录较慢，我会直接用终端拉取目录/CSV，城市特殊风险用各市气象局或政府源补充。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$url='"'https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/'; (Invoke-WebRequest -Uri "'$url -UseBasicParsing -TimeoutSec 60).Content.Substring(0,2000)' in c:\Users\h\Documents\New project 2\v2
 succeeded in 11962ms:
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<html>
 <head>
  <title>Index of /data/oceans/archive/arc0216/0253808/6.6/data/0-data/Region-2-WMO-Normals-9120</title>
 </head>
 <body>
<h1>Index of /data/oceans/archive/arc0216/0253808/6.6/data/0-data/Region-2-WMO-Normals-9120</h1>
  <table>
   <tr><th valign="top"><img src="/icons/blank.gif" alt="[ICO]"></th><th><a href="?C=N;O=D">Name</a></th><th><a href="?C=M;O=A">Last modified</a></th><th><a href="?C=S;O=A">Size</a></th><th><a href="?C=D;O=A">Description</a></th></tr>
   <tr><th colspan="5"><hr></th></tr>
<tr><td valign="top"><img src="/icons/back.gif" alt="[PARENTDIR]"></td><td><a href="/data/oceans/archive/arc0216/0253808/6.6/data/0-data/">Parent Directory</a></td><td>&nbsp;</td><td align="right">  - </td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/folder.gif" alt="[DIR]"></td><td><a href="Bahrain/">Bahrain/</a></td><td align="right">2023-07-26 13:19  </td><td align="right">  - </td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/folder.gif" alt="[DIR]"></td><td><a href="Bangladesh/">Bangladesh/</a></td><td align="right">2024-05-06 17:45  </td><td align="right">  - </td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/folder.gif" alt="[DIR]"></td><td><a href="China/">China/</a></td><td align="right">2023-07-26 13:20  </td><td align="right">  - </td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/folder.gif" alt="[DIR]"></td><td><a href="HongKongChina/">HongKongChina/</a></td><td align="right">2023-07-26 13:20  </td><td align="right">  - </td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/folder.gif" alt="[DIR]"></td><td><a href="India/">India/</a></td><td align="right">2023-07-26 13:22  </td><td align="right">  - </td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/folder.gif" alt="[DIR]"></td><td><a href="Iran/">Iran/</a></td><td align="right">2023-07-26 13:20  </td><td align="right">  - </td><td>&nbsp;</td></tr>
<tr><td valign="top"

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$url='"'https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/'; "'$content=(Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 60).Content; $content | Select-String -Pattern '"'Beijing|Shanghai|Guangzhou|Shenzhen|csv|CSV' -AllMatches" in c:\Users\h\Documents\New project 2\v2
 succeeded in 11781ms:

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<html>
 <head>
  <title>Index of /data/oceans/archive/arc0216/0253808/6.6/data/0-data/Region-2-WMO-Normals-9120/China</title>
 </head>
 <body>
<h1>Index of /data/oceans/archive/arc0216/0253808/6.6/data/0-data/Region-2-WMO-Normals-9120/China</h1>
  <table>
   <tr><th valign="top"><img src="/icons/blank.gif" alt="[ICO]"></th><th><a href="?C=N;O=D">Name</a></th><th><a href="?
C=M;O=A">Last modified</a></th><th><a href="?C=S;O=A">Size</a></th><th><a href="?C=D;O=A">Description</a></th></tr>
   <tr><th colspan="5"><hr></th></tr>
<tr><td valign="top"><img src="/icons/back.gif" alt="[PARENTDIR]"></td><td><a href="/data/oceans/archive/arc0216/025380
8/6.6/data/0-data/Region-2-WMO-Normals-9120/">Parent Directory</a></td><td>&nbsp;</td><td align="right">  - </td><td>&n
bsp;</td></tr>
<tr><td valign="top"><img src="/icons/folder.gif" alt="[DIR]"></td><td><a href="CSV/">CSV/</a></td><td align="right">20
23-07-26 13:20  </td><td align="right">  - </td><td>&nbsp;</td></tr>
   <tr><th colspan="5"><hr></th></tr>
</table>
<script id="_fed_an_ua_tag" type="text/javascript" src="https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js
?agency=DOC&subagency=NOAA"></script></body></html>




exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$url='"'https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/'; "'$content=(Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 60).Content; $content | Select-String -Pattern '"'Beijing|Shanghai|Guangzhou|Shenzhen|csv|CSV|54511|58367|59287|59493' -AllMatches" in c:\Users\h\Documents\New project 2\v2
 succeeded in 12452ms:

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<html>
 <head>
  <title>Index of /data/oceans/archive/arc0216/0253808/6.6/data/0-data/Region-2-WMO-Normals-9120/China/CSV</title>
 </head>
 <body>
<h1>Index of /data/oceans/archive/arc0216/0253808/6.6/data/0-data/Region-2-WMO-Normals-9120/China/CSV</h1>
  <table>
   <tr><th valign="top"><img src="/icons/blank.gif" alt="[ICO]"></th><th><a href="?C=N;O=D">Name</a></th><th><a href="?
C=M;O=A">Last modified</a></th><th><a href="?C=S;O=A">Size</a></th><th><a href="?C=D;O=A">Description</a></th></tr>
   <tr><th colspan="5"><hr></th></tr>
<tr><td valign="top"><img src="/icons/back.gif" alt="[PARENTDIR]"></td><td><a href="/data/oceans/archive/arc0216/025380
8/6.6/data/0-data/Region-2-WMO-Normals-9120/China/">Parent Directory</a></td><td>&nbsp;</td><td align="right">  - </td>
<td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="ABAG_QI_53192.csv">ABAG_QI_53192.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="AKQI_51711.csv">AKQI_51711.csv</a></td><t
d align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="ALAR_51730.csv">ALAR_51730.csv</a></td><t
d align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="ALTAY_51076.csv">ALTAY_51076.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="ANKANG_57245.csv">ANKANG_57245.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="ANQING_58424.csv">ANQING_58424.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="ARXAN_50727.csv">ARXAN_50727.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="BACHU_51716.csv">BACHU_51716.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="BAISE_59211.csv">BAISE_59211.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="BARKAM_56172.csv">BARKAM_56172.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="BATANG_56247.csv">BATANG_56247.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="BAYANBULAK_51542.csv">BAYANBULAK_51542.cs
v</a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="BAYAN_MOD_52495.csv">BAYAN_MOD_52495.csv<
/a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="BEIHAI_59644.csv">BEIHAI_59644.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="BEIJING_54511.csv">BEIJING_54511.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="BENGBU_58221.csv">BENGBU_58221.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="BOXIAN_58102.csv">BOXIAN_58102.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="BUGT_50632.csv">BUGT_50632.csv</a></td><t
d align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="CHANGCHUN_54161.csv">CHANGCHUN_54161.csv<
/a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="CHANGDE_57662.csv">CHANGDE_57662.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="CHANGSHA_57687.csv">CHANGSHA_57687.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="CHENGDE_54423.csv">CHENGDE_54423.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="CHENGSHANTOU_54776.csv">CHENGSHANTOU_5477
6.csv</a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="CHENZHOU_57972.csv">CHENZHOU_57972.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="CHIFENG_54218.csv">CHIFENG_54218.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="CHONGQING_57516.csv">CHONGQING_57516.csv<
/a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DACHEN_DAO_58666.csv">DACHEN_DAO_58666.cs
v</a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DALIAN_54662.csv">DALIAN_54662.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DALI_56751.csv">DALI_56751.csv</a></td><t
d align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DANDONG_54497.csv">DANDONG_54497.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DARLAG_56046.csv">DARLAG_56046.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DA_QAIDAM_52713.csv">DA_QAIDAM_52713.csv<
/a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DA_XIAN_57328.csv">DA_XIAN_57328.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DEGE_56144.csv">DEGE_56144.csv</a></td><t
d align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DELINGHA_52737.csv">DELINGHA_52737.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DENGQEN_56116.csv">DENGQEN_56116.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DEQEN_56444.csv">DEQEN_56444.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DINGHAI_58477.csv">DINGHAI_58477.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DINGTAO_54909.csv">DINGTAO_54909.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DONGFANG_59838.csv">DONGFANG_59838.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DONGSHENG_53543.csv">DONGSHENG_53543.csv<
/a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DONGTAI_58251.csv">DONGTAI_58251.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DOULAN_52836.csv">DOULAN_52836.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="DUOLUN_54208.csv">DUOLUN_54208.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="ENSHI_57447.csv">ENSHI_57447.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="ERENHOT_53068.csv">ERENHOT_53068.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="FUJIN_50788.csv">FUJIN_50788.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="FUYANG_58203.csv">FUYANG_58203.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="FUYUN_51087.csv">FUYUN_51087.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="FUZHOU_58847.csv">FUZHOU_58847.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="GANGCA_52754.csv">GANGCA_52754.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="GANYU_58040.csv">GANYU_58040.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="GANZHOU_57993.csv">GANZHOU_57993.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="GAOPING_57411.csv">GAOPING_57411.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="GOLMUD_52818.csv">GOLMUD_52818.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="GUAIZIHU_52378.csv">GUAIZIHU_52378.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="GUANGNAN_59007.csv">GUANGNAN_59007.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="GUANGZHOU_59287.csv">GUANGZHOU_59287.csv<
/a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="GUILIN_57957.csv">GUILIN_57957.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="GUIYANG_57816.csv">GUIYANG_57816.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HAIKOU_59758.csv">HAIKOU_59758.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HAILS_53231.csv">HAILS_53231.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HAILUN_50756.csv">HAILUN_50756.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HALIUT_53336.csv">HALIUT_53336.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HAMI_52203.csv">HAMI_52203.csv</a></td><t
d align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HANGZHOU_58457.csv">HANGZHOU_58457.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HANZHONG_57127.csv">HANZHONG_57127.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HARBIN_50953.csv">HARBIN_50953.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HECHI_59023.csv">HECHI_59023.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HENGCHUN_59559.csv">HENGCHUN_59559.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 12K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HEQU_53564.csv">HEQU_53564.csv</a></td><t
d align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HEYUAN_59293.csv">HEYUAN_59293.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HEZUO_56080.csv">HEZUO_56080.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HOBOKSAR_51156.csv">HOBOKSAR_51156.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HOHHOT_53463.csv">HOHHOT_53463.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HOTAN_51828.csv">HOTAN_51828.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HUADE_53391.csv">HUADE_53391.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HUADIAN_54273.csv">HUADIAN_54273.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HUAIYIN_58141.csv">HUAIYIN_58141.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="HUOSHAN_58314.csv">HUOSHAN_58314.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="JARTAI_53502.csv">JARTAI_53502.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="JARUD_QI_54026.csv">JARUD_QI_54026.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="JINAN_54823.csv">JINAN_54823.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="JINGDEZHEN_58527.csv">JINGDEZHEN_58527.cs
v</a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="JINGHE_51334.csv">JINGHE_51334.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="JINGHE_57131.csv">JINGHE_57131.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="JINING_53480.csv">JINING_53480.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="JINZHOU_54337.csv">JINZHOU_54337.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="JIULONG_56462.csv">JIULONG_56462.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="JIUQUAN_52533.csv">JIUQUAN_52533.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="JIXI_50978.csv">JIXI_50978.csv</a></td><t
d align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="JI_AN_54377.csv">JI_AN_54377.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="JI_AN_57799.csv">JI_AN_57799.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="KARAMAY_51243.csv">KARAMAY_51243.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="KASHI_51709.csv">KASHI_51709.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="KORLA_51656.csv">KORLA_51656.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="KUNMING_56778.csv">KUNMING_56778.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="KUQA_51644.csv">KUQA_51644.csv</a></td><t
d align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="LAN_YU_59567.csv">LAN_YU_59567.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 12K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="LAOHEKOU_57265.csv">LAOHEKOU_57265.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="LENGHU_52602.csv">LENGHU_52602.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="LETING_54539.csv">LETING_54539.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="LHASA_55591.csv">LHASA_55591.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="LIJING_56651.csv">LIJING_56651.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="LINCANG_56951.csv">LINCANG_56951.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="LINDONG_54027.csv">LINDONG_54027.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="LINGLING_57866.csv">LINGLING_57866.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="LINHE_53513.csv">LINHE_53513.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="LINJIANG_54374.csv">LINJIANG_54374.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="LITANG_56257.csv">LITANG_56257.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="LONGKOU_54753.csv">LONGKOU_54753.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="LONGZHOU_59417.csv">LONGZHOU_59417.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="LUSHI_57067.csv">LUSHI_57067.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="LUSI_58265.csv">LUSI_58265.csv</a></td><t
d align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="MADOI_56033.csv">MADOI_56033.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="MANDAL_53149.csv">MANDAL_53149.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="MANGNAI_51886.csv">MANGNAI_51886.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="MAZONG_SHAN_52323.csv">MAZONG_SHAN_52323.
csv</a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="MEI_XIAN_59117.csv">MEI_XIAN_59117.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="MENGLA_56969.csv">MENGLA_56969.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="MENGZI_56985.csv">MENGZI_56985.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="MINQIN_52681.csv">MINQIN_52681.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="MUDANJIANG_54094.csv">MUDANJIANG_54094.cs
v</a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="NAGQU_55299.csv">NAGQU_55299.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="NANCHANG_58606.csv">NANCHANG_58606.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="NANJING_58238.csv">NANJING_58238.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="NANNING_59431.csv">NANNING_59431.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="NANYANG_57178.csv">NANYANG_57178.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="NARAN_BULAG_53083.csv">NARAN_BULAG_53083.
csv</a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="NENJIANG_50557.csv">NENJIANG_50557.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="NYINGCHI_56312.csv">NYINGCHI_56312.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="OTOG_QI_53529.csv">OTOG_QI_53529.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="PAGRI_55773.csv">PAGRI_55773.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="PENGJIA_YU_58974.csv">PENGJIA_YU_58974.cs
v</a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 12K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="PINGLIANG_53915.csv">PINGLIANG_53915.csv<
/a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="POTOU_54618.csv">POTOU_54618.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="QAMDO_56137.csv">QAMDO_56137.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="QIAN_GORLOS_50949.csv">QIAN_GORLOS_50949.
csv</a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="QINGDAO_54857.csv">QINGDAO_54857.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="QIQIHAR_50745.csv">QIQIHAR_50745.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="QITAI_51379.csv">QITAI_51379.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="QUMARLEB_56021.csv">QUMARLEB_56021.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="QU_XIAN_58633.csv">QU_XIAN_58633.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="RUIAN_58752.csv">RUIAN_58752.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="RUO_ERGAI_56079.csv">RUO_ERGAI_56079.csv<
/a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="SANHU_DAO_59985.csv">SANHU_DAO_59985.csv<
/a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="SANYA_59948.csv">SANYA_59948.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="SERTAR_56152.csv">SERTAR_56152.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="SHACHE_51811.csv">SHACHE_51811.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="SHANGHAI__BAOSHAN_58362.csv">SHANGHAI__BA
OSHAN_58362.csv</a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="SHANTOU_59316.csv">SHANTOU_59316.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="SHANWEI_59501.csv">SHANWEI_59501.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="SHAOGUAN_59082.csv">SHAOGUAN_59082.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="SHAOWU_58725.csv">SHAOWU_58725.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="SHENGSI_58472.csv">SHENGSI_58472.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="SHENYANG_54342.csv">SHENYANG_54342.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="SHEYANG_58150.csv">SHEYANG_58150.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="SHIQUANHE_55228.csv">SHIQUANHE_55228.csv<
/a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="SHISANJIANFANG_51495.csv">SHISANJIANFANG_
51495.csv</a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="SIMAO_56964.csv">SIMAO_56964.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="SONGPAN_56182.csv">SONGPAN_56182.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="TACHENG_51133.csv">TACHENG_51133.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="TAIBEI_58968.csv">TAIBEI_58968.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 12K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="TAIDONG_59562.csv">TAIDONG_59562.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 12K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="TAINAN_59358.csv">TAINAN_59358.csv</a></t
d><td align="right">2023-06-21 18:57  </td><td align="right"> 12K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="TAIYUAN_53772.csv">TAIYUAN_53772.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="TAIZHONG_59158.csv">TAIZHONG_59158.csv</a
></td><td align="right">2023-06-21 18:57  </td><td align="right"> 12K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="TAZHONG_51747.csv">TAZHONG_51747.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="TENGCHONG_56739.csv">TENGCHONG_56739.csv<
/a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="TIKANLIK_51765.csv">TIKANLIK_51765.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="TINGRI_55664.csv">TINGRI_55664.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="TONGHE_50963.csv">TONGHE_50963.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="TONGLIAO_54135.csv">TONGLIAO_54135.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="TUOTUOHE_56004.csv">TUOTUOHE_56004.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="TURPAN_51573.csv">TURPAN_51573.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="ULIASTAI_50915.csv">ULIASTAI_50915.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="WEIFANG_54843.csv">WEIFANG_54843.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="WEINING_56691.csv">WEINING_56691.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="WENJIANG_56187.csv">WENJIANG_56187.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="WUDAOLIANG_52908.csv">WUDAOLIANG_52908.cs
v</a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="WUDU_56096.csv">WUDU_56096.csv</a></td><t
d align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="WUHAN_57494.csv">WUHAN_57494.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="WUTAI_SHAN_53588.csv">WUTAI_SHAN_53588.cs
v</a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="WUZHOU_59265.csv">WUZHOU_59265.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="WU_LU_MU_QI_51463.csv">WU_LU_MU_QI_51463.
csv</a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="XIAMEN_59134.csv">XIAMEN_59134.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="XICHANG_56571.csv">XICHANG_56571.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="XIGAZE_55578.csv">XIGAZE_55578.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="XILIN_HOT_54102.csv">XILIN_HOT_54102.csv<
/a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="XINGREN_57902.csv">XINGREN_57902.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="XINGTAI_53798.csv">XINGTAI_53798.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="XINING_52866.csv">XINING_52866.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="XINYANG_57297.csv">XINYANG_57297.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="XIN_BARAG_YOUQI_50603.csv">XIN_BARAG_YOUQ
I_50603.csv</a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="XISHA_DAO_59981.csv">XISHA_DAO_59981.csv<
/a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="XI_UJIMQIN_QI_54012.csv">XI_UJIMQIN_QI_54
012.csv</a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="XUZHOU_58027.csv">XUZHOU_58027.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="YANCHI_53723.csv">YANCHI_53723.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="YANGJIANG_59663.csv">YANGJIANG_59663.csv<
/a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="YANJI_54292.csv">YANJI_54292.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="YAN_AN_53845.csv">YAN_AN_53845.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="YIBIN_56492.csv">YIBIN_56492.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="YICHANG_57461.csv">YICHANG_57461.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="YICHUN_50774.csv">YICHUN_50774.csv</a></t
d><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="YINCHUAN_53614.csv">YINCHUAN_53614.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="YINGKOU_54471.csv">YINGKOU_54471.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="YONG_AN_58921.csv">YONG_AN_58921.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="YOUYANG_57633.csv">YOUYANG_57633.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="YULIN_53646.csv">YULIN_53646.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="YUMENZHEN_52436.csv">YUMENZHEN_52436.csv<
/a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="YUNCHENG_53959.csv">YUNCHENG_53959.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="YUSHU_56029.csv">YUSHU_56029.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="YU_ZHONG_52983.csv">YU_ZHONG_52983.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="ZADOI_56018.csv">ZADOI_56018.csv</a></td>
<td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="ZHANGJIAKOU_54401.csv">ZHANGJIAKOU_54401.
csv</a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="ZHANGWU_54236.csv">ZHANGWU_54236.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="ZHANGYE_52652.csv">ZHANGYE_52652.csv</a><
/td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="ZHENGZHOU_57083.csv">ZHENGZHOU_57083.csv<
/a></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
<tr><td valign="top"><img src="/icons/text.gif" alt="[TXT]"></td><td><a href="ZHIJIANG_57745.csv">ZHIJIANG_57745.csv</a
></td><td align="right">2023-02-13 12:08  </td><td align="right"> 14K</td><td>&nbsp;</td></tr>
   <tr><th colspan="5"><hr></th></tr>
</table>
<script id="_fed_an_ua_tag" type="text/javascript" src="https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js
?agency=DOC&subagency=NOAA"></script></body></html>




exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$base='"'https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/'; "'$files=@('"'BEIJING_54511.csv','SHANGHAI__BAOSHAN_58362.csv','GUANGZHOU_59287.csv'); foreach ("'$f in $files) { Write-Output "--- $f"; (Invoke-WebRequest -Uri ($base+$f) -UseBasicParsing -TimeoutSec 60).Content -split "`n" | Select-Object -First 35 }' in c:\Users\h\Documents\New project 2\v2
 succeeded in 32418ms:
--- BEIJING_54511.csv
World Meteorological Organization Climate Normals for 1991-2020,,,,,,,,,,,,,,,,
Single Station Data Sheet For All Climatological Surface Parameters,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
Station Header Record,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
Country_Name,CHINA,,,,,,,,,,,,,,,
Station_Name,BEIJING,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Latitude,Longitude,Station_Height,,,,,,,,,,,,,
54511,39|55|48|N,116|16|47|E,32.5,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO Integrated Global Observing System (WIGOS) Station Identifier (if available),,,,,,,,,,,,,,,,
0-20000-0-54511,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
Principal Climatological Surface Parameters,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
1,Precipitation_Total,mm,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,1,Sum,4,2.2,5.8,8.6,21.7,36.1,72.4,169.7,113.4,53.7,28.7,13.5,2.2,528.0
54511,1,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0
,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
2,Number_of_Days_with_Precipitation_>=_1_mm,count,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,2,Count,5,0.5,1.2,1.7,3.0,3.9,6.9,8.8,7.3,4.7,3.3,1.7,0.7,43.7
54511,2,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0
,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
--- SHANGHAI__BAOSHAN_58362.csv
World Meteorological Organization Climate Normals for 1991-2020,,,,,,,,,,,,,,,,
Single Station Data Sheet For All Climatological Surface Parameters,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
Station Header Record,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
Country_Name,CHINA,,,,,,,,,,,,,,,
Station_Name,SHANGHAI__BAOSHAN,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Latitude,Longitude,Station_Height,,,,,,,,,,,,,
58362,31|25|12|N,121|26|59|E,9.0,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO Integrated Global Observing System (WIGOS) Station Identifier (if available),,,,,,,,,,,,,,,,
0-20000-0-58362,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
Principal Climatological Surface Parameters,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
1,Precipitation_Total,mm,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
58362,1,Sum,4,69.8,64.0,86.5,77.1,90.2,196.7,146.9,210.1,116.5,71.4,57.5,49.3,1236.0
58362,1,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0
,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
2,Number_of_Days_with_Precipitation_>=_1_mm,count,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
58362,2,Count,5,7.8,7.2,9.6,8.0,7.8,10.4,8.5,10.2,7.3,5.1,6.6,6.1,94.6
58362,2,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0
,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
--- GUANGZHOU_59287.csv
World Meteorological Organization Climate Normals for 1991-2020,,,,,,,,,,,,,,,,
Single Station Data Sheet For All Climatological Surface Parameters,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
Station Header Record,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
Country_Name,CHINA,,,,,,,,,,,,,,,
Station_Name,GUANGZHOU,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Latitude,Longitude,Station_Height,,,,,,,,,,,,,
59287,23|13|11|N,113|28|48|E,71.5,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO Integrated Global Observing System (WIGOS) Station Identifier (if available),,,,,,,,,,,,,,,,
0-20000-0-59287,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
Principal Climatological Surface Parameters,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
1,Precipitation_Total,mm,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
59287,1,Sum,4,51.1,56.1,101.0,193.8,329.0,364.9,242.6,270.3,203.2,67.3,37.4,33.4,1950.1
59287,1,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0
,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
2,Number_of_Days_with_Precipitation_>=_1_mm,count,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
59287,2,Count,5,4.9,5.9,9.1,11.1,13.8,16.4,14.2,14.0,9.5,3.8,3.4,3.7,109.8
59287,2,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0
,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$base='"'https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/'; "'$files=@('"'BEIJING_54511.csv','SHANGHAI__BAOSHAN_58362.csv','GUANGZHOU_59287.csv'); foreach ("'$f in $files) { $content=(Invoke-WebRequest -Uri ($base+$f) -UseBasicParsing -TimeoutSec 60).Content -split "`r?`n"; Write-Output "--- $f"; $content | Where-Object { $_ -match '"',(Precipitation_Total|Mean_Daily_Maximum_Temperature|Mean_Daily_Minimum_Temperature|Mean_Daily_Mean_Temperature),' -or "'$_ -match '"'"'^[0-9]{5},(1|4|5|6),Mean|''^[0-9]{5},(1|4|5|6),Sum'"' } }" in c:\Users\h\Documents\New project 2\v2
 succeeded in 33055ms:
--- BEIJING_54511.csv
1,Precipitation_Total,mm,,,,,,,,,,,,,,
54511,1,Sum,4,2.2,5.8,8.6,21.7,36.1,72.4,169.7,113.4,53.7,28.7,13.5,2.2,528.0
54511,4,Mean,1,-6.9,-4.2,1.9,9.0,15.1,20.0,23.0,22.0,16.3,8.8,0.7,-5.0,8.4
54511,5,Mean,1,-2.7,0.6,7.5,15.1,21.3,25.3,27.2,26.1,21.2,13.8,5.2,-1.0,13.3
54511,6,Mean,1,1028.7,1025.7,1020.4,1013.9,1009.0,1004.8,1003.5,1007.5,1014.4,1020.8,1024.7,1028.4,1016.8
--- SHANGHAI__BAOSHAN_58362.csv
1,Precipitation_Total,mm,,,,,,,,,,,,,,
58362,1,Sum,4,69.8,64.0,86.5,77.1,90.2,196.7,146.9,210.1,116.5,71.4,57.5,49.3,1236.0
58362,4,Mean,1,2.2,3.6,6.9,12.0,17.5,21.7,25.9,25.9,22.2,16.7,10.7,4.4,14.1
58362,5,Mean,1,4.9,6.5,10.3,15.7,20.9,24.4,28.8,28.5,24.7,19.7,13.9,7.5,17.2
58362,6,Mean,1,1027.2,1025.0,1021.0,1015.9,1011.4,1006.9,1005.5,1006.9,1013.1,1019.9,1023.6,1027.2,1017.0
--- GUANGZHOU_59287.csv
1,Precipitation_Total,mm,,,,,,,,,,,,,,
59287,1,Sum,4,51.1,56.1,101.0,193.8,329.0,364.9,242.6,270.3,203.2,67.3,37.4,33.4,1950.1
59287,4,Mean,1,10.6,12.5,15.5,19.6,23.1,25.1,25.8,25.5,24.2,20.9,16.7,11.9,19.3
59287,5,Mean,1,13.8,15.5,18.3,22.5,26.0,27.9,28.9,28.6,27.4,24.4,20.2,15.4,22.4
59287,6,Mean,1,1021.3,1019.5,1016.6,1013.2,1009.4,1006.0,1005.5,1005.4,1009.3,1014.9,1018.4,1021.5,1013.4

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$base='"'https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv'; "'$content=(Invoke-WebRequest -Uri $base -UseBasicParsing -TimeoutSec 60).Content -split "`r?`n"; for($i=0; $i -lt $content.Length; $i++){ if($content[$i] -match '"'"'^Parameter_Code,Parameter_Name'"') { "'$content[$i..([Math]::Min($i+4,$content.Length-1))] } }' in c:\Users\h\Documents\New project 2\v2
 succeeded in 11704ms:
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
1,Precipitation_Total,mm,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,1,Sum,4,2.2,5.8,8.6,21.7,36.1,72.4,169.7,113.4,53.7,28.7,13.5,2.2,528.0
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
2,Number_of_Days_with_Precipitation_>=_1_mm,count,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,2,Count,5,0.5,1.2,1.7,3.0,3.9,6.9,8.8,7.3,4.7,3.3,1.7,0.7,43.7
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
3,Daily_Maximum_Temperature,Deg_C,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,3,Mean,1,2.3,6.1,13.2,21.0,27.2,30.8,31.8,30.7,26.5,19.3,10.3,3.7,18.6
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
4,Daily_Minimum_Temperature,Deg_C,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,4,Mean,1,-6.9,-4.2,1.9,9.0,15.1,20.0,23.0,22.0,16.3,8.8,0.7,-5.0,8.4
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
5,Daily_Mean_Temperature,Deg_C,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,5,Mean,1,-2.7,0.6,7.5,15.1,21.3,25.3,27.2,26.1,21.2,13.8,5.2,-1.0,13.3
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
6,Mean_Sea_Level_Pressure,hPa,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,6,Mean,1,1028.7,1025.7,1020.4,1013.9,1009.0,1004.8,1003.5,1007.5,1014.4,1020.8,1024.7,1028.4,1016.8
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
7,Mean_Vapor_Pressure,hPa,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,7,Mean,1,2.1,2.7,4.0,7.1,11.4,17.6,24.2,23.5,15.8,9.1,4.8,2.6,10.4
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
8,Total_Number_of_Hours_of_Sunshine,hours,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,8,Sum,4,188.1,189.1,231.1,243.2,265.1,221.6,190.5,205.3,206.1,199.9,173.4,177.1,2490.5
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
10,Mean_Station-Level_Pressure,hPa,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,10,Mean,1,1024.5,1021.6,1016.4,1010.1,1005.2,1001.0,999.9,1003.8,1010.6,1016.8,1020.6,1024.2,1012.9
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
11,Boundaries_of_quintiles_of_monthly_precipitation,mm,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,11,Q0,6,0.0,0.0,0.0,0.0,1.8,9.4,34.0,34.2,1.1,1.8,0.0,0.0, 
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
12,Number_of_Days_with_Maximum_Temperature_>=_30_Deg_C,count,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,12,Count,5,0.0,0.0,0.0,0.7,7.7,19.1,22.8,20.1,4.7,0.1,0.0,0.0,75.1
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
13,Number_of_Days_with_Minimum_Temperature_<=_10_Deg_C,count,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,13,Count,5,31.0,28.3,30.2,18.0,1.8,0.0,0.0,0.0,1.2,19.4,29.8,31.0,190.7
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
14,Number_of_Days_with_Maximum_Temperature_<_0_Deg_C,count,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,14,Count,5,7.7,2.1,0.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.4,4.8,15.2
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
15,Number_of_Days_with_Minimum_Temperature_<_0_Deg_C,count,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,15,Count,5,30.9,25.4,10.4,0.1,0.0,0.0,0.0,0.0,0.0,0.3,13.4,29.7,110.1
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
16,Number_of_Days_with_Daily_Precipitation_>=_10_mm,count,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,16,Count,5,0.0,0.1,0.1,0.8,1.2,2.1,4.6,3.0,1.8,1.0,0.3,0.0,15.0
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
17,Number_of_Days_with_Snow_Depth_>=_10_cm,count,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,17,Count,5,0.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.1,0.0,0.2
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
18,Number_of_Days_with_Wind_Speed_>=_5_m/s,count,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,18,Count,5,1.0,1.0,1.4,1.1,0.4,0.1,0.0,0.0,0.1,0.3,0.6,1.2,7.2
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
19,Number_of_Days_with_Visibility_<_threshold*_m,count,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,19,Count,5, , , , , , , , , , , , , 
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
20,Highest_Value_of_Mean_Daily_Temperature,Deg_C,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,20,Max,2,5.0,10.1,19.6,25.7,31.8,32.2,34.5,32.5,28.5,22.9,14.9,7.8,34.5
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
21,Lowest_Value_of_Mean_Daily_Temperature,Deg_C,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,21,Min,3,-14.3,-10.1,-3.7,2.6,9.8,16.0,19.0,16.9,12.5,2.0,-5.9,-9.6,-14.3
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
22,Highest_Value_of_Daily_Maximum_Temperature,Deg_C,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,22,Max,2,14.3,19.8,29.5,33.5,41.1,39.9,41.9,38.2,35.9,31.0,22.0,15.6,41.9
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
23,Lowest_Value_of_Daily_Minimum_Temperature,Deg_C,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,23,Min,3,-17.0,-14.7,-8.0,-2.0,4.9,9.8,16.0,14.5,7.5,-3.4,-9.6,-14.4,-17.0
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
24,Highest_Value_of_Daily_Precipitation,mm,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,24,Max,2,9.9,29.6,26.6,29.4,38.9,103.0,253.5,91.4,106.0,44.6,48.9,8.3,253.5
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
25,Highest_Wind_Gust,m/s,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,25,Max,2,13.9,12.5,14.0,12.8,13.4,13.1,13.2,11.1,10.5,13.2,10.8,12.4,14.0
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
26,Mean_Number_of_Days_with_Thunder,count,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,26,Count,5, , , , , , , , , , , , , 
Parameter_Code,Parameter_Name,Units,,,,,,,,,,,,,,
27,Mean_Number_of_Days_with_Hail,count,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,
WMO_Number,Parameter_Code,Calculation_Name,Calculation_Code,January,February,March,April,May,June,July,August,September,October,November,December,Annual
54511,27,Count,5,0.0,0.0,0.0,0.0,0.1,0.4,0.1,0.1,0.0,0.0,0.0,0.0,0.7

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$base='"'https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/'; "'$files=@('"'BEIJING_54511.csv','SHANGHAI__BAOSHAN_58362.csv','GUANGZHOU_59287.csv'); foreach ("'$f in $files) { $content=(Invoke-WebRequest -Uri ($base+$f) -UseBasicParsing -TimeoutSec 60).Content -split "`r?`n"; Write-Output "--- $f"; $content | Where-Object { $_ -match '"'"'^[0-9]{5},(1|3|4|5),(|Mean|Sum)'"' } }" in c:\Users\h\Documents\New project 2\v2
 succeeded in 31481ms:
--- BEIJING_54511.csv
54511,1,Sum,4,2.2,5.8,8.6,21.7,36.1,72.4,169.7,113.4,53.7,28.7,13.5,2.2,528.0
54511,1,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0
54511,3,Mean,1,2.3,6.1,13.2,21.0,27.2,30.8,31.8,30.7,26.5,19.3,10.3,3.7,18.6
54511,3,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0
54511,4,Mean,1,-6.9,-4.2,1.9,9.0,15.1,20.0,23.0,22.0,16.3,8.8,0.7,-5.0,8.4
54511,4,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0
54511,5,Mean,1,-2.7,0.6,7.5,15.1,21.3,25.3,27.2,26.1,21.2,13.8,5.2,-1.0,13.3
54511,5,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0
--- SHANGHAI__BAOSHAN_58362.csv
58362,1,Sum,4,69.8,64.0,86.5,77.1,90.2,196.7,146.9,210.1,116.5,71.4,57.5,49.3,1236.0
58362,1,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0
58362,3,Mean,1,8.2,10.1,14.3,20.1,25.1,27.8,32.4,31.9,27.9,22.9,17.5,11.0,20.8
58362,3,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0
58362,4,Mean,1,2.2,3.6,6.9,12.0,17.5,21.7,25.9,25.9,22.2,16.7,10.7,4.4,14.1
58362,4,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0
58362,5,Mean,1,4.9,6.5,10.3,15.7,20.9,24.4,28.8,28.5,24.7,19.7,13.9,7.5,17.2
58362,5,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0
--- GUANGZHOU_59287.csv
59287,1,Sum,4,51.1,56.1,101.0,193.8,329.0,364.9,242.6,270.3,203.2,67.3,37.4,33.4,1950.1
59287,1,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0
59287,3,Mean,1,18.7,20.0,22.3,26.4,30.0,32.0,33.3,33.2,32.0,29.3,25.3,20.7,26.9
59287,3,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0
59287,4,Mean,1,10.6,12.5,15.5,19.6,23.1,25.1,25.8,25.5,24.2,20.9,16.7,11.9,19.3
59287,4,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0
59287,5,Mean,1,13.8,15.5,18.3,22.5,26.0,27.9,28.9,28.6,27.4,24.4,20.2,15.4,22.4
59287,5,NOY,98,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0,30.0

web search: 
web search: 
web search: 
web search: https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html
web search: 
web search: https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html
web search: 
web search: site:english.beijing.gov.cn Beijing heavy air pollution warning winter haze official
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$html=(Invoke-WebRequest -Uri '"'https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html' -UseBasicParsing -TimeoutSec 60).Content; [regex]::Matches("'$html,'"'src=\"(["'^"]+)"'"') | ForEach-Object {"'$_.Groups[1].Value} | Select-String '"'qhtz|qitz|gif|jpg'" in c:\Users\h\Documents\New project 2\v2
 succeeded in 5987ms:

https://weather.sz.gov.cn/img/2/2249/2249506/3575919.gif
https://weather.sz.gov.cn/img/2/2249/2249839/3575919.jpg
https://weather.sz.gov.cn/img/2/2249/2249508/3575919.gif
https://weather.sz.gov.cn/img/2/2249/2249509/3575919.gif
https://weather.sz.gov.cn/img/2/2249/2249510/3575919.gif
https://weather.sz.gov.cn/img/2/2249/2249512/3575919.gif



exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "New-Item -ItemType Directory -Force -Path .omc\\climate | Out-Null; "'$urls=@('"'https://weather.sz.gov.cn/img/2/2249/2249506/3575919.gif','https://weather.sz.gov.cn/img/2/2249/2249839/3575919.jpg','https://weather.sz.gov.cn/img/2/2249/2249508/3575919.gif','https://weather.sz.gov.cn/img/2/2249/2249509/3575919.gif','https://weather.sz.gov.cn/img/2/2249/2249510/3575919.gif','https://weather.sz.gov.cn/img/2/2249/2249512/3575919.gif'); for("'$i=0;$i -lt $urls.Count;$i++){ Invoke-WebRequest -Uri $urls[$i] -OutFile ".omc'"\\climate\\sz-"'$i$([IO.Path]::GetExtension($urls[$i]))" -TimeoutSec 60 }; Get-ChildItem .omc'"\\climate" in c:\Users\h\Documents\New project 2\v2
 succeeded in 6078ms:


    目录: C:\Users\h\Documents\New project 2\v2\.omc\climate


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
-a----         2026/5/12     11:30           4880 sz-0.gif                                                             
-a----         2026/5/12     11:30         128074 sz-1.jpg                                                             
-a----         2026/5/12     11:30           8545 sz-2.gif                                                             
-a----         2026/5/12     11:30           9012 sz-3.gif                                                             
-a----         2026/5/12     11:30           7189 sz-4.gif                                                             
-a----         2026/5/12     11:30          15915 sz-5.gif                                                             



exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Encoding utf8 -Raw tsconfig.app.json' in c:\Users\h\Documents\New project 2\v2
 succeeded in 356ms:
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 src\\data\\sources.ts -Tail 80" in c:\Users\h\Documents\New project 2\v2
 succeeded in 512ms:
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

export const sources: Record<string, SourceCitation> = Object.fromEntries(
  list.map((s) => [s.id, s])
);

export const getSource = (id: string): SourceCitation | undefined => sources[id];

codex
我已经确认了 NOAA/WMO 1991-2020 城市站月常值，以及深圳气象局页面里的 1991-2020 月温/雨量图。接下来会新增季节数据、引用源和渲染组件，再接进城市页导航。
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\data\city-seasons.ts
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}

diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\city\CitySeasonBlock.tsx
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}

diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\city\CityNav.tsx
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\pages\CityPage.tsx
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1ed6541a5f066c3b74f8331c4dbf5f589d..ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1ed6541a5f066c3b74f8331c4dbf5f589d..ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>

codex
我会把新天气源补到 `sources.ts`，并把该文件的统一核验日期更新到今天，避免新增引用显示旧核验日。
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\data\sources.ts
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}
diff --git a/v2/src/data/sources.ts b/v2/src/data/sources.ts
index c38173f965670286608ae3a874e61ed2d75b7588..4f23091c2d31120ddbe46169a76d5f49a7245bd5
--- a/v2/src/data/sources.ts
+++ b/v2/src/data/sources.ts
@@ -11,7 +11,7 @@
   community?: boolean;
 };
 
-const TODAY = "2026-05-09";
+const TODAY = "2026-05-12";
 
 const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
   ...record,
@@ -933,6 +933,105 @@
     pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
     publishedDate: "2024",
     verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-beijing-54511",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Beijing 54511 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-shanghai-baoshan-58362",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/SHANGHAI__BAOSHAN_58362.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Shanghai Baoshan 58362 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-guangzhou-59287",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/GUANGZHOU_59287.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Guangzhou 59287 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-climate-geography",
+    url: "https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Beijing demographic geography and climate facts",
+    publishedDate: "2020-05-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-spring-dust",
+    url: "https://english.beijing.gov.cn/latest/news/202604/t20260402_4573114.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Rain before Qingming followed by Beijing spring blowing sand",
+    publishedDate: "2026-04-02",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-heavy-air-pollution-plan",
+    url: "https://english.beijing.gov.cn/latest/lawsandpolicies/202007/t20200723_1957677.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Heavy Air Pollution Contingency Plan of Beijing Municipality",
+    publishedDate: "2020-07-23",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-plum-rain",
+    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240618/571c88c3fab1486db0e94acd8fe91c31.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Shanghai braces for humid rainy season",
+    publishedDate: "2024-06-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-meteorological-regulations",
+    url: "https://english.shanghai.gov.cn/en-LocalRules/20241219/22ad9440df404a4999d56a070667c26b.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Meteorological Regulations of Shanghai Municipality",
+    publishedDate: "2024-12-19",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "guangzhou-climate-geography",
+    url: "https://www.gz.gov.cn/zlgz/gzgk/zrdl/content/post_5725003.html",
+    publisher: "Guangzhou Government",
+    publisherUrl: "https://www.gz.gov.cn",
+    pageTitleEn: "Guangzhou natural geography and climate characteristics",
+    publishedDate: "2020-03-10",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-climate-seasons",
+    url: "https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "Shenzhen climate overview and seasonal characteristics",
+    publishedDate: "2024-05-15",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-back-south",
+    url: "https://weather.sz.gov.cn/szsqxjwzgkml/szsqxjwzgkml/ywzsk/qxfwl/content/post_5613756.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "How return-south damp weather forms",
+    publishedDate: "2015-11-17",
+    verifiedDate: TODAY
   })
 ];
 
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1ed6541a5f066c3b74f8331c4dbf5f589d..ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}
diff --git a/v2/src/data/sources.ts b/v2/src/data/sources.ts
index c38173f965670286608ae3a874e61ed2d75b7588..4f23091c2d31120ddbe46169a76d5f49a7245bd5
--- a/v2/src/data/sources.ts
+++ b/v2/src/data/sources.ts
@@ -11,7 +11,7 @@
   community?: boolean;
 };
 
-const TODAY = "2026-05-09";
+const TODAY = "2026-05-12";
 
 const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
   ...record,
@@ -933,6 +933,105 @@
     pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
     publishedDate: "2024",
     verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-beijing-54511",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Beijing 54511 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-shanghai-baoshan-58362",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/SHANGHAI__BAOSHAN_58362.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Shanghai Baoshan 58362 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-guangzhou-59287",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/GUANGZHOU_59287.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Guangzhou 59287 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-climate-geography",
+    url: "https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Beijing demographic geography and climate facts",
+    publishedDate: "2020-05-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-spring-dust",
+    url: "https://english.beijing.gov.cn/latest/news/202604/t20260402_4573114.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Rain before Qingming followed by Beijing spring blowing sand",
+    publishedDate: "2026-04-02",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-heavy-air-pollution-plan",
+    url: "https://english.beijing.gov.cn/latest/lawsandpolicies/202007/t20200723_1957677.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Heavy Air Pollution Contingency Plan of Beijing Municipality",
+    publishedDate: "2020-07-23",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-plum-rain",
+    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240618/571c88c3fab1486db0e94acd8fe91c31.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Shanghai braces for humid rainy season",
+    publishedDate: "2024-06-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-meteorological-regulations",
+    url: "https://english.shanghai.gov.cn/en-LocalRules/20241219/22ad9440df404a4999d56a070667c26b.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Meteorological Regulations of Shanghai Municipality",
+    publishedDate: "2024-12-19",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "guangzhou-climate-geography",
+    url: "https://www.gz.gov.cn/zlgz/gzgk/zrdl/content/post_5725003.html",
+    publisher: "Guangzhou Government",
+    publisherUrl: "https://www.gz.gov.cn",
+    pageTitleEn: "Guangzhou natural geography and climate characteristics",
+    publishedDate: "2020-03-10",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-climate-seasons",
+    url: "https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "Shenzhen climate overview and seasonal characteristics",
+    publishedDate: "2024-05-15",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-back-south",
+    url: "https://weather.sz.gov.cn/szsqxjwzgkml/szsqxjwzgkml/ywzsk/qxfwl/content/post_5613756.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "How return-south damp weather forms",
+    publishedDate: "2015-11-17",
+    verifiedDate: TODAY
   })
 ];
 
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1ed6541a5f066c3b74f8331c4dbf5f589d..ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>

codex
代码已接入。现在先跑类型检查，若发现 Tailwind/TS 或 React Router 构建相关问题会直接修。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
 succeeded in 1678ms:
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}
diff --git a/v2/src/data/sources.ts b/v2/src/data/sources.ts
index c38173f965670286608ae3a874e61ed2d75b7588..4f23091c2d31120ddbe46169a76d5f49a7245bd5
--- a/v2/src/data/sources.ts
+++ b/v2/src/data/sources.ts
@@ -11,7 +11,7 @@
   community?: boolean;
 };
 
-const TODAY = "2026-05-09";
+const TODAY = "2026-05-12";
 
 const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
   ...record,
@@ -933,6 +933,105 @@
     pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
     publishedDate: "2024",
     verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-beijing-54511",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Beijing 54511 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-shanghai-baoshan-58362",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/SHANGHAI__BAOSHAN_58362.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Shanghai Baoshan 58362 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-guangzhou-59287",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/GUANGZHOU_59287.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Guangzhou 59287 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-climate-geography",
+    url: "https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Beijing demographic geography and climate facts",
+    publishedDate: "2020-05-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-spring-dust",
+    url: "https://english.beijing.gov.cn/latest/news/202604/t20260402_4573114.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Rain before Qingming followed by Beijing spring blowing sand",
+    publishedDate: "2026-04-02",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-heavy-air-pollution-plan",
+    url: "https://english.beijing.gov.cn/latest/lawsandpolicies/202007/t20200723_1957677.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Heavy Air Pollution Contingency Plan of Beijing Municipality",
+    publishedDate: "2020-07-23",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-plum-rain",
+    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240618/571c88c3fab1486db0e94acd8fe91c31.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Shanghai braces for humid rainy season",
+    publishedDate: "2024-06-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-meteorological-regulations",
+    url: "https://english.shanghai.gov.cn/en-LocalRules/20241219/22ad9440df404a4999d56a070667c26b.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Meteorological Regulations of Shanghai Municipality",
+    publishedDate: "2024-12-19",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "guangzhou-climate-geography",
+    url: "https://www.gz.gov.cn/zlgz/gzgk/zrdl/content/post_5725003.html",
+    publisher: "Guangzhou Government",
+    publisherUrl: "https://www.gz.gov.cn",
+    pageTitleEn: "Guangzhou natural geography and climate characteristics",
+    publishedDate: "2020-03-10",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-climate-seasons",
+    url: "https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "Shenzhen climate overview and seasonal characteristics",
+    publishedDate: "2024-05-15",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-back-south",
+    url: "https://weather.sz.gov.cn/szsqxjwzgkml/szsqxjwzgkml/ywzsk/qxfwl/content/post_5613756.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "How return-south damp weather forms",
+    publishedDate: "2015-11-17",
+    verifiedDate: TODAY
   })
 ];
 
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1ed6541a5f066c3b74f8331c4dbf5f589d..ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>

codex
`tsc` 已通过。继续跑生产构建。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 8478ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1516 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                     7.22 kB │ gzip:     1.05 kB
build/client/assets/Map3D-B9DDZdqH.css              24.01 kB │ gzip:     5.37 kB
build/client/assets/root-DFSdV8o5.css               45.95 kB │ gzip:     8.61 kB
build/client/assets/language-BOubID-Z.js             0.26 kB │ gzip:     0.22 kB
build/client/assets/clsx-CQXsFDzQ.js                 0.36 kB │ gzip:     0.23 kB
build/client/assets/jsonLd-BO2zCPGg.js               0.47 kB │ gzip:     0.33 kB
build/client/assets/cityRoutes-BYrYBQ2Q.js           0.91 kB │ gzip:     0.50 kB
build/client/assets/chunk-DrL5kMTW.js                0.95 kB │ gzip:     0.56 kB
build/client/assets/provinceColors-D1tQ2RWj.js       1.84 kB │ gzip:     0.95 kB
build/client/assets/HomePage-B3SoqIJw.js             6.41 kB │ gzip:     2.98 kB
build/client/assets/SharePage-CgxDzIGp.js            7.48 kB │ gzip:     2.76 kB
build/client/assets/phase2-preview-CvitKUEZ.js       7.59 kB │ gzip:     4.48 kB
build/client/assets/AskPage-CEHtNNR2.js              7.62 kB │ gzip:     2.92 kB
build/client/assets/Map3D-DnZt3fi_.js                8.95 kB │ gzip:     4.22 kB
build/client/assets/PhrasebookPage-CK_4T76N.js       8.99 kB │ gzip:     3.82 kB
build/client/assets/GuidePage-DPjVd2Ky.js           11.36 kB │ gzip:     5.34 kB
build/client/assets/root-DgkNj9B3.js                11.51 kB │ gzip:     5.28 kB
build/client/assets/transport-BJiJMhS4.js           12.28 kB │ gzip:     5.22 kB
build/client/assets/MapPage-MBXXq6my.js             13.67 kB │ gzip:     5.00 kB
build/client/assets/PlanPage-kXEL5_gI.js            16.91 kB │ gzip:     7.80 kB
build/client/assets/practical-other-Bs25E_ay.js     22.32 kB │ gzip:    10.76 kB
build/client/assets/unsplash-CEv8iAF0.js            22.72 kB │ gzip:    10.50 kB
build/client/assets/atlas-DBEJCkPf.js               23.24 kB │ gzip:     9.57 kB
build/client/assets/SourcesPage-Df8tOFYK.js         35.76 kB │ gzip:     9.30 kB
build/client/assets/SourcesNote-DtmG0vrZ.js         39.01 kB │ gzip:    14.91 kB
build/client/assets/CityPage-GfCDP1BF.js            66.46 kB │ gzip:    24.76 kB
build/client/assets/jsx-runtime-BVQep7R1.js        127.17 kB │ gzip:    41.93 kB
build/client/assets/entry.client-BrU9wu6P.js       186.53 kB │ gzip:    58.89 kB
build/client/assets/Cesium-NBJLZNKc.js           4,724.63 kB │ gzip: 1,304.40 kB

[32m✓ built in 4.63s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 77 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m
[2mbuild\server\assets\server-build-DFSdV8o5.css[22m

Prerender (html): / -> [1mbuild\client\index.html[22m
Prerender (html): /map -> [1mbuild\client\map\index.html[22m
Prerender (html): /phrasebook -> [1mbuild\client\phrasebook\index.html[22m
Prerender (html): /guide/entry -> [1mbuild\client\guide\entry\index.html[22m
Prerender (html): /guide/payments -> [1mbuild\client\guide\payments\index.html[22m
Prerender (html): /guide/notes -> [1mbuild\client\guide\notes\index.html[22m
Prerender (html): /plan -> [1mbuild\client\plan\index.html[22m
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
build/server/.vite/manifest.json                 0.74 kB │ gzip:   0.27 kB
build/server/assets/Map3D-B9DDZdqH.css          24.01 kB │ gzip:   5.37 kB
build/server/assets/server-build-DFSdV8o5.css   45.95 kB │ gzip:   8.61 kB
build/server/assets/Map3D-Cv42P-Ue.js           15.47 kB │ gzip:   5.32 kB
build/server/assets/cityRoutes-Byzkxm76.js      31.42 kB │ gzip:  10.70 kB
build/server/index.js                          378.55 kB │ gzip: 118.12 kB

[32m✓ built in 763ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:virtual-modules (38%)
  - react-router:dot-server (36%)
  - react-router:inject-hmr-runtime (17%)
  - react-router:hmr-runtime (5%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}
diff --git a/v2/src/data/sources.ts b/v2/src/data/sources.ts
index c38173f965670286608ae3a874e61ed2d75b7588..4f23091c2d31120ddbe46169a76d5f49a7245bd5
--- a/v2/src/data/sources.ts
+++ b/v2/src/data/sources.ts
@@ -11,7 +11,7 @@
   community?: boolean;
 };
 
-const TODAY = "2026-05-09";
+const TODAY = "2026-05-12";
 
 const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
   ...record,
@@ -933,6 +933,105 @@
     pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
     publishedDate: "2024",
     verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-beijing-54511",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Beijing 54511 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-shanghai-baoshan-58362",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/SHANGHAI__BAOSHAN_58362.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Shanghai Baoshan 58362 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-guangzhou-59287",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/GUANGZHOU_59287.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Guangzhou 59287 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-climate-geography",
+    url: "https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Beijing demographic geography and climate facts",
+    publishedDate: "2020-05-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-spring-dust",
+    url: "https://english.beijing.gov.cn/latest/news/202604/t20260402_4573114.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Rain before Qingming followed by Beijing spring blowing sand",
+    publishedDate: "2026-04-02",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-heavy-air-pollution-plan",
+    url: "https://english.beijing.gov.cn/latest/lawsandpolicies/202007/t20200723_1957677.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Heavy Air Pollution Contingency Plan of Beijing Municipality",
+    publishedDate: "2020-07-23",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-plum-rain",
+    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240618/571c88c3fab1486db0e94acd8fe91c31.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Shanghai braces for humid rainy season",
+    publishedDate: "2024-06-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-meteorological-regulations",
+    url: "https://english.shanghai.gov.cn/en-LocalRules/20241219/22ad9440df404a4999d56a070667c26b.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Meteorological Regulations of Shanghai Municipality",
+    publishedDate: "2024-12-19",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "guangzhou-climate-geography",
+    url: "https://www.gz.gov.cn/zlgz/gzgk/zrdl/content/post_5725003.html",
+    publisher: "Guangzhou Government",
+    publisherUrl: "https://www.gz.gov.cn",
+    pageTitleEn: "Guangzhou natural geography and climate characteristics",
+    publishedDate: "2020-03-10",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-climate-seasons",
+    url: "https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "Shenzhen climate overview and seasonal characteristics",
+    publishedDate: "2024-05-15",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-back-south",
+    url: "https://weather.sz.gov.cn/szsqxjwzgkml/szsqxjwzgkml/ywzsk/qxfwl/content/post_5613756.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "How return-south damp weather forms",
+    publishedDate: "2015-11-17",
+    verifiedDate: TODAY
   })
 ];
 
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1ed6541a5f066c3b74f8331c4dbf5f589d..ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>

codex
构建也通过了，只有既有的大 chunk / plugin timing 警告，没有 error。最后我看一下 diff，确认改动范围只在季节数据、组件、城市页和来源表。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "git diff -- src\\data\\city-seasons.ts src\\components\\city\\CitySeasonBlock.tsx src\\components\\city\\CityNav.tsx src\\pages\\CityPage.tsx src\\data\\sources.ts" in c:\Users\h\Documents\New project 2\v2
 succeeded in 459ms:
 M public/sitemap.xml
 M react-router.config.ts
 M src/App.tsx
 M src/components/city/CityNav.tsx
 M src/components/layout/SiteHeader.tsx
 M src/data/sources.ts
 M src/pages/CityPage.tsx
 M src/pages/HomePage.tsx
 M src/root.tsx
 M src/routes.ts
?? ../.omc/artifacts/ask/codex-v2-workdir-edit-build-phrasebook-phrasebook-1-v2-src-data-ph-2026-05-12T03-30-30-679Z.md
?? .omc/climate/
?? src/components/city/CitySeasonBlock.tsx
?? src/components/common/ScrollToTop.tsx
?? src/data/city-seasons.ts
?? src/data/itineraries.ts
?? src/data/phrasebook.ts
?? src/pages/PhrasebookPage.tsx
?? src/pages/PlanPage.tsx

 succeeded in 474ms:
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92..b9beea6 100644
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -6,6 +6,7 @@ type CityNavItem = { id: string; en: string; zh: string };
 
 const CITY_NAV_ITEMS: CityNavItem[] = [
   { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
   { id: "visa", en: "Entry & Visa", zh: "入境签证" },
   { id: "payments", en: "Payments", zh: "支付" },
   { id: "transport", en: "Transport", zh: "交通" },
diff --git a/v2/src/data/sources.ts b/v2/src/data/sources.ts
index c38173f..4f23091 100644
--- a/v2/src/data/sources.ts
+++ b/v2/src/data/sources.ts
@@ -11,7 +11,7 @@ export type SourceCitation = {
   community?: boolean;
 };
 
-const TODAY = "2026-05-09";
+const TODAY = "2026-05-12";
 
 const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
   ...record,
@@ -933,6 +933,105 @@ const list: SourceCitation[] = [
     pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
     publishedDate: "2024",
     verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-beijing-54511",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Beijing 54511 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-shanghai-baoshan-58362",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/SHANGHAI__BAOSHAN_58362.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Shanghai Baoshan 58362 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-guangzhou-59287",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/GUANGZHOU_59287.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Guangzhou 59287 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-climate-geography",
+    url: "https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Beijing demographic geography and climate facts",
+    publishedDate: "2020-05-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-spring-dust",
+    url: "https://english.beijing.gov.cn/latest/news/202604/t20260402_4573114.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Rain before Qingming followed by Beijing spring blowing sand",
+    publishedDate: "2026-04-02",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-heavy-air-pollution-plan",
+    url: "https://english.beijing.gov.cn/latest/lawsandpolicies/202007/t20200723_1957677.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Heavy Air Pollution Contingency Plan of Beijing Municipality",
+    publishedDate: "2020-07-23",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-plum-rain",
+    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240618/571c88c3fab1486db0e94acd8fe91c31.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Shanghai braces for humid rainy season",
+    publishedDate: "2024-06-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-meteorological-regulations",
+    url: "https://english.shanghai.gov.cn/en-LocalRules/20241219/22ad9440df404a4999d56a070667c26b.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Meteorological Regulations of Shanghai Municipality",
+    publishedDate: "2024-12-19",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "guangzhou-climate-geography",
+    url: "https://www.gz.gov.cn/zlgz/gzgk/zrdl/content/post_5725003.html",
+    publisher: "Guangzhou Government",
+    publisherUrl: "https://www.gz.gov.cn",
+    pageTitleEn: "Guangzhou natural geography and climate characteristics",
+    publishedDate: "2020-03-10",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-climate-seasons",
+    url: "https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "Shenzhen climate overview and seasonal characteristics",
+    publishedDate: "2024-05-15",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-back-south",
+    url: "https://weather.sz.gov.cn/szsqxjwzgkml/szsqxjwzgkml/ywzsk/qxfwl/content/post_5613756.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "How return-south damp weather forms",
+    publishedDate: "2015-11-17",
+    verifiedDate: TODAY
   })
 ];
 
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1..ddcc4bb 100644
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@ import SourcesNote from "../components/common/SourcesNote";
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@ export default function CityPage() {
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>
warning: in the working copy of 'v2/src/components/city/CityNav.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/data/sources.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/pages/CityPage.tsx', LF will be replaced by CRLF the next time Git touches it

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}
diff --git a/v2/src/data/sources.ts b/v2/src/data/sources.ts
index c38173f965670286608ae3a874e61ed2d75b7588..4f23091c2d31120ddbe46169a76d5f49a7245bd5
--- a/v2/src/data/sources.ts
+++ b/v2/src/data/sources.ts
@@ -11,7 +11,7 @@
   community?: boolean;
 };
 
-const TODAY = "2026-05-09";
+const TODAY = "2026-05-12";
 
 const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
   ...record,
@@ -933,6 +933,105 @@
     pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
     publishedDate: "2024",
     verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-beijing-54511",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Beijing 54511 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-shanghai-baoshan-58362",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/SHANGHAI__BAOSHAN_58362.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Shanghai Baoshan 58362 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-guangzhou-59287",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/GUANGZHOU_59287.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Guangzhou 59287 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-climate-geography",
+    url: "https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Beijing demographic geography and climate facts",
+    publishedDate: "2020-05-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-spring-dust",
+    url: "https://english.beijing.gov.cn/latest/news/202604/t20260402_4573114.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Rain before Qingming followed by Beijing spring blowing sand",
+    publishedDate: "2026-04-02",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-heavy-air-pollution-plan",
+    url: "https://english.beijing.gov.cn/latest/lawsandpolicies/202007/t20200723_1957677.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Heavy Air Pollution Contingency Plan of Beijing Municipality",
+    publishedDate: "2020-07-23",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-plum-rain",
+    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240618/571c88c3fab1486db0e94acd8fe91c31.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Shanghai braces for humid rainy season",
+    publishedDate: "2024-06-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-meteorological-regulations",
+    url: "https://english.shanghai.gov.cn/en-LocalRules/20241219/22ad9440df404a4999d56a070667c26b.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Meteorological Regulations of Shanghai Municipality",
+    publishedDate: "2024-12-19",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "guangzhou-climate-geography",
+    url: "https://www.gz.gov.cn/zlgz/gzgk/zrdl/content/post_5725003.html",
+    publisher: "Guangzhou Government",
+    publisherUrl: "https://www.gz.gov.cn",
+    pageTitleEn: "Guangzhou natural geography and climate characteristics",
+    publishedDate: "2020-03-10",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-climate-seasons",
+    url: "https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "Shenzhen climate overview and seasonal characteristics",
+    publishedDate: "2024-05-15",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-back-south",
+    url: "https://weather.sz.gov.cn/szsqxjwzgkml/szsqxjwzgkml/ywzsk/qxfwl/content/post_5613756.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "How return-south damp weather forms",
+    publishedDate: "2015-11-17",
+    verifiedDate: TODAY
   })
 ];
 
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1ed6541a5f066c3b74f8331c4dbf5f589d..ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>

codex
`git status` 里有多处既有未跟踪/已改文件，我只碰了本次任务相关文件。`.omc/climate` 是我核对深圳气象图时下载的临时图片目录，会清掉。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$target = Resolve-Path '"'.omc\\climate'; if ("'$target.Path -like (Resolve-Path '"'.').Path + '\\*') { Remove-Item -LiteralPath "'$target.Path -Recurse -Force }; Test-Path '"'.omc\\climate'" in c:\Users\h\Documents\New project 2\v2
 succeeded in 416ms:
False

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}
diff --git a/v2/src/data/sources.ts b/v2/src/data/sources.ts
index c38173f965670286608ae3a874e61ed2d75b7588..4f23091c2d31120ddbe46169a76d5f49a7245bd5
--- a/v2/src/data/sources.ts
+++ b/v2/src/data/sources.ts
@@ -11,7 +11,7 @@
   community?: boolean;
 };
 
-const TODAY = "2026-05-09";
+const TODAY = "2026-05-12";
 
 const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
   ...record,
@@ -933,6 +933,105 @@
     pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
     publishedDate: "2024",
     verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-beijing-54511",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Beijing 54511 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-shanghai-baoshan-58362",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/SHANGHAI__BAOSHAN_58362.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Shanghai Baoshan 58362 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-guangzhou-59287",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/GUANGZHOU_59287.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Guangzhou 59287 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-climate-geography",
+    url: "https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Beijing demographic geography and climate facts",
+    publishedDate: "2020-05-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-spring-dust",
+    url: "https://english.beijing.gov.cn/latest/news/202604/t20260402_4573114.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Rain before Qingming followed by Beijing spring blowing sand",
+    publishedDate: "2026-04-02",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-heavy-air-pollution-plan",
+    url: "https://english.beijing.gov.cn/latest/lawsandpolicies/202007/t20200723_1957677.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Heavy Air Pollution Contingency Plan of Beijing Municipality",
+    publishedDate: "2020-07-23",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-plum-rain",
+    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240618/571c88c3fab1486db0e94acd8fe91c31.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Shanghai braces for humid rainy season",
+    publishedDate: "2024-06-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-meteorological-regulations",
+    url: "https://english.shanghai.gov.cn/en-LocalRules/20241219/22ad9440df404a4999d56a070667c26b.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Meteorological Regulations of Shanghai Municipality",
+    publishedDate: "2024-12-19",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "guangzhou-climate-geography",
+    url: "https://www.gz.gov.cn/zlgz/gzgk/zrdl/content/post_5725003.html",
+    publisher: "Guangzhou Government",
+    publisherUrl: "https://www.gz.gov.cn",
+    pageTitleEn: "Guangzhou natural geography and climate characteristics",
+    publishedDate: "2020-03-10",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-climate-seasons",
+    url: "https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "Shenzhen climate overview and seasonal characteristics",
+    publishedDate: "2024-05-15",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-back-south",
+    url: "https://weather.sz.gov.cn/szsqxjwzgkml/szsqxjwzgkml/ywzsk/qxfwl/content/post_5613756.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "How return-south damp weather forms",
+    publishedDate: "2015-11-17",
+    verifiedDate: TODAY
   })
 ];
 
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1ed6541a5f066c3b74f8331c4dbf5f589d..ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short' in c:\Users\h\Documents\New project 2\v2
 succeeded in 407ms:
 M public/sitemap.xml
 M react-router.config.ts
 M src/App.tsx
 M src/components/city/CityNav.tsx
 M src/components/layout/SiteHeader.tsx
 M src/data/sources.ts
 M src/pages/CityPage.tsx
 M src/pages/HomePage.tsx
 M src/root.tsx
 M src/routes.ts
?? ../.omc/artifacts/ask/codex-v2-workdir-edit-build-phrasebook-phrasebook-1-v2-src-data-ph-2026-05-12T03-30-30-679Z.md
?? src/components/city/CitySeasonBlock.tsx
?? src/components/common/ScrollToTop.tsx
?? src/data/city-seasons.ts
?? src/data/itineraries.ts
?? src/data/phrasebook.ts
?? src/pages/PhrasebookPage.tsx
?? src/pages/PlanPage.tsx

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}
diff --git a/v2/src/data/sources.ts b/v2/src/data/sources.ts
index c38173f965670286608ae3a874e61ed2d75b7588..4f23091c2d31120ddbe46169a76d5f49a7245bd5
--- a/v2/src/data/sources.ts
+++ b/v2/src/data/sources.ts
@@ -11,7 +11,7 @@
   community?: boolean;
 };
 
-const TODAY = "2026-05-09";
+const TODAY = "2026-05-12";
 
 const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
   ...record,
@@ -933,6 +933,105 @@
     pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
     publishedDate: "2024",
     verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-beijing-54511",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Beijing 54511 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-shanghai-baoshan-58362",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/SHANGHAI__BAOSHAN_58362.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Shanghai Baoshan 58362 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-guangzhou-59287",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/GUANGZHOU_59287.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Guangzhou 59287 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-climate-geography",
+    url: "https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Beijing demographic geography and climate facts",
+    publishedDate: "2020-05-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-spring-dust",
+    url: "https://english.beijing.gov.cn/latest/news/202604/t20260402_4573114.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Rain before Qingming followed by Beijing spring blowing sand",
+    publishedDate: "2026-04-02",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-heavy-air-pollution-plan",
+    url: "https://english.beijing.gov.cn/latest/lawsandpolicies/202007/t20200723_1957677.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Heavy Air Pollution Contingency Plan of Beijing Municipality",
+    publishedDate: "2020-07-23",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-plum-rain",
+    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240618/571c88c3fab1486db0e94acd8fe91c31.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Shanghai braces for humid rainy season",
+    publishedDate: "2024-06-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-meteorological-regulations",
+    url: "https://english.shanghai.gov.cn/en-LocalRules/20241219/22ad9440df404a4999d56a070667c26b.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Meteorological Regulations of Shanghai Municipality",
+    publishedDate: "2024-12-19",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "guangzhou-climate-geography",
+    url: "https://www.gz.gov.cn/zlgz/gzgk/zrdl/content/post_5725003.html",
+    publisher: "Guangzhou Government",
+    publisherUrl: "https://www.gz.gov.cn",
+    pageTitleEn: "Guangzhou natural geography and climate characteristics",
+    publishedDate: "2020-03-10",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-climate-seasons",
+    url: "https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "Shenzhen climate overview and seasonal characteristics",
+    publishedDate: "2024-05-15",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-back-south",
+    url: "https://weather.sz.gov.cn/szsqxjwzgkml/szsqxjwzgkml/ywzsk/qxfwl/content/post_5613756.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "How return-south damp weather forms",
+    publishedDate: "2015-11-17",
+    verifiedDate: TODAY
   })
 ];
 
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1ed6541a5f066c3b74f8331c4dbf5f589d..ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>

codex
新增 NOAA 气候源后，页面底部“全部来自中国政府源”的说明不再准确。我会顺手把来源说明改成“官方公开源”，避免用户看到矛盾文案。
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\common\SourcesNote.tsx
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/components/common/SourcesNote.tsx b/v2/src/components/common/SourcesNote.tsx
index 9c7ae88e41d50e615293fe97aef3ac89e1ff1376..4670c3a9db3c90a0f1904162df1b377e28b68f72
--- a/v2/src/components/common/SourcesNote.tsx
+++ b/v2/src/components/common/SourcesNote.tsx
@@ -8,14 +8,14 @@
     <p className="mt-6 border-t border-line pt-4 text-xs text-muted">
       {isZh ? (
         <>
-          本页所有数字、政策、地址均引自中国政府官方公开来源；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
+          本页所有数字、政策、地址均引自官方公开来源，包括中国政府、城市机构与 NOAA/WMO 气候常值；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
             查看全部信息来源 →
           </Link>
         </>
       ) : (
         <>
-          Every figure, policy, and address on this page is cited from official Chinese government sources. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
+          Every figure, policy, and address on this page is cited from official public sources, including Chinese government, city agencies, and NOAA/WMO climate normals. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
             See all references →
           </Link>
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}
diff --git a/v2/src/data/sources.ts b/v2/src/data/sources.ts
index c38173f965670286608ae3a874e61ed2d75b7588..4f23091c2d31120ddbe46169a76d5f49a7245bd5
--- a/v2/src/data/sources.ts
+++ b/v2/src/data/sources.ts
@@ -11,7 +11,7 @@
   community?: boolean;
 };
 
-const TODAY = "2026-05-09";
+const TODAY = "2026-05-12";
 
 const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
   ...record,
@@ -933,6 +933,105 @@
     pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
     publishedDate: "2024",
     verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-beijing-54511",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Beijing 54511 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-shanghai-baoshan-58362",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/SHANGHAI__BAOSHAN_58362.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Shanghai Baoshan 58362 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-guangzhou-59287",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/GUANGZHOU_59287.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Guangzhou 59287 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-climate-geography",
+    url: "https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Beijing demographic geography and climate facts",
+    publishedDate: "2020-05-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-spring-dust",
+    url: "https://english.beijing.gov.cn/latest/news/202604/t20260402_4573114.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Rain before Qingming followed by Beijing spring blowing sand",
+    publishedDate: "2026-04-02",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-heavy-air-pollution-plan",
+    url: "https://english.beijing.gov.cn/latest/lawsandpolicies/202007/t20200723_1957677.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Heavy Air Pollution Contingency Plan of Beijing Municipality",
+    publishedDate: "2020-07-23",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-plum-rain",
+    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240618/571c88c3fab1486db0e94acd8fe91c31.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Shanghai braces for humid rainy season",
+    publishedDate: "2024-06-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-meteorological-regulations",
+    url: "https://english.shanghai.gov.cn/en-LocalRules/20241219/22ad9440df404a4999d56a070667c26b.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Meteorological Regulations of Shanghai Municipality",
+    publishedDate: "2024-12-19",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "guangzhou-climate-geography",
+    url: "https://www.gz.gov.cn/zlgz/gzgk/zrdl/content/post_5725003.html",
+    publisher: "Guangzhou Government",
+    publisherUrl: "https://www.gz.gov.cn",
+    pageTitleEn: "Guangzhou natural geography and climate characteristics",
+    publishedDate: "2020-03-10",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-climate-seasons",
+    url: "https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "Shenzhen climate overview and seasonal characteristics",
+    publishedDate: "2024-05-15",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-back-south",
+    url: "https://weather.sz.gov.cn/szsqxjwzgkml/szsqxjwzgkml/ywzsk/qxfwl/content/post_5613756.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "How return-south damp weather forms",
+    publishedDate: "2015-11-17",
+    verifiedDate: TODAY
   })
 ];
 
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1ed6541a5f066c3b74f8331c4dbf5f589d..ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/components/common/SourcesNote.tsx b/v2/src/components/common/SourcesNote.tsx
index 9c7ae88e41d50e615293fe97aef3ac89e1ff1376..4670c3a9db3c90a0f1904162df1b377e28b68f72
--- a/v2/src/components/common/SourcesNote.tsx
+++ b/v2/src/components/common/SourcesNote.tsx
@@ -8,14 +8,14 @@
     <p className="mt-6 border-t border-line pt-4 text-xs text-muted">
       {isZh ? (
         <>
-          本页所有数字、政策、地址均引自中国政府官方公开来源；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
+          本页所有数字、政策、地址均引自官方公开来源，包括中国政府、城市机构与 NOAA/WMO 气候常值；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
             查看全部信息来源 →
           </Link>
         </>
       ) : (
         <>
-          Every figure, policy, and address on this page is cited from official Chinese government sources. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
+          Every figure, policy, and address on this page is cited from official public sources, including Chinese government, city agencies, and NOAA/WMO climate normals. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
             See all references →
           </Link>
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}
diff --git a/v2/src/data/sources.ts b/v2/src/data/sources.ts
index c38173f965670286608ae3a874e61ed2d75b7588..4f23091c2d31120ddbe46169a76d5f49a7245bd5
--- a/v2/src/data/sources.ts
+++ b/v2/src/data/sources.ts
@@ -11,7 +11,7 @@
   community?: boolean;
 };
 
-const TODAY = "2026-05-09";
+const TODAY = "2026-05-12";
 
 const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
   ...record,
@@ -933,6 +933,105 @@
     pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
     publishedDate: "2024",
     verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-beijing-54511",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Beijing 54511 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-shanghai-baoshan-58362",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/SHANGHAI__BAOSHAN_58362.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Shanghai Baoshan 58362 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-guangzhou-59287",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/GUANGZHOU_59287.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Guangzhou 59287 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-climate-geography",
+    url: "https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Beijing demographic geography and climate facts",
+    publishedDate: "2020-05-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-spring-dust",
+    url: "https://english.beijing.gov.cn/latest/news/202604/t20260402_4573114.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Rain before Qingming followed by Beijing spring blowing sand",
+    publishedDate: "2026-04-02",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-heavy-air-pollution-plan",
+    url: "https://english.beijing.gov.cn/latest/lawsandpolicies/202007/t20200723_1957677.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Heavy Air Pollution Contingency Plan of Beijing Municipality",
+    publishedDate: "2020-07-23",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-plum-rain",
+    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240618/571c88c3fab1486db0e94acd8fe91c31.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Shanghai braces for humid rainy season",
+    publishedDate: "2024-06-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-meteorological-regulations",
+    url: "https://english.shanghai.gov.cn/en-LocalRules/20241219/22ad9440df404a4999d56a070667c26b.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Meteorological Regulations of Shanghai Municipality",
+    publishedDate: "2024-12-19",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "guangzhou-climate-geography",
+    url: "https://www.gz.gov.cn/zlgz/gzgk/zrdl/content/post_5725003.html",
+    publisher: "Guangzhou Government",
+    publisherUrl: "https://www.gz.gov.cn",
+    pageTitleEn: "Guangzhou natural geography and climate characteristics",
+    publishedDate: "2020-03-10",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-climate-seasons",
+    url: "https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "Shenzhen climate overview and seasonal characteristics",
+    publishedDate: "2024-05-15",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-back-south",
+    url: "https://weather.sz.gov.cn/szsqxjwzgkml/szsqxjwzgkml/ywzsk/qxfwl/content/post_5613756.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "How return-south damp weather forms",
+    publishedDate: "2015-11-17",
+    verifiedDate: TODAY
   })
 ];
 
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1ed6541a5f066c3b74f8331c4dbf5f589d..ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\pages\SourcesPage.tsx
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/components/common/SourcesNote.tsx b/v2/src/components/common/SourcesNote.tsx
index 9c7ae88e41d50e615293fe97aef3ac89e1ff1376..4670c3a9db3c90a0f1904162df1b377e28b68f72
--- a/v2/src/components/common/SourcesNote.tsx
+++ b/v2/src/components/common/SourcesNote.tsx
@@ -8,14 +8,14 @@
     <p className="mt-6 border-t border-line pt-4 text-xs text-muted">
       {isZh ? (
         <>
-          本页所有数字、政策、地址均引自中国政府官方公开来源；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
+          本页所有数字、政策、地址均引自官方公开来源，包括中国政府、城市机构与 NOAA/WMO 气候常值；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
             查看全部信息来源 →
           </Link>
         </>
       ) : (
         <>
-          Every figure, policy, and address on this page is cited from official Chinese government sources. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
+          Every figure, policy, and address on this page is cited from official public sources, including Chinese government, city agencies, and NOAA/WMO climate normals. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
             See all references →
           </Link>
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}
diff --git a/v2/src/data/sources.ts b/v2/src/data/sources.ts
index c38173f965670286608ae3a874e61ed2d75b7588..4f23091c2d31120ddbe46169a76d5f49a7245bd5
--- a/v2/src/data/sources.ts
+++ b/v2/src/data/sources.ts
@@ -11,7 +11,7 @@
   community?: boolean;
 };
 
-const TODAY = "2026-05-09";
+const TODAY = "2026-05-12";
 
 const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
   ...record,
@@ -933,6 +933,105 @@
     pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
     publishedDate: "2024",
     verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-beijing-54511",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Beijing 54511 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-shanghai-baoshan-58362",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/SHANGHAI__BAOSHAN_58362.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Shanghai Baoshan 58362 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-guangzhou-59287",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/GUANGZHOU_59287.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Guangzhou 59287 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-climate-geography",
+    url: "https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Beijing demographic geography and climate facts",
+    publishedDate: "2020-05-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-spring-dust",
+    url: "https://english.beijing.gov.cn/latest/news/202604/t20260402_4573114.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Rain before Qingming followed by Beijing spring blowing sand",
+    publishedDate: "2026-04-02",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-heavy-air-pollution-plan",
+    url: "https://english.beijing.gov.cn/latest/lawsandpolicies/202007/t20200723_1957677.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Heavy Air Pollution Contingency Plan of Beijing Municipality",
+    publishedDate: "2020-07-23",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-plum-rain",
+    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240618/571c88c3fab1486db0e94acd8fe91c31.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Shanghai braces for humid rainy season",
+    publishedDate: "2024-06-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-meteorological-regulations",
+    url: "https://english.shanghai.gov.cn/en-LocalRules/20241219/22ad9440df404a4999d56a070667c26b.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Meteorological Regulations of Shanghai Municipality",
+    publishedDate: "2024-12-19",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "guangzhou-climate-geography",
+    url: "https://www.gz.gov.cn/zlgz/gzgk/zrdl/content/post_5725003.html",
+    publisher: "Guangzhou Government",
+    publisherUrl: "https://www.gz.gov.cn",
+    pageTitleEn: "Guangzhou natural geography and climate characteristics",
+    publishedDate: "2020-03-10",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-climate-seasons",
+    url: "https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "Shenzhen climate overview and seasonal characteristics",
+    publishedDate: "2024-05-15",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-back-south",
+    url: "https://weather.sz.gov.cn/szsqxjwzgkml/szsqxjwzgkml/ywzsk/qxfwl/content/post_5613756.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "How return-south damp weather forms",
+    publishedDate: "2015-11-17",
+    verifiedDate: TODAY
   })
 ];
 
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1ed6541a5f066c3b74f8331c4dbf5f589d..ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>
diff --git a/v2/src/pages/SourcesPage.tsx b/v2/src/pages/SourcesPage.tsx
index e1d5d2b95c0d2f222179caacc24057a7a5d9997d..b748efaa4bfd4bd99399d381801a92d66bd9870e
--- a/v2/src/pages/SourcesPage.tsx
+++ b/v2/src/pages/SourcesPage.tsx
@@ -29,8 +29,8 @@
       <Section
         titleEn={`Official sources (${official.length})`}
         titleZh={`官方源（${official.length} 条）`}
-        descEn="Chinese government bodies, central ministries, city governments, hospitals, banks, payment networks, foreign embassies in China."
-        descZh="中国政府部委、城市政府、医院、银行、支付组织、外国驻华使领馆。"
+        descEn="Chinese government bodies, central ministries, city governments, official data agencies, hospitals, banks, payment networks, foreign embassies in China."
+        descZh="中国政府部委、城市政府、官方数据机构、医院、银行、支付组织、外国驻华使领馆。"
       >
         <ReferenceList items={official} isZh={isZh} />
       </Section>

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/components/common/SourcesNote.tsx b/v2/src/components/common/SourcesNote.tsx
index 9c7ae88e41d50e615293fe97aef3ac89e1ff1376..4670c3a9db3c90a0f1904162df1b377e28b68f72
--- a/v2/src/components/common/SourcesNote.tsx
+++ b/v2/src/components/common/SourcesNote.tsx
@@ -8,14 +8,14 @@
     <p className="mt-6 border-t border-line pt-4 text-xs text-muted">
       {isZh ? (
         <>
-          本页所有数字、政策、地址均引自中国政府官方公开来源；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
+          本页所有数字、政策、地址均引自官方公开来源，包括中国政府、城市机构与 NOAA/WMO 气候常值；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
             查看全部信息来源 →
           </Link>
         </>
       ) : (
         <>
-          Every figure, policy, and address on this page is cited from official Chinese government sources. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
+          Every figure, policy, and address on this page is cited from official public sources, including Chinese government, city agencies, and NOAA/WMO climate normals. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
             See all references →
           </Link>
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}
diff --git a/v2/src/data/sources.ts b/v2/src/data/sources.ts
index c38173f965670286608ae3a874e61ed2d75b7588..4f23091c2d31120ddbe46169a76d5f49a7245bd5
--- a/v2/src/data/sources.ts
+++ b/v2/src/data/sources.ts
@@ -11,7 +11,7 @@
   community?: boolean;
 };
 
-const TODAY = "2026-05-09";
+const TODAY = "2026-05-12";
 
 const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
   ...record,
@@ -933,6 +933,105 @@
     pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
     publishedDate: "2024",
     verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-beijing-54511",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Beijing 54511 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-shanghai-baoshan-58362",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/SHANGHAI__BAOSHAN_58362.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Shanghai Baoshan 58362 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-guangzhou-59287",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/GUANGZHOU_59287.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Guangzhou 59287 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-climate-geography",
+    url: "https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Beijing demographic geography and climate facts",
+    publishedDate: "2020-05-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-spring-dust",
+    url: "https://english.beijing.gov.cn/latest/news/202604/t20260402_4573114.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Rain before Qingming followed by Beijing spring blowing sand",
+    publishedDate: "2026-04-02",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-heavy-air-pollution-plan",
+    url: "https://english.beijing.gov.cn/latest/lawsandpolicies/202007/t20200723_1957677.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Heavy Air Pollution Contingency Plan of Beijing Municipality",
+    publishedDate: "2020-07-23",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-plum-rain",
+    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240618/571c88c3fab1486db0e94acd8fe91c31.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Shanghai braces for humid rainy season",
+    publishedDate: "2024-06-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-meteorological-regulations",
+    url: "https://english.shanghai.gov.cn/en-LocalRules/20241219/22ad9440df404a4999d56a070667c26b.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Meteorological Regulations of Shanghai Municipality",
+    publishedDate: "2024-12-19",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "guangzhou-climate-geography",
+    url: "https://www.gz.gov.cn/zlgz/gzgk/zrdl/content/post_5725003.html",
+    publisher: "Guangzhou Government",
+    publisherUrl: "https://www.gz.gov.cn",
+    pageTitleEn: "Guangzhou natural geography and climate characteristics",
+    publishedDate: "2020-03-10",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-climate-seasons",
+    url: "https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "Shenzhen climate overview and seasonal characteristics",
+    publishedDate: "2024-05-15",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-back-south",
+    url: "https://weather.sz.gov.cn/szsqxjwzgkml/szsqxjwzgkml/ywzsk/qxfwl/content/post_5613756.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "How return-south damp weather forms",
+    publishedDate: "2015-11-17",
+    verifiedDate: TODAY
   })
 ];
 
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1ed6541a5f066c3b74f8331c4dbf5f589d..ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>
diff --git a/v2/src/pages/SourcesPage.tsx b/v2/src/pages/SourcesPage.tsx
index e1d5d2b95c0d2f222179caacc24057a7a5d9997d..b748efaa4bfd4bd99399d381801a92d66bd9870e
--- a/v2/src/pages/SourcesPage.tsx
+++ b/v2/src/pages/SourcesPage.tsx
@@ -29,8 +29,8 @@
       <Section
         titleEn={`Official sources (${official.length})`}
         titleZh={`官方源（${official.length} 条）`}
-        descEn="Chinese government bodies, central ministries, city governments, hospitals, banks, payment networks, foreign embassies in China."
-        descZh="中国政府部委、城市政府、医院、银行、支付组织、外国驻华使领馆。"
+        descEn="Chinese government bodies, central ministries, city governments, official data agencies, hospitals, banks, payment networks, foreign embassies in China."
+        descZh="中国政府部委、城市政府、官方数据机构、医院、银行、支付组织、外国驻华使领馆。"
       >
         <ReferenceList items={official} isZh={isZh} />
       </Section>

codex
来源说明也更新了。重新跑一次类型检查和 build，确保最终状态仍是 0 error。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
 succeeded in 1933ms:
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/components/common/SourcesNote.tsx b/v2/src/components/common/SourcesNote.tsx
index 9c7ae88e41d50e615293fe97aef3ac89e1ff1376..4670c3a9db3c90a0f1904162df1b377e28b68f72
--- a/v2/src/components/common/SourcesNote.tsx
+++ b/v2/src/components/common/SourcesNote.tsx
@@ -8,14 +8,14 @@
     <p className="mt-6 border-t border-line pt-4 text-xs text-muted">
       {isZh ? (
         <>
-          本页所有数字、政策、地址均引自中国政府官方公开来源；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
+          本页所有数字、政策、地址均引自官方公开来源，包括中国政府、城市机构与 NOAA/WMO 气候常值；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
             查看全部信息来源 →
           </Link>
         </>
       ) : (
         <>
-          Every figure, policy, and address on this page is cited from official Chinese government sources. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
+          Every figure, policy, and address on this page is cited from official public sources, including Chinese government, city agencies, and NOAA/WMO climate normals. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
             See all references →
           </Link>
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}
diff --git a/v2/src/data/sources.ts b/v2/src/data/sources.ts
index c38173f965670286608ae3a874e61ed2d75b7588..4f23091c2d31120ddbe46169a76d5f49a7245bd5
--- a/v2/src/data/sources.ts
+++ b/v2/src/data/sources.ts
@@ -11,7 +11,7 @@
   community?: boolean;
 };
 
-const TODAY = "2026-05-09";
+const TODAY = "2026-05-12";
 
 const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
   ...record,
@@ -933,6 +933,105 @@
     pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
     publishedDate: "2024",
     verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-beijing-54511",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Beijing 54511 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-shanghai-baoshan-58362",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/SHANGHAI__BAOSHAN_58362.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Shanghai Baoshan 58362 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-guangzhou-59287",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/GUANGZHOU_59287.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Guangzhou 59287 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-climate-geography",
+    url: "https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Beijing demographic geography and climate facts",
+    publishedDate: "2020-05-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-spring-dust",
+    url: "https://english.beijing.gov.cn/latest/news/202604/t20260402_4573114.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Rain before Qingming followed by Beijing spring blowing sand",
+    publishedDate: "2026-04-02",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-heavy-air-pollution-plan",
+    url: "https://english.beijing.gov.cn/latest/lawsandpolicies/202007/t20200723_1957677.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Heavy Air Pollution Contingency Plan of Beijing Municipality",
+    publishedDate: "2020-07-23",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-plum-rain",
+    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240618/571c88c3fab1486db0e94acd8fe91c31.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Shanghai braces for humid rainy season",
+    publishedDate: "2024-06-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-meteorological-regulations",
+    url: "https://english.shanghai.gov.cn/en-LocalRules/20241219/22ad9440df404a4999d56a070667c26b.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Meteorological Regulations of Shanghai Municipality",
+    publishedDate: "2024-12-19",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "guangzhou-climate-geography",
+    url: "https://www.gz.gov.cn/zlgz/gzgk/zrdl/content/post_5725003.html",
+    publisher: "Guangzhou Government",
+    publisherUrl: "https://www.gz.gov.cn",
+    pageTitleEn: "Guangzhou natural geography and climate characteristics",
+    publishedDate: "2020-03-10",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-climate-seasons",
+    url: "https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "Shenzhen climate overview and seasonal characteristics",
+    publishedDate: "2024-05-15",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-back-south",
+    url: "https://weather.sz.gov.cn/szsqxjwzgkml/szsqxjwzgkml/ywzsk/qxfwl/content/post_5613756.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "How return-south damp weather forms",
+    publishedDate: "2015-11-17",
+    verifiedDate: TODAY
   })
 ];
 
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1ed6541a5f066c3b74f8331c4dbf5f589d..ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>
diff --git a/v2/src/pages/SourcesPage.tsx b/v2/src/pages/SourcesPage.tsx
index e1d5d2b95c0d2f222179caacc24057a7a5d9997d..b748efaa4bfd4bd99399d381801a92d66bd9870e
--- a/v2/src/pages/SourcesPage.tsx
+++ b/v2/src/pages/SourcesPage.tsx
@@ -29,8 +29,8 @@
       <Section
         titleEn={`Official sources (${official.length})`}
         titleZh={`官方源（${official.length} 条）`}
-        descEn="Chinese government bodies, central ministries, city governments, hospitals, banks, payment networks, foreign embassies in China."
-        descZh="中国政府部委、城市政府、医院、银行、支付组织、外国驻华使领馆。"
+        descEn="Chinese government bodies, central ministries, city governments, official data agencies, hospitals, banks, payment networks, foreign embassies in China."
+        descZh="中国政府部委、城市政府、官方数据机构、医院、银行、支付组织、外国驻华使领馆。"
       >
         <ReferenceList items={official} isZh={isZh} />
       </Section>

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 9321ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1516 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                     7.22 kB │ gzip:     1.05 kB
build/client/assets/Map3D-B9DDZdqH.css              24.01 kB │ gzip:     5.37 kB
build/client/assets/root-DFSdV8o5.css               45.95 kB │ gzip:     8.61 kB
build/client/assets/language-BOubID-Z.js             0.26 kB │ gzip:     0.22 kB
build/client/assets/clsx-CQXsFDzQ.js                 0.36 kB │ gzip:     0.23 kB
build/client/assets/jsonLd-BO2zCPGg.js               0.47 kB │ gzip:     0.33 kB
build/client/assets/cityRoutes-BYrYBQ2Q.js           0.91 kB │ gzip:     0.50 kB
build/client/assets/chunk-DrL5kMTW.js                0.95 kB │ gzip:     0.56 kB
build/client/assets/provinceColors-D1tQ2RWj.js       1.84 kB │ gzip:     0.95 kB
build/client/assets/HomePage-B3SoqIJw.js             6.41 kB │ gzip:     2.98 kB
build/client/assets/SharePage-CgxDzIGp.js            7.48 kB │ gzip:     2.76 kB
build/client/assets/phase2-preview-CvitKUEZ.js       7.59 kB │ gzip:     4.48 kB
build/client/assets/AskPage-CEHtNNR2.js              7.62 kB │ gzip:     2.92 kB
build/client/assets/Map3D-DnZt3fi_.js                8.95 kB │ gzip:     4.22 kB
build/client/assets/PhrasebookPage-CK_4T76N.js       8.99 kB │ gzip:     3.82 kB
build/client/assets/GuidePage-C55vTHmB.js           11.36 kB │ gzip:     5.35 kB
build/client/assets/root-DgkNj9B3.js                11.51 kB │ gzip:     5.28 kB
build/client/assets/transport-BJiJMhS4.js           12.28 kB │ gzip:     5.22 kB
build/client/assets/MapPage-MBXXq6my.js             13.67 kB │ gzip:     5.00 kB
build/client/assets/PlanPage-kXEL5_gI.js            16.91 kB │ gzip:     7.80 kB
build/client/assets/practical-other-Bs25E_ay.js     22.32 kB │ gzip:    10.76 kB
build/client/assets/unsplash-CEv8iAF0.js            22.72 kB │ gzip:    10.50 kB
build/client/assets/atlas-DBEJCkPf.js               23.24 kB │ gzip:     9.57 kB
build/client/assets/SourcesPage-C4F0Z2N7.js         35.81 kB │ gzip:     9.32 kB
build/client/assets/SourcesNote-DOFjLW7i.js         39.12 kB │ gzip:    14.99 kB
build/client/assets/CityPage-LKjkJ6QI.js            66.46 kB │ gzip:    24.76 kB
build/client/assets/jsx-runtime-BVQep7R1.js        127.17 kB │ gzip:    41.93 kB
build/client/assets/entry.client-BrU9wu6P.js       186.53 kB │ gzip:    58.89 kB
build/client/assets/Cesium-NBJLZNKc.js           4,724.63 kB │ gzip: 1,304.40 kB

[32m✓ built in 5.59s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 77 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m
[2mbuild\server\assets\server-build-DFSdV8o5.css[22m

Prerender (html): / -> [1mbuild\client\index.html[22m
Prerender (html): /map -> [1mbuild\client\map\index.html[22m
Prerender (html): /phrasebook -> [1mbuild\client\phrasebook\index.html[22m
Prerender (html): /guide/entry -> [1mbuild\client\guide\entry\index.html[22m
Prerender (html): /guide/payments -> [1mbuild\client\guide\payments\index.html[22m
Prerender (html): /guide/notes -> [1mbuild\client\guide\notes\index.html[22m
Prerender (html): /plan -> [1mbuild\client\plan\index.html[22m
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
build/server/.vite/manifest.json                 0.74 kB │ gzip:   0.27 kB
build/server/assets/Map3D-B9DDZdqH.css          24.01 kB │ gzip:   5.37 kB
build/server/assets/server-build-DFSdV8o5.css   45.95 kB │ gzip:   8.61 kB
build/server/assets/Map3D-Cv42P-Ue.js           15.47 kB │ gzip:   5.32 kB
build/server/assets/cityRoutes-Byzkxm76.js      31.42 kB │ gzip:  10.70 kB
build/server/index.js                          378.71 kB │ gzip: 118.21 kB

[32m✓ built in 614ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:virtual-modules (41%)
  - react-router:dot-server (34%)
  - react-router:inject-hmr-runtime (16%)
  - react-router:hmr-runtime (5%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/components/common/SourcesNote.tsx b/v2/src/components/common/SourcesNote.tsx
index 9c7ae88e41d50e615293fe97aef3ac89e1ff1376..4670c3a9db3c90a0f1904162df1b377e28b68f72
--- a/v2/src/components/common/SourcesNote.tsx
+++ b/v2/src/components/common/SourcesNote.tsx
@@ -8,14 +8,14 @@
     <p className="mt-6 border-t border-line pt-4 text-xs text-muted">
       {isZh ? (
         <>
-          本页所有数字、政策、地址均引自中国政府官方公开来源；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
+          本页所有数字、政策、地址均引自官方公开来源，包括中国政府、城市机构与 NOAA/WMO 气候常值；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
             查看全部信息来源 →
           </Link>
         </>
       ) : (
         <>
-          Every figure, policy, and address on this page is cited from official Chinese government sources. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
+          Every figure, policy, and address on this page is cited from official public sources, including Chinese government, city agencies, and NOAA/WMO climate normals. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
             See all references →
           </Link>
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}
diff --git a/v2/src/data/sources.ts b/v2/src/data/sources.ts
index c38173f965670286608ae3a874e61ed2d75b7588..4f23091c2d31120ddbe46169a76d5f49a7245bd5
--- a/v2/src/data/sources.ts
+++ b/v2/src/data/sources.ts
@@ -11,7 +11,7 @@
   community?: boolean;
 };
 
-const TODAY = "2026-05-09";
+const TODAY = "2026-05-12";
 
 const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
   ...record,
@@ -933,6 +933,105 @@
     pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
     publishedDate: "2024",
     verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-beijing-54511",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Beijing 54511 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-shanghai-baoshan-58362",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/SHANGHAI__BAOSHAN_58362.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Shanghai Baoshan 58362 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-guangzhou-59287",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/GUANGZHOU_59287.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Guangzhou 59287 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-climate-geography",
+    url: "https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Beijing demographic geography and climate facts",
+    publishedDate: "2020-05-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-spring-dust",
+    url: "https://english.beijing.gov.cn/latest/news/202604/t20260402_4573114.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Rain before Qingming followed by Beijing spring blowing sand",
+    publishedDate: "2026-04-02",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-heavy-air-pollution-plan",
+    url: "https://english.beijing.gov.cn/latest/lawsandpolicies/202007/t20200723_1957677.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Heavy Air Pollution Contingency Plan of Beijing Municipality",
+    publishedDate: "2020-07-23",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-plum-rain",
+    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240618/571c88c3fab1486db0e94acd8fe91c31.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Shanghai braces for humid rainy season",
+    publishedDate: "2024-06-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-meteorological-regulations",
+    url: "https://english.shanghai.gov.cn/en-LocalRules/20241219/22ad9440df404a4999d56a070667c26b.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Meteorological Regulations of Shanghai Municipality",
+    publishedDate: "2024-12-19",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "guangzhou-climate-geography",
+    url: "https://www.gz.gov.cn/zlgz/gzgk/zrdl/content/post_5725003.html",
+    publisher: "Guangzhou Government",
+    publisherUrl: "https://www.gz.gov.cn",
+    pageTitleEn: "Guangzhou natural geography and climate characteristics",
+    publishedDate: "2020-03-10",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-climate-seasons",
+    url: "https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "Shenzhen climate overview and seasonal characteristics",
+    publishedDate: "2024-05-15",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-back-south",
+    url: "https://weather.sz.gov.cn/szsqxjwzgkml/szsqxjwzgkml/ywzsk/qxfwl/content/post_5613756.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "How return-south damp weather forms",
+    publishedDate: "2015-11-17",
+    verifiedDate: TODAY
   })
 ];
 
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1ed6541a5f066c3b74f8331c4dbf5f589d..ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>
diff --git a/v2/src/pages/SourcesPage.tsx b/v2/src/pages/SourcesPage.tsx
index e1d5d2b95c0d2f222179caacc24057a7a5d9997d..b748efaa4bfd4bd99399d381801a92d66bd9870e
--- a/v2/src/pages/SourcesPage.tsx
+++ b/v2/src/pages/SourcesPage.tsx
@@ -29,8 +29,8 @@
       <Section
         titleEn={`Official sources (${official.length})`}
         titleZh={`官方源（${official.length} 条）`}
-        descEn="Chinese government bodies, central ministries, city governments, hospitals, banks, payment networks, foreign embassies in China."
-        descZh="中国政府部委、城市政府、医院、银行、支付组织、外国驻华使领馆。"
+        descEn="Chinese government bodies, central ministries, city governments, official data agencies, hospitals, banks, payment networks, foreign embassies in China."
+        descZh="中国政府部委、城市政府、官方数据机构、医院、银行、支付组织、外国驻华使领馆。"
       >
         <ReferenceList items={official} isZh={isZh} />
       </Section>

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short' in c:\Users\h\Documents\New project 2\v2
 succeeded in 436ms:
 M public/sitemap.xml
 M react-router.config.ts
 M src/App.tsx
 M src/components/city/CityNav.tsx
 M src/components/common/SourcesNote.tsx
 M src/components/layout/SiteHeader.tsx
 M src/data/sources.ts
 M src/pages/CityPage.tsx
 M src/pages/HomePage.tsx
 M src/pages/SourcesPage.tsx
 M src/root.tsx
 M src/routes.ts
?? ../.omc/artifacts/ask/codex-v2-workdir-edit-build-3-day-per-city-trip-planner-1-v2-src-d-2026-05-12T03-36-21-956Z.md
?? ../.omc/artifacts/ask/codex-v2-workdir-edit-build-phrasebook-phrasebook-1-v2-src-data-ph-2026-05-12T03-30-30-679Z.md
?? src/components/city/CitySeasonBlock.tsx
?? src/components/common/ScrollToTop.tsx
?? src/data/city-seasons.ts
?? src/data/itineraries.ts
?? src/data/phrasebook.ts
?? src/pages/PhrasebookPage.tsx
?? src/pages/PlanPage.tsx

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/components/common/SourcesNote.tsx b/v2/src/components/common/SourcesNote.tsx
index 9c7ae88e41d50e615293fe97aef3ac89e1ff1376..4670c3a9db3c90a0f1904162df1b377e28b68f72
--- a/v2/src/components/common/SourcesNote.tsx
+++ b/v2/src/components/common/SourcesNote.tsx
@@ -8,14 +8,14 @@
     <p className="mt-6 border-t border-line pt-4 text-xs text-muted">
       {isZh ? (
         <>
-          本页所有数字、政策、地址均引自中国政府官方公开来源；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
+          本页所有数字、政策、地址均引自官方公开来源，包括中国政府、城市机构与 NOAA/WMO 气候常值；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
             查看全部信息来源 →
           </Link>
         </>
       ) : (
         <>
-          Every figure, policy, and address on this page is cited from official Chinese government sources. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
+          Every figure, policy, and address on this page is cited from official public sources, including Chinese government, city agencies, and NOAA/WMO climate normals. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
             See all references →
           </Link>
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}
diff --git a/v2/src/data/sources.ts b/v2/src/data/sources.ts
index c38173f965670286608ae3a874e61ed2d75b7588..4f23091c2d31120ddbe46169a76d5f49a7245bd5
--- a/v2/src/data/sources.ts
+++ b/v2/src/data/sources.ts
@@ -11,7 +11,7 @@
   community?: boolean;
 };
 
-const TODAY = "2026-05-09";
+const TODAY = "2026-05-12";
 
 const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
   ...record,
@@ -933,6 +933,105 @@
     pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
     publishedDate: "2024",
     verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-beijing-54511",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Beijing 54511 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-shanghai-baoshan-58362",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/SHANGHAI__BAOSHAN_58362.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Shanghai Baoshan 58362 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-guangzhou-59287",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/GUANGZHOU_59287.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Guangzhou 59287 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-climate-geography",
+    url: "https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Beijing demographic geography and climate facts",
+    publishedDate: "2020-05-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-spring-dust",
+    url: "https://english.beijing.gov.cn/latest/news/202604/t20260402_4573114.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Rain before Qingming followed by Beijing spring blowing sand",
+    publishedDate: "2026-04-02",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-heavy-air-pollution-plan",
+    url: "https://english.beijing.gov.cn/latest/lawsandpolicies/202007/t20200723_1957677.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Heavy Air Pollution Contingency Plan of Beijing Municipality",
+    publishedDate: "2020-07-23",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-plum-rain",
+    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240618/571c88c3fab1486db0e94acd8fe91c31.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Shanghai braces for humid rainy season",
+    publishedDate: "2024-06-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-meteorological-regulations",
+    url: "https://english.shanghai.gov.cn/en-LocalRules/20241219/22ad9440df404a4999d56a070667c26b.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Meteorological Regulations of Shanghai Municipality",
+    publishedDate: "2024-12-19",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "guangzhou-climate-geography",
+    url: "https://www.gz.gov.cn/zlgz/gzgk/zrdl/content/post_5725003.html",
+    publisher: "Guangzhou Government",
+    publisherUrl: "https://www.gz.gov.cn",
+    pageTitleEn: "Guangzhou natural geography and climate characteristics",
+    publishedDate: "2020-03-10",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-climate-seasons",
+    url: "https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "Shenzhen climate overview and seasonal characteristics",
+    publishedDate: "2024-05-15",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-back-south",
+    url: "https://weather.sz.gov.cn/szsqxjwzgkml/szsqxjwzgkml/ywzsk/qxfwl/content/post_5613756.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "How return-south damp weather forms",
+    publishedDate: "2015-11-17",
+    verifiedDate: TODAY
   })
 ];
 
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1ed6541a5f066c3b74f8331c4dbf5f589d..ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>
diff --git a/v2/src/pages/SourcesPage.tsx b/v2/src/pages/SourcesPage.tsx
index e1d5d2b95c0d2f222179caacc24057a7a5d9997d..b748efaa4bfd4bd99399d381801a92d66bd9870e
--- a/v2/src/pages/SourcesPage.tsx
+++ b/v2/src/pages/SourcesPage.tsx
@@ -29,8 +29,8 @@
       <Section
         titleEn={`Official sources (${official.length})`}
         titleZh={`官方源（${official.length} 条）`}
-        descEn="Chinese government bodies, central ministries, city governments, hospitals, banks, payment networks, foreign embassies in China."
-        descZh="中国政府部委、城市政府、医院、银行、支付组织、外国驻华使领馆。"
+        descEn="Chinese government bodies, central ministries, city governments, official data agencies, hospitals, banks, payment networks, foreign embassies in China."
+        descZh="中国政府部委、城市政府、官方数据机构、医院、银行、支付组织、外国驻华使领馆。"
       >
         <ReferenceList items={official} isZh={isZh} />
       </Section>

codex
已完成。

4 城数据：北京秋/早春，含春沙尘与冬季 AQI；上海春秋，含梅雨和夏末风雨；广州 11-12 月/3 月，含前汛期和台风；深圳 10-12 月/3 月，含台风 + 回南天。来源已入 `sources.ts`：NOAA WMO、北京/上海/广州/深圳官方气象或政府源。

改动文件：`city-seasons.ts`、`CitySeasonBlock.tsx`、`CityNav.tsx`、`CityPage.tsx`、`sources.ts`，并修正 `SourcesNote.tsx` / `SourcesPage.tsx` 的来源说明。

验证：`npx tsc --noEmit` 0 error；`npm run build` 0 error，仅 Vite chunk/plugin timing warning。
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index 0ae0f92b1a74fc1eb2600ed7521377d27b6ed1d8..b9beea6962d3ea48583e95d7e3ada261c78f98e3
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -4,11 +4,12 @@
 
 type CityNavItem = { id: string; en: string; zh: string };
 
-const CITY_NAV_ITEMS: CityNavItem[] = [
-  { id: "intro", en: "City overview", zh: "城市介绍" },
-  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
-  { id: "payments", en: "Payments", zh: "支付" },
-  { id: "transport", en: "Transport", zh: "交通" },
+const CITY_NAV_ITEMS: CityNavItem[] = [
+  { id: "intro", en: "City overview", zh: "城市介绍" },
+  { id: "season", en: "When to visit", zh: "最佳季节" },
+  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
+  { id: "payments", en: "Payments", zh: "支付" },
+  { id: "transport", en: "Transport", zh: "交通" },
   { id: "food", en: "Food", zh: "美食" },
   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
   { id: "portals", en: "Official portals", zh: "官方延伸" }
diff --git a/v2/src/components/city/CitySeasonBlock.tsx b/v2/src/components/city/CitySeasonBlock.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..41c5aa90eecd567230e18a76b7be851dff73c3d8
--- /dev/null
+++ b/v2/src/components/city/CitySeasonBlock.tsx
@@ -0,0 +1,127 @@
+import clsx from "clsx";
+import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
+import { CITY_LABELS, type CityId } from "../../data/transport";
+import { useLang } from "../../store/language";
+
+type Props = { cityId: CityId };
+
+const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
+  low: { en: "Low rain", zh: "少雨", strength: 1 },
+  med: { en: "Moderate rain", zh: "中等雨量", strength: 2 },
+  high: { en: "Heavy rain", zh: "雨量高", strength: 3 }
+};
+
+const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
+  low: { en: "Low crowds", zh: "淡季", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
+  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
+  high: { en: "High crowds", zh: "旺季", className: "border-rose-200 bg-rose-50 text-rose-800" }
+};
+
+export default function CitySeasonBlock({ cityId }: Props) {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const season = seasonByCity(cityId);
+  const city = CITY_LABELS[cityId];
+
+  return (
+    <div className="flex flex-col gap-5">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "最佳季节" : "When to visit"}
+        </span>
+        <h2 className="text-xl font-bold">
+          {isZh ? `${city.zh}什么时候去` : `Best time to visit ${city.en}`}
+        </h2>
+      </header>
+
+      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
+        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
+          {isZh ? "最佳月份" : "Best months"}
+        </span>
+        <div className="mt-2 text-2xl font-bold text-yellow-950">
+          {isZh ? season.bestMonths.zh : season.bestMonths.en}
+        </div>
+        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
+          {isZh ? season.reason.zh : season.reason.en}
+        </p>
+      </div>
+
+      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
+        {season.monthlyClimate.map((climate) => {
+          const rain = rainfallMeta[climate.rainfall];
+          const crowd = crowdMeta[climate.crowdLevel];
+          return (
+            <article
+              key={climate.monthRange}
+              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
+            >
+              <div className="flex items-start justify-between gap-3">
+                <div>
+                  <h3 className="font-bold">{climate.monthRange}</h3>
+                  <p className="text-2xl font-bold tabular-nums">
+                    {climate.tempC.low} - {climate.tempC.high} C
+                  </p>
+                </div>
+                <RainIcon level={climate.rainfall} />
+              </div>
+
+              <div className="grid gap-2 text-xs">
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "雨量" : "Rainfall"}</span>
+                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
+                </div>
+                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
+                  <span className="font-bold text-muted">{isZh ? "人流" : "Crowds"}</span>
+                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
+                    {isZh ? crowd.zh : crowd.en}
+                  </span>
+                </div>
+              </div>
+
+              <p className="text-sm leading-relaxed text-ink/80">
+                {isZh ? climate.summary.zh : climate.summary.en}
+              </p>
+            </article>
+          );
+        })}
+      </div>
+
+      <div className="flex flex-col gap-2">
+        <h3 className="text-sm font-bold">{isZh ? "特别留意" : "Watch outs"}</h3>
+        <ul className="grid gap-2">
+          {season.watchOuts.map((item) => (
+            <li
+              key={item.en}
+              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
+            >
+              {isZh ? item.zh : item.en}
+            </li>
+          ))}
+        </ul>
+      </div>
+    </div>
+  );
+}
+
+function RainIcon({ level }: { level: RainfallLevel }) {
+  const { strength } = rainfallMeta[level];
+  return (
+    <span
+      aria-hidden="true"
+      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
+    >
+      {[1, 2, 3].map((value) => (
+        <span
+          key={value}
+          className={clsx(
+            "mb-2 block w-1.5 rounded-full bg-sky-600",
+            value <= strength ? "opacity-90" : "opacity-20",
+            value === 1 && "h-2",
+            value === 2 && "h-3",
+            value === 3 && "h-4"
+          )}
+        />
+      ))}
+    </span>
+  );
+}
diff --git a/v2/src/components/common/SourcesNote.tsx b/v2/src/components/common/SourcesNote.tsx
index 9c7ae88e41d50e615293fe97aef3ac89e1ff1376..4670c3a9db3c90a0f1904162df1b377e28b68f72
--- a/v2/src/components/common/SourcesNote.tsx
+++ b/v2/src/components/common/SourcesNote.tsx
@@ -8,14 +8,14 @@
     <p className="mt-6 border-t border-line pt-4 text-xs text-muted">
       {isZh ? (
         <>
-          本页所有数字、政策、地址均引自中国政府官方公开来源；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
+          本页所有数字、政策、地址均引自官方公开来源，包括中国政府、城市机构与 NOAA/WMO 气候常值；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
             查看全部信息来源 →
           </Link>
         </>
       ) : (
         <>
-          Every figure, policy, and address on this page is cited from official Chinese government sources. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
+          Every figure, policy, and address on this page is cited from official public sources, including Chinese government, city agencies, and NOAA/WMO climate normals. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
             See all references →
           </Link>
diff --git a/v2/src/data/city-seasons.ts b/v2/src/data/city-seasons.ts
new file mode 100644
index 0000000000000000000000000000000000000000..960e703c1792dda389ee2726cc0fb16c00547a3b
--- /dev/null
+++ b/v2/src/data/city-seasons.ts
@@ -0,0 +1,330 @@
+import type { CityId } from "./transport";
+
+export type RainfallLevel = "low" | "med" | "high";
+export type CrowdLevel = "low" | "med" | "high";
+
+export type CitySeason = {
+  cityId: CityId;
+  bestMonths: { en: string; zh: string };
+  reason: { en: string; zh: string };
+  sourceId: string;
+  monthlyClimate: Array<{
+    monthRange: string;
+    tempC: { low: number; high: number };
+    rainfall: RainfallLevel;
+    summary: { en: string; zh: string };
+    crowdLevel: CrowdLevel;
+    sourceId: string;
+  }>;
+  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
+};
+
+export const citySeasons: CitySeason[] = [
+  {
+    cityId: "beijing",
+    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 月、3-4 月" },
+    reason: {
+      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
+      zh: "秋季最干爽清透；早春尚未进入暑热，但要留意大风和沙尘。"
+    },
+    sourceId: "noaa-wmo-beijing-54511",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 2, high: 27 },
+        rainfall: "low",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
+          zh: "从清冷早晨迅速转暖，整体少雨多风，是公园和胡同游的热门季。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 20, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
+          zh: "季风暑热明显，全年降雨集中在 7-8 月，机场和铁路行程要留缓冲。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 1, high: 27 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
+          zh: "秋高气爽、昼夜温差加大；10 月红叶和国庆需求会推高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: -7, high: 6 },
+        rainfall: "low",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-beijing-54511",
+        summary: {
+          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
+          zh: "寒冷干燥，非节假日景点较清静，户外景点清晨可能结冰。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
+        zh: "春季冷空气可能带来偏北大风和扬沙，去长城等户外点位建议备护目和口罩。",
+        sourceId: "beijing-spring-dust"
+      },
+      {
+        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
+        zh: "夏季降雨集中在 7-8 月，短时强降雨会拖慢打车、换乘和机场进出。",
+        sourceId: "beijing-climate-geography"
+      },
+      {
+        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
+        zh: "重污染天已明显减少，但官方仍保留预警机制；冬季静稳天建议查看 AQI。",
+        sourceId: "beijing-heavy-air-pollution-plan"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 月、3-5 月" },
+    reason: {
+      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
+      zh: "春秋温和适合步行，可避开梅雨高湿期和最闷热的台风风险周。"
+    },
+    sourceId: "noaa-wmo-shanghai-baoshan-58362",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 7, high: 25 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
+          zh: "适合外滩和老街区步行，晚春小雨增多，随身带轻便雨具。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 22, high: 32 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
+          zh: "夏季闷热潮湿，6-7 月梅雨和 8 月强降雨多，建议准备室内备选行程。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 11, high: 28 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
+          zh: "9 月仍偏暖，10-11 月转为清爽；会展和假日会推高住宿需求。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 2, high: 11 },
+        rainfall: "med",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362",
+        summary: {
+          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
+          zh: "湿冷感明显但少有深冻，博物馆和餐饮街区更容易安排。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
+        zh: "梅雨通常在 6-7 月，连续阴雨和高湿会让衣物、房间更易返潮发霉。",
+        sourceId: "shanghai-plum-rain"
+      },
+      {
+        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
+        zh: "夏末的暴雨、大风和台风外围影响可能打断滨江步行与航班。",
+        sourceId: "shanghai-meteorological-regulations"
+      },
+      {
+        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
+        zh: "冬季数值不算极低，但湿冷会让 4-11 C 的体感明显偏冷。",
+        sourceId: "noaa-wmo-shanghai-baoshan-58362"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 月、3 月" },
+    reason: {
+      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
+      zh: "这几段更干爽温和，可避开 4-6 月雨峰、盛夏高温和主要台风季。"
+    },
+    sourceId: "noaa-wmo-guangzhou-59287",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 16, high: 30 },
+        rainfall: "high",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
+          zh: "气温回升且雨量快速增加，4 月入前汛期，广交会周住宿更紧张。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 25, high: 33 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
+          zh: "暑热和强降雨叠加，暴雨峰值明显，短时雷雨打断户外行程很常见。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 17, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
+          zh: "9 月仍热且需留意台风，10-11 月转干爽，但秋季广交会带来高人流。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 11, high: 21 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "noaa-wmo-guangzhou-59287",
+        summary: {
+          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
+          zh: "温和少雨、晴天多；冷空气过程通常短暂，但室内会有湿冷感。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
+        zh: "4-6 月前汛期降雨强度高，龙舟水期间容易出现多轮强降雨。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
+        zh: "7-8 月是热带气旋影响主要时段，9 月仍可能受台风风雨影响。",
+        sourceId: "guangzhou-climate-geography"
+      },
+      {
+        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
+        zh: "夏季高温高湿叠加，老城美食步行之间最好安排室内降温休息。",
+        sourceId: "noaa-wmo-guangzhou-59287"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 月、3 月" },
+    reason: {
+      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
+      zh: "深秋到初冬最稳定干爽；3 月温和，但冷空气后可能出现回南潮湿。"
+    },
+    sourceId: "shenzhen-climate-seasons",
+    monthlyClimate: [
+      {
+        monthRange: "Mar-May",
+        tempC: { low: 17, high: 30 },
+        rainfall: "high",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
+          zh: "春季转暖但多变，4-5 月雨量明显增加，冷后回暖时可能回南返潮。"
+        }
+      },
+      {
+        monthRange: "Jun-Aug",
+        tempC: { low: 26, high: 32 },
+        rainfall: "high",
+        crowdLevel: "low",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
+          zh: "长夏高温多雨，台风、季风雨和局地短时强降雨是主要出行风险。"
+        }
+      },
+      {
+        monthRange: "Sep-Nov",
+        tempC: { low: 19, high: 32 },
+        rainfall: "med",
+        crowdLevel: "high",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
+          zh: "9 月仍热且湿，10-11 月明显转晴转干，更适合海岸和城市步行。"
+        }
+      },
+      {
+        monthRange: "Dec-Feb",
+        tempC: { low: 13, high: 22 },
+        rainfall: "low",
+        crowdLevel: "med",
+        sourceId: "shenzhen-climate-seasons",
+        summary: {
+          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
+          zh: "整体温和少雨；短暂冷空气和春节前后深港通关高峰是主要变量。"
+        }
+      }
+    ],
+    watchOuts: [
+      {
+        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
+        zh: "回南天多见于 2-3 月，冷空气后突然转暖转湿时墙面、地面容易返潮。",
+        sourceId: "shenzhen-back-south"
+      },
+      {
+        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
+        zh: "7-9 月平均有 3-4 个热带气旋影响深圳，轮渡、海边和航班可能快速暂停。",
+        sourceId: "shenzhen-climate-seasons"
+      },
+      {
+        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
+        zh: "4-6 月强对流活跃，即使早晨晴朗，午后也可能突发短时强降雨和局地积水。",
+        sourceId: "shenzhen-climate-seasons"
+      }
+    ]
+  }
+];
+
+export function seasonByCity(cityId: CityId): CitySeason {
+  const season = citySeasons.find((item) => item.cityId === cityId);
+  if (!season) {
+    throw new Error(`Missing season data for city: ${cityId}`);
+  }
+  return season;
+}
+
+export function seasonSourceIds(cityId?: CityId): string[] {
+  const ids = new Set<string>();
+  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
+  seasons.forEach((season) => {
+    ids.add(season.sourceId);
+    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
+    season.watchOuts.forEach((item) => ids.add(item.sourceId));
+  });
+  return [...ids];
+}
diff --git a/v2/src/data/sources.ts b/v2/src/data/sources.ts
index c38173f965670286608ae3a874e61ed2d75b7588..4f23091c2d31120ddbe46169a76d5f49a7245bd5
--- a/v2/src/data/sources.ts
+++ b/v2/src/data/sources.ts
@@ -11,7 +11,7 @@
   community?: boolean;
 };
 
-const TODAY = "2026-05-09";
+const TODAY = "2026-05-12";
 
 const make = (record: Omit<SourceCitation, "domain">): SourceCitation => ({
   ...record,
@@ -933,6 +933,105 @@
     pageTitleEn: "Beijing emergency numbers (120 / 999 / 110)",
     publishedDate: "2024",
     verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-beijing-54511",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/BEIJING_54511.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Beijing 54511 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-shanghai-baoshan-58362",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/SHANGHAI__BAOSHAN_58362.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Shanghai Baoshan 58362 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "noaa-wmo-guangzhou-59287",
+    url: "https://www.ncei.noaa.gov/archive/accession/0253808/data/0-data/Region-2-WMO-Normals-9120/China/CSV/GUANGZHOU_59287.csv",
+    publisher: "NOAA NCEI",
+    publisherUrl: "https://www.ncei.noaa.gov",
+    pageTitleEn: "WMO Climate Normals 1991-2020 - Guangzhou 59287 station CSV",
+    publishedDate: "2023-02-13",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-climate-geography",
+    url: "https://english.beijing.gov.cn/beijinginfo/facts/demographicgeography/202005/t20200518_1900888.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Beijing demographic geography and climate facts",
+    publishedDate: "2020-05-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-spring-dust",
+    url: "https://english.beijing.gov.cn/latest/news/202604/t20260402_4573114.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Rain before Qingming followed by Beijing spring blowing sand",
+    publishedDate: "2026-04-02",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "beijing-heavy-air-pollution-plan",
+    url: "https://english.beijing.gov.cn/latest/lawsandpolicies/202007/t20200723_1957677.html",
+    publisher: "Beijing Government",
+    publisherUrl: "https://english.beijing.gov.cn",
+    pageTitleEn: "Heavy Air Pollution Contingency Plan of Beijing Municipality",
+    publishedDate: "2020-07-23",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-plum-rain",
+    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240618/571c88c3fab1486db0e94acd8fe91c31.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Shanghai braces for humid rainy season",
+    publishedDate: "2024-06-18",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shanghai-meteorological-regulations",
+    url: "https://english.shanghai.gov.cn/en-LocalRules/20241219/22ad9440df404a4999d56a070667c26b.html",
+    publisher: "Shanghai Government",
+    publisherUrl: "https://english.shanghai.gov.cn",
+    pageTitleEn: "Meteorological Regulations of Shanghai Municipality",
+    publishedDate: "2024-12-19",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "guangzhou-climate-geography",
+    url: "https://www.gz.gov.cn/zlgz/gzgk/zrdl/content/post_5725003.html",
+    publisher: "Guangzhou Government",
+    publisherUrl: "https://www.gz.gov.cn",
+    pageTitleEn: "Guangzhou natural geography and climate characteristics",
+    publishedDate: "2020-03-10",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-climate-seasons",
+    url: "https://weather.sz.gov.cn/mobile/qixiangfuwu/qihoufuwu/qihouguanceyupinggu/qihougaikuang/content/mpost_3575919.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "Shenzhen climate overview and seasonal characteristics",
+    publishedDate: "2024-05-15",
+    verifiedDate: TODAY
+  }),
+  make({
+    id: "shenzhen-back-south",
+    url: "https://weather.sz.gov.cn/szsqxjwzgkml/szsqxjwzgkml/ywzsk/qxfwl/content/post_5613756.html",
+    publisher: "Shenzhen Meteorological Bureau",
+    publisherUrl: "https://weather.sz.gov.cn",
+    pageTitleEn: "How return-south damp weather forms",
+    publishedDate: "2015-11-17",
+    verifiedDate: TODAY
   })
 ];
 
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index 38460e1ed6541a5f066c3b74f8331c4dbf5f589d..ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -13,6 +13,7 @@
 import CityNav from "../components/city/CityNav";
 import CityIntro from "../components/city/CityIntro";
 import CityImagePanel from "../components/city/CityImagePanel";
+import CitySeasonBlock from "../components/city/CitySeasonBlock";
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -114,6 +115,7 @@
 
         <div className="flex min-w-0 flex-col gap-12">
           <CityIntro cityId={id} />
+          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>
diff --git a/v2/src/pages/SourcesPage.tsx b/v2/src/pages/SourcesPage.tsx
index e1d5d2b95c0d2f222179caacc24057a7a5d9997d..b748efaa4bfd4bd99399d381801a92d66bd9870e
--- a/v2/src/pages/SourcesPage.tsx
+++ b/v2/src/pages/SourcesPage.tsx
@@ -29,8 +29,8 @@
       <Section
         titleEn={`Official sources (${official.length})`}
         titleZh={`官方源（${official.length} 条）`}
-        descEn="Chinese government bodies, central ministries, city governments, hospitals, banks, payment networks, foreign embassies in China."
-        descZh="中国政府部委、城市政府、医院、银行、支付组织、外国驻华使领馆。"
+        descEn="Chinese government bodies, central ministries, city governments, official data agencies, hospitals, banks, payment networks, foreign embassies in China."
+        descZh="中国政府部委、城市政府、官方数据机构、医院、银行、支付组织、外国驻华使领馆。"
       >
         <ReferenceList items={official} isZh={isZh} />
       </Section>

tokens used
355,688

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
