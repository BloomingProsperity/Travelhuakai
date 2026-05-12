# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-12T03:44:03.005Z

## Original task

在 v2/ workdir 真的 edit + build。

新功能：Currency Converter 货币换算工具

要求：
1. 新建 v2/src/components/tools/CurrencyConverter.tsx —— 客户端组件，输入金额，选择源币种 USD / EUR / JPY / GBP / KRW / AUD / CAD / HKD，目标恒为 CNY。
2. 汇率用一份静态 baseline + 提示用户'rates updated periodically; verify at bank before transactions'。建一个 v2/src/data/exchange-rates.ts 文件，存今日（2026-05-12）的 mid-market rate（用合理近似，比如 USD 7.23 / EUR 7.85 / JPY 0.047 / 等），含 lastUpdated 字段。同时附一段双语免责：'For reference only. Banks and ATMs use their own rates with a 1-3% spread.'
3. UI：双语标题 'Currency converter / 货币换算'、数字输入框、币种 select、result 大字显示 = 输入金额 × 汇率，CNY 符号；下面小字说 '1 USD ≈ 7.23 CNY (mid-market)'。
4. 集成到 GuidePage 的 'payments' topic 顶部，作为 PaymentsChecklist 之前的子组件
5. 不要新建路由，直接嵌入 /guide/payments

完成后 npx tsc --noEmit + npm run build 0 error。

报告 250 字以内：文件、币种数、build 状态。

## Final prompt

在 v2/ workdir 真的 edit + build。

新功能：Currency Converter 货币换算工具

要求：
1. 新建 v2/src/components/tools/CurrencyConverter.tsx —— 客户端组件，输入金额，选择源币种 USD / EUR / JPY / GBP / KRW / AUD / CAD / HKD，目标恒为 CNY。
2. 汇率用一份静态 baseline + 提示用户'rates updated periodically; verify at bank before transactions'。建一个 v2/src/data/exchange-rates.ts 文件，存今日（2026-05-12）的 mid-market rate（用合理近似，比如 USD 7.23 / EUR 7.85 / JPY 0.047 / 等），含 lastUpdated 字段。同时附一段双语免责：'For reference only. Banks and ATMs use their own rates with a 1-3% spread.'
3. UI：双语标题 'Currency converter / 货币换算'、数字输入框、币种 select、result 大字显示 = 输入金额 × 汇率，CNY 符号；下面小字说 '1 USD ≈ 7.23 CNY (mid-market)'。
4. 集成到 GuidePage 的 'payments' topic 顶部，作为 PaymentsChecklist 之前的子组件
5. 不要新建路由，直接嵌入 /guide/payments

完成后 npx tsc --noEmit + npm run build 0 error。

报告 250 字以内：文件、币种数、build 状态。

## Raw output

