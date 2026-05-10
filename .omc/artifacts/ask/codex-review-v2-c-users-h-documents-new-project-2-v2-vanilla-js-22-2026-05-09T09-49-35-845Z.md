# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-09T09:49:35.846Z

## Original task

请 review 我刚刚搭建的 v2/ 重构骨架（位于 c:\Users\h\Documents\New project 2\v2\），目标是把原项目（vanilla JS + 2200 行 CSS + 手写矩形点击区）重构为 React 18 + Vite + Tailwind v4 + 天地图官方底图，要求代码干净、好维护、好升级、架构清楚、禁止堆代码。请检查：(1) 目录架构是否合理（data/lib/store/hooks/components 分层）(2) AtlasContext + useReducer 状态管理对这个体量是否合适 (3) lib/search.ts 索引构建有无问题 (4) hooks/useCityViews.ts 用 useSyncExternalStore 跨组件同步 localStorage 计数是否过度设计 (5) 还需要哪些组件落地原'省份浮现+全图淡化'的 UX 才完整。返回具体改进建议，按优先级排序。务必读取 v2/src 下所有现有文件再给意见。

## Final prompt

请 review 我刚刚搭建的 v2/ 重构骨架（位于 c:\Users\h\Documents\New project 2\v2\），目标是把原项目（vanilla JS + 2200 行 CSS + 手写矩形点击区）重构为 React 18 + Vite + Tailwind v4 + 天地图官方底图，要求代码干净、好维护、好升级、架构清楚、禁止堆代码。请检查：(1) 目录架构是否合理（data/lib/store/hooks/components 分层）(2) AtlasContext + useReducer 状态管理对这个体量是否合适 (3) lib/search.ts 索引构建有无问题 (4) hooks/useCityViews.ts 用 useSyncExternalStore 跨组件同步 localStorage 计数是否过度设计 (5) 还需要哪些组件落地原'省份浮现+全图淡化'的 UX 才完整。返回具体改进建议，按优先级排序。务必读取 v2/src 下所有现有文件再给意见。

## Raw output

```text
SUCCESS: The process with PID 541480 (child process of PID 550356) has been terminated.
SUCCESS: The process with PID 550356 (child process of PID 504784) has been terminated.
SUCCESS: The process with PID 504784 (child process of PID 469116) has been terminated.
SUCCESS: The process with PID 469116 (child process of PID 504308) has been terminated.
SUCCESS: The process with PID 550328 (child process of PID 507752) has been terminated.
SUCCESS: The process with PID 507752 (child process of PID 501788) has been terminated.
SUCCESS: The process with PID 501788 (child process of PID 458960) has been terminated.
SUCCESS: The process with PID 458960 (child process of PID 504308) has been terminated.
SUCCESS: The process with PID 545868 (child process of PID 550832) has been terminated.
SUCCESS: The process with PID 550832 (child process of PID 472344) has been terminated.
SUCCESS: The process with PID 472344 (child process of PID 504212) has been terminated.
SUCCESS: The process with PID 504212 (child process of PID 504308) has been terminated.
我已按最后一次稳定快照读取 `v2/src` 下全部现有文件，并额外看了 `package.json` / Vite 配置。结论：分层方向是对的，但现在还不能算“可维护骨架已成型”，主要问题是构建未过、点击层仍是矩形命中、搜索索引有几个会影响结果质量的设计缺口。

**P0 阻塞项**

1. 当前构建和 lint 不通过。  
`npm run build` 卡在 [CityProfile.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/atlas/CityProfile.tsx:10>)：`lang` 未使用。`npm run lint` 还报 [CityProfile.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/atlas/CityProfile.tsx:25>) 的 `_province` 未使用，以及 [AtlasContext.tsx](<C:/Users/h/Documents/New project 2/v2/src/store/AtlasContext.tsx:79>) / [LanguageContext.tsx](<C:/Users/h/Documents/New project 2/v2/src/store/LanguageContext.tsx:40>) 的 Fast Refresh 规则问题。  
建议：先清掉未用变量；Context 文件拆成 `AtlasProvider.tsx` + `useAtlas.ts`、`LanguageProvider.tsx` + `useLang.ts`，或调整 ESLint 规则，但拆文件更干净。

2. 目标写的是 React 18，但依赖是 React 19。  
见 [package.json](<C:/Users/h/Documents/New project 2/v2/package.json:16>) 和 [package.json](<C:/Users/h/Documents/New project 2/v2/package.json:24>)。如果目标明确是 React 18，应降到 `react/react-dom@18` 和匹配 `@types/react@18`。如果决定用 React 19，就把目标说明改掉，避免后续团队按错误约束设计。

3. “禁止手写矩形点击区”目前还没达标。  
[ProvinceClickLayer.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/map/ProvinceClickLayer.tsx:13>) 仍然遍历 [map-sources.ts](<C:/Users/h/Documents/New project 2/v2/src/data/map-sources.ts:15>) 的 `provinceHitAreas`，并用 `left/top/width/height` 生成矩形按钮。作为临时 MVP 可以，但作为最终重构目标不合格。  
建议：2D 点击层也改用 `china-province-shapes.json` 的省级 path，渲染 SVG path/button，命中区、浮现层、3D 数据共用同一份行政区 shape source。

**P1 架构和状态**

4. `data/lib/store/hooks/components` 分层总体合理。  
`data` 放静态数据，`lib` 放纯函数，`store` 放跨组件 UI 状态，`hooks` 放浏览器副作用，`components` 按 `map/atlas/layout/search/sections` 分域，这个方向可以继续。现在需要补的是“数据一致性验证层”：`atlasData`、`provinceHitAreas`、`provinceTextureSrc`、`china-province-shapes.json`、`officialProvinceBounds` 都各自维护 id，已经出现 shape 数量 33、hit area 34，缺 `macau` 的情况。`Map3D` 在 [Map3D.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/map/Map3D.tsx:122>) 找不到 shape 时会静默空白。

5. `AtlasContext + useReducer` 对这个体量合适。  
目前状态只有 `selectedProvinceId`、`selectedCityId`、`is3DEnabled`，用 reducer 比上 Zustand/Redux 更合适。但 [AtlasContext.tsx](<C:/Users/h/Documents/New project 2/v2/src/store/AtlasContext.tsx:27>) 的 `selectCity` 只写 `cityId`，不维护“城市属于哪个省”的不变量；现在 [PlaceSearch.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/search/PlaceSearch.tsx:23>) 先选省再选城，所以暂时没炸。  
建议：改成 `selectPlace({ provinceId, cityId })` 或 `selectCity({ provinceId, cityId })`，一次 action 保证一致性。hover、drag、pointer 临时状态不要进全局 reducer。

**P1 搜索索引**

6. `lib/search.ts` 思路可用，但要修三个点。  
[search.ts](<C:/Users/h/Documents/New project 2/v2/src/lib/search.ts:38>) 把英文 museum 和中文 museum 分开建记录，并把 `zh/en` 都设成同一个字符串，会导致中文界面出现英文主名或反过来。建议并行拆 `museum` / `museumZh`，生成同一条双语记录。  
[search.ts](<C:/Users/h/Documents/New project 2/v2/src/lib/search.ts:13>) 的 normalize 不处理 apostrophe/hyphen，`Xi'an` 对用户输入 `xian` 不友好。至少加入 `'’\-`，并给城市 id / 常见拼音作为 alias。  
[search.ts](<C:/Users/h/Documents/New project 2/v2/src/lib/search.ts:51>) 和 [search.ts](<C:/Users/h/Documents/New project 2/v2/src/lib/search.ts:76>) 会重复插入景点，例如城市 sites 与 `provinceAttractionSeed` 重复。建议 build 阶段生成 `tokens`，并用 `provinceId + cityId + type + normalizedName` 去重，再按优先级排序。

7. `getAllRecords()` 直接返回内部数组。  
见 [search.ts](<C:/Users/h/Documents/New project 2/v2/src/lib/search.ts:104>)。建议返回 `readonly SearchRecord[]` 或 `searchIndex.slice()`，避免组件误改索引。

**P2 hook 和 UX 完整度**

8. `useSyncExternalStore` 不算严重过度设计。  
因为 `CityList` 和 `CityProfile` 都会显示浏览量，[CityList.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/atlas/CityList.tsx:49>) / [CityProfile.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/atlas/CityProfile.tsx:28>) 需要同步，`useSyncExternalStore` 是合理的轻量外部 store。但 [useCityViews.ts](<C:/Users/h/Documents/New project 2/v2/src/hooks/useCityViews.ts:13>) 没有 `window` guard，也没有监听浏览器原生 `storage` 事件。  
建议：key 改成命名空间如 `chinaAtlas:views:${cityId}`，`readCount` 加环境保护，`subscribe` 里补 `window.addEventListener("storage", ...)`，否则它只同步同 tab 内的手动 `notify()`。

9. “省份浮现 + 全图淡化”已经有雏形，但还缺完整体验组件。  
已有 [HeroMap.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/map/HeroMap.tsx:29>) 做全图淡化，[ProvincePop.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/map/ProvincePop.tsx:16>) 做省份浮现，方向对。还需要：基于真实 path 的 `ProvinceShapeLayer` 替代矩形点击层；使用 [cityMapPoints](<C:/Users/h/Documents/New project 2/v2/src/data/map-sources.ts:101>) 的 `CityPinsLayer`；省份景点列表组件使用 `provinceAttractionSeed`，否则无城市数据的省只显示 pending；`MapAssetBoundary`/fallback 处理 texture 或 3D shape 缺失，避免空白；键盘 Escape/焦点管理/aria-live 提示让浮现状态可访问。

验证：`npm run build` 失败；`npm run lint` 失败；`npm ls three` 能解析到 `three@0.184.0`。当前优先顺序是先让 build/lint 归零，再把矩形点击层替换为官方 shape 驱动。


OpenAI Codex v0.128.0 (research preview)
--------
workdir: C:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e0c1e-13b5-7d51-9bb6-24b9ebac4854
--------
user
请 review 我刚刚搭建的 v2/ 重构骨架（位于 c:\Users\h\Documents\New project 2\v2\），目标是把原项目（vanilla JS + 2200 行 CSS + 手写矩形点击区）重构为 React 18 + Vite + Tailwind v4 + 天地图官方底图，要求代码干净、好维护、好升级、架构清楚、禁止堆代码。请检查：(1) 目录架构是否合理（data/lib/store/hooks/components 分层）(2) AtlasContext + useReducer 状态管理对这个体量是否合适 (3) lib/search.ts 索引构建有无问题 (4) hooks/useCityViews.ts 用 useSyncExternalStore 跨组件同步 localStorage 计数是否过度设计 (5) 还需要哪些组件落地原'省份浮现+全图淡化'的 UX 才完整。返回具体改进建议，按优先级排序。务必读取 v2/src 下所有现有文件再给意见。
codex
我会先按 React 代码评审方式读一遍现有骨架，再把建议按风险和落地顺序排出来。会先加载相关 React 评审规则，然后完整枚举并读取 `v2/src` 下的文件。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg --files v2/src' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw 'C:\\Users\\h\\.codex\\plugins\\cache\\openai-curated\\build-web-apps\\82fd64bc\\skills\\react-best-practices\\SKILL.md'" in C:\Users\h\Documents\New project 2
 succeeded in 561ms:
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


 succeeded in 948ms:
v2/src\main.tsx
v2/src\App.css
v2/src\App.tsx
v2/src\index.css
v2/src\styles\globals.css
v2/src\data\map-sources.ts
v2/src\data\i18n.ts
v2/src\data\atlas.ts
v2/src\lib\search.ts
v2/src\lib\i18n.ts
v2/src\lib\format.ts
v2/src\store\AtlasContext.tsx
v2/src\hooks\useLanguage.ts
v2/src\hooks\useCityViews.ts
v2/src\assets\hero.png
v2/src\assets\vite.svg
v2/src\assets\react.svg

codex
已确认这是 React/Vite 方向的评审，我会重点看状态边界、索引构建、localStorage 同步和组件拆分是否会影响后续扩展。现在读取所有源码文本，同时把图片/SVG 资产也纳入清单，避免漏掉 `src` 下的现有文件。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "" v2/src' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Recurse -File v2/src | Select-Object FullName,Length,LastWriteTime' in C:\Users\h\Documents\New project 2
2026-05-09T09:43:16.453050Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.8 seconds
Output:

 exited 1 in 769ms:
 succeeded in 866ms:

FullName                                                         Length LastWriteTime    
--------                                                         ------ -------------    
C:\Users\h\Documents\New project 2\v2\src\App.css                  2891 2026/5/9 17:35:35
C:\Users\h\Documents\New project 2\v2\src\App.tsx                  3646 2026/5/9 17:35:36
C:\Users\h\Documents\New project 2\v2\src\index.css                2169 2026/5/9 17:35:35
C:\Users\h\Documents\New project 2\v2\src\main.tsx                  239 2026/5/9 17:41:53
C:\Users\h\Documents\New project 2\v2\src\assets\hero.png         13057 2026/5/9 17:35:36
C:\Users\h\Documents\New project 2\v2\src\assets\react.svg         4126 2026/5/9 17:35:36
C:\Users\h\Documents\New project 2\v2\src\assets\vite.svg          8709 2026/5/9 17:35:36
C:\Users\h\Documents\New project 2\v2\src\data\atlas.ts           24649 2026/5/9 17:39:37
C:\Users\h\Documents\New project 2\v2\src\data\i18n.ts             8796 2026/5/9 17:37:25
C:\Users\h\Documents\New project 2\v2\src\data\map-sources.ts      7042 2026/5/9 17:41:04
C:\Users\h\Documents\New project 2\v2\src\hooks\useCityViews.ts     948 2026/5/9 17:41:31
C:\Users\h\Documents\New project 2\v2\src\hooks\useLanguage.ts      744 2026/5/9 17:41:40
C:\Users\h\Documents\New project 2\v2\src\lib\format.ts             143 2026/5/9 17:41:15
C:\Users\h\Documents\New project 2\v2\src\lib\i18n.ts               155 2026/5/9 17:41:13
C:\Users\h\Documents\New project 2\v2\src\lib\search.ts            3413 2026/5/9 17:41:27
C:\Users\h\Documents\New project 2\v2\src\store\AtlasContext.tsx   2675 2026/5/9 17:41:44
C:\Users\h\Documents\New project 2\v2\src\styles\globals.css        533 2026/5/9 17:41:48



exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src -g "*.ts" -g "*.tsx" -g "*.css" -g "*.svg"' in C:\Users\h\Documents\New project 2
 succeeded in 539ms:
v2/src\App.tsx:1:import { useState } from 'react'
v2/src\App.tsx:2:import reactLogo from './assets/react.svg'
v2/src\App.tsx:3:import viteLogo from './assets/vite.svg'
v2/src\App.tsx:4:import heroImg from './assets/hero.png'
v2/src\App.tsx:5:import './App.css'
v2/src\App.tsx:6:
v2/src\App.tsx:7:function App() {
v2/src\App.tsx:8:  const [count, setCount] = useState(0)
v2/src\App.tsx:9:
v2/src\App.tsx:10:  return (
v2/src\App.tsx:11:    <>
v2/src\App.tsx:12:      <section id="center">
v2/src\App.tsx:13:        <div className="hero">
v2/src\App.tsx:14:          <img src={heroImg} className="base" width="170" height="179" alt="" />
v2/src\App.tsx:15:          <img src={reactLogo} className="framework" alt="React logo" />
v2/src\App.tsx:16:          <img src={viteLogo} className="vite" alt="Vite logo" />
v2/src\App.tsx:17:        </div>
v2/src\App.tsx:18:        <div>
v2/src\App.tsx:19:          <h1>Get started</h1>
v2/src\App.tsx:20:          <p>
v2/src\App.tsx:21:            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
v2/src\App.tsx:22:          </p>
v2/src\App.tsx:23:        </div>
v2/src\App.tsx:24:        <button
v2/src\App.tsx:25:          type="button"
v2/src\App.tsx:26:          className="counter"
v2/src\App.tsx:27:          onClick={() => setCount((count) => count + 1)}
v2/src\App.tsx:28:        >
v2/src\App.tsx:29:          Count is {count}
v2/src\App.tsx:30:        </button>
v2/src\App.tsx:31:      </section>
v2/src\App.tsx:32:
v2/src\App.tsx:33:      <div className="ticks"></div>
v2/src\App.tsx:34:
v2/src\App.tsx:35:      <section id="next-steps">
v2/src\App.tsx:36:        <div id="docs">
v2/src\App.tsx:37:          <svg className="icon" role="presentation" aria-hidden="true">
v2/src\App.tsx:38:            <use href="/icons.svg#documentation-icon"></use>
v2/src\App.tsx:39:          </svg>
v2/src\App.tsx:40:          <h2>Documentation</h2>
v2/src\App.tsx:41:          <p>Your questions, answered</p>
v2/src\App.tsx:42:          <ul>
v2/src\App.tsx:43:            <li>
v2/src\App.tsx:44:              <a href="https://vite.dev/" target="_blank">
v2/src\App.tsx:45:                <img className="logo" src={viteLogo} alt="" />
v2/src\App.tsx:46:                Explore Vite
v2/src\App.tsx:47:              </a>
v2/src\App.tsx:48:            </li>
v2/src\App.tsx:49:            <li>
v2/src\App.tsx:50:              <a href="https://react.dev/" target="_blank">
v2/src\App.tsx:51:                <img className="button-icon" src={reactLogo} alt="" />
v2/src\App.tsx:52:                Learn more
v2/src\App.tsx:53:              </a>
v2/src\App.tsx:54:            </li>
v2/src\App.tsx:55:          </ul>
v2/src\App.tsx:56:        </div>
v2/src\App.tsx:57:        <div id="social">
v2/src\App.tsx:58:          <svg className="icon" role="presentation" aria-hidden="true">
v2/src\App.tsx:59:            <use href="/icons.svg#social-icon"></use>
v2/src\App.tsx:60:          </svg>
v2/src\App.tsx:61:          <h2>Connect with us</h2>
v2/src\App.tsx:62:          <p>Join the Vite community</p>
v2/src\App.tsx:63:          <ul>
v2/src\App.tsx:64:            <li>
v2/src\App.tsx:65:              <a href="https://github.com/vitejs/vite" target="_blank">
v2/src\App.tsx:66:                <svg
v2/src\App.tsx:67:                  className="button-icon"
v2/src\App.tsx:68:                  role="presentation"
v2/src\App.tsx:69:                  aria-hidden="true"
v2/src\App.tsx:70:                >
v2/src\App.tsx:71:                  <use href="/icons.svg#github-icon"></use>
v2/src\App.tsx:72:                </svg>
v2/src\App.tsx:73:                GitHub
v2/src\App.tsx:74:              </a>
v2/src\App.tsx:75:            </li>
v2/src\App.tsx:76:            <li>
v2/src\App.tsx:77:              <a href="https://chat.vite.dev/" target="_blank">
v2/src\App.tsx:78:                <svg
v2/src\App.tsx:79:                  className="button-icon"
v2/src\App.tsx:80:                  role="presentation"
v2/src\App.tsx:81:                  aria-hidden="true"
v2/src\App.tsx:82:                >
v2/src\App.tsx:83:                  <use href="/icons.svg#discord-icon"></use>
v2/src\App.tsx:84:                </svg>
v2/src\App.tsx:85:                Discord
v2/src\App.tsx:86:              </a>
v2/src\App.tsx:87:            </li>
v2/src\App.tsx:88:            <li>
v2/src\App.tsx:89:              <a href="https://x.com/vite_js" target="_blank">
v2/src\App.tsx:90:                <svg
v2/src\App.tsx:91:                  className="button-icon"
v2/src\App.tsx:92:                  role="presentation"
v2/src\App.tsx:93:                  aria-hidden="true"
v2/src\App.tsx:94:                >
v2/src\App.tsx:95:                  <use href="/icons.svg#x-icon"></use>
v2/src\App.tsx:96:                </svg>
v2/src\App.tsx:97:                X.com
v2/src\App.tsx:98:              </a>
v2/src\App.tsx:99:            </li>
v2/src\App.tsx:100:            <li>
v2/src\App.tsx:101:              <a href="https://bsky.app/profile/vite.dev" target="_blank">
v2/src\App.tsx:102:                <svg
v2/src\App.tsx:103:                  className="button-icon"
v2/src\App.tsx:104:                  role="presentation"
v2/src\App.tsx:105:                  aria-hidden="true"
v2/src\App.tsx:106:                >
v2/src\App.tsx:107:                  <use href="/icons.svg#bluesky-icon"></use>
v2/src\App.tsx:108:                </svg>
v2/src\App.tsx:109:                Bluesky
v2/src\App.tsx:110:              </a>
v2/src\App.tsx:111:            </li>
v2/src\App.tsx:112:          </ul>
v2/src\App.tsx:113:        </div>
v2/src\App.tsx:114:      </section>
v2/src\App.tsx:115:
v2/src\App.tsx:116:      <div className="ticks"></div>
v2/src\App.tsx:117:      <section id="spacer"></section>
v2/src\App.tsx:118:    </>
v2/src\App.tsx:119:  )
v2/src\App.tsx:120:}
v2/src\App.tsx:121:
v2/src\App.tsx:122:export default App
v2/src\App.css:1:.counter {
v2/src\App.css:2:  font-size: 16px;
v2/src\App.css:3:  padding: 5px 10px;
v2/src\App.css:4:  border-radius: 5px;
v2/src\App.css:5:  color: var(--accent);
v2/src\App.css:6:  background: var(--accent-bg);
v2/src\App.css:7:  border: 2px solid transparent;
v2/src\App.css:8:  transition: border-color 0.3s;
v2/src\App.css:9:  margin-bottom: 24px;
v2/src\App.css:10:
v2/src\App.css:11:  &:hover {
v2/src\App.css:12:    border-color: var(--accent-border);
v2/src\App.css:13:  }
v2/src\App.css:14:  &:focus-visible {
v2/src\App.css:15:    outline: 2px solid var(--accent);
v2/src\App.css:16:    outline-offset: 2px;
v2/src\App.css:17:  }
v2/src\App.css:18:}
v2/src\App.css:19:
v2/src\App.css:20:.hero {
v2/src\App.css:21:  position: relative;
v2/src\App.css:22:
v2/src\App.css:23:  .base,
v2/src\App.css:24:  .framework,
v2/src\App.css:25:  .vite {
v2/src\App.css:26:    inset-inline: 0;
v2/src\App.css:27:    margin: 0 auto;
v2/src\App.css:28:  }
v2/src\App.css:29:
v2/src\App.css:30:  .base {
v2/src\App.css:31:    width: 170px;
v2/src\App.css:32:    position: relative;
v2/src\App.css:33:    z-index: 0;
v2/src\App.css:34:  }
v2/src\App.css:35:
v2/src\App.css:36:  .framework,
v2/src\App.css:37:  .vite {
v2/src\App.css:38:    position: absolute;
v2/src\App.css:39:  }
v2/src\App.css:40:
v2/src\App.css:41:  .framework {
v2/src\App.css:42:    z-index: 1;
v2/src\App.css:43:    top: 34px;
v2/src\App.css:44:    height: 28px;
v2/src\App.css:45:    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
v2/src\App.css:46:      scale(1.4);
v2/src\App.css:47:  }
v2/src\App.css:48:
v2/src\App.css:49:  .vite {
v2/src\App.css:50:    z-index: 0;
v2/src\App.css:51:    top: 107px;
v2/src\App.css:52:    height: 26px;
v2/src\App.css:53:    width: auto;
v2/src\App.css:54:    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
v2/src\App.css:55:      scale(0.8);
v2/src\App.css:56:  }
v2/src\App.css:57:}
v2/src\App.css:58:
v2/src\App.css:59:#center {
v2/src\App.css:60:  display: flex;
v2/src\App.css:61:  flex-direction: column;
v2/src\App.css:62:  gap: 25px;
v2/src\App.css:63:  place-content: center;
v2/src\App.css:64:  place-items: center;
v2/src\App.css:65:  flex-grow: 1;
v2/src\App.css:66:
v2/src\App.css:67:  @media (max-width: 1024px) {
v2/src\App.css:68:    padding: 32px 20px 24px;
v2/src\App.css:69:    gap: 18px;
v2/src\App.css:70:  }
v2/src\App.css:71:}
v2/src\App.css:72:
v2/src\App.css:73:#next-steps {
v2/src\App.css:74:  display: flex;
v2/src\App.css:75:  border-top: 1px solid var(--border);
v2/src\App.css:76:  text-align: left;
v2/src\App.css:77:
v2/src\App.css:78:  & > div {
v2/src\App.css:79:    flex: 1 1 0;
v2/src\App.css:80:    padding: 32px;
v2/src\App.css:81:    @media (max-width: 1024px) {
v2/src\App.css:82:      padding: 24px 20px;
v2/src\App.css:83:    }
v2/src\App.css:84:  }
v2/src\App.css:85:
v2/src\App.css:86:  .icon {
v2/src\App.css:87:    margin-bottom: 16px;
v2/src\App.css:88:    width: 22px;
v2/src\App.css:89:    height: 22px;
v2/src\App.css:90:  }
v2/src\App.css:91:
v2/src\App.css:92:  @media (max-width: 1024px) {
v2/src\App.css:93:    flex-direction: column;
v2/src\App.css:94:    text-align: center;
v2/src\App.css:95:  }
v2/src\App.css:96:}
v2/src\App.css:97:
v2/src\App.css:98:#docs {
v2/src\App.css:99:  border-right: 1px solid var(--border);
v2/src\App.css:100:
v2/src\App.css:101:  @media (max-width: 1024px) {
v2/src\App.css:102:    border-right: none;
v2/src\App.css:103:    border-bottom: 1px solid var(--border);
v2/src\App.css:104:  }
v2/src\App.css:105:}
v2/src\App.css:106:
v2/src\App.css:107:#next-steps ul {
v2/src\App.css:108:  list-style: none;
v2/src\App.css:109:  padding: 0;
v2/src\App.css:110:  display: flex;
v2/src\App.css:111:  gap: 8px;
v2/src\App.css:112:  margin: 32px 0 0;
v2/src\App.css:113:
v2/src\App.css:114:  .logo {
v2/src\App.css:115:    height: 18px;
v2/src\App.css:116:  }
v2/src\App.css:117:
v2/src\App.css:118:  a {
v2/src\App.css:119:    color: var(--text-h);
v2/src\App.css:120:    font-size: 16px;
v2/src\App.css:121:    border-radius: 6px;
v2/src\App.css:122:    background: var(--social-bg);
v2/src\App.css:123:    display: flex;
v2/src\App.css:124:    padding: 6px 12px;
v2/src\App.css:125:    align-items: center;
v2/src\App.css:126:    gap: 8px;
v2/src\App.css:127:    text-decoration: none;
v2/src\App.css:128:    transition: box-shadow 0.3s;
v2/src\App.css:129:
v2/src\App.css:130:    &:hover {
v2/src\App.css:131:      box-shadow: var(--shadow);
v2/src\App.css:132:    }
v2/src\App.css:133:    .button-icon {
v2/src\App.css:134:      height: 18px;
v2/src\App.css:135:      width: 18px;
v2/src\App.css:136:    }
v2/src\App.css:137:  }
v2/src\App.css:138:
v2/src\App.css:139:  @media (max-width: 1024px) {
v2/src\App.css:140:    margin-top: 20px;
v2/src\App.css:141:    flex-wrap: wrap;
v2/src\App.css:142:    justify-content: center;
v2/src\App.css:143:
v2/src\App.css:144:    li {
v2/src\App.css:145:      flex: 1 1 calc(50% - 8px);
v2/src\App.css:146:    }
v2/src\App.css:147:
v2/src\App.css:148:    a {
v2/src\App.css:149:      width: 100%;
v2/src\App.css:150:      justify-content: center;
v2/src\App.css:151:      box-sizing: border-box;
v2/src\App.css:152:    }
v2/src\App.css:153:  }
v2/src\App.css:154:}
v2/src\App.css:155:
v2/src\App.css:156:#spacer {
v2/src\App.css:157:  height: 88px;
v2/src\App.css:158:  border-top: 1px solid var(--border);
v2/src\App.css:159:  @media (max-width: 1024px) {
v2/src\App.css:160:    height: 48px;
v2/src\App.css:161:  }
v2/src\App.css:162:}
v2/src\App.css:163:
v2/src\App.css:164:.ticks {
v2/src\App.css:165:  position: relative;
v2/src\App.css:166:  width: 100%;
v2/src\App.css:167:
v2/src\App.css:168:  &::before,
v2/src\App.css:169:  &::after {
v2/src\App.css:170:    content: '';
v2/src\App.css:171:    position: absolute;
v2/src\App.css:172:    top: -4.5px;
v2/src\App.css:173:    border: 5px solid transparent;
v2/src\App.css:174:  }
v2/src\App.css:175:
v2/src\App.css:176:  &::before {
v2/src\App.css:177:    left: 0;
v2/src\App.css:178:    border-left-color: var(--border);
v2/src\App.css:179:  }
v2/src\App.css:180:  &::after {
v2/src\App.css:181:    right: 0;
v2/src\App.css:182:    border-right-color: var(--border);
v2/src\App.css:183:  }
v2/src\App.css:184:}
v2/src\index.css:1::root {
v2/src\index.css:2:  --text: #6b6375;
v2/src\index.css:3:  --text-h: #08060d;
v2/src\index.css:4:  --bg: #fff;
v2/src\index.css:5:  --border: #e5e4e7;
v2/src\index.css:6:  --code-bg: #f4f3ec;
v2/src\index.css:7:  --accent: #aa3bff;
v2/src\index.css:8:  --accent-bg: rgba(170, 59, 255, 0.1);
v2/src\index.css:9:  --accent-border: rgba(170, 59, 255, 0.5);
v2/src\index.css:10:  --social-bg: rgba(244, 243, 236, 0.5);
v2/src\index.css:11:  --shadow:
v2/src\index.css:12:    rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;
v2/src\index.css:13:
v2/src\index.css:14:  --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
v2/src\index.css:15:  --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
v2/src\index.css:16:  --mono: ui-monospace, Consolas, monospace;
v2/src\index.css:17:
v2/src\index.css:18:  font: 18px/145% var(--sans);
v2/src\index.css:19:  letter-spacing: 0.18px;
v2/src\index.css:20:  color-scheme: light dark;
v2/src\index.css:21:  color: var(--text);
v2/src\index.css:22:  background: var(--bg);
v2/src\index.css:23:  font-synthesis: none;
v2/src\index.css:24:  text-rendering: optimizeLegibility;
v2/src\index.css:25:  -webkit-font-smoothing: antialiased;
v2/src\index.css:26:  -moz-osx-font-smoothing: grayscale;
v2/src\index.css:27:
v2/src\index.css:28:  @media (max-width: 1024px) {
v2/src\index.css:29:    font-size: 16px;
v2/src\index.css:30:  }
v2/src\index.css:31:}
v2/src\index.css:32:
v2/src\index.css:33:@media (prefers-color-scheme: dark) {
v2/src\index.css:34:  :root {
v2/src\index.css:35:    --text: #9ca3af;
v2/src\index.css:36:    --text-h: #f3f4f6;
v2/src\index.css:37:    --bg: #16171d;
v2/src\index.css:38:    --border: #2e303a;
v2/src\index.css:39:    --code-bg: #1f2028;
v2/src\index.css:40:    --accent: #c084fc;
v2/src\index.css:41:    --accent-bg: rgba(192, 132, 252, 0.15);
v2/src\index.css:42:    --accent-border: rgba(192, 132, 252, 0.5);
v2/src\index.css:43:    --social-bg: rgba(47, 48, 58, 0.5);
v2/src\index.css:44:    --shadow:
v2/src\index.css:45:      rgba(0, 0, 0, 0.4) 0 10px 15px -3px, rgba(0, 0, 0, 0.25) 0 4px 6px -2px;
v2/src\index.css:46:  }
v2/src\index.css:47:
v2/src\index.css:48:  #social .button-icon {
v2/src\index.css:49:    filter: invert(1) brightness(2);
v2/src\index.css:50:  }
v2/src\index.css:51:}
v2/src\index.css:52:
v2/src\index.css:53:#root {
v2/src\index.css:54:  width: 1126px;
v2/src\index.css:55:  max-width: 100%;
v2/src\index.css:56:  margin: 0 auto;
v2/src\index.css:57:  text-align: center;
v2/src\index.css:58:  border-inline: 1px solid var(--border);
v2/src\index.css:59:  min-height: 100svh;
v2/src\index.css:60:  display: flex;
v2/src\index.css:61:  flex-direction: column;
v2/src\index.css:62:  box-sizing: border-box;
v2/src\index.css:63:}
v2/src\index.css:64:
v2/src\index.css:65:body {
v2/src\index.css:66:  margin: 0;
v2/src\index.css:67:}
v2/src\index.css:68:
v2/src\index.css:69:h1,
v2/src\index.css:70:h2 {
v2/src\index.css:71:  font-family: var(--heading);
v2/src\index.css:72:  font-weight: 500;
v2/src\index.css:73:  color: var(--text-h);
v2/src\index.css:74:}
v2/src\index.css:75:
v2/src\index.css:76:h1 {
v2/src\index.css:77:  font-size: 56px;
v2/src\index.css:78:  letter-spacing: -1.68px;
v2/src\index.css:79:  margin: 32px 0;
v2/src\index.css:80:  @media (max-width: 1024px) {
v2/src\index.css:81:    font-size: 36px;
v2/src\index.css:82:    margin: 20px 0;
v2/src\index.css:83:  }
v2/src\index.css:84:}
v2/src\index.css:85:h2 {
v2/src\index.css:86:  font-size: 24px;
v2/src\index.css:87:  line-height: 118%;
v2/src\index.css:88:  letter-spacing: -0.24px;
v2/src\index.css:89:  margin: 0 0 8px;
v2/src\index.css:90:  @media (max-width: 1024px) {
v2/src\index.css:91:    font-size: 20px;
v2/src\index.css:92:  }
v2/src\index.css:93:}
v2/src\index.css:94:p {
v2/src\index.css:95:  margin: 0;
v2/src\index.css:96:}
v2/src\index.css:97:
v2/src\index.css:98:code,
v2/src\index.css:99:.counter {
v2/src\index.css:100:  font-family: var(--mono);
v2/src\index.css:101:  display: inline-flex;
v2/src\index.css:102:  border-radius: 4px;
v2/src\index.css:103:  color: var(--text-h);
v2/src\index.css:104:}
v2/src\index.css:105:
v2/src\index.css:106:code {
v2/src\index.css:107:  font-size: 15px;
v2/src\index.css:108:  line-height: 135%;
v2/src\index.css:109:  padding: 4px 8px;
v2/src\index.css:110:  background: var(--code-bg);
v2/src\index.css:111:}
v2/src\assets\vite.svg:1:<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
v2/src\main.tsx:1:import { StrictMode } from "react";
v2/src\main.tsx:2:import { createRoot } from "react-dom/client";
v2/src\main.tsx:3:import "./styles/globals.css";
v2/src\main.tsx:4:import App from "./App";
v2/src\main.tsx:5:
v2/src\main.tsx:6:createRoot(document.getElementById("root")!).render(
v2/src\main.tsx:7:  <StrictMode>
v2/src\main.tsx:8:    <App />
v2/src\main.tsx:9:  </StrictMode>
v2/src\main.tsx:10:);
v2/src\assets\react.svg:1:<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
v2/src\hooks\useCityViews.ts:1:import { useCallback, useSyncExternalStore } from "react";
v2/src\hooks\useCityViews.ts:2:
v2/src\hooks\useCityViews.ts:3:const KEY_PREFIX = "views:";
v2/src\hooks\useCityViews.ts:4:const listeners = new Set<() => void>();
v2/src\hooks\useCityViews.ts:5:
v2/src\hooks\useCityViews.ts:6:const subscribe = (listener: () => void): (() => void) => {
v2/src\hooks\useCityViews.ts:7:  listeners.add(listener);
v2/src\hooks\useCityViews.ts:8:  return () => listeners.delete(listener);
v2/src\hooks\useCityViews.ts:9:};
v2/src\hooks\useCityViews.ts:10:
v2/src\hooks\useCityViews.ts:11:const notify = () => listeners.forEach((listener) => listener());
v2/src\hooks\useCityViews.ts:12:
v2/src\hooks\useCityViews.ts:13:const readCount = (cityId: string): number => {
v2/src\hooks\useCityViews.ts:14:  const stored = Number(localStorage.getItem(KEY_PREFIX + cityId) ?? 0);
v2/src\hooks\useCityViews.ts:15:  return Number.isFinite(stored) ? stored : 0;
v2/src\hooks\useCityViews.ts:16:};
v2/src\hooks\useCityViews.ts:17:
v2/src\hooks\useCityViews.ts:18:export function useCityViewCount(cityId: string, baseViews: number): number {
v2/src\hooks\useCityViews.ts:19:  const stored = useSyncExternalStore(
v2/src\hooks\useCityViews.ts:20:    subscribe,
v2/src\hooks\useCityViews.ts:21:    () => readCount(cityId),
v2/src\hooks\useCityViews.ts:22:    () => 0
v2/src\hooks\useCityViews.ts:23:  );
v2/src\hooks\useCityViews.ts:24:  return baseViews + stored;
v2/src\hooks\useCityViews.ts:25:}
v2/src\hooks\useCityViews.ts:26:
v2/src\hooks\useCityViews.ts:27:export function useRecordCityView(): (cityId: string) => void {
v2/src\hooks\useCityViews.ts:28:  return useCallback((cityId: string) => {
v2/src\hooks\useCityViews.ts:29:    const next = readCount(cityId) + 1;
v2/src\hooks\useCityViews.ts:30:    localStorage.setItem(KEY_PREFIX + cityId, String(next));
v2/src\hooks\useCityViews.ts:31:    notify();
v2/src\hooks\useCityViews.ts:32:  }, []);
v2/src\hooks\useCityViews.ts:33:}
v2/src\lib\format.ts:1:const numberFormatter = new Intl.NumberFormat("en-US");
v2/src\lib\format.ts:2:
v2/src\lib\format.ts:3:export const formatNumber = (value: number): string => numberFormatter.format(value);
v2/src\hooks\useLanguage.ts:1:import { useCallback, useEffect, useState } from "react";
v2/src\hooks\useLanguage.ts:2:import type { Lang } from "../data/i18n";
v2/src\hooks\useLanguage.ts:3:
v2/src\hooks\useLanguage.ts:4:const STORAGE_KEY = "chinaAtlasLanguage";
v2/src\hooks\useLanguage.ts:5:
v2/src\hooks\useLanguage.ts:6:const readInitial = (): Lang => {
v2/src\hooks\useLanguage.ts:7:  if (typeof window === "undefined") return "en";
v2/src\hooks\useLanguage.ts:8:  const stored = window.localStorage.getItem(STORAGE_KEY);
v2/src\hooks\useLanguage.ts:9:  return stored === "zh" ? "zh" : "en";
v2/src\hooks\useLanguage.ts:10:};
v2/src\hooks\useLanguage.ts:11:
v2/src\hooks\useLanguage.ts:12:export function useLanguage(): {
v2/src\hooks\useLanguage.ts:13:  lang: Lang;
v2/src\hooks\useLanguage.ts:14:  setLang: (next: Lang) => void;
v2/src\hooks\useLanguage.ts:15:} {
v2/src\hooks\useLanguage.ts:16:  const [lang, setLangState] = useState<Lang>(readInitial);
v2/src\hooks\useLanguage.ts:17:
v2/src\hooks\useLanguage.ts:18:  useEffect(() => {
v2/src\hooks\useLanguage.ts:19:    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
v2/src\hooks\useLanguage.ts:20:  }, [lang]);
v2/src\hooks\useLanguage.ts:21:
v2/src\hooks\useLanguage.ts:22:  const setLang = useCallback((next: Lang) => {
v2/src\hooks\useLanguage.ts:23:    setLangState(next);
v2/src\hooks\useLanguage.ts:24:    window.localStorage.setItem(STORAGE_KEY, next);
v2/src\hooks\useLanguage.ts:25:  }, []);
v2/src\hooks\useLanguage.ts:26:
v2/src\hooks\useLanguage.ts:27:  return { lang, setLang };
v2/src\hooks\useLanguage.ts:28:}
v2/src\lib\i18n.ts:1:import { i18n, type Lang } from "../data/i18n";
v2/src\lib\i18n.ts:2:
v2/src\lib\i18n.ts:3:export const translate = (lang: Lang, key: string): string =>
v2/src\lib\i18n.ts:4:  i18n[lang]?.[key] ?? i18n.en[key] ?? key;
v2/src\data\i18n.ts:1:export type Lang = "en" | "zh";
v2/src\data\i18n.ts:2:
v2/src\data\i18n.ts:3:export const i18n: Record<Lang, Record<string, string>> = {
v2/src\data\i18n.ts:4:  en: {
v2/src\data\i18n.ts:5:    brandSubtitle: "中国城市与博物馆索引",
v2/src\data\i18n.ts:6:    navAtlas: "Atlas",
v2/src\data\i18n.ts:7:    navVideo: "Video",
v2/src\data\i18n.ts:8:    navMuseums: "Museums",
v2/src\data\i18n.ts:9:    navSources: "Sources",
v2/src\data\i18n.ts:10:    searchPlaceholder: "Search city, county, town, village, scenic area",
v2/src\data\i18n.ts:11:    searchButton: "Search",
v2/src\data\i18n.ts:12:    searchNoMatch: "No matching place in the current demo index.",
v2/src\data\i18n.ts:13:    searchJumped: "Map jumped to",
v2/src\data\i18n.ts:14:    fullMapLabel: "Full China Map",
v2/src\data\i18n.ts:15:    fullMapTitle: "China province-level map",
v2/src\data\i18n.ts:16:    mapStatus: "Official base map",
v2/src\data\i18n.ts:17:    mapHint: "Click a province on the official map. The province will pop out and the full map will dim.",
v2/src\data\i18n.ts:18:    mapHintReady: "Province map is open. Use Reset to return to the full China map.",
v2/src\data\i18n.ts:19:    mapHintPending: "This province is listed on the map. City and museum data are not connected yet.",
v2/src\data\i18n.ts:20:    mapCredit: "Official base map: Standard Map Service System, GS(2022)4309.",
v2/src\data\i18n.ts:21:    historyVideoTitle: "China Historical Evolution Video",
v2/src\data\i18n.ts:22:    historyVideoBody:
v2/src\data\i18n.ts:23:      "A video position for explaining China through dynasties, capitals, borders, routes, museums, and cultural exchange before users explore cities.",
v2/src\data\i18n.ts:24:    historyVideoMeta: "Official video: Discover a China Beyond Your Imagination",
v2/src\data\i18n.ts:25:    historyVideoSource: "Official source: Chinaculture.org",
v2/src\data\i18n.ts:26:    atlasTitle: "Administrative Atlas",
v2/src\data\i18n.ts:27:    atlasBody: "Click a province-level region to list cities. City pins open museum-first profiles.",
v2/src\data\i18n.ts:28:    provinceMode: "Province",
v2/src\data\i18n.ts:29:    cityMode: "City",
v2/src\data\i18n.ts:30:    provinceLevelRegions: "Province-level regions",
v2/src\data\i18n.ts:31:    currentView: "Current View",
v2/src\data\i18n.ts:32:    famousAttractions: "Famous attractions",
v2/src\data\i18n.ts:33:    scenicEntry: "Scenic entry",
v2/src\data\i18n.ts:34:    museumEntry: "Museum entry",
v2/src\data\i18n.ts:35:    provinceDataPending: "Famous attraction data for this province is not connected yet.",
v2/src\data\i18n.ts:36:    reset: "Reset",
v2/src\data\i18n.ts:37:    selectCity: "Select a city",
v2/src\data\i18n.ts:38:    selectCityBody:
v2/src\data\i18n.ts:39:      "The city profile will show the museum entry point, real visitor signals, official source status, and historical direction.",
v2/src\data\i18n.ts:40:    close: "Close",
v2/src\data\i18n.ts:41:    startHere: "Start here",
v2/src\data\i18n.ts:42:    pageViews: "Page views",
v2/src\data\i18n.ts:43:    visitorNotes: "Visitor notes",
v2/src\data\i18n.ts:44:    lastVerified: "Last verified",
v2/src\data\i18n.ts:45:    englishAccess: "English access",
v2/src\data\i18n.ts:46:    historicalIdentity: "Historical identity",
v2/src\data\i18n.ts:47:    thenExplore: "Then explore",
v2/src\data\i18n.ts:48:    sourcePolicy: "Source policy",
v2/src\data\i18n.ts:49:    sourcePolicyBody:
v2/src\data\i18n.ts:50:      "Official facts require source links. Visitor notes require explicit contributor authorization. Images are omitted unless licensed or contributed.",
v2/src\data\i18n.ts:51:    museumTitle: "Museum-first Page Template",
v2/src\data\i18n.ts:52:    museumBody:
v2/src\data\i18n.ts:53:      "Every city starts with the institution that explains its origin, timeline, people, and material culture.",
v2/src\data\i18n.ts:54:    flowOneTitle: "City Museum",
v2/src\data\i18n.ts:55:    flowOneBody: "Main city museum, provincial museum, archaeological site museum, or history hall.",
v2/src\data\i18n.ts:56:    flowTwoTitle: "Historical Context",
v2/src\data\i18n.ts:57:    flowTwoBody: "Dynasties, trade routes, wars, migration, local industries, and cultural identity.",
v2/src\data\i18n.ts:58:    flowThreeTitle: "Visitor Reality",
v2/src\data\i18n.ts:59:    flowThreeBody: "Passport booking, English labels, crowd level, access issues, and current notes.",
v2/src\data\i18n.ts:60:    flowFourTitle: "Explore After",
v2/src\data\i18n.ts:61:    flowFourBody: "Nearby historical sites, old streets, temples, relic parks, and heritage locations.",
v2/src\data\i18n.ts:62:    sourcesTitle: "Image and Source Rules",
v2/src\data\i18n.ts:63:    sourcesBody:
v2/src\data\i18n.ts:64:      "This template intentionally uses no scraped web photos. Production pages should use official facts, authorized visitor notes, licensed images, and visible attribution.",
v2/src\data\i18n.ts:65:    ruleOne: "Official text is used for factual extraction, not copied as prose.",
v2/src\data\i18n.ts:66:    ruleTwo: "AI summaries must trace important claims back to source records.",
v2/src\data\i18n.ts:67:    ruleThree: "Visitor notes require permission to publish and translate.",
v2/src\data\i18n.ts:68:    ruleFour: "Images need ownership, open license, or written authorization.",
v2/src\data\i18n.ts:69:    footerNote: "China Atlas template. Demo data only.",
v2/src\data\i18n.ts:70:    backToTop: "Back to top",
v2/src\data\i18n.ts:71:    cityProfiles: "city profiles",
v2/src\data\i18n.ts:72:    views: "views",
v2/src\data\i18n.ts:73:    viewIn3D: "View in 3D",
v2/src\data\i18n.ts:74:    exit3D: "Exit 3D"
v2/src\data\i18n.ts:75:  },
v2/src\data\i18n.ts:76:  zh: {
v2/src\data\i18n.ts:77:    brandSubtitle: "中国城市与博物馆索引",
v2/src\data\i18n.ts:78:    navAtlas: "地图",
v2/src\data\i18n.ts:79:    navVideo: "视频",
v2/src\data\i18n.ts:80:    navMuseums: "博物馆",
v2/src\data\i18n.ts:81:    navSources: "来源",
v2/src\data\i18n.ts:82:    searchPlaceholder: "搜索城市、县、镇、村、景区",
v2/src\data\i18n.ts:83:    searchButton: "搜索",
v2/src\data\i18n.ts:84:    searchNoMatch: "当前演示索引里没有匹配地点。",
v2/src\data\i18n.ts:85:    searchJumped: "地图已跳转到",
v2/src\data\i18n.ts:86:    fullMapLabel: "完整中国地图",
v2/src\data\i18n.ts:87:    fullMapTitle: "中国省级地图",
v2/src\data\i18n.ts:88:    mapStatus: "官方底图",
v2/src\data\i18n.ts:89:    mapHint: "点击官方地图上的省级区域，省份将浮出，全图淡化为背景。",
v2/src\data\i18n.ts:90:    mapHintReady: "省份地图已展开，点击重置可回到完整中国地图。",
v2/src\data\i18n.ts:91:    mapHintPending: "该省份已列入地图，但城市和博物馆数据尚未接入。",
v2/src\data\i18n.ts:92:    mapCredit: "官方底图：标准地图服务系统，审图号 GS(2022)4309号。",
v2/src\data\i18n.ts:93:    historyVideoTitle: "中国历史演变视频",
v2/src\data\i18n.ts:94:    historyVideoBody:
v2/src\data\i18n.ts:95:      "这里用于插入视频，用朝代、都城、疆域、路线、博物馆和文化交流解释中国，再让用户进入城市探索。",
v2/src\data\i18n.ts:96:    historyVideoMeta: "官方视频：Discover a China Beyond Your Imagination",
v2/src\data\i18n.ts:97:    historyVideoSource: "官方来源：Chinaculture.org",
v2/src\data\i18n.ts:98:    atlasTitle: "行政区划地图",
v2/src\data\i18n.ts:99:    atlasBody: "点击省级地区查看城市列表，再点击城市打开博物馆优先档案。",
v2/src\data\i18n.ts:100:    provinceMode: "省份",
v2/src\data\i18n.ts:101:    cityMode: "城市",
v2/src\data\i18n.ts:102:    provinceLevelRegions: "省级地区",
v2/src\data\i18n.ts:103:    currentView: "当前视图",
v2/src\data\i18n.ts:104:    famousAttractions: "著名景点",
v2/src\data\i18n.ts:105:    scenicEntry: "景区入口",
v2/src\data\i18n.ts:106:    museumEntry: "博物馆入口",
v2/src\data\i18n.ts:107:    provinceDataPending: "该省著名景点数据尚未接入。",
v2/src\data\i18n.ts:108:    reset: "重置",
v2/src\data\i18n.ts:109:    selectCity: "选择城市",
v2/src\data\i18n.ts:110:    selectCityBody: "城市档案会展示博物馆入口、真实浏览信号、官方来源状态和历史脉络。",
v2/src\data\i18n.ts:111:    close: "关闭",
v2/src\data\i18n.ts:112:    startHere: "从这里开始",
v2/src\data\i18n.ts:113:    pageViews: "页面浏览",
v2/src\data\i18n.ts:114:    visitorNotes: "游客笔记",
v2/src\data\i18n.ts:115:    lastVerified: "最后核验",
v2/src\data\i18n.ts:116:    englishAccess: "英文友好度",
v2/src\data\i18n.ts:117:    historicalIdentity: "历史定位",
v2/src\data\i18n.ts:118:    thenExplore: "随后探索",
v2/src\data\i18n.ts:119:    sourcePolicy: "来源规则",
v2/src\data\i18n.ts:120:    sourcePolicyBody: "官方事实必须保留来源链接。游客笔记必须取得投稿授权。图片无授权或开放许可时不展示。",
v2/src\data\i18n.ts:121:    museumTitle: "博物馆优先页面模板",
v2/src\data\i18n.ts:122:    museumBody: "每座城市先从解释其起源、时间线、人物和物质文化的机构开始。",
v2/src\data\i18n.ts:123:    flowOneTitle: "城市博物馆",
v2/src\data\i18n.ts:124:    flowOneBody: "市级博物馆、省级博物馆、考古遗址博物馆或地方文史馆。",
v2/src\data\i18n.ts:125:    flowTwoTitle: "历史脉络",
v2/src\data\i18n.ts:126:    flowTwoBody: "朝代、商路、战争、移民、地方产业和文化身份。",
v2/src\data\i18n.ts:127:    flowThreeTitle: "真实体验",
v2/src\data\i18n.ts:128:    flowThreeBody: "护照预约、英文展签、人流情况、交通难度和最新反馈。",
v2/src\data\i18n.ts:129:    flowFourTitle: "继续探索",
v2/src\data\i18n.ts:130:    flowFourBody: "附近历史遗址、老街、寺庙、文物公园和文化遗产地点。",
v2/src\data\i18n.ts:131:    sourcesTitle: "图片与来源规则",
v2/src\data\i18n.ts:132:    sourcesBody: "此模板故意不使用抓取来的网络图片。正式页面应使用官方事实、授权游客笔记、合规图片和可见署名。",
v2/src\data\i18n.ts:133:    ruleOne: "官方文字只提取事实，不直接复制成正文。",
v2/src\data\i18n.ts:134:    ruleTwo: "AI 摘要中的关键事实必须能追溯到来源记录。",
v2/src\data\i18n.ts:135:    ruleThree: "游客笔记必须获得发布和翻译授权。",
v2/src\data\i18n.ts:136:    ruleFour: "图片必须具备所有权、开放许可或书面授权。",
v2/src\data\i18n.ts:137:    footerNote: "China Atlas 模板。当前为演示数据。",
v2/src\data\i18n.ts:138:    backToTop: "回到顶部",
v2/src\data\i18n.ts:139:    cityProfiles: "个城市档案",
v2/src\data\i18n.ts:140:    views: "次浏览",
v2/src\data\i18n.ts:141:    viewIn3D: "查看 3D 模型",
v2/src\data\i18n.ts:142:    exit3D: "退出 3D"
v2/src\data\i18n.ts:143:  }
v2/src\data\i18n.ts:144:};
v2/src\data\i18n.ts:145:
v2/src\data\i18n.ts:146:export const typeLabels: Record<Lang, Record<string, string>> = {
v2/src\data\i18n.ts:147:  en: { Municipality: "Municipality", Province: "Province" },
v2/src\data\i18n.ts:148:  zh: { Municipality: "直辖市", Province: "省" }
v2/src\data\i18n.ts:149:};
v2/src\data\i18n.ts:150:
v2/src\data\i18n.ts:151:export const accessLabels: Record<Lang, Record<string, string>> = {
v2/src\data\i18n.ts:152:  en: { High: "High", Medium: "Medium", Low: "Low" },
v2/src\data\i18n.ts:153:  zh: { High: "高", Medium: "中", Low: "低" }
v2/src\data\i18n.ts:154:};
v2/src\data\i18n.ts:155:
v2/src\data\i18n.ts:156:export const statusLabels: Record<Lang, Record<string, string>> = {
v2/src\data\i18n.ts:157:  en: {
v2/src\data\i18n.ts:158:    "Official facts pending": "Official facts pending",
v2/src\data\i18n.ts:159:    "Needs visitor notes": "Needs visitor notes",
v2/src\data\i18n.ts:160:    "Needs review": "Needs review"
v2/src\data\i18n.ts:161:  },
v2/src\data\i18n.ts:162:  zh: {
v2/src\data\i18n.ts:163:    "Official facts pending": "官方资料待核验",
v2/src\data\i18n.ts:164:    "Needs visitor notes": "需要游客笔记",
v2/src\data\i18n.ts:165:    "Needs review": "需要复核"
v2/src\data\i18n.ts:166:  }
v2/src\data\i18n.ts:167:};
v2/src\data\i18n.ts:168:
v2/src\data\i18n.ts:169:export const placeTypeLabels: Record<Lang, Record<string, string>> = {
v2/src\data\i18n.ts:170:  en: {
v2/src\data\i18n.ts:171:    province: "Province",
v2/src\data\i18n.ts:172:    city: "City",
v2/src\data\i18n.ts:173:    county: "County",
v2/src\data\i18n.ts:174:    town: "Town",
v2/src\data\i18n.ts:175:    village: "Village",
v2/src\data\i18n.ts:176:    museum: "Museum",
v2/src\data\i18n.ts:177:    site: "Scenic area"
v2/src\data\i18n.ts:178:  },
v2/src\data\i18n.ts:179:  zh: {
v2/src\data\i18n.ts:180:    province: "省级地区",
v2/src\data\i18n.ts:181:    city: "城市",
v2/src\data\i18n.ts:182:    county: "县区",
v2/src\data\i18n.ts:183:    town: "镇",
v2/src\data\i18n.ts:184:    village: "村",
v2/src\data\i18n.ts:185:    museum: "博物馆",
v2/src\data\i18n.ts:186:    site: "景区"
v2/src\data\i18n.ts:187:  }
v2/src\data\i18n.ts:188:};
v2/src\data\atlas.ts:1:export type CityRecord = {
v2/src\data\atlas.ts:2:  id: string;
v2/src\data\atlas.ts:3:  name: string;
v2/src\data\atlas.ts:4:  zh: string;
v2/src\data\atlas.ts:5:  province: string;
v2/src\data\atlas.ts:6:  museum: string;
v2/src\data\atlas.ts:7:  museumZh: string;
v2/src\data\atlas.ts:8:  museumRole: string;
v2/src\data\atlas.ts:9:  museumRoleZh: string;
v2/src\data\atlas.ts:10:  history: string;
v2/src\data\atlas.ts:11:  historyZh: string;
v2/src\data\atlas.ts:12:  sites: string[];
v2/src\data\atlas.ts:13:  sitesZh: string[];
v2/src\data\atlas.ts:14:  baseViews: number;
v2/src\data\atlas.ts:15:  notes: number;
v2/src\data\atlas.ts:16:  verified: string;
v2/src\data\atlas.ts:17:  access: "High" | "Medium" | "Low";
v2/src\data\atlas.ts:18:  status: "Official facts pending" | "Needs visitor notes" | "Needs review";
v2/src\data\atlas.ts:19:};
v2/src\data\atlas.ts:20:
v2/src\data\atlas.ts:21:export type ProvinceRecord = {
v2/src\data\atlas.ts:22:  id: string;
v2/src\data\atlas.ts:23:  name: string;
v2/src\data\atlas.ts:24:  zh: string;
v2/src\data\atlas.ts:25:  type: "Municipality" | "Province";
v2/src\data\atlas.ts:26:  color: string;
v2/src\data\atlas.ts:27:  cities: CityRecord[];
v2/src\data\atlas.ts:28:};
v2/src\data\atlas.ts:29:
v2/src\data\atlas.ts:30:export const atlasData: ProvinceRecord[] = [
v2/src\data\atlas.ts:31:  {
v2/src\data\atlas.ts:32:    id: "beijing",
v2/src\data\atlas.ts:33:    name: "Beijing",
v2/src\data\atlas.ts:34:    zh: "北京",
v2/src\data\atlas.ts:35:    type: "Municipality",
v2/src\data\atlas.ts:36:    color: "red",
v2/src\data\atlas.ts:37:    cities: [
v2/src\data\atlas.ts:38:      {
v2/src\data\atlas.ts:39:        id: "beijing-city",
v2/src\data\atlas.ts:40:        name: "Beijing",
v2/src\data\atlas.ts:41:        zh: "北京市",
v2/src\data\atlas.ts:42:        province: "Beijing",
v2/src\data\atlas.ts:43:        museum: "Capital Museum / Beijing Grand Canal Museum",
v2/src\data\atlas.ts:44:        museumZh: "首都博物馆 / 北京大运河博物馆",
v2/src\data\atlas.ts:45:        museumRole:
v2/src\data\atlas.ts:46:          "The first stop for understanding Beijing as an imperial capital, political center, and living city shaped by ritual, walls, waterways, and modern institutions.",
v2/src\data\atlas.ts:47:        museumRoleZh:
v2/src\data\atlas.ts:48:          "理解北京作为帝都、政治中心和生活城市的第一入口，可看到礼制、城墙、水系和现代机构如何共同塑造这座城市。",
v2/src\data\atlas.ts:49:        history:
v2/src\data\atlas.ts:50:          "Beijing is one of China's most important historical capitals, with layers from Yuan Dadu, Ming and Qing imperial planning, Republican-era transitions, and contemporary national institutions.",
v2/src\data\atlas.ts:51:        historyZh: "北京是中国最重要的历史都城之一，层次包括元大都、明清都城规划、近现代转型以及当代国家机构。",
v2/src\data\atlas.ts:52:        sites: ["Forbidden City", "Temple of Heaven", "Beijing Central Axis", "Beijing City Wall remains"],
v2/src\data\atlas.ts:53:        sitesZh: ["故宫", "天坛", "北京中轴线", "北京城墙遗存"],
v2/src\data\atlas.ts:54:        baseViews: 18642,
v2/src\data\atlas.ts:55:        notes: 42,
v2/src\data\atlas.ts:56:        verified: "2026-05",
v2/src\data\atlas.ts:57:        access: "Medium",
v2/src\data\atlas.ts:58:        status: "Official facts pending"
v2/src\data\atlas.ts:59:      }
v2/src\data\atlas.ts:60:    ]
v2/src\data\atlas.ts:61:  },
v2/src\data\atlas.ts:62:  {
v2/src\data\atlas.ts:63:    id: "shanghai",
v2/src\data\atlas.ts:64:    name: "Shanghai",
v2/src\data\atlas.ts:65:    zh: "上海",
v2/src\data\atlas.ts:66:    type: "Municipality",
v2/src\data\atlas.ts:67:    color: "blue",
v2/src\data\atlas.ts:68:    cities: [
v2/src\data\atlas.ts:69:      {
v2/src\data\atlas.ts:70:        id: "shanghai-city",
v2/src\data\atlas.ts:71:        name: "Shanghai",
v2/src\data\atlas.ts:72:        zh: "上海市",
v2/src\data\atlas.ts:73:        province: "Shanghai",
v2/src\data\atlas.ts:74:        museum: "Shanghai Museum / Shanghai History Museum",
v2/src\data\atlas.ts:75:        museumZh: "上海博物馆 / 上海市历史博物馆",
v2/src\data\atlas.ts:76:        museumRole:
v2/src\data\atlas.ts:77:          "A practical entry point for understanding Jiangnan culture, port-city growth, modern urban life, and Shanghai's role in global exchange.",
v2/src\data\atlas.ts:78:        museumRoleZh: "理解江南文化、港口城市成长、近现代都市生活以及上海参与全球交流的实用入口。",
v2/src\data\atlas.ts:79:        history:
v2/src\data\atlas.ts:80:          "Shanghai grew from a Jiangnan county and port into a treaty-port metropolis, then a central city of modern industry, finance, publishing, cinema, and urban culture.",
v2/src\data\atlas.ts:81:        historyZh: "上海从江南县城和港口发展为通商口岸都市，随后成为现代工业、金融、出版、电影和城市文化的重要中心。",
v2/src\data\atlas.ts:82:        sites: ["Shanghai History Museum", "Yu Garden area", "The Bund", "Former French Concession streets"],
v2/src\data\atlas.ts:83:        sitesZh: ["上海市历史博物馆", "豫园片区", "外滩", "原法租界街区"],
v2/src\data\atlas.ts:84:        baseViews: 14380,
v2/src\data\atlas.ts:85:        notes: 37,
v2/src\data\atlas.ts:86:        verified: "2026-05",
v2/src\data\atlas.ts:87:        access: "High",
v2/src\data\atlas.ts:88:        status: "Needs visitor notes"
v2/src\data\atlas.ts:89:      }
v2/src\data\atlas.ts:90:    ]
v2/src\data\atlas.ts:91:  },
v2/src\data\atlas.ts:92:  {
v2/src\data\atlas.ts:93:    id: "shaanxi",
v2/src\data\atlas.ts:94:    name: "Shaanxi",
v2/src\data\atlas.ts:95:    zh: "陕西",
v2/src\data\atlas.ts:96:    type: "Province",
v2/src\data\atlas.ts:97:    color: "gold",
v2/src\data\atlas.ts:98:    cities: [
v2/src\data\atlas.ts:99:      {
v2/src\data\atlas.ts:100:        id: "xian",
v2/src\data\atlas.ts:101:        name: "Xi'an",
v2/src\data\atlas.ts:102:        zh: "西安",
v2/src\data\atlas.ts:103:        province: "Shaanxi",
v2/src\data\atlas.ts:104:        museum: "Shaanxi History Museum / Xi'an Museum",
v2/src\data\atlas.ts:105:        museumZh: "陕西历史博物馆 / 西安博物院",
v2/src\data\atlas.ts:106:        museumRole:
v2/src\data\atlas.ts:107:          "The clearest starting point for Zhou, Qin, Han, Tang, Chang'an urban history, Silk Road exchange, and imperial material culture.",
v2/src\data\atlas.ts:108:        museumRoleZh: "理解周秦汉唐、长安城市史、丝绸之路交流和帝国物质文化的清晰入口。",
v2/src\data\atlas.ts:109:        history:
v2/src\data\atlas.ts:110:          "Xi'an sits near the core of ancient Chang'an, one of the great capitals of Chinese history and a key anchor for understanding early imperial statecraft and Silk Road exchange.",
v2/src\data\atlas.ts:111:        historyZh: "西安位于古代长安核心区域附近，是中国历史上重要都城之一，也是理解早期帝国制度和丝绸之路交流的关键城市。",
v2/src\data\atlas.ts:112:        sites: ["Terracotta Army", "Xi'an City Wall", "Big Wild Goose Pagoda", "Daming Palace site"],
v2/src\data\atlas.ts:113:        sitesZh: ["秦始皇兵马俑", "西安城墙", "大雁塔", "大明宫遗址"],
v2/src\data\atlas.ts:114:        baseViews: 16890,
v2/src\data\atlas.ts:115:        notes: 51,
v2/src\data\atlas.ts:116:        verified: "2026-05",
v2/src\data\atlas.ts:117:        access: "Medium",
v2/src\data\atlas.ts:118:        status: "Official facts pending"
v2/src\data\atlas.ts:119:      },
v2/src\data\atlas.ts:120:      {
v2/src\data\atlas.ts:121:        id: "xianyang",
v2/src\data\atlas.ts:122:        name: "Xianyang",
v2/src\data\atlas.ts:123:        zh: "咸阳",
v2/src\data\atlas.ts:124:        province: "Shaanxi",
v2/src\data\atlas.ts:125:        museum: "Xianyang Museum",
v2/src\data\atlas.ts:126:        museumZh: "咸阳博物院",
v2/src\data\atlas.ts:127:        museumRole: "Useful for understanding Qin imperial foundations and the political geography surrounding the ancient capital region.",
v2/src\data\atlas.ts:128:        museumRoleZh: "适合理解秦帝国基础，以及古都区域周边的政治地理。",
v2/src\data\atlas.ts:129:        history:
v2/src\data\atlas.ts:130:          "Xianyang is closely associated with the Qin state and Qin dynasty, making it a strong context city for understanding the rise of China's first imperial order.",
v2/src\data\atlas.ts:131:        historyZh: "咸阳与秦国、秦朝关系密切，是理解中国第一个大一统帝国兴起的重要背景城市。",
v2/src\data\atlas.ts:132:        sites: ["Han Yang Ling Museum", "Qianling area", "Qin and Han heritage sites"],
v2/src\data\atlas.ts:133:        sitesZh: ["汉阳陵博物院", "乾陵片区", "秦汉遗址"],
v2/src\data\atlas.ts:134:        baseViews: 4280,
v2/src\data\atlas.ts:135:        notes: 9,
v2/src\data\atlas.ts:136:        verified: "2026-04",
v2/src\data\atlas.ts:137:        access: "Low",
v2/src\data\atlas.ts:138:        status: "Needs review"
v2/src\data\atlas.ts:139:      },
v2/src\data\atlas.ts:140:      {
v2/src\data\atlas.ts:141:        id: "yanan",
v2/src\data\atlas.ts:142:        name: "Yan'an",
v2/src\data\atlas.ts:143:        zh: "延安",
v2/src\data\atlas.ts:144:        province: "Shaanxi",
v2/src\data\atlas.ts:145:        museum: "Yan'an Revolutionary Memorial Hall",
v2/src\data\atlas.ts:146:        museumZh: "延安革命纪念馆",
v2/src\data\atlas.ts:147:        museumRole: "The starting point for modern revolutionary history and the political memory of twentieth-century China.",
v2/src\data\atlas.ts:148:        museumRoleZh: "理解中国近现代革命史和二十世纪政治记忆的起点。",
v2/src\data\atlas.ts:149:        history:
v2/src\data\atlas.ts:150:          "Yan'an is central to understanding the Chinese revolutionary period and the narratives, institutions, and landscapes associated with the Communist base area.",
v2/src\data\atlas.ts:151:        historyZh: "延安是理解中国革命时期、根据地叙事、制度建设和相关历史景观的核心城市。",
v2/src\data\atlas.ts:152:        sites: ["Yangjialing", "Zaoyuan", "Pagoda Hill"],
v2/src\data\atlas.ts:153:        sitesZh: ["杨家岭", "枣园", "宝塔山"],
v2/src\data\atlas.ts:154:        baseViews: 3120,
v2/src\data\atlas.ts:155:        notes: 7,
v2/src\data\atlas.ts:156:        verified: "2026-04",
v2/src\data\atlas.ts:157:        access: "Low",
v2/src\data\atlas.ts:158:        status: "Needs visitor notes"
v2/src\data\atlas.ts:159:      }
v2/src\data\atlas.ts:160:    ]
v2/src\data\atlas.ts:161:  },
v2/src\data\atlas.ts:162:  {
v2/src\data\atlas.ts:163:    id: "henan",
v2/src\data\atlas.ts:164:    name: "Henan",
v2/src\data\atlas.ts:165:    zh: "河南",
v2/src\data\atlas.ts:166:    type: "Province",
v2/src\data\atlas.ts:167:    color: "jade",
v2/src\data\atlas.ts:168:    cities: [
v2/src\data\atlas.ts:169:      {
v2/src\data\atlas.ts:170:        id: "luoyang",
v2/src\data\atlas.ts:171:        name: "Luoyang",
v2/src\data\atlas.ts:172:        zh: "洛阳",
v2/src\data\atlas.ts:173:        province: "Henan",
v2/src\data\atlas.ts:174:        museum: "Luoyang Museum / Erlitou Site Museum",
v2/src\data\atlas.ts:175:        museumZh: "洛阳博物馆 / 二里头夏都遗址博物馆",
v2/src\data\atlas.ts:176:        museumRole: "A strong entry point for the Central Plains, ancient capitals, ritual bronzes, early states, and Buddhist art.",
v2/src\data\atlas.ts:177:        museumRoleZh: "理解中原、古都、礼器青铜、早期国家和佛教艺术的重要入口。",
v2/src\data\atlas.ts:178:        history:
v2/src\data\atlas.ts:179:          "Luoyang is one of China's major ancient capitals, connected with the Xia-related Erlitou site, Eastern Zhou, Han-Wei urban history, Sui-Tang Luoyang, and Longmen Buddhist art.",
v2/src\data\atlas.ts:180:        historyZh: "洛阳是中国重要古都之一，关联二里头、东周、汉魏洛阳城、隋唐洛阳城和龙门佛教艺术。",
v2/src\data\atlas.ts:181:        sites: ["Longmen Grottoes", "White Horse Temple", "Sui-Tang Luoyang City site", "Erlitou Site Museum"],
v2/src\data\atlas.ts:182:        sitesZh: ["龙门石窟", "白马寺", "隋唐洛阳城遗址", "二里头夏都遗址博物馆"],
v2/src\data\atlas.ts:183:        baseViews: 9240,
v2/src\data\atlas.ts:184:        notes: 28,
v2/src\data\atlas.ts:185:        verified: "2026-05",
v2/src\data\atlas.ts:186:        access: "Medium",
v2/src\data\atlas.ts:187:        status: "Official facts pending"
v2/src\data\atlas.ts:188:      },
v2/src\data\atlas.ts:189:      {
v2/src\data\atlas.ts:190:        id: "kaifeng",
v2/src\data\atlas.ts:191:        name: "Kaifeng",
v2/src\data\atlas.ts:192:        zh: "开封",
v2/src\data\atlas.ts:193:        province: "Henan",
v2/src\data\atlas.ts:194:        museum: "Kaifeng Museum",
v2/src\data\atlas.ts:195:        museumZh: "开封博物馆",
v2/src\data\atlas.ts:196:        museumRole: "Best first stop for Northern Song urban history, river management, trade, and capital culture.",
v2/src\data\atlas.ts:197:        museumRoleZh: "理解北宋城市史、河流治理、商业贸易和都城文化的第一站。",
v2/src\data\atlas.ts:198:        history:
v2/src\data\atlas.ts:199:          "Kaifeng is strongly associated with the Northern Song capital Bianjing, a city of commerce, administration, literature, and dense urban life.",
v2/src\data\atlas.ts:200:        historyZh: "开封与北宋都城汴京紧密相关，是商业、行政、文学和繁华城市生活的重要代表。",
v2/src\data\atlas.ts:201:        sites: ["Dragon Pavilion area", "Iron Pagoda", "Daxiangguo Temple", "Ancient city remains"],
v2/src\data\atlas.ts:202:        sitesZh: ["龙亭片区", "铁塔", "大相国寺", "古城遗存"],
v2/src\data\atlas.ts:203:        baseViews: 6110,
v2/src\data\atlas.ts:204:        notes: 18,
v2/src\data\atlas.ts:205:        verified: "2026-04",
v2/src\data\atlas.ts:206:        access: "Low",
v2/src\data\atlas.ts:207:        status: "Needs review"
v2/src\data\atlas.ts:208:      },
v2/src\data\atlas.ts:209:      {
v2/src\data\atlas.ts:210:        id: "anyang",
v2/src\data\atlas.ts:211:        name: "Anyang",
v2/src\data\atlas.ts:212:        zh: "安阳",
v2/src\data\atlas.ts:213:        province: "Henan",
v2/src\data\atlas.ts:214:        museum: "Yinxu Museum",
v2/src\data\atlas.ts:215:        museumZh: "殷墟博物馆",
v2/src\data\atlas.ts:216:        museumRole: "The direct entry point for oracle bones, Shang royal archaeology, bronze culture, and early Chinese writing.",
v2/src\data\atlas.ts:217:        museumRoleZh: "理解甲骨文、商王朝考古、青铜文化和早期汉字的直接入口。",
v2/src\data\atlas.ts:218:        history:
v2/src\data\atlas.ts:219:          "Anyang is essential for understanding the late Shang capital at Yinxu, oracle bone inscriptions, early state ritual, and archaeological evidence for ancient China.",
v2/src\data\atlas.ts:220:        historyZh: "安阳对于理解殷墟晚商都城、甲骨刻辞、早期国家礼制和中国古代考古证据非常关键。",
v2/src\data\atlas.ts:221:        sites: ["Yinxu", "National Museum of Chinese Writing", "Fu Hao Tomb area"],
v2/src\data\atlas.ts:222:        sitesZh: ["殷墟", "中国文字博物馆", "妇好墓片区"],
v2/src\data\atlas.ts:223:        baseViews: 5480,
v2/src\data\atlas.ts:224:        notes: 15,
v2/src\data\atlas.ts:225:        verified: "2026-04",
v2/src\data\atlas.ts:226:        access: "Medium",
v2/src\data\atlas.ts:227:        status: "Needs visitor notes"
v2/src\data\atlas.ts:228:      }
v2/src\data\atlas.ts:229:    ]
v2/src\data\atlas.ts:230:  },
v2/src\data\atlas.ts:231:  {
v2/src\data\atlas.ts:232:    id: "jiangsu",
v2/src\data\atlas.ts:233:    name: "Jiangsu",
v2/src\data\atlas.ts:234:    zh: "江苏",
v2/src\data\atlas.ts:235:    type: "Province",
v2/src\data\atlas.ts:236:    color: "blue",
v2/src\data\atlas.ts:237:    cities: [
v2/src\data\atlas.ts:238:      {
v2/src\data\atlas.ts:239:        id: "nanjing",
v2/src\data\atlas.ts:240:        name: "Nanjing",
v2/src\data\atlas.ts:241:        zh: "南京",
v2/src\data\atlas.ts:242:        province: "Jiangsu",
v2/src\data\atlas.ts:243:        museum: "Nanjing Museum / Six Dynasties Museum",
v2/src\data\atlas.ts:244:        museumZh: "南京博物院 / 六朝博物馆",
v2/src\data\atlas.ts:245:        museumRole: "The first stop for Six Dynasties culture, Ming capital history, Republican-era history, and Jiangnan material culture.",
v2/src\data\atlas.ts:246:        museumRoleZh: "理解六朝文化、明初都城、民国历史和江南物质文化的第一入口。",
v2/src\data\atlas.ts:247:        history:
v2/src\data\atlas.ts:248:          "Nanjing has served as a capital across several periods and is key to understanding southern dynastic culture, Ming statecraft, and modern Chinese political history.",
v2/src\data\atlas.ts:249:        historyZh: "南京在多个历史时期曾为都城，是理解南朝文化、明代国家建设和中国近现代政治史的重要城市。",
v2/src\data\atlas.ts:250:        sites: ["Ming Xiaoling Mausoleum", "Nanjing City Wall", "Presidential Palace", "Confucius Temple area"],
v2/src\data\atlas.ts:251:        sitesZh: ["明孝陵", "南京城墙", "总统府", "夫子庙片区"],
v2/src\data\atlas.ts:252:        baseViews: 12110,
v2/src\data\atlas.ts:253:        notes: 36,
v2/src\data\atlas.ts:254:        verified: "2026-05",
v2/src\data\atlas.ts:255:        access: "High",
v2/src\data\atlas.ts:256:        status: "Official facts pending"
v2/src\data\atlas.ts:257:      },
v2/src\data\atlas.ts:258:      {
v2/src\data\atlas.ts:259:        id: "suzhou",
v2/src\data\atlas.ts:260:        name: "Suzhou",
v2/src\data\atlas.ts:261:        zh: "苏州",
v2/src\data\atlas.ts:262:        province: "Jiangsu",
v2/src\data\atlas.ts:263:        museum: "Suzhou Museum",
v2/src\data\atlas.ts:264:        museumZh: "苏州博物馆",
v2/src\data\atlas.ts:265:        museumRole: "A concise entry into Wu culture, literati gardens, canal trade, silk, painting, and urban refinement.",
v2/src\data\atlas.ts:266:        museumRoleZh: "进入吴文化、文人园林、运河贸易、丝绸、绘画和城市审美的简洁入口。",
v2/src\data\atlas.ts:267:        history:
v2/src\data\atlas.ts:268:          "Suzhou is deeply tied to Jiangnan culture, classical gardens, canal networks, silk production, and elite urban life from the Song through Ming-Qing periods.",
v2/src\data\atlas.ts:269:        historyZh: "苏州与江南文化、古典园林、运河网络、丝绸生产，以及宋至明清以来的城市生活密切相关。",
v2/src\data\atlas.ts:270:        sites: ["Humble Administrator's Garden", "Pingjiang Road", "Suzhou section of the Grand Canal", "Tiger Hill"],
v2/src\data\atlas.ts:271:        sitesZh: ["拙政园", "平江路", "大运河苏州段", "虎丘"],
v2/src\data\atlas.ts:272:        baseViews: 10740,
v2/src\data\atlas.ts:273:        notes: 33,
v2/src\data\atlas.ts:274:        verified: "2026-05",
v2/src\data\atlas.ts:275:        access: "High",
v2/src\data\atlas.ts:276:        status: "Needs visitor notes"
v2/src\data\atlas.ts:277:      },
v2/src\data\atlas.ts:278:      {
v2/src\data\atlas.ts:279:        id: "yangzhou",
v2/src\data\atlas.ts:280:        name: "Yangzhou",
v2/src\data\atlas.ts:281:        zh: "扬州",
v2/src\data\atlas.ts:282:        province: "Jiangsu",
v2/src\data\atlas.ts:283:        museum: "Yangzhou Museum / China Grand Canal Museum",
v2/src\data\atlas.ts:284:        museumZh: "扬州博物馆 / 中国大运河博物馆",
v2/src\data\atlas.ts:285:        museumRole: "A strong starting point for Grand Canal culture, salt merchants, gardens, and Qing-era urban prosperity.",
v2/src\data\atlas.ts:286:        museumRoleZh: "理解大运河文化、盐商、园林和清代城市繁荣的强入口。",
v2/src\data\atlas.ts:287:        history:
v2/src\data\atlas.ts:288:          "Yangzhou is central to Grand Canal history, salt commerce, literary culture, gardens, and the movement of goods and people between north and south China.",
v2/src\data\atlas.ts:289:        historyZh: "扬州是理解大运河、盐业商业、文学文化、园林，以及南北物资与人员流动的重要城市。",
v2/src\data\atlas.ts:290:        sites: ["Slender West Lake", "Dongguan Street", "Ge Garden", "Grand Canal sites"],
v2/src\data\atlas.ts:291:        sitesZh: ["瘦西湖", "东关街", "个园", "大运河遗产点"],
v2/src\data\atlas.ts:292:        baseViews: 4660,
v2/src\data\atlas.ts:293:        notes: 12,
v2/src\data\atlas.ts:294:        verified: "2026-04",
v2/src\data\atlas.ts:295:        access: "Medium",
v2/src\data\atlas.ts:296:        status: "Needs review"
v2/src\data\atlas.ts:297:      }
v2/src\data\atlas.ts:298:    ]
v2/src\data\atlas.ts:299:  },
v2/src\data\atlas.ts:300:  {
v2/src\data\atlas.ts:301:    id: "sichuan",
v2/src\data\atlas.ts:302:    name: "Sichuan",
v2/src\data\atlas.ts:303:    zh: "四川",
v2/src\data\atlas.ts:304:    type: "Province",
v2/src\data\atlas.ts:305:    color: "jade",
v2/src\data\atlas.ts:306:    cities: [
v2/src\data\atlas.ts:307:      {
v2/src\data\atlas.ts:308:        id: "chengdu",
v2/src\data\atlas.ts:309:        name: "Chengdu",
v2/src\data\atlas.ts:310:        zh: "成都",
v2/src\data\atlas.ts:311:        province: "Sichuan",
v2/src\data\atlas.ts:312:        museum: "Chengdu Museum / Jinsha Site Museum",
v2/src\data\atlas.ts:313:        museumZh: "成都博物馆 / 金沙遗址博物馆",
v2/src\data\atlas.ts:314:        museumRole:
v2/src\data\atlas.ts:315:          "The first stop for ancient Shu culture, basin geography, urban life, local crafts, and the relationship between Chengdu and Sichuan's wider cultural landscape.",
v2/src\data\atlas.ts:316:        museumRoleZh: "理解古蜀文化、盆地地理、城市生活、地方工艺，以及成都与四川整体文化景观关系的第一入口。",
v2/src\data\atlas.ts:317:        history:
v2/src\data\atlas.ts:318:          "Chengdu is a long-lived urban center in the Sichuan Basin, associated with ancient Shu civilization, Qin-Han integration, Shu Han memory, commerce, and everyday urban culture.",
v2/src\data\atlas.ts:319:        historyZh: "成都是四川盆地长期延续的城市中心，关联古蜀文明、秦汉整合、蜀汉记忆、商业和日常城市文化。",
v2/src\data\atlas.ts:320:        sites: ["Jinsha Site Museum", "Wuhou Shrine", "Du Fu Thatched Cottage", "Dujiangyan"],
v2/src\data\atlas.ts:321:        sitesZh: ["金沙遗址博物馆", "武侯祠", "杜甫草堂", "都江堰"],
v2/src\data\atlas.ts:322:        baseViews: 13320,
v2/src\data\atlas.ts:323:        notes: 40,
v2/src\data\atlas.ts:324:        verified: "2026-05",
v2/src\data\atlas.ts:325:        access: "High",
v2/src\data\atlas.ts:326:        status: "Official facts pending"
v2/src\data\atlas.ts:327:      },
v2/src\data\atlas.ts:328:      {
v2/src\data\atlas.ts:329:        id: "leshan",
v2/src\data\atlas.ts:330:        name: "Leshan",
v2/src\data\atlas.ts:331:        zh: "乐山",
v2/src\data\atlas.ts:332:        province: "Sichuan",
v2/src\data\atlas.ts:333:        museum: "Leshan Museum",
v2/src\data\atlas.ts:334:        museumZh: "乐山博物馆",
v2/src\data\atlas.ts:335:        museumRole: "A practical entry for river geography, Buddhist carving, local trade, and the wider Emei-Leshan heritage landscape.",
v2/src\data\atlas.ts:336:        museumRoleZh: "理解河流地理、佛教造像、地方贸易和峨眉山—乐山整体遗产景观的实用入口。",
v2/src\data\atlas.ts:337:        history:
v2/src\data\atlas.ts:338:          "Leshan is shaped by river confluences, Buddhist monumental art, and its relationship with Mount Emei and southwest travel routes.",
v2/src\data\atlas.ts:339:        historyZh: "乐山受到江河交汇、佛教大型造像、峨眉山关系和西南交通路线的共同塑造。",
v2/src\data\atlas.ts:340:        sites: ["Leshan Giant Buddha", "Mount Emei", "Lingyun Mountain area"],
v2/src\data\atlas.ts:341:        sitesZh: ["乐山大佛", "峨眉山", "凌云山片区"],
v2/src\data\atlas.ts:342:        baseViews: 7060,
v2/src\data\atlas.ts:343:        notes: 23,
v2/src\data\atlas.ts:344:        verified: "2026-04",
v2/src\data\atlas.ts:345:        access: "Medium",
v2/src\data\atlas.ts:346:        status: "Needs visitor notes"
v2/src\data\atlas.ts:347:      }
v2/src\data\atlas.ts:348:    ]
v2/src\data\atlas.ts:349:  }
v2/src\data\atlas.ts:350:];
v2/src\data\atlas.ts:351:
v2/src\data\atlas.ts:352:export type AdministrativeSeed = {
v2/src\data\atlas.ts:353:  zh: string;
v2/src\data\atlas.ts:354:  en: string;
v2/src\data\atlas.ts:355:  type: "county" | "town" | "village";
v2/src\data\atlas.ts:356:  provinceId: string;
v2/src\data\atlas.ts:357:  cityId?: string;
v2/src\data\atlas.ts:358:  aliases?: string[];
v2/src\data\atlas.ts:359:};
v2/src\data\atlas.ts:360:
v2/src\data\atlas.ts:361:export const administrativeSearchSeed: AdministrativeSeed[] = [
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
v2/src\data\atlas.ts:379:];
v2/src\data\atlas.ts:380:
v2/src\data\atlas.ts:381:export const provinceAttractionSeed: Record<string, Array<{ zh: string; en: string }>> = {
v2/src\data\atlas.ts:382:  beijing: [
v2/src\data\atlas.ts:383:    { zh: "故宫", en: "Forbidden City" },
v2/src\data\atlas.ts:384:    { zh: "天坛", en: "Temple of Heaven" },
v2/src\data\atlas.ts:385:    { zh: "北京中轴线", en: "Beijing Central Axis" }
v2/src\data\atlas.ts:386:  ],
v2/src\data\atlas.ts:387:  tianjin: [
v2/src\data\atlas.ts:388:    { zh: "五大道", en: "Five Great Avenues" },
v2/src\data\atlas.ts:389:    { zh: "古文化街", en: "Ancient Culture Street" },
v2/src\data\atlas.ts:390:    { zh: "天津博物馆", en: "Tianjin Museum" }
v2/src\data\atlas.ts:391:  ],
v2/src\data\atlas.ts:392:  hebei: [
v2/src\data\atlas.ts:393:    { zh: "承德避暑山庄", en: "Chengde Mountain Resort" },
v2/src\data\atlas.ts:394:    { zh: "山海关", en: "Shanhaiguan" },
v2/src\data\atlas.ts:395:    { zh: "西柏坡", en: "Xibaipo" }
v2/src\data\atlas.ts:396:  ],
v2/src\data\atlas.ts:397:  shanxi: [
v2/src\data\atlas.ts:398:    { zh: "云冈石窟", en: "Yungang Grottoes" },
v2/src\data\atlas.ts:399:    { zh: "平遥古城", en: "Pingyao Ancient City" },
v2/src\data\atlas.ts:400:    { zh: "五台山", en: "Mount Wutai" }
v2/src\data\atlas.ts:401:  ],
v2/src\data\atlas.ts:402:  "inner-mongolia": [
v2/src\data\atlas.ts:403:    { zh: "呼伦贝尔草原", en: "Hulunbuir Grassland" },
v2/src\data\atlas.ts:404:    { zh: "成吉思汗陵", en: "Mausoleum of Genghis Khan" },
v2/src\data\atlas.ts:405:    { zh: "响沙湾", en: "Xiangshawan" }
v2/src\data\atlas.ts:406:  ],
v2/src\data\atlas.ts:407:  liaoning: [
v2/src\data\atlas.ts:408:    { zh: "沈阳故宫", en: "Shenyang Palace Museum" },
v2/src\data\atlas.ts:409:    { zh: "大连老虎滩", en: "Dalian Tiger Beach" },
v2/src\data\atlas.ts:410:    { zh: "本溪水洞", en: "Benxi Water Cave" }
v2/src\data\atlas.ts:411:  ],
v2/src\data\atlas.ts:412:  jilin: [
v2/src\data\atlas.ts:413:    { zh: "长白山", en: "Changbai Mountain" },
v2/src\data\atlas.ts:414:    { zh: "伪满皇宫博物院", en: "Museum of the Imperial Palace of Manchukuo" },
v2/src\data\atlas.ts:415:    { zh: "净月潭", en: "Jingyuetan" }
v2/src\data\atlas.ts:416:  ],
v2/src\data\atlas.ts:417:  heilongjiang: [
v2/src\data\atlas.ts:418:    { zh: "哈尔滨中央大街", en: "Harbin Central Street" },
v2/src\data\atlas.ts:419:    { zh: "圣索菲亚教堂", en: "Saint Sophia Cathedral" },
v2/src\data\atlas.ts:420:    { zh: "太阳岛", en: "Sun Island" },
v2/src\data\atlas.ts:421:    { zh: "五大连池", en: "Wudalianchi" },
v2/src\data\atlas.ts:422:    { zh: "镜泊湖", en: "Jingpo Lake" }
v2/src\data\atlas.ts:423:  ],
v2/src\data\atlas.ts:424:  shanghai: [
v2/src\data\atlas.ts:425:    { zh: "外滩", en: "The Bund" },
v2/src\data\atlas.ts:426:    { zh: "豫园", en: "Yu Garden" },
v2/src\data\atlas.ts:427:    { zh: "上海博物馆", en: "Shanghai Museum" }
v2/src\data\atlas.ts:428:  ],
v2/src\data\atlas.ts:429:  jiangsu: [
v2/src\data\atlas.ts:430:    { zh: "明孝陵", en: "Ming Xiaoling Mausoleum" },
v2/src\data\atlas.ts:431:    { zh: "苏州园林", en: "Classical Gardens of Suzhou" },
v2/src\data\atlas.ts:432:    { zh: "中国大运河博物馆", en: "China Grand Canal Museum" }
v2/src\data\atlas.ts:433:  ],
v2/src\data\atlas.ts:434:  zhejiang: [
v2/src\data\atlas.ts:435:    { zh: "西湖", en: "West Lake" },
v2/src\data\atlas.ts:436:    { zh: "乌镇", en: "Wuzhen" },
v2/src\data\atlas.ts:437:    { zh: "普陀山", en: "Mount Putuo" }
v2/src\data\atlas.ts:438:  ],
v2/src\data\atlas.ts:439:  anhui: [
v2/src\data\atlas.ts:440:    { zh: "黄山", en: "Mount Huangshan" },
v2/src\data\atlas.ts:441:    { zh: "宏村", en: "Hongcun" },
v2/src\data\atlas.ts:442:    { zh: "西递", en: "Xidi" }
v2/src\data\atlas.ts:443:  ],
v2/src\data\atlas.ts:444:  fujian: [
v2/src\data\atlas.ts:445:    { zh: "武夷山", en: "Wuyi Mountain" },
v2/src\data\atlas.ts:446:    { zh: "福建土楼", en: "Fujian Tulou" },
v2/src\data\atlas.ts:447:    { zh: "鼓浪屿", en: "Gulangyu" }
v2/src\data\atlas.ts:448:  ],
v2/src\data\atlas.ts:449:  jiangxi: [
v2/src\data\atlas.ts:450:    { zh: "庐山", en: "Mount Lu" },
v2/src\data\atlas.ts:451:    { zh: "景德镇", en: "Jingdezhen" },
v2/src\data\atlas.ts:452:    { zh: "滕王阁", en: "Tengwang Pavilion" }
v2/src\data\atlas.ts:453:  ],
v2/src\data\atlas.ts:454:  shandong: [
v2/src\data\atlas.ts:455:    { zh: "泰山", en: "Mount Tai" },
v2/src\data\atlas.ts:456:    { zh: "曲阜三孔", en: "Three Confucian Sites in Qufu" },
v2/src\data\atlas.ts:457:    { zh: "蓬莱阁", en: "Penglai Pavilion" }
v2/src\data\atlas.ts:458:  ],
v2/src\data\atlas.ts:459:  henan: [
v2/src\data\atlas.ts:460:    { zh: "龙门石窟", en: "Longmen Grottoes" },
v2/src\data\atlas.ts:461:    { zh: "殷墟", en: "Yinxu" },
v2/src\data\atlas.ts:462:    { zh: "少林寺", en: "Shaolin Temple" }
v2/src\data\atlas.ts:463:  ],
v2/src\data\atlas.ts:464:  hubei: [
v2/src\data\atlas.ts:465:    { zh: "黄鹤楼", en: "Yellow Crane Tower" },
v2/src\data\atlas.ts:466:    { zh: "武当山", en: "Wudang Mountains" },
v2/src\data\atlas.ts:467:    { zh: "湖北省博物馆", en: "Hubei Provincial Museum" }
v2/src\data\atlas.ts:468:  ],
v2/src\data\atlas.ts:469:  hunan: [
v2/src\data\atlas.ts:470:    { zh: "张家界国家森林公园", en: "Zhangjiajie National Forest Park" },
v2/src\data\atlas.ts:471:    { zh: "凤凰古城", en: "Fenghuang Ancient Town" },
v2/src\data\atlas.ts:472:    { zh: "岳麓书院", en: "Yuelu Academy" }
v2/src\data\atlas.ts:473:  ],
v2/src\data\atlas.ts:474:  guangdong: [
v2/src\data\atlas.ts:475:    { zh: "广州塔", en: "Canton Tower" },
v2/src\data\atlas.ts:476:    { zh: "陈家祠", en: "Chen Clan Ancestral Hall" },
v2/src\data\atlas.ts:477:    { zh: "开平碉楼", en: "Kaiping Diaolou" }
v2/src\data\atlas.ts:478:  ],
v2/src\data\atlas.ts:479:  guangxi: [
v2/src\data\atlas.ts:480:    { zh: "桂林漓江", en: "Li River" },
v2/src\data\atlas.ts:481:    { zh: "阳朔", en: "Yangshuo" },
v2/src\data\atlas.ts:482:    { zh: "德天瀑布", en: "Detian Waterfall" }
v2/src\data\atlas.ts:483:  ],
v2/src\data\atlas.ts:484:  hainan: [
v2/src\data\atlas.ts:485:    { zh: "亚龙湾", en: "Yalong Bay" },
v2/src\data\atlas.ts:486:    { zh: "蜈支洲岛", en: "Wuzhizhou Island" },
v2/src\data\atlas.ts:487:    { zh: "海口骑楼老街", en: "Haikou Qilou Old Street" }
v2/src\data\atlas.ts:488:  ],
v2/src\data\atlas.ts:489:  chongqing: [
v2/src\data\atlas.ts:490:    { zh: "洪崖洞", en: "Hongya Cave" },
v2/src\data\atlas.ts:491:    { zh: "大足石刻", en: "Dazu Rock Carvings" },
v2/src\data\atlas.ts:492:    { zh: "磁器口古镇", en: "Ciqikou Ancient Town" }
v2/src\data\atlas.ts:493:  ],
v2/src\data\atlas.ts:494:  sichuan: [
v2/src\data\atlas.ts:495:    { zh: "都江堰", en: "Dujiangyan" },
v2/src\data\atlas.ts:496:    { zh: "乐山大佛", en: "Leshan Giant Buddha" },
v2/src\data\atlas.ts:497:    { zh: "九寨沟", en: "Jiuzhaigou" }
v2/src\data\atlas.ts:498:  ],
v2/src\data\atlas.ts:499:  guizhou: [
v2/src\data\atlas.ts:500:    { zh: "黄果树瀑布", en: "Huangguoshu Waterfall" },
v2/src\data\atlas.ts:501:    { zh: "西江千户苗寨", en: "Xijiang Miao Village" },
v2/src\data\atlas.ts:502:    { zh: "梵净山", en: "Fanjing Mountain" }
v2/src\data\atlas.ts:503:  ],
v2/src\data\atlas.ts:504:  yunnan: [
v2/src\data\atlas.ts:505:    { zh: "丽江古城", en: "Old Town of Lijiang" },
v2/src\data\atlas.ts:506:    { zh: "大理古城", en: "Dali Old Town" },
v2/src\data\atlas.ts:507:    { zh: "石林", en: "Stone Forest" }
v2/src\data\atlas.ts:508:  ],
v2/src\data\atlas.ts:509:  tibet: [
v2/src\data\atlas.ts:510:    { zh: "布达拉宫", en: "Potala Palace" },
v2/src\data\atlas.ts:511:    { zh: "大昭寺", en: "Jokhang Temple" },
v2/src\data\atlas.ts:512:    { zh: "纳木错", en: "Namtso" }
v2/src\data\atlas.ts:513:  ],
v2/src\data\atlas.ts:514:  shaanxi: [
v2/src\data\atlas.ts:515:    { zh: "秦始皇兵马俑", en: "Terracotta Army" },
v2/src\data\atlas.ts:516:    { zh: "西安城墙", en: "Xi'an City Wall" },
v2/src\data\atlas.ts:517:    { zh: "陕西历史博物馆", en: "Shaanxi History Museum" }
v2/src\data\atlas.ts:518:  ],
v2/src\data\atlas.ts:519:  gansu: [
v2/src\data\atlas.ts:520:    { zh: "莫高窟", en: "Mogao Caves" },
v2/src\data\atlas.ts:521:    { zh: "嘉峪关", en: "Jiayuguan Pass" },
v2/src\data\atlas.ts:522:    { zh: "张掖丹霞", en: "Zhangye Danxia" }
v2/src\data\atlas.ts:523:  ],
v2/src\data\atlas.ts:524:  qinghai: [
v2/src\data\atlas.ts:525:    { zh: "青海湖", en: "Qinghai Lake" },
v2/src\data\atlas.ts:526:    { zh: "塔尔寺", en: "Kumbum Monastery" },
v2/src\data\atlas.ts:527:    { zh: "茶卡盐湖", en: "Chaka Salt Lake" }
v2/src\data\atlas.ts:528:  ],
v2/src\data\atlas.ts:529:  ningxia: [
v2/src\data\atlas.ts:530:    { zh: "沙坡头", en: "Shapotou" },
v2/src\data\atlas.ts:531:    { zh: "西夏陵", en: "Western Xia Mausoleums" },
v2/src\data\atlas.ts:532:    { zh: "水洞沟", en: "Shuidonggou" }
v2/src\data\atlas.ts:533:  ],
v2/src\data\atlas.ts:534:  xinjiang: [
v2/src\data\atlas.ts:535:    { zh: "天山天池", en: "Heavenly Lake of Tianshan" },
v2/src\data\atlas.ts:536:    { zh: "喀纳斯", en: "Kanas Lake" },
v2/src\data\atlas.ts:537:    { zh: "喀什古城", en: "Kashgar Old City" }
v2/src\data\atlas.ts:538:  ],
v2/src\data\atlas.ts:539:  "hong-kong": [
v2/src\data\atlas.ts:540:    { zh: "太平山顶", en: "Victoria Peak" },
v2/src\data\atlas.ts:541:    { zh: "天星小轮", en: "Star Ferry" },
v2/src\data\atlas.ts:542:    { zh: "香港故宫文化博物馆", en: "Hong Kong Palace Museum" }
v2/src\data\atlas.ts:543:  ],
v2/src\data\atlas.ts:544:  macau: [
v2/src\data\atlas.ts:545:    { zh: "大三巴牌坊", en: "Ruins of St. Paul's" },
v2/src\data\atlas.ts:546:    { zh: "议事亭前地", en: "Senado Square" },
v2/src\data\atlas.ts:547:    { zh: "妈阁庙", en: "A-Ma Temple" }
v2/src\data\atlas.ts:548:  ],
v2/src\data\atlas.ts:549:  taiwan: [
v2/src\data\atlas.ts:550:    { zh: "台北故宫博物院", en: "National Palace Museum" },
v2/src\data\atlas.ts:551:    { zh: "日月潭", en: "Sun Moon Lake" },
v2/src\data\atlas.ts:552:    { zh: "阿里山", en: "Alishan" }
v2/src\data\atlas.ts:553:  ]
v2/src\data\atlas.ts:554:};
v2/src\data\map-sources.ts:1:export type ProvinceHitArea = {
v2/src\data\map-sources.ts:2:  id: string;
v2/src\data\map-sources.ts:3:  en: string;
v2/src\data\map-sources.ts:4:  zh: string;
v2/src\data\map-sources.ts:5:  /** Approximate centre x in % of full-China image width */
v2/src\data\map-sources.ts:6:  x: number;
v2/src\data\map-sources.ts:7:  /** Approximate centre y in % of full-China image height */
v2/src\data\map-sources.ts:8:  y: number;
v2/src\data\map-sources.ts:9:  /** Width in % */
v2/src\data\map-sources.ts:10:  w: number;
v2/src\data\map-sources.ts:11:  /** Height in % */
v2/src\data\map-sources.ts:12:  h: number;
v2/src\data\map-sources.ts:13:};
v2/src\data\map-sources.ts:14:
v2/src\data\map-sources.ts:15:export const provinceHitAreas: ProvinceHitArea[] = [
v2/src\data\map-sources.ts:16:  { id: "xinjiang", en: "Xinjiang", zh: "新疆", x: 26, y: 36, w: 24, h: 26 },
v2/src\data\map-sources.ts:17:  { id: "tibet", en: "Tibet", zh: "西藏", x: 25, y: 61, w: 27, h: 22 },
v2/src\data\map-sources.ts:18:  { id: "qinghai", en: "Qinghai", zh: "青海", x: 41, y: 56, w: 15, h: 15 },
v2/src\data\map-sources.ts:19:  { id: "gansu", en: "Gansu", zh: "甘肃", x: 49, y: 46, w: 13, h: 14 },
v2/src\data\map-sources.ts:20:  { id: "ningxia", en: "Ningxia", zh: "宁夏", x: 55, y: 43, w: 5, h: 7 },
v2/src\data\map-sources.ts:21:  { id: "inner-mongolia", en: "Inner Mongolia", zh: "内蒙古", x: 63, y: 32, w: 28, h: 18 },
v2/src\data\map-sources.ts:22:  { id: "heilongjiang", en: "Heilongjiang", zh: "黑龙江", x: 78, y: 20, w: 18, h: 15 },
v2/src\data\map-sources.ts:23:  { id: "jilin", en: "Jilin", zh: "吉林", x: 78, y: 32, w: 9, h: 8 },
v2/src\data\map-sources.ts:24:  { id: "liaoning", en: "Liaoning", zh: "辽宁", x: 75, y: 39, w: 9, h: 8 },
v2/src\data\map-sources.ts:25:  { id: "beijing", en: "Beijing", zh: "北京", x: 68, y: 42, w: 4, h: 4 },
v2/src\data\map-sources.ts:26:  { id: "tianjin", en: "Tianjin", zh: "天津", x: 70, y: 44, w: 4, h: 4 },
v2/src\data\map-sources.ts:27:  { id: "hebei", en: "Hebei", zh: "河北", x: 67, y: 46, w: 9, h: 9 },
v2/src\data\map-sources.ts:28:  { id: "shanxi", en: "Shanxi", zh: "山西", x: 63, y: 47, w: 7, h: 10 },
v2/src\data\map-sources.ts:29:  { id: "shaanxi", en: "Shaanxi", zh: "陕西", x: 59, y: 51, w: 8, h: 12 },
v2/src\data\map-sources.ts:30:  { id: "henan", en: "Henan", zh: "河南", x: 65, y: 54, w: 9, h: 9 },
v2/src\data\map-sources.ts:31:  { id: "shandong", en: "Shandong", zh: "山东", x: 72, y: 51, w: 9, h: 7 },
v2/src\data\map-sources.ts:32:  { id: "jiangsu", en: "Jiangsu", zh: "江苏", x: 73, y: 57, w: 8, h: 9 },
v2/src\data\map-sources.ts:33:  { id: "anhui", en: "Anhui", zh: "安徽", x: 69, y: 60, w: 8, h: 10 },
v2/src\data\map-sources.ts:34:  { id: "hubei", en: "Hubei", zh: "湖北", x: 63, y: 61, w: 10, h: 9 },
v2/src\data\map-sources.ts:35:  { id: "sichuan", en: "Sichuan", zh: "四川", x: 53, y: 64, w: 14, h: 14 },
v2/src\data\map-sources.ts:36:  { id: "chongqing", en: "Chongqing", zh: "重庆", x: 59, y: 65, w: 6, h: 7 },
v2/src\data\map-sources.ts:37:  { id: "hunan", en: "Hunan", zh: "湖南", x: 64, y: 69, w: 8, h: 10 },
v2/src\data\map-sources.ts:38:  { id: "jiangxi", en: "Jiangxi", zh: "江西", x: 70, y: 69, w: 8, h: 10 },
v2/src\data\map-sources.ts:39:  { id: "zhejiang", en: "Zhejiang", zh: "浙江", x: 75, y: 66, w: 7, h: 8 },
v2/src\data\map-sources.ts:40:  { id: "shanghai", en: "Shanghai", zh: "上海", x: 78, y: 59, w: 4, h: 4 },
v2/src\data\map-sources.ts:41:  { id: "fujian", en: "Fujian", zh: "福建", x: 73, y: 75, w: 8, h: 10 },
v2/src\data\map-sources.ts:42:  { id: "guizhou", en: "Guizhou", zh: "贵州", x: 57, y: 73, w: 9, h: 9 },
v2/src\data\map-sources.ts:43:  { id: "yunnan", en: "Yunnan", zh: "云南", x: 50, y: 78, w: 12, h: 15 },
v2/src\data\map-sources.ts:44:  { id: "guangxi", en: "Guangxi", zh: "广西", x: 61, y: 79, w: 10, h: 10 },
v2/src\data\map-sources.ts:45:  { id: "guangdong", en: "Guangdong", zh: "广东", x: 68, y: 80, w: 12, h: 9 },
v2/src\data\map-sources.ts:46:  { id: "hainan", en: "Hainan", zh: "海南", x: 64, y: 91, w: 5, h: 5 },
v2/src\data\map-sources.ts:47:  { id: "hong-kong", en: "Hong Kong", zh: "香港", x: 72, y: 82, w: 3, h: 3 },
v2/src\data\map-sources.ts:48:  { id: "macau", en: "Macau", zh: "澳门", x: 70, y: 82, w: 3, h: 3 },
v2/src\data\map-sources.ts:49:  { id: "taiwan", en: "Taiwan", zh: "台湾", x: 79, y: 75, w: 6, h: 10 }
v2/src\data\map-sources.ts:50:];
v2/src\data\map-sources.ts:51:
v2/src\data\map-sources.ts:52:export const fullChinaMapSrc = "/assets/china-map-gs2022-4309.jpg";
v2/src\data\map-sources.ts:53:
v2/src\data\map-sources.ts:54:export const provinceTextureSrc = (provinceId: string) =>
v2/src\data\map-sources.ts:55:  `/assets/province-map-textures/${provinceId}.png`;
v2/src\data\map-sources.ts:56:
v2/src\data\map-sources.ts:57:export const officialMapCredit = "GS(2022)4309";
v2/src\data\map-sources.ts:58:
v2/src\data\map-sources.ts:59:export const officialProvinceMapEndpoint =
v2/src\data\map-sources.ts:60:  "https://bzdt.tianditu.gov.cn/iserver/services/map-2200_China_Map/rest/maps/2200%E4%B8%87%E8%87%AA%E5%8A%A9%E5%88%B6%E5%9B%BE/image.png";
v2/src\data\map-sources.ts:61:
v2/src\data\map-sources.ts:62:export type ProvinceBounds = { left: number; right: number; bottom: number; top: number };
v2/src\data\map-sources.ts:63:
v2/src\data\map-sources.ts:64:export const officialProvinceBounds: Record<string, ProvinceBounds> = {
v2/src\data\map-sources.ts:65:  xinjiang: { left: -3032441.53, right: -1095560.84, bottom: 4013419.31, top: 5519261.34 },
v2/src\data\map-sources.ts:66:  tibet: { left: -2882534.85, right: -1040616.29, bottom: 2962762.13, top: 4178547.46 },
v2/src\data\map-sources.ts:67:  qinghai: { left: -1835055.56, right: -612083.66, bottom: 3444039.15, top: 4331644.9 },
v2/src\data\map-sources.ts:68:  gansu: { left: -1491215.4, right: -112713.32, bottom: 3475643.67, top: 4682283.18 },
v2/src\data\map-sources.ts:69:  ningxia: { left: -504506.31, right: -203525.02, bottom: 3770553.13, top: 4236435.59 },
v2/src\data\map-sources.ts:70:  "inner-mongolia": { left: -1036871.83, right: 1145761.66, bottom: 4021980.8, top: 5824342.47 },
v2/src\data\map-sources.ts:71:  heilongjiang: { left: 780015.14, right: 1846587.07, bottom: 4843626.39, top: 5865660.27 },
v2/src\data\map-sources.ts:72:  jilin: { left: 899328.46, right: 1692097.1, bottom: 4500493.69, top: 5081871.4 },
v2/src\data\map-sources.ts:73:  liaoning: { left: 732146.17, right: 1299136.85, bottom: 4208835.76, top: 4768536.48 },
v2/src\data\map-sources.ts:74:  beijing: { left: 457475.45, right: 624372.18, bottom: 4255681.44, top: 4438320.04 },
v2/src\data\map-sources.ts:75:  tianjin: { left: 571919.7, right: 682570.7, bottom: 4160698.69, top: 4348965.89 },
v2/src\data\map-sources.ts:76:  hebei: { left: 304313.42, right: 830519.25, bottom: 3863236.55, top: 4616713.01 },
v2/src\data\map-sources.ts:77:  shanxi: { left: 23286.77, right: 383195.26, bottom: 3689180.12, top: 4391002.08 },
v2/src\data\map-sources.ts:78:  shaanxi: { left: -413593.96, right: 107833.84, bottom: 3364465.74, top: 4253438.85 },
v2/src\data\map-sources.ts:79:  henan: { left: 32572.5, right: 603139.29, bottom: 3340938.75, top: 3894526.89 },
v2/src\data\map-sources.ts:80:  shandong: { left: 431224.49, right: 1101153.13, bottom: 3696141.86, top: 4125449.53 },
v2/src\data\map-sources.ts:81:  jiangsu: { left: 570739.53, right: 1108936.9, bottom: 3310867.27, top: 3788214.02 },
v2/src\data\map-sources.ts:82:  anhui: { left: 448683.13, right: 905226.53, bottom: 3137559.78, top: 3717298.96 },
v2/src\data\map-sources.ts:83:  hubei: { left: -154897.4, right: 585411.56, bottom: 3072268.07, top: 3538243.38 },
v2/src\data\map-sources.ts:84:  sichuan: { left: -1161673.21, right: -134304.7, bottom: 2765189.84, top: 3717970.63 },
v2/src\data\map-sources.ts:85:  chongqing: { left: -452010.48, right: 18937.26, bottom: 2966193.32, top: 3423037.52 },
v2/src\data\map-sources.ts:86:  hunan: { left: -121706.04, right: 421919.97, bottom: 2575984.25, top: 3187827.45 },
v2/src\data\map-sources.ts:87:  jiangxi: { left: 351746.12, right: 820820.93, bottom: 2568339.09, top: 3201359.39 },
v2/src\data\map-sources.ts:88:  zhejiang: { left: 771678.89, right: 1155409.96, bottom: 2907626.2, top: 3350021.18 },
v2/src\data\map-sources.ts:89:  shanghai: { left: 1022373.93, right: 1119414.86, bottom: 3310265.48, top: 3402302.89 },
v2/src\data\map-sources.ts:90:  fujian: { left: 589488.24, right: 1026850.39, bottom: 2484360.41, top: 3021531.41 },
v2/src\data\map-sources.ts:91:  guizhou: { left: -631422.1, right: -44202.72, bottom: 2582518.52, top: 3086858.03 },
v2/src\data\map-sources.ts:92:  yunnan: { left: -1269416.25, right: -390924.8, bottom: 2228423.99, top: 3144480.28 },
v2/src\data\map-sources.ts:93:  guangxi: { left: -562723.31, right: 209095.02, bottom: 2218039.46, top: 2768889.85 },
v2/src\data\map-sources.ts:94:  guangdong: { left: -35662.94, right: 733721, bottom: 2090661.16, top: 2677365.63 },
v2/src\data\map-sources.ts:95:  hainan: { left: -148669.65, right: 110738.03, bottom: 1866031, top: 2083103.51 },
v2/src\data\map-sources.ts:96:  "hong-kong": { left: 406816.38, right: 458023.17, bottom: 2322423.4, top: 2354059.1 },
v2/src\data\map-sources.ts:97:  macau: { left: 347654.34, right: 390296.84, bottom: 2289105.45, top: 2331747.95 },
v2/src\data\map-sources.ts:98:  taiwan: { left: 1035105.54, right: 1207740.72, bottom: 2334741.53, top: 2715823.31 }
v2/src\data\map-sources.ts:99:};
v2/src\data\map-sources.ts:100:
v2/src\data\map-sources.ts:101:export const cityMapPoints: Record<string, { x: number; y: number }> = {
v2/src\data\map-sources.ts:102:  "beijing-city": { x: 68.8, y: 43.6 },
v2/src\data\map-sources.ts:103:  "shanghai-city": { x: 78.4, y: 60.2 },
v2/src\data\map-sources.ts:104:  xian: { x: 62.2, y: 56.7 },
v2/src\data\map-sources.ts:105:  xianyang: { x: 61.4, y: 56.6 },
v2/src\data\map-sources.ts:106:  yanan: { x: 60.7, y: 52.4 },
v2/src\data\map-sources.ts:107:  luoyang: { x: 66.0, y: 56.0 },
v2/src\data\map-sources.ts:108:  kaifeng: { x: 68.0, y: 55.4 },
v2/src\data\map-sources.ts:109:  anyang: { x: 67.6, y: 52.7 },
v2/src\data\map-sources.ts:110:  nanjing: { x: 73.7, y: 59.2 },
v2/src\data\map-sources.ts:111:  suzhou: { x: 76.5, y: 60.3 },
v2/src\data\map-sources.ts:112:  yangzhou: { x: 74.6, y: 58.5 },
v2/src\data\map-sources.ts:113:  chengdu: { x: 57.0, y: 66.8 },
v2/src\data\map-sources.ts:114:  leshan: { x: 56.8, y: 69.6 }
v2/src\data\map-sources.ts:115:};
v2/src\lib\search.ts:1:import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
v2/src\lib\search.ts:2:import { provinceHitAreas } from "../data/map-sources";
v2/src\lib\search.ts:3:
v2/src\lib\search.ts:4:export type SearchRecord = {
v2/src\lib\search.ts:5:  zh: string;
v2/src\lib\search.ts:6:  en: string;
v2/src\lib\search.ts:7:  type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
v2/src\lib\search.ts:8:  provinceId: string;
v2/src\lib\search.ts:9:  cityId?: string;
v2/src\lib\search.ts:10:  aliases: string[];
v2/src\lib\search.ts:11:};
v2/src\lib\search.ts:12:
v2/src\lib\search.ts:13:const normalize = (value: string): string =>
v2/src\lib\search.ts:14:  value.toLowerCase().replace(/[·,，。.\s/]+/g, "").trim();
v2/src\lib\search.ts:15:
v2/src\lib\search.ts:16:const buildIndex = (): SearchRecord[] => {
v2/src\lib\search.ts:17:  const records: SearchRecord[] = [];
v2/src\lib\search.ts:18:
v2/src\lib\search.ts:19:  atlasData.forEach((province) => {
v2/src\lib\search.ts:20:    records.push({
v2/src\lib\search.ts:21:      zh: province.zh,
v2/src\lib\search.ts:22:      en: province.name,
v2/src\lib\search.ts:23:      type: "province",
v2/src\lib\search.ts:24:      provinceId: province.id,
v2/src\lib\search.ts:25:      aliases: [province.zh, province.name]
v2/src\lib\search.ts:26:    });
v2/src\lib\search.ts:27:
v2/src\lib\search.ts:28:    province.cities.forEach((city) => {
v2/src\lib\search.ts:29:      records.push({
v2/src\lib\search.ts:30:        zh: city.zh,
v2/src\lib\search.ts:31:        en: city.name,
v2/src\lib\search.ts:32:        type: "city",
v2/src\lib\search.ts:33:        provinceId: province.id,
v2/src\lib\search.ts:34:        cityId: city.id,
v2/src\lib\search.ts:35:        aliases: [city.zh, city.name, city.province]
v2/src\lib\search.ts:36:      });
v2/src\lib\search.ts:37:
v2/src\lib\search.ts:38:      [city.museum, city.museumZh].filter(Boolean).forEach((group) => {
v2/src\lib\search.ts:39:        group.split("/").map((s) => s.trim()).filter(Boolean).forEach((museum) => {
v2/src\lib\search.ts:40:          records.push({
v2/src\lib\search.ts:41:            zh: museum,
v2/src\lib\search.ts:42:            en: museum,
v2/src\lib\search.ts:43:            type: "museum",
v2/src\lib\search.ts:44:            provinceId: province.id,
v2/src\lib\search.ts:45:            cityId: city.id,
v2/src\lib\search.ts:46:            aliases: [museum]
v2/src\lib\search.ts:47:          });
v2/src\lib\search.ts:48:        });
v2/src\lib\search.ts:49:      });
v2/src\lib\search.ts:50:
v2/src\lib\search.ts:51:      city.sites.forEach((site, index) => {
v2/src\lib\search.ts:52:        const siteZh = city.sitesZh[index] || site;
v2/src\lib\search.ts:53:        records.push({
v2/src\lib\search.ts:54:          zh: siteZh,
v2/src\lib\search.ts:55:          en: site,
v2/src\lib\search.ts:56:          type: "site",
v2/src\lib\search.ts:57:          provinceId: province.id,
v2/src\lib\search.ts:58:          cityId: city.id,
v2/src\lib\search.ts:59:          aliases: [site, siteZh]
v2/src\lib\search.ts:60:        });
v2/src\lib\search.ts:61:      });
v2/src\lib\search.ts:62:    });
v2/src\lib\search.ts:63:  });
v2/src\lib\search.ts:64:
v2/src\lib\search.ts:65:  provinceHitAreas.forEach((area) => {
v2/src\lib\search.ts:66:    if (records.some((r) => r.type === "province" && r.provinceId === area.id)) return;
v2/src\lib\search.ts:67:    records.push({
v2/src\lib\search.ts:68:      zh: area.zh,
v2/src\lib\search.ts:69:      en: area.en,
v2/src\lib\search.ts:70:      type: "province",
v2/src\lib\search.ts:71:      provinceId: area.id,
v2/src\lib\search.ts:72:      aliases: [area.zh, area.en]
v2/src\lib\search.ts:73:    });
v2/src\lib\search.ts:74:  });
v2/src\lib\search.ts:75:
v2/src\lib\search.ts:76:  Object.entries(provinceAttractionSeed).forEach(([provinceId, attractions]) => {
v2/src\lib\search.ts:77:    attractions.forEach((attraction) => {
v2/src\lib\search.ts:78:      records.push({
v2/src\lib\search.ts:79:        zh: attraction.zh,
v2/src\lib\search.ts:80:        en: attraction.en,
v2/src\lib\search.ts:81:        type: "site",
v2/src\lib\search.ts:82:        provinceId,
v2/src\lib\search.ts:83:        aliases: [attraction.zh, attraction.en]
v2/src\lib\search.ts:84:      });
v2/src\lib\search.ts:85:    });
v2/src\lib\search.ts:86:  });
v2/src\lib\search.ts:87:
v2/src\lib\search.ts:88:  administrativeSearchSeed.forEach((item) => {
v2/src\lib\search.ts:89:    records.push({
v2/src\lib\search.ts:90:      zh: item.zh,
v2/src\lib\search.ts:91:      en: item.en,
v2/src\lib\search.ts:92:      type: item.type,
v2/src\lib\search.ts:93:      provinceId: item.provinceId,
v2/src\lib\search.ts:94:      cityId: item.cityId,
v2/src\lib\search.ts:95:      aliases: [item.zh, item.en, ...(item.aliases ?? [])]
v2/src\lib\search.ts:96:    });
v2/src\lib\search.ts:97:  });
v2/src\lib\search.ts:98:
v2/src\lib\search.ts:99:  return records;
v2/src\lib\search.ts:100:};
v2/src\lib\search.ts:101:
v2/src\lib\search.ts:102:const searchIndex = buildIndex();
v2/src\lib\search.ts:103:
v2/src\lib\search.ts:104:export const getAllRecords = (): SearchRecord[] => searchIndex;
v2/src\lib\search.ts:105:
v2/src\lib\search.ts:106:export const findBestMatch = (query: string): SearchRecord | null => {
v2/src\lib\search.ts:107:  const target = normalize(query);
v2/src\lib\search.ts:108:  if (!target) return null;
v2/src\lib\search.ts:109:
v2/src\lib\search.ts:110:  let best: { record: SearchRecord; score: number } | null = null;
v2/src\lib\search.ts:111:  for (const record of searchIndex) {
v2/src\lib\search.ts:112:    const tokens = [record.zh, record.en, ...record.aliases].map(normalize).filter(Boolean);
v2/src\lib\search.ts:113:    let score = 0;
v2/src\lib\search.ts:114:    if (tokens.some((t) => t === target)) score = 3;
v2/src\lib\search.ts:115:    else if (tokens.some((t) => t.startsWith(target))) score = 2;
v2/src\lib\search.ts:116:    else if (tokens.some((t) => t.includes(target) || target.includes(t))) score = 1;
v2/src\lib\search.ts:117:    if (score > 0 && (!best || score > best.score)) {
v2/src\lib\search.ts:118:      best = { record, score };
v2/src\lib\search.ts:119:      if (score === 3) break;
v2/src\lib\search.ts:120:    }
v2/src\lib\search.ts:121:  }
v2/src\lib\search.ts:122:  return best?.record ?? null;
v2/src\lib\search.ts:123:};
v2/src\styles\globals.css:1:@import "tailwindcss";
v2/src\styles\globals.css:2:
v2/src\styles\globals.css:3:@theme {
v2/src\styles\globals.css:4:  --color-ink: #18201d;
v2/src\styles\globals.css:5:  --color-muted: #5b6863;
v2/src\styles\globals.css:6:  --color-line: #d4dbd7;
v2/src\styles\globals.css:7:  --color-paper: #f6f8f6;
v2/src\styles\globals.css:8:  --color-jade: #176f62;
v2/src\styles\globals.css:9:  --color-jade-soft: rgba(23, 112, 97, 0.08);
v2/src\styles\globals.css:10:  --font-sans: "Inter", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
v2/src\styles\globals.css:11:}
v2/src\styles\globals.css:12:
v2/src\styles\globals.css:13:html,
v2/src\styles\globals.css:14:body {
v2/src\styles\globals.css:15:  background: var(--color-paper);
v2/src\styles\globals.css:16:  color: var(--color-ink);
v2/src\styles\globals.css:17:  font-family: var(--font-sans);
v2/src\styles\globals.css:18:}
v2/src\styles\globals.css:19:
v2/src\styles\globals.css:20:body {
v2/src\styles\globals.css:21:  margin: 0;
v2/src\styles\globals.css:22:  -webkit-font-smoothing: antialiased;
v2/src\styles\globals.css:23:}
v2/src\styles\globals.css:24:
v2/src\styles\globals.css:25:button {
v2/src\styles\globals.css:26:  font: inherit;
v2/src\styles\globals.css:27:  cursor: pointer;
v2/src\styles\globals.css:28:}
v2/src\styles\globals.css:29:
v2/src\styles\globals.css:30:a {
v2/src\styles\globals.css:31:  color: inherit;
v2/src\styles\globals.css:32:}
v2/src\store\AtlasContext.tsx:1:import { createContext, useContext, useMemo, useReducer, type ReactNode } from "react";
v2/src\store\AtlasContext.tsx:2:import { atlasData, type CityRecord, type ProvinceRecord } from "../data/atlas";
v2/src\store\AtlasContext.tsx:3:import { provinceHitAreas } from "../data/map-sources";
v2/src\store\AtlasContext.tsx:4:
v2/src\store\AtlasContext.tsx:5:type State = {
v2/src\store\AtlasContext.tsx:6:  selectedProvinceId: string | null;
v2/src\store\AtlasContext.tsx:7:  selectedCityId: string | null;
v2/src\store\AtlasContext.tsx:8:  is3DEnabled: boolean;
v2/src\store\AtlasContext.tsx:9:};
v2/src\store\AtlasContext.tsx:10:
v2/src\store\AtlasContext.tsx:11:type Action =
v2/src\store\AtlasContext.tsx:12:  | { type: "selectProvince"; provinceId: string | null }
v2/src\store\AtlasContext.tsx:13:  | { type: "selectCity"; cityId: string | null }
v2/src\store\AtlasContext.tsx:14:  | { type: "toggle3D" }
v2/src\store\AtlasContext.tsx:15:  | { type: "reset" };
v2/src\store\AtlasContext.tsx:16:
v2/src\store\AtlasContext.tsx:17:const initialState: State = {
v2/src\store\AtlasContext.tsx:18:  selectedProvinceId: null,
v2/src\store\AtlasContext.tsx:19:  selectedCityId: null,
v2/src\store\AtlasContext.tsx:20:  is3DEnabled: false
v2/src\store\AtlasContext.tsx:21:};
v2/src\store\AtlasContext.tsx:22:
v2/src\store\AtlasContext.tsx:23:const reducer = (state: State, action: Action): State => {
v2/src\store\AtlasContext.tsx:24:  switch (action.type) {
v2/src\store\AtlasContext.tsx:25:    case "selectProvince":
v2/src\store\AtlasContext.tsx:26:      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: null };
v2/src\store\AtlasContext.tsx:27:    case "selectCity":
v2/src\store\AtlasContext.tsx:28:      return { ...state, selectedCityId: action.cityId };
v2/src\store\AtlasContext.tsx:29:    case "toggle3D":
v2/src\store\AtlasContext.tsx:30:      return { ...state, is3DEnabled: !state.is3DEnabled };
v2/src\store\AtlasContext.tsx:31:    case "reset":
v2/src\store\AtlasContext.tsx:32:      return initialState;
v2/src\store\AtlasContext.tsx:33:    default:
v2/src\store\AtlasContext.tsx:34:      return state;
v2/src\store\AtlasContext.tsx:35:  }
v2/src\store\AtlasContext.tsx:36:};
v2/src\store\AtlasContext.tsx:37:
v2/src\store\AtlasContext.tsx:38:type AtlasContextValue = State & {
v2/src\store\AtlasContext.tsx:39:  province: ProvinceRecord | null;
v2/src\store\AtlasContext.tsx:40:  city: CityRecord | null;
v2/src\store\AtlasContext.tsx:41:  selectProvince: (id: string | null) => void;
v2/src\store\AtlasContext.tsx:42:  selectCity: (id: string | null) => void;
v2/src\store\AtlasContext.tsx:43:  toggle3D: () => void;
v2/src\store\AtlasContext.tsx:44:  reset: () => void;
v2/src\store\AtlasContext.tsx:45:};
v2/src\store\AtlasContext.tsx:46:
v2/src\store\AtlasContext.tsx:47:const AtlasContext = createContext<AtlasContextValue | null>(null);
v2/src\store\AtlasContext.tsx:48:
v2/src\store\AtlasContext.tsx:49:const findProvinceById = (id: string | null): ProvinceRecord | null => {
v2/src\store\AtlasContext.tsx:50:  if (!id) return null;
v2/src\store\AtlasContext.tsx:51:  const known = atlasData.find((p) => p.id === id);
v2/src\store\AtlasContext.tsx:52:  if (known) return known;
v2/src\store\AtlasContext.tsx:53:  const area = provinceHitAreas.find((a) => a.id === id);
v2/src\store\AtlasContext.tsx:54:  return area
v2/src\store\AtlasContext.tsx:55:    ? { id: area.id, name: area.en, zh: area.zh, type: "Province", color: "muted", cities: [] }
v2/src\store\AtlasContext.tsx:56:    : null;
v2/src\store\AtlasContext.tsx:57:};
v2/src\store\AtlasContext.tsx:58:
v2/src\store\AtlasContext.tsx:59:export function AtlasProvider({ children }: { children: ReactNode }) {
v2/src\store\AtlasContext.tsx:60:  const [state, dispatch] = useReducer(reducer, initialState);
v2/src\store\AtlasContext.tsx:61:
v2/src\store\AtlasContext.tsx:62:  const value = useMemo<AtlasContextValue>(() => {
v2/src\store\AtlasContext.tsx:63:    const province = findProvinceById(state.selectedProvinceId);
v2/src\store\AtlasContext.tsx:64:    const city = province?.cities.find((c) => c.id === state.selectedCityId) ?? null;
v2/src\store\AtlasContext.tsx:65:    return {
v2/src\store\AtlasContext.tsx:66:      ...state,
v2/src\store\AtlasContext.tsx:67:      province,
v2/src\store\AtlasContext.tsx:68:      city,
v2/src\store\AtlasContext.tsx:69:      selectProvince: (id) => dispatch({ type: "selectProvince", provinceId: id }),
v2/src\store\AtlasContext.tsx:70:      selectCity: (id) => dispatch({ type: "selectCity", cityId: id }),
v2/src\store\AtlasContext.tsx:71:      toggle3D: () => dispatch({ type: "toggle3D" }),
v2/src\store\AtlasContext.tsx:72:      reset: () => dispatch({ type: "reset" })
v2/src\store\AtlasContext.tsx:73:    };
v2/src\store\AtlasContext.tsx:74:  }, [state]);
v2/src\store\AtlasContext.tsx:75:
v2/src\store\AtlasContext.tsx:76:  return <AtlasContext.Provider value={value}>{children}</AtlasContext.Provider>;
v2/src\store\AtlasContext.tsx:77:}
v2/src\store\AtlasContext.tsx:78:
v2/src\store\AtlasContext.tsx:79:export function useAtlas(): AtlasContextValue {
v2/src\store\AtlasContext.tsx:80:  const value = useContext(AtlasContext);
v2/src\store\AtlasContext.tsx:81:  if (!value) throw new Error("useAtlas must be used within <AtlasProvider>");
v2/src\store\AtlasContext.tsx:82:  return value;
v2/src\store\AtlasContext.tsx:83:}

codex
当前看到了明显的 Vite starter 残留，也确认 `data/lib/store/hooks/styles` 已经有初步分层。因为刚才聚合输出被截断，我会改为逐文件读取核心数据、store、hook 和 lib，确保评审不是基于残缺上下文。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/data/atlas.ts' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/data/i18n.ts' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/data/map-sources.ts' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/hooks/useCityViews.ts' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/hooks/useLanguage.ts' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/lib/i18n.ts' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/lib/format.ts' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/main.tsx' in C:\Users\h\Documents\New project 2
 succeeded in 983ms:
1:export type CityRecord = {
2:  id: string;
3:  name: string;
4:  zh: string;
5:  province: string;
6:  museum: string;
7:  museumZh: string;
8:  museumRole: string;
9:  museumRoleZh: string;
10:  history: string;
11:  historyZh: string;
12:  sites: string[];
13:  sitesZh: string[];
14:  baseViews: number;
15:  notes: number;
16:  verified: string;
17:  access: "High" | "Medium" | "Low";
18:  status: "Official facts pending" | "Needs visitor notes" | "Needs review";
19:};
20:
21:export type ProvinceRecord = {
22:  id: string;
23:  name: string;
24:  zh: string;
25:  type: "Municipality" | "Province";
26:  color: string;
27:  cities: CityRecord[];
28:};
29:
30:export const atlasData: ProvinceRecord[] = [
31:  {
32:    id: "beijing",
33:    name: "Beijing",
34:    zh: "北京",
35:    type: "Municipality",
36:    color: "red",
37:    cities: [
38:      {
39:        id: "beijing-city",
40:        name: "Beijing",
41:        zh: "北京市",
42:        province: "Beijing",
43:        museum: "Capital Museum / Beijing Grand Canal Museum",
44:        museumZh: "首都博物馆 / 北京大运河博物馆",
45:        museumRole:
46:          "The first stop for understanding Beijing as an imperial capital, political center, and living city shaped by ritual, walls, waterways, and modern institutions.",
47:        museumRoleZh:
48:          "理解北京作为帝都、政治中心和生活城市的第一入口，可看到礼制、城墙、水系和现代机构如何共同塑造这座城市。",
49:        history:
50:          "Beijing is one of China's most important historical capitals, with layers from Yuan Dadu, Ming and Qing imperial planning, Republican-era transitions, and contemporary national institutions.",
51:        historyZh: "北京是中国最重要的历史都城之一，层次包括元大都、明清都城规划、近现代转型以及当代国家机构。",
52:        sites: ["Forbidden City", "Temple of Heaven", "Beijing Central Axis", "Beijing City Wall remains"],
53:        sitesZh: ["故宫", "天坛", "北京中轴线", "北京城墙遗存"],
54:        baseViews: 18642,
55:        notes: 42,
56:        verified: "2026-05",
57:        access: "Medium",
58:        status: "Official facts pending"
59:      }
60:    ]
61:  },
62:  {
63:    id: "shanghai",
64:    name: "Shanghai",
65:    zh: "上海",
66:    type: "Municipality",
67:    color: "blue",
68:    cities: [
69:      {
70:        id: "shanghai-city",
71:        name: "Shanghai",
72:        zh: "上海市",
73:        province: "Shanghai",
74:        museum: "Shanghai Museum / Shanghai History Museum",
75:        museumZh: "上海博物馆 / 上海市历史博物馆",
76:        museumRole:
77:          "A practical entry point for understanding Jiangnan culture, port-city growth, modern urban life, and Shanghai's role in global exchange.",
78:        museumRoleZh: "理解江南文化、港口城市成长、近现代都市生活以及上海参与全球交流的实用入口。",
79:        history:
80:          "Shanghai grew from a Jiangnan county and port into a treaty-port metropolis, then a central city of modern industry, finance, publishing, cinema, and urban culture.",
81:        historyZh: "上海从江南县城和港口发展为通商口岸都市，随后成为现代工业、金融、出版、电影和城市文化的重要中心。",
82:        sites: ["Shanghai History Museum", "Yu Garden area", "The Bund", "Former French Concession streets"],
83:        sitesZh: ["上海市历史博物馆", "豫园片区", "外滩", "原法租界街区"],
84:        baseViews: 14380,
85:        notes: 37,
86:        verified: "2026-05",
87:        access: "High",
88:        status: "Needs visitor notes"
89:      }
90:    ]
91:  },
92:  {
93:    id: "shaanxi",
94:    name: "Shaanxi",
95:    zh: "陕西",
96:    type: "Province",
97:    color: "gold",
98:    cities: [
99:      {
100:        id: "xian",
101:        name: "Xi'an",
102:        zh: "西安",
103:        province: "Shaanxi",
104:        museum: "Shaanxi History Museum / Xi'an Museum",
105:        museumZh: "陕西历史博物馆 / 西安博物院",
106:        museumRole:
107:          "The clearest starting point for Zhou, Qin, Han, Tang, Chang'an urban history, Silk Road exchange, and imperial material culture.",
108:        museumRoleZh: "理解周秦汉唐、长安城市史、丝绸之路交流和帝国物质文化的清晰入口。",
109:        history:
110:          "Xi'an sits near the core of ancient Chang'an, one of the great capitals of Chinese history and a key anchor for understanding early imperial statecraft and Silk Road exchange.",
111:        historyZh: "西安位于古代长安核心区域附近，是中国历史上重要都城之一，也是理解早期帝国制度和丝绸之路交流的关键城市。",
112:        sites: ["Terracotta Army", "Xi'an City Wall", "Big Wild Goose Pagoda", "Daming Palace site"],
113:        sitesZh: ["秦始皇兵马俑", "西安城墙", "大雁塔", "大明宫遗址"],
114:        baseViews: 16890,
115:        notes: 51,
116:        verified: "2026-05",
117:        access: "Medium",
118:        status: "Official facts pending"
119:      },
120:      {
121:        id: "xianyang",
122:        name: "Xianyang",
123:        zh: "咸阳",
124:        province: "Shaanxi",
125:        museum: "Xianyang Museum",
126:        museumZh: "咸阳博物院",
127:        museumRole: "Useful for understanding Qin imperial foundations and the political geography surrounding the ancient capital region.",
128:        museumRoleZh: "适合理解秦帝国基础，以及古都区域周边的政治地理。",
129:        history:
130:          "Xianyang is closely associated with the Qin state and Qin dynasty, making it a strong context city for understanding the rise of China's first imperial order.",
131:        historyZh: "咸阳与秦国、秦朝关系密切，是理解中国第一个大一统帝国兴起的重要背景城市。",
132:        sites: ["Han Yang Ling Museum", "Qianling area", "Qin and Han heritage sites"],
133:        sitesZh: ["汉阳陵博物院", "乾陵片区", "秦汉遗址"],
134:        baseViews: 4280,
135:        notes: 9,
136:        verified: "2026-04",
137:        access: "Low",
138:        status: "Needs review"
139:      },
140:      {
141:        id: "yanan",
142:        name: "Yan'an",
143:        zh: "延安",
144:        province: "Shaanxi",
145:        museum: "Yan'an Revolutionary Memorial Hall",
146:        museumZh: "延安革命纪念馆",
147:        museumRole: "The starting point for modern revolutionary history and the political memory of twentieth-century China.",
148:        museumRoleZh: "理解中国近现代革命史和二十世纪政治记忆的起点。",
149:        history:
150:          "Yan'an is central to understanding the Chinese revolutionary period and the narratives, institutions, and landscapes associated with the Communist base area.",
151:        historyZh: "延安是理解中国革命时期、根据地叙事、制度建设和相关历史景观的核心城市。",
152:        sites: ["Yangjialing", "Zaoyuan", "Pagoda Hill"],
153:        sitesZh: ["杨家岭", "枣园", "宝塔山"],
154:        baseViews: 3120,
155:        notes: 7,
156:        verified: "2026-04",
157:        access: "Low",
158:        status: "Needs visitor notes"
159:      }
160:    ]
161:  },
162:  {
163:    id: "henan",
164:    name: "Henan",
165:    zh: "河南",
166:    type: "Province",
167:    color: "jade",
168:    cities: [
169:      {
170:        id: "luoyang",
171:        name: "Luoyang",
172:        zh: "洛阳",
173:        province: "Henan",
174:        museum: "Luoyang Museum / Erlitou Site Museum",
175:        museumZh: "洛阳博物馆 / 二里头夏都遗址博物馆",
176:        museumRole: "A strong entry point for the Central Plains, ancient capitals, ritual bronzes, early states, and Buddhist art.",
177:        museumRoleZh: "理解中原、古都、礼器青铜、早期国家和佛教艺术的重要入口。",
178:        history:
179:          "Luoyang is one of China's major ancient capitals, connected with the Xia-related Erlitou site, Eastern Zhou, Han-Wei urban history, Sui-Tang Luoyang, and Longmen Buddhist art.",
180:        historyZh: "洛阳是中国重要古都之一，关联二里头、东周、汉魏洛阳城、隋唐洛阳城和龙门佛教艺术。",
181:        sites: ["Longmen Grottoes", "White Horse Temple", "Sui-Tang Luoyang City site", "Erlitou Site Museum"],
182:        sitesZh: ["龙门石窟", "白马寺", "隋唐洛阳城遗址", "二里头夏都遗址博物馆"],
183:        baseViews: 9240,
184:        notes: 28,
185:        verified: "2026-05",
186:        access: "Medium",
187:        status: "Official facts pending"
188:      },
189:      {
190:        id: "kaifeng",
191:        name: "Kaifeng",
192:        zh: "开封",
193:        province: "Henan",
194:        museum: "Kaifeng Museum",
195:        museumZh: "开封博物馆",
196:        museumRole: "Best first stop for Northern Song urban history, river management, trade, and capital culture.",
197:        museumRoleZh: "理解北宋城市史、河流治理、商业贸易和都城文化的第一站。",
198:        history:
199:          "Kaifeng is strongly associated with the Northern Song capital Bianjing, a city of commerce, administration, literature, and dense urban life.",
200:        historyZh: "开封与北宋都城汴京紧密相关，是商业、行政、文学和繁华城市生活的重要代表。",
201:        sites: ["Dragon Pavilion area", "Iron Pagoda", "Daxiangguo Temple", "Ancient city remains"],
202:        sitesZh: ["龙亭片区", "铁塔", "大相国寺", "古城遗存"],
203:        baseViews: 6110,
204:        notes: 18,
205:        verified: "2026-04",
206:        access: "Low",
207:        status: "Needs review"
208:      },
209:      {
210:        id: "anyang",
211:        name: "Anyang",
212:        zh: "安阳",
213:        province: "Henan",
214:        museum: "Yinxu Museum",
215:        museumZh: "殷墟博物馆",
216:        museumRole: "The direct entry point for oracle bones, Shang royal archaeology, bronze culture, and early Chinese writing.",
217:        museumRoleZh: "理解甲骨文、商王朝考古、青铜文化和早期汉字的直接入口。",
218:        history:
219:          "Anyang is essential for understanding the late Shang capital at Yinxu, oracle bone inscriptions, early state ritual, and archaeological evidence for ancient China.",
220:        historyZh: "安阳对于理解殷墟晚商都城、甲骨刻辞、早期国家礼制和中国古代考古证据非常关键。",
221:        sites: ["Yinxu", "National Museum of Chinese Writing", "Fu Hao Tomb area"],
222:        sitesZh: ["殷墟", "中国文字博物馆", "妇好墓片区"],
223:        baseViews: 5480,
224:        notes: 15,
225:        verified: "2026-04",
226:        access: "Medium",
227:        status: "Needs visitor notes"
228:      }
229:    ]
230:  },
231:  {
232:    id: "jiangsu",
233:    name: "Jiangsu",
234:    zh: "江苏",
235:    type: "Province",
236:    color: "blue",
237:    cities: [
238:      {
239:        id: "nanjing",
240:        name: "Nanjing",
241:        zh: "南京",
242:        province: "Jiangsu",
243:        museum: "Nanjing Museum / Six Dynasties Museum",
244:        museumZh: "南京博物院 / 六朝博物馆",
245:        museumRole: "The first stop for Six Dynasties culture, Ming capital history, Republican-era history, and Jiangnan material culture.",
246:        museumRoleZh: "理解六朝文化、明初都城、民国历史和江南物质文化的第一入口。",
247:        history:
248:          "Nanjing has served as a capital across several periods and is key to understanding southern dynastic culture, Ming statecraft, and modern Chinese political history.",
249:        historyZh: "南京在多个历史时期曾为都城，是理解南朝文化、明代国家建设和中国近现代政治史的重要城市。",
250:        sites: ["Ming Xiaoling Mausoleum", "Nanjing City Wall", "Presidential Palace", "Confucius Temple area"],
251:        sitesZh: ["明孝陵", "南京城墙", "总统府", "夫子庙片区"],
252:        baseViews: 12110,
253:        notes: 36,
254:        verified: "2026-05",
255:        access: "High",
256:        status: "Official facts pending"
257:      },
258:      {
259:        id: "suzhou",
260:        name: "Suzhou",
261:        zh: "苏州",
262:        province: "Jiangsu",
263:        museum: "Suzhou Museum",
264:        museumZh: "苏州博物馆",
265:        museumRole: "A concise entry into Wu culture, literati gardens, canal trade, silk, painting, and urban refinement.",
266:        museumRoleZh: "进入吴文化、文人园林、运河贸易、丝绸、绘画和城市审美的简洁入口。",
267:        history:
268:          "Suzhou is deeply tied to Jiangnan culture, classical gardens, canal networks, silk production, and elite urban life from the Song through Ming-Qing periods.",
269:        historyZh: "苏州与江南文化、古典园林、运河网络、丝绸生产，以及宋至明清以来的城市生活密切相关。",
270:        sites: ["Humble Administrator's Garden", "Pingjiang Road", "Suzhou section of the Grand Canal", "Tiger Hill"],
271:        sitesZh: ["拙政园", "平江路", "大运河苏州段", "虎丘"],
272:        baseViews: 10740,
273:        notes: 33,
274:        verified: "2026-05",
275:        access: "High",
276:        status: "Needs visitor notes"
277:      },
278:      {
279:        id: "yangzhou",
280:        name: "Yangzhou",
281:        zh: "扬州",
282:        province: "Jiangsu",
283:        museum: "Yangzhou Museum / China Grand Canal Museum",
284:        museumZh: "扬州博物馆 / 中国大运河博物馆",
285:        museumRole: "A strong starting point for Grand Canal culture, salt merchants, gardens, and Qing-era urban prosperity.",
286:        museumRoleZh: "理解大运河文化、盐商、园林和清代城市繁荣的强入口。",
287:        history:
288:          "Yangzhou is central to Grand Canal history, salt commerce, literary culture, gardens, and the movement of goods and people between north and south China.",
289:        historyZh: "扬州是理解大运河、盐业商业、文学文化、园林，以及南北物资与人员流动的重要城市。",
290:        sites: ["Slender West Lake", "Dongguan Street", "Ge Garden", "Grand Canal sites"],
291:        sitesZh: ["瘦西湖", "东关街", "个园", "大运河遗产点"],
292:        baseViews: 4660,
293:        notes: 12,
294:        verified: "2026-04",
295:        access: "Medium",
296:        status: "Needs review"
297:      }
298:    ]
299:  },
300:  {
301:    id: "sichuan",
302:    name: "Sichuan",
303:    zh: "四川",
304:    type: "Province",
305:    color: "jade",
306:    cities: [
307:      {
308:        id: "chengdu",
309:        name: "Chengdu",
310:        zh: "成都",
311:        province: "Sichuan",
312:        museum: "Chengdu Museum / Jinsha Site Museum",
313:        museumZh: "成都博物馆 / 金沙遗址博物馆",
314:        museumRole:
315:          "The first stop for ancient Shu culture, basin geography, urban life, local crafts, and the relationship between Chengdu and Sichuan's wider cultural landscape.",
316:        museumRoleZh: "理解古蜀文化、盆地地理、城市生活、地方工艺，以及成都与四川整体文化景观关系的第一入口。",
317:        history:
318:          "Chengdu is a long-lived urban center in the Sichuan Basin, associated with ancient Shu civilization, Qin-Han integration, Shu Han memory, commerce, and everyday urban culture.",
319:        historyZh: "成都是四川盆地长期延续的城市中心，关联古蜀文明、秦汉整合、蜀汉记忆、商业和日常城市文化。",
320:        sites: ["Jinsha Site Museum", "Wuhou Shrine", "Du Fu Thatched Cottage", "Dujiangyan"],
321:        sitesZh: ["金沙遗址博物馆", "武侯祠", "杜甫草堂", "都江堰"],
322:        baseViews: 13320,
323:        notes: 40,
324:        verified: "2026-05",
325:        access: "High",
326:        status: "Official facts pending"
327:      },
328:      {
329:        id: "leshan",
330:        name: "Leshan",
331:        zh: "乐山",
332:        province: "Sichuan",
333:        museum: "Leshan Museum",
334:        museumZh: "乐山博物馆",
335:        museumRole: "A practical entry for river geography, Buddhist carving, local trade, and the wider Emei-Leshan heritage landscape.",
336:        museumRoleZh: "理解河流地理、佛教造像、地方贸易和峨眉山—乐山整体遗产景观的实用入口。",
337:        history:
338:          "Leshan is shaped by river confluences, Buddhist monumental art, and its relationship with Mount Emei and southwest travel routes.",
339:        historyZh: "乐山受到江河交汇、佛教大型造像、峨眉山关系和西南交通路线的共同塑造。",
340:        sites: ["Leshan Giant Buddha", "Mount Emei", "Lingyun Mountain area"],
341:        sitesZh: ["乐山大佛", "峨眉山", "凌云山片区"],
342:        baseViews: 7060,
343:        notes: 23,
344:        verified: "2026-04",
345:        access: "Medium",
346:        status: "Needs visitor notes"
347:      }
348:    ]
349:  }
350:];
351:
352:export type AdministrativeSeed = {
353:  zh: string;
354:  en: string;
355:  type: "county" | "town" | "village";
356:  provinceId: string;
357:  cityId?: string;
358:  aliases?: string[];
359:};
360:
361:export const administrativeSearchSeed: AdministrativeSeed[] = [
362:  { zh: "东城区", en: "Dongcheng District", type: "county", provinceId: "beijing", cityId: "beijing-city", aliases: ["dongcheng"] },
363:  { zh: "延庆区", en: "Yanqing District", type: "county", provinceId: "beijing", cityId: "beijing-city", aliases: ["yanqing"] },
364:  { zh: "古北口镇", en: "Gubeikou Town", type: "town", provinceId: "beijing", cityId: "beijing-city", aliases: ["古北口", "gubeikou"] },
365:  { zh: "爨底下村", en: "Cuandixia Village", type: "village", provinceId: "beijing", cityId: "beijing-city", aliases: ["cuandixia", "爨底下"] },
366:  { zh: "黄浦区", en: "Huangpu District", type: "county", provinceId: "shanghai", cityId: "shanghai-city", aliases: ["huangpu"] },
367:  { zh: "朱家角镇", en: "Zhujiajiao Town", type: "town", provinceId: "shanghai", cityId: "shanghai-city", aliases: ["zhujiajiao", "朱家角"] },
368:  { zh: "雁塔区", en: "Yanta District", type: "county", provinceId: "shaanxi", cityId: "xian", aliases: ["yanta"] },
369:  { zh: "临潼区", en: "Lintong District", type: "county", provinceId: "shaanxi", cityId: "xian", aliases: ["lintong"] },
370:  { zh: "秦淮区", en: "Qinhuai District", type: "county", provinceId: "jiangsu", cityId: "nanjing", aliases: ["qinhuai"] },
371:  { zh: "昆山市", en: "Kunshan City", type: "county", provinceId: "jiangsu", cityId: "suzhou", aliases: ["kunshan"] },
372:  { zh: "周庄镇", en: "Zhouzhuang Town", type: "town", provinceId: "jiangsu", cityId: "suzhou", aliases: ["zhouzhuang", "周庄"] },
373:  { zh: "同里镇", en: "Tongli Town", type: "town", provinceId: "jiangsu", cityId: "suzhou", aliases: ["tongli", "同里"] },
374:  { zh: "广陵区", en: "Guangling District", type: "county", provinceId: "jiangsu", cityId: "yangzhou", aliases: ["guangling"] },
375:  { zh: "都江堰市", en: "Dujiangyan City", type: "county", provinceId: "sichuan", cityId: "chengdu", aliases: ["dujiangyan", "都江堰"] },
376:  { zh: "洛带镇", en: "Luodai Town", type: "town", provinceId: "sichuan", cityId: "chengdu", aliases: ["luodai", "洛带"] },
377:  { zh: "黄龙溪镇", en: "Huanglongxi Town", type: "town", provinceId: "sichuan", cityId: "chengdu", aliases: ["huanglongxi", "黄龙溪"] },
378:  { zh: "峨眉山市", en: "Emeishan City", type: "county", provinceId: "sichuan", cityId: "leshan", aliases: ["emeishan", "峨眉山"] }
379:];
380:
381:export const provinceAttractionSeed: Record<string, Array<{ zh: string; en: string }>> = {
382:  beijing: [
383:    { zh: "故宫", en: "Forbidden City" },
384:    { zh: "天坛", en: "Temple of Heaven" },
385:    { zh: "北京中轴线", en: "Beijing Central Axis" }
386:  ],
387:  tianjin: [
388:    { zh: "五大道", en: "Five Great Avenues" },
389:    { zh: "古文化街", en: "Ancient Culture Street" },
390:    { zh: "天津博物馆", en: "Tianjin Museum" }
391:  ],
392:  hebei: [
393:    { zh: "承德避暑山庄", en: "Chengde Mountain Resort" },
394:    { zh: "山海关", en: "Shanhaiguan" },
395:    { zh: "西柏坡", en: "Xibaipo" }
396:  ],
397:  shanxi: [
398:    { zh: "云冈石窟", en: "Yungang Grottoes" },
399:    { zh: "平遥古城", en: "Pingyao Ancient City" },
400:    { zh: "五台山", en: "Mount Wutai" }
401:  ],
402:  "inner-mongolia": [
403:    { zh: "呼伦贝尔草原", en: "Hulunbuir Grassland" },
404:    { zh: "成吉思汗陵", en: "Mausoleum of Genghis Khan" },
405:    { zh: "响沙湾", en: "Xiangshawan" }
406:  ],
407:  liaoning: [
408:    { zh: "沈阳故宫", en: "Shenyang Palace Museum" },
409:    { zh: "大连老虎滩", en: "Dalian Tiger Beach" },
410:    { zh: "本溪水洞", en: "Benxi Water Cave" }
411:  ],
412:  jilin: [
413:    { zh: "长白山", en: "Changbai Mountain" },
414:    { zh: "伪满皇宫博物院", en: "Museum of the Imperial Palace of Manchukuo" },
415:    { zh: "净月潭", en: "Jingyuetan" }
416:  ],
417:  heilongjiang: [
418:    { zh: "哈尔滨中央大街", en: "Harbin Central Street" },
419:    { zh: "圣索菲亚教堂", en: "Saint Sophia Cathedral" },
420:    { zh: "太阳岛", en: "Sun Island" },
421:    { zh: "五大连池", en: "Wudalianchi" },
422:    { zh: "镜泊湖", en: "Jingpo Lake" }
423:  ],
424:  shanghai: [
425:    { zh: "外滩", en: "The Bund" },
426:    { zh: "豫园", en: "Yu Garden" },
427:    { zh: "上海博物馆", en: "Shanghai Museum" }
428:  ],
429:  jiangsu: [
430:    { zh: "明孝陵", en: "Ming Xiaoling Mausoleum" },
431:    { zh: "苏州园林", en: "Classical Gardens of Suzhou" },
432:    { zh: "中国大运河博物馆", en: "China Grand Canal Museum" }
433:  ],
434:  zhejiang: [
435:    { zh: "西湖", en: "West Lake" },
436:    { zh: "乌镇", en: "Wuzhen" },
437:    { zh: "普陀山", en: "Mount Putuo" }
438:  ],
439:  anhui: [
440:    { zh: "黄山", en: "Mount Huangshan" },
441:    { zh: "宏村", en: "Hongcun" },
442:    { zh: "西递", en: "Xidi" }
443:  ],
444:  fujian: [
445:    { zh: "武夷山", en: "Wuyi Mountain" },
446:    { zh: "福建土楼", en: "Fujian Tulou" },
447:    { zh: "鼓浪屿", en: "Gulangyu" }
448:  ],
449:  jiangxi: [
450:    { zh: "庐山", en: "Mount Lu" },
451:    { zh: "景德镇", en: "Jingdezhen" },
452:    { zh: "滕王阁", en: "Tengwang Pavilion" }
453:  ],
454:  shandong: [
455:    { zh: "泰山", en: "Mount Tai" },
456:    { zh: "曲阜三孔", en: "Three Confucian Sites in Qufu" },
457:    { zh: "蓬莱阁", en: "Penglai Pavilion" }
458:  ],
459:  henan: [
460:    { zh: "龙门石窟", en: "Longmen Grottoes" },
461:    { zh: "殷墟", en: "Yinxu" },
462:    { zh: "少林寺", en: "Shaolin Temple" }
463:  ],
464:  hubei: [
465:    { zh: "黄鹤楼", en: "Yellow Crane Tower" },
466:    { zh: "武当山", en: "Wudang Mountains" },
467:    { zh: "湖北省博物馆", en: "Hubei Provincial Museum" }
468:  ],
469:  hunan: [
470:    { zh: "张家界国家森林公园", en: "Zhangjiajie National Forest Park" },
471:    { zh: "凤凰古城", en: "Fenghuang Ancient Town" },
472:    { zh: "岳麓书院", en: "Yuelu Academy" }
473:  ],
474:  guangdong: [
475:    { zh: "广州塔", en: "Canton Tower" },
476:    { zh: "陈家祠", en: "Chen Clan Ancestral Hall" },
477:    { zh: "开平碉楼", en: "Kaiping Diaolou" }
478:  ],
479:  guangxi: [
480:    { zh: "桂林漓江", en: "Li River" },
481:    { zh: "阳朔", en: "Yangshuo" },
482:    { zh: "德天瀑布", en: "Detian Waterfall" }
483:  ],
484:  hainan: [
485:    { zh: "亚龙湾", en: "Yalong Bay" },
486:    { zh: "蜈支洲岛", en: "Wuzhizhou Island" },
487:    { zh: "海口骑楼老街", en: "Haikou Qilou Old Street" }
488:  ],
489:  chongqing: [
490:    { zh: "洪崖洞", en: "Hongya Cave" },
491:    { zh: "大足石刻", en: "Dazu Rock Carvings" },
492:    { zh: "磁器口古镇", en: "Ciqikou Ancient Town" }
493:  ],
494:  sichuan: [
495:    { zh: "都江堰", en: "Dujiangyan" },
496:    { zh: "乐山大佛", en: "Leshan Giant Buddha" },
497:    { zh: "九寨沟", en: "Jiuzhaigou" }
498:  ],
499:  guizhou: [
500:    { zh: "黄果树瀑布", en: "Huangguoshu Waterfall" },
501:    { zh: "西江千户苗寨", en: "Xijiang Miao Village" },
502:    { zh: "梵净山", en: "Fanjing Mountain" }
503:  ],
504:  yunnan: [
505:    { zh: "丽江古城", en: "Old Town of Lijiang" },
506:    { zh: "大理古城", en: "Dali Old Town" },
507:    { zh: "石林", en: "Stone Forest" }
508:  ],
509:  tibet: [
510:    { zh: "布达拉宫", en: "Potala Palace" },
511:    { zh: "大昭寺", en: "Jokhang Temple" },
512:    { zh: "纳木错", en: "Namtso" }
513:  ],
514:  shaanxi: [
515:    { zh: "秦始皇兵马俑", en: "Terracotta Army" },
516:    { zh: "西安城墙", en: "Xi'an City Wall" },
517:    { zh: "陕西历史博物馆", en: "Shaanxi History Museum" }
518:  ],
519:  gansu: [
520:    { zh: "莫高窟", en: "Mogao Caves" },
521:    { zh: "嘉峪关", en: "Jiayuguan Pass" },
522:    { zh: "张掖丹霞", en: "Zhangye Danxia" }
523:  ],
524:  qinghai: [
525:    { zh: "青海湖", en: "Qinghai Lake" },
526:    { zh: "塔尔寺", en: "Kumbum Monastery" },
527:    { zh: "茶卡盐湖", en: "Chaka Salt Lake" }
528:  ],
529:  ningxia: [
530:    { zh: "沙坡头", en: "Shapotou" },
531:    { zh: "西夏陵", en: "Western Xia Mausoleums" },
532:    { zh: "水洞沟", en: "Shuidonggou" }
533:  ],
534:  xinjiang: [
535:    { zh: "天山天池", en: "Heavenly Lake of Tianshan" },
536:    { zh: "喀纳斯", en: "Kanas Lake" },
537:    { zh: "喀什古城", en: "Kashgar Old City" }
538:  ],
539:  "hong-kong": [
540:    { zh: "太平山顶", en: "Victoria Peak" },
541:    { zh: "天星小轮", en: "Star Ferry" },
542:    { zh: "香港故宫文化博物馆", en: "Hong Kong Palace Museum" }
543:  ],
544:  macau: [
545:    { zh: "大三巴牌坊", en: "Ruins of St. Paul's" },
546:    { zh: "议事亭前地", en: "Senado Square" },
547:    { zh: "妈阁庙", en: "A-Ma Temple" }
548:  ],
549:  taiwan: [
550:    { zh: "台北故宫博物院", en: "National Palace Museum" },
551:    { zh: "日月潭", en: "Sun Moon Lake" },
552:    { zh: "阿里山", en: "Alishan" }
553:  ]
554:};

 succeeded in 1012ms:
1:export type Lang = "en" | "zh";
2:
3:export const i18n: Record<Lang, Record<string, string>> = {
4:  en: {
5:    brandSubtitle: "中国城市与博物馆索引",
6:    navAtlas: "Atlas",
7:    navVideo: "Video",
8:    navMuseums: "Museums",
9:    navSources: "Sources",
10:    searchPlaceholder: "Search city, county, town, village, scenic area",
11:    searchButton: "Search",
12:    searchNoMatch: "No matching place in the current demo index.",
13:    searchJumped: "Map jumped to",
14:    fullMapLabel: "Full China Map",
15:    fullMapTitle: "China province-level map",
16:    mapStatus: "Official base map",
17:    mapHint: "Click a province on the official map. The province will pop out and the full map will dim.",
18:    mapHintReady: "Province map is open. Use Reset to return to the full China map.",
19:    mapHintPending: "This province is listed on the map. City and museum data are not connected yet.",
20:    mapCredit: "Official base map: Standard Map Service System, GS(2022)4309.",
21:    historyVideoTitle: "China Historical Evolution Video",
22:    historyVideoBody:
23:      "A video position for explaining China through dynasties, capitals, borders, routes, museums, and cultural exchange before users explore cities.",
24:    historyVideoMeta: "Official video: Discover a China Beyond Your Imagination",
25:    historyVideoSource: "Official source: Chinaculture.org",
26:    atlasTitle: "Administrative Atlas",
27:    atlasBody: "Click a province-level region to list cities. City pins open museum-first profiles.",
28:    provinceMode: "Province",
29:    cityMode: "City",
30:    provinceLevelRegions: "Province-level regions",
31:    currentView: "Current View",
32:    famousAttractions: "Famous attractions",
33:    scenicEntry: "Scenic entry",
34:    museumEntry: "Museum entry",
35:    provinceDataPending: "Famous attraction data for this province is not connected yet.",
36:    reset: "Reset",
37:    selectCity: "Select a city",
38:    selectCityBody:
39:      "The city profile will show the museum entry point, real visitor signals, official source status, and historical direction.",
40:    close: "Close",
41:    startHere: "Start here",
42:    pageViews: "Page views",
43:    visitorNotes: "Visitor notes",
44:    lastVerified: "Last verified",
45:    englishAccess: "English access",
46:    historicalIdentity: "Historical identity",
47:    thenExplore: "Then explore",
48:    sourcePolicy: "Source policy",
49:    sourcePolicyBody:
50:      "Official facts require source links. Visitor notes require explicit contributor authorization. Images are omitted unless licensed or contributed.",
51:    museumTitle: "Museum-first Page Template",
52:    museumBody:
53:      "Every city starts with the institution that explains its origin, timeline, people, and material culture.",
54:    flowOneTitle: "City Museum",
55:    flowOneBody: "Main city museum, provincial museum, archaeological site museum, or history hall.",
56:    flowTwoTitle: "Historical Context",
57:    flowTwoBody: "Dynasties, trade routes, wars, migration, local industries, and cultural identity.",
58:    flowThreeTitle: "Visitor Reality",
59:    flowThreeBody: "Passport booking, English labels, crowd level, access issues, and current notes.",
60:    flowFourTitle: "Explore After",
61:    flowFourBody: "Nearby historical sites, old streets, temples, relic parks, and heritage locations.",
62:    sourcesTitle: "Image and Source Rules",
63:    sourcesBody:
64:      "This template intentionally uses no scraped web photos. Production pages should use official facts, authorized visitor notes, licensed images, and visible attribution.",
65:    ruleOne: "Official text is used for factual extraction, not copied as prose.",
66:    ruleTwo: "AI summaries must trace important claims back to source records.",
67:    ruleThree: "Visitor notes require permission to publish and translate.",
68:    ruleFour: "Images need ownership, open license, or written authorization.",
69:    footerNote: "China Atlas template. Demo data only.",
70:    backToTop: "Back to top",
71:    cityProfiles: "city profiles",
72:    views: "views",
73:    viewIn3D: "View in 3D",
74:    exit3D: "Exit 3D"
75:  },
76:  zh: {
77:    brandSubtitle: "中国城市与博物馆索引",
78:    navAtlas: "地图",
79:    navVideo: "视频",
80:    navMuseums: "博物馆",
81:    navSources: "来源",
82:    searchPlaceholder: "搜索城市、县、镇、村、景区",
83:    searchButton: "搜索",
84:    searchNoMatch: "当前演示索引里没有匹配地点。",
85:    searchJumped: "地图已跳转到",
86:    fullMapLabel: "完整中国地图",
87:    fullMapTitle: "中国省级地图",
88:    mapStatus: "官方底图",
89:    mapHint: "点击官方地图上的省级区域，省份将浮出，全图淡化为背景。",
90:    mapHintReady: "省份地图已展开，点击重置可回到完整中国地图。",
91:    mapHintPending: "该省份已列入地图，但城市和博物馆数据尚未接入。",
92:    mapCredit: "官方底图：标准地图服务系统，审图号 GS(2022)4309号。",
93:    historyVideoTitle: "中国历史演变视频",
94:    historyVideoBody:
95:      "这里用于插入视频，用朝代、都城、疆域、路线、博物馆和文化交流解释中国，再让用户进入城市探索。",
96:    historyVideoMeta: "官方视频：Discover a China Beyond Your Imagination",
97:    historyVideoSource: "官方来源：Chinaculture.org",
98:    atlasTitle: "行政区划地图",
99:    atlasBody: "点击省级地区查看城市列表，再点击城市打开博物馆优先档案。",
100:    provinceMode: "省份",
101:    cityMode: "城市",
102:    provinceLevelRegions: "省级地区",
103:    currentView: "当前视图",
104:    famousAttractions: "著名景点",
105:    scenicEntry: "景区入口",
106:    museumEntry: "博物馆入口",
107:    provinceDataPending: "该省著名景点数据尚未接入。",
108:    reset: "重置",
109:    selectCity: "选择城市",
110:    selectCityBody: "城市档案会展示博物馆入口、真实浏览信号、官方来源状态和历史脉络。",
111:    close: "关闭",
112:    startHere: "从这里开始",
113:    pageViews: "页面浏览",
114:    visitorNotes: "游客笔记",
115:    lastVerified: "最后核验",
116:    englishAccess: "英文友好度",
117:    historicalIdentity: "历史定位",
118:    thenExplore: "随后探索",
119:    sourcePolicy: "来源规则",
120:    sourcePolicyBody: "官方事实必须保留来源链接。游客笔记必须取得投稿授权。图片无授权或开放许可时不展示。",
121:    museumTitle: "博物馆优先页面模板",
122:    museumBody: "每座城市先从解释其起源、时间线、人物和物质文化的机构开始。",
123:    flowOneTitle: "城市博物馆",
124:    flowOneBody: "市级博物馆、省级博物馆、考古遗址博物馆或地方文史馆。",
125:    flowTwoTitle: "历史脉络",
126:    flowTwoBody: "朝代、商路、战争、移民、地方产业和文化身份。",
127:    flowThreeTitle: "真实体验",
128:    flowThreeBody: "护照预约、英文展签、人流情况、交通难度和最新反馈。",
129:    flowFourTitle: "继续探索",
130:    flowFourBody: "附近历史遗址、老街、寺庙、文物公园和文化遗产地点。",
131:    sourcesTitle: "图片与来源规则",
132:    sourcesBody: "此模板故意不使用抓取来的网络图片。正式页面应使用官方事实、授权游客笔记、合规图片和可见署名。",
133:    ruleOne: "官方文字只提取事实，不直接复制成正文。",
134:    ruleTwo: "AI 摘要中的关键事实必须能追溯到来源记录。",
135:    ruleThree: "游客笔记必须获得发布和翻译授权。",
136:    ruleFour: "图片必须具备所有权、开放许可或书面授权。",
137:    footerNote: "China Atlas 模板。当前为演示数据。",
138:    backToTop: "回到顶部",
139:    cityProfiles: "个城市档案",
140:    views: "次浏览",
141:    viewIn3D: "查看 3D 模型",
142:    exit3D: "退出 3D"
143:  }
144:};
145:
146:export const typeLabels: Record<Lang, Record<string, string>> = {
147:  en: { Municipality: "Municipality", Province: "Province" },
148:  zh: { Municipality: "直辖市", Province: "省" }
149:};
150:
151:export const accessLabels: Record<Lang, Record<string, string>> = {
152:  en: { High: "High", Medium: "Medium", Low: "Low" },
153:  zh: { High: "高", Medium: "中", Low: "低" }
154:};
155:
156:export const statusLabels: Record<Lang, Record<string, string>> = {
157:  en: {
158:    "Official facts pending": "Official facts pending",
159:    "Needs visitor notes": "Needs visitor notes",
160:    "Needs review": "Needs review"
161:  },
162:  zh: {
163:    "Official facts pending": "官方资料待核验",
164:    "Needs visitor notes": "需要游客笔记",
165:    "Needs review": "需要复核"
166:  }
167:};
168:
169:export const placeTypeLabels: Record<Lang, Record<string, string>> = {
170:  en: {
171:    province: "Province",
172:    city: "City",
173:    county: "County",
174:    town: "Town",
175:    village: "Village",
176:    museum: "Museum",
177:    site: "Scenic area"
178:  },
179:  zh: {
180:    province: "省级地区",
181:    city: "城市",
182:    county: "县区",
183:    town: "镇",
184:    village: "村",
185:    museum: "博物馆",
186:    site: "景区"
187:  }
188:};

 succeeded in 970ms:
1:import { useCallback, useSyncExternalStore } from "react";
2:
3:const KEY_PREFIX = "views:";
4:const listeners = new Set<() => void>();
5:
6:const subscribe = (listener: () => void): (() => void) => {
7:  listeners.add(listener);
8:  return () => listeners.delete(listener);
9:};
10:
11:const notify = () => listeners.forEach((listener) => listener());
12:
13:const readCount = (cityId: string): number => {
14:  const stored = Number(localStorage.getItem(KEY_PREFIX + cityId) ?? 0);
15:  return Number.isFinite(stored) ? stored : 0;
16:};
17:
18:export function useCityViewCount(cityId: string, baseViews: number): number {
19:  const stored = useSyncExternalStore(
20:    subscribe,
21:    () => readCount(cityId),
22:    () => 0
23:  );
24:  return baseViews + stored;
25:}
26:
27:export function useRecordCityView(): (cityId: string) => void {
28:  return useCallback((cityId: string) => {
29:    const next = readCount(cityId) + 1;
30:    localStorage.setItem(KEY_PREFIX + cityId, String(next));
31:    notify();
32:  }, []);
33:}

 succeeded in 988ms:
1:export type ProvinceHitArea = {
2:  id: string;
3:  en: string;
4:  zh: string;
5:  /** Approximate centre x in % of full-China image width */
6:  x: number;
7:  /** Approximate centre y in % of full-China image height */
8:  y: number;
9:  /** Width in % */
10:  w: number;
11:  /** Height in % */
12:  h: number;
13:};
14:
15:export const provinceHitAreas: ProvinceHitArea[] = [
16:  { id: "xinjiang", en: "Xinjiang", zh: "新疆", x: 26, y: 36, w: 24, h: 26 },
17:  { id: "tibet", en: "Tibet", zh: "西藏", x: 25, y: 61, w: 27, h: 22 },
18:  { id: "qinghai", en: "Qinghai", zh: "青海", x: 41, y: 56, w: 15, h: 15 },
19:  { id: "gansu", en: "Gansu", zh: "甘肃", x: 49, y: 46, w: 13, h: 14 },
20:  { id: "ningxia", en: "Ningxia", zh: "宁夏", x: 55, y: 43, w: 5, h: 7 },
21:  { id: "inner-mongolia", en: "Inner Mongolia", zh: "内蒙古", x: 63, y: 32, w: 28, h: 18 },
22:  { id: "heilongjiang", en: "Heilongjiang", zh: "黑龙江", x: 78, y: 20, w: 18, h: 15 },
23:  { id: "jilin", en: "Jilin", zh: "吉林", x: 78, y: 32, w: 9, h: 8 },
24:  { id: "liaoning", en: "Liaoning", zh: "辽宁", x: 75, y: 39, w: 9, h: 8 },
25:  { id: "beijing", en: "Beijing", zh: "北京", x: 68, y: 42, w: 4, h: 4 },
26:  { id: "tianjin", en: "Tianjin", zh: "天津", x: 70, y: 44, w: 4, h: 4 },
27:  { id: "hebei", en: "Hebei", zh: "河北", x: 67, y: 46, w: 9, h: 9 },
28:  { id: "shanxi", en: "Shanxi", zh: "山西", x: 63, y: 47, w: 7, h: 10 },
29:  { id: "shaanxi", en: "Shaanxi", zh: "陕西", x: 59, y: 51, w: 8, h: 12 },
30:  { id: "henan", en: "Henan", zh: "河南", x: 65, y: 54, w: 9, h: 9 },
31:  { id: "shandong", en: "Shandong", zh: "山东", x: 72, y: 51, w: 9, h: 7 },
32:  { id: "jiangsu", en: "Jiangsu", zh: "江苏", x: 73, y: 57, w: 8, h: 9 },
33:  { id: "anhui", en: "Anhui", zh: "安徽", x: 69, y: 60, w: 8, h: 10 },
34:  { id: "hubei", en: "Hubei", zh: "湖北", x: 63, y: 61, w: 10, h: 9 },
35:  { id: "sichuan", en: "Sichuan", zh: "四川", x: 53, y: 64, w: 14, h: 14 },
36:  { id: "chongqing", en: "Chongqing", zh: "重庆", x: 59, y: 65, w: 6, h: 7 },
37:  { id: "hunan", en: "Hunan", zh: "湖南", x: 64, y: 69, w: 8, h: 10 },
38:  { id: "jiangxi", en: "Jiangxi", zh: "江西", x: 70, y: 69, w: 8, h: 10 },
39:  { id: "zhejiang", en: "Zhejiang", zh: "浙江", x: 75, y: 66, w: 7, h: 8 },
40:  { id: "shanghai", en: "Shanghai", zh: "上海", x: 78, y: 59, w: 4, h: 4 },
41:  { id: "fujian", en: "Fujian", zh: "福建", x: 73, y: 75, w: 8, h: 10 },
42:  { id: "guizhou", en: "Guizhou", zh: "贵州", x: 57, y: 73, w: 9, h: 9 },
43:  { id: "yunnan", en: "Yunnan", zh: "云南", x: 50, y: 78, w: 12, h: 15 },
44:  { id: "guangxi", en: "Guangxi", zh: "广西", x: 61, y: 79, w: 10, h: 10 },
45:  { id: "guangdong", en: "Guangdong", zh: "广东", x: 68, y: 80, w: 12, h: 9 },
46:  { id: "hainan", en: "Hainan", zh: "海南", x: 64, y: 91, w: 5, h: 5 },
47:  { id: "hong-kong", en: "Hong Kong", zh: "香港", x: 72, y: 82, w: 3, h: 3 },
48:  { id: "macau", en: "Macau", zh: "澳门", x: 70, y: 82, w: 3, h: 3 },
49:  { id: "taiwan", en: "Taiwan", zh: "台湾", x: 79, y: 75, w: 6, h: 10 }
50:];
51:
52:export const fullChinaMapSrc = "/assets/china-map-gs2022-4309.jpg";
53:
54:export const provinceTextureSrc = (provinceId: string) =>
55:  `/assets/province-map-textures/${provinceId}.png`;
56:
57:export const officialMapCredit = "GS(2022)4309";
58:
59:export const officialProvinceMapEndpoint =
60:  "https://bzdt.tianditu.gov.cn/iserver/services/map-2200_China_Map/rest/maps/2200%E4%B8%87%E8%87%AA%E5%8A%A9%E5%88%B6%E5%9B%BE/image.png";
61:
62:export type ProvinceBounds = { left: number; right: number; bottom: number; top: number };
63:
64:export const officialProvinceBounds: Record<string, ProvinceBounds> = {
65:  xinjiang: { left: -3032441.53, right: -1095560.84, bottom: 4013419.31, top: 5519261.34 },
66:  tibet: { left: -2882534.85, right: -1040616.29, bottom: 2962762.13, top: 4178547.46 },
67:  qinghai: { left: -1835055.56, right: -612083.66, bottom: 3444039.15, top: 4331644.9 },
68:  gansu: { left: -1491215.4, right: -112713.32, bottom: 3475643.67, top: 4682283.18 },
69:  ningxia: { left: -504506.31, right: -203525.02, bottom: 3770553.13, top: 4236435.59 },
70:  "inner-mongolia": { left: -1036871.83, right: 1145761.66, bottom: 4021980.8, top: 5824342.47 },
71:  heilongjiang: { left: 780015.14, right: 1846587.07, bottom: 4843626.39, top: 5865660.27 },
72:  jilin: { left: 899328.46, right: 1692097.1, bottom: 4500493.69, top: 5081871.4 },
73:  liaoning: { left: 732146.17, right: 1299136.85, bottom: 4208835.76, top: 4768536.48 },
74:  beijing: { left: 457475.45, right: 624372.18, bottom: 4255681.44, top: 4438320.04 },
75:  tianjin: { left: 571919.7, right: 682570.7, bottom: 4160698.69, top: 4348965.89 },
76:  hebei: { left: 304313.42, right: 830519.25, bottom: 3863236.55, top: 4616713.01 },
77:  shanxi: { left: 23286.77, right: 383195.26, bottom: 3689180.12, top: 4391002.08 },
78:  shaanxi: { left: -413593.96, right: 107833.84, bottom: 3364465.74, top: 4253438.85 },
79:  henan: { left: 32572.5, right: 603139.29, bottom: 3340938.75, top: 3894526.89 },
80:  shandong: { left: 431224.49, right: 1101153.13, bottom: 3696141.86, top: 4125449.53 },
81:  jiangsu: { left: 570739.53, right: 1108936.9, bottom: 3310867.27, top: 3788214.02 },
82:  anhui: { left: 448683.13, right: 905226.53, bottom: 3137559.78, top: 3717298.96 },
83:  hubei: { left: -154897.4, right: 585411.56, bottom: 3072268.07, top: 3538243.38 },
84:  sichuan: { left: -1161673.21, right: -134304.7, bottom: 2765189.84, top: 3717970.63 },
85:  chongqing: { left: -452010.48, right: 18937.26, bottom: 2966193.32, top: 3423037.52 },
86:  hunan: { left: -121706.04, right: 421919.97, bottom: 2575984.25, top: 3187827.45 },
87:  jiangxi: { left: 351746.12, right: 820820.93, bottom: 2568339.09, top: 3201359.39 },
88:  zhejiang: { left: 771678.89, right: 1155409.96, bottom: 2907626.2, top: 3350021.18 },
89:  shanghai: { left: 1022373.93, right: 1119414.86, bottom: 3310265.48, top: 3402302.89 },
90:  fujian: { left: 589488.24, right: 1026850.39, bottom: 2484360.41, top: 3021531.41 },
91:  guizhou: { left: -631422.1, right: -44202.72, bottom: 2582518.52, top: 3086858.03 },
92:  yunnan: { left: -1269416.25, right: -390924.8, bottom: 2228423.99, top: 3144480.28 },
93:  guangxi: { left: -562723.31, right: 209095.02, bottom: 2218039.46, top: 2768889.85 },
94:  guangdong: { left: -35662.94, right: 733721, bottom: 2090661.16, top: 2677365.63 },
95:  hainan: { left: -148669.65, right: 110738.03, bottom: 1866031, top: 2083103.51 },
96:  "hong-kong": { left: 406816.38, right: 458023.17, bottom: 2322423.4, top: 2354059.1 },
97:  macau: { left: 347654.34, right: 390296.84, bottom: 2289105.45, top: 2331747.95 },
98:  taiwan: { left: 1035105.54, right: 1207740.72, bottom: 2334741.53, top: 2715823.31 }
99:};
100:
101:export const cityMapPoints: Record<string, { x: number; y: number }> = {
102:  "beijing-city": { x: 68.8, y: 43.6 },
103:  "shanghai-city": { x: 78.4, y: 60.2 },
104:  xian: { x: 62.2, y: 56.7 },
105:  xianyang: { x: 61.4, y: 56.6 },
106:  yanan: { x: 60.7, y: 52.4 },
107:  luoyang: { x: 66.0, y: 56.0 },
108:  kaifeng: { x: 68.0, y: 55.4 },
109:  anyang: { x: 67.6, y: 52.7 },
110:  nanjing: { x: 73.7, y: 59.2 },
111:  suzhou: { x: 76.5, y: 60.3 },
112:  yangzhou: { x: 74.6, y: 58.5 },
113:  chengdu: { x: 57.0, y: 66.8 },
114:  leshan: { x: 56.8, y: 69.6 }
115:};

 succeeded in 1007ms:
1:import { useCallback, useEffect, useState } from "react";
2:import type { Lang } from "../data/i18n";
3:
4:const STORAGE_KEY = "chinaAtlasLanguage";
5:
6:const readInitial = (): Lang => {
7:  if (typeof window === "undefined") return "en";
8:  const stored = window.localStorage.getItem(STORAGE_KEY);
9:  return stored === "zh" ? "zh" : "en";
10:};
11:
12:export function useLanguage(): {
13:  lang: Lang;
14:  setLang: (next: Lang) => void;
15:} {
16:  const [lang, setLangState] = useState<Lang>(readInitial);
17:
18:  useEffect(() => {
19:    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
20:  }, [lang]);
21:
22:  const setLang = useCallback((next: Lang) => {
23:    setLangState(next);
24:    window.localStorage.setItem(STORAGE_KEY, next);
25:  }, []);
26:
27:  return { lang, setLang };
28:}

 succeeded in 1039ms:
1:const numberFormatter = new Intl.NumberFormat("en-US");
2:
3:export const formatNumber = (value: number): string => numberFormatter.format(value);

 succeeded in 1043ms:
1:import { i18n, type Lang } from "../data/i18n";
2:
3:export const translate = (lang: Lang, key: string): string =>
4:  i18n[lang]?.[key] ?? i18n.en[key] ?? key;

 succeeded in 1037ms:
1:import { StrictMode } from "react";
2:import { createRoot } from "react-dom/client";
3:import "./styles/globals.css";
4:import App from "./App";
5:
6:createRoot(document.getElementById("root")!).render(
7:  <StrictMode>
8:    <App />
9:  </StrictMode>
10:);

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/App.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/App.css' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/index.css' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/lib/search.ts' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/styles/globals.css' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/store/AtlasContext.tsx' in C:\Users\h\Documents\New project 2
 succeeded in 858ms:
1:.counter {
2:  font-size: 16px;
3:  padding: 5px 10px;
4:  border-radius: 5px;
5:  color: var(--accent);
6:  background: var(--accent-bg);
7:  border: 2px solid transparent;
8:  transition: border-color 0.3s;
9:  margin-bottom: 24px;
10:
11:  &:hover {
12:    border-color: var(--accent-border);
13:  }
14:  &:focus-visible {
15:    outline: 2px solid var(--accent);
16:    outline-offset: 2px;
17:  }
18:}
19:
20:.hero {
21:  position: relative;
22:
23:  .base,
24:  .framework,
25:  .vite {
26:    inset-inline: 0;
27:    margin: 0 auto;
28:  }
29:
30:  .base {
31:    width: 170px;
32:    position: relative;
33:    z-index: 0;
34:  }
35:
36:  .framework,
37:  .vite {
38:    position: absolute;
39:  }
40:
41:  .framework {
42:    z-index: 1;
43:    top: 34px;
44:    height: 28px;
45:    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
46:      scale(1.4);
47:  }
48:
49:  .vite {
50:    z-index: 0;
51:    top: 107px;
52:    height: 26px;
53:    width: auto;
54:    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
55:      scale(0.8);
56:  }
57:}
58:
59:#center {
60:  display: flex;
61:  flex-direction: column;
62:  gap: 25px;
63:  place-content: center;
64:  place-items: center;
65:  flex-grow: 1;
66:
67:  @media (max-width: 1024px) {
68:    padding: 32px 20px 24px;
69:    gap: 18px;
70:  }
71:}
72:
73:#next-steps {
74:  display: flex;
75:  border-top: 1px solid var(--border);
76:  text-align: left;
77:
78:  & > div {
79:    flex: 1 1 0;
80:    padding: 32px;
81:    @media (max-width: 1024px) {
82:      padding: 24px 20px;
83:    }
84:  }
85:
86:  .icon {
87:    margin-bottom: 16px;
88:    width: 22px;
89:    height: 22px;
90:  }
91:
92:  @media (max-width: 1024px) {
93:    flex-direction: column;
94:    text-align: center;
95:  }
96:}
97:
98:#docs {
99:  border-right: 1px solid var(--border);
100:
101:  @media (max-width: 1024px) {
102:    border-right: none;
103:    border-bottom: 1px solid var(--border);
104:  }
105:}
106:
107:#next-steps ul {
108:  list-style: none;
109:  padding: 0;
110:  display: flex;
111:  gap: 8px;
112:  margin: 32px 0 0;
113:
114:  .logo {
115:    height: 18px;
116:  }
117:
118:  a {
119:    color: var(--text-h);
120:    font-size: 16px;
121:    border-radius: 6px;
122:    background: var(--social-bg);
123:    display: flex;
124:    padding: 6px 12px;
125:    align-items: center;
126:    gap: 8px;
127:    text-decoration: none;
128:    transition: box-shadow 0.3s;
129:
130:    &:hover {
131:      box-shadow: var(--shadow);
132:    }
133:    .button-icon {
134:      height: 18px;
135:      width: 18px;
136:    }
137:  }
138:
139:  @media (max-width: 1024px) {
140:    margin-top: 20px;
141:    flex-wrap: wrap;
142:    justify-content: center;
143:
144:    li {
145:      flex: 1 1 calc(50% - 8px);
146:    }
147:
148:    a {
149:      width: 100%;
150:      justify-content: center;
151:      box-sizing: border-box;
152:    }
153:  }
154:}
155:
156:#spacer {
157:  height: 88px;
158:  border-top: 1px solid var(--border);
159:  @media (max-width: 1024px) {
160:    height: 48px;
161:  }
162:}
163:
164:.ticks {
165:  position: relative;
166:  width: 100%;
167:
168:  &::before,
169:  &::after {
170:    content: '';
171:    position: absolute;
172:    top: -4.5px;
173:    border: 5px solid transparent;
174:  }
175:
176:  &::before {
177:    left: 0;
178:    border-left-color: var(--border);
179:  }
180:  &::after {
181:    right: 0;
182:    border-right-color: var(--border);
183:  }
184:}

 succeeded in 898ms:
1:import { useState } from 'react'
2:import reactLogo from './assets/react.svg'
3:import viteLogo from './assets/vite.svg'
4:import heroImg from './assets/hero.png'
5:import './App.css'
6:
7:function App() {
8:  const [count, setCount] = useState(0)
9:
10:  return (
11:    <>
12:      <section id="center">
13:        <div className="hero">
14:          <img src={heroImg} className="base" width="170" height="179" alt="" />
15:          <img src={reactLogo} className="framework" alt="React logo" />
16:          <img src={viteLogo} className="vite" alt="Vite logo" />
17:        </div>
18:        <div>
19:          <h1>Get started</h1>
20:          <p>
21:            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
22:          </p>
23:        </div>
24:        <button
25:          type="button"
26:          className="counter"
27:          onClick={() => setCount((count) => count + 1)}
28:        >
29:          Count is {count}
30:        </button>
31:      </section>
32:
33:      <div className="ticks"></div>
34:
35:      <section id="next-steps">
36:        <div id="docs">
37:          <svg className="icon" role="presentation" aria-hidden="true">
38:            <use href="/icons.svg#documentation-icon"></use>
39:          </svg>
40:          <h2>Documentation</h2>
41:          <p>Your questions, answered</p>
42:          <ul>
43:            <li>
44:              <a href="https://vite.dev/" target="_blank">
45:                <img className="logo" src={viteLogo} alt="" />
46:                Explore Vite
47:              </a>
48:            </li>
49:            <li>
50:              <a href="https://react.dev/" target="_blank">
51:                <img className="button-icon" src={reactLogo} alt="" />
52:                Learn more
53:              </a>
54:            </li>
55:          </ul>
56:        </div>
57:        <div id="social">
58:          <svg className="icon" role="presentation" aria-hidden="true">
59:            <use href="/icons.svg#social-icon"></use>
60:          </svg>
61:          <h2>Connect with us</h2>
62:          <p>Join the Vite community</p>
63:          <ul>
64:            <li>
65:              <a href="https://github.com/vitejs/vite" target="_blank">
66:                <svg
67:                  className="button-icon"
68:                  role="presentation"
69:                  aria-hidden="true"
70:                >
71:                  <use href="/icons.svg#github-icon"></use>
72:                </svg>
73:                GitHub
74:              </a>
75:            </li>
76:            <li>
77:              <a href="https://chat.vite.dev/" target="_blank">
78:                <svg
79:                  className="button-icon"
80:                  role="presentation"
81:                  aria-hidden="true"
82:                >
83:                  <use href="/icons.svg#discord-icon"></use>
84:                </svg>
85:                Discord
86:              </a>
87:            </li>
88:            <li>
89:              <a href="https://x.com/vite_js" target="_blank">
90:                <svg
91:                  className="button-icon"
92:                  role="presentation"
93:                  aria-hidden="true"
94:                >
95:                  <use href="/icons.svg#x-icon"></use>
96:                </svg>
97:                X.com
98:              </a>
99:            </li>
100:            <li>
101:              <a href="https://bsky.app/profile/vite.dev" target="_blank">
102:                <svg
103:                  className="button-icon"
104:                  role="presentation"
105:                  aria-hidden="true"
106:                >
107:                  <use href="/icons.svg#bluesky-icon"></use>
108:                </svg>
109:                Bluesky
110:              </a>
111:            </li>
112:          </ul>
113:        </div>
114:      </section>
115:
116:      <div className="ticks"></div>
117:      <section id="spacer"></section>
118:    </>
119:  )
120:}
121:
122:export default App

 succeeded in 843ms:
1::root {
2:  --text: #6b6375;
3:  --text-h: #08060d;
4:  --bg: #fff;
5:  --border: #e5e4e7;
6:  --code-bg: #f4f3ec;
7:  --accent: #aa3bff;
8:  --accent-bg: rgba(170, 59, 255, 0.1);
9:  --accent-border: rgba(170, 59, 255, 0.5);
10:  --social-bg: rgba(244, 243, 236, 0.5);
11:  --shadow:
12:    rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;
13:
14:  --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
15:  --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
16:  --mono: ui-monospace, Consolas, monospace;
17:
18:  font: 18px/145% var(--sans);
19:  letter-spacing: 0.18px;
20:  color-scheme: light dark;
21:  color: var(--text);
22:  background: var(--bg);
23:  font-synthesis: none;
24:  text-rendering: optimizeLegibility;
25:  -webkit-font-smoothing: antialiased;
26:  -moz-osx-font-smoothing: grayscale;
27:
28:  @media (max-width: 1024px) {
29:    font-size: 16px;
30:  }
31:}
32:
33:@media (prefers-color-scheme: dark) {
34:  :root {
35:    --text: #9ca3af;
36:    --text-h: #f3f4f6;
37:    --bg: #16171d;
38:    --border: #2e303a;
39:    --code-bg: #1f2028;
40:    --accent: #c084fc;
41:    --accent-bg: rgba(192, 132, 252, 0.15);
42:    --accent-border: rgba(192, 132, 252, 0.5);
43:    --social-bg: rgba(47, 48, 58, 0.5);
44:    --shadow:
45:      rgba(0, 0, 0, 0.4) 0 10px 15px -3px, rgba(0, 0, 0, 0.25) 0 4px 6px -2px;
46:  }
47:
48:  #social .button-icon {
49:    filter: invert(1) brightness(2);
50:  }
51:}
52:
53:#root {
54:  width: 1126px;
55:  max-width: 100%;
56:  margin: 0 auto;
57:  text-align: center;
58:  border-inline: 1px solid var(--border);
59:  min-height: 100svh;
60:  display: flex;
61:  flex-direction: column;
62:  box-sizing: border-box;
63:}
64:
65:body {
66:  margin: 0;
67:}
68:
69:h1,
70:h2 {
71:  font-family: var(--heading);
72:  font-weight: 500;
73:  color: var(--text-h);
74:}
75:
76:h1 {
77:  font-size: 56px;
78:  letter-spacing: -1.68px;
79:  margin: 32px 0;
80:  @media (max-width: 1024px) {
81:    font-size: 36px;
82:    margin: 20px 0;
83:  }
84:}
85:h2 {
86:  font-size: 24px;
87:  line-height: 118%;
88:  letter-spacing: -0.24px;
89:  margin: 0 0 8px;
90:  @media (max-width: 1024px) {
91:    font-size: 20px;
92:  }
93:}
94:p {
95:  margin: 0;
96:}
97:
98:code,
99:.counter {
100:  font-family: var(--mono);
101:  display: inline-flex;
102:  border-radius: 4px;
103:  color: var(--text-h);
104:}
105:
106:code {
107:  font-size: 15px;
108:  line-height: 135%;
109:  padding: 4px 8px;
110:  background: var(--code-bg);
111:}

 succeeded in 856ms:
1:import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
2:import { provinceHitAreas } from "../data/map-sources";
3:
4:export type SearchRecord = {
5:  zh: string;
6:  en: string;
7:  type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
8:  provinceId: string;
9:  cityId?: string;
10:  aliases: string[];
11:};
12:
13:const normalize = (value: string): string =>
14:  value.toLowerCase().replace(/[·,，。.\s/]+/g, "").trim();
15:
16:const buildIndex = (): SearchRecord[] => {
17:  const records: SearchRecord[] = [];
18:
19:  atlasData.forEach((province) => {
20:    records.push({
21:      zh: province.zh,
22:      en: province.name,
23:      type: "province",
24:      provinceId: province.id,
25:      aliases: [province.zh, province.name]
26:    });
27:
28:    province.cities.forEach((city) => {
29:      records.push({
30:        zh: city.zh,
31:        en: city.name,
32:        type: "city",
33:        provinceId: province.id,
34:        cityId: city.id,
35:        aliases: [city.zh, city.name, city.province]
36:      });
37:
38:      [city.museum, city.museumZh].filter(Boolean).forEach((group) => {
39:        group.split("/").map((s) => s.trim()).filter(Boolean).forEach((museum) => {
40:          records.push({
41:            zh: museum,
42:            en: museum,
43:            type: "museum",
44:            provinceId: province.id,
45:            cityId: city.id,
46:            aliases: [museum]
47:          });
48:        });
49:      });
50:
51:      city.sites.forEach((site, index) => {
52:        const siteZh = city.sitesZh[index] || site;
53:        records.push({
54:          zh: siteZh,
55:          en: site,
56:          type: "site",
57:          provinceId: province.id,
58:          cityId: city.id,
59:          aliases: [site, siteZh]
60:        });
61:      });
62:    });
63:  });
64:
65:  provinceHitAreas.forEach((area) => {
66:    if (records.some((r) => r.type === "province" && r.provinceId === area.id)) return;
67:    records.push({
68:      zh: area.zh,
69:      en: area.en,
70:      type: "province",
71:      provinceId: area.id,
72:      aliases: [area.zh, area.en]
73:    });
74:  });
75:
76:  Object.entries(provinceAttractionSeed).forEach(([provinceId, attractions]) => {
77:    attractions.forEach((attraction) => {
78:      records.push({
79:        zh: attraction.zh,
80:        en: attraction.en,
81:        type: "site",
82:        provinceId,
83:        aliases: [attraction.zh, attraction.en]
84:      });
85:    });
86:  });
87:
88:  administrativeSearchSeed.forEach((item) => {
89:    records.push({
90:      zh: item.zh,
91:      en: item.en,
92:      type: item.type,
93:      provinceId: item.provinceId,
94:      cityId: item.cityId,
95:      aliases: [item.zh, item.en, ...(item.aliases ?? [])]
96:    });
97:  });
98:
99:  return records;
100:};
101:
102:const searchIndex = buildIndex();
103:
104:export const getAllRecords = (): SearchRecord[] => searchIndex;
105:
106:export const findBestMatch = (query: string): SearchRecord | null => {
107:  const target = normalize(query);
108:  if (!target) return null;
109:
110:  let best: { record: SearchRecord; score: number } | null = null;
111:  for (const record of searchIndex) {
112:    const tokens = [record.zh, record.en, ...record.aliases].map(normalize).filter(Boolean);
113:    let score = 0;
114:    if (tokens.some((t) => t === target)) score = 3;
115:    else if (tokens.some((t) => t.startsWith(target))) score = 2;
116:    else if (tokens.some((t) => t.includes(target) || target.includes(t))) score = 1;
117:    if (score > 0 && (!best || score > best.score)) {
118:      best = { record, score };
119:      if (score === 3) break;
120:    }
121:  }
122:  return best?.record ?? null;
123:};

 succeeded in 902ms:
1:import { createContext, useContext, useMemo, useReducer, type ReactNode } from "react";
2:import { atlasData, type CityRecord, type ProvinceRecord } from "../data/atlas";
3:import { provinceHitAreas } from "../data/map-sources";
4:
5:type State = {
6:  selectedProvinceId: string | null;
7:  selectedCityId: string | null;
8:  is3DEnabled: boolean;
9:};
10:
11:type Action =
12:  | { type: "selectProvince"; provinceId: string | null }
13:  | { type: "selectCity"; cityId: string | null }
14:  | { type: "toggle3D" }
15:  | { type: "reset" };
16:
17:const initialState: State = {
18:  selectedProvinceId: null,
19:  selectedCityId: null,
20:  is3DEnabled: false
21:};
22:
23:const reducer = (state: State, action: Action): State => {
24:  switch (action.type) {
25:    case "selectProvince":
26:      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: null };
27:    case "selectCity":
28:      return { ...state, selectedCityId: action.cityId };
29:    case "toggle3D":
30:      return { ...state, is3DEnabled: !state.is3DEnabled };
31:    case "reset":
32:      return initialState;
33:    default:
34:      return state;
35:  }
36:};
37:
38:type AtlasContextValue = State & {
39:  province: ProvinceRecord | null;
40:  city: CityRecord | null;
41:  selectProvince: (id: string | null) => void;
42:  selectCity: (id: string | null) => void;
43:  toggle3D: () => void;
44:  reset: () => void;
45:};
46:
47:const AtlasContext = createContext<AtlasContextValue | null>(null);
48:
49:const findProvinceById = (id: string | null): ProvinceRecord | null => {
50:  if (!id) return null;
51:  const known = atlasData.find((p) => p.id === id);
52:  if (known) return known;
53:  const area = provinceHitAreas.find((a) => a.id === id);
54:  return area
55:    ? { id: area.id, name: area.en, zh: area.zh, type: "Province", color: "muted", cities: [] }
56:    : null;
57:};
58:
59:export function AtlasProvider({ children }: { children: ReactNode }) {
60:  const [state, dispatch] = useReducer(reducer, initialState);
61:
62:  const value = useMemo<AtlasContextValue>(() => {
63:    const province = findProvinceById(state.selectedProvinceId);
64:    const city = province?.cities.find((c) => c.id === state.selectedCityId) ?? null;
65:    return {
66:      ...state,
67:      province,
68:      city,
69:      selectProvince: (id) => dispatch({ type: "selectProvince", provinceId: id }),
70:      selectCity: (id) => dispatch({ type: "selectCity", cityId: id }),
71:      toggle3D: () => dispatch({ type: "toggle3D" }),
72:      reset: () => dispatch({ type: "reset" })
73:    };
74:  }, [state]);
75:
76:  return <AtlasContext.Provider value={value}>{children}</AtlasContext.Provider>;
77:}
78:
79:export function useAtlas(): AtlasContextValue {
80:  const value = useContext(AtlasContext);
81:  if (!value) throw new Error("useAtlas must be used within <AtlasProvider>");
82:  return value;
83:}

 succeeded in 926ms:
1:@import "tailwindcss";
2:
3:@theme {
4:  --color-ink: #18201d;
5:  --color-muted: #5b6863;
6:  --color-line: #d4dbd7;
7:  --color-paper: #f6f8f6;
8:  --color-jade: #176f62;
9:  --color-jade-soft: rgba(23, 112, 97, 0.08);
10:  --font-sans: "Inter", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
11:}
12:
13:html,
14:body {
15:  background: var(--color-paper);
16:  color: var(--color-ink);
17:  font-family: var(--font-sans);
18:}
19:
20:body {
21:  margin: 0;
22:  -webkit-font-smoothing: antialiased;
23:}
24:
25:button {
26:  font: inherit;
27:  cursor: pointer;
28:}
29:
30:a {
31:  color: inherit;
32:}

codex
我已经完整看完了 `src` 里的源码文件和资产清单；目前最关键的问题不是 reducer 或 hook，而是入口仍是 Vite starter，真正的 Atlas 组件还没有接入，所以现有骨架暂时无法验证目标 UX。接下来我补看一下 `v2` 根目录配置，确认 Tailwind v4、Vite 和 TS 配置没有和源码组织冲突。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg --files v2 -g "!node_modules" -g "!dist"' in C:\Users\h\Documents\New project 2
 succeeded in 540ms:
v2\vite.config.ts
v2\tsconfig.node.json
v2\tsconfig.json
v2\tsconfig.app.json
v2\src\App.tsx
v2\README.md
v2\index.html
v2\eslint.config.js
v2\package-lock.json
v2\package.json
v2\src\main.tsx
v2\src\styles\globals.css
v2\public\favicon.svg
v2\public\assets\three.module.min.js
v2\public\assets\china-map-gs2022-4309.jpg
v2\public\assets\china-province-shapes.json
v2\src\hooks\useCityViews.ts
v2\src\lib\search.ts
v2\src\lib\i18n.ts
v2\src\lib\format.ts
v2\public\assets\province-map-textures\heilongjiang.png
v2\public\assets\province-map-textures\hebei.png
v2\public\assets\province-map-textures\hainan.png
v2\public\assets\province-map-textures\guizhou.png
v2\public\assets\province-map-textures\guangxi.png
v2\public\assets\province-map-textures\guangdong.png
v2\public\assets\province-map-textures\gansu.png
v2\public\assets\province-map-textures\fujian.png
v2\public\assets\province-map-textures\chongqing.png
v2\public\assets\province-map-textures\beijing.png
v2\public\assets\province-map-textures\anhui.png
v2\public\assets\province-map-textures\jiangxi.png
v2\public\assets\province-map-textures\jiangsu.png
v2\public\assets\province-map-textures\inner-mongolia.png
v2\public\assets\province-map-textures\hunan.png
v2\public\assets\province-map-textures\hubei.png
v2\public\assets\province-map-textures\hong-kong.png
v2\public\assets\province-map-textures\henan.png
v2\public\assets\province-map-textures\ningxia.png
v2\public\assets\province-map-textures\macau.png
v2\public\assets\province-map-textures\liaoning.png
v2\public\assets\province-map-textures\jilin.png
v2\public\assets\province-map-textures\shaanxi.png
v2\public\assets\province-map-textures\qinghai.png
v2\public\assets\province-map-textures\shandong.png
v2\public\assets\province-map-textures\shanghai.png
v2\src\store\LanguageContext.tsx
v2\src\store\AtlasContext.tsx
v2\public\assets\province-map-textures\tianjin.png
v2\public\assets\province-map-textures\taiwan.png
v2\public\assets\province-map-textures\sichuan.png
v2\public\assets\province-map-textures\shanxi.png
v2\public\assets\province-map-textures\xinjiang.png
v2\public\assets\province-map-textures\tibet.png
v2\public\assets\province-map-textures\yunnan.png
v2\public\assets\province-map-textures\zhejiang.png
v2\src\data\map-sources.ts
v2\src\data\i18n.ts
v2\src\data\atlas.ts
v2\src\components\layout\LanguageSwitch.tsx

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem v2 -Force' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Item v2/src/assets/hero.png | Select-Object FullName,Length,LastWriteTime' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Raw v2/src/assets/react.svg' in C:\Users\h\Documents\New project 2
 succeeded in 602ms:


    目录: C:\Users\h\Documents\New project 2\v2


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----          2026/5/9     17:36                node_modules                                                         
d-----          2026/5/9     17:43                public                                                               
d-----          2026/5/9     17:44                src                                                                  
-a----          2026/5/9     17:35            253 .gitignore                                                           
-a----          2026/5/9     17:35            591 eslint.config.js                                                     
-a----          2026/5/9     17:41            592 index.html                                                           
-a----          2026/5/9     17:36         105330 package-lock.json                                                    
-a----          2026/5/9     17:36            790 package.json                                                         
-a----          2026/5/9     17:35           2425 README.md                                                            
-a----          2026/5/9     17:35            617 tsconfig.app.json                                                    
-a----          2026/5/9     17:35            119 tsconfig.json                                                        
-a----          2026/5/9     17:35            591 tsconfig.node.json                                                   
-a----          2026/5/9     17:41            195 vite.config.ts                                                       



2026-05-09T09:44:11.186566Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.7 seconds
Output:
Get-Item : Cannot find path 'C:\Users\h\Documents\New project 2\v2\src\assets\hero.png' because it does not exist.
At line:2 char:1
+ Get-Item v2/src/assets/hero.png | Select-Object FullName,Length,LastW ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\Users\h\Docu...assets\hero.png:String) [Get-Item], ItemNotFoundExcep 
   tion
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.GetItemCommand
 

 exited 1 in 719ms:
Get-Item : Cannot find path 'C:\Users\h\Documents\New project 2\v2\src\assets\hero.png' because it does not exist.
At line:2 char:1
+ Get-Item v2/src/assets/hero.png | Select-Object FullName,Length,LastW ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\Users\h\Docu...assets\hero.png:String) [Get-Item], ItemNotFoundExcep 
   tion
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.GetItemCommand
 

2026-05-09T09:44:11.188190Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.7 seconds
Output:
Get-Content : Cannot find path 'C:\Users\h\Documents\New project 2\v2\src\assets\react.svg' because it does not exist.
At line:2 char:1
+ Get-Content -Raw v2/src/assets/react.svg
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\Users\h\Docu...ssets\react.svg:String) [Get-Content], ItemNotFoundEx 
   ception
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.GetContentCommand
 

 exited 1 in 720ms:
Get-Content : Cannot find path 'C:\Users\h\Documents\New project 2\v2\src\assets\react.svg' because it does not exist.
At line:2 char:1
+ Get-Content -Raw v2/src/assets/react.svg
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\Users\h\Docu...ssets\react.svg:String) [Get-Content], ItemNotFoundEx 
   ception
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.GetContentCommand
 

codex
文件树在读取过程中发生了变化：`src/assets` 现在已经不存在，但 `App.tsx` 还在引用这些文件，同时新出现了 `store/LanguageContext.tsx` 和 `components/layout/LanguageSwitch.tsx`。我会按当前磁盘状态重新核对 `v2/src`，把这些变化一起纳入评审。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg --files v2/src' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/store/LanguageContext.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/components/layout/LanguageSwitch.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/package.json' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/vite.config.ts' in C:\Users\h\Documents\New project 2
 succeeded in 545ms:
v2/src\main.tsx
v2/src\App.tsx
v2/src\styles\globals.css
v2/src\store\AtlasContext.tsx
v2/src\store\LanguageContext.tsx
v2/src\data\atlas.ts
v2/src\data\i18n.ts
v2/src\data\map-sources.ts
v2/src\hooks\useCityViews.ts
v2/src\lib\search.ts
v2/src\lib\i18n.ts
v2/src\lib\format.ts
v2/src\components\search\PlaceSearch.tsx
v2/src\components\layout\SiteHeader.tsx
v2/src\components\layout\LanguageSwitch.tsx

 succeeded in 639ms:
1:import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
2:import type { Lang } from "../data/i18n";
3:import { translate } from "../lib/i18n";
4:
5:const STORAGE_KEY = "chinaAtlasLanguage";
6:
7:const readInitial = (): Lang => {
8:  if (typeof window === "undefined") return "en";
9:  return window.localStorage.getItem(STORAGE_KEY) === "zh" ? "zh" : "en";
10:};
11:
12:type LanguageContextValue = {
13:  lang: Lang;
14:  setLang: (next: Lang) => void;
15:  t: (key: string) => string;
16:};
17:
18:const LanguageContext = createContext<LanguageContextValue | null>(null);
19:
20:export function LanguageProvider({ children }: { children: ReactNode }) {
21:  const [lang, setLangState] = useState<Lang>(readInitial);
22:
23:  useEffect(() => {
24:    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
25:  }, [lang]);
26:
27:  const setLang = useCallback((next: Lang) => {
28:    setLangState(next);
29:    window.localStorage.setItem(STORAGE_KEY, next);
30:  }, []);
31:
32:  const value = useMemo<LanguageContextValue>(
33:    () => ({ lang, setLang, t: (key) => translate(lang, key) }),
34:    [lang, setLang]
35:  );
36:
37:  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
38:}
39:
40:export function useLang(): LanguageContextValue {
41:  const value = useContext(LanguageContext);
42:  if (!value) throw new Error("useLang must be used within <LanguageProvider>");
43:  return value;
44:}

 succeeded in 669ms:
1:{
2:  "name": "v2",
3:  "private": true,
4:  "version": "0.0.0",
5:  "type": "module",
6:  "scripts": {
7:    "dev": "vite",
8:    "build": "tsc -b && vite build",
9:    "lint": "eslint .",
10:    "preview": "vite preview"
11:  },
12:  "dependencies": {
13:    "@tailwindcss/vite": "^4.3.0",
14:    "clsx": "^2.1.1",
15:    "react": "^19.2.5",
16:    "react-dom": "^19.2.5",
17:    "tailwindcss": "^4.3.0"
18:  },
19:  "devDependencies": {
20:    "@eslint/js": "^10.0.1",
21:    "@types/node": "^24.12.2",
22:    "@types/react": "^19.2.14",
23:    "@types/react-dom": "^19.2.3",
24:    "@vitejs/plugin-react": "^6.0.1",
25:    "eslint": "^10.2.1",
26:    "eslint-plugin-react-hooks": "^7.1.1",
27:    "eslint-plugin-react-refresh": "^0.5.2",
28:    "globals": "^17.5.0",
29:    "typescript": "~6.0.2",
30:    "typescript-eslint": "^8.58.2",
31:    "vite": "^8.0.10"
32:  }
33:}

 succeeded in 681ms:
1:import { defineConfig } from "vite";
2:import react from "@vitejs/plugin-react";
3:import tailwindcss from "@tailwindcss/vite";
4:
5:export default defineConfig({
6:  plugins: [react(), tailwindcss()]
7:});

 succeeded in 693ms:
1:import clsx from "clsx";
2:import { useLang } from "../../store/LanguageContext";
3:import type { Lang } from "../../data/i18n";
4:
5:const OPTIONS: Array<{ code: Lang; label: string }> = [
6:  { code: "en", label: "EN" },
7:  { code: "zh", label: "中文" }
8:];
9:
10:export default function LanguageSwitch() {
11:  const { lang, setLang } = useLang();
12:  return (
13:    <div className="inline-flex overflow-hidden rounded-full border border-line">
14:      {OPTIONS.map((option) => (
15:        <button
16:          key={option.code}
17:          type="button"
18:          onClick={() => setLang(option.code)}
19:          className={clsx(
20:            "px-3 py-1 text-xs font-bold uppercase tracking-widest transition",
21:            option.code === lang ? "bg-ink text-white" : "bg-white text-muted hover:text-ink"
22:          )}
23:        >
24:          {option.label}
25:        </button>
26:      ))}
27:    </div>
28:  );
29:}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/App.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/main.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/components/search/PlaceSearch.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/components/layout/SiteHeader.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/store/AtlasContext.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/styles/globals.css' in C:\Users\h\Documents\New project 2
 succeeded in 549ms:
1:import { StrictMode } from "react";
2:import { createRoot } from "react-dom/client";
3:import "./styles/globals.css";
4:import App from "./App";
5:
6:createRoot(document.getElementById("root")!).render(
7:  <StrictMode>
8:    <App />
9:  </StrictMode>
10:);

 succeeded in 557ms:
1:import { LanguageProvider } from "./store/LanguageContext";
2:import { AtlasProvider } from "./store/AtlasContext";
3:import SiteHeader from "./components/layout/SiteHeader";
4:import SiteFooter from "./components/layout/SiteFooter";
5:import HeroMap from "./components/map/HeroMap";
6:import HistoryVideo from "./components/sections/HistoryVideo";
7:import AtlasSection from "./components/atlas/AtlasSection";
8:import MuseumFlow from "./components/sections/MuseumFlow";
9:import SourcesNote from "./components/sections/SourcesNote";
10:
11:export default function App() {
12:  return (
13:    <LanguageProvider>
14:      <AtlasProvider>
15:        <SiteHeader />
16:        <main id="top" className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-10">
17:          <HeroMap />
18:          <HistoryVideo />
19:          <AtlasSection />
20:          <MuseumFlow />
21:          <SourcesNote />
22:        </main>
23:        <SiteFooter />
24:      </AtlasProvider>
25:    </LanguageProvider>
26:  );
27:}

 succeeded in 635ms:
1:import { createContext, useContext, useMemo, useReducer, type ReactNode } from "react";
2:import { atlasData, type CityRecord, type ProvinceRecord } from "../data/atlas";
3:import { provinceHitAreas } from "../data/map-sources";
4:
5:type State = {
6:  selectedProvinceId: string | null;
7:  selectedCityId: string | null;
8:  is3DEnabled: boolean;
9:};
10:
11:type Action =
12:  | { type: "selectProvince"; provinceId: string | null }
13:  | { type: "selectCity"; cityId: string | null }
14:  | { type: "toggle3D" }
15:  | { type: "reset" };
16:
17:const initialState: State = {
18:  selectedProvinceId: null,
19:  selectedCityId: null,
20:  is3DEnabled: false
21:};
22:
23:const reducer = (state: State, action: Action): State => {
24:  switch (action.type) {
25:    case "selectProvince":
26:      return { ...state, selectedProvinceId: action.provinceId, selectedCityId: null };
27:    case "selectCity":
28:      return { ...state, selectedCityId: action.cityId };
29:    case "toggle3D":
30:      return { ...state, is3DEnabled: !state.is3DEnabled };
31:    case "reset":
32:      return initialState;
33:    default:
34:      return state;
35:  }
36:};
37:
38:type AtlasContextValue = State & {
39:  province: ProvinceRecord | null;
40:  city: CityRecord | null;
41:  selectProvince: (id: string | null) => void;
42:  selectCity: (id: string | null) => void;
43:  toggle3D: () => void;
44:  reset: () => void;
45:};
46:
47:const AtlasContext = createContext<AtlasContextValue | null>(null);
48:
49:const findProvinceById = (id: string | null): ProvinceRecord | null => {
50:  if (!id) return null;
51:  const known = atlasData.find((p) => p.id === id);
52:  if (known) return known;
53:  const area = provinceHitAreas.find((a) => a.id === id);
54:  return area
55:    ? { id: area.id, name: area.en, zh: area.zh, type: "Province", color: "muted", cities: [] }
56:    : null;
57:};
58:
59:export function AtlasProvider({ children }: { children: ReactNode }) {
60:  const [state, dispatch] = useReducer(reducer, initialState);
61:
62:  const value = useMemo<AtlasContextValue>(() => {
63:    const province = findProvinceById(state.selectedProvinceId);
64:    const city = province?.cities.find((c) => c.id === state.selectedCityId) ?? null;
65:    return {
66:      ...state,
67:      province,
68:      city,
69:      selectProvince: (id) => dispatch({ type: "selectProvince", provinceId: id }),
70:      selectCity: (id) => dispatch({ type: "selectCity", cityId: id }),
71:      toggle3D: () => dispatch({ type: "toggle3D" }),
72:      reset: () => dispatch({ type: "reset" })
73:    };
74:  }, [state]);
75:
76:  return <AtlasContext.Provider value={value}>{children}</AtlasContext.Provider>;
77:}
78:
79:export function useAtlas(): AtlasContextValue {
80:  const value = useContext(AtlasContext);
81:  if (!value) throw new Error("useAtlas must be used within <AtlasProvider>");
82:  return value;
83:}

 succeeded in 638ms:
1:@import "tailwindcss";
2:
3:@theme {
4:  --color-ink: #18201d;
5:  --color-muted: #5b6863;
6:  --color-line: #d4dbd7;
7:  --color-paper: #f6f8f6;
8:  --color-jade: #176f62;
9:  --color-jade-soft: rgba(23, 112, 97, 0.08);
10:  --font-sans: "Inter", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
11:}
12:
13:html,
14:body {
15:  background: var(--color-paper);
16:  color: var(--color-ink);
17:  font-family: var(--font-sans);
18:}
19:
20:body {
21:  margin: 0;
22:  -webkit-font-smoothing: antialiased;
23:}
24:
25:button {
26:  font: inherit;
27:  cursor: pointer;
28:}
29:
30:a {
31:  color: inherit;
32:}

 succeeded in 647ms:
1:import { useLang } from "../../store/LanguageContext";
2:import LanguageSwitch from "./LanguageSwitch";
3:import PlaceSearch from "../search/PlaceSearch";
4:
5:export default function SiteHeader() {
6:  const { t } = useLang();
7:  return (
8:    <header className="sticky top-0 z-30 flex flex-wrap items-center gap-4 border-b border-line bg-paper/85 px-4 py-3 backdrop-blur">
9:      <a href="#top" className="flex items-center gap-2">
10:        <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-white">中</span>
11:        <span className="leading-tight">
12:          <strong className="block text-base font-bold">China Atlas</strong>
13:          <small className="block text-xs text-muted">{t("brandSubtitle")}</small>
14:        </span>
15:      </a>
16:      <div className="order-3 w-full md:order-2 md:flex-1">
17:        <PlaceSearch />
18:      </div>
19:      <nav className="order-2 hidden items-center gap-4 text-sm md:order-3 md:flex">
20:        <a href="#atlas" className="hover:text-jade">{t("navAtlas")}</a>
21:        <a href="#video" className="hover:text-jade">{t("navVideo")}</a>
22:        <a href="#museums" className="hover:text-jade">{t("navMuseums")}</a>
23:        <a href="#sources" className="hover:text-jade">{t("navSources")}</a>
24:      </nav>
25:      <LanguageSwitch />
26:    </header>
27:  );
28:}

 succeeded in 656ms:
1:import { useId, useMemo, useState } from "react";
2:import { useLang } from "../../store/LanguageContext";
3:import { useAtlas } from "../../store/AtlasContext";
4:import { findBestMatch, getAllRecords } from "../../lib/search";
5:import { placeTypeLabels } from "../../data/i18n";
6:
7:export default function PlaceSearch() {
8:  const { t, lang } = useLang();
9:  const { selectProvince, selectCity } = useAtlas();
10:  const [value, setValue] = useState("");
11:  const [hint, setHint] = useState<string | null>(null);
12:  const datalistId = useId();
13:
14:  const suggestions = useMemo(() => getAllRecords().slice(0, 120), []);
15:
16:  const submit = (event: React.FormEvent) => {
17:    event.preventDefault();
18:    const record = findBestMatch(value);
19:    if (!record) {
20:      setHint(t("searchNoMatch"));
21:      return;
22:    }
23:    selectProvince(record.provinceId);
24:    if (record.cityId) selectCity(record.cityId);
25:    setHint(`${t("searchJumped")} ${lang === "zh" ? record.zh : record.en}`);
26:    document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
27:  };
28:
29:  return (
30:    <form onSubmit={submit} className="flex flex-1 items-center gap-2">
31:      <input
32:        type="search"
33:        list={datalistId}
34:        autoComplete="off"
35:        value={value}
36:        onChange={(e) => setValue(e.target.value)}
37:        placeholder={t("searchPlaceholder")}
38:        className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2 text-sm focus:border-ink focus:outline-none"
39:      />
40:      <button
41:        type="submit"
42:        className="rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
43:      >
44:        {t("searchButton")}
45:      </button>
46:      <datalist id={datalistId}>
47:        {suggestions.map((record, i) => {
48:          const primary = lang === "zh" ? record.zh : record.en;
49:          const typeLabel = placeTypeLabels[lang][record.type] ?? record.type;
50:          return <option key={`${record.provinceId}-${record.cityId ?? ""}-${i}`} value={primary} label={`${primary} · ${typeLabel}`} />;
51:        })}
52:      </datalist>
53:      {hint && <span className="ml-2 hidden text-xs text-muted lg:inline">{hint}</span>}
54:    </form>
55:  );
56:}

codex
当前 `App.tsx` 已经从 starter 切到真实页面组合，但它引用的几个核心组件还没出现在 `src` 文件树里。为了区分“结构建议”和“现在会不会编译”，我会跑一次构建，直接确认阻塞点。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in C:\Users\h\Documents\New project 2\v2
2026-05-09T09:44:53.972794Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 2.8 seconds
Output:

> v2@0.0.0 build
> tsc -b && vite build

src/App.tsx(5,21): error TS2307: Cannot find module './components/map/HeroMap' or its corresponding type declarations.
src/App.tsx(6,26): error TS2307: Cannot find module './components/sections/HistoryVideo' or its corresponding type declarations.
src/App.tsx(7,26): error TS2307: Cannot find module './components/atlas/AtlasSection' or its corresponding type declarations.
src/App.tsx(8,24): error TS2307: Cannot find module './components/sections/MuseumFlow' or its corresponding type declarations.
src/App.tsx(9,25): error TS2307: Cannot find module './components/sections/SourcesNote' or its corresponding type declarations.

 exited 1 in 2753ms:

> v2@0.0.0 build
> tsc -b && vite build

src/App.tsx(5,21): error TS2307: Cannot find module './components/map/HeroMap' or its corresponding type declarations.
src/App.tsx(6,26): error TS2307: Cannot find module './components/sections/HistoryVideo' or its corresponding type declarations.
src/App.tsx(7,26): error TS2307: Cannot find module './components/atlas/AtlasSection' or its corresponding type declarations.
src/App.tsx(8,24): error TS2307: Cannot find module './components/sections/MuseumFlow' or its corresponding type declarations.
src/App.tsx(9,25): error TS2307: Cannot find module './components/sections/SourcesNote' or its corresponding type declarations.

codex
构建结果确认了当前最大问题：入口已经指向 `HeroMap`、`AtlasSection` 等目标组件，但这些文件未落地，项目现在不能通过 TypeScript 构建。我再跑一次 lint，看除了缺文件之外有没有即时可修的结构问题。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run lint' in C:\Users\h\Documents\New project 2\v2
2026-05-09T09:45:06.559670Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 6.3 seconds
Output:

> v2@0.0.0 lint
> eslint .


C:\Users\h\Documents\New project 2\v2\src\store\AtlasContext.tsx
  79:17  error  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

C:\Users\h\Documents\New project 2\v2\src\store\LanguageContext.tsx
  40:17  error  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

✖ 2 problems (2 errors, 0 warnings)


 exited 1 in 6313ms:

> v2@0.0.0 lint
> eslint .


C:\Users\h\Documents\New project 2\v2\src\store\AtlasContext.tsx
  79:17  error  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

C:\Users\h\Documents\New project 2\v2\src\store\LanguageContext.tsx
  40:17  error  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

✖ 2 problems (2 errors, 0 warnings)


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/eslint.config.js' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/tsconfig.app.json' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/tsconfig.json' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/index.html' in C:\Users\h\Documents\New project 2
 succeeded in 455ms:
1:import js from '@eslint/js'
2:import globals from 'globals'
3:import reactHooks from 'eslint-plugin-react-hooks'
4:import reactRefresh from 'eslint-plugin-react-refresh'
5:import tseslint from 'typescript-eslint'
6:import { defineConfig, globalIgnores } from 'eslint/config'
7:
8:export default defineConfig([
9:  globalIgnores(['dist']),
10:  {
11:    files: ['**/*.{ts,tsx}'],
12:    extends: [
13:      js.configs.recommended,
14:      tseslint.configs.recommended,
15:      reactHooks.configs.flat.recommended,
16:      reactRefresh.configs.vite,
17:    ],
18:    languageOptions: {
19:      globals: globals.browser,
20:    },
21:  },
22:])

 succeeded in 451ms:
1:{
2:  "compilerOptions": {
3:    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
4:    "target": "es2023",
5:    "lib": ["ES2023", "DOM"],
6:    "module": "esnext",
7:    "types": ["vite/client"],
8:    "skipLibCheck": true,
9:
10:    /* Bundler mode */
11:    "moduleResolution": "bundler",
12:    "allowImportingTsExtensions": true,
13:    "verbatimModuleSyntax": true,
14:    "moduleDetection": "force",
15:    "noEmit": true,
16:    "jsx": "react-jsx",
17:
18:    /* Linting */
19:    "noUnusedLocals": true,
20:    "noUnusedParameters": true,
21:    "erasableSyntaxOnly": true,
22:    "noFallthroughCasesInSwitch": true
23:  },
24:  "include": ["src"]
25:}

 succeeded in 431ms:
1:<!doctype html>
2:<html lang="en">
3:  <head>
4:    <meta charset="UTF-8" />
5:    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
6:    <title>China Atlas Museum</title>
7:    <link
8:      rel="icon"
9:      href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='10' fill='%2318201d'/%3E%3Ctext x='32' y='42' text-anchor='middle' font-size='34' fill='white'%3E中%3C/text%3E%3C/svg%3E"
10:    />
11:  </head>
12:  <body>
13:    <div id="root"></div>
14:    <script type="module" src="/src/main.tsx"></script>
15:  </body>
16:</html>

 succeeded in 433ms:
1:{
2:  "files": [],
3:  "references": [
4:    { "path": "./tsconfig.app.json" },
5:    { "path": "./tsconfig.node.json" }
6:  ]
7:}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Test-Path v2/src/components/layout/SiteFooter.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Recurse -File v2/src/components | Select-Object FullName' in C:\Users\h\Documents\New project 2
 succeeded in 420ms:
True

 succeeded in 488ms:

FullName                                                                       
--------                                                                       
C:\Users\h\Documents\New project 2\v2\src\components\atlas\AtlasSection.tsx    
C:\Users\h\Documents\New project 2\v2\src\components\atlas\CityList.tsx        
C:\Users\h\Documents\New project 2\v2\src\components\atlas\CityProfile.tsx     
C:\Users\h\Documents\New project 2\v2\src\components\atlas\ProvinceRail.tsx    
C:\Users\h\Documents\New project 2\v2\src\components\layout\LanguageSwitch.tsx 
C:\Users\h\Documents\New project 2\v2\src\components\layout\SiteFooter.tsx     
C:\Users\h\Documents\New project 2\v2\src\components\layout\SiteHeader.tsx     
C:\Users\h\Documents\New project 2\v2\src\components\map\HeroMap.tsx           
C:\Users\h\Documents\New project 2\v2\src\components\map\Map3D.tsx             
C:\Users\h\Documents\New project 2\v2\src\components\map\ProvinceClickLayer.tsx
C:\Users\h\Documents\New project 2\v2\src\components\map\ProvincePop.tsx       
C:\Users\h\Documents\New project 2\v2\src\components\search\PlaceSearch.tsx    
C:\Users\h\Documents\New project 2\v2\src\components\sections\HistoryVideo.tsx 
C:\Users\h\Documents\New project 2\v2\src\components\sections\MuseumFlow.tsx   
C:\Users\h\Documents\New project 2\v2\src\components\sections\SourcesNote.tsx  



codex
又有一批组件刚落地到了 `components/map`、`components/atlas` 和 `components/sections`。我会按最新文件树重新读取新增组件；最终评审会以最后一次完整枚举后的状态为准。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg --files v2/src' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/components/map/HeroMap.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/components/map/ProvinceClickLayer.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/components/map/ProvincePop.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/components/map/Map3D.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/components/atlas/AtlasSection.tsx' in C:\Users\h\Documents\New project 2
 succeeded in 1132ms:
v2/src\App.tsx
v2/src\main.tsx
v2/src\styles\globals.css
v2/src\lib\format.ts
v2/src\store\LanguageContext.tsx
v2/src\lib\search.ts
v2/src\store\AtlasContext.tsx
v2/src\lib\i18n.ts
v2/src\data\map-sources.ts
v2/src\data\i18n.ts
v2/src\data\atlas.ts
v2/src\hooks\useCityViews.ts
v2/src\components\atlas\ProvinceRail.tsx
v2/src\components\atlas\CityProfile.tsx
v2/src\components\atlas\CityList.tsx
v2/src\components\atlas\AtlasSection.tsx
v2/src\components\search\PlaceSearch.tsx
v2/src\components\layout\SiteFooter.tsx
v2/src\components\layout\LanguageSwitch.tsx
v2/src\components\layout\SiteHeader.tsx
v2/src\components\sections\SourcesNote.tsx
v2/src\components\sections\MuseumFlow.tsx
v2/src\components\sections\HistoryVideo.tsx
v2/src\components\map\ProvincePop.tsx
v2/src\components\map\ProvinceClickLayer.tsx
v2/src\components\map\Map3D.tsx
v2/src\components\map\HeroMap.tsx

 succeeded in 1221ms:
1:import clsx from "clsx";
2:import { provinceHitAreas } from "../../data/map-sources";
3:import { useAtlas } from "../../store/AtlasContext";
4:import { useLang } from "../../store/LanguageContext";
5:
6:export default function ProvinceClickLayer() {
7:  const { lang } = useLang();
8:  const { selectedProvinceId, selectProvince } = useAtlas();
9:  const focused = Boolean(selectedProvinceId);
10:
11:  return (
12:    <div className="absolute inset-0 z-10">
13:      {provinceHitAreas.map((area) => {
14:        const active = area.id === selectedProvinceId;
15:        return (
16:          <button
17:            key={area.id}
18:            type="button"
19:            onClick={() => selectProvince(active ? null : area.id)}
20:            aria-pressed={active}
21:            title={lang === "zh" ? area.zh : area.en}
22:            className={clsx(
23:              "absolute -translate-x-1/2 -translate-y-1/2 rounded-md border border-transparent text-[10px] font-bold uppercase tracking-wider transition",
24:              "hover:border-jade/30 hover:bg-jade-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-jade",
25:              active && "border-jade/60 bg-jade-soft text-jade",
26:              focused && !active && "pointer-events-none opacity-0"
27:            )}
28:            style={{
29:              left: `${area.x}%`,
30:              top: `${area.y}%`,
31:              width: `${area.w}%`,
32:              height: `${area.h}%`,
33:              minWidth: 24,
34:              minHeight: 24
35:            }}
36:          >
37:            <span className="sr-only md:not-sr-only md:block md:truncate md:px-1">
38:              {lang === "zh" ? area.zh : area.en}
39:            </span>
40:          </button>
41:        );
42:      })}
43:    </div>
44:  );
45:}

 succeeded in 1227ms:
1:import clsx from "clsx";
2:import { fullChinaMapSrc } from "../../data/map-sources";
3:import { useAtlas } from "../../store/AtlasContext";
4:import { useLang } from "../../store/LanguageContext";
5:import ProvinceClickLayer from "./ProvinceClickLayer";
6:import ProvincePop from "./ProvincePop";
7:
8:export default function HeroMap() {
9:  const { t } = useLang();
10:  const { selectedProvinceId, reset } = useAtlas();
11:  const focused = Boolean(selectedProvinceId);
12:
13:  return (
14:    <section aria-label="China interactive map" className="flex flex-col gap-3">
15:      <header className="flex items-end justify-between">
16:        <div>
17:          <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("fullMapLabel")}</span>
18:          <h2 className="text-2xl font-bold leading-tight">{t("fullMapTitle")}</h2>
19:        </div>
20:        <span className="rounded-full bg-jade-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-jade">
21:          {t("mapStatus")}
22:        </span>
23:      </header>
24:
25:      <div
26:        className="relative overflow-hidden rounded-xl border border-line bg-white shadow-sm"
27:        style={{ aspectRatio: "9463 / 6675" }}
28:      >
29:        <img
30:          src={fullChinaMapSrc}
31:          alt="China province-level map"
32:          className={clsx(
33:            "absolute inset-0 h-full w-full object-fill transition-[opacity,filter] duration-500",
34:            focused ? "opacity-25 [filter:grayscale(0.55)_brightness(0.92)]" : "opacity-100"
35:          )}
36:        />
37:        <ProvinceClickLayer />
38:        <ProvincePop />
39:        {focused && (
40:          <button
41:            type="button"
42:            onClick={reset}
43:            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
44:          >
45:            {t("reset")}
46:          </button>
47:        )}
48:      </div>
49:
50:      <p className="text-sm text-muted">{focused ? t("mapHintReady") : t("mapHint")}</p>
51:      <p className="text-xs text-muted">{t("mapCredit")}</p>
52:    </section>
53:  );
54:}

 succeeded in 1256ms:
1:import { Suspense, lazy } from "react";
2:import clsx from "clsx";
3:import { provinceTextureSrc } from "../../data/map-sources";
4:import { useAtlas } from "../../store/AtlasContext";
5:import { useLang } from "../../store/LanguageContext";
6:
7:const Map3D = lazy(() => import("./Map3D"));
8:
9:export default function ProvincePop() {
10:  const { selectedProvinceId, province, is3DEnabled, toggle3D } = useAtlas();
11:  const { t, lang } = useLang();
12:  if (!selectedProvinceId) return null;
13:
14:  const label = province ? (lang === "zh" ? province.zh : province.name) : "";
15:  const fallback = (
16:    <img
17:      src={provinceTextureSrc(selectedProvinceId)}
18:      alt={label}
19:      className="h-full w-full object-contain drop-shadow-[0_24px_60px_rgba(15,23,18,0.32)]"
20:      onError={(e) => {
21:        (e.target as HTMLImageElement).style.visibility = "hidden";
22:      }}
23:    />
24:  );
25:
26:  return (
27:    <div className="pointer-events-none absolute inset-0 z-20 grid place-items-center">
28:      <div
29:        className={clsx(
30:          "pointer-events-auto relative h-[82%] w-[78%]",
31:          "animate-[fadeUp_360ms_cubic-bezier(0.2,0.82,0.2,1)]"
32:        )}
33:      >
34:        {is3DEnabled ? (
35:          <Suspense fallback={fallback}>
36:            <Map3D provinceId={selectedProvinceId} provinceName={label} />
37:          </Suspense>
38:        ) : (
39:          fallback
40:        )}
41:        <button
42:          type="button"
43:          onClick={toggle3D}
44:          className="absolute bottom-2 right-2 rounded-full bg-ink/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-ink"
45:        >
46:          {is3DEnabled ? t("exit3D") : t("viewIn3D")}
47:        </button>
48:      </div>
49:    </div>
50:  );
51:}

 succeeded in 1285ms:
1:import { useLang } from "../../store/LanguageContext";
2:import { useAtlas } from "../../store/AtlasContext";
3:import ProvinceRail from "./ProvinceRail";
4:import CityList from "./CityList";
5:import CityProfile from "./CityProfile";
6:
7:export default function AtlasSection() {
8:  const { t } = useLang();
9:  const { province } = useAtlas();
10:
11:  return (
12:    <section id="atlas" className="flex flex-col gap-4">
13:      <header className="flex flex-wrap items-end justify-between gap-3">
14:        <div>
15:          <h2 className="text-2xl font-bold">{t("atlasTitle")}</h2>
16:          <p className="text-sm text-muted">{t("atlasBody")}</p>
17:        </div>
18:      </header>
19:
20:      <div className="grid gap-4 md:grid-cols-[260px_minmax(0,1fr)_360px]">
21:        <ProvinceRail />
22:        <div className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4">
23:          <header className="flex items-baseline justify-between">
24:            <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
25:            <h3 className="text-lg font-bold">{province ? province.name : "China"}</h3>
26:          </header>
27:          <CityList cities={province?.cities ?? []} />
28:        </div>
29:        <CityProfile />
30:      </div>
31:    </section>
32:  );
33:}

 succeeded in 1336ms:
1:import { useEffect, useRef } from "react";
2:import * as THREE from "three";
3:
4:type Props = {
5:  provinceId: string;
6:  provinceName: string;
7:};
8:
9:type ShapeRecord = {
10:  paths: string[];
11:  viewBox: { x: number; y: number; width: number; height: number };
12:};
13:
14:let shapesCache: Promise<Record<string, ShapeRecord>> | null = null;
15:const loadShapes = (): Promise<Record<string, ShapeRecord>> => {
16:  if (!shapesCache) {
17:    shapesCache = fetch("/assets/china-province-shapes.json")
18:      .then((r) => r.json())
19:      .then((data) => data.provinces ?? {});
20:  }
21:  return shapesCache;
22:};
23:
24:const parseRings = (path: string): Array<Array<{ x: number; y: number }>> => {
25:  const tokens = path.match(/[MLZ]|-?\d+(?:\.\d+)?/g) ?? [];
26:  const rings: Array<Array<{ x: number; y: number }>> = [];
27:  let ring: Array<{ x: number; y: number }> = [];
28:  let cmd = "";
29:  let i = 0;
30:  const close = () => {
31:    if (ring.length > 2) rings.push(ring);
32:    ring = [];
33:  };
34:  while (i < tokens.length) {
35:    const tok = tokens[i++];
36:    if (tok === "M" || tok === "L") {
37:      cmd = tok;
38:      if (tok === "M") close();
39:      const x = Number(tokens[i++]);
40:      const y = Number(tokens[i++]);
41:      if (Number.isFinite(x) && Number.isFinite(y)) ring.push({ x, y });
42:    } else if (tok === "Z") {
43:      close();
44:      cmd = "";
45:    } else if (cmd === "M" || cmd === "L") {
46:      const x = Number(tok);
47:      const y = Number(tokens[i++]);
48:      if (Number.isFinite(x) && Number.isFinite(y)) ring.push({ x, y });
49:    }
50:  }
51:  close();
52:  return rings;
53:};
54:
55:const simplify = (ring: Array<{ x: number; y: number }>, max = 360) => {
56:  if (ring.length <= max) return ring;
57:  const step = Math.ceil(ring.length / max);
58:  return ring.filter((_, idx) => idx % step === 0 || idx === ring.length - 1);
59:};
60:
61:export default function Map3D({ provinceId, provinceName }: Props) {
62:  const hostRef = useRef<HTMLDivElement | null>(null);
63:
64:  useEffect(() => {
65:    const host = hostRef.current;
66:    if (!host) return;
67:
68:    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
69:    renderer.setClearColor(0x000000, 0);
70:    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
71:    host.appendChild(renderer.domElement);
72:    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });
73:
74:    const scene = new THREE.Scene();
75:    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
76:    camera.position.set(0, -5.8, 4.85);
77:    camera.up.set(0, 0, 1);
78:    camera.lookAt(0, 0, 0);
79:
80:    scene.add(new THREE.HemisphereLight(0xffffff, 0x718f7d, 2.4));
81:    const key = new THREE.DirectionalLight(0xffffff, 3);
82:    key.position.set(-3.6, -4.4, 7.2);
83:    scene.add(key);
84:
85:    const group = new THREE.Group();
86:    scene.add(group);
87:
88:    const surface = new THREE.MeshStandardMaterial({ color: 0xe7e0c7, roughness: 0.76, metalness: 0.04, side: THREE.DoubleSide });
89:    const sides = new THREE.MeshStandardMaterial({ color: 0x496b5e, roughness: 0.84, metalness: 0.03, side: THREE.DoubleSide });
90:    const edge = new THREE.LineBasicMaterial({ color: 0x12221c, transparent: true, opacity: 0.85 });
91:
92:    const targetRotation = new THREE.Vector2(-0.08, 0.1);
93:    const rotation = new THREE.Vector2(-0.08, 0.1);
94:    let scale = 1;
95:    let target = 1.4;
96:    let rafId = 0;
97:    const drag = { active: false, x: 0, y: 0 };
98:
99:    const buildModel = (record: ShapeRecord) => {
100:      const { x, y, width, height } = record.viewBox;
101:      const cx = x + width / 2;
102:      const cy = y + height / 2;
103:      const factor = 5.2 / Math.max(width, height);
104:      record.paths.forEach((path) => {
105:        parseRings(path).forEach((rawRing) => {
106:          const ring = simplify(rawRing);
107:          if (ring.length < 3) return;
108:          const shape = new THREE.Shape();
109:          const first = { x: (ring[0].x - cx) * factor, y: -(ring[0].y - cy) * factor };
110:          shape.moveTo(first.x, first.y);
111:          ring.slice(1).forEach((p) => shape.lineTo((p.x - cx) * factor, -(p.y - cy) * factor));
112:          shape.lineTo(first.x, first.y);
113:          const geom = new THREE.ExtrudeGeometry(shape, { depth: 0.34, bevelEnabled: true, bevelSize: 0.035, bevelThickness: 0.045, bevelSegments: 3, curveSegments: 1 });
114:          geom.computeVertexNormals();
115:          group.add(new THREE.Mesh(geom, [surface, sides]));
116:          group.add(new THREE.LineSegments(new THREE.EdgesGeometry(geom, 24), edge));
117:        });
118:      });
119:    };
120:
121:    let mounted = true;
122:    loadShapes().then((shapes) => {
123:      if (!mounted || !shapes[provinceId]) return;
124:      buildModel(shapes[provinceId]);
125:      target = provinceId === "xinjiang" || provinceId === "tibet" || provinceId === "inner-mongolia" ? 1.2 : 1.5;
126:    });
127:
128:    const resize = () => {
129:      const rect = host.getBoundingClientRect();
130:      const w = Math.max(1, Math.floor(rect.width));
131:      const h = Math.max(1, Math.floor(rect.height));
132:      renderer.setSize(w, h, false);
133:      camera.aspect = w / h;
134:      camera.updateProjectionMatrix();
135:    };
136:    const ro = new ResizeObserver(resize);
137:    ro.observe(host);
138:    resize();
139:
140:    const onDown = (e: PointerEvent) => {
141:      drag.active = true;
142:      drag.x = e.clientX;
143:      drag.y = e.clientY;
144:      renderer.domElement.setPointerCapture?.(e.pointerId);
145:    };
146:    const onMove = (e: PointerEvent) => {
147:      if (!drag.active) return;
148:      targetRotation.y += (e.clientX - drag.x) * 0.006;
149:      targetRotation.x = Math.max(-0.42, Math.min(0.28, targetRotation.x + (e.clientY - drag.y) * 0.004));
150:      drag.x = e.clientX;
151:      drag.y = e.clientY;
152:    };
153:    const onUp = (e: PointerEvent) => {
154:      drag.active = false;
155:      renderer.domElement.releasePointerCapture?.(e.pointerId);
156:    };
157:    renderer.domElement.addEventListener("pointerdown", onDown);
158:    renderer.domElement.addEventListener("pointermove", onMove);
159:    renderer.domElement.addEventListener("pointerup", onUp);
160:    renderer.domElement.addEventListener("pointerleave", onUp);
161:
162:    const animate = () => {
163:      rotation.lerp(targetRotation, 0.08);
164:      scale += (target - scale) * 0.08;
165:      group.rotation.x = rotation.x;
166:      group.rotation.z = rotation.y;
167:      group.scale.setScalar(scale);
168:      renderer.render(scene, camera);
169:      rafId = requestAnimationFrame(animate);
170:    };
171:    animate();
172:
173:    return () => {
174:      mounted = false;
175:      cancelAnimationFrame(rafId);
176:      ro.disconnect();
177:      renderer.dispose();
178:      group.traverse((node) => {
179:        if (node instanceof THREE.Mesh) {
180:          node.geometry.dispose();
181:          (Array.isArray(node.material) ? node.material : [node.material]).forEach((m) => m.dispose());
182:        }
183:      });
184:      host.innerHTML = "";
185:    };
186:  }, [provinceId]);
187:
188:  return (
189:    <div ref={hostRef} aria-label={`3D model of ${provinceName}`} className="absolute inset-0" />
190:  );
191:}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/components/atlas/ProvinceRail.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/components/atlas/CityList.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/components/atlas/CityProfile.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/components/layout/SiteFooter.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/components/sections/HistoryVideo.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/components/sections/SourcesNote.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/components/layout/SiteHeader.tsx' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/src/components/sections/MuseumFlow.tsx' in C:\Users\h\Documents\New project 2
 succeeded in 1312ms:
1:import clsx from "clsx";
2:import { atlasData } from "../../data/atlas";
3:import { typeLabels } from "../../data/i18n";
4:import { useAtlas } from "../../store/AtlasContext";
5:import { useLang } from "../../store/LanguageContext";
6:
7:export default function ProvinceRail() {
8:  const { lang, t } = useLang();
9:  const { selectedProvinceId, selectProvince } = useAtlas();
10:
11:  return (
12:    <aside aria-label={t("provinceLevelRegions")} className="flex flex-col gap-2">
13:      <header className="flex items-baseline justify-between px-1">
14:        <strong className="text-xs font-bold uppercase tracking-widest text-muted">{t("provinceLevelRegions")}</strong>
15:        <span className="text-xs text-muted">{atlasData.length}</span>
16:      </header>
17:      <div className="flex max-h-[420px] flex-col gap-1 overflow-y-auto pr-1">
18:        {atlasData.map((p) => {
19:          const active = p.id === selectedProvinceId;
20:          return (
21:            <button
22:              key={p.id}
23:              type="button"
24:              onClick={() => selectProvince(p.id)}
25:              className={clsx(
26:                "flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-left transition",
27:                active ? "border-jade/40 bg-jade-soft" : "hover:bg-paper"
28:              )}
29:            >
30:              <span className="leading-tight">
31:                <strong className="block text-sm font-bold">{lang === "zh" ? p.zh : p.name}</strong>
32:                <small className="block text-xs text-muted">
33:                  {lang === "zh" ? `${p.name} · ${typeLabels.zh[p.type]}` : `${p.zh} · ${typeLabels.en[p.type]}`}
34:                </small>
35:              </span>
36:              <span className="text-xs text-muted">{p.cities.length}</span>
37:            </button>
38:          );
39:        })}
40:      </div>
41:    </aside>
42:  );
43:}

 succeeded in 1326ms:
1:import clsx from "clsx";
2:import type { CityRecord } from "../../data/atlas";
3:import { useAtlas } from "../../store/AtlasContext";
4:import { useLang } from "../../store/LanguageContext";
5:import { useCityViewCount, useRecordCityView } from "../../hooks/useCityViews";
6:import { formatNumber } from "../../lib/format";
7:
8:export default function CityList({ cities }: { cities: CityRecord[] }) {
9:  const { t, lang } = useLang();
10:  const { selectedCityId, selectCity } = useAtlas();
11:  const recordView = useRecordCityView();
12:
13:  if (!cities.length) {
14:    return (
15:      <div className="grid place-items-center rounded-xl border border-dashed border-line p-8 text-sm text-muted">
16:        {t("mapHintPending")}
17:      </div>
18:    );
19:  }
20:
21:  return (
22:    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
23:      {cities.map((city) => (
24:        <CityCard
25:          key={city.id}
26:          city={city}
27:          active={city.id === selectedCityId}
28:          onSelect={() => {
29:            recordView(city.id);
30:            selectCity(city.id);
31:          }}
32:          viewsLabel={t("views")}
33:          lang={lang}
34:        />
35:      ))}
36:    </ul>
37:  );
38:}
39:
40:type CardProps = {
41:  city: CityRecord;
42:  active: boolean;
43:  onSelect: () => void;
44:  viewsLabel: string;
45:  lang: "en" | "zh";
46:};
47:
48:function CityCard({ city, active, onSelect, viewsLabel, lang }: CardProps) {
49:  const total = useCityViewCount(city.id, city.baseViews);
50:  return (
51:    <li>
52:      <button
53:        type="button"
54:        onClick={onSelect}
55:        className={clsx(
56:          "flex w-full flex-col gap-1 rounded-xl border bg-white px-4 py-3 text-left transition",
57:          active ? "border-jade ring-1 ring-jade/40" : "border-line hover:border-jade/40"
58:        )}
59:      >
60:        <strong className="text-base">{lang === "zh" ? city.zh : city.name}</strong>
61:        <span className="text-xs text-muted">{lang === "zh" ? city.name : city.zh}</span>
62:        <span className="text-sm">{lang === "zh" ? city.museumZh || city.museum : city.museum}</span>
63:        <span className="mt-1 text-xs text-muted">
64:          {formatNumber(total)} {viewsLabel}
65:        </span>
66:      </button>
67:    </li>
68:  );
69:}

 succeeded in 1334ms:
1:import { useLang } from "../../store/LanguageContext";
2:
3:export default function SiteFooter() {
4:  const { t } = useLang();
5:  return (
6:    <footer className="mx-auto mt-16 flex max-w-6xl items-center justify-between border-t border-line px-4 py-6 text-sm text-muted">
7:      <p>{t("footerNote")}</p>
8:      <a href="#top" className="hover:text-jade">{t("backToTop")}</a>
9:    </footer>
10:  );
11:}

 succeeded in 1348ms:
1:import { accessLabels, statusLabels } from "../../data/i18n";
2:import { atlasData } from "../../data/atlas";
3:import { useAtlas } from "../../store/AtlasContext";
4:import { useLang } from "../../store/LanguageContext";
5:import { useCityViewCount } from "../../hooks/useCityViews";
6:import { formatNumber } from "../../lib/format";
7:
8:export default function CityProfile() {
9:  const { city, selectCity } = useAtlas();
10:  const { t, lang } = useLang();
11:
12:  if (!city) {
13:    return (
14:      <aside className="flex flex-col items-start gap-2 rounded-xl border border-dashed border-line bg-white p-6">
15:        <h3 className="text-lg font-bold">{t("selectCity")}</h3>
16:        <p className="text-sm text-muted">{t("selectCityBody")}</p>
17:      </aside>
18:    );
19:  }
20:
21:  const province = atlasData.find((p) => p.id === city.province.toLowerCase().replace(/\s+/g, "-")) ?? null;
22:  return <CityProfileBody province={province?.zh ?? city.province} onClose={() => selectCity(null)} />;
23:}
24:
25:function CityProfileBody({ province: _province, onClose }: { province: string; onClose: () => void }) {
26:  const { city } = useAtlas();
27:  const { t, lang } = useLang();
28:  const views = useCityViewCount(city?.id ?? "", city?.baseViews ?? 0);
29:  if (!city) return null;
30:  const sites = lang === "zh" ? city.sitesZh : city.sites;
31:
32:  return (
33:    <article className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
34:      <header className="flex items-start justify-between gap-4">
35:        <div>
36:          <span className="text-xs font-bold uppercase tracking-widest text-muted">{city.province}</span>
37:          <h3 className="text-2xl font-bold leading-tight">{lang === "zh" ? city.zh : city.name}</h3>
38:          <p className="text-sm text-muted">{lang === "zh" ? city.name : city.zh}</p>
39:        </div>
40:        <span className="rounded-full bg-paper px-3 py-1 text-xs font-bold text-muted">
41:          {statusLabels[lang][city.status] ?? city.status}
42:        </span>
43:      </header>
44:
45:      <section className="rounded-lg bg-paper p-4">
46:        <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("startHere")}</span>
47:        <h4 className="text-lg font-bold">{lang === "zh" ? city.museumZh || city.museum : city.museum}</h4>
48:        <p className="mt-1 text-sm leading-relaxed">
49:          {lang === "zh" ? city.museumRoleZh || city.museumRole : city.museumRole}
50:        </p>
51:      </section>
52:
53:      <dl className="grid grid-cols-2 gap-3 text-sm">
54:        <Stat label={t("pageViews")} value={formatNumber(views)} />
55:        <Stat label={t("visitorNotes")} value={formatNumber(city.notes)} />
56:        <Stat label={t("lastVerified")} value={city.verified} />
57:        <Stat label={t("englishAccess")} value={accessLabels[lang][city.access] ?? city.access} />
58:      </dl>
59:
60:      <section className="flex flex-col gap-1">
61:        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("historicalIdentity")}</h4>
62:        <p className="text-sm leading-relaxed">{lang === "zh" ? city.historyZh || city.history : city.history}</p>
63:      </section>
64:
65:      <section className="flex flex-col gap-1">
66:        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("thenExplore")}</h4>
67:        <ul className="grid list-inside list-disc gap-1 text-sm">
68:          {sites.map((site) => (
69:            <li key={site}>{site}</li>
70:          ))}
71:        </ul>
72:      </section>
73:
74:      <footer className="border-t border-line pt-3 text-xs text-muted">
75:        <strong className="block text-ink">{t("sourcePolicy")}</strong>
76:        <p className="mt-1">{t("sourcePolicyBody")}</p>
77:        <button onClick={onClose} type="button" className="mt-3 text-xs font-bold uppercase tracking-wider text-jade hover:underline">
78:          {t("close")}
79:        </button>
80:      </footer>
81:    </article>
82:  );
83:}
84:
85:function Stat({ label, value }: { label: string; value: string }) {
86:  return (
87:    <div className="rounded-lg bg-paper p-3">
88:      <dt className="text-xs font-bold uppercase tracking-widest text-muted">{label}</dt>
89:      <dd className="mt-1 text-base font-bold">{value}</dd>
90:    </div>
91:  );
92:}

 succeeded in 1361ms:
1:import { useLang } from "../../store/LanguageContext";
2:
3:const STEPS = [
4:  { titleKey: "flowOneTitle", bodyKey: "flowOneBody" },
5:  { titleKey: "flowTwoTitle", bodyKey: "flowTwoBody" },
6:  { titleKey: "flowThreeTitle", bodyKey: "flowThreeBody" },
7:  { titleKey: "flowFourTitle", bodyKey: "flowFourBody" }
8:];
9:
10:export default function MuseumFlow() {
11:  const { t } = useLang();
12:  return (
13:    <section id="museums" className="flex flex-col gap-4">
14:      <header>
15:        <h2 className="text-2xl font-bold">{t("museumTitle")}</h2>
16:        <p className="text-sm text-muted">{t("museumBody")}</p>
17:      </header>
18:      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
19:        {STEPS.map((step, i) => (
20:          <li key={step.titleKey} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
21:            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
22:            <h3 className="text-base font-bold">{t(step.titleKey)}</h3>
23:            <p className="text-sm text-muted">{t(step.bodyKey)}</p>
24:          </li>
25:        ))}
26:      </ol>
27:    </section>
28:  );
29:}

 succeeded in 1368ms:
1:import { useLang } from "../../store/LanguageContext";
2:
3:const RULES = ["ruleOne", "ruleTwo", "ruleThree", "ruleFour"];
4:
5:export default function SourcesNote() {
6:  const { t } = useLang();
7:  return (
8:    <section id="sources" className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
9:      <header>
10:        <h2 className="text-2xl font-bold">{t("sourcesTitle")}</h2>
11:        <p className="text-sm text-muted">{t("sourcesBody")}</p>
12:      </header>
13:      <ul className="grid list-inside list-disc gap-1 text-sm">
14:        {RULES.map((key) => (
15:          <li key={key}>{t(key)}</li>
16:        ))}
17:      </ul>
18:    </section>
19:  );
20:}

 succeeded in 1507ms:
1:import { useLang } from "../../store/LanguageContext";
2:import LanguageSwitch from "./LanguageSwitch";
3:import PlaceSearch from "../search/PlaceSearch";
4:
5:export default function SiteHeader() {
6:  const { t } = useLang();
7:  return (
8:    <header className="sticky top-0 z-30 flex flex-wrap items-center gap-4 border-b border-line bg-paper/85 px-4 py-3 backdrop-blur">
9:      <a href="#top" className="flex items-center gap-2">
10:        <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-white">中</span>
11:        <span className="leading-tight">
12:          <strong className="block text-base font-bold">China Atlas</strong>
13:          <small className="block text-xs text-muted">{t("brandSubtitle")}</small>
14:        </span>
15:      </a>
16:      <div className="order-3 w-full md:order-2 md:flex-1">
17:        <PlaceSearch />
18:      </div>
19:      <nav className="order-2 hidden items-center gap-4 text-sm md:order-3 md:flex">
20:        <a href="#atlas" className="hover:text-jade">{t("navAtlas")}</a>
21:        <a href="#video" className="hover:text-jade">{t("navVideo")}</a>
22:        <a href="#museums" className="hover:text-jade">{t("navMuseums")}</a>
23:        <a href="#sources" className="hover:text-jade">{t("navSources")}</a>
24:      </nav>
25:      <LanguageSwitch />
26:    </header>
27:  );
28:}

 succeeded in 1539ms:
1:import { useLang } from "../../store/LanguageContext";
2:
3:export default function HistoryVideo() {
4:  const { t } = useLang();
5:  return (
6:    <section id="video" className="grid items-start gap-6 md:grid-cols-[1fr_2fr]">
7:      <div className="space-y-3">
8:        <h2 className="text-2xl font-bold">{t("historyVideoTitle")}</h2>
9:        <p className="text-sm leading-relaxed text-muted">{t("historyVideoBody")}</p>
10:      </div>
11:      <figure className="overflow-hidden rounded-xl border border-line bg-black">
12:        <div className="aspect-video">
13:          <iframe
14:            className="h-full w-full"
15:            src="https://www.youtube.com/embed/0DzZgBd4W1Q"
16:            title="Discover a China Beyond Your Imagination"
17:            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
18:            allowFullScreen
19:          />
20:        </div>
21:        <figcaption className="flex items-center justify-between gap-3 bg-white px-4 py-3 text-xs">
22:          <strong>{t("historyVideoMeta")}</strong>
23:          <a
24:            className="text-muted hover:text-jade"
25:            href="https://en.chinaculture.org/a/202206/07/WS629edf41a310fd2b29e61286.html"
26:            target="_blank"
27:            rel="noreferrer"
28:          >
29:            {t("historyVideoSource")}
30:          </a>
31:        </figcaption>
32:      </figure>
33:    </section>
34:  );
35:}

codex
新增组件已经读完。现在有了 3D 组件和地图层，我会重新跑构建与 lint；这次能暴露真实骨架的问题，比如 `three` 依赖、React 版本、Fast Refresh 规则和组件拆分。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in C:\Users\h\Documents\New project 2\v2
2026-05-09T09:46:53.329768Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 4.2 seconds
Output:

> v2@0.0.0 build
> tsc -b && vite build

src/components/atlas/CityProfile.tsx(10,14): error TS6133: 'lang' is declared but its value is never read.

 exited 1 in 4169ms:

> v2@0.0.0 build
> tsc -b && vite build

src/components/atlas/CityProfile.tsx(10,14): error TS6133: 'lang' is declared but its value is never read.

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run lint' in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm ls three' in C:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"\\\"three\\\"|react|react-dom|@types/react\" v2/package.json" in C:\Users\h\Documents\New project 2
2026-05-09T09:47:02.996382Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.6 seconds
Output:
rg: regex parse error:
    (?:\)
    ^
error: unclosed group

 exited 1 in 632ms:
rg: regex parse error:
    (?:\)
    ^
error: unclosed group

 succeeded in 1709ms:
v2@0.0.0 C:\Users\h\Documents\New project 2\v2
`-- three@0.184.0


2026-05-09T09:47:07.466876Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 5.3 seconds
Output:

> v2@0.0.0 lint
> eslint .


C:\Users\h\Documents\New project 2\v2\src\components\atlas\CityProfile.tsx
  10:14  error  'lang' is assigned a value but never used  @typescript-eslint/no-unused-vars
  25:38  error  '_province' is defined but never used      @typescript-eslint/no-unused-vars

C:\Users\h\Documents\New project 2\v2\src\store\AtlasContext.tsx
  79:17  error  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

C:\Users\h\Documents\New project 2\v2\src\store\LanguageContext.tsx
  40:17  error  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

✖ 4 problems (4 errors, 0 warnings)


 exited 1 in 5271ms:

> v2@0.0.0 lint
> eslint .


C:\Users\h\Documents\New project 2\v2\src\components\atlas\CityProfile.tsx
  10:14  error  'lang' is assigned a value but never used  @typescript-eslint/no-unused-vars
  25:38  error  '_province' is defined but never used      @typescript-eslint/no-unused-vars

C:\Users\h\Documents\New project 2\v2\src\store\AtlasContext.tsx
  79:17  error  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

C:\Users\h\Documents\New project 2\v2\src\store\LanguageContext.tsx
  40:17  error  Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components  react-refresh/only-export-components

✖ 4 problems (4 errors, 0 warnings)


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "react|react-dom|three|@types/react" v2/package.json' in C:\Users\h\Documents\New project 2
 succeeded in 371ms:
14:    "@types/three": "^0.184.1",
16:    "react": "^19.2.5",
17:    "react-dom": "^19.2.5",
19:    "three": "^0.184.0"
24:    "@types/react": "^19.2.14",
25:    "@types/react-dom": "^19.2.3",
26:    "@vitejs/plugin-react": "^6.0.1",
28:    "eslint-plugin-react-hooks": "^7.1.1",
29:    "eslint-plugin-react-refresh": "^0.5.2",

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "''^" v2/package.json' in C:\Users\h\Documents\New project 2
 succeeded in 560ms:
1:{
2:  "name": "v2",
3:  "private": true,
4:  "version": "0.0.0",
5:  "type": "module",
6:  "scripts": {
7:    "dev": "vite",
8:    "build": "tsc -b && vite build",
9:    "lint": "eslint .",
10:    "preview": "vite preview"
11:  },
12:  "dependencies": {
13:    "@tailwindcss/vite": "^4.3.0",
14:    "@types/three": "^0.184.1",
15:    "clsx": "^2.1.1",
16:    "react": "^19.2.5",
17:    "react-dom": "^19.2.5",
18:    "tailwindcss": "^4.3.0",
19:    "three": "^0.184.0"
20:  },
21:  "devDependencies": {
22:    "@eslint/js": "^10.0.1",
23:    "@types/node": "^24.12.2",
24:    "@types/react": "^19.2.14",
25:    "@types/react-dom": "^19.2.3",
26:    "@vitejs/plugin-react": "^6.0.1",
27:    "eslint": "^10.2.1",
28:    "eslint-plugin-react-hooks": "^7.1.1",
29:    "eslint-plugin-react-refresh": "^0.5.2",
30:    "globals": "^17.5.0",
31:    "typescript": "~6.0.2",
32:    "typescript-eslint": "^8.58.2",
33:    "vite": "^8.0.10"
34:  }
35:}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$json = Get-Content -Raw v2/public/assets/china-province-shapes.json | ConvertFrom-Json; $json.provinces.PSObject.Properties.Name | Measure-Object' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$json = Get-Content -Raw v2/public/assets/china-province-shapes.json | ConvertFrom-Json; $json.provinces.PSObject.Properties.Name | Select-Object -First 10' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -File v2/public/assets/province-map-textures | Measure-Object' in C:\Users\h\Documents\New project 2
 succeeded in 645ms:


Count    : 34
Average  : 
Sum      : 
Maximum  : 
Minimum  : 
Property : 




 succeeded in 6331ms:


Count    : 0
Average  : 
Sum      : 
Maximum  : 
Minimum  : 
Property : 



ConvertFrom-Json : Invalid object passed in, ':' or '}' expected. (4633): {"source":"鏍囧噯鍦板浘鏈嶅姟绯荤粺 data/topodata/chinato
po_h.json","sourceUrl":"https://bzdt.tianditu.gov.cn/data/topodata/chinatopo_h.json","generated":"2026-05-09T07:35:02.8
17Z","provinces":{"xinjiang":{"id":"xinjiang","name":"鏂扮枂缁村惥灏旇嚜娌诲尯","bounds":{"left":-3032442,"right":-1095561,"bottom"
:4013419,"top":5519261},"viewBox":{"x":-3387577,"y":-5699962,"width":2647151,"height":1867244},"paths":["M-2754204 -409
5749 L-2809674 -4146495 L-2804011 -4203151 L-2809052 -4226499 L-2790999 -4243658 L-2850083 -4259714 L-2870869 -4275264 
L-2901989 -4303419 L-2908999 -4334501 L-2927508 -4329109 L-2943944 -4335674 L-2942675 -4356753 L-2953668 -4368813 L-293
8875 -4382626 L-2935881 -4428287 L-2952326 -4452375 L-2969037 -4451181 L-2963807 -4478592 L-2988523 -4495304 L-3005437 
-4489976 L-3008430 -4505582 L-3030705 -4510674 L-3025712 -4534989 L-2999660 -4523700 L-2969663 -4528135 L-2978269 -4566
044 L-2965194 -4576762 L-2966327 -4628680 L-2950238 -4654463 L-2984247 -4689560 L-3002175 -4696179 L-3009274 -4686514 L
-3026063 -4697632 L-3026474 -4735181 L-3013914 -4734906 L-3009003 -4747117 L-3017143 -4750058 L-3023677 -4795625 L-2992
885 -4794897 L-2978628 -4804368 L-2978216 -4825983 L-2953278 -4851141 L-2925675 -4843701 L-2887399 -4857735 L-2873529 -
4851729 L-2871140 -4872095 L-2846974 -4854962 L-2806923 -4865683 L-2805397 -4841864 L-2814603 -4824282 L-2795158 -48180
79 L-2761820 -4822490 L-2758721 -4811851 L-2721346 -4837835 L-2702893 -4865840 L-2680828 -4871837 L-2670688 -4860224 L-
2622996 -4847166 L-2606295 -4859186 L-2584879 -4856964 L-2573205 -4873627 L-2536064 -4870764 L-2462347 -4890206 L-24335
30 -4886311 L-2418450 -4899472 L-2398608 -4894067 L-2382312 -4914932 L-2379363 -4960841 L-2367159 -4975023 L-2335273 -4
974296 L-2348607 -4995659 L-2313210 -4999787 L-2315158 -5019122 L-2306970 -5032595 L-2312120 -5110364 L-2296729 -516412
3 L-2306263 -5192132 L-2320944 -5194493 L-2322165 -5209478 L-2276250 -5218268 L-2233536 -5209717 L-2174476 -5216007 L-2
163364 -5199018 L-2114610 -5181461 L-2108320 -5196010 L-2123035 -5217749 L-2120326 -5238001 L-2017814 -5387595 L-196275
2 -5344372 L-1897048 -5332992 L-1890613 -5315017 L-1866909 -5324735 L-1841180 -5322484 L-1821666 -5339374 L-1814414 -54
23223 L-1788219 -5461463 L-1752274 -5452285 L-1724015 -5460956 L-1706816 -5478598 L-1702508 -5506351 L-1689370 -5519063
 L-1649354 -5504132 L-1640998 -5511109 L-1618184 -5508050 L-1620561 -5487768 L-1632640 -5477100 L-1613689 -5454881 L-16
19378 -5440754 L-1583602 -5406353 L-1584482 -5387967 L-1556499 -5361498 L-1516924 -5356302 L-1507384 -5333093 L-1485891
 -5332929 L-1483936 -5317036 L-1468641 -5303152 L-1463209 -5247394 L-1442431 -5215668 L-1441706 -5172944 L-1456991 -514
9743 L-1456158 -5117266 L-1483080 -5090584 L-1493368 -5066948 L-1485093 -5028473 L-1466682 -5027057 L-1425134 -5002090 
L-1307080 -4982066 L-1240878 -4927486 L-1196180 -4878274 L-1181931 -4869721 L-1147438 -4867496 L-1161905 -4838972 L-114
1293 -4825196 L-1129267 -4750874 L-1095561 -4700345 L-1096690 -4682283 L-1126621 -4669878 L-1135088 -4654796 L-1118419 
-4626751 L-1128375 -4602279 L-1143162 -4592625 L-1174143 -4590950 L-1204777 -4565778 L-1212611 -4587592 L-1273465 -4561
927 L-1328135 -4516717 L-1345250 -4482999 L-1417663 -4485992 L-1422632 -4457647 L-1440053 -4438353 L-1463837 -4365480 L
-1489546 -4347155 L-1490071 -4321092 L-1587854 -4305086 L-1630050 -4303810 L-1646026 -4311532 L-1666936 -4292592 L-1692
548 -4297512 L-1682959 -4269007 L-1662064 -4271349 L-1676165 -4211704 L-1632082 -4169190 L-1622976 -4126613 L-1623871 -
4117149 L-1664985 -4112773 L-1678733 -4103353 L-1681527 -4080459 L-1656492 -4061008 L-1661947 -4019980 L-1677253 -40141
65 L-1695878 -4028336 L-1734190 -4039311 L-1749694 -4057008 L-1761059 -4036031 L-1772559 -4038353 L-1813573 -4065165 L-
1816265 -4074748 L-1827528 -4070138 L-1848009 -4088897 L-1859066 -4081471 L-1870120 -4101330 L-1888879 -4110233 L-19610
16 -4108939 L-1975050 -4121694 L-2006051 -4115382 L-2062161 -4120304 L-2081754 -4116220 L-2101340 -4085664 L-2136117 -4
082967 L-2149338 -4072606 L-2170650 -4095300 L-2194023 -4097719 L-2218921 -4088685 L-2250622 -4089553 L-2251059 -408186
1 L-2275284 -4075730 L-2364118 -4101279 L-2377704 -4119310 L-2374385 -4134977 L-2395555 -4138727 L-2418798 -4155122 L-2
429694 -4139732 L-2460369 -4133257 L-2465574 -4119737 L-2481798 -4118221 L-2508708 -4124522 L-2514178 -4139013 L-253469
6 -4142019 L-2544113 -4155474 L-2554848 -4145670 L-2593449 -4168812 L-2597494 -4178547 L-2612074 -4169401 L-2611420 -41
55737 L-2644084 -4145745 L-2649704 -4130410 L-2660138 -4127658 L-2676811 -4088446 L-2717679 -4092143 L-2741008 -4102961
 L-2754204 -4095749 Z"]},"tibet":{"id":"tibet","name":"瑗胯棌鑷不鍖?,"bounds":{"left":-2882535,"right":-1040616,"bottom":296
2762,"top":4178547},"viewBox":{"x":-3103565,"y":-4376190,"width":2283979,"height":1611070},"paths":["M-1784341 -4044624
 L-1810715 -4037580 L-1802157 -4017751 L-1780380 -4012355 L-1794991 -3980063 L-1790228 -3972172 L-1817120 -3964130 L-18
24868 -3948316 L-1815030 -3931678 L-1821524 -3911332 L-1801045 -3907223 L-1797259 -3899132 L-1813438 -3883355 L-1807278
 -3844607 L-1814088 -3826290 L-1835056 -3815409 L-1814157 -3786099 L-1815131 -3762789 L-1786175 -3718593 L-1761773 -370
0856 L-1686834 -3681500 L-1651598 -3640602 L-1627061 -3641424 L-1629912 -3626661 L-1573532 -3608706 L-1560682 -3614504 
L-1556290 -3599585 L-1540922 -3601806 L-1517443 -3577030 L-1493906 -3583296 L-1485704 -3571695 L-1462569 -3565147 L-141
5160 -3582286 L-1391284 -3551437 L-1365579 -3545861 L-1364089 -3537803 L-1377044 -3533623 L-1365545 -3532729 L-1359243 
-3512509 L-1350413 -3517010 L-1347703 -3505559 L-1359856 -3490846 L-1349576 -3470064 L-1343634 -3464959 L-1335133 -3470
760 L-1319299 -3457566 L-1308158 -3468359 L-1288864 -3444355 L-1280525 -3451314 L-1285463 -3463800 L-1279360 -3477801 L
-1252038 -3451097 L-1232193 -3444039 L-1226915 -3468155 L-1233756 -3483218 L-1217584 -3473058 L-1205700 -3486945 L-1190
505 -3477677 L-1175728 -3481526 L-1175804 -3502792 L-1163544 -3505391 L-1164892 -3534415 L-1127583 -3526859 L-1092754 -
3503201 L-1075229 -3460571 L-1077773 -3442620 L-1040616 -3386206 L-1052557 -3374134 L-1064091 -3383586 L-1068690 -33668
59 L-1040718 -3314523 L-1046729 -3290787 L-1041413 -3221355 L-1051274 -3194527 L-1045526 -3144480 L-1058841 -3140655 L-
1054364 -3126082 L-1066228 -3114364 L-1063009 -3102783 L-1076430 -3101099 L-1078940 -3123125 L-1096198 -3119674 L-10925
97 -3091252 L-1100769 -3069002 L-1090346 -3050775 L-1096154 -3036038 L-1124459 -3028445 L-1135096 -3060725 L-1142403 -3
057972 L-1138897 -3043338 L-1151544 -3034230 L-1164224 -3038583 L-1170531 -3061229 L-1184003 -3058247 L-1189506 -307852
5 L-1202318 -3082714 L-1210015 -3061714 L-1226548 -3053581 L-1231860 -3040548 L-1226731 -3015473 L-1239302 -3017430 L-1
260906 -3001656 L-1274727 -3020347 L-1312502 -3044678 L-1316820 -3056901 L-1386514 -3077836 L-1419288 -3064701 L-143658
5 -3044423 L-1505331 -3021179 L-1536754 -3023660 L-1582889 -2984490 L-1587907 -2969050 L-1657369 -2963664 L-1708820 -29
82345 L-1757884 -2982117 L-1762636 -3010685 L-1749678 -3029463 L-1755360 -3048303 L-1789661 -3057389 L-1787585 -3092120
 L-1794123 -3097926 L-1786688 -3100346 L-1806987 -3122874 L-1826306 -3119264 L-1833649 -3108248 L-1869215 -3140123 L-18
82905 -3138886 L-1951172 -3173654 L-1972155 -3169035 L-2017074 -3136476 L-2032846 -3114227 L-2032700 -3090855 L-2052697
 -3078941 L-2068268 -3116430 L-2051608 -3149371 L-2051345 -3169488 L-2058788 -3176934 L-2073434 -3182341 L-2121558 -316
5695 L-2145866 -3181838 L-2165406 -3167800 L-2216274 -3185050 L-2249820 -3224245 L-2265245 -3226875 L-2282820 -3209139 
L-2298896 -3222312 L-2297173 -3244667 L-2310615 -3236434 L-2312149 -3220036 L-2320678 -3218861 L-2337137 -3278049 L-234
8648 -3266535 L-2356742 -3277290 L-2388397 -3284383 L-2393657 -3293836 L-2378517 -3316025 L-2383500 -3323792 L-2411640 
-3320302 L-2461124 -3369783 L-2455129 -3407243 L-2477634 -3422517 L-2514312 -3418113 L-2530282 -3467086 L-2577925 -3500
131 L-2583999 -3525357 L-2614970 -3548680 L-2613952 -3580289 L-2654086 -3602880 L-2672066 -3604091 L-2683770 -3584601 L
-2696149 -3584159 L-2697913 -3571906 L-2711686 -3572702 L-2716459 -3600505 L-2743083 -3632286 L-2788941 -3662460 L-2811
762 -3716640 L-2823572 -3713885 L-2832064 -3731525 L-2846032 -3724699 L-2867450 -3736735 L-2873556 -3775061 L-2882145 -
3779612 L-2879898 -3799531 L-2866755 -3806235 L-2873746 -3833125 L-2859720 -3843979 L-2881927 -3875756 L-2872474 -38879
42 L-2872009 -3919311 L-2838580 -3927411 L-2837319 -3893118 L-2823098 -3881324 L-2796447 -3894436 L-2788751 -3911680 L-
2786398 -3967439 L-2807315 -4017220 L-2793649 -4054178 L-2797469 -4072495 L-2770108 -4079940 L-2750100 -4102987 L-26768
11 -4088446 L-2660138 -4127658 L-2649704 -4130410 L-2644084 -4145745 L-2611420 -4155737 L-2612074 -4169401 L-2597494 -4
178547 L-2593449 -4168812 L-2554848 -4145670 L-2544113 -4155474 L-2534696 -4142019 L-2514178 -4139013 L-2508708 -412452
2 L-2481798 -4118221 L-2465574 -4119737 L-2460369 -4133257 L-2429694 -4139732 L-2418798 -4155122 L-2395555 -4138727 L-2
374385 -4134977 L-2377704 -4119310 L-2364118 -4101279 L-2275284 -4075730 L-2251059 -4081861 L-2250622 -4089553 L-221892
1 -4088685 L-2194023 -4097719 L-2170650 -4095300 L-2149338 -4072606 L-2136117 -4082967 L-2101340 -4085664 L-2080767 -41
16869 L-1975050 -4121694 L-1961016 -4108939 L-1879454 -4107831 L-1859066 -4081471 L-1848009 -4088897 L-1827528 -4070138
 L-1816265 -4074748 L-1784341 -4044624 Z"]},"qinghai":{"id":"qinghai","name":"闈掓捣鐪?,"bounds":{"left":-1835056,"right":-
612084,"bottom":3444039,"top":4331645},"viewBox":{"x":-2003740,"y":-4438158,"width":1560340,"height":1100631},"paths":[
"M-1489436 -4325923 L-1478938 -4331645 L-1426172 -4328872 L-1423449 -4298012 L-1379195 -4292454 L-1368526 -4283950 L-13
69988 -4277383 L-1380071 -4276958 L-1372246 -4266293 L-1328542 -4263221 L-1321993 -4218644 L-1272765 -4217738 L-1260032
 -4200005 L-1236283 -4200372 L-1222803 -4208678 L-1211198 -4201469 L-1208870 -4190611 L-1184153 -4175188 L-1165229 -418
6631 L-1144528 -4176767 L-1141269 -4207015 L-1130584 -4220487 L-1115901 -4211389 L-1107296 -4214141 L-1103088 -4282057 
L-1072185 -4275502 L-1015708 -4223715 L-998885 -4234878 L-993525 -4250809 L-971503 -4235696 L-958633 -4252551 L-925999 
-4231534 L-930345 -4225287 L-867873 -4156374 L-843495 -4143113 L-852978 -4166650 L-844569 -4174090 L-828624 -4146471 L-
794727 -4137694 L-788025 -4126041 L-780334 -4128042 L-783511 -4109986 L-764290 -4100446 L-760214 -4089111 L-745409 -408
1518 L-738270 -4089645 L-729339 -4088789 L-706609 -4063293 L-689701 -4068065 L-679070 -4051363 L-681613 -4038126 L-6398
67 -3998876 L-652512 -3998472 L-657059 -3984616 L-637272 -3958722 L-647240 -3948936 L-631998 -3935340 L-630061 -3908226
 L-612084 -3893842 L-629119 -3880138 L-621770 -3875512 L-624704 -3852535 L-639403 -3855262 L-648830 -3847702 L-639715 -
3816484 L-666326 -3826298 L-671711 -3810962 L-686465 -3806451 L-689304 -3796852 L-682029 -3794094 L-680088 -3781310 L-7
23433 -3750887 L-724962 -3716223 L-705688 -3705075 L-700188 -3690586 L-716495 -3683880 L-728010 -3664068 L-737559 -3669
682 L-748557 -3662881 L-762578 -3677248 L-819111 -3703205 L-830189 -3698387 L-834802 -3681314 L-798810 -3630948 L-80232
6 -3614191 L-766414 -3620571 L-764417 -3596334 L-749434 -3598302 L-749725 -3590988 L-761640 -3585690 L-763231 -3576861 
L-756144 -3570843 L-765577 -3554047 L-779095 -3568760 L-786105 -3569184 L-789245 -3560195 L-799958 -3576574 L-815124 -3
569577 L-806639 -3547701 L-815047 -3544518 L-815915 -3535819 L-806419 -3525818 L-812507 -3509128 L-835751 -3503005 L-85
7928 -3513645 L-861953 -3497105 L-884135 -3522336 L-896624 -3523648 L-903884 -3510182 L-912221 -3516343 L-909112 -35377
35 L-927618 -3560930 L-945604 -3526738 L-965623 -3544888 L-984955 -3550157 L-990967 -3567237 L-1022494 -3586357 L-10267
54 -3623772 L-1048707 -3671216 L-1049744 -3693871 L-1083236 -3702193 L-1098435 -3717971 L-1113614 -3706129 L-1119001 -3
684049 L-1142950 -3683004 L-1146780 -3674485 L-1144676 -3648914 L-1117670 -3625081 L-1147917 -3599142 L-1141353 -358922
2 L-1145543 -3580444 L-1159319 -3579157 L-1160059 -3560049 L-1127583 -3526859 L-1167519 -3532963 L-1163544 -3505391 L-1
175804 -3502792 L-1175728 -3481526 L-1190505 -3477677 L-1205700 -3486945 L-1217584 -3473058 L-1233756 -3483218 L-122691
5 -3468155 L-1232746 -3463442 L-1226409 -3448556 L-1231408 -3444341 L-1252038 -3451097 L-1277667 -3477801 L-1285463 -34
63800 L-1280525 -3451314 L-1288864 -3444355 L-1308158 -3468359 L-1319299 -3457566 L-1335133 -3470760 L-1343634 -3464959
 L-1349576 -3470064 L-1359856 -3490846 L-1347703 -3505559 L-1350413 -3517010 L-1359243 -3512509 L-1365545 -3532729 L-13
77044 -3533623 L-1364089 -3537803 L-1365579 -3545861 L-1391284 -3551437 L-1415160 -3582286 L-1462569 -3565147 L-1485704
 -3571695 L-1493906 -3583296 L-1517443 -3577030 L-1540922 -3601806 L-1556290 -3599585 L-1560682 -3614504 L-1573532 -360
8706 L-1610382 -3625253 L-1629912 -3626661 L-1627061 -3641424 L-1651598 -3640602 L-1686834 -3681500 L-1710754 -3692753 
L-1721921 -3689627 L-1761773 -3700856 L-1786175 -3718593 L-1815131 -3762789 L-1814157 -3786099 L-1835056 -3815409 L-181
4088 -3826290 L-1807278 -3844607 L-1813438 -3883355 L-1797259 -3899132 L-1801045 -3907223 L-1821524 -3911332 L-1815030 
-3931678 L-1824868 -3948316 L-1817120 -3964130 L-1790228 -3972172 L-1794991 -3980063 L-1780380 -4012355 L-1808729 -4023
259 L-1809616 -4042389 L-1800709 -4037615 L-1784341 -4044624 L-1761059 -4036031 L-1749694 -4057008 L-1734190 -4039311 L
-1694363 -4027574 L-1685591 -4014250 L-1662909 -4018852 L-1656731 -4062293 L-1681017 -4079499 L-1678733 -4103353 L-1664
985 -4112773 L-1622621 -4118963 L-1632082 -4169190 L-1644994 -4174544 L-1648169 -4189679 L-1676165 -4211704 L-1662064 -
4271349 L-1682959 -4269007 L-1693157 -4296407 L-1666936 -4292592 L-1646026 -4311532 L-1630050 -4303810 L-1587854 -43050
86 L-1539372 -4310602 L-1490071 -4321092 L-1489436 -4325923 Z"]},"gansu":{"id":"gansu","name":"鐢樿們鐪?,"bounds":{"left":-
1491215,"right":-112713,"bottom":3475644,"top":4682283},"viewBox":{"x":-1862553,"y":-4827080,"width":2121176,"height":1
496233},"paths":["M-1096690 -4682283 L-1035915 -4680988 L-994097 -4552909 L-1026356 -4526908 L-964779 -4462472 L-965614
 -4420253 L-943305 -4429742 L-948846 -4439021 L-943240 -4442028 L-930249 -4423434 L-927396 -4437583 L-910791 -4442809 L
-908865 -4431988 L-900312 -4429697 L-893661 -4446476 L-864570 -4442221 L-853111 -4450324 L-820384 -4440974 L-811110 -44
08771 L-825094 -4395864 L-828744 -4371560 L-844586 -4349897 L-883319 -4333379 L-857696 -4329039 L-819620 -4306726 L-816
024 -4288549 L-799430 -4271455 L-774183 -4267120 L-778370 -4224153 L-769124 -4226014 L-766661 -4217078 L-745736 -422288
2 L-739355 -4193580 L-701834 -4177689 L-675514 -4202627 L-691349 -4227806 L-637726 -4240215 L-593895 -4220405 L-557251 
-4245641 L-514177 -4255417 L-499955 -4248845 L-503887 -4235408 L-490400 -4212882 L-495764 -4196292 L-509588 -4188426 L-
523796 -4164397 L-563451 -4139955 L-556019 -4107634 L-568407 -4100533 L-566348 -4076597 L-506740 -4023249 L-465662 -401
7297 L-460890 -4010231 L-471079 -4005685 L-467438 -3998961 L-452245 -4001490 L-440707 -3979410 L-424044 -3974327 L-4117
60 -3947126 L-423413 -3938026 L-417533 -3918151 L-408047 -3915735 L-397787 -3874475 L-413972 -3861585 L-414387 -3845781
 L-396870 -3821168 L-389317 -3829546 L-376993 -3828549 L-383628 -3822568 L-372326 -3802225 L-364297 -3807083 L-348670 -
3785953 L-344073 -3794111 L-336662 -3791261 L-325184 -3770553 L-310876 -3793063 L-314694 -3821779 L-308167 -3825620 L-2
94737 -3817694 L-273986 -3827744 L-278647 -3842857 L-269646 -3845543 L-270127 -3865778 L-280052 -3880138 L-311009 -3884
940 L-306446 -3905940 L-319668 -3915308 L-294749 -3936750 L-293593 -3947907 L-303553 -3960651 L-293428 -3963794 L-29371
4 -3979933 L-242336 -3977968 L-231422 -3952128 L-197025 -3942713 L-163544 -3913835 L-157345 -3921443 L-138492 -3901052 
L-131781 -3905930 L-120589 -3899186 L-112713 -3863609 L-130985 -3834869 L-122014 -3786102 L-132494 -3771791 L-160804 -3
772445 L-182423 -3763401 L-203497 -3771785 L-208047 -3762235 L-190847 -3736996 L-223354 -3727383 L-238934 -3732577 L-25
1557 -3726223 L-277595 -3752153 L-306370 -3751402 L-315112 -3743440 L-308292 -3719085 L-332168 -3693851 L-329802 -36859
64 L-297501 -3669332 L-301249 -3656180 L-321836 -3656440 L-309961 -3645508 L-319927 -3640875 L-325764 -3619283 L-314224
 -3584622 L-322840 -3574274 L-330580 -3587165 L-348986 -3578713 L-367139 -3586146 L-382594 -3562750 L-393665 -3563060 L
-388906 -3550592 L-368375 -3539095 L-377930 -3513849 L-403405 -3504837 L-419475 -3512500 L-425195 -3504655 L-418239 -34
92043 L-448972 -3475759 L-511787 -3498190 L-525134 -3512514 L-511139 -3527298 L-519523 -3534316 L-518397 -3559475 L-510
225 -3561865 L-526920 -3571565 L-534034 -3597094 L-580467 -3610840 L-589472 -3607466 L-590057 -3621150 L-602004 -361435
4 L-621747 -3622017 L-618769 -3654327 L-642474 -3681495 L-670606 -3667875 L-667157 -3656340 L-681965 -3661169 L-690844 
-3645841 L-714576 -3645360 L-689068 -3596941 L-690443 -3587013 L-712891 -3576530 L-713884 -3561609 L-748611 -3554345 L-
752151 -3569142 L-736354 -3590881 L-743504 -3609361 L-744892 -3600113 L-759146 -3594853 L-766414 -3620571 L-802326 -361
4191 L-798810 -3630948 L-834802 -3681314 L-830189 -3698387 L-819111 -3703205 L-762578 -3677248 L-748557 -3662881 L-7375
59 -3669682 L-728010 -3664068 L-716495 -3683880 L-700188 -3690586 L-705688 -3705075 L-724962 -3716223 L-723433 -3750887
 L-680088 -3781310 L-689304 -3796852 L-686465 -3806451 L-671711 -3810962 L-666326 -3826298 L-639715 -3816484 L-648830 -
3847702 L-639403 -3855262 L-624704 -3852535 L-621770 -3875512 L-629119 -3880138 L-612084 -3893842 L-630061 -3908226 L-6
31998 -3935340 L-647240 -3948936 L-637272 -3958722 L-657059 -3984616 L-652512 -3998472 L-639867 -3998876 L-681613 -4038
126 L-679070 -4051363 L-689701 -4068065 L-706609 -4063293 L-729339 -4088789 L-745409 -4081518 L-760214 -4089111 L-76429
0 -4100446 L-783511 -4109986 L-780334 -4128042 L-828624 -4146471 L-844569 -4174090 L-852978 -4166650 L-843495 -4143113 
L-867873 -4156374 L-930345 -4225287 L-925999 -4231534 L-958633 -4252551 L-971503 -4235696 L-993525 -4250809 L-998885 -4
234878 L-1015708 -4223715 L-1072185 -4275502 L-1103088 -4282057 L-1107296 -4214141 L-1130584 -4220487 L-1141269 -420701
5 L-1144528 -4176767 L-1165229 -4186631 L-1184153 -4175188 L-1222803 -4208678 L-1236283 -4200372 L-1260032 -4200005 L-1
272765 -4217738 L-1321993 -4218644 L-1328542 -4263221 L-1372246 -4266293 L-1380071 -4276958 L-1368526 -4283950 L-137919
5 -4292454 L-1423449 -4298012 L-1426172 -4328872 L-1478938 -4331645 L-1489436 -4325923 L-1489546 -4347155 L-1463837 -43
65480 L-1440053 -4438353 L-1422632 -4457647 L-1417663 -4485992 L-1345250 -4482999 L-1328135 -4516717 L-1273465 -4561927
 L-1249863 -4566516 L-1235723 -4581152 L-1212611 -4587592 L-1204777 -4565778 L-1174143 -4590950 L-1136722 -4595113 L-11
18419 -4626751 L-1135088 -4654796 L-1126621 -4669878 L-1096690 -4682283 Z"]},"ningxia":{"id":"ningxia","name":"瀹佸鍥炴棌鑷
不鍖?,"bounds":{"left":-504506,"right":-203525,"bottom":3770553,"top":4236436},"viewBox":{"x":-763508,"y":-4292341,"width
":818984,"height":577694},"paths":["M-203758 -4062729 L-206207 -4053769 L-215106 -4052421 L-219940 -4042560 L-233424 -4
030670 L-237351 -4002086 L-233715 -3993333 L-234810 -3976660 L-270186 -3981613 L-285593 -3975107 L-293714 -3979933 L-29
5211 -3976770 L-291727 -3970236 L-293428 -3963794 L-297346 -3958588 L-303553 -3960651 L-293313 -3946862 L-294749 -39367
50 L-303862 -3934251 L-319657 -3916198 L-315739 -3910833 L-306446 -3905940 L-306135 -3889554 L-311710 -3886848 L-305530
 -3882524 L-292540 -3885233 L-285990 -3876809 L-279032 -3879309 L-270127 -3865778 L-272214 -3856599 L-269220 -3847497 L
-270922 -3843953 L-278647 -3842857 L-273986 -3827744 L-294737 -3817694 L-308167 -3825620 L-314694 -3821779 L-310265 -38
05741 L-310876 -3793063 L-315623 -3779408 L-325184 -3770553 L-333096 -3778317 L-336662 -3791261 L-344073 -3794111 L-348
670 -3785953 L-349319 -3794829 L-364297 -3807083 L-366322 -3807879 L-372326 -3802225 L-383628 -3822568 L-376073 -382329
0 L-376993 -3828549 L-389317 -3829546 L-396870 -3821168 L-403608 -3827779 L-408783 -3842215 L-414387 -3845781 L-413972 
-3861585 L-399185 -3870945 L-397787 -3874475 L-399908 -3892356 L-408047 -3915735 L-417533 -3918151 L-423413 -3938026 L-
412525 -3943136 L-411760 -3947126 L-416182 -3958514 L-422617 -3959342 L-424044 -3974327 L-440707 -3979410 L-452245 -400
1490 L-455728 -4001687 L-461782 -3996878 L-467438 -3998961 L-471079 -4005685 L-460890 -4010231 L-465662 -4017297 L-4938
66 -4022892 L-504506 -4021981 L-498394 -4028541 L-485239 -4033523 L-435426 -4033910 L-403128 -4051335 L-382394 -4049469
 L-381436 -4058006 L-368299 -4057861 L-361486 -4067913 L-357526 -4081768 L-365253 -4098300 L-362133 -4106750 L-354980 -
4114969 L-357400 -4134122 L-348552 -4176712 L-329903 -4206293 L-327337 -4208539 L-317681 -4208420 L-314236 -4224505 L-2
96131 -4225577 L-291072 -4233802 L-285658 -4236436 L-276814 -4235865 L-272368 -4232100 L-272335 -4218218 L-267892 -4202
915 L-257754 -4197083 L-257871 -4189286 L-281558 -4162192 L-287353 -4123447 L-296671 -4115351 L-296878 -4111546 L-28552
0 -4102979 L-257661 -4092826 L-238205 -4096064 L-229022 -4089515 L-217017 -4070090 L-203758 -4062729 Z","M-357849 -3795
428 L-359143 -3792151 L-365252 -3789550 L-363151 -3794570 L-357849 -3795428 Z"]},"inner-mongolia":{"id":"inner-mongolia
","name":"鍐呰挋鍙よ嚜娌诲尯","bounds":{"left":-1036872,"right":1145762,"bottom":4021981,"top":5824342},"viewBox":{"x":-1529759,
"y":-6040626,"width":3168409,"height":2234928},"paths":["M-1036872 -4682064 L-848092 -4634690 L-781869 -4641354 L-74019
1 -4635538 L-663171 -4609244 L-644523 -4576999 L-587863 -4562924 L-520012 -4522611 L-447947 -4524553 L-447789 -4497057 
L-416518 -4497997 L-409069 -4489154 L-293522 -4551942 L-229616 -4565927 L-213847 -4578874 L-171684 -4573926 L-144925 -4
579913 L-96456 -4571679 L-40280 -4577272 L-16407 -4595483 L27176 -4608855 L81177 -4674316 L130252 -4695258 L156322 -471
9403 L155570 -4733534 L127990 -4761144 L112989 -4795397 L135450 -4856987 L152659 -4873029 L190153 -4872826 L214758 -485
1216 L287595 -4841961 L344899 -4888055 L358365 -4916151 L434494 -4923241 L477243 -4953835 L486590 -4966327 L490451 -499
9871 L508281 -5025736 L525258 -5035608 L565201 -5036060 L571063 -5059504 L600612 -5056220 L622833 -5076170 L668628 -508
0039 L676389 -5091813 L694762 -5078678 L730681 -5075628 L748268 -5087685 L733538 -5143023 L705232 -5173073 L690259 -517
7148 L684661 -5191082 L655015 -5203534 L639888 -5224177 L585756 -5220487 L554442 -5177767 L512716 -5201435 L465404 -519
6370 L446923 -5174841 L417438 -5200423 L413497 -5223764 L434165 -5238993 L430280 -5266809 L489301 -5416472 L526721 -539
6315 L568894 -5386464 L622004 -5435292 L659591 -5446680 L676332 -5467655 L677085 -5487696 L658277 -5489358 L695386 -556
7190 L712471 -5635151 L750725 -5667929 L756240 -5690777 L742938 -5712291 L744802 -5735328 L727242 -5740612 L701705 -573
4984 L697386 -5754186 L715223 -5767494 L746317 -5813470 L791003 -5824342 L813142 -5808313 L817131 -5794950 L807229 -579
0855 L800525 -5766190 L780015 -5738156 L816059 -5727655 L829976 -5712870 L848648 -5742451 L861972 -5737257 L872761 -572
0050 L890664 -5723337 L884500 -5699431 L922937 -5622187 L950837 -5610396 L974107 -5637637 L988830 -5627598 L1010336 -56
34510 L1023219 -5628835 L1029589 -5641987 L1039767 -5638931 L1054599 -5649450 L1068506 -5682708 L1083251 -5678334 L1144
569 -5619758 L1128851 -5588075 L1133768 -5563982 L1119066 -5552510 L1101562 -5496619 L1107831 -5466503 L1101685 -546232
3 L1110197 -5454984 L1115597 -5421588 L1111027 -5406270 L1093933 -5409116 L1088135 -5401645 L1077223 -5336940 L1080047 
-5292862 L1056571 -5330917 L1010474 -5266750 L995232 -5258268 L986873 -5238477 L949411 -5209537 L935490 -5182301 L95266
4 -5161397 L971753 -5155503 L969786 -5143380 L978107 -5143248 L981476 -5124257 L995594 -5119784 L1012626 -5136475 L1015
920 -5145711 L1008753 -5153045 L1027548 -5150787 L1027355 -5136265 L1039616 -5138892 L1034662 -5122941 L992529 -5103810
 L1008424 -5070745 L1004762 -5054480 L982867 -5045856 L982602 -5003162 L966471 -5012950 L960042 -5027586 L952912 -50283
04 L946703 -5010179 L909162 -5030985 L907586 -5006519 L899328 -5001404 L910654 -4993768 L923612 -4998129 L924609 -49838
65 L943932 -4967978 L950125 -4946486 L943899 -4898190 L949986 -4874881 L967820 -4859992 L966681 -4838936 L982113 -48377
54 L1023243 -4873848 L1034546 -4875531 L1032040 -4865588 L1057361 -4839442 L1053025 -4826205 L1077016 -4784618 L1062710
 -4763710 L1094310 -4753325 L1089973 -4712920 L1066326 -4708910 L1058553 -4697163 L1063824 -4689373 L1036147 -4674653 L
995521 -4682808 L1002776 -4674806 L997429 -4664250 L967752 -4666823 L947045 -4631155 L922659 -4632256 L894679 -4603940 
L876500 -4602519 L852684 -4585809 L825682 -4535807 L798694 -4585997 L782959 -4589531 L771326 -4606422 L753439 -4586608 
L764994 -4568907 L762282 -4524459 L772518 -4516403 L768682 -4488637 L759831 -4482737 L729645 -4480163 L725535 -4490481 
L688613 -4478182 L681348 -4503680 L662721 -4525514 L665621 -4533263 L677310 -4526786 L681889 -4538621 L675126 -4564497 
L661445 -4556169 L658339 -4571415 L645595 -4578192 L653353 -4586128 L649498 -4598244 L631381 -4616713 L609988 -4614220 
L600168 -4601213 L560082 -4589246 L562812 -4567564 L552516 -4565991 L562660 -4553910 L557128 -4541863 L537829 -4534365 
L520058 -4544003 L495701 -4515859 L484067 -4533114 L476878 -4532293 L437306 -4504934 L440482 -4490226 L399948 -4490269 
L397804 -4512017 L404239 -4517598 L396980 -4552365 L372228 -4549356 L366270 -4529167 L351441 -4526595 L346113 -4512335 
L348476 -4477621 L320209 -4470215 L331122 -4444373 L316321 -4432539 L341723 -4391002 L331598 -4363753 L322482 -4358235 
L314782 -4364044 L285355 -4340204 L264794 -4348243 L238692 -4336325 L229831 -4322725 L190602 -4331206 L157401 -4261394 
L148082 -4254521 L121662 -4258909 L109515 -4235967 L90855 -4232126 L97101 -4251904 L85756 -4252310 L56814 -4217396 L436
41 -4231283 L31046 -4222704 L10190 -4238309 L17675 -4219675 L-3413 -4211387 L-12110 -4216620 L-10384 -4201149 L-30509 -
4192725 L-36942 -4170051 L-83886 -4127388 L-93906 -4102348 L-82033 -4082011 L-91531 -4066350 L-103536 -4078133 L-107422
 -4038827 L-167603 -4032564 L-176155 -4051289 L-214743 -4068001 L-238205 -4096064 L-257661 -4092826 L-294685 -4107867 L
-281558 -4162192 L-257386 -4195056 L-267892 -4202915 L-272368 -4232100 L-285658 -4236436 L-296131 -4225577 L-314236 -42
24505 L-317681 -4208420 L-329903 -4206293 L-348552 -4176712 L-354980 -4114969 L-365253 -4098300 L-357526 -4081768 L-368
299 -4057861 L-381436 -4058006 L-382394 -4049469 L-403128 -4051335 L-435426 -4033910 L-483876 -4033750 L-506740 -402324
9 L-566348 -4076597 L-568407 -4100533 L-556019 -4107634 L-563451 -4139955 L-523796 -4164397 L-495764 -4196292 L-490400 
-4212882 L-503887 -4235408 L-499955 -4248845 L-514177 -4255417 L-557251 -4245641 L-593895 -4220405 L-637726 -4240215 L-
691349 -4227806 L-675514 -4202627 L-701834 -4177689 L-739355 -4193580 L-745736 -4222882 L-766661 -4217078 L-769124 -422
6014 L-777498 -4223313 L-774183 -4267120 L-799430 -4271455 L-816024 -4288549 L-819620 -4306726 L-857696 -4329039 L-8833
19 -4333379 L-844586 -4349897 L-828744 -4371560 L-825094 -4395864 L-811110 -4408771 L-816005 -4433248 L-830683 -4446445
 L-853111 -4450324 L-864570 -4442221 L-893661 -4446476 L-900312 -4429697 L-908865 -4431988 L-910791 -4442809 L-925820 -
4438708 L-930249 -4423434 L-943240 -4442028 L-948846 -4439021 L-943305 -4429742 L-966130 -4420806 L-964779 -4462472 L-1
026356 -4526908 L-994097 -4552909 L-1036872 -4682064 Z"]},"heilongjiang":{"id":"heilongjiang","name":"榛戦緳姹熺渷","bounds":
{"left":780015,"right":1846587,"bottom":4843626,"top":5865660},"viewBox":{"x":414974,"y":-5988304,"width":1796654,"heig
ht":1267322},"paths":["M791003 -5824342 L844117 -5848856 L858204 -5845125 L882035 -5849233 L926701 -5865485 L956368 -58
59915 L967296 -5851329 L979875 -5853420 L996040 -5838598 L1025633 -5831707 L1031819 -5841775 L1046009 -5844667 L1080033
 -5834199 L1086762 -5828315 L1085343 -5815180 L1096663 -5818979 L1117289 -5808333 L1109874 -5792005 L1126450 -5786527 L
1139918 -5771968 L1141193 -5751458 L1159541 -5746244 L1156041 -5726286 L1188831 -5689041 L1187822 -5677437 L1198754 -56
68479 L1193382 -5665528 L1198640 -5655242 L1196228 -5662292 L1203507 -5664632 L1204897 -5636052 L1243788 -5591843 L1242
339 -5576128 L1249677 -5559901 L1269216 -5553666 L1265539 -5529222 L1275922 -5507373 L1297430 -5490478 L1319597 -548925
0 L1345549 -5500656 L1363517 -5501813 L1369741 -5488693 L1396279 -5482344 L1413191 -5484411 L1414191 -5494356 L1419162 
-5495282 L1479939 -5447919 L1518088 -5451690 L1514145 -5421432 L1521439 -5411653 L1532052 -5413693 L1541294 -5395992 L1
534587 -5368273 L1558172 -5348472 L1566175 -5331633 L1580367 -5332542 L1595285 -5342021 L1638485 -5343419 L1681064 -535
6473 L1685726 -5378694 L1712249 -5408945 L1741021 -5415868 L1788612 -5456969 L1810677 -5467786 L1828632 -5466055 L18444
24 -5481630 L1844856 -5471896 L1825604 -5453508 L1821277 -5425170 L1844258 -5395912 L1832800 -5364194 L1819547 -5358904
 L1812575 -5345165 L1819696 -5322528 L1812529 -5314360 L1818159 -5269938 L1810198 -5250648 L1818745 -5224230 L1806669 -
5208211 L1810485 -5186592 L1796834 -5170463 L1799648 -5140616 L1784558 -5125865 L1790307 -5081111 L1780518 -5073030 L17
02975 -5080178 L1690252 -5087734 L1665059 -5040702 L1641451 -5033168 L1632802 -5019002 L1648742 -5002635 L1677393 -4941
553 L1679590 -4887725 L1690359 -4874353 L1679052 -4868232 L1667681 -4872544 L1658646 -4863724 L1650711 -4873344 L162293
4 -4878789 L1603542 -4921437 L1588406 -4897270 L1573412 -4913630 L1558283 -4891915 L1540615 -4887892 L1523070 -4873391 
L1524624 -4851212 L1513121 -4843635 L1499259 -4843626 L1457222 -4899061 L1442512 -4938319 L1435917 -4939893 L1424485 -4
920717 L1417940 -4920874 L1425287 -4894549 L1411218 -4884814 L1399358 -4885743 L1396135 -4896286 L1387577 -4894739 L138
5063 -4906232 L1365924 -4928320 L1374274 -4936505 L1359212 -4943581 L1342248 -4941369 L1338929 -4931412 L1332414 -49337
47 L1328137 -4962154 L1332906 -4968166 L1318838 -4991072 L1285692 -4996673 L1261856 -4981719 L1249479 -4981061 L1221446
 -4993152 L1218199 -5017594 L1200562 -5011022 L1190328 -4999496 L1169581 -4995288 L1164463 -5006488 L1154936 -5009689 L
1151149 -4998434 L1117173 -4994718 L1081193 -5026224 L1084522 -5037501 L1075470 -5045681 L1078621 -5056360 L1072674 -50
81257 L1041403 -5071956 L1033443 -5075111 L1027455 -5068399 L1008424 -5070745 L994313 -5088973 L992529 -5103810 L100995
0 -5107862 L1012687 -5116782 L1032206 -5120564 L1039616 -5138892 L1035059 -5142227 L1027355 -5136265 L1027548 -5150787 
L1008753 -5153045 L1016006 -5141367 L989958 -5119523 L981476 -5124257 L978107 -5143248 L970614 -5141659 L971753 -515550
3 L952664 -5161397 L935490 -5182301 L949411 -5209537 L986873 -5238477 L995232 -5258268 L1010474 -5266750 L1056571 -5330
917 L1080047 -5292862 L1077223 -5336940 L1088135 -5401645 L1093933 -5409116 L1111027 -5406270 L1115597 -5421588 L111019
7 -5454984 L1101685 -5462323 L1107831 -5466503 L1101562 -5496619 L1119066 -5552510 L1133768 -5563982 L1128851 -5588075 
L1145529 -5617290 L1137381 -5631782 L1083251 -5678334 L1068506 -5682708 L1054599 -5649450 L1039767 -5638931 L1029589 -5
641987 L1023219 -5628835 L1010336 -5634510 L988830 -5627598 L974107 -5637637 L950837 -5610396 L922937 -5622187 L914715 
-5636227 L915988 -5645764 L884500 -5699431 L884723 -5709033 L891729 -5710508 L890664 -5723337 L872761 -5720050 L861972 
-5737257 L848648 -5742451 L837124 -5714700 L829976 -5712870 L821293 -5716163 L816059 -5727655 L780617 -5737137 L800525 
-5766190 L806375 -5789546 L817131 -5794950 L813142 -5808313 L801393 -5811160 L803140 -5818273 L791003 -5824342 Z"]},"ji
lin":{"id":"jilin","name":"鍚夋灄鐪?,"bounds":{"left":899328,"right":1692097,"bottom":4500494,"top":5081871},"viewBox":{"x"
:784705,"y":-5151637,"width":1022016,"height":720908},"paths":["M1690359 -4874353 L1690388 -4831877 L1685898 -4822284 L
1690031 -4811404 L1682007 -4809079 L1683610 -4802488 L1668297 -4800854 L1640279 -4779452 L1661968 -4770339 L1669884 -47
48540 L1659413 -4747014 L1650236 -4765913 L1644080 -4758974 L1642370 -4766744 L1627169 -4772283 L1623723 -4790830 L1609
907 -4792169 L1607095 -4800154 L1592177 -4799843 L1586668 -4767170 L1589486 -4733824 L1581245 -4733957 L1577208 -472260
2 L1569023 -4729138 L1559233 -4726186 L1553639 -4716240 L1552707 -4696505 L1533875 -4675238 L1464299 -4661393 L1474194 
-4638465 L1492993 -4620710 L1494733 -4612355 L1488815 -4595993 L1482778 -4592234 L1467494 -4597173 L1443774 -4587262 L1
436231 -4593652 L1412635 -4589837 L1408590 -4595046 L1398798 -4594886 L1403682 -4603423 L1394748 -4606332 L1390378 -461
6355 L1379303 -4622264 L1374778 -4612902 L1362940 -4611785 L1364480 -4606318 L1356899 -4601828 L1353178 -4572188 L13576
85 -4564574 L1349915 -4563486 L1338105 -4537379 L1330490 -4531940 L1324119 -4515468 L1318214 -4512827 L1323808 -4508009
 L1311334 -4507729 L1299137 -4500494 L1287470 -4506876 L1298687 -4535592 L1270403 -4567253 L1261823 -4590993 L1251776 -
4588329 L1244944 -4619083 L1257553 -4639343 L1250871 -4643002 L1243171 -4640326 L1240139 -4653825 L1229535 -4657456 L12
29810 -4666933 L1208539 -4692698 L1205560 -4707515 L1195280 -4706700 L1193231 -4740846 L1184527 -4738969 L1167254 -4708
756 L1156509 -4708699 L1159287 -4717891 L1152288 -4722337 L1157276 -4730513 L1144668 -4738666 L1142250 -4746656 L112368
8 -4749729 L1111592 -4756817 L1107531 -4766501 L1096879 -4768473 L1094310 -4753325 L1088819 -4751767 L1073660 -4760187 
L1069355 -4756740 L1062207 -4770667 L1069970 -4771364 L1068901 -4779456 L1076366 -4777179 L1077016 -4784618 L1053025 -4
826205 L1057361 -4839442 L1045508 -4845364 L1035578 -4859052 L1032935 -4876952 L1023243 -4873848 L1002500 -4850881 L982
113 -4837754 L966681 -4838936 L967820 -4859992 L949986 -4874881 L943899 -4898190 L941882 -4921824 L950125 -4946486 L943
264 -4954557 L943932 -4967978 L933947 -4972247 L924609 -4983865 L923612 -4998129 L910654 -4993768 L899328 -5001404 L907
586 -5006519 L910746 -5020331 L905514 -5028309 L909162 -5030985 L927160 -5026003 L946703 -5010179 L953299 -5018351 L952
912 -5028304 L960042 -5027586 L966471 -5012950 L982602 -5003162 L987730 -5012542 L982867 -5045856 L1004762 -5054480 L10
08424 -5070745 L1027455 -5068399 L1033443 -5075111 L1041403 -5071956 L1062472 -5081871 L1071937 -5081748 L1078621 -5056
360 L1075470 -5045681 L1084522 -5037501 L1081193 -5026224 L1112999 -5003256 L1117173 -4994718 L1127745 -4992628 L114340
1 -5001190 L1151149 -4998434 L1154936 -5009689 L1164463 -5006488 L1169581 -4995288 L1190328 -4999496 L1200562 -5011022 
L1218199 -5017594 L1217295 -5001093 L1221446 -4993152 L1249479 -4981061 L1261856 -4981719 L1285692 -4996673 L1305557 -4
989691 L1318838 -4991072 L1332906 -4968166 L1328137 -4962154 L1332414 -4933747 L1338929 -4931412 L1342248 -4941369 L135
9212 -4943581 L1374274 -4936505 L1365924 -4928320 L1385063 -4906232 L1387577 -4894739 L1396135 -4896286 L1399358 -48857
43 L1411218 -4884814 L1425287 -4894549 L1417940 -4920874 L1424485 -4920717 L1435917 -4939893 L1442512 -4938319 L1450302
 -4927403 L1457222 -4899061 L1499259 -4843626 L1513121 -4843635 L1524624 -4851212 L1523070 -4873391 L1540615 -4887892 L
1558283 -4891915 L1564271 -4898065 L1564535 -4906885 L1573412 -4913630 L1588406 -4897270 L1603542 -4921437 L1614200 -48
90570 L1622934 -4878789 L1650711 -4873344 L1658646 -4863724 L1667681 -4872544 L1679052 -4868232 L1690359 -4874353 Z"]},
"liaoning":{"id":"liaoning","name":"杈藉畞鐪?,"bounds":{"left":732146,"right":1299137,"bottom":4208836,"top":4768536},"view
Box":{"x":523687,"y":-4835701,"width":983909,"height":694029},"paths":["M1299137 -4500494 L1276193 -4470700 L1267957 -4
471288 L1251095 -4459523 L1247957 -4451680 L1236564 -4445331 L1226518 -4433536 L1225318 -4426334 L1198299 -4396391 L119
9129 -4388665 L1185452 -4368426 L1174441 -4362998 L1162344 -4364628 L1155092 -4360052 L1143319 -4363256 L1141869 -43545
98 L1128251 -4345936 L1111018 -4352101 L1110310 -4343581 L1116062 -4342182 L1113765 -4337804 L1097669 -4334682 L1081411
 -4326860 L1068899 -4313101 L1040284 -4294994 L1022171 -4272296 L1029782 -4268153 L1023755 -4259272 L1017182 -4253219 L
1009445 -4256145 L1004028 -4252399 L1010327 -4246157 L1009071 -4241996 L1004305 -4242485 L998137 -4250744 L991454 -4251
334 L984685 -4238385 L995908 -4236135 L994035 -4229011 L967309 -4220712 L951140 -4208865 L945674 -4215738 L943353 -4231
506 L955883 -4238284 L965474 -4248474 L973042 -4245080 L988888 -4256023 L990604 -4260574 L981999 -4264934 L981013 -4273
666 L992232 -4286623 L1007899 -4292595 L967665 -4284283 L949291 -4285020 L956835 -4295854 L972587 -4304981 L972509 -431
6948 L963272 -4332215 L969700 -4339692 L987788 -4349206 L1023510 -4416430 L1007238 -4432340 L993981 -4453834 L991453 -4
466190 L982293 -4478171 L973382 -4475857 L970591 -4468734 L971757 -4460366 L966803 -4456112 L935439 -4457040 L918983 -4
445415 L910641 -4446239 L907144 -4433183 L914575 -4432198 L897168 -4418780 L878817 -4393874 L875868 -4387023 L875842 -4
369667 L846333 -4354423 L830519 -4341870 L804453 -4374071 L800027 -4372965 L800519 -4387839 L794865 -4399978 L771271 -4
396789 L767431 -4403717 L760654 -4404480 L762731 -4413786 L749101 -4410922 L732847 -4425953 L732266 -4438814 L742745 -4
440696 L745531 -4445932 L738469 -4448725 L737885 -4452664 L746387 -4455276 L754050 -4465028 L762087 -4486722 L765906 -4
485670 L768682 -4488637 L765676 -4495537 L771791 -4499027 L768632 -4511228 L772518 -4516403 L762282 -4524459 L764379 -4
572103 L753193 -4583412 L754791 -4590665 L771326 -4606422 L773790 -4598687 L782959 -4589531 L798694 -4585997 L798061 -4
576651 L819342 -4545837 L820654 -4537416 L825682 -4535807 L836211 -4561684 L848956 -4571217 L852684 -4585809 L876500 -4
602519 L889025 -4606030 L894679 -4603940 L922659 -4632256 L937800 -4636160 L947045 -4631155 L959256 -4644206 L961792 -4
656950 L967752 -4666823 L994371 -4663436 L999213 -4665363 L1002776 -4674806 L996113 -4674962 L995521 -4682808 L1007547 
-4682741 L1015810 -4677849 L1036147 -4674653 L1063824 -4689373 L1058553 -4697163 L1066326 -4708910 L1081560 -4716487 L1
089973 -4712920 L1096879 -4768473 L1107531 -4766501 L1108401 -4759598 L1122278 -4750271 L1142250 -4746656 L1144668 -473
8666 L1157276 -4730513 L1152288 -4722337 L1159287 -4717891 L1156509 -4708699 L1167254 -4708756 L1184527 -4738969 L11932
31 -4740846 L1195280 -4706700 L1197857 -4704604 L1200767 -4708120 L1205560 -4707515 L1208539 -4692698 L1219893 -4675727
 L1229810 -4666933 L1229535 -4657456 L1240139 -4653825 L1243171 -4640326 L1246728 -4638993 L1250871 -4643002 L1257553 -
4639343 L1244944 -4619083 L1251644 -4598714 L1251776 -4588329 L1261823 -4590993 L1263495 -4578464 L1270403 -4567253 L12
98687 -4535592 L1293834 -4516644 L1287470 -4506876 L1287514 -4503633 L1295697 -4504315 L1299137 -4500494 Z","M969536 -4
310905 L961837 -4301478 L955921 -4303092 L951493 -4298963 L944574 -4302224 L951212 -4310554 L961539 -4313422 L963491 -4
318033 L969066 -4316117 L969536 -4310905 Z"]},"beijing":{"id":"beijing","name":"鍖椾含甯?,"bounds":{"left":457475,"right":6
24372,"bottom":4255681,"top":4438320},"viewBox":{"x":380392,"y":-4460237,"width":321064,"height":226472},"paths":["M573
289 -4274569 L560101 -4273405 L555951 -4276099 L553735 -4275882 L550149 -4270674 L542314 -4263951 L544473 -4256299 L535
356 -4256692 L528678 -4262113 L525676 -4267890 L504663 -4268989 L497757 -4268401 L493752 -4261195 L488473 -4258419 L483
032 -4261276 L479622 -4266287 L476073 -4268580 L472879 -4269084 L467199 -4267360 L463972 -4278661 L458373 -4285554 L460
323 -4289888 L468148 -4290519 L464274 -4296038 L462499 -4304002 L458758 -4308108 L457619 -4317915 L470894 -4326888 L487
612 -4331068 L491352 -4337516 L498320 -4344638 L494401 -4352005 L480819 -4365610 L477793 -4371607 L480656 -4376618 L485
922 -4381730 L494841 -4383118 L498966 -4381133 L505182 -4384476 L514808 -4395631 L517689 -4404766 L534158 -4403169 L534
938 -4406790 L522990 -4420750 L525458 -4421925 L533035 -4419078 L535853 -4419491 L536516 -4420677 L533324 -4423854 L533
809 -4427750 L543283 -4428269 L546319 -4431503 L546370 -4437644 L547837 -4438320 L550765 -4437059 L551968 -4426835 L579
560 -4400029 L595614 -4400041 L607518 -4397586 L619403 -4402405 L624372 -4398994 L623813 -4395726 L618156 -4393715 L617
240 -4387288 L615075 -4386376 L609799 -4387982 L606160 -4387425 L602044 -4383994 L597758 -4376921 L602038 -4370824 L603
012 -4363603 L606409 -4357335 L607834 -4356208 L612851 -4356550 L614348 -4347663 L613487 -4341885 L607445 -4334982 L589
927 -4326842 L573652 -4327319 L567285 -4319523 L569572 -4307968 L583462 -4299647 L580995 -4290584 L585131 -4279471 L573
289 -4274569 Z"]},"tianjin":{"id":"tianjin","name":"澶╂触甯?,"bounds":{"left":571920,"right":682571,"bottom":4160699,"top"
:4348966},"viewBox":{"x":461766,"y":-4371558,"width":330959,"height":233451},"paths":["M614361 -4346514 L629436 -434896
6 L637479 -4338847 L641501 -4335604 L649544 -4332750 L654214 -4326004 L655122 -4324318 L652577 -4321111 L632722 -432269
7 L631330 -4318987 L631764 -4311727 L635859 -4297632 L638932 -4292101 L643972 -4290134 L642954 -4281108 L651793 -427570
6 L656295 -4280362 L668457 -4279075 L665249 -4261956 L661919 -4258419 L663149 -4255469 L667898 -4258199 L682571 -424735
6 L680670 -4241407 L665793 -4235055 L659778 -4227428 L657209 -4215863 L661022 -4212176 L653606 -4203702 L647830 -419353
1 L645512 -4181926 L645853 -4168152 L637502 -4166547 L621775 -4160699 L618896 -4161801 L618072 -4170340 L615486 -417193
1 L608748 -4165925 L605601 -4165848 L601458 -4178061 L590718 -4172453 L584108 -4173233 L575506 -4181853 L572852 -418653
3 L571930 -4199533 L572307 -4210479 L577334 -4214163 L583693 -4216158 L587427 -4219944 L581891 -4240079 L579560 -425575
3 L575014 -4266487 L573289 -4274569 L583626 -4278061 L585131 -4279471 L584569 -4280968 L587304 -4281652 L590131 -427661
2 L604901 -4278154 L604268 -4294191 L602055 -4299722 L605497 -4303287 L609799 -4304393 L601921 -4309058 L599014 -431658
2 L602764 -4319673 L603629 -4332994 L610235 -4337587 L613487 -4341885 L614361 -4346514 Z"]},"hebei":{"id":"hebei","name
":"娌冲寳鐪?,"bounds":{"left":304313,"right":830519,"bottom":3863237,"top":4616713},"viewBox":{"x":-94860,"y":-4707130,"wid
th":1324552,"height":934311},"paths":["M759831 -4482737 L754050 -4465028 L746387 -4455276 L737885 -4452664 L745531 -444
5932 L742745 -4440696 L732266 -4438814 L733584 -4422892 L749101 -4410922 L762731 -4413786 L760654 -4404480 L767431 -440
3717 L771271 -4396789 L794865 -4399978 L800519 -4387839 L800027 -4372965 L804453 -4374071 L830519 -4341870 L802524 -432
8718 L787942 -4309082 L781103 -4277189 L785901 -4270646 L777653 -4265888 L765837 -4246667 L743877 -4237300 L729590 -424
0032 L708112 -4222266 L702571 -4223168 L691449 -4238052 L680670 -4241407 L682571 -4247356 L676787 -4252266 L667898 -425
8199 L663149 -4255469 L668457 -4279075 L656295 -4280362 L651793 -4275706 L642954 -4281108 L644063 -4289922 L635859 -429
7632 L631330 -4318987 L632722 -4322697 L652577 -4321111 L655122 -4324318 L649544 -4332750 L637479 -4338847 L629436 -434
8966 L614361 -4346514 L612851 -4356550 L607834 -4356208 L603012 -4363603 L597758 -4376921 L606160 -4387425 L617240 -438
7288 L623259 -4400827 L607518 -4397586 L579560 -4400029 L551968 -4426835 L547837 -4438320 L543283 -4428269 L533809 -442
7750 L535853 -4419491 L522990 -4420750 L534158 -4403169 L517689 -4404766 L505182 -4384476 L485922 -4381730 L480656 -437
6618 L477793 -4371607 L480819 -4365610 L498320 -4344638 L487612 -4331068 L470894 -4326888 L457619 -4317915 L468148 -429
0519 L460323 -4289888 L458373 -4285554 L466396 -4268349 L476073 -4268580 L488473 -4258419 L497757 -4268401 L525676 -426
7890 L530774 -4260077 L540244 -4255681 L544473 -4256299 L542314 -4263951 L553735 -4275882 L573289 -4274569 L587427 -421
9944 L572307 -4210479 L575506 -4181853 L584108 -4173233 L602207 -4177783 L605601 -4165848 L617319 -4171227 L619930 -416
1044 L645853 -4168152 L660633 -4142713 L669466 -4135030 L662115 -4123681 L672627 -4125450 L671350 -4120023 L647836 -410
0332 L639633 -4084570 L588775 -4075385 L558481 -4036397 L546191 -4041208 L539782 -4028258 L542377 -4020171 L519809 -401
6232 L510398 -3984559 L494636 -3955331 L470434 -3932903 L465189 -3919859 L466410 -3907818 L483496 -3885938 L484196 -387
9188 L476275 -3878768 L472279 -3870942 L462108 -3881641 L452131 -3883535 L435074 -3863237 L432386 -3873841 L404325 -387
1815 L384419 -3886798 L360139 -3883491 L355048 -3885693 L353941 -3894527 L330327 -3891942 L329693 -3899197 L315497 -390
8409 L317106 -3916524 L312588 -3924843 L306279 -3925878 L305090 -3936490 L313307 -3936432 L333455 -3953770 L329608 -396
3615 L331920 -3984488 L361973 -4041170 L360645 -4048070 L349512 -4049181 L331843 -4098878 L316998 -4103802 L307491 -411
2555 L304540 -4141584 L307394 -4152136 L316264 -4154958 L316533 -4162350 L321866 -4160691 L328171 -4166004 L319221 -419
2993 L344798 -4206621 L350267 -4200117 L359138 -4199982 L377282 -4215976 L373987 -4228057 L383195 -4260597 L371081 -427
0202 L367991 -4291353 L354560 -4289681 L328162 -4308501 L334492 -4316604 L341258 -4316414 L341273 -4327975 L369991 -433
6787 L378139 -4346256 L357794 -4349318 L356164 -4368945 L316321 -4432539 L329689 -4439731 L331122 -4444373 L323302 -445
2767 L320910 -4471602 L333206 -4478072 L349024 -4478912 L345686 -4508229 L351441 -4526595 L366270 -4529167 L366718 -454
1003 L372228 -4549356 L383088 -4546216 L396503 -4552859 L404239 -4517598 L397804 -4512017 L402115 -4502165 L399948 -449
0269 L419217 -4494023 L426694 -4489679 L440482 -4490226 L443281 -4491853 L437306 -4504934 L476878 -4532293 L484067 -453
3114 L495701 -4515859 L520058 -4544003 L524084 -4536646 L532223 -4539579 L537829 -4534365 L557128 -4541863 L562660 -455
3910 L552516 -4565991 L562812 -4567564 L560082 -4589246 L573100 -4598224 L600168 -4601213 L602416 -4610247 L609988 -461
4220 L631381 -4616713 L649498 -4598244 L653353 -4586128 L645595 -4578192 L658339 -4571415 L661445 -4556169 L675126 -456
4497 L681889 -4538621 L677310 -4526786 L665621 -4533263 L662721 -4525514 L670173 -4511447 L681348 -4503680 L688613 -447
8182 L719049 -4485262 L725535 -4490481 L729645 -4480163 L759831 -4482737 Z","M584569 -4280968 L580995 -4290584 L583462 
-4299647 L569572 -4307968 L567285 -4319523 L573652 -4327319 L587789 -4326391 L603629 -4332994 L599590 -4313281 L609799 
-4304393 L602055 -4299722 L604901 -4278154 L590131 -4276612 L584569 -4280968 Z"]},"shanxi":{"id":"shanxi","name":"灞辫タ鐪?
,"bounds":{"left":23287,"right":383195,"bottom":3689180,"top":4391002},"viewBox":{"x":-413633,"y":-4475221,"width":1233
747,"height":870259},"paths":["M341723 -4391002 L356987 -4367128 L357794 -4349318 L378139 -4346256 L369991 -4336787 L34
1273 -4327975 L341258 -4316414 L333613 -4316018 L328367 -4307423 L354560 -4289681 L367991 -4291353 L371081 -4270202 L38
3195 -4260597 L373987 -4228057 L377282 -4215976 L359138 -4199982 L350267 -4200117 L344798 -4206621 L319221 -4192993 L32
8171 -4166004 L321866 -4160691 L316533 -4162350 L316264 -4154958 L307394 -4152136 L304540 -4141584 L307491 -4112555 L31
6998 -4103802 L331843 -4098878 L349512 -4049181 L360645 -4048070 L361973 -4041170 L339333 -3992960 L331920 -3984488 L32
9608 -3963615 L333455 -3953770 L313307 -3936432 L305090 -3936490 L306279 -3925878 L312588 -3924843 L317106 -3916524 L31
5497 -3908409 L329693 -3899197 L330756 -3893686 L330164 -3859212 L325238 -3848954 L327237 -3835715 L320738 -3832273 L32
3898 -3814013 L312678 -3797933 L297159 -3794707 L296844 -3788425 L287982 -3791404 L282259 -3777360 L271049 -3780446 L26
7503 -3770890 L248911 -3762746 L241111 -3768632 L234467 -3765358 L207979 -3765457 L187286 -3770667 L185915 -3742706 L16
4071 -3745278 L149416 -3734556 L140995 -3720189 L105299 -3714821 L83806 -3699738 L71551 -3697853 L56091 -3689369 L28375
 -3691066 L23851 -3694836 L23287 -3706494 L27031 -3737278 L49079 -3791358 L53192 -3810480 L40107 -3865797 L43591 -39139
12 L32153 -3958976 L60872 -3996895 L55752 -4008826 L64670 -4014106 L68423 -4029983 L63059 -4046758 L44664 -4072255 L433
77 -4089728 L51241 -4107600 L73727 -4130758 L75351 -4149278 L87550 -4182796 L95712 -4195673 L100303 -4213458 L107675 -4
221677 L94375 -4230818 L113287 -4237811 L121662 -4258909 L148082 -4254521 L154442 -4258137 L190602 -4331206 L200710 -43
33626 L229831 -4322725 L238692 -4336325 L264794 -4348243 L270297 -4349619 L279293 -4340917 L287357 -4340777 L305162 -43
50873 L314782 -4364044 L322482 -4358235 L331598 -4363753 L335436 -4387242 L341723 -4391002 Z"]},"shaanxi":{"id":"shaanx
i","name":"闄曡タ鐪?,"bounds":{"left":-413594,"right":107834,"bottom":3364466,"top":4253439},"viewBox":{"x":-934252,"y":-43
60116,"width":1562744,"height":1102327},"paths":["M94375 -4230818 L107675 -4221677 L87550 -4182796 L75351 -4149278 L737
27 -4130758 L51241 -4107600 L43377 -4089728 L44664 -4072255 L63059 -4046758 L68423 -4029983 L64670 -4014106 L55752 -400
8826 L60872 -3996895 L32153 -3958976 L43591 -3913912 L40107 -3865797 L53192 -3810480 L27031 -3737278 L23287 -3706494 L2
3851 -3694836 L33473 -3690499 L35659 -3673166 L43310 -3668683 L44009 -3659626 L38712 -3652777 L57501 -3641114 L52690 -3
625368 L60674 -3619385 L55360 -3608523 L71989 -3599138 L77612 -3584912 L90757 -3579589 L94587 -3572838 L95375 -3550520 
L90668 -3536706 L64073 -3523494 L54052 -3528886 L50010 -3538107 L43193 -3528459 L28601 -3526831 L14097 -3532727 L-33955
 -3538243 L-47934 -3532602 L-49337 -3526276 L-20369 -3516321 L-19990 -3496664 L-9739 -3498967 L11907 -3488093 L17440 -3
469146 L3724 -3458837 L-12923 -3463583 L-44331 -3458005 L-40301 -3452049 L-49551 -3439729 L-49066 -3427700 L-38604 -342
0900 L-39026 -3367872 L-59613 -3364466 L-65112 -3365840 L-65584 -3375900 L-91298 -3395761 L-126209 -3411358 L-140431 -3
429985 L-163860 -3429401 L-189531 -3416837 L-217205 -3443862 L-235573 -3447864 L-237712 -3459777 L-243334 -3460674 L-25
3969 -3446918 L-271679 -3456124 L-271665 -3482455 L-301406 -3487577 L-310745 -3479118 L-325284 -3478758 L-332031 -34727
80 L-359143 -3486813 L-361818 -3503916 L-382207 -3498727 L-386573 -3490942 L-406236 -3487144 L-413594 -3509277 L-403405
 -3504837 L-377930 -3513849 L-368375 -3539095 L-388906 -3550592 L-393665 -3563060 L-382594 -3562750 L-377986 -3576021 L
-367139 -3586146 L-355559 -3585421 L-348986 -3578713 L-330580 -3587165 L-322840 -3574274 L-314224 -3584622 L-323121 -36
03696 L-318281 -3610040 L-325764 -3619283 L-319927 -3640875 L-311029 -3640931 L-309961 -3645508 L-313188 -3654875 L-321
836 -3656440 L-317138 -3661093 L-301249 -3656180 L-297501 -3669332 L-315764 -3683393 L-329802 -3685964 L-332168 -369385
1 L-319888 -3700042 L-308292 -3719085 L-315859 -3736099 L-308954 -3750779 L-277595 -3752153 L-261709 -3742059 L-251557 
-3726223 L-238934 -3732577 L-223354 -3727383 L-190847 -3736996 L-208047 -3762235 L-203497 -3771785 L-185893 -3768764 L-
182423 -3763401 L-160804 -3772445 L-139482 -3768836 L-122661 -3782271 L-130090 -3807681 L-130985 -3834869 L-116739 -384
8356 L-113213 -3859888 L-118375 -3874096 L-117045 -3891888 L-131781 -3905930 L-138492 -3901052 L-157345 -3921443 L-1617
81 -3913729 L-174170 -3920132 L-174170 -3925376 L-197025 -3942713 L-213962 -3943979 L-217432 -3949411 L-236948 -3955887
 L-239873 -3976385 L-234810 -3976660 L-232824 -3983076 L-237351 -4002086 L-233424 -4030670 L-215106 -4052421 L-206207 -
4053769 L-201463 -4064469 L-176155 -4051289 L-167603 -4032564 L-106546 -4039311 L-103536 -4078133 L-91531 -4066350 L-82
033 -4082011 L-93906 -4102348 L-83886 -4127388 L-65570 -4144678 L-57322 -4146205 L-58754 -4154543 L-36942 -4170051 L-30
509 -4192725 L-10384 -4201149 L-7860 -4208551 L-12110 -4216620 L-3413 -4211387 L17675 -4219675 L10190 -4238309 L16867 -
4239385 L31046 -4222704 L34768 -4230177 L43641 -4231283 L50056 -4219369 L56814 -4217396 L73713 -4243492 L95012 -4253439
 L89990 -4234259 L94375 -4230818 Z"]},"henan":{"id":"henan","name":"娌冲崡鐪?,"bounds":{"left":32572,"right":603139,"bottom
":3340939,"top":3894527},"viewBox":{"x":-168726,"y":-3960957,"width":973164,"height":686449},"paths":["M330327 -3891942
 L353941 -3894527 L355048 -3885693 L360139 -3883491 L384419 -3886798 L404325 -3871815 L432386 -3873841 L435074 -3863237
 L444657 -3870765 L445741 -3877670 L452131 -3883535 L462108 -3881641 L470650 -3870721 L476275 -3878768 L484196 -3879188
 L481530 -3863319 L473694 -3854564 L472786 -3840889 L475663 -3836896 L483680 -3846981 L536426 -3873558 L529113 -3863576
 L485876 -3825967 L469290 -3797930 L449905 -3789965 L445665 -3778505 L433945 -3766471 L431224 -3748578 L439976 -3744498
 L456161 -3749168 L464460 -3744400 L470075 -3737555 L471329 -3730150 L479947 -3730469 L485463 -3726750 L491978 -3705976
 L498346 -3700796 L525964 -3700607 L542037 -3706288 L555337 -3702286 L561413 -3683052 L574576 -3676978 L576626 -3671616
 L587110 -3675856 L592719 -3673679 L593909 -3662488 L591073 -3655747 L603139 -3640014 L601278 -3633905 L587692 -3626891
 L584619 -3618918 L563047 -3609570 L552266 -3617146 L543504 -3640693 L533756 -3642477 L530379 -3637830 L525095 -3645671
 L512563 -3644291 L505184 -3634030 L505568 -3628190 L511188 -3623213 L508439 -3599843 L511188 -3589609 L486476 -3582033
 L484982 -3541041 L469639 -3531653 L459313 -3531681 L452281 -3537385 L449021 -3532789 L452433 -3523966 L449614 -3516459
 L471732 -3510415 L478300 -3505270 L478540 -3477209 L486876 -3470784 L489706 -3469414 L499093 -3474656 L510454 -3460869
 L515132 -3457545 L521889 -3458000 L525574 -3467609 L535627 -3466956 L541889 -3478107 L546216 -3479297 L540394 -3461833
 L549081 -3434433 L550290 -3390585 L535790 -3388625 L514095 -3374810 L502554 -3354173 L502813 -3345360 L496032 -3340939
 L487249 -3344971 L488437 -3359757 L481212 -3365745 L477658 -3365351 L469442 -3349587 L460834 -3351759 L452383 -3346867
 L447282 -3355540 L435336 -3362369 L428096 -3361105 L428865 -3377954 L426445 -3382379 L406812 -3381063 L393149 -3392329
 L384106 -3386919 L381942 -3380039 L369406 -3374872 L370359 -3390738 L360172 -3387942 L346535 -3416314 L351567 -3421580
 L346390 -3451409 L337339 -3449501 L329815 -3435665 L324088 -3434801 L311835 -3436674 L296126 -3450155 L290739 -3444690
 L281768 -3448933 L254691 -3440029 L234627 -3446054 L225149 -3439492 L214059 -3437255 L201891 -3448579 L197345 -3445589
 L150714 -3471080 L143254 -3469572 L132824 -3480524 L136758 -3489127 L121387 -3494603 L111748 -3501844 L113910 -3513138
 L91050 -3535602 L95375 -3550520 L94587 -3572838 L90757 -3579589 L77612 -3584912 L71989 -3599138 L55360 -3608523 L60674
 -3619385 L52690 -3625368 L57501 -3641114 L38712 -3652777 L44528 -3661909 L43310 -3668683 L37379 -3670410 L33674 -36782
04 L33473 -3690499 L56091 -3689369 L71551 -3697853 L83806 -3699738 L105299 -3714821 L138309 -3719009 L149416 -3734556 L
164071 -3745278 L185915 -3742706 L187286 -3770667 L207979 -3765457 L234467 -3765358 L241111 -3768632 L248911 -3762746 L
267503 -3770890 L271049 -3780446 L282259 -3777360 L287982 -3791404 L296844 -3788425 L297159 -3794707 L305761 -3799016 L
312678 -3797933 L323898 -3814013 L320738 -3832273 L327237 -3835715 L325238 -3848954 L330164 -3859212 L330327 -3891942 Z
"]},"shandong":{"id":"shandong","name":"灞变笢鐪?,"bounds":{"left":431224,"right":1101153,"bottom":3696142,"top":4125450},"
viewBox":{"x":350833,"y":-4203779,"width":830712,"height":585966},"paths":["M484196 -3879188 L481284 -3892698 L466410 -
3907818 L465189 -3919859 L470434 -3932903 L494636 -3955331 L510398 -3984559 L519809 -4016232 L542377 -4020171 L539782 -
4028258 L546191 -4041208 L558481 -4036397 L588775 -4075385 L639633 -4084570 L647836 -4100332 L669304 -4116954 L672627 -
4125450 L677379 -4122169 L677042 -4111753 L690666 -4111085 L693847 -4100348 L701067 -4096549 L706688 -4115247 L720016 -
4111380 L729002 -4117608 L727062 -4107677 L736704 -4103606 L741636 -4113234 L755256 -4124020 L759338 -4120495 L756670 -
4110779 L759029 -4107373 L769699 -4116190 L775067 -4098260 L768804 -4085889 L783604 -4079478 L774717 -4061170 L774877 -
4046429 L763858 -4032570 L776150 -4033064 L799632 -4012110 L836678 -4012176 L851528 -4019253 L860918 -4035691 L855974 -
4045490 L880871 -4062248 L901234 -4092362 L917901 -4096775 L925788 -4105106 L942202 -4105632 L953058 -4094367 L962330 -
4095234 L963362 -4085593 L967376 -4081866 L977906 -4083042 L982295 -4088953 L987399 -4087659 L989261 -4085277 L984143 -
4083701 L984436 -4080533 L1000936 -4068004 L1028126 -4075139 L1047314 -4088823 L1051595 -4087345 L1053201 -4075037 L109
7376 -4078762 L1101004 -4075920 L1092026 -4072308 L1089347 -4067062 L1095771 -4050534 L1084573 -4045478 L1078792 -40342
11 L1080531 -4028313 L1093917 -4035545 L1091695 -4022023 L1084133 -4013716 L1074982 -4009035 L1064255 -4009877 L1060587
 -4019735 L1063929 -4032182 L1051197 -4014268 L1047885 -4023101 L1040611 -4027018 L1016905 -3997875 L1016193 -3991249 L
1004961 -3993493 L1014822 -4002574 L1010446 -4003798 L997185 -3985780 L981490 -3980140 L967531 -3968382 L959451 -396773
0 L956224 -3975851 L945490 -3971740 L944492 -3961828 L960283 -3963546 L963017 -3956870 L956362 -3943046 L951782 -395253
3 L940408 -3950469 L935777 -3933864 L942587 -3912793 L909257 -3902096 L914437 -3917487 L909946 -3926312 L898584 -391972
0 L889062 -3920265 L888890 -3908789 L897806 -3902370 L899484 -3892741 L908081 -3897143 L909042 -3892193 L901435 -388284
5 L887488 -3877888 L889501 -3864959 L878920 -3865307 L879160 -3849868 L869241 -3854453 L855395 -3845576 L851111 -381992
0 L838808 -3808817 L836243 -3786561 L831080 -3784412 L827305 -3788214 L813599 -3776937 L791971 -3772791 L781239 -374191
8 L787036 -3739137 L779494 -3735272 L770280 -3737690 L762290 -3734863 L756047 -3701294 L738663 -3697760 L729413 -371692
2 L729592 -3724783 L717953 -3727849 L704159 -3724088 L704014 -3708799 L693452 -3710155 L678595 -3702074 L671325 -370413
2 L661962 -3713845 L656083 -3710278 L653228 -3698198 L649322 -3696142 L643250 -3710901 L636775 -3712825 L639367 -371988
4 L632604 -3731544 L611119 -3751707 L606778 -3745851 L577534 -3739903 L570740 -3726360 L574968 -3716602 L562598 -370983
3 L562412 -3703583 L542037 -3706288 L528610 -3701059 L506256 -3699897 L494930 -3702953 L485463 -3726750 L471329 -373015
0 L464460 -3744400 L456161 -3749168 L439976 -3744498 L431224 -3748578 L433945 -3766471 L445665 -3778505 L449905 -378996
5 L469290 -3797930 L485876 -3825967 L536426 -3873558 L483680 -3846981 L475663 -3836896 L472786 -3840889 L473694 -385456
4 L481530 -3863319 L484196 -3879188 Z"]},"jiangsu":{"id":"jiangsu","name":"姹熻嫃鐪?,"bounds":{"left":570740,"right":110893
7,"bottom":3310867,"top":3788214},"viewBox":{"x":420269,"y":-3845496,"width":839138,"height":591910},"paths":["M574968 
-3716602 L570740 -3726360 L577534 -3739903 L606778 -3745851 L611119 -3751707 L632604 -3731544 L639367 -3719884 L636775 
-3712825 L643250 -3710901 L645757 -3699092 L649322 -3696142 L653228 -3698198 L656083 -3710278 L661962 -3713845 L671325 
-3704132 L678595 -3702074 L693452 -3710155 L704014 -3708799 L704159 -3724088 L717953 -3727849 L729592 -3724783 L729413 
-3716922 L738663 -3697760 L756047 -3701294 L762290 -3734863 L770280 -3737690 L779494 -3735272 L787036 -3739137 L781239 
-3741918 L787489 -3754039 L791971 -3772791 L797327 -3775891 L813599 -3776937 L828465 -3787728 L831080 -3784412 L825012 
-3778152 L825113 -3744424 L833917 -3749537 L849343 -3746058 L851075 -3739110 L865446 -3730003 L928087 -3705386 L935787 
-3683129 L965574 -3622821 L970486 -3601756 L981287 -3591660 L990546 -3569309 L998721 -3564626 L1002809 -3548135 L100091
5 -3541606 L996119 -3542758 L996669 -3538901 L1011483 -3515819 L1013536 -3513002 L1021938 -3513013 L1048680 -3502875 L1
051889 -3497889 L1051441 -3489758 L1055399 -3486533 L1050161 -3483178 L1050534 -3480558 L1094236 -3459439 L1106941 -343
9666 L1108432 -3429836 L1084156 -3433276 L1052182 -3448001 L1029965 -3439424 L1021437 -3432270 L1021679 -3427561 L10441
11 -3416578 L1057600 -3402303 L1045415 -3397057 L1038071 -3383875 L1036435 -3361306 L1022548 -3352860 L1025755 -3343181
 L1007633 -3333840 L1011458 -3321836 L998182 -3321590 L987972 -3310867 L974048 -3324186 L973814 -3329619 L961993 -33261
29 L953077 -3326908 L938863 -3335735 L930796 -3350021 L916923 -3349802 L906951 -3346982 L905227 -3342650 L898949 -33433
63 L881796 -3346409 L877247 -3359000 L868811 -3354457 L859108 -3358068 L852753 -3351158 L842055 -3347693 L824612 -33470
36 L816131 -3356132 L819038 -3362859 L827436 -3365768 L828645 -3392191 L818958 -3398173 L815605 -3389967 L807395 -33899
40 L809001 -3401491 L803542 -3405390 L795735 -3401653 L790770 -3407273 L787219 -3418774 L778124 -3422880 L779396 -34389
35 L788104 -3452505 L801111 -3456806 L802263 -3459880 L802225 -3483776 L794865 -3485674 L791246 -3498019 L816519 -35017
66 L842113 -3487184 L850183 -3503069 L846961 -3527547 L835789 -3530721 L829242 -3543219 L821512 -3543047 L812664 -35407
36 L811651 -3531430 L805862 -3528226 L806262 -3516763 L770910 -3510674 L755782 -3529318 L758056 -3534931 L763525 -35368
09 L757451 -3541983 L750878 -3562724 L747820 -3563880 L746555 -3559941 L736544 -3554624 L726467 -3565619 L742609 -36171
29 L741515 -3624354 L736635 -3625336 L720003 -3619683 L703561 -3621357 L700827 -3623616 L703212 -3637965 L696685 -36390
18 L693152 -3653205 L685231 -3647295 L681404 -3655675 L670453 -3651497 L661230 -3658185 L649974 -3654903 L641559 -36581
98 L634774 -3664381 L637661 -3671144 L630669 -3674385 L629359 -3685403 L624706 -3691211 L611172 -3689675 L592034 -36961
31 L574968 -3716602 Z","M1063636 -3432104 L1058576 -3431020 L1055939 -3439025 L1063636 -3432104 Z"]},"anhui":{"id":"anh
ui","name":"瀹夊窘鐪?,"bounds":{"left":448683,"right":905227,"bottom":3137560,"top":3717299},"viewBox":{"x":167387,"y":-378
6868,"width":1019135,"height":718877},"paths":["M574968 -3716602 L592034 -3696131 L611172 -3689675 L624706 -3691211 L62
9359 -3685403 L630669 -3674385 L637661 -3671144 L634774 -3664381 L641559 -3658198 L649974 -3654903 L661230 -3658185 L67
0453 -3651497 L681404 -3655675 L685231 -3647295 L693152 -3653205 L696685 -3639018 L703212 -3637965 L700827 -3623616 L70
3561 -3621357 L720003 -3619683 L741515 -3624354 L742609 -3617129 L726467 -3565619 L736544 -3554624 L746555 -3559941 L74
7820 -3563880 L750878 -3562724 L757451 -3541983 L763525 -3536809 L758056 -3534931 L755782 -3529318 L770910 -3510674 L80
6262 -3516763 L805862 -3528226 L811651 -3531430 L812664 -3540736 L821512 -3543047 L829242 -3543219 L835789 -3530721 L84
6961 -3527547 L850183 -3503069 L842113 -3487184 L816519 -3501766 L791246 -3498019 L794865 -3485674 L802225 -3483776 L80
2263 -3459880 L801111 -3456806 L788104 -3452505 L779396 -3438935 L778124 -3422880 L787219 -3418774 L795735 -3401653 L80
3542 -3405390 L809001 -3401491 L807395 -3389940 L815605 -3389967 L818958 -3398173 L828645 -3392191 L827436 -3365768 L81
9038 -3362859 L816131 -3356132 L824612 -3347036 L842055 -3347693 L852753 -3351158 L859108 -3358068 L868811 -3354457 L87
7247 -3359000 L881796 -3346409 L905227 -3342650 L904882 -3331547 L901405 -3308869 L891639 -3287695 L885989 -3290874 L87
3659 -3283475 L875323 -3275206 L884263 -3275821 L885924 -3263373 L892279 -3258588 L877779 -3253590 L872122 -3245511 L84
9897 -3250447 L843420 -3248327 L844780 -3232842 L839399 -3228273 L847694 -3206612 L841121 -3195305 L835702 -3194415 L83
2366 -3186851 L833217 -3176662 L828069 -3169738 L816131 -3166705 L799905 -3150356 L794918 -3150380 L788753 -3137560 L77
1452 -3153919 L746902 -3154017 L737468 -3151163 L732140 -3156523 L722710 -3153965 L713291 -3163414 L709828 -3179780 L69
4990 -3178861 L691043 -3187386 L685773 -3189328 L674899 -3178836 L677914 -3173079 L674172 -3162270 L659807 -3156582 L65
4673 -3148516 L650362 -3147480 L645528 -3152979 L638706 -3147927 L634847 -3162765 L642039 -3172924 L652403 -3177013 L65
7232 -3187688 L649864 -3195957 L634749 -3201213 L627766 -3198899 L623218 -3181344 L617043 -3180640 L596266 -3167122 L59
2291 -3171396 L585412 -3170142 L572284 -3216384 L560380 -3224150 L558261 -3231685 L563156 -3237815 L558233 -3243188 L55
7168 -3254927 L547694 -3262739 L544493 -3270263 L552296 -3288133 L572291 -3296831 L572403 -3300997 L560886 -3306633 L55
1848 -3316965 L541525 -3314474 L532268 -3323862 L521422 -3317879 L513078 -3334008 L502417 -3340142 L502554 -3354173 L51
4095 -3374810 L535790 -3388625 L550290 -3390585 L549081 -3434433 L540394 -3461833 L546216 -3479297 L541889 -3478107 L53
5627 -3466956 L525574 -3467609 L521889 -3458000 L515132 -3457545 L510454 -3460869 L499093 -3474656 L489706 -3469414 L48
6876 -3470784 L478540 -3477209 L478300 -3505270 L471732 -3510415 L449614 -3516459 L452433 -3523966 L449021 -3532789 L45
2281 -3537385 L459313 -3531681 L469639 -3531653 L484982 -3541041 L486476 -3582033 L511188 -3589609 L508439 -3599843 L51
1188 -3623213 L505568 -3628190 L505184 -3634030 L512563 -3644291 L525095 -3645671 L530379 -3637830 L533756 -3642477 L54
3504 -3640693 L552266 -3617146 L563047 -3609570 L584619 -3618918 L587692 -3626891 L602610 -3635784 L602586 -3642483 L59
1073 -3655747 L593909 -3662488 L592719 -3673679 L587110 -3675856 L576626 -3671616 L574576 -3676978 L561413 -3683052 L55
6365 -3694346 L555337 -3702286 L562412 -3703583 L562598 -3709833 L574968 -3716602 Z"]},"hubei":{"id":"hubei","name":"婀栧
寳鐪?,"bounds":{"left":-154897,"right":585412,"bottom":3072268,"top":3538243},"viewBox":{"x":-243734,"y":-3629019,"width"
:917983,"height":647526},"paths":["M90668 -3536706 L113910 -3513138 L111748 -3501844 L136758 -3489127 L132824 -3480524 
L143254 -3469572 L150714 -3471080 L197345 -3445589 L201891 -3448579 L214059 -3437255 L234627 -3446054 L254691 -3440029 
L281768 -3448933 L290739 -3444690 L296126 -3450155 L311835 -3436674 L324088 -3434801 L329815 -3435665 L337339 -3449501 
L346390 -3451409 L351567 -3421580 L346535 -3416314 L360172 -3387942 L370359 -3390738 L369406 -3374872 L381942 -3380039 
L390956 -3392279 L406812 -3381063 L426445 -3382379 L428096 -3361105 L435336 -3362369 L448511 -3354513 L453241 -3346762 
L460834 -3351759 L469442 -3349587 L481212 -3365745 L488437 -3359757 L487249 -3344971 L496032 -3340939 L501651 -3343865 
L503463 -3338315 L513078 -3334008 L521422 -3317879 L532268 -3323862 L541525 -3314474 L551848 -3316965 L573026 -3298423 
L552296 -3288133 L544493 -3270263 L557168 -3254927 L558233 -3243188 L563156 -3237815 L558261 -3231685 L560380 -3224150 
L572284 -3216384 L585412 -3170142 L567574 -3159042 L542989 -3171699 L527499 -3169460 L519468 -3152931 L506120 -3143892 
L489651 -3148945 L490977 -3139500 L497454 -3138029 L493311 -3130140 L475056 -3134809 L467016 -3125136 L467321 -3122027 
L472985 -3124149 L470864 -3117175 L456549 -3112661 L447283 -3115397 L431911 -3107214 L412318 -3108671 L407193 -3094988 
L391541 -3090854 L380162 -3072746 L375246 -3072268 L366438 -3080210 L361899 -3075713 L355944 -3076869 L350349 -3085557 
L353892 -3092216 L346194 -3093836 L351724 -3111218 L358626 -3113299 L361184 -3122670 L354370 -3126146 L357491 -3133594 
L351749 -3140199 L339179 -3143743 L339570 -3160093 L325618 -3147844 L301520 -3114983 L290810 -3121555 L282047 -3118634 
L276205 -3152956 L256260 -3130921 L234481 -3133931 L219413 -3118990 L215357 -3135344 L197794 -3139132 L195569 -3149226 
L170112 -3164067 L159115 -3160915 L142505 -3165531 L133659 -3163484 L120855 -3176402 L89311 -3180716 L86061 -3186858 L7
2734 -3187827 L67884 -3178031 L61934 -3182387 L47852 -3180306 L52179 -3173979 L47935 -3161705 L59985 -3149403 L54791 -3
141155 L35904 -3130874 L27265 -3134921 L16725 -3148989 L-17914 -3145585 L-28867 -3129511 L-44999 -3130823 L-57169 -3116
105 L-60530 -3098540 L-71255 -3080056 L-74618 -3076963 L-82387 -3079977 L-89194 -3105153 L-105131 -3100067 L-108622 -31
30828 L-125365 -3138952 L-130947 -3157601 L-135221 -3156735 L-143775 -3141155 L-149423 -3143427 L-153905 -3152991 L-153
867 -3158599 L-140895 -3162293 L-138476 -3202483 L-151323 -3215304 L-147661 -3230248 L-134642 -3224447 L-126605 -323955
2 L-121322 -3237994 L-120257 -3232183 L-111286 -3233712 L-89245 -3248686 L-82525 -3247617 L-85119 -3239664 L-80684 -323
4791 L-64059 -3247194 L-59696 -3230228 L-45044 -3248918 L-37594 -3247829 L-31983 -3258810 L-11652 -3274042 L3460 -32731
18 L9192 -3265766 L14112 -3276821 L12174 -3293937 L18937 -3303518 L12848 -3329503 L3989 -3332646 L-2677 -3344505 L-2291
7 -3344912 L-25461 -3362268 L-38229 -3365993 L-38604 -3420900 L-48549 -3426489 L-49613 -3438314 L-40301 -3452049 L-4311
7 -3458861 L-12923 -3463583 L3724 -3458837 L7758 -3465621 L16376 -3467548 L12023 -3487882 L-9739 -3498967 L-19333 -3496
229 L-20369 -3516321 L-50296 -3528359 L-45938 -3534880 L-33955 -3538243 L14097 -3532727 L28601 -3526831 L43193 -3528459
 L50010 -3538107 L54052 -3528886 L64073 -3523494 L90668 -3536706 Z"]},"sichuan":{"id":"sichuan","name":"鍥涘窛鐪?,"bounds":
{"left":-1161673,"right":-134305,"bottom":2765190,"top":3717971},"viewBox":{"x":-1485445,"y":-3832304,"width":1674913,"
height":1181448},"paths":["M-749434 -3598302 L-743504 -3609361 L-736354 -3590881 L-752151 -3569142 L-746432 -3562316 L-
748611 -3554345 L-713884 -3561609 L-712891 -3576530 L-690443 -3587013 L-689068 -3596941 L-698691 -3607327 L-705717 -363
6196 L-714576 -3645360 L-710452 -3649332 L-690844 -3645841 L-681965 -3661169 L-667157 -3656340 L-670606 -3667875 L-6509
83 -3680339 L-638420 -3680045 L-633729 -3666175 L-622994 -3663755 L-618769 -3654327 L-621747 -3622017 L-602004 -3614354
 L-590057 -3621150 L-589472 -3607466 L-580467 -3610840 L-534034 -3597094 L-526920 -3571565 L-510225 -3561865 L-518397 -
3559475 L-514482 -3539204 L-519523 -3534316 L-511139 -3527298 L-525134 -3512514 L-511787 -3498190 L-469856 -3478325 L-4
57007 -3482294 L-448972 -3475759 L-418239 -3492043 L-425195 -3504655 L-418758 -3512606 L-404464 -3486224 L-361818 -3503
916 L-359143 -3486813 L-332031 -3472780 L-301406 -3487577 L-271665 -3482455 L-271679 -3456124 L-253969 -3446918 L-24333
4 -3460674 L-237712 -3459777 L-235573 -3447864 L-217205 -3443862 L-189531 -3416837 L-163860 -3429401 L-140431 -3429985 
L-136563 -3423038 L-150992 -3418910 L-145925 -3406475 L-152503 -3406508 L-150725 -3396653 L-161343 -3398315 L-154271 -3
384433 L-136226 -3373148 L-134305 -3360036 L-154636 -3345868 L-168216 -3344168 L-171603 -3326909 L-188339 -3311118 L-18
0731 -3308642 L-195193 -3284535 L-190563 -3275256 L-199491 -3265878 L-206348 -3263639 L-215179 -3274277 L-231554 -32732
38 L-238273 -3259864 L-236114 -3244693 L-278189 -3182854 L-311953 -3183149 L-327372 -3214777 L-355782 -3202405 L-377143
 -3219261 L-398703 -3225622 L-418597 -3199745 L-418560 -3192935 L-399337 -3182400 L-408662 -3164586 L-418740 -3163907 L
-424527 -3153760 L-452010 -3137184 L-449886 -3127907 L-438234 -3116491 L-436540 -3104503 L-413277 -3105112 L-411894 -30
67457 L-392161 -3066750 L-362730 -3052870 L-348763 -3009020 L-356088 -3008574 L-388871 -3039893 L-399982 -3023437 L-417
969 -3023091 L-424449 -3010931 L-421924 -2991597 L-407626 -2991856 L-401877 -2973522 L-394213 -2969390 L-370889 -297101
8 L-357629 -2948991 L-361587 -2935410 L-373852 -2928588 L-382665 -2932661 L-427624 -2920621 L-439273 -2932475 L-460351 
-2928081 L-465391 -2944628 L-460665 -2956238 L-481463 -2971197 L-500957 -2950156 L-529615 -2945137 L-554960 -2969140 L-
539726 -2981516 L-545429 -2984458 L-540672 -2991591 L-546768 -3000341 L-557433 -3001957 L-557271 -3022963 L-540266 -303
4128 L-557290 -3038173 L-585561 -3034513 L-595427 -3041670 L-602529 -3026344 L-596087 -3001284 L-611914 -2990527 L-6226
02 -2996016 L-637441 -2983393 L-639367 -2972479 L-628022 -2965967 L-636132 -2946857 L-657994 -2929714 L-674654 -2905838
 L-694396 -2906658 L-698427 -2897073 L-702634 -2864247 L-692854 -2826704 L-697274 -2789516 L-708129 -2790874 L-728327 -
2775999 L-735468 -2781631 L-732899 -2790709 L-740335 -2793696 L-786538 -2766263 L-811288 -2765190 L-819567 -2782592 L-8
33322 -2784898 L-836574 -2793362 L-827659 -2797392 L-833526 -2809322 L-853588 -2823256 L-838702 -2846263 L-853136 -2845
904 L-848529 -2859578 L-869464 -2881464 L-869550 -2896318 L-878327 -2901226 L-894796 -2938713 L-890894 -2946625 L-90136
6 -2954985 L-909099 -2980970 L-922348 -2972008 L-931892 -2978913 L-946118 -2963326 L-947176 -2978737 L-959226 -2986918 
L-968126 -3013610 L-955273 -3020602 L-953147 -3033291 L-964056 -3039158 L-972612 -3062219 L-991172 -3079214 L-990034 -3
093115 L-1000406 -3090326 L-1011234 -3071485 L-1024662 -3062980 L-1030039 -3018903 L-1047808 -3047965 L-1050515 -309177
1 L-1045526 -3144480 L-1051274 -3194527 L-1041413 -3221355 L-1046729 -3290787 L-1040718 -3314523 L-1055599 -3331743 L-1
052521 -3343728 L-1068690 -3366859 L-1064091 -3383586 L-1052557 -3374134 L-1040616 -3386206 L-1077773 -3442620 L-107522
9 -3460571 L-1092754 -3503201 L-1158287 -3553154 L-1161673 -3573982 L-1157040 -3580853 L-1145543 -3580444 L-1141353 -35
89222 L-1147917 -3599142 L-1127051 -3622241 L-1117670 -3625081 L-1144676 -3648914 L-1146780 -3674485 L-1142950 -3683004
 L-1119001 -3684049 L-1113614 -3706129 L-1098435 -3717971 L-1083236 -3702193 L-1049744 -3693871 L-1048707 -3671216 L-10
26754 -3623772 L-1020855 -3584450 L-990967 -3567237 L-984955 -3550157 L-965623 -3544888 L-946105 -3526716 L-936340 -355
1993 L-926830 -3560500 L-909112 -3537735 L-912221 -3516343 L-903884 -3510182 L-896624 -3523648 L-884135 -3522336 L-8736
67 -3504032 L-861953 -3497105 L-855960 -3505136 L-857928 -3513645 L-835751 -3503005 L-825948 -3509469 L-812507 -3509128
 L-806419 -3525818 L-815915 -3535819 L-815047 -3544518 L-806639 -3547701 L-815124 -3569577 L-799958 -3576574 L-789245 -
3560195 L-786105 -3569184 L-779095 -3568760 L-765577 -3554047 L-756144 -3570843 L-763231 -3576861 L-761640 -3585690 L-7
49725 -3590988 L-749434 -3598302 Z"]},"chongqing":{"id":"chongqing","name":"閲嶅簡甯?,"bounds":{"left":-452010,"right":1893
7,"bottom":2966193,"top":3423038},"viewBox":{"x":-618085,"y":-3477859,"width":803096,"height":566487},"paths":["M-13656
3 -3423038 L-126209 -3411358 L-116607 -3409828 L-91298 -3395761 L-65584 -3375900 L-67482 -3370417 L-64274 -3365218 L-39
026 -3367872 L-26964 -3363797 L-22917 -3344912 L-2677 -3344505 L3989 -3332646 L12848 -3329503 L18937 -3303518 L12174 -3
293937 L14112 -3276821 L9192 -3265766 L5269 -3267655 L3460 -3273118 L-11652 -3274042 L-31983 -3258810 L-37594 -3247829 
L-45044 -3248918 L-59696 -3230228 L-61932 -3233011 L-60114 -3239010 L-64059 -3247194 L-80684 -3234791 L-85119 -3239664 
L-82525 -3247617 L-89245 -3248686 L-94758 -3247529 L-111286 -3233712 L-120257 -3232183 L-121322 -3237994 L-126605 -3239
552 L-134642 -3224447 L-146021 -3230802 L-148533 -3227543 L-151323 -3215304 L-138476 -3202483 L-141282 -3160728 L-15171
7 -3159790 L-154897 -3156919 L-149423 -3143427 L-141799 -3142177 L-139803 -3150473 L-135221 -3156735 L-130947 -3157601 
L-125365 -3138952 L-108622 -3130828 L-106531 -3121776 L-108448 -3112160 L-105131 -3100067 L-89194 -3105153 L-84013 -309
1188 L-84308 -3081739 L-74618 -3076963 L-66600 -3065561 L-74429 -3046149 L-71926 -3035222 L-67606 -3030113 L-78105 -301
8565 L-75834 -3016487 L-68111 -3017469 L-65552 -3014382 L-68945 -3012491 L-71639 -3003242 L-81434 -2995612 L-86907 -296
9243 L-100794 -2966193 L-106811 -2972221 L-122325 -2971999 L-124356 -2980331 L-118266 -2990291 L-120863 -3000173 L-1274
84 -3005003 L-132014 -3000021 L-129999 -2986767 L-137845 -2987934 L-138510 -3005370 L-134789 -3020514 L-138582 -3022779
 L-149911 -3020457 L-158771 -3024130 L-156425 -3037184 L-162879 -3070111 L-170664 -3065549 L-187239 -3071882 L-200033 -
3065912 L-203650 -3060354 L-207072 -3060536 L-210676 -3062187 L-212283 -3078238 L-215504 -3083037 L-218741 -3084224 L-2
23939 -3078816 L-230074 -3081525 L-232175 -3086858 L-242392 -3083631 L-246724 -3084946 L-254158 -3072772 L-248012 -3055
707 L-264779 -3039765 L-268308 -3039684 L-270091 -3046758 L-289186 -3047982 L-292195 -3039077 L-297957 -3040589 L-30989
9 -3038201 L-303882 -3028037 L-307228 -3019627 L-312752 -3021919 L-316852 -3020278 L-319664 -3005306 L-331834 -3008875 
L-325669 -3027214 L-341305 -3050000 L-337156 -3025102 L-334347 -3020535 L-339690 -3014909 L-344791 -3017340 L-349100 -3
013780 L-355467 -3025128 L-362730 -3052870 L-367633 -3057073 L-392161 -3066750 L-403591 -3063714 L-411894 -3067457 L-41
0495 -3085519 L-413277 -3105112 L-416263 -3106369 L-424925 -3103318 L-437568 -3105154 L-438234 -3116491 L-448008 -31238
69 L-452010 -3137184 L-444984 -3143599 L-424527 -3153760 L-418740 -3163907 L-409853 -3163761 L-407409 -3166131 L-399386
 -3183255 L-409407 -3186682 L-419707 -3196234 L-406493 -3209584 L-406646 -3217785 L-400899 -3225145 L-377143 -3219261 L
-355782 -3202405 L-327372 -3214777 L-311953 -3183149 L-305072 -3180105 L-283455 -3180417 L-278189 -3182854 L-236114 -32
44693 L-234694 -3250109 L-238273 -3259864 L-231554 -3273238 L-215179 -3274277 L-206348 -3263639 L-199491 -3265878 L-190
563 -3275256 L-194747 -3278370 L-195193 -3284535 L-180731 -3308642 L-188339 -3311118 L-171603 -3326909 L-168216 -334416
8 L-163888 -3346633 L-154636 -3345868 L-143876 -3356633 L-134305 -3360036 L-136226 -3373148 L-141938 -3373702 L-154271 
-3384433 L-161343 -3398315 L-159254 -3400959 L-151150 -3396098 L-152503 -3406508 L-145925 -3406475 L-146982 -3414871 L-
150992 -3418910 L-136563 -3423038 Z"]},"hunan":{"id":"hunan","name":"婀栧崡鐪?,"bounds":{"left":-121706,"right":421920,"bot
tom":2575984,"top":3187827},"viewBox":{"x":-387679,"y":-3261249,"width":1075572,"height":758686},"paths":["M-74618 -307
6963 L-60530 -3098540 L-61280 -3107232 L-57169 -3116105 L-48310 -3127408 L-43423 -3131991 L-34144 -3128127 L-28867 -312
9511 L-17914 -3145585 L16725 -3148989 L24115 -3143153 L27265 -3134921 L35904 -3130874 L54791 -3141155 L59985 -3149403 L
47935 -3161705 L47027 -3166767 L52179 -3173979 L47852 -3180306 L61934 -3182387 L67884 -3178031 L71951 -3180477 L72734 -
3187827 L86061 -3186858 L89311 -3180716 L120855 -3176402 L133659 -3163484 L142505 -3165531 L149039 -3161297 L159115 -31
60915 L170112 -3164067 L195569 -3149226 L197794 -3139132 L215357 -3135344 L219849 -3128210 L219413 -3118990 L234481 -31
33931 L256260 -3130921 L276205 -3152956 L282047 -3118634 L290810 -3121555 L301520 -3114983 L325618 -3147844 L339570 -31
60093 L339179 -3143743 L351749 -3140199 L357491 -3133594 L354370 -3126146 L361184 -3122670 L358626 -3113299 L351724 -31
11218 L346194 -3093836 L353892 -3092216 L350349 -3085557 L355944 -3076869 L361899 -3075713 L366438 -3080210 L370599 -30
74557 L380162 -3072746 L380724 -3059991 L387706 -3061700 L392326 -3051163 L402387 -3051153 L397953 -3019935 L410665 -30
10118 L414561 -2997471 L402454 -2981691 L387265 -2974128 L392577 -2962173 L368305 -2950429 L364839 -2942970 L366435 -29
33908 L353726 -2913879 L351746 -2902584 L357389 -2882064 L365804 -2880552 L381276 -2884194 L372345 -2855563 L378742 -28
53593 L387824 -2837553 L380809 -2822459 L382490 -2807548 L405938 -2796843 L403455 -2768447 L392506 -2756853 L392911 -27
52722 L416997 -2757323 L421920 -2753121 L407871 -2746148 L401319 -2734154 L402893 -2723097 L393096 -2702709 L399819 -26
84573 L396640 -2672257 L391278 -2670507 L384027 -2658603 L373351 -2660042 L362966 -2656879 L340173 -2664899 L328890 -26
77366 L316425 -2673607 L310409 -2661639 L304312 -2658673 L295605 -2655160 L288097 -2658391 L289947 -2646270 L298306 -26
46699 L304549 -2641853 L300282 -2634966 L304374 -2616383 L301667 -2609556 L280632 -2607029 L268010 -2632382 L255601 -26
33640 L246757 -2639366 L241707 -2633897 L236085 -2640063 L219152 -2638736 L214922 -2613772 L219364 -2607488 L217753 -25
96230 L211545 -2595925 L204061 -2587713 L171595 -2590862 L165016 -2581160 L156200 -2575984 L144779 -2580279 L148985 -25
92388 L145463 -2611615 L148062 -2617568 L141148 -2630568 L127134 -2630068 L112256 -2619177 L108491 -2607950 L101689 -26
05110 L95734 -2620908 L100035 -2631060 L110084 -2638474 L112265 -2646564 L127852 -2663467 L132611 -2679283 L130934 -269
5035 L141780 -2701429 L148711 -2711059 L146169 -2714010 L133852 -2714337 L126784 -2709729 L119980 -2722223 L127196 -273
6101 L127238 -2754944 L116531 -2755286 L115748 -2761293 L95153 -2768890 L91899 -2754802 L75156 -2753780 L72476 -2759712
 L61204 -2762229 L55024 -2757887 L50646 -2746036 L38582 -2738903 L32400 -2723541 L26787 -2721870 L19739 -2733676 L15230
 -2727693 L6896 -2729773 L6613 -2745438 L-6451 -2746947 L-13746 -2729027 L-19100 -2730314 L-21653 -2727263 L-19195 -271
8050 L-21823 -2712642 L-32652 -2713435 L-29828 -2725192 L-36762 -2731068 L-52663 -2728481 L-50162 -2739952 L-55240 -275
0944 L-51422 -2762450 L-66203 -2754594 L-73055 -2761894 L-59308 -2789235 L-70764 -2805884 L-46960 -2811945 L-46317 -282
3478 L-54552 -2822754 L-55863 -2825424 L-44629 -2830148 L-48254 -2843469 L-53715 -2850467 L-75067 -2854719 L-81471 -284
6262 L-87404 -2845628 L-85754 -2851947 L-91144 -2852124 L-110369 -2838560 L-121706 -2845818 L-93064 -2865912 L-84510 -2
886074 L-78190 -2887141 L-69987 -2883277 L-66983 -2890962 L-54200 -2899478 L-56725 -2913394 L-65135 -2919826 L-69389 -2
951143 L-59919 -2977720 L-68709 -2977000 L-72444 -2981844 L-70650 -3008771 L-65686 -3015289 L-78105 -3018565 L-67606 -3
030113 L-74429 -3046149 L-66109 -3063494 L-74618 -3076963 Z"]},"jiangxi":{"id":"jiangxi","name":"姹熻タ鐪?,"bounds":{"left"
:351746,"right":820821,"bottom":2568339,"top":3201359},"viewBox":{"x":29884,"y":-3277322,"width":1112799,"height":78494
5},"paths":["M788753 -3137560 L784674 -3126326 L775485 -3124195 L771705 -3116096 L772414 -3105977 L781162 -3092677 L790
172 -3088816 L790361 -3082327 L796003 -3083593 L808878 -3070332 L813810 -3058455 L820821 -3023679 L816548 -3014363 L808
486 -3008780 L812935 -2995471 L794685 -2987153 L788527 -2977101 L777266 -2977752 L763684 -2970137 L757496 -2964003 L756
914 -2956767 L745003 -2961141 L734212 -2973989 L711614 -2959955 L711874 -2950652 L701435 -2932852 L686675 -2930123 L687
258 -2923280 L693634 -2921976 L698250 -2913070 L698065 -2902599 L704392 -2893813 L687428 -2867630 L657027 -2855902 L646
114 -2841080 L644405 -2822762 L656774 -2800298 L655937 -2791146 L646956 -2790756 L638773 -2778382 L637029 -2764988 L644
939 -2765370 L643245 -2757176 L628728 -2738100 L612029 -2731623 L617623 -2717878 L612199 -2719137 L607067 -2709096 L602
962 -2668474 L589728 -2655264 L589703 -2649561 L596341 -2640342 L591470 -2633835 L592414 -2624274 L585701 -2617151 L581
016 -2602607 L591006 -2583734 L577569 -2581075 L562411 -2591248 L553832 -2603462 L546395 -2606063 L498533 -2588288 L492
819 -2578929 L482783 -2582412 L478379 -2574975 L458824 -2574348 L446978 -2568787 L422657 -2587133 L438427 -2597911 L444
401 -2619495 L475722 -2643015 L471140 -2647060 L474843 -2656581 L454528 -2671906 L439266 -2660649 L414362 -2658697 L405
104 -2653671 L405946 -2663023 L396640 -2672257 L399819 -2684573 L393096 -2702709 L402893 -2723097 L401319 -2734154 L406
301 -2743956 L421920 -2753121 L416997 -2757323 L392911 -2752722 L392506 -2756853 L403455 -2768447 L405938 -2796843 L382
490 -2807548 L380809 -2822459 L387824 -2837553 L378742 -2853593 L372345 -2855563 L381276 -2884194 L357389 -2882064 L351
746 -2902584 L353726 -2913879 L366435 -2933908 L364839 -2942970 L368305 -2950429 L392577 -2962173 L387265 -2974128 L402
454 -2981691 L414561 -2997471 L410665 -3010118 L397953 -3019935 L402387 -3051153 L392326 -3051163 L387706 -3061700 L380
724 -3059991 L380342 -3075980 L391541 -3090854 L407193 -3094988 L412318 -3108671 L431911 -3107214 L447283 -3115397 L456
549 -3112661 L470864 -3117175 L472985 -3124149 L467321 -3122027 L467016 -3125136 L475056 -3134809 L493311 -3130140 L497
454 -3138029 L490977 -3139500 L489651 -3148945 L502493 -3147747 L506120 -3143892 L519468 -3152931 L527499 -3169460 L542
989 -3171699 L551996 -3164397 L567574 -3159042 L585412 -3170142 L592291 -3171396 L596266 -3167122 L623218 -3181344 L625
745 -3195379 L630675 -3201359 L641478 -3199961 L656962 -3190148 L652403 -3177013 L642039 -3172924 L634847 -3162765 L638
706 -3147927 L645528 -3152979 L650362 -3147480 L654673 -3148516 L659807 -3156582 L674172 -3162270 L677914 -3173079 L674
899 -3178836 L685773 -3189328 L691043 -3187386 L694990 -3178861 L709828 -3179780 L713291 -3163414 L722710 -3153965 L732
140 -3156523 L737468 -3151163 L771452 -3153919 L788753 -3137560 Z"]},"zhejiang":{"id":"zhejiang","name":"娴欐睙鐪?,"bounds"
:{"left":771679,"right":1155410,"bottom":2907626,"top":3350021},"viewBox":{"x":574697,"y":-3403109,"width":777695,"heig
ht":548570},"paths":["M905227 -3342650 L906951 -3346982 L914394 -3349140 L930796 -3350021 L938863 -3335735 L953077 -332
6908 L961993 -3326129 L973814 -3329619 L974048 -3324186 L981725 -3319205 L987972 -3310867 L998182 -3321590 L1011458 -33
21836 L1007633 -3333840 L1028193 -3344339 L1032785 -3343528 L1034429 -3331938 L1039801 -3321107 L1050213 -3324194 L1053
360 -3317505 L1060999 -3310265 L1037801 -3291168 L1034555 -3283592 L1036894 -3278253 L1033433 -3271317 L1022214 -326576
4 L1009410 -3271617 L988444 -3268534 L985348 -3266931 L985812 -3259542 L990649 -3264565 L1004530 -3265588 L1012393 -324
7907 L1011736 -3241820 L1025536 -3242094 L1060005 -3266695 L1072129 -3268217 L1089380 -3258022 L1111921 -3233705 L11203
47 -3235390 L1136776 -3227950 L1152439 -3232175 L1155386 -3230686 L1139160 -3218404 L1118826 -3190471 L1110188 -3185976
 L1099239 -3184729 L1093297 -3177262 L1094701 -3171476 L1100947 -3167351 L1108942 -3179953 L1120779 -3186470 L1136716 -
3200248 L1145699 -3195819 L1141379 -3190980 L1140553 -3185103 L1147175 -3180139 L1140128 -3170051 L1143406 -3160930 L11
49285 -3159554 L1146170 -3152806 L1139943 -3147522 L1135301 -3148250 L1133896 -3164575 L1130420 -3169303 L1127909 -3166
878 L1129988 -3153620 L1127652 -3148331 L1122317 -3146146 L1116718 -3147180 L1112691 -3155046 L1107296 -3156698 L110591
2 -3144770 L1096988 -3141521 L1102463 -3135097 L1117813 -3138007 L1126458 -3127220 L1129672 -3120242 L1125495 -3116348 
L1122060 -3115376 L1112292 -3119243 L1109955 -3117153 L1111411 -3114351 L1126539 -3110295 L1124071 -3097362 L1112912 -3
091385 L1091474 -3092260 L1094901 -3088275 L1111389 -3085897 L1121987 -3067120 L1124379 -3054560 L1131119 -3053193 L113
0661 -3049438 L1125367 -3041851 L1120866 -3050044 L1108141 -3047843 L1107417 -3032812 L1102871 -3027749 L1096607 -30342
33 L1087454 -3051455 L1084209 -3052606 L1081307 -3047615 L1078278 -3028086 L1070483 -3021230 L1068739 -3006131 L1040920
 -3008402 L1055759 -3001443 L1059704 -2994931 L1043036 -2962932 L1036778 -2955840 L1038947 -2950188 L1045403 -2947747 L
1046854 -2944844 L1043132 -2933816 L1035912 -2935926 L1032077 -2932925 L1036848 -2921890 L1032045 -2907800 L1027194 -29
08471 L1023750 -2912743 L1023111 -2920617 L1016867 -2926142 L1013211 -2933928 L1002565 -2935862 L992333 -2932467 L98697
9 -2925867 L979162 -2927805 L972860 -2920339 L961182 -2917537 L940102 -2956548 L931065 -2954537 L926188 -2938466 L91836
7 -2940046 L914647 -2932208 L904793 -2925447 L896803 -2926454 L893848 -2931217 L880618 -2932434 L877439 -2929784 L87178
9 -2929858 L868593 -2935729 L871479 -2944510 L866284 -2954169 L869229 -2959044 L849954 -2985220 L850595 -2994366 L85784
9 -3003399 L856916 -3014729 L844157 -3021531 L839015 -3012724 L829415 -3014641 L824709 -3009047 L817988 -3012298 L81654
8 -3014363 L820821 -3023679 L814229 -3045166 L813810 -3058455 L808878 -3070332 L796003 -3083593 L790361 -3082327 L79017
2 -3088816 L781162 -3092677 L772414 -3105977 L771705 -3116096 L775485 -3124195 L784674 -3126326 L794918 -3150380 L79990
5 -3150356 L816131 -3166705 L828069 -3169738 L833217 -3176662 L834477 -3181450 L832366 -3186851 L835702 -3194415 L84112
1 -3195305 L847694 -3206612 L839399 -3228273 L844780 -3232842 L843420 -3248327 L849897 -3250447 L865106 -3248690 L87212
2 -3245511 L877779 -3253590 L892279 -3258588 L885924 -3263373 L884263 -3275821 L875323 -3275206 L873659 -3283475 L88598
9 -3290874 L890748 -3286763 L894900 -3293137 L901405 -3308869 L905227 -3342650 Z","M1141989 -3257520 L1148746 -3260010 
L1172033 -3248442 L1171793 -3239106 L1156795 -3242613 L1144001 -3240833 L1132895 -3260194 L1141989 -3257520 Z","M109563
5 -3021030 L1098040 -3020823 L1096805 -3016854 L1085552 -3012193 L1081326 -3022126 L1086560 -3026253 L1087847 -3031469 
L1091218 -3032540 L1094870 -3030229 L1093505 -3025567 L1095635 -3021030 Z"]},"shanghai":{"id":"shanghai","name":"涓婃捣甯?,
"bounds":{"left":1022374,"right":1119415,"bottom":3310265,"top":3402303},"viewBox":{"x":989997,"y":-3413347,"width":161
794,"height":114126},"paths":["M1025755 -3343181 L1022548 -3352860 L1024641 -3355485 L1032521 -3357074 L1036435 -336130
6 L1038071 -3383875 L1045415 -3397057 L1057600 -3402303 L1092738 -3384328 L1097206 -3380824 L1118347 -3349566 L1119415 
-3342916 L1118905 -3337835 L1117360 -3335972 L1107154 -3333038 L1091752 -3330997 L1082936 -3327982 L1077633 -3324546 L1
071523 -3315413 L1060999 -3310265 L1053360 -3317505 L1052036 -3323177 L1050213 -3324194 L1044086 -3323574 L1039801 -332
1107 L1034429 -3331938 L1033483 -3342633 L1031298 -3344132 L1025755 -3343181 Z","M1063636 -3432104 L1077196 -3426125 L1
084113 -3421386 L1109281 -3413210 L1110006 -3407641 L1106820 -3403220 L1104772 -3402735 L1083382 -3407283 L1069361 -341
3774 L1060067 -3415928 L1049409 -3424610 L1046237 -3431314 L1042674 -3433237 L1039186 -3432068 L1046276 -3438635 L10509
51 -3439920 L1055939 -3439025 L1058576 -3431020 L1063636 -3432104 Z"]},"fujian":{"id":"fujian","name":"绂忓缓鐪?,"bounds":{
"left":589488,"right":1026850,"bottom":2484360,"top":3021531},"viewBox":{"x":336017,"y":-3085992,"width":944304,"height
":666092},"paths":["M816548 -3014363 L822913 -3009026 L829415 -3014641 L839015 -3012724 L844157 -3021531 L856916 -30147
29 L857849 -3003399 L850595 -2994366 L849954 -2985220 L869229 -2959044 L866284 -2954169 L871479 -2944510 L868593 -29357
29 L871789 -2929858 L880618 -2932434 L893848 -2931217 L896803 -2926454 L904793 -2925447 L914647 -2932208 L918367 -29400
46 L926188 -2938466 L931065 -2954537 L940102 -2956548 L961182 -2917537 L972860 -2920339 L979162 -2927805 L986979 -29258
67 L992333 -2932467 L1002565 -2935862 L1013211 -2933928 L1023111 -2920617 L1026850 -2908824 L1013652 -2922845 L1007057 
-2923755 L1000615 -2919532 L1000622 -2911421 L1019370 -2913413 L1023329 -2900074 L1008435 -2902065 L1011408 -2891992 L1
009414 -2881305 L997152 -2878643 L989951 -2870054 L1003056 -2861630 L1001483 -2848321 L992897 -2842257 L985684 -2841162
 L981264 -2831996 L974745 -2830774 L974843 -2839671 L986149 -2846260 L993828 -2864715 L980856 -2862347 L976353 -2846741
 L970691 -2848847 L967366 -2854654 L967416 -2858686 L973417 -2862818 L971006 -2869319 L965728 -2866169 L961505 -2850278
 L957818 -2850595 L949926 -2859575 L943885 -2852146 L942969 -2843810 L946939 -2838772 L957635 -2841162 L968024 -2838718
 L974297 -2825039 L968430 -2818874 L956353 -2826839 L949604 -2825313 L948004 -2820115 L956555 -2810849 L966187 -2807177
 L976601 -2820599 L988393 -2815293 L980532 -2806976 L956897 -2801767 L955802 -2797979 L960945 -2797184 L947205 -2779344
 L968099 -2773010 L966735 -2764704 L960778 -2761615 L957886 -2754560 L962089 -2746072 L961560 -2740487 L950534 -2737991
 L944973 -2730980 L952030 -2721847 L960511 -2726232 L967028 -2712318 L968263 -2699610 L962527 -2699724 L962054 -2709618
 L959265 -2711496 L958540 -2704682 L952777 -2700749 L952928 -2711042 L937367 -2725926 L933330 -2726682 L937046 -2717917
 L935859 -2705850 L931211 -2708274 L930871 -2722556 L926469 -2712222 L918402 -2706839 L916279 -2699588 L920925 -2696060
 L924827 -2686522 L931150 -2694856 L941161 -2689383 L940684 -2686414 L931713 -2677031 L916744 -2683769 L914241 -2677463
 L921241 -2673378 L914923 -2669456 L907745 -2671833 L912325 -2677836 L910834 -2687855 L902286 -2688315 L893850 -2683842
 L901004 -2678495 L903191 -2672798 L892417 -2663202 L898585 -2656012 L907209 -2660902 L909620 -2649960 L900193 -2650910
 L899084 -2646687 L905542 -2642701 L892292 -2642072 L881645 -2636152 L877745 -2639309 L882675 -2645003 L872082 -2650706
 L871956 -2632795 L887767 -2626466 L874072 -2601854 L869231 -2600393 L858633 -2609423 L853602 -2621213 L852527 -2607319
 L839663 -2605173 L834398 -2598356 L829631 -2602102 L834199 -2605320 L833599 -2609410 L825028 -2615263 L821753 -2602801
 L823870 -2597147 L830304 -2594947 L827065 -2585319 L820751 -2585319 L822201 -2593094 L817926 -2599814 L813672 -2597637
 L815219 -2586615 L789343 -2589400 L789134 -2585752 L801875 -2577530 L807046 -2581949 L817985 -2581395 L825992 -2568585
 L812558 -2554202 L810991 -2559579 L807936 -2560062 L805449 -2541305 L797545 -2536575 L792125 -2524361 L789802 -2526623
 L794124 -2539284 L790001 -2540355 L785031 -2536911 L778807 -2517898 L780748 -2508776 L776320 -2502881 L774109 -2521046
 L754788 -2525708 L753819 -2523421 L763146 -2521968 L765750 -2518924 L758902 -2504656 L770744 -2503760 L759879 -2492781
 L762077 -2485060 L752800 -2484529 L750357 -2486540 L757857 -2495232 L750928 -2497671 L755488 -2509318 L747067 -2507722
 L743822 -2503957 L745516 -2490786 L743180 -2487341 L739269 -2495376 L733721 -2488713 L722676 -2493862 L717320 -2505889
 L708849 -2514964 L713027 -2527510 L709294 -2535655 L713860 -2549692 L697949 -2581700 L689974 -2587868 L692205 -2601758
 L685590 -2602380 L660348 -2594247 L645306 -2620894 L631479 -2611499 L624328 -2621340 L615299 -2617197 L592414 -2624274
 L591470 -2633835 L596341 -2640342 L589703 -2649561 L589728 -2655264 L602962 -2668474 L607067 -2709096 L612199 -2719137
 L617623 -2717878 L612029 -2731623 L628728 -2738100 L643245 -2757176 L644939 -2765370 L637029 -2764988 L638773 -2778382
 L646956 -2790756 L655937 -2791146 L656774 -2800298 L644405 -2822762 L646114 -2841080 L657027 -2855902 L687428 -2867630
 L704392 -2893813 L698065 -2902599 L698250 -2913070 L693634 -2921976 L687258 -2923280 L686675 -2930123 L701435 -2932852
 L711874 -2950652 L711614 -2959955 L719572 -2962381 L734212 -2973989 L745003 -2961141 L754335 -2956561 L757741 -2957365
 L757496 -2964003 L762412 -2969166 L773241 -2976226 L788527 -2977101 L794685 -2987153 L812935 -2995471 L812493 -3003014
 L808486 -3008780 L816548 -3014363 Z","M979316 -2730463 L989803 -2725761 L982902 -2722398 L982658 -2718202 L988634 -271
5189 L979670 -2711876 L978820 -2706114 L969946 -2715233 L974175 -2720077 L974750 -2727262 L969113 -2727254 L977678 -273
6167 L979316 -2730463 Z","M859596 -2590665 L856147 -2584729 L850972 -2587677 L845288 -2582028 L840753 -2584186 L843086 
-2586708 L840790 -2591911 L848887 -2590551 L852346 -2598255 L859596 -2590665 Z"]},"guizhou":{"id":"guizhou","name":"璐靛窞
鐪?,"bounds":{"left":-631422,"right":-44203,"bottom":2582519,"top":3086858},"viewBox":{"x":-781107,"y":-3147379,"width":
886589,"height":625381},"paths":["M-71639 -3003242 L-72444 -2981844 L-68709 -2977000 L-59919 -2977720 L-69389 -2951143 
L-65135 -2919826 L-56725 -2913394 L-54782 -2897598 L-66983 -2890962 L-69987 -2883277 L-78190 -2887141 L-84510 -2886074 
L-93064 -2865912 L-121706 -2845818 L-110369 -2838560 L-91144 -2852124 L-85754 -2851947 L-88625 -2846599 L-84969 -284498
6 L-79406 -2847478 L-75067 -2854719 L-62679 -2852977 L-52332 -2849239 L-44203 -2831428 L-55863 -2825424 L-54552 -282275
4 L-50257 -2825260 L-46317 -2823478 L-47895 -2810783 L-71068 -2804806 L-69690 -2800830 L-62213 -2797201 L-59308 -278923
5 L-72161 -2759714 L-66203 -2754594 L-52342 -2762907 L-50842 -2760745 L-55240 -2750944 L-50162 -2739952 L-52663 -272848
1 L-66568 -2708368 L-68795 -2700803 L-66445 -2697977 L-75404 -2698172 L-83145 -2704410 L-90103 -2705392 L-100787 -27044
62 L-111748 -2694768 L-105004 -2693068 L-95040 -2697970 L-96505 -2680658 L-93372 -2674048 L-121593 -2675169 L-123042 -2
685086 L-130896 -2683998 L-138565 -2667421 L-140920 -2650843 L-151594 -2665139 L-159334 -2664945 L-169732 -2675956 L-18
5875 -2665394 L-189408 -2643917 L-196060 -2638533 L-224067 -2630179 L-226520 -2644783 L-235145 -2651440 L-246370 -26415
52 L-256977 -2646745 L-262326 -2655294 L-260138 -2660969 L-270422 -2665041 L-269802 -2674250 L-279768 -2686493 L-294806
 -2681400 L-305572 -2666961 L-304288 -2645468 L-311074 -2646911 L-314846 -2640454 L-336790 -2639574 L-362102 -2623011 L
-388579 -2618249 L-384013 -2607155 L-385714 -2599555 L-403880 -2582519 L-412468 -2592516 L-424686 -2591207 L-435552 -25
98525 L-452599 -2603678 L-462181 -2618633 L-478138 -2618434 L-484695 -2627712 L-499962 -2615485 L-504036 -2603974 L-517
194 -2600199 L-532986 -2587131 L-553311 -2600213 L-552681 -2607412 L-534388 -2627938 L-536033 -2633773 L-545576 -263049
1 L-548055 -2633212 L-530144 -2647009 L-522673 -2647381 L-521190 -2655568 L-539090 -2659145 L-541243 -2668868 L-550122 
-2676374 L-547568 -2686441 L-559589 -2683799 L-559363 -2693815 L-568344 -2700240 L-569171 -2710591 L-568065 -2713540 L-
564242 -2711659 L-562310 -2714177 L-542203 -2769679 L-527766 -2780724 L-539042 -2805655 L-546177 -2806714 L-552250 -282
0268 L-561209 -2810710 L-582175 -2812158 L-589103 -2802014 L-605812 -2801661 L-618297 -2809560 L-622619 -2833951 L-6205
11 -2839857 L-615134 -2841777 L-617161 -2854049 L-621627 -2862670 L-629877 -2858134 L-631422 -2863350 L-627137 -2870992
 L-607123 -2885656 L-596451 -2905288 L-587838 -2902760 L-586665 -2894948 L-577708 -2890356 L-573796 -2882994 L-551016 -
2904642 L-541339 -2897408 L-535362 -2887408 L-525385 -2885654 L-510066 -2889615 L-504117 -2882051 L-497800 -2888654 L-4
83087 -2895535 L-471459 -2890883 L-460943 -2915205 L-460351 -2928081 L-453068 -2931063 L-439273 -2932475 L-427624 -2920
621 L-387426 -2928993 L-382665 -2932661 L-373852 -2928588 L-369376 -2930370 L-357310 -2940756 L-360670 -2958627 L-37287
2 -2972778 L-381716 -2973540 L-391675 -2968504 L-401204 -2972740 L-401290 -2979821 L-409162 -2993048 L-414129 -2989310 
L-421383 -2990812 L-424449 -3010931 L-417969 -3023091 L-413747 -3026099 L-399982 -3023437 L-388166 -3039934 L-356088 -3
008574 L-349558 -3007804 L-348931 -3014960 L-344791 -3017340 L-340105 -3014733 L-334347 -3020535 L-340819 -3049935 L-32
5669 -3027214 L-331834 -3008875 L-319664 -3005306 L-316852 -3020278 L-307228 -3019627 L-303882 -3028037 L-309899 -30382
01 L-292195 -3039077 L-289186 -3047982 L-270091 -3046758 L-265817 -3039276 L-251153 -3050579 L-247770 -3056686 L-254158
 -3072772 L-246344 -3085392 L-242392 -3083631 L-232175 -3086858 L-230074 -3081525 L-223939 -3078816 L-217091 -3084163 L
-212283 -3078238 L-210676 -3062187 L-207072 -3060536 L-187239 -3071882 L-170664 -3065549 L-162879 -3070111 L-156425 -30
37184 L-158771 -3024130 L-149911 -3020457 L-138582 -3022779 L-134789 -3020514 L-139362 -2991245 L-136404 -2986106 L-130
333 -2986316 L-132014 -3000021 L-127484 -3005003 L-120863 -3000173 L-118266 -2990291 L-124356 -2980331 L-121307 -297137
0 L-108300 -2972622 L-100794 -2966193 L-88076 -2968294 L-81434 -2995612 L-71639 -3003242 Z"]},"yunnan":{"id":"yunnan","
name":"浜戝崡鐪?,"bounds":{"left":-1269416,"right":-390925,"bottom":2228424,"top":3144480},"viewBox":{"x":-1635348,"y":-325
4407,"width":1610354,"height":1135910},"paths":["M-1045526 -3144480 L-1049144 -3051472 L-1038569 -3029472 L-1030039 -30
18903 L-1025460 -3061487 L-1011234 -3071485 L-1000406 -3090326 L-990726 -3093689 L-991172 -3079214 L-972612 -3062219 L-
964056 -3039158 L-953147 -3033291 L-955273 -3020602 L-968126 -3013610 L-959226 -2986918 L-947176 -2978737 L-946118 -296
3326 L-931892 -2978913 L-922348 -2972008 L-909099 -2980970 L-901366 -2954985 L-890894 -2946625 L-894796 -2938713 L-8777
52 -2908897 L-878327 -2901226 L-869550 -2896318 L-869464 -2881464 L-848529 -2859578 L-853136 -2845904 L-845754 -2844147
 L-844052 -2849525 L-838702 -2846263 L-853588 -2823256 L-833526 -2809322 L-827687 -2795689 L-836455 -2791305 L-832360 -
2784189 L-819567 -2782592 L-812921 -2765490 L-786538 -2766263 L-740335 -2793696 L-732899 -2790709 L-735468 -2781631 L-7
28327 -2775999 L-708129 -2790874 L-697274 -2789516 L-692854 -2826704 L-702634 -2864247 L-698427 -2897073 L-694396 -2906
658 L-674654 -2905838 L-657994 -2929714 L-636132 -2946857 L-628022 -2965967 L-639367 -2972479 L-637441 -2983393 L-62260
2 -2996016 L-611914 -2990527 L-596087 -3001284 L-602529 -3026344 L-595427 -3041670 L-585561 -3034513 L-557290 -3038173 
L-540266 -3034128 L-557271 -3022963 L-557433 -3001957 L-546768 -3000341 L-540672 -2991591 L-545429 -2984458 L-539726 -2
981516 L-554960 -2969140 L-530954 -2945881 L-500957 -2950156 L-484332 -2971079 L-463660 -2960991 L-460335 -2954815 L-46
5391 -2944628 L-459594 -2919900 L-472117 -2890462 L-483087 -2895535 L-504117 -2882051 L-510066 -2889615 L-535362 -28874
08 L-551016 -2904642 L-573796 -2882994 L-586665 -2894948 L-587838 -2902760 L-596451 -2905288 L-607123 -2885656 L-631422
 -2863350 L-629877 -2858134 L-621627 -2862670 L-617161 -2854049 L-615134 -2841777 L-622619 -2833951 L-618297 -2809560 L
-605812 -2801661 L-589103 -2802014 L-582175 -2812158 L-561209 -2810710 L-552250 -2820268 L-546177 -2806714 L-539042 -28
05655 L-527766 -2780724 L-542203 -2769679 L-562310 -2714177 L-569171 -2710591 L-568344 -2700240 L-559363 -2693815 L-559
589 -2683799 L-547568 -2686441 L-550122 -2676374 L-541243 -2668868 L-539090 -2659145 L-521190 -2655568 L-522673 -264738
1 L-530144 -2647009 L-548055 -2633212 L-536033 -2633773 L-534388 -2627938 L-562723 -2589223 L-549248 -2561342 L-538606 
-2554203 L-537212 -2566187 L-531022 -2568687 L-499203 -2563793 L-488539 -2551724 L-483832 -2537472 L-490756 -2532953 L-
481917 -2523442 L-474180 -2527386 L-461315 -2519331 L-450247 -2528698 L-443866 -2519882 L-418189 -2528326 L-404658 -252
4883 L-390925 -2498198 L-397278 -2464778 L-403173 -2457492 L-411138 -2452388 L-413733 -2458024 L-427666 -2461080 L-4467
09 -2447975 L-443130 -2439679 L-461792 -2426703 L-479510 -2447358 L-484931 -2446588 L-491013 -2435994 L-506287 -2434524
 L-535758 -2420294 L-532212 -2398717 L-545313 -2390015 L-560658 -2392243 L-582827 -2375175 L-592792 -2383651 L-593167 -
2391905 L-609915 -2388369 L-624069 -2356736 L-657006 -2392114 L-670404 -2371120 L-687662 -2394867 L-722095 -2358362 L-7
75032 -2399444 L-787449 -2389723 L-801484 -2360011 L-835223 -2365826 L-842794 -2359848 L-852212 -2372610 L-861211 -2372
429 L-868838 -2351854 L-876513 -2346729 L-873301 -2318184 L-860040 -2298715 L-861799 -2286108 L-854447 -2277559 L-86462
6 -2273371 L-867544 -2246930 L-856867 -2236990 L-866704 -2228430 L-885048 -2239642 L-913984 -2235493 L-919156 -2240011 
L-921158 -2255031 L-914883 -2271274 L-927491 -2276202 L-924039 -2283436 L-928344 -2299425 L-959008 -2288741 L-985803 -2
270061 L-996974 -2272657 L-1005366 -2282025 L-1029065 -2277463 L-1033725 -2289686 L-1027452 -2298105 L-1032155 -2302236
 L-1037722 -2297077 L-1043585 -2300253 L-1048054 -2317751 L-1045645 -2333388 L-1050587 -2343107 L-1055256 -2339807 L-10
61186 -2344619 L-1071147 -2343546 L-1086193 -2352807 L-1109167 -2353140 L-1127628 -2362227 L-1099918 -2396662 L-1102034
 -2423647 L-1088748 -2434824 L-1087360 -2442952 L-1075961 -2440976 L-1079200 -2458647 L-1121181 -2466708 L-1125814 -247
3739 L-1141457 -2477779 L-1134782 -2489253 L-1136232 -2500390 L-1138662 -2511345 L-1145489 -2510034 L-1147226 -2516042 
L-1138637 -2523750 L-1144729 -2542990 L-1154149 -2546871 L-1154727 -2565131 L-1134153 -2574375 L-1130544 -2584472 L-115
8078 -2579372 L-1168352 -2585564 L-1221662 -2582013 L-1256675 -2568404 L-1269344 -2577618 L-1243458 -2598626 L-1242626 
-2612985 L-1252002 -2617034 L-1245889 -2622949 L-1247713 -2631076 L-1261858 -2634224 L-1255498 -2667578 L-1232167 -2673
823 L-1235899 -2689119 L-1230242 -2702609 L-1217127 -2717395 L-1206574 -2713083 L-1188088 -2731007 L-1182805 -2753297 L
-1167285 -2741602 L-1147130 -2771260 L-1141241 -2773293 L-1134607 -2768062 L-1126195 -2773055 L-1137118 -2799215 L-1132
729 -2807063 L-1126987 -2801227 L-1122688 -2804023 L-1125259 -2820617 L-1111403 -2853733 L-1112139 -2882554 L-1105481 -
2902448 L-1111415 -2915023 L-1105664 -2961582 L-1130503 -2975367 L-1133151 -2962886 L-1143832 -2964992 L-1155219 -30214
87 L-1151544 -3034230 L-1138897 -3043338 L-1142403 -3057972 L-1135096 -3060725 L-1124459 -3028445 L-1096154 -3036038 L-
1090346 -3050775 L-1100769 -3069002 L-1098794 -3088490 L-1092597 -3091252 L-1096198 -3119674 L-1078940 -3123125 L-10764
30 -3101099 L-1063009 -3102783 L-1066228 -3114364 L-1054364 -3126082 L-1058841 -3140655 L-1045526 -3144480 Z"]},"guangx
i":{"id":"guangxi","name":"骞胯タ澹棌鑷不鍖?,"bounds":{"left":-562723,"right":209095,"bottom":2218039,"top":2768890},"viewBox
":{"x":-660990,"y":-2834992,"width":968351,"height":683054},"paths":["M204061 -2587713 L198472 -2585313 L195252 -257540
1 L202133 -2566319 L208626 -2543139 L191768 -2531175 L198657 -2503387 L189110 -2499239 L184060 -2486068 L169745 -248656
8 L166935 -2468266 L154745 -2464844 L143482 -2444667 L139278 -2428669 L141876 -2404175 L146995 -2400267 L141215 -238631
0 L126625 -2370313 L109812 -2364872 L109080 -2356613 L79157 -2347270 L72786 -2334683 L80889 -2316220 L69137 -2312014 L6
5741 -2303445 L58000 -2306455 L53775 -2300843 L44520 -2306076 L35282 -2303675 L40957 -2276063 L-4439 -2268367 L-10162 -
2248162 L-19436 -2245089 L-24137 -2248305 L-26672 -2244125 L-25777 -2225529 L-33436 -2228073 L-42959 -2242279 L-46400 -
2251167 L-40061 -2256084 L-43476 -2257762 L-55669 -2246861 L-45449 -2239684 L-51841 -2227189 L-87271 -2218039 L-100750 
-2224054 L-87429 -2231040 L-88147 -2242477 L-92181 -2238429 L-98427 -2243802 L-106283 -2240173 L-112610 -2242406 L-1197
34 -2250717 L-111404 -2258565 L-125118 -2266034 L-126921 -2254174 L-118484 -2241815 L-131114 -2240916 L-138075 -2264115
 L-143753 -2253090 L-149914 -2258881 L-142327 -2270404 L-148333 -2278288 L-155875 -2269630 L-159967 -2255384 L-157992 -
2249512 L-154590 -2253583 L-151933 -2251152 L-154060 -2241690 L-160195 -2235772 L-167414 -2235478 L-160755 -2248351 L-1
72642 -2255005 L-177333 -2237260 L-186911 -2230785 L-181680 -2239215 L-184977 -2247223 L-194501 -2239570 L-189922 -2234
095 L-192616 -2231656 L-204645 -2236893 L-209477 -2234600 L-229952 -2248979 L-253043 -2244321 L-267560 -2249814 L-27550
9 -2242784 L-283150 -2258189 L-292128 -2255229 L-313267 -2268001 L-308579 -2280925 L-316605 -2279606 L-327410 -2286652 
L-345837 -2284735 L-346034 -2318674 L-347995 -2324560 L-356235 -2327306 L-358638 -2336776 L-352611 -2349621 L-343494 -2
349769 L-329358 -2377922 L-358148 -2393633 L-376834 -2385377 L-386062 -2387489 L-388017 -2394205 L-398289 -2400140 L-42
4932 -2394423 L-442287 -2409698 L-456663 -2412305 L-461765 -2426761 L-452072 -2436880 L-443130 -2439679 L-446709 -24479
75 L-427666 -2461080 L-413733 -2458024 L-411138 -2452388 L-398528 -2462659 L-390925 -2498198 L-403490 -2523657 L-418189
 -2528326 L-443866 -2519882 L-445998 -2527666 L-450247 -2528698 L-461315 -2519331 L-474180 -2527386 L-481917 -2523442 L
-490756 -2532953 L-483832 -2537472 L-488539 -2551724 L-499203 -2563793 L-531022 -2568687 L-537212 -2566187 L-538606 -25
54203 L-549248 -2561342 L-562723 -2589223 L-551751 -2600214 L-532986 -2587131 L-517194 -2600199 L-504036 -2603974 L-499
962 -2615485 L-484695 -2627712 L-478138 -2618434 L-462181 -2618633 L-452599 -2603678 L-424686 -2591207 L-412468 -259251
6 L-403880 -2582519 L-385714 -2599555 L-384013 -2607155 L-388579 -2618249 L-362102 -2623011 L-336790 -2639574 L-314846 
-2640454 L-311074 -2646911 L-304288 -2645468 L-305572 -2666961 L-294806 -2681400 L-279768 -2686493 L-269802 -2674250 L-
270422 -2665041 L-260138 -2660969 L-262326 -2655294 L-256977 -2646745 L-246370 -2641552 L-235145 -2651440 L-226520 -264
4783 L-224067 -2630179 L-189408 -2643917 L-185875 -2665394 L-169732 -2675956 L-159334 -2664945 L-151594 -2665139 L-1409
20 -2650843 L-130896 -2683998 L-123042 -2685086 L-121593 -2675169 L-95078 -2672940 L-95040 -2697970 L-105004 -2693068 L
-111748 -2694768 L-100787 -2704462 L-90103 -2705392 L-67293 -2697096 L-66568 -2708368 L-51977 -2729236 L-36762 -2731068
 L-29828 -2725192 L-32652 -2713435 L-19560 -2713440 L-21653 -2727263 L-13746 -2729027 L-5829 -2747088 L7633 -2744186 L6
896 -2729773 L15230 -2727693 L19739 -2733676 L25504 -2722558 L29658 -2722216 L38582 -2738903 L50646 -2746036 L55024 -27
57887 L61204 -2762229 L72476 -2759712 L75156 -2753780 L91899 -2754802 L95153 -2768890 L115748 -2761293 L116531 -2755286
 L128121 -2753952 L127196 -2736101 L119980 -2722223 L125667 -2710704 L133852 -2714337 L148711 -2711059 L130934 -2695035
 L132611 -2679283 L126920 -2661631 L98444 -2628640 L95734 -2620908 L98688 -2607075 L108491 -2607950 L112256 -2619177 L1
27134 -2630068 L140653 -2630880 L148062 -2617568 L145463 -2611615 L148985 -2592388 L145153 -2578970 L156200 -2575984 L1
72427 -2591084 L204061 -2587713 Z"]},"guangdong":{"id":"guangdong","name":"骞夸笢鐪?,"bounds":{"left":-35663,"right":733721
,"bottom":2090661,"top":2677366},"viewBox":{"x":-166661,"y":-2747770,"width":1031380,"height":727514},"paths":["M419373
 -2347077 L401950 -2353105 L388029 -2374789 L363162 -2376440 L354725 -2370327 L370235 -2349176 L367438 -2335359 L372786
 -2315533 L363031 -2307865 L352917 -2314088 L335260 -2284864 L331273 -2287405 L335032 -2295942 L323733 -2296994 L326647
 -2306996 L321942 -2310277 L312764 -2299892 L315788 -2281548 L310489 -2274935 L302482 -2271807 L296862 -2282903 L292615
 -2283400 L269217 -2260321 L254412 -2268469 L253732 -2276745 L262397 -2283029 L250973 -2280528 L249204 -2287177 L253122
 -2292290 L249516 -2294719 L246356 -2284775 L252475 -2263035 L248875 -2255935 L230551 -2255791 L231046 -2269555 L212427
 -2262743 L214447 -2271749 L205528 -2265099 L201458 -2254971 L202752 -2248047 L210868 -2245288 L191271 -2236899 L191627
 -2245619 L199651 -2249126 L191481 -2252253 L193569 -2259812 L174908 -2260994 L172149 -2257635 L185304 -2253178 L187394
 -2245371 L175913 -2239985 L174496 -2232295 L155257 -2230804 L150992 -2239134 L134027 -2220021 L131434 -2221855 L136330
 -2227628 L131445 -2231507 L124312 -2231915 L128107 -2228627 L125011 -2225496 L107896 -2231619 L105368 -2227832 L111786
 -2226039 L107927 -2221871 L97831 -2216832 L78471 -2215860 L63165 -2198510 L44981 -2196952 L46257 -2204139 L53408 -2206
016 L41634 -2223959 L37935 -2223921 L33880 -2219331 L42605 -2209564 L43549 -2202281 L40800 -2190669 L34593 -2184432 L57
107 -2180966 L56677 -2168984 L53830 -2165421 L45619 -2173766 L27174 -2170525 L32536 -2183265 L12965 -2190724 L21649 -21
80778 L18079 -2160134 L12899 -2158416 L12348 -2152368 L19816 -2157353 L37099 -2155763 L40869 -2146484 L30204 -2135939 L
51906 -2124437 L56074 -2113151 L44463 -2098077 L29905 -2090876 L12726 -2091348 L4273 -2096469 L-9109 -2091570 L-7696 -2
098338 L-13733 -2108745 L-7508 -2110891 L-621 -2101737 L3850 -2105031 L3330 -2111438 L-18975 -2120208 L-15096 -2125522 
L-25733 -2134087 L-25268 -2150392 L-32341 -2154094 L-35663 -2164974 L-30221 -2178824 L-34611 -2188136 L-25622 -2197362 
L-23569 -2211291 L-12272 -2215591 L-3970 -2224982 L-19735 -2224140 L-26672 -2244125 L-24137 -2248305 L-19436 -2245089 L
-10162 -2248162 L-1616 -2270158 L40957 -2276063 L35282 -2303675 L44520 -2306076 L53775 -2300843 L58000 -2306455 L65741 
-2303445 L69137 -2312014 L80889 -2316220 L72786 -2334683 L79157 -2347270 L109080 -2356613 L109812 -2364872 L126625 -237
0313 L141215 -2386310 L146995 -2400267 L141876 -2404175 L139278 -2428669 L143482 -2444667 L154745 -2464844 L166935 -246
8266 L169745 -2486568 L184060 -2486068 L189110 -2499239 L198657 -2503387 L191768 -2531175 L206080 -2539509 L209019 -254
7420 L195252 -2575401 L198472 -2585313 L218609 -2597582 L219364 -2607488 L214922 -2613772 L219152 -2638736 L236085 -264
0063 L241707 -2633897 L246757 -2639366 L268010 -2632382 L280632 -2607029 L286711 -2607158 L301667 -2609556 L304374 -261
6383 L300282 -2634966 L304549 -2641853 L298306 -2646699 L289947 -2646270 L288097 -2658391 L295605 -2655160 L310409 -266
1639 L316425 -2673607 L331009 -2677273 L340173 -2664899 L362966 -2656879 L384027 -2658603 L391278 -2670507 L396640 -267
2257 L405946 -2663023 L406360 -2652824 L414362 -2658697 L439266 -2660649 L456831 -2671668 L473903 -2658901 L471140 -264
7060 L475722 -2643015 L444401 -2619495 L438427 -2597911 L422560 -2586469 L448454 -2568339 L458824 -2574348 L478379 -257
4975 L482783 -2582412 L492819 -2578929 L498533 -2588288 L546395 -2606063 L577569 -2581075 L590082 -2583163 L581016 -260
2607 L592414 -2624274 L615299 -2617197 L624328 -2621340 L631479 -2611499 L645306 -2620894 L660348 -2594247 L692205 -260
1758 L689974 -2587868 L697949 -2581700 L713860 -2549692 L708849 -2514964 L722676 -2493862 L733721 -2488713 L728287 -248
1285 L722984 -2487810 L716067 -2488423 L712715 -2480416 L718307 -2481545 L717581 -2477154 L706698 -2478266 L703085 -246
3318 L695936 -2457831 L672088 -2460104 L677505 -2451514 L693956 -2452739 L700080 -2443249 L690758 -2443351 L682375 -243
5200 L680033 -2441896 L672642 -2442086 L676737 -2436010 L670557 -2409444 L648831 -2409325 L630869 -2393472 L623116 -239
4785 L602337 -2383701 L597092 -2393845 L584513 -2397947 L571222 -2384678 L579916 -2382165 L575590 -2372655 L553771 -237
5286 L552678 -2381258 L562194 -2382313 L559113 -2386275 L540755 -2384952 L549578 -2397467 L533119 -2387841 L519795 -238
5945 L517785 -2373482 L510375 -2381128 L503085 -2379493 L513081 -2371044 L508141 -2355981 L502770 -2362049 L492618 -235
9772 L490210 -2374919 L498706 -2382641 L493830 -2386862 L466527 -2374340 L465907 -2365797 L474923 -2365466 L466752 -235
6477 L478131 -2352184 L472611 -2345543 L466138 -2345265 L462449 -2356883 L455726 -2360846 L419373 -2347077 Z","M284118 
-2256165 L290466 -2262499 L300123 -2262694 L293212 -2255059 L294165 -2242798 L288908 -2241642 L284425 -2246223 L284118 
-2256165 Z","M733018 -2467603 L729599 -2462715 L711950 -2465855 L730477 -2473143 L733018 -2467603 Z","M266575 -2241263 
L263769 -2244728 L267693 -2250893 L278464 -2255465 L277406 -2247193 L266575 -2241263 Z","M57393 -2183762 L45382 -219339
2 L64735 -2194586 L57393 -2183762 Z","M373365 -2359839 L360251 -2371174 L369888 -2370457 L375206 -2363207 L373365 -2359
839 Z","M348519 -2296892 L356824 -2297644 L355986 -2289663 L345640 -2289165 L348519 -2296892 Z"]},"hainan":{"id":"haina
n","name":"娴峰崡鐪?,"bounds":{"left":-148670,"right":110738,"bottom":1866031,"top":2083104},"viewBox":{"x":-209764,"y":-21
09152,"width":381596,"height":269170},"paths":["M75249 -2077196 L78075 -2072815 L84919 -2067662 L92769 -2064768 L98468 
-2066034 L100198 -2064809 L105359 -2050427 L110675 -2026981 L103033 -2022967 L94089 -2014260 L92031 -2013932 L88694 -20
16078 L81742 -2005510 L72273 -1998575 L72307 -1990817 L62050 -1972721 L61163 -1963155 L55956 -1957230 L55579 -1947181 L
46721 -1938993 L49623 -1935727 L54008 -1935797 L53654 -1941807 L54705 -1942881 L58834 -1934110 L49828 -1931648 L44724 -
1920209 L31301 -1919691 L25524 -1917189 L10231 -1902903 L7545 -1892141 L4730 -1889071 L-1160 -1888499 L-4132 -1890434 L
-3541 -1891694 L2534 -1892487 L1704 -1897110 L-15205 -1890381 L-24028 -1891144 L-28928 -1882463 L-27324 -1876562 L-2945
2 -1871817 L-32475 -1869892 L-34346 -1873654 L-40874 -1872809 L-42178 -1871642 L-41495 -1867761 L-45553 -1866069 L-4757
9 -1866501 L-49305 -1871601 L-58221 -1869206 L-55148 -1875353 L-60057 -1879274 L-90888 -1880958 L-96734 -1888783 L-1109
29 -1888518 L-124808 -1897511 L-142083 -1904930 L-143022 -1907689 L-140542 -1917847 L-140907 -1928820 L-143163 -1934592
 L-148549 -1940598 L-144641 -1949307 L-148611 -1967342 L-143799 -1972348 L-142497 -1975975 L-142986 -1978519 L-147869 -
1981246 L-144639 -1992543 L-141786 -1996769 L-136023 -1997861 L-126937 -2003042 L-104858 -2020902 L-87369 -2027633 L-82
453 -2034429 L-77889 -2036176 L-75003 -2032376 L-73059 -2031950 L-73776 -2040544 L-76093 -2043556 L-84189 -2036273 L-88
953 -2036654 L-88630 -2043392 L-78543 -2054318 L-70044 -2055198 L-52770 -2048778 L-50736 -2050364 L-51055 -2055504 L-48
412 -2059472 L-41456 -2064045 L-33627 -2066598 L-30182 -2065986 L-23055 -2061143 L-14240 -2063829 L-7105 -2063945 L389 
-2056592 L5588 -2062368 L13033 -2065720 L17763 -2071931 L29376 -2068073 L41674 -2073183 L61531 -2064886 L63681 -2055652
 L66275 -2054012 L68454 -2056272 L66175 -2060413 L65268 -2067588 L60272 -2068986 L60693 -2074957 L62649 -2077072 L70695
 -2078335 L72804 -2083104 L75249 -2077196 Z"]},"hong-kong":{"id":"hong-kong","name":"棣欐腐","bounds":{"left":406816,"righ
t":458023,"bottom":2322423,"top":2354059},"viewBox":{"x":400672,"y":-2360636,"width":63496,"height":44789},"paths":["M4
19373 -2347077 L422961 -2348654 L424091 -2351057 L426155 -2350334 L430050 -2351877 L431301 -2354059 L437174 -2353634 L4
38100 -2352857 L431660 -2342425 L435153 -2335384 L449174 -2344582 L456195 -2343540 L457967 -2339661 L453823 -2335827 L4
42901 -2335736 L442212 -2332016 L448298 -2325589 L447987 -2323036 L445575 -2322527 L432261 -2326814 L428453 -2332719 L4
08672 -2332328 L407244 -2337430 L417228 -2343850 L419373 -2347077 Z","M402567 -2311617 L398992 -2311036 L398250 -231429
7 L404154 -2321057 L405738 -2322145 L410908 -2321742 L417826 -2328218 L420025 -2327691 L420069 -2325902 L416520 -232337
3 L415896 -2313972 L413475 -2313194 L411947 -2315631 L407124 -2312302 L402567 -2311617 Z","M434459 -2321897 L437058 -23
21904 L440803 -2319224 L441450 -2313965 L437844 -2311724 L426650 -2319465 L428949 -2321801 L434459 -2321897 Z"]},"taiwa
n":{"id":"taiwan","name":"鍙版咕鐪?,"bounds":{"left":1035106,"right":1207741,"bottom":2334742,"top":2715823},"viewBox":{"x"
:786467,"y":-2761553,"width":669912,"height":472541},"paths":["M1189402 -2700405 L1198371 -2700223 L1201425 -2690359 L1
207741 -2688622 L1197982 -2677986 L1192587 -2668489 L1196116 -2647948 L1200972 -2640876 L1201006 -2632644 L1194997 -262
2266 L1192920 -2606038 L1181285 -2583059 L1184695 -2570401 L1180744 -2549102 L1177758 -2511891 L1170417 -2483527 L11725
11 -2474446 L1167106 -2468948 L1161737 -2450480 L1153298 -2442742 L1154840 -2436527 L1153492 -2432580 L1140446 -2421763
 L1135662 -2412319 L1129386 -2382099 L1132849 -2350682 L1127516 -2342470 L1131036 -2335224 L1119655 -2340147 L1116911 -
2335524 L1110945 -2347060 L1113173 -2355840 L1101367 -2379153 L1091815 -2386759 L1077073 -2392903 L1064293 -2402307 L10
59126 -2410167 L1061646 -2414598 L1049553 -2433808 L1047853 -2440529 L1049099 -2446356 L1044002 -2446473 L1035863 -2451
673 L1035301 -2456907 L1039452 -2460907 L1035973 -2462176 L1035202 -2465743 L1039844 -2494791 L1036011 -2514634 L104366
1 -2536602 L1052086 -2540176 L1047559 -2540471 L1047325 -2542050 L1054448 -2561155 L1066746 -2584582 L1070974 -2600406 
L1081208 -2617329 L1084057 -2629094 L1100997 -2650966 L1102662 -2659522 L1113334 -2681666 L1127150 -2690533 L1144045 -2
695795 L1150940 -2709416 L1158730 -2715360 L1162855 -2715544 L1189402 -2700405 Z","M985513 -2507927 L990867 -2507025 L9
92652 -2503115 L987772 -2502601 L984468 -2497048 L981099 -2497036 L977349 -2500758 L979980 -2505668 L983786 -2506086 L9
82138 -2510347 L977795 -2512785 L978463 -2514417 L982220 -2514634 L985513 -2507927 Z"]}}}
At line:2 char:72
+ ... 2/public/assets/china-province-shapes.json | ConvertFrom-Json; $json. ...
+                                                  ~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (:) [ConvertFrom-Json], ArgumentException
    + FullyQualifiedErrorId : System.ArgumentException,Microsoft.PowerShell.Commands.ConvertFromJsonCommand
 

 succeeded in 6420ms:
ConvertFrom-Json : Invalid object passed in, ':' or '}' expected. (4633): {"source":"鏍囧噯鍦板浘鏈嶅姟绯荤粺 data/topodata/chinato
po_h.json","sourceUrl":"https://bzdt.tianditu.gov.cn/data/topodata/chinatopo_h.json","generated":"2026-05-09T07:35:02.8
17Z","provinces":{"xinjiang":{"id":"xinjiang","name":"鏂扮枂缁村惥灏旇嚜娌诲尯","bounds":{"left":-3032442,"right":-1095561,"bottom"
:4013419,"top":5519261},"viewBox":{"x":-3387577,"y":-5699962,"width":2647151,"height":1867244},"paths":["M-2754204 -409
5749 L-2809674 -4146495 L-2804011 -4203151 L-2809052 -4226499 L-2790999 -4243658 L-2850083 -4259714 L-2870869 -4275264 
L-2901989 -4303419 L-2908999 -4334501 L-2927508 -4329109 L-2943944 -4335674 L-2942675 -4356753 L-2953668 -4368813 L-293
8875 -4382626 L-2935881 -4428287 L-2952326 -4452375 L-2969037 -4451181 L-2963807 -4478592 L-2988523 -4495304 L-3005437 
-4489976 L-3008430 -4505582 L-3030705 -4510674 L-3025712 -4534989 L-2999660 -4523700 L-2969663 -4528135 L-2978269 -4566
044 L-2965194 -4576762 L-2966327 -4628680 L-2950238 -4654463 L-2984247 -4689560 L-3002175 -4696179 L-3009274 -4686514 L
-3026063 -4697632 L-3026474 -4735181 L-3013914 -4734906 L-3009003 -4747117 L-3017143 -4750058 L-3023677 -4795625 L-2992
885 -4794897 L-2978628 -4804368 L-2978216 -4825983 L-2953278 -4851141 L-2925675 -4843701 L-2887399 -4857735 L-2873529 -
4851729 L-2871140 -4872095 L-2846974 -4854962 L-2806923 -4865683 L-2805397 -4841864 L-2814603 -4824282 L-2795158 -48180
79 L-2761820 -4822490 L-2758721 -4811851 L-2721346 -4837835 L-2702893 -4865840 L-2680828 -4871837 L-2670688 -4860224 L-
2622996 -4847166 L-2606295 -4859186 L-2584879 -4856964 L-2573205 -4873627 L-2536064 -4870764 L-2462347 -4890206 L-24335
30 -4886311 L-2418450 -4899472 L-2398608 -4894067 L-2382312 -4914932 L-2379363 -4960841 L-2367159 -4975023 L-2335273 -4
974296 L-2348607 -4995659 L-2313210 -4999787 L-2315158 -5019122 L-2306970 -5032595 L-2312120 -5110364 L-2296729 -516412
3 L-2306263 -5192132 L-2320944 -5194493 L-2322165 -5209478 L-2276250 -5218268 L-2233536 -5209717 L-2174476 -5216007 L-2
163364 -5199018 L-2114610 -5181461 L-2108320 -5196010 L-2123035 -5217749 L-2120326 -5238001 L-2017814 -5387595 L-196275
2 -5344372 L-1897048 -5332992 L-1890613 -5315017 L-1866909 -5324735 L-1841180 -5322484 L-1821666 -5339374 L-1814414 -54
23223 L-1788219 -5461463 L-1752274 -5452285 L-1724015 -5460956 L-1706816 -5478598 L-1702508 -5506351 L-1689370 -5519063
 L-1649354 -5504132 L-1640998 -5511109 L-1618184 -5508050 L-1620561 -5487768 L-1632640 -5477100 L-1613689 -5454881 L-16
19378 -5440754 L-1583602 -5406353 L-1584482 -5387967 L-1556499 -5361498 L-1516924 -5356302 L-1507384 -5333093 L-1485891
 -5332929 L-1483936 -5317036 L-1468641 -5303152 L-1463209 -5247394 L-1442431 -5215668 L-1441706 -5172944 L-1456991 -514
9743 L-1456158 -5117266 L-1483080 -5090584 L-1493368 -5066948 L-1485093 -5028473 L-1466682 -5027057 L-1425134 -5002090 
L-1307080 -4982066 L-1240878 -4927486 L-1196180 -4878274 L-1181931 -4869721 L-1147438 -4867496 L-1161905 -4838972 L-114
1293 -4825196 L-1129267 -4750874 L-1095561 -4700345 L-1096690 -4682283 L-1126621 -4669878 L-1135088 -4654796 L-1118419 
-4626751 L-1128375 -4602279 L-1143162 -4592625 L-1174143 -4590950 L-1204777 -4565778 L-1212611 -4587592 L-1273465 -4561
927 L-1328135 -4516717 L-1345250 -4482999 L-1417663 -4485992 L-1422632 -4457647 L-1440053 -4438353 L-1463837 -4365480 L
-1489546 -4347155 L-1490071 -4321092 L-1587854 -4305086 L-1630050 -4303810 L-1646026 -4311532 L-1666936 -4292592 L-1692
548 -4297512 L-1682959 -4269007 L-1662064 -4271349 L-1676165 -4211704 L-1632082 -4169190 L-1622976 -4126613 L-1623871 -
4117149 L-1664985 -4112773 L-1678733 -4103353 L-1681527 -4080459 L-1656492 -4061008 L-1661947 -4019980 L-1677253 -40141
65 L-1695878 -4028336 L-1734190 -4039311 L-1749694 -4057008 L-1761059 -4036031 L-1772559 -4038353 L-1813573 -4065165 L-
1816265 -4074748 L-1827528 -4070138 L-1848009 -4088897 L-1859066 -4081471 L-1870120 -4101330 L-1888879 -4110233 L-19610
16 -4108939 L-1975050 -4121694 L-2006051 -4115382 L-2062161 -4120304 L-2081754 -4116220 L-2101340 -4085664 L-2136117 -4
082967 L-2149338 -4072606 L-2170650 -4095300 L-2194023 -4097719 L-2218921 -4088685 L-2250622 -4089553 L-2251059 -408186
1 L-2275284 -4075730 L-2364118 -4101279 L-2377704 -4119310 L-2374385 -4134977 L-2395555 -4138727 L-2418798 -4155122 L-2
429694 -4139732 L-2460369 -4133257 L-2465574 -4119737 L-2481798 -4118221 L-2508708 -4124522 L-2514178 -4139013 L-253469
6 -4142019 L-2544113 -4155474 L-2554848 -4145670 L-2593449 -4168812 L-2597494 -4178547 L-2612074 -4169401 L-2611420 -41
55737 L-2644084 -4145745 L-2649704 -4130410 L-2660138 -4127658 L-2676811 -4088446 L-2717679 -4092143 L-2741008 -4102961
 L-2754204 -4095749 Z"]},"tibet":{"id":"tibet","name":"瑗胯棌鑷不鍖?,"bounds":{"left":-2882535,"right":-1040616,"bottom":296
2762,"top":4178547},"viewBox":{"x":-3103565,"y":-4376190,"width":2283979,"height":1611070},"paths":["M-1784341 -4044624
 L-1810715 -4037580 L-1802157 -4017751 L-1780380 -4012355 L-1794991 -3980063 L-1790228 -3972172 L-1817120 -3964130 L-18
24868 -3948316 L-1815030 -3931678 L-1821524 -3911332 L-1801045 -3907223 L-1797259 -3899132 L-1813438 -3883355 L-1807278
 -3844607 L-1814088 -3826290 L-1835056 -3815409 L-1814157 -3786099 L-1815131 -3762789 L-1786175 -3718593 L-1761773 -370
0856 L-1686834 -3681500 L-1651598 -3640602 L-1627061 -3641424 L-1629912 -3626661 L-1573532 -3608706 L-1560682 -3614504 
L-1556290 -3599585 L-1540922 -3601806 L-1517443 -3577030 L-1493906 -3583296 L-1485704 -3571695 L-1462569 -3565147 L-141
5160 -3582286 L-1391284 -3551437 L-1365579 -3545861 L-1364089 -3537803 L-1377044 -3533623 L-1365545 -3532729 L-1359243 
-3512509 L-1350413 -3517010 L-1347703 -3505559 L-1359856 -3490846 L-1349576 -3470064 L-1343634 -3464959 L-1335133 -3470
760 L-1319299 -3457566 L-1308158 -3468359 L-1288864 -3444355 L-1280525 -3451314 L-1285463 -3463800 L-1279360 -3477801 L
-1252038 -3451097 L-1232193 -3444039 L-1226915 -3468155 L-1233756 -3483218 L-1217584 -3473058 L-1205700 -3486945 L-1190
505 -3477677 L-1175728 -3481526 L-1175804 -3502792 L-1163544 -3505391 L-1164892 -3534415 L-1127583 -3526859 L-1092754 -
3503201 L-1075229 -3460571 L-1077773 -3442620 L-1040616 -3386206 L-1052557 -3374134 L-1064091 -3383586 L-1068690 -33668
59 L-1040718 -3314523 L-1046729 -3290787 L-1041413 -3221355 L-1051274 -3194527 L-1045526 -3144480 L-1058841 -3140655 L-
1054364 -3126082 L-1066228 -3114364 L-1063009 -3102783 L-1076430 -3101099 L-1078940 -3123125 L-1096198 -3119674 L-10925
97 -3091252 L-1100769 -3069002 L-1090346 -3050775 L-1096154 -3036038 L-1124459 -3028445 L-1135096 -3060725 L-1142403 -3
057972 L-1138897 -3043338 L-1151544 -3034230 L-1164224 -3038583 L-1170531 -3061229 L-1184003 -3058247 L-1189506 -307852
5 L-1202318 -3082714 L-1210015 -3061714 L-1226548 -3053581 L-1231860 -3040548 L-1226731 -3015473 L-1239302 -3017430 L-1
260906 -3001656 L-1274727 -3020347 L-1312502 -3044678 L-1316820 -3056901 L-1386514 -3077836 L-1419288 -3064701 L-143658
5 -3044423 L-1505331 -3021179 L-1536754 -3023660 L-1582889 -2984490 L-1587907 -2969050 L-1657369 -2963664 L-1708820 -29
82345 L-1757884 -2982117 L-1762636 -3010685 L-1749678 -3029463 L-1755360 -3048303 L-1789661 -3057389 L-1787585 -3092120
 L-1794123 -3097926 L-1786688 -3100346 L-1806987 -3122874 L-1826306 -3119264 L-1833649 -3108248 L-1869215 -3140123 L-18
82905 -3138886 L-1951172 -3173654 L-1972155 -3169035 L-2017074 -3136476 L-2032846 -3114227 L-2032700 -3090855 L-2052697
 -3078941 L-2068268 -3116430 L-2051608 -3149371 L-2051345 -3169488 L-2058788 -3176934 L-2073434 -3182341 L-2121558 -316
5695 L-2145866 -3181838 L-2165406 -3167800 L-2216274 -3185050 L-2249820 -3224245 L-2265245 -3226875 L-2282820 -3209139 
L-2298896 -3222312 L-2297173 -3244667 L-2310615 -3236434 L-2312149 -3220036 L-2320678 -3218861 L-2337137 -3278049 L-234
8648 -3266535 L-2356742 -3277290 L-2388397 -3284383 L-2393657 -3293836 L-2378517 -3316025 L-2383500 -3323792 L-2411640 
-3320302 L-2461124 -3369783 L-2455129 -3407243 L-2477634 -3422517 L-2514312 -3418113 L-2530282 -3467086 L-2577925 -3500
131 L-2583999 -3525357 L-2614970 -3548680 L-2613952 -3580289 L-2654086 -3602880 L-2672066 -3604091 L-2683770 -3584601 L
-2696149 -3584159 L-2697913 -3571906 L-2711686 -3572702 L-2716459 -3600505 L-2743083 -3632286 L-2788941 -3662460 L-2811
762 -3716640 L-2823572 -3713885 L-2832064 -3731525 L-2846032 -3724699 L-2867450 -3736735 L-2873556 -3775061 L-2882145 -
3779612 L-2879898 -3799531 L-2866755 -3806235 L-2873746 -3833125 L-2859720 -3843979 L-2881927 -3875756 L-2872474 -38879
42 L-2872009 -3919311 L-2838580 -3927411 L-2837319 -3893118 L-2823098 -3881324 L-2796447 -3894436 L-2788751 -3911680 L-
2786398 -3967439 L-2807315 -4017220 L-2793649 -4054178 L-2797469 -4072495 L-2770108 -4079940 L-2750100 -4102987 L-26768
11 -4088446 L-2660138 -4127658 L-2649704 -4130410 L-2644084 -4145745 L-2611420 -4155737 L-2612074 -4169401 L-2597494 -4
178547 L-2593449 -4168812 L-2554848 -4145670 L-2544113 -4155474 L-2534696 -4142019 L-2514178 -4139013 L-2508708 -412452
2 L-2481798 -4118221 L-2465574 -4119737 L-2460369 -4133257 L-2429694 -4139732 L-2418798 -4155122 L-2395555 -4138727 L-2
374385 -4134977 L-2377704 -4119310 L-2364118 -4101279 L-2275284 -4075730 L-2251059 -4081861 L-2250622 -4089553 L-221892
1 -4088685 L-2194023 -4097719 L-2170650 -4095300 L-2149338 -4072606 L-2136117 -4082967 L-2101340 -4085664 L-2080767 -41
16869 L-1975050 -4121694 L-1961016 -4108939 L-1879454 -4107831 L-1859066 -4081471 L-1848009 -4088897 L-1827528 -4070138
 L-1816265 -4074748 L-1784341 -4044624 Z"]},"qinghai":{"id":"qinghai","name":"闈掓捣鐪?,"bounds":{"left":-1835056,"right":-
612084,"bottom":3444039,"top":4331645},"viewBox":{"x":-2003740,"y":-4438158,"width":1560340,"height":1100631},"paths":[
"M-1489436 -4325923 L-1478938 -4331645 L-1426172 -4328872 L-1423449 -4298012 L-1379195 -4292454 L-1368526 -4283950 L-13
69988 -4277383 L-1380071 -4276958 L-1372246 -4266293 L-1328542 -4263221 L-1321993 -4218644 L-1272765 -4217738 L-1260032
 -4200005 L-1236283 -4200372 L-1222803 -4208678 L-1211198 -4201469 L-1208870 -4190611 L-1184153 -4175188 L-1165229 -418
6631 L-1144528 -4176767 L-1141269 -4207015 L-1130584 -4220487 L-1115901 -4211389 L-1107296 -4214141 L-1103088 -4282057 
L-1072185 -4275502 L-1015708 -4223715 L-998885 -4234878 L-993525 -4250809 L-971503 -4235696 L-958633 -4252551 L-925999 
-4231534 L-930345 -4225287 L-867873 -4156374 L-843495 -4143113 L-852978 -4166650 L-844569 -4174090 L-828624 -4146471 L-
794727 -4137694 L-788025 -4126041 L-780334 -4128042 L-783511 -4109986 L-764290 -4100446 L-760214 -4089111 L-745409 -408
1518 L-738270 -4089645 L-729339 -4088789 L-706609 -4063293 L-689701 -4068065 L-679070 -4051363 L-681613 -4038126 L-6398
67 -3998876 L-652512 -3998472 L-657059 -3984616 L-637272 -3958722 L-647240 -3948936 L-631998 -3935340 L-630061 -3908226
 L-612084 -3893842 L-629119 -3880138 L-621770 -3875512 L-624704 -3852535 L-639403 -3855262 L-648830 -3847702 L-639715 -
3816484 L-666326 -3826298 L-671711 -3810962 L-686465 -3806451 L-689304 -3796852 L-682029 -3794094 L-680088 -3781310 L-7
23433 -3750887 L-724962 -3716223 L-705688 -3705075 L-700188 -3690586 L-716495 -3683880 L-728010 -3664068 L-737559 -3669
682 L-748557 -3662881 L-762578 -3677248 L-819111 -3703205 L-830189 -3698387 L-834802 -3681314 L-798810 -3630948 L-80232
6 -3614191 L-766414 -3620571 L-764417 -3596334 L-749434 -3598302 L-749725 -3590988 L-761640 -3585690 L-763231 -3576861 
L-756144 -3570843 L-765577 -3554047 L-779095 -3568760 L-786105 -3569184 L-789245 -3560195 L-799958 -3576574 L-815124 -3
569577 L-806639 -3547701 L-815047 -3544518 L-815915 -3535819 L-806419 -3525818 L-812507 -3509128 L-835751 -3503005 L-85
7928 -3513645 L-861953 -3497105 L-884135 -3522336 L-896624 -3523648 L-903884 -3510182 L-912221 -3516343 L-909112 -35377
35 L-927618 -3560930 L-945604 -3526738 L-965623 -3544888 L-984955 -3550157 L-990967 -3567237 L-1022494 -3586357 L-10267
54 -3623772 L-1048707 -3671216 L-1049744 -3693871 L-1083236 -3702193 L-1098435 -3717971 L-1113614 -3706129 L-1119001 -3
684049 L-1142950 -3683004 L-1146780 -3674485 L-1144676 -3648914 L-1117670 -3625081 L-1147917 -3599142 L-1141353 -358922
2 L-1145543 -3580444 L-1159319 -3579157 L-1160059 -3560049 L-1127583 -3526859 L-1167519 -3532963 L-1163544 -3505391 L-1
175804 -3502792 L-1175728 -3481526 L-1190505 -3477677 L-1205700 -3486945 L-1217584 -3473058 L-1233756 -3483218 L-122691
5 -3468155 L-1232746 -3463442 L-1226409 -3448556 L-1231408 -3444341 L-1252038 -3451097 L-1277667 -3477801 L-1285463 -34
63800 L-1280525 -3451314 L-1288864 -3444355 L-1308158 -3468359 L-1319299 -3457566 L-1335133 -3470760 L-1343634 -3464959
 L-1349576 -3470064 L-1359856 -3490846 L-1347703 -3505559 L-1350413 -3517010 L-1359243 -3512509 L-1365545 -3532729 L-13
77044 -3533623 L-1364089 -3537803 L-1365579 -3545861 L-1391284 -3551437 L-1415160 -3582286 L-1462569 -3565147 L-1485704
 -3571695 L-1493906 -3583296 L-1517443 -3577030 L-1540922 -3601806 L-1556290 -3599585 L-1560682 -3614504 L-1573532 -360
8706 L-1610382 -3625253 L-1629912 -3626661 L-1627061 -3641424 L-1651598 -3640602 L-1686834 -3681500 L-1710754 -3692753 
L-1721921 -3689627 L-1761773 -3700856 L-1786175 -3718593 L-1815131 -3762789 L-1814157 -3786099 L-1835056 -3815409 L-181
4088 -3826290 L-1807278 -3844607 L-1813438 -3883355 L-1797259 -3899132 L-1801045 -3907223 L-1821524 -3911332 L-1815030 
-3931678 L-1824868 -3948316 L-1817120 -3964130 L-1790228 -3972172 L-1794991 -3980063 L-1780380 -4012355 L-1808729 -4023
259 L-1809616 -4042389 L-1800709 -4037615 L-1784341 -4044624 L-1761059 -4036031 L-1749694 -4057008 L-1734190 -4039311 L
-1694363 -4027574 L-1685591 -4014250 L-1662909 -4018852 L-1656731 -4062293 L-1681017 -4079499 L-1678733 -4103353 L-1664
985 -4112773 L-1622621 -4118963 L-1632082 -4169190 L-1644994 -4174544 L-1648169 -4189679 L-1676165 -4211704 L-1662064 -
4271349 L-1682959 -4269007 L-1693157 -4296407 L-1666936 -4292592 L-1646026 -4311532 L-1630050 -4303810 L-1587854 -43050
86 L-1539372 -4310602 L-1490071 -4321092 L-1489436 -4325923 Z"]},"gansu":{"id":"gansu","name":"鐢樿們鐪?,"bounds":{"left":-
1491215,"right":-112713,"bottom":3475644,"top":4682283},"viewBox":{"x":-1862553,"y":-4827080,"width":2121176,"height":1
496233},"paths":["M-1096690 -4682283 L-1035915 -4680988 L-994097 -4552909 L-1026356 -4526908 L-964779 -4462472 L-965614
 -4420253 L-943305 -4429742 L-948846 -4439021 L-943240 -4442028 L-930249 -4423434 L-927396 -4437583 L-910791 -4442809 L
-908865 -4431988 L-900312 -4429697 L-893661 -4446476 L-864570 -4442221 L-853111 -4450324 L-820384 -4440974 L-811110 -44
08771 L-825094 -4395864 L-828744 -4371560 L-844586 -4349897 L-883319 -4333379 L-857696 -4329039 L-819620 -4306726 L-816
024 -4288549 L-799430 -4271455 L-774183 -4267120 L-778370 -4224153 L-769124 -4226014 L-766661 -4217078 L-745736 -422288
2 L-739355 -4193580 L-701834 -4177689 L-675514 -4202627 L-691349 -4227806 L-637726 -4240215 L-593895 -4220405 L-557251 
-4245641 L-514177 -4255417 L-499955 -4248845 L-503887 -4235408 L-490400 -4212882 L-495764 -4196292 L-509588 -4188426 L-
523796 -4164397 L-563451 -4139955 L-556019 -4107634 L-568407 -4100533 L-566348 -4076597 L-506740 -4023249 L-465662 -401
7297 L-460890 -4010231 L-471079 -4005685 L-467438 -3998961 L-452245 -4001490 L-440707 -3979410 L-424044 -3974327 L-4117
60 -3947126 L-423413 -3938026 L-417533 -3918151 L-408047 -3915735 L-397787 -3874475 L-413972 -3861585 L-414387 -3845781
 L-396870 -3821168 L-389317 -3829546 L-376993 -3828549 L-383628 -3822568 L-372326 -3802225 L-364297 -3807083 L-348670 -
3785953 L-344073 -3794111 L-336662 -3791261 L-325184 -3770553 L-310876 -3793063 L-314694 -3821779 L-308167 -3825620 L-2
94737 -3817694 L-273986 -3827744 L-278647 -3842857 L-269646 -3845543 L-270127 -3865778 L-280052 -3880138 L-311009 -3884
940 L-306446 -3905940 L-319668 -3915308 L-294749 -3936750 L-293593 -3947907 L-303553 -3960651 L-293428 -3963794 L-29371
4 -3979933 L-242336 -3977968 L-231422 -3952128 L-197025 -3942713 L-163544 -3913835 L-157345 -3921443 L-138492 -3901052 
L-131781 -3905930 L-120589 -3899186 L-112713 -3863609 L-130985 -3834869 L-122014 -3786102 L-132494 -3771791 L-160804 -3
772445 L-182423 -3763401 L-203497 -3771785 L-208047 -3762235 L-190847 -3736996 L-223354 -3727383 L-238934 -3732577 L-25
1557 -3726223 L-277595 -3752153 L-306370 -3751402 L-315112 -3743440 L-308292 -3719085 L-332168 -3693851 L-329802 -36859
64 L-297501 -3669332 L-301249 -3656180 L-321836 -3656440 L-309961 -3645508 L-319927 -3640875 L-325764 -3619283 L-314224
 -3584622 L-322840 -3574274 L-330580 -3587165 L-348986 -3578713 L-367139 -3586146 L-382594 -3562750 L-393665 -3563060 L
-388906 -3550592 L-368375 -3539095 L-377930 -3513849 L-403405 -3504837 L-419475 -3512500 L-425195 -3504655 L-418239 -34
92043 L-448972 -3475759 L-511787 -3498190 L-525134 -3512514 L-511139 -3527298 L-519523 -3534316 L-518397 -3559475 L-510
225 -3561865 L-526920 -3571565 L-534034 -3597094 L-580467 -3610840 L-589472 -3607466 L-590057 -3621150 L-602004 -361435
4 L-621747 -3622017 L-618769 -3654327 L-642474 -3681495 L-670606 -3667875 L-667157 -3656340 L-681965 -3661169 L-690844 
-3645841 L-714576 -3645360 L-689068 -3596941 L-690443 -3587013 L-712891 -3576530 L-713884 -3561609 L-748611 -3554345 L-
752151 -3569142 L-736354 -3590881 L-743504 -3609361 L-744892 -3600113 L-759146 -3594853 L-766414 -3620571 L-802326 -361
4191 L-798810 -3630948 L-834802 -3681314 L-830189 -3698387 L-819111 -3703205 L-762578 -3677248 L-748557 -3662881 L-7375
59 -3669682 L-728010 -3664068 L-716495 -3683880 L-700188 -3690586 L-705688 -3705075 L-724962 -3716223 L-723433 -3750887
 L-680088 -3781310 L-689304 -3796852 L-686465 -3806451 L-671711 -3810962 L-666326 -3826298 L-639715 -3816484 L-648830 -
3847702 L-639403 -3855262 L-624704 -3852535 L-621770 -3875512 L-629119 -3880138 L-612084 -3893842 L-630061 -3908226 L-6
31998 -3935340 L-647240 -3948936 L-637272 -3958722 L-657059 -3984616 L-652512 -3998472 L-639867 -3998876 L-681613 -4038
126 L-679070 -4051363 L-689701 -4068065 L-706609 -4063293 L-729339 -4088789 L-745409 -4081518 L-760214 -4089111 L-76429
0 -4100446 L-783511 -4109986 L-780334 -4128042 L-828624 -4146471 L-844569 -4174090 L-852978 -4166650 L-843495 -4143113 
L-867873 -4156374 L-930345 -4225287 L-925999 -4231534 L-958633 -4252551 L-971503 -4235696 L-993525 -4250809 L-998885 -4
234878 L-1015708 -4223715 L-1072185 -4275502 L-1103088 -4282057 L-1107296 -4214141 L-1130584 -4220487 L-1141269 -420701
5 L-1144528 -4176767 L-1165229 -4186631 L-1184153 -4175188 L-1222803 -4208678 L-1236283 -4200372 L-1260032 -4200005 L-1
272765 -4217738 L-1321993 -4218644 L-1328542 -4263221 L-1372246 -4266293 L-1380071 -4276958 L-1368526 -4283950 L-137919
5 -4292454 L-1423449 -4298012 L-1426172 -4328872 L-1478938 -4331645 L-1489436 -4325923 L-1489546 -4347155 L-1463837 -43
65480 L-1440053 -4438353 L-1422632 -4457647 L-1417663 -4485992 L-1345250 -4482999 L-1328135 -4516717 L-1273465 -4561927
 L-1249863 -4566516 L-1235723 -4581152 L-1212611 -4587592 L-1204777 -4565778 L-1174143 -4590950 L-1136722 -4595113 L-11
18419 -4626751 L-1135088 -4654796 L-1126621 -4669878 L-1096690 -4682283 Z"]},"ningxia":{"id":"ningxia","name":"瀹佸鍥炴棌鑷
不鍖?,"bounds":{"left":-504506,"right":-203525,"bottom":3770553,"top":4236436},"viewBox":{"x":-763508,"y":-4292341,"width
":818984,"height":577694},"paths":["M-203758 -4062729 L-206207 -4053769 L-215106 -4052421 L-219940 -4042560 L-233424 -4
030670 L-237351 -4002086 L-233715 -3993333 L-234810 -3976660 L-270186 -3981613 L-285593 -3975107 L-293714 -3979933 L-29
5211 -3976770 L-291727 -3970236 L-293428 -3963794 L-297346 -3958588 L-303553 -3960651 L-293313 -3946862 L-294749 -39367
50 L-303862 -3934251 L-319657 -3916198 L-315739 -3910833 L-306446 -3905940 L-306135 -3889554 L-311710 -3886848 L-305530
 -3882524 L-292540 -3885233 L-285990 -3876809 L-279032 -3879309 L-270127 -3865778 L-272214 -3856599 L-269220 -3847497 L
-270922 -3843953 L-278647 -3842857 L-273986 -3827744 L-294737 -3817694 L-308167 -3825620 L-314694 -3821779 L-310265 -38
05741 L-310876 -3793063 L-315623 -3779408 L-325184 -3770553 L-333096 -3778317 L-336662 -3791261 L-344073 -3794111 L-348
670 -3785953 L-349319 -3794829 L-364297 -3807083 L-366322 -3807879 L-372326 -3802225 L-383628 -3822568 L-376073 -382329
0 L-376993 -3828549 L-389317 -3829546 L-396870 -3821168 L-403608 -3827779 L-408783 -3842215 L-414387 -3845781 L-413972 
-3861585 L-399185 -3870945 L-397787 -3874475 L-399908 -3892356 L-408047 -3915735 L-417533 -3918151 L-423413 -3938026 L-
412525 -3943136 L-411760 -3947126 L-416182 -3958514 L-422617 -3959342 L-424044 -3974327 L-440707 -3979410 L-452245 -400
1490 L-455728 -4001687 L-461782 -3996878 L-467438 -3998961 L-471079 -4005685 L-460890 -4010231 L-465662 -4017297 L-4938
66 -4022892 L-504506 -4021981 L-498394 -4028541 L-485239 -4033523 L-435426 -4033910 L-403128 -4051335 L-382394 -4049469
 L-381436 -4058006 L-368299 -4057861 L-361486 -4067913 L-357526 -4081768 L-365253 -4098300 L-362133 -4106750 L-354980 -
4114969 L-357400 -4134122 L-348552 -4176712 L-329903 -4206293 L-327337 -4208539 L-317681 -4208420 L-314236 -4224505 L-2
96131 -4225577 L-291072 -4233802 L-285658 -4236436 L-276814 -4235865 L-272368 -4232100 L-272335 -4218218 L-267892 -4202
915 L-257754 -4197083 L-257871 -4189286 L-281558 -4162192 L-287353 -4123447 L-296671 -4115351 L-296878 -4111546 L-28552
0 -4102979 L-257661 -4092826 L-238205 -4096064 L-229022 -4089515 L-217017 -4070090 L-203758 -4062729 Z","M-357849 -3795
428 L-359143 -3792151 L-365252 -3789550 L-363151 -3794570 L-357849 -3795428 Z"]},"inner-mongolia":{"id":"inner-mongolia
","name":"鍐呰挋鍙よ嚜娌诲尯","bounds":{"left":-1036872,"right":1145762,"bottom":4021981,"top":5824342},"viewBox":{"x":-1529759,
"y":-6040626,"width":3168409,"height":2234928},"paths":["M-1036872 -4682064 L-848092 -4634690 L-781869 -4641354 L-74019
1 -4635538 L-663171 -4609244 L-644523 -4576999 L-587863 -4562924 L-520012 -4522611 L-447947 -4524553 L-447789 -4497057 
L-416518 -4497997 L-409069 -4489154 L-293522 -4551942 L-229616 -4565927 L-213847 -4578874 L-171684 -4573926 L-144925 -4
579913 L-96456 -4571679 L-40280 -4577272 L-16407 -4595483 L27176 -4608855 L81177 -4674316 L130252 -4695258 L156322 -471
9403 L155570 -4733534 L127990 -4761144 L112989 -4795397 L135450 -4856987 L152659 -4873029 L190153 -4872826 L214758 -485
1216 L287595 -4841961 L344899 -4888055 L358365 -4916151 L434494 -4923241 L477243 -4953835 L486590 -4966327 L490451 -499
9871 L508281 -5025736 L525258 -5035608 L565201 -5036060 L571063 -5059504 L600612 -5056220 L622833 -5076170 L668628 -508
0039 L676389 -5091813 L694762 -5078678 L730681 -5075628 L748268 -5087685 L733538 -5143023 L705232 -5173073 L690259 -517
7148 L684661 -5191082 L655015 -5203534 L639888 -5224177 L585756 -5220487 L554442 -5177767 L512716 -5201435 L465404 -519
6370 L446923 -5174841 L417438 -5200423 L413497 -5223764 L434165 -5238993 L430280 -5266809 L489301 -5416472 L526721 -539
6315 L568894 -5386464 L622004 -5435292 L659591 -5446680 L676332 -5467655 L677085 -5487696 L658277 -5489358 L695386 -556
7190 L712471 -5635151 L750725 -5667929 L756240 -5690777 L742938 -5712291 L744802 -5735328 L727242 -5740612 L701705 -573
4984 L697386 -5754186 L715223 -5767494 L746317 -5813470 L791003 -5824342 L813142 -5808313 L817131 -5794950 L807229 -579
0855 L800525 -5766190 L780015 -5738156 L816059 -5727655 L829976 -5712870 L848648 -5742451 L861972 -5737257 L872761 -572
0050 L890664 -5723337 L884500 -5699431 L922937 -5622187 L950837 -5610396 L974107 -5637637 L988830 -5627598 L1010336 -56
34510 L1023219 -5628835 L1029589 -5641987 L1039767 -5638931 L1054599 -5649450 L1068506 -5682708 L1083251 -5678334 L1144
569 -5619758 L1128851 -5588075 L1133768 -5563982 L1119066 -5552510 L1101562 -5496619 L1107831 -5466503 L1101685 -546232
3 L1110197 -5454984 L1115597 -5421588 L1111027 -5406270 L1093933 -5409116 L1088135 -5401645 L1077223 -5336940 L1080047 
-5292862 L1056571 -5330917 L1010474 -5266750 L995232 -5258268 L986873 -5238477 L949411 -5209537 L935490 -5182301 L95266
4 -5161397 L971753 -5155503 L969786 -5143380 L978107 -5143248 L981476 -5124257 L995594 -5119784 L1012626 -5136475 L1015
920 -5145711 L1008753 -5153045 L1027548 -5150787 L1027355 -5136265 L1039616 -5138892 L1034662 -5122941 L992529 -5103810
 L1008424 -5070745 L1004762 -5054480 L982867 -5045856 L982602 -5003162 L966471 -5012950 L960042 -5027586 L952912 -50283
04 L946703 -5010179 L909162 -5030985 L907586 -5006519 L899328 -5001404 L910654 -4993768 L923612 -4998129 L924609 -49838
65 L943932 -4967978 L950125 -4946486 L943899 -4898190 L949986 -4874881 L967820 -4859992 L966681 -4838936 L982113 -48377
54 L1023243 -4873848 L1034546 -4875531 L1032040 -4865588 L1057361 -4839442 L1053025 -4826205 L1077016 -4784618 L1062710
 -4763710 L1094310 -4753325 L1089973 -4712920 L1066326 -4708910 L1058553 -4697163 L1063824 -4689373 L1036147 -4674653 L
995521 -4682808 L1002776 -4674806 L997429 -4664250 L967752 -4666823 L947045 -4631155 L922659 -4632256 L894679 -4603940 
L876500 -4602519 L852684 -4585809 L825682 -4535807 L798694 -4585997 L782959 -4589531 L771326 -4606422 L753439 -4586608 
L764994 -4568907 L762282 -4524459 L772518 -4516403 L768682 -4488637 L759831 -4482737 L729645 -4480163 L725535 -4490481 
L688613 -4478182 L681348 -4503680 L662721 -4525514 L665621 -4533263 L677310 -4526786 L681889 -4538621 L675126 -4564497 
L661445 -4556169 L658339 -4571415 L645595 -4578192 L653353 -4586128 L649498 -4598244 L631381 -4616713 L609988 -4614220 
L600168 -4601213 L560082 -4589246 L562812 -4567564 L552516 -4565991 L562660 -4553910 L557128 -4541863 L537829 -4534365 
L520058 -4544003 L495701 -4515859 L484067 -4533114 L476878 -4532293 L437306 -4504934 L440482 -4490226 L399948 -4490269 
L397804 -4512017 L404239 -4517598 L396980 -4552365 L372228 -4549356 L366270 -4529167 L351441 -4526595 L346113 -4512335 
L348476 -4477621 L320209 -4470215 L331122 -4444373 L316321 -4432539 L341723 -4391002 L331598 -4363753 L322482 -4358235 
L314782 -4364044 L285355 -4340204 L264794 -4348243 L238692 -4336325 L229831 -4322725 L190602 -4331206 L157401 -4261394 
L148082 -4254521 L121662 -4258909 L109515 -4235967 L90855 -4232126 L97101 -4251904 L85756 -4252310 L56814 -4217396 L436
41 -4231283 L31046 -4222704 L10190 -4238309 L17675 -4219675 L-3413 -4211387 L-12110 -4216620 L-10384 -4201149 L-30509 -
4192725 L-36942 -4170051 L-83886 -4127388 L-93906 -4102348 L-82033 -4082011 L-91531 -4066350 L-103536 -4078133 L-107422
 -4038827 L-167603 -4032564 L-176155 -4051289 L-214743 -4068001 L-238205 -4096064 L-257661 -4092826 L-294685 -4107867 L
-281558 -4162192 L-257386 -4195056 L-267892 -4202915 L-272368 -4232100 L-285658 -4236436 L-296131 -4225577 L-314236 -42
24505 L-317681 -4208420 L-329903 -4206293 L-348552 -4176712 L-354980 -4114969 L-365253 -4098300 L-357526 -4081768 L-368
299 -4057861 L-381436 -4058006 L-382394 -4049469 L-403128 -4051335 L-435426 -4033910 L-483876 -4033750 L-506740 -402324
9 L-566348 -4076597 L-568407 -4100533 L-556019 -4107634 L-563451 -4139955 L-523796 -4164397 L-495764 -4196292 L-490400 
-4212882 L-503887 -4235408 L-499955 -4248845 L-514177 -4255417 L-557251 -4245641 L-593895 -4220405 L-637726 -4240215 L-
691349 -4227806 L-675514 -4202627 L-701834 -4177689 L-739355 -4193580 L-745736 -4222882 L-766661 -4217078 L-769124 -422
6014 L-777498 -4223313 L-774183 -4267120 L-799430 -4271455 L-816024 -4288549 L-819620 -4306726 L-857696 -4329039 L-8833
19 -4333379 L-844586 -4349897 L-828744 -4371560 L-825094 -4395864 L-811110 -4408771 L-816005 -4433248 L-830683 -4446445
 L-853111 -4450324 L-864570 -4442221 L-893661 -4446476 L-900312 -4429697 L-908865 -4431988 L-910791 -4442809 L-925820 -
4438708 L-930249 -4423434 L-943240 -4442028 L-948846 -4439021 L-943305 -4429742 L-966130 -4420806 L-964779 -4462472 L-1
026356 -4526908 L-994097 -4552909 L-1036872 -4682064 Z"]},"heilongjiang":{"id":"heilongjiang","name":"榛戦緳姹熺渷","bounds":
{"left":780015,"right":1846587,"bottom":4843626,"top":5865660},"viewBox":{"x":414974,"y":-5988304,"width":1796654,"heig
ht":1267322},"paths":["M791003 -5824342 L844117 -5848856 L858204 -5845125 L882035 -5849233 L926701 -5865485 L956368 -58
59915 L967296 -5851329 L979875 -5853420 L996040 -5838598 L1025633 -5831707 L1031819 -5841775 L1046009 -5844667 L1080033
 -5834199 L1086762 -5828315 L1085343 -5815180 L1096663 -5818979 L1117289 -5808333 L1109874 -5792005 L1126450 -5786527 L
1139918 -5771968 L1141193 -5751458 L1159541 -5746244 L1156041 -5726286 L1188831 -5689041 L1187822 -5677437 L1198754 -56
68479 L1193382 -5665528 L1198640 -5655242 L1196228 -5662292 L1203507 -5664632 L1204897 -5636052 L1243788 -5591843 L1242
339 -5576128 L1249677 -5559901 L1269216 -5553666 L1265539 -5529222 L1275922 -5507373 L1297430 -5490478 L1319597 -548925
0 L1345549 -5500656 L1363517 -5501813 L1369741 -5488693 L1396279 -5482344 L1413191 -5484411 L1414191 -5494356 L1419162 
-5495282 L1479939 -5447919 L1518088 -5451690 L1514145 -5421432 L1521439 -5411653 L1532052 -5413693 L1541294 -5395992 L1
534587 -5368273 L1558172 -5348472 L1566175 -5331633 L1580367 -5332542 L1595285 -5342021 L1638485 -5343419 L1681064 -535
6473 L1685726 -5378694 L1712249 -5408945 L1741021 -5415868 L1788612 -5456969 L1810677 -5467786 L1828632 -5466055 L18444
24 -5481630 L1844856 -5471896 L1825604 -5453508 L1821277 -5425170 L1844258 -5395912 L1832800 -5364194 L1819547 -5358904
 L1812575 -5345165 L1819696 -5322528 L1812529 -5314360 L1818159 -5269938 L1810198 -5250648 L1818745 -5224230 L1806669 -
5208211 L1810485 -5186592 L1796834 -5170463 L1799648 -5140616 L1784558 -5125865 L1790307 -5081111 L1780518 -5073030 L17
02975 -5080178 L1690252 -5087734 L1665059 -5040702 L1641451 -5033168 L1632802 -5019002 L1648742 -5002635 L1677393 -4941
553 L1679590 -4887725 L1690359 -4874353 L1679052 -4868232 L1667681 -4872544 L1658646 -4863724 L1650711 -4873344 L162293
4 -4878789 L1603542 -4921437 L1588406 -4897270 L1573412 -4913630 L1558283 -4891915 L1540615 -4887892 L1523070 -4873391 
L1524624 -4851212 L1513121 -4843635 L1499259 -4843626 L1457222 -4899061 L1442512 -4938319 L1435917 -4939893 L1424485 -4
920717 L1417940 -4920874 L1425287 -4894549 L1411218 -4884814 L1399358 -4885743 L1396135 -4896286 L1387577 -4894739 L138
5063 -4906232 L1365924 -4928320 L1374274 -4936505 L1359212 -4943581 L1342248 -4941369 L1338929 -4931412 L1332414 -49337
47 L1328137 -4962154 L1332906 -4968166 L1318838 -4991072 L1285692 -4996673 L1261856 -4981719 L1249479 -4981061 L1221446
 -4993152 L1218199 -5017594 L1200562 -5011022 L1190328 -4999496 L1169581 -4995288 L1164463 -5006488 L1154936 -5009689 L
1151149 -4998434 L1117173 -4994718 L1081193 -5026224 L1084522 -5037501 L1075470 -5045681 L1078621 -5056360 L1072674 -50
81257 L1041403 -5071956 L1033443 -5075111 L1027455 -5068399 L1008424 -5070745 L994313 -5088973 L992529 -5103810 L100995
0 -5107862 L1012687 -5116782 L1032206 -5120564 L1039616 -5138892 L1035059 -5142227 L1027355 -5136265 L1027548 -5150787 
L1008753 -5153045 L1016006 -5141367 L989958 -5119523 L981476 -5124257 L978107 -5143248 L970614 -5141659 L971753 -515550
3 L952664 -5161397 L935490 -5182301 L949411 -5209537 L986873 -5238477 L995232 -5258268 L1010474 -5266750 L1056571 -5330
917 L1080047 -5292862 L1077223 -5336940 L1088135 -5401645 L1093933 -5409116 L1111027 -5406270 L1115597 -5421588 L111019
7 -5454984 L1101685 -5462323 L1107831 -5466503 L1101562 -5496619 L1119066 -5552510 L1133768 -5563982 L1128851 -5588075 
L1145529 -5617290 L1137381 -5631782 L1083251 -5678334 L1068506 -5682708 L1054599 -5649450 L1039767 -5638931 L1029589 -5
641987 L1023219 -5628835 L1010336 -5634510 L988830 -5627598 L974107 -5637637 L950837 -5610396 L922937 -5622187 L914715 
-5636227 L915988 -5645764 L884500 -5699431 L884723 -5709033 L891729 -5710508 L890664 -5723337 L872761 -5720050 L861972 
-5737257 L848648 -5742451 L837124 -5714700 L829976 -5712870 L821293 -5716163 L816059 -5727655 L780617 -5737137 L800525 
-5766190 L806375 -5789546 L817131 -5794950 L813142 -5808313 L801393 -5811160 L803140 -5818273 L791003 -5824342 Z"]},"ji
lin":{"id":"jilin","name":"鍚夋灄鐪?,"bounds":{"left":899328,"right":1692097,"bottom":4500494,"top":5081871},"viewBox":{"x"
:784705,"y":-5151637,"width":1022016,"height":720908},"paths":["M1690359 -4874353 L1690388 -4831877 L1685898 -4822284 L
1690031 -4811404 L1682007 -4809079 L1683610 -4802488 L1668297 -4800854 L1640279 -4779452 L1661968 -4770339 L1669884 -47
48540 L1659413 -4747014 L1650236 -4765913 L1644080 -4758974 L1642370 -4766744 L1627169 -4772283 L1623723 -4790830 L1609
907 -4792169 L1607095 -4800154 L1592177 -4799843 L1586668 -4767170 L1589486 -4733824 L1581245 -4733957 L1577208 -472260
2 L1569023 -4729138 L1559233 -4726186 L1553639 -4716240 L1552707 -4696505 L1533875 -4675238 L1464299 -4661393 L1474194 
-4638465 L1492993 -4620710 L1494733 -4612355 L1488815 -4595993 L1482778 -4592234 L1467494 -4597173 L1443774 -4587262 L1
436231 -4593652 L1412635 -4589837 L1408590 -4595046 L1398798 -4594886 L1403682 -4603423 L1394748 -4606332 L1390378 -461
6355 L1379303 -4622264 L1374778 -4612902 L1362940 -4611785 L1364480 -4606318 L1356899 -4601828 L1353178 -4572188 L13576
85 -4564574 L1349915 -4563486 L1338105 -4537379 L1330490 -4531940 L1324119 -4515468 L1318214 -4512827 L1323808 -4508009
 L1311334 -4507729 L1299137 -4500494 L1287470 -4506876 L1298687 -4535592 L1270403 -4567253 L1261823 -4590993 L1251776 -
4588329 L1244944 -4619083 L1257553 -4639343 L1250871 -4643002 L1243171 -4640326 L1240139 -4653825 L1229535 -4657456 L12
29810 -4666933 L1208539 -4692698 L1205560 -4707515 L1195280 -4706700 L1193231 -4740846 L1184527 -4738969 L1167254 -4708
756 L1156509 -4708699 L1159287 -4717891 L1152288 -4722337 L1157276 -4730513 L1144668 -4738666 L1142250 -4746656 L112368
8 -4749729 L1111592 -4756817 L1107531 -4766501 L1096879 -4768473 L1094310 -4753325 L1088819 -4751767 L1073660 -4760187 
L1069355 -4756740 L1062207 -4770667 L1069970 -4771364 L1068901 -4779456 L1076366 -4777179 L1077016 -4784618 L1053025 -4
826205 L1057361 -4839442 L1045508 -4845364 L1035578 -4859052 L1032935 -4876952 L1023243 -4873848 L1002500 -4850881 L982
113 -4837754 L966681 -4838936 L967820 -4859992 L949986 -4874881 L943899 -4898190 L941882 -4921824 L950125 -4946486 L943
264 -4954557 L943932 -4967978 L933947 -4972247 L924609 -4983865 L923612 -4998129 L910654 -4993768 L899328 -5001404 L907
586 -5006519 L910746 -5020331 L905514 -5028309 L909162 -5030985 L927160 -5026003 L946703 -5010179 L953299 -5018351 L952
912 -5028304 L960042 -5027586 L966471 -5012950 L982602 -5003162 L987730 -5012542 L982867 -5045856 L1004762 -5054480 L10
08424 -5070745 L1027455 -5068399 L1033443 -5075111 L1041403 -5071956 L1062472 -5081871 L1071937 -5081748 L1078621 -5056
360 L1075470 -5045681 L1084522 -5037501 L1081193 -5026224 L1112999 -5003256 L1117173 -4994718 L1127745 -4992628 L114340
1 -5001190 L1151149 -4998434 L1154936 -5009689 L1164463 -5006488 L1169581 -4995288 L1190328 -4999496 L1200562 -5011022 
L1218199 -5017594 L1217295 -5001093 L1221446 -4993152 L1249479 -4981061 L1261856 -4981719 L1285692 -4996673 L1305557 -4
989691 L1318838 -4991072 L1332906 -4968166 L1328137 -4962154 L1332414 -4933747 L1338929 -4931412 L1342248 -4941369 L135
9212 -4943581 L1374274 -4936505 L1365924 -4928320 L1385063 -4906232 L1387577 -4894739 L1396135 -4896286 L1399358 -48857
43 L1411218 -4884814 L1425287 -4894549 L1417940 -4920874 L1424485 -4920717 L1435917 -4939893 L1442512 -4938319 L1450302
 -4927403 L1457222 -4899061 L1499259 -4843626 L1513121 -4843635 L1524624 -4851212 L1523070 -4873391 L1540615 -4887892 L
1558283 -4891915 L1564271 -4898065 L1564535 -4906885 L1573412 -4913630 L1588406 -4897270 L1603542 -4921437 L1614200 -48
90570 L1622934 -4878789 L1650711 -4873344 L1658646 -4863724 L1667681 -4872544 L1679052 -4868232 L1690359 -4874353 Z"]},
"liaoning":{"id":"liaoning","name":"杈藉畞鐪?,"bounds":{"left":732146,"right":1299137,"bottom":4208836,"top":4768536},"view
Box":{"x":523687,"y":-4835701,"width":983909,"height":694029},"paths":["M1299137 -4500494 L1276193 -4470700 L1267957 -4
471288 L1251095 -4459523 L1247957 -4451680 L1236564 -4445331 L1226518 -4433536 L1225318 -4426334 L1198299 -4396391 L119
9129 -4388665 L1185452 -4368426 L1174441 -4362998 L1162344 -4364628 L1155092 -4360052 L1143319 -4363256 L1141869 -43545
98 L1128251 -4345936 L1111018 -4352101 L1110310 -4343581 L1116062 -4342182 L1113765 -4337804 L1097669 -4334682 L1081411
 -4326860 L1068899 -4313101 L1040284 -4294994 L1022171 -4272296 L1029782 -4268153 L1023755 -4259272 L1017182 -4253219 L
1009445 -4256145 L1004028 -4252399 L1010327 -4246157 L1009071 -4241996 L1004305 -4242485 L998137 -4250744 L991454 -4251
334 L984685 -4238385 L995908 -4236135 L994035 -4229011 L967309 -4220712 L951140 -4208865 L945674 -4215738 L943353 -4231
506 L955883 -4238284 L965474 -4248474 L973042 -4245080 L988888 -4256023 L990604 -4260574 L981999 -4264934 L981013 -4273
666 L992232 -4286623 L1007899 -4292595 L967665 -4284283 L949291 -4285020 L956835 -4295854 L972587 -4304981 L972509 -431
6948 L963272 -4332215 L969700 -4339692 L987788 -4349206 L1023510 -4416430 L1007238 -4432340 L993981 -4453834 L991453 -4
466190 L982293 -4478171 L973382 -4475857 L970591 -4468734 L971757 -4460366 L966803 -4456112 L935439 -4457040 L918983 -4
445415 L910641 -4446239 L907144 -4433183 L914575 -4432198 L897168 -4418780 L878817 -4393874 L875868 -4387023 L875842 -4
369667 L846333 -4354423 L830519 -4341870 L804453 -4374071 L800027 -4372965 L800519 -4387839 L794865 -4399978 L771271 -4
396789 L767431 -4403717 L760654 -4404480 L762731 -4413786 L749101 -4410922 L732847 -4425953 L732266 -4438814 L742745 -4
440696 L745531 -4445932 L738469 -4448725 L737885 -4452664 L746387 -4455276 L754050 -4465028 L762087 -4486722 L765906 -4
485670 L768682 -4488637 L765676 -4495537 L771791 -4499027 L768632 -4511228 L772518 -4516403 L762282 -4524459 L764379 -4
572103 L753193 -4583412 L754791 -4590665 L771326 -4606422 L773790 -4598687 L782959 -4589531 L798694 -4585997 L798061 -4
576651 L819342 -4545837 L820654 -4537416 L825682 -4535807 L836211 -4561684 L848956 -4571217 L852684 -4585809 L876500 -4
602519 L889025 -4606030 L894679 -4603940 L922659 -4632256 L937800 -4636160 L947045 -4631155 L959256 -4644206 L961792 -4
656950 L967752 -4666823 L994371 -4663436 L999213 -4665363 L1002776 -4674806 L996113 -4674962 L995521 -4682808 L1007547 
-4682741 L1015810 -4677849 L1036147 -4674653 L1063824 -4689373 L1058553 -4697163 L1066326 -4708910 L1081560 -4716487 L1
089973 -4712920 L1096879 -4768473 L1107531 -4766501 L1108401 -4759598 L1122278 -4750271 L1142250 -4746656 L1144668 -473
8666 L1157276 -4730513 L1152288 -4722337 L1159287 -4717891 L1156509 -4708699 L1167254 -4708756 L1184527 -4738969 L11932
31 -4740846 L1195280 -4706700 L1197857 -4704604 L1200767 -4708120 L1205560 -4707515 L1208539 -4692698 L1219893 -4675727
 L1229810 -4666933 L1229535 -4657456 L1240139 -4653825 L1243171 -4640326 L1246728 -4638993 L1250871 -4643002 L1257553 -
4639343 L1244944 -4619083 L1251644 -4598714 L1251776 -4588329 L1261823 -4590993 L1263495 -4578464 L1270403 -4567253 L12
98687 -4535592 L1293834 -4516644 L1287470 -4506876 L1287514 -4503633 L1295697 -4504315 L1299137 -4500494 Z","M969536 -4
310905 L961837 -4301478 L955921 -4303092 L951493 -4298963 L944574 -4302224 L951212 -4310554 L961539 -4313422 L963491 -4
318033 L969066 -4316117 L969536 -4310905 Z"]},"beijing":{"id":"beijing","name":"鍖椾含甯?,"bounds":{"left":457475,"right":6
24372,"bottom":4255681,"top":4438320},"viewBox":{"x":380392,"y":-4460237,"width":321064,"height":226472},"paths":["M573
289 -4274569 L560101 -4273405 L555951 -4276099 L553735 -4275882 L550149 -4270674 L542314 -4263951 L544473 -4256299 L535
356 -4256692 L528678 -4262113 L525676 -4267890 L504663 -4268989 L497757 -4268401 L493752 -4261195 L488473 -4258419 L483
032 -4261276 L479622 -4266287 L476073 -4268580 L472879 -4269084 L467199 -4267360 L463972 -4278661 L458373 -4285554 L460
323 -4289888 L468148 -4290519 L464274 -4296038 L462499 -4304002 L458758 -4308108 L457619 -4317915 L470894 -4326888 L487
612 -4331068 L491352 -4337516 L498320 -4344638 L494401 -4352005 L480819 -4365610 L477793 -4371607 L480656 -4376618 L485
922 -4381730 L494841 -4383118 L498966 -4381133 L505182 -4384476 L514808 -4395631 L517689 -4404766 L534158 -4403169 L534
938 -4406790 L522990 -4420750 L525458 -4421925 L533035 -4419078 L535853 -4419491 L536516 -4420677 L533324 -4423854 L533
809 -4427750 L543283 -4428269 L546319 -4431503 L546370 -4437644 L547837 -4438320 L550765 -4437059 L551968 -4426835 L579
560 -4400029 L595614 -4400041 L607518 -4397586 L619403 -4402405 L624372 -4398994 L623813 -4395726 L618156 -4393715 L617
240 -4387288 L615075 -4386376 L609799 -4387982 L606160 -4387425 L602044 -4383994 L597758 -4376921 L602038 -4370824 L603
012 -4363603 L606409 -4357335 L607834 -4356208 L612851 -4356550 L614348 -4347663 L613487 -4341885 L607445 -4334982 L589
927 -4326842 L573652 -4327319 L567285 -4319523 L569572 -4307968 L583462 -4299647 L580995 -4290584 L585131 -4279471 L573
289 -4274569 Z"]},"tianjin":{"id":"tianjin","name":"澶╂触甯?,"bounds":{"left":571920,"right":682571,"bottom":4160699,"top"
:4348966},"viewBox":{"x":461766,"y":-4371558,"width":330959,"height":233451},"paths":["M614361 -4346514 L629436 -434896
6 L637479 -4338847 L641501 -4335604 L649544 -4332750 L654214 -4326004 L655122 -4324318 L652577 -4321111 L632722 -432269
7 L631330 -4318987 L631764 -4311727 L635859 -4297632 L638932 -4292101 L643972 -4290134 L642954 -4281108 L651793 -427570
6 L656295 -4280362 L668457 -4279075 L665249 -4261956 L661919 -4258419 L663149 -4255469 L667898 -4258199 L682571 -424735
6 L680670 -4241407 L665793 -4235055 L659778 -4227428 L657209 -4215863 L661022 -4212176 L653606 -4203702 L647830 -419353
1 L645512 -4181926 L645853 -4168152 L637502 -4166547 L621775 -4160699 L618896 -4161801 L618072 -4170340 L615486 -417193
1 L608748 -4165925 L605601 -4165848 L601458 -4178061 L590718 -4172453 L584108 -4173233 L575506 -4181853 L572852 -418653
3 L571930 -4199533 L572307 -4210479 L577334 -4214163 L583693 -4216158 L587427 -4219944 L581891 -4240079 L579560 -425575
3 L575014 -4266487 L573289 -4274569 L583626 -4278061 L585131 -4279471 L584569 -4280968 L587304 -4281652 L590131 -427661
2 L604901 -4278154 L604268 -4294191 L602055 -4299722 L605497 -4303287 L609799 -4304393 L601921 -4309058 L599014 -431658
2 L602764 -4319673 L603629 -4332994 L610235 -4337587 L613487 -4341885 L614361 -4346514 Z"]},"hebei":{"id":"hebei","name
":"娌冲寳鐪?,"bounds":{"left":304313,"right":830519,"bottom":3863237,"top":4616713},"viewBox":{"x":-94860,"y":-4707130,"wid
th":1324552,"height":934311},"paths":["M759831 -4482737 L754050 -4465028 L746387 -4455276 L737885 -4452664 L745531 -444
5932 L742745 -4440696 L732266 -4438814 L733584 -4422892 L749101 -4410922 L762731 -4413786 L760654 -4404480 L767431 -440
3717 L771271 -4396789 L794865 -4399978 L800519 -4387839 L800027 -4372965 L804453 -4374071 L830519 -4341870 L802524 -432
8718 L787942 -4309082 L781103 -4277189 L785901 -4270646 L777653 -4265888 L765837 -4246667 L743877 -4237300 L729590 -424
0032 L708112 -4222266 L702571 -4223168 L691449 -4238052 L680670 -4241407 L682571 -4247356 L676787 -4252266 L667898 -425
8199 L663149 -4255469 L668457 -4279075 L656295 -4280362 L651793 -4275706 L642954 -4281108 L644063 -4289922 L635859 -429
7632 L631330 -4318987 L632722 -4322697 L652577 -4321111 L655122 -4324318 L649544 -4332750 L637479 -4338847 L629436 -434
8966 L614361 -4346514 L612851 -4356550 L607834 -4356208 L603012 -4363603 L597758 -4376921 L606160 -4387425 L617240 -438
7288 L623259 -4400827 L607518 -4397586 L579560 -4400029 L551968 -4426835 L547837 -4438320 L543283 -4428269 L533809 -442
7750 L535853 -4419491 L522990 -4420750 L534158 -4403169 L517689 -4404766 L505182 -4384476 L485922 -4381730 L480656 -437
6618 L477793 -4371607 L480819 -4365610 L498320 -4344638 L487612 -4331068 L470894 -4326888 L457619 -4317915 L468148 -429
0519 L460323 -4289888 L458373 -4285554 L466396 -4268349 L476073 -4268580 L488473 -4258419 L497757 -4268401 L525676 -426
7890 L530774 -4260077 L540244 -4255681 L544473 -4256299 L542314 -4263951 L553735 -4275882 L573289 -4274569 L587427 -421
9944 L572307 -4210479 L575506 -4181853 L584108 -4173233 L602207 -4177783 L605601 -4165848 L617319 -4171227 L619930 -416
1044 L645853 -4168152 L660633 -4142713 L669466 -4135030 L662115 -4123681 L672627 -4125450 L671350 -4120023 L647836 -410
0332 L639633 -4084570 L588775 -4075385 L558481 -4036397 L546191 -4041208 L539782 -4028258 L542377 -4020171 L519809 -401
6232 L510398 -3984559 L494636 -3955331 L470434 -3932903 L465189 -3919859 L466410 -3907818 L483496 -3885938 L484196 -387
9188 L476275 -3878768 L472279 -3870942 L462108 -3881641 L452131 -3883535 L435074 -3863237 L432386 -3873841 L404325 -387
1815 L384419 -3886798 L360139 -3883491 L355048 -3885693 L353941 -3894527 L330327 -3891942 L329693 -3899197 L315497 -390
8409 L317106 -3916524 L312588 -3924843 L306279 -3925878 L305090 -3936490 L313307 -3936432 L333455 -3953770 L329608 -396
3615 L331920 -3984488 L361973 -4041170 L360645 -4048070 L349512 -4049181 L331843 -4098878 L316998 -4103802 L307491 -411
2555 L304540 -4141584 L307394 -4152136 L316264 -4154958 L316533 -4162350 L321866 -4160691 L328171 -4166004 L319221 -419
2993 L344798 -4206621 L350267 -4200117 L359138 -4199982 L377282 -4215976 L373987 -4228057 L383195 -4260597 L371081 -427
0202 L367991 -4291353 L354560 -4289681 L328162 -4308501 L334492 -4316604 L341258 -4316414 L341273 -4327975 L369991 -433
6787 L378139 -4346256 L357794 -4349318 L356164 -4368945 L316321 -4432539 L329689 -4439731 L331122 -4444373 L323302 -445
2767 L320910 -4471602 L333206 -4478072 L349024 -4478912 L345686 -4508229 L351441 -4526595 L366270 -4529167 L366718 -454
1003 L372228 -4549356 L383088 -4546216 L396503 -4552859 L404239 -4517598 L397804 -4512017 L402115 -4502165 L399948 -449
0269 L419217 -4494023 L426694 -4489679 L440482 -4490226 L443281 -4491853 L437306 -4504934 L476878 -4532293 L484067 -453
3114 L495701 -4515859 L520058 -4544003 L524084 -4536646 L532223 -4539579 L537829 -4534365 L557128 -4541863 L562660 -455
3910 L552516 -4565991 L562812 -4567564 L560082 -4589246 L573100 -4598224 L600168 -4601213 L602416 -4610247 L609988 -461
4220 L631381 -4616713 L649498 -4598244 L653353 -4586128 L645595 -4578192 L658339 -4571415 L661445 -4556169 L675126 -456
4497 L681889 -4538621 L677310 -4526786 L665621 -4533263 L662721 -4525514 L670173 -4511447 L681348 -4503680 L688613 -447
8182 L719049 -4485262 L725535 -4490481 L729645 -4480163 L759831 -4482737 Z","M584569 -4280968 L580995 -4290584 L583462 
-4299647 L569572 -4307968 L567285 -4319523 L573652 -4327319 L587789 -4326391 L603629 -4332994 L599590 -4313281 L609799 
-4304393 L602055 -4299722 L604901 -4278154 L590131 -4276612 L584569 -4280968 Z"]},"shanxi":{"id":"shanxi","name":"灞辫タ鐪?
,"bounds":{"left":23287,"right":383195,"bottom":3689180,"top":4391002},"viewBox":{"x":-413633,"y":-4475221,"width":1233
747,"height":870259},"paths":["M341723 -4391002 L356987 -4367128 L357794 -4349318 L378139 -4346256 L369991 -4336787 L34
1273 -4327975 L341258 -4316414 L333613 -4316018 L328367 -4307423 L354560 -4289681 L367991 -4291353 L371081 -4270202 L38
3195 -4260597 L373987 -4228057 L377282 -4215976 L359138 -4199982 L350267 -4200117 L344798 -4206621 L319221 -4192993 L32
8171 -4166004 L321866 -4160691 L316533 -4162350 L316264 -4154958 L307394 -4152136 L304540 -4141584 L307491 -4112555 L31
6998 -4103802 L331843 -4098878 L349512 -4049181 L360645 -4048070 L361973 -4041170 L339333 -3992960 L331920 -3984488 L32
9608 -3963615 L333455 -3953770 L313307 -3936432 L305090 -3936490 L306279 -3925878 L312588 -3924843 L317106 -3916524 L31
5497 -3908409 L329693 -3899197 L330756 -3893686 L330164 -3859212 L325238 -3848954 L327237 -3835715 L320738 -3832273 L32
3898 -3814013 L312678 -3797933 L297159 -3794707 L296844 -3788425 L287982 -3791404 L282259 -3777360 L271049 -3780446 L26
7503 -3770890 L248911 -3762746 L241111 -3768632 L234467 -3765358 L207979 -3765457 L187286 -3770667 L185915 -3742706 L16
4071 -3745278 L149416 -3734556 L140995 -3720189 L105299 -3714821 L83806 -3699738 L71551 -3697853 L56091 -3689369 L28375
 -3691066 L23851 -3694836 L23287 -3706494 L27031 -3737278 L49079 -3791358 L53192 -3810480 L40107 -3865797 L43591 -39139
12 L32153 -3958976 L60872 -3996895 L55752 -4008826 L64670 -4014106 L68423 -4029983 L63059 -4046758 L44664 -4072255 L433
77 -4089728 L51241 -4107600 L73727 -4130758 L75351 -4149278 L87550 -4182796 L95712 -4195673 L100303 -4213458 L107675 -4
221677 L94375 -4230818 L113287 -4237811 L121662 -4258909 L148082 -4254521 L154442 -4258137 L190602 -4331206 L200710 -43
33626 L229831 -4322725 L238692 -4336325 L264794 -4348243 L270297 -4349619 L279293 -4340917 L287357 -4340777 L305162 -43
50873 L314782 -4364044 L322482 -4358235 L331598 -4363753 L335436 -4387242 L341723 -4391002 Z"]},"shaanxi":{"id":"shaanx
i","name":"闄曡タ鐪?,"bounds":{"left":-413594,"right":107834,"bottom":3364466,"top":4253439},"viewBox":{"x":-934252,"y":-43
60116,"width":1562744,"height":1102327},"paths":["M94375 -4230818 L107675 -4221677 L87550 -4182796 L75351 -4149278 L737
27 -4130758 L51241 -4107600 L43377 -4089728 L44664 -4072255 L63059 -4046758 L68423 -4029983 L64670 -4014106 L55752 -400
8826 L60872 -3996895 L32153 -3958976 L43591 -3913912 L40107 -3865797 L53192 -3810480 L27031 -3737278 L23287 -3706494 L2
3851 -3694836 L33473 -3690499 L35659 -3673166 L43310 -3668683 L44009 -3659626 L38712 -3652777 L57501 -3641114 L52690 -3
625368 L60674 -3619385 L55360 -3608523 L71989 -3599138 L77612 -3584912 L90757 -3579589 L94587 -3572838 L95375 -3550520 
L90668 -3536706 L64073 -3523494 L54052 -3528886 L50010 -3538107 L43193 -3528459 L28601 -3526831 L14097 -3532727 L-33955
 -3538243 L-47934 -3532602 L-49337 -3526276 L-20369 -3516321 L-19990 -3496664 L-9739 -3498967 L11907 -3488093 L17440 -3
469146 L3724 -3458837 L-12923 -3463583 L-44331 -3458005 L-40301 -3452049 L-49551 -3439729 L-49066 -3427700 L-38604 -342
0900 L-39026 -3367872 L-59613 -3364466 L-65112 -3365840 L-65584 -3375900 L-91298 -3395761 L-126209 -3411358 L-140431 -3
429985 L-163860 -3429401 L-189531 -3416837 L-217205 -3443862 L-235573 -3447864 L-237712 -3459777 L-243334 -3460674 L-25
3969 -3446918 L-271679 -3456124 L-271665 -3482455 L-301406 -3487577 L-310745 -3479118 L-325284 -3478758 L-332031 -34727
80 L-359143 -3486813 L-361818 -3503916 L-382207 -3498727 L-386573 -3490942 L-406236 -3487144 L-413594 -3509277 L-403405
 -3504837 L-377930 -3513849 L-368375 -3539095 L-388906 -3550592 L-393665 -3563060 L-382594 -3562750 L-377986 -3576021 L
-367139 -3586146 L-355559 -3585421 L-348986 -3578713 L-330580 -3587165 L-322840 -3574274 L-314224 -3584622 L-323121 -36
03696 L-318281 -3610040 L-325764 -3619283 L-319927 -3640875 L-311029 -3640931 L-309961 -3645508 L-313188 -3654875 L-321
836 -3656440 L-317138 -3661093 L-301249 -3656180 L-297501 -3669332 L-315764 -3683393 L-329802 -3685964 L-332168 -369385
1 L-319888 -3700042 L-308292 -3719085 L-315859 -3736099 L-308954 -3750779 L-277595 -3752153 L-261709 -3742059 L-251557 
-3726223 L-238934 -3732577 L-223354 -3727383 L-190847 -3736996 L-208047 -3762235 L-203497 -3771785 L-185893 -3768764 L-
182423 -3763401 L-160804 -3772445 L-139482 -3768836 L-122661 -3782271 L-130090 -3807681 L-130985 -3834869 L-116739 -384
8356 L-113213 -3859888 L-118375 -3874096 L-117045 -3891888 L-131781 -3905930 L-138492 -3901052 L-157345 -3921443 L-1617
81 -3913729 L-174170 -3920132 L-174170 -3925376 L-197025 -3942713 L-213962 -3943979 L-217432 -3949411 L-236948 -3955887
 L-239873 -3976385 L-234810 -3976660 L-232824 -3983076 L-237351 -4002086 L-233424 -4030670 L-215106 -4052421 L-206207 -
4053769 L-201463 -4064469 L-176155 -4051289 L-167603 -4032564 L-106546 -4039311 L-103536 -4078133 L-91531 -4066350 L-82
033 -4082011 L-93906 -4102348 L-83886 -4127388 L-65570 -4144678 L-57322 -4146205 L-58754 -4154543 L-36942 -4170051 L-30
509 -4192725 L-10384 -4201149 L-7860 -4208551 L-12110 -4216620 L-3413 -4211387 L17675 -4219675 L10190 -4238309 L16867 -
4239385 L31046 -4222704 L34768 -4230177 L43641 -4231283 L50056 -4219369 L56814 -4217396 L73713 -4243492 L95012 -4253439
 L89990 -4234259 L94375 -4230818 Z"]},"henan":{"id":"henan","name":"娌冲崡鐪?,"bounds":{"left":32572,"right":603139,"bottom
":3340939,"top":3894527},"viewBox":{"x":-168726,"y":-3960957,"width":973164,"height":686449},"paths":["M330327 -3891942
 L353941 -3894527 L355048 -3885693 L360139 -3883491 L384419 -3886798 L404325 -3871815 L432386 -3873841 L435074 -3863237
 L444657 -3870765 L445741 -3877670 L452131 -3883535 L462108 -3881641 L470650 -3870721 L476275 -3878768 L484196 -3879188
 L481530 -3863319 L473694 -3854564 L472786 -3840889 L475663 -3836896 L483680 -3846981 L536426 -3873558 L529113 -3863576
 L485876 -3825967 L469290 -3797930 L449905 -3789965 L445665 -3778505 L433945 -3766471 L431224 -3748578 L439976 -3744498
 L456161 -3749168 L464460 -3744400 L470075 -3737555 L471329 -3730150 L479947 -3730469 L485463 -3726750 L491978 -3705976
 L498346 -3700796 L525964 -3700607 L542037 -3706288 L555337 -3702286 L561413 -3683052 L574576 -3676978 L576626 -3671616
 L587110 -3675856 L592719 -3673679 L593909 -3662488 L591073 -3655747 L603139 -3640014 L601278 -3633905 L587692 -3626891
 L584619 -3618918 L563047 -3609570 L552266 -3617146 L543504 -3640693 L533756 -3642477 L530379 -3637830 L525095 -3645671
 L512563 -3644291 L505184 -3634030 L505568 -3628190 L511188 -3623213 L508439 -3599843 L511188 -3589609 L486476 -3582033
 L484982 -3541041 L469639 -3531653 L459313 -3531681 L452281 -3537385 L449021 -3532789 L452433 -3523966 L449614 -3516459
 L471732 -3510415 L478300 -3505270 L478540 -3477209 L486876 -3470784 L489706 -3469414 L499093 -3474656 L510454 -3460869
 L515132 -3457545 L521889 -3458000 L525574 -3467609 L535627 -3466956 L541889 -3478107 L546216 -3479297 L540394 -3461833
 L549081 -3434433 L550290 -3390585 L535790 -3388625 L514095 -3374810 L502554 -3354173 L502813 -3345360 L496032 -3340939
 L487249 -3344971 L488437 -3359757 L481212 -3365745 L477658 -3365351 L469442 -3349587 L460834 -3351759 L452383 -3346867
 L447282 -3355540 L435336 -3362369 L428096 -3361105 L428865 -3377954 L426445 -3382379 L406812 -3381063 L393149 -3392329
 L384106 -3386919 L381942 -3380039 L369406 -3374872 L370359 -3390738 L360172 -3387942 L346535 -3416314 L351567 -3421580
 L346390 -3451409 L337339 -3449501 L329815 -3435665 L324088 -3434801 L311835 -3436674 L296126 -3450155 L290739 -3444690
 L281768 -3448933 L254691 -3440029 L234627 -3446054 L225149 -3439492 L214059 -3437255 L201891 -3448579 L197345 -3445589
 L150714 -3471080 L143254 -3469572 L132824 -3480524 L136758 -3489127 L121387 -3494603 L111748 -3501844 L113910 -3513138
 L91050 -3535602 L95375 -3550520 L94587 -3572838 L90757 -3579589 L77612 -3584912 L71989 -3599138 L55360 -3608523 L60674
 -3619385 L52690 -3625368 L57501 -3641114 L38712 -3652777 L44528 -3661909 L43310 -3668683 L37379 -3670410 L33674 -36782
04 L33473 -3690499 L56091 -3689369 L71551 -3697853 L83806 -3699738 L105299 -3714821 L138309 -3719009 L149416 -3734556 L
164071 -3745278 L185915 -3742706 L187286 -3770667 L207979 -3765457 L234467 -3765358 L241111 -3768632 L248911 -3762746 L
267503 -3770890 L271049 -3780446 L282259 -3777360 L287982 -3791404 L296844 -3788425 L297159 -3794707 L305761 -3799016 L
312678 -3797933 L323898 -3814013 L320738 -3832273 L327237 -3835715 L325238 -3848954 L330164 -3859212 L330327 -3891942 Z
"]},"shandong":{"id":"shandong","name":"灞变笢鐪?,"bounds":{"left":431224,"right":1101153,"bottom":3696142,"top":4125450},"
viewBox":{"x":350833,"y":-4203779,"width":830712,"height":585966},"paths":["M484196 -3879188 L481284 -3892698 L466410 -
3907818 L465189 -3919859 L470434 -3932903 L494636 -3955331 L510398 -3984559 L519809 -4016232 L542377 -4020171 L539782 -
4028258 L546191 -4041208 L558481 -4036397 L588775 -4075385 L639633 -4084570 L647836 -4100332 L669304 -4116954 L672627 -
4125450 L677379 -4122169 L677042 -4111753 L690666 -4111085 L693847 -4100348 L701067 -4096549 L706688 -4115247 L720016 -
4111380 L729002 -4117608 L727062 -4107677 L736704 -4103606 L741636 -4113234 L755256 -4124020 L759338 -4120495 L756670 -
4110779 L759029 -4107373 L769699 -4116190 L775067 -4098260 L768804 -4085889 L783604 -4079478 L774717 -4061170 L774877 -
4046429 L763858 -4032570 L776150 -4033064 L799632 -4012110 L836678 -4012176 L851528 -4019253 L860918 -4035691 L855974 -
4045490 L880871 -4062248 L901234 -4092362 L917901 -4096775 L925788 -4105106 L942202 -4105632 L953058 -4094367 L962330 -
4095234 L963362 -4085593 L967376 -4081866 L977906 -4083042 L982295 -4088953 L987399 -4087659 L989261 -4085277 L984143 -
4083701 L984436 -4080533 L1000936 -4068004 L1028126 -4075139 L1047314 -4088823 L1051595 -4087345 L1053201 -4075037 L109
7376 -4078762 L1101004 -4075920 L1092026 -4072308 L1089347 -4067062 L1095771 -4050534 L1084573 -4045478 L1078792 -40342
11 L1080531 -4028313 L1093917 -4035545 L1091695 -4022023 L1084133 -4013716 L1074982 -4009035 L1064255 -4009877 L1060587
 -4019735 L1063929 -4032182 L1051197 -4014268 L1047885 -4023101 L1040611 -4027018 L1016905 -3997875 L1016193 -3991249 L
1004961 -3993493 L1014822 -4002574 L1010446 -4003798 L997185 -3985780 L981490 -3980140 L967531 -3968382 L959451 -396773
0 L956224 -3975851 L945490 -3971740 L944492 -3961828 L960283 -3963546 L963017 -3956870 L956362 -3943046 L951782 -395253
3 L940408 -3950469 L935777 -3933864 L942587 -3912793 L909257 -3902096 L914437 -3917487 L909946 -3926312 L898584 -391972
0 L889062 -3920265 L888890 -3908789 L897806 -3902370 L899484 -3892741 L908081 -3897143 L909042 -3892193 L901435 -388284
5 L887488 -3877888 L889501 -3864959 L878920 -3865307 L879160 -3849868 L869241 -3854453 L855395 -3845576 L851111 -381992
0 L838808 -3808817 L836243 -3786561 L831080 -3784412 L827305 -3788214 L813599 -3776937 L791971 -3772791 L781239 -374191
8 L787036 -3739137 L779494 -3735272 L770280 -3737690 L762290 -3734863 L756047 -3701294 L738663 -3697760 L729413 -371692
2 L729592 -3724783 L717953 -3727849 L704159 -3724088 L704014 -3708799 L693452 -3710155 L678595 -3702074 L671325 -370413
2 L661962 -3713845 L656083 -3710278 L653228 -3698198 L649322 -3696142 L643250 -3710901 L636775 -3712825 L639367 -371988
4 L632604 -3731544 L611119 -3751707 L606778 -3745851 L577534 -3739903 L570740 -3726360 L574968 -3716602 L562598 -370983
3 L562412 -3703583 L542037 -3706288 L528610 -3701059 L506256 -3699897 L494930 -3702953 L485463 -3726750 L471329 -373015
0 L464460 -3744400 L456161 -3749168 L439976 -3744498 L431224 -3748578 L433945 -3766471 L445665 -3778505 L449905 -378996
5 L469290 -3797930 L485876 -3825967 L536426 -3873558 L483680 -3846981 L475663 -3836896 L472786 -3840889 L473694 -385456
4 L481530 -3863319 L484196 -3879188 Z"]},"jiangsu":{"id":"jiangsu","name":"姹熻嫃鐪?,"bounds":{"left":570740,"right":110893
7,"bottom":3310867,"top":3788214},"viewBox":{"x":420269,"y":-3845496,"width":839138,"height":591910},"paths":["M574968 
-3716602 L570740 -3726360 L577534 -3739903 L606778 -3745851 L611119 -3751707 L632604 -3731544 L639367 -3719884 L636775 
-3712825 L643250 -3710901 L645757 -3699092 L649322 -3696142 L653228 -3698198 L656083 -3710278 L661962 -3713845 L671325 
-3704132 L678595 -3702074 L693452 -3710155 L704014 -3708799 L704159 -3724088 L717953 -3727849 L729592 -3724783 L729413 
-3716922 L738663 -3697760 L756047 -3701294 L762290 -3734863 L770280 -3737690 L779494 -3735272 L787036 -3739137 L781239 
-3741918 L787489 -3754039 L791971 -3772791 L797327 -3775891 L813599 -3776937 L828465 -3787728 L831080 -3784412 L825012 
-3778152 L825113 -3744424 L833917 -3749537 L849343 -3746058 L851075 -3739110 L865446 -3730003 L928087 -3705386 L935787 
-3683129 L965574 -3622821 L970486 -3601756 L981287 -3591660 L990546 -3569309 L998721 -3564626 L1002809 -3548135 L100091
5 -3541606 L996119 -3542758 L996669 -3538901 L1011483 -3515819 L1013536 -3513002 L1021938 -3513013 L1048680 -3502875 L1
051889 -3497889 L1051441 -3489758 L1055399 -3486533 L1050161 -3483178 L1050534 -3480558 L1094236 -3459439 L1106941 -343
9666 L1108432 -3429836 L1084156 -3433276 L1052182 -3448001 L1029965 -3439424 L1021437 -3432270 L1021679 -3427561 L10441
11 -3416578 L1057600 -3402303 L1045415 -3397057 L1038071 -3383875 L1036435 -3361306 L1022548 -3352860 L1025755 -3343181
 L1007633 -3333840 L1011458 -3321836 L998182 -3321590 L987972 -3310867 L974048 -3324186 L973814 -3329619 L961993 -33261
29 L953077 -3326908 L938863 -3335735 L930796 -3350021 L916923 -3349802 L906951 -3346982 L905227 -3342650 L898949 -33433
63 L881796 -3346409 L877247 -3359000 L868811 -3354457 L859108 -3358068 L852753 -3351158 L842055 -3347693 L824612 -33470
36 L816131 -3356132 L819038 -3362859 L827436 -3365768 L828645 -3392191 L818958 -3398173 L815605 -3389967 L807395 -33899
40 L809001 -3401491 L803542 -3405390 L795735 -3401653 L790770 -3407273 L787219 -3418774 L778124 -3422880 L779396 -34389
35 L788104 -3452505 L801111 -3456806 L802263 -3459880 L802225 -3483776 L794865 -3485674 L791246 -3498019 L816519 -35017
66 L842113 -3487184 L850183 -3503069 L846961 -3527547 L835789 -3530721 L829242 -3543219 L821512 -3543047 L812664 -35407
36 L811651 -3531430 L805862 -3528226 L806262 -3516763 L770910 -3510674 L755782 -3529318 L758056 -3534931 L763525 -35368
09 L757451 -3541983 L750878 -3562724 L747820 -3563880 L746555 -3559941 L736544 -3554624 L726467 -3565619 L742609 -36171
29 L741515 -3624354 L736635 -3625336 L720003 -3619683 L703561 -3621357 L700827 -3623616 L703212 -3637965 L696685 -36390
18 L693152 -3653205 L685231 -3647295 L681404 -3655675 L670453 -3651497 L661230 -3658185 L649974 -3654903 L641559 -36581
98 L634774 -3664381 L637661 -3671144 L630669 -3674385 L629359 -3685403 L624706 -3691211 L611172 -3689675 L592034 -36961
31 L574968 -3716602 Z","M1063636 -3432104 L1058576 -3431020 L1055939 -3439025 L1063636 -3432104 Z"]},"anhui":{"id":"anh
ui","name":"瀹夊窘鐪?,"bounds":{"left":448683,"right":905227,"bottom":3137560,"top":3717299},"viewBox":{"x":167387,"y":-378
6868,"width":1019135,"height":718877},"paths":["M574968 -3716602 L592034 -3696131 L611172 -3689675 L624706 -3691211 L62
9359 -3685403 L630669 -3674385 L637661 -3671144 L634774 -3664381 L641559 -3658198 L649974 -3654903 L661230 -3658185 L67
0453 -3651497 L681404 -3655675 L685231 -3647295 L693152 -3653205 L696685 -3639018 L703212 -3637965 L700827 -3623616 L70
3561 -3621357 L720003 -3619683 L741515 -3624354 L742609 -3617129 L726467 -3565619 L736544 -3554624 L746555 -3559941 L74
7820 -3563880 L750878 -3562724 L757451 -3541983 L763525 -3536809 L758056 -3534931 L755782 -3529318 L770910 -3510674 L80
6262 -3516763 L805862 -3528226 L811651 -3531430 L812664 -3540736 L821512 -3543047 L829242 -3543219 L835789 -3530721 L84
6961 -3527547 L850183 -3503069 L842113 -3487184 L816519 -3501766 L791246 -3498019 L794865 -3485674 L802225 -3483776 L80
2263 -3459880 L801111 -3456806 L788104 -3452505 L779396 -3438935 L778124 -3422880 L787219 -3418774 L795735 -3401653 L80
3542 -3405390 L809001 -3401491 L807395 -3389940 L815605 -3389967 L818958 -3398173 L828645 -3392191 L827436 -3365768 L81
9038 -3362859 L816131 -3356132 L824612 -3347036 L842055 -3347693 L852753 -3351158 L859108 -3358068 L868811 -3354457 L87
7247 -3359000 L881796 -3346409 L905227 -3342650 L904882 -3331547 L901405 -3308869 L891639 -3287695 L885989 -3290874 L87
3659 -3283475 L875323 -3275206 L884263 -3275821 L885924 -3263373 L892279 -3258588 L877779 -3253590 L872122 -3245511 L84
9897 -3250447 L843420 -3248327 L844780 -3232842 L839399 -3228273 L847694 -3206612 L841121 -3195305 L835702 -3194415 L83
2366 -3186851 L833217 -3176662 L828069 -3169738 L816131 -3166705 L799905 -3150356 L794918 -3150380 L788753 -3137560 L77
1452 -3153919 L746902 -3154017 L737468 -3151163 L732140 -3156523 L722710 -3153965 L713291 -3163414 L709828 -3179780 L69
4990 -3178861 L691043 -3187386 L685773 -3189328 L674899 -3178836 L677914 -3173079 L674172 -3162270 L659807 -3156582 L65
4673 -3148516 L650362 -3147480 L645528 -3152979 L638706 -3147927 L634847 -3162765 L642039 -3172924 L652403 -3177013 L65
7232 -3187688 L649864 -3195957 L634749 -3201213 L627766 -3198899 L623218 -3181344 L617043 -3180640 L596266 -3167122 L59
2291 -3171396 L585412 -3170142 L572284 -3216384 L560380 -3224150 L558261 -3231685 L563156 -3237815 L558233 -3243188 L55
7168 -3254927 L547694 -3262739 L544493 -3270263 L552296 -3288133 L572291 -3296831 L572403 -3300997 L560886 -3306633 L55
1848 -3316965 L541525 -3314474 L532268 -3323862 L521422 -3317879 L513078 -3334008 L502417 -3340142 L502554 -3354173 L51
4095 -3374810 L535790 -3388625 L550290 -3390585 L549081 -3434433 L540394 -3461833 L546216 -3479297 L541889 -3478107 L53
5627 -3466956 L525574 -3467609 L521889 -3458000 L515132 -3457545 L510454 -3460869 L499093 -3474656 L489706 -3469414 L48
6876 -3470784 L478540 -3477209 L478300 -3505270 L471732 -3510415 L449614 -3516459 L452433 -3523966 L449021 -3532789 L45
2281 -3537385 L459313 -3531681 L469639 -3531653 L484982 -3541041 L486476 -3582033 L511188 -3589609 L508439 -3599843 L51
1188 -3623213 L505568 -3628190 L505184 -3634030 L512563 -3644291 L525095 -3645671 L530379 -3637830 L533756 -3642477 L54
3504 -3640693 L552266 -3617146 L563047 -3609570 L584619 -3618918 L587692 -3626891 L602610 -3635784 L602586 -3642483 L59
1073 -3655747 L593909 -3662488 L592719 -3673679 L587110 -3675856 L576626 -3671616 L574576 -3676978 L561413 -3683052 L55
6365 -3694346 L555337 -3702286 L562412 -3703583 L562598 -3709833 L574968 -3716602 Z"]},"hubei":{"id":"hubei","name":"婀栧
寳鐪?,"bounds":{"left":-154897,"right":585412,"bottom":3072268,"top":3538243},"viewBox":{"x":-243734,"y":-3629019,"width"
:917983,"height":647526},"paths":["M90668 -3536706 L113910 -3513138 L111748 -3501844 L136758 -3489127 L132824 -3480524 
L143254 -3469572 L150714 -3471080 L197345 -3445589 L201891 -3448579 L214059 -3437255 L234627 -3446054 L254691 -3440029 
L281768 -3448933 L290739 -3444690 L296126 -3450155 L311835 -3436674 L324088 -3434801 L329815 -3435665 L337339 -3449501 
L346390 -3451409 L351567 -3421580 L346535 -3416314 L360172 -3387942 L370359 -3390738 L369406 -3374872 L381942 -3380039 
L390956 -3392279 L406812 -3381063 L426445 -3382379 L428096 -3361105 L435336 -3362369 L448511 -3354513 L453241 -3346762 
L460834 -3351759 L469442 -3349587 L481212 -3365745 L488437 -3359757 L487249 -3344971 L496032 -3340939 L501651 -3343865 
L503463 -3338315 L513078 -3334008 L521422 -3317879 L532268 -3323862 L541525 -3314474 L551848 -3316965 L573026 -3298423 
L552296 -3288133 L544493 -3270263 L557168 -3254927 L558233 -3243188 L563156 -3237815 L558261 -3231685 L560380 -3224150 
L572284 -3216384 L585412 -3170142 L567574 -3159042 L542989 -3171699 L527499 -3169460 L519468 -3152931 L506120 -3143892 
L489651 -3148945 L490977 -3139500 L497454 -3138029 L493311 -3130140 L475056 -3134809 L467016 -3125136 L467321 -3122027 
L472985 -3124149 L470864 -3117175 L456549 -3112661 L447283 -3115397 L431911 -3107214 L412318 -3108671 L407193 -3094988 
L391541 -3090854 L380162 -3072746 L375246 -3072268 L366438 -3080210 L361899 -3075713 L355944 -3076869 L350349 -3085557 
L353892 -3092216 L346194 -3093836 L351724 -3111218 L358626 -3113299 L361184 -3122670 L354370 -3126146 L357491 -3133594 
L351749 -3140199 L339179 -3143743 L339570 -3160093 L325618 -3147844 L301520 -3114983 L290810 -3121555 L282047 -3118634 
L276205 -3152956 L256260 -3130921 L234481 -3133931 L219413 -3118990 L215357 -3135344 L197794 -3139132 L195569 -3149226 
L170112 -3164067 L159115 -3160915 L142505 -3165531 L133659 -3163484 L120855 -3176402 L89311 -3180716 L86061 -3186858 L7
2734 -3187827 L67884 -3178031 L61934 -3182387 L47852 -3180306 L52179 -3173979 L47935 -3161705 L59985 -3149403 L54791 -3
141155 L35904 -3130874 L27265 -3134921 L16725 -3148989 L-17914 -3145585 L-28867 -3129511 L-44999 -3130823 L-57169 -3116
105 L-60530 -3098540 L-71255 -3080056 L-74618 -3076963 L-82387 -3079977 L-89194 -3105153 L-105131 -3100067 L-108622 -31
30828 L-125365 -3138952 L-130947 -3157601 L-135221 -3156735 L-143775 -3141155 L-149423 -3143427 L-153905 -3152991 L-153
867 -3158599 L-140895 -3162293 L-138476 -3202483 L-151323 -3215304 L-147661 -3230248 L-134642 -3224447 L-126605 -323955
2 L-121322 -3237994 L-120257 -3232183 L-111286 -3233712 L-89245 -3248686 L-82525 -3247617 L-85119 -3239664 L-80684 -323
4791 L-64059 -3247194 L-59696 -3230228 L-45044 -3248918 L-37594 -3247829 L-31983 -3258810 L-11652 -3274042 L3460 -32731
18 L9192 -3265766 L14112 -3276821 L12174 -3293937 L18937 -3303518 L12848 -3329503 L3989 -3332646 L-2677 -3344505 L-2291
7 -3344912 L-25461 -3362268 L-38229 -3365993 L-38604 -3420900 L-48549 -3426489 L-49613 -3438314 L-40301 -3452049 L-4311
7 -3458861 L-12923 -3463583 L3724 -3458837 L7758 -3465621 L16376 -3467548 L12023 -3487882 L-9739 -3498967 L-19333 -3496
229 L-20369 -3516321 L-50296 -3528359 L-45938 -3534880 L-33955 -3538243 L14097 -3532727 L28601 -3526831 L43193 -3528459
 L50010 -3538107 L54052 -3528886 L64073 -3523494 L90668 -3536706 Z"]},"sichuan":{"id":"sichuan","name":"鍥涘窛鐪?,"bounds":
{"left":-1161673,"right":-134305,"bottom":2765190,"top":3717971},"viewBox":{"x":-1485445,"y":-3832304,"width":1674913,"
height":1181448},"paths":["M-749434 -3598302 L-743504 -3609361 L-736354 -3590881 L-752151 -3569142 L-746432 -3562316 L-
748611 -3554345 L-713884 -3561609 L-712891 -3576530 L-690443 -3587013 L-689068 -3596941 L-698691 -3607327 L-705717 -363
6196 L-714576 -3645360 L-710452 -3649332 L-690844 -3645841 L-681965 -3661169 L-667157 -3656340 L-670606 -3667875 L-6509
83 -3680339 L-638420 -3680045 L-633729 -3666175 L-622994 -3663755 L-618769 -3654327 L-621747 -3622017 L-602004 -3614354
 L-590057 -3621150 L-589472 -3607466 L-580467 -3610840 L-534034 -3597094 L-526920 -3571565 L-510225 -3561865 L-518397 -
3559475 L-514482 -3539204 L-519523 -3534316 L-511139 -3527298 L-525134 -3512514 L-511787 -3498190 L-469856 -3478325 L-4
57007 -3482294 L-448972 -3475759 L-418239 -3492043 L-425195 -3504655 L-418758 -3512606 L-404464 -3486224 L-361818 -3503
916 L-359143 -3486813 L-332031 -3472780 L-301406 -3487577 L-271665 -3482455 L-271679 -3456124 L-253969 -3446918 L-24333
4 -3460674 L-237712 -3459777 L-235573 -3447864 L-217205 -3443862 L-189531 -3416837 L-163860 -3429401 L-140431 -3429985 
L-136563 -3423038 L-150992 -3418910 L-145925 -3406475 L-152503 -3406508 L-150725 -3396653 L-161343 -3398315 L-154271 -3
384433 L-136226 -3373148 L-134305 -3360036 L-154636 -3345868 L-168216 -3344168 L-171603 -3326909 L-188339 -3311118 L-18
0731 -3308642 L-195193 -3284535 L-190563 -3275256 L-199491 -3265878 L-206348 -3263639 L-215179 -3274277 L-231554 -32732
38 L-238273 -3259864 L-236114 -3244693 L-278189 -3182854 L-311953 -3183149 L-327372 -3214777 L-355782 -3202405 L-377143
 -3219261 L-398703 -3225622 L-418597 -3199745 L-418560 -3192935 L-399337 -3182400 L-408662 -3164586 L-418740 -3163907 L
-424527 -3153760 L-452010 -3137184 L-449886 -3127907 L-438234 -3116491 L-436540 -3104503 L-413277 -3105112 L-411894 -30
67457 L-392161 -3066750 L-362730 -3052870 L-348763 -3009020 L-356088 -3008574 L-388871 -3039893 L-399982 -3023437 L-417
969 -3023091 L-424449 -3010931 L-421924 -2991597 L-407626 -2991856 L-401877 -2973522 L-394213 -2969390 L-370889 -297101
8 L-357629 -2948991 L-361587 -2935410 L-373852 -2928588 L-382665 -2932661 L-427624 -2920621 L-439273 -2932475 L-460351 
-2928081 L-465391 -2944628 L-460665 -2956238 L-481463 -2971197 L-500957 -2950156 L-529615 -2945137 L-554960 -2969140 L-
539726 -2981516 L-545429 -2984458 L-540672 -2991591 L-546768 -3000341 L-557433 -3001957 L-557271 -3022963 L-540266 -303
4128 L-557290 -3038173 L-585561 -3034513 L-595427 -3041670 L-602529 -3026344 L-596087 -3001284 L-611914 -2990527 L-6226
02 -2996016 L-637441 -2983393 L-639367 -2972479 L-628022 -2965967 L-636132 -2946857 L-657994 -2929714 L-674654 -2905838
 L-694396 -2906658 L-698427 -2897073 L-702634 -2864247 L-692854 -2826704 L-697274 -2789516 L-708129 -2790874 L-728327 -
2775999 L-735468 -2781631 L-732899 -2790709 L-740335 -2793696 L-786538 -2766263 L-811288 -2765190 L-819567 -2782592 L-8
33322 -2784898 L-836574 -2793362 L-827659 -2797392 L-833526 -2809322 L-853588 -2823256 L-838702 -2846263 L-853136 -2845
904 L-848529 -2859578 L-869464 -2881464 L-869550 -2896318 L-878327 -2901226 L-894796 -2938713 L-890894 -2946625 L-90136
6 -2954985 L-909099 -2980970 L-922348 -2972008 L-931892 -2978913 L-946118 -2963326 L-947176 -2978737 L-959226 -2986918 
L-968126 -3013610 L-955273 -3020602 L-953147 -3033291 L-964056 -3039158 L-972612 -3062219 L-991172 -3079214 L-990034 -3
093115 L-1000406 -3090326 L-1011234 -3071485 L-1024662 -3062980 L-1030039 -3018903 L-1047808 -3047965 L-1050515 -309177
1 L-1045526 -3144480 L-1051274 -3194527 L-1041413 -3221355 L-1046729 -3290787 L-1040718 -3314523 L-1055599 -3331743 L-1
052521 -3343728 L-1068690 -3366859 L-1064091 -3383586 L-1052557 -3374134 L-1040616 -3386206 L-1077773 -3442620 L-107522
9 -3460571 L-1092754 -3503201 L-1158287 -3553154 L-1161673 -3573982 L-1157040 -3580853 L-1145543 -3580444 L-1141353 -35
89222 L-1147917 -3599142 L-1127051 -3622241 L-1117670 -3625081 L-1144676 -3648914 L-1146780 -3674485 L-1142950 -3683004
 L-1119001 -3684049 L-1113614 -3706129 L-1098435 -3717971 L-1083236 -3702193 L-1049744 -3693871 L-1048707 -3671216 L-10
26754 -3623772 L-1020855 -3584450 L-990967 -3567237 L-984955 -3550157 L-965623 -3544888 L-946105 -3526716 L-936340 -355
1993 L-926830 -3560500 L-909112 -3537735 L-912221 -3516343 L-903884 -3510182 L-896624 -3523648 L-884135 -3522336 L-8736
67 -3504032 L-861953 -3497105 L-855960 -3505136 L-857928 -3513645 L-835751 -3503005 L-825948 -3509469 L-812507 -3509128
 L-806419 -3525818 L-815915 -3535819 L-815047 -3544518 L-806639 -3547701 L-815124 -3569577 L-799958 -3576574 L-789245 -
3560195 L-786105 -3569184 L-779095 -3568760 L-765577 -3554047 L-756144 -3570843 L-763231 -3576861 L-761640 -3585690 L-7
49725 -3590988 L-749434 -3598302 Z"]},"chongqing":{"id":"chongqing","name":"閲嶅簡甯?,"bounds":{"left":-452010,"right":1893
7,"bottom":2966193,"top":3423038},"viewBox":{"x":-618085,"y":-3477859,"width":803096,"height":566487},"paths":["M-13656
3 -3423038 L-126209 -3411358 L-116607 -3409828 L-91298 -3395761 L-65584 -3375900 L-67482 -3370417 L-64274 -3365218 L-39
026 -3367872 L-26964 -3363797 L-22917 -3344912 L-2677 -3344505 L3989 -3332646 L12848 -3329503 L18937 -3303518 L12174 -3
293937 L14112 -3276821 L9192 -3265766 L5269 -3267655 L3460 -3273118 L-11652 -3274042 L-31983 -3258810 L-37594 -3247829 
L-45044 -3248918 L-59696 -3230228 L-61932 -3233011 L-60114 -3239010 L-64059 -3247194 L-80684 -3234791 L-85119 -3239664 
L-82525 -3247617 L-89245 -3248686 L-94758 -3247529 L-111286 -3233712 L-120257 -3232183 L-121322 -3237994 L-126605 -3239
552 L-134642 -3224447 L-146021 -3230802 L-148533 -3227543 L-151323 -3215304 L-138476 -3202483 L-141282 -3160728 L-15171
7 -3159790 L-154897 -3156919 L-149423 -3143427 L-141799 -3142177 L-139803 -3150473 L-135221 -3156735 L-130947 -3157601 
L-125365 -3138952 L-108622 -3130828 L-106531 -3121776 L-108448 -3112160 L-105131 -3100067 L-89194 -3105153 L-84013 -309
1188 L-84308 -3081739 L-74618 -3076963 L-66600 -3065561 L-74429 -3046149 L-71926 -3035222 L-67606 -3030113 L-78105 -301
8565 L-75834 -3016487 L-68111 -3017469 L-65552 -3014382 L-68945 -3012491 L-71639 -3003242 L-81434 -2995612 L-86907 -296
9243 L-100794 -2966193 L-106811 -2972221 L-122325 -2971999 L-124356 -2980331 L-118266 -2990291 L-120863 -3000173 L-1274
84 -3005003 L-132014 -3000021 L-129999 -2986767 L-137845 -2987934 L-138510 -3005370 L-134789 -3020514 L-138582 -3022779
 L-149911 -3020457 L-158771 -3024130 L-156425 -3037184 L-162879 -3070111 L-170664 -3065549 L-187239 -3071882 L-200033 -
3065912 L-203650 -3060354 L-207072 -3060536 L-210676 -3062187 L-212283 -3078238 L-215504 -3083037 L-218741 -3084224 L-2
23939 -3078816 L-230074 -3081525 L-232175 -3086858 L-242392 -3083631 L-246724 -3084946 L-254158 -3072772 L-248012 -3055
707 L-264779 -3039765 L-268308 -3039684 L-270091 -3046758 L-289186 -3047982 L-292195 -3039077 L-297957 -3040589 L-30989
9 -3038201 L-303882 -3028037 L-307228 -3019627 L-312752 -3021919 L-316852 -3020278 L-319664 -3005306 L-331834 -3008875 
L-325669 -3027214 L-341305 -3050000 L-337156 -3025102 L-334347 -3020535 L-339690 -3014909 L-344791 -3017340 L-349100 -3
013780 L-355467 -3025128 L-362730 -3052870 L-367633 -3057073 L-392161 -3066750 L-403591 -3063714 L-411894 -3067457 L-41
0495 -3085519 L-413277 -3105112 L-416263 -3106369 L-424925 -3103318 L-437568 -3105154 L-438234 -3116491 L-448008 -31238
69 L-452010 -3137184 L-444984 -3143599 L-424527 -3153760 L-418740 -3163907 L-409853 -3163761 L-407409 -3166131 L-399386
 -3183255 L-409407 -3186682 L-419707 -3196234 L-406493 -3209584 L-406646 -3217785 L-400899 -3225145 L-377143 -3219261 L
-355782 -3202405 L-327372 -3214777 L-311953 -3183149 L-305072 -3180105 L-283455 -3180417 L-278189 -3182854 L-236114 -32
44693 L-234694 -3250109 L-238273 -3259864 L-231554 -3273238 L-215179 -3274277 L-206348 -3263639 L-199491 -3265878 L-190
563 -3275256 L-194747 -3278370 L-195193 -3284535 L-180731 -3308642 L-188339 -3311118 L-171603 -3326909 L-168216 -334416
8 L-163888 -3346633 L-154636 -3345868 L-143876 -3356633 L-134305 -3360036 L-136226 -3373148 L-141938 -3373702 L-154271 
-3384433 L-161343 -3398315 L-159254 -3400959 L-151150 -3396098 L-152503 -3406508 L-145925 -3406475 L-146982 -3414871 L-
150992 -3418910 L-136563 -3423038 Z"]},"hunan":{"id":"hunan","name":"婀栧崡鐪?,"bounds":{"left":-121706,"right":421920,"bot
tom":2575984,"top":3187827},"viewBox":{"x":-387679,"y":-3261249,"width":1075572,"height":758686},"paths":["M-74618 -307
6963 L-60530 -3098540 L-61280 -3107232 L-57169 -3116105 L-48310 -3127408 L-43423 -3131991 L-34144 -3128127 L-28867 -312
9511 L-17914 -3145585 L16725 -3148989 L24115 -3143153 L27265 -3134921 L35904 -3130874 L54791 -3141155 L59985 -3149403 L
47935 -3161705 L47027 -3166767 L52179 -3173979 L47852 -3180306 L61934 -3182387 L67884 -3178031 L71951 -3180477 L72734 -
3187827 L86061 -3186858 L89311 -3180716 L120855 -3176402 L133659 -3163484 L142505 -3165531 L149039 -3161297 L159115 -31
60915 L170112 -3164067 L195569 -3149226 L197794 -3139132 L215357 -3135344 L219849 -3128210 L219413 -3118990 L234481 -31
33931 L256260 -3130921 L276205 -3152956 L282047 -3118634 L290810 -3121555 L301520 -3114983 L325618 -3147844 L339570 -31
60093 L339179 -3143743 L351749 -3140199 L357491 -3133594 L354370 -3126146 L361184 -3122670 L358626 -3113299 L351724 -31
11218 L346194 -3093836 L353892 -3092216 L350349 -3085557 L355944 -3076869 L361899 -3075713 L366438 -3080210 L370599 -30
74557 L380162 -3072746 L380724 -3059991 L387706 -3061700 L392326 -3051163 L402387 -3051153 L397953 -3019935 L410665 -30
10118 L414561 -2997471 L402454 -2981691 L387265 -2974128 L392577 -2962173 L368305 -2950429 L364839 -2942970 L366435 -29
33908 L353726 -2913879 L351746 -2902584 L357389 -2882064 L365804 -2880552 L381276 -2884194 L372345 -2855563 L378742 -28
53593 L387824 -2837553 L380809 -2822459 L382490 -2807548 L405938 -2796843 L403455 -2768447 L392506 -2756853 L392911 -27
52722 L416997 -2757323 L421920 -2753121 L407871 -2746148 L401319 -2734154 L402893 -2723097 L393096 -2702709 L399819 -26
84573 L396640 -2672257 L391278 -2670507 L384027 -2658603 L373351 -2660042 L362966 -2656879 L340173 -2664899 L328890 -26
77366 L316425 -2673607 L310409 -2661639 L304312 -2658673 L295605 -2655160 L288097 -2658391 L289947 -2646270 L298306 -26
46699 L304549 -2641853 L300282 -2634966 L304374 -2616383 L301667 -2609556 L280632 -2607029 L268010 -2632382 L255601 -26
33640 L246757 -2639366 L241707 -2633897 L236085 -2640063 L219152 -2638736 L214922 -2613772 L219364 -2607488 L217753 -25
96230 L211545 -2595925 L204061 -2587713 L171595 -2590862 L165016 -2581160 L156200 -2575984 L144779 -2580279 L148985 -25
92388 L145463 -2611615 L148062 -2617568 L141148 -2630568 L127134 -2630068 L112256 -2619177 L108491 -2607950 L101689 -26
05110 L95734 -2620908 L100035 -2631060 L110084 -2638474 L112265 -2646564 L127852 -2663467 L132611 -2679283 L130934 -269
5035 L141780 -2701429 L148711 -2711059 L146169 -2714010 L133852 -2714337 L126784 -2709729 L119980 -2722223 L127196 -273
6101 L127238 -2754944 L116531 -2755286 L115748 -2761293 L95153 -2768890 L91899 -2754802 L75156 -2753780 L72476 -2759712
 L61204 -2762229 L55024 -2757887 L50646 -2746036 L38582 -2738903 L32400 -2723541 L26787 -2721870 L19739 -2733676 L15230
 -2727693 L6896 -2729773 L6613 -2745438 L-6451 -2746947 L-13746 -2729027 L-19100 -2730314 L-21653 -2727263 L-19195 -271
8050 L-21823 -2712642 L-32652 -2713435 L-29828 -2725192 L-36762 -2731068 L-52663 -2728481 L-50162 -2739952 L-55240 -275
0944 L-51422 -2762450 L-66203 -2754594 L-73055 -2761894 L-59308 -2789235 L-70764 -2805884 L-46960 -2811945 L-46317 -282
3478 L-54552 -2822754 L-55863 -2825424 L-44629 -2830148 L-48254 -2843469 L-53715 -2850467 L-75067 -2854719 L-81471 -284
6262 L-87404 -2845628 L-85754 -2851947 L-91144 -2852124 L-110369 -2838560 L-121706 -2845818 L-93064 -2865912 L-84510 -2
886074 L-78190 -2887141 L-69987 -2883277 L-66983 -2890962 L-54200 -2899478 L-56725 -2913394 L-65135 -2919826 L-69389 -2
951143 L-59919 -2977720 L-68709 -2977000 L-72444 -2981844 L-70650 -3008771 L-65686 -3015289 L-78105 -3018565 L-67606 -3
030113 L-74429 -3046149 L-66109 -3063494 L-74618 -3076963 Z"]},"jiangxi":{"id":"jiangxi","name":"姹熻タ鐪?,"bounds":{"left"
:351746,"right":820821,"bottom":2568339,"top":3201359},"viewBox":{"x":29884,"y":-3277322,"width":1112799,"height":78494
5},"paths":["M788753 -3137560 L784674 -3126326 L775485 -3124195 L771705 -3116096 L772414 -3105977 L781162 -3092677 L790
172 -3088816 L790361 -3082327 L796003 -3083593 L808878 -3070332 L813810 -3058455 L820821 -3023679 L816548 -3014363 L808
486 -3008780 L812935 -2995471 L794685 -2987153 L788527 -2977101 L777266 -2977752 L763684 -2970137 L757496 -2964003 L756
914 -2956767 L745003 -2961141 L734212 -2973989 L711614 -2959955 L711874 -2950652 L701435 -2932852 L686675 -2930123 L687
258 -2923280 L693634 -2921976 L698250 -2913070 L698065 -2902599 L704392 -2893813 L687428 -2867630 L657027 -2855902 L646
114 -2841080 L644405 -2822762 L656774 -2800298 L655937 -2791146 L646956 -2790756 L638773 -2778382 L637029 -2764988 L644
939 -2765370 L643245 -2757176 L628728 -2738100 L612029 -2731623 L617623 -2717878 L612199 -2719137 L607067 -2709096 L602
962 -2668474 L589728 -2655264 L589703 -2649561 L596341 -2640342 L591470 -2633835 L592414 -2624274 L585701 -2617151 L581
016 -2602607 L591006 -2583734 L577569 -2581075 L562411 -2591248 L553832 -2603462 L546395 -2606063 L498533 -2588288 L492
819 -2578929 L482783 -2582412 L478379 -2574975 L458824 -2574348 L446978 -2568787 L422657 -2587133 L438427 -2597911 L444
401 -2619495 L475722 -2643015 L471140 -2647060 L474843 -2656581 L454528 -2671906 L439266 -2660649 L414362 -2658697 L405
104 -2653671 L405946 -2663023 L396640 -2672257 L399819 -2684573 L393096 -2702709 L402893 -2723097 L401319 -2734154 L406
301 -2743956 L421920 -2753121 L416997 -2757323 L392911 -2752722 L392506 -2756853 L403455 -2768447 L405938 -2796843 L382
490 -2807548 L380809 -2822459 L387824 -2837553 L378742 -2853593 L372345 -2855563 L381276 -2884194 L357389 -2882064 L351
746 -2902584 L353726 -2913879 L366435 -2933908 L364839 -2942970 L368305 -2950429 L392577 -2962173 L387265 -2974128 L402
454 -2981691 L414561 -2997471 L410665 -3010118 L397953 -3019935 L402387 -3051153 L392326 -3051163 L387706 -3061700 L380
724 -3059991 L380342 -3075980 L391541 -3090854 L407193 -3094988 L412318 -3108671 L431911 -3107214 L447283 -3115397 L456
549 -3112661 L470864 -3117175 L472985 -3124149 L467321 -3122027 L467016 -3125136 L475056 -3134809 L493311 -3130140 L497
454 -3138029 L490977 -3139500 L489651 -3148945 L502493 -3147747 L506120 -3143892 L519468 -3152931 L527499 -3169460 L542
989 -3171699 L551996 -3164397 L567574 -3159042 L585412 -3170142 L592291 -3171396 L596266 -3167122 L623218 -3181344 L625
745 -3195379 L630675 -3201359 L641478 -3199961 L656962 -3190148 L652403 -3177013 L642039 -3172924 L634847 -3162765 L638
706 -3147927 L645528 -3152979 L650362 -3147480 L654673 -3148516 L659807 -3156582 L674172 -3162270 L677914 -3173079 L674
899 -3178836 L685773 -3189328 L691043 -3187386 L694990 -3178861 L709828 -3179780 L713291 -3163414 L722710 -3153965 L732
140 -3156523 L737468 -3151163 L771452 -3153919 L788753 -3137560 Z"]},"zhejiang":{"id":"zhejiang","name":"娴欐睙鐪?,"bounds"
:{"left":771679,"right":1155410,"bottom":2907626,"top":3350021},"viewBox":{"x":574697,"y":-3403109,"width":777695,"heig
ht":548570},"paths":["M905227 -3342650 L906951 -3346982 L914394 -3349140 L930796 -3350021 L938863 -3335735 L953077 -332
6908 L961993 -3326129 L973814 -3329619 L974048 -3324186 L981725 -3319205 L987972 -3310867 L998182 -3321590 L1011458 -33
21836 L1007633 -3333840 L1028193 -3344339 L1032785 -3343528 L1034429 -3331938 L1039801 -3321107 L1050213 -3324194 L1053
360 -3317505 L1060999 -3310265 L1037801 -3291168 L1034555 -3283592 L1036894 -3278253 L1033433 -3271317 L1022214 -326576
4 L1009410 -3271617 L988444 -3268534 L985348 -3266931 L985812 -3259542 L990649 -3264565 L1004530 -3265588 L1012393 -324
7907 L1011736 -3241820 L1025536 -3242094 L1060005 -3266695 L1072129 -3268217 L1089380 -3258022 L1111921 -3233705 L11203
47 -3235390 L1136776 -3227950 L1152439 -3232175 L1155386 -3230686 L1139160 -3218404 L1118826 -3190471 L1110188 -3185976
 L1099239 -3184729 L1093297 -3177262 L1094701 -3171476 L1100947 -3167351 L1108942 -3179953 L1120779 -3186470 L1136716 -
3200248 L1145699 -3195819 L1141379 -3190980 L1140553 -3185103 L1147175 -3180139 L1140128 -3170051 L1143406 -3160930 L11
49285 -3159554 L1146170 -3152806 L1139943 -3147522 L1135301 -3148250 L1133896 -3164575 L1130420 -3169303 L1127909 -3166
878 L1129988 -3153620 L1127652 -3148331 L1122317 -3146146 L1116718 -3147180 L1112691 -3155046 L1107296 -3156698 L110591
2 -3144770 L1096988 -3141521 L1102463 -3135097 L1117813 -3138007 L1126458 -3127220 L1129672 -3120242 L1125495 -3116348 
L1122060 -3115376 L1112292 -3119243 L1109955 -3117153 L1111411 -3114351 L1126539 -3110295 L1124071 -3097362 L1112912 -3
091385 L1091474 -3092260 L1094901 -3088275 L1111389 -3085897 L1121987 -3067120 L1124379 -3054560 L1131119 -3053193 L113
0661 -3049438 L1125367 -3041851 L1120866 -3050044 L1108141 -3047843 L1107417 -3032812 L1102871 -3027749 L1096607 -30342
33 L1087454 -3051455 L1084209 -3052606 L1081307 -3047615 L1078278 -3028086 L1070483 -3021230 L1068739 -3006131 L1040920
 -3008402 L1055759 -3001443 L1059704 -2994931 L1043036 -2962932 L1036778 -2955840 L1038947 -2950188 L1045403 -2947747 L
1046854 -2944844 L1043132 -2933816 L1035912 -2935926 L1032077 -2932925 L1036848 -2921890 L1032045 -2907800 L1027194 -29
08471 L1023750 -2912743 L1023111 -2920617 L1016867 -2926142 L1013211 -2933928 L1002565 -2935862 L992333 -2932467 L98697
9 -2925867 L979162 -2927805 L972860 -2920339 L961182 -2917537 L940102 -2956548 L931065 -2954537 L926188 -2938466 L91836
7 -2940046 L914647 -2932208 L904793 -2925447 L896803 -2926454 L893848 -2931217 L880618 -2932434 L877439 -2929784 L87178
9 -2929858 L868593 -2935729 L871479 -2944510 L866284 -2954169 L869229 -2959044 L849954 -2985220 L850595 -2994366 L85784
9 -3003399 L856916 -3014729 L844157 -3021531 L839015 -3012724 L829415 -3014641 L824709 -3009047 L817988 -3012298 L81654
8 -3014363 L820821 -3023679 L814229 -3045166 L813810 -3058455 L808878 -3070332 L796003 -3083593 L790361 -3082327 L79017
2 -3088816 L781162 -3092677 L772414 -3105977 L771705 -3116096 L775485 -3124195 L784674 -3126326 L794918 -3150380 L79990
5 -3150356 L816131 -3166705 L828069 -3169738 L833217 -3176662 L834477 -3181450 L832366 -3186851 L835702 -3194415 L84112
1 -3195305 L847694 -3206612 L839399 -3228273 L844780 -3232842 L843420 -3248327 L849897 -3250447 L865106 -3248690 L87212
2 -3245511 L877779 -3253590 L892279 -3258588 L885924 -3263373 L884263 -3275821 L875323 -3275206 L873659 -3283475 L88598
9 -3290874 L890748 -3286763 L894900 -3293137 L901405 -3308869 L905227 -3342650 Z","M1141989 -3257520 L1148746 -3260010 
L1172033 -3248442 L1171793 -3239106 L1156795 -3242613 L1144001 -3240833 L1132895 -3260194 L1141989 -3257520 Z","M109563
5 -3021030 L1098040 -3020823 L1096805 -3016854 L1085552 -3012193 L1081326 -3022126 L1086560 -3026253 L1087847 -3031469 
L1091218 -3032540 L1094870 -3030229 L1093505 -3025567 L1095635 -3021030 Z"]},"shanghai":{"id":"shanghai","name":"涓婃捣甯?,
"bounds":{"left":1022374,"right":1119415,"bottom":3310265,"top":3402303},"viewBox":{"x":989997,"y":-3413347,"width":161
794,"height":114126},"paths":["M1025755 -3343181 L1022548 -3352860 L1024641 -3355485 L1032521 -3357074 L1036435 -336130
6 L1038071 -3383875 L1045415 -3397057 L1057600 -3402303 L1092738 -3384328 L1097206 -3380824 L1118347 -3349566 L1119415 
-3342916 L1118905 -3337835 L1117360 -3335972 L1107154 -3333038 L1091752 -3330997 L1082936 -3327982 L1077633 -3324546 L1
071523 -3315413 L1060999 -3310265 L1053360 -3317505 L1052036 -3323177 L1050213 -3324194 L1044086 -3323574 L1039801 -332
1107 L1034429 -3331938 L1033483 -3342633 L1031298 -3344132 L1025755 -3343181 Z","M1063636 -3432104 L1077196 -3426125 L1
084113 -3421386 L1109281 -3413210 L1110006 -3407641 L1106820 -3403220 L1104772 -3402735 L1083382 -3407283 L1069361 -341
3774 L1060067 -3415928 L1049409 -3424610 L1046237 -3431314 L1042674 -3433237 L1039186 -3432068 L1046276 -3438635 L10509
51 -3439920 L1055939 -3439025 L1058576 -3431020 L1063636 -3432104 Z"]},"fujian":{"id":"fujian","name":"绂忓缓鐪?,"bounds":{
"left":589488,"right":1026850,"bottom":2484360,"top":3021531},"viewBox":{"x":336017,"y":-3085992,"width":944304,"height
":666092},"paths":["M816548 -3014363 L822913 -3009026 L829415 -3014641 L839015 -3012724 L844157 -3021531 L856916 -30147
29 L857849 -3003399 L850595 -2994366 L849954 -2985220 L869229 -2959044 L866284 -2954169 L871479 -2944510 L868593 -29357
29 L871789 -2929858 L880618 -2932434 L893848 -2931217 L896803 -2926454 L904793 -2925447 L914647 -2932208 L918367 -29400
46 L926188 -2938466 L931065 -2954537 L940102 -2956548 L961182 -2917537 L972860 -2920339 L979162 -2927805 L986979 -29258
67 L992333 -2932467 L1002565 -2935862 L1013211 -2933928 L1023111 -2920617 L1026850 -2908824 L1013652 -2922845 L1007057 
-2923755 L1000615 -2919532 L1000622 -2911421 L1019370 -2913413 L1023329 -2900074 L1008435 -2902065 L1011408 -2891992 L1
009414 -2881305 L997152 -2878643 L989951 -2870054 L1003056 -2861630 L1001483 -2848321 L992897 -2842257 L985684 -2841162
 L981264 -2831996 L974745 -2830774 L974843 -2839671 L986149 -2846260 L993828 -2864715 L980856 -2862347 L976353 -2846741
 L970691 -2848847 L967366 -2854654 L967416 -2858686 L973417 -2862818 L971006 -2869319 L965728 -2866169 L961505 -2850278
 L957818 -2850595 L949926 -2859575 L943885 -2852146 L942969 -2843810 L946939 -2838772 L957635 -2841162 L968024 -2838718
 L974297 -2825039 L968430 -2818874 L956353 -2826839 L949604 -2825313 L948004 -2820115 L956555 -2810849 L966187 -2807177
 L976601 -2820599 L988393 -2815293 L980532 -2806976 L956897 -2801767 L955802 -2797979 L960945 -2797184 L947205 -2779344
 L968099 -2773010 L966735 -2764704 L960778 -2761615 L957886 -2754560 L962089 -2746072 L961560 -2740487 L950534 -2737991
 L944973 -2730980 L952030 -2721847 L960511 -2726232 L967028 -2712318 L968263 -2699610 L962527 -2699724 L962054 -2709618
 L959265 -2711496 L958540 -2704682 L952777 -2700749 L952928 -2711042 L937367 -2725926 L933330 -2726682 L937046 -2717917
 L935859 -2705850 L931211 -2708274 L930871 -2722556 L926469 -2712222 L918402 -2706839 L916279 -2699588 L920925 -2696060
 L924827 -2686522 L931150 -2694856 L941161 -2689383 L940684 -2686414 L931713 -2677031 L916744 -2683769 L914241 -2677463
 L921241 -2673378 L914923 -2669456 L907745 -2671833 L912325 -2677836 L910834 -2687855 L902286 -2688315 L893850 -2683842
 L901004 -2678495 L903191 -2672798 L892417 -2663202 L898585 -2656012 L907209 -2660902 L909620 -2649960 L900193 -2650910
 L899084 -2646687 L905542 -2642701 L892292 -2642072 L881645 -2636152 L877745 -2639309 L882675 -2645003 L872082 -2650706
 L871956 -2632795 L887767 -2626466 L874072 -2601854 L869231 -2600393 L858633 -2609423 L853602 -2621213 L852527 -2607319
 L839663 -2605173 L834398 -2598356 L829631 -2602102 L834199 -2605320 L833599 -2609410 L825028 -2615263 L821753 -2602801
 L823870 -2597147 L830304 -2594947 L827065 -2585319 L820751 -2585319 L822201 -2593094 L817926 -2599814 L813672 -2597637
 L815219 -2586615 L789343 -2589400 L789134 -2585752 L801875 -2577530 L807046 -2581949 L817985 -2581395 L825992 -2568585
 L812558 -2554202 L810991 -2559579 L807936 -2560062 L805449 -2541305 L797545 -2536575 L792125 -2524361 L789802 -2526623
 L794124 -2539284 L790001 -2540355 L785031 -2536911 L778807 -2517898 L780748 -2508776 L776320 -2502881 L774109 -2521046
 L754788 -2525708 L753819 -2523421 L763146 -2521968 L765750 -2518924 L758902 -2504656 L770744 -2503760 L759879 -2492781
 L762077 -2485060 L752800 -2484529 L750357 -2486540 L757857 -2495232 L750928 -2497671 L755488 -2509318 L747067 -2507722
 L743822 -2503957 L745516 -2490786 L743180 -2487341 L739269 -2495376 L733721 -2488713 L722676 -2493862 L717320 -2505889
 L708849 -2514964 L713027 -2527510 L709294 -2535655 L713860 -2549692 L697949 -2581700 L689974 -2587868 L692205 -2601758
 L685590 -2602380 L660348 -2594247 L645306 -2620894 L631479 -2611499 L624328 -2621340 L615299 -2617197 L592414 -2624274
 L591470 -2633835 L596341 -2640342 L589703 -2649561 L589728 -2655264 L602962 -2668474 L607067 -2709096 L612199 -2719137
 L617623 -2717878 L612029 -2731623 L628728 -2738100 L643245 -2757176 L644939 -2765370 L637029 -2764988 L638773 -2778382
 L646956 -2790756 L655937 -2791146 L656774 -2800298 L644405 -2822762 L646114 -2841080 L657027 -2855902 L687428 -2867630
 L704392 -2893813 L698065 -2902599 L698250 -2913070 L693634 -2921976 L687258 -2923280 L686675 -2930123 L701435 -2932852
 L711874 -2950652 L711614 -2959955 L719572 -2962381 L734212 -2973989 L745003 -2961141 L754335 -2956561 L757741 -2957365
 L757496 -2964003 L762412 -2969166 L773241 -2976226 L788527 -2977101 L794685 -2987153 L812935 -2995471 L812493 -3003014
 L808486 -3008780 L816548 -3014363 Z","M979316 -2730463 L989803 -2725761 L982902 -2722398 L982658 -2718202 L988634 -271
5189 L979670 -2711876 L978820 -2706114 L969946 -2715233 L974175 -2720077 L974750 -2727262 L969113 -2727254 L977678 -273
6167 L979316 -2730463 Z","M859596 -2590665 L856147 -2584729 L850972 -2587677 L845288 -2582028 L840753 -2584186 L843086 
-2586708 L840790 -2591911 L848887 -2590551 L852346 -2598255 L859596 -2590665 Z"]},"guizhou":{"id":"guizhou","name":"璐靛窞
鐪?,"bounds":{"left":-631422,"right":-44203,"bottom":2582519,"top":3086858},"viewBox":{"x":-781107,"y":-3147379,"width":
886589,"height":625381},"paths":["M-71639 -3003242 L-72444 -2981844 L-68709 -2977000 L-59919 -2977720 L-69389 -2951143 
L-65135 -2919826 L-56725 -2913394 L-54782 -2897598 L-66983 -2890962 L-69987 -2883277 L-78190 -2887141 L-84510 -2886074 
L-93064 -2865912 L-121706 -2845818 L-110369 -2838560 L-91144 -2852124 L-85754 -2851947 L-88625 -2846599 L-84969 -284498
6 L-79406 -2847478 L-75067 -2854719 L-62679 -2852977 L-52332 -2849239 L-44203 -2831428 L-55863 -2825424 L-54552 -282275
4 L-50257 -2825260 L-46317 -2823478 L-47895 -2810783 L-71068 -2804806 L-69690 -2800830 L-62213 -2797201 L-59308 -278923
5 L-72161 -2759714 L-66203 -2754594 L-52342 -2762907 L-50842 -2760745 L-55240 -2750944 L-50162 -2739952 L-52663 -272848
1 L-66568 -2708368 L-68795 -2700803 L-66445 -2697977 L-75404 -2698172 L-83145 -2704410 L-90103 -2705392 L-100787 -27044
62 L-111748 -2694768 L-105004 -2693068 L-95040 -2697970 L-96505 -2680658 L-93372 -2674048 L-121593 -2675169 L-123042 -2
685086 L-130896 -2683998 L-138565 -2667421 L-140920 -2650843 L-151594 -2665139 L-159334 -2664945 L-169732 -2675956 L-18
5875 -2665394 L-189408 -2643917 L-196060 -2638533 L-224067 -2630179 L-226520 -2644783 L-235145 -2651440 L-246370 -26415
52 L-256977 -2646745 L-262326 -2655294 L-260138 -2660969 L-270422 -2665041 L-269802 -2674250 L-279768 -2686493 L-294806
 -2681400 L-305572 -2666961 L-304288 -2645468 L-311074 -2646911 L-314846 -2640454 L-336790 -2639574 L-362102 -2623011 L
-388579 -2618249 L-384013 -2607155 L-385714 -2599555 L-403880 -2582519 L-412468 -2592516 L-424686 -2591207 L-435552 -25
98525 L-452599 -2603678 L-462181 -2618633 L-478138 -2618434 L-484695 -2627712 L-499962 -2615485 L-504036 -2603974 L-517
194 -2600199 L-532986 -2587131 L-553311 -2600213 L-552681 -2607412 L-534388 -2627938 L-536033 -2633773 L-545576 -263049
1 L-548055 -2633212 L-530144 -2647009 L-522673 -2647381 L-521190 -2655568 L-539090 -2659145 L-541243 -2668868 L-550122 
-2676374 L-547568 -2686441 L-559589 -2683799 L-559363 -2693815 L-568344 -2700240 L-569171 -2710591 L-568065 -2713540 L-
564242 -2711659 L-562310 -2714177 L-542203 -2769679 L-527766 -2780724 L-539042 -2805655 L-546177 -2806714 L-552250 -282
0268 L-561209 -2810710 L-582175 -2812158 L-589103 -2802014 L-605812 -2801661 L-618297 -2809560 L-622619 -2833951 L-6205
11 -2839857 L-615134 -2841777 L-617161 -2854049 L-621627 -2862670 L-629877 -2858134 L-631422 -2863350 L-627137 -2870992
 L-607123 -2885656 L-596451 -2905288 L-587838 -2902760 L-586665 -2894948 L-577708 -2890356 L-573796 -2882994 L-551016 -
2904642 L-541339 -2897408 L-535362 -2887408 L-525385 -2885654 L-510066 -2889615 L-504117 -2882051 L-497800 -2888654 L-4
83087 -2895535 L-471459 -2890883 L-460943 -2915205 L-460351 -2928081 L-453068 -2931063 L-439273 -2932475 L-427624 -2920
621 L-387426 -2928993 L-382665 -2932661 L-373852 -2928588 L-369376 -2930370 L-357310 -2940756 L-360670 -2958627 L-37287
2 -2972778 L-381716 -2973540 L-391675 -2968504 L-401204 -2972740 L-401290 -2979821 L-409162 -2993048 L-414129 -2989310 
L-421383 -2990812 L-424449 -3010931 L-417969 -3023091 L-413747 -3026099 L-399982 -3023437 L-388166 -3039934 L-356088 -3
008574 L-349558 -3007804 L-348931 -3014960 L-344791 -3017340 L-340105 -3014733 L-334347 -3020535 L-340819 -3049935 L-32
5669 -3027214 L-331834 -3008875 L-319664 -3005306 L-316852 -3020278 L-307228 -3019627 L-303882 -3028037 L-309899 -30382
01 L-292195 -3039077 L-289186 -3047982 L-270091 -3046758 L-265817 -3039276 L-251153 -3050579 L-247770 -3056686 L-254158
 -3072772 L-246344 -3085392 L-242392 -3083631 L-232175 -3086858 L-230074 -3081525 L-223939 -3078816 L-217091 -3084163 L
-212283 -3078238 L-210676 -3062187 L-207072 -3060536 L-187239 -3071882 L-170664 -3065549 L-162879 -3070111 L-156425 -30
37184 L-158771 -3024130 L-149911 -3020457 L-138582 -3022779 L-134789 -3020514 L-139362 -2991245 L-136404 -2986106 L-130
333 -2986316 L-132014 -3000021 L-127484 -3005003 L-120863 -3000173 L-118266 -2990291 L-124356 -2980331 L-121307 -297137
0 L-108300 -2972622 L-100794 -2966193 L-88076 -2968294 L-81434 -2995612 L-71639 -3003242 Z"]},"yunnan":{"id":"yunnan","
name":"浜戝崡鐪?,"bounds":{"left":-1269416,"right":-390925,"bottom":2228424,"top":3144480},"viewBox":{"x":-1635348,"y":-325
4407,"width":1610354,"height":1135910},"paths":["M-1045526 -3144480 L-1049144 -3051472 L-1038569 -3029472 L-1030039 -30
18903 L-1025460 -3061487 L-1011234 -3071485 L-1000406 -3090326 L-990726 -3093689 L-991172 -3079214 L-972612 -3062219 L-
964056 -3039158 L-953147 -3033291 L-955273 -3020602 L-968126 -3013610 L-959226 -2986918 L-947176 -2978737 L-946118 -296
3326 L-931892 -2978913 L-922348 -2972008 L-909099 -2980970 L-901366 -2954985 L-890894 -2946625 L-894796 -2938713 L-8777
52 -2908897 L-878327 -2901226 L-869550 -2896318 L-869464 -2881464 L-848529 -2859578 L-853136 -2845904 L-845754 -2844147
 L-844052 -2849525 L-838702 -2846263 L-853588 -2823256 L-833526 -2809322 L-827687 -2795689 L-836455 -2791305 L-832360 -
2784189 L-819567 -2782592 L-812921 -2765490 L-786538 -2766263 L-740335 -2793696 L-732899 -2790709 L-735468 -2781631 L-7
28327 -2775999 L-708129 -2790874 L-697274 -2789516 L-692854 -2826704 L-702634 -2864247 L-698427 -2897073 L-694396 -2906
658 L-674654 -2905838 L-657994 -2929714 L-636132 -2946857 L-628022 -2965967 L-639367 -2972479 L-637441 -2983393 L-62260
2 -2996016 L-611914 -2990527 L-596087 -3001284 L-602529 -3026344 L-595427 -3041670 L-585561 -3034513 L-557290 -3038173 
L-540266 -3034128 L-557271 -3022963 L-557433 -3001957 L-546768 -3000341 L-540672 -2991591 L-545429 -2984458 L-539726 -2
981516 L-554960 -2969140 L-530954 -2945881 L-500957 -2950156 L-484332 -2971079 L-463660 -2960991 L-460335 -2954815 L-46
5391 -2944628 L-459594 -2919900 L-472117 -2890462 L-483087 -2895535 L-504117 -2882051 L-510066 -2889615 L-535362 -28874
08 L-551016 -2904642 L-573796 -2882994 L-586665 -2894948 L-587838 -2902760 L-596451 -2905288 L-607123 -2885656 L-631422
 -2863350 L-629877 -2858134 L-621627 -2862670 L-617161 -2854049 L-615134 -2841777 L-622619 -2833951 L-618297 -2809560 L
-605812 -2801661 L-589103 -2802014 L-582175 -2812158 L-561209 -2810710 L-552250 -2820268 L-546177 -2806714 L-539042 -28
05655 L-527766 -2780724 L-542203 -2769679 L-562310 -2714177 L-569171 -2710591 L-568344 -2700240 L-559363 -2693815 L-559
589 -2683799 L-547568 -2686441 L-550122 -2676374 L-541243 -2668868 L-539090 -2659145 L-521190 -2655568 L-522673 -264738
1 L-530144 -2647009 L-548055 -2633212 L-536033 -2633773 L-534388 -2627938 L-562723 -2589223 L-549248 -2561342 L-538606 
-2554203 L-537212 -2566187 L-531022 -2568687 L-499203 -2563793 L-488539 -2551724 L-483832 -2537472 L-490756 -2532953 L-
481917 -2523442 L-474180 -2527386 L-461315 -2519331 L-450247 -2528698 L-443866 -2519882 L-418189 -2528326 L-404658 -252
4883 L-390925 -2498198 L-397278 -2464778 L-403173 -2457492 L-411138 -2452388 L-413733 -2458024 L-427666 -2461080 L-4467
09 -2447975 L-443130 -2439679 L-461792 -2426703 L-479510 -2447358 L-484931 -2446588 L-491013 -2435994 L-506287 -2434524
 L-535758 -2420294 L-532212 -2398717 L-545313 -2390015 L-560658 -2392243 L-582827 -2375175 L-592792 -2383651 L-593167 -
2391905 L-609915 -2388369 L-624069 -2356736 L-657006 -2392114 L-670404 -2371120 L-687662 -2394867 L-722095 -2358362 L-7
75032 -2399444 L-787449 -2389723 L-801484 -2360011 L-835223 -2365826 L-842794 -2359848 L-852212 -2372610 L-861211 -2372
429 L-868838 -2351854 L-876513 -2346729 L-873301 -2318184 L-860040 -2298715 L-861799 -2286108 L-854447 -2277559 L-86462
6 -2273371 L-867544 -2246930 L-856867 -2236990 L-866704 -2228430 L-885048 -2239642 L-913984 -2235493 L-919156 -2240011 
L-921158 -2255031 L-914883 -2271274 L-927491 -2276202 L-924039 -2283436 L-928344 -2299425 L-959008 -2288741 L-985803 -2
270061 L-996974 -2272657 L-1005366 -2282025 L-1029065 -2277463 L-1033725 -2289686 L-1027452 -2298105 L-1032155 -2302236
 L-1037722 -2297077 L-1043585 -2300253 L-1048054 -2317751 L-1045645 -2333388 L-1050587 -2343107 L-1055256 -2339807 L-10
61186 -2344619 L-1071147 -2343546 L-1086193 -2352807 L-1109167 -2353140 L-1127628 -2362227 L-1099918 -2396662 L-1102034
 -2423647 L-1088748 -2434824 L-1087360 -2442952 L-1075961 -2440976 L-1079200 -2458647 L-1121181 -2466708 L-1125814 -247
3739 L-1141457 -2477779 L-1134782 -2489253 L-1136232 -2500390 L-1138662 -2511345 L-1145489 -2510034 L-1147226 -2516042 
L-1138637 -2523750 L-1144729 -2542990 L-1154149 -2546871 L-1154727 -2565131 L-1134153 -2574375 L-1130544 -2584472 L-115
8078 -2579372 L-1168352 -2585564 L-1221662 -2582013 L-1256675 -2568404 L-1269344 -2577618 L-1243458 -2598626 L-1242626 
-2612985 L-1252002 -2617034 L-1245889 -2622949 L-1247713 -2631076 L-1261858 -2634224 L-1255498 -2667578 L-1232167 -2673
823 L-1235899 -2689119 L-1230242 -2702609 L-1217127 -2717395 L-1206574 -2713083 L-1188088 -2731007 L-1182805 -2753297 L
-1167285 -2741602 L-1147130 -2771260 L-1141241 -2773293 L-1134607 -2768062 L-1126195 -2773055 L-1137118 -2799215 L-1132
729 -2807063 L-1126987 -2801227 L-1122688 -2804023 L-1125259 -2820617 L-1111403 -2853733 L-1112139 -2882554 L-1105481 -
2902448 L-1111415 -2915023 L-1105664 -2961582 L-1130503 -2975367 L-1133151 -2962886 L-1143832 -2964992 L-1155219 -30214
87 L-1151544 -3034230 L-1138897 -3043338 L-1142403 -3057972 L-1135096 -3060725 L-1124459 -3028445 L-1096154 -3036038 L-
1090346 -3050775 L-1100769 -3069002 L-1098794 -3088490 L-1092597 -3091252 L-1096198 -3119674 L-1078940 -3123125 L-10764
30 -3101099 L-1063009 -3102783 L-1066228 -3114364 L-1054364 -3126082 L-1058841 -3140655 L-1045526 -3144480 Z"]},"guangx
i":{"id":"guangxi","name":"骞胯タ澹棌鑷不鍖?,"bounds":{"left":-562723,"right":209095,"bottom":2218039,"top":2768890},"viewBox
":{"x":-660990,"y":-2834992,"width":968351,"height":683054},"paths":["M204061 -2587713 L198472 -2585313 L195252 -257540
1 L202133 -2566319 L208626 -2543139 L191768 -2531175 L198657 -2503387 L189110 -2499239 L184060 -2486068 L169745 -248656
8 L166935 -2468266 L154745 -2464844 L143482 -2444667 L139278 -2428669 L141876 -2404175 L146995 -2400267 L141215 -238631
0 L126625 -2370313 L109812 -2364872 L109080 -2356613 L79157 -2347270 L72786 -2334683 L80889 -2316220 L69137 -2312014 L6
5741 -2303445 L58000 -2306455 L53775 -2300843 L44520 -2306076 L35282 -2303675 L40957 -2276063 L-4439 -2268367 L-10162 -
2248162 L-19436 -2245089 L-24137 -2248305 L-26672 -2244125 L-25777 -2225529 L-33436 -2228073 L-42959 -2242279 L-46400 -
2251167 L-40061 -2256084 L-43476 -2257762 L-55669 -2246861 L-45449 -2239684 L-51841 -2227189 L-87271 -2218039 L-100750 
-2224054 L-87429 -2231040 L-88147 -2242477 L-92181 -2238429 L-98427 -2243802 L-106283 -2240173 L-112610 -2242406 L-1197
34 -2250717 L-111404 -2258565 L-125118 -2266034 L-126921 -2254174 L-118484 -2241815 L-131114 -2240916 L-138075 -2264115
 L-143753 -2253090 L-149914 -2258881 L-142327 -2270404 L-148333 -2278288 L-155875 -2269630 L-159967 -2255384 L-157992 -
2249512 L-154590 -2253583 L-151933 -2251152 L-154060 -2241690 L-160195 -2235772 L-167414 -2235478 L-160755 -2248351 L-1
72642 -2255005 L-177333 -2237260 L-186911 -2230785 L-181680 -2239215 L-184977 -2247223 L-194501 -2239570 L-189922 -2234
095 L-192616 -2231656 L-204645 -2236893 L-209477 -2234600 L-229952 -2248979 L-253043 -2244321 L-267560 -2249814 L-27550
9 -2242784 L-283150 -2258189 L-292128 -2255229 L-313267 -2268001 L-308579 -2280925 L-316605 -2279606 L-327410 -2286652 
L-345837 -2284735 L-346034 -2318674 L-347995 -2324560 L-356235 -2327306 L-358638 -2336776 L-352611 -2349621 L-343494 -2
349769 L-329358 -2377922 L-358148 -2393633 L-376834 -2385377 L-386062 -2387489 L-388017 -2394205 L-398289 -2400140 L-42
4932 -2394423 L-442287 -2409698 L-456663 -2412305 L-461765 -2426761 L-452072 -2436880 L-443130 -2439679 L-446709 -24479
75 L-427666 -2461080 L-413733 -2458024 L-411138 -2452388 L-398528 -2462659 L-390925 -2498198 L-403490 -2523657 L-418189
 -2528326 L-443866 -2519882 L-445998 -2527666 L-450247 -2528698 L-461315 -2519331 L-474180 -2527386 L-481917 -2523442 L
-490756 -2532953 L-483832 -2537472 L-488539 -2551724 L-499203 -2563793 L-531022 -2568687 L-537212 -2566187 L-538606 -25
54203 L-549248 -2561342 L-562723 -2589223 L-551751 -2600214 L-532986 -2587131 L-517194 -2600199 L-504036 -2603974 L-499
962 -2615485 L-484695 -2627712 L-478138 -2618434 L-462181 -2618633 L-452599 -2603678 L-424686 -2591207 L-412468 -259251
6 L-403880 -2582519 L-385714 -2599555 L-384013 -2607155 L-388579 -2618249 L-362102 -2623011 L-336790 -2639574 L-314846 
-2640454 L-311074 -2646911 L-304288 -2645468 L-305572 -2666961 L-294806 -2681400 L-279768 -2686493 L-269802 -2674250 L-
270422 -2665041 L-260138 -2660969 L-262326 -2655294 L-256977 -2646745 L-246370 -2641552 L-235145 -2651440 L-226520 -264
4783 L-224067 -2630179 L-189408 -2643917 L-185875 -2665394 L-169732 -2675956 L-159334 -2664945 L-151594 -2665139 L-1409
20 -2650843 L-130896 -2683998 L-123042 -2685086 L-121593 -2675169 L-95078 -2672940 L-95040 -2697970 L-105004 -2693068 L
-111748 -2694768 L-100787 -2704462 L-90103 -2705392 L-67293 -2697096 L-66568 -2708368 L-51977 -2729236 L-36762 -2731068
 L-29828 -2725192 L-32652 -2713435 L-19560 -2713440 L-21653 -2727263 L-13746 -2729027 L-5829 -2747088 L7633 -2744186 L6
896 -2729773 L15230 -2727693 L19739 -2733676 L25504 -2722558 L29658 -2722216 L38582 -2738903 L50646 -2746036 L55024 -27
57887 L61204 -2762229 L72476 -2759712 L75156 -2753780 L91899 -2754802 L95153 -2768890 L115748 -2761293 L116531 -2755286
 L128121 -2753952 L127196 -2736101 L119980 -2722223 L125667 -2710704 L133852 -2714337 L148711 -2711059 L130934 -2695035
 L132611 -2679283 L126920 -2661631 L98444 -2628640 L95734 -2620908 L98688 -2607075 L108491 -2607950 L112256 -2619177 L1
27134 -2630068 L140653 -2630880 L148062 -2617568 L145463 -2611615 L148985 -2592388 L145153 -2578970 L156200 -2575984 L1
72427 -2591084 L204061 -2587713 Z"]},"guangdong":{"id":"guangdong","name":"骞夸笢鐪?,"bounds":{"left":-35663,"right":733721
,"bottom":2090661,"top":2677366},"viewBox":{"x":-166661,"y":-2747770,"width":1031380,"height":727514},"paths":["M419373
 -2347077 L401950 -2353105 L388029 -2374789 L363162 -2376440 L354725 -2370327 L370235 -2349176 L367438 -2335359 L372786
 -2315533 L363031 -2307865 L352917 -2314088 L335260 -2284864 L331273 -2287405 L335032 -2295942 L323733 -2296994 L326647
 -2306996 L321942 -2310277 L312764 -2299892 L315788 -2281548 L310489 -2274935 L302482 -2271807 L296862 -2282903 L292615
 -2283400 L269217 -2260321 L254412 -2268469 L253732 -2276745 L262397 -2283029 L250973 -2280528 L249204 -2287177 L253122
 -2292290 L249516 -2294719 L246356 -2284775 L252475 -2263035 L248875 -2255935 L230551 -2255791 L231046 -2269555 L212427
 -2262743 L214447 -2271749 L205528 -2265099 L201458 -2254971 L202752 -2248047 L210868 -2245288 L191271 -2236899 L191627
 -2245619 L199651 -2249126 L191481 -2252253 L193569 -2259812 L174908 -2260994 L172149 -2257635 L185304 -2253178 L187394
 -2245371 L175913 -2239985 L174496 -2232295 L155257 -2230804 L150992 -2239134 L134027 -2220021 L131434 -2221855 L136330
 -2227628 L131445 -2231507 L124312 -2231915 L128107 -2228627 L125011 -2225496 L107896 -2231619 L105368 -2227832 L111786
 -2226039 L107927 -2221871 L97831 -2216832 L78471 -2215860 L63165 -2198510 L44981 -2196952 L46257 -2204139 L53408 -2206
016 L41634 -2223959 L37935 -2223921 L33880 -2219331 L42605 -2209564 L43549 -2202281 L40800 -2190669 L34593 -2184432 L57
107 -2180966 L56677 -2168984 L53830 -2165421 L45619 -2173766 L27174 -2170525 L32536 -2183265 L12965 -2190724 L21649 -21
80778 L18079 -2160134 L12899 -2158416 L12348 -2152368 L19816 -2157353 L37099 -2155763 L40869 -2146484 L30204 -2135939 L
51906 -2124437 L56074 -2113151 L44463 -2098077 L29905 -2090876 L12726 -2091348 L4273 -2096469 L-9109 -2091570 L-7696 -2
098338 L-13733 -2108745 L-7508 -2110891 L-621 -2101737 L3850 -2105031 L3330 -2111438 L-18975 -2120208 L-15096 -2125522 
L-25733 -2134087 L-25268 -2150392 L-32341 -2154094 L-35663 -2164974 L-30221 -2178824 L-34611 -2188136 L-25622 -2197362 
L-23569 -2211291 L-12272 -2215591 L-3970 -2224982 L-19735 -2224140 L-26672 -2244125 L-24137 -2248305 L-19436 -2245089 L
-10162 -2248162 L-1616 -2270158 L40957 -2276063 L35282 -2303675 L44520 -2306076 L53775 -2300843 L58000 -2306455 L65741 
-2303445 L69137 -2312014 L80889 -2316220 L72786 -2334683 L79157 -2347270 L109080 -2356613 L109812 -2364872 L126625 -237
0313 L141215 -2386310 L146995 -2400267 L141876 -2404175 L139278 -2428669 L143482 -2444667 L154745 -2464844 L166935 -246
8266 L169745 -2486568 L184060 -2486068 L189110 -2499239 L198657 -2503387 L191768 -2531175 L206080 -2539509 L209019 -254
7420 L195252 -2575401 L198472 -2585313 L218609 -2597582 L219364 -2607488 L214922 -2613772 L219152 -2638736 L236085 -264
0063 L241707 -2633897 L246757 -2639366 L268010 -2632382 L280632 -2607029 L286711 -2607158 L301667 -2609556 L304374 -261
6383 L300282 -2634966 L304549 -2641853 L298306 -2646699 L289947 -2646270 L288097 -2658391 L295605 -2655160 L310409 -266
1639 L316425 -2673607 L331009 -2677273 L340173 -2664899 L362966 -2656879 L384027 -2658603 L391278 -2670507 L396640 -267
2257 L405946 -2663023 L406360 -2652824 L414362 -2658697 L439266 -2660649 L456831 -2671668 L473903 -2658901 L471140 -264
7060 L475722 -2643015 L444401 -2619495 L438427 -2597911 L422560 -2586469 L448454 -2568339 L458824 -2574348 L478379 -257
4975 L482783 -2582412 L492819 -2578929 L498533 -2588288 L546395 -2606063 L577569 -2581075 L590082 -2583163 L581016 -260
2607 L592414 -2624274 L615299 -2617197 L624328 -2621340 L631479 -2611499 L645306 -2620894 L660348 -2594247 L692205 -260
1758 L689974 -2587868 L697949 -2581700 L713860 -2549692 L708849 -2514964 L722676 -2493862 L733721 -2488713 L728287 -248
1285 L722984 -2487810 L716067 -2488423 L712715 -2480416 L718307 -2481545 L717581 -2477154 L706698 -2478266 L703085 -246
3318 L695936 -2457831 L672088 -2460104 L677505 -2451514 L693956 -2452739 L700080 -2443249 L690758 -2443351 L682375 -243
5200 L680033 -2441896 L672642 -2442086 L676737 -2436010 L670557 -2409444 L648831 -2409325 L630869 -2393472 L623116 -239
4785 L602337 -2383701 L597092 -2393845 L584513 -2397947 L571222 -2384678 L579916 -2382165 L575590 -2372655 L553771 -237
5286 L552678 -2381258 L562194 -2382313 L559113 -2386275 L540755 -2384952 L549578 -2397467 L533119 -2387841 L519795 -238
5945 L517785 -2373482 L510375 -2381128 L503085 -2379493 L513081 -2371044 L508141 -2355981 L502770 -2362049 L492618 -235
9772 L490210 -2374919 L498706 -2382641 L493830 -2386862 L466527 -2374340 L465907 -2365797 L474923 -2365466 L466752 -235
6477 L478131 -2352184 L472611 -2345543 L466138 -2345265 L462449 -2356883 L455726 -2360846 L419373 -2347077 Z","M284118 
-2256165 L290466 -2262499 L300123 -2262694 L293212 -2255059 L294165 -2242798 L288908 -2241642 L284425 -2246223 L284118 
-2256165 Z","M733018 -2467603 L729599 -2462715 L711950 -2465855 L730477 -2473143 L733018 -2467603 Z","M266575 -2241263 
L263769 -2244728 L267693 -2250893 L278464 -2255465 L277406 -2247193 L266575 -2241263 Z","M57393 -2183762 L45382 -219339
2 L64735 -2194586 L57393 -2183762 Z","M373365 -2359839 L360251 -2371174 L369888 -2370457 L375206 -2363207 L373365 -2359
839 Z","M348519 -2296892 L356824 -2297644 L355986 -2289663 L345640 -2289165 L348519 -2296892 Z"]},"hainan":{"id":"haina
n","name":"娴峰崡鐪?,"bounds":{"left":-148670,"right":110738,"bottom":1866031,"top":2083104},"viewBox":{"x":-209764,"y":-21
09152,"width":381596,"height":269170},"paths":["M75249 -2077196 L78075 -2072815 L84919 -2067662 L92769 -2064768 L98468 
-2066034 L100198 -2064809 L105359 -2050427 L110675 -2026981 L103033 -2022967 L94089 -2014260 L92031 -2013932 L88694 -20
16078 L81742 -2005510 L72273 -1998575 L72307 -1990817 L62050 -1972721 L61163 -1963155 L55956 -1957230 L55579 -1947181 L
46721 -1938993 L49623 -1935727 L54008 -1935797 L53654 -1941807 L54705 -1942881 L58834 -1934110 L49828 -1931648 L44724 -
1920209 L31301 -1919691 L25524 -1917189 L10231 -1902903 L7545 -1892141 L4730 -1889071 L-1160 -1888499 L-4132 -1890434 L
-3541 -1891694 L2534 -1892487 L1704 -1897110 L-15205 -1890381 L-24028 -1891144 L-28928 -1882463 L-27324 -1876562 L-2945
2 -1871817 L-32475 -1869892 L-34346 -1873654 L-40874 -1872809 L-42178 -1871642 L-41495 -1867761 L-45553 -1866069 L-4757
9 -1866501 L-49305 -1871601 L-58221 -1869206 L-55148 -1875353 L-60057 -1879274 L-90888 -1880958 L-96734 -1888783 L-1109
29 -1888518 L-124808 -1897511 L-142083 -1904930 L-143022 -1907689 L-140542 -1917847 L-140907 -1928820 L-143163 -1934592
 L-148549 -1940598 L-144641 -1949307 L-148611 -1967342 L-143799 -1972348 L-142497 -1975975 L-142986 -1978519 L-147869 -
1981246 L-144639 -1992543 L-141786 -1996769 L-136023 -1997861 L-126937 -2003042 L-104858 -2020902 L-87369 -2027633 L-82
453 -2034429 L-77889 -2036176 L-75003 -2032376 L-73059 -2031950 L-73776 -2040544 L-76093 -2043556 L-84189 -2036273 L-88
953 -2036654 L-88630 -2043392 L-78543 -2054318 L-70044 -2055198 L-52770 -2048778 L-50736 -2050364 L-51055 -2055504 L-48
412 -2059472 L-41456 -2064045 L-33627 -2066598 L-30182 -2065986 L-23055 -2061143 L-14240 -2063829 L-7105 -2063945 L389 
-2056592 L5588 -2062368 L13033 -2065720 L17763 -2071931 L29376 -2068073 L41674 -2073183 L61531 -2064886 L63681 -2055652
 L66275 -2054012 L68454 -2056272 L66175 -2060413 L65268 -2067588 L60272 -2068986 L60693 -2074957 L62649 -2077072 L70695
 -2078335 L72804 -2083104 L75249 -2077196 Z"]},"hong-kong":{"id":"hong-kong","name":"棣欐腐","bounds":{"left":406816,"righ
t":458023,"bottom":2322423,"top":2354059},"viewBox":{"x":400672,"y":-2360636,"width":63496,"height":44789},"paths":["M4
19373 -2347077 L422961 -2348654 L424091 -2351057 L426155 -2350334 L430050 -2351877 L431301 -2354059 L437174 -2353634 L4
38100 -2352857 L431660 -2342425 L435153 -2335384 L449174 -2344582 L456195 -2343540 L457967 -2339661 L453823 -2335827 L4
42901 -2335736 L442212 -2332016 L448298 -2325589 L447987 -2323036 L445575 -2322527 L432261 -2326814 L428453 -2332719 L4
08672 -2332328 L407244 -2337430 L417228 -2343850 L419373 -2347077 Z","M402567 -2311617 L398992 -2311036 L398250 -231429
7 L404154 -2321057 L405738 -2322145 L410908 -2321742 L417826 -2328218 L420025 -2327691 L420069 -2325902 L416520 -232337
3 L415896 -2313972 L413475 -2313194 L411947 -2315631 L407124 -2312302 L402567 -2311617 Z","M434459 -2321897 L437058 -23
21904 L440803 -2319224 L441450 -2313965 L437844 -2311724 L426650 -2319465 L428949 -2321801 L434459 -2321897 Z"]},"taiwa
n":{"id":"taiwan","name":"鍙版咕鐪?,"bounds":{"left":1035106,"right":1207741,"bottom":2334742,"top":2715823},"viewBox":{"x"
:786467,"y":-2761553,"width":669912,"height":472541},"paths":["M1189402 -2700405 L1198371 -2700223 L1201425 -2690359 L1
207741 -2688622 L1197982 -2677986 L1192587 -2668489 L1196116 -2647948 L1200972 -2640876 L1201006 -2632644 L1194997 -262
2266 L1192920 -2606038 L1181285 -2583059 L1184695 -2570401 L1180744 -2549102 L1177758 -2511891 L1170417 -2483527 L11725
11 -2474446 L1167106 -2468948 L1161737 -2450480 L1153298 -2442742 L1154840 -2436527 L1153492 -2432580 L1140446 -2421763
 L1135662 -2412319 L1129386 -2382099 L1132849 -2350682 L1127516 -2342470 L1131036 -2335224 L1119655 -2340147 L1116911 -
2335524 L1110945 -2347060 L1113173 -2355840 L1101367 -2379153 L1091815 -2386759 L1077073 -2392903 L1064293 -2402307 L10
59126 -2410167 L1061646 -2414598 L1049553 -2433808 L1047853 -2440529 L1049099 -2446356 L1044002 -2446473 L1035863 -2451
673 L1035301 -2456907 L1039452 -2460907 L1035973 -2462176 L1035202 -2465743 L1039844 -2494791 L1036011 -2514634 L104366
1 -2536602 L1052086 -2540176 L1047559 -2540471 L1047325 -2542050 L1054448 -2561155 L1066746 -2584582 L1070974 -2600406 
L1081208 -2617329 L1084057 -2629094 L1100997 -2650966 L1102662 -2659522 L1113334 -2681666 L1127150 -2690533 L1144045 -2
695795 L1150940 -2709416 L1158730 -2715360 L1162855 -2715544 L1189402 -2700405 Z","M985513 -2507927 L990867 -2507025 L9
92652 -2503115 L987772 -2502601 L984468 -2497048 L981099 -2497036 L977349 -2500758 L979980 -2505668 L983786 -2506086 L9
82138 -2510347 L977795 -2512785 L978463 -2514417 L982220 -2514634 L985513 -2507927 Z"]}}}
At line:2 char:72
+ ... 2/public/assets/china-province-shapes.json | ConvertFrom-Json; $json. ...
+                                                  ~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (:) [ConvertFrom-Json], ArgumentException
    + FullyQualifiedErrorId : System.ArgumentException,Microsoft.PowerShell.Commands.ConvertFromJsonCommand
 

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "node -e \"const fs=require('fs'); try { JSON.parse(fs.readFileSync('v2/public/assets/china-province-shapes.json','utf8')); console.log('ok'); } catch(e) { console.error(e.message); process.exit(1); }\"" in C:\Users\h\Documents\New project 2
 succeeded in 514ms:
ok

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "node -e \"const fs=require('fs'); const data=JSON.parse(fs.readFileSync('v2/public/assets/china-province-shapes.json','utf8')); console.log(Object.keys(data.provinces || {}).length); console.log(Object.keys(data.provinces || {}).slice(0,10).join(','));\"" in C:\Users\h\Documents\New project 2
 succeeded in 413ms:
33
xinjiang,tibet,qinghai,gansu,ningxia,inner-mongolia,heilongjiang,jilin,liaoning,beijing

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "node -e \"const fs=require('fs'); const shapes=JSON.parse(fs.readFileSync('v2/public/assets/china-province-shapes.json','utf8')).provinces; const src=fs.readFileSync('v2/src/data/map-sources.ts','utf8'); const ids=[...src.matchAll(/\\{ id: \\\"(["'^'"\\\"]+)\\\"/g)].map(m=>m[1]); console.log('hitAreas', ids.length); console.log('missingShapes', ids.filter(id=>"'!shapes[id]).join('"','));\"" in C:\Users\h\Documents\New project 2
2026-05-09T09:47:58.863840Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.4 seconds
Output:
At line:2 char:243
+ ... -sources.ts','utf8'); const ids=[...src.matchAll(/\{ id: \"([^\"]+)\" ...
+                                                                  ~
Missing type name after '['.
At line:2 char:293
+ ... \{ id: \"([^\"]+)\"/g)].map(m=>m[1]); console.log('hitAreas', ids.len ...
+                                                                  ~
Missing expression after ','.
At line:2 char:294
+ ... ^\"]+)\"/g)].map(m=>m[1]); console.log('hitAreas', ids.length); conso ...
+                                                        ~~~~~~~~~~
Unexpected token 'ids.length' in expression or statement.
At line:2 char:293
+ ... \{ id: \"([^\"]+)\"/g)].map(m=>m[1]); console.log('hitAreas', ids.len ...
+                                                                  ~
Missing closing ')' in expression.
At line:2 char:304
+ ... \"]+)\"/g)].map(m=>m[1]); console.log('hitAreas', ids.length); consol ...
+                                                                 ~
Unexpected token ')' in expression or statement.
At line:2 char:335
+ ... ole.log('hitAreas', ids.length); console.log('missingShapes', ids.fil ...
+                                                                  ~
Missing expression after ','.
At line:2 char:336
+ ... tAreas', ids.length); console.log('missingShapes', ids.filter(id=>!sh ...
+                                                        ~~~~~~~~~~
Unexpected token 'ids.filter' in expression or statement.
At line:2 char:335
+ ... ole.log('hitAreas', ids.length); console.log('missingShapes', ids.fil ...
+                                                                  ~
Missing closing ')' in expression.
At line:2 char:373
+ ... console.log('missingShapes', ids.filter(id=>!shapes[id]).join(','));"
+                                                                       ~
Unexpected token ')' in expression or statement.
At line:2 char:375
+ ... console.log('missingShapes', ids.filter(id=>!shapes[id]).join(','));"
+                                                                         ~
The string is missing the terminator: ".
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : MissingTypename
 

 exited 1 in 427ms:
At line:2 char:243
+ ... -sources.ts','utf8'); const ids=[...src.matchAll(/\{ id: \"([^\"]+)\" ...
+                                                                  ~
Missing type name after '['.
At line:2 char:293
+ ... \{ id: \"([^\"]+)\"/g)].map(m=>m[1]); console.log('hitAreas', ids.len ...
+                                                                  ~
Missing expression after ','.
At line:2 char:294
+ ... ^\"]+)\"/g)].map(m=>m[1]); console.log('hitAreas', ids.length); conso ...
+                                                        ~~~~~~~~~~
Unexpected token 'ids.length' in expression or statement.
At line:2 char:293
+ ... \{ id: \"([^\"]+)\"/g)].map(m=>m[1]); console.log('hitAreas', ids.len ...
+                                                                  ~
Missing closing ')' in expression.
At line:2 char:304
+ ... \"]+)\"/g)].map(m=>m[1]); console.log('hitAreas', ids.length); consol ...
+                                                                 ~
Unexpected token ')' in expression or statement.
At line:2 char:335
+ ... ole.log('hitAreas', ids.length); console.log('missingShapes', ids.fil ...
+                                                                  ~
Missing expression after ','.
At line:2 char:336
+ ... tAreas', ids.length); console.log('missingShapes', ids.filter(id=>!sh ...
+                                                        ~~~~~~~~~~
Unexpected token 'ids.filter' in expression or statement.
At line:2 char:335
+ ... ole.log('hitAreas', ids.length); console.log('missingShapes', ids.fil ...
+                                                                  ~
Missing closing ')' in expression.
At line:2 char:373
+ ... console.log('missingShapes', ids.filter(id=>!shapes[id]).join(','));"
+                                                                       ~
Unexpected token ')' in expression or statement.
At line:2 char:375
+ ... console.log('missingShapes', ids.filter(id=>!shapes[id]).join(','));"
+                                                                         ~
The string is missing the terminator: ".
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : MissingTypename
 

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "node -e 'const fs=require(\"fs\"); const shapes=JSON.parse(fs.readFileSync(\"v2/public/assets/china-province-shapes.json\",\"utf8\")).provinces; const src=fs.readFileSync(\"v2/src/data/map-sources.ts\",\"utf8\"); const ids=Array.from(src.matchAll(/\\{ id: \"(["'^"]+)"/g), m=>m[1]); console.log("hitAreas", ids.length); console.log("missingShapes", ids.filter(id=>!shapes[id]).join(","));'"'" in C:\Users\h\Documents\New project 2
2026-05-09T09:48:05.068111Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.6 seconds
Output:
[eval]:1
const fs=require(fs); const shapes=JSON.parse(fs.readFileSync(v2/public/assets/china-province-shapes.json,utf8)).provinces; const src=fs.readFileSync(v2/src/data/map-sources.ts,utf8); const ids=Array.from(src.matchAll(/\{ id: ([^]+)/g),
                                                                                                                                                                                                                                            
Expression expected

SyntaxError: Unexpected end of input
    at makeContextifyScript (node:internal/vm:194:14)
    at compileScript (node:internal/process/execution:388:10)
    at evalTypeScript (node:internal/process/execution:260:22)
    at node:internal/main/eval_string:71:3

Node.js v25.3.0

 exited 1 in 595ms:
[eval]:1
const fs=require(fs); const shapes=JSON.parse(fs.readFileSync(v2/public/assets/china-province-shapes.json,utf8)).provinces; const src=fs.readFileSync(v2/src/data/map-sources.ts,utf8); const ids=Array.from(src.matchAll(/\{ id: ([^]+)/g),
                                                                                                                                                                                                                                            
Expression expected

SyntaxError: Unexpected end of input
    at makeContextifyScript (node:internal/vm:194:14)
    at compileScript (node:internal/process/execution:388:10)
    at evalTypeScript (node:internal/process/execution:260:22)
    at node:internal/main/eval_string:71:3

Node.js v25.3.0

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$src = Get-Content -Raw -Encoding UTF8 v2/src/data/map-sources.ts
$ids = [regex]::Matches($src, '"'\\{ id: \"(["'^"]+)"'"') | ForEach-Object { "'$_.Groups[1].Value }
$json = Get-Content -Raw -Encoding UTF8 v2/public/assets/china-province-shapes.json | ConvertFrom-Json
$shapeIds = $json.provinces.PSObject.Properties.Name
$missing = $ids | Where-Object { $shapeIds -notcontains $_ }
"hitAreas=$($ids.Count) shapes=$($shapeIds.Count) missing=$($missing -join '"',')\"" in C:\Users\h\Documents\New project 2
 succeeded in 551ms:
hitAreas=34 shapes=33 missing=macau

codex
到这里已经有完整地图/Atlas/section 组件了，当前阻塞从“缺组件”变成了更具体的类型和 lint 问题。最后我会做一次轻量快照确认文件树稳定，再给按优先级排序的 review 结论。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg --files v2/src' in C:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short v2' in C:\Users\h\Documents\New project 2
 succeeded in 725ms:
v2/src\main.tsx
v2/src\App.tsx
v2/src\styles\globals.css
v2/src\data\map-sources.ts
v2/src\data\i18n.ts
v2/src\data\atlas.ts
v2/src\hooks\useCityViews.ts
v2/src\lib\search.ts
v2/src\lib\i18n.ts
v2/src\lib\format.ts
v2/src\store\LanguageContext.tsx
v2/src\store\AtlasContext.tsx
v2/src\components\sections\SourcesNote.tsx
v2/src\components\sections\MuseumFlow.tsx
v2/src\components\sections\HistoryVideo.tsx
v2/src\components\layout\SiteHeader.tsx
v2/src\components\layout\SiteFooter.tsx
v2/src\components\layout\LanguageSwitch.tsx
v2/src\components\search\PlaceSearch.tsx
v2/src\components\map\ProvincePop.tsx
v2/src\components\map\ProvinceClickLayer.tsx
v2/src\components\map\Map3D.tsx
v2/src\components\map\HeroMap.tsx
v2/src\components\atlas\ProvinceRail.tsx
v2/src\components\atlas\CityProfile.tsx
v2/src\components\atlas\CityList.tsx
v2/src\components\atlas\AtlasSection.tsx

 succeeded in 805ms:
?? v2/

codex
我已按最后一次稳定快照读取 `v2/src` 下全部现有文件，并额外看了 `package.json` / Vite 配置。结论：分层方向是对的，但现在还不能算“可维护骨架已成型”，主要问题是构建未过、点击层仍是矩形命中、搜索索引有几个会影响结果质量的设计缺口。

**P0 阻塞项**

1. 当前构建和 lint 不通过。  
`npm run build` 卡在 [CityProfile.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/atlas/CityProfile.tsx:10>)：`lang` 未使用。`npm run lint` 还报 [CityProfile.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/atlas/CityProfile.tsx:25>) 的 `_province` 未使用，以及 [AtlasContext.tsx](<C:/Users/h/Documents/New project 2/v2/src/store/AtlasContext.tsx:79>) / [LanguageContext.tsx](<C:/Users/h/Documents/New project 2/v2/src/store/LanguageContext.tsx:40>) 的 Fast Refresh 规则问题。  
建议：先清掉未用变量；Context 文件拆成 `AtlasProvider.tsx` + `useAtlas.ts`、`LanguageProvider.tsx` + `useLang.ts`，或调整 ESLint 规则，但拆文件更干净。

2. 目标写的是 React 18，但依赖是 React 19。  
见 [package.json](<C:/Users/h/Documents/New project 2/v2/package.json:16>) 和 [package.json](<C:/Users/h/Documents/New project 2/v2/package.json:24>)。如果目标明确是 React 18，应降到 `react/react-dom@18` 和匹配 `@types/react@18`。如果决定用 React 19，就把目标说明改掉，避免后续团队按错误约束设计。

3. “禁止手写矩形点击区”目前还没达标。  
[ProvinceClickLayer.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/map/ProvinceClickLayer.tsx:13>) 仍然遍历 [map-sources.ts](<C:/Users/h/Documents/New project 2/v2/src/data/map-sources.ts:15>) 的 `provinceHitAreas`，并用 `left/top/width/height` 生成矩形按钮。作为临时 MVP 可以，但作为最终重构目标不合格。  
建议：2D 点击层也改用 `china-province-shapes.json` 的省级 path，渲染 SVG path/button，命中区、浮现层、3D 数据共用同一份行政区 shape source。

**P1 架构和状态**

4. `data/lib/store/hooks/components` 分层总体合理。  
`data` 放静态数据，`lib` 放纯函数，`store` 放跨组件 UI 状态，`hooks` 放浏览器副作用，`components` 按 `map/atlas/layout/search/sections` 分域，这个方向可以继续。现在需要补的是“数据一致性验证层”：`atlasData`、`provinceHitAreas`、`provinceTextureSrc`、`china-province-shapes.json`、`officialProvinceBounds` 都各自维护 id，已经出现 shape 数量 33、hit area 34，缺 `macau` 的情况。`Map3D` 在 [Map3D.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/map/Map3D.tsx:122>) 找不到 shape 时会静默空白。

5. `AtlasContext + useReducer` 对这个体量合适。  
目前状态只有 `selectedProvinceId`、`selectedCityId`、`is3DEnabled`，用 reducer 比上 Zustand/Redux 更合适。但 [AtlasContext.tsx](<C:/Users/h/Documents/New project 2/v2/src/store/AtlasContext.tsx:27>) 的 `selectCity` 只写 `cityId`，不维护“城市属于哪个省”的不变量；现在 [PlaceSearch.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/search/PlaceSearch.tsx:23>) 先选省再选城，所以暂时没炸。  
建议：改成 `selectPlace({ provinceId, cityId })` 或 `selectCity({ provinceId, cityId })`，一次 action 保证一致性。hover、drag、pointer 临时状态不要进全局 reducer。

**P1 搜索索引**

6. `lib/search.ts` 思路可用，但要修三个点。  
[search.ts](<C:/Users/h/Documents/New project 2/v2/src/lib/search.ts:38>) 把英文 museum 和中文 museum 分开建记录，并把 `zh/en` 都设成同一个字符串，会导致中文界面出现英文主名或反过来。建议并行拆 `museum` / `museumZh`，生成同一条双语记录。  
[search.ts](<C:/Users/h/Documents/New project 2/v2/src/lib/search.ts:13>) 的 normalize 不处理 apostrophe/hyphen，`Xi'an` 对用户输入 `xian` 不友好。至少加入 `'’\-`，并给城市 id / 常见拼音作为 alias。  
[search.ts](<C:/Users/h/Documents/New project 2/v2/src/lib/search.ts:51>) 和 [search.ts](<C:/Users/h/Documents/New project 2/v2/src/lib/search.ts:76>) 会重复插入景点，例如城市 sites 与 `provinceAttractionSeed` 重复。建议 build 阶段生成 `tokens`，并用 `provinceId + cityId + type + normalizedName` 去重，再按优先级排序。

7. `getAllRecords()` 直接返回内部数组。  
见 [search.ts](<C:/Users/h/Documents/New project 2/v2/src/lib/search.ts:104>)。建议返回 `readonly SearchRecord[]` 或 `searchIndex.slice()`，避免组件误改索引。

**P2 hook 和 UX 完整度**

8. `useSyncExternalStore` 不算严重过度设计。  
因为 `CityList` 和 `CityProfile` 都会显示浏览量，[CityList.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/atlas/CityList.tsx:49>) / [CityProfile.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/atlas/CityProfile.tsx:28>) 需要同步，`useSyncExternalStore` 是合理的轻量外部 store。但 [useCityViews.ts](<C:/Users/h/Documents/New project 2/v2/src/hooks/useCityViews.ts:13>) 没有 `window` guard，也没有监听浏览器原生 `storage` 事件。  
建议：key 改成命名空间如 `chinaAtlas:views:${cityId}`，`readCount` 加环境保护，`subscribe` 里补 `window.addEventListener("storage", ...)`，否则它只同步同 tab 内的手动 `notify()`。

9. “省份浮现 + 全图淡化”已经有雏形，但还缺完整体验组件。  
已有 [HeroMap.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/map/HeroMap.tsx:29>) 做全图淡化，[ProvincePop.tsx](<C:/Users/h/Documents/New project 2/v2/src/components/map/ProvincePop.tsx:16>) 做省份浮现，方向对。还需要：基于真实 path 的 `ProvinceShapeLayer` 替代矩形点击层；使用 [cityMapPoints](<C:/Users/h/Documents/New project 2/v2/src/data/map-sources.ts:101>) 的 `CityPinsLayer`；省份景点列表组件使用 `provinceAttractionSeed`，否则无城市数据的省只显示 pending；`MapAssetBoundary`/fallback 处理 texture 或 3D shape 缺失，避免空白；键盘 Escape/焦点管理/aria-live 提示让浮现状态可访问。

验证：`npm run build` 失败；`npm run lint` 失败；`npm ls three` 能解析到 `three@0.184.0`。当前优先顺序是先让 build/lint 归零，再把矩形点击层替换为官方 shape 驱动。
tokens used
147,347

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
