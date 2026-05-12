# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-12T03:17:52.593Z

## Original task

在 v2/ workdir 真的 edit + build。

任务：JSON-LD 结构化数据，给 Google AI Overview 和富搜索结果引用。

1. v2/src/pages/HomePage.tsx 注入 WebSite schema（含 name、url、inLanguage 双语、description、potentialAction SearchAction 占位）
2. v2/src/pages/CityPage.tsx 注入 City + 多个 TouristAttraction schema。City 用 @type:City + name(en+zh) + containedInPlace=China。TouristAttraction 用 city-attractions.ts 里的 4 城所有 attractions 数据 (id/nameEn/nameZh/districtEn/whyEn/officialUrl/imageUrl)，每条带 @type:TouristAttraction + name + description + image + url + address.addressLocality
3. v2/src/pages/GuidePage.tsx 当 topic === 'notes' 时注入 FAQPage schema。Question/Answer 用 top-questions.ts 里的 topQuestions 数组的 questionEn/answerEn（英文优先，Google 主要爬 EN）
4. 所有 4 个城市页 + home + /guide/notes 都加 BreadcrumbList schema（'Home > City > 北京' 这种）

用 <script type='application/ld+json'> 直接注入到组件内，react 19 会自动 hoist 到 head。

完成后 npx tsc --noEmit + npm run build 0 error。

报告 250 字以内：每个页面注入了哪些 schema、build 状态。

## Final prompt

在 v2/ workdir 真的 edit + build。

任务：JSON-LD 结构化数据，给 Google AI Overview 和富搜索结果引用。

1. v2/src/pages/HomePage.tsx 注入 WebSite schema（含 name、url、inLanguage 双语、description、potentialAction SearchAction 占位）
2. v2/src/pages/CityPage.tsx 注入 City + 多个 TouristAttraction schema。City 用 @type:City + name(en+zh) + containedInPlace=China。TouristAttraction 用 city-attractions.ts 里的 4 城所有 attractions 数据 (id/nameEn/nameZh/districtEn/whyEn/officialUrl/imageUrl)，每条带 @type:TouristAttraction + name + description + image + url + address.addressLocality
3. v2/src/pages/GuidePage.tsx 当 topic === 'notes' 时注入 FAQPage schema。Question/Answer 用 top-questions.ts 里的 topQuestions 数组的 questionEn/answerEn（英文优先，Google 主要爬 EN）
4. 所有 4 个城市页 + home + /guide/notes 都加 BreadcrumbList schema（'Home > City > 北京' 这种）

用 <script type='application/ld+json'> 直接注入到组件内，react 19 会自动 hoist 到 head。

完成后 npx tsc --noEmit + npm run build 0 error。

报告 250 字以内：每个页面注入了哪些 schema、build 状态。

## Raw output

```text
SUCCESS: The process with PID 611076 (child process of PID 604472) has been terminated.
SUCCESS: The process with PID 604472 (child process of PID 609232) has been terminated.
SUCCESS: The process with PID 609232 (child process of PID 608716) has been terminated.
SUCCESS: The process with PID 608716 (child process of PID 608896) has been terminated.
SUCCESS: The process with PID 596200 (child process of PID 607880) has been terminated.
SUCCESS: The process with PID 607880 (child process of PID 379520) has been terminated.
SUCCESS: The process with PID 379520 (child process of PID 607328) has been terminated.
SUCCESS: The process with PID 607328 (child process of PID 608896) has been terminated.
完成：Home 注入 WebSite + BreadcrumbList。4 个城市页注入 City、该城市全部 TouristAttraction + BreadcrumbList。/guide/notes 注入 topQuestions 英文 FAQPage + BreadcrumbList。

`npx tsc --noEmit`：0 error。`npm run build`：0 error，仅 Vite chunk size warning。


OpenAI Codex v0.128.0 (research preview)
--------
workdir: C:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1a2a-8157-7ba0-8a89-a5706c33ac2f
--------
user
在 v2/ workdir 真的 edit + build。

任务：JSON-LD 结构化数据，给 Google AI Overview 和富搜索结果引用。

1. v2/src/pages/HomePage.tsx 注入 WebSite schema（含 name、url、inLanguage 双语、description、potentialAction SearchAction 占位）
2. v2/src/pages/CityPage.tsx 注入 City + 多个 TouristAttraction schema。City 用 @type:City + name(en+zh) + containedInPlace=China。TouristAttraction 用 city-attractions.ts 里的 4 城所有 attractions 数据 (id/nameEn/nameZh/districtEn/whyEn/officialUrl/imageUrl)，每条带 @type:TouristAttraction + name + description + image + url + address.addressLocality
3. v2/src/pages/GuidePage.tsx 当 topic === 'notes' 时注入 FAQPage schema。Question/Answer 用 top-questions.ts 里的 topQuestions 数组的 questionEn/answerEn（英文优先，Google 主要爬 EN）
4. 所有 4 个城市页 + home + /guide/notes 都加 BreadcrumbList schema（'Home > City > 北京' 这种）

用 <script type='application/ld+json'> 直接注入到组件内，react 19 会自动 hoist 到 head。

完成后 npx tsc --noEmit + npm run build 0 error。

报告 250 字以内：每个页面注入了哪些 schema、build 状态。
codex
我会用 React best practices 这条技能来约束 TSX 改动，然后先读现有页面和数据结构，确认 schema 注入点后再改。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw C:\\Users\\h\\.codex\\plugins\\cache\\openai-curated\\build-web-apps\\63976030\\skills\\react-best-practices\\SKILL.md" in C:\Users\h\Documents\New project 2
 succeeded in 526ms:
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


  → Inspect v2 pages and structured data sources
  • Add JSON-LD scripts to Home, City, Guide pages
  • Run TypeScript and production build
codex
先确认路由页面和数据文件的形状，尤其是城市 slug、attractions 和 FAQ 数据字段，避免 JSON-LD 字段名猜错。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Force' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg --files v2' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short' in C:\Users\h\Documents\New project 2
 succeeded in 802ms:
v2\vite.config.ts
v2\tsconfig.node.json
v2\tsconfig.json
v2\tsconfig.app.json
v2\STYLE_GUIDE.md
v2\index.html
v2\package.json
v2\react-router.config.ts
v2\eslint.config.js
v2\package-lock.json
v2\README.md
v2\src\main.tsx
v2\src\routes.ts
v2\src\root.tsx
v2\research\evaluation-01-acceptance.md
v2\research\city-shenzhen-deep.md
v2\research\city-shanghai-deep.md
v2\research\city-guangzhou-deep.md
v2\research\city-beijing-deep.md
v2\research\china-platforms-04-legal.md
v2\research\china-platforms-03-ugc.md
v2\research\china-platforms-02-maps-reviews.md
v2\research\china-platforms-01-video.md
v2\research\blog-platform-bureau-sweep.md
v2\research\alipay-wechat-foreigner-registration.md
v2\research\seo-01-landscape.md
v2\research\evaluation-04-rewrites-applied.md
v2\research\evaluation-04-en-machine-feel.md
v2\research\evaluation-03-home-vs-competitors.md
v2\research\evaluation-02-seo-paid.md
v2\research\seo-05-our-action-plan.md
v2\research\zh-mandarin-audit.md
v2\research\seo-04-multi-engine.md
v2\research\seo-02-decompose-winners.md
v2\research\ugc-qa-implementation.md
v2\src\App.tsx
v2\src\styles\globals.css
v2\scripts\restart-dev.mjs
v2\scripts\interaction-check.mjs
v2\public\favicon.svg
v2\src\hooks\useProvinceShapes.ts
v2\src\hooks\useCityViews.ts
v2\src\lib\unsplash.ts
v2\src\lib\shapes.ts
v2\src\lib\search.ts
v2\src\lib\i18n.ts
v2\src\lib\format.ts
v2\src\lib\cityRoutes.ts
v2\src\data\entry-policies.ts
v2\src\data\emergency.ts
v2\src\data\city-tourism-portals.ts
v2\src\data\city-attractions.ts
v2\src\data\atlas.ts
v2\src\data\i18n.ts
v2\src\data\food.ts
v2\src\data\map-sources.ts
v2\src\data\payments.ts
v2\src\services\notes.ts
v2\src\data\types.ts
v2\src\data\transport.ts
v2\src\data\top-questions.ts
v2\src\data\sources.ts
v2\src\data\practical-payments.ts
v2\src\data\practical-other.ts
v2\src\data\phase2-preview.ts
v2\src\pages\SourcesPage.tsx
v2\src\pages\SharePage.tsx
v2\src\pages\MapPage.tsx
v2\src\pages\HomePage.tsx
v2\src\pages\GuidePage.tsx
v2\src\pages\CityPage.tsx
v2\src\pages\AskPage.tsx
v2\src\store\AtlasProvider.tsx
v2\src\store\atlas.ts
v2\src\store\language.ts
v2\src\store\LanguageProvider.tsx
v2\public\assets\three.module.min.js
v2\src\components\common\SourcesNote.tsx
v2\src\components\common\PracticalBlock.tsx
v2\src\components\common\MapErrorBoundary.tsx
v2\src\components\common\CityFurtherReading.tsx
v2\public\assets\china-province-shapes.json
v2\public\assets\china-map-gs2022-4309.jpg
v2\public\assets\earth-bluemarble.jpg
v2\src\components\city\CuisineDrawer.tsx
v2\src\components\city\CityNav.tsx
v2\src\components\city\CityIntro.tsx
v2\src\components\city\CityImagePanel.tsx
v2\src\components\pillar\FoodGuide.tsx
v2\src\components\pillar\EmergencyBriefing.tsx
v2\src\components\pillar\PaymentsChecklist.tsx
v2\src\components\pillar\PaymentsPractical.tsx
v2\src\components\sections\TopQuestions.tsx
v2\src\components\pillar\TransportGuide.tsx
v2\src\components\pillar\VisaChecker.tsx
v2\src\components\policy\TravelAlerts.tsx
v2\src\components\layout\SiteHeader.tsx
v2\src\components\layout\SiteFooter.tsx
v2\src\components\layout\LanguageSwitch.tsx
v2\public\assets\province-map-textures\chongqing.png
v2\public\assets\province-map-textures\beijing.png
v2\public\assets\province-map-textures\anhui.png
v2\public\assets\province-map-textures\gansu.png
v2\public\assets\province-map-textures\fujian.png
v2\public\assets\province-map-textures\guangdong.png
v2\public\assets\province-map-textures\zhejiang.png
v2\public\assets\province-map-textures\liaoning.png
v2\src\components\map\SpecialRegionMarkers.tsx
v2\src\components\map\provinceColors.ts
v2\public\assets\province-map-textures\yunnan.png
v2\src\components\map\Province3DOverlay.tsx
v2\public\assets\province-map-textures\xinjiang.png
v2\public\assets\province-map-textures\jilin.png
v2\src\components\map\ProvinceShapeLayer.tsx
v2\public\assets\province-map-textures\tibet.png
v2\src\components\map\MapPreview.tsx
v2\public\assets\province-map-textures\jiangxi.png
v2\src\components\map\Map3D.tsx
v2\src\components\map\ProvinceLabelLayer.tsx
v2\public\assets\province-map-textures\tianjin.png
v2\public\assets\province-map-textures\jiangsu.png
v2\src\components\map\ProvinceInfoCard.tsx
v2\src\components\map\HeroMap.tsx
v2\public\assets\province-map-textures\taiwan.png
v2\public\assets\province-map-textures\sichuan.png
v2\public\assets\province-map-textures\shaanxi.png
v2\public\assets\province-map-textures\shanxi.png
v2\public\assets\province-map-textures\shanghai.png
v2\public\assets\province-map-textures\qinghai.png
v2\public\assets\province-map-textures\shandong.png
v2\public\assets\province-map-textures\ningxia.png
v2\public\assets\province-map-textures\macau.png
v2\public\assets\province-map-textures\heilongjiang.png
v2\public\assets\province-map-textures\guizhou.png
v2\public\assets\province-map-textures\hebei.png
v2\public\assets\province-map-textures\guangxi.png
v2\public\assets\province-map-textures\hainan.png
v2\public\assets\province-map-textures\hong-kong.png
v2\public\assets\province-map-textures\hubei.png
v2\public\assets\province-map-textures\henan.png
v2\public\assets\province-map-textures\hunan.png
v2\public\assets\province-map-textures\inner-mongolia.png
v2\src\components\map\ProvinceHitAreaLayer.tsx

 succeeded in 828ms:
 M v2/src/pages/HomePage.tsx
?? v2/src/lib/unsplash.ts

 succeeded in 862ms:


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
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw v2\\src\\pages\\HomePage.tsx" in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw v2\\src\\pages\\CityPage.tsx" in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw v2\\src\\pages\\GuidePage.tsx" in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg \"application/ld\\+json|jsonLd|schema\" v2\\src" in C:\Users\h\Documents\New project 2
 succeeded in 853ms:
import { Link } from "react-router";
import MapPreview from "../components/map/MapPreview";
import { attractionsByCity, type Attraction } from "../data/city-attractions";
import { CITY_LABELS, type CityId } from "../data/transport";
import { unsplashSrcSet } from "../lib/unsplash";
import { useLang } from "../store/language";

const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];

const guideLinks = [
  { to: "/guide/entry", en: "Entry & visa", zh: "鍏ュ绛捐瘉" },
  { to: "/guide/payments", en: "Payments", zh: "鏀粯鍑嗗" },
  { to: "/guide/notes", en: "Travel notes", zh: "鍑鸿娉ㄦ剰浜嬮」" }
];

function pickCityPhoto(cityId: CityId): Attraction {
  return attractionsByCity(cityId)[0];
}

export default function HomePage() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  return (
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


2026-05-12T03:11:31.214208Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.9 seconds
Output:

 exited 1 in 913ms:
 succeeded in 928ms:
import { Link, useParams } from "react-router";
import TravelAlerts from "../components/policy/TravelAlerts";
import VisaChecker from "../components/pillar/VisaChecker";
import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
import TopQuestions from "../components/sections/TopQuestions";
import SourcesNote from "../components/common/SourcesNote";
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
  );
}


 succeeded in 930ms:
import { Link, useParams } from "react-router";
import { CITY_LABELS, type CityId } from "../data/transport";
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

  return (
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
  );
}


codex
现有页面里没有 JSON-LD 注入。`HomePage.tsx` 已经有未提交改动，我会只追加结构化数据相关代码，避免碰已有内容。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw v2\\src\\data\\city-attractions.ts" in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw v2\\src\\data\\top-questions.ts" in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw v2\\src\\data\\transport.ts" in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw v2\\src\\lib\\cityRoutes.ts" in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw v2\\package.json" in C:\Users\h\Documents\New project 2
 succeeded in 885ms:
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


 succeeded in 915ms:
export type TopQuestion = {
  id: string;
  questionEn: string;
  questionZh: string;
  answerEn: string;
  answerZh: string;
  sourceId: string;
};

export const topQuestions: TopQuestion[] = [
  {
    id: "visa-need",
    questionEn: "Do I need a visa to enter China?",
    questionZh: "鎴戦渶瑕佺璇佹墠鑳藉叆澧冧腑鍥藉悧锛?,
    answerEn: "50 nationalities have unilateral 30-day visa-free entry; 55 nationalities qualify for 240-hour transit visa-free across 65 ports / 24 provinces. Use the Visa Checker above for your specific passport.",
    answerZh: "50 涓浗瀹跺彲鍗曟柟闈?30 澶╁厤绛撅紱55 涓浗瀹跺彲浜?240 灏忔椂杩囧鍏嶇锛岃鐩?65 鍙ｅ哺 / 24 鐪佺骇鍦板尯銆傜敤涓婃柟鏍￠獙鍣ㄨ緭鍏ヤ綘鐨勬姢鐓у浗绫嶆煡璇€?,
    sourceId: "nia-unilateral-list"
  },
  {
    id: "online-entry-card",
    questionEn: "Do I need to fill in an arrival card?",
    questionZh: "闇€瑕佸～鍏ュ鍗″悧锛?,
    answerEn: "Yes. Since 2025-11-20 the Foreigner Entry/Exit Card can be pre-filled online for free at the official NIA portal. Kiosks and paper cards are still available at the port. Watch out for fake fee-charging sites.",
    answerZh: "闇€瑕併€傝嚜 2025-11-20 璧峰彲鍦ㄥ浗瀹剁Щ姘戠鐞嗗眬瀹樼綉鍏嶈垂绾夸笂棰勫～锛涘彛宀镐篃鎻愪緵鑷姪璁惧鍜岀焊鍗°€傝璀︽儠浠垮啋鏀惰垂缃戠珯銆?,
    sourceId: "nia-online-entry-card"
  },
  {
    id: "pay-foreign-card",
    questionEn: "Will my foreign credit card work in China?",
    questionZh: "澶栧崱鍦ㄤ腑鍥借兘鐢ㄥ悧锛?,
    answerEn: "Set up Alipay or WeChat Pay before you fly and link a Visa or Mastercard. PBOC raised the cap to USD 5,000 per transaction / USD 50,000 annually in 2024. Standalone Visa/Mastercard swipes work mainly at airports, hotels, and major retailers.",
    answerZh: "鍑哄彂鍓嶅湪 Alipay 鎴栧井淇℃敮浠樼粦瀹氬鍗★紙Visa / Mastercard锛夈€傚ぎ琛?2024 骞磋捣鍗曠瑪涓婇檺 USD 5,000銆佸勾绱?USD 50,000銆傛満鍦恒€侀厭搴椼€佸ぇ鍨嬪晢鍦哄拰瓒呭競閫氬父鍙埛澶栧崱锛岃杈瑰皬鍨嬪晢鎴峰浣跨敤鏀粯瀹?寰俊銆?,
    sourceId: "pboc-payment-uplift"
  },
  {
    id: "cash-customs",
    questionEn: "How much cash can I bring in?",
    questionZh: "鎴戣兘甯﹀灏戠幇閲戝叆澧冿紵",
    answerEn: "Up to 楼20,000 RMB without declaration. Foreign currency above the equivalent of USD 5,000 must be declared on arrival.",
    answerZh: "浜烘皯甯佺幇閲戜笉瓒呰繃 楼20,000锛涘甯佺幇閲戞姌鍚堣秴杩?USD 5,000 蹇呴』鐢虫姤銆?,
    sourceId: "customs-clearance-guide"
  },
  {
    id: "internet-apps",
    questionEn: "Will Google Maps and WhatsApp work?",
    questionZh: "Google 鍦板浘鍜?WhatsApp 鍦ㄤ腑鍥借兘鐢ㄥ悧锛?,
    answerEn: "Several international services may be intermittent or unavailable in mainland China. Install local alternatives before you fly: Amap (gaode.com) for navigation, Baidu Translate for menus, WeChat for messaging, Alipay for payments. International roaming SIM/eSIM typically works as on your home plan.",
    answerZh: "閮ㄥ垎鍥介檯鏈嶅姟鍦ㄥぇ闄嗗彲鑳戒笉绋冲畾鎴栨棤娉曡闂€傚嚭鍙戝墠瑁呭ソ鏈湴鏇夸唬锛氶珮寰峰湴鍥撅紙瀵艰埅锛夈€佺櫨搴︾炕璇戯紙鑿滃崟锛夈€佸井淇★紙閫氫俊锛夈€佹敮浠樺疂锛堟敮浠橈級銆傚浗闄呮极娓?SIM/eSIM 涓€鑸繚鐣欎綘鍘熸湰鐨勬湇鍔°€?,
    sourceId: "pboc-payment-uplift"
  },
  {
    id: "emergency-numbers",
    questionEn: "What's the emergency number if something happens?",
    questionZh: "閬囧埌绱ф€ユ儏鍐垫嫧鎵撲粈涔堢數璇濓紵",
    answerEn: "110 police, 119 fire, 120 ambulance, 122 traffic 鈥?all free. Beijing 12345 supports 10 languages 24/7; Shanghai 12345 supports 18 languages (press 7); Guangzhou 960169 is a three-party language bridge.",
    answerZh: "110 璀﹀姟銆?19 鐏銆?20 鎬ユ晳銆?22 浜よ锛屽叏閮ㄥ厤璐广€傚寳浜?12345 24/7 鏀寔 10 绉嶈瑷€锛涗笂娴?12345 鏀寔 18 绉嶈瑷€锛堟寜 7锛夛紱骞垮窞 960169 鎻愪緵涓夋柟缈昏瘧杞帴鏈嶅姟銆?,
    sourceId: "shanghai-emergency-numbers"
  },
  {
    id: "rail-passport",
    questionEn: "Can I book high-speed rail with a foreign passport?",
    questionZh: "鑳界敤鎶ょ収鍦?12306 涔伴珮閾佺エ鍚楋紵",
    answerEn: "Yes via 12306.cn/en. Online auto-verification is fastest; if it fails, manual review of passport + selfie takes 3鈥? working days, or visit any station counter on arrival.",
    answerZh: "鍙互锛屽墠寰€ 12306.cn/en銆傝嚜鍔ㄨ璇佹渶蹇紱澶辫触鍚庡彲涓婁紶鎶ょ収 + 鑷媿锛屼汉宸ュ鏍搁渶 3-5 涓伐浣滄棩锛屾垨鎶佃揪鍚庡埌杞︾珯绐楀彛鐜板満鍔炵悊銆?,
    sourceId: "rail-12306-faq"
  },
  {
    id: "tap-water",
    questionEn: "Is tap water safe to drink?",
    questionZh: "鑷潵姘磋兘鍠濆悧锛?,
    answerEn: "China's tap water is treated but boiling before drinking is the local norm. Hotel rooms typically include kettles and bottled water. Bottled water is widely sold for 楼2鈥?.",
    answerZh: "涓浗鑷潵姘寸粡澶勭悊锛屼絾褰撳湴涔犳儻鐑у紑鍚庡啀鍠濄€傞厭搴楅€氬父閰嶇數鐑按澹跺拰鐡惰姘淬€傜摱瑁呮按鍟嗚秴鏅亶锛岀害 楼2-3 涓€鐡躲€?,
    sourceId: "shanghai-public-transport"
  }
];

export const topQuestionSourceIds: string[] = topQuestions.map((q) => q.sourceId);


 succeeded in 929ms:
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


 succeeded in 941ms:
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


 succeeded in 943ms:
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


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw v2\\src\\routes.ts" in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw v2\\src\\root.tsx" in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw v2\\src\\App.tsx" in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw v2\\README.md" in C:\Users\h\Documents\New project 2
 succeeded in 795ms:
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


 succeeded in 834ms:
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import LanguageProvider from "./store/LanguageProvider";
import AtlasProvider from "./store/AtlasProvider";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import "./styles/globals.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>鏃呰涓浗</title>
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
      </AtlasProvider>
    </LanguageProvider>
  );
}


 succeeded in 840ms:
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


 succeeded in 851ms:
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg \"https?://|Travel China|旅行中国|travel china|travel-china|siteUrl|SITE_URL\" v2\\src v2\\*.md v2\\*.json" in C:\Users\h\Documents\New project 2
2026-05-12T03:11:54.614302Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.4 seconds
Output:
v2\src\root.tsx:        <title>旅行中国</title>
v2\src\root.tsx:          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='10' fill='%2318201d'/%3E%3Ctext x='32' y='42' text-anchor='middle' font-size='34' fill='white'%3E%E6%97%85%3C/text%3E%3C/svg%3E"
v2\src\pages\HomePage.tsx:          {isZh ? "欢迎来中国" : "Travel China"}
v2\src\data\city-attractions.ts:    officialUrl: "https://intl.dpm.org.cn/visit.html?l=en",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://en.mutianyugreatwall.com",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1509624780899-f812439647e4?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.beijing.gov.cn/specials/parktours/guidevisitors/summerpalace/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1619825479213-62e158b5a79d?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.beijing.gov.cn/specials/parktours/guidevisitors/templeofheaven/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1569165755139-296fac054979?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.beijing.gov.cn/specials/ticketing/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1590301729964-23833732ee04?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.beijing.gov.cn/travellinginbeijing/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1604844252839-f9c364adacdd?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231205/584672cc6d044eabb5f7f6fc9049a19f.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1506158669146-619067262a00?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231205/dc76893b94c248d195eaf7f4d44c6597.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.shanghaitower.com/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231205/19a5f5184eca45728fd57a4d4c8efc61.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231218/596192f5f59048bbbc3fa54d92304e93.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1574504500022-de9a6309a501?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.shanghai.gov.cn/en-MuseumsGalleries/20231218/01fdd3f62d0c4877bc289ec0b1de6afa.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1508742066636-3b9fb738ee0e?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.cantontower.com/en/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1563090162-6b4c2a20d658?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.gz.gov.cn/guangzhouinternational/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1636259584602-5a3c9c0d05ff?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.gz.gov.cn/guangzhouinternational/visitors/",
v2\src\data\city-attractions.ts:    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Chan_Clan_Ancestral_Hall.JPG",
v2\src\data\city-attractions.ts:    officialUrl: "http://www.gz.gov.cn/guangzhouinternational/visitors/whattosee/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1630831241310-3984f1b3d711?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.cantontower.com/en/pearlriver/otherships/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1563090162-6b4c2a20d658?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "http://www.baiyunshan.com.cn",
v2\src\data\city-attractions.ts:    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/42/Guangzhou_Opera_House_and_Canton_Tower.JPG",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.sz.gov.cn/en_szgov/news/infocus/SZCitywalk/Explore/Attractions/content/post_11857074.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1767628366824-be007ab6e7cf?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.octloft.cn/en/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1728241733556-65b2afb65120?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.eyeshenzhen.com/content/2023-05/12/content_30192680.htm",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1634647626758-ad751a260e9f?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.sz.gov.cn/en_szgov/news/infocus/park/csgy/content/post_10986843.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1759970729294-99c7eebeaf54?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.sz.gov.cn/en_szgov/news/infocus/park/index.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1759970729216-49c024cd89fb?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.sz.gov.cn/en_szgov/news/infocus/SZCitywalk/Explore/Districts/DapengNewDistrict/content/mpost_11892734.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1636821771168-d13e578a88ba?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-tourism-portals.ts:      url: "https://english.visitbeijing.com.cn/",
v2\src\data\city-tourism-portals.ts:      url: "https://english.beijing.gov.cn/travellinginbeijing/",
v2\src\data\city-tourism-portals.ts:      url: "https://www.meet-in-shanghai.net/",
v2\src\data\city-tourism-portals.ts:      url: "https://english.shanghai.gov.cn/en-GuideforForeignTourists/index.html",
v2\src\data\city-tourism-portals.ts:      url: "https://www.gz.gov.cn/guangzhouinternational/",
v2\src\data\city-tourism-portals.ts:      url: "https://www.eyeshenzhen.com/",
v2\src\data\city-tourism-portals.ts:      url: "https://www.sz.gov.cn/en_szgov/travel/index.html",
v2\src\data\i18n.ts:    footerNote: "Travel China demo data only.",
v2\src\data\i18n.ts:    footerNote: "旅行中国。当前为演示数据。",
v2\src\components\layout\SiteHeader.tsx:        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
v2\src\data\entry-policies.ts: * URL: https://en.nia.gov.cn/n147418/n147463/c183390/content.html
v2\src\data\entry-policies.ts: * URL: https://en.nia.gov.cn/n147418/n147463/c156094/content.html
v2\src\data\entry-policies.ts: * URL: https://english.www.gov.cn/news/202511/04/content_WS69094ae0c6d00ca5f9a07472.html
v2\src\data\entry-policies.ts:    applyUrl: "https://www.visaforchina.cn"
v2\src\data\emergency.ts:  url: "https://www.fmprc.gov.cn/web/fw_673051/lbfw_673061/fgzl_673083/",
v2\src\data\map-sources.ts:  "https://bzdt.tianditu.gov.cn/iserver/services/map-2200_China_Map/rest/maps/2200%E4%B8%87%E8%87%AA%E5%8A%A9%E5%88%B6%E5%9B%BE/image.png";
v2\src\data\sources.ts:    url: "https://en.nia.gov.cn/n147418/n147463/c183390/content.html",
v2\src\data\sources.ts:    publisherUrl: "https://en.nia.gov.cn",
v2\src\data\sources.ts:    url: "https://en.nia.gov.cn/n147418/n147463/c156094/content.html",
v2\src\data\sources.ts:    publisherUrl: "https://en.nia.gov.cn",
v2\src\data\sources.ts:    url: "https://english.www.gov.cn/news/202511/04/content_WS69094ae0c6d00ca5f9a07472.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.www.gov.cn",
v2\src\data\sources.ts:    url: "https://en.nia.gov.cn/n147418/n147468/c187308/content.html",
v2\src\data\sources.ts:    publisherUrl: "https://en.nia.gov.cn",
v2\src\data\sources.ts:    url: "https://en.nia.gov.cn/n147418/n147463/c191530/content.html",
v2\src\data\sources.ts:    publisherUrl: "https://en.nia.gov.cn",
v2\src\data\sources.ts:    url: "https://www.fmprc.gov.cn/web/fw_673051/lbfw_673061/fgzl_673083/",
v2\src\data\sources.ts:    publisherUrl: "https://www.fmprc.gov.cn",
v2\src\data\sources.ts:    url: "https://www.visaforchina.cn",
v2\src\data\sources.ts:    publisherUrl: "https://www.visaforchina.cn",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/livinginbeijing/transportation/airport/202501/t20250108_3984022.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/travellinginbeijing/essentials/inboundtourismfacilitationmeasures/202603/t20260326_4566767.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/latest/news/202511/t20251110_4267485.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/12345hotline/index.html?src=4",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-CustomsImmigration/20251112/c90227e252884a949f2091c37a0818ac.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20250614/a5c7bac93f024324ace770d3275d28b6.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240422/5251c321845b4a488723bb51dd23adc2.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-Healthcare/20250227/54af530f3bd4400da6a6fa8111bd308f.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://www.gz.gov.cn/zwfw/zxfw/jtfw/content/post_10658828.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.gz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.gz.gov.cn/guangzhouinternational/138/content/post_10480554.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.gz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.gz.gov.cn/zt/qltjygadwqjsxsdzgzlfzdf/gzzxd/content/post_9577269.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.gz.gov.cn",
v2\src\data\sources.ts:    url: "https://jtys.sz.gov.cn/ydmh/jtcx/sjcx/jcgk/content/post_8527201.html",
v2\src\data\sources.ts:    publisherUrl: "https://jtys.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://jtys.sz.gov.cn/ydmh/jtzx/zyhy_1510/content/post_11264754.html",
v2\src\data\sources.ts:    publisherUrl: "https://jtys.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.sz.gov.cn/cn/xxgk/zfxxgj/zwdt/content/post_12305039.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://jtys.sz.gov.cn/ydmh/jtcx/sjcx/jcgk/content/post_8527070.html",
v2\src\data\sources.ts:    publisherUrl: "https://jtys.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://jtys.sz.gov.cn/zwgk/jtzx/cxtx/content/post_10939875.html",
v2\src\data\sources.ts:    publisherUrl: "https://jtys.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.12306.cn/en/index.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.12306.cn",
v2\src\data\sources.ts:    url: "https://www.12306.cn/en/faq.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.12306.cn",
v2\src\data\sources.ts:    url: "https://wb.beijing.gov.cn/home/index/wsjx/202401/t20240115_3535596.html",
v2\src\data\sources.ts:    publisherUrl: "https://wb.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://wb.beijing.gov.cn/en/express/202508/t20250828_4186027.html",
v2\src\data\sources.ts:    publisherUrl: "https://wb.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/travellinginbeijing/transportation/airport/202005/t20200516_1899219.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/livinginbeijing/transportation/beijingsubway/202411/t20241110_3937243.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20250627/d8f21f2e7d3b45a5b03757e35039b806.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://english.pudong.gov.cn/2025-06/16/c_1100880.htm",
v2\src\data\sources.ts:    publisherUrl: "https://english.pudong.gov.cn",
v2\src\data\sources.ts:    url: "https://english.pudong.gov.cn/chinashftz/2018-09/01/c_262635.htm",
v2\src\data\sources.ts:    publisherUrl: "https://english.pudong.gov.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-Transportation/20241231/f66f14bbd4b549ab88e6f3aec375790c.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "http://www.eguangzhou.gov.cn/gzservice/content/post_39343.html",
v2\src\data\sources.ts:    publisherUrl: "http://www.eguangzhou.gov.cn",
v2\src\data\sources.ts:    url: "http://www.eguangzhou.gov.cn/gzservice/content/post_39620.html",
v2\src\data\sources.ts:    publisherUrl: "http://www.eguangzhou.gov.cn",
v2\src\data\sources.ts:    url: "https://www.gz.gov.cn/guangzhouinternational/home/citynews/content/post_9529430.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.gz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.sz.gov.cn/en_szgov/news/infocus/SZCitywalk/Explore/Plan/content/post_11908152.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.sz.gov.cn/en_szgov/news/latest/content/post_11628100.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.sz.gov.cn/en_szgov/news/infocus/block/news/travel/content/post_10622813.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.sz.gov.cn/en_szgov/news/latest/content/post_12373687.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://english.www.gov.cn/news/202404/11/content_WS6617c858c6d0868f4e8e5f4d.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.www.gov.cn",
v2\src\data\sources.ts:    url: "http://english.customs.gov.cn/statics/88707c1e-aa4e-40ca-a968-bdbdbb565e4f.html",
v2\src\data\sources.ts:    publisherUrl: "http://english.customs.gov.cn",
v2\src\data\sources.ts:    url: "https://www.boc.cn/english/individuals/pbk/sch/202601/t20260105_25639179.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.boc.cn",
v2\src\data\sources.ts:    url: "https://m.unionpayintl.com/wap/en/serviceCenter/cardUsingInstructions/1435.shtml",
v2\src\data\sources.ts:    publisherUrl: "https://m.unionpayintl.com",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-EmergencyNumbers/20241210/cbc5280b9f96440a93234bfc5e0c1023.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/travellinginbeijing/quickguideontravelservices/traveltips/202108/t20210811_2466839.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://www.pumch.cn/en/medical_care.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.pumch.cn",
v2\src\data\sources.ts:    url: "https://beijing.ufh.com.cn/locations/main-campus?lang=en",
v2\src\data\sources.ts:    publisherUrl: "https://beijing.ufh.com.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-Hospitals/20241014/e3bebde56c344efcbc3ca57e3a50e55a.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://shanghai.ufh.com.cn/locations/puxi-main-hospital/?lang=en",
v2\src\data\sources.ts:    publisherUrl: "https://shanghai.ufh.com.cn",
v2\src\data\sources.ts:    url: "https://www.fahsysu.org.cn/en/basic/5855",
v2\src\data\sources.ts:    publisherUrl: "https://www.fahsysu.org.cn",
v2\src\data\sources.ts:    url: "https://guangzhou.ufh.com.cn/locations/guangzhou-united-family-hospital?lang=en",
v2\src\data\sources.ts:    publisherUrl: "https://guangzhou.ufh.com.cn",
v2\src\data\sources.ts:    url: "https://www.hku-szh.org/en/imc/index.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.hku-szh.org",
v2\src\data\sources.ts:    url: "https://www.sz.gov.cn/en_szgov/life/hospitals/municipal/content/post_11220998.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en/20231223/7b8359d283634bd99b4e7a2c5a89314c.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://www.gz.gov.cn/guangzhouinternational/pageelements/bottom/contactus/",
v2\src\data\sources.ts:    publisherUrl: "https://www.gz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.szpsq.gov.cn/English/SERVICES/Hotlines/content/post_11567594.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.szpsq.gov.cn",
v2\src\data\sources.ts:    url: "https://china.usembassy-china.org.cn/embassy-consulates/beijing/",
v2\src\data\sources.ts:    publisherUrl: "https://china.usembassy-china.org.cn",
v2\src\data\sources.ts:    url: "https://www.gov.uk/world/organisations/british-embassy-beijing",
v2\src\data\sources.ts:    publisherUrl: "https://www.gov.uk",
v2\src\data\sources.ts:    url: "https://www.international.gc.ca/country-pays/china-chine/beijing.aspx?lang=eng",
v2\src\data\sources.ts:    publisherUrl: "https://www.international.gc.ca",
v2\src\data\sources.ts:    url: "https://china.embassy.gov.au/bjng/contact-us.html",
v2\src\data\sources.ts:    publisherUrl: "https://china.embassy.gov.au",
v2\src\data\sources.ts:    url: "https://www.cn.emb-japan.go.jp/",
v2\src\data\sources.ts:    publisherUrl: "https://www.cn.emb-japan.go.jp",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/livinginbeijing/dining/202005/t20200513_1896788.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/specials/centralaxis/sightseeingalongthecentralaxis/202206/t20220602_2728696.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-ExpressNewsClips-Videos-WhatsNew/20250217/9795ba943afe49f8992604bf20d5ae08.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://www.gz.gov.cn/attachment/7/7792/7792046/10199330.pdf",
v2\src\data\sources.ts:    publisherUrl: "https://www.gz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.wanderinchina.com/survival-guide/useful-mobile-apps/alipay/",
v2\src\data\sources.ts:    publisherUrl: "https://www.wanderinchina.com",
v2\src\data\sources.ts:    url: "https://chinaguidelines.com/en/posts/tour-card",
v2\src\data\sources.ts:    publisherUrl: "https://chinaguidelines.com",
v2\src\data\sources.ts:    url: "https://hiddenchinatravel.com/digital-survival-china-payment-guide/",
v2\src\data\sources.ts:    publisherUrl: "https://hiddenchinatravel.com",
v2\src\data\sources.ts:    url: "https://hiddenchinatravel.com/alipay-wechat-pay-verification-failed/",
v2\src\data\sources.ts:    publisherUrl: "https://hiddenchinatravel.com",
v2\src\data\sources.ts:    url: "https://letstraveltochina.com/how-to-use-alipay-in-china/",
v2\src\data\sources.ts:    publisherUrl: "https://letstraveltochina.com",
v2\src\data\sources.ts:    url: "https://baoziinchina.com/how-to-set-up-wechat/",
v2\src\data\sources.ts:    publisherUrl: "https://baoziinchina.com",
v2\src\data\sources.ts:    url: "https://wildchina.com/2025/10/guide-to-using-alipay-2025/",
v2\src\data\sources.ts:    publisherUrl: "https://wildchina.com",
v2\src\data\sources.ts:    url: "https://wildchina.com/2025/05/wechat-pay-in-2025/",
v2\src\data\sources.ts:    publisherUrl: "https://wildchina.com",
v2\src\data\sources.ts:    url: "https://travelchinawith.me/china-travel-how-tos/how-to-use-alipay-in-china/",
v2\src\data\sources.ts:    publisherUrl: "https://travelchinawith.me",
v2\src\data\sources.ts:    url: "https://realchinatrip.com/blogs/tips/wechat-setup-guide-tourists",
v2\src\data\sources.ts:    publisherUrl: "https://realchinatrip.com",
v2\src\data\sources.ts:    url: "https://www.expatden.com/china/wechat-pay/",
v2\src\data\sources.ts:    publisherUrl: "https://www.expatden.com",
v2\src\data\sources.ts:    url: "https://fanketravel.com/blogs/blog/how-to-use-alipay-and-wechat-pay-as-a-tourist-in-china-2025-guide",
v2\src\data\sources.ts:    publisherUrl: "https://fanketravel.com",
v2\src\data\sources.ts:    url: "https://ltl-school.com/alipay-for-foreigners/",
v2\src\data\sources.ts:    publisherUrl: "https://ltl-school.com",
v2\src\data\sources.ts:    url: "https://ltl-school.com/wechat-pay-for-foreigners/",
v2\src\data\sources.ts:    publisherUrl: "https://ltl-school.com",
v2\src\data\sources.ts:    url: "https://www.travelofchina.com/alipay-for-foreigners-china-2025-guide/",
v2\src\data\sources.ts:    publisherUrl: "https://www.travelofchina.com",
v2\src\data\sources.ts:    url: "https://chinafortravelers.com/guides/china-visa-free-transit/",
v2\src\data\sources.ts:    publisherUrl: "https://chinafortravelers.com",
v2\src\data\sources.ts:    url: "https://www.smartshanghai.com/articles/shanghai-life/the-faq-china-visa-on-arrivals-need-to-know",
v2\src\data\sources.ts:    publisherUrl: "https://www.smartshanghai.com",
v2\src\data\sources.ts:    url: "https://www.thechinajourney.com/china-travel-tips/",
v2\src\data\sources.ts:    publisherUrl: "https://www.thechinajourney.com",
v2\src\data\sources.ts:    url: "https://rachelmeetschina.com/2024/10/29/traveling-to-china-how-to-connect-your-foreign-bank-card-to-the-alipay-and-wechat/",
v2\src\data\sources.ts:    publisherUrl: "https://rachelmeetschina.com",
v2\src\data\sources.ts:    url: "https://chinaguidelines.com/en/posts/public-transport",
v2\src\data\sources.ts:    publisherUrl: "https://chinaguidelines.com",
v2\src\data\sources.ts:    url: "https://chinaguidelines.com/en/posts/high-speed-train",
v2\src\data\sources.ts:    publisherUrl: "https://chinaguidelines.com",
v2\src\data\sources.ts:    url: "https://www.flyertalk.com/forum/china/1897228-beijing-airport-taxi-scam-attempt-taxi-information-desk.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.flyertalk.com",
v2\src\data\sources.ts:    url: "https://beforeyougotravels.com/destinations/guangzhou",
v2\src\data\sources.ts:    publisherUrl: "https://beforeyougotravels.com",
v2\src\data\sources.ts:    url: "https://wise.com/sg/blog/how-to-use-didi-china",
v2\src\data\sources.ts:    publisherUrl: "https://wise.com",
v2\src\data\sources.ts:    url: "https://travelchina.tips/blogs/practical-guides/shanghai-metro-faq-for-tourists",
v2\src\data\sources.ts:    publisherUrl: "https://travelchina.tips",
v2\src\data\sources.ts:    url: "https://travelchinawith.me/china-travel-blog/taxi-and-didi-scams-in-china/",
v2\src\data\sources.ts:    publisherUrl: "https://travelchinawith.me",
v2\src\data\sources.ts:    url: "https://alittleadrift.com/vegetarian-food-in-china/",
v2\src\data\sources.ts:    publisherUrl: "https://alittleadrift.com",
v2\src\data\sources.ts:    url: "https://sinotales.com/interests/food-drink/first-time-travel-china-food-allergies/",
v2\src\data\sources.ts:    publisherUrl: "https://sinotales.com",
v2\src\data\sources.ts:    url: "https://travelchinawith.me/china-travel-blog/survival-guide-for-food-allergies-in-china/",
v2\src\data\sources.ts:    publisherUrl: "https://travelchinawith.me",
v2\src\data\sources.ts:    url: "https://www.china-mike.com/china-travel-tips/avoiding-scams/",
v2\src\data\sources.ts:    publisherUrl: "https://www.china-mike.com",
v2\src\data\sources.ts:    url: "https://www.thechinaguide.com/blog/healthcare-and-insurance",
v2\src\data\sources.ts:    publisherUrl: "https://www.thechinaguide.com",
v2\src\data\sources.ts:    url: "https://www.expatden.com/china/hospital-in-shanghai/",
v2\src\data\sources.ts:    publisherUrl: "https://www.expatden.com",
v2\src\data\sources.ts:    url: "https://www.internationalinsurance.com/countries/china/hospitals/",
v2\src\data\sources.ts:    publisherUrl: "https://www.internationalinsurance.com",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/livinginbeijing/transportation/beijingsubway/202409/t20240914_3891497.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://www.eyeshenzhen.com/content/2024-04/01/content_30840321.htm",
v2\src\data\sources.ts:    publisherUrl: "https://www.eyeshenzhen.com",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/quickguideservices/medicalguide/index.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\components\map\Map3D.tsx:    url: `https://t{s}.tianditu.gov.cn/${service}_w/wmts?tk=${token}`,
v2\src\components\map\Map3D.tsx:  return `https://t0.tianditu.gov.cn/${service}_w/wmts?${params.toString()}`;
rg: v2\*.md: 文件名、目录名或卷标语法不正确。 (os error 123)
rg: v2\*.json: 文件名、目录名或卷标语法不正确。 (os error 123)

 exited 1 in 360ms:
