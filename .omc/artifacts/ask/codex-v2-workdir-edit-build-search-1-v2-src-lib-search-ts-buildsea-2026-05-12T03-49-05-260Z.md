# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-12T03:49:05.261Z

## Original task

在 v2/ workdir 真的 edit + build。

新功能：/search 全站搜索页

要求：
1. 看 v2/src/lib/search.ts 现有实现，扩展为 buildSearchIndex 包含：景点（city-attractions.ts）、phrasebook 短语（phrasebook.ts）、FAQ（top-questions.ts）、payments pitfalls / transport pitfalls / food pitfalls / emergency pitfalls / visa rules。每条 index entry：{ id, type: 'attraction'|'phrase'|'faq'|'pitfall'|'visa', titleEn, titleZh, snippetEn, snippetZh, href }
2. 新建 v2/src/pages/SearchPage.tsx —— 输入框 + 实时过滤（fuzzy match，包含 title 和 snippet）+ 分组显示结果（按 type 分 section）+ 每条点击跳到 href。无结果时显示 'No matches. Try different keywords.' / '没找到，换个关键词试试。'
3. SiteHeader 加搜索 icon 按钮，点击 navigate('/search')
4. routes.ts 加 route('search', './pages/SearchPage.tsx')
5. react-router.config.ts prerender 加 /search
6. public/sitemap.xml 加 /search

完成后 npx tsc --noEmit + npm run build 0 error。

报告 250 字以内：index entry 总数、改了哪些文件、build 状态。

## Final prompt

在 v2/ workdir 真的 edit + build。

新功能：/search 全站搜索页

要求：
1. 看 v2/src/lib/search.ts 现有实现，扩展为 buildSearchIndex 包含：景点（city-attractions.ts）、phrasebook 短语（phrasebook.ts）、FAQ（top-questions.ts）、payments pitfalls / transport pitfalls / food pitfalls / emergency pitfalls / visa rules。每条 index entry：{ id, type: 'attraction'|'phrase'|'faq'|'pitfall'|'visa', titleEn, titleZh, snippetEn, snippetZh, href }
2. 新建 v2/src/pages/SearchPage.tsx —— 输入框 + 实时过滤（fuzzy match，包含 title 和 snippet）+ 分组显示结果（按 type 分 section）+ 每条点击跳到 href。无结果时显示 'No matches. Try different keywords.' / '没找到，换个关键词试试。'
3. SiteHeader 加搜索 icon 按钮，点击 navigate('/search')
4. routes.ts 加 route('search', './pages/SearchPage.tsx')
5. react-router.config.ts prerender 加 /search
6. public/sitemap.xml 加 /search

完成后 npx tsc --noEmit + npm run build 0 error。

报告 250 字以内：index entry 总数、改了哪些文件、build 状态。

## Raw output

