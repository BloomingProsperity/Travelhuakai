# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-12T03:06:16.560Z

## Original task

在 v2/ workdir 真的 edit + build。

任务：v2/src/components/map/ProvinceShapeLayer.tsx 里省份 SVG 可键盘聚焦但用了 outline-none，没有 focus-visible 样式，键盘用户看不出当前焦点。codex audit 指 ProvinceShapeLayer.tsx:41 和 :55。

修法：保留 outline-none 移除原生 outline，但加 focus-visible 样式（比如 focus-visible:fill-jade-soft 或 focus-visible:stroke-jade focus-visible:stroke-2 之类的描边/填充强化）。要在不破坏鼠标 hover 视觉的前提下，键盘 Tab 进来一目了然。

完成后 npx tsc --noEmit + npm run build 都 0 error。

报告 150 字以内：改了什么、用了哪种 focus-visible 视觉、build 状态。

## Final prompt

在 v2/ workdir 真的 edit + build。

任务：v2/src/components/map/ProvinceShapeLayer.tsx 里省份 SVG 可键盘聚焦但用了 outline-none，没有 focus-visible 样式，键盘用户看不出当前焦点。codex audit 指 ProvinceShapeLayer.tsx:41 和 :55。

修法：保留 outline-none 移除原生 outline，但加 focus-visible 样式（比如 focus-visible:fill-jade-soft 或 focus-visible:stroke-jade focus-visible:stroke-2 之类的描边/填充强化）。要在不破坏鼠标 hover 视觉的前提下，键盘 Tab 进来一目了然。

完成后 npx tsc --noEmit + npm run build 都 0 error。

报告 150 字以内：改了什么、用了哪种 focus-visible 视觉、build 状态。

## Raw output

