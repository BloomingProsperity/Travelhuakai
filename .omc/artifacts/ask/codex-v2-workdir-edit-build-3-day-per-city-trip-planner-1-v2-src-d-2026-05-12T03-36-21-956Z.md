# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-12T03:36:21.958Z

## Original task

在 v2/ workdir 真的 edit + build。

新功能：3-day 行程模板 per city — Trip Planner

要求：
1. 新建 v2/src/data/itineraries.ts —— 4 城各一份 3-day 模板：
type ItineraryDay = {
  dayNumber: 1 | 2 | 3;
  themeEn: string;
  themeZh: string;
  morning: { en: string; zh: string; attractionId?: string };
  afternoon: { en: string; zh: string; attractionId?: string };
  evening: { en: string; zh: string; attractionId?: string };
  travelTipEn: string;
  travelTipZh: string;
};
type CityItinerary = { cityId: CityId; subtitleEn: string; subtitleZh: string; days: ItineraryDay[] };

写 4 份真实合理的 3-day 旅程，attractionId 复用 city-attractions.ts 的 id。例：
Beijing Day 1 = Forbidden City + Tiananmen + Wangfujing 步行街
Shanghai Day 1 = Bund + Yu Garden + Nanjing Road
Guangzhou Day 1 = Chen Clan + Canton Tower + Shamian
Shenzhen Day 1 = Window of the World + OCT + Sea World

2. 新建 v2/src/pages/PlanPage.tsx —— tab 切换 4 城，每日 morning/afternoon/evening 3 卡片纵向布局，每张卡片显示主题、活动描述、travel tip（黄色提示框）

3. routes.ts 加 route('plan', './pages/PlanPage.tsx')
4. react-router.config.ts prerender 加 /plan
5. public/sitemap.xml 加 /plan
6. HomePage 加 '3-day plan' / '3 天行程' 入口卡

完成后 npx tsc --noEmit + npm run build 0 error。

报告 300 字以内：4 城 itinerary 概要、文件、build 状态。

## Final prompt

在 v2/ workdir 真的 edit + build。

新功能：3-day 行程模板 per city — Trip Planner

要求：
1. 新建 v2/src/data/itineraries.ts —— 4 城各一份 3-day 模板：
type ItineraryDay = {
  dayNumber: 1 | 2 | 3;
  themeEn: string;
  themeZh: string;
  morning: { en: string; zh: string; attractionId?: string };
  afternoon: { en: string; zh: string; attractionId?: string };
  evening: { en: string; zh: string; attractionId?: string };
  travelTipEn: string;
  travelTipZh: string;
};
type CityItinerary = { cityId: CityId; subtitleEn: string; subtitleZh: string; days: ItineraryDay[] };

写 4 份真实合理的 3-day 旅程，attractionId 复用 city-attractions.ts 的 id。例：
Beijing Day 1 = Forbidden City + Tiananmen + Wangfujing 步行街
Shanghai Day 1 = Bund + Yu Garden + Nanjing Road
Guangzhou Day 1 = Chen Clan + Canton Tower + Shamian
Shenzhen Day 1 = Window of the World + OCT + Sea World

2. 新建 v2/src/pages/PlanPage.tsx —— tab 切换 4 城，每日 morning/afternoon/evening 3 卡片纵向布局，每张卡片显示主题、活动描述、travel tip（黄色提示框）

3. routes.ts 加 route('plan', './pages/PlanPage.tsx')
4. react-router.config.ts prerender 加 /plan
5. public/sitemap.xml 加 /plan
6. HomePage 加 '3-day plan' / '3 天行程' 入口卡

完成后 npx tsc --noEmit + npm run build 0 error。

报告 300 字以内：4 城 itinerary 概要、文件、build 状态。

## Raw output

