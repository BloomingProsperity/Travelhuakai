# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-12T03:08:57.258Z

## Original task

在 v2/ workdir 真的 edit + build。

任务：v2/src/components/map/Province3DOverlay.tsx 里 Suspense 只有 loading fallback，没有 ErrorBoundary。Cesium 是 4.7MB 的 lazy chunk，如果加载失败（网络问题、CDN 抽风等）会让整个地图页白屏。codex audit 指 Province3DOverlay.tsx:48-56。

修法：
1. 创建一个 v2/src/components/common/MapErrorBoundary.tsx（class component）捕获 3D 加载错误
2. 在 Province3DOverlay 里用 MapErrorBoundary 包住 Suspense
3. 失败 fallback 显示一段文字：英文 'The 3D view couldn't load. Click reset to go back to the 2D map.' 中文 '3D 视图加载失败，点击重置返回二维地图。' + 一个 reset 按钮（调用 useAtlas 的 reset）
4. 错误信息走 console.error 留 traces

完成后 npx tsc --noEmit + npm run build 都 0 error。

报告 200 字以内：新建/改了哪些文件、错误降级 UX 是什么样、build 状态。

## Final prompt

在 v2/ workdir 真的 edit + build。

任务：v2/src/components/map/Province3DOverlay.tsx 里 Suspense 只有 loading fallback，没有 ErrorBoundary。Cesium 是 4.7MB 的 lazy chunk，如果加载失败（网络问题、CDN 抽风等）会让整个地图页白屏。codex audit 指 Province3DOverlay.tsx:48-56。

修法：
1. 创建一个 v2/src/components/common/MapErrorBoundary.tsx（class component）捕获 3D 加载错误
2. 在 Province3DOverlay 里用 MapErrorBoundary 包住 Suspense
3. 失败 fallback 显示一段文字：英文 'The 3D view couldn't load. Click reset to go back to the 2D map.' 中文 '3D 视图加载失败，点击重置返回二维地图。' + 一个 reset 按钮（调用 useAtlas 的 reset）
4. 错误信息走 console.error 留 traces

完成后 npx tsc --noEmit + npm run build 都 0 error。

报告 200 字以内：新建/改了哪些文件、错误降级 UX 是什么样、build 状态。

## Raw output