```text
SUCCESS: The process with PID 506736 (child process of PID 598572) has been terminated.
SUCCESS: The process with PID 598572 (child process of PID 596896) has been terminated.
SUCCESS: The process with PID 596896 (child process of PID 609240) has been terminated.
SUCCESS: The process with PID 609240 (child process of PID 607856) has been terminated.
SUCCESS: The process with PID 591616 (child process of PID 607812) has been terminated.
SUCCESS: The process with PID 607812 (child process of PID 532492) has been terminated.
SUCCESS: The process with PID 532492 (child process of PID 607340) has been terminated.
SUCCESS: The process with PID 607340 (child process of PID 607856) has been terminated.
已改 `ProvinceShapeLayer.tsx`：保留 `outline-none`，给 `focus-visible` 的省份 `path` 加 `jade-soft` 填充、`jade` 2.8 描边。`npx tsc --noEmit` 和 `npm run build` 均 0 error。
SUCCESS: The process with PID 606152 (child process of PID 608740) has been terminated.
SUCCESS: The process with PID 608740 (child process of PID 610140) has been terminated.
SUCCESS: The process with PID 610140 (child process of PID 607612) has been terminated.
SUCCESS: The process with PID 607612 (child process of PID 607856) has been terminated.


OpenAI Codex v0.128.0 (research preview)
--------
workdir: c:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1a24-a877-7901-a68e-ace99b917ece
--------
user
在 v2/ workdir 真的 edit + build。

任务：v2/src/components/map/ProvinceShapeLayer.tsx 里省份 SVG 可键盘聚焦但用了 outline-none，没有 focus-visible 样式，键盘用户看不出当前焦点。codex audit 指 ProvinceShapeLayer.tsx:41 和 :55。

修法：保留 outline-none 移除原生 outline，但加 focus-visible 样式（比如 focus-visible:fill-jade-soft 或 focus-visible:stroke-jade focus-visible:stroke-2 之类的描边/填充强化）。要在不破坏鼠标 hover 视觉的前提下，键盘 Tab 进来一目了然。

完成后 npx tsc --noEmit + npm run build 都 0 error。

报告 150 字以内：改了什么、用了哪种 focus-visible 视觉、build 状态。
codex
我会直接在 `v2` 下检查目标组件和项目脚本，然后只改焦点可见样式，最后跑 `tsc` 和生产构建。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path v2/src/components/map/ProvinceShapeLayer.tsx' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Path v2/package.json' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short' in c:\Users\h\Documents\New project 2
 succeeded in 606ms:
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

 succeeded in 614ms:
 M v2/src/pages/HomePage.tsx

 succeeded in 653ms:
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

codex
目标节点是 `g`，子 `path` 自己带了 `fill`/`stroke` 属性；我会优先用能直接命中子路径的 `focus-visible:[&>path]:...` 样式，避免焦点样式被 SVG 属性覆盖。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg "@theme|--color|jade" v2 -g "*.css" -g "*.ts" -g "*.tsx"' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg "jade|focus-visible|outline-none|stroke-jade|fill-jade" v2/src' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Path v2 -Force | Select-Object Name,Mode' in c:\Users\h\Documents\New project 2
 succeeded in 635ms:
v2\src\pages\AskPage.tsx:      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
v2\src\components\city\CityImagePanel.tsx:                i === idx ? "bg-jade" : "bg-line hover:bg-muted"
v2\src\components\common\CityFurtherReading.tsx:              className="flex flex-col gap-1 rounded-lg border border-line bg-white p-4 hover:border-jade hover:bg-jade-soft"
v2\src\components\common\CityFurtherReading.tsx:              <span className="text-[10px] uppercase tracking-wider text-jade">{new URL(p.url).hostname} →</span>
v2\src\pages\GuidePage.tsx:        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
v2\src\pages\GuidePage.tsx:        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
v2\src\components\city\CityNav.tsx:                    ? "bg-jade-soft font-bold text-jade"
v2\src\components\common\SourcesNote.tsx:          <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
v2\src\components\common\SourcesNote.tsx:          <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
v2\src\pages\CityPage.tsx:        <Link to="/" className="text-jade hover:underline">{isZh ? "返回首页" : "← Home"}</Link>
v2\src\pages\CityPage.tsx:        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
v2\src\pages\CityPage.tsx:              <Link to="/ask" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
v2\src\pages\CityPage.tsx:              <Link to="/share" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
v2\src\styles\globals.css:@theme {
v2\src\styles\globals.css:  --color-ink: #18201d;
v2\src\styles\globals.css:  --color-muted: #5b6863;
v2\src\styles\globals.css:  --color-line: #d4dbd7;
v2\src\styles\globals.css:  --color-paper: #f6f8f6;
v2\src\styles\globals.css:  --color-jade: #176f62;
v2\src\styles\globals.css:  --color-jade-soft: rgba(23, 112, 97, 0.08);
v2\src\styles\globals.css:  background: var(--color-paper);
v2\src\styles\globals.css:  color: var(--color-ink);
v2\src\components\city\CityIntro.tsx:                      ? "bg-jade-soft text-jade"
v2\src\components\city\CityIntro.tsx:                className="self-start text-[10px] font-bold uppercase tracking-wider text-jade hover:underline"
v2\src\components\city\CityIntro.tsx:          : "border-line bg-white text-ink hover:border-jade hover:text-jade"
v2\src\components\layout\SiteFooter.tsx:        <Link to="/sources" className="hover:text-jade">
v2\src\components\layout\SiteFooter.tsx:        <a href="#top" className="hover:text-jade">{t("backToTop")}</a>
v2\src\pages\MapPage.tsx:        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
v2\src\pages\HomePage.tsx:        className="group grid overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:border-jade hover:shadow-md lg:grid-cols-[minmax(0,1fr)_420px]"
v2\src\pages\HomePage.tsx:          <span className="text-sm font-bold text-jade">
v2\src\pages\HomePage.tsx:            className="group flex min-h-20 items-center justify-between gap-3 rounded-lg border border-line bg-white px-4 py-3 transition hover:border-jade hover:shadow-sm"
v2\src\pages\HomePage.tsx:            <span className="text-xl text-muted transition group-hover:translate-x-1 group-hover:text-jade" aria-hidden>
v2\src\pages\SharePage.tsx:      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
v2\src\pages\SourcesPage.tsx:      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
v2\src\pages\SourcesPage.tsx:            className="flex-1 text-ink hover:text-jade hover:underline"
v2\src\data\city-attractions.ts:    whyEn: "The strongest single stop for ancient Chinese art in central Shanghai: bronzes, ceramics, jade, calligraphy, painting, seals, furniture. Since 2025-09 individual visitors no longer need reservations for the People's Square site during normal periods — entry with passport. Closed Mondays.",
v2\src\data\phase2-preview.ts:    colorClass: "bg-jade-soft text-jade border-jade/30"
v2\src\components\pillar\FoodGuide.tsx:                  : "border-line bg-white text-ink hover:border-jade hover:text-jade"
v2\src\components\pillar\FoodGuide.tsx:                className="text-[10px] font-bold uppercase tracking-wider text-jade hover:underline"
v2\src\data\atlas.ts:    color: "jade",
v2\src\data\atlas.ts:    color: "jade",
v2\src\data\atlas.ts:    color: "jade",
v2\src\components\map\Province3DOverlay.tsx:            className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-lg font-bold leading-none text-ink shadow-sm hover:border-jade hover:text-jade"
v2\src\components\pillar\EmergencyBriefing.tsx:                  : "border-line bg-white text-ink hover:border-jade hover:text-jade"
v2\src\components\pillar\EmergencyBriefing.tsx:          <a href={mfaConsular.url} target="_blank" rel="noreferrer" className="font-bold text-jade hover:underline">
v2\src\components\pillar\TransportGuide.tsx:                  : "border-line bg-white text-ink hover:border-jade hover:text-jade"
v2\src\components\pillar\TransportGuide.tsx:                  <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
v2\src\components\pillar\VisaChecker.tsx:      <div className="flex flex-col gap-2 rounded-lg bg-jade-soft p-4">
v2\src\components\pillar\VisaChecker.tsx:        <strong className="text-base text-jade">
v2\src\components\pillar\VisaChecker.tsx:      <div className="flex flex-col gap-2 rounded-lg bg-jade-soft p-4">
v2\src\components\pillar\VisaChecker.tsx:        <strong className="text-base text-jade">
v2\src\components\pillar\VisaChecker.tsx:            <span className="rounded-full bg-jade-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-jade">
v2\src\components\map\ProvinceLabelLayer.tsx:              active && "rounded-full bg-jade px-2 py-1 text-sm text-white shadow-lg",
v2\src\components\map\SpecialRegionMarkers.tsx:            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
v2\src\components\map\SpecialRegionMarkers.tsx:            <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />

 succeeded in 646ms:
v2/src\components\city\CityNav.tsx:                    ? "bg-jade-soft font-bold text-jade"
v2/src\styles\globals.css:  --color-jade: #176f62;
v2/src\styles\globals.css:  --color-jade-soft: rgba(23, 112, 97, 0.08);
v2/src\components\common\SourcesNote.tsx:          <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
v2/src\components\common\SourcesNote.tsx:          <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
v2/src\components\layout\SiteFooter.tsx:        <Link to="/sources" className="hover:text-jade">
v2/src\components\layout\SiteFooter.tsx:        <a href="#top" className="hover:text-jade">{t("backToTop")}</a>
v2/src\components\city\CityImagePanel.tsx:                i === idx ? "bg-jade" : "bg-line hover:bg-muted"
v2/src\components\city\CityIntro.tsx:                      ? "bg-jade-soft text-jade"
v2/src\components\city\CityIntro.tsx:                className="self-start text-[10px] font-bold uppercase tracking-wider text-jade hover:underline"
v2/src\components\city\CityIntro.tsx:          : "border-line bg-white text-ink hover:border-jade hover:text-jade"
v2/src\components\common\CityFurtherReading.tsx:              className="flex flex-col gap-1 rounded-lg border border-line bg-white p-4 hover:border-jade hover:bg-jade-soft"
v2/src\components\common\CityFurtherReading.tsx:              <span className="text-[10px] uppercase tracking-wider text-jade">{new URL(p.url).hostname} →</span>
v2/src\data\phase2-preview.ts:    colorClass: "bg-jade-soft text-jade border-jade/30"
v2/src\components\pillar\VisaChecker.tsx:            className="rounded-lg border border-line bg-paper px-3 py-2 text-sm focus:border-ink focus:outline-none"
v2/src\components\pillar\VisaChecker.tsx:      <div className="flex flex-col gap-2 rounded-lg bg-jade-soft p-4">
v2/src\components\pillar\VisaChecker.tsx:        <strong className="text-base text-jade">
v2/src\components\pillar\VisaChecker.tsx:      <div className="flex flex-col gap-2 rounded-lg bg-jade-soft p-4">
v2/src\components\pillar\VisaChecker.tsx:        <strong className="text-base text-jade">
v2/src\components\pillar\VisaChecker.tsx:            <span className="rounded-full bg-jade-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-jade">
v2/src\data\city-attractions.ts:    whyEn: "The strongest single stop for ancient Chinese art in central Shanghai: bronzes, ceramics, jade, calligraphy, painting, seals, furniture. Since 2025-09 individual visitors no longer need reservations for the People's Square site during normal periods — entry with passport. Closed Mondays.",
v2/src\components\pillar\TransportGuide.tsx:                  : "border-line bg-white text-ink hover:border-jade hover:text-jade"
v2/src\components\pillar\TransportGuide.tsx:                  <span className="text-[10px] font-bold uppercase tracking-widest text-jade">
v2/src\pages\SourcesPage.tsx:      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
v2/src\pages\SourcesPage.tsx:            className="flex-1 text-ink hover:text-jade hover:underline"
v2/src\pages\GuidePage.tsx:        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
v2/src\pages\GuidePage.tsx:        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
v2/src\data\atlas.ts:    color: "jade",
v2/src\data\atlas.ts:    color: "jade",
v2/src\data\atlas.ts:    color: "jade",
v2/src\components\map\Province3DOverlay.tsx:            className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-lg font-bold leading-none text-ink shadow-sm hover:border-jade hover:text-jade"
v2/src\pages\AskPage.tsx:      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
v2/src\pages\SharePage.tsx:      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
v2/src\pages\CityPage.tsx:        <Link to="/" className="text-jade hover:underline">{isZh ? "返回首页" : "← Home"}</Link>
v2/src\pages\CityPage.tsx:        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
v2/src\pages\CityPage.tsx:              <Link to="/ask" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
v2/src\pages\CityPage.tsx:              <Link to="/share" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
v2/src\pages\HomePage.tsx:        className="group grid overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:border-jade hover:shadow-md lg:grid-cols-[minmax(0,1fr)_420px]"
v2/src\pages\HomePage.tsx:          <span className="text-sm font-bold text-jade">
v2/src\pages\HomePage.tsx:            className="group flex min-h-20 items-center justify-between gap-3 rounded-lg border border-line bg-white px-4 py-3 transition hover:border-jade hover:shadow-sm"
v2/src\pages\HomePage.tsx:            <span className="text-xl text-muted transition group-hover:translate-x-1 group-hover:text-jade" aria-hidden>
v2/src\pages\MapPage.tsx:        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
v2/src\components\pillar\FoodGuide.tsx:                  : "border-line bg-white text-ink hover:border-jade hover:text-jade"
v2/src\components\pillar\FoodGuide.tsx:                className="text-[10px] font-bold uppercase tracking-wider text-jade hover:underline"
v2/src\components\pillar\EmergencyBriefing.tsx:                  : "border-line bg-white text-ink hover:border-jade hover:text-jade"
v2/src\components\pillar\EmergencyBriefing.tsx:          <a href={mfaConsular.url} target="_blank" rel="noreferrer" className="font-bold text-jade hover:underline">
v2/src\components\map\ProvinceLabelLayer.tsx:              active && "rounded-full bg-jade px-2 py-1 text-sm text-white shadow-lg",
v2/src\components\map\ProvinceShapeLayer.tsx:        "cursor-pointer outline-none transition-opacity duration-300",
v2/src\components\map\SpecialRegionMarkers.tsx:            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
v2/src\components\map\SpecialRegionMarkers.tsx:            <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />

 succeeded in 744ms:

Name                   Mode  
----                   ----  
.omc                   d-----
.react-router          d-----
.vite-react-ssg-temp   d-----
build                  d-----
dist                   d-----
node_modules           d-----
public                 d-----
research               d-----
scripts                d-----
src                    d-----
.editorconfig          -a----
.env.example           -a----
.gitignore             -a----
eslint.config.js       -a----
index.html             -a----
package-lock.json      -a----
package.json           -a----
react-router.config.ts -a----
README.md              -a----
STYLE_GUIDE.md         -a----
tsconfig.app.json      -a----
tsconfig.json          -a----
tsconfig.node.json     -a----
vite-dev.err.log       -a----
vite-dev.out.log       -a----
vite.config.ts         -a----



codex
我准备只改 `ProvinceShapeLayer.tsx` 的可聚焦组样式：保留 `outline-none`，给键盘焦点加 jade 描边和轻微填充强化，鼠标点击/hover 不触发这套样式。
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\map\ProvinceShapeLayer.tsx
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index 7323046c326201c760e948fcb5bb21ead711d862..1f2a4c90ea50b18f505f0636a46bc627e7e8732e
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -52,10 +52,10 @@
           onSelect();
         }
       }}
-      className={clsx(
-        "cursor-pointer outline-none transition-opacity duration-300",
-        dimmed && "opacity-90"
-      )}
+      className={clsx(
+        "cursor-pointer outline-none transition-opacity duration-300 focus-visible:[&>path]:fill-jade-soft focus-visible:[&>path]:stroke-jade focus-visible:[&>path]:[stroke-width:2.8]",
+        dimmed && "opacity-90"
+      )}
       style={{ pointerEvents: "all" }}
     >
       <title>{label}</title>

diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index 7323046c326201c760e948fcb5bb21ead711d862..1f2a4c90ea50b18f505f0636a46bc627e7e8732e
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -52,10 +52,10 @@
           onSelect();
         }
       }}
-      className={clsx(
-        "cursor-pointer outline-none transition-opacity duration-300",
-        dimmed && "opacity-90"
-      )}
+      className={clsx(
+        "cursor-pointer outline-none transition-opacity duration-300 focus-visible:[&>path]:fill-jade-soft focus-visible:[&>path]:stroke-jade focus-visible:[&>path]:[stroke-width:2.8]",
+        dimmed && "opacity-90"
+      )}
       style={{ pointerEvents: "all" }}
     >
       <title>{label}</title>

codex
样式已经加到 `g` 的 `focus-visible` 子路径选择器上。现在在 `v2` 里跑类型检查和构建，确认 Tailwind 任意选择器也能正常通过生产构建。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 1904ms:
 succeeded in 8611ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1503 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                     6.03 kB │ gzip:     0.93 kB
build/client/assets/Map3D-B9DDZdqH.css              24.01 kB │ gzip:     5.37 kB
build/client/assets/root-7A0dcw7U.css               41.35 kB │ gzip:     7.81 kB
build/client/assets/language-D_sidw9C.js             0.26 kB │ gzip:     0.21 kB
build/client/assets/clsx-H-aRJLpe.js                 0.36 kB │ gzip:     0.23 kB
build/client/assets/cityRoutes-woNkNDLp.js           0.91 kB │ gzip:     0.50 kB
build/client/assets/chunk-BA_0og6f.js                0.95 kB │ gzip:     0.56 kB
build/client/assets/provinceColors-ChY8jySF.js       1.72 kB │ gzip:     0.91 kB
build/client/assets/HomePage-Dm4h7LAR.js             4.82 kB │ gzip:     2.21 kB
build/client/assets/SharePage-SOKeWOZv.js            7.48 kB │ gzip:     2.76 kB
build/client/assets/phase2-preview-DcPyXPqD.js       7.59 kB │ gzip:     4.48 kB
build/client/assets/AskPage-D4TBpFC4.js              7.62 kB │ gzip:     2.92 kB
build/client/assets/Map3D-F4jhmUWP.js                8.95 kB │ gzip:     4.21 kB
build/client/assets/root-kCffApbE.js                 9.47 kB │ gzip:     4.57 kB
build/client/assets/GuidePage-CZq-6qwa.js           10.80 kB │ gzip:     5.11 kB
build/client/assets/MapPage-DoCpH3L9.js             11.46 kB │ gzip:     4.18 kB
build/client/assets/practical-other-Bpl292H6.js     22.32 kB │ gzip:    10.76 kB
build/client/assets/atlas-B_AAPFrX.js               23.18 kB │ gzip:     9.54 kB
build/client/assets/SourcesPage-9HAp8EoC.js         32.19 kB │ gzip:     8.46 kB
build/client/assets/transport-DZFQFqdz.js           34.86 kB │ gzip:    15.24 kB
build/client/assets/SourcesNote-Dc56Qloe.js         39.01 kB │ gzip:    14.91 kB
build/client/assets/CityPage-DjIxpOcJ.js            52.17 kB │ gzip:    19.45 kB
build/client/assets/jsx-runtime-CnbWJCR4.js        127.16 kB │ gzip:    41.93 kB
build/client/assets/entry.client-CQ10Nt2o.js       186.53 kB │ gzip:    58.89 kB
build/client/assets/Cesium-CsldJg6P.js           4,724.63 kB │ gzip: 1,304.40 kB

[32m✓ built in 4.28s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 66 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m
[2mbuild\server\assets\server-build-7A0dcw7U.css[22m

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
build/server/assets/server-build-7A0dcw7U.css   41.35 kB │ gzip:  7.81 kB
build/server/assets/Map3D-BaGBNPwJ.js           15.47 kB │ gzip:  5.32 kB
build/server/assets/cityRoutes-BO_Rh2Z3.js      31.31 kB │ gzip: 10.67 kB
build/server/index.js                          309.33 kB │ gzip: 96.98 kB

[32m✓ built in 657ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:virtual-modules (39%)
  - react-router:dot-server (37%)
  - react-router:inject-hmr-runtime (16%)
  - react-router:hmr-runtime (4%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index 7323046c326201c760e948fcb5bb21ead711d862..1f2a4c90ea50b18f505f0636a46bc627e7e8732e
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -52,10 +52,10 @@
           onSelect();
         }
       }}
-      className={clsx(
-        "cursor-pointer outline-none transition-opacity duration-300",
-        dimmed && "opacity-90"
-      )}
+      className={clsx(
+        "cursor-pointer outline-none transition-opacity duration-300 focus-visible:[&>path]:fill-jade-soft focus-visible:[&>path]:stroke-jade focus-visible:[&>path]:[stroke-width:2.8]",
+        dimmed && "opacity-90"
+      )}
       style={{ pointerEvents: "all" }}
     >
       <title>{label}</title>

codex
`tsc` 和构建都已经 0 error；构建只输出了现有的体积/插件耗时 warning。最后我看一下 diff，确保改动范围只在目标文件。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git diff -- v2/src/components/map/ProvinceShapeLayer.tsx' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short' in c:\Users\h\Documents\New project 2
 succeeded in 526ms:
 M v2/src/components/map/MapPreview.tsx
 M v2/src/components/map/ProvinceLabelLayer.tsx
 M v2/src/components/map/ProvinceShapeLayer.tsx
 M v2/src/hooks/useProvinceShapes.ts
 M v2/src/pages/HomePage.tsx

 succeeded in 535ms:
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
warning: in the working copy of 'v2/src/components/map/ProvinceShapeLayer.tsx', LF will be replaced by CRLF the next time Git touches it

diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index 7323046c326201c760e948fcb5bb21ead711d862..bba147bc2cd871ef03c9e185d8f43ec242ba11ed
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -52,10 +52,10 @@
           onSelect();
         }
       }}
-      className={clsx(
-        "cursor-pointer outline-none transition-opacity duration-300",
-        dimmed && "opacity-90"
-      )}
+      className={clsx(
+        "cursor-pointer outline-none transition-opacity duration-300 focus-visible:[&>path]:fill-jade-soft focus-visible:[&>path]:stroke-jade focus-visible:[&>path]:[stroke-width:2.8]",
+        dimmed && "opacity-90"
+      )}
       style={{ pointerEvents: "all" }}
     >
       <title>{label}</title>
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

codex
已改 `ProvinceShapeLayer.tsx`：保留 `outline-none`，给 `focus-visible` 的省份 `path` 加 `jade-soft` 填充、`jade` 2.8 描边。`npx tsc --noEmit` 和 `npm run build` 均 0 error。
diff --git a/v2/src/components/map/ProvinceShapeLayer.tsx b/v2/src/components/map/ProvinceShapeLayer.tsx
index 7323046c326201c760e948fcb5bb21ead711d862..bba147bc2cd871ef03c9e185d8f43ec242ba11ed
--- a/v2/src/components/map/ProvinceShapeLayer.tsx
+++ b/v2/src/components/map/ProvinceShapeLayer.tsx
@@ -52,10 +52,10 @@
           onSelect();
         }
       }}
-      className={clsx(
-        "cursor-pointer outline-none transition-opacity duration-300",
-        dimmed && "opacity-90"
-      )}
+      className={clsx(
+        "cursor-pointer outline-none transition-opacity duration-300 focus-visible:[&>path]:fill-jade-soft focus-visible:[&>path]:stroke-jade focus-visible:[&>path]:[stroke-width:2.8]",
+        dimmed && "opacity-90"
+      )}
       style={{ pointerEvents: "all" }}
     >
       <title>{label}</title>
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

tokens used
35,063

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
