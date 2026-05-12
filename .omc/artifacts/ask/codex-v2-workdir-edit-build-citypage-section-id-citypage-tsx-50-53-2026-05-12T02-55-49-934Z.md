# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-12T02:55:49.935Z

## Original task

在 v2/ workdir 直接修代码（不是写建议，是真的 edit + build）。

任务：修 CityPage 上 section id 重复的问题。CityPage.tsx:50-53 已经用 <section id=payments scroll-mt-24>...</section> 包了 PaymentsChecklist，但 PaymentsChecklist 自己内部又输出 id=payments 的 section，导致 DOM 里出现重复 id，破坏锚点跳转和 IntersectionObserver scroll-spy。

读这 5 个文件：
- v2/src/pages/CityPage.tsx（看外层 wrapper 的 id 是什么）
- v2/src/components/pillar/PaymentsChecklist.tsx
- v2/src/components/pillar/TransportGuide.tsx
- v2/src/components/pillar/FoodGuide.tsx
- v2/src/components/pillar/EmergencyBriefing.tsx

修法：让 4 个 pillar 组件的最外层 section 在被 cityId 传入时不再输出自己的 id；CityPage 外层 wrapper 的 id 保持作为唯一 anchor。VisaChecker.tsx 也检查一下（id=entry-visa），如果和 CityPage 外层 #visa 重复也修掉。

完成后跑 npx tsc --noEmit 和 npm run build，都要 0 error。

返回简短报告：改了哪些文件 + 每个文件改了什么 + build 状态。控制 200 字以内。

## Final prompt

在 v2/ workdir 直接修代码（不是写建议，是真的 edit + build）。

任务：修 CityPage 上 section id 重复的问题。CityPage.tsx:50-53 已经用 <section id=payments scroll-mt-24>...</section> 包了 PaymentsChecklist，但 PaymentsChecklist 自己内部又输出 id=payments 的 section，导致 DOM 里出现重复 id，破坏锚点跳转和 IntersectionObserver scroll-spy。

读这 5 个文件：
- v2/src/pages/CityPage.tsx（看外层 wrapper 的 id 是什么）
- v2/src/components/pillar/PaymentsChecklist.tsx
- v2/src/components/pillar/TransportGuide.tsx
- v2/src/components/pillar/FoodGuide.tsx
- v2/src/components/pillar/EmergencyBriefing.tsx

修法：让 4 个 pillar 组件的最外层 section 在被 cityId 传入时不再输出自己的 id；CityPage 外层 wrapper 的 id 保持作为唯一 anchor。VisaChecker.tsx 也检查一下（id=entry-visa），如果和 CityPage 外层 #visa 重复也修掉。

完成后跑 npx tsc --noEmit 和 npm run build，都要 0 error。

返回简短报告：改了哪些文件 + 每个文件改了什么 + build 状态。控制 200 字以内。

## Raw output

```text
SUCCESS: The process with PID 544980 (child process of PID 604588) has been terminated.
SUCCESS: The process with PID 604588 (child process of PID 555412) has been terminated.
SUCCESS: The process with PID 555412 (child process of PID 499088) has been terminated.
SUCCESS: The process with PID 499088 (child process of PID 378364) has been terminated.
SUCCESS: The process with PID 567300 (child process of PID 604252) has been terminated.
SUCCESS: The process with PID 604252 (child process of PID 598800) has been terminated.
SUCCESS: The process with PID 598800 (child process of PID 521208) has been terminated.
SUCCESS: The process with PID 521208 (child process of PID 378364) has been terminated.
改了 4 个文件：`PaymentsChecklist`、`TransportGuide`、`FoodGuide`、`EmergencyBriefing`，均在传入 `cityId` 时不再输出内部 section `id`，独立 GuidePage 仍保留原 `id`。`VisaChecker` 已检查，`entry-visa` 不重复 `#visa`，未改。

`npx tsc --noEmit`：0 error。`npm run build`：0 error，仅 Vite warning。
SUCCESS: The process with PID 587792 (child process of PID 605468) has been terminated.
SUCCESS: The process with PID 605468 (child process of PID 501480) has been terminated.
SUCCESS: The process with PID 501480 (child process of PID 600104) has been terminated.
SUCCESS: The process with PID 600104 (child process of PID 378364) has been terminated.


