# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-12T02:40:19.303Z

## Original task

我刚拉取了一个大前端重构 commit（6af89d6 feat: add landmark map home flow），把单页堆叠拆成多页架构。现在的结构：
- / (HomePage.tsx): cover-page，2x2 大城市照片卡 + 地标地图入口大卡（含 MapPreview）+ 3 个 guide 入口卡
- /map (MapPage.tsx): 独立 3D 地图页（包 HeroMap）
- /guide/:topic (GuidePage.tsx): entry / payments / notes 三个主题
- /city/:cityId (CityPage.tsx): 4 城详情，左 sticky CityNav，中间内容 5 pillars，右 sticky CityImagePanel
- /share /ask /sources：Phase 2 占位

请扫一遍 c:/Users/h/Documents/New project 2/v2/src/ 整套代码，重点 audit：
(1) 功能完整性 / user journey：从首页能否一路点到城市签证/支付/交通/餐饮/紧急的完整信息？是否有 dead route / 死链 / undefined import？
(2) 前端交互系统：HomePage → MapPage → 省份点击 → CityPage 是否流畅？返回路径清楚吗？3D 地图 lazy 加载、loading state、错误降级有没有问题？语言切换是否在所有页面工作？
(3) 性能：MapPreview / Map3D 拆分是否合理？首页 LCP 重 import？bundle 大小哪里需要 code-split？
(4) 可访问性：照片卡 alt / aria / keyboard navigation 是否正确？语言切换、SiteHeader 菜单是否有 aria-label？
(5) 死代码 / orphan：除了 HeroIntro / CityPicker / VisaChecker compact 我刚清掉的，还有别的孤儿组件、未引用 export、unused props 吗？
(6) 一致性：新的 cover-page 风格和原 city page 详情风格是否割裂？字号/间距/色板是否统一？

返回按优先级排序的问题清单（critical / important / nice-to-have），每条带 file:line 引用 + 一句修复建议。控制在 800 词以内。

## Final prompt

我刚拉取了一个大前端重构 commit（6af89d6 feat: add landmark map home flow），把单页堆叠拆成多页架构。现在的结构：
- / (HomePage.tsx): cover-page，2x2 大城市照片卡 + 地标地图入口大卡（含 MapPreview）+ 3 个 guide 入口卡
- /map (MapPage.tsx): 独立 3D 地图页（包 HeroMap）
- /guide/:topic (GuidePage.tsx): entry / payments / notes 三个主题
- /city/:cityId (CityPage.tsx): 4 城详情，左 sticky CityNav，中间内容 5 pillars，右 sticky CityImagePanel
- /share /ask /sources：Phase 2 占位

请扫一遍 c:/Users/h/Documents/New project 2/v2/src/ 整套代码，重点 audit：
(1) 功能完整性 / user journey：从首页能否一路点到城市签证/支付/交通/餐饮/紧急的完整信息？是否有 dead route / 死链 / undefined import？
(2) 前端交互系统：HomePage → MapPage → 省份点击 → CityPage 是否流畅？返回路径清楚吗？3D 地图 lazy 加载、loading state、错误降级有没有问题？语言切换是否在所有页面工作？
(3) 性能：MapPreview / Map3D 拆分是否合理？首页 LCP 重 import？bundle 大小哪里需要 code-split？
(4) 可访问性：照片卡 alt / aria / keyboard navigation 是否正确？语言切换、SiteHeader 菜单是否有 aria-label？
(5) 死代码 / orphan：除了 HeroIntro / CityPicker / VisaChecker compact 我刚清掉的，还有别的孤儿组件、未引用 export、unused props 吗？
(6) 一致性：新的 cover-page 风格和原 city page 详情风格是否割裂？字号/间距/色板是否统一？

返回按优先级排序的问题清单（critical / important / nice-to-have），每条带 file:line 引用 + 一句修复建议。控制在 800 词以内。

## Raw output

```text
SUCCESS: The process with PID 605072 (child process of PID 578436) has been terminated.
SUCCESS: The process with PID 578436 (child process of PID 606368) has been terminated.
SUCCESS: The process with PID 606368 (child process of PID 605432) has been terminated.
SUCCESS: The process with PID 605432 (child process of PID 501684) has been terminated.
SUCCESS: The process with PID 112528 (child process of PID 506736) has been terminated.
SUCCESS: The process with PID 506736 (child process of PID 604368) has been terminated.
SUCCESS: The process with PID 604368 (child process of PID 523288) has been terminated.
SUCCESS: The process with PID 523288 (child process of PID 501684) has been terminated.
扫完了。`npm run lint` 通过；`npm run build` 和 `npx tsc` 当前被缺失依赖挡住。

**Critical**
- `v2/vite.config.ts:4`, `v2/src/components/map/Map3D.tsx:2,307`：当前 `node_modules` 缺 `vite-plugin-static-copy` 和 `cesium`，build/typecheck 直接失败。修复：先 `npm ci`，并把 build 作为合并门禁。
- `v2/react-router.config.ts:7-16`：prerender 只包含首页、Phase2、sources、city，漏了首页实际链接的 `/map`、`/guide/entry`、`/guide/payments`、`/guide/notes`；静态发布/刷新会有死路由风险。修复：把这些路由加入 prerender。
- `v2/src/components/map/ProvinceShapeLayer.tsx:130`, `v2/src/components/map/ProvinceInfoCard.tsx:17-20`, `v2/src/components/map/Map3D.tsx:251-259`：Map 选省后只开 3D，3D 里城市/景点只是 label，不能进入 `/city/:cityId`；InfoCard 仍是旧的 `selectPlace + scrollIntoView("#atlas")`，而新页面没有 `#atlas`。修复：给 2D/3D 城市标注加 `Link/navigate('/city/beijing')` 这类真实路由，并做 atlas id 到新 CityId 的映射。
- `v2/src/data/map-sources.ts:45`, `v2/src/store/atlas.ts:50-57`：`guangdong` hit area 存在，但 `atlasData` 没有广东记录，`findProvince` 会 fallback 成 `cities: []`，所以地图无法承接广州/深圳。修复：补广东省数据或单独维护地图省份到四城的关系。

**Important**
- `v2/src/pages/CityPage.tsx:50-53` + `PaymentsChecklist.tsx:23`, `TransportGuide.tsx:24`, `FoodGuide.tsx:21`, `EmergencyBriefing.tsx:30`：city page 产生重复 DOM id（payments/transport/food/emergency），会影响锚点、IntersectionObserver 和可访问性。修复：只保留外层 wrapper id，子组件按 `cityScoped` 不输出 id。
- `v2/src/root.tsx:33-37`, `v2/src/pages/MapPage.tsx:12`：`AtlasProvider` 跨路由持有状态，离开 `/map` 不 reset；用户回到地图可能直接看到上次 3D overlay。修复：MapPage unmount 时 reset，或把 AtlasProvider 下沉到 MapPage。
- `v2/src/components/map/Province3DOverlay.tsx:48-56`：`Suspense` 只有 loading fallback，没有 ErrorBoundary；lazy chunk/Cesium 加载失败会冒泡。修复：包一层 map error boundary，失败时回到 2D/显示可操作 fallback。
- `v2/src/hooks/useProvinceShapes.ts:12-14`, `v2/src/components/map/MapPreview.tsx:10-11`：省界 JSON 失败只 console.warn，首页预览/地图会空白。修复：给 MapPreview/HeroMap 显示文本或静态图片 fallback。
- `v2/src/components/layout/LanguageSwitch.tsx:13-25`：语言切换缺 `aria-label`、`aria-pressed`/当前态语义。修复：外层加 label，每个 button 标记当前语言。
- `v2/src/components/map/ProvinceShapeLayer.tsx:41,55`：省份 SVG 可键盘聚焦但 `outline-none` 且无 focus-visible 样式。修复：增加可见 focus ring/stroke。

**Nice-to-have**
- `v2/src/routes.ts:11`, `v2/src/pages/GuidePage.tsx:38`：未知 route 回首页，未知 guide topic 静默变 notes。修复：显式 NotFound 或 redirect。
- 孤儿组件/旧系统残留：`AtlasSection.tsx:7`, `ProvinceRail.tsx:7`, `CityList.tsx:8`, `CityProfile.tsx:7`, `PlaceSearch.tsx:7`, `CityHero.tsx:8`, `PageSources.tsx:6`, `EarthIntro.tsx:27`, `MuseumFlow.tsx:10`, `HistoryVideo.tsx:3`, `components/sections/SourcesNote.tsx:5`。修复：删除或接回新架构。
- `v2/src/pages/HomePage.tsx:35` 与 `SourcesNote.tsx:11,18` / `SourcesPage.tsx:24-25` 口径冲突：首页说全是官方，实际包含社区来源。修复：改成“政策/地址官方，实操坑点来自社区并标注来源”。


OpenAI Codex v0.128.0 (research preview)
--------
workdir: c:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1a04-1ccb-78b0-9a41-20383c0e49e2
--------
user
我刚拉取了一个大前端重构 commit（6af89d6 feat: add landmark map home flow），把单页堆叠拆成多页架构。现在的结构：
- / (HomePage.tsx): cover-page，2x2 大城市照片卡 + 地标地图入口大卡（含 MapPreview）+ 3 个 guide 入口卡
- /map (MapPage.tsx): 独立 3D 地图页（包 HeroMap）
- /guide/:topic (GuidePage.tsx): entry / payments / notes 三个主题
- /city/:cityId (CityPage.tsx): 4 城详情，左 sticky CityNav，中间内容 5 pillars，右 sticky CityImagePanel
- /share /ask /sources：Phase 2 占位

请扫一遍 c:/Users/h/Documents/New project 2/v2/src/ 整套代码，重点 audit：
(1) 功能完整性 / user journey：从首页能否一路点到城市签证/支付/交通/餐饮/紧急的完整信息？是否有 dead route / 死链 / undefined import？
(2) 前端交互系统：HomePage → MapPage → 省份点击 → CityPage 是否流畅？返回路径清楚吗？3D 地图 lazy 加载、loading state、错误降级有没有问题？语言切换是否在所有页面工作？
(3) 性能：MapPreview / Map3D 拆分是否合理？首页 LCP 重 import？bundle 大小哪里需要 code-split？
(4) 可访问性：照片卡 alt / aria / keyboard navigation 是否正确？语言切换、SiteHeader 菜单是否有 aria-label？
(5) 死代码 / orphan：除了 HeroIntro / CityPicker / VisaChecker compact 我刚清掉的，还有别的孤儿组件、未引用 export、unused props 吗？
(6) 一致性：新的 cover-page 风格和原 city page 详情风格是否割裂？字号/间距/色板是否统一？

返回按优先级排序的问题清单（critical / important / nice-to-have），每条带 file:line 引用 + 一句修复建议。控制在 800 词以内。
codex
我会按代码审查方式处理：先用 React 性能/结构最佳实践作为审查框架，再扫 `v2/src` 的路由、引用、懒加载、a11y 和孤儿代码。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw \"C:\\Users\\h\\.codex\\plugins\\cache\\openai-curated\\build-web-apps\\63976030\\skills\\react-best-practices\\SKILL.md\"" in c:\Users\h\Documents\New project 2
 succeeded in 654ms:
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
我先建立文件和依赖地图：路由入口、页面组件、地图组件、数据文件、语言资源和导出点是这次审查的主线。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg --files v2/src' in c:\Users\h\Documents\New project 2
 succeeded in 1160ms:
v2/src\main.tsx
v2/src\root.tsx
v2/src\App.tsx
v2/src\routes.ts
v2/src\styles\globals.css
v2/src\lib\format.ts
v2/src\lib\i18n.ts
v2/src\store\atlas.ts
v2/src\store\AtlasProvider.tsx
v2/src\store\language.ts
v2/src\store\LanguageProvider.tsx
v2/src\lib\search.ts
v2/src\lib\shapes.ts
v2/src\hooks\useProvinceShapes.ts
v2/src\hooks\useCityViews.ts
v2/src\data\city-attractions.ts
v2/src\data\atlas.ts
v2/src\data\city-tourism-portals.ts
v2/src\data\emergency.ts
v2/src\services\notes.ts
v2/src\data\phase2-preview.ts
v2/src\data\payments.ts
v2/src\data\map-sources.ts
v2/src\data\i18n.ts
v2/src\data\food.ts
v2/src\data\entry-policies.ts
v2/src\data\sources.ts
v2/src\data\practical-payments.ts
v2/src\data\practical-other.ts
v2/src\data\transport.ts
v2/src\data\top-questions.ts
v2/src\data\types.ts
v2/src\pages\HomePage.tsx
v2/src\pages\GuidePage.tsx
v2/src\pages\CityPage.tsx
v2/src\pages\AskPage.tsx
v2/src\pages\SharePage.tsx
v2/src\pages\MapPage.tsx
v2/src\pages\SourcesPage.tsx
v2/src\components\atlas\CityList.tsx
v2/src\components\atlas\AtlasSection.tsx
v2/src\components\atlas\CityProfile.tsx
v2/src\components\atlas\ProvinceRail.tsx
v2/src\components\city\CityHero.tsx
v2/src\components\city\CityImagePanel.tsx
v2/src\components\common\CityFurtherReading.tsx
v2/src\components\common\PageSources.tsx
v2/src\components\city\CityIntro.tsx
v2/src\components\city\CityNav.tsx
v2/src\components\city\CuisineDrawer.tsx
v2/src\components\common\PracticalBlock.tsx
v2/src\components\common\SourcesNote.tsx
v2/src\components\policy\TravelAlerts.tsx
v2/src\components\search\PlaceSearch.tsx
v2/src\components\sections\MuseumFlow.tsx
v2/src\components\sections\HistoryVideo.tsx
v2/src\components\sections\SourcesNote.tsx
v2/src\components\sections\TopQuestions.tsx
v2/src\components\pillar\FoodGuide.tsx
v2/src\components\pillar\EmergencyBriefing.tsx
v2/src\components\pillar\PaymentsChecklist.tsx
v2/src\components\pillar\PaymentsPractical.tsx
v2/src\components\pillar\TransportGuide.tsx
v2/src\components\pillar\VisaChecker.tsx
v2/src\components\map\EarthIntro.tsx
v2/src\components\map\HeroMap.tsx
v2/src\components\map\MapPreview.tsx
v2/src\components\map\Map3D.tsx
v2/src\components\map\provinceColors.ts
v2/src\components\map\Province3DOverlay.tsx
v2/src\components\map\ProvinceHitAreaLayer.tsx
v2/src\components\map\ProvinceInfoCard.tsx
v2/src\components\map\SpecialRegionMarkers.tsx
v2/src\components\map\ProvinceShapeLayer.tsx
v2/src\components\map\ProvinceLabelLayer.tsx
v2/src\components\layout\LanguageSwitch.tsx
v2/src\components\layout\SiteFooter.tsx
v2/src\components\layout\SiteHeader.tsx

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Raw v2/src/App.tsx' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Raw v2/src/routes.ts' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Raw v2/src/root.tsx' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Raw v2/src/main.tsx' in c:\Users\h\Documents\New project 2
 succeeded in 953ms:
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


 succeeded in 1053ms:
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


 succeeded in 1027ms:
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


 succeeded in 1058ms:
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Force v2' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Raw v2/package.json' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Force' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Raw v2/tsconfig.json' in c:\Users\h\Documents\New project 2
 succeeded in 1006ms:
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


 succeeded in 1013ms:
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}


 succeeded in 1055ms:


    目录: C:\Users\h\Documents\New project 2


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----         2026/5/10     22:45                .claude                                                              
d--h--         2026/5/12     10:29                .git                                                                 
d-----         2026/5/12     10:29                .omc                                                                 
d-----         2026/5/10     23:56                .playwright-mcp                                                      
d-----          2026/5/9     16:47                assets                                                               
d-----          2026/5/9     22:56                node_modules                                                         
d-----          2026/5/9     17:01                src                                                                  
d-----         2026/5/12     10:17                v2                                                                   
-a----         2026/5/10     22:52            499 .gitignore                                                           
-a----          2026/5/9     17:21          27818 app.js                                                               
-a----          2026/5/9     17:00          13022 index.html                                                           
-a----          2026/5/9     17:30          11678 map3d.js                                                             
-a----          2026/5/9     22:56           3170 package-lock.json                                                    
-a----          2026/5/9     22:56             62 package.json                                                         
-a----         2026/5/10      1:35          24842 PROJECT_PLAN.md                                                      
-a----          2026/5/9     17:21          41244 styles.css                                                           



 succeeded in 1086ms:


    目录: C:\Users\h\Documents\New project 2\v2


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----         2026/5/12     10:29                .omc                                                                 
d-----         2026/5/11      0:09                .react-router                                                        
d-----         2026/5/10     22:41                .vite-react-ssg-temp                                                 
d-----         2026/5/10     23:41                build                                                                
d-----         2026/5/10     22:42                dist                                                                 
d-----         2026/5/10     22:48                node_modules                                                         
d-----          2026/5/9     17:43                public                                                               
d-----         2026/5/11      0:08                research                                                             
d-----         2026/5/12     10:17                scripts                                                              
d-----         2026/5/12     10:17                src                                                                  
-a----         2026/5/12     10:17            158 .editorconfig                                                        
-a----         2026/5/12     10:17             41 .env.example                                                         
-a----          2026/5/9     17:35            253 .gitignore                                                           
-a----         2026/5/12     10:17            639 eslint.config.js                                                     
-a----          2026/5/9     17:41            592 index.html                                                           
-a----         2026/5/12     10:17         182228 package-lock.json                                                    
-a----         2026/5/12     10:17           1191 package.json                                                         
-a----         2026/5/10     22:49            331 react-router.config.ts                                               
-a----          2026/5/9     17:35           2425 README.md                                                            
-a----         2026/5/10     23:58           8245 STYLE_GUIDE.md                                                       
-a----          2026/5/9     17:35            617 tsconfig.app.json                                                    
-a----          2026/5/9     17:35            119 tsconfig.json                                                        
-a----         2026/5/10     22:50            617 tsconfig.node.json                                                   
-a----          2026/5/9     23:06              0 vite-dev.err.log                                                     
-a----          2026/5/9     23:13            335 vite-dev.out.log                                                     
-a----         2026/5/12     10:17            806 vite.config.ts                                                       



exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^import|export default|export function|const .* = lazy|React'"\\.lazy|lazy\\(\" v2/src" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"Link|NavLink|to=|href=|navigate\\(|useNavigate|useParams|aria-|alt=|button|role=|tabIndex|onKeyDown\" v2/src/pages v2/src/components" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "Map3D|MapPreview|HeroMap|Suspense|lazy|ErrorBoundary|throw|try|catch|fallback|loading|onProvince|province|cityId|topic" v2/src' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"useLanguage|language|setLanguage|t\\(\" v2/src/pages v2/src/components v2/src/store v2/src/lib" in c:\Users\h\Documents\New project 2
 succeeded in 904ms:
v2/src\main.tsx:1:import { StrictMode } from "react";
v2/src\main.tsx:2:import { createRoot } from "react-dom/client";
v2/src\main.tsx:3:import "./styles/globals.css";
v2/src\main.tsx:4:import App from "./App";
v2/src\App.tsx:1:import { BrowserRouter, Route, Routes } from "react-router";
v2/src\App.tsx:2:import LanguageProvider from "./store/LanguageProvider";
v2/src\App.tsx:3:import AtlasProvider from "./store/AtlasProvider";
v2/src\App.tsx:4:import SiteHeader from "./components/layout/SiteHeader";
v2/src\App.tsx:5:import SiteFooter from "./components/layout/SiteFooter";
v2/src\App.tsx:6:import HomePage from "./pages/HomePage";
v2/src\App.tsx:7:import CityPage from "./pages/CityPage";
v2/src\App.tsx:8:import GuidePage from "./pages/GuidePage";
v2/src\App.tsx:9:import MapPage from "./pages/MapPage";
v2/src\App.tsx:10:import SharePage from "./pages/SharePage";
v2/src\App.tsx:11:import AskPage from "./pages/AskPage";
v2/src\App.tsx:12:import SourcesPage from "./pages/SourcesPage";
v2/src\App.tsx:14:export default function App() {
v2/src\hooks\useCityViews.ts:1:import { useCallback, useSyncExternalStore } from "react";
v2/src\hooks\useCityViews.ts:25:export function useCityViewCount(cityId: string, baseViews: number): number {
v2/src\hooks\useCityViews.ts:34:export function useRecordCityView(): (cityId: string) => void {
v2/src\routes.ts:1:import { type RouteConfig, index, route } from "@react-router/dev/routes";
v2/src\routes.ts:3:export default [
v2/src\lib\search.ts:1:import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
v2/src\lib\search.ts:2:import { provinceHitAreas } from "../data/map-sources";
v2/src\data\city-tourism-portals.ts:1:import type { CityId } from "./transport";
v2/src\lib\i18n.ts:1:import { i18n, type Lang } from "../data/i18n";
v2/src\root.tsx:1:import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
v2/src\root.tsx:2:import LanguageProvider from "./store/LanguageProvider";
v2/src\root.tsx:3:import AtlasProvider from "./store/AtlasProvider";
v2/src\root.tsx:4:import SiteHeader from "./components/layout/SiteHeader";
v2/src\root.tsx:5:import SiteFooter from "./components/layout/SiteFooter";
v2/src\root.tsx:6:import "./styles/globals.css";
v2/src\root.tsx:8:export function Layout({ children }: { children: React.ReactNode }) {
v2/src\root.tsx:31:export default function App() {
v2/src\data\emergency.ts:1:import type { CityId } from "./transport";
v2/src\data\emergency.ts:220:import { pitfallSourceIds } from "./practical-other";
v2/src\data\emergency.ts:222:export function emergencySourceIds(cityId?: CityId): string[] {
v2/src\hooks\useProvinceShapes.ts:1:import { useEffect, useState } from "react";
v2/src\hooks\useProvinceShapes.ts:2:import { loadProvinceShapes, type ShapeMap } from "../lib/shapes";
v2/src\hooks\useProvinceShapes.ts:4:export function useProvinceShapes(): ShapeMap | null {
v2/src\data\entry-policies.ts:170:export function checkEligibility(country: string): EligibilityResult {
v2/src\data\entry-policies.ts:204:import { pitfallSourceIds } from "./practical-other";
v2/src\services\notes.ts:1:import type { UserNote } from "../data/types";
v2/src\components\city\CityHero.tsx:1:import clsx from "clsx";
v2/src\components\city\CityHero.tsx:2:import { attractionsByCity, type Attraction } from "../../data/city-attractions";
v2/src\components\city\CityHero.tsx:3:import type { CityId } from "../../data/transport";
v2/src\components\city\CityHero.tsx:4:import { useLang } from "../../store/language";
v2/src\components\city\CityHero.tsx:8:export default function CityHero({ cityId }: Props) {
v2/src\components\city\CityImagePanel.tsx:1:import { useEffect, useState } from "react";
v2/src\components\city\CityImagePanel.tsx:2:import { attractionsByCity } from "../../data/city-attractions";
v2/src\components\city\CityImagePanel.tsx:3:import type { CityId } from "../../data/transport";
v2/src\components\city\CityImagePanel.tsx:4:import { useLang } from "../../store/language";
v2/src\components\city\CityImagePanel.tsx:10:export default function CityImagePanel({ cityId }: Props) {
v2/src\components\city\CityNav.tsx:1:import { useEffect, useState } from "react";
v2/src\components\city\CityNav.tsx:2:import clsx from "clsx";
v2/src\components\city\CityNav.tsx:3:import { useLang } from "../../store/language";
v2/src\components\city\CityNav.tsx:17:export default function CityNav() {
v2/src\components\city\CityIntro.tsx:1:import { useMemo, useState } from "react";
v2/src\components\city\CityIntro.tsx:2:import clsx from "clsx";
v2/src\components\city\CityIntro.tsx:3:import { attractionsByCity } from "../../data/city-attractions";
v2/src\components\city\CityIntro.tsx:4:import type { CityId } from "../../data/transport";
v2/src\components\city\CityIntro.tsx:5:import { useLang } from "../../store/language";
v2/src\components\city\CityIntro.tsx:57:export default function CityIntro({ cityId }: Props) {
v2/src\data\food.ts:1:import type { CityId } from "./transport";
v2/src\data\food.ts:170:import { pitfallSourceIds } from "./practical-other";
v2/src\data\food.ts:172:export function foodSourceIds(cityId?: CityId): string[] {
v2/src\data\payments.ts:1:import type { CityId } from "./transport";
v2/src\data\payments.ts:196:import { practicalPaymentsSourceIds } from "./practical-payments";
v2/src\data\payments.ts:198:export function paymentsSourceIds(cityId?: CityId): string[] {
v2/src\components\atlas\ProvinceRail.tsx:1:import clsx from "clsx";
v2/src\components\atlas\ProvinceRail.tsx:2:import { atlasData } from "../../data/atlas";
v2/src\components\atlas\ProvinceRail.tsx:3:import { typeLabels } from "../../data/i18n";
v2/src\components\atlas\ProvinceRail.tsx:4:import { useAtlas } from "../../store/atlas";
v2/src\components\atlas\ProvinceRail.tsx:5:import { useLang } from "../../store/language";
v2/src\components\atlas\ProvinceRail.tsx:7:export default function ProvinceRail() {
v2/src\data\practical-other.ts:1:import type { CityId } from "./transport";
v2/src\data\practical-other.ts:359:export function pitfallsForPillar(pillar: PillarId, cityId?: CityId): Pitfall[] {
v2/src\data\practical-other.ts:368:export function pitfallSourceIds(pillar?: PillarId, cityId?: CityId): string[] {
v2/src\components\layout\SiteHeader.tsx:1:import { Link } from "react-router";
v2/src\components\layout\SiteHeader.tsx:2:import LanguageSwitch from "./LanguageSwitch";
v2/src\components\layout\SiteHeader.tsx:4:export default function SiteHeader() {
v2/src\components\atlas\CityProfile.tsx:1:import { accessLabels, statusLabels } from "../../data/i18n";
v2/src\components\atlas\CityProfile.tsx:2:import { useAtlas } from "../../store/atlas";
v2/src\components\atlas\CityProfile.tsx:3:import { useLang } from "../../store/language";
v2/src\components\atlas\CityProfile.tsx:4:import { useCityViewCount } from "../../hooks/useCityViews";
v2/src\components\atlas\CityProfile.tsx:5:import { formatNumber } from "../../lib/format";
v2/src\components\atlas\CityProfile.tsx:7:export default function CityProfile() {
v2/src\components\atlas\CityList.tsx:1:import clsx from "clsx";
v2/src\components\atlas\CityList.tsx:2:import type { CityRecord } from "../../data/atlas";
v2/src\components\atlas\CityList.tsx:3:import { useAtlas } from "../../store/atlas";
v2/src\components\atlas\CityList.tsx:4:import { useLang } from "../../store/language";
v2/src\components\atlas\CityList.tsx:5:import { useCityViewCount, useRecordCityView } from "../../hooks/useCityViews";
v2/src\components\atlas\CityList.tsx:6:import { formatNumber } from "../../lib/format";
v2/src\components\atlas\CityList.tsx:8:export default function CityList({ cities }: { cities: CityRecord[] }) {
v2/src\components\layout\SiteFooter.tsx:1:import { Link } from "react-router";
v2/src\components\layout\SiteFooter.tsx:2:import { useLang } from "../../store/language";
v2/src\components\layout\SiteFooter.tsx:4:export default function SiteFooter() {
v2/src\components\layout\LanguageSwitch.tsx:1:import clsx from "clsx";
v2/src\components\layout\LanguageSwitch.tsx:2:import { useLang } from "../../store/language";
v2/src\components\layout\LanguageSwitch.tsx:3:import type { Lang } from "../../data/i18n";
v2/src\components\layout\LanguageSwitch.tsx:10:export default function LanguageSwitch() {
v2/src\components\atlas\AtlasSection.tsx:1:import { useLang } from "../../store/language";
v2/src\components\atlas\AtlasSection.tsx:2:import { useAtlas } from "../../store/atlas";
v2/src\components\atlas\AtlasSection.tsx:3:import ProvinceRail from "./ProvinceRail";
v2/src\components\atlas\AtlasSection.tsx:4:import CityList from "./CityList";
v2/src\components\atlas\AtlasSection.tsx:5:import CityProfile from "./CityProfile";
v2/src\components\atlas\AtlasSection.tsx:7:export default function AtlasSection() {
v2/src\data\transport.ts:388:import { pitfallSourceIds } from "./practical-other";
v2/src\data\transport.ts:390:export function transportSourceIds(cityId?: CityId): string[] {
v2/src\store\atlas.ts:1:import { createContext, useContext, type Dispatch } from "react";
v2/src\store\atlas.ts:2:import { atlasData, type CityRecord, type ProvinceRecord } from "../data/atlas";
v2/src\store\atlas.ts:3:import { provinceHitAreas } from "../data/map-sources";
v2/src\store\atlas.ts:65:export function useAtlas() {
v2/src\store\AtlasProvider.tsx:1:import { useMemo, useReducer, type ReactNode } from "react";
v2/src\store\AtlasProvider.tsx:2:import { AtlasContext, atlasReducer, initialAtlasState } from "./atlas";
v2/src\store\AtlasProvider.tsx:4:export default function AtlasProvider({ children }: { children: ReactNode }) {
v2/src\store\language.ts:1:import { createContext, useContext } from "react";
v2/src\store\language.ts:2:import type { Lang } from "../data/i18n";
v2/src\store\language.ts:12:export function useLang(): LanguageContextValue {
v2/src\components\map\Province3DOverlay.tsx:1:import { lazy, Suspense } from "react";
v2/src\components\map\Province3DOverlay.tsx:2:import { useAtlas } from "../../store/atlas";
v2/src\components\map\Province3DOverlay.tsx:3:import { useLang } from "../../store/language";
v2/src\components\map\Province3DOverlay.tsx:5:const Map3D = lazy(() => import("./Map3D"));
v2/src\components\map\Province3DOverlay.tsx:7:export default function Province3DOverlay() {
v2/src\store\LanguageProvider.tsx:1:import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
v2/src\store\LanguageProvider.tsx:2:import type { Lang } from "../data/i18n";
v2/src\store\LanguageProvider.tsx:3:import { translate } from "../lib/i18n";
v2/src\store\LanguageProvider.tsx:4:import { LanguageContext } from "./language";
v2/src\store\LanguageProvider.tsx:13:export default function LanguageProvider({ children }: { children: ReactNode }) {
v2/src\components\pillar\VisaChecker.tsx:1:import { useId, useMemo, useState } from "react";
v2/src\components\pillar\VisaChecker.tsx:2:import {
v2/src\components\pillar\VisaChecker.tsx:10:import { useLang } from "../../store/language";
v2/src\components\pillar\VisaChecker.tsx:11:import PracticalBlock from "../common/PracticalBlock";
v2/src\components\pillar\VisaChecker.tsx:15:export default function VisaChecker() {
v2/src\components\pillar\TransportGuide.tsx:1:import { useState } from "react";
v2/src\components\pillar\TransportGuide.tsx:2:import clsx from "clsx";
v2/src\components\pillar\TransportGuide.tsx:3:import { CITY_LABELS, cityTransport, railBooking, type CityId } from "../../data/transport";
v2/src\components\pillar\TransportGuide.tsx:4:import { useLang } from "../../store/language";
v2/src\components\pillar\TransportGuide.tsx:5:import PracticalBlock from "../common/PracticalBlock";
v2/src\components\pillar\TransportGuide.tsx:15:export default function TransportGuide({ cityId }: Props) {
v2/src\components\pillar\PaymentsPractical.tsx:1:import clsx from "clsx";
v2/src\components\pillar\PaymentsPractical.tsx:2:import { practicalPayments, type PracticalGotcha, type PracticalGotchaPhase } from "../../data/practical-payments";
v2/src\components\pillar\PaymentsPractical.tsx:3:import { useLang } from "../../store/language";
v2/src\components\pillar\PaymentsPractical.tsx:20:export default function PaymentsPractical() {
v2/src\components\map\MapPreview.tsx:1:import { useMemo } from "react";
v2/src\components\map\MapPreview.tsx:2:import { useProvinceShapes } from "../../hooks/useProvinceShapes";
v2/src\components\map\MapPreview.tsx:3:import { computeUnionViewBox } from "../../lib/shapes";
v2/src\components\map\MapPreview.tsx:4:import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
v2/src\components\map\MapPreview.tsx:6:export default function MapPreview() {
v2/src\components\city\CuisineDrawer.tsx:1:import { useEffect } from "react";
v2/src\components\city\CuisineDrawer.tsx:2:import clsx from "clsx";
v2/src\components\city\CuisineDrawer.tsx:3:import type { CityFood } from "../../data/food";
v2/src\components\city\CuisineDrawer.tsx:4:import { useLang } from "../../store/language";
v2/src\components\city\CuisineDrawer.tsx:12:export default function CuisineDrawer({ city, open, onClose }: Props) {
v2/src\components\map\HeroMap.tsx:1:import { useEffect } from "react";
v2/src\components\map\HeroMap.tsx:2:import { useAtlas } from "../../store/atlas";
v2/src\components\map\HeroMap.tsx:3:import { useLang } from "../../store/language";
v2/src\components\map\HeroMap.tsx:4:import ProvinceShapeLayer from "./ProvinceShapeLayer";
v2/src\components\map\HeroMap.tsx:5:import ProvinceLabelLayer from "./ProvinceLabelLayer";
v2/src\components\map\HeroMap.tsx:6:import ProvinceInfoCard from "./ProvinceInfoCard";
v2/src\components\map\HeroMap.tsx:7:import Province3DOverlay from "./Province3DOverlay";
v2/src\components\map\HeroMap.tsx:8:import SpecialRegionMarkers from "./SpecialRegionMarkers";
v2/src\components\map\HeroMap.tsx:9:import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
v2/src\components\map\HeroMap.tsx:11:export default function HeroMap() {
v2/src\components\map\Map3D.tsx:1:import { useEffect, useMemo, useRef, useState } from "react";
v2/src\components\map\Map3D.tsx:2:import "cesium/Build/Cesium/Widgets/widgets.css";
v2/src\components\map\Map3D.tsx:3:import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
v2/src\components\map\Map3D.tsx:4:import type { Lang } from "../../data/i18n";
v2/src\components\map\Map3D.tsx:5:import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
v2/src\components\map\Map3D.tsx:285:export default function Map3D({ province, provinceId, lang }: Map3DProps) {
v2/src\components\pillar\PaymentsChecklist.tsx:1:import {
v2/src\components\pillar\PaymentsChecklist.tsx:8:import type { CityId } from "../../data/transport";
v2/src\components\pillar\PaymentsChecklist.tsx:9:import { useLang } from "../../store/language";
v2/src\components\pillar\PaymentsChecklist.tsx:10:import PaymentsPractical from "./PaymentsPractical";
v2/src\components\pillar\PaymentsChecklist.tsx:14:export default function PaymentsChecklist({ cityId }: Props) {
v2/src\components\pillar\FoodGuide.tsx:1:import { useState } from "react";
v2/src\components\pillar\FoodGuide.tsx:2:import clsx from "clsx";
v2/src\components\pillar\FoodGuide.tsx:3:import { allergyCardEn, allergyCardZh, cityFood } from "../../data/food";
v2/src\components\pillar\FoodGuide.tsx:4:import { CITY_LABELS, type CityId } from "../../data/transport";
v2/src\components\pillar\FoodGuide.tsx:5:import { useLang } from "../../store/language";
v2/src\components\pillar\FoodGuide.tsx:6:import PracticalBlock from "../common/PracticalBlock";
v2/src\components\pillar\FoodGuide.tsx:7:import CuisineDrawer from "../city/CuisineDrawer";
v2/src\components\pillar\FoodGuide.tsx:11:export default function FoodGuide({ cityId }: Props) {
v2/src\components\map\SpecialRegionMarkers.tsx:1:import type { CSSProperties } from "react";
v2/src\components\map\SpecialRegionMarkers.tsx:2:import { provinceHitAreas } from "../../data/map-sources";
v2/src\components\map\SpecialRegionMarkers.tsx:3:import { useAtlas } from "../../store/atlas";
v2/src\components\map\SpecialRegionMarkers.tsx:4:import { useLang } from "../../store/language";
v2/src\components\map\SpecialRegionMarkers.tsx:12:export default function SpecialRegionMarkers() {
v2/src\components\sections\HistoryVideo.tsx:1:import { useLang } from "../../store/language";
v2/src\components\sections\HistoryVideo.tsx:3:export default function HistoryVideo() {
v2/src\components\map\ProvinceShapeLayer.tsx:1:import { useMemo } from "react";
v2/src\components\map\ProvinceShapeLayer.tsx:2:import clsx from "clsx";
v2/src\components\map\ProvinceShapeLayer.tsx:3:import { useProvinceShapes } from "../../hooks/useProvinceShapes";
v2/src\components\map\ProvinceShapeLayer.tsx:4:import { computeFocusTransform, computeUnionViewBox, type ProvinceShape } from "../../lib/shapes";
v2/src\components\map\ProvinceShapeLayer.tsx:5:import { provinceHitAreas } from "../../data/map-sources";
v2/src\components\map\ProvinceShapeLayer.tsx:6:import { useAtlas } from "../../store/atlas";
v2/src\components\map\ProvinceShapeLayer.tsx:7:import { useLang } from "../../store/language";
v2/src\components\map\ProvinceShapeLayer.tsx:8:import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
v2/src\components\map\ProvinceShapeLayer.tsx:78:export default function ProvinceShapeLayer() {
v2/src\components\map\ProvinceInfoCard.tsx:1:import { useAtlas } from "../../store/atlas";
v2/src\components\map\ProvinceInfoCard.tsx:2:import { useLang } from "../../store/language";
v2/src\components\map\ProvinceInfoCard.tsx:3:import { provinceAttractionSeed } from "../../data/atlas";
v2/src\components\map\ProvinceInfoCard.tsx:4:import { useRecordCityView } from "../../hooks/useCityViews";
v2/src\components\map\ProvinceInfoCard.tsx:6:export default function ProvinceInfoCard() {
v2/src\components\map\ProvinceLabelLayer.tsx:1:import { useMemo } from "react";
v2/src\components\map\ProvinceLabelLayer.tsx:2:import clsx from "clsx";
v2/src\components\map\ProvinceLabelLayer.tsx:3:import { useProvinceShapes } from "../../hooks/useProvinceShapes";
v2/src\components\map\ProvinceLabelLayer.tsx:4:import { computeFocusTransform, computeUnionViewBox } from "../../lib/shapes";
v2/src\components\map\ProvinceLabelLayer.tsx:5:import { provinceHitAreas } from "../../data/map-sources";
v2/src\components\map\ProvinceLabelLayer.tsx:6:import { useAtlas } from "../../store/atlas";
v2/src\components\map\ProvinceLabelLayer.tsx:7:import { useLang } from "../../store/language";
v2/src\components\map\ProvinceLabelLayer.tsx:19:export default function ProvinceLabelLayer() {
v2/src\components\map\EarthIntro.tsx:1:import { useEffect, useRef } from "react";
v2/src\components\map\EarthIntro.tsx:2:import * as THREE from "three";
v2/src\components\map\EarthIntro.tsx:27:export default function EarthIntro({ onDone }: Props) {
v2/src\components\sections\MuseumFlow.tsx:1:import { useLang } from "../../store/language";
v2/src\components\sections\MuseumFlow.tsx:10:export default function MuseumFlow() {
v2/src\components\sections\SourcesNote.tsx:1:import { useLang } from "../../store/language";
v2/src\components\sections\SourcesNote.tsx:5:export default function SourcesNote() {
v2/src\components\sections\TopQuestions.tsx:1:import { useState } from "react";
v2/src\components\sections\TopQuestions.tsx:2:import clsx from "clsx";
v2/src\components\sections\TopQuestions.tsx:3:import { topQuestions } from "../../data/top-questions";
v2/src\components\sections\TopQuestions.tsx:4:import { useLang } from "../../store/language";
v2/src\components\sections\TopQuestions.tsx:6:export default function TopQuestions() {
v2/src\components\search\PlaceSearch.tsx:1:import { useId, useMemo, useState } from "react";
v2/src\components\search\PlaceSearch.tsx:2:import { useLang } from "../../store/language";
v2/src\components\search\PlaceSearch.tsx:3:import { useAtlas } from "../../store/atlas";
v2/src\components\search\PlaceSearch.tsx:4:import { findBestMatch, getAllRecords } from "../../lib/search";
v2/src\components\search\PlaceSearch.tsx:5:import { placeTypeLabels } from "../../data/i18n";
v2/src\components\search\PlaceSearch.tsx:7:export default function PlaceSearch() {
v2/src\components\map\ProvinceHitAreaLayer.tsx:1:import { provinceHitAreas } from "../../data/map-sources";
v2/src\components\map\ProvinceHitAreaLayer.tsx:2:import { useAtlas } from "../../store/atlas";
v2/src\components\map\ProvinceHitAreaLayer.tsx:3:import { useLang } from "../../store/language";
v2/src\components\map\ProvinceHitAreaLayer.tsx:7:export default function ProvinceHitAreaLayer() {
v2/src\pages\MapPage.tsx:1:import { Link } from "react-router";
v2/src\pages\MapPage.tsx:2:import HeroMap from "../components/map/HeroMap";
v2/src\pages\MapPage.tsx:3:import { useLang } from "../store/language";
v2/src\pages\MapPage.tsx:5:export default function MapPage() {
v2/src\pages\GuidePage.tsx:1:import { Link, useParams } from "react-router";
v2/src\pages\GuidePage.tsx:2:import TravelAlerts from "../components/policy/TravelAlerts";
v2/src\pages\GuidePage.tsx:3:import VisaChecker from "../components/pillar/VisaChecker";
v2/src\pages\GuidePage.tsx:4:import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
v2/src\pages\GuidePage.tsx:5:import TopQuestions from "../components/sections/TopQuestions";
v2/src\pages\GuidePage.tsx:6:import SourcesNote from "../components/common/SourcesNote";
v2/src\pages\GuidePage.tsx:7:import { useLang } from "../store/language";
v2/src\pages\GuidePage.tsx:34:export default function GuidePage() {
v2/src\pages\SharePage.tsx:1:import { Link } from "react-router";
v2/src\pages\SharePage.tsx:2:import { moderationFlow, sampleShares } from "../data/phase2-preview";
v2/src\pages\SharePage.tsx:3:import { useLang } from "../store/language";
v2/src\pages\SharePage.tsx:5:export default function SharePage() {
v2/src\pages\AskPage.tsx:1:import { Link } from "react-router";
v2/src\pages\AskPage.tsx:2:import clsx from "clsx";
v2/src\pages\AskPage.tsx:3:import { badgeLadder, sampleQuestions, type BadgeTier } from "../data/phase2-preview";
v2/src\pages\AskPage.tsx:4:import { useLang } from "../store/language";
v2/src\pages\AskPage.tsx:6:export default function AskPage() {
v2/src\pages\CityPage.tsx:1:import { Link, useParams } from "react-router";
v2/src\pages\CityPage.tsx:2:import { CITY_LABELS, type CityId } from "../data/transport";
v2/src\pages\CityPage.tsx:3:import { useLang } from "../store/language";
v2/src\pages\CityPage.tsx:4:import VisaChecker from "../components/pillar/VisaChecker";
v2/src\pages\CityPage.tsx:5:import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
v2/src\pages\CityPage.tsx:6:import TransportGuide from "../components/pillar/TransportGuide";
v2/src\pages\CityPage.tsx:7:import FoodGuide from "../components/pillar/FoodGuide";
v2/src\pages\CityPage.tsx:8:import EmergencyBriefing from "../components/pillar/EmergencyBriefing";
v2/src\pages\CityPage.tsx:9:import CityFurtherReading from "../components/common/CityFurtherReading";
v2/src\pages\CityPage.tsx:10:import SourcesNote from "../components/common/SourcesNote";
v2/src\pages\CityPage.tsx:11:import CityNav from "../components/city/CityNav";
v2/src\pages\CityPage.tsx:12:import CityIntro from "../components/city/CityIntro";
v2/src\pages\CityPage.tsx:13:import CityImagePanel from "../components/city/CityImagePanel";
v2/src\pages\CityPage.tsx:17:export default function CityPage() {
v2/src\pages\HomePage.tsx:1:import { Link } from "react-router";
v2/src\pages\HomePage.tsx:2:import MapPreview from "../components/map/MapPreview";
v2/src\pages\HomePage.tsx:3:import { attractionsByCity, type Attraction } from "../data/city-attractions";
v2/src\pages\HomePage.tsx:4:import { CITY_LABELS, type CityId } from "../data/transport";
v2/src\pages\HomePage.tsx:5:import { useLang } from "../store/language";
v2/src\pages\HomePage.tsx:19:export default function HomePage() {
v2/src\components\policy\TravelAlerts.tsx:1:import { useMemo } from "react";
v2/src\components\policy\TravelAlerts.tsx:2:import clsx from "clsx";
v2/src\components\policy\TravelAlerts.tsx:3:import {
v2/src\components\policy\TravelAlerts.tsx:9:import { useLang } from "../../store/language";
v2/src\components\policy\TravelAlerts.tsx:29:export default function TravelAlerts() {
v2/src\components\pillar\EmergencyBriefing.tsx:1:import { useState } from "react";
v2/src\components\pillar\EmergencyBriefing.tsx:2:import clsx from "clsx";
v2/src\components\pillar\EmergencyBriefing.tsx:3:import {
v2/src\components\pillar\EmergencyBriefing.tsx:11:import { CITY_LABELS, type CityId } from "../../data/transport";
v2/src\components\pillar\EmergencyBriefing.tsx:12:import { useLang } from "../../store/language";
v2/src\components\pillar\EmergencyBriefing.tsx:13:import PracticalBlock from "../common/PracticalBlock";
v2/src\components\pillar\EmergencyBriefing.tsx:19:export default function EmergencyBriefing({ cityId }: Props) {
v2/src\data\city-attractions.ts:1:import type { CityId } from "./transport";
v2/src\data\city-attractions.ts:366:export function attractionsByCity(cityId: CityId): Attraction[] {
v2/src\pages\SourcesPage.tsx:1:import { Link } from "react-router";
v2/src\pages\SourcesPage.tsx:2:import { sources } from "../data/sources";
v2/src\pages\SourcesPage.tsx:3:import { useLang } from "../store/language";
v2/src\pages\SourcesPage.tsx:5:export default function SourcesPage() {
v2/src\components\common\CityFurtherReading.tsx:1:import { cityTourismPortals } from "../../data/city-tourism-portals";
v2/src\components\common\CityFurtherReading.tsx:2:import type { CityId } from "../../data/transport";
v2/src\components\common\CityFurtherReading.tsx:3:import { useLang } from "../../store/language";
v2/src\components\common\CityFurtherReading.tsx:7:export default function CityFurtherReading({ cityId }: Props) {
v2/src\components\common\PageSources.tsx:1:import { getSource, type SourceCitation } from "../../data/sources";
v2/src\components\common\PageSources.tsx:2:import { useLang } from "../../store/language";
v2/src\components\common\PageSources.tsx:6:export default function PageSources({ ids }: Props) {
v2/src\components\common\PracticalBlock.tsx:1:import { pitfallsForPillar, type PillarId } from "../../data/practical-other";
v2/src\components\common\PracticalBlock.tsx:2:import type { CityId } from "../../data/transport";
v2/src\components\common\PracticalBlock.tsx:3:import { useLang } from "../../store/language";
v2/src\components\common\PracticalBlock.tsx:14:export default function PracticalBlock({ pillar, cityId }: Props) {
v2/src\components\common\SourcesNote.tsx:1:import { Link } from "react-router";
v2/src\components\common\SourcesNote.tsx:2:import { useLang } from "../../store/language";
v2/src\components\common\SourcesNote.tsx:4:export default function SourcesNote() {

 succeeded in 903ms:
v2/src/pages\AskPage.tsx:4:import { useLang } from "../store/language";
v2/src/pages\CityPage.tsx:3:import { useLang } from "../store/language";
v2/src/pages\GuidePage.tsx:7:import { useLang } from "../store/language";
v2/src/pages\HomePage.tsx:5:import { useLang } from "../store/language";
v2/src/pages\MapPage.tsx:3:import { useLang } from "../store/language";
v2/src/store\LanguageProvider.tsx:4:import { LanguageContext } from "./language";
v2/src/store\LanguageProvider.tsx:6:const STORAGE_KEY = "chinaAtlas:language";
v2/src/store\LanguageProvider.tsx:16:  useEffect(() => {
v2/src/pages\SourcesPage.tsx:3:import { useLang } from "../store/language";
v2/src/pages\SourcesPage.tsx:90:function ReferenceList({ items, isZh }: { items: Item[]; isZh: boolean }) {
v2/src/pages\SourcesPage.tsx:91:  const sorted = [...items].sort((a, b) => a.publisher.localeCompare(b.publisher));
v2/src/lib\search.ts:19:  (value ?? "").split("/").map((s) => s.trim()).filter(Boolean);
v2/src/store\language.ts:13:  const value = useContext(LanguageContext);
v2/src/pages\SharePage.tsx:3:import { useLang } from "../store/language";
v2/src/lib\format.ts:1:const numberFormatter = new Intl.NumberFormat("en-US");
v2/src/lib\format.ts:3:export const formatNumber = (value: number): string => numberFormatter.format(value);
v2/src/components\sections\TopQuestions.tsx:4:import { useLang } from "../../store/language";
v2/src/components\common\CityFurtherReading.tsx:3:import { useLang } from "../../store/language";
v2/src/components\common\CityFurtherReading.tsx:25:            : "Each city's own official English-language portals. For city-specific details we don't cover (events, seasonal routes, hyperlocal news), go straight to these."}
v2/src/components\policy\TravelAlerts.tsx:9:import { useLang } from "../../store/language";
v2/src/components\search\PlaceSearch.tsx:2:import { useLang } from "../../store/language";
v2/src/components\search\PlaceSearch.tsx:17:    event.preventDefault();
v2/src/components\search\PlaceSearch.tsx:20:      setHint(t("searchNoMatch"));
v2/src/components\search\PlaceSearch.tsx:24:    setHint(`${t("searchJumped")} ${lang === "zh" ? record.zh : record.en}`);
v2/src/components\search\PlaceSearch.tsx:36:        placeholder={t("searchPlaceholder")}
v2/src/components\search\PlaceSearch.tsx:43:        {t("searchButton")}
v2/src/components\sections\SourcesNote.tsx:1:import { useLang } from "../../store/language";
v2/src/components\sections\SourcesNote.tsx:10:        <h2 className="text-2xl font-bold">{t("sourcesTitle")}</h2>
v2/src/components\sections\SourcesNote.tsx:11:        <p className="text-sm text-muted">{t("sourcesBody")}</p>
v2/src/components\sections\SourcesNote.tsx:15:          <li key={key}>{t(key)}</li>
v2/src/components\layout\LanguageSwitch.tsx:2:import { useLang } from "../../store/language";
v2/src/components\atlas\AtlasSection.tsx:1:import { useLang } from "../../store/language";
v2/src/components\atlas\AtlasSection.tsx:15:          <h2 className="text-2xl font-bold">{t("atlasTitle")}</h2>
v2/src/components\atlas\AtlasSection.tsx:16:          <p className="text-sm text-muted">{t("atlasBody")}</p>
v2/src/components\atlas\AtlasSection.tsx:24:            <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
v2/src/components\layout\SiteFooter.tsx:2:import { useLang } from "../../store/language";
v2/src/components\layout\SiteFooter.tsx:9:      <p>{t("footerNote")}</p>
v2/src/components\layout\SiteFooter.tsx:14:        <a href="#top" className="hover:text-jade">{t("backToTop")}</a>
v2/src/components\sections\MuseumFlow.tsx:1:import { useLang } from "../../store/language";
v2/src/components\sections\MuseumFlow.tsx:15:        <h2 className="text-2xl font-bold">{t("museumTitle")}</h2>
v2/src/components\sections\MuseumFlow.tsx:16:        <p className="text-sm text-muted">{t("museumBody")}</p>
v2/src/components\sections\MuseumFlow.tsx:22:            <h3 className="text-base font-bold">{t(step.titleKey)}</h3>
v2/src/components\sections\MuseumFlow.tsx:23:            <p className="text-sm text-muted">{t(step.bodyKey)}</p>
v2/src/components\city\CityHero.tsx:4:import { useLang } from "../../store/language";
v2/src/components\sections\HistoryVideo.tsx:1:import { useLang } from "../../store/language";
v2/src/components\sections\HistoryVideo.tsx:8:        <h2 className="text-2xl font-bold">{t("historyVideoTitle")}</h2>
v2/src/components\sections\HistoryVideo.tsx:9:        <p className="text-sm leading-relaxed text-muted">{t("historyVideoBody")}</p>
v2/src/components\sections\HistoryVideo.tsx:22:          <strong>{t("historyVideoMeta")}</strong>
v2/src/components\sections\HistoryVideo.tsx:29:            {t("historyVideoSource")}
v2/src/components\atlas\CityList.tsx:4:import { useLang } from "../../store/language";
v2/src/components\atlas\CityList.tsx:8:export default function CityList({ cities }: { cities: CityRecord[] }) {
v2/src/components\atlas\CityList.tsx:16:        {t("mapHintPending")}
v2/src/components\atlas\CityList.tsx:32:          viewsLabel={t("views")}
v2/src/components\atlas\CityList.tsx:49:  const total = useCityViewCount(city.id, city.baseViews);
v2/src/components\city\CityImagePanel.tsx:4:import { useLang } from "../../store/language";
v2/src/components\city\CityImagePanel.tsx:16:  useEffect(() => {
v2/src/components\city\CityIntro.tsx:5:import { useLang } from "../../store/language";
v2/src/components\city\CityIntro.tsx:68:      const existing = seen.get(key);
v2/src/components\city\CityIntro.tsx:70:      else seen.set(key, { en: a.districtEn, zh: a.districtZh, count: 1 });
v2/src/components\map\Province3DOverlay.tsx:3:import { useLang } from "../../store/language";
v2/src/components\map\Province3DOverlay.tsx:5:const Map3D = lazy(() => import("./Map3D"));
v2/src/components\city\CityNav.tsx:3:import { useLang } from "../../store/language";
v2/src/components\city\CityNav.tsx:22:  useEffect(() => {
v2/src/components\city\CityNav.tsx:33:          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
v2/src/components\city\CityNav.tsx:40:    return () => observer.disconnect();
v2/src/components\city\CuisineDrawer.tsx:4:import { useLang } from "../../store/language";
v2/src/components\city\CuisineDrawer.tsx:16:  useEffect(() => {
v2/src/components\map\ProvinceHitAreaLayer.tsx:3:import { useLang } from "../../store/language";
v2/src/components\map\ProvinceHitAreaLayer.tsx:5:const specialMarkerIds = new Set(["hong-kong", "macau"]);
v2/src/components\map\ProvinceInfoCard.tsx:2:import { useLang } from "../../store/language";
v2/src/components\map\ProvinceInfoCard.tsx:29:        <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
v2/src/components\map\ProvinceInfoCard.tsx:36:          <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("cityProfiles")}</h4>
v2/src/components\map\ProvinceInfoCard.tsx:56:          <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("famousAttractions")}</h4>
v2/src/components\map\ProvinceInfoCard.tsx:71:        <p className="text-sm text-muted">{t("provinceDataPending")}</p>
v2/src/components\common\PageSources.tsx:2:import { useLang } from "../../store/language";
v2/src/components\common\PageSources.tsx:10:  const sources = Array.from(new Set(ids))
v2/src/components\map\EarthIntro.tsx:31:  useEffect(() => {
v2/src/components\map\EarthIntro.tsx:35:  useEffect(() => {
v2/src/components\map\EarthIntro.tsx:47:    camera.position.set(0, 0, 3.0);
v2/src/components\map\EarthIntro.tsx:49:    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
v2/src/components\map\EarthIntro.tsx:50:    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
v2/src/components\map\EarthIntro.tsx:51:    sun.position.set(-2.5, 1.6, 4);
v2/src/components\map\EarthIntro.tsx:84:            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
v2/src/components\map\EarthIntro.tsx:92:      const rect = host.getBoundingClientRect();
v2/src/components\map\EarthIntro.tsx:130:        doneRef.current();
v2/src/components\map\EarthIntro.tsx:137:      ro.disconnect();
v2/src/components\common\SourcesNote.tsx:2:import { useLang } from "../../store/language";
v2/src/components\pillar\EmergencyBriefing.tsx:12:import { useLang } from "../../store/language";
v2/src/components\common\PracticalBlock.tsx:3:import { useLang } from "../../store/language";
v2/src/components\map\HeroMap.tsx:3:import { useLang } from "../../store/language";
v2/src/components\map\HeroMap.tsx:17:  useEffect(() => {
v2/src/components\map\HeroMap.tsx:20:      if (event.key === "Escape") reset();
v2/src/components\map\ProvinceShapeLayer.tsx:7:import { useLang } from "../../store/language";
v2/src/components\map\ProvinceShapeLayer.tsx:47:        onSelect();
v2/src/components\map\ProvinceShapeLayer.tsx:51:          event.preventDefault();
v2/src/components\map\ProvinceShapeLayer.tsx:52:          onSelect();
v2/src/components\map\ProvinceShapeLayer.tsx:99:  const ordered = Object.values(shapes).sort((a, b) =>
v2/src/components\map\ProvinceShapeLayer.tsx:121:          const label = labelMap.get(shape.id);
v2/src/components\map\ProvinceLabelLayer.tsx:7:import { useLang } from "../../store/language";
v2/src/components\map\ProvinceLabelLayer.tsx:48:        const label = labelMap.get(shape.id);
v2/src/store\atlas.ts:66:  const ctx = useContext(AtlasContext);
v2/src/components\map\SpecialRegionMarkers.tsx:4:import { useLang } from "../../store/language";
v2/src/components\map\SpecialRegionMarkers.tsx:6:const markerIds = new Set(["hong-kong", "macau"]);
v2/src/components\map\Map3D.tsx:7:type CesiumModule = typeof import("cesium");
v2/src/components\map\Map3D.tsx:58:function percentToLonLat(x: number, y: number): LonLat {
v2/src/components\map\Map3D.tsx:66:  const center = percentToLonLat(area.x, area.y);
v2/src/components\map\Map3D.tsx:86:function getEntityText(zh: string, en: string, lang: Lang) {
v2/src/components\map\Map3D.tsx:92:  if (point) return percentToLonLat(point.x, point.y);
v2/src/components\map\Map3D.tsx:94:  const center = percentToLonLat(fallbackArea.x, fallbackArea.y);
v2/src/components\map\Map3D.tsx:106:  const center = percentToLonLat(area.x, area.y);
v2/src/components\map\Map3D.tsx:132:    credit: new Cesium.Credit(credit)
v2/src/components\map\Map3D.tsx:164:    image.onerror = () => reject(new Error("Tianditu tile failed to load"));
v2/src/components\map\Map3D.tsx:248:  const center = percentToLonLat(area.x, area.y);
v2/src/components\map\Map3D.tsx:253:    addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
v2/src/components\map\Map3D.tsx:259:    addLabelEntity(Cesium, viewer, position, getEntityText(attraction.zh, attraction.en, lang), "#f59e0b", 9);
v2/src/components\map\Map3D.tsx:292:  useEffect(() => {
v2/src/components\map\Map3D.tsx:299:    let creditContainer: HTMLDivElement | null = document.createElement("div");
v2/src/components\map\Map3D.tsx:307:        const Cesium = await import("cesium");
v2/src/components\atlas\CityProfile.tsx:3:import { useLang } from "../../store/language";
v2/src/components\atlas\CityProfile.tsx:10:  const views = useCityViewCount(city?.id ?? "", city?.baseViews ?? 0);
v2/src/components\atlas\CityProfile.tsx:15:        <h3 className="text-lg font-bold">{t("selectCity")}</h3>
v2/src/components\atlas\CityProfile.tsx:16:        <p className="text-sm text-muted">{t("selectCityBody")}</p>
v2/src/components\atlas\CityProfile.tsx:37:        <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("startHere")}</span>
v2/src/components\atlas\CityProfile.tsx:45:        <Stat label={t("pageViews")} value={formatNumber(views)} />
v2/src/components\atlas\CityProfile.tsx:46:        <Stat label={t("visitorNotes")} value={formatNumber(city.notes)} />
v2/src/components\atlas\CityProfile.tsx:47:        <Stat label={t("lastVerified")} value={city.verified} />
v2/src/components\atlas\CityProfile.tsx:48:        <Stat label={t("englishAccess")} value={accessLabels[lang][city.access] ?? city.access} />
v2/src/components\atlas\CityProfile.tsx:52:        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("historicalIdentity")}</h4>
v2/src/components\atlas\CityProfile.tsx:57:        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("thenExplore")}</h4>
v2/src/components\atlas\CityProfile.tsx:66:        <strong className="block text-ink">{t("sourcePolicy")}</strong>
v2/src/components\atlas\CityProfile.tsx:67:        <p className="mt-1">{t("sourcePolicyBody")}</p>
v2/src/components\atlas\CityProfile.tsx:73:          {t("close")}
v2/src/components\atlas\CityProfile.tsx:80:function Stat({ label, value }: { label: string; value: string }) {
v2/src/components\atlas\ProvinceRail.tsx:5:import { useLang } from "../../store/language";
v2/src/components\atlas\ProvinceRail.tsx:12:    <aside aria-label={t("provinceLevelRegions")} className="flex flex-col gap-2">
v2/src/components\atlas\ProvinceRail.tsx:14:        <strong className="text-xs font-bold uppercase tracking-widest text-muted">{t("provinceLevelRegions")}</strong>
v2/src/components\pillar\FoodGuide.tsx:5:import { useLang } from "../../store/language";
v2/src/components\pillar\PaymentsChecklist.tsx:9:import { useLang } from "../../store/language";
v2/src/components\pillar\PaymentsChecklist.tsx:14:export default function PaymentsChecklist({ cityId }: Props) {
v2/src/components\pillar\PaymentsPractical.tsx:3:import { useLang } from "../../store/language";
v2/src/components\pillar\TransportGuide.tsx:4:import { useLang } from "../../store/language";
v2/src/components\pillar\VisaChecker.tsx:10:import { useLang } from "../../store/language";
v2/src/components\pillar\VisaChecker.tsx:23:      [...unilateralVisaFreeCountries].sort((a, b) =>
v2/src/components\pillar\VisaChecker.tsx:217:function Phase1PortsList() {

 succeeded in 916ms:
v2/src/pages\AskPage.tsx:1:import { Link } from "react-router";
v2/src/pages\AskPage.tsx:146:      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
v2/src/pages\AskPage.tsx:148:      </Link>
v2/src/pages\CityPage.tsx:1:import { Link, useParams } from "react-router";
v2/src/pages\CityPage.tsx:18:  const { cityId } = useParams<{ cityId: string }>();
v2/src/pages\CityPage.tsx:26:        <Link to="/" className="text-jade hover:underline">{isZh ? "返回首页" : "← Home"}</Link>
v2/src/pages\CityPage.tsx:37:        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
v2/src/pages\CityPage.tsx:39:        </Link>
v2/src/pages\CityPage.tsx:64:              <Link to="/ask" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
v2/src/pages\CityPage.tsx:66:              </Link>
v2/src/pages\CityPage.tsx:67:              <Link to="/share" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
v2/src/pages\CityPage.tsx:69:              </Link>
v2/src/pages\GuidePage.tsx:1:import { Link, useParams } from "react-router";
v2/src/pages\GuidePage.tsx:35:  const { topic } = useParams<{ topic: string }>();
v2/src/pages\GuidePage.tsx:44:        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
v2/src/pages\GuidePage.tsx:46:        </Link>
v2/src/pages\MapPage.tsx:1:import { Link } from "react-router";
v2/src/pages\MapPage.tsx:12:        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
v2/src/pages\MapPage.tsx:14:        </Link>
v2/src/pages\HomePage.tsx:1:import { Link } from "react-router";
v2/src/pages\HomePage.tsx:9:const guideLinks = [
v2/src/pages\HomePage.tsx:39:      <section aria-label={isZh ? "城市景区照片" : "City attraction photos"} className="grid gap-4 md:grid-cols-2">
v2/src/pages\HomePage.tsx:45:      <Link
v2/src/pages\HomePage.tsx:46:        to="/map"
v2/src/pages\HomePage.tsx:47:        aria-label={isZh ? "打开地标地图" : "Open landmark map"}
v2/src/pages\HomePage.tsx:69:      </Link>
v2/src/pages\HomePage.tsx:71:      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-3">
v2/src/pages\HomePage.tsx:72:        {guideLinks.map((item) => (
v2/src/pages\HomePage.tsx:73:          <Link
v2/src/pages\HomePage.tsx:75:            to={item.to}
v2/src/pages\HomePage.tsx:79:            <span className="text-xl text-muted transition group-hover:translate-x-1 group-hover:text-jade" aria-hidden>
v2/src/pages\HomePage.tsx:82:          </Link>
v2/src/pages\HomePage.tsx:101:    <Link
v2/src/pages\HomePage.tsx:102:      to={`/city/${cityId}`}
v2/src/pages\HomePage.tsx:107:        alt={isZh ? attraction.nameZh : attraction.nameEn}
v2/src/pages\HomePage.tsx:123:    </Link>
v2/src/pages\SharePage.tsx:1:import { Link } from "react-router";
v2/src/pages\SharePage.tsx:108:          <button
v2/src/pages\SharePage.tsx:113:          </button>
v2/src/pages\SharePage.tsx:157:      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
v2/src/pages\SharePage.tsx:159:      </Link>
v2/src/pages\SourcesPage.tsx:1:import { Link } from "react-router";
v2/src/pages\SourcesPage.tsx:47:      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
v2/src/pages\SourcesPage.tsx:49:      </Link>
v2/src/pages\SourcesPage.tsx:98:            href={s.url}
v2/src/components\common\CityFurtherReading.tsx:32:              href={p.url}
v2/src/components\common\SourcesNote.tsx:1:import { Link } from "react-router";
v2/src/components\common\SourcesNote.tsx:12:          <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
v2/src/components\common\SourcesNote.tsx:14:          </Link>
v2/src/components\common\SourcesNote.tsx:19:          <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
v2/src/components\common\SourcesNote.tsx:21:          </Link>
v2/src/components\common\PageSources.tsx:33:              href={s.url}
v2/src/components\layout\LanguageSwitch.tsx:15:        <button
v2/src/components\layout\LanguageSwitch.tsx:17:          type="button"
v2/src/components\layout\LanguageSwitch.tsx:25:        </button>
v2/src/components\layout\SiteFooter.tsx:1:import { Link } from "react-router";
v2/src/components\layout\SiteFooter.tsx:11:        <Link to="/sources" className="hover:text-jade">
v2/src/components\layout\SiteFooter.tsx:13:        </Link>
v2/src/components\layout\SiteFooter.tsx:14:        <a href="#top" className="hover:text-jade">{t("backToTop")}</a>
v2/src/components\layout\SiteHeader.tsx:1:import { Link } from "react-router";
v2/src/components\layout\SiteHeader.tsx:7:      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
v2/src/components\layout\SiteHeader.tsx:10:      </Link>
v2/src/components\policy\TravelAlerts.tsx:66:    <section id="travel-alerts" aria-label="Travel alerts" className="flex flex-col gap-3">
v2/src/components\search\PlaceSearch.tsx:39:      <button
v2/src/components\search\PlaceSearch.tsx:44:      </button>
v2/src/components\map\EarthIntro.tsx:148:  return <div ref={hostRef} aria-hidden className="pointer-events-none absolute inset-0 z-40" />;
v2/src/components\map\HeroMap.tsx:28:      aria-label="China interactive map"
v2/src/components\map\HeroMap.tsx:41:        aria-live="polite"
v2/src/components\map\HeroMap.tsx:54:          <button
v2/src/components\map\HeroMap.tsx:55:            type="button"
v2/src/components\map\HeroMap.tsx:60:          </button>
v2/src/components\city\CityHero.tsx:37:        href={a.officialUrl}
v2/src/components\city\CityHero.tsx:45:            alt={isZh ? a.nameZh : a.nameEn}
v2/src/components\city\CityImagePanel.tsx:28:    <aside aria-label={isZh ? "城市代表图" : "City landmark"} className="self-start lg:sticky lg:top-24">
v2/src/components\city\CityImagePanel.tsx:35:              alt={isZh ? current.nameZh : current.nameEn}
v2/src/components\city\CityImagePanel.tsx:55:            <button
v2/src/components\city\CityImagePanel.tsx:57:              type="button"
v2/src/components\city\CityImagePanel.tsx:58:              aria-label={isZh ? a.nameZh : a.nameEn}
v2/src/components\sections\TopQuestions.tsx:30:              <button
v2/src/components\sections\TopQuestions.tsx:31:                type="button"
v2/src/components\sections\TopQuestions.tsx:32:                aria-expanded={open}
v2/src/components\sections\TopQuestions.tsx:44:                  aria-hidden
v2/src/components\sections\TopQuestions.tsx:48:              </button>
v2/src/components\city\CityIntro.tsx:109:        <div role="tablist" aria-label={isZh ? "区筛选" : "District filter"} className="flex flex-wrap gap-2">
v2/src/components\city\CityIntro.tsx:150:                href={a.officialUrl}
v2/src/components\city\CityIntro.tsx:182:    <button
v2/src/components\city\CityIntro.tsx:183:      type="button"
v2/src/components\city\CityIntro.tsx:184:      role="tab"
v2/src/components\city\CityIntro.tsx:185:      aria-selected={active}
v2/src/components\city\CityIntro.tsx:198:    </button>
v2/src/components\city\CityNav.tsx:45:      aria-label={isZh ? "城市页导航" : "City page navigation"}
v2/src/components\city\CityNav.tsx:54:                href={`#${item.id}`}
v2/src/components\sections\HistoryVideo.tsx:25:            href="https://en.chinaculture.org/a/202206/07/WS629edf41a310fd2b29e61286.html"
v2/src/components\pillar\FoodGuide.tsx:38:        <div role="tablist" className="flex flex-wrap gap-2">
v2/src/components\pillar\FoodGuide.tsx:40:            <button
v2/src/components\pillar\FoodGuide.tsx:42:              type="button"
v2/src/components\pillar\FoodGuide.tsx:43:              role="tab"
v2/src/components\pillar\FoodGuide.tsx:44:              aria-selected={activeId === city.cityId}
v2/src/components\pillar\FoodGuide.tsx:54:            </button>
v2/src/components\pillar\FoodGuide.tsx:66:              <button
v2/src/components\pillar\FoodGuide.tsx:67:                type="button"
v2/src/components\pillar\FoodGuide.tsx:72:              </button>
v2/src/components\city\CuisineDrawer.tsx:34:        aria-hidden
v2/src/components\city\CuisineDrawer.tsx:42:        role="dialog"
v2/src/components\city\CuisineDrawer.tsx:43:        aria-modal="true"
v2/src/components\city\CuisineDrawer.tsx:44:        aria-label={isZh ? "美食文化与吃法" : "Food culture and how to eat it"}
v2/src/components\city\CuisineDrawer.tsx:61:          <button
v2/src/components\city\CuisineDrawer.tsx:62:            type="button"
v2/src/components\city\CuisineDrawer.tsx:64:            aria-label={isZh ? "关闭" : "Close"}
v2/src/components\city\CuisineDrawer.tsx:67:            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
v2/src/components\city\CuisineDrawer.tsx:75:          </button>
v2/src/components\pillar\EmergencyBriefing.tsx:59:        <div role="tablist" className="flex flex-wrap gap-2">
v2/src/components\pillar\EmergencyBriefing.tsx:61:            <button
v2/src/components\pillar\EmergencyBriefing.tsx:63:              type="button"
v2/src/components\pillar\EmergencyBriefing.tsx:64:              role="tab"
v2/src/components\pillar\EmergencyBriefing.tsx:65:              aria-selected={activeId === id}
v2/src/components\pillar\EmergencyBriefing.tsx:75:            </button>
v2/src/components\pillar\EmergencyBriefing.tsx:127:          <a href={mfaConsular.url} target="_blank" rel="noreferrer" className="font-bold text-jade hover:underline">
v2/src/components\map\Province3DOverlay.tsx:29:          <button
v2/src/components\map\Province3DOverlay.tsx:30:            type="button"
v2/src/components\map\Province3DOverlay.tsx:35:          </button>
v2/src/components\map\Province3DOverlay.tsx:36:          <button
v2/src/components\map\Province3DOverlay.tsx:37:            type="button"
v2/src/components\map\Province3DOverlay.tsx:38:            aria-label={lang === "zh" ? "关闭 3D 地图" : "Close 3D map"}
v2/src/components\map\Province3DOverlay.tsx:43:          </button>
v2/src/components\map\ProvinceHitAreaLayer.tsx:18:          <button
v2/src/components\map\ProvinceHitAreaLayer.tsx:20:            type="button"
v2/src/components\map\ProvinceHitAreaLayer.tsx:21:            tabIndex={-1}
v2/src/components\map\ProvinceHitAreaLayer.tsx:23:            aria-label={lang === "zh" ? area.zh : area.en}
v2/src/components\pillar\TransportGuide.tsx:51:        <div role="tablist" aria-label="City selector" className="flex flex-wrap gap-2">
v2/src/components\pillar\TransportGuide.tsx:53:            <button
v2/src/components\pillar\TransportGuide.tsx:55:              type="button"
v2/src/components\pillar\TransportGuide.tsx:56:              role="tab"
v2/src/components\pillar\TransportGuide.tsx:57:              aria-selected={activeId === city.cityId}
v2/src/components\pillar\TransportGuide.tsx:67:            </button>
v2/src/components\map\MapPreview.tsx:19:      aria-hidden
v2/src/components\map\ProvinceInfoCard.tsx:26:      aria-label={lang === "zh" ? province.zh : province.name}
v2/src/components\map\ProvinceInfoCard.tsx:40:                <button
v2/src/components\map\ProvinceInfoCard.tsx:41:                  type="button"
v2/src/components\map\ProvinceInfoCard.tsx:47:                </button>
v2/src/components\map\ProvinceShapeLayer.tsx:41:      tabIndex={dimmed ? -1 : 0}
v2/src/components\map\ProvinceShapeLayer.tsx:42:      role="button"
v2/src/components\map\ProvinceShapeLayer.tsx:43:      aria-pressed={active}
v2/src/components\map\ProvinceShapeLayer.tsx:44:      aria-label={label}
v2/src/components\map\ProvinceShapeLayer.tsx:49:      onKeyDown={(event) => {
v2/src/components\map\ProvinceShapeLayer.tsx:116:        role="group"
v2/src/components\map\ProvinceShapeLayer.tsx:117:        aria-label="China provinces"
v2/src/components\map\SpecialRegionMarkers.tsx:31:          <button
v2/src/components\map\SpecialRegionMarkers.tsx:33:            type="button"
v2/src/components\map\SpecialRegionMarkers.tsx:34:            aria-label={lang === "zh" ? area.zh : area.en}
v2/src/components\map\SpecialRegionMarkers.tsx:41:          </button>
v2/src/components\pillar\VisaChecker.tsx:146:        href={result.applyUrl}
v2/src/components\atlas\CityList.tsx:52:      <button
v2/src/components\atlas\CityList.tsx:53:        type="button"
v2/src/components\atlas\CityList.tsx:66:      </button>
v2/src/components\atlas\CityProfile.tsx:68:        <button
v2/src/components\atlas\CityProfile.tsx:69:          type="button"
v2/src/components\atlas\CityProfile.tsx:74:        </button>
v2/src/components\atlas\ProvinceRail.tsx:12:    <aside aria-label={t("provinceLevelRegions")} className="flex flex-col gap-2">
v2/src/components\atlas\ProvinceRail.tsx:21:            <button
v2/src/components\atlas\ProvinceRail.tsx:23:              type="button"
v2/src/components\atlas\ProvinceRail.tsx:37:            </button>

 succeeded in 977ms:
v2/src\App.tsx:23:            <Route path="/guide/:topic" element={<GuidePage />} />
v2/src\App.tsx:24:            <Route path="/city/:cityId" element={<CityPage />} />
v2/src\hooks\useProvinceShapes.ts:12:      .catch((error) => {
v2/src\hooks\useCityViews.ts:19:const readCount = (cityId: string): number => {
v2/src\hooks\useCityViews.ts:21:  const stored = Number(window.localStorage.getItem(KEY_PREFIX + cityId) ?? 0);
v2/src\hooks\useCityViews.ts:25:export function useCityViewCount(cityId: string, baseViews: number): number {
v2/src\hooks\useCityViews.ts:28:    () => readCount(cityId),
v2/src\hooks\useCityViews.ts:34:export function useRecordCityView(): (cityId: string) => void {
v2/src\hooks\useCityViews.ts:35:  return useCallback((cityId: string) => {
v2/src\hooks\useCityViews.ts:37:    const next = readCount(cityId) + 1;
v2/src\hooks\useCityViews.ts:38:    window.localStorage.setItem(KEY_PREFIX + cityId, String(next));
v2/src\data\city-attractions.ts:7:  cityId: CityId;
v2/src\data\city-attractions.ts:24:    cityId: "beijing",
v2/src\data\city-attractions.ts:38:    cityId: "beijing",
v2/src\data\city-attractions.ts:52:    cityId: "beijing",
v2/src\data\city-attractions.ts:66:    cityId: "beijing",
v2/src\data\city-attractions.ts:80:    cityId: "beijing",
v2/src\data\city-attractions.ts:94:    cityId: "beijing",
v2/src\data\city-attractions.ts:100:    whyEn: "The world's third-largest public square (440,000 sq m) and the symbolic centre of the People's Republic. Daily flag-raising ceremony at sunrise, flag-lowering at sunset. Free entry but mandatory advance reservation (1–7 days ahead) — walk-up visitors are turned back at the security checkpoint.",
v2/src\data\city-attractions.ts:110:    cityId: "shanghai",
v2/src\data\city-attractions.ts:124:    cityId: "shanghai",
v2/src\data\city-attractions.ts:138:    cityId: "shanghai",
v2/src\data\city-attractions.ts:152:    cityId: "shanghai",
v2/src\data\city-attractions.ts:166:    cityId: "shanghai",
v2/src\data\city-attractions.ts:180:    cityId: "shanghai",
v2/src\data\city-attractions.ts:186:    whyEn: "The strongest single stop for ancient Chinese art in central Shanghai: bronzes, ceramics, jade, calligraphy, painting, seals, furniture. Since 2025-09 individual visitors no longer need reservations for the People's Square site during normal periods — entry with passport. Closed Mondays.",
v2/src\data\city-attractions.ts:196:    cityId: "guangzhou",
v2/src\data\city-attractions.ts:210:    cityId: "guangzhou",
v2/src\data\city-attractions.ts:224:    cityId: "guangzhou",
v2/src\data\city-attractions.ts:238:    cityId: "guangzhou",
v2/src\data\city-attractions.ts:244:    whyEn: "The Five Rams Statue (1959, 11 m, 130+ pieces of granite) is Guangzhou's civic symbol, rooted in the legend of five celestial rams who brought rice seeds to bless the city. Yuexiu Park (860,000 sq m) is the city's largest urban park and contains Zhenhai Tower (Ming-dynasty watchtower, now Guangzhou Museum) and remnants of the ancient city wall. Free entry; packed with locals doing tai chi from 6 AM.",
v2/src\data\city-attractions.ts:252:    cityId: "guangzhou",
v2/src\data\city-attractions.ts:258:    whyEn: "The illuminated-skyline cruise is Guangzhou's signature evening activity. The 60–90 min route passes below Canton Tower, along Zhujiang New Town's glittering skyline, past the colonial Shamian shores, and through bridges lit in colour. The 8 PM departure catches the full LED show on Canton Tower.",
v2/src\data\city-attractions.ts:266:    cityId: "guangzhou",
v2/src\data\city-attractions.ts:282:    cityId: "shenzhen",
v2/src\data\city-attractions.ts:296:    cityId: "shenzhen",
v2/src\data\city-attractions.ts:302:    whyEn: "Shenzhen's easiest creative-neighbourhood stop: converted industrial buildings, cafes, design shops, small galleries, bookstores, and periodic markets. Pairs well with the OCT theme-park cluster and works as a lower-pressure alternative to paid theme parks. Public district, free entry; shops Tuesday–Sunday.",
v2/src\data\city-attractions.ts:310:    cityId: "shenzhen",
v2/src\data\city-attractions.ts:324:    cityId: "shenzhen",
v2/src\data\city-attractions.ts:338:    cityId: "shenzhen",
v2/src\data\city-attractions.ts:352:    cityId: "shenzhen",
v2/src\data\city-attractions.ts:366:export function attractionsByCity(cityId: CityId): Attraction[] {
v2/src\data\city-attractions.ts:367:  return cityAttractions.filter((a) => a.cityId === cityId);
v2/src\data\atlas.ts:5:  province: string;
v2/src\data\atlas.ts:42:        province: "Beijing",
v2/src\data\atlas.ts:73:        province: "Shanghai",
v2/src\data\atlas.ts:77:          "A practical entry point for understanding Jiangnan culture, port-city growth, modern urban life, and Shanghai's role in global exchange.",
v2/src\data\atlas.ts:80:          "Shanghai grew from a Jiangnan county and port into a treaty-port metropolis, then a central city of modern industry, finance, publishing, cinema, and urban culture.",
v2/src\data\atlas.ts:103:        province: "Shaanxi",
v2/src\data\atlas.ts:124:        province: "Shaanxi",
v2/src\data\atlas.ts:144:        province: "Shaanxi",
v2/src\data\atlas.ts:173:        province: "Henan",
v2/src\data\atlas.ts:176:        museumRole: "A strong entry point for the Central Plains, ancient capitals, ritual bronzes, early states, and Buddhist art.",
v2/src\data\atlas.ts:193:        province: "Henan",
v2/src\data\atlas.ts:213:        province: "Henan",
v2/src\data\atlas.ts:216:        museumRole: "The direct entry point for oracle bones, Shang royal archaeology, bronze culture, and early Chinese writing.",
v2/src\data\atlas.ts:242:        province: "Jiangsu",
v2/src\data\atlas.ts:262:        province: "Jiangsu",
v2/src\data\atlas.ts:265:        museumRole: "A concise entry into Wu culture, literati gardens, canal trade, silk, painting, and urban refinement.",
v2/src\data\atlas.ts:282:        province: "Jiangsu",
v2/src\data\atlas.ts:311:        province: "Sichuan",
v2/src\data\atlas.ts:332:        province: "Sichuan",
v2/src\data\atlas.ts:335:        museumRole: "A practical entry for river geography, Buddhist carving, local trade, and the wider Emei-Leshan heritage landscape.",
v2/src\data\atlas.ts:356:  provinceId: string;
v2/src\data\atlas.ts:357:  cityId?: string;
v2/src\data\atlas.ts:362:  { zh: "东城区", en: "Dongcheng District", type: "county", provinceId: "beijing", cityId: "beijing-city", aliases: ["dongcheng"] },
v2/src\data\atlas.ts:363:  { zh: "延庆区", en: "Yanqing District", type: "county", provinceId: "beijing", cityId: "beijing-city", aliases: ["yanqing"] },
v2/src\data\atlas.ts:364:  { zh: "古北口镇", en: "Gubeikou Town", type: "town", provinceId: "beijing", cityId: "beijing-city", aliases: ["古北口", "gubeikou"] },
v2/src\data\atlas.ts:365:  { zh: "爨底下村", en: "Cuandixia Village", type: "village", provinceId: "beijing", cityId: "beijing-city", aliases: ["cuandixia", "爨底下"] },
v2/src\data\atlas.ts:366:  { zh: "黄浦区", en: "Huangpu District", type: "county", provinceId: "shanghai", cityId: "shanghai-city", aliases: ["huangpu"] },
v2/src\data\atlas.ts:367:  { zh: "朱家角镇", en: "Zhujiajiao Town", type: "town", provinceId: "shanghai", cityId: "shanghai-city", aliases: ["zhujiajiao", "朱家角"] },
v2/src\data\atlas.ts:368:  { zh: "雁塔区", en: "Yanta District", type: "county", provinceId: "shaanxi", cityId: "xian", aliases: ["yanta"] },
v2/src\data\atlas.ts:369:  { zh: "临潼区", en: "Lintong District", type: "county", provinceId: "shaanxi", cityId: "xian", aliases: ["lintong"] },
v2/src\data\atlas.ts:370:  { zh: "秦淮区", en: "Qinhuai District", type: "county", provinceId: "jiangsu", cityId: "nanjing", aliases: ["qinhuai"] },
v2/src\data\atlas.ts:371:  { zh: "昆山市", en: "Kunshan City", type: "county", provinceId: "jiangsu", cityId: "suzhou", aliases: ["kunshan"] },
v2/src\data\atlas.ts:372:  { zh: "周庄镇", en: "Zhouzhuang Town", type: "town", provinceId: "jiangsu", cityId: "suzhou", aliases: ["zhouzhuang", "周庄"] },
v2/src\data\atlas.ts:373:  { zh: "同里镇", en: "Tongli Town", type: "town", provinceId: "jiangsu", cityId: "suzhou", aliases: ["tongli", "同里"] },
v2/src\data\atlas.ts:374:  { zh: "广陵区", en: "Guangling District", type: "county", provinceId: "jiangsu", cityId: "yangzhou", aliases: ["guangling"] },
v2/src\data\atlas.ts:375:  { zh: "都江堰市", en: "Dujiangyan City", type: "county", provinceId: "sichuan", cityId: "chengdu", aliases: ["dujiangyan", "都江堰"] },
v2/src\data\atlas.ts:376:  { zh: "洛带镇", en: "Luodai Town", type: "town", provinceId: "sichuan", cityId: "chengdu", aliases: ["luodai", "洛带"] },
v2/src\data\atlas.ts:377:  { zh: "黄龙溪镇", en: "Huanglongxi Town", type: "town", provinceId: "sichuan", cityId: "chengdu", aliases: ["huanglongxi", "黄龙溪"] },
v2/src\data\atlas.ts:378:  { zh: "峨眉山市", en: "Emeishan City", type: "county", provinceId: "sichuan", cityId: "leshan", aliases: ["emeishan", "峨眉山"] }
v2/src\data\atlas.ts:381:export const provinceAttractionSeed: Record<string, Array<{ zh: string; en: string }>> = {
v2/src\data\entry-policies.ts:3:export type UnilateralCountry = {
v2/src\data\entry-policies.ts:4:  countryEn: string;
v2/src\data\entry-policies.ts:5:  countryZh: string;
v2/src\data\entry-policies.ts:16:export const unilateralVisaFreeCountries: UnilateralCountry[] = [
v2/src\data\entry-policies.ts:18:  { countryEn: "Andorra", countryZh: "安道尔", region: "Europe" },
v2/src\data\entry-policies.ts:19:  { countryEn: "Austria", countryZh: "奥地利", region: "Europe" },
v2/src\data\entry-policies.ts:20:  { countryEn: "Belgium", countryZh: "比利时", region: "Europe" },
v2/src\data\entry-policies.ts:21:  { countryEn: "Bulgaria", countryZh: "保加利亚", region: "Europe" },
v2/src\data\entry-policies.ts:22:  { countryEn: "Croatia", countryZh: "克罗地亚", region: "Europe" },
v2/src\data\entry-policies.ts:23:  { countryEn: "Cyprus", countryZh: "塞浦路斯", region: "Europe" },
v2/src\data\entry-policies.ts:24:  { countryEn: "Denmark", countryZh: "丹麦", region: "Europe" },
v2/src\data\entry-policies.ts:25:  { countryEn: "Estonia", countryZh: "爱沙尼亚", region: "Europe" },
v2/src\data\entry-policies.ts:26:  { countryEn: "Finland", countryZh: "芬兰", region: "Europe" },
v2/src\data\entry-policies.ts:27:  { countryEn: "France", countryZh: "法国", region: "Europe" },
v2/src\data\entry-policies.ts:28:  { countryEn: "Germany", countryZh: "德国", region: "Europe" },
v2/src\data\entry-policies.ts:29:  { countryEn: "Greece", countryZh: "希腊", region: "Europe" },
v2/src\data\entry-policies.ts:30:  { countryEn: "Hungary", countryZh: "匈牙利", region: "Europe" },
v2/src\data\entry-policies.ts:31:  { countryEn: "Iceland", countryZh: "冰岛", region: "Europe" },
v2/src\data\entry-policies.ts:32:  { countryEn: "Ireland", countryZh: "爱尔兰", region: "Europe" },
v2/src\data\entry-policies.ts:33:  { countryEn: "Italy", countryZh: "意大利", region: "Europe" },
v2/src\data\entry-policies.ts:34:  { countryEn: "Latvia", countryZh: "拉脱维亚", region: "Europe" },
v2/src\data\entry-policies.ts:35:  { countryEn: "Liechtenstein", countryZh: "列支敦士登", region: "Europe" },
v2/src\data\entry-policies.ts:36:  { countryEn: "Luxembourg", countryZh: "卢森堡", region: "Europe" },
v2/src\data\entry-policies.ts:37:  { countryEn: "Malta", countryZh: "马耳他", region: "Europe" },
v2/src\data\entry-policies.ts:38:  { countryEn: "Monaco", countryZh: "摩纳哥", region: "Europe" },
v2/src\data\entry-policies.ts:39:  { countryEn: "Montenegro", countryZh: "黑山", region: "Europe" },
v2/src\data\entry-policies.ts:40:  { countryEn: "Netherlands", countryZh: "荷兰", region: "Europe" },
v2/src\data\entry-policies.ts:41:  { countryEn: "North Macedonia", countryZh: "北马其顿", region: "Europe" },
v2/src\data\entry-policies.ts:42:  { countryEn: "Norway", countryZh: "挪威", region: "Europe" },
v2/src\data\entry-policies.ts:43:  { countryEn: "Poland", countryZh: "波兰", region: "Europe" },
v2/src\data\entry-policies.ts:44:  { countryEn: "Portugal", countryZh: "葡萄牙", region: "Europe" },
v2/src\data\entry-policies.ts:45:  { countryEn: "Romania", countryZh: "罗马尼亚", region: "Europe" },
v2/src\data\entry-policies.ts:46:  { countryEn: "Russian Federation", countryZh: "俄罗斯", region: "Europe" },
v2/src\data\entry-policies.ts:47:  { countryEn: "Slovakia", countryZh: "斯洛伐克", region: "Europe" },
v2/src\data\entry-policies.ts:48:  { countryEn: "Slovenia", countryZh: "斯洛文尼亚", region: "Europe" },
v2/src\data\entry-policies.ts:49:  { countryEn: "Spain", countryZh: "西班牙", region: "Europe" },
v2/src\data\entry-policies.ts:50:  { countryEn: "Sweden", countryZh: "瑞典", region: "Europe" },
v2/src\data\entry-policies.ts:51:  { countryEn: "Switzerland", countryZh: "瑞士", region: "Europe" },
v2/src\data\entry-policies.ts:52:  { countryEn: "United Kingdom", countryZh: "英国", region: "Europe" },
v2/src\data\entry-policies.ts:54:  { countryEn: "Australia", countryZh: "澳大利亚", region: "Oceania" },
v2/src\data\entry-policies.ts:55:  { countryEn: "New Zealand", countryZh: "新西兰", region: "Oceania" },
v2/src\data\entry-policies.ts:57:  { countryEn: "Bahrain", countryZh: "巴林", region: "Asia" },
v2/src\data\entry-policies.ts:58:  { countryEn: "Brunei Darussalam", countryZh: "文莱", region: "Asia" },
v2/src\data\entry-policies.ts:59:  { countryEn: "Japan", countryZh: "日本", region: "Asia" },
v2/src\data\entry-policies.ts:60:  { countryEn: "Kuwait", countryZh: "科威特", region: "Asia" },
v2/src\data\entry-policies.ts:61:  { countryEn: "Oman", countryZh: "阿曼", region: "Asia" },
v2/src\data\entry-policies.ts:62:  { countryEn: "Republic of Korea", countryZh: "韩国", region: "Asia" },
v2/src\data\entry-policies.ts:63:  { countryEn: "Saudi Arabia", countryZh: "沙特阿拉伯", region: "Asia" },
v2/src\data\entry-policies.ts:65:  { countryEn: "Argentina", countryZh: "阿根廷", region: "Americas" },
v2/src\data\entry-policies.ts:66:  { countryEn: "Brazil", countryZh: "巴西", region: "Americas" },
v2/src\data\entry-policies.ts:67:  { countryEn: "Canada", countryZh: "加拿大", region: "Americas" },
v2/src\data\entry-policies.ts:68:  { countryEn: "Chile", countryZh: "智利", region: "Americas" },
v2/src\data\entry-policies.ts:69:  { countryEn: "Peru", countryZh: "秘鲁", region: "Americas" },
v2/src\data\entry-policies.ts:70:  { countryEn: "Uruguay", countryZh: "乌拉圭", region: "Americas" }
v2/src\data\entry-policies.ts:80: * Source: NIA transit visa-free policy page (2023-10-19) for the country list
v2/src\data\entry-policies.ts:81: * Source: State Council 2025-11-04 announcement for the headline (55 countries, 65 ports, 24 provinces, 240 hours)
v2/src\data\entry-policies.ts:85: * NIA's 2023-10-19 page lists the country pool used for transit visa-free.
v2/src\data\entry-policies.ts:111:  province: string;
v2/src\data\entry-policies.ts:122:  { city: "Beijing", cityZh: "北京", portEn: "Capital International Airport", portZh: "首都国际机场", province: "Beijing", maxHours: 240 },
v2/src\data\entry-policies.ts:123:  { city: "Beijing", cityZh: "北京", portEn: "Daxing International Airport", portZh: "大兴国际机场", province: "Beijing", maxHours: 240 },
v2/src\data\entry-policies.ts:124:  { city: "Shanghai", cityZh: "上海", portEn: "Pudong International Airport", portZh: "浦东国际机场", province: "Shanghai", maxHours: 240 },
v2/src\data\entry-policies.ts:125:  { city: "Shanghai", cityZh: "上海", portEn: "Hongqiao International Airport", portZh: "虹桥国际机场", province: "Shanghai", maxHours: 240 },
v2/src\data\entry-policies.ts:126:  { city: "Guangzhou", cityZh: "广州", portEn: "Baiyun International Airport", portZh: "白云国际机场", province: "Guangdong", maxHours: 240 },
v2/src\data\entry-policies.ts:127:  { city: "Shenzhen", cityZh: "深圳", portEn: "Bao'an International Airport", portZh: "宝安国际机场", province: "Guangdong", maxHours: 240 }
v2/src\data\entry-policies.ts:136:  thirdCountryRequired: true,
v2/src\data\entry-policies.ts:140:export const onlineEntryCard = {
v2/src\data\entry-policies.ts:144:  sourceIds: ["nia-online-entry-card", "nia-card-fraud-warning"]
v2/src\data\entry-policies.ts:153:const unilateralSet = new Set(unilateralVisaFreeCountries.map((c) => c.countryEn));
v2/src\data\entry-policies.ts:170:export function checkEligibility(country: string): EligibilityResult {
v2/src\data\entry-policies.ts:171:  const canonical = normalize(country);
v2/src\data\entry-policies.ts:173:  const transitCanonical = transitSet.has(canonical) || transitSet.has(country);
v2/src\data\entry-policies.ts:206:export const entryPolicySourceIds: string[] = [
v2/src\data\entry-policies.ts:209:  ...onlineEntryCard.sourceIds,
v2/src\data\entry-policies.ts:211:  ...pitfallSourceIds("entry")
v2/src\data\emergency.ts:11:  cityId: CityId;
v2/src\data\emergency.ts:24:    cityId: "beijing",
v2/src\data\emergency.ts:35:    cityId: "beijing",
v2/src\data\emergency.ts:46:    cityId: "shanghai",
v2/src\data\emergency.ts:57:    cityId: "shanghai",
v2/src\data\emergency.ts:68:    cityId: "guangzhou",
v2/src\data\emergency.ts:79:    cityId: "guangzhou",
v2/src\data\emergency.ts:90:    cityId: "shenzhen",
v2/src\data\emergency.ts:100:    cityId: "shenzhen",
v2/src\data\emergency.ts:112:  cityId: CityId;
v2/src\data\emergency.ts:122:    cityId: "beijing",
v2/src\data\emergency.ts:130:    cityId: "shanghai",
v2/src\data\emergency.ts:138:    cityId: "guangzhou",
v2/src\data\emergency.ts:146:    cityId: "shenzhen",
v2/src\data\emergency.ts:156:  country: string;
v2/src\data\emergency.ts:157:  countryZh: string;
v2/src\data\emergency.ts:167:    country: "United States",
v2/src\data\emergency.ts:168:    countryZh: "美国",
v2/src\data\emergency.ts:176:    country: "United Kingdom",
v2/src\data\emergency.ts:177:    countryZh: "英国",
v2/src\data\emergency.ts:185:    country: "Canada",
v2/src\data\emergency.ts:186:    countryZh: "加拿大",
v2/src\data\emergency.ts:194:    country: "Australia",
v2/src\data\emergency.ts:195:    countryZh: "澳大利亚",
v2/src\data\emergency.ts:203:    country: "Japan",
v2/src\data\emergency.ts:204:    countryZh: "日本",
v2/src\data\emergency.ts:222:export function emergencySourceIds(cityId?: CityId): string[] {
v2/src\data\emergency.ts:227:  if (cityId) {
v2/src\data\emergency.ts:228:    hospitals.filter((h) => h.cityId === cityId).forEach((h) => ids.add(h.sourceId));
v2/src\data\emergency.ts:229:    const ch = cityHotlines.find((h) => h.cityId === cityId);
v2/src\data\emergency.ts:236:  pitfallSourceIds("emergency", cityId).forEach((id) => ids.add(id));
v2/src\components\atlas\AtlasSection.tsx:9:  const { province } = useAtlas();
v2/src\components\atlas\AtlasSection.tsx:25:            <h3 className="text-lg font-bold">{province ? province.name : "China"}</h3>
v2/src\components\atlas\AtlasSection.tsx:27:          <CityList cities={province?.cities ?? []} />
v2/src\data\food.ts:4:  cityId: CityId;
v2/src\data\food.ts:20:    cityId: "beijing",
v2/src\data\food.ts:56:    cityId: "shanghai",
v2/src\data\food.ts:64:        en: "Shanghainese cooking leans sweet — soy reduces with rock sugar until it glazes pork belly mahogany red; sweet-soy ribs are a holiday staple; drunken chicken is poached cold and steeped in shaoxing wine for hours. Xiaolongbao is the everyday lunch icon — eighteen pleats, all about the broth inside. The technique: bite a tiny hole at the top, sip the broth out, then eat the wrapper and filling. Burning your tongue on the first try is a rite of passage. Compared with Beijing, Shanghainese tabletop manners feel gentler — smaller plates, more sharing, less ceremony. International dining (French, Japanese, Italian) has real depth here that you won't find as easily elsewhere in mainland China.",
v2/src\data\food.ts:92:    cityId: "guangzhou",
v2/src\data\food.ts:133:    cityId: "shenzhen",
v2/src\data\food.ts:141:        en: "Shenzhen has no native cuisine of its own — the city is 30 million people from every province cooking what they grew up with. The Hakka tradition that pre-dates the boom leans on salt and preservation: salt-baked chicken roasts whole inside coarse salt; stuffed tofu has minced pork tucked into bean curd squares; pounded fish-paste dishes are a daily staple in older Hakka neighbourhoods. The other 80% of the food scene is Sichuan, Hunan, Northeastern, Cantonese, and lately Yunnan — each clustered where its migrant wave settled. The newest layer is Hong Kong-style cha chaan teng (tea restaurants), recognisable by bilingual menus, stainless-steel milk-tea kettles, and meals that mix Cantonese, British, and Southeast Asian ideas (egg tarts, French toast, Hainan chicken rice). Spice tolerance varies wildly between restaurants — ask for 'mild' if you mean it.",
v2/src\data\food.ts:172:export function foodSourceIds(cityId?: CityId): string[] {
v2/src\data\food.ts:174:  const cities = cityId ? cityFood.filter((c) => c.cityId === cityId) : cityFood;
v2/src\data\food.ts:181:  pitfallSourceIds("food", cityId).forEach((id) => ids.add(id));
v2/src\data\i18n.ts:14:    mapHintPending: "This province is listed on the map. City and museum data are not connected yet.",
v2/src\data\i18n.ts:21:    atlasBody: "Click a province-level region to list cities. City pins open museum-first profiles.",
v2/src\data\i18n.ts:22:    provinceMode: "Province",
v2/src\data\i18n.ts:24:    provinceLevelRegions: "Province-level regions",
v2/src\data\i18n.ts:27:    scenicEntry: "Scenic entry",
v2/src\data\i18n.ts:28:    museumEntry: "Museum entry",
v2/src\data\i18n.ts:29:    provinceDataPending: "Famous attraction data for this province is not connected yet.",
v2/src\data\i18n.ts:33:      "The city profile will show the museum entry point, real visitor signals, official source status, and historical direction.",
v2/src\data\i18n.ts:88:    provinceMode: "省份",
v2/src\data\i18n.ts:90:    provinceLevelRegions: "省级地区",
v2/src\data\i18n.ts:93:    scenicEntry: "景区入口",
v2/src\data\i18n.ts:94:    museumEntry: "博物馆入口",
v2/src\data\i18n.ts:95:    provinceDataPending: "该省著名景点数据尚未接入。",
v2/src\data\i18n.ts:159:    province: "Province",
v2/src\data\i18n.ts:168:    province: "省级地区",
v2/src\components\atlas\CityProfile.tsx:27:          <span className="text-xs font-bold uppercase tracking-widest text-muted">{city.province}</span>
v2/src\components\atlas\ProvinceRail.tsx:12:    <aside aria-label={t("provinceLevelRegions")} className="flex flex-col gap-2">
v2/src\components\atlas\ProvinceRail.tsx:14:        <strong className="text-xs font-bold uppercase tracking-widest text-muted">{t("provinceLevelRegions")}</strong>
v2/src\data\map-sources.ts:15:export const provinceHitAreas: ProvinceHitArea[] = [
v2/src\data\map-sources.ts:54:export const provinceTextureSrc = (provinceId: string) =>
v2/src\data\map-sources.ts:55:  `/assets/province-map-textures/${provinceId}.png`;
v2/src\components\city\CityHero.tsx:6:type Props = { cityId: CityId };
v2/src\components\city\CityHero.tsx:8:export default function CityHero({ cityId }: Props) {
v2/src\components\city\CityHero.tsx:11:  const attractions = attractionsByCity(cityId);
v2/src\components\city\CityHero.tsx:46:            loading="lazy"
v2/src\lib\shapes.ts:15:    cached = fetch("/assets/china-province-shapes.json")
v2/src\lib\shapes.ts:17:        if (!response.ok) throw new Error("Failed to load province shapes");
v2/src\lib\shapes.ts:20:      .then((data) => Object.freeze((data?.provinces ?? {}) as Record<string, ProvinceShape>));
v2/src\lib\shapes.ts:53:  const provinceCenterX = (b.left + b.right) / 2;
v2/src\lib\shapes.ts:54:  const provinceCenterY = -(b.top + b.bottom) / 2;
v2/src\lib\shapes.ts:55:  const provinceWidth = b.right - b.left;
v2/src\lib\shapes.ts:56:  const provinceHeight = b.top - b.bottom;
v2/src\lib\shapes.ts:57:  const fitX = viewBox.width / provinceWidth;
v2/src\lib\shapes.ts:58:  const fitY = viewBox.height / provinceHeight;
v2/src\lib\shapes.ts:63:    tx: viewCenterX - provinceCenterX * scale,
v2/src\lib\shapes.ts:64:    ty: viewCenterY - provinceCenterY * scale,
v2/src\components\map\EarthIntro.tsx:12:// prime meridian at horizontal centre, Africa centred). Three.js SphereGeometry default UV:
v2/src\components\map\EarthIntro.tsx:59:      new THREE.SphereGeometry(1, 96, 64),
v2/src\components\map\EarthIntro.tsx:69:      new THREE.SphereGeometry(1.05, 64, 32),
v2/src\components\map\EarthIntro.tsx:139:      earth.geometry.dispose();
v2/src\components\map\EarthIntro.tsx:141:      atmosphere.geometry.dispose();
v2/src\lib\search.ts:1:import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
v2/src\lib\search.ts:2:import { provinceHitAreas } from "../data/map-sources";
v2/src\lib\search.ts:7:  type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
v2/src\lib\search.ts:8:  provinceId: string;
v2/src\lib\search.ts:9:  cityId?: string;
v2/src\lib\search.ts:26:    const key = `${record.type}|${record.provinceId}|${record.cityId ?? ""}|${normalize(record.zh)}|${normalize(record.en)}`;
v2/src\lib\search.ts:32:  atlasData.forEach((province) => {
v2/src\lib\search.ts:34:      zh: province.zh,
v2/src\lib\search.ts:35:      en: province.name,
v2/src\lib\search.ts:36:      type: "province",
v2/src\lib\search.ts:37:      provinceId: province.id,
v2/src\lib\search.ts:38:      aliases: [province.zh, province.name, province.id]
v2/src\lib\search.ts:41:    province.cities.forEach((city) => {
v2/src\lib\search.ts:46:        provinceId: province.id,
v2/src\lib\search.ts:47:        cityId: city.id,
v2/src\lib\search.ts:48:        aliases: [city.zh, city.name, city.id, city.province]
v2/src\lib\search.ts:62:          provinceId: province.id,
v2/src\lib\search.ts:63:          cityId: city.id,
v2/src\lib\search.ts:74:          provinceId: province.id,
v2/src\lib\search.ts:75:          cityId: city.id,
v2/src\lib\search.ts:82:  provinceHitAreas.forEach((area) => {
v2/src\lib\search.ts:86:      type: "province",
v2/src\lib\search.ts:87:      provinceId: area.id,
v2/src\lib\search.ts:92:  Object.entries(provinceAttractionSeed).forEach(([provinceId, attractions]) => {
v2/src\lib\search.ts:98:        provinceId,
v2/src\lib\search.ts:109:      provinceId: item.provinceId,
v2/src\lib\search.ts:110:      cityId: item.cityId,
v2/src\components\policy\TravelAlerts.tsx:4:  onlineEntryCard,
v2/src\components\policy\TravelAlerts.tsx:8:} from "../../data/entry-policies";
v2/src\components\policy\TravelAlerts.tsx:40:        bodyEn: `Effective ${transitPolicy.effectiveDate}. Covers ${transitPolicy.totalCountries} countries across ${transitPolicy.totalPorts} ports / ${transitPolicy.provincialRegions} provincial regions. Onward third-country ticket required.`,
v2/src\components\policy\TravelAlerts.tsx:45:        id: "online-entry-card",
v2/src\components\policy\TravelAlerts.tsx:47:        titleEn: "Online entry card now available — beware fake sites",
v2/src\components\policy\TravelAlerts.tsx:49:        bodyEn: `Free pre-fill at the official NIA portal since ${onlineEntryCard.effectiveDate}. Kiosk and paper card remain available at the port.`,
v2/src\components\policy\TravelAlerts.tsx:50:        bodyZh: `自 ${onlineEntryCard.effectiveDate} 起在国家移民管理局官网免费预填；未提前填可在口岸设备或纸卡补填。`,
v2/src\components\policy\TravelAlerts.tsx:51:        sourceId: onlineEntryCard.sourceIds[0]
v2/src\components\policy\TravelAlerts.tsx:58:        bodyEn: `Current ${unilateralVisaFreeCountries.length}-country list runs until ${UNILATERAL_EXPIRY}. Re-verify NIA before booking trips after that date.`,
v2/src\data\phase2-preview.ts:64:  topic: string;
v2/src\data\phase2-preview.ts:82:    topic: "Transport",
v2/src\data\phase2-preview.ts:98:    topic: "Food / Allergy",
v2/src\data\phase2-preview.ts:114:    topic: "Transport",
v2/src\data\phase2-preview.ts:131:  authorCountry: string;
v2/src\data\phase2-preview.ts:145:    authorCountry: "ES",
v2/src\data\phase2-preview.ts:157:    authorCountry: "DE",
v2/src\data\phase2-preview.ts:161:    textEn: "PSA for fellow Germans: do NOT try to register WeChat after landing — German T-Mobile roaming SMS just doesn't deliver in China. I was stuck for 6 hours. My hotel concierge eventually did the friend-scan in 30 seconds. Set this up before boarding next time.",
v2/src\data\phase2-preview.ts:209:    bodyEn: "Approved → published with city tag, country code, and \"visitor note · authored by [alias] · not officially verified\" badge. Rejected → email with reason.",
v2/src\data\practical-other.ts:3:export type PillarId = "entry" | "transport" | "food" | "emergency";
v2/src\data\practical-other.ts:19:    id: "entry-third-country-rule",
v2/src\data\practical-other.ts:20:    pillar: "entry",
v2/src\data\practical-other.ts:21:    titleEn: "240-hour transit: onward ticket must leave to a DIFFERENT country",
v2/src\data\practical-other.ts:28:    id: "entry-clock-immigration",
v2/src\data\practical-other.ts:29:    pillar: "entry",
v2/src\data\practical-other.ts:37:    id: "entry-digital-card",
v2/src\data\practical-other.ts:38:    pillar: "entry",
v2/src\data\practical-other.ts:46:    id: "entry-wrong-queue",
v2/src\data\practical-other.ts:47:    pillar: "entry",
v2/src\data\practical-other.ts:56:    id: "entry-extension-fail",
v2/src\data\practical-other.ts:57:    pillar: "entry",
v2/src\data\practical-other.ts:65:    id: "entry-overstay-ban",
v2/src\data\practical-other.ts:66:    pillar: "entry",
v2/src\data\practical-other.ts:67:    titleEn: "Overstay penalty = entry ban, not just a fine",
v2/src\data\practical-other.ts:69:    bodyEn: "Overstays beyond a few days trigger a 1–5 year re-entry ban PLUS fines from CNY 500/day. Don't gamble on the last day.",
v2/src\data\practical-other.ts:74:    id: "entry-unlicensed-accom",
v2/src\data\practical-other.ts:75:    pillar: "entry",
v2/src\data\practical-other.ts:83:    id: "entry-police-register-24h",
v2/src\data\practical-other.ts:84:    pillar: "entry",
v2/src\data\practical-other.ts:359:export function pitfallsForPillar(pillar: PillarId, cityId?: CityId): Pitfall[] {
v2/src\data\practical-other.ts:363:    if (!cityId) return true;
v2/src\data\practical-other.ts:364:    return p.cityScope.includes(cityId);
v2/src\data\practical-other.ts:368:export function pitfallSourceIds(pillar?: PillarId, cityId?: CityId): string[] {
v2/src\data\practical-other.ts:369:  const items = pillar ? pitfallsForPillar(pillar, cityId) : pitfalls;
v2/src\store\language.ts:14:  if (!value) throw new Error("useLang must be used within <LanguageProvider>");
v2/src\pages\CityPage.tsx:18:  const { cityId } = useParams<{ cityId: string }>();
v2/src\pages\CityPage.tsx:22:  if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
v2/src\pages\CityPage.tsx:31:  const id = cityId as CityId;
v2/src\pages\CityPage.tsx:48:          <CityIntro cityId={id} />
v2/src\pages\CityPage.tsx:50:          <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
v2/src\pages\CityPage.tsx:51:          <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>
v2/src\pages\CityPage.tsx:52:          <section id="food" className="scroll-mt-24"><FoodGuide cityId={id} /></section>
v2/src\pages\CityPage.tsx:53:          <section id="emergency" className="scroll-mt-24"><EmergencyBriefing cityId={id} /></section>
v2/src\pages\CityPage.tsx:54:          <section id="portals" className="scroll-mt-24"><CityFurtherReading cityId={id} /></section>
v2/src\pages\CityPage.tsx:76:        <CityImagePanel cityId={id} />
v2/src\data\payments.ts:99:    id: "card-fallback",
v2/src\data\payments.ts:109:  cityId: CityId;
v2/src\data\payments.ts:117:    cityId: "beijing",
v2/src\data\payments.ts:134:    cityId: "shanghai",
v2/src\data\payments.ts:156:    cityId: "guangzhou",
v2/src\data\payments.ts:173:    cityId: "shenzhen",
v2/src\data\payments.ts:198:export function paymentsSourceIds(cityId?: CityId): string[] {
v2/src\data\payments.ts:205:  const cities = cityId ? cityPaymentNotes.filter((c) => c.cityId === cityId) : cityPaymentNotes;
v2/src\pages\AskPage.tsx:63:                    {qa.topic}
v2/src\pages\AskPage.tsx:114:                : "China SIMs are real-name registered with the Ministry of IT at activation. A +86 OTP is a soft but meaningful signal that filters out the vast majority of non-China users."}
v2/src\data\practical-payments.ts:62:    bodyEn: "International roaming SMS into China is unreliable and eSIM data access does not guarantee SMS delivery. Complete WeChat registration on home-country signal, not after landing.",
v2/src\data\practical-payments.ts:103:    bodyEn: "WeChat charges ~$0.05 USD to validate the card during binding. This tiny charge is the most common reason the binding fails. If you see the charge get rejected, immediately approve it in your banking app and retry the binding within the same session.",
v2/src\store\atlas.ts:3:import { provinceHitAreas } from "../data/map-sources";
v2/src\store\atlas.ts:12:  | { type: "selectProvince"; provinceId: string | null }
v2/src\store\atlas.ts:13:  | { type: "selectPlace"; provinceId: string; cityId: string | null }
v2/src\store\atlas.ts:28:        selectedProvinceId: action.provinceId,
v2/src\store\atlas.ts:30:        is3DEnabled: Boolean(action.provinceId)
v2/src\store\atlas.ts:33:      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
v2/src\store\atlas.ts:54:  const area = provinceHitAreas.find((a) => a.id === id);
v2/src\store\atlas.ts:60:const findCity = (province: ProvinceRecord | null, cityId: string | null): CityRecord | null => {
v2/src\store\atlas.ts:61:  if (!province || !cityId) return null;
v2/src\store\atlas.ts:62:  return province.cities.find((c) => c.id === cityId) ?? null;
v2/src\store\atlas.ts:67:  if (!ctx) throw new Error("useAtlas must be used within <AtlasProvider>");
v2/src\store\atlas.ts:69:  const province = findProvince(state.selectedProvinceId);
v2/src\store\atlas.ts:70:  const city = findCity(province, state.selectedCityId);
v2/src\store\atlas.ts:73:    province,
v2/src\store\atlas.ts:75:    selectProvince: (provinceId: string | null) => dispatch({ type: "selectProvince", provinceId }),
v2/src\store\atlas.ts:76:    selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
v2/src\store\atlas.ts:77:    selectCity: (cityId: string | null) =>
v2/src\store\atlas.ts:79:        ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })
v2/src\store\atlas.ts:80:        : dispatch({ type: "selectProvince", provinceId: null }),
v2/src\components\common\PracticalBlock.tsx:6:  entry: { en: "What to know before landing", zh: "落地前要知道的事" },
v2/src\components\common\PracticalBlock.tsx:12:type Props = { pillar: PillarId; cityId?: CityId };
v2/src\components\common\PracticalBlock.tsx:14:export default function PracticalBlock({ pillar, cityId }: Props) {
v2/src\components\common\PracticalBlock.tsx:17:  const items = pitfallsForPillar(pillar, cityId);
v2/src\components\city\CityImagePanel.tsx:6:type Props = { cityId: CityId };
v2/src\components\city\CityImagePanel.tsx:10:export default function CityImagePanel({ cityId }: Props) {
v2/src\components\city\CityImagePanel.tsx:13:  const attractions = attractionsByCity(cityId).filter((a) => a.tier === "must-visit");
v2/src\components\city\CityImagePanel.tsx:36:              loading="lazy"
v2/src\data\sources.ts:50:    id: "nia-online-entry-card",
v2/src\data\sources.ts:54:    pageTitleEn: "Online Foreigner Entry/Exit Card pre-filling service",
v2/src\data\sources.ts:63:    pageTitleEn: "Warning on counterfeit entry-card websites",
v2/src\data\sources.ts:122:    pageTitleEn: "Shanghai online entry card and Hongqiao e-filing service",
v2/src\data\sources.ts:525:    url: "https://www.international.gc.ca/country-pays/china-chine/beijing.aspx?lang=eng",
v2/src\components\common\CityFurtherReading.tsx:5:type Props = { cityId: CityId };
v2/src\components\common\CityFurtherReading.tsx:7:export default function CityFurtherReading({ cityId }: Props) {
v2/src\components\common\CityFurtherReading.tsx:10:  const portals = cityTourismPortals[cityId];
v2/src\components\pillar\EmergencyBriefing.tsx:17:type Props = { cityId?: CityId };
v2/src\components\pillar\EmergencyBriefing.tsx:19:export default function EmergencyBriefing({ cityId }: Props) {
v2/src\components\pillar\EmergencyBriefing.tsx:22:  const cityScoped = Boolean(cityId);
v2/src\components\pillar\EmergencyBriefing.tsx:23:  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
v2/src\components\pillar\EmergencyBriefing.tsx:24:  const effectiveId: CityId = cityId ?? activeId;
v2/src\components\pillar\EmergencyBriefing.tsx:26:  const cityHospitals = hospitals.filter((h) => h.cityId === effectiveId);
v2/src\components\pillar\EmergencyBriefing.tsx:27:  const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
v2/src\components\pillar\EmergencyBriefing.tsx:117:            <li key={e.country} className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
v2/src\components\pillar\EmergencyBriefing.tsx:118:              <strong className="text-sm">{isZh ? `${e.countryZh}（${e.country}）` : e.country}</strong>
v2/src\components\pillar\EmergencyBriefing.tsx:148:      <PracticalBlock pillar="emergency" cityId={cityId} />
v2/src\data\top-questions.ts:15:    answerEn: "50 nationalities have unilateral 30-day visa-free entry; 55 nationalities qualify for 240-hour transit visa-free across 65 ports / 24 provinces. Use the Visa Checker above for your specific passport.",
v2/src\data\top-questions.ts:20:    id: "online-entry-card",
v2/src\data\top-questions.ts:23:    answerEn: "Yes. Since 2025-11-20 the Foreigner Entry/Exit Card can be pre-filled online for free at the official NIA portal. Kiosks and paper cards are still available at the port. Watch out for fake fee-charging sites.",
v2/src\data\top-questions.ts:25:    sourceId: "nia-online-entry-card"
v2/src\components\city\CityIntro.tsx:7:type Props = { cityId: CityId };
v2/src\components\city\CityIntro.tsx:57:export default function CityIntro({ cityId }: Props) {
v2/src\components\city\CityIntro.tsx:60:  const attractions = attractionsByCity(cityId);
v2/src\components\city\CityIntro.tsx:61:  const blurb = CITY_BLURB[cityId];
v2/src\components\city\CityIntro.tsx:62:  const facts = CITY_FACTS[cityId];
v2/src\components\city\CityNav.tsx:9:  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
v2/src\data\transport.ts:22:  cityId: CityId;
v2/src\data\transport.ts:69:    cityId: "beijing",
v2/src\data\transport.ts:162:    cityId: "shanghai",
v2/src\data\transport.ts:250:    cityId: "guangzhou",
v2/src\data\transport.ts:316:    cityId: "shenzhen",
v2/src\data\transport.ts:364:      en: "DiDi works with foreign phone + foreign card. Cross-border note: Futian/Lo Wu MTR crossings need a HK Entry permit; HSR via Shenzhen North to HK West Kowloon needs passport real-name on 12306.",
v2/src\data\transport.ts:390:export function transportSourceIds(cityId?: CityId): string[] {
v2/src\data\transport.ts:393:  const cities = cityId ? cityTransport.filter((c) => c.cityId === cityId) : cityTransport;
v2/src\data\transport.ts:400:  pitfallSourceIds("transport", cityId).forEach((id) => ids.add(id));
v2/src\components\pillar\FoodGuide.tsx:9:type Props = { cityId?: CityId };
v2/src\components\pillar\FoodGuide.tsx:11:export default function FoodGuide({ cityId }: Props) {
v2/src\components\pillar\FoodGuide.tsx:14:  const cityScoped = Boolean(cityId);
v2/src\components\pillar\FoodGuide.tsx:15:  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
v2/src\components\pillar\FoodGuide.tsx:17:  const effectiveId: CityId = cityId ?? activeId;
v2/src\components\pillar\FoodGuide.tsx:18:  const active = cityFood.find((c) => c.cityId === effectiveId)!;
v2/src\components\pillar\FoodGuide.tsx:41:              key={city.cityId}
v2/src\components\pillar\FoodGuide.tsx:44:              aria-selected={activeId === city.cityId}
v2/src\components\pillar\FoodGuide.tsx:45:              onClick={() => setActiveId(city.cityId)}
v2/src\components\pillar\FoodGuide.tsx:48:                activeId === city.cityId
v2/src\components\pillar\FoodGuide.tsx:53:              {isZh ? CITY_LABELS[city.cityId].zh : CITY_LABELS[city.cityId].en}
v2/src\components\pillar\FoodGuide.tsx:106:      <PracticalBlock pillar="food" cityId={cityId} />
v2/src\components\pillar\PaymentsChecklist.tsx:12:type Props = { cityId?: CityId };
v2/src\components\pillar\PaymentsChecklist.tsx:14:export default function PaymentsChecklist({ cityId }: Props) {
v2/src\components\pillar\PaymentsChecklist.tsx:17:  const cityScoped = Boolean(cityId);
v2/src\components\pillar\PaymentsChecklist.tsx:18:  const cities = cityId
v2/src\components\pillar\PaymentsChecklist.tsx:19:    ? cityPaymentNotes.filter((c) => c.cityId === cityId)
v2/src\components\pillar\PaymentsChecklist.tsx:76:            <li key={city.cityId} className="flex flex-col gap-2 rounded-lg border border-line bg-white p-3">
v2/src\components\map\HeroMap.tsx:11:export default function HeroMap() {
v2/src\components\map\HeroMap.tsx:13:  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
v2/src\components\map\HeroMap.tsx:15:  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
v2/src\components\map\HeroMap.tsx:29:      data-selected-province={selectedProvinceId ?? undefined}
v2/src\components\map\HeroMap.tsx:30:      data-province-present={province ? "true" : "false"}
v2/src\components\map\HeroMap.tsx:34:      {focused && province && (
v2/src\components\map\HeroMap.tsx:36:          <h2 className="text-xl font-bold leading-tight">{provinceLabel}</h2>
v2/src\components\pillar\TransportGuide.tsx:13:type Props = { cityId?: CityId };
v2/src\components\pillar\TransportGuide.tsx:15:export default function TransportGuide({ cityId }: Props) {
v2/src\components\pillar\TransportGuide.tsx:18:  const cityScoped = Boolean(cityId);
v2/src\components\pillar\TransportGuide.tsx:19:  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
v2/src\components\pillar\TransportGuide.tsx:20:  const effectiveId: CityId = cityId ?? activeId;
v2/src\components\pillar\TransportGuide.tsx:21:  const active = cityTransport.find((c) => c.cityId === effectiveId)!;
v2/src\components\pillar\TransportGuide.tsx:54:              key={city.cityId}
v2/src\components\pillar\TransportGuide.tsx:57:              aria-selected={activeId === city.cityId}
v2/src\components\pillar\TransportGuide.tsx:58:              onClick={() => setActiveId(city.cityId)}
v2/src\components\pillar\TransportGuide.tsx:61:                activeId === city.cityId
v2/src\components\pillar\TransportGuide.tsx:66:              {isZh ? CITY_LABELS[city.cityId].zh : CITY_LABELS[city.cityId].en}
v2/src\components\pillar\TransportGuide.tsx:113:      <PracticalBlock pillar="transport" cityId={cityId} />
v2/src\data\types.ts:3:  cityId: string;
v2/src\data\types.ts:7:  authorCountryCode: string;
v2/src\services\notes.ts:3:export async function getUserNotes(cityId: string): Promise<UserNote[]> {
v2/src\services\notes.ts:4:  void cityId;
v2/src\services\notes.ts:9:  cityId: string;
v2/src\services\notes.ts:15:  throw new Error("Submissions are not enabled in Phase 1.");
v2/src\components\pillar\VisaChecker.tsx:9:} from "../../data/entry-policies";
v2/src\components\pillar\VisaChecker.tsx:18:  const [country, setCountry] = useState("");
v2/src\components\pillar\VisaChecker.tsx:24:        collator.compare(lang === "zh" ? a.countryZh : a.countryEn, lang === "zh" ? b.countryZh : b.countryEn)
v2/src\components\pillar\VisaChecker.tsx:29:  const result: EligibilityResult | null = country ? checkEligibility(country) : null;
v2/src\components\pillar\VisaChecker.tsx:32:    <section id="entry-visa" className="flex min-w-0 flex-col gap-3">
v2/src\components\pillar\VisaChecker.tsx:38:          {zh ? "入境与签证" : "Entry & Visa"}
v2/src\components\pillar\VisaChecker.tsx:43:            : "Pick your passport country to see what applies. Every answer cites China's NIA and State Council announcements."}
v2/src\components\pillar\VisaChecker.tsx:50:            {lang === "zh" ? "护照国籍" : "Passport country"}
v2/src\components\pillar\VisaChecker.tsx:54:            value={country}
v2/src\components\pillar\VisaChecker.tsx:55:            onChange={(event) => setCountry(event.target.value)}
v2/src\components\pillar\VisaChecker.tsx:58:            <option value="">{lang === "zh" ? "请选择..." : "Select country..."}</option>
v2/src\components\pillar\VisaChecker.tsx:60:              <option key={c.countryEn} value={c.countryEn}>
v2/src\components\pillar\VisaChecker.tsx:61:                {lang === "zh" ? `${c.countryZh} (${c.countryEn})` : `${c.countryEn} (${c.countryZh})`}
v2/src\components\pillar\VisaChecker.tsx:74:      <PracticalBlock pillar="entry" />
v2/src\components\pillar\VisaChecker.tsx:85:        {lang === "zh" ? "请先选择国籍" : "Pick a passport country first."}
v2/src\components\pillar\VisaChecker.tsx:99:            : `${result.unilateralDays}-day unilateral visa-free · ${result.transitHours}-hour transit visa-free (third-country onward ticket required).`}
v2/src\components\pillar\VisaChecker.tsx:129:            : `If transiting via China to a third country, ${result.maxHours} hours visa-free is available. Otherwise apply for a visa.`}
v2/src\components\pillar\VisaChecker.tsx:182:        title={lang === "zh" ? "线上入境卡" : "Online entry card"}
v2/src\routes.ts:6:  route("guide/:topic", "./pages/GuidePage.tsx"),
v2/src\routes.ts:7:  route("city/:cityId", "./pages/CityPage.tsx"),
v2/src\routes.ts:11:  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
v2/src\components\map\Map3D.tsx:3:import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
v2/src\components\map\Map3D.tsx:5:import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
v2/src\components\map\Map3D.tsx:10:type Map3DProps = {
v2/src\components\map\Map3D.tsx:11:  province: ProvinceRecord;
v2/src\components\map\Map3D.tsx:12:  provinceId: string;
v2/src\components\map\Map3D.tsx:28:type MapLoadState = "loading" | "ready" | "missing-key" | "blocked" | "error";
v2/src\components\map\Map3D.tsx:78:function getProvinceArea(provinceId: string) {
v2/src\components\map\Map3D.tsx:79:  return provinceHitAreas.find((area) => area.id === provinceId) ?? FALLBACK_AREA;
v2/src\components\map\Map3D.tsx:82:function getProvinceLabel(province: ProvinceRecord, lang: Lang) {
v2/src\components\map\Map3D.tsx:83:  return lang === "zh" ? province.zh : province.name;
v2/src\components\map\Map3D.tsx:90:function getCityPosition(cityId: string, fallbackArea: ProvinceHitArea, index: number): LonLat {
v2/src\components\map\Map3D.tsx:91:  const point = cityMapPoints[cityId];
v2/src\components\map\Map3D.tsx:94:  const center = percentToLonLat(fallbackArea.x, fallbackArea.y);
v2/src\components\map\Map3D.tsx:95:  const spreadLon = Math.max(0.35, (fallbackArea.w / 100) * (CHINA_BOUNDS.east - CHINA_BOUNDS.west) * 0.18);
v2/src\components\map\Map3D.tsx:96:  const spreadLat = Math.max(0.28, (fallbackArea.h / 100) * (CHINA_BOUNDS.north - CHINA_BOUNDS.south) * 0.18);
v2/src\components\map\Map3D.tsx:97:  const angle = (Math.PI * 2 * index) / Math.max(3, fallbackArea.w);
v2/src\components\map\Map3D.tsx:195:  provinceLabel: string
v2/src\components\map\Map3D.tsx:198:    id: "selected-province-frame",
v2/src\components\map\Map3D.tsx:199:    name: provinceLabel,
v2/src\components\map\Map3D.tsx:243:  province: ProvinceRecord,
v2/src\components\map\Map3D.tsx:244:  provinceId: string,
v2/src\components\map\Map3D.tsx:249:  addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
v2/src\components\map\Map3D.tsx:251:  province.cities.forEach((city, index) => {
v2/src\components\map\Map3D.tsx:256:  const attractions = provinceAttractionSeed[provinceId] ?? [];
v2/src\components\map\Map3D.tsx:281:function resolveProvince(provinceId: string, province: ProvinceRecord) {
v2/src\components\map\Map3D.tsx:282:  return atlasData.find((item) => item.id === provinceId) ?? province;
v2/src\components\map\Map3D.tsx:285:export default function Map3D({ province, provinceId, lang }: Map3DProps) {
v2/src\components\map\Map3D.tsx:289:  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
v2/src\components\map\Map3D.tsx:290:  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
v2/src\components\map\Map3D.tsx:304:      try {
v2/src\components\map\Map3D.tsx:305:        setLoadState("loading");
v2/src\components\map\Map3D.tsx:342:        const area = getProvinceArea(provinceId);
v2/src\components\map\Map3D.tsx:345:        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
v2/src\components\map\Map3D.tsx:349:      } catch (error) {
v2/src\components\map\Map3D.tsx:370:  }, [lang, provinceId, selectedProvince, token]);
v2/src\components\map\Map3D.tsx:376:      {loadState === "loading" && (
v2/src\pages\GuidePage.tsx:9:type GuideTopic = "entry" | "payments" | "notes";
v2/src\pages\GuidePage.tsx:11:const topicLabels: Record<GuideTopic, { en: string; zh: string; bodyEn: string; bodyZh: string }> = {
v2/src\pages\GuidePage.tsx:12:  entry: {
v2/src\pages\GuidePage.tsx:13:    en: "Entry & visa",
v2/src\pages\GuidePage.tsx:15:    bodyEn: "Check the entry route first, then continue to city pages for local transport and emergencies.",
v2/src\pages\GuidePage.tsx:32:const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
v2/src\pages\GuidePage.tsx:35:  const { topic } = useParams<{ topic: string }>();
v2/src\pages\GuidePage.tsx:38:  const current = validTopics.has(topic as GuideTopic) ? (topic as GuideTopic) : "notes";
v2/src\pages\GuidePage.tsx:39:  const label = topicLabels[current];
v2/src\pages\GuidePage.tsx:53:      {current === "entry" && <VisaChecker />}
v2/src\components\search\PlaceSearch.tsx:23:    selectPlace(record.provinceId, record.cityId ?? null);
v2/src\components\search\PlaceSearch.tsx:49:          return <option key={`${record.provinceId}-${record.cityId ?? ""}-${i}`} value={primary} label={`${primary} · ${typeLabel}`} />;
v2/src\components\map\Province3DOverlay.tsx:1:import { lazy, Suspense } from "react";
v2/src\components\map\Province3DOverlay.tsx:5:const Map3D = lazy(() => import("./Map3D"));
v2/src\components\map\Province3DOverlay.tsx:8:  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
v2/src\components\map\Province3DOverlay.tsx:11:  if (!selectedProvinceId || !province || !is3DEnabled) return null;
v2/src\components\map\Province3DOverlay.tsx:15:      data-province-3d-overlay="true"
v2/src\components\map\Province3DOverlay.tsx:24:            {lang === "zh" ? province.zh : province.name}
v2/src\components\map\Province3DOverlay.tsx:48:        <Suspense
v2/src\components\map\Province3DOverlay.tsx:49:          fallback={
v2/src\components\map\Province3DOverlay.tsx:55:          <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
v2/src\components\map\Province3DOverlay.tsx:56:        </Suspense>
v2/src\components\map\MapPreview.tsx:4:import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
v2/src\components\map\MapPreview.tsx:6:export default function MapPreview() {
v2/src\pages\HomePage.tsx:2:import MapPreview from "../components/map/MapPreview";
v2/src\pages\HomePage.tsx:10:  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
v2/src\pages\HomePage.tsx:15:function pickCityPhoto(cityId: CityId): Attraction {
v2/src\pages\HomePage.tsx:16:  return attractionsByCity(cityId)[0];
v2/src\pages\HomePage.tsx:40:        {CITY_IDS.map((cityId) => (
v2/src\pages\HomePage.tsx:41:          <CityPhotoCard key={cityId} cityId={cityId} attraction={pickCityPhoto(cityId)} isZh={isZh} />
v2/src\pages\HomePage.tsx:60:              : "Browse cities, Hong Kong, Macau, and landmark regions by province, then open the 3D scene."}
v2/src\pages\HomePage.tsx:67:          <MapPreview />
v2/src\pages\HomePage.tsx:90:  cityId,
v2/src\pages\HomePage.tsx:94:  cityId: CityId;
v2/src\pages\HomePage.tsx:98:  const city = CITY_LABELS[cityId];
v2/src\pages\HomePage.tsx:102:      to={`/city/${cityId}`}
v2/src\pages\HomePage.tsx:108:        loading={cityId === "beijing" ? "eager" : "lazy"}
v2/src\components\map\ProvinceHitAreaLayer.tsx:1:import { provinceHitAreas } from "../../data/map-sources";
v2/src\components\map\ProvinceHitAreaLayer.tsx:15:      {provinceHitAreas
v2/src\components\map\ProvinceHitAreaLayer.tsx:22:            data-province-hit={area.id}
v2/src\pages\MapPage.tsx:2:import HeroMap from "../components/map/HeroMap";
v2/src\pages\MapPage.tsx:17:          {isZh ? "点击省份进入 3D 实景地图；港澳使用独立标记，3D 内包含城市和景区标注。" : "Click a province to open the 3D scene; Hong Kong and Macau use separate markers, with city and attraction labels inside 3D."}
v2/src\pages\MapPage.tsx:21:      <HeroMap />
v2/src\pages\SharePage.tsx:21:            : "Foreign tourists' real experiences in Beijing, Shanghai, Guangzhou, Shenzhen — text + photos + country code. Submission requires explicit publication-and-translation consent and passes AI moderation + keyword filter."}
v2/src\pages\SharePage.tsx:65:            {isZh ? "你的国家（公开显示为 2 字母代码）" : "Your country (public, shown as 2-letter code)"}
v2/src\pages\SharePage.tsx:123:            {isZh ? "正文 + 照片 + 国家码 + 城市标签" : "Text + photos + country + city tag"}
v2/src\pages\SharePage.tsx:131:                  {s.authorCountry}
v2/src\components\map\ProvinceLabelLayer.tsx:5:import { provinceHitAreas } from "../../data/map-sources";
v2/src\components\map\ProvinceLabelLayer.tsx:9:const labelMap = new Map(provinceHitAreas.map((a) => [a.id, a]));
v2/src\components\map\ProvinceInfoCard.tsx:3:import { provinceAttractionSeed } from "../../data/atlas";
v2/src\components\map\ProvinceInfoCard.tsx:7:  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
v2/src\components\map\ProvinceInfoCard.tsx:11:  if (!selectedProvinceId || !province || is3DEnabled) return null;
v2/src\components\map\ProvinceInfoCard.tsx:13:  const attractions = provinceAttractionSeed[selectedProvinceId] ?? [];
v2/src\components\map\ProvinceInfoCard.tsx:14:  const hasCities = province.cities.length > 0;
v2/src\components\map\ProvinceInfoCard.tsx:17:  const goToCity = (cityId: string) => {
v2/src\components\map\ProvinceInfoCard.tsx:18:    recordView(cityId);
v2/src\components\map\ProvinceInfoCard.tsx:19:    selectPlace(province.id, cityId);
v2/src\components\map\ProvinceInfoCard.tsx:26:      aria-label={lang === "zh" ? province.zh : province.name}
v2/src\components\map\ProvinceInfoCard.tsx:30:        <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
v2/src\components\map\ProvinceInfoCard.tsx:31:        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
v2/src\components\map\ProvinceInfoCard.tsx:38:            {province.cities.map((city) => (
v2/src\components\map\ProvinceInfoCard.tsx:71:        <p className="text-sm text-muted">{t("provinceDataPending")}</p>
v2/src\pages\SourcesPage.tsx:25:            : `Every fact on this site traces to one of the ${all.length} sources below. ${official.length} come from official government and institutional websites; ${community.length} come from traveler community blogs and forums covering practical pitfalls that official sources do not publish. Each entry shows the domain, the publication date, and our last verification date — click to read the original.`}
v2/src\components\map\ProvinceShapeLayer.tsx:5:import { provinceHitAreas } from "../../data/map-sources";
v2/src\components\map\ProvinceShapeLayer.tsx:8:import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
v2/src\components\map\ProvinceShapeLayer.tsx:10:const labelMap = new Map(provinceHitAreas.map((a) => [a.id, a]));
v2/src\components\map\ProvinceShapeLayer.tsx:117:        aria-label="China provinces"
v2/src\components\map\SpecialRegionMarkers.tsx:2:import { provinceHitAreas } from "../../data/map-sources";
v2/src\components\map\SpecialRegionMarkers.tsx:15:  const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));

codex
路由和引用关系已经能看出一部分风险点；下一步我会跑一次构建/静态检查，避免只靠肉眼漏掉 undefined import、SSR 或懒加载问题。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run lint' in c:\Users\h\Documents\New project 2\v2
2026-05-12T02:30:05.727342Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 4.5 seconds
Output:

> v2@0.0.0 build
> react-router build

vite.config.ts (4:31) [33m[UNRESOLVED_IMPORT] Warning:[0m Could not resolve 'vite-plugin-static-copy' in vite.config.ts
   [38;5;246m╭[0m[38;5;246m─[0m[38;5;246m[[0m vite.config.ts:4:32 [38;5;246m][0m
   [38;5;246m│[0m
 [38;5;246m4 │[0m [38;5;249mi[0m[38;5;249mm[0m[38;5;249mp[0m[38;5;249mo[0m[38;5;249mr[0m[38;5;249mt[0m[38;5;249m [0m[38;5;249m{[0m[38;5;249m [0m[38;5;249mv[0m[38;5;249mi[0m[38;5;249mt[0m[38;5;249me[0m[38;5;249mS[0m[38;5;249mt[0m[38;5;249ma[0m[38;5;249mt[0m[38;5;249mi[0m[38;5;249mc[0m[38;5;249mC[0m[38;5;249mo[0m[38;5;249mp[0m[38;5;249my[0m[38;5;249m [0m[38;5;249m}[0m[38;5;249m [0m[38;5;249mf[0m[38;5;249mr[0m[38;5;249mo[0m[38;5;249mm[0m[38;5;249m [0m"vite-plugin-static-copy"[38;5;249m;[0m
 [38;5;240m  │[0m                                ────────────┬────────────  
 [38;5;240m  │[0m                                            ╰────────────── Module not found, treating it as an external dependency
[38;5;246m───╯[0m

[31mfailed to load config from C:\Users\h\Documents\New project 2\v2\vite.config.ts[39m
Error: Cannot find package 'vite-plugin-static-copy' imported from C:\Users\h\Documents\New project 2\v2\node_modules\.vite-temp\vite.config.ts.timestamp-1778553005394-f0a1011a88fe2.mjs
    at Object.getPackageJSONURL (node:internal/modules/package_json_reader:316:9)
    at packageResolve (node:internal/modules/esm/resolve:768:81)
    at moduleResolve (node:internal/modules/esm/resolve:858:18)
    at defaultResolve (node:internal/modules/esm/resolve:990:11)
    at ModuleLoader.#cachedDefaultResolve (node:internal/modules/esm/loader:712:20)
    at ModuleLoader.#resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:729:38)
    at ModuleLoader.resolveSync (node:internal/modules/esm/loader:758:52)
    at ModuleLoader.#resolve (node:internal/modules/esm/loader:694:17)
    at ModuleLoader.getOrCreateModuleJob (node:internal/modules/esm/loader:614:35)
    at ModuleJob.syncLink (node:internal/modules/esm/module_job:143:33) {
  code: 'ERR_MODULE_NOT_FOUND'
}

 exited 1 in 4475ms:

> v2@0.0.0 build
> react-router build

vite.config.ts (4:31) [33m[UNRESOLVED_IMPORT] Warning:[0m Could not resolve 'vite-plugin-static-copy' in vite.config.ts
   [38;5;246m╭[0m[38;5;246m─[0m[38;5;246m[[0m vite.config.ts:4:32 [38;5;246m][0m
   [38;5;246m│[0m
 [38;5;246m4 │[0m [38;5;249mi[0m[38;5;249mm[0m[38;5;249mp[0m[38;5;249mo[0m[38;5;249mr[0m[38;5;249mt[0m[38;5;249m [0m[38;5;249m{[0m[38;5;249m [0m[38;5;249mv[0m[38;5;249mi[0m[38;5;249mt[0m[38;5;249me[0m[38;5;249mS[0m[38;5;249mt[0m[38;5;249ma[0m[38;5;249mt[0m[38;5;249mi[0m[38;5;249mc[0m[38;5;249mC[0m[38;5;249mo[0m[38;5;249mp[0m[38;5;249my[0m[38;5;249m [0m[38;5;249m}[0m[38;5;249m [0m[38;5;249mf[0m[38;5;249mr[0m[38;5;249mo[0m[38;5;249mm[0m[38;5;249m [0m"vite-plugin-static-copy"[38;5;249m;[0m
 [38;5;240m  │[0m                                ────────────┬────────────  
 [38;5;240m  │[0m                                            ╰────────────── Module not found, treating it as an external dependency
[38;5;246m───╯[0m

[31mfailed to load config from C:\Users\h\Documents\New project 2\v2\vite.config.ts[39m
Error: Cannot find package 'vite-plugin-static-copy' imported from C:\Users\h\Documents\New project 2\v2\node_modules\.vite-temp\vite.config.ts.timestamp-1778553005394-f0a1011a88fe2.mjs
    at Object.getPackageJSONURL (node:internal/modules/package_json_reader:316:9)
    at packageResolve (node:internal/modules/esm/resolve:768:81)
    at moduleResolve (node:internal/modules/esm/resolve:858:18)
    at defaultResolve (node:internal/modules/esm/resolve:990:11)
    at ModuleLoader.#cachedDefaultResolve (node:internal/modules/esm/loader:712:20)
    at ModuleLoader.#resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:729:38)
    at ModuleLoader.resolveSync (node:internal/modules/esm/loader:758:52)
    at ModuleLoader.#resolve (node:internal/modules/esm/loader:694:17)
    at ModuleLoader.getOrCreateModuleJob (node:internal/modules/esm/loader:614:35)
    at ModuleJob.syncLink (node:internal/modules/esm/module_job:143:33) {
  code: 'ERR_MODULE_NOT_FOUND'
}

 succeeded in 16338ms:

> v2@0.0.0 lint
> eslint .


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content v2/src/pages/HomePage.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content v2/src/pages/MapPage.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content v2/src/pages/GuidePage.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content v2/src/pages/CityPage.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 1022ms:
   1: import { Link, useParams } from "react-router";
   2: import TravelAlerts from "../components/policy/TravelAlerts";
   3: import VisaChecker from "../components/pillar/VisaChecker";
   4: import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
   5: import TopQuestions from "../components/sections/TopQuestions";
   6: import SourcesNote from "../components/common/SourcesNote";
   7: import { useLang } from "../store/language";
   8: 
   9: type GuideTopic = "entry" | "payments" | "notes";
  10: 
  11: const topicLabels: Record<GuideTopic, { en: string; zh: string; bodyEn: string; bodyZh: string }> = {
  12:   entry: {
  13:     en: "Entry & visa",
  14:     zh: "鍏ュ绛捐瘉",
  15:     bodyEn: "Check the entry route first, then continue to city pages for local transport and emergencies.",
  16:     bodyZh: "鍏堢‘璁ゅ叆澧冩柟寮忥紝鍐嶈繘鍏ュ煄甯傞〉鏌ョ湅鏈湴浜ら€氬拰搴旀€ヤ俊鎭€?
  17:   },
  18:   payments: {
  19:     en: "Payments",
  20:     zh: "鏀粯鍑嗗",
  21:     bodyEn: "Set up payment before departure and keep a cash backup for small vendors.",
  22:     bodyZh: "鍑哄彂鍓嶅畬鎴愭敮浠樿缃紝骞朵负灏忓簵鍜屼复鏃舵儏鍐典繚鐣欑幇閲戝閫夈€?
  23:   },
  24:   notes: {
  25:     en: "Travel notes",
  26:     zh: "鍑鸿娉ㄦ剰浜嬮」",
  27:     bodyEn: "Policy changes and common pre-arrival questions are collected here.",
  28:     bodyZh: "杩欓噷闆嗕腑鏀炬斂绛栧彉鍖栧拰鍑哄彂鍓嶅父瑙侀棶棰樸€?
  29:   }
  30: };
  31: 
  32: const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);
  33: 
  34: export default function GuidePage() {
  35:   const { topic } = useParams<{ topic: string }>();
  36:   const { lang } = useLang();
  37:   const isZh = lang === "zh";
  38:   const current = validTopics.has(topic as GuideTopic) ? (topic as GuideTopic) : "notes";
  39:   const label = topicLabels[current];
  40: 
  41:   return (
  42:     <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
  43:       <header className="flex flex-col gap-2">
  44:         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
  45:           {isZh ? "鈫?杩斿洖棣栭〉" : "鈫?Home"}
  46:         </Link>
  47:         <h1 className="text-3xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
  48:         <p className="max-w-2xl text-sm leading-relaxed text-muted">
  49:           {isZh ? label.bodyZh : label.bodyEn}
  50:         </p>
  51:       </header>
  52: 
  53:       {current === "entry" && <VisaChecker />}
  54:       {current === "payments" && <PaymentsChecklist />}
  55:       {current === "notes" && (
  56:         <>
  57:           <TravelAlerts />
  58:           <TopQuestions />
  59:         </>
  60:       )}
  61: 
  62:       <SourcesNote />
  63:     </main>
  64:   );
  65: }

 succeeded in 1034ms:
   1: import { Link } from "react-router";
   2: import MapPreview from "../components/map/MapPreview";
   3: import { attractionsByCity, type Attraction } from "../data/city-attractions";
   4: import { CITY_LABELS, type CityId } from "../data/transport";
   5: import { useLang } from "../store/language";
   6: 
   7: const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
   8: 
   9: const guideLinks = [
  10:   { to: "/guide/entry", en: "Entry & visa", zh: "鍏ュ绛捐瘉" },
  11:   { to: "/guide/payments", en: "Payments", zh: "鏀粯鍑嗗" },
  12:   { to: "/guide/notes", en: "Travel notes", zh: "鍑鸿娉ㄦ剰浜嬮」" }
  13: ];
  14: 
  15: function pickCityPhoto(cityId: CityId): Attraction {
  16:   return attractionsByCity(cityId)[0];
  17: }
  18: 
  19: export default function HomePage() {
  20:   const { lang } = useLang();
  21:   const isZh = lang === "zh";
  22: 
  23:   return (
  24:     <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
  25:       <header className="flex flex-col gap-2">
  26:         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
  27:           {isZh ? "娆㈣繋鏉ヤ腑鍥? : "Travel China"}
  28:         </h1>
  29:         <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
  30:           {isZh
  31:             ? "鍏堜粠鍩庡競鍜屾櫙鍖虹収鐗囧紑濮嬶紝鍐嶈繘鍏ュ湴鍥俱€佺璇併€佹敮浠樺拰娉ㄦ剰浜嬮」銆?
  32:             : "Start with city landmark photos, then open the map, visa, payment, and travel-note pages."}
  33:         </p>
  34:         <p className="text-xs text-muted">
  35:           {isZh ? "鎵€鏈夋暟鎹潎鏉ヨ嚜涓浗瀹樻柟銆? : "All data sourced from China's official agencies."}
  36:         </p>
  37:       </header>
  38: 
  39:       <section aria-label={isZh ? "鍩庡競鏅尯鐓х墖" : "City attraction photos"} className="grid gap-4 md:grid-cols-2">
  40:         {CITY_IDS.map((cityId) => (
  41:           <CityPhotoCard key={cityId} cityId={cityId} attraction={pickCityPhoto(cityId)} isZh={isZh} />
  42:         ))}
  43:       </section>
  44: 
  45:       <Link
  46:         to="/map"
  47:         aria-label={isZh ? "鎵撳紑鍦版爣鍦板浘" : "Open landmark map"}
  48:         className="group grid overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:border-jade hover:shadow-md lg:grid-cols-[minmax(0,1fr)_420px]"
  49:       >
  50:         <div className="flex min-w-0 flex-col justify-center gap-3 p-5 sm:p-6">
  51:           <span className="text-xs font-bold uppercase tracking-widest text-muted">
  52:             {isZh ? "鍦板浘鍏ュ彛" : "Map"}
  53:           </span>
  54:           <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
  55:             {isZh ? "鍦版爣鍦板浘" : "Landmark map"}
  56:           </h2>
  57:           <p className="max-w-xl text-sm leading-relaxed text-muted">
  58:             {isZh
  59:               ? "鎸夌渷浠芥煡鐪嬪煄甯傘€佹腐婢冲拰鏅尯鍦版爣锛岀偣鍑诲悗杩涘叆 3D 瀹炴櫙鍦板浘銆?
  60:               : "Browse cities, Hong Kong, Macau, and landmark regions by province, then open the 3D scene."}
  61:           </p>
  62:           <span className="text-sm font-bold text-jade">
  63:             {isZh ? "杩涘叆鍦板浘 鈫? : "Open map 鈫?}
  64:           </span>
  65:         </div>
  66:         <div className="h-64 min-w-0 border-t border-line bg-paper/60 p-3 lg:h-auto lg:border-l lg:border-t-0">
  67:           <MapPreview />
  68:         </div>
  69:       </Link>
  70: 
  71:       <section aria-label={isZh ? "鍑鸿鍔熻兘鍏ュ彛" : "Travel guide links"} className="grid gap-3 sm:grid-cols-3">
  72:         {guideLinks.map((item) => (
  73:           <Link
  74:             key={item.to}
  75:             to={item.to}
  76:             className="group flex min-h-20 items-center justify-between gap-3 rounded-lg border border-line bg-white px-4 py-3 transition hover:border-jade hover:shadow-sm"
  77:           >
  78:             <span className="text-base font-bold">{isZh ? item.zh : item.en}</span>
  79:             <span className="text-xl text-muted transition group-hover:translate-x-1 group-hover:text-jade" aria-hidden>
  80:               鈫?
  81:             </span>
  82:           </Link>
  83:         ))}
  84:       </section>
  85:     </main>
  86:   );
  87: }
  88: 
  89: function CityPhotoCard({
  90:   cityId,
  91:   attraction,
  92:   isZh
  93: }: {
  94:   cityId: CityId;
  95:   attraction: Attraction;
  96:   isZh: boolean;
  97: }) {
  98:   const city = CITY_LABELS[cityId];
  99: 
 100:   return (
 101:     <Link
 102:       to={`/city/${cityId}`}
 103:       className="group relative min-h-[260px] overflow-hidden rounded-lg border border-line bg-ink text-white shadow-sm"
 104:     >
 105:       <img
 106:         src={attraction.imageUrl}
 107:         alt={isZh ? attraction.nameZh : attraction.nameEn}
 108:         loading={cityId === "beijing" ? "eager" : "lazy"}
 109:         referrerPolicy="no-referrer"
 110:         className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
 111:         onError={(event) => {
 112:           event.currentTarget.style.opacity = "0";
 113:         }}
 114:       />
 115:       <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
 116:       <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
 117:         <span className="text-sm font-bold text-white/80">{isZh ? city.zh : city.en}</span>
 118:         <strong className="block max-w-full break-words text-xl leading-tight text-white drop-shadow-sm sm:text-2xl">
 119:           {isZh ? attraction.nameZh : attraction.nameEn}
 120:         </strong>
 121:         <span className="text-xs text-white/75">{isZh ? attraction.districtZh : attraction.districtEn}</span>
 122:       </div>
 123:     </Link>
 124:   );
 125: }

 succeeded in 1047ms:
   1: import { Link } from "react-router";
   2: import HeroMap from "../components/map/HeroMap";
   3: import { useLang } from "../store/language";
   4: 
   5: export default function MapPage() {
   6:   const { lang } = useLang();
   7:   const isZh = lang === "zh";
   8: 
   9:   return (
  10:     <main id="top" className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:py-10">
  11:       <header className="flex flex-col gap-2">
  12:         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
  13:           {isZh ? "鈫?杩斿洖棣栭〉" : "鈫?Home"}
  14:         </Link>
  15:         <h1 className="text-3xl font-bold leading-tight">{isZh ? "鍦版爣鍦板浘" : "Landmark map"}</h1>
  16:         <p className="max-w-2xl text-sm leading-relaxed text-muted">
  17:           {isZh ? "鐐瑰嚮鐪佷唤杩涘叆 3D 瀹炴櫙鍦板浘锛涙腐婢充娇鐢ㄧ嫭绔嬫爣璁帮紝3D 鍐呭寘鍚煄甯傚拰鏅尯鏍囨敞銆? : "Click a province to open the 3D scene; Hong Kong and Macau use separate markers, with city and attraction labels inside 3D."}
  18:         </p>
  19:       </header>
  20: 
  21:       <HeroMap />
  22:     </main>
  23:   );
  24: }

 succeeded in 1053ms:
   1: import { Link, useParams } from "react-router";
   2: import { CITY_LABELS, type CityId } from "../data/transport";
   3: import { useLang } from "../store/language";
   4: import VisaChecker from "../components/pillar/VisaChecker";
   5: import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
   6: import TransportGuide from "../components/pillar/TransportGuide";
   7: import FoodGuide from "../components/pillar/FoodGuide";
   8: import EmergencyBriefing from "../components/pillar/EmergencyBriefing";
   9: import CityFurtherReading from "../components/common/CityFurtherReading";
  10: import SourcesNote from "../components/common/SourcesNote";
  11: import CityNav from "../components/city/CityNav";
  12: import CityIntro from "../components/city/CityIntro";
  13: import CityImagePanel from "../components/city/CityImagePanel";
  14: 
  15: const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
  16: 
  17: export default function CityPage() {
  18:   const { cityId } = useParams<{ cityId: string }>();
  19:   const { lang } = useLang();
  20:   const isZh = lang === "zh";
  21: 
  22:   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
  23:     return (
  24:       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
  25:         <h1 className="text-2xl font-bold">{isZh ? "鏈煡鍩庡競" : "Unknown city"}</h1>
  26:         <Link to="/" className="text-jade hover:underline">{isZh ? "杩斿洖棣栭〉" : "鈫?Home"}</Link>
  27:       </main>
  28:     );
  29:   }
  30: 
  31:   const id = cityId as CityId;
  32:   const label = CITY_LABELS[id];
  33: 
  34:   return (
  35:     <main id="top" className="mx-auto max-w-7xl px-4 py-10">
  36:       <header className="mb-6 flex flex-col gap-2">
  37:         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
  38:           {isZh ? "鈫?鍏ㄩ儴鍩庡競" : "鈫?All cities"}
  39:         </Link>
  40:         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
  41:         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
  42:       </header>
  43: 
  44:       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
  45:         <CityNav />
  46: 
  47:         <div className="flex min-w-0 flex-col gap-12">
  48:           <CityIntro cityId={id} />
  49:           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
  50:           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
  51:           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>
  52:           <section id="food" className="scroll-mt-24"><FoodGuide cityId={id} /></section>
  53:           <section id="emergency" className="scroll-mt-24"><EmergencyBriefing cityId={id} /></section>
  54:           <section id="portals" className="scroll-mt-24"><CityFurtherReading cityId={id} /></section>
  55: 
  56:           <section className="flex flex-col gap-3 rounded-xl border border-dashed border-line bg-paper p-6">
  57:             <h2 className="text-base font-bold">{isZh ? "Phase 2 鍗冲皢涓婄嚎" : "Phase 2 鈥?coming soon"}</h2>
  58:             <p className="text-sm text-muted">
  59:               {isZh
  60:                 ? "鍚戜腑鍥芥湰鍦扮敤鎴锋彁闂€佸垎浜綘鐨勬梾琛岀粡楠屽姛鑳芥鍦ㄥ紑鍙戙€?
  61:                 : "Ask Chinese locals and share-your-trip features are in development."}
  62:             </p>
  63:             <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest">
  64:               <Link to="/ask" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
  65:                 {isZh ? "鍚戜腑鍥芥湰鍦扮敤鎴锋彁闂? : "Ask Chinese locals"}
  66:               </Link>
  67:               <Link to="/share" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
  68:                 {isZh ? "鍒嗕韩鏃呰" : "Share your trip"}
  69:               </Link>
  70:             </div>
  71:           </section>
  72: 
  73:           <SourcesNote />
  74:         </div>
  75: 
  76:         <CityImagePanel cityId={id} />
  77:       </div>
  78:     </main>
  79:   );
  80: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/pages/HomePage.tsx | Select-Object -First 35 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 684ms:
   1: import { Link } from "react-router";
   2: import MapPreview from "../components/map/MapPreview";
   3: import { attractionsByCity, type Attraction } from "../data/city-attractions";
   4: import { CITY_LABELS, type CityId } from "../data/transport";
   5: import { useLang } from "../store/language";
   6: 
   7: const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
   8: 
   9: const guideLinks = [
  10:   { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
  11:   { to: "/guide/payments", en: "Payments", zh: "支付准备" },
  12:   { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
  13: ];
  14: 
  15: function pickCityPhoto(cityId: CityId): Attraction {
  16:   return attractionsByCity(cityId)[0];
  17: }
  18: 
  19: export default function HomePage() {
  20:   const { lang } = useLang();
  21:   const isZh = lang === "zh";
  22: 
  23:   return (
  24:     <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
  25:       <header className="flex flex-col gap-2">
  26:         <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
  27:           {isZh ? "欢迎来中国" : "Travel China"}
  28:         </h1>
  29:         <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
  30:           {isZh
  31:             ? "先从城市和景区照片开始，再进入地图、签证、支付和注意事项。"
  32:             : "Start with city landmark photos, then open the map, visa, payment, and travel-note pages."}
  33:         </p>
  34:         <p className="text-xs text-muted">
  35:           {isZh ? "所有数据均来自中国官方。" : "All data sourced from China's official agencies."}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/root.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/vite.config.ts | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm ls vite-plugin-static-copy --depth=0' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/layout/LanguageSwitch.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 997ms:
   1: import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
   2: import LanguageProvider from "./store/LanguageProvider";
   3: import AtlasProvider from "./store/AtlasProvider";
   4: import SiteHeader from "./components/layout/SiteHeader";
   5: import SiteFooter from "./components/layout/SiteFooter";
   6: import "./styles/globals.css";
   7: 
   8: export function Layout({ children }: { children: React.ReactNode }) {
   9:   return (
  10:     <html lang="en">
  11:       <head>
  12:         <meta charSet="utf-8" />
  13:         <meta name="viewport" content="width=device-width, initial-scale=1" />
  14:         <title>旅行中国</title>
  15:         <link
  16:           rel="icon"
  17:           href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='10' fill='%2318201d'/%3E%3Ctext x='32' y='42' text-anchor='middle' font-size='34' fill='white'%3E%E6%97%85%3C/text%3E%3C/svg%3E"
  18:         />
  19:         <Meta />
  20:         <Links />
  21:       </head>
  22:       <body>
  23:         {children}
  24:         <ScrollRestoration />
  25:         <Scripts />
  26:       </body>
  27:     </html>
  28:   );
  29: }
  30: 
  31: export default function App() {
  32:   return (
  33:     <LanguageProvider>
  34:       <AtlasProvider>
  35:         <SiteHeader />
  36:         <Outlet />
  37:         <SiteFooter />
  38:       </AtlasProvider>
  39:     </LanguageProvider>
  40:   );
  41: }

 succeeded in 1067ms:
   1: import { defineConfig } from "vite";
   2: import { reactRouter } from "@react-router/dev/vite";
   3: import tailwindcss from "@tailwindcss/vite";
   4: import { viteStaticCopy } from "vite-plugin-static-copy";
   5: 
   6: const cesiumSource = "node_modules/cesium/Build/Cesium";
   7: 
   8: export default defineConfig({
   9:   define: {
  10:     CESIUM_BASE_URL: JSON.stringify("/cesium")
  11:   },
  12:   plugins: [
  13:     tailwindcss(),
  14:     reactRouter(),
  15:     viteStaticCopy({
  16:       targets: [
  17:         { src: `${cesiumSource}/Workers`, dest: "cesium" },
  18:         { src: `${cesiumSource}/Assets`, dest: "cesium" },
  19:         { src: `${cesiumSource}/Widgets`, dest: "cesium" },
  20:         { src: `${cesiumSource}/ThirdParty`, dest: "cesium" }
  21:       ]
  22:     })
  23:   ],
  24:   server: {
  25:     host: "127.0.0.1",
  26:     port: 5173,
  27:     strictPort: true
  28:   }
  29: });

 succeeded in 1065ms:
   1: import clsx from "clsx";
   2: import { useLang } from "../../store/language";
   3: import type { Lang } from "../../data/i18n";
   4: 
   5: const OPTIONS: Array<{ code: Lang; label: string }> = [
   6:   { code: "en", label: "EN" },
   7:   { code: "zh", label: "中文" }
   8: ];
   9: 
  10: export default function LanguageSwitch() {
  11:   const { lang, setLang } = useLang();
  12:   return (
  13:     <div className="inline-flex shrink-0 overflow-hidden rounded-full border border-line">
  14:       {OPTIONS.map((option) => (
  15:         <button
  16:           key={option.code}
  17:           type="button"
  18:           onClick={() => setLang(option.code)}
  19:           className={clsx(
  20:             "px-2.5 py-1 text-xs font-bold uppercase tracking-normal transition sm:px-3 sm:tracking-widest",
  21:             option.code === lang ? "bg-ink text-white" : "bg-white text-muted hover:text-ink"
  22:           )}
  23:         >
  24:           {option.label}
  25:         </button>
  26:       ))}
  27:     </div>
  28:   );
  29: }

2026-05-12T02:30:51.585658Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 2.2 seconds
Output:
v2@0.0.0 C:\Users\h\Documents\New project 2\v2
`-- (empty)


 exited 1 in 2188ms:
v2@0.0.0 C:\Users\h\Documents\New project 2\v2
`-- (empty)


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/layout/SiteHeader.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/map/HeroMap.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/map/ProvinceShapeLayer.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/map/ProvinceInfoCard.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 620ms:
   1: import { Link } from "react-router";
   2: import LanguageSwitch from "./LanguageSwitch";
   3: 
   4: export default function SiteHeader() {
   5:   return (
   6:     <header className="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
   7:       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
   8:         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
   9:         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
  10:       </Link>
  11:       <LanguageSwitch />
  12:     </header>
  13:   );
  14: }

 succeeded in 689ms:
   1: import { useEffect } from "react";
   2: import { useAtlas } from "../../store/atlas";
   3: import { useLang } from "../../store/language";
   4: import ProvinceShapeLayer from "./ProvinceShapeLayer";
   5: import ProvinceLabelLayer from "./ProvinceLabelLayer";
   6: import ProvinceInfoCard from "./ProvinceInfoCard";
   7: import Province3DOverlay from "./Province3DOverlay";
   8: import SpecialRegionMarkers from "./SpecialRegionMarkers";
   9: import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
  10: 
  11: export default function HeroMap() {
  12:   const { lang } = useLang();
  13:   const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
  14:   const focused = Boolean(selectedProvinceId);
  15:   const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
  16: 
  17:   useEffect(() => {
  18:     if (!focused) return;
  19:     const onKey = (event: KeyboardEvent) => {
  20:       if (event.key === "Escape") reset();
  21:     };
  22:     window.addEventListener("keydown", onKey);
  23:     return () => window.removeEventListener("keydown", onKey);
  24:   }, [focused, reset]);
  25: 
  26:   return (
  27:     <section
  28:       aria-label="China interactive map"
  29:       data-selected-province={selectedProvinceId ?? undefined}
  30:       data-province-present={province ? "true" : "false"}
  31:       data-3d-enabled={is3DEnabled ? "true" : "false"}
  32:       className="flex min-w-0 flex-col gap-2"
  33:     >
  34:       {focused && province && (
  35:         <header className="flex items-end justify-between">
  36:           <h2 className="text-xl font-bold leading-tight">{provinceLabel}</h2>
  37:         </header>
  38:       )}
  39: 
  40:       <div
  41:         aria-live="polite"
  42:         className={`china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm ${focused ? "min-h-[420px]" : "min-h-[300px] sm:min-h-[260px]"}`}
  43:         style={{ aspectRatio: "9463 / 6675" }}
  44:       >
  45:         <div className="absolute inset-0">
  46:           <ProvinceShapeLayer />
  47:           <ProvinceLabelLayer />
  48:           <ProvinceHitAreaLayer />
  49:           <SpecialRegionMarkers />
  50:           <ProvinceInfoCard />
  51:           <Province3DOverlay />
  52:         </div>
  53:         {focused && !is3DEnabled && (
  54:           <button
  55:             type="button"
  56:             onClick={reset}
  57:             className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
  58:           >
  59:             {lang === "zh" ? "重置" : "Reset"}
  60:           </button>
  61:         )}
  62:       </div>
  63:     </section>
  64:   );
  65: }

 succeeded in 720ms:
   1: import { useAtlas } from "../../store/atlas";
   2: import { useLang } from "../../store/language";
   3: import { provinceAttractionSeed } from "../../data/atlas";
   4: import { useRecordCityView } from "../../hooks/useCityViews";
   5: 
   6: export default function ProvinceInfoCard() {
   7:   const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
   8:   const { lang, t } = useLang();
   9:   const recordView = useRecordCityView();
  10: 
  11:   if (!selectedProvinceId || !province || is3DEnabled) return null;
  12: 
  13:   const attractions = provinceAttractionSeed[selectedProvinceId] ?? [];
  14:   const hasCities = province.cities.length > 0;
  15:   const hasAttractions = attractions.length > 0;
  16: 
  17:   const goToCity = (cityId: string) => {
  18:     recordView(cityId);
  19:     selectPlace(province.id, cityId);
  20:     document.querySelector("#atlas")?.scrollIntoView({ behavior: "smooth", block: "start" });
  21:   };
  22: 
  23:   return (
  24:     <aside
  25:       className="absolute bottom-3 left-3 z-20 flex max-h-[78%] w-[300px] flex-col gap-3 overflow-auto rounded-xl border border-line bg-white/95 p-4 shadow-xl backdrop-blur animate-[fadeUp_400ms_ease-out]"
  26:       aria-label={lang === "zh" ? province.zh : province.name}
  27:     >
  28:       <header>
  29:         <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
  30:         <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
  31:         <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
  32:       </header>
  33: 
  34:       {hasCities && (
  35:         <section className="flex flex-col gap-1">
  36:           <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("cityProfiles")}</h4>
  37:           <ul className="flex flex-col gap-1">
  38:             {province.cities.map((city) => (
  39:               <li key={city.id}>
  40:                 <button
  41:                   type="button"
  42:                   onClick={() => goToCity(city.id)}
  43:                   className="flex w-full flex-col rounded-md px-2 py-1.5 text-left transition hover:bg-paper"
  44:                 >
  45:                   <strong className="text-sm">{lang === "zh" ? city.zh : city.name}</strong>
  46:                   <span className="text-xs text-muted">{lang === "zh" ? city.museumZh || city.museum : city.museum}</span>
  47:                 </button>
  48:               </li>
  49:             ))}
  50:           </ul>
  51:         </section>
  52:       )}
  53: 
  54:       {hasAttractions && (
  55:         <section className="flex flex-col gap-1">
  56:           <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("famousAttractions")}</h4>
  57:           <ul className="flex flex-wrap gap-1">
  58:             {attractions.map((attraction) => (
  59:               <li
  60:                 key={attraction.zh}
  61:                 className="rounded-full bg-paper px-2 py-1 text-xs text-muted"
  62:               >
  63:                 {lang === "zh" ? attraction.zh : attraction.en}
  64:               </li>
  65:             ))}
  66:           </ul>
  67:         </section>
  68:       )}
  69: 
  70:       {!hasCities && !hasAttractions && (
  71:         <p className="text-sm text-muted">{t("provinceDataPending")}</p>
  72:       )}
  73:     </aside>
  74:   );
  75: }

 succeeded in 733ms:
   1: import { useMemo } from "react";
   2: import clsx from "clsx";
   3: import { useProvinceShapes } from "../../hooks/useProvinceShapes";
   4: import { computeFocusTransform, computeUnionViewBox, type ProvinceShape } from "../../lib/shapes";
   5: import { provinceHitAreas } from "../../data/map-sources";
   6: import { useAtlas } from "../../store/atlas";
   7: import { useLang } from "../../store/language";
   8: import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
   9: 
  10: const labelMap = new Map(provinceHitAreas.map((a) => [a.id, a]));
  11: 
  12: const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
  13: const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";
  14: 
  15: type ShapeButtonProps = {
  16:   shape: ProvinceShape;
  17:   active: boolean;
  18:   focused: boolean;
  19:   label: string;
  20:   onSelect: () => void;
  21: };
  22: 
  23: function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
  24:   const dimmed = focused && !active;
  25:   const baseFill = PROVINCE_COLORS[shape.id] ?? DEFAULT_PROVINCE_FILL;
  26: 
  27:   const fill = !focused
  28:     ? baseFill
  29:     : active
  30:       ? "#70b7a8"
  31:       : `${baseFill}cc`;
  32:   const stroke = !focused
  33:     ? "rgba(78,91,85,0.72)"
  34:     : active
  35:       ? "rgba(23,112,97,1)"
  36:       : "rgba(24,32,29,0.25)";
  37:   const strokeWidth = active ? 2.4 : 0.85;
  38: 
  39:   return (
  40:     <g
  41:       tabIndex={dimmed ? -1 : 0}
  42:       role="button"
  43:       aria-pressed={active}
  44:       aria-label={label}
  45:       onClick={(event) => {
  46:         event.stopPropagation();
  47:         onSelect();
  48:       }}
  49:       onKeyDown={(event) => {
  50:         if (event.key === "Enter" || event.key === " ") {
  51:           event.preventDefault();
  52:           onSelect();
  53:         }
  54:       }}
  55:       className={clsx(
  56:         "cursor-pointer outline-none transition-opacity duration-300",
  57:         dimmed && "opacity-90"
  58:       )}
  59:       style={{ pointerEvents: "all" }}
  60:     >
  61:       <title>{label}</title>
  62:       {shape.paths.map((d, i) => (
  63:         <path
  64:           key={i}
  65:           d={d}
  66:           fill={fill}
  67:           stroke={stroke}
  68:           strokeWidth={strokeWidth}
  69:           strokeLinejoin="round"
  70:           vectorEffect="non-scaling-stroke"
  71:           style={{ transition: PATH_TRANSITION }}
  72:         />
  73:       ))}
  74:     </g>
  75:   );
  76: }
  77: 
  78: export default function ProvinceShapeLayer() {
  79:   const shapes = useProvinceShapes();
  80:   const { lang } = useLang();
  81:   const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
  82: 
  83:   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
  84: 
  85:   const cssTransform = useMemo(() => {
  86:     if (!shapes || !viewBox || !selectedProvinceId) return "translate(0%, 0%) scale(1)";
  87:     const shape = shapes[selectedProvinceId];
  88:     if (!shape) return "translate(0%, 0%) scale(1)";
  89:     const focus = computeFocusTransform(shape, viewBox);
  90:     const txPct = (((focus.scale - 1) * viewBox.x + focus.tx) / viewBox.width) * 100;
  91:     const tyPct = (((focus.scale - 1) * viewBox.y + focus.ty) / viewBox.height) * 100;
  92:     return `translate(${txPct}%, ${tyPct}%) scale(${focus.scale})`;
  93:   }, [shapes, viewBox, selectedProvinceId]);
  94: 
  95:   if (!shapes || !viewBox) return null;
  96: 
  97:   const focused = Boolean(selectedProvinceId);
  98:   const vb = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
  99:   const ordered = Object.values(shapes).sort((a, b) =>
 100:     a.id === selectedProvinceId ? 1 : b.id === selectedProvinceId ? -1 : 0
 101:   );
 102: 
 103:   return (
 104:     <div
 105:       className="absolute inset-0 z-10"
 106:       style={{
 107:         transform: cssTransform,
 108:         transformOrigin: "0 0",
 109:         transition: TRANSITION
 110:       }}
 111:     >
 112:       <svg
 113:         viewBox={vb}
 114:         preserveAspectRatio="none"
 115:         className="absolute inset-0 h-full w-full"
 116:         role="group"
 117:         aria-label="China provinces"
 118:       >
 119:         {ordered.map((shape) => {
 120:           const active = shape.id === selectedProvinceId;
 121:           const label = labelMap.get(shape.id);
 122:           const title = label ? (lang === "zh" ? label.zh : label.en) : shape.name;
 123:           return (
 124:             <ProvinceShapeButton
 125:               key={shape.id}
 126:               shape={shape}
 127:               active={active}
 128:               focused={focused}
 129:               label={title}
 130:               onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
 131:             />
 132:           );
 133:         })}
 134:       </svg>
 135:     </div>
 136:   );
 137: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/data/atlas.ts | Select-Object -First 120 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 607ms:
   1: export type CityRecord = {
   2:   id: string;
   3:   name: string;
   4:   zh: string;
   5:   province: string;
   6:   museum: string;
   7:   museumZh: string;
   8:   museumRole: string;
   9:   museumRoleZh: string;
  10:   history: string;
  11:   historyZh: string;
  12:   sites: string[];
  13:   sitesZh: string[];
  14:   baseViews: number;
  15:   notes: number;
  16:   verified: string;
  17:   access: "High" | "Medium" | "Low";
  18:   status: "Official facts pending" | "Needs visitor notes" | "Needs review";
  19: };
  20: 
  21: export type ProvinceRecord = {
  22:   id: string;
  23:   name: string;
  24:   zh: string;
  25:   type: "Municipality" | "Province";
  26:   color: string;
  27:   cities: CityRecord[];
  28: };
  29: 
  30: export const atlasData: ProvinceRecord[] = [
  31:   {
  32:     id: "beijing",
  33:     name: "Beijing",
  34:     zh: "北京",
  35:     type: "Municipality",
  36:     color: "red",
  37:     cities: [
  38:       {
  39:         id: "beijing-city",
  40:         name: "Beijing",
  41:         zh: "北京市",
  42:         province: "Beijing",
  43:         museum: "Capital Museum / Beijing Grand Canal Museum",
  44:         museumZh: "首都博物馆 / 北京大运河博物馆",
  45:         museumRole:
  46:           "The first stop for understanding Beijing as an imperial capital, political center, and living city shaped by ritual, walls, waterways, and modern institutions.",
  47:         museumRoleZh:
  48:           "理解北京作为帝都、政治中心和生活城市的第一入口，可看到礼制、城墙、水系和现代机构如何共同塑造这座城市。",
  49:         history:
  50:           "Beijing is one of China's most important historical capitals, with layers from Yuan Dadu, Ming and Qing imperial planning, Republican-era transitions, and contemporary national institutions.",
  51:         historyZh: "北京是中国最重要的历史都城之一，层次包括元大都、明清都城规划、近现代转型以及当代国家机构。",
  52:         sites: ["Forbidden City", "Temple of Heaven", "Beijing Central Axis", "Beijing City Wall remains"],
  53:         sitesZh: ["故宫", "天坛", "北京中轴线", "北京城墙遗存"],
  54:         baseViews: 18642,
  55:         notes: 42,
  56:         verified: "2026-05",
  57:         access: "Medium",
  58:         status: "Official facts pending"
  59:       }
  60:     ]
  61:   },
  62:   {
  63:     id: "shanghai",
  64:     name: "Shanghai",
  65:     zh: "上海",
  66:     type: "Municipality",
  67:     color: "blue",
  68:     cities: [
  69:       {
  70:         id: "shanghai-city",
  71:         name: "Shanghai",
  72:         zh: "上海市",
  73:         province: "Shanghai",
  74:         museum: "Shanghai Museum / Shanghai History Museum",
  75:         museumZh: "上海博物馆 / 上海市历史博物馆",
  76:         museumRole:
  77:           "A practical entry point for understanding Jiangnan culture, port-city growth, modern urban life, and Shanghai's role in global exchange.",
  78:         museumRoleZh: "理解江南文化、港口城市成长、近现代都市生活以及上海参与全球交流的实用入口。",
  79:         history:
  80:           "Shanghai grew from a Jiangnan county and port into a treaty-port metropolis, then a central city of modern industry, finance, publishing, cinema, and urban culture.",
  81:         historyZh: "上海从江南县城和港口发展为通商口岸都市，随后成为现代工业、金融、出版、电影和城市文化的重要中心。",
  82:         sites: ["Shanghai History Museum", "Yu Garden area", "The Bund", "Former French Concession streets"],
  83:         sitesZh: ["上海市历史博物馆", "豫园片区", "外滩", "原法租界街区"],
  84:         baseViews: 14380,
  85:         notes: 37,
  86:         verified: "2026-05",
  87:         access: "High",
  88:         status: "Needs visitor notes"
  89:       }
  90:     ]
  91:   },
  92:   {
  93:     id: "shaanxi",
  94:     name: "Shaanxi",
  95:     zh: "陕西",
  96:     type: "Province",
  97:     color: "gold",
  98:     cities: [
  99:       {
 100:         id: "xian",
 101:         name: "Xi'an",
 102:         zh: "西安",
 103:         province: "Shaanxi",
 104:         museum: "Shaanxi History Museum / Xi'an Museum",
 105:         museumZh: "陕西历史博物馆 / 西安博物院",
 106:         museumRole:
 107:           "The clearest starting point for Zhou, Qin, Han, Tang, Chang'an urban history, Silk Road exchange, and imperial material culture.",
 108:         museumRoleZh: "理解周秦汉唐、长安城市史、丝绸之路交流和帝国物质文化的清晰入口。",
 109:         history:
 110:           "Xi'an sits near the core of ancient Chang'an, one of the great capitals of Chinese history and a key anchor for understanding early imperial statecraft and Silk Road exchange.",
 111:         historyZh: "西安位于古代长安核心区域附近，是中国历史上重要都城之一，也是理解早期帝国制度和丝绸之路交流的关键城市。",
 112:         sites: ["Terracotta Army", "Xi'an City Wall", "Big Wild Goose Pagoda", "Daming Palace site"],
 113:         sitesZh: ["秦始皇兵马俑", "西安城墙", "大雁塔", "大明宫遗址"],
 114:         baseViews: 16890,
 115:         notes: 51,
 116:         verified: "2026-05",
 117:         access: "Medium",
 118:         status: "Official facts pending"
 119:       },
 120:       {

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/store/atlas.ts | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/atlas/AtlasSection.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/atlas/CityList.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/atlas/CityProfile.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 820ms:
   1: import { createContext, useContext, type Dispatch } from "react";
   2: import { atlasData, type CityRecord, type ProvinceRecord } from "../data/atlas";
   3: import { provinceHitAreas } from "../data/map-sources";
   4: 
   5: export type AtlasState = {
   6:   selectedProvinceId: string | null;
   7:   selectedCityId: string | null;
   8:   is3DEnabled: boolean;
   9: };
  10: 
  11: export type AtlasAction =
  12:   | { type: "selectProvince"; provinceId: string | null }
  13:   | { type: "selectPlace"; provinceId: string; cityId: string | null }
  14:   | { type: "toggle3D" }
  15:   | { type: "reset" };
  16: 
  17: export const initialAtlasState: AtlasState = {
  18:   selectedProvinceId: null,
  19:   selectedCityId: null,
  20:   is3DEnabled: false
  21: };
  22: 
  23: export const atlasReducer = (state: AtlasState, action: AtlasAction): AtlasState => {
  24:   switch (action.type) {
  25:     case "selectProvince":
  26:       return {
  27:         ...state,
  28:         selectedProvinceId: action.provinceId,
  29:         selectedCityId: null,
  30:         is3DEnabled: Boolean(action.provinceId)
  31:       };
  32:     case "selectPlace":
  33:       return { ...state, selectedProvinceId: action.provinceId, selectedCityId: action.cityId, is3DEnabled: true };
  34:     case "toggle3D":
  35:       return { ...state, is3DEnabled: !state.is3DEnabled };
  36:     case "reset":
  37:       return initialAtlasState;
  38:     default:
  39:       return state;
  40:   }
  41: };
  42: 
  43: export type AtlasContextValue = {
  44:   state: AtlasState;
  45:   dispatch: Dispatch<AtlasAction>;
  46: };
  47: 
  48: export const AtlasContext = createContext<AtlasContextValue | null>(null);
  49: 
  50: const findProvince = (id: string | null): ProvinceRecord | null => {
  51:   if (!id) return null;
  52:   const match = atlasData.find((p) => p.id === id);
  53:   if (match) return match;
  54:   const area = provinceHitAreas.find((a) => a.id === id);
  55:   return area
  56:     ? { id: area.id, name: area.en, zh: area.zh, type: "Province", color: "muted", cities: [] }
  57:     : null;
  58: };
  59: 
  60: const findCity = (province: ProvinceRecord | null, cityId: string | null): CityRecord | null => {
  61:   if (!province || !cityId) return null;
  62:   return province.cities.find((c) => c.id === cityId) ?? null;
  63: };
  64: 
  65: export function useAtlas() {
  66:   const ctx = useContext(AtlasContext);
  67:   if (!ctx) throw new Error("useAtlas must be used within <AtlasProvider>");
  68:   const { state, dispatch } = ctx;
  69:   const province = findProvince(state.selectedProvinceId);
  70:   const city = findCity(province, state.selectedCityId);
  71:   return {
  72:     ...state,
  73:     province,
  74:     city,
  75:     selectProvince: (provinceId: string | null) => dispatch({ type: "selectProvince", provinceId }),
  76:     selectPlace: (provinceId: string, cityId: string | null) => dispatch({ type: "selectPlace", provinceId, cityId }),
  77:     selectCity: (cityId: string | null) =>
  78:       state.selectedProvinceId
  79:         ? dispatch({ type: "selectPlace", provinceId: state.selectedProvinceId, cityId })
  80:         : dispatch({ type: "selectProvince", provinceId: null }),
  81:     toggle3D: () => dispatch({ type: "toggle3D" }),
  82:     reset: () => dispatch({ type: "reset" })
  83:   };
  84: }

 succeeded in 827ms:
   1: import clsx from "clsx";
   2: import type { CityRecord } from "../../data/atlas";
   3: import { useAtlas } from "../../store/atlas";
   4: import { useLang } from "../../store/language";
   5: import { useCityViewCount, useRecordCityView } from "../../hooks/useCityViews";
   6: import { formatNumber } from "../../lib/format";
   7: 
   8: export default function CityList({ cities }: { cities: CityRecord[] }) {
   9:   const { t, lang } = useLang();
  10:   const { selectedCityId, selectCity } = useAtlas();
  11:   const recordView = useRecordCityView();
  12: 
  13:   if (!cities.length) {
  14:     return (
  15:       <div className="grid place-items-center rounded-xl border border-dashed border-line p-8 text-sm text-muted">
  16:         {t("mapHintPending")}
  17:       </div>
  18:     );
  19:   }
  20: 
  21:   return (
  22:     <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
  23:       {cities.map((city) => (
  24:         <CityCard
  25:           key={city.id}
  26:           city={city}
  27:           active={city.id === selectedCityId}
  28:           onSelect={() => {
  29:             recordView(city.id);
  30:             selectCity(city.id);
  31:           }}
  32:           viewsLabel={t("views")}
  33:           lang={lang}
  34:         />
  35:       ))}
  36:     </ul>
  37:   );
  38: }
  39: 
  40: type CardProps = {
  41:   city: CityRecord;
  42:   active: boolean;
  43:   onSelect: () => void;
  44:   viewsLabel: string;
  45:   lang: "en" | "zh";
  46: };
  47: 
  48: function CityCard({ city, active, onSelect, viewsLabel, lang }: CardProps) {
  49:   const total = useCityViewCount(city.id, city.baseViews);
  50:   return (
  51:     <li>
  52:       <button
  53:         type="button"
  54:         onClick={onSelect}
  55:         className={clsx(
  56:           "flex w-full flex-col gap-1 rounded-xl border bg-white px-4 py-3 text-left transition",
  57:           active ? "border-jade ring-1 ring-jade/40" : "border-line hover:border-jade/40"
  58:         )}
  59:       >
  60:         <strong className="text-base">{lang === "zh" ? city.zh : city.name}</strong>
  61:         <span className="text-xs text-muted">{lang === "zh" ? city.name : city.zh}</span>
  62:         <span className="text-sm">{lang === "zh" ? city.museumZh || city.museum : city.museum}</span>
  63:         <span className="mt-1 text-xs text-muted">
  64:           {formatNumber(total)} {viewsLabel}
  65:         </span>
  66:       </button>
  67:     </li>
  68:   );
  69: }

 succeeded in 914ms:
   1: import { useLang } from "../../store/language";
   2: import { useAtlas } from "../../store/atlas";
   3: import ProvinceRail from "./ProvinceRail";
   4: import CityList from "./CityList";
   5: import CityProfile from "./CityProfile";
   6: 
   7: export default function AtlasSection() {
   8:   const { t } = useLang();
   9:   const { province } = useAtlas();
  10: 
  11:   return (
  12:     <section id="atlas" className="flex flex-col gap-4">
  13:       <header className="flex flex-wrap items-end justify-between gap-3">
  14:         <div>
  15:           <h2 className="text-2xl font-bold">{t("atlasTitle")}</h2>
  16:           <p className="text-sm text-muted">{t("atlasBody")}</p>
  17:         </div>
  18:       </header>
  19: 
  20:       <div className="grid gap-4 md:grid-cols-[260px_minmax(0,1fr)_360px]">
  21:         <ProvinceRail />
  22:         <div className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4">
  23:           <header className="flex items-baseline justify-between">
  24:             <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
  25:             <h3 className="text-lg font-bold">{province ? province.name : "China"}</h3>
  26:           </header>
  27:           <CityList cities={province?.cities ?? []} />
  28:         </div>
  29:         <CityProfile />
  30:       </div>
  31:     </section>
  32:   );
  33: }

 succeeded in 960ms:
   1: import { accessLabels, statusLabels } from "../../data/i18n";
   2: import { useAtlas } from "../../store/atlas";
   3: import { useLang } from "../../store/language";
   4: import { useCityViewCount } from "../../hooks/useCityViews";
   5: import { formatNumber } from "../../lib/format";
   6: 
   7: export default function CityProfile() {
   8:   const { city, selectCity } = useAtlas();
   9:   const { t, lang } = useLang();
  10:   const views = useCityViewCount(city?.id ?? "", city?.baseViews ?? 0);
  11: 
  12:   if (!city) {
  13:     return (
  14:       <aside className="flex flex-col items-start gap-2 rounded-xl border border-dashed border-line bg-white p-6">
  15:         <h3 className="text-lg font-bold">{t("selectCity")}</h3>
  16:         <p className="text-sm text-muted">{t("selectCityBody")}</p>
  17:       </aside>
  18:     );
  19:   }
  20: 
  21:   const sites = lang === "zh" ? city.sitesZh : city.sites;
  22: 
  23:   return (
  24:     <article className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
  25:       <header className="flex items-start justify-between gap-4">
  26:         <div>
  27:           <span className="text-xs font-bold uppercase tracking-widest text-muted">{city.province}</span>
  28:           <h3 className="text-2xl font-bold leading-tight">{lang === "zh" ? city.zh : city.name}</h3>
  29:           <p className="text-sm text-muted">{lang === "zh" ? city.name : city.zh}</p>
  30:         </div>
  31:         <span className="rounded-full bg-paper px-3 py-1 text-xs font-bold text-muted">
  32:           {statusLabels[lang][city.status] ?? city.status}
  33:         </span>
  34:       </header>
  35: 
  36:       <section className="rounded-lg bg-paper p-4">
  37:         <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("startHere")}</span>
  38:         <h4 className="text-lg font-bold">{lang === "zh" ? city.museumZh || city.museum : city.museum}</h4>
  39:         <p className="mt-1 text-sm leading-relaxed">
  40:           {lang === "zh" ? city.museumRoleZh || city.museumRole : city.museumRole}
  41:         </p>
  42:       </section>
  43: 
  44:       <dl className="grid grid-cols-2 gap-3 text-sm">
  45:         <Stat label={t("pageViews")} value={formatNumber(views)} />
  46:         <Stat label={t("visitorNotes")} value={formatNumber(city.notes)} />
  47:         <Stat label={t("lastVerified")} value={city.verified} />
  48:         <Stat label={t("englishAccess")} value={accessLabels[lang][city.access] ?? city.access} />
  49:       </dl>
  50: 
  51:       <section className="flex flex-col gap-1">
  52:         <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("historicalIdentity")}</h4>
  53:         <p className="text-sm leading-relaxed">{lang === "zh" ? city.historyZh || city.history : city.history}</p>
  54:       </section>
  55: 
  56:       <section className="flex flex-col gap-1">
  57:         <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("thenExplore")}</h4>
  58:         <ul className="grid list-inside list-disc gap-1 text-sm">
  59:           {sites.map((site) => (
  60:             <li key={site}>{site}</li>
  61:           ))}
  62:         </ul>
  63:       </section>
  64: 
  65:       <footer className="border-t border-line pt-3 text-xs text-muted">
  66:         <strong className="block text-ink">{t("sourcePolicy")}</strong>
  67:         <p className="mt-1">{t("sourcePolicyBody")}</p>
  68:         <button
  69:           type="button"
  70:           onClick={() => selectCity(null)}
  71:           className="mt-3 text-xs font-bold uppercase tracking-wider text-jade hover:underline"
  72:         >
  73:           {t("close")}
  74:         </button>
  75:       </footer>
  76:     </article>
  77:   );
  78: }
  79: 
  80: function Stat({ label, value }: { label: string; value: string }) {
  81:   return (
  82:     <div className="rounded-lg bg-paper p-3">
  83:       <dt className="text-xs font-bold uppercase tracking-widest text-muted">{label}</dt>
  84:       <dd className="mt-1 text-base font-bold">{value}</dd>
  85:     </div>
  86:   );
  87: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$files = rg --files v2/src/components v2/src/hooks v2/src/services; foreach($f in $files){ $base=[IO.Path]::GetFileNameWithoutExtension($f); $count=(rg -n "'"\\b"'$base'"\\b\" v2/src | Measure-Object).Count; if("'$count -le 2){ "$count`t$f" } }' in c:\Users\h\Documents\New project 2
 succeeded in 2984ms:
1	v2/src/components\sections\HistoryVideo.tsx
1	v2/src/components\sections\MuseumFlow.tsx
1	v2/src/components\common\PageSources.tsx
1	v2/src/components\city\CityHero.tsx
2	v2/src/components\map\provinceColors.ts
1	v2/src/components\atlas\AtlasSection.tsx
1	v2/src/components\map\EarthIntro.tsx
1	v2/src/components\search\PlaceSearch.tsx

codex
构建在配置阶段失败了：`vite-plugin-static-copy` 在 `package.json` 里声明了但当前安装树为空。lint 通过，所以后续我继续做代码级审查，并把这个作为阻断项记录。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc -p tsconfig.app.json --noEmit' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "AtlasSection|PlaceSearch|CityHero|MuseumFlow|HistoryVideo|EarthIntro|PageSources" v2/src' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"from \\\"react-router\\\"|from 'react-router'|react-router-dom|BrowserRouter\" v2/src" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "TODO|FIXME|Phase 2|coming soon|placeholder|not enabled|throw new Error" v2/src' in c:\Users\h\Documents\New project 2
2026-05-12T02:31:47.430597Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.9 seconds
Output:
rg: 'react-router'|react-router-dom|BrowserRouter v2/src: IO error for operation on 'react-router'|react-router-dom|BrowserRouter v2/src: 文件名、目录名或卷标语法不正确。 (os error 123)

 exited 1 in 862ms:
rg: 'react-router'|react-router-dom|BrowserRouter v2/src: IO error for operation on 'react-router'|react-router-dom|BrowserRouter v2/src: 文件名、目录名或卷标语法不正确。 (os error 123)

 succeeded in 878ms:
v2/src\components\atlas\AtlasSection.tsx:7:export default function AtlasSection() {
v2/src\components\city\CityHero.tsx:8:export default function CityHero({ cityId }: Props) {
v2/src\components\common\PageSources.tsx:6:export default function PageSources({ ids }: Props) {
v2/src\components\map\EarthIntro.tsx:27:export default function EarthIntro({ onDone }: Props) {
v2/src\components\search\PlaceSearch.tsx:7:export default function PlaceSearch() {
v2/src\components\sections\MuseumFlow.tsx:10:export default function MuseumFlow() {
v2/src\components\sections\HistoryVideo.tsx:3:export default function HistoryVideo() {

 succeeded in 882ms:
v2/src\lib\shapes.ts:17:        if (!response.ok) throw new Error("Failed to load province shapes");
v2/src\pages\SharePage.tsx:13:          {isZh ? "Phase 2 · 即将上线" : "Phase 2 · coming soon"}
v2/src\pages\SharePage.tsx:69:              placeholder="DE / US / JP / FR …"
v2/src\pages\SharePage.tsx:70:              className="rounded-lg border border-line bg-white px-3 py-2 text-sm placeholder-muted"
v2/src\pages\SharePage.tsx:78:              placeholder={
v2/src\pages\SharePage.tsx:83:              className="rounded-lg border border-line bg-white px-3 py-2 text-sm placeholder-muted"
v2/src\pages\SharePage.tsx:112:            {isZh ? "提交（Phase 2 上线后启用）" : "Submit (enabled when Phase 2 ships)"}
v2/src\pages\CityPage.tsx:57:            <h2 className="text-base font-bold">{isZh ? "Phase 2 即将上线" : "Phase 2 — coming soon"}</h2>
v2/src\store\atlas.ts:67:  if (!ctx) throw new Error("useAtlas must be used within <AtlasProvider>");
v2/src\pages\AskPage.tsx:14:          {isZh ? "Phase 2 · 即将上线" : "Phase 2 · coming soon"}
v2/src\services\notes.ts:15:  throw new Error("Submissions are not enabled in Phase 1.");
v2/src\store\language.ts:14:  if (!value) throw new Error("useLang must be used within <LanguageProvider>");
v2/src\data\phase2-preview.ts:2: * Phase 2 preview data — visual showcase of the Q&A and travel-share features
v2/src\components\search\PlaceSearch.tsx:36:        placeholder={t("searchPlaceholder")}

2026-05-12T02:31:53.600161Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 7 seconds
Output:
src/components/map/Map3D.tsx(7,35): error TS2307: Cannot find module 'cesium' or its corresponding type declarations.
src/components/map/Map3D.tsx(307,37): error TS2307: Cannot find module 'cesium' or its corresponding type declarations.

 exited 1 in 7040ms:
src/components/map/Map3D.tsx(7,35): error TS2307: Cannot find module 'cesium' or its corresponding type declarations.
src/components/map/Map3D.tsx(307,37): error TS2307: Cannot find module 'cesium' or its corresponding type declarations.

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm ls cesium --depth=0' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm ls three --depth=0' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n 'from \"react-router\"|from ''react-router''|react-router-dom|BrowserRouter' v2/src" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "cesium|vite-plugin-static-copy" v2/package.json v2/package-lock.json v2/vite.config.ts v2/src/components/map/Map3D.tsx' in c:\Users\h\Documents\New project 2
 succeeded in 803ms:
v2/vite.config.ts:4:import { viteStaticCopy } from "vite-plugin-static-copy";
v2/vite.config.ts:6:const cesiumSource = "node_modules/cesium/Build/Cesium";
v2/vite.config.ts:10:    CESIUM_BASE_URL: JSON.stringify("/cesium")
v2/vite.config.ts:17:        { src: `${cesiumSource}/Workers`, dest: "cesium" },
v2/vite.config.ts:18:        { src: `${cesiumSource}/Assets`, dest: "cesium" },
v2/vite.config.ts:19:        { src: `${cesiumSource}/Widgets`, dest: "cesium" },
v2/vite.config.ts:20:        { src: `${cesiumSource}/ThirdParty`, dest: "cesium" }
v2/package-lock.json:14:        "cesium": "^1.141.0",
v2/package-lock.json:22:        "vite-plugin-static-copy": "^4.1.0"
v2/package-lock.json:473:    "node_modules/@cesium/engine": {
v2/package-lock.json:475:      "resolved": "https://registry.npmjs.org/@cesium/engine/-/engine-25.0.0.tgz",
v2/package-lock.json:479:        "@cesium/wasm-splats": "^0.1.0-alpha.2",
v2/package-lock.json:505:    "node_modules/@cesium/engine/node_modules/@tweenjs/tween.js": {
v2/package-lock.json:511:    "node_modules/@cesium/wasm-splats": {
v2/package-lock.json:513:      "resolved": "https://registry.npmjs.org/@cesium/wasm-splats/-/wasm-splats-0.1.0-alpha.2.tgz",
v2/package-lock.json:517:    "node_modules/@cesium/widgets": {
v2/package-lock.json:519:      "resolved": "https://registry.npmjs.org/@cesium/widgets/-/widgets-15.0.0.tgz",
v2/package-lock.json:523:        "@cesium/engine": "^25.0.0",
v2/package-lock.json:2851:    "node_modules/cesium": {
v2/package-lock.json:2853:      "resolved": "https://registry.npmjs.org/cesium/-/cesium-1.141.0.tgz",
v2/package-lock.json:2862:        "@cesium/engine": "^25.0.0",
v2/package-lock.json:2863:        "@cesium/widgets": "^15.0.0"
v2/package-lock.json:4910:    "node_modules/vite-plugin-static-copy": {
v2/package-lock.json:4912:      "resolved": "https://registry.npmjs.org/vite-plugin-static-copy/-/vite-plugin-static-copy-4.1.0.tgz",
v2/package-lock.json:4932:    "node_modules/vite-plugin-static-copy/node_modules/chokidar": {
v2/package-lock.json:4956:    "node_modules/vite-plugin-static-copy/node_modules/glob-parent": {
v2/package-lock.json:4968:    "node_modules/vite-plugin-static-copy/node_modules/picomatch": {
v2/package-lock.json:4980:    "node_modules/vite-plugin-static-copy/node_modules/readdirp": {
v2/src/components/map/Map3D.tsx:2:import "cesium/Build/Cesium/Widgets/widgets.css";
v2/src/components/map/Map3D.tsx:7:type CesiumModule = typeof import("cesium");
v2/src/components/map/Map3D.tsx:307:        const Cesium = await import("cesium");
v2/package.json:17:    "cesium": "^1.141.0",
v2/package.json:25:    "vite-plugin-static-copy": "^4.1.0"

 succeeded in 812ms:
v2/src\App.tsx:1:import { BrowserRouter, Route, Routes } from "react-router";
v2/src\App.tsx:16:    <BrowserRouter>
v2/src\App.tsx:33:    </BrowserRouter>

2026-05-12T02:32:05.054636Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 2.1 seconds
Output:
v2@0.0.0 C:\Users\h\Documents\New project 2\v2
`-- (empty)


 exited 1 in 2133ms:
v2@0.0.0 C:\Users\h\Documents\New project 2\v2
`-- (empty)


 succeeded in 2132ms:
v2@0.0.0 C:\Users\h\Documents\New project 2\v2
`-- three@0.184.0


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/map/Province3DOverlay.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/map/Map3D.tsx | Select-Object -First 430 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/hooks/useProvinceShapes.ts | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/map/MapPreview.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 860ms:
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
  21:             {lang === "zh" ? "天地图 3D" : "Tianditu 3D"}
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
  34:             {lang === "zh" ? "返回 2D" : "Back to 2D"}
  35:           </button>
  36:           <button
  37:             type="button"
  38:             aria-label={lang === "zh" ? "关闭 3D 地图" : "Close 3D map"}
  39:             onClick={reset}
  40:             className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-lg font-bold leading-none text-ink shadow-sm hover:border-jade hover:text-jade"
  41:           >
  42:             ×
  43:           </button>
  44:         </div>
  45:       </header>
  46: 
  47:       <div className="min-h-0 flex-1">
  48:         <Suspense
  49:           fallback={
  50:             <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
  51:               {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
  52:             </div>
  53:           }
  54:         >
  55:           <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
  56:         </Suspense>
  57:       </div>
  58:     </section>
  59:   );
  60: }

 succeeded in 970ms:
   1: import { useEffect, useState } from "react";
   2: import { loadProvinceShapes, type ShapeMap } from "../lib/shapes";
   3: 
   4: export function useProvinceShapes(): ShapeMap | null {
   5:   const [shapes, setShapes] = useState<ShapeMap | null>(null);
   6:   useEffect(() => {
   7:     let cancelled = false;
   8:     loadProvinceShapes()
   9:       .then((data) => {
  10:         if (!cancelled) setShapes(data);
  11:       })
  12:       .catch((error) => {
  13:         console.warn("Province shapes failed to load:", error);
  14:       });
  15:     return () => {
  16:       cancelled = true;
  17:     };
  18:   }, []);
  19:   return shapes;
  20: }

 succeeded in 1001ms:
   1: import { useMemo } from "react";
   2: import { useProvinceShapes } from "../../hooks/useProvinceShapes";
   3: import { computeUnionViewBox } from "../../lib/shapes";
   4: import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
   5: 
   6: export default function MapPreview() {
   7:   const shapes = useProvinceShapes();
   8:   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
   9: 
  10:   if (!shapes || !viewBox) {
  11:     return <div className="h-full w-full bg-white/70" />;
  12:   }
  13: 
  14:   return (
  15:     <svg
  16:       viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
  17:       preserveAspectRatio="xMidYMid meet"
  18:       className="h-full w-full"
  19:       aria-hidden
  20:     >
  21:       {Object.values(shapes).map((shape) =>
  22:         shape.paths.map((path, index) => (
  23:           <path
  24:             key={`${shape.id}-${index}`}
  25:             d={path}
  26:             fill={PROVINCE_COLORS[shape.id] ?? DEFAULT_PROVINCE_FILL}
  27:             stroke="rgba(78,91,85,0.72)"
  28:             strokeWidth={0.85}
  29:             strokeLinejoin="round"
  30:             vectorEffect="non-scaling-stroke"
  31:           />
  32:         ))
  33:       )}
  34:     </svg>
  35:   );
  36: }

 succeeded in 1099ms:
   1: import { useEffect, useMemo, useRef, useState } from "react";
   2: import "cesium/Build/Cesium/Widgets/widgets.css";
   3: import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
   4: import type { Lang } from "../../data/i18n";
   5: import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
   6: 
   7: type CesiumModule = typeof import("cesium");
   8: type CesiumViewer = InstanceType<CesiumModule["Viewer"]>;
   9: 
  10: type Map3DProps = {
  11:   province: ProvinceRecord;
  12:   provinceId: string;
  13:   lang: Lang;
  14: };
  15: 
  16: type LonLat = {
  17:   lon: number;
  18:   lat: number;
  19: };
  20: 
  21: type CameraBounds = {
  22:   west: number;
  23:   south: number;
  24:   east: number;
  25:   north: number;
  26: };
  27: 
  28: type MapLoadState = "loading" | "ready" | "missing-key" | "blocked" | "error";
  29: 
  30: const CHINA_BOUNDS = {
  31:   west: 73,
  32:   east: 135,
  33:   south: 18,
  34:   north: 54
  35: };
  36: 
  37: const TDT_SUBDOMAINS = ["0", "1", "2", "3", "4", "5", "6", "7"];
  38: const TILE_MATRIX_LABELS = Array.from({ length: 18 }, (_, index) => String(index + 1));
  39: 
  40: const FALLBACK_AREA: ProvinceHitArea = {
  41:   id: "china",
  42:   en: "China",
  43:   zh: "中国",
  44:   x: 55,
  45:   y: 55,
  46:   w: 42,
  47:   h: 34
  48: };
  49: 
  50: const ATTRACTION_OFFSETS = [
  51:   { lon: -0.9, lat: 0.55 },
  52:   { lon: 0.95, lat: 0.45 },
  53:   { lon: -0.45, lat: -0.72 },
  54:   { lon: 0.65, lat: -0.62 },
  55:   { lon: 0, lat: 0.95 }
  56: ];
  57: 
  58: function percentToLonLat(x: number, y: number): LonLat {
  59:   return {
  60:     lon: CHINA_BOUNDS.west + (x / 100) * (CHINA_BOUNDS.east - CHINA_BOUNDS.west),
  61:     lat: CHINA_BOUNDS.north - (y / 100) * (CHINA_BOUNDS.north - CHINA_BOUNDS.south)
  62:   };
  63: }
  64: 
  65: function areaToCameraBounds(area: ProvinceHitArea): CameraBounds {
  66:   const center = percentToLonLat(area.x, area.y);
  67:   const lonSpan = Math.max(1.2, (area.w / 100) * (CHINA_BOUNDS.east - CHINA_BOUNDS.west) * 0.7);
  68:   const latSpan = Math.max(1, (area.h / 100) * (CHINA_BOUNDS.north - CHINA_BOUNDS.south) * 0.7);
  69: 
  70:   return {
  71:     west: Math.max(CHINA_BOUNDS.west, center.lon - lonSpan),
  72:     south: Math.max(CHINA_BOUNDS.south, center.lat - latSpan),
  73:     east: Math.min(CHINA_BOUNDS.east, center.lon + lonSpan),
  74:     north: Math.min(CHINA_BOUNDS.north, center.lat + latSpan)
  75:   };
  76: }
  77: 
  78: function getProvinceArea(provinceId: string) {
  79:   return provinceHitAreas.find((area) => area.id === provinceId) ?? FALLBACK_AREA;
  80: }
  81: 
  82: function getProvinceLabel(province: ProvinceRecord, lang: Lang) {
  83:   return lang === "zh" ? province.zh : province.name;
  84: }
  85: 
  86: function getEntityText(zh: string, en: string, lang: Lang) {
  87:   return lang === "zh" ? zh : en;
  88: }
  89: 
  90: function getCityPosition(cityId: string, fallbackArea: ProvinceHitArea, index: number): LonLat {
  91:   const point = cityMapPoints[cityId];
  92:   if (point) return percentToLonLat(point.x, point.y);
  93: 
  94:   const center = percentToLonLat(fallbackArea.x, fallbackArea.y);
  95:   const spreadLon = Math.max(0.35, (fallbackArea.w / 100) * (CHINA_BOUNDS.east - CHINA_BOUNDS.west) * 0.18);
  96:   const spreadLat = Math.max(0.28, (fallbackArea.h / 100) * (CHINA_BOUNDS.north - CHINA_BOUNDS.south) * 0.18);
  97:   const angle = (Math.PI * 2 * index) / Math.max(3, fallbackArea.w);
  98: 
  99:   return {
 100:     lon: center.lon + Math.cos(angle) * spreadLon,
 101:     lat: center.lat + Math.sin(angle) * spreadLat
 102:   };
 103: }
 104: 
 105: function getAttractionPosition(area: ProvinceHitArea, index: number): LonLat {
 106:   const center = percentToLonLat(area.x, area.y);
 107:   const offset = ATTRACTION_OFFSETS[index % ATTRACTION_OFFSETS.length];
 108:   const spreadLon = Math.max(0.45, (area.w / 100) * (CHINA_BOUNDS.east - CHINA_BOUNDS.west) * 0.2);
 109:   const spreadLat = Math.max(0.36, (area.h / 100) * (CHINA_BOUNDS.north - CHINA_BOUNDS.south) * 0.2);
 110: 
 111:   return {
 112:     lon: center.lon + offset.lon * spreadLon,
 113:     lat: center.lat + offset.lat * spreadLat
 114:   };
 115: }
 116: 
 117: function createTiandituProvider(
 118:   Cesium: CesiumModule,
 119:   token: string,
 120:   service: "img" | "ter" | "cia",
 121:   credit: string
 122: ) {
 123:   return new Cesium.WebMapTileServiceImageryProvider({
 124:     url: `https://t{s}.tianditu.gov.cn/${service}_w/wmts?tk=${token}`,
 125:     layer: service,
 126:     style: "default",
 127:     format: "tiles",
 128:     tileMatrixSetID: "w",
 129:     subdomains: TDT_SUBDOMAINS,
 130:     tileMatrixLabels: TILE_MATRIX_LABELS,
 131:     maximumLevel: 18,
 132:     credit: new Cesium.Credit(credit)
 133:   });
 134: }
 135: 
 136: function buildTiandituTileUrl(
 137:   token: string,
 138:   service: "img" | "ter" | "cia",
 139:   tileMatrix = 4,
 140:   tileRow = 6,
 141:   tileCol = 12
 142: ) {
 143:   const params = new URLSearchParams({
 144:     SERVICE: "WMTS",
 145:     REQUEST: "GetTile",
 146:     VERSION: "1.0.0",
 147:     LAYER: service,
 148:     STYLE: "default",
 149:     TILEMATRIXSET: "w",
 150:     FORMAT: "tiles",
 151:     TILEMATRIX: String(tileMatrix),
 152:     TILEROW: String(tileRow),
 153:     TILECOL: String(tileCol),
 154:     tk: token
 155:   });
 156: 
 157:   return `https://t0.tianditu.gov.cn/${service}_w/wmts?${params.toString()}`;
 158: }
 159: 
 160: function preloadImage(src: string) {
 161:   return new Promise<void>((resolve, reject) => {
 162:     const image = new Image();
 163:     image.onload = () => resolve();
 164:     image.onerror = () => reject(new Error("Tianditu tile failed to load"));
 165:     image.decoding = "async";
 166:     image.src = src;
 167:   });
 168: }
 169: 
 170: function addTiandituLayers(Cesium: CesiumModule, viewer: CesiumViewer, token: string) {
 171:   viewer.imageryLayers.removeAll();
 172: 
 173:   const imageLayer = viewer.imageryLayers.addImageryProvider(
 174:     createTiandituProvider(Cesium, token, "img", "Tianditu imagery")
 175:   );
 176:   imageLayer.saturation = 1.12;
 177:   imageLayer.contrast = 1.08;
 178:   imageLayer.brightness = 0.96;
 179: 
 180:   const terrainLayer = viewer.imageryLayers.addImageryProvider(
 181:     createTiandituProvider(Cesium, token, "ter", "Tianditu terrain relief")
 182:   );
 183:   terrainLayer.alpha = 0.28;
 184: 
 185:   const labelLayer = viewer.imageryLayers.addImageryProvider(
 186:     createTiandituProvider(Cesium, token, "cia", "Tianditu labels")
 187:   );
 188:   labelLayer.alpha = 0.92;
 189: }
 190: 
 191: function addProvinceFrame(
 192:   Cesium: CesiumModule,
 193:   viewer: CesiumViewer,
 194:   bounds: CameraBounds,
 195:   provinceLabel: string
 196: ) {
 197:   viewer.entities.add({
 198:     id: "selected-province-frame",
 199:     name: provinceLabel,
 200:     rectangle: {
 201:       coordinates: Cesium.Rectangle.fromDegrees(bounds.west, bounds.south, bounds.east, bounds.north),
 202:       material: Cesium.Color.fromCssColorString("#53d1bd").withAlpha(0.12),
 203:       outline: true,
 204:       outlineColor: Cesium.Color.fromCssColorString("#55f2d9")
 205:     }
 206:   });
 207: }
 208: 
 209: function addLabelEntity(
 210:   Cesium: CesiumModule,
 211:   viewer: CesiumViewer,
 212:   position: LonLat,
 213:   text: string,
 214:   color: string,
 215:   size: number
 216: ) {
 217:   viewer.entities.add({
 218:     position: Cesium.Cartesian3.fromDegrees(position.lon, position.lat, 16000),
 219:     point: {
 220:       pixelSize: size,
 221:       color: Cesium.Color.fromCssColorString(color),
 222:       outlineColor: Cesium.Color.WHITE,
 223:       outlineWidth: 2,
 224:       disableDepthTestDistance: Number.POSITIVE_INFINITY
 225:     },
 226:     label: {
 227:       text,
 228:       font: "600 14px Microsoft YaHei, system-ui, sans-serif",
 229:       fillColor: Cesium.Color.WHITE,
 230:       outlineColor: Cesium.Color.fromCssColorString("#101815"),
 231:       outlineWidth: 4,
 232:       style: Cesium.LabelStyle.FILL_AND_OUTLINE,
 233:       verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
 234:       pixelOffset: new Cesium.Cartesian2(0, -12),
 235:       disableDepthTestDistance: Number.POSITIVE_INFINITY
 236:     }
 237:   });
 238: }
 239: 
 240: function addProvinceEntities(
 241:   Cesium: CesiumModule,
 242:   viewer: CesiumViewer,
 243:   province: ProvinceRecord,
 244:   provinceId: string,
 245:   area: ProvinceHitArea,
 246:   lang: Lang
 247: ) {
 248:   const center = percentToLonLat(area.x, area.y);
 249:   addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
 250: 
 251:   province.cities.forEach((city, index) => {
 252:     const position = getCityPosition(city.id, area, index + 1);
 253:     addLabelEntity(Cesium, viewer, position, getEntityText(city.zh, city.name, lang), "#3b82f6", 11);
 254:   });
 255: 
 256:   const attractions = provinceAttractionSeed[provinceId] ?? [];
 257:   attractions.forEach((attraction, index) => {
 258:     const position = getAttractionPosition(area, index);
 259:     addLabelEntity(Cesium, viewer, position, getEntityText(attraction.zh, attraction.en, lang), "#f59e0b", 9);
 260:   });
 261: }
 262: 
 263: function focusCamera(Cesium: CesiumModule, viewer: CesiumViewer, bounds: CameraBounds) {
 264:   const width = bounds.east - bounds.west;
 265:   const height = bounds.north - bounds.south;
 266:   const centerLon = (bounds.west + bounds.east) / 2;
 267:   const centerLat = (bounds.south + bounds.north) / 2;
 268:   const altitude = Math.max(380000, Math.max(width, height) * 115000);
 269: 
 270:   viewer.camera.flyTo({
 271:     destination: Cesium.Cartesian3.fromDegrees(centerLon, centerLat - height * 0.35, altitude),
 272:     orientation: {
 273:       heading: Cesium.Math.toRadians(0),
 274:       pitch: Cesium.Math.toRadians(-58),
 275:       roll: 0
 276:     },
 277:     duration: 0.8
 278:   });
 279: }
 280: 
 281: function resolveProvince(provinceId: string, province: ProvinceRecord) {
 282:   return atlasData.find((item) => item.id === provinceId) ?? province;
 283: }
 284: 
 285: export default function Map3D({ province, provinceId, lang }: Map3DProps) {
 286:   const containerRef = useRef<HTMLDivElement | null>(null);
 287:   const viewerRef = useRef<CesiumViewer | null>(null);
 288:   const token = import.meta.env.VITE_TIANDITU_KEY?.trim() ?? "";
 289:   const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
 290:   const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
 291: 
 292:   useEffect(() => {
 293:     const container = containerRef.current;
 294:     if (!container) return;
 295: 
 296:     if (!token) return;
 297: 
 298:     let cancelled = false;
 299:     let creditContainer: HTMLDivElement | null = document.createElement("div");
 300:     creditContainer.className = "hidden";
 301:     container.appendChild(creditContainer);
 302: 
 303:     async function initCesium() {
 304:       try {
 305:         setLoadState("loading");
 306:         await preloadImage(buildTiandituTileUrl(token, "img"));
 307:         const Cesium = await import("cesium");
 308:         if (cancelled || !container || !creditContainer) return;
 309: 
 310:         const viewerOptions = {
 311:           animation: false,
 312:           baseLayer: false,
 313:           baseLayerPicker: false,
 314:           fullscreenButton: false,
 315:           geocoder: false,
 316:           homeButton: false,
 317:           infoBox: false,
 318:           navigationHelpButton: false,
 319:           sceneModePicker: false,
 320:           selectionIndicator: false,
 321:           timeline: false,
 322:           vrButton: false,
 323:           showRenderLoopErrors: false,
 324:           creditContainer,
 325:           sceneMode: Cesium.SceneMode.SCENE3D,
 326:           requestRenderMode: true,
 327:           maximumRenderTimeChange: Infinity
 328:         } as ConstructorParameters<CesiumModule["Viewer"]>[1];
 329: 
 330:         const viewer = new Cesium.Viewer(container, viewerOptions);
 331:         viewerRef.current = viewer;
 332: 
 333:         viewer.scene.globe.baseColor = Cesium.Color.fromCssColorString("#061410");
 334:         viewer.scene.globe.depthTestAgainstTerrain = false;
 335:         if (viewer.scene.skyAtmosphere) {
 336:           viewer.scene.skyAtmosphere.show = true;
 337:         }
 338:         viewer.scene.fog.enabled = true;
 339: 
 340:         addTiandituLayers(Cesium, viewer, token);
 341: 
 342:         const area = getProvinceArea(provinceId);
 343:         const bounds = areaToCameraBounds(area);
 344:         addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
 345:         addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
 346:         focusCamera(Cesium, viewer, bounds);
 347: 
 348:         if (!cancelled) setLoadState("ready");
 349:       } catch (error) {
 350:         console.error(error);
 351:         if (!cancelled) {
 352:           setLoadState(error instanceof Error && error.message.includes("Tianditu tile") ? "blocked" : "error");
 353:         }
 354:       }
 355:     }
 356: 
 357:     void initCesium();
 358: 
 359:     return () => {
 360:       cancelled = true;
 361:       if (viewerRef.current && !viewerRef.current.isDestroyed()) {
 362:         viewerRef.current.destroy();
 363:       }
 364:       viewerRef.current = null;
 365:       if (creditContainer?.parentNode) {
 366:         creditContainer.parentNode.removeChild(creditContainer);
 367:       }
 368:       creditContainer = null;
 369:     };
 370:   }, [lang, provinceId, selectedProvince, token]);
 371: 
 372:   return (
 373:     <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
 374:       <div ref={containerRef} className="absolute inset-0" />
 375: 
 376:       {loadState === "loading" && (
 377:         <div className="absolute inset-0 z-10 grid place-items-center bg-[#071512] text-sm font-semibold text-white/80">
 378:           {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
 379:         </div>
 380:       )}
 381: 
 382:       {loadState === "missing-key" && (
 383:         <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#071512] px-6 text-center text-white">
 384:           <div className="w-full max-w-md rounded-lg border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur sm:p-5">
 385:             <h3 className="text-lg font-bold">{lang === "zh" ? "需要配置天地图 tk" : "Tianditu token required"}</h3>
 386:             <p className="mt-2 text-sm text-white/75">
 387:               {lang === "zh"
 388:                 ? "在 v2/.env.local 里写入下面这一行，然后重启 dev server。"
 389:                 : "Add this line to v2/.env.local, then restart the dev server."}
 390:             </p>
 391:             <code className="mt-4 block overflow-x-auto whitespace-nowrap rounded bg-black/40 px-3 py-2 text-left text-xs text-emerald-200">
 392:               VITE_TIANDITU_KEY=your_tianditu_tk_here
 393:             </code>
 394:           </div>
 395:         </div>
 396:       )}
 397: 
 398:       {loadState === "error" && (
 399:         <div className="absolute inset-0 z-10 grid place-items-center bg-[#071512] px-6 text-center text-sm font-semibold text-red-100">
 400:           {lang === "zh" ? "天地图加载失败，检查 tk 或网络。" : "Tianditu failed to load. Check the token or network."}
 401:         </div>
 402:       )}
 403: 
 404:       {loadState === "blocked" && (
 405:         <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#071512] px-6 text-center text-white">
 406:           <div className="w-full max-w-lg rounded-lg border border-red-200/25 bg-red-950/55 p-4 shadow-2xl backdrop-blur sm:p-5">
 407:             <h3 className="text-lg font-bold">
 408:               {lang === "zh" ? "天地图瓦片被拦截" : "Tianditu tiles are blocked"}
 409:             </h3>
 410:             <p className="mt-2 text-sm leading-relaxed text-red-50/85">
 411:               {lang === "zh"
 412:                 ? "当前 key 返回的不是地图图片。去天地图控制台检查 key 权限、域名白名单是否包含 127.0.0.1/localhost，以及服务类型是否允许浏览器端调用。"
 413:                 : "The current key is not returning map images. Check key permissions, domain whitelist for 127.0.0.1/localhost, and browser-side service access in the Tianditu console."}
 414:             </p>
 415:           </div>
 416:         </div>
 417:       )}
 418: 
 419:       {loadState === "ready" && (
 420:         <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-10 rounded-md border border-white/15 bg-black/45 px-3 py-2 text-xs font-semibold leading-snug text-white/85 backdrop-blur sm:right-auto">
 421:           {lang === "zh" ? "天地图影像 · 地形晕渲 · 中文注记 · 城市/景区标注" : "Tianditu imagery · terrain relief · labels · city and attraction markers"}
 422:         </div>
 423:       )}
 424:     </div>
 425:   );
 426: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/lib/shapes.ts | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 615ms:
   1: export type ProvinceShape = {
   2:   id: string;
   3:   name: string;
   4:   bounds: { left: number; right: number; bottom: number; top: number };
   5:   viewBox: { x: number; y: number; width: number; height: number };
   6:   paths: string[];
   7: };
   8: 
   9: export type ShapeMap = Readonly<Record<string, ProvinceShape>>;
  10: 
  11: let cached: Promise<ShapeMap> | null = null;
  12: 
  13: export const loadProvinceShapes = (): Promise<ShapeMap> => {
  14:   if (!cached) {
  15:     cached = fetch("/assets/china-province-shapes.json")
  16:       .then((response) => {
  17:         if (!response.ok) throw new Error("Failed to load province shapes");
  18:         return response.json();
  19:       })
  20:       .then((data) => Object.freeze((data?.provinces ?? {}) as Record<string, ProvinceShape>));
  21:   }
  22:   return cached;
  23: };
  24: 
  25: export type UnionViewBox = { x: number; y: number; width: number; height: number };
  26: 
  27: export const computeUnionViewBox = (shapes: ShapeMap, padPercent = 0.02): UnionViewBox => {
  28:   const list = Object.values(shapes);
  29:   if (!list.length) return { x: 0, y: 0, width: 1, height: 1 };
  30:   const left = Math.min(...list.map((s) => s.bounds.left));
  31:   const right = Math.max(...list.map((s) => s.bounds.right));
  32:   const bottom = Math.min(...list.map((s) => s.bounds.bottom));
  33:   const top = Math.max(...list.map((s) => s.bounds.top));
  34:   const width = right - left;
  35:   const height = top - bottom;
  36:   const padX = width * padPercent;
  37:   const padY = height * padPercent;
  38:   return {
  39:     x: left - padX,
  40:     y: -(top + padY),
  41:     width: width + padX * 2,
  42:     height: height + padY * 2
  43:   };
  44: };
  45: 
  46: export const computeFocusTransform = (
  47:   shape: ProvinceShape | null,
  48:   viewBox: UnionViewBox,
  49:   zoomPad = 0.78
  50: ): { tx: number; ty: number; scale: number } => {
  51:   if (!shape) return { tx: 0, ty: 0, scale: 1 };
  52:   const b = shape.bounds;
  53:   const provinceCenterX = (b.left + b.right) / 2;
  54:   const provinceCenterY = -(b.top + b.bottom) / 2;
  55:   const provinceWidth = b.right - b.left;
  56:   const provinceHeight = b.top - b.bottom;
  57:   const fitX = viewBox.width / provinceWidth;
  58:   const fitY = viewBox.height / provinceHeight;
  59:   const scale = Math.min(fitX, fitY) * zoomPad;
  60:   const viewCenterX = viewBox.x + viewBox.width / 2;
  61:   const viewCenterY = viewBox.y + viewBox.height / 2;
  62:   return {
  63:     tx: viewCenterX - provinceCenterX * scale,
  64:     ty: viewCenterY - provinceCenterY * scale,
  65:     scale
  66:   };
  67: };

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Recurse v2/public | Select-Object FullName,Length | Format-Table -AutoSize' in c:\Users\h\Documents\New project 2
 succeeded in 705ms:

FullName                                                                                     Length  
--------                                                                                     ------  
C:\Users\h\Documents\New project 2\v2\public\assets                                                  
C:\Users\h\Documents\New project 2\v2\public\favicon.svg                                     9522    
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures                            
C:\Users\h\Documents\New project 2\v2\public\assets\china-map-gs2022-4309.jpg                10577330
C:\Users\h\Documents\New project 2\v2\public\assets\china-province-shapes.json               116837  
C:\Users\h\Documents\New project 2\v2\public\assets\earth-bluemarble.jpg                     512606  
C:\Users\h\Documents\New project 2\v2\public\assets\three.module.min.js                      674422  
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\anhui.png          117059  
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\beijing.png        66345   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\chongqing.png      73050   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\fujian.png         94491   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\gansu.png          131792  
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\guangdong.png      100831  
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\guangxi.png        91813   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\guizhou.png        81063   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\hainan.png         53539   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\hebei.png          108054  
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\heilongjiang.png   97617   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\henan.png          87272   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\hong-kong.png      34504   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\hubei.png          86492   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\hunan.png          93545   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\inner-mongolia.png 156284  
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\jiangsu.png        87151   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\jiangxi.png        109543  
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\jilin.png          85976   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\liaoning.png       98208   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\macau.png          28594   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\ningxia.png        78842   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\qinghai.png        100655  
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\shaanxi.png        127289  
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\shandong.png       67978   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\shanghai.png       34575   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\shanxi.png         120633  
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\sichuan.png        136650  
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\taiwan.png         71574   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\tianjin.png        60532   
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\tibet.png          167233  
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\xinjiang.png       164332  
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\yunnan.png         139788  
C:\Users\h\Documents\New project 2\v2\public\assets\province-map-textures\zhejiang.png       82680   



exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/map/ProvinceHitAreaLayer.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/map/SpecialRegionMarkers.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/map/ProvinceLabelLayer.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/city/CityNav.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 788ms:
   1: import { provinceHitAreas } from "../../data/map-sources";
   2: import { useAtlas } from "../../store/atlas";
   3: import { useLang } from "../../store/language";
   4: 
   5: const specialMarkerIds = new Set(["hong-kong", "macau"]);
   6: 
   7: export default function ProvinceHitAreaLayer() {
   8:   const { lang } = useLang();
   9:   const { selectedProvinceId, selectPlace } = useAtlas();
  10: 
  11:   if (selectedProvinceId) return null;
  12: 
  13:   return (
  14:     <div className="absolute inset-0 z-[24]">
  15:       {provinceHitAreas
  16:         .filter((area) => !specialMarkerIds.has(area.id))
  17:         .map((area) => (
  18:           <button
  19:             key={area.id}
  20:             type="button"
  21:             tabIndex={-1}
  22:             data-province-hit={area.id}
  23:             aria-label={lang === "zh" ? area.zh : area.en}
  24:             onClick={() => selectPlace(area.id, null)}
  25:             className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
  26:             style={{
  27:               left: `${area.x}%`,
  28:               top: `${area.y}%`,
  29:               width: `${area.w}%`,
  30:               height: `${area.h}%`
  31:             }}
  32:           />
  33:         ))}
  34:     </div>
  35:   );
  36: }

 succeeded in 800ms:
   1: import type { CSSProperties } from "react";
   2: import { provinceHitAreas } from "../../data/map-sources";
   3: import { useAtlas } from "../../store/atlas";
   4: import { useLang } from "../../store/language";
   5: 
   6: const markerIds = new Set(["hong-kong", "macau"]);
   7: const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
   8:   "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
   9:   macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
  10: };
  11: 
  12: export default function SpecialRegionMarkers() {
  13:   const { lang } = useLang();
  14:   const { selectedProvinceId, selectPlace } = useAtlas();
  15:   const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));
  16: 
  17:   if (selectedProvinceId) return null;
  18: 
  19:   return (
  20:     <div className="pointer-events-none absolute inset-0 z-[25]">
  21:       {visible.map((area) => {
  22:         const offsets = markerOffsets[area.id];
  23:         const style = {
  24:           "--marker-left-desktop": `${area.x + (offsets?.desktopX ?? 0)}%`,
  25:           "--marker-top-desktop": `${area.y + (offsets?.desktopY ?? 0)}%`,
  26:           "--marker-left-mobile": `${area.x + (offsets?.mobileX ?? 0)}%`,
  27:           "--marker-top-mobile": `${area.y + (offsets?.mobileY ?? 0)}%`
  28:         } as CSSProperties;
  29: 
  30:         return (
  31:           <button
  32:             key={area.id}
  33:             type="button"
  34:             aria-label={lang === "zh" ? area.zh : area.en}
  35:             onClick={() => selectPlace(area.id, null)}
  36:             className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
  37:             style={style}
  38:           >
  39:             <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />
  40:             <span className="hidden sm:inline">{lang === "zh" ? area.zh : area.en}</span>
  41:           </button>
  42:         );
  43:       })}
  44:     </div>
  45:   );
  46: }

 succeeded in 869ms:
   1: import { useMemo } from "react";
   2: import clsx from "clsx";
   3: import { useProvinceShapes } from "../../hooks/useProvinceShapes";
   4: import { computeFocusTransform, computeUnionViewBox } from "../../lib/shapes";
   5: import { provinceHitAreas } from "../../data/map-sources";
   6: import { useAtlas } from "../../store/atlas";
   7: import { useLang } from "../../store/language";
   8: 
   9: const labelMap = new Map(provinceHitAreas.map((a) => [a.id, a]));
  10: 
  11: const TRANSITION =
  12:   "left 700ms cubic-bezier(0.4, 0, 0.2, 1), top 700ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease, font-size 400ms ease";
  13: 
  14: const HALO = {
  15:   textShadow:
  16:     "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 0 4px rgba(255,255,255,0.85)"
  17: };
  18: 
  19: export default function ProvinceLabelLayer() {
  20:   const shapes = useProvinceShapes();
  21:   const { lang } = useLang();
  22:   const { selectedProvinceId } = useAtlas();
  23: 
  24:   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
  25: 
  26:   const focus = useMemo(() => {
  27:     if (!shapes || !viewBox || !selectedProvinceId) return { tx: 0, ty: 0, scale: 1 };
  28:     const shape = shapes[selectedProvinceId];
  29:     return shape ? computeFocusTransform(shape, viewBox) : { tx: 0, ty: 0, scale: 1 };
  30:   }, [shapes, viewBox, selectedProvinceId]);
  31: 
  32:   if (!shapes || !viewBox) return null;
  33: 
  34:   const focused = Boolean(selectedProvinceId);
  35: 
  36:   return (
  37:     <div className="pointer-events-none absolute inset-0 z-20">
  38:       {Object.values(shapes).map((shape) => {
  39:         if (shape.id === "hong-kong" || shape.id === "macau") return null;
  40:         const cx = (shape.bounds.left + shape.bounds.right) / 2;
  41:         const cy = -(shape.bounds.top + shape.bounds.bottom) / 2;
  42:         const zoomedX = cx * focus.scale + focus.tx;
  43:         const zoomedY = cy * focus.scale + focus.ty;
  44:         const leftPct = ((zoomedX - viewBox.x) / viewBox.width) * 100;
  45:         const topPct = ((zoomedY - viewBox.y) / viewBox.height) * 100;
  46:         const active = shape.id === selectedProvinceId;
  47:         const dimmed = focused && !active;
  48:         const label = labelMap.get(shape.id);
  49:         const text = label ? (lang === "zh" ? label.zh : label.en) : shape.name;
  50:         const tiny = shape.id === "hong-kong" || shape.id === "macau";
  51: 
  52:         return (
  53:           <span
  54:             key={shape.id}
  55:             className={clsx(
  56:               "absolute hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-bold tracking-tight leading-none sm:block",
  57:               active && "rounded-full bg-jade px-2 py-1 text-sm text-white shadow-lg",
  58:               !active && !dimmed && !tiny && "text-[10px] text-ink/85",
  59:               !active && !dimmed && tiny && "text-[8px] text-ink/85",
  60:               dimmed && "opacity-0"
  61:             )}
  62:             style={{
  63:               left: `${leftPct}%`,
  64:               top: `${topPct}%`,
  65:               transition: TRANSITION,
  66:               ...(active ? {} : HALO)
  67:             }}
  68:           >
  69:             {text}
  70:           </span>
  71:         );
  72:       })}
  73:     </div>
  74:   );
  75: }

 succeeded in 869ms:
   1: import { useEffect, useState } from "react";
   2: import clsx from "clsx";
   3: import { useLang } from "../../store/language";
   4: 
   5: type CityNavItem = { id: string; en: string; zh: string };
   6: 
   7: const CITY_NAV_ITEMS: CityNavItem[] = [
   8:   { id: "intro", en: "City overview", zh: "城市介绍" },
   9:   { id: "visa", en: "Entry & Visa", zh: "入境签证" },
  10:   { id: "payments", en: "Payments", zh: "支付" },
  11:   { id: "transport", en: "Transport", zh: "交通" },
  12:   { id: "food", en: "Food", zh: "美食" },
  13:   { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
  14:   { id: "portals", en: "Official portals", zh: "官方延伸" }
  15: ];
  16: 
  17: export default function CityNav() {
  18:   const { lang } = useLang();
  19:   const isZh = lang === "zh";
  20:   const [active, setActive] = useState<string>("intro");
  21: 
  22:   useEffect(() => {
  23:     const sections = CITY_NAV_ITEMS
  24:       .map((item) => document.getElementById(item.id))
  25:       .filter((el): el is HTMLElement => el !== null);
  26: 
  27:     if (sections.length === 0) return;
  28: 
  29:     const observer = new IntersectionObserver(
  30:       (entries) => {
  31:         const visible = entries
  32:           .filter((e) => e.isIntersecting)
  33:           .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
  34:         if (visible) setActive(visible.target.id);
  35:       },
  36:       { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
  37:     );
  38: 
  39:     sections.forEach((s) => observer.observe(s));
  40:     return () => observer.disconnect();
  41:   }, []);
  42: 
  43:   return (
  44:     <nav
  45:       aria-label={isZh ? "城市页导航" : "City page navigation"}
  46:       className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
  47:     >
  48:       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
  49:         {CITY_NAV_ITEMS.map((item) => {
  50:           const isActive = active === item.id;
  51:           return (
  52:             <li key={item.id} className="shrink-0 lg:shrink">
  53:               <a
  54:                 href={`#${item.id}`}
  55:                 className={clsx(
  56:                   "block whitespace-nowrap rounded-lg px-3 py-2 text-sm transition lg:whitespace-normal",
  57:                   isActive
  58:                     ? "bg-jade-soft font-bold text-jade"
  59:                     : "text-ink/80 hover:bg-paper hover:text-ink"
  60:                 )}
  61:               >
  62:                 {isZh ? item.zh : item.en}
  63:               </a>
  64:             </li>
  65:           );
  66:         })}
  67:       </ul>
  68:     </nav>
  69:   );
  70: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"selectProvince\\(|toggle3D\\(|selectPlace\\(\" v2/src" in c:\Users\h\Documents\New project 2
 succeeded in 612ms:
v2/src\components\atlas\ProvinceRail.tsx:24:              onClick={() => selectProvince(p.id)}
v2/src\components\search\PlaceSearch.tsx:23:    selectPlace(record.provinceId, record.cityId ?? null);
v2/src\components\map\ProvinceHitAreaLayer.tsx:24:            onClick={() => selectPlace(area.id, null)}
v2/src\components\map\ProvinceInfoCard.tsx:19:    selectPlace(province.id, cityId);
v2/src\components\map\ProvinceShapeLayer.tsx:130:              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
v2/src\components\map\SpecialRegionMarkers.tsx:35:            onClick={() => selectPlace(area.id, null)}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/store/LanguageProvider.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 502ms:
   1: import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
   2: import type { Lang } from "../data/i18n";
   3: import { translate } from "../lib/i18n";
   4: import { LanguageContext } from "./language";
   5: 
   6: const STORAGE_KEY = "chinaAtlas:language";
   7: 
   8: const readInitial = (): Lang => {
   9:   if (typeof window === "undefined") return "en";
  10:   return window.localStorage.getItem(STORAGE_KEY) === "zh" ? "zh" : "en";
  11: };
  12: 
  13: export default function LanguageProvider({ children }: { children: ReactNode }) {
  14:   const [lang, setLangState] = useState<Lang>(readInitial);
  15: 
  16:   useEffect(() => {
  17:     document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  18:   }, [lang]);
  19: 
  20:   const setLang = useCallback((next: Lang) => {
  21:     setLangState(next);
  22:     if (typeof window !== "undefined") {
  23:       window.localStorage.setItem(STORAGE_KEY, next);
  24:     }
  25:   }, []);
  26: 
  27:   const value = useMemo(
  28:     () => ({ lang, setLang, t: (key: string) => translate(lang, key) }),
  29:     [lang, setLang]
  30:   );
  31: 
  32:   return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
  33: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/styles/globals.css | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 440ms:
   1: @import "tailwindcss";
   2: 
   3: @theme {
   4:   --color-ink: #18201d;
   5:   --color-muted: #5b6863;
   6:   --color-line: #d4dbd7;
   7:   --color-paper: #f6f8f6;
   8:   --color-jade: #176f62;
   9:   --color-jade-soft: rgba(23, 112, 97, 0.08);
  10:   --font-sans: "Inter", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
  11: }
  12: 
  13: html,
  14: body {
  15:   background: var(--color-paper);
  16:   color: var(--color-ink);
  17:   font-family: var(--font-sans);
  18: }
  19: 
  20: body {
  21:   margin: 0;
  22:   overflow-x: hidden;
  23:   -webkit-font-smoothing: antialiased;
  24: }
  25: 
  26: button {
  27:   font: inherit;
  28:   cursor: pointer;
  29: }
  30: 
  31: a {
  32:   color: inherit;
  33: }
  34: 
  35: @keyframes fadeUp {
  36:   from {
  37:     opacity: 0;
  38:     transform: translateY(8px) scale(0.96);
  39:   }
  40:   to {
  41:     opacity: 1;
  42:     transform: translateY(0) scale(1);
  43:   }
  44: }
  45: 
  46: .special-region-marker {
  47:   left: var(--marker-left-mobile);
  48:   top: var(--marker-top-mobile);
  49: }
  50: 
  51: @media (min-width: 640px) {
  52:   .special-region-marker {
  53:     left: var(--marker-left-desktop);
  54:     top: var(--marker-top-desktop);
  55:   }
  56: }
  57: 
  58: .china-map-surface > div:first-child {
  59:   transform: scale(0.92);
  60:   transform-origin: center;
  61: }
  62: 
  63: @media (min-width: 640px) {
  64:   .china-map-surface > div:first-child {
  65:     transform: none;
  66:   }
  67: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/city/CityImagePanel.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/city/CityIntro.tsx | Select-Object -First 230 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/pillar/VisaChecker.tsx | Select-Object -First 260 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 766ms:
   1: import { useEffect, useState } from "react";
   2: import { attractionsByCity } from "../../data/city-attractions";
   3: import type { CityId } from "../../data/transport";
   4: import { useLang } from "../../store/language";
   5: 
   6: type Props = { cityId: CityId };
   7: 
   8: const ROTATE_MS = 5000;
   9: 
  10: export default function CityImagePanel({ cityId }: Props) {
  11:   const { lang } = useLang();
  12:   const isZh = lang === "zh";
  13:   const attractions = attractionsByCity(cityId).filter((a) => a.tier === "must-visit");
  14:   const [idx, setIdx] = useState(0);
  15: 
  16:   useEffect(() => {
  17:     if (attractions.length <= 1) return;
  18:     const id = setInterval(() => {
  19:       setIdx((i) => (i + 1) % attractions.length);
  20:     }, ROTATE_MS);
  21:     return () => clearInterval(id);
  22:   }, [attractions.length]);
  23: 
  24:   if (attractions.length === 0) return null;
  25:   const current = attractions[idx];
  26: 
  27:   return (
  28:     <aside aria-label={isZh ? "城市代表图" : "City landmark"} className="self-start lg:sticky lg:top-24">
  29:       <div className="flex flex-col gap-3">
  30:         <div className="overflow-hidden rounded-xl border border-line bg-paper">
  31:           <div className="aspect-[3/4] w-full">
  32:             <img
  33:               key={current.id}
  34:               src={current.imageUrl}
  35:               alt={isZh ? current.nameZh : current.nameEn}
  36:               loading="lazy"
  37:               referrerPolicy="no-referrer"
  38:               className="h-full w-full animate-[fadeUp_500ms_ease] object-cover"
  39:               onError={(e) => {
  40:                 (e.currentTarget as HTMLImageElement).style.display = "none";
  41:               }}
  42:             />
  43:           </div>
  44:           <div className="flex flex-col gap-1 p-3">
  45:             <strong className="text-sm leading-tight">
  46:               {isZh ? current.nameZh : current.nameEn}
  47:             </strong>
  48:             <span className="text-[10px] text-muted">
  49:               {isZh ? current.districtZh : current.districtEn} · {current.imageCredit}
  50:             </span>
  51:           </div>
  52:         </div>
  53:         <div className="flex flex-wrap gap-1">
  54:           {attractions.map((a, i) => (
  55:             <button
  56:               key={a.id}
  57:               type="button"
  58:               aria-label={isZh ? a.nameZh : a.nameEn}
  59:               onClick={() => setIdx(i)}
  60:               className={`h-1.5 w-6 rounded-full transition ${
  61:                 i === idx ? "bg-jade" : "bg-line hover:bg-muted"
  62:               }`}
  63:             />
  64:           ))}
  65:         </div>
  66:       </div>
  67:     </aside>
  68:   );
  69: }

 succeeded in 884ms:
   1: import { useMemo, useState } from "react";
   2: import clsx from "clsx";
   3: import { attractionsByCity } from "../../data/city-attractions";
   4: import type { CityId } from "../../data/transport";
   5: import { useLang } from "../../store/language";
   6: 
   7: type Props = { cityId: CityId };
   8: 
   9: const CITY_BLURB: Record<CityId, { en: string; zh: string }> = {
  10:   beijing: {
  11:     en: "Beijing is the imperial capital — 600 years of palace, temple, and tomb sit on a single north–south axis through the city. The Great Wall is an hour out. Hutong alleys hide the best dumplings. Plan 4–6 days; you will not be bored.",
  12:     zh: "北京是中国的政治与文化首都——600 年皇城中轴线、故宫、北郊的长城、老城胡同、全国最密集的博物馆与寺庙。外国游客首访通常停留 4–6 天。"
  13:   },
  14:   shanghai: {
  15:     en: "Shanghai is China at its most international. The Bund — old European banks on the river — stares at the glass towers of Pudong. The former French Concession is plane trees, garden villas, and good coffee. Hangzhou and Suzhou are an hour away by high-speed rail. 3–5 days does it.",
  16:     zh: "上海是中国的商贸门户——外滩租界银行群正对浦东金融天际线；原法租界梧桐街道与咖啡馆文化；一小时高铁可达杭州西湖与苏州园林。首访建议 3–5 天。"
  17:   },
  18:   guangzhou: {
  19:     en: "Guangzhou has been a trading port for 2,200 years and still works that way. Yum cha at dawn, Cantonese spoken on the street, Lingnan-style courtyards, and the Pearl River through it all. Twice a year (April and October) the Canton Fair fills the city; prices spike. Hong Kong is 47 minutes away by HSR. 2–3 days is enough for a first trip.",
  20:     zh: "广州是华南 2200 年商都——清晨饮茶、岭南建筑、珠江、粤语城市气质，半年一届的广交会（4 月 / 10 月）期间价格明显上涨。高铁 47 分钟到香港西九龙。首访安排 2–3 天较合适。"
  21:   },
  22:   shenzhen: {
  23:     en: "Shenzhen went from fishing village to one of the world's top tech cities in 40 years. It's also Hong Kong's backyard — five border crossings, an hour by metro from Causeway Bay. Most foreigners come for a 1–2 day shopping/eating run rather than a stand-alone trip. Window of the World, the OCT creative district, and Dapeng's old coast are the main draws.",
  24:     zh: "深圳是中国最年轻的一线城市——40 年从渔村到全球科技中心。世界之窗、华侨城创意园、蛇口外籍友好海滨、大鹏古城、5 个深港陆海口岸——更常被安排为深港跨境 1–2 天行程，而非单独目的地。"
  25:   }
  26: };
  27: 
  28: const CITY_FACTS: Record<CityId, Array<{ en: string; zh: string }>> = {
  29:   beijing: [
  30:     { en: "16 districts", zh: "16 个行政区" },
  31:     { en: "21.9 M residents", zh: "常住人口 2,190 万" },
  32:     { en: "PEK + PKX airports", zh: "首都 + 大兴 双机场" },
  33:     { en: "29 metro lines / 523 stations", zh: "29 条地铁线 / 523 站" }
  34:   ],
  35:   shanghai: [
  36:     { en: "16 districts", zh: "16 个行政区" },
  37:     { en: "24.9 M residents", zh: "常住人口 2,490 万" },
  38:     { en: "PVG + SHA airports", zh: "浦东 + 虹桥 双机场" },
  39:     { en: "21 metro lines / 517 stations", zh: "21 条地铁线 / 517 站" }
  40:   ],
  41:   guangzhou: [
  42:     { en: "11 districts", zh: "11 个行政区" },
  43:     { en: "18.7 M residents", zh: "常住人口 1,870 万" },
  44:     { en: "CAN (Baiyun) — T3 opened 2025-10", zh: "白云机场 — T3 2025-10 启用" },
  45:     { en: "16 metro lines + Foshan + intercity rail", zh: "16 条地铁 + 佛山线 + 城际" }
  46:   ],
  47:   shenzhen: [
  48:     { en: "10 districts", zh: "10 个行政区" },
  49:     { en: "17.8 M residents", zh: "常住人口 1,780 万" },
  50:     { en: "SZX (Bao'an) airport", zh: "宝安机场" },
  51:     { en: "5 HK border crossings", zh: "5 个深港口岸" }
  52:   ]
  53: };
  54: 
  55: const ALL_KEY = "__all";
  56: 
  57: export default function CityIntro({ cityId }: Props) {
  58:   const { lang } = useLang();
  59:   const isZh = lang === "zh";
  60:   const attractions = attractionsByCity(cityId);
  61:   const blurb = CITY_BLURB[cityId];
  62:   const facts = CITY_FACTS[cityId];
  63: 
  64:   const districts = useMemo(() => {
  65:     const seen = new Map<string, { en: string; zh: string; count: number }>();
  66:     for (const a of attractions) {
  67:       const key = a.districtEn;
  68:       const existing = seen.get(key);
  69:       if (existing) existing.count += 1;
  70:       else seen.set(key, { en: a.districtEn, zh: a.districtZh, count: 1 });
  71:     }
  72:     return Array.from(seen.entries()).map(([key, value]) => ({ key, ...value }));
  73:   }, [attractions]);
  74: 
  75:   const [selected, setSelected] = useState<string>(ALL_KEY);
  76: 
  77:   const visible = selected === ALL_KEY
  78:     ? attractions
  79:     : attractions.filter((a) => a.districtEn === selected);
  80: 
  81:   return (
  82:     <section id="intro" className="flex flex-col gap-6 scroll-mt-24">
  83:       <div className="flex flex-col gap-3">
  84:         <p className="text-base leading-relaxed text-ink/85">
  85:           {isZh ? blurb.zh : blurb.en}
  86:         </p>
  87:         <ul className="flex flex-wrap gap-2">
  88:           {facts.map((f) => (
  89:             <li
  90:               key={f.en}
  91:               className="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-muted"
  92:             >
  93:               {isZh ? f.zh : f.en}
  94:             </li>
  95:           ))}
  96:         </ul>
  97:       </div>
  98: 
  99:       <div className="flex flex-col gap-3">
 100:         <header className="flex flex-col gap-1">
 101:           <span className="text-xs font-bold uppercase tracking-widest text-muted">
 102:             {isZh ? "标志景点 · 按区筛选" : "Signature attractions · filter by district"}
 103:           </span>
 104:           <h2 className="text-xl font-bold">
 105:             {isZh ? "按区查看景点" : "Pick a district to see what's there"}
 106:           </h2>
 107:         </header>
 108: 
 109:         <div role="tablist" aria-label={isZh ? "区筛选" : "District filter"} className="flex flex-wrap gap-2">
 110:           <DistrictChip
 111:             label={isZh ? "全部" : "All"}
 112:             count={attractions.length}
 113:             active={selected === ALL_KEY}
 114:             onClick={() => setSelected(ALL_KEY)}
 115:           />
 116:           {districts.map((d) => (
 117:             <DistrictChip
 118:               key={d.key}
 119:               label={isZh ? d.zh : d.en}
 120:               count={d.count}
 121:               active={selected === d.key}
 122:               onClick={() => setSelected(d.key)}
 123:             />
 124:           ))}
 125:         </div>
 126: 
 127:         <ul className="grid gap-3 sm:grid-cols-2">
 128:           {visible.map((a) => (
 129:             <li key={a.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
 130:               <div className="flex items-center justify-between gap-2">
 131:                 <span
 132:                   className={clsx(
 133:                     "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
 134:                     a.tier === "must-visit"
 135:                       ? "bg-jade-soft text-jade"
 136:                       : "bg-amber-100 text-amber-900"
 137:                   )}
 138:                 >
 139:                   {a.tier === "must-visit"
 140:                     ? isZh ? "必看" : "Must-visit"
 141:                     : isZh ? "值得一看" : "Worth-it"}
 142:                 </span>
 143:                 <span className="text-[10px] text-muted">{isZh ? a.districtZh : a.districtEn}</span>
 144:               </div>
 145:               <strong className="text-sm leading-tight">{isZh ? a.nameZh : a.nameEn}</strong>
 146:               <p className="text-xs leading-relaxed text-ink/80">
 147:                 {isZh ? a.whyZh : a.whyEn}
 148:               </p>
 149:               <a
 150:                 href={a.officialUrl}
 151:                 target="_blank"
 152:                 rel="noreferrer"
 153:                 className="self-start text-[10px] font-bold uppercase tracking-wider text-jade hover:underline"
 154:               >
 155:                 {isZh ? "官方页面 →" : "Official →"}
 156:               </a>
 157:             </li>
 158:           ))}
 159:         </ul>
 160:         {visible.length === 0 && (
 161:           <p className="rounded-lg border border-dashed border-line bg-paper p-4 text-sm text-muted">
 162:             {isZh ? "本区暂无收录景点" : "No attractions yet for this district."}
 163:           </p>
 164:         )}
 165:       </div>
 166:     </section>
 167:   );
 168: }
 169: 
 170: function DistrictChip({
 171:   label,
 172:   count,
 173:   active,
 174:   onClick
 175: }: {
 176:   label: string;
 177:   count: number;
 178:   active: boolean;
 179:   onClick: () => void;
 180: }) {
 181:   return (
 182:     <button
 183:       type="button"
 184:       role="tab"
 185:       aria-selected={active}
 186:       onClick={onClick}
 187:       className={clsx(
 188:         "rounded-full border px-3 py-1.5 text-xs font-bold transition",
 189:         active
 190:           ? "border-ink bg-ink text-white"
 191:           : "border-line bg-white text-ink hover:border-jade hover:text-jade"
 192:       )}
 193:     >
 194:       {label}
 195:       <span className={clsx("ml-1.5 text-[10px]", active ? "text-white/70" : "text-muted")}>
 196:         {count}
 197:       </span>
 198:     </button>
 199:   );
 200: }

 succeeded in 952ms:
   1: import { useId, useMemo, useState } from "react";
   2: import {
   3:   checkEligibility,
   4:   phase1TransitPorts,
   5:   transitPolicy,
   6:   unilateralPolicy,
   7:   unilateralVisaFreeCountries,
   8:   type EligibilityResult
   9: } from "../../data/entry-policies";
  10: import { useLang } from "../../store/language";
  11: import PracticalBlock from "../common/PracticalBlock";
  12: 
  13: const collator = new Intl.Collator("en");
  14: 
  15: export default function VisaChecker() {
  16:   const { lang } = useLang();
  17:   const selectId = useId();
  18:   const [country, setCountry] = useState("");
  19:   const zh = lang === "zh";
  20: 
  21:   const sortedCountries = useMemo(
  22:     () =>
  23:       [...unilateralVisaFreeCountries].sort((a, b) =>
  24:         collator.compare(lang === "zh" ? a.countryZh : a.countryEn, lang === "zh" ? b.countryZh : b.countryEn)
  25:       ),
  26:     [lang]
  27:   );
  28: 
  29:   const result: EligibilityResult | null = country ? checkEligibility(country) : null;
  30: 
  31:   return (
  32:     <section id="entry-visa" className="flex min-w-0 flex-col gap-3">
  33:       <header>
  34:         <span className="text-xs font-bold uppercase tracking-widest text-muted">
  35:           {zh ? "支柱 1" : "Pillar 1"}
  36:         </span>
  37:         <h2 className="text-2xl font-bold leading-tight">
  38:           {zh ? "入境与签证" : "Entry & Visa"}
  39:         </h2>
  40:         <p className="text-sm text-muted">
  41:           {zh
  42:             ? "选择你的护照国籍，看是否需要签证。结论均出自国家移民管理局（NIA）和国务院公告。"
  43:             : "Pick your passport country to see what applies. Every answer cites China's NIA and State Council announcements."}
  44:         </p>
  45:       </header>
  46: 
  47:       <div className="grid gap-4 rounded-lg border border-line bg-white p-4 md:grid-cols-[240px_1fr]">
  48:         <div className="flex flex-col gap-3">
  49:           <label htmlFor={selectId} className="text-xs font-bold uppercase tracking-widest text-muted">
  50:             {lang === "zh" ? "护照国籍" : "Passport country"}
  51:           </label>
  52:           <select
  53:             id={selectId}
  54:             value={country}
  55:             onChange={(event) => setCountry(event.target.value)}
  56:             className="rounded-lg border border-line bg-paper px-3 py-2 text-sm focus:border-ink focus:outline-none"
  57:           >
  58:             <option value="">{lang === "zh" ? "请选择..." : "Select country..."}</option>
  59:             {sortedCountries.map((c) => (
  60:               <option key={c.countryEn} value={c.countryEn}>
  61:                 {lang === "zh" ? `${c.countryZh} (${c.countryEn})` : `${c.countryEn} (${c.countryZh})`}
  62:               </option>
  63:             ))}
  64:             <option disabled>──────────</option>
  65:             <option value="Other">{lang === "zh" ? "其它（不在免签名单）" : "Other (not on visa-free lists)"}</option>
  66:           </select>
  67:         </div>
  68: 
  69:         <ResultPanel result={result} />
  70:       </div>
  71: 
  72:       <PolicySummary />
  73:       <Phase1PortsList />
  74:       <PracticalBlock pillar="entry" />
  75:     </section>
  76:   );
  77: }
  78: 
  79: function ResultPanel({ result }: { result: EligibilityResult | null }) {
  80:   const { lang } = useLang();
  81: 
  82:   if (!result) {
  83:     return (
  84:       <div className="grid place-items-center rounded-lg border border-dashed border-line p-6 text-sm text-muted">
  85:         {lang === "zh" ? "请先选择国籍" : "Pick a passport country first."}
  86:       </div>
  87:     );
  88:   }
  89: 
  90:   if (result.kind === "both") {
  91:     return (
  92:       <div className="flex flex-col gap-2 rounded-lg bg-jade-soft p-4">
  93:         <strong className="text-base text-jade">
  94:           {lang === "zh" ? "两种免签都可用" : "Both visa-free routes available"}
  95:         </strong>
  96:         <p className="text-sm">
  97:           {lang === "zh"
  98:             ? `单方面免签 ${result.unilateralDays} 天 · 过境免签 ${result.transitHours} 小时（需第三国机票）`
  99:             : `${result.unilateralDays}-day unilateral visa-free · ${result.transitHours}-hour transit visa-free (third-country onward ticket required).`}
 100:         </p>
 101:       </div>
 102:     );
 103:   }
 104: 
 105:   if (result.kind === "unilateral") {
 106:     return (
 107:       <div className="flex flex-col gap-2 rounded-lg bg-jade-soft p-4">
 108:         <strong className="text-base text-jade">
 109:           {lang === "zh" ? "单方面免签可用" : "Unilateral visa-free"}
 110:         </strong>
 111:         <p className="text-sm">
 112:           {lang === "zh"
 113:             ? `普通护照可在中国停留至 ${result.maxStayDays} 天，用途含商务、旅游、探亲、交流、过境。`
 114:             : `Up to ${result.maxStayDays} days for ordinary passports; covers business, tourism, family visit, exchange, transit.`}
 115:         </p>
 116:       </div>
 117:     );
 118:   }
 119: 
 120:   if (result.kind === "transit-only") {
 121:     return (
 122:       <div className="flex flex-col gap-2 rounded-lg bg-paper p-4">
 123:         <strong className="text-base">
 124:           {lang === "zh" ? "可使用过境免签" : "Transit visa-free only"}
 125:         </strong>
 126:         <p className="text-sm">
 127:           {lang === "zh"
 128:             ? `若行程经第三国，可用 ${result.maxHours} 小时过境免签；其它情况仍需办签证。`
 129:             : `If transiting via China to a third country, ${result.maxHours} hours visa-free is available. Otherwise apply for a visa.`}
 130:         </p>
 131:       </div>
 132:     );
 133:   }
 134: 
 135:   return (
 136:     <div className="flex flex-col gap-2 rounded-lg bg-amber-50 p-4">
 137:       <strong className="text-base text-amber-900">
 138:         {lang === "zh" ? "需要签证" : "Visa required"}
 139:       </strong>
 140:       <p className="text-sm">
 141:         {lang === "zh"
 142:           ? "目前免签名单未涵盖该国籍，请前往中国签证申请服务中心办理。"
 143:           : "Not currently covered by China's visa-free policies. Apply via the official Chinese Visa Application Service Center."}
 144:       </p>
 145:       <a
 146:         href={result.applyUrl}
 147:         target="_blank"
 148:         rel="noreferrer"
 149:         className="inline-flex w-fit items-center gap-1 rounded-full bg-ink px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
 150:       >
 151:         visaforchina.cn →
 152:       </a>
 153:     </div>
 154:   );
 155: }
 156: 
 157: function PolicySummary() {
 158:   const { lang } = useLang();
 159:   return (
 160:     <div className="grid gap-3 md:grid-cols-3">
 161:       <Card
 162:         title={lang === "zh" ? "单方面免签" : "Unilateral visa-free"}
 163:         figure={`${unilateralVisaFreeCountries.length}`}
 164:         unit={lang === "zh" ? "国" : "countries"}
 165:         body={
 166:           lang === "zh"
 167:             ? `普通护照 ${unilateralPolicy.maxStayDays} 天，含商务/旅游/探亲/交流/过境。`
 168:             : `Ordinary passports, ${unilateralPolicy.maxStayDays}-day stay, business/tourism/family/exchange/transit.`
 169:         }
 170:       />
 171:       <Card
 172:         title={lang === "zh" ? "240 小时过境免签" : "240-hour transit"}
 173:         figure={`${transitPolicy.totalPorts}`}
 174:         unit={lang === "zh" ? "口岸" : "ports"}
 175:         body={
 176:           lang === "zh"
 177:             ? `${transitPolicy.totalCountries} 国可用，${transitPolicy.provincialRegions} 个省级地区可活动；自 ${transitPolicy.effectiveDate} 起。`
 178:             : `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.provincialRegions} provincial regions; effective ${transitPolicy.effectiveDate}.`
 179:         }
 180:       />
 181:       <Card
 182:         title={lang === "zh" ? "线上入境卡" : "Online entry card"}
 183:         figure="2025-11-20"
 184:         unit=""
 185:         body={
 186:           lang === "zh"
 187:             ? "免费线上预填；未提前填可在口岸设备或纸卡补填；勿使用仿冒收费网站。"
 188:             : "Free pre-fill online; kiosk or paper card available at port; ignore counterfeit pay-to-fill sites."
 189:         }
 190:       />
 191:     </div>
 192:   );
 193: }
 194: 
 195: function Card({
 196:   title,
 197:   figure,
 198:   unit,
 199:   body
 200: }: {
 201:   title: string;
 202:   figure: string;
 203:   unit: string;
 204:   body: string;
 205: }) {
 206:   return (
 207:     <article className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
 208:       <span className="text-xs font-bold uppercase tracking-widest text-muted">{title}</span>
 209:       <strong className="text-3xl leading-none">
 210:         {figure} <small className="text-base font-bold text-muted">{unit}</small>
 211:       </strong>
 212:       <p className="text-sm leading-snug text-ink/80">{body}</p>
 213:     </article>
 214:   );
 215: }
 216: 
 217: function Phase1PortsList() {
 218:   const { lang } = useLang();
 219:   return (
 220:     <div className="rounded-xl border border-line bg-white p-5">
 221:       <header className="mb-3">
 222:         <h3 className="text-base font-bold">
 223:           {lang === "zh" ? "本站覆盖的四城口岸（240 小时）" : "Phase 1 cities — all 240-hour transit"}
 224:         </h3>
 225:         <p className="text-xs text-muted">
 226:           {lang === "zh"
 227:             ? "与国务院 2025-11-04 公告对齐；其它 59 口岸暂未在本站列出。"
 228:             : "Aligned with State Council 2025-11-04 announcement; the other 59 ports are not yet covered here."}
 229:         </p>
 230:       </header>
 231:       <ul className="grid gap-2 sm:grid-cols-2">
 232:         {phase1TransitPorts.map((port) => (
 233:           <li key={port.portEn} className="flex items-center justify-between rounded-lg bg-paper px-3 py-2">
 234:             <span>
 235:               <strong className="text-sm">
 236:                 {lang === "zh" ? port.cityZh : port.city}
 237:               </strong>{" "}
 238:               <span className="text-xs text-muted">
 239:                 {lang === "zh" ? port.portZh : port.portEn}
 240:               </span>
 241:             </span>
 242:             <span className="rounded-full bg-jade-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-jade">
 243:               {port.maxHours}h
 244:             </span>
 245:           </li>
 246:         ))}
 247:       </ul>
 248:     </div>
 249:   );
 250: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "export type CityId|CITY_LABELS|cityPaymentNotes|cityTransport|cityFood|hospitals|cityHotlines" v2/src/data v2/src/components/pillar' in c:\Users\h\Documents\New project 2
 succeeded in 494ms:
v2/src/components/pillar\TransportGuide.tsx:3:import { CITY_LABELS, cityTransport, railBooking, type CityId } from "../../data/transport";
v2/src/components/pillar\TransportGuide.tsx:21:  const active = cityTransport.find((c) => c.cityId === effectiveId)!;
v2/src/components/pillar\TransportGuide.tsx:52:          {cityTransport.map((city) => (
v2/src/components/pillar\TransportGuide.tsx:66:              {isZh ? CITY_LABELS[city.cityId].zh : CITY_LABELS[city.cityId].en}
v2/src/components/pillar\PaymentsChecklist.tsx:3:  cityPaymentNotes,
v2/src/components/pillar\PaymentsChecklist.tsx:19:    ? cityPaymentNotes.filter((c) => c.cityId === cityId)
v2/src/components/pillar\PaymentsChecklist.tsx:20:    : cityPaymentNotes;
v2/src/components/pillar\FoodGuide.tsx:3:import { allergyCardEn, allergyCardZh, cityFood } from "../../data/food";
v2/src/components/pillar\FoodGuide.tsx:4:import { CITY_LABELS, type CityId } from "../../data/transport";
v2/src/components/pillar\FoodGuide.tsx:18:  const active = cityFood.find((c) => c.cityId === effectiveId)!;
v2/src/components/pillar\FoodGuide.tsx:39:          {cityFood.map((city) => (
v2/src/components/pillar\FoodGuide.tsx:53:              {isZh ? CITY_LABELS[city.cityId].zh : CITY_LABELS[city.cityId].en}
v2/src/components/pillar\EmergencyBriefing.tsx:4:  cityHotlines,
v2/src/components/pillar\EmergencyBriefing.tsx:6:  hospitals,
v2/src/components/pillar\EmergencyBriefing.tsx:11:import { CITY_LABELS, type CityId } from "../../data/transport";
v2/src/components/pillar\EmergencyBriefing.tsx:26:  const cityHospitals = hospitals.filter((h) => h.cityId === effectiveId);
v2/src/components/pillar\EmergencyBriefing.tsx:27:  const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
v2/src/components/pillar\EmergencyBriefing.tsx:40:              : "National emergency lines, foreign-friendly hospitals + multilingual hotlines, embassy contacts."}
v2/src/components/pillar\EmergencyBriefing.tsx:74:              {isZh ? CITY_LABELS[id].zh : CITY_LABELS[id].en}
v2/src/components/pillar\EmergencyBriefing.tsx:93:          <span className="text-xs font-bold uppercase tracking-widest text-muted">{isZh ? "外籍友好医院" : "Foreign-friendly hospitals"}</span>
v2/src/data\emergency.ts:22:export const hospitals: Hospital[] = [
v2/src/data\emergency.ts:107:    sourceId: "sz-hospitals-municipal"
v2/src/data\emergency.ts:120:export const cityHotlines: Hotline[] = [
v2/src/data\emergency.ts:228:    hospitals.filter((h) => h.cityId === cityId).forEach((h) => ids.add(h.sourceId));
v2/src/data\emergency.ts:229:    const ch = cityHotlines.find((h) => h.cityId === cityId);
v2/src/data\emergency.ts:232:    hospitals.forEach((h) => ids.add(h.sourceId));
v2/src/data\emergency.ts:233:    cityHotlines.forEach((h) => ids.add(h.sourceId));
v2/src/data\emergency.ts:245:    bodyEn: "Public hospital IMS desks accept walk-in registration; private hospitals (UFH/SOS/HKU-SZH IMC) prefer prior phone or app booking.",
v2/src/data\emergency.ts:261:    bodyEn: "Cash + Alipay/WeChat universal. UnionPay card universal. Visa/MC mainly at IMS/VIP desks. Direct billing only at hospitals contracted with your insurer.",
v2/src/data\food.ts:18:export const cityFood: CityFood[] = [
v2/src/data\food.ts:174:  const cities = cityId ? cityFood.filter((c) => c.cityId === cityId) : cityFood;
v2/src/data\payments.ts:115:export const cityPaymentNotes: CityPaymentNote[] = [
v2/src/data\payments.ts:205:  const cities = cityId ? cityPaymentNotes.filter((c) => c.cityId === cityId) : cityPaymentNotes;
v2/src/data\practical-other.ts:322:    titleEn: "Public hospitals: get a Medical Card (医疗卡) before any appointment",
v2/src/data\sources.ts:105:    pageTitleEn: "Foreigner medical service guide for Beijing (17 international hospitals)",
v2/src/data\sources.ts:149:    pageTitleEn: "Shanghai foreigner-friendly hospitals (Huashan international etc.)",
v2/src/data\sources.ts:475:    id: "sz-hospitals-municipal",
v2/src/data\sources.ts:476:    url: "https://www.sz.gov.cn/en_szgov/life/hospitals/municipal/content/post_11220998.html",
v2/src/data\sources.ts:479:    pageTitleEn: "Shenzhen municipal hospitals directory",
v2/src/data\sources.ts:902:    url: "https://www.internationalinsurance.com/countries/china/hospitals/",
v2/src/data\sources.ts:905:    pageTitleEn: "China hospitals — international department pricing",
v2/src/data\types.ts:11:export type CityId = "beijing-city" | "shanghai-city" | "guangzhou-city" | "shenzhen-city";
v2/src/data\transport.ts:1:export type CityId = "beijing" | "shanghai" | "guangzhou" | "shenzhen";
v2/src/data\transport.ts:3:export const CITY_LABELS: Record<CityId, { en: string; zh: string }> = {
v2/src/data\transport.ts:67:export const cityTransport: CityTransport[] = [
v2/src/data\transport.ts:393:  const cities = cityId ? cityTransport.filter((c) => c.cityId === cityId) : cityTransport;

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/data/types.ts | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/services/notes.ts | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"\\.\\/types|data/types|UserNote|NoteSubmission|beijing-city|shanghai-city|guangzhou-city|shenzhen-city\" v2/src" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"id: \\\"guangzhou|id: \\\"shenzhen|id: \\\"beijing-city|id: \\\"shanghai-city\" v2/src/data/atlas.ts" in c:\Users\h\Documents\New project 2
 succeeded in 685ms:
   1: export type UserNote = {
   2:   id: string;
   3:   cityId: string;
   4:   text: string;
   5:   imageUrls: string[];
   6:   authorDisplayName: string;
   7:   authorCountryCode: string;
   8:   publishedAt: string;
   9: };
  10: 
  11: export type CityId = "beijing-city" | "shanghai-city" | "guangzhou-city" | "shenzhen-city";

 succeeded in 715ms:
   1: import type { UserNote } from "../data/types";
   2: 
   3: export async function getUserNotes(cityId: string): Promise<UserNote[]> {
   4:   void cityId;
   5:   return [];
   6: }
   7: 
   8: export async function submitUserNote(payload: {
   9:   cityId: string;
  10:   text: string;
  11:   images: File[];
  12:   authorized: true;
  13: }): Promise<{ submissionId: string; status: "queued" }> {
  14:   void payload;
  15:   throw new Error("Submissions are not enabled in Phase 1.");
  16: }

 succeeded in 735ms:
v2/src\services\notes.ts:1:import type { UserNote } from "../data/types";
v2/src\services\notes.ts:3:export async function getUserNotes(cityId: string): Promise<UserNote[]> {
v2/src\services\notes.ts:8:export async function submitUserNote(payload: {
v2/src\data\atlas.ts:39:        id: "beijing-city",
v2/src\data\atlas.ts:70:        id: "shanghai-city",
v2/src\data\atlas.ts:362:  { zh: "东城区", en: "Dongcheng District", type: "county", provinceId: "beijing", cityId: "beijing-city", aliases: ["dongcheng"] },
v2/src\data\atlas.ts:363:  { zh: "延庆区", en: "Yanqing District", type: "county", provinceId: "beijing", cityId: "beijing-city", aliases: ["yanqing"] },
v2/src\data\atlas.ts:364:  { zh: "古北口镇", en: "Gubeikou Town", type: "town", provinceId: "beijing", cityId: "beijing-city", aliases: ["古北口", "gubeikou"] },
v2/src\data\atlas.ts:365:  { zh: "爨底下村", en: "Cuandixia Village", type: "village", provinceId: "beijing", cityId: "beijing-city", aliases: ["cuandixia", "爨底下"] },
v2/src\data\atlas.ts:366:  { zh: "黄浦区", en: "Huangpu District", type: "county", provinceId: "shanghai", cityId: "shanghai-city", aliases: ["huangpu"] },
v2/src\data\atlas.ts:367:  { zh: "朱家角镇", en: "Zhujiajiao Town", type: "town", provinceId: "shanghai", cityId: "shanghai-city", aliases: ["zhujiajiao", "朱家角"] },
v2/src\data\map-sources.ts:102:  "beijing-city": { x: 68.8, y: 43.6 },
v2/src\data\map-sources.ts:103:  "shanghai-city": { x: 78.4, y: 60.2 },
v2/src\data\types.ts:1:export type UserNote = {
v2/src\data\types.ts:11:export type CityId = "beijing-city" | "shanghai-city" | "guangzhou-city" | "shenzhen-city";

2026-05-12T02:34:00.368314Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.9 seconds
Output:
id: : The term 'id:' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the s
pelling of the name, or if a path was included, verify that the path is correct and try again.
At line:2 char:24
+ rg -n "id: \"guangzhou|id: \"shenzhen|id: \"beijing-city|id: \"shangh ...
+                        ~~~
    + CategoryInfo          : ObjectNotFound: (id::String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
 

 exited 1 in 885ms:
id: : The term 'id:' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the s
pelling of the name, or if a path was included, verify that the path is correct and try again.
At line:2 char:24
+ rg -n "id: \"guangzhou|id: \"shenzhen|id: \"beijing-city|id: \"shangh ...
+                        ~~~
    + CategoryInfo          : ObjectNotFound: (id::String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
 

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n 'id: \"(guangzhou|shenzhen|beijing-city|shanghai-city)' v2/src/data/atlas.ts" in c:\Users\h\Documents\New project 2
2026-05-12T02:34:06.295857Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.6 seconds
Output:

 exited 1 in 579ms:
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Select-String -Path v2/src/data/atlas.ts -Pattern 'id: \"guangzhou','id: \"shenzhen','id: \"beijing-city','id: \"shanghai-city'" in c:\Users\h\Documents\New project 2
 succeeded in 580ms:

v2\src\data\atlas.ts:39:        id: "beijing-city",
v2\src\data\atlas.ts:70:        id: "shanghai-city",
v2\src\data\atlas.ts:362:  { zh: "东城区", en: "Dongcheng District", type: "county", provinceId: "beijing", cityId: "beiji
ng-city", aliases: ["dongcheng"] },
v2\src\data\atlas.ts:363:  { zh: "延庆区", en: "Yanqing District", type: "county", provinceId: "beijing", cityId: "beijing
-city", aliases: ["yanqing"] },
v2\src\data\atlas.ts:364:  { zh: "古北口镇", en: "Gubeikou Town", type: "town", provinceId: "beijing", cityId: "beijing-cit
y", aliases: ["古北口", "gubeikou"] },
v2\src\data\atlas.ts:365:  { zh: "爨底下村", en: "Cuandixia Village", type: "village", provinceId: "beijing", cityId: "beij
ing-city", aliases: ["cuandixia", "爨底下"] },
v2\src\data\atlas.ts:366:  { zh: "黄浦区", en: "Huangpu District", type: "county", provinceId: "shanghai", cityId: "shangh
ai-city", aliases: ["huangpu"] },
v2\src\data\atlas.ts:367:  { zh: "朱家角镇", en: "Zhujiajiao Town", type: "town", provinceId: "shanghai", cityId: "shanghai
-city", aliases: ["zhujiajiao", "朱家角"] },



exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/data/atlas.ts | Select-Object -Skip 190 -First 150 | ForEach-Object { $i=191+$i; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 606ms:
 191:         name: "Kaifeng",
 382:         zh: "开封",
 573:         province: "Henan",
 764:         museum: "Kaifeng Museum",
 955:         museumZh: "开封博物馆",
1146:         museumRole: "Best first stop for Northern Song urban history, river management, trade, and capital culture.",
1337:         museumRoleZh: "理解北宋城市史、河流治理、商业贸易和都城文化的第一站。",
1528:         history:
1719:           "Kaifeng is strongly associated with the Northern Song capital Bianjing, a city of commerce, administration, literature, and dense urban life.",
1910:         historyZh: "开封与北宋都城汴京紧密相关，是商业、行政、文学和繁华城市生活的重要代表。",
2101:         sites: ["Dragon Pavilion area", "Iron Pagoda", "Daxiangguo Temple", "Ancient city remains"],
2292:         sitesZh: ["龙亭片区", "铁塔", "大相国寺", "古城遗存"],
2483:         baseViews: 6110,
2674:         notes: 18,
2865:         verified: "2026-04",
3056:         access: "Low",
3247:         status: "Needs review"
3438:       },
3629:       {
3820:         id: "anyang",
4011:         name: "Anyang",
4202:         zh: "安阳",
4393:         province: "Henan",
4584:         museum: "Yinxu Museum",
4775:         museumZh: "殷墟博物馆",
4966:         museumRole: "The direct entry point for oracle bones, Shang royal archaeology, bronze culture, and early Chinese writing.",
5157:         museumRoleZh: "理解甲骨文、商王朝考古、青铜文化和早期汉字的直接入口。",
5348:         history:
5539:           "Anyang is essential for understanding the late Shang capital at Yinxu, oracle bone inscriptions, early state ritual, and archaeological evidence for ancient China.",
5730:         historyZh: "安阳对于理解殷墟晚商都城、甲骨刻辞、早期国家礼制和中国古代考古证据非常关键。",
5921:         sites: ["Yinxu", "National Museum of Chinese Writing", "Fu Hao Tomb area"],
6112:         sitesZh: ["殷墟", "中国文字博物馆", "妇好墓片区"],
6303:         baseViews: 5480,
6494:         notes: 15,
6685:         verified: "2026-04",
6876:         access: "Medium",
7067:         status: "Needs visitor notes"
7258:       }
7449:     ]
7640:   },
7831:   {
8022:     id: "jiangsu",
8213:     name: "Jiangsu",
8404:     zh: "江苏",
8595:     type: "Province",
8786:     color: "blue",
8977:     cities: [
9168:       {
9359:         id: "nanjing",
9550:         name: "Nanjing",
9741:         zh: "南京",
9932:         province: "Jiangsu",
10123:         museum: "Nanjing Museum / Six Dynasties Museum",
10314:         museumZh: "南京博物院 / 六朝博物馆",
10505:         museumRole: "The first stop for Six Dynasties culture, Ming capital history, Republican-era history, and Jiangnan material culture.",
10696:         museumRoleZh: "理解六朝文化、明初都城、民国历史和江南物质文化的第一入口。",
10887:         history:
11078:           "Nanjing has served as a capital across several periods and is key to understanding southern dynastic culture, Ming statecraft, and modern Chinese political history.",
11269:         historyZh: "南京在多个历史时期曾为都城，是理解南朝文化、明代国家建设和中国近现代政治史的重要城市。",
11460:         sites: ["Ming Xiaoling Mausoleum", "Nanjing City Wall", "Presidential Palace", "Confucius Temple area"],
11651:         sitesZh: ["明孝陵", "南京城墙", "总统府", "夫子庙片区"],
11842:         baseViews: 12110,
12033:         notes: 36,
12224:         verified: "2026-05",
12415:         access: "High",
12606:         status: "Official facts pending"
12797:       },
12988:       {
13179:         id: "suzhou",
13370:         name: "Suzhou",
13561:         zh: "苏州",
13752:         province: "Jiangsu",
13943:         museum: "Suzhou Museum",
14134:         museumZh: "苏州博物馆",
14325:         museumRole: "A concise entry into Wu culture, literati gardens, canal trade, silk, painting, and urban refinement.",
14516:         museumRoleZh: "进入吴文化、文人园林、运河贸易、丝绸、绘画和城市审美的简洁入口。",
14707:         history:
14898:           "Suzhou is deeply tied to Jiangnan culture, classical gardens, canal networks, silk production, and elite urban life from the Song through Ming-Qing periods.",
15089:         historyZh: "苏州与江南文化、古典园林、运河网络、丝绸生产，以及宋至明清以来的城市生活密切相关。",
15280:         sites: ["Humble Administrator's Garden", "Pingjiang Road", "Suzhou section of the Grand Canal", "Tiger Hill"],
15471:         sitesZh: ["拙政园", "平江路", "大运河苏州段", "虎丘"],
15662:         baseViews: 10740,
15853:         notes: 33,
16044:         verified: "2026-05",
16235:         access: "High",
16426:         status: "Needs visitor notes"
16617:       },
16808:       {
16999:         id: "yangzhou",
17190:         name: "Yangzhou",
17381:         zh: "扬州",
17572:         province: "Jiangsu",
17763:         museum: "Yangzhou Museum / China Grand Canal Museum",
17954:         museumZh: "扬州博物馆 / 中国大运河博物馆",
18145:         museumRole: "A strong starting point for Grand Canal culture, salt merchants, gardens, and Qing-era urban prosperity.",
18336:         museumRoleZh: "理解大运河文化、盐商、园林和清代城市繁荣的重要入口。",
18527:         history:
18718:           "Yangzhou is central to Grand Canal history, salt commerce, literary culture, gardens, and the movement of goods and people between north and south China.",
18909:         historyZh: "扬州是理解大运河、盐业商业、文学文化、园林，以及南北物资与人员流动的重要城市。",
19100:         sites: ["Slender West Lake", "Dongguan Street", "Ge Garden", "Grand Canal sites"],
19291:         sitesZh: ["瘦西湖", "东关街", "个园", "大运河遗产点"],
19482:         baseViews: 4660,
19673:         notes: 12,
19864:         verified: "2026-04",
20055:         access: "Medium",
20246:         status: "Needs review"
20437:       }
20628:     ]
20819:   },
21010:   {
21201:     id: "sichuan",
21392:     name: "Sichuan",
21583:     zh: "四川",
21774:     type: "Province",
21965:     color: "jade",
22156:     cities: [
22347:       {
22538:         id: "chengdu",
22729:         name: "Chengdu",
22920:         zh: "成都",
23111:         province: "Sichuan",
23302:         museum: "Chengdu Museum / Jinsha Site Museum",
23493:         museumZh: "成都博物馆 / 金沙遗址博物馆",
23684:         museumRole:
23875:           "The first stop for ancient Shu culture, basin geography, urban life, local crafts, and the relationship between Chengdu and Sichuan's wider cultural landscape.",
24066:         museumRoleZh: "理解古蜀文化、盆地地理、城市生活、地方工艺，以及成都与四川整体文化景观关系的第一入口。",
24257:         history:
24448:           "Chengdu is a long-lived urban center in the Sichuan Basin, associated with ancient Shu civilization, Qin-Han integration, Shu Han memory, commerce, and everyday urban culture.",
24639:         historyZh: "成都是四川盆地长期延续的城市中心，关联古蜀文明、秦汉整合、蜀汉记忆、商业和日常城市文化。",
24830:         sites: ["Jinsha Site Museum", "Wuhou Shrine", "Du Fu Thatched Cottage", "Dujiangyan"],
25021:         sitesZh: ["金沙遗址博物馆", "武侯祠", "杜甫草堂", "都江堰"],
25212:         baseViews: 13320,
25403:         notes: 40,
25594:         verified: "2026-05",
25785:         access: "High",
25976:         status: "Official facts pending"
26167:       },
26358:       {
26549:         id: "leshan",
26740:         name: "Leshan",
26931:         zh: "乐山",
27122:         province: "Sichuan",
27313:         museum: "Leshan Museum",
27504:         museumZh: "乐山博物馆",
27695:         museumRole: "A practical entry for river geography, Buddhist carving, local trade, and the wider Emei-Leshan heritage landscape.",
27886:         museumRoleZh: "理解河流地理、佛教造像、地方贸易和峨眉山—乐山整体遗产景观的实用入口。",
28077:         history:
28268:           "Leshan is shaped by river confluences, Buddhist monumental art, and its relationship with Mount Emei and southwest travel routes.",
28459:         historyZh: "乐山受到江河交汇、佛教大型造像、峨眉山关系和西南交通路线的共同塑造。",
28650:         sites: ["Leshan Giant Buddha", "Mount Emei", "Lingyun Mountain area"],

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/data/map-sources.ts | Select-Object -First 130 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 657ms:
   1: export type ProvinceHitArea = {
   2:   id: string;
   3:   en: string;
   4:   zh: string;
   5:   /** Approximate centre x in % of full-China image width */
   6:   x: number;
   7:   /** Approximate centre y in % of full-China image height */
   8:   y: number;
   9:   /** Width in % */
  10:   w: number;
  11:   /** Height in % */
  12:   h: number;
  13: };
  14: 
  15: export const provinceHitAreas: ProvinceHitArea[] = [
  16:   { id: "xinjiang", en: "Xinjiang", zh: "新疆", x: 26, y: 36, w: 24, h: 26 },
  17:   { id: "tibet", en: "Tibet", zh: "西藏", x: 25, y: 61, w: 27, h: 22 },
  18:   { id: "qinghai", en: "Qinghai", zh: "青海", x: 41, y: 56, w: 15, h: 15 },
  19:   { id: "gansu", en: "Gansu", zh: "甘肃", x: 49, y: 46, w: 13, h: 14 },
  20:   { id: "ningxia", en: "Ningxia", zh: "宁夏", x: 55, y: 43, w: 5, h: 7 },
  21:   { id: "inner-mongolia", en: "Inner Mongolia", zh: "内蒙古", x: 63, y: 32, w: 28, h: 18 },
  22:   { id: "heilongjiang", en: "Heilongjiang", zh: "黑龙江", x: 78, y: 20, w: 18, h: 15 },
  23:   { id: "jilin", en: "Jilin", zh: "吉林", x: 78, y: 32, w: 9, h: 8 },
  24:   { id: "liaoning", en: "Liaoning", zh: "辽宁", x: 75, y: 39, w: 9, h: 8 },
  25:   { id: "beijing", en: "Beijing", zh: "北京", x: 68, y: 42, w: 4, h: 4 },
  26:   { id: "tianjin", en: "Tianjin", zh: "天津", x: 70, y: 44, w: 4, h: 4 },
  27:   { id: "hebei", en: "Hebei", zh: "河北", x: 67, y: 46, w: 9, h: 9 },
  28:   { id: "shanxi", en: "Shanxi", zh: "山西", x: 63, y: 47, w: 7, h: 10 },
  29:   { id: "shaanxi", en: "Shaanxi", zh: "陕西", x: 59, y: 51, w: 8, h: 12 },
  30:   { id: "henan", en: "Henan", zh: "河南", x: 65, y: 54, w: 9, h: 9 },
  31:   { id: "shandong", en: "Shandong", zh: "山东", x: 72, y: 51, w: 9, h: 7 },
  32:   { id: "jiangsu", en: "Jiangsu", zh: "江苏", x: 73, y: 57, w: 8, h: 9 },
  33:   { id: "anhui", en: "Anhui", zh: "安徽", x: 69, y: 60, w: 8, h: 10 },
  34:   { id: "hubei", en: "Hubei", zh: "湖北", x: 63, y: 61, w: 10, h: 9 },
  35:   { id: "sichuan", en: "Sichuan", zh: "四川", x: 53, y: 64, w: 14, h: 14 },
  36:   { id: "chongqing", en: "Chongqing", zh: "重庆", x: 59, y: 65, w: 6, h: 7 },
  37:   { id: "hunan", en: "Hunan", zh: "湖南", x: 64, y: 69, w: 8, h: 10 },
  38:   { id: "jiangxi", en: "Jiangxi", zh: "江西", x: 70, y: 69, w: 8, h: 10 },
  39:   { id: "zhejiang", en: "Zhejiang", zh: "浙江", x: 75, y: 66, w: 7, h: 8 },
  40:   { id: "shanghai", en: "Shanghai", zh: "上海", x: 78, y: 59, w: 4, h: 4 },
  41:   { id: "fujian", en: "Fujian", zh: "福建", x: 73, y: 75, w: 8, h: 10 },
  42:   { id: "guizhou", en: "Guizhou", zh: "贵州", x: 57, y: 73, w: 9, h: 9 },
  43:   { id: "yunnan", en: "Yunnan", zh: "云南", x: 50, y: 78, w: 12, h: 15 },
  44:   { id: "guangxi", en: "Guangxi", zh: "广西", x: 61, y: 79, w: 10, h: 10 },
  45:   { id: "guangdong", en: "Guangdong", zh: "广东", x: 68, y: 80, w: 12, h: 9 },
  46:   { id: "hainan", en: "Hainan", zh: "海南", x: 64, y: 91, w: 5, h: 5 },
  47:   { id: "hong-kong", en: "Hong Kong", zh: "香港", x: 72, y: 82, w: 3, h: 3 },
  48:   { id: "macau", en: "Macau", zh: "澳门", x: 70, y: 82, w: 3, h: 3 },
  49:   { id: "taiwan", en: "Taiwan", zh: "台湾", x: 79, y: 75, w: 6, h: 10 }
  50: ];
  51: 
  52: export const fullChinaMapSrc = "/assets/china-map-gs2022-4309.jpg";
  53: 
  54: export const provinceTextureSrc = (provinceId: string) =>
  55:   `/assets/province-map-textures/${provinceId}.png`;
  56: 
  57: export const officialMapCredit = "GS(2022)4309";
  58: 
  59: export const officialProvinceMapEndpoint =
  60:   "https://bzdt.tianditu.gov.cn/iserver/services/map-2200_China_Map/rest/maps/2200%E4%B8%87%E8%87%AA%E5%8A%A9%E5%88%B6%E5%9B%BE/image.png";
  61: 
  62: export type ProvinceBounds = { left: number; right: number; bottom: number; top: number };
  63: 
  64: export const officialProvinceBounds: Record<string, ProvinceBounds> = {
  65:   xinjiang: { left: -3032441.53, right: -1095560.84, bottom: 4013419.31, top: 5519261.34 },
  66:   tibet: { left: -2882534.85, right: -1040616.29, bottom: 2962762.13, top: 4178547.46 },
  67:   qinghai: { left: -1835055.56, right: -612083.66, bottom: 3444039.15, top: 4331644.9 },
  68:   gansu: { left: -1491215.4, right: -112713.32, bottom: 3475643.67, top: 4682283.18 },
  69:   ningxia: { left: -504506.31, right: -203525.02, bottom: 3770553.13, top: 4236435.59 },
  70:   "inner-mongolia": { left: -1036871.83, right: 1145761.66, bottom: 4021980.8, top: 5824342.47 },
  71:   heilongjiang: { left: 780015.14, right: 1846587.07, bottom: 4843626.39, top: 5865660.27 },
  72:   jilin: { left: 899328.46, right: 1692097.1, bottom: 4500493.69, top: 5081871.4 },
  73:   liaoning: { left: 732146.17, right: 1299136.85, bottom: 4208835.76, top: 4768536.48 },
  74:   beijing: { left: 457475.45, right: 624372.18, bottom: 4255681.44, top: 4438320.04 },
  75:   tianjin: { left: 571919.7, right: 682570.7, bottom: 4160698.69, top: 4348965.89 },
  76:   hebei: { left: 304313.42, right: 830519.25, bottom: 3863236.55, top: 4616713.01 },
  77:   shanxi: { left: 23286.77, right: 383195.26, bottom: 3689180.12, top: 4391002.08 },
  78:   shaanxi: { left: -413593.96, right: 107833.84, bottom: 3364465.74, top: 4253438.85 },
  79:   henan: { left: 32572.5, right: 603139.29, bottom: 3340938.75, top: 3894526.89 },
  80:   shandong: { left: 431224.49, right: 1101153.13, bottom: 3696141.86, top: 4125449.53 },
  81:   jiangsu: { left: 570739.53, right: 1108936.9, bottom: 3310867.27, top: 3788214.02 },
  82:   anhui: { left: 448683.13, right: 905226.53, bottom: 3137559.78, top: 3717298.96 },
  83:   hubei: { left: -154897.4, right: 585411.56, bottom: 3072268.07, top: 3538243.38 },
  84:   sichuan: { left: -1161673.21, right: -134304.7, bottom: 2765189.84, top: 3717970.63 },
  85:   chongqing: { left: -452010.48, right: 18937.26, bottom: 2966193.32, top: 3423037.52 },
  86:   hunan: { left: -121706.04, right: 421919.97, bottom: 2575984.25, top: 3187827.45 },
  87:   jiangxi: { left: 351746.12, right: 820820.93, bottom: 2568339.09, top: 3201359.39 },
  88:   zhejiang: { left: 771678.89, right: 1155409.96, bottom: 2907626.2, top: 3350021.18 },
  89:   shanghai: { left: 1022373.93, right: 1119414.86, bottom: 3310265.48, top: 3402302.89 },
  90:   fujian: { left: 589488.24, right: 1026850.39, bottom: 2484360.41, top: 3021531.41 },
  91:   guizhou: { left: -631422.1, right: -44202.72, bottom: 2582518.52, top: 3086858.03 },
  92:   yunnan: { left: -1269416.25, right: -390924.8, bottom: 2228423.99, top: 3144480.28 },
  93:   guangxi: { left: -562723.31, right: 209095.02, bottom: 2218039.46, top: 2768889.85 },
  94:   guangdong: { left: -35662.94, right: 733721, bottom: 2090661.16, top: 2677365.63 },
  95:   hainan: { left: -148669.65, right: 110738.03, bottom: 1866031, top: 2083103.51 },
  96:   "hong-kong": { left: 406816.38, right: 458023.17, bottom: 2322423.4, top: 2354059.1 },
  97:   macau: { left: 347654.34, right: 390296.84, bottom: 2289105.45, top: 2331747.95 },
  98:   taiwan: { left: 1035105.54, right: 1207740.72, bottom: 2334741.53, top: 2715823.31 }
  99: };
 100: 
 101: export const cityMapPoints: Record<string, { x: number; y: number }> = {
 102:   "beijing-city": { x: 68.8, y: 43.6 },
 103:   "shanghai-city": { x: 78.4, y: 60.2 },
 104:   xian: { x: 62.2, y: 56.7 },
 105:   xianyang: { x: 61.4, y: 56.6 },
 106:   yanan: { x: 60.7, y: 52.4 },
 107:   luoyang: { x: 66.0, y: 56.0 },
 108:   kaifeng: { x: 68.0, y: 55.4 },
 109:   anyang: { x: 67.6, y: 52.7 },
 110:   nanjing: { x: 73.7, y: 59.2 },
 111:   suzhou: { x: 76.5, y: 60.3 },
 112:   yangzhou: { x: 74.6, y: 58.5 },
 113:   chengdu: { x: 57.0, y: 66.8 },
 114:   leshan: { x: 56.8, y: 69.6 }
 115: };

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Select-String -Path v2/src/data/atlas.ts -Pattern 'id: \"guangdong','Guangdong','Guangzhou','Shenzhen','广东','广州','深圳'" in c:\Users\h\Documents\New project 2
 succeeded in 624ms:

v2\src\data\atlas.ts:474:  guangdong: [
v2\src\data\atlas.ts:475:    { zh: "广州塔", en: "Canton Tower" },



exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/scripts/interaction-check.mjs | Select-Object -First 240 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/pillar/PaymentsChecklist.tsx | Select-Object -First 180 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/pillar/TransportGuide.tsx | Select-Object -First 160 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/pillar/EmergencyBriefing.tsx | Select-Object -First 170 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 1016ms:
   1: import { spawn } from "node:child_process";
   2: import { rm, mkdtemp } from "node:fs/promises";
   3: import { join } from "node:path";
   4: import { tmpdir } from "node:os";
   5: 
   6: const CHROME =
   7:   process.env.CHROME_PATH ??
   8:   "C:/Program Files/Google/Chrome/Application/chrome.exe";
   9: const BASE_URL = process.env.TEST_URL ?? "http://127.0.0.1:5173/";
  10: const CITY_IDS = ["beijing", "shanghai", "guangzhou", "shenzhen"];
  11: const WAIT_STEP_MS = 200;
  12: const DEFAULT_TIMEOUT_MS = 8000;
  13: 
  14: let nextId = 1;
  15: const results = [];
  16: 
  17: const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  18: 
  19: function pass(name) {
  20:   results.push(`PASS ${name}`);
  21: }
  22: 
  23: function assert(condition, name, detail = "") {
  24:   if (!condition) throw new Error(`${name}${detail ? `: ${detail}` : ""}`);
  25:   pass(name);
  26: }
  27: 
  28: async function waitForPage(port) {
  29:   for (let i = 0; i < 80; i += 1) {
  30:     try {
  31:       let response = await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, {
  32:         method: "PUT"
  33:       });
  34:       if (response.ok) return response.json();
  35: 
  36:       response = await fetch(`http://127.0.0.1:${port}/json/list`);
  37:       if (response.ok) {
  38:         const list = await response.json();
  39:         const page = list.find((item) => item.type === "page" && item.webSocketDebuggerUrl);
  40:         if (page) return page;
  41:       }
  42:     } catch {
  43:       // Chrome is still booting.
  44:     }
  45:     await wait(150);
  46:   }
  47:   throw new Error("Chrome page target not ready");
  48: }
  49: 
  50: async function connect(wsUrl) {
  51:   const ws = new WebSocket(wsUrl);
  52:   await new Promise((resolve, reject) => {
  53:     ws.addEventListener("open", resolve, { once: true });
  54:     ws.addEventListener("error", reject, { once: true });
  55:   });
  56: 
  57:   const pending = new Map();
  58:   ws.addEventListener("message", (event) => {
  59:     const msg = JSON.parse(event.data);
  60:     if (!msg.id || !pending.has(msg.id)) return;
  61: 
  62:     const call = pending.get(msg.id);
  63:     pending.delete(msg.id);
  64:     if (msg.error) call.reject(new Error(JSON.stringify(msg.error)));
  65:     else call.resolve(msg.result);
  66:   });
  67: 
  68:   return {
  69:     send(method, params = {}) {
  70:       const id = nextId;
  71:       nextId += 1;
  72:       ws.send(JSON.stringify({ id, method, params }));
  73:       return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
  74:     },
  75:     close() {
  76:       ws.close();
  77:     }
  78:   };
  79: }
  80: 
  81: async function openBrowser(name, width, height, mobile) {
  82:   const port = 9400 + Math.floor(Math.random() * 1000);
  83:   const userDataDir = await mkdtemp(join(tmpdir(), `tt-test-${name}-`));
  84:   const proc = spawn(
  85:     CHROME,
  86:     [
  87:       "--headless=new",
  88:       "--disable-gpu",
  89:       "--hide-scrollbars",
  90:       `--remote-debugging-port=${port}`,
  91:       `--user-data-dir=${userDataDir}`,
  92:       `--window-size=${width},${height}`,
  93:       "about:blank"
  94:     ],
  95:     { stdio: "ignore" }
  96:   );
  97: 
  98:   const page = await waitForPage(port);
  99:   const cdp = await connect(page.webSocketDebuggerUrl);
 100:   await cdp.send("Page.enable");
 101:   await cdp.send("Runtime.enable");
 102:   await cdp.send("Emulation.setDeviceMetricsOverride", {
 103:     width,
 104:     height,
 105:     deviceScaleFactor: 1,
 106:     mobile
 107:   });
 108: 
 109:   return {
 110:     cdp,
 111:     async close() {
 112:       try {
 113:         cdp.close();
 114:       } catch {
 115:         // Already closed.
 116:       }
 117:       proc.kill("SIGTERM");
 118:       await wait(700);
 119:       await rm(userDataDir, { recursive: true, force: true }).catch(() => {});
 120:     }
 121:   };
 122: }
 123: 
 124: async function evalJson(cdp, expression) {
 125:   const result = await cdp.send("Runtime.evaluate", {
 126:     expression: `(() => {
 127:       const value = (() => { ${expression} })();
 128:       return JSON.stringify(value === undefined ? null : value);
 129:     })()`,
 130:     returnByValue: true,
 131:     awaitPromise: true
 132:   });
 133:   return JSON.parse(result.result.value ?? "null");
 134: }
 135: 
 136: async function evalBool(cdp, expression) {
 137:   return Boolean(await evalJson(cdp, expression));
 138: }
 139: 
 140: async function gotoHome(cdp) {
 141:   await cdp.send("Page.navigate", { url: BASE_URL });
 142:   await wait(1800);
 143:   await cdp.send("Runtime.evaluate", {
 144:     expression: "localStorage.setItem('chinaAtlas:language', 'en'); location.reload();",
 145:     awaitPromise: true
 146:   });
 147:   await wait(3000);
 148: }
 149: 
 150: async function waitUntil(cdp, name, expression, timeoutMs = DEFAULT_TIMEOUT_MS) {
 151:   const started = Date.now();
 152:   while (Date.now() - started < timeoutMs) {
 153:     if (await evalBool(cdp, expression)) {
 154:       pass(name);
 155:       return;
 156:     }
 157:     await wait(WAIT_STEP_MS);
 158:   }
 159:   const state = await evalJson(
 160:     cdp,
 161:     `return {
 162:       url: location.href,
 163:       text: document.body.innerText.slice(0, 500),
 164:       map: document.querySelector('[aria-label="China interactive map"]')?.dataset ?? null,
 165:       overlay: document.querySelector('[data-province-3d-overlay]')?.textContent.slice(0, 200) ?? null,
 166:       hitCount: document.querySelectorAll('[data-province-hit]').length,
 167:       labels: Array.from(document.querySelectorAll('[aria-label]')).map((el) => ({
 168:         tag: el.tagName,
 169:         role: el.getAttribute('role'),
 170:         label: el.getAttribute('aria-label')
 171:       })).slice(0, 30)
 172:     };`
 173:   ).catch((error) => ({ error: String(error) }));
 174:   throw new Error(`${name}: ${JSON.stringify(state)}`);
 175: }
 176: 
 177: async function trigger(cdp, name, expression) {
 178:   await waitUntil(cdp, `${name} target available`, `return Boolean(${expression});`);
 179: 
 180:   const target = await evalJson(
 181:     cdp,
 182:     `const el = (${expression});
 183:     if (!el) return null;
 184:     const rect = el.getBoundingClientRect();
 185:     return {
 186:       isSvg: el instanceof SVGElement,
 187:       x: rect.left + rect.width / 2,
 188:       y: rect.top + rect.height / 2,
 189:       width: rect.width,
 190:       height: rect.height
 191:     };`
 192:   );
 193: 
 194:   if (target?.isSvg && target.width > 0 && target.height > 0) {
 195:     await cdp.send("Input.dispatchMouseEvent", {
 196:       type: "mouseMoved",
 197:       x: target.x,
 198:       y: target.y,
 199:       button: "none"
 200:     });
 201:     await cdp.send("Input.dispatchMouseEvent", {
 202:       type: "mousePressed",
 203:       x: target.x,
 204:       y: target.y,
 205:       button: "left",
 206:       clickCount: 1
 207:     });
 208:     await cdp.send("Input.dispatchMouseEvent", {
 209:       type: "mouseReleased",
 210:       x: target.x,
 211:       y: target.y,
 212:       button: "left",
 213:       clickCount: 1
 214:     });
 215:     pass(name);
 216:     await wait(900);
 217:     return;
 218:   }
 219: 
 220:   const triggered = await evalBool(
 221:     cdp,
 222:     `const el = (${expression});
 223:     if (!el) return false;
 224:     if (typeof el.click === 'function') el.click();
 225:     else el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
 226:     return true;`
 227:   );
 228:   assert(triggered, name);
 229:   await wait(900);
 230: }
 231: 
 232: async function assertNoOverflow(cdp, name) {
 233:   const metrics = await evalJson(
 234:     cdp,
 235:     "return { innerWidth, doc: document.documentElement.scrollWidth, body: document.body.scrollWidth };"
 236:   );
 237:   assert(
 238:     metrics.doc <= metrics.innerWidth && metrics.body <= metrics.innerWidth,
 239:     name,
 240:     JSON.stringify(metrics)

 succeeded in 1015ms:
   1: import { useState } from "react";
   2: import clsx from "clsx";
   3: import { CITY_LABELS, cityTransport, railBooking, type CityId } from "../../data/transport";
   4: import { useLang } from "../../store/language";
   5: import PracticalBlock from "../common/PracticalBlock";
   6: 
   7: const KIND_LABEL = {
   8:   cheapest: { en: "Cheapest", zh: "最便宜" },
   9:   fastest: { en: "Fastest", zh: "最快" },
  10:   stable: { en: "Most stable", zh: "最可靠" }
  11: };
  12: 
  13: type Props = { cityId?: CityId };
  14: 
  15: export default function TransportGuide({ cityId }: Props) {
  16:   const { lang } = useLang();
  17:   const isZh = lang === "zh";
  18:   const cityScoped = Boolean(cityId);
  19:   const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
  20:   const effectiveId: CityId = cityId ?? activeId;
  21:   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
  22: 
  23:   return (
  24:     <section id="transport" className="flex flex-col gap-4">
  25:       {!cityScoped && (
  26:         <header>
  27:           <span className="text-xs font-bold uppercase tracking-widest text-muted">
  28:             {isZh ? "支柱 3" : "Pillar 3"}
  29:           </span>
  30:           <h2 className="text-2xl font-bold">{isZh ? "交通" : "Transport"}</h2>
  31:           <p className="text-sm text-muted">
  32:             {isZh
  33:               ? "12306 国际版购票 + 四城机场到市区 + 地铁外卡接受度 + 网约车实际情况。"
  34:               : "12306 international booking + airport-to-city for the four cities + metro foreign-card status + ride-hail reality."}
  35:           </p>
  36:         </header>
  37:       )}
  38:       {cityScoped && <h2 className="text-xl font-bold">{isZh ? "交通" : "Transport"}</h2>}
  39: 
  40:       <article className="flex flex-col gap-3 rounded-xl border border-line bg-white p-5">
  41:         <h3 className="text-sm font-bold uppercase tracking-widest text-muted">
  42:           {isZh ? "12306 国际版" : "12306 international"}
  43:         </h3>
  44:         <RailRow titleEn="Registration" titleZh="注册" en={railBooking.registration.en} zh={railBooking.registration.zh} />
  45:         <RailRow titleEn="Payment" titleZh="支付" en={railBooking.payment.en} zh={railBooking.payment.zh} />
  46:         <RailRow titleEn="Refund" titleZh="退票" en={railBooking.refund.en} zh={railBooking.refund.zh} />
  47:         <RailRow titleEn="Real-name" titleZh="实名" en={railBooking.realName.en} zh={railBooking.realName.zh} />
  48:       </article>
  49: 
  50:       {!cityScoped && (
  51:         <div role="tablist" aria-label="City selector" className="flex flex-wrap gap-2">
  52:           {cityTransport.map((city) => (
  53:             <button
  54:               key={city.cityId}
  55:               type="button"
  56:               role="tab"
  57:               aria-selected={activeId === city.cityId}
  58:               onClick={() => setActiveId(city.cityId)}
  59:               className={clsx(
  60:                 "rounded-full border px-4 py-1.5 text-sm font-bold transition",
  61:                 activeId === city.cityId
  62:                   ? "border-ink bg-ink text-white"
  63:                   : "border-line bg-white text-ink hover:border-jade hover:text-jade"
  64:               )}
  65:             >
  66:               {isZh ? CITY_LABELS[city.cityId].zh : CITY_LABELS[city.cityId].en}
  67:             </button>
  68:           ))}
  69:         </div>
  70:       )}
  71: 
  72:       <article className="flex flex-col gap-4 rounded-xl border border-line bg-white p-5">
  73:         {active.airports.map((airport) => (
  74:           <section key={airport.code} className="flex flex-col gap-2">
  75:             <h4 className="text-sm font-bold">{airport.code} · {isZh ? airport.nameZh : airport.nameEn}</h4>
  76:             <ul className="grid gap-2 md:grid-cols-3">
  77:               {airport.options.map((opt) => (
  78:                 <li key={opt.kind} className="flex flex-col gap-1 rounded-lg bg-paper p-3">
  79:                   <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
  80:                     {isZh ? KIND_LABEL[opt.kind].zh : KIND_LABEL[opt.kind].en}
  81:                   </span>
  82:                   <strong className="text-sm leading-tight">{isZh ? opt.routeZh : opt.routeEn}</strong>
  83:                   <div className="text-xs text-muted">¥{opt.costCNY} · {opt.timeMin} {isZh ? "分钟" : "min"}</div>
  84:                   <span className="text-xs leading-snug">{isZh ? opt.paymentZh : opt.paymentEn}</span>
  85:                 </li>
  86:               ))}
  87:             </ul>
  88:           </section>
  89:         ))}
  90: 
  91:         <section className="flex flex-col gap-2 border-t border-line pt-3">
  92:           <h4 className="text-sm font-bold">{isZh ? "地铁支付" : "Metro payment"}</h4>
  93:           <p className="text-sm leading-relaxed">{isZh ? active.metro.summaryZh : active.metro.summaryEn}</p>
  94:         </section>
  95: 
  96:         <section className="flex flex-col gap-2 border-t border-line pt-3">
  97:           <h4 className="text-sm font-bold">{isZh ? "网约车 / 出租" : "Ride-hail & taxi"}</h4>
  98:           <p className="text-sm leading-relaxed">{isZh ? active.rideHail.zh : active.rideHail.en}</p>
  99:         </section>
 100: 
 101:         <section className="flex flex-col gap-2 border-t border-line pt-3">
 102:           <h4 className="text-sm font-bold">{isZh ? "常见注意事项" : "Common pitfalls"}</h4>
 103:           <ul className="grid gap-2">
 104:             {active.pitfalls.map((p, i) => (
 105:               <li key={i} className="rounded-lg bg-amber-50 p-3 text-sm">
 106:                 {isZh ? p.zh : p.en}
 107:               </li>
 108:             ))}
 109:           </ul>
 110:         </section>
 111:       </article>
 112: 
 113:       <PracticalBlock pillar="transport" cityId={cityId} />
 114:     </section>
 115:   );
 116: }
 117: 
 118: function RailRow({ titleEn, titleZh, en, zh }: { titleEn: string; titleZh: string; en: string; zh: string }) {
 119:   const { lang } = useLang();
 120:   const isZh = lang === "zh";
 121:   return (
 122:     <div className="grid gap-1 border-t border-line pt-2 first:border-t-0 first:pt-0 md:grid-cols-[100px_1fr]">
 123:       <span className="text-xs font-bold uppercase tracking-widest text-muted">{isZh ? titleZh : titleEn}</span>
 124:       <p className="text-sm leading-relaxed">{isZh ? zh : en}</p>
 125:     </div>
 126:   );
 127: }

 succeeded in 1038ms:
   1: import { useState } from "react";
   2: import clsx from "clsx";
   3: import {
   4:   cityHotlines,
   5:   embassies,
   6:   hospitals,
   7:   hospitalVisitFlow,
   8:   mfaConsular,
   9:   nationalEmergency
  10: } from "../../data/emergency";
  11: import { CITY_LABELS, type CityId } from "../../data/transport";
  12: import { useLang } from "../../store/language";
  13: import PracticalBlock from "../common/PracticalBlock";
  14: 
  15: const CITIES: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
  16: 
  17: type Props = { cityId?: CityId };
  18: 
  19: export default function EmergencyBriefing({ cityId }: Props) {
  20:   const { lang } = useLang();
  21:   const isZh = lang === "zh";
  22:   const cityScoped = Boolean(cityId);
  23:   const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
  24:   const effectiveId: CityId = cityId ?? activeId;
  25: 
  26:   const cityHospitals = hospitals.filter((h) => h.cityId === effectiveId);
  27:   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
  28: 
  29:   return (
  30:     <section id="emergency" className="flex flex-col gap-4">
  31:       {!cityScoped && (
  32:         <header>
  33:           <span className="text-xs font-bold uppercase tracking-widest text-muted">
  34:             {isZh ? "支柱 5" : "Pillar 5"}
  35:           </span>
  36:           <h2 className="text-2xl font-bold">{isZh ? "紧急 / 医疗 / 领事" : "Emergency, Medical & Consular"}</h2>
  37:           <p className="text-sm text-muted">
  38:             {isZh
  39:               ? "国家急救号、四城外籍友好医院和热线、主要驻华使领馆。"
  40:               : "National emergency lines, foreign-friendly hospitals + multilingual hotlines, embassy contacts."}
  41:           </p>
  42:         </header>
  43:       )}
  44:       {cityScoped && <h2 className="text-xl font-bold">{isZh ? "应急 / 医疗" : "Emergency & Medical"}</h2>}
  45: 
  46:       <ul className="grid gap-2 grid-cols-2 md:grid-cols-4">
  47:         {nationalEmergency.map((row) => (
  48:           <li key={row.number} className="flex flex-col gap-1 rounded-xl border border-line bg-white p-4">
  49:             <strong className="text-3xl leading-none">{row.number}</strong>
  50:             <span className="text-xs font-bold uppercase tracking-widest text-muted">
  51:               {isZh ? row.labelZh : row.labelEn}
  52:             </span>
  53:             <p className="text-xs leading-snug text-ink/80">{isZh ? row.noteZh : row.noteEn}</p>
  54:           </li>
  55:         ))}
  56:       </ul>
  57: 
  58:       {!cityScoped && (
  59:         <div role="tablist" className="flex flex-wrap gap-2">
  60:           {CITIES.map((id) => (
  61:             <button
  62:               key={id}
  63:               type="button"
  64:               role="tab"
  65:               aria-selected={activeId === id}
  66:               onClick={() => setActiveId(id)}
  67:               className={clsx(
  68:                 "rounded-full border px-4 py-1.5 text-sm font-bold transition",
  69:                 activeId === id
  70:                   ? "border-ink bg-ink text-white"
  71:                   : "border-line bg-white text-ink hover:border-jade hover:text-jade"
  72:               )}
  73:             >
  74:               {isZh ? CITY_LABELS[id].zh : CITY_LABELS[id].en}
  75:             </button>
  76:           ))}
  77:         </div>
  78:       )}
  79: 
  80:       <article className="grid gap-4 rounded-xl border border-line bg-white p-5 md:grid-cols-[260px_1fr]">
  81:         <section className="flex flex-col gap-2 rounded-lg bg-paper p-4">
  82:           <span className="text-xs font-bold uppercase tracking-widest text-muted">{isZh ? "城市热线" : "City hotline"}</span>
  83:           <strong className="text-2xl leading-none">{cityHotline.number}</strong>
  84:           <ul className="flex flex-wrap gap-1 text-[10px] uppercase tracking-wider">
  85:             {cityHotline.langs.map((l) => (
  86:               <li key={l} className="rounded-full bg-white px-2 py-0.5 text-muted">{l}</li>
  87:             ))}
  88:           </ul>
  89:           <p className="text-xs leading-snug">{isZh ? cityHotline.noteZh : cityHotline.noteEn}</p>
  90:         </section>
  91: 
  92:         <section className="flex flex-col gap-2">
  93:           <span className="text-xs font-bold uppercase tracking-widest text-muted">{isZh ? "外籍友好医院" : "Foreign-friendly hospitals"}</span>
  94:           <ul className="grid gap-2">
  95:             {cityHospitals.map((h) => (
  96:               <li key={h.nameEn} className="flex flex-col gap-1 rounded-lg border border-line p-3">
  97:                 <strong className="text-sm leading-tight">{isZh ? h.nameZh : h.nameEn}</strong>
  98:                 <span className="text-xs text-muted">{h.addressEn}</span>
  99:                 <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
 100:                   <span><span className="font-bold">{isZh ? "总机" : "Main"}:</span> {h.phone}</span>
 101:                   {h.emergencyPhone && (
 102:                     <span><span className="font-bold">{isZh ? "急诊" : "ER"}:</span> {h.emergencyPhone}</span>
 103:                   )}
 104:                 </div>
 105:                 <span className="text-xs text-muted">{h.intlDept}</span>
 106:                 <span className="text-xs text-muted">{h.hours}</span>
 107:               </li>
 108:             ))}
 109:           </ul>
 110:         </section>
 111:       </article>
 112: 
 113:       <section className="flex flex-col gap-2">
 114:         <h3 className="text-sm font-bold uppercase tracking-widest text-muted">{isZh ? "主要驻华大使馆" : "Major embassies in China"}</h3>
 115:         <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
 116:           {embassies.map((e) => (
 117:             <li key={e.country} className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
 118:               <strong className="text-sm">{isZh ? `${e.countryZh}（${e.country}）` : e.country}</strong>
 119:               <span className="text-xs text-muted">{e.address}</span>
 120:               <span className="text-xs"><span className="font-bold">{isZh ? "总机" : "Main"}:</span> {e.phone}</span>
 121:               <span className="text-xs"><span className="font-bold">{isZh ? "应急" : "Emergency"}:</span> {e.emergency}</span>
 122:             </li>
 123:           ))}
 124:         </ul>
 125:         <p className="text-xs text-muted">
 126:           {isZh ? "完整名录：" : "Full directory: "}
 127:           <a href={mfaConsular.url} target="_blank" rel="noreferrer" className="font-bold text-jade hover:underline">
 128:             MFA — {isZh ? mfaConsular.noteZh : mfaConsular.noteEn}
 129:           </a>
 130:         </p>
 131:       </section>
 132: 
 133:       <section className="flex flex-col gap-2 rounded-xl border border-line bg-white p-5">
 134:         <h3 className="text-sm font-bold uppercase tracking-widest text-muted">{isZh ? "看病流程" : "Hospital visit flow"}</h3>
 135:         <ol className="grid gap-2">
 136:           {hospitalVisitFlow.map((step) => (
 137:             <li key={step.step} className="flex gap-3">
 138:               <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">{step.step}</span>
 139:               <div className="flex flex-1 flex-col gap-1">
 140:                 <strong className="text-sm">{isZh ? step.titleZh : step.titleEn}</strong>
 141:                 <p className="text-xs leading-relaxed text-ink/80">{isZh ? step.bodyZh : step.bodyEn}</p>
 142:               </div>
 143:             </li>
 144:           ))}
 145:         </ol>
 146:       </section>
 147: 
 148:       <PracticalBlock pillar="emergency" cityId={cityId} />
 149:     </section>
 150:   );
 151: }

 succeeded in 1047ms:
   1: import {
   2:   atmRule,
   3:   cityPaymentNotes,
   4:   customsRules,
   5:   platformLimits,
   6:   preArrivalChecklist
   7: } from "../../data/payments";
   8: import type { CityId } from "../../data/transport";
   9: import { useLang } from "../../store/language";
  10: import PaymentsPractical from "./PaymentsPractical";
  11: 
  12: type Props = { cityId?: CityId };
  13: 
  14: export default function PaymentsChecklist({ cityId }: Props) {
  15:   const { lang } = useLang();
  16:   const isZh = lang === "zh";
  17:   const cityScoped = Boolean(cityId);
  18:   const cities = cityId
  19:     ? cityPaymentNotes.filter((c) => c.cityId === cityId)
  20:     : cityPaymentNotes;
  21: 
  22:   return (
  23:     <section id="payments" className="flex flex-col gap-4">
  24:       {!cityScoped && (
  25:         <header>
  26:           <span className="text-xs font-bold uppercase tracking-widest text-muted">
  27:             {isZh ? "支柱 2" : "Pillar 2"}
  28:           </span>
  29:           <h2 className="text-2xl font-bold">{isZh ? "支付准备" : "Payments"}</h2>
  30:           <p className="text-sm text-muted">
  31:             {isZh
  32:               ? "出发前必做、海关阈值、ATM 选择，每条都来自央行、海关、各市政府英文页。"
  33:               : "What to set up before you fly, customs thresholds, ATM rules. Cites PBOC, China Customs, and city government English pages."}
  34:           </p>
  35:         </header>
  36:       )}
  37:       {cityScoped && <h2 className="text-xl font-bold">{isZh ? "支付" : "Payments"}</h2>}
  38: 
  39:       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
  40:         <Card title={isZh ? "Alipay 单笔" : "Alipay per-tx"} big={`$${platformLimits.alipay.perTransactionUSD.toLocaleString()}`} note={isZh ? `年累 $${platformLimits.alipay.annualCumulativeUSD.toLocaleString()}` : `annual $${platformLimits.alipay.annualCumulativeUSD.toLocaleString()}`} />
  41:         <Card title={isZh ? "WeChat Pay 单笔" : "WeChat Pay per-tx"} big={`$${platformLimits.wechat.perTransactionUSD.toLocaleString()}`} note={isZh ? `年累 $${platformLimits.wechat.annualCumulativeUSD.toLocaleString()}` : `annual $${platformLimits.wechat.annualCumulativeUSD.toLocaleString()}`} />
  42:         <Card title={isZh ? "中行 ATM" : "BOC ATM"} big={`¥${atmRule.perWithdrawalCNY.toLocaleString()}`} note={atmRule.acceptedNetworks.join(" / ")} />
  43:         <Card title={isZh ? "外币现金申报" : "Foreign cash declare"} big="$5,000" note={isZh ? "超过等值须申报" : "above this must declare"} />
  44:       </div>
  45: 
  46:       <Block title={isZh ? "出发前清单" : "Before you fly"}>
  47:         <ul className="grid gap-2">
  48:           {preArrivalChecklist.map((step, i) => (
  49:             <li key={step.id} className="flex gap-3 rounded-lg border border-line bg-white p-3">
  50:               <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
  51:               <div className="flex flex-1 flex-col gap-1">
  52:                 <strong className="text-sm">{isZh ? step.titleZh : step.titleEn}</strong>
  53:                 <p className="text-xs leading-relaxed text-ink/80">{isZh ? step.bodyZh : step.bodyEn}</p>
  54:               </div>
  55:             </li>
  56:           ))}
  57:         </ul>
  58:       </Block>
  59: 
  60:       <Block title={isZh ? "海关申报阈值" : "China Customs thresholds"}>
  61:         <ul className="grid gap-2 sm:grid-cols-2">
  62:           {customsRules.map((rule) => (
  63:             <li key={rule.id} className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
  64:               <strong className="text-sm">{isZh ? rule.titleZh : rule.titleEn}</strong>
  65:               <p className="text-xs leading-relaxed text-ink/80">{isZh ? rule.bodyZh : rule.bodyEn}</p>
  66:             </li>
  67:           ))}
  68:         </ul>
  69:       </Block>
  70: 
  71:       <PaymentsPractical />
  72: 
  73:       <Block title={cityScoped ? (isZh ? "本城支付现状" : "This city — payment status") : (isZh ? "四城支付现状" : "Four-city payment status")}>
  74:         <ul className={`grid gap-2 ${cityScoped ? "" : "md:grid-cols-2"}`}>
  75:           {cities.map((city) => (
  76:             <li key={city.cityId} className="flex flex-col gap-2 rounded-lg border border-line bg-white p-3">
  77:               {!cityScoped && <strong className="text-sm">{isZh ? city.cityZh : city.cityEn}</strong>}
  78:               <ul className="grid gap-1.5">
  79:                 {city.bullets.map((bullet, i) => (
  80:                   <li key={i} className="text-xs leading-relaxed text-ink/80">
  81:                     {isZh ? bullet.zh : bullet.en}
  82:                   </li>
  83:                 ))}
  84:               </ul>
  85:             </li>
  86:           ))}
  87:         </ul>
  88:       </Block>
  89:     </section>
  90:   );
  91: }
  92: 
  93: function Card({ title, big, note }: { title: string; big: string; note: string }) {
  94:   return (
  95:     <article className="flex flex-col gap-1 rounded-xl border border-line bg-white p-4">
  96:       <span className="text-xs font-bold uppercase tracking-widest text-muted">{title}</span>
  97:       <strong className="text-2xl leading-none">{big}</strong>
  98:       <span className="text-xs text-muted">{note}</span>
  99:     </article>
 100:   );
 101: }
 102: 
 103: function Block({ title, children }: { title: string; children: React.ReactNode }) {
 104:   return (
 105:     <section className="flex flex-col gap-2">
 106:       <h3 className="text-sm font-bold uppercase tracking-widest text-muted">{title}</h3>
 107:       {children}
 108:     </section>
 109:   );
 110: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=240; Get-Content -Encoding UTF8 v2/scripts/interaction-check.mjs | Select-Object -Skip 240 -First 240 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 720ms:
 241:   );
 242: }
 243: 
 244: async function assertKeyLayoutFits(cdp, name) {
 245:   const issues = await evalJson(
 246:     cdp,
 247:     `const checks = [
 248:       ['language switch', 'body > header > div'],
 249:       ['home intro copy', 'main > header p'],
 250:       ['photo grid', 'main section[aria-label="City attraction photos"], main section[aria-label="城市景区照片"]'],
 251:       ['guide links', 'main section[aria-label="Travel guide links"], main section[aria-label="出行功能入口"]']
 252:     ];
 253: 
 254:     return checks.flatMap(([label, selector]) => {
 255:       const el = document.querySelector(selector);
 256:       if (!el) return [{ label, selector, issue: 'missing' }];
 257: 
 258:       const rect = el.getBoundingClientRect();
 259:       const style = getComputedStyle(el);
 260:       const problems = [];
 261: 
 262:       if (rect.left < -0.5 || rect.right > innerWidth + 0.5) {
 263:         problems.push({
 264:           label,
 265:           selector,
 266:           issue: 'outside viewport',
 267:           left: Math.round(rect.left),
 268:           right: Math.round(rect.right),
 269:           innerWidth
 270:         });
 271:       }
 272: 
 273:       if (el.scrollWidth > el.clientWidth + 1 && style.overflowX !== 'hidden') {
 274:         problems.push({
 275:           label,
 276:           selector,
 277:           issue: 'text/content overflow',
 278:           scrollWidth: el.scrollWidth,
 279:           clientWidth: el.clientWidth
 280:         });
 281:       }
 282: 
 283:       return problems;
 284:     });`
 285:   );
 286: 
 287:   assert(issues.length === 0, name, JSON.stringify(issues));
 288: }
 289: 
 290: async function assertMainHasNoEnglishHomeCopy(cdp, name) {
 291:   const residue = await evalJson(
 292:     cdp,
 293:     `const text = document.querySelector('main')?.innerText ?? '';
 294:     return [
 295:       'Travel China',
 296:       'Province map',
 297:       'Landmark map',
 298:       'Open map',
 299:       'Entry & visa',
 300:       'Payments',
 301:       'Travel notes',
 302:       'Beijing',
 303:       'Shanghai',
 304:       'Guangzhou',
 305:       'Shenzhen'
 306:     ].filter((word) => text.includes(word));`
 307:   );
 308: 
 309:   assert(residue.length === 0, name, JSON.stringify(residue));
 310: }
 311: 
 312: async function runInteractions(name, width, height, mobile) {
 313:   const browser = await openBrowser(name, width, height, mobile);
 314:   const { cdp } = browser;
 315: 
 316:   try {
 317:     await gotoHome(cdp);
 318:     await waitUntil(
 319:       cdp,
 320:       `${name}: home hydrated`,
 321:       "return document.body.innerText.includes('Travel China') && Boolean(document.querySelector('a[href=\"/city/beijing\"]')) && Boolean(document.querySelector('a[href=\"/map\"]'));"
 322:     );
 323:     await assertNoOverflow(cdp, `${name}: home no horizontal overflow`);
 324:     await assertKeyLayoutFits(cdp, `${name}: home key layout fits viewport`);
 325: 
 326:     await trigger(cdp, `${name}: switch to Chinese`, "document.querySelectorAll('body > header button')[1]");
 327:     await waitUntil(
 328:       cdp,
 329:       `${name}: Chinese copy rendered`,
 330:       "return document.documentElement.lang === 'zh-CN' && document.body.innerText.includes('\\u6b22\\u8fce\\u6765\\u4e2d\\u56fd') && document.body.innerText.includes('\\u5317\\u4eac');"
 331:     );
 332:     await assertNoOverflow(cdp, `${name}: Chinese no horizontal overflow`);
 333:     await assertKeyLayoutFits(cdp, `${name}: Chinese key layout fits viewport`);
 334:     await assertMainHasNoEnglishHomeCopy(cdp, `${name}: Chinese home has no English residue`);
 335: 
 336:     await trigger(cdp, `${name}: switch to English`, "document.querySelectorAll('body > header button')[0]");
 337:     await waitUntil(
 338:       cdp,
 339:       `${name}: English city cards rendered`,
 340:       "return document.documentElement.lang === 'en' && document.body.innerText.includes('Beijing') && document.body.innerText.includes('Shenzhen');"
 341:     );
 342: 
 343:     for (const cityId of CITY_IDS) {
 344:       await trigger(cdp, `${name}: open city ${cityId}`, `document.querySelector('a[href="/city/${cityId}"]')`);
 345:       await waitUntil(cdp, `${name}: city ${cityId} route`, `return location.pathname === '/city/${cityId}';`);
 346:       await assertNoOverflow(cdp, `${name}: city ${cityId} no horizontal overflow`);
 347:       await trigger(cdp, `${name}: return home from ${cityId}`, 'document.querySelector(\'a[href="/"]\')');
 348:       await waitUntil(cdp, `${name}: returned home from ${cityId}`, "return location.pathname === '/';");
 349:     }
 350: 
 351:     for (const topic of ["entry", "payments", "notes"]) {
 352:       await trigger(cdp, `${name}: open guide ${topic}`, `document.querySelector('a[href="/guide/${topic}"]')`);
 353:       await waitUntil(cdp, `${name}: guide ${topic} route`, `return location.pathname === '/guide/${topic}';`);
 354:       await assertNoOverflow(cdp, `${name}: guide ${topic} no horizontal overflow`);
 355:       await trigger(cdp, `${name}: return home from guide ${topic}`, 'document.querySelector(\'a[href="/"]\')');
 356:       await waitUntil(cdp, `${name}: returned home from guide ${topic}`, "return location.pathname === '/';");
 357:     }
 358: 
 359:     await trigger(cdp, `${name}: open province map`, 'document.querySelector(\'a[href="/map"]\')');
 360:     await waitUntil(cdp, `${name}: map route`, "return location.pathname === '/map' && Boolean(document.querySelector('.china-map-surface'));");
 361:     await assertNoOverflow(cdp, `${name}: map page no horizontal overflow`);
 362: 
 363:     await waitUntil(
 364:       cdp,
 365:       `${name}: map Beijing hit area ready`,
 366:       "return Boolean(document.querySelector('[data-province-hit=\"beijing\"]'));"
 367:     );
 368:     await trigger(cdp, `${name}: open Beijing 3D`, "document.querySelector('[data-province-hit=\"beijing\"]')");
 369:     await waitUntil(
 370:       cdp,
 371:       `${name}: Beijing 3D panel visible`,
 372:       "const overlay = document.querySelector('[data-province-3d-overlay]'); return overlay?.textContent.includes('Tianditu 3D') && overlay.textContent.includes('Back to 2D');"
 373:     );
 374:     await assertNoOverflow(cdp, `${name}: Beijing 3D no horizontal overflow`);
 375: 
 376:     await trigger(
 377:       cdp,
 378:       `${name}: Back to 2D closes 3D`,
 379:       "Array.from(document.querySelectorAll('button')).find((b) => b.textContent.includes('Back to 2D'))"
 380:     );
 381:     await waitUntil(cdp, `${name}: Back to 2D panel closed`, "return !document.querySelector('[data-province-3d-overlay]');");
 382: 
 383:     await trigger(cdp, `${name}: reopen Beijing 3D`, "document.querySelector('[data-province-hit=\"beijing\"]')");
 384:     await waitUntil(cdp, `${name}: reopened Beijing 3D`, "return Boolean(document.querySelector('[data-province-3d-overlay]'));");
 385:     await trigger(cdp, `${name}: X closes 3D`, "document.querySelector('[aria-label=\"Close 3D map\"]')");
 386:     await waitUntil(cdp, `${name}: X panel closed`, "return !document.querySelector('[data-province-3d-overlay]');");
 387: 
 388:     await trigger(
 389:       cdp,
 390:       `${name}: reopen Beijing for Escape`,
 391:       "document.querySelector('[data-province-hit=\"beijing\"]')"
 392:     );
 393:     await waitUntil(cdp, `${name}: Escape test panel visible`, "return Boolean(document.querySelector('[data-province-3d-overlay]'));");
 394:     await cdp.send("Input.dispatchKeyEvent", {
 395:       type: "keyDown",
 396:       key: "Escape",
 397:       code: "Escape",
 398:       windowsVirtualKeyCode: 27
 399:     });
 400:     await cdp.send("Input.dispatchKeyEvent", {
 401:       type: "keyUp",
 402:       key: "Escape",
 403:       code: "Escape",
 404:       windowsVirtualKeyCode: 27
 405:     });
 406:     await waitUntil(cdp, `${name}: Escape closes 3D`, "return !document.querySelector('[data-province-3d-overlay]');");
 407: 
 408:     await trigger(cdp, `${name}: open Macau 3D`, "document.querySelector('button[aria-label=\"Macau\"]')");
 409:     await waitUntil(
 410:       cdp,
 411:       `${name}: Macau 3D panel visible`,
 412:       "const overlay = document.querySelector('[data-province-3d-overlay]'); return overlay?.textContent.includes('Tianditu 3D') && overlay.textContent.includes('Macau');"
 413:     );
 414:     await trigger(cdp, `${name}: close Macau 3D`, "document.querySelector('[aria-label=\"Close 3D map\"]')");
 415:     await waitUntil(cdp, `${name}: Macau panel closed`, "return !document.querySelector('[data-province-3d-overlay]');");
 416:   } finally {
 417:     await browser.close();
 418:   }
 419: }
 420: 
 421: await runInteractions("desktop", 1440, 1100, false);
 422: await runInteractions("mobile", 390, 1100, true);
 423: 
 424: console.log(results.join("\n"));

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Raw -Encoding UTF8 v2/tsconfig.app.json' in c:\Users\h\Documents\New project 2
 succeeded in 552ms:
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
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Recurse v2/build,v2/dist -File -ErrorAction SilentlyContinue | Sort-Object Length -Descending | Select-Object -First 20 FullName,Length | Format-Table -AutoSize' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Recurse v2/node_modules -Directory -Filter cesium -ErrorAction SilentlyContinue | Select-Object -First 5 FullName' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Recurse v2/node_modules -Directory -Filter vite-plugin-static-copy -ErrorAction SilentlyContinue | Select-Object -First 5 FullName' in c:\Users\h\Documents\New project 2
 succeeded in 800ms:

FullName                                                                                             Length
--------                                                                                             ------
C:\Users\h\Documents\New project 2\v2\dist\assets\china-map-gs2022-4309.jpg                        10577330
C:\Users\h\Documents\New project 2\v2\build\client\assets\china-map-gs2022-4309.jpg                10577330
C:\Users\h\Documents\New project 2\v2\dist\assets\three.module.min.js                                674422
C:\Users\h\Documents\New project 2\v2\build\client\assets\three.module.min.js                        674422
C:\Users\h\Documents\New project 2\v2\dist\assets\three.module-VajwTLr-.js                           544217
C:\Users\h\Documents\New project 2\v2\build\client\assets\earth-bluemarble.jpg                       512606
C:\Users\h\Documents\New project 2\v2\dist\assets\earth-bluemarble.jpg                               512606
C:\Users\h\Documents\New project 2\v2\dist\assets\index-D14QoVpp.js                                  442639
C:\Users\h\Documents\New project 2\v2\dist\assets\province-map-textures\tibet.png                    167233
C:\Users\h\Documents\New project 2\v2\build\client\assets\province-map-textures\tibet.png            167233
C:\Users\h\Documents\New project 2\v2\dist\assets\province-map-textures\xinjiang.png                 164332
C:\Users\h\Documents\New project 2\v2\build\client\assets\province-map-textures\xinjiang.png         164332
C:\Users\h\Documents\New project 2\v2\build\client\assets\province-map-textures\inner-mongolia.png   156284
C:\Users\h\Documents\New project 2\v2\dist\assets\province-map-textures\inner-mongolia.png           156284
C:\Users\h\Documents\New project 2\v2\build\client\assets\province-map-textures\yunnan.png           139788
C:\Users\h\Documents\New project 2\v2\dist\assets\province-map-textures\yunnan.png                   139788
C:\Users\h\Documents\New project 2\v2\dist\assets\province-map-textures\sichuan.png                  136650
C:\Users\h\Documents\New project 2\v2\build\client\assets\province-map-textures\sichuan.png          136650
C:\Users\h\Documents\New project 2\v2\dist\assets\province-map-textures\gansu.png                    131792
C:\Users\h\Documents\New project 2\v2\build\client\assets\province-map-textures\gansu.png            131792



 succeeded in 1345ms:
 succeeded in 1349ms:
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "fullChinaMapSrc|china-map-gs2022|earth-bluemarble|three.module.min|provinceTextureSrc|officialMapCredit|officialProvinceMapEndpoint" v2/src v2/public v2/scripts' in c:\Users\h\Documents\New project 2
 succeeded in 526ms:
v2/src\data\map-sources.ts:52:export const fullChinaMapSrc = "/assets/china-map-gs2022-4309.jpg";
v2/src\data\map-sources.ts:54:export const provinceTextureSrc = (provinceId: string) =>
v2/src\data\map-sources.ts:57:export const officialMapCredit = "GS(2022)4309";
v2/src\data\map-sources.ts:59:export const officialProvinceMapEndpoint =
v2/src\components\map\EarthIntro.tsx:11:// Verified against the actual asset (v2/public/assets/earth-bluemarble.jpg, 2:1 equirectangular,
v2/src\components\map\EarthIntro.tsx:55:    const earthTex = loader.load("/assets/earth-bluemarble.jpg");

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "fullChinaMapSrc|provinceTextureSrc|officialMapCredit|officialProvinceMapEndpoint|earth-bluemarble|three.module.min|china-map-gs2022" .' in c:\Users\h\Documents\New project 2
 succeeded in 578ms:
.\app.js:5:  fullChinaMapSrc,
.\app.js:7:  officialProvinceMapEndpoint,
.\app.js:391:  return `${officialProvinceMapEndpoint}?${params.toString()}`;
.\app.js:602:    officialMapImage.setAttribute("src", provinceMapUrl || fullChinaMapSrc);
.\index.html:62:                src="./assets/china-map-gs2022-4309.jpg"
.\map3d.js:1:import * as THREE from "./assets/three.module.min.js";
.\styles.css:1396:  background-image: url("./assets/china-map-gs2022-4309.jpg");
.\src\map-sources.js:38:export const fullChinaMapSrc = "./assets/china-map-gs2022-4309.jpg";
.\src\map-sources.js:40:export const officialProvinceMapEndpoint =
.\v2\src\data\map-sources.ts:52:export const fullChinaMapSrc = "/assets/china-map-gs2022-4309.jpg";
.\v2\src\data\map-sources.ts:54:export const provinceTextureSrc = (provinceId: string) =>
.\v2\src\data\map-sources.ts:57:export const officialMapCredit = "GS(2022)4309";
.\v2\src\data\map-sources.ts:59:export const officialProvinceMapEndpoint =
.\v2\src\components\map\EarthIntro.tsx:11:// Verified against the actual asset (v2/public/assets/earth-bluemarble.jpg, 2:1 equirectangular,
.\v2\src\components\map\EarthIntro.tsx:55:    const earthTex = loader.load("/assets/earth-bluemarble.jpg");

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Raw -Encoding UTF8 v2/react-router.config.ts' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/index.html | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Recurse v2/app -ErrorAction SilentlyContinue' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "main.tsx|root.tsx|App.tsx" v2' in c:\Users\h\Documents\New project 2
 succeeded in 969ms:
   1: <!doctype html>
   2: <html lang="en">
   3:   <head>
   4:     <meta charset="UTF-8" />
   5:     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   6:     <title>China Atlas Museum</title>
   7:     <link
   8:       rel="icon"
   9:       href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='10' fill='%2318201d'/%3E%3Ctext x='32' y='42' text-anchor='middle' font-size='34' fill='white'%3E中%3C/text%3E%3C/svg%3E"
  10:     />
  11:   </head>
  12:   <body>
  13:     <div id="root"></div>
  14:     <script type="module" src="/src/main.tsx"></script>
  15:   </body>
  16: </html>

 succeeded in 1051ms:
import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  appDirectory: "src",
  async prerender() {
    return [
      "/",
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


 succeeded in 1131ms:
v2\index.html:14:    <script type="module" src="/src/main.tsx"></script>

 succeeded in 2299ms:
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/react-router.config.ts | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 603ms:
   1: import type { Config } from "@react-router/dev/config";
   2: 
   3: export default {
   4:   ssr: false,
   5:   appDirectory: "src",
   6:   async prerender() {
   7:     return [
   8:       "/",
   9:       "/share",
  10:       "/ask",
  11:       "/sources",
  12:       "/city/beijing",
  13:       "/city/shanghai",
  14:       "/city/guangzhou",
  15:       "/city/shenzhen"
  16:     ];
  17:   }
  18: } satisfies Config;

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Directory node_modules -Filter cesium -ErrorAction SilentlyContinue | Select-Object FullName; Get-ChildItem -Directory node_modules -Filter vite-plugin-static-copy -ErrorAction SilentlyContinue | Select-Object FullName' in c:\Users\h\Documents\New project 2
 succeeded in 617ms:
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"components/sections/SourcesNote|\\.\\./components/sections/SourcesNote|sections/SourcesNote|common/SourcesNote|\\.\\./common/SourcesNote|\\.\\./\\.\\./components/sections/SourcesNote|\\.\\./\\.\\./common/SourcesNote\" v2/src" in c:\Users\h\Documents\New project 2
 succeeded in 488ms:
v2/src\pages\GuidePage.tsx:6:import SourcesNote from "../components/common/SourcesNote";
v2/src\pages\CityPage.tsx:10:import SourcesNote from "../components/common/SourcesNote";

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/sections/SourcesNote.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/sections/MuseumFlow.tsx | Select-Object -First 20 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/sections/HistoryVideo.tsx | Select-Object -First 15 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/common/PageSources.tsx | Select-Object -First 20 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 1033ms:
   1: import { useLang } from "../../store/language";
   2: 
   3: const RULES = ["ruleOne", "ruleTwo", "ruleThree", "ruleFour"];
   4: 
   5: export default function SourcesNote() {
   6:   const { t } = useLang();
   7:   return (
   8:     <section id="sources" className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
   9:       <header>
  10:         <h2 className="text-2xl font-bold">{t("sourcesTitle")}</h2>
  11:         <p className="text-sm text-muted">{t("sourcesBody")}</p>
  12:       </header>
  13:       <ul className="grid list-inside list-disc gap-1 text-sm">
  14:         {RULES.map((key) => (
  15:           <li key={key}>{t(key)}</li>
  16:         ))}
  17:       </ul>
  18:     </section>
  19:   );
  20: }

 succeeded in 1134ms:
   1: import { useLang } from "../../store/language";
   2: 
   3: const STEPS = [
   4:   { titleKey: "flowOneTitle", bodyKey: "flowOneBody" },
   5:   { titleKey: "flowTwoTitle", bodyKey: "flowTwoBody" },
   6:   { titleKey: "flowThreeTitle", bodyKey: "flowThreeBody" },
   7:   { titleKey: "flowFourTitle", bodyKey: "flowFourBody" }
   8: ];
   9: 
  10: export default function MuseumFlow() {
  11:   const { t } = useLang();
  12:   return (
  13:     <section id="museums" className="flex flex-col gap-4">
  14:       <header>
  15:         <h2 className="text-2xl font-bold">{t("museumTitle")}</h2>
  16:         <p className="text-sm text-muted">{t("museumBody")}</p>
  17:       </header>
  18:       <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
  19:         {STEPS.map((step, i) => (
  20:           <li key={step.titleKey} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">

 succeeded in 1201ms:
   1: import { useLang } from "../../store/language";
   2: 
   3: export default function HistoryVideo() {
   4:   const { t } = useLang();
   5:   return (
   6:     <section id="video" className="grid items-start gap-6 md:grid-cols-[1fr_2fr]">
   7:       <div className="space-y-3">
   8:         <h2 className="text-2xl font-bold">{t("historyVideoTitle")}</h2>
   9:         <p className="text-sm leading-relaxed text-muted">{t("historyVideoBody")}</p>
  10:       </div>
  11:       <figure className="overflow-hidden rounded-xl border border-line bg-black">
  12:         <div className="aspect-video">
  13:           <iframe
  14:             className="h-full w-full"
  15:             src="https://www.youtube.com/embed/0DzZgBd4W1Q"

 succeeded in 1201ms:
   1: import { getSource, type SourceCitation } from "../../data/sources";
   2: import { useLang } from "../../store/language";
   3: 
   4: type Props = { ids: string[] };
   5: 
   6: export default function PageSources({ ids }: Props) {
   7:   const { lang } = useLang();
   8:   const isZh = lang === "zh";
   9: 
  10:   const sources = Array.from(new Set(ids))
  11:     .map((id) => getSource(id))
  12:     .filter((s): s is SourceCitation => Boolean(s));
  13: 
  14:   if (sources.length === 0) return null;
  15: 
  16:   return (
  17:     <footer className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
  18:       <header>
  19:         <span className="text-xs font-bold uppercase tracking-widest text-muted">
  20:           {isZh ? "信息来源" : "Sources"}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/city/CityHero.tsx | Select-Object -First 20 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/search/PlaceSearch.tsx | Select-Object -First 20 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/map/EarthIntro.tsx | Select-Object -First 35 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/atlas/ProvinceRail.tsx | Select-Object -First 45 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 865ms:
   1: import clsx from "clsx";
   2: import { attractionsByCity, type Attraction } from "../../data/city-attractions";
   3: import type { CityId } from "../../data/transport";
   4: import { useLang } from "../../store/language";
   5: 
   6: type Props = { cityId: CityId };
   7: 
   8: export default function CityHero({ cityId }: Props) {
   9:   const { lang } = useLang();
  10:   const isZh = lang === "zh";
  11:   const attractions = attractionsByCity(cityId);
  12:   if (attractions.length === 0) return null;
  13: 
  14:   return (
  15:     <section className="flex flex-col gap-3">
  16:       <header>
  17:         <span className="text-xs font-bold uppercase tracking-widest text-muted">
  18:           {isZh ? "本市标志景点" : "Signature attractions"}
  19:         </span>
  20:         <h2 className="text-2xl font-bold">

 succeeded in 859ms:
   1: import { useEffect, useRef } from "react";
   2: import * as THREE from "three";
   3: 
   4: type Props = { onDone: () => void };
   5: 
   6: const SPIN_MS = 4000;
   7: const HOLD_MS = 1500;
   8: const ZOOM_MS = 1500;
   9: const TOTAL_MS = SPIN_MS + HOLD_MS + ZOOM_MS;
  10: 
  11: // Verified against the actual asset (v2/public/assets/earth-bluemarble.jpg, 2:1 equirectangular,
  12: // prime meridian at horizontal centre, Africa centred). Three.js SphereGeometry default UV:
  13: // vertex.x = -r·cos(u·2π)·sin(v·π); vertex.y = r·cos(v·π); vertex.z = r·sin(u·2π)·sin(v·π).
  14: // At rotation = 0, +Z (camera-facing) point sits at u = 0.25, v = 0.5 → lon -90°, lat 0° (Americas).
  15: // To bring China centre (lon 105°E, lat 35°N → u = 0.79167, v = 0.30556) to the camera:
  16: //   1. Y-rotation: α_y = π/2 - u·2π = π/2 - 4.974 = -3.403 rad → puts China centre at world (0, +0.574, +0.819)
  17: //   2. X-rotation: α_x = arctan(0.574 / 0.819) = 0.611 rad ≈ 35° → tilts that point onto +Z exactly
  18: const CHINA_LON_DEG = 105;
  19: const CHINA_LAT_DEG = 35;
  20: const CHINA_U = (CHINA_LON_DEG + 180) / 360;
  21: const CHINA_V = (90 - CHINA_LAT_DEG) / 180;
  22: const CHINA_THETA_PHI = CHINA_U * 2 * Math.PI;
  23: const CHINA_THETA_LAT = CHINA_V * Math.PI;
  24: const TARGET_Y = Math.PI / 2 - CHINA_THETA_PHI; // -3.403 rad
  25: const TARGET_X = Math.atan2(Math.cos(CHINA_THETA_LAT), Math.sin(CHINA_THETA_LAT)); // 0.611 rad
  26: 
  27: export default function EarthIntro({ onDone }: Props) {
  28:   const hostRef = useRef<HTMLDivElement | null>(null);
  29:   const doneRef = useRef(onDone);
  30: 
  31:   useEffect(() => {
  32:     doneRef.current = onDone;
  33:   }, [onDone]);
  34: 
  35:   useEffect(() => {

 succeeded in 894ms:
   1: import { useId, useMemo, useState } from "react";
   2: import { useLang } from "../../store/language";
   3: import { useAtlas } from "../../store/atlas";
   4: import { findBestMatch, getAllRecords } from "../../lib/search";
   5: import { placeTypeLabels } from "../../data/i18n";
   6: 
   7: export default function PlaceSearch() {
   8:   const { t, lang } = useLang();
   9:   const { selectPlace } = useAtlas();
  10:   const [value, setValue] = useState("");
  11:   const [hint, setHint] = useState<string | null>(null);
  12:   const datalistId = useId();
  13: 
  14:   const suggestions = useMemo(() => getAllRecords().slice(0, 120), []);
  15: 
  16:   const submit = (event: React.FormEvent) => {
  17:     event.preventDefault();
  18:     const record = findBestMatch(value);
  19:     if (!record) {
  20:       setHint(t("searchNoMatch"));

 succeeded in 881ms:
   1: import clsx from "clsx";
   2: import { atlasData } from "../../data/atlas";
   3: import { typeLabels } from "../../data/i18n";
   4: import { useAtlas } from "../../store/atlas";
   5: import { useLang } from "../../store/language";
   6: 
   7: export default function ProvinceRail() {
   8:   const { lang, t } = useLang();
   9:   const { selectedProvinceId, selectProvince } = useAtlas();
  10: 
  11:   return (
  12:     <aside aria-label={t("provinceLevelRegions")} className="flex flex-col gap-2">
  13:       <header className="flex items-baseline justify-between px-1">
  14:         <strong className="text-xs font-bold uppercase tracking-widest text-muted">{t("provinceLevelRegions")}</strong>
  15:         <span className="text-xs text-muted">{atlasData.length}</span>
  16:       </header>
  17:       <div className="flex max-h-[420px] flex-col gap-1 overflow-y-auto pr-1">
  18:         {atlasData.map((p) => {
  19:           const active = p.id === selectedProvinceId;
  20:           return (
  21:             <button
  22:               key={p.id}
  23:               type="button"
  24:               onClick={() => selectProvince(p.id)}
  25:               className={clsx(
  26:                 "flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-left transition",
  27:                 active ? "border-jade/40 bg-jade-soft" : "hover:bg-paper"
  28:               )}
  29:             >
  30:               <span className="leading-tight">
  31:                 <strong className="block text-sm font-bold">{lang === "zh" ? p.zh : p.name}</strong>
  32:                 <small className="block text-xs text-muted">
  33:                   {lang === "zh" ? `${p.name} · ${typeLabels.zh[p.type]}` : `${p.zh} · ${typeLabels.en[p.type]}`}
  34:                 </small>
  35:               </span>
  36:               <span className="text-xs text-muted">{p.cities.length}</span>
  37:             </button>
  38:           );
  39:         })}
  40:       </div>
  41:     </aside>
  42:   );
  43: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/pages/SharePage.tsx | Select-Object -First 180 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/pages/AskPage.tsx | Select-Object -First 180 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/pages/SourcesPage.tsx | Select-Object -First 125 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 829ms:
   1: import { Link } from "react-router";
   2: import { sources } from "../data/sources";
   3: import { useLang } from "../store/language";
   4: 
   5: export default function SourcesPage() {
   6:   const { lang } = useLang();
   7:   const isZh = lang === "zh";
   8: 
   9:   const all = Object.values(sources);
  10:   const official = all.filter((s) => !s.community);
  11:   const community = all.filter((s) => s.community);
  12: 
  13:   return (
  14:     <main className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-12">
  15:       <header className="flex flex-col gap-3">
  16:         <span className="self-start text-xs font-bold uppercase tracking-widest text-muted">
  17:           {isZh ? "信息来源汇总" : "Reference list"}
  18:         </span>
  19:         <h1 className="text-3xl font-bold leading-tight">
  20:           {isZh ? "全部引用源" : "All references"}
  21:         </h1>
  22:         <p className="text-sm leading-relaxed text-muted">
  23:           {isZh
  24:             ? `本网站全部数据均来自下列 ${all.length} 个公开来源。其中 ${official.length} 条来自政府或机构官方网站，${community.length} 条来自旅行社区博客 / 论坛 / 在华外籍人士作者，用于补充官方源未覆盖的实际操作注意事项。每条都标注域名 + 出版日期 + 我们最近一次核验日期，可点击查看原文。`
  25:             : `Every fact on this site traces to one of the ${all.length} sources below. ${official.length} come from official government and institutional websites; ${community.length} come from traveler community blogs and forums covering practical pitfalls that official sources do not publish. Each entry shows the domain, the publication date, and our last verification date — click to read the original.`}
  26:         </p>
  27:       </header>
  28: 
  29:       <Section
  30:         titleEn={`Official sources (${official.length})`}
  31:         titleZh={`官方源（${official.length} 条）`}
  32:         descEn="Chinese government bodies, central ministries, city governments, hospitals, banks, payment networks, foreign embassies in China."
  33:         descZh="中国政府部委、城市政府、医院、银行、支付组织、外国驻华使领馆。"
  34:       >
  35:         <ReferenceList items={official} isZh={isZh} />
  36:       </Section>
  37: 
  38:       <Section
  39:         titleEn={`Traveler community references (${community.length})`}
  40:         titleZh={`旅行社区资料（${community.length} 条）`}
  41:         descEn="Foreign travel bloggers, expat publications, Reddit threads and similar. Used only for operational pitfalls that .gov.cn does not publish; never used as authority for policy facts, prices, addresses, or hours."
  42:         descZh="境外旅行博主、在华外籍人士媒体、Reddit 等。仅用于政府未公开的实际操作注意事项；政策、价格、地址、营业时间不引用社区源。"
  43:       >
  44:         <ReferenceList items={community} isZh={isZh} />
  45:       </Section>
  46: 
  47:       <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
  48:         {isZh ? "← 返回首页" : "← Back home"}
  49:       </Link>
  50:     </main>
  51:   );
  52: }
  53: 
  54: function Section({
  55:   titleEn,
  56:   titleZh,
  57:   descEn,
  58:   descZh,
  59:   children
  60: }: {
  61:   titleEn: string;
  62:   titleZh: string;
  63:   descEn: string;
  64:   descZh: string;
  65:   children: React.ReactNode;
  66: }) {
  67:   const { lang } = useLang();
  68:   const isZh = lang === "zh";
  69:   return (
  70:     <section className="flex flex-col gap-3">
  71:       <header>
  72:         <h2 className="text-xl font-bold">{isZh ? titleZh : titleEn}</h2>
  73:         <p className="text-xs text-muted">{isZh ? descZh : descEn}</p>
  74:       </header>
  75:       {children}
  76:     </section>
  77:   );
  78: }
  79: 
  80: type Item = {
  81:   id: string;
  82:   url: string;
  83:   publisher: string;
  84:   pageTitleEn: string;
  85:   publishedDate?: string;
  86:   verifiedDate: string;
  87:   domain: string;
  88: };
  89: 
  90: function ReferenceList({ items, isZh }: { items: Item[]; isZh: boolean }) {
  91:   const sorted = [...items].sort((a, b) => a.publisher.localeCompare(b.publisher));
  92:   return (
  93:     <ol className="grid gap-1.5 text-sm leading-relaxed">
  94:       {sorted.map((s, i) => (
  95:         <li key={s.id} className="flex gap-2">
  96:           <span className="shrink-0 tabular-nums text-muted">[{i + 1}]</span>
  97:           <a
  98:             href={s.url}
  99:             target="_blank"
 100:             rel="noreferrer"
 101:             className="flex-1 text-ink hover:text-jade hover:underline"
 102:           >
 103:             <span className="font-bold">{s.publisher}</span>
 104:             <span className="text-muted"> · {s.pageTitleEn}</span>
 105:             {s.publishedDate && <span className="text-muted"> · {s.publishedDate}</span>}
 106:             <span className="ml-1 text-xs text-muted/70">— {s.domain}</span>
 107:             <span className="ml-2 text-[10px] uppercase tracking-wider text-muted/70">
 108:               {isZh ? `核验 ${s.verifiedDate}` : `verified ${s.verifiedDate}`}
 109:             </span>
 110:           </a>
 111:         </li>
 112:       ))}
 113:     </ol>
 114:   );
 115: }

 succeeded in 831ms:
   1: import { Link } from "react-router";
   2: import clsx from "clsx";
   3: import { badgeLadder, sampleQuestions, type BadgeTier } from "../data/phase2-preview";
   4: import { useLang } from "../store/language";
   5: 
   6: export default function AskPage() {
   7:   const { lang } = useLang();
   8:   const isZh = lang === "zh";
   9: 
  10:   return (
  11:     <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12">
  12:       <header className="flex flex-col gap-3">
  13:         <span className="self-start rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
  14:           {isZh ? "Phase 2 · 即将上线" : "Phase 2 · coming soon"}
  15:         </span>
  16:         <h1 className="text-4xl font-bold leading-tight">
  17:           {isZh ? "向中国本地用户提问" : "Ask Chinese locals"}
  18:         </h1>
  19:         <p className="text-base leading-relaxed text-ink/80">
  20:           {isZh
  21:             ? "对北上广深的具体细节提问，由经过验证的本地长居用户回答。提问免费，浏览不需要登录。"
  22:             : "Ask a specific question about Beijing, Shanghai, Guangzhou, or Shenzhen. Verified long-term residents answer. Browsing is free; login only when posting."}
  23:         </p>
  24:       </header>
  25: 
  26:       <section className="flex flex-col gap-4">
  27:         <header>
  28:           <span className="text-xs font-bold uppercase tracking-widest text-muted">
  29:             {isZh ? "答主等级（通过贡献获得）" : "Answerer tier ladder (earn-not-claim)"}
  30:           </span>
  31:           <h2 className="text-2xl font-bold">
  32:             {isZh ? "本地徽章不能购买，只能通过贡献获得" : "Local badge cannot be bought — only earned"}
  33:           </h2>
  34:           <p className="text-sm text-muted">
  35:             {isZh
  36:               ? "答主等级靠贡献自动累积，不能购买。我们不会收集中国身份证或 WeChat / Alipay 实名信息。"
  37:               : "Tiers accumulate from contribution, never purchased. We do not collect Chinese national ID, passport scans, or WeChat / Alipay real-name tokens."}
  38:           </p>
  39:         </header>
  40:         <ol className="grid gap-3 md:grid-cols-2">
  41:           {badgeLadder.map((tier) => (
  42:             <BadgeCard key={tier.id} tier={tier} isZh={isZh} />
  43:           ))}
  44:         </ol>
  45:       </section>
  46: 
  47:       <section className="flex flex-col gap-4">
  48:         <header>
  49:           <span className="text-xs font-bold uppercase tracking-widest text-muted">
  50:             {isZh ? "样例问答（占位预览）" : "Sample Q&A (mock preview)"}
  51:           </span>
  52:           <h2 className="text-2xl font-bold">
  53:             {isZh ? "答案旁显示答主常驻城市与等级徽章" : "Answers show the answerer's city and tier badge"}
  54:           </h2>
  55:         </header>
  56:         <ul className="flex flex-col gap-3">
  57:           {sampleQuestions.map((qa) => {
  58:             const tier = badgeLadder[qa.answer.answererTier];
  59:             return (
  60:               <li key={qa.id} className="flex flex-col gap-3 rounded-xl border border-line bg-white p-5">
  61:                 <div className="flex flex-wrap items-center gap-2">
  62:                   <span className="rounded-full bg-paper px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">
  63:                     {qa.topic}
  64:                   </span>
  65:                   {qa.cityScope && (
  66:                     <span className="rounded-full bg-paper px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">
  67:                       {qa.cityScope.toUpperCase()}
  68:                     </span>
  69:                   )}
  70:                 </div>
  71:                 <strong className="text-base leading-tight">
  72:                   {isZh ? qa.questionZh : qa.questionEn}
  73:                 </strong>
  74:                 <div className="flex flex-col gap-2 rounded-lg border border-line bg-paper p-4">
  75:                   <div className="flex flex-wrap items-center gap-2 text-xs">
  76:                     <span className={clsx("rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", tier.colorClass)}>
  77:                       {isZh ? `T${tier.id} ${tier.nameZh}` : `Tier ${tier.id} · ${tier.nameEn}`}
  78:                     </span>
  79:                     <span className="text-muted">{qa.answer.answererCity}</span>
  80:                     <span className="text-muted">·</span>
  81:                     <span className="text-muted">
  82:                       {isZh ? `${qa.answer.votes} 净赞` : `${qa.answer.votes} net votes`}
  83:                     </span>
  84:                     <span className="text-muted">·</span>
  85:                     <span className="text-muted">
  86:                       {isZh ? `${qa.answer.postedDays} 天前` : `${qa.answer.postedDays} days ago`}
  87:                     </span>
  88:                   </div>
  89:                   <p className="text-sm leading-relaxed">
  90:                     {isZh ? qa.answer.bodyZh : qa.answer.bodyEn}
  91:                   </p>
  92:                   <span className="self-start text-[10px] uppercase tracking-wider text-muted">
  93:                     {isZh
  94:                       ? `已对照官方政策核验：${qa.answer.lastVerifiedAgainstPolicy}`
  95:                       : `Last verified against policy: ${qa.answer.lastVerifiedAgainstPolicy}`}
  96:                   </span>
  97:                 </div>
  98:               </li>
  99:             );
 100:           })}
 101:         </ul>
 102:       </section>
 103: 
 104:       <section className="flex flex-col gap-3 rounded-xl border border-line bg-paper p-6">
 105:         <h2 className="text-lg font-bold">
 106:           {isZh ? "怎么验证答主真的住在那个城市？" : "How is the answerer actually verified?"}
 107:         </h2>
 108:         <ul className="grid gap-2 md:grid-cols-2 text-sm leading-relaxed">
 109:           <li className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
 110:             <strong>{isZh ? "+86 手机号 OTP" : "+86 phone OTP"}</strong>
 111:             <span className="text-xs text-muted">
 112:               {isZh
 113:                 ? "中国 SIM 卡注册时实名上传到工信部。+86 OTP 只是软信号——但已能筛掉绝大多数非本地用户。"
 114:                 : "China SIMs are real-name registered with the Ministry of IT at activation. A +86 OTP is a soft but meaningful signal that filters out the vast majority of non-China users."}
 115:             </span>
 116:           </li>
 117:           <li className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
 118:             <strong>{isZh ? "答题分数累积" : "Cumulative answer score"}</strong>
 119:             <span className="text-xs text-muted">
 120:               {isZh
 121:                 ? "参照 Stack Overflow 的机制：被点赞的回答多了自动升级。可观察、可衡量，不依赖人工评判。"
 122:                 : "Stack Overflow approach: enough net-positive answers and you auto-promote. Observable, measurable, no editorial gating."}
 123:             </span>
 124:           </li>
 125:           <li className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
 126:             <strong>{isZh ? "T3 用户担保机制" : "T3 user vouching"}</strong>
 127:             <span className="text-xs text-muted">
 128:               {isZh
 129:                 ? "PGP web-of-trust 模式：两个已认证 T3 用户为新人担保。每个 T3 担保上限有限，避免小范围相互担保。"
 130:                 : "PGP web-of-trust pattern: two existing T3 users vouch for a new candidate. Each voucher has a cap to prevent cliques."}
 131:             </span>
 132:           </li>
 133:           <li className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
 134:             <strong>
 135:               {isZh ? "我们不会做的事" : "What we will NOT do"}
 136:             </strong>
 137:             <span className="text-xs text-muted">
 138:               {isZh
 139:                 ? "不收中国身份证号、不收护照扫描、不绑定微信/支付宝实名 token。这是 PIPL 合规红线，外国平台跨境收集这类数据需安全评估，风险高于收益。"
 140:                 : "We will NOT collect Chinese national ID numbers, passport scans, or WeChat/Alipay real-name tokens. PIPL forbids cross-border collection without a security assessment — the risk far outweighs the benefit."}
 141:             </span>
 142:           </li>
 143:         </ul>
 144:       </section>
 145: 
 146:       <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
 147:         {isZh ? "← 返回首页" : "← Back home"}
 148:       </Link>
 149:     </main>
 150:   );
 151: }
 152: 
 153: function BadgeCard({ tier, isZh }: { tier: BadgeTier; isZh: boolean }) {
 154:   return (
 155:     <li className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
 156:       <div className="flex items-center justify-between">
 157:         <span className={clsx("rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", tier.colorClass)}>
 158:           {isZh ? `T${tier.id} · ${tier.nameZh}` : `Tier ${tier.id} · ${tier.nameEn}`}
 159:         </span>
 160:       </div>
 161:       <strong className="text-sm leading-tight">
 162:         {isZh ? "门槛：" : "Criteria: "}
 163:         <span className="font-normal text-ink/80">{isZh ? tier.criteriaZh : tier.criteriaEn}</span>
 164:       </strong>
 165:       <p className="text-xs text-muted">
 166:         {isZh ? "权限：" : "Rights: "}
 167:         {isZh ? tier.rightsZh : tier.rightsEn}
 168:       </p>
 169:     </li>
 170:   );
 171: }

 succeeded in 832ms:
   1: import { Link } from "react-router";
   2: import { moderationFlow, sampleShares } from "../data/phase2-preview";
   3: import { useLang } from "../store/language";
   4: 
   5: export default function SharePage() {
   6:   const { lang } = useLang();
   7:   const isZh = lang === "zh";
   8: 
   9:   return (
  10:     <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12">
  11:       <header className="flex flex-col gap-3">
  12:         <span className="self-start rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
  13:           {isZh ? "Phase 2 · 即将上线" : "Phase 2 · coming soon"}
  14:         </span>
  15:         <h1 className="text-4xl font-bold leading-tight">
  16:           {isZh ? "分享你的旅行" : "Share your trip"}
  17:         </h1>
  18:         <p className="text-base leading-relaxed text-ink/80">
  19:           {isZh
  20:             ? "外国游客在北上广深的真实经历——文字 + 照片 + 国家代码。投稿必须勾选发布与翻译授权，所有内容经过 AI 审核与关键词过滤。"
  21:             : "Foreign tourists' real experiences in Beijing, Shanghai, Guangzhou, Shenzhen — text + photos + country code. Submission requires explicit publication-and-translation consent and passes AI moderation + keyword filter."}
  22:         </p>
  23:       </header>
  24: 
  25:       <section className="flex flex-col gap-4">
  26:         <header>
  27:           <span className="text-xs font-bold uppercase tracking-widest text-muted">
  28:             {isZh ? "审核管线（投稿到发布）" : "Moderation pipeline (submit → publish)"}
  29:           </span>
  30:           <h2 className="text-2xl font-bold">
  31:             {isZh ? "每条投稿 5 步流程" : "Every submission goes through 5 steps"}
  32:           </h2>
  33:         </header>
  34:         <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
  35:           {moderationFlow.map((step) => (
  36:             <li key={step.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
  37:               <strong className="text-sm leading-tight">
  38:                 {isZh ? step.titleZh : step.titleEn}
  39:               </strong>
  40:               <p className="text-xs leading-relaxed text-ink/80">
  41:                 {isZh ? step.bodyZh : step.bodyEn}
  42:               </p>
  43:             </li>
  44:           ))}
  45:         </ol>
  46:       </section>
  47: 
  48:       <section className="flex flex-col gap-4">
  49:         <header>
  50:           <span className="text-xs font-bold uppercase tracking-widest text-muted">
  51:             {isZh ? "投稿表单（设计预览）" : "Submission form (design preview)"}
  52:           </span>
  53:           <h2 className="text-2xl font-bold">
  54:             {isZh ? "授权复选框为必选项" : "The consent checkbox is non-skippable"}
  55:           </h2>
  56:         </header>
  57:         <div className="flex flex-col gap-3 rounded-xl border border-dashed border-line bg-paper p-6 opacity-90">
  58:           <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted">
  59:             {isZh ? "你想分享哪个城市？" : "Which city are you writing about?"}
  60:             <select disabled className="rounded-lg border border-line bg-white px-3 py-2 text-sm">
  61:               <option>{isZh ? "北京 · Beijing" : "Beijing"}</option>
  62:             </select>
  63:           </label>
  64:           <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted">
  65:             {isZh ? "你的国家（公开显示为 2 字母代码）" : "Your country (public, shown as 2-letter code)"}
  66:             <input
  67:               disabled
  68:               type="text"
  69:               placeholder="DE / US / JP / FR …"
  70:               className="rounded-lg border border-line bg-white px-3 py-2 text-sm placeholder-muted"
  71:             />
  72:           </label>
  73:           <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted">
  74:             {isZh ? "正文（最多 1500 字）" : "Body (≤ 1500 chars)"}
  75:             <textarea
  76:               disabled
  77:               rows={5}
  78:               placeholder={
  79:                 isZh
  80:                   ? "写下你的真实经历——哪些信息有用、遇到哪些问题、出发前希望知道的事…"
  81:                   : "What worked, what didn't, what you wish you'd known before flying…"
  82:               }
  83:               className="rounded-lg border border-line bg-white px-3 py-2 text-sm placeholder-muted"
  84:             />
  85:           </label>
  86:           <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted">
  87:             {isZh ? "照片（最多 5 张，每张 ≤ 2 MB）" : "Photos (up to 5, ≤ 2 MB each)"}
  88:             <div className="flex h-24 items-center justify-center rounded-lg border-2 border-dashed border-line bg-white text-xs text-muted">
  89:               {isZh ? "拖拽或点击上传" : "Drop files or click to upload"}
  90:             </div>
  91:           </label>
  92:           <label className="mt-2 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 p-3">
  93:             <input type="checkbox" disabled className="mt-0.5 h-4 w-4" />
  94:             <span className="text-xs leading-relaxed">
  95:               {isZh
  96:                 ? "我拥有或有权发布此内容。我同意本站发布它，并为外国读者翻译。我保留对作品的版权。"
  97:                 : "I own or have permission to post this. I agree that this site may publish it and translate it for readers. I keep my rights."}
  98:             </span>
  99:           </label>
 100:           <label className="flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 p-3">
 101:             <input type="checkbox" disabled className="mt-0.5 h-4 w-4" />
 102:             <span className="text-xs leading-relaxed">
 103:               {isZh
 104:                 ? "我理解这条内容（含翻译版本）会在中国境外展示。提供商：本站托管在境外服务器，AI 审核会调用境外 API。我可以随时编辑或删除，但已分发的翻译副本可能仍然存在。"
 105:                 : "I understand this content (including translations) may be displayed outside China. The site is hosted on overseas servers and AI moderation calls overseas APIs. I can edit or delete it later, subject to cached or already-distributed copies."}
 106:             </span>
 107:           </label>
 108:           <button
 109:             disabled
 110:             className="self-start rounded-full bg-ink px-5 py-2 text-xs font-bold uppercase tracking-widest text-white opacity-60"
 111:           >
 112:             {isZh ? "提交（Phase 2 上线后启用）" : "Submit (enabled when Phase 2 ships)"}
 113:           </button>
 114:         </div>
 115:       </section>
 116: 
 117:       <section className="flex flex-col gap-4">
 118:         <header>
 119:           <span className="text-xs font-bold uppercase tracking-widest text-muted">
 120:             {isZh ? "已发布投稿（占位预览）" : "Published notes (mock preview)"}
 121:           </span>
 122:           <h2 className="text-2xl font-bold">
 123:             {isZh ? "正文 + 照片 + 国家码 + 城市标签" : "Text + photos + country + city tag"}
 124:           </h2>
 125:         </header>
 126:         <ul className="grid gap-3 md:grid-cols-2">
 127:           {sampleShares.map((s) => (
 128:             <li key={s.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-5">
 129:               <div className="flex flex-wrap items-center gap-2 text-xs">
 130:                 <span className="rounded-full bg-paper px-2 py-0.5 font-bold uppercase tracking-wider text-muted">
 131:                   {s.authorCountry}
 132:                 </span>
 133:                 <span className="font-bold">{s.authorAlias}</span>
 134:                 <span className="text-muted">·</span>
 135:                 <span className="text-muted">{isZh ? s.cityZh : s.cityEn}</span>
 136:                 <span className="text-muted">·</span>
 137:                 <span className="text-muted">
 138:                   {isZh ? `${s.daysAgo} 天前` : `${s.daysAgo} days ago`}
 139:                 </span>
 140:               </div>
 141:               <p className="text-sm leading-relaxed text-ink/85">
 142:                 {isZh ? s.textZh : s.textEn}
 143:               </p>
 144:               <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted">
 145:                 <span className="rounded-full bg-paper px-2 py-0.5 font-bold">
 146:                   {s.imageCount} {isZh ? "张图" : s.imageCount === 1 ? "photo" : "photos"}
 147:                 </span>
 148:                 <span className="rounded-full bg-amber-50 px-2 py-0.5 font-bold text-amber-800">
 149:                   {isZh ? "访客笔记 · 非官方核验" : "visitor note · not officially verified"}
 150:                 </span>
 151:               </div>
 152:             </li>
 153:           ))}
 154:         </ul>
 155:       </section>
 156: 
 157:       <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
 158:         {isZh ? "← 返回首页" : "← Back home"}
 159:       </Link>
 160:     </main>
 161:   );
 162: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/common/SourcesNote.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 496ms:
   1: import { Link } from "react-router";
   2: import { useLang } from "../../store/language";
   3: 
   4: export default function SourcesNote() {
   5:   const { lang } = useLang();
   6:   const isZh = lang === "zh";
   7:   return (
   8:     <p className="mt-6 border-t border-line pt-4 text-xs text-muted">
   9:       {isZh ? (
  10:         <>
  11:           本页所有数字、政策、地址均引自中国政府官方公开来源；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
  12:           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
  13:             查看全部信息来源 →
  14:           </Link>
  15:         </>
  16:       ) : (
  17:         <>
  18:           Every figure, policy, and address on this page is cited from official Chinese government sources. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
  19:           <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
  20:             See all references →
  21:           </Link>
  22:         </>
  23:       )}
  24:     </p>
  25:   );
  26: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/routes.ts | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 497ms:
   1: import { type RouteConfig, index, route } from "@react-router/dev/routes";
   2: 
   3: export default [
   4:   index("./pages/HomePage.tsx"),
   5:   route("map", "./pages/MapPage.tsx"),
   6:   route("guide/:topic", "./pages/GuidePage.tsx"),
   7:   route("city/:cityId", "./pages/CityPage.tsx"),
   8:   route("share", "./pages/SharePage.tsx"),
   9:   route("ask", "./pages/AskPage.tsx"),
  10:   route("sources", "./pages/SourcesPage.tsx"),
  11:   route("*", "./pages/HomePage.tsx", { id: "catch-all" })
  12: ] satisfies RouteConfig;

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"<section id=\\\"(payments|transport|food|emergency|intro|entry-visa|visa|portals)\\\"\" v2/src/pages/CityPage.tsx v2/src/components/pillar v2/src/components/city" in c:\Users\h\Documents\New project 2
2026-05-12T02:37:54.397593Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 1.2 seconds
Output:
payments : The term 'payments' is not recognized as the name of a cmdlet, function, script file, or operable program. C
heck the spelling of the name, or if a path was included, verify that the path is correct and try again.
At line:2 char:23
+ rg -n "<section id=\"(payments|transport|food|emergency|intro|entry-v ...
+                       ~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (payments:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
 

 exited 1 in 1233ms:
payments : The term 'payments' is not recognized as the name of a cmdlet, function, script file, or operable program. C
heck the spelling of the name, or if a path was included, verify that the path is correct and try again.
At line:2 char:23
+ rg -n "<section id=\"(payments|transport|food|emergency|intro|entry-v ...
+                       ~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (payments:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
 

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n '<section id=\"(payments|transport|food|emergency|intro|entry-visa|visa|portals)\"' v2/src/pages/CityPage.tsx v2/src/components/pillar v2/src/components/city" in c:\Users\h\Documents\New project 2
2026-05-12T02:38:03.217980Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.7 seconds
Output:

 exited 1 in 735ms:
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n 'section id=' v2/src/pages/CityPage.tsx v2/src/components/pillar v2/src/components/city" in c:\Users\h\Documents\New project 2
 succeeded in 452ms:
v2/src/pages/CityPage.tsx:49:          <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
v2/src/pages/CityPage.tsx:50:          <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
v2/src/pages/CityPage.tsx:51:          <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>
v2/src/pages/CityPage.tsx:52:          <section id="food" className="scroll-mt-24"><FoodGuide cityId={id} /></section>
v2/src/pages/CityPage.tsx:53:          <section id="emergency" className="scroll-mt-24"><EmergencyBriefing cityId={id} /></section>
v2/src/pages/CityPage.tsx:54:          <section id="portals" className="scroll-mt-24"><CityFurtherReading cityId={id} /></section>
v2/src/components/pillar\EmergencyBriefing.tsx:30:    <section id="emergency" className="flex flex-col gap-4">
v2/src/components/pillar\FoodGuide.tsx:21:    <section id="food" className="flex flex-col gap-4">
v2/src/components/city\CityIntro.tsx:82:    <section id="intro" className="flex flex-col gap-6 scroll-mt-24">
v2/src/components/pillar\PaymentsChecklist.tsx:23:    <section id="payments" className="flex flex-col gap-4">
v2/src/components/pillar\TransportGuide.tsx:24:    <section id="transport" className="flex flex-col gap-4">
v2/src/components/pillar\VisaChecker.tsx:32:    <section id="entry-visa" className="flex min-w-0 flex-col gap-3">

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/common/CityFurtherReading.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 548ms:
   1: import { cityTourismPortals } from "../../data/city-tourism-portals";
   2: import type { CityId } from "../../data/transport";
   3: import { useLang } from "../../store/language";
   4: 
   5: type Props = { cityId: CityId };
   6: 
   7: export default function CityFurtherReading({ cityId }: Props) {
   8:   const { lang } = useLang();
   9:   const isZh = lang === "zh";
  10:   const portals = cityTourismPortals[cityId];
  11:   if (!portals || portals.length === 0) return null;
  12: 
  13:   return (
  14:     <section className="flex flex-col gap-3">
  15:       <header>
  16:         <span className="text-xs font-bold uppercase tracking-widest text-muted">
  17:           {isZh ? "官方延伸阅读" : "Official further reading"}
  18:         </span>
  19:         <h2 className="text-xl font-bold">
  20:           {isZh ? "本市官方文旅 / 政府英文门户" : "City tourism bureau & government portals"}
  21:         </h2>
  22:         <p className="text-xs text-muted">
  23:           {isZh
  24:             ? "这些是该市官方运营的英文站。本网站未收录的更细信息（活动、路线、季节性内容）建议查阅这些网站。"
  25:             : "Each city's own official English-language portals. For city-specific details we don't cover (events, seasonal routes, hyperlocal news), go straight to these."}
  26:         </p>
  27:       </header>
  28:       <ul className="grid gap-2 md:grid-cols-2">
  29:         {portals.map((p) => (
  30:           <li key={p.url}>
  31:             <a
  32:               href={p.url}
  33:               target="_blank"
  34:               rel="noreferrer"
  35:               className="flex flex-col gap-1 rounded-lg border border-line bg-white p-4 hover:border-jade hover:bg-jade-soft"
  36:             >
  37:               <strong className="text-sm">{isZh ? p.labelZh : p.labelEn}</strong>
  38:               <span className="text-xs text-muted">{isZh ? p.noteZh : p.noteEn}</span>
  39:               <span className="text-[10px] uppercase tracking-wider text-jade">{new URL(p.url).hostname} →</span>
  40:             </a>
  41:           </li>
  42:         ))}
  43:       </ul>
  44:     </section>
  45:   );
  46: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/pillar/FoodGuide.tsx | Select-Object -First 140 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 899ms:
   1: import { useState } from "react";
   2: import clsx from "clsx";
   3: import { allergyCardEn, allergyCardZh, cityFood } from "../../data/food";
   4: import { CITY_LABELS, type CityId } from "../../data/transport";
   5: import { useLang } from "../../store/language";
   6: import PracticalBlock from "../common/PracticalBlock";
   7: import CuisineDrawer from "../city/CuisineDrawer";
   8: 
   9: type Props = { cityId?: CityId };
  10: 
  11: export default function FoodGuide({ cityId }: Props) {
  12:   const { lang } = useLang();
  13:   const isZh = lang === "zh";
  14:   const cityScoped = Boolean(cityId);
  15:   const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
  16:   const [drawerOpen, setDrawerOpen] = useState(false);
  17:   const effectiveId: CityId = cityId ?? activeId;
  18:   const active = cityFood.find((c) => c.cityId === effectiveId)!;
  19: 
  20:   return (
  21:     <section id="food" className="flex flex-col gap-4">
  22:       {!cityScoped && (
  23:         <header>
  24:           <span className="text-xs font-bold uppercase tracking-widest text-muted">
  25:             {isZh ? "支柱 4" : "Pillar 4"}
  26:           </span>
  27:           <h2 className="text-2xl font-bold">{isZh ? "餐饮" : "Food"}</h2>
  28:           <p className="text-sm text-muted">
  29:             {isZh
  30:               ? "四城地方菜文化、外国人友好餐区、外卖现状、过敏中文卡。"
  31:               : "Local cuisines, foreigner-friendly districts, delivery-app reality, and an allergy card."}
  32:           </p>
  33:         </header>
  34:       )}
  35:       {cityScoped && <h2 className="text-xl font-bold">{isZh ? "餐饮" : "Food"}</h2>}
  36: 
  37:       {!cityScoped && (
  38:         <div role="tablist" className="flex flex-wrap gap-2">
  39:           {cityFood.map((city) => (
  40:             <button
  41:               key={city.cityId}
  42:               type="button"
  43:               role="tab"
  44:               aria-selected={activeId === city.cityId}
  45:               onClick={() => setActiveId(city.cityId)}
  46:               className={clsx(
  47:                 "rounded-full border px-4 py-1.5 text-sm font-bold transition",
  48:                 activeId === city.cityId
  49:                   ? "border-ink bg-ink text-white"
  50:                   : "border-line bg-white text-ink hover:border-jade hover:text-jade"
  51:               )}
  52:             >
  53:               {isZh ? CITY_LABELS[city.cityId].zh : CITY_LABELS[city.cityId].en}
  54:             </button>
  55:           ))}
  56:         </div>
  57:       )}
  58: 
  59:       <article className="grid gap-4 rounded-xl border border-line bg-white p-5 md:grid-cols-2">
  60:         <section className="flex flex-col gap-2">
  61:           <div className="flex items-center justify-between gap-2">
  62:             <h3 className="text-xs font-bold uppercase tracking-widest text-muted">
  63:               {isZh ? "地方菜文化" : "Local cuisine"}
  64:             </h3>
  65:             {active.cuisine.culturalNotes && (
  66:               <button
  67:                 type="button"
  68:                 onClick={() => setDrawerOpen(true)}
  69:                 className="text-[10px] font-bold uppercase tracking-wider text-jade hover:underline"
  70:               >
  71:                 {isZh ? "查看吃法 →" : "How to eat it →"}
  72:               </button>
  73:             )}
  74:           </div>
  75:           <p className="text-sm leading-relaxed">{isZh ? active.cuisine.zh : active.cuisine.en}</p>
  76:         </section>
  77:         <Block titleEn="Foreigner-friendly districts" titleZh="外籍游客友好餐区" en={active.districts.en} zh={active.districts.zh} />
  78:         <Block titleEn="Delivery apps" titleZh="外卖平台" en={active.deliveryNote.en} zh={active.deliveryNote.zh} />
  79:         <section className="flex flex-col gap-2">
  80:           <h3 className="text-xs font-bold uppercase tracking-widest text-muted">{isZh ? "注意事项" : "Pitfalls"}</h3>
  81:           <ul className="grid gap-2">
  82:             {active.pitfalls.map((p, i) => (
  83:               <li key={i} className="rounded-lg bg-amber-50 p-3 text-xs leading-relaxed">
  84:                 {isZh ? p.zh : p.en}
  85:               </li>
  86:             ))}
  87:           </ul>
  88:         </section>
  89:       </article>
  90: 
  91:       <CuisineDrawer city={active} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
  92: 
  93:       <article className="flex flex-col gap-3 rounded-xl border border-line bg-paper p-5">
  94:         <header>
  95:           <h3 className="text-base font-bold">{isZh ? "过敏 / 忌口卡（交给服务员查看）" : "Allergy / dietary card (show to staff)"}</h3>
  96:           <p className="text-xs text-muted">
  97:             {isZh ? "把 ____ 替换成你的过敏原（中英都给）。出发前截屏存手机相册。" : "Fill in your allergen in both versions. Save a screenshot before you fly."}
  98:           </p>
  99:         </header>
 100:         <div className="grid gap-3 md:grid-cols-2">
 101:           <pre className="whitespace-pre-wrap rounded-lg border border-line bg-white p-4 text-sm leading-relaxed">{allergyCardEn}</pre>
 102:           <pre className="whitespace-pre-wrap rounded-lg border border-line bg-white p-4 text-sm leading-relaxed">{allergyCardZh}</pre>
 103:         </div>
 104:       </article>
 105: 
 106:       <PracticalBlock pillar="food" cityId={cityId} />
 107:     </section>
 108:   );
 109: }
 110: 
 111: function Block({ titleEn, titleZh, en, zh }: { titleEn: string; titleZh: string; en: string; zh: string }) {
 112:   const { lang } = useLang();
 113:   const isZh = lang === "zh";
 114:   return (
 115:     <section className="flex flex-col gap-2">
 116:       <h3 className="text-xs font-bold uppercase tracking-widest text-muted">{isZh ? titleZh : titleEn}</h3>
 117:       <p className="text-sm leading-relaxed">{isZh ? zh : en}</p>
 118:     </section>
 119:   );
 120: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/components/city/CuisineDrawer.tsx | Select-Object -First 120 | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 727ms:
   1: import { useEffect } from "react";
   2: import clsx from "clsx";
   3: import type { CityFood } from "../../data/food";
   4: import { useLang } from "../../store/language";
   5: 
   6: type Props = {
   7:   city: CityFood;
   8:   open: boolean;
   9:   onClose: () => void;
  10: };
  11: 
  12: export default function CuisineDrawer({ city, open, onClose }: Props) {
  13:   const { lang } = useLang();
  14:   const isZh = lang === "zh";
  15: 
  16:   useEffect(() => {
  17:     if (!open) return;
  18:     const onKey = (e: KeyboardEvent) => {
  19:       if (e.key === "Escape") onClose();
  20:     };
  21:     window.addEventListener("keydown", onKey);
  22:     document.body.style.overflow = "hidden";
  23:     return () => {
  24:       window.removeEventListener("keydown", onKey);
  25:       document.body.style.overflow = "";
  26:     };
  27:   }, [open, onClose]);
  28: 
  29:   const notes = city.cuisine.culturalNotes;
  30: 
  31:   return (
  32:     <>
  33:       <div
  34:         aria-hidden
  35:         onClick={onClose}
  36:         className={clsx(
  37:           "fixed inset-0 z-40 bg-ink/30 backdrop-blur-sm transition-opacity duration-200",
  38:           open ? "opacity-100" : "pointer-events-none opacity-0"
  39:         )}
  40:       />
  41:       <aside
  42:         role="dialog"
  43:         aria-modal="true"
  44:         aria-label={isZh ? "美食文化与吃法" : "Food culture and how to eat it"}
  45:         className={clsx(
  46:           "fixed inset-x-0 bottom-0 z-50 flex max-h-[85vh] flex-col rounded-t-2xl bg-paper shadow-2xl transition-transform duration-300 sm:bottom-auto sm:right-0 sm:top-0 sm:h-full sm:max-h-none sm:max-w-[480px] sm:rounded-none sm:rounded-l-2xl",
  47:           open
  48:             ? "translate-y-0 sm:translate-x-0"
  49:             : "translate-y-full sm:translate-y-0 sm:translate-x-full"
  50:         )}
  51:       >
  52:         <header className="flex items-start justify-between gap-3 border-b border-line px-5 py-4">
  53:           <div className="flex flex-col gap-0.5">
  54:             <span className="text-xs font-bold uppercase tracking-widest text-muted">
  55:               {isZh ? "城市美食文化" : "Local food culture"}
  56:             </span>
  57:             <h2 className="text-xl font-bold leading-tight">
  58:               {isZh ? city.cityZh : city.cityEn}
  59:             </h2>
  60:           </div>
  61:           <button
  62:             type="button"
  63:             onClick={onClose}
  64:             aria-label={isZh ? "关闭" : "Close"}
  65:             className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted hover:bg-line/40 hover:text-ink"
  66:           >
  67:             <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
  68:               <path
  69:                 d="M5 5l10 10M15 5L5 15"
  70:                 stroke="currentColor"
  71:                 strokeWidth="2"
  72:                 strokeLinecap="round"
  73:               />
  74:             </svg>
  75:           </button>
  76:         </header>
  77:         <div className="flex flex-col gap-4 overflow-y-auto px-5 py-5 text-sm leading-relaxed">
  78:           <p className="text-ink/90">{isZh ? city.cuisine.zh : city.cuisine.en}</p>
  79:           {notes && (
  80:             <section className="flex flex-col gap-2">
  81:               <span className="text-xs font-bold uppercase tracking-widest text-muted">
  82:                 {isZh ? "文化与吃法" : "Culture & how to eat it"}
  83:               </span>
  84:               <p className="text-ink/85">{isZh ? notes.zh : notes.en}</p>
  85:             </section>
  86:           )}
  87:           <p className="border-t border-line pt-3 text-[11px] text-muted">
  88:             {isZh
  89:               ? "本站只介绍菜系与饮食习惯，不推荐具体餐厅。具体到店选择请用大众点评 / 美团等本地平台。"
  90:               : "We cover cuisines and food culture only — no specific restaurant picks. Use Dianping / Meituan for venue selection."}
  91:           </p>
  92:         </div>
  93:       </aside>
  94:     </>
  95:   );
  96: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "All data sourced|官方|community|traveler community" v2/src/pages/HomePage.tsx v2/src/components/common/SourcesNote.tsx v2/src/pages/SourcesPage.tsx' in c:\Users\h\Documents\New project 2
 succeeded in 542ms:
v2/src/components/common/SourcesNote.tsx:11:          本页所有数字、政策、地址均引自中国政府官方公开来源；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
v2/src/components/common/SourcesNote.tsx:18:          Every figure, policy, and address on this page is cited from official Chinese government sources. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
v2/src/pages/HomePage.tsx:35:          {isZh ? "所有数据均来自中国官方。" : "All data sourced from China's official agencies."}
v2/src/pages/SourcesPage.tsx:10:  const official = all.filter((s) => !s.community);
v2/src/pages/SourcesPage.tsx:11:  const community = all.filter((s) => s.community);
v2/src/pages/SourcesPage.tsx:24:            ? `本网站全部数据均来自下列 ${all.length} 个公开来源。其中 ${official.length} 条来自政府或机构官方网站，${community.length} 条来自旅行社区博客 / 论坛 / 在华外籍人士作者，用于补充官方源未覆盖的实际操作注意事项。每条都标注域名 + 出版日期 + 我们最近一次核验日期，可点击查看原文。`
v2/src/pages/SourcesPage.tsx:25:            : `Every fact on this site traces to one of the ${all.length} sources below. ${official.length} come from official government and institutional websites; ${community.length} come from traveler community blogs and forums covering practical pitfalls that official sources do not publish. Each entry shows the domain, the publication date, and our last verification date — click to read the original.`}
v2/src/pages/SourcesPage.tsx:31:        titleZh={`官方源（${official.length} 条）`}
v2/src/pages/SourcesPage.tsx:39:        titleEn={`Traveler community references (${community.length})`}
v2/src/pages/SourcesPage.tsx:40:        titleZh={`旅行社区资料（${community.length} 条）`}
v2/src/pages/SourcesPage.tsx:44:        <ReferenceList items={community} isZh={isZh} />

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem v2/build/client/assets -File | Sort-Object Length -Descending | Select-Object Name,Length | Format-Table -AutoSize' in c:\Users\h\Documents\New project 2
 succeeded in 650ms:

Name                         Length
----                         ------
china-map-gs2022-4309.jpg  10577330
three.module.min.js          674422
earth-bluemarble.jpg         512606
china-province-shapes.json   116837
CityPage-JrfNPjS5.js          97401
VisaChecker-KFZ5UYG4.js       44977
transport-CvGNcCUF.js         38030
SourcesPage-B9eEqlP8.js       37700
HomePage-DK_KK10T.js          30896
atlas-DcLNZPuA.js             29178
root-CxaN-NWI.js              18851
AskPage-DbkV6zpz.js           10354
SharePage-BtnUnAoh.js         10098
phase2-preview-BrRHRJlX.js     8318
Map3D-D3GPG3Ee.js              6172
EarthIntro-oo8W44dy.js         4230
language-CMb5xGg-.js            348
entry.client-BWxjU3TI.js         11



exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Recurse v2/build/client/cesium -File -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum | Format-List Count,Sum' in c:\Users\h\Documents\New project 2
 succeeded in 999ms:
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content -Encoding UTF8 v2/src/store/AtlasProvider.tsx | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i, $_ }' in c:\Users\h\Documents\New project 2
 succeeded in 1169ms:
   1: import { useMemo, useReducer, type ReactNode } from "react";
   2: import { AtlasContext, atlasReducer, initialAtlasState } from "./atlas";
   3: 
   4: export default function AtlasProvider({ children }: { children: ReactNode }) {
   5:   const [state, dispatch] = useReducer(atlasReducer, initialAtlasState);
   6:   const value = useMemo(() => ({ state, dispatch }), [state]);
   7:   return <AtlasContext.Provider value={value}>{children}</AtlasContext.Provider>;
   8: }

codex
扫完了。`npm run lint` 通过；`npm run build` 和 `npx tsc` 当前被缺失依赖挡住。

**Critical**
- `v2/vite.config.ts:4`, `v2/src/components/map/Map3D.tsx:2,307`：当前 `node_modules` 缺 `vite-plugin-static-copy` 和 `cesium`，build/typecheck 直接失败。修复：先 `npm ci`，并把 build 作为合并门禁。
- `v2/react-router.config.ts:7-16`：prerender 只包含首页、Phase2、sources、city，漏了首页实际链接的 `/map`、`/guide/entry`、`/guide/payments`、`/guide/notes`；静态发布/刷新会有死路由风险。修复：把这些路由加入 prerender。
- `v2/src/components/map/ProvinceShapeLayer.tsx:130`, `v2/src/components/map/ProvinceInfoCard.tsx:17-20`, `v2/src/components/map/Map3D.tsx:251-259`：Map 选省后只开 3D，3D 里城市/景点只是 label，不能进入 `/city/:cityId`；InfoCard 仍是旧的 `selectPlace + scrollIntoView("#atlas")`，而新页面没有 `#atlas`。修复：给 2D/3D 城市标注加 `Link/navigate('/city/beijing')` 这类真实路由，并做 atlas id 到新 CityId 的映射。
- `v2/src/data/map-sources.ts:45`, `v2/src/store/atlas.ts:50-57`：`guangdong` hit area 存在，但 `atlasData` 没有广东记录，`findProvince` 会 fallback 成 `cities: []`，所以地图无法承接广州/深圳。修复：补广东省数据或单独维护地图省份到四城的关系。

**Important**
- `v2/src/pages/CityPage.tsx:50-53` + `PaymentsChecklist.tsx:23`, `TransportGuide.tsx:24`, `FoodGuide.tsx:21`, `EmergencyBriefing.tsx:30`：city page 产生重复 DOM id（payments/transport/food/emergency），会影响锚点、IntersectionObserver 和可访问性。修复：只保留外层 wrapper id，子组件按 `cityScoped` 不输出 id。
- `v2/src/root.tsx:33-37`, `v2/src/pages/MapPage.tsx:12`：`AtlasProvider` 跨路由持有状态，离开 `/map` 不 reset；用户回到地图可能直接看到上次 3D overlay。修复：MapPage unmount 时 reset，或把 AtlasProvider 下沉到 MapPage。
- `v2/src/components/map/Province3DOverlay.tsx:48-56`：`Suspense` 只有 loading fallback，没有 ErrorBoundary；lazy chunk/Cesium 加载失败会冒泡。修复：包一层 map error boundary，失败时回到 2D/显示可操作 fallback。
- `v2/src/hooks/useProvinceShapes.ts:12-14`, `v2/src/components/map/MapPreview.tsx:10-11`：省界 JSON 失败只 console.warn，首页预览/地图会空白。修复：给 MapPreview/HeroMap 显示文本或静态图片 fallback。
- `v2/src/components/layout/LanguageSwitch.tsx:13-25`：语言切换缺 `aria-label`、`aria-pressed`/当前态语义。修复：外层加 label，每个 button 标记当前语言。
- `v2/src/components/map/ProvinceShapeLayer.tsx:41,55`：省份 SVG 可键盘聚焦但 `outline-none` 且无 focus-visible 样式。修复：增加可见 focus ring/stroke。

**Nice-to-have**
- `v2/src/routes.ts:11`, `v2/src/pages/GuidePage.tsx:38`：未知 route 回首页，未知 guide topic 静默变 notes。修复：显式 NotFound 或 redirect。
- 孤儿组件/旧系统残留：`AtlasSection.tsx:7`, `ProvinceRail.tsx:7`, `CityList.tsx:8`, `CityProfile.tsx:7`, `PlaceSearch.tsx:7`, `CityHero.tsx:8`, `PageSources.tsx:6`, `EarthIntro.tsx:27`, `MuseumFlow.tsx:10`, `HistoryVideo.tsx:3`, `components/sections/SourcesNote.tsx:5`。修复：删除或接回新架构。
- `v2/src/pages/HomePage.tsx:35` 与 `SourcesNote.tsx:11,18` / `SourcesPage.tsx:24-25` 口径冲突：首页说全是官方，实际包含社区来源。修复：改成“政策/地址官方，实操坑点来自社区并标注来源”。
tokens used
243,604
ERROR: The process with PID 604776 (child process of PID 474460) could not be terminated.
Reason: The operation attempted is not supported.
ERROR: The process with PID 474460 (child process of PID 28780) could not be terminated.
Reason: The operation attempted is not supported.
ERROR: The process with PID 28780 (child process of PID 529076) could not be terminated.
Reason: The operation attempted is not supported.
ERROR: The process with PID 529076 (child process of PID 501684) could not be terminated.
Reason: The operation attempted is not supported.

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
