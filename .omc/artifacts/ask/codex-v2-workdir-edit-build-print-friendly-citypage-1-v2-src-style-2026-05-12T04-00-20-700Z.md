# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-12T04:00:20.703Z

## Original task

在 v2/ workdir 真的 edit + build。

新功能：Print-friendly CityPage 城市页打印样式

要求：
1. v2/src/styles/globals.css 加 @media print 块，针对 CityPage 路径下：
- 隐藏 SiteHeader、SiteFooter、ScrollToTop、CityNav 左 sticky、CityImagePanel 右 sticky、HeroMap、Province3DOverlay、所有 Map 相关组件
- 隐藏所有 onClick 提示按钮（'How to eat it →' / 'Reset' 等）
- 文字色统一改成纯黑（color: #000）
- 链接 href 用 ::after content 显示出 URL
- 卡片去掉 shadow，保留 border 但变成 1px solid #ccc
- 双语文字默认显示 EN（因为打印通常给路边老外看；ZH 可以保留小字）
- page-break-inside: avoid 给主要 article 块
- 每页底部 footer 显示站名 + URL + Page number
2. CityPage 加一个 'Print this page' 按钮在右上角（顶部 cityId header 旁边），点击 window.print()。在 @media print 里把这个按钮隐藏。
3. PaymentsChecklist / TransportGuide / FoodGuide / EmergencyBriefing 在 cityScoped=true 下也要按 print 样式调整（清掉装饰，保留信息）

完成后 npx tsc --noEmit + npm run build 0 error。

报告 200 字以内：哪些 print 规则、改了哪些文件、build 状态。

## Final prompt

在 v2/ workdir 真的 edit + build。

新功能：Print-friendly CityPage 城市页打印样式

要求：
1. v2/src/styles/globals.css 加 @media print 块，针对 CityPage 路径下：
- 隐藏 SiteHeader、SiteFooter、ScrollToTop、CityNav 左 sticky、CityImagePanel 右 sticky、HeroMap、Province3DOverlay、所有 Map 相关组件
- 隐藏所有 onClick 提示按钮（'How to eat it →' / 'Reset' 等）
- 文字色统一改成纯黑（color: #000）
- 链接 href 用 ::after content 显示出 URL
- 卡片去掉 shadow，保留 border 但变成 1px solid #ccc
- 双语文字默认显示 EN（因为打印通常给路边老外看；ZH 可以保留小字）
- page-break-inside: avoid 给主要 article 块
- 每页底部 footer 显示站名 + URL + Page number
2. CityPage 加一个 'Print this page' 按钮在右上角（顶部 cityId header 旁边），点击 window.print()。在 @media print 里把这个按钮隐藏。
3. PaymentsChecklist / TransportGuide / FoodGuide / EmergencyBriefing 在 cityScoped=true 下也要按 print 样式调整（清掉装饰，保留信息）

完成后 npx tsc --noEmit + npm run build 0 error。

报告 200 字以内：哪些 print 规则、改了哪些文件、build 状态。

## Raw output