OpenAI Codex v0.128.0 (research preview)
--------
workdir: c:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1a1a-ad13-7a50-9271-2c487fbabbb7
--------
user
在 v2/ workdir 直接修代码（不是写建议，是真的 edit + build）。

任务：修 CityPage 上 section id 重复的问题。CityPage.tsx:50-53 已经用 <section id=payments scroll-mt-24>...</section> 包了 PaymentsChecklist，但 PaymentsChecklist 自己内部又输出 id=payments 的 section，导致 DOM 里出现重复 id，破坏锚点跳转和 IntersectionObserver scroll-spy。

读这 5 个文件：
- v2/src/pages/CityPage.tsx（看外层 wrapper 的 id 是什么）
- v2/src/components/pillar/PaymentsChecklist.tsx
- v2/src/components/pillar/TransportGuide.tsx
- v2/src/components/pillar/FoodGuide.tsx
- v2/src/components/pillar/EmergencyBriefing.tsx

修法：让 4 个 pillar 组件的最外层 section 在被 cityId 传入时不再输出自己的 id；CityPage 外层 wrapper 的 id 保持作为唯一 anchor。VisaChecker.tsx 也检查一下（id=entry-visa），如果和 CityPage 外层 #visa 重复也修掉。

完成后跑 npx tsc --noEmit 和 npm run build，都要 0 error。

返回简短报告：改了哪些文件 + 每个文件改了什么 + build 状态。控制 200 字以内。
codex
我会直接在 `v2` 里改这几个 React 组件，然后跑类型检查和生产构建。先快速读项目上下文和相关组件，确认每个锚点的来源。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw 'C:\\Users\\h\\.codex\\plugins\\cache\\openai-curated\\build-web-apps\\63976030\\skills\\react-best-practices\\SKILL.md'" in c:\Users\h\Documents\New project 2
 succeeded in 465ms:
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
使用 `build-web-apps:react-best-practices`，这里只需要按现有 React 组件边界做最小改动。接下来我会并行读取 CityPage 和 5 个相关组件，定位重复 `id`。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw 'v2/src/pages/CityPage.tsx'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw 'v2/src/components/pillar/PaymentsChecklist.tsx'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw 'v2/src/components/pillar/TransportGuide.tsx'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw 'v2/src/components/pillar/FoodGuide.tsx'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-ChildItem -Path 'v2/src' -Recurse -Filter 'VisaChecker.tsx' | Select-Object -ExpandProperty FullName" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw 'v2/src/components/pillar/EmergencyBriefing.tsx'" in c:\Users\h\Documents\New project 2
 succeeded in 853ms:
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


 succeeded in 840ms:
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
    <section id="payments" className="flex flex-col gap-4">
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


 succeeded in 903ms:
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
    <section id="food" className="flex flex-col gap-4">
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


 succeeded in 907ms:
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
    <section id="transport" className="flex flex-col gap-4">
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


 succeeded in 922ms:
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
    <section id="emergency" className="flex flex-col gap-4">
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


 succeeded in 1004ms:
C:\Users\h\Documents\New project 2\v2\src\components\pillar\VisaChecker.tsx

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw 'v2/src/components/pillar/VisaChecker.tsx'" in c:\Users\h\Documents\New project 2
 succeeded in 424ms:
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


codex
已确认 `CityPage` 外层包了 `visa/payments/transport/food/emergency`，4 个 city-scoped pillar 内部也各自输出同名 `id`。`VisaChecker` 内部是 `entry-visa`，不是 `visa`，我会先按任务范围只去掉 city 页面里会重复的内部 anchor。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg "<PaymentsChecklist|<TransportGuide|<FoodGuide|<EmergencyBriefing|<VisaChecker" v2/src' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Raw 'v2/src/components/city/CityNav.tsx'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg \"id=\\\"(payments|transport|food|emergency|visa|entry-visa)\\\"\" v2/src" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "git -C 'v2' status --short" in c:\Users\h\Documents\New project 2
 succeeded in 909ms:
v2/src\pages\GuidePage.tsx:      {current === "entry" && <VisaChecker />}
v2/src\pages\GuidePage.tsx:      {current === "payments" && <PaymentsChecklist />}
v2/src\pages\CityPage.tsx:          <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
v2/src\pages\CityPage.tsx:          <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
v2/src\pages\CityPage.tsx:          <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>
v2/src\pages\CityPage.tsx:          <section id="food" className="scroll-mt-24"><FoodGuide cityId={id} /></section>
v2/src\pages\CityPage.tsx:          <section id="emergency" className="scroll-mt-24"><EmergencyBriefing cityId={id} /></section>

 succeeded in 1053ms:
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


 succeeded in 1055ms:
 M ../.omc/project-memory.json

2026-05-12T02:54:31.013565Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 1.3 seconds
Output:
payments : The term 'payments' is not recognized as the name of a cmdlet, function, script file, or operable program. C
heck the spelling of the name, or if a path was included, verify that the path is correct and try again.
At line:2 char:11
+ rg "id=\"(payments|transport|food|emergency|visa|entry-visa)\"" v2/sr ...
+           ~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (payments:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
 

 exited 1 in 1300ms:
payments : The term 'payments' is not recognized as the name of a cmdlet, function, script file, or operable program. C
heck the spelling of the name, or if a path was included, verify that the path is correct and try again.
At line:2 char:11
+ rg "id=\"(payments|transport|food|emergency|visa|entry-visa)\"" v2/sr ...
+           ~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (payments:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
 

codex
准备编辑 4 个 pillar 组件：保留它们在独立 GuidePage 使用时的原始 `id`，但在 `CityPage` 传入 `cityId` 时让内部最外层 `<section>` 不再设置 `id`。这样 CityPage 的外层 wrapper 会成为唯一 anchor。
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\pillar\EmergencyBriefing.tsx
c:\Users\h\Documents\New project 2\v2\src\components\pillar\FoodGuide.tsx
c:\Users\h\Documents\New project 2\v2\src\components\pillar\PaymentsChecklist.tsx
c:\Users\h\Documents\New project 2\v2\src\components\pillar\TransportGuide.tsx
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index 66351ffeb253e565ca88c85bc9fa1e462ffba886..f748c2febbf362daef8862d4d295e77ba4a3d66c
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,7 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id="emergency" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 9e8f6641ba5e0544991df249f4989eae7453cb21..76f0cc5cafc587be0faa7af535c9b49a4d461fac
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,7 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="food" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index a2be15bf2131451cd18a757cf9bd3920c07f1940..1fc16b48c4a782a53a6618ff651f1c3a244e2467
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,7 @@
     : cityPaymentNotes;
 
   return (
-    <section id="payments" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index ec362fafdb2b3d0e404921f40d3edf4e57e410a7..df2bbecd59cca92410307c6729092961df5ccf2f
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,7 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="transport" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">

diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index 66351ffeb253e565ca88c85bc9fa1e462ffba886..f748c2febbf362daef8862d4d295e77ba4a3d66c
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,7 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id="emergency" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 9e8f6641ba5e0544991df249f4989eae7453cb21..76f0cc5cafc587be0faa7af535c9b49a4d461fac
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,7 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="food" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index a2be15bf2131451cd18a757cf9bd3920c07f1940..1fc16b48c4a782a53a6618ff651f1c3a244e2467
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,7 @@
     : cityPaymentNotes;
 
   return (
-    <section id="payments" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index ec362fafdb2b3d0e404921f40d3edf4e57e410a7..df2bbecd59cca92410307c6729092961df5ccf2f
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,7 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="transport" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">

codex
改动已经落到 4 个组件里。现在先用搜索确认剩下的静态 `id` 位置，再跑 `npx tsc --noEmit`。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg 'id=\"(payments|transport|food|emergency|visa|entry-visa)\"' v2/src" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "git -C 'v2' diff -- src/components/pillar/PaymentsChecklist.tsx src/components/pillar/TransportGuide.tsx src/components/pillar/FoodGuide.tsx src/components/pillar/EmergencyBriefing.tsx src/components/pillar/VisaChecker.tsx src/pages/CityPage.tsx" in c:\Users\h\Documents\New project 2
2026-05-12T02:54:57.713525Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.5 seconds
Output:

 exited 1 in 477ms:
 succeeded in 487ms:
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index 66351ff..f748c2f 100644
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,7 @@ export default function EmergencyBriefing({ cityId }: Props) {
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id="emergency" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 9e8f664..76f0cc5 100644
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,7 @@ export default function FoodGuide({ cityId }: Props) {
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="food" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index a2be15b..1fc16b4 100644
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,7 @@ export default function PaymentsChecklist({ cityId }: Props) {
     : cityPaymentNotes;
 
   return (
-    <section id="payments" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index ec362fa..df2bbec 100644
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,7 @@ export default function TransportGuide({ cityId }: Props) {
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="transport" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
warning: in the working copy of 'v2/src/components/pillar/EmergencyBriefing.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/pillar/FoodGuide.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/pillar/PaymentsChecklist.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/pillar/TransportGuide.tsx', LF will be replaced by CRLF the next time Git touches it

diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index 66351ffeb253e565ca88c85bc9fa1e462ffba886..f748c2febbf362daef8862d4d295e77ba4a3d66c
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,7 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id="emergency" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 9e8f6641ba5e0544991df249f4989eae7453cb21..76f0cc5cafc587be0faa7af535c9b49a4d461fac
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,7 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="food" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index a2be15bf2131451cd18a757cf9bd3920c07f1940..1fc16b48c4a782a53a6618ff651f1c3a244e2467
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,7 @@
     : cityPaymentNotes;
 
   return (
-    <section id="payments" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index ec362fafdb2b3d0e404921f40d3edf4e57e410a7..df2bbecd59cca92410307c6729092961df5ccf2f
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,7 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="transport" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
 succeeded in 2846ms:
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index 66351ffeb253e565ca88c85bc9fa1e462ffba886..f748c2febbf362daef8862d4d295e77ba4a3d66c
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,7 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id="emergency" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 9e8f6641ba5e0544991df249f4989eae7453cb21..76f0cc5cafc587be0faa7af535c9b49a4d461fac
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,7 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="food" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index a2be15bf2131451cd18a757cf9bd3920c07f1940..1fc16b48c4a782a53a6618ff651f1c3a244e2467
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,7 @@
     : cityPaymentNotes;
 
   return (
-    <section id="payments" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index ec362fafdb2b3d0e404921f40d3edf4e57e410a7..df2bbecd59cca92410307c6729092961df5ccf2f
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,7 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="transport" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">

codex
`npx tsc --noEmit` 已经 0 error。继续跑生产构建，确认 Vite/打包阶段也没问题。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 9792ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1502 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                     6.52 kB │ gzip:     0.97 kB
build/client/assets/Map3D-B9DDZdqH.css              24.01 kB │ gzip:     5.37 kB
build/client/assets/root-BQIYLP8a.css               43.45 kB │ gzip:     8.18 kB
build/client/assets/language-GMHwKk61.js             0.26 kB │ gzip:     0.21 kB
build/client/assets/clsx-CQXsFDzQ.js                 0.36 kB │ gzip:     0.23 kB
build/client/assets/chunk-BA_0og6f.js                0.95 kB │ gzip:     0.56 kB
build/client/assets/atlas-MRsdg6Pj.js                1.37 kB │ gzip:     0.61 kB
build/client/assets/provinceColors-DHXt_AH6.js       1.72 kB │ gzip:     0.90 kB
build/client/assets/HomePage-CDy3l0zl.js             4.74 kB │ gzip:     2.14 kB
build/client/assets/SharePage-2Utxf2hr.js            7.53 kB │ gzip:     2.79 kB
build/client/assets/phase2-preview-C04gkdDm.js       7.59 kB │ gzip:     4.48 kB
build/client/assets/AskPage-Bp2bKHe9.js              7.66 kB │ gzip:     2.94 kB
build/client/assets/Map3D-CtQ8NIoh.js                7.98 kB │ gzip:     3.79 kB
build/client/assets/jsx-runtime-C3NsbNoK.js          9.07 kB │ gzip:     3.51 kB
build/client/assets/root-CjTK4PI6.js                 9.51 kB │ gzip:     4.59 kB
build/client/assets/GuidePage-BwKGVtSo.js           10.26 kB │ gzip:     5.00 kB
build/client/assets/MapPage-BRR-Kl6A.js             11.77 kB │ gzip:     4.36 kB
build/client/assets/map-sources-DPac7nhq.js         21.86 kB │ gzip:     8.95 kB
build/client/assets/practical-other--E2Qy77J.js     22.32 kB │ gzip:    10.76 kB
build/client/assets/SourcesPage-DukJXAk2.js         32.23 kB │ gzip:     8.48 kB
build/client/assets/transport-PM6KJWXN.js           34.86 kB │ gzip:    15.24 kB
build/client/assets/SourcesNote-BWtxuM4i.js         39.05 kB │ gzip:    14.93 kB
build/client/assets/CityPage-Bf3tRcoY.js            52.21 kB │ gzip:    19.47 kB
build/client/assets/chunk-5KNZJZUH-C1Ndru0E.js     118.17 kB │ gzip:    38.70 kB
build/client/assets/entry.client-CkIH9KOS.js       186.57 kB │ gzip:    58.90 kB
build/client/assets/Cesium-BefueQ4V.js           4,724.63 kB │ gzip: 1,304.40 kB

[32m✓ built in 5.78s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 65 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m
[2mbuild\server\assets\server-build-BQIYLP8a.css[22m

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
build/server/assets/server-build-BQIYLP8a.css   43.45 kB │ gzip:  8.18 kB
build/server/assets/Map3D-BFTEZmvF.js           13.10 kB │ gzip:  4.65 kB
build/server/assets/map-sources-vO4N3wgx.js     27.68 kB │ gzip:  9.45 kB
build/server/index.js                          311.50 kB │ gzip: 97.55 kB

[32m✓ built in 859ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:virtual-modules (38%)
  - react-router:dot-server (37%)
  - react-router:inject-hmr-runtime (17%)
  - react-router:hmr-runtime (4%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index 66351ffeb253e565ca88c85bc9fa1e462ffba886..f748c2febbf362daef8862d4d295e77ba4a3d66c
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,7 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id="emergency" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 9e8f6641ba5e0544991df249f4989eae7453cb21..76f0cc5cafc587be0faa7af535c9b49a4d461fac
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,7 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="food" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index a2be15bf2131451cd18a757cf9bd3920c07f1940..1fc16b48c4a782a53a6618ff651f1c3a244e2467
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,7 @@
     : cityPaymentNotes;
 
   return (
-    <section id="payments" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index ec362fafdb2b3d0e404921f40d3edf4e57e410a7..df2bbecd59cca92410307c6729092961df5ccf2f
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,7 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="transport" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">

codex
生产构建也通过了，只有 Vite 的大 chunk/插件耗时警告，没有 error。最后我看一下工作区差异，确保报告只覆盖本次相关代码改动。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "git -C 'v2' status --short" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "git -C 'v2' diff -- src/components/pillar/PaymentsChecklist.tsx src/components/pillar/TransportGuide.tsx src/components/pillar/FoodGuide.tsx src/components/pillar/EmergencyBriefing.tsx src/components/pillar/VisaChecker.tsx src/pages/CityPage.tsx" in c:\Users\h\Documents\New project 2
 succeeded in 667ms:
 M ../.omc/project-memory.json
 M src/components/layout/LanguageSwitch.tsx
 M src/components/pillar/EmergencyBriefing.tsx
 M src/components/pillar/FoodGuide.tsx
 M src/components/pillar/PaymentsChecklist.tsx
 M src/components/pillar/TransportGuide.tsx
 M src/pages/GuidePage.tsx
 M src/pages/MapPage.tsx

 succeeded in 669ms:
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index 66351ff..f748c2f 100644
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,7 @@ export default function EmergencyBriefing({ cityId }: Props) {
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id="emergency" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 9e8f664..76f0cc5 100644
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,7 @@ export default function FoodGuide({ cityId }: Props) {
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="food" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index a2be15b..1fc16b4 100644
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,7 @@ export default function PaymentsChecklist({ cityId }: Props) {
     : cityPaymentNotes;
 
   return (
-    <section id="payments" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index ec362fa..df2bbec 100644
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,7 @@ export default function TransportGuide({ cityId }: Props) {
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="transport" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
warning: in the working copy of 'v2/src/components/pillar/EmergencyBriefing.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/pillar/FoodGuide.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/pillar/PaymentsChecklist.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/pillar/TransportGuide.tsx', LF will be replaced by CRLF the next time Git touches it

diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index 66351ffeb253e565ca88c85bc9fa1e462ffba886..f748c2febbf362daef8862d4d295e77ba4a3d66c
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,7 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id="emergency" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 9e8f6641ba5e0544991df249f4989eae7453cb21..76f0cc5cafc587be0faa7af535c9b49a4d461fac
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,7 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="food" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index a2be15bf2131451cd18a757cf9bd3920c07f1940..1fc16b48c4a782a53a6618ff651f1c3a244e2467
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,7 @@
     : cityPaymentNotes;
 
   return (
-    <section id="payments" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index ec362fafdb2b3d0e404921f40d3edf4e57e410a7..df2bbecd59cca92410307c6729092961df5ccf2f
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,7 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="transport" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">

codex
改了 4 个文件：`PaymentsChecklist`、`TransportGuide`、`FoodGuide`、`EmergencyBriefing`，均在传入 `cityId` 时不再输出内部 section `id`，独立 GuidePage 仍保留原 `id`。`VisaChecker` 已检查，`entry-visa` 不重复 `#visa`，未改。

`npx tsc --noEmit`：0 error。`npm run build`：0 error，仅 Vite warning。
diff --git a/v2/src/components/pillar/EmergencyBriefing.tsx b/v2/src/components/pillar/EmergencyBriefing.tsx
index 66351ffeb253e565ca88c85bc9fa1e462ffba886..f748c2febbf362daef8862d4d295e77ba4a3d66c
--- a/v2/src/components/pillar/EmergencyBriefing.tsx
+++ b/v2/src/components/pillar/EmergencyBriefing.tsx
@@ -27,7 +27,7 @@
   const cityHotline = cityHotlines.find((h) => h.cityId === effectiveId)!;
 
   return (
-    <section id="emergency" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "emergency"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/FoodGuide.tsx b/v2/src/components/pillar/FoodGuide.tsx
index 9e8f6641ba5e0544991df249f4989eae7453cb21..76f0cc5cafc587be0faa7af535c9b49a4d461fac
--- a/v2/src/components/pillar/FoodGuide.tsx
+++ b/v2/src/components/pillar/FoodGuide.tsx
@@ -18,7 +18,7 @@
   const active = cityFood.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="food" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "food"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/PaymentsChecklist.tsx b/v2/src/components/pillar/PaymentsChecklist.tsx
index a2be15bf2131451cd18a757cf9bd3920c07f1940..1fc16b48c4a782a53a6618ff651f1c3a244e2467
--- a/v2/src/components/pillar/PaymentsChecklist.tsx
+++ b/v2/src/components/pillar/PaymentsChecklist.tsx
@@ -20,7 +20,7 @@
     : cityPaymentNotes;
 
   return (
-    <section id="payments" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "payments"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">
diff --git a/v2/src/components/pillar/TransportGuide.tsx b/v2/src/components/pillar/TransportGuide.tsx
index ec362fafdb2b3d0e404921f40d3edf4e57e410a7..df2bbecd59cca92410307c6729092961df5ccf2f
--- a/v2/src/components/pillar/TransportGuide.tsx
+++ b/v2/src/components/pillar/TransportGuide.tsx
@@ -21,7 +21,7 @@
   const active = cityTransport.find((c) => c.cityId === effectiveId)!;
 
   return (
-    <section id="transport" className="flex flex-col gap-4">
+    <section id={cityScoped ? undefined : "transport"} className="flex flex-col gap-4">
       {!cityScoped && (
         <header>
           <span className="text-xs font-bold uppercase tracking-widest text-muted">

tokens used
48,694

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