```text
SUCCESS: The process with PID 610588 (child process of PID 608060) has been terminated.
SUCCESS: The process with PID 608060 (child process of PID 612472) has been terminated.
SUCCESS: The process with PID 612472 (child process of PID 612636) has been terminated.
SUCCESS: The process with PID 612636 (child process of PID 613572) has been terminated.
SUCCESS: The process with PID 604732 (child process of PID 608216) has been terminated.
SUCCESS: The process with PID 608216 (child process of PID 612700) has been terminated.
SUCCESS: The process with PID 612700 (child process of PID 608940) has been terminated.
SUCCESS: The process with PID 608940 (child process of PID 613572) has been terminated.
已完成。

文件：`v2/src/data/exchange-rates.ts`、`v2/src/components/tools/CurrencyConverter.tsx`、`v2/src/pages/GuidePage.tsx`。  
币种数：8 个，USD/EUR/JPY/GBP/KRW/AUD/CAD/HKD -> CNY。  
校验：`npx tsc --noEmit` 0 error；`npm run build` 0 error，`/guide/payments` prerender 成功。构建仅有 chunk size/plugin timing warnings。
SUCCESS: The process with PID 613604 (child process of PID 612876) has been terminated.
SUCCESS: The process with PID 612876 (child process of PID 606064) has been terminated.
SUCCESS: The process with PID 606064 (child process of PID 613380) has been terminated.
SUCCESS: The process with PID 613380 (child process of PID 613572) has been terminated.


OpenAI Codex v0.128.0 (research preview)
--------
workdir: c:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1a46-58d9-7fd3-b7c3-62e86c617947
--------
user
在 v2/ workdir 真的 edit + build。

新功能：Currency Converter 货币换算工具

要求：
1. 新建 v2/src/components/tools/CurrencyConverter.tsx —— 客户端组件，输入金额，选择源币种 USD / EUR / JPY / GBP / KRW / AUD / CAD / HKD，目标恒为 CNY。
2. 汇率用一份静态 baseline + 提示用户'rates updated periodically; verify at bank before transactions'。建一个 v2/src/data/exchange-rates.ts 文件，存今日（2026-05-12）的 mid-market rate（用合理近似，比如 USD 7.23 / EUR 7.85 / JPY 0.047 / 等），含 lastUpdated 字段。同时附一段双语免责：'For reference only. Banks and ATMs use their own rates with a 1-3% spread.'
3. UI：双语标题 'Currency converter / 货币换算'、数字输入框、币种 select、result 大字显示 = 输入金额 × 汇率，CNY 符号；下面小字说 '1 USD ≈ 7.23 CNY (mid-market)'。
4. 集成到 GuidePage 的 'payments' topic 顶部，作为 PaymentsChecklist 之前的子组件
5. 不要新建路由，直接嵌入 /guide/payments

完成后 npx tsc --noEmit + npm run build 0 error。

报告 250 字以内：文件、币种数、build 状态。
codex
我会在 `v2` 里先确认项目结构和现有 Guide/Payments 组件写法，然后按现有模式加组件、数据文件并跑类型检查和构建。React 组件改动会遵循 `react-best-practices` 技能。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg --files' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Force' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'C:\\Users\\h\\.codex\\plugins\\cache\\openai-curated\\build-web-apps\\63976030\\skills\\react-best-practices\\SKILL.md' -TotalCount 220" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Force' in c:\Users\h\Documents\New project 2
 succeeded in 837ms:
vite.config.ts
tsconfig.node.json
tsconfig.json
tsconfig.app.json
STYLE_GUIDE.md
src\App.tsx
index.html
eslint.config.js
package-lock.json
package.json
README.md
react-router.config.ts
src\root.tsx
src\styles\globals.css
src\routes.ts
src\main.tsx
public\sitemap.xml
public\robots.txt
public\favicon.svg
research\china-platforms-01-video.md
research\blog-platform-bureau-sweep.md
research\alipay-wechat-foreigner-registration.md
research\china-platforms-04-legal.md
research\china-platforms-03-ugc.md
research\china-platforms-02-maps-reviews.md
research\city-beijing-deep.md
research\city-guangzhou-deep.md
research\city-shanghai-deep.md
scripts\restart-dev.mjs
scripts\interaction-check.mjs
research\evaluation-04-rewrites-applied.md
research\evaluation-04-en-machine-feel.md
research\evaluation-03-home-vs-competitors.md
research\evaluation-02-seo-paid.md
research\evaluation-01-acceptance.md
research\city-shenzhen-deep.md
research\seo-04-multi-engine.md
research\seo-02-decompose-winners.md
research\seo-01-landscape.md
research\ugc-qa-implementation.md
research\seo-05-our-action-plan.md
research\zh-mandarin-audit.md
public\assets\three.module.min.js
src\store\LanguageProvider.tsx
src\store\language.ts
src\store\AtlasProvider.tsx
src\store\atlas.ts
public\assets\china-province-shapes.json
public\assets\china-map-gs2022-4309.jpg
public\assets\earth-bluemarble.jpg
src\services\notes.ts
src\pages\AskPage.tsx
src\lib\unsplash.ts
src\pages\HomePage.tsx
src\pages\CityPage.tsx
src\lib\shapes.ts
src\lib\search.ts
src\lib\jsonLd.ts
src\lib\i18n.ts
src\lib\format.ts
src\lib\cityRoutes.ts
src\pages\GuidePage.tsx
src\pages\SharePage.tsx
src\pages\PlanPage.tsx
src\pages\SourcesPage.tsx
src\pages\PhrasebookPage.tsx
src\pages\MapPage.tsx
src\hooks\useProvinceShapes.ts
src\hooks\useIsDesktop.ts
src\hooks\useCityViews.ts
src\data\atlas.ts
src\data\city-attractions.ts
src\data\types.ts
src\data\transport.ts
src\data\top-questions.ts
src\data\sources.ts
src\data\practical-payments.ts
src\data\practical-other.ts
src\data\phrasebook.ts
src\data\phase2-preview.ts
src\data\payments.ts
src\data\map-sources.ts
src\data\itineraries.ts
src\data\i18n.ts
src\data\food.ts
src\data\entry-policies.ts
src\data\emergency.ts
src\data\city-tourism-portals.ts
src\data\city-seasons.ts
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
public\assets\province-map-textures\liaoning.png
public\assets\province-map-textures\jilin.png
public\assets\province-map-textures\jiangxi.png
public\assets\province-map-textures\jiangsu.png
public\assets\province-map-textures\inner-mongolia.png
public\assets\province-map-textures\hunan.png
public\assets\province-map-textures\hubei.png
public\assets\province-map-textures\hong-kong.png
public\assets\province-map-textures\shaanxi.png
public\assets\province-map-textures\qinghai.png
public\assets\province-map-textures\ningxia.png
public\assets\province-map-textures\macau.png
public\assets\province-map-textures\shanxi.png
public\assets\province-map-textures\shanghai.png
public\assets\province-map-textures\shandong.png
public\assets\province-map-textures\sichuan.png
public\assets\province-map-textures\taiwan.png
public\assets\province-map-textures\zhejiang.png
public\assets\province-map-textures\yunnan.png
public\assets\province-map-textures\xinjiang.png
public\assets\province-map-textures\tibet.png
public\assets\province-map-textures\tianjin.png
src\components\common\SourcesNote.tsx
src\components\common\ScrollToTop.tsx
src\components\common\PracticalBlock.tsx
src\components\common\MapErrorBoundary.tsx
src\components\common\CityFurtherReading.tsx
src\components\pillar\VisaChecker.tsx
src\components\policy\TravelAlerts.tsx
src\components\pillar\PaymentsChecklist.tsx
src\components\pillar\TransportGuide.tsx
src\components\pillar\FoodGuide.tsx
src\components\pillar\PaymentsPractical.tsx
src\components\pillar\EmergencyBriefing.tsx
src\components\sections\TopQuestions.tsx
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
src\components\layout\LanguageSwitch.tsx
src\components\layout\SiteFooter.tsx
src\components\layout\SiteHeader.tsx
src\components\city\CuisineDrawer.tsx
src\components\city\CitySeasonBlock.tsx
src\components\city\CityNav.tsx
src\components\city\CityIntro.tsx
src\components\city\CityImagePanel.tsx

 succeeded in 870ms:
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

 succeeded in 915ms:


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



 succeeded in 888ms:


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



codex
我看到这是 Vite/React Router 项目，现有支付内容在 `src/components/pillar`，但用户要求的新工具路径在 `src/components/tools`。接下来我会读 GuidePage 和支付组件的布局，保证嵌入点和样式一致。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\pages\\GuidePage.tsx" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\components\\pillar\\PaymentsChecklist.tsx" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\components\\pillar\\PaymentsPractical.tsx" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path package.json' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\data\\payments.ts" in c:\Users\h\Documents\New project 2\v2
 succeeded in 1259ms:
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

 succeeded in 1290ms:
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

 succeeded in 1299ms:
import clsx from "clsx";
import { practicalPayments, type PracticalGotcha, type PracticalGotchaPhase } from "../../data/practical-payments";
import { useLang } from "../../store/language";

const PHASE_LABEL: Record<PracticalGotchaPhase, { en: string; zh: string }> = {
  "before-fly": { en: "Before you fly", zh: "鍑哄彂鍓? },
  setup: { en: "Account setup & KYC", zh: "瀹炲悕 / 缁戝崱闃舵" },
  "day-one": { en: "Day 1 paying", zh: "钀藉湴绗竴澶╀粯娆? },
  "post-trip": { en: "After your trip", zh: "鍥炲浗涔嬪悗" }
};

const PHASE_ORDER: PracticalGotchaPhase[] = ["before-fly", "setup", "day-one", "post-trip"];

const APP_LABEL = {
  alipay: { en: "Alipay", zh: "鏀粯瀹?, style: "bg-blue-100 text-blue-900" },
  wechat: { en: "WeChat", zh: "寰俊", style: "bg-emerald-100 text-emerald-900" },
  both: { en: "Both", zh: "涓や釜 App", style: "bg-amber-100 text-amber-900" }
} as const;

export default function PaymentsPractical() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  const grouped = PHASE_ORDER.map((phase) => ({
    phase,
    items: practicalPayments.filter((g) => g.phase === phase)
  }));

  return (
    <section className="flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50/40 p-5">
      <header>
        <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
          {isZh ? "瀹為檯鏀粯鎻愮ず" : "Practical pitfalls"}
        </span>
        <h3 className="text-lg font-bold">
          {isZh ? "Alipay / 寰俊澶栧崱鐢ㄦ埛甯歌闂" : "What official sources don't tell you"}
        </h3>
      </header>

      <div className="grid gap-3">
        {grouped.map(({ phase, items }) => (
          <PhaseGroup key={phase} phase={phase} items={items} isZh={isZh} />
        ))}
      </div>
    </section>
  );
}

function PhaseGroup({ phase, items, isZh }: { phase: PracticalGotchaPhase; items: PracticalGotcha[]; isZh: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-xs font-bold uppercase tracking-widest text-muted">
        {isZh ? PHASE_LABEL[phase].zh : PHASE_LABEL[phase].en}
      </h4>
      <ul className="grid gap-2 md:grid-cols-2">
        {items.map((g) => (
          <li key={g.id} className="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3">
            <div className="flex items-center gap-2">
              <span className={clsx("rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", APP_LABEL[g.app].style)}>
                {isZh ? APP_LABEL[g.app].zh : APP_LABEL[g.app].en}
              </span>
              <strong className="text-sm leading-tight">
                {isZh ? g.titleZh : g.titleEn}
              </strong>
            </div>
            <p className="text-xs leading-relaxed text-ink/80">
              {isZh ? g.bodyZh : g.bodyEn}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

 succeeded in 1324ms:
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

 succeeded in 1349ms:
import type { CityId } from "./transport";

export type PaymentLimit = {
  perTransactionUSD: number;
  annualCumulativeUSD: number;
  sourceId: string;
};

export const platformLimits: Record<"alipay" | "wechat", PaymentLimit> = {
  alipay: {
    perTransactionUSD: 5000,
    annualCumulativeUSD: 50000,
    sourceId: "pboc-payment-uplift"
  },
  wechat: {
    perTransactionUSD: 5000,
    annualCumulativeUSD: 50000,
    sourceId: "pboc-payment-uplift"
  }
};

export const atmRule = {
  bank: "Bank of China",
  perWithdrawalCNY: 3000,
  acceptedNetworks: ["Visa", "Mastercard", "JCB", "American Express", "UnionPay"],
  sourceId: "boc-atm-en"
} as const;

export const customsRules = [
  {
    id: "rmb-cash",
    titleEn: "RMB cash carry limit",
    titleZh: "鎼哄甫浜烘皯甯佺幇閲戜笂闄?,
    bodyEn: "Carry up to 楼20,000 RMB in cash when crossing the border. Any amount above that must go through a bank 鈥?you can't carry it in person.",
    bodyZh: "鍑哄叆澧冩梾瀹㈠崟娆℃渶澶氬彲鎼哄甫 20,000 鍏冧汉姘戝竵鐜伴噾锛涜秴鍑洪儴鍒嗛』閫氳繃閾惰娓犻亾姹囧厬銆?,
    sourceId: "customs-clearance-guide"
  },
  {
    id: "foreign-cash",
    titleEn: "Foreign currency declaration",
    titleZh: "澶栧竵鐢虫姤闃堝€?,
    bodyEn: "Declare any foreign cash above the USD 5,000 equivalent when you land 鈥?customs gives you a paper form at the arrivals desk. Leave it undeclared and the excess can be confiscated.",
    bodyZh: "鎼哄甫澶栧竵鐜伴噾瓒呰繃 5,000 缇庡厓绛夊€兼椂蹇呴』鍦ㄥ叆澧冩椂涔﹂潰鐢虫姤锛屾湭鐢虫姤鍙娌℃敹銆?,
    sourceId: "customs-clearance-guide"
  },
  {
    id: "personal-goods",
    titleEn: "Personal-use goods (non-resident)",
    titleZh: "闅忚韩鐗╁搧锛堥潪灞呮皯锛?,
    bodyEn: "Personal-use items you're bringing for yourself clear customs duty-free. If you're carrying goods worth more than 楼2,000 that aren't for your own use, declare them at the red channel and pay the assessed duty.",
    bodyZh: "鍚堢悊鑷敤鐗╁搧鍏嶇◣锛涢潪鑷敤銆佹€诲€艰秴 2,000 鍏冪殑鐗╁搧椤绘姤鍏冲苟鎸夎瀹氱撼绋庛€?,
    sourceId: "customs-clearance-guide"
  },
  {
    id: "duty-free-allowance",
    titleEn: "Duty-free allowance",
    titleZh: "鍏嶇◣棰濆害",
    bodyEn: "Tobacco: 400 cigarettes (foreign passenger). Alcohol: 1.5 L (18+ only).",
    bodyZh: "鐑熻崏锛氬绫嶆梾瀹?400 鏀鐑燂紱閰掔被锛?.5 鍗囷紙18 宀佷互涓婏級銆?,
    sourceId: "customs-clearance-guide"
  }
] as const;

export type PreArrivalStep = {
  id: string;
  titleEn: string;
  titleZh: string;
  bodyEn: string;
  bodyZh: string;
  sourceId: string;
};

export const preArrivalChecklist: PreArrivalStep[] = [
  {
    id: "bind-alipay",
    titleEn: "Set up Alipay or WeChat Pay before departure",
    titleZh: "鍑哄彂鍓嶅湪 Alipay 鎴栧井淇℃敮浠樼粦瀹氬鍗?,
    bodyEn: "Both platforms accept Visa and Mastercard binding for foreign passport users. Per-transaction USD 5,000 / annual USD 50,000 (PBOC, 2024-04).",
    bodyZh: "涓や釜骞冲彴鍧囨敮鎸佸绫嶆姢鐓х敤鎴风粦瀹?Visa/Mastercard銆傚崟绗?5,000 缇庡厓銆佸勾绱?50,000 缇庡厓锛堝ぎ琛?2024-04 璧凤級銆?,
    sourceId: "pboc-payment-uplift"
  },
  {
    id: "carry-cash",
    titleEn: "Bring backup cash, declare if > USD 5,000",
    titleZh: "澶囧皯閲忕幇閲戯紱瓒呰繃 5,000 缇庡厓绛夊€奸渶鐢虫姤",
    bodyEn: "RMB carry cap 楼20,000. Declare any foreign cash above USD 5,000 equivalent on the arrival form.",
    bodyZh: "浜烘皯甯佺幇閲戜笂闄?楼20,000锛涘甯佺幇閲戣秴 5,000 缇庡厓绛夊€煎繀椤诲～鐢虫姤鍗曘€?,
    sourceId: "customs-clearance-guide"
  },
  {
    id: "atm-strategy",
    titleEn: "Bank of China ATMs are the most reliable for foreign cards",
    titleZh: "涓浗閾惰 ATM 鎺ュ彈澶栧崱鏈€鍙潬",
    bodyEn: "BOC ATMs accept all five major networks; CNY 3,000 per withdrawal. Issuer's own daily/weekly limits also apply.",
    bodyZh: "涓 ATM 鎺ュ彈 5 澶у崱缁勭粐澶栧崱锛涘崟绗斾笂闄?楼3,000锛屽彂鍗¤鑷湁鏃?鍛ㄩ檺棰濆彟绠椼€?,
    sourceId: "boc-atm-en"
  },
  {
    id: "card-fallback",
    titleEn: "POS coverage is broadest at airports and major hotels",
    titleZh: "澶栧崱 POS 瑕嗙洊鏈€楂樼殑鏄満鍦轰笌楂樻槦閰掑簵",
    bodyEn: "Outside those, small merchants tend to be Alipay/WeChat-only or cash. Don't rely on Visa swipe in mom-and-pop shops.",
    bodyZh: "鏈哄満鍜岄珮鏄熼厭搴楀鍗?POS 瑕嗙洊鏈€濂斤紱灏忓瀷鍟嗘埛澶氫娇鐢ㄦ敮浠樺疂/寰俊鎴栫幇閲戯紝涓嶈渚濊禆澶栧崱鍒峰崱銆?,
    sourceId: "pboc-payment-uplift"
  }
];

export type CityPaymentNote = {
  cityId: CityId;
  cityEn: string;
  cityZh: string;
  bullets: Array<{ en: string; zh: string; sourceId: string }>;
};

export const cityPaymentNotes: CityPaymentNote[] = [
  {
    cityId: "beijing",
    cityEn: "Beijing",
    cityZh: "鍖椾含",
    bullets: [
      {
        en: "Subway tap-to-ride: all 5 networks (Visa, Mastercard, UnionPay, JCB, Amex) on every line; effective 2025-06-15.",
        zh: "鍦伴搧鍏ㄧ綉鍒峰崱锛? 澶у崱缁勭粐锛圴isa/MC/閾惰仈/JCB/Amex锛夊凡鏀寔锛?025-06-15 璧枫€?,
        sourceId: "beijing-subway-five-cards"
      },
      {
        en: "Capital + Daxing airports: 24 ATMs, 7 currency desks; over 11,000 city merchants accept foreign cards.",
        zh: "棣栭兘涓庡ぇ鍏存満鍦猴細鍚堣 24 鍙板鍗?ATM銆? 澶勬崲姹囩偣锛涘叏甯?11,000+ 鍟嗘埛鏀寔澶栧崱銆?,
        sourceId: "beijing-airport-services"
      }
    ]
  },
  {
    cityId: "shanghai",
    cityEn: "Shanghai",
    cityZh: "涓婃捣",
    bullets: [
      {
        en: "Metro full network (21 lines / 517 stations) tap-to-ride; effective 2025-06-28. Cards must support ODA.",
        zh: "鍦伴搧鍏ㄧ綉锛?1 绾?/ 517 绔欙級2025-06-28 璧锋敮鎸佸鍗″埛鍗★紱瑕佹眰鍗″叿澶?ODA 绂荤嚎璁よ瘉銆?,
        sourceId: "shanghai-metro-five-cards"
      },
      {
        en: "Maglev to Pudong Airport accepts foreign cards from 2025-06-14.",
        zh: "娴︿笢鏈哄満纾佹偓娴?2025-06-14 璧锋敮鎸佸鍗″埛鍗°€?,
        sourceId: "shanghai-maglev-bank-cards"
      },
      {
        en: "Taxis since 2024-04: Dazhong + others accept Visa/MC/Amex/JCB/UnionPay/Diners.",
        zh: "鍑虹杞﹁嚜 2024-04 璧凤細澶т紬绛夋帴鍙?Visa/MC/Amex/JCB/UnionPay/Diners銆?,
        sourceId: "shanghai-public-transport"
      }
    ]
  },
  {
    cityId: "guangzhou",
    cityEn: "Guangzhou",
    cityZh: "骞垮窞",
    bullets: [
      {
        en: "Metro tap-to-ride for 5 networks city-wide; effective 2025-10-12.",
        zh: "骞垮窞鍦伴搧鍏ㄧ綉 5 鍗＄粍缁囧埛鍗★紱2025-10-12 璧枫€?,
        sourceId: "gz-metro-tap-to-ride"
      },
      {
        en: "AlipayHK works on metro/bus/tram/ferry since 2024-03-04; HKD settlement; monthly 20鈥?0% rebate.",
        zh: "AlipayHK 鑷?2024-03-04 璧峰彲鍧愬湴閾?鍏氦/鏈夎建/杞浮锛涙寜 HKD 缁撶畻锛涙湀搴?20鈥?0% 杩旂幇銆?,
        sourceId: "gz-alipayhk-transit"
      }
    ]
  },
  {
    cityId: "shenzhen",
    cityEn: "Shenzhen",
    cityZh: "娣卞湷",
    bullets: [
      {
        en: "Metro foreign-card POS at 391 service centres (440 devices); accepts 6 networks. Gate-level tap not yet universal.",
        zh: "鍦伴搧 391 涓湇鍔′腑蹇冦€?40 鍙?POS 鏀跺鍗★紙6 澶у崱缁勭粐锛夛紱闂告満鍒峰崱灏氭湭鍏ㄧ綉閾哄紑銆?,
        sourceId: "sz-metro-pos"
      },
      {
        en: "Cross-border SZ-HK single QR (Shenzhen Tong / AlipayHK / Alipay) since 2023-06-01.",
        zh: "娣辨腐璺ㄥ鍗曚竴浜岀淮鐮侊紙娣卞湷閫?/ AlipayHK / 鏀粯瀹濓級2023-06-01 璧枫€?,
        sourceId: "sz-hk-cross-border-qr"
      },
      {
        en: "Instant tax refund via AlipayHK in Shenzhen retail since 2025-09-08; up to 11% rebate in HKD.",
        zh: "娣卞湷闆跺敭鍗虫椂閫€绋庨€氳繃 AlipayHK锛?025-09-08 璧凤紝鏈€楂?11% HKD 杩旂幇銆?,
        sourceId: "sz-tax-refund-alipayhk"
      }
    ]
  }
];

import { practicalPaymentsSourceIds } from "./practical-payments";

export function paymentsSourceIds(cityId?: CityId): string[] {
  const ids = new Set<string>();
  ids.add(platformLimits.alipay.sourceId);
  ids.add(platformLimits.wechat.sourceId);
  ids.add(atmRule.sourceId);
  customsRules.forEach((r) => ids.add(r.sourceId));
  preArrivalChecklist.forEach((s) => ids.add(s.sourceId));
  const cities = cityId ? cityPaymentNotes.filter((c) => c.cityId === cityId) : cityPaymentNotes;
  cities.forEach((c) => c.bullets.forEach((b) => ids.add(b.sourceId)));
  practicalPaymentsSourceIds().forEach((id) => ids.add(id));
  return [...ids];
}

codex
我会新增一个独立数据模块来承载 8 个币种的 CNY baseline 和双语免责声明，再新增工具组件。GuidePage 只做最小改动：在 payments 分支把 converter 放到 `PaymentsChecklist` 前面。
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\tools\CurrencyConverter.tsx
c:\Users\h\Documents\New project 2\v2\src\data\exchange-rates.ts
c:\Users\h\Documents\New project 2\v2\src\pages\GuidePage.tsx
diff --git a/v2/src/components/tools/CurrencyConverter.tsx b/v2/src/components/tools/CurrencyConverter.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..a1ee7100e7ac3a322159f83c2088d40f3b06fe3b
--- /dev/null
+++ b/v2/src/components/tools/CurrencyConverter.tsx
@@ -0,0 +1,93 @@
+"use client";
+
+import { useMemo, useState } from "react";
+import {
+  exchangeRateBaseline,
+  sourceCurrencies,
+  type SourceCurrency
+} from "../../data/exchange-rates";
+
+const formatCny = (value: number) =>
+  `¥${value.toLocaleString("en-US", {
+    minimumFractionDigits: 2,
+    maximumFractionDigits: 2
+  })} CNY`;
+
+const formatRate = (value: number) =>
+  value.toLocaleString("en-US", {
+    minimumFractionDigits: value < 0.01 ? 4 : 2,
+    maximumFractionDigits: value < 0.01 ? 4 : 3
+  });
+
+export default function CurrencyConverter() {
+  const [amount, setAmount] = useState("100");
+  const [currency, setCurrency] = useState<SourceCurrency>("USD");
+
+  const numericAmount = Number.parseFloat(amount);
+  const rate = exchangeRateBaseline.rates[currency].rateToCny;
+  const converted = Number.isFinite(numericAmount) && numericAmount > 0 ? numericAmount * rate : 0;
+
+  const currencyOptions = useMemo(
+    () => sourceCurrencies.map((code) => exchangeRateBaseline.rates[code]),
+    []
+  );
+
+  return (
+    <section className="flex flex-col gap-4 rounded-xl border border-line bg-white p-5 shadow-sm">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          Payments tool
+        </span>
+        <h2 className="text-2xl font-bold leading-tight">Currency converter / 货币换算</h2>
+        <p className="text-sm leading-relaxed text-muted">
+          Rates updated periodically; verify at bank before transactions.
+        </p>
+      </header>
+
+      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_12rem]">
+        <label className="flex flex-col gap-1.5 text-sm font-bold">
+          Amount
+          <input
+            className="h-11 rounded-lg border border-line bg-white px-3 text-base font-semibold outline-none transition focus:border-jade focus:ring-2 focus:ring-jade/20"
+            inputMode="decimal"
+            min="0"
+            onChange={(event) => setAmount(event.target.value)}
+            placeholder="100"
+            type="number"
+            value={amount}
+          />
+        </label>
+
+        <label className="flex flex-col gap-1.5 text-sm font-bold">
+          From
+          <select
+            className="h-11 rounded-lg border border-line bg-white px-3 text-base font-semibold outline-none transition focus:border-jade focus:ring-2 focus:ring-jade/20"
+            onChange={(event) => setCurrency(event.target.value as SourceCurrency)}
+            value={currency}
+          >
+            {currencyOptions.map((option) => (
+              <option key={option.code} value={option.code}>
+                {option.code}
+              </option>
+            ))}
+          </select>
+        </label>
+      </div>
+
+      <div className="flex flex-col gap-1 rounded-lg bg-cream p-4">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          Result to CNY
+        </span>
+        <strong className="text-3xl leading-tight sm:text-4xl">{formatCny(converted)}</strong>
+        <span className="text-xs leading-relaxed text-muted">
+          1 {currency} ≈ {formatRate(rate)} CNY (mid-market). Last updated{" "}
+          {exchangeRateBaseline.lastUpdated}.
+        </span>
+      </div>
+
+      <p className="text-xs leading-relaxed text-muted">
+        {exchangeRateBaseline.disclaimer.en} {exchangeRateBaseline.disclaimer.zh}
+      </p>
+    </section>
+  );
+}
diff --git a/v2/src/data/exchange-rates.ts b/v2/src/data/exchange-rates.ts
new file mode 100644
index 0000000000000000000000000000000000000000..a73d68e8ce099a699ce7bc7c2af618d0feb33cb9
--- /dev/null
+++ b/v2/src/data/exchange-rates.ts
@@ -0,0 +1,34 @@
+export const sourceCurrencies = ["USD", "EUR", "JPY", "GBP", "KRW", "AUD", "CAD", "HKD"] as const;
+
+export type SourceCurrency = (typeof sourceCurrencies)[number];
+
+export type ExchangeRate = {
+  code: SourceCurrency;
+  name: string;
+  rateToCny: number;
+};
+
+export const exchangeRateBaseline = {
+  lastUpdated: "2026-05-12",
+  rates: {
+    USD: { code: "USD", name: "US dollar", rateToCny: 7.23 },
+    EUR: { code: "EUR", name: "Euro", rateToCny: 7.85 },
+    JPY: { code: "JPY", name: "Japanese yen", rateToCny: 0.047 },
+    GBP: { code: "GBP", name: "British pound", rateToCny: 9.25 },
+    KRW: { code: "KRW", name: "South Korean won", rateToCny: 0.0052 },
+    AUD: { code: "AUD", name: "Australian dollar", rateToCny: 4.72 },
+    CAD: { code: "CAD", name: "Canadian dollar", rateToCny: 5.21 },
+    HKD: { code: "HKD", name: "Hong Kong dollar", rateToCny: 0.93 }
+  },
+  disclaimer: {
+    en: "For reference only. Banks and ATMs use their own rates with a 1-3% spread.",
+    zh: "仅供参考。银行和 ATM 使用自己的汇率，并通常包含 1-3% 点差。"
+  }
+} as const satisfies {
+  lastUpdated: string;
+  rates: Record<SourceCurrency, ExchangeRate>;
+  disclaimer: {
+    en: string;
+    zh: string;
+  };
+};
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index 430f30ed97efe14c8d130c339b183736966f6062..31f959941c971fc74880cf2bb08fb3ae76411082
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -1,7 +1,8 @@
 import { Link, useParams } from "react-router";
-import TravelAlerts from "../components/policy/TravelAlerts";
-import VisaChecker from "../components/pillar/VisaChecker";
-import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
+import TravelAlerts from "../components/policy/TravelAlerts";
+import VisaChecker from "../components/pillar/VisaChecker";
+import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
+import CurrencyConverter from "../components/tools/CurrencyConverter";
 import TopQuestions from "../components/sections/TopQuestions";
 import SourcesNote from "../components/common/SourcesNote";
 import { topQuestions } from "../data/top-questions";
@@ -103,7 +104,12 @@
       </header>
 
       {current === "entry" && <VisaChecker />}
-      {current === "payments" && <PaymentsChecklist />}
+      {current === "payments" && (
+        <>
+          <CurrencyConverter />
+          <PaymentsChecklist />
+        </>
+      )}
       {current === "notes" && (
         <>
           <TravelAlerts />

diff --git a/v2/src/components/tools/CurrencyConverter.tsx b/v2/src/components/tools/CurrencyConverter.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..a1ee7100e7ac3a322159f83c2088d40f3b06fe3b
--- /dev/null
+++ b/v2/src/components/tools/CurrencyConverter.tsx
@@ -0,0 +1,93 @@
+"use client";
+
+import { useMemo, useState } from "react";
+import {
+  exchangeRateBaseline,
+  sourceCurrencies,
+  type SourceCurrency
+} from "../../data/exchange-rates";
+
+const formatCny = (value: number) =>
+  `¥${value.toLocaleString("en-US", {
+    minimumFractionDigits: 2,
+    maximumFractionDigits: 2
+  })} CNY`;
+
+const formatRate = (value: number) =>
+  value.toLocaleString("en-US", {
+    minimumFractionDigits: value < 0.01 ? 4 : 2,
+    maximumFractionDigits: value < 0.01 ? 4 : 3
+  });
+
+export default function CurrencyConverter() {
+  const [amount, setAmount] = useState("100");
+  const [currency, setCurrency] = useState<SourceCurrency>("USD");
+
+  const numericAmount = Number.parseFloat(amount);
+  const rate = exchangeRateBaseline.rates[currency].rateToCny;
+  const converted = Number.isFinite(numericAmount) && numericAmount > 0 ? numericAmount * rate : 0;
+
+  const currencyOptions = useMemo(
+    () => sourceCurrencies.map((code) => exchangeRateBaseline.rates[code]),
+    []
+  );
+
+  return (
+    <section className="flex flex-col gap-4 rounded-xl border border-line bg-white p-5 shadow-sm">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          Payments tool
+        </span>
+        <h2 className="text-2xl font-bold leading-tight">Currency converter / 货币换算</h2>
+        <p className="text-sm leading-relaxed text-muted">
+          Rates updated periodically; verify at bank before transactions.
+        </p>
+      </header>
+
+      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_12rem]">
+        <label className="flex flex-col gap-1.5 text-sm font-bold">
+          Amount
+          <input
+            className="h-11 rounded-lg border border-line bg-white px-3 text-base font-semibold outline-none transition focus:border-jade focus:ring-2 focus:ring-jade/20"
+            inputMode="decimal"
+            min="0"
+            onChange={(event) => setAmount(event.target.value)}
+            placeholder="100"
+            type="number"
+            value={amount}
+          />
+        </label>
+
+        <label className="flex flex-col gap-1.5 text-sm font-bold">
+          From
+          <select
+            className="h-11 rounded-lg border border-line bg-white px-3 text-base font-semibold outline-none transition focus:border-jade focus:ring-2 focus:ring-jade/20"
+            onChange={(event) => setCurrency(event.target.value as SourceCurrency)}
+            value={currency}
+          >
+            {currencyOptions.map((option) => (
+              <option key={option.code} value={option.code}>
+                {option.code}
+              </option>
+            ))}
+          </select>
+        </label>
+      </div>
+
+      <div className="flex flex-col gap-1 rounded-lg bg-cream p-4">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          Result to CNY
+        </span>
+        <strong className="text-3xl leading-tight sm:text-4xl">{formatCny(converted)}</strong>
+        <span className="text-xs leading-relaxed text-muted">
+          1 {currency} ≈ {formatRate(rate)} CNY (mid-market). Last updated{" "}
+          {exchangeRateBaseline.lastUpdated}.
+        </span>
+      </div>
+
+      <p className="text-xs leading-relaxed text-muted">
+        {exchangeRateBaseline.disclaimer.en} {exchangeRateBaseline.disclaimer.zh}
+      </p>
+    </section>
+  );
+}
diff --git a/v2/src/data/exchange-rates.ts b/v2/src/data/exchange-rates.ts
new file mode 100644
index 0000000000000000000000000000000000000000..a73d68e8ce099a699ce7bc7c2af618d0feb33cb9
--- /dev/null
+++ b/v2/src/data/exchange-rates.ts
@@ -0,0 +1,34 @@
+export const sourceCurrencies = ["USD", "EUR", "JPY", "GBP", "KRW", "AUD", "CAD", "HKD"] as const;
+
+export type SourceCurrency = (typeof sourceCurrencies)[number];
+
+export type ExchangeRate = {
+  code: SourceCurrency;
+  name: string;
+  rateToCny: number;
+};
+
+export const exchangeRateBaseline = {
+  lastUpdated: "2026-05-12",
+  rates: {
+    USD: { code: "USD", name: "US dollar", rateToCny: 7.23 },
+    EUR: { code: "EUR", name: "Euro", rateToCny: 7.85 },
+    JPY: { code: "JPY", name: "Japanese yen", rateToCny: 0.047 },
+    GBP: { code: "GBP", name: "British pound", rateToCny: 9.25 },
+    KRW: { code: "KRW", name: "South Korean won", rateToCny: 0.0052 },
+    AUD: { code: "AUD", name: "Australian dollar", rateToCny: 4.72 },
+    CAD: { code: "CAD", name: "Canadian dollar", rateToCny: 5.21 },
+    HKD: { code: "HKD", name: "Hong Kong dollar", rateToCny: 0.93 }
+  },
+  disclaimer: {
+    en: "For reference only. Banks and ATMs use their own rates with a 1-3% spread.",
+    zh: "仅供参考。银行和 ATM 使用自己的汇率，并通常包含 1-3% 点差。"
+  }
+} as const satisfies {
+  lastUpdated: string;
+  rates: Record<SourceCurrency, ExchangeRate>;
+  disclaimer: {
+    en: string;
+    zh: string;
+  };
+};
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index 430f30ed97efe14c8d130c339b183736966f6062..31f959941c971fc74880cf2bb08fb3ae76411082
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -1,7 +1,8 @@
 import { Link, useParams } from "react-router";
-import TravelAlerts from "../components/policy/TravelAlerts";
-import VisaChecker from "../components/pillar/VisaChecker";
-import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
+import TravelAlerts from "../components/policy/TravelAlerts";
+import VisaChecker from "../components/pillar/VisaChecker";
+import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
+import CurrencyConverter from "../components/tools/CurrencyConverter";
 import TopQuestions from "../components/sections/TopQuestions";
 import SourcesNote from "../components/common/SourcesNote";
 import { topQuestions } from "../data/top-questions";
@@ -103,7 +104,12 @@
       </header>
 
       {current === "entry" && <VisaChecker />}
-      {current === "payments" && <PaymentsChecklist />}
+      {current === "payments" && (
+        <>
+          <CurrencyConverter />
+          <PaymentsChecklist />
+        </>
+      )}
       {current === "notes" && (
         <>
           <TravelAlerts />

codex
代码已经落到 `v2/src/data/exchange-rates.ts`、`v2/src/components/tools/CurrencyConverter.tsx`，并接入了 payments 页面。现在我先跑 `npx tsc --noEmit`，如果有类型或打包器兼容问题会直接修。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git diff -- v2/src/data/exchange-rates.ts v2/src/components/tools/CurrencyConverter.tsx v2/src/pages/GuidePage.tsx' in c:\Users\h\Documents\New project 2
 succeeded in 500ms:
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index 430f30e..31f9599 100644
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -2,6 +2,7 @@ import { Link, useParams } from "react-router";
 import TravelAlerts from "../components/policy/TravelAlerts";
 import VisaChecker from "../components/pillar/VisaChecker";
 import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
+import CurrencyConverter from "../components/tools/CurrencyConverter";
 import TopQuestions from "../components/sections/TopQuestions";
 import SourcesNote from "../components/common/SourcesNote";
 import { topQuestions } from "../data/top-questions";
@@ -103,7 +104,12 @@ export default function GuidePage() {
       </header>
 
       {current === "entry" && <VisaChecker />}
-      {current === "payments" && <PaymentsChecklist />}
+      {current === "payments" && (
+        <>
+          <CurrencyConverter />
+          <PaymentsChecklist />
+        </>
+      )}
       {current === "notes" && (
         <>
           <TravelAlerts />
warning: in the working copy of 'v2/src/pages/GuidePage.tsx', LF will be replaced by CRLF the next time Git touches it

 succeeded in 1503ms:
diff --git a/v2/src/components/tools/CurrencyConverter.tsx b/v2/src/components/tools/CurrencyConverter.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..a1ee7100e7ac3a322159f83c2088d40f3b06fe3b
--- /dev/null
+++ b/v2/src/components/tools/CurrencyConverter.tsx
@@ -0,0 +1,93 @@
+"use client";
+
+import { useMemo, useState } from "react";
+import {
+  exchangeRateBaseline,
+  sourceCurrencies,
+  type SourceCurrency
+} from "../../data/exchange-rates";
+
+const formatCny = (value: number) =>
+  `¥${value.toLocaleString("en-US", {
+    minimumFractionDigits: 2,
+    maximumFractionDigits: 2
+  })} CNY`;
+
+const formatRate = (value: number) =>
+  value.toLocaleString("en-US", {
+    minimumFractionDigits: value < 0.01 ? 4 : 2,
+    maximumFractionDigits: value < 0.01 ? 4 : 3
+  });
+
+export default function CurrencyConverter() {
+  const [amount, setAmount] = useState("100");
+  const [currency, setCurrency] = useState<SourceCurrency>("USD");
+
+  const numericAmount = Number.parseFloat(amount);
+  const rate = exchangeRateBaseline.rates[currency].rateToCny;
+  const converted = Number.isFinite(numericAmount) && numericAmount > 0 ? numericAmount * rate : 0;
+
+  const currencyOptions = useMemo(
+    () => sourceCurrencies.map((code) => exchangeRateBaseline.rates[code]),
+    []
+  );
+
+  return (
+    <section className="flex flex-col gap-4 rounded-xl border border-line bg-white p-5 shadow-sm">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          Payments tool
+        </span>
+        <h2 className="text-2xl font-bold leading-tight">Currency converter / 货币换算</h2>
+        <p className="text-sm leading-relaxed text-muted">
+          Rates updated periodically; verify at bank before transactions.
+        </p>
+      </header>
+
+      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_12rem]">
+        <label className="flex flex-col gap-1.5 text-sm font-bold">
+          Amount
+          <input
+            className="h-11 rounded-lg border border-line bg-white px-3 text-base font-semibold outline-none transition focus:border-jade focus:ring-2 focus:ring-jade/20"
+            inputMode="decimal"
+            min="0"
+            onChange={(event) => setAmount(event.target.value)}
+            placeholder="100"
+            type="number"
+            value={amount}
+          />
+        </label>
+
+        <label className="flex flex-col gap-1.5 text-sm font-bold">
+          From
+          <select
+            className="h-11 rounded-lg border border-line bg-white px-3 text-base font-semibold outline-none transition focus:border-jade focus:ring-2 focus:ring-jade/20"
+            onChange={(event) => setCurrency(event.target.value as SourceCurrency)}
+            value={currency}
+          >
+            {currencyOptions.map((option) => (
+              <option key={option.code} value={option.code}>
+                {option.code}
+              </option>
+            ))}
+          </select>
+        </label>
+      </div>
+
+      <div className="flex flex-col gap-1 rounded-lg bg-cream p-4">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          Result to CNY
+        </span>
+        <strong className="text-3xl leading-tight sm:text-4xl">{formatCny(converted)}</strong>
+        <span className="text-xs leading-relaxed text-muted">
+          1 {currency} ≈ {formatRate(rate)} CNY (mid-market). Last updated{" "}
+          {exchangeRateBaseline.lastUpdated}.
+        </span>
+      </div>
+
+      <p className="text-xs leading-relaxed text-muted">
+        {exchangeRateBaseline.disclaimer.en} {exchangeRateBaseline.disclaimer.zh}
+      </p>
+    </section>
+  );
+}
diff --git a/v2/src/data/exchange-rates.ts b/v2/src/data/exchange-rates.ts
new file mode 100644
index 0000000000000000000000000000000000000000..a73d68e8ce099a699ce7bc7c2af618d0feb33cb9
--- /dev/null
+++ b/v2/src/data/exchange-rates.ts
@@ -0,0 +1,34 @@
+export const sourceCurrencies = ["USD", "EUR", "JPY", "GBP", "KRW", "AUD", "CAD", "HKD"] as const;
+
+export type SourceCurrency = (typeof sourceCurrencies)[number];
+
+export type ExchangeRate = {
+  code: SourceCurrency;
+  name: string;
+  rateToCny: number;
+};
+
+export const exchangeRateBaseline = {
+  lastUpdated: "2026-05-12",
+  rates: {
+    USD: { code: "USD", name: "US dollar", rateToCny: 7.23 },
+    EUR: { code: "EUR", name: "Euro", rateToCny: 7.85 },
+    JPY: { code: "JPY", name: "Japanese yen", rateToCny: 0.047 },
+    GBP: { code: "GBP", name: "British pound", rateToCny: 9.25 },
+    KRW: { code: "KRW", name: "South Korean won", rateToCny: 0.0052 },
+    AUD: { code: "AUD", name: "Australian dollar", rateToCny: 4.72 },
+    CAD: { code: "CAD", name: "Canadian dollar", rateToCny: 5.21 },
+    HKD: { code: "HKD", name: "Hong Kong dollar", rateToCny: 0.93 }
+  },
+  disclaimer: {
+    en: "For reference only. Banks and ATMs use their own rates with a 1-3% spread.",
+    zh: "仅供参考。银行和 ATM 使用自己的汇率，并通常包含 1-3% 点差。"
+  }
+} as const satisfies {
+  lastUpdated: string;
+  rates: Record<SourceCurrency, ExchangeRate>;
+  disclaimer: {
+    en: string;
+    zh: string;
+  };
+};
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index 430f30ed97efe14c8d130c339b183736966f6062..31f959941c971fc74880cf2bb08fb3ae76411082
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -1,7 +1,8 @@
 import { Link, useParams } from "react-router";
-import TravelAlerts from "../components/policy/TravelAlerts";
-import VisaChecker from "../components/pillar/VisaChecker";
-import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
+import TravelAlerts from "../components/policy/TravelAlerts";
+import VisaChecker from "../components/pillar/VisaChecker";
+import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
+import CurrencyConverter from "../components/tools/CurrencyConverter";
 import TopQuestions from "../components/sections/TopQuestions";
 import SourcesNote from "../components/common/SourcesNote";
 import { topQuestions } from "../data/top-questions";
@@ -103,7 +104,12 @@
       </header>
 
       {current === "entry" && <VisaChecker />}
-      {current === "payments" && <PaymentsChecklist />}
+      {current === "payments" && (
+        <>
+          <CurrencyConverter />
+          <PaymentsChecklist />
+        </>
+      )}
       {current === "notes" && (
         <>
           <TravelAlerts />

codex
类型检查通过了。接下来跑生产构建，重点看 React Router/Vite 是否对 `"use client"` 或新组件有任何构建期警告升级为错误。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 8411ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1518 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                     7.22 kB │ gzip:     1.05 kB
build/client/assets/Map3D-B9DDZdqH.css              24.01 kB │ gzip:     5.37 kB
build/client/assets/root-C3vcvi6Z.css               46.61 kB │ gzip:     8.68 kB
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
build/client/assets/PhrasebookPage-Ci-X9ehl.js      10.13 kB │ gzip:     4.21 kB
build/client/assets/root-B3XW5cSW.js                11.51 kB │ gzip:     5.28 kB
build/client/assets/transport-BJiJMhS4.js           12.28 kB │ gzip:     5.22 kB
build/client/assets/MapPage-MBXXq6my.js             13.67 kB │ gzip:     5.00 kB
build/client/assets/GuidePage-DGYsqoy4.js           14.45 kB │ gzip:     6.40 kB
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

[32m✓ built in 4.67s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 79 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m
[2mbuild\server\assets\server-build-C3vcvi6Z.css[22m

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
build/server/assets/server-build-C3vcvi6Z.css   46.61 kB │ gzip:   8.68 kB
build/server/assets/Map3D-Cv42P-Ue.js           15.47 kB │ gzip:   5.32 kB
build/server/assets/cityRoutes-Byzkxm76.js      31.42 kB │ gzip:  10.70 kB
build/server/index.js                          385.30 kB │ gzip: 120.08 kB

[32m✓ built in 599ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:dot-server (42%)
  - react-router:virtual-modules (28%)
  - react-router:inject-hmr-runtime (20%)
  - react-router:hmr-runtime (5%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/src/components/tools/CurrencyConverter.tsx b/v2/src/components/tools/CurrencyConverter.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..a1ee7100e7ac3a322159f83c2088d40f3b06fe3b
--- /dev/null
+++ b/v2/src/components/tools/CurrencyConverter.tsx
@@ -0,0 +1,93 @@
+"use client";
+
+import { useMemo, useState } from "react";
+import {
+  exchangeRateBaseline,
+  sourceCurrencies,
+  type SourceCurrency
+} from "../../data/exchange-rates";
+
+const formatCny = (value: number) =>
+  `¥${value.toLocaleString("en-US", {
+    minimumFractionDigits: 2,
+    maximumFractionDigits: 2
+  })} CNY`;
+
+const formatRate = (value: number) =>
+  value.toLocaleString("en-US", {
+    minimumFractionDigits: value < 0.01 ? 4 : 2,
+    maximumFractionDigits: value < 0.01 ? 4 : 3
+  });
+
+export default function CurrencyConverter() {
+  const [amount, setAmount] = useState("100");
+  const [currency, setCurrency] = useState<SourceCurrency>("USD");
+
+  const numericAmount = Number.parseFloat(amount);
+  const rate = exchangeRateBaseline.rates[currency].rateToCny;
+  const converted = Number.isFinite(numericAmount) && numericAmount > 0 ? numericAmount * rate : 0;
+
+  const currencyOptions = useMemo(
+    () => sourceCurrencies.map((code) => exchangeRateBaseline.rates[code]),
+    []
+  );
+
+  return (
+    <section className="flex flex-col gap-4 rounded-xl border border-line bg-white p-5 shadow-sm">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          Payments tool
+        </span>
+        <h2 className="text-2xl font-bold leading-tight">Currency converter / 货币换算</h2>
+        <p className="text-sm leading-relaxed text-muted">
+          Rates updated periodically; verify at bank before transactions.
+        </p>
+      </header>
+
+      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_12rem]">
+        <label className="flex flex-col gap-1.5 text-sm font-bold">
+          Amount
+          <input
+            className="h-11 rounded-lg border border-line bg-white px-3 text-base font-semibold outline-none transition focus:border-jade focus:ring-2 focus:ring-jade/20"
+            inputMode="decimal"
+            min="0"
+            onChange={(event) => setAmount(event.target.value)}
+            placeholder="100"
+            type="number"
+            value={amount}
+          />
+        </label>
+
+        <label className="flex flex-col gap-1.5 text-sm font-bold">
+          From
+          <select
+            className="h-11 rounded-lg border border-line bg-white px-3 text-base font-semibold outline-none transition focus:border-jade focus:ring-2 focus:ring-jade/20"
+            onChange={(event) => setCurrency(event.target.value as SourceCurrency)}
+            value={currency}
+          >
+            {currencyOptions.map((option) => (
+              <option key={option.code} value={option.code}>
+                {option.code}
+              </option>
+            ))}
+          </select>
+        </label>
+      </div>
+
+      <div className="flex flex-col gap-1 rounded-lg bg-cream p-4">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          Result to CNY
+        </span>
+        <strong className="text-3xl leading-tight sm:text-4xl">{formatCny(converted)}</strong>
+        <span className="text-xs leading-relaxed text-muted">
+          1 {currency} ≈ {formatRate(rate)} CNY (mid-market). Last updated{" "}
+          {exchangeRateBaseline.lastUpdated}.
+        </span>
+      </div>
+
+      <p className="text-xs leading-relaxed text-muted">
+        {exchangeRateBaseline.disclaimer.en} {exchangeRateBaseline.disclaimer.zh}
+      </p>
+    </section>
+  );
+}
diff --git a/v2/src/data/exchange-rates.ts b/v2/src/data/exchange-rates.ts
new file mode 100644
index 0000000000000000000000000000000000000000..a73d68e8ce099a699ce7bc7c2af618d0feb33cb9
--- /dev/null
+++ b/v2/src/data/exchange-rates.ts
@@ -0,0 +1,34 @@
+export const sourceCurrencies = ["USD", "EUR", "JPY", "GBP", "KRW", "AUD", "CAD", "HKD"] as const;
+
+export type SourceCurrency = (typeof sourceCurrencies)[number];
+
+export type ExchangeRate = {
+  code: SourceCurrency;
+  name: string;
+  rateToCny: number;
+};
+
+export const exchangeRateBaseline = {
+  lastUpdated: "2026-05-12",
+  rates: {
+    USD: { code: "USD", name: "US dollar", rateToCny: 7.23 },
+    EUR: { code: "EUR", name: "Euro", rateToCny: 7.85 },
+    JPY: { code: "JPY", name: "Japanese yen", rateToCny: 0.047 },
+    GBP: { code: "GBP", name: "British pound", rateToCny: 9.25 },
+    KRW: { code: "KRW", name: "South Korean won", rateToCny: 0.0052 },
+    AUD: { code: "AUD", name: "Australian dollar", rateToCny: 4.72 },
+    CAD: { code: "CAD", name: "Canadian dollar", rateToCny: 5.21 },
+    HKD: { code: "HKD", name: "Hong Kong dollar", rateToCny: 0.93 }
+  },
+  disclaimer: {
+    en: "For reference only. Banks and ATMs use their own rates with a 1-3% spread.",
+    zh: "仅供参考。银行和 ATM 使用自己的汇率，并通常包含 1-3% 点差。"
+  }
+} as const satisfies {
+  lastUpdated: string;
+  rates: Record<SourceCurrency, ExchangeRate>;
+  disclaimer: {
+    en: string;
+    zh: string;
+  };
+};
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index 430f30ed97efe14c8d130c339b183736966f6062..31f959941c971fc74880cf2bb08fb3ae76411082
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -1,7 +1,8 @@
 import { Link, useParams } from "react-router";
-import TravelAlerts from "../components/policy/TravelAlerts";
-import VisaChecker from "../components/pillar/VisaChecker";
-import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
+import TravelAlerts from "../components/policy/TravelAlerts";
+import VisaChecker from "../components/pillar/VisaChecker";
+import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
+import CurrencyConverter from "../components/tools/CurrencyConverter";
 import TopQuestions from "../components/sections/TopQuestions";
 import SourcesNote from "../components/common/SourcesNote";
 import { topQuestions } from "../data/top-questions";
@@ -103,7 +104,12 @@
       </header>
 
       {current === "entry" && <VisaChecker />}
-      {current === "payments" && <PaymentsChecklist />}
+      {current === "payments" && (
+        <>
+          <CurrencyConverter />
+          <PaymentsChecklist />
+        </>
+      )}
       {current === "notes" && (
         <>
           <TravelAlerts />

codex
构建也通过了，`/guide/payments` 已在 prerender 输出里生成。最后我快速确认改动范围，只报告这次相关文件和校验结果。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short -- v2/src/data/exchange-rates.ts v2/src/components/tools/CurrencyConverter.tsx v2/src/pages/GuidePage.tsx' in c:\Users\h\Documents\New project 2
 succeeded in 434ms:
 M v2/src/pages/GuidePage.tsx
?? v2/src/components/tools/CurrencyConverter.tsx
?? v2/src/data/exchange-rates.ts

diff --git a/v2/src/components/tools/CurrencyConverter.tsx b/v2/src/components/tools/CurrencyConverter.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..a1ee7100e7ac3a322159f83c2088d40f3b06fe3b
--- /dev/null
+++ b/v2/src/components/tools/CurrencyConverter.tsx
@@ -0,0 +1,93 @@
+"use client";
+
+import { useMemo, useState } from "react";
+import {
+  exchangeRateBaseline,
+  sourceCurrencies,
+  type SourceCurrency
+} from "../../data/exchange-rates";
+
+const formatCny = (value: number) =>
+  `¥${value.toLocaleString("en-US", {
+    minimumFractionDigits: 2,
+    maximumFractionDigits: 2
+  })} CNY`;
+
+const formatRate = (value: number) =>
+  value.toLocaleString("en-US", {
+    minimumFractionDigits: value < 0.01 ? 4 : 2,
+    maximumFractionDigits: value < 0.01 ? 4 : 3
+  });
+
+export default function CurrencyConverter() {
+  const [amount, setAmount] = useState("100");
+  const [currency, setCurrency] = useState<SourceCurrency>("USD");
+
+  const numericAmount = Number.parseFloat(amount);
+  const rate = exchangeRateBaseline.rates[currency].rateToCny;
+  const converted = Number.isFinite(numericAmount) && numericAmount > 0 ? numericAmount * rate : 0;
+
+  const currencyOptions = useMemo(
+    () => sourceCurrencies.map((code) => exchangeRateBaseline.rates[code]),
+    []
+  );
+
+  return (
+    <section className="flex flex-col gap-4 rounded-xl border border-line bg-white p-5 shadow-sm">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          Payments tool
+        </span>
+        <h2 className="text-2xl font-bold leading-tight">Currency converter / 货币换算</h2>
+        <p className="text-sm leading-relaxed text-muted">
+          Rates updated periodically; verify at bank before transactions.
+        </p>
+      </header>
+
+      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_12rem]">
+        <label className="flex flex-col gap-1.5 text-sm font-bold">
+          Amount
+          <input
+            className="h-11 rounded-lg border border-line bg-white px-3 text-base font-semibold outline-none transition focus:border-jade focus:ring-2 focus:ring-jade/20"
+            inputMode="decimal"
+            min="0"
+            onChange={(event) => setAmount(event.target.value)}
+            placeholder="100"
+            type="number"
+            value={amount}
+          />
+        </label>
+
+        <label className="flex flex-col gap-1.5 text-sm font-bold">
+          From
+          <select
+            className="h-11 rounded-lg border border-line bg-white px-3 text-base font-semibold outline-none transition focus:border-jade focus:ring-2 focus:ring-jade/20"
+            onChange={(event) => setCurrency(event.target.value as SourceCurrency)}
+            value={currency}
+          >
+            {currencyOptions.map((option) => (
+              <option key={option.code} value={option.code}>
+                {option.code}
+              </option>
+            ))}
+          </select>
+        </label>
+      </div>
+
+      <div className="flex flex-col gap-1 rounded-lg bg-cream p-4">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          Result to CNY
+        </span>
+        <strong className="text-3xl leading-tight sm:text-4xl">{formatCny(converted)}</strong>
+        <span className="text-xs leading-relaxed text-muted">
+          1 {currency} ≈ {formatRate(rate)} CNY (mid-market). Last updated{" "}
+          {exchangeRateBaseline.lastUpdated}.
+        </span>
+      </div>
+
+      <p className="text-xs leading-relaxed text-muted">
+        {exchangeRateBaseline.disclaimer.en} {exchangeRateBaseline.disclaimer.zh}
+      </p>
+    </section>
+  );
+}
diff --git a/v2/src/data/exchange-rates.ts b/v2/src/data/exchange-rates.ts
new file mode 100644
index 0000000000000000000000000000000000000000..a73d68e8ce099a699ce7bc7c2af618d0feb33cb9
--- /dev/null
+++ b/v2/src/data/exchange-rates.ts
@@ -0,0 +1,34 @@
+export const sourceCurrencies = ["USD", "EUR", "JPY", "GBP", "KRW", "AUD", "CAD", "HKD"] as const;
+
+export type SourceCurrency = (typeof sourceCurrencies)[number];
+
+export type ExchangeRate = {
+  code: SourceCurrency;
+  name: string;
+  rateToCny: number;
+};
+
+export const exchangeRateBaseline = {
+  lastUpdated: "2026-05-12",
+  rates: {
+    USD: { code: "USD", name: "US dollar", rateToCny: 7.23 },
+    EUR: { code: "EUR", name: "Euro", rateToCny: 7.85 },
+    JPY: { code: "JPY", name: "Japanese yen", rateToCny: 0.047 },
+    GBP: { code: "GBP", name: "British pound", rateToCny: 9.25 },
+    KRW: { code: "KRW", name: "South Korean won", rateToCny: 0.0052 },
+    AUD: { code: "AUD", name: "Australian dollar", rateToCny: 4.72 },
+    CAD: { code: "CAD", name: "Canadian dollar", rateToCny: 5.21 },
+    HKD: { code: "HKD", name: "Hong Kong dollar", rateToCny: 0.93 }
+  },
+  disclaimer: {
+    en: "For reference only. Banks and ATMs use their own rates with a 1-3% spread.",
+    zh: "仅供参考。银行和 ATM 使用自己的汇率，并通常包含 1-3% 点差。"
+  }
+} as const satisfies {
+  lastUpdated: string;
+  rates: Record<SourceCurrency, ExchangeRate>;
+  disclaimer: {
+    en: string;
+    zh: string;
+  };
+};
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index 430f30ed97efe14c8d130c339b183736966f6062..31f959941c971fc74880cf2bb08fb3ae76411082
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -1,7 +1,8 @@
 import { Link, useParams } from "react-router";
-import TravelAlerts from "../components/policy/TravelAlerts";
-import VisaChecker from "../components/pillar/VisaChecker";
-import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
+import TravelAlerts from "../components/policy/TravelAlerts";
+import VisaChecker from "../components/pillar/VisaChecker";
+import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
+import CurrencyConverter from "../components/tools/CurrencyConverter";
 import TopQuestions from "../components/sections/TopQuestions";
 import SourcesNote from "../components/common/SourcesNote";
 import { topQuestions } from "../data/top-questions";
@@ -103,7 +104,12 @@
       </header>
 
       {current === "entry" && <VisaChecker />}
-      {current === "payments" && <PaymentsChecklist />}
+      {current === "payments" && (
+        <>
+          <CurrencyConverter />
+          <PaymentsChecklist />
+        </>
+      )}
       {current === "notes" && (
         <>
           <TravelAlerts />

codex
已完成。

文件：`v2/src/data/exchange-rates.ts`、`v2/src/components/tools/CurrencyConverter.tsx`、`v2/src/pages/GuidePage.tsx`。  
币种数：8 个，USD/EUR/JPY/GBP/KRW/AUD/CAD/HKD -> CNY。  
校验：`npx tsc --noEmit` 0 error；`npm run build` 0 error，`/guide/payments` prerender 成功。构建仅有 chunk size/plugin timing warnings。
diff --git a/v2/src/components/tools/CurrencyConverter.tsx b/v2/src/components/tools/CurrencyConverter.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..a1ee7100e7ac3a322159f83c2088d40f3b06fe3b
--- /dev/null
+++ b/v2/src/components/tools/CurrencyConverter.tsx
@@ -0,0 +1,93 @@
+"use client";
+
+import { useMemo, useState } from "react";
+import {
+  exchangeRateBaseline,
+  sourceCurrencies,
+  type SourceCurrency
+} from "../../data/exchange-rates";
+
+const formatCny = (value: number) =>
+  `¥${value.toLocaleString("en-US", {
+    minimumFractionDigits: 2,
+    maximumFractionDigits: 2
+  })} CNY`;
+
+const formatRate = (value: number) =>
+  value.toLocaleString("en-US", {
+    minimumFractionDigits: value < 0.01 ? 4 : 2,
+    maximumFractionDigits: value < 0.01 ? 4 : 3
+  });
+
+export default function CurrencyConverter() {
+  const [amount, setAmount] = useState("100");
+  const [currency, setCurrency] = useState<SourceCurrency>("USD");
+
+  const numericAmount = Number.parseFloat(amount);
+  const rate = exchangeRateBaseline.rates[currency].rateToCny;
+  const converted = Number.isFinite(numericAmount) && numericAmount > 0 ? numericAmount * rate : 0;
+
+  const currencyOptions = useMemo(
+    () => sourceCurrencies.map((code) => exchangeRateBaseline.rates[code]),
+    []
+  );
+
+  return (
+    <section className="flex flex-col gap-4 rounded-xl border border-line bg-white p-5 shadow-sm">
+      <header className="flex flex-col gap-1">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          Payments tool
+        </span>
+        <h2 className="text-2xl font-bold leading-tight">Currency converter / 货币换算</h2>
+        <p className="text-sm leading-relaxed text-muted">
+          Rates updated periodically; verify at bank before transactions.
+        </p>
+      </header>
+
+      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_12rem]">
+        <label className="flex flex-col gap-1.5 text-sm font-bold">
+          Amount
+          <input
+            className="h-11 rounded-lg border border-line bg-white px-3 text-base font-semibold outline-none transition focus:border-jade focus:ring-2 focus:ring-jade/20"
+            inputMode="decimal"
+            min="0"
+            onChange={(event) => setAmount(event.target.value)}
+            placeholder="100"
+            type="number"
+            value={amount}
+          />
+        </label>
+
+        <label className="flex flex-col gap-1.5 text-sm font-bold">
+          From
+          <select
+            className="h-11 rounded-lg border border-line bg-white px-3 text-base font-semibold outline-none transition focus:border-jade focus:ring-2 focus:ring-jade/20"
+            onChange={(event) => setCurrency(event.target.value as SourceCurrency)}
+            value={currency}
+          >
+            {currencyOptions.map((option) => (
+              <option key={option.code} value={option.code}>
+                {option.code}
+              </option>
+            ))}
+          </select>
+        </label>
+      </div>
+
+      <div className="flex flex-col gap-1 rounded-lg bg-cream p-4">
+        <span className="text-xs font-bold uppercase tracking-widest text-muted">
+          Result to CNY
+        </span>
+        <strong className="text-3xl leading-tight sm:text-4xl">{formatCny(converted)}</strong>
+        <span className="text-xs leading-relaxed text-muted">
+          1 {currency} ≈ {formatRate(rate)} CNY (mid-market). Last updated{" "}
+          {exchangeRateBaseline.lastUpdated}.
+        </span>
+      </div>
+
+      <p className="text-xs leading-relaxed text-muted">
+        {exchangeRateBaseline.disclaimer.en} {exchangeRateBaseline.disclaimer.zh}
+      </p>
+    </section>
+  );
+}
diff --git a/v2/src/data/exchange-rates.ts b/v2/src/data/exchange-rates.ts
new file mode 100644
index 0000000000000000000000000000000000000000..a73d68e8ce099a699ce7bc7c2af618d0feb33cb9
--- /dev/null
+++ b/v2/src/data/exchange-rates.ts
@@ -0,0 +1,34 @@
+export const sourceCurrencies = ["USD", "EUR", "JPY", "GBP", "KRW", "AUD", "CAD", "HKD"] as const;
+
+export type SourceCurrency = (typeof sourceCurrencies)[number];
+
+export type ExchangeRate = {
+  code: SourceCurrency;
+  name: string;
+  rateToCny: number;
+};
+
+export const exchangeRateBaseline = {
+  lastUpdated: "2026-05-12",
+  rates: {
+    USD: { code: "USD", name: "US dollar", rateToCny: 7.23 },
+    EUR: { code: "EUR", name: "Euro", rateToCny: 7.85 },
+    JPY: { code: "JPY", name: "Japanese yen", rateToCny: 0.047 },
+    GBP: { code: "GBP", name: "British pound", rateToCny: 9.25 },
+    KRW: { code: "KRW", name: "South Korean won", rateToCny: 0.0052 },
+    AUD: { code: "AUD", name: "Australian dollar", rateToCny: 4.72 },
+    CAD: { code: "CAD", name: "Canadian dollar", rateToCny: 5.21 },
+    HKD: { code: "HKD", name: "Hong Kong dollar", rateToCny: 0.93 }
+  },
+  disclaimer: {
+    en: "For reference only. Banks and ATMs use their own rates with a 1-3% spread.",
+    zh: "仅供参考。银行和 ATM 使用自己的汇率，并通常包含 1-3% 点差。"
+  }
+} as const satisfies {
+  lastUpdated: string;
+  rates: Record<SourceCurrency, ExchangeRate>;
+  disclaimer: {
+    en: string;
+    zh: string;
+  };
+};
diff --git a/v2/src/pages/GuidePage.tsx b/v2/src/pages/GuidePage.tsx
index 430f30ed97efe14c8d130c339b183736966f6062..31f959941c971fc74880cf2bb08fb3ae76411082
--- a/v2/src/pages/GuidePage.tsx
+++ b/v2/src/pages/GuidePage.tsx
@@ -1,7 +1,8 @@
 import { Link, useParams } from "react-router";
-import TravelAlerts from "../components/policy/TravelAlerts";
-import VisaChecker from "../components/pillar/VisaChecker";
-import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
+import TravelAlerts from "../components/policy/TravelAlerts";
+import VisaChecker from "../components/pillar/VisaChecker";
+import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
+import CurrencyConverter from "../components/tools/CurrencyConverter";
 import TopQuestions from "../components/sections/TopQuestions";
 import SourcesNote from "../components/common/SourcesNote";
 import { topQuestions } from "../data/top-questions";
@@ -103,7 +104,12 @@
       </header>
 
       {current === "entry" && <VisaChecker />}
-      {current === "payments" && <PaymentsChecklist />}
+      {current === "payments" && (
+        <>
+          <CurrencyConverter />
+          <PaymentsChecklist />
+        </>
+      )}
       {current === "notes" && (
         <>
           <TravelAlerts />

tokens used
84,800

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
