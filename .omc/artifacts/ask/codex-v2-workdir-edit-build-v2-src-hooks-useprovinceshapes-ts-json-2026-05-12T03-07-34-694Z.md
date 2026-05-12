# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-12T03:07:34.697Z

## Original task

在 v2/ workdir 真的 edit + build。

任务：v2/src/hooks/useProvinceShapes.ts 里省界 JSON 加载失败现在只 console.warn，调用方（MapPreview / HeroMap 里的 ProvinceShapeLayer）会无限保持 null（看起来在 loading）。如果 CDN 抽风用户什么也看不到。codex audit 指 useProvinceShapes.ts:12-14。

修法：
1. 让 hook 返回 { shapes: ShapeMap | null; error: Error | null } 而不是裸 ShapeMap | null
2. 更新两个调用方：
   - v2/src/components/map/ProvinceShapeLayer.tsx 在 error 时渲染一段 text fallback ('Map outline failed to load. Refresh to retry.' / '地图轮廓加载失败，刷新重试。')
   - v2/src/components/map/MapPreview.tsx 同样的 error fallback
3. 加 useLang 拿 lang 显示中英文
4. 不要破坏现有 loading 时的 null 行为

完成后 npx tsc --noEmit + npm run build 都 0 error。

报告 200 字以内：hook 签名变更、两个调用方怎么显示 fallback、build 状态。

## Final prompt

在 v2/ workdir 真的 edit + build。

任务：v2/src/hooks/useProvinceShapes.ts 里省界 JSON 加载失败现在只 console.warn，调用方（MapPreview / HeroMap 里的 ProvinceShapeLayer）会无限保持 null（看起来在 loading）。如果 CDN 抽风用户什么也看不到。codex audit 指 useProvinceShapes.ts:12-14。

修法：
1. 让 hook 返回 { shapes: ShapeMap | null; error: Error | null } 而不是裸 ShapeMap | null
2. 更新两个调用方：
   - v2/src/components/map/ProvinceShapeLayer.tsx 在 error 时渲染一段 text fallback ('Map outline failed to load. Refresh to retry.' / '地图轮廓加载失败，刷新重试。')
   - v2/src/components/map/MapPreview.tsx 同样的 error fallback
3. 加 useLang 拿 lang 显示中英文
4. 不要破坏现有 loading 时的 null 行为

完成后 npx tsc --noEmit + npm run build 都 0 error。

报告 200 字以内：hook 签名变更、两个调用方怎么显示 fallback、build 状态。

## Raw output

