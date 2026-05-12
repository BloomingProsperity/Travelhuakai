# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-12T03:30:30.681Z

## Original task

在 v2/ workdir 真的 edit + build。

新功能：双语应急 Phrasebook 页面 /phrasebook

要求：
1. 新建 v2/src/data/phrasebook.ts —— 按场景分类的 essential 短语，结构：
type Phrase = { en: string; zh: string; pinyin: string };
type PhraseCategory = { key: string; titleEn: string; titleZh: string; iconHint?: string; phrases: Phrase[] };

至少覆盖 7 个场景，每场景 6-10 句 essential：
- basics（你好/谢谢/对不起/听不懂/再说一遍/帮我一下）
- transport（这去 X 多少钱 / 地铁 X 站怎么走 / 我要打车 / 司机停一下 / 高铁站怎么走 / 机场怎么走 / 到了麻烦说一声）
- payments（不收外卡吗 / 现金可以吗 / 太贵了 / 便宜点 / 付现 / 扫码失败 / 收据要不要）
- food（不要辣 / 没有 X 过敏 / 我素食 / 这是什么 / 推荐什么 / 加饭 / 打包 / 结账）
- accommodation（我要 check-in / 几点退房 / wifi 密码 / 早餐几点 / 寄存行李 / 加张床）
- emergency（救救我 / 我生病了 / 我的护照丢了 / 救护车 / 报警 / 我钱包被偷了 / 给我点水）
- shopping（多少钱 / 试穿 / 不要 / 我看看 / 退货可以吗 / 信用卡能用吗 / 包起来）

pinyin 用标准带声调标记（nǐ hǎo 这种），不是英文音译

2. 新建 v2/src/pages/PhrasebookPage.tsx —— 双语标题、副标题、Tab 切换场景、每条短语 3 行：英文 / 拼音 / 中文，复制按钮（点了复制中文到剪贴板，aria-label）

3. 在 v2/src/routes.ts 加 route('phrasebook', './pages/PhrasebookPage.tsx')

4. 在 v2/react-router.config.ts prerender list 加 /phrasebook

5. 在 v2/public/sitemap.xml 加 /phrasebook

6. 在首页 HomePage 的 3 个 guideLinks 旁边再加一个去 /phrasebook 的入口（或者顶头加一个独立小卡 'Essential phrases →'）

7. SiteHeader 也加 phrasebook 链接

完成后 npx tsc --noEmit + npm run build 0 error。

报告 300 字以内：新建/改了几个文件、phrasebook 总短语数、build 状态。

## Final prompt

在 v2/ workdir 真的 edit + build。

新功能：双语应急 Phrasebook 页面 /phrasebook

要求：
1. 新建 v2/src/data/phrasebook.ts —— 按场景分类的 essential 短语，结构：
type Phrase = { en: string; zh: string; pinyin: string };
type PhraseCategory = { key: string; titleEn: string; titleZh: string; iconHint?: string; phrases: Phrase[] };

至少覆盖 7 个场景，每场景 6-10 句 essential：
- basics（你好/谢谢/对不起/听不懂/再说一遍/帮我一下）
- transport（这去 X 多少钱 / 地铁 X 站怎么走 / 我要打车 / 司机停一下 / 高铁站怎么走 / 机场怎么走 / 到了麻烦说一声）
- payments（不收外卡吗 / 现金可以吗 / 太贵了 / 便宜点 / 付现 / 扫码失败 / 收据要不要）
- food（不要辣 / 没有 X 过敏 / 我素食 / 这是什么 / 推荐什么 / 加饭 / 打包 / 结账）
- accommodation（我要 check-in / 几点退房 / wifi 密码 / 早餐几点 / 寄存行李 / 加张床）
- emergency（救救我 / 我生病了 / 我的护照丢了 / 救护车 / 报警 / 我钱包被偷了 / 给我点水）
- shopping（多少钱 / 试穿 / 不要 / 我看看 / 退货可以吗 / 信用卡能用吗 / 包起来）

pinyin 用标准带声调标记（nǐ hǎo 这种），不是英文音译

2. 新建 v2/src/pages/PhrasebookPage.tsx —— 双语标题、副标题、Tab 切换场景、每条短语 3 行：英文 / 拼音 / 中文，复制按钮（点了复制中文到剪贴板，aria-label）

3. 在 v2/src/routes.ts 加 route('phrasebook', './pages/PhrasebookPage.tsx')

4. 在 v2/react-router.config.ts prerender list 加 /phrasebook

5. 在 v2/public/sitemap.xml 加 /phrasebook

6. 在首页 HomePage 的 3 个 guideLinks 旁边再加一个去 /phrasebook 的入口（或者顶头加一个独立小卡 'Essential phrases →'）

7. SiteHeader 也加 phrasebook 链接

完成后 npx tsc --noEmit + npm run build 0 error。

报告 300 字以内：新建/改了几个文件、phrasebook 总短语数、build 状态。

## Raw output