```text
SUCCESS: The process with PID 615540 (child process of PID 615448) has been terminated.
SUCCESS: The process with PID 615448 (child process of PID 615420) has been terminated.
SUCCESS: The process with PID 615420 (child process of PID 614556) has been terminated.
SUCCESS: The process with PID 614556 (child process of PID 603640) has been terminated.
SUCCESS: The process with PID 615560 (child process of PID 615460) has been terminated.
SUCCESS: The process with PID 615460 (child process of PID 615280) has been terminated.
SUCCESS: The process with PID 615280 (child process of PID 614904) has been terminated.
SUCCESS: The process with PID 614904 (child process of PID 603640) has been terminated.
SUCCESS: The process with PID 615580 (child process of PID 615472) has been terminated.
SUCCESS: The process with PID 615472 (child process of PID 615384) has been terminated.
SUCCESS: The process with PID 615384 (child process of PID 614456) has been terminated.
SUCCESS: The process with PID 614456 (child process of PID 603640) has been terminated.
已完成。Print 规则：CityPage 打印隐藏 header/footer/scroll/nav/右图/map/buttons，黑字，链接附 URL，卡片 #ccc 边框无 shadow，article avoid break，固定页脚，打印前临时 EN。改：CityPage、globals.css、layout/nav/map、4 个 pillar 组件。`tsc`、`build` 均 0 error。


OpenAI Codex v0.128.0 (research preview)
--------
workdir: c:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1a46-ab37-74e0-baea-4bf94c722a6c
--------
user
在 v2/ workdir 真的 edit + build。

新功能：Print-friendly CityPage 城市页打印样式

要求：
1. v2/src/styles/globals.css 加 @media print 块，针对 CityPage 路径下：
- 隐藏 SiteHeader、SiteFooter、ScrollToTop、CityNav 左 sticky、CityImagePanel 右 sticky、HeroMap、Province3DOverlay、所有 Map 相关组件
- 隐藏所有 onClick 提示按钮（'How to eat it →' / 'Reset' 等）
- 文字色统一改成纯黑（color: #000）
- 链接 href 用 ::after content 显示出 URL
- 卡片去掉 shadow，保留 border 但变成 1px solid #ccc
- 双语文字默认显示 EN（因为打印通常给路边老外看；ZH 可以保留小字）
- page-break-inside: avoid 给主要 article 块
- 每页底部 footer 显示站名 + URL + Page number
2. CityPage 加一个 'Print this page' 按钮在右上角（顶部 cityId header 旁边），点击 window.print()。在 @media print 里把这个按钮隐藏。
3. PaymentsChecklist / TransportGuide / FoodGuide / EmergencyBriefing 在 cityScoped=true 下也要按 print 样式调整（清掉装饰，保留信息）

完成后 npx tsc --noEmit + npm run build 0 error。

报告 200 字以内：哪些 print 规则、改了哪些文件、build 状态。
codex
我会先在 `v2` 里确认项目结构和 CityPage 相关组件，再按现有样式体系补打印样式和按钮，最后跑 `tsc` 与 `build`。这属于 React/Next 前端改动，我会按 `react-best-practices` 技能约束来做。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'C:/Users/h/.codex/plugins/cache/openai-curated/build-web-apps/63976030/skills/react-best-practices/SKILL.md'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Force' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Force' in c:\Users\h\Documents\New project 2
 succeeded in 568ms:
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

 succeeded in 662ms:


    目录: C:\Users\h\Documents\New project 2


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----         2026/5/10     22:45                .claude                                                              
d--h--         2026/5/12     11:38                .git                                                                 
d-----         2026/5/12     11:41                .omc                                                                 
d-----         2026/5/10     23:56                .playwright-mcp                                                      
d-----          2026/5/9     16:47                assets                                                               
d-----          2026/5/9     22:56                node_modules                                                         
d-----          2026/5/9     17:01                src                                                                  
d-----         2026/5/12     11:37                v2                                                                   
-a----         2026/5/10     22:52            499 .gitignore                                                           
-a----          2026/5/9     17:21          27818 app.js                                                               
-a----          2026/5/9     17:00          13022 index.html                                                           
-a----          2026/5/9     17:30          11678 map3d.js                                                             
-a----          2026/5/9     22:56           3170 package-lock.json                                                    
-a----          2026/5/9     22:56             62 package.json                                                         
-a----         2026/5/10      1:35          24842 PROJECT_PLAN.md                                                      
-a----          2026/5/9     17:21          41244 styles.css                                                           



 succeeded in 674ms:


    目录: C:\Users\h\Documents\New project 2\v2


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----         2026/5/12     11:37                .omc                                                                 
d-----         2026/5/11      0:09                .react-router                                                        
d-----         2026/5/10     22:41                .vite-react-ssg-temp                                                 
d-----         2026/5/12     11:37                build                                                                
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
-a----         2026/5/12     11:34            450 react-router.config.ts                                               
-a----          2026/5/9     17:35           2425 README.md                                                            
-a----         2026/5/10     23:58           8245 STYLE_GUIDE.md                                                       
-a----          2026/5/9     17:35            617 tsconfig.app.json                                                    
-a----          2026/5/9     17:35            119 tsconfig.json                                                        
-a----         2026/5/10     22:50            617 tsconfig.node.json                                                   
-a----          2026/5/9     23:06              0 vite-dev.err.log                                                     
-a----          2026/5/9     23:13            335 vite-dev.out.log                                                     
-a----         2026/5/12     10:17            806 vite.config.ts                                                       



codex
我已确认 `v2` 是独立的 Vite/React 项目。接下来我会定位 CityPage、全局 CSS、以及四个 cityScoped 组件的类名和结构，避免写成只靠猜测的打印选择器。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "CityPage|CityNav|CityImagePanel|HeroMap|Province3DOverlay|PaymentsChecklist|TransportGuide|FoodGuide|EmergencyBriefing|ScrollToTop|SiteHeader|SiteFooter|How to eat it|Reset|cityScoped" src' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg --files src' in c:\Users\h\Documents\New project 2\v2
 succeeded in 705ms:
src\App.tsx:4:import SiteHeader from "./components/layout/SiteHeader";
src\App.tsx:5:import SiteFooter from "./components/layout/SiteFooter";
src\App.tsx:7:import CityPage from "./pages/CityPage";
src\App.tsx:20:          <SiteHeader />
src\App.tsx:26:            <Route path="/city/:cityId" element={<CityPage />} />
src\App.tsx:32:          <SiteFooter />
src\routes.ts:9:  route("city/:cityId", "./pages/CityPage.tsx"),
src\pages\CityPage.tsx:7:import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
src\pages\CityPage.tsx:8:import TransportGuide from "../components/pillar/TransportGuide";
src\pages\CityPage.tsx:9:import FoodGuide from "../components/pillar/FoodGuide";
src\pages\CityPage.tsx:10:import EmergencyBriefing from "../components/pillar/EmergencyBriefing";
src\pages\CityPage.tsx:13:import CityNav from "../components/city/CityNav";
src\pages\CityPage.tsx:15:import CityImagePanel from "../components/city/CityImagePanel";
src\pages\CityPage.tsx:75:export default function CityPage() {
src\pages\CityPage.tsx:114:        <CityNav />
src\pages\CityPage.tsx:120:          <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
src\pages\CityPage.tsx:121:          <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>
src\pages\CityPage.tsx:122:          <section id="food" className="scroll-mt-24"><FoodGuide cityId={id} /></section>
src\pages\CityPage.tsx:123:          <section id="emergency" className="scroll-mt-24"><EmergencyBriefing cityId={id} /></section>
src\pages\CityPage.tsx:146:        <CityImagePanel cityId={id} />
src\root.tsx:5:import SiteHeader from "./components/layout/SiteHeader";
src\root.tsx:6:import SiteFooter from "./components/layout/SiteFooter";
src\root.tsx:7:import ScrollToTop from "./components/common/ScrollToTop";
src\root.tsx:58:        <SiteHeader />
src\root.tsx:60:        <SiteFooter />
src\root.tsx:61:        <ScrollToTop />
src\pages\GuidePage.tsx:4:import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
src\pages\GuidePage.tsx:106:      {current === "payments" && <PaymentsChecklist />}
src\pages\MapPage.tsx:3:import HeroMap from "../components/map/HeroMap";
src\pages\MapPage.tsx:30:      <HeroMap />
src\data\i18n.ts:30:    reset: "Reset",
src\components\common\ScrollToTop.tsx:4:export default function ScrollToTop() {
src\components\city\CityImagePanel.tsx:11:export default function CityImagePanel({ cityId }: Props) {
src\components\city\CityNav.tsx:5:type CityNavItem = { id: string; en: string; zh: string };
src\components\city\CityNav.tsx:7:const CITY_NAV_ITEMS: CityNavItem[] = [
src\components\city\CityNav.tsx:18:export default function CityNav() {
src\components\layout\SiteFooter.tsx:4:export default function SiteFooter() {
src\components\layout\SiteHeader.tsx:5:export default function SiteHeader() {
src\components\pillar\EmergencyBriefing.tsx:19:export default function EmergencyBriefing({ cityId }: Props) {
src\components\pillar\EmergencyBriefing.tsx:22:  const cityScoped = Boolean(cityId);
src\components\pillar\EmergencyBriefing.tsx:30:    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
src\components\pillar\EmergencyBriefing.tsx:31:      {!cityScoped && (
src\components\pillar\EmergencyBriefing.tsx:44:      {cityScoped && <h2 className="text-xl font-bold">{isZh ? "应急 / 医疗" : "Emergency & Medical"}</h2>}
src\components\pillar\EmergencyBriefing.tsx:58:      {!cityScoped && (
src\components\map\Province3DOverlay.tsx:9:export default function Province3DOverlay() {
src\components\map\Province3DOverlay.tsx:69:                  {lang === "zh" ? "重置" : "Reset"}
src\components\pillar\FoodGuide.tsx:11:export default function FoodGuide({ cityId }: Props) {
src\components\pillar\FoodGuide.tsx:14:  const cityScoped = Boolean(cityId);
src\components\pillar\FoodGuide.tsx:21:    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
src\components\pillar\FoodGuide.tsx:22:      {!cityScoped && (
src\components\pillar\FoodGuide.tsx:35:      {cityScoped && <h2 className="text-xl font-bold">{isZh ? "餐饮" : "Food"}</h2>}
src\components\pillar\FoodGuide.tsx:37:      {!cityScoped && (
src\components\pillar\FoodGuide.tsx:71:                {isZh ? "查看吃法 →" : "How to eat it →"}
src\components\map\HeroMap.tsx:8:import Province3DOverlay from "./Province3DOverlay";
src\components\map\HeroMap.tsx:12:export default function HeroMap() {
src\components\map\HeroMap.tsx:53:          <Province3DOverlay />
src\components\map\HeroMap.tsx:71:              {lang === "zh" ? "重置" : "Reset"}
src\components\pillar\PaymentsChecklist.tsx:14:export default function PaymentsChecklist({ cityId }: Props) {
src\components\pillar\PaymentsChecklist.tsx:17:  const cityScoped = Boolean(cityId);
src\components\pillar\PaymentsChecklist.tsx:23:    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
src\components\pillar\PaymentsChecklist.tsx:24:      {!cityScoped && (
src\components\pillar\PaymentsChecklist.tsx:37:      {cityScoped && <h2 className="text-xl font-bold">{isZh ? "支付" : "Payments"}</h2>}
src\components\pillar\PaymentsChecklist.tsx:73:      <Block title={cityScoped ? (isZh ? "本城支付现状" : "This city — payment status") : (isZh ? "四城支付现状" : "Four-city payment status")}>
src\components\pillar\PaymentsChecklist.tsx:74:        <ul className={`grid gap-2 ${cityScoped ? "" : "md:grid-cols-2"}`}>
src\components\pillar\PaymentsChecklist.tsx:77:              {!cityScoped && <strong className="text-sm">{isZh ? city.cityZh : city.cityEn}</strong>}
src\components\pillar\TransportGuide.tsx:15:export default function TransportGuide({ cityId }: Props) {
src\components\pillar\TransportGuide.tsx:18:  const cityScoped = Boolean(cityId);
src\components\pillar\TransportGuide.tsx:24:    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
src\components\pillar\TransportGuide.tsx:25:      {!cityScoped && (
src\components\pillar\TransportGuide.tsx:38:      {cityScoped && <h2 className="text-xl font-bold">{isZh ? "交通" : "Transport"}</h2>}
src\components\pillar\TransportGuide.tsx:50:      {!cityScoped && (

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path package.json' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/styles/globals.css' in c:\Users\h\Documents\New project 2\v2
 succeeded in 518ms:
src\main.tsx
src\root.tsx
src\routes.ts
src\App.tsx
src\styles\globals.css
src\store\LanguageProvider.tsx
src\hooks\useProvinceShapes.ts
src\pages\SourcesPage.tsx
src\store\language.ts
src\store\AtlasProvider.tsx
src\store\atlas.ts
src\pages\SharePage.tsx
src\hooks\useIsDesktop.ts
src\pages\PlanPage.tsx
src\hooks\useCityViews.ts
src\pages\PhrasebookPage.tsx
src\pages\MapPage.tsx
src\pages\HomePage.tsx
src\pages\GuidePage.tsx
src\pages\CityPage.tsx
src\pages\AskPage.tsx
src\data\city-attractions.ts
src\data\entry-policies.ts
src\data\atlas.ts
src\lib\cityRoutes.ts
src\data\emergency.ts
src\data\city-seasons.ts
src\data\city-tourism-portals.ts
src\data\i18n.ts
src\data\food.ts
src\data\map-sources.ts
src\data\itineraries.ts
src\data\phrasebook.ts
src\data\phase2-preview.ts
src\data\payments.ts
src\data\practical-other.ts
src\data\practical-payments.ts
src\lib\jsonLd.ts
src\lib\i18n.ts
src\lib\format.ts
src\lib\search.ts
src\lib\shapes.ts
src\lib\unsplash.ts
src\data\types.ts
src\data\transport.ts
src\data\top-questions.ts
src\data\sources.ts
src\services\notes.ts
src\components\layout\SiteHeader.tsx
src\components\layout\SiteFooter.tsx
src\components\layout\LanguageSwitch.tsx
src\components\policy\TravelAlerts.tsx
src\components\city\CityNav.tsx
src\components\city\CityIntro.tsx
src\components\city\CityImagePanel.tsx
src\components\city\CitySeasonBlock.tsx
src\components\city\CuisineDrawer.tsx
src\components\map\Map3D.tsx
src\components\map\HeroMap.tsx
src\components\map\MapPreview.tsx
src\components\map\Province3DOverlay.tsx
src\components\map\provinceColors.ts
src\components\map\ProvinceInfoCard.tsx
src\components\map\ProvinceHitAreaLayer.tsx
src\components\map\ProvinceLabelLayer.tsx
src\components\pillar\FoodGuide.tsx
src\components\pillar\EmergencyBriefing.tsx
src\components\pillar\PaymentsChecklist.tsx
src\components\sections\TopQuestions.tsx
src\components\map\ProvinceShapeLayer.tsx
src\components\map\SpecialRegionMarkers.tsx
src\components\pillar\TransportGuide.tsx
src\components\pillar\PaymentsPractical.tsx
src\components\pillar\VisaChecker.tsx
src\components\common\SourcesNote.tsx
src\components\common\ScrollToTop.tsx
src\components\common\PracticalBlock.tsx
src\components\common\MapErrorBoundary.tsx
src\components\common\CityFurtherReading.tsx

 succeeded in 718ms:
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

 succeeded in 762ms:
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

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/pages/CityPage.tsx' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/components/pillar/PaymentsChecklist.tsx' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/components/pillar/TransportGuide.tsx' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/components/pillar/FoodGuide.tsx' in c:\Users\h\Documents\New project 2\v2
 succeeded in 1213ms:
import { useState } from "react";
import clsx from "clsx";
import { CITY_LABELS, cityTransport, railBooking, type CityId } from "../../data/transport";
import { useLang } from "../../store/language";
import PracticalBlock from "../common/PracticalBlock";

const KIND_LABEL = {
  cheapest: { en: "Cheapest", zh: "鏈€渚垮疁" },
  fastest: { en: "Fastest", zh: "鏈€蹇? },
  stable: { en: "Most stable", zh: "鏈€鍙潬" }
};

type Props = { cityId?: CityId };

export default function TransportGuide({ cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const cityScoped = Boolean(cityId);
  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
  const effectiveId: CityId = cityId ?? activeId;
  const active = cityTransport.find((c) => c.cityId === effectiveId)!;

  return (
    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
      {!cityScoped && (
        <header>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "鏀煴 3" : "Pillar 3"}
          </span>
          <h2 className="text-2xl font-bold">{isZh ? "浜ら€? : "Transport"}</h2>
          <p className="text-sm text-muted">
            {isZh
              ? "12306 鍥介檯鐗堣喘绁?+ 鍥涘煄鏈哄満鍒板競鍖?+ 鍦伴搧澶栧崱鎺ュ彈搴?+ 缃戠害杞﹀疄闄呮儏鍐点€?
              : "12306 international booking + airport-to-city for the four cities + metro foreign-card status + ride-hail reality."}
          </p>
        </header>
      )}
      {cityScoped && <h2 className="text-xl font-bold">{isZh ? "浜ら€? : "Transport"}</h2>}

      <article className="flex flex-col gap-3 rounded-xl border border-line bg-white p-5">
        <h3 className="text-sm font-bold uppercase tracking-widest text-muted">
          {isZh ? "12306 鍥介檯鐗? : "12306 international"}
        </h3>
        <RailRow titleEn="Registration" titleZh="娉ㄥ唽" en={railBooking.registration.en} zh={railBooking.registration.zh} />
        <RailRow titleEn="Payment" titleZh="鏀粯" en={railBooking.payment.en} zh={railBooking.payment.zh} />
        <RailRow titleEn="Refund" titleZh="閫€绁? en={railBooking.refund.en} zh={railBooking.refund.zh} />
        <RailRow titleEn="Real-name" titleZh="瀹炲悕" en={railBooking.realName.en} zh={railBooking.realName.zh} />
      </article>

      {!cityScoped && (
        <div role="tablist" aria-label="City selector" className="flex flex-wrap gap-2">
          {cityTransport.map((city) => (
            <button
              key={city.cityId}
              type="button"
              role="tab"
              aria-selected={activeId === city.cityId}
              onClick={() => setActiveId(city.cityId)}
              className={clsx(
                "rounded-full border px-4 py-1.5 text-sm font-bold transition",
                activeId === city.cityId
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-ink hover:border-jade hover:text-jade"
              )}
            >
              {isZh ? CITY_LABELS[city.cityId].zh : CITY_LABELS[city.cityId].en}
            </button>
          ))}
        </div>
      )}

      <article className="flex flex-col gap-4 rounded-xl border border-line bg-white p-5">
        {active.airports.map((airport) => (
          <section key={airport.code} className="flex flex-col gap-2">
            <h4 className="text-sm font-bold">{airport.code} 路 {isZh ? airport.nameZh : airport.nameEn}</h4>
            <ul className="grid gap-2 md:grid-cols-3">
              {airport.options.map((opt) => (
                <li key={opt.kind} className="flex flex-col gap-1 rounded-lg bg-paper p-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
                    {isZh ? KIND_LABEL[opt.kind].zh : KIND_LABEL[opt.kind].en}
                  </span>
                  <strong className="text-sm leading-tight">{isZh ? opt.routeZh : opt.routeEn}</strong>
                  <div className="text-xs text-muted">楼{opt.costCNY} 路 {opt.timeMin} {isZh ? "鍒嗛挓" : "min"}</div>
                  <span className="text-xs leading-snug">{isZh ? opt.paymentZh : opt.paymentEn}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="flex flex-col gap-2 border-t border-line pt-3">
          <h4 className="text-sm font-bold">{isZh ? "鍦伴搧鏀粯" : "Metro payment"}</h4>
          <p className="text-sm leading-relaxed">{isZh ? active.metro.summaryZh : active.metro.summaryEn}</p>
        </section>

        <section className="flex flex-col gap-2 border-t border-line pt-3">
          <h4 className="text-sm font-bold">{isZh ? "缃戠害杞?/ 鍑虹" : "Ride-hail & taxi"}</h4>
          <p className="text-sm leading-relaxed">{isZh ? active.rideHail.zh : active.rideHail.en}</p>
        </section>

        <section className="flex flex-col gap-2 border-t border-line pt-3">
          <h4 className="text-sm font-bold">{isZh ? "甯歌娉ㄦ剰浜嬮」" : "Common pitfalls"}</h4>
          <ul className="grid gap-2">
            {active.pitfalls.map((p, i) => (
              <li key={i} className="rounded-lg bg-amber-50 p-3 text-sm">
                {isZh ? p.zh : p.en}
              </li>
            ))}
          </ul>
        </section>
      </article>

      <PracticalBlock pillar="transport" cityId={cityId} />
    </section>
  );
}

function RailRow({ titleEn, titleZh, en, zh }: { titleEn: string; titleZh: string; en: string; zh: string }) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  return (
    <div className="grid gap-1 border-t border-line pt-2 first:border-t-0 first:pt-0 md:grid-cols-[100px_1fr]">
      <span className="text-xs font-bold uppercase tracking-widest text-muted">{isZh ? titleZh : titleEn}</span>
      <p className="text-sm leading-relaxed">{isZh ? zh : en}</p>
    </div>
  );
}

 succeeded in 1257ms:
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
import CitySeasonBlock from "../components/city/CitySeasonBlock";

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
          <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
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

 succeeded in 1216ms:
import { useState } from "react";
import clsx from "clsx";
import { allergyCardEn, allergyCardZh, cityFood } from "../../data/food";
import { CITY_LABELS, type CityId } from "../../data/transport";
import { useLang } from "../../store/language";
import PracticalBlock from "../common/PracticalBlock";
import CuisineDrawer from "../city/CuisineDrawer";

type Props = { cityId?: CityId };

export default function FoodGuide({ cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const cityScoped = Boolean(cityId);
  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const effectiveId: CityId = cityId ?? activeId;
  const active = cityFood.find((c) => c.cityId === effectiveId)!;

  return (
    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
      {!cityScoped && (
        <header>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "鏀煴 4" : "Pillar 4"}
          </span>
          <h2 className="text-2xl font-bold">{isZh ? "椁愰ギ" : "Food"}</h2>
          <p className="text-sm text-muted">
            {isZh
              ? "鍥涘煄鍦版柟鑿滄枃鍖栥€佸鍥戒汉鍙嬪ソ椁愬尯銆佸鍗栫幇鐘躲€佽繃鏁忎腑鏂囧崱銆?
              : "Local cuisines, foreigner-friendly districts, delivery-app reality, and an allergy card."}
          </p>
        </header>
      )}
      {cityScoped && <h2 className="text-xl font-bold">{isZh ? "椁愰ギ" : "Food"}</h2>}

      {!cityScoped && (
        <div role="tablist" className="flex flex-wrap gap-2">
          {cityFood.map((city) => (
            <button
              key={city.cityId}
              type="button"
              role="tab"
              aria-selected={activeId === city.cityId}
              onClick={() => setActiveId(city.cityId)}
              className={clsx(
                "rounded-full border px-4 py-1.5 text-sm font-bold transition",
                activeId === city.cityId
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-ink hover:border-jade hover:text-jade"
              )}
            >
              {isZh ? CITY_LABELS[city.cityId].zh : CITY_LABELS[city.cityId].en}
            </button>
          ))}
        </div>
      )}

      <article className="grid gap-4 rounded-xl border border-line bg-white p-5 md:grid-cols-2">
        <section className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted">
              {isZh ? "鍦版柟鑿滄枃鍖? : "Local cuisine"}
            </h3>
            {active.cuisine.culturalNotes && (
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="text-[10px] font-bold uppercase tracking-wider text-jade hover:underline"
              >
                {isZh ? "鏌ョ湅鍚冩硶 鈫? : "How to eat it 鈫?}
              </button>
            )}
          </div>
          <p className="text-sm leading-relaxed">{isZh ? active.cuisine.zh : active.cuisine.en}</p>
        </section>
        <Block titleEn="Foreigner-friendly districts" titleZh="澶栫睄娓稿鍙嬪ソ椁愬尯" en={active.districts.en} zh={active.districts.zh} />
        <Block titleEn="Delivery apps" titleZh="澶栧崠骞冲彴" en={active.deliveryNote.en} zh={active.deliveryNote.zh} />
        <section className="flex flex-col gap-2">
          <h3 className="text-xs font-bold uppercase tracking-widest text-muted">{isZh ? "娉ㄦ剰浜嬮」" : "Pitfalls"}</h3>
          <ul className="grid gap-2">
            {active.pitfalls.map((p, i) => (
              <li key={i} className="rounded-lg bg-amber-50 p-3 text-xs leading-relaxed">
                {isZh ? p.zh : p.en}
              </li>
            ))}
          </ul>
        </section>
      </article>

      <CuisineDrawer city={active} open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <article className="flex flex-col gap-3 rounded-xl border border-line bg-paper p-5">
        <header>
          <h3 className="text-base font-bold">{isZh ? "杩囨晱 / 蹇屽彛鍗★紙浜ょ粰鏈嶅姟鍛樻煡鐪嬶級" : "Allergy / dietary card (show to staff)"}</h3>
          <p className="text-xs text-muted">
            {isZh ? "鎶?____ 鏇挎崲鎴愪綘鐨勮繃鏁忓師锛堜腑鑻遍兘缁欙級銆傚嚭鍙戝墠鎴睆瀛樻墜鏈虹浉鍐屻€? : "Fill in your allergen in both versions. Save a screenshot before you fly."}
          </p>
        </header>
        <div className="grid gap-3 md:grid-cols-2">
          <pre className="whitespace-pre-wrap rounded-lg border border-line bg-white p-4 text-sm leading-relaxed">{allergyCardEn}</pre>
          <pre className="whitespace-pre-wrap rounded-lg border border-line bg-white p-4 text-sm leading-relaxed">{allergyCardZh}</pre>
        </div>
      </article>

      <PracticalBlock pillar="food" cityId={cityId} />
    </section>
  );
}

function Block({ titleEn, titleZh, en, zh }: { titleEn: string; titleZh: string; en: string; zh: string }) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-xs font-bold uppercase tracking-widest text-muted">{isZh ? titleZh : titleEn}</h3>
      <p className="text-sm leading-relaxed">{isZh ? zh : en}</p>
    </section>
  );
}

 succeeded in 1421ms:
import {
  atmRule,
  cityPaymentNotes,
  customsRules,
  platformLimits,
  preArrivalChecklist
} from "../../data/payments";
import type { CityId } from "../../data/transport";
import { useLang } from "../../store/language";
import PaymentsPractical from "./PaymentsPractical";

type Props = { cityId?: CityId };

export default function PaymentsChecklist({ cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const cityScoped = Boolean(cityId);
  const cities = cityId
    ? cityPaymentNotes.filter((c) => c.cityId === cityId)
    : cityPaymentNotes;

  return (
    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
      {!cityScoped && (
        <header>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "鏀煴 2" : "Pillar 2"}
          </span>
          <h2 className="text-2xl font-bold">{isZh ? "鏀粯鍑嗗" : "Payments"}</h2>
          <p className="text-sm text-muted">
            {isZh
              ? "鍑哄彂鍓嶅繀鍋氥€佹捣鍏抽槇鍊笺€丄TM 閫夋嫨锛屾瘡鏉￠兘鏉ヨ嚜澶銆佹捣鍏炽€佸悇甯傛斂搴滆嫳鏂囬〉銆?
              : "What to set up before you fly, customs thresholds, ATM rules. Cites PBOC, China Customs, and city government English pages."}
          </p>
        </header>
      )}
      {cityScoped && <h2 className="text-xl font-bold">{isZh ? "鏀粯" : "Payments"}</h2>}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card title={isZh ? "Alipay 鍗曠瑪" : "Alipay per-tx"} big={`$${platformLimits.alipay.perTransactionUSD.toLocaleString()}`} note={isZh ? `骞寸疮 $${platformLimits.alipay.annualCumulativeUSD.toLocaleString()}` : `annual $${platformLimits.alipay.annualCumulativeUSD.toLocaleString()}`} />
        <Card title={isZh ? "WeChat Pay 鍗曠瑪" : "WeChat Pay per-tx"} big={`$${platformLimits.wechat.perTransactionUSD.toLocaleString()}`} note={isZh ? `骞寸疮 $${platformLimits.wechat.annualCumulativeUSD.toLocaleString()}` : `annual $${platformLimits.wechat.annualCumulativeUSD.toLocaleString()}`} />
        <Card title={isZh ? "涓 ATM" : "BOC ATM"} big={`楼${atmRule.perWithdrawalCNY.toLocaleString()}`} note={atmRule.acceptedNetworks.join(" / ")} />
        <Card title={isZh ? "澶栧竵鐜伴噾鐢虫姤" : "Foreign cash declare"} big="$5,000" note={isZh ? "瓒呰繃绛夊€奸』鐢虫姤" : "above this must declare"} />
      </div>

      <Block title={isZh ? "鍑哄彂鍓嶆竻鍗? : "Before you fly"}>
        <ul className="grid gap-2">
          {preArrivalChecklist.map((step, i) => (
            <li key={step.id} className="flex gap-3 rounded-lg border border-line bg-white p-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
              <div className="flex flex-1 flex-col gap-1">
                <strong className="text-sm">{isZh ? step.titleZh : step.titleEn}</strong>
                <p className="text-xs leading-relaxed text-ink/80">{isZh ? step.bodyZh : step.bodyEn}</p>
              </div>
            </li>
          ))}
        </ul>
      </Block>

      <Block title={isZh ? "娴峰叧鐢虫姤闃堝€? : "China Customs thresholds"}>
        <ul className="grid gap-2 sm:grid-cols-2">
          {customsRules.map((rule) => (
            <li key={rule.id} className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
              <strong className="text-sm">{isZh ? rule.titleZh : rule.titleEn}</strong>
              <p className="text-xs leading-relaxed text-ink/80">{isZh ? rule.bodyZh : rule.bodyEn}</p>
            </li>
          ))}
        </ul>
      </Block>

      <PaymentsPractical />

      <Block title={cityScoped ? (isZh ? "鏈煄鏀粯鐜扮姸" : "This city 鈥?payment status") : (isZh ? "鍥涘煄鏀粯鐜扮姸" : "Four-city payment status")}>
        <ul className={`grid gap-2 ${cityScoped ? "" : "md:grid-cols-2"}`}>
          {cities.map((city) => (
            <li key={city.cityId} className="flex flex-col gap-2 rounded-lg border border-line bg-white p-3">
              {!cityScoped && <strong className="text-sm">{isZh ? city.cityZh : city.cityEn}</strong>}
              <ul className="grid gap-1.5">
                {city.bullets.map((bullet, i) => (
                  <li key={i} className="text-xs leading-relaxed text-ink/80">
                    {isZh ? bullet.zh : bullet.en}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Block>
    </section>
  );
}

function Card({ title, big, note }: { title: string; big: string; note: string }) {
  return (
    <article className="flex flex-col gap-1 rounded-xl border border-line bg-white p-4">
      <span className="text-xs font-bold uppercase tracking-widest text-muted">{title}</span>
      <strong className="text-2xl leading-none">{big}</strong>
      <span className="text-xs text-muted">{note}</span>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-sm font-bold uppercase tracking-widest text-muted">{title}</h3>
      {children}
    </section>
  );
}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/components/pillar/EmergencyBriefing.tsx' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/components/common/PracticalBlock.tsx' in c:\Users\h\Documents\New project 2\v2
 succeeded in 689ms:
import { useState } from "react";
import clsx from "clsx";
import {
  cityHotlines,
  embassies,
  hospitals,
  hospitalVisitFlow,
  mfaConsular,
  nationalEmergency
} from "../../data/emergency";
import { CITY_LABELS, type CityId } from "../../data/transport";
import { useLang } from "../../store/language";
import PracticalBlock from "../common/PracticalBlock";

const CITIES: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];

type Props = { cityId?: CityId };

export default function EmergencyBriefing({ cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const cityScoped = Boolean(cityId);
  const [activeId, setActiveId] = useState<CityId>(cityId ?? "beijing");
  const effectiveId: CityId = cityId ?? activeId;

  const cityHospitals = hospitals.filter((h) => h.cityId === effectiveId);
  const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;

  return (
    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
      {!cityScoped && (
        <header>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "鏀煴 5" : "Pillar 5"}
          </span>
          <h2 className="text-2xl font-bold">{isZh ? "绱ф€?/ 鍖荤枟 / 棰嗕簨" : "Emergency, Medical & Consular"}</h2>
          <p className="text-sm text-muted">
            {isZh
              ? "鍥藉鎬ユ晳鍙枫€佸洓鍩庡绫嶅弸濂藉尰闄㈠拰鐑嚎銆佷富瑕侀┗鍗庝娇棰嗛銆?
              : "National emergency lines, foreign-friendly hospitals + multilingual hotlines, embassy contacts."}
          </p>
        </header>
      )}
      {cityScoped && <h2 className="text-xl font-bold">{isZh ? "搴旀€?/ 鍖荤枟" : "Emergency & Medical"}</h2>}

      <ul className="grid gap-2 grid-cols-2 md:grid-cols-4">
        {nationalEmergency.map((row) => (
          <li key={row.number} className="flex flex-col gap-1 rounded-xl border border-line bg-white p-4">
            <strong className="text-3xl leading-none">{row.number}</strong>
            <span className="text-xs font-bold uppercase tracking-widest text-muted">
              {isZh ? row.labelZh : row.labelEn}
            </span>
            <p className="text-xs leading-snug text-ink/80">{isZh ? row.noteZh : row.noteEn}</p>
          </li>
        ))}
      </ul>

      {!cityScoped && (
        <div role="tablist" className="flex flex-wrap gap-2">
          {CITIES.map((id) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeId === id}
              onClick={() => setActiveId(id)}
              className={clsx(
                "rounded-full border px-4 py-1.5 text-sm font-bold transition",
                activeId === id
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-ink hover:border-jade hover:text-jade"
              )}
            >
              {isZh ? CITY_LABELS[id].zh : CITY_LABELS[id].en}
            </button>
          ))}
        </div>
      )}

      <article className="grid gap-4 rounded-xl border border-line bg-white p-5 md:grid-cols-[260px_1fr]">
        <section className="flex flex-col gap-2 rounded-lg bg-paper p-4">
          <span className="text-xs font-bold uppercase tracking-widest text-muted">{isZh ? "鍩庡競鐑嚎" : "City hotline"}</span>
          <strong className="text-2xl leading-none">{cityHotline.number}</strong>
          <ul className="flex flex-wrap gap-1 text-[10px] uppercase tracking-wider">
            {cityHotline.langs.map((l) => (
              <li key={l} className="rounded-full bg-white px-2 py-0.5 text-muted">{l}</li>
            ))}
          </ul>
          <p className="text-xs leading-snug">{isZh ? cityHotline.noteZh : cityHotline.noteEn}</p>
        </section>

        <section className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-muted">{isZh ? "澶栫睄鍙嬪ソ鍖婚櫌" : "Foreign-friendly hospitals"}</span>
          <ul className="grid gap-2">
            {cityHospitals.map((h) => (
              <li key={h.nameEn} className="flex flex-col gap-1 rounded-lg border border-line p-3">
                <strong className="text-sm leading-tight">{isZh ? h.nameZh : h.nameEn}</strong>
                <span className="text-xs text-muted">{h.addressEn}</span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
                  <span><span className="font-bold">{isZh ? "鎬绘満" : "Main"}:</span> {h.phone}</span>
                  {h.emergencyPhone && (
                    <span><span className="font-bold">{isZh ? "鎬ヨ瘖" : "ER"}:</span> {h.emergencyPhone}</span>
                  )}
                </div>
                <span className="text-xs text-muted">{h.intlDept}</span>
                <span className="text-xs text-muted">{h.hours}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <section className="flex flex-col gap-2">
        <h3 className="text-sm font-bold uppercase tracking-widest text-muted">{isZh ? "涓昏椹诲崕澶т娇棣? : "Major embassies in China"}</h3>
        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {embassies.map((e) => (
            <li key={e.country} className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
              <strong className="text-sm">{isZh ? `${e.countryZh}锛?{e.country}锛塦 : e.country}</strong>
              <span className="text-xs text-muted">{e.address}</span>
              <span className="text-xs"><span className="font-bold">{isZh ? "鎬绘満" : "Main"}:</span> {e.phone}</span>
              <span className="text-xs"><span className="font-bold">{isZh ? "搴旀€? : "Emergency"}:</span> {e.emergency}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted">
          {isZh ? "瀹屾暣鍚嶅綍锛? : "Full directory: "}
          <a href={mfaConsular.url} target="_blank" rel="noreferrer" className="font-bold text-jade hover:underline">
            MFA 鈥?{isZh ? mfaConsular.noteZh : mfaConsular.noteEn}
          </a>
        </p>
      </section>

      <section className="flex flex-col gap-2 rounded-xl border border-line bg-white p-5">
        <h3 className="text-sm font-bold uppercase tracking-widest text-muted">{isZh ? "鐪嬬梾娴佺▼" : "Hospital visit flow"}</h3>
        <ol className="grid gap-2">
          {hospitalVisitFlow.map((step) => (
            <li key={step.step} className="flex gap-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">{step.step}</span>
              <div className="flex flex-1 flex-col gap-1">
                <strong className="text-sm">{isZh ? step.titleZh : step.titleEn}</strong>
                <p className="text-xs leading-relaxed text-ink/80">{isZh ? step.bodyZh : step.bodyEn}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <PracticalBlock pillar="emergency" cityId={cityId} />
    </section>
  );
}

 succeeded in 533ms:
import { pitfallsForPillar, type PillarId } from "../../data/practical-other";
import type { CityId } from "../../data/transport";
import { useLang } from "../../store/language";

const HEADER_LABEL: Record<PillarId, { en: string; zh: string }> = {
  entry: { en: "What to know before landing", zh: "钀藉湴鍓嶈鐭ラ亾鐨勪簨" },
  transport: { en: "Practical transport pitfalls", zh: "浜ら€氬疄闄呮敞鎰忎簨椤? },
  food: { en: "Practical food pitfalls", zh: "椁愰ギ瀹為檯娉ㄦ剰浜嬮」" },
  emergency: { en: "Practical medical & emergency pitfalls", zh: "鍖荤枟 / 绱ф€ュ疄闄呮敞鎰忎簨椤? }
};

type Props = { pillar: PillarId; cityId?: CityId };

export default function PracticalBlock({ pillar, cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const items = pitfallsForPillar(pillar, cityId);
  if (items.length === 0) return null;

  return (
    <section className="flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50/40 p-5">
      <header>
        <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
          {isZh ? HEADER_LABEL[pillar].zh : HEADER_LABEL[pillar].en}
        </span>
      </header>
      <ul className="grid gap-2 md:grid-cols-2">
        {items.map((p) => (
          <li key={p.id} className="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3">
            <strong className="text-sm leading-tight">{isZh ? p.titleZh : p.titleEn}</strong>
            <p className="text-xs leading-relaxed text-ink/80">{isZh ? p.bodyZh : p.bodyEn}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/components/city/CityNav.tsx' in c:\Users\h\Documents\New project 2\v2
 succeeded in 382ms:
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useLang } from "../../store/language";

type CityNavItem = { id: string; en: string; zh: string };

const CITY_NAV_ITEMS: CityNavItem[] = [
  { id: "intro", en: "City overview", zh: "鍩庡競浠嬬粛" },
  { id: "season", en: "When to visit", zh: "鏈€浣冲鑺? },
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

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/components/city/CityImagePanel.tsx' in c:\Users\h\Documents\New project 2\v2
 succeeded in 450ms:
import { useEffect, useState } from "react";
import { attractionsByCity } from "../../data/city-attractions";
import type { CityId } from "../../data/transport";
import { unsplashSrcSet } from "../../lib/unsplash";
import { useLang } from "../../store/language";

type Props = { cityId: CityId };

const ROTATE_MS = 5000;

export default function CityImagePanel({ cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const attractions = attractionsByCity(cityId).filter((a) => a.tier === "must-visit");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (attractions.length <= 1) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % attractions.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [attractions.length]);

  if (attractions.length === 0) return null;
  const current = attractions[idx];

  return (
    <aside aria-label={isZh ? "鍩庡競浠ｈ〃鍥? : "City landmark"} className="self-start lg:sticky lg:top-24">
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden rounded-xl border border-line bg-paper">
          <div className="aspect-[3/4] w-full">
            <img
              key={current.id}
              src={current.imageUrl}
              srcSet={unsplashSrcSet(current.imageUrl)}
              sizes="(min-width: 1024px) 300px, 100vw"
              alt={isZh ? current.nameZh : current.nameEn}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="h-full w-full animate-[fadeUp_500ms_ease] object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div className="flex flex-col gap-1 p-3">
            <strong className="text-sm leading-tight">
              {isZh ? current.nameZh : current.nameEn}
            </strong>
            <span className="text-[10px] text-muted">
              {isZh ? current.districtZh : current.districtEn} 路 {current.imageCredit}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          {attractions.map((a, i) => (
            <button
              key={a.id}
              type="button"
              aria-label={isZh ? a.nameZh : a.nameEn}
              onClick={() => setIdx(i)}
              className={`h-1.5 w-6 rounded-full transition ${
                i === idx ? "bg-jade" : "bg-line hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/root.tsx' in c:\Users\h\Documents\New project 2\v2
 succeeded in 381ms:
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
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/App.tsx' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/components/layout/SiteHeader.tsx' in c:\Users\h\Documents\New project 2\v2
 succeeded in 476ms:
import { BrowserRouter, Route, Routes } from "react-router";
import LanguageProvider from "./store/LanguageProvider";
import AtlasProvider from "./store/AtlasProvider";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import HomePage from "./pages/HomePage";
import CityPage from "./pages/CityPage";
import GuidePage from "./pages/GuidePage";
import PlanPage from "./pages/PlanPage";
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
            <Route path="/plan" element={<PlanPage />} />
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

 succeeded in 488ms:
import { Link } from "react-router";
import LanguageSwitch from "./LanguageSwitch";
import { useLang } from "../../store/language";

export default function SiteHeader() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  return (
    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">鏃?/span>
        <strong className="truncate text-xl font-bold leading-none">鏃呰涓浗</strong>
      </Link>
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <nav aria-label={isZh ? "涓诲鑸? : "Main navigation"}>
          <Link
            to="/phrasebook"
            className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted transition hover:border-jade hover:text-jade"
          >
            {isZh ? "搴旀€ョ煭璇? : "Phrases"}
          </Link>
        </nav>
        <LanguageSwitch />
      </div>
    </header>
  );
}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/components/layout/SiteFooter.tsx' in c:\Users\h\Documents\New project 2\v2
 succeeded in 400ms:
import { Link } from "react-router";
import { useLang } from "../../store/language";

export default function SiteFooter() {
  const { t, lang } = useLang();
  const isZh = lang === "zh";
  return (
    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>{t("footerNote")}</p>
      <div className="flex items-center gap-4">
        <Link to="/sources" className="hover:text-jade">
          {isZh ? "淇℃伅鏉ユ簮" : "References"}
        </Link>
        <a href="#top" className="hover:text-jade">{t("backToTop")}</a>
      </div>
    </footer>
  );
}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/components/common/ScrollToTop.tsx' in c:\Users\h\Documents\New project 2\v2
 succeeded in 449ms:
import { useEffect, useState } from "react";
import { useLang } from "../../store/language";

export default function ScrollToTop() {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label={lang === "zh" ? "鍥炲埌椤堕儴" : "Back to top"}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
    >
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
        <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/lib/jsonLd.ts' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "shadow|drop-shadow|Map|map|HeroMap|Province|CityImagePanel|CityNav|PracticalBlock|rounded-xl|bg-amber|bg-paper" src/components src/pages' in c:\Users\h\Documents\New project 2\v2
 succeeded in 439ms:
const FALLBACK_SITE_URL = "https://travel-china.example.com";

export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "") || FALLBACK_SITE_URL;

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
}

export function stringifyJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function breadcrumbListJsonLd(items: Array<{ name: string; path?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {})
    }))
  };
}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "from-|to-|via-|bg-gradient|shadow|ring|backdrop|blur|opacity|fixed|sticky|button|onClick" src/components/pillar src/components/common src/pages/CityPage.tsx src/components/city' in c:\Users\h\Documents\New project 2\v2
 succeeded in 370ms:
src/pages\AskPage.tsx:13:        <span className="self-start rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
src/pages\AskPage.tsx:41:          {badgeLadder.map((tier) => (
src/pages\AskPage.tsx:57:          {sampleQuestions.map((qa) => {
src/pages\AskPage.tsx:60:              <li key={qa.id} className="flex flex-col gap-3 rounded-xl border border-line bg-white p-5">
src/pages\AskPage.tsx:62:                  <span className="rounded-full bg-paper px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">
src/pages\AskPage.tsx:66:                    <span className="rounded-full bg-paper px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">
src/pages\AskPage.tsx:74:                <div className="flex flex-col gap-2 rounded-lg border border-line bg-paper p-4">
src/pages\AskPage.tsx:104:      <section className="flex flex-col gap-3 rounded-xl border border-line bg-paper p-6">
src/pages\AskPage.tsx:155:    <li className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
src/pages\CityPage.tsx:13:import CityNav from "../components/city/CityNav";
src/pages\CityPage.tsx:15:import CityImagePanel from "../components/city/CityImagePanel";
src/pages\CityPage.tsx:41:      ...attractionsByCity(cityId).map((attraction) => ({
src/pages\CityPage.tsx:114:        <CityNav />
src/pages\CityPage.tsx:126:          <section className="flex flex-col gap-3 rounded-xl border border-dashed border-line bg-paper p-6">
src/pages\CityPage.tsx:146:        <CityImagePanel cityId={id} />
src/pages\GuidePage.tsx:40:  mainEntity: topQuestions.map((question) => ({
src/pages\MapPage.tsx:3:import HeroMap from "../components/map/HeroMap";
src/pages\MapPage.tsx:7:export default function MapPage() {
src/pages\MapPage.tsx:24:        <h1 className="text-3xl font-bold leading-tight">{isZh ? "地标地图" : "Landmark map"}</h1>
src/pages\MapPage.tsx:30:      <HeroMap />
src/pages\HomePage.tsx:2:import MapPreview from "../components/map/MapPreview";
src/pages\HomePage.tsx:32:        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
src/pages\HomePage.tsx:77:            : "Start with city landmark photos, then open the map, visa, payment, and travel-note pages."}
src/pages\HomePage.tsx:87:        {CITY_IDS.map((cityId) => (
src/pages\HomePage.tsx:93:        to="/map"
src/pages\HomePage.tsx:94:        aria-label={isZh ? "打开地标地图" : "Open landmark map"}
src/pages\HomePage.tsx:95:        className="group grid overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:border-jade hover:shadow-md lg:grid-cols-[minmax(0,1fr)_420px]"
src/pages\HomePage.tsx:99:            {isZh ? "地图入口" : "Map"}
src/pages\HomePage.tsx:102:            {isZh ? "地标地图" : "Landmark map"}
src/pages\HomePage.tsx:110:            {isZh ? "进入地图 →" : "Open map →"}
src/pages\HomePage.tsx:113:        <div className="h-64 min-w-0 border-t border-line bg-paper/60 p-3 lg:h-auto lg:border-l lg:border-t-0">
src/pages\HomePage.tsx:114:          <MapPreview />
src/pages\HomePage.tsx:119:        {guideLinks.map((item) => (
src/pages\HomePage.tsx:123:            className="group flex min-h-20 items-center justify-between gap-3 rounded-lg border border-line bg-white px-4 py-3 transition hover:border-jade hover:shadow-sm"
src/pages\HomePage.tsx:151:      className="group relative min-h-[260px] overflow-hidden rounded-lg border border-line bg-ink text-white shadow-sm"
src/pages\HomePage.tsx:170:        <strong className="block max-w-full break-words text-xl leading-tight text-white drop-shadow-sm sm:text-2xl">
src/pages\PhrasebookPage.tsx:96:          {phraseCategories.map((category) => {
src/pages\PhrasebookPage.tsx:110:                    ? "border-ink bg-ink text-white shadow-sm"
src/pages\PhrasebookPage.tsx:144:            {activeCategory.phrases.map((phrase) => {
src/pages\PhrasebookPage.tsx:149:                  <article className="grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
src/pages\PhrasebookPage.tsx:167:                            : "border-line bg-paper text-ink hover:border-jade hover:bg-jade-soft"
src/pages\PhrasebookPage.tsx:193:                            : "border-line bg-paper text-ink hover:border-jade hover:bg-jade-soft"
src/pages\PlanPage.tsx:60:          {cityItineraries.map((itinerary) => {
src/pages\PlanPage.tsx:77:                    : "border-transparent bg-paper text-ink hover:border-jade hover:text-jade"
src/pages\PlanPage.tsx:106:            {activeItinerary.days.map((day) => (
src/pages\PlanPage.tsx:115:                  {TIME_SLOTS.map((slot) => (
src/pages\PlanPage.tsx:148:    <article className="flex flex-col gap-3 rounded-lg border border-line bg-white p-4 shadow-sm">
src/pages\PlanPage.tsx:170:      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-950">
src/pages\SharePage.tsx:12:        <span className="self-start rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
src/pages\SharePage.tsx:35:          {moderationFlow.map((step) => (
src/pages\SharePage.tsx:36:            <li key={step.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
src/pages\SharePage.tsx:57:        <div className="flex flex-col gap-3 rounded-xl border border-dashed border-line bg-paper p-6 opacity-90">
src/pages\SharePage.tsx:92:          <label className="mt-2 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 p-3">
src/pages\SharePage.tsx:100:          <label className="flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 p-3">
src/pages\SharePage.tsx:127:          {sampleShares.map((s) => (
src/pages\SharePage.tsx:128:            <li key={s.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-5">
src/pages\SharePage.tsx:130:                <span className="rounded-full bg-paper px-2 py-0.5 font-bold uppercase tracking-wider text-muted">
src/pages\SharePage.tsx:145:                <span className="rounded-full bg-paper px-2 py-0.5 font-bold">
src/pages\SharePage.tsx:148:                <span className="rounded-full bg-amber-50 px-2 py-0.5 font-bold text-amber-800">
src/components\city\CityIntro.tsx:65:    const seen = new Map<string, { en: string; zh: string; count: number }>();
src/components\city\CityIntro.tsx:72:    return Array.from(seen.entries()).map(([key, value]) => ({ key, ...value }));
src/components\city\CityIntro.tsx:88:          {facts.map((f) => (
src/components\city\CityIntro.tsx:116:          {districts.map((d) => (
src/components\city\CityIntro.tsx:128:          {visible.map((a) => (
src/components\city\CityIntro.tsx:129:            <li key={a.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
src/components\city\CityIntro.tsx:136:                      : "bg-amber-100 text-amber-900"
src/components\city\CityIntro.tsx:161:          <p className="rounded-lg border border-dashed border-line bg-paper p-4 text-sm text-muted">
src/pages\SourcesPage.tsx:94:      {sorted.map((s, i) => (
src/components\city\CityImagePanel.tsx:11:export default function CityImagePanel({ cityId }: Props) {
src/components\city\CityImagePanel.tsx:31:        <div className="overflow-hidden rounded-xl border border-line bg-paper">
src/components\city\CityImagePanel.tsx:58:          {attractions.map((a, i) => (
src/components\city\CityNav.tsx:5:type CityNavItem = { id: string; en: string; zh: string };
src/components\city\CityNav.tsx:7:const CITY_NAV_ITEMS: CityNavItem[] = [
src/components\city\CityNav.tsx:18:export default function CityNav() {
src/components\city\CityNav.tsx:25:      .map((item) => document.getElementById(item.id))
src/components\city\CityNav.tsx:47:      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
src/components\city\CityNav.tsx:50:        {CITY_NAV_ITEMS.map((item) => {
src/components\city\CityNav.tsx:60:                    : "text-ink/80 hover:bg-paper hover:text-ink"
src/components\city\CuisineDrawer.tsx:46:          "fixed inset-x-0 bottom-0 z-50 flex max-h-[85vh] flex-col rounded-t-2xl bg-paper shadow-2xl transition-transform duration-300 sm:bottom-auto sm:right-0 sm:top-0 sm:h-full sm:max-h-none sm:max-w-[480px] sm:rounded-none sm:rounded-l-2xl",
src/components\city\CitySeasonBlock.tsx:16:  med: { en: "Medium crowds", zh: "中等人流", className: "border-amber-200 bg-amber-50 text-amber-900" },
src/components\city\CitySeasonBlock.tsx:37:      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
src/components\city\CitySeasonBlock.tsx:50:        {season.monthlyClimate.map((climate) => {
src/components\city\CitySeasonBlock.tsx:69:                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
src/components\city\CitySeasonBlock.tsx:73:                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
src/components\city\CitySeasonBlock.tsx:92:          {season.watchOuts.map((item) => (
src/components\city\CitySeasonBlock.tsx:95:              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
src/components\city\CitySeasonBlock.tsx:113:      {[1, 2, 3].map((value) => (
src/components\layout\LanguageSwitch.tsx:18:      {OPTIONS.map((option) => {
src/components\common\CityFurtherReading.tsx:29:        {portals.map((p) => (
src/components\tools\CurrencyConverter.tsx:31:    () => sourceCurrencies.map((code) => exchangeRateBaseline.rates[code]),
src/components\tools\CurrencyConverter.tsx:36:    <section className="flex flex-col gap-4 rounded-xl border border-line bg-white p-5 shadow-sm">
src/components\tools\CurrencyConverter.tsx:68:            {currencyOptions.map((option) => (
src/components\common\MapErrorBoundary.tsx:3:type MapErrorBoundaryProps = {
src/components\common\MapErrorBoundary.tsx:9:type MapErrorBoundaryState = {
src/components\common\MapErrorBoundary.tsx:13:export default class MapErrorBoundary extends Component<MapErrorBoundaryProps, MapErrorBoundaryState> {
src/components\common\MapErrorBoundary.tsx:14:  state: MapErrorBoundaryState = {
src/components\common\MapErrorBoundary.tsx:18:  static getDerivedStateFromError(): MapErrorBoundaryState {
src/components\common\MapErrorBoundary.tsx:22:  componentDidUpdate(prevProps: MapErrorBoundaryProps) {
src/components\common\MapErrorBoundary.tsx:29:    console.error("3D map overlay failed to load", error, errorInfo);
src/components\layout\SiteHeader.tsx:10:    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
src/components\common\PracticalBlock.tsx:14:export default function PracticalBlock({ pillar, cityId }: Props) {
src/components\common\PracticalBlock.tsx:21:    <section className="flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50/40 p-5">
src/components\common\PracticalBlock.tsx:28:        {items.map((p) => (
src/components\common\ScrollToTop.tsx:23:      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
src/components\policy\TravelAlerts.tsx:78:        {alerts.map((alert) => (
src/components\policy\TravelAlerts.tsx:83:              alert.severity === "warn" ? "border-amber-300 bg-amber-50" : "border-line bg-white"
src/components\sections\TopQuestions.tsx:26:        {topQuestions.map((q) => {
src/components\map\HeroMap.tsx:5:import ProvinceShapeLayer from "./ProvinceShapeLayer";
src/components\map\HeroMap.tsx:6:import ProvinceLabelLayer from "./ProvinceLabelLayer";
src/components\map\HeroMap.tsx:7:import ProvinceInfoCard from "./ProvinceInfoCard";
src/components\map\HeroMap.tsx:8:import Province3DOverlay from "./Province3DOverlay";
src/components\map\HeroMap.tsx:10:import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";
src/components\map\HeroMap.tsx:12:export default function HeroMap() {
src/components\map\HeroMap.tsx:15:  const { selectedProvinceId, province, is3DEnabled, reset, toggle3D } = useAtlas();
src/components\map\HeroMap.tsx:16:  const focused = Boolean(selectedProvinceId);
src/components\map\HeroMap.tsx:30:      aria-label="China interactive map"
src/components\map\HeroMap.tsx:31:      data-selected-province={selectedProvinceId ?? undefined}
src/components\map\HeroMap.tsx:44:        className={`china-map-surface relative overflow-hidden rounded-lg border border-line bg-white/70 shadow-sm ${focused ? "min-h-[420px]" : "min-h-[300px] sm:min-h-[260px]"}`}
src/components\map\HeroMap.tsx:48:          <ProvinceShapeLayer enable3D={isDesktop} />
src/components\map\HeroMap.tsx:49:          <ProvinceLabelLayer />
src/components\map\HeroMap.tsx:50:          <ProvinceHitAreaLayer enable3D={isDesktop} />
src/components\map\HeroMap.tsx:52:          <ProvinceInfoCard enable3D={isDesktop} showDesktop3DNotice={!isDesktop} />
src/components\map\HeroMap.tsx:53:          <Province3DOverlay />
src/components\map\Map3D.tsx:4:import { atlasData, provinceAttractionSeed, type ProvinceRecord } from "../../data/atlas";
src/components\map\Map3D.tsx:9:import { cityMapPoints, provinceHitAreas, type ProvinceHitArea } from "../../data/map-sources";
src/components\map\Map3D.tsx:16:type Map3DProps = {
src/components\map\Map3D.tsx:17:  province: ProvinceRecord;
src/components\map\Map3D.tsx:34:type MapLoadState = "loading" | "ready" | "missing-key" | "blocked" | "error";
src/components\map\Map3D.tsx:48:const FALLBACK_AREA: ProvinceHitArea = {
src/components\map\Map3D.tsx:73:function areaToCameraBounds(area: ProvinceHitArea): CameraBounds {
src/components\map\Map3D.tsx:86:function getProvinceArea(provinceId: string) {
src/components\map\Map3D.tsx:90:function getProvinceLabel(province: ProvinceRecord, lang: Lang) {
src/components\map\Map3D.tsx:98:function getCityPosition(cityId: string, fallbackArea: ProvinceHitArea, index: number): LonLat {
src/components\map\Map3D.tsx:99:  const point = cityMapPoints[cityId];
src/components\map\Map3D.tsx:113:function getAttractionPosition(area: ProvinceHitArea, index: number): LonLat {
src/components\map\Map3D.tsx:131:  return new Cesium.WebMapTileServiceImageryProvider({
src/components\map\Map3D.tsx:199:function addProvinceFrame(
src/components\map\Map3D.tsx:251:function addProvinceEntities(
src/components\map\Map3D.tsx:254:  province: ProvinceRecord,
src/components\map\Map3D.tsx:256:  area: ProvinceHitArea,
src/components\map\Map3D.tsx:260:  addLabelEntity(Cesium, viewer, center, getProvinceLabel(province, lang), "#19c7a6", 14);
src/components\map\Map3D.tsx:309:function resolveProvince(provinceId: string, province: ProvinceRecord) {
src/components\map\Map3D.tsx:334:export default function Map3D({ province, provinceId, lang }: Map3DProps) {
src/components\map\Map3D.tsx:343:  const [loadState, setLoadState] = useState<MapLoadState>(token ? "loading" : "missing-key");
src/components\map\Map3D.tsx:344:  const selectedProvince = useMemo(() => resolveProvince(provinceId, province), [province, provinceId]);
src/components\map\Map3D.tsx:412:        const area = getProvinceArea(provinceId);
src/components\map\Map3D.tsx:414:        addProvinceFrame(Cesium, viewer, bounds, getProvinceLabel(selectedProvince, lang));
src/components\map\Map3D.tsx:415:        addProvinceEntities(Cesium, viewer, selectedProvince, provinceId, area, lang);
src/components\map\Map3D.tsx:456:  }, [lang, provinceId, selectedProvince, token]);
src/components\map\Map3D.tsx:470:          <div className="w-full max-w-md rounded-lg border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur sm:p-5">
src/components\map\Map3D.tsx:492:          <div className="w-full max-w-lg rounded-lg border border-red-200/25 bg-red-950/55 p-4 shadow-2xl backdrop-blur sm:p-5">
src/components\map\Map3D.tsx:499:                : "The current key is not returning map images. Check key permissions, domain whitelist for 127.0.0.1/localhost, and browser-side service access in the Tianditu console."}
src/components\map\MapPreview.tsx:2:import { useProvinceShapes } from "../../hooks/useProvinceShapes";
src/components\map\MapPreview.tsx:7:export default function MapPreview() {
src/components\map\MapPreview.tsx:8:  const { shapes, error } = useProvinceShapes();
src/components\map\MapPreview.tsx:17:          : "Map outline failed to load. Refresh to retry."}
src/components\map\MapPreview.tsx:33:      {Object.values(shapes).map((shape) =>
src/components\map\MapPreview.tsx:34:        shape.paths.map((path, index) => (
src/components\pillar\EmergencyBriefing.tsx:13:import PracticalBlock from "../common/PracticalBlock";
src/components\pillar\EmergencyBriefing.tsx:47:        {nationalEmergency.map((row) => (
src/components\pillar\EmergencyBriefing.tsx:48:          <li key={row.number} className="flex flex-col gap-1 rounded-xl border border-line bg-white p-4">
src/components\pillar\EmergencyBriefing.tsx:60:          {CITIES.map((id) => (
src/components\pillar\EmergencyBriefing.tsx:80:      <article className="grid gap-4 rounded-xl border border-line bg-white p-5 md:grid-cols-[260px_1fr]">
src/components\pillar\EmergencyBriefing.tsx:81:        <section className="flex flex-col gap-2 rounded-lg bg-paper p-4">
src/components\pillar\EmergencyBriefing.tsx:85:            {cityHotline.langs.map((l) => (
src/components\pillar\EmergencyBriefing.tsx:95:            {cityHospitals.map((h) => (
src/components\pillar\EmergencyBriefing.tsx:116:          {embassies.map((e) => (
src/components\pillar\EmergencyBriefing.tsx:133:      <section className="flex flex-col gap-2 rounded-xl border border-line bg-white p-5">
src/components\pillar\EmergencyBriefing.tsx:136:          {hospitalVisitFlow.map((step) => (
src/components\pillar\EmergencyBriefing.tsx:148:      <PracticalBlock pillar="emergency" cityId={cityId} />
src/components\pillar\FoodGuide.tsx:6:import PracticalBlock from "../common/PracticalBlock";
src/components\pillar\FoodGuide.tsx:39:          {cityFood.map((city) => (
src/components\pillar\FoodGuide.tsx:59:      <article className="grid gap-4 rounded-xl border border-line bg-white p-5 md:grid-cols-2">
src/components\pillar\FoodGuide.tsx:82:            {active.pitfalls.map((p, i) => (
src/components\pillar\FoodGuide.tsx:83:              <li key={i} className="rounded-lg bg-amber-50 p-3 text-xs leading-relaxed">
src/components\pillar\FoodGuide.tsx:93:      <article className="flex flex-col gap-3 rounded-xl border border-line bg-paper p-5">
src/components\pillar\FoodGuide.tsx:106:      <PracticalBlock pillar="food" cityId={cityId} />
src/components\map\Province3DOverlay.tsx:2:import MapErrorBoundary from "../common/MapErrorBoundary";
src/components\map\Province3DOverlay.tsx:7:const Map3D = lazy(() => import("./Map3D"));
src/components\map\Province3DOverlay.tsx:9:export default function Province3DOverlay() {
src/components\map\Province3DOverlay.tsx:10:  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
src/components\map\Province3DOverlay.tsx:14:  if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
src/components\map\Province3DOverlay.tsx:19:      className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
src/components\map\Province3DOverlay.tsx:41:            aria-label={lang === "zh" ? "关闭 3D 地图" : "Close 3D map"}
src/components\map\Province3DOverlay.tsx:43:            className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-lg font-bold leading-none text-ink shadow-sm hover:border-jade hover:text-jade"
src/components\map\Province3DOverlay.tsx:51:        <MapErrorBoundary
src/components\map\Province3DOverlay.tsx:52:          resetKey={selectedProvinceId}
src/components\map\Province3DOverlay.tsx:62:                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
src/components\map\Province3DOverlay.tsx:82:            <Map3D province={province} provinceId={selectedProvinceId} lang={lang} />
src/components\map\Province3DOverlay.tsx:84:        </MapErrorBoundary>
src/components\pillar\PaymentsChecklist.tsx:48:          {preArrivalChecklist.map((step, i) => (
src/components\pillar\PaymentsChecklist.tsx:62:          {customsRules.map((rule) => (
src/components\pillar\PaymentsChecklist.tsx:75:          {cities.map((city) => (
src/components\pillar\PaymentsChecklist.tsx:79:                {city.bullets.map((bullet, i) => (
src/components\pillar\PaymentsChecklist.tsx:95:    <article className="flex flex-col gap-1 rounded-xl border border-line bg-white p-4">
src/components\pillar\PaymentsPractical.tsx:17:  both: { en: "Both", zh: "两个 App", style: "bg-amber-100 text-amber-900" }
src/components\pillar\PaymentsPractical.tsx:24:  const grouped = PHASE_ORDER.map((phase) => ({
src/components\pillar\PaymentsPractical.tsx:30:    <section className="flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50/40 p-5">
src/components\pillar\PaymentsPractical.tsx:41:        {grouped.map(({ phase, items }) => (
src/components\pillar\PaymentsPractical.tsx:56:        {items.map((g) => (
src/components\map\ProvinceHitAreaLayer.tsx:1:import { provinceHitAreas } from "../../data/map-sources";
src/components\map\ProvinceHitAreaLayer.tsx:7:type ProvinceHitAreaLayerProps = {
src/components\map\ProvinceHitAreaLayer.tsx:11:export default function ProvinceHitAreaLayer({ enable3D }: ProvinceHitAreaLayerProps) {
src/components\map\ProvinceHitAreaLayer.tsx:13:  const { selectedProvinceId, selectPlace } = useAtlas();
src/components\map\ProvinceHitAreaLayer.tsx:15:  if (selectedProvinceId) return null;
src/components\map\ProvinceHitAreaLayer.tsx:21:        .map((area) => (
src/components\pillar\TransportGuide.tsx:5:import PracticalBlock from "../common/PracticalBlock";
src/components\pillar\TransportGuide.tsx:40:      <article className="flex flex-col gap-3 rounded-xl border border-line bg-white p-5">
src/components\pillar\TransportGuide.tsx:52:          {cityTransport.map((city) => (
src/components\pillar\TransportGuide.tsx:72:      <article className="flex flex-col gap-4 rounded-xl border border-line bg-white p-5">
src/components\pillar\TransportGuide.tsx:73:        {active.airports.map((airport) => (
src/components\pillar\TransportGuide.tsx:77:              {airport.options.map((opt) => (
src/components\pillar\TransportGuide.tsx:78:                <li key={opt.kind} className="flex flex-col gap-1 rounded-lg bg-paper p-3">
src/components\pillar\TransportGuide.tsx:104:            {active.pitfalls.map((p, i) => (
src/components\pillar\TransportGuide.tsx:105:              <li key={i} className="rounded-lg bg-amber-50 p-3 text-sm">
src/components\pillar\TransportGuide.tsx:113:      <PracticalBlock pillar="transport" cityId={cityId} />
src/components\pillar\VisaChecker.tsx:11:import PracticalBlock from "../common/PracticalBlock";
src/components\pillar\VisaChecker.tsx:56:            className="rounded-lg border border-line bg-paper px-3 py-2 text-sm focus:border-ink focus:outline-none"
src/components\pillar\VisaChecker.tsx:59:            {sortedCountries.map((c) => (
src/components\pillar\VisaChecker.tsx:74:      <PracticalBlock pillar="entry" />
src/components\pillar\VisaChecker.tsx:122:      <div className="flex flex-col gap-2 rounded-lg bg-paper p-4">
src/components\pillar\VisaChecker.tsx:136:    <div className="flex flex-col gap-2 rounded-lg bg-amber-50 p-4">
src/components\pillar\VisaChecker.tsx:207:    <article className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
src/components\pillar\VisaChecker.tsx:220:    <div className="rounded-xl border border-line bg-white p-5">
src/components\pillar\VisaChecker.tsx:232:        {phase1TransitPorts.map((port) => (
src/components\pillar\VisaChecker.tsx:233:          <li key={port.portEn} className="flex items-center justify-between rounded-lg bg-paper px-3 py-2">
src/components\map\ProvinceInfoCard.tsx:8:type ProvinceInfoCardProps = {
src/components\map\ProvinceInfoCard.tsx:13:export default function ProvinceInfoCard({ enable3D, showDesktop3DNotice }: ProvinceInfoCardProps) {
src/components\map\ProvinceInfoCard.tsx:14:  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
src/components\map\ProvinceInfoCard.tsx:19:  if (!selectedProvinceId || !province || is3DEnabled) return null;
src/components\map\ProvinceInfoCard.tsx:21:  const attractions = provinceAttractionSeed[selectedProvinceId] ?? [];
src/components\map\ProvinceInfoCard.tsx:37:      className="absolute bottom-3 left-3 z-20 flex max-h-[78%] w-[300px] flex-col gap-3 overflow-auto rounded-xl border border-line bg-white/95 p-4 shadow-xl backdrop-blur animate-[fadeUp_400ms_ease-out]"
src/components\map\ProvinceInfoCard.tsx:55:            {province.cities.map((city) => (
src/components\map\ProvinceInfoCard.tsx:60:                  className="flex w-full flex-col rounded-md px-2 py-1.5 text-left transition hover:bg-paper"
src/components\map\ProvinceInfoCard.tsx:75:            {attractions.map((attraction) => (
src/components\map\ProvinceInfoCard.tsx:78:                className="rounded-full bg-paper px-2 py-1 text-xs text-muted"
src/components\map\SpecialRegionMarkers.tsx:2:import { provinceHitAreas } from "../../data/map-sources";
src/components\map\SpecialRegionMarkers.tsx:18:  const { selectedProvinceId, selectPlace } = useAtlas();
src/components\map\SpecialRegionMarkers.tsx:21:  if (selectedProvinceId) return null;
src/components\map\SpecialRegionMarkers.tsx:25:      {visible.map((area) => {
src/components\map\SpecialRegionMarkers.tsx:40:            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
src/components\map\SpecialRegionMarkers.tsx:43:            <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />
src/components\map\ProvinceLabelLayer.tsx:3:import { useProvinceShapes } from "../../hooks/useProvinceShapes";
src/components\map\ProvinceLabelLayer.tsx:5:import { provinceHitAreas } from "../../data/map-sources";
src/components\map\ProvinceLabelLayer.tsx:9:const labelMap = new Map(provinceHitAreas.map((a) => [a.id, a]));
src/components\map\ProvinceLabelLayer.tsx:19:export default function ProvinceLabelLayer() {
src/components\map\ProvinceLabelLayer.tsx:20:  const { shapes } = useProvinceShapes();
src/components\map\ProvinceLabelLayer.tsx:22:  const { selectedProvinceId } = useAtlas();
src/components\map\ProvinceLabelLayer.tsx:27:    if (!shapes || !viewBox || !selectedProvinceId) return { tx: 0, ty: 0, scale: 1 };
src/components\map\ProvinceLabelLayer.tsx:28:    const shape = shapes[selectedProvinceId];
src/components\map\ProvinceLabelLayer.tsx:30:  }, [shapes, viewBox, selectedProvinceId]);
src/components\map\ProvinceLabelLayer.tsx:34:  const focused = Boolean(selectedProvinceId);
src/components\map\ProvinceLabelLayer.tsx:38:      {Object.values(shapes).map((shape) => {
src/components\map\ProvinceLabelLayer.tsx:46:        const active = shape.id === selectedProvinceId;
src/components\map\ProvinceLabelLayer.tsx:48:        const label = labelMap.get(shape.id);
src/components\map\ProvinceLabelLayer.tsx:57:              active && "rounded-full bg-jade px-2 py-1 text-sm text-white shadow-lg",
src/components\map\ProvinceShapeLayer.tsx:3:import { useProvinceShapes } from "../../hooks/useProvinceShapes";
src/components\map\ProvinceShapeLayer.tsx:4:import { computeFocusTransform, computeUnionViewBox, type ProvinceShape } from "../../lib/shapes";
src/components\map\ProvinceShapeLayer.tsx:5:import { provinceHitAreas } from "../../data/map-sources";
src/components\map\ProvinceShapeLayer.tsx:10:const labelMap = new Map(provinceHitAreas.map((a) => [a.id, a]));
src/components\map\ProvinceShapeLayer.tsx:16:  shape: ProvinceShape;
src/components\map\ProvinceShapeLayer.tsx:23:type ProvinceShapeLayerProps = {
src/components\map\ProvinceShapeLayer.tsx:27:function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
src/components\map\ProvinceShapeLayer.tsx:66:      {shape.paths.map((d, i) => (
src/components\map\ProvinceShapeLayer.tsx:82:export default function ProvinceShapeLayer({ enable3D }: ProvinceShapeLayerProps) {
src/components\map\ProvinceShapeLayer.tsx:83:  const { shapes, error } = useProvinceShapes();
src/components\map\ProvinceShapeLayer.tsx:85:  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
src/components\map\ProvinceShapeLayer.tsx:90:    if (!shapes || !viewBox || !selectedProvinceId) return "translate(0%, 0%) scale(1)";
src/components\map\ProvinceShapeLayer.tsx:91:    const shape = shapes[selectedProvinceId];
src/components\map\ProvinceShapeLayer.tsx:97:  }, [shapes, viewBox, selectedProvinceId]);
src/components\map\ProvinceShapeLayer.tsx:104:          : "Map outline failed to load. Refresh to retry."}
src/components\map\ProvinceShapeLayer.tsx:111:  const focused = Boolean(selectedProvinceId);
src/components\map\ProvinceShapeLayer.tsx:114:    a.id === selectedProvinceId ? 1 : b.id === selectedProvinceId ? -1 : 0
src/components\map\ProvinceShapeLayer.tsx:133:        {ordered.map((shape) => {
src/components\map\ProvinceShapeLayer.tsx:134:          const active = shape.id === selectedProvinceId;
src/components\map\ProvinceShapeLayer.tsx:135:          const label = labelMap.get(shape.id);
src/components\map\ProvinceShapeLayer.tsx:138:            <ProvinceShapeButton
src/components\map\ProvinceShapeLayer.tsx:144:              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null, enable3D))}

 succeeded in 401ms:
src/pages/CityPage.tsx:4:import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
src/pages/CityPage.tsx:76:  const { cityId } = useParams<{ cityId: string }>();
src/pages/CityPage.tsx:98:        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
src/pages/CityPage.tsx:102:        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
src/components/city\CuisineDrawer.tsx:35:        onClick={onClose}
src/components/city\CuisineDrawer.tsx:37:          "fixed inset-0 z-40 bg-ink/30 backdrop-blur-sm transition-opacity duration-200",
src/components/city\CuisineDrawer.tsx:38:          open ? "opacity-100" : "pointer-events-none opacity-0"
src/components/city\CuisineDrawer.tsx:46:          "fixed inset-x-0 bottom-0 z-50 flex max-h-[85vh] flex-col rounded-t-2xl bg-paper shadow-2xl transition-transform duration-300 sm:bottom-auto sm:right-0 sm:top-0 sm:h-full sm:max-h-none sm:max-w-[480px] sm:rounded-none sm:rounded-l-2xl",
src/components/city\CuisineDrawer.tsx:61:          <button
src/components/city\CuisineDrawer.tsx:62:            type="button"
src/components/city\CuisineDrawer.tsx:63:            onClick={onClose}
src/components/city\CuisineDrawer.tsx:75:          </button>
src/components/city\CitySeasonBlock.tsx:8:const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
src/components/city\CitySeasonBlock.tsx:14:const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
src/components/city\CitySeasonBlock.tsx:37:      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
src/components/city\CitySeasonBlock.tsx:111:      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
src/components/city\CitySeasonBlock.tsx:118:            value <= strength ? "opacity-90" : "opacity-20",
src/components/pillar\VisaChecker.tsx:188:            : "Free pre-fill online; kiosk or paper card available at port; ignore counterfeit pay-to-fill sites."
src/components/pillar\VisaChecker.tsx:201:  title: string;
src/components/pillar\VisaChecker.tsx:202:  figure: string;
src/components/pillar\VisaChecker.tsx:203:  unit: string;
src/components/pillar\VisaChecker.tsx:204:  body: string;
src/components/common\PracticalBlock.tsx:5:const HEADER_LABEL: Record<PillarId, { en: string; zh: string }> = {
src/components/city\CityIntro.tsx:9:const CITY_BLURB: Record<CityId, { en: string; zh: string }> = {
src/components/city\CityIntro.tsx:28:const CITY_FACTS: Record<CityId, Array<{ en: string; zh: string }>> = {
src/components/city\CityIntro.tsx:61:  const blurb = CITY_BLURB[cityId];
src/components/city\CityIntro.tsx:65:    const seen = new Map<string, { en: string; zh: string; count: number }>();
src/components/city\CityIntro.tsx:75:  const [selected, setSelected] = useState<string>(ALL_KEY);
src/components/city\CityIntro.tsx:85:          {isZh ? blurb.zh : blurb.en}
src/components/city\CityIntro.tsx:114:            onClick={() => setSelected(ALL_KEY)}
src/components/city\CityIntro.tsx:122:              onClick={() => setSelected(d.key)}
src/components/city\CityIntro.tsx:174:  onClick
src/components/city\CityIntro.tsx:176:  label: string;
src/components/city\CityIntro.tsx:179:  onClick: () => void;
src/components/city\CityIntro.tsx:182:    <button
src/components/city\CityIntro.tsx:183:      type="button"
src/components/city\CityIntro.tsx:186:      onClick={onClick}
src/components/city\CityIntro.tsx:198:    </button>
src/components/common\ScrollToTop.tsx:19:    <button
src/components/common\ScrollToTop.tsx:20:      type="button"
src/components/common\ScrollToTop.tsx:22:      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
src/components/common\ScrollToTop.tsx:23:      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
src/components/common\ScrollToTop.tsx:28:    </button>
src/components/pillar\EmergencyBriefing.tsx:61:            <button
src/components/pillar\EmergencyBriefing.tsx:63:              type="button"
src/components/pillar\EmergencyBriefing.tsx:66:              onClick={() => setActiveId(id)}
src/components/pillar\EmergencyBriefing.tsx:75:            </button>
src/components/city\CityNav.tsx:5:type CityNavItem = { id: string; en: string; zh: string };
src/components/city\CityNav.tsx:21:  const [active, setActive] = useState<string>("intro");
src/components/city\CityNav.tsx:47:      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
src/components/pillar\PaymentsChecklist.tsx:40:        <Card title={isZh ? "Alipay 单笔" : "Alipay per-tx"} big={`$${platformLimits.alipay.perTransactionUSD.toLocaleString()}`} note={isZh ? `年累 $${platformLimits.alipay.annualCumulativeUSD.toLocaleString()}` : `annual $${platformLimits.alipay.annualCumulativeUSD.toLocaleString()}`} />
src/components/pillar\PaymentsChecklist.tsx:41:        <Card title={isZh ? "WeChat Pay 单笔" : "WeChat Pay per-tx"} big={`$${platformLimits.wechat.perTransactionUSD.toLocaleString()}`} note={isZh ? `年累 $${platformLimits.wechat.annualCumulativeUSD.toLocaleString()}` : `annual $${platformLimits.wechat.annualCumulativeUSD.toLocaleString()}`} />
src/components/pillar\PaymentsChecklist.tsx:42:        <Card title={isZh ? "中行 ATM" : "BOC ATM"} big={`¥${atmRule.perWithdrawalCNY.toLocaleString()}`} note={atmRule.acceptedNetworks.join(" / ")} />
src/components/pillar\PaymentsChecklist.tsx:93:function Card({ title, big, note }: { title: string; big: string; note: string }) {
src/components/pillar\PaymentsChecklist.tsx:103:function Block({ title, children }: { title: string; children: React.ReactNode }) {
src/components/pillar\PaymentsPractical.tsx:5:const PHASE_LABEL: Record<PracticalGotchaPhase, { en: string; zh: string }> = {
src/components/city\CityImagePanel.tsx:29:    <aside aria-label={isZh ? "城市代表图" : "City landmark"} className="self-start lg:sticky lg:top-24">
src/components/city\CityImagePanel.tsx:59:            <button
src/components/city\CityImagePanel.tsx:61:              type="button"
src/components/city\CityImagePanel.tsx:63:              onClick={() => setIdx(i)}
src/components/common\MapErrorBoundary.tsx:6:  resetKey?: string | null;
src/components/pillar\FoodGuide.tsx:40:            <button
src/components/pillar\FoodGuide.tsx:42:              type="button"
src/components/pillar\FoodGuide.tsx:45:              onClick={() => setActiveId(city.cityId)}
src/components/pillar\FoodGuide.tsx:54:            </button>
src/components/pillar\FoodGuide.tsx:66:              <button
src/components/pillar\FoodGuide.tsx:67:                type="button"
src/components/pillar\FoodGuide.tsx:68:                onClick={() => setDrawerOpen(true)}
src/components/pillar\FoodGuide.tsx:72:              </button>
src/components/pillar\FoodGuide.tsx:111:function Block({ titleEn, titleZh, en, zh }: { titleEn: string; titleZh: string; en: string; zh: string }) {
src/components/pillar\TransportGuide.tsx:34:              : "12306 international booking + airport-to-city for the four cities + metro foreign-card status + ride-hail reality."}
src/components/pillar\TransportGuide.tsx:53:            <button
src/components/pillar\TransportGuide.tsx:55:              type="button"
src/components/pillar\TransportGuide.tsx:58:              onClick={() => setActiveId(city.cityId)}
src/components/pillar\TransportGuide.tsx:67:            </button>
src/components/pillar\TransportGuide.tsx:118:function RailRow({ titleEn, titleZh, en, zh }: { titleEn: string; titleZh: string; en: string; zh: string }) {

codex
CityPage 本身没有嵌入地图，但项目里有独立 Map 组件，所以我会用 CityPage 根类限定打印规则，同时给全站布局和 map 根节点补可控选择器。语言层面现有组件是按全局语言二选一渲染；打印要默认 EN，需要在打印前临时切到英文或让 CSS 覆盖双语辅助文本。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/store/language.ts' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/store/LanguageProvider.tsx' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/components/city/CityIntro.tsx' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/components/city/CitySeasonBlock.tsx' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/components/pillar/VisaChecker.tsx' in c:\Users\h\Documents\New project 2\v2
 succeeded in 682ms:
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

 succeeded in 698ms:
import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Lang } from "../data/i18n";
import { translate } from "../lib/i18n";
import { LanguageContext } from "./language";

export const LANGUAGE_STORAGE_KEY = "chinaAtlas:language";

export const readInitialLanguage = (): Lang => {
  if (typeof window === "undefined") return "en";
  return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === "zh" ? "zh" : "en";
};

export const htmlLangFor = (lang: Lang): "en" | "zh-Hans" => (lang === "zh" ? "zh-Hans" : "en");

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = htmlLangFor(lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
    }
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: (key: string) => translate(lang, key) }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

 succeeded in 739ms:
import clsx from "clsx";
import { seasonByCity, type CrowdLevel, type RainfallLevel } from "../../data/city-seasons";
import { CITY_LABELS, type CityId } from "../../data/transport";
import { useLang } from "../../store/language";

type Props = { cityId: CityId };

const rainfallMeta: Record<RainfallLevel, { en: string; zh: string; strength: number }> = {
  low: { en: "Low rain", zh: "灏戦洦", strength: 1 },
  med: { en: "Moderate rain", zh: "涓瓑闆ㄩ噺", strength: 2 },
  high: { en: "Heavy rain", zh: "闆ㄩ噺楂?, strength: 3 }
};

const crowdMeta: Record<CrowdLevel, { en: string; zh: string; className: string }> = {
  low: { en: "Low crowds", zh: "娣″", className: "border-emerald-200 bg-emerald-50 text-emerald-800" },
  med: { en: "Medium crowds", zh: "涓瓑浜烘祦", className: "border-amber-200 bg-amber-50 text-amber-900" },
  high: { en: "High crowds", zh: "鏃哄", className: "border-rose-200 bg-rose-50 text-rose-800" }
};

export default function CitySeasonBlock({ cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const season = seasonByCity(cityId);
  const city = CITY_LABELS[cityId];

  return (
    <div className="flex flex-col gap-5">
      <header className="flex flex-col gap-1">
        <span className="text-xs font-bold uppercase tracking-widest text-muted">
          {isZh ? "鏈€浣冲鑺? : "When to visit"}
        </span>
        <h2 className="text-xl font-bold">
          {isZh ? `${city.zh}浠€涔堟椂鍊欏幓` : `Best time to visit ${city.en}`}
        </h2>
      </header>

      <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-widest text-yellow-900/70">
          {isZh ? "鏈€浣虫湀浠? : "Best months"}
        </span>
        <div className="mt-2 text-2xl font-bold text-yellow-950">
          {isZh ? season.bestMonths.zh : season.bestMonths.en}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-yellow-950/80">
          {isZh ? season.reason.zh : season.reason.en}
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {season.monthlyClimate.map((climate) => {
          const rain = rainfallMeta[climate.rainfall];
          const crowd = crowdMeta[climate.crowdLevel];
          return (
            <article
              key={climate.monthRange}
              className="flex min-h-[230px] flex-col gap-3 rounded-lg border border-line bg-white p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold">{climate.monthRange}</h3>
                  <p className="text-2xl font-bold tabular-nums">
                    {climate.tempC.low} - {climate.tempC.high} C
                  </p>
                </div>
                <RainIcon level={climate.rainfall} />
              </div>

              <div className="grid gap-2 text-xs">
                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
                  <span className="font-bold text-muted">{isZh ? "闆ㄩ噺" : "Rainfall"}</span>
                  <span className="font-bold">{isZh ? rain.zh : rain.en}</span>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-md bg-paper px-3 py-2">
                  <span className="font-bold text-muted">{isZh ? "浜烘祦" : "Crowds"}</span>
                  <span className={clsx("rounded-full border px-2 py-0.5 font-bold", crowd.className)}>
                    {isZh ? crowd.zh : crowd.en}
                  </span>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-ink/80">
                {isZh ? climate.summary.zh : climate.summary.en}
              </p>
            </article>
          );
        })}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-bold">{isZh ? "鐗瑰埆鐣欐剰" : "Watch outs"}</h3>
        <ul className="grid gap-2">
          {season.watchOuts.map((item) => (
            <li
              key={item.en}
              className="rounded-lg border-l-4 border-amber-400 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950"
            >
              {isZh ? item.zh : item.en}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function RainIcon({ level }: { level: RainfallLevel }) {
  const { strength } = rainfallMeta[level];
  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-end justify-center gap-0.5 rounded-full bg-sky-50 ring-1 ring-sky-100"
    >
      {[1, 2, 3].map((value) => (
        <span
          key={value}
          className={clsx(
            "mb-2 block w-1.5 rounded-full bg-sky-600",
            value <= strength ? "opacity-90" : "opacity-20",
            value === 1 && "h-2",
            value === 2 && "h-3",
            value === 3 && "h-4"
          )}
        />
      ))}
    </span>
  );
}

 succeeded in 783ms:
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

 succeeded in 744ms:
import { useId, useMemo, useState } from "react";
import {
  checkEligibility,
  phase1TransitPorts,
  transitPolicy,
  unilateralPolicy,
  unilateralVisaFreeCountries,
  type EligibilityResult
} from "../../data/entry-policies";
import { useLang } from "../../store/language";
import PracticalBlock from "../common/PracticalBlock";

const collator = new Intl.Collator("en");

export default function VisaChecker() {
  const { lang } = useLang();
  const selectId = useId();
  const [country, setCountry] = useState("");
  const zh = lang === "zh";

  const sortedCountries = useMemo(
    () =>
      [...unilateralVisaFreeCountries].sort((a, b) =>
        collator.compare(lang === "zh" ? a.countryZh : a.countryEn, lang === "zh" ? b.countryZh : b.countryEn)
      ),
    [lang]
  );

  const result: EligibilityResult | null = country ? checkEligibility(country) : null;

  return (
    <section id="entry-visa" className="flex min-w-0 flex-col gap-3">
      <header>
        <span className="text-xs font-bold uppercase tracking-widest text-muted">
          {zh ? "鏀煴 1" : "Pillar 1"}
        </span>
        <h2 className="text-2xl font-bold leading-tight">
          {zh ? "鍏ュ涓庣璇? : "Entry & Visa"}
        </h2>
        <p className="text-sm text-muted">
          {zh
            ? "閫夋嫨浣犵殑鎶ょ収鍥界睄锛岀湅鏄惁闇€瑕佺璇併€傜粨璁哄潎鍑鸿嚜鍥藉绉绘皯绠＄悊灞€锛圢IA锛夊拰鍥藉姟闄㈠叕鍛娿€?
            : "Pick your passport country to see what applies. Every answer cites China's NIA and State Council announcements."}
        </p>
      </header>

      <div className="grid gap-4 rounded-lg border border-line bg-white p-4 md:grid-cols-[240px_1fr]">
        <div className="flex flex-col gap-3">
          <label htmlFor={selectId} className="text-xs font-bold uppercase tracking-widest text-muted">
            {lang === "zh" ? "鎶ょ収鍥界睄" : "Passport country"}
          </label>
          <select
            id={selectId}
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            className="rounded-lg border border-line bg-paper px-3 py-2 text-sm focus:border-ink focus:outline-none"
          >
            <option value="">{lang === "zh" ? "璇烽€夋嫨..." : "Select country..."}</option>
            {sortedCountries.map((c) => (
              <option key={c.countryEn} value={c.countryEn}>
                {lang === "zh" ? `${c.countryZh} (${c.countryEn})` : `${c.countryEn} (${c.countryZh})`}
              </option>
            ))}
            <option disabled>鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€</option>
            <option value="Other">{lang === "zh" ? "鍏跺畠锛堜笉鍦ㄥ厤绛惧悕鍗曪級" : "Other (not on visa-free lists)"}</option>
          </select>
        </div>

        <ResultPanel result={result} />
      </div>

      <PolicySummary />
      <Phase1PortsList />
      <PracticalBlock pillar="entry" />
    </section>
  );
}

function ResultPanel({ result }: { result: EligibilityResult | null }) {
  const { lang } = useLang();

  if (!result) {
    return (
      <div className="grid place-items-center rounded-lg border border-dashed border-line p-6 text-sm text-muted">
        {lang === "zh" ? "璇峰厛閫夋嫨鍥界睄" : "Pick a passport country first."}
      </div>
    );
  }

  if (result.kind === "both") {
    return (
      <div className="flex flex-col gap-2 rounded-lg bg-jade-soft p-4">
        <strong className="text-base text-jade">
          {lang === "zh" ? "涓ょ鍏嶇閮藉彲鐢? : "Both visa-free routes available"}
        </strong>
        <p className="text-sm">
          {lang === "zh"
            ? `鍗曟柟闈㈠厤绛?${result.unilateralDays} 澶?路 杩囧鍏嶇 ${result.transitHours} 灏忔椂锛堥渶绗笁鍥芥満绁級`
            : `${result.unilateralDays}-day unilateral visa-free 路 ${result.transitHours}-hour transit visa-free (third-country onward ticket required).`}
        </p>
      </div>
    );
  }

  if (result.kind === "unilateral") {
    return (
      <div className="flex flex-col gap-2 rounded-lg bg-jade-soft p-4">
        <strong className="text-base text-jade">
          {lang === "zh" ? "鍗曟柟闈㈠厤绛惧彲鐢? : "Unilateral visa-free"}
        </strong>
        <p className="text-sm">
          {lang === "zh"
            ? `鏅€氭姢鐓у彲鍦ㄤ腑鍥藉仠鐣欒嚦 ${result.maxStayDays} 澶╋紝鐢ㄩ€斿惈鍟嗗姟銆佹梾娓搞€佹帰浜层€佷氦娴併€佽繃澧冦€俙
            : `Up to ${result.maxStayDays} days for ordinary passports; covers business, tourism, family visit, exchange, transit.`}
        </p>
      </div>
    );
  }

  if (result.kind === "transit-only") {
    return (
      <div className="flex flex-col gap-2 rounded-lg bg-paper p-4">
        <strong className="text-base">
          {lang === "zh" ? "鍙娇鐢ㄨ繃澧冨厤绛? : "Transit visa-free only"}
        </strong>
        <p className="text-sm">
          {lang === "zh"
            ? `鑻ヨ绋嬬粡绗笁鍥斤紝鍙敤 ${result.maxHours} 灏忔椂杩囧鍏嶇锛涘叾瀹冩儏鍐典粛闇€鍔炵璇併€俙
            : `If transiting via China to a third country, ${result.maxHours} hours visa-free is available. Otherwise apply for a visa.`}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-amber-50 p-4">
      <strong className="text-base text-amber-900">
        {lang === "zh" ? "闇€瑕佺璇? : "Visa required"}
      </strong>
      <p className="text-sm">
        {lang === "zh"
          ? "鐩墠鍏嶇鍚嶅崟鏈兜鐩栬鍥界睄锛岃鍓嶅線涓浗绛捐瘉鐢宠鏈嶅姟涓績鍔炵悊銆?
          : "Not currently covered by China's visa-free policies. Apply via the official Chinese Visa Application Service Center."}
      </p>
      <a
        href={result.applyUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-fit items-center gap-1 rounded-full bg-ink px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
      >
        visaforchina.cn 鈫?
      </a>
    </div>
  );
}

function PolicySummary() {
  const { lang } = useLang();
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <Card
        title={lang === "zh" ? "鍗曟柟闈㈠厤绛? : "Unilateral visa-free"}
        figure={`${unilateralVisaFreeCountries.length}`}
        unit={lang === "zh" ? "鍥? : "countries"}
        body={
          lang === "zh"
            ? `鏅€氭姢鐓?${unilateralPolicy.maxStayDays} 澶╋紝鍚晢鍔?鏃呮父/鎺翰/浜ゆ祦/杩囧銆俙
            : `Ordinary passports, ${unilateralPolicy.maxStayDays}-day stay, business/tourism/family/exchange/transit.`
        }
      />
      <Card
        title={lang === "zh" ? "240 灏忔椂杩囧鍏嶇" : "240-hour transit"}
        figure={`${transitPolicy.totalPorts}`}
        unit={lang === "zh" ? "鍙ｅ哺" : "ports"}
        body={
          lang === "zh"
            ? `${transitPolicy.totalCountries} 鍥藉彲鐢紝${transitPolicy.provincialRegions} 涓渷绾у湴鍖哄彲娲诲姩锛涜嚜 ${transitPolicy.effectiveDate} 璧枫€俙
            : `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.provincialRegions} provincial regions; effective ${transitPolicy.effectiveDate}.`
        }
      />
      <Card
        title={lang === "zh" ? "绾夸笂鍏ュ鍗? : "Online entry card"}
        figure="2025-11-20"
        unit=""
        body={
          lang === "zh"
            ? "鍏嶈垂绾夸笂棰勫～锛涙湭鎻愬墠濉彲鍦ㄥ彛宀歌澶囨垨绾稿崱琛ュ～锛涘嬁浣跨敤浠垮啋鏀惰垂缃戠珯銆?
            : "Free pre-fill online; kiosk or paper card available at port; ignore counterfeit pay-to-fill sites."
        }
      />
    </div>
  );
}

function Card({
  title,
  figure,
  unit,
  body
}: {
  title: string;
  figure: string;
  unit: string;
  body: string;
}) {
  return (
    <article className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
      <span className="text-xs font-bold uppercase tracking-widest text-muted">{title}</span>
      <strong className="text-3xl leading-none">
        {figure} <small className="text-base font-bold text-muted">{unit}</small>
      </strong>
      <p className="text-sm leading-snug text-ink/80">{body}</p>
    </article>
  );
}

function Phase1PortsList() {
  const { lang } = useLang();
  return (
    <div className="rounded-xl border border-line bg-white p-5">
      <header className="mb-3">
        <h3 className="text-base font-bold">
          {lang === "zh" ? "鏈珯瑕嗙洊鐨勫洓鍩庡彛宀革紙240 灏忔椂锛? : "Phase 1 cities 鈥?all 240-hour transit"}
        </h3>
        <p className="text-xs text-muted">
          {lang === "zh"
            ? "涓庡浗鍔￠櫌 2025-11-04 鍏憡瀵归綈锛涘叾瀹?59 鍙ｅ哺鏆傛湭鍦ㄦ湰绔欏垪鍑恒€?
            : "Aligned with State Council 2025-11-04 announcement; the other 59 ports are not yet covered here."}
        </p>
      </header>
      <ul className="grid gap-2 sm:grid-cols-2">
        {phase1TransitPorts.map((port) => (
          <li key={port.portEn} className="flex items-center justify-between rounded-lg bg-paper px-3 py-2">
            <span>
              <strong className="text-sm">
                {lang === "zh" ? port.cityZh : port.city}
              </strong>{" "}
              <span className="text-xs text-muted">
                {lang === "zh" ? port.portZh : port.portEn}
              </span>
            </span>
            <span className="rounded-full bg-jade-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-jade">
              {port.maxHours}h
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/components/map/HeroMap.tsx' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/components/map/MapPreview.tsx' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/components/map/Province3DOverlay.tsx' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path src/components/map/ProvinceInfoCard.tsx' in c:\Users\h\Documents\New project 2\v2
 succeeded in 852ms:
import { useEffect } from "react";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import ProvinceShapeLayer from "./ProvinceShapeLayer";
import ProvinceLabelLayer from "./ProvinceLabelLayer";
import ProvinceInfoCard from "./ProvinceInfoCard";
import Province3DOverlay from "./Province3DOverlay";
import SpecialRegionMarkers from "./SpecialRegionMarkers";
import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";

export default function HeroMap() {
  const { lang } = useLang();
  const isDesktop = useIsDesktop();
  const { selectedProvinceId, province, is3DEnabled, reset, toggle3D } = useAtlas();
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
          <ProvinceShapeLayer enable3D={isDesktop} />
          <ProvinceLabelLayer />
          <ProvinceHitAreaLayer enable3D={isDesktop} />
          <SpecialRegionMarkers enable3D={isDesktop} />
          <ProvinceInfoCard enable3D={isDesktop} showDesktop3DNotice={!isDesktop} />
          <Province3DOverlay />
        </div>
        {focused && !is3DEnabled && (
          <div className="absolute right-3 top-3 z-30 flex flex-wrap justify-end gap-2">
            {isDesktop && (
              <button
                type="button"
                onClick={toggle3D}
                className="rounded-full bg-jade px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-jade/90"
              >
                {lang === "zh" ? "鏌ョ湅 3D" : "View in 3D"}
              </button>
            )}
            <button
              type="button"
              onClick={reset}
              className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
            >
              {lang === "zh" ? "閲嶇疆" : "Reset"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

 succeeded in 917ms:
import { useMemo } from "react";
import { useProvinceShapes } from "../../hooks/useProvinceShapes";
import { computeUnionViewBox } from "../../lib/shapes";
import { useLang } from "../../store/language";
import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";

export default function MapPreview() {
  const { shapes, error } = useProvinceShapes();
  const { lang } = useLang();
  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
        {lang === "zh"
          ? "鍦板浘杞粨鍔犺浇澶辫触锛屽埛鏂伴噸璇曘€?
          : "Map outline failed to load. Refresh to retry."}
      </div>
    );
  }

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

 succeeded in 979ms:
import { useNavigate } from "react-router";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";
import { provinceAttractionSeed } from "../../data/atlas";
import { useRecordCityView } from "../../hooks/useCityViews";
import { getPhase1CityRouteId } from "../../lib/cityRoutes";

type ProvinceInfoCardProps = {
  enable3D: boolean;
  showDesktop3DNotice: boolean;
};

export default function ProvinceInfoCard({ enable3D, showDesktop3DNotice }: ProvinceInfoCardProps) {
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
    selectPlace(province.id, cityId, enable3D);
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
        {showDesktop3DNotice && (
          <p className="mt-1 text-xs font-medium text-muted">
            {lang === "zh" ? "3D 瑙嗗浘浠呭湪妗岄潰绔彁渚? : "3D scene available on desktop"}
          </p>
        )}
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

 succeeded in 1004ms:
import { lazy, Suspense } from "react";
import MapErrorBoundary from "../common/MapErrorBoundary";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";
import { useIsDesktop } from "../../hooks/useIsDesktop";

const Map3D = lazy(() => import("./Map3D"));

export default function Province3DOverlay() {
  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
  const { lang } = useLang();
  const isDesktop = useIsDesktop();

  if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;

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

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short' in c:\Users\h\Documents\New project 2\v2
 succeeded in 462ms:
 M src/pages/GuidePage.tsx
 M src/pages/HomePage.tsx
 M src/pages/PhrasebookPage.tsx
?? ../.omc/artifacts/ask/codex-v2-workdir-edit-build-currency-converter-1-v2-src-components-2026-05-12T03-44-03-003Z.md
?? src/components/tools/
?? src/data/exchange-rates.ts

codex
现在开始改文件：先给 CityPage 加打印入口、打印时临时切英文和页面级标记；再给布局/地图组件补打印选择器；最后把全局 CSS 的 print 块集中处理版式、隐藏项、链接 URL 和页脚。
2026-05-12T03:45:23.337896Z ERROR codex_core::tools::router: error=apply_patch verification failed: Failed to find expected lines in c:\Users\h\Documents\New project 2\v2\src\pages\CityPage.tsx:
      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
      <header className="mb-6 flex flex-col gap-2">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
          {isZh ? "鈫?鍏ㄩ儴鍩庡競" : "鈫?All cities"}
        </Link>
        <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
        <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
      </header>
codex
补丁因为文件里已有编码显示不稳定的中文字符串没对上；我会改用更小的 ASCII 上下文逐段打补丁，避免误碰这些现有内容。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=1; Get-Content -Path src/pages/CityPage.tsx | ForEach-Object { '"'{0,4}: {1}' -f "'$i, $_; $i++ } | Select-Object -First 180' in c:\Users\h\Documents\New project 2\v2
 succeeded in 729ms:
   1: import { Link, useParams } from "react-router";
   2: import { attractionsByCity } from "../data/city-attractions";
   3: import { CITY_LABELS, type CityId } from "../data/transport";
   4: import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
   5: import { useLang } from "../store/language";
   6: import VisaChecker from "../components/pillar/VisaChecker";
   7: import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
   8: import TransportGuide from "../components/pillar/TransportGuide";
   9: import FoodGuide from "../components/pillar/FoodGuide";
  10: import EmergencyBriefing from "../components/pillar/EmergencyBriefing";
  11: import CityFurtherReading from "../components/common/CityFurtherReading";
  12: import SourcesNote from "../components/common/SourcesNote";
  13: import CityNav from "../components/city/CityNav";
  14: import CityIntro from "../components/city/CityIntro";
  15: import CityImagePanel from "../components/city/CityImagePanel";
  16: import CitySeasonBlock from "../components/city/CitySeasonBlock";
  17: 
  18: const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
  19: 
  20: function cityStructuredData(cityId: CityId) {
  21:   const city = CITY_LABELS[cityId];
  22:   const cityUrl = absoluteUrl(`/city/${cityId}`);
  23:   const cityNodeId = `${cityUrl}#city`;
  24: 
  25:   return {
  26:     "@context": "https://schema.org",
  27:     "@graph": [
  28:       {
  29:         "@type": "City",
  30:         "@id": cityNodeId,
  31:         name: [
  32:           { "@language": "en", "@value": city.en },
  33:           { "@language": "zh-CN", "@value": city.zh }
  34:         ],
  35:         url: cityUrl,
  36:         containedInPlace: {
  37:           "@type": "Country",
  38:           name: "China"
  39:         }
  40:       },
  41:       ...attractionsByCity(cityId).map((attraction) => ({
  42:         "@type": "TouristAttraction",
  43:         "@id": `${cityUrl}#${attraction.id}`,
  44:         name: [
  45:           { "@language": "en", "@value": attraction.nameEn },
  46:           { "@language": "zh-CN", "@value": attraction.nameZh }
  47:         ],
  48:         description: attraction.whyEn,
  49:         image: attraction.imageUrl,
  50:         url: attraction.officialUrl,
  51:         address: {
  52:           "@type": "PostalAddress",
  53:           addressLocality: city.en,
  54:           addressRegion: attraction.districtEn,
  55:           addressCountry: "CN"
  56:         },
  57:         containedInPlace: {
  58:           "@id": cityNodeId
  59:         }
  60:       }))
  61:     ]
  62:   };
  63: }
  64: 
  65: function cityBreadcrumbStructuredData(cityId: CityId) {
  66:   const city = CITY_LABELS[cityId];
  67: 
  68:   return breadcrumbListJsonLd([
  69:     { name: "Home", path: "/" },
  70:     { name: "City", path: `/city/${cityId}` },
  71:     { name: city.zh }
  72:   ]);
  73: }
  74: 
  75: export default function CityPage() {
  76:   const { cityId } = useParams<{ cityId: string }>();
  77:   const { lang } = useLang();
  78:   const isZh = lang === "zh";
  79: 
  80:   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
  81:     return (
  82:       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
  83:         <h1 className="text-2xl font-bold">{isZh ? "鏈煡鍩庡競" : "Unknown city"}</h1>
  84:         <Link to="/" className="text-jade hover:underline">{isZh ? "杩斿洖棣栭〉" : "鈫?Home"}</Link>
  85:       </main>
  86:     );
  87:   }
  88: 
  89:   const id = cityId as CityId;
  90:   const label = CITY_LABELS[id];
  91:   const cityJsonLd = cityStructuredData(id);
  92:   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
  93: 
  94:   return (
  95:     <>
  96:       <script
  97:         type="application/ld+json"
  98:         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
  99:       />
 100:       <script
 101:         type="application/ld+json"
 102:         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
 103:       />
 104:       <main id="top" className="mx-auto max-w-7xl px-4 py-10">
 105:       <header className="mb-6 flex flex-col gap-2">
 106:         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
 107:           {isZh ? "鈫?鍏ㄩ儴鍩庡競" : "鈫?All cities"}
 108:         </Link>
 109:         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
 110:         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
 111:       </header>
 112: 
 113:       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
 114:         <CityNav />
 115: 
 116:         <div className="flex min-w-0 flex-col gap-12">
 117:           <CityIntro cityId={id} />
 118:           <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
 119:           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
 120:           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
 121:           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>
 122:           <section id="food" className="scroll-mt-24"><FoodGuide cityId={id} /></section>
 123:           <section id="emergency" className="scroll-mt-24"><EmergencyBriefing cityId={id} /></section>
 124:           <section id="portals" className="scroll-mt-24"><CityFurtherReading cityId={id} /></section>
 125: 
 126:           <section className="flex flex-col gap-3 rounded-xl border border-dashed border-line bg-paper p-6">
 127:             <h2 className="text-base font-bold">{isZh ? "Phase 2 鍗冲皢涓婄嚎" : "Phase 2 鈥?coming soon"}</h2>
 128:             <p className="text-sm text-muted">
 129:               {isZh
 130:                 ? "鍚戜腑鍥芥湰鍦扮敤鎴锋彁闂€佸垎浜綘鐨勬梾琛岀粡楠屽姛鑳芥鍦ㄥ紑鍙戙€?
 131:                 : "Ask Chinese locals and share-your-trip features are in development."}
 132:             </p>
 133:             <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest">
 134:               <Link to="/ask" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
 135:                 {isZh ? "鍚戜腑鍥芥湰鍦扮敤鎴锋彁闂? : "Ask Chinese locals"}
 136:               </Link>
 137:               <Link to="/share" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
 138:                 {isZh ? "鍒嗕韩鏃呰" : "Share your trip"}
 139:               </Link>
 140:             </div>
 141:           </section>
 142: 
 143:           <SourcesNote />
 144:         </div>
 145: 
 146:         <CityImagePanel cityId={id} />
 147:       </div>
 148:       </main>
 149:     </>
 150:   );
 151: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=1; Get-Content -Path src/pages/CityPage.tsx | ForEach-Object { if ($_ -match '"'main id|header className|h1 className|p className|CityImagePanel|</main>') { '{0,4}: {1}' -f "'$i, $_ }; $i++ }' in c:\Users\h\Documents\New project 2\v2
 succeeded in 616ms:
  15: import CityImagePanel from "../components/city/CityImagePanel";
  83:         <h1 className="text-2xl font-bold">{isZh ? "鏈煡鍩庡競" : "Unknown city"}</h1>
  85:       </main>
 104:       <main id="top" className="mx-auto max-w-7xl px-4 py-10">
 105:       <header className="mb-6 flex flex-col gap-2">
 109:         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
 110:         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
 128:             <p className="text-sm text-muted">
 146:         <CityImagePanel cityId={id} />
 148:       </main>

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\pages\CityPage.tsx
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..3ad2e033b67591292f2b0215d1f1b8ddb0f7a494
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,6 +97,19 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
+
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
 
   return (
     <>

diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..3ad2e033b67591292f2b0215d1f1b8ddb0f7a494
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,6 +97,19 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
+
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
 
   return (
     <>

2026-05-12T03:46:48.712137Z ERROR codex_core::tools::router: error=apply_patch verification failed: Failed to find expected lines in c:\Users\h\Documents\New project 2\v2\src\pages\CityPage.tsx:
      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
      <header className="mb-6 flex flex-col gap-2">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
          {isZh ? "鈫?鍏ㄩ儴鍩庡競" : "鈫?All cities"}
        </Link>
        <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
        <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
      </header>
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..3ad2e033b67591292f2b0215d1f1b8ddb0f7a494
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,6 +97,19 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
+
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
 
   return (
     <>

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\pages\CityPage.tsx
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..f06c389f2063065c2cef2d1ac15500c67091ec75
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
+
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
 
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,8 +121,8 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>

diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..f06c389f2063065c2cef2d1ac15500c67091ec75
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
+
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
 
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,8 +121,8 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\pages\CityPage.tsx
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..6c598ac8f7931e81afb4abd1095e2921cbe14a71
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">

diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..6c598ac8f7931e81afb4abd1095e2921cbe14a71
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\pages\CityPage.tsx
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=1; Get-Content -Path src/pages/CityPage.tsx | ForEach-Object { '"'{0,4}: {1}' -f "'$i, $_; $i++ } | Select-Object -First 180' in c:\Users\h\Documents\New project 2\v2
 succeeded in 458ms:
   1: import { useEffect } from "react";
   2: import { flushSync } from "react-dom";
   3: import { Link, useParams } from "react-router";
   4: import { attractionsByCity } from "../data/city-attractions";
   5: import { CITY_LABELS, type CityId } from "../data/transport";
   6: import { absoluteUrl, breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
   7: import { useLang } from "../store/language";
   8: import VisaChecker from "../components/pillar/VisaChecker";
   9: import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
  10: import TransportGuide from "../components/pillar/TransportGuide";
  11: import FoodGuide from "../components/pillar/FoodGuide";
  12: import EmergencyBriefing from "../components/pillar/EmergencyBriefing";
  13: import CityFurtherReading from "../components/common/CityFurtherReading";
  14: import SourcesNote from "../components/common/SourcesNote";
  15: import CityNav from "../components/city/CityNav";
  16: import CityIntro from "../components/city/CityIntro";
  17: import CityImagePanel from "../components/city/CityImagePanel";
  18: import CitySeasonBlock from "../components/city/CitySeasonBlock";
  19: 
  20: const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
  21: 
  22: function cityStructuredData(cityId: CityId) {
  23:   const city = CITY_LABELS[cityId];
  24:   const cityUrl = absoluteUrl(`/city/${cityId}`);
  25:   const cityNodeId = `${cityUrl}#city`;
  26: 
  27:   return {
  28:     "@context": "https://schema.org",
  29:     "@graph": [
  30:       {
  31:         "@type": "City",
  32:         "@id": cityNodeId,
  33:         name: [
  34:           { "@language": "en", "@value": city.en },
  35:           { "@language": "zh-CN", "@value": city.zh }
  36:         ],
  37:         url: cityUrl,
  38:         containedInPlace: {
  39:           "@type": "Country",
  40:           name: "China"
  41:         }
  42:       },
  43:       ...attractionsByCity(cityId).map((attraction) => ({
  44:         "@type": "TouristAttraction",
  45:         "@id": `${cityUrl}#${attraction.id}`,
  46:         name: [
  47:           { "@language": "en", "@value": attraction.nameEn },
  48:           { "@language": "zh-CN", "@value": attraction.nameZh }
  49:         ],
  50:         description: attraction.whyEn,
  51:         image: attraction.imageUrl,
  52:         url: attraction.officialUrl,
  53:         address: {
  54:           "@type": "PostalAddress",
  55:           addressLocality: city.en,
  56:           addressRegion: attraction.districtEn,
  57:           addressCountry: "CN"
  58:         },
  59:         containedInPlace: {
  60:           "@id": cityNodeId
  61:         }
  62:       }))
  63:     ]
  64:   };
  65: }
  66: 
  67: function cityBreadcrumbStructuredData(cityId: CityId) {
  68:   const city = CITY_LABELS[cityId];
  69: 
  70:   return breadcrumbListJsonLd([
  71:     { name: "Home", path: "/" },
  72:     { name: "City", path: `/city/${cityId}` },
  73:     { name: city.zh }
  74:   ]);
  75: }
  76: 
  77: export default function CityPage() {
  78:   const { cityId } = useParams<{ cityId: string }>();
  79:   const { lang, setLang } = useLang();
  80:   const isZh = lang === "zh";
  81: 
  82:   useEffect(() => {
  83:     document.body.classList.add("city-page-route");
  84:     return () => document.body.classList.remove("city-page-route");
  85:   }, []);
  86: 
  87:   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
  88:     return (
  89:       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
  90:         <h1 className="text-2xl font-bold">{isZh ? "鏈煡鍩庡競" : "Unknown city"}</h1>
  91:         <Link to="/" className="text-jade hover:underline">{isZh ? "杩斿洖棣栭〉" : "鈫?Home"}</Link>
  92:       </main>
  93:     );
  94:   }
  95: 
  96:   const id = cityId as CityId;
  97:   const label = CITY_LABELS[id];
  98:   const cityJsonLd = cityStructuredData(id);
  99:   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
 100:   const cityUrl = absoluteUrl(`/city/${id}`);
 101: 
 102:   const handlePrint = () => {
 103:     if (typeof window === "undefined") return;
 104: 
 105:     if (lang !== "en") {
 106:       const restoreLanguage = () => setLang(lang);
 107:       window.addEventListener("afterprint", restoreLanguage, { once: true });
 108:       flushSync(() => setLang("en"));
 109:     }
 110: 
 111:     window.print();
 112:   };
 113: 
 114:   return (
 115:     <>
 116:       <script
 117:         type="application/ld+json"
 118:         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityJsonLd) }}
 119:       />
 120:       <script
 121:         type="application/ld+json"
 122:         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
 123:       />
 124:       <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
 125:       <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
 126:         <div className="flex min-w-0 flex-col gap-2">
 127:         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
 128:           {isZh ? "鈫?鍏ㄩ儴鍩庡競" : "鈫?All cities"}
 129:         </Link>
 130:         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
 131:         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
 132:         </div>
 133:         <button
 134:           type="button"
 135:           onClick={handlePrint}
 136:           className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
 137:         >
 138:           Print this page
 139:         </button>
 140:       </header>
 141: 
 142:       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
 143:         <CityNav />
 144: 
 145:         <div className="flex min-w-0 flex-col gap-12">
 146:           <CityIntro cityId={id} />
 147:           <section id="season" className="scroll-mt-24"><CitySeasonBlock cityId={id} /></section>
 148:           <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
 149:           <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
 150:           <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>
 151:           <section id="food" className="scroll-mt-24"><FoodGuide cityId={id} /></section>
 152:           <section id="emergency" className="scroll-mt-24"><EmergencyBriefing cityId={id} /></section>
 153:           <section id="portals" className="scroll-mt-24"><CityFurtherReading cityId={id} /></section>
 154: 
 155:           <section className="flex flex-col gap-3 rounded-xl border border-dashed border-line bg-paper p-6">
 156:             <h2 className="text-base font-bold">{isZh ? "Phase 2 鍗冲皢涓婄嚎" : "Phase 2 鈥?coming soon"}</h2>
 157:             <p className="text-sm text-muted">
 158:               {isZh
 159:                 ? "鍚戜腑鍥芥湰鍦扮敤鎴锋彁闂€佸垎浜綘鐨勬梾琛岀粡楠屽姛鑳芥鍦ㄥ紑鍙戙€?
 160:                 : "Ask Chinese locals and share-your-trip features are in development."}
 161:             </p>
 162:             <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest">
 163:               <Link to="/ask" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
 164:                 {isZh ? "鍚戜腑鍥芥湰鍦扮敤鎴锋彁闂? : "Ask Chinese locals"}
 165:               </Link>
 166:               <Link to="/share" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
 167:                 {isZh ? "鍒嗕韩鏃呰" : "Share your trip"}
 168:               </Link>
 169:             </div>
 170:           </section>
 171: 
 172:           <SourcesNote />
 173:         </div>
 174: 
 175:         <CityImagePanel cityId={id} />
 176:       </div>
 177:       </main>
 178:       <div className="print-page-footer" aria-hidden="true">
 179:         <span>Travel China 路 {cityUrl} 路 Page&nbsp;</span>
 180:         <span className="print-page-number" />

diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=181; Get-Content -Path src/pages/CityPage.tsx | Select-Object -Skip 180 | ForEach-Object { '"'{0,4}: {1}' -f "'$i, $_; $i++ }' in c:\Users\h\Documents\New project 2\v2
 succeeded in 519ms:
 181:       </div>
 182:     </>
 183:   );
 184: }

diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\layout\SiteHeader.tsx
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..f4da6381c6a95f47217722314ed6155d4a86ddb6
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,7 +9,7 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..f4da6381c6a95f47217722314ed6155d4a86ddb6
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,7 +9,7 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\layout\SiteFooter.tsx
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..f4da6381c6a95f47217722314ed6155d4a86ddb6
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,7 +9,7 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..f4da6381c6a95f47217722314ed6155d4a86ddb6
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,7 +9,7 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\common\ScrollToTop.tsx
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..f4da6381c6a95f47217722314ed6155d4a86ddb6
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,7 +9,7 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..f4da6381c6a95f47217722314ed6155d4a86ddb6
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,7 +9,7 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\city\CityNav.tsx
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..f4da6381c6a95f47217722314ed6155d4a86ddb6
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,7 +9,7 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..f4da6381c6a95f47217722314ed6155d4a86ddb6
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,7 +9,7 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

2026-05-12T03:50:42.680731Z ERROR codex_core::tools::router: error=apply_patch verification failed: Failed to find expected lines in c:\Users\h\Documents\New project 2\v2\src\components\city\CityImagePanel.tsx:
    <aside aria-label={isZh ? "鍩庡競浠ｈ〃鍥? : "City landmark"} className="self-start lg:sticky lg:top-24">
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..f4da6381c6a95f47217722314ed6155d4a86ddb6
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,7 +9,7 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

2026-05-12T03:50:48.112643Z ERROR codex_core::tools::router: error=apply_patch verification failed: Failed to find expected lines in c:\Users\h\Documents\New project 2\v2\src\components\city\CityImagePanel.tsx:
    <aside aria-label={isZh ? current.nameZh : current.nameEn}
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..f4da6381c6a95f47217722314ed6155d4a86ddb6
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,7 +9,7 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=1; Get-Content -Path src/components/city/CityImagePanel.tsx | ForEach-Object { '"'{0,4}: {1}' -f "'$i, $_; $i++ } | Select-Object -First 90' in c:\Users\h\Documents\New project 2\v2
 succeeded in 551ms:
   1: import { useEffect, useState } from "react";
   2: import { attractionsByCity } from "../../data/city-attractions";
   3: import type { CityId } from "../../data/transport";
   4: import { unsplashSrcSet } from "../../lib/unsplash";
   5: import { useLang } from "../../store/language";
   6: 
   7: type Props = { cityId: CityId };
   8: 
   9: const ROTATE_MS = 5000;
  10: 
  11: export default function CityImagePanel({ cityId }: Props) {
  12:   const { lang } = useLang();
  13:   const isZh = lang === "zh";
  14:   const attractions = attractionsByCity(cityId).filter((a) => a.tier === "must-visit");
  15:   const [idx, setIdx] = useState(0);
  16: 
  17:   useEffect(() => {
  18:     if (attractions.length <= 1) return;
  19:     const id = setInterval(() => {
  20:       setIdx((i) => (i + 1) % attractions.length);
  21:     }, ROTATE_MS);
  22:     return () => clearInterval(id);
  23:   }, [attractions.length]);
  24: 
  25:   if (attractions.length === 0) return null;
  26:   const current = attractions[idx];
  27: 
  28:   return (
  29:     <aside aria-label={isZh ? "鍩庡競浠ｈ〃鍥? : "City landmark"} className="self-start lg:sticky lg:top-24">
  30:       <div className="flex flex-col gap-3">
  31:         <div className="overflow-hidden rounded-xl border border-line bg-paper">
  32:           <div className="aspect-[3/4] w-full">
  33:             <img
  34:               key={current.id}
  35:               src={current.imageUrl}
  36:               srcSet={unsplashSrcSet(current.imageUrl)}
  37:               sizes="(min-width: 1024px) 300px, 100vw"
  38:               alt={isZh ? current.nameZh : current.nameEn}
  39:               loading="lazy"
  40:               decoding="async"
  41:               referrerPolicy="no-referrer"
  42:               className="h-full w-full animate-[fadeUp_500ms_ease] object-cover"
  43:               onError={(e) => {
  44:                 (e.currentTarget as HTMLImageElement).style.display = "none";
  45:               }}
  46:             />
  47:           </div>
  48:           <div className="flex flex-col gap-1 p-3">
  49:             <strong className="text-sm leading-tight">
  50:               {isZh ? current.nameZh : current.nameEn}
  51:             </strong>
  52:             <span className="text-[10px] text-muted">
  53:               {isZh ? current.districtZh : current.districtEn} 路 {current.imageCredit}
  54:             </span>
  55:           </div>
  56:         </div>
  57:         <div className="flex flex-wrap gap-1">
  58:           {attractions.map((a, i) => (
  59:             <button
  60:               key={a.id}
  61:               type="button"
  62:               aria-label={isZh ? a.nameZh : a.nameEn}
  63:               onClick={() => setIdx(i)}
  64:               className={`h-1.5 w-6 rounded-full transition ${
  65:                 i === idx ? "bg-jade" : "bg-line hover:bg-muted"
  66:               }`}
  67:             />
  68:           ))}
  69:         </div>
  70:       </div>
  71:     </aside>
  72:   );
  73: }

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..f4da6381c6a95f47217722314ed6155d4a86ddb6
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,7 +9,7 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

2026-05-12T03:51:29.242490Z ERROR codex_core::tools::router: error=apply_patch verification failed: Failed to find expected lines in c:\Users\h\Documents\New project 2\v2\src\components\city\CityImagePanel.tsx:
    <aside aria-label={isZh ? "鍩庡競浠ｈ〃鍥? : "City landmark"} className="self-start lg:sticky lg:top-24">
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..f4da6381c6a95f47217722314ed6155d4a86ddb6
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,7 +9,7 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\pillar\PaymentsChecklist.tsx
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\pillar\TransportGuide.tsx
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\pillar\FoodGuide.tsx
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\pillar\EmergencyBriefing.tsx
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\map\HeroMap.tsx
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\map\Province3DOverlay.tsx
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\map\MapPreview.tsx
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 9a43cf53f59f0c057456836db02cccc440b91e29..f3dc7bf26bcbaf463aaf78d3bd6cfc7026ca3f77
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -11,7 +11,7 @@
 
   if (error) {
     return (
-      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+      <div data-print-map="true" className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
         {lang === "zh"
           ? "地图轮廓加载失败，刷新重试。"
           : "Map outline failed to load. Refresh to retry."}
@@ -20,12 +20,13 @@
   }
 
   if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
+    return <div data-print-map="true" className="h-full w-full bg-white/70" />;
   }
 
   return (
-    <svg
-      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
+    <svg
+      data-print-map="true"
+      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
       preserveAspectRatio="xMidYMid meet"
       className="h-full w-full"
       aria-hidden
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 9a43cf53f59f0c057456836db02cccc440b91e29..f3dc7bf26bcbaf463aaf78d3bd6cfc7026ca3f77
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -11,7 +11,7 @@
 
   if (error) {
     return (
-      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+      <div data-print-map="true" className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
         {lang === "zh"
           ? "地图轮廓加载失败，刷新重试。"
           : "Map outline failed to load. Refresh to retry."}
@@ -20,12 +20,13 @@
   }
 
   if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
+    return <div data-print-map="true" className="h-full w-full bg-white/70" />;
   }
 
   return (
-    <svg
-      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
+    <svg
+      data-print-map="true"
+      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
       preserveAspectRatio="xMidYMid meet"
       className="h-full w-full"
       aria-hidden
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"return \\(|className=|<div|<section|<aside\" src/components/map/Map3D.tsx | Select-Object -First 80" in c:\Users\h\Documents\New project 2\v2
 succeeded in 585ms:
441:    return () => {
458:  return (
459:    <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
460:      <div ref={containerRef} className="absolute inset-0" />
463:        <div className="absolute inset-0 z-10 grid place-items-center bg-[#071512] text-sm font-semibold text-white/80">
469:        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#071512] px-6 text-center text-white">
470:          <div className="w-full max-w-md rounded-lg border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur sm:p-5">
471:            <h3 className="text-lg font-bold">{lang === "zh" ? "需要配置天地图 tk" : "Tianditu token required"}</h3>
472:            <p className="mt-2 text-sm text-white/75">
477:            <code className="mt-4 block overflow-x-auto whitespace-nowrap rounded bg-black/40 px-3 py-2 text-left text-xs text-emerald-200">
485:        <div className="absolute inset-0 z-10 grid place-items-center bg-[#071512] px-6 text-center text-sm font-semibold text-red-100">
491:        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#071512] px-6 text-center text-white">
492:          <div className="w-full max-w-lg rounded-lg border border-red-200/25 bg-red-950/55 p-4 shadow-2xl backdrop-blur sm:p-5">
493:            <h3 className="text-lg font-bold">
496:            <p className="mt-2 text-sm leading-relaxed text-red-50/85">
506:        <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-10 rounded-md border border-white/15 bg-black/45 px-3 py-2 text-xs font-semibold leading-snug text-white/85 backdrop-blur sm:right-auto">

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 9a43cf53f59f0c057456836db02cccc440b91e29..f3dc7bf26bcbaf463aaf78d3bd6cfc7026ca3f77
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -11,7 +11,7 @@
 
   if (error) {
     return (
-      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+      <div data-print-map="true" className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
         {lang === "zh"
           ? "地图轮廓加载失败，刷新重试。"
           : "Map outline failed to load. Refresh to retry."}
@@ -20,12 +20,13 @@
   }
 
   if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
+    return <div data-print-map="true" className="h-full w-full bg-white/70" />;
   }
 
   return (
-    <svg
-      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
+    <svg
+      data-print-map="true"
+      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
       preserveAspectRatio="xMidYMid meet"
       className="h-full w-full"
       aria-hidden
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\map\Map3D.tsx
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index 83fd041e29496a2cbdec5a256645075881e67de1..eeba939297802f5beca92969293dd34e8d66cd94
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -456,7 +456,7 @@
   }, [lang, provinceId, selectedProvince, token]);
 
   return (
-    <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
+    <div data-print-map="true" className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
       <div ref={containerRef} className="absolute inset-0" />
 
       {loadState === "loading" && (
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 9a43cf53f59f0c057456836db02cccc440b91e29..f3dc7bf26bcbaf463aaf78d3bd6cfc7026ca3f77
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -11,7 +11,7 @@
 
   if (error) {
     return (
-      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+      <div data-print-map="true" className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
         {lang === "zh"
           ? "地图轮廓加载失败，刷新重试。"
           : "Map outline failed to load. Refresh to retry."}
@@ -20,12 +20,13 @@
   }
 
   if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
+    return <div data-print-map="true" className="h-full w-full bg-white/70" />;
   }
 
   return (
-    <svg
-      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
+    <svg
+      data-print-map="true"
+      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
       preserveAspectRatio="xMidYMid meet"
       className="h-full w-full"
       aria-hidden
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index 83fd041e29496a2cbdec5a256645075881e67de1..eeba939297802f5beca92969293dd34e8d66cd94
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -456,7 +456,7 @@
   }, [lang, provinceId, selectedProvince, token]);
 
   return (
-    <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
+    <div data-print-map="true" className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
       <div ref={containerRef} className="absolute inset-0" />
 
       {loadState === "loading" && (
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 9a43cf53f59f0c057456836db02cccc440b91e29..f3dc7bf26bcbaf463aaf78d3bd6cfc7026ca3f77
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -11,7 +11,7 @@
 
   if (error) {
     return (
-      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+      <div data-print-map="true" className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
         {lang === "zh"
           ? "地图轮廓加载失败，刷新重试。"
           : "Map outline failed to load. Refresh to retry."}
@@ -20,12 +20,13 @@
   }
 
   if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
+    return <div data-print-map="true" className="h-full w-full bg-white/70" />;
   }
 
   return (
-    <svg
-      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
+    <svg
+      data-print-map="true"
+      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
       preserveAspectRatio="xMidYMid meet"
       className="h-full w-full"
       aria-hidden
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..c6a6994aef3014d2188228c4faccbde7bec03a92
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China · {cityUrl} · Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\pages\CityPage.tsx
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index 83fd041e29496a2cbdec5a256645075881e67de1..eeba939297802f5beca92969293dd34e8d66cd94
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -456,7 +456,7 @@
   }, [lang, provinceId, selectedProvince, token]);
 
   return (
-    <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
+    <div data-print-map="true" className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
       <div ref={containerRef} className="absolute inset-0" />
 
       {loadState === "loading" && (
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 9a43cf53f59f0c057456836db02cccc440b91e29..f3dc7bf26bcbaf463aaf78d3bd6cfc7026ca3f77
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -11,7 +11,7 @@
 
   if (error) {
     return (
-      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+      <div data-print-map="true" className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
         {lang === "zh"
           ? "地图轮廓加载失败，刷新重试。"
           : "Map outline failed to load. Refresh to retry."}
@@ -20,12 +20,13 @@
   }
 
   if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
+    return <div data-print-map="true" className="h-full w-full bg-white/70" />;
   }
 
   return (
-    <svg
-      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
+    <svg
+      data-print-map="true"
+      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
       preserveAspectRatio="xMidYMid meet"
       className="h-full w-full"
       aria-hidden
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..8b1cd5ceeec5f6cec5ccb533d06dd76c54cec42a
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China - {cityUrl} - Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index 83fd041e29496a2cbdec5a256645075881e67de1..eeba939297802f5beca92969293dd34e8d66cd94
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -456,7 +456,7 @@
   }, [lang, provinceId, selectedProvince, token]);
 
   return (
-    <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
+    <div data-print-map="true" className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
       <div ref={containerRef} className="absolute inset-0" />
 
       {loadState === "loading" && (
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 9a43cf53f59f0c057456836db02cccc440b91e29..f3dc7bf26bcbaf463aaf78d3bd6cfc7026ca3f77
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -11,7 +11,7 @@
 
   if (error) {
     return (
-      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+      <div data-print-map="true" className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
         {lang === "zh"
           ? "地图轮廓加载失败，刷新重试。"
           : "Map outline failed to load. Refresh to retry."}
@@ -20,12 +20,13 @@
   }
 
   if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
+    return <div data-print-map="true" className="h-full w-full bg-white/70" />;
   }
 
   return (
-    <svg
-      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
+    <svg
+      data-print-map="true"
+      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
       preserveAspectRatio="xMidYMid meet"
       className="h-full w-full"
       aria-hidden
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..8b1cd5ceeec5f6cec5ccb533d06dd76c54cec42a
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China - {cityUrl} - Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }

codex
CityPage 和组件选择器已经补上。接下来我会把打印样式集中追加到 `globals.css`：只在 CityPage 打印上下文生效，避免影响普通页面。
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\styles\globals.css
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index 83fd041e29496a2cbdec5a256645075881e67de1..eeba939297802f5beca92969293dd34e8d66cd94
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -456,7 +456,7 @@
   }, [lang, provinceId, selectedProvince, token]);
 
   return (
-    <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
+    <div data-print-map="true" className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
       <div ref={containerRef} className="absolute inset-0" />
 
       {loadState === "loading" && (
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 9a43cf53f59f0c057456836db02cccc440b91e29..f3dc7bf26bcbaf463aaf78d3bd6cfc7026ca3f77
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -11,7 +11,7 @@
 
   if (error) {
     return (
-      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+      <div data-print-map="true" className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
         {lang === "zh"
           ? "地图轮廓加载失败，刷新重试。"
           : "Map outline failed to load. Refresh to retry."}
@@ -20,12 +20,13 @@
   }
 
   if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
+    return <div data-print-map="true" className="h-full w-full bg-white/70" />;
   }
 
   return (
-    <svg
-      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
+    <svg
+      data-print-map="true"
+      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
       preserveAspectRatio="xMidYMid meet"
       className="h-full w-full"
       aria-hidden
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..8b1cd5ceeec5f6cec5ccb533d06dd76c54cec42a
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China - {cityUrl} - Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }
diff --git a/v2/src/styles/globals.css b/v2/src/styles/globals.css
index 78006bee9aa82900bac7b5dcc59cc90b968bd841..445e7e0ae2256bf0a11dcdf1fd3a712d5bf7ed47
--- a/v2/src/styles/globals.css
+++ b/v2/src/styles/globals.css
@@ -104,8 +104,146 @@
   transform-origin: center;
 }
 
-@media (min-width: 640px) {
-  .china-map-surface > div:first-child {
-    transform: none;
-  }
-}
+@media (min-width: 640px) {
+  .china-map-surface > div:first-child {
+    transform: none;
+  }
+}
+
+.print-page-footer {
+  display: none;
+}
+
+@media print {
+  @page {
+    margin: 14mm 12mm 18mm;
+  }
+
+  html,
+  body {
+    background: #fff !important;
+  }
+
+  body.city-page-route,
+  body:has(.city-page) {
+    background: #fff !important;
+    color: #000 !important;
+  }
+
+  body.city-page-route *,
+  body:has(.city-page) * {
+    color: #000 !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+    -webkit-print-color-adjust: exact;
+    print-color-adjust: exact;
+  }
+
+  body.city-page-route .site-header,
+  body.city-page-route .site-footer,
+  body.city-page-route .scroll-to-top,
+  body.city-page-route .city-nav,
+  body.city-page-route .city-page > .grid > aside,
+  body.city-page-route [data-print-map="true"],
+  body.city-page-route [data-province-3d-overlay="true"],
+  body.city-page-route .china-map-surface,
+  body:has(.city-page) .site-header,
+  body:has(.city-page) .site-footer,
+  body:has(.city-page) .scroll-to-top,
+  body:has(.city-page) .city-nav,
+  body:has(.city-page) .city-page > .grid > aside,
+  body:has(.city-page) [data-print-map="true"],
+  body:has(.city-page) [data-province-3d-overlay="true"],
+  body:has(.city-page) .china-map-surface {
+    display: none !important;
+  }
+
+  .city-page {
+    max-width: none !important;
+    width: 100% !important;
+    margin: 0 !important;
+    padding: 0 0 16mm !important;
+  }
+
+  .city-page > .grid {
+    display: block !important;
+  }
+
+  .city-page button,
+  .city-page .print-this-page {
+    display: none !important;
+  }
+
+  .city-page a[href] {
+    text-decoration: underline;
+    text-underline-offset: 2px;
+  }
+
+  .city-page a[href^="http"]::after {
+    content: " (" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="/"]::after {
+    content: " (https://travel-china.example.com" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="#"]::after,
+  .city-page a[href^="mailto:"]::after,
+  .city-page a[href^="tel:"]::after {
+    content: "";
+  }
+
+  .city-page :is(article, section, li, pre)[class*="border"],
+  .city-page :is(div)[class*="rounded"][class*="border"] {
+    border: 1px solid #ccc !important;
+    background: #fff !important;
+    box-shadow: none !important;
+  }
+
+  .city-page :is(article, section, li, pre),
+  .city-page .print-city-scoped > * {
+    break-inside: avoid;
+    page-break-inside: avoid;
+  }
+
+  .city-page .print-city-scoped,
+  .city-page .print-city-scoped * {
+    background: #fff !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="bg-amber"], [class*="bg-yellow"], [class*="bg-jade"], [class*="bg-paper"], [class*="shadow"], [class*="backdrop"]) {
+    background: #fff !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="rounded"], [class*="border"]) {
+    border-color: #ccc !important;
+  }
+
+  .print-page-footer {
+    position: fixed;
+    right: 0;
+    bottom: 0;
+    left: 0;
+    z-index: 9999;
+    display: flex !important;
+    height: 10mm;
+    align-items: center;
+    justify-content: center;
+    border-top: 1px solid #ccc;
+    background: #fff;
+    color: #000 !important;
+    font-size: 8pt;
+  }
+
+  .print-page-number::after {
+    content: counter(page);
+  }
+}

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index 83fd041e29496a2cbdec5a256645075881e67de1..eeba939297802f5beca92969293dd34e8d66cd94
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -456,7 +456,7 @@
   }, [lang, provinceId, selectedProvince, token]);
 
   return (
-    <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
+    <div data-print-map="true" className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
       <div ref={containerRef} className="absolute inset-0" />
 
       {loadState === "loading" && (
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 9a43cf53f59f0c057456836db02cccc440b91e29..f3dc7bf26bcbaf463aaf78d3bd6cfc7026ca3f77
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -11,7 +11,7 @@
 
   if (error) {
     return (
-      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+      <div data-print-map="true" className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
         {lang === "zh"
           ? "地图轮廓加载失败，刷新重试。"
           : "Map outline failed to load. Refresh to retry."}
@@ -20,12 +20,13 @@
   }
 
   if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
+    return <div data-print-map="true" className="h-full w-full bg-white/70" />;
   }
 
   return (
-    <svg
-      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
+    <svg
+      data-print-map="true"
+      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
       preserveAspectRatio="xMidYMid meet"
       className="h-full w-full"
       aria-hidden
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..8b1cd5ceeec5f6cec5ccb533d06dd76c54cec42a
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China - {cityUrl} - Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }
diff --git a/v2/src/styles/globals.css b/v2/src/styles/globals.css
index 78006bee9aa82900bac7b5dcc59cc90b968bd841..445e7e0ae2256bf0a11dcdf1fd3a712d5bf7ed47
--- a/v2/src/styles/globals.css
+++ b/v2/src/styles/globals.css
@@ -104,8 +104,146 @@
   transform-origin: center;
 }
 
-@media (min-width: 640px) {
-  .china-map-surface > div:first-child {
-    transform: none;
-  }
-}
+@media (min-width: 640px) {
+  .china-map-surface > div:first-child {
+    transform: none;
+  }
+}
+
+.print-page-footer {
+  display: none;
+}
+
+@media print {
+  @page {
+    margin: 14mm 12mm 18mm;
+  }
+
+  html,
+  body {
+    background: #fff !important;
+  }
+
+  body.city-page-route,
+  body:has(.city-page) {
+    background: #fff !important;
+    color: #000 !important;
+  }
+
+  body.city-page-route *,
+  body:has(.city-page) * {
+    color: #000 !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+    -webkit-print-color-adjust: exact;
+    print-color-adjust: exact;
+  }
+
+  body.city-page-route .site-header,
+  body.city-page-route .site-footer,
+  body.city-page-route .scroll-to-top,
+  body.city-page-route .city-nav,
+  body.city-page-route .city-page > .grid > aside,
+  body.city-page-route [data-print-map="true"],
+  body.city-page-route [data-province-3d-overlay="true"],
+  body.city-page-route .china-map-surface,
+  body:has(.city-page) .site-header,
+  body:has(.city-page) .site-footer,
+  body:has(.city-page) .scroll-to-top,
+  body:has(.city-page) .city-nav,
+  body:has(.city-page) .city-page > .grid > aside,
+  body:has(.city-page) [data-print-map="true"],
+  body:has(.city-page) [data-province-3d-overlay="true"],
+  body:has(.city-page) .china-map-surface {
+    display: none !important;
+  }
+
+  .city-page {
+    max-width: none !important;
+    width: 100% !important;
+    margin: 0 !important;
+    padding: 0 0 16mm !important;
+  }
+
+  .city-page > .grid {
+    display: block !important;
+  }
+
+  .city-page button,
+  .city-page .print-this-page {
+    display: none !important;
+  }
+
+  .city-page a[href] {
+    text-decoration: underline;
+    text-underline-offset: 2px;
+  }
+
+  .city-page a[href^="http"]::after {
+    content: " (" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="/"]::after {
+    content: " (https://travel-china.example.com" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="#"]::after,
+  .city-page a[href^="mailto:"]::after,
+  .city-page a[href^="tel:"]::after {
+    content: "";
+  }
+
+  .city-page :is(article, section, li, pre)[class*="border"],
+  .city-page :is(div)[class*="rounded"][class*="border"] {
+    border: 1px solid #ccc !important;
+    background: #fff !important;
+    box-shadow: none !important;
+  }
+
+  .city-page :is(article, section, li, pre),
+  .city-page .print-city-scoped > * {
+    break-inside: avoid;
+    page-break-inside: avoid;
+  }
+
+  .city-page .print-city-scoped,
+  .city-page .print-city-scoped * {
+    background: #fff !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="bg-amber"], [class*="bg-yellow"], [class*="bg-jade"], [class*="bg-paper"], [class*="shadow"], [class*="backdrop"]) {
+    background: #fff !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="rounded"], [class*="border"]) {
+    border-color: #ccc !important;
+  }
+
+  .print-page-footer {
+    position: fixed;
+    right: 0;
+    bottom: 0;
+    left: 0;
+    z-index: 9999;
+    display: flex !important;
+    height: 10mm;
+    align-items: center;
+    justify-content: center;
+    border-top: 1px solid #ccc;
+    background: #fff;
+    color: #000 !important;
+    font-size: 8pt;
+  }
+
+  .print-page-number::after {
+    content: counter(page);
+  }
+}

codex
改动已落地。现在开始验证：先跑 `npx tsc --noEmit`，如果有类型或 JSX 问题会直接修；通过后再跑生产 build。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
 succeeded in 1384ms:
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index 83fd041e29496a2cbdec5a256645075881e67de1..eeba939297802f5beca92969293dd34e8d66cd94
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -456,7 +456,7 @@
   }, [lang, provinceId, selectedProvince, token]);
 
   return (
-    <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
+    <div data-print-map="true" className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
       <div ref={containerRef} className="absolute inset-0" />
 
       {loadState === "loading" && (
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 9a43cf53f59f0c057456836db02cccc440b91e29..f3dc7bf26bcbaf463aaf78d3bd6cfc7026ca3f77
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -11,7 +11,7 @@
 
   if (error) {
     return (
-      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+      <div data-print-map="true" className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
         {lang === "zh"
           ? "地图轮廓加载失败，刷新重试。"
           : "Map outline failed to load. Refresh to retry."}
@@ -20,12 +20,13 @@
   }
 
   if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
+    return <div data-print-map="true" className="h-full w-full bg-white/70" />;
   }
 
   return (
-    <svg
-      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
+    <svg
+      data-print-map="true"
+      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
       preserveAspectRatio="xMidYMid meet"
       className="h-full w-full"
       aria-hidden
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..8b1cd5ceeec5f6cec5ccb533d06dd76c54cec42a
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China - {cityUrl} - Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }
diff --git a/v2/src/styles/globals.css b/v2/src/styles/globals.css
index 78006bee9aa82900bac7b5dcc59cc90b968bd841..445e7e0ae2256bf0a11dcdf1fd3a712d5bf7ed47
--- a/v2/src/styles/globals.css
+++ b/v2/src/styles/globals.css
@@ -104,8 +104,146 @@
   transform-origin: center;
 }
 
-@media (min-width: 640px) {
-  .china-map-surface > div:first-child {
-    transform: none;
-  }
-}
+@media (min-width: 640px) {
+  .china-map-surface > div:first-child {
+    transform: none;
+  }
+}
+
+.print-page-footer {
+  display: none;
+}
+
+@media print {
+  @page {
+    margin: 14mm 12mm 18mm;
+  }
+
+  html,
+  body {
+    background: #fff !important;
+  }
+
+  body.city-page-route,
+  body:has(.city-page) {
+    background: #fff !important;
+    color: #000 !important;
+  }
+
+  body.city-page-route *,
+  body:has(.city-page) * {
+    color: #000 !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+    -webkit-print-color-adjust: exact;
+    print-color-adjust: exact;
+  }
+
+  body.city-page-route .site-header,
+  body.city-page-route .site-footer,
+  body.city-page-route .scroll-to-top,
+  body.city-page-route .city-nav,
+  body.city-page-route .city-page > .grid > aside,
+  body.city-page-route [data-print-map="true"],
+  body.city-page-route [data-province-3d-overlay="true"],
+  body.city-page-route .china-map-surface,
+  body:has(.city-page) .site-header,
+  body:has(.city-page) .site-footer,
+  body:has(.city-page) .scroll-to-top,
+  body:has(.city-page) .city-nav,
+  body:has(.city-page) .city-page > .grid > aside,
+  body:has(.city-page) [data-print-map="true"],
+  body:has(.city-page) [data-province-3d-overlay="true"],
+  body:has(.city-page) .china-map-surface {
+    display: none !important;
+  }
+
+  .city-page {
+    max-width: none !important;
+    width: 100% !important;
+    margin: 0 !important;
+    padding: 0 0 16mm !important;
+  }
+
+  .city-page > .grid {
+    display: block !important;
+  }
+
+  .city-page button,
+  .city-page .print-this-page {
+    display: none !important;
+  }
+
+  .city-page a[href] {
+    text-decoration: underline;
+    text-underline-offset: 2px;
+  }
+
+  .city-page a[href^="http"]::after {
+    content: " (" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="/"]::after {
+    content: " (https://travel-china.example.com" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="#"]::after,
+  .city-page a[href^="mailto:"]::after,
+  .city-page a[href^="tel:"]::after {
+    content: "";
+  }
+
+  .city-page :is(article, section, li, pre)[class*="border"],
+  .city-page :is(div)[class*="rounded"][class*="border"] {
+    border: 1px solid #ccc !important;
+    background: #fff !important;
+    box-shadow: none !important;
+  }
+
+  .city-page :is(article, section, li, pre),
+  .city-page .print-city-scoped > * {
+    break-inside: avoid;
+    page-break-inside: avoid;
+  }
+
+  .city-page .print-city-scoped,
+  .city-page .print-city-scoped * {
+    background: #fff !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="bg-amber"], [class*="bg-yellow"], [class*="bg-jade"], [class*="bg-paper"], [class*="shadow"], [class*="backdrop"]) {
+    background: #fff !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="rounded"], [class*="border"]) {
+    border-color: #ccc !important;
+  }
+
+  .print-page-footer {
+    position: fixed;
+    right: 0;
+    bottom: 0;
+    left: 0;
+    z-index: 9999;
+    display: flex !important;
+    height: 10mm;
+    align-items: center;
+    justify-content: center;
+    border-top: 1px solid #ccc;
+    background: #fff;
+    color: #000 !important;
+    font-size: 8pt;
+  }
+
+  .print-page-number::after {
+    content: counter(page);
+  }
+}

codex
类型检查已 0 error。继续跑 `npm run build`，这里会覆盖/更新构建产物；我只会看和本次改动相关的失败。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 8318ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1523 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                        9.02 kB │ gzip:     1.29 kB
build/client/assets/Map3D-B9DDZdqH.css                 24.01 kB │ gzip:     5.37 kB
build/client/assets/root-D2q_0Zyk.css                  51.03 kB │ gzip:     9.63 kB
build/client/assets/unsplash-AuLmu4yK.js                0.14 kB │ gzip:     0.14 kB
build/client/assets/language-ByE0S41u.js                0.26 kB │ gzip:     0.21 kB
build/client/assets/clsx-CjyVoY27.js                    0.36 kB │ gzip:     0.23 kB
build/client/assets/jsonLd-7tf14g2G.js                  0.47 kB │ gzip:     0.33 kB
build/client/assets/cityRoutes-P6CJZ7xW.js              0.91 kB │ gzip:     0.50 kB
build/client/assets/chunk-C_v5nIyR.js                   0.95 kB │ gzip:     0.56 kB
build/client/assets/atlas-N8OZQUbD.js                   1.44 kB │ gzip:     0.64 kB
build/client/assets/provinceColors-Ct-yb9-1.js          1.84 kB │ gzip:     0.95 kB
build/client/assets/react-dom-BtVj_2WC.js               3.57 kB │ gzip:     1.36 kB
build/client/assets/phrasebook-DvpePtDc.js              4.43 kB │ gzip:     2.09 kB
build/client/assets/top-questions-pfacZOSZ.js           4.47 kB │ gzip:     2.58 kB
build/client/assets/PhrasebookPage-llxgCor-.js          5.78 kB │ gzip:     2.20 kB
build/client/assets/HomePage-DWNuYoLe.js                6.52 kB │ gzip:     3.01 kB
build/client/assets/SharePage-DJ9TGXew.js               7.48 kB │ gzip:     2.76 kB
build/client/assets/phase2-preview-CWgs3Arj.js          7.59 kB │ gzip:     4.48 kB
build/client/assets/AskPage-CMD5cqe5.js                 7.62 kB │ gzip:     2.92 kB
build/client/assets/Map3D-BJ6ZdsD7.js                   9.02 kB │ gzip:     4.26 kB
build/client/assets/SearchPage-Dj4ngdji.js              9.85 kB │ gzip:     4.00 kB
build/client/assets/GuidePage-CkBb2vGc.js              10.07 kB │ gzip:     4.19 kB
build/client/assets/transport-CjuPjS0n.js              12.28 kB │ gzip:     5.22 kB
build/client/assets/MapPage-CwhwtIqJ.js                13.79 kB │ gzip:     5.03 kB
build/client/assets/root-BAIU5oDA.js                   15.48 kB │ gzip:     6.28 kB
build/client/assets/PlanPage-DYb5KIam.js               16.91 kB │ gzip:     7.79 kB
build/client/assets/practical-payments-D1zcs8_G.js     17.98 kB │ gzip:     7.99 kB
build/client/assets/SourcesNote-DUbQVllY.js            21.32 kB │ gzip:     7.82 kB
build/client/assets/practical-other-DXfJJBXn.js        22.32 kB │ gzip:    10.77 kB
build/client/assets/city-attractions-XIUiV-zh.js       22.58 kB │ gzip:    10.40 kB
build/client/assets/map-sources-BrTAkd__.js            23.89 kB │ gzip:     9.43 kB
build/client/assets/SourcesPage-CvLu1hb6.js            35.81 kB │ gzip:     9.32 kB
build/client/assets/CityPage-DbMh8IOD.js               67.56 kB │ gzip:    25.11 kB
build/client/assets/jsx-runtime-BmUxdvRO.js           128.03 kB │ gzip:    42.26 kB
build/client/assets/entry.client-C099IiRD.js          183.09 kB │ gzip:    58.04 kB
build/client/assets/Cesium-BGlUpx9Q.js              4,724.63 kB │ gzip: 1,304.40 kB

[32m✓ built in 4.56s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 83 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\server-build-D2q_0Zyk.css[22m
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
Prerender (html): /search -> [1mbuild\client\search\index.html[22m
Prerender (html): /city/beijing -> [1mbuild\client\city\beijing\index.html[22m
Prerender (html): /city/shanghai -> [1mbuild\client\city\shanghai\index.html[22m
Prerender (html): /city/guangzhou -> [1mbuild\client\city\guangzhou\index.html[22m
Prerender (html): /city/shenzhen -> [1mbuild\client\city\shenzhen\index.html[22m
Prerender (html): SPA Fallback -> [1mbuild\client\__spa-fallback.html[22m
Removing the server build in [32mC:\Users\h\Documents\New project 2\v2\build\server[39m due to ssr:false
computing gzip size...
build/server/.vite/manifest.json                 0.74 kB │ gzip:   0.27 kB
build/server/assets/Map3D-B9DDZdqH.css          24.01 kB │ gzip:   5.37 kB
build/server/assets/server-build-D2q_0Zyk.css   51.03 kB │ gzip:   9.63 kB
build/server/assets/Map3D-CSuGF0Zj.js           15.50 kB │ gzip:   5.34 kB
build/server/assets/cityRoutes-CzeiLO87.js      33.98 kB │ gzip:  11.23 kB
build/server/index.js                          410.28 kB │ gzip: 126.43 kB

[32m✓ built in 702ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:dot-server (40%)
  - react-router:virtual-modules (33%)
  - react-router:inject-hmr-runtime (17%)
  - react-router:hmr-runtime (5%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index 83fd041e29496a2cbdec5a256645075881e67de1..eeba939297802f5beca92969293dd34e8d66cd94
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -456,7 +456,7 @@
   }, [lang, provinceId, selectedProvince, token]);
 
   return (
-    <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
+    <div data-print-map="true" className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
       <div ref={containerRef} className="absolute inset-0" />
 
       {loadState === "loading" && (
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 9a43cf53f59f0c057456836db02cccc440b91e29..f3dc7bf26bcbaf463aaf78d3bd6cfc7026ca3f77
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -11,7 +11,7 @@
 
   if (error) {
     return (
-      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+      <div data-print-map="true" className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
         {lang === "zh"
           ? "地图轮廓加载失败，刷新重试。"
           : "Map outline failed to load. Refresh to retry."}
@@ -20,12 +20,13 @@
   }
 
   if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
+    return <div data-print-map="true" className="h-full w-full bg-white/70" />;
   }
 
   return (
-    <svg
-      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
+    <svg
+      data-print-map="true"
+      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
       preserveAspectRatio="xMidYMid meet"
       className="h-full w-full"
       aria-hidden
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..8b1cd5ceeec5f6cec5ccb533d06dd76c54cec42a
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China - {cityUrl} - Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }
diff --git a/v2/src/styles/globals.css b/v2/src/styles/globals.css
index 78006bee9aa82900bac7b5dcc59cc90b968bd841..445e7e0ae2256bf0a11dcdf1fd3a712d5bf7ed47
--- a/v2/src/styles/globals.css
+++ b/v2/src/styles/globals.css
@@ -104,8 +104,146 @@
   transform-origin: center;
 }
 
-@media (min-width: 640px) {
-  .china-map-surface > div:first-child {
-    transform: none;
-  }
-}
+@media (min-width: 640px) {
+  .china-map-surface > div:first-child {
+    transform: none;
+  }
+}
+
+.print-page-footer {
+  display: none;
+}
+
+@media print {
+  @page {
+    margin: 14mm 12mm 18mm;
+  }
+
+  html,
+  body {
+    background: #fff !important;
+  }
+
+  body.city-page-route,
+  body:has(.city-page) {
+    background: #fff !important;
+    color: #000 !important;
+  }
+
+  body.city-page-route *,
+  body:has(.city-page) * {
+    color: #000 !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+    -webkit-print-color-adjust: exact;
+    print-color-adjust: exact;
+  }
+
+  body.city-page-route .site-header,
+  body.city-page-route .site-footer,
+  body.city-page-route .scroll-to-top,
+  body.city-page-route .city-nav,
+  body.city-page-route .city-page > .grid > aside,
+  body.city-page-route [data-print-map="true"],
+  body.city-page-route [data-province-3d-overlay="true"],
+  body.city-page-route .china-map-surface,
+  body:has(.city-page) .site-header,
+  body:has(.city-page) .site-footer,
+  body:has(.city-page) .scroll-to-top,
+  body:has(.city-page) .city-nav,
+  body:has(.city-page) .city-page > .grid > aside,
+  body:has(.city-page) [data-print-map="true"],
+  body:has(.city-page) [data-province-3d-overlay="true"],
+  body:has(.city-page) .china-map-surface {
+    display: none !important;
+  }
+
+  .city-page {
+    max-width: none !important;
+    width: 100% !important;
+    margin: 0 !important;
+    padding: 0 0 16mm !important;
+  }
+
+  .city-page > .grid {
+    display: block !important;
+  }
+
+  .city-page button,
+  .city-page .print-this-page {
+    display: none !important;
+  }
+
+  .city-page a[href] {
+    text-decoration: underline;
+    text-underline-offset: 2px;
+  }
+
+  .city-page a[href^="http"]::after {
+    content: " (" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="/"]::after {
+    content: " (https://travel-china.example.com" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="#"]::after,
+  .city-page a[href^="mailto:"]::after,
+  .city-page a[href^="tel:"]::after {
+    content: "";
+  }
+
+  .city-page :is(article, section, li, pre)[class*="border"],
+  .city-page :is(div)[class*="rounded"][class*="border"] {
+    border: 1px solid #ccc !important;
+    background: #fff !important;
+    box-shadow: none !important;
+  }
+
+  .city-page :is(article, section, li, pre),
+  .city-page .print-city-scoped > * {
+    break-inside: avoid;
+    page-break-inside: avoid;
+  }
+
+  .city-page .print-city-scoped,
+  .city-page .print-city-scoped * {
+    background: #fff !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="bg-amber"], [class*="bg-yellow"], [class*="bg-jade"], [class*="bg-paper"], [class*="shadow"], [class*="backdrop"]) {
+    background: #fff !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="rounded"], [class*="border"]) {
+    border-color: #ccc !important;
+  }
+
+  .print-page-footer {
+    position: fixed;
+    right: 0;
+    bottom: 0;
+    left: 0;
+    z-index: 9999;
+    display: flex !important;
+    height: 10mm;
+    align-items: center;
+    justify-content: center;
+    border-top: 1px solid #ccc;
+    background: #fff;
+    color: #000 !important;
+    font-size: 8pt;
+  }
+
+  .print-page-number::after {
+    content: counter(page);
+  }
+}

codex
构建也过了，只有现有的大 chunk / plugin timing warning，没有错误。最后我会快速看一次 diff，确认只覆盖本次要求的文件和生成产物状态。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short' in c:\Users\h\Documents\New project 2\v2
 succeeded in 474ms:
 M public/sitemap.xml
 M react-router.config.ts
 M src/components/city/CityIntro.tsx
 M src/components/city/CityNav.tsx
 M src/components/common/ScrollToTop.tsx
 M src/components/layout/LanguageSwitch.tsx
 M src/components/layout/SiteFooter.tsx
 M src/components/layout/SiteHeader.tsx
 M src/components/map/HeroMap.tsx
 M src/components/map/Map3D.tsx
 M src/components/map/MapPreview.tsx
 M src/components/map/Province3DOverlay.tsx
 M src/components/pillar/EmergencyBriefing.tsx
 M src/components/pillar/FoodGuide.tsx
 M src/components/pillar/PaymentsChecklist.tsx
 M src/components/pillar/TransportGuide.tsx
 M src/lib/search.ts
 M src/pages/CityPage.tsx
 M src/pages/GuidePage.tsx
 M src/pages/HomePage.tsx
 M src/pages/PhrasebookPage.tsx
 M src/root.tsx
 M src/routes.ts
 M src/styles/globals.css
?? ../.omc/artifacts/ask/codex-v2-workdir-edit-build-currency-converter-1-v2-src-components-2026-05-12T03-44-03-003Z.md
?? ../.omc/artifacts/ask/codex-v2-workdir-edit-build-search-1-v2-src-lib-search-ts-buildsea-2026-05-12T03-49-05-260Z.md
?? src/components/layout/ThemeSwitch.tsx
?? src/components/tools/
?? src/data/exchange-rates.ts
?? src/pages/SearchPage.tsx
?? src/store/ThemeProvider.tsx

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git diff -- src/pages/CityPage.tsx src/styles/globals.css src/components/layout/SiteHeader.tsx src/components/layout/SiteFooter.tsx src/components/common/ScrollToTop.tsx src/components/city/CityNav.tsx src/components/pillar/PaymentsChecklist.tsx src/components/pillar/TransportGuide.tsx src/components/pillar/FoodGuide.tsx src/components/pillar/EmergencyBriefing.tsx src/components/map/HeroMap.tsx src/components/map/MapPreview.tsx src/components/map/Province3DOverlay.tsx src/components/map/Map3D.tsx' in c:\Users\h\Documents\New project 2\v2
 succeeded in 473ms:
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6..41c9bc7 100644
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@ export default function CityNav() {
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df..4791c67 100644
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@ export default function ScrollToTop() {
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3..59360e3 100644
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@ export default function SiteFooter() {
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 6decfa0..ca764bd 100644
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,18 +1,31 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
+import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
 
 export default function SiteHeader() {
   const { lang } = useLang();
+  const navigate = useNavigate();
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
+        <button
+          type="button"
+          aria-label={isZh ? "打开全站搜索" : "Open site search"}
+          onClick={() => navigate("/search")}
+          className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-white text-ink transition hover:border-jade hover:text-jade focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+        >
+          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
+            <circle cx="11" cy="11" r="7" />
+            <path d="m16.5 16.5 4 4" />
+          </svg>
+        </button>
         <nav aria-label={isZh ? "主导航" : "Main navigation"}>
           <Link
             to="/phrasebook"
@@ -21,6 +34,7 @@ export default function SiteHeader() {
             {isZh ? "应急短语" : "Phrases"}
           </Link>
         </nav>
+        <ThemeSwitch />
         <LanguageSwitch />
       </div>
     </header>
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff..a55aa13 100644
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -28,6 +28,7 @@ export default function HeroMap() {
   return (
     <section
       aria-label="China interactive map"
+      data-print-map="true"
       data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index 83fd041..eeba939 100644
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -456,7 +456,7 @@ export default function Map3D({ province, provinceId, lang }: Map3DProps) {
   }, [lang, provinceId, selectedProvince, token]);
 
   return (
-    <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
+    <div data-print-map="true" className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
       <div ref={containerRef} className="absolute inset-0" />
 
       {loadState === "loading" && (
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 9a43cf5..f3dc7bf 100644
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -11,7 +11,7 @@ export default function MapPreview() {
 
   if (error) {
     return (
-      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+      <div data-print-map="true" className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
         {lang === "zh"
           ? "地图轮廓加载失败，刷新重试。"
           : "Map outline failed to load. Refresh to retry."}
@@ -20,11 +20,12 @@ export default function MapPreview() {
   }
 
   if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
+    return <div data-print-map="true" className="h-full w-full bg-white/70" />;
   }
 
   return (
     <svg
+      data-print-map="true"
       viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
       preserveAspectRatio="xMidYMid meet"
       className="h-full w-full"
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a7343..2360f1b 100644
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -15,6 +15,7 @@ export default function Province3DOverlay() {
 
   return (
     <section
+      data-print-map="true"
       data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2f..7d6fefe 100644
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@ export default function EmergencyBriefing({ cityId }: Props) {
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5..11b6799 100644
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@ export default function FoodGuide({ cityId }: Props) {
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b4..7abd1cf 100644
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@ export default function PaymentsChecklist({ cityId }: Props) {
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbec..a1bfed4 100644
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@ export default function TransportGuide({ cityId }: Props) {
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb..8b1cd5c 100644
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@ function cityBreadcrumbStructuredData(cityId: CityId) {
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,6 +97,19 @@ export default function CityPage() {
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
+
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
 
   return (
     <>
@@ -101,13 +121,22 @@ export default function CityPage() {
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@ export default function CityPage() {
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China - {cityUrl} - Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }
diff --git a/v2/src/styles/globals.css b/v2/src/styles/globals.css
index 844177e..445e7e0 100644
--- a/v2/src/styles/globals.css
+++ b/v2/src/styles/globals.css
@@ -1,5 +1,7 @@
 @import "tailwindcss";
 
+@custom-variant dark (&:where(.dark, .dark *));
+
 @theme {
   --color-ink: #18201d;
   --color-muted: #5b6863;
@@ -10,6 +12,48 @@
   --font-sans: "Inter", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
 }
 
+html.dark {
+  --color-ink: #e6eee9;
+  --color-muted: #a8b7b0;
+  --color-line: rgba(220, 235, 227, 0.18);
+  --color-paper: #0b1110;
+  --color-jade: #63d2bc;
+  --color-jade-soft: rgba(99, 210, 188, 0.14);
+  --color-ink-fill: #101a16;
+  --color-elevated: #121b18;
+  --color-elevated-90: rgba(18, 27, 24, 0.9);
+  --color-elevated-95: rgba(18, 27, 24, 0.95);
+}
+
+html.dark .bg-ink,
+html.dark .dark\:bg-ink {
+  background-color: var(--color-ink-fill);
+}
+
+html.dark .bg-ink\/30 {
+  background-color: rgba(2, 7, 5, 0.64);
+}
+
+html.dark .hover\:bg-ink\/90:hover {
+  background-color: rgba(16, 26, 22, 0.9);
+}
+
+html.dark .border-ink {
+  border-color: var(--color-ink-fill);
+}
+
+html.dark .bg-white {
+  background-color: var(--color-elevated);
+}
+
+html.dark .bg-white\/90 {
+  background-color: var(--color-elevated-90);
+}
+
+html.dark .bg-white\/95 {
+  background-color: var(--color-elevated-95);
+}
+
 html,
 body {
   background: var(--color-paper);
@@ -65,3 +109,141 @@ a {
     transform: none;
   }
 }
+
+.print-page-footer {
+  display: none;
+}
+
+@media print {
+  @page {
+    margin: 14mm 12mm 18mm;
+  }
+
+  html,
+  body {
+    background: #fff !important;
+  }
+
+  body.city-page-route,
+  body:has(.city-page) {
+    background: #fff !important;
+    color: #000 !important;
+  }
+
+  body.city-page-route *,
+  body:has(.city-page) * {
+    color: #000 !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+    -webkit-print-color-adjust: exact;
+    print-color-adjust: exact;
+  }
+
+  body.city-page-route .site-header,
+  body.city-page-route .site-footer,
+  body.city-page-route .scroll-to-top,
+  body.city-page-route .city-nav,
+  body.city-page-route .city-page > .grid > aside,
+  body.city-page-route [data-print-map="true"],
+  body.city-page-route [data-province-3d-overlay="true"],
+  body.city-page-route .china-map-surface,
+  body:has(.city-page) .site-header,
+  body:has(.city-page) .site-footer,
+  body:has(.city-page) .scroll-to-top,
+  body:has(.city-page) .city-nav,
+  body:has(.city-page) .city-page > .grid > aside,
+  body:has(.city-page) [data-print-map="true"],
+  body:has(.city-page) [data-province-3d-overlay="true"],
+  body:has(.city-page) .china-map-surface {
+    display: none !important;
+  }
+
+  .city-page {
+    max-width: none !important;
+    width: 100% !important;
+    margin: 0 !important;
+    padding: 0 0 16mm !important;
+  }
+
+  .city-page > .grid {
+    display: block !important;
+  }
+
+  .city-page button,
+  .city-page .print-this-page {
+    display: none !important;
+  }
+
+  .city-page a[href] {
+    text-decoration: underline;
+    text-underline-offset: 2px;
+  }
+
+  .city-page a[href^="http"]::after {
+    content: " (" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="/"]::after {
+    content: " (https://travel-china.example.com" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="#"]::after,
+  .city-page a[href^="mailto:"]::after,
+  .city-page a[href^="tel:"]::after {
+    content: "";
+  }
+
+  .city-page :is(article, section, li, pre)[class*="border"],
+  .city-page :is(div)[class*="rounded"][class*="border"] {
+    border: 1px solid #ccc !important;
+    background: #fff !important;
+    box-shadow: none !important;
+  }
+
+  .city-page :is(article, section, li, pre),
+  .city-page .print-city-scoped > * {
+    break-inside: avoid;
+    page-break-inside: avoid;
+  }
+
+  .city-page .print-city-scoped,
+  .city-page .print-city-scoped * {
+    background: #fff !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="bg-amber"], [class*="bg-yellow"], [class*="bg-jade"], [class*="bg-paper"], [class*="shadow"], [class*="backdrop"]) {
+    background: #fff !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="rounded"], [class*="border"]) {
+    border-color: #ccc !important;
+  }
+
+  .print-page-footer {
+    position: fixed;
+    right: 0;
+    bottom: 0;
+    left: 0;
+    z-index: 9999;
+    display: flex !important;
+    height: 10mm;
+    align-items: center;
+    justify-content: center;
+    border-top: 1px solid #ccc;
+    background: #fff;
+    color: #000 !important;
+    font-size: 8pt;
+  }
+
+  .print-page-number::after {
+    content: counter(page);
+  }
+}
warning: in the working copy of 'v2/src/components/city/CityNav.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/common/ScrollToTop.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/layout/SiteFooter.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/layout/SiteHeader.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/map/HeroMap.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/map/Map3D.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/map/MapPreview.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/map/Province3DOverlay.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/pillar/EmergencyBriefing.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/pillar/FoodGuide.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/pillar/PaymentsChecklist.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/pillar/TransportGuide.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/pages/CityPage.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/styles/globals.css', LF will be replaced by CRLF the next time Git touches it

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index 83fd041e29496a2cbdec5a256645075881e67de1..eeba939297802f5beca92969293dd34e8d66cd94
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -456,7 +456,7 @@
   }, [lang, provinceId, selectedProvince, token]);
 
   return (
-    <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
+    <div data-print-map="true" className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
       <div ref={containerRef} className="absolute inset-0" />
 
       {loadState === "loading" && (
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 9a43cf53f59f0c057456836db02cccc440b91e29..f3dc7bf26bcbaf463aaf78d3bd6cfc7026ca3f77
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -11,7 +11,7 @@
 
   if (error) {
     return (
-      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+      <div data-print-map="true" className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
         {lang === "zh"
           ? "地图轮廓加载失败，刷新重试。"
           : "Map outline failed to load. Refresh to retry."}
@@ -20,12 +20,13 @@
   }
 
   if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
+    return <div data-print-map="true" className="h-full w-full bg-white/70" />;
   }
 
   return (
-    <svg
-      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
+    <svg
+      data-print-map="true"
+      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
       preserveAspectRatio="xMidYMid meet"
       className="h-full w-full"
       aria-hidden
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..8b1cd5ceeec5f6cec5ccb533d06dd76c54cec42a
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,14 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
 
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +97,20 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
 
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
+
+    if (lang !== "en") {
+      const restoreLanguage = () => setLang(lang);
+      window.addEventListener("afterprint", restoreLanguage, { once: true });
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +121,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +175,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China - {cityUrl} - Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }
diff --git a/v2/src/styles/globals.css b/v2/src/styles/globals.css
index 78006bee9aa82900bac7b5dcc59cc90b968bd841..445e7e0ae2256bf0a11dcdf1fd3a712d5bf7ed47
--- a/v2/src/styles/globals.css
+++ b/v2/src/styles/globals.css
@@ -104,8 +104,146 @@
   transform-origin: center;
 }
 
-@media (min-width: 640px) {
-  .china-map-surface > div:first-child {
-    transform: none;
-  }
-}
+@media (min-width: 640px) {
+  .china-map-surface > div:first-child {
+    transform: none;
+  }
+}
+
+.print-page-footer {
+  display: none;
+}
+
+@media print {
+  @page {
+    margin: 14mm 12mm 18mm;
+  }
+
+  html,
+  body {
+    background: #fff !important;
+  }
+
+  body.city-page-route,
+  body:has(.city-page) {
+    background: #fff !important;
+    color: #000 !important;
+  }
+
+  body.city-page-route *,
+  body:has(.city-page) * {
+    color: #000 !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+    -webkit-print-color-adjust: exact;
+    print-color-adjust: exact;
+  }
+
+  body.city-page-route .site-header,
+  body.city-page-route .site-footer,
+  body.city-page-route .scroll-to-top,
+  body.city-page-route .city-nav,
+  body.city-page-route .city-page > .grid > aside,
+  body.city-page-route [data-print-map="true"],
+  body.city-page-route [data-province-3d-overlay="true"],
+  body.city-page-route .china-map-surface,
+  body:has(.city-page) .site-header,
+  body:has(.city-page) .site-footer,
+  body:has(.city-page) .scroll-to-top,
+  body:has(.city-page) .city-nav,
+  body:has(.city-page) .city-page > .grid > aside,
+  body:has(.city-page) [data-print-map="true"],
+  body:has(.city-page) [data-province-3d-overlay="true"],
+  body:has(.city-page) .china-map-surface {
+    display: none !important;
+  }
+
+  .city-page {
+    max-width: none !important;
+    width: 100% !important;
+    margin: 0 !important;
+    padding: 0 0 16mm !important;
+  }
+
+  .city-page > .grid {
+    display: block !important;
+  }
+
+  .city-page button,
+  .city-page .print-this-page {
+    display: none !important;
+  }
+
+  .city-page a[href] {
+    text-decoration: underline;
+    text-underline-offset: 2px;
+  }
+
+  .city-page a[href^="http"]::after {
+    content: " (" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="/"]::after {
+    content: " (https://travel-china.example.com" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="#"]::after,
+  .city-page a[href^="mailto:"]::after,
+  .city-page a[href^="tel:"]::after {
+    content: "";
+  }
+
+  .city-page :is(article, section, li, pre)[class*="border"],
+  .city-page :is(div)[class*="rounded"][class*="border"] {
+    border: 1px solid #ccc !important;
+    background: #fff !important;
+    box-shadow: none !important;
+  }
+
+  .city-page :is(article, section, li, pre),
+  .city-page .print-city-scoped > * {
+    break-inside: avoid;
+    page-break-inside: avoid;
+  }
+
+  .city-page .print-city-scoped,
+  .city-page .print-city-scoped * {
+    background: #fff !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="bg-amber"], [class*="bg-yellow"], [class*="bg-jade"], [class*="bg-paper"], [class*="shadow"], [class*="backdrop"]) {
+    background: #fff !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="rounded"], [class*="border"]) {
+    border-color: #ccc !important;
+  }
+
+  .print-page-footer {
+    position: fixed;
+    right: 0;
+    bottom: 0;
+    left: 0;
+    z-index: 9999;
+    display: flex !important;
+    height: 10mm;
+    align-items: center;
+    justify-content: center;
+    border-top: 1px solid #ccc;
+    background: #fff;
+    color: #000 !important;
+    font-size: 8pt;
+  }
+
+  .print-page-number::after {
+    content: counter(page);
+  }
+}

codex
我发现“打印默认 EN”只绑定在按钮点击上还不够，用户用浏览器菜单打印时可能绕过按钮。我会补 `beforeprint/afterprint` 监听，让 CityPage 任意打印路径都会临时切英文并在打印后恢复。
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\pages\CityPage.tsx
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index 83fd041e29496a2cbdec5a256645075881e67de1..eeba939297802f5beca92969293dd34e8d66cd94
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -456,7 +456,7 @@
   }, [lang, provinceId, selectedProvince, token]);
 
   return (
-    <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
+    <div data-print-map="true" className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
       <div ref={containerRef} className="absolute inset-0" />
 
       {loadState === "loading" && (
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 9a43cf53f59f0c057456836db02cccc440b91e29..f3dc7bf26bcbaf463aaf78d3bd6cfc7026ca3f77
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -11,7 +11,7 @@
 
   if (error) {
     return (
-      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+      <div data-print-map="true" className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
         {lang === "zh"
           ? "地图轮廓加载失败，刷新重试。"
           : "Map outline failed to load. Refresh to retry."}
@@ -20,12 +20,13 @@
   }
 
   if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
+    return <div data-print-map="true" className="h-full w-full bg-white/70" />;
   }
 
   return (
-    <svg
-      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
+    <svg
+      data-print-map="true"
+      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
       preserveAspectRatio="xMidYMid meet"
       className="h-full w-full"
       aria-hidden
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..25693d8764ba8e60b39b5cff7aca9536845d462c
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect, useRef } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,37 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
+  const printLanguageRef = useRef<typeof lang | null>(null);
+
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
 
+  useEffect(() => {
+    const prepareEnglishPrint = () => {
+      if (lang === "en" || printLanguageRef.current) return;
+      printLanguageRef.current = lang;
+      flushSync(() => setLang("en"));
+    };
+
+    const restorePrintLanguage = () => {
+      const previousLang = printLanguageRef.current;
+      if (!previousLang) return;
+      printLanguageRef.current = null;
+      setLang(previousLang);
+    };
+
+    window.addEventListener("beforeprint", prepareEnglishPrint);
+    window.addEventListener("afterprint", restorePrintLanguage);
+    return () => {
+      window.removeEventListener("beforeprint", prepareEnglishPrint);
+      window.removeEventListener("afterprint", restorePrintLanguage);
+    };
+  }, [lang, setLang]);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +120,19 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
+
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
 
+    if (lang !== "en" && !printLanguageRef.current) {
+      printLanguageRef.current = lang;
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +143,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +197,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China - {cityUrl} - Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }
diff --git a/v2/src/styles/globals.css b/v2/src/styles/globals.css
index 78006bee9aa82900bac7b5dcc59cc90b968bd841..445e7e0ae2256bf0a11dcdf1fd3a712d5bf7ed47
--- a/v2/src/styles/globals.css
+++ b/v2/src/styles/globals.css
@@ -104,8 +104,146 @@
   transform-origin: center;
 }
 
-@media (min-width: 640px) {
-  .china-map-surface > div:first-child {
-    transform: none;
-  }
-}
+@media (min-width: 640px) {
+  .china-map-surface > div:first-child {
+    transform: none;
+  }
+}
+
+.print-page-footer {
+  display: none;
+}
+
+@media print {
+  @page {
+    margin: 14mm 12mm 18mm;
+  }
+
+  html,
+  body {
+    background: #fff !important;
+  }
+
+  body.city-page-route,
+  body:has(.city-page) {
+    background: #fff !important;
+    color: #000 !important;
+  }
+
+  body.city-page-route *,
+  body:has(.city-page) * {
+    color: #000 !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+    -webkit-print-color-adjust: exact;
+    print-color-adjust: exact;
+  }
+
+  body.city-page-route .site-header,
+  body.city-page-route .site-footer,
+  body.city-page-route .scroll-to-top,
+  body.city-page-route .city-nav,
+  body.city-page-route .city-page > .grid > aside,
+  body.city-page-route [data-print-map="true"],
+  body.city-page-route [data-province-3d-overlay="true"],
+  body.city-page-route .china-map-surface,
+  body:has(.city-page) .site-header,
+  body:has(.city-page) .site-footer,
+  body:has(.city-page) .scroll-to-top,
+  body:has(.city-page) .city-nav,
+  body:has(.city-page) .city-page > .grid > aside,
+  body:has(.city-page) [data-print-map="true"],
+  body:has(.city-page) [data-province-3d-overlay="true"],
+  body:has(.city-page) .china-map-surface {
+    display: none !important;
+  }
+
+  .city-page {
+    max-width: none !important;
+    width: 100% !important;
+    margin: 0 !important;
+    padding: 0 0 16mm !important;
+  }
+
+  .city-page > .grid {
+    display: block !important;
+  }
+
+  .city-page button,
+  .city-page .print-this-page {
+    display: none !important;
+  }
+
+  .city-page a[href] {
+    text-decoration: underline;
+    text-underline-offset: 2px;
+  }
+
+  .city-page a[href^="http"]::after {
+    content: " (" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="/"]::after {
+    content: " (https://travel-china.example.com" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="#"]::after,
+  .city-page a[href^="mailto:"]::after,
+  .city-page a[href^="tel:"]::after {
+    content: "";
+  }
+
+  .city-page :is(article, section, li, pre)[class*="border"],
+  .city-page :is(div)[class*="rounded"][class*="border"] {
+    border: 1px solid #ccc !important;
+    background: #fff !important;
+    box-shadow: none !important;
+  }
+
+  .city-page :is(article, section, li, pre),
+  .city-page .print-city-scoped > * {
+    break-inside: avoid;
+    page-break-inside: avoid;
+  }
+
+  .city-page .print-city-scoped,
+  .city-page .print-city-scoped * {
+    background: #fff !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="bg-amber"], [class*="bg-yellow"], [class*="bg-jade"], [class*="bg-paper"], [class*="shadow"], [class*="backdrop"]) {
+    background: #fff !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="rounded"], [class*="border"]) {
+    border-color: #ccc !important;
+  }
+
+  .print-page-footer {
+    position: fixed;
+    right: 0;
+    bottom: 0;
+    left: 0;
+    z-index: 9999;
+    display: flex !important;
+    height: 10mm;
+    align-items: center;
+    justify-content: center;
+    border-top: 1px solid #ccc;
+    background: #fff;
+    color: #000 !important;
+    font-size: 8pt;
+  }
+
+  .print-page-number::after {
+    content: counter(page);
+  }
+}

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index 83fd041e29496a2cbdec5a256645075881e67de1..eeba939297802f5beca92969293dd34e8d66cd94
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -456,7 +456,7 @@
   }, [lang, provinceId, selectedProvince, token]);
 
   return (
-    <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
+    <div data-print-map="true" className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
       <div ref={containerRef} className="absolute inset-0" />
 
       {loadState === "loading" && (
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 9a43cf53f59f0c057456836db02cccc440b91e29..f3dc7bf26bcbaf463aaf78d3bd6cfc7026ca3f77
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -11,7 +11,7 @@
 
   if (error) {
     return (
-      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+      <div data-print-map="true" className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
         {lang === "zh"
           ? "地图轮廓加载失败，刷新重试。"
           : "Map outline failed to load. Refresh to retry."}
@@ -20,12 +20,13 @@
   }
 
   if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
+    return <div data-print-map="true" className="h-full w-full bg-white/70" />;
   }
 
   return (
-    <svg
-      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
+    <svg
+      data-print-map="true"
+      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
       preserveAspectRatio="xMidYMid meet"
       className="h-full w-full"
       aria-hidden
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..25693d8764ba8e60b39b5cff7aca9536845d462c
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect, useRef } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,37 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
+  const printLanguageRef = useRef<typeof lang | null>(null);
+
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
 
+  useEffect(() => {
+    const prepareEnglishPrint = () => {
+      if (lang === "en" || printLanguageRef.current) return;
+      printLanguageRef.current = lang;
+      flushSync(() => setLang("en"));
+    };
+
+    const restorePrintLanguage = () => {
+      const previousLang = printLanguageRef.current;
+      if (!previousLang) return;
+      printLanguageRef.current = null;
+      setLang(previousLang);
+    };
+
+    window.addEventListener("beforeprint", prepareEnglishPrint);
+    window.addEventListener("afterprint", restorePrintLanguage);
+    return () => {
+      window.removeEventListener("beforeprint", prepareEnglishPrint);
+      window.removeEventListener("afterprint", restorePrintLanguage);
+    };
+  }, [lang, setLang]);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +120,19 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
+
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
 
+    if (lang !== "en" && !printLanguageRef.current) {
+      printLanguageRef.current = lang;
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +143,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +197,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China - {cityUrl} - Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }
diff --git a/v2/src/styles/globals.css b/v2/src/styles/globals.css
index 78006bee9aa82900bac7b5dcc59cc90b968bd841..445e7e0ae2256bf0a11dcdf1fd3a712d5bf7ed47
--- a/v2/src/styles/globals.css
+++ b/v2/src/styles/globals.css
@@ -104,8 +104,146 @@
   transform-origin: center;
 }
 
-@media (min-width: 640px) {
-  .china-map-surface > div:first-child {
-    transform: none;
-  }
-}
+@media (min-width: 640px) {
+  .china-map-surface > div:first-child {
+    transform: none;
+  }
+}
+
+.print-page-footer {
+  display: none;
+}
+
+@media print {
+  @page {
+    margin: 14mm 12mm 18mm;
+  }
+
+  html,
+  body {
+    background: #fff !important;
+  }
+
+  body.city-page-route,
+  body:has(.city-page) {
+    background: #fff !important;
+    color: #000 !important;
+  }
+
+  body.city-page-route *,
+  body:has(.city-page) * {
+    color: #000 !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+    -webkit-print-color-adjust: exact;
+    print-color-adjust: exact;
+  }
+
+  body.city-page-route .site-header,
+  body.city-page-route .site-footer,
+  body.city-page-route .scroll-to-top,
+  body.city-page-route .city-nav,
+  body.city-page-route .city-page > .grid > aside,
+  body.city-page-route [data-print-map="true"],
+  body.city-page-route [data-province-3d-overlay="true"],
+  body.city-page-route .china-map-surface,
+  body:has(.city-page) .site-header,
+  body:has(.city-page) .site-footer,
+  body:has(.city-page) .scroll-to-top,
+  body:has(.city-page) .city-nav,
+  body:has(.city-page) .city-page > .grid > aside,
+  body:has(.city-page) [data-print-map="true"],
+  body:has(.city-page) [data-province-3d-overlay="true"],
+  body:has(.city-page) .china-map-surface {
+    display: none !important;
+  }
+
+  .city-page {
+    max-width: none !important;
+    width: 100% !important;
+    margin: 0 !important;
+    padding: 0 0 16mm !important;
+  }
+
+  .city-page > .grid {
+    display: block !important;
+  }
+
+  .city-page button,
+  .city-page .print-this-page {
+    display: none !important;
+  }
+
+  .city-page a[href] {
+    text-decoration: underline;
+    text-underline-offset: 2px;
+  }
+
+  .city-page a[href^="http"]::after {
+    content: " (" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="/"]::after {
+    content: " (https://travel-china.example.com" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="#"]::after,
+  .city-page a[href^="mailto:"]::after,
+  .city-page a[href^="tel:"]::after {
+    content: "";
+  }
+
+  .city-page :is(article, section, li, pre)[class*="border"],
+  .city-page :is(div)[class*="rounded"][class*="border"] {
+    border: 1px solid #ccc !important;
+    background: #fff !important;
+    box-shadow: none !important;
+  }
+
+  .city-page :is(article, section, li, pre),
+  .city-page .print-city-scoped > * {
+    break-inside: avoid;
+    page-break-inside: avoid;
+  }
+
+  .city-page .print-city-scoped,
+  .city-page .print-city-scoped * {
+    background: #fff !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="bg-amber"], [class*="bg-yellow"], [class*="bg-jade"], [class*="bg-paper"], [class*="shadow"], [class*="backdrop"]) {
+    background: #fff !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="rounded"], [class*="border"]) {
+    border-color: #ccc !important;
+  }
+
+  .print-page-footer {
+    position: fixed;
+    right: 0;
+    bottom: 0;
+    left: 0;
+    z-index: 9999;
+    display: flex !important;
+    height: 10mm;
+    align-items: center;
+    justify-content: center;
+    border-top: 1px solid #ccc;
+    background: #fff;
+    color: #000 !important;
+    font-size: 8pt;
+  }
+
+  .print-page-number::after {
+    content: counter(page);
+  }
+}

codex
已补任意打印路径的语言切换逻辑。重新跑类型检查和 build，确认这次调整没有引入问题。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 1394ms:
 succeeded in 9574ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1523 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                        9.02 kB │ gzip:     1.29 kB
build/client/assets/Map3D-B9DDZdqH.css                 24.01 kB │ gzip:     5.37 kB
build/client/assets/root-D2q_0Zyk.css                  51.03 kB │ gzip:     9.63 kB
build/client/assets/unsplash-AuLmu4yK.js                0.14 kB │ gzip:     0.14 kB
build/client/assets/language-ByE0S41u.js                0.26 kB │ gzip:     0.21 kB
build/client/assets/clsx-CjyVoY27.js                    0.36 kB │ gzip:     0.23 kB
build/client/assets/jsonLd-7tf14g2G.js                  0.47 kB │ gzip:     0.33 kB
build/client/assets/cityRoutes-P6CJZ7xW.js              0.91 kB │ gzip:     0.50 kB
build/client/assets/chunk-C_v5nIyR.js                   0.95 kB │ gzip:     0.56 kB
build/client/assets/atlas-N8OZQUbD.js                   1.44 kB │ gzip:     0.64 kB
build/client/assets/provinceColors-Ct-yb9-1.js          1.84 kB │ gzip:     0.95 kB
build/client/assets/react-dom-BtVj_2WC.js               3.57 kB │ gzip:     1.36 kB
build/client/assets/phrasebook-DvpePtDc.js              4.43 kB │ gzip:     2.09 kB
build/client/assets/top-questions-pfacZOSZ.js           4.47 kB │ gzip:     2.58 kB
build/client/assets/PhrasebookPage-llxgCor-.js          5.78 kB │ gzip:     2.20 kB
build/client/assets/HomePage-DWNuYoLe.js                6.52 kB │ gzip:     3.01 kB
build/client/assets/SharePage-DJ9TGXew.js               7.48 kB │ gzip:     2.76 kB
build/client/assets/phase2-preview-CWgs3Arj.js          7.59 kB │ gzip:     4.48 kB
build/client/assets/AskPage-CMD5cqe5.js                 7.62 kB │ gzip:     2.92 kB
build/client/assets/Map3D-BJ6ZdsD7.js                   9.02 kB │ gzip:     4.26 kB
build/client/assets/SearchPage-Dj4ngdji.js              9.85 kB │ gzip:     4.00 kB
build/client/assets/GuidePage-CkBb2vGc.js              10.07 kB │ gzip:     4.19 kB
build/client/assets/transport-CjuPjS0n.js              12.28 kB │ gzip:     5.22 kB
build/client/assets/MapPage-CwhwtIqJ.js                13.79 kB │ gzip:     5.03 kB
build/client/assets/root-BAIU5oDA.js                   15.48 kB │ gzip:     6.28 kB
build/client/assets/PlanPage-DYb5KIam.js               16.91 kB │ gzip:     7.79 kB
build/client/assets/practical-payments-D1zcs8_G.js     17.98 kB │ gzip:     7.99 kB
build/client/assets/SourcesNote-DUbQVllY.js            21.32 kB │ gzip:     7.82 kB
build/client/assets/practical-other-DXfJJBXn.js        22.32 kB │ gzip:    10.77 kB
build/client/assets/city-attractions-XIUiV-zh.js       22.58 kB │ gzip:    10.40 kB
build/client/assets/map-sources-BrTAkd__.js            23.89 kB │ gzip:     9.43 kB
build/client/assets/SourcesPage-CvLu1hb6.js            35.81 kB │ gzip:     9.32 kB
build/client/assets/CityPage-Bvz382iS.js               67.88 kB │ gzip:    25.20 kB
build/client/assets/jsx-runtime-BmUxdvRO.js           128.03 kB │ gzip:    42.26 kB
build/client/assets/entry.client-C099IiRD.js          183.09 kB │ gzip:    58.04 kB
build/client/assets/Cesium-BGlUpx9Q.js              4,724.63 kB │ gzip: 1,304.40 kB

[32m✓ built in 5.30s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 83 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\server-build-D2q_0Zyk.css[22m
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
Prerender (html): /search -> [1mbuild\client\search\index.html[22m
Prerender (html): /city/beijing -> [1mbuild\client\city\beijing\index.html[22m
Prerender (html): /city/shanghai -> [1mbuild\client\city\shanghai\index.html[22m
Prerender (html): /city/guangzhou -> [1mbuild\client\city\guangzhou\index.html[22m
Prerender (html): /city/shenzhen -> [1mbuild\client\city\shenzhen\index.html[22m
Prerender (html): SPA Fallback -> [1mbuild\client\__spa-fallback.html[22m
Removing the server build in [32mC:\Users\h\Documents\New project 2\v2\build\server[39m due to ssr:false
computing gzip size...
build/server/.vite/manifest.json                 0.74 kB │ gzip:   0.27 kB
build/server/assets/Map3D-B9DDZdqH.css          24.01 kB │ gzip:   5.37 kB
build/server/assets/server-build-D2q_0Zyk.css   51.03 kB │ gzip:   9.63 kB
build/server/assets/Map3D-CSuGF0Zj.js           15.50 kB │ gzip:   5.34 kB
build/server/assets/cityRoutes-CzeiLO87.js      33.98 kB │ gzip:  11.23 kB
build/server/index.js                          410.96 kB │ gzip: 126.57 kB

[32m✓ built in 1.11s[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:dot-server (38%)
  - react-router:virtual-modules (34%)
  - react-router:inject-hmr-runtime (18%)
  - react-router:hmr-runtime (5%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index 83fd041e29496a2cbdec5a256645075881e67de1..eeba939297802f5beca92969293dd34e8d66cd94
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -456,7 +456,7 @@
   }, [lang, provinceId, selectedProvince, token]);
 
   return (
-    <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
+    <div data-print-map="true" className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
       <div ref={containerRef} className="absolute inset-0" />
 
       {loadState === "loading" && (
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 9a43cf53f59f0c057456836db02cccc440b91e29..f3dc7bf26bcbaf463aaf78d3bd6cfc7026ca3f77
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -11,7 +11,7 @@
 
   if (error) {
     return (
-      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+      <div data-print-map="true" className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
         {lang === "zh"
           ? "地图轮廓加载失败，刷新重试。"
           : "Map outline failed to load. Refresh to retry."}
@@ -20,12 +20,13 @@
   }
 
   if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
+    return <div data-print-map="true" className="h-full w-full bg-white/70" />;
   }
 
   return (
-    <svg
-      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
+    <svg
+      data-print-map="true"
+      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
       preserveAspectRatio="xMidYMid meet"
       className="h-full w-full"
       aria-hidden
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..25693d8764ba8e60b39b5cff7aca9536845d462c
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect, useRef } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,37 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
+  const printLanguageRef = useRef<typeof lang | null>(null);
+
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
 
+  useEffect(() => {
+    const prepareEnglishPrint = () => {
+      if (lang === "en" || printLanguageRef.current) return;
+      printLanguageRef.current = lang;
+      flushSync(() => setLang("en"));
+    };
+
+    const restorePrintLanguage = () => {
+      const previousLang = printLanguageRef.current;
+      if (!previousLang) return;
+      printLanguageRef.current = null;
+      setLang(previousLang);
+    };
+
+    window.addEventListener("beforeprint", prepareEnglishPrint);
+    window.addEventListener("afterprint", restorePrintLanguage);
+    return () => {
+      window.removeEventListener("beforeprint", prepareEnglishPrint);
+      window.removeEventListener("afterprint", restorePrintLanguage);
+    };
+  }, [lang, setLang]);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +120,19 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
+
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
 
+    if (lang !== "en" && !printLanguageRef.current) {
+      printLanguageRef.current = lang;
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +143,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +197,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China - {cityUrl} - Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }
diff --git a/v2/src/styles/globals.css b/v2/src/styles/globals.css
index 78006bee9aa82900bac7b5dcc59cc90b968bd841..445e7e0ae2256bf0a11dcdf1fd3a712d5bf7ed47
--- a/v2/src/styles/globals.css
+++ b/v2/src/styles/globals.css
@@ -104,8 +104,146 @@
   transform-origin: center;
 }
 
-@media (min-width: 640px) {
-  .china-map-surface > div:first-child {
-    transform: none;
-  }
-}
+@media (min-width: 640px) {
+  .china-map-surface > div:first-child {
+    transform: none;
+  }
+}
+
+.print-page-footer {
+  display: none;
+}
+
+@media print {
+  @page {
+    margin: 14mm 12mm 18mm;
+  }
+
+  html,
+  body {
+    background: #fff !important;
+  }
+
+  body.city-page-route,
+  body:has(.city-page) {
+    background: #fff !important;
+    color: #000 !important;
+  }
+
+  body.city-page-route *,
+  body:has(.city-page) * {
+    color: #000 !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+    -webkit-print-color-adjust: exact;
+    print-color-adjust: exact;
+  }
+
+  body.city-page-route .site-header,
+  body.city-page-route .site-footer,
+  body.city-page-route .scroll-to-top,
+  body.city-page-route .city-nav,
+  body.city-page-route .city-page > .grid > aside,
+  body.city-page-route [data-print-map="true"],
+  body.city-page-route [data-province-3d-overlay="true"],
+  body.city-page-route .china-map-surface,
+  body:has(.city-page) .site-header,
+  body:has(.city-page) .site-footer,
+  body:has(.city-page) .scroll-to-top,
+  body:has(.city-page) .city-nav,
+  body:has(.city-page) .city-page > .grid > aside,
+  body:has(.city-page) [data-print-map="true"],
+  body:has(.city-page) [data-province-3d-overlay="true"],
+  body:has(.city-page) .china-map-surface {
+    display: none !important;
+  }
+
+  .city-page {
+    max-width: none !important;
+    width: 100% !important;
+    margin: 0 !important;
+    padding: 0 0 16mm !important;
+  }
+
+  .city-page > .grid {
+    display: block !important;
+  }
+
+  .city-page button,
+  .city-page .print-this-page {
+    display: none !important;
+  }
+
+  .city-page a[href] {
+    text-decoration: underline;
+    text-underline-offset: 2px;
+  }
+
+  .city-page a[href^="http"]::after {
+    content: " (" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="/"]::after {
+    content: " (https://travel-china.example.com" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="#"]::after,
+  .city-page a[href^="mailto:"]::after,
+  .city-page a[href^="tel:"]::after {
+    content: "";
+  }
+
+  .city-page :is(article, section, li, pre)[class*="border"],
+  .city-page :is(div)[class*="rounded"][class*="border"] {
+    border: 1px solid #ccc !important;
+    background: #fff !important;
+    box-shadow: none !important;
+  }
+
+  .city-page :is(article, section, li, pre),
+  .city-page .print-city-scoped > * {
+    break-inside: avoid;
+    page-break-inside: avoid;
+  }
+
+  .city-page .print-city-scoped,
+  .city-page .print-city-scoped * {
+    background: #fff !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="bg-amber"], [class*="bg-yellow"], [class*="bg-jade"], [class*="bg-paper"], [class*="shadow"], [class*="backdrop"]) {
+    background: #fff !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="rounded"], [class*="border"]) {
+    border-color: #ccc !important;
+  }
+
+  .print-page-footer {
+    position: fixed;
+    right: 0;
+    bottom: 0;
+    left: 0;
+    z-index: 9999;
+    display: flex !important;
+    height: 10mm;
+    align-items: center;
+    justify-content: center;
+    border-top: 1px solid #ccc;
+    background: #fff;
+    color: #000 !important;
+    font-size: 8pt;
+  }
+
+  .print-page-number::after {
+    content: counter(page);
+  }
+}

codex
已完成。Print 规则：CityPage 打印隐藏 header/footer/scroll/nav/右图/map/buttons，黑字，链接附 URL，卡片 #ccc 边框无 shadow，article avoid break，固定页脚，打印前临时 EN。改：CityPage、globals.css、layout/nav/map、4 个 pillar 组件。`tsc`、`build` 均 0 error。
diff --git a/v2/src/components/city/CityNav.tsx b/v2/src/components/city/CityNav.tsx
index b9beea6962d3ea48583e95d7e3ada261c78f98e3..41c9bc74a5260bace6a1d68c19f0b5326c3d4170
--- a/v2/src/components/city/CityNav.tsx
+++ b/v2/src/components/city/CityNav.tsx
@@ -44,7 +44,7 @@
   return (
     <nav
       aria-label={isZh ? "城市页导航" : "City page navigation"}
-      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
+      className="city-nav sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
     >
       <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
         {CITY_NAV_ITEMS.map((item) => {
diff --git a/v2/src/components/common/ScrollToTop.tsx b/v2/src/components/common/ScrollToTop.tsx
index 6d764df5dede4cc43887acedcc1abae5d304b482..4791c671ca950e820e378adf2984db88fc3f5da0
--- a/v2/src/components/common/ScrollToTop.tsx
+++ b/v2/src/components/common/ScrollToTop.tsx
@@ -20,7 +20,7 @@
       type="button"
       aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
       onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
-      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
+      className="scroll-to-top fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
     >
       <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
         <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
diff --git a/v2/src/components/layout/SiteFooter.tsx b/v2/src/components/layout/SiteFooter.tsx
index 48c5ca3a92617e7174e8c508b3d362d352ad5157..59360e330cd49ef1d7bcd549dc4293dbb7f4130a
--- a/v2/src/components/layout/SiteFooter.tsx
+++ b/v2/src/components/layout/SiteFooter.tsx
@@ -5,7 +5,7 @@
   const { t, lang } = useLang();
   const isZh = lang === "zh";
   return (
-    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
+    <footer className="site-footer mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
       <p>{t("footerNote")}</p>
       <div className="flex items-center gap-4">
         <Link to="/sources" className="hover:text-jade">
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba..ca764bdf57bd2a365de34c3fa1795ae9d9f2cdf0
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -9,12 +9,12 @@
   const isZh = lang === "zh";
 
   return (
-    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
-      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
         <button
           type="button"
           aria-label={isZh ? "打开全站搜索" : "Open site search"}
diff --git a/v2/src/components/map/HeroMap.tsx b/v2/src/components/map/HeroMap.tsx
index 870a1ff5ebd3331bec22aa5f826a9a3ea479cf92..a55aa13b4a092117857b7d69a093b2552032fecf
--- a/v2/src/components/map/HeroMap.tsx
+++ b/v2/src/components/map/HeroMap.tsx
@@ -26,9 +26,10 @@
   }, [focused, reset]);
 
   return (
-    <section
-      aria-label="China interactive map"
-      data-selected-province={selectedProvinceId ?? undefined}
+    <section
+      aria-label="China interactive map"
+      data-print-map="true"
+      data-selected-province={selectedProvinceId ?? undefined}
       data-province-present={province ? "true" : "false"}
       data-3d-enabled={is3DEnabled ? "true" : "false"}
       className="flex min-w-0 flex-col gap-2"
diff --git a/v2/src/components/map/Map3D.tsx b/v2/src/components/map/Map3D.tsx
index 83fd041e29496a2cbdec5a256645075881e67de1..eeba939297802f5beca92969293dd34e8d66cd94
--- a/v2/src/components/map/Map3D.tsx
+++ b/v2/src/components/map/Map3D.tsx
@@ -456,7 +456,7 @@
   }, [lang, provinceId, selectedProvince, token]);
 
   return (
-    <div className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
+    <div data-print-map="true" className="relative h-full min-h-[360px] w-full overflow-hidden bg-[#071512]">
       <div ref={containerRef} className="absolute inset-0" />
 
       {loadState === "loading" && (
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 9a43cf53f59f0c057456836db02cccc440b91e29..f3dc7bf26bcbaf463aaf78d3bd6cfc7026ca3f77
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -11,7 +11,7 @@
 
   if (error) {
     return (
-      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+      <div data-print-map="true" className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
         {lang === "zh"
           ? "地图轮廓加载失败，刷新重试。"
           : "Map outline failed to load. Refresh to retry."}
@@ -20,12 +20,13 @@
   }
 
   if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
+    return <div data-print-map="true" className="h-full w-full bg-white/70" />;
   }
 
   return (
-    <svg
-      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
+    <svg
+      data-print-map="true"
+      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
       preserveAspectRatio="xMidYMid meet"
       className="h-full w-full"
       aria-hidden
diff --git a/v2/src/components/map/Province3DOverlay.tsx b/v2/src/components/map/Province3DOverlay.tsx
index 28a734334bb621bcd201e225d354a07f1d71eae0..2360f1bfa8c05ee5cd601d0877ae58ae4508facd
--- a/v2/src/components/map/Province3DOverlay.tsx
+++ b/v2/src/components/map/Province3DOverlay.tsx
@@ -14,8 +14,9 @@
   if (!isDesktop || !selectedProvinceId || !province || !is3DEnabled) return null;
 
   return (
-    <section
-      data-province-3d-overlay="true"
+    <section
+      data-print-map="true"
+      data-province-3d-overlay="true"
       className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-lg border border-line bg-[#edf2ef]/98 shadow-2xl backdrop-blur-sm"
     >
       <header className="flex items-center justify-between gap-2 border-b border-line bg-white/90 px-3 py-3 sm:gap-3 sm:px-4">
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index f748c2febbf362daef8862d4d295e77ba4a3d66c..7d6fefe7b27c0c78508474f388b7c13be54c2ec1
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,10 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "emergency"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 76f0cc5cafc587be0faa7af535c9b49a4d461fac..11b6799c335c2be2f76593f49578c4fe6306f64b
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,10 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "food"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index 1fc16b48c4a782a53a6618ff651f1c3a244e2467..7abd1cfbf4959e14bafdc786907b7d09ed135a74
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,10 @@
     : cityPaymentNotes;
 
   return (
-    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "payments"}
+      className={`flex flex-col gap-4${cityScoped ? " print-city-scoped" : ""}`}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index df2bbecd59cca92410307c6729092961df5ccf2f..a1bfed4f01686ffa687762cde50154bc4641d2e7
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,10 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
+    <section
+      id={cityScoped ? undefined : "transport"}
+      className={clsx("flex flex-col gap-4", cityScoped && "print-city-scoped")}
+    >
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/pages/CityPage.tsx b/v2/src/pages/CityPage.tsx
index ddcc4bb24b1f30c179e6234bd47d8a412f38e1f1..25693d8764ba8e60b39b5cff7aca9536845d462c
--- a/v2/src/pages/CityPage.tsx
+++ b/v2/src/pages/CityPage.tsx
@@ -1,3 +1,5 @@
+import { useEffect, useRef } from "react";
+import { flushSync } from "react-dom";
 import { Link, useParams } from "react-router";
 import { attractionsByCity } from "../data/city-attractions";
 import { CITY_LABELS, type CityId } from "../data/transport";
@@ -74,9 +76,37 @@
 
 export default function CityPage() {
   const { cityId } = useParams<{ cityId: string }>();
-  const { lang } = useLang();
+  const { lang, setLang } = useLang();
   const isZh = lang === "zh";
+  const printLanguageRef = useRef<typeof lang | null>(null);
+
+  useEffect(() => {
+    document.body.classList.add("city-page-route");
+    return () => document.body.classList.remove("city-page-route");
+  }, []);
 
+  useEffect(() => {
+    const prepareEnglishPrint = () => {
+      if (lang === "en" || printLanguageRef.current) return;
+      printLanguageRef.current = lang;
+      flushSync(() => setLang("en"));
+    };
+
+    const restorePrintLanguage = () => {
+      const previousLang = printLanguageRef.current;
+      if (!previousLang) return;
+      printLanguageRef.current = null;
+      setLang(previousLang);
+    };
+
+    window.addEventListener("beforeprint", prepareEnglishPrint);
+    window.addEventListener("afterprint", restorePrintLanguage);
+    return () => {
+      window.removeEventListener("beforeprint", prepareEnglishPrint);
+      window.removeEventListener("afterprint", restorePrintLanguage);
+    };
+  }, [lang, setLang]);
+
   if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
     return (
       <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
@@ -90,7 +120,19 @@
   const label = CITY_LABELS[id];
   const cityJsonLd = cityStructuredData(id);
   const cityBreadcrumbJsonLd = cityBreadcrumbStructuredData(id);
+  const cityUrl = absoluteUrl(`/city/${id}`);
+
+  const handlePrint = () => {
+    if (typeof window === "undefined") return;
 
+    if (lang !== "en" && !printLanguageRef.current) {
+      printLanguageRef.current = lang;
+      flushSync(() => setLang("en"));
+    }
+
+    window.print();
+  };
+
   return (
     <>
       <script
@@ -101,13 +143,22 @@
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: stringifyJsonLd(cityBreadcrumbJsonLd) }}
       />
-      <main id="top" className="mx-auto max-w-7xl px-4 py-10">
-      <header className="mb-6 flex flex-col gap-2">
+      <main id="top" className="city-page mx-auto max-w-7xl px-4 py-10">
+      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
+        <div className="flex min-w-0 flex-col gap-2">
         <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
           {isZh ? "← 全部城市" : "← All cities"}
         </Link>
         <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
         <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
+        </div>
+        <button
+          type="button"
+          onClick={handlePrint}
+          className="print-this-page self-start rounded-full border border-line bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition hover:border-jade hover:text-jade"
+        >
+          Print this page
+        </button>
       </header>
 
       <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
@@ -146,6 +197,10 @@
         <CityImagePanel cityId={id} />
       </div>
       </main>
+      <div className="print-page-footer" aria-hidden="true">
+        <span>Travel China - {cityUrl} - Page&nbsp;</span>
+        <span className="print-page-number" />
+      </div>
     </>
   );
 }
diff --git a/v2/src/styles/globals.css b/v2/src/styles/globals.css
index 78006bee9aa82900bac7b5dcc59cc90b968bd841..445e7e0ae2256bf0a11dcdf1fd3a712d5bf7ed47
--- a/v2/src/styles/globals.css
+++ b/v2/src/styles/globals.css
@@ -104,8 +104,146 @@
   transform-origin: center;
 }
 
-@media (min-width: 640px) {
-  .china-map-surface > div:first-child {
-    transform: none;
-  }
-}
+@media (min-width: 640px) {
+  .china-map-surface > div:first-child {
+    transform: none;
+  }
+}
+
+.print-page-footer {
+  display: none;
+}
+
+@media print {
+  @page {
+    margin: 14mm 12mm 18mm;
+  }
+
+  html,
+  body {
+    background: #fff !important;
+  }
+
+  body.city-page-route,
+  body:has(.city-page) {
+    background: #fff !important;
+    color: #000 !important;
+  }
+
+  body.city-page-route *,
+  body:has(.city-page) * {
+    color: #000 !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+    -webkit-print-color-adjust: exact;
+    print-color-adjust: exact;
+  }
+
+  body.city-page-route .site-header,
+  body.city-page-route .site-footer,
+  body.city-page-route .scroll-to-top,
+  body.city-page-route .city-nav,
+  body.city-page-route .city-page > .grid > aside,
+  body.city-page-route [data-print-map="true"],
+  body.city-page-route [data-province-3d-overlay="true"],
+  body.city-page-route .china-map-surface,
+  body:has(.city-page) .site-header,
+  body:has(.city-page) .site-footer,
+  body:has(.city-page) .scroll-to-top,
+  body:has(.city-page) .city-nav,
+  body:has(.city-page) .city-page > .grid > aside,
+  body:has(.city-page) [data-print-map="true"],
+  body:has(.city-page) [data-province-3d-overlay="true"],
+  body:has(.city-page) .china-map-surface {
+    display: none !important;
+  }
+
+  .city-page {
+    max-width: none !important;
+    width: 100% !important;
+    margin: 0 !important;
+    padding: 0 0 16mm !important;
+  }
+
+  .city-page > .grid {
+    display: block !important;
+  }
+
+  .city-page button,
+  .city-page .print-this-page {
+    display: none !important;
+  }
+
+  .city-page a[href] {
+    text-decoration: underline;
+    text-underline-offset: 2px;
+  }
+
+  .city-page a[href^="http"]::after {
+    content: " (" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="/"]::after {
+    content: " (https://travel-china.example.com" attr(href) ")";
+    font-size: 8pt;
+    font-weight: 400;
+    overflow-wrap: anywhere;
+  }
+
+  .city-page a[href^="#"]::after,
+  .city-page a[href^="mailto:"]::after,
+  .city-page a[href^="tel:"]::after {
+    content: "";
+  }
+
+  .city-page :is(article, section, li, pre)[class*="border"],
+  .city-page :is(div)[class*="rounded"][class*="border"] {
+    border: 1px solid #ccc !important;
+    background: #fff !important;
+    box-shadow: none !important;
+  }
+
+  .city-page :is(article, section, li, pre),
+  .city-page .print-city-scoped > * {
+    break-inside: avoid;
+    page-break-inside: avoid;
+  }
+
+  .city-page .print-city-scoped,
+  .city-page .print-city-scoped * {
+    background: #fff !important;
+    box-shadow: none !important;
+    text-shadow: none !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="bg-amber"], [class*="bg-yellow"], [class*="bg-jade"], [class*="bg-paper"], [class*="shadow"], [class*="backdrop"]) {
+    background: #fff !important;
+  }
+
+  .city-page .print-city-scoped :is([class*="rounded"], [class*="border"]) {
+    border-color: #ccc !important;
+  }
+
+  .print-page-footer {
+    position: fixed;
+    right: 0;
+    bottom: 0;
+    left: 0;
+    z-index: 9999;
+    display: flex !important;
+    height: 10mm;
+    align-items: center;
+    justify-content: center;
+    border-top: 1px solid #ccc;
+    background: #fff;
+    color: #000 !important;
+    font-size: 8pt;
+  }
+
+  .print-page-number::after {
+    content: counter(page);
+  }
+}

tokens used
132,111

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