v2\src\root.tsx:        <title>旅行中国</title>
v2\src\root.tsx:          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='10' fill='%2318201d'/%3E%3Ctext x='32' y='42' text-anchor='middle' font-size='34' fill='white'%3E%E6%97%85%3C/text%3E%3C/svg%3E"
v2\src\pages\HomePage.tsx:          {isZh ? "欢迎来中国" : "Travel China"}
v2\src\data\city-attractions.ts:    officialUrl: "https://intl.dpm.org.cn/visit.html?l=en",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://en.mutianyugreatwall.com",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1509624780899-f812439647e4?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.beijing.gov.cn/specials/parktours/guidevisitors/summerpalace/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1619825479213-62e158b5a79d?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.beijing.gov.cn/specials/parktours/guidevisitors/templeofheaven/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1569165755139-296fac054979?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.beijing.gov.cn/specials/ticketing/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1590301729964-23833732ee04?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.beijing.gov.cn/travellinginbeijing/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1604844252839-f9c364adacdd?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231205/584672cc6d044eabb5f7f6fc9049a19f.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1506158669146-619067262a00?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231205/dc76893b94c248d195eaf7f4d44c6597.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.shanghaitower.com/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231205/19a5f5184eca45728fd57a4d4c8efc61.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231218/596192f5f59048bbbc3fa54d92304e93.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1574504500022-de9a6309a501?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://english.shanghai.gov.cn/en-MuseumsGalleries/20231218/01fdd3f62d0c4877bc289ec0b1de6afa.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1508742066636-3b9fb738ee0e?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.cantontower.com/en/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1563090162-6b4c2a20d658?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.gz.gov.cn/guangzhouinternational/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1636259584602-5a3c9c0d05ff?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.gz.gov.cn/guangzhouinternational/visitors/",
v2\src\data\city-attractions.ts:    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Chan_Clan_Ancestral_Hall.JPG",
v2\src\data\city-attractions.ts:    officialUrl: "http://www.gz.gov.cn/guangzhouinternational/visitors/whattosee/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1630831241310-3984f1b3d711?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.cantontower.com/en/pearlriver/otherships/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1563090162-6b4c2a20d658?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "http://www.baiyunshan.com.cn",
v2\src\data\city-attractions.ts:    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/42/Guangzhou_Opera_House_and_Canton_Tower.JPG",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.sz.gov.cn/en_szgov/news/infocus/SZCitywalk/Explore/Attractions/content/post_11857074.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1767628366824-be007ab6e7cf?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.octloft.cn/en/",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1728241733556-65b2afb65120?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.eyeshenzhen.com/content/2023-05/12/content_30192680.htm",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1634647626758-ad751a260e9f?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.sz.gov.cn/en_szgov/news/infocus/park/csgy/content/post_10986843.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1759970729294-99c7eebeaf54?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.sz.gov.cn/en_szgov/news/infocus/park/index.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1759970729216-49c024cd89fb?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-attractions.ts:    officialUrl: "https://www.sz.gov.cn/en_szgov/news/infocus/SZCitywalk/Explore/Districts/DapengNewDistrict/content/mpost_11892734.html",
v2\src\data\city-attractions.ts:    imageUrl: "https://images.unsplash.com/photo-1636821771168-d13e578a88ba?w=1200&q=80&auto=format&fit=crop",
v2\src\data\city-tourism-portals.ts:      url: "https://english.visitbeijing.com.cn/",
v2\src\data\city-tourism-portals.ts:      url: "https://english.beijing.gov.cn/travellinginbeijing/",
v2\src\data\city-tourism-portals.ts:      url: "https://www.meet-in-shanghai.net/",
v2\src\data\city-tourism-portals.ts:      url: "https://english.shanghai.gov.cn/en-GuideforForeignTourists/index.html",
v2\src\data\city-tourism-portals.ts:      url: "https://www.gz.gov.cn/guangzhouinternational/",
v2\src\data\city-tourism-portals.ts:      url: "https://www.eyeshenzhen.com/",
v2\src\data\city-tourism-portals.ts:      url: "https://www.sz.gov.cn/en_szgov/travel/index.html",
v2\src\data\i18n.ts:    footerNote: "Travel China demo data only.",
v2\src\data\i18n.ts:    footerNote: "旅行中国。当前为演示数据。",
v2\src\components\layout\SiteHeader.tsx:        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
v2\src\data\entry-policies.ts: * URL: https://en.nia.gov.cn/n147418/n147463/c183390/content.html
v2\src\data\entry-policies.ts: * URL: https://en.nia.gov.cn/n147418/n147463/c156094/content.html
v2\src\data\entry-policies.ts: * URL: https://english.www.gov.cn/news/202511/04/content_WS69094ae0c6d00ca5f9a07472.html
v2\src\data\entry-policies.ts:    applyUrl: "https://www.visaforchina.cn"
v2\src\data\emergency.ts:  url: "https://www.fmprc.gov.cn/web/fw_673051/lbfw_673061/fgzl_673083/",
v2\src\data\map-sources.ts:  "https://bzdt.tianditu.gov.cn/iserver/services/map-2200_China_Map/rest/maps/2200%E4%B8%87%E8%87%AA%E5%8A%A9%E5%88%B6%E5%9B%BE/image.png";
v2\src\data\sources.ts:    url: "https://en.nia.gov.cn/n147418/n147463/c183390/content.html",
v2\src\data\sources.ts:    publisherUrl: "https://en.nia.gov.cn",
v2\src\data\sources.ts:    url: "https://en.nia.gov.cn/n147418/n147463/c156094/content.html",
v2\src\data\sources.ts:    publisherUrl: "https://en.nia.gov.cn",
v2\src\data\sources.ts:    url: "https://english.www.gov.cn/news/202511/04/content_WS69094ae0c6d00ca5f9a07472.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.www.gov.cn",
v2\src\data\sources.ts:    url: "https://en.nia.gov.cn/n147418/n147468/c187308/content.html",
v2\src\data\sources.ts:    publisherUrl: "https://en.nia.gov.cn",
v2\src\data\sources.ts:    url: "https://en.nia.gov.cn/n147418/n147463/c191530/content.html",
v2\src\data\sources.ts:    publisherUrl: "https://en.nia.gov.cn",
v2\src\data\sources.ts:    url: "https://www.fmprc.gov.cn/web/fw_673051/lbfw_673061/fgzl_673083/",
v2\src\data\sources.ts:    publisherUrl: "https://www.fmprc.gov.cn",
v2\src\data\sources.ts:    url: "https://www.visaforchina.cn",
v2\src\data\sources.ts:    publisherUrl: "https://www.visaforchina.cn",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/livinginbeijing/transportation/airport/202501/t20250108_3984022.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/travellinginbeijing/essentials/inboundtourismfacilitationmeasures/202603/t20260326_4566767.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/latest/news/202511/t20251110_4267485.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/12345hotline/index.html?src=4",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-CustomsImmigration/20251112/c90227e252884a949f2091c37a0818ac.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20250614/a5c7bac93f024324ace770d3275d28b6.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20240422/5251c321845b4a488723bb51dd23adc2.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-Healthcare/20250227/54af530f3bd4400da6a6fa8111bd308f.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://www.gz.gov.cn/zwfw/zxfw/jtfw/content/post_10658828.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.gz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.gz.gov.cn/guangzhouinternational/138/content/post_10480554.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.gz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.gz.gov.cn/zt/qltjygadwqjsxsdzgzlfzdf/gzzxd/content/post_9577269.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.gz.gov.cn",
v2\src\data\sources.ts:    url: "https://jtys.sz.gov.cn/ydmh/jtcx/sjcx/jcgk/content/post_8527201.html",
v2\src\data\sources.ts:    publisherUrl: "https://jtys.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://jtys.sz.gov.cn/ydmh/jtzx/zyhy_1510/content/post_11264754.html",
v2\src\data\sources.ts:    publisherUrl: "https://jtys.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.sz.gov.cn/cn/xxgk/zfxxgj/zwdt/content/post_12305039.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://jtys.sz.gov.cn/ydmh/jtcx/sjcx/jcgk/content/post_8527070.html",
v2\src\data\sources.ts:    publisherUrl: "https://jtys.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://jtys.sz.gov.cn/zwgk/jtzx/cxtx/content/post_10939875.html",
v2\src\data\sources.ts:    publisherUrl: "https://jtys.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.12306.cn/en/index.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.12306.cn",
v2\src\data\sources.ts:    url: "https://www.12306.cn/en/faq.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.12306.cn",
v2\src\data\sources.ts:    url: "https://wb.beijing.gov.cn/home/index/wsjx/202401/t20240115_3535596.html",
v2\src\data\sources.ts:    publisherUrl: "https://wb.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://wb.beijing.gov.cn/en/express/202508/t20250828_4186027.html",
v2\src\data\sources.ts:    publisherUrl: "https://wb.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/travellinginbeijing/transportation/airport/202005/t20200516_1899219.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/livinginbeijing/transportation/beijingsubway/202411/t20241110_3937243.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-Latest-WhatsNew/20250627/d8f21f2e7d3b45a5b03757e35039b806.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://english.pudong.gov.cn/2025-06/16/c_1100880.htm",
v2\src\data\sources.ts:    publisherUrl: "https://english.pudong.gov.cn",
v2\src\data\sources.ts:    url: "https://english.pudong.gov.cn/chinashftz/2018-09/01/c_262635.htm",
v2\src\data\sources.ts:    publisherUrl: "https://english.pudong.gov.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-Transportation/20241231/f66f14bbd4b549ab88e6f3aec375790c.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "http://www.eguangzhou.gov.cn/gzservice/content/post_39343.html",
v2\src\data\sources.ts:    publisherUrl: "http://www.eguangzhou.gov.cn",
v2\src\data\sources.ts:    url: "http://www.eguangzhou.gov.cn/gzservice/content/post_39620.html",
v2\src\data\sources.ts:    publisherUrl: "http://www.eguangzhou.gov.cn",
v2\src\data\sources.ts:    url: "https://www.gz.gov.cn/guangzhouinternational/home/citynews/content/post_9529430.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.gz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.sz.gov.cn/en_szgov/news/infocus/SZCitywalk/Explore/Plan/content/post_11908152.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.sz.gov.cn/en_szgov/news/latest/content/post_11628100.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.sz.gov.cn/en_szgov/news/infocus/block/news/travel/content/post_10622813.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.sz.gov.cn/en_szgov/news/latest/content/post_12373687.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://english.www.gov.cn/news/202404/11/content_WS6617c858c6d0868f4e8e5f4d.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.www.gov.cn",
v2\src\data\sources.ts:    url: "http://english.customs.gov.cn/statics/88707c1e-aa4e-40ca-a968-bdbdbb565e4f.html",
v2\src\data\sources.ts:    publisherUrl: "http://english.customs.gov.cn",
v2\src\data\sources.ts:    url: "https://www.boc.cn/english/individuals/pbk/sch/202601/t20260105_25639179.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.boc.cn",
v2\src\data\sources.ts:    url: "https://m.unionpayintl.com/wap/en/serviceCenter/cardUsingInstructions/1435.shtml",
v2\src\data\sources.ts:    publisherUrl: "https://m.unionpayintl.com",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-EmergencyNumbers/20241210/cbc5280b9f96440a93234bfc5e0c1023.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/travellinginbeijing/quickguideontravelservices/traveltips/202108/t20210811_2466839.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://www.pumch.cn/en/medical_care.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.pumch.cn",
v2\src\data\sources.ts:    url: "https://beijing.ufh.com.cn/locations/main-campus?lang=en",
v2\src\data\sources.ts:    publisherUrl: "https://beijing.ufh.com.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-Hospitals/20241014/e3bebde56c344efcbc3ca57e3a50e55a.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://shanghai.ufh.com.cn/locations/puxi-main-hospital/?lang=en",
v2\src\data\sources.ts:    publisherUrl: "https://shanghai.ufh.com.cn",
v2\src\data\sources.ts:    url: "https://www.fahsysu.org.cn/en/basic/5855",
v2\src\data\sources.ts:    publisherUrl: "https://www.fahsysu.org.cn",
v2\src\data\sources.ts:    url: "https://guangzhou.ufh.com.cn/locations/guangzhou-united-family-hospital?lang=en",
v2\src\data\sources.ts:    publisherUrl: "https://guangzhou.ufh.com.cn",
v2\src\data\sources.ts:    url: "https://www.hku-szh.org/en/imc/index.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.hku-szh.org",
v2\src\data\sources.ts:    url: "https://www.sz.gov.cn/en_szgov/life/hospitals/municipal/content/post_11220998.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.sz.gov.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en/20231223/7b8359d283634bd99b4e7a2c5a89314c.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://www.gz.gov.cn/guangzhouinternational/pageelements/bottom/contactus/",
v2\src\data\sources.ts:    publisherUrl: "https://www.gz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.szpsq.gov.cn/English/SERVICES/Hotlines/content/post_11567594.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.szpsq.gov.cn",
v2\src\data\sources.ts:    url: "https://china.usembassy-china.org.cn/embassy-consulates/beijing/",
v2\src\data\sources.ts:    publisherUrl: "https://china.usembassy-china.org.cn",
v2\src\data\sources.ts:    url: "https://www.gov.uk/world/organisations/british-embassy-beijing",
v2\src\data\sources.ts:    publisherUrl: "https://www.gov.uk",
v2\src\data\sources.ts:    url: "https://www.international.gc.ca/country-pays/china-chine/beijing.aspx?lang=eng",
v2\src\data\sources.ts:    publisherUrl: "https://www.international.gc.ca",
v2\src\data\sources.ts:    url: "https://china.embassy.gov.au/bjng/contact-us.html",
v2\src\data\sources.ts:    publisherUrl: "https://china.embassy.gov.au",
v2\src\data\sources.ts:    url: "https://www.cn.emb-japan.go.jp/",
v2\src\data\sources.ts:    publisherUrl: "https://www.cn.emb-japan.go.jp",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/livinginbeijing/dining/202005/t20200513_1896788.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/specials/centralaxis/sightseeingalongthecentralaxis/202206/t20220602_2728696.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://english.shanghai.gov.cn/en-ExpressNewsClips-Videos-WhatsNew/20250217/9795ba943afe49f8992604bf20d5ae08.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.shanghai.gov.cn",
v2\src\data\sources.ts:    url: "https://www.gz.gov.cn/attachment/7/7792/7792046/10199330.pdf",
v2\src\data\sources.ts:    publisherUrl: "https://www.gz.gov.cn",
v2\src\data\sources.ts:    url: "https://www.wanderinchina.com/survival-guide/useful-mobile-apps/alipay/",
v2\src\data\sources.ts:    publisherUrl: "https://www.wanderinchina.com",
v2\src\data\sources.ts:    url: "https://chinaguidelines.com/en/posts/tour-card",
v2\src\data\sources.ts:    publisherUrl: "https://chinaguidelines.com",
v2\src\data\sources.ts:    url: "https://hiddenchinatravel.com/digital-survival-china-payment-guide/",
v2\src\data\sources.ts:    publisherUrl: "https://hiddenchinatravel.com",
v2\src\data\sources.ts:    url: "https://hiddenchinatravel.com/alipay-wechat-pay-verification-failed/",
v2\src\data\sources.ts:    publisherUrl: "https://hiddenchinatravel.com",
v2\src\data\sources.ts:    url: "https://letstraveltochina.com/how-to-use-alipay-in-china/",
v2\src\data\sources.ts:    publisherUrl: "https://letstraveltochina.com",
v2\src\data\sources.ts:    url: "https://baoziinchina.com/how-to-set-up-wechat/",
v2\src\data\sources.ts:    publisherUrl: "https://baoziinchina.com",
v2\src\data\sources.ts:    url: "https://wildchina.com/2025/10/guide-to-using-alipay-2025/",
v2\src\data\sources.ts:    publisherUrl: "https://wildchina.com",
v2\src\data\sources.ts:    url: "https://wildchina.com/2025/05/wechat-pay-in-2025/",
v2\src\data\sources.ts:    publisherUrl: "https://wildchina.com",
v2\src\data\sources.ts:    url: "https://travelchinawith.me/china-travel-how-tos/how-to-use-alipay-in-china/",
v2\src\data\sources.ts:    publisherUrl: "https://travelchinawith.me",
v2\src\data\sources.ts:    url: "https://realchinatrip.com/blogs/tips/wechat-setup-guide-tourists",
v2\src\data\sources.ts:    publisherUrl: "https://realchinatrip.com",
v2\src\data\sources.ts:    url: "https://www.expatden.com/china/wechat-pay/",
v2\src\data\sources.ts:    publisherUrl: "https://www.expatden.com",
v2\src\data\sources.ts:    url: "https://fanketravel.com/blogs/blog/how-to-use-alipay-and-wechat-pay-as-a-tourist-in-china-2025-guide",
v2\src\data\sources.ts:    publisherUrl: "https://fanketravel.com",
v2\src\data\sources.ts:    url: "https://ltl-school.com/alipay-for-foreigners/",
v2\src\data\sources.ts:    publisherUrl: "https://ltl-school.com",
v2\src\data\sources.ts:    url: "https://ltl-school.com/wechat-pay-for-foreigners/",
v2\src\data\sources.ts:    publisherUrl: "https://ltl-school.com",
v2\src\data\sources.ts:    url: "https://www.travelofchina.com/alipay-for-foreigners-china-2025-guide/",
v2\src\data\sources.ts:    publisherUrl: "https://www.travelofchina.com",
v2\src\data\sources.ts:    url: "https://chinafortravelers.com/guides/china-visa-free-transit/",
v2\src\data\sources.ts:    publisherUrl: "https://chinafortravelers.com",
v2\src\data\sources.ts:    url: "https://www.smartshanghai.com/articles/shanghai-life/the-faq-china-visa-on-arrivals-need-to-know",
v2\src\data\sources.ts:    publisherUrl: "https://www.smartshanghai.com",
v2\src\data\sources.ts:    url: "https://www.thechinajourney.com/china-travel-tips/",
v2\src\data\sources.ts:    publisherUrl: "https://www.thechinajourney.com",
v2\src\data\sources.ts:    url: "https://rachelmeetschina.com/2024/10/29/traveling-to-china-how-to-connect-your-foreign-bank-card-to-the-alipay-and-wechat/",
v2\src\data\sources.ts:    publisherUrl: "https://rachelmeetschina.com",
v2\src\data\sources.ts:    url: "https://chinaguidelines.com/en/posts/public-transport",
v2\src\data\sources.ts:    publisherUrl: "https://chinaguidelines.com",
v2\src\data\sources.ts:    url: "https://chinaguidelines.com/en/posts/high-speed-train",
v2\src\data\sources.ts:    publisherUrl: "https://chinaguidelines.com",
v2\src\data\sources.ts:    url: "https://www.flyertalk.com/forum/china/1897228-beijing-airport-taxi-scam-attempt-taxi-information-desk.html",
v2\src\data\sources.ts:    publisherUrl: "https://www.flyertalk.com",
v2\src\data\sources.ts:    url: "https://beforeyougotravels.com/destinations/guangzhou",
v2\src\data\sources.ts:    publisherUrl: "https://beforeyougotravels.com",
v2\src\data\sources.ts:    url: "https://wise.com/sg/blog/how-to-use-didi-china",
v2\src\data\sources.ts:    publisherUrl: "https://wise.com",
v2\src\data\sources.ts:    url: "https://travelchina.tips/blogs/practical-guides/shanghai-metro-faq-for-tourists",
v2\src\data\sources.ts:    publisherUrl: "https://travelchina.tips",
v2\src\data\sources.ts:    url: "https://travelchinawith.me/china-travel-blog/taxi-and-didi-scams-in-china/",
v2\src\data\sources.ts:    publisherUrl: "https://travelchinawith.me",
v2\src\data\sources.ts:    url: "https://alittleadrift.com/vegetarian-food-in-china/",
v2\src\data\sources.ts:    publisherUrl: "https://alittleadrift.com",
v2\src\data\sources.ts:    url: "https://sinotales.com/interests/food-drink/first-time-travel-china-food-allergies/",
v2\src\data\sources.ts:    publisherUrl: "https://sinotales.com",
v2\src\data\sources.ts:    url: "https://travelchinawith.me/china-travel-blog/survival-guide-for-food-allergies-in-china/",
v2\src\data\sources.ts:    publisherUrl: "https://travelchinawith.me",
v2\src\data\sources.ts:    url: "https://www.china-mike.com/china-travel-tips/avoiding-scams/",
v2\src\data\sources.ts:    publisherUrl: "https://www.china-mike.com",
v2\src\data\sources.ts:    url: "https://www.thechinaguide.com/blog/healthcare-and-insurance",
v2\src\data\sources.ts:    publisherUrl: "https://www.thechinaguide.com",
v2\src\data\sources.ts:    url: "https://www.expatden.com/china/hospital-in-shanghai/",
v2\src\data\sources.ts:    publisherUrl: "https://www.expatden.com",
v2\src\data\sources.ts:    url: "https://www.internationalinsurance.com/countries/china/hospitals/",
v2\src\data\sources.ts:    publisherUrl: "https://www.internationalinsurance.com",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/livinginbeijing/transportation/beijingsubway/202409/t20240914_3891497.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\data\sources.ts:    url: "https://www.eyeshenzhen.com/content/2024-04/01/content_30840321.htm",
v2\src\data\sources.ts:    publisherUrl: "https://www.eyeshenzhen.com",
v2\src\data\sources.ts:    url: "https://english.beijing.gov.cn/quickguideservices/medicalguide/index.html",
v2\src\data\sources.ts:    publisherUrl: "https://english.beijing.gov.cn",
v2\src\components\map\Map3D.tsx:    url: `https://t{s}.tianditu.gov.cn/${service}_w/wmts?tk=${token}`,
v2\src\components\map\Map3D.tsx:  return `https://t0.tianditu.gov.cn/${service}_w/wmts?${params.toString()}`;
rg: v2\*.md: 文件名、目录名或卷标语法不正确。 (os error 123)
rg: v2\*.json: 文件名、目录名或卷标语法不正确。 (os error 123)

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg \"vite/client|ImportMetaEnv|VITE_\" v2\\src v2\\tsconfig*" in C:\Users\h\Documents\New project 2
2026-05-12T03:12:33.877145Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.4 seconds
Output:
v2\src\components\map\Map3D.tsx:  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
v2\src\components\map\Map3D.tsx:              VITE_TIANDITU_KEY=your_tianditu_tk_here
rg: v2\tsconfig*: 文件名、目录名或卷标语法不正确。 (os error 123)

 exited 1 in 422ms:
v2\src\components\map\Map3D.tsx:  const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
v2\src\components\map\Map3D.tsx:              VITE_TIANDITU_KEY=your_tianditu_tk_here
rg: v2\tsconfig*: 文件名、目录名或卷标语法不正确。 (os error 123)

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw v2\\tsconfig.app.json" in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw v2\\tsconfig.json" in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw v2\\vite.config.ts" in C:\Users\h\Documents\New project 2
 succeeded in 679ms:
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


 succeeded in 699ms:
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}


 succeeded in 719ms:
import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

const cesiumSource = "node_modules/cesium/Build/Cesium";

export default defineConfig({
  define: {
    CESIUM_BASE_URL: JSON.stringify("/cesium")
  },
  plugins: [
    tailwindcss(),
    reactRouter(),
    viteStaticCopy({
      targets: [
        { src: `${cesiumSource}/Workers`, dest: "cesium" },
        { src: `${cesiumSource}/Assets`, dest: "cesium" },
        { src: `${cesiumSource}/Widgets`, dest: "cesium" },
        { src: `${cesiumSource}/ThirdParty`, dest: "cesium" }
      ]
    })
  ],
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true
  }
});


codex
我会加一个很小的 JSON-LD helper 统一处理绝对 URL、BreadcrumbList 和安全 stringify，然后在三个页面里直接渲染 `<script type="application/ld+json">`。`VITE_SITE_URL` 会作为站点域名来源，未配置时先用占位域名，符合这次 SearchAction 占位需求。
apply patch
patch: completed
C:\Users\h\Documents\New project 2\v2\src\lib\jsonLd.ts
diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}

diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}

2026-05-12T03:14:07.562212Z ERROR codex_core::tools::router: error=apply_patch verification failed: Failed to find expected lines in C:\Users\h\Documents\New project 2\v2\src\pages\HomePage.tsx:
const guideLinks = [
  { to: "/guide/entry", en: "Entry & visa", zh: "鍏ュ绛捐瘉" },
  { to: "/guide/payments", en: "Payments", zh: "鏀粯鍑嗗" },
  { to: "/guide/notes", en: "Travel notes", zh: "鍑鸿娉ㄦ剰浜嬮」" }
];

function pickCityPhoto(cityId: CityId): Attraction {
  return attractionsByCity(cityId)[0];
}
diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}

apply patch
patch: completed
C:\Users\h\Documents\New project 2\v2\src\pages\HomePage.tsx
diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..1ae2bfb5ad0ef5bc237251dd9443b209e3fd6ebf
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 

diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..1ae2bfb5ad0ef5bc237251dd9443b209e3fd6ebf
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 

apply patch
patch: completed
C:\Users\h\Documents\New project 2\v2\src\pages\HomePage.tsx
diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..4c0454524260e2fa66f4e4a9391c3e724949b9f3
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 

diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..4c0454524260e2fa66f4e4a9391c3e724949b9f3
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"return \\(|</main>|function CityPhotoCard|websiteJsonLd\" v2\\src\\pages\\HomePage.tsx" in C:\Users\h\Documents\New project 2
 succeeded in 620ms:
17:const websiteJsonLd = {
57:  return (
121:    </main>
125:function CityPhotoCard({
136:  return (

diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..4c0454524260e2fa66f4e4a9391c3e724949b9f3
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 

apply patch
patch: completed
C:\Users\h\Documents\New project 2\v2\src\pages\HomePage.tsx
diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

codex
接下来改城市页：有效 city route 会输出一个 `@graph`，包含当前 City 节点和该城市从 `city-attractions.ts` 取出的所有 TouristAttraction 节点，再加面包屑。
apply patch
patch: completed
C:\Users\h\Documents\New project 2\v2\src\pages\CityPage.tsx
diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..f0e2aa8d48f31ce2b41124d3af6795edddb69fe9
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..f0e2aa8d48f31ce2b41124d3af6795edddb69fe9
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

apply patch
patch: completed
C:\Users\h\Documents\New project 2\v2\src\pages\CityPage.tsx
diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..360e25a4c10b72db063439e049e8ea017c789e37
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City" },
+    { name: city.zh, path: `/city/${cityId}` }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..360e25a4c10b72db063439e049e8ea017c789e37
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City" },
+    { name: city.zh, path: `/city/${cityId}` }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

apply patch
patch: completed
C:\Users\h\Documents\New project 2\v2\src\pages\CityPage.tsx
diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..baf8f90a22e4466ab904c2b9e4f91effa4df7249
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City" },
+    { name: city.zh, path: `/city/${cityId}` }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..baf8f90a22e4466ab904c2b9e4f91effa4df7249
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City" },
+    { name: city.zh, path: `/city/${cityId}` }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

codex
最后改 guide：只在 `/guide/notes` 输出 FAQPage，问题和回答都直接取英文 FAQ 数据，同时给 notes 页加 Home > Guide > Travel notes 面包屑。
apply patch
patch: completed
C:\Users\h\Documents\New project 2\v2\src\pages\GuidePage.tsx
diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..baf8f90a22e4466ab904c2b9e4f91effa4df7249
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City" },
+    { name: city.zh, path: `/city/${cityId}` }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index e5284f7d2a7e5ead209144388f75da30bff35f5b..accb031da4963fcdfa16095e453ba222a38dbf38
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,9 +2,11 @@
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
-import TopQuestions from "../components/sections/TopQuestions";
-import SourcesNote from "../components/common/SourcesNote";
-import { useLang } from "../store/language";
+import TopQuestions from "../components/sections/TopQuestions";
+import SourcesNote from "../components/common/SourcesNote";
+import { topQuestions } from "../data/top-questions";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
 
 type GuideTopic = "entry" | "payments" | "notes";
 
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..baf8f90a22e4466ab904c2b9e4f91effa4df7249
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City" },
+    { name: city.zh, path: `/city/${cityId}` }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index e5284f7d2a7e5ead209144388f75da30bff35f5b..accb031da4963fcdfa16095e453ba222a38dbf38
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,9 +2,11 @@
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
-import TopQuestions from "../components/sections/TopQuestions";
-import SourcesNote from "../components/common/SourcesNote";
-import { useLang } from "../store/language";
+import TopQuestions from "../components/sections/TopQuestions";
+import SourcesNote from "../components/common/SourcesNote";
+import { topQuestions } from "../data/top-questions";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
 
 type GuideTopic = "entry" | "payments" | "notes";
 
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

apply patch
patch: completed
C:\Users\h\Documents\New project 2\v2\src\pages\GuidePage.tsx
diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..baf8f90a22e4466ab904c2b9e4f91effa4df7249
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City" },
+    { name: city.zh, path: `/city/${cityId}` }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index e5284f7d2a7e5ead209144388f75da30bff35f5b..5a345d1e4b30406272e27d396aef2a5635093334
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,9 +2,11 @@
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
-import TopQuestions from "../components/sections/TopQuestions";
-import SourcesNote from "../components/common/SourcesNote";
-import { useLang } from "../store/language";
+import TopQuestions from "../components/sections/TopQuestions";
+import SourcesNote from "../components/common/SourcesNote";
+import { topQuestions } from "../data/top-questions";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
 
 type GuideTopic = "entry" | "payments" | "notes";
 
@@ -29,9 +31,28 @@
   }
 };
 
-const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
-
-export default function GuidePage() {
+const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
+
+const notesFaqJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "FAQPage",
+  mainEntity: topQuestions.map((question) => ({
+    "@type": "Question",
+    name: question.questionEn,
+    acceptedAnswer: {
+      "@type": "Answer",
+      text: question.answerEn
+    }
+  }))
+};
+
+const notesBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "Guide" },
+  { name: "Travel notes", path: "/guide/notes" }
+]);
+
+export default function GuidePage() {
   const { topic } = useParams<{ topic: string }>();
   const { lang } = useLang();
   const isZh = lang === "zh";
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..baf8f90a22e4466ab904c2b9e4f91effa4df7249
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City" },
+    { name: city.zh, path: `/city/${cityId}` }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index e5284f7d2a7e5ead209144388f75da30bff35f5b..5a345d1e4b30406272e27d396aef2a5635093334
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,9 +2,11 @@
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
-import TopQuestions from "../components/sections/TopQuestions";
-import SourcesNote from "../components/common/SourcesNote";
-import { useLang } from "../store/language";
+import TopQuestions from "../components/sections/TopQuestions";
+import SourcesNote from "../components/common/SourcesNote";
+import { topQuestions } from "../data/top-questions";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
 
 type GuideTopic = "entry" | "payments" | "notes";
 
@@ -29,9 +31,28 @@
   }
 };
 
-const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
-
-export default function GuidePage() {
+const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
+
+const notesFaqJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "FAQPage",
+  mainEntity: topQuestions.map((question) => ({
+    "@type": "Question",
+    name: question.questionEn,
+    acceptedAnswer: {
+      "@type": "Answer",
+      text: question.answerEn
+    }
+  }))
+};
+
+const notesBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "Guide" },
+  { name: "Travel notes", path: "/guide/notes" }
+]);
+
+export default function GuidePage() {
   const { topic } = useParams<{ topic: string }>();
   const { lang } = useLang();
   const isZh = lang === "zh";
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

apply patch
patch: completed
C:\Users\h\Documents\New project 2\v2\src\pages\GuidePage.tsx
diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..baf8f90a22e4466ab904c2b9e4f91effa4df7249
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City" },
+    { name: city.zh, path: `/city/${cityId}` }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index e5284f7d2a7e5ead209144388f75da30bff35f5b..be4e27a8262bff80af1019e085ca973bd37037b8
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,9 +2,11 @@
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
-import TopQuestions from "../components/sections/TopQuestions";
-import SourcesNote from "../components/common/SourcesNote";
-import { useLang } from "../store/language";
+import TopQuestions from "../components/sections/TopQuestions";
+import SourcesNote from "../components/common/SourcesNote";
+import { topQuestions } from "../data/top-questions";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
 
 type GuideTopic = "entry" | "payments" | "notes";
 
@@ -29,9 +31,28 @@
   }
 };
 
-const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
-
-export default function GuidePage() {
+const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
+
+const notesFaqJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "FAQPage",
+  mainEntity: topQuestions.map((question) => ({
+    "@type": "Question",
+    name: question.questionEn,
+    acceptedAnswer: {
+      "@type": "Answer",
+      text: question.answerEn
+    }
+  }))
+};
+
+const notesBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "Guide" },
+  { name: "Travel notes", path: "/guide/notes" }
+]);
+
+export default function GuidePage() {
   const { topic } = useParams<{ topic: string }>();
   const { lang } = useLang();
   const isZh = lang === "zh";
@@ -54,10 +75,23 @@
   }
 
   const current = topic as GuideTopic;
-  const label = topicLabels[current];
-
-  return (
-    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+  const label = topicLabels[current];
+
+  return (
+    <>
+      {current === "notes" && (
+        <>
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesFaqJsonLd) }}
+          />
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesBreadcrumbJsonLd) }}
+          />
+        </>
+      )}
+      <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 返回首页" : "← Home"}
@@ -78,6 +112,7 @@
       )}
 
       <SourcesNote />
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..baf8f90a22e4466ab904c2b9e4f91effa4df7249
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City" },
+    { name: city.zh, path: `/city/${cityId}` }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index e5284f7d2a7e5ead209144388f75da30bff35f5b..be4e27a8262bff80af1019e085ca973bd37037b8
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,9 +2,11 @@
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
-import TopQuestions from "../components/sections/TopQuestions";
-import SourcesNote from "../components/common/SourcesNote";
-import { useLang } from "../store/language";
+import TopQuestions from "../components/sections/TopQuestions";
+import SourcesNote from "../components/common/SourcesNote";
+import { topQuestions } from "../data/top-questions";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
 
 type GuideTopic = "entry" | "payments" | "notes";
 
@@ -29,9 +31,28 @@
   }
 };
 
-const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
-
-export default function GuidePage() {
+const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
+
+const notesFaqJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "FAQPage",
+  mainEntity: topQuestions.map((question) => ({
+    "@type": "Question",
+    name: question.questionEn,
+    acceptedAnswer: {
+      "@type": "Answer",
+      text: question.answerEn
+    }
+  }))
+};
+
+const notesBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "Guide" },
+  { name: "Travel notes", path: "/guide/notes" }
+]);
+
+export default function GuidePage() {
   const { topic } = useParams<{ topic: string }>();
   const { lang } = useLang();
   const isZh = lang === "zh";
@@ -54,10 +75,23 @@
   }
 
   const current = topic as GuideTopic;
-  const label = topicLabels[current];
-
-  return (
-    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+  const label = topicLabels[current];
+
+  return (
+    <>
+      {current === "notes" && (
+        <>
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesFaqJsonLd) }}
+          />
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesBreadcrumbJsonLd) }}
+          />
+        </>
+      )}
+      <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 返回首页" : "← Home"}
@@ -78,6 +112,7 @@
       )}
 
       <SourcesNote />
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

  ✓ Inspect v2 pages and structured data sources
  ✓ Add JSON-LD scripts to Home, City, Guide pages
  → Run TypeScript and production build
diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..baf8f90a22e4466ab904c2b9e4f91effa4df7249
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City" },
+    { name: city.zh, path: `/city/${cityId}` }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index e5284f7d2a7e5ead209144388f75da30bff35f5b..be4e27a8262bff80af1019e085ca973bd37037b8
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,9 +2,11 @@
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
-import TopQuestions from "../components/sections/TopQuestions";
-import SourcesNote from "../components/common/SourcesNote";
-import { useLang } from "../store/language";
+import TopQuestions from "../components/sections/TopQuestions";
+import SourcesNote from "../components/common/SourcesNote";
+import { topQuestions } from "../data/top-questions";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
 
 type GuideTopic = "entry" | "payments" | "notes";
 
@@ -29,9 +31,28 @@
   }
 };
 
-const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
-
-export default function GuidePage() {
+const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
+
+const notesFaqJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "FAQPage",
+  mainEntity: topQuestions.map((question) => ({
+    "@type": "Question",
+    name: question.questionEn,
+    acceptedAnswer: {
+      "@type": "Answer",
+      text: question.answerEn
+    }
+  }))
+};
+
+const notesBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "Guide" },
+  { name: "Travel notes", path: "/guide/notes" }
+]);
+
+export default function GuidePage() {
   const { topic } = useParams<{ topic: string }>();
   const { lang } = useLang();
   const isZh = lang === "zh";
@@ -54,10 +75,23 @@
   }
 
   const current = topic as GuideTopic;
-  const label = topicLabels[current];
-
-  return (
-    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+  const label = topicLabels[current];
+
+  return (
+    <>
+      {current === "notes" && (
+        <>
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesFaqJsonLd) }}
+          />
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesBreadcrumbJsonLd) }}
+          />
+        </>
+      )}
+      <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 返回首页" : "← Home"}
@@ -78,6 +112,7 @@
       )}
 
       <SourcesNote />
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

codex
结构化数据代码已落到三个页面。现在先跑 TypeScript，若有 React/TS 约束问题会直接修。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in C:\Users\h\Documents\New project 2\v2
 succeeded in 1388ms:
diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..baf8f90a22e4466ab904c2b9e4f91effa4df7249
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City" },
+    { name: city.zh, path: `/city/${cityId}` }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index e5284f7d2a7e5ead209144388f75da30bff35f5b..be4e27a8262bff80af1019e085ca973bd37037b8
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,9 +2,11 @@
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
-import TopQuestions from "../components/sections/TopQuestions";
-import SourcesNote from "../components/common/SourcesNote";
-import { useLang } from "../store/language";
+import TopQuestions from "../components/sections/TopQuestions";
+import SourcesNote from "../components/common/SourcesNote";
+import { topQuestions } from "../data/top-questions";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
 
 type GuideTopic = "entry" | "payments" | "notes";
 
@@ -29,9 +31,28 @@
   }
 };
 
-const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
-
-export default function GuidePage() {
+const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
+
+const notesFaqJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "FAQPage",
+  mainEntity: topQuestions.map((question) => ({
+    "@type": "Question",
+    name: question.questionEn,
+    acceptedAnswer: {
+      "@type": "Answer",
+      text: question.answerEn
+    }
+  }))
+};
+
+const notesBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "Guide" },
+  { name: "Travel notes", path: "/guide/notes" }
+]);
+
+export default function GuidePage() {
   const { topic } = useParams<{ topic: string }>();
   const { lang } = useLang();
   const isZh = lang === "zh";
@@ -54,10 +75,23 @@
   }
 
   const current = topic as GuideTopic;
-  const label = topicLabels[current];
-
-  return (
-    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+  const label = topicLabels[current];
+
+  return (
+    <>
+      {current === "notes" && (
+        <>
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesFaqJsonLd) }}
+          />
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesBreadcrumbJsonLd) }}
+          />
+        </>
+      )}
+      <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 返回首页" : "← Home"}
@@ -78,6 +112,7 @@
       )}
 
       <SourcesNote />
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

codex
`npx tsc --noEmit` 已通过。继续跑生产构建，确认 React Router build 没有 SSR/打包层面的错误。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in C:\Users\h\Documents\New project 2\v2
 succeeded in 8205ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1507 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                    6.07 kB │ gzip:     0.93 kB
build/client/assets/Map3D-B9DDZdqH.css             24.01 kB │ gzip:     5.37 kB
build/client/assets/root-C7aYlZEt.css              42.57 kB │ gzip:     8.00 kB
build/client/assets/language-C0Wq3lWC.js            0.26 kB │ gzip:     0.21 kB
build/client/assets/clsx-H-aRJLpe.js                0.36 kB │ gzip:     0.23 kB
build/client/assets/cityRoutes-COpiy7ox.js          0.91 kB │ gzip:     0.50 kB
build/client/assets/chunk-BA_0og6f.js               0.95 kB │ gzip:     0.56 kB
build/client/assets/provinceColors-R2ez2OJ9.js      1.84 kB │ gzip:     0.95 kB
build/client/assets/HomePage-CgoqNBdH.js            6.25 kB │ gzip:     2.89 kB
build/client/assets/SharePage-HksteEtu.js           7.48 kB │ gzip:     2.77 kB
build/client/assets/phase2-preview-DcPyXPqD.js      7.59 kB │ gzip:     4.48 kB
build/client/assets/AskPage-D75HD16s.js             7.62 kB │ gzip:     2.92 kB
build/client/assets/Map3D-DEyrIFV1.js               8.95 kB │ gzip:     4.22 kB
build/client/assets/root-DhqwcdKJ.js               10.23 kB │ gzip:     4.84 kB
build/client/assets/GuidePage-D2IOdcfO.js          11.36 kB │ gzip:     5.34 kB
build/client/assets/MapPage-Cfu7Apy4.js            13.67 kB │ gzip:     5.00 kB
build/client/assets/jsonLd-Ey63feG1.js             22.79 kB │ gzip:    11.09 kB
build/client/assets/atlas-4jqVV5Wv.js              23.24 kB │ gzip:     9.58 kB
build/client/assets/SourcesPage-CtsieNj4.js        32.19 kB │ gzip:     8.46 kB
build/client/assets/unsplash-B0y9OJKy.js           35.00 kB │ gzip:    15.33 kB
build/client/assets/SourcesNote-DfXhZovX.js        39.00 kB │ gzip:    14.91 kB
build/client/assets/CityPage-CC1OWDck.js           53.25 kB │ gzip:    19.96 kB
build/client/assets/jsx-runtime-ZMBhQML0.js       127.17 kB │ gzip:    41.93 kB
build/client/assets/entry.client-Cyh_bpCe.js      186.53 kB │ gzip:    58.89 kB
build/client/assets/Cesium-CsldJg6P.js          4,724.63 kB │ gzip: 1,304.40 kB

[32m✓ built in 4.60s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 70 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m
[2mbuild\server\assets\server-build-C7aYlZEt.css[22m

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
build/server/.vite/manifest.json                 0.74 kB │ gzip:   0.27 kB
build/server/assets/Map3D-B9DDZdqH.css          24.01 kB │ gzip:   5.37 kB
build/server/assets/server-build-C7aYlZEt.css   42.57 kB │ gzip:   8.00 kB
build/server/assets/Map3D-Cv42P-Ue.js           15.47 kB │ gzip:   5.32 kB
build/server/assets/cityRoutes-Byzkxm76.js      31.42 kB │ gzip:  10.70 kB
build/server/index.js                          320.01 kB │ gzip: 100.42 kB

[32m✓ built in 670ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m

diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..baf8f90a22e4466ab904c2b9e4f91effa4df7249
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City" },
+    { name: city.zh, path: `/city/${cityId}` }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index e5284f7d2a7e5ead209144388f75da30bff35f5b..be4e27a8262bff80af1019e085ca973bd37037b8
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,9 +2,11 @@
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
-import TopQuestions from "../components/sections/TopQuestions";
-import SourcesNote from "../components/common/SourcesNote";
-import { useLang } from "../store/language";
+import TopQuestions from "../components/sections/TopQuestions";
+import SourcesNote from "../components/common/SourcesNote";
+import { topQuestions } from "../data/top-questions";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
 
 type GuideTopic = "entry" | "payments" | "notes";
 
@@ -29,9 +31,28 @@
   }
 };
 
-const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
-
-export default function GuidePage() {
+const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
+
+const notesFaqJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "FAQPage",
+  mainEntity: topQuestions.map((question) => ({
+    "@type": "Question",
+    name: question.questionEn,
+    acceptedAnswer: {
+      "@type": "Answer",
+      text: question.answerEn
+    }
+  }))
+};
+
+const notesBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "Guide" },
+  { name: "Travel notes", path: "/guide/notes" }
+]);
+
+export default function GuidePage() {
   const { topic } = useParams<{ topic: string }>();
   const { lang } = useLang();
   const isZh = lang === "zh";
@@ -54,10 +75,23 @@
   }
 
   const current = topic as GuideTopic;
-  const label = topicLabels[current];
-
-  return (
-    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+  const label = topicLabels[current];
+
+  return (
+    <>
+      {current === "notes" && (
+        <>
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesFaqJsonLd) }}
+          />
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesBreadcrumbJsonLd) }}
+          />
+        </>
+      )}
+      <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 返回首页" : "← Home"}
@@ -78,6 +112,7 @@
       )}
 
       <SourcesNote />
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

  ✓ Inspect v2 pages and structured data sources
  ✓ Add JSON-LD scripts to Home, City, Guide pages
  ✓ Run TypeScript and production build
diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..baf8f90a22e4466ab904c2b9e4f91effa4df7249
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City" },
+    { name: city.zh, path: `/city/${cityId}` }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index e5284f7d2a7e5ead209144388f75da30bff35f5b..be4e27a8262bff80af1019e085ca973bd37037b8
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,9 +2,11 @@
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
-import TopQuestions from "../components/sections/TopQuestions";
-import SourcesNote from "../components/common/SourcesNote";
-import { useLang } from "../store/language";
+import TopQuestions from "../components/sections/TopQuestions";
+import SourcesNote from "../components/common/SourcesNote";
+import { topQuestions } from "../data/top-questions";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
 
 type GuideTopic = "entry" | "payments" | "notes";
 
@@ -29,9 +31,28 @@
   }
 };
 
-const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
-
-export default function GuidePage() {
+const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
+
+const notesFaqJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "FAQPage",
+  mainEntity: topQuestions.map((question) => ({
+    "@type": "Question",
+    name: question.questionEn,
+    acceptedAnswer: {
+      "@type": "Answer",
+      text: question.answerEn
+    }
+  }))
+};
+
+const notesBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "Guide" },
+  { name: "Travel notes", path: "/guide/notes" }
+]);
+
+export default function GuidePage() {
   const { topic } = useParams<{ topic: string }>();
   const { lang } = useLang();
   const isZh = lang === "zh";
@@ -54,10 +75,23 @@
   }
 
   const current = topic as GuideTopic;
-  const label = topicLabels[current];
-
-  return (
-    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+  const label = topicLabels[current];
+
+  return (
+    <>
+      {current === "notes" && (
+        <>
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesFaqJsonLd) }}
+          />
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesBreadcrumbJsonLd) }}
+          />
+        </>
+      )}
+      <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 返回首页" : "← Home"}
@@ -78,6 +112,7 @@
       )}
 
       <SourcesNote />
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

codex
构建也通过了。再快速扫一下 prerender 出来的 HTML，确认 home、城市页、notes 页里确实有对应 JSON-LD 类型。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"WebSite|BreadcrumbList|SearchAction\" build\\client\\index.html" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"City|TouristAttraction|BreadcrumbList\" build\\client\\city\\beijing\\index.html" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"FAQPage|Question|BreadcrumbList\" build\\client\\guide\\notes\\index.html" in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short' in C:\Users\h\Documents\New project 2
 succeeded in 810ms:
 M v2/src/components/city/CityImagePanel.tsx
 M v2/src/components/map/HeroMap.tsx
 M v2/src/components/map/Province3DOverlay.tsx
 M v2/src/components/map/ProvinceHitAreaLayer.tsx
 M v2/src/components/map/ProvinceInfoCard.tsx
 M v2/src/components/map/ProvinceShapeLayer.tsx
 M v2/src/components/map/SpecialRegionMarkers.tsx
 M v2/src/pages/CityPage.tsx
 M v2/src/pages/GuidePage.tsx
 M v2/src/pages/HomePage.tsx
 M v2/src/root.tsx
 M v2/src/store/LanguageProvider.tsx
 M v2/src/store/atlas.ts
?? .omc/artifacts/ask/codex-v2-workdir-edit-build-cesium-3d-cesium-4-7mb-1-3mb-gzipped-l-2026-05-12T03-15-34-249Z.md
?? v2/public/robots.txt
?? v2/public/sitemap.xml
?? v2/src/hooks/useIsDesktop.ts
?? v2/src/lib/jsonLd.ts
?? v2/src/lib/unsplash.ts

 succeeded in 950ms:
1:<!DOCTYPE html><html lang="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="preload" as="image" imageSrcSet="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&amp;q=80&amp;auto=format&amp;fit=crop 600w, https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=900&amp;q=80&amp;auto=format&amp;fit=crop 900w, https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&amp;q=80&amp;auto=format&amp;fit=crop 1200w, https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1800&amp;q=80&amp;auto=format&amp;fit=crop 1800w" imageSizes="(min-width: 768px) 50vw, 100vw" fetchPriority="high" referrerPolicy="no-referrer"/><title>旅行中国</title><link rel="alternate" hrefLang="x-default" href="/"/><link rel="alternate" hrefLang="en" href="/"/><link rel="alternate" hrefLang="zh-Hans" href="/"/><meta property="og:site_name" content="Travel China"/><meta property="og:type" content="website"/><meta property="og:image" content="/assets/china-map-gs2022-4309.jpg"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:image" content="/assets/china-map-gs2022-4309.jpg"/><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=&#x27;http://www.w3.org/2000/svg&#x27; viewBox=&#x27;0 0 64 64&#x27;%3E%3Crect width=&#x27;64&#x27; height=&#x27;64&#x27; rx=&#x27;10&#x27; fill=&#x27;%2318201d&#x27;/%3E%3Ctext x=&#x27;32&#x27; y=&#x27;42&#x27; text-anchor=&#x27;middle&#x27; font-size=&#x27;34&#x27; fill=&#x27;white&#x27;%3E%E6%97%85%3C/text%3E%3C/svg%3E"/><link rel="modulepreload" href="/assets/manifest-da5c2155.js"/><link rel="modulepreload" href="/assets/entry.client-Cyh_bpCe.js"/><link rel="modulepreload" href="/assets/chunk-BA_0og6f.js"/><link rel="modulepreload" href="/assets/jsx-runtime-ZMBhQML0.js"/><link rel="modulepreload" href="/assets/root-DhqwcdKJ.js"/><link rel="modulepreload" href="/assets/clsx-H-aRJLpe.js"/><link rel="modulepreload" href="/assets/atlas-4jqVV5Wv.js"/><link rel="modulepreload" href="/assets/language-C0Wq3lWC.js"/><link rel="modulepreload" href="/assets/HomePage-CgoqNBdH.js"/><link rel="modulepreload" href="/assets/provinceColors-R2ez2OJ9.js"/><link rel="modulepreload" href="/assets/unsplash-B0y9OJKy.js"/><link rel="modulepreload" href="/assets/jsonLd-Ey63feG1.js"/><link rel="stylesheet" href="/assets/root-C7aYlZEt.css"/></head><body><header class="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur"><a class="flex min-w-0 shrink items-center gap-2" href="/" data-discover="true"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span><strong class="truncate text-xl font-bold leading-none">旅行中国</strong></a><div role="group" aria-label="Switch language" class="inline-flex shrink-0 overflow-hidden rounded-full border border-line"><button type="button" aria-pressed="true" aria-label="Switch to English" class="px-2.5 py-1 text-xs font-bold uppercase tracking-normal transition sm:px-3 sm:tracking-widest bg-ink text-white">EN</button><button type="button" aria-pressed="false" aria-label="Switch to Chinese" class="px-2.5 py-1 text-xs font-bold uppercase tracking-normal transition sm:px-3 sm:tracking-widest bg-white text-muted hover:text-ink">中文</button></div></header><script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite","name":[{"@language":"en","@value":"Travel China"},{"@language":"zh-CN","@value":"旅行中国"}],"url":"https://travel-china.example.com/","inLanguage":["en","zh-CN"],"description":[{"@language":"en","@value":"Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."},{"@language":"zh-CN","@value":"面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"}],"potentialAction":{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://travel-china.example.com/search?q={search_term_string}"},"query-input":"required name=search_term_string"}}</script><script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://travel-china.example.com/"}]}</script><main id="top" class="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10"><header class="flex flex-col gap-2"><h1 class="text-3xl font-bold leading-tight sm:text-4xl">Travel China</h1><p class="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">Start with city landmark photos, then open the map, visa, payment, and travel-note pages.</p><p class="text-xs text-muted">Policy and official information cite Chinese government sources; community tips and operational pitfalls are attributed.</p></header><section aria-label="City attraction photos" class="grid gap-4 md:grid-cols-2"><a class="group relative min-h-[260px] overflow-hidden rounded-lg border border-line bg-ink text-white shadow-sm" href="/city/beijing" data-discover="true"><img src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&amp;q=80&amp;auto=format&amp;fit=crop" srcSet="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&amp;q=80&amp;auto=format&amp;fit=crop 600w, https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=900&amp;q=80&amp;auto=format&amp;fit=crop 900w, https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&amp;q=80&amp;auto=format&amp;fit=crop 1200w, https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1800&amp;q=80&amp;auto=format&amp;fit=crop 1800w" sizes="(min-width: 768px) 50vw, 100vw" alt="Forbidden City / Palace Museum" loading="eager" fetchPriority="high" decoding="async" referrerPolicy="no-referrer" class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"/><div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"></div><div class="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5"><span class="text-sm font-bold text-white/80">Beijing</span><strong class="block max-w-full break-words text-xl leading-tight text-white drop-shadow-sm sm:text-2xl">Forbidden City / Palace Museum</strong><span class="text-xs text-white/75">Dongcheng</span></div></a><a class="group relative min-h-[260px] overflow-hidden rounded-lg border border-line bg-ink text-white shadow-sm" href="/city/shanghai" data-discover="true"><img src="https://images.unsplash.com/photo-1506158669146-619067262a00?w=1200&amp;q=80&amp;auto=format&amp;fit=crop" srcSet="https://images.unsplash.com/photo-1506158669146-619067262a00?w=600&amp;q=80&amp;auto=format&amp;fit=crop 600w, https://images.unsplash.com/photo-1506158669146-619067262a00?w=900&amp;q=80&amp;auto=format&amp;fit=crop 900w, https://images.unsplash.com/photo-1506158669146-619067262a00?w=1200&amp;q=80&amp;auto=format&amp;fit=crop 1200w, https://images.unsplash.com/photo-1506158669146-619067262a00?w=1800&amp;q=80&amp;auto=format&amp;fit=crop 1800w" sizes="(min-width: 768px) 50vw, 100vw" alt="The Bund" loading="lazy" fetchPriority="auto" decoding="async" referrerPolicy="no-referrer" class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"/><div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"></div><div class="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5"><span class="text-sm font-bold text-white/80">Shanghai</span><strong class="block max-w-full break-words text-xl leading-tight text-white drop-shadow-sm sm:text-2xl">The Bund</strong><span class="text-xs text-white/75">Huangpu</span></div></a><a class="group relative min-h-[260px] overflow-hidden rounded-lg border border-line bg-ink text-white shadow-sm" href="/city/guangzhou" data-discover="true"><img src="https://images.unsplash.com/photo-1563090162-6b4c2a20d658?w=1200&amp;q=80&amp;auto=format&amp;fit=crop" srcSet="https://images.unsplash.com/photo-1563090162-6b4c2a20d658?w=600&amp;q=80&amp;auto=format&amp;fit=crop 600w, https://images.unsplash.com/photo-1563090162-6b4c2a20d658?w=900&amp;q=80&amp;auto=format&amp;fit=crop 900w, https://images.unsplash.com/photo-1563090162-6b4c2a20d658?w=1200&amp;q=80&amp;auto=format&amp;fit=crop 1200w, https://images.unsplash.com/photo-1563090162-6b4c2a20d658?w=1800&amp;q=80&amp;auto=format&amp;fit=crop 1800w" sizes="(min-width: 768px) 50vw, 100vw" alt="Canton Tower" loading="lazy" fetchPriority="auto" decoding="async" referrerPolicy="no-referrer" class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"/><div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"></div><div class="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5"><span class="text-sm font-bold text-white/80">Guangzhou</span><strong class="block max-w-full break-words text-xl leading-tight text-white drop-shadow-sm sm:text-2xl">Canton Tower</strong><span class="text-xs text-white/75">Haizhu</span></div></a><a class="group relative min-h-[260px] overflow-hidden rounded-lg border border-line bg-ink text-white shadow-sm" href="/city/shenzhen" data-discover="true"><img src="https://images.unsplash.com/photo-1767628366824-be007ab6e7cf?w=1200&amp;q=80&amp;auto=format&amp;fit=crop" srcSet="https://images.unsplash.com/photo-1767628366824-be007ab6e7cf?w=600&amp;q=80&amp;auto=format&amp;fit=crop 600w, https://images.unsplash.com/photo-1767628366824-be007ab6e7cf?w=900&amp;q=80&amp;auto=format&amp;fit=crop 900w, https://images.unsplash.com/photo-1767628366824-be007ab6e7cf?w=1200&amp;q=80&amp;auto=format&amp;fit=crop 1200w, https://images.unsplash.com/photo-1767628366824-be007ab6e7cf?w=1800&amp;q=80&amp;auto=format&amp;fit=crop 1800w" sizes="(min-width: 768px) 50vw, 100vw" alt="Window of the World" loading="lazy" fetchPriority="auto" decoding="async" referrerPolicy="no-referrer" class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"/><div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"></div><div class="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5"><span class="text-sm font-bold text-white/80">Shenzhen</span><strong class="block max-w-full break-words text-xl leading-tight text-white drop-shadow-sm sm:text-2xl">Window of the World</strong><span class="text-xs text-white/75">Nanshan</span></div></a></section><a aria-label="Open landmark map" class="group grid overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:border-jade hover:shadow-md lg:grid-cols-[minmax(0,1fr)_420px]" href="/map" data-discover="true"><div class="flex min-w-0 flex-col justify-center gap-3 p-5 sm:p-6"><span class="text-xs font-bold uppercase tracking-widest text-muted">Map</span><h2 class="text-2xl font-bold leading-tight sm:text-3xl">Landmark map</h2><p class="max-w-xl text-sm leading-relaxed text-muted">Browse cities, Hong Kong, Macau, and landmark regions by province, then open the 3D scene.</p><span class="text-sm font-bold text-jade">Open map →</span></div><div class="h-64 min-w-0 border-t border-line bg-paper/60 p-3 lg:h-auto lg:border-l lg:border-t-0"><div class="h-full w-full bg-white/70"></div></div></a><section aria-label="Travel guide links" class="grid gap-3 sm:grid-cols-3"><a class="group flex min-h-20 items-center justify-between gap-3 rounded-lg border border-line bg-white px-4 py-3 transition hover:border-jade hover:shadow-sm" href="/guide/entry" data-discover="true"><span class="text-base font-bold">Entry &amp; visa</span><span class="text-xl text-muted transition group-hover:translate-x-1 group-hover:text-jade" aria-hidden="true">→</span></a><a class="group flex min-h-20 items-center justify-between gap-3 rounded-lg border border-line bg-white px-4 py-3 transition hover:border-jade hover:shadow-sm" href="/guide/payments" data-discover="true"><span class="text-base font-bold">Payments</span><span class="text-xl text-muted transition group-hover:translate-x-1 group-hover:text-jade" aria-hidden="true">→</span></a><a class="group flex min-h-20 items-center justify-between gap-3 rounded-lg border border-line bg-white px-4 py-3 transition hover:border-jade hover:shadow-sm" href="/guide/notes" data-discover="true"><span class="text-base font-bold">Travel notes</span><span class="text-xl text-muted transition group-hover:translate-x-1 group-hover:text-jade" aria-hidden="true">→</span></a></section></main><footer class="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between"><p>Travel China demo data only.</p><div class="flex items-center gap-4"><a class="hover:text-jade" href="/sources" data-discover="true">References</a><a href="#top" class="hover:text-jade">Back to top</a></div></footer><script>((storageKey2, restoreKey) => {

 succeeded in 970ms:
1:<!DOCTYPE html><html lang="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>旅行中国</title><link rel="alternate" hrefLang="x-default" href="/city/beijing"/><link rel="alternate" hrefLang="en" href="/city/beijing"/><link rel="alternate" hrefLang="zh-Hans" href="/city/beijing"/><meta property="og:site_name" content="Travel China"/><meta property="og:type" content="website"/><meta property="og:image" content="/assets/china-map-gs2022-4309.jpg"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:image" content="/assets/china-map-gs2022-4309.jpg"/><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=&#x27;http://www.w3.org/2000/svg&#x27; viewBox=&#x27;0 0 64 64&#x27;%3E%3Crect width=&#x27;64&#x27; height=&#x27;64&#x27; rx=&#x27;10&#x27; fill=&#x27;%2318201d&#x27;/%3E%3Ctext x=&#x27;32&#x27; y=&#x27;42&#x27; text-anchor=&#x27;middle&#x27; font-size=&#x27;34&#x27; fill=&#x27;white&#x27;%3E%E6%97%85%3C/text%3E%3C/svg%3E"/><link rel="modulepreload" href="/assets/manifest-da5c2155.js"/><link rel="modulepreload" href="/assets/entry.client-Cyh_bpCe.js"/><link rel="modulepreload" href="/assets/chunk-BA_0og6f.js"/><link rel="modulepreload" href="/assets/jsx-runtime-ZMBhQML0.js"/><link rel="modulepreload" href="/assets/root-DhqwcdKJ.js"/><link rel="modulepreload" href="/assets/clsx-H-aRJLpe.js"/><link rel="modulepreload" href="/assets/atlas-4jqVV5Wv.js"/><link rel="modulepreload" href="/assets/language-C0Wq3lWC.js"/><link rel="modulepreload" href="/assets/CityPage-CC1OWDck.js"/><link rel="modulepreload" href="/assets/SourcesNote-DfXhZovX.js"/><link rel="modulepreload" href="/assets/unsplash-B0y9OJKy.js"/><link rel="modulepreload" href="/assets/jsonLd-Ey63feG1.js"/><link rel="stylesheet" href="/assets/root-C7aYlZEt.css"/></head><body><header class="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur"><a class="flex min-w-0 shrink items-center gap-2" href="/" data-discover="true"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span><strong class="truncate text-xl font-bold leading-none">旅行中国</strong></a><div role="group" aria-label="Switch language" class="inline-flex shrink-0 overflow-hidden rounded-full border border-line"><button type="button" aria-pressed="true" aria-label="Switch to English" class="px-2.5 py-1 text-xs font-bold uppercase tracking-normal transition sm:px-3 sm:tracking-widest bg-ink text-white">EN</button><button type="button" aria-pressed="false" aria-label="Switch to Chinese" class="px-2.5 py-1 text-xs font-bold uppercase tracking-normal transition sm:px-3 sm:tracking-widest bg-white text-muted hover:text-ink">中文</button></div></header><script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"City","@id":"https://travel-china.example.com/city/beijing#city","name":[{"@language":"en","@value":"Beijing"},{"@language":"zh-CN","@value":"北京"}],"url":"https://travel-china.example.com/city/beijing","containedInPlace":{"@type":"Country","name":"China"}},{"@type":"TouristAttraction","@id":"https://travel-china.example.com/city/beijing#bj-forbidden-city","name":[{"@language":"en","@value":"Forbidden City / Palace Museum"},{"@language":"zh-CN","@value":"故宫博物院"}],"description":"The largest intact imperial palace complex in the world: 180 acres, 980 buildings, 8,728 rooms. 24 emperors lived here across the Ming and Qing dynasties (1420–1912). 7-day advance booking is mandatory; 40,000-person daily cap sells out within minutes for peak weekends.","image":"https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80&auto=format&fit=crop","url":"https://intl.dpm.org.cn/visit.html?l=en","address":{"@type":"PostalAddress","addressLocality":"Beijing","addressRegion":"Dongcheng","addressCountry":"CN"},"containedInPlace":{"@id":"https://travel-china.example.com/city/beijing#city"}},{"@type":"TouristAttraction","@id":"https://travel-china.example.com/city/beijing#bj-mutianyu","name":[{"@language":"en","@value":"Great Wall at Mutianyu"},{"@language":"zh-CN","@value":"慕田峪长城"}],"description":"The Great Wall section most recommended by experienced foreign travellers: well-restored Ming masonry, 23 watchtowers across a 2.25 km open stretch, cable car or chair lift up plus a toboggan descent. The official English website accepts international cards directly. 1 million foreign visitors in 2025.","image":"https://images.unsplash.com/photo-1509624780899-f812439647e4?w=1200&q=80&auto=format&fit=crop","url":"https://en.mutianyugreatwall.com","address":{"@type":"PostalAddress","addressLocality":"Beijing","addressRegion":"Huairou","addressCountry":"CN"},"containedInPlace":{"@id":"https://travel-china.example.com/city/beijing#city"}},{"@type":"TouristAttraction","@id":"https://travel-china.example.com/city/beijing#bj-summer-palace","name":[{"@language":"en","@value":"Summer Palace"},{"@language":"zh-CN","@value":"颐和园"}],"description":"The best-preserved imperial garden in China and a UNESCO World Heritage Site. 220-hectare Kunming Lake with Longevity Hill behind it, the 728 m painted Long Corridor, and a theatrical landscape designed for Qing imperial leisure. Audio guides in 19 languages.","image":"https://images.unsplash.com/photo-1619825479213-62e158b5a79d?w=1200&q=80&auto=format&fit=crop","url":"https://english.beijing.gov.cn/specials/parktours/guidevisitors/summerpalace/","address":{"@type":"PostalAddress","addressLocality":"Beijing","addressRegion":"Haidian","addressCountry":"CN"},"containedInPlace":{"@id":"https://travel-china.example.com/city/beijing#city"}},{"@type":"TouristAttraction","@id":"https://travel-china.example.com/city/beijing#bj-temple-of-heaven","name":[{"@language":"en","@value":"Temple of Heaven"},{"@language":"zh-CN","@value":"天坛"}],"description":"The largest extant sacrificial altar complex in China (built 1406–1420), used by every Ming and Qing emperor to pray for harvest. The triple-eaved circular blue-roofed Hall of Prayer for Good Harvests is one of the most architecturally perfect timber structures in Chinese history. The park grounds double as a morning tai chi venue.","image":"https://images.unsplash.com/photo-1569165755139-296fac054979?w=1200&q=80&auto=format&fit=crop","url":"https://english.beijing.gov.cn/specials/parktours/guidevisitors/templeofheaven/","address":{"@type":"PostalAddress","addressLocality":"Beijing","addressRegion":"Dongcheng","addressCountry":"CN"},"containedInPlace":{"@id":"https://travel-china.example.com/city/beijing#city"}},{"@type":"TouristAttraction","@id":"https://travel-china.example.com/city/beijing#bj-lama-temple","name":[{"@language":"en","@value":"Lama Temple (Yonghe Gong)"},{"@language":"zh-CN","@value":"雍和宫"}],"description":"The most important Tibetan Buddhist temple in Beijing and one of the most significant Gelug monasteries outside Tibet. Originally an imperial princely mansion (1694), converted to a lamasery in 1744. The Wanfu Pavilion houses an 18 m Maitreya Buddha carved from a single sandalwood tree — the tallest sandalwood statue in the world.","image":"https://images.unsplash.com/photo-1590301729964-23833732ee04?w=1200&q=80&auto=format&fit=crop","url":"https://english.beijing.gov.cn/specials/ticketing/","address":{"@type":"PostalAddress","addressLocality":"Beijing","addressRegion":"Dongcheng","addressCountry":"CN"},"containedInPlace":{"@id":"https://travel-china.example.com/city/beijing#city"}},{"@type":"TouristAttraction","@id":"https://travel-china.example.com/city/beijing#bj-tiananmen","name":[{"@language":"en","@value":"Tiananmen Square"},{"@language":"zh-CN","@value":"天安门广场"}],"description":"The world's third-largest public square (440,000 sq m) and the symbolic centre of the People's Republic. Daily flag-raising ceremony at sunrise, flag-lowering at sunset. Free entry but mandatory advance reservation (1–7 days ahead) — walk-up visitors are turned back at the security checkpoint.","image":"https://images.unsplash.com/photo-1604844252839-f9c364adacdd?w=1200&q=80&auto=format&fit=crop","url":"https://english.beijing.gov.cn/travellinginbeijing/","address":{"@type":"PostalAddress","addressLocality":"Beijing","addressRegion":"Dongcheng","addressCountry":"CN"},"containedInPlace":{"@id":"https://travel-china.example.com/city/beijing#city"}}]}</script><script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://travel-china.example.com/"},{"@type":"ListItem","position":2,"name":"City"},{"@type":"ListItem","position":3,"name":"北京","item":"https://travel-china.example.com/city/beijing"}]}</script><main id="top" class="mx-auto max-w-7xl px-4 py-10"><header class="mb-6 flex flex-col gap-2"><a class="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade" href="/" data-discover="true">← All cities</a><h1 class="text-4xl font-bold leading-tight">Beijing</h1><p class="text-sm text-muted">北京</p></header><div class="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]"><nav aria-label="City page navigation" class="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"><ul class="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible"><li class="shrink-0 lg:shrink"><a href="#intro" class="block whitespace-nowrap rounded-lg px-3 py-2 text-sm transition lg:whitespace-normal bg-jade-soft font-bold text-jade">City overview</a></li><li class="shrink-0 lg:shrink"><a href="#visa" class="block whitespace-nowrap rounded-lg px-3 py-2 text-sm transition lg:whitespace-normal text-ink/80 hover:bg-paper hover:text-ink">Entry &amp; Visa</a></li><li class="shrink-0 lg:shrink"><a href="#payments" class="block whitespace-nowrap rounded-lg px-3 py-2 text-sm transition lg:whitespace-normal text-ink/80 hover:bg-paper hover:text-ink">Payments</a></li><li class="shrink-0 lg:shrink"><a href="#transport" class="block whitespace-nowrap rounded-lg px-3 py-2 text-sm transition lg:whitespace-normal text-ink/80 hover:bg-paper hover:text-ink">Transport</a></li><li class="shrink-0 lg:shrink"><a href="#food" class="block whitespace-nowrap rounded-lg px-3 py-2 text-sm transition lg:whitespace-normal text-ink/80 hover:bg-paper hover:text-ink">Food</a></li><li class="shrink-0 lg:shrink"><a href="#emergency" class="block whitespace-nowrap rounded-lg px-3 py-2 text-sm transition lg:whitespace-normal text-ink/80 hover:bg-paper hover:text-ink">Emergency &amp; Medical</a></li><li class="shrink-0 lg:shrink"><a href="#portals" class="block whitespace-nowrap rounded-lg px-3 py-2 text-sm transition lg:whitespace-normal text-ink/80 hover:bg-paper hover:text-ink">Official portals</a></li></ul></nav><div class="flex min-w-0 flex-col gap-12"><section id="intro" class="flex flex-col gap-6 scroll-mt-24"><div class="flex flex-col gap-3"><p class="text-base leading-relaxed text-ink/85">Beijing is the imperial capital — 600 years of palace, temple, and tomb sit on a single north–south axis through the city. The Great Wall is an hour out. Hutong alleys hide the best dumplings. Plan 4–6 days; you will not be bored.</p><ul class="flex flex-wrap gap-2"><li class="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-muted">16 districts</li><li class="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-muted">21.9 M residents</li><li class="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-muted">PEK + PKX airports</li><li class="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-muted">29 metro lines / 523 stations</li></ul></div><div class="flex flex-col gap-3"><header class="flex flex-col gap-1"><span class="text-xs font-bold uppercase tracking-widest text-muted">Signature attractions · filter by district</span><h2 class="text-xl font-bold">Pick a district to see what&#x27;s there</h2></header><div role="tablist" aria-label="District filter" class="flex flex-wrap gap-2"><button type="button" role="tab" aria-selected="true" class="rounded-full border px-3 py-1.5 text-xs font-bold transition border-ink bg-ink text-white">All<span class="ml-1.5 text-[10px] text-white/70">6</span></button><button type="button" role="tab" aria-selected="false" class="rounded-full border px-3 py-1.5 text-xs font-bold transition border-line bg-white text-ink hover:border-jade hover:text-jade">Dongcheng<span class="ml-1.5 text-[10px] text-muted">4</span></button><button type="button" role="tab" aria-selected="false" class="rounded-full border px-3 py-1.5 text-xs font-bold transition border-line bg-white text-ink hover:border-jade hover:text-jade">Huairou<span class="ml-1.5 text-[10px] text-muted">1</span></button><button type="button" role="tab" aria-selected="false" class="rounded-full border px-3 py-1.5 text-xs font-bold transition border-line bg-white text-ink hover:border-jade hover:text-jade">Haidian<span class="ml-1.5 text-[10px] text-muted">1</span></button></div><ul class="grid gap-3 sm:grid-cols-2"><li class="flex flex-col gap-2 rounded-xl border border-line bg-white p-4"><div class="flex items-center justify-between gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-jade-soft text-jade">Must-visit</span><span class="text-[10px] text-muted">Dongcheng</span></div><strong class="text-sm leading-tight">Forbidden City / Palace Museum</strong><p class="text-xs leading-relaxed text-ink/80">The largest intact imperial palace complex in the world: 180 acres, 980 buildings, 8,728 rooms. 24 emperors lived here across the Ming and Qing dynasties (1420–1912). 7-day advance booking is mandatory; 40,000-person daily cap sells out within minutes for peak weekends.</p><a href="https://intl.dpm.org.cn/visit.html?l=en" target="_blank" rel="noreferrer" class="self-start text-[10px] font-bold uppercase tracking-wider text-jade hover:underline">Official →</a></li><li class="flex flex-col gap-2 rounded-xl border border-line bg-white p-4"><div class="flex items-center justify-between gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-jade-soft text-jade">Must-visit</span><span class="text-[10px] text-muted">Huairou</span></div><strong class="text-sm leading-tight">Great Wall at Mutianyu</strong><p class="text-xs leading-relaxed text-ink/80">The Great Wall section most recommended by experienced foreign travellers: well-restored Ming masonry, 23 watchtowers across a 2.25 km open stretch, cable car or chair lift up plus a toboggan descent. The official English website accepts international cards directly. 1 million foreign visitors in 2025.</p><a href="https://en.mutianyugreatwall.com" target="_blank" rel="noreferrer" class="self-start text-[10px] font-bold uppercase tracking-wider text-jade hover:underline">Official →</a></li><li class="flex flex-col gap-2 rounded-xl border border-line bg-white p-4"><div class="flex items-center justify-between gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-jade-soft text-jade">Must-visit</span><span class="text-[10px] text-muted">Haidian</span></div><strong class="text-sm leading-tight">Summer Palace</strong><p class="text-xs leading-relaxed text-ink/80">The best-preserved imperial garden in China and a UNESCO World Heritage Site. 220-hectare Kunming Lake with Longevity Hill behind it, the 728 m painted Long Corridor, and a theatrical landscape designed for Qing imperial leisure. Audio guides in 19 languages.</p><a href="https://english.beijing.gov.cn/specials/parktours/guidevisitors/summerpalace/" target="_blank" rel="noreferrer" class="self-start text-[10px] font-bold uppercase tracking-wider text-jade hover:underline">Official →</a></li><li class="flex flex-col gap-2 rounded-xl border border-line bg-white p-4"><div class="flex items-center justify-between gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-jade-soft text-jade">Must-visit</span><span class="text-[10px] text-muted">Dongcheng</span></div><strong class="text-sm leading-tight">Temple of Heaven</strong><p class="text-xs leading-relaxed text-ink/80">The largest extant sacrificial altar complex in China (built 1406–1420), used by every Ming and Qing emperor to pray for harvest. The triple-eaved circular blue-roofed Hall of Prayer for Good Harvests is one of the most architecturally perfect timber structures in Chinese history. The park grounds double as a morning tai chi venue.</p><a href="https://english.beijing.gov.cn/specials/parktours/guidevisitors/templeofheaven/" target="_blank" rel="noreferrer" class="self-start text-[10px] font-bold uppercase tracking-wider text-jade hover:underline">Official →</a></li><li class="flex flex-col gap-2 rounded-xl border border-line bg-white p-4"><div class="flex items-center justify-between gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-jade-soft text-jade">Must-visit</span><span class="text-[10px] text-muted">Dongcheng</span></div><strong class="text-sm leading-tight">Lama Temple (Yonghe Gong)</strong><p class="text-xs leading-relaxed text-ink/80">The most important Tibetan Buddhist temple in Beijing and one of the most significant Gelug monasteries outside Tibet. Originally an imperial princely mansion (1694), converted to a lamasery in 1744. The Wanfu Pavilion houses an 18 m Maitreya Buddha carved from a single sandalwood tree — the tallest sandalwood statue in the world.</p><a href="https://english.beijing.gov.cn/specials/ticketing/" target="_blank" rel="noreferrer" class="self-start text-[10px] font-bold uppercase tracking-wider text-jade hover:underline">Official →</a></li><li class="flex flex-col gap-2 rounded-xl border border-line bg-white p-4"><div class="flex items-center justify-between gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-jade-soft text-jade">Must-visit</span><span class="text-[10px] text-muted">Dongcheng</span></div><strong class="text-sm leading-tight">Tiananmen Square</strong><p class="text-xs leading-relaxed text-ink/80">The world&#x27;s third-largest public square (440,000 sq m) and the symbolic centre of the People&#x27;s Republic. Daily flag-raising ceremony at sunrise, flag-lowering at sunset. Free entry but mandatory advance reservation (1–7 days ahead) — walk-up visitors are turned back at the security checkpoint.</p><a href="https://english.beijing.gov.cn/travellinginbeijing/" target="_blank" rel="noreferrer" class="self-start text-[10px] font-bold uppercase tracking-wider text-jade hover:underline">Official →</a></li></ul></div></section><section id="visa" class="scroll-mt-24"><section id="entry-visa" class="flex min-w-0 flex-col gap-3"><header><span class="text-xs font-bold uppercase tracking-widest text-muted">Pillar 1</span><h2 class="text-2xl font-bold leading-tight">Entry &amp; Visa</h2><p class="text-sm text-muted">Pick your passport country to see what applies. Every answer cites China&#x27;s NIA and State Council announcements.</p></header><div class="grid gap-4 rounded-lg border border-line bg-white p-4 md:grid-cols-[240px_1fr]"><div class="flex flex-col gap-3"><label for="_R_5bj5_" class="text-xs font-bold uppercase tracking-widest text-muted">Passport country</label><select id="_R_5bj5_" class="rounded-lg border border-line bg-paper px-3 py-2 text-sm focus:border-ink focus:outline-none"><option value="" selected="">Select country...</option><option value="Andorra">Andorra (安道尔)</option><option value="Argentina">Argentina (阿根廷)</option><option value="Australia">Australia (澳大利亚)</option><option value="Austria">Austria (奥地利)</option><option value="Bahrain">Bahrain (巴林)</option><option value="Belgium">Belgium (比利时)</option><option value="Brazil">Brazil (巴西)</option><option value="Brunei Darussalam">Brunei Darussalam (文莱)</option><option value="Bulgaria">Bulgaria (保加利亚)</option><option value="Canada">Canada (加拿大)</option><option value="Chile">Chile (智利)</option><option value="Croatia">Croatia (克罗地亚)</option><option value="Cyprus">Cyprus (塞浦路斯)</option><option value="Denmark">Denmark (丹麦)</option><option value="Estonia">Estonia (爱沙尼亚)</option><option value="Finland">Finland (芬兰)</option><option value="France">France (法国)</option><option value="Germany">Germany (德国)</option><option value="Greece">Greece (希腊)</option><option value="Hungary">Hungary (匈牙利)</option><option value="Iceland">Iceland (冰岛)</option><option value="Ireland">Ireland (爱尔兰)</option><option value="Italy">Italy (意大利)</option><option value="Japan">Japan (日本)</option><option value="Kuwait">Kuwait (科威特)</option><option value="Latvia">Latvia (拉脱维亚)</option><option value="Liechtenstein">Liechtenstein (列支敦士登)</option><option value="Luxembourg">Luxembourg (卢森堡)</option><option value="Malta">Malta (马耳他)</option><option value="Monaco">Monaco (摩纳哥)</option><option value="Montenegro">Montenegro (黑山)</option><option value="Netherlands">Netherlands (荷兰)</option><option value="New Zealand">New Zealand (新西兰)</option><option value="North Macedonia">North Macedonia (北马其顿)</option><option value="Norway">Norway (挪威)</option><option value="Oman">Oman (阿曼)</option><option value="Peru">Peru (秘鲁)</option><option value="Poland">Poland (波兰)</option><option value="Portugal">Portugal (葡萄牙)</option><option value="Republic of Korea">Republic of Korea (韩国)</option><option value="Romania">Romania (罗马尼亚)</option><option value="Russian Federation">Russian Federation (俄罗斯)</option><option value="Saudi Arabia">Saudi Arabia (沙特阿拉伯)</option><option value="Slovakia">Slovakia (斯洛伐克)</option><option value="Slovenia">Slovenia (斯洛文尼亚)</option><option value="Spain">Spain (西班牙)</option><option value="Sweden">Sweden (瑞典)</option><option value="Switzerland">Switzerland (瑞士)</option><option value="United Kingdom">United Kingdom (英国)</option><option value="Uruguay">Uruguay (乌拉圭)</option><option disabled="">──────────</option><option value="Other">Other (not on visa-free lists)</option></select></div><div class="grid place-items-center rounded-lg border border-dashed border-line p-6 text-sm text-muted">Pick a passport country first.</div></div><div class="grid gap-3 md:grid-cols-3"><article class="flex flex-col gap-2 rounded-xl border border-line bg-white p-4"><span class="text-xs font-bold uppercase tracking-widest text-muted">Unilateral visa-free</span><strong class="text-3xl leading-none">50<!-- --> <small class="text-base font-bold text-muted">countries</small></strong><p class="text-sm leading-snug text-ink/80">Ordinary passports, 30-day stay, business/tourism/family/exchange/transit.</p></article><article class="flex flex-col gap-2 rounded-xl border border-line bg-white p-4"><span class="text-xs font-bold uppercase tracking-widest text-muted">240-hour transit</span><strong class="text-3xl leading-none">65<!-- --> <small class="text-base font-bold text-muted">ports</small></strong><p class="text-sm leading-snug text-ink/80">55 eligible nationalities, 24 provincial regions; effective 2025-11-05.</p></article><article class="flex flex-col gap-2 rounded-xl border border-line bg-white p-4"><span class="text-xs font-bold uppercase tracking-widest text-muted">Online entry card</span><strong class="text-3xl leading-none">2025-11-20<!-- --> <small class="text-base font-bold text-muted"></small></strong><p class="text-sm leading-snug text-ink/80">Free pre-fill online; kiosk or paper card available at port; ignore counterfeit pay-to-fill sites.</p></article></div><div class="rounded-xl border border-line bg-white p-5"><header class="mb-3"><h3 class="text-base font-bold">Phase 1 cities — all 240-hour transit</h3><p class="text-xs text-muted">Aligned with State Council 2025-11-04 announcement; the other 59 ports are not yet covered here.</p></header><ul class="grid gap-2 sm:grid-cols-2"><li class="flex items-center justify-between rounded-lg bg-paper px-3 py-2"><span><strong class="text-sm">Beijing</strong> <span class="text-xs text-muted">Capital International Airport</span></span><span class="rounded-full bg-jade-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-jade">240<!-- -->h</span></li><li class="flex items-center justify-between rounded-lg bg-paper px-3 py-2"><span><strong class="text-sm">Beijing</strong> <span class="text-xs text-muted">Daxing International Airport</span></span><span class="rounded-full bg-jade-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-jade">240<!-- -->h</span></li><li class="flex items-center justify-between rounded-lg bg-paper px-3 py-2"><span><strong class="text-sm">Shanghai</strong> <span class="text-xs text-muted">Pudong International Airport</span></span><span class="rounded-full bg-jade-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-jade">240<!-- -->h</span></li><li class="flex items-center justify-between rounded-lg bg-paper px-3 py-2"><span><strong class="text-sm">Shanghai</strong> <span class="text-xs text-muted">Hongqiao International Airport</span></span><span class="rounded-full bg-jade-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-jade">240<!-- -->h</span></li><li class="flex items-center justify-between rounded-lg bg-paper px-3 py-2"><span><strong class="text-sm">Guangzhou</strong> <span class="text-xs text-muted">Baiyun International Airport</span></span><span class="rounded-full bg-jade-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-jade">240<!-- -->h</span></li><li class="flex items-center justify-between rounded-lg bg-paper px-3 py-2"><span><strong class="text-sm">Shenzhen</strong> <span class="text-xs text-muted">Bao&#x27;an International Airport</span></span><span class="rounded-full bg-jade-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-jade">240<!-- -->h</span></li></ul></div><section class="flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50/40 p-5"><header><span class="text-xs font-bold uppercase tracking-widest text-amber-800">What to know before landing</span></header><ul class="grid gap-2 md:grid-cols-2"><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">240-hour transit: onward ticket must leave to a DIFFERENT country</strong><p class="text-xs leading-relaxed text-ink/80">New York → Shanghai → New York is denied at immigration. New York → Shanghai → Singapore is approved. Hong Kong, Macau, and Taiwan count as separate regions for this rule.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">240-hour clock starts at the immigration STAMP, not wheels-down</strong><p class="text-xs leading-relaxed text-ink/80">Land at 23:00, clear immigration at 00:30 = you&#x27;ve already lost a day. Many travellers miscalculate and overstay.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Digital arrival card mandatory since 2025-11; airlines don&#x27;t tell you</strong><p class="text-xs leading-relaxed text-ink/80">Fill the NIA digital card (s.nia.gov.cn) within 72 hours before arrival. Skipping it sends you to a secondary desk that adds 20–40 minutes at the airport.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Use the dedicated TWOV counter — wrong queue = +30 min</strong><p class="text-xs leading-relaxed text-ink/80">240-hour transit travellers must use the TWOV counter, not general immigration. Pudong T2 marks it clearly; Beijing T3 barely labels it — look for the small &quot;Visa-Free Transit&quot; sign.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Visa-free extensions almost always rejected — apply 8+ days early</strong><p class="text-xs leading-relaxed text-ink/80">SmartShanghai staff tried — rejected for &quot;insufficient reason&quot;. Processing takes up to 7 working days, so you must apply at least 8 days before expiry. Plan your trip length up front.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Overstay penalty = entry ban, not just a fine</strong><p class="text-xs leading-relaxed text-ink/80">Overstays beyond a few days trigger a 1–5 year re-entry ban PLUS fines from CNY 500/day. Don&#x27;t gamble on the last day.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Unlicensed guesthouses / Airbnb-style hosts can&#x27;t legally take foreign guests</strong><p class="text-xs leading-relaxed text-ink/80">Chinese law requires accommodation to register foreign guests with police. Budget guesthouses and many Airbnb listings lack the licence. Both you and the host face fines.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Private accommodation: register with police within 24h</strong><p class="text-xs leading-relaxed text-ink/80">Hotels do this for you automatically. At an Airbnb / private rental, you OR your host must register at the local police station (paichusuo) within 24 hours of check-in. Failure is a fine for both parties.</p></li></ul></section></section></section><section id="payments" class="scroll-mt-24"><section class="flex flex-col gap-4"><h2 class="text-xl font-bold">Payments</h2><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4"><article class="flex flex-col gap-1 rounded-xl border border-line bg-white p-4"><span class="text-xs font-bold uppercase tracking-widest text-muted">Alipay per-tx</span><strong class="text-2xl leading-none">$5,000</strong><span class="text-xs text-muted">annual $50,000</span></article><article class="flex flex-col gap-1 rounded-xl border border-line bg-white p-4"><span class="text-xs font-bold uppercase tracking-widest text-muted">WeChat Pay per-tx</span><strong class="text-2xl leading-none">$5,000</strong><span class="text-xs text-muted">annual $50,000</span></article><article class="flex flex-col gap-1 rounded-xl border border-line bg-white p-4"><span class="text-xs font-bold uppercase tracking-widest text-muted">BOC ATM</span><strong class="text-2xl leading-none">¥3,000</strong><span class="text-xs text-muted">Visa / Mastercard / JCB / American Express / UnionPay</span></article><article class="flex flex-col gap-1 rounded-xl border border-line bg-white p-4"><span class="text-xs font-bold uppercase tracking-widest text-muted">Foreign cash declare</span><strong class="text-2xl leading-none">$5,000</strong><span class="text-xs text-muted">above this must declare</span></article></div><section class="flex flex-col gap-2"><h3 class="text-sm font-bold uppercase tracking-widest text-muted">Before you fly</h3><ul class="grid gap-2"><li class="flex gap-3 rounded-lg border border-line bg-white p-3"><span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">1</span><div class="flex flex-1 flex-col gap-1"><strong class="text-sm">Set up Alipay or WeChat Pay before departure</strong><p class="text-xs leading-relaxed text-ink/80">Both platforms accept Visa and Mastercard binding for foreign passport users. Per-transaction USD 5,000 / annual USD 50,000 (PBOC, 2024-04).</p></div></li><li class="flex gap-3 rounded-lg border border-line bg-white p-3"><span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">2</span><div class="flex flex-1 flex-col gap-1"><strong class="text-sm">Bring backup cash, declare if &gt; USD 5,000</strong><p class="text-xs leading-relaxed text-ink/80">RMB carry cap ¥20,000. Declare any foreign cash above USD 5,000 equivalent on the arrival form.</p></div></li><li class="flex gap-3 rounded-lg border border-line bg-white p-3"><span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">3</span><div class="flex flex-1 flex-col gap-1"><strong class="text-sm">Bank of China ATMs are the most reliable for foreign cards</strong><p class="text-xs leading-relaxed text-ink/80">BOC ATMs accept all five major networks; CNY 3,000 per withdrawal. Issuer&#x27;s own daily/weekly limits also apply.</p></div></li><li class="flex gap-3 rounded-lg border border-line bg-white p-3"><span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">4</span><div class="flex flex-1 flex-col gap-1"><strong class="text-sm">POS coverage is broadest at airports and major hotels</strong><p class="text-xs leading-relaxed text-ink/80">Outside those, small merchants tend to be Alipay/WeChat-only or cash. Don&#x27;t rely on Visa swipe in mom-and-pop shops.</p></div></li></ul></section><section class="flex flex-col gap-2"><h3 class="text-sm font-bold uppercase tracking-widest text-muted">China Customs thresholds</h3><ul class="grid gap-2 sm:grid-cols-2"><li class="flex flex-col gap-1 rounded-lg border border-line bg-white p-3"><strong class="text-sm">RMB cash carry limit</strong><p class="text-xs leading-relaxed text-ink/80">Carry up to ¥20,000 RMB in cash when crossing the border. Any amount above that must go through a bank — you can&#x27;t carry it in person.</p></li><li class="flex flex-col gap-1 rounded-lg border border-line bg-white p-3"><strong class="text-sm">Foreign currency declaration</strong><p class="text-xs leading-relaxed text-ink/80">Declare any foreign cash above the USD 5,000 equivalent when you land — customs gives you a paper form at the arrivals desk. Leave it undeclared and the excess can be confiscated.</p></li><li class="flex flex-col gap-1 rounded-lg border border-line bg-white p-3"><strong class="text-sm">Personal-use goods (non-resident)</strong><p class="text-xs leading-relaxed text-ink/80">Personal-use items you&#x27;re bringing for yourself clear customs duty-free. If you&#x27;re carrying goods worth more than ¥2,000 that aren&#x27;t for your own use, declare them at the red channel and pay the assessed duty.</p></li><li class="flex flex-col gap-1 rounded-lg border border-line bg-white p-3"><strong class="text-sm">Duty-free allowance</strong><p class="text-xs leading-relaxed text-ink/80">Tobacco: 400 cigarettes (foreign passenger). Alcohol: 1.5 L (18+ only).</p></li></ul></section><section class="flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50/40 p-5"><header><span class="text-xs font-bold uppercase tracking-widest text-amber-800">Practical pitfalls</span><h3 class="text-lg font-bold">What official sources don&#x27;t tell you</h3></header><div class="grid gap-3"><div class="flex flex-col gap-2"><h4 class="text-xs font-bold uppercase tracking-widest text-muted">Before you fly</h4><ul class="grid gap-2 md:grid-cols-2"><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900">Both</span><strong class="text-sm leading-tight">Set up both apps 2–4 weeks before you fly</strong></div><p class="text-xs leading-relaxed text-ink/80">KYC can take a full day, WeChat may need a friend back home to vouch for you, and your home bank needs time to whitelist Chinese merchants. Try to set this up before you land — leaving it for arrival day usually means a frustrating first night.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-900">Alipay</span><strong class="text-sm leading-tight">Don&#x27;t bother with Tour Card — shutting down 2026-05-29</strong></div><p class="text-xs leading-relaxed text-ink/80">The Alipay Tour Card mini-program stops accepting new applications on May 29, 2026. Older guides still recommend it; ignore them and bind your Visa/Mastercard directly to the regular Alipay app instead.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900">Both</span><strong class="text-sm leading-tight">Call your bank: whitelist China + enable international online purchases</strong></div><p class="text-xs leading-relaxed text-ink/80">The #1 card-binding failure is your home bank fraud system blocking the first attempt. The app shows ambiguous &quot;payment failed&quot; with no hint that the bank is the cause. Some debit cards also need 3D Secure / international online purchases manually enabled.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900">WeChat</span><strong class="text-sm leading-tight">WeChat friend-scan: line one up before you fly</strong></div><p class="text-xs leading-relaxed text-ink/80">About 80% of new WeChat accounts hit a mandatory &quot;have a friend scan this QR&quot; screen. The verifier must have used WeChat 6+ months, have WeChat Pay active, and not have verified anyone else this month. Remote scan via screen-share works — solo travellers should ask a friend in advance.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900">WeChat</span><strong class="text-sm leading-tight">Register WeChat before boarding — SMS unreliable on roaming/eSIM</strong></div><p class="text-xs leading-relaxed text-ink/80">International roaming SMS into China is unreliable and eSIM data access does not guarantee SMS delivery. Complete WeChat registration on home-country signal, not after landing.</p></li></ul></div><div class="flex flex-col gap-2"><h4 class="text-xs font-bold uppercase tracking-widest text-muted">Account setup &amp; KYC</h4><ul class="grid gap-2 md:grid-cols-2"><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-900">Alipay</span><strong class="text-sm leading-tight">Install the standard Alipay (blue icon) — not AlipayHK</strong></div><p class="text-xs leading-relaxed text-ink/80">There is one app for foreign tourists: standard Alipay (Hangzhou Technology Co., bundle id com.eg.android.AlipayGphone). AlipayHK is a separate Hong Kong product that does NOT work on the mainland.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900">Both</span><strong class="text-sm leading-tight">Turn VPN OFF during KYC, card binding, and payments</strong></div><p class="text-xs leading-relaxed text-ink/80">Both Alipay and WeChat compare GPS (Beijing) against IP location (e.g. Los Angeles). The mismatch triggers fraud flags that can freeze the account mid-KYC and require a manual support ticket to recover.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-900">Alipay</span><strong class="text-sm leading-tight">Use your passport MRZ name exactly — uppercase, no nicknames</strong></div><p class="text-xs leading-relaxed text-ink/80">Real-name verification rejects mismatched names: middle names, hyphenated surnames, double-barrelled names. The app gives no specific reason — it just says &quot;verification failed&quot;.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900">WeChat</span><strong class="text-sm leading-tight">WeChat&#x27;s USD 0.05 verification charge will trigger your bank&#x27;s fraud alert</strong></div><p class="text-xs leading-relaxed text-ink/80">WeChat charges ~$0.05 USD to validate the card during binding. This tiny charge is the most common reason the binding fails. If you see the charge get rejected, immediately approve it in your banking app and retry the binding within the same session.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-900">Alipay</span><strong class="text-sm leading-tight">USD 500 is the real KYC threshold — not the PBOC USD 5,000 figure</strong></div><p class="text-xs leading-relaxed text-ink/80">PBOC raised the policy limit to USD 5,000/tx in 2024, but Alipay&#x27;s own identity-verification system kicks in at USD 500. Plan for the lower number when budgeting big-ticket items (hotel deposits, high-speed rail).</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900">WeChat</span><strong class="text-sm leading-tight">WeChat: hard RMB 15,000 stay-total cap until you finish real-name auth</strong></div><p class="text-xs leading-relaxed text-ink/80">Skip real-name authentication and WeChat caps your total spend for the entire stay at ~RMB 15,000 — not per transaction or per day, but cumulative. That ceiling arrives faster than most people expect. Complete real-name before your first big purchase.</p></li></ul></div><div class="flex flex-col gap-2"><h4 class="text-xs font-bold uppercase tracking-widest text-muted">Day 1 paying</h4><ul class="grid gap-2 md:grid-cols-2"><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900">Both</span><strong class="text-sm leading-tight">Personal QR codes reject foreign cards — let merchant scan you instead</strong></div><p class="text-xs leading-relaxed text-ink/80">Street vendors and small restaurants almost always show a personal collection QR (个人收款码), not a business merchant code. These only accept payment from RMB wallet balance or a Chinese bank card — your foreign-card-backed Alipay/WeChat is rejected. Workaround: open YOUR app&#x27;s payment barcode and ask them to scan you. Reverse direction usually works.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-900">Alipay</span><strong class="text-sm leading-tight">Over RMB 200? Split the bill — Alipay charges 3% above that</strong></div><p class="text-xs leading-relaxed text-ink/80">Alipay foreign-card transactions: 0% fee under RMB 200, 3% over. Splitting a 400 RMB bill into two 200 RMB scans eliminates the fee. Cashiers in China understand split payment without explanation.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900">Both</span><strong class="text-sm leading-tight">Carry RMB 200–500 cash — by law (since 2026-02-01) merchants must accept it</strong></div><p class="text-xs leading-relaxed text-ink/80">Since 2026-02-01 Chinese law requires merchants to accept physical RMB; refusing now carries penalties. Reliable cash sources: 7-Eleven / FamilyMart / Lawson; ICBC / BOC / CCB ATMs accept Visa/Mastercard with English UI.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900">WeChat</span><strong class="text-sm leading-tight">Didi / Meituan / Ele.me mini-programs need a +86 SIM</strong></div><p class="text-xs leading-relaxed text-ink/80">Even with WeChat Pay working, the Didi / Meituan / Ele.me mini-programs INSIDE WeChat require a Chinese mainland phone number to register. Use the standalone Didi app instead (which accepts foreign numbers + foreign cards).</p></li></ul></div><div class="flex flex-col gap-2"><h4 class="text-xs font-bold uppercase tracking-widest text-muted">After your trip</h4><ul class="grid gap-2 md:grid-cols-2"><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-900">Alipay</span><strong class="text-sm leading-tight">Alipay freezes after ~3 months of inactivity</strong></div><p class="text-xs leading-relaxed text-ink/80">If you don&#x27;t open Alipay for about three months after you fly home, your account locks itself. To reactivate, you&#x27;ll need your passport, a selfie video, and a one-line note explaining the flagged transaction. Most repeat visitors hit this on Day 1 of their next trip — clear it before you fly back.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-900">Alipay</span><strong class="text-sm leading-tight">Refunds take 3–7 business days to your card — not instant to wallet</strong></div><p class="text-xs leading-relaxed text-ink/80">Foreign-card-backed Alipay refunds go back to the issuing card on a 3–7 business day cycle, not instantly to your Alipay wallet. A failed train booking will show &quot;refunding&quot; for days with no balance in the app — that&#x27;s normal.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><div class="flex items-center gap-2"><span class="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900">WeChat</span><strong class="text-sm leading-tight">Foreign WeChat: red packets and P2P transfers are permanently blocked</strong></div><p class="text-xs leading-relaxed text-ink/80">Foreign-card-backed WeChat accounts cannot send OR receive red packets, and cannot transfer money to other users — only merchant QR payments work. If a Chinese friend wants to split dinner via WeChat transfer, you&#x27;ll need an alternative (cash, Alipay merchant scan).</p></li></ul></div></div></section><section class="flex flex-col gap-2"><h3 class="text-sm font-bold uppercase tracking-widest text-muted">This city — payment status</h3><ul class="grid gap-2 "><li class="flex flex-col gap-2 rounded-lg border border-line bg-white p-3"><ul class="grid gap-1.5"><li class="text-xs leading-relaxed text-ink/80">Subway tap-to-ride: all 5 networks (Visa, Mastercard, UnionPay, JCB, Amex) on every line; effective 2025-06-15.</li><li class="text-xs leading-relaxed text-ink/80">Capital + Daxing airports: 24 ATMs, 7 currency desks; over 11,000 city merchants accept foreign cards.</li></ul></li></ul></section></section></section><section id="transport" class="scroll-mt-24"><section class="flex flex-col gap-4"><h2 class="text-xl font-bold">Transport</h2><article class="flex flex-col gap-3 rounded-xl border border-line bg-white p-5"><h3 class="text-sm font-bold uppercase tracking-widest text-muted">12306 international</h3><div class="grid gap-1 border-t border-line pt-2 first:border-t-0 first:pt-0 md:grid-cols-[100px_1fr]"><span class="text-xs font-bold uppercase tracking-widest text-muted">Registration</span><p class="text-sm leading-relaxed">Register at 12306.cn/en using your passport. You&#x27;ll get either an email magic link or a Chinese-mobile SMS to confirm. Verification usually clears automatically; if it doesn&#x27;t, upload your passport and a selfie — manual review takes 3–5 working days, or visit any station counter.</p></div><div class="grid gap-1 border-t border-line pt-2 first:border-t-0 first:pt-0 md:grid-cols-[100px_1fr]"><span class="text-xs font-bold uppercase tracking-widest text-muted">Payment</span><p class="text-sm leading-relaxed">The 12306 English portal accepts Visa, Mastercard, JCB, Diners Club, and UnionPay. Alipay and WeChat Pay also work — the central government expat guide lists both.</p></div><div class="grid gap-1 border-t border-line pt-2 first:border-t-0 first:pt-0 md:grid-cols-[100px_1fr]"><span class="text-xs font-bold uppercase tracking-widest text-muted">Refund</span><p class="text-sm leading-relaxed">≥8 days before departure: 0% fee. 48h-8d: 5%. 24-48h: 10%. &lt;24h: 20%. One free change (date/train/seat) until 48h before departure.</p></div><div class="grid gap-1 border-t border-line pt-2 first:border-t-0 first:pt-0 md:grid-cols-[100px_1fr]"><span class="text-xs font-bold uppercase tracking-widest text-muted">Real-name</span><p class="text-sm leading-relaxed">Passport name on the ticket must match the bio page exactly. Carry passport on board for inspection. E-tickets are linked to passport number.</p></div></article><article class="flex flex-col gap-4 rounded-xl border border-line bg-white p-5"><section class="flex flex-col gap-2"><h4 class="text-sm font-bold">PEK<!-- --> · <!-- -->Capital International (PEK)</h4><ul class="grid gap-2 md:grid-cols-3"><li class="flex flex-col gap-1 rounded-lg bg-paper p-3"><span class="text-[10px] font-bold uppercase tracking-widest text-jade">Fastest</span><strong class="text-sm leading-tight">Capital Airport Express → Dongzhimen (Line 2/13)</strong><div class="text-xs text-muted">¥<!-- -->25 flat<!-- --> · <!-- -->~16<!-- --> <!-- -->min</div><span class="text-xs leading-snug">5-network tap-to-ride</span></li><li class="flex flex-col gap-1 rounded-lg bg-paper p-3"><span class="text-[10px] font-bold uppercase tracking-widest text-jade">Cheapest</span><strong class="text-sm leading-tight">Airport shuttle bus to Beijing Railway Station (T2 Gate 11 / T3 Gate 7)</strong><div class="text-xs text-muted">¥<!-- -->20–30<!-- --> · <!-- -->60–90<!-- --> <!-- -->min</div><span class="text-xs leading-snug">Cash; bring exact change — foreign cards not accepted on shuttles</span></li><li class="flex flex-col gap-1 rounded-lg bg-paper p-3"><span class="text-[10px] font-bold uppercase tracking-widest text-jade">Most stable</span><strong class="text-sm leading-tight">Official taxi queue at arrivals; metered fare</strong><div class="text-xs text-muted">¥<!-- -->100–150<!-- --> · <!-- -->40–80<!-- --> <!-- -->min</div><span class="text-xs leading-snug">Cash + Alipay/WeChat; foreign cards inconsistent</span></li></ul></section><section class="flex flex-col gap-2"><h4 class="text-sm font-bold">PKX<!-- --> · <!-- -->Daxing International (PKX)</h4><ul class="grid gap-2 md:grid-cols-3"><li class="flex flex-col gap-1 rounded-lg bg-paper p-3"><span class="text-[10px] font-bold uppercase tracking-widest text-jade">Fastest</span><strong class="text-sm leading-tight">Daxing Airport Express → Caoqiao (transfer Line 10/7)</strong><div class="text-xs text-muted">¥<!-- -->35<!-- --> · <!-- -->~19<!-- --> <!-- -->min</div><span class="text-xs leading-snug">5-network tap-to-ride</span></li><li class="flex flex-col gap-1 rounded-lg bg-paper p-3"><span class="text-[10px] font-bold uppercase tracking-widest text-jade">Cheapest</span><strong class="text-sm leading-tight">Daxing Airport shuttle bus to Beijing/West Railway Station</strong><div class="text-xs text-muted">¥<!-- -->40<!-- --> · <!-- -->70–100<!-- --> <!-- -->min</div><span class="text-xs leading-snug">Cash</span></li></ul></section><section class="flex flex-col gap-2 border-t border-line pt-3"><h4 class="text-sm font-bold">Metro payment</h4><p class="text-sm leading-relaxed">All 29 lines / 523 stations: Visa, Mastercard, UnionPay, JCB, Amex tap-to-ride at every gate (since 2025-06-15). World&#x27;s first metro to support all 5 networks.</p></section><section class="flex flex-col gap-2 border-t border-line pt-3"><h4 class="text-sm font-bold">Ride-hail &amp; taxi</h4><p class="text-sm leading-relaxed">DiDi accepts foreign phone + Visa/Mastercard with English UI; in-app 24/7 English customer service. Take official taxi queue at airport, never solicitations inside terminal.</p></section><section class="flex flex-col gap-2 border-t border-line pt-3"><h4 class="text-sm font-bold">Common pitfalls</h4><ul class="grid gap-2"><li class="rounded-lg bg-amber-50 p-3 text-sm">T1 is not on Capital Airport Express. T2/T3 only — confirm terminal before boarding.</li><li class="rounded-lg bg-amber-50 p-3 text-sm">PEK and PKX are 80 km apart — confirm IATA code before transit.</li></ul></section></article><section class="flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50/40 p-5"><header><span class="text-xs font-bold uppercase tracking-widest text-amber-800">Practical transport pitfalls</span></header><ul class="grid gap-2 md:grid-cols-2"><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Beijing Metro tap-and-go: only at end-of-row gate lanes</strong><p class="text-xs leading-relaxed text-ink/80">Since 2024-09 all 490 stations support contactless Visa/Mastercard, but the international-card turnstile is at a specific lane (usually the end of the row). Tapping a domestic-only gate just rejects.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Alipay transit QR: must activate per city</strong><p class="text-xs leading-relaxed text-ink/80">Activating Beijing&#x27;s transit code does NOT activate Shanghai / Guangzhou / Shenzhen. Open the Transport tab, pick the target city, and activate before reaching the turnstile.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Alipay transit QR expires in 5 minutes — regenerate at the gate</strong><p class="text-xs leading-relaxed text-ink/80">If you generated the code while walking and 5+ minutes passed, the turnstile rejects it. Regenerate immediately before scanning.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">12306 passport verification takes 3–7 days — last-minute booking fails</strong><p class="text-xs leading-relaxed text-ink/80">Online passport verification at 12306.cn requires a passport photo plus a selfie holding the passport. Processing typically takes 3–5 days, up to 7 in peak season. New accounts can&#x27;t book next-day trains. If you&#x27;re short on time, use Trip.com — verification usually clears in 1–2 hours.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Self-service ticket machines reject passports — go to staffed window</strong><p class="text-xs leading-relaxed text-ink/80">Auto-collection machines only read Chinese ID cards. Foreign passport holders must queue at staffed windows. At Beijing West / Shanghai Hongqiao that&#x27;s 20–30 min on a busy day.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Group bookings on 12306: each passport needs its own 3–7 day verification</strong><p class="text-xs leading-relaxed text-ink/80">Adding extra passengers to your 12306 booking means each one&#x27;s passport runs a separate verification cycle. Family of 4 = all 4 passports must clear before any tickets issue. Use Trip.com for groups.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Beijing has 5+ rail stations — book the right one</strong><p class="text-xs leading-relaxed text-ink/80">Beijing main, West, South, North, Chaoyang. Different stations are 30–60 min apart by metro. Confirm the specific station name when booking, not just &quot;Beijing&quot;.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Black taxi touts at Capital T3 information desk — 3–4× meter</strong><p class="text-xs leading-relaxed text-ink/80">Men posing as helpers near the T3 taxi info desk single out foreign-looking travellers and quote 3–4× meter. Legitimate Beijing taxis show &quot;Jing B&quot; plates. Anyone who approaches you first isn&#x27;t legit — walk to the official taxi queue.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Use DiDi Chuxing app, NOT &quot;DiDi Rider&quot; international</strong><p class="text-xs leading-relaxed text-ink/80">DiDi Rider international has limited mainland coverage. DiDi Chuxing (mainland version) has a full English UI, broader vehicles, and accepts Alipay / WeChat with foreign cards reliably.</p></li></ul></section></section></section><section id="food" class="scroll-mt-24"><section class="flex flex-col gap-4"><h2 class="text-xl font-bold">Food</h2><article class="grid gap-4 rounded-xl border border-line bg-white p-5 md:grid-cols-2"><section class="flex flex-col gap-2"><div class="flex items-center justify-between gap-2"><h3 class="text-xs font-bold uppercase tracking-widest text-muted">Local cuisine</h3><button type="button" class="text-[10px] font-bold uppercase tracking-wider text-jade hover:underline">How to eat it →</button></div><p class="text-sm leading-relaxed">Peking roast duck — carved tableside, paired with thin pancakes, scallion, and sweet bean sauce. Old-Beijing snacks: noodles with soybean paste, dou-zhi (fermented mung bean), tanghulu skewers, copper-pot mutton hotpot. Halal options widely available.</p></section><section class="flex flex-col gap-2"><h3 class="text-xs font-bold uppercase tracking-widest text-muted">Foreigner-friendly districts</h3><p class="text-sm leading-relaxed">Sanlitun (foreign restaurants, English menus common); Guomao CBD (international hotel dining); Wangfujing snack street; Hutong areas of central axis.</p></section><section class="flex flex-col gap-2"><h3 class="text-xs font-bold uppercase tracking-widest text-muted">Delivery apps</h3><p class="text-sm leading-relaxed">Meituan and Ele.me both require a Chinese mobile number for SMS verification plus a domestic payment method. Ask your hotel concierge to order for you, or stick to restaurants you can walk into.</p></section><section class="flex flex-col gap-2"><h3 class="text-xs font-bold uppercase tracking-widest text-muted">Pitfalls</h3><ul class="grid gap-2"><li class="rounded-lg bg-amber-50 p-3 text-xs leading-relaxed">Tea ceremony scams near tourist areas (Wangfujing/Houhai). Walk away if invited by &#x27;students&#x27; to a tea house.</li><li class="rounded-lg bg-amber-50 p-3 text-xs leading-relaxed">Some smaller hutong shops are cash-only; Visa swipe is rare outside hotels.</li></ul></section></article><div aria-hidden="true" class="fixed inset-0 z-40 bg-ink/30 backdrop-blur-sm transition-opacity duration-200 pointer-events-none opacity-0"></div><aside role="dialog" aria-modal="true" aria-label="Food culture and how to eat it" class="fixed inset-x-0 bottom-0 z-50 flex max-h-[85vh] flex-col rounded-t-2xl bg-paper shadow-2xl transition-transform duration-300 sm:bottom-auto sm:right-0 sm:top-0 sm:h-full sm:max-h-none sm:max-w-[480px] sm:rounded-none sm:rounded-l-2xl translate-y-full sm:translate-y-0 sm:translate-x-full"><header class="flex items-start justify-between gap-3 border-b border-line px-5 py-4"><div class="flex flex-col gap-0.5"><span class="text-xs font-bold uppercase tracking-widest text-muted">Local food culture</span><h2 class="text-xl font-bold leading-tight">Beijing</h2></div><button type="button" aria-label="Close" class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted hover:bg-line/40 hover:text-ink"><svg viewBox="0 0 20 20" fill="none" class="h-4 w-4" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></button></header><div class="flex flex-col gap-4 overflow-y-auto px-5 py-5 text-sm leading-relaxed"><p class="text-ink/90">Peking roast duck — carved tableside, paired with thin pancakes, scallion, and sweet bean sauce. Old-Beijing snacks: noodles with soybean paste, dou-zhi (fermented mung bean), tanghulu skewers, copper-pot mutton hotpot. Halal options widely available.</p><section class="flex flex-col gap-2"><span class="text-xs font-bold uppercase tracking-widest text-muted">Culture &amp; how to eat it</span><p class="text-ink/85">The duck is roasted whole until the skin is glassy, then sliced thin tableside. You wrap each slice in a delicate pancake with scallion, cucumber, and a dab of sweet bean sauce. Eating it is part performance, part shared meal — best with a small group ordering a whole duck. The classic version isn&#x27;t halal; halal restaurants substitute chicken. Order chrysanthemum tea or a local beer with it; the tradition doesn&#x27;t add chilli oil. Old-Beijing snacks (noodles with soybean paste, dou-zhi, tanghulu skewers) survive in walking-street stalls and small storefronts; pick one with locals queuing — that&#x27;s your quality signal. Copper-pot mutton hotpot belongs to winter, served with sesame paste and pickled garlic on the side.</p></section><p class="border-t border-line pt-3 text-[11px] text-muted">We cover cuisines and food culture only — no specific restaurant picks. Use Dianping / Meituan for venue selection.</p></div></aside><article class="flex flex-col gap-3 rounded-xl border border-line bg-paper p-5"><header><h3 class="text-base font-bold">Allergy / dietary card (show to staff)</h3><p class="text-xs text-muted">Fill in your allergen in both versions. Save a screenshot before you fly.</p></header><div class="grid gap-3 md:grid-cols-2"><pre class="whitespace-pre-wrap rounded-lg border border-line bg-white p-4 text-sm leading-relaxed">I am severely allergic to ____. I cannot eat or come into contact with any soup, sauce, oil, ingredients, or cookware that contain ____. Please do not include ____. If you are unsure, please tell me. Thank you.</pre><pre class="whitespace-pre-wrap rounded-lg border border-line bg-white p-4 text-sm leading-relaxed">我对 ____ 严重过敏，不能吃，也不能接触含有 ____ 的汤、酱、油、配料或厨具。请不要放 ____。如果不确定，请告诉我。谢谢。</pre></div></article><section class="flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50/40 p-5"><header><span class="text-xs font-bold uppercase tracking-widest text-amber-800">Practical food pitfalls</span></header><ul class="grid gap-2 md:grid-cols-2"><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">&quot;Vegetarian&quot; dishes often cooked in pork stock or lard</strong><p class="text-xs leading-relaxed text-ink/80">Ordering a vegetable dish at a regular restaurant doesn&#x27;t make it vegetarian — many are blanched in pork-bone broth or stir-fried in lard. Only Buddhist vegetarian restaurants (素食 Su Shi) reliably skip pork — but they use seitan (pure gluten) for mock meats, a separate problem for coeliacs.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Soy sauce contains wheat — &quot;no soy&quot; rarely eliminates gluten</strong><p class="text-xs leading-relaxed text-ink/80">酱油 jiangyou contains wheat and is in nearly every wok dish. Asking for &quot;no soy sauce&quot; usually means less, not none. Truly gluten-free eating in China requires steamed dishes ordered in writing to the kitchen.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Dried shrimp / shrimp paste hidden in non-seafood dishes</strong><p class="text-xs leading-relaxed text-ink/80">Dried shrimp (虾皮) and shrimp paste (虾酱) are routinely added to vegetable stir-fries, congee, and soups as flavour enhancers. Menu shows zero seafood. Show a Chinese-language allergy card directly to KITCHEN staff, not just the waiter.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Shared woks = cross-contamination even when staff understand the allergy</strong><p class="text-xs leading-relaxed text-ink/80">Traditional kitchens use 1–2 woks for everything, rinsed only with hot water between dishes. Severe allergies need restaurants with visibly separated cooking equipment.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Tea house scam: &quot;practice English&quot; → CNY 500–5000 bill</strong><p class="text-xs leading-relaxed text-ink/80">Documented at Wangfujing / Houhai (BJ), Nanjing Road / People&#x27;s Park (SH), Shamian Island (GZ). The new &quot;friend&quot; disappears; staff block exits until payment. If you walk in with strangers, demand to see a menu with prices BEFORE sitting down.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Tourist-area restaurants short-change by CNY 20–100</strong><p class="text-xs leading-relaxed text-ink/80">Documented near Shamian (GZ), Yu Garden (SH), Wangfujing (BJ). Count change immediately; demand an itemised receipt (发票 fapiao) before paying.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Tap water requires boiling — even in 4-star hotels</strong><p class="text-xs leading-relaxed text-ink/80">All four cities&#x27; tap water needs boiling before drinking. Hotel rooms include a kettle or filtered dispenser. Ice in budget restaurants may be tap-water-based. Bottled water 2–5 CNY for 550 ml.</p></li></ul></section></section></section><section id="emergency" class="scroll-mt-24"><section class="flex flex-col gap-4"><h2 class="text-xl font-bold">Emergency &amp; Medical</h2><ul class="grid gap-2 grid-cols-2 md:grid-cols-4"><li class="flex flex-col gap-1 rounded-xl border border-line bg-white p-4"><strong class="text-3xl leading-none">110</strong><span class="text-xs font-bold uppercase tracking-widest text-muted">Police</span><p class="text-xs leading-snug text-ink/80">Free. Shanghai 110 supports 8 languages.</p></li><li class="flex flex-col gap-1 rounded-xl border border-line bg-white p-4"><strong class="text-3xl leading-none">119</strong><span class="text-xs font-bold uppercase tracking-widest text-muted">Fire &amp; Rescue</span><p class="text-xs leading-snug text-ink/80">Free. Foreign-language support in Shanghai.</p></li><li class="flex flex-col gap-1 rounded-xl border border-line bg-white p-4"><strong class="text-3xl leading-none">120</strong><span class="text-xs font-bold uppercase tracking-widest text-muted">Ambulance</span><p class="text-xs leading-snug text-ink/80">Free. National medical emergency dispatch.</p></li><li class="flex flex-col gap-1 rounded-xl border border-line bg-white p-4"><strong class="text-3xl leading-none">122</strong><span class="text-xs font-bold uppercase tracking-widest text-muted">Traffic Police</span><p class="text-xs leading-snug text-ink/80">Free. No confirmed English line — use 110 or your hotline app for translation.</p></li></ul><article class="grid gap-4 rounded-xl border border-line bg-white p-5 md:grid-cols-[260px_1fr]"><section class="flex flex-col gap-2 rounded-lg bg-paper p-4"><span class="text-xs font-bold uppercase tracking-widest text-muted">City hotline</span><strong class="text-2xl leading-none">12345</strong><ul class="flex flex-wrap gap-1 text-[10px] uppercase tracking-wider"><li class="rounded-full bg-white px-2 py-0.5 text-muted">EN</li><li class="rounded-full bg-white px-2 py-0.5 text-muted">JA</li><li class="rounded-full bg-white px-2 py-0.5 text-muted">KO</li><li class="rounded-full bg-white px-2 py-0.5 text-muted">DE</li><li class="rounded-full bg-white px-2 py-0.5 text-muted">FR</li><li class="rounded-full bg-white px-2 py-0.5 text-muted">RU</li><li class="rounded-full bg-white px-2 py-0.5 text-muted">ES</li><li class="rounded-full bg-white px-2 py-0.5 text-muted">AR</li><li class="rounded-full bg-white px-2 py-0.5 text-muted">PT</li><li class="rounded-full bg-white px-2 py-0.5 text-muted">IT</li></ul><p class="text-xs leading-snug">10 languages. English line 24/7; others ~8 hours/day.</p></section><section class="flex flex-col gap-2"><span class="text-xs font-bold uppercase tracking-widest text-muted">Foreign-friendly hospitals</span><ul class="grid gap-2"><li class="flex flex-col gap-1 rounded-lg border border-line p-3"><strong class="text-sm leading-tight">Peking Union Medical College Hospital (PUMCH)</strong><span class="text-xs text-muted">1 Shuaifuyuan, Wangfujing, Dongcheng District</span><div class="flex flex-wrap gap-x-4 gap-y-1 text-xs"><span><span class="font-bold">Main<!-- -->:</span> <!-- -->+86 10 6915 1188</span><span><span class="font-bold">ER<!-- -->:</span> <!-- -->24/7</span></div><span class="text-xs text-muted">International Medical Services (IMS)</span><span class="text-xs text-muted">Mon–Fri 08:00–17:00; Sat–Sun 08:00–12:00; ER 24/7</span></li><li class="flex flex-col gap-1 rounded-lg border border-line p-3"><strong class="text-sm leading-tight">Beijing United Family Hospital</strong><span class="text-xs text-muted">2 Jiangtai Road, Chaoyang District</span><div class="flex flex-wrap gap-x-4 gap-y-1 text-xs"><span><span class="font-bold">Main<!-- -->:</span> <!-- -->+86 10 5927 7000</span><span><span class="font-bold">ER<!-- -->:</span> <!-- -->+86 10 5927 7120</span></div><span class="text-xs text-muted">English-speaking doctors throughout; no separate international desk</span><span class="text-xs text-muted">ER 24/7; outpatient varies</span></li></ul></section></article><section class="flex flex-col gap-2"><h3 class="text-sm font-bold uppercase tracking-widest text-muted">Major embassies in China</h3><ul class="grid gap-2 md:grid-cols-2 lg:grid-cols-3"><li class="flex flex-col gap-1 rounded-lg border border-line bg-white p-3"><strong class="text-sm">United States</strong><span class="text-xs text-muted">55 Anjialou Road, Chaoyang District</span><span class="text-xs"><span class="font-bold">Main<!-- -->:</span> <!-- -->+86 10 8531 4000</span><span class="text-xs"><span class="font-bold">Emergency<!-- -->:</span> <!-- -->+1 202 501 4444 (State Dept Ops 24/7)</span></li><li class="flex flex-col gap-1 rounded-lg border border-line bg-white p-3"><strong class="text-sm">United Kingdom</strong><span class="text-xs text-muted">11 Guanghua Road, Chaoyang District</span><span class="text-xs"><span class="font-bold">Main<!-- -->:</span> <!-- -->+86 10 5192 4000</span><span class="text-xs"><span class="font-bold">Emergency<!-- -->:</span> <!-- -->+86 10 5192 4000 (24/7 prompts)</span></li><li class="flex flex-col gap-1 rounded-lg border border-line bg-white p-3"><strong class="text-sm">Canada</strong><span class="text-xs text-muted">19 Dongzhimenwai Dajie, Chaoyang District</span><span class="text-xs"><span class="font-bold">Main<!-- -->:</span> <!-- -->+86 10 5139 4000</span><span class="text-xs"><span class="font-bold">Emergency<!-- -->:</span> <!-- -->+86 10 5139 4000 (24/7)</span></li><li class="flex flex-col gap-1 rounded-lg border border-line bg-white p-3"><strong class="text-sm">Australia</strong><span class="text-xs text-muted">21 Dongzhimenwai Dajie</span><span class="text-xs"><span class="font-bold">Main<!-- -->:</span> <!-- -->+86 10 5140 4111</span><span class="text-xs"><span class="font-bold">Emergency<!-- -->:</span> <!-- -->+61 2 6261 3305 (Canberra 24/7)</span></li><li class="flex flex-col gap-1 rounded-lg border border-line bg-white p-3"><strong class="text-sm">Japan</strong><span class="text-xs text-muted">1 Liangmaqiao East Street, Chaoyang District</span><span class="text-xs"><span class="font-bold">Main<!-- -->:</span> <!-- -->+86 10 8531 9800</span><span class="text-xs"><span class="font-bold">Emergency<!-- -->:</span> <!-- -->+86 10 6532 5964 (Consular Protection)</span></li></ul><p class="text-xs text-muted">Full directory: <a href="https://www.fmprc.gov.cn/web/fw_673051/lbfw_673061/fgzl_673083/" target="_blank" rel="noreferrer" class="font-bold text-jade hover:underline">MFA — <!-- -->Full directory of foreign missions in China (MFA).</a></p></section><section class="flex flex-col gap-2 rounded-xl border border-line bg-white p-5"><h3 class="text-sm font-bold uppercase tracking-widest text-muted">Hospital visit flow</h3><ol class="grid gap-2"><li class="flex gap-3"><span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">1</span><div class="flex flex-1 flex-col gap-1"><strong class="text-sm">Make an appointment</strong><p class="text-xs leading-relaxed text-ink/80">Public hospital IMS desks accept walk-in registration; private hospitals (UFH/SOS/HKU-SZH IMC) prefer prior phone or app booking.</p></div></li><li class="flex gap-3"><span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">2</span><div class="flex flex-1 flex-col gap-1"><strong class="text-sm">Bring documents</strong><p class="text-xs leading-relaxed text-ink/80">Original passport (copy not enough). International insurance card + policy. Letter of guarantee from insurer if claiming direct billing.</p></div></li><li class="flex gap-3"><span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">3</span><div class="flex flex-1 flex-col gap-1"><strong class="text-sm">Pay at counter or direct-billing</strong><p class="text-xs leading-relaxed text-ink/80">Cash + Alipay/WeChat universal. UnionPay card universal. Visa/MC mainly at IMS/VIP desks. Direct billing only at hospitals contracted with your insurer.</p></div></li></ol></section><section class="flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50/40 p-5"><header><span class="text-xs font-bold uppercase tracking-widest text-amber-800">Practical medical &amp; emergency pitfalls</span></header><ul class="grid gap-2 md:grid-cols-2"><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Taxi to hospital is faster than 120 ambulance for non-spinal cases</strong><p class="text-xs leading-relaxed text-ink/80">120 ambulances aren&#x27;t equipped to Western paramedic standards and average 20+ min in urban traffic. Long-term expats consistently say: for non-spinal emergencies, take a taxi to the nearest 3A hospital.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Public hospital admission needs CNY 5K–20K cash deposit upfront</strong><p class="text-xs leading-relaxed text-ink/80">Hospitals will stabilise you in the ER, then ask for a CNY 5,000–20,000 deposit before any further treatment. Ambulances charge upfront too — about CNY 7 per km plus CNY 80 per hour of waiting. Most travel insurers reimburse you later, so check your insurer&#x27;s direct-billing hospital list before you fly.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Public hospitals: get a Medical Card (医疗卡) before any appointment</strong><p class="text-xs leading-relaxed text-ink/80">New patients can&#x27;t walk in directly. Go to the registration desk first — bring your passport and CNY 50, and allow 15–20 minutes. Head straight to the consultation room without doing this and staff will send you back.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">International hospital departments cost 6–12× standard rates</strong><p class="text-xs leading-relaxed text-ink/80">Beijing United Family, PUMCH international wing, and Raffles Shanghai all have English-speaking staff, but outpatient registration starts at CNY 300–600 versus CNY 10–30 at a standard public department. Plan on CNY 2,000–5,000+ per visit if your insurer doesn&#x27;t direct-bill.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Most Western prescriptions unavailable — bring your own + 20% extra</strong><p class="text-xs leading-relaxed text-ink/80">Chinese pharmacies don&#x27;t stock most Western brand-name medications. Controlled substances (some painkillers, ADHD drugs, anxiety meds) are restricted and may be confiscated at customs without a physician&#x27;s letter. Bring full supply in original labelled bottles.</p></li><li class="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3"><strong class="text-sm leading-tight">Beijing has 3 emergency numbers — 999 sometimes faster than 120</strong><p class="text-xs leading-relaxed text-ink/80">Beijing: 120 (public emergency), 999 (Red Cross / private ambulance, faster in some districts), 110 (police). US Embassy medical assistance +86-10-8531-4000. Beijing United 24h ER +86-10-5927-7120. PUMCH 24h ER +86-10-69155288.</p></li></ul></section></section></section><section id="portals" class="scroll-mt-24"><section class="flex flex-col gap-3"><header><span class="text-xs font-bold uppercase tracking-widest text-muted">Official further reading</span><h2 class="text-xl font-bold">City tourism bureau &amp; government portals</h2><p class="text-xs text-muted">Each city&#x27;s own official English-language portals. For city-specific details we don&#x27;t cover (events, seasonal routes, hyperlocal news), go straight to these.</p></header><ul class="grid gap-2 md:grid-cols-2"><li><a href="https://english.visitbeijing.com.cn/" target="_blank" rel="noreferrer" class="flex flex-col gap-1 rounded-lg border border-line bg-white p-4 hover:border-jade hover:bg-jade-soft"><strong class="text-sm">Visit Beijing</strong><span class="text-xs text-muted">Tourism bureau site — events, itinerary routes, ticketing portal, 7-language coverage.</span><span class="text-[10px] uppercase tracking-wider text-jade">english.visitbeijing.com.cn<!-- --> →</span></a></li><li><a href="https://english.beijing.gov.cn/travellinginbeijing/" target="_blank" rel="noreferrer" class="flex flex-col gap-1 rounded-lg border border-line bg-white p-4 hover:border-jade hover:bg-jade-soft"><strong class="text-sm">Beijing Government — Travelling in Beijing</strong><span class="text-xs text-muted">Government practical resource: visa, transport, payment, SIM cards, tax refunds, FAQs.</span><span class="text-[10px] uppercase tracking-wider text-jade">english.beijing.gov.cn<!-- --> →</span></a></li></ul></section></section><section class="flex flex-col gap-3 rounded-xl border border-dashed border-line bg-paper p-6"><h2 class="text-base font-bold">Phase 2 — coming soon</h2><p class="text-sm text-muted">Ask Chinese locals and share-your-trip features are in development.</p><div class="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest"><a class="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade" href="/ask" data-discover="true">Ask Chinese locals</a><a class="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade" href="/share" data-discover="true">Share your trip</a></div></section><p class="mt-6 border-t border-line pt-4 text-xs text-muted">Every figure, policy, and address on this page is cited from official Chinese government sources. Practical pitfalls are cited from traveler community blogs, each shown with author and date.<a class="ml-1 font-bold text-jade hover:underline" href="/sources" data-discover="true">See all references →</a></p></div><aside aria-label="City landmark" class="self-start lg:sticky lg:top-24"><div class="flex flex-col gap-3"><div class="overflow-hidden rounded-xl border border-line bg-paper"><div class="aspect-[3/4] w-full"><img src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&amp;q=80&amp;auto=format&amp;fit=crop" srcSet="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&amp;q=80&amp;auto=format&amp;fit=crop 600w, https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=900&amp;q=80&amp;auto=format&amp;fit=crop 900w, https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&amp;q=80&amp;auto=format&amp;fit=crop 1200w, https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1800&amp;q=80&amp;auto=format&amp;fit=crop 1800w" sizes="(min-width: 1024px) 300px, 100vw" alt="Forbidden City / Palace Museum" loading="lazy" decoding="async" referrerPolicy="no-referrer" class="h-full w-full animate-[fadeUp_500ms_ease] object-cover"/></div><div class="flex flex-col gap-1 p-3"><strong class="text-sm leading-tight">Forbidden City / Palace Museum</strong><span class="text-[10px] text-muted">Dongcheng<!-- --> · <!-- -->Ling Tang on Unsplash</span></div></div><div class="flex flex-wrap gap-1"><button type="button" aria-label="Forbidden City / Palace Museum" class="h-1.5 w-6 rounded-full transition bg-jade"></button><button type="button" aria-label="Great Wall at Mutianyu" class="h-1.5 w-6 rounded-full transition bg-line hover:bg-muted"></button><button type="button" aria-label="Summer Palace" class="h-1.5 w-6 rounded-full transition bg-line hover:bg-muted"></button><button type="button" aria-label="Temple of Heaven" class="h-1.5 w-6 rounded-full transition bg-line hover:bg-muted"></button><button type="button" aria-label="Lama Temple (Yonghe Gong)" class="h-1.5 w-6 rounded-full transition bg-line hover:bg-muted"></button><button type="button" aria-label="Tiananmen Square" class="h-1.5 w-6 rounded-full transition bg-line hover:bg-muted"></button></div></div></aside></div></main><footer class="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between"><p>Travel China demo data only.</p><div class="flex items-center gap-4"><a class="hover:text-jade" href="/sources" data-discover="true">References</a><a href="#top" class="hover:text-jade">Back to top</a></div></footer><script>((storageKey2, restoreKey) => {
18:import * as route1 from "/assets/CityPage-CC1OWDck.js";
20:  window.__reactRouterRouteModules = {"root":route0,"pages/CityPage":route1};

 succeeded in 994ms:
1:<!DOCTYPE html><html lang="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>旅行中国</title><link rel="alternate" hrefLang="x-default" href="/guide/notes"/><link rel="alternate" hrefLang="en" href="/guide/notes"/><link rel="alternate" hrefLang="zh-Hans" href="/guide/notes"/><meta property="og:site_name" content="Travel China"/><meta property="og:type" content="website"/><meta property="og:image" content="/assets/china-map-gs2022-4309.jpg"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:image" content="/assets/china-map-gs2022-4309.jpg"/><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=&#x27;http://www.w3.org/2000/svg&#x27; viewBox=&#x27;0 0 64 64&#x27;%3E%3Crect width=&#x27;64&#x27; height=&#x27;64&#x27; rx=&#x27;10&#x27; fill=&#x27;%2318201d&#x27;/%3E%3Ctext x=&#x27;32&#x27; y=&#x27;42&#x27; text-anchor=&#x27;middle&#x27; font-size=&#x27;34&#x27; fill=&#x27;white&#x27;%3E%E6%97%85%3C/text%3E%3C/svg%3E"/><link rel="modulepreload" href="/assets/manifest-da5c2155.js"/><link rel="modulepreload" href="/assets/entry.client-Cyh_bpCe.js"/><link rel="modulepreload" href="/assets/chunk-BA_0og6f.js"/><link rel="modulepreload" href="/assets/jsx-runtime-ZMBhQML0.js"/><link rel="modulepreload" href="/assets/root-DhqwcdKJ.js"/><link rel="modulepreload" href="/assets/clsx-H-aRJLpe.js"/><link rel="modulepreload" href="/assets/atlas-4jqVV5Wv.js"/><link rel="modulepreload" href="/assets/language-C0Wq3lWC.js"/><link rel="modulepreload" href="/assets/GuidePage-D2IOdcfO.js"/><link rel="modulepreload" href="/assets/SourcesNote-DfXhZovX.js"/><link rel="modulepreload" href="/assets/jsonLd-Ey63feG1.js"/><link rel="stylesheet" href="/assets/root-C7aYlZEt.css"/></head><body><header class="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur"><a class="flex min-w-0 shrink items-center gap-2" href="/" data-discover="true"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span><strong class="truncate text-xl font-bold leading-none">旅行中国</strong></a><div role="group" aria-label="Switch language" class="inline-flex shrink-0 overflow-hidden rounded-full border border-line"><button type="button" aria-pressed="true" aria-label="Switch to English" class="px-2.5 py-1 text-xs font-bold uppercase tracking-normal transition sm:px-3 sm:tracking-widest bg-ink text-white">EN</button><button type="button" aria-pressed="false" aria-label="Switch to Chinese" class="px-2.5 py-1 text-xs font-bold uppercase tracking-normal transition sm:px-3 sm:tracking-widest bg-white text-muted hover:text-ink">中文</button></div></header><script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do I need a visa to enter China?","acceptedAnswer":{"@type":"Answer","text":"50 nationalities have unilateral 30-day visa-free entry; 55 nationalities qualify for 240-hour transit visa-free across 65 ports / 24 provinces. Use the Visa Checker above for your specific passport."}},{"@type":"Question","name":"Do I need to fill in an arrival card?","acceptedAnswer":{"@type":"Answer","text":"Yes. Since 2025-11-20 the Foreigner Entry/Exit Card can be pre-filled online for free at the official NIA portal. Kiosks and paper cards are still available at the port. Watch out for fake fee-charging sites."}},{"@type":"Question","name":"Will my foreign credit card work in China?","acceptedAnswer":{"@type":"Answer","text":"Set up Alipay or WeChat Pay before you fly and link a Visa or Mastercard. PBOC raised the cap to USD 5,000 per transaction / USD 50,000 annually in 2024. Standalone Visa/Mastercard swipes work mainly at airports, hotels, and major retailers."}},{"@type":"Question","name":"How much cash can I bring in?","acceptedAnswer":{"@type":"Answer","text":"Up to ¥20,000 RMB without declaration. Foreign currency above the equivalent of USD 5,000 must be declared on arrival."}},{"@type":"Question","name":"Will Google Maps and WhatsApp work?","acceptedAnswer":{"@type":"Answer","text":"Several international services may be intermittent or unavailable in mainland China. Install local alternatives before you fly: Amap (gaode.com) for navigation, Baidu Translate for menus, WeChat for messaging, Alipay for payments. International roaming SIM/eSIM typically works as on your home plan."}},{"@type":"Question","name":"What's the emergency number if something happens?","acceptedAnswer":{"@type":"Answer","text":"110 police, 119 fire, 120 ambulance, 122 traffic — all free. Beijing 12345 supports 10 languages 24/7; Shanghai 12345 supports 18 languages (press 7); Guangzhou 960169 is a three-party language bridge."}},{"@type":"Question","name":"Can I book high-speed rail with a foreign passport?","acceptedAnswer":{"@type":"Answer","text":"Yes via 12306.cn/en. Online auto-verification is fastest; if it fails, manual review of passport + selfie takes 3–5 working days, or visit any station counter on arrival."}},{"@type":"Question","name":"Is tap water safe to drink?","acceptedAnswer":{"@type":"Answer","text":"China's tap water is treated but boiling before drinking is the local norm. Hotel rooms typically include kettles and bottled water. Bottled water is widely sold for ¥2–3."}}]}</script><script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://travel-china.example.com/"},{"@type":"ListItem","position":2,"name":"Guide"},{"@type":"ListItem","position":3,"name":"Travel notes","item":"https://travel-china.example.com/guide/notes"}]}</script><main id="top" class="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10"><header class="flex flex-col gap-2"><a class="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade" href="/" data-discover="true">← Home</a><h1 class="text-3xl font-bold leading-tight">Travel notes</h1><p class="max-w-2xl text-sm leading-relaxed text-muted">Policy changes and common pre-arrival questions are collected here.</p></header><section id="travel-alerts" aria-label="Travel alerts" class="flex flex-col gap-3"><header class="flex items-end justify-between"><div><span class="text-xs font-bold uppercase tracking-widest text-muted">Travel Alerts</span><h2 class="text-2xl font-bold leading-tight">What changed before you book</h2></div></header><ul class="grid gap-3 md:grid-cols-3"><li class="flex min-w-0 flex-col gap-2 rounded-lg border p-4 border-line bg-white"><strong class="text-sm leading-tight break-words">240-hour transit visa-free is live</strong><p class="text-xs leading-snug text-ink/80 break-words">Effective 2025-11-05. Covers 55 countries across 65 ports / 24 provincial regions. Onward third-country ticket required.</p></li><li class="flex min-w-0 flex-col gap-2 rounded-lg border p-4 border-line bg-white"><strong class="text-sm leading-tight break-words">Online entry card now available — beware fake sites</strong><p class="text-xs leading-snug text-ink/80 break-words">Free pre-fill at the official NIA portal since 2025-11-20. Kiosk and paper card remain available at the port.</p></li><li class="flex min-w-0 flex-col gap-2 rounded-lg border p-4 border-line bg-white"><strong class="text-sm leading-tight break-words">Unilateral 30-day visa-free expires in 233 days</strong><p class="text-xs leading-snug text-ink/80 break-words">Current 50-country list runs until 2026-12-31. Re-verify NIA before booking trips after that date.</p></li></ul></section><section id="top-questions" class="flex min-w-0 flex-col gap-3 rounded-lg border border-line bg-white p-4"><header><span class="text-xs font-bold uppercase tracking-widest text-muted">Pre-arrival FAQ</span><h2 class="text-xl font-bold leading-tight">Top questions before you fly</h2><p class="text-sm text-muted">Every answer cites an official source. Tap to expand.</p></header><ul class="flex flex-col gap-2"><li class="rounded-lg border border-line bg-white"><button type="button" aria-expanded="true" class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"><strong class="min-w-0 text-sm leading-tight break-words">Do I need a visa to enter China?</strong><span class="shrink-0 text-xl text-muted transition-transform rotate-45" aria-hidden="true">+</span></button><div class="border-t border-line px-4 py-3"><p class="text-sm leading-relaxed break-words">50 nationalities have unilateral 30-day visa-free entry; 55 nationalities qualify for 240-hour transit visa-free across 65 ports / 24 provinces. Use the Visa Checker above for your specific passport.</p></div></li><li class="rounded-lg border border-line bg-white"><button type="button" aria-expanded="false" class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"><strong class="min-w-0 text-sm leading-tight break-words">Do I need to fill in an arrival card?</strong><span class="shrink-0 text-xl text-muted transition-transform" aria-hidden="true">+</span></button></li><li class="rounded-lg border border-line bg-white"><button type="button" aria-expanded="false" class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"><strong class="min-w-0 text-sm leading-tight break-words">Will my foreign credit card work in China?</strong><span class="shrink-0 text-xl text-muted transition-transform" aria-hidden="true">+</span></button></li><li class="rounded-lg border border-line bg-white"><button type="button" aria-expanded="false" class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"><strong class="min-w-0 text-sm leading-tight break-words">How much cash can I bring in?</strong><span class="shrink-0 text-xl text-muted transition-transform" aria-hidden="true">+</span></button></li><li class="rounded-lg border border-line bg-white"><button type="button" aria-expanded="false" class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"><strong class="min-w-0 text-sm leading-tight break-words">Will Google Maps and WhatsApp work?</strong><span class="shrink-0 text-xl text-muted transition-transform" aria-hidden="true">+</span></button></li><li class="rounded-lg border border-line bg-white"><button type="button" aria-expanded="false" class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"><strong class="min-w-0 text-sm leading-tight break-words">What&#x27;s the emergency number if something happens?</strong><span class="shrink-0 text-xl text-muted transition-transform" aria-hidden="true">+</span></button></li><li class="rounded-lg border border-line bg-white"><button type="button" aria-expanded="false" class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"><strong class="min-w-0 text-sm leading-tight break-words">Can I book high-speed rail with a foreign passport?</strong><span class="shrink-0 text-xl text-muted transition-transform" aria-hidden="true">+</span></button></li><li class="rounded-lg border border-line bg-white"><button type="button" aria-expanded="false" class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"><strong class="min-w-0 text-sm leading-tight break-words">Is tap water safe to drink?</strong><span class="shrink-0 text-xl text-muted transition-transform" aria-hidden="true">+</span></button></li></ul></section><p class="mt-6 border-t border-line pt-4 text-xs text-muted">Every figure, policy, and address on this page is cited from official Chinese government sources. Practical pitfalls are cited from traveler community blogs, each shown with author and date.<a class="ml-1 font-bold text-jade hover:underline" href="/sources" data-discover="true">See all references →</a></p></main><footer class="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between"><p>Travel China demo data only.</p><div class="flex items-center gap-4"><a class="hover:text-jade" href="/sources" data-discover="true">References</a><a href="#top" class="hover:text-jade">Back to top</a></div></footer><script>((storageKey2, restoreKey) => {

diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..baf8f90a22e4466ab904c2b9e4f91effa4df7249
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City" },
+    { name: city.zh, path: `/city/${cityId}` }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index e5284f7d2a7e5ead209144388f75da30bff35f5b..be4e27a8262bff80af1019e085ca973bd37037b8
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,9 +2,11 @@
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
-import TopQuestions from "../components/sections/TopQuestions";
-import SourcesNote from "../components/common/SourcesNote";
-import { useLang } from "../store/language";
+import TopQuestions from "../components/sections/TopQuestions";
+import SourcesNote from "../components/common/SourcesNote";
+import { topQuestions } from "../data/top-questions";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
 
 type GuideTopic = "entry" | "payments" | "notes";
 
@@ -29,9 +31,28 @@
   }
 };
 
-const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
-
-export default function GuidePage() {
+const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
+
+const notesFaqJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "FAQPage",
+  mainEntity: topQuestions.map((question) => ({
+    "@type": "Question",
+    name: question.questionEn,
+    acceptedAnswer: {
+      "@type": "Answer",
+      text: question.answerEn
+    }
+  }))
+};
+
+const notesBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "Guide" },
+  { name: "Travel notes", path: "/guide/notes" }
+]);
+
+export default function GuidePage() {
   const { topic } = useParams<{ topic: string }>();
   const { lang } = useLang();
   const isZh = lang === "zh";
@@ -54,10 +75,23 @@
   }
 
   const current = topic as GuideTopic;