```text
SUCCESS: The process with PID 610328 (child process of PID 610960) has been terminated.
SUCCESS: The process with PID 610960 (child process of PID 592260) has been terminated.
SUCCESS: The process with PID 592260 (child process of PID 610848) has been terminated.
SUCCESS: The process with PID 610848 (child process of PID 605212) has been terminated.
SUCCESS: The process with PID 600412 (child process of PID 610452) has been terminated.
SUCCESS: The process with PID 610452 (child process of PID 607984) has been terminated.
SUCCESS: The process with PID 607984 (child process of PID 610824) has been terminated.
SUCCESS: The process with PID 610824 (child process of PID 605212) has been terminated.
已在 `v2` 完成。`useProvinceShapes` 现在返回 `{ shapes: ShapeMap | null; error: Error | null }`，加载中仍保持 `shapes:null/error:null`。

`ProvinceShapeLayer` 和 `MapPreview` 都接入 `useLang`，失败时显示中英文 fallback。另同步 `ProvinceLabelLayer` 解构以适配新签名。

验证：`npx tsc --noEmit` 0 error，`npm run build` 0 error。


OpenAI Codex v0.128.0 (research preview)
--------
workdir: c:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1a24-e6c7-7530-8738-d1d1ae13c15b
--------
user
在 v2/ workdir 真的 edit + build。

任务：v2/src/hooks/useProvinceShapes.ts 里省界 JSON 加载失败现在只 console.warn，调用方（MapPreview / HeroMap 里的 ProvinceShapeLayer）会无限保持 null（看起来在 loading）。如果 CDN 抽风用户什么也看不到。codex audit 指 useProvinceShapes.ts:12-14。

修法：
1. 让 hook 返回 { shapes: ShapeMap | null; error: Error | null } 而不是裸 ShapeMap | null
2. 更新两个调用方：
   - v2/src/components/map/ProvinceShapeLayer.tsx 在 error 时渲染一段 text fallback ('Map outline failed to load. Refresh to retry.' / '地图轮廓加载失败，刷新重试。')
   - v2/src/components/map/MapPreview.tsx 同样的 error fallback
3. 加 useLang 拿 lang 显示中英文
4. 不要破坏现有 loading 时的 null 行为

完成后 npx tsc --noEmit + npm run build 都 0 error。

报告 200 字以内：hook 签名变更、两个调用方怎么显示 fallback、build 状态。
codex
我会在 `v2` 里直接改代码并跑类型检查和构建。因为这次涉及 React hook 和组件调用方，我先按 React best practices 技能快速核对相关约束。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'C:/Users/h/.codex/plugins/cache/openai-curated/build-web-apps/63976030/skills/react-best-practices/SKILL.md' -TotalCount 220" in c:\Users\h\Documents\New project 2
 succeeded in 422ms:
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
我先定位 hook、两个调用方以及语言 hook 的用法，避免猜测项目里的导入路径和现有加载分支。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "useProvinceShapes|ProvinceShapeLayer|useLang|Map outline|地图轮廓" v2/src' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/src/hooks/useProvinceShapes.ts'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/src/components/map/ProvinceShapeLayer.tsx'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/src/components/map/MapPreview.tsx'" in c:\Users\h\Documents\New project 2
 succeeded in 515ms:
v2/src\hooks\useProvinceShapes.ts:4:export function useProvinceShapes(): ShapeMap | null {
v2/src\pages\AskPage.tsx:4:import { useLang } from "../store/language";
v2/src\pages\AskPage.tsx:7:  const { lang } = useLang();
v2/src\components\city\CityImagePanel.tsx:4:import { useLang } from "../../store/language";
v2/src\components\city\CityImagePanel.tsx:11:  const { lang } = useLang();
v2/src\pages\CityPage.tsx:3:import { useLang } from "../store/language";
v2/src\pages\CityPage.tsx:19:  const { lang } = useLang();
v2/src\components\common\CityFurtherReading.tsx:3:import { useLang } from "../../store/language";
v2/src\components\common\CityFurtherReading.tsx:8:  const { lang } = useLang();
v2/src\components\city\CityIntro.tsx:5:import { useLang } from "../../store/language";
v2/src\components\city\CityIntro.tsx:58:  const { lang } = useLang();
v2/src\components\city\CityNav.tsx:3:import { useLang } from "../../store/language";
v2/src\components\city\CityNav.tsx:18:  const { lang } = useLang();
v2/src\components\city\CuisineDrawer.tsx:4:import { useLang } from "../../store/language";
v2/src\components\city\CuisineDrawer.tsx:13:  const { lang } = useLang();
v2/src\pages\GuidePage.tsx:7:import { useLang } from "../store/language";
v2/src\pages\GuidePage.tsx:36:  const { lang } = useLang();
v2/src\components\common\SourcesNote.tsx:2:import { useLang } from "../../store/language";
v2/src\components\common\SourcesNote.tsx:5:  const { lang } = useLang();
v2/src\pages\HomePage.tsx:5:import { useLang } from "../store/language";
v2/src\pages\HomePage.tsx:20:  const { lang } = useLang();
v2/src\components\common\PracticalBlock.tsx:3:import { useLang } from "../../store/language";
v2/src\components\common\PracticalBlock.tsx:15:  const { lang } = useLang();
v2/src\components\layout\LanguageSwitch.tsx:2:import { useLang } from "../../store/language";
v2/src\components\layout\LanguageSwitch.tsx:11:  const { lang, setLang } = useLang();
v2/src\components\layout\SiteFooter.tsx:2:import { useLang } from "../../store/language";
v2/src\components\layout\SiteFooter.tsx:5:  const { t, lang } = useLang();
v2/src\pages\MapPage.tsx:5:import { useLang } from "../store/language";
v2/src\pages\MapPage.tsx:8:  const { lang } = useLang();
v2/src\components\sections\TopQuestions.tsx:4:import { useLang } from "../../store/language";
v2/src\components\sections\TopQuestions.tsx:7:  const { lang } = useLang();
v2/src\pages\SharePage.tsx:3:import { useLang } from "../store/language";
v2/src\pages\SharePage.tsx:6:  const { lang } = useLang();
v2/src\pages\SourcesPage.tsx:3:import { useLang } from "../store/language";
v2/src\pages\SourcesPage.tsx:6:  const { lang } = useLang();
v2/src\pages\SourcesPage.tsx:67:  const { lang } = useLang();
v2/src\components\policy\TravelAlerts.tsx:9:import { useLang } from "../../store/language";
v2/src\components\policy\TravelAlerts.tsx:30:  const { lang } = useLang();
v2/src\components\map\HeroMap.tsx:3:import { useLang } from "../../store/language";
v2/src\components\map\HeroMap.tsx:4:import ProvinceShapeLayer from "./ProvinceShapeLayer";
v2/src\components\map\HeroMap.tsx:12:  const { lang } = useLang();
v2/src\components\map\HeroMap.tsx:46:          <ProvinceShapeLayer />
v2/src\store\language.ts:12:export function useLang(): LanguageContextValue {
v2/src\store\language.ts:14:  if (!value) throw new Error("useLang must be used within <LanguageProvider>");
v2/src\components\pillar\EmergencyBriefing.tsx:12:import { useLang } from "../../store/language";
v2/src\components\pillar\EmergencyBriefing.tsx:20:  const { lang } = useLang();
v2/src\components\map\MapPreview.tsx:2:import { useProvinceShapes } from "../../hooks/useProvinceShapes";
v2/src\components\map\MapPreview.tsx:7:  const shapes = useProvinceShapes();
v2/src\components\pillar\FoodGuide.tsx:5:import { useLang } from "../../store/language";
v2/src\components\pillar\FoodGuide.tsx:12:  const { lang } = useLang();
v2/src\components\pillar\FoodGuide.tsx:112:  const { lang } = useLang();
v2/src\components\map\Province3DOverlay.tsx:3:import { useLang } from "../../store/language";
v2/src\components\map\Province3DOverlay.tsx:9:  const { lang } = useLang();
v2/src\components\pillar\PaymentsChecklist.tsx:9:import { useLang } from "../../store/language";
v2/src\components\pillar\PaymentsChecklist.tsx:15:  const { lang } = useLang();
v2/src\components\pillar\PaymentsPractical.tsx:3:import { useLang } from "../../store/language";
v2/src\components\pillar\PaymentsPractical.tsx:21:  const { lang } = useLang();
v2/src\components\pillar\TransportGuide.tsx:4:import { useLang } from "../../store/language";
v2/src\components\pillar\TransportGuide.tsx:16:  const { lang } = useLang();
v2/src\components\pillar\TransportGuide.tsx:119:  const { lang } = useLang();
v2/src\components\pillar\VisaChecker.tsx:10:import { useLang } from "../../store/language";
v2/src\components\pillar\VisaChecker.tsx:16:  const { lang } = useLang();
v2/src\components\pillar\VisaChecker.tsx:80:  const { lang } = useLang();
v2/src\components\pillar\VisaChecker.tsx:158:  const { lang } = useLang();
v2/src\components\pillar\VisaChecker.tsx:218:  const { lang } = useLang();
v2/src\components\map\ProvinceHitAreaLayer.tsx:3:import { useLang } from "../../store/language";
v2/src\components\map\ProvinceHitAreaLayer.tsx:8:  const { lang } = useLang();
v2/src\components\map\ProvinceLabelLayer.tsx:3:import { useProvinceShapes } from "../../hooks/useProvinceShapes";
v2/src\components\map\ProvinceLabelLayer.tsx:7:import { useLang } from "../../store/language";
v2/src\components\map\ProvinceLabelLayer.tsx:20:  const shapes = useProvinceShapes();
v2/src\components\map\ProvinceLabelLayer.tsx:21:  const { lang } = useLang();
v2/src\components\map\ProvinceInfoCard.tsx:3:import { useLang } from "../../store/language";
v2/src\components\map\ProvinceInfoCard.tsx:10:  const { lang, t } = useLang();
v2/src\components\map\ProvinceShapeLayer.tsx:3:import { useProvinceShapes } from "../../hooks/useProvinceShapes";
v2/src\components\map\ProvinceShapeLayer.tsx:7:import { useLang } from "../../store/language";
v2/src\components\map\ProvinceShapeLayer.tsx:78:export default function ProvinceShapeLayer() {
v2/src\components\map\ProvinceShapeLayer.tsx:79:  const shapes = useProvinceShapes();
v2/src\components\map\ProvinceShapeLayer.tsx:80:  const { lang } = useLang();
v2/src\components\map\SpecialRegionMarkers.tsx:4:import { useLang } from "../../store/language";
v2/src\components\map\SpecialRegionMarkers.tsx:13:  const { lang } = useLang();

 succeeded in 535ms:
import { useEffect, useState } from "react";
import { loadProvinceShapes, type ShapeMap } from "../lib/shapes";

export function useProvinceShapes(): ShapeMap | null {
  const [shapes, setShapes] = useState<ShapeMap | null>(null);
  useEffect(() => {
    let cancelled = false;
    loadProvinceShapes()
      .then((data) => {
        if (!cancelled) setShapes(data);
      })
      .catch((error) => {
        console.warn("Province shapes failed to load:", error);
      });
    return () => {
      cancelled = true;
    };
  }, []);
  return shapes;
}

 succeeded in 548ms:
import { useMemo } from "react";
import clsx from "clsx";
import { useProvinceShapes } from "../../hooks/useProvinceShapes";
import { computeFocusTransform, computeUnionViewBox, type ProvinceShape } from "../../lib/shapes";
import { provinceHitAreas } from "../../data/map-sources";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";
import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";

const labelMap = new Map(provinceHitAreas.map((a) => [a.id, a]));

const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";

type ShapeButtonProps = {
  shape: ProvinceShape;
  active: boolean;
  focused: boolean;
  label: string;
  onSelect: () => void;
};

function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
  const dimmed = focused && !active;
  const baseFill = PROVINCE_COLORS[shape.id] ?? DEFAULT_PROVINCE_FILL;

  const fill = !focused
    ? baseFill
    : active
      ? "#70b7a8"
      : `${baseFill}cc`;
  const stroke = !focused
    ? "rgba(78,91,85,0.72)"
    : active
      ? "rgba(23,112,97,1)"
      : "rgba(24,32,29,0.25)";
  const strokeWidth = active ? 2.4 : 0.85;

  return (
    <g
      tabIndex={dimmed ? -1 : 0}
      role="button"
      aria-pressed={active}
      aria-label={label}
      onClick={(event) => {
        event.stopPropagation();
        onSelect();
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      className={clsx(
        "cursor-pointer outline-none transition-opacity duration-300",
        dimmed && "opacity-90"
      )}
      style={{ pointerEvents: "all" }}
    >
      <title>{label}</title>
      {shape.paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          style={{ transition: PATH_TRANSITION }}
        />
      ))}
    </g>
  );
}

export default function ProvinceShapeLayer() {
  const shapes = useProvinceShapes();
  const { lang } = useLang();
  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();

  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);

  const cssTransform = useMemo(() => {
    if (!shapes || !viewBox || !selectedProvinceId) return "translate(0%, 0%) scale(1)";
    const shape = shapes[selectedProvinceId];
    if (!shape) return "translate(0%, 0%) scale(1)";
    const focus = computeFocusTransform(shape, viewBox);
    const txPct = (((focus.scale - 1) * viewBox.x + focus.tx) / viewBox.width) * 100;
    const tyPct = (((focus.scale - 1) * viewBox.y + focus.ty) / viewBox.height) * 100;
    return `translate(${txPct}%, ${tyPct}%) scale(${focus.scale})`;
  }, [shapes, viewBox, selectedProvinceId]);

  if (!shapes || !viewBox) return null;

  const focused = Boolean(selectedProvinceId);
  const vb = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
  const ordered = Object.values(shapes).sort((a, b) =>
    a.id === selectedProvinceId ? 1 : b.id === selectedProvinceId ? -1 : 0
  );

  return (
    <div
      className="absolute inset-0 z-10"
      style={{
        transform: cssTransform,
        transformOrigin: "0 0",
        transition: TRANSITION
      }}
    >
      <svg
        viewBox={vb}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        role="group"
        aria-label="China provinces"
      >
        {ordered.map((shape) => {
          const active = shape.id === selectedProvinceId;
          const label = labelMap.get(shape.id);
          const title = label ? (lang === "zh" ? label.zh : label.en) : shape.name;
          return (
            <ProvinceShapeButton
              key={shape.id}
              shape={shape}
              active={active}
              focused={focused}
              label={title}
              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
            />
          );
        })}
      </svg>
    </div>
  );
}

 succeeded in 525ms:
import { useMemo } from "react";
import { useProvinceShapes } from "../../hooks/useProvinceShapes";
import { computeUnionViewBox } from "../../lib/shapes";
import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";

export default function MapPreview() {
  const shapes = useProvinceShapes();
  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);

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

codex
检索显示除了用户点名的两个位置，`ProvinceLabelLayer` 也直接用这个 hook；签名变更会影响它。我会把它同步到新返回值，但保持它原来的加载/失败时不渲染标签行为。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/src/components/map/ProvinceLabelLayer.tsx'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/src/store/language.ts'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/src/components/map/HeroMap.tsx'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/package.json'" in c:\Users\h\Documents\New project 2
 succeeded in 746ms:
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

 succeeded in 783ms:
import { useMemo } from "react";
import clsx from "clsx";
import { useProvinceShapes } from "../../hooks/useProvinceShapes";
import { computeFocusTransform, computeUnionViewBox } from "../../lib/shapes";
import { provinceHitAreas } from "../../data/map-sources";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";

const labelMap = new Map(provinceHitAreas.map((a) => [a.id, a]));

const TRANSITION =
  "left 700ms cubic-bezier(0.4, 0, 0.2, 1), top 700ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease, font-size 400ms ease";

const HALO = {
  textShadow:
    "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 0 4px rgba(255,255,255,0.85)"
};

export default function ProvinceLabelLayer() {
  const shapes = useProvinceShapes();
  const { lang } = useLang();
  const { selectedProvinceId } = useAtlas();

  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);

  const focus = useMemo(() => {
    if (!shapes || !viewBox || !selectedProvinceId) return { tx: 0, ty: 0, scale: 1 };
    const shape = shapes[selectedProvinceId];
    return shape ? computeFocusTransform(shape, viewBox) : { tx: 0, ty: 0, scale: 1 };
  }, [shapes, viewBox, selectedProvinceId]);

  if (!shapes || !viewBox) return null;

  const focused = Boolean(selectedProvinceId);

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {Object.values(shapes).map((shape) => {
        if (shape.id === "hong-kong" || shape.id === "macau") return null;
        const cx = (shape.bounds.left + shape.bounds.right) / 2;
        const cy = -(shape.bounds.top + shape.bounds.bottom) / 2;
        const zoomedX = cx * focus.scale + focus.tx;
        const zoomedY = cy * focus.scale + focus.ty;
        const leftPct = ((zoomedX - viewBox.x) / viewBox.width) * 100;
        const topPct = ((zoomedY - viewBox.y) / viewBox.height) * 100;
        const active = shape.id === selectedProvinceId;
        const dimmed = focused && !active;
        const label = labelMap.get(shape.id);
        const text = label ? (lang === "zh" ? label.zh : label.en) : shape.name;
        const tiny = shape.id === "hong-kong" || shape.id === "macau";

        return (
          <span
            key={shape.id}
            className={clsx(
              "absolute hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-bold tracking-tight leading-none sm:block",
              active && "rounded-full bg-jade px-2 py-1 text-sm text-white shadow-lg",
              !active && !dimmed && !tiny && "text-[10px] text-ink/85",
              !active && !dimmed && tiny && "text-[8px] text-ink/85",
              dimmed && "opacity-0"
            )}
            style={{
              left: `${leftPct}%`,
              top: `${topPct}%`,
              transition: TRANSITION,
              ...(active ? {} : HALO)
            }}
          >
            {text}
          </span>
        );
      })}
    </div>
  );
}

 succeeded in 841ms:
import { useEffect } from "react";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";
import ProvinceShapeLayer from "./ProvinceShapeLayer";
import ProvinceLabelLayer from "./ProvinceLabelLayer";
import ProvinceInfoCard from "./ProvinceInfoCard";
import Province3DOverlay from "./Province3DOverlay";
import SpecialRegionMarkers from "./SpecialRegionMarkers";
import ProvinceHitAreaLayer from "./ProvinceHitAreaLayer";

export default function HeroMap() {
  const { lang } = useLang();
  const { selectedProvinceId, province, is3DEnabled, reset } = useAtlas();
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
          <ProvinceShapeLayer />
          <ProvinceLabelLayer />
          <ProvinceHitAreaLayer />
          <SpecialRegionMarkers />
          <ProvinceInfoCard />
          <Province3DOverlay />
        </div>
        {focused && !is3DEnabled && (
          <button
            type="button"
            onClick={reset}
            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
          >
            {lang === "zh" ? "閲嶇疆" : "Reset"}
          </button>
        )}
      </div>
    </section>
  );
}

 succeeded in 856ms:
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

codex
我现在改 hook 为显式 `{ shapes, error }` 状态，并在两个可见地图层上加居中的错误文案；标签层只解构 `shapes`，失败时继续不渲染，避免重复提示。
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\map\MapPreview.tsx
c:\Users\h\Documents\New project 2\v2\src\components\map\ProvinceLabelLayer.tsx
c:\Users\h\Documents\New project 2\v2\src\components\map\ProvinceShapeLayer.tsx
c:\Users\h\Documents\New project 2\v2\src\hooks\useProvinceShapes.ts
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 8cc2adeee74b30afc5ab8cc421e0d3a47d718236..9a43cf53f59f0c057456836db02cccc440b91e29
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -1,15 +1,27 @@
-import { useMemo } from "react";
-import { useProvinceShapes } from "../../hooks/useProvinceShapes";
-import { computeUnionViewBox } from "../../lib/shapes";
-import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
-
-export default function MapPreview() {
-  const shapes = useProvinceShapes();
-  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
-
-  if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
-  }
+import { useMemo } from "react";
+import { useProvinceShapes } from "../../hooks/useProvinceShapes";
+import { computeUnionViewBox } from "../../lib/shapes";
+import { useLang } from "../../store/language";
+import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
+
+export default function MapPreview() {
+  const { shapes, error } = useProvinceShapes();
+  const { lang } = useLang();
+  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
+
+  if (error) {
+    return (
+      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
+  if (!shapes || !viewBox) {
+    return <div className="h-full w-full bg-white/70" />;
+  }
 
   return (
     <svg
diff --git a/v2/src/components/map/ProvinceLabelLayer.tsx b/v2/src/components/map/ProvinceLabelLayer.tsx
index eb9ed77e76333b669927236630e41bf4a89c8c1d..fec25d9b5b6aadbbee6ea16912cb46f7b4cd2a7c
--- a/v2/src/components/map/ProvinceLabelLayer.tsx
+++ b/v2/src/components/map/ProvinceLabelLayer.tsx
@@ -16,9 +16,9 @@
     "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 0 4px rgba(255,255,255,0.85)"
 };
 
-export default function ProvinceLabelLayer() {
-  const shapes = useProvinceShapes();
-  const { lang } = useLang();
+export default function ProvinceLabelLayer() {
+  const { shapes } = useProvinceShapes();
+  const { lang } = useLang();
   const { selectedProvinceId } = useAtlas();
 
   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index 1f2a4c90ea50b18f505f0636a46bc627e7e8732e..bba147bc2cd871ef03c9e185d8f43ec242ba11ed
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -75,10 +75,10 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
-  const shapes = useProvinceShapes();
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
+export default function ProvinceShapeLayer() {
+  const { shapes, error } = useProvinceShapes();
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
 
   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
 
@@ -92,7 +92,17 @@
     return `translate(${txPct}%, ${tyPct}%) scale(${focus.scale})`;
   }, [shapes, viewBox, selectedProvinceId]);
 
-  if (!shapes || !viewBox) return null;
+  if (error) {
+    return (
+      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
+  if (!shapes || !viewBox) return null;
 
   const focused = Boolean(selectedProvinceId);
   const vb = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
diff --git a/v2/src/hooks/useProvinceShapes.ts b/v2/src/hooks/useProvinceShapes.ts
index b7705d2761e5478b6d979cfecfc4841663be92b5..2d2156439a313d028447b8568e94f5e1527d771a
--- a/v2/src/hooks/useProvinceShapes.ts
+++ b/v2/src/hooks/useProvinceShapes.ts
@@ -1,20 +1,34 @@
 import { useEffect, useState } from "react";
 import { loadProvinceShapes, type ShapeMap } from "../lib/shapes";
 
-export function useProvinceShapes(): ShapeMap | null {
-  const [shapes, setShapes] = useState<ShapeMap | null>(null);
+export type ProvinceShapesState = {
+  shapes: ShapeMap | null;
+  error: Error | null;
+};
+
+export function useProvinceShapes(): ProvinceShapesState {
+  const [state, setState] = useState<ProvinceShapesState>({
+    shapes: null,
+    error: null
+  });
+
   useEffect(() => {
     let cancelled = false;
     loadProvinceShapes()
       .then((data) => {
-        if (!cancelled) setShapes(data);
+        if (!cancelled) setState({ shapes: data, error: null });
       })
       .catch((error) => {
-        console.warn("Province shapes failed to load:", error);
+        if (cancelled) return;
+        const loadError = error instanceof Error ? error : new Error(String(error));
+        console.warn("Province shapes failed to load:", loadError);
+        setState({ shapes: null, error: loadError });
       });
+
     return () => {
       cancelled = true;
     };
   }, []);
-  return shapes;
+
+  return state;
 }

diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 8cc2adeee74b30afc5ab8cc421e0d3a47d718236..9a43cf53f59f0c057456836db02cccc440b91e29
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -1,15 +1,27 @@
-import { useMemo } from "react";
-import { useProvinceShapes } from "../../hooks/useProvinceShapes";
-import { computeUnionViewBox } from "../../lib/shapes";
-import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
-
-export default function MapPreview() {
-  const shapes = useProvinceShapes();
-  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
-
-  if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
-  }
+import { useMemo } from "react";
+import { useProvinceShapes } from "../../hooks/useProvinceShapes";
+import { computeUnionViewBox } from "../../lib/shapes";
+import { useLang } from "../../store/language";
+import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
+
+export default function MapPreview() {
+  const { shapes, error } = useProvinceShapes();
+  const { lang } = useLang();
+  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
+
+  if (error) {
+    return (
+      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
+  if (!shapes || !viewBox) {
+    return <div className="h-full w-full bg-white/70" />;
+  }
 
   return (
     <svg
diff --git a/v2/src/components/map/ProvinceLabelLayer.tsx b/v2/src/components/map/ProvinceLabelLayer.tsx
index eb9ed77e76333b669927236630e41bf4a89c8c1d..fec25d9b5b6aadbbee6ea16912cb46f7b4cd2a7c
--- a/v2/src/components/map/ProvinceLabelLayer.tsx
+++ b/v2/src/components/map/ProvinceLabelLayer.tsx
@@ -16,9 +16,9 @@
     "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 0 4px rgba(255,255,255,0.85)"
 };
 
-export default function ProvinceLabelLayer() {
-  const shapes = useProvinceShapes();
-  const { lang } = useLang();
+export default function ProvinceLabelLayer() {
+  const { shapes } = useProvinceShapes();
+  const { lang } = useLang();
   const { selectedProvinceId } = useAtlas();
 
   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index 1f2a4c90ea50b18f505f0636a46bc627e7e8732e..bba147bc2cd871ef03c9e185d8f43ec242ba11ed
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -75,10 +75,10 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
-  const shapes = useProvinceShapes();
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
+export default function ProvinceShapeLayer() {
+  const { shapes, error } = useProvinceShapes();
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
 
   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
 
@@ -92,7 +92,17 @@
     return `translate(${txPct}%, ${tyPct}%) scale(${focus.scale})`;
   }, [shapes, viewBox, selectedProvinceId]);
 
-  if (!shapes || !viewBox) return null;
+  if (error) {
+    return (
+      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
+  if (!shapes || !viewBox) return null;
 
   const focused = Boolean(selectedProvinceId);
   const vb = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
diff --git a/v2/src/hooks/useProvinceShapes.ts b/v2/src/hooks/useProvinceShapes.ts
index b7705d2761e5478b6d979cfecfc4841663be92b5..2d2156439a313d028447b8568e94f5e1527d771a
--- a/v2/src/hooks/useProvinceShapes.ts
+++ b/v2/src/hooks/useProvinceShapes.ts
@@ -1,20 +1,34 @@
 import { useEffect, useState } from "react";
 import { loadProvinceShapes, type ShapeMap } from "../lib/shapes";
 
-export function useProvinceShapes(): ShapeMap | null {
-  const [shapes, setShapes] = useState<ShapeMap | null>(null);
+export type ProvinceShapesState = {
+  shapes: ShapeMap | null;
+  error: Error | null;
+};
+
+export function useProvinceShapes(): ProvinceShapesState {
+  const [state, setState] = useState<ProvinceShapesState>({
+    shapes: null,
+    error: null
+  });
+
   useEffect(() => {
     let cancelled = false;
     loadProvinceShapes()
       .then((data) => {
-        if (!cancelled) setShapes(data);
+        if (!cancelled) setState({ shapes: data, error: null });
       })
       .catch((error) => {
-        console.warn("Province shapes failed to load:", error);
+        if (cancelled) return;
+        const loadError = error instanceof Error ? error : new Error(String(error));
+        console.warn("Province shapes failed to load:", loadError);
+        setState({ shapes: null, error: loadError });
       });
+
     return () => {
       cancelled = true;
     };
   }, []);
-  return shapes;
+
+  return state;
 }

codex
代码已改完。下一步先跑 `npx tsc --noEmit`，再跑项目构建；如果类型检查暴露其他调用点，我会就地修掉。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
 succeeded in 1407ms:
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 8cc2adeee74b30afc5ab8cc421e0d3a47d718236..9a43cf53f59f0c057456836db02cccc440b91e29
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -1,15 +1,27 @@
-import { useMemo } from "react";
-import { useProvinceShapes } from "../../hooks/useProvinceShapes";
-import { computeUnionViewBox } from "../../lib/shapes";
-import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
-
-export default function MapPreview() {
-  const shapes = useProvinceShapes();
-  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
-
-  if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
-  }
+import { useMemo } from "react";
+import { useProvinceShapes } from "../../hooks/useProvinceShapes";
+import { computeUnionViewBox } from "../../lib/shapes";
+import { useLang } from "../../store/language";
+import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
+
+export default function MapPreview() {
+  const { shapes, error } = useProvinceShapes();
+  const { lang } = useLang();
+  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
+
+  if (error) {
+    return (
+      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
+  if (!shapes || !viewBox) {
+    return <div className="h-full w-full bg-white/70" />;
+  }
 
   return (
     <svg
diff --git a/v2/src/components/map/ProvinceLabelLayer.tsx b/v2/src/components/map/ProvinceLabelLayer.tsx
index eb9ed77e76333b669927236630e41bf4a89c8c1d..fec25d9b5b6aadbbee6ea16912cb46f7b4cd2a7c
--- a/v2/src/components/map/ProvinceLabelLayer.tsx
+++ b/v2/src/components/map/ProvinceLabelLayer.tsx
@@ -16,9 +16,9 @@
     "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 0 4px rgba(255,255,255,0.85)"
 };
 
-export default function ProvinceLabelLayer() {
-  const shapes = useProvinceShapes();
-  const { lang } = useLang();
+export default function ProvinceLabelLayer() {
+  const { shapes } = useProvinceShapes();
+  const { lang } = useLang();
   const { selectedProvinceId } = useAtlas();
 
   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index 1f2a4c90ea50b18f505f0636a46bc627e7e8732e..bba147bc2cd871ef03c9e185d8f43ec242ba11ed
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -75,10 +75,10 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
-  const shapes = useProvinceShapes();
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
+export default function ProvinceShapeLayer() {
+  const { shapes, error } = useProvinceShapes();
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
 
   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
 
@@ -92,7 +92,17 @@
     return `translate(${txPct}%, ${tyPct}%) scale(${focus.scale})`;
   }, [shapes, viewBox, selectedProvinceId]);
 
-  if (!shapes || !viewBox) return null;
+  if (error) {
+    return (
+      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
+  if (!shapes || !viewBox) return null;
 
   const focused = Boolean(selectedProvinceId);
   const vb = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
diff --git a/v2/src/hooks/useProvinceShapes.ts b/v2/src/hooks/useProvinceShapes.ts
index b7705d2761e5478b6d979cfecfc4841663be92b5..2d2156439a313d028447b8568e94f5e1527d771a
--- a/v2/src/hooks/useProvinceShapes.ts
+++ b/v2/src/hooks/useProvinceShapes.ts
@@ -1,20 +1,34 @@
 import { useEffect, useState } from "react";
 import { loadProvinceShapes, type ShapeMap } from "../lib/shapes";
 
-export function useProvinceShapes(): ShapeMap | null {
-  const [shapes, setShapes] = useState<ShapeMap | null>(null);
+export type ProvinceShapesState = {
+  shapes: ShapeMap | null;
+  error: Error | null;
+};
+
+export function useProvinceShapes(): ProvinceShapesState {
+  const [state, setState] = useState<ProvinceShapesState>({
+    shapes: null,
+    error: null
+  });
+
   useEffect(() => {
     let cancelled = false;
     loadProvinceShapes()
       .then((data) => {
-        if (!cancelled) setShapes(data);
+        if (!cancelled) setState({ shapes: data, error: null });
       })
       .catch((error) => {
-        console.warn("Province shapes failed to load:", error);
+        if (cancelled) return;
+        const loadError = error instanceof Error ? error : new Error(String(error));
+        console.warn("Province shapes failed to load:", loadError);
+        setState({ shapes: null, error: loadError });
       });
+
     return () => {
       cancelled = true;
     };
   }, []);
-  return shapes;
+
+  return state;
 }

codex
类型检查已经 0 error。现在跑 `npm run build` 验证 React Router/Vite 构建路径。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 9097ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1503 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                     6.03 kB │ gzip:     0.93 kB
build/client/assets/Map3D-B9DDZdqH.css              24.01 kB │ gzip:     5.37 kB
build/client/assets/root-YlTXKvZy.css               41.51 kB │ gzip:     7.82 kB
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
build/client/assets/root-DboRpKp4.js                 9.47 kB │ gzip:     4.57 kB
build/client/assets/GuidePage-CZq-6qwa.js           10.80 kB │ gzip:     5.11 kB
build/client/assets/MapPage-B4ODkRfd.js             11.74 kB │ gzip:     4.31 kB
build/client/assets/practical-other-Bpl292H6.js     22.32 kB │ gzip:    10.76 kB
build/client/assets/atlas-B_AAPFrX.js               23.18 kB │ gzip:     9.54 kB
build/client/assets/SourcesPage-9HAp8EoC.js         32.19 kB │ gzip:     8.46 kB
build/client/assets/transport-DZFQFqdz.js           34.86 kB │ gzip:    15.24 kB
build/client/assets/SourcesNote-Dc56Qloe.js         39.01 kB │ gzip:    14.91 kB
build/client/assets/CityPage-DjIxpOcJ.js            52.17 kB │ gzip:    19.45 kB
build/client/assets/jsx-runtime-CnbWJCR4.js        127.16 kB │ gzip:    41.93 kB
build/client/assets/entry.client-CQ10Nt2o.js       186.53 kB │ gzip:    58.89 kB
build/client/assets/Cesium-CsldJg6P.js           4,724.63 kB │ gzip: 1,304.40 kB

[32m✓ built in 5.07s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 66 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m
[2mbuild\server\assets\server-build-YlTXKvZy.css[22m

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
build/server/assets/server-build-YlTXKvZy.css   41.51 kB │ gzip:  7.82 kB
build/server/assets/Map3D-BaGBNPwJ.js           15.47 kB │ gzip:  5.32 kB
build/server/assets/cityRoutes-BO_Rh2Z3.js      31.31 kB │ gzip: 10.67 kB
build/server/index.js                          310.22 kB │ gzip: 97.25 kB

[32m✓ built in 553ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m

diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 8cc2adeee74b30afc5ab8cc421e0d3a47d718236..9a43cf53f59f0c057456836db02cccc440b91e29
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -1,15 +1,27 @@
-import { useMemo } from "react";
-import { useProvinceShapes } from "../../hooks/useProvinceShapes";
-import { computeUnionViewBox } from "../../lib/shapes";
-import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
-
-export default function MapPreview() {
-  const shapes = useProvinceShapes();
-  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
-
-  if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
-  }
+import { useMemo } from "react";
+import { useProvinceShapes } from "../../hooks/useProvinceShapes";
+import { computeUnionViewBox } from "../../lib/shapes";
+import { useLang } from "../../store/language";
+import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
+
+export default function MapPreview() {
+  const { shapes, error } = useProvinceShapes();
+  const { lang } = useLang();
+  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
+
+  if (error) {
+    return (
+      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
+  if (!shapes || !viewBox) {
+    return <div className="h-full w-full bg-white/70" />;
+  }
 
   return (
     <svg
diff --git a/v2/src/components/map/ProvinceLabelLayer.tsx b/v2/src/components/map/ProvinceLabelLayer.tsx
index eb9ed77e76333b669927236630e41bf4a89c8c1d..fec25d9b5b6aadbbee6ea16912cb46f7b4cd2a7c
--- a/v2/src/components/map/ProvinceLabelLayer.tsx
+++ b/v2/src/components/map/ProvinceLabelLayer.tsx
@@ -16,9 +16,9 @@
     "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 0 4px rgba(255,255,255,0.85)"
 };
 
-export default function ProvinceLabelLayer() {
-  const shapes = useProvinceShapes();
-  const { lang } = useLang();
+export default function ProvinceLabelLayer() {
+  const { shapes } = useProvinceShapes();
+  const { lang } = useLang();
   const { selectedProvinceId } = useAtlas();
 
   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index 1f2a4c90ea50b18f505f0636a46bc627e7e8732e..bba147bc2cd871ef03c9e185d8f43ec242ba11ed
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -75,10 +75,10 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
-  const shapes = useProvinceShapes();
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
+export default function ProvinceShapeLayer() {
+  const { shapes, error } = useProvinceShapes();
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
 
   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
 
@@ -92,7 +92,17 @@
     return `translate(${txPct}%, ${tyPct}%) scale(${focus.scale})`;
   }, [shapes, viewBox, selectedProvinceId]);
 
-  if (!shapes || !viewBox) return null;
+  if (error) {
+    return (
+      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
+  if (!shapes || !viewBox) return null;
 
   const focused = Boolean(selectedProvinceId);
   const vb = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
diff --git a/v2/src/hooks/useProvinceShapes.ts b/v2/src/hooks/useProvinceShapes.ts
index b7705d2761e5478b6d979cfecfc4841663be92b5..2d2156439a313d028447b8568e94f5e1527d771a
--- a/v2/src/hooks/useProvinceShapes.ts
+++ b/v2/src/hooks/useProvinceShapes.ts
@@ -1,20 +1,34 @@
 import { useEffect, useState } from "react";
 import { loadProvinceShapes, type ShapeMap } from "../lib/shapes";
 
-export function useProvinceShapes(): ShapeMap | null {
-  const [shapes, setShapes] = useState<ShapeMap | null>(null);
+export type ProvinceShapesState = {
+  shapes: ShapeMap | null;
+  error: Error | null;
+};
+
+export function useProvinceShapes(): ProvinceShapesState {
+  const [state, setState] = useState<ProvinceShapesState>({
+    shapes: null,
+    error: null
+  });
+
   useEffect(() => {
     let cancelled = false;
     loadProvinceShapes()
       .then((data) => {
-        if (!cancelled) setShapes(data);
+        if (!cancelled) setState({ shapes: data, error: null });
       })
       .catch((error) => {
-        console.warn("Province shapes failed to load:", error);
+        if (cancelled) return;
+        const loadError = error instanceof Error ? error : new Error(String(error));
+        console.warn("Province shapes failed to load:", loadError);
+        setState({ shapes: null, error: loadError });
       });
+
     return () => {
       cancelled = true;
     };
   }, []);
-  return shapes;
+
+  return state;
 }

codex
构建也通过了，只剩 Vite 的 chunk size warning，不是错误。最后我看一下 diff，确认只改了这次任务相关文件。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git diff -- v2/src/hooks/useProvinceShapes.ts v2/src/components/map/ProvinceShapeLayer.tsx v2/src/components/map/MapPreview.tsx v2/src/components/map/ProvinceLabelLayer.tsx' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short' in c:\Users\h\Documents\New project 2
 succeeded in 612ms:
 M v2/src/components/map/MapPreview.tsx
 M v2/src/components/map/Province3DOverlay.tsx
 M v2/src/components/map/ProvinceLabelLayer.tsx
 M v2/src/components/map/ProvinceShapeLayer.tsx
 M v2/src/hooks/useProvinceShapes.ts
 M v2/src/pages/HomePage.tsx
?? .omc/artifacts/ask/codex-v2-workdir-edit-build-v2-src-components-map-provinceshapelay-2026-05-12T03-06-16-558Z.md
?? v2/src/components/common/MapErrorBoundary.tsx

 succeeded in 625ms:
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 8cc2ade..9a43cf5 100644
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -1,12 +1,24 @@
 import { useMemo } from "react";
 import { useProvinceShapes } from "../../hooks/useProvinceShapes";
 import { computeUnionViewBox } from "../../lib/shapes";
+import { useLang } from "../../store/language";
 import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
 
 export default function MapPreview() {
-  const shapes = useProvinceShapes();
+  const { shapes, error } = useProvinceShapes();
+  const { lang } = useLang();
   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
 
+  if (error) {
+    return (
+      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
   if (!shapes || !viewBox) {
     return <div className="h-full w-full bg-white/70" />;
   }
diff --git a/v2/src/components/map/ProvinceLabelLayer.tsx b/v2/src/components/map/ProvinceLabelLayer.tsx
index eb9ed77..fec25d9 100644
--- a/v2/src/components/map/ProvinceLabelLayer.tsx
+++ b/v2/src/components/map/ProvinceLabelLayer.tsx
@@ -17,7 +17,7 @@ const HALO = {
 };
 
 export default function ProvinceLabelLayer() {
-  const shapes = useProvinceShapes();
+  const { shapes } = useProvinceShapes();
   const { lang } = useLang();
   const { selectedProvinceId } = useAtlas();
 
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index 7323046..bba147b 100644
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -53,7 +53,7 @@ function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeB
         }
       }}
       className={clsx(
-        "cursor-pointer outline-none transition-opacity duration-300",
+        "cursor-pointer outline-none transition-opacity duration-300 focus-visible:[&>path]:fill-jade-soft focus-visible:[&>path]:stroke-jade focus-visible:[&>path]:[stroke-width:2.8]",
         dimmed && "opacity-90"
       )}
       style={{ pointerEvents: "all" }}
@@ -76,7 +76,7 @@ function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeB
 }
 
 export default function ProvinceShapeLayer() {
-  const shapes = useProvinceShapes();
+  const { shapes, error } = useProvinceShapes();
   const { lang } = useLang();
   const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
 
@@ -92,6 +92,16 @@ export default function ProvinceShapeLayer() {
     return `translate(${txPct}%, ${tyPct}%) scale(${focus.scale})`;
   }, [shapes, viewBox, selectedProvinceId]);
 
+  if (error) {
+    return (
+      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
   if (!shapes || !viewBox) return null;
 
   const focused = Boolean(selectedProvinceId);
diff --git a/v2/src/hooks/useProvinceShapes.ts b/v2/src/hooks/useProvinceShapes.ts
index b7705d2..2d21564 100644
--- a/v2/src/hooks/useProvinceShapes.ts
+++ b/v2/src/hooks/useProvinceShapes.ts
@@ -1,20 +1,34 @@
 import { useEffect, useState } from "react";
 import { loadProvinceShapes, type ShapeMap } from "../lib/shapes";
 
-export function useProvinceShapes(): ShapeMap | null {
-  const [shapes, setShapes] = useState<ShapeMap | null>(null);
+export type ProvinceShapesState = {
+  shapes: ShapeMap | null;
+  error: Error | null;
+};
+
+export function useProvinceShapes(): ProvinceShapesState {
+  const [state, setState] = useState<ProvinceShapesState>({
+    shapes: null,
+    error: null
+  });
+
   useEffect(() => {
     let cancelled = false;
     loadProvinceShapes()
       .then((data) => {
-        if (!cancelled) setShapes(data);
+        if (!cancelled) setState({ shapes: data, error: null });
       })
       .catch((error) => {
-        console.warn("Province shapes failed to load:", error);
+        if (cancelled) return;
+        const loadError = error instanceof Error ? error : new Error(String(error));
+        console.warn("Province shapes failed to load:", loadError);
+        setState({ shapes: null, error: loadError });
       });
+
     return () => {
       cancelled = true;
     };
   }, []);
-  return shapes;
+
+  return state;
 }
warning: in the working copy of 'v2/src/components/map/MapPreview.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/map/ProvinceLabelLayer.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/components/map/ProvinceShapeLayer.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'v2/src/hooks/useProvinceShapes.ts', LF will be replaced by CRLF the next time Git touches it

diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 8cc2adeee74b30afc5ab8cc421e0d3a47d718236..9a43cf53f59f0c057456836db02cccc440b91e29
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -1,15 +1,27 @@
-import { useMemo } from "react";
-import { useProvinceShapes } from "../../hooks/useProvinceShapes";
-import { computeUnionViewBox } from "../../lib/shapes";
-import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
-
-export default function MapPreview() {
-  const shapes = useProvinceShapes();
-  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
-
-  if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
-  }
+import { useMemo } from "react";
+import { useProvinceShapes } from "../../hooks/useProvinceShapes";
+import { computeUnionViewBox } from "../../lib/shapes";
+import { useLang } from "../../store/language";
+import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
+
+export default function MapPreview() {
+  const { shapes, error } = useProvinceShapes();
+  const { lang } = useLang();
+  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
+
+  if (error) {
+    return (
+      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
+  if (!shapes || !viewBox) {
+    return <div className="h-full w-full bg-white/70" />;
+  }
 
   return (
     <svg
diff --git a/v2/src/components/map/ProvinceLabelLayer.tsx b/v2/src/components/map/ProvinceLabelLayer.tsx
index eb9ed77e76333b669927236630e41bf4a89c8c1d..fec25d9b5b6aadbbee6ea16912cb46f7b4cd2a7c
--- a/v2/src/components/map/ProvinceLabelLayer.tsx
+++ b/v2/src/components/map/ProvinceLabelLayer.tsx
@@ -16,9 +16,9 @@
     "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 0 4px rgba(255,255,255,0.85)"
 };
 
-export default function ProvinceLabelLayer() {
-  const shapes = useProvinceShapes();
-  const { lang } = useLang();
+export default function ProvinceLabelLayer() {
+  const { shapes } = useProvinceShapes();
+  const { lang } = useLang();
   const { selectedProvinceId } = useAtlas();
 
   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index 1f2a4c90ea50b18f505f0636a46bc627e7e8732e..bba147bc2cd871ef03c9e185d8f43ec242ba11ed
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -75,10 +75,10 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
-  const shapes = useProvinceShapes();
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
+export default function ProvinceShapeLayer() {
+  const { shapes, error } = useProvinceShapes();
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
 
   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
 
@@ -92,7 +92,17 @@
     return `translate(${txPct}%, ${tyPct}%) scale(${focus.scale})`;
   }, [shapes, viewBox, selectedProvinceId]);
 
-  if (!shapes || !viewBox) return null;
+  if (error) {
+    return (
+      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
+  if (!shapes || !viewBox) return null;
 
   const focused = Boolean(selectedProvinceId);
   const vb = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
diff --git a/v2/src/hooks/useProvinceShapes.ts b/v2/src/hooks/useProvinceShapes.ts
index b7705d2761e5478b6d979cfecfc4841663be92b5..2d2156439a313d028447b8568e94f5e1527d771a
--- a/v2/src/hooks/useProvinceShapes.ts
+++ b/v2/src/hooks/useProvinceShapes.ts
@@ -1,20 +1,34 @@
 import { useEffect, useState } from "react";
 import { loadProvinceShapes, type ShapeMap } from "../lib/shapes";
 
-export function useProvinceShapes(): ShapeMap | null {
-  const [shapes, setShapes] = useState<ShapeMap | null>(null);
+export type ProvinceShapesState = {
+  shapes: ShapeMap | null;
+  error: Error | null;
+};
+
+export function useProvinceShapes(): ProvinceShapesState {
+  const [state, setState] = useState<ProvinceShapesState>({
+    shapes: null,
+    error: null
+  });
+
   useEffect(() => {
     let cancelled = false;
     loadProvinceShapes()
       .then((data) => {
-        if (!cancelled) setShapes(data);
+        if (!cancelled) setState({ shapes: data, error: null });
       })
       .catch((error) => {
-        console.warn("Province shapes failed to load:", error);
+        if (cancelled) return;
+        const loadError = error instanceof Error ? error : new Error(String(error));
+        console.warn("Province shapes failed to load:", loadError);
+        setState({ shapes: null, error: loadError });
       });
+
     return () => {
       cancelled = true;
     };
   }, []);
-  return shapes;
+
+  return state;
 }

codex
`git status` 里有几处既有未提交/未跟踪文件，不全是这次变更；我会只按本任务结果汇报，不回滚这些内容。现在确认一下相关文件最终内容。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/src/components/map/ProvinceShapeLayer.tsx'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/src/hooks/useProvinceShapes.ts'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path 'v2/src/components/map/MapPreview.tsx'" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"const \\{ shapes|useProvinceShapes\\(\\)\" v2/src" in c:\Users\h\Documents\New project 2
 succeeded in 718ms:
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

 succeeded in 741ms:
import { useMemo } from "react";
import clsx from "clsx";
import { useProvinceShapes } from "../../hooks/useProvinceShapes";
import { computeFocusTransform, computeUnionViewBox, type ProvinceShape } from "../../lib/shapes";
import { provinceHitAreas } from "../../data/map-sources";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";
import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";

const labelMap = new Map(provinceHitAreas.map((a) => [a.id, a]));

const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";

type ShapeButtonProps = {
  shape: ProvinceShape;
  active: boolean;
  focused: boolean;
  label: string;
  onSelect: () => void;
};

function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
  const dimmed = focused && !active;
  const baseFill = PROVINCE_COLORS[shape.id] ?? DEFAULT_PROVINCE_FILL;

  const fill = !focused
    ? baseFill
    : active
      ? "#70b7a8"
      : `${baseFill}cc`;
  const stroke = !focused
    ? "rgba(78,91,85,0.72)"
    : active
      ? "rgba(23,112,97,1)"
      : "rgba(24,32,29,0.25)";
  const strokeWidth = active ? 2.4 : 0.85;

  return (
    <g
      tabIndex={dimmed ? -1 : 0}
      role="button"
      aria-pressed={active}
      aria-label={label}
      onClick={(event) => {
        event.stopPropagation();
        onSelect();
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      className={clsx(
        "cursor-pointer outline-none transition-opacity duration-300 focus-visible:[&>path]:fill-jade-soft focus-visible:[&>path]:stroke-jade focus-visible:[&>path]:[stroke-width:2.8]",
        dimmed && "opacity-90"
      )}
      style={{ pointerEvents: "all" }}
    >
      <title>{label}</title>
      {shape.paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          style={{ transition: PATH_TRANSITION }}
        />
      ))}
    </g>
  );
}

export default function ProvinceShapeLayer() {
  const { shapes, error } = useProvinceShapes();
  const { lang } = useLang();
  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();

  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);

  const cssTransform = useMemo(() => {
    if (!shapes || !viewBox || !selectedProvinceId) return "translate(0%, 0%) scale(1)";
    const shape = shapes[selectedProvinceId];
    if (!shape) return "translate(0%, 0%) scale(1)";
    const focus = computeFocusTransform(shape, viewBox);
    const txPct = (((focus.scale - 1) * viewBox.x + focus.tx) / viewBox.width) * 100;
    const tyPct = (((focus.scale - 1) * viewBox.y + focus.ty) / viewBox.height) * 100;
    return `translate(${txPct}%, ${tyPct}%) scale(${focus.scale})`;
  }, [shapes, viewBox, selectedProvinceId]);

  if (error) {
    return (
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm font-semibold text-ink/70">
        {lang === "zh"
          ? "鍦板浘杞粨鍔犺浇澶辫触锛屽埛鏂伴噸璇曘€?
          : "Map outline failed to load. Refresh to retry."}
      </div>
    );
  }

  if (!shapes || !viewBox) return null;

  const focused = Boolean(selectedProvinceId);
  const vb = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
  const ordered = Object.values(shapes).sort((a, b) =>
    a.id === selectedProvinceId ? 1 : b.id === selectedProvinceId ? -1 : 0
  );

  return (
    <div
      className="absolute inset-0 z-10"
      style={{
        transform: cssTransform,
        transformOrigin: "0 0",
        transition: TRANSITION
      }}
    >
      <svg
        viewBox={vb}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        role="group"
        aria-label="China provinces"
      >
        {ordered.map((shape) => {
          const active = shape.id === selectedProvinceId;
          const label = labelMap.get(shape.id);
          const title = label ? (lang === "zh" ? label.zh : label.en) : shape.name;
          return (
            <ProvinceShapeButton
              key={shape.id}
              shape={shape}
              active={active}
              focused={focused}
              label={title}
              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
            />
          );
        })}
      </svg>
    </div>
  );
}

 succeeded in 735ms:
v2/src\hooks\useProvinceShapes.ts:9:export function useProvinceShapes(): ProvinceShapesState {
v2/src\components\map\MapPreview.tsx:8:  const { shapes, error } = useProvinceShapes();
v2/src\components\map\ProvinceLabelLayer.tsx:20:  const { shapes } = useProvinceShapes();
v2/src\components\map\ProvinceShapeLayer.tsx:79:  const { shapes, error } = useProvinceShapes();

 succeeded in 756ms:
import { useEffect, useState } from "react";
import { loadProvinceShapes, type ShapeMap } from "../lib/shapes";

export type ProvinceShapesState = {
  shapes: ShapeMap | null;
  error: Error | null;
};

export function useProvinceShapes(): ProvinceShapesState {
  const [state, setState] = useState<ProvinceShapesState>({
    shapes: null,
    error: null
  });

  useEffect(() => {
    let cancelled = false;
    loadProvinceShapes()
      .then((data) => {
        if (!cancelled) setState({ shapes: data, error: null });
      })
      .catch((error) => {
        if (cancelled) return;
        const loadError = error instanceof Error ? error : new Error(String(error));
        console.warn("Province shapes failed to load:", loadError);
        setState({ shapes: null, error: loadError });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}

diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 8cc2adeee74b30afc5ab8cc421e0d3a47d718236..9a43cf53f59f0c057456836db02cccc440b91e29
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -1,15 +1,27 @@
-import { useMemo } from "react";
-import { useProvinceShapes } from "../../hooks/useProvinceShapes";
-import { computeUnionViewBox } from "../../lib/shapes";
-import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
-
-export default function MapPreview() {
-  const shapes = useProvinceShapes();
-  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
-
-  if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
-  }
+import { useMemo } from "react";
+import { useProvinceShapes } from "../../hooks/useProvinceShapes";
+import { computeUnionViewBox } from "../../lib/shapes";
+import { useLang } from "../../store/language";
+import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
+
+export default function MapPreview() {
+  const { shapes, error } = useProvinceShapes();
+  const { lang } = useLang();
+  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
+
+  if (error) {
+    return (
+      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
+  if (!shapes || !viewBox) {
+    return <div className="h-full w-full bg-white/70" />;
+  }
 
   return (
     <svg
diff --git a/v2/src/components/map/ProvinceLabelLayer.tsx b/v2/src/components/map/ProvinceLabelLayer.tsx
index eb9ed77e76333b669927236630e41bf4a89c8c1d..fec25d9b5b6aadbbee6ea16912cb46f7b4cd2a7c
--- a/v2/src/components/map/ProvinceLabelLayer.tsx
+++ b/v2/src/components/map/ProvinceLabelLayer.tsx
@@ -16,9 +16,9 @@
     "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 0 4px rgba(255,255,255,0.85)"
 };
 
-export default function ProvinceLabelLayer() {
-  const shapes = useProvinceShapes();
-  const { lang } = useLang();
+export default function ProvinceLabelLayer() {
+  const { shapes } = useProvinceShapes();
+  const { lang } = useLang();
   const { selectedProvinceId } = useAtlas();
 
   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index 1f2a4c90ea50b18f505f0636a46bc627e7e8732e..bba147bc2cd871ef03c9e185d8f43ec242ba11ed
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -75,10 +75,10 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
-  const shapes = useProvinceShapes();
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
+export default function ProvinceShapeLayer() {
+  const { shapes, error } = useProvinceShapes();
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
 
   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
 
@@ -92,7 +92,17 @@
     return `translate(${txPct}%, ${tyPct}%) scale(${focus.scale})`;
   }, [shapes, viewBox, selectedProvinceId]);
 
-  if (!shapes || !viewBox) return null;
+  if (error) {
+    return (
+      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
+  if (!shapes || !viewBox) return null;
 
   const focused = Boolean(selectedProvinceId);
   const vb = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
diff --git a/v2/src/hooks/useProvinceShapes.ts b/v2/src/hooks/useProvinceShapes.ts
index b7705d2761e5478b6d979cfecfc4841663be92b5..2d2156439a313d028447b8568e94f5e1527d771a
--- a/v2/src/hooks/useProvinceShapes.ts
+++ b/v2/src/hooks/useProvinceShapes.ts
@@ -1,20 +1,34 @@
 import { useEffect, useState } from "react";
 import { loadProvinceShapes, type ShapeMap } from "../lib/shapes";
 
-export function useProvinceShapes(): ShapeMap | null {
-  const [shapes, setShapes] = useState<ShapeMap | null>(null);
+export type ProvinceShapesState = {
+  shapes: ShapeMap | null;
+  error: Error | null;
+};
+
+export function useProvinceShapes(): ProvinceShapesState {
+  const [state, setState] = useState<ProvinceShapesState>({
+    shapes: null,
+    error: null
+  });
+
   useEffect(() => {
     let cancelled = false;
     loadProvinceShapes()
       .then((data) => {
-        if (!cancelled) setShapes(data);
+        if (!cancelled) setState({ shapes: data, error: null });
       })
       .catch((error) => {
-        console.warn("Province shapes failed to load:", error);
+        if (cancelled) return;
+        const loadError = error instanceof Error ? error : new Error(String(error));
+        console.warn("Province shapes failed to load:", loadError);
+        setState({ shapes: null, error: loadError });
       });
+
     return () => {
       cancelled = true;
     };
   }, []);
-  return shapes;
+
+  return state;
 }

codex
注意到 PowerShell 输出里的中文显示成了乱码；我会用搜索确认文件里的实际文本。如果确实写坏了，会改成用现有 `lang` 分支返回正确中文字符串。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n "地图轮廓加载失败|鍦板浘" v2/src/components/map' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Format-Hex -Path 'v2/src/components/map/MapPreview.tsx' | Select-Object -First 60" in c:\Users\h\Documents\New project 2
 succeeded in 721ms:
v2/src/components/map\MapPreview.tsx:16:          ? "地图轮廓加载失败，刷新重试。"
v2/src/components/map\ProvinceShapeLayer.tsx:99:          ? "地图轮廓加载失败，刷新重试。"

 succeeded in 1088ms:


           Path: C:\Users\h\Documents\New project 2\v2\src\components\map\MapPreview.tsx

           00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F

00000000   69 6D 70 6F 72 74 20 7B 20 75 73 65 4D 65 6D 6F  import { useMemo
00000010   20 7D 20 66 72 6F 6D 20 22 72 65 61 63 74 22 3B   } from "react";
00000020   0A 69 6D 70 6F 72 74 20 7B 20 75 73 65 50 72 6F  .import { usePro
00000030   76 69 6E 63 65 53 68 61 70 65 73 20 7D 20 66 72  vinceShapes } fr
00000040   6F 6D 20 22 2E 2E 2F 2E 2E 2F 68 6F 6F 6B 73 2F  om "../../hooks/
00000050   75 73 65 50 72 6F 76 69 6E 63 65 53 68 61 70 65  useProvinceShape
00000060   73 22 3B 0A 69 6D 70 6F 72 74 20 7B 20 63 6F 6D  s";.import { com
00000070   70 75 74 65 55 6E 69 6F 6E 56 69 65 77 42 6F 78  puteUnionViewBox
00000080   20 7D 20 66 72 6F 6D 20 22 2E 2E 2F 2E 2E 2F 6C   } from "../../l
00000090   69 62 2F 73 68 61 70 65 73 22 3B 0A 69 6D 70 6F  ib/shapes";.impo
000000A0   72 74 20 7B 20 75 73 65 4C 61 6E 67 20 7D 20 66  rt { useLang } f
000000B0   72 6F 6D 20 22 2E 2E 2F 2E 2E 2F 73 74 6F 72 65  rom "../../store
000000C0   2F 6C 61 6E 67 75 61 67 65 22 3B 0A 69 6D 70 6F  /language";.impo
000000D0   72 74 20 7B 20 44 45 46 41 55 4C 54 5F 50 52 4F  rt { DEFAULT_PRO
000000E0   56 49 4E 43 45 5F 46 49 4C 4C 2C 20 50 52 4F 56  VINCE_FILL, PROV
000000F0   49 4E 43 45 5F 43 4F 4C 4F 52 53 20 7D 20 66 72  INCE_COLORS } fr
00000100   6F 6D 20 22 2E 2F 70 72 6F 76 69 6E 63 65 43 6F  om "./provinceCo
00000110   6C 6F 72 73 22 3B 0A 0A 65 78 70 6F 72 74 20 64  lors";..export d
00000120   65 66 61 75 6C 74 20 66 75 6E 63 74 69 6F 6E 20  efault function 
00000130   4D 61 70 50 72 65 76 69 65 77 28 29 20 7B 0A 20  MapPreview() {. 
00000140   20 63 6F 6E 73 74 20 7B 20 73 68 61 70 65 73 2C   const { shapes,
00000150   20 65 72 72 6F 72 20 7D 20 3D 20 75 73 65 50 72   error } = usePr
00000160   6F 76 69 6E 63 65 53 68 61 70 65 73 28 29 3B 0A  ovinceShapes();.
00000170   20 20 63 6F 6E 73 74 20 7B 20 6C 61 6E 67 20 7D    const { lang }
00000180   20 3D 20 75 73 65 4C 61 6E 67 28 29 3B 0A 20 20   = useLang();.  
00000190   63 6F 6E 73 74 20 76 69 65 77 42 6F 78 20 3D 20  const viewBox = 
000001A0   75 73 65 4D 65 6D 6F 28 28 29 20 3D 3E 20 28 73  useMemo(() => (s
000001B0   68 61 70 65 73 20 3F 20 63 6F 6D 70 75 74 65 55  hapes ? computeU
000001C0   6E 69 6F 6E 56 69 65 77 42 6F 78 28 73 68 61 70  nionViewBox(shap
000001D0   65 73 29 20 3A 20 6E 75 6C 6C 29 2C 20 5B 73 68  es) : null), [sh
000001E0   61 70 65 73 5D 29 3B 0A 0A 20 20 69 66 20 28 65  apes]);..  if (e
000001F0   72 72 6F 72 29 20 7B 0A 20 20 20 20 72 65 74 75  rror) {.    retu
00000200   72 6E 20 28 0A 20 20 20 20 20 20 3C 64 69 76 20  rn (.      <div 
00000210   63 6C 61 73 73 4E 61 6D 65 3D 22 66 6C 65 78 20  className="flex 
00000220   68 2D 66 75 6C 6C 20 77 2D 66 75 6C 6C 20 69 74  h-full w-full it
00000230   65 6D 73 2D 63 65 6E 74 65 72 20 6A 75 73 74 69  ems-center justi
00000240   66 79 2D 63 65 6E 74 65 72 20 62 67 2D 77 68 69  fy-center bg-whi
00000250   74 65 2F 37 30 20 70 78 2D 34 20 74 65 78 74 2D  te/70 px-4 text-
00000260   63 65 6E 74 65 72 20 74 65 78 74 2D 73 6D 20 66  center text-sm f
00000270   6F 6E 74 2D 73 65 6D 69 62 6F 6C 64 20 74 65 78  ont-semibold tex
00000280   74 2D 69 6E 6B 2F 37 30 22 3E 0A 20 20 20 20 20  t-ink/70">.     
00000290   20 20 20 7B 6C 61 6E 67 20 3D 3D 3D 20 22 7A 68     {lang === "zh
000002A0   22 0A 20 20 20 20 20 20 20 20 20 20 3F 20 22 E5  ".          ? "å
000002B0   9C B0 E5 9B BE E8 BD AE E5 BB 93 E5 8A A0 E8 BD  °å¾è½®å»å è½
000002C0   BD E5 A4 B1 E8 B4 A5 EF BC 8C E5 88 B7 E6 96 B0  ½å¤±è´¥ï¼å·æ°
000002D0   E9 87 8D E8 AF 95 E3 80 82 22 0A 20 20 20 20 20  éè¯ã".     
000002E0   20 20 20 20 20 3A 20 22 4D 61 70 20 6F 75 74 6C       : "Map outl
000002F0   69 6E 65 20 66 61 69 6C 65 64 20 74 6F 20 6C 6F  ine failed to lo
00000300   61 64 2E 20 52 65 66 72 65 73 68 20 74 6F 20 72  ad. Refresh to r
00000310   65 74 72 79 2E 22 7D 0A 20 20 20 20 20 20 3C 2F  etry."}.      </
00000320   64 69 76 3E 0A 20 20 20 20 29 3B 0A 20 20 7D 0A  div>.    );.  }.
00000330   0A 20 20 69 66 20 28 21 73 68 61 70 65 73 20 7C  .  if (!shapes |
00000340   7C 20 21 76 69 65 77 42 6F 78 29 20 7B 0A 20 20  | !viewBox) {.  
00000350   20 20 72 65 74 75 72 6E 20 3C 64 69 76 20 63 6C    return <div cl
00000360   61 73 73 4E 61 6D 65 3D 22 68 2D 66 75 6C 6C 20  assName="h-full 
00000370   77 2D 66 75 6C 6C 20 62 67 2D 77 68 69 74 65 2F  w-full bg-white/
00000380   37 30 22 20 2F 3E 3B 0A 20 20 7D 0A 0D 0A 20 20  70" />;.  }...  
00000390   72 65 74 75 72 6E 20 28 0D 0A 20 20 20 20 3C 73  return (..    <s
000003A0   76 67 0D 0A 20 20 20 20 20 20 76 69 65 77 42 6F  vg..      viewBo
000003B0   78 3D 7B 60 24 7B 76 69 65 77 42 6F 78 2E 78 7D  x={`${viewBox.x}



diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 8cc2adeee74b30afc5ab8cc421e0d3a47d718236..9a43cf53f59f0c057456836db02cccc440b91e29
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -1,15 +1,27 @@
-import { useMemo } from "react";
-import { useProvinceShapes } from "../../hooks/useProvinceShapes";
-import { computeUnionViewBox } from "../../lib/shapes";
-import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
-
-export default function MapPreview() {
-  const shapes = useProvinceShapes();
-  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
-
-  if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
-  }
+import { useMemo } from "react";
+import { useProvinceShapes } from "../../hooks/useProvinceShapes";
+import { computeUnionViewBox } from "../../lib/shapes";
+import { useLang } from "../../store/language";
+import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
+
+export default function MapPreview() {
+  const { shapes, error } = useProvinceShapes();
+  const { lang } = useLang();
+  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
+
+  if (error) {
+    return (
+      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
+  if (!shapes || !viewBox) {
+    return <div className="h-full w-full bg-white/70" />;
+  }
 
   return (
     <svg
diff --git a/v2/src/components/map/ProvinceLabelLayer.tsx b/v2/src/components/map/ProvinceLabelLayer.tsx
index eb9ed77e76333b669927236630e41bf4a89c8c1d..fec25d9b5b6aadbbee6ea16912cb46f7b4cd2a7c
--- a/v2/src/components/map/ProvinceLabelLayer.tsx
+++ b/v2/src/components/map/ProvinceLabelLayer.tsx
@@ -16,9 +16,9 @@
     "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 0 4px rgba(255,255,255,0.85)"
 };
 
-export default function ProvinceLabelLayer() {
-  const shapes = useProvinceShapes();
-  const { lang } = useLang();
+export default function ProvinceLabelLayer() {
+  const { shapes } = useProvinceShapes();
+  const { lang } = useLang();
   const { selectedProvinceId } = useAtlas();
 
   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index 1f2a4c90ea50b18f505f0636a46bc627e7e8732e..bba147bc2cd871ef03c9e185d8f43ec242ba11ed
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -75,10 +75,10 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
-  const shapes = useProvinceShapes();
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
+export default function ProvinceShapeLayer() {
+  const { shapes, error } = useProvinceShapes();
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
 
   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
 
@@ -92,7 +92,17 @@
     return `translate(${txPct}%, ${tyPct}%) scale(${focus.scale})`;
   }, [shapes, viewBox, selectedProvinceId]);
 
-  if (!shapes || !viewBox) return null;
+  if (error) {
+    return (
+      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
+  if (!shapes || !viewBox) return null;
 
   const focused = Boolean(selectedProvinceId);
   const vb = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
diff --git a/v2/src/hooks/useProvinceShapes.ts b/v2/src/hooks/useProvinceShapes.ts
index b7705d2761e5478b6d979cfecfc4841663be92b5..2d2156439a313d028447b8568e94f5e1527d771a
--- a/v2/src/hooks/useProvinceShapes.ts
+++ b/v2/src/hooks/useProvinceShapes.ts
@@ -1,20 +1,34 @@
 import { useEffect, useState } from "react";
 import { loadProvinceShapes, type ShapeMap } from "../lib/shapes";
 
-export function useProvinceShapes(): ShapeMap | null {
-  const [shapes, setShapes] = useState<ShapeMap | null>(null);
+export type ProvinceShapesState = {
+  shapes: ShapeMap | null;
+  error: Error | null;
+};
+
+export function useProvinceShapes(): ProvinceShapesState {
+  const [state, setState] = useState<ProvinceShapesState>({
+    shapes: null,
+    error: null
+  });
+
   useEffect(() => {
     let cancelled = false;
     loadProvinceShapes()
       .then((data) => {
-        if (!cancelled) setShapes(data);
+        if (!cancelled) setState({ shapes: data, error: null });
       })
       .catch((error) => {
-        console.warn("Province shapes failed to load:", error);
+        if (cancelled) return;
+        const loadError = error instanceof Error ? error : new Error(String(error));
+        console.warn("Province shapes failed to load:", loadError);
+        setState({ shapes: null, error: loadError });
       });
+
     return () => {
       cancelled = true;
     };
   }, []);
-  return shapes;
+
+  return state;
 }

codex
已在 `v2` 完成。`useProvinceShapes` 现在返回 `{ shapes: ShapeMap | null; error: Error | null }`，加载中仍保持 `shapes:null/error:null`。

`ProvinceShapeLayer` 和 `MapPreview` 都接入 `useLang`，失败时显示中英文 fallback。另同步 `ProvinceLabelLayer` 解构以适配新签名。

验证：`npx tsc --noEmit` 0 error，`npm run build` 0 error。
diff --git a/v2/src/components/map/MapPreview.tsx b/v2/src/components/map/MapPreview.tsx
index 8cc2adeee74b30afc5ab8cc421e0d3a47d718236..9a43cf53f59f0c057456836db02cccc440b91e29
--- a/v2/src/components/map/MapPreview.tsx
+++ b/v2/src/components/map/MapPreview.tsx
@@ -1,15 +1,27 @@
-import { useMemo } from "react";
-import { useProvinceShapes } from "../../hooks/useProvinceShapes";
-import { computeUnionViewBox } from "../../lib/shapes";
-import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
-
-export default function MapPreview() {
-  const shapes = useProvinceShapes();
-  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
-
-  if (!shapes || !viewBox) {
-    return <div className="h-full w-full bg-white/70" />;
-  }
+import { useMemo } from "react";
+import { useProvinceShapes } from "../../hooks/useProvinceShapes";
+import { computeUnionViewBox } from "../../lib/shapes";
+import { useLang } from "../../store/language";
+import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";
+
+export default function MapPreview() {
+  const { shapes, error } = useProvinceShapes();
+  const { lang } = useLang();
+  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
+
+  if (error) {
+    return (
+      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
+  if (!shapes || !viewBox) {
+    return <div className="h-full w-full bg-white/70" />;
+  }
 
   return (
     <svg
diff --git a/v2/src/components/map/ProvinceLabelLayer.tsx b/v2/src/components/map/ProvinceLabelLayer.tsx
index eb9ed77e76333b669927236630e41bf4a89c8c1d..fec25d9b5b6aadbbee6ea16912cb46f7b4cd2a7c
--- a/v2/src/components/map/ProvinceLabelLayer.tsx
+++ b/v2/src/components/map/ProvinceLabelLayer.tsx
@@ -16,9 +16,9 @@
     "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 0 4px rgba(255,255,255,0.85)"
 };
 
-export default function ProvinceLabelLayer() {
-  const shapes = useProvinceShapes();
-  const { lang } = useLang();
+export default function ProvinceLabelLayer() {
+  const { shapes } = useProvinceShapes();
+  const { lang } = useLang();
   const { selectedProvinceId } = useAtlas();
 
   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index 1f2a4c90ea50b18f505f0636a46bc627e7e8732e..bba147bc2cd871ef03c9e185d8f43ec242ba11ed
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -75,10 +75,10 @@
   );
 }
 
-export default function ProvinceShapeLayer() {
-  const shapes = useProvinceShapes();
-  const { lang } = useLang();
-  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
+export default function ProvinceShapeLayer() {
+  const { shapes, error } = useProvinceShapes();
+  const { lang } = useLang();
+  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();
 
   const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);
 
@@ -92,7 +92,17 @@
     return `translate(${txPct}%, ${tyPct}%) scale(${focus.scale})`;
   }, [shapes, viewBox, selectedProvinceId]);
 
-  if (!shapes || !viewBox) return null;
+  if (error) {
+    return (
+      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm font-semibold text-ink/70">
+        {lang === "zh"
+          ? "地图轮廓加载失败，刷新重试。"
+          : "Map outline failed to load. Refresh to retry."}
+      </div>
+    );
+  }
+
+  if (!shapes || !viewBox) return null;
 
   const focused = Boolean(selectedProvinceId);
   const vb = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
diff --git a/v2/src/hooks/useProvinceShapes.ts b/v2/src/hooks/useProvinceShapes.ts
index b7705d2761e5478b6d979cfecfc4841663be92b5..2d2156439a313d028447b8568e94f5e1527d771a
--- a/v2/src/hooks/useProvinceShapes.ts
+++ b/v2/src/hooks/useProvinceShapes.ts
@@ -1,20 +1,34 @@
 import { useEffect, useState } from "react";
 import { loadProvinceShapes, type ShapeMap } from "../lib/shapes";
 
-export function useProvinceShapes(): ShapeMap | null {
-  const [shapes, setShapes] = useState<ShapeMap | null>(null);
+export type ProvinceShapesState = {
+  shapes: ShapeMap | null;
+  error: Error | null;
+};
+
+export function useProvinceShapes(): ProvinceShapesState {
+  const [state, setState] = useState<ProvinceShapesState>({
+    shapes: null,
+    error: null
+  });
+
   useEffect(() => {
     let cancelled = false;
     loadProvinceShapes()
       .then((data) => {
-        if (!cancelled) setShapes(data);
+        if (!cancelled) setState({ shapes: data, error: null });
       })
       .catch((error) => {
-        console.warn("Province shapes failed to load:", error);
+        if (cancelled) return;
+        const loadError = error instanceof Error ? error : new Error(String(error));
+        console.warn("Province shapes failed to load:", loadError);
+        setState({ shapes: null, error: loadError });
       });
+
     return () => {
       cancelled = true;
     };
   }, []);
-  return shapes;
+
+  return state;
 }

tokens used
51,469
ERROR: The process "610832" not found.

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