```text
SUCCESS: The process with PID 610132 (child process of PID 610540) has been terminated.
SUCCESS: The process with PID 610540 (child process of PID 600004) has been terminated.
SUCCESS: The process with PID 600004 (child process of PID 611544) has been terminated.
SUCCESS: The process with PID 611544 (child process of PID 607832) has been terminated.
SUCCESS: The process with PID 520564 (child process of PID 607264) has been terminated.
SUCCESS: The process with PID 607264 (child process of PID 594472) has been terminated.
SUCCESS: The process with PID 594472 (child process of PID 608796) has been terminated.
SUCCESS: The process with PID 608796 (child process of PID 607832) has been terminated.
SUCCESS: The process with PID 610364 (child process of PID 598604) has been terminated.
SUCCESS: The process with PID 598604 (child process of PID 608152) has been terminated.
SUCCESS: The process with PID 608152 (child process of PID 609424) has been terminated.
SUCCESS: The process with PID 609424 (child process of PID 607832) has been terminated.
完成。

新建 2 个文件：`phrasebook.ts`、`PhrasebookPage.tsx`。修改 5 个文件：`routes.ts`、`react-router.config.ts`、`sitemap.xml`、`HomePage.tsx`、`SiteHeader.tsx`。

Phrasebook 总短语数：48 句，覆盖 7 个场景。

验证状态：`npx tsc --noEmit` 0 error；`npm run build` 0 error，`/phrasebook` 已 prerender。构建仅有既存 Vite 大 chunk/插件耗时 warning。


OpenAI Codex v0.128.0 (research preview)
--------
workdir: c:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1a36-248d-7f70-824c-97b6d6601c32
--------
user
在 v2/ workdir 真的 edit + build。

新功能：双语应急 Phrasebook 页面 /phrasebook

要求：
1. 新建 v2/src/data/phrasebook.ts —— 按场景分类的 essential 短语，结构：
type Phrase = { en: string; zh: string; pinyin: string };
type PhraseCategory = { key: string; titleEn: string; titleZh: string; iconHint?: string; phrases: Phrase[] };

至少覆盖 7 个场景，每场景 6-10 句 essential：
- basics（你好/谢谢/对不起/听不懂/再说一遍/帮我一下）
- transport（这去 X 多少钱 / 地铁 X 站怎么走 / 我要打车 / 司机停一下 / 高铁站怎么走 / 机场怎么走 / 到了麻烦说一声）
- payments（不收外卡吗 / 现金可以吗 / 太贵了 / 便宜点 / 付现 / 扫码失败 / 收据要不要）
- food（不要辣 / 没有 X 过敏 / 我素食 / 这是什么 / 推荐什么 / 加饭 / 打包 / 结账）
- accommodation（我要 check-in / 几点退房 / wifi 密码 / 早餐几点 / 寄存行李 / 加张床）
- emergency（救救我 / 我生病了 / 我的护照丢了 / 救护车 / 报警 / 我钱包被偷了 / 给我点水）
- shopping（多少钱 / 试穿 / 不要 / 我看看 / 退货可以吗 / 信用卡能用吗 / 包起来）

pinyin 用标准带声调标记（nǐ hǎo 这种），不是英文音译

2. 新建 v2/src/pages/PhrasebookPage.tsx —— 双语标题、副标题、Tab 切换场景、每条短语 3 行：英文 / 拼音 / 中文，复制按钮（点了复制中文到剪贴板，aria-label）

3. 在 v2/src/routes.ts 加 route('phrasebook', './pages/PhrasebookPage.tsx')

4. 在 v2/react-router.config.ts prerender list 加 /phrasebook

5. 在 v2/public/sitemap.xml 加 /phrasebook

6. 在首页 HomePage 的 3 个 guideLinks 旁边再加一个去 /phrasebook 的入口（或者顶头加一个独立小卡 'Essential phrases →'）

7. SiteHeader 也加 phrasebook 链接

完成后 npx tsc --noEmit + npm run build 0 error。

报告 300 字以内：新建/改了几个文件、phrasebook 总短语数、build 状态。
codex
我会直接在 `v2/` 里改代码并跑类型检查和构建。这个任务涉及 React 页面代码，我会按 `react-best-practices` 技能快速对齐项目里的组件写法。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'C:\\Users\\h\\.codex\\plugins\\cache\\openai-curated\\build-web-apps\\63976030\\skills\\react-best-practices\\SKILL.md'" in c:\Users\h\Documents\New project 2
 succeeded in 896ms:
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
我先看一下 `v2` 的路由、首页和头部结构，再按现有样式加页面，避免引入新的组件风格。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Force' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Force -Path v2' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg --files v2' in c:\Users\h\Documents\New project 2
 succeeded in 713ms:
v2\vite.config.ts
v2\tsconfig.node.json
v2\tsconfig.json
v2\tsconfig.app.json
v2\STYLE_GUIDE.md
v2\README.md
v2\index.html
v2\react-router.config.ts
v2\eslint.config.js
v2\package-lock.json
v2\package.json
v2\src\main.tsx
v2\src\routes.ts
v2\src\App.tsx
v2\src\root.tsx
v2\scripts\restart-dev.mjs
v2\scripts\interaction-check.mjs
v2\public\sitemap.xml
v2\public\robots.txt
v2\public\favicon.svg
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
v2\research\blog-platform-bureau-sweep.md
v2\research\alipay-wechat-foreigner-registration.md
v2\src\data\atlas.ts
v2\src\data\city-attractions.ts
v2\src\data\food.ts
v2\src\data\entry-policies.ts
v2\src\data\emergency.ts
v2\src\data\city-tourism-portals.ts
v2\src\data\map-sources.ts
v2\src\data\i18n.ts
v2\src\data\payments.ts
v2\src\data\phase2-preview.ts
v2\src\styles\globals.css
v2\src\data\practical-payments.ts
v2\src\data\practical-other.ts
v2\src\data\sources.ts
v2\src\data\top-questions.ts
v2\src\data\types.ts
v2\src\data\transport.ts
v2\src\lib\unsplash.ts
v2\src\lib\shapes.ts
v2\src\lib\search.ts
v2\src\lib\jsonLd.ts
v2\src\lib\i18n.ts
v2\src\lib\format.ts
v2\src\lib\cityRoutes.ts
v2\src\services\notes.ts
v2\src\hooks\useProvinceShapes.ts
v2\src\hooks\useIsDesktop.ts
v2\src\hooks\useCityViews.ts
v2\src\store\AtlasProvider.tsx
v2\src\store\atlas.ts
v2\src\store\language.ts
v2\src\store\LanguageProvider.tsx
v2\src\pages\SourcesPage.tsx
v2\src\pages\SharePage.tsx
v2\src\pages\MapPage.tsx
v2\src\pages\HomePage.tsx
v2\src\pages\GuidePage.tsx
v2\src\pages\CityPage.tsx
v2\src\pages\AskPage.tsx
v2\public\assets\three.module.min.js
v2\public\assets\china-province-shapes.json
v2\public\assets\china-map-gs2022-4309.jpg
v2\public\assets\earth-bluemarble.jpg
v2\src\components\map\provinceColors.ts
v2\src\components\map\Province3DOverlay.tsx
v2\src\components\map\MapPreview.tsx
v2\src\components\map\Map3D.tsx
v2\src\components\map\HeroMap.tsx
v2\src\components\map\ProvinceInfoCard.tsx
v2\src\components\map\ProvinceHitAreaLayer.tsx
v2\src\components\map\ProvinceLabelLayer.tsx
v2\src\components\map\ProvinceShapeLayer.tsx
v2\src\components\sections\TopQuestions.tsx
v2\src\components\map\SpecialRegionMarkers.tsx
v2\src\components\policy\TravelAlerts.tsx
v2\public\assets\province-map-textures\anhui.png
v2\public\assets\province-map-textures\chongqing.png
v2\public\assets\province-map-textures\guangxi.png
v2\public\assets\province-map-textures\guangdong.png
v2\public\assets\province-map-textures\gansu.png
v2\public\assets\province-map-textures\fujian.png
v2\public\assets\province-map-textures\hebei.png
v2\public\assets\province-map-textures\hainan.png
v2\public\assets\province-map-textures\guizhou.png
v2\public\assets\province-map-textures\henan.png
v2\public\assets\province-map-textures\heilongjiang.png
v2\public\assets\province-map-textures\hong-kong.png
v2\public\assets\province-map-textures\hubei.png
v2\public\assets\province-map-textures\beijing.png
v2\src\components\city\CityImagePanel.tsx
v2\src\components\city\CityNav.tsx
v2\src\components\city\CityIntro.tsx
v2\src\components\city\CuisineDrawer.tsx
v2\public\assets\province-map-textures\inner-mongolia.png
v2\public\assets\province-map-textures\hunan.png
v2\public\assets\province-map-textures\jiangsu.png
v2\public\assets\province-map-textures\jiangxi.png
v2\public\assets\province-map-textures\jilin.png
v2\src\components\common\SourcesNote.tsx
v2\src\components\common\PracticalBlock.tsx
v2\src\components\common\MapErrorBoundary.tsx
v2\src\components\common\CityFurtherReading.tsx
v2\src\components\pillar\EmergencyBriefing.tsx
v2\src\components\pillar\PaymentsChecklist.tsx
v2\src\components\pillar\FoodGuide.tsx
v2\src\components\pillar\PaymentsPractical.tsx
v2\public\assets\province-map-textures\qinghai.png
v2\public\assets\province-map-textures\ningxia.png
v2\public\assets\province-map-textures\macau.png
v2\public\assets\province-map-textures\liaoning.png
v2\public\assets\province-map-textures\shandong.png
v2\public\assets\province-map-textures\shaanxi.png
v2\public\assets\province-map-textures\shanghai.png
v2\public\assets\province-map-textures\shanxi.png
v2\src\components\layout\SiteHeader.tsx
v2\src\components\layout\SiteFooter.tsx
v2\src\components\layout\LanguageSwitch.tsx
v2\public\assets\province-map-textures\taiwan.png
v2\public\assets\province-map-textures\sichuan.png
v2\public\assets\province-map-textures\tianjin.png
v2\public\assets\province-map-textures\tibet.png
v2\src\components\pillar\TransportGuide.tsx
v2\src\components\pillar\VisaChecker.tsx
v2\public\assets\province-map-textures\yunnan.png
v2\public\assets\province-map-textures\xinjiang.png
v2\public\assets\province-map-textures\zhejiang.png

 succeeded in 799ms:


    目录: C:\Users\h\Documents\New project 2


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----         2026/5/10     22:45                .claude                                                              
d--h--         2026/5/12     11:19                .git                                                                 
d-----         2026/5/12     11:23                .omc                                                                 
d-----         2026/5/10     23:56                .playwright-mcp                                                      
d-----          2026/5/9     16:47                assets                                                               
d-----          2026/5/9     22:56                node_modules                                                         
d-----          2026/5/9     17:01                src                                                                  
d-----         2026/5/12     11:19                v2                                                                   
-a----         2026/5/10     22:52            499 .gitignore                                                           
-a----          2026/5/9     17:21          27818 app.js                                                               
-a----          2026/5/9     17:00          13022 index.html                                                           
-a----          2026/5/9     17:30          11678 map3d.js                                                             
-a----          2026/5/9     22:56           3170 package-lock.json                                                    
-a----          2026/5/9     22:56             62 package.json                                                         
-a----         2026/5/10      1:35          24842 PROJECT_PLAN.md                                                      
-a----          2026/5/9     17:21          41244 styles.css                                                           



 succeeded in 907ms:


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
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\routes.ts" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path react-router.config.ts' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path public\\sitemap.xml" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\pages\\HomePage.tsx" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path src\\components\\layout\\SiteHeader.tsx" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path package.json' in c:\Users\h\Documents\New project 2\v2
 succeeded in 893ms:
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

 succeeded in 902ms:
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

 succeeded in 947ms:
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

 succeeded in 965ms:
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

 succeeded in 966ms:
import { Link } from "react-router";
import LanguageSwitch from "./LanguageSwitch";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">鏃?/span>
        <strong className="truncate text-xl font-bold leading-none">鏃呰涓浗</strong>
      </Link>
      <LanguageSwitch />
    </header>
  );
}

 succeeded in 983ms:
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

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Path src\\pages\\HomePage.tsx | Select-Object -First 80" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Path src\\components\\layout\\SiteHeader.tsx" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Path src\\styles\\globals.css | Select-Object -First 240" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Path src\\pages\\GuidePage.tsx | Select-Object -First 220" in c:\Users\h\Documents\New project 2\v2
 succeeded in 1360ms:
import { Link } from "react-router";
import LanguageSwitch from "./LanguageSwitch";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
      </Link>
      <LanguageSwitch />
    </header>
  );
}

 succeeded in 1674ms:
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
  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
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
        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
    },
    {
      "@language": "zh-CN",
      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
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
          {isZh ? "欢迎来中国" : "Travel China"}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {isZh
            ? "先从城市和景区照片开始，再进入地图、签证、支付和注意事项。"
            : "Start with city landmark photos, then open the map, visa, payment, and travel-note pages."}
        </p>
        <p className="text-xs text-muted">
          {isZh
            ? "政策与官方信息引自中国官方源；操作经验与社区提示注明出处。"
            : "Policy and official information cite Chinese government sources; community tips and operational pitfalls are attributed."}

 succeeded in 1783ms:
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

 succeeded in 1852ms:
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
    zh: "入境签证",
    bodyEn: "Check the entry route first, then continue to city pages for local transport and emergencies.",
    bodyZh: "先确认入境方式，再进入城市页查看本地交通和应急信息。"
  },
  payments: {
    en: "Payments",
    zh: "支付准备",
    bodyEn: "Set up payment before departure and keep a cash backup for small vendors.",
    bodyZh: "出发前完成支付设置，并为小店和临时情况保留现金备选。"
  },
  notes: {
    en: "Travel notes",
    zh: "出行注意事项",
    bodyEn: "Policy changes and common pre-arrival questions are collected here.",
    bodyZh: "这里集中放政策变化和出发前常见问题。"
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
          {isZh ? "← 返回首页" : "← Home"}
        </Link>
        <h1 className="text-3xl font-bold">{isZh ? "未知主题" : "Unknown guide topic"}</h1>
        <p className="text-sm text-muted">
          {isZh
            ? `没有 "/guide/${topic}" 这个主题。可用主题：入境签证 / 支付准备 / 出行注意事项。`
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
          {isZh ? "← 返回首页" : "← Home"}
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
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Path src\\store\\language.ts" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Path src\\components\\layout\\LanguageSwitch.tsx" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Path src\\root.tsx" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Path src\\App.tsx" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Path src\\main.tsx" in c:\Users\h\Documents\New project 2\v2
 succeeded in 764ms:
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

 succeeded in 917ms:
import clsx from "clsx";
import { useLang } from "../../store/language";
import type { Lang } from "../../data/i18n";

const OPTIONS: Array<{ code: Lang; label: string }> = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" }
];

export default function LanguageSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label={lang === "zh" ? "切换语言" : "Switch language"}
      className="inline-flex shrink-0 overflow-hidden rounded-full border border-line"
    >
      {OPTIONS.map((option) => {
        const active = option.code === lang;
        return (
          <button
            key={option.code}
            type="button"
            aria-pressed={active}
            aria-label={
              option.code === "en"
                ? lang === "zh" ? "切换到英文" : "Switch to English"
                : lang === "zh" ? "切换到中文" : "Switch to Chinese"
            }
            onClick={() => setLang(option.code)}
            className={clsx(
              "px-2.5 py-1 text-xs font-bold uppercase tracking-normal transition sm:px-3 sm:tracking-widest",
              active ? "bg-ink text-white" : "bg-white text-muted hover:text-ink"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

 succeeded in 986ms:
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

 succeeded in 1001ms:
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

 succeeded in 1031ms:
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
        <title>旅行中国</title>
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
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Encoding utf8 -Path vite.config.ts' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Encoding utf8 -Path tsconfig.app.json' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Encoding utf8 -Path tsconfig.json' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Path src\\components\\layout\\SiteFooter.tsx" in c:\Users\h\Documents\New project 2\v2
 succeeded in 738ms:
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

 succeeded in 756ms:
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

 succeeded in 759ms:
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

 succeeded in 794ms:
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
          {isZh ? "信息来源" : "References"}
        </Link>
        <a href="#top" className="hover:text-jade">{t("backToTop")}</a>
      </div>
    </footer>
  );
}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Path src\\data\\emergency.ts | Select-Object -First 180" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Path src\\data\\i18n.ts | Select-Object -First 220" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Path src\\components\\common\\ScrollToTop.tsx" in c:\Users\h\Documents\New project 2\v2
 succeeded in 495ms:
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
      aria-label={lang === "zh" ? "回到顶部" : "Back to top"}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
    >
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
        <path d="M5 12l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

 succeeded in 573ms:
export type Lang = "en" | "zh";

export const i18n: Record<Lang, Record<string, string>> = {
  en: {
    brandSubtitle: "中国城市与博物馆索引",
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
    brandSubtitle: "中国城市与博物馆索引",
    navAtlas: "地图",
    navVideo: "视频",
    navMuseums: "博物馆",
    navSources: "来源",
    searchPlaceholder: "搜索城市、县、镇、村、景区",
    searchButton: "搜索",
    searchNoMatch: "当前演示索引里没有匹配地点。",
    searchJumped: "地图已跳转到",
    mapHintPending: "该省份已列入地图，但城市和博物馆数据尚未接入。",
    historyVideoTitle: "中国历史演变视频",
    historyVideoBody:
      "这里用于插入视频，用朝代、都城、疆域、路线、博物馆和文化交流解释中国，再让用户进入城市探索。",
    historyVideoMeta: "官方视频：Discover a China Beyond Your Imagination",
    historyVideoSource: "官方来源：Chinaculture.org",
    atlasTitle: "行政区划地图",
    atlasBody: "点击省级地区查看城市列表，再点击城市打开博物馆优先档案。",
    provinceMode: "省份",
    cityMode: "城市",
    provinceLevelRegions: "省级地区",
    currentView: "当前视图",
    famousAttractions: "著名景点",
    scenicEntry: "景区入口",
    museumEntry: "博物馆入口",
    provinceDataPending: "该省著名景点数据尚未接入。",
    reset: "重置",
    selectCity: "选择城市",
    selectCityBody: "城市档案会展示博物馆入口、真实浏览信号、官方来源状态和历史脉络。",
    close: "关闭",
    startHere: "从这里开始",
    pageViews: "页面浏览",
    visitorNotes: "游客笔记",
    lastVerified: "最后核验",
    englishAccess: "英文友好度",
    historicalIdentity: "历史定位",
    thenExplore: "随后探索",
    sourcePolicy: "来源规则",
    sourcePolicyBody: "官方事实必须保留来源链接。游客笔记必须取得投稿授权。图片无授权或开放许可时不展示。",
    museumTitle: "博物馆优先页面模板",
    museumBody: "每座城市先从解释其起源、时间线、人物和物质文化的机构开始。",
    flowOneTitle: "城市博物馆",
    flowOneBody: "市级博物馆、省级博物馆、考古遗址博物馆或地方文史馆。",
    flowTwoTitle: "历史脉络",
    flowTwoBody: "朝代、商路、战争、移民、地方产业和文化身份。",
    flowThreeTitle: "真实体验",
    flowThreeBody: "护照预约、英文展签、人流情况、交通难度和最新反馈。",
    flowFourTitle: "继续探索",
    flowFourBody: "附近历史遗址、老街、寺庙、文物公园和文化遗产地点。",
    sourcesTitle: "图片与来源规则",
    sourcesBody: "此模板不使用抓取的网络图片。正式页面应使用官方事实、授权游客笔记、合规图片和可见署名。",
    ruleOne: "官方文字只提取事实，不直接复制成正文。",
    ruleTwo: "AI 摘要中的关键事实必须能追溯到来源记录。",
    ruleThree: "游客笔记必须获得发布和翻译授权。",
    ruleFour: "图片必须具备所有权、开放许可或书面授权。",
    footerNote: "旅行中国。当前为演示数据。",
    backToTop: "回到顶部",
    cityProfiles: "个城市档案",
    views: "次浏览",
    viewIn3D: "查看 3D 模型",
    exit3D: "退出 3D"
  }
};

export const typeLabels: Record<Lang, Record<string, string>> = {
  en: { Municipality: "Municipality", Province: "Province" },
  zh: { Municipality: "直辖市", Province: "省" }
};

export const accessLabels: Record<Lang, Record<string, string>> = {
  en: { High: "High", Medium: "Medium", Low: "Low" },
  zh: { High: "高", Medium: "中", Low: "低" }
};

export const statusLabels: Record<Lang, Record<string, string>> = {
  en: {
    "Official facts pending": "Official facts pending",
    "Needs visitor notes": "Needs visitor notes",
    "Needs review": "Needs review"
  },
  zh: {
    "Official facts pending": "官方资料待核验",
    "Needs visitor notes": "需要游客笔记",
    "Needs review": "需要复核"
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
    province: "省级地区",
    city: "城市",
    county: "县区",
    town: "镇",
    village: "村",
    museum: "博物馆",
    site: "景区"
  }
};

 succeeded in 597ms:
import type { CityId } from "./transport";

export const nationalEmergency = [
  { number: "110", labelEn: "Police", labelZh: "公安", noteEn: "Free. Shanghai 110 supports 8 languages.", noteZh: "免费。上海 110 支持 8 种语言。", sourceId: "shanghai-emergency-numbers" },
  { number: "119", labelEn: "Fire & Rescue", labelZh: "消防", noteEn: "Free. Foreign-language support in Shanghai.", noteZh: "免费。上海支持外语。", sourceId: "shanghai-emergency-numbers" },
  { number: "120", labelEn: "Ambulance", labelZh: "急救", noteEn: "Free. National medical emergency dispatch.", noteZh: "免费。全国医疗急救调度。", sourceId: "beijing-emergency-numbers" },
  { number: "122", labelEn: "Traffic Police", labelZh: "交警", noteEn: "Free. No confirmed English line — use 110 or your hotline app for translation.", noteZh: "免费。外语支持待核验。", sourceId: "beijing-emergency-numbers" }
] as const;

export type Hospital = {
  cityId: CityId;
  nameEn: string;
  nameZh: string;
  addressEn: string;
  phone: string;
  emergencyPhone?: string;
  intlDept: string;
  hours: string;
  sourceId: string;
};

export const hospitals: Hospital[] = [
  {
    cityId: "beijing",
    nameEn: "Peking Union Medical College Hospital (PUMCH)",
    nameZh: "北京协和医院",
    addressEn: "1 Shuaifuyuan, Wangfujing, Dongcheng District",
    phone: "+86 10 6915 1188",
    emergencyPhone: "24/7",
    intlDept: "International Medical Services (IMS)",
    hours: "Mon–Fri 08:00–17:00; Sat–Sun 08:00–12:00; ER 24/7",
    sourceId: "pumch-foreign-care"
  },
  {
    cityId: "beijing",
    nameEn: "Beijing United Family Hospital",
    nameZh: "北京和睦家医院",
    addressEn: "2 Jiangtai Road, Chaoyang District",
    phone: "+86 10 5927 7000",
    emergencyPhone: "+86 10 5927 7120",
    intlDept: "English-speaking doctors throughout; no separate international desk",
    hours: "ER 24/7; outpatient varies",
    sourceId: "ufh-beijing"
  },
  {
    cityId: "shanghai",
    nameEn: "Huashan Hospital — World Health Clinic",
    nameZh: "复旦大学附属华山医院 国际医疗部",
    addressEn: "Building 5, 221 West Yan'an Road, Jing'an District",
    phone: "+86 21 6248 3986",
    emergencyPhone: "via main switchboard",
    intlDept: "World Health Clinic (外宾医疗部)",
    hours: "Mon–Fri 08:00–12:00, 13:30–17:00; ER 24/7",
    sourceId: "huashan-shanghai"
  },
  {
    cityId: "shanghai",
    nameEn: "Shanghai United Family Hospital — Puxi",
    nameZh: "上海和睦家医院 浦西院区",
    addressEn: "699 Pingtang Road, Changning District",
    phone: "+86 21 2216 3900",
    emergencyPhone: "+86 21 2216 3999",
    intlDept: "English-speaking doctors throughout; no separate international desk",
    hours: "ER 24/7",
    sourceId: "ufh-shanghai"
  },
  {
    cityId: "guangzhou",
    nameEn: "First Affiliated Hospital of Sun Yat-sen University",
    nameZh: "中山大学附属第一医院",
    addressEn: "58 Zhongshan 2nd Road, Yuexiu District",
    phone: "+86 20 8733 2200",
    emergencyPhone: "via main switchboard",
    intlDept: "International Medical Center (Liu Luanxiong Building, opened 2025-03)",
    hours: "Mon–Fri 08:00–12:00, 14:30–17:30; ER 24/7",
    sourceId: "fahsysu-gz"
  },
  {
    cityId: "guangzhou",
    nameEn: "Guangzhou United Family Hospital",
    nameZh: "广州和睦家医院",
    addressEn: "31 Pazhou Avenue, Haizhu District",
    phone: "+86 20 3610 2333",
    emergencyPhone: "+86 20 3610 2333",
    intlDept: "Full-hospital international; 40+ language phone interpretation",
    hours: "ER 24/7",
    sourceId: "ufh-guangzhou"
  },
  {
    cityId: "shenzhen",
    nameEn: "University of Hong Kong–Shenzhen Hospital (HKU-SZH)",
    nameZh: "香港大学深圳医院",
    addressEn: "1 Haiyuan First Road, Futian District",
    phone: "+86 755 8691 3388",
    intlDept: "International Medical Center (IMC)",
    hours: "Mon–Fri 08:00–17:30; Sat 08:00–17:30; Sun 08:30–12:30",
    sourceId: "hku-szh"
  },
  {
    cityId: "shenzhen",
    nameEn: "Shenzhen People's Hospital",
    nameZh: "深圳市人民医院",
    addressEn: "1017 Dongmen North Road, Luohu District",
    phone: "+86 755 2553 3018",
    intlDept: "VIP unit (call main number; ask for English-speaking staff)",
    hours: "ER 24/7",
    sourceId: "sz-hospitals-municipal"
  }
];

export type Hotline = {
  cityId: CityId;
  number: string;
  langs: string[];
  noteEn: string;
  noteZh: string;
  sourceId: string;
};

export const cityHotlines: Hotline[] = [
  {
    cityId: "beijing",
    number: "12345",
    langs: ["EN", "JA", "KO", "DE", "FR", "RU", "ES", "AR", "PT", "IT"],
    noteEn: "10 languages. English line 24/7; others ~8 hours/day.",
    noteZh: "10 种语言。英语 24/7；其他 8 小时/天。",
    sourceId: "beijing-12345-hotline"
  },
  {
    cityId: "shanghai",
    number: "12345",
    langs: ["EN", "FR", "DE", "JA", "KO", "ES", "IT", "RU", "TH", "FA"],
    noteEn: "Press 7 for foreign-language services. 24/7.",
    noteZh: "按 7 进入外语服务，24/7。",
    sourceId: "shanghai-12345"
  },
  {
    cityId: "guangzhou",
    number: "020-12345 / 960169",
    langs: ["EN 24/7", "JA", "KO"],
    noteEn: "960169 is a 3-party interpretation bridge — call it, then it conferences in 110/119/120/12345 for you.",
    noteZh: "960169 是三方翻译转接服务——拨通后再帮你接 110/119/120/12345。",
    sourceId: "gz-960169-bridge"
  },
  {
    cityId: "shenzhen",
    number: "0755-12345",
    langs: ["iShenzhen app: EN, FR, AR, JA, KO, ES, DE, PT, RU"],
    noteEn: "The 0755-12345 hotline may not route to a live English speaker — use the iShenzhen app instead, which supports 9 languages including English.",
    noteZh: "电话英语直拨支持待核验；iShenzhen App 支持 9 种语言。",
    sourceId: "sz-12345-pingshan"
  }
];

export type Embassy = {
  country: string;
  countryZh: string;
  name: string;
  address: string;
  phone: string;
  emergency: string;
  sourceId: string;
};

export const embassies: Embassy[] = [
  {
    country: "United States",
    countryZh: "美国",
    name: "U.S. Embassy Beijing",
    address: "55 Anjialou Road, Chaoyang District",
    phone: "+86 10 8531 4000",
    emergency: "+1 202 501 4444 (State Dept Ops 24/7)",
    sourceId: "us-embassy-china"
  },
  {
    country: "United Kingdom",
    countryZh: "英国",
    name: "British Embassy Beijing",
    address: "11 Guanghua Road, Chaoyang District",
    phone: "+86 10 5192 4000",

codex
我看到项目用 React Router file routes、Tailwind 工具类和一个全局语言开关。接下来会新增数据模块和页面，再把首页、头部、预渲染和 sitemap 接上。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Path src\\pages\\AskPage.tsx | Select-Object -First 260" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Path src\\pages\\SharePage.tsx | Select-Object -First 260" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Encoding utf8 -Path src\\components\\pillar\\PaymentsChecklist.tsx | Select-Object -First 260" in c:\Users\h\Documents\New project 2\v2
 succeeded in 846ms:
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
            {isZh ? "支柱 2" : "Pillar 2"}
          </span>
          <h2 className="text-2xl font-bold">{isZh ? "支付准备" : "Payments"}</h2>
          <p className="text-sm text-muted">
            {isZh
              ? "出发前必做、海关阈值、ATM 选择，每条都来自央行、海关、各市政府英文页。"
              : "What to set up before you fly, customs thresholds, ATM rules. Cites PBOC, China Customs, and city government English pages."}
          </p>
        </header>
      )}
      {cityScoped && <h2 className="text-xl font-bold">{isZh ? "支付" : "Payments"}</h2>}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card title={isZh ? "Alipay 单笔" : "Alipay per-tx"} big={`$${platformLimits.alipay.perTransactionUSD.toLocaleString()}`} note={isZh ? `年累 $${platformLimits.alipay.annualCumulativeUSD.toLocaleString()}` : `annual $${platformLimits.alipay.annualCumulativeUSD.toLocaleString()}`} />
        <Card title={isZh ? "WeChat Pay 单笔" : "WeChat Pay per-tx"} big={`$${platformLimits.wechat.perTransactionUSD.toLocaleString()}`} note={isZh ? `年累 $${platformLimits.wechat.annualCumulativeUSD.toLocaleString()}` : `annual $${platformLimits.wechat.annualCumulativeUSD.toLocaleString()}`} />
        <Card title={isZh ? "中行 ATM" : "BOC ATM"} big={`¥${atmRule.perWithdrawalCNY.toLocaleString()}`} note={atmRule.acceptedNetworks.join(" / ")} />
        <Card title={isZh ? "外币现金申报" : "Foreign cash declare"} big="$5,000" note={isZh ? "超过等值须申报" : "above this must declare"} />
      </div>

      <Block title={isZh ? "出发前清单" : "Before you fly"}>
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

      <Block title={isZh ? "海关申报阈值" : "China Customs thresholds"}>
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

      <Block title={cityScoped ? (isZh ? "本城支付现状" : "This city — payment status") : (isZh ? "四城支付现状" : "Four-city payment status")}>
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

 succeeded in 853ms:
import { Link } from "react-router";
import { moderationFlow, sampleShares } from "../data/phase2-preview";
import { useLang } from "../store/language";

export default function SharePage() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12">
      <header className="flex flex-col gap-3">
        <span className="self-start rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
          {isZh ? "Phase 2 · 即将上线" : "Phase 2 · coming soon"}
        </span>
        <h1 className="text-4xl font-bold leading-tight">
          {isZh ? "分享你的旅行" : "Share your trip"}
        </h1>
        <p className="text-base leading-relaxed text-ink/80">
          {isZh
            ? "外国游客在北上广深的真实经历——文字 + 照片 + 国家代码。投稿必须勾选发布与翻译授权，所有内容经过 AI 审核与关键词过滤。"
            : "Foreign tourists' real experiences in Beijing, Shanghai, Guangzhou, Shenzhen — text + photos + country code. Submission requires explicit publication-and-translation consent and passes AI moderation + keyword filter."}
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <header>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "审核管线（投稿到发布）" : "Moderation pipeline (submit → publish)"}
          </span>
          <h2 className="text-2xl font-bold">
            {isZh ? "每条投稿 5 步流程" : "Every submission goes through 5 steps"}
          </h2>
        </header>
        <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {moderationFlow.map((step) => (
            <li key={step.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
              <strong className="text-sm leading-tight">
                {isZh ? step.titleZh : step.titleEn}
              </strong>
              <p className="text-xs leading-relaxed text-ink/80">
                {isZh ? step.bodyZh : step.bodyEn}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-4">
        <header>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "投稿表单（设计预览）" : "Submission form (design preview)"}
          </span>
          <h2 className="text-2xl font-bold">
            {isZh ? "授权复选框为必选项" : "The consent checkbox is non-skippable"}
          </h2>
        </header>
        <div className="flex flex-col gap-3 rounded-xl border border-dashed border-line bg-paper p-6 opacity-90">
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "你想分享哪个城市？" : "Which city are you writing about?"}
            <select disabled className="rounded-lg border border-line bg-white px-3 py-2 text-sm">
              <option>{isZh ? "北京 · Beijing" : "Beijing"}</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "你的国家（公开显示为 2 字母代码）" : "Your country (public, shown as 2-letter code)"}
            <input
              disabled
              type="text"
              placeholder="DE / US / JP / FR …"
              className="rounded-lg border border-line bg-white px-3 py-2 text-sm placeholder-muted"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "正文（最多 1500 字）" : "Body (≤ 1500 chars)"}
            <textarea
              disabled
              rows={5}
              placeholder={
                isZh
                  ? "写下你的真实经历——哪些信息有用、遇到哪些问题、出发前希望知道的事…"
                  : "What worked, what didn't, what you wish you'd known before flying…"
              }
              className="rounded-lg border border-line bg-white px-3 py-2 text-sm placeholder-muted"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "照片（最多 5 张，每张 ≤ 2 MB）" : "Photos (up to 5, ≤ 2 MB each)"}
            <div className="flex h-24 items-center justify-center rounded-lg border-2 border-dashed border-line bg-white text-xs text-muted">
              {isZh ? "拖拽或点击上传" : "Drop files or click to upload"}
            </div>
          </label>
          <label className="mt-2 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 p-3">
            <input type="checkbox" disabled className="mt-0.5 h-4 w-4" />
            <span className="text-xs leading-relaxed">
              {isZh
                ? "我拥有或有权发布此内容。我同意本站发布它，并为外国读者翻译。我保留对作品的版权。"
                : "I own or have permission to post this. I agree that this site may publish it and translate it for readers. I keep my rights."}
            </span>
          </label>
          <label className="flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 p-3">
            <input type="checkbox" disabled className="mt-0.5 h-4 w-4" />
            <span className="text-xs leading-relaxed">
              {isZh
                ? "我理解这条内容（含翻译版本）会在中国境外展示。提供商：本站托管在境外服务器，AI 审核会调用境外 API。我可以随时编辑或删除，但已分发的翻译副本可能仍然存在。"
                : "I understand this content (including translations) may be displayed outside China. The site is hosted on overseas servers and AI moderation calls overseas APIs. I can edit or delete it later, subject to cached or already-distributed copies."}
            </span>
          </label>
          <button
            disabled
            className="self-start rounded-full bg-ink px-5 py-2 text-xs font-bold uppercase tracking-widest text-white opacity-60"
          >
            {isZh ? "提交（Phase 2 上线后启用）" : "Submit (enabled when Phase 2 ships)"}
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <header>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "已发布投稿（占位预览）" : "Published notes (mock preview)"}
          </span>
          <h2 className="text-2xl font-bold">
            {isZh ? "正文 + 照片 + 国家码 + 城市标签" : "Text + photos + country + city tag"}
          </h2>
        </header>
        <ul className="grid gap-3 md:grid-cols-2">
          {sampleShares.map((s) => (
            <li key={s.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-5">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-paper px-2 py-0.5 font-bold uppercase tracking-wider text-muted">
                  {s.authorCountry}
                </span>
                <span className="font-bold">{s.authorAlias}</span>
                <span className="text-muted">·</span>
                <span className="text-muted">{isZh ? s.cityZh : s.cityEn}</span>
                <span className="text-muted">·</span>
                <span className="text-muted">
                  {isZh ? `${s.daysAgo} 天前` : `${s.daysAgo} days ago`}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-ink/85">
                {isZh ? s.textZh : s.textEn}
              </p>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted">
                <span className="rounded-full bg-paper px-2 py-0.5 font-bold">
                  {s.imageCount} {isZh ? "张图" : s.imageCount === 1 ? "photo" : "photos"}
                </span>
                <span className="rounded-full bg-amber-50 px-2 py-0.5 font-bold text-amber-800">
                  {isZh ? "访客笔记 · 非官方核验" : "visitor note · not officially verified"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
        {isZh ? "← 返回首页" : "← Back home"}
      </Link>
    </main>
  );
}

 succeeded in 877ms:
import { Link } from "react-router";
import clsx from "clsx";
import { badgeLadder, sampleQuestions, type BadgeTier } from "../data/phase2-preview";
import { useLang } from "../store/language";

export default function AskPage() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12">
      <header className="flex flex-col gap-3">
        <span className="self-start rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
          {isZh ? "Phase 2 · 即将上线" : "Phase 2 · coming soon"}
        </span>
        <h1 className="text-4xl font-bold leading-tight">
          {isZh ? "向中国本地用户提问" : "Ask Chinese locals"}
        </h1>
        <p className="text-base leading-relaxed text-ink/80">
          {isZh
            ? "对北上广深的具体细节提问，由经过验证的本地长居用户回答。提问免费，浏览不需要登录。"
            : "Ask a specific question about Beijing, Shanghai, Guangzhou, or Shenzhen. Verified long-term residents answer. Browsing is free; login only when posting."}
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <header>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "答主等级（通过贡献获得）" : "Answerer tier ladder (earn-not-claim)"}
          </span>
          <h2 className="text-2xl font-bold">
            {isZh ? "本地徽章不能购买，只能通过贡献获得" : "Local badge cannot be bought — only earned"}
          </h2>
          <p className="text-sm text-muted">
            {isZh
              ? "答主等级靠贡献自动累积，不能购买。我们不会收集中国身份证或 WeChat / Alipay 实名信息。"
              : "Tiers accumulate from contribution, never purchased. We do not collect Chinese national ID, passport scans, or WeChat / Alipay real-name tokens."}
          </p>
        </header>
        <ol className="grid gap-3 md:grid-cols-2">
          {badgeLadder.map((tier) => (
            <BadgeCard key={tier.id} tier={tier} isZh={isZh} />
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-4">
        <header>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "样例问答（占位预览）" : "Sample Q&A (mock preview)"}
          </span>
          <h2 className="text-2xl font-bold">
            {isZh ? "答案旁显示答主常驻城市与等级徽章" : "Answers show the answerer's city and tier badge"}
          </h2>
        </header>
        <ul className="flex flex-col gap-3">
          {sampleQuestions.map((qa) => {
            const tier = badgeLadder[qa.answer.answererTier];
            return (
              <li key={qa.id} className="flex flex-col gap-3 rounded-xl border border-line bg-white p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-paper px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">
                    {qa.topic}
                  </span>
                  {qa.cityScope && (
                    <span className="rounded-full bg-paper px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">
                      {qa.cityScope.toUpperCase()}
                    </span>
                  )}
                </div>
                <strong className="text-base leading-tight">
                  {isZh ? qa.questionZh : qa.questionEn}
                </strong>
                <div className="flex flex-col gap-2 rounded-lg border border-line bg-paper p-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className={clsx("rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", tier.colorClass)}>
                      {isZh ? `T${tier.id} ${tier.nameZh}` : `Tier ${tier.id} · ${tier.nameEn}`}
                    </span>
                    <span className="text-muted">{qa.answer.answererCity}</span>
                    <span className="text-muted">·</span>
                    <span className="text-muted">
                      {isZh ? `${qa.answer.votes} 净赞` : `${qa.answer.votes} net votes`}
                    </span>
                    <span className="text-muted">·</span>
                    <span className="text-muted">
                      {isZh ? `${qa.answer.postedDays} 天前` : `${qa.answer.postedDays} days ago`}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">
                    {isZh ? qa.answer.bodyZh : qa.answer.bodyEn}
                  </p>
                  <span className="self-start text-[10px] uppercase tracking-wider text-muted">
                    {isZh
                      ? `已对照官方政策核验：${qa.answer.lastVerifiedAgainstPolicy}`
                      : `Last verified against policy: ${qa.answer.lastVerifiedAgainstPolicy}`}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="flex flex-col gap-3 rounded-xl border border-line bg-paper p-6">
        <h2 className="text-lg font-bold">
          {isZh ? "怎么验证答主真的住在那个城市？" : "How is the answerer actually verified?"}
        </h2>
        <ul className="grid gap-2 md:grid-cols-2 text-sm leading-relaxed">
          <li className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
            <strong>{isZh ? "+86 手机号 OTP" : "+86 phone OTP"}</strong>
            <span className="text-xs text-muted">
              {isZh
                ? "中国 SIM 卡注册时实名上传到工信部。+86 OTP 只是软信号——但已能筛掉绝大多数非本地用户。"
                : "China SIMs are real-name registered with the Ministry of IT at activation. A +86 OTP is a soft but meaningful signal that filters out the vast majority of non-China users."}
            </span>
          </li>
          <li className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
            <strong>{isZh ? "答题分数累积" : "Cumulative answer score"}</strong>
            <span className="text-xs text-muted">
              {isZh
                ? "参照 Stack Overflow 的机制：被点赞的回答多了自动升级。可观察、可衡量，不依赖人工评判。"
                : "Stack Overflow approach: enough net-positive answers and you auto-promote. Observable, measurable, no editorial gating."}
            </span>
          </li>
          <li className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
            <strong>{isZh ? "T3 用户担保机制" : "T3 user vouching"}</strong>
            <span className="text-xs text-muted">
              {isZh
                ? "PGP web-of-trust 模式：两个已认证 T3 用户为新人担保。每个 T3 担保上限有限，避免小范围相互担保。"
                : "PGP web-of-trust pattern: two existing T3 users vouch for a new candidate. Each voucher has a cap to prevent cliques."}
            </span>
          </li>
          <li className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
            <strong>
              {isZh ? "我们不会做的事" : "What we will NOT do"}
            </strong>
            <span className="text-xs text-muted">
              {isZh
                ? "不收中国身份证号、不收护照扫描、不绑定微信/支付宝实名 token。这是 PIPL 合规红线，外国平台跨境收集这类数据需安全评估，风险高于收益。"
                : "We will NOT collect Chinese national ID numbers, passport scans, or WeChat/Alipay real-name tokens. PIPL forbids cross-border collection without a security assessment — the risk far outweighs the benefit."}
            </span>
          </li>
        </ul>
      </section>

      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
        {isZh ? "← 返回首页" : "← Back home"}
      </Link>
    </main>
  );
}

function BadgeCard({ tier, isZh }: { tier: BadgeTier; isZh: boolean }) {
  return (
    <li className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
      <div className="flex items-center justify-between">
        <span className={clsx("rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", tier.colorClass)}>
          {isZh ? `T${tier.id} · ${tier.nameZh}` : `Tier ${tier.id} · ${tier.nameEn}`}
        </span>
      </div>
      <strong className="text-sm leading-tight">
        {isZh ? "门槛：" : "Criteria: "}
        <span className="font-normal text-ink/80">{isZh ? tier.criteriaZh : tier.criteriaEn}</span>
      </strong>
      <p className="text-xs text-muted">
        {isZh ? "权限：" : "Rights: "}
        {isZh ? tier.rightsZh : tier.rightsEn}
      </p>
    </li>
  );
}

codex
我准备写入 `phrasebook.ts` 和页面组件。数据会保持单独导出，页面只做展示、Tab 状态和剪贴板交互。
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\data\phrasebook.ts
diff --git a/v2/src/data/phrasebook.ts b/v2/src/data/phrasebook.ts
new file mode 100644
index 0000000000000000000000000000000000000000..fe01e699a457ed6e7ca8b2485ae7045c5fcde9a1
--- /dev/null
+++ b/v2/src/data/phrasebook.ts
@@ -0,0 +1,122 @@
+export type Phrase = { en: string; zh: string; pinyin: string };
+
+export type PhraseCategory = {
+  key: string;
+  titleEn: string;
+  titleZh: string;
+  iconHint?: string;
+  phrases: Phrase[];
+};
+
+export const phraseCategories: PhraseCategory[] = [
+  {
+    key: "basics",
+    titleEn: "Basics",
+    titleZh: "基础用语",
+    iconHint: "hello",
+    phrases: [
+      { en: "Hello.", zh: "你好。", pinyin: "Nǐ hǎo." },
+      { en: "Thank you.", zh: "谢谢。", pinyin: "Xièxie." },
+      { en: "Sorry.", zh: "对不起。", pinyin: "Duìbuqǐ." },
+      { en: "I don't understand.", zh: "我听不懂。", pinyin: "Wǒ tīng bù dǒng." },
+      { en: "Please say that again.", zh: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn." },
+      { en: "Please help me.", zh: "请帮我一下。", pinyin: "Qǐng bāng wǒ yí xià." }
+    ]
+  },
+  {
+    key: "transport",
+    titleEn: "Transport",
+    titleZh: "交通",
+    iconHint: "route",
+    phrases: [
+      { en: "How much to X?", zh: "去 X 多少钱？", pinyin: "Qù X duōshǎo qián?" },
+      {
+        en: "How do I get to metro station X?",
+        zh: "地铁 X 站怎么走？",
+        pinyin: "Dìtiě X zhàn zěnme zǒu?"
+      },
+      { en: "I want to take a taxi.", zh: "我要打车。", pinyin: "Wǒ yào dǎchē." },
+      { en: "Driver, please stop here.", zh: "师傅，请停一下。", pinyin: "Shīfu, qǐng tíng yí xià." },
+      { en: "How do I get to the high-speed rail station?", zh: "高铁站怎么走？", pinyin: "Gāotiě zhàn zěnme zǒu?" },
+      { en: "How do I get to the airport?", zh: "机场怎么走？", pinyin: "Jīchǎng zěnme zǒu?" },
+      { en: "Please tell me when we arrive.", zh: "到了麻烦说一声。", pinyin: "Dào le máfan shuō yì shēng." }
+    ]
+  },
+  {
+    key: "payments",
+    titleEn: "Payments",
+    titleZh: "支付",
+    iconHint: "wallet",
+    phrases: [
+      { en: "Don't you accept foreign cards?", zh: "不收外卡吗？", pinyin: "Bù shōu wàikǎ ma?" },
+      { en: "Is cash okay?", zh: "现金可以吗？", pinyin: "Xiànjīn kěyǐ ma?" },
+      { en: "That's too expensive.", zh: "太贵了。", pinyin: "Tài guì le." },
+      { en: "Can it be cheaper?", zh: "便宜点。", pinyin: "Piányi diǎn." },
+      { en: "I'll pay cash.", zh: "我付现金。", pinyin: "Wǒ fù xiànjīn." },
+      { en: "The QR code payment failed.", zh: "扫码失败了。", pinyin: "Sǎomǎ shībài le." },
+      { en: "Do you need the receipt?", zh: "收据要不要？", pinyin: "Shōujù yào bu yào?" }
+    ]
+  },
+  {
+    key: "food",
+    titleEn: "Food",
+    titleZh: "餐饮",
+    iconHint: "bowl",
+    phrases: [
+      { en: "Please make it not spicy.", zh: "不要辣。", pinyin: "Bú yào là." },
+      { en: "No X, I'm allergic.", zh: "不要 X，我过敏。", pinyin: "Bú yào X, wǒ guòmǐn." },
+      { en: "I am vegetarian.", zh: "我吃素。", pinyin: "Wǒ chī sù." },
+      { en: "What is this?", zh: "这是什么？", pinyin: "Zhè shì shénme?" },
+      { en: "What do you recommend?", zh: "推荐什么？", pinyin: "Tuījiàn shénme?" },
+      { en: "Extra rice, please.", zh: "加饭。", pinyin: "Jiā fàn." },
+      { en: "Please pack this to go.", zh: "打包。", pinyin: "Dǎbāo." },
+      { en: "Check, please.", zh: "结账。", pinyin: "Jiézhàng." }
+    ]
+  },
+  {
+    key: "accommodation",
+    titleEn: "Accommodation",
+    titleZh: "住宿",
+    iconHint: "hotel",
+    phrases: [
+      { en: "I want to check in.", zh: "我要办理入住。", pinyin: "Wǒ yào bànlǐ rùzhù." },
+      { en: "What time is check-out?", zh: "几点退房？", pinyin: "Jǐ diǎn tuìfáng?" },
+      { en: "What is the Wi-Fi password?", zh: "Wi-Fi 密码是多少？", pinyin: "Wi-Fi mìmǎ shì duōshǎo?" },
+      { en: "What time is breakfast?", zh: "早餐几点？", pinyin: "Zǎocān jǐ diǎn?" },
+      { en: "Can I store my luggage?", zh: "可以寄存行李吗？", pinyin: "Kěyǐ jìcún xíngli ma?" },
+      { en: "Can we add an extra bed?", zh: "可以加张床吗？", pinyin: "Kěyǐ jiā zhāng chuáng ma?" }
+    ]
+  },
+  {
+    key: "emergency",
+    titleEn: "Emergency",
+    titleZh: "应急",
+    iconHint: "sos",
+    phrases: [
+      { en: "Help me!", zh: "救救我！", pinyin: "Jiùjiu wǒ!" },
+      { en: "I am sick.", zh: "我生病了。", pinyin: "Wǒ shēngbìng le." },
+      { en: "My passport is lost.", zh: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le." },
+      { en: "Call an ambulance.", zh: "叫救护车。", pinyin: "Jiào jiùhùchē." },
+      { en: "Call the police.", zh: "报警。", pinyin: "Bàojǐng." },
+      { en: "My wallet was stolen.", zh: "我的钱包被偷了。", pinyin: "Wǒ de qiánbāo bèi tōu le." },
+      { en: "Give me some water, please.", zh: "给我点水。", pinyin: "Gěi wǒ diǎn shuǐ." }
+    ]
+  },
+  {
+    key: "shopping",
+    titleEn: "Shopping",
+    titleZh: "购物",
+    iconHint: "bag",
+    phrases: [
+      { en: "How much is it?", zh: "多少钱？", pinyin: "Duōshǎo qián?" },
+      { en: "Can I try it on?", zh: "可以试穿吗？", pinyin: "Kěyǐ shìchuān ma?" },
+      { en: "I don't want it.", zh: "不要。", pinyin: "Bú yào." },
+      { en: "I'm just looking.", zh: "我看看。", pinyin: "Wǒ kànkan." },
+      { en: "Can I return it?", zh: "可以退货吗？", pinyin: "Kěyǐ tuìhuò ma?" },
+      { en: "Can I use a credit card?", zh: "信用卡能用吗？", pinyin: "Xìnyòngkǎ néng yòng ma?" },
+      { en: "Please wrap it up.", zh: "包起来。", pinyin: "Bāo qǐlai." }
+    ]
+  }
+];
+
+export const phrasebookTotal = phraseCategories.reduce((total, category) => total + category.phrases.length, 0);

diff --git a/v2/src/data/phrasebook.ts b/v2/src/data/phrasebook.ts
new file mode 100644
index 0000000000000000000000000000000000000000..fe01e699a457ed6e7ca8b2485ae7045c5fcde9a1
--- /dev/null
+++ b/v2/src/data/phrasebook.ts
@@ -0,0 +1,122 @@
+export type Phrase = { en: string; zh: string; pinyin: string };
+
+export type PhraseCategory = {
+  key: string;
+  titleEn: string;
+  titleZh: string;
+  iconHint?: string;
+  phrases: Phrase[];
+};
+
+export const phraseCategories: PhraseCategory[] = [
+  {
+    key: "basics",
+    titleEn: "Basics",
+    titleZh: "基础用语",
+    iconHint: "hello",
+    phrases: [
+      { en: "Hello.", zh: "你好。", pinyin: "Nǐ hǎo." },
+      { en: "Thank you.", zh: "谢谢。", pinyin: "Xièxie." },
+      { en: "Sorry.", zh: "对不起。", pinyin: "Duìbuqǐ." },
+      { en: "I don't understand.", zh: "我听不懂。", pinyin: "Wǒ tīng bù dǒng." },
+      { en: "Please say that again.", zh: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn." },
+      { en: "Please help me.", zh: "请帮我一下。", pinyin: "Qǐng bāng wǒ yí xià." }
+    ]
+  },
+  {
+    key: "transport",
+    titleEn: "Transport",
+    titleZh: "交通",
+    iconHint: "route",
+    phrases: [
+      { en: "How much to X?", zh: "去 X 多少钱？", pinyin: "Qù X duōshǎo qián?" },
+      {
+        en: "How do I get to metro station X?",
+        zh: "地铁 X 站怎么走？",
+        pinyin: "Dìtiě X zhàn zěnme zǒu?"
+      },
+      { en: "I want to take a taxi.", zh: "我要打车。", pinyin: "Wǒ yào dǎchē." },
+      { en: "Driver, please stop here.", zh: "师傅，请停一下。", pinyin: "Shīfu, qǐng tíng yí xià." },
+      { en: "How do I get to the high-speed rail station?", zh: "高铁站怎么走？", pinyin: "Gāotiě zhàn zěnme zǒu?" },
+      { en: "How do I get to the airport?", zh: "机场怎么走？", pinyin: "Jīchǎng zěnme zǒu?" },
+      { en: "Please tell me when we arrive.", zh: "到了麻烦说一声。", pinyin: "Dào le máfan shuō yì shēng." }
+    ]
+  },
+  {
+    key: "payments",
+    titleEn: "Payments",
+    titleZh: "支付",
+    iconHint: "wallet",
+    phrases: [
+      { en: "Don't you accept foreign cards?", zh: "不收外卡吗？", pinyin: "Bù shōu wàikǎ ma?" },
+      { en: "Is cash okay?", zh: "现金可以吗？", pinyin: "Xiànjīn kěyǐ ma?" },
+      { en: "That's too expensive.", zh: "太贵了。", pinyin: "Tài guì le." },
+      { en: "Can it be cheaper?", zh: "便宜点。", pinyin: "Piányi diǎn." },
+      { en: "I'll pay cash.", zh: "我付现金。", pinyin: "Wǒ fù xiànjīn." },
+      { en: "The QR code payment failed.", zh: "扫码失败了。", pinyin: "Sǎomǎ shībài le." },
+      { en: "Do you need the receipt?", zh: "收据要不要？", pinyin: "Shōujù yào bu yào?" }
+    ]
+  },
+  {
+    key: "food",
+    titleEn: "Food",
+    titleZh: "餐饮",
+    iconHint: "bowl",
+    phrases: [
+      { en: "Please make it not spicy.", zh: "不要辣。", pinyin: "Bú yào là." },
+      { en: "No X, I'm allergic.", zh: "不要 X，我过敏。", pinyin: "Bú yào X, wǒ guòmǐn." },
+      { en: "I am vegetarian.", zh: "我吃素。", pinyin: "Wǒ chī sù." },
+      { en: "What is this?", zh: "这是什么？", pinyin: "Zhè shì shénme?" },
+      { en: "What do you recommend?", zh: "推荐什么？", pinyin: "Tuījiàn shénme?" },
+      { en: "Extra rice, please.", zh: "加饭。", pinyin: "Jiā fàn." },
+      { en: "Please pack this to go.", zh: "打包。", pinyin: "Dǎbāo." },
+      { en: "Check, please.", zh: "结账。", pinyin: "Jiézhàng." }
+    ]
+  },
+  {
+    key: "accommodation",
+    titleEn: "Accommodation",
+    titleZh: "住宿",
+    iconHint: "hotel",
+    phrases: [
+      { en: "I want to check in.", zh: "我要办理入住。", pinyin: "Wǒ yào bànlǐ rùzhù." },
+      { en: "What time is check-out?", zh: "几点退房？", pinyin: "Jǐ diǎn tuìfáng?" },
+      { en: "What is the Wi-Fi password?", zh: "Wi-Fi 密码是多少？", pinyin: "Wi-Fi mìmǎ shì duōshǎo?" },
+      { en: "What time is breakfast?", zh: "早餐几点？", pinyin: "Zǎocān jǐ diǎn?" },
+      { en: "Can I store my luggage?", zh: "可以寄存行李吗？", pinyin: "Kěyǐ jìcún xíngli ma?" },
+      { en: "Can we add an extra bed?", zh: "可以加张床吗？", pinyin: "Kěyǐ jiā zhāng chuáng ma?" }
+    ]
+  },
+  {
+    key: "emergency",
+    titleEn: "Emergency",
+    titleZh: "应急",
+    iconHint: "sos",
+    phrases: [
+      { en: "Help me!", zh: "救救我！", pinyin: "Jiùjiu wǒ!" },
+      { en: "I am sick.", zh: "我生病了。", pinyin: "Wǒ shēngbìng le." },
+      { en: "My passport is lost.", zh: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le." },
+      { en: "Call an ambulance.", zh: "叫救护车。", pinyin: "Jiào jiùhùchē." },
+      { en: "Call the police.", zh: "报警。", pinyin: "Bàojǐng." },
+      { en: "My wallet was stolen.", zh: "我的钱包被偷了。", pinyin: "Wǒ de qiánbāo bèi tōu le." },
+      { en: "Give me some water, please.", zh: "给我点水。", pinyin: "Gěi wǒ diǎn shuǐ." }
+    ]
+  },
+  {
+    key: "shopping",
+    titleEn: "Shopping",
+    titleZh: "购物",
+    iconHint: "bag",
+    phrases: [
+      { en: "How much is it?", zh: "多少钱？", pinyin: "Duōshǎo qián?" },
+      { en: "Can I try it on?", zh: "可以试穿吗？", pinyin: "Kěyǐ shìchuān ma?" },
+      { en: "I don't want it.", zh: "不要。", pinyin: "Bú yào." },
+      { en: "I'm just looking.", zh: "我看看。", pinyin: "Wǒ kànkan." },
+      { en: "Can I return it?", zh: "可以退货吗？", pinyin: "Kěyǐ tuìhuò ma?" },
+      { en: "Can I use a credit card?", zh: "信用卡能用吗？", pinyin: "Xìnyòngkǎ néng yòng ma?" },
+      { en: "Please wrap it up.", zh: "包起来。", pinyin: "Bāo qǐlai." }
+    ]
+  }
+];
+
+export const phrasebookTotal = phraseCategories.reduce((total, category) => total + category.phrases.length, 0);

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\pages\PhrasebookPage.tsx
diff --git a/v2/src/data/phrasebook.ts b/v2/src/data/phrasebook.ts
new file mode 100644
index 0000000000000000000000000000000000000000..fe01e699a457ed6e7ca8b2485ae7045c5fcde9a1
--- /dev/null
+++ b/v2/src/data/phrasebook.ts
@@ -0,0 +1,122 @@
+export type Phrase = { en: string; zh: string; pinyin: string };
+
+export type PhraseCategory = {
+  key: string;
+  titleEn: string;
+  titleZh: string;
+  iconHint?: string;
+  phrases: Phrase[];
+};
+
+export const phraseCategories: PhraseCategory[] = [
+  {
+    key: "basics",
+    titleEn: "Basics",
+    titleZh: "基础用语",
+    iconHint: "hello",
+    phrases: [
+      { en: "Hello.", zh: "你好。", pinyin: "Nǐ hǎo." },
+      { en: "Thank you.", zh: "谢谢。", pinyin: "Xièxie." },
+      { en: "Sorry.", zh: "对不起。", pinyin: "Duìbuqǐ." },
+      { en: "I don't understand.", zh: "我听不懂。", pinyin: "Wǒ tīng bù dǒng." },
+      { en: "Please say that again.", zh: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn." },
+      { en: "Please help me.", zh: "请帮我一下。", pinyin: "Qǐng bāng wǒ yí xià." }
+    ]
+  },
+  {
+    key: "transport",
+    titleEn: "Transport",
+    titleZh: "交通",
+    iconHint: "route",
+    phrases: [
+      { en: "How much to X?", zh: "去 X 多少钱？", pinyin: "Qù X duōshǎo qián?" },
+      {
+        en: "How do I get to metro station X?",
+        zh: "地铁 X 站怎么走？",
+        pinyin: "Dìtiě X zhàn zěnme zǒu?"
+      },
+      { en: "I want to take a taxi.", zh: "我要打车。", pinyin: "Wǒ yào dǎchē." },
+      { en: "Driver, please stop here.", zh: "师傅，请停一下。", pinyin: "Shīfu, qǐng tíng yí xià." },
+      { en: "How do I get to the high-speed rail station?", zh: "高铁站怎么走？", pinyin: "Gāotiě zhàn zěnme zǒu?" },
+      { en: "How do I get to the airport?", zh: "机场怎么走？", pinyin: "Jīchǎng zěnme zǒu?" },
+      { en: "Please tell me when we arrive.", zh: "到了麻烦说一声。", pinyin: "Dào le máfan shuō yì shēng." }
+    ]
+  },
+  {
+    key: "payments",
+    titleEn: "Payments",
+    titleZh: "支付",
+    iconHint: "wallet",
+    phrases: [
+      { en: "Don't you accept foreign cards?", zh: "不收外卡吗？", pinyin: "Bù shōu wàikǎ ma?" },
+      { en: "Is cash okay?", zh: "现金可以吗？", pinyin: "Xiànjīn kěyǐ ma?" },
+      { en: "That's too expensive.", zh: "太贵了。", pinyin: "Tài guì le." },
+      { en: "Can it be cheaper?", zh: "便宜点。", pinyin: "Piányi diǎn." },
+      { en: "I'll pay cash.", zh: "我付现金。", pinyin: "Wǒ fù xiànjīn." },
+      { en: "The QR code payment failed.", zh: "扫码失败了。", pinyin: "Sǎomǎ shībài le." },
+      { en: "Do you need the receipt?", zh: "收据要不要？", pinyin: "Shōujù yào bu yào?" }
+    ]
+  },
+  {
+    key: "food",
+    titleEn: "Food",
+    titleZh: "餐饮",
+    iconHint: "bowl",
+    phrases: [
+      { en: "Please make it not spicy.", zh: "不要辣。", pinyin: "Bú yào là." },
+      { en: "No X, I'm allergic.", zh: "不要 X，我过敏。", pinyin: "Bú yào X, wǒ guòmǐn." },
+      { en: "I am vegetarian.", zh: "我吃素。", pinyin: "Wǒ chī sù." },
+      { en: "What is this?", zh: "这是什么？", pinyin: "Zhè shì shénme?" },
+      { en: "What do you recommend?", zh: "推荐什么？", pinyin: "Tuījiàn shénme?" },
+      { en: "Extra rice, please.", zh: "加饭。", pinyin: "Jiā fàn." },
+      { en: "Please pack this to go.", zh: "打包。", pinyin: "Dǎbāo." },
+      { en: "Check, please.", zh: "结账。", pinyin: "Jiézhàng." }
+    ]
+  },
+  {
+    key: "accommodation",
+    titleEn: "Accommodation",
+    titleZh: "住宿",
+    iconHint: "hotel",
+    phrases: [
+      { en: "I want to check in.", zh: "我要办理入住。", pinyin: "Wǒ yào bànlǐ rùzhù." },
+      { en: "What time is check-out?", zh: "几点退房？", pinyin: "Jǐ diǎn tuìfáng?" },
+      { en: "What is the Wi-Fi password?", zh: "Wi-Fi 密码是多少？", pinyin: "Wi-Fi mìmǎ shì duōshǎo?" },
+      { en: "What time is breakfast?", zh: "早餐几点？", pinyin: "Zǎocān jǐ diǎn?" },
+      { en: "Can I store my luggage?", zh: "可以寄存行李吗？", pinyin: "Kěyǐ jìcún xíngli ma?" },
+      { en: "Can we add an extra bed?", zh: "可以加张床吗？", pinyin: "Kěyǐ jiā zhāng chuáng ma?" }
+    ]
+  },
+  {
+    key: "emergency",
+    titleEn: "Emergency",
+    titleZh: "应急",
+    iconHint: "sos",
+    phrases: [
+      { en: "Help me!", zh: "救救我！", pinyin: "Jiùjiu wǒ!" },
+      { en: "I am sick.", zh: "我生病了。", pinyin: "Wǒ shēngbìng le." },
+      { en: "My passport is lost.", zh: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le." },
+      { en: "Call an ambulance.", zh: "叫救护车。", pinyin: "Jiào jiùhùchē." },
+      { en: "Call the police.", zh: "报警。", pinyin: "Bàojǐng." },
+      { en: "My wallet was stolen.", zh: "我的钱包被偷了。", pinyin: "Wǒ de qiánbāo bèi tōu le." },
+      { en: "Give me some water, please.", zh: "给我点水。", pinyin: "Gěi wǒ diǎn shuǐ." }
+    ]
+  },
+  {
+    key: "shopping",
+    titleEn: "Shopping",
+    titleZh: "购物",
+    iconHint: "bag",
+    phrases: [
+      { en: "How much is it?", zh: "多少钱？", pinyin: "Duōshǎo qián?" },
+      { en: "Can I try it on?", zh: "可以试穿吗？", pinyin: "Kěyǐ shìchuān ma?" },
+      { en: "I don't want it.", zh: "不要。", pinyin: "Bú yào." },
+      { en: "I'm just looking.", zh: "我看看。", pinyin: "Wǒ kànkan." },
+      { en: "Can I return it?", zh: "可以退货吗？", pinyin: "Kěyǐ tuìhuò ma?" },
+      { en: "Can I use a credit card?", zh: "信用卡能用吗？", pinyin: "Xìnyòngkǎ néng yòng ma?" },
+      { en: "Please wrap it up.", zh: "包起来。", pinyin: "Bāo qǐlai." }
+    ]
+  }
+];
+
+export const phrasebookTotal = phraseCategories.reduce((total, category) => total + category.phrases.length, 0);
diff --git a/v2/src/pages/PhrasebookPage.tsx b/v2/src/pages/PhrasebookPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..8483ac6f69107fdad6e07c92976d67b1b78b69aa
--- /dev/null
+++ b/v2/src/pages/PhrasebookPage.tsx
@@ -0,0 +1,161 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { phraseCategories, phrasebookTotal, type Phrase } from "../data/phrasebook";
+import { useLang } from "../store/language";
+
+const defaultCategory = phraseCategories[0];
+
+function copyText(text: string): Promise<void> {
+  if (navigator.clipboard) {
+    return navigator.clipboard.writeText(text);
+  }
+
+  return new Promise((resolve, reject) => {
+    const textarea = document.createElement("textarea");
+    textarea.value = text;
+    textarea.setAttribute("readonly", "");
+    textarea.style.position = "fixed";
+    textarea.style.top = "-1000px";
+    document.body.appendChild(textarea);
+    textarea.select();
+
+    const copied = document.execCommand("copy");
+    document.body.removeChild(textarea);
+
+    if (copied) {
+      resolve();
+      return;
+    }
+    reject(new Error("Copy failed"));
+  });
+}
+
+export default function PhrasebookPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeKey, setActiveKey] = useState(defaultCategory.key);
+  const [copiedZh, setCopiedZh] = useState<string | null>(null);
+  const activeCategory = phraseCategories.find((category) => category.key === activeKey) ?? defaultCategory;
+
+  async function handleCopy(phrase: Phrase) {
+    await copyText(phrase.zh);
+    setCopiedZh(phrase.zh);
+    window.setTimeout(() => {
+      setCopiedZh((current) => (current === phrase.zh ? null : current));
+    }, 1400);
+  }
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-3">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <div className="flex flex-col gap-2">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            Essential phrases / 应急短语
+          </span>
+          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+            Essential Phrasebook / 应急短语手册
+          </h1>
+          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
+            English, pinyin, and Chinese for taxis, hotels, food, payments, shopping, and emergencies. / 覆盖打车、住宿、点餐、支付、购物和紧急情况。
+          </p>
+          <p className="text-xs font-bold uppercase tracking-widest text-jade">
+            {phrasebookTotal} phrases / {phrasebookTotal} 句
+          </p>
+        </div>
+      </header>
+
+      <section className="flex flex-col gap-4" aria-label="Phrase categories">
+        <div
+          role="tablist"
+          aria-label="Phrase categories / 短语场景"
+          className="flex gap-2 overflow-x-auto pb-1"
+        >
+          {phraseCategories.map((category) => {
+            const active = category.key === activeCategory.key;
+            return (
+              <button
+                key={category.key}
+                id={`phrasebook-tab-${category.key}`}
+                type="button"
+                role="tab"
+                aria-selected={active}
+                aria-controls={`phrasebook-panel-${category.key}`}
+                onClick={() => setActiveKey(category.key)}
+                className={clsx(
+                  "flex min-w-36 shrink-0 flex-col gap-1 rounded-lg border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                  active
+                    ? "border-ink bg-ink text-white shadow-sm"
+                    : "border-line bg-white text-ink hover:border-jade"
+                )}
+              >
+                <span className={clsx("text-[10px] font-bold uppercase tracking-widest", active ? "text-white/70" : "text-muted")}>
+                  {category.iconHint}
+                </span>
+                <span className="text-sm font-bold leading-tight">{category.titleEn}</span>
+                <span className={clsx("text-xs leading-tight", active ? "text-white/80" : "text-muted")}>
+                  {category.titleZh} · {category.phrases.length}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <div
+          id={`phrasebook-panel-${activeCategory.key}`}
+          role="tabpanel"
+          aria-labelledby={`phrasebook-tab-${activeCategory.key}`}
+          className="flex flex-col gap-3"
+        >
+          <header className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-2">
+            <div>
+              <h2 className="text-2xl font-bold leading-tight">
+                {activeCategory.titleEn} / {activeCategory.titleZh}
+              </h2>
+              <p className="text-xs text-muted">
+                {activeCategory.phrases.length} phrases / {activeCategory.phrases.length} 句
+              </p>
+            </div>
+          </header>
+
+          <ul className="grid gap-3">
+            {activeCategory.phrases.map((phrase) => {
+              const copied = copiedZh === phrase.zh;
+              return (
+                <li key={`${activeCategory.key}-${phrase.zh}`}>
+                  <article className="grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
+                    <div className="min-w-0">
+                      <p className="break-words text-base font-bold leading-snug">{phrase.en}</p>
+                      <p className="mt-1 break-words text-sm font-semibold leading-snug text-jade">
+                        {phrase.pinyin}
+                      </p>
+                      <p className="mt-1 break-words text-lg font-bold leading-snug">{phrase.zh}</p>
+                    </div>
+                    <button
+                      type="button"
+                      aria-label={`Copy Chinese phrase: ${phrase.zh}`}
+                      onClick={() => {
+                        void handleCopy(phrase);
+                      }}
+                      className={clsx(
+                        "h-10 rounded-lg border px-4 text-xs font-bold uppercase tracking-widest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                        copied
+                          ? "border-jade bg-jade text-white"
+                          : "border-line bg-paper text-ink hover:border-jade hover:bg-jade-soft"
+                      )}
+                    >
+                      {copied ? (isZh ? "已复制" : "Copied") : isZh ? "复制" : "Copy"}
+                    </button>
+                  </article>
+                </li>
+              );
+            })}
+          </ul>
+        </div>
+      </section>
+    </main>
+  );
+}

diff --git a/v2/src/data/phrasebook.ts b/v2/src/data/phrasebook.ts
new file mode 100644
index 0000000000000000000000000000000000000000..fe01e699a457ed6e7ca8b2485ae7045c5fcde9a1
--- /dev/null
+++ b/v2/src/data/phrasebook.ts
@@ -0,0 +1,122 @@
+export type Phrase = { en: string; zh: string; pinyin: string };
+
+export type PhraseCategory = {
+  key: string;
+  titleEn: string;
+  titleZh: string;
+  iconHint?: string;
+  phrases: Phrase[];
+};
+
+export const phraseCategories: PhraseCategory[] = [
+  {
+    key: "basics",
+    titleEn: "Basics",
+    titleZh: "基础用语",
+    iconHint: "hello",
+    phrases: [
+      { en: "Hello.", zh: "你好。", pinyin: "Nǐ hǎo." },
+      { en: "Thank you.", zh: "谢谢。", pinyin: "Xièxie." },
+      { en: "Sorry.", zh: "对不起。", pinyin: "Duìbuqǐ." },
+      { en: "I don't understand.", zh: "我听不懂。", pinyin: "Wǒ tīng bù dǒng." },
+      { en: "Please say that again.", zh: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn." },
+      { en: "Please help me.", zh: "请帮我一下。", pinyin: "Qǐng bāng wǒ yí xià." }
+    ]
+  },
+  {
+    key: "transport",
+    titleEn: "Transport",
+    titleZh: "交通",
+    iconHint: "route",
+    phrases: [
+      { en: "How much to X?", zh: "去 X 多少钱？", pinyin: "Qù X duōshǎo qián?" },
+      {
+        en: "How do I get to metro station X?",
+        zh: "地铁 X 站怎么走？",
+        pinyin: "Dìtiě X zhàn zěnme zǒu?"
+      },
+      { en: "I want to take a taxi.", zh: "我要打车。", pinyin: "Wǒ yào dǎchē." },
+      { en: "Driver, please stop here.", zh: "师傅，请停一下。", pinyin: "Shīfu, qǐng tíng yí xià." },
+      { en: "How do I get to the high-speed rail station?", zh: "高铁站怎么走？", pinyin: "Gāotiě zhàn zěnme zǒu?" },
+      { en: "How do I get to the airport?", zh: "机场怎么走？", pinyin: "Jīchǎng zěnme zǒu?" },
+      { en: "Please tell me when we arrive.", zh: "到了麻烦说一声。", pinyin: "Dào le máfan shuō yì shēng." }
+    ]
+  },
+  {
+    key: "payments",
+    titleEn: "Payments",
+    titleZh: "支付",
+    iconHint: "wallet",
+    phrases: [
+      { en: "Don't you accept foreign cards?", zh: "不收外卡吗？", pinyin: "Bù shōu wàikǎ ma?" },
+      { en: "Is cash okay?", zh: "现金可以吗？", pinyin: "Xiànjīn kěyǐ ma?" },
+      { en: "That's too expensive.", zh: "太贵了。", pinyin: "Tài guì le." },
+      { en: "Can it be cheaper?", zh: "便宜点。", pinyin: "Piányi diǎn." },
+      { en: "I'll pay cash.", zh: "我付现金。", pinyin: "Wǒ fù xiànjīn." },
+      { en: "The QR code payment failed.", zh: "扫码失败了。", pinyin: "Sǎomǎ shībài le." },
+      { en: "Do you need the receipt?", zh: "收据要不要？", pinyin: "Shōujù yào bu yào?" }
+    ]
+  },
+  {
+    key: "food",
+    titleEn: "Food",
+    titleZh: "餐饮",
+    iconHint: "bowl",
+    phrases: [
+      { en: "Please make it not spicy.", zh: "不要辣。", pinyin: "Bú yào là." },
+      { en: "No X, I'm allergic.", zh: "不要 X，我过敏。", pinyin: "Bú yào X, wǒ guòmǐn." },
+      { en: "I am vegetarian.", zh: "我吃素。", pinyin: "Wǒ chī sù." },
+      { en: "What is this?", zh: "这是什么？", pinyin: "Zhè shì shénme?" },
+      { en: "What do you recommend?", zh: "推荐什么？", pinyin: "Tuījiàn shénme?" },
+      { en: "Extra rice, please.", zh: "加饭。", pinyin: "Jiā fàn." },
+      { en: "Please pack this to go.", zh: "打包。", pinyin: "Dǎbāo." },
+      { en: "Check, please.", zh: "结账。", pinyin: "Jiézhàng." }
+    ]
+  },
+  {
+    key: "accommodation",
+    titleEn: "Accommodation",
+    titleZh: "住宿",
+    iconHint: "hotel",
+    phrases: [
+      { en: "I want to check in.", zh: "我要办理入住。", pinyin: "Wǒ yào bànlǐ rùzhù." },
+      { en: "What time is check-out?", zh: "几点退房？", pinyin: "Jǐ diǎn tuìfáng?" },
+      { en: "What is the Wi-Fi password?", zh: "Wi-Fi 密码是多少？", pinyin: "Wi-Fi mìmǎ shì duōshǎo?" },
+      { en: "What time is breakfast?", zh: "早餐几点？", pinyin: "Zǎocān jǐ diǎn?" },
+      { en: "Can I store my luggage?", zh: "可以寄存行李吗？", pinyin: "Kěyǐ jìcún xíngli ma?" },
+      { en: "Can we add an extra bed?", zh: "可以加张床吗？", pinyin: "Kěyǐ jiā zhāng chuáng ma?" }
+    ]
+  },
+  {
+    key: "emergency",
+    titleEn: "Emergency",
+    titleZh: "应急",
+    iconHint: "sos",
+    phrases: [
+      { en: "Help me!", zh: "救救我！", pinyin: "Jiùjiu wǒ!" },
+      { en: "I am sick.", zh: "我生病了。", pinyin: "Wǒ shēngbìng le." },
+      { en: "My passport is lost.", zh: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le." },
+      { en: "Call an ambulance.", zh: "叫救护车。", pinyin: "Jiào jiùhùchē." },
+      { en: "Call the police.", zh: "报警。", pinyin: "Bàojǐng." },
+      { en: "My wallet was stolen.", zh: "我的钱包被偷了。", pinyin: "Wǒ de qiánbāo bèi tōu le." },
+      { en: "Give me some water, please.", zh: "给我点水。", pinyin: "Gěi wǒ diǎn shuǐ." }
+    ]
+  },
+  {
+    key: "shopping",
+    titleEn: "Shopping",
+    titleZh: "购物",
+    iconHint: "bag",
+    phrases: [
+      { en: "How much is it?", zh: "多少钱？", pinyin: "Duōshǎo qián?" },
+      { en: "Can I try it on?", zh: "可以试穿吗？", pinyin: "Kěyǐ shìchuān ma?" },
+      { en: "I don't want it.", zh: "不要。", pinyin: "Bú yào." },
+      { en: "I'm just looking.", zh: "我看看。", pinyin: "Wǒ kànkan." },
+      { en: "Can I return it?", zh: "可以退货吗？", pinyin: "Kěyǐ tuìhuò ma?" },
+      { en: "Can I use a credit card?", zh: "信用卡能用吗？", pinyin: "Xìnyòngkǎ néng yòng ma?" },
+      { en: "Please wrap it up.", zh: "包起来。", pinyin: "Bāo qǐlai." }
+    ]
+  }
+];
+
+export const phrasebookTotal = phraseCategories.reduce((total, category) => total + category.phrases.length, 0);
diff --git a/v2/src/pages/PhrasebookPage.tsx b/v2/src/pages/PhrasebookPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..8483ac6f69107fdad6e07c92976d67b1b78b69aa
--- /dev/null
+++ b/v2/src/pages/PhrasebookPage.tsx
@@ -0,0 +1,161 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { phraseCategories, phrasebookTotal, type Phrase } from "../data/phrasebook";
+import { useLang } from "../store/language";
+
+const defaultCategory = phraseCategories[0];
+
+function copyText(text: string): Promise<void> {
+  if (navigator.clipboard) {
+    return navigator.clipboard.writeText(text);
+  }
+
+  return new Promise((resolve, reject) => {
+    const textarea = document.createElement("textarea");
+    textarea.value = text;
+    textarea.setAttribute("readonly", "");
+    textarea.style.position = "fixed";
+    textarea.style.top = "-1000px";
+    document.body.appendChild(textarea);
+    textarea.select();
+
+    const copied = document.execCommand("copy");
+    document.body.removeChild(textarea);
+
+    if (copied) {
+      resolve();
+      return;
+    }
+    reject(new Error("Copy failed"));
+  });
+}
+
+export default function PhrasebookPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeKey, setActiveKey] = useState(defaultCategory.key);
+  const [copiedZh, setCopiedZh] = useState<string | null>(null);
+  const activeCategory = phraseCategories.find((category) => category.key === activeKey) ?? defaultCategory;
+
+  async function handleCopy(phrase: Phrase) {
+    await copyText(phrase.zh);
+    setCopiedZh(phrase.zh);
+    window.setTimeout(() => {
+      setCopiedZh((current) => (current === phrase.zh ? null : current));
+    }, 1400);
+  }
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-3">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <div className="flex flex-col gap-2">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            Essential phrases / 应急短语
+          </span>
+          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+            Essential Phrasebook / 应急短语手册
+          </h1>
+          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
+            English, pinyin, and Chinese for taxis, hotels, food, payments, shopping, and emergencies. / 覆盖打车、住宿、点餐、支付、购物和紧急情况。
+          </p>
+          <p className="text-xs font-bold uppercase tracking-widest text-jade">
+            {phrasebookTotal} phrases / {phrasebookTotal} 句
+          </p>
+        </div>
+      </header>
+
+      <section className="flex flex-col gap-4" aria-label="Phrase categories">
+        <div
+          role="tablist"
+          aria-label="Phrase categories / 短语场景"
+          className="flex gap-2 overflow-x-auto pb-1"
+        >
+          {phraseCategories.map((category) => {
+            const active = category.key === activeCategory.key;
+            return (
+              <button
+                key={category.key}
+                id={`phrasebook-tab-${category.key}`}
+                type="button"
+                role="tab"
+                aria-selected={active}
+                aria-controls={`phrasebook-panel-${category.key}`}
+                onClick={() => setActiveKey(category.key)}
+                className={clsx(
+                  "flex min-w-36 shrink-0 flex-col gap-1 rounded-lg border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                  active
+                    ? "border-ink bg-ink text-white shadow-sm"
+                    : "border-line bg-white text-ink hover:border-jade"
+                )}
+              >
+                <span className={clsx("text-[10px] font-bold uppercase tracking-widest", active ? "text-white/70" : "text-muted")}>
+                  {category.iconHint}
+                </span>
+                <span className="text-sm font-bold leading-tight">{category.titleEn}</span>
+                <span className={clsx("text-xs leading-tight", active ? "text-white/80" : "text-muted")}>
+                  {category.titleZh} · {category.phrases.length}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <div
+          id={`phrasebook-panel-${activeCategory.key}`}
+          role="tabpanel"
+          aria-labelledby={`phrasebook-tab-${activeCategory.key}`}
+          className="flex flex-col gap-3"
+        >
+          <header className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-2">
+            <div>
+              <h2 className="text-2xl font-bold leading-tight">
+                {activeCategory.titleEn} / {activeCategory.titleZh}
+              </h2>
+              <p className="text-xs text-muted">
+                {activeCategory.phrases.length} phrases / {activeCategory.phrases.length} 句
+              </p>
+            </div>
+          </header>
+
+          <ul className="grid gap-3">
+            {activeCategory.phrases.map((phrase) => {
+              const copied = copiedZh === phrase.zh;
+              return (
+                <li key={`${activeCategory.key}-${phrase.zh}`}>
+                  <article className="grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
+                    <div className="min-w-0">
+                      <p className="break-words text-base font-bold leading-snug">{phrase.en}</p>
+                      <p className="mt-1 break-words text-sm font-semibold leading-snug text-jade">
+                        {phrase.pinyin}
+                      </p>
+                      <p className="mt-1 break-words text-lg font-bold leading-snug">{phrase.zh}</p>
+                    </div>
+                    <button
+                      type="button"
+                      aria-label={`Copy Chinese phrase: ${phrase.zh}`}
+                      onClick={() => {
+                        void handleCopy(phrase);
+                      }}
+                      className={clsx(
+                        "h-10 rounded-lg border px-4 text-xs font-bold uppercase tracking-widest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                        copied
+                          ? "border-jade bg-jade text-white"
+                          : "border-line bg-paper text-ink hover:border-jade hover:bg-jade-soft"
+                      )}
+                    >
+                      {copied ? (isZh ? "已复制" : "Copied") : isZh ? "复制" : "Copy"}
+                    </button>
+                  </article>
+                </li>
+              );
+            })}
+          </ul>
+        </div>
+      </section>
+    </main>
+  );
+}

codex
页面骨架已加好；我现在把路由、预渲染、sitemap、首页入口和顶部导航接入。
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\public\sitemap.xml
c:\Users\h\Documents\New project 2\v2\react-router.config.ts
c:\Users\h\Documents\New project 2\v2\src\components\layout\SiteHeader.tsx
c:\Users\h\Documents\New project 2\v2\src\pages\HomePage.tsx
c:\Users\h\Documents\New project 2\v2\src\routes.ts
diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 2f156e1d62f1d87915b8a9c6b94733e1c028523b..adfcabaa94592bf2c136f0a522a2a633d6e892bf
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -9,6 +9,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/phrasebook</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/guide/entry</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index ca6de53a28c5c95b4d22dec4600405e9b2cf06de..0be050a497672fd006dcf773952ba991e41cd9e4
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -7,6 +7,7 @@
     return [
       "/",
       "/map",
+      "/phrasebook",
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index f8fb8569ef2d8617f100e8c55e64133741cab19b..6decfa020c6b81ca4f368a547fcf5d613b8d8789
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,14 +1,28 @@
-import { Link } from "react-router";
-import LanguageSwitch from "./LanguageSwitch";
-
-export default function SiteHeader() {
-  return (
-    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
-      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
-        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
-        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
-      </Link>
-      <LanguageSwitch />
-    </header>
-  );
-}
+import { Link } from "react-router";
+import LanguageSwitch from "./LanguageSwitch";
+import { useLang } from "../../store/language";
+
+export default function SiteHeader() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+
+  return (
+    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
+        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
+        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
+      </Link>
+      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+        <nav aria-label={isZh ? "主导航" : "Main navigation"}>
+          <Link
+            to="/phrasebook"
+            className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted transition hover:border-jade hover:text-jade"
+          >
+            {isZh ? "应急短语" : "Phrases"}
+          </Link>
+        </nav>
+        <LanguageSwitch />
+      </div>
+    </header>
+  );
+}
diff --git a/v2/src/data/phrasebook.ts b/v2/src/data/phrasebook.ts
new file mode 100644
index 0000000000000000000000000000000000000000..fe01e699a457ed6e7ca8b2485ae7045c5fcde9a1
--- /dev/null
+++ b/v2/src/data/phrasebook.ts
@@ -0,0 +1,122 @@
+export type Phrase = { en: string; zh: string; pinyin: string };
+
+export type PhraseCategory = {
+  key: string;
+  titleEn: string;
+  titleZh: string;
+  iconHint?: string;
+  phrases: Phrase[];
+};
+
+export const phraseCategories: PhraseCategory[] = [
+  {
+    key: "basics",
+    titleEn: "Basics",
+    titleZh: "基础用语",
+    iconHint: "hello",
+    phrases: [
+      { en: "Hello.", zh: "你好。", pinyin: "Nǐ hǎo." },
+      { en: "Thank you.", zh: "谢谢。", pinyin: "Xièxie." },
+      { en: "Sorry.", zh: "对不起。", pinyin: "Duìbuqǐ." },
+      { en: "I don't understand.", zh: "我听不懂。", pinyin: "Wǒ tīng bù dǒng." },
+      { en: "Please say that again.", zh: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn." },
+      { en: "Please help me.", zh: "请帮我一下。", pinyin: "Qǐng bāng wǒ yí xià." }
+    ]
+  },
+  {
+    key: "transport",
+    titleEn: "Transport",
+    titleZh: "交通",
+    iconHint: "route",
+    phrases: [
+      { en: "How much to X?", zh: "去 X 多少钱？", pinyin: "Qù X duōshǎo qián?" },
+      {
+        en: "How do I get to metro station X?",
+        zh: "地铁 X 站怎么走？",
+        pinyin: "Dìtiě X zhàn zěnme zǒu?"
+      },
+      { en: "I want to take a taxi.", zh: "我要打车。", pinyin: "Wǒ yào dǎchē." },
+      { en: "Driver, please stop here.", zh: "师傅，请停一下。", pinyin: "Shīfu, qǐng tíng yí xià." },
+      { en: "How do I get to the high-speed rail station?", zh: "高铁站怎么走？", pinyin: "Gāotiě zhàn zěnme zǒu?" },
+      { en: "How do I get to the airport?", zh: "机场怎么走？", pinyin: "Jīchǎng zěnme zǒu?" },
+      { en: "Please tell me when we arrive.", zh: "到了麻烦说一声。", pinyin: "Dào le máfan shuō yì shēng." }
+    ]
+  },
+  {
+    key: "payments",
+    titleEn: "Payments",
+    titleZh: "支付",
+    iconHint: "wallet",
+    phrases: [
+      { en: "Don't you accept foreign cards?", zh: "不收外卡吗？", pinyin: "Bù shōu wàikǎ ma?" },
+      { en: "Is cash okay?", zh: "现金可以吗？", pinyin: "Xiànjīn kěyǐ ma?" },
+      { en: "That's too expensive.", zh: "太贵了。", pinyin: "Tài guì le." },
+      { en: "Can it be cheaper?", zh: "便宜点。", pinyin: "Piányi diǎn." },
+      { en: "I'll pay cash.", zh: "我付现金。", pinyin: "Wǒ fù xiànjīn." },
+      { en: "The QR code payment failed.", zh: "扫码失败了。", pinyin: "Sǎomǎ shībài le." },
+      { en: "Do you need the receipt?", zh: "收据要不要？", pinyin: "Shōujù yào bu yào?" }
+    ]
+  },
+  {
+    key: "food",
+    titleEn: "Food",
+    titleZh: "餐饮",
+    iconHint: "bowl",
+    phrases: [
+      { en: "Please make it not spicy.", zh: "不要辣。", pinyin: "Bú yào là." },
+      { en: "No X, I'm allergic.", zh: "不要 X，我过敏。", pinyin: "Bú yào X, wǒ guòmǐn." },
+      { en: "I am vegetarian.", zh: "我吃素。", pinyin: "Wǒ chī sù." },
+      { en: "What is this?", zh: "这是什么？", pinyin: "Zhè shì shénme?" },
+      { en: "What do you recommend?", zh: "推荐什么？", pinyin: "Tuījiàn shénme?" },
+      { en: "Extra rice, please.", zh: "加饭。", pinyin: "Jiā fàn." },
+      { en: "Please pack this to go.", zh: "打包。", pinyin: "Dǎbāo." },
+      { en: "Check, please.", zh: "结账。", pinyin: "Jiézhàng." }
+    ]
+  },
+  {
+    key: "accommodation",
+    titleEn: "Accommodation",
+    titleZh: "住宿",
+    iconHint: "hotel",
+    phrases: [
+      { en: "I want to check in.", zh: "我要办理入住。", pinyin: "Wǒ yào bànlǐ rùzhù." },
+      { en: "What time is check-out?", zh: "几点退房？", pinyin: "Jǐ diǎn tuìfáng?" },
+      { en: "What is the Wi-Fi password?", zh: "Wi-Fi 密码是多少？", pinyin: "Wi-Fi mìmǎ shì duōshǎo?" },
+      { en: "What time is breakfast?", zh: "早餐几点？", pinyin: "Zǎocān jǐ diǎn?" },
+      { en: "Can I store my luggage?", zh: "可以寄存行李吗？", pinyin: "Kěyǐ jìcún xíngli ma?" },
+      { en: "Can we add an extra bed?", zh: "可以加张床吗？", pinyin: "Kěyǐ jiā zhāng chuáng ma?" }
+    ]
+  },
+  {
+    key: "emergency",
+    titleEn: "Emergency",
+    titleZh: "应急",
+    iconHint: "sos",
+    phrases: [
+      { en: "Help me!", zh: "救救我！", pinyin: "Jiùjiu wǒ!" },
+      { en: "I am sick.", zh: "我生病了。", pinyin: "Wǒ shēngbìng le." },
+      { en: "My passport is lost.", zh: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le." },
+      { en: "Call an ambulance.", zh: "叫救护车。", pinyin: "Jiào jiùhùchē." },
+      { en: "Call the police.", zh: "报警。", pinyin: "Bàojǐng." },
+      { en: "My wallet was stolen.", zh: "我的钱包被偷了。", pinyin: "Wǒ de qiánbāo bèi tōu le." },
+      { en: "Give me some water, please.", zh: "给我点水。", pinyin: "Gěi wǒ diǎn shuǐ." }
+    ]
+  },
+  {
+    key: "shopping",
+    titleEn: "Shopping",
+    titleZh: "购物",
+    iconHint: "bag",
+    phrases: [
+      { en: "How much is it?", zh: "多少钱？", pinyin: "Duōshǎo qián?" },
+      { en: "Can I try it on?", zh: "可以试穿吗？", pinyin: "Kěyǐ shìchuān ma?" },
+      { en: "I don't want it.", zh: "不要。", pinyin: "Bú yào." },
+      { en: "I'm just looking.", zh: "我看看。", pinyin: "Wǒ kànkan." },
+      { en: "Can I return it?", zh: "可以退货吗？", pinyin: "Kěyǐ tuìhuò ma?" },
+      { en: "Can I use a credit card?", zh: "信用卡能用吗？", pinyin: "Xìnyòngkǎ néng yòng ma?" },
+      { en: "Please wrap it up.", zh: "包起来。", pinyin: "Bāo qǐlai." }
+    ]
+  }
+];
+
+export const phrasebookTotal = phraseCategories.reduce((total, category) => total + category.phrases.length, 0);
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 6df6ebff9a6ef16cbeb23919735223f6619a9bee..36d357304a97629e5ccc913861cdd7243596c527
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -8,11 +8,12 @@
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
-const guideLinks = [
-  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
-  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
-  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
-];
+const guideLinks = [
+  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
+  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
+  { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
+];
 
 const websiteJsonLd = {
   "@context": "https://schema.org",
@@ -113,7 +114,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-3">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PhrasebookPage.tsx b/v2/src/pages/PhrasebookPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..8483ac6f69107fdad6e07c92976d67b1b78b69aa
--- /dev/null
+++ b/v2/src/pages/PhrasebookPage.tsx
@@ -0,0 +1,161 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { phraseCategories, phrasebookTotal, type Phrase } from "../data/phrasebook";
+import { useLang } from "../store/language";
+
+const defaultCategory = phraseCategories[0];
+
+function copyText(text: string): Promise<void> {
+  if (navigator.clipboard) {
+    return navigator.clipboard.writeText(text);
+  }
+
+  return new Promise((resolve, reject) => {
+    const textarea = document.createElement("textarea");
+    textarea.value = text;
+    textarea.setAttribute("readonly", "");
+    textarea.style.position = "fixed";
+    textarea.style.top = "-1000px";
+    document.body.appendChild(textarea);
+    textarea.select();
+
+    const copied = document.execCommand("copy");
+    document.body.removeChild(textarea);
+
+    if (copied) {
+      resolve();
+      return;
+    }
+    reject(new Error("Copy failed"));
+  });
+}
+
+export default function PhrasebookPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeKey, setActiveKey] = useState(defaultCategory.key);
+  const [copiedZh, setCopiedZh] = useState<string | null>(null);
+  const activeCategory = phraseCategories.find((category) => category.key === activeKey) ?? defaultCategory;
+
+  async function handleCopy(phrase: Phrase) {
+    await copyText(phrase.zh);
+    setCopiedZh(phrase.zh);
+    window.setTimeout(() => {
+      setCopiedZh((current) => (current === phrase.zh ? null : current));
+    }, 1400);
+  }
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-3">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <div className="flex flex-col gap-2">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            Essential phrases / 应急短语
+          </span>
+          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+            Essential Phrasebook / 应急短语手册
+          </h1>
+          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
+            English, pinyin, and Chinese for taxis, hotels, food, payments, shopping, and emergencies. / 覆盖打车、住宿、点餐、支付、购物和紧急情况。
+          </p>
+          <p className="text-xs font-bold uppercase tracking-widest text-jade">
+            {phrasebookTotal} phrases / {phrasebookTotal} 句
+          </p>
+        </div>
+      </header>
+
+      <section className="flex flex-col gap-4" aria-label="Phrase categories">
+        <div
+          role="tablist"
+          aria-label="Phrase categories / 短语场景"
+          className="flex gap-2 overflow-x-auto pb-1"
+        >
+          {phraseCategories.map((category) => {
+            const active = category.key === activeCategory.key;
+            return (
+              <button
+                key={category.key}
+                id={`phrasebook-tab-${category.key}`}
+                type="button"
+                role="tab"
+                aria-selected={active}
+                aria-controls={`phrasebook-panel-${category.key}`}
+                onClick={() => setActiveKey(category.key)}
+                className={clsx(
+                  "flex min-w-36 shrink-0 flex-col gap-1 rounded-lg border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                  active
+                    ? "border-ink bg-ink text-white shadow-sm"
+                    : "border-line bg-white text-ink hover:border-jade"
+                )}
+              >
+                <span className={clsx("text-[10px] font-bold uppercase tracking-widest", active ? "text-white/70" : "text-muted")}>
+                  {category.iconHint}
+                </span>
+                <span className="text-sm font-bold leading-tight">{category.titleEn}</span>
+                <span className={clsx("text-xs leading-tight", active ? "text-white/80" : "text-muted")}>
+                  {category.titleZh} · {category.phrases.length}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <div
+          id={`phrasebook-panel-${activeCategory.key}`}
+          role="tabpanel"
+          aria-labelledby={`phrasebook-tab-${activeCategory.key}`}
+          className="flex flex-col gap-3"
+        >
+          <header className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-2">
+            <div>
+              <h2 className="text-2xl font-bold leading-tight">
+                {activeCategory.titleEn} / {activeCategory.titleZh}
+              </h2>
+              <p className="text-xs text-muted">
+                {activeCategory.phrases.length} phrases / {activeCategory.phrases.length} 句
+              </p>
+            </div>
+          </header>
+
+          <ul className="grid gap-3">
+            {activeCategory.phrases.map((phrase) => {
+              const copied = copiedZh === phrase.zh;
+              return (
+                <li key={`${activeCategory.key}-${phrase.zh}`}>
+                  <article className="grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
+                    <div className="min-w-0">
+                      <p className="break-words text-base font-bold leading-snug">{phrase.en}</p>
+                      <p className="mt-1 break-words text-sm font-semibold leading-snug text-jade">
+                        {phrase.pinyin}
+                      </p>
+                      <p className="mt-1 break-words text-lg font-bold leading-snug">{phrase.zh}</p>
+                    </div>
+                    <button
+                      type="button"
+                      aria-label={`Copy Chinese phrase: ${phrase.zh}`}
+                      onClick={() => {
+                        void handleCopy(phrase);
+                      }}
+                      className={clsx(
+                        "h-10 rounded-lg border px-4 text-xs font-bold uppercase tracking-widest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                        copied
+                          ? "border-jade bg-jade text-white"
+                          : "border-line bg-paper text-ink hover:border-jade hover:bg-jade-soft"
+                      )}
+                    >
+                      {copied ? (isZh ? "已复制" : "Copied") : isZh ? "复制" : "Copy"}
+                    </button>
+                  </article>
+                </li>
+              );
+            })}
+          </ul>
+        </div>
+      </section>
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index e04b8ab90a3699cfa278f5ea29483bc30edb795f..b9b696df6fa00bc391d8df10bdbce96dcabd580c
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -1,9 +1,10 @@
 import { type RouteConfig, index, route } from "@react-router/dev/routes";
 
 export default [
-  index("./pages/HomePage.tsx"),
-  route("map", "./pages/MapPage.tsx"),
-  route("guide/:topic", "./pages/GuidePage.tsx"),
+  index("./pages/HomePage.tsx"),
+  route("map", "./pages/MapPage.tsx"),
+  route("phrasebook", "./pages/PhrasebookPage.tsx"),
+  route("guide/:topic", "./pages/GuidePage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),

diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 2f156e1d62f1d87915b8a9c6b94733e1c028523b..adfcabaa94592bf2c136f0a522a2a633d6e892bf
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -9,6 +9,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/phrasebook</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/guide/entry</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index ca6de53a28c5c95b4d22dec4600405e9b2cf06de..0be050a497672fd006dcf773952ba991e41cd9e4
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -7,6 +7,7 @@
     return [
       "/",
       "/map",
+      "/phrasebook",
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index f8fb8569ef2d8617f100e8c55e64133741cab19b..6decfa020c6b81ca4f368a547fcf5d613b8d8789
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,14 +1,28 @@
-import { Link } from "react-router";
-import LanguageSwitch from "./LanguageSwitch";
-
-export default function SiteHeader() {
-  return (
-    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
-      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
-        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
-        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
-      </Link>
-      <LanguageSwitch />
-    </header>
-  );
-}
+import { Link } from "react-router";
+import LanguageSwitch from "./LanguageSwitch";
+import { useLang } from "../../store/language";
+
+export default function SiteHeader() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+
+  return (
+    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
+        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
+        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
+      </Link>
+      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+        <nav aria-label={isZh ? "主导航" : "Main navigation"}>
+          <Link
+            to="/phrasebook"
+            className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted transition hover:border-jade hover:text-jade"
+          >
+            {isZh ? "应急短语" : "Phrases"}
+          </Link>
+        </nav>
+        <LanguageSwitch />
+      </div>
+    </header>
+  );
+}
diff --git a/v2/src/data/phrasebook.ts b/v2/src/data/phrasebook.ts
new file mode 100644
index 0000000000000000000000000000000000000000..fe01e699a457ed6e7ca8b2485ae7045c5fcde9a1
--- /dev/null
+++ b/v2/src/data/phrasebook.ts
@@ -0,0 +1,122 @@
+export type Phrase = { en: string; zh: string; pinyin: string };
+
+export type PhraseCategory = {
+  key: string;
+  titleEn: string;
+  titleZh: string;
+  iconHint?: string;
+  phrases: Phrase[];
+};
+
+export const phraseCategories: PhraseCategory[] = [
+  {
+    key: "basics",
+    titleEn: "Basics",
+    titleZh: "基础用语",
+    iconHint: "hello",
+    phrases: [
+      { en: "Hello.", zh: "你好。", pinyin: "Nǐ hǎo." },
+      { en: "Thank you.", zh: "谢谢。", pinyin: "Xièxie." },
+      { en: "Sorry.", zh: "对不起。", pinyin: "Duìbuqǐ." },
+      { en: "I don't understand.", zh: "我听不懂。", pinyin: "Wǒ tīng bù dǒng." },
+      { en: "Please say that again.", zh: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn." },
+      { en: "Please help me.", zh: "请帮我一下。", pinyin: "Qǐng bāng wǒ yí xià." }
+    ]
+  },
+  {
+    key: "transport",
+    titleEn: "Transport",
+    titleZh: "交通",
+    iconHint: "route",
+    phrases: [
+      { en: "How much to X?", zh: "去 X 多少钱？", pinyin: "Qù X duōshǎo qián?" },
+      {
+        en: "How do I get to metro station X?",
+        zh: "地铁 X 站怎么走？",
+        pinyin: "Dìtiě X zhàn zěnme zǒu?"
+      },
+      { en: "I want to take a taxi.", zh: "我要打车。", pinyin: "Wǒ yào dǎchē." },
+      { en: "Driver, please stop here.", zh: "师傅，请停一下。", pinyin: "Shīfu, qǐng tíng yí xià." },
+      { en: "How do I get to the high-speed rail station?", zh: "高铁站怎么走？", pinyin: "Gāotiě zhàn zěnme zǒu?" },
+      { en: "How do I get to the airport?", zh: "机场怎么走？", pinyin: "Jīchǎng zěnme zǒu?" },
+      { en: "Please tell me when we arrive.", zh: "到了麻烦说一声。", pinyin: "Dào le máfan shuō yì shēng." }
+    ]
+  },
+  {
+    key: "payments",
+    titleEn: "Payments",
+    titleZh: "支付",
+    iconHint: "wallet",
+    phrases: [
+      { en: "Don't you accept foreign cards?", zh: "不收外卡吗？", pinyin: "Bù shōu wàikǎ ma?" },
+      { en: "Is cash okay?", zh: "现金可以吗？", pinyin: "Xiànjīn kěyǐ ma?" },
+      { en: "That's too expensive.", zh: "太贵了。", pinyin: "Tài guì le." },
+      { en: "Can it be cheaper?", zh: "便宜点。", pinyin: "Piányi diǎn." },
+      { en: "I'll pay cash.", zh: "我付现金。", pinyin: "Wǒ fù xiànjīn." },
+      { en: "The QR code payment failed.", zh: "扫码失败了。", pinyin: "Sǎomǎ shībài le." },
+      { en: "Do you need the receipt?", zh: "收据要不要？", pinyin: "Shōujù yào bu yào?" }
+    ]
+  },
+  {
+    key: "food",
+    titleEn: "Food",
+    titleZh: "餐饮",
+    iconHint: "bowl",
+    phrases: [
+      { en: "Please make it not spicy.", zh: "不要辣。", pinyin: "Bú yào là." },
+      { en: "No X, I'm allergic.", zh: "不要 X，我过敏。", pinyin: "Bú yào X, wǒ guòmǐn." },
+      { en: "I am vegetarian.", zh: "我吃素。", pinyin: "Wǒ chī sù." },
+      { en: "What is this?", zh: "这是什么？", pinyin: "Zhè shì shénme?" },
+      { en: "What do you recommend?", zh: "推荐什么？", pinyin: "Tuījiàn shénme?" },
+      { en: "Extra rice, please.", zh: "加饭。", pinyin: "Jiā fàn." },
+      { en: "Please pack this to go.", zh: "打包。", pinyin: "Dǎbāo." },
+      { en: "Check, please.", zh: "结账。", pinyin: "Jiézhàng." }
+    ]
+  },
+  {
+    key: "accommodation",
+    titleEn: "Accommodation",
+    titleZh: "住宿",
+    iconHint: "hotel",
+    phrases: [
+      { en: "I want to check in.", zh: "我要办理入住。", pinyin: "Wǒ yào bànlǐ rùzhù." },
+      { en: "What time is check-out?", zh: "几点退房？", pinyin: "Jǐ diǎn tuìfáng?" },
+      { en: "What is the Wi-Fi password?", zh: "Wi-Fi 密码是多少？", pinyin: "Wi-Fi mìmǎ shì duōshǎo?" },
+      { en: "What time is breakfast?", zh: "早餐几点？", pinyin: "Zǎocān jǐ diǎn?" },
+      { en: "Can I store my luggage?", zh: "可以寄存行李吗？", pinyin: "Kěyǐ jìcún xíngli ma?" },
+      { en: "Can we add an extra bed?", zh: "可以加张床吗？", pinyin: "Kěyǐ jiā zhāng chuáng ma?" }
+    ]
+  },
+  {
+    key: "emergency",
+    titleEn: "Emergency",
+    titleZh: "应急",
+    iconHint: "sos",
+    phrases: [
+      { en: "Help me!", zh: "救救我！", pinyin: "Jiùjiu wǒ!" },
+      { en: "I am sick.", zh: "我生病了。", pinyin: "Wǒ shēngbìng le." },
+      { en: "My passport is lost.", zh: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le." },
+      { en: "Call an ambulance.", zh: "叫救护车。", pinyin: "Jiào jiùhùchē." },
+      { en: "Call the police.", zh: "报警。", pinyin: "Bàojǐng." },
+      { en: "My wallet was stolen.", zh: "我的钱包被偷了。", pinyin: "Wǒ de qiánbāo bèi tōu le." },
+      { en: "Give me some water, please.", zh: "给我点水。", pinyin: "Gěi wǒ diǎn shuǐ." }
+    ]
+  },
+  {
+    key: "shopping",
+    titleEn: "Shopping",
+    titleZh: "购物",
+    iconHint: "bag",
+    phrases: [
+      { en: "How much is it?", zh: "多少钱？", pinyin: "Duōshǎo qián?" },
+      { en: "Can I try it on?", zh: "可以试穿吗？", pinyin: "Kěyǐ shìchuān ma?" },
+      { en: "I don't want it.", zh: "不要。", pinyin: "Bú yào." },
+      { en: "I'm just looking.", zh: "我看看。", pinyin: "Wǒ kànkan." },
+      { en: "Can I return it?", zh: "可以退货吗？", pinyin: "Kěyǐ tuìhuò ma?" },
+      { en: "Can I use a credit card?", zh: "信用卡能用吗？", pinyin: "Xìnyòngkǎ néng yòng ma?" },
+      { en: "Please wrap it up.", zh: "包起来。", pinyin: "Bāo qǐlai." }
+    ]
+  }
+];
+
+export const phrasebookTotal = phraseCategories.reduce((total, category) => total + category.phrases.length, 0);
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 6df6ebff9a6ef16cbeb23919735223f6619a9bee..36d357304a97629e5ccc913861cdd7243596c527
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -8,11 +8,12 @@
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
-const guideLinks = [
-  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
-  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
-  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
-];
+const guideLinks = [
+  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
+  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
+  { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
+];
 
 const websiteJsonLd = {
   "@context": "https://schema.org",
@@ -113,7 +114,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-3">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PhrasebookPage.tsx b/v2/src/pages/PhrasebookPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..8483ac6f69107fdad6e07c92976d67b1b78b69aa
--- /dev/null
+++ b/v2/src/pages/PhrasebookPage.tsx
@@ -0,0 +1,161 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { phraseCategories, phrasebookTotal, type Phrase } from "../data/phrasebook";
+import { useLang } from "../store/language";
+
+const defaultCategory = phraseCategories[0];
+
+function copyText(text: string): Promise<void> {
+  if (navigator.clipboard) {
+    return navigator.clipboard.writeText(text);
+  }
+
+  return new Promise((resolve, reject) => {
+    const textarea = document.createElement("textarea");
+    textarea.value = text;
+    textarea.setAttribute("readonly", "");
+    textarea.style.position = "fixed";
+    textarea.style.top = "-1000px";
+    document.body.appendChild(textarea);
+    textarea.select();
+
+    const copied = document.execCommand("copy");
+    document.body.removeChild(textarea);
+
+    if (copied) {
+      resolve();
+      return;
+    }
+    reject(new Error("Copy failed"));
+  });
+}
+
+export default function PhrasebookPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeKey, setActiveKey] = useState(defaultCategory.key);
+  const [copiedZh, setCopiedZh] = useState<string | null>(null);
+  const activeCategory = phraseCategories.find((category) => category.key === activeKey) ?? defaultCategory;
+
+  async function handleCopy(phrase: Phrase) {
+    await copyText(phrase.zh);
+    setCopiedZh(phrase.zh);
+    window.setTimeout(() => {
+      setCopiedZh((current) => (current === phrase.zh ? null : current));
+    }, 1400);
+  }
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-3">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <div className="flex flex-col gap-2">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            Essential phrases / 应急短语
+          </span>
+          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+            Essential Phrasebook / 应急短语手册
+          </h1>
+          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
+            English, pinyin, and Chinese for taxis, hotels, food, payments, shopping, and emergencies. / 覆盖打车、住宿、点餐、支付、购物和紧急情况。
+          </p>
+          <p className="text-xs font-bold uppercase tracking-widest text-jade">
+            {phrasebookTotal} phrases / {phrasebookTotal} 句
+          </p>
+        </div>
+      </header>
+
+      <section className="flex flex-col gap-4" aria-label="Phrase categories">
+        <div
+          role="tablist"
+          aria-label="Phrase categories / 短语场景"
+          className="flex gap-2 overflow-x-auto pb-1"
+        >
+          {phraseCategories.map((category) => {
+            const active = category.key === activeCategory.key;
+            return (
+              <button
+                key={category.key}
+                id={`phrasebook-tab-${category.key}`}
+                type="button"
+                role="tab"
+                aria-selected={active}
+                aria-controls={`phrasebook-panel-${category.key}`}
+                onClick={() => setActiveKey(category.key)}
+                className={clsx(
+                  "flex min-w-36 shrink-0 flex-col gap-1 rounded-lg border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                  active
+                    ? "border-ink bg-ink text-white shadow-sm"
+                    : "border-line bg-white text-ink hover:border-jade"
+                )}
+              >
+                <span className={clsx("text-[10px] font-bold uppercase tracking-widest", active ? "text-white/70" : "text-muted")}>
+                  {category.iconHint}
+                </span>
+                <span className="text-sm font-bold leading-tight">{category.titleEn}</span>
+                <span className={clsx("text-xs leading-tight", active ? "text-white/80" : "text-muted")}>
+                  {category.titleZh} · {category.phrases.length}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <div
+          id={`phrasebook-panel-${activeCategory.key}`}
+          role="tabpanel"
+          aria-labelledby={`phrasebook-tab-${activeCategory.key}`}
+          className="flex flex-col gap-3"
+        >
+          <header className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-2">
+            <div>
+              <h2 className="text-2xl font-bold leading-tight">
+                {activeCategory.titleEn} / {activeCategory.titleZh}
+              </h2>
+              <p className="text-xs text-muted">
+                {activeCategory.phrases.length} phrases / {activeCategory.phrases.length} 句
+              </p>
+            </div>
+          </header>
+
+          <ul className="grid gap-3">
+            {activeCategory.phrases.map((phrase) => {
+              const copied = copiedZh === phrase.zh;
+              return (
+                <li key={`${activeCategory.key}-${phrase.zh}`}>
+                  <article className="grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
+                    <div className="min-w-0">
+                      <p className="break-words text-base font-bold leading-snug">{phrase.en}</p>
+                      <p className="mt-1 break-words text-sm font-semibold leading-snug text-jade">
+                        {phrase.pinyin}
+                      </p>
+                      <p className="mt-1 break-words text-lg font-bold leading-snug">{phrase.zh}</p>
+                    </div>
+                    <button
+                      type="button"
+                      aria-label={`Copy Chinese phrase: ${phrase.zh}`}
+                      onClick={() => {
+                        void handleCopy(phrase);
+                      }}
+                      className={clsx(
+                        "h-10 rounded-lg border px-4 text-xs font-bold uppercase tracking-widest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                        copied
+                          ? "border-jade bg-jade text-white"
+                          : "border-line bg-paper text-ink hover:border-jade hover:bg-jade-soft"
+                      )}
+                    >
+                      {copied ? (isZh ? "已复制" : "Copied") : isZh ? "复制" : "Copy"}
+                    </button>
+                  </article>
+                </li>
+              );
+            })}
+          </ul>
+        </div>
+      </section>
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index e04b8ab90a3699cfa278f5ea29483bc30edb795f..b9b696df6fa00bc391d8df10bdbce96dcabd580c
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -1,9 +1,10 @@
 import { type RouteConfig, index, route } from "@react-router/dev/routes";
 
 export default [
-  index("./pages/HomePage.tsx"),
-  route("map", "./pages/MapPage.tsx"),
-  route("guide/:topic", "./pages/GuidePage.tsx"),
+  index("./pages/HomePage.tsx"),
+  route("map", "./pages/MapPage.tsx"),
+  route("phrasebook", "./pages/PhrasebookPage.tsx"),
+  route("guide/:topic", "./pages/GuidePage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),

codex
路由和导航已经接上。接下来我先跑 TypeScript，若有类型或构建问题会在同一轮修掉。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
 succeeded in 1307ms:
diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 2f156e1d62f1d87915b8a9c6b94733e1c028523b..adfcabaa94592bf2c136f0a522a2a633d6e892bf
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -9,6 +9,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/phrasebook</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/guide/entry</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index ca6de53a28c5c95b4d22dec4600405e9b2cf06de..0be050a497672fd006dcf773952ba991e41cd9e4
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -7,6 +7,7 @@
     return [
       "/",
       "/map",
+      "/phrasebook",
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index f8fb8569ef2d8617f100e8c55e64133741cab19b..6decfa020c6b81ca4f368a547fcf5d613b8d8789
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,14 +1,28 @@
-import { Link } from "react-router";
-import LanguageSwitch from "./LanguageSwitch";
-
-export default function SiteHeader() {
-  return (
-    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
-      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
-        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
-        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
-      </Link>
-      <LanguageSwitch />
-    </header>
-  );
-}
+import { Link } from "react-router";
+import LanguageSwitch from "./LanguageSwitch";
+import { useLang } from "../../store/language";
+
+export default function SiteHeader() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+
+  return (
+    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
+        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
+        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
+      </Link>
+      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+        <nav aria-label={isZh ? "主导航" : "Main navigation"}>
+          <Link
+            to="/phrasebook"
+            className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted transition hover:border-jade hover:text-jade"
+          >
+            {isZh ? "应急短语" : "Phrases"}
+          </Link>
+        </nav>
+        <LanguageSwitch />
+      </div>
+    </header>
+  );
+}
diff --git a/v2/src/data/phrasebook.ts b/v2/src/data/phrasebook.ts
new file mode 100644
index 0000000000000000000000000000000000000000..fe01e699a457ed6e7ca8b2485ae7045c5fcde9a1
--- /dev/null
+++ b/v2/src/data/phrasebook.ts
@@ -0,0 +1,122 @@
+export type Phrase = { en: string; zh: string; pinyin: string };
+
+export type PhraseCategory = {
+  key: string;
+  titleEn: string;
+  titleZh: string;
+  iconHint?: string;
+  phrases: Phrase[];
+};
+
+export const phraseCategories: PhraseCategory[] = [
+  {
+    key: "basics",
+    titleEn: "Basics",
+    titleZh: "基础用语",
+    iconHint: "hello",
+    phrases: [
+      { en: "Hello.", zh: "你好。", pinyin: "Nǐ hǎo." },
+      { en: "Thank you.", zh: "谢谢。", pinyin: "Xièxie." },
+      { en: "Sorry.", zh: "对不起。", pinyin: "Duìbuqǐ." },
+      { en: "I don't understand.", zh: "我听不懂。", pinyin: "Wǒ tīng bù dǒng." },
+      { en: "Please say that again.", zh: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn." },
+      { en: "Please help me.", zh: "请帮我一下。", pinyin: "Qǐng bāng wǒ yí xià." }
+    ]
+  },
+  {
+    key: "transport",
+    titleEn: "Transport",
+    titleZh: "交通",
+    iconHint: "route",
+    phrases: [
+      { en: "How much to X?", zh: "去 X 多少钱？", pinyin: "Qù X duōshǎo qián?" },
+      {
+        en: "How do I get to metro station X?",
+        zh: "地铁 X 站怎么走？",
+        pinyin: "Dìtiě X zhàn zěnme zǒu?"
+      },
+      { en: "I want to take a taxi.", zh: "我要打车。", pinyin: "Wǒ yào dǎchē." },
+      { en: "Driver, please stop here.", zh: "师傅，请停一下。", pinyin: "Shīfu, qǐng tíng yí xià." },
+      { en: "How do I get to the high-speed rail station?", zh: "高铁站怎么走？", pinyin: "Gāotiě zhàn zěnme zǒu?" },
+      { en: "How do I get to the airport?", zh: "机场怎么走？", pinyin: "Jīchǎng zěnme zǒu?" },
+      { en: "Please tell me when we arrive.", zh: "到了麻烦说一声。", pinyin: "Dào le máfan shuō yì shēng." }
+    ]
+  },
+  {
+    key: "payments",
+    titleEn: "Payments",
+    titleZh: "支付",
+    iconHint: "wallet",
+    phrases: [
+      { en: "Don't you accept foreign cards?", zh: "不收外卡吗？", pinyin: "Bù shōu wàikǎ ma?" },
+      { en: "Is cash okay?", zh: "现金可以吗？", pinyin: "Xiànjīn kěyǐ ma?" },
+      { en: "That's too expensive.", zh: "太贵了。", pinyin: "Tài guì le." },
+      { en: "Can it be cheaper?", zh: "便宜点。", pinyin: "Piányi diǎn." },
+      { en: "I'll pay cash.", zh: "我付现金。", pinyin: "Wǒ fù xiànjīn." },
+      { en: "The QR code payment failed.", zh: "扫码失败了。", pinyin: "Sǎomǎ shībài le." },
+      { en: "Do you need the receipt?", zh: "收据要不要？", pinyin: "Shōujù yào bu yào?" }
+    ]
+  },
+  {
+    key: "food",
+    titleEn: "Food",
+    titleZh: "餐饮",
+    iconHint: "bowl",
+    phrases: [
+      { en: "Please make it not spicy.", zh: "不要辣。", pinyin: "Bú yào là." },
+      { en: "No X, I'm allergic.", zh: "不要 X，我过敏。", pinyin: "Bú yào X, wǒ guòmǐn." },
+      { en: "I am vegetarian.", zh: "我吃素。", pinyin: "Wǒ chī sù." },
+      { en: "What is this?", zh: "这是什么？", pinyin: "Zhè shì shénme?" },
+      { en: "What do you recommend?", zh: "推荐什么？", pinyin: "Tuījiàn shénme?" },
+      { en: "Extra rice, please.", zh: "加饭。", pinyin: "Jiā fàn." },
+      { en: "Please pack this to go.", zh: "打包。", pinyin: "Dǎbāo." },
+      { en: "Check, please.", zh: "结账。", pinyin: "Jiézhàng." }
+    ]
+  },
+  {
+    key: "accommodation",
+    titleEn: "Accommodation",
+    titleZh: "住宿",
+    iconHint: "hotel",
+    phrases: [
+      { en: "I want to check in.", zh: "我要办理入住。", pinyin: "Wǒ yào bànlǐ rùzhù." },
+      { en: "What time is check-out?", zh: "几点退房？", pinyin: "Jǐ diǎn tuìfáng?" },
+      { en: "What is the Wi-Fi password?", zh: "Wi-Fi 密码是多少？", pinyin: "Wi-Fi mìmǎ shì duōshǎo?" },
+      { en: "What time is breakfast?", zh: "早餐几点？", pinyin: "Zǎocān jǐ diǎn?" },
+      { en: "Can I store my luggage?", zh: "可以寄存行李吗？", pinyin: "Kěyǐ jìcún xíngli ma?" },
+      { en: "Can we add an extra bed?", zh: "可以加张床吗？", pinyin: "Kěyǐ jiā zhāng chuáng ma?" }
+    ]
+  },
+  {
+    key: "emergency",
+    titleEn: "Emergency",
+    titleZh: "应急",
+    iconHint: "sos",
+    phrases: [
+      { en: "Help me!", zh: "救救我！", pinyin: "Jiùjiu wǒ!" },
+      { en: "I am sick.", zh: "我生病了。", pinyin: "Wǒ shēngbìng le." },
+      { en: "My passport is lost.", zh: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le." },
+      { en: "Call an ambulance.", zh: "叫救护车。", pinyin: "Jiào jiùhùchē." },
+      { en: "Call the police.", zh: "报警。", pinyin: "Bàojǐng." },
+      { en: "My wallet was stolen.", zh: "我的钱包被偷了。", pinyin: "Wǒ de qiánbāo bèi tōu le." },
+      { en: "Give me some water, please.", zh: "给我点水。", pinyin: "Gěi wǒ diǎn shuǐ." }
+    ]
+  },
+  {
+    key: "shopping",
+    titleEn: "Shopping",
+    titleZh: "购物",
+    iconHint: "bag",
+    phrases: [
+      { en: "How much is it?", zh: "多少钱？", pinyin: "Duōshǎo qián?" },
+      { en: "Can I try it on?", zh: "可以试穿吗？", pinyin: "Kěyǐ shìchuān ma?" },
+      { en: "I don't want it.", zh: "不要。", pinyin: "Bú yào." },
+      { en: "I'm just looking.", zh: "我看看。", pinyin: "Wǒ kànkan." },
+      { en: "Can I return it?", zh: "可以退货吗？", pinyin: "Kěyǐ tuìhuò ma?" },
+      { en: "Can I use a credit card?", zh: "信用卡能用吗？", pinyin: "Xìnyòngkǎ néng yòng ma?" },
+      { en: "Please wrap it up.", zh: "包起来。", pinyin: "Bāo qǐlai." }
+    ]
+  }
+];
+
+export const phrasebookTotal = phraseCategories.reduce((total, category) => total + category.phrases.length, 0);
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 6df6ebff9a6ef16cbeb23919735223f6619a9bee..36d357304a97629e5ccc913861cdd7243596c527
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -8,11 +8,12 @@
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
-const guideLinks = [
-  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
-  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
-  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
-];
+const guideLinks = [
+  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
+  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
+  { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
+];
 
 const websiteJsonLd = {
   "@context": "https://schema.org",
@@ -113,7 +114,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-3">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PhrasebookPage.tsx b/v2/src/pages/PhrasebookPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..8483ac6f69107fdad6e07c92976d67b1b78b69aa
--- /dev/null
+++ b/v2/src/pages/PhrasebookPage.tsx
@@ -0,0 +1,161 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { phraseCategories, phrasebookTotal, type Phrase } from "../data/phrasebook";
+import { useLang } from "../store/language";
+
+const defaultCategory = phraseCategories[0];
+
+function copyText(text: string): Promise<void> {
+  if (navigator.clipboard) {
+    return navigator.clipboard.writeText(text);
+  }
+
+  return new Promise((resolve, reject) => {
+    const textarea = document.createElement("textarea");
+    textarea.value = text;
+    textarea.setAttribute("readonly", "");
+    textarea.style.position = "fixed";
+    textarea.style.top = "-1000px";
+    document.body.appendChild(textarea);
+    textarea.select();
+
+    const copied = document.execCommand("copy");
+    document.body.removeChild(textarea);
+
+    if (copied) {
+      resolve();
+      return;
+    }
+    reject(new Error("Copy failed"));
+  });
+}
+
+export default function PhrasebookPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeKey, setActiveKey] = useState(defaultCategory.key);
+  const [copiedZh, setCopiedZh] = useState<string | null>(null);
+  const activeCategory = phraseCategories.find((category) => category.key === activeKey) ?? defaultCategory;
+
+  async function handleCopy(phrase: Phrase) {
+    await copyText(phrase.zh);
+    setCopiedZh(phrase.zh);
+    window.setTimeout(() => {
+      setCopiedZh((current) => (current === phrase.zh ? null : current));
+    }, 1400);
+  }
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-3">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <div className="flex flex-col gap-2">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            Essential phrases / 应急短语
+          </span>
+          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+            Essential Phrasebook / 应急短语手册
+          </h1>
+          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
+            English, pinyin, and Chinese for taxis, hotels, food, payments, shopping, and emergencies. / 覆盖打车、住宿、点餐、支付、购物和紧急情况。
+          </p>
+          <p className="text-xs font-bold uppercase tracking-widest text-jade">
+            {phrasebookTotal} phrases / {phrasebookTotal} 句
+          </p>
+        </div>
+      </header>
+
+      <section className="flex flex-col gap-4" aria-label="Phrase categories">
+        <div
+          role="tablist"
+          aria-label="Phrase categories / 短语场景"
+          className="flex gap-2 overflow-x-auto pb-1"
+        >
+          {phraseCategories.map((category) => {
+            const active = category.key === activeCategory.key;
+            return (
+              <button
+                key={category.key}
+                id={`phrasebook-tab-${category.key}`}
+                type="button"
+                role="tab"
+                aria-selected={active}
+                aria-controls={`phrasebook-panel-${category.key}`}
+                onClick={() => setActiveKey(category.key)}
+                className={clsx(
+                  "flex min-w-36 shrink-0 flex-col gap-1 rounded-lg border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                  active
+                    ? "border-ink bg-ink text-white shadow-sm"
+                    : "border-line bg-white text-ink hover:border-jade"
+                )}
+              >
+                <span className={clsx("text-[10px] font-bold uppercase tracking-widest", active ? "text-white/70" : "text-muted")}>
+                  {category.iconHint}
+                </span>
+                <span className="text-sm font-bold leading-tight">{category.titleEn}</span>
+                <span className={clsx("text-xs leading-tight", active ? "text-white/80" : "text-muted")}>
+                  {category.titleZh} · {category.phrases.length}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <div
+          id={`phrasebook-panel-${activeCategory.key}`}
+          role="tabpanel"
+          aria-labelledby={`phrasebook-tab-${activeCategory.key}`}
+          className="flex flex-col gap-3"
+        >
+          <header className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-2">
+            <div>
+              <h2 className="text-2xl font-bold leading-tight">
+                {activeCategory.titleEn} / {activeCategory.titleZh}
+              </h2>
+              <p className="text-xs text-muted">
+                {activeCategory.phrases.length} phrases / {activeCategory.phrases.length} 句
+              </p>
+            </div>
+          </header>
+
+          <ul className="grid gap-3">
+            {activeCategory.phrases.map((phrase) => {
+              const copied = copiedZh === phrase.zh;
+              return (
+                <li key={`${activeCategory.key}-${phrase.zh}`}>
+                  <article className="grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
+                    <div className="min-w-0">
+                      <p className="break-words text-base font-bold leading-snug">{phrase.en}</p>
+                      <p className="mt-1 break-words text-sm font-semibold leading-snug text-jade">
+                        {phrase.pinyin}
+                      </p>
+                      <p className="mt-1 break-words text-lg font-bold leading-snug">{phrase.zh}</p>
+                    </div>
+                    <button
+                      type="button"
+                      aria-label={`Copy Chinese phrase: ${phrase.zh}`}
+                      onClick={() => {
+                        void handleCopy(phrase);
+                      }}
+                      className={clsx(
+                        "h-10 rounded-lg border px-4 text-xs font-bold uppercase tracking-widest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                        copied
+                          ? "border-jade bg-jade text-white"
+                          : "border-line bg-paper text-ink hover:border-jade hover:bg-jade-soft"
+                      )}
+                    >
+                      {copied ? (isZh ? "已复制" : "Copied") : isZh ? "复制" : "Copy"}
+                    </button>
+                  </article>
+                </li>
+              );
+            })}
+          </ul>
+        </div>
+      </section>
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index e04b8ab90a3699cfa278f5ea29483bc30edb795f..b9b696df6fa00bc391d8df10bdbce96dcabd580c
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -1,9 +1,10 @@
 import { type RouteConfig, index, route } from "@react-router/dev/routes";
 
 export default [
-  index("./pages/HomePage.tsx"),
-  route("map", "./pages/MapPage.tsx"),
-  route("guide/:topic", "./pages/GuidePage.tsx"),
+  index("./pages/HomePage.tsx"),
+  route("map", "./pages/MapPage.tsx"),
+  route("phrasebook", "./pages/PhrasebookPage.tsx"),
+  route("guide/:topic", "./pages/GuidePage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),

codex
`npx tsc --noEmit` 已通过。现在跑正式构建，确认预渲染和产物生成没有问题。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 8590ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1511 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                     6.62 kB │ gzip:     0.99 kB
build/client/assets/Map3D-B9DDZdqH.css              24.01 kB │ gzip:     5.37 kB
build/client/assets/root-Cu-l_kJq.css               43.33 kB │ gzip:     8.11 kB
build/client/assets/language-d9oYsanb.js             0.26 kB │ gzip:     0.22 kB
build/client/assets/clsx-Dm0G8HgT.js                 0.36 kB │ gzip:     0.23 kB
build/client/assets/jsonLd-wTwnFEg0.js               0.47 kB │ gzip:     0.33 kB
build/client/assets/cityRoutes-CLHvaWZX.js           0.91 kB │ gzip:     0.50 kB
build/client/assets/chunk-BRDp8wQQ.js                0.95 kB │ gzip:     0.56 kB
build/client/assets/provinceColors-BjFtWGNp.js       1.84 kB │ gzip:     0.96 kB
build/client/assets/HomePage-DducRruR.js             6.32 kB │ gzip:     2.93 kB
build/client/assets/SharePage-BRVIuE9F.js            7.48 kB │ gzip:     2.76 kB
build/client/assets/phase2-preview-BnEC14cH.js       7.59 kB │ gzip:     4.48 kB
build/client/assets/AskPage-DXJED0Vm.js              7.62 kB │ gzip:     2.92 kB
build/client/assets/Map3D-Cmbo_S50.js                8.95 kB │ gzip:     4.22 kB
build/client/assets/PhrasebookPage-M28RzUB3.js       8.97 kB │ gzip:     3.81 kB
build/client/assets/GuidePage-Co4R7QY8.js           11.36 kB │ gzip:     5.34 kB
build/client/assets/root-DzdAlllG.js                11.51 kB │ gzip:     5.28 kB
build/client/assets/MapPage-C79U2M_r.js             13.67 kB │ gzip:     5.00 kB
build/client/assets/practical-other--E2Qy77J.js     22.32 kB │ gzip:    10.76 kB
build/client/assets/atlas-D0qorRDu.js               23.24 kB │ gzip:     9.58 kB
build/client/assets/SourcesPage-dNZt5e8K.js         32.19 kB │ gzip:     8.46 kB
build/client/assets/unsplash-8jCuSseR.js            35.00 kB │ gzip:    15.33 kB
build/client/assets/SourcesNote-CU0EECvS.js         39.01 kB │ gzip:    14.91 kB
build/client/assets/CityPage-DhdKstLA.js            53.25 kB │ gzip:    19.96 kB
build/client/assets/jsx-runtime-B5CtIOVj.js        127.17 kB │ gzip:    41.93 kB
build/client/assets/entry.client-B8gvglSo.js       186.53 kB │ gzip:    58.89 kB
build/client/assets/Cesium-CiBs4B83.js           4,724.63 kB │ gzip: 1,304.41 kB

[32m✓ built in 4.71s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 73 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\server-build-Cu-l_kJq.css[22m
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m

Prerender (html): / -> [1mbuild\client\index.html[22m
Prerender (html): /map -> [1mbuild\client\map\index.html[22m
Prerender (html): /phrasebook -> [1mbuild\client\phrasebook\index.html[22m
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
build/server/assets/server-build-Cu-l_kJq.css   43.33 kB │ gzip:   8.11 kB
build/server/assets/Map3D-Cv42P-Ue.js           15.47 kB │ gzip:   5.32 kB
build/server/assets/cityRoutes-Byzkxm76.js      31.42 kB │ gzip:  10.70 kB
build/server/index.js                          335.64 kB │ gzip: 104.56 kB

[32m✓ built in 821ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:dot-server (38%)
  - react-router:virtual-modules (34%)
  - react-router:inject-hmr-runtime (19%)
  - react-router:hmr-runtime (5%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 2f156e1d62f1d87915b8a9c6b94733e1c028523b..adfcabaa94592bf2c136f0a522a2a633d6e892bf
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -9,6 +9,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/phrasebook</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/guide/entry</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index ca6de53a28c5c95b4d22dec4600405e9b2cf06de..0be050a497672fd006dcf773952ba991e41cd9e4
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -7,6 +7,7 @@
     return [
       "/",
       "/map",
+      "/phrasebook",
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index f8fb8569ef2d8617f100e8c55e64133741cab19b..6decfa020c6b81ca4f368a547fcf5d613b8d8789
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,14 +1,28 @@
-import { Link } from "react-router";
-import LanguageSwitch from "./LanguageSwitch";
-
-export default function SiteHeader() {
-  return (
-    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
-      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
-        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
-        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
-      </Link>
-      <LanguageSwitch />
-    </header>
-  );
-}
+import { Link } from "react-router";
+import LanguageSwitch from "./LanguageSwitch";
+import { useLang } from "../../store/language";
+
+export default function SiteHeader() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+
+  return (
+    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
+        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
+        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
+      </Link>
+      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+        <nav aria-label={isZh ? "主导航" : "Main navigation"}>
+          <Link
+            to="/phrasebook"
+            className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted transition hover:border-jade hover:text-jade"
+          >
+            {isZh ? "应急短语" : "Phrases"}
+          </Link>
+        </nav>
+        <LanguageSwitch />
+      </div>
+    </header>
+  );
+}
diff --git a/v2/src/data/phrasebook.ts b/v2/src/data/phrasebook.ts
new file mode 100644
index 0000000000000000000000000000000000000000..fe01e699a457ed6e7ca8b2485ae7045c5fcde9a1
--- /dev/null
+++ b/v2/src/data/phrasebook.ts
@@ -0,0 +1,122 @@
+export type Phrase = { en: string; zh: string; pinyin: string };
+
+export type PhraseCategory = {
+  key: string;
+  titleEn: string;
+  titleZh: string;
+  iconHint?: string;
+  phrases: Phrase[];
+};
+
+export const phraseCategories: PhraseCategory[] = [
+  {
+    key: "basics",
+    titleEn: "Basics",
+    titleZh: "基础用语",
+    iconHint: "hello",
+    phrases: [
+      { en: "Hello.", zh: "你好。", pinyin: "Nǐ hǎo." },
+      { en: "Thank you.", zh: "谢谢。", pinyin: "Xièxie." },
+      { en: "Sorry.", zh: "对不起。", pinyin: "Duìbuqǐ." },
+      { en: "I don't understand.", zh: "我听不懂。", pinyin: "Wǒ tīng bù dǒng." },
+      { en: "Please say that again.", zh: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn." },
+      { en: "Please help me.", zh: "请帮我一下。", pinyin: "Qǐng bāng wǒ yí xià." }
+    ]
+  },
+  {
+    key: "transport",
+    titleEn: "Transport",
+    titleZh: "交通",
+    iconHint: "route",
+    phrases: [
+      { en: "How much to X?", zh: "去 X 多少钱？", pinyin: "Qù X duōshǎo qián?" },
+      {
+        en: "How do I get to metro station X?",
+        zh: "地铁 X 站怎么走？",
+        pinyin: "Dìtiě X zhàn zěnme zǒu?"
+      },
+      { en: "I want to take a taxi.", zh: "我要打车。", pinyin: "Wǒ yào dǎchē." },
+      { en: "Driver, please stop here.", zh: "师傅，请停一下。", pinyin: "Shīfu, qǐng tíng yí xià." },
+      { en: "How do I get to the high-speed rail station?", zh: "高铁站怎么走？", pinyin: "Gāotiě zhàn zěnme zǒu?" },
+      { en: "How do I get to the airport?", zh: "机场怎么走？", pinyin: "Jīchǎng zěnme zǒu?" },
+      { en: "Please tell me when we arrive.", zh: "到了麻烦说一声。", pinyin: "Dào le máfan shuō yì shēng." }
+    ]
+  },
+  {
+    key: "payments",
+    titleEn: "Payments",
+    titleZh: "支付",
+    iconHint: "wallet",
+    phrases: [
+      { en: "Don't you accept foreign cards?", zh: "不收外卡吗？", pinyin: "Bù shōu wàikǎ ma?" },
+      { en: "Is cash okay?", zh: "现金可以吗？", pinyin: "Xiànjīn kěyǐ ma?" },
+      { en: "That's too expensive.", zh: "太贵了。", pinyin: "Tài guì le." },
+      { en: "Can it be cheaper?", zh: "便宜点。", pinyin: "Piányi diǎn." },
+      { en: "I'll pay cash.", zh: "我付现金。", pinyin: "Wǒ fù xiànjīn." },
+      { en: "The QR code payment failed.", zh: "扫码失败了。", pinyin: "Sǎomǎ shībài le." },
+      { en: "Do you need the receipt?", zh: "收据要不要？", pinyin: "Shōujù yào bu yào?" }
+    ]
+  },
+  {
+    key: "food",
+    titleEn: "Food",
+    titleZh: "餐饮",
+    iconHint: "bowl",
+    phrases: [
+      { en: "Please make it not spicy.", zh: "不要辣。", pinyin: "Bú yào là." },
+      { en: "No X, I'm allergic.", zh: "不要 X，我过敏。", pinyin: "Bú yào X, wǒ guòmǐn." },
+      { en: "I am vegetarian.", zh: "我吃素。", pinyin: "Wǒ chī sù." },
+      { en: "What is this?", zh: "这是什么？", pinyin: "Zhè shì shénme?" },
+      { en: "What do you recommend?", zh: "推荐什么？", pinyin: "Tuījiàn shénme?" },
+      { en: "Extra rice, please.", zh: "加饭。", pinyin: "Jiā fàn." },
+      { en: "Please pack this to go.", zh: "打包。", pinyin: "Dǎbāo." },
+      { en: "Check, please.", zh: "结账。", pinyin: "Jiézhàng." }
+    ]
+  },
+  {
+    key: "accommodation",
+    titleEn: "Accommodation",
+    titleZh: "住宿",
+    iconHint: "hotel",
+    phrases: [
+      { en: "I want to check in.", zh: "我要办理入住。", pinyin: "Wǒ yào bànlǐ rùzhù." },
+      { en: "What time is check-out?", zh: "几点退房？", pinyin: "Jǐ diǎn tuìfáng?" },
+      { en: "What is the Wi-Fi password?", zh: "Wi-Fi 密码是多少？", pinyin: "Wi-Fi mìmǎ shì duōshǎo?" },
+      { en: "What time is breakfast?", zh: "早餐几点？", pinyin: "Zǎocān jǐ diǎn?" },
+      { en: "Can I store my luggage?", zh: "可以寄存行李吗？", pinyin: "Kěyǐ jìcún xíngli ma?" },
+      { en: "Can we add an extra bed?", zh: "可以加张床吗？", pinyin: "Kěyǐ jiā zhāng chuáng ma?" }
+    ]
+  },
+  {
+    key: "emergency",
+    titleEn: "Emergency",
+    titleZh: "应急",
+    iconHint: "sos",
+    phrases: [
+      { en: "Help me!", zh: "救救我！", pinyin: "Jiùjiu wǒ!" },
+      { en: "I am sick.", zh: "我生病了。", pinyin: "Wǒ shēngbìng le." },
+      { en: "My passport is lost.", zh: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le." },
+      { en: "Call an ambulance.", zh: "叫救护车。", pinyin: "Jiào jiùhùchē." },
+      { en: "Call the police.", zh: "报警。", pinyin: "Bàojǐng." },
+      { en: "My wallet was stolen.", zh: "我的钱包被偷了。", pinyin: "Wǒ de qiánbāo bèi tōu le." },
+      { en: "Give me some water, please.", zh: "给我点水。", pinyin: "Gěi wǒ diǎn shuǐ." }
+    ]
+  },
+  {
+    key: "shopping",
+    titleEn: "Shopping",
+    titleZh: "购物",
+    iconHint: "bag",
+    phrases: [
+      { en: "How much is it?", zh: "多少钱？", pinyin: "Duōshǎo qián?" },
+      { en: "Can I try it on?", zh: "可以试穿吗？", pinyin: "Kěyǐ shìchuān ma?" },
+      { en: "I don't want it.", zh: "不要。", pinyin: "Bú yào." },
+      { en: "I'm just looking.", zh: "我看看。", pinyin: "Wǒ kànkan." },
+      { en: "Can I return it?", zh: "可以退货吗？", pinyin: "Kěyǐ tuìhuò ma?" },
+      { en: "Can I use a credit card?", zh: "信用卡能用吗？", pinyin: "Xìnyòngkǎ néng yòng ma?" },
+      { en: "Please wrap it up.", zh: "包起来。", pinyin: "Bāo qǐlai." }
+    ]
+  }
+];
+
+export const phrasebookTotal = phraseCategories.reduce((total, category) => total + category.phrases.length, 0);
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 6df6ebff9a6ef16cbeb23919735223f6619a9bee..36d357304a97629e5ccc913861cdd7243596c527
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -8,11 +8,12 @@
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
-const guideLinks = [
-  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
-  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
-  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
-];
+const guideLinks = [
+  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
+  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
+  { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
+];
 
 const websiteJsonLd = {
   "@context": "https://schema.org",
@@ -113,7 +114,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-3">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PhrasebookPage.tsx b/v2/src/pages/PhrasebookPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..8483ac6f69107fdad6e07c92976d67b1b78b69aa
--- /dev/null
+++ b/v2/src/pages/PhrasebookPage.tsx
@@ -0,0 +1,161 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { phraseCategories, phrasebookTotal, type Phrase } from "../data/phrasebook";
+import { useLang } from "../store/language";
+
+const defaultCategory = phraseCategories[0];
+
+function copyText(text: string): Promise<void> {
+  if (navigator.clipboard) {
+    return navigator.clipboard.writeText(text);
+  }
+
+  return new Promise((resolve, reject) => {
+    const textarea = document.createElement("textarea");
+    textarea.value = text;
+    textarea.setAttribute("readonly", "");
+    textarea.style.position = "fixed";
+    textarea.style.top = "-1000px";
+    document.body.appendChild(textarea);
+    textarea.select();
+
+    const copied = document.execCommand("copy");
+    document.body.removeChild(textarea);
+
+    if (copied) {
+      resolve();
+      return;
+    }
+    reject(new Error("Copy failed"));
+  });
+}
+
+export default function PhrasebookPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeKey, setActiveKey] = useState(defaultCategory.key);
+  const [copiedZh, setCopiedZh] = useState<string | null>(null);
+  const activeCategory = phraseCategories.find((category) => category.key === activeKey) ?? defaultCategory;
+
+  async function handleCopy(phrase: Phrase) {
+    await copyText(phrase.zh);
+    setCopiedZh(phrase.zh);
+    window.setTimeout(() => {
+      setCopiedZh((current) => (current === phrase.zh ? null : current));
+    }, 1400);
+  }
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-3">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <div className="flex flex-col gap-2">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            Essential phrases / 应急短语
+          </span>
+          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+            Essential Phrasebook / 应急短语手册
+          </h1>
+          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
+            English, pinyin, and Chinese for taxis, hotels, food, payments, shopping, and emergencies. / 覆盖打车、住宿、点餐、支付、购物和紧急情况。
+          </p>
+          <p className="text-xs font-bold uppercase tracking-widest text-jade">
+            {phrasebookTotal} phrases / {phrasebookTotal} 句
+          </p>
+        </div>
+      </header>
+
+      <section className="flex flex-col gap-4" aria-label="Phrase categories">
+        <div
+          role="tablist"
+          aria-label="Phrase categories / 短语场景"
+          className="flex gap-2 overflow-x-auto pb-1"
+        >
+          {phraseCategories.map((category) => {
+            const active = category.key === activeCategory.key;
+            return (
+              <button
+                key={category.key}
+                id={`phrasebook-tab-${category.key}`}
+                type="button"
+                role="tab"
+                aria-selected={active}
+                aria-controls={`phrasebook-panel-${category.key}`}
+                onClick={() => setActiveKey(category.key)}
+                className={clsx(
+                  "flex min-w-36 shrink-0 flex-col gap-1 rounded-lg border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                  active
+                    ? "border-ink bg-ink text-white shadow-sm"
+                    : "border-line bg-white text-ink hover:border-jade"
+                )}
+              >
+                <span className={clsx("text-[10px] font-bold uppercase tracking-widest", active ? "text-white/70" : "text-muted")}>
+                  {category.iconHint}
+                </span>
+                <span className="text-sm font-bold leading-tight">{category.titleEn}</span>
+                <span className={clsx("text-xs leading-tight", active ? "text-white/80" : "text-muted")}>
+                  {category.titleZh} · {category.phrases.length}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <div
+          id={`phrasebook-panel-${activeCategory.key}`}
+          role="tabpanel"
+          aria-labelledby={`phrasebook-tab-${activeCategory.key}`}
+          className="flex flex-col gap-3"
+        >
+          <header className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-2">
+            <div>
+              <h2 className="text-2xl font-bold leading-tight">
+                {activeCategory.titleEn} / {activeCategory.titleZh}
+              </h2>
+              <p className="text-xs text-muted">
+                {activeCategory.phrases.length} phrases / {activeCategory.phrases.length} 句
+              </p>
+            </div>
+          </header>
+
+          <ul className="grid gap-3">
+            {activeCategory.phrases.map((phrase) => {
+              const copied = copiedZh === phrase.zh;
+              return (
+                <li key={`${activeCategory.key}-${phrase.zh}`}>
+                  <article className="grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
+                    <div className="min-w-0">
+                      <p className="break-words text-base font-bold leading-snug">{phrase.en}</p>
+                      <p className="mt-1 break-words text-sm font-semibold leading-snug text-jade">
+                        {phrase.pinyin}
+                      </p>
+                      <p className="mt-1 break-words text-lg font-bold leading-snug">{phrase.zh}</p>
+                    </div>
+                    <button
+                      type="button"
+                      aria-label={`Copy Chinese phrase: ${phrase.zh}`}
+                      onClick={() => {
+                        void handleCopy(phrase);
+                      }}
+                      className={clsx(
+                        "h-10 rounded-lg border px-4 text-xs font-bold uppercase tracking-widest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                        copied
+                          ? "border-jade bg-jade text-white"
+                          : "border-line bg-paper text-ink hover:border-jade hover:bg-jade-soft"
+                      )}
+                    >
+                      {copied ? (isZh ? "已复制" : "Copied") : isZh ? "复制" : "Copy"}
+                    </button>
+                  </article>
+                </li>
+              );
+            })}
+          </ul>
+        </div>
+      </section>
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index e04b8ab90a3699cfa278f5ea29483bc30edb795f..b9b696df6fa00bc391d8df10bdbce96dcabd580c
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -1,9 +1,10 @@
 import { type RouteConfig, index, route } from "@react-router/dev/routes";
 
 export default [
-  index("./pages/HomePage.tsx"),
-  route("map", "./pages/MapPage.tsx"),
-  route("guide/:topic", "./pages/GuidePage.tsx"),
+  index("./pages/HomePage.tsx"),
+  route("map", "./pages/MapPage.tsx"),
+  route("phrasebook", "./pages/PhrasebookPage.tsx"),
+  route("guide/:topic", "./pages/GuidePage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),

codex
构建也通过了，`/phrasebook` 已被预渲染出来。最后我核对一下改动范围和短语总数，确保报告里的数字准确。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg \"\\{ en:\" src\\data\\phrasebook.ts | Measure-Object | Select-Object -ExpandProperty Count" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git diff --stat -- v2/src/data/phrasebook.ts v2/src/pages/PhrasebookPage.tsx v2/src/routes.ts v2/react-router.config.ts v2/public/sitemap.xml v2/src/pages/HomePage.tsx v2/src/components/layout/SiteHeader.tsx' in c:\Users\h\Documents\New project 2
 succeeded in 605ms:
 M v2/public/sitemap.xml
 M v2/react-router.config.ts
 M v2/src/components/layout/SiteHeader.tsx
 M v2/src/pages/HomePage.tsx
 M v2/src/root.tsx
 M v2/src/routes.ts
?? v2/src/components/common/ScrollToTop.tsx
?? v2/src/data/phrasebook.ts
?? v2/src/pages/PhrasebookPage.tsx

 succeeded in 609ms:
48

 succeeded in 621ms:
 v2/public/sitemap.xml                   |  4 ++++
 v2/react-router.config.ts               |  1 +
 v2/src/components/layout/SiteHeader.tsx | 18 ++++++++++++++++--
 v2/src/pages/HomePage.tsx               |  5 +++--
 v2/src/routes.ts                        |  1 +
 5 files changed, 25 insertions(+), 4 deletions(-)
warning: in the working copy of 'v2/public/sitemap.xml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/react-router.config.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/layout/SiteHeader.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/pages/HomePage.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/routes.ts', LF will be replaced by CRLF the next time Git touches it

diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 2f156e1d62f1d87915b8a9c6b94733e1c028523b..adfcabaa94592bf2c136f0a522a2a633d6e892bf
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -9,6 +9,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/phrasebook</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/guide/entry</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index ca6de53a28c5c95b4d22dec4600405e9b2cf06de..0be050a497672fd006dcf773952ba991e41cd9e4
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -7,6 +7,7 @@
     return [
       "/",
       "/map",
+      "/phrasebook",
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index f8fb8569ef2d8617f100e8c55e64133741cab19b..6decfa020c6b81ca4f368a547fcf5d613b8d8789
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,14 +1,28 @@
-import { Link } from "react-router";
-import LanguageSwitch from "./LanguageSwitch";
-
-export default function SiteHeader() {
-  return (
-    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
-      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
-        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
-        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
-      </Link>
-      <LanguageSwitch />
-    </header>
-  );
-}
+import { Link } from "react-router";
+import LanguageSwitch from "./LanguageSwitch";
+import { useLang } from "../../store/language";
+
+export default function SiteHeader() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+
+  return (
+    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
+        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
+        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
+      </Link>
+      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+        <nav aria-label={isZh ? "主导航" : "Main navigation"}>
+          <Link
+            to="/phrasebook"
+            className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted transition hover:border-jade hover:text-jade"
+          >
+            {isZh ? "应急短语" : "Phrases"}
+          </Link>
+        </nav>
+        <LanguageSwitch />
+      </div>
+    </header>
+  );
+}
diff --git a/v2/src/data/phrasebook.ts b/v2/src/data/phrasebook.ts
new file mode 100644
index 0000000000000000000000000000000000000000..fe01e699a457ed6e7ca8b2485ae7045c5fcde9a1
--- /dev/null
+++ b/v2/src/data/phrasebook.ts
@@ -0,0 +1,122 @@
+export type Phrase = { en: string; zh: string; pinyin: string };
+
+export type PhraseCategory = {
+  key: string;
+  titleEn: string;
+  titleZh: string;
+  iconHint?: string;
+  phrases: Phrase[];
+};
+
+export const phraseCategories: PhraseCategory[] = [
+  {
+    key: "basics",
+    titleEn: "Basics",
+    titleZh: "基础用语",
+    iconHint: "hello",
+    phrases: [
+      { en: "Hello.", zh: "你好。", pinyin: "Nǐ hǎo." },
+      { en: "Thank you.", zh: "谢谢。", pinyin: "Xièxie." },
+      { en: "Sorry.", zh: "对不起。", pinyin: "Duìbuqǐ." },
+      { en: "I don't understand.", zh: "我听不懂。", pinyin: "Wǒ tīng bù dǒng." },
+      { en: "Please say that again.", zh: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn." },
+      { en: "Please help me.", zh: "请帮我一下。", pinyin: "Qǐng bāng wǒ yí xià." }
+    ]
+  },
+  {
+    key: "transport",
+    titleEn: "Transport",
+    titleZh: "交通",
+    iconHint: "route",
+    phrases: [
+      { en: "How much to X?", zh: "去 X 多少钱？", pinyin: "Qù X duōshǎo qián?" },
+      {
+        en: "How do I get to metro station X?",
+        zh: "地铁 X 站怎么走？",
+        pinyin: "Dìtiě X zhàn zěnme zǒu?"
+      },
+      { en: "I want to take a taxi.", zh: "我要打车。", pinyin: "Wǒ yào dǎchē." },
+      { en: "Driver, please stop here.", zh: "师傅，请停一下。", pinyin: "Shīfu, qǐng tíng yí xià." },
+      { en: "How do I get to the high-speed rail station?", zh: "高铁站怎么走？", pinyin: "Gāotiě zhàn zěnme zǒu?" },
+      { en: "How do I get to the airport?", zh: "机场怎么走？", pinyin: "Jīchǎng zěnme zǒu?" },
+      { en: "Please tell me when we arrive.", zh: "到了麻烦说一声。", pinyin: "Dào le máfan shuō yì shēng." }
+    ]
+  },
+  {
+    key: "payments",
+    titleEn: "Payments",
+    titleZh: "支付",
+    iconHint: "wallet",
+    phrases: [
+      { en: "Don't you accept foreign cards?", zh: "不收外卡吗？", pinyin: "Bù shōu wàikǎ ma?" },
+      { en: "Is cash okay?", zh: "现金可以吗？", pinyin: "Xiànjīn kěyǐ ma?" },
+      { en: "That's too expensive.", zh: "太贵了。", pinyin: "Tài guì le." },
+      { en: "Can it be cheaper?", zh: "便宜点。", pinyin: "Piányi diǎn." },
+      { en: "I'll pay cash.", zh: "我付现金。", pinyin: "Wǒ fù xiànjīn." },
+      { en: "The QR code payment failed.", zh: "扫码失败了。", pinyin: "Sǎomǎ shībài le." },
+      { en: "Do you need the receipt?", zh: "收据要不要？", pinyin: "Shōujù yào bu yào?" }
+    ]
+  },
+  {
+    key: "food",
+    titleEn: "Food",
+    titleZh: "餐饮",
+    iconHint: "bowl",
+    phrases: [
+      { en: "Please make it not spicy.", zh: "不要辣。", pinyin: "Bú yào là." },
+      { en: "No X, I'm allergic.", zh: "不要 X，我过敏。", pinyin: "Bú yào X, wǒ guòmǐn." },
+      { en: "I am vegetarian.", zh: "我吃素。", pinyin: "Wǒ chī sù." },
+      { en: "What is this?", zh: "这是什么？", pinyin: "Zhè shì shénme?" },
+      { en: "What do you recommend?", zh: "推荐什么？", pinyin: "Tuījiàn shénme?" },
+      { en: "Extra rice, please.", zh: "加饭。", pinyin: "Jiā fàn." },
+      { en: "Please pack this to go.", zh: "打包。", pinyin: "Dǎbāo." },
+      { en: "Check, please.", zh: "结账。", pinyin: "Jiézhàng." }
+    ]
+  },
+  {
+    key: "accommodation",
+    titleEn: "Accommodation",
+    titleZh: "住宿",
+    iconHint: "hotel",
+    phrases: [
+      { en: "I want to check in.", zh: "我要办理入住。", pinyin: "Wǒ yào bànlǐ rùzhù." },
+      { en: "What time is check-out?", zh: "几点退房？", pinyin: "Jǐ diǎn tuìfáng?" },
+      { en: "What is the Wi-Fi password?", zh: "Wi-Fi 密码是多少？", pinyin: "Wi-Fi mìmǎ shì duōshǎo?" },
+      { en: "What time is breakfast?", zh: "早餐几点？", pinyin: "Zǎocān jǐ diǎn?" },
+      { en: "Can I store my luggage?", zh: "可以寄存行李吗？", pinyin: "Kěyǐ jìcún xíngli ma?" },
+      { en: "Can we add an extra bed?", zh: "可以加张床吗？", pinyin: "Kěyǐ jiā zhāng chuáng ma?" }
+    ]
+  },
+  {
+    key: "emergency",
+    titleEn: "Emergency",
+    titleZh: "应急",
+    iconHint: "sos",
+    phrases: [
+      { en: "Help me!", zh: "救救我！", pinyin: "Jiùjiu wǒ!" },
+      { en: "I am sick.", zh: "我生病了。", pinyin: "Wǒ shēngbìng le." },
+      { en: "My passport is lost.", zh: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le." },
+      { en: "Call an ambulance.", zh: "叫救护车。", pinyin: "Jiào jiùhùchē." },
+      { en: "Call the police.", zh: "报警。", pinyin: "Bàojǐng." },
+      { en: "My wallet was stolen.", zh: "我的钱包被偷了。", pinyin: "Wǒ de qiánbāo bèi tōu le." },
+      { en: "Give me some water, please.", zh: "给我点水。", pinyin: "Gěi wǒ diǎn shuǐ." }
+    ]
+  },
+  {
+    key: "shopping",
+    titleEn: "Shopping",
+    titleZh: "购物",
+    iconHint: "bag",
+    phrases: [
+      { en: "How much is it?", zh: "多少钱？", pinyin: "Duōshǎo qián?" },
+      { en: "Can I try it on?", zh: "可以试穿吗？", pinyin: "Kěyǐ shìchuān ma?" },
+      { en: "I don't want it.", zh: "不要。", pinyin: "Bú yào." },
+      { en: "I'm just looking.", zh: "我看看。", pinyin: "Wǒ kànkan." },
+      { en: "Can I return it?", zh: "可以退货吗？", pinyin: "Kěyǐ tuìhuò ma?" },
+      { en: "Can I use a credit card?", zh: "信用卡能用吗？", pinyin: "Xìnyòngkǎ néng yòng ma?" },
+      { en: "Please wrap it up.", zh: "包起来。", pinyin: "Bāo qǐlai." }
+    ]
+  }
+];
+
+export const phrasebookTotal = phraseCategories.reduce((total, category) => total + category.phrases.length, 0);
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 6df6ebff9a6ef16cbeb23919735223f6619a9bee..36d357304a97629e5ccc913861cdd7243596c527
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -8,11 +8,12 @@
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
-const guideLinks = [
-  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
-  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
-  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
-];
+const guideLinks = [
+  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
+  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
+  { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
+];
 
 const websiteJsonLd = {
   "@context": "https://schema.org",
@@ -113,7 +114,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-3">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PhrasebookPage.tsx b/v2/src/pages/PhrasebookPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..8483ac6f69107fdad6e07c92976d67b1b78b69aa
--- /dev/null
+++ b/v2/src/pages/PhrasebookPage.tsx
@@ -0,0 +1,161 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { phraseCategories, phrasebookTotal, type Phrase } from "../data/phrasebook";
+import { useLang } from "../store/language";
+
+const defaultCategory = phraseCategories[0];
+
+function copyText(text: string): Promise<void> {
+  if (navigator.clipboard) {
+    return navigator.clipboard.writeText(text);
+  }
+
+  return new Promise((resolve, reject) => {
+    const textarea = document.createElement("textarea");
+    textarea.value = text;
+    textarea.setAttribute("readonly", "");
+    textarea.style.position = "fixed";
+    textarea.style.top = "-1000px";
+    document.body.appendChild(textarea);
+    textarea.select();
+
+    const copied = document.execCommand("copy");
+    document.body.removeChild(textarea);
+
+    if (copied) {
+      resolve();
+      return;
+    }
+    reject(new Error("Copy failed"));
+  });
+}
+
+export default function PhrasebookPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeKey, setActiveKey] = useState(defaultCategory.key);
+  const [copiedZh, setCopiedZh] = useState<string | null>(null);
+  const activeCategory = phraseCategories.find((category) => category.key === activeKey) ?? defaultCategory;
+
+  async function handleCopy(phrase: Phrase) {
+    await copyText(phrase.zh);
+    setCopiedZh(phrase.zh);
+    window.setTimeout(() => {
+      setCopiedZh((current) => (current === phrase.zh ? null : current));
+    }, 1400);
+  }
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-3">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <div className="flex flex-col gap-2">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            Essential phrases / 应急短语
+          </span>
+          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+            Essential Phrasebook / 应急短语手册
+          </h1>
+          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
+            English, pinyin, and Chinese for taxis, hotels, food, payments, shopping, and emergencies. / 覆盖打车、住宿、点餐、支付、购物和紧急情况。
+          </p>
+          <p className="text-xs font-bold uppercase tracking-widest text-jade">
+            {phrasebookTotal} phrases / {phrasebookTotal} 句
+          </p>
+        </div>
+      </header>
+
+      <section className="flex flex-col gap-4" aria-label="Phrase categories">
+        <div
+          role="tablist"
+          aria-label="Phrase categories / 短语场景"
+          className="flex gap-2 overflow-x-auto pb-1"
+        >
+          {phraseCategories.map((category) => {
+            const active = category.key === activeCategory.key;
+            return (
+              <button
+                key={category.key}
+                id={`phrasebook-tab-${category.key}`}
+                type="button"
+                role="tab"
+                aria-selected={active}
+                aria-controls={`phrasebook-panel-${category.key}`}
+                onClick={() => setActiveKey(category.key)}
+                className={clsx(
+                  "flex min-w-36 shrink-0 flex-col gap-1 rounded-lg border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                  active
+                    ? "border-ink bg-ink text-white shadow-sm"
+                    : "border-line bg-white text-ink hover:border-jade"
+                )}
+              >
+                <span className={clsx("text-[10px] font-bold uppercase tracking-widest", active ? "text-white/70" : "text-muted")}>
+                  {category.iconHint}
+                </span>
+                <span className="text-sm font-bold leading-tight">{category.titleEn}</span>
+                <span className={clsx("text-xs leading-tight", active ? "text-white/80" : "text-muted")}>
+                  {category.titleZh} · {category.phrases.length}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <div
+          id={`phrasebook-panel-${activeCategory.key}`}
+          role="tabpanel"
+          aria-labelledby={`phrasebook-tab-${activeCategory.key}`}
+          className="flex flex-col gap-3"
+        >
+          <header className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-2">
+            <div>
+              <h2 className="text-2xl font-bold leading-tight">
+                {activeCategory.titleEn} / {activeCategory.titleZh}
+              </h2>
+              <p className="text-xs text-muted">
+                {activeCategory.phrases.length} phrases / {activeCategory.phrases.length} 句
+              </p>
+            </div>
+          </header>
+
+          <ul className="grid gap-3">
+            {activeCategory.phrases.map((phrase) => {
+              const copied = copiedZh === phrase.zh;
+              return (
+                <li key={`${activeCategory.key}-${phrase.zh}`}>
+                  <article className="grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
+                    <div className="min-w-0">
+                      <p className="break-words text-base font-bold leading-snug">{phrase.en}</p>
+                      <p className="mt-1 break-words text-sm font-semibold leading-snug text-jade">
+                        {phrase.pinyin}
+                      </p>
+                      <p className="mt-1 break-words text-lg font-bold leading-snug">{phrase.zh}</p>
+                    </div>
+                    <button
+                      type="button"
+                      aria-label={`Copy Chinese phrase: ${phrase.zh}`}
+                      onClick={() => {
+                        void handleCopy(phrase);
+                      }}
+                      className={clsx(
+                        "h-10 rounded-lg border px-4 text-xs font-bold uppercase tracking-widest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                        copied
+                          ? "border-jade bg-jade text-white"
+                          : "border-line bg-paper text-ink hover:border-jade hover:bg-jade-soft"
+                      )}
+                    >
+                      {copied ? (isZh ? "已复制" : "Copied") : isZh ? "复制" : "Copy"}
+                    </button>
+                  </article>
+                </li>
+              );
+            })}
+          </ul>
+        </div>
+      </section>
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index e04b8ab90a3699cfa278f5ea29483bc30edb795f..b9b696df6fa00bc391d8df10bdbce96dcabd580c
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -1,9 +1,10 @@
 import { type RouteConfig, index, route } from "@react-router/dev/routes";
 
 export default [
-  index("./pages/HomePage.tsx"),
-  route("map", "./pages/MapPage.tsx"),
-  route("guide/:topic", "./pages/GuidePage.tsx"),
+  index("./pages/HomePage.tsx"),
+  route("map", "./pages/MapPage.tsx"),
+  route("phrasebook", "./pages/PhrasebookPage.tsx"),
+  route("guide/:topic", "./pages/GuidePage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),

codex
核对短语数是 48。顺手补一个剪贴板失败兜底，避免用户拒绝权限时产生未处理的 promise。
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\pages\PhrasebookPage.tsx
diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 2f156e1d62f1d87915b8a9c6b94733e1c028523b..adfcabaa94592bf2c136f0a522a2a633d6e892bf
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -9,6 +9,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/phrasebook</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/guide/entry</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index ca6de53a28c5c95b4d22dec4600405e9b2cf06de..0be050a497672fd006dcf773952ba991e41cd9e4
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -7,6 +7,7 @@
     return [
       "/",
       "/map",
+      "/phrasebook",
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index f8fb8569ef2d8617f100e8c55e64133741cab19b..6decfa020c6b81ca4f368a547fcf5d613b8d8789
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,14 +1,28 @@
-import { Link } from "react-router";
-import LanguageSwitch from "./LanguageSwitch";
-
-export default function SiteHeader() {
-  return (
-    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
-      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
-        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
-        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
-      </Link>
-      <LanguageSwitch />
-    </header>
-  );
-}
+import { Link } from "react-router";
+import LanguageSwitch from "./LanguageSwitch";
+import { useLang } from "../../store/language";
+
+export default function SiteHeader() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+
+  return (
+    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
+        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
+        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
+      </Link>
+      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+        <nav aria-label={isZh ? "主导航" : "Main navigation"}>
+          <Link
+            to="/phrasebook"
+            className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted transition hover:border-jade hover:text-jade"
+          >
+            {isZh ? "应急短语" : "Phrases"}
+          </Link>
+        </nav>
+        <LanguageSwitch />
+      </div>
+    </header>
+  );
+}
diff --git a/v2/src/data/phrasebook.ts b/v2/src/data/phrasebook.ts
new file mode 100644
index 0000000000000000000000000000000000000000..fe01e699a457ed6e7ca8b2485ae7045c5fcde9a1
--- /dev/null
+++ b/v2/src/data/phrasebook.ts
@@ -0,0 +1,122 @@
+export type Phrase = { en: string; zh: string; pinyin: string };
+
+export type PhraseCategory = {
+  key: string;
+  titleEn: string;
+  titleZh: string;
+  iconHint?: string;
+  phrases: Phrase[];
+};
+
+export const phraseCategories: PhraseCategory[] = [
+  {
+    key: "basics",
+    titleEn: "Basics",
+    titleZh: "基础用语",
+    iconHint: "hello",
+    phrases: [
+      { en: "Hello.", zh: "你好。", pinyin: "Nǐ hǎo." },
+      { en: "Thank you.", zh: "谢谢。", pinyin: "Xièxie." },
+      { en: "Sorry.", zh: "对不起。", pinyin: "Duìbuqǐ." },
+      { en: "I don't understand.", zh: "我听不懂。", pinyin: "Wǒ tīng bù dǒng." },
+      { en: "Please say that again.", zh: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn." },
+      { en: "Please help me.", zh: "请帮我一下。", pinyin: "Qǐng bāng wǒ yí xià." }
+    ]
+  },
+  {
+    key: "transport",
+    titleEn: "Transport",
+    titleZh: "交通",
+    iconHint: "route",
+    phrases: [
+      { en: "How much to X?", zh: "去 X 多少钱？", pinyin: "Qù X duōshǎo qián?" },
+      {
+        en: "How do I get to metro station X?",
+        zh: "地铁 X 站怎么走？",
+        pinyin: "Dìtiě X zhàn zěnme zǒu?"
+      },
+      { en: "I want to take a taxi.", zh: "我要打车。", pinyin: "Wǒ yào dǎchē." },
+      { en: "Driver, please stop here.", zh: "师傅，请停一下。", pinyin: "Shīfu, qǐng tíng yí xià." },
+      { en: "How do I get to the high-speed rail station?", zh: "高铁站怎么走？", pinyin: "Gāotiě zhàn zěnme zǒu?" },
+      { en: "How do I get to the airport?", zh: "机场怎么走？", pinyin: "Jīchǎng zěnme zǒu?" },
+      { en: "Please tell me when we arrive.", zh: "到了麻烦说一声。", pinyin: "Dào le máfan shuō yì shēng." }
+    ]
+  },
+  {
+    key: "payments",
+    titleEn: "Payments",
+    titleZh: "支付",
+    iconHint: "wallet",
+    phrases: [
+      { en: "Don't you accept foreign cards?", zh: "不收外卡吗？", pinyin: "Bù shōu wàikǎ ma?" },
+      { en: "Is cash okay?", zh: "现金可以吗？", pinyin: "Xiànjīn kěyǐ ma?" },
+      { en: "That's too expensive.", zh: "太贵了。", pinyin: "Tài guì le." },
+      { en: "Can it be cheaper?", zh: "便宜点。", pinyin: "Piányi diǎn." },
+      { en: "I'll pay cash.", zh: "我付现金。", pinyin: "Wǒ fù xiànjīn." },
+      { en: "The QR code payment failed.", zh: "扫码失败了。", pinyin: "Sǎomǎ shībài le." },
+      { en: "Do you need the receipt?", zh: "收据要不要？", pinyin: "Shōujù yào bu yào?" }
+    ]
+  },
+  {
+    key: "food",
+    titleEn: "Food",
+    titleZh: "餐饮",
+    iconHint: "bowl",
+    phrases: [
+      { en: "Please make it not spicy.", zh: "不要辣。", pinyin: "Bú yào là." },
+      { en: "No X, I'm allergic.", zh: "不要 X，我过敏。", pinyin: "Bú yào X, wǒ guòmǐn." },
+      { en: "I am vegetarian.", zh: "我吃素。", pinyin: "Wǒ chī sù." },
+      { en: "What is this?", zh: "这是什么？", pinyin: "Zhè shì shénme?" },
+      { en: "What do you recommend?", zh: "推荐什么？", pinyin: "Tuījiàn shénme?" },
+      { en: "Extra rice, please.", zh: "加饭。", pinyin: "Jiā fàn." },
+      { en: "Please pack this to go.", zh: "打包。", pinyin: "Dǎbāo." },
+      { en: "Check, please.", zh: "结账。", pinyin: "Jiézhàng." }
+    ]
+  },
+  {
+    key: "accommodation",
+    titleEn: "Accommodation",
+    titleZh: "住宿",
+    iconHint: "hotel",
+    phrases: [
+      { en: "I want to check in.", zh: "我要办理入住。", pinyin: "Wǒ yào bànlǐ rùzhù." },
+      { en: "What time is check-out?", zh: "几点退房？", pinyin: "Jǐ diǎn tuìfáng?" },
+      { en: "What is the Wi-Fi password?", zh: "Wi-Fi 密码是多少？", pinyin: "Wi-Fi mìmǎ shì duōshǎo?" },
+      { en: "What time is breakfast?", zh: "早餐几点？", pinyin: "Zǎocān jǐ diǎn?" },
+      { en: "Can I store my luggage?", zh: "可以寄存行李吗？", pinyin: "Kěyǐ jìcún xíngli ma?" },
+      { en: "Can we add an extra bed?", zh: "可以加张床吗？", pinyin: "Kěyǐ jiā zhāng chuáng ma?" }
+    ]
+  },
+  {
+    key: "emergency",
+    titleEn: "Emergency",
+    titleZh: "应急",
+    iconHint: "sos",
+    phrases: [
+      { en: "Help me!", zh: "救救我！", pinyin: "Jiùjiu wǒ!" },
+      { en: "I am sick.", zh: "我生病了。", pinyin: "Wǒ shēngbìng le." },
+      { en: "My passport is lost.", zh: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le." },
+      { en: "Call an ambulance.", zh: "叫救护车。", pinyin: "Jiào jiùhùchē." },
+      { en: "Call the police.", zh: "报警。", pinyin: "Bàojǐng." },
+      { en: "My wallet was stolen.", zh: "我的钱包被偷了。", pinyin: "Wǒ de qiánbāo bèi tōu le." },
+      { en: "Give me some water, please.", zh: "给我点水。", pinyin: "Gěi wǒ diǎn shuǐ." }
+    ]
+  },
+  {
+    key: "shopping",
+    titleEn: "Shopping",
+    titleZh: "购物",
+    iconHint: "bag",
+    phrases: [
+      { en: "How much is it?", zh: "多少钱？", pinyin: "Duōshǎo qián?" },
+      { en: "Can I try it on?", zh: "可以试穿吗？", pinyin: "Kěyǐ shìchuān ma?" },
+      { en: "I don't want it.", zh: "不要。", pinyin: "Bú yào." },
+      { en: "I'm just looking.", zh: "我看看。", pinyin: "Wǒ kànkan." },
+      { en: "Can I return it?", zh: "可以退货吗？", pinyin: "Kěyǐ tuìhuò ma?" },
+      { en: "Can I use a credit card?", zh: "信用卡能用吗？", pinyin: "Xìnyòngkǎ néng yòng ma?" },
+      { en: "Please wrap it up.", zh: "包起来。", pinyin: "Bāo qǐlai." }
+    ]
+  }
+];
+
+export const phrasebookTotal = phraseCategories.reduce((total, category) => total + category.phrases.length, 0);
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 6df6ebff9a6ef16cbeb23919735223f6619a9bee..36d357304a97629e5ccc913861cdd7243596c527
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -8,11 +8,12 @@
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
-const guideLinks = [
-  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
-  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
-  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
-];
+const guideLinks = [
+  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
+  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
+  { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
+];
 
 const websiteJsonLd = {
   "@context": "https://schema.org",
@@ -113,7 +114,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-3">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PhrasebookPage.tsx b/v2/src/pages/PhrasebookPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..a4aaa028248fdc7bf36108427495b7186fdc29b7
--- /dev/null
+++ b/v2/src/pages/PhrasebookPage.tsx
@@ -0,0 +1,165 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { phraseCategories, phrasebookTotal, type Phrase } from "../data/phrasebook";
+import { useLang } from "../store/language";
+
+const defaultCategory = phraseCategories[0];
+
+function copyText(text: string): Promise<void> {
+  if (navigator.clipboard) {
+    return navigator.clipboard.writeText(text);
+  }
+
+  return new Promise((resolve, reject) => {
+    const textarea = document.createElement("textarea");
+    textarea.value = text;
+    textarea.setAttribute("readonly", "");
+    textarea.style.position = "fixed";
+    textarea.style.top = "-1000px";
+    document.body.appendChild(textarea);
+    textarea.select();
+
+    const copied = document.execCommand("copy");
+    document.body.removeChild(textarea);
+
+    if (copied) {
+      resolve();
+      return;
+    }
+    reject(new Error("Copy failed"));
+  });
+}
+
+export default function PhrasebookPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeKey, setActiveKey] = useState(defaultCategory.key);
+  const [copiedZh, setCopiedZh] = useState<string | null>(null);
+  const activeCategory = phraseCategories.find((category) => category.key === activeKey) ?? defaultCategory;
+
+  async function handleCopy(phrase: Phrase) {
+    try {
+      await copyText(phrase.zh);
+      setCopiedZh(phrase.zh);
+      window.setTimeout(() => {
+        setCopiedZh((current) => (current === phrase.zh ? null : current));
+      }, 1400);
+    } catch {
+      setCopiedZh(null);
+    }
+  }
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-3">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <div className="flex flex-col gap-2">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            Essential phrases / 应急短语
+          </span>
+          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+            Essential Phrasebook / 应急短语手册
+          </h1>
+          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
+            English, pinyin, and Chinese for taxis, hotels, food, payments, shopping, and emergencies. / 覆盖打车、住宿、点餐、支付、购物和紧急情况。
+          </p>
+          <p className="text-xs font-bold uppercase tracking-widest text-jade">
+            {phrasebookTotal} phrases / {phrasebookTotal} 句
+          </p>
+        </div>
+      </header>
+
+      <section className="flex flex-col gap-4" aria-label="Phrase categories">
+        <div
+          role="tablist"
+          aria-label="Phrase categories / 短语场景"
+          className="flex gap-2 overflow-x-auto pb-1"
+        >
+          {phraseCategories.map((category) => {
+            const active = category.key === activeCategory.key;
+            return (
+              <button
+                key={category.key}
+                id={`phrasebook-tab-${category.key}`}
+                type="button"
+                role="tab"
+                aria-selected={active}
+                aria-controls={`phrasebook-panel-${category.key}`}
+                onClick={() => setActiveKey(category.key)}
+                className={clsx(
+                  "flex min-w-36 shrink-0 flex-col gap-1 rounded-lg border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                  active
+                    ? "border-ink bg-ink text-white shadow-sm"
+                    : "border-line bg-white text-ink hover:border-jade"
+                )}
+              >
+                <span className={clsx("text-[10px] font-bold uppercase tracking-widest", active ? "text-white/70" : "text-muted")}>
+                  {category.iconHint}
+                </span>
+                <span className="text-sm font-bold leading-tight">{category.titleEn}</span>
+                <span className={clsx("text-xs leading-tight", active ? "text-white/80" : "text-muted")}>
+                  {category.titleZh} · {category.phrases.length}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <div
+          id={`phrasebook-panel-${activeCategory.key}`}
+          role="tabpanel"
+          aria-labelledby={`phrasebook-tab-${activeCategory.key}`}
+          className="flex flex-col gap-3"
+        >
+          <header className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-2">
+            <div>
+              <h2 className="text-2xl font-bold leading-tight">
+                {activeCategory.titleEn} / {activeCategory.titleZh}
+              </h2>
+              <p className="text-xs text-muted">
+                {activeCategory.phrases.length} phrases / {activeCategory.phrases.length} 句
+              </p>
+            </div>
+          </header>
+
+          <ul className="grid gap-3">
+            {activeCategory.phrases.map((phrase) => {
+              const copied = copiedZh === phrase.zh;
+              return (
+                <li key={`${activeCategory.key}-${phrase.zh}`}>
+                  <article className="grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
+                    <div className="min-w-0">
+                      <p className="break-words text-base font-bold leading-snug">{phrase.en}</p>
+                      <p className="mt-1 break-words text-sm font-semibold leading-snug text-jade">
+                        {phrase.pinyin}
+                      </p>
+                      <p className="mt-1 break-words text-lg font-bold leading-snug">{phrase.zh}</p>
+                    </div>
+                    <button
+                      type="button"
+                      aria-label={`Copy Chinese phrase: ${phrase.zh}`}
+                      onClick={() => {
+                        void handleCopy(phrase);
+                      }}
+                      className={clsx(
+                        "h-10 rounded-lg border px-4 text-xs font-bold uppercase tracking-widest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                        copied
+                          ? "border-jade bg-jade text-white"
+                          : "border-line bg-paper text-ink hover:border-jade hover:bg-jade-soft"
+                      )}
+                    >
+                      {copied ? (isZh ? "已复制" : "Copied") : isZh ? "复制" : "Copy"}
+                    </button>
+                  </article>
+                </li>
+              );
+            })}
+          </ul>
+        </div>
+      </section>
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index e04b8ab90a3699cfa278f5ea29483bc30edb795f..b9b696df6fa00bc391d8df10bdbce96dcabd580c
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -1,9 +1,10 @@
 import { type RouteConfig, index, route } from "@react-router/dev/routes";
 
 export default [
-  index("./pages/HomePage.tsx"),
-  route("map", "./pages/MapPage.tsx"),
-  route("guide/:topic", "./pages/GuidePage.tsx"),
+  index("./pages/HomePage.tsx"),
+  route("map", "./pages/MapPage.tsx"),
+  route("phrasebook", "./pages/PhrasebookPage.tsx"),
+  route("guide/:topic", "./pages/GuidePage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),

diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 2f156e1d62f1d87915b8a9c6b94733e1c028523b..adfcabaa94592bf2c136f0a522a2a633d6e892bf
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -9,6 +9,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/phrasebook</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/guide/entry</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index ca6de53a28c5c95b4d22dec4600405e9b2cf06de..0be050a497672fd006dcf773952ba991e41cd9e4
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -7,6 +7,7 @@
     return [
       "/",
       "/map",
+      "/phrasebook",
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index f8fb8569ef2d8617f100e8c55e64133741cab19b..6decfa020c6b81ca4f368a547fcf5d613b8d8789
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,14 +1,28 @@
-import { Link } from "react-router";
-import LanguageSwitch from "./LanguageSwitch";
-
-export default function SiteHeader() {
-  return (
-    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
-      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
-        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
-        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
-      </Link>
-      <LanguageSwitch />
-    </header>
-  );
-}
+import { Link } from "react-router";
+import LanguageSwitch from "./LanguageSwitch";
+import { useLang } from "../../store/language";
+
+export default function SiteHeader() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+
+  return (
+    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
+        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
+        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
+      </Link>
+      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+        <nav aria-label={isZh ? "主导航" : "Main navigation"}>
+          <Link
+            to="/phrasebook"
+            className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted transition hover:border-jade hover:text-jade"
+          >
+            {isZh ? "应急短语" : "Phrases"}
+          </Link>
+        </nav>
+        <LanguageSwitch />
+      </div>
+    </header>
+  );
+}
diff --git a/v2/src/data/phrasebook.ts b/v2/src/data/phrasebook.ts
new file mode 100644
index 0000000000000000000000000000000000000000..fe01e699a457ed6e7ca8b2485ae7045c5fcde9a1
--- /dev/null
+++ b/v2/src/data/phrasebook.ts
@@ -0,0 +1,122 @@
+export type Phrase = { en: string; zh: string; pinyin: string };
+
+export type PhraseCategory = {
+  key: string;
+  titleEn: string;
+  titleZh: string;
+  iconHint?: string;
+  phrases: Phrase[];
+};
+
+export const phraseCategories: PhraseCategory[] = [
+  {
+    key: "basics",
+    titleEn: "Basics",
+    titleZh: "基础用语",
+    iconHint: "hello",
+    phrases: [
+      { en: "Hello.", zh: "你好。", pinyin: "Nǐ hǎo." },
+      { en: "Thank you.", zh: "谢谢。", pinyin: "Xièxie." },
+      { en: "Sorry.", zh: "对不起。", pinyin: "Duìbuqǐ." },
+      { en: "I don't understand.", zh: "我听不懂。", pinyin: "Wǒ tīng bù dǒng." },
+      { en: "Please say that again.", zh: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn." },
+      { en: "Please help me.", zh: "请帮我一下。", pinyin: "Qǐng bāng wǒ yí xià." }
+    ]
+  },
+  {
+    key: "transport",
+    titleEn: "Transport",
+    titleZh: "交通",
+    iconHint: "route",
+    phrases: [
+      { en: "How much to X?", zh: "去 X 多少钱？", pinyin: "Qù X duōshǎo qián?" },
+      {
+        en: "How do I get to metro station X?",
+        zh: "地铁 X 站怎么走？",
+        pinyin: "Dìtiě X zhàn zěnme zǒu?"
+      },
+      { en: "I want to take a taxi.", zh: "我要打车。", pinyin: "Wǒ yào dǎchē." },
+      { en: "Driver, please stop here.", zh: "师傅，请停一下。", pinyin: "Shīfu, qǐng tíng yí xià." },
+      { en: "How do I get to the high-speed rail station?", zh: "高铁站怎么走？", pinyin: "Gāotiě zhàn zěnme zǒu?" },
+      { en: "How do I get to the airport?", zh: "机场怎么走？", pinyin: "Jīchǎng zěnme zǒu?" },
+      { en: "Please tell me when we arrive.", zh: "到了麻烦说一声。", pinyin: "Dào le máfan shuō yì shēng." }
+    ]
+  },
+  {
+    key: "payments",
+    titleEn: "Payments",
+    titleZh: "支付",
+    iconHint: "wallet",
+    phrases: [
+      { en: "Don't you accept foreign cards?", zh: "不收外卡吗？", pinyin: "Bù shōu wàikǎ ma?" },
+      { en: "Is cash okay?", zh: "现金可以吗？", pinyin: "Xiànjīn kěyǐ ma?" },
+      { en: "That's too expensive.", zh: "太贵了。", pinyin: "Tài guì le." },
+      { en: "Can it be cheaper?", zh: "便宜点。", pinyin: "Piányi diǎn." },
+      { en: "I'll pay cash.", zh: "我付现金。", pinyin: "Wǒ fù xiànjīn." },
+      { en: "The QR code payment failed.", zh: "扫码失败了。", pinyin: "Sǎomǎ shībài le." },
+      { en: "Do you need the receipt?", zh: "收据要不要？", pinyin: "Shōujù yào bu yào?" }
+    ]
+  },
+  {
+    key: "food",
+    titleEn: "Food",
+    titleZh: "餐饮",
+    iconHint: "bowl",
+    phrases: [
+      { en: "Please make it not spicy.", zh: "不要辣。", pinyin: "Bú yào là." },
+      { en: "No X, I'm allergic.", zh: "不要 X，我过敏。", pinyin: "Bú yào X, wǒ guòmǐn." },
+      { en: "I am vegetarian.", zh: "我吃素。", pinyin: "Wǒ chī sù." },
+      { en: "What is this?", zh: "这是什么？", pinyin: "Zhè shì shénme?" },
+      { en: "What do you recommend?", zh: "推荐什么？", pinyin: "Tuījiàn shénme?" },
+      { en: "Extra rice, please.", zh: "加饭。", pinyin: "Jiā fàn." },
+      { en: "Please pack this to go.", zh: "打包。", pinyin: "Dǎbāo." },
+      { en: "Check, please.", zh: "结账。", pinyin: "Jiézhàng." }
+    ]
+  },
+  {
+    key: "accommodation",
+    titleEn: "Accommodation",
+    titleZh: "住宿",
+    iconHint: "hotel",
+    phrases: [
+      { en: "I want to check in.", zh: "我要办理入住。", pinyin: "Wǒ yào bànlǐ rùzhù." },
+      { en: "What time is check-out?", zh: "几点退房？", pinyin: "Jǐ diǎn tuìfáng?" },
+      { en: "What is the Wi-Fi password?", zh: "Wi-Fi 密码是多少？", pinyin: "Wi-Fi mìmǎ shì duōshǎo?" },
+      { en: "What time is breakfast?", zh: "早餐几点？", pinyin: "Zǎocān jǐ diǎn?" },
+      { en: "Can I store my luggage?", zh: "可以寄存行李吗？", pinyin: "Kěyǐ jìcún xíngli ma?" },
+      { en: "Can we add an extra bed?", zh: "可以加张床吗？", pinyin: "Kěyǐ jiā zhāng chuáng ma?" }
+    ]
+  },
+  {
+    key: "emergency",
+    titleEn: "Emergency",
+    titleZh: "应急",
+    iconHint: "sos",
+    phrases: [
+      { en: "Help me!", zh: "救救我！", pinyin: "Jiùjiu wǒ!" },
+      { en: "I am sick.", zh: "我生病了。", pinyin: "Wǒ shēngbìng le." },
+      { en: "My passport is lost.", zh: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le." },
+      { en: "Call an ambulance.", zh: "叫救护车。", pinyin: "Jiào jiùhùchē." },
+      { en: "Call the police.", zh: "报警。", pinyin: "Bàojǐng." },
+      { en: "My wallet was stolen.", zh: "我的钱包被偷了。", pinyin: "Wǒ de qiánbāo bèi tōu le." },
+      { en: "Give me some water, please.", zh: "给我点水。", pinyin: "Gěi wǒ diǎn shuǐ." }
+    ]
+  },
+  {
+    key: "shopping",
+    titleEn: "Shopping",
+    titleZh: "购物",
+    iconHint: "bag",
+    phrases: [
+      { en: "How much is it?", zh: "多少钱？", pinyin: "Duōshǎo qián?" },
+      { en: "Can I try it on?", zh: "可以试穿吗？", pinyin: "Kěyǐ shìchuān ma?" },
+      { en: "I don't want it.", zh: "不要。", pinyin: "Bú yào." },
+      { en: "I'm just looking.", zh: "我看看。", pinyin: "Wǒ kànkan." },
+      { en: "Can I return it?", zh: "可以退货吗？", pinyin: "Kěyǐ tuìhuò ma?" },
+      { en: "Can I use a credit card?", zh: "信用卡能用吗？", pinyin: "Xìnyòngkǎ néng yòng ma?" },
+      { en: "Please wrap it up.", zh: "包起来。", pinyin: "Bāo qǐlai." }
+    ]
+  }
+];
+
+export const phrasebookTotal = phraseCategories.reduce((total, category) => total + category.phrases.length, 0);
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 6df6ebff9a6ef16cbeb23919735223f6619a9bee..36d357304a97629e5ccc913861cdd7243596c527
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -8,11 +8,12 @@
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
-const guideLinks = [
-  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
-  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
-  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
-];
+const guideLinks = [
+  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
+  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
+  { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
+];
 
 const websiteJsonLd = {
   "@context": "https://schema.org",
@@ -113,7 +114,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-3">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PhrasebookPage.tsx b/v2/src/pages/PhrasebookPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..a4aaa028248fdc7bf36108427495b7186fdc29b7
--- /dev/null
+++ b/v2/src/pages/PhrasebookPage.tsx
@@ -0,0 +1,165 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { phraseCategories, phrasebookTotal, type Phrase } from "../data/phrasebook";
+import { useLang } from "../store/language";
+
+const defaultCategory = phraseCategories[0];
+
+function copyText(text: string): Promise<void> {
+  if (navigator.clipboard) {
+    return navigator.clipboard.writeText(text);
+  }
+
+  return new Promise((resolve, reject) => {
+    const textarea = document.createElement("textarea");
+    textarea.value = text;
+    textarea.setAttribute("readonly", "");
+    textarea.style.position = "fixed";
+    textarea.style.top = "-1000px";
+    document.body.appendChild(textarea);
+    textarea.select();
+
+    const copied = document.execCommand("copy");
+    document.body.removeChild(textarea);
+
+    if (copied) {
+      resolve();
+      return;
+    }
+    reject(new Error("Copy failed"));
+  });
+}
+
+export default function PhrasebookPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeKey, setActiveKey] = useState(defaultCategory.key);
+  const [copiedZh, setCopiedZh] = useState<string | null>(null);
+  const activeCategory = phraseCategories.find((category) => category.key === activeKey) ?? defaultCategory;
+
+  async function handleCopy(phrase: Phrase) {
+    try {
+      await copyText(phrase.zh);
+      setCopiedZh(phrase.zh);
+      window.setTimeout(() => {
+        setCopiedZh((current) => (current === phrase.zh ? null : current));
+      }, 1400);
+    } catch {
+      setCopiedZh(null);
+    }
+  }
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-3">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <div className="flex flex-col gap-2">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            Essential phrases / 应急短语
+          </span>
+          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+            Essential Phrasebook / 应急短语手册
+          </h1>
+          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
+            English, pinyin, and Chinese for taxis, hotels, food, payments, shopping, and emergencies. / 覆盖打车、住宿、点餐、支付、购物和紧急情况。
+          </p>
+          <p className="text-xs font-bold uppercase tracking-widest text-jade">
+            {phrasebookTotal} phrases / {phrasebookTotal} 句
+          </p>
+        </div>
+      </header>
+
+      <section className="flex flex-col gap-4" aria-label="Phrase categories">
+        <div
+          role="tablist"
+          aria-label="Phrase categories / 短语场景"
+          className="flex gap-2 overflow-x-auto pb-1"
+        >
+          {phraseCategories.map((category) => {
+            const active = category.key === activeCategory.key;
+            return (
+              <button
+                key={category.key}
+                id={`phrasebook-tab-${category.key}`}
+                type="button"
+                role="tab"
+                aria-selected={active}
+                aria-controls={`phrasebook-panel-${category.key}`}
+                onClick={() => setActiveKey(category.key)}
+                className={clsx(
+                  "flex min-w-36 shrink-0 flex-col gap-1 rounded-lg border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                  active
+                    ? "border-ink bg-ink text-white shadow-sm"
+                    : "border-line bg-white text-ink hover:border-jade"
+                )}
+              >
+                <span className={clsx("text-[10px] font-bold uppercase tracking-widest", active ? "text-white/70" : "text-muted")}>
+                  {category.iconHint}
+                </span>
+                <span className="text-sm font-bold leading-tight">{category.titleEn}</span>
+                <span className={clsx("text-xs leading-tight", active ? "text-white/80" : "text-muted")}>
+                  {category.titleZh} · {category.phrases.length}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <div
+          id={`phrasebook-panel-${activeCategory.key}`}
+          role="tabpanel"
+          aria-labelledby={`phrasebook-tab-${activeCategory.key}`}
+          className="flex flex-col gap-3"
+        >
+          <header className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-2">
+            <div>
+              <h2 className="text-2xl font-bold leading-tight">
+                {activeCategory.titleEn} / {activeCategory.titleZh}
+              </h2>
+              <p className="text-xs text-muted">
+                {activeCategory.phrases.length} phrases / {activeCategory.phrases.length} 句
+              </p>
+            </div>
+          </header>
+
+          <ul className="grid gap-3">
+            {activeCategory.phrases.map((phrase) => {
+              const copied = copiedZh === phrase.zh;
+              return (
+                <li key={`${activeCategory.key}-${phrase.zh}`}>
+                  <article className="grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
+                    <div className="min-w-0">
+                      <p className="break-words text-base font-bold leading-snug">{phrase.en}</p>
+                      <p className="mt-1 break-words text-sm font-semibold leading-snug text-jade">
+                        {phrase.pinyin}
+                      </p>
+                      <p className="mt-1 break-words text-lg font-bold leading-snug">{phrase.zh}</p>
+                    </div>
+                    <button
+                      type="button"
+                      aria-label={`Copy Chinese phrase: ${phrase.zh}`}
+                      onClick={() => {
+                        void handleCopy(phrase);
+                      }}
+                      className={clsx(
+                        "h-10 rounded-lg border px-4 text-xs font-bold uppercase tracking-widest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                        copied
+                          ? "border-jade bg-jade text-white"
+                          : "border-line bg-paper text-ink hover:border-jade hover:bg-jade-soft"
+                      )}
+                    >
+                      {copied ? (isZh ? "已复制" : "Copied") : isZh ? "复制" : "Copy"}
+                    </button>
+                  </article>
+                </li>
+              );
+            })}
+          </ul>
+        </div>
+      </section>
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index e04b8ab90a3699cfa278f5ea29483bc30edb795f..b9b696df6fa00bc391d8df10bdbce96dcabd580c
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -1,9 +1,10 @@
 import { type RouteConfig, index, route } from "@react-router/dev/routes";
 
 export default [
-  index("./pages/HomePage.tsx"),
-  route("map", "./pages/MapPage.tsx"),
-  route("guide/:topic", "./pages/GuidePage.tsx"),
+  index("./pages/HomePage.tsx"),
+  route("map", "./pages/MapPage.tsx"),
+  route("phrasebook", "./pages/PhrasebookPage.tsx"),
+  route("guide/:topic", "./pages/GuidePage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),

codex
已补上失败兜底。现在重新跑类型检查和构建，确保最终状态仍是干净的。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
 succeeded in 1419ms:
diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 2f156e1d62f1d87915b8a9c6b94733e1c028523b..adfcabaa94592bf2c136f0a522a2a633d6e892bf
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -9,6 +9,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/phrasebook</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/guide/entry</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index ca6de53a28c5c95b4d22dec4600405e9b2cf06de..0be050a497672fd006dcf773952ba991e41cd9e4
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -7,6 +7,7 @@
     return [
       "/",
       "/map",
+      "/phrasebook",
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index f8fb8569ef2d8617f100e8c55e64133741cab19b..6decfa020c6b81ca4f368a547fcf5d613b8d8789
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,14 +1,28 @@
-import { Link } from "react-router";
-import LanguageSwitch from "./LanguageSwitch";
-
-export default function SiteHeader() {
-  return (
-    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
-      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
-        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
-        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
-      </Link>
-      <LanguageSwitch />
-    </header>
-  );
-}
+import { Link } from "react-router";
+import LanguageSwitch from "./LanguageSwitch";
+import { useLang } from "../../store/language";
+
+export default function SiteHeader() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+
+  return (
+    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
+        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
+        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
+      </Link>
+      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+        <nav aria-label={isZh ? "主导航" : "Main navigation"}>
+          <Link
+            to="/phrasebook"
+            className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted transition hover:border-jade hover:text-jade"
+          >
+            {isZh ? "应急短语" : "Phrases"}
+          </Link>
+        </nav>
+        <LanguageSwitch />
+      </div>
+    </header>
+  );
+}
diff --git a/v2/src/data/phrasebook.ts b/v2/src/data/phrasebook.ts
new file mode 100644
index 0000000000000000000000000000000000000000..fe01e699a457ed6e7ca8b2485ae7045c5fcde9a1
--- /dev/null
+++ b/v2/src/data/phrasebook.ts
@@ -0,0 +1,122 @@
+export type Phrase = { en: string; zh: string; pinyin: string };
+
+export type PhraseCategory = {
+  key: string;
+  titleEn: string;
+  titleZh: string;
+  iconHint?: string;
+  phrases: Phrase[];
+};
+
+export const phraseCategories: PhraseCategory[] = [
+  {
+    key: "basics",
+    titleEn: "Basics",
+    titleZh: "基础用语",
+    iconHint: "hello",
+    phrases: [
+      { en: "Hello.", zh: "你好。", pinyin: "Nǐ hǎo." },
+      { en: "Thank you.", zh: "谢谢。", pinyin: "Xièxie." },
+      { en: "Sorry.", zh: "对不起。", pinyin: "Duìbuqǐ." },
+      { en: "I don't understand.", zh: "我听不懂。", pinyin: "Wǒ tīng bù dǒng." },
+      { en: "Please say that again.", zh: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn." },
+      { en: "Please help me.", zh: "请帮我一下。", pinyin: "Qǐng bāng wǒ yí xià." }
+    ]
+  },
+  {
+    key: "transport",
+    titleEn: "Transport",
+    titleZh: "交通",
+    iconHint: "route",
+    phrases: [
+      { en: "How much to X?", zh: "去 X 多少钱？", pinyin: "Qù X duōshǎo qián?" },
+      {
+        en: "How do I get to metro station X?",
+        zh: "地铁 X 站怎么走？",
+        pinyin: "Dìtiě X zhàn zěnme zǒu?"
+      },
+      { en: "I want to take a taxi.", zh: "我要打车。", pinyin: "Wǒ yào dǎchē." },
+      { en: "Driver, please stop here.", zh: "师傅，请停一下。", pinyin: "Shīfu, qǐng tíng yí xià." },
+      { en: "How do I get to the high-speed rail station?", zh: "高铁站怎么走？", pinyin: "Gāotiě zhàn zěnme zǒu?" },
+      { en: "How do I get to the airport?", zh: "机场怎么走？", pinyin: "Jīchǎng zěnme zǒu?" },
+      { en: "Please tell me when we arrive.", zh: "到了麻烦说一声。", pinyin: "Dào le máfan shuō yì shēng." }
+    ]
+  },
+  {
+    key: "payments",
+    titleEn: "Payments",
+    titleZh: "支付",
+    iconHint: "wallet",
+    phrases: [
+      { en: "Don't you accept foreign cards?", zh: "不收外卡吗？", pinyin: "Bù shōu wàikǎ ma?" },
+      { en: "Is cash okay?", zh: "现金可以吗？", pinyin: "Xiànjīn kěyǐ ma?" },
+      { en: "That's too expensive.", zh: "太贵了。", pinyin: "Tài guì le." },
+      { en: "Can it be cheaper?", zh: "便宜点。", pinyin: "Piányi diǎn." },
+      { en: "I'll pay cash.", zh: "我付现金。", pinyin: "Wǒ fù xiànjīn." },
+      { en: "The QR code payment failed.", zh: "扫码失败了。", pinyin: "Sǎomǎ shībài le." },
+      { en: "Do you need the receipt?", zh: "收据要不要？", pinyin: "Shōujù yào bu yào?" }
+    ]
+  },
+  {
+    key: "food",
+    titleEn: "Food",
+    titleZh: "餐饮",
+    iconHint: "bowl",
+    phrases: [
+      { en: "Please make it not spicy.", zh: "不要辣。", pinyin: "Bú yào là." },
+      { en: "No X, I'm allergic.", zh: "不要 X，我过敏。", pinyin: "Bú yào X, wǒ guòmǐn." },
+      { en: "I am vegetarian.", zh: "我吃素。", pinyin: "Wǒ chī sù." },
+      { en: "What is this?", zh: "这是什么？", pinyin: "Zhè shì shénme?" },
+      { en: "What do you recommend?", zh: "推荐什么？", pinyin: "Tuījiàn shénme?" },
+      { en: "Extra rice, please.", zh: "加饭。", pinyin: "Jiā fàn." },
+      { en: "Please pack this to go.", zh: "打包。", pinyin: "Dǎbāo." },
+      { en: "Check, please.", zh: "结账。", pinyin: "Jiézhàng." }
+    ]
+  },
+  {
+    key: "accommodation",
+    titleEn: "Accommodation",
+    titleZh: "住宿",
+    iconHint: "hotel",
+    phrases: [
+      { en: "I want to check in.", zh: "我要办理入住。", pinyin: "Wǒ yào bànlǐ rùzhù." },
+      { en: "What time is check-out?", zh: "几点退房？", pinyin: "Jǐ diǎn tuìfáng?" },
+      { en: "What is the Wi-Fi password?", zh: "Wi-Fi 密码是多少？", pinyin: "Wi-Fi mìmǎ shì duōshǎo?" },
+      { en: "What time is breakfast?", zh: "早餐几点？", pinyin: "Zǎocān jǐ diǎn?" },
+      { en: "Can I store my luggage?", zh: "可以寄存行李吗？", pinyin: "Kěyǐ jìcún xíngli ma?" },
+      { en: "Can we add an extra bed?", zh: "可以加张床吗？", pinyin: "Kěyǐ jiā zhāng chuáng ma?" }
+    ]
+  },
+  {
+    key: "emergency",
+    titleEn: "Emergency",
+    titleZh: "应急",
+    iconHint: "sos",
+    phrases: [
+      { en: "Help me!", zh: "救救我！", pinyin: "Jiùjiu wǒ!" },
+      { en: "I am sick.", zh: "我生病了。", pinyin: "Wǒ shēngbìng le." },
+      { en: "My passport is lost.", zh: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le." },
+      { en: "Call an ambulance.", zh: "叫救护车。", pinyin: "Jiào jiùhùchē." },
+      { en: "Call the police.", zh: "报警。", pinyin: "Bàojǐng." },
+      { en: "My wallet was stolen.", zh: "我的钱包被偷了。", pinyin: "Wǒ de qiánbāo bèi tōu le." },
+      { en: "Give me some water, please.", zh: "给我点水。", pinyin: "Gěi wǒ diǎn shuǐ." }
+    ]
+  },
+  {
+    key: "shopping",
+    titleEn: "Shopping",
+    titleZh: "购物",
+    iconHint: "bag",
+    phrases: [
+      { en: "How much is it?", zh: "多少钱？", pinyin: "Duōshǎo qián?" },
+      { en: "Can I try it on?", zh: "可以试穿吗？", pinyin: "Kěyǐ shìchuān ma?" },
+      { en: "I don't want it.", zh: "不要。", pinyin: "Bú yào." },
+      { en: "I'm just looking.", zh: "我看看。", pinyin: "Wǒ kànkan." },
+      { en: "Can I return it?", zh: "可以退货吗？", pinyin: "Kěyǐ tuìhuò ma?" },
+      { en: "Can I use a credit card?", zh: "信用卡能用吗？", pinyin: "Xìnyòngkǎ néng yòng ma?" },
+      { en: "Please wrap it up.", zh: "包起来。", pinyin: "Bāo qǐlai." }
+    ]
+  }
+];
+
+export const phrasebookTotal = phraseCategories.reduce((total, category) => total + category.phrases.length, 0);
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 6df6ebff9a6ef16cbeb23919735223f6619a9bee..36d357304a97629e5ccc913861cdd7243596c527
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -8,11 +8,12 @@
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
-const guideLinks = [
-  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
-  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
-  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
-];
+const guideLinks = [
+  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
+  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
+  { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
+];
 
 const websiteJsonLd = {
   "@context": "https://schema.org",
@@ -113,7 +114,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-3">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PhrasebookPage.tsx b/v2/src/pages/PhrasebookPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..a4aaa028248fdc7bf36108427495b7186fdc29b7
--- /dev/null
+++ b/v2/src/pages/PhrasebookPage.tsx
@@ -0,0 +1,165 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { phraseCategories, phrasebookTotal, type Phrase } from "../data/phrasebook";
+import { useLang } from "../store/language";
+
+const defaultCategory = phraseCategories[0];
+
+function copyText(text: string): Promise<void> {
+  if (navigator.clipboard) {
+    return navigator.clipboard.writeText(text);
+  }
+
+  return new Promise((resolve, reject) => {
+    const textarea = document.createElement("textarea");
+    textarea.value = text;
+    textarea.setAttribute("readonly", "");
+    textarea.style.position = "fixed";
+    textarea.style.top = "-1000px";
+    document.body.appendChild(textarea);
+    textarea.select();
+
+    const copied = document.execCommand("copy");
+    document.body.removeChild(textarea);
+
+    if (copied) {
+      resolve();
+      return;
+    }
+    reject(new Error("Copy failed"));
+  });
+}
+
+export default function PhrasebookPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeKey, setActiveKey] = useState(defaultCategory.key);
+  const [copiedZh, setCopiedZh] = useState<string | null>(null);
+  const activeCategory = phraseCategories.find((category) => category.key === activeKey) ?? defaultCategory;
+
+  async function handleCopy(phrase: Phrase) {
+    try {
+      await copyText(phrase.zh);
+      setCopiedZh(phrase.zh);
+      window.setTimeout(() => {
+        setCopiedZh((current) => (current === phrase.zh ? null : current));
+      }, 1400);
+    } catch {
+      setCopiedZh(null);
+    }
+  }
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-3">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <div className="flex flex-col gap-2">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            Essential phrases / 应急短语
+          </span>
+          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+            Essential Phrasebook / 应急短语手册
+          </h1>
+          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
+            English, pinyin, and Chinese for taxis, hotels, food, payments, shopping, and emergencies. / 覆盖打车、住宿、点餐、支付、购物和紧急情况。
+          </p>
+          <p className="text-xs font-bold uppercase tracking-widest text-jade">
+            {phrasebookTotal} phrases / {phrasebookTotal} 句
+          </p>
+        </div>
+      </header>
+
+      <section className="flex flex-col gap-4" aria-label="Phrase categories">
+        <div
+          role="tablist"
+          aria-label="Phrase categories / 短语场景"
+          className="flex gap-2 overflow-x-auto pb-1"
+        >
+          {phraseCategories.map((category) => {
+            const active = category.key === activeCategory.key;
+            return (
+              <button
+                key={category.key}
+                id={`phrasebook-tab-${category.key}`}
+                type="button"
+                role="tab"
+                aria-selected={active}
+                aria-controls={`phrasebook-panel-${category.key}`}
+                onClick={() => setActiveKey(category.key)}
+                className={clsx(
+                  "flex min-w-36 shrink-0 flex-col gap-1 rounded-lg border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                  active
+                    ? "border-ink bg-ink text-white shadow-sm"
+                    : "border-line bg-white text-ink hover:border-jade"
+                )}
+              >
+                <span className={clsx("text-[10px] font-bold uppercase tracking-widest", active ? "text-white/70" : "text-muted")}>
+                  {category.iconHint}
+                </span>
+                <span className="text-sm font-bold leading-tight">{category.titleEn}</span>
+                <span className={clsx("text-xs leading-tight", active ? "text-white/80" : "text-muted")}>
+                  {category.titleZh} · {category.phrases.length}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <div
+          id={`phrasebook-panel-${activeCategory.key}`}
+          role="tabpanel"
+          aria-labelledby={`phrasebook-tab-${activeCategory.key}`}
+          className="flex flex-col gap-3"
+        >
+          <header className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-2">
+            <div>
+              <h2 className="text-2xl font-bold leading-tight">
+                {activeCategory.titleEn} / {activeCategory.titleZh}
+              </h2>
+              <p className="text-xs text-muted">
+                {activeCategory.phrases.length} phrases / {activeCategory.phrases.length} 句
+              </p>
+            </div>
+          </header>
+
+          <ul className="grid gap-3">
+            {activeCategory.phrases.map((phrase) => {
+              const copied = copiedZh === phrase.zh;
+              return (
+                <li key={`${activeCategory.key}-${phrase.zh}`}>
+                  <article className="grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
+                    <div className="min-w-0">
+                      <p className="break-words text-base font-bold leading-snug">{phrase.en}</p>
+                      <p className="mt-1 break-words text-sm font-semibold leading-snug text-jade">
+                        {phrase.pinyin}
+                      </p>
+                      <p className="mt-1 break-words text-lg font-bold leading-snug">{phrase.zh}</p>
+                    </div>
+                    <button
+                      type="button"
+                      aria-label={`Copy Chinese phrase: ${phrase.zh}`}
+                      onClick={() => {
+                        void handleCopy(phrase);
+                      }}
+                      className={clsx(
+                        "h-10 rounded-lg border px-4 text-xs font-bold uppercase tracking-widest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                        copied
+                          ? "border-jade bg-jade text-white"
+                          : "border-line bg-paper text-ink hover:border-jade hover:bg-jade-soft"
+                      )}
+                    >
+                      {copied ? (isZh ? "已复制" : "Copied") : isZh ? "复制" : "Copy"}
+                    </button>
+                  </article>
+                </li>
+              );
+            })}
+          </ul>
+        </div>
+      </section>
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index e04b8ab90a3699cfa278f5ea29483bc30edb795f..b9b696df6fa00bc391d8df10bdbce96dcabd580c
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -1,9 +1,10 @@
 import { type RouteConfig, index, route } from "@react-router/dev/routes";
 
 export default [
-  index("./pages/HomePage.tsx"),
-  route("map", "./pages/MapPage.tsx"),
-  route("guide/:topic", "./pages/GuidePage.tsx"),
+  index("./pages/HomePage.tsx"),
+  route("map", "./pages/MapPage.tsx"),
+  route("phrasebook", "./pages/PhrasebookPage.tsx"),
+  route("guide/:topic", "./pages/GuidePage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 8308ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1511 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                     6.62 kB │ gzip:     0.99 kB
build/client/assets/Map3D-B9DDZdqH.css              24.01 kB │ gzip:     5.37 kB
build/client/assets/root-Cu-l_kJq.css               43.33 kB │ gzip:     8.11 kB
build/client/assets/language-d9oYsanb.js             0.26 kB │ gzip:     0.22 kB
build/client/assets/clsx-Dm0G8HgT.js                 0.36 kB │ gzip:     0.23 kB
build/client/assets/jsonLd-wTwnFEg0.js               0.47 kB │ gzip:     0.33 kB
build/client/assets/cityRoutes-CLHvaWZX.js           0.91 kB │ gzip:     0.50 kB
build/client/assets/chunk-BRDp8wQQ.js                0.95 kB │ gzip:     0.56 kB
build/client/assets/provinceColors-BjFtWGNp.js       1.84 kB │ gzip:     0.96 kB
build/client/assets/HomePage-DducRruR.js             6.32 kB │ gzip:     2.93 kB
build/client/assets/SharePage-BRVIuE9F.js            7.48 kB │ gzip:     2.76 kB
build/client/assets/phase2-preview-BnEC14cH.js       7.59 kB │ gzip:     4.48 kB
build/client/assets/AskPage-DXJED0Vm.js              7.62 kB │ gzip:     2.92 kB
build/client/assets/Map3D-Cmbo_S50.js                8.95 kB │ gzip:     4.22 kB
build/client/assets/PhrasebookPage-BNh4ogin.js       8.99 kB │ gzip:     3.82 kB
build/client/assets/GuidePage-Co4R7QY8.js           11.36 kB │ gzip:     5.34 kB
build/client/assets/root-DzdAlllG.js                11.51 kB │ gzip:     5.28 kB
build/client/assets/MapPage-C79U2M_r.js             13.67 kB │ gzip:     5.00 kB
build/client/assets/practical-other--E2Qy77J.js     22.32 kB │ gzip:    10.76 kB
build/client/assets/atlas-D0qorRDu.js               23.24 kB │ gzip:     9.58 kB
build/client/assets/SourcesPage-dNZt5e8K.js         32.19 kB │ gzip:     8.46 kB
build/client/assets/unsplash-8jCuSseR.js            35.00 kB │ gzip:    15.33 kB
build/client/assets/SourcesNote-CU0EECvS.js         39.01 kB │ gzip:    14.91 kB
build/client/assets/CityPage-DhdKstLA.js            53.25 kB │ gzip:    19.96 kB
build/client/assets/jsx-runtime-B5CtIOVj.js        127.17 kB │ gzip:    41.93 kB
build/client/assets/entry.client-B8gvglSo.js       186.53 kB │ gzip:    58.89 kB
build/client/assets/Cesium-CiBs4B83.js           4,724.63 kB │ gzip: 1,304.41 kB

[32m✓ built in 4.61s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 73 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m
[2mbuild\server\assets\server-build-Cu-l_kJq.css[22m

Prerender (html): / -> [1mbuild\client\index.html[22m
Prerender (html): /map -> [1mbuild\client\map\index.html[22m
Prerender (html): /phrasebook -> [1mbuild\client\phrasebook\index.html[22m
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
build/server/assets/server-build-Cu-l_kJq.css   43.33 kB │ gzip:   8.11 kB
build/server/assets/Map3D-Cv42P-Ue.js           15.47 kB │ gzip:   5.32 kB
build/server/assets/cityRoutes-Byzkxm76.js      31.42 kB │ gzip:  10.70 kB
build/server/index.js                          335.69 kB │ gzip: 104.58 kB

[32m✓ built in 810ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:dot-server (38%)
  - react-router:virtual-modules (38%)
  - react-router:inject-hmr-runtime (16%)
  - react-router:hmr-runtime (5%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 2f156e1d62f1d87915b8a9c6b94733e1c028523b..adfcabaa94592bf2c136f0a522a2a633d6e892bf
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -9,6 +9,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/phrasebook</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/guide/entry</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index ca6de53a28c5c95b4d22dec4600405e9b2cf06de..0be050a497672fd006dcf773952ba991e41cd9e4
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -7,6 +7,7 @@
     return [
       "/",
       "/map",
+      "/phrasebook",
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index f8fb8569ef2d8617f100e8c55e64133741cab19b..6decfa020c6b81ca4f368a547fcf5d613b8d8789
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,14 +1,28 @@
-import { Link } from "react-router";
-import LanguageSwitch from "./LanguageSwitch";
-
-export default function SiteHeader() {
-  return (
-    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
-      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
-        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
-        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
-      </Link>
-      <LanguageSwitch />
-    </header>
-  );
-}
+import { Link } from "react-router";
+import LanguageSwitch from "./LanguageSwitch";
+import { useLang } from "../../store/language";
+
+export default function SiteHeader() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+
+  return (
+    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
+        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
+        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
+      </Link>
+      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+        <nav aria-label={isZh ? "主导航" : "Main navigation"}>
+          <Link
+            to="/phrasebook"
+            className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted transition hover:border-jade hover:text-jade"
+          >
+            {isZh ? "应急短语" : "Phrases"}
+          </Link>
+        </nav>
+        <LanguageSwitch />
+      </div>
+    </header>
+  );
+}
diff --git a/v2/src/data/phrasebook.ts b/v2/src/data/phrasebook.ts
new file mode 100644
index 0000000000000000000000000000000000000000..fe01e699a457ed6e7ca8b2485ae7045c5fcde9a1
--- /dev/null
+++ b/v2/src/data/phrasebook.ts
@@ -0,0 +1,122 @@
+export type Phrase = { en: string; zh: string; pinyin: string };
+
+export type PhraseCategory = {
+  key: string;
+  titleEn: string;
+  titleZh: string;
+  iconHint?: string;
+  phrases: Phrase[];
+};
+
+export const phraseCategories: PhraseCategory[] = [
+  {
+    key: "basics",
+    titleEn: "Basics",
+    titleZh: "基础用语",
+    iconHint: "hello",
+    phrases: [
+      { en: "Hello.", zh: "你好。", pinyin: "Nǐ hǎo." },
+      { en: "Thank you.", zh: "谢谢。", pinyin: "Xièxie." },
+      { en: "Sorry.", zh: "对不起。", pinyin: "Duìbuqǐ." },
+      { en: "I don't understand.", zh: "我听不懂。", pinyin: "Wǒ tīng bù dǒng." },
+      { en: "Please say that again.", zh: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn." },
+      { en: "Please help me.", zh: "请帮我一下。", pinyin: "Qǐng bāng wǒ yí xià." }
+    ]
+  },
+  {
+    key: "transport",
+    titleEn: "Transport",
+    titleZh: "交通",
+    iconHint: "route",
+    phrases: [
+      { en: "How much to X?", zh: "去 X 多少钱？", pinyin: "Qù X duōshǎo qián?" },
+      {
+        en: "How do I get to metro station X?",
+        zh: "地铁 X 站怎么走？",
+        pinyin: "Dìtiě X zhàn zěnme zǒu?"
+      },
+      { en: "I want to take a taxi.", zh: "我要打车。", pinyin: "Wǒ yào dǎchē." },
+      { en: "Driver, please stop here.", zh: "师傅，请停一下。", pinyin: "Shīfu, qǐng tíng yí xià." },
+      { en: "How do I get to the high-speed rail station?", zh: "高铁站怎么走？", pinyin: "Gāotiě zhàn zěnme zǒu?" },
+      { en: "How do I get to the airport?", zh: "机场怎么走？", pinyin: "Jīchǎng zěnme zǒu?" },
+      { en: "Please tell me when we arrive.", zh: "到了麻烦说一声。", pinyin: "Dào le máfan shuō yì shēng." }
+    ]
+  },
+  {
+    key: "payments",
+    titleEn: "Payments",
+    titleZh: "支付",
+    iconHint: "wallet",
+    phrases: [
+      { en: "Don't you accept foreign cards?", zh: "不收外卡吗？", pinyin: "Bù shōu wàikǎ ma?" },
+      { en: "Is cash okay?", zh: "现金可以吗？", pinyin: "Xiànjīn kěyǐ ma?" },
+      { en: "That's too expensive.", zh: "太贵了。", pinyin: "Tài guì le." },
+      { en: "Can it be cheaper?", zh: "便宜点。", pinyin: "Piányi diǎn." },
+      { en: "I'll pay cash.", zh: "我付现金。", pinyin: "Wǒ fù xiànjīn." },
+      { en: "The QR code payment failed.", zh: "扫码失败了。", pinyin: "Sǎomǎ shībài le." },
+      { en: "Do you need the receipt?", zh: "收据要不要？", pinyin: "Shōujù yào bu yào?" }
+    ]
+  },
+  {
+    key: "food",
+    titleEn: "Food",
+    titleZh: "餐饮",
+    iconHint: "bowl",
+    phrases: [
+      { en: "Please make it not spicy.", zh: "不要辣。", pinyin: "Bú yào là." },
+      { en: "No X, I'm allergic.", zh: "不要 X，我过敏。", pinyin: "Bú yào X, wǒ guòmǐn." },
+      { en: "I am vegetarian.", zh: "我吃素。", pinyin: "Wǒ chī sù." },
+      { en: "What is this?", zh: "这是什么？", pinyin: "Zhè shì shénme?" },
+      { en: "What do you recommend?", zh: "推荐什么？", pinyin: "Tuījiàn shénme?" },
+      { en: "Extra rice, please.", zh: "加饭。", pinyin: "Jiā fàn." },
+      { en: "Please pack this to go.", zh: "打包。", pinyin: "Dǎbāo." },
+      { en: "Check, please.", zh: "结账。", pinyin: "Jiézhàng." }
+    ]
+  },
+  {
+    key: "accommodation",
+    titleEn: "Accommodation",
+    titleZh: "住宿",
+    iconHint: "hotel",
+    phrases: [
+      { en: "I want to check in.", zh: "我要办理入住。", pinyin: "Wǒ yào bànlǐ rùzhù." },
+      { en: "What time is check-out?", zh: "几点退房？", pinyin: "Jǐ diǎn tuìfáng?" },
+      { en: "What is the Wi-Fi password?", zh: "Wi-Fi 密码是多少？", pinyin: "Wi-Fi mìmǎ shì duōshǎo?" },
+      { en: "What time is breakfast?", zh: "早餐几点？", pinyin: "Zǎocān jǐ diǎn?" },
+      { en: "Can I store my luggage?", zh: "可以寄存行李吗？", pinyin: "Kěyǐ jìcún xíngli ma?" },
+      { en: "Can we add an extra bed?", zh: "可以加张床吗？", pinyin: "Kěyǐ jiā zhāng chuáng ma?" }
+    ]
+  },
+  {
+    key: "emergency",
+    titleEn: "Emergency",
+    titleZh: "应急",
+    iconHint: "sos",
+    phrases: [
+      { en: "Help me!", zh: "救救我！", pinyin: "Jiùjiu wǒ!" },
+      { en: "I am sick.", zh: "我生病了。", pinyin: "Wǒ shēngbìng le." },
+      { en: "My passport is lost.", zh: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le." },
+      { en: "Call an ambulance.", zh: "叫救护车。", pinyin: "Jiào jiùhùchē." },
+      { en: "Call the police.", zh: "报警。", pinyin: "Bàojǐng." },
+      { en: "My wallet was stolen.", zh: "我的钱包被偷了。", pinyin: "Wǒ de qiánbāo bèi tōu le." },
+      { en: "Give me some water, please.", zh: "给我点水。", pinyin: "Gěi wǒ diǎn shuǐ." }
+    ]
+  },
+  {
+    key: "shopping",
+    titleEn: "Shopping",
+    titleZh: "购物",
+    iconHint: "bag",
+    phrases: [
+      { en: "How much is it?", zh: "多少钱？", pinyin: "Duōshǎo qián?" },
+      { en: "Can I try it on?", zh: "可以试穿吗？", pinyin: "Kěyǐ shìchuān ma?" },
+      { en: "I don't want it.", zh: "不要。", pinyin: "Bú yào." },
+      { en: "I'm just looking.", zh: "我看看。", pinyin: "Wǒ kànkan." },
+      { en: "Can I return it?", zh: "可以退货吗？", pinyin: "Kěyǐ tuìhuò ma?" },
+      { en: "Can I use a credit card?", zh: "信用卡能用吗？", pinyin: "Xìnyòngkǎ néng yòng ma?" },
+      { en: "Please wrap it up.", zh: "包起来。", pinyin: "Bāo qǐlai." }
+    ]
+  }
+];
+
+export const phrasebookTotal = phraseCategories.reduce((total, category) => total + category.phrases.length, 0);
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 6df6ebff9a6ef16cbeb23919735223f6619a9bee..36d357304a97629e5ccc913861cdd7243596c527
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -8,11 +8,12 @@
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
-const guideLinks = [
-  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
-  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
-  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
-];
+const guideLinks = [
+  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
+  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
+  { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
+];
 
 const websiteJsonLd = {
   "@context": "https://schema.org",
@@ -113,7 +114,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-3">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PhrasebookPage.tsx b/v2/src/pages/PhrasebookPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..a4aaa028248fdc7bf36108427495b7186fdc29b7
--- /dev/null
+++ b/v2/src/pages/PhrasebookPage.tsx
@@ -0,0 +1,165 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { phraseCategories, phrasebookTotal, type Phrase } from "../data/phrasebook";
+import { useLang } from "../store/language";
+
+const defaultCategory = phraseCategories[0];
+
+function copyText(text: string): Promise<void> {
+  if (navigator.clipboard) {
+    return navigator.clipboard.writeText(text);
+  }
+
+  return new Promise((resolve, reject) => {
+    const textarea = document.createElement("textarea");
+    textarea.value = text;
+    textarea.setAttribute("readonly", "");
+    textarea.style.position = "fixed";
+    textarea.style.top = "-1000px";
+    document.body.appendChild(textarea);
+    textarea.select();
+
+    const copied = document.execCommand("copy");
+    document.body.removeChild(textarea);
+
+    if (copied) {
+      resolve();
+      return;
+    }
+    reject(new Error("Copy failed"));
+  });
+}
+
+export default function PhrasebookPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeKey, setActiveKey] = useState(defaultCategory.key);
+  const [copiedZh, setCopiedZh] = useState<string | null>(null);
+  const activeCategory = phraseCategories.find((category) => category.key === activeKey) ?? defaultCategory;
+
+  async function handleCopy(phrase: Phrase) {
+    try {
+      await copyText(phrase.zh);
+      setCopiedZh(phrase.zh);
+      window.setTimeout(() => {
+        setCopiedZh((current) => (current === phrase.zh ? null : current));
+      }, 1400);
+    } catch {
+      setCopiedZh(null);
+    }
+  }
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-3">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <div className="flex flex-col gap-2">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            Essential phrases / 应急短语
+          </span>
+          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+            Essential Phrasebook / 应急短语手册
+          </h1>
+          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
+            English, pinyin, and Chinese for taxis, hotels, food, payments, shopping, and emergencies. / 覆盖打车、住宿、点餐、支付、购物和紧急情况。
+          </p>
+          <p className="text-xs font-bold uppercase tracking-widest text-jade">
+            {phrasebookTotal} phrases / {phrasebookTotal} 句
+          </p>
+        </div>
+      </header>
+
+      <section className="flex flex-col gap-4" aria-label="Phrase categories">
+        <div
+          role="tablist"
+          aria-label="Phrase categories / 短语场景"
+          className="flex gap-2 overflow-x-auto pb-1"
+        >
+          {phraseCategories.map((category) => {
+            const active = category.key === activeCategory.key;
+            return (
+              <button
+                key={category.key}
+                id={`phrasebook-tab-${category.key}`}
+                type="button"
+                role="tab"
+                aria-selected={active}
+                aria-controls={`phrasebook-panel-${category.key}`}
+                onClick={() => setActiveKey(category.key)}
+                className={clsx(
+                  "flex min-w-36 shrink-0 flex-col gap-1 rounded-lg border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                  active
+                    ? "border-ink bg-ink text-white shadow-sm"
+                    : "border-line bg-white text-ink hover:border-jade"
+                )}
+              >
+                <span className={clsx("text-[10px] font-bold uppercase tracking-widest", active ? "text-white/70" : "text-muted")}>
+                  {category.iconHint}
+                </span>
+                <span className="text-sm font-bold leading-tight">{category.titleEn}</span>
+                <span className={clsx("text-xs leading-tight", active ? "text-white/80" : "text-muted")}>
+                  {category.titleZh} · {category.phrases.length}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <div
+          id={`phrasebook-panel-${activeCategory.key}`}
+          role="tabpanel"
+          aria-labelledby={`phrasebook-tab-${activeCategory.key}`}
+          className="flex flex-col gap-3"
+        >
+          <header className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-2">
+            <div>
+              <h2 className="text-2xl font-bold leading-tight">
+                {activeCategory.titleEn} / {activeCategory.titleZh}
+              </h2>
+              <p className="text-xs text-muted">
+                {activeCategory.phrases.length} phrases / {activeCategory.phrases.length} 句
+              </p>
+            </div>
+          </header>
+
+          <ul className="grid gap-3">
+            {activeCategory.phrases.map((phrase) => {
+              const copied = copiedZh === phrase.zh;
+              return (
+                <li key={`${activeCategory.key}-${phrase.zh}`}>
+                  <article className="grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
+                    <div className="min-w-0">
+                      <p className="break-words text-base font-bold leading-snug">{phrase.en}</p>
+                      <p className="mt-1 break-words text-sm font-semibold leading-snug text-jade">
+                        {phrase.pinyin}
+                      </p>
+                      <p className="mt-1 break-words text-lg font-bold leading-snug">{phrase.zh}</p>
+                    </div>
+                    <button
+                      type="button"
+                      aria-label={`Copy Chinese phrase: ${phrase.zh}`}
+                      onClick={() => {
+                        void handleCopy(phrase);
+                      }}
+                      className={clsx(
+                        "h-10 rounded-lg border px-4 text-xs font-bold uppercase tracking-widest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                        copied
+                          ? "border-jade bg-jade text-white"
+                          : "border-line bg-paper text-ink hover:border-jade hover:bg-jade-soft"
+                      )}
+                    >
+                      {copied ? (isZh ? "已复制" : "Copied") : isZh ? "复制" : "Copy"}
+                    </button>
+                  </article>
+                </li>
+              );
+            })}
+          </ul>
+        </div>
+      </section>
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index e04b8ab90a3699cfa278f5ea29483bc30edb795f..b9b696df6fa00bc391d8df10bdbce96dcabd580c
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -1,9 +1,10 @@
 import { type RouteConfig, index, route } from "@react-router/dev/routes";
 
 export default [
-  index("./pages/HomePage.tsx"),
-  route("map", "./pages/MapPage.tsx"),
-  route("guide/:topic", "./pages/GuidePage.tsx"),
+  index("./pages/HomePage.tsx"),
+  route("map", "./pages/MapPage.tsx"),
+  route("phrasebook", "./pages/PhrasebookPage.tsx"),
+  route("guide/:topic", "./pages/GuidePage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),

codex
完成。

新建 2 个文件：`phrasebook.ts`、`PhrasebookPage.tsx`。修改 5 个文件：`routes.ts`、`react-router.config.ts`、`sitemap.xml`、`HomePage.tsx`、`SiteHeader.tsx`。

Phrasebook 总短语数：48 句，覆盖 7 个场景。

验证状态：`npx tsc --noEmit` 0 error；`npm run build` 0 error，`/phrasebook` 已 prerender。构建仅有既存 Vite 大 chunk/插件耗时 warning。
diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 2f156e1d62f1d87915b8a9c6b94733e1c028523b..adfcabaa94592bf2c136f0a522a2a633d6e892bf
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -9,6 +9,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/phrasebook</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/guide/entry</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index ca6de53a28c5c95b4d22dec4600405e9b2cf06de..0be050a497672fd006dcf773952ba991e41cd9e4
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -7,6 +7,7 @@
     return [
       "/",
       "/map",
+      "/phrasebook",
       "/guide/entry",
       "/guide/payments",
       "/guide/notes",
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index f8fb8569ef2d8617f100e8c55e64133741cab19b..6decfa020c6b81ca4f368a547fcf5d613b8d8789
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,14 +1,28 @@
-import { Link } from "react-router";
-import LanguageSwitch from "./LanguageSwitch";
-
-export default function SiteHeader() {
-  return (
-    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
-      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
-        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
-        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
-      </Link>
-      <LanguageSwitch />
-    </header>
-  );
-}
+import { Link } from "react-router";
+import LanguageSwitch from "./LanguageSwitch";
+import { useLang } from "../../store/language";
+
+export default function SiteHeader() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+
+  return (
+    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
+      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
+        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
+        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
+      </Link>
+      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
+        <nav aria-label={isZh ? "主导航" : "Main navigation"}>
+          <Link
+            to="/phrasebook"
+            className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted transition hover:border-jade hover:text-jade"
+          >
+            {isZh ? "应急短语" : "Phrases"}
+          </Link>
+        </nav>
+        <LanguageSwitch />
+      </div>
+    </header>
+  );
+}
diff --git a/v2/src/data/phrasebook.ts b/v2/src/data/phrasebook.ts
new file mode 100644
index 0000000000000000000000000000000000000000..fe01e699a457ed6e7ca8b2485ae7045c5fcde9a1
--- /dev/null
+++ b/v2/src/data/phrasebook.ts
@@ -0,0 +1,122 @@
+export type Phrase = { en: string; zh: string; pinyin: string };
+
+export type PhraseCategory = {
+  key: string;
+  titleEn: string;
+  titleZh: string;
+  iconHint?: string;
+  phrases: Phrase[];
+};
+
+export const phraseCategories: PhraseCategory[] = [
+  {
+    key: "basics",
+    titleEn: "Basics",
+    titleZh: "基础用语",
+    iconHint: "hello",
+    phrases: [
+      { en: "Hello.", zh: "你好。", pinyin: "Nǐ hǎo." },
+      { en: "Thank you.", zh: "谢谢。", pinyin: "Xièxie." },
+      { en: "Sorry.", zh: "对不起。", pinyin: "Duìbuqǐ." },
+      { en: "I don't understand.", zh: "我听不懂。", pinyin: "Wǒ tīng bù dǒng." },
+      { en: "Please say that again.", zh: "请再说一遍。", pinyin: "Qǐng zài shuō yí biàn." },
+      { en: "Please help me.", zh: "请帮我一下。", pinyin: "Qǐng bāng wǒ yí xià." }
+    ]
+  },
+  {
+    key: "transport",
+    titleEn: "Transport",
+    titleZh: "交通",
+    iconHint: "route",
+    phrases: [
+      { en: "How much to X?", zh: "去 X 多少钱？", pinyin: "Qù X duōshǎo qián?" },
+      {
+        en: "How do I get to metro station X?",
+        zh: "地铁 X 站怎么走？",
+        pinyin: "Dìtiě X zhàn zěnme zǒu?"
+      },
+      { en: "I want to take a taxi.", zh: "我要打车。", pinyin: "Wǒ yào dǎchē." },
+      { en: "Driver, please stop here.", zh: "师傅，请停一下。", pinyin: "Shīfu, qǐng tíng yí xià." },
+      { en: "How do I get to the high-speed rail station?", zh: "高铁站怎么走？", pinyin: "Gāotiě zhàn zěnme zǒu?" },
+      { en: "How do I get to the airport?", zh: "机场怎么走？", pinyin: "Jīchǎng zěnme zǒu?" },
+      { en: "Please tell me when we arrive.", zh: "到了麻烦说一声。", pinyin: "Dào le máfan shuō yì shēng." }
+    ]
+  },
+  {
+    key: "payments",
+    titleEn: "Payments",
+    titleZh: "支付",
+    iconHint: "wallet",
+    phrases: [
+      { en: "Don't you accept foreign cards?", zh: "不收外卡吗？", pinyin: "Bù shōu wàikǎ ma?" },
+      { en: "Is cash okay?", zh: "现金可以吗？", pinyin: "Xiànjīn kěyǐ ma?" },
+      { en: "That's too expensive.", zh: "太贵了。", pinyin: "Tài guì le." },
+      { en: "Can it be cheaper?", zh: "便宜点。", pinyin: "Piányi diǎn." },
+      { en: "I'll pay cash.", zh: "我付现金。", pinyin: "Wǒ fù xiànjīn." },
+      { en: "The QR code payment failed.", zh: "扫码失败了。", pinyin: "Sǎomǎ shībài le." },
+      { en: "Do you need the receipt?", zh: "收据要不要？", pinyin: "Shōujù yào bu yào?" }
+    ]
+  },
+  {
+    key: "food",
+    titleEn: "Food",
+    titleZh: "餐饮",
+    iconHint: "bowl",
+    phrases: [
+      { en: "Please make it not spicy.", zh: "不要辣。", pinyin: "Bú yào là." },
+      { en: "No X, I'm allergic.", zh: "不要 X，我过敏。", pinyin: "Bú yào X, wǒ guòmǐn." },
+      { en: "I am vegetarian.", zh: "我吃素。", pinyin: "Wǒ chī sù." },
+      { en: "What is this?", zh: "这是什么？", pinyin: "Zhè shì shénme?" },
+      { en: "What do you recommend?", zh: "推荐什么？", pinyin: "Tuījiàn shénme?" },
+      { en: "Extra rice, please.", zh: "加饭。", pinyin: "Jiā fàn." },
+      { en: "Please pack this to go.", zh: "打包。", pinyin: "Dǎbāo." },
+      { en: "Check, please.", zh: "结账。", pinyin: "Jiézhàng." }
+    ]
+  },
+  {
+    key: "accommodation",
+    titleEn: "Accommodation",
+    titleZh: "住宿",
+    iconHint: "hotel",
+    phrases: [
+      { en: "I want to check in.", zh: "我要办理入住。", pinyin: "Wǒ yào bànlǐ rùzhù." },
+      { en: "What time is check-out?", zh: "几点退房？", pinyin: "Jǐ diǎn tuìfáng?" },
+      { en: "What is the Wi-Fi password?", zh: "Wi-Fi 密码是多少？", pinyin: "Wi-Fi mìmǎ shì duōshǎo?" },
+      { en: "What time is breakfast?", zh: "早餐几点？", pinyin: "Zǎocān jǐ diǎn?" },
+      { en: "Can I store my luggage?", zh: "可以寄存行李吗？", pinyin: "Kěyǐ jìcún xíngli ma?" },
+      { en: "Can we add an extra bed?", zh: "可以加张床吗？", pinyin: "Kěyǐ jiā zhāng chuáng ma?" }
+    ]
+  },
+  {
+    key: "emergency",
+    titleEn: "Emergency",
+    titleZh: "应急",
+    iconHint: "sos",
+    phrases: [
+      { en: "Help me!", zh: "救救我！", pinyin: "Jiùjiu wǒ!" },
+      { en: "I am sick.", zh: "我生病了。", pinyin: "Wǒ shēngbìng le." },
+      { en: "My passport is lost.", zh: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le." },
+      { en: "Call an ambulance.", zh: "叫救护车。", pinyin: "Jiào jiùhùchē." },
+      { en: "Call the police.", zh: "报警。", pinyin: "Bàojǐng." },
+      { en: "My wallet was stolen.", zh: "我的钱包被偷了。", pinyin: "Wǒ de qiánbāo bèi tōu le." },
+      { en: "Give me some water, please.", zh: "给我点水。", pinyin: "Gěi wǒ diǎn shuǐ." }
+    ]
+  },
+  {
+    key: "shopping",
+    titleEn: "Shopping",
+    titleZh: "购物",
+    iconHint: "bag",
+    phrases: [
+      { en: "How much is it?", zh: "多少钱？", pinyin: "Duōshǎo qián?" },
+      { en: "Can I try it on?", zh: "可以试穿吗？", pinyin: "Kěyǐ shìchuān ma?" },
+      { en: "I don't want it.", zh: "不要。", pinyin: "Bú yào." },
+      { en: "I'm just looking.", zh: "我看看。", pinyin: "Wǒ kànkan." },
+      { en: "Can I return it?", zh: "可以退货吗？", pinyin: "Kěyǐ tuìhuò ma?" },
+      { en: "Can I use a credit card?", zh: "信用卡能用吗？", pinyin: "Xìnyòngkǎ néng yòng ma?" },
+      { en: "Please wrap it up.", zh: "包起来。", pinyin: "Bāo qǐlai." }
+    ]
+  }
+];
+
+export const phrasebookTotal = phraseCategories.reduce((total, category) => total + category.phrases.length, 0);
diff --git a/v2/src/pages/HomePage.tsx b/v2/src/pages/HomePage.tsx
index 6df6ebff9a6ef16cbeb23919735223f6619a9bee..36d357304a97629e5ccc913861cdd7243596c527
--- a/v2/src/pages/HomePage.tsx
+++ b/v2/src/pages/HomePage.tsx
@@ -8,11 +8,12 @@
 
 const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];
 
-const guideLinks = [
-  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
-  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
-  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
-];
+const guideLinks = [
+  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
+  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
+  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
+  { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
+];
 
 const websiteJsonLd = {
   "@context": "https://schema.org",
@@ -113,7 +114,7 @@
         </div>
       </Link>
 
-      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-3">
+      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
         {guideLinks.map((item) => (
           <Link
             key={item.to}
diff --git a/v2/src/pages/PhrasebookPage.tsx b/v2/src/pages/PhrasebookPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..a4aaa028248fdc7bf36108427495b7186fdc29b7
--- /dev/null
+++ b/v2/src/pages/PhrasebookPage.tsx
@@ -0,0 +1,165 @@
+import { useState } from "react";
+import { Link } from "react-router";
+import clsx from "clsx";
+import { phraseCategories, phrasebookTotal, type Phrase } from "../data/phrasebook";
+import { useLang } from "../store/language";
+
+const defaultCategory = phraseCategories[0];
+
+function copyText(text: string): Promise<void> {
+  if (navigator.clipboard) {
+    return navigator.clipboard.writeText(text);
+  }
+
+  return new Promise((resolve, reject) => {
+    const textarea = document.createElement("textarea");
+    textarea.value = text;
+    textarea.setAttribute("readonly", "");
+    textarea.style.position = "fixed";
+    textarea.style.top = "-1000px";
+    document.body.appendChild(textarea);
+    textarea.select();
+
+    const copied = document.execCommand("copy");
+    document.body.removeChild(textarea);
+
+    if (copied) {
+      resolve();
+      return;
+    }
+    reject(new Error("Copy failed"));
+  });
+}
+
+export default function PhrasebookPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [activeKey, setActiveKey] = useState(defaultCategory.key);
+  const [copiedZh, setCopiedZh] = useState<string | null>(null);
+  const activeCategory = phraseCategories.find((category) => category.key === activeKey) ?? defaultCategory;
+
+  async function handleCopy(phrase: Phrase) {
+    try {
+      await copyText(phrase.zh);
+      setCopiedZh(phrase.zh);
+      window.setTimeout(() => {
+        setCopiedZh((current) => (current === phrase.zh ? null : current));
+      }, 1400);
+    } catch {
+      setCopiedZh(null);
+    }
+  }
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-3">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <div className="flex flex-col gap-2">
+          <span className="text-xs font-bold uppercase tracking-widest text-muted">
+            Essential phrases / 应急短语
+          </span>
+          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+            Essential Phrasebook / 应急短语手册
+          </h1>
+          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
+            English, pinyin, and Chinese for taxis, hotels, food, payments, shopping, and emergencies. / 覆盖打车、住宿、点餐、支付、购物和紧急情况。
+          </p>
+          <p className="text-xs font-bold uppercase tracking-widest text-jade">
+            {phrasebookTotal} phrases / {phrasebookTotal} 句
+          </p>
+        </div>
+      </header>
+
+      <section className="flex flex-col gap-4" aria-label="Phrase categories">
+        <div
+          role="tablist"
+          aria-label="Phrase categories / 短语场景"
+          className="flex gap-2 overflow-x-auto pb-1"
+        >
+          {phraseCategories.map((category) => {
+            const active = category.key === activeCategory.key;
+            return (
+              <button
+                key={category.key}
+                id={`phrasebook-tab-${category.key}`}
+                type="button"
+                role="tab"
+                aria-selected={active}
+                aria-controls={`phrasebook-panel-${category.key}`}
+                onClick={() => setActiveKey(category.key)}
+                className={clsx(
+                  "flex min-w-36 shrink-0 flex-col gap-1 rounded-lg border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                  active
+                    ? "border-ink bg-ink text-white shadow-sm"
+                    : "border-line bg-white text-ink hover:border-jade"
+                )}
+              >
+                <span className={clsx("text-[10px] font-bold uppercase tracking-widest", active ? "text-white/70" : "text-muted")}>
+                  {category.iconHint}
+                </span>
+                <span className="text-sm font-bold leading-tight">{category.titleEn}</span>
+                <span className={clsx("text-xs leading-tight", active ? "text-white/80" : "text-muted")}>
+                  {category.titleZh} · {category.phrases.length}
+                </span>
+              </button>
+            );
+          })}
+        </div>
+
+        <div
+          id={`phrasebook-panel-${activeCategory.key}`}
+          role="tabpanel"
+          aria-labelledby={`phrasebook-tab-${activeCategory.key}`}
+          className="flex flex-col gap-3"
+        >
+          <header className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-2">
+            <div>
+              <h2 className="text-2xl font-bold leading-tight">
+                {activeCategory.titleEn} / {activeCategory.titleZh}
+              </h2>
+              <p className="text-xs text-muted">
+                {activeCategory.phrases.length} phrases / {activeCategory.phrases.length} 句
+              </p>
+            </div>
+          </header>
+
+          <ul className="grid gap-3">
+            {activeCategory.phrases.map((phrase) => {
+              const copied = copiedZh === phrase.zh;
+              return (
+                <li key={`${activeCategory.key}-${phrase.zh}`}>
+                  <article className="grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
+                    <div className="min-w-0">
+                      <p className="break-words text-base font-bold leading-snug">{phrase.en}</p>
+                      <p className="mt-1 break-words text-sm font-semibold leading-snug text-jade">
+                        {phrase.pinyin}
+                      </p>
+                      <p className="mt-1 break-words text-lg font-bold leading-snug">{phrase.zh}</p>
+                    </div>
+                    <button
+                      type="button"
+                      aria-label={`Copy Chinese phrase: ${phrase.zh}`}
+                      onClick={() => {
+                        void handleCopy(phrase);
+                      }}
+                      className={clsx(
+                        "h-10 rounded-lg border px-4 text-xs font-bold uppercase tracking-widest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
+                        copied
+                          ? "border-jade bg-jade text-white"
+                          : "border-line bg-paper text-ink hover:border-jade hover:bg-jade-soft"
+                      )}
+                    >
+                      {copied ? (isZh ? "已复制" : "Copied") : isZh ? "复制" : "Copy"}
+                    </button>
+                  </article>
+                </li>
+              );
+            })}
+          </ul>
+        </div>
+      </section>
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index e04b8ab90a3699cfa278f5ea29483bc30edb795f..b9b696df6fa00bc391d8df10bdbce96dcabd580c
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -1,9 +1,10 @@
 import { type RouteConfig, index, route } from "@react-router/dev/routes";
 
 export default [
-  index("./pages/HomePage.tsx"),
-  route("map", "./pages/MapPage.tsx"),
-  route("guide/:topic", "./pages/GuidePage.tsx"),
+  index("./pages/HomePage.tsx"),
+  route("map", "./pages/MapPage.tsx"),
+  route("phrasebook", "./pages/PhrasebookPage.tsx"),
+  route("guide/:topic", "./pages/GuidePage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),

tokens used
142,629

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