```text
SUCCESS: The process with PID 601036 (child process of PID 611932) has been terminated.
SUCCESS: The process with PID 611932 (child process of PID 569620) has been terminated.
SUCCESS: The process with PID 569620 (child process of PID 614332) has been terminated.
SUCCESS: The process with PID 614332 (child process of PID 607064) has been terminated.
SUCCESS: The process with PID 613800 (child process of PID 608036) has been terminated.
SUCCESS: The process with PID 608036 (child process of PID 612504) has been terminated.
SUCCESS: The process with PID 612504 (child process of PID 588628) has been terminated.
SUCCESS: The process with PID 588628 (child process of PID 607064) has been terminated.
完成。

Index entry 总数：207。

改动文件：`src/lib/search.ts`、`src/pages/SearchPage.tsx`、`src/components/layout/SiteHeader.tsx`、`src/routes.ts`、`react-router.config.ts`、`public/sitemap.xml`、`src/components/city/CityIntro.tsx`。

验证：`npx tsc --noEmit` 0 error；`npm run build` 0 error，`/search` 已 prerender。
SUCCESS: The process with PID 610928 (child process of PID 594368) has been terminated.
SUCCESS: The process with PID 594368 (child process of PID 588000) has been terminated.
SUCCESS: The process with PID 588000 (child process of PID 378764) has been terminated.
SUCCESS: The process with PID 378764 (child process of PID 607064) has been terminated.


OpenAI Codex v0.128.0 (research preview)
--------
workdir: c:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1a46-7524-7b33-bd71-1ca44cf02030
--------
user
在 v2/ workdir 真的 edit + build。

新功能：/search 全站搜索页

要求：
1. 看 v2/src/lib/search.ts 现有实现，扩展为 buildSearchIndex 包含：景点（city-attractions.ts）、phrasebook 短语（phrasebook.ts）、FAQ（top-questions.ts）、payments pitfalls / transport pitfalls / food pitfalls / emergency pitfalls / visa rules。每条 index entry：{ id, type: 'attraction'|'phrase'|'faq'|'pitfall'|'visa', titleEn, titleZh, snippetEn, snippetZh, href }
2. 新建 v2/src/pages/SearchPage.tsx —— 输入框 + 实时过滤（fuzzy match，包含 title 和 snippet）+ 分组显示结果（按 type 分 section）+ 每条点击跳到 href。无结果时显示 'No matches. Try different keywords.' / '没找到，换个关键词试试。'
3. SiteHeader 加搜索 icon 按钮，点击 navigate('/search')
4. routes.ts 加 route('search', './pages/SearchPage.tsx')
5. react-router.config.ts prerender 加 /search
6. public/sitemap.xml 加 /search

完成后 npx tsc --noEmit + npm run build 0 error。

报告 250 字以内：index entry 总数、改了哪些文件、build 状态。
codex
我会先在 `v2` 里读现有搜索实现和路由/header 结构，再按现有模式加页面与索引，最后跑 `tsc` 和 build。React 页面改动会按本仓库现有 React 写法处理。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'C:/Users/h/.codex/plugins/cache/openai-curated/build-web-apps/63976030/skills/react-best-practices/SKILL.md'" in c:\Users\h\Documents\New project 2
 succeeded in 708ms:
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
我现在读取 `v2` 的搜索数据源、路由配置和 header。先确认数据形状，避免手写索引时破坏现有页面约定。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Force' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg --files' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/lib/search.ts'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/routes.ts'" in c:\Users\h\Documents\New project 2\v2
 succeeded in 588ms:
vite.config.ts
tsconfig.node.json
tsconfig.json
tsconfig.app.json
STYLE_GUIDE.md
package-lock.json
eslint.config.js
react-router.config.ts
index.html
src\App.tsx
src\root.tsx
src\routes.ts
README.md
package.json
src\main.tsx
scripts\restart-dev.mjs
scripts\interaction-check.mjs
research\city-beijing-deep.md
research\china-platforms-04-legal.md
research\china-platforms-03-ugc.md
research\china-platforms-02-maps-reviews.md
research\china-platforms-01-video.md
research\blog-platform-bureau-sweep.md
research\alipay-wechat-foreigner-registration.md
research\city-shenzhen-deep.md
research\city-shanghai-deep.md
research\city-guangzhou-deep.md
research\evaluation-02-seo-paid.md
research\evaluation-01-acceptance.md
research\evaluation-03-home-vs-competitors.md
public\favicon.svg
public\sitemap.xml
public\robots.txt
research\zh-mandarin-audit.md
research\ugc-qa-implementation.md
research\seo-05-our-action-plan.md
research\seo-04-multi-engine.md
research\seo-02-decompose-winners.md
research\seo-01-landscape.md
research\evaluation-04-rewrites-applied.md
research\evaluation-04-en-machine-feel.md
src\hooks\useProvinceShapes.ts
src\hooks\useIsDesktop.ts
src\hooks\useCityViews.ts
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
src\data\city-attractions.ts
src\data\atlas.ts
src\pages\SourcesPage.tsx
src\pages\SharePage.tsx
src\pages\PlanPage.tsx
src\pages\PhrasebookPage.tsx
src\pages\MapPage.tsx
src\pages\HomePage.tsx
src\pages\GuidePage.tsx
src\pages\CityPage.tsx
src\pages\AskPage.tsx
public\assets\three.module.min.js
src\components\common\SourcesNote.tsx
src\components\common\ScrollToTop.tsx
src\components\common\PracticalBlock.tsx
src\components\common\MapErrorBoundary.tsx
src\components\common\CityFurtherReading.tsx
src\components\policy\TravelAlerts.tsx
src\lib\unsplash.ts
src\lib\shapes.ts
src\lib\search.ts
src\lib\jsonLd.ts
src\lib\i18n.ts
src\lib\format.ts
src\lib\cityRoutes.ts
public\assets\china-province-shapes.json
public\assets\china-map-gs2022-4309.jpg
public\assets\earth-bluemarble.jpg
src\store\atlas.ts
src\store\LanguageProvider.tsx
src\store\language.ts
src\store\AtlasProvider.tsx
src\components\sections\TopQuestions.tsx
src\styles\globals.css
src\components\map\Map3D.tsx
src\components\map\HeroMap.tsx
src\components\map\Province3DOverlay.tsx
src\components\map\MapPreview.tsx
src\components\map\provinceColors.ts
src\components\map\ProvinceHitAreaLayer.tsx
src\components\map\SpecialRegionMarkers.tsx
src\components\map\ProvinceShapeLayer.tsx
src\components\map\ProvinceLabelLayer.tsx
src\components\map\ProvinceInfoCard.tsx
src\services\notes.ts
src\components\layout\SiteHeader.tsx
src\components\layout\SiteFooter.tsx
src\components\layout\LanguageSwitch.tsx
src\components\city\CityNav.tsx
src\components\city\CityIntro.tsx
src\components\city\CityImagePanel.tsx
src\components\city\CuisineDrawer.tsx
src\components\city\CitySeasonBlock.tsx
src\components\pillar\VisaChecker.tsx
src\components\pillar\TransportGuide.tsx
src\components\pillar\PaymentsPractical.tsx
src\components\pillar\PaymentsChecklist.tsx
src\components\pillar\FoodGuide.tsx
src\components\pillar\EmergencyBriefing.tsx
public\assets\province-map-textures\anhui.png
public\assets\province-map-textures\guangdong.png
public\assets\province-map-textures\gansu.png
public\assets\province-map-textures\fujian.png
public\assets\province-map-textures\chongqing.png
public\assets\province-map-textures\beijing.png
public\assets\province-map-textures\heilongjiang.png
public\assets\province-map-textures\hebei.png
public\assets\province-map-textures\hainan.png
public\assets\province-map-textures\guizhou.png
public\assets\province-map-textures\guangxi.png
public\assets\province-map-textures\hubei.png
public\assets\province-map-textures\hong-kong.png
public\assets\province-map-textures\henan.png
public\assets\province-map-textures\hunan.png
public\assets\province-map-textures\inner-mongolia.png
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

 succeeded in 641ms:
import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
import { provinceHitAreas } from "../data/map-sources";

export type SearchRecord = {
  zh: string;
  en: string;
  type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
  provinceId: string;
  cityId?: string;
  aliases: string[];
};

const NORMALIZE_PATTERN = /[路,锛屻€?\s/'鈥?]+/g;

const normalize = (value: string): string =>
  value.toLowerCase().replace(NORMALIZE_PATTERN, "").trim();

const splitGroup = (value: string | undefined): string[] =>
  (value ?? "").split("/").map((s) => s.trim()).filter(Boolean);

const buildIndex = (): readonly SearchRecord[] => {
  const records: SearchRecord[] = [];
  const seen = new Set<string>();

  const push = (record: SearchRecord) => {
    const key = `${record.type}|${record.provinceId}|${record.cityId ?? ""}|${normalize(record.zh)}|${normalize(record.en)}`;
    if (seen.has(key)) return;
    seen.add(key);
    records.push(record);
  };

  atlasData.forEach((province) => {
    push({
      zh: province.zh,
      en: province.name,
      type: "province",
      provinceId: province.id,
      aliases: [province.zh, province.name, province.id]
    });

    province.cities.forEach((city) => {
      push({
        zh: city.zh,
        en: city.name,
        type: "city",
        provinceId: province.id,
        cityId: city.id,
        aliases: [city.zh, city.name, city.id, city.province]
      });

      const museumsZh = splitGroup(city.museumZh);
      const museumsEn = splitGroup(city.museum);
      const museumPairs = Math.max(museumsZh.length, museumsEn.length);
      for (let i = 0; i < museumPairs; i++) {
        const zh = museumsZh[i] ?? museumsEn[i] ?? "";
        const en = museumsEn[i] ?? museumsZh[i] ?? "";
        if (!zh && !en) continue;
        push({
          zh,
          en,
          type: "museum",
          provinceId: province.id,
          cityId: city.id,
          aliases: [zh, en].filter(Boolean)
        });
      }

      city.sites.forEach((siteEn, index) => {
        const siteZh = city.sitesZh[index] ?? siteEn;
        push({
          zh: siteZh,
          en: siteEn,
          type: "site",
          provinceId: province.id,
          cityId: city.id,
          aliases: [siteEn, siteZh]
        });
      });
    });
  });

  provinceHitAreas.forEach((area) => {
    push({
      zh: area.zh,
      en: area.en,
      type: "province",
      provinceId: area.id,
      aliases: [area.zh, area.en, area.id]
    });
  });

  Object.entries(provinceAttractionSeed).forEach(([provinceId, attractions]) => {
    attractions.forEach((attraction) => {
      push({
        zh: attraction.zh,
        en: attraction.en,
        type: "site",
        provinceId,
        aliases: [attraction.zh, attraction.en]
      });
    });
  });

  administrativeSearchSeed.forEach((item) => {
    push({
      zh: item.zh,
      en: item.en,
      type: item.type,
      provinceId: item.provinceId,
      cityId: item.cityId,
      aliases: [item.zh, item.en, ...(item.aliases ?? [])]
    });
  });

  return records;
};

const searchIndex = buildIndex();
const tokenIndex = searchIndex.map((record) => ({
  record,
  tokens: [record.zh, record.en, ...record.aliases].map(normalize).filter(Boolean)
}));

export const getAllRecords = (): readonly SearchRecord[] => searchIndex;

export const findBestMatch = (query: string): SearchRecord | null => {
  const target = normalize(query);
  if (!target) return null;

  let best: { record: SearchRecord; score: number } | null = null;
  for (const { record, tokens } of tokenIndex) {
    let score = 0;
    if (tokens.some((token) => token === target)) score = 3;
    else if (tokens.some((token) => token.startsWith(target))) score = 2;
    else if (tokens.some((token) => token.includes(target) || target.includes(token))) score = 1;
    if (score > 0 && (!best || score > best.score)) {
      best = { record, score };
      if (score === 3) break;
    }
  }
  return best?.record ?? null;
};

 succeeded in 642ms:
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./pages/HomePage.tsx"),
  route("map", "./pages/MapPage.tsx"),
  route("phrasebook", "./pages/PhrasebookPage.tsx"),
  route("guide/:topic", "./pages/GuidePage.tsx"),
  route("plan", "./pages/PlanPage.tsx"),
  route("city/:cityId", "./pages/CityPage.tsx"),
  route("share", "./pages/SharePage.tsx"),
  route("ask", "./pages/AskPage.tsx"),
  route("sources", "./pages/SourcesPage.tsx"),
  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
] satisfies RouteConfig;

 succeeded in 698ms:


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



exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/components/layout/SiteHeader.tsx'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'react-router.config.ts'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'public/sitemap.xml'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/pages/PhrasebookPage.tsx'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/pages/GuidePage.tsx'" in c:\Users\h\Documents\New project 2\v2
 succeeded in 1378ms:
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

 succeeded in 1454ms:
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

 succeeded in 1458ms:
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
    <loc>https://travel-china.example.com/plan</loc>
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

 succeeded in 1502ms:
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
      "/plan",
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

 succeeded in 1529ms:
import { useState } from "react";
import { Link } from "react-router";
import clsx from "clsx";
import { phraseCategories, phrasebookTotal, type Phrase } from "../data/phrasebook";
import { useLang } from "../store/language";

const defaultCategory = phraseCategories[0];

function copyText(text: string): Promise<void> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }

  return new Promise((resolve, reject) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-1000px";
    document.body.appendChild(textarea);
    textarea.select();

    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);

    if (copied) {
      resolve();
      return;
    }
    reject(new Error("Copy failed"));
  });
}

export default function PhrasebookPage() {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const [activeKey, setActiveKey] = useState(defaultCategory.key);
  const [copiedZh, setCopiedZh] = useState<string | null>(null);
  const activeCategory = phraseCategories.find((category) => category.key === activeKey) ?? defaultCategory;

  async function handleCopy(phrase: Phrase) {
    try {
      await copyText(phrase.zh);
      setCopiedZh(phrase.zh);
      window.setTimeout(() => {
        setCopiedZh((current) => (current === phrase.zh ? null : current));
      }, 1400);
    } catch {
      setCopiedZh(null);
    }
  }

  return (
    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:py-10">
      <header className="flex flex-col gap-3">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
          {isZh ? "鈫?杩斿洖棣栭〉" : "鈫?Home"}
        </Link>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            Essential phrases / 搴旀€ョ煭璇?          </span>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            Essential Phrasebook / 搴旀€ョ煭璇墜鍐?          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            English, pinyin, and Chinese for taxis, hotels, food, payments, shopping, and emergencies. / 瑕嗙洊鎵撹溅銆佷綇瀹裤€佺偣椁愩€佹敮浠樸€佽喘鐗╁拰绱ф€ユ儏鍐点€?          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-jade">
            {phrasebookTotal} phrases / {phrasebookTotal} 鍙?          </p>
        </div>
      </header>

      <section className="flex flex-col gap-4" aria-label="Phrase categories">
        <div
          role="tablist"
          aria-label="Phrase categories / 鐭鍦烘櫙"
          className="flex gap-2 overflow-x-auto pb-1"
        >
          {phraseCategories.map((category) => {
            const active = category.key === activeCategory.key;
            return (
              <button
                key={category.key}
                id={`phrasebook-tab-${category.key}`}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls={`phrasebook-panel-${category.key}`}
                onClick={() => setActiveKey(category.key)}
                className={clsx(
                  "flex min-w-36 shrink-0 flex-col gap-1 rounded-lg border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
                  active
                    ? "border-ink bg-ink text-white shadow-sm"
                    : "border-line bg-white text-ink hover:border-jade"
                )}
              >
                <span className={clsx("text-[10px] font-bold uppercase tracking-widest", active ? "text-white/70" : "text-muted")}>
                  {category.iconHint}
                </span>
                <span className="text-sm font-bold leading-tight">{category.titleEn}</span>
                <span className={clsx("text-xs leading-tight", active ? "text-white/80" : "text-muted")}>
                  {category.titleZh} 路 {category.phrases.length}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id={`phrasebook-panel-${activeCategory.key}`}
          role="tabpanel"
          aria-labelledby={`phrasebook-tab-${activeCategory.key}`}
          className="flex flex-col gap-3"
        >
          <header className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-2">
            <div>
              <h2 className="text-2xl font-bold leading-tight">
                {activeCategory.titleEn} / {activeCategory.titleZh}
              </h2>
              <p className="text-xs text-muted">
                {activeCategory.phrases.length} phrases / {activeCategory.phrases.length} 鍙?              </p>
            </div>
          </header>

          <ul className="grid gap-3">
            {activeCategory.phrases.map((phrase) => {
              const copied = copiedZh === phrase.zh;
              return (
                <li key={`${activeCategory.key}-${phrase.zh}`}>
                  <article className="grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <div className="min-w-0">
                      <p className="break-words text-base font-bold leading-snug">{phrase.en}</p>
                      <p className="mt-1 break-words text-sm font-semibold leading-snug text-jade">
                        {phrase.pinyin}
                      </p>
                      <p className="mt-1 break-words text-lg font-bold leading-snug">{phrase.zh}</p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Copy Chinese phrase: ${phrase.zh}`}
                      onClick={() => {
                        void handleCopy(phrase);
                      }}
                      className={clsx(
                        "h-10 rounded-lg border px-4 text-xs font-bold uppercase tracking-widest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
                        copied
                          ? "border-jade bg-jade text-white"
                          : "border-line bg-paper text-ink hover:border-jade hover:bg-jade-soft"
                      )}
                    >
                      {copied ? (isZh ? "宸插鍒? : "Copied") : isZh ? "澶嶅埗" : "Copy"}
                    </button>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}

codex
数据文件里有一些双语内容已经存在，我会复用这些字段生成 `buildSearchIndex`，并保持旧的地图搜索 API 不断。接下来我会定位 pitfalls 和 visa rules 的实际导出结构。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/data/city-attractions.ts'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/data/phrasebook.ts'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/data/top-questions.ts'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/data/practical-payments.ts'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/data/practical-other.ts'" in c:\Users\h\Documents\New project 2\v2
 succeeded in 1066ms:
export type Phrase = { en: string; zh: string; pinyin: string };

export type PhraseCategory = {
  key: string;
  titleEn: string;
  titleZh: string;
  iconHint?: string;
  phrases: Phrase[];
};

export const phraseCategories: PhraseCategory[] = [
  {
    key: "basics",
    titleEn: "Basics",
    titleZh: "鍩虹鐢ㄨ",
    iconHint: "hello",
    phrases: [
      { en: "Hello.", zh: "浣犲ソ銆?, pinyin: "N菒 h菐o." },
      { en: "Thank you.", zh: "璋㈣阿銆?, pinyin: "Xi猫xie." },
      { en: "Sorry.", zh: "瀵逛笉璧枫€?, pinyin: "Du矛buq菒." },
      { en: "I don't understand.", zh: "鎴戝惉涓嶆噦銆?, pinyin: "W菕 t墨ng b霉 d菕ng." },
      { en: "Please say that again.", zh: "璇峰啀璇翠竴閬嶃€?, pinyin: "Q菒ng z脿i shu艒 y铆 bi脿n." },
      { en: "Please help me.", zh: "璇峰府鎴戜竴涓嬨€?, pinyin: "Q菒ng b膩ng w菕 y铆 xi脿." }
    ]
  },
  {
    key: "transport",
    titleEn: "Transport",
    titleZh: "浜ら€?,
    iconHint: "route",
    phrases: [
      { en: "How much to X?", zh: "鍘?X 澶氬皯閽憋紵", pinyin: "Q霉 X du艒sh菐o qi谩n?" },
      {
        en: "How do I get to metro station X?",
        zh: "鍦伴搧 X 绔欐€庝箞璧帮紵",
        pinyin: "D矛ti臎 X zh脿n z臎nme z菕u?"
      },
      { en: "I want to take a taxi.", zh: "鎴戣鎵撹溅銆?, pinyin: "W菕 y脿o d菐ch膿." },
      { en: "Driver, please stop here.", zh: "甯堝倕锛岃鍋滀竴涓嬨€?, pinyin: "Sh墨fu, q菒ng t铆ng y铆 xi脿." },
      { en: "How do I get to the high-speed rail station?", zh: "楂橀搧绔欐€庝箞璧帮紵", pinyin: "G膩oti臎 zh脿n z臎nme z菕u?" },
      { en: "How do I get to the airport?", zh: "鏈哄満鎬庝箞璧帮紵", pinyin: "J墨ch菐ng z臎nme z菕u?" },
      { en: "Please tell me when we arrive.", zh: "鍒颁簡楹荤儲璇翠竴澹般€?, pinyin: "D脿o le m谩fan shu艒 y矛 sh膿ng." }
    ]
  },
  {
    key: "payments",
    titleEn: "Payments",
    titleZh: "鏀粯",
    iconHint: "wallet",
    phrases: [
      { en: "Don't you accept foreign cards?", zh: "涓嶆敹澶栧崱鍚楋紵", pinyin: "B霉 sh艒u w脿ik菐 ma?" },
      { en: "Is cash okay?", zh: "鐜伴噾鍙互鍚楋紵", pinyin: "Xi脿nj墨n k臎y菒 ma?" },
      { en: "That's too expensive.", zh: "澶吹浜嗐€?, pinyin: "T脿i gu矛 le." },
      { en: "Can it be cheaper?", zh: "渚垮疁鐐广€?, pinyin: "Pi谩nyi di菐n." },
      { en: "I'll pay cash.", zh: "鎴戜粯鐜伴噾銆?, pinyin: "W菕 f霉 xi脿nj墨n." },
      { en: "The QR code payment failed.", zh: "鎵爜澶辫触浜嗐€?, pinyin: "S菐om菐 sh墨b脿i le." },
      { en: "Do you need the receipt?", zh: "鏀舵嵁瑕佷笉瑕侊紵", pinyin: "Sh艒uj霉 y脿o bu y脿o?" }
    ]
  },
  {
    key: "food",
    titleEn: "Food",
    titleZh: "椁愰ギ",
    iconHint: "bowl",
    phrases: [
      { en: "Please make it not spicy.", zh: "涓嶈杈ｃ€?, pinyin: "B煤 y脿o l脿." },
      { en: "No X, I'm allergic.", zh: "涓嶈 X锛屾垜杩囨晱銆?, pinyin: "B煤 y脿o X, w菕 gu貌m菒n." },
      { en: "I am vegetarian.", zh: "鎴戝悆绱犮€?, pinyin: "W菕 ch墨 s霉." },
      { en: "What is this?", zh: "杩欐槸浠€涔堬紵", pinyin: "Zh猫 sh矛 sh茅nme?" },
      { en: "What do you recommend?", zh: "鎺ㄨ崘浠€涔堬紵", pinyin: "Tu墨ji脿n sh茅nme?" },
      { en: "Extra rice, please.", zh: "鍔犻キ銆?, pinyin: "Ji膩 f脿n." },
      { en: "Please pack this to go.", zh: "鎵撳寘銆?, pinyin: "D菐b膩o." },
      { en: "Check, please.", zh: "缁撹处銆?, pinyin: "Ji茅zh脿ng." }
    ]
  },
  {
    key: "accommodation",
    titleEn: "Accommodation",
    titleZh: "浣忓",
    iconHint: "hotel",
    phrases: [
      { en: "I want to check in.", zh: "鎴戣鍔炵悊鍏ヤ綇銆?, pinyin: "W菕 y脿o b脿nl菒 r霉zh霉." },
      { en: "What time is check-out?", zh: "鍑犵偣閫€鎴匡紵", pinyin: "J菒 di菐n tu矛f谩ng?" },
      { en: "What is the Wi-Fi password?", zh: "Wi-Fi 瀵嗙爜鏄灏戯紵", pinyin: "Wi-Fi m矛m菐 sh矛 du艒sh菐o?" },
      { en: "What time is breakfast?", zh: "鏃╅鍑犵偣锛?, pinyin: "Z菐oc膩n j菒 di菐n?" },
      { en: "Can I store my luggage?", zh: "鍙互瀵勫瓨琛屾潕鍚楋紵", pinyin: "K臎y菒 j矛c煤n x铆ngli ma?" },
      { en: "Can we add an extra bed?", zh: "鍙互鍔犲紶搴婂悧锛?, pinyin: "K臎y菒 ji膩 zh膩ng chu谩ng ma?" }
    ]
  },
  {
    key: "emergency",
    titleEn: "Emergency",
    titleZh: "搴旀€?,
    iconHint: "sos",
    phrases: [
      { en: "Help me!", zh: "鏁戞晳鎴戯紒", pinyin: "Ji霉jiu w菕!" },
      { en: "I am sick.", zh: "鎴戠敓鐥呬簡銆?, pinyin: "W菕 sh膿ngb矛ng le." },
      { en: "My passport is lost.", zh: "鎴戠殑鎶ょ収涓簡銆?, pinyin: "W菕 de h霉zh脿o di奴 le." },
      { en: "Call an ambulance.", zh: "鍙晳鎶よ溅銆?, pinyin: "Ji脿o ji霉h霉ch膿." },
      { en: "Call the police.", zh: "鎶ヨ銆?, pinyin: "B脿oj菒ng." },
      { en: "My wallet was stolen.", zh: "鎴戠殑閽卞寘琚伔浜嗐€?, pinyin: "W菕 de qi谩nb膩o b猫i t艒u le." },
      { en: "Give me some water, please.", zh: "缁欐垜鐐规按銆?, pinyin: "G臎i w菕 di菐n shu菒." }
    ]
  },
  {
    key: "shopping",
    titleEn: "Shopping",
    titleZh: "璐墿",
    iconHint: "bag",
    phrases: [
      { en: "How much is it?", zh: "澶氬皯閽憋紵", pinyin: "Du艒sh菐o qi谩n?" },
      { en: "Can I try it on?", zh: "鍙互璇曠┛鍚楋紵", pinyin: "K臎y菒 sh矛chu膩n ma?" },
      { en: "I don't want it.", zh: "涓嶈銆?, pinyin: "B煤 y脿o." },
      { en: "I'm just looking.", zh: "鎴戠湅鐪嬨€?, pinyin: "W菕 k脿nkan." },
      { en: "Can I return it?", zh: "鍙互閫€璐у悧锛?, pinyin: "K臎y菒 tu矛hu貌 ma?" },
      { en: "Can I use a credit card?", zh: "淇＄敤鍗¤兘鐢ㄥ悧锛?, pinyin: "X矛ny貌ngk菐 n茅ng y貌ng ma?" },
      { en: "Please wrap it up.", zh: "鍖呰捣鏉ャ€?, pinyin: "B膩o q菒lai." }
    ]
  }
];

export const phrasebookTotal = phraseCategories.reduce((total, category) => total + category.phrases.length, 0);

 succeeded in 1123ms:
import type { CityId } from "./transport";

export type PillarId = "entry" | "transport" | "food" | "emergency";

export type Pitfall = {
  id: string;
  pillar: PillarId;
  cityScope?: CityId[];
  titleEn: string;
  titleZh: string;
  bodyEn: string;
  bodyZh: string;
  sourceId: string;
};

export const pitfalls: Pitfall[] = [
  // ENTRY
  {
    id: "entry-third-country-rule",
    pillar: "entry",
    titleEn: "240-hour transit: onward ticket must leave to a DIFFERENT country",
    titleZh: "240 灏忔椂杩囧锛氫笅涓€绋嬪繀椤婚寰€涓嶅悓鐨勫浗瀹?,
    bodyEn: "New York 鈫?Shanghai 鈫?New York is denied at immigration. New York 鈫?Shanghai 鈫?Singapore is approved. Hong Kong, Macau, and Taiwan count as separate regions for this rule.",
    bodyZh: "绾界害 鈫?涓婃捣 鈫?绾界害浼氳杈规鎷掔粷锛涚航绾?鈫?涓婃捣 鈫?鏂板姞鍧″彲閫氳繃銆傞娓?/ 婢抽棬 / 鍙版咕鍦ㄨ繖鏉¤鍒欎腑瑙嗕负涓嶅悓鍦板尯銆?,
    sourceId: "blog-cft-transit"
  },
  {
    id: "entry-clock-immigration",
    pillar: "entry",
    titleEn: "240-hour clock starts at the immigration STAMP, not wheels-down",
    titleZh: "240 灏忔椂浠庣洊绔犻偅涓€鍒昏捣绠楋紝涓嶆槸钀藉湴鏃堕棿",
    bodyEn: "Land at 23:00, clear immigration at 00:30 = you've already lost a day. Many travellers miscalculate and overstay.",
    bodyZh: "23:00 钀藉湴銆?:30 閫氬叧 = 绗竴澶╁凡灏戜簡澶у崐澶┿€傚父瑙佽绠椾細瀵艰嚧瓒呮湡婊炵暀銆?,
    sourceId: "blog-cft-transit"
  },
  {
    id: "entry-digital-card",
    pillar: "entry",
    titleEn: "Digital arrival card mandatory since 2025-11; airlines don't tell you",
    titleZh: "2025-11 璧峰己鍒剁嚎涓婄敵鎶ュ叆澧冨崱锛涜埅鍙镐笉浼氭彁閱?,
    bodyEn: "Fill the NIA digital card (s.nia.gov.cn) within 72 hours before arrival. Skipping it sends you to a secondary desk that adds 20鈥?0 minutes at the airport.",
    bodyZh: "鎶佃揪鍓?72 灏忔椂鍐呭湪鍥藉绉绘皯绠＄悊灞€瀹樼綉锛坰.nia.gov.cn锛夊～濂姐€傛湭鎻愬墠濉姤浼氳杞埌浜屾鍙楃悊鍙帮紝閫氬父澶氳姳 20鈥?0 鍒嗛挓銆?,
    sourceId: "blog-smartsh-faq"
  },
  {
    id: "entry-wrong-queue",
    pillar: "entry",
    cityScope: ["beijing", "shanghai"],
    titleEn: "Use the dedicated TWOV counter 鈥?wrong queue = +30 min",
    titleZh: "璧拌繃澧冨厤绛撅紙TWOV锛変笓鐢ㄩ€氶亾鈥斺€旀帓閿欓槦浼氬鍔?30 鍒嗛挓",
    bodyEn: "240-hour transit travellers must use the TWOV counter, not general immigration. Pudong T2 marks it clearly; Beijing T3 barely labels it 鈥?look for the small \"Visa-Free Transit\" sign.",
    bodyZh: "杩囧鍏嶇蹇呴』璧?TWOV 涓撶敤閫氶亾銆傛郸涓?T2 鏍囪瘑娓呮锛涘寳浜?T3 鏍囩墝寰堝皬锛岃鐣欐剰 \"Visa-Free Transit\" / \"杩囧鍏嶇\"銆?,
    sourceId: "blog-cft-transit"
  },
  {
    id: "entry-extension-fail",
    pillar: "entry",
    titleEn: "Visa-free extensions almost always rejected 鈥?apply 8+ days early",
    titleZh: "鍏嶇寤舵湡鍑犱箮閮借鎷掆€斺€旂‘闇€鐢宠璇锋彁鍓?8 澶╀互涓?,
    bodyEn: "SmartShanghai staff tried 鈥?rejected for \"insufficient reason\". Processing takes up to 7 working days, so you must apply at least 8 days before expiry. Plan your trip length up front.",
    bodyZh: "SmartShanghai 缂栬緫瀹為檯鐢宠琚嫆锛岀悊鐢?\"insufficient reason\"銆傚鎵规渶闀?7 涓伐浣滄棩锛岀‘闇€鐢宠鑷冲皯鎻愬墠 8 澶┿€傚嚭鍙戝墠搴斿厛纭琛岀▼鏃堕暱銆?,
    sourceId: "blog-smartsh-faq"
  },
  {
    id: "entry-overstay-ban",
    pillar: "entry",
    titleEn: "Overstay penalty = entry ban, not just a fine",
    titleZh: "瓒呮湡婊炵暀锛氱綒娆?+ 绂佸叆锛屼笉鏄彧缃氭",
    bodyEn: "Overstays beyond a few days trigger a 1鈥? year re-entry ban PLUS fines from CNY 500/day. Don't gamble on the last day.",
    bodyZh: "瓒呮湡鍑犲ぉ鍙兘琚鍏ュ 1鈥? 骞达紝澶栧姞姣忓ぉ 500 璧风殑缃氭銆傛渶鍚庝竴澶╀笉瑕佸啋闄┿€?,
    sourceId: "blog-cft-transit"
  },
  {
    id: "entry-unlicensed-accom",
    pillar: "entry",
    titleEn: "Unlicensed guesthouses / Airbnb-style hosts can't legally take foreign guests",
    titleZh: "鏃犺瘉姘戝 / Airbnb 涓嶈兘鍚堟硶鎺ュ緟澶栧浗瀹汉",
    bodyEn: "Chinese law requires accommodation to register foreign guests with police. Budget guesthouses and many Airbnb listings lack the licence. Both you and the host face fines.",
    bodyZh: "娉曞緥瑕佹眰浣忓鏂瑰皢澶栧浗瀹汉淇℃伅鐧昏鍒板綋鍦版淳鍑烘墍銆備綆浠锋皯瀹垮拰澶ч噺 Airbnb 鎴挎簮涓嶅叿澶囪繖绫昏祫璐紝浣忓鍜屾埧涓滃潎鍙兘琚綒銆?,
    sourceId: "blog-thechinajourney"
  },
  {
    id: "entry-police-register-24h",
    pillar: "entry",
    titleEn: "Private accommodation: register with police within 24h",
    titleZh: "浣忕浜轰綇鎵€锛?4 灏忔椂鍐呮淳鍑烘墍鐧昏",
    bodyEn: "Hotels do this for you automatically. At an Airbnb / private rental, you OR your host must register at the local police station (paichusuo) within 24 hours of check-in. Failure is a fine for both parties.",
    bodyZh: "閰掑簵浼氳嚜鍔ㄥ府浣犵櫥璁般€備綇 Airbnb / 鏈嬪弸瀹讹細浣犳垨鎴夸笢蹇呴』 24 灏忔椂鍐呭埌灞炲湴娲惧嚭鎵€鍔炵悊\"澧冨浜哄憳涓存椂浣忓鐧昏\"銆傛湭鐧昏鍙屾柟鍧囧彲鑳借缃氥€?,
    sourceId: "blog-thechinajourney"
  },

  // PAYMENTS additions handled in practical-payments.ts. Three new community blog items below
  // are kept here so they stay grouped with their pillar 鈥?but they will be merged in via the
  // practical-payments file pattern. (Skipped duplicating here.)

  // TRANSPORT
  {
    id: "transport-bj-tap-lanes",
    pillar: "transport",
    cityScope: ["beijing"],
    titleEn: "Beijing Metro tap-and-go: only at end-of-row gate lanes",
    titleZh: "鍖椾含鍦伴搧澶栧崱鍒烽椄锛氶€氬父鍙湁姣忔帓灏藉ご瀵瑰簲闂告満鍙敤",
    bodyEn: "Since 2024-09 all 490 stations support contactless Visa/Mastercard, but the international-card turnstile is at a specific lane (usually the end of the row). Tapping a domestic-only gate just rejects.",
    bodyZh: "2024-09 璧峰叏 490 绔欐敮鎸佸鍗″埛闂革紝浣嗗彧鏈夋寚瀹氶椄鏈猴紙閫氬父姣忔帓灏藉ご閭ｄ竴鍙帮級鑳界敤銆傚叾浠栭椄鏈哄埛澶栧崱浼氳鎷掋€?,
    sourceId: "bj-subway-tap-2024"
  },
  {
    id: "transport-alipay-qr-percity",
    pillar: "transport",
    titleEn: "Alipay transit QR: must activate per city",
    titleZh: "Alipay 鍏氦鐮侊細姣忎釜鍩庡競瑕佸崟鐙紑閫?,
    bodyEn: "Activating Beijing's transit code does NOT activate Shanghai / Guangzhou / Shenzhen. Open the Transport tab, pick the target city, and activate before reaching the turnstile.",
    bodyZh: "鍦ㄥ寳浜紑閫氱殑鍏氦鐮佸埌涓婃捣 / 骞垮窞 / 娣卞湷閮戒笉鑳界敤銆傚厛鍦?Alipay 鍑鸿椤甸潰閫夋嫨鐩爣鍩庡競閲嶆柊寮€閫氾紝鍐嶈繘绔欒繃闂搞€?,
    sourceId: "blog-cgl-publictransport"
  },
  {
    id: "transport-alipay-qr-5min",
    pillar: "transport",
    titleEn: "Alipay transit QR expires in 5 minutes 鈥?regenerate at the gate",
    titleZh: "Alipay 鍏氦鐮?5 鍒嗛挓杩囨湡鈥斺€旇繘绔欏墠閲嶆柊鐢熸垚",
    bodyEn: "If you generated the code while walking and 5+ minutes passed, the turnstile rejects it. Regenerate immediately before scanning.",
    bodyZh: "鎻愬墠鐢熸垚鐨勭爜 5 鍒嗛挓浼氬け鏁堛€傝嫢姝ヨ鏃堕棿杈冮暱锛岃繘闂稿墠搴旈噸鏂扮敓鎴愪竴娆°€?,
    sourceId: "blog-cgl-publictransport"
  },
  {
    id: "transport-12306-verify-3-7d",
    pillar: "transport",
    titleEn: "12306 passport verification takes 3鈥? days 鈥?last-minute booking fails",
    titleZh: "12306 鎶ょ収浜哄伐瀹℃牳 3鈥? 澶┾€斺€斾复鏃朵拱绁ㄦ潵涓嶅強",
    bodyEn: "Online passport verification at 12306.cn requires a passport photo plus a selfie holding the passport. Processing typically takes 3鈥? days, up to 7 in peak season. New accounts can't book next-day trains. If you're short on time, use Trip.com 鈥?verification usually clears in 1鈥? hours.",
    bodyZh: "12306 涓婁紶鎶ょ収 + 鎵嬫寔鎶ょ収鑷媿鍚庤繘鍏ヤ汉宸ュ鏍革紝鏃哄閫氬父 3鈥? 澶╋紝鏈€闀?7 澶┿€傛柊娉ㄥ唽璐﹀彿鍙兘鏃犳硶璐拱娆℃棩绁ㄣ€俆rip.com 閫氬父 1鈥? 灏忔椂瀹屾垚瀹℃牳锛屾槸甯哥敤鏇夸唬鏂规銆?,
    sourceId: "blog-cgl-train"
  },
  {
    id: "transport-no-passport-machines",
    pillar: "transport",
    titleEn: "Self-service ticket machines reject passports 鈥?go to staffed window",
    titleZh: "鑷姪鍙栫エ鏈轰笉璇嗗埆鎶ょ収鈥斺€斿幓浜哄伐绐楀彛",
    bodyEn: "Auto-collection machines only read Chinese ID cards. Foreign passport holders must queue at staffed windows. At Beijing West / Shanghai Hongqiao that's 20鈥?0 min on a busy day.",
    bodyZh: "鑷姪鍙栫エ鏈哄彧璇诲彇涓浗灞呮皯韬唤璇侊紝涓嶈兘璇嗗埆鎶ょ収銆傚鍥芥梾瀹㈠繀椤绘帓浜哄伐绐楀彛銆傚寳浜タ / 铏规ˉ楂樺嘲鏈熼€氬父闇€鎺?20鈥?0 鍒嗛挓銆?,
    sourceId: "blog-cgl-train"
  },
  {
    id: "transport-12306-group-verify",
    pillar: "transport",
    titleEn: "Group bookings on 12306: each passport needs its own 3鈥? day verification",
    titleZh: "12306 缁欏浜鸿绁細姣忔湰鎶ょ収閮借璧?3鈥? 澶╁鏍?,
    bodyEn: "Adding extra passengers to your 12306 booking means each one's passport runs a separate verification cycle. Family of 4 = all 4 passports must clear before any tickets issue. Use Trip.com for groups.",
    bodyZh: "12306 涓哄浜烘坊鍔犱箻杞︿汉鏃讹紝姣忔湰鎶ょ収閮借鍗曠嫭瀹℃牳涓€娆°€傚洓浜哄搴渶鍥涙湰鎶ょ収鍏ㄩ儴閫氳繃鍚庢墠鑳藉嚭绁ㄣ€傚搴嚭琛屽彲鐩存帴浣跨敤 Trip.com銆?,
    sourceId: "blog-cgl-train"
  },
  {
    id: "transport-bj-stations",
    pillar: "transport",
    cityScope: ["beijing"],
    titleEn: "Beijing has 5+ rail stations 鈥?book the right one",
    titleZh: "鍖椾含鏈?5+ 涓伀杞︾珯鈥斺€旇绁ㄨ纭鍏蜂綋杞︾珯",
    bodyEn: "Beijing main, West, South, North, Chaoyang. Different stations are 30鈥?0 min apart by metro. Confirm the specific station name when booking, not just \"Beijing\".",
    bodyZh: "鍖椾含绔欍€佸寳浜タ銆佸寳浜崡銆佸寳浜寳銆佸寳浜湞闃斥€斺€斿郊姝ゅ湴閾侀渶 30鈥?0 鍒嗛挓銆傝绁ㄦ椂纭鍏蜂綋杞︾珯锛屼笉瑕佸彧鐪?\"鍖椾含\"銆?,
    sourceId: "blog-cgl-train"
  },
  {
    id: "transport-bj-t3-touts",
    pillar: "transport",
    cityScope: ["beijing"],
    titleEn: "Black taxi touts at Capital T3 information desk 鈥?3鈥?脳 meter",
    titleZh: "棣栭兘 T3 璇㈤棶鍙伴檮杩戠殑榛戣溅鈥斺€?鈥? 鍊嶈浠峰櫒璐圭敤",
    bodyEn: "Men posing as helpers near the T3 taxi info desk single out foreign-looking travellers and quote 3鈥?脳 meter. Legitimate Beijing taxis show \"Jing B\" plates. Anyone who approaches you first isn't legit 鈥?walk to the official taxi queue.",
    bodyZh: "T3 璇㈤棶鍙伴檮杩戞湁浜哄啋鍏呭伐浣滀汉鍛橈紝涓撳悜澶栫睄鏃呭鎶?3鈥? 鍊嶄环鏍笺€傛瑙勫寳浜嚭绉熻溅鐗屾槸 \"浜?B\"銆備富鍔ㄤ笂鍓嶆嫑鎻界殑閫氬父涓嶆槸姝ｈ杞﹁締锛岃鍓嶅線瀹樻柟鍑虹杞︽帓闃熺偣銆?,
    sourceId: "blog-flyertalk-bjtaxi"
  },
  {
    id: "transport-gz-station-touts",
    pillar: "transport",
    cityScope: ["guangzhou"],
    titleEn: "Black taxi touts at Guangzhou South / East stations 鈥?3鈥?脳 meter",
    titleZh: "骞垮窞鍗楃珯 / 涓滅珯闂ㄥ彛榛戣溅鈥斺€?鈥? 鍊嶈浠峰櫒璐圭敤",
    bodyEn: "Touts work the main exits. Use DiDi from the in-station app pickup zone, or walk all the way past the touts to the official metered taxi rank.",
    bodyZh: "鍗楃珯 / 涓滅珯鍑哄彛鏈夊ぇ閲忔徑瀹汉鍛樸€傚缓璁粠绔欏唴 DiDi 涓婅溅鐐瑰彨杞︼紝鎴栫洿鎺ヨ蛋鍒板畼鏂瑰嚭绉熻溅鎺掗槦鐐癸紙缁曞紑鎵€鏈夋徑瀹汉鍛橈級銆?,
    sourceId: "blog-beforeyougo-gz"
  },
  {
    id: "transport-didi-chuxing-app",
    pillar: "transport",
    titleEn: "Use DiDi Chuxing app, NOT \"DiDi Rider\" international",
    titleZh: "鐢?\"DiDi Chuxing\" 涓嶆槸 \"DiDi Rider\" 鍥介檯鐗?,
    bodyEn: "DiDi Rider international has limited mainland coverage. DiDi Chuxing (mainland version) has a full English UI, broader vehicles, and accepts Alipay / WeChat with foreign cards reliably.",
    bodyZh: "鍥介檯鐗?\"DiDi Rider\" 鍦ㄥぇ闄嗚鐩栨湁闄愩€傚缓璁畨瑁?\"DiDi Chuxing\"锛堝ぇ闄嗙増锛夛紝鏈夎嫳鏂囩晫闈€佽溅鍨嬫洿澶氾紝澶栧崱 Alipay / 寰俊浠樻杈冪ǔ瀹氥€?,
    sourceId: "blog-wise-didi"
  },
  {
    id: "transport-sz-octopus-no",
    pillar: "transport",
    cityScope: ["shenzhen"],
    titleEn: "Octopus card does NOT work on Shenzhen Metro",
    titleZh: "鍏揪閫氬湪娣卞湷鍦伴搧涓嶈兘鐢?,
    bodyEn: "Hong Kong tourists assume Octopus works 鈥?it doesn't on Shenzhen Metro. Options: (1) Alipay transit QR activated for Shenzhen; (2) Shenzhen Tong physical card (CNY 20 deposit); (3) \"Hu Tong Xing\" dual-card sold in Shenzhen for CNY 68 鈥?has both Octopus (HKD) and Shenzhen Tong (CNY) purses, each topped up separately.",
    bodyZh: "棣欐腐娓稿甯镐互涓哄叓杈鹃€氬彲鐢紝浣嗘繁鍦冲湴閾佷笉鏀寔銆備笁涓€夐」锛?1) Alipay 鍏氦鐮佸紑閫氭繁鍦筹紱(2) 娣卞湷閫氬疄浣撳崱锛堟娂閲?楼20锛夛紱(3) 娣卞湷閿€鍞殑 \"浜掗€氳\" 鑱斿悕鍗?楼68锛屽寘鍚叓杈鹃€氾紙HKD锛? 娣卞湷閫氾紙CNY锛変袱涓挶鍖咃紝闇€鍒嗗埆鍏呭€笺€?,
    sourceId: "eyeshenzhen-octopus-interop"
  },
  {
    id: "transport-sh-metro-refund-window",
    pillar: "transport",
    cityScope: ["shanghai"],
    titleEn: "Shanghai metro refunds: only 11:00鈥?4:00 at pink service desk",
    titleZh: "涓婃捣鍦伴搧閫€绁細鍙湪绮夎壊鏈嶅姟鍙?11:00鈥?4:00 鍙楃悊",
    bodyEn: "Bought the wrong ticket from a vending machine? Refunds processed only at pink service counters during 11:00鈥?4:00 daily. Outside those hours = no refund. Bring the original ticket and your passport.",
    bodyZh: "鍦ㄨ嚜鍔ㄥ敭绁ㄦ満涔伴敊绁紵鍙湁绮夎壊鏈嶅姟鍙?11:00鈥?4:00 鍙楃悊閫€绁ㄣ€傞敊杩囪鏃堕棿娈典笉浜堝姙鐞嗐€傝鎼哄甫鍘熺エ鍜屾姢鐓с€?,
    sourceId: "blog-travelchinatips-shmetro"
  },
  {
    id: "transport-sh-yellow-white-taxi",
    pillar: "transport",
    cityScope: ["shanghai"],
    titleEn: "Shanghai street taxi: stick to yellow (Qiangsheng) or white (Jinjiang)",
    titleZh: "涓婃捣璺竟鎵嫑鍑虹杞︼細浼樺厛閫夋嫨榛勮壊锛堝己鐢燂級鎴栫櫧鑹诧紙閿︽睙锛?,
    bodyEn: "Other liveries (red, dark blue, etc.) are smaller companies with weaker accountability. DiDi is preferable; if hailing on the street, only flag yellow or white.",
    bodyZh: "鍏朵粬棰滆壊锛堢孩 / 娣辫摑锛夊涓鸿妯¤緝灏忕殑鍏徃锛屽嚭鐜伴棶棰樺悗杩借矗杈冮毦銆備紭鍏堜娇鐢?DiDi锛涘闇€璺竟鎵嫑锛屽缓璁彧閫夋嫨榛勮壊鎴栫櫧鑹茶溅杈嗐€?,
    sourceId: "blog-travelchinawith-taxi"
  },

  // FOOD
  {
    id: "food-veg-pork-stock",
    pillar: "food",
    titleEn: "\"Vegetarian\" dishes often cooked in pork stock or lard",
    titleZh: "绱犺彍甯哥敤鐚姹ゆ垨鐚补鐑瑰埗",
    bodyEn: "Ordering a vegetable dish at a regular restaurant doesn't make it vegetarian 鈥?many are blanched in pork-bone broth or stir-fried in lard. Only Buddhist vegetarian restaurants (绱犻 Su Shi) reliably skip pork 鈥?but they use seitan (pure gluten) for mock meats, a separate problem for coeliacs.",
    bodyZh: "鍦ㄦ櫘閫氶鍘呯偣 \"绱犺彍\" 涓嶇瓑浜庝弗鏍肩礌椋燂細璁稿鑿滀細鐢ㄧ尓楠ㄦ堡鐒按鎴栫敤鐚补鐑瑰埗銆傚彧鏈夋寕 \"绱犻\" 鐗屽瓙鐨勪經鏁欑礌鑿滈閫氬父涓嶄娇鐢ㄧ尓鑲夋垨鐚补锛屼絾瀹冧滑甯哥敤闈㈢瓔锛堢函楹歌川锛夊仛绱犺倝锛岄焊璐ㄤ笉鑰愬彈鑰呴渶閬垮紑銆?,
    sourceId: "blog-alittleadrift-veg"
  },
  {
    id: "food-soy-wheat",
    pillar: "food",
    titleEn: "Soy sauce contains wheat 鈥?\"no soy\" rarely eliminates gluten",
    titleZh: "閰辨补鍚皬楹︹€斺€擻"涓嶆斁閰辨补\" 閫氬父涓嶈兘瀹屽叏鍘婚櫎楹歌川",
    bodyEn: "閰辨补 jiangyou contains wheat and is in nearly every wok dish. Asking for \"no soy sauce\" usually means less, not none. Truly gluten-free eating in China requires steamed dishes ordered in writing to the kitchen.",
    bodyZh: "閰辨补鍚皬楹︼紝鍑犱箮姣忛亾鐐掕彍閮藉彲鑳戒娇鐢ㄣ€傝 \"灏戞斁\" 閫氬父鍙兘鍑忓皯鐢ㄩ噺锛屽緢闅惧畬鍏ㄦ病鏈夈€傝嫢闇€鏃犻焊璐ㄩギ椋燂紝寤鸿鐐硅捀鑿滐紝骞剁敤涓枃涔﹂潰璇存槑缁欏帹鎴裤€?,
    sourceId: "blog-sinotales-allergies"
  },
  {
    id: "food-hidden-shrimp",
    pillar: "food",
    titleEn: "Dried shrimp / shrimp paste hidden in non-seafood dishes",
    titleZh: "铏剧毊 / 铏鹃叡甯镐綔涓烘彁椴滃簳鏂欒棌鍦ㄩ潪娴烽矞鑿滈噷",
    bodyEn: "Dried shrimp (铏剧毊) and shrimp paste (铏鹃叡) are routinely added to vegetable stir-fries, congee, and soups as flavour enhancers. Menu shows zero seafood. Show a Chinese-language allergy card directly to KITCHEN staff, not just the waiter.",
    bodyZh: "铏剧毊鍜岃櫨閰卞父琚姞杩涚倰闈掕彍銆佺播銆佹堡閲屾彁椴滐紝鑿滃崟鍚嶇О閫氬父涓嶄細鏄剧ず銆傝鎶婅繃鏁忓崱鐩存帴浜ょ粰鍚庡帹鍘ㄥ笀锛屼笉瑕佸彧浜ょ粰鏈嶅姟鍛樸€?,
    sourceId: "blog-sinotales-allergies"
  },
  {
    id: "food-shared-wok",
    pillar: "food",
    titleEn: "Shared woks = cross-contamination even when staff understand the allergy",
    titleZh: "鍏辩敤鐐掗攨 = 鍗充娇鍘ㄥ笀鎳傝繃鏁忎篃浼氫氦鍙夋薄鏌?,
    bodyEn: "Traditional kitchens use 1鈥? woks for everything, rinsed only with hot water between dishes. Severe allergies need restaurants with visibly separated cooking equipment.",
    bodyZh: "浼犵粺鍘ㄦ埧甯哥敤 1鈥? 鍙ｇ倰閿呭鐞嗘墍鏈夎彍鍝侊紝鑿滃搧涔嬮棿閫氬父鍙敤鐑按鍐叉礂銆備弗閲嶈繃鏁忚€呭簲閫夋嫨鑳界湅鍒颁笓鐢ㄥ帹鍏风殑椁愬巺銆?,
    sourceId: "blog-travelchinawith-allergies"
  },
  {
    id: "food-tea-house-scam",
    pillar: "food",
    cityScope: ["beijing", "shanghai", "guangzhou"],
    titleEn: "Tea house scam: \"practice English\" 鈫?CNY 500鈥?000 bill",
    titleZh: "鑼堕楠楀眬锛歕"鎯崇粌鑻辫\" 鈫?璐﹀崟 楼500鈥?000",
    bodyEn: "Documented at Wangfujing / Houhai (BJ), Nanjing Road / People's Park (SH), Shamian Island (GZ). The new \"friend\" disappears; staff block exits until payment. If you walk in with strangers, demand to see a menu with prices BEFORE sitting down.",
    bodyZh: "甯歌楠楀眬锛氱帇搴滀簳 / 鍚庢捣锛堝寳浜級銆佸崡浜矾 / 浜烘皯鍏洯锛堜笂娴凤級銆佹矙闈紙骞垮窞锛夋湁浜轰富鍔ㄤ笂鍓嶈 \"鎯崇粌鑻辫\"锛岄殢鍚庡甫浣犺繘鑼堕锛屽悓琛岃€呯寮€鍚庡嚭鐜?楼500鈥?000 璐﹀崟锛屽苟闃绘绂诲簵銆備笌闄岀敓浜鸿繘搴楀墠蹇呴』鍏堢湅甯︿环鏍肩殑鑿滃崟銆?,
    sourceId: "blog-chinamike"
  },
  {
    id: "food-short-change",
    pillar: "food",
    cityScope: ["beijing", "shanghai", "guangzhou"],
    titleEn: "Tourist-area restaurants short-change by CNY 20鈥?00",
    titleZh: "鏅尯椁愬巺鎵鹃浂鐭皯 楼20鈥?00",
    bodyEn: "Documented near Shamian (GZ), Yu Garden (SH), Wangfujing (BJ). Count change immediately; demand an itemised receipt (鍙戠エ fapiao) before paying.",
    bodyZh: "娌欓潰锛堝箍宸烇級銆佽鲍鍥紙涓婃捣锛夈€佺帇搴滀簳锛堝寳浜級閮ㄥ垎鏅尯椁愬巺鍙兘灏戞壘闆躲€傝褰撳満娓呯偣锛屼粯娆惧墠鍏堢储瑕佸彂绁ㄣ€?,
    sourceId: "blog-beforeyougo-gz"
  },
  {
    id: "food-tap-water",
    pillar: "food",
    titleEn: "Tap water requires boiling 鈥?even in 4-star hotels",
    titleZh: "鑷潵姘村繀椤荤儳寮€鈥斺€斿洓鏄熼厭搴椾篃涓€鏍?,
    bodyEn: "All four cities' tap water needs boiling before drinking. Hotel rooms include a kettle or filtered dispenser. Ice in budget restaurants may be tap-water-based. Bottled water 2鈥? CNY for 550 ml.",
    bodyZh: "鍖椾笂骞挎繁鐨勮嚜鏉ユ按閮借鐑у紑鍐嶅枬銆傞厭搴楅€氬父閰嶆湁鐑ф按澹舵垨楗按鏈恒€傚钩浠烽鍘呯殑鍐板潡鍙兘鐢辨湭鐑у紑鐨勮嚜鏉ユ按鍒舵垚銆傜摱瑁呮按 楼2鈥? / 550ml銆?,
    sourceId: "blog-thechinajourney"
  },
  {
    id: "food-canton-fair",
    pillar: "food",
    cityScope: ["guangzhou"],
    titleEn: "Canton Fair (Apr / Oct): restaurant prices +30鈥?0%, fake bookings",
    titleZh: "骞夸氦浼氾紙4 鏈?/ 10 鏈堬級锛氶鍘呮定浠?30鈥?0%锛岃鎯曡櫄鍋囬璁㈠钩鍙?,
    bodyEn: "Bi-annual Canton Fair brings 200,000+ trade visitors; Pazhou and Tianhe restaurant supply gets overwhelmed and prices spike 30鈥?0%. Fake reservation platforms ask for deposits 鈥?book only via Dianping (澶т紬鐐硅瘎) or Meituan.",
    bodyZh: "涓€骞翠袱娆″箍浜や細甯︽潵 20 涓?+ 鍟嗗姟瀹紱鐞舵床銆佸ぉ娌抽鍘呬緵缁欑揣寮狅紝浠锋牸娑?30鈥?0%銆傚彲鑳藉嚭鐜颁豢鍐掗璁㈠钩鍙版敹鍙栨娂閲戙€傝椁愬缓璁彧浣跨敤澶т紬鐐硅瘎鎴栫編鍥€?,
    sourceId: "blog-beforeyougo-gz"
  },

  // EMERGENCY
  {
    id: "emerg-taxi-vs-ambulance",
    pillar: "emergency",
    titleEn: "Taxi to hospital is faster than 120 ambulance for non-spinal cases",
    titleZh: "闈炶剨鏌变激鐨勭揣鎬ユ儏鍐碉紝涔樺嚭绉熻溅鍙兘姣?120 鏁戞姢杞︽洿蹇?,
    bodyEn: "120 ambulances aren't equipped to Western paramedic standards and average 20+ min in urban traffic. Long-term expats consistently say: for non-spinal emergencies, take a taxi to the nearest 3A hospital.",
    bodyZh: "120 鏁戞姢杞﹂厤缃湭蹇呰揪鍒版缇庨櫌鍓嶆€ユ晳鏍囧噯锛屽湪鍩庡競浜ら€氫腑骞冲潎绛夊緟 20 鍒嗛挓浠ヤ笂銆傞暱鏈熷湪鍗庡绫嶄汉澹櫘閬嶅缓璁細闈炶剨鏌变激鍙洿鎺ヤ箻鍑虹杞﹀墠寰€鏈€杩戠殑涓夌敳鍖婚櫌锛岄€氬父鏇村揩銆?,
    sourceId: "blog-thechinaguide-medical"
  },
  {
    id: "emerg-cash-deposit",
    pillar: "emergency",
    titleEn: "Public hospital admission needs CNY 5K鈥?0K cash deposit upfront",
    titleZh: "鍏珛鍖婚櫌浣忛櫌鍓嶉€氬父闇€鍏堜氦 楼5K鈥?0K 鎶奸噾",
    bodyEn: "Hospitals will stabilise you in the ER, then ask for a CNY 5,000鈥?0,000 deposit before any further treatment. Ambulances charge upfront too 鈥?about CNY 7 per km plus CNY 80 per hour of waiting. Most travel insurers reimburse you later, so check your insurer's direct-billing hospital list before you fly.",
    bodyZh: "鎬ユ晳绋冲畾涔嬪悗鑻ラ渶浣忛櫌锛岄€氬父椤诲厛浜?楼5,000鈥?0,000 鎶奸噾鎵嶇户缁不鐤椼€傛晳鎶よ溅璐圭敤绾?楼7 / 鍏噷 + 楼80 / 灏忔椂绛夊€欒垂涔熼渶鍏堜粯銆傚ぇ澶氭暟鏃呰淇濋櫓鏄簨鍚庢姤閿€锛屽嚭鍙戝墠璇锋煡璇繚闄╁叕鍙告槸鍚︽湁鍚堜綔鐨勭洿浠樺尰闄€?,
    sourceId: "blog-expatden-shhospital"
  },
  {
    id: "emerg-medical-card",
    pillar: "emergency",
    cityScope: ["beijing", "shanghai"],
    titleEn: "Public hospitals: get a Medical Card (鍖荤枟鍗? before any appointment",
    titleZh: "鍏珛鍖婚櫌锛氬厛鍦ㄦ寕鍙峰鍔炵悊 \"鍖荤枟鍗?/ 灏辫瘖鍗"",
    bodyEn: "New patients can't walk in directly. Go to the registration desk first 鈥?bring your passport and CNY 50, and allow 15鈥?0 minutes. Head straight to the consultation room without doing this and staff will send you back.",
    bodyZh: "鏂扮梾浜轰笉鑳界洿鎺ュ氨璇娾€斺€斿厛鍒版寕鍙峰鍔炵悊灏辫瘖鍗★細鎶ょ収 + 楼50锛岀害 15鈥?0 鍒嗛挓銆傜洿鎺ュ墠寰€璇婂鏄父瑙侀敊璇€?,
    sourceId: "blog-expatden-shhospital"
  },
  {
    id: "emerg-intl-cost",
    pillar: "emergency",
    cityScope: ["beijing", "shanghai"],
    titleEn: "International hospital departments cost 6鈥?2脳 standard rates",
    titleZh: "鍥介檯閮?/ 楂樼绉佺珛璐圭敤绾︿负鏅€氬叕绔?6鈥?2 鍊?,
    bodyEn: "Beijing United Family, PUMCH international wing, and Raffles Shanghai all have English-speaking staff, but outpatient registration starts at CNY 300鈥?00 versus CNY 10鈥?0 at a standard public department. Plan on CNY 2,000鈥?,000+ per visit if your insurer doesn't direct-bill.",
    bodyZh: "鍜岀潶瀹?/ 鍗忓拰鍥介檯閮?/ 涓婃捣鑾变經澹湁鑻辫鍖荤敓锛屼絾浠呮寕鍙疯垂灏遍渶 楼300鈥?00锛屾櫘閫氬叕绔嬬瀹ょ害 楼10鈥?0銆傛病鏈夌洿浠樺浗闄呬繚闄╂椂锛屼竴娆″氨璇婂彲鑳借揪鍒?楼2,000鈥?,000+銆?,
    sourceId: "blog-internationalinsurance"
  },
  {
    id: "emerg-western-meds",
    pillar: "emergency",
    titleEn: "Most Western prescriptions unavailable 鈥?bring your own + 20% extra",
    titleZh: "瑗胯嵂鍝佺墝鑽ぇ闄嗚緝闅捐喘涔扳€斺€旇嚜澶囧苟澶氬甫 20%",
    bodyEn: "Chinese pharmacies don't stock most Western brand-name medications. Controlled substances (some painkillers, ADHD drugs, anxiety meds) are restricted and may be confiscated at customs without a physician's letter. Bring full supply in original labelled bottles.",
    bodyZh: "鍥藉唴鑽簵閫氬父涓嶉攢鍞鏁拌タ鑽搧鐗岃嵂銆傜鍒惰嵂锛堥儴鍒嗘鐥涖€丄DHD銆佺劍铏戠敤鑽級鍙椾弗鎺э紝娌℃湁鍖荤敓璇佹槑娴峰叧鍙兘娌℃敹銆傝瑁呭湪鍘熺摱閲屾惡甯﹁冻閲忚嵂鍝侊紝骞跺甯?20% 澶囩敤銆?,
    sourceId: "blog-thechinajourney"
  },
  {
    id: "emerg-bj-999",
    pillar: "emergency",
    cityScope: ["beijing"],
    titleEn: "Beijing has 3 emergency numbers 鈥?999 sometimes faster than 120",
    titleZh: "鍖椾含鏈?3 绫绘€ユ晳鍙风爜鈥斺€?99锛堢孩鍗佸瓧锛夐儴鍒嗘儏鍐典笅姣?120 蹇?,
    bodyEn: "Beijing: 120 (public emergency), 999 (Red Cross / private ambulance, faster in some districts), 110 (police). US Embassy medical assistance +86-10-8531-4000. Beijing United 24h ER +86-10-5927-7120. PUMCH 24h ER +86-10-69155288.",
    bodyZh: "鍖椾含锛?20 鍏珛鎬ユ晳銆?99 绾㈠崄瀛?/ 姘戣惀锛堥儴鍒嗗尯鍙兘姣?120 蹇級銆?10 鍏畨銆傜編鍥戒娇棣嗗尰鐤楁眰鍔?+86-10-8531-4000锛涘寳浜拰鐫﹀ 24h 鎬ヨ瘖 +86-10-5927-7120锛涘崗鍜?24h 鎬ヨ瘖 +86-10-69155288銆?,
    sourceId: "bj-medical-guide-quickservices"
  }
];

export function pitfallsForPillar(pillar: PillarId, cityId?: CityId): Pitfall[] {
  return pitfalls.filter((p) => {
    if (p.pillar !== pillar) return false;
    if (!p.cityScope) return true;
    if (!cityId) return true;
    return p.cityScope.includes(cityId);
  });
}

export function pitfallSourceIds(pillar?: PillarId, cityId?: CityId): string[] {
  const items = pillar ? pitfallsForPillar(pillar, cityId) : pitfalls;
  return Array.from(new Set(items.map((p) => p.sourceId)));
}

 succeeded in 1369ms:
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

 succeeded in 1409ms:
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

 succeeded in 1609ms:
export type PracticalGotchaPhase = "before-fly" | "setup" | "day-one" | "post-trip";
export type PracticalGotchaApp = "alipay" | "wechat" | "both";

export type PracticalGotcha = {
  id: string;
  phase: PracticalGotchaPhase;
  app: PracticalGotchaApp;
  titleEn: string;
  titleZh: string;
  bodyEn: string;
  bodyZh: string;
  sourceId: string;
};

export const practicalPayments: PracticalGotcha[] = [
  {
    id: "timing",
    phase: "before-fly",
    app: "both",
    titleEn: "Set up both apps 2鈥? weeks before you fly",
    titleZh: "鍑哄彂鍓?2鈥? 鍛ㄥ畬鎴愪袱涓?App 鐨勮缃?,
    bodyEn: "KYC can take a full day, WeChat may need a friend back home to vouch for you, and your home bank needs time to whitelist Chinese merchants. Try to set this up before you land 鈥?leaving it for arrival day usually means a frustrating first night.",
    bodyZh: "瀹炲悕鏈€闀垮彲鑳借 24 灏忔椂锛涘井淇″彲鑳介渶瑕佺啛浜烘壂鐮佸崗鍔╋紱閾惰闇€瑕佹椂闂翠负涓浗鍟嗘埛鍔犲叆鐧藉悕鍗曘€傝惤鍦板綋澶╀复鏃跺鐞嗭紝甯歌澶辫触椋庨櫓杈冮珮銆?,
    sourceId: "blog-fanketravel-payments"
  },
  {
    id: "tour-card-dead",
    phase: "before-fly",
    app: "alipay",
    titleEn: "Don't bother with Tour Card 鈥?shutting down 2026-05-29",
    titleZh: "Tour Card 灏嗕簬 2026-05-29 鍏冲仠锛屼笉鍐嶅缓璁娇鐢?,
    bodyEn: "The Alipay Tour Card mini-program stops accepting new applications on May 29, 2026. Older guides still recommend it; ignore them and bind your Visa/Mastercard directly to the regular Alipay app instead.",
    bodyZh: "Alipay Tour Card 灏忕▼搴?2026-05-29 鍋滄鏂扮敵璇枫€傛棫鐗堟敾鐣ヤ粛鍙兘鎺ㄨ崘瀹冿紝寤鸿鐩存帴鍦ㄦ爣鍑?Alipay App 鍐呯粦瀹?Visa / Mastercard銆?,
    sourceId: "blog-chinaguidelines-tourcard"
  },
  {
    id: "bank-whitelist",
    phase: "before-fly",
    app: "both",
    titleEn: "Call your bank: whitelist China + enable international online purchases",
    titleZh: "鎻愬墠鑱旂郴鍙戝崱琛岋細灏嗕腑鍥戒氦鏄撳姞鍏ョ櫧鍚嶅崟锛屽苟寮€鍚浗闄呭湪绾夸氦鏄?,
    bodyEn: "The #1 card-binding failure is your home bank fraud system blocking the first attempt. The app shows ambiguous \"payment failed\" with no hint that the bank is the cause. Some debit cards also need 3D Secure / international online purchases manually enabled.",
    bodyZh: "缁戝崱澶辫触棣栬鍘熷洜鏄彂鍗¤椋庢帶鑷姩鎷︽埅棣栨涓浗鎵ｆ銆侫pp 鍙樉绀轰竴鍙ユā绯婄殑\"鏀粯澶辫触\"锛屼笉浼氳鏄庤閾惰鎷︽埅銆傞儴鍒嗗€熻鍗¤繕闇€瑕佹墜鍔ㄥ紑鍚?3D Secure / 鍥介檯鍦ㄧ嚎浜ゆ槗銆?,
    sourceId: "blog-wanderinchina-alipay"
  },
  {
    id: "wechat-friend-scan-prearrange",
    phase: "before-fly",
    app: "wechat",
    titleEn: "WeChat friend-scan: line one up before you fly",
    titleZh: "寰俊鐔熶汉鎵爜锛氬嚭鍙戝墠鍏堝畨鎺掑ソ",
    bodyEn: "About 80% of new WeChat accounts hit a mandatory \"have a friend scan this QR\" screen. The verifier must have used WeChat 6+ months, have WeChat Pay active, and not have verified anyone else this month. Remote scan via screen-share works 鈥?solo travellers should ask a friend in advance.",
    bodyZh: "绾?80% 鐨勬柊寰俊璐﹀彿浼氬仠鍦╘"鎵剧啛浜烘壂鐮侀獙璇乗"杩欎竴姝ャ€傞獙璇佷汉蹇呴』浣跨敤寰俊 6 涓湀浠ヤ笂銆佸凡寮€閫氬井淇℃敮浠橈紝涓旀湰鏈堟湭甯粬浜洪獙璇併€傚彲杩滅▼璁╁鏂规埅鍥炬壂鐮侊紝鐙鏃呭鍑哄彂鍓嶅簲鍏堣仈绯婚獙璇佷汉銆?,
    sourceId: "blog-realchinatrip-wechat"
  },
  {
    id: "wechat-register-prefly",
    phase: "before-fly",
    app: "wechat",
    titleEn: "Register WeChat before boarding 鈥?SMS unreliable on roaming/eSIM",
    titleZh: "鍑哄彂鍓嶅厛娉ㄥ唽寰俊鈥斺€旀极娓?/ eSIM 鎺ユ敹 SMS 涓嶇ǔ瀹?,
    bodyEn: "International roaming SMS into China is unreliable and eSIM data access does not guarantee SMS delivery. Complete WeChat registration on home-country signal, not after landing.",
    bodyZh: "涓浗澧冨唴鍥介檯婕父 SMS 涓嶇ǔ瀹氾紝eSIM 鏈夋暟鎹笉浠ｈ〃鑳芥敹鐭俊銆傛敞鍐屽簲鍦ㄥ嚭鍙戝湴鐨勬湰鍦扮綉缁滃畬鎴愶紝钀藉湴鍚庡啀娉ㄥ唽瀹规槗闄峰叆鏃犳硶鎺ユ敹楠岃瘉鐮佺殑娴佺▼銆?,
    sourceId: "blog-baoziinchina-wechat"
  },

  {
    id: "alipay-app-name",
    phase: "setup",
    app: "alipay",
    titleEn: "Install the standard Alipay (blue icon) 鈥?not AlipayHK",
    titleZh: "瀹夎鏍囧噯鏀粯瀹濓紙钃濊壊鍥炬爣锛夆€斺€斾笉鏄?AlipayHK",
    bodyEn: "There is one app for foreign tourists: standard Alipay (Hangzhou Technology Co., bundle id com.eg.android.AlipayGphone). AlipayHK is a separate Hong Kong product that does NOT work on the mainland.",
    bodyZh: "鍙敤涓€涓?App锛氭爣鍑嗘敮浠樺疂锛堟澀宸炶殏铓侊紝bundle id com.eg.android.AlipayGphone锛夈€侫lipayHK 鏄娓嫭绔嬩骇鍝侊紝鍦ㄥぇ闄嗕笉鍙€氱敤銆?,
    sourceId: "blog-wanderinchina-alipay"
  },
  {
    id: "vpn-off",
    phase: "setup",
    app: "both",
    titleEn: "Turn VPN OFF during KYC, card binding, and payments",
    titleZh: "瀹炲悕 / 缁戝崱 / 浠樻鏃跺繀椤诲叧 VPN",
    bodyEn: "Both Alipay and WeChat compare GPS (Beijing) against IP location (e.g. Los Angeles). The mismatch triggers fraud flags that can freeze the account mid-KYC and require a manual support ticket to recover.",
    bodyZh: "涓や釜 App 閮戒細姣斿 GPS锛堝寳浜級鍜?IP 瀹氫綅锛堜緥濡傛礇鏉夌煻锛夈€備笉涓€鑷翠細瑙﹀彂椋庢帶鍐荤粨锛屾渶瀹规槗鍦ㄥ疄鍚嶄笂浼犵幆鑺備腑鏂紝闇€瑕佹彁浜ゅ鏈嶅伐鍗曞鐞嗐€?,
    sourceId: "blog-hiddenchina-payments"
  },
  {
    id: "alipay-name-mrz",
    phase: "setup",
    app: "alipay",
    titleEn: "Use your passport MRZ name exactly 鈥?uppercase, no nicknames",
    titleZh: "瀹炲悕濮撳悕涓ユ牸鎸夋姢鐓ф満璇诲尯锛圡RZ锛夊～鈥斺€斿ぇ鍐欙紝涓嶈鐢ㄦ樀绉?,
    bodyEn: "Real-name verification rejects mismatched names: middle names, hyphenated surnames, double-barrelled names. The app gives no specific reason 鈥?it just says \"verification failed\".",
    bodyZh: "瀹炲悕鏍￠獙瀵瑰鍚嶅尮閰嶅緢涓ワ細涓棿鍚嶃€佽繛瀛楃濮撱€佸弻濮撳父琚嫆銆侫pp 鍙洖涓€鍙"瀹炲悕澶辫触\"锛屼笉浼氳鏄庡師鍥犮€?,
    sourceId: "blog-letstravel-alipay"
  },
  {
    id: "wechat-microcharge",
    phase: "setup",
    app: "wechat",
    titleEn: "WeChat's USD 0.05 verification charge will trigger your bank's fraud alert",
    titleZh: "寰俊缁戝崱閭ｇ瑪 0.05 缇庡厓楠岃瘉鎵ｆ浼氳Е鍙戝彂鍗¤椋庢帶",
    bodyEn: "WeChat charges ~$0.05 USD to validate the card during binding. This tiny charge is the most common reason the binding fails. If you see the charge get rejected, immediately approve it in your banking app and retry the binding within the same session.",
    bodyZh: "寰俊缁戝崱鏃朵細鎵ｇ害 0.05 缇庡厓鍋氶獙璇併€傝繖绗斿皬棰濇墸娆炬槸缁戝崱澶辫触鐨勫父瑙佸師鍥犮€傚湪 App 閲岀湅鍒拌繖绗旇鎷掑悗锛岀珛鍒诲幓缃戦摱閲岄€氳繃瀹冿紝鍐嶉噸鏂扮粦鍗°€?,
    sourceId: "blog-wildchina-wechat"
  },
  {
    id: "alipay-kyc-500",
    phase: "setup",
    app: "alipay",
    titleEn: "USD 500 is the real KYC threshold 鈥?not the PBOC USD 5,000 figure",
    titleZh: "瀹炲悕瀹℃牳鐪熸鐨勯棬妲涙槸 500 缇庡厓鈥斺€斾笉鏄ぎ琛屽叕鍛婄殑 5,000",
    bodyEn: "PBOC raised the policy limit to USD 5,000/tx in 2024, but Alipay's own identity-verification system kicks in at USD 500. Plan for the lower number when budgeting big-ticket items (hotel deposits, high-speed rail).",
    bodyZh: "澶 2024 骞存妸鏀跨瓥涓婇檺鎻愬埌 5,000 缇庡厓/绗旓紝浣?Alipay 鑷韩绯荤粺鍦?500 缇庡厓灏卞紑濮嬭姹備簩娆￠獙璇併€傞绠楀ぇ棰濓紙閰掑簵鎶奸噾銆侀珮閾佺エ锛夋椂搴旀寜 500 缇庡厓棰勭暀銆?,
    sourceId: "blog-wildchina-alipay"
  },
  {
    id: "wechat-15k-cap",
    phase: "setup",
    app: "wechat",
    titleEn: "WeChat: hard RMB 15,000 stay-total cap until you finish real-name auth",
    titleZh: "寰俊锛氬疄鍚嶅墠鍏ㄧ▼绱涓婇檺 RMB 15,000",
    bodyEn: "Skip real-name authentication and WeChat caps your total spend for the entire stay at ~RMB 15,000 鈥?not per transaction or per day, but cumulative. That ceiling arrives faster than most people expect. Complete real-name before your first big purchase.",
    bodyZh: "鏈畬鎴愬疄鍚嶆椂锛屽井淇″鏈鍦ㄤ腑鍥界疮璁℃敮鍑轰笂闄愮害 RMB 15,000鈥斺€斾笉鏄崟绗斾篃涓嶆槸鍗曟棩锛岃€屾槸鍏ㄧ▼绱銆傛秷鑰楅€熷害鍙兘蹇簬棰勬湡锛屽缓璁厛瀹屾垚瀹炲悕鍐嶈繘琛屽ぇ棰濇秷璐广€?,
    sourceId: "blog-wildchina-wechat"
  },

  {
    id: "personal-qr-reverse-scan",
    phase: "day-one",
    app: "both",
    titleEn: "Personal QR codes reject foreign cards 鈥?let merchant scan you instead",
    titleZh: "涓汉鏀舵鐮佷笉鏀跺鍗♀€斺€旀敼璁╁晢瀹舵壂浣犵殑鐮?,
    bodyEn: "Street vendors and small restaurants almost always show a personal collection QR (涓汉鏀舵鐮?, not a business merchant code. These only accept payment from RMB wallet balance or a Chinese bank card 鈥?your foreign-card-backed Alipay/WeChat is rejected. Workaround: open YOUR app's payment barcode and ask them to scan you. Reverse direction usually works.",
    bodyZh: "琛楄竟灏忓瀷鍟嗘埛銆佸皬鍨嬮棣嗕娇鐢ㄧ殑閫氬父鏄痋"涓汉鏀舵鐮乗"锛屼笉鏄痋"鍟嗗鏀舵鐮乗"銆備釜浜虹爜鍙帴鍙?RMB 浣欓鎴栦腑鍥介摱琛屽崱锛岀粦瀹氬鍗＄殑 Alipay / 寰俊浼氳鎷掋€傚彲鎵撳紑鑷繁 App 鍐呯殑浠樻鏉＄爜锛岃鍟嗗鎵弿銆傚弽鍚戞壂鎻忛€氬父鍙敤銆?,
    sourceId: "blog-travelchinawith-alipay"
  },
  {
    id: "split-200",
    phase: "day-one",
    app: "alipay",
    titleEn: "Over RMB 200? Split the bill 鈥?Alipay charges 3% above that",
    titleZh: "瓒呰繃 RMB 200 鍙媶鍗曟敮浠樷€斺€擜lipay 瓒呭嚭閮ㄥ垎鏀?3% 鎵嬬画璐?,
    bodyEn: "Alipay foreign-card transactions: 0% fee under RMB 200, 3% over. Splitting a 400 RMB bill into two 200 RMB scans eliminates the fee. Cashiers in China understand split payment without explanation.",
    bodyZh: "Alipay 澶栧崱锛氬崟绗?RMB 200 浠ュ唴鍏嶆墜缁垂锛岃秴杩囨敹 3%銆傛妸涓€绗?400 鎷嗘垚涓ょ瑪 200锛屽彲鍏嶉櫎鎵嬬画璐广€備腑鍥芥敹閾跺憳瀵规媶鍗曡緝鐔熸倝锛岄€氬父鏃犻渶瑙ｉ噴銆?,
    sourceId: "blog-wanderinchina-alipay"
  },
  {
    id: "cash-backup",
    phase: "day-one",
    app: "both",
    titleEn: "Carry RMB 200鈥?00 cash 鈥?by law (since 2026-02-01) merchants must accept it",
    titleZh: "闅忚韩澶?RMB 200鈥?00 鐜伴噾鈥斺€?026-02-01 璧峰晢瀹朵緷娉曢』鏀剁幇閲?,
    bodyEn: "Since 2026-02-01 Chinese law requires merchants to accept physical RMB; refusing now carries penalties. Reliable cash sources: 7-Eleven / FamilyMart / Lawson; ICBC / BOC / CCB ATMs accept Visa/Mastercard with English UI.",
    bodyZh: "2026-02-01 璧峰晢瀹朵緷娉曢』鏀朵汉姘戝竵鐜伴噾锛屾嫆鏀朵細琚綒銆傚彲闈犵幇閲戣ˉ鍏呮笭閬擄細7-11 / 鍏ㄥ / 缃楁．锛涗腑琛?/ 宸ヨ / 寤鸿 ATM 鎺ュ彈 Visa/MC锛屾湁鑻辨枃鐣岄潰銆?,
    sourceId: "blog-hiddenchina-payments"
  },
  {
    id: "minigram-sim-required",
    phase: "day-one",
    app: "wechat",
    titleEn: "Didi / Meituan / Ele.me mini-programs need a +86 SIM",
    titleZh: "寰俊閲岀殑 Didi / 缇庡洟 / 楗夸簡涔堝皬绋嬪簭锛岃 +86 涓浗鎵嬫満鍙?,
    bodyEn: "Even with WeChat Pay working, the Didi / Meituan / Ele.me mini-programs INSIDE WeChat require a Chinese mainland phone number to register. Use the standalone Didi app instead (which accepts foreign numbers + foreign cards).",
    bodyZh: "鍗充娇寰俊鏀粯鍙敤锛屽井淇″唴 Didi / 缇庡洟 / 楗夸簡涔堝皬绋嬪簭娉ㄥ唽鏃朵粛瑕佹眰濉啓 +86 涓浗鎵嬫満鍙凤紝澶栧浗鎵嬫満鍙锋棤娉曟敞鍐屻€傚缓璁敼鐢ㄧ嫭绔嬬殑 Didi App锛堟帴鍙楀鍥芥墜鏈哄彿 + 澶栧崱锛夈€?,
    sourceId: "blog-wildchina-wechat"
  },

  {
    id: "alipay-3month-freeze",
    phase: "post-trip",
    app: "alipay",
    titleEn: "Alipay freezes after ~3 months of inactivity",
    titleZh: "Alipay 闂茬疆绾?3 涓湀浼氳嚜鍔ㄥ喕缁?,
    bodyEn: "If you don't open Alipay for about three months after you fly home, your account locks itself. To reactivate, you'll need your passport, a selfie video, and a one-line note explaining the flagged transaction. Most repeat visitors hit this on Day 1 of their next trip 鈥?clear it before you fly back.",
    bodyZh: "鍥炲浗鍚庣害 3 涓湀涓嶇敤锛孉lipay 鑷姩杩涘叆鍙楅檺鐘舵€併€傞噸鏂版縺娲昏浼犳姢鐓?+ 鑷媿瑙嗛 + 鍐欐渶杩戜竴绗斾氦鏄撱€備负閬垮厤涓嬫鎶靛崕棣栨棩鏃犳硶浣跨敤锛屽缓璁嚭鍙戝墠瀹屾垚瑙ｉ攣銆?,
    sourceId: "blog-letstravel-alipay"
  },
  {
    id: "refund-3-7-days",
    phase: "post-trip",
    app: "alipay",
    titleEn: "Refunds take 3鈥? business days to your card 鈥?not instant to wallet",
    titleZh: "閫€娆?3鈥? 涓伐浣滄棩鍥炰俊鐢ㄥ崱鈥斺€斾笉鏄珛鍒诲洖閽卞寘",
    bodyEn: "Foreign-card-backed Alipay refunds go back to the issuing card on a 3鈥? business day cycle, not instantly to your Alipay wallet. A failed train booking will show \"refunding\" for days with no balance in the app 鈥?that's normal.",
    bodyZh: "澶栧崱 Alipay 鐨勯€€娆?3鈥? 涓伐浣滄棩鍥炲埌鍘熶俊鐢ㄥ崱锛屼笉鏄珛鍒诲洖 Alipay 閽卞寘銆傝绁ㄥけ璐ュ悗鏄剧ず\"閫€娆句腑\"锛屾暟鏃ュ唴 App 閽卞寘鏈埌璐﹀睘浜庢甯告祦绋嬨€?,
    sourceId: "blog-hiddenchina-payments"
  },
  {
    id: "wechat-redpacket-blocked",
    phase: "post-trip",
    app: "wechat",
    titleEn: "Foreign WeChat: red packets and P2P transfers are permanently blocked",
    titleZh: "澶栧崱寰俊锛氱孩鍖呭拰濂藉弸杞处姘镐箙绂佺敤",
    bodyEn: "Foreign-card-backed WeChat accounts cannot send OR receive red packets, and cannot transfer money to other users 鈥?only merchant QR payments work. If a Chinese friend wants to split dinner via WeChat transfer, you'll need an alternative (cash, Alipay merchant scan).",
    bodyZh: "澶栧崱寰俊璐﹀彿涓嶈兘鍙戜篃涓嶈兘鏀剁孩鍖咃紝涔熶笉鑳界粰濂藉弸杞处锛屽彧鑳芥壂鍟嗗鏀舵鐮併€備腑鍥芥湅鍙嬭嫢闇€鍙戠孩鍖?/ 杞处涓庝綘 AA锛岄渶閲囩敤鍏朵粬鏂瑰紡锛堢幇閲戙€丄lipay 鍟嗗鐮侊級銆?,
    sourceId: "blog-ltl-wechat"
  }
];

export const practicalPaymentsSourceIds = (): string[] =>
  Array.from(new Set(practicalPayments.map((g) => g.sourceId)));

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/data/entry-policies.ts'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/data/transport.ts'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/data/food.ts'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/data/emergency.ts'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/data/payments.ts'" in c:\Users\h\Documents\New project 2\v2
 succeeded in 727ms:
import type { CityId } from "./transport";

export type CityFood = {
  cityId: CityId;
  cityEn: string;
  cityZh: string;
  cuisine: {
    en: string;
    zh: string;
    sourceId: string;
    culturalNotes?: { en: string; zh: string };
  };
  districts: { en: string; zh: string; sourceId: string };
  deliveryNote: { en: string; zh: string; sourceId: string };
  pitfalls: Array<{ en: string; zh: string; sourceId: string }>;
};

export const cityFood: CityFood[] = [
  {
    cityId: "beijing",
    cityEn: "Beijing",
    cityZh: "鍖椾含",
    cuisine: {
      en: "Peking roast duck 鈥?carved tableside, paired with thin pancakes, scallion, and sweet bean sauce. Old-Beijing snacks: noodles with soybean paste, dou-zhi (fermented mung bean), tanghulu skewers, copper-pot mutton hotpot. Halal options widely available.",
      zh: "鍖椾含鐑ら腑鈥斺€旂幇鍦虹墖鐨紝閰嶈杽楗笺€佽懕涓濄€佺敎闈㈤叡銆傝€佸寳浜皬鍚冿細鐐搁叡闈€佽眴姹併€佺硸钁姦銆侀摐閿呮懂缇婅倝銆傛竻鐪熼€夋嫨鏅強銆?,
      sourceId: "beijing-roast-duck",
      culturalNotes: {
        en: "The duck is roasted whole until the skin is glassy, then sliced thin tableside. You wrap each slice in a delicate pancake with scallion, cucumber, and a dab of sweet bean sauce. Eating it is part performance, part shared meal 鈥?best with a small group ordering a whole duck. The classic version isn't halal; halal restaurants substitute chicken. Order chrysanthemum tea or a local beer with it; the tradition doesn't add chilli oil. Old-Beijing snacks (noodles with soybean paste, dou-zhi, tanghulu skewers) survive in walking-street stalls and small storefronts; pick one with locals queuing 鈥?that's your quality signal. Copper-pot mutton hotpot belongs to winter, served with sesame paste and pickled garlic on the side.",
        zh: "鏁撮腑鐑よ嚦澶栫毊鏄庝寒閰ヨ剢锛屾杈圭墖鎴愯杽鐗囥€傛瘡鐗囩敤鏋佽杽鐨勬槬楗艰９濂斤紝閰嶈懕涓濄€侀粍鐡滄潯銆佹姽涓€鍕虹敎闈㈤叡銆傚悆娉曟湰韬甫鏈変华寮忔劅锛岄€傚悎鍑犱汉鍏卞悓鐐逛竴鍙暣楦€傜粡鍏稿仛娉曠敤鐚补澶勭悊闈㈤ゼ锛屽苟闈炴竻鐪燂紱娓呯湡椁愬巺涓€鑸互楦′唬楦€傞厤鑿婅姳鑼舵垨鏈湴鍟ら厭杈冭嚜鐒讹紝浼犵粺鍚冩硶涓嶅姞杈ｆ补銆傝€佸寳浜皬鍚冿紙鐐搁叡闈€佽眴姹併€佺硸钁姦锛夊湪姝ヨ琛楁憡浣嶅拰鑰佸簵閲屼粛鑳芥壘鍒帮紱寤鸿閫夋嫨鏈湴椤惧杈冨鐨勬憡浣嶃€傞摐閿呮懂缇婅倝灞炰簬鍐鑿滃搧锛岃樃楹婚叡銆侀厤鑵婂叓钂溿€?
      }
    },
    districts: {
      en: "Sanlitun (foreign restaurants, English menus common); Guomao CBD (international hotel dining); Wangfujing snack street; Hutong areas of central axis.",
      zh: "涓夐噷灞紙瑗块澶氥€佽嫳鏂囪彍鍗曞父瑙侊級锛涘浗璐?CBD锛堥珮鏄熼厭搴楅楗級锛涚帇搴滀簳灏忓悆琛楋紱涓酱绾胯儭鍚岀墖鍖恒€?,
      sourceId: "beijing-axis-snacks"
    },
    deliveryNote: {
      en: "Meituan and Ele.me both require a Chinese mobile number for SMS verification plus a domestic payment method. Ask your hotel concierge to order for you, or stick to restaurants you can walk into.",
      zh: "缇庡洟/楗夸簡涔?App 娉ㄥ唽闇€涓浗澶ч檰鎵嬫満鍙?+ 鍥藉唴鏀粯鏂瑰紡锛堟敮浠樺疂/寰俊锛夛紝澶栧浗娓稿涓€鑸棤鏈湴鍗忓姪闅句互涓嬪崟銆?,
      sourceId: "beijing-roast-duck"
    },
    pitfalls: [
      {
        en: "Tea ceremony scams near tourist areas (Wangfujing/Houhai). Walk away if invited by 'students' to a tea house.",
        zh: "鐜嬪簻浜?鍚庢捣涓€甯︽湁'瀛︾敓閭€璇峰幓鑼堕'鐨勮尪鑹洪楠楀眬锛岄亣鍒伴檶鐢熶汉涓诲姩閭€璇疯鐩存帴绂诲紑銆?,
        sourceId: "beijing-roast-duck"
      },
      {
        en: "Some smaller hutong shops are cash-only; Visa swipe is rare outside hotels.",
        zh: "鑳″悓閲岀殑灏忓瀷搴楅摵澶氭敹鐜伴噾锛涢珮鏄熼厭搴椾箣澶栧埛澶栧崱姒傜巼浣庛€?,
        sourceId: "beijing-axis-snacks"
      }
    ]
  },
  {
    cityId: "shanghai",
    cityEn: "Shanghai",
    cityZh: "涓婃捣",
    cuisine: {
      en: "Benbang Shanghainese cuisine: red-braised pork (hong-shao rou), sweet-soy ribs, drunken chicken. Xiaolongbao soup dumplings. International cuisine concentrates around the Bund and the former French Concession.",
      zh: "鏈府鑿滐細绾㈢儳鑲夈€佺硸閱嬪皬鎺掋€侀唹楦★紱灏忕鍖呫€傚婊╀笌鍘熸硶绉熺晫鍥介檯鑿滅郴涓板瘜銆?,
      sourceId: "shanghai-xiaolongbao",
      culturalNotes: {
        en: "Shanghainese cooking leans sweet 鈥?soy reduces with rock sugar until it glazes pork belly mahogany red; sweet-soy ribs are a holiday staple; drunken chicken is poached cold and steeped in shaoxing wine for hours. Xiaolongbao is the everyday lunch icon 鈥?eighteen pleats, all about the broth inside. The technique: bite a tiny hole at the top, sip the broth out, then eat the wrapper and filling. Burning your tongue on the first try is a rite of passage. Compared with Beijing, Shanghainese tabletop manners feel gentler 鈥?smaller plates, more sharing, less ceremony. International dining (French, Japanese, Italian) has real depth here that you won't find as easily elsewhere in mainland China.",
        zh: "鏈府鑿滃亸鐢溾€斺€旈叡娌归厤鍐扮硸鏀舵眮锛岀孩鐑ц倝鍏変寒濡傜惀鐝€锛涚硸閱嬪皬鎺掓槸鑺傛棩甯歌彍锛涢唹楦″喎椋燂紝鍦ㄧ粛鍏撮粍閰掗噷娴告暟灏忔椂銆傚皬绗煎寘鏄棩甯稿崍椁愮殑浠ｈ〃鈥斺€斿崄鍏亾瑜舵崗濂斤紝閲嶇偣鍦ㄩ噷闈㈢殑姹ゆ眮銆傚悆娉曪細鍏堝湪椤剁鍜竴涓皬鍙ｏ紝鍚稿嚭姹ゆ眮锛屽啀鍚冪毊鍜岄銆傚垵娆￠鐢ㄨ娉ㄦ剰鐑彛銆傚拰鍖椾含鑿滅浉姣旓紝鏈府鑿滅殑妗岄潰绀间华鏇翠粠瀹光€斺€斿垎閲忔洿灏忋€佸叡浜洿澶氾紝鎺掑満鎰熻緝寮便€傚浗闄呴楗紙娉曘€佹棩銆佹剰锛夊湪杩欓噷绉疮杈冩繁锛屽湪涓浗澶ч檰鍏朵粬鍩庡競鐩稿灏戣銆?
      }
    },
    districts: {
      en: "Xintiandi (English menus standard); Jing'an (mid-range international); the Bund (high-end); Former French Concession (caf茅s and bistros).",
      zh: "鏂板ぉ鍦帮紙鑻辨枃鑿滃崟鏍囬厤锛夛紱闈欏畨锛堜腑绔浗闄呴楗級锛涘婊╋紙楂樼锛夛紱鍘熸硶绉熺晫锛堝挅鍟￠涓庡皬閰掗锛夈€?,
      sourceId: "shanghai-xiaolongbao"
    },
    deliveryNote: {
      en: "Same as Beijing 鈥?Meituan/Eleme need a Chinese mobile + domestic payment. Hotels often have curated room-service menus in English as a workaround.",
      zh: "鍚屽寳浜€斺€旂編鍥?楗夸簡涔堥渶鍥藉唴鎵嬫満鍙?+ 鏀粯銆傞厭搴楅€氬父鏈夎嫳鏂囪彍鍗曠殑瀹㈡埧閫侀鏇夸唬鏂规銆?,
      sourceId: "shanghai-xiaolongbao"
    },
    pitfalls: [
      {
        en: "Xiaolongbao broth is scalding hot. Bite a small hole first, sip the soup, then eat. Multiple ER visits per year for tourist burns.",
        zh: "灏忕鍖呮堡姹佹瀬鐑€斺€斿厛鍜皬鍙ｅ惛姹ゅ啀鍚冿紝姣忓勾閮芥湁澶栧浗娓稿鐑激灏卞尰鐨勬渚嬨€?,
        sourceId: "shanghai-xiaolongbao"
      },
      {
        en: "Confusing Hongqiao Airport (SHA) with Hongqiao Railway Station gates can lose 30 min. Plan dinner near where you'll actually depart from.",
        zh: "铏规ˉ鏈哄満鍜岃櫣妗ョ伀杞︾珯杩涚珯鍙ｅ鏄撴贩娣嗭紝鍙兘鐩稿樊 30 鍒嗛挓銆傝鏅氶鍓嶅厛纭瀹為檯鍑哄彂浣嶇疆銆?,
        sourceId: "shanghai-xiaolongbao"
      }
    ]
  },
  {
    cityId: "guangzhou",
    cityEn: "Guangzhou",
    cityZh: "骞垮窞",
    cuisine: {
      en: "Cantonese yum cha (morning dim sum), slow-simmered soups (lao-huo tang), char siu and roast meats, herbal tea (liang cha). Traditionally one of the most foreign-friendly food cities in China.",
      zh: "绮ゅ紡鏃╄尪锛堢偣蹇冿級銆佽€佺伀姹ゃ€佺儳鍛筹紙鍙夌儳銆佺儳楣咃級銆佸噳鑼讹紱浼犵粺涓婃槸鍥藉唴瀵瑰绫嶆父瀹㈡渶鍙嬪ソ鐨勭編椋熷煄甯備箣涓€銆?,
      sourceId: "gz-foreigner-guide-pdf",
      culturalNotes: {
        en: "Cantonese eating is a daylong rhythm. Yum cha (literally 'drink tea') starts at sunrise 鈥?families bring babies and grandparents, dim sum trays circle the table, conversations stretch for hours. Tea is bottomless; the small tea-seat fee (楼3鈥?0 per person) covers leaves and table service, and is normal across Cantonese restaurants 鈥?never a scam, even if it surprises you on the bill. Slow-simmered soup (lao-huo tang) opens dinner 鈥?bones and herbs simmered five hours. Herbal tea (liang cha, sold from corner shops) is closer to medicine than refreshment, especially in summer humidity. Char siu and roast goose hang in shop windows; the skin should crackle when cut. Order more than you think you need 鈥?empty plates embarrass the host. English menus are common in tourist areas but small neighbourhood places use picture menus or just Chinese 鈥?translation app in hand.",
        zh: "绮よ彍璐┛涓€澶╃殑椁愰ギ鑺傚銆傛棭鑼讹紙鍗?\"楗尪\"锛夋竻鏅ㄥ紑濮嬶紝甯歌涓€瀹朵笁浠ｅ洿鍧愪竴妗岋紝鐐瑰績杞︿笉鏂帹杩囷紝鑱婂ぉ鍙寔缁暣涓笂鍗堛€傝尪浣嶈垂锛堟瘡浜?楼3鈥?0锛夋槸鑼跺彾 + 妗岄潰鏈嶅姟鐨勮垂鐢紝绮よ彍椁愬巺鏅亶鏀跺彇锛屽睘浜庢甯告敹璐广€傛櫄椁愬父浠庤€佺伀姹ゅ紑濮嬧€斺€旈澶村拰鑽潗鐔簲灏忔椂銆傚噳鑼讹紙琛楄竟鍑夎尪閾哄敭鍗栵級鏇存帴杩戣嵂鐢ㄩギ鍝侊紝澶忓ぉ婀跨儹鏃跺挨鍏跺父瑙併€傜儳鍛冲簵閲屾寕鐫€鍙夌儳鍜岀儳楣咃紝澶栫毊搴斿湪鍒囧紑鏃舵湁鑴嗗搷銆傜偣鑿滆绌朵赴鐩涳紝绌虹洏浼氳涓讳汉鏄惧緱鎷涘緟涓嶅懆銆傝嫳鏂囪彍鍗曞湪娓稿鍖哄父瑙侊紝绀惧尯閲岀殑灏忓瀷椁愰澶氱敤鍥剧墖鑿滃崟鎴栫函涓枃鑿滃崟锛屽缓璁噯澶囧ソ缈昏瘧 App銆?
      }
    },
    districts: {
      en: "Shamian Island (historic concession area, English menus common); Tianhe (CBD international hotel dining); Beijing Road / Shangxiajiu pedestrian streets (snacks).",
      zh: "娌欓潰锛堝巻鍙茬鐣岋紝鑻辨枃鑿滃崟鏅強锛夛紱澶╂渤锛圕BD 鍥介檯閰掑簵锛夛紱鍖椾含璺?涓婁笅涔濇琛岃锛堝皬鍚冿級銆?,
      sourceId: "gz-foreigner-guide-pdf"
    },
    deliveryNote: {
      en: "Same Meituan/Eleme constraints. Hotel concierge can sometimes order on your behalf 鈥?ask at check-in.",
      zh: "缇庡洟/楗夸簡涔堝悓鏍峰彈闄愶紱閰掑簵绀煎鏈夋椂鍙唬鐐癸紝鍏ヤ綇鏃跺彲鐩存帴璇㈤棶銆?,
      sourceId: "gz-foreigner-guide-pdf"
    },
    pitfalls: [
      {
        en: "Tea-seat fee (cha-wei): Cantonese restaurants charge a small per-person fee for tea + service (typically 楼3鈥?0). It's normal, not a scam.",
        zh: "鑼朵綅璐癸細绮よ彍椁愬巺鎸変汉鏀惰尪浣嶈垂锛堜竴鑸?楼3-10锛夛紝鏄甯告敹璐癸紝涓嶆槸璇堥獥銆?,
        sourceId: "gz-foreigner-guide-pdf"
      },
      {
        en: "Avoid yum cha at the 10:00鈥?2:00 peak 鈥?wait can be 90+ minutes at famous places. Earlier (07:00鈥?9:00) is calmer and traditional.",
        zh: "10:00-12:00 鏄棭鑼堕珮宄帮紝鍚嶅簵绛変綅 90 鍒嗛挓浠ヤ笂銆?7:00-09:00 鏇村畨闈欍€佹洿浼犵粺銆?,
        sourceId: "gz-foreigner-guide-pdf"
      },
      {
        en: "Humid climate: easy to underestimate water needs. Dim sum tea + extra water is the local norm.",
        zh: "婀跨儹姘斿€欏鏄撳拷鐣ヨˉ姘达紱闄ょ偣蹇冭尪澶栧澶囦竴鐡舵按銆?,
        sourceId: "gz-foreigner-guide-pdf"
      }
    ]
  },
  {
    cityId: "shenzhen",
    cityEn: "Shenzhen",
    cityZh: "娣卞湷",
    cuisine: {
      en: "Hakka cuisine (salt-baked chicken, stuffed tofu) plus China-wide migrant cuisines 鈥?Sichuan, Hunan, Northeastern. Heavy Cantonese influence in older districts.",
      zh: "瀹㈠鑿滐紙鐩愮剹楦°€侀吙璞嗚厫锛? 鍏ㄥ浗杩佸緳鑿滅郴锛堝窛銆佹箻銆佷笢鍖楋級锛涜€佸煄鍖虹菠鑿滃奖鍝嶉噸銆?,
      sourceId: "sz-baoan-airport-plan",
      culturalNotes: {
        en: "Shenzhen has no native cuisine of its own 鈥?the city is 30 million people from every province cooking what they grew up with. The Hakka tradition that pre-dates the boom leans on salt and preservation: salt-baked chicken roasts whole inside coarse salt; stuffed tofu has minced pork tucked into bean curd squares; pounded fish-paste dishes are a daily staple in older Hakka neighbourhoods. The other 80% of the food scene is Sichuan, Hunan, Northeastern, Cantonese, and lately Yunnan 鈥?each clustered where its migrant wave settled. The newest layer is Hong Kong-style cha chaan teng (tea restaurants), recognisable by bilingual menus, stainless-steel milk-tea kettles, and meals that mix Cantonese, British, and Southeast Asian ideas (egg tarts, French toast, Hainan chicken rice). Spice tolerance varies wildly between restaurants 鈥?ask for 'mild' if you mean it.",
        zh: "娣卞湷鐨勯楗粨鏋勪互绉绘皯鍩庡競涓哄簳鑹诧紝鏉ヨ嚜鍏ㄥ浗鍚勭渷鐨勪汉甯︽潵鍚勮嚜楗浼犵粺銆傛棭浜庣粡娴庣壒鍖哄瓨鍦ㄧ殑瀹㈠浼犵粺鍋忛噸鐩愬懗鍜岃厡鍒讹細鐩愮剹楦′互绮楃洂鍖呰９鏁撮浮鐑樺埗锛涢吙璞嗚厫鎶婄尓鑲夌濉繘璞嗚厫鍧楋紱鑰佸瀹剁ぞ鍖洪噷浠嶈兘鍚冨埌鐜版墦鐨勯奔涓搁奔闈€傚叾浣欓楗被鍨嬩互宸濄€佹箻銆佷笢鍖椼€佺菠鑿滀负涓伙紝杩戝勾浜戝崡鑿滀篃杈冨父瑙侊紝澶ц嚧闅忓悇浠ｇЩ姘戣仛灞呭湴鍒嗗竷銆傛柊杩戠殑涓€灞傛槸娓紡鑼堕鍘咃紝鍙€氳繃鍙岃鑿滃崟銆佷笉閿堥挗濂惰尪澹讹紝浠ュ強绮ゅ紡 + 鑻卞紡 + 涓滃崡浜氭贩鎼彍鍝侊紙铔嬫尀銆佽タ澶氬＋銆佹捣鍗楅浮楗級璇嗗埆銆傚悇椁愬巺杈ｅ害宸紓杈冨ぇ锛屼笉鑳藉悆杈ｆ椂璇锋槑纭鏄?\"寰荆\"銆?
      }
    },
    districts: {
      en: "Futian CBD (international hotel dining, English menus); Sea World / Shekou (expat-oriented); Nanshan (tech-park lunch culture); OCT-LOFT (caf茅s and indie restaurants).",
      zh: "绂忕敯 CBD锛堝浗闄呴厭搴楅楗€佽嫳鏂囪彍鍗曪級锛涙捣涓婁笘鐣?铔囧彛锛堝绫嶇ぞ鍖洪楗級锛涘崡灞憋紙绉戞妧鍥崍椁愶級锛涘崕渚ㄥ煄 OCT-LOFT锛堝挅鍟′笌鐙珛椁愬巺锛夈€?,
      sourceId: "sz-baoan-airport-plan"
    },
    deliveryNote: {
      en: "Meituan/Eleme constraints same as other cities. Hong Kong cross-border tourists often use AlipayHK to order from Shenzhen restaurants directly.",
      zh: "缇庡洟/楗夸簡涔堥檺鍒跺悓鍏朵粬鍩庡競锛涢娓父瀹㈠父鐢?AlipayHK 鐩存帴鍦ㄦ繁鍦抽鍘呮壂鐮佺偣鍗曘€?,
      sourceId: "sz-tax-refund-alipayhk"
    },
    pitfalls: [
      {
        en: "Many small eateries lack English menus despite the city's modern image. Translation app + photo menu is essential.",
        zh: "灏界娣卞湷褰㈣薄鐜颁唬锛屼絾灏忓瀷椁愰鑻辨枃鑿滃崟浠嶅皯锛涚炕璇?App + 鍥剧墖鑿滃崟鏄父鐢ㄦ柟妗堛€?,
        sourceId: "sz-baoan-airport-plan"
      },
      {
        en: "Cross-border food haul: dairy, fresh meat, and fresh fruit can be restricted by HK customs on the way back. Check before buying gifts.",
        zh: "璺ㄥ甯﹂鍝侊細涔冲埗鍝併€佺敓椴滆倝绫汇€佹柊椴滄按鏋滃洖娓細琚捣鍏抽檺鍒讹紝璐墿鍓嶈鍏堟煡璇㈣鍒欍€?,
        sourceId: "sz-tax-refund-alipayhk"
      }
    ]
  }
];

import { pitfallSourceIds } from "./practical-other";

export function foodSourceIds(cityId?: CityId): string[] {
  const ids = new Set<string>();
  const cities = cityId ? cityFood.filter((c) => c.cityId === cityId) : cityFood;
  cities.forEach((c) => {
    ids.add(c.cuisine.sourceId);
    ids.add(c.districts.sourceId);
    ids.add(c.deliveryNote.sourceId);
    c.pitfalls.forEach((p) => ids.add(p.sourceId));
  });
  pitfallSourceIds("food", cityId).forEach((id) => ids.add(id));
  return [...ids];
}

export const allergyCardEn =
  "I am severely allergic to ____. I cannot eat or come into contact with any soup, sauce, oil, ingredients, or cookware that contain ____. Please do not include ____. If you are unsure, please tell me. Thank you.";

export const allergyCardZh =
  "鎴戝 ____ 涓ラ噸杩囨晱锛屼笉鑳藉悆锛屼篃涓嶈兘鎺ヨЕ鍚湁 ____ 鐨勬堡銆侀叡銆佹补銆侀厤鏂欐垨鍘ㄥ叿銆傝涓嶈鏀?____銆傚鏋滀笉纭畾锛岃鍛婅瘔鎴戙€傝阿璋€?;

 succeeded in 739ms:
export type Region = "Europe" | "Asia" | "Oceania" | "Americas";

export type UnilateralCountry = {
  countryEn: string;
  countryZh: string;
  region: Region;
};

/**
 * Source: NIA "List of Countries Covered by Unilateral Visa Exemption Policies"
 * URL: https://en.nia.gov.cn/n147418/n147463/c183390/content.html
 * Page dated: 2026-02-17 鈥?list of 50 ordinary-passport nationalities, max stay 30 days.
 * Eligible purposes per page: business, tourism, visit relatives/friends, exchange, transit.
 * Source id in sources.ts: nia-unilateral-list
 */
export const unilateralVisaFreeCountries: UnilateralCountry[] = [
  // Europe (35)
  { countryEn: "Andorra", countryZh: "瀹夐亾灏?, region: "Europe" },
  { countryEn: "Austria", countryZh: "濂ュ湴鍒?, region: "Europe" },
  { countryEn: "Belgium", countryZh: "姣斿埄鏃?, region: "Europe" },
  { countryEn: "Bulgaria", countryZh: "淇濆姞鍒╀簹", region: "Europe" },
  { countryEn: "Croatia", countryZh: "鍏嬬綏鍦颁簹", region: "Europe" },
  { countryEn: "Cyprus", countryZh: "濉炴郸璺柉", region: "Europe" },
  { countryEn: "Denmark", countryZh: "涓归害", region: "Europe" },
  { countryEn: "Estonia", countryZh: "鐖辨矙灏间簹", region: "Europe" },
  { countryEn: "Finland", countryZh: "鑺叞", region: "Europe" },
  { countryEn: "France", countryZh: "娉曞浗", region: "Europe" },
  { countryEn: "Germany", countryZh: "寰峰浗", region: "Europe" },
  { countryEn: "Greece", countryZh: "甯岃厞", region: "Europe" },
  { countryEn: "Hungary", countryZh: "鍖堢墮鍒?, region: "Europe" },
  { countryEn: "Iceland", countryZh: "鍐板矝", region: "Europe" },
  { countryEn: "Ireland", countryZh: "鐖卞皵鍏?, region: "Europe" },
  { countryEn: "Italy", countryZh: "鎰忓ぇ鍒?, region: "Europe" },
  { countryEn: "Latvia", countryZh: "鎷夎劚缁翠簹", region: "Europe" },
  { countryEn: "Liechtenstein", countryZh: "鍒楁敮鏁﹀＋鐧?, region: "Europe" },
  { countryEn: "Luxembourg", countryZh: "鍗㈡．鍫?, region: "Europe" },
  { countryEn: "Malta", countryZh: "椹€充粬", region: "Europe" },
  { countryEn: "Monaco", countryZh: "鎽╃撼鍝?, region: "Europe" },
  { countryEn: "Montenegro", countryZh: "榛戝北", region: "Europe" },
  { countryEn: "Netherlands", countryZh: "鑽峰叞", region: "Europe" },
  { countryEn: "North Macedonia", countryZh: "鍖楅┈鍏堕】", region: "Europe" },
  { countryEn: "Norway", countryZh: "鎸▉", region: "Europe" },
  { countryEn: "Poland", countryZh: "娉㈠叞", region: "Europe" },
  { countryEn: "Portugal", countryZh: "钁¤悇鐗?, region: "Europe" },
  { countryEn: "Romania", countryZh: "缃楅┈灏间簹", region: "Europe" },
  { countryEn: "Russian Federation", countryZh: "淇勭綏鏂?, region: "Europe" },
  { countryEn: "Slovakia", countryZh: "鏂礇浼愬厠", region: "Europe" },
  { countryEn: "Slovenia", countryZh: "鏂礇鏂囧凹浜?, region: "Europe" },
  { countryEn: "Spain", countryZh: "瑗跨彮鐗?, region: "Europe" },
  { countryEn: "Sweden", countryZh: "鐟炲吀", region: "Europe" },
  { countryEn: "Switzerland", countryZh: "鐟炲＋", region: "Europe" },
  { countryEn: "United Kingdom", countryZh: "鑻卞浗", region: "Europe" },
  // Oceania (2)
  { countryEn: "Australia", countryZh: "婢冲ぇ鍒╀簹", region: "Oceania" },
  { countryEn: "New Zealand", countryZh: "鏂拌タ鍏?, region: "Oceania" },
  // Asia (7)
  { countryEn: "Bahrain", countryZh: "宸存灄", region: "Asia" },
  { countryEn: "Brunei Darussalam", countryZh: "鏂囪幈", region: "Asia" },
  { countryEn: "Japan", countryZh: "鏃ユ湰", region: "Asia" },
  { countryEn: "Kuwait", countryZh: "绉戝▉鐗?, region: "Asia" },
  { countryEn: "Oman", countryZh: "闃挎浖", region: "Asia" },
  { countryEn: "Republic of Korea", countryZh: "闊╁浗", region: "Asia" },
  { countryEn: "Saudi Arabia", countryZh: "娌欑壒闃挎媺浼?, region: "Asia" },
  // Americas (6)
  { countryEn: "Argentina", countryZh: "闃挎牴寤?, region: "Americas" },
  { countryEn: "Brazil", countryZh: "宸磋タ", region: "Americas" },
  { countryEn: "Canada", countryZh: "鍔犳嬁澶?, region: "Americas" },
  { countryEn: "Chile", countryZh: "鏅哄埄", region: "Americas" },
  { countryEn: "Peru", countryZh: "绉橀瞾", region: "Americas" },
  { countryEn: "Uruguay", countryZh: "涔屾媺鍦?, region: "Americas" }
];

export const unilateralPolicy = {
  maxStayDays: 30,
  eligiblePurposes: ["business", "tourism", "visit relatives/friends", "exchange", "transit"],
  sourceId: "nia-unilateral-list"
} as const;

/**
 * Source: NIA transit visa-free policy page (2023-10-19) for the country list
 * Source: State Council 2025-11-04 announcement for the headline (55 countries, 65 ports, 24 provinces, 240 hours)
 * URL: https://en.nia.gov.cn/n147418/n147463/c156094/content.html
 * URL: https://english.www.gov.cn/news/202511/04/content_WS69094ae0c6d00ca5f9a07472.html
 *
 * NIA's 2023-10-19 page lists the country pool used for transit visa-free.
 * The State Council 2025-11-04 page confirms the 240-hour upgrade effective 2025-11-05
 * but does not enumerate ports or countries; we reference both sources together.
 */
export const transitVisaFreeCountries: string[] = [
  // Schengen (25)
  "Austria", "Belgium", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany",
  "Greece", "Hungary", "Iceland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta",
  "Netherlands", "Poland", "Portugal", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland",
  "Croatia",
  // Other Europe (14)
  "Russia", "United Kingdom", "Ireland", "Cyprus", "Bulgaria", "Romania", "Ukraine", "Serbia",
  "Bosnia and Herzegovina", "Montenegro", "North Macedonia", "Albania", "Monaco", "Belarus",
  // Americas (6)
  "United States", "Canada", "Brazil", "Mexico", "Argentina", "Chile",
  // Oceania (2)
  "Australia", "New Zealand",
  // Asia (6)
  "South Korea", "Japan", "Singapore", "Brunei", "United Arab Emirates", "Qatar"
];

export type TransitPort = {
  city: string;
  cityZh: string;
  portEn: string;
  portZh: string;
  province: string;
  /** Hours the transit traveller may stay. State Council 2025-11-04 raised most from 144 to 240. */
  maxHours: 240 | 144 | 72;
};

/**
 * Phase 1 ports 鈥?the four cities the product covers, all confirmed at 240 hours
 * by the State Council 2025-11-04 announcement (sources.ts: state-council-240h)
 * and corroborated by the city-level government English pages.
 */
export const phase1TransitPorts: TransitPort[] = [
  { city: "Beijing", cityZh: "鍖椾含", portEn: "Capital International Airport", portZh: "棣栭兘鍥介檯鏈哄満", province: "Beijing", maxHours: 240 },
  { city: "Beijing", cityZh: "鍖椾含", portEn: "Daxing International Airport", portZh: "澶у叴鍥介檯鏈哄満", province: "Beijing", maxHours: 240 },
  { city: "Shanghai", cityZh: "涓婃捣", portEn: "Pudong International Airport", portZh: "娴︿笢鍥介檯鏈哄満", province: "Shanghai", maxHours: 240 },
  { city: "Shanghai", cityZh: "涓婃捣", portEn: "Hongqiao International Airport", portZh: "铏规ˉ鍥介檯鏈哄満", province: "Shanghai", maxHours: 240 },
  { city: "Guangzhou", cityZh: "骞垮窞", portEn: "Baiyun International Airport", portZh: "鐧戒簯鍥介檯鏈哄満", province: "Guangdong", maxHours: 240 },
  { city: "Shenzhen", cityZh: "娣卞湷", portEn: "Bao'an International Airport", portZh: "瀹濆畨鍥介檯鏈哄満", province: "Guangdong", maxHours: 240 }
];

export const transitPolicy = {
  maxHours: 240,
  effectiveDate: "2025-11-05",
  totalCountries: 55,
  totalPorts: 65,
  provincialRegions: 24,
  thirdCountryRequired: true,
  sourceIds: ["state-council-240h", "nia-transit-list"]
} as const;

export const onlineEntryCard = {
  effectiveDate: "2025-11-20",
  free: true,
  alternativesAtPort: ["self-service kiosk", "paper card"],
  sourceIds: ["nia-online-entry-card", "nia-card-fraud-warning"]
} as const;

export type EligibilityResult =
  | { kind: "unilateral"; maxStayDays: number; sourceId: string }
  | { kind: "transit-only"; maxHours: number; sourceId: string }
  | { kind: "both"; unilateralDays: number; transitHours: number; sourceIds: string[] }
  | { kind: "visa-required"; applyUrl: string };

const unilateralSet = new Set(unilateralVisaFreeCountries.map((c) => c.countryEn));
const transitSet = new Set(transitVisaFreeCountries);

const aliases: Record<string, string> = {
  "United Kingdom of Great Britain and Northern Ireland": "United Kingdom",
  "UK": "United Kingdom",
  "Russia": "Russian Federation",
  "South Korea": "Republic of Korea",
  "Korea": "Republic of Korea",
  "Brunei": "Brunei Darussalam",
  "USA": "United States",
  "U.S.": "United States",
  "U.S.A.": "United States"
};

const normalize = (name: string): string => aliases[name] ?? name;

export function checkEligibility(country: string): EligibilityResult {
  const canonical = normalize(country);
  const unilateral = unilateralSet.has(canonical);
  const transitCanonical = transitSet.has(canonical) || transitSet.has(country);
  const transit = transitCanonical;

  if (unilateral && transit) {
    return {
      kind: "both",
      unilateralDays: unilateralPolicy.maxStayDays,
      transitHours: transitPolicy.maxHours,
      sourceIds: [unilateralPolicy.sourceId, ...transitPolicy.sourceIds]
    };
  }
  if (unilateral) {
    return {
      kind: "unilateral",
      maxStayDays: unilateralPolicy.maxStayDays,
      sourceId: unilateralPolicy.sourceId
    };
  }
  if (transit) {
    return {
      kind: "transit-only",
      maxHours: transitPolicy.maxHours,
      sourceId: transitPolicy.sourceIds[0]
    };
  }
  return {
    kind: "visa-required",
    applyUrl: "https://www.visaforchina.cn"
  };
}

import { pitfallSourceIds } from "./practical-other";

export const entryPolicySourceIds: string[] = [
  unilateralPolicy.sourceId,
  ...transitPolicy.sourceIds,
  ...onlineEntryCard.sourceIds,
  "visa-application-center",
  ...pitfallSourceIds("entry")
];

 succeeded in 761ms:
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

 succeeded in 781ms:
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

 succeeded in 790ms:
import type { CityId } from "./transport";

export const nationalEmergency = [
  { number: "110", labelEn: "Police", labelZh: "鍏畨", noteEn: "Free. Shanghai 110 supports 8 languages.", noteZh: "鍏嶈垂銆備笂娴?110 鏀寔 8 绉嶈瑷€銆?, sourceId: "shanghai-emergency-numbers" },
  { number: "119", labelEn: "Fire & Rescue", labelZh: "娑堥槻", noteEn: "Free. Foreign-language support in Shanghai.", noteZh: "鍏嶈垂銆備笂娴锋敮鎸佸璇€?, sourceId: "shanghai-emergency-numbers" },
  { number: "120", labelEn: "Ambulance", labelZh: "鎬ユ晳", noteEn: "Free. National medical emergency dispatch.", noteZh: "鍏嶈垂銆傚叏鍥藉尰鐤楁€ユ晳璋冨害銆?, sourceId: "beijing-emergency-numbers" },
  { number: "122", labelEn: "Traffic Police", labelZh: "浜よ", noteEn: "Free. No confirmed English line 鈥?use 110 or your hotline app for translation.", noteZh: "鍏嶈垂銆傚璇敮鎸佸緟鏍搁獙銆?, sourceId: "beijing-emergency-numbers" }
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
    nameZh: "鍖椾含鍗忓拰鍖婚櫌",
    addressEn: "1 Shuaifuyuan, Wangfujing, Dongcheng District",
    phone: "+86 10 6915 1188",
    emergencyPhone: "24/7",
    intlDept: "International Medical Services (IMS)",
    hours: "Mon鈥揊ri 08:00鈥?7:00; Sat鈥揝un 08:00鈥?2:00; ER 24/7",
    sourceId: "pumch-foreign-care"
  },
  {
    cityId: "beijing",
    nameEn: "Beijing United Family Hospital",
    nameZh: "鍖椾含鍜岀潶瀹跺尰闄?,
    addressEn: "2 Jiangtai Road, Chaoyang District",
    phone: "+86 10 5927 7000",
    emergencyPhone: "+86 10 5927 7120",
    intlDept: "English-speaking doctors throughout; no separate international desk",
    hours: "ER 24/7; outpatient varies",
    sourceId: "ufh-beijing"
  },
  {
    cityId: "shanghai",
    nameEn: "Huashan Hospital 鈥?World Health Clinic",
    nameZh: "澶嶆棪澶у闄勫睘鍗庡北鍖婚櫌 鍥介檯鍖荤枟閮?,
    addressEn: "Building 5, 221 West Yan'an Road, Jing'an District",
    phone: "+86 21 6248 3986",
    emergencyPhone: "via main switchboard",
    intlDept: "World Health Clinic (澶栧鍖荤枟閮?",
    hours: "Mon鈥揊ri 08:00鈥?2:00, 13:30鈥?7:00; ER 24/7",
    sourceId: "huashan-shanghai"
  },
  {
    cityId: "shanghai",
    nameEn: "Shanghai United Family Hospital 鈥?Puxi",
    nameZh: "涓婃捣鍜岀潶瀹跺尰闄?娴﹁タ闄㈠尯",
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
    nameZh: "涓北澶у闄勫睘绗竴鍖婚櫌",
    addressEn: "58 Zhongshan 2nd Road, Yuexiu District",
    phone: "+86 20 8733 2200",
    emergencyPhone: "via main switchboard",
    intlDept: "International Medical Center (Liu Luanxiong Building, opened 2025-03)",
    hours: "Mon鈥揊ri 08:00鈥?2:00, 14:30鈥?7:30; ER 24/7",
    sourceId: "fahsysu-gz"
  },
  {
    cityId: "guangzhou",
    nameEn: "Guangzhou United Family Hospital",
    nameZh: "骞垮窞鍜岀潶瀹跺尰闄?,
    addressEn: "31 Pazhou Avenue, Haizhu District",
    phone: "+86 20 3610 2333",
    emergencyPhone: "+86 20 3610 2333",
    intlDept: "Full-hospital international; 40+ language phone interpretation",
    hours: "ER 24/7",
    sourceId: "ufh-guangzhou"
  },
  {
    cityId: "shenzhen",
    nameEn: "University of Hong Kong鈥揝henzhen Hospital (HKU-SZH)",
    nameZh: "棣欐腐澶у娣卞湷鍖婚櫌",
    addressEn: "1 Haiyuan First Road, Futian District",
    phone: "+86 755 8691 3388",
    intlDept: "International Medical Center (IMC)",
    hours: "Mon鈥揊ri 08:00鈥?7:30; Sat 08:00鈥?7:30; Sun 08:30鈥?2:30",
    sourceId: "hku-szh"
  },
  {
    cityId: "shenzhen",
    nameEn: "Shenzhen People's Hospital",
    nameZh: "娣卞湷甯備汉姘戝尰闄?,
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
    noteZh: "10 绉嶈瑷€銆傝嫳璇?24/7锛涘叾浠?8 灏忔椂/澶┿€?,
    sourceId: "beijing-12345-hotline"
  },
  {
    cityId: "shanghai",
    number: "12345",
    langs: ["EN", "FR", "DE", "JA", "KO", "ES", "IT", "RU", "TH", "FA"],
    noteEn: "Press 7 for foreign-language services. 24/7.",
    noteZh: "鎸?7 杩涘叆澶栬鏈嶅姟锛?4/7銆?,
    sourceId: "shanghai-12345"
  },
  {
    cityId: "guangzhou",
    number: "020-12345 / 960169",
    langs: ["EN 24/7", "JA", "KO"],
    noteEn: "960169 is a 3-party interpretation bridge 鈥?call it, then it conferences in 110/119/120/12345 for you.",
    noteZh: "960169 鏄笁鏂圭炕璇戣浆鎺ユ湇鍔♀€斺€旀嫧閫氬悗鍐嶅府浣犳帴 110/119/120/12345銆?,
    sourceId: "gz-960169-bridge"
  },
  {
    cityId: "shenzhen",
    number: "0755-12345",
    langs: ["iShenzhen app: EN, FR, AR, JA, KO, ES, DE, PT, RU"],
    noteEn: "The 0755-12345 hotline may not route to a live English speaker 鈥?use the iShenzhen app instead, which supports 9 languages including English.",
    noteZh: "鐢佃瘽鑻辫鐩存嫧鏀寔寰呮牳楠岋紱iShenzhen App 鏀寔 9 绉嶈瑷€銆?,
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
    countryZh: "缇庡浗",
    name: "U.S. Embassy Beijing",
    address: "55 Anjialou Road, Chaoyang District",
    phone: "+86 10 8531 4000",
    emergency: "+1 202 501 4444 (State Dept Ops 24/7)",
    sourceId: "us-embassy-china"
  },
  {
    country: "United Kingdom",
    countryZh: "鑻卞浗",
    name: "British Embassy Beijing",
    address: "11 Guanghua Road, Chaoyang District",
    phone: "+86 10 5192 4000",
    emergency: "+86 10 5192 4000 (24/7 prompts)",
    sourceId: "uk-embassy-china"
  },
  {
    country: "Canada",
    countryZh: "鍔犳嬁澶?,
    name: "Embassy of Canada to China",
    address: "19 Dongzhimenwai Dajie, Chaoyang District",
    phone: "+86 10 5139 4000",
    emergency: "+86 10 5139 4000 (24/7)",
    sourceId: "ca-embassy-china"
  },
  {
    country: "Australia",
    countryZh: "婢冲ぇ鍒╀簹",
    name: "Australian Embassy Beijing",
    address: "21 Dongzhimenwai Dajie",
    phone: "+86 10 5140 4111",
    emergency: "+61 2 6261 3305 (Canberra 24/7)",
    sourceId: "au-embassy-china"
  },
  {
    country: "Japan",
    countryZh: "鏃ユ湰",
    name: "Embassy of Japan in China",
    address: "1 Liangmaqiao East Street, Chaoyang District",
    phone: "+86 10 8531 9800",
    emergency: "+86 10 6532 5964 (Consular Protection)",
    sourceId: "jp-embassy-china"
  }
];

export const mfaConsular = {
  url: "https://www.fmprc.gov.cn/web/fw_673051/lbfw_673061/fgzl_673083/",
  noteEn: "Full directory of foreign missions in China (MFA).",
  noteZh: "涓崕浜烘皯鍏卞拰鍥藉浜ら儴棰嗕簨鍙稿鍥介┗鍗庝娇棰嗛鍚嶅綍銆?,
  sourceId: "mfa-consular-directory"
} as const;

import { pitfallSourceIds } from "./practical-other";

export function emergencySourceIds(cityId?: CityId): string[] {
  const ids = new Set<string>();
  nationalEmergency.forEach((r) => ids.add(r.sourceId));
  embassies.forEach((e) => ids.add(e.sourceId));
  ids.add(mfaConsular.sourceId);
  if (cityId) {
    hospitals.filter((h) => h.cityId === cityId).forEach((h) => ids.add(h.sourceId));
    const ch = cityHotlines.find((h) => h.cityId === cityId);
    if (ch) ids.add(ch.sourceId);
  } else {
    hospitals.forEach((h) => ids.add(h.sourceId));
    cityHotlines.forEach((h) => ids.add(h.sourceId));
  }
  hospitalVisitFlow.forEach((s) => ids.add(s.sourceId));
  pitfallSourceIds("emergency", cityId).forEach((id) => ids.add(id));
  return [...ids];
}

export const hospitalVisitFlow = [
  {
    step: 1,
    titleEn: "Make an appointment",
    titleZh: "棰勭害",
    bodyEn: "Public hospital IMS desks accept walk-in registration; private hospitals (UFH/SOS/HKU-SZH IMC) prefer prior phone or app booking.",
    bodyZh: "鍏珛鍖婚櫌 IMS 绐楀彛鎺ュ彈鐜板満鎸傚彿锛涚绔嬪浗闄呭尰闄紙UFH/SOS/HKU-SZH IMC锛夐渶鎻愬墠鐢佃瘽鎴?App 棰勭害銆?,
    sourceId: "pumch-foreign-care"
  },
  {
    step: 2,
    titleEn: "Bring documents",
    titleZh: "鎼哄甫鏂囦欢",
    bodyEn: "Original passport (copy not enough). International insurance card + policy. Letter of guarantee from insurer if claiming direct billing.",
    bodyZh: "蹇呴』鎼哄甫鎶ょ収鍘熶欢锛屽鍗颁欢涓嶅彲鏇夸唬銆傝繕闇€鍥介檯鍖讳繚鍗?+ 淇濆崟銆傚浣跨敤鐩翠粯淇濋櫓锛岄』澶囦繚闄╁叕鍙镐繚鍑姐€?,
    sourceId: "pumch-foreign-care"
  },
  {
    step: 3,
    titleEn: "Pay at counter or direct-billing",
    titleZh: "缁撶畻",
    bodyEn: "Cash + Alipay/WeChat universal. UnionPay card universal. Visa/MC mainly at IMS/VIP desks. Direct billing only at hospitals contracted with your insurer.",
    bodyZh: "鐜伴噾 + Alipay/寰俊鏀粯閫氱敤锛涢摱鑱斿崱閫氱敤锛涘鍗?Visa/MC 涓昏鍦?IMS/VIP 绐楀彛銆備繚闄╃洿浠樹粎闄愬悎浣滄満鏋勩€?,
    sourceId: "pumch-foreign-care"
  }
] as const;

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg "findBestMatch|getAllRecords|SearchRecord|search" src -n' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/pages/MapPage.tsx'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/pages/HomePage.tsx'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/root.tsx'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/styles/globals.css'" in c:\Users\h\Documents\New project 2\v2
 succeeded in 1230ms:
src\data\i18n.ts:10:    searchPlaceholder: "Search city, county, town, village, scenic area",
src\data\i18n.ts:11:    searchButton: "Search",
src\data\i18n.ts:12:    searchNoMatch: "No matching place in the current demo index.",
src\data\i18n.ts:13:    searchJumped: "Map jumped to",
src\data\i18n.ts:76:    searchPlaceholder: "搜索城市、县、镇、村、景区",
src\data\i18n.ts:77:    searchButton: "搜索",
src\data\i18n.ts:78:    searchNoMatch: "当前演示索引里没有匹配地点。",
src\data\i18n.ts:79:    searchJumped: "地图已跳转到",
src\root.tsx:14:function currentHref(pathname: string, search: string, hash: string): string {
src\root.tsx:15:  const path = `${pathname}${search}${hash}` || "/";
src\root.tsx:22:  const href = currentHref(location.pathname, location.search, location.hash);
src\pages\HomePage.tsx:43:      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
src\pages\HomePage.tsx:45:    "query-input": "required name=search_term_string"
src\lib\search.ts:4:export type SearchRecord = {
src\lib\search.ts:21:const buildIndex = (): readonly SearchRecord[] => {
src\lib\search.ts:22:  const records: SearchRecord[] = [];
src\lib\search.ts:25:  const push = (record: SearchRecord) => {
src\lib\search.ts:118:const searchIndex = buildIndex();
src\lib\search.ts:119:const tokenIndex = searchIndex.map((record) => ({
src\lib\search.ts:124:export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
src\lib\search.ts:126:export const findBestMatch = (query: string): SearchRecord | null => {
src\lib\search.ts:130:  let best: { record: SearchRecord; score: number } | null = null;

 succeeded in 1251ms:
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

 succeeded in 1293ms:
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
  { to: "/plan", en: "3-day plan", zh: "3 澶╄绋? },
  { to: "/guide/notes", en: "Travel notes", zh: "鍑鸿娉ㄦ剰浜嬮」" },
  { to: "/phrasebook", en: "Essential phrases", zh: "搴旀€ョ煭璇? }
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

      <section aria-label={isZh ? "鍑鸿鍔熻兘鍏ュ彛" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
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

 succeeded in 1303ms:
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

 succeeded in 1304ms:
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
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/pages/CityPage.tsx'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/components/city/CityIntro.tsx'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/components/pillar/PaymentsChecklist.tsx'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/components/pillar/VisaChecker.tsx'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/components/common/PracticalBlock.tsx'" in c:\Users\h\Documents\New project 2\v2
 succeeded in 753ms:
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

 succeeded in 822ms:
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

 succeeded in 823ms:
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

 succeeded in 834ms:
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

 succeeded in 855ms:
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
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/components/sections/TopQuestions.tsx'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/components/pillar/PaymentsPractical.tsx'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/components/pillar/TransportGuide.tsx'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/components/pillar/FoodGuide.tsx'" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'src/components/pillar/EmergencyBriefing.tsx'" in c:\Users\h\Documents\New project 2\v2
 succeeded in 827ms:
import { useState } from "react";
import clsx from "clsx";
import { topQuestions } from "../../data/top-questions";
import { useLang } from "../../store/language";

export default function TopQuestions() {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const [openId, setOpenId] = useState<string | null>(topQuestions[0].id);

  return (
    <section id="top-questions" className="flex min-w-0 flex-col gap-3 rounded-lg border border-line bg-white p-4">
      <header>
        <span className="text-xs font-bold uppercase tracking-widest text-muted">
          {isZh ? "鍑鸿鍓嶆渶鍏冲績鐨勯棶棰? : "Pre-arrival FAQ"}
        </span>
        <h2 className="text-xl font-bold leading-tight">
          {isZh ? "鏈€甯歌闂埌鐨勯棶棰? : "Top questions before you fly"}
        </h2>
        <p className="text-sm text-muted">
          {isZh ? "绛旀鍏ㄩ儴寮曡嚜瀹樻柟婧愶紱鐐瑰紑鐪嬭鎯呭拰閾炬帴銆? : "Every answer cites an official source. Tap to expand."}
        </p>
      </header>

      <ul className="flex flex-col gap-2">
        {topQuestions.map((q) => {
          const open = openId === q.id;
          return (
            <li key={q.id} className="rounded-lg border border-line bg-white">
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : q.id)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
              >
                <strong className="min-w-0 text-sm leading-tight break-words">
                  {isZh ? q.questionZh : q.questionEn}
                </strong>
                <span
                  className={clsx(
                    "shrink-0 text-xl text-muted transition-transform",
                    open && "rotate-45"
                  )}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {open && (
                <div className="border-t border-line px-4 py-3">
                  <p className="text-sm leading-relaxed break-words">{isZh ? q.answerZh : q.answerEn}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

 succeeded in 920ms:
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

 succeeded in 918ms:
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

 succeeded in 940ms:
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

 succeeded in 954ms:
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

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'package.json'" in c:\Users\h\Documents\New project 2\v2
 succeeded in 348ms:
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
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'tsconfig.app.json'" in c:\Users\h\Documents\New project 2\v2
 succeeded in 381ms:
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

codex
我已经确认旧 `src/lib/search.ts` 只服务地图地点搜索，所以会保留旧 `findBestMatch/getAllRecords`，另外导出新的 `buildSearchIndex()` 给 `/search` 页面用。搜索结果会链接到现有页面锚点；景点会补上对应 DOM `id`，让结果跳转到具体卡片。
2026-05-12T03:44:26.800941Z ERROR codex_core::tools::router: error=apply_patch verification failed: Failed to find expected lines in c:\Users\h\Documents\New project 2\v2\src\lib\search.ts:
  aliases: string[];
};

const NORMALIZE_PATTERN = /[路,锛屻€?\s/'鈥?]+/g;

const normalize = (value: string): string =>
  value.toLowerCase().replace(NORMALIZE_PATTERN, "").trim();
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=1; Get-Content -Path '"'src/lib/search.ts' | ForEach-Object { '{0,4}: {1}' -f "'$i, $_; $i++ }' in c:\Users\h\Documents\New project 2\v2
 succeeded in 417ms:
   1: import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
   2: import { provinceHitAreas } from "../data/map-sources";
   3: 
   4: export type SearchRecord = {
   5:   zh: string;
   6:   en: string;
   7:   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   8:   provinceId: string;
   9:   cityId?: string;
  10:   aliases: string[];
  11: };
  12: 
  13: const NORMALIZE_PATTERN = /[路,锛屻€?\s/'鈥?]+/g;
  14: 
  15: const normalize = (value: string): string =>
  16:   value.toLowerCase().replace(NORMALIZE_PATTERN, "").trim();
  17: 
  18: const splitGroup = (value: string | undefined): string[] =>
  19:   (value ?? "").split("/").map((s) => s.trim()).filter(Boolean);
  20: 
  21: const buildIndex = (): readonly SearchRecord[] => {
  22:   const records: SearchRecord[] = [];
  23:   const seen = new Set<string>();
  24: 
  25:   const push = (record: SearchRecord) => {
  26:     const key = `${record.type}|${record.provinceId}|${record.cityId ?? ""}|${normalize(record.zh)}|${normalize(record.en)}`;
  27:     if (seen.has(key)) return;
  28:     seen.add(key);
  29:     records.push(record);
  30:   };
  31: 
  32:   atlasData.forEach((province) => {
  33:     push({
  34:       zh: province.zh,
  35:       en: province.name,
  36:       type: "province",
  37:       provinceId: province.id,
  38:       aliases: [province.zh, province.name, province.id]
  39:     });
  40: 
  41:     province.cities.forEach((city) => {
  42:       push({
  43:         zh: city.zh,
  44:         en: city.name,
  45:         type: "city",
  46:         provinceId: province.id,
  47:         cityId: city.id,
  48:         aliases: [city.zh, city.name, city.id, city.province]
  49:       });
  50: 
  51:       const museumsZh = splitGroup(city.museumZh);
  52:       const museumsEn = splitGroup(city.museum);
  53:       const museumPairs = Math.max(museumsZh.length, museumsEn.length);
  54:       for (let i = 0; i < museumPairs; i++) {
  55:         const zh = museumsZh[i] ?? museumsEn[i] ?? "";
  56:         const en = museumsEn[i] ?? museumsZh[i] ?? "";
  57:         if (!zh && !en) continue;
  58:         push({
  59:           zh,
  60:           en,
  61:           type: "museum",
  62:           provinceId: province.id,
  63:           cityId: city.id,
  64:           aliases: [zh, en].filter(Boolean)
  65:         });
  66:       }
  67: 
  68:       city.sites.forEach((siteEn, index) => {
  69:         const siteZh = city.sitesZh[index] ?? siteEn;
  70:         push({
  71:           zh: siteZh,
  72:           en: siteEn,
  73:           type: "site",
  74:           provinceId: province.id,
  75:           cityId: city.id,
  76:           aliases: [siteEn, siteZh]
  77:         });
  78:       });
  79:     });
  80:   });
  81: 
  82:   provinceHitAreas.forEach((area) => {
  83:     push({
  84:       zh: area.zh,
  85:       en: area.en,
  86:       type: "province",
  87:       provinceId: area.id,
  88:       aliases: [area.zh, area.en, area.id]
  89:     });
  90:   });
  91: 
  92:   Object.entries(provinceAttractionSeed).forEach(([provinceId, attractions]) => {
  93:     attractions.forEach((attraction) => {
  94:       push({
  95:         zh: attraction.zh,
  96:         en: attraction.en,
  97:         type: "site",
  98:         provinceId,
  99:         aliases: [attraction.zh, attraction.en]
 100:       });
 101:     });
 102:   });
 103: 
 104:   administrativeSearchSeed.forEach((item) => {
 105:     push({
 106:       zh: item.zh,
 107:       en: item.en,
 108:       type: item.type,
 109:       provinceId: item.provinceId,
 110:       cityId: item.cityId,
 111:       aliases: [item.zh, item.en, ...(item.aliases ?? [])]
 112:     });
 113:   });
 114: 
 115:   return records;
 116: };
 117: 
 118: const searchIndex = buildIndex();
 119: const tokenIndex = searchIndex.map((record) => ({
 120:   record,
 121:   tokens: [record.zh, record.en, ...record.aliases].map(normalize).filter(Boolean)
 122: }));
 123: 
 124: export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 125: 
 126: export const findBestMatch = (query: string): SearchRecord | null => {
 127:   const target = normalize(query);
 128:   if (!target) return null;
 129: 
 130:   let best: { record: SearchRecord; score: number } | null = null;
 131:   for (const { record, tokens } of tokenIndex) {
 132:     let score = 0;
 133:     if (tokens.some((token) => token === target)) score = 3;
 134:     else if (tokens.some((token) => token.startsWith(target))) score = 2;
 135:     else if (tokens.some((token) => token.includes(target) || target.includes(token))) score = 1;
 136:     if (score > 0 && (!best || score > best.score)) {
 137:       best = { record, score };
 138:       if (score === 3) break;
 139:     }
 140:   }
 141:   return best?.record ?? null;
 142: };

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\lib\search.ts
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..910f501d0308520ddc1b239133bd34ac2b77d963
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;

diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..910f501d0308520ddc1b239133bd34ac2b77d963
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;

2026-05-12T03:44:47.286262Z ERROR codex_core::tools::router: error=apply_patch verification failed: Failed to find expected lines in c:\Users\h\Documents\New project 2\v2\src\lib\search.ts:
export type SearchRecord = {
  zh: string;
  en: string;
  type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
  provinceId: string;
  cityId?: string;
  aliases: string[];
};

const NORMALIZE_PATTERN = /[路,锛屻€?\s/'鈥?]+/g;
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..910f501d0308520ddc1b239133bd34ac2b77d963
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=1; Get-Content -Path '"'src/lib/search.ts' | Select-Object -First 35 | ForEach-Object { '{0,4}: {1}' -f "'$i, $_; $i++ }' in c:\Users\h\Documents\New project 2\v2
 succeeded in 418ms:
   1: import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
   2: import { cityAttractions } from "../data/city-attractions";
   3: import {
   4:   onlineEntryCard,
   5:   phase1TransitPorts,
   6:   transitPolicy,
   7:   transitVisaFreeCountries,
   8:   unilateralPolicy,
   9:   unilateralVisaFreeCountries
  10: } from "../data/entry-policies";
  11: import { provinceHitAreas } from "../data/map-sources";
  12: import { practicalPayments } from "../data/practical-payments";
  13: import { pitfalls } from "../data/practical-other";
  14: import { phraseCategories } from "../data/phrasebook";
  15: import { topQuestions } from "../data/top-questions";
  16: import type { CityId } from "../data/transport";
  17: 
  18: export type SearchRecord = {
  19:   zh: string;
  20:   en: string;
  21:   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
  22:   provinceId: string;
  23:   cityId?: string;
  24:   aliases: string[];
  25: };
  26: 
  27: const NORMALIZE_PATTERN = /[路,锛屻€?\s/'鈥?]+/g;
  28: 
  29: const normalize = (value: string): string =>
  30:   value.toLowerCase().replace(NORMALIZE_PATTERN, "").trim();
  31: 
  32: const splitGroup = (value: string | undefined): string[] =>
  33:   (value ?? "").split("/").map((s) => s.trim()).filter(Boolean);
  34: 
  35: const buildIndex = (): readonly SearchRecord[] => {

diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..910f501d0308520ddc1b239133bd34ac2b77d963
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\lib\search.ts
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..53cfb831641f23449e6a5652d964d46775f12b8f
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 

diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..53cfb831641f23449e6a5652d964d46775f12b8f
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\lib\search.ts
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};

diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};

codex
我会新增 `/search` 页面，过滤逻辑放在页面内，索引构建放在 `search.ts` 里。页面会按 `attraction/phrase/faq/pitfall/visa` 分组，空结果文案按当前语言显示。
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\pages\SearchPage.tsx
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}

diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}

codex
下一步是把入口挂上去：header 里加图标按钮，路由、预渲染和 sitemap 加 `/search`。同时我会给景点列表项补 `id`，让搜索结果锚点可达。
2026-05-12T03:46:52.624885Z ERROR codex_core::tools::router: error=apply_patch verification failed: Failed to find expected lines in c:\Users\h\Documents\New project 2\v2\src\components\layout\SiteHeader.tsx:
import { Link } from "react-router";
import LanguageSwitch from "./LanguageSwitch";
import { useLang } from "../../store/language";

export default function SiteHeader() {
  const { lang } = useLang();
  const isZh = lang === "zh";
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=1; Get-Content -Path '"'src/components/layout/SiteHeader.tsx' | ForEach-Object { '{0,4}: {1}' -f "'$i, $_; $i++ }' in c:\Users\h\Documents\New project 2\v2
 succeeded in 394ms:
   1: import { Link } from "react-router";
   2: import LanguageSwitch from "./LanguageSwitch";
   3: import ThemeSwitch from "./ThemeSwitch";
   4: import { useLang } from "../../store/language";
   5: 
   6: export default function SiteHeader() {
   7:   const { lang } = useLang();
   8:   const isZh = lang === "zh";
   9: 
  10:   return (
  11:     <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
  12:       <Link to="/" className="flex min-w-0 shrink items-center gap-2">
  13:         <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">鏃?/span>
  14:         <strong className="truncate text-xl font-bold leading-none">鏃呰涓浗</strong>
  15:       </Link>
  16:       <div className="flex shrink-0 items-center gap-2 sm:gap-3">
  17:         <nav aria-label={isZh ? "涓诲鑸? : "Main navigation"}>
  18:           <Link
  19:             to="/phrasebook"
  20:             className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted transition hover:border-jade hover:text-jade"
  21:           >
  22:             {isZh ? "搴旀€ョ煭璇? : "Phrases"}
  23:           </Link>
  24:         </nav>
  25:         <ThemeSwitch />
  26:         <LanguageSwitch />
  27:       </div>
  28:     </header>
  29:   );
  30: }

diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\layout\SiteHeader.tsx
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..dafed699721b6565eabd9a2a54dd90588ca2f522
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,4 +1,4 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}

diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..dafed699721b6565eabd9a2a54dd90588ca2f522
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,4 +1,4 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\layout\SiteHeader.tsx
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..8ea4a454fe39a179177c28cc63c46b01ff6b7b58
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,10 +1,11 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
 
 export default function SiteHeader() {
   const { lang } = useLang();
+  const navigate = useNavigate();
   const isZh = lang === "zh";
 
   return (
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}

diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..8ea4a454fe39a179177c28cc63c46b01ff6b7b58
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,10 +1,11 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
 
 export default function SiteHeader() {
   const { lang } = useLang();
+  const navigate = useNavigate();
   const isZh = lang === "zh";
 
   return (
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}

2026-05-12T03:47:21.117082Z ERROR codex_core::tools::router: error=apply_patch verification failed: Failed to find expected lines in c:\Users\h\Documents\New project 2\v2\src\components\layout\SiteHeader.tsx:
      </Link>
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <nav aria-label={isZh ? "涓诲鑸? : "Main navigation"}>
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..8ea4a454fe39a179177c28cc63c46b01ff6b7b58
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,10 +1,11 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
 
 export default function SiteHeader() {
   const { lang } = useLang();
+  const navigate = useNavigate();
   const isZh = lang === "zh";
 
   return (
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\layout\SiteHeader.tsx
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,10 +1,11 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
 
 export default function SiteHeader() {
   const { lang } = useLang();
+  const navigate = useNavigate();
   const isZh = lang === "zh";
 
   return (
@@ -14,6 +15,17 @@
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
       <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}

diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,10 +1,11 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
 
 export default function SiteHeader() {
   const { lang } = useLang();
+  const navigate = useNavigate();
   const isZh = lang === "zh";
 
   return (
@@ -14,6 +15,17 @@
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
       <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\routes.ts
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,10 +1,11 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
 
 export default function SiteHeader() {
   const { lang } = useLang();
+  const navigate = useNavigate();
   const isZh = lang === "zh";
 
   return (
@@ -14,6 +15,17 @@
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
       <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index 72665b74751f0c4660717cb649943229e26f621f..0ceb29d58c9bc643092486d4f26521e4bb8b583e
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -7,8 +7,9 @@
   route("guide/:topic", "./pages/GuidePage.tsx"),
   route("plan", "./pages/PlanPage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
-  route("share", "./pages/SharePage.tsx"),
-  route("ask", "./pages/AskPage.tsx"),
-  route("sources", "./pages/SourcesPage.tsx"),
-  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
-] satisfies RouteConfig;
+  route("share", "./pages/SharePage.tsx"),
+  route("ask", "./pages/AskPage.tsx"),
+  route("sources", "./pages/SourcesPage.tsx"),
+  route("search", "./pages/SearchPage.tsx"),
+  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
+] satisfies RouteConfig;

diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,10 +1,11 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
 
 export default function SiteHeader() {
   const { lang } = useLang();
+  const navigate = useNavigate();
   const isZh = lang === "zh";
 
   return (
@@ -14,6 +15,17 @@
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
       <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index 72665b74751f0c4660717cb649943229e26f621f..0ceb29d58c9bc643092486d4f26521e4bb8b583e
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -7,8 +7,9 @@
   route("guide/:topic", "./pages/GuidePage.tsx"),
   route("plan", "./pages/PlanPage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
-  route("share", "./pages/SharePage.tsx"),
-  route("ask", "./pages/AskPage.tsx"),
-  route("sources", "./pages/SourcesPage.tsx"),
-  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
-] satisfies RouteConfig;
+  route("share", "./pages/SharePage.tsx"),
+  route("ask", "./pages/AskPage.tsx"),
+  route("sources", "./pages/SourcesPage.tsx"),
+  route("search", "./pages/SearchPage.tsx"),
+  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
+] satisfies RouteConfig;

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\react-router.config.ts
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 9ccc216dce515307f4c067703ced3257a98dc3db..a3f9acb6d109cdfac1c8f9b18136c21c5ffeb559
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -15,6 +15,7 @@
       "/share",
       "/ask",
       "/sources",
+      "/search",
       "/city/beijing",
       "/city/shanghai",
       "/city/guangzhou",
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,10 +1,11 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
 
 export default function SiteHeader() {
   const { lang } = useLang();
+  const navigate = useNavigate();
   const isZh = lang === "zh";
 
   return (
@@ -14,6 +15,17 @@
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
       <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index 72665b74751f0c4660717cb649943229e26f621f..0ceb29d58c9bc643092486d4f26521e4bb8b583e
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -7,8 +7,9 @@
   route("guide/:topic", "./pages/GuidePage.tsx"),
   route("plan", "./pages/PlanPage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
-  route("share", "./pages/SharePage.tsx"),
-  route("ask", "./pages/AskPage.tsx"),
-  route("sources", "./pages/SourcesPage.tsx"),
-  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
-] satisfies RouteConfig;
+  route("share", "./pages/SharePage.tsx"),
+  route("ask", "./pages/AskPage.tsx"),
+  route("sources", "./pages/SourcesPage.tsx"),
+  route("search", "./pages/SearchPage.tsx"),
+  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
+] satisfies RouteConfig;

diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 9ccc216dce515307f4c067703ced3257a98dc3db..a3f9acb6d109cdfac1c8f9b18136c21c5ffeb559
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -15,6 +15,7 @@
       "/share",
       "/ask",
       "/sources",
+      "/search",
       "/city/beijing",
       "/city/shanghai",
       "/city/guangzhou",
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,10 +1,11 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
 
 export default function SiteHeader() {
   const { lang } = useLang();
+  const navigate = useNavigate();
   const isZh = lang === "zh";
 
   return (
@@ -14,6 +15,17 @@
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
       <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index 72665b74751f0c4660717cb649943229e26f621f..0ceb29d58c9bc643092486d4f26521e4bb8b583e
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -7,8 +7,9 @@
   route("guide/:topic", "./pages/GuidePage.tsx"),
   route("plan", "./pages/PlanPage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
-  route("share", "./pages/SharePage.tsx"),
-  route("ask", "./pages/AskPage.tsx"),
-  route("sources", "./pages/SourcesPage.tsx"),
-  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
-] satisfies RouteConfig;
+  route("share", "./pages/SharePage.tsx"),
+  route("ask", "./pages/AskPage.tsx"),
+  route("sources", "./pages/SourcesPage.tsx"),
+  route("search", "./pages/SearchPage.tsx"),
+  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
+] satisfies RouteConfig;

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\public\sitemap.xml
diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 01ba965ae5de7e27b97c51317ba2afce181c984c..44dc42b94093f0ee98c72ee24a7161613970ae71
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -41,6 +41,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/search</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/city/beijing</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 9ccc216dce515307f4c067703ced3257a98dc3db..a3f9acb6d109cdfac1c8f9b18136c21c5ffeb559
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -15,6 +15,7 @@
       "/share",
       "/ask",
       "/sources",
+      "/search",
       "/city/beijing",
       "/city/shanghai",
       "/city/guangzhou",
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,10 +1,11 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
 
 export default function SiteHeader() {
   const { lang } = useLang();
+  const navigate = useNavigate();
   const isZh = lang === "zh";
 
   return (
@@ -14,6 +15,17 @@
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
       <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index 72665b74751f0c4660717cb649943229e26f621f..0ceb29d58c9bc643092486d4f26521e4bb8b583e
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -7,8 +7,9 @@
   route("guide/:topic", "./pages/GuidePage.tsx"),
   route("plan", "./pages/PlanPage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
-  route("share", "./pages/SharePage.tsx"),
-  route("ask", "./pages/AskPage.tsx"),
-  route("sources", "./pages/SourcesPage.tsx"),
-  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
-] satisfies RouteConfig;
+  route("share", "./pages/SharePage.tsx"),
+  route("ask", "./pages/AskPage.tsx"),
+  route("sources", "./pages/SourcesPage.tsx"),
+  route("search", "./pages/SearchPage.tsx"),
+  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
+] satisfies RouteConfig;

diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 01ba965ae5de7e27b97c51317ba2afce181c984c..44dc42b94093f0ee98c72ee24a7161613970ae71
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -41,6 +41,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/search</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/city/beijing</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 9ccc216dce515307f4c067703ced3257a98dc3db..a3f9acb6d109cdfac1c8f9b18136c21c5ffeb559
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -15,6 +15,7 @@
       "/share",
       "/ask",
       "/sources",
+      "/search",
       "/city/beijing",
       "/city/shanghai",
       "/city/guangzhou",
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,10 +1,11 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
 
 export default function SiteHeader() {
   const { lang } = useLang();
+  const navigate = useNavigate();
   const isZh = lang === "zh";
 
   return (
@@ -14,6 +15,17 @@
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
       <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index 72665b74751f0c4660717cb649943229e26f621f..0ceb29d58c9bc643092486d4f26521e4bb8b583e
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -7,8 +7,9 @@
   route("guide/:topic", "./pages/GuidePage.tsx"),
   route("plan", "./pages/PlanPage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
-  route("share", "./pages/SharePage.tsx"),
-  route("ask", "./pages/AskPage.tsx"),
-  route("sources", "./pages/SourcesPage.tsx"),
-  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
-] satisfies RouteConfig;
+  route("share", "./pages/SharePage.tsx"),
+  route("ask", "./pages/AskPage.tsx"),
+  route("sources", "./pages/SourcesPage.tsx"),
+  route("search", "./pages/SearchPage.tsx"),
+  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
+] satisfies RouteConfig;

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\city\CityIntro.tsx
diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 01ba965ae5de7e27b97c51317ba2afce181c984c..44dc42b94093f0ee98c72ee24a7161613970ae71
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -41,6 +41,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/search</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/city/beijing</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 9ccc216dce515307f4c067703ced3257a98dc3db..a3f9acb6d109cdfac1c8f9b18136c21c5ffeb559
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -15,6 +15,7 @@
       "/share",
       "/ask",
       "/sources",
+      "/search",
       "/city/beijing",
       "/city/shanghai",
       "/city/guangzhou",
diff --git a/v2/src/components/city/CityIntro.tsx b/v2/src/components/city/CityIntro.tsx
index 43af15c8e7e403d2a6ba554106a91a3d38fcc666..d2e670c147eccdcdc1fda020853e46529eda15f9
--- a/v2/src/components/city/CityIntro.tsx
+++ b/v2/src/components/city/CityIntro.tsx
@@ -126,7 +126,7 @@
 
         <ul className="grid gap-3 sm:grid-cols-2">
           {visible.map((a) => (
-            <li key={a.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
+            <li id={a.id} key={a.id} className="scroll-mt-24 flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
               <div className="flex items-center justify-between gap-2">
                 <span
                   className={clsx(
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,10 +1,11 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
 
 export default function SiteHeader() {
   const { lang } = useLang();
+  const navigate = useNavigate();
   const isZh = lang === "zh";
 
   return (
@@ -14,6 +15,17 @@
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
       <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index 72665b74751f0c4660717cb649943229e26f621f..0ceb29d58c9bc643092486d4f26521e4bb8b583e
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -7,8 +7,9 @@
   route("guide/:topic", "./pages/GuidePage.tsx"),
   route("plan", "./pages/PlanPage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
-  route("share", "./pages/SharePage.tsx"),
-  route("ask", "./pages/AskPage.tsx"),
-  route("sources", "./pages/SourcesPage.tsx"),
-  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
-] satisfies RouteConfig;
+  route("share", "./pages/SharePage.tsx"),
+  route("ask", "./pages/AskPage.tsx"),
+  route("sources", "./pages/SourcesPage.tsx"),
+  route("search", "./pages/SearchPage.tsx"),
+  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
+] satisfies RouteConfig;

diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 01ba965ae5de7e27b97c51317ba2afce181c984c..44dc42b94093f0ee98c72ee24a7161613970ae71
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -41,6 +41,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/search</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/city/beijing</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 9ccc216dce515307f4c067703ced3257a98dc3db..a3f9acb6d109cdfac1c8f9b18136c21c5ffeb559
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -15,6 +15,7 @@
       "/share",
       "/ask",
       "/sources",
+      "/search",
       "/city/beijing",
       "/city/shanghai",
       "/city/guangzhou",
diff --git a/v2/src/components/city/CityIntro.tsx b/v2/src/components/city/CityIntro.tsx
index 43af15c8e7e403d2a6ba554106a91a3d38fcc666..d2e670c147eccdcdc1fda020853e46529eda15f9
--- a/v2/src/components/city/CityIntro.tsx
+++ b/v2/src/components/city/CityIntro.tsx
@@ -126,7 +126,7 @@
 
         <ul className="grid gap-3 sm:grid-cols-2">
           {visible.map((a) => (
-            <li key={a.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
+            <li id={a.id} key={a.id} className="scroll-mt-24 flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
               <div className="flex items-center justify-between gap-2">
                 <span
                   className={clsx(
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,10 +1,11 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
 
 export default function SiteHeader() {
   const { lang } = useLang();
+  const navigate = useNavigate();
   const isZh = lang === "zh";
 
   return (
@@ -14,6 +15,17 @@
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
       <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index 72665b74751f0c4660717cb649943229e26f621f..0ceb29d58c9bc643092486d4f26521e4bb8b583e
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -7,8 +7,9 @@
   route("guide/:topic", "./pages/GuidePage.tsx"),
   route("plan", "./pages/PlanPage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
-  route("share", "./pages/SharePage.tsx"),
-  route("ask", "./pages/AskPage.tsx"),
-  route("sources", "./pages/SourcesPage.tsx"),
-  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
-] satisfies RouteConfig;
+  route("share", "./pages/SharePage.tsx"),
+  route("ask", "./pages/AskPage.tsx"),
+  route("sources", "./pages/SourcesPage.tsx"),
+  route("search", "./pages/SearchPage.tsx"),
+  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
+] satisfies RouteConfig;

codex
代码入口已挂好，现在开始编译检查。先跑 `npx tsc --noEmit`，如果类型或严格检查报错，我会直接修到通过再跑 build。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
 succeeded in 2502ms:
diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 01ba965ae5de7e27b97c51317ba2afce181c984c..44dc42b94093f0ee98c72ee24a7161613970ae71
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -41,6 +41,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/search</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/city/beijing</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 9ccc216dce515307f4c067703ced3257a98dc3db..a3f9acb6d109cdfac1c8f9b18136c21c5ffeb559
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -15,6 +15,7 @@
       "/share",
       "/ask",
       "/sources",
+      "/search",
       "/city/beijing",
       "/city/shanghai",
       "/city/guangzhou",
diff --git a/v2/src/components/city/CityIntro.tsx b/v2/src/components/city/CityIntro.tsx
index 43af15c8e7e403d2a6ba554106a91a3d38fcc666..d2e670c147eccdcdc1fda020853e46529eda15f9
--- a/v2/src/components/city/CityIntro.tsx
+++ b/v2/src/components/city/CityIntro.tsx
@@ -126,7 +126,7 @@
 
         <ul className="grid gap-3 sm:grid-cols-2">
           {visible.map((a) => (
-            <li key={a.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
+            <li id={a.id} key={a.id} className="scroll-mt-24 flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
               <div className="flex items-center justify-between gap-2">
                 <span
                   className={clsx(
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,10 +1,11 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
 
 export default function SiteHeader() {
   const { lang } = useLang();
+  const navigate = useNavigate();
   const isZh = lang === "zh";
 
   return (
@@ -14,6 +15,17 @@
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
       <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index 72665b74751f0c4660717cb649943229e26f621f..0ceb29d58c9bc643092486d4f26521e4bb8b583e
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -7,8 +7,9 @@
   route("guide/:topic", "./pages/GuidePage.tsx"),
   route("plan", "./pages/PlanPage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
-  route("share", "./pages/SharePage.tsx"),
-  route("ask", "./pages/AskPage.tsx"),
-  route("sources", "./pages/SourcesPage.tsx"),
-  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
-] satisfies RouteConfig;
+  route("share", "./pages/SharePage.tsx"),
+  route("ask", "./pages/AskPage.tsx"),
+  route("sources", "./pages/SourcesPage.tsx"),
+  route("search", "./pages/SearchPage.tsx"),
+  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
+] satisfies RouteConfig;

codex
`tsc` 已经 0 error。接着跑生产构建，确认新增预渲染的 `/search` 也能过。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 9002ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1523 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                        9.02 kB │ gzip:     1.29 kB
build/client/assets/Map3D-B9DDZdqH.css                 24.01 kB │ gzip:     5.37 kB
build/client/assets/root-C4Bu-uVb.css                  47.93 kB │ gzip:     8.95 kB
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
build/client/assets/HomePage-B9yk0XgR.js                6.45 kB │ gzip:     2.99 kB
build/client/assets/SharePage-DJ9TGXew.js               7.48 kB │ gzip:     2.76 kB
build/client/assets/phase2-preview-CWgs3Arj.js          7.59 kB │ gzip:     4.48 kB
build/client/assets/AskPage-CMD5cqe5.js                 7.62 kB │ gzip:     2.92 kB
build/client/assets/Map3D-BpEgQd-5.js                   8.99 kB │ gzip:     4.24 kB
build/client/assets/SearchPage-Dj4ngdji.js              9.85 kB │ gzip:     4.00 kB
build/client/assets/GuidePage-BJx87zKE.js              10.07 kB │ gzip:     4.19 kB
build/client/assets/transport-CjuPjS0n.js              12.28 kB │ gzip:     5.22 kB
build/client/assets/MapPage-BeUZ-D7w.js                13.74 kB │ gzip:     5.03 kB
build/client/assets/root-a_1ieU45.js                   15.39 kB │ gzip:     6.24 kB
build/client/assets/PlanPage-DYb5KIam.js               16.91 kB │ gzip:     7.79 kB
build/client/assets/practical-payments-D1zcs8_G.js     17.98 kB │ gzip:     7.99 kB
build/client/assets/SourcesNote-DUOPfzUr.js            21.29 kB │ gzip:     7.80 kB
build/client/assets/practical-other-DXfJJBXn.js        22.32 kB │ gzip:    10.77 kB
build/client/assets/city-attractions-XIUiV-zh.js       22.58 kB │ gzip:    10.40 kB
build/client/assets/map-sources-BrTAkd__.js            23.89 kB │ gzip:     9.43 kB
build/client/assets/SourcesPage-CvLu1hb6.js            35.81 kB │ gzip:     9.32 kB
build/client/assets/CityPage-BtDGJCVS.js               67.47 kB │ gzip:    25.08 kB
build/client/assets/jsx-runtime-BmUxdvRO.js           128.03 kB │ gzip:    42.26 kB
build/client/assets/entry.client-C099IiRD.js          183.09 kB │ gzip:    58.04 kB
build/client/assets/Cesium-BGlUpx9Q.js              4,724.63 kB │ gzip: 1,304.40 kB

[32m✓ built in 5.10s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 83 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m
[2mbuild\server\assets\server-build-C4Bu-uVb.css[22m

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
build/server/assets/server-build-C4Bu-uVb.css   47.93 kB │ gzip:   8.95 kB
build/server/assets/Map3D-DfQq251r.js           15.47 kB │ gzip:   5.32 kB
build/server/assets/cityRoutes-CzeiLO87.js      33.98 kB │ gzip:  11.23 kB
build/server/index.js                          409.88 kB │ gzip: 126.31 kB

[32m✓ built in 1.03s[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:dot-server (38%)
  - react-router:virtual-modules (36%)
  - react-router:inject-hmr-runtime (17%)
  - react-router:hmr-runtime (5%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 01ba965ae5de7e27b97c51317ba2afce181c984c..44dc42b94093f0ee98c72ee24a7161613970ae71
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -41,6 +41,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/search</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/city/beijing</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 9ccc216dce515307f4c067703ced3257a98dc3db..a3f9acb6d109cdfac1c8f9b18136c21c5ffeb559
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -15,6 +15,7 @@
       "/share",
       "/ask",
       "/sources",
+      "/search",
       "/city/beijing",
       "/city/shanghai",
       "/city/guangzhou",
diff --git a/v2/src/components/city/CityIntro.tsx b/v2/src/components/city/CityIntro.tsx
index 43af15c8e7e403d2a6ba554106a91a3d38fcc666..d2e670c147eccdcdc1fda020853e46529eda15f9
--- a/v2/src/components/city/CityIntro.tsx
+++ b/v2/src/components/city/CityIntro.tsx
@@ -126,7 +126,7 @@
 
         <ul className="grid gap-3 sm:grid-cols-2">
           {visible.map((a) => (
-            <li key={a.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
+            <li id={a.id} key={a.id} className="scroll-mt-24 flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
               <div className="flex items-center justify-between gap-2">
                 <span
                   className={clsx(
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,10 +1,11 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
 
 export default function SiteHeader() {
   const { lang } = useLang();
+  const navigate = useNavigate();
   const isZh = lang === "zh";
 
   return (
@@ -14,6 +15,17 @@
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
       <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index 72665b74751f0c4660717cb649943229e26f621f..0ceb29d58c9bc643092486d4f26521e4bb8b583e
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -7,8 +7,9 @@
   route("guide/:topic", "./pages/GuidePage.tsx"),
   route("plan", "./pages/PlanPage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
-  route("share", "./pages/SharePage.tsx"),
-  route("ask", "./pages/AskPage.tsx"),
-  route("sources", "./pages/SourcesPage.tsx"),
-  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
-] satisfies RouteConfig;
+  route("share", "./pages/SharePage.tsx"),
+  route("ask", "./pages/AskPage.tsx"),
+  route("sources", "./pages/SourcesPage.tsx"),
+  route("search", "./pages/SearchPage.tsx"),
+  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
+] satisfies RouteConfig;

codex
构建也通过了，`/search` 已被 prerender。最后我会用 Vite 的 SSR loader 直接调用 `buildSearchIndex()` 算一次索引总数，并快速看一下变更清单。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "node --input-type=module -e \"import { createServer } from 'vite'; const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' }); try { const mod = await server.ssrLoadModule('/src/lib/search.ts'); console.log(mod.buildSearchIndex().length); } finally { await server.close(); }\"" in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git diff -- src/lib/search.ts src/pages/SearchPage.tsx src/components/layout/SiteHeader.tsx src/components/city/CityIntro.tsx src/routes.ts react-router.config.ts public/sitemap.xml' in c:\Users\h\Documents\New project 2\v2
 succeeded in 698ms:
 M public/sitemap.xml
 M react-router.config.ts
 M src/components/city/CityIntro.tsx
 M src/components/layout/LanguageSwitch.tsx
 M src/components/layout/SiteHeader.tsx
 M src/lib/search.ts
 M src/pages/CityPage.tsx
 M src/pages/GuidePage.tsx
 M src/pages/HomePage.tsx
 M src/pages/PhrasebookPage.tsx
 M src/root.tsx
 M src/routes.ts
 M src/styles/globals.css
?? ../.omc/artifacts/ask/codex-v2-workdir-edit-build-currency-converter-1-v2-src-components-2026-05-12T03-44-03-003Z.md
?? src/components/layout/ThemeSwitch.tsx
?? src/components/tools/
?? src/data/exchange-rates.ts
?? src/pages/SearchPage.tsx
?? src/store/ThemeProvider.tsx

 succeeded in 734ms:
diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 01ba965..44dc42b 100644
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -40,6 +40,10 @@
     <loc>https://travel-china.example.com/sources</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
+  <url>
+    <loc>https://travel-china.example.com/search</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
   <url>
     <loc>https://travel-china.example.com/city/beijing</loc>
     <lastmod>2026-05-12</lastmod>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 9ccc216..a3f9acb 100644
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -15,6 +15,7 @@ export default {
       "/share",
       "/ask",
       "/sources",
+      "/search",
       "/city/beijing",
       "/city/shanghai",
       "/city/guangzhou",
diff --git a/v2/src/components/city/CityIntro.tsx b/v2/src/components/city/CityIntro.tsx
index 43af15c..d2e670c 100644
--- a/v2/src/components/city/CityIntro.tsx
+++ b/v2/src/components/city/CityIntro.tsx
@@ -126,7 +126,7 @@ export default function CityIntro({ cityId }: Props) {
 
         <ul className="grid gap-3 sm:grid-cols-2">
           {visible.map((a) => (
-            <li key={a.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
+            <li id={a.id} key={a.id} className="scroll-mt-24 flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
               <div className="flex items-center justify-between gap-2">
                 <span
                   className={clsx(
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 6decfa0..e53f2fb 100644
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,9 +1,11 @@
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
@@ -13,6 +15,17 @@ export default function SiteHeader() {
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
       <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3b..944f060 100644
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
 import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
 import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -10,6 +24,16 @@ export type SearchRecord = {
   aliases: string[];
 };
 
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
+
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
 const normalize = (value: string): string =>
@@ -140,3 +164,173 @@ export const findBestMatch = (query: string): SearchRecord | null => {
   }
   return best?.record ?? null;
 };
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index 72665b7..0ceb29d 100644
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -10,5 +10,6 @@ export default [
   route("share", "./pages/SharePage.tsx"),
   route("ask", "./pages/AskPage.tsx"),
   route("sources", "./pages/SourcesPage.tsx"),
+  route("search", "./pages/SearchPage.tsx"),
   route("*", "./pages/HomePage.tsx", { id: "catch-all" })
 ] satisfies RouteConfig;
warning: in the working copy of 'v2/public/sitemap.xml', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/react-router.config.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/city/CityIntro.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/layout/SiteHeader.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/lib/search.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/routes.ts', LF will be replaced by CRLF the next time Git touches it

 succeeded in 3275ms:
[2m11:48:37[22m [36m[1m[vite][22m[39m [90m[2m(client)[22m[39m Re-optimizing dependencies because vite config has changed
207

diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 01ba965ae5de7e27b97c51317ba2afce181c984c..44dc42b94093f0ee98c72ee24a7161613970ae71
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -41,6 +41,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/search</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/city/beijing</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 9ccc216dce515307f4c067703ced3257a98dc3db..a3f9acb6d109cdfac1c8f9b18136c21c5ffeb559
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -15,6 +15,7 @@
       "/share",
       "/ask",
       "/sources",
+      "/search",
       "/city/beijing",
       "/city/shanghai",
       "/city/guangzhou",
diff --git a/v2/src/components/city/CityIntro.tsx b/v2/src/components/city/CityIntro.tsx
index 43af15c8e7e403d2a6ba554106a91a3d38fcc666..d2e670c147eccdcdc1fda020853e46529eda15f9
--- a/v2/src/components/city/CityIntro.tsx
+++ b/v2/src/components/city/CityIntro.tsx
@@ -126,7 +126,7 @@
 
         <ul className="grid gap-3 sm:grid-cols-2">
           {visible.map((a) => (
-            <li key={a.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
+            <li id={a.id} key={a.id} className="scroll-mt-24 flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
               <div className="flex items-center justify-between gap-2">
                 <span
                   className={clsx(
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..e53f2fba33a5132eb678f0dcce2bb5a8e7b612ba
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,10 +1,11 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
 import { useLang } from "../../store/language";
 
 export default function SiteHeader() {
   const { lang } = useLang();
+  const navigate = useNavigate();
   const isZh = lang === "zh";
 
   return (
@@ -14,6 +15,17 @@
         <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
       </Link>
       <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index 72665b74751f0c4660717cb649943229e26f621f..0ceb29d58c9bc643092486d4f26521e4bb8b583e
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -7,8 +7,9 @@
   route("guide/:topic", "./pages/GuidePage.tsx"),
   route("plan", "./pages/PlanPage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
-  route("share", "./pages/SharePage.tsx"),
-  route("ask", "./pages/AskPage.tsx"),
-  route("sources", "./pages/SourcesPage.tsx"),
-  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
-] satisfies RouteConfig;
+  route("share", "./pages/SharePage.tsx"),
+  route("ask", "./pages/AskPage.tsx"),
+  route("sources", "./pages/SourcesPage.tsx"),
+  route("search", "./pages/SearchPage.tsx"),
+  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
+] satisfies RouteConfig;

codex
完成。

Index entry 总数：207。

改动文件：`src/lib/search.ts`、`src/pages/SearchPage.tsx`、`src/components/layout/SiteHeader.tsx`、`src/routes.ts`、`react-router.config.ts`、`public/sitemap.xml`、`src/components/city/CityIntro.tsx`。

验证：`npx tsc --noEmit` 0 error；`npm run build` 0 error，`/search` 已 prerender。
diff --git a/v2/public/sitemap.xml b/v2/public/sitemap.xml
index 01ba965ae5de7e27b97c51317ba2afce181c984c..44dc42b94093f0ee98c72ee24a7161613970ae71
--- a/v2/public/sitemap.xml
+++ b/v2/public/sitemap.xml
@@ -41,6 +41,10 @@
     <lastmod>2026-05-12</lastmod>
   </url>
   <url>
+    <loc>https://travel-china.example.com/search</loc>
+    <lastmod>2026-05-12</lastmod>
+  </url>
+  <url>
     <loc>https://travel-china.example.com/city/beijing</loc>
     <lastmod>2026-05-12</lastmod>
   </url>
diff --git a/v2/react-router.config.ts b/v2/react-router.config.ts
index 9ccc216dce515307f4c067703ced3257a98dc3db..a3f9acb6d109cdfac1c8f9b18136c21c5ffeb559
--- a/v2/react-router.config.ts
+++ b/v2/react-router.config.ts
@@ -15,6 +15,7 @@
       "/share",
       "/ask",
       "/sources",
+      "/search",
       "/city/beijing",
       "/city/shanghai",
       "/city/guangzhou",
diff --git a/v2/src/components/city/CityIntro.tsx b/v2/src/components/city/CityIntro.tsx
index 43af15c8e7e403d2a6ba554106a91a3d38fcc666..d2e670c147eccdcdc1fda020853e46529eda15f9
--- a/v2/src/components/city/CityIntro.tsx
+++ b/v2/src/components/city/CityIntro.tsx
@@ -126,7 +126,7 @@
 
         <ul className="grid gap-3 sm:grid-cols-2">
           {visible.map((a) => (
-            <li key={a.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
+            <li id={a.id} key={a.id} className="scroll-mt-24 flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
               <div className="flex items-center justify-between gap-2">
                 <span
                   className={clsx(
diff --git a/v2/src/components/layout/SiteHeader.tsx b/v2/src/components/layout/SiteHeader.tsx
index 5b9d357508d0bdef1e3155b7e8138a7a38c6e410..f4da6381c6a95f47217722314ed6155d4a86ddb6
--- a/v2/src/components/layout/SiteHeader.tsx
+++ b/v2/src/components/layout/SiteHeader.tsx
@@ -1,19 +1,31 @@
-import { Link } from "react-router";
+import { Link, useNavigate } from "react-router";
 import LanguageSwitch from "./LanguageSwitch";
 import ThemeSwitch from "./ThemeSwitch";
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
       <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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
diff --git a/v2/src/lib/search.ts b/v2/src/lib/search.ts
index 3d0eb3bd67dc0a3321bce5da2bb29d203c75e3f6..944f0608d4d47827d2ca25b66d469f3d515f393b
--- a/v2/src/lib/search.ts
+++ b/v2/src/lib/search.ts
@@ -1,5 +1,19 @@
-import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
-import { provinceHitAreas } from "../data/map-sources";
+import { atlasData, administrativeSearchSeed, provinceAttractionSeed } from "../data/atlas";
+import { cityAttractions } from "../data/city-attractions";
+import {
+  onlineEntryCard,
+  phase1TransitPorts,
+  transitPolicy,
+  transitVisaFreeCountries,
+  unilateralPolicy,
+  unilateralVisaFreeCountries
+} from "../data/entry-policies";
+import { provinceHitAreas } from "../data/map-sources";
+import { practicalPayments } from "../data/practical-payments";
+import { pitfalls } from "../data/practical-other";
+import { phraseCategories } from "../data/phrasebook";
+import { topQuestions } from "../data/top-questions";
+import type { CityId } from "../data/transport";
 
 export type SearchRecord = {
   zh: string;
@@ -7,8 +21,18 @@
   type: "province" | "city" | "museum" | "site" | "county" | "town" | "village";
   provinceId: string;
   cityId?: string;
-  aliases: string[];
-};
+  aliases: string[];
+};
+
+export type SearchIndexEntry = {
+  id: string;
+  type: "attraction" | "phrase" | "faq" | "pitfall" | "visa";
+  titleEn: string;
+  titleZh: string;
+  snippetEn: string;
+  snippetZh: string;
+  href: string;
+};
 
 const NORMALIZE_PATTERN = /[·,，。.\s/'’-]+/g;
 
@@ -123,11 +147,11 @@
 
 export const getAllRecords = (): readonly SearchRecord[] => searchIndex;
 
-export const findBestMatch = (query: string): SearchRecord | null => {
-  const target = normalize(query);
-  if (!target) return null;
-
-  let best: { record: SearchRecord; score: number } | null = null;
+export const findBestMatch = (query: string): SearchRecord | null => {
+  const target = normalize(query);
+  if (!target) return null;
+
+  let best: { record: SearchRecord; score: number } | null = null;
   for (const { record, tokens } of tokenIndex) {
     let score = 0;
     if (tokens.some((token) => token === target)) score = 3;
@@ -137,6 +161,176 @@
       best = { record, score };
       if (score === 3) break;
     }
-  }
-  return best?.record ?? null;
-};
+  }
+  return best?.record ?? null;
+};
+
+const defaultCityForPitfall = (cityScope: readonly CityId[] | undefined): CityId =>
+  cityScope?.[0] ?? "beijing";
+
+export const buildSearchIndex = (): readonly SearchIndexEntry[] => {
+  const entries: SearchIndexEntry[] = [];
+  const seen = new Set<string>();
+
+  const push = (entry: SearchIndexEntry) => {
+    const key = `${entry.type}|${entry.id}`;
+    if (seen.has(key)) return;
+    seen.add(key);
+    entries.push(entry);
+  };
+
+  cityAttractions.forEach((attraction) => {
+    push({
+      id: `attraction-${attraction.id}`,
+      type: "attraction",
+      titleEn: attraction.nameEn,
+      titleZh: attraction.nameZh,
+      snippetEn: `${attraction.districtEn}. ${attraction.whyEn}`,
+      snippetZh: `${attraction.districtZh}。${attraction.whyZh}`,
+      href: `/city/${attraction.cityId}#${attraction.id}`
+    });
+  });
+
+  phraseCategories.forEach((category) => {
+    category.phrases.forEach((phrase, index) => {
+      push({
+        id: `phrase-${category.key}-${index}`,
+        type: "phrase",
+        titleEn: phrase.en,
+        titleZh: phrase.zh,
+        snippetEn: `${category.titleEn}. Pinyin: ${phrase.pinyin}`,
+        snippetZh: `${category.titleZh}。拼音：${phrase.pinyin}`,
+        href: "/phrasebook"
+      });
+    });
+  });
+
+  topQuestions.forEach((question) => {
+    push({
+      id: `faq-${question.id}`,
+      type: "faq",
+      titleEn: question.questionEn,
+      titleZh: question.questionZh,
+      snippetEn: question.answerEn,
+      snippetZh: question.answerZh,
+      href: "/guide/notes#top-questions"
+    });
+  });
+
+  practicalPayments.forEach((pitfall) => {
+    push({
+      id: `pitfall-payment-${pitfall.id}`,
+      type: "pitfall",
+      titleEn: pitfall.titleEn,
+      titleZh: pitfall.titleZh,
+      snippetEn: pitfall.bodyEn,
+      snippetZh: pitfall.bodyZh,
+      href: "/guide/payments#payments"
+    });
+  });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "transport" || pitfall.pillar === "food" || pitfall.pillar === "emergency")
+    .forEach((pitfall) => {
+      const cityId = defaultCityForPitfall(pitfall.cityScope);
+      push({
+        id: `pitfall-${pitfall.pillar}-${pitfall.id}`,
+        type: "pitfall",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: `/city/${cityId}#${pitfall.pillar}`
+      });
+    });
+
+  pitfalls
+    .filter((pitfall) => pitfall.pillar === "entry")
+    .forEach((pitfall) => {
+      push({
+        id: `visa-entry-${pitfall.id}`,
+        type: "visa",
+        titleEn: pitfall.titleEn,
+        titleZh: pitfall.titleZh,
+        snippetEn: pitfall.bodyEn,
+        snippetZh: pitfall.bodyZh,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  push({
+    id: "visa-unilateral-policy",
+    type: "visa",
+    titleEn: "30-day unilateral visa-free entry",
+    titleZh: "30 天单方面免签入境",
+    snippetEn: `${unilateralVisaFreeCountries.length} ordinary-passport nationalities can stay up to ${unilateralPolicy.maxStayDays} days for ${unilateralPolicy.eligiblePurposes.join(", ")}.`,
+    snippetZh: `${unilateralVisaFreeCountries.length} 个普通护照国籍可停留最长 ${unilateralPolicy.maxStayDays} 天，用途包括商务、旅游、探亲访友、交流和过境。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-transit-policy",
+    type: "visa",
+    titleEn: "240-hour transit visa-free rule",
+    titleZh: "240 小时过境免签规则",
+    snippetEn: `${transitPolicy.totalCountries} eligible nationalities, ${transitPolicy.totalPorts} ports, ${transitPolicy.provincialRegions} provincial regions. A third-country onward ticket is required.`,
+    snippetZh: `${transitPolicy.totalCountries} 个国籍、${transitPolicy.totalPorts} 个口岸、${transitPolicy.provincialRegions} 个省级地区适用；必须有前往第三国或地区的后续客票。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  push({
+    id: "visa-online-entry-card",
+    type: "visa",
+    titleEn: "Online Foreigner Entry/Exit Card",
+    titleZh: "线上外国人入出境卡",
+    snippetEn: `Free online pre-fill from ${onlineEntryCard.effectiveDate}; kiosks and paper cards remain available at the port.`,
+    snippetZh: `${onlineEntryCard.effectiveDate} 起可免费线上预填；口岸仍提供自助设备和纸质卡。`,
+    href: "/guide/entry#entry-visa"
+  });
+
+  phase1TransitPorts.forEach((port) => {
+    push({
+      id: `visa-port-${port.city.toLowerCase()}-${port.portEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+      type: "visa",
+      titleEn: `${port.city} ${port.portEn}`,
+      titleZh: `${port.cityZh} ${port.portZh}`,
+      snippetEn: `${port.maxHours}-hour transit visa-free port in ${port.province}.`,
+      snippetZh: `${port.province} 的 ${port.maxHours} 小时过境免签口岸。`,
+      href: "/guide/entry#entry-visa"
+    });
+  });
+
+  const countryZhByEn = new Map(unilateralVisaFreeCountries.map((country) => [country.countryEn, country.countryZh]));
+  const visaCountries = new Set<string>([
+    ...unilateralVisaFreeCountries.map((country) => country.countryEn),
+    ...transitVisaFreeCountries
+  ]);
+
+  Array.from(visaCountries)
+    .sort((a, b) => a.localeCompare(b))
+    .forEach((country) => {
+      const unilateral = unilateralVisaFreeCountries.some((item) => item.countryEn === country);
+      const transit = transitVisaFreeCountries.includes(country);
+      const countryZh = countryZhByEn.get(country) ?? country;
+      const routeEn = [
+        unilateral ? `${unilateralPolicy.maxStayDays}-day unilateral visa-free` : "",
+        transit ? `${transitPolicy.maxHours}-hour transit visa-free` : ""
+      ].filter(Boolean).join(" + ");
+      const routeZh = [
+        unilateral ? `${unilateralPolicy.maxStayDays} 天单方面免签` : "",
+        transit ? `${transitPolicy.maxHours} 小时过境免签` : ""
+      ].filter(Boolean).join(" + ");
+
+      push({
+        id: `visa-country-${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
+        type: "visa",
+        titleEn: `${country} visa-free rules`,
+        titleZh: `${countryZh} 免签规则`,
+        snippetEn: `${country} passport holders: ${routeEn}. Check onward-ticket and stay-purpose rules before flying.`,
+        snippetZh: `${countryZh} 护照持有人：${routeZh}。出发前请确认后续客票和停留目的要求。`,
+        href: "/guide/entry#entry-visa"
+      });
+    });
+
+  return entries;
+};
diff --git a/v2/src/pages/SearchPage.tsx b/v2/src/pages/SearchPage.tsx
new file mode 100644
index 0000000000000000000000000000000000000000..94db82c2849d548ed1e95790de2e397ed5b5e949
--- /dev/null
+++ b/v2/src/pages/SearchPage.tsx
@@ -0,0 +1,168 @@
+import { useDeferredValue, useMemo, useState } from "react";
+import { Link, useSearchParams } from "react-router";
+import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
+import { useLang } from "../store/language";
+
+const searchEntries = buildSearchIndex();
+
+const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];
+
+const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
+  attraction: { en: "Attractions", zh: "景点" },
+  phrase: { en: "Phrasebook", zh: "短语" },
+  faq: { en: "FAQ", zh: "常见问题" },
+  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
+  visa: { en: "Visa rules", zh: "签证规则" }
+};
+
+const normalizeSearchValue = (value: string): string =>
+  value
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .toLowerCase()
+    .replace(/[^\p{L}\p{N}]+/gu, " ")
+    .trim();
+
+const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");
+
+const isSubsequence = (needle: string, haystack: string): boolean => {
+  if (!needle) return true;
+  let index = 0;
+  for (const char of haystack) {
+    if (char === needle[index]) index += 1;
+    if (index === needle.length) return true;
+  }
+  return false;
+};
+
+const matchScore = (entry: SearchIndexEntry, query: string): number => {
+  const normalizedQuery = normalizeSearchValue(query);
+  if (!normalizedQuery) return 1;
+
+  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
+  const haystack = normalizeSearchValue(fields.join(" "));
+  const compactQuery = normalizedQuery.replace(/\s+/g, "");
+  const compactHaystack = compact(fields.join(" "));
+  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
+
+  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
+  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
+  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
+  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
+  if (isSubsequence(compactQuery, compactHaystack)) return 10;
+  return 0;
+};
+
+export default function SearchPage() {
+  const { lang } = useLang();
+  const isZh = lang === "zh";
+  const [searchParams, setSearchParams] = useSearchParams();
+  const [query, setQuery] = useState(searchParams.get("q") ?? "");
+  const deferredQuery = useDeferredValue(query);
+
+  const matches = useMemo(
+    () =>
+      searchEntries
+        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
+        .filter(({ score }) => score > 0)
+        .sort((a, b) => b.score - a.score)
+        .map(({ entry }) => entry),
+    [deferredQuery]
+  );
+
+  const grouped = useMemo(
+    () =>
+      TYPE_ORDER.map((type) => ({
+        type,
+        items: matches.filter((entry) => entry.type === type)
+      })).filter((group) => group.items.length > 0),
+    [matches]
+  );
+
+  const handleQueryChange = (nextQuery: string) => {
+    setQuery(nextQuery);
+    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
+  };
+
+  return (
+    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
+      <header className="flex flex-col gap-2">
+        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
+          {isZh ? "← 返回首页" : "← Home"}
+        </Link>
+        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
+          {isZh ? "全站搜索" : "Site search"}
+        </h1>
+        <p className="max-w-2xl text-sm leading-relaxed text-muted">
+          {isZh
+            ? `搜索景点、短语、常见问题、避坑提醒和签证规则。当前索引 ${searchEntries.length} 条。`
+            : `Search attractions, phrases, FAQs, pitfalls, and visa rules. ${searchEntries.length} indexed entries.`}
+        </p>
+      </header>
+
+      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
+        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted">
+          {isZh ? "关键词" : "Keywords"}
+        </label>
+        <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 shadow-sm focus-within:border-jade">
+          <span className="text-lg text-muted" aria-hidden>
+            ⌕
+          </span>
+          <input
+            id="site-search"
+            type="search"
+            value={query}
+            onChange={(event) => handleQueryChange(event.currentTarget.value)}
+            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
+            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted/70"
+            autoComplete="off"
+          />
+        </div>
+        <p className="text-xs text-muted">
+          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
+        </p>
+      </section>
+
+      {grouped.length > 0 ? (
+        <div className="flex flex-col gap-6">
+          {grouped.map((group) => (
+            <section key={group.type} className="flex flex-col gap-3">
+              <header className="flex items-end justify-between gap-3 border-b border-line pb-2">
+                <h2 className="text-xl font-bold leading-tight">
+                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
+                </h2>
+                <span className="text-xs font-bold uppercase tracking-widest text-muted">
+                  {group.items.length}
+                </span>
+              </header>
+              <ul className="grid gap-3">
+                {group.items.map((entry) => (
+                  <li key={entry.id}>
+                    <Link
+                      to={entry.href}
+                      className="group block rounded-lg border border-line bg-white p-4 shadow-sm transition hover:border-jade hover:shadow-md"
+                    >
+                      <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
+                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
+                      </span>
+                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-jade">
+                        {isZh ? entry.titleZh : entry.titleEn}
+                      </h3>
+                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-ink/80">
+                        {isZh ? entry.snippetZh : entry.snippetEn}
+                      </p>
+                    </Link>
+                  </li>
+                ))}
+              </ul>
+            </section>
+          ))}
+        </div>
+      ) : (
+        <p className="rounded-lg border border-dashed border-line bg-white p-5 text-sm text-muted">
+          {isZh ? "没找到，换个关键词试试。" : "No matches. Try different keywords."}
+        </p>
+      )}
+    </main>
+  );
+}
diff --git a/v2/src/routes.ts b/v2/src/routes.ts
index 72665b74751f0c4660717cb649943229e26f621f..0ceb29d58c9bc643092486d4f26521e4bb8b583e
--- a/v2/src/routes.ts
+++ b/v2/src/routes.ts
@@ -7,8 +7,9 @@
   route("guide/:topic", "./pages/GuidePage.tsx"),
   route("plan", "./pages/PlanPage.tsx"),
   route("city/:cityId", "./pages/CityPage.tsx"),
-  route("share", "./pages/SharePage.tsx"),
-  route("ask", "./pages/AskPage.tsx"),
-  route("sources", "./pages/SourcesPage.tsx"),
-  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
-] satisfies RouteConfig;
+  route("share", "./pages/SharePage.tsx"),
+  route("ask", "./pages/AskPage.tsx"),
+  route("sources", "./pages/SourcesPage.tsx"),
+  route("search", "./pages/SearchPage.tsx"),
+  route("*", "./pages/HomePage.tsx", { id: "catch-all" })
+] satisfies RouteConfig;

tokens used
164,216

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