```text
SUCCESS: The process with PID 25844 (child process of PID 610380) has been terminated.
SUCCESS: The process with PID 610380 (child process of PID 609012) has been terminated.
SUCCESS: The process with PID 609012 (child process of PID 607896) has been terminated.
SUCCESS: The process with PID 607896 (child process of PID 605168) has been terminated.
SUCCESS: The process with PID 609684 (child process of PID 610496) has been terminated.
SUCCESS: The process with PID 610496 (child process of PID 602448) has been terminated.
SUCCESS: The process with PID 602448 (child process of PID 490712) has been terminated.
SUCCESS: The process with PID 490712 (child process of PID 605168) has been terminated.
已完成。

新建 [MapErrorBoundary.tsx](</c:/Users/h/Documents/New project 2/v2/src/components/common/MapErrorBoundary.tsx>)：class ErrorBoundary，捕获 3D lazy chunk/render 错误，并用 `console.error` 记录 error + component stack。

修改 [Province3DOverlay.tsx](</c:/Users/h/Documents/New project 2/v2/src/components/map/Province3DOverlay.tsx>)：用 `MapErrorBoundary` 包住原来的 `Suspense`。失败时显示中英文降级文案和 `Reset/重置` 按钮，按钮调用 `useAtlas().reset()` 返回 2D 地图。

验证：`npx tsc --noEmit` 0 error；`npm run build` 0 error。构建仍有 Cesium 大 chunk warning，不是 error。
SUCCESS: The process with PID 609532 (child process of PID 592236) has been terminated.
SUCCESS: The process with PID 592236 (child process of PID 498344) has been terminated.
SUCCESS: The process with PID 498344 (child process of PID 609696) has been terminated.
SUCCESS: The process with PID 609696 (child process of PID 605168) has been terminated.


OpenAI Codex v0.128.0 (research preview)
--------
workdir: c:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1a24-d0af-7213-aa32-4614c5a105ff
--------
user
在 v2/ workdir 真的 edit + build。

任务：v2/src/components/map/Province3DOverlay.tsx 里 Suspense 只有 loading fallback，没有 ErrorBoundary。Cesium 是 4.7MB 的 lazy chunk，如果加载失败（网络问题、CDN 抽风等）会让整个地图页白屏。codex audit 指 Province3DOverlay.tsx:48-56。

修法：
1. 创建一个 v2/src/components/common/MapErrorBoundary.tsx（class component）捕获 3D 加载错误
2. 在 Province3DOverlay 里用 MapErrorBoundary 包住 Suspense
3. 失败 fallback 显示一段文字：英文 'The 3D view couldn't load. Click reset to go back to the 2D map.' 中文 '3D 视图加载失败，点击重置返回二维地图。' + 一个 reset 按钮（调用 useAtlas 的 reset）
4. 错误信息走 console.error 留 traces

完成后 npx tsc --noEmit + npm run build 都 0 error。

报告 200 字以内：新建/改了哪些文件、错误降级 UX 是什么样、build 状态。
codex
我会用 `build-web-apps:react-best-practices`，因为这里是在改 React 懒加载和错误边界行为。先看现有组件和 atlas 状态管理，再做最小范围改动。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'C:/Users/h/.codex/plugins/cache/openai-curated/build-web-apps/63976030/skills/react-best-practices/SKILL.md'" in c:\Users\h\Documents\New project 2
 succeeded in 564ms:
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

  → Inspect v2 map overlay and atlas reset hook
  • Add MapErrorBoundary and wrap lazy 3D Suspense
  • Run typecheck and production build
codex
我先定位 `Province3DOverlay`、`useAtlas` 和现有错误/按钮样式，避免新组件和项目风格脱节。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Force' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg --files v2' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg "useAtlas|Province3DOverlay|reset" v2/src -n' in c:\Users\h\Documents\New project 2
 succeeded in 487ms:
v2\vite.config.ts
v2\tsconfig.node.json
v2\tsconfig.json
v2\tsconfig.app.json
v2\STYLE_GUIDE.md
v2\src\App.tsx
v2\src\main.tsx
v2\package.json
v2\package-lock.json
v2\index.html
v2\eslint.config.js
v2\src\routes.ts
v2\src\root.tsx
v2\react-router.config.ts
v2\README.md
v2\src\styles\globals.css
v2\scripts\restart-dev.mjs
v2\scripts\interaction-check.mjs
v2\research\alipay-wechat-foreigner-registration.md
v2\research\blog-platform-bureau-sweep.md
v2\research\zh-mandarin-audit.md
v2\research\ugc-qa-implementation.md
v2\research\seo-05-our-action-plan.md
v2\research\seo-04-multi-engine.md
v2\research\seo-02-decompose-winners.md
v2\research\seo-01-landscape.md
v2\research\evaluation-04-rewrites-applied.md
v2\research\evaluation-04-en-machine-feel.md
v2\research\evaluation-03-home-vs-competitors.md
v2\research\evaluation-02-seo-paid.md
v2\research\evaluation-01-acceptance.md
v2\research\city-shenzhen-deep.md
v2\research\city-shanghai-deep.md
v2\research\city-guangzhou-deep.md
v2\research\city-beijing-deep.md
v2\research\china-platforms-04-legal.md
v2\research\china-platforms-03-ugc.md
v2\research\china-platforms-02-maps-reviews.md
v2\research\china-platforms-01-video.md
v2\src\lib\shapes.ts
v2\src\services\notes.ts
v2\src\lib\search.ts
v2\src\lib\i18n.ts
v2\src\lib\format.ts
v2\src\lib\cityRoutes.ts
v2\public\favicon.svg
v2\src\hooks\useProvinceShapes.ts
v2\src\hooks\useCityViews.ts
v2\src\pages\SourcesPage.tsx
v2\src\pages\SharePage.tsx
v2\src\pages\MapPage.tsx
v2\src\pages\HomePage.tsx
v2\src\pages\GuidePage.tsx
v2\src\pages\CityPage.tsx
v2\src\pages\AskPage.tsx
v2\src\store\LanguageProvider.tsx
v2\src\store\language.ts
v2\src\store\AtlasProvider.tsx
v2\src\store\atlas.ts
v2\src\data\types.ts
v2\src\data\transport.ts
v2\src\data\top-questions.ts
v2\src\data\sources.ts
v2\src\data\practical-payments.ts
v2\src\data\practical-other.ts
v2\src\data\phase2-preview.ts
v2\src\data\payments.ts
v2\src\data\map-sources.ts
v2\src\data\i18n.ts
v2\src\data\food.ts
v2\src\data\entry-policies.ts
v2\src\data\emergency.ts
v2\src\data\city-tourism-portals.ts
v2\src\data\city-attractions.ts
v2\src\data\atlas.ts
v2\src\components\sections\TopQuestions.tsx
v2\public\assets\three.module.min.js
v2\public\assets\china-province-shapes.json
v2\public\assets\china-map-gs2022-4309.jpg
v2\public\assets\earth-bluemarble.jpg
v2\src\components\city\CuisineDrawer.tsx
v2\src\components\city\CityNav.tsx
v2\src\components\city\CityIntro.tsx
v2\src\components\city\CityImagePanel.tsx
v2\src\components\map\Province3DOverlay.tsx
v2\src\components\map\MapPreview.tsx
v2\src\components\map\Map3D.tsx
v2\src\components\map\HeroMap.tsx
v2\src\components\map\ProvinceHitAreaLayer.tsx
v2\src\components\map\provinceColors.ts
v2\src\components\map\ProvinceInfoCard.tsx
v2\src\components\map\ProvinceLabelLayer.tsx
v2\src\components\map\ProvinceShapeLayer.tsx
v2\src\components\map\SpecialRegionMarkers.tsx
v2\src\components\policy\TravelAlerts.tsx
v2\src\components\common\PracticalBlock.tsx
v2\src\components\common\CityFurtherReading.tsx
v2\src\components\common\SourcesNote.tsx
v2\src\components\layout\SiteHeader.tsx
v2\src\components\layout\SiteFooter.tsx
v2\src\components\layout\LanguageSwitch.tsx
v2\public\assets\province-map-textures\fujian.png
v2\public\assets\province-map-textures\chongqing.png
v2\public\assets\province-map-textures\beijing.png
v2\public\assets\province-map-textures\anhui.png
v2\public\assets\province-map-textures\guangdong.png
v2\public\assets\province-map-textures\gansu.png
v2\public\assets\province-map-textures\guangxi.png
v2\src\components\pillar\VisaChecker.tsx
v2\src\components\pillar\TransportGuide.tsx
v2\src\components\pillar\PaymentsPractical.tsx
v2\src\components\pillar\PaymentsChecklist.tsx
v2\src\components\pillar\FoodGuide.tsx
v2\src\components\pillar\EmergencyBriefing.tsx
v2\public\assets\province-map-textures\hunan.png
v2\public\assets\province-map-textures\hubei.png
v2\public\assets\province-map-textures\hong-kong.png
v2\public\assets\province-map-textures\henan.png
v2\public\assets\province-map-textures\heilongjiang.png
v2\public\assets\province-map-textures\hebei.png
v2\public\assets\province-map-textures\hainan.png
v2\public\assets\province-map-textures\guizhou.png
v2\public\assets\province-map-textures\jilin.png
v2\public\assets\province-map-textures\jiangxi.png
v2\public\assets\province-map-textures\jiangsu.png
v2\public\assets\province-map-textures\inner-mongolia.png
v2\public\assets\province-map-textures\macau.png
v2\public\assets\province-map-textures\liaoning.png
v2\public\assets\province-map-textures\ningxia.png
v2\public\assets\province-map-textures\qinghai.png
v2\public\assets\province-map-textures\shaanxi.png
v2\public\assets\province-map-textures\zhejiang.png
v2\public\assets\province-map-textures\yunnan.png
v2\public\assets\province-map-textures\xinjiang.png
v2\public\assets\province-map-textures\tibet.png
v2\public\assets\province-map-textures\tianjin.png
v2\public\assets\province-map-textures\taiwan.png
v2\public\assets\province-map-textures\sichuan.png
v2\public\assets\province-map-textures\shanxi.png
v2\public\assets\province-map-textures\shanghai.png
v2\public\assets\province-map-textures\shandong.png

 succeeded in 494ms:
v2/src\store\atlas.ts:15:  | { type: "reset" };
v2/src\store\atlas.ts:36:    case "reset":
v2/src\store\atlas.ts:65:export function useAtlas() {
v2/src\store\atlas.ts:67:  if (!ctx) throw new Error("useAtlas must be used within <AtlasProvider>");
v2/src\store\atlas.ts:82:    reset: () => dispatch({ type: "reset" })
v2/src\data\i18n.ts:30:    reset: "Reset",
v2/src\data\i18n.ts:96:    reset: "重置",
v2/src\pages\MapPage.tsx:4:import { useAtlas } from "../store/atlas";
v2/src\pages\MapPage.tsx:10:  const { reset } = useAtlas();
v2/src\pages\MapPage.tsx:14:      reset();
v2/src\pages\MapPage.tsx:16:  }, [reset]);
v2/src\components\map\Map3D.tsx:8:import { useAtlas } from "../../store/atlas";
v2/src\components\map\Map3D.tsx:340:  const { selectPlace } = useAtlas();
v2/src\components\map\HeroMap.tsx:2:import { useAtlas } from "../../store/atlas";
v2/src\components\map\HeroMap.tsx:7:import Province3DOverlay from "./Province3DOverlay";
v2/src\components\map\HeroMap.tsx:13:  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
v2/src\components\map\HeroMap.tsx:20:      if (event.key === "Escape") reset();
v2/src\components\map\HeroMap.tsx:24:  }, [focused, reset]);
v2/src\components\map\HeroMap.tsx:51:          <Province3DOverlay />
v2/src\components\map\HeroMap.tsx:56:            onClick={reset}
v2/src\components\map\Province3DOverlay.tsx:2:import { useAtlas } from "../../store/atlas";
v2/src\components\map\Province3DOverlay.tsx:7:export default function Province3DOverlay() {
v2/src\components\map\Province3DOverlay.tsx:8:  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
v2/src\components\map\Province3DOverlay.tsx:31:            onClick={reset}
v2/src\components\map\Province3DOverlay.tsx:39:            onClick={reset}
v2/src\components\map\ProvinceHitAreaLayer.tsx:2:import { useAtlas } from "../../store/atlas";
v2/src\components\map\ProvinceHitAreaLayer.tsx:9:  const { selectedProvinceId, selectPlace } = useAtlas();
v2/src\components\map\ProvinceInfoCard.tsx:2:import { useAtlas } from "../../store/atlas";
v2/src\components\map\ProvinceInfoCard.tsx:9:  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
v2/src\components\map\ProvinceLabelLayer.tsx:6:import { useAtlas } from "../../store/atlas";
v2/src\components\map\ProvinceLabelLayer.tsx:22:  const { selectedProvinceId } = useAtlas();
v2/src\components\map\ProvinceShapeLayer.tsx:6:import { useAtlas } from "../../store/atlas";
v2/src\components\map\ProvinceShapeLayer.tsx:81:  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
v2/src\components\map\SpecialRegionMarkers.tsx:3:import { useAtlas } from "../../store/atlas";
v2/src\components\map\SpecialRegionMarkers.tsx:14:  const { selectedProvinceId, selectPlace } = useAtlas();

 succeeded in 526ms:


    目录: C:\Users\h\Documents\New project 2


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----         2026/5/10     22:45                .claude                                                              
d--h--         2026/5/12     11:04                .git                                                                 
d-----         2026/5/12     11:04                .omc                                                                 
d-----         2026/5/10     23:56                .playwright-mcp                                                      
d-----          2026/5/9     16:47                assets                                                               
d-----          2026/5/9     22:56                node_modules                                                         
d-----          2026/5/9     17:01                src                                                                  
d-----         2026/5/12     11:01                v2                                                                   
-a----         2026/5/10     22:52            499 .gitignore                                                           
-a----          2026/5/9     17:21          27818 app.js                                                               
-a----          2026/5/9     17:00          13022 index.html                                                           
-a----          2026/5/9     17:30          11678 map3d.js                                                             
-a----          2026/5/9     22:56           3170 package-lock.json                                                    
-a----          2026/5/9     22:56             62 package.json                                                         
-a----         2026/5/10      1:35          24842 PROJECT_PLAN.md                                                      
-a----          2026/5/9     17:21          41244 styles.css                                                           



exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/src/components/map/Province3DOverlay.tsx'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/src/store/atlas.ts'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/src/data/i18n.ts'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/package.json'" in c:\Users\h\Documents\New project 2
 succeeded in 727ms:
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

 succeeded in 788ms:
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

 succeeded in 792ms:
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

 succeeded in 804ms:
export type Lang = "en" | "zh";

export const i18n: Record<Lang, Record<string, string>> = {
  en: {
    brandSubtitle: "涓浗鍩庡競涓庡崥鐗╅绱㈠紩",
    navAtlas: "Atlas",
    navVideo: "Video",
    navMuseums: "Museums",
    navSources: "Sources",
    searchPlaceholder: "Search city, county, town, village, scenic area",
    searchButton: "Search",
    searchNoMatch: "No matching place in the current demo index.",
    searchJumped: "Map jumped to",
    mapHintPending: "This province is listed on the map. City and museum data are not connected yet.",
    historyVideoTitle: "China Historical Evolution Video",
    historyVideoBody:
      "A video position for explaining China through dynasties, capitals, borders, routes, museums, and cultural exchange before users explore cities.",
    historyVideoMeta: "Official video: Discover a China Beyond Your Imagination",
    historyVideoSource: "Official source: Chinaculture.org",
    atlasTitle: "Administrative Atlas",
    atlasBody: "Click a province-level region to list cities. City pins open museum-first profiles.",
    provinceMode: "Province",
    cityMode: "City",
    provinceLevelRegions: "Province-level regions",
    currentView: "Current View",
    famousAttractions: "Famous attractions",
    scenicEntry: "Scenic entry",
    museumEntry: "Museum entry",
    provinceDataPending: "Famous attraction data for this province is not connected yet.",
    reset: "Reset",
    selectCity: "Select a city",
    selectCityBody:
      "The city profile will show the museum entry point, real visitor signals, official source status, and historical direction.",
    close: "Close",
    startHere: "Start here",
    pageViews: "Page views",
    visitorNotes: "Visitor notes",
    lastVerified: "Last verified",
    englishAccess: "English access",
    historicalIdentity: "Historical identity",
    thenExplore: "Then explore",
    sourcePolicy: "Source policy",
    sourcePolicyBody:
      "Official facts require source links. Visitor notes require explicit contributor authorization. Images are omitted unless licensed or contributed.",
    museumTitle: "Museum-first Page Template",
    museumBody:
      "Every city starts with the institution that explains its origin, timeline, people, and material culture.",
    flowOneTitle: "City Museum",
    flowOneBody: "Main city museum, provincial museum, archaeological site museum, or history hall.",
    flowTwoTitle: "Historical Context",
    flowTwoBody: "Dynasties, trade routes, wars, migration, local industries, and cultural identity.",
    flowThreeTitle: "Visitor Reality",
    flowThreeBody: "Passport booking, English labels, crowd level, access issues, and current notes.",
    flowFourTitle: "Explore After",
    flowFourBody: "Nearby historical sites, old streets, temples, relic parks, and heritage locations.",
    sourcesTitle: "Image and Source Rules",
    sourcesBody:
      "This template intentionally uses no scraped web photos. Production pages should use official facts, authorized visitor notes, licensed images, and visible attribution.",
    ruleOne: "Official text is used for factual extraction, not copied as prose.",
    ruleTwo: "AI summaries must trace important claims back to source records.",
    ruleThree: "Visitor notes require permission to publish and translate.",
    ruleFour: "Images need ownership, open license, or written authorization.",
    footerNote: "Travel China demo data only.",
    backToTop: "Back to top",
    cityProfiles: "city profiles",
    views: "views",
    viewIn3D: "View in 3D",
    exit3D: "Exit 3D"
  },
  zh: {
    brandSubtitle: "涓浗鍩庡競涓庡崥鐗╅绱㈠紩",
    navAtlas: "鍦板浘",
    navVideo: "瑙嗛",
    navMuseums: "鍗氱墿棣?,
    navSources: "鏉ユ簮",
    searchPlaceholder: "鎼滅储鍩庡競銆佸幙銆侀晣銆佹潙銆佹櫙鍖?,
    searchButton: "鎼滅储",
    searchNoMatch: "褰撳墠婕旂ず绱㈠紩閲屾病鏈夊尮閰嶅湴鐐广€?,
    searchJumped: "鍦板浘宸茶烦杞埌",
    mapHintPending: "璇ョ渷浠藉凡鍒楀叆鍦板浘锛屼絾鍩庡競鍜屽崥鐗╅鏁版嵁灏氭湭鎺ュ叆銆?,
    historyVideoTitle: "涓浗鍘嗗彶婕斿彉瑙嗛",
    historyVideoBody:
      "杩欓噷鐢ㄤ簬鎻掑叆瑙嗛锛岀敤鏈濅唬銆侀兘鍩庛€佺枂鍩熴€佽矾绾裤€佸崥鐗╅鍜屾枃鍖栦氦娴佽В閲婁腑鍥斤紝鍐嶈鐢ㄦ埛杩涘叆鍩庡競鎺㈢储銆?,
    historyVideoMeta: "瀹樻柟瑙嗛锛欴iscover a China Beyond Your Imagination",
    historyVideoSource: "瀹樻柟鏉ユ簮锛欳hinaculture.org",
    atlasTitle: "琛屾斂鍖哄垝鍦板浘",
    atlasBody: "鐐瑰嚮鐪佺骇鍦板尯鏌ョ湅鍩庡競鍒楄〃锛屽啀鐐瑰嚮鍩庡競鎵撳紑鍗氱墿棣嗕紭鍏堟。妗堛€?,
    provinceMode: "鐪佷唤",
    cityMode: "鍩庡競",
    provinceLevelRegions: "鐪佺骇鍦板尯",
    currentView: "褰撳墠瑙嗗浘",
    famousAttractions: "钁楀悕鏅偣",
    scenicEntry: "鏅尯鍏ュ彛",
    museumEntry: "鍗氱墿棣嗗叆鍙?,
    provinceDataPending: "璇ョ渷钁楀悕鏅偣鏁版嵁灏氭湭鎺ュ叆銆?,
    reset: "閲嶇疆",
    selectCity: "閫夋嫨鍩庡競",
    selectCityBody: "鍩庡競妗ｆ浼氬睍绀哄崥鐗╅鍏ュ彛銆佺湡瀹炴祻瑙堜俊鍙枫€佸畼鏂规潵婧愮姸鎬佸拰鍘嗗彶鑴夌粶銆?,
    close: "鍏抽棴",
    startHere: "浠庤繖閲屽紑濮?,
    pageViews: "椤甸潰娴忚",
    visitorNotes: "娓稿绗旇",
    lastVerified: "鏈€鍚庢牳楠?,
    englishAccess: "鑻辨枃鍙嬪ソ搴?,
    historicalIdentity: "鍘嗗彶瀹氫綅",
    thenExplore: "闅忓悗鎺㈢储",
    sourcePolicy: "鏉ユ簮瑙勫垯",
    sourcePolicyBody: "瀹樻柟浜嬪疄蹇呴』淇濈暀鏉ユ簮閾炬帴銆傛父瀹㈢瑪璁板繀椤诲彇寰楁姇绋挎巿鏉冦€傚浘鐗囨棤鎺堟潈鎴栧紑鏀捐鍙椂涓嶅睍绀恒€?,
    museumTitle: "鍗氱墿棣嗕紭鍏堥〉闈㈡ā鏉?,
    museumBody: "姣忓骇鍩庡競鍏堜粠瑙ｉ噴鍏惰捣婧愩€佹椂闂寸嚎銆佷汉鐗╁拰鐗╄川鏂囧寲鐨勬満鏋勫紑濮嬨€?,
    flowOneTitle: "鍩庡競鍗氱墿棣?,
    flowOneBody: "甯傜骇鍗氱墿棣嗐€佺渷绾у崥鐗╅銆佽€冨彜閬楀潃鍗氱墿棣嗘垨鍦版柟鏂囧彶棣嗐€?,
    flowTwoTitle: "鍘嗗彶鑴夌粶",
    flowTwoBody: "鏈濅唬銆佸晢璺€佹垬浜夈€佺Щ姘戙€佸湴鏂逛骇涓氬拰鏂囧寲韬唤銆?,
    flowThreeTitle: "鐪熷疄浣撻獙",
    flowThreeBody: "鎶ょ収棰勭害銆佽嫳鏂囧睍绛俱€佷汉娴佹儏鍐点€佷氦閫氶毦搴﹀拰鏈€鏂板弽棣堛€?,
    flowFourTitle: "缁х画鎺㈢储",
    flowFourBody: "闄勮繎鍘嗗彶閬楀潃銆佽€佽銆佸搴欍€佹枃鐗╁叕鍥拰鏂囧寲閬椾骇鍦扮偣銆?,
    sourcesTitle: "鍥剧墖涓庢潵婧愯鍒?,
    sourcesBody: "姝ゆā鏉夸笉浣跨敤鎶撳彇鐨勭綉缁滃浘鐗囥€傛寮忛〉闈㈠簲浣跨敤瀹樻柟浜嬪疄銆佹巿鏉冩父瀹㈢瑪璁般€佸悎瑙勫浘鐗囧拰鍙缃插悕銆?,
    ruleOne: "瀹樻柟鏂囧瓧鍙彁鍙栦簨瀹烇紝涓嶇洿鎺ュ鍒舵垚姝ｆ枃銆?,
    ruleTwo: "AI 鎽樿涓殑鍏抽敭浜嬪疄蹇呴』鑳借拷婧埌鏉ユ簮璁板綍銆?,
    ruleThree: "娓稿绗旇蹇呴』鑾峰緱鍙戝竷鍜岀炕璇戞巿鏉冦€?,
    ruleFour: "鍥剧墖蹇呴』鍏峰鎵€鏈夋潈銆佸紑鏀捐鍙垨涔﹂潰鎺堟潈銆?,
    footerNote: "鏃呰涓浗銆傚綋鍓嶄负婕旂ず鏁版嵁銆?,
    backToTop: "鍥炲埌椤堕儴",
    cityProfiles: "涓煄甯傛。妗?,
    views: "娆℃祻瑙?,
    viewIn3D: "鏌ョ湅 3D 妯″瀷",
    exit3D: "閫€鍑?3D"
  }
};

export const typeLabels: Record<Lang, Record<string, string>> = {
  en: { Municipality: "Municipality", Province: "Province" },
  zh: { Municipality: "鐩磋緰甯?, Province: "鐪? }
};

export const accessLabels: Record<Lang, Record<string, string>> = {
  en: { High: "High", Medium: "Medium", Low: "Low" },
  zh: { High: "楂?, Medium: "涓?, Low: "浣? }
};

export const statusLabels: Record<Lang, Record<string, string>> = {
  en: {
    "Official facts pending": "Official facts pending",
    "Needs visitor notes": "Needs visitor notes",
    "Needs review": "Needs review"
  },
  zh: {
    "Official facts pending": "瀹樻柟璧勬枡寰呮牳楠?,
    "Needs visitor notes": "闇€瑕佹父瀹㈢瑪璁?,
    "Needs review": "闇€瑕佸鏍?
  }
};

export const placeTypeLabels: Record<Lang, Record<string, string>> = {
  en: {
    province: "Province",
    city: "City",
    county: "County",
    town: "Town",
    village: "Village",
    museum: "Museum",
    site: "Scenic area"
  },
  zh: {
    province: "鐪佺骇鍦板尯",
    city: "鍩庡競",
    county: "鍘垮尯",
    town: "闀?,
    village: "鏉?,
    museum: "鍗氱墿棣?,
    site: "鏅尯"
  }
};

codex
现有 overlay 已经从 `useAtlas` 拿到 `reset`，所以错误边界可以保持通用 class component，fallback 由 overlay 传入；这样 class 不需要碰 hook，错误堆栈在 `componentDidCatch` 里统一记录。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/src/store/language.ts'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/tsconfig.json'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/tsconfig.app.json'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/src/components/common/SourcesNote.tsx'" in c:\Users\h\Documents\New project 2
 succeeded in 673ms:
import { createContext, useContext } from "react";
import type { Lang } from "../data/i18n";

export type LanguageContextValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
  t: (key: string) => string;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLang(): LanguageContextValue {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLang must be used within <LanguageProvider>");
  return value;
}

 succeeded in 684ms:
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

 succeeded in 742ms:
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

 succeeded in 741ms:
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

codex
接下来会新增 `common/MapErrorBoundary.tsx`，然后只改 `Province3DOverlay` 的 3D 内容区域，把现有 `Suspense` 包进去并复用当前 reset 按钮样式。
2026-05-12T03:06:09.557649Z ERROR codex_core::tools::router: error=apply_patch verification failed: Failed to find expected lines in c:\Users\h\Documents\New project 2\v2\src\components\map\Province3DOverlay.tsx:

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
codex
补丁没对上，原因是文件里的中文文案已经是 mojibake，精确匹配失败。我会改用更小的上下文补丁，先确认新文件是否已创建。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Test-Path 'v2/src/components/common/MapErrorBoundary.tsx'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=1; Get-Content -Path '"'v2/src/components/map/Province3DOverlay.tsx' | ForEach-Object { '{0,4}: {1}' -f "'$i, $_; $i++ }' in c:\Users\h\Documents\New project 2
 succeeded in 655ms:
False

 succeeded in 703ms:
   1: import { lazy, Suspense } from "react";
   2: import { useAtlas } from "../../store/atlas";
   3: import { useLang } from "../../store/language";
   4: 
   5: const Map3D = lazy(() => import("./Map3D"));
   6: 
   7: export default function Province3DOverlay() {
   8:   const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
   9:   const { lang } = useLang();
  10: 
  11:   if (!selectedProvinceId || !province || !is3DEnabled) return null;
  12: 
  13:   return (
  14:     <section
  15:       data-province-3d-overlay="true"
  16:       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
  17:     >
  18:       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
  19:         <div className="min-w-0">
  20:           <p className="text-xs font-bold uppercase tracking-widest text-muted">
  21:             {lang === "zh" ? "澶╁湴鍥?3D" : "Tianditu 3D"}
  22:           </p>
  23:           <h3 className="truncate text-base font-bold leading-tight sm:text-lg">
  24:             {lang === "zh" ? province.zh : province.name}
  25:           </h3>
  26:         </div>
  27: 
  28:         <div className="flex shrink-0 items-center gap-2">
  29:           <button
  30:             type="button"
  31:             onClick={reset}
  32:             className="rounded-full bg-ink px-3 py-2 text-xs font-bold uppercase tracking-normal text-white hover:bg-ink/90 sm:px-4 sm:tracking-wider"
  33:           >
  34:             {lang === "zh" ? "杩斿洖 2D" : "Back to 2D"}
  35:           </button>
  36:           <button
  37:             type="button"
  38:             aria-label={lang === "zh" ? "鍏抽棴 3D 鍦板浘" : "Close 3D map"}
  39:             onClick={reset}
  40:             className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-lg font-bold leading-none text-ink shadow-sm hover:border-jade hover:text-jade"
  41:           >
  42:             脳
  43:           </button>
  44:         </div>
  45:       </header>
  46: 
  47:       <div className="min-h-0 flex-1">
  48:         <Suspense
  49:           fallback={
  50:             <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
  51:               {lang === "zh" ? "姝ｅ湪鍔犺浇澶╁湴鍥?.." : "Loading Tianditu..."}
  52:             </div>
  53:           }
  54:         >
  55:           <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
  56:         </Suspense>
  57:       </div>
  58:     </section>
  59:   );
  60: }

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\common\MapErrorBoundary.tsx
diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}

diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\map\Province3DOverlay.tsx
diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..02316ef73fc9088a503df91df76098a8610e0a9f
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));

diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..02316ef73fc9088a503df91df76098a8610e0a9f
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));

2026-05-12T03:06:43.559712Z ERROR codex_core::tools::router: error=apply_patch verification failed: Failed to find expected lines in c:\Users\h\Documents\New project 2\v2\src\components\map\Province3DOverlay.tsx:
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
diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..02316ef73fc9088a503df91df76098a8610e0a9f
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\map\Province3DOverlay.tsx
diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..1393006752c6ccb7944e097a78f45b8b57c79a7a
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));
@@ -44,8 +45,32 @@
         </div>
       </header>
 
-      <div className="min-h-0 flex-1">
-        <Suspense
+      <div className="min-h-0 flex-1">
+        <MapErrorBoundary
+          resetKey={selectedProvinceId}
+          fallback={
+            <div
+              role="alert"
+              className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
+            >
+              <div className="max-w-sm space-y-4">
+                <p className="text-sm font-semibold leading-6 text-white/85">
+                  {lang === "zh"
+                    ? "3D 视图加载失败，点击重置返回二维地图。"
+                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
+                </p>
+                <button
+                  type="button"
+                  onClick={reset}
+                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
+                >
+                  {lang === "zh" ? "重置" : "Reset"}
+                </button>
+              </div>
+            </div>
+          }
+        >
+        <Suspense
           fallback={
             <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
               {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
@@ -53,8 +78,9 @@
           }
         >
           <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
-        </Suspense>
-      </div>
+        </Suspense>
+        </MapErrorBoundary>
+      </div>
     </section>
   );
 }

diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..1393006752c6ccb7944e097a78f45b8b57c79a7a
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));
@@ -44,8 +45,32 @@
         </div>
       </header>
 
-      <div className="min-h-0 flex-1">
-        <Suspense
+      <div className="min-h-0 flex-1">
+        <MapErrorBoundary
+          resetKey={selectedProvinceId}
+          fallback={
+            <div
+              role="alert"
+              className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
+            >
+              <div className="max-w-sm space-y-4">
+                <p className="text-sm font-semibold leading-6 text-white/85">
+                  {lang === "zh"
+                    ? "3D 视图加载失败，点击重置返回二维地图。"
+                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
+                </p>
+                <button
+                  type="button"
+                  onClick={reset}
+                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
+                >
+                  {lang === "zh" ? "重置" : "Reset"}
+                </button>
+              </div>
+            </div>
+          }
+        >
+        <Suspense
           fallback={
             <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
               {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
@@ -53,8 +78,9 @@
           }
         >
           <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
-        </Suspense>
-      </div>
+        </Suspense>
+        </MapErrorBoundary>
+      </div>
     </section>
   );
 }

codex
错误降级已经接入；我现在跑一次静态检查前先读回改动，主要看 TSX 嵌套和 import 顺序有没有问题。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/src/components/common/MapErrorBoundary.tsx'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=1; Get-Content -Path '"'v2/src/components/map/Province3DOverlay.tsx' | ForEach-Object { '{0,4}: {1}' -f "'$i, $_; $i++ }' in c:\Users\h\Documents\New project 2
 succeeded in 697ms:
   1: import { lazy, Suspense } from "react";
   2: import MapErrorBoundary from "../common/MapErrorBoundary";
   3: import { useAtlas } from "../../store/atlas";
   4: import { useLang } from "../../store/language";
   5: 
   6: const Map3D = lazy(() => import("./Map3D"));
   7: 
   8: export default function Province3DOverlay() {
   9:   const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
  10:   const { lang } = useLang();
  11: 
  12:   if (!selectedProvinceId || !province || !is3DEnabled) return null;
  13: 
  14:   return (
  15:     <section
  16:       data-province-3d-overlay="true"
  17:       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
  18:     >
  19:       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
  20:         <div className="min-w-0">
  21:           <p className="text-xs font-bold uppercase tracking-widest text-muted">
  22:             {lang === "zh" ? "澶╁湴鍥?3D" : "Tianditu 3D"}
  23:           </p>
  24:           <h3 className="truncate text-base font-bold leading-tight sm:text-lg">
  25:             {lang === "zh" ? province.zh : province.name}
  26:           </h3>
  27:         </div>
  28: 
  29:         <div className="flex shrink-0 items-center gap-2">
  30:           <button
  31:             type="button"
  32:             onClick={reset}
  33:             className="rounded-full bg-ink px-3 py-2 text-xs font-bold uppercase tracking-normal text-white hover:bg-ink/90 sm:px-4 sm:tracking-wider"
  34:           >
  35:             {lang === "zh" ? "杩斿洖 2D" : "Back to 2D"}
  36:           </button>
  37:           <button
  38:             type="button"
  39:             aria-label={lang === "zh" ? "鍏抽棴 3D 鍦板浘" : "Close 3D map"}
  40:             onClick={reset}
  41:             className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-lg font-bold leading-none text-ink shadow-sm hover:border-jade hover:text-jade"
  42:           >
  43:             脳
  44:           </button>
  45:         </div>
  46:       </header>
  47: 
  48:       <div className="min-h-0 flex-1">
  49:         <MapErrorBoundary
  50:           resetKey={selectedProvinceId}
  51:           fallback={
  52:             <div
  53:               role="alert"
  54:               className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
  55:             >
  56:               <div className="max-w-sm space-y-4">
  57:                 <p className="text-sm font-semibold leading-6 text-white/85">
  58:                   {lang === "zh"
  59:                     ? "3D 瑙嗗浘鍔犺浇澶辫触锛岀偣鍑婚噸缃繑鍥炰簩缁村湴鍥俱€?
  60:                     : "The 3D view couldn't load. Click reset to go back to the 2D map."}
  61:                 </p>
  62:                 <button
  63:                   type="button"
  64:                   onClick={reset}
  65:                   className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
  66:                 >
  67:                   {lang === "zh" ? "閲嶇疆" : "Reset"}
  68:                 </button>
  69:               </div>
  70:             </div>
  71:           }
  72:         >
  73:         <Suspense
  74:           fallback={
  75:             <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
  76:               {lang === "zh" ? "姝ｅ湪鍔犺浇澶╁湴鍥?.." : "Loading Tianditu..."}
  77:             </div>
  78:           }
  79:         >
  80:           <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
  81:         </Suspense>
  82:         </MapErrorBoundary>
  83:       </div>
  84:     </section>
  85:   );
  86: }

 succeeded in 706ms:
import { Component, type ErrorInfo, type ReactNode } from "react";

type MapErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
  resetKey?: string | null;
};

type MapErrorBoundaryState = {
  hasError: boolean;
};

export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
  state: MapErrorBoundaryState = {
    hasError: false
  };

  static getDerivedStateFromError(): MapErrorBoundaryState {
    return { hasError: true };
  }

  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false });
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("3D map overlay failed to load", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..1393006752c6ccb7944e097a78f45b8b57c79a7a
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));
@@ -44,8 +45,32 @@
         </div>
       </header>
 
-      <div className="min-h-0 flex-1">
-        <Suspense
+      <div className="min-h-0 flex-1">
+        <MapErrorBoundary
+          resetKey={selectedProvinceId}
+          fallback={
+            <div
+              role="alert"
+              className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
+            >
+              <div className="max-w-sm space-y-4">
+                <p className="text-sm font-semibold leading-6 text-white/85">
+                  {lang === "zh"
+                    ? "3D 视图加载失败，点击重置返回二维地图。"
+                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
+                </p>
+                <button
+                  type="button"
+                  onClick={reset}
+                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
+                >
+                  {lang === "zh" ? "重置" : "Reset"}
+                </button>
+              </div>
+            </div>
+          }
+        >
+        <Suspense
           fallback={
             <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
               {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
@@ -53,8 +78,9 @@
           }
         >
           <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
-        </Suspense>
-      </div>
+        </Suspense>
+        </MapErrorBoundary>
+      </div>
     </section>
   );
 }

codex
代码结构读回没发现逻辑问题；终端把 UTF-8 中文显示成了 mojibake，但补丁写入的是 UTF-8。现在在 `v2` 下跑 `npx tsc --noEmit`。
  ✓ Inspect v2 map overlay and atlas reset hook
  ✓ Add MapErrorBoundary and wrap lazy 3D Suspense
  → Run typecheck and production build
diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..1393006752c6ccb7944e097a78f45b8b57c79a7a
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));
@@ -44,8 +45,32 @@
         </div>
       </header>
 
-      <div className="min-h-0 flex-1">
-        <Suspense
+      <div className="min-h-0 flex-1">
+        <MapErrorBoundary
+          resetKey={selectedProvinceId}
+          fallback={
+            <div
+              role="alert"
+              className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
+            >
+              <div className="max-w-sm space-y-4">
+                <p className="text-sm font-semibold leading-6 text-white/85">
+                  {lang === "zh"
+                    ? "3D 视图加载失败，点击重置返回二维地图。"
+                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
+                </p>
+                <button
+                  type="button"
+                  onClick={reset}
+                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
+                >
+                  {lang === "zh" ? "重置" : "Reset"}
+                </button>
+              </div>
+            </div>
+          }
+        >
+        <Suspense
           fallback={
             <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
               {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
@@ -53,8 +78,9 @@
           }
         >
           <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
-        </Suspense>
-      </div>
+        </Suspense>
+        </MapErrorBoundary>
+      </div>
     </section>
   );
 }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
 succeeded in 1442ms:
diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..1393006752c6ccb7944e097a78f45b8b57c79a7a
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));
@@ -44,8 +45,32 @@
         </div>
       </header>
 
-      <div className="min-h-0 flex-1">
-        <Suspense
+      <div className="min-h-0 flex-1">
+        <MapErrorBoundary
+          resetKey={selectedProvinceId}
+          fallback={
+            <div
+              role="alert"
+              className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
+            >
+              <div className="max-w-sm space-y-4">
+                <p className="text-sm font-semibold leading-6 text-white/85">
+                  {lang === "zh"
+                    ? "3D 视图加载失败，点击重置返回二维地图。"
+                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
+                </p>
+                <button
+                  type="button"
+                  onClick={reset}
+                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
+                >
+                  {lang === "zh" ? "重置" : "Reset"}
+                </button>
+              </div>
+            </div>
+          }
+        >
+        <Suspense
           fallback={
             <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
               {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
@@ -53,8 +78,9 @@
           }
         >
           <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
-        </Suspense>
-      </div>
+        </Suspense>
+        </MapErrorBoundary>
+      </div>
     </section>
   );
 }

codex
`tsc --noEmit` 已经 0 error。继续跑生产构建，确认 lazy chunk 和 React Router build 都能过。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 8671ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1504 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                     6.03 kB │ gzip:     0.93 kB
build/client/assets/Map3D-B9DDZdqH.css              24.01 kB │ gzip:     5.37 kB
build/client/assets/root-BLVzDRpZ.css               42.18 kB │ gzip:     7.95 kB
build/client/assets/language-D_sidw9C.js             0.26 kB │ gzip:     0.21 kB
build/client/assets/clsx-H-aRJLpe.js                 0.36 kB │ gzip:     0.23 kB
build/client/assets/cityRoutes-woNkNDLp.js           0.91 kB │ gzip:     0.50 kB
build/client/assets/chunk-BA_0og6f.js                0.95 kB │ gzip:     0.56 kB
build/client/assets/provinceColors-Cv7IoNn8.js       1.84 kB │ gzip:     0.95 kB
build/client/assets/HomePage-BPm7jXH4.js             5.10 kB │ gzip:     2.34 kB
build/client/assets/SharePage-SOKeWOZv.js            7.48 kB │ gzip:     2.76 kB
build/client/assets/phase2-preview-DcPyXPqD.js       7.59 kB │ gzip:     4.48 kB
build/client/assets/AskPage-D4TBpFC4.js              7.62 kB │ gzip:     2.92 kB
build/client/assets/Map3D-F4jhmUWP.js                8.95 kB │ gzip:     4.21 kB
build/client/assets/root-v3YAgW2L.js                 9.47 kB │ gzip:     4.57 kB
build/client/assets/GuidePage-CZq-6qwa.js           10.80 kB │ gzip:     5.11 kB
build/client/assets/MapPage-TwCer4Oy.js             12.76 kB │ gzip:     4.64 kB
build/client/assets/practical-other-Bpl292H6.js     22.32 kB │ gzip:    10.76 kB
build/client/assets/atlas-B_AAPFrX.js               23.18 kB │ gzip:     9.54 kB
build/client/assets/SourcesPage-9HAp8EoC.js         32.19 kB │ gzip:     8.46 kB
build/client/assets/transport-DZFQFqdz.js           34.86 kB │ gzip:    15.24 kB
build/client/assets/SourcesNote-Dc56Qloe.js         39.01 kB │ gzip:    14.91 kB
build/client/assets/CityPage-DjIxpOcJ.js            52.17 kB │ gzip:    19.45 kB
build/client/assets/jsx-runtime-CnbWJCR4.js        127.16 kB │ gzip:    41.93 kB
build/client/assets/entry.client-CQ10Nt2o.js       186.53 kB │ gzip:    58.89 kB
build/client/assets/Cesium-CsldJg6P.js           4,724.63 kB │ gzip: 1,304.40 kB

[32m✓ built in 4.75s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 67 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\server-build-BLVzDRpZ.css[22m
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
build/server/assets/server-build-BLVzDRpZ.css   42.18 kB │ gzip:  7.95 kB
build/server/assets/Map3D-BaGBNPwJ.js           15.47 kB │ gzip:  5.32 kB
build/server/assets/cityRoutes-BO_Rh2Z3.js      31.31 kB │ gzip: 10.67 kB
build/server/index.js                          311.72 kB │ gzip: 97.65 kB

[32m✓ built in 726ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:virtual-modules (37%)
  - react-router:dot-server (36%)
  - react-router:inject-hmr-runtime (17%)
  - react-router:hmr-runtime (5%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..1393006752c6ccb7944e097a78f45b8b57c79a7a
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));
@@ -44,8 +45,32 @@
         </div>
       </header>
 
-      <div className="min-h-0 flex-1">
-        <Suspense
+      <div className="min-h-0 flex-1">
+        <MapErrorBoundary
+          resetKey={selectedProvinceId}
+          fallback={
+            <div
+              role="alert"
+              className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
+            >
+              <div className="max-w-sm space-y-4">
+                <p className="text-sm font-semibold leading-6 text-white/85">
+                  {lang === "zh"
+                    ? "3D 视图加载失败，点击重置返回二维地图。"
+                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
+                </p>
+                <button
+                  type="button"
+                  onClick={reset}
+                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
+                >
+                  {lang === "zh" ? "重置" : "Reset"}
+                </button>
+              </div>
+            </div>
+          }
+        >
+        <Suspense
           fallback={
             <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
               {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
@@ -53,8 +78,9 @@
           }
         >
           <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
-        </Suspense>
-      </div>
+        </Suspense>
+        </MapErrorBoundary>
+      </div>
     </section>
   );
 }

codex
生产构建也通过了，只有现有的大 chunk/插件耗时 warning，没有 error。最后我看一下 diff，确认报告范围准确。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git diff -- v2/src/components/common/MapErrorBoundary.tsx v2/src/components/map/Province3DOverlay.tsx' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short -- v2/src/components/common/MapErrorBoundary.tsx v2/src/components/map/Province3DOverlay.tsx' in c:\Users\h\Documents\New project 2
 succeeded in 482ms:
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe..1393006 100644
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,4 +1,5 @@
 import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
 import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
@@ -45,6 +46,30 @@ export default function Province3DOverlay() {
       </header>
 
       <div className="min-h-0 flex-1">
+        <MapErrorBoundary
+          resetKey={selectedProvinceId}
+          fallback={
+            <div
+              role="alert"
+              className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
+            >
+              <div className="max-w-sm space-y-4">
+                <p className="text-sm font-semibold leading-6 text-white/85">
+                  {lang === "zh"
+                    ? "3D 视图加载失败，点击重置返回二维地图。"
+                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
+                </p>
+                <button
+                  type="button"
+                  onClick={reset}
+                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
+                >
+                  {lang === "zh" ? "重置" : "Reset"}
+                </button>
+              </div>
+            </div>
+          }
+        >
         <Suspense
           fallback={
             <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
@@ -54,6 +79,7 @@ export default function Province3DOverlay() {
         >
           <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
         </Suspense>
+        </MapErrorBoundary>
       </div>
     </section>
   );
warning: in the working copy of 'v2/src/components/map/Province3DOverlay.tsx', LF will be replaced by CRLF the next time Git touches it

 succeeded in 481ms:
 M v2/src/components/map/Province3DOverlay.tsx
?? v2/src/components/common/MapErrorBoundary.tsx

diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..1393006752c6ccb7944e097a78f45b8b57c79a7a
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));
@@ -44,8 +45,32 @@
         </div>
       </header>
 
-      <div className="min-h-0 flex-1">
-        <Suspense
+      <div className="min-h-0 flex-1">
+        <MapErrorBoundary
+          resetKey={selectedProvinceId}
+          fallback={
+            <div
+              role="alert"
+              className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
+            >
+              <div className="max-w-sm space-y-4">
+                <p className="text-sm font-semibold leading-6 text-white/85">
+                  {lang === "zh"
+                    ? "3D 视图加载失败，点击重置返回二维地图。"
+                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
+                </p>
+                <button
+                  type="button"
+                  onClick={reset}
+                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
+                >
+                  {lang === "zh" ? "重置" : "Reset"}
+                </button>
+              </div>
+            </div>
+          }
+        >
+        <Suspense
           fallback={
             <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
               {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
@@ -53,8 +78,9 @@
           }
         >
           <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
-        </Suspense>
-      </div>
+        </Suspense>
+        </MapErrorBoundary>
+      </div>
     </section>
   );
 }

2026-05-12T03:08:01.581811Z ERROR codex_core::tools::router: error=apply_patch verification failed: Failed to find expected lines in c:\Users\h\Documents\New project 2\v2\src\components\map\Province3DOverlay.tsx:
        <Suspense
          fallback={
            <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
              {lang === "zh" ? "姝ｅ湪鍔犺浇澶╁湴鍥?.." : "Loading Tianditu..."}
            </div>
          }
        >
          <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
        </Suspense>
diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..1393006752c6ccb7944e097a78f45b8b57c79a7a
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));
@@ -44,8 +45,32 @@
         </div>
       </header>
 
-      <div className="min-h-0 flex-1">
-        <Suspense
+      <div className="min-h-0 flex-1">
+        <MapErrorBoundary
+          resetKey={selectedProvinceId}
+          fallback={
+            <div
+              role="alert"
+              className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
+            >
+              <div className="max-w-sm space-y-4">
+                <p className="text-sm font-semibold leading-6 text-white/85">
+                  {lang === "zh"
+                    ? "3D 视图加载失败，点击重置返回二维地图。"
+                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
+                </p>
+                <button
+                  type="button"
+                  onClick={reset}
+                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
+                >
+                  {lang === "zh" ? "重置" : "Reset"}
+                </button>
+              </div>
+            </div>
+          }
+        >
+        <Suspense
           fallback={
             <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
               {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
@@ -53,8 +78,9 @@
           }
         >
           <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
-        </Suspense>
-      </div>
+        </Suspense>
+        </MapErrorBoundary>
+      </div>
     </section>
   );
 }

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\map\Province3DOverlay.tsx
diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..e15995c3d876e19e896f84d3696f8f636cb5174d
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));
@@ -44,17 +45,42 @@
         </div>
       </header>
 
-      <div className="min-h-0 flex-1">
-        <Suspense
-          fallback={
-            <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
+      <div className="min-h-0 flex-1">
+        <MapErrorBoundary
+          resetKey={selectedProvinceId}
+          fallback={
+            <div
+              role="alert"
+              className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
+            >
+              <div className="max-w-sm space-y-4">
+                <p className="text-sm font-semibold leading-6 text-white/85">
+                  {lang === "zh"
+                    ? "3D 视图加载失败，点击重置返回二维地图。"
+                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
+                </p>
+                <button
+                  type="button"
+                  onClick={reset}
+                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
+                >
+                  {lang === "zh" ? "重置" : "Reset"}
+                </button>
+              </div>
+            </div>
+          }
+        >
+          <Suspense
+            fallback={
+              <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
               {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
-            </div>
-          }
-        >
-          <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
-        </Suspense>
-      </div>
+              </div>
+            }
+          >
+            <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
+          </Suspense>
+        </MapErrorBoundary>
+      </div>
     </section>
   );
 }

diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..e15995c3d876e19e896f84d3696f8f636cb5174d
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));
@@ -44,17 +45,42 @@
         </div>
       </header>
 
-      <div className="min-h-0 flex-1">
-        <Suspense
-          fallback={
-            <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
+      <div className="min-h-0 flex-1">
+        <MapErrorBoundary
+          resetKey={selectedProvinceId}
+          fallback={
+            <div
+              role="alert"
+              className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
+            >
+              <div className="max-w-sm space-y-4">
+                <p className="text-sm font-semibold leading-6 text-white/85">
+                  {lang === "zh"
+                    ? "3D 视图加载失败，点击重置返回二维地图。"
+                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
+                </p>
+                <button
+                  type="button"
+                  onClick={reset}
+                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
+                >
+                  {lang === "zh" ? "重置" : "Reset"}
+                </button>
+              </div>
+            </div>
+          }
+        >
+          <Suspense
+            fallback={
+              <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
               {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
-            </div>
-          }
-        >
-          <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
-        </Suspense>
-      </div>
+              </div>
+            }
+          >
+            <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
+          </Suspense>
+        </MapErrorBoundary>
+      </div>
     </section>
   );
 }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=45; Get-Content -Path '"'v2/src/components/map/Province3DOverlay.tsx' | Select-Object -Skip 44 | ForEach-Object { '{0,4}: {1}' -f "'$i, $_; $i++ }' in c:\Users\h\Documents\New project 2
 succeeded in 617ms:
  45:         </div>
  46:       </header>
  47: 
  48:       <div className="min-h-0 flex-1">
  49:         <MapErrorBoundary
  50:           resetKey={selectedProvinceId}
  51:           fallback={
  52:             <div
  53:               role="alert"
  54:               className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
  55:             >
  56:               <div className="max-w-sm space-y-4">
  57:                 <p className="text-sm font-semibold leading-6 text-white/85">
  58:                   {lang === "zh"
  59:                     ? "3D 瑙嗗浘鍔犺浇澶辫触锛岀偣鍑婚噸缃繑鍥炰簩缁村湴鍥俱€?
  60:                     : "The 3D view couldn't load. Click reset to go back to the 2D map."}
  61:                 </p>
  62:                 <button
  63:                   type="button"
  64:                   onClick={reset}
  65:                   className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
  66:                 >
  67:                   {lang === "zh" ? "閲嶇疆" : "Reset"}
  68:                 </button>
  69:               </div>
  70:             </div>
  71:           }
  72:         >
  73:           <Suspense
  74:             fallback={
  75:               <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
  76:               {lang === "zh" ? "姝ｅ湪鍔犺浇澶╁湴鍥?.." : "Loading Tianditu..."}
  77:               </div>
  78:             }
  79:           >
  80:             <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
  81:           </Suspense>
  82:         </MapErrorBoundary>
  83:       </div>
  84:     </section>
  85:   );
  86: }

diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..e15995c3d876e19e896f84d3696f8f636cb5174d
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));
@@ -44,17 +45,42 @@
         </div>
       </header>
 
-      <div className="min-h-0 flex-1">
-        <Suspense
-          fallback={
-            <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
+      <div className="min-h-0 flex-1">
+        <MapErrorBoundary
+          resetKey={selectedProvinceId}
+          fallback={
+            <div
+              role="alert"
+              className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
+            >
+              <div className="max-w-sm space-y-4">
+                <p className="text-sm font-semibold leading-6 text-white/85">
+                  {lang === "zh"
+                    ? "3D 视图加载失败，点击重置返回二维地图。"
+                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
+                </p>
+                <button
+                  type="button"
+                  onClick={reset}
+                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
+                >
+                  {lang === "zh" ? "重置" : "Reset"}
+                </button>
+              </div>
+            </div>
+          }
+        >
+          <Suspense
+            fallback={
+              <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
               {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
-            </div>
-          }
-        >
-          <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
-        </Suspense>
-      </div>
+              </div>
+            }
+          >
+            <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
+          </Suspense>
+        </MapErrorBoundary>
+      </div>
     </section>
   );
 }

codex
缩进做了一个小整理，实际逻辑没变。因为文件在 build 后又被碰过，我会重新跑一次 `tsc` 和 `build`，确保最终状态就是 0 error。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
 succeeded in 1372ms:
diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..e15995c3d876e19e896f84d3696f8f636cb5174d
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));
@@ -44,17 +45,42 @@
         </div>
       </header>
 
-      <div className="min-h-0 flex-1">
-        <Suspense
-          fallback={
-            <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
+      <div className="min-h-0 flex-1">
+        <MapErrorBoundary
+          resetKey={selectedProvinceId}
+          fallback={
+            <div
+              role="alert"
+              className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
+            >
+              <div className="max-w-sm space-y-4">
+                <p className="text-sm font-semibold leading-6 text-white/85">
+                  {lang === "zh"
+                    ? "3D 视图加载失败，点击重置返回二维地图。"
+                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
+                </p>
+                <button
+                  type="button"
+                  onClick={reset}
+                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
+                >
+                  {lang === "zh" ? "重置" : "Reset"}
+                </button>
+              </div>
+            </div>
+          }
+        >
+          <Suspense
+            fallback={
+              <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
               {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
-            </div>
-          }
-        >
-          <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
-        </Suspense>
-      </div>
+              </div>
+            }
+          >
+            <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
+          </Suspense>
+        </MapErrorBoundary>
+      </div>
     </section>
   );
 }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 7547ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1504 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                     6.03 kB │ gzip:     0.93 kB
build/client/assets/Map3D-B9DDZdqH.css              24.01 kB │ gzip:     5.37 kB
build/client/assets/root-BLVzDRpZ.css               42.18 kB │ gzip:     7.95 kB
build/client/assets/language-D_sidw9C.js             0.26 kB │ gzip:     0.21 kB
build/client/assets/clsx-H-aRJLpe.js                 0.36 kB │ gzip:     0.23 kB
build/client/assets/cityRoutes-woNkNDLp.js           0.91 kB │ gzip:     0.50 kB
build/client/assets/chunk-BA_0og6f.js                0.95 kB │ gzip:     0.56 kB
build/client/assets/provinceColors-Cv7IoNn8.js       1.84 kB │ gzip:     0.95 kB
build/client/assets/HomePage-BPm7jXH4.js             5.10 kB │ gzip:     2.34 kB
build/client/assets/SharePage-SOKeWOZv.js            7.48 kB │ gzip:     2.76 kB
build/client/assets/phase2-preview-DcPyXPqD.js       7.59 kB │ gzip:     4.48 kB
build/client/assets/AskPage-D4TBpFC4.js              7.62 kB │ gzip:     2.92 kB
build/client/assets/Map3D-F4jhmUWP.js                8.95 kB │ gzip:     4.21 kB
build/client/assets/root-v3YAgW2L.js                 9.47 kB │ gzip:     4.57 kB
build/client/assets/GuidePage-CZq-6qwa.js           10.80 kB │ gzip:     5.11 kB
build/client/assets/MapPage-TwCer4Oy.js             12.76 kB │ gzip:     4.64 kB
build/client/assets/practical-other-Bpl292H6.js     22.32 kB │ gzip:    10.76 kB
build/client/assets/atlas-B_AAPFrX.js               23.18 kB │ gzip:     9.54 kB
build/client/assets/SourcesPage-9HAp8EoC.js         32.19 kB │ gzip:     8.46 kB
build/client/assets/transport-DZFQFqdz.js           34.86 kB │ gzip:    15.24 kB
build/client/assets/SourcesNote-Dc56Qloe.js         39.01 kB │ gzip:    14.91 kB
build/client/assets/CityPage-DjIxpOcJ.js            52.17 kB │ gzip:    19.45 kB
build/client/assets/jsx-runtime-CnbWJCR4.js        127.16 kB │ gzip:    41.93 kB
build/client/assets/entry.client-CQ10Nt2o.js       186.53 kB │ gzip:    58.89 kB
build/client/assets/Cesium-CsldJg6P.js           4,724.63 kB │ gzip: 1,304.40 kB

[32m✓ built in 4.23s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 67 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m
[2mbuild\server\assets\server-build-BLVzDRpZ.css[22m

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
build/server/assets/server-build-BLVzDRpZ.css   42.18 kB │ gzip:  7.95 kB
build/server/assets/Map3D-BaGBNPwJ.js           15.47 kB │ gzip:  5.32 kB
build/server/assets/cityRoutes-BO_Rh2Z3.js      31.31 kB │ gzip: 10.67 kB
build/server/index.js                          311.72 kB │ gzip: 97.65 kB

[32m✓ built in 553ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:virtual-modules (39%)
  - react-router:dot-server (36%)
  - react-router:inject-hmr-runtime (16%)
  - react-router:hmr-runtime (4%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..e15995c3d876e19e896f84d3696f8f636cb5174d
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));
@@ -44,17 +45,42 @@
         </div>
       </header>
 
-      <div className="min-h-0 flex-1">
-        <Suspense
-          fallback={
-            <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
+      <div className="min-h-0 flex-1">
+        <MapErrorBoundary
+          resetKey={selectedProvinceId}
+          fallback={
+            <div
+              role="alert"
+              className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
+            >
+              <div className="max-w-sm space-y-4">
+                <p className="text-sm font-semibold leading-6 text-white/85">
+                  {lang === "zh"
+                    ? "3D 视图加载失败，点击重置返回二维地图。"
+                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
+                </p>
+                <button
+                  type="button"
+                  onClick={reset}
+                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
+                >
+                  {lang === "zh" ? "重置" : "Reset"}
+                </button>
+              </div>
+            </div>
+          }
+        >
+          <Suspense
+            fallback={
+              <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
               {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
-            </div>
-          }
-        >
-          <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
-        </Suspense>
-      </div>
+              </div>
+            }
+          >
+            <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
+          </Suspense>
+        </MapErrorBoundary>
+      </div>
     </section>
   );
 }

  ✓ Inspect v2 map overlay and atlas reset hook
  ✓ Add MapErrorBoundary and wrap lazy 3D Suspense
  ✓ Run typecheck and production build
diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..e15995c3d876e19e896f84d3696f8f636cb5174d
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));
@@ -44,17 +45,42 @@
         </div>
       </header>
 
-      <div className="min-h-0 flex-1">
-        <Suspense
-          fallback={
-            <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
+      <div className="min-h-0 flex-1">
+        <MapErrorBoundary
+          resetKey={selectedProvinceId}
+          fallback={
+            <div
+              role="alert"
+              className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
+            >
+              <div className="max-w-sm space-y-4">
+                <p className="text-sm font-semibold leading-6 text-white/85">
+                  {lang === "zh"
+                    ? "3D 视图加载失败，点击重置返回二维地图。"
+                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
+                </p>
+                <button
+                  type="button"
+                  onClick={reset}
+                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
+                >
+                  {lang === "zh" ? "重置" : "Reset"}
+                </button>
+              </div>
+            </div>
+          }
+        >
+          <Suspense
+            fallback={
+              <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
               {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
-            </div>
-          }
-        >
-          <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
-        </Suspense>
-      </div>
+              </div>
+            }
+          >
+            <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
+          </Suspense>
+        </MapErrorBoundary>
+      </div>
     </section>
   );
 }

codex
已完成。

新建 [MapErrorBoundary.tsx](</c:/Users/h/Documents/New project 2/v2/src/components/common/MapErrorBoundary.tsx>)：class ErrorBoundary，捕获 3D lazy chunk/render 错误，并用 `console.error` 记录 error + component stack。

修改 [Province3DOverlay.tsx](</c:/Users/h/Documents/New project 2/v2/src/components/map/Province3DOverlay.tsx>)：用 `MapErrorBoundary` 包住原来的 `Suspense`。失败时显示中英文降级文案和 `Reset/重置` 按钮，按钮调用 `useAtlas().reset()` 返回 2D 地图。

验证：`npx tsc --noEmit` 0 error；`npm run build` 0 error。构建仍有 Cesium 大 chunk warning，不是 error。
diff --git a/v2/src/components/common/MapErrorBoundary.tsx b/v2/src/components/common/MapErrorBoundary.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..95bfafe13084a706f345bc80b3674eb03d28d0a3
--- /dev/null
+++ b/v2/src/components/common/MapErrorBoundary.tsx
@@ -0,0 +1,39 @@
+import { Component, type ErrorInfo, type ReactNode } from "react";
+
+type MapErrorBoundaryProps = {
+  children: ReactNode;
+  fallback: ReactNode;
+  resetKey?: string | null;
+};
+
+type MapErrorBoundaryState = {
+  hasError: boolean;
+};
+
+export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
+  state: MapErrorBoundaryState = {
+    hasError: false
+  };
+
+  static getDerivedStateFromError(): MapErrorBoundaryState {
+    return { hasError: true };
+  }
+
+  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
+    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
+      this.setState({ hasError: false });
+    }
+  }
+
+  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
+    console.error("3D map overlay failed to load", error, errorInfo);
+  }
+
+  render() {
+    if (this.state.hasError) {
+      return this.props.fallback;
+    }
+
+    return this.props.children;
+  }
+}
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 12efbbe984c6e19ff06e832a15d67e090084a091..e15995c3d876e19e896f84d3696f8f636cb5174d
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -1,5 +1,6 @@
-import { lazy, Suspense } from "react";
-import { useAtlas } from "../../store/atlas";
+import { lazy, Suspense } from "react";
+import MapErrorBoundary from "../common/MapErrorBoundary";
+import { useAtlas } from "../../store/atlas";
 import { useLang } from "../../store/language";
 
 const Map3D = lazy(() => import("./Map3D"));
@@ -44,17 +45,42 @@
         </div>
       </header>
 
-      <div className="min-h-0 flex-1">
-        <Suspense
-          fallback={
-            <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
+      <div className="min-h-0 flex-1">
+        <MapErrorBoundary
+          resetKey={selectedProvinceId}
+          fallback={
+            <div
+              role="alert"
+              className="grid h-full min-h-[360px] place-items-center bg-[#071512] px-6 text-center text-white"
+            >
+              <div className="max-w-sm space-y-4">
+                <p className="text-sm font-semibold leading-6 text-white/85">
+                  {lang === "zh"
+                    ? "3D 视图加载失败，点击重置返回二维地图。"
+                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
+                </p>
+                <button
+                  type="button"
+                  onClick={reset}
+                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
+                >
+                  {lang === "zh" ? "重置" : "Reset"}
+                </button>
+              </div>
+            </div>
+          }
+        >
+          <Suspense
+            fallback={
+              <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
               {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
-            </div>
-          }
-        >
-          <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
-        </Suspense>
-      </div>
+              </div>
+            }
+          >
+            <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
+          </Suspense>
+        </MapErrorBoundary>
+      </div>
     </section>
   );
 }

tokens used
97,879

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