-  const label = topicLabels[current];
-
-  return (
-    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+  const label = topicLabels[current];
+
+  return (
+    <>
+      {current === "notes" && (
+        <>
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesFaqJsonLd) }}
+          />
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesBreadcrumbJsonLd) }}
+          />
+        </>
+      )}
+      <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 返回首页" : "← Home"}
@@ -78,6 +112,7 @@
       )}
 
       <SourcesNote />
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

codex
HTML 里已经能扫到 WebSite、City/TouristAttraction、FAQPage 和 BreadcrumbList。为了更贴近 Google 面包屑格式，我把中间层保留 URL，最后一层作为当前页名称。
apply patch
patch: completed
C:\Users\h\Documents\New project 2\v2\src\pages\CityPage.tsx
diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..38460e1ed6541a5f066c3b74f8331c4dbf5f589d
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City", path: `/city/${cityId}` },
+    { name: city.zh }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index e5284f7d2a7e5ead209144388f75da30bff35f5b..be4e27a8262bff80af1019e085ca973bd37037b8
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,9 +2,11 @@
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
-import TopQuestions from "../components/sections/TopQuestions";
-import SourcesNote from "../components/common/SourcesNote";
-import { useLang } from "../store/language";
+import TopQuestions from "../components/sections/TopQuestions";
+import SourcesNote from "../components/common/SourcesNote";
+import { topQuestions } from "../data/top-questions";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
 
 type GuideTopic = "entry" | "payments" | "notes";
 
@@ -29,9 +31,28 @@
   }
 };
 
-const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
-
-export default function GuidePage() {
+const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
+
+const notesFaqJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "FAQPage",
+  mainEntity: topQuestions.map((question) => ({
+    "@type": "Question",
+    name: question.questionEn,
+    acceptedAnswer: {
+      "@type": "Answer",
+      text: question.answerEn
+    }
+  }))
+};
+
+const notesBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "Guide" },
+  { name: "Travel notes", path: "/guide/notes" }
+]);
+
+export default function GuidePage() {
   const { topic } = useParams<{ topic: string }>();
   const { lang } = useLang();
   const isZh = lang === "zh";
@@ -54,10 +75,23 @@
   }
 
   const current = topic as GuideTopic;
-  const label = topicLabels[current];
-
-  return (
-    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+  const label = topicLabels[current];
+
+  return (
+    <>
+      {current === "notes" && (
+        <>
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesFaqJsonLd) }}
+          />
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesBreadcrumbJsonLd) }}
+          />
+        </>
+      )}
+      <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 返回首页" : "← Home"}
@@ -78,6 +112,7 @@
       )}
 
       <SourcesNote />
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..38460e1ed6541a5f066c3b74f8331c4dbf5f589d
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City", path: `/city/${cityId}` },
+    { name: city.zh }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index e5284f7d2a7e5ead209144388f75da30bff35f5b..be4e27a8262bff80af1019e085ca973bd37037b8
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,9 +2,11 @@
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
-import TopQuestions from "../components/sections/TopQuestions";
-import SourcesNote from "../components/common/SourcesNote";
-import { useLang } from "../store/language";
+import TopQuestions from "../components/sections/TopQuestions";
+import SourcesNote from "../components/common/SourcesNote";
+import { topQuestions } from "../data/top-questions";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
 
 type GuideTopic = "entry" | "payments" | "notes";
 
@@ -29,9 +31,28 @@
   }
 };
 
-const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
-
-export default function GuidePage() {
+const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
+
+const notesFaqJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "FAQPage",
+  mainEntity: topQuestions.map((question) => ({
+    "@type": "Question",
+    name: question.questionEn,
+    acceptedAnswer: {
+      "@type": "Answer",
+      text: question.answerEn
+    }
+  }))
+};
+
+const notesBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "Guide" },
+  { name: "Travel notes", path: "/guide/notes" }
+]);
+
+export default function GuidePage() {
   const { topic } = useParams<{ topic: string }>();
   const { lang } = useLang();
   const isZh = lang === "zh";
@@ -54,10 +75,23 @@
   }
 
   const current = topic as GuideTopic;
-  const label = topicLabels[current];
-
-  return (
-    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+  const label = topicLabels[current];
+
+  return (
+    <>
+      {current === "notes" && (
+        <>
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesFaqJsonLd) }}
+          />
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesBreadcrumbJsonLd) }}
+          />
+        </>
+      )}
+      <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 返回首页" : "← Home"}
@@ -78,6 +112,7 @@
       )}
 
       <SourcesNote />
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

apply patch
patch: completed
C:\Users\h\Documents\New project 2\v2\src\pages\GuidePage.tsx
diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..38460e1ed6541a5f066c3b74f8331c4dbf5f589d
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City", path: `/city/${cityId}` },
+    { name: city.zh }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index e5284f7d2a7e5ead209144388f75da30bff35f5b..430f30ed97efe14c8d130c339b183736966f6062
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,9 +2,11 @@
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
-import TopQuestions from "../components/sections/TopQuestions";
-import SourcesNote from "../components/common/SourcesNote";
-import { useLang } from "../store/language";
+import TopQuestions from "../components/sections/TopQuestions";
+import SourcesNote from "../components/common/SourcesNote";
+import { topQuestions } from "../data/top-questions";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
 
 type GuideTopic = "entry" | "payments" | "notes";
 
@@ -29,9 +31,28 @@
   }
 };
 
-const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
-
-export default function GuidePage() {
+const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
+
+const notesFaqJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "FAQPage",
+  mainEntity: topQuestions.map((question) => ({
+    "@type": "Question",
+    name: question.questionEn,
+    acceptedAnswer: {
+      "@type": "Answer",
+      text: question.answerEn
+    }
+  }))
+};
+
+const notesBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "Guide", path: "/guide/notes" },
+  { name: "Travel notes" }
+]);
+
+export default function GuidePage() {
   const { topic } = useParams<{ topic: string }>();
   const { lang } = useLang();
   const isZh = lang === "zh";
@@ -54,10 +75,23 @@
   }
 
   const current = topic as GuideTopic;
-  const label = topicLabels[current];
-
-  return (
-    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+  const label = topicLabels[current];
+
+  return (
+    <>
+      {current === "notes" && (
+        <>
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesFaqJsonLd) }}
+          />
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesBreadcrumbJsonLd) }}
+          />
+        </>
+      )}
+      <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 返回首页" : "← Home"}
@@ -78,6 +112,7 @@
       )}
 
       <SourcesNote />
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..38460e1ed6541a5f066c3b74f8331c4dbf5f589d
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City", path: `/city/${cityId}` },
+    { name: city.zh }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index e5284f7d2a7e5ead209144388f75da30bff35f5b..430f30ed97efe14c8d130c339b183736966f6062
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,9 +2,11 @@
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
-import TopQuestions from "../components/sections/TopQuestions";
-import SourcesNote from "../components/common/SourcesNote";
-import { useLang } from "../store/language";
+import TopQuestions from "../components/sections/TopQuestions";
+import SourcesNote from "../components/common/SourcesNote";
+import { topQuestions } from "../data/top-questions";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
 
 type GuideTopic = "entry" | "payments" | "notes";
 
@@ -29,9 +31,28 @@
   }
 };
 
-const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
-
-export default function GuidePage() {
+const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
+
+const notesFaqJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "FAQPage",
+  mainEntity: topQuestions.map((question) => ({
+    "@type": "Question",
+    name: question.questionEn,
+    acceptedAnswer: {
+      "@type": "Answer",
+      text: question.answerEn
+    }
+  }))
+};
+
+const notesBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "Guide", path: "/guide/notes" },
+  { name: "Travel notes" }
+]);
+
+export default function GuidePage() {
   const { topic } = useParams<{ topic: string }>();
   const { lang } = useLang();
   const isZh = lang === "zh";
@@ -54,10 +75,23 @@
   }
 
   const current = topic as GuideTopic;
-  const label = topicLabels[current];
-
-  return (
-    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+  const label = topicLabels[current];
+
+  return (
+    <>
+      {current === "notes" && (
+        <>
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesFaqJsonLd) }}
+          />
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesBreadcrumbJsonLd) }}
+          />
+        </>
+      )}
+      <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 返回首页" : "← Home"}
@@ -78,6 +112,7 @@
       )}
 
       <SourcesNote />
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

codex
面包屑微调完了，重新跑一遍 TypeScript 和 build，确保最终状态仍然是 0 error。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in C:\Users\h\Documents\New project 2\v2
 succeeded in 2394ms:
 succeeded in 10404ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1507 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                     6.23 kB │ gzip:     0.96 kB
build/client/assets/Map3D-B9DDZdqH.css              24.01 kB │ gzip:     5.37 kB
build/client/assets/root-C7aYlZEt.css               42.57 kB │ gzip:     8.00 kB
build/client/assets/language-C0Wq3lWC.js             0.26 kB │ gzip:     0.21 kB
build/client/assets/clsx-H-aRJLpe.js                 0.36 kB │ gzip:     0.23 kB
build/client/assets/jsonLd-CThwLJFf.js               0.47 kB │ gzip:     0.33 kB
build/client/assets/cityRoutes-Bze0fpUC.js           0.91 kB │ gzip:     0.50 kB
build/client/assets/chunk-BA_0og6f.js                0.95 kB │ gzip:     0.56 kB
build/client/assets/provinceColors-l0N14-I2.js       1.84 kB │ gzip:     0.95 kB
build/client/assets/HomePage-YqwMpwh2.js             6.25 kB │ gzip:     2.89 kB
build/client/assets/SharePage-Dhm33w9G.js            7.48 kB │ gzip:     2.76 kB
build/client/assets/phase2-preview-C04gkdDm.js       7.59 kB │ gzip:     4.48 kB
build/client/assets/AskPage-D8lacJR7.js              7.62 kB │ gzip:     2.92 kB
build/client/assets/Map3D-tSZI5JQc.js                8.95 kB │ gzip:     4.22 kB
build/client/assets/root-xo_Y4sWO.js                10.21 kB │ gzip:     4.84 kB
build/client/assets/GuidePage-6bf8IEY6.js           11.36 kB │ gzip:     5.34 kB
build/client/assets/MapPage-BAJsmPmJ.js             13.67 kB │ gzip:     5.00 kB
build/client/assets/practical-other-DJeb_aon.js     22.32 kB │ gzip:    10.76 kB
build/client/assets/atlas-4jqVV5Wv.js               23.24 kB │ gzip:     9.58 kB
build/client/assets/SourcesPage-CtsieNj4.js         32.19 kB │ gzip:     8.46 kB
build/client/assets/unsplash-NNplccFY.js            35.00 kB │ gzip:    15.33 kB
build/client/assets/SourcesNote-C4XEH551.js         39.01 kB │ gzip:    14.91 kB
build/client/assets/CityPage-EwyneKnR.js            53.25 kB │ gzip:    19.96 kB
build/client/assets/jsx-runtime-ZMBhQML0.js        127.17 kB │ gzip:    41.93 kB
build/client/assets/entry.client-Cyh_bpCe.js       186.53 kB │ gzip:    58.89 kB
build/client/assets/Cesium-BefueQ4V.js           4,724.63 kB │ gzip: 1,304.40 kB

[32m✓ built in 5.03s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 70 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m
[2mbuild\server\assets\server-build-C7aYlZEt.css[22m

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
build/server/.vite/manifest.json                 0.74 kB │ gzip:   0.27 kB
build/server/assets/Map3D-B9DDZdqH.css          24.01 kB │ gzip:   5.37 kB
build/server/assets/server-build-C7aYlZEt.css   42.57 kB │ gzip:   8.00 kB
build/server/assets/Map3D-Cv42P-Ue.js           15.47 kB │ gzip:   5.32 kB
build/server/assets/cityRoutes-Byzkxm76.js      31.42 kB │ gzip:  10.70 kB
build/server/index.js                          320.05 kB │ gzip: 100.45 kB

[32m✓ built in 882ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:virtual-modules (38%)
  - react-router:dot-server (37%)
  - react-router:inject-hmr-runtime (16%)
  - react-router:hmr-runtime (5%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..38460e1ed6541a5f066c3b74f8331c4dbf5f589d
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City", path: `/city/${cityId}` },
+    { name: city.zh }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index e5284f7d2a7e5ead209144388f75da30bff35f5b..430f30ed97efe14c8d130c339b183736966f6062
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,9 +2,11 @@
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
-import TopQuestions from "../components/sections/TopQuestions";
-import SourcesNote from "../components/common/SourcesNote";
-import { useLang } from "../store/language";
+import TopQuestions from "../components/sections/TopQuestions";
+import SourcesNote from "../components/common/SourcesNote";
+import { topQuestions } from "../data/top-questions";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
 
 type GuideTopic = "entry" | "payments" | "notes";
 
@@ -29,9 +31,28 @@
   }
 };
 
-const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
-
-export default function GuidePage() {
+const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
+
+const notesFaqJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "FAQPage",
+  mainEntity: topQuestions.map((question) => ({
+    "@type": "Question",
+    name: question.questionEn,
+    acceptedAnswer: {
+      "@type": "Answer",
+      text: question.answerEn
+    }
+  }))
+};
+
+const notesBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "Guide", path: "/guide/notes" },
+  { name: "Travel notes" }
+]);
+
+export default function GuidePage() {
   const { topic } = useParams<{ topic: string }>();
   const { lang } = useLang();
   const isZh = lang === "zh";
@@ -54,10 +75,23 @@
   }
 
   const current = topic as GuideTopic;
-  const label = topicLabels[current];
-
-  return (
-    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+  const label = topicLabels[current];
+
+  return (
+    <>
+      {current === "notes" && (
+        <>
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesFaqJsonLd) }}
+          />
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesBreadcrumbJsonLd) }}
+          />
+        </>
+      )}
+      <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 返回首页" : "← Home"}
@@ -78,6 +112,7 @@
       )}
 
       <SourcesNote />
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

codex
完成：Home 注入 WebSite + BreadcrumbList。4 个城市页注入 City、该城市全部 TouristAttraction + BreadcrumbList。/guide/notes 注入 topQuestions 英文 FAQPage + BreadcrumbList。

`npx tsc --noEmit`：0 error。`npm run build`：0 error，仅 Vite chunk size warning。
diff --git a/v2/src/lib/jsonLd.ts b/v2/src/lib/jsonLd.ts
new file mode 100644
index 0000000000000000000000000000000000000000..ad2de4afae61e7f9c8764c3fe8f2f72221e66835
--- /dev/null
+++ b/v2/src/lib/jsonLd.ts
@@ -0,0 +1,30 @@
+const FALLBACK_SITE_URL = "https://travel-china.example.com";
+
+export const SITE_URL =
+  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;
+
+export function absoluteUrl(path: string): string {
+  if (/^https?:\/\//i.test(path)) {
+    return path;
+  }
+
+  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
+  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
+}
+
+export function stringifyJsonLd(data: unknown): string {
+  return JSON.stringify(data).replace(/</g, "\\u003c");
+}
+
+export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
+  return {
+    "@context": "https://schema.org",
+    "@type": "BreadcrumbList",
+    itemListElement: items.map((item, index) => ({
+      "@type": "ListItem",
+      position: index + 1,
+      name: item.name,
+      ...(item.path ? { item: absoluteUrl(item.path) } : {})
+    }))
+  };
+}
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index afc86fe70e169a36c5909c665cafc8b38c92ca12..38460e1ed6541a5f066c3b74f8331c4dbf5f589d
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,5 +1,7 @@
 import { Link, useParams } from "react-router";
+import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
 import { useLang } from "../store/language";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
@@ -14,6 +16,61 @@
 
 const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
+function cityStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+  const cityUrl = absoluteUrl(`/city/${cityId}`);
+  const cityNodeId = `${cityUrl}#city`;
+
+  return {
+    "@context": "https://schema.org",
+    "@graph": [
+      {
+        "@type": "City",
+        "@id": cityNodeId,
+        name: [
+          { "@language": "en", "@value": city.en },
+          { "@language": "zh-CN", "@value": city.zh }
+        ],
+        url: cityUrl,
+        containedInPlace: {
+          "@type": "Country",
+          name: "China"
+        }
+      },
+      ...attractionsByCity(cityId).map((attraction) => ({
+        "@type": "TouristAttraction",
+        "@id": `${cityUrl}#${attraction.id}`,
+        name: [
+          { "@language": "en", "@value": attraction.nameEn },
+          { "@language": "zh-CN", "@value": attraction.nameZh }
+        ],
+        description: attraction.whyEn,
+        image: attraction.imageUrl,
+        url: attraction.officialUrl,
+        address: {
+          "@type": "PostalAddress",
+          addressLocality: city.en,
+          addressRegion: attraction.districtEn,
+          addressCountry: "CN"
+        },
+        containedInPlace: {
+          "@id": cityNodeId
+        }
+      }))
+    ]
+  };
+}
+
+function cityBreadcrumbStructuredData(cityId: CityId) {
+  const city = CITY_LABELS[cityId];
+
+  return breadcrumbListJsonLd([
+    { name: "Home", path: "/" },
+    { name: "City", path: `/city/${cityId}` },
+    { name: city.zh }
+  ]);
+}
+
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
   const { lang } = useLang();
@@ -30,9 +87,20 @@
 
   const id = cityId as CityId;
   const label = CITY_LABELS[id];
+  const cityJsonLd = cityStructuredData(id);
+  const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 
   return (
-    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
       <header className="mb-6 flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
@@ -75,6 +143,7 @@
 
         <CityImagePanel cityId={id} />
       </div>
-    </main>
+      </main>
+    </>
   );
 }
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index e5284f7d2a7e5ead209144388f75da30bff35f5b..430f30ed97efe14c8d130c339b183736966f6062
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,9 +2,11 @@
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
-import TopQuestions from "../components/sections/TopQuestions";
-import SourcesNote from "../components/common/SourcesNote";
-import { useLang } from "../store/language";
+import TopQuestions from "../components/sections/TopQuestions";
+import SourcesNote from "../components/common/SourcesNote";
+import { topQuestions } from "../data/top-questions";
+import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
+import { useLang } from "../store/language";
 
 type GuideTopic = "entry" | "payments" | "notes";
 
@@ -29,9 +31,28 @@
   }
 };
 
-const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
-
-export default function GuidePage() {
+const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
+
+const notesFaqJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "FAQPage",
+  mainEntity: topQuestions.map((question) => ({
+    "@type": "Question",
+    name: question.questionEn,
+    acceptedAnswer: {
+      "@type": "Answer",
+      text: question.answerEn
+    }
+  }))
+};
+
+const notesBreadcrumbJsonLd = breadcrumbListJsonLd([
+  { name: "Home", path: "/" },
+  { name: "Guide", path: "/guide/notes" },
+  { name: "Travel notes" }
+]);
+
+export default function GuidePage() {
   const { topic } = useParams<{ topic: string }>();
   const { lang } = useLang();
   const isZh = lang === "zh";
@@ -54,10 +75,23 @@
   }
 
   const current = topic as GuideTopic;
-  const label = topicLabels[current];
-
-  return (
-    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+  const label = topicLabels[current];
+
+  return (
+    <>
+      {current === "notes" && (
+        <>
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesFaqJsonLd) }}
+          />
+          <script
+            type="application/ld+json"
+            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesBreadcrumbJsonLd) }}
+          />
+        </>
+      )}
+      <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 返回首页" : "← Home"}
@@ -78,6 +112,7 @@
       )}
 
       <SourcesNote />
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 50e3987911e49b4de38eb92fa2a66464d964d25a..6df6ebff9a6ef16cbeb23919735223f6619a9bee
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -1,9 +1,10 @@
 import { Link } from "react-router";
 import MapPreview from "../components/map/MapPreview";
-import { attractionsByCity, type Attraction } from "../data/city-attractions";
-import { CITY_LABELS, type CityId } from "../data/transport";
-import { unsplashSrcSet } from "../lib/unsplash";
-import { useLang } from "../store/language";
+import { attractionsByCity, type Attraction } from "../data/city-attractions";
+import { CITY_LABELS, type CityId } from "../data/transport";
+import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
+import { unsplashSrcSet } from "../lib/unsplash";
+import { useLang } from "../store/language";
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
@@ -13,7 +14,39 @@
   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
 ];
 
-function pickCityPhoto(cityId: CityId): Attraction {
+const websiteJsonLd = {
+  "@context": "https://schema.org",
+  "@type": "WebSite",
+  name: [
+    { "@language": "en", "@value": "Travel China" },
+    { "@language": "zh-CN", "@value": "旅行中国" }
+  ],
+  url: absoluteUrl("/"),
+  inLanguage: ["en", "zh-CN"],
+  description: [
+    {
+      "@language": "en",
+      "@value":
+        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
+    },
+    {
+      "@language": "zh-CN",
+      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
+    }
+  ],
+  potentialAction: {
+    "@type": "SearchAction",
+    target: {
+      "@type": "EntryPoint",
+      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
+    },
+    "query-input": "required name=search_term_string"
+  }
+};
+
+const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);
+
+function pickCityPhoto(cityId: CityId): Attraction {
   return attractionsByCity(cityId)[0];
 }
 
@@ -21,8 +54,17 @@
   const { lang } = useLang();
   const isZh = lang === "zh";
 
-  return (
-    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
+  return (
+    <>
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
+      />
+      <script
+        type="application/ld+json"
+        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
+      />
+      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
       <header className="flex flex-col gap-2">
         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
           {isZh ? "欢迎来中国" : "Travel China"}
@@ -85,9 +127,10 @@
           </Link>
         ))}
       </section>
-    </main>
-  );
-}
+      </main>
+    </>
+  );
+}
 
 function CityPhotoCard({
   cityId,

tokens used
119,543
ERROR: The process with PID 611060 (child process of PID 574112) could not be terminated.
Reason: The operation attempted is not supported.
ERROR: The process with PID 574112 (child process of PID 432416) could not be terminated.
Reason: The operation attempted is not supported.
ERROR: The process with PID 432416 (child process of PID 609260) could not be terminated.
Reason: The operation attempted is not supported.
ERROR: The process with PID 609260 (child process of PID 608896) could not be terminated.
Reason: The operation attempted is not supported.

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