```text
SUCCESS: The process with PID 612444 (child process of PID 607372) has been terminated.
SUCCESS: The process with PID 607372 (child process of PID 612552) has been terminated.
SUCCESS: The process with PID 612552 (child process of PID 579772) has been terminated.
SUCCESS: The process with PID 579772 (child process of PID 511468) has been terminated.
SUCCESS: The process with PID 612468 (child process of PID 612536) has been terminated.
SUCCESS: The process with PID 612536 (child process of PID 612648) has been terminated.
SUCCESS: The process with PID 612648 (child process of PID 591968) has been terminated.
SUCCESS: The process with PID 591968 (child process of PID 511468) has been terminated.
SUCCESS: The process with PID 612544 (child process of PID 612412) has been terminated.
SUCCESS: The process with PID 612412 (child process of PID 612588) has been terminated.
SUCCESS: The process with PID 612588 (child process of PID 520532) has been terminated.
SUCCESS: The process with PID 520532 (child process of PID 511468) has been terminated.
完成。

概要：北京含故宫/天安门/王府井、天坛/雍和宫、慕田峪；上海含外滩/豫园/南京路、上博/武康路、陆家嘴；广州含陈家祠/沙面/广州塔、早茶/越秀、珠江夜游；深圳含世界之窗/OCT/海上世界、莲花山/大梅沙、大鹏。

文件：`src/data/itineraries.ts`、`src/pages/PlanPage.tsx`、`src/routes.ts`、`react-router.config.ts`、`public/sitemap.xml`、`src/pages/HomePage.tsx`，并同步了 `src/App.tsx`。

验证：`npx tsc --noEmit` 0 error；`npm run build` 0 error，`/plan` 已 prerender。仅有 chunk size / plugin timing warning。


OpenAI Codex v0.128.0 (research preview)
--------
workdir: c:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1a36-6a5d-7092-8616-948dd5127fe5
--------
user
在 v2/ workdir 真的 edit + build。

新功能：3-day 行程模板 per city — Trip Planner

要求：
1. 新建 v2/src/data/itineraries.ts —— 4 城各一份 3-day 模板：
type ItineraryDay = {
  dayNumber: 1 | 2 | 3;
  themeEn: string;
  themeZh: string;
  morning: { en: string; zh: string; attractionId?: string };
  afternoon: { en: string; zh: string; attractionId?: string };
  evening: { en: string; zh: string; attractionId?: string };
  travelTipEn: string;
  travelTipZh: string;
};
type CityItinerary = { cityId: CityId; subtitleEn: string; subtitleZh: string; days: ItineraryDay[] };

写 4 份真实合理的 3-day 旅程，attractionId 复用 city-attractions.ts 的 id。例：
Beijing Day 1 = Forbidden City + Tiananmen + Wangfujing 步行街
Shanghai Day 1 = Bund + Yu Garden + Nanjing Road
Guangzhou Day 1 = Chen Clan + Canton Tower + Shamian
Shenzhen Day 1 = Window of the World + OCT + Sea World

2. 新建 v2/src/pages/PlanPage.tsx —— tab 切换 4 城，每日 morning/afternoon/evening 3 卡片纵向布局，每张卡片显示主题、活动描述、travel tip（黄色提示框）

3. routes.ts 加 route('plan', './pages/PlanPage.tsx')
4. react-router.config.ts prerender 加 /plan
5. public/sitemap.xml 加 /plan
6. HomePage 加 '3-day plan' / '3 天行程' 入口卡

完成后 npx tsc --noEmit + npm run build 0 error。

报告 300 字以内：4 城 itinerary 概要、文件、build 状态。
codex
我会在 `v2` 里直接改代码并跑类型检查和构建。先读一下 React 项目指导和现有结构，确认路由、数据和首页模式后再落文件。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Raw C:/Users/h/.codex/plugins/cache/openai-curated/build-web-apps/63976030/skills/react-best-practices/SKILL.md' in c:\Users\h\Documents\New project 2
 succeeded in 367ms:
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
使用 `react-best-practices`，重点是按现有模块拆分静态数据和页面组件，避免在渲染里做无谓计算。现在我会查 `v2` 的路由、首页和景点数据命名。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Force' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg --files' in c:\Users\h\Documents\New project 2\v2
 succeeded in 643ms:


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
d-----         2026/5/12     11:24                src                                                                  
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
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg \"route\\(|prerender|sitemap|HomePage|city-attractions|CityId\" -n" in c:\Users\h\Documents\New project 2\v2
 succeeded in 517ms:
vite.config.ts
tsconfig.node.json
tsconfig.json
tsconfig.app.json
STYLE_GUIDE.md
index.html
package-lock.json
eslint.config.js
package.json
README.md
react-router.config.ts
src\root.tsx
src\App.tsx
src\main.tsx
src\routes.ts
public\sitemap.xml
public\robots.txt
public\favicon.svg
scripts\restart-dev.mjs
scripts\interaction-check.mjs
research\city-beijing-deep.md
research\china-platforms-04-legal.md
research\china-platforms-03-ugc.md
research\china-platforms-02-maps-reviews.md
research\china-platforms-01-video.md
research\blog-platform-bureau-sweep.md
research\alipay-wechat-foreigner-registration.md
research\evaluation-01-acceptance.md
research\city-shenzhen-deep.md
research\city-shanghai-deep.md
research\city-guangzhou-deep.md
research\evaluation-03-home-vs-competitors.md
research\evaluation-02-seo-paid.md
research\evaluation-04-en-machine-feel.md
research\evaluation-04-rewrites-applied.md
research\zh-mandarin-audit.md
research\ugc-qa-implementation.md
research\seo-05-our-action-plan.md
research\seo-04-multi-engine.md
research\seo-02-decompose-winners.md
research\seo-01-landscape.md
public\assets\three.module.min.js
src\styles\globals.css
public\assets\china-province-shapes.json
public\assets\china-map-gs2022-4309.jpg
public\assets\earth-bluemarble.jpg
src\pages\AskPage.tsx
src\pages\SourcesPage.tsx
src\pages\SharePage.tsx
src\pages\MapPage.tsx
src\pages\HomePage.tsx
src\pages\GuidePage.tsx
src\pages\CityPage.tsx
src\hooks\useIsDesktop.ts
src\hooks\useCityViews.ts
src\hooks\useProvinceShapes.ts
src\lib\cityRoutes.ts
src\lib\format.ts
src\lib\i18n.ts
src\lib\jsonLd.ts
src\lib\unsplash.ts
src\lib\shapes.ts
src\lib\search.ts
src\services\notes.ts
src\data\food.ts
src\data\city-tourism-portals.ts
src\data\entry-policies.ts
src\data\city-attractions.ts
src\data\emergency.ts
src\data\atlas.ts
src\data\payments.ts
src\data\i18n.ts
src\data\map-sources.ts
src\data\practical-other.ts
src\data\phase2-preview.ts
src\data\practical-payments.ts
src\data\types.ts
src\data\transport.ts
src\data\top-questions.ts
src\data\sources.ts
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
src\store\LanguageProvider.tsx
src\store\language.ts
src\store\AtlasProvider.tsx
src\store\atlas.ts
src\components\sections\TopQuestions.tsx
src\components\city\CuisineDrawer.tsx
src\components\city\CityNav.tsx
src\components\city\CityIntro.tsx
src\components\city\CityImagePanel.tsx
src\components\layout\LanguageSwitch.tsx
src\components\layout\SiteFooter.tsx
src\components\layout\SiteHeader.tsx
src\components\map\HeroMap.tsx
src\components\map\Map3D.tsx
src\components\map\Province3DOverlay.tsx
src\components\map\MapPreview.tsx
src\components\map\provinceColors.ts
src\components\map\ProvinceHitAreaLayer.tsx
src\components\map\SpecialRegionMarkers.tsx
src\components\map\ProvinceShapeLayer.tsx
src\components\map\ProvinceLabelLayer.tsx
src\components\map\ProvinceInfoCard.tsx
src\components\pillar\VisaChecker.tsx
src\components\pillar\TransportGuide.tsx
src\components\pillar\PaymentsPractical.tsx
src\components\pillar\PaymentsChecklist.tsx
src\components\pillar\FoodGuide.tsx
src\components\pillar\EmergencyBriefing.tsx
src\components\common\PracticalBlock.tsx
src\components\common\MapErrorBoundary.tsx
src\components\common\CityFurtherReading.tsx
src\components\common\ScrollToTop.tsx
src\components\common\SourcesNote.tsx
src\components\policy\TravelAlerts.tsx

 succeeded in 490ms:
react-router.config.ts:6:  async prerender() {
public\robots.txt:3:Sitemap: https://travel-china.example.com/sitemap.xml
public\sitemap.xml:2:<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
src\App.tsx:6:import HomePage from "./pages/HomePage";
src\App.tsx:21:            <Route path="/" element={<HomePage />} />
src\App.tsx:28:            <Route path="*" element={<HomePage />} />
research\china-platforms-01-video.md:9:2. Douyin does expose some crawlable public pages: hashtag/challenge pages such as `https://www.douyin.com/hashtag/1609602638275588`, video pages such as `https://www.douyin.com/shipin/7286393198396770361`, user pages such as `https://www.douyin.com/user/MS4wLjABAAAAdcrStwSSMUaOINBOLnK0jgo0WCkjhVvcFeEu1A0OEm5YmVl4y6latLEFNiEBJAwU`, and sitemap-like topic lists such as `https://www.douyin.com/htmlmap/hotchallenge_0_1`.
research\china-platforms-01-video.md:26:| Hot/new challenge sitemaps | `https://www.douyin.com/htmlmap/hotchallenge_0_1`, `https://www.douyin.com/htmlmap/newchallenge_0_1` | Official crawlable lists of some hot/new topics | Not city-filtered and not a tourism ranking |
src\data\city-attractions.ts:1:import type { CityId } from "./transport";
src\data\city-attractions.ts:7:  cityId: CityId;
src\data\city-attractions.ts:366:export function attractionsByCity(cityId: CityId): Attraction[] {
src\data\emergency.ts:1:import type { CityId } from "./transport";
src\data\emergency.ts:11:  cityId: CityId;
src\data\emergency.ts:112:  cityId: CityId;
src\data\emergency.ts:222:export function emergencySourceIds(cityId?: CityId): string[] {
src\data\food.ts:1:import type { CityId } from "./transport";
src\data\food.ts:4:  cityId: CityId;
src\data\food.ts:172:export function foodSourceIds(cityId?: CityId): string[] {
research\evaluation-01-acceptance.md:284:What $1,000 buys: At $1,000/month you are at the very low end of quality. Likely: basic technical audit, keyword research report, link-building outreach at low volume. The technical SEO work (structured data, sitemap, Core Web Vitals) is already documented in seo-02-decompose-winners.md and can be implemented without a consultant if the developer understands the specifications.
src\data\city-tourism-portals.ts:1:import type { CityId } from "./transport";
src\data\city-tourism-portals.ts:11:export const cityTourismPortals: Record<CityId, Portal[]> = {
research\zh-mandarin-audit.md:23:| `data/city-attractions.ts` | 19 |
research\zh-mandarin-audit.md:45:1. `data/city-attractions.ts`
src\lib\cityRoutes.ts:1:import type { CityId } from "../data/transport";
src\lib\cityRoutes.ts:3:export const PHASE1_CITY_ROUTES: Partial<Record<string, CityId>> = {
src\lib\cityRoutes.ts:10:const PHASE1_ATTRACTION_ROUTES: Partial<Record<string, CityId>> = {
src\lib\cityRoutes.ts:21:export function getPhase1CityRouteId(cityId: string): CityId | undefined {
src\lib\cityRoutes.ts:25:export function getPhase1AttractionRouteId(provinceId: string, attractionEn: string): CityId | undefined {
research\seo-05-our-action-plan.md:52:   Sitemap: https://YOUR-DOMAIN.com/sitemap.xml
research\seo-05-our-action-plan.md:59:### sitemap.xml
research\seo-05-our-action-plan.md:61:6. [P0] Generate sitemap.xml at build time. The current stack uses react-router-dom
research\seo-05-our-action-plan.md:62:   (no @react-router/dev framework), so write a scripts/generate-sitemap.mjs that runs
research\seo-05-our-action-plan.md:68:   Source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
research\seo-05-our-action-plan.md:70:7. [P0] For the bilingual sitemap (needed for hreflang — see item 24), extend the same
research\seo-05-our-action-plan.md:264:    https://YOUR-DOMAIN.com/sitemap.xml. No standalone submission API endpoint exists
research\seo-05-our-action-plan.md:266:    Source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
research\seo-05-our-action-plan.md:268:20. [P1] Bing Webmaster Tools: left nav > Sitemaps > enter full sitemap URL.
research\seo-05-our-action-plan.md:272:    Source: https://yandex.com/support/webmaster/en/indexing-options/sitemap.html
research\seo-05-our-action-plan.md:396:    update dateModified in the Article JSON-LD, update lastmod in sitemap.xml, and change
research\seo-05-our-action-plan.md:400:    Source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
research\seo-05-our-action-plan.md:417:    ssr: false + prerender: true in react-router.config.ts. This generates flat HTML files
research\seo-05-our-action-plan.md:425:      prerender: true,
research\seo-05-our-action-plan.md:579:- Indexed in Google, Bing, Yandex: achievable in days 7-14 via IndexNow + sitemap
research\seo-05-our-action-plan.md:591:- Items 5-6: public/robots.txt + sitemap generation script
research\seo-05-our-action-plan.md:600:- Items 19-21: Submit sitemap.xml to Google Search Console, Bing, Yandex
research\seo-05-our-action-plan.md:619:- Item 7: Verify bilingual sitemap with xhtml:link hreflang entries is generating correctly
research\seo-05-our-action-plan.md:649:   https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
research\seo-05-our-action-plan.md:684:19. Yandex sitemap submission documentation:
research\seo-05-our-action-plan.md:685:    https://yandex.com/support/webmaster/en/indexing-options/sitemap.html
src\routes.ts:4:  index("./pages/HomePage.tsx"),
src\routes.ts:5:  route("map", "./pages/MapPage.tsx"),
src\routes.ts:6:  route("guide/:topic", "./pages/GuidePage.tsx"),
src\routes.ts:7:  route("city/:cityId", "./pages/CityPage.tsx"),
src\routes.ts:8:  route("share", "./pages/SharePage.tsx"),
src\routes.ts:9:  route("ask", "./pages/AskPage.tsx"),
src\routes.ts:10:  route("sources", "./pages/SourcesPage.tsx"),
src\routes.ts:11:  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
src\store\atlas.ts:7:  selectedCityId: string | null;
src\store\atlas.ts:19:  selectedCityId: null,
src\store\atlas.ts:29:        selectedCityId: null,
src\store\atlas.ts:36:        selectedCityId: action.cityId,
src\store\atlas.ts:75:  const city = findCity(province, state.selectedCityId);
research\seo-04-multi-engine.md:72:- Submit sitemap index and language-specific sitemaps in the Sitemaps report. Google says the Sitemaps report lets you submit sitemap files and track parsing errors: https://support.google.com/webmasters/answer/7451001
research\seo-04-multi-engine.md:73:- Use URL Inspection for the homepage, core guides, and new/updated volatile pages. Google says URL Inspection can request indexing, but indexing is not guaranteed and bulk updates should be handled with sitemaps and `lastmod`: https://support.google.com/webmasters/answer/9012289
research\seo-04-multi-engine.md:87:Google's localized-pages documentation covers HTML, HTTP header, and XML sitemap implementations: https://developers.google.com/search/docs/advanced/crawling/localized-versions
research\seo-04-multi-engine.md:98:- Submit the sitemap index.
research\seo-04-multi-engine.md:102:Bing's 2025 Webmaster Tools guidance highlights URL Inspection, sitemap submission through Bing Webmaster Tools or robots.txt, and Google Search Console import: https://blogs.bing.com/webmaster/June-2025/Start-Using-Bing-Webmaster-Tools-to-Improve-Your-Site-Visibility
research\seo-04-multi-engine.md:182:- Submit the sitemap.
research\seo-04-multi-engine.md:219:- Submit sitemap/robots.txt information.
research\seo-04-multi-engine.md:464:2. Day-1: Create crawlable sitemap index plus per-language sitemaps with accurate `lastmod`.
research\seo-04-multi-engine.md:465:3. Day-1: Create robots.txt with sitemap reference and explicit access for major crawlers: Googlebot, Bingbot, DuckDuckBot, YandexBot, Naver Yeti, Baiduspider, OAI-SearchBot, PerplexityBot.
research\seo-04-multi-engine.md:480:15. Pre-launch: Submit sitemap index in Google and Bing.
research\seo-04-multi-engine.md:482:17. Pre-launch: Add Yandex Webmaster and submit sitemap if `/ru/` exists.
research\seo-04-multi-engine.md:483:18. Pre-launch: Add Naver Search Advisor and submit sitemap if `/ko/` exists.
research\seo-02-decompose-winners.md:77:Sitemap at chinahighlights.com/sitemap.xml (fetched May 2026) shows consistent weekly updates:
research\seo-02-decompose-winners.md:87:Source: chinahighlights.com/sitemap.xml (May 2026)
research\seo-02-decompose-winners.md:125:- **Consistent content velocity:** Weekly sitemap updates signal freshness to Google crawlers
research\seo-02-decompose-winners.md:171:- No sitemap.xml accessible (404); robots.txt contains no Sitemap declaration
research\seo-02-decompose-winners.md:225:**Notable gaps:** Short content per page (1,200-1,400 words on practical guides). No structured data. Traditional layout showing site age. No WebP images. No sitemap.xml.
research\seo-02-decompose-winners.md:267:- sitemap.xml returns 404 — not accessible
research\seo-02-decompose-winners.md:438:- Rank Math SEO plugin active (confirmed via sitemap.xml metadata)
research\seo-02-decompose-winners.md:442:Inspection of three WildChina pages: **no JSON-LD confirmed in extracted content**. Rank Math SEO plugin is installed (confirmed via sitemap structure). Rank Math outputs Article, BreadcrumbList, and Organization schema by default — these may be active at the HTML level but were not visible in WebFetch extractions. Cannot confirm schema types without direct page-source view.
research\seo-02-decompose-winners.md:444:Source: WebFetch of wildchina.com pages; wildchina.com/sitemap.xml metadata (May 2026)
research\seo-02-decompose-winners.md:448:Sitemap index at wildchina.com/sitemap.xml (fetched May 2026) confirms:
research\seo-02-decompose-winners.md:449:- page-sitemap.xml: last updated 2026-04-23
research\seo-02-decompose-winners.md:450:- post-sitemap1.xml: last updated 2026-04-20
research\seo-02-decompose-winners.md:451:- post-sitemap2.xml: last updated 2026-04-15
research\seo-02-decompose-winners.md:452:- tour-sitemap.xml: last updated 2026-04-13
research\seo-02-decompose-winners.md:453:- personnel-sitemap.xml: last updated 2026-04-17
research\seo-02-decompose-winners.md:459:Source: wildchina.com/sitemap.xml (May 2026); article publish dates confirmed via WebFetch
research\seo-02-decompose-winners.md:499:- **Active content plus modern SEO tooling:** Rank Math plugin, 2026 publishing cadence, full sitemap maintained — professional SEO hygiene unlike legacy competitors
research\seo-02-decompose-winners.md:637:15. **Clean sitemap.xml with lastmod dates and robots.txt sitemap declaration**: TravelChinaGuide lacks both entirely. Standard technical hygiene from day one.
research\seo-02-decompose-winners.md:659:9. **No sitemap.xml or robots.txt sitemap declaration** (travelchinaguide.com): A crawlability failure on a legacy site. For a new site there is no excuse; a properly maintained XML sitemap with lastmod dates is a day-one requirement.
research\seo-02-decompose-winners.md:672:6. https://www.chinahighlights.com/sitemap.xml
research\seo-02-decompose-winners.md:687:21. https://wildchina.com/sitemap.xml
src\components\map\Map3D.tsx:322:function getPickedCityId(entity: CesiumEntity): string | null {
src\components\map\Map3D.tsx:328:function getPickedRouteCityId(entity: CesiumEntity): string | null {
src\components\map\Map3D.tsx:421:          const routeCityId = entity ? getPickedRouteCityId(entity) : null;
src\components\map\Map3D.tsx:422:          if (routeCityId) {
src\components\map\Map3D.tsx:423:            handleRouteClickRef.current(routeCityId);
src\components\map\Map3D.tsx:426:          const cityId = entity ? getPickedCityId(entity) : null;
src\pages\CityPage.tsx:2:import { attractionsByCity } from "../data/city-attractions";
src\pages\CityPage.tsx:3:import { CITY_LABELS, type CityId } from "../data/transport";
src\pages\CityPage.tsx:17:const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
src\pages\CityPage.tsx:19:function cityStructuredData(cityId: CityId) {
src\pages\CityPage.tsx:64:function cityBreadcrumbStructuredData(cityId: CityId) {
src\pages\CityPage.tsx:79:  if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
src\pages\CityPage.tsx:88:  const id = cityId as CityId;
src\pages\HomePage.tsx:3:import { attractionsByCity, type Attraction } from "../data/city-attractions";
src\pages\HomePage.tsx:4:import { CITY_LABELS, type CityId } from "../data/transport";
src\pages\HomePage.tsx:9:const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
src\pages\HomePage.tsx:49:function pickCityPhoto(cityId: CityId): Attraction {
src\pages\HomePage.tsx:53:export default function HomePage() {
src\pages\HomePage.tsx:140:  cityId: CityId;
src\components\pillar\EmergencyBriefing.tsx:11:import { CITY_LABELS, type CityId } from "../../data/transport";
src\components\pillar\EmergencyBriefing.tsx:15:const CITIES: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
src\components\pillar\EmergencyBriefing.tsx:17:type Props = { cityId?: CityId };
src\components\pillar\EmergencyBriefing.tsx:23:  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
src\components\pillar\EmergencyBriefing.tsx:24:  const effectiveId: CityId = cityId ?? activeId;
src\components\pillar\PaymentsChecklist.tsx:8:import type { CityId } from "../../data/transport";
src\components\pillar\PaymentsChecklist.tsx:12:type Props = { cityId?: CityId };
src\components\pillar\FoodGuide.tsx:4:import { CITY_LABELS, type CityId } from "../../data/transport";
src\components\pillar\FoodGuide.tsx:9:type Props = { cityId?: CityId };
src\components\pillar\FoodGuide.tsx:15:  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
src\components\pillar\FoodGuide.tsx:17:  const effectiveId: CityId = cityId ?? activeId;
src\components\common\CityFurtherReading.tsx:2:import type { CityId } from "../../data/transport";
src\components\common\CityFurtherReading.tsx:5:type Props = { cityId: CityId };
src\components\city\CityImagePanel.tsx:2:import { attractionsByCity } from "../../data/city-attractions";
src\components\city\CityImagePanel.tsx:3:import type { CityId } from "../../data/transport";
src\components\city\CityImagePanel.tsx:7:type Props = { cityId: CityId };
src\components\city\CityIntro.tsx:3:import { attractionsByCity } from "../../data/city-attractions";
src\components\city\CityIntro.tsx:4:import type { CityId } from "../../data/transport";
src\components\city\CityIntro.tsx:7:type Props = { cityId: CityId };
src\components\city\CityIntro.tsx:9:const CITY_BLURB: Record<CityId, { en: string; zh: string }> = {
src\components\city\CityIntro.tsx:28:const CITY_FACTS: Record<CityId, Array<{ en: string; zh: string }>> = {
src\components\common\PracticalBlock.tsx:2:import type { CityId } from "../../data/transport";
src\components\common\PracticalBlock.tsx:12:type Props = { pillar: PillarId; cityId?: CityId };
src\components\pillar\TransportGuide.tsx:3:import { CITY_LABELS, cityTransport, railBooking, type CityId } from "../../data/transport";
src\components\pillar\TransportGuide.tsx:13:type Props = { cityId?: CityId };
src\components\pillar\TransportGuide.tsx:19:  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
src\components\pillar\TransportGuide.tsx:20:  const effectiveId: CityId = cityId ?? activeId;
src\data\payments.ts:1:import type { CityId } from "./transport";
src\data\payments.ts:109:  cityId: CityId;
src\data\payments.ts:198:export function paymentsSourceIds(cityId?: CityId): string[] {
src\data\practical-other.ts:1:import type { CityId } from "./transport";
src\data\practical-other.ts:8:  cityScope?: CityId[];
src\data\practical-other.ts:359:export function pitfallsForPillar(pillar: PillarId, cityId?: CityId): Pitfall[] {
src\data\practical-other.ts:368:export function pitfallSourceIds(pillar?: PillarId, cityId?: CityId): string[] {
src\data\transport.ts:1:export type CityId = "beijing" | "shanghai" | "guangzhou" | "shenzhen";
src\data\transport.ts:3:export const CITY_LABELS: Record<CityId, { en: string; zh: string }> = {
src\data\transport.ts:22:  cityId: CityId;
src\data\transport.ts:390:export function transportSourceIds(cityId?: CityId): string[] {
src\data\types.ts:11:export type CityId = "beijing-city" | "shanghai-city" | "guangzhou-city" | "shenzhen-city";

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw src\\routes.ts" in c:\Users\h\Documents\New project 2\v2
 succeeded in 440ms:
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./pages/HomePage.tsx"),
  route("map", "./pages/MapPage.tsx"),
  route("guide/:topic", "./pages/GuidePage.tsx"),
  route("city/:cityId", "./pages/CityPage.tsx"),
  route("share", "./pages/SharePage.tsx"),
  route("ask", "./pages/AskPage.tsx"),
  route("sources", "./pages/SourcesPage.tsx"),
  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
] satisfies RouteConfig;


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Raw react-router.config.ts' in c:\Users\h\Documents\New project 2\v2
 succeeded in 411ms:
import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  appDirectory: "src",
  async prerender() {
    return [
      "/",
      "/map",
      "/guide/entry",
      "/guide/payments",
      "/guide/notes",
      "/share",
      "/ask",
      "/sources",
      "/city/beijing",
      "/city/shanghai",
      "/city/guangzhou",
      "/city/shenzhen"
    ];
  }
} satisfies Config;


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw public\\sitemap.xml" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw src\\pages\\HomePage.tsx" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw src\\data\\city-attractions.ts" in c:\Users\h\Documents\New project 2\v2
 succeeded in 685ms:
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://travel-china.example.com/</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/map</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/guide/entry</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/guide/payments</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/guide/notes</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/share</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/ask</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/sources</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/city/beijing</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/city/shanghai</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/city/guangzhou</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/city/shenzhen</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
</urlset>


 succeeded in 571ms:
import { Link } from "react-router";
import MapPreview from "../components/map/MapPreview";
import { attractionsByCity, type Attraction } from "../data/city-attractions";
import { CITY_LABELS, type CityId } from "../data/transport";
import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
import { unsplashSrcSet } from "../lib/unsplash";
import { useLang } from "../store/language";

const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];

const guideLinks = [
  { to: "/guide/entry", en: "Entry & visa", zh: "鍏ュ绛捐瘉" },
  { to: "/guide/payments", en: "Payments", zh: "鏀粯鍑嗗" },
  { to: "/guide/notes", en: "Travel notes", zh: "鍑鸿娉ㄦ剰浜嬮」" }
];

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: [
    { "@language": "en", "@value": "Travel China" },
    { "@language": "zh-CN", "@value": "鏃呰涓浗" }
  ],
  url: absoluteUrl("/"),
  inLanguage: ["en", "zh-CN"],
  description: [
    {
      "@language": "en",
      "@value":
        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
    },
    {
      "@language": "zh-CN",
      "@value": "闈㈠悜澶栧浗娓稿鐨勪腑鍥芥梾琛屾寚鍗楋紝瑕嗙洊鍩庡競銆佹櫙鐐广€佸湴鍥俱€佸叆澧冦€佹敮浠樸€佷氦閫氥€侀楗拰鍑鸿娉ㄦ剰浜嬮」銆?
    }
  ],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);

function pickCityPhoto(cityId: CityId): Attraction {
  return attractionsByCity(cityId)[0];
}

export default function HomePage() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
      />
      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          {isZh ? "娆㈣繋鏉ヤ腑鍥? : "Travel China"}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {isZh
            ? "鍏堜粠鍩庡競鍜屾櫙鍖虹収鐗囧紑濮嬶紝鍐嶈繘鍏ュ湴鍥俱€佺璇併€佹敮浠樺拰娉ㄦ剰浜嬮」銆?
            : "Start with city landmark photos, then open the map, visa, payment, and travel-note pages."}
        </p>
        <p className="text-xs text-muted">
          {isZh
            ? "鏀跨瓥涓庡畼鏂逛俊鎭紩鑷腑鍥藉畼鏂规簮锛涙搷浣滅粡楠屼笌绀惧尯鎻愮ず娉ㄦ槑鍑哄銆?
            : "Policy and official information cite Chinese government sources; community tips and operational pitfalls are attributed."}
        </p>
      </header>

      <section aria-label={isZh ? "鍩庡競鏅尯鐓х墖" : "City attraction photos"} className="grid gap-4 md:grid-cols-2">
        {CITY_IDS.map((cityId) => (
          <CityPhotoCard key={cityId} cityId={cityId} attraction={pickCityPhoto(cityId)} isZh={isZh} />
        ))}
      </section>

      <Link
        to="/map"
        aria-label={isZh ? "鎵撳紑鍦版爣鍦板浘" : "Open landmark map"}
        className="group grid overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:border-jade hover:shadow-md lg:grid-cols-[minmax(0,1fr)_420px]"
      >
        <div className="flex min-w-0 flex-col justify-center gap-3 p-5 sm:p-6">
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "鍦板浘鍏ュ彛" : "Map"}
          </span>
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
            {isZh ? "鍦版爣鍦板浘" : "Landmark map"}
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            {isZh
              ? "鎸夌渷浠芥煡鐪嬪煄甯傘€佹腐婢冲拰鏅尯鍦版爣锛岀偣鍑诲悗杩涘叆 3D 瀹炴櫙鍦板浘銆?
              : "Browse cities, Hong Kong, Macau, and landmark regions by province, then open the 3D scene."}
          </p>
          <span className="text-sm font-bold text-jade">
            {isZh ? "杩涘叆鍦板浘 鈫? : "Open map 鈫?}
          </span>
        </div>
        <div className="h-64 min-w-0 border-t border-line bg-paper/60 p-3 lg:h-auto lg:border-l lg:border-t-0">
          <MapPreview />
        </div>
      </Link>

      <section aria-label={isZh ? "鍑鸿鍔熻兘鍏ュ彛" : "Travel guide links"} className="grid gap-3 sm:grid-cols-3">
        {guideLinks.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="group flex min-h-20 items-center justify-between gap-3 rounded-lg border border-line bg-white px-4 py-3 transition hover:border-jade hover:shadow-sm"
          >
            <span className="text-base font-bold">{isZh ? item.zh : item.en}</span>
            <span className="text-xl text-muted transition group-hover:translate-x-1 group-hover:text-jade" aria-hidden>
              鈫?
            </span>
          </Link>
        ))}
      </section>
      </main>
    </>
  );
}

function CityPhotoCard({
  cityId,
  attraction,
  isZh
}: {
  cityId: CityId;
  attraction: Attraction;
  isZh: boolean;
}) {
  const city = CITY_LABELS[cityId];

  return (
    <Link
      to={`/city/${cityId}`}
      className="group relative min-h-[260px] overflow-hidden rounded-lg border border-line bg-ink text-white shadow-sm"
    >
      <img
        src={attraction.imageUrl}
        srcSet={unsplashSrcSet(attraction.imageUrl)}
        sizes="(min-width: 768px) 50vw, 100vw"
        alt={isZh ? attraction.nameZh : attraction.nameEn}
        loading={cityId === "beijing" ? "eager" : "lazy"}
        fetchPriority={cityId === "beijing" ? "high" : "auto"}
        decoding="async"
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
        onError={(event) => {
          event.currentTarget.style.opacity = "0";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
        <span className="text-sm font-bold text-white/80">{isZh ? city.zh : city.en}</span>
        <strong className="block max-w-full break-words text-xl leading-tight text-white drop-shadow-sm sm:text-2xl">
          {isZh ? attraction.nameZh : attraction.nameEn}
        </strong>
        <span className="text-xs text-white/75">{isZh ? attraction.districtZh : attraction.districtEn}</span>
      </div>
    </Link>
  );
}


 succeeded in 587ms:
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
    districtEn: "Yuexiu",
    districtZh: "瓒婄鍖?,
    tier: "must-visit",
    whyEn: "The Five Rams Statue (1959, 11 m, 130+ pieces of granite) is Guangzhou's civic symbol, rooted in the legend of five celestial rams who brought rice seeds to bless the city. Yuexiu Park (860,000 sq m) is the city's largest urban park and contains Zhenhai Tower (Ming-dynasty watchtower, now Guangzhou Museum) and remnants of the ancient city wall. Free entry; packed with locals doing tai chi from 6 AM.",
    whyZh: "浜旂緤闆曞儚锛?959锛?1 绫筹紝130+ 鍧楄姳宀楀博鎷兼垚锛夋槸骞垮窞甯傚窘鈥斺€斾簲浠欎汉楠戜簲缇婇檷涓嬬ɑ绌楄祼绂忔鍩庛€傝秺绉€鍏洯锛?6 涓囧钩鏂圭背锛夋槸甯傚唴鏈€澶у叕鍥紝鍚槑浠ｉ晣娴锋ゼ锛堢幇骞垮窞鍗氱墿棣嗭級鍜屽彜鍩庡閬楄抗銆傚厤璐癸紝娓呮櫒 6 鐐硅捣甯歌甯傛皯缁冨お鏋併€?,
    officialUrl: "http://www.gz.gov.cn/guangzhouinternational/visitors/whattosee/",
    imageUrl: "https://images.unsplash.com/photo-1630831241310-3984f1b3d711?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Wally Yang on Unsplash"
  },
  {
    id: "gz-pearl-river",
    cityId: "guangzhou",
    nameEn: "Pearl River Night Cruise",
    nameZh: "鐝犳睙澶滄父",
    districtEn: "Haizhu / Tianhe",
    districtZh: "娴风彔 / 澶╂渤",
    tier: "must-visit",
    whyEn: "The illuminated-skyline cruise is Guangzhou's signature evening activity. The 60鈥?0 min route passes below Canton Tower, along Zhujiang New Town's glittering skyline, past the colonial Shamian shores, and through bridges lit in colour. The 8 PM departure catches the full LED show on Canton Tower.",
    whyZh: "骞垮窞鐨勪唬琛ㄦ€у娓搁」鐩€?0鈥?0 鍒嗛挓鑸嚎绌胯繃骞垮窞濉斾笅锛屾部鐝犳睙鏂板煄澶╅檯绾匡紝缁忚繃娌欓潰绉熺晫宀稿拰褰╃伅妗ャ€?0:00 鐝鍙璧忓箍宸炲瀹屾暣 LED 绉€銆?,
    officialUrl: "https://www.cantontower.com/en/pearlriver/otherships/",
    imageUrl: "https://images.unsplash.com/photo-1563090162-6b4c2a20d658?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Lycheeart on Unsplash"
  },
  {
    id: "gz-baiyun-mountain",
    cityId: "guangzhou",
    nameEn: "Baiyun Mountain",
    nameZh: "鐧戒簯灞?,
    districtEn: "Baiyun",
    districtZh: "鐧戒簯鍖?,
    tier: "worth-it",
    whyEn: "A 5A national scenic area 12 km from the centre. The Moxing Ridge peak (382 m) gives panoramic views over Greater Guangzhou on clear days. 21 sq km park with cable car, Mingchun Valley aviary (5,000+ birds), Yunxi Botanical Garden, and the Sculpture Park. 20 million visitors per year. Popular for early-morning Cantonese exercise culture.",
    whyZh: "甯備腑蹇?12 鍏噷澶栫殑鍥藉 5A 椋庢櫙鍖恒€傛懇鏄熷箔锛?82 绫筹級澶╂皵鏅村ソ鏃跺彲淇灠骞垮窞閮藉競鏅銆?1 骞虫柟鍏噷鍥尯鏈夌紗杞︺€侀福鏄ヨ胺楦熺被瑙傝祻鍖猴紙5,000+ 楦燂級銆佷簯婧鐗╁洯銆侀洉濉戝叕鍥€傚勾鎺ュ緟娓稿绾?2,000 涓囦汉銆傛竻鏅ㄥ競姘戞櫒缁冩皼鍥存祿鍘氥€?,
    officialUrl: "http://www.baiyunshan.com.cn",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/42/Guangzhou_Opera_House_and_Canton_Tower.JPG",
    imageCredit: "Ecow, CC0 Public Domain (Guangzhou skyline reference)"
  },

  // SHENZHEN
  {
    id: "sz-window-of-the-world",
    cityId: "shenzhen",
    nameEn: "Window of the World",
    nameZh: "涓栫晫涔嬬獥",
    districtEn: "Nanshan",
    districtZh: "鍗楀北鍖?,
    tier: "must-visit",
    whyEn: "Shenzhen's classic theme-park shorthand: global landmarks rebuilt at miniature or reduced scale, evening shows, and a distinctly Shenzhen \"world showcase\" atmosphere. Useful for families, Hong Kong day-trippers, and visitors who want an unmistakably Shenzhen attraction rather than another mall. 09:00鈥?2:30 daily.",
    whyZh: "娣卞湷鐨勬爣蹇楁€т富棰樺叕鍥細鍏ㄧ悆鍦版爣鎸夋瘮渚嬬缉灏忛噸寤猴紝骞堕厤鏈夊鍦鸿〃婕斻€傞€傚悎浜插瓙娓稿銆侀娓竴鏃ユ父鏃呭锛屼互鍙婂笇鏈涗綋楠屾繁鍦崇壒鑹茶€岄潪鍗曠函璐墿鐨勪汉銆傛瘡鏃?09:00鈥?2:30銆?,
    officialUrl: "https://www.sz.gov.cn/en_szgov/news/infocus/SZCitywalk/Explore/Attractions/content/post_11857074.html",
    imageUrl: "https://images.unsplash.com/photo-1767628366824-be007ab6e7cf?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Luc L on Unsplash"
  },
  {
    id: "sz-octloft",
    cityId: "shenzhen",
    nameEn: "OCT-LOFT Creative Culture Park",
    nameZh: "鍗庝鲸鍩庡垱鎰忔枃鍖栧洯",
    districtEn: "Nanshan",
    districtZh: "鍗楀北鍖?,
    tier: "must-visit",
    whyEn: "Shenzhen's easiest creative-neighbourhood stop: converted industrial buildings, cafes, design shops, small galleries, bookstores, and periodic markets. Pairs well with the OCT theme-park cluster and works as a lower-pressure alternative to paid theme parks. Public district, free entry; shops Tuesday鈥揝unday.",
    whyZh: "娣卞湷杈冩槗娓歌鐨勫垱鎰忕ぞ鍖猴細鏃у伐涓氬缓绛戞敼閫狅紝鍜栧暋棣嗐€佽璁″簵銆佸皬鐢诲粖銆佷功搴椼€佸畾鏈熼泦甯傘€傚彲涓?OCT 涓婚鍏洯涓€骞跺畨鎺掞紝涔熸槸浠樿垂涓婚鍏洯涔嬪鐨勫彟涓€閫夋嫨銆傚紑鏀捐鍖哄厤璐癸紝搴楀鍛ㄤ簩鑷冲懆鏃ヨ惀涓氥€?,
    officialUrl: "https://www.octloft.cn/en/",
    imageUrl: "https://images.unsplash.com/photo-1728241733556-65b2afb65120?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Oskar Kadaksoo on Unsplash"
  },
  {
    id: "sz-sea-world",
    cityId: "shenzhen",
    nameEn: "Sea World & Culture and Arts Center",
    nameZh: "铔囧彛娴蜂笂涓栫晫 / 娴蜂笂涓栫晫鏂囧寲鑹烘湳涓績",
    districtEn: "Nanshan / Shekou",
    districtZh: "鍗楀北 铔囧彛",
    tier: "must-visit",
    whyEn: "Shekou Sea World is the most foreigner-friendly dining and nightlife node in Shenzhen: waterfront plaza, restaurants, bars, the Minghua ship landmark, and the Sea World Culture & Arts Center (Design Society) for design exhibitions. A strong first-night choice for visitors arriving from Hong Kong or by ferry.",
    whyZh: "铔囧彛娴蜂笂涓栫晫鏄繁鍦冲澶栫睄娓稿杈冨弸濂界殑椁愰ギ澶滅敓娲诲尯锛氭捣婊ㄥ箍鍦恒€侀鍘呫€侀厭鍚с€佹槑鍗庤疆鍦版爣銆佹捣涓婁笘鐣屾枃鍖栬壓鏈腑蹇冿紙璁捐浜掕仈锛夌殑璁捐灞曘€傞€傚悎浠庨娓垨涔樿埞鎶佃揪鍚庣殑绗竴鏅氬畨鎺掋€?,
    officialUrl: "https://www.eyeshenzhen.com/content/2023-05/12/content_30192680.htm",
    imageUrl: "https://images.unsplash.com/photo-1634647626758-ad751a260e9f?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "銉€銉?銉?on Unsplash"
  },
  {
    id: "sz-dameisha",
    cityId: "shenzhen",
    nameEn: "Dameisha & Xiaomeisha Beaches",
    nameZh: "澶ф娌?/ 灏忔娌?,
    districtEn: "Yantian",
    districtZh: "鐩愮敯鍖?,
    tier: "worth-it",
    whyEn: "The easiest named beaches from central Shenzhen, now reachable comfortably by Metro Line 8. Dameisha is the classic public beach; Xiaomeisha has been redeveloped and is more resort-like. Best for \"I want the coast and seafood without a full Dapeng day\". Avoid peak midday in summer.",
    whyZh: "浠庡競涓績杈冩槗鎶佃揪鐨勭煡鍚嶆捣婊╋紝鍦伴搧 8 鍙风嚎鐩磋揪銆傚ぇ姊呮矙鏄粡鍏稿叕浼楁捣婊╋紝灏忔娌欐敼閫犲悗鏇村叿搴﹀亣姘涘洿銆傞€傚悎鎯崇湅娴枫€佸悆娴烽矞浣嗕笉璁″垝瀹夋帓澶ч箯鍏ㄥぉ琛岀▼鐨勬父瀹€傚澶╅伩寮€姝ｅ崍銆?,
    officialUrl: "https://www.sz.gov.cn/en_szgov/news/infocus/park/csgy/content/post_10986843.html",
    imageUrl: "https://images.unsplash.com/photo-1759970729294-99c7eebeaf54?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "T Y on Unsplash"
  },
  {
    id: "sz-lianhuashan",
    cityId: "shenzhen",
    nameEn: "Lianhuashan Park",
    nameZh: "鑾茶姳灞卞叕鍥?,
    districtEn: "Futian",
    districtZh: "绂忕敯鍖?,
    tier: "worth-it",
    whyEn: "The central Shenzhen orientation hill: free, easy by metro, good city views, and famous for the Deng Xiaoping statue overlooking the CBD. One of the cleanest ways to read Shenzhen's reform-era identity to a first-time visitor.",
    whyZh: "甯備腑蹇冪殑鍩庡競瑙傛櫙灞憋細鍏嶈垂銆佸湴閾佸彲杈俱€佸煄甯傛櫙瑙傚紑闃旓紝閭撳皬骞抽洉鍍忎刊鐬?CBD锛屾槸娣卞湷鍦版爣銆傝繖閲屾湁鍔╀簬鍒濊娓稿鐞嗚В娣卞湷涓嶾"鏀归潻寮€鏀綷"鐨勫叧绯汇€?,
    officialUrl: "https://www.sz.gov.cn/en_szgov/news/infocus/park/index.html",
    imageUrl: "https://images.unsplash.com/photo-1759970729216-49c024cd89fb?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "T Y on Unsplash"
  },
  {
    id: "sz-dapeng",
    cityId: "shenzhen",
    nameEn: "Dapeng Fortress & Peninsula",
    nameZh: "澶ч箯鎵€鍩?/ 澶ч箯鍗婂矝",
    districtEn: "Dapeng New District",
    districtZh: "澶ч箯鏂板尯",
    tier: "must-visit",
    whyEn: "The closest thing Shenzhen has to a historic coastal village plus a beach/hiking day. The Ming/Qing-era fortress gives military-history texture; nearby Jiaochangwei, Yangmeikeng, Xichong/Dongchong and coastal routes make it a full-day nature trip. A private driver or tour reduces friction for foreign visitors.",
    whyZh: "娣卞湷鏈€鎺ヨ繎鍘嗗彶娴疯竟鏉戝簞銆佹捣婊╀笌寰掓缁勫悎鐨勭洰鐨勫湴銆傛槑娓呭彜鍩庡憟鐜板啗浜嬪巻鍙插眰娆★紱闄勮繎杈冨満灏俱€佹潹姊呭潙銆佽タ娑?/ 涓滄秾銆佹捣宀哥嚎姝ラ亾閫傚悎瀹夋帓涓€鏁村ぉ銆傚鍥芥父瀹㈠彲閫氳繃鍖呰溅鎴栭殢鍥㈤檷浣庝氦閫氶毦搴︺€?,
    officialUrl: "https://www.sz.gov.cn/en_szgov/news/infocus/SZCitywalk/Explore/Districts/DapengNewDistrict/content/mpost_11892734.html",
    imageUrl: "https://images.unsplash.com/photo-1636821771168-d13e578a88ba?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "銉€銉?銉?on Unsplash"
  }
];

export function attractionsByCity(cityId: CityId): Attraction[] {
  return cityAttractions.filter((a) => a.cityId === cityId);
}


codex
现有项目是 React Router framework 配置，`CityId` 来自 `src/data/transport.ts`，景点 id 已经覆盖所需地标。首页中文在终端里显示为乱码但文件可继续按现有双语模式扩展。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw src\\pages\\CityPage.tsx" in c:\Users\h\Documents\New project 2\v2
 succeeded in 330ms:
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


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw src\\pages\\GuidePage.tsx" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw src\\styles\\globals.css" in c:\Users\h\Documents\New project 2\v2
 succeeded in 609ms:
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


 succeeded in 629ms:
import { Link, useParams } from "react-router";
import TravelAlerts from "../components/policy/TravelAlerts";
import VisaChecker from "../components/pillar/VisaChecker";
import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
import TopQuestions from "../components/sections/TopQuestions";
import SourcesNote from "../components/common/SourcesNote";
import { topQuestions } from "../data/top-questions";
import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
import { useLang } from "../store/language";

type GuideTopic = "entry" | "payments" | "notes";

const topicLabels: Record<GuideTopic, { en: string; zh: string; bodyEn: string; bodyZh: string }> = {
  entry: {
    en: "Entry & visa",
    zh: "鍏ュ绛捐瘉",
    bodyEn: "Check the entry route first, then continue to city pages for local transport and emergencies.",
    bodyZh: "鍏堢‘璁ゅ叆澧冩柟寮忥紝鍐嶈繘鍏ュ煄甯傞〉鏌ョ湅鏈湴浜ら€氬拰搴旀€ヤ俊鎭€?
  },
  payments: {
    en: "Payments",
    zh: "鏀粯鍑嗗",
    bodyEn: "Set up payment before departure and keep a cash backup for small vendors.",
    bodyZh: "鍑哄彂鍓嶅畬鎴愭敮浠樿缃紝骞朵负灏忓簵鍜屼复鏃舵儏鍐典繚鐣欑幇閲戝閫夈€?
  },
  notes: {
    en: "Travel notes",
    zh: "鍑鸿娉ㄦ剰浜嬮」",
    bodyEn: "Policy changes and common pre-arrival questions are collected here.",
    bodyZh: "杩欓噷闆嗕腑鏀炬斂绛栧彉鍖栧拰鍑哄彂鍓嶅父瑙侀棶棰樸€?
  }
};

const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);

const notesFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: topQuestions.map((question) => ({
    "@type": "Question",
    name: question.questionEn,
    acceptedAnswer: {
      "@type": "Answer",
      text: question.answerEn
    }
  }))
};

const notesBreadcrumbJsonLd = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Guide", path: "/guide/notes" },
  { name: "Travel notes" }
]);

export default function GuidePage() {
  const { topic } = useParams<{ topic: string }>();
  const { lang } = useLang();
  const isZh = lang === "zh";
  const isValid = validTopics.has(topic as GuideTopic);

  if (!isValid) {
    return (
      <main id="top" className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-10">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
          {isZh ? "鈫?杩斿洖棣栭〉" : "鈫?Home"}
        </Link>
        <h1 className="text-3xl font-bold">{isZh ? "鏈煡涓婚" : "Unknown guide topic"}</h1>
        <p className="text-sm text-muted">
          {isZh
            ? `娌℃湁 "/guide/${topic}" 杩欎釜涓婚銆傚彲鐢ㄤ富棰橈細鍏ュ绛捐瘉 / 鏀粯鍑嗗 / 鍑鸿娉ㄦ剰浜嬮」銆俙
            : `No such guide topic at "/guide/${topic}". Available: entry, payments, notes.`}
        </p>
      </main>
    );
  }

  const current = topic as GuideTopic;
  const label = topicLabels[current];

  return (
    <>
      {current === "notes" && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesFaqJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesBreadcrumbJsonLd) }}
          />
        </>
      )}
      <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
      <header className="flex flex-col gap-2">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
          {isZh ? "鈫?杩斿洖棣栭〉" : "鈫?Home"}
        </Link>
        <h1 className="text-3xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          {isZh ? label.bodyZh : label.bodyEn}
        </p>
      </header>

      {current === "entry" && <VisaChecker />}
      {current === "payments" && <PaymentsChecklist />}
      {current === "notes" && (
        <>
          <TravelAlerts />
          <TopQuestions />
        </>
      )}

      <SourcesNote />
      </main>
    </>
  );
}


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw src\\data\\transport.ts" in c:\Users\h\Documents\New project 2\v2
 succeeded in 452ms:
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
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Raw package.json' in c:\Users\h\Documents\New project 2\v2
 succeeded in 415ms:
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
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw src\\App.tsx" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw src\\root.tsx" in c:\Users\h\Documents\New project 2\v2
 succeeded in 409ms:
import { BrowserRouter, Route, Routes } from "react-router";
import LanguageProvider from "./store/LanguageProvider";
import AtlasProvider from "./store/AtlasProvider";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import HomePage from "./pages/HomePage";
import CityPage from "./pages/CityPage";
import GuidePage from "./pages/GuidePage";
import MapPage from "./pages/MapPage";
import SharePage from "./pages/SharePage";
import AskPage from "./pages/AskPage";
import SourcesPage from "./pages/SourcesPage";

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AtlasProvider>
          <SiteHeader />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/guide/:topic" element={<GuidePage />} />
            <Route path="/city/:cityId" element={<CityPage />} />
            <Route path="/share" element={<SharePage />} />
            <Route path="/ask" element={<AskPage />} />
            <Route path="/sources" element={<SourcesPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <SiteFooter />
        </AtlasProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw src\\main.tsx" in c:\Users\h\Documents\New project 2\v2
 succeeded in 571ms:
import { useState, type ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "react-router";
import LanguageProvider, { htmlLangFor, readInitialLanguage } from "./store/LanguageProvider";
import AtlasProvider from "./store/AtlasProvider";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import ScrollToTop from "./components/common/ScrollToTop";
import { absoluteUrl } from "./lib/jsonLd";
import "./styles/globals.css";

const SITE_NAME = "Travel China";
const SOCIAL_IMAGE = absoluteUrl("/assets/china-map-gs2022-4309.jpg");

function currentHref(pathname: string, search: string, hash: string): string {
  const path = `${pathname}${search}${hash}` || "/";
  return absoluteUrl(path);
}

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [initialLang] = useState(readInitialLanguage);
  const href = currentHref(location.pathname, location.search, location.hash);

  return (
    <html lang={htmlLangFor(initialLang)} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>鏃呰涓浗</title>
        <link rel="alternate" hrefLang="x-default" href={href} />
        <link rel="alternate" hrefLang="en" href={href} />
        <link rel="alternate" hrefLang="zh-Hans" href={href} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={SOCIAL_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={SOCIAL_IMAGE} />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='10' fill='%2318201d'/%3E%3Ctext x='32' y='42' text-anchor='middle' font-size='34' fill='white'%3E%E6%97%85%3C/text%3E%3C/svg%3E"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AtlasProvider>
        <SiteHeader />
        <Outlet />
        <SiteFooter />
        <ScrollToTop />
      </AtlasProvider>
    </LanguageProvider>
  );
}


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg "<SiteHeader|SiteHeader|Outlet|ScrollToTop|LanguageProvider" -n src' in c:\Users\h\Documents\New project 2\v2
 succeeded in 609ms:
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);


 succeeded in 566ms:
src\App.tsx:2:import LanguageProvider from "./store/LanguageProvider";
src\App.tsx:4:import SiteHeader from "./components/layout/SiteHeader";
src\App.tsx:17:      <LanguageProvider>
src\App.tsx:19:          <SiteHeader />
src\App.tsx:32:      </LanguageProvider>
src\root.tsx:2:import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "react-router";
src\root.tsx:3:import LanguageProvider, { htmlLangFor, readInitialLanguage } from "./store/LanguageProvider";
src\root.tsx:5:import SiteHeader from "./components/layout/SiteHeader";
src\root.tsx:7:import ScrollToTop from "./components/common/ScrollToTop";
src\root.tsx:56:    <LanguageProvider>
src\root.tsx:58:        <SiteHeader />
src\root.tsx:59:        <Outlet />
src\root.tsx:61:        <ScrollToTop />
src\root.tsx:63:    </LanguageProvider>
src\components\layout\SiteHeader.tsx:4:export default function SiteHeader() {
src\components\common\ScrollToTop.tsx:4:export default function ScrollToTop() {
src\store\language.ts:14:  if (!value) throw new Error("useLang must be used within <LanguageProvider>");
src\store\LanguageProvider.tsx:15:export default function LanguageProvider({ children }: { children: ReactNode }) {

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Raw tsconfig.app.json' in c:\Users\h\Documents\New project 2\v2
 succeeded in 339ms:
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
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Raw tsconfig.json' in c:\Users\h\Documents\New project 2\v2
 succeeded in 436ms:
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw src\\components\\city\\CityIntro.tsx" in c:\Users\h\Documents\New project 2\v2
 succeeded in 393ms:
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


  ✓ Audit existing routes, data, homepage patterns
  → Add itinerary data and PlanPage UI
  • Wire /plan into routes, prerender, sitemap, homepage
  • Run typecheck and production build
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "node -e \"const fs=require('fs'); const s=fs.readFileSync('src/data/transport.ts','utf8'); console.log(s.match(/beijing: \\{ en: \\\"Beijing\\\", zh: \\\"(["'^'"\\\"]+)/)[1])\"" in c:\Users\h\Documents\New project 2\v2
2026-05-12T03:26:57.285241Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.4 seconds
Output:
At line:2 char:149
+ ... ); console.log(s.match(/beijing: \{ en: \"Beijing\", zh: \"([^\"]+)/) ...
+                                                                  ~
Missing type name after '['.
At line:2 char:162
+ ... nsole.log(s.match(/beijing: \{ en: \"Beijing\", zh: \"([^\"]+)/)[1])"
+                                                                          ~
Missing closing ')' in expression.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : MissingTypename
 

 exited 1 in 447ms:
At line:2 char:149
+ ... ); console.log(s.match(/beijing: \{ en: \"Beijing\", zh: \"([^\"]+)/) ...
+                                                                  ~
Missing type name after '['.
At line:2 char:162
+ ... nsole.log(s.match(/beijing: \{ en: \"Beijing\", zh: \"([^\"]+)/)[1])"
+                                                                          ~
Missing closing ')' in expression.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : MissingTypename
 

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "node -e 'const fs=require(\"fs\"); const s=fs.readFileSync(\"src/data/transport.ts\",\"utf8\"); const m=s.match(/beijing: \\{ en: \"Beijing\", zh: \"(["'^"]+)/); console.log(m&&m[1])'"'" in c:\Users\h\Documents\New project 2\v2
2026-05-12T03:27:15.438673Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.6 seconds
Output:
[eval]:1
const fs=require(fs); const s=fs.readFileSync(src/data/transport.ts,utf8); const m=s.match(/beijing: \{ en: Beijing, zh: ([^]+)/); console.log(m&&m[1])
                 ^

ReferenceError: Cannot access 'fs' before initialization
    at [eval]:1:18
    at runScriptInThisContext (node:internal/vm:219:10)
    at node:internal/process/execution:451:12
    at [eval]-wrapper:6:24
    at runScriptInContext (node:internal/process/execution:449:60)
    at evalFunction (node:internal/process/execution:283:30)
    at evalTypeScript (node:internal/process/execution:295:3)
    at node:internal/main/eval_string:71:3

Node.js v25.3.0

 exited 1 in 574ms:
[eval]:1
const fs=require(fs); const s=fs.readFileSync(src/data/transport.ts,utf8); const m=s.match(/beijing: \{ en: Beijing, zh: ([^]+)/); console.log(m&&m[1])
                 ^

ReferenceError: Cannot access 'fs' before initialization
    at [eval]:1:18
    at runScriptInThisContext (node:internal/vm:219:10)
    at node:internal/process/execution:451:12
    at [eval]-wrapper:6:24
    at runScriptInContext (node:internal/process/execution:449:60)
    at evalFunction (node:internal/process/execution:283:30)
    at evalTypeScript (node:internal/process/execution:295:3)
    at node:internal/main/eval_string:71:3

Node.js v25.3.0

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding UTF8 src\\data\\transport.ts | Select-String 'Beijing' -Context 0,0" in c:\Users\h\Documents\New project 2\v2
 succeeded in 544ms:

export type CityId = "beijing" | "shanghai" | "guangzhou" | "shenzhen";
  beijing: { en: "Beijing", zh: "北京" },
    cityId: "beijing",
    cityEn: "Beijing",
            sourceId: "beijing-airport-express"
            routeEn: "Airport shuttle bus to Beijing Railway Station (T2 Gate 11 / T3 Gate 7)",
            sourceId: "beijing-airport-services"
            sourceId: "beijing-airport-services"
            sourceId: "beijing-daxing-final-train"
            routeEn: "Daxing Airport shuttle bus to Beijing/West Railway Station",
            sourceId: "beijing-airport-services"
      sourceId: "beijing-subway-five-cards"
      sourceId: "beijing-airport-services"
        sourceId: "beijing-airport-express"
        sourceId: "beijing-daxing-final-train"



codex
我准备新增一个纯数据模块和一个独立页面：数据只保存四城三天模板，页面负责 tab 状态和卡片渲染。随后再把 `/plan` 接到路由、预渲染、sitemap 和首页入口。
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\data\itineraries.ts
diff --git a/v2/src/data/itineraries.ts b/v2/src/data/itineraries.ts
new file mode 100644
index 0000000000000000000000000000000000000000..3ef655ae3f22669342580f14288cb67f05c73171
--- /dev/null
+++ b/v2/src/data/itineraries.ts
@@ -0,0 +1,302 @@
+import type { CityId } from "./transport";
+
+export type ItineraryDay = {
+  dayNumber: 1 | 2 | 3;
+  themeEn: string;
+  themeZh: string;
+  morning: { en: string; zh: string; attractionId?: string };
+  afternoon: { en: string; zh: string; attractionId?: string };
+  evening: { en: string; zh: string; attractionId?: string };
+  travelTipEn: string;
+  travelTipZh: string;
+};
+
+export type CityItinerary = {
+  cityId: CityId;
+  subtitleEn: string;
+  subtitleZh: string;
+  days: ItineraryDay[];
+};
+
+export const cityItineraries: CityItinerary[] = [
+  {
+    cityId: "beijing",
+    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
+    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Imperial axis first",
+        themeZh: "先看皇城中轴线",
+        morning: {
+          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
+          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
+          attractionId: "bj-forbidden-city"
+        },
+        afternoon: {
+          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
+          zh: "午后转到天安门广场，预留安检和拍照时间。",
+          attractionId: "bj-tiananmen"
+        },
+        evening: {
+          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
+          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
+        },
+        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
+        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Temples, gardens, and hutongs",
+        themeZh: "寺庙、园林与胡同",
+        morning: {
+          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
+          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
+          attractionId: "bj-temple-of-heaven"
+        },
+        afternoon: {
+          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
+          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
+          attractionId: "bj-lama-temple"
+        },
+        evening: {
+          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
+          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
+        },
+        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
+        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Great Wall day with a soft landing",
+        themeZh: "长城一日与轻松收尾",
+        morning: {
+          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
+          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
+          attractionId: "bj-mutianyu"
+        },
+        afternoon: {
+          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
+          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
+          attractionId: "bj-summer-palace"
+        },
+        evening: {
+          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
+          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
+        },
+        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
+        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
+    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Old Shanghai to neon Shanghai",
+        themeZh: "从老上海到霓虹上海",
+        morning: {
+          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
+          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
+          attractionId: "sh-bund"
+        },
+        afternoon: {
+          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
+          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
+          attractionId: "sh-yu-garden"
+        },
+        evening: {
+          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
+          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
+        },
+        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
+        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Museums and plane-tree streets",
+        themeZh: "博物馆与梧桐街区",
+        morning: {
+          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
+          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
+          attractionId: "sh-museum"
+        },
+        afternoon: {
+          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
+          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
+          attractionId: "sh-wukang"
+        },
+        evening: {
+          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
+          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
+        },
+        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
+        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Pudong skyline and river contrast",
+        themeZh: "浦东天际线与江岸对照",
+        morning: {
+          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
+          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
+          attractionId: "sh-lujiazui"
+        },
+        afternoon: {
+          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
+          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
+          attractionId: "sh-shanghai-tower"
+        },
+        evening: {
+          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
+          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
+        },
+        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
+        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
+    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Lingnan craft and first skyline view",
+        themeZh: "岭南工艺与第一眼天际线",
+        morning: {
+          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
+          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
+          attractionId: "gz-chen-clan"
+        },
+        afternoon: {
+          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
+          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
+          attractionId: "gz-shamian"
+        },
+        evening: {
+          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
+          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
+          attractionId: "gz-canton-tower"
+        },
+        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
+        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Old city breakfast and civic landmarks",
+        themeZh: "老城早茶与城市地标",
+        morning: {
+          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
+          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
+          attractionId: "gz-yuexiu-park"
+        },
+        afternoon: {
+          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
+          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
+          attractionId: "gz-baiyun-mountain"
+        },
+        evening: {
+          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
+          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
+        },
+        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
+        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Markets, museums, and Pearl River night",
+        themeZh: "市场、博物馆与珠江夜色",
+        morning: {
+          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
+          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
+        },
+        afternoon: {
+          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
+          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
+        },
+        evening: {
+          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
+          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
+          attractionId: "gz-pearl-river"
+        },
+        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
+        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
+    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "OCT cluster and Shekou night",
+        themeZh: "华侨城组团与蛇口夜晚",
+        morning: {
+          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
+          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
+          attractionId: "sz-window-of-the-world"
+        },
+        afternoon: {
+          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
+          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
+          attractionId: "sz-octloft"
+        },
+        evening: {
+          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
+          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
+          attractionId: "sz-sea-world"
+        },
+        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
+        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Reform-era city views and beach air",
+        themeZh: "改革城市视角与海边空气",
+        morning: {
+          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
+          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
+          attractionId: "sz-lianhuashan"
+        },
+        afternoon: {
+          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
+          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
+          attractionId: "sz-dameisha"
+        },
+        evening: {
+          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
+          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
+        },
+        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
+        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Dapeng coast and historic village",
+        themeZh: "大鹏海岸与古城",
+        morning: {
+          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
+          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
+          attractionId: "sz-dapeng"
+        },
+        afternoon: {
+          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
+          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
+        },
+        evening: {
+          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
+          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
+        },
+        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
+        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
+      }
+    ]
+  }
+];

diff --git a/v2/src/data/itineraries.ts b/v2/src/data/itineraries.ts
new file mode 100644
index 0000000000000000000000000000000000000000..3ef655ae3f22669342580f14288cb67f05c73171
--- /dev/null
+++ b/v2/src/data/itineraries.ts
@@ -0,0 +1,302 @@
+import type { CityId } from "./transport";
+
+export type ItineraryDay = {
+  dayNumber: 1 | 2 | 3;
+  themeEn: string;
+  themeZh: string;
+  morning: { en: string; zh: string; attractionId?: string };
+  afternoon: { en: string; zh: string; attractionId?: string };
+  evening: { en: string; zh: string; attractionId?: string };
+  travelTipEn: string;
+  travelTipZh: string;
+};
+
+export type CityItinerary = {
+  cityId: CityId;
+  subtitleEn: string;
+  subtitleZh: string;
+  days: ItineraryDay[];
+};
+
+export const cityItineraries: CityItinerary[] = [
+  {
+    cityId: "beijing",
+    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
+    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Imperial axis first",
+        themeZh: "先看皇城中轴线",
+        morning: {
+          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
+          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
+          attractionId: "bj-forbidden-city"
+        },
+        afternoon: {
+          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
+          zh: "午后转到天安门广场，预留安检和拍照时间。",
+          attractionId: "bj-tiananmen"
+        },
+        evening: {
+          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
+          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
+        },
+        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
+        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Temples, gardens, and hutongs",
+        themeZh: "寺庙、园林与胡同",
+        morning: {
+          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
+          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
+          attractionId: "bj-temple-of-heaven"
+        },
+        afternoon: {
+          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
+          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
+          attractionId: "bj-lama-temple"
+        },
+        evening: {
+          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
+          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
+        },
+        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
+        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Great Wall day with a soft landing",
+        themeZh: "长城一日与轻松收尾",
+        morning: {
+          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
+          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
+          attractionId: "bj-mutianyu"
+        },
+        afternoon: {
+          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
+          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
+          attractionId: "bj-summer-palace"
+        },
+        evening: {
+          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
+          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
+        },
+        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
+        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
+    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Old Shanghai to neon Shanghai",
+        themeZh: "从老上海到霓虹上海",
+        morning: {
+          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
+          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
+          attractionId: "sh-bund"
+        },
+        afternoon: {
+          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
+          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
+          attractionId: "sh-yu-garden"
+        },
+        evening: {
+          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
+          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
+        },
+        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
+        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Museums and plane-tree streets",
+        themeZh: "博物馆与梧桐街区",
+        morning: {
+          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
+          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
+          attractionId: "sh-museum"
+        },
+        afternoon: {
+          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
+          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
+          attractionId: "sh-wukang"
+        },
+        evening: {
+          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
+          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
+        },
+        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
+        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Pudong skyline and river contrast",
+        themeZh: "浦东天际线与江岸对照",
+        morning: {
+          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
+          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
+          attractionId: "sh-lujiazui"
+        },
+        afternoon: {
+          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
+          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
+          attractionId: "sh-shanghai-tower"
+        },
+        evening: {
+          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
+          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
+        },
+        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
+        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
+    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Lingnan craft and first skyline view",
+        themeZh: "岭南工艺与第一眼天际线",
+        morning: {
+          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
+          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
+          attractionId: "gz-chen-clan"
+        },
+        afternoon: {
+          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
+          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
+          attractionId: "gz-shamian"
+        },
+        evening: {
+          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
+          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
+          attractionId: "gz-canton-tower"
+        },
+        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
+        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Old city breakfast and civic landmarks",
+        themeZh: "老城早茶与城市地标",
+        morning: {
+          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
+          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
+          attractionId: "gz-yuexiu-park"
+        },
+        afternoon: {
+          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
+          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
+          attractionId: "gz-baiyun-mountain"
+        },
+        evening: {
+          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
+          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
+        },
+        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
+        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Markets, museums, and Pearl River night",
+        themeZh: "市场、博物馆与珠江夜色",
+        morning: {
+          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
+          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
+        },
+        afternoon: {
+          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
+          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
+        },
+        evening: {
+          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
+          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
+          attractionId: "gz-pearl-river"
+        },
+        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
+        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
+    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "OCT cluster and Shekou night",
+        themeZh: "华侨城组团与蛇口夜晚",
+        morning: {
+          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
+          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
+          attractionId: "sz-window-of-the-world"
+        },
+        afternoon: {
+          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
+          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
+          attractionId: "sz-octloft"
+        },
+        evening: {
+          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
+          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
+          attractionId: "sz-sea-world"
+        },
+        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
+        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Reform-era city views and beach air",
+        themeZh: "改革城市视角与海边空气",
+        morning: {
+          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
+          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
+          attractionId: "sz-lianhuashan"
+        },
+        afternoon: {
+          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
+          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
+          attractionId: "sz-dameisha"
+        },
+        evening: {
+          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
+          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
+        },
+        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
+        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Dapeng coast and historic village",
+        themeZh: "大鹏海岸与古城",
+        morning: {
+          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
+          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
+          attractionId: "sz-dapeng"
+        },
+        afternoon: {
+          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
+          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
+        },
+        evening: {
+          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
+          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
+        },
+        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
+        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
+      }
+    ]
+  }
+];

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\pages\PlanPage.tsx
diff --git a/v2/src/data/itineraries.ts b/v2/src/data/itineraries.ts
new file mode 100644
index 0000000000000000000000000000000000000000..3ef655ae3f22669342580f14288cb67f05c73171
--- /dev/null
+++ b/v2/src/data/itineraries.ts
@@ -0,0 +1,302 @@
+import type { CityId } from "./transport";
+
+export type ItineraryDay = {
+  dayNumber: 1 | 2 | 3;
+  themeEn: string;
+  themeZh: string;
+  morning: { en: string; zh: string; attractionId?: string };
+  afternoon: { en: string; zh: string; attractionId?: string };
+  evening: { en: string; zh: string; attractionId?: string };
+  travelTipEn: string;
+  travelTipZh: string;
+};
+
+export type CityItinerary = {
+  cityId: CityId;
+  subtitleEn: string;
+  subtitleZh: string;
+  days: ItineraryDay[];
+};
+
+export const cityItineraries: CityItinerary[] = [
+  {
+    cityId: "beijing",
+    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
+    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Imperial axis first",
+        themeZh: "先看皇城中轴线",
+        morning: {
+          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
+          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
+          attractionId: "bj-forbidden-city"
+        },
+        afternoon: {
+          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
+          zh: "午后转到天安门广场，预留安检和拍照时间。",
+          attractionId: "bj-tiananmen"
+        },
+        evening: {
+          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
+          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
+        },
+        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
+        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Temples, gardens, and hutongs",
+        themeZh: "寺庙、园林与胡同",
+        morning: {
+          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
+          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
+          attractionId: "bj-temple-of-heaven"
+        },
+        afternoon: {
+          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
+          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
+          attractionId: "bj-lama-temple"
+        },
+        evening: {
+          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
+          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
+        },
+        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
+        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Great Wall day with a soft landing",
+        themeZh: "长城一日与轻松收尾",
+        morning: {
+          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
+          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
+          attractionId: "bj-mutianyu"
+        },
+        afternoon: {
+          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
+          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
+          attractionId: "bj-summer-palace"
+        },
+        evening: {
+          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
+          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
+        },
+        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
+        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
+    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Old Shanghai to neon Shanghai",
+        themeZh: "从老上海到霓虹上海",
+        morning: {
+          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
+          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
+          attractionId: "sh-bund"
+        },
+        afternoon: {
+          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
+          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
+          attractionId: "sh-yu-garden"
+        },
+        evening: {
+          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
+          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
+        },
+        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
+        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Museums and plane-tree streets",
+        themeZh: "博物馆与梧桐街区",
+        morning: {
+          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
+          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
+          attractionId: "sh-museum"
+        },
+        afternoon: {
+          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
+          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
+          attractionId: "sh-wukang"
+        },
+        evening: {
+          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
+          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
+        },
+        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
+        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Pudong skyline and river contrast",
+        themeZh: "浦东天际线与江岸对照",
+        morning: {
+          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
+          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
+          attractionId: "sh-lujiazui"
+        },
+        afternoon: {
+          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
+          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
+          attractionId: "sh-shanghai-tower"
+        },
+        evening: {
+          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
+          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
+        },
+        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
+        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
+    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Lingnan craft and first skyline view",
+        themeZh: "岭南工艺与第一眼天际线",
+        morning: {
+          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
+          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
+          attractionId: "gz-chen-clan"
+        },
+        afternoon: {
+          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
+          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
+          attractionId: "gz-shamian"
+        },
+        evening: {
+          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
+          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
+          attractionId: "gz-canton-tower"
+        },
+        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
+        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Old city breakfast and civic landmarks",
+        themeZh: "老城早茶与城市地标",
+        morning: {
+          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
+          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
+          attractionId: "gz-yuexiu-park"
+        },
+        afternoon: {
+          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
+          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
+          attractionId: "gz-baiyun-mountain"
+        },
+        evening: {
+          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
+          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
+        },
+        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
+        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Markets, museums, and Pearl River night",
+        themeZh: "市场、博物馆与珠江夜色",
+        morning: {
+          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
+          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
+        },
+        afternoon: {
+          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
+          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
+        },
+        evening: {
+          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
+          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
+          attractionId: "gz-pearl-river"
+        },
+        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
+        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
+    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "OCT cluster and Shekou night",
+        themeZh: "华侨城组团与蛇口夜晚",
+        morning: {
+          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
+          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
+          attractionId: "sz-window-of-the-world"
+        },
+        afternoon: {
+          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
+          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
+          attractionId: "sz-octloft"
+        },
+        evening: {
+          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
+          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
+          attractionId: "sz-sea-world"
+        },
+        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
+        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Reform-era city views and beach air",
+        themeZh: "改革城市视角与海边空气",
+        morning: {
+          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
+          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
+          attractionId: "sz-lianhuashan"
+        },
+        afternoon: {
+          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
+          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
+          attractionId: "sz-dameisha"
+        },
+        evening: {
+          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
+          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
+        },
+        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
+        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Dapeng coast and historic village",
+        themeZh: "大鹏海岸与古城",
+        morning: {
+          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
+          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
+          attractionId: "sz-dapeng"
+        },
+        afternoon: {
+          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
+          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
+        },
+        evening: {
+          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
+          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
+        },
+        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
+        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
+      }
+    ]
+  }
+];
diff --git a/v2/src/pages/PlanPage.tsx b/v2/src/pages/PlanPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..0c28acdf91cad0fa901bf7c1574b7e262bfe34dc
--- /dev/null
+++ b/v2/src/pages/PlanPage.tsx
@@ -0,0 +1,176 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { cityItineraries, type ItineraryDay } from "../data/itineraries";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
+
+type TimeSlotKey = "morning" | "afternoon" | "evening";
+
+const TIME_SLOTS: Array<{ key: TimeSlotKey; labelEn: string; labelZh: string }> = [
+  { key: "morning", labelEn: "Morning", labelZh: "上午" },
+  { key: "afternoon", labelEn: "Afternoon", labelZh: "下午" },
+  { key: "evening", labelEn: "Evening", labelZh: "晚上" }
+];
+
+const planBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "3-day plan", path: "/plan" }
+]);
+
+export default function PlanPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeCityId, setActiveCityId] = useState<CityId>("beijing");
+  const activeItinerary = cityItineraries.find((itinerary) => itinerary.cityId === activeCityId) ?? cityItineraries[0];
+  const activeCity = CITY_LABELS[activeItinerary.cityId];
+
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(planBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-8 sm:py-10">
+        <header className="flex flex-col gap-3">
+          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+            {isZh ? "← 返回首页" : "← Home"}
+          </Link>
+          <div className="flex flex-col gap-2">
+            <span className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "Trip Planner" : "Trip Planner"}
+            </span>
+            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+              {isZh ? "3 天行程" : "3-day plan"}
+            </h1>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
+              {isZh
+                ? "四个入门城市各有一份三天模板：每天按上午、下午、晚上拆开，适合第一次来中国时快速落地。"
+                : "A practical three-day template for each first-time city, split into morning, afternoon, and evening blocks."}
+            </p>
+          </div>
+        </header>
+
+        <div
+          role="tablist"
+          aria-label={isZh ? "选择城市行程" : "Choose a city itinerary"}
+          className="flex gap-2 overflow-x-auto rounded-lg border border-line bg-white p-2"
+        >
+          {cityItineraries.map((itinerary) => {
+            const city = CITY_LABELS[itinerary.cityId];
+            const isActive = itinerary.cityId === activeCityId;
+
+            return (
+              <button
+                key={itinerary.cityId}
+                type="button"
+                role="tab"
+                id={`plan-tab-${itinerary.cityId}`}
+                aria-selected={isActive}
+                aria-controls={`plan-panel-${itinerary.cityId}`}
+                onClick={() => setActiveCityId(itinerary.cityId)}
+                className={clsx(
+                  "min-w-28 rounded-md border px-4 py-2 text-left text-sm font-bold transition",
+                  isActive
+                    ? "border-ink bg-ink text-white"
+                    : "border-transparent bg-paper text-ink hover:border-jade hover:text-jade"
+                )}
+              >
+                <span className="block">{isZh ? city.zh : city.en}</span>
+                <span className={clsx("block text-[11px] font-normal", isActive ? "text-white/70" : "text-muted")}>
+                  {isZh ? city.en : city.zh}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <section
+          role="tabpanel"
+          id={`plan-panel-${activeItinerary.cityId}`}
+          aria-labelledby={`plan-tab-${activeItinerary.cityId}`}
+          className="flex flex-col gap-6"
+        >
+          <header className="flex flex-col gap-1">
+            <p className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "当前城市" : "Current city"}
+            </p>
+            <h2 className="text-2xl font-bold">{isZh ? activeCity.zh : activeCity.en}</h2>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted">
+              {isZh ? activeItinerary.subtitleZh : activeItinerary.subtitleEn}
+            </p>
+          </header>
+
+          <div className="flex flex-col gap-8">
+            {activeItinerary.days.map((day) => (
+              <section key={day.dayNumber} className="flex flex-col gap-3">
+                <div className="flex flex-col gap-1 border-b border-line pb-3">
+                  <span className="text-xs font-bold uppercase tracking-widest text-jade">
+                    {isZh ? `第 ${day.dayNumber} 天` : `Day ${day.dayNumber}`}
+                  </span>
+                  <h3 className="text-xl font-bold">{isZh ? day.themeZh : day.themeEn}</h3>
+                </div>
+                <div className="flex flex-col gap-3">
+                  {TIME_SLOTS.map((slot) => (
+                    <PlanActivityCard
+                      key={slot.key}
+                      cityId={activeItinerary.cityId}
+                      day={day}
+                      slot={slot}
+                      isZh={isZh}
+                    />
+                  ))}
+                </div>
+              </section>
+            ))}
+          </div>
+        </section>
+      </main>
+    </>
+  );
+}
+
+function PlanActivityCard({
+  cityId,
+  day,
+  slot,
+  isZh
+}: {
+  cityId: CityId;
+  day: ItineraryDay;
+  slot: { key: TimeSlotKey; labelEn: string; labelZh: string };
+  isZh: boolean;
+}) {
+  const activity = day[slot.key];
+
+  return (
+    <article className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
+      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
+        <div className="flex min-w-0 flex-col gap-1">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            {isZh ? slot.labelZh : slot.labelEn}
+          </span>
+          <h4 className="break-words text-lg font-bold leading-tight">
+            {isZh ? day.themeZh : day.themeEn}
+          </h4>
+        </div>
+        {activity.attractionId && (
+          <Link
+            to={`/city/${cityId}#intro`}
+            className="shrink-0 text-xs font-bold uppercase tracking-widest text-jade hover:underline"
+          >
+            {isZh ? "查看景点" : "Attraction"}
+          </Link>
+        )}
+      </div>
+
+      <p className="text-sm leading-relaxed text-ink/85">{isZh ? activity.zh : activity.en}</p>
+
+      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
+        <strong className="mr-1">{isZh ? "提示：" : "Tip:"}</strong>
+        {isZh ? day.travelTipZh : day.travelTipEn}
+      </div>
+    </article>
+  );
+}

diff --git a/v2/src/data/itineraries.ts b/v2/src/data/itineraries.ts
new file mode 100644
index 0000000000000000000000000000000000000000..3ef655ae3f22669342580f14288cb67f05c73171
--- /dev/null
+++ b/v2/src/data/itineraries.ts
@@ -0,0 +1,302 @@
+import type { CityId } from "./transport";
+
+export type ItineraryDay = {
+  dayNumber: 1 | 2 | 3;
+  themeEn: string;
+  themeZh: string;
+  morning: { en: string; zh: string; attractionId?: string };
+  afternoon: { en: string; zh: string; attractionId?: string };
+  evening: { en: string; zh: string; attractionId?: string };
+  travelTipEn: string;
+  travelTipZh: string;
+};
+
+export type CityItinerary = {
+  cityId: CityId;
+  subtitleEn: string;
+  subtitleZh: string;
+  days: ItineraryDay[];
+};
+
+export const cityItineraries: CityItinerary[] = [
+  {
+    cityId: "beijing",
+    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
+    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Imperial axis first",
+        themeZh: "先看皇城中轴线",
+        morning: {
+          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
+          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
+          attractionId: "bj-forbidden-city"
+        },
+        afternoon: {
+          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
+          zh: "午后转到天安门广场，预留安检和拍照时间。",
+          attractionId: "bj-tiananmen"
+        },
+        evening: {
+          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
+          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
+        },
+        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
+        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Temples, gardens, and hutongs",
+        themeZh: "寺庙、园林与胡同",
+        morning: {
+          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
+          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
+          attractionId: "bj-temple-of-heaven"
+        },
+        afternoon: {
+          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
+          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
+          attractionId: "bj-lama-temple"
+        },
+        evening: {
+          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
+          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
+        },
+        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
+        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Great Wall day with a soft landing",
+        themeZh: "长城一日与轻松收尾",
+        morning: {
+          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
+          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
+          attractionId: "bj-mutianyu"
+        },
+        afternoon: {
+          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
+          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
+          attractionId: "bj-summer-palace"
+        },
+        evening: {
+          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
+          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
+        },
+        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
+        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
+    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Old Shanghai to neon Shanghai",
+        themeZh: "从老上海到霓虹上海",
+        morning: {
+          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
+          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
+          attractionId: "sh-bund"
+        },
+        afternoon: {
+          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
+          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
+          attractionId: "sh-yu-garden"
+        },
+        evening: {
+          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
+          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
+        },
+        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
+        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Museums and plane-tree streets",
+        themeZh: "博物馆与梧桐街区",
+        morning: {
+          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
+          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
+          attractionId: "sh-museum"
+        },
+        afternoon: {
+          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
+          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
+          attractionId: "sh-wukang"
+        },
+        evening: {
+          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
+          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
+        },
+        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
+        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Pudong skyline and river contrast",
+        themeZh: "浦东天际线与江岸对照",
+        morning: {
+          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
+          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
+          attractionId: "sh-lujiazui"
+        },
+        afternoon: {
+          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
+          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
+          attractionId: "sh-shanghai-tower"
+        },
+        evening: {
+          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
+          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
+        },
+        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
+        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
+    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Lingnan craft and first skyline view",
+        themeZh: "岭南工艺与第一眼天际线",
+        morning: {
+          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
+          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
+          attractionId: "gz-chen-clan"
+        },
+        afternoon: {
+          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
+          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
+          attractionId: "gz-shamian"
+        },
+        evening: {
+          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
+          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
+          attractionId: "gz-canton-tower"
+        },
+        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
+        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Old city breakfast and civic landmarks",
+        themeZh: "老城早茶与城市地标",
+        morning: {
+          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
+          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
+          attractionId: "gz-yuexiu-park"
+        },
+        afternoon: {
+          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
+          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
+          attractionId: "gz-baiyun-mountain"
+        },
+        evening: {
+          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
+          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
+        },
+        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
+        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Markets, museums, and Pearl River night",
+        themeZh: "市场、博物馆与珠江夜色",
+        morning: {
+          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
+          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
+        },
+        afternoon: {
+          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
+          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
+        },
+        evening: {
+          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
+          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
+          attractionId: "gz-pearl-river"
+        },
+        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
+        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
+    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "OCT cluster and Shekou night",
+        themeZh: "华侨城组团与蛇口夜晚",
+        morning: {
+          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
+          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
+          attractionId: "sz-window-of-the-world"
+        },
+        afternoon: {
+          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
+          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
+          attractionId: "sz-octloft"
+        },
+        evening: {
+          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
+          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
+          attractionId: "sz-sea-world"
+        },
+        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
+        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Reform-era city views and beach air",
+        themeZh: "改革城市视角与海边空气",
+        morning: {
+          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
+          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
+          attractionId: "sz-lianhuashan"
+        },
+        afternoon: {
+          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
+          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
+          attractionId: "sz-dameisha"
+        },
+        evening: {
+          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
+          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
+        },
+        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
+        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Dapeng coast and historic village",
+        themeZh: "大鹏海岸与古城",
+        morning: {
+          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
+          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
+          attractionId: "sz-dapeng"
+        },
+        afternoon: {
+          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
+          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
+        },
+        evening: {
+          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
+          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
+        },
+        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
+        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
+      }
+    ]
+  }
+];
diff --git a/v2/src/pages/PlanPage.tsx b/v2/src/pages/PlanPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..0c28acdf91cad0fa901bf7c1574b7e262bfe34dc
--- /dev/null
+++ b/v2/src/pages/PlanPage.tsx
@@ -0,0 +1,176 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { cityItineraries, type ItineraryDay } from "../data/itineraries";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
+
+type TimeSlotKey = "morning" | "afternoon" | "evening";
+
+const TIME_SLOTS: Array<{ key: TimeSlotKey; labelEn: string; labelZh: string }> = [
+  { key: "morning", labelEn: "Morning", labelZh: "上午" },
+  { key: "afternoon", labelEn: "Afternoon", labelZh: "下午" },
+  { key: "evening", labelEn: "Evening", labelZh: "晚上" }
+];
+
+const planBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "3-day plan", path: "/plan" }
+]);
+
+export default function PlanPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeCityId, setActiveCityId] = useState<CityId>("beijing");
+  const activeItinerary = cityItineraries.find((itinerary) => itinerary.cityId === activeCityId) ?? cityItineraries[0];
+  const activeCity = CITY_LABELS[activeItinerary.cityId];
+
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(planBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-8 sm:py-10">
+        <header className="flex flex-col gap-3">
+          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+            {isZh ? "← 返回首页" : "← Home"}
+          </Link>
+          <div className="flex flex-col gap-2">
+            <span className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "Trip Planner" : "Trip Planner"}
+            </span>
+            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+              {isZh ? "3 天行程" : "3-day plan"}
+            </h1>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
+              {isZh
+                ? "四个入门城市各有一份三天模板：每天按上午、下午、晚上拆开，适合第一次来中国时快速落地。"
+                : "A practical three-day template for each first-time city, split into morning, afternoon, and evening blocks."}
+            </p>
+          </div>
+        </header>
+
+        <div
+          role="tablist"
+          aria-label={isZh ? "选择城市行程" : "Choose a city itinerary"}
+          className="flex gap-2 overflow-x-auto rounded-lg border border-line bg-white p-2"
+        >
+          {cityItineraries.map((itinerary) => {
+            const city = CITY_LABELS[itinerary.cityId];
+            const isActive = itinerary.cityId === activeCityId;
+
+            return (
+              <button
+                key={itinerary.cityId}
+                type="button"
+                role="tab"
+                id={`plan-tab-${itinerary.cityId}`}
+                aria-selected={isActive}
+                aria-controls={`plan-panel-${itinerary.cityId}`}
+                onClick={() => setActiveCityId(itinerary.cityId)}
+                className={clsx(
+                  "min-w-28 rounded-md border px-4 py-2 text-left text-sm font-bold transition",
+                  isActive
+                    ? "border-ink bg-ink text-white"
+                    : "border-transparent bg-paper text-ink hover:border-jade hover:text-jade"
+                )}
+              >
+                <span className="block">{isZh ? city.zh : city.en}</span>
+                <span className={clsx("block text-[11px] font-normal", isActive ? "text-white/70" : "text-muted")}>
+                  {isZh ? city.en : city.zh}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <section
+          role="tabpanel"
+          id={`plan-panel-${activeItinerary.cityId}`}
+          aria-labelledby={`plan-tab-${activeItinerary.cityId}`}
+          className="flex flex-col gap-6"
+        >
+          <header className="flex flex-col gap-1">
+            <p className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "当前城市" : "Current city"}
+            </p>
+            <h2 className="text-2xl font-bold">{isZh ? activeCity.zh : activeCity.en}</h2>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted">
+              {isZh ? activeItinerary.subtitleZh : activeItinerary.subtitleEn}
+            </p>
+          </header>
+
+          <div className="flex flex-col gap-8">
+            {activeItinerary.days.map((day) => (
+              <section key={day.dayNumber} className="flex flex-col gap-3">
+                <div className="flex flex-col gap-1 border-b border-line pb-3">
+                  <span className="text-xs font-bold uppercase tracking-widest text-jade">
+                    {isZh ? `第 ${day.dayNumber} 天` : `Day ${day.dayNumber}`}
+                  </span>
+                  <h3 className="text-xl font-bold">{isZh ? day.themeZh : day.themeEn}</h3>
+                </div>
+                <div className="flex flex-col gap-3">
+                  {TIME_SLOTS.map((slot) => (
+                    <PlanActivityCard
+                      key={slot.key}
+                      cityId={activeItinerary.cityId}
+                      day={day}
+                      slot={slot}
+                      isZh={isZh}
+                    />
+                  ))}
+                </div>
+              </section>
+            ))}
+          </div>
+        </section>
+      </main>
+    </>
+  );
+}
+
+function PlanActivityCard({
+  cityId,
+  day,
+  slot,
+  isZh
+}: {
+  cityId: CityId;
+  day: ItineraryDay;
+  slot: { key: TimeSlotKey; labelEn: string; labelZh: string };
+  isZh: boolean;
+}) {
+  const activity = day[slot.key];
+
+  return (
+    <article className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
+      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
+        <div className="flex min-w-0 flex-col gap-1">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            {isZh ? slot.labelZh : slot.labelEn}
+          </span>
+          <h4 className="break-words text-lg font-bold leading-tight">
+            {isZh ? day.themeZh : day.themeEn}
+          </h4>
+        </div>
+        {activity.attractionId && (
+          <Link
+            to={`/city/${cityId}#intro`}
+            className="shrink-0 text-xs font-bold uppercase tracking-widest text-jade hover:underline"
+          >
+            {isZh ? "查看景点" : "Attraction"}
+          </Link>
+        )}
+      </div>
+
+      <p className="text-sm leading-relaxed text-ink/85">{isZh ? activity.zh : activity.en}</p>
+
+      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
+        <strong className="mr-1">{isZh ? "提示：" : "Tip:"}</strong>
+        {isZh ? day.travelTipZh : day.travelTipEn}
+      </div>
+    </article>
+  );
+}

  ✓ Audit existing routes, data, homepage patterns
  ✓ Add itinerary data and PlanPage UI
  → Wire /plan into routes, prerender, sitemap, homepage
  • Run typecheck and production build
diff --git a/v2/src/data/itineraries.ts b/v2/src/data/itineraries.ts
new file mode 100644
index 0000000000000000000000000000000000000000..3ef655ae3f22669342580f14288cb67f05c73171
--- /dev/null
+++ b/v2/src/data/itineraries.ts
@@ -0,0 +1,302 @@
+import type { CityId } from "./transport";
+
+export type ItineraryDay = {
+  dayNumber: 1 | 2 | 3;
+  themeEn: string;
+  themeZh: string;
+  morning: { en: string; zh: string; attractionId?: string };
+  afternoon: { en: string; zh: string; attractionId?: string };
+  evening: { en: string; zh: string; attractionId?: string };
+  travelTipEn: string;
+  travelTipZh: string;
+};
+
+export type CityItinerary = {
+  cityId: CityId;
+  subtitleEn: string;
+  subtitleZh: string;
+  days: ItineraryDay[];
+};
+
+export const cityItineraries: CityItinerary[] = [
+  {
+    cityId: "beijing",
+    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
+    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Imperial axis first",
+        themeZh: "先看皇城中轴线",
+        morning: {
+          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
+          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
+          attractionId: "bj-forbidden-city"
+        },
+        afternoon: {
+          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
+          zh: "午后转到天安门广场，预留安检和拍照时间。",
+          attractionId: "bj-tiananmen"
+        },
+        evening: {
+          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
+          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
+        },
+        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
+        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Temples, gardens, and hutongs",
+        themeZh: "寺庙、园林与胡同",
+        morning: {
+          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
+          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
+          attractionId: "bj-temple-of-heaven"
+        },
+        afternoon: {
+          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
+          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
+          attractionId: "bj-lama-temple"
+        },
+        evening: {
+          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
+          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
+        },
+        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
+        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Great Wall day with a soft landing",
+        themeZh: "长城一日与轻松收尾",
+        morning: {
+          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
+          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
+          attractionId: "bj-mutianyu"
+        },
+        afternoon: {
+          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
+          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
+          attractionId: "bj-summer-palace"
+        },
+        evening: {
+          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
+          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
+        },
+        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
+        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
+    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Old Shanghai to neon Shanghai",
+        themeZh: "从老上海到霓虹上海",
+        morning: {
+          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
+          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
+          attractionId: "sh-bund"
+        },
+        afternoon: {
+          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
+          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
+          attractionId: "sh-yu-garden"
+        },
+        evening: {
+          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
+          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
+        },
+        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
+        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Museums and plane-tree streets",
+        themeZh: "博物馆与梧桐街区",
+        morning: {
+          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
+          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
+          attractionId: "sh-museum"
+        },
+        afternoon: {
+          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
+          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
+          attractionId: "sh-wukang"
+        },
+        evening: {
+          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
+          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
+        },
+        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
+        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Pudong skyline and river contrast",
+        themeZh: "浦东天际线与江岸对照",
+        morning: {
+          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
+          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
+          attractionId: "sh-lujiazui"
+        },
+        afternoon: {
+          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
+          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
+          attractionId: "sh-shanghai-tower"
+        },
+        evening: {
+          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
+          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
+        },
+        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
+        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
+    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Lingnan craft and first skyline view",
+        themeZh: "岭南工艺与第一眼天际线",
+        morning: {
+          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
+          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
+          attractionId: "gz-chen-clan"
+        },
+        afternoon: {
+          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
+          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
+          attractionId: "gz-shamian"
+        },
+        evening: {
+          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
+          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
+          attractionId: "gz-canton-tower"
+        },
+        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
+        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Old city breakfast and civic landmarks",
+        themeZh: "老城早茶与城市地标",
+        morning: {
+          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
+          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
+          attractionId: "gz-yuexiu-park"
+        },
+        afternoon: {
+          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
+          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
+          attractionId: "gz-baiyun-mountain"
+        },
+        evening: {
+          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
+          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
+        },
+        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
+        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Markets, museums, and Pearl River night",
+        themeZh: "市场、博物馆与珠江夜色",
+        morning: {
+          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
+          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
+        },
+        afternoon: {
+          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
+          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
+        },
+        evening: {
+          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
+          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
+          attractionId: "gz-pearl-river"
+        },
+        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
+        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
+    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "OCT cluster and Shekou night",
+        themeZh: "华侨城组团与蛇口夜晚",
+        morning: {
+          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
+          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
+          attractionId: "sz-window-of-the-world"
+        },
+        afternoon: {
+          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
+          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
+          attractionId: "sz-octloft"
+        },
+        evening: {
+          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
+          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
+          attractionId: "sz-sea-world"
+        },
+        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
+        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Reform-era city views and beach air",
+        themeZh: "改革城市视角与海边空气",
+        morning: {
+          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
+          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
+          attractionId: "sz-lianhuashan"
+        },
+        afternoon: {
+          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
+          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
+          attractionId: "sz-dameisha"
+        },
+        evening: {
+          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
+          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
+        },
+        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
+        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Dapeng coast and historic village",
+        themeZh: "大鹏海岸与古城",
+        morning: {
+          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
+          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
+          attractionId: "sz-dapeng"
+        },
+        afternoon: {
+          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
+          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
+        },
+        evening: {
+          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
+          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
+        },
+        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
+        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
+      }
+    ]
+  }
+];
diff --git a/v2/src/pages/PlanPage.tsx b/v2/src/pages/PlanPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..0c28acdf91cad0fa901bf7c1574b7e262bfe34dc
--- /dev/null
+++ b/v2/src/pages/PlanPage.tsx
@@ -0,0 +1,176 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { cityItineraries, type ItineraryDay } from "../data/itineraries";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
+
+type TimeSlotKey = "morning" | "afternoon" | "evening";
+
+const TIME_SLOTS: Array<{ key: TimeSlotKey; labelEn: string; labelZh: string }> = [
+  { key: "morning", labelEn: "Morning", labelZh: "上午" },
+  { key: "afternoon", labelEn: "Afternoon", labelZh: "下午" },
+  { key: "evening", labelEn: "Evening", labelZh: "晚上" }
+];
+
+const planBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "3-day plan", path: "/plan" }
+]);
+
+export default function PlanPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeCityId, setActiveCityId] = useState<CityId>("beijing");
+  const activeItinerary = cityItineraries.find((itinerary) => itinerary.cityId === activeCityId) ?? cityItineraries[0];
+  const activeCity = CITY_LABELS[activeItinerary.cityId];
+
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(planBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-8 sm:py-10">
+        <header className="flex flex-col gap-3">
+          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+            {isZh ? "← 返回首页" : "← Home"}
+          </Link>
+          <div className="flex flex-col gap-2">
+            <span className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "Trip Planner" : "Trip Planner"}
+            </span>
+            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+              {isZh ? "3 天行程" : "3-day plan"}
+            </h1>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
+              {isZh
+                ? "四个入门城市各有一份三天模板：每天按上午、下午、晚上拆开，适合第一次来中国时快速落地。"
+                : "A practical three-day template for each first-time city, split into morning, afternoon, and evening blocks."}
+            </p>
+          </div>
+        </header>
+
+        <div
+          role="tablist"
+          aria-label={isZh ? "选择城市行程" : "Choose a city itinerary"}
+          className="flex gap-2 overflow-x-auto rounded-lg border border-line bg-white p-2"
+        >
+          {cityItineraries.map((itinerary) => {
+            const city = CITY_LABELS[itinerary.cityId];
+            const isActive = itinerary.cityId === activeCityId;
+
+            return (
+              <button
+                key={itinerary.cityId}
+                type="button"
+                role="tab"
+                id={`plan-tab-${itinerary.cityId}`}
+                aria-selected={isActive}
+                aria-controls={`plan-panel-${itinerary.cityId}`}
+                onClick={() => setActiveCityId(itinerary.cityId)}
+                className={clsx(
+                  "min-w-28 rounded-md border px-4 py-2 text-left text-sm font-bold transition",
+                  isActive
+                    ? "border-ink bg-ink text-white"
+                    : "border-transparent bg-paper text-ink hover:border-jade hover:text-jade"
+                )}
+              >
+                <span className="block">{isZh ? city.zh : city.en}</span>
+                <span className={clsx("block text-[11px] font-normal", isActive ? "text-white/70" : "text-muted")}>
+                  {isZh ? city.en : city.zh}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <section
+          role="tabpanel"
+          id={`plan-panel-${activeItinerary.cityId}`}
+          aria-labelledby={`plan-tab-${activeItinerary.cityId}`}
+          className="flex flex-col gap-6"
+        >
+          <header className="flex flex-col gap-1">
+            <p className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "当前城市" : "Current city"}
+            </p>
+            <h2 className="text-2xl font-bold">{isZh ? activeCity.zh : activeCity.en}</h2>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted">
+              {isZh ? activeItinerary.subtitleZh : activeItinerary.subtitleEn}
+            </p>
+          </header>
+
+          <div className="flex flex-col gap-8">
+            {activeItinerary.days.map((day) => (
+              <section key={day.dayNumber} className="flex flex-col gap-3">
+                <div className="flex flex-col gap-1 border-b border-line pb-3">
+                  <span className="text-xs font-bold uppercase tracking-widest text-jade">
+                    {isZh ? `第 ${day.dayNumber} 天` : `Day ${day.dayNumber}`}
+                  </span>
+                  <h3 className="text-xl font-bold">{isZh ? day.themeZh : day.themeEn}</h3>
+                </div>
+                <div className="flex flex-col gap-3">
+                  {TIME_SLOTS.map((slot) => (
+                    <PlanActivityCard
+                      key={slot.key}
+                      cityId={activeItinerary.cityId}
+                      day={day}
+                      slot={slot}
+                      isZh={isZh}
+                    />
+                  ))}
+                </div>
+              </section>
+            ))}
+          </div>
+        </section>
+      </main>
+    </>
+  );
+}
+
+function PlanActivityCard({
+  cityId,
+  day,
+  slot,
+  isZh
+}: {
+  cityId: CityId;
+  day: ItineraryDay;
+  slot: { key: TimeSlotKey; labelEn: string; labelZh: string };
+  isZh: boolean;
+}) {
+  const activity = day[slot.key];
+
+  return (
+    <article className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
+      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
+        <div className="flex min-w-0 flex-col gap-1">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            {isZh ? slot.labelZh : slot.labelEn}
+          </span>
+          <h4 className="break-words text-lg font-bold leading-tight">
+            {isZh ? day.themeZh : day.themeEn}
+          </h4>
+        </div>
+        {activity.attractionId && (
+          <Link
+            to={`/city/${cityId}#intro`}
+            className="shrink-0 text-xs font-bold uppercase tracking-widest text-jade hover:underline"
+          >
+            {isZh ? "查看景点" : "Attraction"}
+          </Link>
+        )}
+      </div>
+
+      <p className="text-sm leading-relaxed text-ink/85">{isZh ? activity.zh : activity.en}</p>
+
+      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
+        <strong className="mr-1">{isZh ? "提示：" : "Tip:"}</strong>
+        {isZh ? day.travelTipZh : day.travelTipEn}
+      </div>
+    </article>
+  );
+}

codex
数据和页面已经落好；页面按城市 tab 切换，每个城市渲染 3 天、每天 3 张纵向时段卡，并把 daily tip 放进黄色提示框。接下来改路由和可发现入口。
2026-05-12T03:31:49.875127Z ERROR codex_core::tools::router: error=apply_patch verification failed: Failed to find expected lines in c:\Users\h\Documents\New project 2\v2\src\pages\HomePage.tsx:
const guideLinks = [
  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
];
diff --git a/v2/src/data/itineraries.ts b/v2/src/data/itineraries.ts
new file mode 100644
index 0000000000000000000000000000000000000000..3ef655ae3f22669342580f14288cb67f05c73171
--- /dev/null
+++ b/v2/src/data/itineraries.ts
@@ -0,0 +1,302 @@
+import type { CityId } from "./transport";
+
+export type ItineraryDay = {
+  dayNumber: 1 | 2 | 3;
+  themeEn: string;
+  themeZh: string;
+  morning: { en: string; zh: string; attractionId?: string };
+  afternoon: { en: string; zh: string; attractionId?: string };
+  evening: { en: string; zh: string; attractionId?: string };
+  travelTipEn: string;
+  travelTipZh: string;
+};
+
+export type CityItinerary = {
+  cityId: CityId;
+  subtitleEn: string;
+  subtitleZh: string;
+  days: ItineraryDay[];
+};
+
+export const cityItineraries: CityItinerary[] = [
+  {
+    cityId: "beijing",
+    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
+    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Imperial axis first",
+        themeZh: "先看皇城中轴线",
+        morning: {
+          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
+          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
+          attractionId: "bj-forbidden-city"
+        },
+        afternoon: {
+          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
+          zh: "午后转到天安门广场，预留安检和拍照时间。",
+          attractionId: "bj-tiananmen"
+        },
+        evening: {
+          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
+          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
+        },
+        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
+        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Temples, gardens, and hutongs",
+        themeZh: "寺庙、园林与胡同",
+        morning: {
+          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
+          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
+          attractionId: "bj-temple-of-heaven"
+        },
+        afternoon: {
+          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
+          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
+          attractionId: "bj-lama-temple"
+        },
+        evening: {
+          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
+          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
+        },
+        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
+        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Great Wall day with a soft landing",
+        themeZh: "长城一日与轻松收尾",
+        morning: {
+          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
+          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
+          attractionId: "bj-mutianyu"
+        },
+        afternoon: {
+          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
+          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
+          attractionId: "bj-summer-palace"
+        },
+        evening: {
+          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
+          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
+        },
+        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
+        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
+    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Old Shanghai to neon Shanghai",
+        themeZh: "从老上海到霓虹上海",
+        morning: {
+          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
+          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
+          attractionId: "sh-bund"
+        },
+        afternoon: {
+          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
+          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
+          attractionId: "sh-yu-garden"
+        },
+        evening: {
+          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
+          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
+        },
+        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
+        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Museums and plane-tree streets",
+        themeZh: "博物馆与梧桐街区",
+        morning: {
+          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
+          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
+          attractionId: "sh-museum"
+        },
+        afternoon: {
+          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
+          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
+          attractionId: "sh-wukang"
+        },
+        evening: {
+          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
+          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
+        },
+        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
+        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Pudong skyline and river contrast",
+        themeZh: "浦东天际线与江岸对照",
+        morning: {
+          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
+          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
+          attractionId: "sh-lujiazui"
+        },
+        afternoon: {
+          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
+          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
+          attractionId: "sh-shanghai-tower"
+        },
+        evening: {
+          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
+          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
+        },
+        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
+        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
+    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Lingnan craft and first skyline view",
+        themeZh: "岭南工艺与第一眼天际线",
+        morning: {
+          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
+          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
+          attractionId: "gz-chen-clan"
+        },
+        afternoon: {
+          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
+          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
+          attractionId: "gz-shamian"
+        },
+        evening: {
+          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
+          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
+          attractionId: "gz-canton-tower"
+        },
+        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
+        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Old city breakfast and civic landmarks",
+        themeZh: "老城早茶与城市地标",
+        morning: {
+          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
+          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
+          attractionId: "gz-yuexiu-park"
+        },
+        afternoon: {
+          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
+          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
+          attractionId: "gz-baiyun-mountain"
+        },
+        evening: {
+          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
+          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
+        },
+        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
+        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Markets, museums, and Pearl River night",
+        themeZh: "市场、博物馆与珠江夜色",
+        morning: {
+          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
+          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
+        },
+        afternoon: {
+          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
+          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
+        },
+        evening: {
+          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
+          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
+          attractionId: "gz-pearl-river"
+        },
+        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
+        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
+    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "OCT cluster and Shekou night",
+        themeZh: "华侨城组团与蛇口夜晚",
+        morning: {
+          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
+          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
+          attractionId: "sz-window-of-the-world"
+        },
+        afternoon: {
+          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
+          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
+          attractionId: "sz-octloft"
+        },
+        evening: {
+          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
+          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
+          attractionId: "sz-sea-world"
+        },
+        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
+        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Reform-era city views and beach air",
+        themeZh: "改革城市视角与海边空气",
+        morning: {
+          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
+          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
+          attractionId: "sz-lianhuashan"
+        },
+        afternoon: {
+          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
+          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
+          attractionId: "sz-dameisha"
+        },
+        evening: {
+          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
+          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
+        },
+        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
+        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Dapeng coast and historic village",
+        themeZh: "大鹏海岸与古城",
+        morning: {
+          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
+          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
+          attractionId: "sz-dapeng"
+        },
+        afternoon: {
+          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
+          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
+        },
+        evening: {
+          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
+          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
+        },
+        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
+        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
+      }
+    ]
+  }
+];
diff --git a/v2/src/pages/PlanPage.tsx b/v2/src/pages/PlanPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..0c28acdf91cad0fa901bf7c1574b7e262bfe34dc
--- /dev/null
+++ b/v2/src/pages/PlanPage.tsx
@@ -0,0 +1,176 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { cityItineraries, type ItineraryDay } from "../data/itineraries";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
+
+type TimeSlotKey = "morning" | "afternoon" | "evening";
+
+const TIME_SLOTS: Array<{ key: TimeSlotKey; labelEn: string; labelZh: string }> = [
+  { key: "morning", labelEn: "Morning", labelZh: "上午" },
+  { key: "afternoon", labelEn: "Afternoon", labelZh: "下午" },
+  { key: "evening", labelEn: "Evening", labelZh: "晚上" }
+];
+
+const planBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "3-day plan", path: "/plan" }
+]);
+
+export default function PlanPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeCityId, setActiveCityId] = useState<CityId>("beijing");
+  const activeItinerary = cityItineraries.find((itinerary) => itinerary.cityId === activeCityId) ?? cityItineraries[0];
+  const activeCity = CITY_LABELS[activeItinerary.cityId];
+
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(planBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-8 sm:py-10">
+        <header className="flex flex-col gap-3">
+          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+            {isZh ? "← 返回首页" : "← Home"}
+          </Link>
+          <div className="flex flex-col gap-2">
+            <span className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "Trip Planner" : "Trip Planner"}
+            </span>
+            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+              {isZh ? "3 天行程" : "3-day plan"}
+            </h1>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
+              {isZh
+                ? "四个入门城市各有一份三天模板：每天按上午、下午、晚上拆开，适合第一次来中国时快速落地。"
+                : "A practical three-day template for each first-time city, split into morning, afternoon, and evening blocks."}
+            </p>
+          </div>
+        </header>
+
+        <div
+          role="tablist"
+          aria-label={isZh ? "选择城市行程" : "Choose a city itinerary"}
+          className="flex gap-2 overflow-x-auto rounded-lg border border-line bg-white p-2"
+        >
+          {cityItineraries.map((itinerary) => {
+            const city = CITY_LABELS[itinerary.cityId];
+            const isActive = itinerary.cityId === activeCityId;
+
+            return (
+              <button
+                key={itinerary.cityId}
+                type="button"
+                role="tab"
+                id={`plan-tab-${itinerary.cityId}`}
+                aria-selected={isActive}
+                aria-controls={`plan-panel-${itinerary.cityId}`}
+                onClick={() => setActiveCityId(itinerary.cityId)}
+                className={clsx(
+                  "min-w-28 rounded-md border px-4 py-2 text-left text-sm font-bold transition",
+                  isActive
+                    ? "border-ink bg-ink text-white"
+                    : "border-transparent bg-paper text-ink hover:border-jade hover:text-jade"
+                )}
+              >
+                <span className="block">{isZh ? city.zh : city.en}</span>
+                <span className={clsx("block text-[11px] font-normal", isActive ? "text-white/70" : "text-muted")}>
+                  {isZh ? city.en : city.zh}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <section
+          role="tabpanel"
+          id={`plan-panel-${activeItinerary.cityId}`}
+          aria-labelledby={`plan-tab-${activeItinerary.cityId}`}
+          className="flex flex-col gap-6"
+        >
+          <header className="flex flex-col gap-1">
+            <p className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "当前城市" : "Current city"}
+            </p>
+            <h2 className="text-2xl font-bold">{isZh ? activeCity.zh : activeCity.en}</h2>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted">
+              {isZh ? activeItinerary.subtitleZh : activeItinerary.subtitleEn}
+            </p>
+          </header>
+
+          <div className="flex flex-col gap-8">
+            {activeItinerary.days.map((day) => (
+              <section key={day.dayNumber} className="flex flex-col gap-3">
+                <div className="flex flex-col gap-1 border-b border-line pb-3">
+                  <span className="text-xs font-bold uppercase tracking-widest text-jade">
+                    {isZh ? `第 ${day.dayNumber} 天` : `Day ${day.dayNumber}`}
+                  </span>
+                  <h3 className="text-xl font-bold">{isZh ? day.themeZh : day.themeEn}</h3>
+                </div>
+                <div className="flex flex-col gap-3">
+                  {TIME_SLOTS.map((slot) => (
+                    <PlanActivityCard
+                      key={slot.key}
+                      cityId={activeItinerary.cityId}
+                      day={day}
+                      slot={slot}
+                      isZh={isZh}
+                    />
+                  ))}
+                </div>
+              </section>
+            ))}
+          </div>
+        </section>
+      </main>
+    </>
+  );
+}
+
+function PlanActivityCard({
+  cityId,
+  day,
+  slot,
+  isZh
+}: {
+  cityId: CityId;
+  day: ItineraryDay;
+  slot: { key: TimeSlotKey; labelEn: string; labelZh: string };
+  isZh: boolean;
+}) {
+  const activity = day[slot.key];
+
+  return (
+    <article className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
+      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
+        <div className="flex min-w-0 flex-col gap-1">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            {isZh ? slot.labelZh : slot.labelEn}
+          </span>
+          <h4 className="break-words text-lg font-bold leading-tight">
+            {isZh ? day.themeZh : day.themeEn}
+          </h4>
+        </div>
+        {activity.attractionId && (
+          <Link
+            to={`/city/${cityId}#intro`}
+            className="shrink-0 text-xs font-bold uppercase tracking-widest text-jade hover:underline"
+          >
+            {isZh ? "查看景点" : "Attraction"}
+          </Link>
+        )}
+      </div>
+
+      <p className="text-sm leading-relaxed text-ink/85">{isZh ? activity.zh : activity.en}</p>
+
+      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
+        <strong className="mr-1">{isZh ? "提示：" : "Tip:"}</strong>
+        {isZh ? day.travelTipZh : day.travelTipEn}
+      </div>
+    </article>
+  );
+}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding UTF8 src\\routes.ts" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Encoding UTF8 react-router.config.ts' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding UTF8 public\\sitemap.xml" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding UTF8 src\\pages\\HomePage.tsx | Select-Object -First 30" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding UTF8 src\\App.tsx | Select-Object -First 35" in c:\Users\h\Documents\New project 2\v2
 succeeded in 522ms:
import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  appDirectory: "src",
  async prerender() {
    return [
      "/",
      "/map",
      "/phrasebook",
      "/guide/entry",
      "/guide/payments",
      "/guide/notes",
      "/share",
      "/ask",
      "/sources",
      "/city/beijing",
      "/city/shanghai",
      "/city/guangzhou",
      "/city/shenzhen"
    ];
  }
} satisfies Config;

 succeeded in 534ms:
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./pages/HomePage.tsx"),
  route("map", "./pages/MapPage.tsx"),
  route("phrasebook", "./pages/PhrasebookPage.tsx"),
  route("guide/:topic", "./pages/GuidePage.tsx"),
  route("city/:cityId", "./pages/CityPage.tsx"),
  route("share", "./pages/SharePage.tsx"),
  route("ask", "./pages/AskPage.tsx"),
  route("sources", "./pages/SourcesPage.tsx"),
  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
] satisfies RouteConfig;

 succeeded in 511ms:
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://travel-china.example.com/</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/map</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/phrasebook</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/guide/entry</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/guide/payments</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/guide/notes</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/share</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/ask</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/sources</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/city/beijing</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/city/shanghai</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/city/guangzhou</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
  <url>
    <loc>https://travel-china.example.com/city/shenzhen</loc>
    <lastmod>2026-05-12</lastmod>
  </url>
</urlset>

 succeeded in 665ms:
import { Link } from "react-router";
import MapPreview from "../components/map/MapPreview";
import { attractionsByCity, type Attraction } from "../data/city-attractions";
import { CITY_LABELS, type CityId } from "../data/transport";
import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
import { unsplashSrcSet } from "../lib/unsplash";
import { useLang } from "../store/language";

const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];

const guideLinks = [
  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
  { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
];

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: [
    { "@language": "en", "@value": "Travel China" },
    { "@language": "zh-CN", "@value": "旅行中国" }
  ],
  url: absoluteUrl("/"),
  inLanguage: ["en", "zh-CN"],
  description: [
    {
      "@language": "en",
      "@value":

 succeeded in 503ms:
import { BrowserRouter, Route, Routes } from "react-router";
import LanguageProvider from "./store/LanguageProvider";
import AtlasProvider from "./store/AtlasProvider";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import HomePage from "./pages/HomePage";
import CityPage from "./pages/CityPage";
import GuidePage from "./pages/GuidePage";
import MapPage from "./pages/MapPage";
import SharePage from "./pages/SharePage";
import AskPage from "./pages/AskPage";
import SourcesPage from "./pages/SourcesPage";

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AtlasProvider>
          <SiteHeader />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/guide/:topic" element={<GuidePage />} />
            <Route path="/city/:cityId" element={<CityPage />} />
            <Route path="/share" element={<SharePage />} />
            <Route path="/ask" element={<AskPage />} />
            <Route path="/sources" element={<SourcesPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <SiteFooter />
        </AtlasProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

diff --git a/v2/src/data/itineraries.ts b/v2/src/data/itineraries.ts
new file mode 100644
index 0000000000000000000000000000000000000000..3ef655ae3f22669342580f14288cb67f05c73171
--- /dev/null
+++ b/v2/src/data/itineraries.ts
@@ -0,0 +1,302 @@
+import type { CityId } from "./transport";
+
+export type ItineraryDay = {
+  dayNumber: 1 | 2 | 3;
+  themeEn: string;
+  themeZh: string;
+  morning: { en: string; zh: string; attractionId?: string };
+  afternoon: { en: string; zh: string; attractionId?: string };
+  evening: { en: string; zh: string; attractionId?: string };
+  travelTipEn: string;
+  travelTipZh: string;
+};
+
+export type CityItinerary = {
+  cityId: CityId;
+  subtitleEn: string;
+  subtitleZh: string;
+  days: ItineraryDay[];
+};
+
+export const cityItineraries: CityItinerary[] = [
+  {
+    cityId: "beijing",
+    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
+    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Imperial axis first",
+        themeZh: "先看皇城中轴线",
+        morning: {
+          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
+          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
+          attractionId: "bj-forbidden-city"
+        },
+        afternoon: {
+          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
+          zh: "午后转到天安门广场，预留安检和拍照时间。",
+          attractionId: "bj-tiananmen"
+        },
+        evening: {
+          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
+          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
+        },
+        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
+        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Temples, gardens, and hutongs",
+        themeZh: "寺庙、园林与胡同",
+        morning: {
+          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
+          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
+          attractionId: "bj-temple-of-heaven"
+        },
+        afternoon: {
+          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
+          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
+          attractionId: "bj-lama-temple"
+        },
+        evening: {
+          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
+          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
+        },
+        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
+        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Great Wall day with a soft landing",
+        themeZh: "长城一日与轻松收尾",
+        morning: {
+          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
+          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
+          attractionId: "bj-mutianyu"
+        },
+        afternoon: {
+          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
+          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
+          attractionId: "bj-summer-palace"
+        },
+        evening: {
+          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
+          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
+        },
+        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
+        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
+    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Old Shanghai to neon Shanghai",
+        themeZh: "从老上海到霓虹上海",
+        morning: {
+          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
+          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
+          attractionId: "sh-bund"
+        },
+        afternoon: {
+          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
+          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
+          attractionId: "sh-yu-garden"
+        },
+        evening: {
+          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
+          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
+        },
+        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
+        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Museums and plane-tree streets",
+        themeZh: "博物馆与梧桐街区",
+        morning: {
+          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
+          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
+          attractionId: "sh-museum"
+        },
+        afternoon: {
+          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
+          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
+          attractionId: "sh-wukang"
+        },
+        evening: {
+          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
+          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
+        },
+        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
+        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Pudong skyline and river contrast",
+        themeZh: "浦东天际线与江岸对照",
+        morning: {
+          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
+          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
+          attractionId: "sh-lujiazui"
+        },
+        afternoon: {
+          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
+          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
+          attractionId: "sh-shanghai-tower"
+        },
+        evening: {
+          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
+          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
+        },
+        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
+        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
+    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Lingnan craft and first skyline view",
+        themeZh: "岭南工艺与第一眼天际线",
+        morning: {
+          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
+          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
+          attractionId: "gz-chen-clan"
+        },
+        afternoon: {
+          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
+          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
+          attractionId: "gz-shamian"
+        },
+        evening: {
+          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
+          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
+          attractionId: "gz-canton-tower"
+        },
+        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
+        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Old city breakfast and civic landmarks",
+        themeZh: "老城早茶与城市地标",
+        morning: {
+          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
+          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
+          attractionId: "gz-yuexiu-park"
+        },
+        afternoon: {
+          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
+          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
+          attractionId: "gz-baiyun-mountain"
+        },
+        evening: {
+          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
+          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
+        },
+        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
+        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Markets, museums, and Pearl River night",
+        themeZh: "市场、博物馆与珠江夜色",
+        morning: {
+          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
+          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
+        },
+        afternoon: {
+          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
+          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
+        },
+        evening: {
+          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
+          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
+          attractionId: "gz-pearl-river"
+        },
+        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
+        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
+    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "OCT cluster and Shekou night",
+        themeZh: "华侨城组团与蛇口夜晚",
+        morning: {
+          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
+          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
+          attractionId: "sz-window-of-the-world"
+        },
+        afternoon: {
+          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
+          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
+          attractionId: "sz-octloft"
+        },
+        evening: {
+          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
+          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
+          attractionId: "sz-sea-world"
+        },
+        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
+        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Reform-era city views and beach air",
+        themeZh: "改革城市视角与海边空气",
+        morning: {
+          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
+          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
+          attractionId: "sz-lianhuashan"
+        },
+        afternoon: {
+          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
+          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
+          attractionId: "sz-dameisha"
+        },
+        evening: {
+          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
+          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
+        },
+        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
+        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Dapeng coast and historic village",
+        themeZh: "大鹏海岸与古城",
+        morning: {
+          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
+          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
+          attractionId: "sz-dapeng"
+        },
+        afternoon: {
+          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
+          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
+        },
+        evening: {
+          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
+          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
+        },
+        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
+        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
+      }
+    ]
+  }
+];
diff --git a/v2/src/pages/PlanPage.tsx b/v2/src/pages/PlanPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..0c28acdf91cad0fa901bf7c1574b7e262bfe34dc
--- /dev/null
+++ b/v2/src/pages/PlanPage.tsx
@@ -0,0 +1,176 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { cityItineraries, type ItineraryDay } from "../data/itineraries";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
+
+type TimeSlotKey = "morning" | "afternoon" | "evening";
+
+const TIME_SLOTS: Array<{ key: TimeSlotKey; labelEn: string; labelZh: string }> = [
+  { key: "morning", labelEn: "Morning", labelZh: "上午" },
+  { key: "afternoon", labelEn: "Afternoon", labelZh: "下午" },
+  { key: "evening", labelEn: "Evening", labelZh: "晚上" }
+];
+
+const planBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "3-day plan", path: "/plan" }
+]);
+
+export default function PlanPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeCityId, setActiveCityId] = useState<CityId>("beijing");
+  const activeItinerary = cityItineraries.find((itinerary) => itinerary.cityId === activeCityId) ?? cityItineraries[0];
+  const activeCity = CITY_LABELS[activeItinerary.cityId];
+
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(planBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-8 sm:py-10">
+        <header className="flex flex-col gap-3">
+          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+            {isZh ? "← 返回首页" : "← Home"}
+          </Link>
+          <div className="flex flex-col gap-2">
+            <span className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "Trip Planner" : "Trip Planner"}
+            </span>
+            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+              {isZh ? "3 天行程" : "3-day plan"}
+            </h1>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
+              {isZh
+                ? "四个入门城市各有一份三天模板：每天按上午、下午、晚上拆开，适合第一次来中国时快速落地。"
+                : "A practical three-day template for each first-time city, split into morning, afternoon, and evening blocks."}
+            </p>
+          </div>
+        </header>
+
+        <div
+          role="tablist"
+          aria-label={isZh ? "选择城市行程" : "Choose a city itinerary"}
+          className="flex gap-2 overflow-x-auto rounded-lg border border-line bg-white p-2"
+        >
+          {cityItineraries.map((itinerary) => {
+            const city = CITY_LABELS[itinerary.cityId];
+            const isActive = itinerary.cityId === activeCityId;
+
+            return (
+              <button
+                key={itinerary.cityId}
+                type="button"
+                role="tab"
+                id={`plan-tab-${itinerary.cityId}`}
+                aria-selected={isActive}
+                aria-controls={`plan-panel-${itinerary.cityId}`}
+                onClick={() => setActiveCityId(itinerary.cityId)}
+                className={clsx(
+                  "min-w-28 rounded-md border px-4 py-2 text-left text-sm font-bold transition",
+                  isActive
+                    ? "border-ink bg-ink text-white"
+                    : "border-transparent bg-paper text-ink hover:border-jade hover:text-jade"
+                )}
+              >
+                <span className="block">{isZh ? city.zh : city.en}</span>
+                <span className={clsx("block text-[11px] font-normal", isActive ? "text-white/70" : "text-muted")}>
+                  {isZh ? city.en : city.zh}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <section
+          role="tabpanel"
+          id={`plan-panel-${activeItinerary.cityId}`}
+          aria-labelledby={`plan-tab-${activeItinerary.cityId}`}
+          className="flex flex-col gap-6"
+        >
+          <header className="flex flex-col gap-1">
+            <p className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "当前城市" : "Current city"}
+            </p>
+            <h2 className="text-2xl font-bold">{isZh ? activeCity.zh : activeCity.en}</h2>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted">
+              {isZh ? activeItinerary.subtitleZh : activeItinerary.subtitleEn}
+            </p>
+          </header>
+
+          <div className="flex flex-col gap-8">
+            {activeItinerary.days.map((day) => (
+              <section key={day.dayNumber} className="flex flex-col gap-3">
+                <div className="flex flex-col gap-1 border-b border-line pb-3">
+                  <span className="text-xs font-bold uppercase tracking-widest text-jade">
+                    {isZh ? `第 ${day.dayNumber} 天` : `Day ${day.dayNumber}`}
+                  </span>
+                  <h3 className="text-xl font-bold">{isZh ? day.themeZh : day.themeEn}</h3>
+                </div>
+                <div className="flex flex-col gap-3">
+                  {TIME_SLOTS.map((slot) => (
+                    <PlanActivityCard
+                      key={slot.key}
+                      cityId={activeItinerary.cityId}
+                      day={day}
+                      slot={slot}
+                      isZh={isZh}
+                    />
+                  ))}
+                </div>
+              </section>
+            ))}
+          </div>
+        </section>
+      </main>
+    </>
+  );
+}
+
+function PlanActivityCard({
+  cityId,
+  day,
+  slot,
+  isZh
+}: {
+  cityId: CityId;
+  day: ItineraryDay;
+  slot: { key: TimeSlotKey; labelEn: string; labelZh: string };
+  isZh: boolean;
+}) {
+  const activity = day[slot.key];
+
+  return (
+    <article className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
+      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
+        <div className="flex min-w-0 flex-col gap-1">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            {isZh ? slot.labelZh : slot.labelEn}
+          </span>
+          <h4 className="break-words text-lg font-bold leading-tight">
+            {isZh ? day.themeZh : day.themeEn}
+          </h4>
+        </div>
+        {activity.attractionId && (
+          <Link
+            to={`/city/${cityId}#intro`}
+            className="shrink-0 text-xs font-bold uppercase tracking-widest text-jade hover:underline"
+          >
+            {isZh ? "查看景点" : "Attraction"}
+          </Link>
+        )}
+      </div>
+
+      <p className="text-sm leading-relaxed text-ink/85">{isZh ? activity.zh : activity.en}</p>
+
+      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
+        <strong className="mr-1">{isZh ? "提示：" : "Tip:"}</strong>
+        {isZh ? day.travelTipZh : day.travelTipEn}
+      </div>
+    </article>
+  );
+}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding UTF8 src\\pages\\HomePage.tsx | Select-String 'Travel guide links|grid gap-3' -Context 0,2" in c:\Users\h\Documents\New project 2\v2
 succeeded in 457ms:

>       <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-
4">
          {guideLinks.map((item) => (
            <Link



diff --git a/v2/src/data/itineraries.ts b/v2/src/data/itineraries.ts
new file mode 100644
index 0000000000000000000000000000000000000000..3ef655ae3f22669342580f14288cb67f05c73171
--- /dev/null
+++ b/v2/src/data/itineraries.ts
@@ -0,0 +1,302 @@
+import type { CityId } from "./transport";
+
+export type ItineraryDay = {
+  dayNumber: 1 | 2 | 3;
+  themeEn: string;
+  themeZh: string;
+  morning: { en: string; zh: string; attractionId?: string };
+  afternoon: { en: string; zh: string; attractionId?: string };
+  evening: { en: string; zh: string; attractionId?: string };
+  travelTipEn: string;
+  travelTipZh: string;
+};
+
+export type CityItinerary = {
+  cityId: CityId;
+  subtitleEn: string;
+  subtitleZh: string;
+  days: ItineraryDay[];
+};
+
+export const cityItineraries: CityItinerary[] = [
+  {
+    cityId: "beijing",
+    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
+    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Imperial axis first",
+        themeZh: "先看皇城中轴线",
+        morning: {
+          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
+          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
+          attractionId: "bj-forbidden-city"
+        },
+        afternoon: {
+          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
+          zh: "午后转到天安门广场，预留安检和拍照时间。",
+          attractionId: "bj-tiananmen"
+        },
+        evening: {
+          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
+          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
+        },
+        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
+        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Temples, gardens, and hutongs",
+        themeZh: "寺庙、园林与胡同",
+        morning: {
+          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
+          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
+          attractionId: "bj-temple-of-heaven"
+        },
+        afternoon: {
+          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
+          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
+          attractionId: "bj-lama-temple"
+        },
+        evening: {
+          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
+          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
+        },
+        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
+        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Great Wall day with a soft landing",
+        themeZh: "长城一日与轻松收尾",
+        morning: {
+          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
+          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
+          attractionId: "bj-mutianyu"
+        },
+        afternoon: {
+          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
+          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
+          attractionId: "bj-summer-palace"
+        },
+        evening: {
+          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
+          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
+        },
+        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
+        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
+    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Old Shanghai to neon Shanghai",
+        themeZh: "从老上海到霓虹上海",
+        morning: {
+          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
+          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
+          attractionId: "sh-bund"
+        },
+        afternoon: {
+          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
+          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
+          attractionId: "sh-yu-garden"
+        },
+        evening: {
+          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
+          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
+        },
+        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
+        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Museums and plane-tree streets",
+        themeZh: "博物馆与梧桐街区",
+        morning: {
+          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
+          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
+          attractionId: "sh-museum"
+        },
+        afternoon: {
+          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
+          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
+          attractionId: "sh-wukang"
+        },
+        evening: {
+          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
+          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
+        },
+        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
+        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Pudong skyline and river contrast",
+        themeZh: "浦东天际线与江岸对照",
+        morning: {
+          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
+          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
+          attractionId: "sh-lujiazui"
+        },
+        afternoon: {
+          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
+          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
+          attractionId: "sh-shanghai-tower"
+        },
+        evening: {
+          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
+          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
+        },
+        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
+        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
+    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Lingnan craft and first skyline view",
+        themeZh: "岭南工艺与第一眼天际线",
+        morning: {
+          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
+          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
+          attractionId: "gz-chen-clan"
+        },
+        afternoon: {
+          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
+          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
+          attractionId: "gz-shamian"
+        },
+        evening: {
+          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
+          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
+          attractionId: "gz-canton-tower"
+        },
+        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
+        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Old city breakfast and civic landmarks",
+        themeZh: "老城早茶与城市地标",
+        morning: {
+          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
+          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
+          attractionId: "gz-yuexiu-park"
+        },
+        afternoon: {
+          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
+          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
+          attractionId: "gz-baiyun-mountain"
+        },
+        evening: {
+          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
+          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
+        },
+        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
+        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Markets, museums, and Pearl River night",
+        themeZh: "市场、博物馆与珠江夜色",
+        morning: {
+          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
+          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
+        },
+        afternoon: {
+          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
+          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
+        },
+        evening: {
+          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
+          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
+          attractionId: "gz-pearl-river"
+        },
+        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
+        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
+    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "OCT cluster and Shekou night",
+        themeZh: "华侨城组团与蛇口夜晚",
+        morning: {
+          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
+          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
+          attractionId: "sz-window-of-the-world"
+        },
+        afternoon: {
+          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
+          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
+          attractionId: "sz-octloft"
+        },
+        evening: {
+          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
+          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
+          attractionId: "sz-sea-world"
+        },
+        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
+        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Reform-era city views and beach air",
+        themeZh: "改革城市视角与海边空气",
+        morning: {
+          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
+          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
+          attractionId: "sz-lianhuashan"
+        },
+        afternoon: {
+          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
+          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
+          attractionId: "sz-dameisha"
+        },
+        evening: {
+          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
+          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
+        },
+        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
+        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Dapeng coast and historic village",
+        themeZh: "大鹏海岸与古城",
+        morning: {
+          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
+          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
+          attractionId: "sz-dapeng"
+        },
+        afternoon: {
+          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
+          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
+        },
+        evening: {
+          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
+          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
+        },
+        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
+        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
+      }
+    ]
+  }
+];
diff --git a/v2/src/pages/PlanPage.tsx b/v2/src/pages/PlanPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..0c28acdf91cad0fa901bf7c1574b7e262bfe34dc
--- /dev/null
+++ b/v2/src/pages/PlanPage.tsx
@@ -0,0 +1,176 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { cityItineraries, type ItineraryDay } from "../data/itineraries";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
+
+type TimeSlotKey = "morning" | "afternoon" | "evening";
+
+const TIME_SLOTS: Array<{ key: TimeSlotKey; labelEn: string; labelZh: string }> = [
+  { key: "morning", labelEn: "Morning", labelZh: "上午" },
+  { key: "afternoon", labelEn: "Afternoon", labelZh: "下午" },
+  { key: "evening", labelEn: "Evening", labelZh: "晚上" }
+];
+
+const planBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "3-day plan", path: "/plan" }
+]);
+
+export default function PlanPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeCityId, setActiveCityId] = useState<CityId>("beijing");
+  const activeItinerary = cityItineraries.find((itinerary) => itinerary.cityId === activeCityId) ?? cityItineraries[0];
+  const activeCity = CITY_LABELS[activeItinerary.cityId];
+
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(planBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-8 sm:py-10">
+        <header className="flex flex-col gap-3">
+          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+            {isZh ? "← 返回首页" : "← Home"}
+          </Link>
+          <div className="flex flex-col gap-2">
+            <span className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "Trip Planner" : "Trip Planner"}
+            </span>
+            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+              {isZh ? "3 天行程" : "3-day plan"}
+            </h1>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
+              {isZh
+                ? "四个入门城市各有一份三天模板：每天按上午、下午、晚上拆开，适合第一次来中国时快速落地。"
+                : "A practical three-day template for each first-time city, split into morning, afternoon, and evening blocks."}
+            </p>
+          </div>
+        </header>
+
+        <div
+          role="tablist"
+          aria-label={isZh ? "选择城市行程" : "Choose a city itinerary"}
+          className="flex gap-2 overflow-x-auto rounded-lg border border-line bg-white p-2"
+        >
+          {cityItineraries.map((itinerary) => {
+            const city = CITY_LABELS[itinerary.cityId];
+            const isActive = itinerary.cityId === activeCityId;
+
+            return (
+              <button
+                key={itinerary.cityId}
+                type="button"
+                role="tab"
+                id={`plan-tab-${itinerary.cityId}`}
+                aria-selected={isActive}
+                aria-controls={`plan-panel-${itinerary.cityId}`}
+                onClick={() => setActiveCityId(itinerary.cityId)}
+                className={clsx(
+                  "min-w-28 rounded-md border px-4 py-2 text-left text-sm font-bold transition",
+                  isActive
+                    ? "border-ink bg-ink text-white"
+                    : "border-transparent bg-paper text-ink hover:border-jade hover:text-jade"
+                )}
+              >
+                <span className="block">{isZh ? city.zh : city.en}</span>
+                <span className={clsx("block text-[11px] font-normal", isActive ? "text-white/70" : "text-muted")}>
+                  {isZh ? city.en : city.zh}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <section
+          role="tabpanel"
+          id={`plan-panel-${activeItinerary.cityId}`}
+          aria-labelledby={`plan-tab-${activeItinerary.cityId}`}
+          className="flex flex-col gap-6"
+        >
+          <header className="flex flex-col gap-1">
+            <p className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "当前城市" : "Current city"}
+            </p>
+            <h2 className="text-2xl font-bold">{isZh ? activeCity.zh : activeCity.en}</h2>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted">
+              {isZh ? activeItinerary.subtitleZh : activeItinerary.subtitleEn}
+            </p>
+          </header>
+
+          <div className="flex flex-col gap-8">
+            {activeItinerary.days.map((day) => (
+              <section key={day.dayNumber} className="flex flex-col gap-3">
+                <div className="flex flex-col gap-1 border-b border-line pb-3">
+                  <span className="text-xs font-bold uppercase tracking-widest text-jade">
+                    {isZh ? `第 ${day.dayNumber} 天` : `Day ${day.dayNumber}`}
+                  </span>
+                  <h3 className="text-xl font-bold">{isZh ? day.themeZh : day.themeEn}</h3>
+                </div>
+                <div className="flex flex-col gap-3">
+                  {TIME_SLOTS.map((slot) => (
+                    <PlanActivityCard
+                      key={slot.key}
+                      cityId={activeItinerary.cityId}
+                      day={day}
+                      slot={slot}
+                      isZh={isZh}
+                    />
+                  ))}
+                </div>
+              </section>
+            ))}
+          </div>
+        </section>
+      </main>
+    </>
+  );
+}
+
+function PlanActivityCard({
+  cityId,
+  day,
+  slot,
+  isZh
+}: {
+  cityId: CityId;
+  day: ItineraryDay;
+  slot: { key: TimeSlotKey; labelEn: string; labelZh: string };
+  isZh: boolean;
+}) {
+  const activity = day[slot.key];
+
+  return (
+    <article className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
+      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
+        <div className="flex min-w-0 flex-col gap-1">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            {isZh ? slot.labelZh : slot.labelEn}
+          </span>
+          <h4 className="break-words text-lg font-bold leading-tight">
+            {isZh ? day.themeZh : day.themeEn}
+          </h4>
+        </div>
+        {activity.attractionId && (
+          <Link
+            to={`/city/${cityId}#intro`}
+            className="shrink-0 text-xs font-bold uppercase tracking-widest text-jade hover:underline"
+          >
+            {isZh ? "查看景点" : "Attraction"}
+          </Link>
+        )}
+      </div>
+
+      <p className="text-sm leading-relaxed text-ink/85">{isZh ? activity.zh : activity.en}</p>
+
+      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
+        <strong className="mr-1">{isZh ? "提示：" : "Tip:"}</strong>
+        {isZh ? day.travelTipZh : day.travelTipEn}
+      </div>
+    </article>
+  );
+}

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\public\sitemap.xml
c:\Users\h\Documents\New project 2\v2\react-router.config.ts
c:\Users\h\Documents\New project 2\v2\src\App.tsx
c:\Users\h\Documents\New project 2\v2\src\pages\HomePage.tsx
c:\Users\h\Documents\New project 2\v2\src\routes.ts
diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index adfcabaa94592bf2c136f0a522a2a633d6e892bf..01ba965ae5de7e27b97c51317ba2afce181c984c
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -25,6 +25,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/plan</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/share</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 0be050a497672fd006dcf773952ba991e41cd9e4..9ccc216dce515307f4c067703ced3257a98dc3db
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -11,6 +11,7 @@
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
+      "/plan",
       "/share",
       "/ask",
       "/sources",
diff --git a/v2/src/App.tsx b/v2/src/App.tsx
index 69ed13e175cd85b0a160c8713b63a2cb970e5b5b..c00e5fddf321e2d1fe4289cef4c9ebcaae02cccd
--- a/v2/src/App.tsx
+++ b/v2/src/App.tsx
@@ -4,9 +4,10 @@
 import SiteHeader from "./components/layout/SiteHeader";
 import SiteFooter from "./components/layout/SiteFooter";
 import HomePage from "./pages/HomePage";
-import CityPage from "./pages/CityPage";
-import GuidePage from "./pages/GuidePage";
-import MapPage from "./pages/MapPage";
+import CityPage from "./pages/CityPage";
+import GuidePage from "./pages/GuidePage";
+import PlanPage from "./pages/PlanPage";
+import MapPage from "./pages/MapPage";
 import SharePage from "./pages/SharePage";
 import AskPage from "./pages/AskPage";
 import SourcesPage from "./pages/SourcesPage";
@@ -19,9 +20,10 @@
           <SiteHeader />
           <Routes>
             <Route path="/" element={<HomePage />} />
-            <Route path="/map" element={<MapPage />} />
-            <Route path="/guide/:topic" element={<GuidePage />} />
-            <Route path="/city/:cityId" element={<CityPage />} />
+            <Route path="/map" element={<MapPage />} />
+            <Route path="/guide/:topic" element={<GuidePage />} />
+            <Route path="/plan" element={<PlanPage />} />
+            <Route path="/city/:cityId" element={<CityPage />} />
             <Route path="/share" element={<SharePage />} />
             <Route path="/ask" element={<AskPage />} />
             <Route path="/sources" element={<SourcesPage />} />
diff --git a/v2/src/data/itineraries.ts b/v2/src/data/itineraries.ts
new file mode 100644
index 0000000000000000000000000000000000000000..3ef655ae3f22669342580f14288cb67f05c73171
--- /dev/null
+++ b/v2/src/data/itineraries.ts
@@ -0,0 +1,302 @@
+import type { CityId } from "./transport";
+
+export type ItineraryDay = {
+  dayNumber: 1 | 2 | 3;
+  themeEn: string;
+  themeZh: string;
+  morning: { en: string; zh: string; attractionId?: string };
+  afternoon: { en: string; zh: string; attractionId?: string };
+  evening: { en: string; zh: string; attractionId?: string };
+  travelTipEn: string;
+  travelTipZh: string;
+};
+
+export type CityItinerary = {
+  cityId: CityId;
+  subtitleEn: string;
+  subtitleZh: string;
+  days: ItineraryDay[];
+};
+
+export const cityItineraries: CityItinerary[] = [
+  {
+    cityId: "beijing",
+    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
+    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Imperial axis first",
+        themeZh: "先看皇城中轴线",
+        morning: {
+          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
+          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
+          attractionId: "bj-forbidden-city"
+        },
+        afternoon: {
+          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
+          zh: "午后转到天安门广场，预留安检和拍照时间。",
+          attractionId: "bj-tiananmen"
+        },
+        evening: {
+          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
+          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
+        },
+        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
+        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Temples, gardens, and hutongs",
+        themeZh: "寺庙、园林与胡同",
+        morning: {
+          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
+          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
+          attractionId: "bj-temple-of-heaven"
+        },
+        afternoon: {
+          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
+          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
+          attractionId: "bj-lama-temple"
+        },
+        evening: {
+          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
+          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
+        },
+        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
+        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Great Wall day with a soft landing",
+        themeZh: "长城一日与轻松收尾",
+        morning: {
+          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
+          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
+          attractionId: "bj-mutianyu"
+        },
+        afternoon: {
+          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
+          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
+          attractionId: "bj-summer-palace"
+        },
+        evening: {
+          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
+          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
+        },
+        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
+        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
+    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Old Shanghai to neon Shanghai",
+        themeZh: "从老上海到霓虹上海",
+        morning: {
+          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
+          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
+          attractionId: "sh-bund"
+        },
+        afternoon: {
+          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
+          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
+          attractionId: "sh-yu-garden"
+        },
+        evening: {
+          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
+          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
+        },
+        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
+        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Museums and plane-tree streets",
+        themeZh: "博物馆与梧桐街区",
+        morning: {
+          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
+          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
+          attractionId: "sh-museum"
+        },
+        afternoon: {
+          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
+          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
+          attractionId: "sh-wukang"
+        },
+        evening: {
+          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
+          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
+        },
+        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
+        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Pudong skyline and river contrast",
+        themeZh: "浦东天际线与江岸对照",
+        morning: {
+          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
+          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
+          attractionId: "sh-lujiazui"
+        },
+        afternoon: {
+          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
+          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
+          attractionId: "sh-shanghai-tower"
+        },
+        evening: {
+          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
+          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
+        },
+        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
+        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
+    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Lingnan craft and first skyline view",
+        themeZh: "岭南工艺与第一眼天际线",
+        morning: {
+          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
+          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
+          attractionId: "gz-chen-clan"
+        },
+        afternoon: {
+          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
+          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
+          attractionId: "gz-shamian"
+        },
+        evening: {
+          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
+          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
+          attractionId: "gz-canton-tower"
+        },
+        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
+        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Old city breakfast and civic landmarks",
+        themeZh: "老城早茶与城市地标",
+        morning: {
+          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
+          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
+          attractionId: "gz-yuexiu-park"
+        },
+        afternoon: {
+          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
+          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
+          attractionId: "gz-baiyun-mountain"
+        },
+        evening: {
+          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
+          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
+        },
+        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
+        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Markets, museums, and Pearl River night",
+        themeZh: "市场、博物馆与珠江夜色",
+        morning: {
+          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
+          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
+        },
+        afternoon: {
+          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
+          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
+        },
+        evening: {
+          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
+          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
+          attractionId: "gz-pearl-river"
+        },
+        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
+        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
+    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "OCT cluster and Shekou night",
+        themeZh: "华侨城组团与蛇口夜晚",
+        morning: {
+          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
+          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
+          attractionId: "sz-window-of-the-world"
+        },
+        afternoon: {
+          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
+          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
+          attractionId: "sz-octloft"
+        },
+        evening: {
+          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
+          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
+          attractionId: "sz-sea-world"
+        },
+        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
+        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Reform-era city views and beach air",
+        themeZh: "改革城市视角与海边空气",
+        morning: {
+          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
+          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
+          attractionId: "sz-lianhuashan"
+        },
+        afternoon: {
+          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
+          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
+          attractionId: "sz-dameisha"
+        },
+        evening: {
+          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
+          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
+        },
+        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
+        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Dapeng coast and historic village",
+        themeZh: "大鹏海岸与古城",
+        morning: {
+          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
+          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
+          attractionId: "sz-dapeng"
+        },
+        afternoon: {
+          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
+          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
+        },
+        evening: {
+          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
+          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
+        },
+        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
+        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
+      }
+    ]
+  }
+];
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 36d357304a97629e5ccc913861cdd7243596c527..d60efc774498ca2404260eed90705a9bfbe64b69
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -11,6 +11,7 @@
 const guideLinks = [
   { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
   { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/plan", en: "3-day plan", zh: "3 天行程" },
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
   { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
 ];
@@ -114,7 +115,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PlanPage.tsx b/v2/src/pages/PlanPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..0c28acdf91cad0fa901bf7c1574b7e262bfe34dc
--- /dev/null
+++ b/v2/src/pages/PlanPage.tsx
@@ -0,0 +1,176 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { cityItineraries, type ItineraryDay } from "../data/itineraries";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
+
+type TimeSlotKey = "morning" | "afternoon" | "evening";
+
+const TIME_SLOTS: Array<{ key: TimeSlotKey; labelEn: string; labelZh: string }> = [
+  { key: "morning", labelEn: "Morning", labelZh: "上午" },
+  { key: "afternoon", labelEn: "Afternoon", labelZh: "下午" },
+  { key: "evening", labelEn: "Evening", labelZh: "晚上" }
+];
+
+const planBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "3-day plan", path: "/plan" }
+]);
+
+export default function PlanPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeCityId, setActiveCityId] = useState<CityId>("beijing");
+  const activeItinerary = cityItineraries.find((itinerary) => itinerary.cityId === activeCityId) ?? cityItineraries[0];
+  const activeCity = CITY_LABELS[activeItinerary.cityId];
+
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(planBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-8 sm:py-10">
+        <header className="flex flex-col gap-3">
+          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+            {isZh ? "← 返回首页" : "← Home"}
+          </Link>
+          <div className="flex flex-col gap-2">
+            <span className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "Trip Planner" : "Trip Planner"}
+            </span>
+            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+              {isZh ? "3 天行程" : "3-day plan"}
+            </h1>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
+              {isZh
+                ? "四个入门城市各有一份三天模板：每天按上午、下午、晚上拆开，适合第一次来中国时快速落地。"
+                : "A practical three-day template for each first-time city, split into morning, afternoon, and evening blocks."}
+            </p>
+          </div>
+        </header>
+
+        <div
+          role="tablist"
+          aria-label={isZh ? "选择城市行程" : "Choose a city itinerary"}
+          className="flex gap-2 overflow-x-auto rounded-lg border border-line bg-white p-2"
+        >
+          {cityItineraries.map((itinerary) => {
+            const city = CITY_LABELS[itinerary.cityId];
+            const isActive = itinerary.cityId === activeCityId;
+
+            return (
+              <button
+                key={itinerary.cityId}
+                type="button"
+                role="tab"
+                id={`plan-tab-${itinerary.cityId}`}
+                aria-selected={isActive}
+                aria-controls={`plan-panel-${itinerary.cityId}`}
+                onClick={() => setActiveCityId(itinerary.cityId)}
+                className={clsx(
+                  "min-w-28 rounded-md border px-4 py-2 text-left text-sm font-bold transition",
+                  isActive
+                    ? "border-ink bg-ink text-white"
+                    : "border-transparent bg-paper text-ink hover:border-jade hover:text-jade"
+                )}
+              >
+                <span className="block">{isZh ? city.zh : city.en}</span>
+                <span className={clsx("block text-[11px] font-normal", isActive ? "text-white/70" : "text-muted")}>
+                  {isZh ? city.en : city.zh}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <section
+          role="tabpanel"
+          id={`plan-panel-${activeItinerary.cityId}`}
+          aria-labelledby={`plan-tab-${activeItinerary.cityId}`}
+          className="flex flex-col gap-6"
+        >
+          <header className="flex flex-col gap-1">
+            <p className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "当前城市" : "Current city"}
+            </p>
+            <h2 className="text-2xl font-bold">{isZh ? activeCity.zh : activeCity.en}</h2>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted">
+              {isZh ? activeItinerary.subtitleZh : activeItinerary.subtitleEn}
+            </p>
+          </header>
+
+          <div className="flex flex-col gap-8">
+            {activeItinerary.days.map((day) => (
+              <section key={day.dayNumber} className="flex flex-col gap-3">
+                <div className="flex flex-col gap-1 border-b border-line pb-3">
+                  <span className="text-xs font-bold uppercase tracking-widest text-jade">
+                    {isZh ? `第 ${day.dayNumber} 天` : `Day ${day.dayNumber}`}
+                  </span>
+                  <h3 className="text-xl font-bold">{isZh ? day.themeZh : day.themeEn}</h3>
+                </div>
+                <div className="flex flex-col gap-3">
+                  {TIME_SLOTS.map((slot) => (
+                    <PlanActivityCard
+                      key={slot.key}
+                      cityId={activeItinerary.cityId}
+                      day={day}
+                      slot={slot}
+                      isZh={isZh}
+                    />
+                  ))}
+                </div>
+              </section>
+            ))}
+          </div>
+        </section>
+      </main>
+    </>
+  );
+}
+
+function PlanActivityCard({
+  cityId,
+  day,
+  slot,
+  isZh
+}: {
+  cityId: CityId;
+  day: ItineraryDay;
+  slot: { key: TimeSlotKey; labelEn: string; labelZh: string };
+  isZh: boolean;
+}) {
+  const activity = day[slot.key];
+
+  return (
+    <article className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
+      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
+        <div className="flex min-w-0 flex-col gap-1">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            {isZh ? slot.labelZh : slot.labelEn}
+          </span>
+          <h4 className="break-words text-lg font-bold leading-tight">
+            {isZh ? day.themeZh : day.themeEn}
+          </h4>
+        </div>
+        {activity.attractionId && (
+          <Link
+            to={`/city/${cityId}#intro`}
+            className="shrink-0 text-xs font-bold uppercase tracking-widest text-jade hover:underline"
+          >
+            {isZh ? "查看景点" : "Attraction"}
+          </Link>
+        )}
+      </div>
+
+      <p className="text-sm leading-relaxed text-ink/85">{isZh ? activity.zh : activity.en}</p>
+
+      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
+        <strong className="mr-1">{isZh ? "提示：" : "Tip:"}</strong>
+        {isZh ? day.travelTipZh : day.travelTipEn}
+      </div>
+    </article>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index b9b696df6fa00bc391d8df10bdbce96dcabd580c..72665b74751f0c4660717cb649943229e26f621f
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -5,7 +5,8 @@
   route("map", "./pages/MapPage.tsx"),
   route("phrasebook", "./pages/PhrasebookPage.tsx"),
   route("guide/:topic", "./pages/GuidePage.tsx"),
-  route("city/:cityId", "./pages/CityPage.tsx"),
+  route("plan", "./pages/PlanPage.tsx"),
+  route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),
   route("sources", "./pages/SourcesPage.tsx"),

diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index adfcabaa94592bf2c136f0a522a2a633d6e892bf..01ba965ae5de7e27b97c51317ba2afce181c984c
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -25,6 +25,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/plan</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/share</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 0be050a497672fd006dcf773952ba991e41cd9e4..9ccc216dce515307f4c067703ced3257a98dc3db
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -11,6 +11,7 @@
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
+      "/plan",
       "/share",
       "/ask",
       "/sources",
diff --git a/v2/src/App.tsx b/v2/src/App.tsx
index 69ed13e175cd85b0a160c8713b63a2cb970e5b5b..c00e5fddf321e2d1fe4289cef4c9ebcaae02cccd
--- a/v2/src/App.tsx
+++ b/v2/src/App.tsx
@@ -4,9 +4,10 @@
 import SiteHeader from "./components/layout/SiteHeader";
 import SiteFooter from "./components/layout/SiteFooter";
 import HomePage from "./pages/HomePage";
-import CityPage from "./pages/CityPage";
-import GuidePage from "./pages/GuidePage";
-import MapPage from "./pages/MapPage";
+import CityPage from "./pages/CityPage";
+import GuidePage from "./pages/GuidePage";
+import PlanPage from "./pages/PlanPage";
+import MapPage from "./pages/MapPage";
 import SharePage from "./pages/SharePage";
 import AskPage from "./pages/AskPage";
 import SourcesPage from "./pages/SourcesPage";
@@ -19,9 +20,10 @@
           <SiteHeader />
           <Routes>
             <Route path="/" element={<HomePage />} />
-            <Route path="/map" element={<MapPage />} />
-            <Route path="/guide/:topic" element={<GuidePage />} />
-            <Route path="/city/:cityId" element={<CityPage />} />
+            <Route path="/map" element={<MapPage />} />
+            <Route path="/guide/:topic" element={<GuidePage />} />
+            <Route path="/plan" element={<PlanPage />} />
+            <Route path="/city/:cityId" element={<CityPage />} />
             <Route path="/share" element={<SharePage />} />
             <Route path="/ask" element={<AskPage />} />
             <Route path="/sources" element={<SourcesPage />} />
diff --git a/v2/src/data/itineraries.ts b/v2/src/data/itineraries.ts
new file mode 100644
index 0000000000000000000000000000000000000000..3ef655ae3f22669342580f14288cb67f05c73171
--- /dev/null
+++ b/v2/src/data/itineraries.ts
@@ -0,0 +1,302 @@
+import type { CityId } from "./transport";
+
+export type ItineraryDay = {
+  dayNumber: 1 | 2 | 3;
+  themeEn: string;
+  themeZh: string;
+  morning: { en: string; zh: string; attractionId?: string };
+  afternoon: { en: string; zh: string; attractionId?: string };
+  evening: { en: string; zh: string; attractionId?: string };
+  travelTipEn: string;
+  travelTipZh: string;
+};
+
+export type CityItinerary = {
+  cityId: CityId;
+  subtitleEn: string;
+  subtitleZh: string;
+  days: ItineraryDay[];
+};
+
+export const cityItineraries: CityItinerary[] = [
+  {
+    cityId: "beijing",
+    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
+    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Imperial axis first",
+        themeZh: "先看皇城中轴线",
+        morning: {
+          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
+          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
+          attractionId: "bj-forbidden-city"
+        },
+        afternoon: {
+          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
+          zh: "午后转到天安门广场，预留安检和拍照时间。",
+          attractionId: "bj-tiananmen"
+        },
+        evening: {
+          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
+          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
+        },
+        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
+        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Temples, gardens, and hutongs",
+        themeZh: "寺庙、园林与胡同",
+        morning: {
+          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
+          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
+          attractionId: "bj-temple-of-heaven"
+        },
+        afternoon: {
+          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
+          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
+          attractionId: "bj-lama-temple"
+        },
+        evening: {
+          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
+          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
+        },
+        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
+        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Great Wall day with a soft landing",
+        themeZh: "长城一日与轻松收尾",
+        morning: {
+          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
+          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
+          attractionId: "bj-mutianyu"
+        },
+        afternoon: {
+          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
+          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
+          attractionId: "bj-summer-palace"
+        },
+        evening: {
+          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
+          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
+        },
+        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
+        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
+    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Old Shanghai to neon Shanghai",
+        themeZh: "从老上海到霓虹上海",
+        morning: {
+          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
+          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
+          attractionId: "sh-bund"
+        },
+        afternoon: {
+          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
+          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
+          attractionId: "sh-yu-garden"
+        },
+        evening: {
+          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
+          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
+        },
+        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
+        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Museums and plane-tree streets",
+        themeZh: "博物馆与梧桐街区",
+        morning: {
+          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
+          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
+          attractionId: "sh-museum"
+        },
+        afternoon: {
+          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
+          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
+          attractionId: "sh-wukang"
+        },
+        evening: {
+          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
+          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
+        },
+        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
+        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Pudong skyline and river contrast",
+        themeZh: "浦东天际线与江岸对照",
+        morning: {
+          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
+          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
+          attractionId: "sh-lujiazui"
+        },
+        afternoon: {
+          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
+          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
+          attractionId: "sh-shanghai-tower"
+        },
+        evening: {
+          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
+          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
+        },
+        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
+        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
+    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Lingnan craft and first skyline view",
+        themeZh: "岭南工艺与第一眼天际线",
+        morning: {
+          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
+          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
+          attractionId: "gz-chen-clan"
+        },
+        afternoon: {
+          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
+          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
+          attractionId: "gz-shamian"
+        },
+        evening: {
+          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
+          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
+          attractionId: "gz-canton-tower"
+        },
+        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
+        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Old city breakfast and civic landmarks",
+        themeZh: "老城早茶与城市地标",
+        morning: {
+          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
+          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
+          attractionId: "gz-yuexiu-park"
+        },
+        afternoon: {
+          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
+          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
+          attractionId: "gz-baiyun-mountain"
+        },
+        evening: {
+          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
+          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
+        },
+        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
+        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Markets, museums, and Pearl River night",
+        themeZh: "市场、博物馆与珠江夜色",
+        morning: {
+          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
+          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
+        },
+        afternoon: {
+          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
+          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
+        },
+        evening: {
+          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
+          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
+          attractionId: "gz-pearl-river"
+        },
+        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
+        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
+    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "OCT cluster and Shekou night",
+        themeZh: "华侨城组团与蛇口夜晚",
+        morning: {
+          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
+          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
+          attractionId: "sz-window-of-the-world"
+        },
+        afternoon: {
+          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
+          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
+          attractionId: "sz-octloft"
+        },
+        evening: {
+          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
+          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
+          attractionId: "sz-sea-world"
+        },
+        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
+        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Reform-era city views and beach air",
+        themeZh: "改革城市视角与海边空气",
+        morning: {
+          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
+          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
+          attractionId: "sz-lianhuashan"
+        },
+        afternoon: {
+          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
+          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
+          attractionId: "sz-dameisha"
+        },
+        evening: {
+          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
+          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
+        },
+        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
+        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Dapeng coast and historic village",
+        themeZh: "大鹏海岸与古城",
+        morning: {
+          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
+          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
+          attractionId: "sz-dapeng"
+        },
+        afternoon: {
+          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
+          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
+        },
+        evening: {
+          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
+          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
+        },
+        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
+        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
+      }
+    ]
+  }
+];
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 36d357304a97629e5ccc913861cdd7243596c527..d60efc774498ca2404260eed90705a9bfbe64b69
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -11,6 +11,7 @@
 const guideLinks = [
   { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
   { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/plan", en: "3-day plan", zh: "3 天行程" },
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
   { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
 ];
@@ -114,7 +115,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PlanPage.tsx b/v2/src/pages/PlanPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..0c28acdf91cad0fa901bf7c1574b7e262bfe34dc
--- /dev/null
+++ b/v2/src/pages/PlanPage.tsx
@@ -0,0 +1,176 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { cityItineraries, type ItineraryDay } from "../data/itineraries";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
+
+type TimeSlotKey = "morning" | "afternoon" | "evening";
+
+const TIME_SLOTS: Array<{ key: TimeSlotKey; labelEn: string; labelZh: string }> = [
+  { key: "morning", labelEn: "Morning", labelZh: "上午" },
+  { key: "afternoon", labelEn: "Afternoon", labelZh: "下午" },
+  { key: "evening", labelEn: "Evening", labelZh: "晚上" }
+];
+
+const planBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "3-day plan", path: "/plan" }
+]);
+
+export default function PlanPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeCityId, setActiveCityId] = useState<CityId>("beijing");
+  const activeItinerary = cityItineraries.find((itinerary) => itinerary.cityId === activeCityId) ?? cityItineraries[0];
+  const activeCity = CITY_LABELS[activeItinerary.cityId];
+
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(planBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-8 sm:py-10">
+        <header className="flex flex-col gap-3">
+          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+            {isZh ? "← 返回首页" : "← Home"}
+          </Link>
+          <div className="flex flex-col gap-2">
+            <span className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "Trip Planner" : "Trip Planner"}
+            </span>
+            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+              {isZh ? "3 天行程" : "3-day plan"}
+            </h1>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
+              {isZh
+                ? "四个入门城市各有一份三天模板：每天按上午、下午、晚上拆开，适合第一次来中国时快速落地。"
+                : "A practical three-day template for each first-time city, split into morning, afternoon, and evening blocks."}
+            </p>
+          </div>
+        </header>
+
+        <div
+          role="tablist"
+          aria-label={isZh ? "选择城市行程" : "Choose a city itinerary"}
+          className="flex gap-2 overflow-x-auto rounded-lg border border-line bg-white p-2"
+        >
+          {cityItineraries.map((itinerary) => {
+            const city = CITY_LABELS[itinerary.cityId];
+            const isActive = itinerary.cityId === activeCityId;
+
+            return (
+              <button
+                key={itinerary.cityId}
+                type="button"
+                role="tab"
+                id={`plan-tab-${itinerary.cityId}`}
+                aria-selected={isActive}
+                aria-controls={`plan-panel-${itinerary.cityId}`}
+                onClick={() => setActiveCityId(itinerary.cityId)}
+                className={clsx(
+                  "min-w-28 rounded-md border px-4 py-2 text-left text-sm font-bold transition",
+                  isActive
+                    ? "border-ink bg-ink text-white"
+                    : "border-transparent bg-paper text-ink hover:border-jade hover:text-jade"
+                )}
+              >
+                <span className="block">{isZh ? city.zh : city.en}</span>
+                <span className={clsx("block text-[11px] font-normal", isActive ? "text-white/70" : "text-muted")}>
+                  {isZh ? city.en : city.zh}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <section
+          role="tabpanel"
+          id={`plan-panel-${activeItinerary.cityId}`}
+          aria-labelledby={`plan-tab-${activeItinerary.cityId}`}
+          className="flex flex-col gap-6"
+        >
+          <header className="flex flex-col gap-1">
+            <p className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "当前城市" : "Current city"}
+            </p>
+            <h2 className="text-2xl font-bold">{isZh ? activeCity.zh : activeCity.en}</h2>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted">
+              {isZh ? activeItinerary.subtitleZh : activeItinerary.subtitleEn}
+            </p>
+          </header>
+
+          <div className="flex flex-col gap-8">
+            {activeItinerary.days.map((day) => (
+              <section key={day.dayNumber} className="flex flex-col gap-3">
+                <div className="flex flex-col gap-1 border-b border-line pb-3">
+                  <span className="text-xs font-bold uppercase tracking-widest text-jade">
+                    {isZh ? `第 ${day.dayNumber} 天` : `Day ${day.dayNumber}`}
+                  </span>
+                  <h3 className="text-xl font-bold">{isZh ? day.themeZh : day.themeEn}</h3>
+                </div>
+                <div className="flex flex-col gap-3">
+                  {TIME_SLOTS.map((slot) => (
+                    <PlanActivityCard
+                      key={slot.key}
+                      cityId={activeItinerary.cityId}
+                      day={day}
+                      slot={slot}
+                      isZh={isZh}
+                    />
+                  ))}
+                </div>
+              </section>
+            ))}
+          </div>
+        </section>
+      </main>
+    </>
+  );
+}
+
+function PlanActivityCard({
+  cityId,
+  day,
+  slot,
+  isZh
+}: {
+  cityId: CityId;
+  day: ItineraryDay;
+  slot: { key: TimeSlotKey; labelEn: string; labelZh: string };
+  isZh: boolean;
+}) {
+  const activity = day[slot.key];
+
+  return (
+    <article className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
+      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
+        <div className="flex min-w-0 flex-col gap-1">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            {isZh ? slot.labelZh : slot.labelEn}
+          </span>
+          <h4 className="break-words text-lg font-bold leading-tight">
+            {isZh ? day.themeZh : day.themeEn}
+          </h4>
+        </div>
+        {activity.attractionId && (
+          <Link
+            to={`/city/${cityId}#intro`}
+            className="shrink-0 text-xs font-bold uppercase tracking-widest text-jade hover:underline"
+          >
+            {isZh ? "查看景点" : "Attraction"}
+          </Link>
+        )}
+      </div>
+
+      <p className="text-sm leading-relaxed text-ink/85">{isZh ? activity.zh : activity.en}</p>
+
+      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
+        <strong className="mr-1">{isZh ? "提示：" : "Tip:"}</strong>
+        {isZh ? day.travelTipZh : day.travelTipEn}
+      </div>
+    </article>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index b9b696df6fa00bc391d8df10bdbce96dcabd580c..72665b74751f0c4660717cb649943229e26f621f
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -5,7 +5,8 @@
   route("map", "./pages/MapPage.tsx"),
   route("phrasebook", "./pages/PhrasebookPage.tsx"),
   route("guide/:topic", "./pages/GuidePage.tsx"),
-  route("city/:cityId", "./pages/CityPage.tsx"),
+  route("plan", "./pages/PlanPage.tsx"),
+  route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),
   route("sources", "./pages/SourcesPage.tsx"),

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Test-Path src\\pages\\PhrasebookPage.tsx; if (Test-Path src\\pages\\PhrasebookPage.tsx) { Get-Content -Encoding UTF8 src\\pages\\PhrasebookPage.tsx | Select-Object -First 5 }" in c:\Users\h\Documents\New project 2\v2
 succeeded in 676ms:
True
import { useState } from "react";
import { Link } from "react-router";
import clsx from "clsx";
import { phraseCategories, phrasebookTotal, type Phrase } from "../data/phrasebook";
import { useLang } from "../store/language";

diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index adfcabaa94592bf2c136f0a522a2a633d6e892bf..01ba965ae5de7e27b97c51317ba2afce181c984c
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -25,6 +25,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/plan</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/share</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 0be050a497672fd006dcf773952ba991e41cd9e4..9ccc216dce515307f4c067703ced3257a98dc3db
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -11,6 +11,7 @@
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
+      "/plan",
       "/share",
       "/ask",
       "/sources",
diff --git a/v2/src/App.tsx b/v2/src/App.tsx
index 69ed13e175cd85b0a160c8713b63a2cb970e5b5b..c00e5fddf321e2d1fe4289cef4c9ebcaae02cccd
--- a/v2/src/App.tsx
+++ b/v2/src/App.tsx
@@ -4,9 +4,10 @@
 import SiteHeader from "./components/layout/SiteHeader";
 import SiteFooter from "./components/layout/SiteFooter";
 import HomePage from "./pages/HomePage";
-import CityPage from "./pages/CityPage";
-import GuidePage from "./pages/GuidePage";
-import MapPage from "./pages/MapPage";
+import CityPage from "./pages/CityPage";
+import GuidePage from "./pages/GuidePage";
+import PlanPage from "./pages/PlanPage";
+import MapPage from "./pages/MapPage";
 import SharePage from "./pages/SharePage";
 import AskPage from "./pages/AskPage";
 import SourcesPage from "./pages/SourcesPage";
@@ -19,9 +20,10 @@
           <SiteHeader />
           <Routes>
             <Route path="/" element={<HomePage />} />
-            <Route path="/map" element={<MapPage />} />
-            <Route path="/guide/:topic" element={<GuidePage />} />
-            <Route path="/city/:cityId" element={<CityPage />} />
+            <Route path="/map" element={<MapPage />} />
+            <Route path="/guide/:topic" element={<GuidePage />} />
+            <Route path="/plan" element={<PlanPage />} />
+            <Route path="/city/:cityId" element={<CityPage />} />
             <Route path="/share" element={<SharePage />} />
             <Route path="/ask" element={<AskPage />} />
             <Route path="/sources" element={<SourcesPage />} />
diff --git a/v2/src/data/itineraries.ts b/v2/src/data/itineraries.ts
new file mode 100644
index 0000000000000000000000000000000000000000..3ef655ae3f22669342580f14288cb67f05c73171
--- /dev/null
+++ b/v2/src/data/itineraries.ts
@@ -0,0 +1,302 @@
+import type { CityId } from "./transport";
+
+export type ItineraryDay = {
+  dayNumber: 1 | 2 | 3;
+  themeEn: string;
+  themeZh: string;
+  morning: { en: string; zh: string; attractionId?: string };
+  afternoon: { en: string; zh: string; attractionId?: string };
+  evening: { en: string; zh: string; attractionId?: string };
+  travelTipEn: string;
+  travelTipZh: string;
+};
+
+export type CityItinerary = {
+  cityId: CityId;
+  subtitleEn: string;
+  subtitleZh: string;
+  days: ItineraryDay[];
+};
+
+export const cityItineraries: CityItinerary[] = [
+  {
+    cityId: "beijing",
+    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
+    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Imperial axis first",
+        themeZh: "先看皇城中轴线",
+        morning: {
+          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
+          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
+          attractionId: "bj-forbidden-city"
+        },
+        afternoon: {
+          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
+          zh: "午后转到天安门广场，预留安检和拍照时间。",
+          attractionId: "bj-tiananmen"
+        },
+        evening: {
+          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
+          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
+        },
+        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
+        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Temples, gardens, and hutongs",
+        themeZh: "寺庙、园林与胡同",
+        morning: {
+          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
+          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
+          attractionId: "bj-temple-of-heaven"
+        },
+        afternoon: {
+          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
+          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
+          attractionId: "bj-lama-temple"
+        },
+        evening: {
+          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
+          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
+        },
+        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
+        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Great Wall day with a soft landing",
+        themeZh: "长城一日与轻松收尾",
+        morning: {
+          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
+          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
+          attractionId: "bj-mutianyu"
+        },
+        afternoon: {
+          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
+          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
+          attractionId: "bj-summer-palace"
+        },
+        evening: {
+          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
+          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
+        },
+        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
+        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
+    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Old Shanghai to neon Shanghai",
+        themeZh: "从老上海到霓虹上海",
+        morning: {
+          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
+          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
+          attractionId: "sh-bund"
+        },
+        afternoon: {
+          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
+          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
+          attractionId: "sh-yu-garden"
+        },
+        evening: {
+          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
+          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
+        },
+        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
+        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Museums and plane-tree streets",
+        themeZh: "博物馆与梧桐街区",
+        morning: {
+          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
+          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
+          attractionId: "sh-museum"
+        },
+        afternoon: {
+          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
+          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
+          attractionId: "sh-wukang"
+        },
+        evening: {
+          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
+          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
+        },
+        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
+        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Pudong skyline and river contrast",
+        themeZh: "浦东天际线与江岸对照",
+        morning: {
+          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
+          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
+          attractionId: "sh-lujiazui"
+        },
+        afternoon: {
+          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
+          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
+          attractionId: "sh-shanghai-tower"
+        },
+        evening: {
+          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
+          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
+        },
+        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
+        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
+    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Lingnan craft and first skyline view",
+        themeZh: "岭南工艺与第一眼天际线",
+        morning: {
+          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
+          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
+          attractionId: "gz-chen-clan"
+        },
+        afternoon: {
+          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
+          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
+          attractionId: "gz-shamian"
+        },
+        evening: {
+          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
+          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
+          attractionId: "gz-canton-tower"
+        },
+        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
+        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Old city breakfast and civic landmarks",
+        themeZh: "老城早茶与城市地标",
+        morning: {
+          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
+          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
+          attractionId: "gz-yuexiu-park"
+        },
+        afternoon: {
+          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
+          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
+          attractionId: "gz-baiyun-mountain"
+        },
+        evening: {
+          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
+          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
+        },
+        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
+        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Markets, museums, and Pearl River night",
+        themeZh: "市场、博物馆与珠江夜色",
+        morning: {
+          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
+          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
+        },
+        afternoon: {
+          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
+          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
+        },
+        evening: {
+          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
+          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
+          attractionId: "gz-pearl-river"
+        },
+        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
+        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
+    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "OCT cluster and Shekou night",
+        themeZh: "华侨城组团与蛇口夜晚",
+        morning: {
+          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
+          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
+          attractionId: "sz-window-of-the-world"
+        },
+        afternoon: {
+          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
+          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
+          attractionId: "sz-octloft"
+        },
+        evening: {
+          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
+          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
+          attractionId: "sz-sea-world"
+        },
+        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
+        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Reform-era city views and beach air",
+        themeZh: "改革城市视角与海边空气",
+        morning: {
+          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
+          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
+          attractionId: "sz-lianhuashan"
+        },
+        afternoon: {
+          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
+          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
+          attractionId: "sz-dameisha"
+        },
+        evening: {
+          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
+          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
+        },
+        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
+        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Dapeng coast and historic village",
+        themeZh: "大鹏海岸与古城",
+        morning: {
+          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
+          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
+          attractionId: "sz-dapeng"
+        },
+        afternoon: {
+          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
+          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
+        },
+        evening: {
+          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
+          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
+        },
+        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
+        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
+      }
+    ]
+  }
+];
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 36d357304a97629e5ccc913861cdd7243596c527..d60efc774498ca2404260eed90705a9bfbe64b69
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -11,6 +11,7 @@
 const guideLinks = [
   { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
   { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/plan", en: "3-day plan", zh: "3 天行程" },
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
   { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
 ];
@@ -114,7 +115,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PlanPage.tsx b/v2/src/pages/PlanPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..0c28acdf91cad0fa901bf7c1574b7e262bfe34dc
--- /dev/null
+++ b/v2/src/pages/PlanPage.tsx
@@ -0,0 +1,176 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { cityItineraries, type ItineraryDay } from "../data/itineraries";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
+
+type TimeSlotKey = "morning" | "afternoon" | "evening";
+
+const TIME_SLOTS: Array<{ key: TimeSlotKey; labelEn: string; labelZh: string }> = [
+  { key: "morning", labelEn: "Morning", labelZh: "上午" },
+  { key: "afternoon", labelEn: "Afternoon", labelZh: "下午" },
+  { key: "evening", labelEn: "Evening", labelZh: "晚上" }
+];
+
+const planBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "3-day plan", path: "/plan" }
+]);
+
+export default function PlanPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeCityId, setActiveCityId] = useState<CityId>("beijing");
+  const activeItinerary = cityItineraries.find((itinerary) => itinerary.cityId === activeCityId) ?? cityItineraries[0];
+  const activeCity = CITY_LABELS[activeItinerary.cityId];
+
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(planBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-8 sm:py-10">
+        <header className="flex flex-col gap-3">
+          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+            {isZh ? "← 返回首页" : "← Home"}
+          </Link>
+          <div className="flex flex-col gap-2">
+            <span className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "Trip Planner" : "Trip Planner"}
+            </span>
+            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+              {isZh ? "3 天行程" : "3-day plan"}
+            </h1>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
+              {isZh
+                ? "四个入门城市各有一份三天模板：每天按上午、下午、晚上拆开，适合第一次来中国时快速落地。"
+                : "A practical three-day template for each first-time city, split into morning, afternoon, and evening blocks."}
+            </p>
+          </div>
+        </header>
+
+        <div
+          role="tablist"
+          aria-label={isZh ? "选择城市行程" : "Choose a city itinerary"}
+          className="flex gap-2 overflow-x-auto rounded-lg border border-line bg-white p-2"
+        >
+          {cityItineraries.map((itinerary) => {
+            const city = CITY_LABELS[itinerary.cityId];
+            const isActive = itinerary.cityId === activeCityId;
+
+            return (
+              <button
+                key={itinerary.cityId}
+                type="button"
+                role="tab"
+                id={`plan-tab-${itinerary.cityId}`}
+                aria-selected={isActive}
+                aria-controls={`plan-panel-${itinerary.cityId}`}
+                onClick={() => setActiveCityId(itinerary.cityId)}
+                className={clsx(
+                  "min-w-28 rounded-md border px-4 py-2 text-left text-sm font-bold transition",
+                  isActive
+                    ? "border-ink bg-ink text-white"
+                    : "border-transparent bg-paper text-ink hover:border-jade hover:text-jade"
+                )}
+              >
+                <span className="block">{isZh ? city.zh : city.en}</span>
+                <span className={clsx("block text-[11px] font-normal", isActive ? "text-white/70" : "text-muted")}>
+                  {isZh ? city.en : city.zh}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <section
+          role="tabpanel"
+          id={`plan-panel-${activeItinerary.cityId}`}
+          aria-labelledby={`plan-tab-${activeItinerary.cityId}`}
+          className="flex flex-col gap-6"
+        >
+          <header className="flex flex-col gap-1">
+            <p className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "当前城市" : "Current city"}
+            </p>
+            <h2 className="text-2xl font-bold">{isZh ? activeCity.zh : activeCity.en}</h2>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted">
+              {isZh ? activeItinerary.subtitleZh : activeItinerary.subtitleEn}
+            </p>
+          </header>
+
+          <div className="flex flex-col gap-8">
+            {activeItinerary.days.map((day) => (
+              <section key={day.dayNumber} className="flex flex-col gap-3">
+                <div className="flex flex-col gap-1 border-b border-line pb-3">
+                  <span className="text-xs font-bold uppercase tracking-widest text-jade">
+                    {isZh ? `第 ${day.dayNumber} 天` : `Day ${day.dayNumber}`}
+                  </span>
+                  <h3 className="text-xl font-bold">{isZh ? day.themeZh : day.themeEn}</h3>
+                </div>
+                <div className="flex flex-col gap-3">
+                  {TIME_SLOTS.map((slot) => (
+                    <PlanActivityCard
+                      key={slot.key}
+                      cityId={activeItinerary.cityId}
+                      day={day}
+                      slot={slot}
+                      isZh={isZh}
+                    />
+                  ))}
+                </div>
+              </section>
+            ))}
+          </div>
+        </section>
+      </main>
+    </>
+  );
+}
+
+function PlanActivityCard({
+  cityId,
+  day,
+  slot,
+  isZh
+}: {
+  cityId: CityId;
+  day: ItineraryDay;
+  slot: { key: TimeSlotKey; labelEn: string; labelZh: string };
+  isZh: boolean;
+}) {
+  const activity = day[slot.key];
+
+  return (
+    <article className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
+      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
+        <div className="flex min-w-0 flex-col gap-1">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            {isZh ? slot.labelZh : slot.labelEn}
+          </span>
+          <h4 className="break-words text-lg font-bold leading-tight">
+            {isZh ? day.themeZh : day.themeEn}
+          </h4>
+        </div>
+        {activity.attractionId && (
+          <Link
+            to={`/city/${cityId}#intro`}
+            className="shrink-0 text-xs font-bold uppercase tracking-widest text-jade hover:underline"
+          >
+            {isZh ? "查看景点" : "Attraction"}
+          </Link>
+        )}
+      </div>
+
+      <p className="text-sm leading-relaxed text-ink/85">{isZh ? activity.zh : activity.en}</p>
+
+      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
+        <strong className="mr-1">{isZh ? "提示：" : "Tip:"}</strong>
+        {isZh ? day.travelTipZh : day.travelTipEn}
+      </div>
+    </article>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index b9b696df6fa00bc391d8df10bdbce96dcabd580c..72665b74751f0c4660717cb649943229e26f621f
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -5,7 +5,8 @@
   route("map", "./pages/MapPage.tsx"),
   route("phrasebook", "./pages/PhrasebookPage.tsx"),
   route("guide/:topic", "./pages/GuidePage.tsx"),
-  route("city/:cityId", "./pages/CityPage.tsx"),
+  route("plan", "./pages/PlanPage.tsx"),
+  route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),
   route("sources", "./pages/SourcesPage.tsx"),

  ✓ Audit existing routes, data, homepage patterns
  ✓ Add itinerary data and PlanPage UI
  ✓ Wire /plan into routes, prerender, sitemap, homepage
  → Run typecheck and production build
diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index adfcabaa94592bf2c136f0a522a2a633d6e892bf..01ba965ae5de7e27b97c51317ba2afce181c984c
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -25,6 +25,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/plan</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/share</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 0be050a497672fd006dcf773952ba991e41cd9e4..9ccc216dce515307f4c067703ced3257a98dc3db
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -11,6 +11,7 @@
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
+      "/plan",
       "/share",
       "/ask",
       "/sources",
diff --git a/v2/src/App.tsx b/v2/src/App.tsx
index 69ed13e175cd85b0a160c8713b63a2cb970e5b5b..c00e5fddf321e2d1fe4289cef4c9ebcaae02cccd
--- a/v2/src/App.tsx
+++ b/v2/src/App.tsx
@@ -4,9 +4,10 @@
 import SiteHeader from "./components/layout/SiteHeader";
 import SiteFooter from "./components/layout/SiteFooter";
 import HomePage from "./pages/HomePage";
-import CityPage from "./pages/CityPage";
-import GuidePage from "./pages/GuidePage";
-import MapPage from "./pages/MapPage";
+import CityPage from "./pages/CityPage";
+import GuidePage from "./pages/GuidePage";
+import PlanPage from "./pages/PlanPage";
+import MapPage from "./pages/MapPage";
 import SharePage from "./pages/SharePage";
 import AskPage from "./pages/AskPage";
 import SourcesPage from "./pages/SourcesPage";
@@ -19,9 +20,10 @@
           <SiteHeader />
           <Routes>
             <Route path="/" element={<HomePage />} />
-            <Route path="/map" element={<MapPage />} />
-            <Route path="/guide/:topic" element={<GuidePage />} />
-            <Route path="/city/:cityId" element={<CityPage />} />
+            <Route path="/map" element={<MapPage />} />
+            <Route path="/guide/:topic" element={<GuidePage />} />
+            <Route path="/plan" element={<PlanPage />} />
+            <Route path="/city/:cityId" element={<CityPage />} />
             <Route path="/share" element={<SharePage />} />
             <Route path="/ask" element={<AskPage />} />
             <Route path="/sources" element={<SourcesPage />} />
diff --git a/v2/src/data/itineraries.ts b/v2/src/data/itineraries.ts
new file mode 100644
index 0000000000000000000000000000000000000000..3ef655ae3f22669342580f14288cb67f05c73171
--- /dev/null
+++ b/v2/src/data/itineraries.ts
@@ -0,0 +1,302 @@
+import type { CityId } from "./transport";
+
+export type ItineraryDay = {
+  dayNumber: 1 | 2 | 3;
+  themeEn: string;
+  themeZh: string;
+  morning: { en: string; zh: string; attractionId?: string };
+  afternoon: { en: string; zh: string; attractionId?: string };
+  evening: { en: string; zh: string; attractionId?: string };
+  travelTipEn: string;
+  travelTipZh: string;
+};
+
+export type CityItinerary = {
+  cityId: CityId;
+  subtitleEn: string;
+  subtitleZh: string;
+  days: ItineraryDay[];
+};
+
+export const cityItineraries: CityItinerary[] = [
+  {
+    cityId: "beijing",
+    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
+    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Imperial axis first",
+        themeZh: "先看皇城中轴线",
+        morning: {
+          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
+          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
+          attractionId: "bj-forbidden-city"
+        },
+        afternoon: {
+          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
+          zh: "午后转到天安门广场，预留安检和拍照时间。",
+          attractionId: "bj-tiananmen"
+        },
+        evening: {
+          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
+          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
+        },
+        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
+        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Temples, gardens, and hutongs",
+        themeZh: "寺庙、园林与胡同",
+        morning: {
+          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
+          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
+          attractionId: "bj-temple-of-heaven"
+        },
+        afternoon: {
+          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
+          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
+          attractionId: "bj-lama-temple"
+        },
+        evening: {
+          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
+          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
+        },
+        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
+        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Great Wall day with a soft landing",
+        themeZh: "长城一日与轻松收尾",
+        morning: {
+          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
+          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
+          attractionId: "bj-mutianyu"
+        },
+        afternoon: {
+          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
+          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
+          attractionId: "bj-summer-palace"
+        },
+        evening: {
+          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
+          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
+        },
+        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
+        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
+    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Old Shanghai to neon Shanghai",
+        themeZh: "从老上海到霓虹上海",
+        morning: {
+          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
+          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
+          attractionId: "sh-bund"
+        },
+        afternoon: {
+          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
+          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
+          attractionId: "sh-yu-garden"
+        },
+        evening: {
+          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
+          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
+        },
+        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
+        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Museums and plane-tree streets",
+        themeZh: "博物馆与梧桐街区",
+        morning: {
+          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
+          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
+          attractionId: "sh-museum"
+        },
+        afternoon: {
+          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
+          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
+          attractionId: "sh-wukang"
+        },
+        evening: {
+          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
+          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
+        },
+        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
+        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Pudong skyline and river contrast",
+        themeZh: "浦东天际线与江岸对照",
+        morning: {
+          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
+          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
+          attractionId: "sh-lujiazui"
+        },
+        afternoon: {
+          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
+          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
+          attractionId: "sh-shanghai-tower"
+        },
+        evening: {
+          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
+          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
+        },
+        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
+        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
+    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Lingnan craft and first skyline view",
+        themeZh: "岭南工艺与第一眼天际线",
+        morning: {
+          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
+          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
+          attractionId: "gz-chen-clan"
+        },
+        afternoon: {
+          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
+          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
+          attractionId: "gz-shamian"
+        },
+        evening: {
+          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
+          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
+          attractionId: "gz-canton-tower"
+        },
+        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
+        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Old city breakfast and civic landmarks",
+        themeZh: "老城早茶与城市地标",
+        morning: {
+          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
+          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
+          attractionId: "gz-yuexiu-park"
+        },
+        afternoon: {
+          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
+          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
+          attractionId: "gz-baiyun-mountain"
+        },
+        evening: {
+          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
+          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
+        },
+        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
+        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Markets, museums, and Pearl River night",
+        themeZh: "市场、博物馆与珠江夜色",
+        morning: {
+          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
+          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
+        },
+        afternoon: {
+          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
+          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
+        },
+        evening: {
+          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
+          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
+          attractionId: "gz-pearl-river"
+        },
+        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
+        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
+    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "OCT cluster and Shekou night",
+        themeZh: "华侨城组团与蛇口夜晚",
+        morning: {
+          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
+          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
+          attractionId: "sz-window-of-the-world"
+        },
+        afternoon: {
+          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
+          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
+          attractionId: "sz-octloft"
+        },
+        evening: {
+          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
+          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
+          attractionId: "sz-sea-world"
+        },
+        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
+        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Reform-era city views and beach air",
+        themeZh: "改革城市视角与海边空气",
+        morning: {
+          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
+          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
+          attractionId: "sz-lianhuashan"
+        },
+        afternoon: {
+          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
+          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
+          attractionId: "sz-dameisha"
+        },
+        evening: {
+          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
+          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
+        },
+        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
+        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Dapeng coast and historic village",
+        themeZh: "大鹏海岸与古城",
+        morning: {
+          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
+          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
+          attractionId: "sz-dapeng"
+        },
+        afternoon: {
+          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
+          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
+        },
+        evening: {
+          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
+          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
+        },
+        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
+        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
+      }
+    ]
+  }
+];
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 36d357304a97629e5ccc913861cdd7243596c527..d60efc774498ca2404260eed90705a9bfbe64b69
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -11,6 +11,7 @@
 const guideLinks = [
   { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
   { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/plan", en: "3-day plan", zh: "3 天行程" },
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
   { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
 ];
@@ -114,7 +115,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PlanPage.tsx b/v2/src/pages/PlanPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..0c28acdf91cad0fa901bf7c1574b7e262bfe34dc
--- /dev/null
+++ b/v2/src/pages/PlanPage.tsx
@@ -0,0 +1,176 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { cityItineraries, type ItineraryDay } from "../data/itineraries";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
+
+type TimeSlotKey = "morning" | "afternoon" | "evening";
+
+const TIME_SLOTS: Array<{ key: TimeSlotKey; labelEn: string; labelZh: string }> = [
+  { key: "morning", labelEn: "Morning", labelZh: "上午" },
+  { key: "afternoon", labelEn: "Afternoon", labelZh: "下午" },
+  { key: "evening", labelEn: "Evening", labelZh: "晚上" }
+];
+
+const planBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "3-day plan", path: "/plan" }
+]);
+
+export default function PlanPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeCityId, setActiveCityId] = useState<CityId>("beijing");
+  const activeItinerary = cityItineraries.find((itinerary) => itinerary.cityId === activeCityId) ?? cityItineraries[0];
+  const activeCity = CITY_LABELS[activeItinerary.cityId];
+
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(planBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-8 sm:py-10">
+        <header className="flex flex-col gap-3">
+          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+            {isZh ? "← 返回首页" : "← Home"}
+          </Link>
+          <div className="flex flex-col gap-2">
+            <span className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "Trip Planner" : "Trip Planner"}
+            </span>
+            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+              {isZh ? "3 天行程" : "3-day plan"}
+            </h1>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
+              {isZh
+                ? "四个入门城市各有一份三天模板：每天按上午、下午、晚上拆开，适合第一次来中国时快速落地。"
+                : "A practical three-day template for each first-time city, split into morning, afternoon, and evening blocks."}
+            </p>
+          </div>
+        </header>
+
+        <div
+          role="tablist"
+          aria-label={isZh ? "选择城市行程" : "Choose a city itinerary"}
+          className="flex gap-2 overflow-x-auto rounded-lg border border-line bg-white p-2"
+        >
+          {cityItineraries.map((itinerary) => {
+            const city = CITY_LABELS[itinerary.cityId];
+            const isActive = itinerary.cityId === activeCityId;
+
+            return (
+              <button
+                key={itinerary.cityId}
+                type="button"
+                role="tab"
+                id={`plan-tab-${itinerary.cityId}`}
+                aria-selected={isActive}
+                aria-controls={`plan-panel-${itinerary.cityId}`}
+                onClick={() => setActiveCityId(itinerary.cityId)}
+                className={clsx(
+                  "min-w-28 rounded-md border px-4 py-2 text-left text-sm font-bold transition",
+                  isActive
+                    ? "border-ink bg-ink text-white"
+                    : "border-transparent bg-paper text-ink hover:border-jade hover:text-jade"
+                )}
+              >
+                <span className="block">{isZh ? city.zh : city.en}</span>
+                <span className={clsx("block text-[11px] font-normal", isActive ? "text-white/70" : "text-muted")}>
+                  {isZh ? city.en : city.zh}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <section
+          role="tabpanel"
+          id={`plan-panel-${activeItinerary.cityId}`}
+          aria-labelledby={`plan-tab-${activeItinerary.cityId}`}
+          className="flex flex-col gap-6"
+        >
+          <header className="flex flex-col gap-1">
+            <p className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "当前城市" : "Current city"}
+            </p>
+            <h2 className="text-2xl font-bold">{isZh ? activeCity.zh : activeCity.en}</h2>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted">
+              {isZh ? activeItinerary.subtitleZh : activeItinerary.subtitleEn}
+            </p>
+          </header>
+
+          <div className="flex flex-col gap-8">
+            {activeItinerary.days.map((day) => (
+              <section key={day.dayNumber} className="flex flex-col gap-3">
+                <div className="flex flex-col gap-1 border-b border-line pb-3">
+                  <span className="text-xs font-bold uppercase tracking-widest text-jade">
+                    {isZh ? `第 ${day.dayNumber} 天` : `Day ${day.dayNumber}`}
+                  </span>
+                  <h3 className="text-xl font-bold">{isZh ? day.themeZh : day.themeEn}</h3>
+                </div>
+                <div className="flex flex-col gap-3">
+                  {TIME_SLOTS.map((slot) => (
+                    <PlanActivityCard
+                      key={slot.key}
+                      cityId={activeItinerary.cityId}
+                      day={day}
+                      slot={slot}
+                      isZh={isZh}
+                    />
+                  ))}
+                </div>
+              </section>
+            ))}
+          </div>
+        </section>
+      </main>
+    </>
+  );
+}
+
+function PlanActivityCard({
+  cityId,
+  day,
+  slot,
+  isZh
+}: {
+  cityId: CityId;
+  day: ItineraryDay;
+  slot: { key: TimeSlotKey; labelEn: string; labelZh: string };
+  isZh: boolean;
+}) {
+  const activity = day[slot.key];
+
+  return (
+    <article className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
+      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
+        <div className="flex min-w-0 flex-col gap-1">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            {isZh ? slot.labelZh : slot.labelEn}
+          </span>
+          <h4 className="break-words text-lg font-bold leading-tight">
+            {isZh ? day.themeZh : day.themeEn}
+          </h4>
+        </div>
+        {activity.attractionId && (
+          <Link
+            to={`/city/${cityId}#intro`}
+            className="shrink-0 text-xs font-bold uppercase tracking-widest text-jade hover:underline"
+          >
+            {isZh ? "查看景点" : "Attraction"}
+          </Link>
+        )}
+      </div>
+
+      <p className="text-sm leading-relaxed text-ink/85">{isZh ? activity.zh : activity.en}</p>
+
+      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
+        <strong className="mr-1">{isZh ? "提示：" : "Tip:"}</strong>
+        {isZh ? day.travelTipZh : day.travelTipEn}
+      </div>
+    </article>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index b9b696df6fa00bc391d8df10bdbce96dcabd580c..72665b74751f0c4660717cb649943229e26f621f
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -5,7 +5,8 @@
   route("map", "./pages/MapPage.tsx"),
   route("phrasebook", "./pages/PhrasebookPage.tsx"),
   route("guide/:topic", "./pages/GuidePage.tsx"),
-  route("city/:cityId", "./pages/CityPage.tsx"),
+  route("plan", "./pages/PlanPage.tsx"),
+  route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),
   route("sources", "./pages/SourcesPage.tsx"),

codex
`/plan` 已经接进 React Router、预渲染列表和 sitemap，首页入口也加到了现有功能卡片区。我还保留了工作区里已经存在的 `/phrasebook` 变更，没有覆盖它。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "git diff -- src\\data\\itineraries.ts src\\pages\\PlanPage.tsx src\\routes.ts react-router.config.ts public\\sitemap.xml src\\pages\\HomePage.tsx src\\App.tsx" in c:\Users\h\Documents\New project 2\v2
 succeeded in 392ms:
diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 2f156e1..01ba965 100644
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -8,6 +8,10 @@
     <loc>https://travel-china.example.com/map</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
+  <url>
+    <loc>https://travel-china.example.com/phrasebook</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
   <url>
     <loc>https://travel-china.example.com/guide/entry</loc>
     <lastmod>2026-05-12</lastmod>
@@ -20,6 +24,10 @@
     <loc>https://travel-china.example.com/guide/notes</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
+  <url>
+    <loc>https://travel-china.example.com/plan</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
   <url>
     <loc>https://travel-china.example.com/share</loc>
     <lastmod>2026-05-12</lastmod>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index ca6de53..9ccc216 100644
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -7,9 +7,11 @@ export default {
     return [
       "/",
       "/map",
+      "/phrasebook",
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
+      "/plan",
       "/share",
       "/ask",
       "/sources",
diff --git a/v2/src/App.tsx b/v2/src/App.tsx
index 69ed13e..c00e5fd 100644
--- a/v2/src/App.tsx
+++ b/v2/src/App.tsx
@@ -6,6 +6,7 @@ import SiteFooter from "./components/layout/SiteFooter";
 import HomePage from "./pages/HomePage";
 import CityPage from "./pages/CityPage";
 import GuidePage from "./pages/GuidePage";
+import PlanPage from "./pages/PlanPage";
 import MapPage from "./pages/MapPage";
 import SharePage from "./pages/SharePage";
 import AskPage from "./pages/AskPage";
@@ -21,6 +22,7 @@ export default function App() {
             <Route path="/" element={<HomePage />} />
             <Route path="/map" element={<MapPage />} />
             <Route path="/guide/:topic" element={<GuidePage />} />
+            <Route path="/plan" element={<PlanPage />} />
             <Route path="/city/:cityId" element={<CityPage />} />
             <Route path="/share" element={<SharePage />} />
             <Route path="/ask" element={<AskPage />} />
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 6df6ebf..d60efc7 100644
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -11,7 +11,9 @@ const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 const guideLinks = [
   { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
   { to: "/guide/payments", en: "Payments", zh: "支付准备" },
-  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
+  { to: "/plan", en: "3-day plan", zh: "3 天行程" },
+  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
+  { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
 ];
 
 const websiteJsonLd = {
@@ -113,7 +115,7 @@ export default function HomePage() {
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-3">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index e04b8ab..72665b7 100644
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -3,7 +3,9 @@ import { type RouteConfig, index, route } from "@react-router/dev/routes";
 export default [
   index("./pages/HomePage.tsx"),
   route("map", "./pages/MapPage.tsx"),
+  route("phrasebook", "./pages/PhrasebookPage.tsx"),
   route("guide/:topic", "./pages/GuidePage.tsx"),
+  route("plan", "./pages/PlanPage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),
warning: in the working copy of 'v2/public/sitemap.xml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/react-router.config.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/App.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/pages/HomePage.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/routes.ts', LF will be replaced by CRLF the next time Git touches it

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
 succeeded in 1441ms:
diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index adfcabaa94592bf2c136f0a522a2a633d6e892bf..01ba965ae5de7e27b97c51317ba2afce181c984c
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -25,6 +25,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/plan</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/share</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 0be050a497672fd006dcf773952ba991e41cd9e4..9ccc216dce515307f4c067703ced3257a98dc3db
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -11,6 +11,7 @@
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
+      "/plan",
       "/share",
       "/ask",
       "/sources",
diff --git a/v2/src/App.tsx b/v2/src/App.tsx
index 69ed13e175cd85b0a160c8713b63a2cb970e5b5b..c00e5fddf321e2d1fe4289cef4c9ebcaae02cccd
--- a/v2/src/App.tsx
+++ b/v2/src/App.tsx
@@ -4,9 +4,10 @@
 import SiteHeader from "./components/layout/SiteHeader";
 import SiteFooter from "./components/layout/SiteFooter";
 import HomePage from "./pages/HomePage";
-import CityPage from "./pages/CityPage";
-import GuidePage from "./pages/GuidePage";
-import MapPage from "./pages/MapPage";
+import CityPage from "./pages/CityPage";
+import GuidePage from "./pages/GuidePage";
+import PlanPage from "./pages/PlanPage";
+import MapPage from "./pages/MapPage";
 import SharePage from "./pages/SharePage";
 import AskPage from "./pages/AskPage";
 import SourcesPage from "./pages/SourcesPage";
@@ -19,9 +20,10 @@
           <SiteHeader />
           <Routes>
             <Route path="/" element={<HomePage />} />
-            <Route path="/map" element={<MapPage />} />
-            <Route path="/guide/:topic" element={<GuidePage />} />
-            <Route path="/city/:cityId" element={<CityPage />} />
+            <Route path="/map" element={<MapPage />} />
+            <Route path="/guide/:topic" element={<GuidePage />} />
+            <Route path="/plan" element={<PlanPage />} />
+            <Route path="/city/:cityId" element={<CityPage />} />
             <Route path="/share" element={<SharePage />} />
             <Route path="/ask" element={<AskPage />} />
             <Route path="/sources" element={<SourcesPage />} />
diff --git a/v2/src/data/itineraries.ts b/v2/src/data/itineraries.ts
new file mode 100644
index 0000000000000000000000000000000000000000..3ef655ae3f22669342580f14288cb67f05c73171
--- /dev/null
+++ b/v2/src/data/itineraries.ts
@@ -0,0 +1,302 @@
+import type { CityId } from "./transport";
+
+export type ItineraryDay = {
+  dayNumber: 1 | 2 | 3;
+  themeEn: string;
+  themeZh: string;
+  morning: { en: string; zh: string; attractionId?: string };
+  afternoon: { en: string; zh: string; attractionId?: string };
+  evening: { en: string; zh: string; attractionId?: string };
+  travelTipEn: string;
+  travelTipZh: string;
+};
+
+export type CityItinerary = {
+  cityId: CityId;
+  subtitleEn: string;
+  subtitleZh: string;
+  days: ItineraryDay[];
+};
+
+export const cityItineraries: CityItinerary[] = [
+  {
+    cityId: "beijing",
+    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
+    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Imperial axis first",
+        themeZh: "先看皇城中轴线",
+        morning: {
+          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
+          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
+          attractionId: "bj-forbidden-city"
+        },
+        afternoon: {
+          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
+          zh: "午后转到天安门广场，预留安检和拍照时间。",
+          attractionId: "bj-tiananmen"
+        },
+        evening: {
+          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
+          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
+        },
+        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
+        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Temples, gardens, and hutongs",
+        themeZh: "寺庙、园林与胡同",
+        morning: {
+          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
+          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
+          attractionId: "bj-temple-of-heaven"
+        },
+        afternoon: {
+          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
+          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
+          attractionId: "bj-lama-temple"
+        },
+        evening: {
+          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
+          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
+        },
+        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
+        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Great Wall day with a soft landing",
+        themeZh: "长城一日与轻松收尾",
+        morning: {
+          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
+          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
+          attractionId: "bj-mutianyu"
+        },
+        afternoon: {
+          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
+          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
+          attractionId: "bj-summer-palace"
+        },
+        evening: {
+          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
+          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
+        },
+        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
+        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
+    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Old Shanghai to neon Shanghai",
+        themeZh: "从老上海到霓虹上海",
+        morning: {
+          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
+          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
+          attractionId: "sh-bund"
+        },
+        afternoon: {
+          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
+          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
+          attractionId: "sh-yu-garden"
+        },
+        evening: {
+          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
+          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
+        },
+        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
+        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Museums and plane-tree streets",
+        themeZh: "博物馆与梧桐街区",
+        morning: {
+          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
+          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
+          attractionId: "sh-museum"
+        },
+        afternoon: {
+          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
+          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
+          attractionId: "sh-wukang"
+        },
+        evening: {
+          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
+          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
+        },
+        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
+        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Pudong skyline and river contrast",
+        themeZh: "浦东天际线与江岸对照",
+        morning: {
+          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
+          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
+          attractionId: "sh-lujiazui"
+        },
+        afternoon: {
+          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
+          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
+          attractionId: "sh-shanghai-tower"
+        },
+        evening: {
+          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
+          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
+        },
+        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
+        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
+    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Lingnan craft and first skyline view",
+        themeZh: "岭南工艺与第一眼天际线",
+        morning: {
+          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
+          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
+          attractionId: "gz-chen-clan"
+        },
+        afternoon: {
+          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
+          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
+          attractionId: "gz-shamian"
+        },
+        evening: {
+          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
+          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
+          attractionId: "gz-canton-tower"
+        },
+        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
+        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Old city breakfast and civic landmarks",
+        themeZh: "老城早茶与城市地标",
+        morning: {
+          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
+          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
+          attractionId: "gz-yuexiu-park"
+        },
+        afternoon: {
+          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
+          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
+          attractionId: "gz-baiyun-mountain"
+        },
+        evening: {
+          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
+          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
+        },
+        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
+        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Markets, museums, and Pearl River night",
+        themeZh: "市场、博物馆与珠江夜色",
+        morning: {
+          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
+          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
+        },
+        afternoon: {
+          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
+          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
+        },
+        evening: {
+          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
+          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
+          attractionId: "gz-pearl-river"
+        },
+        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
+        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
+    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "OCT cluster and Shekou night",
+        themeZh: "华侨城组团与蛇口夜晚",
+        morning: {
+          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
+          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
+          attractionId: "sz-window-of-the-world"
+        },
+        afternoon: {
+          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
+          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
+          attractionId: "sz-octloft"
+        },
+        evening: {
+          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
+          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
+          attractionId: "sz-sea-world"
+        },
+        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
+        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Reform-era city views and beach air",
+        themeZh: "改革城市视角与海边空气",
+        morning: {
+          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
+          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
+          attractionId: "sz-lianhuashan"
+        },
+        afternoon: {
+          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
+          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
+          attractionId: "sz-dameisha"
+        },
+        evening: {
+          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
+          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
+        },
+        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
+        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Dapeng coast and historic village",
+        themeZh: "大鹏海岸与古城",
+        morning: {
+          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
+          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
+          attractionId: "sz-dapeng"
+        },
+        afternoon: {
+          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
+          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
+        },
+        evening: {
+          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
+          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
+        },
+        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
+        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
+      }
+    ]
+  }
+];
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 36d357304a97629e5ccc913861cdd7243596c527..d60efc774498ca2404260eed90705a9bfbe64b69
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -11,6 +11,7 @@
 const guideLinks = [
   { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
   { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/plan", en: "3-day plan", zh: "3 天行程" },
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
   { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
 ];
@@ -114,7 +115,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PlanPage.tsx b/v2/src/pages/PlanPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..0c28acdf91cad0fa901bf7c1574b7e262bfe34dc
--- /dev/null
+++ b/v2/src/pages/PlanPage.tsx
@@ -0,0 +1,176 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { cityItineraries, type ItineraryDay } from "../data/itineraries";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
+
+type TimeSlotKey = "morning" | "afternoon" | "evening";
+
+const TIME_SLOTS: Array<{ key: TimeSlotKey; labelEn: string; labelZh: string }> = [
+  { key: "morning", labelEn: "Morning", labelZh: "上午" },
+  { key: "afternoon", labelEn: "Afternoon", labelZh: "下午" },
+  { key: "evening", labelEn: "Evening", labelZh: "晚上" }
+];
+
+const planBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "3-day plan", path: "/plan" }
+]);
+
+export default function PlanPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeCityId, setActiveCityId] = useState<CityId>("beijing");
+  const activeItinerary = cityItineraries.find((itinerary) => itinerary.cityId === activeCityId) ?? cityItineraries[0];
+  const activeCity = CITY_LABELS[activeItinerary.cityId];
+
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(planBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-8 sm:py-10">
+        <header className="flex flex-col gap-3">
+          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+            {isZh ? "← 返回首页" : "← Home"}
+          </Link>
+          <div className="flex flex-col gap-2">
+            <span className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "Trip Planner" : "Trip Planner"}
+            </span>
+            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+              {isZh ? "3 天行程" : "3-day plan"}
+            </h1>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
+              {isZh
+                ? "四个入门城市各有一份三天模板：每天按上午、下午、晚上拆开，适合第一次来中国时快速落地。"
+                : "A practical three-day template for each first-time city, split into morning, afternoon, and evening blocks."}
+            </p>
+          </div>
+        </header>
+
+        <div
+          role="tablist"
+          aria-label={isZh ? "选择城市行程" : "Choose a city itinerary"}
+          className="flex gap-2 overflow-x-auto rounded-lg border border-line bg-white p-2"
+        >
+          {cityItineraries.map((itinerary) => {
+            const city = CITY_LABELS[itinerary.cityId];
+            const isActive = itinerary.cityId === activeCityId;
+
+            return (
+              <button
+                key={itinerary.cityId}
+                type="button"
+                role="tab"
+                id={`plan-tab-${itinerary.cityId}`}
+                aria-selected={isActive}
+                aria-controls={`plan-panel-${itinerary.cityId}`}
+                onClick={() => setActiveCityId(itinerary.cityId)}
+                className={clsx(
+                  "min-w-28 rounded-md border px-4 py-2 text-left text-sm font-bold transition",
+                  isActive
+                    ? "border-ink bg-ink text-white"
+                    : "border-transparent bg-paper text-ink hover:border-jade hover:text-jade"
+                )}
+              >
+                <span className="block">{isZh ? city.zh : city.en}</span>
+                <span className={clsx("block text-[11px] font-normal", isActive ? "text-white/70" : "text-muted")}>
+                  {isZh ? city.en : city.zh}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <section
+          role="tabpanel"
+          id={`plan-panel-${activeItinerary.cityId}`}
+          aria-labelledby={`plan-tab-${activeItinerary.cityId}`}
+          className="flex flex-col gap-6"
+        >
+          <header className="flex flex-col gap-1">
+            <p className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "当前城市" : "Current city"}
+            </p>
+            <h2 className="text-2xl font-bold">{isZh ? activeCity.zh : activeCity.en}</h2>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted">
+              {isZh ? activeItinerary.subtitleZh : activeItinerary.subtitleEn}
+            </p>
+          </header>
+
+          <div className="flex flex-col gap-8">
+            {activeItinerary.days.map((day) => (
+              <section key={day.dayNumber} className="flex flex-col gap-3">
+                <div className="flex flex-col gap-1 border-b border-line pb-3">
+                  <span className="text-xs font-bold uppercase tracking-widest text-jade">
+                    {isZh ? `第 ${day.dayNumber} 天` : `Day ${day.dayNumber}`}
+                  </span>
+                  <h3 className="text-xl font-bold">{isZh ? day.themeZh : day.themeEn}</h3>
+                </div>
+                <div className="flex flex-col gap-3">
+                  {TIME_SLOTS.map((slot) => (
+                    <PlanActivityCard
+                      key={slot.key}
+                      cityId={activeItinerary.cityId}
+                      day={day}
+                      slot={slot}
+                      isZh={isZh}
+                    />
+                  ))}
+                </div>
+              </section>
+            ))}
+          </div>
+        </section>
+      </main>
+    </>
+  );
+}
+
+function PlanActivityCard({
+  cityId,
+  day,
+  slot,
+  isZh
+}: {
+  cityId: CityId;
+  day: ItineraryDay;
+  slot: { key: TimeSlotKey; labelEn: string; labelZh: string };
+  isZh: boolean;
+}) {
+  const activity = day[slot.key];
+
+  return (
+    <article className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
+      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
+        <div className="flex min-w-0 flex-col gap-1">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            {isZh ? slot.labelZh : slot.labelEn}
+          </span>
+          <h4 className="break-words text-lg font-bold leading-tight">
+            {isZh ? day.themeZh : day.themeEn}
+          </h4>
+        </div>
+        {activity.attractionId && (
+          <Link
+            to={`/city/${cityId}#intro`}
+            className="shrink-0 text-xs font-bold uppercase tracking-widest text-jade hover:underline"
+          >
+            {isZh ? "查看景点" : "Attraction"}
+          </Link>
+        )}
+      </div>
+
+      <p className="text-sm leading-relaxed text-ink/85">{isZh ? activity.zh : activity.en}</p>
+
+      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
+        <strong className="mr-1">{isZh ? "提示：" : "Tip:"}</strong>
+        {isZh ? day.travelTipZh : day.travelTipEn}
+      </div>
+    </article>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index b9b696df6fa00bc391d8df10bdbce96dcabd580c..72665b74751f0c4660717cb649943229e26f621f
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -5,7 +5,8 @@
   route("map", "./pages/MapPage.tsx"),
   route("phrasebook", "./pages/PhrasebookPage.tsx"),
   route("guide/:topic", "./pages/GuidePage.tsx"),
-  route("city/:cityId", "./pages/CityPage.tsx"),
+  route("plan", "./pages/PlanPage.tsx"),
+  route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),
   route("sources", "./pages/SourcesPage.tsx"),

codex
`npx tsc --noEmit` 已通过，无输出。现在跑 `npm run build`，这一步会同时验证 React Router 预渲染 `/plan`。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 8487ms:

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

[32m✓ built in 4.69s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 77 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\server-build-DFSdV8o5.css[22m
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m

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

[32m✓ built in 772ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:virtual-modules (41%)
  - react-router:dot-server (36%)
  - react-router:inject-hmr-runtime (14%)
  - react-router:hmr-runtime (5%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index adfcabaa94592bf2c136f0a522a2a633d6e892bf..01ba965ae5de7e27b97c51317ba2afce181c984c
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -25,6 +25,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/plan</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/share</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 0be050a497672fd006dcf773952ba991e41cd9e4..9ccc216dce515307f4c067703ced3257a98dc3db
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -11,6 +11,7 @@
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
+      "/plan",
       "/share",
       "/ask",
       "/sources",
diff --git a/v2/src/App.tsx b/v2/src/App.tsx
index 69ed13e175cd85b0a160c8713b63a2cb970e5b5b..c00e5fddf321e2d1fe4289cef4c9ebcaae02cccd
--- a/v2/src/App.tsx
+++ b/v2/src/App.tsx
@@ -4,9 +4,10 @@
 import SiteHeader from "./components/layout/SiteHeader";
 import SiteFooter from "./components/layout/SiteFooter";
 import HomePage from "./pages/HomePage";
-import CityPage from "./pages/CityPage";
-import GuidePage from "./pages/GuidePage";
-import MapPage from "./pages/MapPage";
+import CityPage from "./pages/CityPage";
+import GuidePage from "./pages/GuidePage";
+import PlanPage from "./pages/PlanPage";
+import MapPage from "./pages/MapPage";
 import SharePage from "./pages/SharePage";
 import AskPage from "./pages/AskPage";
 import SourcesPage from "./pages/SourcesPage";
@@ -19,9 +20,10 @@
           <SiteHeader />
           <Routes>
             <Route path="/" element={<HomePage />} />
-            <Route path="/map" element={<MapPage />} />
-            <Route path="/guide/:topic" element={<GuidePage />} />
-            <Route path="/city/:cityId" element={<CityPage />} />
+            <Route path="/map" element={<MapPage />} />
+            <Route path="/guide/:topic" element={<GuidePage />} />
+            <Route path="/plan" element={<PlanPage />} />
+            <Route path="/city/:cityId" element={<CityPage />} />
             <Route path="/share" element={<SharePage />} />
             <Route path="/ask" element={<AskPage />} />
             <Route path="/sources" element={<SourcesPage />} />
diff --git a/v2/src/data/itineraries.ts b/v2/src/data/itineraries.ts
new file mode 100644
index 0000000000000000000000000000000000000000..3ef655ae3f22669342580f14288cb67f05c73171
--- /dev/null
+++ b/v2/src/data/itineraries.ts
@@ -0,0 +1,302 @@
+import type { CityId } from "./transport";
+
+export type ItineraryDay = {
+  dayNumber: 1 | 2 | 3;
+  themeEn: string;
+  themeZh: string;
+  morning: { en: string; zh: string; attractionId?: string };
+  afternoon: { en: string; zh: string; attractionId?: string };
+  evening: { en: string; zh: string; attractionId?: string };
+  travelTipEn: string;
+  travelTipZh: string;
+};
+
+export type CityItinerary = {
+  cityId: CityId;
+  subtitleEn: string;
+  subtitleZh: string;
+  days: ItineraryDay[];
+};
+
+export const cityItineraries: CityItinerary[] = [
+  {
+    cityId: "beijing",
+    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
+    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Imperial axis first",
+        themeZh: "先看皇城中轴线",
+        morning: {
+          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
+          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
+          attractionId: "bj-forbidden-city"
+        },
+        afternoon: {
+          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
+          zh: "午后转到天安门广场，预留安检和拍照时间。",
+          attractionId: "bj-tiananmen"
+        },
+        evening: {
+          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
+          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
+        },
+        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
+        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Temples, gardens, and hutongs",
+        themeZh: "寺庙、园林与胡同",
+        morning: {
+          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
+          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
+          attractionId: "bj-temple-of-heaven"
+        },
+        afternoon: {
+          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
+          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
+          attractionId: "bj-lama-temple"
+        },
+        evening: {
+          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
+          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
+        },
+        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
+        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Great Wall day with a soft landing",
+        themeZh: "长城一日与轻松收尾",
+        morning: {
+          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
+          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
+          attractionId: "bj-mutianyu"
+        },
+        afternoon: {
+          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
+          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
+          attractionId: "bj-summer-palace"
+        },
+        evening: {
+          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
+          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
+        },
+        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
+        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
+    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Old Shanghai to neon Shanghai",
+        themeZh: "从老上海到霓虹上海",
+        morning: {
+          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
+          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
+          attractionId: "sh-bund"
+        },
+        afternoon: {
+          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
+          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
+          attractionId: "sh-yu-garden"
+        },
+        evening: {
+          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
+          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
+        },
+        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
+        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Museums and plane-tree streets",
+        themeZh: "博物馆与梧桐街区",
+        morning: {
+          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
+          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
+          attractionId: "sh-museum"
+        },
+        afternoon: {
+          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
+          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
+          attractionId: "sh-wukang"
+        },
+        evening: {
+          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
+          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
+        },
+        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
+        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Pudong skyline and river contrast",
+        themeZh: "浦东天际线与江岸对照",
+        morning: {
+          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
+          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
+          attractionId: "sh-lujiazui"
+        },
+        afternoon: {
+          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
+          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
+          attractionId: "sh-shanghai-tower"
+        },
+        evening: {
+          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
+          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
+        },
+        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
+        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
+    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Lingnan craft and first skyline view",
+        themeZh: "岭南工艺与第一眼天际线",
+        morning: {
+          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
+          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
+          attractionId: "gz-chen-clan"
+        },
+        afternoon: {
+          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
+          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
+          attractionId: "gz-shamian"
+        },
+        evening: {
+          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
+          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
+          attractionId: "gz-canton-tower"
+        },
+        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
+        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Old city breakfast and civic landmarks",
+        themeZh: "老城早茶与城市地标",
+        morning: {
+          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
+          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
+          attractionId: "gz-yuexiu-park"
+        },
+        afternoon: {
+          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
+          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
+          attractionId: "gz-baiyun-mountain"
+        },
+        evening: {
+          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
+          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
+        },
+        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
+        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Markets, museums, and Pearl River night",
+        themeZh: "市场、博物馆与珠江夜色",
+        morning: {
+          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
+          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
+        },
+        afternoon: {
+          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
+          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
+        },
+        evening: {
+          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
+          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
+          attractionId: "gz-pearl-river"
+        },
+        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
+        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
+    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "OCT cluster and Shekou night",
+        themeZh: "华侨城组团与蛇口夜晚",
+        morning: {
+          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
+          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
+          attractionId: "sz-window-of-the-world"
+        },
+        afternoon: {
+          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
+          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
+          attractionId: "sz-octloft"
+        },
+        evening: {
+          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
+          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
+          attractionId: "sz-sea-world"
+        },
+        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
+        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Reform-era city views and beach air",
+        themeZh: "改革城市视角与海边空气",
+        morning: {
+          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
+          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
+          attractionId: "sz-lianhuashan"
+        },
+        afternoon: {
+          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
+          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
+          attractionId: "sz-dameisha"
+        },
+        evening: {
+          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
+          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
+        },
+        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
+        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Dapeng coast and historic village",
+        themeZh: "大鹏海岸与古城",
+        morning: {
+          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
+          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
+          attractionId: "sz-dapeng"
+        },
+        afternoon: {
+          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
+          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
+        },
+        evening: {
+          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
+          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
+        },
+        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
+        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
+      }
+    ]
+  }
+];
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 36d357304a97629e5ccc913861cdd7243596c527..d60efc774498ca2404260eed90705a9bfbe64b69
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -11,6 +11,7 @@
 const guideLinks = [
   { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
   { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/plan", en: "3-day plan", zh: "3 天行程" },
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
   { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
 ];
@@ -114,7 +115,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PlanPage.tsx b/v2/src/pages/PlanPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..0c28acdf91cad0fa901bf7c1574b7e262bfe34dc
--- /dev/null
+++ b/v2/src/pages/PlanPage.tsx
@@ -0,0 +1,176 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { cityItineraries, type ItineraryDay } from "../data/itineraries";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
+
+type TimeSlotKey = "morning" | "afternoon" | "evening";
+
+const TIME_SLOTS: Array<{ key: TimeSlotKey; labelEn: string; labelZh: string }> = [
+  { key: "morning", labelEn: "Morning", labelZh: "上午" },
+  { key: "afternoon", labelEn: "Afternoon", labelZh: "下午" },
+  { key: "evening", labelEn: "Evening", labelZh: "晚上" }
+];
+
+const planBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "3-day plan", path: "/plan" }
+]);
+
+export default function PlanPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeCityId, setActiveCityId] = useState<CityId>("beijing");
+  const activeItinerary = cityItineraries.find((itinerary) => itinerary.cityId === activeCityId) ?? cityItineraries[0];
+  const activeCity = CITY_LABELS[activeItinerary.cityId];
+
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(planBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-8 sm:py-10">
+        <header className="flex flex-col gap-3">
+          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+            {isZh ? "← 返回首页" : "← Home"}
+          </Link>
+          <div className="flex flex-col gap-2">
+            <span className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "Trip Planner" : "Trip Planner"}
+            </span>
+            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+              {isZh ? "3 天行程" : "3-day plan"}
+            </h1>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
+              {isZh
+                ? "四个入门城市各有一份三天模板：每天按上午、下午、晚上拆开，适合第一次来中国时快速落地。"
+                : "A practical three-day template for each first-time city, split into morning, afternoon, and evening blocks."}
+            </p>
+          </div>
+        </header>
+
+        <div
+          role="tablist"
+          aria-label={isZh ? "选择城市行程" : "Choose a city itinerary"}
+          className="flex gap-2 overflow-x-auto rounded-lg border border-line bg-white p-2"
+        >
+          {cityItineraries.map((itinerary) => {
+            const city = CITY_LABELS[itinerary.cityId];
+            const isActive = itinerary.cityId === activeCityId;
+
+            return (
+              <button
+                key={itinerary.cityId}
+                type="button"
+                role="tab"
+                id={`plan-tab-${itinerary.cityId}`}
+                aria-selected={isActive}
+                aria-controls={`plan-panel-${itinerary.cityId}`}
+                onClick={() => setActiveCityId(itinerary.cityId)}
+                className={clsx(
+                  "min-w-28 rounded-md border px-4 py-2 text-left text-sm font-bold transition",
+                  isActive
+                    ? "border-ink bg-ink text-white"
+                    : "border-transparent bg-paper text-ink hover:border-jade hover:text-jade"
+                )}
+              >
+                <span className="block">{isZh ? city.zh : city.en}</span>
+                <span className={clsx("block text-[11px] font-normal", isActive ? "text-white/70" : "text-muted")}>
+                  {isZh ? city.en : city.zh}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <section
+          role="tabpanel"
+          id={`plan-panel-${activeItinerary.cityId}`}
+          aria-labelledby={`plan-tab-${activeItinerary.cityId}`}
+          className="flex flex-col gap-6"
+        >
+          <header className="flex flex-col gap-1">
+            <p className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "当前城市" : "Current city"}
+            </p>
+            <h2 className="text-2xl font-bold">{isZh ? activeCity.zh : activeCity.en}</h2>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted">
+              {isZh ? activeItinerary.subtitleZh : activeItinerary.subtitleEn}
+            </p>
+          </header>
+
+          <div className="flex flex-col gap-8">
+            {activeItinerary.days.map((day) => (
+              <section key={day.dayNumber} className="flex flex-col gap-3">
+                <div className="flex flex-col gap-1 border-b border-line pb-3">
+                  <span className="text-xs font-bold uppercase tracking-widest text-jade">
+                    {isZh ? `第 ${day.dayNumber} 天` : `Day ${day.dayNumber}`}
+                  </span>
+                  <h3 className="text-xl font-bold">{isZh ? day.themeZh : day.themeEn}</h3>
+                </div>
+                <div className="flex flex-col gap-3">
+                  {TIME_SLOTS.map((slot) => (
+                    <PlanActivityCard
+                      key={slot.key}
+                      cityId={activeItinerary.cityId}
+                      day={day}
+                      slot={slot}
+                      isZh={isZh}
+                    />
+                  ))}
+                </div>
+              </section>
+            ))}
+          </div>
+        </section>
+      </main>
+    </>
+  );
+}
+
+function PlanActivityCard({
+  cityId,
+  day,
+  slot,
+  isZh
+}: {
+  cityId: CityId;
+  day: ItineraryDay;
+  slot: { key: TimeSlotKey; labelEn: string; labelZh: string };
+  isZh: boolean;
+}) {
+  const activity = day[slot.key];
+
+  return (
+    <article className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
+      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
+        <div className="flex min-w-0 flex-col gap-1">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            {isZh ? slot.labelZh : slot.labelEn}
+          </span>
+          <h4 className="break-words text-lg font-bold leading-tight">
+            {isZh ? day.themeZh : day.themeEn}
+          </h4>
+        </div>
+        {activity.attractionId && (
+          <Link
+            to={`/city/${cityId}#intro`}
+            className="shrink-0 text-xs font-bold uppercase tracking-widest text-jade hover:underline"
+          >
+            {isZh ? "查看景点" : "Attraction"}
+          </Link>
+        )}
+      </div>
+
+      <p className="text-sm leading-relaxed text-ink/85">{isZh ? activity.zh : activity.en}</p>
+
+      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
+        <strong className="mr-1">{isZh ? "提示：" : "Tip:"}</strong>
+        {isZh ? day.travelTipZh : day.travelTipEn}
+      </div>
+    </article>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index b9b696df6fa00bc391d8df10bdbce96dcabd580c..72665b74751f0c4660717cb649943229e26f621f
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -5,7 +5,8 @@
   route("map", "./pages/MapPage.tsx"),
   route("phrasebook", "./pages/PhrasebookPage.tsx"),
   route("guide/:topic", "./pages/GuidePage.tsx"),
-  route("city/:cityId", "./pages/CityPage.tsx"),
+  route("plan", "./pages/PlanPage.tsx"),
+  route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),
   route("sources", "./pages/SourcesPage.tsx"),

  ✓ Audit existing routes, data, homepage patterns
  ✓ Add itinerary data and PlanPage UI
  ✓ Wire /plan into routes, prerender, sitemap, homepage
  ✓ Run typecheck and production build
diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index adfcabaa94592bf2c136f0a522a2a633d6e892bf..01ba965ae5de7e27b97c51317ba2afce181c984c
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -25,6 +25,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/plan</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/share</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 0be050a497672fd006dcf773952ba991e41cd9e4..9ccc216dce515307f4c067703ced3257a98dc3db
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -11,6 +11,7 @@
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
+      "/plan",
       "/share",
       "/ask",
       "/sources",
diff --git a/v2/src/App.tsx b/v2/src/App.tsx
index 69ed13e175cd85b0a160c8713b63a2cb970e5b5b..c00e5fddf321e2d1fe4289cef4c9ebcaae02cccd
--- a/v2/src/App.tsx
+++ b/v2/src/App.tsx
@@ -4,9 +4,10 @@
 import SiteHeader from "./components/layout/SiteHeader";
 import SiteFooter from "./components/layout/SiteFooter";
 import HomePage from "./pages/HomePage";
-import CityPage from "./pages/CityPage";
-import GuidePage from "./pages/GuidePage";
-import MapPage from "./pages/MapPage";
+import CityPage from "./pages/CityPage";
+import GuidePage from "./pages/GuidePage";
+import PlanPage from "./pages/PlanPage";
+import MapPage from "./pages/MapPage";
 import SharePage from "./pages/SharePage";
 import AskPage from "./pages/AskPage";
 import SourcesPage from "./pages/SourcesPage";
@@ -19,9 +20,10 @@
           <SiteHeader />
           <Routes>
             <Route path="/" element={<HomePage />} />
-            <Route path="/map" element={<MapPage />} />
-            <Route path="/guide/:topic" element={<GuidePage />} />
-            <Route path="/city/:cityId" element={<CityPage />} />
+            <Route path="/map" element={<MapPage />} />
+            <Route path="/guide/:topic" element={<GuidePage />} />
+            <Route path="/plan" element={<PlanPage />} />
+            <Route path="/city/:cityId" element={<CityPage />} />
             <Route path="/share" element={<SharePage />} />
             <Route path="/ask" element={<AskPage />} />
             <Route path="/sources" element={<SourcesPage />} />
diff --git a/v2/src/data/itineraries.ts b/v2/src/data/itineraries.ts
new file mode 100644
index 0000000000000000000000000000000000000000..3ef655ae3f22669342580f14288cb67f05c73171
--- /dev/null
+++ b/v2/src/data/itineraries.ts
@@ -0,0 +1,302 @@
+import type { CityId } from "./transport";
+
+export type ItineraryDay = {
+  dayNumber: 1 | 2 | 3;
+  themeEn: string;
+  themeZh: string;
+  morning: { en: string; zh: string; attractionId?: string };
+  afternoon: { en: string; zh: string; attractionId?: string };
+  evening: { en: string; zh: string; attractionId?: string };
+  travelTipEn: string;
+  travelTipZh: string;
+};
+
+export type CityItinerary = {
+  cityId: CityId;
+  subtitleEn: string;
+  subtitleZh: string;
+  days: ItineraryDay[];
+};
+
+export const cityItineraries: CityItinerary[] = [
+  {
+    cityId: "beijing",
+    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
+    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Imperial axis first",
+        themeZh: "先看皇城中轴线",
+        morning: {
+          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
+          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
+          attractionId: "bj-forbidden-city"
+        },
+        afternoon: {
+          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
+          zh: "午后转到天安门广场，预留安检和拍照时间。",
+          attractionId: "bj-tiananmen"
+        },
+        evening: {
+          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
+          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
+        },
+        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
+        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Temples, gardens, and hutongs",
+        themeZh: "寺庙、园林与胡同",
+        morning: {
+          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
+          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
+          attractionId: "bj-temple-of-heaven"
+        },
+        afternoon: {
+          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
+          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
+          attractionId: "bj-lama-temple"
+        },
+        evening: {
+          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
+          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
+        },
+        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
+        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Great Wall day with a soft landing",
+        themeZh: "长城一日与轻松收尾",
+        morning: {
+          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
+          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
+          attractionId: "bj-mutianyu"
+        },
+        afternoon: {
+          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
+          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
+          attractionId: "bj-summer-palace"
+        },
+        evening: {
+          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
+          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
+        },
+        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
+        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
+    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Old Shanghai to neon Shanghai",
+        themeZh: "从老上海到霓虹上海",
+        morning: {
+          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
+          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
+          attractionId: "sh-bund"
+        },
+        afternoon: {
+          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
+          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
+          attractionId: "sh-yu-garden"
+        },
+        evening: {
+          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
+          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
+        },
+        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
+        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Museums and plane-tree streets",
+        themeZh: "博物馆与梧桐街区",
+        morning: {
+          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
+          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
+          attractionId: "sh-museum"
+        },
+        afternoon: {
+          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
+          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
+          attractionId: "sh-wukang"
+        },
+        evening: {
+          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
+          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
+        },
+        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
+        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Pudong skyline and river contrast",
+        themeZh: "浦东天际线与江岸对照",
+        morning: {
+          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
+          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
+          attractionId: "sh-lujiazui"
+        },
+        afternoon: {
+          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
+          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
+          attractionId: "sh-shanghai-tower"
+        },
+        evening: {
+          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
+          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
+        },
+        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
+        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
+    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Lingnan craft and first skyline view",
+        themeZh: "岭南工艺与第一眼天际线",
+        morning: {
+          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
+          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
+          attractionId: "gz-chen-clan"
+        },
+        afternoon: {
+          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
+          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
+          attractionId: "gz-shamian"
+        },
+        evening: {
+          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
+          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
+          attractionId: "gz-canton-tower"
+        },
+        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
+        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Old city breakfast and civic landmarks",
+        themeZh: "老城早茶与城市地标",
+        morning: {
+          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
+          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
+          attractionId: "gz-yuexiu-park"
+        },
+        afternoon: {
+          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
+          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
+          attractionId: "gz-baiyun-mountain"
+        },
+        evening: {
+          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
+          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
+        },
+        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
+        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Markets, museums, and Pearl River night",
+        themeZh: "市场、博物馆与珠江夜色",
+        morning: {
+          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
+          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
+        },
+        afternoon: {
+          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
+          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
+        },
+        evening: {
+          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
+          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
+          attractionId: "gz-pearl-river"
+        },
+        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
+        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
+    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "OCT cluster and Shekou night",
+        themeZh: "华侨城组团与蛇口夜晚",
+        morning: {
+          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
+          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
+          attractionId: "sz-window-of-the-world"
+        },
+        afternoon: {
+          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
+          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
+          attractionId: "sz-octloft"
+        },
+        evening: {
+          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
+          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
+          attractionId: "sz-sea-world"
+        },
+        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
+        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Reform-era city views and beach air",
+        themeZh: "改革城市视角与海边空气",
+        morning: {
+          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
+          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
+          attractionId: "sz-lianhuashan"
+        },
+        afternoon: {
+          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
+          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
+          attractionId: "sz-dameisha"
+        },
+        evening: {
+          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
+          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
+        },
+        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
+        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Dapeng coast and historic village",
+        themeZh: "大鹏海岸与古城",
+        morning: {
+          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
+          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
+          attractionId: "sz-dapeng"
+        },
+        afternoon: {
+          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
+          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
+        },
+        evening: {
+          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
+          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
+        },
+        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
+        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
+      }
+    ]
+  }
+];
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 36d357304a97629e5ccc913861cdd7243596c527..d60efc774498ca2404260eed90705a9bfbe64b69
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -11,6 +11,7 @@
 const guideLinks = [
   { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
   { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/plan", en: "3-day plan", zh: "3 天行程" },
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
   { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
 ];
@@ -114,7 +115,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PlanPage.tsx b/v2/src/pages/PlanPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..0c28acdf91cad0fa901bf7c1574b7e262bfe34dc
--- /dev/null
+++ b/v2/src/pages/PlanPage.tsx
@@ -0,0 +1,176 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { cityItineraries, type ItineraryDay } from "../data/itineraries";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
+
+type TimeSlotKey = "morning" | "afternoon" | "evening";
+
+const TIME_SLOTS: Array<{ key: TimeSlotKey; labelEn: string; labelZh: string }> = [
+  { key: "morning", labelEn: "Morning", labelZh: "上午" },
+  { key: "afternoon", labelEn: "Afternoon", labelZh: "下午" },
+  { key: "evening", labelEn: "Evening", labelZh: "晚上" }
+];
+
+const planBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "3-day plan", path: "/plan" }
+]);
+
+export default function PlanPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeCityId, setActiveCityId] = useState<CityId>("beijing");
+  const activeItinerary = cityItineraries.find((itinerary) => itinerary.cityId === activeCityId) ?? cityItineraries[0];
+  const activeCity = CITY_LABELS[activeItinerary.cityId];
+
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(planBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-8 sm:py-10">
+        <header className="flex flex-col gap-3">
+          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+            {isZh ? "← 返回首页" : "← Home"}
+          </Link>
+          <div className="flex flex-col gap-2">
+            <span className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "Trip Planner" : "Trip Planner"}
+            </span>
+            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+              {isZh ? "3 天行程" : "3-day plan"}
+            </h1>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
+              {isZh
+                ? "四个入门城市各有一份三天模板：每天按上午、下午、晚上拆开，适合第一次来中国时快速落地。"
+                : "A practical three-day template for each first-time city, split into morning, afternoon, and evening blocks."}
+            </p>
+          </div>
+        </header>
+
+        <div
+          role="tablist"
+          aria-label={isZh ? "选择城市行程" : "Choose a city itinerary"}
+          className="flex gap-2 overflow-x-auto rounded-lg border border-line bg-white p-2"
+        >
+          {cityItineraries.map((itinerary) => {
+            const city = CITY_LABELS[itinerary.cityId];
+            const isActive = itinerary.cityId === activeCityId;
+
+            return (
+              <button
+                key={itinerary.cityId}
+                type="button"
+                role="tab"
+                id={`plan-tab-${itinerary.cityId}`}
+                aria-selected={isActive}
+                aria-controls={`plan-panel-${itinerary.cityId}`}
+                onClick={() => setActiveCityId(itinerary.cityId)}
+                className={clsx(
+                  "min-w-28 rounded-md border px-4 py-2 text-left text-sm font-bold transition",
+                  isActive
+                    ? "border-ink bg-ink text-white"
+                    : "border-transparent bg-paper text-ink hover:border-jade hover:text-jade"
+                )}
+              >
+                <span className="block">{isZh ? city.zh : city.en}</span>
+                <span className={clsx("block text-[11px] font-normal", isActive ? "text-white/70" : "text-muted")}>
+                  {isZh ? city.en : city.zh}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <section
+          role="tabpanel"
+          id={`plan-panel-${activeItinerary.cityId}`}
+          aria-labelledby={`plan-tab-${activeItinerary.cityId}`}
+          className="flex flex-col gap-6"
+        >
+          <header className="flex flex-col gap-1">
+            <p className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "当前城市" : "Current city"}
+            </p>
+            <h2 className="text-2xl font-bold">{isZh ? activeCity.zh : activeCity.en}</h2>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted">
+              {isZh ? activeItinerary.subtitleZh : activeItinerary.subtitleEn}
+            </p>
+          </header>
+
+          <div className="flex flex-col gap-8">
+            {activeItinerary.days.map((day) => (
+              <section key={day.dayNumber} className="flex flex-col gap-3">
+                <div className="flex flex-col gap-1 border-b border-line pb-3">
+                  <span className="text-xs font-bold uppercase tracking-widest text-jade">
+                    {isZh ? `第 ${day.dayNumber} 天` : `Day ${day.dayNumber}`}
+                  </span>
+                  <h3 className="text-xl font-bold">{isZh ? day.themeZh : day.themeEn}</h3>
+                </div>
+                <div className="flex flex-col gap-3">
+                  {TIME_SLOTS.map((slot) => (
+                    <PlanActivityCard
+                      key={slot.key}
+                      cityId={activeItinerary.cityId}
+                      day={day}
+                      slot={slot}
+                      isZh={isZh}
+                    />
+                  ))}
+                </div>
+              </section>
+            ))}
+          </div>
+        </section>
+      </main>
+    </>
+  );
+}
+
+function PlanActivityCard({
+  cityId,
+  day,
+  slot,
+  isZh
+}: {
+  cityId: CityId;
+  day: ItineraryDay;
+  slot: { key: TimeSlotKey; labelEn: string; labelZh: string };
+  isZh: boolean;
+}) {
+  const activity = day[slot.key];
+
+  return (
+    <article className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
+      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
+        <div className="flex min-w-0 flex-col gap-1">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            {isZh ? slot.labelZh : slot.labelEn}
+          </span>
+          <h4 className="break-words text-lg font-bold leading-tight">
+            {isZh ? day.themeZh : day.themeEn}
+          </h4>
+        </div>
+        {activity.attractionId && (
+          <Link
+            to={`/city/${cityId}#intro`}
+            className="shrink-0 text-xs font-bold uppercase tracking-widest text-jade hover:underline"
+          >
+            {isZh ? "查看景点" : "Attraction"}
+          </Link>
+        )}
+      </div>
+
+      <p className="text-sm leading-relaxed text-ink/85">{isZh ? activity.zh : activity.en}</p>
+
+      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
+        <strong className="mr-1">{isZh ? "提示：" : "Tip:"}</strong>
+        {isZh ? day.travelTipZh : day.travelTipEn}
+      </div>
+    </article>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index b9b696df6fa00bc391d8df10bdbce96dcabd580c..72665b74751f0c4660717cb649943229e26f621f
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -5,7 +5,8 @@
   route("map", "./pages/MapPage.tsx"),
   route("phrasebook", "./pages/PhrasebookPage.tsx"),
   route("guide/:topic", "./pages/GuidePage.tsx"),
-  route("city/:cityId", "./pages/CityPage.tsx"),
+  route("plan", "./pages/PlanPage.tsx"),
+  route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),
   route("sources", "./pages/SourcesPage.tsx"),

codex
`npm run build` 也通过，`/plan` 已实际 prerender 到 `build/client/plan/index.html`。构建只给了现有大 chunk/插件耗时提示，没有错误。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short' in c:\Users\h\Documents\New project 2\v2
 succeeded in 424ms:
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

diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index adfcabaa94592bf2c136f0a522a2a633d6e892bf..01ba965ae5de7e27b97c51317ba2afce181c984c
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -25,6 +25,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/plan</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/share</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 0be050a497672fd006dcf773952ba991e41cd9e4..9ccc216dce515307f4c067703ced3257a98dc3db
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -11,6 +11,7 @@
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
+      "/plan",
       "/share",
       "/ask",
       "/sources",
diff --git a/v2/src/App.tsx b/v2/src/App.tsx
index 69ed13e175cd85b0a160c8713b63a2cb970e5b5b..c00e5fddf321e2d1fe4289cef4c9ebcaae02cccd
--- a/v2/src/App.tsx
+++ b/v2/src/App.tsx
@@ -4,9 +4,10 @@
 import SiteHeader from "./components/layout/SiteHeader";
 import SiteFooter from "./components/layout/SiteFooter";
 import HomePage from "./pages/HomePage";
-import CityPage from "./pages/CityPage";
-import GuidePage from "./pages/GuidePage";
-import MapPage from "./pages/MapPage";
+import CityPage from "./pages/CityPage";
+import GuidePage from "./pages/GuidePage";
+import PlanPage from "./pages/PlanPage";
+import MapPage from "./pages/MapPage";
 import SharePage from "./pages/SharePage";
 import AskPage from "./pages/AskPage";
 import SourcesPage from "./pages/SourcesPage";
@@ -19,9 +20,10 @@
           <SiteHeader />
           <Routes>
             <Route path="/" element={<HomePage />} />
-            <Route path="/map" element={<MapPage />} />
-            <Route path="/guide/:topic" element={<GuidePage />} />
-            <Route path="/city/:cityId" element={<CityPage />} />
+            <Route path="/map" element={<MapPage />} />
+            <Route path="/guide/:topic" element={<GuidePage />} />
+            <Route path="/plan" element={<PlanPage />} />
+            <Route path="/city/:cityId" element={<CityPage />} />
             <Route path="/share" element={<SharePage />} />
             <Route path="/ask" element={<AskPage />} />
             <Route path="/sources" element={<SourcesPage />} />
diff --git a/v2/src/data/itineraries.ts b/v2/src/data/itineraries.ts
new file mode 100644
index 0000000000000000000000000000000000000000..3ef655ae3f22669342580f14288cb67f05c73171
--- /dev/null
+++ b/v2/src/data/itineraries.ts
@@ -0,0 +1,302 @@
+import type { CityId } from "./transport";
+
+export type ItineraryDay = {
+  dayNumber: 1 | 2 | 3;
+  themeEn: string;
+  themeZh: string;
+  morning: { en: string; zh: string; attractionId?: string };
+  afternoon: { en: string; zh: string; attractionId?: string };
+  evening: { en: string; zh: string; attractionId?: string };
+  travelTipEn: string;
+  travelTipZh: string;
+};
+
+export type CityItinerary = {
+  cityId: CityId;
+  subtitleEn: string;
+  subtitleZh: string;
+  days: ItineraryDay[];
+};
+
+export const cityItineraries: CityItinerary[] = [
+  {
+    cityId: "beijing",
+    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
+    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Imperial axis first",
+        themeZh: "先看皇城中轴线",
+        morning: {
+          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
+          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
+          attractionId: "bj-forbidden-city"
+        },
+        afternoon: {
+          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
+          zh: "午后转到天安门广场，预留安检和拍照时间。",
+          attractionId: "bj-tiananmen"
+        },
+        evening: {
+          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
+          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
+        },
+        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
+        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Temples, gardens, and hutongs",
+        themeZh: "寺庙、园林与胡同",
+        morning: {
+          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
+          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
+          attractionId: "bj-temple-of-heaven"
+        },
+        afternoon: {
+          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
+          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
+          attractionId: "bj-lama-temple"
+        },
+        evening: {
+          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
+          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
+        },
+        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
+        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Great Wall day with a soft landing",
+        themeZh: "长城一日与轻松收尾",
+        morning: {
+          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
+          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
+          attractionId: "bj-mutianyu"
+        },
+        afternoon: {
+          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
+          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
+          attractionId: "bj-summer-palace"
+        },
+        evening: {
+          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
+          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
+        },
+        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
+        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
+    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Old Shanghai to neon Shanghai",
+        themeZh: "从老上海到霓虹上海",
+        morning: {
+          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
+          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
+          attractionId: "sh-bund"
+        },
+        afternoon: {
+          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
+          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
+          attractionId: "sh-yu-garden"
+        },
+        evening: {
+          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
+          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
+        },
+        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
+        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Museums and plane-tree streets",
+        themeZh: "博物馆与梧桐街区",
+        morning: {
+          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
+          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
+          attractionId: "sh-museum"
+        },
+        afternoon: {
+          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
+          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
+          attractionId: "sh-wukang"
+        },
+        evening: {
+          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
+          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
+        },
+        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
+        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Pudong skyline and river contrast",
+        themeZh: "浦东天际线与江岸对照",
+        morning: {
+          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
+          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
+          attractionId: "sh-lujiazui"
+        },
+        afternoon: {
+          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
+          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
+          attractionId: "sh-shanghai-tower"
+        },
+        evening: {
+          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
+          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
+        },
+        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
+        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
+    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Lingnan craft and first skyline view",
+        themeZh: "岭南工艺与第一眼天际线",
+        morning: {
+          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
+          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
+          attractionId: "gz-chen-clan"
+        },
+        afternoon: {
+          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
+          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
+          attractionId: "gz-shamian"
+        },
+        evening: {
+          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
+          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
+          attractionId: "gz-canton-tower"
+        },
+        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
+        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Old city breakfast and civic landmarks",
+        themeZh: "老城早茶与城市地标",
+        morning: {
+          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
+          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
+          attractionId: "gz-yuexiu-park"
+        },
+        afternoon: {
+          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
+          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
+          attractionId: "gz-baiyun-mountain"
+        },
+        evening: {
+          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
+          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
+        },
+        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
+        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Markets, museums, and Pearl River night",
+        themeZh: "市场、博物馆与珠江夜色",
+        morning: {
+          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
+          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
+        },
+        afternoon: {
+          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
+          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
+        },
+        evening: {
+          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
+          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
+          attractionId: "gz-pearl-river"
+        },
+        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
+        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
+    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "OCT cluster and Shekou night",
+        themeZh: "华侨城组团与蛇口夜晚",
+        morning: {
+          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
+          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
+          attractionId: "sz-window-of-the-world"
+        },
+        afternoon: {
+          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
+          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
+          attractionId: "sz-octloft"
+        },
+        evening: {
+          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
+          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
+          attractionId: "sz-sea-world"
+        },
+        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
+        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Reform-era city views and beach air",
+        themeZh: "改革城市视角与海边空气",
+        morning: {
+          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
+          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
+          attractionId: "sz-lianhuashan"
+        },
+        afternoon: {
+          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
+          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
+          attractionId: "sz-dameisha"
+        },
+        evening: {
+          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
+          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
+        },
+        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
+        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Dapeng coast and historic village",
+        themeZh: "大鹏海岸与古城",
+        morning: {
+          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
+          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
+          attractionId: "sz-dapeng"
+        },
+        afternoon: {
+          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
+          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
+        },
+        evening: {
+          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
+          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
+        },
+        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
+        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
+      }
+    ]
+  }
+];
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 36d357304a97629e5ccc913861cdd7243596c527..d60efc774498ca2404260eed90705a9bfbe64b69
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -11,6 +11,7 @@
 const guideLinks = [
   { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
   { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/plan", en: "3-day plan", zh: "3 天行程" },
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
   { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
 ];
@@ -114,7 +115,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PlanPage.tsx b/v2/src/pages/PlanPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..0c28acdf91cad0fa901bf7c1574b7e262bfe34dc
--- /dev/null
+++ b/v2/src/pages/PlanPage.tsx
@@ -0,0 +1,176 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { cityItineraries, type ItineraryDay } from "../data/itineraries";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
+
+type TimeSlotKey = "morning" | "afternoon" | "evening";
+
+const TIME_SLOTS: Array<{ key: TimeSlotKey; labelEn: string; labelZh: string }> = [
+  { key: "morning", labelEn: "Morning", labelZh: "上午" },
+  { key: "afternoon", labelEn: "Afternoon", labelZh: "下午" },
+  { key: "evening", labelEn: "Evening", labelZh: "晚上" }
+];
+
+const planBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "3-day plan", path: "/plan" }
+]);
+
+export default function PlanPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeCityId, setActiveCityId] = useState<CityId>("beijing");
+  const activeItinerary = cityItineraries.find((itinerary) => itinerary.cityId === activeCityId) ?? cityItineraries[0];
+  const activeCity = CITY_LABELS[activeItinerary.cityId];
+
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(planBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-8 sm:py-10">
+        <header className="flex flex-col gap-3">
+          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+            {isZh ? "← 返回首页" : "← Home"}
+          </Link>
+          <div className="flex flex-col gap-2">
+            <span className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "Trip Planner" : "Trip Planner"}
+            </span>
+            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+              {isZh ? "3 天行程" : "3-day plan"}
+            </h1>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
+              {isZh
+                ? "四个入门城市各有一份三天模板：每天按上午、下午、晚上拆开，适合第一次来中国时快速落地。"
+                : "A practical three-day template for each first-time city, split into morning, afternoon, and evening blocks."}
+            </p>
+          </div>
+        </header>
+
+        <div
+          role="tablist"
+          aria-label={isZh ? "选择城市行程" : "Choose a city itinerary"}
+          className="flex gap-2 overflow-x-auto rounded-lg border border-line bg-white p-2"
+        >
+          {cityItineraries.map((itinerary) => {
+            const city = CITY_LABELS[itinerary.cityId];
+            const isActive = itinerary.cityId === activeCityId;
+
+            return (
+              <button
+                key={itinerary.cityId}
+                type="button"
+                role="tab"
+                id={`plan-tab-${itinerary.cityId}`}
+                aria-selected={isActive}
+                aria-controls={`plan-panel-${itinerary.cityId}`}
+                onClick={() => setActiveCityId(itinerary.cityId)}
+                className={clsx(
+                  "min-w-28 rounded-md border px-4 py-2 text-left text-sm font-bold transition",
+                  isActive
+                    ? "border-ink bg-ink text-white"
+                    : "border-transparent bg-paper text-ink hover:border-jade hover:text-jade"
+                )}
+              >
+                <span className="block">{isZh ? city.zh : city.en}</span>
+                <span className={clsx("block text-[11px] font-normal", isActive ? "text-white/70" : "text-muted")}>
+                  {isZh ? city.en : city.zh}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <section
+          role="tabpanel"
+          id={`plan-panel-${activeItinerary.cityId}`}
+          aria-labelledby={`plan-tab-${activeItinerary.cityId}`}
+          className="flex flex-col gap-6"
+        >
+          <header className="flex flex-col gap-1">
+            <p className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "当前城市" : "Current city"}
+            </p>
+            <h2 className="text-2xl font-bold">{isZh ? activeCity.zh : activeCity.en}</h2>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted">
+              {isZh ? activeItinerary.subtitleZh : activeItinerary.subtitleEn}
+            </p>
+          </header>
+
+          <div className="flex flex-col gap-8">
+            {activeItinerary.days.map((day) => (
+              <section key={day.dayNumber} className="flex flex-col gap-3">
+                <div className="flex flex-col gap-1 border-b border-line pb-3">
+                  <span className="text-xs font-bold uppercase tracking-widest text-jade">
+                    {isZh ? `第 ${day.dayNumber} 天` : `Day ${day.dayNumber}`}
+                  </span>
+                  <h3 className="text-xl font-bold">{isZh ? day.themeZh : day.themeEn}</h3>
+                </div>
+                <div className="flex flex-col gap-3">
+                  {TIME_SLOTS.map((slot) => (
+                    <PlanActivityCard
+                      key={slot.key}
+                      cityId={activeItinerary.cityId}
+                      day={day}
+                      slot={slot}
+                      isZh={isZh}
+                    />
+                  ))}
+                </div>
+              </section>
+            ))}
+          </div>
+        </section>
+      </main>
+    </>
+  );
+}
+
+function PlanActivityCard({
+  cityId,
+  day,
+  slot,
+  isZh
+}: {
+  cityId: CityId;
+  day: ItineraryDay;
+  slot: { key: TimeSlotKey; labelEn: string; labelZh: string };
+  isZh: boolean;
+}) {
+  const activity = day[slot.key];
+
+  return (
+    <article className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
+      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
+        <div className="flex min-w-0 flex-col gap-1">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            {isZh ? slot.labelZh : slot.labelEn}
+          </span>
+          <h4 className="break-words text-lg font-bold leading-tight">
+            {isZh ? day.themeZh : day.themeEn}
+          </h4>
+        </div>
+        {activity.attractionId && (
+          <Link
+            to={`/city/${cityId}#intro`}
+            className="shrink-0 text-xs font-bold uppercase tracking-widest text-jade hover:underline"
+          >
+            {isZh ? "查看景点" : "Attraction"}
+          </Link>
+        )}
+      </div>
+
+      <p className="text-sm leading-relaxed text-ink/85">{isZh ? activity.zh : activity.en}</p>
+
+      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
+        <strong className="mr-1">{isZh ? "提示：" : "Tip:"}</strong>
+        {isZh ? day.travelTipZh : day.travelTipEn}
+      </div>
+    </article>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index b9b696df6fa00bc391d8df10bdbce96dcabd580c..72665b74751f0c4660717cb649943229e26f621f
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -5,7 +5,8 @@
   route("map", "./pages/MapPage.tsx"),
   route("phrasebook", "./pages/PhrasebookPage.tsx"),
   route("guide/:topic", "./pages/GuidePage.tsx"),
-  route("city/:cityId", "./pages/CityPage.tsx"),
+  route("plan", "./pages/PlanPage.tsx"),
+  route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),
   route("sources", "./pages/SourcesPage.tsx"),

codex
完成。

概要：北京含故宫/天安门/王府井、天坛/雍和宫、慕田峪；上海含外滩/豫园/南京路、上博/武康路、陆家嘴；广州含陈家祠/沙面/广州塔、早茶/越秀、珠江夜游；深圳含世界之窗/OCT/海上世界、莲花山/大梅沙、大鹏。

文件：`src/data/itineraries.ts`、`src/pages/PlanPage.tsx`、`src/routes.ts`、`react-router.config.ts`、`public/sitemap.xml`、`src/pages/HomePage.tsx`，并同步了 `src/App.tsx`。

验证：`npx tsc --noEmit` 0 error；`npm run build` 0 error，`/plan` 已 prerender。仅有 chunk size / plugin timing warning。
diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index adfcabaa94592bf2c136f0a522a2a633d6e892bf..01ba965ae5de7e27b97c51317ba2afce181c984c
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -25,6 +25,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/plan</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/share</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 0be050a497672fd006dcf773952ba991e41cd9e4..9ccc216dce515307f4c067703ced3257a98dc3db
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -11,6 +11,7 @@
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
+      "/plan",
       "/share",
       "/ask",
       "/sources",
diff --git a/v2/src/App.tsx b/v2/src/App.tsx
index 69ed13e175cd85b0a160c8713b63a2cb970e5b5b..c00e5fddf321e2d1fe4289cef4c9ebcaae02cccd
--- a/v2/src/App.tsx
+++ b/v2/src/App.tsx
@@ -4,9 +4,10 @@
 import SiteHeader from "./components/layout/SiteHeader";
 import SiteFooter from "./components/layout/SiteFooter";
 import HomePage from "./pages/HomePage";
-import CityPage from "./pages/CityPage";
-import GuidePage from "./pages/GuidePage";
-import MapPage from "./pages/MapPage";
+import CityPage from "./pages/CityPage";
+import GuidePage from "./pages/GuidePage";
+import PlanPage from "./pages/PlanPage";
+import MapPage from "./pages/MapPage";
 import SharePage from "./pages/SharePage";
 import AskPage from "./pages/AskPage";
 import SourcesPage from "./pages/SourcesPage";
@@ -19,9 +20,10 @@
           <SiteHeader />
           <Routes>
             <Route path="/" element={<HomePage />} />
-            <Route path="/map" element={<MapPage />} />
-            <Route path="/guide/:topic" element={<GuidePage />} />
-            <Route path="/city/:cityId" element={<CityPage />} />
+            <Route path="/map" element={<MapPage />} />
+            <Route path="/guide/:topic" element={<GuidePage />} />
+            <Route path="/plan" element={<PlanPage />} />
+            <Route path="/city/:cityId" element={<CityPage />} />
             <Route path="/share" element={<SharePage />} />
             <Route path="/ask" element={<AskPage />} />
             <Route path="/sources" element={<SourcesPage />} />
diff --git a/v2/src/data/itineraries.ts b/v2/src/data/itineraries.ts
new file mode 100644
index 0000000000000000000000000000000000000000..3ef655ae3f22669342580f14288cb67f05c73171
--- /dev/null
+++ b/v2/src/data/itineraries.ts
@@ -0,0 +1,302 @@
+import type { CityId } from "./transport";
+
+export type ItineraryDay = {
+  dayNumber: 1 | 2 | 3;
+  themeEn: string;
+  themeZh: string;
+  morning: { en: string; zh: string; attractionId?: string };
+  afternoon: { en: string; zh: string; attractionId?: string };
+  evening: { en: string; zh: string; attractionId?: string };
+  travelTipEn: string;
+  travelTipZh: string;
+};
+
+export type CityItinerary = {
+  cityId: CityId;
+  subtitleEn: string;
+  subtitleZh: string;
+  days: ItineraryDay[];
+};
+
+export const cityItineraries: CityItinerary[] = [
+  {
+    cityId: "beijing",
+    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
+    subtitleZh: "把皇城中轴线、长城和老城夜游按交通顺序排好，减少跨城折返。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Imperial axis first",
+        themeZh: "先看皇城中轴线",
+        morning: {
+          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
+          zh: "一早进入故宫，先走中轴线主殿，避开上午后段的大客流。",
+          attractionId: "bj-forbidden-city"
+        },
+        afternoon: {
+          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
+          zh: "午后转到天安门广场，预留安检和拍照时间。",
+          attractionId: "bj-tiananmen"
+        },
+        evening: {
+          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
+          zh: "晚上去王府井步行街吃饭、逛书店和商场，第一晚返程最省心。"
+        },
+        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
+        travelTipZh: "故宫和天安门都要实名预约；现场带上与预约一致的护照。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Temples, gardens, and hutongs",
+        themeZh: "寺庙、园林与胡同",
+        morning: {
+          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
+          zh: "早晨去天坛看本地晨练，再进入祈年殿区域参观。",
+          attractionId: "bj-temple-of-heaven"
+        },
+        afternoon: {
+          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
+          zh: "午后坐地铁到雍和宫，再顺路逛国子监街一带胡同和咖啡馆。",
+          attractionId: "bj-lama-temple"
+        },
+        evening: {
+          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
+          zh: "晚上在后海或鼓楼一带用餐，湖边酒吧和老城胡同都很集中。"
+        },
+        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
+        travelTipZh: "这一天优先坐地铁；东城晚高峰打车很容易堵在路上。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Great Wall day with a soft landing",
+        themeZh: "长城一日与轻松收尾",
+        morning: {
+          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
+          zh: "清晨出发去慕田峪长城，上山可选缆车或索道，保留体力。",
+          attractionId: "bj-mutianyu"
+        },
+        afternoon: {
+          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
+          zh: "回城后体力允许可顺路去颐和园，看昆明湖和傍晚光线。",
+          attractionId: "bj-summer-palace"
+        },
+        evening: {
+          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
+          zh: "晚餐尽量安排在酒店附近；长城回程路况不稳定，不适合卡点预订。"
+        },
+        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
+        travelTipZh: "慕田峪建议订直达巴士、跟团或包车；首次来京用公共交通会比较耗时。"
+      }
+    ]
+  },
+  {
+    cityId: "shanghai",
+    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
+    subtitleZh: "覆盖外滩江景、老城园林、法租界街区和浦东天际线。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Old Shanghai to neon Shanghai",
+        themeZh: "从老上海到霓虹上海",
+        morning: {
+          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
+          zh: "清晨先走外滩，人少也更容易看清浦东天际线。",
+          attractionId: "sh-bund"
+        },
+        afternoon: {
+          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
+          zh: "午后去豫园和城隍庙商圈，看园林、吃小吃、逛老城街巷。",
+          attractionId: "sh-yu-garden"
+        },
+        evening: {
+          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
+          zh: "晚上从江边沿南京路往人民广场方向走，看夜景和商街灯光。"
+        },
+        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
+        travelTipZh: "外滩和豫园地铁衔接方便，但午后人流明显增加；主要照片放在清晨或黄昏拍。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Museums and plane-tree streets",
+        themeZh: "博物馆与梧桐街区",
+        morning: {
+          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
+          zh: "上午去人民广场的上海博物馆，看青铜、陶瓷、玉器、书画。",
+          attractionId: "sh-museum"
+        },
+        afternoon: {
+          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
+          zh: "下午慢走武康路、武康大楼、 Ferguson Lane 和周边法租界街区。",
+          attractionId: "sh-wukang"
+        },
+        evening: {
+          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
+          zh: "晚餐安排在新天地或衡山路一带，换一个更从容的街区节奏。"
+        },
+        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
+        travelTipZh: "武康大楼周末拍照路口会分流管理，拍完照尽快离开路口。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Pudong skyline and river contrast",
+        themeZh: "浦东天际线与江岸对照",
+        morning: {
+          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
+          zh: "上午到陆家嘴，走滨江步道、拍天际线、逛商场和空中连廊。",
+          attractionId: "sh-lujiazui"
+        },
+        afternoon: {
+          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
+          zh: "天气通透再上上海中心；若低云或雨天，就改成浦东室内安排。",
+          attractionId: "sh-shanghai-tower"
+        },
+        evening: {
+          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
+          zh: "晚上回到外滩，或坐黄浦江游船，对照两岸夜景。"
+        },
+        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
+        travelTipZh: "上海中心观景台别太早锁定时段；雾霾、雨和低云会影响视野。"
+      }
+    ]
+  },
+  {
+    cityId: "guangzhou",
+    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
+    subtitleZh: "把岭南建筑、广府饮食、珠江夜景和一段城市山景串起来。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "Lingnan craft and first skyline view",
+        themeZh: "岭南工艺与第一眼天际线",
+        morning: {
+          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
+          zh: "上午先去陈家祠，近距离看木雕、砖雕、石雕和彩瓷装饰。",
+          attractionId: "gz-chen-clan"
+        },
+        afternoon: {
+          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
+          zh: "午后去沙面岛，走树荫下的欧式建筑街区和江边步道。",
+          attractionId: "gz-shamian"
+        },
+        evening: {
+          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
+          zh: "傍晚到广州塔和海心沙一带，等城市灯光亮起。",
+          attractionId: "gz-canton-tower"
+        },
+        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
+        travelTipZh: "广州塔最适合黄昏到夜间；观景票建议看清天气后再订。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Old city breakfast and civic landmarks",
+        themeZh: "老城早茶与城市地标",
+        morning: {
+          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
+          zh: "先在荔湾喝早茶，再去越秀公园和五羊雕像。",
+          attractionId: "gz-yuexiu-park"
+        },
+        afternoon: {
+          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
+          zh: "午后去白云山，天气好时坐缆车上山看广州全景。",
+          attractionId: "gz-baiyun-mountain"
+        },
+        evening: {
+          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
+          zh: "晚上回北京路或西华路一带，安排粤菜小店和糖水。"
+        },
+        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
+        travelTipZh: "广式早茶越早越好；热门茶楼 9 点后排队会明显变长。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Markets, museums, and Pearl River night",
+        themeZh: "市场、博物馆与珠江夜色",
+        morning: {
+          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
+          zh: "上午逛清平市场和荔湾湖周边，感受老城日常。"
+        },
+        afternoon: {
+          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
+          zh: "午后选广东省博物馆或珠江新城室内空间，避开最热时段。"
+        },
+        evening: {
+          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
+          zh: "晚上坐珠江夜游，尽量选广州塔和桥梁灯光全开后的班次。",
+          attractionId: "gz-pearl-river"
+        },
+        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
+        travelTipZh: "广州夏季午后闷热，安排博物馆或商场作为天气缓冲很实用。"
+      }
+    ]
+  },
+  {
+    cityId: "shenzhen",
+    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
+    subtitleZh: "结合主题公园、创意街区、蛇口夜生活、现代 CBD 和海岸一日。",
+    days: [
+      {
+        dayNumber: 1,
+        themeEn: "OCT cluster and Shekou night",
+        themeZh: "华侨城组团与蛇口夜晚",
+        morning: {
+          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
+          zh: "上午先去世界之窗，完成深圳最经典的微缩地标主题公园动线。",
+          attractionId: "sz-window-of-the-world"
+        },
+        afternoon: {
+          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
+          zh: "午后转到华侨城创意文化园，逛咖啡馆、设计店、小画廊和市集。",
+          attractionId: "sz-octloft"
+        },
+        evening: {
+          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
+          zh: "晚上去蛇口海上世界，安排晚餐、酒吧、明华轮和海边灯光。",
+          attractionId: "sz-sea-world"
+        },
+        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
+        travelTipZh: "这一天基本都在南山，不建议再硬塞福田或罗湖，除非很早出发。"
+      },
+      {
+        dayNumber: 2,
+        themeEn: "Reform-era city views and beach air",
+        themeZh: "改革城市视角与海边空气",
+        morning: {
+          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
+          zh: "上午走莲花山公园缓坡，看福田 CBD 和邓小平雕像。",
+          attractionId: "sz-lianhuashan"
+        },
+        afternoon: {
+          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
+          zh: "午后坐地铁 8 号线去大梅沙，天气好就散步看海、吃海鲜。",
+          attractionId: "sz-dameisha"
+        },
+        evening: {
+          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
+          zh: "晚上回福田或 Coco Park 吃饭，海边回城后不要再安排太远。"
+        },
+        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
+        travelTipZh: "晴天周末海边人很多；尽量选工作日，或准备一个市区备选方案。"
+      },
+      {
+        dayNumber: 3,
+        themeEn: "Dapeng coast and historic village",
+        themeZh: "大鹏海岸与古城",
+        morning: {
+          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
+          zh: "清晨出发去大鹏所城，赶在正午前走明清海防古城街巷。",
+          attractionId: "sz-dapeng"
+        },
+        afternoon: {
+          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
+          zh: "午后按天气和交通选择较场尾、杨梅坑或附近海岸步道。"
+        },
+        evening: {
+          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
+          zh: "晚上尽量在深夜交通变少前回城，或干脆住在海边慢慢收尾。"
+        },
+        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
+        travelTipZh: "大鹏离市中心远，包车或小团比多段公交换乘更适合游客。"
+      }
+    ]
+  }
+];
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 36d357304a97629e5ccc913861cdd7243596c527..d60efc774498ca2404260eed90705a9bfbe64b69
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -11,6 +11,7 @@
 const guideLinks = [
   { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
   { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/plan", en: "3-day plan", zh: "3 天行程" },
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
   { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
 ];
@@ -114,7 +115,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PlanPage.tsx b/v2/src/pages/PlanPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..0c28acdf91cad0fa901bf7c1574b7e262bfe34dc
--- /dev/null
+++ b/v2/src/pages/PlanPage.tsx
@@ -0,0 +1,176 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { cityItineraries, type ItineraryDay } from "../data/itineraries";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
+
+type TimeSlotKey = "morning" | "afternoon" | "evening";
+
+const TIME_SLOTS: Array<{ key: TimeSlotKey; labelEn: string; labelZh: string }> = [
+  { key: "morning", labelEn: "Morning", labelZh: "上午" },
+  { key: "afternoon", labelEn: "Afternoon", labelZh: "下午" },
+  { key: "evening", labelEn: "Evening", labelZh: "晚上" }
+];
+
+const planBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "3-day plan", path: "/plan" }
+]);
+
+export default function PlanPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeCityId, setActiveCityId] = useState<CityId>("beijing");
+  const activeItinerary = cityItineraries.find((itinerary) => itinerary.cityId === activeCityId) ?? cityItineraries[0];
+  const activeCity = CITY_LABELS[activeItinerary.cityId];
+
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(planBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-8 sm:py-10">
+        <header className="flex flex-col gap-3">
+          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+            {isZh ? "← 返回首页" : "← Home"}
+          </Link>
+          <div className="flex flex-col gap-2">
+            <span className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "Trip Planner" : "Trip Planner"}
+            </span>
+            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+              {isZh ? "3 天行程" : "3-day plan"}
+            </h1>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
+              {isZh
+                ? "四个入门城市各有一份三天模板：每天按上午、下午、晚上拆开，适合第一次来中国时快速落地。"
+                : "A practical three-day template for each first-time city, split into morning, afternoon, and evening blocks."}
+            </p>
+          </div>
+        </header>
+
+        <div
+          role="tablist"
+          aria-label={isZh ? "选择城市行程" : "Choose a city itinerary"}
+          className="flex gap-2 overflow-x-auto rounded-lg border border-line bg-white p-2"
+        >
+          {cityItineraries.map((itinerary) => {
+            const city = CITY_LABELS[itinerary.cityId];
+            const isActive = itinerary.cityId === activeCityId;
+
+            return (
+              <button
+                key={itinerary.cityId}
+                type="button"
+                role="tab"
+                id={`plan-tab-${itinerary.cityId}`}
+                aria-selected={isActive}
+                aria-controls={`plan-panel-${itinerary.cityId}`}
+                onClick={() => setActiveCityId(itinerary.cityId)}
+                className={clsx(
+                  "min-w-28 rounded-md border px-4 py-2 text-left text-sm font-bold transition",
+                  isActive
+                    ? "border-ink bg-ink text-white"
+                    : "border-transparent bg-paper text-ink hover:border-jade hover:text-jade"
+                )}
+              >
+                <span className="block">{isZh ? city.zh : city.en}</span>
+                <span className={clsx("block text-[11px] font-normal", isActive ? "text-white/70" : "text-muted")}>
+                  {isZh ? city.en : city.zh}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <section
+          role="tabpanel"
+          id={`plan-panel-${activeItinerary.cityId}`}
+          aria-labelledby={`plan-tab-${activeItinerary.cityId}`}
+          className="flex flex-col gap-6"
+        >
+          <header className="flex flex-col gap-1">
+            <p className="text-xs font-bold uppercase tracking-widest text-muted">
+              {isZh ? "当前城市" : "Current city"}
+            </p>
+            <h2 className="text-2xl font-bold">{isZh ? activeCity.zh : activeCity.en}</h2>
+            <p className="max-w-3xl text-sm leading-relaxed text-muted">
+              {isZh ? activeItinerary.subtitleZh : activeItinerary.subtitleEn}
+            </p>
+          </header>
+
+          <div className="flex flex-col gap-8">
+            {activeItinerary.days.map((day) => (
+              <section key={day.dayNumber} className="flex flex-col gap-3">
+                <div className="flex flex-col gap-1 border-b border-line pb-3">
+                  <span className="text-xs font-bold uppercase tracking-widest text-jade">
+                    {isZh ? `第 ${day.dayNumber} 天` : `Day ${day.dayNumber}`}
+                  </span>
+                  <h3 className="text-xl font-bold">{isZh ? day.themeZh : day.themeEn}</h3>
+                </div>
+                <div className="flex flex-col gap-3">
+                  {TIME_SLOTS.map((slot) => (
+                    <PlanActivityCard
+                      key={slot.key}
+                      cityId={activeItinerary.cityId}
+                      day={day}
+                      slot={slot}
+                      isZh={isZh}
+                    />
+                  ))}
+                </div>
+              </section>
+            ))}
+          </div>
+        </section>
+      </main>
+    </>
+  );
+}
+
+function PlanActivityCard({
+  cityId,
+  day,
+  slot,
+  isZh
+}: {
+  cityId: CityId;
+  day: ItineraryDay;
+  slot: { key: TimeSlotKey; labelEn: string; labelZh: string };
+  isZh: boolean;
+}) {
+  const activity = day[slot.key];
+
+  return (
+    <article className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
+      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
+        <div className="flex min-w-0 flex-col gap-1">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            {isZh ? slot.labelZh : slot.labelEn}
+          </span>
+          <h4 className="break-words text-lg font-bold leading-tight">
+            {isZh ? day.themeZh : day.themeEn}
+          </h4>
+        </div>
+        {activity.attractionId && (
+          <Link
+            to={`/city/${cityId}#intro`}
+            className="shrink-0 text-xs font-bold uppercase tracking-widest text-jade hover:underline"
+          >
+            {isZh ? "查看景点" : "Attraction"}
+          </Link>
+        )}
+      </div>
+
+      <p className="text-sm leading-relaxed text-ink/85">{isZh ? activity.zh : activity.en}</p>
+
+      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
+        <strong className="mr-1">{isZh ? "提示：" : "Tip:"}</strong>
+        {isZh ? day.travelTipZh : day.travelTipEn}
+      </div>
+    </article>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index b9b696df6fa00bc391d8df10bdbce96dcabd580c..72665b74751f0c4660717cb649943229e26f621f
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -5,7 +5,8 @@
   route("map", "./pages/MapPage.tsx"),
   route("phrasebook", "./pages/PhrasebookPage.tsx"),
   route("guide/:topic", "./pages/GuidePage.tsx"),
-  route("city/:cityId", "./pages/CityPage.tsx"),
+  route("plan", "./pages/PlanPage.tsx"),
+  route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),
   route("sources", "./pages/SourcesPage.tsx"),

tokens used
85,743

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
