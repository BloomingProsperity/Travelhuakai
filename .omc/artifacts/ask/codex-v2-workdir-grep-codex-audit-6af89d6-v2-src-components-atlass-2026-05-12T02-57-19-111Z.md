# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-12T02:57:19.112Z

## Original task

在 v2/ workdir 清理孤儿组件。务必先用 grep 验证零引用再删，不要盲信下面这份候选清单。

候选孤儿（来自 codex audit 6af89d6 后）：
- v2/src/components/AtlasSection.tsx
- v2/src/components/ProvinceRail.tsx
- v2/src/components/CityList.tsx
- v2/src/components/CityProfile.tsx
- v2/src/components/PlaceSearch.tsx
- v2/src/components/CityHero.tsx
- v2/src/components/PageSources.tsx
- v2/src/components/map/EarthIntro.tsx
- v2/src/components/MuseumFlow.tsx
- v2/src/components/HistoryVideo.tsx
- v2/src/components/sections/SourcesNote.tsx

注意：EarthIntro 极可能被 HeroMap.tsx lazy import 引用、SourcesNote 极可能被 GuidePage.tsx / CityPage.tsx 引用。不要删错。

对每个候选执行：
1. 用 Glob/find 确认文件实际路径
2. 用 grep 在 v2/src 全树查组件名（import 或 JSX 使用）
3. 如果零外部引用（仅自己文件命中），删
4. 如果有任何引用，保留并在报告里写明

完成后跑 npx tsc --noEmit 和 npm run build，0 error。

返回简短报告：删了哪几个、保留哪几个（带 reason）、build 状态。200 字以内。

## Final prompt

在 v2/ workdir 清理孤儿组件。务必先用 grep 验证零引用再删，不要盲信下面这份候选清单。

候选孤儿（来自 codex audit 6af89d6 后）：
- v2/src/components/AtlasSection.tsx
- v2/src/components/ProvinceRail.tsx
- v2/src/components/CityList.tsx
- v2/src/components/CityProfile.tsx
- v2/src/components/PlaceSearch.tsx
- v2/src/components/CityHero.tsx
- v2/src/components/PageSources.tsx
- v2/src/components/map/EarthIntro.tsx
- v2/src/components/MuseumFlow.tsx
- v2/src/components/HistoryVideo.tsx
- v2/src/components/sections/SourcesNote.tsx

注意：EarthIntro 极可能被 HeroMap.tsx lazy import 引用、SourcesNote 极可能被 GuidePage.tsx / CityPage.tsx 引用。不要删错。

对每个候选执行：
1. 用 Glob/find 确认文件实际路径
2. 用 grep 在 v2/src 全树查组件名（import 或 JSX 使用）
3. 如果零外部引用（仅自己文件命中），删
4. 如果有任何引用，保留并在报告里写明

完成后跑 npx tsc --noEmit 和 npm run build，0 error。

返回简短报告：删了哪几个、保留哪几个（带 reason）、build 状态。200 字以内。

## Raw output

```text
SUCCESS: The process with PID 607756 (child process of PID 607668) has been terminated.
SUCCESS: The process with PID 607668 (child process of PID 608120) has been terminated.
SUCCESS: The process with PID 608120 (child process of PID 607824) has been terminated.
SUCCESS: The process with PID 607824 (child process of PID 609056) has been terminated.
SUCCESS: The process with PID 607696 (child process of PID 608104) has been terminated.
SUCCESS: The process with PID 608104 (child process of PID 608476) has been terminated.
SUCCESS: The process with PID 608476 (child process of PID 607796) has been terminated.
SUCCESS: The process with PID 607796 (child process of PID 609056) has been terminated.
SUCCESS: The process with PID 608404 (child process of PID 608276) has been terminated.
SUCCESS: The process with PID 608276 (child process of PID 608140) has been terminated.
SUCCESS: The process with PID 608140 (child process of PID 607844) has been terminated.
SUCCESS: The process with PID 607844 (child process of PID 609056) has been terminated.
删：AtlasSection、ProvinceRail、CityList、CityProfile、PlaceSearch、CityHero、PageSources、EarthIntro、MuseumFlow、HistoryVideo、sections/SourcesNote。  
留：common/SourcesNote，CityPage/GuidePage 仍引用。  
验证：`npx tsc --noEmit`、`npm run build` 均 0 error；build 仅有 chunk size 警告。


OpenAI Codex v0.128.0 (research preview)
--------
workdir: c:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1a1a-de81-7081-bf2f-9148acff05cc
--------
user
在 v2/ workdir 清理孤儿组件。务必先用 grep 验证零引用再删，不要盲信下面这份候选清单。

候选孤儿（来自 codex audit 6af89d6 后）：
- v2/src/components/AtlasSection.tsx
- v2/src/components/ProvinceRail.tsx
- v2/src/components/CityList.tsx
- v2/src/components/CityProfile.tsx
- v2/src/components/PlaceSearch.tsx
- v2/src/components/CityHero.tsx
- v2/src/components/PageSources.tsx
- v2/src/components/map/EarthIntro.tsx
- v2/src/components/MuseumFlow.tsx
- v2/src/components/HistoryVideo.tsx
- v2/src/components/sections/SourcesNote.tsx

注意：EarthIntro 极可能被 HeroMap.tsx lazy import 引用、SourcesNote 极可能被 GuidePage.tsx / CityPage.tsx 引用。不要删错。

对每个候选执行：
1. 用 Glob/find 确认文件实际路径
2. 用 grep 在 v2/src 全树查组件名（import 或 JSX 使用）
3. 如果零外部引用（仅自己文件命中），删
4. 如果有任何引用，保留并在报告里写明

完成后跑 npx tsc --noEmit 和 npm run build，0 error。

返回简短报告：删了哪几个、保留哪几个（带 reason）、build 状态。200 字以内。
codex
我会先在 `v2` 里确认候选文件是否真实存在，再用 `git grep` 在 `v2/src` 全树按组件名查引用。只有确认命中仅来自自身文件时才删除。
  → 确认候选文件路径存在
  • 逐个 grep 验证外部引用
  • 删除零引用组件
  • 运行 tsc 和 build 验证
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-ChildItem -Path .\\v2\\src\\components -Recurse -File -Include AtlasSection.tsx,ProvinceRail.tsx,CityList.tsx,CityProfile.tsx,PlaceSearch.tsx,CityHero.tsx,PageSources.tsx,EarthIntro.tsx,MuseumFlow.tsx,HistoryVideo.tsx,SourcesNote.tsx | ForEach-Object { "'$_.FullName }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short' in c:\Users\h\Documents\New project 2
 succeeded in 531ms:
C:\Users\h\Documents\New project 2\v2\src\components\atlas\AtlasSection.tsx
C:\Users\h\Documents\New project 2\v2\src\components\atlas\CityList.tsx
C:\Users\h\Documents\New project 2\v2\src\components\atlas\CityProfile.tsx
C:\Users\h\Documents\New project 2\v2\src\components\atlas\ProvinceRail.tsx
C:\Users\h\Documents\New project 2\v2\src\components\city\CityHero.tsx
C:\Users\h\Documents\New project 2\v2\src\components\common\PageSources.tsx
C:\Users\h\Documents\New project 2\v2\src\components\common\SourcesNote.tsx
C:\Users\h\Documents\New project 2\v2\src\components\map\EarthIntro.tsx
C:\Users\h\Documents\New project 2\v2\src\components\search\PlaceSearch.tsx
C:\Users\h\Documents\New project 2\v2\src\components\sections\HistoryVideo.tsx
C:\Users\h\Documents\New project 2\v2\src\components\sections\MuseumFlow.tsx
C:\Users\h\Documents\New project 2\v2\src\components\sections\SourcesNote.tsx

 succeeded in 531ms:
codex
路径确认发现候选清单里的多数文件已经被移动到子目录，例如 `atlas/`、`city/`、`common/`、`search/`、`sections/`。接下来我按组件名查 `v2/src`，把自身文件命中和外部引用分开看。
  ✓ 确认候选文件路径存在
  → 逐个 grep 验证外部引用
  • 删除零引用组件
  • 运行 tsc 和 build 验证
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'grep --version' in c:\Users\h\Documents\New project 2
 succeeded in 572ms:
grep (GNU grep) 3.0
Copyright (C) 2017 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Written by Mike Haertel and others, see <http://git.sv.gnu.org/cgit/grep.git/tree/AUTHORS>.

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$names = @('"'AtlasSection','ProvinceRail','CityList','CityProfile','PlaceSearch','CityHero','PageSources','EarthIntro','MuseumFlow','HistoryVideo','SourcesNote'); foreach ("'$name in $names) { Write-Output "### $name"; grep -RIn --include='"'*.ts' --include='*.tsx' --include='*.js' --include='*.jsx' --include='*.mjs' --include='*.cjs' --include='*.json' --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=build --exclude-dir=.next --exclude-dir=.vite "'$name .'"\\v2\\src }" in c:\Users\h\Documents\New project 2
 succeeded in 1670ms:
### AtlasSection
.\v2\src/components/atlas/AtlasSection.tsx:7:export default function AtlasSection() {
### ProvinceRail
.\v2\src/components/atlas/AtlasSection.tsx:3:import ProvinceRail from "./ProvinceRail";
.\v2\src/components/atlas/AtlasSection.tsx:21:        <ProvinceRail />
.\v2\src/components/atlas/ProvinceRail.tsx:7:export default function ProvinceRail() {
### CityList
.\v2\src/components/atlas/AtlasSection.tsx:4:import CityList from "./CityList";
.\v2\src/components/atlas/AtlasSection.tsx:27:          <CityList cities={province?.cities ?? []} />
.\v2\src/components/atlas/CityList.tsx:8:export default function CityList({ cities }: { cities: CityRecord[] }) {
### CityProfile
.\v2\src/components/atlas/AtlasSection.tsx:5:import CityProfile from "./CityProfile";
.\v2\src/components/atlas/AtlasSection.tsx:29:        <CityProfile />
.\v2\src/components/atlas/CityProfile.tsx:7:export default function CityProfile() {
### PlaceSearch
.\v2\src/components/search/PlaceSearch.tsx:7:export default function PlaceSearch() {
### CityHero
.\v2\src/components/city/CityHero.tsx:8:export default function CityHero({ cityId }: Props) {
### PageSources
.\v2\src/components/common/PageSources.tsx:6:export default function PageSources({ ids }: Props) {
### EarthIntro
.\v2\src/components/map/EarthIntro.tsx:27:export default function EarthIntro({ onDone }: Props) {
### MuseumFlow
.\v2\src/components/sections/MuseumFlow.tsx:10:export default function MuseumFlow() {
### HistoryVideo
.\v2\src/components/sections/HistoryVideo.tsx:3:export default function HistoryVideo() {
### SourcesNote
.\v2\src/components/common/SourcesNote.tsx:4:export default function SourcesNote() {
.\v2\src/components/sections/SourcesNote.tsx:5:export default function SourcesNote() {
.\v2\src/pages/CityPage.tsx:10:import SourcesNote from "../components/common/SourcesNote";
.\v2\src/pages/CityPage.tsx:73:          <SourcesNote />
.\v2\src/pages/GuidePage.tsx:6:import SourcesNote from "../components/common/SourcesNote";
.\v2\src/pages/GuidePage.tsx:62:      <SourcesNote />

codex
第一轮结果里 `AtlasSection` 本身没有外部引用，但 `ProvinceRail`、`CityList`、`CityProfile` 只被它引用。我会先删掉这个已确认孤儿父组件，再对这三个子组件重新 grep，避免把“将被删除的引用”误当成保留理由。
  ✓ 确认候选文件路径存在
  → 逐个 grep 验证外部引用
  → 删除零引用组件
  • 运行 tsc 和 build 验证
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "grep -RIn --include='*.ts' --include='*.tsx' --include='*.js' --include='*.jsx' --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=build --exclude-dir=.next --exclude-dir=.vite -E 'EarthIntro|HeroMap|components/map/EarthIntro|./EarthIntro' .\\v2\\src" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "grep -RIn --include='*.ts' --include='*.tsx' --include='*.js' --include='*.jsx' --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=build --exclude-dir=.next --exclude-dir=.vite -E 'SourcesNote|components/sections/SourcesNote|../components/sections/SourcesNote|./SourcesNote' .\\v2\\src" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-ChildItem -Path .\\v2\\src -Recurse -File -Filter HeroMap.tsx | ForEach-Object { "'$_.FullName }' in c:\Users\h\Documents\New project 2
 succeeded in 1008ms:
.\v2\src/components/map/EarthIntro.tsx:27:export default function EarthIntro({ onDone }: Props) {
.\v2\src/components/map/HeroMap.tsx:11:export default function HeroMap() {
.\v2\src/pages/MapPage.tsx:3:import HeroMap from "../components/map/HeroMap";
.\v2\src/pages/MapPage.tsx:30:      <HeroMap />

 succeeded in 1004ms:
C:\Users\h\Documents\New project 2\v2\src\components\map\HeroMap.tsx

 succeeded in 1025ms:
.\v2\src/components/common/SourcesNote.tsx:4:export default function SourcesNote() {
.\v2\src/components/sections/SourcesNote.tsx:5:export default function SourcesNote() {
.\v2\src/pages/CityPage.tsx:10:import SourcesNote from "../components/common/SourcesNote";
.\v2\src/pages/CityPage.tsx:73:          <SourcesNote />
.\v2\src/pages/GuidePage.tsx:6:import SourcesNote from "../components/common/SourcesNote";
.\v2\src/pages/GuidePage.tsx:80:      <SourcesNote />

codex
`EarthIntro` 的二次 grep 没有发现 `HeroMap` lazy import 或其他路径引用；`SourcesNote` 的页面引用实际指向 `components/common/SourcesNote`，候选的 `components/sections/SourcesNote` 没有被导入。现在删除已验证为零外部引用的文件。
apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\atlas\AtlasSection.tsx
c:\Users\h\Documents\New project 2\v2\src\components\city\CityHero.tsx
c:\Users\h\Documents\New project 2\v2\src\components\common\PageSources.tsx
c:\Users\h\Documents\New project 2\v2\src\components\map\EarthIntro.tsx
c:\Users\h\Documents\New project 2\v2\src\components\search\PlaceSearch.tsx
c:\Users\h\Documents\New project 2\v2\src\components\sections\HistoryVideo.tsx
c:\Users\h\Documents\New project 2\v2\src\components\sections\MuseumFlow.tsx
c:\Users\h\Documents\New project 2\v2\src\components\sections\SourcesNote.tsx
diff --git a/v2/src/components/atlas/AtlasSection.tsx b/v2/src/components/atlas/AtlasSection.tsx
deleted file mode 100644
index 7dcfe4b7987081264b006a6a4324f5e074eda166..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/AtlasSection.tsx
+++ /dev/null
@@ -1,33 +0,0 @@
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import ProvinceRail from "./ProvinceRail";
-import CityList from "./CityList";
-import CityProfile from "./CityProfile";
-
-export default function AtlasSection() {
-  const { t } = useLang();
-  const { province } = useAtlas();
-
-  return (
-    <section id="atlas" className="flex flex-col gap-4">
-      <header className="flex flex-wrap items-end justify-between gap-3">
-        <div>
-          <h2 className="text-2xl font-bold">{t("atlasTitle")}</h2>
-          <p className="text-sm text-muted">{t("atlasBody")}</p>
-        </div>
-      </header>
-
-      <div className="grid gap-4 md:grid-cols-[260px_minmax(0,1fr)_360px]">
-        <ProvinceRail />
-        <div className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4">
-          <header className="flex items-baseline justify-between">
-            <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
-            <h3 className="text-lg font-bold">{province ? province.name : "China"}</h3>
-          </header>
-          <CityList cities={province?.cities ?? []} />
-        </div>
-        <CityProfile />
-      </div>
-    </section>
-  );
-}
diff --git a/v2/src/components/city/CityHero.tsx b/v2/src/components/city/CityHero.tsx
deleted file mode 100644
index 7b6fef59b459c9e63845b4c806a2c9601b2cbb12..0000000000000000000000000000000000000000
--- a/v2/src/components/city/CityHero.tsx
+++ /dev/null
@@ -1,86 +0,0 @@
-import clsx from "clsx";
-import { attractionsByCity, type Attraction } from "../../data/city-attractions";
-import type { CityId } from "../../data/transport";
-import { useLang } from "../../store/language";
-
-type Props = { cityId: CityId };
-
-export default function CityHero({ cityId }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-  const attractions = attractionsByCity(cityId);
-  if (attractions.length === 0) return null;
-
-  return (
-    <section className="flex flex-col gap-3">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "本市标志景点" : "Signature attractions"}
-        </span>
-        <h2 className="text-2xl font-bold">
-          {isZh ? "去之前先认认这几个地方" : "Know these places before you go"}
-        </h2>
-      </header>
-      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
-        {attractions.map((a) => (
-          <AttractionCard key={a.id} attraction={a} isZh={isZh} />
-        ))}
-      </ul>
-    </section>
-  );
-}
-
-function AttractionCard({ attraction: a, isZh }: { attraction: Attraction; isZh: boolean }) {
-  return (
-    <li className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
-      <a
-        href={a.officialUrl}
-        target="_blank"
-        rel="noreferrer"
-        className="group flex flex-col gap-0"
-      >
-        <div className="aspect-[16/10] w-full overflow-hidden bg-paper">
-          <img
-            src={a.imageUrl}
-            alt={isZh ? a.nameZh : a.nameEn}
-            loading="lazy"
-            referrerPolicy="no-referrer"
-            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
-            onError={(e) => {
-              (e.currentTarget as HTMLImageElement).style.display = "none";
-            }}
-          />
-        </div>
-        <div className="flex flex-col gap-2 p-4">
-          <div className="flex items-center justify-between gap-2">
-            <span
-              className={clsx(
-                "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
-                a.tier === "must-visit"
-                  ? "bg-jade-soft text-jade"
-                  : "bg-amber-100 text-amber-900"
-              )}
-            >
-              {a.tier === "must-visit"
-                ? isZh ? "必去" : "Must-visit"
-                : isZh ? "值得去" : "Worth-it"}
-            </span>
-            <span className="text-[10px] text-muted">
-              {isZh ? a.districtZh : a.districtEn}
-            </span>
-          </div>
-          <strong className="text-sm leading-tight">
-            {isZh ? a.nameZh : a.nameEn}
-          </strong>
-          <p className="line-clamp-3 text-xs leading-relaxed text-ink/80">
-            {isZh ? a.whyZh : a.whyEn}
-          </p>
-          <span className="text-[10px] text-muted/70">
-            {isZh ? "图片：" : "Photo: "}
-            {a.imageCredit}
-          </span>
-        </div>
-      </a>
-    </li>
-  );
-}
diff --git a/v2/src/components/common/PageSources.tsx b/v2/src/components/common/PageSources.tsx
deleted file mode 100644
index 5510ffa6bd49c7a6c349e5e259054a0b05c499d6..0000000000000000000000000000000000000000
--- a/v2/src/components/common/PageSources.tsx
+++ /dev/null
@@ -1,53 +0,0 @@
-import { getSource, type SourceCitation } from "../../data/sources";
-import { useLang } from "../../store/language";
-
-type Props = { ids: string[] };
-
-export default function PageSources({ ids }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-
-  const sources = Array.from(new Set(ids))
-    .map((id) => getSource(id))
-    .filter((s): s is SourceCitation => Boolean(s));
-
-  if (sources.length === 0) return null;
-
-  return (
-    <footer className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "信息来源" : "Sources"}
-        </span>
-        <p className="text-xs text-muted">
-          {isZh
-            ? "本页所有信息均引自下列官方公开来源；点击查看原文。"
-            : "Every fact on this page is cited to one of the official sources below. Click to read the originals."}
-        </p>
-      </header>
-      <ol className="grid gap-1.5 text-xs leading-relaxed">
-        {sources.map((s, i) => (
-          <li key={s.id} className="flex gap-2">
-            <span className="shrink-0 tabular-nums text-muted">[{i + 1}]</span>
-            <a
-              href={s.url}
-              target="_blank"
-              rel="noreferrer"
-              className="flex-1 text-ink hover:text-jade hover:underline"
-            >
-              {s.community && (
-                <span className="mr-1.5 inline-block rounded-sm bg-amber-100 px-1 py-px text-[9px] font-bold uppercase tracking-wider text-amber-800 align-middle">
-                  blog
-                </span>
-              )}
-              <span className="font-bold">{s.publisher}</span>
-              <span className="text-muted"> · {s.pageTitleEn}</span>
-              {s.publishedDate && <span className="text-muted"> · {s.publishedDate}</span>}
-              <span className="ml-1 text-muted/60">— {s.domain}</span>
-            </a>
-          </li>
-        ))}
-      </ol>
-    </footer>
-  );
-}
diff --git a/v2/src/components/map/EarthIntro.tsx b/v2/src/components/map/EarthIntro.tsx
deleted file mode 100644
index e92f647816b6e07c354c0799b90a762dd5c0126b..0000000000000000000000000000000000000000
--- a/v2/src/components/map/EarthIntro.tsx
+++ /dev/null
@@ -1,149 +0,0 @@
-import { useEffect, useRef } from "react";
-import * as THREE from "three";
-
-type Props = { onDone: () => void };
-
-const SPIN_MS = 4000;
-const HOLD_MS = 1500;
-const ZOOM_MS = 1500;
-const TOTAL_MS = SPIN_MS + HOLD_MS + ZOOM_MS;
-
-// Verified against the actual asset (v2/public/assets/earth-bluemarble.jpg, 2:1 equirectangular,
-// prime meridian at horizontal centre, Africa centred). Three.js SphereGeometry default UV:
-// vertex.x = -r·cos(u·2π)·sin(v·π); vertex.y = r·cos(v·π); vertex.z = r·sin(u·2π)·sin(v·π).
-// At rotation = 0, +Z (camera-facing) point sits at u = 0.25, v = 0.5 → lon -90°, lat 0° (Americas).
-// To bring China centre (lon 105°E, lat 35°N → u = 0.79167, v = 0.30556) to the camera:
-//   1. Y-rotation: α_y = π/2 - u·2π = π/2 - 4.974 = -3.403 rad → puts China centre at world (0, +0.574, +0.819)
-//   2. X-rotation: α_x = arctan(0.574 / 0.819) = 0.611 rad ≈ 35° → tilts that point onto +Z exactly
-const CHINA_LON_DEG = 105;
-const CHINA_LAT_DEG = 35;
-const CHINA_U = (CHINA_LON_DEG + 180) / 360;
-const CHINA_V = (90 - CHINA_LAT_DEG) / 180;
-const CHINA_THETA_PHI = CHINA_U * 2 * Math.PI;
-const CHINA_THETA_LAT = CHINA_V * Math.PI;
-const TARGET_Y = Math.PI / 2 - CHINA_THETA_PHI; // -3.403 rad
-const TARGET_X = Math.atan2(Math.cos(CHINA_THETA_LAT), Math.sin(CHINA_THETA_LAT)); // 0.611 rad
-
-export default function EarthIntro({ onDone }: Props) {
-  const hostRef = useRef<HTMLDivElement | null>(null);
-  const doneRef = useRef(onDone);
-
-  useEffect(() => {
-    doneRef.current = onDone;
-  }, [onDone]);
-
-  useEffect(() => {
-    const host = hostRef.current;
-    if (!host) return;
-
-    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
-    renderer.setClearColor(0x000000, 0);
-    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
-    host.appendChild(renderer.domElement);
-    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });
-
-    const scene = new THREE.Scene();
-    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
-    camera.position.set(0, 0, 3.0);
-
-    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
-    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
-    sun.position.set(-2.5, 1.6, 4);
-    scene.add(sun);
-
-    const loader = new THREE.TextureLoader();
-    const earthTex = loader.load("/assets/earth-bluemarble.jpg");
-    earthTex.colorSpace = THREE.SRGBColorSpace;
-
-    const earth = new THREE.Mesh(
-      new THREE.SphereGeometry(1, 96, 64),
-      new THREE.MeshStandardMaterial({ map: earthTex, roughness: 0.92, metalness: 0 })
-    );
-    // 1.5 revolutions before landing on China (eastward visual direction = negative Y rotation)
-    const endY = TARGET_Y;
-    const startY = endY + Math.PI * 3;
-    earth.rotation.y = startY;
-    scene.add(earth);
-
-    const atmosphere = new THREE.Mesh(
-      new THREE.SphereGeometry(1.05, 64, 32),
-      new THREE.ShaderMaterial({
-        transparent: true,
-        side: THREE.BackSide,
-        blending: THREE.AdditiveBlending,
-        depthWrite: false,
-        vertexShader: `
-          varying vec3 vNormal;
-          void main() {
-            vNormal = normalize(normalMatrix * normal);
-            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
-          }`,
-        fragmentShader: `
-          varying vec3 vNormal;
-          void main() {
-            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
-            gl_FragColor = vec4(0.40, 0.68, 1.0, 1.0) * intensity;
-          }`
-      })
-    );
-    scene.add(atmosphere);
-
-    const resize = () => {
-      const rect = host.getBoundingClientRect();
-      const w = Math.max(1, Math.floor(rect.width));
-      const h = Math.max(1, Math.floor(rect.height));
-      renderer.setSize(w, h, false);
-      camera.aspect = w / h;
-      camera.updateProjectionMatrix();
-    };
-    const ro = new ResizeObserver(resize);
-    ro.observe(host);
-    resize();
-
-    let start: number | null = null;
-    let raf = 0;
-
-    const animate = (t: number) => {
-      if (start === null) start = t;
-      const elapsed = t - start;
-
-      const spinT = Math.min(elapsed, SPIN_MS) / SPIN_MS;
-      const spinEased = 1 - Math.pow(1 - spinT, 3); // ease-out cubic
-      const zoomRaw = Math.max(0, elapsed - SPIN_MS - HOLD_MS) / ZOOM_MS;
-      const zoomT = Math.min(1, zoomRaw);
-      const zoomEased = 1 - Math.pow(1 - zoomT, 3);
-
-      const yRot = startY + (endY - startY) * spinEased;
-      earth.rotation.y = yRot;
-      atmosphere.rotation.y = yRot;
-      earth.rotation.x = TARGET_X * spinEased;
-      atmosphere.rotation.x = TARGET_X * spinEased;
-
-      camera.position.z = 3.0 - zoomEased * 1.55;
-      host.style.opacity = String(1 - zoomEased);
-
-      renderer.render(scene, camera);
-
-      if (elapsed < TOTAL_MS) {
-        raf = requestAnimationFrame(animate);
-      } else {
-        doneRef.current();
-      }
-    };
-    raf = requestAnimationFrame(animate);
-
-    return () => {
-      cancelAnimationFrame(raf);
-      ro.disconnect();
-      earthTex.dispose();
-      earth.geometry.dispose();
-      (earth.material as THREE.Material).dispose();
-      atmosphere.geometry.dispose();
-      (atmosphere.material as THREE.Material).dispose();
-      renderer.dispose();
-      host.innerHTML = "";
-    };
-  }, []);
-
-  return <div ref={hostRef} aria-hidden className="pointer-events-none absolute inset-0 z-40" />;
-}
diff --git a/v2/src/components/search/PlaceSearch.tsx b/v2/src/components/search/PlaceSearch.tsx
deleted file mode 100644
index 4f83ec26fe5411e6d3650be3ad2b8fe0f3dba54c..0000000000000000000000000000000000000000
--- a/v2/src/components/search/PlaceSearch.tsx
+++ /dev/null
@@ -1,55 +0,0 @@
-import { useId, useMemo, useState } from "react";
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import { findBestMatch, getAllRecords } from "../../lib/search";
-import { placeTypeLabels } from "../../data/i18n";
-
-export default function PlaceSearch() {
-  const { t, lang } = useLang();
-  const { selectPlace } = useAtlas();
-  const [value, setValue] = useState("");
-  const [hint, setHint] = useState<string | null>(null);
-  const datalistId = useId();
-
-  const suggestions = useMemo(() => getAllRecords().slice(0, 120), []);
-
-  const submit = (event: React.FormEvent) => {
-    event.preventDefault();
-    const record = findBestMatch(value);
-    if (!record) {
-      setHint(t("searchNoMatch"));
-      return;
-    }
-    selectPlace(record.provinceId, record.cityId ?? null);
-    setHint(`${t("searchJumped")} ${lang === "zh" ? record.zh : record.en}`);
-    document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
-  };
-
-  return (
-    <form onSubmit={submit} className="flex flex-1 items-center gap-2">
-      <input
-        type="search"
-        list={datalistId}
-        autoComplete="off"
-        value={value}
-        onChange={(e) => setValue(e.target.value)}
-        placeholder={t("searchPlaceholder")}
-        className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2 text-sm focus:border-ink focus:outline-none"
-      />
-      <button
-        type="submit"
-        className="rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
-      >
-        {t("searchButton")}
-      </button>
-      <datalist id={datalistId}>
-        {suggestions.map((record, i) => {
-          const primary = lang === "zh" ? record.zh : record.en;
-          const typeLabel = placeTypeLabels[lang][record.type] ?? record.type;
-          return <option key={`${record.provinceId}-${record.cityId ?? ""}-${i}`} value={primary} label={`${primary} · ${typeLabel}`} />;
-        })}
-      </datalist>
-      {hint && <span className="ml-2 hidden text-xs text-muted lg:inline">{hint}</span>}
-    </form>
-  );
-}
diff --git a/v2/src/components/sections/HistoryVideo.tsx b/v2/src/components/sections/HistoryVideo.tsx
deleted file mode 100644
index fabd834e41f64ddccb40198d92c4759285dcb51b..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/HistoryVideo.tsx
+++ /dev/null
@@ -1,35 +0,0 @@
-import { useLang } from "../../store/language";
-
-export default function HistoryVideo() {
-  const { t } = useLang();
-  return (
-    <section id="video" className="grid items-start gap-6 md:grid-cols-[1fr_2fr]">
-      <div className="space-y-3">
-        <h2 className="text-2xl font-bold">{t("historyVideoTitle")}</h2>
-        <p className="text-sm leading-relaxed text-muted">{t("historyVideoBody")}</p>
-      </div>
-      <figure className="overflow-hidden rounded-xl border border-line bg-black">
-        <div className="aspect-video">
-          <iframe
-            className="h-full w-full"
-            src="https://www.youtube.com/embed/0DzZgBd4W1Q"
-            title="Discover a China Beyond Your Imagination"
-            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
-            allowFullScreen
-          />
-        </div>
-        <figcaption className="flex items-center justify-between gap-3 bg-white px-4 py-3 text-xs">
-          <strong>{t("historyVideoMeta")}</strong>
-          <a
-            className="text-muted hover:text-jade"
-            href="https://en.chinaculture.org/a/202206/07/WS629edf41a310fd2b29e61286.html"
-            target="_blank"
-            rel="noreferrer"
-          >
-            {t("historyVideoSource")}
-          </a>
-        </figcaption>
-      </figure>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/MuseumFlow.tsx b/v2/src/components/sections/MuseumFlow.tsx
deleted file mode 100644
index 7bcf8805fbbb34b019b679e0e3ca5ce056b94eb9..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/MuseumFlow.tsx
+++ /dev/null
@@ -1,29 +0,0 @@
-import { useLang } from "../../store/language";
-
-const STEPS = [
-  { titleKey: "flowOneTitle", bodyKey: "flowOneBody" },
-  { titleKey: "flowTwoTitle", bodyKey: "flowTwoBody" },
-  { titleKey: "flowThreeTitle", bodyKey: "flowThreeBody" },
-  { titleKey: "flowFourTitle", bodyKey: "flowFourBody" }
-];
-
-export default function MuseumFlow() {
-  const { t } = useLang();
-  return (
-    <section id="museums" className="flex flex-col gap-4">
-      <header>
-        <h2 className="text-2xl font-bold">{t("museumTitle")}</h2>
-        <p className="text-sm text-muted">{t("museumBody")}</p>
-      </header>
-      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
-        {STEPS.map((step, i) => (
-          <li key={step.titleKey} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
-            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
-            <h3 className="text-base font-bold">{t(step.titleKey)}</h3>
-            <p className="text-sm text-muted">{t(step.bodyKey)}</p>
-          </li>
-        ))}
-      </ol>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/SourcesNote.tsx b/v2/src/components/sections/SourcesNote.tsx
deleted file mode 100644
index 8fbbff35733ef16fce104d48e5a8c61e32d25f39..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/SourcesNote.tsx
+++ /dev/null
@@ -1,20 +0,0 @@
-import { useLang } from "../../store/language";
-
-const RULES = ["ruleOne", "ruleTwo", "ruleThree", "ruleFour"];
-
-export default function SourcesNote() {
-  const { t } = useLang();
-  return (
-    <section id="sources" className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header>
-        <h2 className="text-2xl font-bold">{t("sourcesTitle")}</h2>
-        <p className="text-sm text-muted">{t("sourcesBody")}</p>
-      </header>
-      <ul className="grid list-inside list-disc gap-1 text-sm">
-        {RULES.map((key) => (
-          <li key={key}>{t(key)}</li>
-        ))}
-      </ul>
-    </section>
-  );
-}

diff --git a/v2/src/components/atlas/AtlasSection.tsx b/v2/src/components/atlas/AtlasSection.tsx
deleted file mode 100644
index 7dcfe4b7987081264b006a6a4324f5e074eda166..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/AtlasSection.tsx
+++ /dev/null
@@ -1,33 +0,0 @@
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import ProvinceRail from "./ProvinceRail";
-import CityList from "./CityList";
-import CityProfile from "./CityProfile";
-
-export default function AtlasSection() {
-  const { t } = useLang();
-  const { province } = useAtlas();
-
-  return (
-    <section id="atlas" className="flex flex-col gap-4">
-      <header className="flex flex-wrap items-end justify-between gap-3">
-        <div>
-          <h2 className="text-2xl font-bold">{t("atlasTitle")}</h2>
-          <p className="text-sm text-muted">{t("atlasBody")}</p>
-        </div>
-      </header>
-
-      <div className="grid gap-4 md:grid-cols-[260px_minmax(0,1fr)_360px]">
-        <ProvinceRail />
-        <div className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4">
-          <header className="flex items-baseline justify-between">
-            <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
-            <h3 className="text-lg font-bold">{province ? province.name : "China"}</h3>
-          </header>
-          <CityList cities={province?.cities ?? []} />
-        </div>
-        <CityProfile />
-      </div>
-    </section>
-  );
-}
diff --git a/v2/src/components/city/CityHero.tsx b/v2/src/components/city/CityHero.tsx
deleted file mode 100644
index 7b6fef59b459c9e63845b4c806a2c9601b2cbb12..0000000000000000000000000000000000000000
--- a/v2/src/components/city/CityHero.tsx
+++ /dev/null
@@ -1,86 +0,0 @@
-import clsx from "clsx";
-import { attractionsByCity, type Attraction } from "../../data/city-attractions";
-import type { CityId } from "../../data/transport";
-import { useLang } from "../../store/language";
-
-type Props = { cityId: CityId };
-
-export default function CityHero({ cityId }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-  const attractions = attractionsByCity(cityId);
-  if (attractions.length === 0) return null;
-
-  return (
-    <section className="flex flex-col gap-3">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "本市标志景点" : "Signature attractions"}
-        </span>
-        <h2 className="text-2xl font-bold">
-          {isZh ? "去之前先认认这几个地方" : "Know these places before you go"}
-        </h2>
-      </header>
-      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
-        {attractions.map((a) => (
-          <AttractionCard key={a.id} attraction={a} isZh={isZh} />
-        ))}
-      </ul>
-    </section>
-  );
-}
-
-function AttractionCard({ attraction: a, isZh }: { attraction: Attraction; isZh: boolean }) {
-  return (
-    <li className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
-      <a
-        href={a.officialUrl}
-        target="_blank"
-        rel="noreferrer"
-        className="group flex flex-col gap-0"
-      >
-        <div className="aspect-[16/10] w-full overflow-hidden bg-paper">
-          <img
-            src={a.imageUrl}
-            alt={isZh ? a.nameZh : a.nameEn}
-            loading="lazy"
-            referrerPolicy="no-referrer"
-            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
-            onError={(e) => {
-              (e.currentTarget as HTMLImageElement).style.display = "none";
-            }}
-          />
-        </div>
-        <div className="flex flex-col gap-2 p-4">
-          <div className="flex items-center justify-between gap-2">
-            <span
-              className={clsx(
-                "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
-                a.tier === "must-visit"
-                  ? "bg-jade-soft text-jade"
-                  : "bg-amber-100 text-amber-900"
-              )}
-            >
-              {a.tier === "must-visit"
-                ? isZh ? "必去" : "Must-visit"
-                : isZh ? "值得去" : "Worth-it"}
-            </span>
-            <span className="text-[10px] text-muted">
-              {isZh ? a.districtZh : a.districtEn}
-            </span>
-          </div>
-          <strong className="text-sm leading-tight">
-            {isZh ? a.nameZh : a.nameEn}
-          </strong>
-          <p className="line-clamp-3 text-xs leading-relaxed text-ink/80">
-            {isZh ? a.whyZh : a.whyEn}
-          </p>
-          <span className="text-[10px] text-muted/70">
-            {isZh ? "图片：" : "Photo: "}
-            {a.imageCredit}
-          </span>
-        </div>
-      </a>
-    </li>
-  );
-}
diff --git a/v2/src/components/common/PageSources.tsx b/v2/src/components/common/PageSources.tsx
deleted file mode 100644
index 5510ffa6bd49c7a6c349e5e259054a0b05c499d6..0000000000000000000000000000000000000000
--- a/v2/src/components/common/PageSources.tsx
+++ /dev/null
@@ -1,53 +0,0 @@
-import { getSource, type SourceCitation } from "../../data/sources";
-import { useLang } from "../../store/language";
-
-type Props = { ids: string[] };
-
-export default function PageSources({ ids }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-
-  const sources = Array.from(new Set(ids))
-    .map((id) => getSource(id))
-    .filter((s): s is SourceCitation => Boolean(s));
-
-  if (sources.length === 0) return null;
-
-  return (
-    <footer className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "信息来源" : "Sources"}
-        </span>
-        <p className="text-xs text-muted">
-          {isZh
-            ? "本页所有信息均引自下列官方公开来源；点击查看原文。"
-            : "Every fact on this page is cited to one of the official sources below. Click to read the originals."}
-        </p>
-      </header>
-      <ol className="grid gap-1.5 text-xs leading-relaxed">
-        {sources.map((s, i) => (
-          <li key={s.id} className="flex gap-2">
-            <span className="shrink-0 tabular-nums text-muted">[{i + 1}]</span>
-            <a
-              href={s.url}
-              target="_blank"
-              rel="noreferrer"
-              className="flex-1 text-ink hover:text-jade hover:underline"
-            >
-              {s.community && (
-                <span className="mr-1.5 inline-block rounded-sm bg-amber-100 px-1 py-px text-[9px] font-bold uppercase tracking-wider text-amber-800 align-middle">
-                  blog
-                </span>
-              )}
-              <span className="font-bold">{s.publisher}</span>
-              <span className="text-muted"> · {s.pageTitleEn}</span>
-              {s.publishedDate && <span className="text-muted"> · {s.publishedDate}</span>}
-              <span className="ml-1 text-muted/60">— {s.domain}</span>
-            </a>
-          </li>
-        ))}
-      </ol>
-    </footer>
-  );
-}
diff --git a/v2/src/components/map/EarthIntro.tsx b/v2/src/components/map/EarthIntro.tsx
deleted file mode 100644
index e92f647816b6e07c354c0799b90a762dd5c0126b..0000000000000000000000000000000000000000
--- a/v2/src/components/map/EarthIntro.tsx
+++ /dev/null
@@ -1,149 +0,0 @@
-import { useEffect, useRef } from "react";
-import * as THREE from "three";
-
-type Props = { onDone: () => void };
-
-const SPIN_MS = 4000;
-const HOLD_MS = 1500;
-const ZOOM_MS = 1500;
-const TOTAL_MS = SPIN_MS + HOLD_MS + ZOOM_MS;
-
-// Verified against the actual asset (v2/public/assets/earth-bluemarble.jpg, 2:1 equirectangular,
-// prime meridian at horizontal centre, Africa centred). Three.js SphereGeometry default UV:
-// vertex.x = -r·cos(u·2π)·sin(v·π); vertex.y = r·cos(v·π); vertex.z = r·sin(u·2π)·sin(v·π).
-// At rotation = 0, +Z (camera-facing) point sits at u = 0.25, v = 0.5 → lon -90°, lat 0° (Americas).
-// To bring China centre (lon 105°E, lat 35°N → u = 0.79167, v = 0.30556) to the camera:
-//   1. Y-rotation: α_y = π/2 - u·2π = π/2 - 4.974 = -3.403 rad → puts China centre at world (0, +0.574, +0.819)
-//   2. X-rotation: α_x = arctan(0.574 / 0.819) = 0.611 rad ≈ 35° → tilts that point onto +Z exactly
-const CHINA_LON_DEG = 105;
-const CHINA_LAT_DEG = 35;
-const CHINA_U = (CHINA_LON_DEG + 180) / 360;
-const CHINA_V = (90 - CHINA_LAT_DEG) / 180;
-const CHINA_THETA_PHI = CHINA_U * 2 * Math.PI;
-const CHINA_THETA_LAT = CHINA_V * Math.PI;
-const TARGET_Y = Math.PI / 2 - CHINA_THETA_PHI; // -3.403 rad
-const TARGET_X = Math.atan2(Math.cos(CHINA_THETA_LAT), Math.sin(CHINA_THETA_LAT)); // 0.611 rad
-
-export default function EarthIntro({ onDone }: Props) {
-  const hostRef = useRef<HTMLDivElement | null>(null);
-  const doneRef = useRef(onDone);
-
-  useEffect(() => {
-    doneRef.current = onDone;
-  }, [onDone]);
-
-  useEffect(() => {
-    const host = hostRef.current;
-    if (!host) return;
-
-    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
-    renderer.setClearColor(0x000000, 0);
-    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
-    host.appendChild(renderer.domElement);
-    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });
-
-    const scene = new THREE.Scene();
-    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
-    camera.position.set(0, 0, 3.0);
-
-    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
-    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
-    sun.position.set(-2.5, 1.6, 4);
-    scene.add(sun);
-
-    const loader = new THREE.TextureLoader();
-    const earthTex = loader.load("/assets/earth-bluemarble.jpg");
-    earthTex.colorSpace = THREE.SRGBColorSpace;
-
-    const earth = new THREE.Mesh(
-      new THREE.SphereGeometry(1, 96, 64),
-      new THREE.MeshStandardMaterial({ map: earthTex, roughness: 0.92, metalness: 0 })
-    );
-    // 1.5 revolutions before landing on China (eastward visual direction = negative Y rotation)
-    const endY = TARGET_Y;
-    const startY = endY + Math.PI * 3;
-    earth.rotation.y = startY;
-    scene.add(earth);
-
-    const atmosphere = new THREE.Mesh(
-      new THREE.SphereGeometry(1.05, 64, 32),
-      new THREE.ShaderMaterial({
-        transparent: true,
-        side: THREE.BackSide,
-        blending: THREE.AdditiveBlending,
-        depthWrite: false,
-        vertexShader: `
-          varying vec3 vNormal;
-          void main() {
-            vNormal = normalize(normalMatrix * normal);
-            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
-          }`,
-        fragmentShader: `
-          varying vec3 vNormal;
-          void main() {
-            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
-            gl_FragColor = vec4(0.40, 0.68, 1.0, 1.0) * intensity;
-          }`
-      })
-    );
-    scene.add(atmosphere);
-
-    const resize = () => {
-      const rect = host.getBoundingClientRect();
-      const w = Math.max(1, Math.floor(rect.width));
-      const h = Math.max(1, Math.floor(rect.height));
-      renderer.setSize(w, h, false);
-      camera.aspect = w / h;
-      camera.updateProjectionMatrix();
-    };
-    const ro = new ResizeObserver(resize);
-    ro.observe(host);
-    resize();
-
-    let start: number | null = null;
-    let raf = 0;
-
-    const animate = (t: number) => {
-      if (start === null) start = t;
-      const elapsed = t - start;
-
-      const spinT = Math.min(elapsed, SPIN_MS) / SPIN_MS;
-      const spinEased = 1 - Math.pow(1 - spinT, 3); // ease-out cubic
-      const zoomRaw = Math.max(0, elapsed - SPIN_MS - HOLD_MS) / ZOOM_MS;
-      const zoomT = Math.min(1, zoomRaw);
-      const zoomEased = 1 - Math.pow(1 - zoomT, 3);
-
-      const yRot = startY + (endY - startY) * spinEased;
-      earth.rotation.y = yRot;
-      atmosphere.rotation.y = yRot;
-      earth.rotation.x = TARGET_X * spinEased;
-      atmosphere.rotation.x = TARGET_X * spinEased;
-
-      camera.position.z = 3.0 - zoomEased * 1.55;
-      host.style.opacity = String(1 - zoomEased);
-
-      renderer.render(scene, camera);
-
-      if (elapsed < TOTAL_MS) {
-        raf = requestAnimationFrame(animate);
-      } else {
-        doneRef.current();
-      }
-    };
-    raf = requestAnimationFrame(animate);
-
-    return () => {
-      cancelAnimationFrame(raf);
-      ro.disconnect();
-      earthTex.dispose();
-      earth.geometry.dispose();
-      (earth.material as THREE.Material).dispose();
-      atmosphere.geometry.dispose();
-      (atmosphere.material as THREE.Material).dispose();
-      renderer.dispose();
-      host.innerHTML = "";
-    };
-  }, []);
-
-  return <div ref={hostRef} aria-hidden className="pointer-events-none absolute inset-0 z-40" />;
-}
diff --git a/v2/src/components/search/PlaceSearch.tsx b/v2/src/components/search/PlaceSearch.tsx
deleted file mode 100644
index 4f83ec26fe5411e6d3650be3ad2b8fe0f3dba54c..0000000000000000000000000000000000000000
--- a/v2/src/components/search/PlaceSearch.tsx
+++ /dev/null
@@ -1,55 +0,0 @@
-import { useId, useMemo, useState } from "react";
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import { findBestMatch, getAllRecords } from "../../lib/search";
-import { placeTypeLabels } from "../../data/i18n";
-
-export default function PlaceSearch() {
-  const { t, lang } = useLang();
-  const { selectPlace } = useAtlas();
-  const [value, setValue] = useState("");
-  const [hint, setHint] = useState<string | null>(null);
-  const datalistId = useId();
-
-  const suggestions = useMemo(() => getAllRecords().slice(0, 120), []);
-
-  const submit = (event: React.FormEvent) => {
-    event.preventDefault();
-    const record = findBestMatch(value);
-    if (!record) {
-      setHint(t("searchNoMatch"));
-      return;
-    }
-    selectPlace(record.provinceId, record.cityId ?? null);
-    setHint(`${t("searchJumped")} ${lang === "zh" ? record.zh : record.en}`);
-    document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
-  };
-
-  return (
-    <form onSubmit={submit} className="flex flex-1 items-center gap-2">
-      <input
-        type="search"
-        list={datalistId}
-        autoComplete="off"
-        value={value}
-        onChange={(e) => setValue(e.target.value)}
-        placeholder={t("searchPlaceholder")}
-        className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2 text-sm focus:border-ink focus:outline-none"
-      />
-      <button
-        type="submit"
-        className="rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
-      >
-        {t("searchButton")}
-      </button>
-      <datalist id={datalistId}>
-        {suggestions.map((record, i) => {
-          const primary = lang === "zh" ? record.zh : record.en;
-          const typeLabel = placeTypeLabels[lang][record.type] ?? record.type;
-          return <option key={`${record.provinceId}-${record.cityId ?? ""}-${i}`} value={primary} label={`${primary} · ${typeLabel}`} />;
-        })}
-      </datalist>
-      {hint && <span className="ml-2 hidden text-xs text-muted lg:inline">{hint}</span>}
-    </form>
-  );
-}
diff --git a/v2/src/components/sections/HistoryVideo.tsx b/v2/src/components/sections/HistoryVideo.tsx
deleted file mode 100644
index fabd834e41f64ddccb40198d92c4759285dcb51b..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/HistoryVideo.tsx
+++ /dev/null
@@ -1,35 +0,0 @@
-import { useLang } from "../../store/language";
-
-export default function HistoryVideo() {
-  const { t } = useLang();
-  return (
-    <section id="video" className="grid items-start gap-6 md:grid-cols-[1fr_2fr]">
-      <div className="space-y-3">
-        <h2 className="text-2xl font-bold">{t("historyVideoTitle")}</h2>
-        <p className="text-sm leading-relaxed text-muted">{t("historyVideoBody")}</p>
-      </div>
-      <figure className="overflow-hidden rounded-xl border border-line bg-black">
-        <div className="aspect-video">
-          <iframe
-            className="h-full w-full"
-            src="https://www.youtube.com/embed/0DzZgBd4W1Q"
-            title="Discover a China Beyond Your Imagination"
-            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
-            allowFullScreen
-          />
-        </div>
-        <figcaption className="flex items-center justify-between gap-3 bg-white px-4 py-3 text-xs">
-          <strong>{t("historyVideoMeta")}</strong>
-          <a
-            className="text-muted hover:text-jade"
-            href="https://en.chinaculture.org/a/202206/07/WS629edf41a310fd2b29e61286.html"
-            target="_blank"
-            rel="noreferrer"
-          >
-            {t("historyVideoSource")}
-          </a>
-        </figcaption>
-      </figure>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/MuseumFlow.tsx b/v2/src/components/sections/MuseumFlow.tsx
deleted file mode 100644
index 7bcf8805fbbb34b019b679e0e3ca5ce056b94eb9..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/MuseumFlow.tsx
+++ /dev/null
@@ -1,29 +0,0 @@
-import { useLang } from "../../store/language";
-
-const STEPS = [
-  { titleKey: "flowOneTitle", bodyKey: "flowOneBody" },
-  { titleKey: "flowTwoTitle", bodyKey: "flowTwoBody" },
-  { titleKey: "flowThreeTitle", bodyKey: "flowThreeBody" },
-  { titleKey: "flowFourTitle", bodyKey: "flowFourBody" }
-];
-
-export default function MuseumFlow() {
-  const { t } = useLang();
-  return (
-    <section id="museums" className="flex flex-col gap-4">
-      <header>
-        <h2 className="text-2xl font-bold">{t("museumTitle")}</h2>
-        <p className="text-sm text-muted">{t("museumBody")}</p>
-      </header>
-      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
-        {STEPS.map((step, i) => (
-          <li key={step.titleKey} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
-            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
-            <h3 className="text-base font-bold">{t(step.titleKey)}</h3>
-            <p className="text-sm text-muted">{t(step.bodyKey)}</p>
-          </li>
-        ))}
-      </ol>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/SourcesNote.tsx b/v2/src/components/sections/SourcesNote.tsx
deleted file mode 100644
index 8fbbff35733ef16fce104d48e5a8c61e32d25f39..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/SourcesNote.tsx
+++ /dev/null
@@ -1,20 +0,0 @@
-import { useLang } from "../../store/language";
-
-const RULES = ["ruleOne", "ruleTwo", "ruleThree", "ruleFour"];
-
-export default function SourcesNote() {
-  const { t } = useLang();
-  return (
-    <section id="sources" className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header>
-        <h2 className="text-2xl font-bold">{t("sourcesTitle")}</h2>
-        <p className="text-sm text-muted">{t("sourcesBody")}</p>
-      </header>
-      <ul className="grid list-inside list-disc gap-1 text-sm">
-        {RULES.map((key) => (
-          <li key={key}>{t(key)}</li>
-        ))}
-      </ul>
-    </section>
-  );
-}

codex
父组件删除后，我重新检查 `ProvinceRail`、`CityList`、`CityProfile`，确认它们是否还被 `v2/src` 其他文件引用。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$names = @('"'ProvinceRail','CityList','CityProfile'); foreach ("'$name in $names) { Write-Output "### $name"; grep -RIn --include='"'*.ts' --include='*.tsx' --include='*.js' --include='*.jsx' --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=build --exclude-dir=.next --exclude-dir=.vite "'$name .'"\\v2\\src }" in c:\Users\h\Documents\New project 2
 succeeded in 730ms:
### ProvinceRail
.\v2\src/components/atlas/ProvinceRail.tsx:7:export default function ProvinceRail() {
### CityList
.\v2\src/components/atlas/CityList.tsx:8:export default function CityList({ cities }: { cities: CityRecord[] }) {
### CityProfile
.\v2\src/components/atlas/CityProfile.tsx:7:export default function CityProfile() {

diff --git a/v2/src/components/atlas/AtlasSection.tsx b/v2/src/components/atlas/AtlasSection.tsx
deleted file mode 100644
index 7dcfe4b7987081264b006a6a4324f5e074eda166..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/AtlasSection.tsx
+++ /dev/null
@@ -1,33 +0,0 @@
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import ProvinceRail from "./ProvinceRail";
-import CityList from "./CityList";
-import CityProfile from "./CityProfile";
-
-export default function AtlasSection() {
-  const { t } = useLang();
-  const { province } = useAtlas();
-
-  return (
-    <section id="atlas" className="flex flex-col gap-4">
-      <header className="flex flex-wrap items-end justify-between gap-3">
-        <div>
-          <h2 className="text-2xl font-bold">{t("atlasTitle")}</h2>
-          <p className="text-sm text-muted">{t("atlasBody")}</p>
-        </div>
-      </header>
-
-      <div className="grid gap-4 md:grid-cols-[260px_minmax(0,1fr)_360px]">
-        <ProvinceRail />
-        <div className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4">
-          <header className="flex items-baseline justify-between">
-            <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
-            <h3 className="text-lg font-bold">{province ? province.name : "China"}</h3>
-          </header>
-          <CityList cities={province?.cities ?? []} />
-        </div>
-        <CityProfile />
-      </div>
-    </section>
-  );
-}
diff --git a/v2/src/components/city/CityHero.tsx b/v2/src/components/city/CityHero.tsx
deleted file mode 100644
index 7b6fef59b459c9e63845b4c806a2c9601b2cbb12..0000000000000000000000000000000000000000
--- a/v2/src/components/city/CityHero.tsx
+++ /dev/null
@@ -1,86 +0,0 @@
-import clsx from "clsx";
-import { attractionsByCity, type Attraction } from "../../data/city-attractions";
-import type { CityId } from "../../data/transport";
-import { useLang } from "../../store/language";
-
-type Props = { cityId: CityId };
-
-export default function CityHero({ cityId }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-  const attractions = attractionsByCity(cityId);
-  if (attractions.length === 0) return null;
-
-  return (
-    <section className="flex flex-col gap-3">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "本市标志景点" : "Signature attractions"}
-        </span>
-        <h2 className="text-2xl font-bold">
-          {isZh ? "去之前先认认这几个地方" : "Know these places before you go"}
-        </h2>
-      </header>
-      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
-        {attractions.map((a) => (
-          <AttractionCard key={a.id} attraction={a} isZh={isZh} />
-        ))}
-      </ul>
-    </section>
-  );
-}
-
-function AttractionCard({ attraction: a, isZh }: { attraction: Attraction; isZh: boolean }) {
-  return (
-    <li className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
-      <a
-        href={a.officialUrl}
-        target="_blank"
-        rel="noreferrer"
-        className="group flex flex-col gap-0"
-      >
-        <div className="aspect-[16/10] w-full overflow-hidden bg-paper">
-          <img
-            src={a.imageUrl}
-            alt={isZh ? a.nameZh : a.nameEn}
-            loading="lazy"
-            referrerPolicy="no-referrer"
-            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
-            onError={(e) => {
-              (e.currentTarget as HTMLImageElement).style.display = "none";
-            }}
-          />
-        </div>
-        <div className="flex flex-col gap-2 p-4">
-          <div className="flex items-center justify-between gap-2">
-            <span
-              className={clsx(
-                "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
-                a.tier === "must-visit"
-                  ? "bg-jade-soft text-jade"
-                  : "bg-amber-100 text-amber-900"
-              )}
-            >
-              {a.tier === "must-visit"
-                ? isZh ? "必去" : "Must-visit"
-                : isZh ? "值得去" : "Worth-it"}
-            </span>
-            <span className="text-[10px] text-muted">
-              {isZh ? a.districtZh : a.districtEn}
-            </span>
-          </div>
-          <strong className="text-sm leading-tight">
-            {isZh ? a.nameZh : a.nameEn}
-          </strong>
-          <p className="line-clamp-3 text-xs leading-relaxed text-ink/80">
-            {isZh ? a.whyZh : a.whyEn}
-          </p>
-          <span className="text-[10px] text-muted/70">
-            {isZh ? "图片：" : "Photo: "}
-            {a.imageCredit}
-          </span>
-        </div>
-      </a>
-    </li>
-  );
-}
diff --git a/v2/src/components/common/PageSources.tsx b/v2/src/components/common/PageSources.tsx
deleted file mode 100644
index 5510ffa6bd49c7a6c349e5e259054a0b05c499d6..0000000000000000000000000000000000000000
--- a/v2/src/components/common/PageSources.tsx
+++ /dev/null
@@ -1,53 +0,0 @@
-import { getSource, type SourceCitation } from "../../data/sources";
-import { useLang } from "../../store/language";
-
-type Props = { ids: string[] };
-
-export default function PageSources({ ids }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-
-  const sources = Array.from(new Set(ids))
-    .map((id) => getSource(id))
-    .filter((s): s is SourceCitation => Boolean(s));
-
-  if (sources.length === 0) return null;
-
-  return (
-    <footer className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "信息来源" : "Sources"}
-        </span>
-        <p className="text-xs text-muted">
-          {isZh
-            ? "本页所有信息均引自下列官方公开来源；点击查看原文。"
-            : "Every fact on this page is cited to one of the official sources below. Click to read the originals."}
-        </p>
-      </header>
-      <ol className="grid gap-1.5 text-xs leading-relaxed">
-        {sources.map((s, i) => (
-          <li key={s.id} className="flex gap-2">
-            <span className="shrink-0 tabular-nums text-muted">[{i + 1}]</span>
-            <a
-              href={s.url}
-              target="_blank"
-              rel="noreferrer"
-              className="flex-1 text-ink hover:text-jade hover:underline"
-            >
-              {s.community && (
-                <span className="mr-1.5 inline-block rounded-sm bg-amber-100 px-1 py-px text-[9px] font-bold uppercase tracking-wider text-amber-800 align-middle">
-                  blog
-                </span>
-              )}
-              <span className="font-bold">{s.publisher}</span>
-              <span className="text-muted"> · {s.pageTitleEn}</span>
-              {s.publishedDate && <span className="text-muted"> · {s.publishedDate}</span>}
-              <span className="ml-1 text-muted/60">— {s.domain}</span>
-            </a>
-          </li>
-        ))}
-      </ol>
-    </footer>
-  );
-}
diff --git a/v2/src/components/map/EarthIntro.tsx b/v2/src/components/map/EarthIntro.tsx
deleted file mode 100644
index e92f647816b6e07c354c0799b90a762dd5c0126b..0000000000000000000000000000000000000000
--- a/v2/src/components/map/EarthIntro.tsx
+++ /dev/null
@@ -1,149 +0,0 @@
-import { useEffect, useRef } from "react";
-import * as THREE from "three";
-
-type Props = { onDone: () => void };
-
-const SPIN_MS = 4000;
-const HOLD_MS = 1500;
-const ZOOM_MS = 1500;
-const TOTAL_MS = SPIN_MS + HOLD_MS + ZOOM_MS;
-
-// Verified against the actual asset (v2/public/assets/earth-bluemarble.jpg, 2:1 equirectangular,
-// prime meridian at horizontal centre, Africa centred). Three.js SphereGeometry default UV:
-// vertex.x = -r·cos(u·2π)·sin(v·π); vertex.y = r·cos(v·π); vertex.z = r·sin(u·2π)·sin(v·π).
-// At rotation = 0, +Z (camera-facing) point sits at u = 0.25, v = 0.5 → lon -90°, lat 0° (Americas).
-// To bring China centre (lon 105°E, lat 35°N → u = 0.79167, v = 0.30556) to the camera:
-//   1. Y-rotation: α_y = π/2 - u·2π = π/2 - 4.974 = -3.403 rad → puts China centre at world (0, +0.574, +0.819)
-//   2. X-rotation: α_x = arctan(0.574 / 0.819) = 0.611 rad ≈ 35° → tilts that point onto +Z exactly
-const CHINA_LON_DEG = 105;
-const CHINA_LAT_DEG = 35;
-const CHINA_U = (CHINA_LON_DEG + 180) / 360;
-const CHINA_V = (90 - CHINA_LAT_DEG) / 180;
-const CHINA_THETA_PHI = CHINA_U * 2 * Math.PI;
-const CHINA_THETA_LAT = CHINA_V * Math.PI;
-const TARGET_Y = Math.PI / 2 - CHINA_THETA_PHI; // -3.403 rad
-const TARGET_X = Math.atan2(Math.cos(CHINA_THETA_LAT), Math.sin(CHINA_THETA_LAT)); // 0.611 rad
-
-export default function EarthIntro({ onDone }: Props) {
-  const hostRef = useRef<HTMLDivElement | null>(null);
-  const doneRef = useRef(onDone);
-
-  useEffect(() => {
-    doneRef.current = onDone;
-  }, [onDone]);
-
-  useEffect(() => {
-    const host = hostRef.current;
-    if (!host) return;
-
-    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
-    renderer.setClearColor(0x000000, 0);
-    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
-    host.appendChild(renderer.domElement);
-    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });
-
-    const scene = new THREE.Scene();
-    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
-    camera.position.set(0, 0, 3.0);
-
-    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
-    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
-    sun.position.set(-2.5, 1.6, 4);
-    scene.add(sun);
-
-    const loader = new THREE.TextureLoader();
-    const earthTex = loader.load("/assets/earth-bluemarble.jpg");
-    earthTex.colorSpace = THREE.SRGBColorSpace;
-
-    const earth = new THREE.Mesh(
-      new THREE.SphereGeometry(1, 96, 64),
-      new THREE.MeshStandardMaterial({ map: earthTex, roughness: 0.92, metalness: 0 })
-    );
-    // 1.5 revolutions before landing on China (eastward visual direction = negative Y rotation)
-    const endY = TARGET_Y;
-    const startY = endY + Math.PI * 3;
-    earth.rotation.y = startY;
-    scene.add(earth);
-
-    const atmosphere = new THREE.Mesh(
-      new THREE.SphereGeometry(1.05, 64, 32),
-      new THREE.ShaderMaterial({
-        transparent: true,
-        side: THREE.BackSide,
-        blending: THREE.AdditiveBlending,
-        depthWrite: false,
-        vertexShader: `
-          varying vec3 vNormal;
-          void main() {
-            vNormal = normalize(normalMatrix * normal);
-            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
-          }`,
-        fragmentShader: `
-          varying vec3 vNormal;
-          void main() {
-            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
-            gl_FragColor = vec4(0.40, 0.68, 1.0, 1.0) * intensity;
-          }`
-      })
-    );
-    scene.add(atmosphere);
-
-    const resize = () => {
-      const rect = host.getBoundingClientRect();
-      const w = Math.max(1, Math.floor(rect.width));
-      const h = Math.max(1, Math.floor(rect.height));
-      renderer.setSize(w, h, false);
-      camera.aspect = w / h;
-      camera.updateProjectionMatrix();
-    };
-    const ro = new ResizeObserver(resize);
-    ro.observe(host);
-    resize();
-
-    let start: number | null = null;
-    let raf = 0;
-
-    const animate = (t: number) => {
-      if (start === null) start = t;
-      const elapsed = t - start;
-
-      const spinT = Math.min(elapsed, SPIN_MS) / SPIN_MS;
-      const spinEased = 1 - Math.pow(1 - spinT, 3); // ease-out cubic
-      const zoomRaw = Math.max(0, elapsed - SPIN_MS - HOLD_MS) / ZOOM_MS;
-      const zoomT = Math.min(1, zoomRaw);
-      const zoomEased = 1 - Math.pow(1 - zoomT, 3);
-
-      const yRot = startY + (endY - startY) * spinEased;
-      earth.rotation.y = yRot;
-      atmosphere.rotation.y = yRot;
-      earth.rotation.x = TARGET_X * spinEased;
-      atmosphere.rotation.x = TARGET_X * spinEased;
-
-      camera.position.z = 3.0 - zoomEased * 1.55;
-      host.style.opacity = String(1 - zoomEased);
-
-      renderer.render(scene, camera);
-
-      if (elapsed < TOTAL_MS) {
-        raf = requestAnimationFrame(animate);
-      } else {
-        doneRef.current();
-      }
-    };
-    raf = requestAnimationFrame(animate);
-
-    return () => {
-      cancelAnimationFrame(raf);
-      ro.disconnect();
-      earthTex.dispose();
-      earth.geometry.dispose();
-      (earth.material as THREE.Material).dispose();
-      atmosphere.geometry.dispose();
-      (atmosphere.material as THREE.Material).dispose();
-      renderer.dispose();
-      host.innerHTML = "";
-    };
-  }, []);
-
-  return <div ref={hostRef} aria-hidden className="pointer-events-none absolute inset-0 z-40" />;
-}
diff --git a/v2/src/components/search/PlaceSearch.tsx b/v2/src/components/search/PlaceSearch.tsx
deleted file mode 100644
index 4f83ec26fe5411e6d3650be3ad2b8fe0f3dba54c..0000000000000000000000000000000000000000
--- a/v2/src/components/search/PlaceSearch.tsx
+++ /dev/null
@@ -1,55 +0,0 @@
-import { useId, useMemo, useState } from "react";
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import { findBestMatch, getAllRecords } from "../../lib/search";
-import { placeTypeLabels } from "../../data/i18n";
-
-export default function PlaceSearch() {
-  const { t, lang } = useLang();
-  const { selectPlace } = useAtlas();
-  const [value, setValue] = useState("");
-  const [hint, setHint] = useState<string | null>(null);
-  const datalistId = useId();
-
-  const suggestions = useMemo(() => getAllRecords().slice(0, 120), []);
-
-  const submit = (event: React.FormEvent) => {
-    event.preventDefault();
-    const record = findBestMatch(value);
-    if (!record) {
-      setHint(t("searchNoMatch"));
-      return;
-    }
-    selectPlace(record.provinceId, record.cityId ?? null);
-    setHint(`${t("searchJumped")} ${lang === "zh" ? record.zh : record.en}`);
-    document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
-  };
-
-  return (
-    <form onSubmit={submit} className="flex flex-1 items-center gap-2">
-      <input
-        type="search"
-        list={datalistId}
-        autoComplete="off"
-        value={value}
-        onChange={(e) => setValue(e.target.value)}
-        placeholder={t("searchPlaceholder")}
-        className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2 text-sm focus:border-ink focus:outline-none"
-      />
-      <button
-        type="submit"
-        className="rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
-      >
-        {t("searchButton")}
-      </button>
-      <datalist id={datalistId}>
-        {suggestions.map((record, i) => {
-          const primary = lang === "zh" ? record.zh : record.en;
-          const typeLabel = placeTypeLabels[lang][record.type] ?? record.type;
-          return <option key={`${record.provinceId}-${record.cityId ?? ""}-${i}`} value={primary} label={`${primary} · ${typeLabel}`} />;
-        })}
-      </datalist>
-      {hint && <span className="ml-2 hidden text-xs text-muted lg:inline">{hint}</span>}
-    </form>
-  );
-}
diff --git a/v2/src/components/sections/HistoryVideo.tsx b/v2/src/components/sections/HistoryVideo.tsx
deleted file mode 100644
index fabd834e41f64ddccb40198d92c4759285dcb51b..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/HistoryVideo.tsx
+++ /dev/null
@@ -1,35 +0,0 @@
-import { useLang } from "../../store/language";
-
-export default function HistoryVideo() {
-  const { t } = useLang();
-  return (
-    <section id="video" className="grid items-start gap-6 md:grid-cols-[1fr_2fr]">
-      <div className="space-y-3">
-        <h2 className="text-2xl font-bold">{t("historyVideoTitle")}</h2>
-        <p className="text-sm leading-relaxed text-muted">{t("historyVideoBody")}</p>
-      </div>
-      <figure className="overflow-hidden rounded-xl border border-line bg-black">
-        <div className="aspect-video">
-          <iframe
-            className="h-full w-full"
-            src="https://www.youtube.com/embed/0DzZgBd4W1Q"
-            title="Discover a China Beyond Your Imagination"
-            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
-            allowFullScreen
-          />
-        </div>
-        <figcaption className="flex items-center justify-between gap-3 bg-white px-4 py-3 text-xs">
-          <strong>{t("historyVideoMeta")}</strong>
-          <a
-            className="text-muted hover:text-jade"
-            href="https://en.chinaculture.org/a/202206/07/WS629edf41a310fd2b29e61286.html"
-            target="_blank"
-            rel="noreferrer"
-          >
-            {t("historyVideoSource")}
-          </a>
-        </figcaption>
-      </figure>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/MuseumFlow.tsx b/v2/src/components/sections/MuseumFlow.tsx
deleted file mode 100644
index 7bcf8805fbbb34b019b679e0e3ca5ce056b94eb9..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/MuseumFlow.tsx
+++ /dev/null
@@ -1,29 +0,0 @@
-import { useLang } from "../../store/language";
-
-const STEPS = [
-  { titleKey: "flowOneTitle", bodyKey: "flowOneBody" },
-  { titleKey: "flowTwoTitle", bodyKey: "flowTwoBody" },
-  { titleKey: "flowThreeTitle", bodyKey: "flowThreeBody" },
-  { titleKey: "flowFourTitle", bodyKey: "flowFourBody" }
-];
-
-export default function MuseumFlow() {
-  const { t } = useLang();
-  return (
-    <section id="museums" className="flex flex-col gap-4">
-      <header>
-        <h2 className="text-2xl font-bold">{t("museumTitle")}</h2>
-        <p className="text-sm text-muted">{t("museumBody")}</p>
-      </header>
-      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
-        {STEPS.map((step, i) => (
-          <li key={step.titleKey} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
-            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
-            <h3 className="text-base font-bold">{t(step.titleKey)}</h3>
-            <p className="text-sm text-muted">{t(step.bodyKey)}</p>
-          </li>
-        ))}
-      </ol>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/SourcesNote.tsx b/v2/src/components/sections/SourcesNote.tsx
deleted file mode 100644
index 8fbbff35733ef16fce104d48e5a8c61e32d25f39..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/SourcesNote.tsx
+++ /dev/null
@@ -1,20 +0,0 @@
-import { useLang } from "../../store/language";
-
-const RULES = ["ruleOne", "ruleTwo", "ruleThree", "ruleFour"];
-
-export default function SourcesNote() {
-  const { t } = useLang();
-  return (
-    <section id="sources" className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header>
-        <h2 className="text-2xl font-bold">{t("sourcesTitle")}</h2>
-        <p className="text-sm text-muted">{t("sourcesBody")}</p>
-      </header>
-      <ul className="grid list-inside list-disc gap-1 text-sm">
-        {RULES.map((key) => (
-          <li key={key}>{t(key)}</li>
-        ))}
-      </ul>
-    </section>
-  );
-}

apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\src\components\atlas\CityList.tsx
c:\Users\h\Documents\New project 2\v2\src\components\atlas\CityProfile.tsx
c:\Users\h\Documents\New project 2\v2\src\components\atlas\ProvinceRail.tsx
diff --git a/v2/src/components/atlas/AtlasSection.tsx b/v2/src/components/atlas/AtlasSection.tsx
deleted file mode 100644
index 7dcfe4b7987081264b006a6a4324f5e074eda166..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/AtlasSection.tsx
+++ /dev/null
@@ -1,33 +0,0 @@
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import ProvinceRail from "./ProvinceRail";
-import CityList from "./CityList";
-import CityProfile from "./CityProfile";
-
-export default function AtlasSection() {
-  const { t } = useLang();
-  const { province } = useAtlas();
-
-  return (
-    <section id="atlas" className="flex flex-col gap-4">
-      <header className="flex flex-wrap items-end justify-between gap-3">
-        <div>
-          <h2 className="text-2xl font-bold">{t("atlasTitle")}</h2>
-          <p className="text-sm text-muted">{t("atlasBody")}</p>
-        </div>
-      </header>
-
-      <div className="grid gap-4 md:grid-cols-[260px_minmax(0,1fr)_360px]">
-        <ProvinceRail />
-        <div className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4">
-          <header className="flex items-baseline justify-between">
-            <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
-            <h3 className="text-lg font-bold">{province ? province.name : "China"}</h3>
-          </header>
-          <CityList cities={province?.cities ?? []} />
-        </div>
-        <CityProfile />
-      </div>
-    </section>
-  );
-}
diff --git a/v2/src/components/atlas/CityList.tsx b/v2/src/components/atlas/CityList.tsx
deleted file mode 100644
index de44fe01f30f6ccb8f3b518cdc5a9435c53c51e2..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityList.tsx
+++ /dev/null
@@ -1,69 +0,0 @@
-import clsx from "clsx";
-import type { CityRecord } from "../../data/atlas";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount, useRecordCityView } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityList({ cities }: { cities: CityRecord[] }) {
-  const { t, lang } = useLang();
-  const { selectedCityId, selectCity } = useAtlas();
-  const recordView = useRecordCityView();
-
-  if (!cities.length) {
-    return (
-      <div className="grid place-items-center rounded-xl border border-dashed border-line p-8 text-sm text-muted">
-        {t("mapHintPending")}
-      </div>
-    );
-  }
-
-  return (
-    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
-      {cities.map((city) => (
-        <CityCard
-          key={city.id}
-          city={city}
-          active={city.id === selectedCityId}
-          onSelect={() => {
-            recordView(city.id);
-            selectCity(city.id);
-          }}
-          viewsLabel={t("views")}
-          lang={lang}
-        />
-      ))}
-    </ul>
-  );
-}
-
-type CardProps = {
-  city: CityRecord;
-  active: boolean;
-  onSelect: () => void;
-  viewsLabel: string;
-  lang: "en" | "zh";
-};
-
-function CityCard({ city, active, onSelect, viewsLabel, lang }: CardProps) {
-  const total = useCityViewCount(city.id, city.baseViews);
-  return (
-    <li>
-      <button
-        type="button"
-        onClick={onSelect}
-        className={clsx(
-          "flex w-full flex-col gap-1 rounded-xl border bg-white px-4 py-3 text-left transition",
-          active ? "border-jade ring-1 ring-jade/40" : "border-line hover:border-jade/40"
-        )}
-      >
-        <strong className="text-base">{lang === "zh" ? city.zh : city.name}</strong>
-        <span className="text-xs text-muted">{lang === "zh" ? city.name : city.zh}</span>
-        <span className="text-sm">{lang === "zh" ? city.museumZh || city.museum : city.museum}</span>
-        <span className="mt-1 text-xs text-muted">
-          {formatNumber(total)} {viewsLabel}
-        </span>
-      </button>
-    </li>
-  );
-}
diff --git a/v2/src/components/atlas/CityProfile.tsx b/v2/src/components/atlas/CityProfile.tsx
deleted file mode 100644
index bc5fa519c71ef37ed4fa6b6dc973338eeb9674b1..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityProfile.tsx
+++ /dev/null
@@ -1,87 +0,0 @@
-import { accessLabels, statusLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityProfile() {
-  const { city, selectCity } = useAtlas();
-  const { t, lang } = useLang();
-  const views = useCityViewCount(city?.id ?? "", city?.baseViews ?? 0);
-
-  if (!city) {
-    return (
-      <aside className="flex flex-col items-start gap-2 rounded-xl border border-dashed border-line bg-white p-6">
-        <h3 className="text-lg font-bold">{t("selectCity")}</h3>
-        <p className="text-sm text-muted">{t("selectCityBody")}</p>
-      </aside>
-    );
-  }
-
-  const sites = lang === "zh" ? city.sitesZh : city.sites;
-
-  return (
-    <article className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header className="flex items-start justify-between gap-4">
-        <div>
-          <span className="text-xs font-bold uppercase tracking-widest text-muted">{city.province}</span>
-          <h3 className="text-2xl font-bold leading-tight">{lang === "zh" ? city.zh : city.name}</h3>
-          <p className="text-sm text-muted">{lang === "zh" ? city.name : city.zh}</p>
-        </div>
-        <span className="rounded-full bg-paper px-3 py-1 text-xs font-bold text-muted">
-          {statusLabels[lang][city.status] ?? city.status}
-        </span>
-      </header>
-
-      <section className="rounded-lg bg-paper p-4">
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("startHere")}</span>
-        <h4 className="text-lg font-bold">{lang === "zh" ? city.museumZh || city.museum : city.museum}</h4>
-        <p className="mt-1 text-sm leading-relaxed">
-          {lang === "zh" ? city.museumRoleZh || city.museumRole : city.museumRole}
-        </p>
-      </section>
-
-      <dl className="grid grid-cols-2 gap-3 text-sm">
-        <Stat label={t("pageViews")} value={formatNumber(views)} />
-        <Stat label={t("visitorNotes")} value={formatNumber(city.notes)} />
-        <Stat label={t("lastVerified")} value={city.verified} />
-        <Stat label={t("englishAccess")} value={accessLabels[lang][city.access] ?? city.access} />
-      </dl>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("historicalIdentity")}</h4>
-        <p className="text-sm leading-relaxed">{lang === "zh" ? city.historyZh || city.history : city.history}</p>
-      </section>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("thenExplore")}</h4>
-        <ul className="grid list-inside list-disc gap-1 text-sm">
-          {sites.map((site) => (
-            <li key={site}>{site}</li>
-          ))}
-        </ul>
-      </section>
-
-      <footer className="border-t border-line pt-3 text-xs text-muted">
-        <strong className="block text-ink">{t("sourcePolicy")}</strong>
-        <p className="mt-1">{t("sourcePolicyBody")}</p>
-        <button
-          type="button"
-          onClick={() => selectCity(null)}
-          className="mt-3 text-xs font-bold uppercase tracking-wider text-jade hover:underline"
-        >
-          {t("close")}
-        </button>
-      </footer>
-    </article>
-  );
-}
-
-function Stat({ label, value }: { label: string; value: string }) {
-  return (
-    <div className="rounded-lg bg-paper p-3">
-      <dt className="text-xs font-bold uppercase tracking-widest text-muted">{label}</dt>
-      <dd className="mt-1 text-base font-bold">{value}</dd>
-    </div>
-  );
-}
diff --git a/v2/src/components/atlas/ProvinceRail.tsx b/v2/src/components/atlas/ProvinceRail.tsx
deleted file mode 100644
index 02841ff50e8c93a001d7f1f21371eb7b98e7ce11..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/ProvinceRail.tsx
+++ /dev/null
@@ -1,43 +0,0 @@
-import clsx from "clsx";
-import { atlasData } from "../../data/atlas";
-import { typeLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-
-export default function ProvinceRail() {
-  const { lang, t } = useLang();
-  const { selectedProvinceId, selectProvince } = useAtlas();
-
-  return (
-    <aside aria-label={t("provinceLevelRegions")} className="flex flex-col gap-2">
-      <header className="flex items-baseline justify-between px-1">
-        <strong className="text-xs font-bold uppercase tracking-widest text-muted">{t("provinceLevelRegions")}</strong>
-        <span className="text-xs text-muted">{atlasData.length}</span>
-      </header>
-      <div className="flex max-h-[420px] flex-col gap-1 overflow-y-auto pr-1">
-        {atlasData.map((p) => {
-          const active = p.id === selectedProvinceId;
-          return (
-            <button
-              key={p.id}
-              type="button"
-              onClick={() => selectProvince(p.id)}
-              className={clsx(
-                "flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-left transition",
-                active ? "border-jade/40 bg-jade-soft" : "hover:bg-paper"
-              )}
-            >
-              <span className="leading-tight">
-                <strong className="block text-sm font-bold">{lang === "zh" ? p.zh : p.name}</strong>
-                <small className="block text-xs text-muted">
-                  {lang === "zh" ? `${p.name} · ${typeLabels.zh[p.type]}` : `${p.zh} · ${typeLabels.en[p.type]}`}
-                </small>
-              </span>
-              <span className="text-xs text-muted">{p.cities.length}</span>
-            </button>
-          );
-        })}
-      </div>
-    </aside>
-  );
-}
diff --git a/v2/src/components/city/CityHero.tsx b/v2/src/components/city/CityHero.tsx
deleted file mode 100644
index 7b6fef59b459c9e63845b4c806a2c9601b2cbb12..0000000000000000000000000000000000000000
--- a/v2/src/components/city/CityHero.tsx
+++ /dev/null
@@ -1,86 +0,0 @@
-import clsx from "clsx";
-import { attractionsByCity, type Attraction } from "../../data/city-attractions";
-import type { CityId } from "../../data/transport";
-import { useLang } from "../../store/language";
-
-type Props = { cityId: CityId };
-
-export default function CityHero({ cityId }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-  const attractions = attractionsByCity(cityId);
-  if (attractions.length === 0) return null;
-
-  return (
-    <section className="flex flex-col gap-3">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "本市标志景点" : "Signature attractions"}
-        </span>
-        <h2 className="text-2xl font-bold">
-          {isZh ? "去之前先认认这几个地方" : "Know these places before you go"}
-        </h2>
-      </header>
-      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
-        {attractions.map((a) => (
-          <AttractionCard key={a.id} attraction={a} isZh={isZh} />
-        ))}
-      </ul>
-    </section>
-  );
-}
-
-function AttractionCard({ attraction: a, isZh }: { attraction: Attraction; isZh: boolean }) {
-  return (
-    <li className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
-      <a
-        href={a.officialUrl}
-        target="_blank"
-        rel="noreferrer"
-        className="group flex flex-col gap-0"
-      >
-        <div className="aspect-[16/10] w-full overflow-hidden bg-paper">
-          <img
-            src={a.imageUrl}
-            alt={isZh ? a.nameZh : a.nameEn}
-            loading="lazy"
-            referrerPolicy="no-referrer"
-            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
-            onError={(e) => {
-              (e.currentTarget as HTMLImageElement).style.display = "none";
-            }}
-          />
-        </div>
-        <div className="flex flex-col gap-2 p-4">
-          <div className="flex items-center justify-between gap-2">
-            <span
-              className={clsx(
-                "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
-                a.tier === "must-visit"
-                  ? "bg-jade-soft text-jade"
-                  : "bg-amber-100 text-amber-900"
-              )}
-            >
-              {a.tier === "must-visit"
-                ? isZh ? "必去" : "Must-visit"
-                : isZh ? "值得去" : "Worth-it"}
-            </span>
-            <span className="text-[10px] text-muted">
-              {isZh ? a.districtZh : a.districtEn}
-            </span>
-          </div>
-          <strong className="text-sm leading-tight">
-            {isZh ? a.nameZh : a.nameEn}
-          </strong>
-          <p className="line-clamp-3 text-xs leading-relaxed text-ink/80">
-            {isZh ? a.whyZh : a.whyEn}
-          </p>
-          <span className="text-[10px] text-muted/70">
-            {isZh ? "图片：" : "Photo: "}
-            {a.imageCredit}
-          </span>
-        </div>
-      </a>
-    </li>
-  );
-}
diff --git a/v2/src/components/common/PageSources.tsx b/v2/src/components/common/PageSources.tsx
deleted file mode 100644
index 5510ffa6bd49c7a6c349e5e259054a0b05c499d6..0000000000000000000000000000000000000000
--- a/v2/src/components/common/PageSources.tsx
+++ /dev/null
@@ -1,53 +0,0 @@
-import { getSource, type SourceCitation } from "../../data/sources";
-import { useLang } from "../../store/language";
-
-type Props = { ids: string[] };
-
-export default function PageSources({ ids }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-
-  const sources = Array.from(new Set(ids))
-    .map((id) => getSource(id))
-    .filter((s): s is SourceCitation => Boolean(s));
-
-  if (sources.length === 0) return null;
-
-  return (
-    <footer className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "信息来源" : "Sources"}
-        </span>
-        <p className="text-xs text-muted">
-          {isZh
-            ? "本页所有信息均引自下列官方公开来源；点击查看原文。"
-            : "Every fact on this page is cited to one of the official sources below. Click to read the originals."}
-        </p>
-      </header>
-      <ol className="grid gap-1.5 text-xs leading-relaxed">
-        {sources.map((s, i) => (
-          <li key={s.id} className="flex gap-2">
-            <span className="shrink-0 tabular-nums text-muted">[{i + 1}]</span>
-            <a
-              href={s.url}
-              target="_blank"
-              rel="noreferrer"
-              className="flex-1 text-ink hover:text-jade hover:underline"
-            >
-              {s.community && (
-                <span className="mr-1.5 inline-block rounded-sm bg-amber-100 px-1 py-px text-[9px] font-bold uppercase tracking-wider text-amber-800 align-middle">
-                  blog
-                </span>
-              )}
-              <span className="font-bold">{s.publisher}</span>
-              <span className="text-muted"> · {s.pageTitleEn}</span>
-              {s.publishedDate && <span className="text-muted"> · {s.publishedDate}</span>}
-              <span className="ml-1 text-muted/60">— {s.domain}</span>
-            </a>
-          </li>
-        ))}
-      </ol>
-    </footer>
-  );
-}
diff --git a/v2/src/components/map/EarthIntro.tsx b/v2/src/components/map/EarthIntro.tsx
deleted file mode 100644
index e92f647816b6e07c354c0799b90a762dd5c0126b..0000000000000000000000000000000000000000
--- a/v2/src/components/map/EarthIntro.tsx
+++ /dev/null
@@ -1,149 +0,0 @@
-import { useEffect, useRef } from "react";
-import * as THREE from "three";
-
-type Props = { onDone: () => void };
-
-const SPIN_MS = 4000;
-const HOLD_MS = 1500;
-const ZOOM_MS = 1500;
-const TOTAL_MS = SPIN_MS + HOLD_MS + ZOOM_MS;
-
-// Verified against the actual asset (v2/public/assets/earth-bluemarble.jpg, 2:1 equirectangular,
-// prime meridian at horizontal centre, Africa centred). Three.js SphereGeometry default UV:
-// vertex.x = -r·cos(u·2π)·sin(v·π); vertex.y = r·cos(v·π); vertex.z = r·sin(u·2π)·sin(v·π).
-// At rotation = 0, +Z (camera-facing) point sits at u = 0.25, v = 0.5 → lon -90°, lat 0° (Americas).
-// To bring China centre (lon 105°E, lat 35°N → u = 0.79167, v = 0.30556) to the camera:
-//   1. Y-rotation: α_y = π/2 - u·2π = π/2 - 4.974 = -3.403 rad → puts China centre at world (0, +0.574, +0.819)
-//   2. X-rotation: α_x = arctan(0.574 / 0.819) = 0.611 rad ≈ 35° → tilts that point onto +Z exactly
-const CHINA_LON_DEG = 105;
-const CHINA_LAT_DEG = 35;
-const CHINA_U = (CHINA_LON_DEG + 180) / 360;
-const CHINA_V = (90 - CHINA_LAT_DEG) / 180;
-const CHINA_THETA_PHI = CHINA_U * 2 * Math.PI;
-const CHINA_THETA_LAT = CHINA_V * Math.PI;
-const TARGET_Y = Math.PI / 2 - CHINA_THETA_PHI; // -3.403 rad
-const TARGET_X = Math.atan2(Math.cos(CHINA_THETA_LAT), Math.sin(CHINA_THETA_LAT)); // 0.611 rad
-
-export default function EarthIntro({ onDone }: Props) {
-  const hostRef = useRef<HTMLDivElement | null>(null);
-  const doneRef = useRef(onDone);
-
-  useEffect(() => {
-    doneRef.current = onDone;
-  }, [onDone]);
-
-  useEffect(() => {
-    const host = hostRef.current;
-    if (!host) return;
-
-    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
-    renderer.setClearColor(0x000000, 0);
-    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
-    host.appendChild(renderer.domElement);
-    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });
-
-    const scene = new THREE.Scene();
-    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
-    camera.position.set(0, 0, 3.0);
-
-    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
-    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
-    sun.position.set(-2.5, 1.6, 4);
-    scene.add(sun);
-
-    const loader = new THREE.TextureLoader();
-    const earthTex = loader.load("/assets/earth-bluemarble.jpg");
-    earthTex.colorSpace = THREE.SRGBColorSpace;
-
-    const earth = new THREE.Mesh(
-      new THREE.SphereGeometry(1, 96, 64),
-      new THREE.MeshStandardMaterial({ map: earthTex, roughness: 0.92, metalness: 0 })
-    );
-    // 1.5 revolutions before landing on China (eastward visual direction = negative Y rotation)
-    const endY = TARGET_Y;
-    const startY = endY + Math.PI * 3;
-    earth.rotation.y = startY;
-    scene.add(earth);
-
-    const atmosphere = new THREE.Mesh(
-      new THREE.SphereGeometry(1.05, 64, 32),
-      new THREE.ShaderMaterial({
-        transparent: true,
-        side: THREE.BackSide,
-        blending: THREE.AdditiveBlending,
-        depthWrite: false,
-        vertexShader: `
-          varying vec3 vNormal;
-          void main() {
-            vNormal = normalize(normalMatrix * normal);
-            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
-          }`,
-        fragmentShader: `
-          varying vec3 vNormal;
-          void main() {
-            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
-            gl_FragColor = vec4(0.40, 0.68, 1.0, 1.0) * intensity;
-          }`
-      })
-    );
-    scene.add(atmosphere);
-
-    const resize = () => {
-      const rect = host.getBoundingClientRect();
-      const w = Math.max(1, Math.floor(rect.width));
-      const h = Math.max(1, Math.floor(rect.height));
-      renderer.setSize(w, h, false);
-      camera.aspect = w / h;
-      camera.updateProjectionMatrix();
-    };
-    const ro = new ResizeObserver(resize);
-    ro.observe(host);
-    resize();
-
-    let start: number | null = null;
-    let raf = 0;
-
-    const animate = (t: number) => {
-      if (start === null) start = t;
-      const elapsed = t - start;
-
-      const spinT = Math.min(elapsed, SPIN_MS) / SPIN_MS;
-      const spinEased = 1 - Math.pow(1 - spinT, 3); // ease-out cubic
-      const zoomRaw = Math.max(0, elapsed - SPIN_MS - HOLD_MS) / ZOOM_MS;
-      const zoomT = Math.min(1, zoomRaw);
-      const zoomEased = 1 - Math.pow(1 - zoomT, 3);
-
-      const yRot = startY + (endY - startY) * spinEased;
-      earth.rotation.y = yRot;
-      atmosphere.rotation.y = yRot;
-      earth.rotation.x = TARGET_X * spinEased;
-      atmosphere.rotation.x = TARGET_X * spinEased;
-
-      camera.position.z = 3.0 - zoomEased * 1.55;
-      host.style.opacity = String(1 - zoomEased);
-
-      renderer.render(scene, camera);
-
-      if (elapsed < TOTAL_MS) {
-        raf = requestAnimationFrame(animate);
-      } else {
-        doneRef.current();
-      }
-    };
-    raf = requestAnimationFrame(animate);
-
-    return () => {
-      cancelAnimationFrame(raf);
-      ro.disconnect();
-      earthTex.dispose();
-      earth.geometry.dispose();
-      (earth.material as THREE.Material).dispose();
-      atmosphere.geometry.dispose();
-      (atmosphere.material as THREE.Material).dispose();
-      renderer.dispose();
-      host.innerHTML = "";
-    };
-  }, []);
-
-  return <div ref={hostRef} aria-hidden className="pointer-events-none absolute inset-0 z-40" />;
-}
diff --git a/v2/src/components/search/PlaceSearch.tsx b/v2/src/components/search/PlaceSearch.tsx
deleted file mode 100644
index 4f83ec26fe5411e6d3650be3ad2b8fe0f3dba54c..0000000000000000000000000000000000000000
--- a/v2/src/components/search/PlaceSearch.tsx
+++ /dev/null
@@ -1,55 +0,0 @@
-import { useId, useMemo, useState } from "react";
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import { findBestMatch, getAllRecords } from "../../lib/search";
-import { placeTypeLabels } from "../../data/i18n";
-
-export default function PlaceSearch() {
-  const { t, lang } = useLang();
-  const { selectPlace } = useAtlas();
-  const [value, setValue] = useState("");
-  const [hint, setHint] = useState<string | null>(null);
-  const datalistId = useId();
-
-  const suggestions = useMemo(() => getAllRecords().slice(0, 120), []);
-
-  const submit = (event: React.FormEvent) => {
-    event.preventDefault();
-    const record = findBestMatch(value);
-    if (!record) {
-      setHint(t("searchNoMatch"));
-      return;
-    }
-    selectPlace(record.provinceId, record.cityId ?? null);
-    setHint(`${t("searchJumped")} ${lang === "zh" ? record.zh : record.en}`);
-    document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
-  };
-
-  return (
-    <form onSubmit={submit} className="flex flex-1 items-center gap-2">
-      <input
-        type="search"
-        list={datalistId}
-        autoComplete="off"
-        value={value}
-        onChange={(e) => setValue(e.target.value)}
-        placeholder={t("searchPlaceholder")}
-        className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2 text-sm focus:border-ink focus:outline-none"
-      />
-      <button
-        type="submit"
-        className="rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
-      >
-        {t("searchButton")}
-      </button>
-      <datalist id={datalistId}>
-        {suggestions.map((record, i) => {
-          const primary = lang === "zh" ? record.zh : record.en;
-          const typeLabel = placeTypeLabels[lang][record.type] ?? record.type;
-          return <option key={`${record.provinceId}-${record.cityId ?? ""}-${i}`} value={primary} label={`${primary} · ${typeLabel}`} />;
-        })}
-      </datalist>
-      {hint && <span className="ml-2 hidden text-xs text-muted lg:inline">{hint}</span>}
-    </form>
-  );
-}
diff --git a/v2/src/components/sections/HistoryVideo.tsx b/v2/src/components/sections/HistoryVideo.tsx
deleted file mode 100644
index fabd834e41f64ddccb40198d92c4759285dcb51b..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/HistoryVideo.tsx
+++ /dev/null
@@ -1,35 +0,0 @@
-import { useLang } from "../../store/language";
-
-export default function HistoryVideo() {
-  const { t } = useLang();
-  return (
-    <section id="video" className="grid items-start gap-6 md:grid-cols-[1fr_2fr]">
-      <div className="space-y-3">
-        <h2 className="text-2xl font-bold">{t("historyVideoTitle")}</h2>
-        <p className="text-sm leading-relaxed text-muted">{t("historyVideoBody")}</p>
-      </div>
-      <figure className="overflow-hidden rounded-xl border border-line bg-black">
-        <div className="aspect-video">
-          <iframe
-            className="h-full w-full"
-            src="https://www.youtube.com/embed/0DzZgBd4W1Q"
-            title="Discover a China Beyond Your Imagination"
-            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
-            allowFullScreen
-          />
-        </div>
-        <figcaption className="flex items-center justify-between gap-3 bg-white px-4 py-3 text-xs">
-          <strong>{t("historyVideoMeta")}</strong>
-          <a
-            className="text-muted hover:text-jade"
-            href="https://en.chinaculture.org/a/202206/07/WS629edf41a310fd2b29e61286.html"
-            target="_blank"
-            rel="noreferrer"
-          >
-            {t("historyVideoSource")}
-          </a>
-        </figcaption>
-      </figure>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/MuseumFlow.tsx b/v2/src/components/sections/MuseumFlow.tsx
deleted file mode 100644
index 7bcf8805fbbb34b019b679e0e3ca5ce056b94eb9..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/MuseumFlow.tsx
+++ /dev/null
@@ -1,29 +0,0 @@
-import { useLang } from "../../store/language";
-
-const STEPS = [
-  { titleKey: "flowOneTitle", bodyKey: "flowOneBody" },
-  { titleKey: "flowTwoTitle", bodyKey: "flowTwoBody" },
-  { titleKey: "flowThreeTitle", bodyKey: "flowThreeBody" },
-  { titleKey: "flowFourTitle", bodyKey: "flowFourBody" }
-];
-
-export default function MuseumFlow() {
-  const { t } = useLang();
-  return (
-    <section id="museums" className="flex flex-col gap-4">
-      <header>
-        <h2 className="text-2xl font-bold">{t("museumTitle")}</h2>
-        <p className="text-sm text-muted">{t("museumBody")}</p>
-      </header>
-      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
-        {STEPS.map((step, i) => (
-          <li key={step.titleKey} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
-            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
-            <h3 className="text-base font-bold">{t(step.titleKey)}</h3>
-            <p className="text-sm text-muted">{t(step.bodyKey)}</p>
-          </li>
-        ))}
-      </ol>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/SourcesNote.tsx b/v2/src/components/sections/SourcesNote.tsx
deleted file mode 100644
index 8fbbff35733ef16fce104d48e5a8c61e32d25f39..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/SourcesNote.tsx
+++ /dev/null
@@ -1,20 +0,0 @@
-import { useLang } from "../../store/language";
-
-const RULES = ["ruleOne", "ruleTwo", "ruleThree", "ruleFour"];
-
-export default function SourcesNote() {
-  const { t } = useLang();
-  return (
-    <section id="sources" className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header>
-        <h2 className="text-2xl font-bold">{t("sourcesTitle")}</h2>
-        <p className="text-sm text-muted">{t("sourcesBody")}</p>
-      </header>
-      <ul className="grid list-inside list-disc gap-1 text-sm">
-        {RULES.map((key) => (
-          <li key={key}>{t(key)}</li>
-        ))}
-      </ul>
-    </section>
-  );
-}

diff --git a/v2/src/components/atlas/AtlasSection.tsx b/v2/src/components/atlas/AtlasSection.tsx
deleted file mode 100644
index 7dcfe4b7987081264b006a6a4324f5e074eda166..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/AtlasSection.tsx
+++ /dev/null
@@ -1,33 +0,0 @@
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import ProvinceRail from "./ProvinceRail";
-import CityList from "./CityList";
-import CityProfile from "./CityProfile";
-
-export default function AtlasSection() {
-  const { t } = useLang();
-  const { province } = useAtlas();
-
-  return (
-    <section id="atlas" className="flex flex-col gap-4">
-      <header className="flex flex-wrap items-end justify-between gap-3">
-        <div>
-          <h2 className="text-2xl font-bold">{t("atlasTitle")}</h2>
-          <p className="text-sm text-muted">{t("atlasBody")}</p>
-        </div>
-      </header>
-
-      <div className="grid gap-4 md:grid-cols-[260px_minmax(0,1fr)_360px]">
-        <ProvinceRail />
-        <div className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4">
-          <header className="flex items-baseline justify-between">
-            <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
-            <h3 className="text-lg font-bold">{province ? province.name : "China"}</h3>
-          </header>
-          <CityList cities={province?.cities ?? []} />
-        </div>
-        <CityProfile />
-      </div>
-    </section>
-  );
-}
diff --git a/v2/src/components/atlas/CityList.tsx b/v2/src/components/atlas/CityList.tsx
deleted file mode 100644
index de44fe01f30f6ccb8f3b518cdc5a9435c53c51e2..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityList.tsx
+++ /dev/null
@@ -1,69 +0,0 @@
-import clsx from "clsx";
-import type { CityRecord } from "../../data/atlas";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount, useRecordCityView } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityList({ cities }: { cities: CityRecord[] }) {
-  const { t, lang } = useLang();
-  const { selectedCityId, selectCity } = useAtlas();
-  const recordView = useRecordCityView();
-
-  if (!cities.length) {
-    return (
-      <div className="grid place-items-center rounded-xl border border-dashed border-line p-8 text-sm text-muted">
-        {t("mapHintPending")}
-      </div>
-    );
-  }
-
-  return (
-    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
-      {cities.map((city) => (
-        <CityCard
-          key={city.id}
-          city={city}
-          active={city.id === selectedCityId}
-          onSelect={() => {
-            recordView(city.id);
-            selectCity(city.id);
-          }}
-          viewsLabel={t("views")}
-          lang={lang}
-        />
-      ))}
-    </ul>
-  );
-}
-
-type CardProps = {
-  city: CityRecord;
-  active: boolean;
-  onSelect: () => void;
-  viewsLabel: string;
-  lang: "en" | "zh";
-};
-
-function CityCard({ city, active, onSelect, viewsLabel, lang }: CardProps) {
-  const total = useCityViewCount(city.id, city.baseViews);
-  return (
-    <li>
-      <button
-        type="button"
-        onClick={onSelect}
-        className={clsx(
-          "flex w-full flex-col gap-1 rounded-xl border bg-white px-4 py-3 text-left transition",
-          active ? "border-jade ring-1 ring-jade/40" : "border-line hover:border-jade/40"
-        )}
-      >
-        <strong className="text-base">{lang === "zh" ? city.zh : city.name}</strong>
-        <span className="text-xs text-muted">{lang === "zh" ? city.name : city.zh}</span>
-        <span className="text-sm">{lang === "zh" ? city.museumZh || city.museum : city.museum}</span>
-        <span className="mt-1 text-xs text-muted">
-          {formatNumber(total)} {viewsLabel}
-        </span>
-      </button>
-    </li>
-  );
-}
diff --git a/v2/src/components/atlas/CityProfile.tsx b/v2/src/components/atlas/CityProfile.tsx
deleted file mode 100644
index bc5fa519c71ef37ed4fa6b6dc973338eeb9674b1..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityProfile.tsx
+++ /dev/null
@@ -1,87 +0,0 @@
-import { accessLabels, statusLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityProfile() {
-  const { city, selectCity } = useAtlas();
-  const { t, lang } = useLang();
-  const views = useCityViewCount(city?.id ?? "", city?.baseViews ?? 0);
-
-  if (!city) {
-    return (
-      <aside className="flex flex-col items-start gap-2 rounded-xl border border-dashed border-line bg-white p-6">
-        <h3 className="text-lg font-bold">{t("selectCity")}</h3>
-        <p className="text-sm text-muted">{t("selectCityBody")}</p>
-      </aside>
-    );
-  }
-
-  const sites = lang === "zh" ? city.sitesZh : city.sites;
-
-  return (
-    <article className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header className="flex items-start justify-between gap-4">
-        <div>
-          <span className="text-xs font-bold uppercase tracking-widest text-muted">{city.province}</span>
-          <h3 className="text-2xl font-bold leading-tight">{lang === "zh" ? city.zh : city.name}</h3>
-          <p className="text-sm text-muted">{lang === "zh" ? city.name : city.zh}</p>
-        </div>
-        <span className="rounded-full bg-paper px-3 py-1 text-xs font-bold text-muted">
-          {statusLabels[lang][city.status] ?? city.status}
-        </span>
-      </header>
-
-      <section className="rounded-lg bg-paper p-4">
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("startHere")}</span>
-        <h4 className="text-lg font-bold">{lang === "zh" ? city.museumZh || city.museum : city.museum}</h4>
-        <p className="mt-1 text-sm leading-relaxed">
-          {lang === "zh" ? city.museumRoleZh || city.museumRole : city.museumRole}
-        </p>
-      </section>
-
-      <dl className="grid grid-cols-2 gap-3 text-sm">
-        <Stat label={t("pageViews")} value={formatNumber(views)} />
-        <Stat label={t("visitorNotes")} value={formatNumber(city.notes)} />
-        <Stat label={t("lastVerified")} value={city.verified} />
-        <Stat label={t("englishAccess")} value={accessLabels[lang][city.access] ?? city.access} />
-      </dl>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("historicalIdentity")}</h4>
-        <p className="text-sm leading-relaxed">{lang === "zh" ? city.historyZh || city.history : city.history}</p>
-      </section>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("thenExplore")}</h4>
-        <ul className="grid list-inside list-disc gap-1 text-sm">
-          {sites.map((site) => (
-            <li key={site}>{site}</li>
-          ))}
-        </ul>
-      </section>
-
-      <footer className="border-t border-line pt-3 text-xs text-muted">
-        <strong className="block text-ink">{t("sourcePolicy")}</strong>
-        <p className="mt-1">{t("sourcePolicyBody")}</p>
-        <button
-          type="button"
-          onClick={() => selectCity(null)}
-          className="mt-3 text-xs font-bold uppercase tracking-wider text-jade hover:underline"
-        >
-          {t("close")}
-        </button>
-      </footer>
-    </article>
-  );
-}
-
-function Stat({ label, value }: { label: string; value: string }) {
-  return (
-    <div className="rounded-lg bg-paper p-3">
-      <dt className="text-xs font-bold uppercase tracking-widest text-muted">{label}</dt>
-      <dd className="mt-1 text-base font-bold">{value}</dd>
-    </div>
-  );
-}
diff --git a/v2/src/components/atlas/ProvinceRail.tsx b/v2/src/components/atlas/ProvinceRail.tsx
deleted file mode 100644
index 02841ff50e8c93a001d7f1f21371eb7b98e7ce11..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/ProvinceRail.tsx
+++ /dev/null
@@ -1,43 +0,0 @@
-import clsx from "clsx";
-import { atlasData } from "../../data/atlas";
-import { typeLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-
-export default function ProvinceRail() {
-  const { lang, t } = useLang();
-  const { selectedProvinceId, selectProvince } = useAtlas();
-
-  return (
-    <aside aria-label={t("provinceLevelRegions")} className="flex flex-col gap-2">
-      <header className="flex items-baseline justify-between px-1">
-        <strong className="text-xs font-bold uppercase tracking-widest text-muted">{t("provinceLevelRegions")}</strong>
-        <span className="text-xs text-muted">{atlasData.length}</span>
-      </header>
-      <div className="flex max-h-[420px] flex-col gap-1 overflow-y-auto pr-1">
-        {atlasData.map((p) => {
-          const active = p.id === selectedProvinceId;
-          return (
-            <button
-              key={p.id}
-              type="button"
-              onClick={() => selectProvince(p.id)}
-              className={clsx(
-                "flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-left transition",
-                active ? "border-jade/40 bg-jade-soft" : "hover:bg-paper"
-              )}
-            >
-              <span className="leading-tight">
-                <strong className="block text-sm font-bold">{lang === "zh" ? p.zh : p.name}</strong>
-                <small className="block text-xs text-muted">
-                  {lang === "zh" ? `${p.name} · ${typeLabels.zh[p.type]}` : `${p.zh} · ${typeLabels.en[p.type]}`}
-                </small>
-              </span>
-              <span className="text-xs text-muted">{p.cities.length}</span>
-            </button>
-          );
-        })}
-      </div>
-    </aside>
-  );
-}
diff --git a/v2/src/components/city/CityHero.tsx b/v2/src/components/city/CityHero.tsx
deleted file mode 100644
index 7b6fef59b459c9e63845b4c806a2c9601b2cbb12..0000000000000000000000000000000000000000
--- a/v2/src/components/city/CityHero.tsx
+++ /dev/null
@@ -1,86 +0,0 @@
-import clsx from "clsx";
-import { attractionsByCity, type Attraction } from "../../data/city-attractions";
-import type { CityId } from "../../data/transport";
-import { useLang } from "../../store/language";
-
-type Props = { cityId: CityId };
-
-export default function CityHero({ cityId }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-  const attractions = attractionsByCity(cityId);
-  if (attractions.length === 0) return null;
-
-  return (
-    <section className="flex flex-col gap-3">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "本市标志景点" : "Signature attractions"}
-        </span>
-        <h2 className="text-2xl font-bold">
-          {isZh ? "去之前先认认这几个地方" : "Know these places before you go"}
-        </h2>
-      </header>
-      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
-        {attractions.map((a) => (
-          <AttractionCard key={a.id} attraction={a} isZh={isZh} />
-        ))}
-      </ul>
-    </section>
-  );
-}
-
-function AttractionCard({ attraction: a, isZh }: { attraction: Attraction; isZh: boolean }) {
-  return (
-    <li className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
-      <a
-        href={a.officialUrl}
-        target="_blank"
-        rel="noreferrer"
-        className="group flex flex-col gap-0"
-      >
-        <div className="aspect-[16/10] w-full overflow-hidden bg-paper">
-          <img
-            src={a.imageUrl}
-            alt={isZh ? a.nameZh : a.nameEn}
-            loading="lazy"
-            referrerPolicy="no-referrer"
-            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
-            onError={(e) => {
-              (e.currentTarget as HTMLImageElement).style.display = "none";
-            }}
-          />
-        </div>
-        <div className="flex flex-col gap-2 p-4">
-          <div className="flex items-center justify-between gap-2">
-            <span
-              className={clsx(
-                "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
-                a.tier === "must-visit"
-                  ? "bg-jade-soft text-jade"
-                  : "bg-amber-100 text-amber-900"
-              )}
-            >
-              {a.tier === "must-visit"
-                ? isZh ? "必去" : "Must-visit"
-                : isZh ? "值得去" : "Worth-it"}
-            </span>
-            <span className="text-[10px] text-muted">
-              {isZh ? a.districtZh : a.districtEn}
-            </span>
-          </div>
-          <strong className="text-sm leading-tight">
-            {isZh ? a.nameZh : a.nameEn}
-          </strong>
-          <p className="line-clamp-3 text-xs leading-relaxed text-ink/80">
-            {isZh ? a.whyZh : a.whyEn}
-          </p>
-          <span className="text-[10px] text-muted/70">
-            {isZh ? "图片：" : "Photo: "}
-            {a.imageCredit}
-          </span>
-        </div>
-      </a>
-    </li>
-  );
-}
diff --git a/v2/src/components/common/PageSources.tsx b/v2/src/components/common/PageSources.tsx
deleted file mode 100644
index 5510ffa6bd49c7a6c349e5e259054a0b05c499d6..0000000000000000000000000000000000000000
--- a/v2/src/components/common/PageSources.tsx
+++ /dev/null
@@ -1,53 +0,0 @@
-import { getSource, type SourceCitation } from "../../data/sources";
-import { useLang } from "../../store/language";
-
-type Props = { ids: string[] };
-
-export default function PageSources({ ids }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-
-  const sources = Array.from(new Set(ids))
-    .map((id) => getSource(id))
-    .filter((s): s is SourceCitation => Boolean(s));
-
-  if (sources.length === 0) return null;
-
-  return (
-    <footer className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "信息来源" : "Sources"}
-        </span>
-        <p className="text-xs text-muted">
-          {isZh
-            ? "本页所有信息均引自下列官方公开来源；点击查看原文。"
-            : "Every fact on this page is cited to one of the official sources below. Click to read the originals."}
-        </p>
-      </header>
-      <ol className="grid gap-1.5 text-xs leading-relaxed">
-        {sources.map((s, i) => (
-          <li key={s.id} className="flex gap-2">
-            <span className="shrink-0 tabular-nums text-muted">[{i + 1}]</span>
-            <a
-              href={s.url}
-              target="_blank"
-              rel="noreferrer"
-              className="flex-1 text-ink hover:text-jade hover:underline"
-            >
-              {s.community && (
-                <span className="mr-1.5 inline-block rounded-sm bg-amber-100 px-1 py-px text-[9px] font-bold uppercase tracking-wider text-amber-800 align-middle">
-                  blog
-                </span>
-              )}
-              <span className="font-bold">{s.publisher}</span>
-              <span className="text-muted"> · {s.pageTitleEn}</span>
-              {s.publishedDate && <span className="text-muted"> · {s.publishedDate}</span>}
-              <span className="ml-1 text-muted/60">— {s.domain}</span>
-            </a>
-          </li>
-        ))}
-      </ol>
-    </footer>
-  );
-}
diff --git a/v2/src/components/map/EarthIntro.tsx b/v2/src/components/map/EarthIntro.tsx
deleted file mode 100644
index e92f647816b6e07c354c0799b90a762dd5c0126b..0000000000000000000000000000000000000000
--- a/v2/src/components/map/EarthIntro.tsx
+++ /dev/null
@@ -1,149 +0,0 @@
-import { useEffect, useRef } from "react";
-import * as THREE from "three";
-
-type Props = { onDone: () => void };
-
-const SPIN_MS = 4000;
-const HOLD_MS = 1500;
-const ZOOM_MS = 1500;
-const TOTAL_MS = SPIN_MS + HOLD_MS + ZOOM_MS;
-
-// Verified against the actual asset (v2/public/assets/earth-bluemarble.jpg, 2:1 equirectangular,
-// prime meridian at horizontal centre, Africa centred). Three.js SphereGeometry default UV:
-// vertex.x = -r·cos(u·2π)·sin(v·π); vertex.y = r·cos(v·π); vertex.z = r·sin(u·2π)·sin(v·π).
-// At rotation = 0, +Z (camera-facing) point sits at u = 0.25, v = 0.5 → lon -90°, lat 0° (Americas).
-// To bring China centre (lon 105°E, lat 35°N → u = 0.79167, v = 0.30556) to the camera:
-//   1. Y-rotation: α_y = π/2 - u·2π = π/2 - 4.974 = -3.403 rad → puts China centre at world (0, +0.574, +0.819)
-//   2. X-rotation: α_x = arctan(0.574 / 0.819) = 0.611 rad ≈ 35° → tilts that point onto +Z exactly
-const CHINA_LON_DEG = 105;
-const CHINA_LAT_DEG = 35;
-const CHINA_U = (CHINA_LON_DEG + 180) / 360;
-const CHINA_V = (90 - CHINA_LAT_DEG) / 180;
-const CHINA_THETA_PHI = CHINA_U * 2 * Math.PI;
-const CHINA_THETA_LAT = CHINA_V * Math.PI;
-const TARGET_Y = Math.PI / 2 - CHINA_THETA_PHI; // -3.403 rad
-const TARGET_X = Math.atan2(Math.cos(CHINA_THETA_LAT), Math.sin(CHINA_THETA_LAT)); // 0.611 rad
-
-export default function EarthIntro({ onDone }: Props) {
-  const hostRef = useRef<HTMLDivElement | null>(null);
-  const doneRef = useRef(onDone);
-
-  useEffect(() => {
-    doneRef.current = onDone;
-  }, [onDone]);
-
-  useEffect(() => {
-    const host = hostRef.current;
-    if (!host) return;
-
-    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
-    renderer.setClearColor(0x000000, 0);
-    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
-    host.appendChild(renderer.domElement);
-    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });
-
-    const scene = new THREE.Scene();
-    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
-    camera.position.set(0, 0, 3.0);
-
-    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
-    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
-    sun.position.set(-2.5, 1.6, 4);
-    scene.add(sun);
-
-    const loader = new THREE.TextureLoader();
-    const earthTex = loader.load("/assets/earth-bluemarble.jpg");
-    earthTex.colorSpace = THREE.SRGBColorSpace;
-
-    const earth = new THREE.Mesh(
-      new THREE.SphereGeometry(1, 96, 64),
-      new THREE.MeshStandardMaterial({ map: earthTex, roughness: 0.92, metalness: 0 })
-    );
-    // 1.5 revolutions before landing on China (eastward visual direction = negative Y rotation)
-    const endY = TARGET_Y;
-    const startY = endY + Math.PI * 3;
-    earth.rotation.y = startY;
-    scene.add(earth);
-
-    const atmosphere = new THREE.Mesh(
-      new THREE.SphereGeometry(1.05, 64, 32),
-      new THREE.ShaderMaterial({
-        transparent: true,
-        side: THREE.BackSide,
-        blending: THREE.AdditiveBlending,
-        depthWrite: false,
-        vertexShader: `
-          varying vec3 vNormal;
-          void main() {
-            vNormal = normalize(normalMatrix * normal);
-            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
-          }`,
-        fragmentShader: `
-          varying vec3 vNormal;
-          void main() {
-            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
-            gl_FragColor = vec4(0.40, 0.68, 1.0, 1.0) * intensity;
-          }`
-      })
-    );
-    scene.add(atmosphere);
-
-    const resize = () => {
-      const rect = host.getBoundingClientRect();
-      const w = Math.max(1, Math.floor(rect.width));
-      const h = Math.max(1, Math.floor(rect.height));
-      renderer.setSize(w, h, false);
-      camera.aspect = w / h;
-      camera.updateProjectionMatrix();
-    };
-    const ro = new ResizeObserver(resize);
-    ro.observe(host);
-    resize();
-
-    let start: number | null = null;
-    let raf = 0;
-
-    const animate = (t: number) => {
-      if (start === null) start = t;
-      const elapsed = t - start;
-
-      const spinT = Math.min(elapsed, SPIN_MS) / SPIN_MS;
-      const spinEased = 1 - Math.pow(1 - spinT, 3); // ease-out cubic
-      const zoomRaw = Math.max(0, elapsed - SPIN_MS - HOLD_MS) / ZOOM_MS;
-      const zoomT = Math.min(1, zoomRaw);
-      const zoomEased = 1 - Math.pow(1 - zoomT, 3);
-
-      const yRot = startY + (endY - startY) * spinEased;
-      earth.rotation.y = yRot;
-      atmosphere.rotation.y = yRot;
-      earth.rotation.x = TARGET_X * spinEased;
-      atmosphere.rotation.x = TARGET_X * spinEased;
-
-      camera.position.z = 3.0 - zoomEased * 1.55;
-      host.style.opacity = String(1 - zoomEased);
-
-      renderer.render(scene, camera);
-
-      if (elapsed < TOTAL_MS) {
-        raf = requestAnimationFrame(animate);
-      } else {
-        doneRef.current();
-      }
-    };
-    raf = requestAnimationFrame(animate);
-
-    return () => {
-      cancelAnimationFrame(raf);
-      ro.disconnect();
-      earthTex.dispose();
-      earth.geometry.dispose();
-      (earth.material as THREE.Material).dispose();
-      atmosphere.geometry.dispose();
-      (atmosphere.material as THREE.Material).dispose();
-      renderer.dispose();
-      host.innerHTML = "";
-    };
-  }, []);
-
-  return <div ref={hostRef} aria-hidden className="pointer-events-none absolute inset-0 z-40" />;
-}
diff --git a/v2/src/components/search/PlaceSearch.tsx b/v2/src/components/search/PlaceSearch.tsx
deleted file mode 100644
index 4f83ec26fe5411e6d3650be3ad2b8fe0f3dba54c..0000000000000000000000000000000000000000
--- a/v2/src/components/search/PlaceSearch.tsx
+++ /dev/null
@@ -1,55 +0,0 @@
-import { useId, useMemo, useState } from "react";
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import { findBestMatch, getAllRecords } from "../../lib/search";
-import { placeTypeLabels } from "../../data/i18n";
-
-export default function PlaceSearch() {
-  const { t, lang } = useLang();
-  const { selectPlace } = useAtlas();
-  const [value, setValue] = useState("");
-  const [hint, setHint] = useState<string | null>(null);
-  const datalistId = useId();
-
-  const suggestions = useMemo(() => getAllRecords().slice(0, 120), []);
-
-  const submit = (event: React.FormEvent) => {
-    event.preventDefault();
-    const record = findBestMatch(value);
-    if (!record) {
-      setHint(t("searchNoMatch"));
-      return;
-    }
-    selectPlace(record.provinceId, record.cityId ?? null);
-    setHint(`${t("searchJumped")} ${lang === "zh" ? record.zh : record.en}`);
-    document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
-  };
-
-  return (
-    <form onSubmit={submit} className="flex flex-1 items-center gap-2">
-      <input
-        type="search"
-        list={datalistId}
-        autoComplete="off"
-        value={value}
-        onChange={(e) => setValue(e.target.value)}
-        placeholder={t("searchPlaceholder")}
-        className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2 text-sm focus:border-ink focus:outline-none"
-      />
-      <button
-        type="submit"
-        className="rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
-      >
-        {t("searchButton")}
-      </button>
-      <datalist id={datalistId}>
-        {suggestions.map((record, i) => {
-          const primary = lang === "zh" ? record.zh : record.en;
-          const typeLabel = placeTypeLabels[lang][record.type] ?? record.type;
-          return <option key={`${record.provinceId}-${record.cityId ?? ""}-${i}`} value={primary} label={`${primary} · ${typeLabel}`} />;
-        })}
-      </datalist>
-      {hint && <span className="ml-2 hidden text-xs text-muted lg:inline">{hint}</span>}
-    </form>
-  );
-}
diff --git a/v2/src/components/sections/HistoryVideo.tsx b/v2/src/components/sections/HistoryVideo.tsx
deleted file mode 100644
index fabd834e41f64ddccb40198d92c4759285dcb51b..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/HistoryVideo.tsx
+++ /dev/null
@@ -1,35 +0,0 @@
-import { useLang } from "../../store/language";
-
-export default function HistoryVideo() {
-  const { t } = useLang();
-  return (
-    <section id="video" className="grid items-start gap-6 md:grid-cols-[1fr_2fr]">
-      <div className="space-y-3">
-        <h2 className="text-2xl font-bold">{t("historyVideoTitle")}</h2>
-        <p className="text-sm leading-relaxed text-muted">{t("historyVideoBody")}</p>
-      </div>
-      <figure className="overflow-hidden rounded-xl border border-line bg-black">
-        <div className="aspect-video">
-          <iframe
-            className="h-full w-full"
-            src="https://www.youtube.com/embed/0DzZgBd4W1Q"
-            title="Discover a China Beyond Your Imagination"
-            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
-            allowFullScreen
-          />
-        </div>
-        <figcaption className="flex items-center justify-between gap-3 bg-white px-4 py-3 text-xs">
-          <strong>{t("historyVideoMeta")}</strong>
-          <a
-            className="text-muted hover:text-jade"
-            href="https://en.chinaculture.org/a/202206/07/WS629edf41a310fd2b29e61286.html"
-            target="_blank"
-            rel="noreferrer"
-          >
-            {t("historyVideoSource")}
-          </a>
-        </figcaption>
-      </figure>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/MuseumFlow.tsx b/v2/src/components/sections/MuseumFlow.tsx
deleted file mode 100644
index 7bcf8805fbbb34b019b679e0e3ca5ce056b94eb9..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/MuseumFlow.tsx
+++ /dev/null
@@ -1,29 +0,0 @@
-import { useLang } from "../../store/language";
-
-const STEPS = [
-  { titleKey: "flowOneTitle", bodyKey: "flowOneBody" },
-  { titleKey: "flowTwoTitle", bodyKey: "flowTwoBody" },
-  { titleKey: "flowThreeTitle", bodyKey: "flowThreeBody" },
-  { titleKey: "flowFourTitle", bodyKey: "flowFourBody" }
-];
-
-export default function MuseumFlow() {
-  const { t } = useLang();
-  return (
-    <section id="museums" className="flex flex-col gap-4">
-      <header>
-        <h2 className="text-2xl font-bold">{t("museumTitle")}</h2>
-        <p className="text-sm text-muted">{t("museumBody")}</p>
-      </header>
-      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
-        {STEPS.map((step, i) => (
-          <li key={step.titleKey} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
-            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
-            <h3 className="text-base font-bold">{t(step.titleKey)}</h3>
-            <p className="text-sm text-muted">{t(step.bodyKey)}</p>
-          </li>
-        ))}
-      </ol>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/SourcesNote.tsx b/v2/src/components/sections/SourcesNote.tsx
deleted file mode 100644
index 8fbbff35733ef16fce104d48e5a8c61e32d25f39..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/SourcesNote.tsx
+++ /dev/null
@@ -1,20 +0,0 @@
-import { useLang } from "../../store/language";
-
-const RULES = ["ruleOne", "ruleTwo", "ruleThree", "ruleFour"];
-
-export default function SourcesNote() {
-  const { t } = useLang();
-  return (
-    <section id="sources" className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header>
-        <h2 className="text-2xl font-bold">{t("sourcesTitle")}</h2>
-        <p className="text-sm text-muted">{t("sourcesBody")}</p>
-      </header>
-      <ul className="grid list-inside list-disc gap-1 text-sm">
-        {RULES.map((key) => (
-          <li key={key}>{t(key)}</li>
-        ))}
-      </ul>
-    </section>
-  );
-}

codex
三个位于 `atlas/` 的子组件复查后只剩自身定义命中，已删除。现在做一次残留引用扫描，然后运行 TypeScript 和生产构建。
  ✓ 确认候选文件路径存在
  ✓ 逐个 grep 验证外部引用
  ✓ 删除零引用组件
  → 运行 tsc 和 build 验证
diff --git a/v2/src/components/atlas/AtlasSection.tsx b/v2/src/components/atlas/AtlasSection.tsx
deleted file mode 100644
index 7dcfe4b7987081264b006a6a4324f5e074eda166..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/AtlasSection.tsx
+++ /dev/null
@@ -1,33 +0,0 @@
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import ProvinceRail from "./ProvinceRail";
-import CityList from "./CityList";
-import CityProfile from "./CityProfile";
-
-export default function AtlasSection() {
-  const { t } = useLang();
-  const { province } = useAtlas();
-
-  return (
-    <section id="atlas" className="flex flex-col gap-4">
-      <header className="flex flex-wrap items-end justify-between gap-3">
-        <div>
-          <h2 className="text-2xl font-bold">{t("atlasTitle")}</h2>
-          <p className="text-sm text-muted">{t("atlasBody")}</p>
-        </div>
-      </header>
-
-      <div className="grid gap-4 md:grid-cols-[260px_minmax(0,1fr)_360px]">
-        <ProvinceRail />
-        <div className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4">
-          <header className="flex items-baseline justify-between">
-            <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
-            <h3 className="text-lg font-bold">{province ? province.name : "China"}</h3>
-          </header>
-          <CityList cities={province?.cities ?? []} />
-        </div>
-        <CityProfile />
-      </div>
-    </section>
-  );
-}
diff --git a/v2/src/components/atlas/CityList.tsx b/v2/src/components/atlas/CityList.tsx
deleted file mode 100644
index de44fe01f30f6ccb8f3b518cdc5a9435c53c51e2..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityList.tsx
+++ /dev/null
@@ -1,69 +0,0 @@
-import clsx from "clsx";
-import type { CityRecord } from "../../data/atlas";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount, useRecordCityView } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityList({ cities }: { cities: CityRecord[] }) {
-  const { t, lang } = useLang();
-  const { selectedCityId, selectCity } = useAtlas();
-  const recordView = useRecordCityView();
-
-  if (!cities.length) {
-    return (
-      <div className="grid place-items-center rounded-xl border border-dashed border-line p-8 text-sm text-muted">
-        {t("mapHintPending")}
-      </div>
-    );
-  }
-
-  return (
-    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
-      {cities.map((city) => (
-        <CityCard
-          key={city.id}
-          city={city}
-          active={city.id === selectedCityId}
-          onSelect={() => {
-            recordView(city.id);
-            selectCity(city.id);
-          }}
-          viewsLabel={t("views")}
-          lang={lang}
-        />
-      ))}
-    </ul>
-  );
-}
-
-type CardProps = {
-  city: CityRecord;
-  active: boolean;
-  onSelect: () => void;
-  viewsLabel: string;
-  lang: "en" | "zh";
-};
-
-function CityCard({ city, active, onSelect, viewsLabel, lang }: CardProps) {
-  const total = useCityViewCount(city.id, city.baseViews);
-  return (
-    <li>
-      <button
-        type="button"
-        onClick={onSelect}
-        className={clsx(
-          "flex w-full flex-col gap-1 rounded-xl border bg-white px-4 py-3 text-left transition",
-          active ? "border-jade ring-1 ring-jade/40" : "border-line hover:border-jade/40"
-        )}
-      >
-        <strong className="text-base">{lang === "zh" ? city.zh : city.name}</strong>
-        <span className="text-xs text-muted">{lang === "zh" ? city.name : city.zh}</span>
-        <span className="text-sm">{lang === "zh" ? city.museumZh || city.museum : city.museum}</span>
-        <span className="mt-1 text-xs text-muted">
-          {formatNumber(total)} {viewsLabel}
-        </span>
-      </button>
-    </li>
-  );
-}
diff --git a/v2/src/components/atlas/CityProfile.tsx b/v2/src/components/atlas/CityProfile.tsx
deleted file mode 100644
index bc5fa519c71ef37ed4fa6b6dc973338eeb9674b1..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityProfile.tsx
+++ /dev/null
@@ -1,87 +0,0 @@
-import { accessLabels, statusLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityProfile() {
-  const { city, selectCity } = useAtlas();
-  const { t, lang } = useLang();
-  const views = useCityViewCount(city?.id ?? "", city?.baseViews ?? 0);
-
-  if (!city) {
-    return (
-      <aside className="flex flex-col items-start gap-2 rounded-xl border border-dashed border-line bg-white p-6">
-        <h3 className="text-lg font-bold">{t("selectCity")}</h3>
-        <p className="text-sm text-muted">{t("selectCityBody")}</p>
-      </aside>
-    );
-  }
-
-  const sites = lang === "zh" ? city.sitesZh : city.sites;
-
-  return (
-    <article className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header className="flex items-start justify-between gap-4">
-        <div>
-          <span className="text-xs font-bold uppercase tracking-widest text-muted">{city.province}</span>
-          <h3 className="text-2xl font-bold leading-tight">{lang === "zh" ? city.zh : city.name}</h3>
-          <p className="text-sm text-muted">{lang === "zh" ? city.name : city.zh}</p>
-        </div>
-        <span className="rounded-full bg-paper px-3 py-1 text-xs font-bold text-muted">
-          {statusLabels[lang][city.status] ?? city.status}
-        </span>
-      </header>
-
-      <section className="rounded-lg bg-paper p-4">
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("startHere")}</span>
-        <h4 className="text-lg font-bold">{lang === "zh" ? city.museumZh || city.museum : city.museum}</h4>
-        <p className="mt-1 text-sm leading-relaxed">
-          {lang === "zh" ? city.museumRoleZh || city.museumRole : city.museumRole}
-        </p>
-      </section>
-
-      <dl className="grid grid-cols-2 gap-3 text-sm">
-        <Stat label={t("pageViews")} value={formatNumber(views)} />
-        <Stat label={t("visitorNotes")} value={formatNumber(city.notes)} />
-        <Stat label={t("lastVerified")} value={city.verified} />
-        <Stat label={t("englishAccess")} value={accessLabels[lang][city.access] ?? city.access} />
-      </dl>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("historicalIdentity")}</h4>
-        <p className="text-sm leading-relaxed">{lang === "zh" ? city.historyZh || city.history : city.history}</p>
-      </section>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("thenExplore")}</h4>
-        <ul className="grid list-inside list-disc gap-1 text-sm">
-          {sites.map((site) => (
-            <li key={site}>{site}</li>
-          ))}
-        </ul>
-      </section>
-
-      <footer className="border-t border-line pt-3 text-xs text-muted">
-        <strong className="block text-ink">{t("sourcePolicy")}</strong>
-        <p className="mt-1">{t("sourcePolicyBody")}</p>
-        <button
-          type="button"
-          onClick={() => selectCity(null)}
-          className="mt-3 text-xs font-bold uppercase tracking-wider text-jade hover:underline"
-        >
-          {t("close")}
-        </button>
-      </footer>
-    </article>
-  );
-}
-
-function Stat({ label, value }: { label: string; value: string }) {
-  return (
-    <div className="rounded-lg bg-paper p-3">
-      <dt className="text-xs font-bold uppercase tracking-widest text-muted">{label}</dt>
-      <dd className="mt-1 text-base font-bold">{value}</dd>
-    </div>
-  );
-}
diff --git a/v2/src/components/atlas/ProvinceRail.tsx b/v2/src/components/atlas/ProvinceRail.tsx
deleted file mode 100644
index 02841ff50e8c93a001d7f1f21371eb7b98e7ce11..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/ProvinceRail.tsx
+++ /dev/null
@@ -1,43 +0,0 @@
-import clsx from "clsx";
-import { atlasData } from "../../data/atlas";
-import { typeLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-
-export default function ProvinceRail() {
-  const { lang, t } = useLang();
-  const { selectedProvinceId, selectProvince } = useAtlas();
-
-  return (
-    <aside aria-label={t("provinceLevelRegions")} className="flex flex-col gap-2">
-      <header className="flex items-baseline justify-between px-1">
-        <strong className="text-xs font-bold uppercase tracking-widest text-muted">{t("provinceLevelRegions")}</strong>
-        <span className="text-xs text-muted">{atlasData.length}</span>
-      </header>
-      <div className="flex max-h-[420px] flex-col gap-1 overflow-y-auto pr-1">
-        {atlasData.map((p) => {
-          const active = p.id === selectedProvinceId;
-          return (
-            <button
-              key={p.id}
-              type="button"
-              onClick={() => selectProvince(p.id)}
-              className={clsx(
-                "flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-left transition",
-                active ? "border-jade/40 bg-jade-soft" : "hover:bg-paper"
-              )}
-            >
-              <span className="leading-tight">
-                <strong className="block text-sm font-bold">{lang === "zh" ? p.zh : p.name}</strong>
-                <small className="block text-xs text-muted">
-                  {lang === "zh" ? `${p.name} · ${typeLabels.zh[p.type]}` : `${p.zh} · ${typeLabels.en[p.type]}`}
-                </small>
-              </span>
-              <span className="text-xs text-muted">{p.cities.length}</span>
-            </button>
-          );
-        })}
-      </div>
-    </aside>
-  );
-}
diff --git a/v2/src/components/city/CityHero.tsx b/v2/src/components/city/CityHero.tsx
deleted file mode 100644
index 7b6fef59b459c9e63845b4c806a2c9601b2cbb12..0000000000000000000000000000000000000000
--- a/v2/src/components/city/CityHero.tsx
+++ /dev/null
@@ -1,86 +0,0 @@
-import clsx from "clsx";
-import { attractionsByCity, type Attraction } from "../../data/city-attractions";
-import type { CityId } from "../../data/transport";
-import { useLang } from "../../store/language";
-
-type Props = { cityId: CityId };
-
-export default function CityHero({ cityId }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-  const attractions = attractionsByCity(cityId);
-  if (attractions.length === 0) return null;
-
-  return (
-    <section className="flex flex-col gap-3">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "本市标志景点" : "Signature attractions"}
-        </span>
-        <h2 className="text-2xl font-bold">
-          {isZh ? "去之前先认认这几个地方" : "Know these places before you go"}
-        </h2>
-      </header>
-      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
-        {attractions.map((a) => (
-          <AttractionCard key={a.id} attraction={a} isZh={isZh} />
-        ))}
-      </ul>
-    </section>
-  );
-}
-
-function AttractionCard({ attraction: a, isZh }: { attraction: Attraction; isZh: boolean }) {
-  return (
-    <li className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
-      <a
-        href={a.officialUrl}
-        target="_blank"
-        rel="noreferrer"
-        className="group flex flex-col gap-0"
-      >
-        <div className="aspect-[16/10] w-full overflow-hidden bg-paper">
-          <img
-            src={a.imageUrl}
-            alt={isZh ? a.nameZh : a.nameEn}
-            loading="lazy"
-            referrerPolicy="no-referrer"
-            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
-            onError={(e) => {
-              (e.currentTarget as HTMLImageElement).style.display = "none";
-            }}
-          />
-        </div>
-        <div className="flex flex-col gap-2 p-4">
-          <div className="flex items-center justify-between gap-2">
-            <span
-              className={clsx(
-                "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
-                a.tier === "must-visit"
-                  ? "bg-jade-soft text-jade"
-                  : "bg-amber-100 text-amber-900"
-              )}
-            >
-              {a.tier === "must-visit"
-                ? isZh ? "必去" : "Must-visit"
-                : isZh ? "值得去" : "Worth-it"}
-            </span>
-            <span className="text-[10px] text-muted">
-              {isZh ? a.districtZh : a.districtEn}
-            </span>
-          </div>
-          <strong className="text-sm leading-tight">
-            {isZh ? a.nameZh : a.nameEn}
-          </strong>
-          <p className="line-clamp-3 text-xs leading-relaxed text-ink/80">
-            {isZh ? a.whyZh : a.whyEn}
-          </p>
-          <span className="text-[10px] text-muted/70">
-            {isZh ? "图片：" : "Photo: "}
-            {a.imageCredit}
-          </span>
-        </div>
-      </a>
-    </li>
-  );
-}
diff --git a/v2/src/components/common/PageSources.tsx b/v2/src/components/common/PageSources.tsx
deleted file mode 100644
index 5510ffa6bd49c7a6c349e5e259054a0b05c499d6..0000000000000000000000000000000000000000
--- a/v2/src/components/common/PageSources.tsx
+++ /dev/null
@@ -1,53 +0,0 @@
-import { getSource, type SourceCitation } from "../../data/sources";
-import { useLang } from "../../store/language";
-
-type Props = { ids: string[] };
-
-export default function PageSources({ ids }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-
-  const sources = Array.from(new Set(ids))
-    .map((id) => getSource(id))
-    .filter((s): s is SourceCitation => Boolean(s));
-
-  if (sources.length === 0) return null;
-
-  return (
-    <footer className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "信息来源" : "Sources"}
-        </span>
-        <p className="text-xs text-muted">
-          {isZh
-            ? "本页所有信息均引自下列官方公开来源；点击查看原文。"
-            : "Every fact on this page is cited to one of the official sources below. Click to read the originals."}
-        </p>
-      </header>
-      <ol className="grid gap-1.5 text-xs leading-relaxed">
-        {sources.map((s, i) => (
-          <li key={s.id} className="flex gap-2">
-            <span className="shrink-0 tabular-nums text-muted">[{i + 1}]</span>
-            <a
-              href={s.url}
-              target="_blank"
-              rel="noreferrer"
-              className="flex-1 text-ink hover:text-jade hover:underline"
-            >
-              {s.community && (
-                <span className="mr-1.5 inline-block rounded-sm bg-amber-100 px-1 py-px text-[9px] font-bold uppercase tracking-wider text-amber-800 align-middle">
-                  blog
-                </span>
-              )}
-              <span className="font-bold">{s.publisher}</span>
-              <span className="text-muted"> · {s.pageTitleEn}</span>
-              {s.publishedDate && <span className="text-muted"> · {s.publishedDate}</span>}
-              <span className="ml-1 text-muted/60">— {s.domain}</span>
-            </a>
-          </li>
-        ))}
-      </ol>
-    </footer>
-  );
-}
diff --git a/v2/src/components/map/EarthIntro.tsx b/v2/src/components/map/EarthIntro.tsx
deleted file mode 100644
index e92f647816b6e07c354c0799b90a762dd5c0126b..0000000000000000000000000000000000000000
--- a/v2/src/components/map/EarthIntro.tsx
+++ /dev/null
@@ -1,149 +0,0 @@
-import { useEffect, useRef } from "react";
-import * as THREE from "three";
-
-type Props = { onDone: () => void };
-
-const SPIN_MS = 4000;
-const HOLD_MS = 1500;
-const ZOOM_MS = 1500;
-const TOTAL_MS = SPIN_MS + HOLD_MS + ZOOM_MS;
-
-// Verified against the actual asset (v2/public/assets/earth-bluemarble.jpg, 2:1 equirectangular,
-// prime meridian at horizontal centre, Africa centred). Three.js SphereGeometry default UV:
-// vertex.x = -r·cos(u·2π)·sin(v·π); vertex.y = r·cos(v·π); vertex.z = r·sin(u·2π)·sin(v·π).
-// At rotation = 0, +Z (camera-facing) point sits at u = 0.25, v = 0.5 → lon -90°, lat 0° (Americas).
-// To bring China centre (lon 105°E, lat 35°N → u = 0.79167, v = 0.30556) to the camera:
-//   1. Y-rotation: α_y = π/2 - u·2π = π/2 - 4.974 = -3.403 rad → puts China centre at world (0, +0.574, +0.819)
-//   2. X-rotation: α_x = arctan(0.574 / 0.819) = 0.611 rad ≈ 35° → tilts that point onto +Z exactly
-const CHINA_LON_DEG = 105;
-const CHINA_LAT_DEG = 35;
-const CHINA_U = (CHINA_LON_DEG + 180) / 360;
-const CHINA_V = (90 - CHINA_LAT_DEG) / 180;
-const CHINA_THETA_PHI = CHINA_U * 2 * Math.PI;
-const CHINA_THETA_LAT = CHINA_V * Math.PI;
-const TARGET_Y = Math.PI / 2 - CHINA_THETA_PHI; // -3.403 rad
-const TARGET_X = Math.atan2(Math.cos(CHINA_THETA_LAT), Math.sin(CHINA_THETA_LAT)); // 0.611 rad
-
-export default function EarthIntro({ onDone }: Props) {
-  const hostRef = useRef<HTMLDivElement | null>(null);
-  const doneRef = useRef(onDone);
-
-  useEffect(() => {
-    doneRef.current = onDone;
-  }, [onDone]);
-
-  useEffect(() => {
-    const host = hostRef.current;
-    if (!host) return;
-
-    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
-    renderer.setClearColor(0x000000, 0);
-    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
-    host.appendChild(renderer.domElement);
-    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });
-
-    const scene = new THREE.Scene();
-    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
-    camera.position.set(0, 0, 3.0);
-
-    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
-    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
-    sun.position.set(-2.5, 1.6, 4);
-    scene.add(sun);
-
-    const loader = new THREE.TextureLoader();
-    const earthTex = loader.load("/assets/earth-bluemarble.jpg");
-    earthTex.colorSpace = THREE.SRGBColorSpace;
-
-    const earth = new THREE.Mesh(
-      new THREE.SphereGeometry(1, 96, 64),
-      new THREE.MeshStandardMaterial({ map: earthTex, roughness: 0.92, metalness: 0 })
-    );
-    // 1.5 revolutions before landing on China (eastward visual direction = negative Y rotation)
-    const endY = TARGET_Y;
-    const startY = endY + Math.PI * 3;
-    earth.rotation.y = startY;
-    scene.add(earth);
-
-    const atmosphere = new THREE.Mesh(
-      new THREE.SphereGeometry(1.05, 64, 32),
-      new THREE.ShaderMaterial({
-        transparent: true,
-        side: THREE.BackSide,
-        blending: THREE.AdditiveBlending,
-        depthWrite: false,
-        vertexShader: `
-          varying vec3 vNormal;
-          void main() {
-            vNormal = normalize(normalMatrix * normal);
-            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
-          }`,
-        fragmentShader: `
-          varying vec3 vNormal;
-          void main() {
-            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
-            gl_FragColor = vec4(0.40, 0.68, 1.0, 1.0) * intensity;
-          }`
-      })
-    );
-    scene.add(atmosphere);
-
-    const resize = () => {
-      const rect = host.getBoundingClientRect();
-      const w = Math.max(1, Math.floor(rect.width));
-      const h = Math.max(1, Math.floor(rect.height));
-      renderer.setSize(w, h, false);
-      camera.aspect = w / h;
-      camera.updateProjectionMatrix();
-    };
-    const ro = new ResizeObserver(resize);
-    ro.observe(host);
-    resize();
-
-    let start: number | null = null;
-    let raf = 0;
-
-    const animate = (t: number) => {
-      if (start === null) start = t;
-      const elapsed = t - start;
-
-      const spinT = Math.min(elapsed, SPIN_MS) / SPIN_MS;
-      const spinEased = 1 - Math.pow(1 - spinT, 3); // ease-out cubic
-      const zoomRaw = Math.max(0, elapsed - SPIN_MS - HOLD_MS) / ZOOM_MS;
-      const zoomT = Math.min(1, zoomRaw);
-      const zoomEased = 1 - Math.pow(1 - zoomT, 3);
-
-      const yRot = startY + (endY - startY) * spinEased;
-      earth.rotation.y = yRot;
-      atmosphere.rotation.y = yRot;
-      earth.rotation.x = TARGET_X * spinEased;
-      atmosphere.rotation.x = TARGET_X * spinEased;
-
-      camera.position.z = 3.0 - zoomEased * 1.55;
-      host.style.opacity = String(1 - zoomEased);
-
-      renderer.render(scene, camera);
-
-      if (elapsed < TOTAL_MS) {
-        raf = requestAnimationFrame(animate);
-      } else {
-        doneRef.current();
-      }
-    };
-    raf = requestAnimationFrame(animate);
-
-    return () => {
-      cancelAnimationFrame(raf);
-      ro.disconnect();
-      earthTex.dispose();
-      earth.geometry.dispose();
-      (earth.material as THREE.Material).dispose();
-      atmosphere.geometry.dispose();
-      (atmosphere.material as THREE.Material).dispose();
-      renderer.dispose();
-      host.innerHTML = "";
-    };
-  }, []);
-
-  return <div ref={hostRef} aria-hidden className="pointer-events-none absolute inset-0 z-40" />;
-}
diff --git a/v2/src/components/search/PlaceSearch.tsx b/v2/src/components/search/PlaceSearch.tsx
deleted file mode 100644
index 4f83ec26fe5411e6d3650be3ad2b8fe0f3dba54c..0000000000000000000000000000000000000000
--- a/v2/src/components/search/PlaceSearch.tsx
+++ /dev/null
@@ -1,55 +0,0 @@
-import { useId, useMemo, useState } from "react";
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import { findBestMatch, getAllRecords } from "../../lib/search";
-import { placeTypeLabels } from "../../data/i18n";
-
-export default function PlaceSearch() {
-  const { t, lang } = useLang();
-  const { selectPlace } = useAtlas();
-  const [value, setValue] = useState("");
-  const [hint, setHint] = useState<string | null>(null);
-  const datalistId = useId();
-
-  const suggestions = useMemo(() => getAllRecords().slice(0, 120), []);
-
-  const submit = (event: React.FormEvent) => {
-    event.preventDefault();
-    const record = findBestMatch(value);
-    if (!record) {
-      setHint(t("searchNoMatch"));
-      return;
-    }
-    selectPlace(record.provinceId, record.cityId ?? null);
-    setHint(`${t("searchJumped")} ${lang === "zh" ? record.zh : record.en}`);
-    document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
-  };
-
-  return (
-    <form onSubmit={submit} className="flex flex-1 items-center gap-2">
-      <input
-        type="search"
-        list={datalistId}
-        autoComplete="off"
-        value={value}
-        onChange={(e) => setValue(e.target.value)}
-        placeholder={t("searchPlaceholder")}
-        className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2 text-sm focus:border-ink focus:outline-none"
-      />
-      <button
-        type="submit"
-        className="rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
-      >
-        {t("searchButton")}
-      </button>
-      <datalist id={datalistId}>
-        {suggestions.map((record, i) => {
-          const primary = lang === "zh" ? record.zh : record.en;
-          const typeLabel = placeTypeLabels[lang][record.type] ?? record.type;
-          return <option key={`${record.provinceId}-${record.cityId ?? ""}-${i}`} value={primary} label={`${primary} · ${typeLabel}`} />;
-        })}
-      </datalist>
-      {hint && <span className="ml-2 hidden text-xs text-muted lg:inline">{hint}</span>}
-    </form>
-  );
-}
diff --git a/v2/src/components/sections/HistoryVideo.tsx b/v2/src/components/sections/HistoryVideo.tsx
deleted file mode 100644
index fabd834e41f64ddccb40198d92c4759285dcb51b..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/HistoryVideo.tsx
+++ /dev/null
@@ -1,35 +0,0 @@
-import { useLang } from "../../store/language";
-
-export default function HistoryVideo() {
-  const { t } = useLang();
-  return (
-    <section id="video" className="grid items-start gap-6 md:grid-cols-[1fr_2fr]">
-      <div className="space-y-3">
-        <h2 className="text-2xl font-bold">{t("historyVideoTitle")}</h2>
-        <p className="text-sm leading-relaxed text-muted">{t("historyVideoBody")}</p>
-      </div>
-      <figure className="overflow-hidden rounded-xl border border-line bg-black">
-        <div className="aspect-video">
-          <iframe
-            className="h-full w-full"
-            src="https://www.youtube.com/embed/0DzZgBd4W1Q"
-            title="Discover a China Beyond Your Imagination"
-            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
-            allowFullScreen
-          />
-        </div>
-        <figcaption className="flex items-center justify-between gap-3 bg-white px-4 py-3 text-xs">
-          <strong>{t("historyVideoMeta")}</strong>
-          <a
-            className="text-muted hover:text-jade"
-            href="https://en.chinaculture.org/a/202206/07/WS629edf41a310fd2b29e61286.html"
-            target="_blank"
-            rel="noreferrer"
-          >
-            {t("historyVideoSource")}
-          </a>
-        </figcaption>
-      </figure>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/MuseumFlow.tsx b/v2/src/components/sections/MuseumFlow.tsx
deleted file mode 100644
index 7bcf8805fbbb34b019b679e0e3ca5ce056b94eb9..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/MuseumFlow.tsx
+++ /dev/null
@@ -1,29 +0,0 @@
-import { useLang } from "../../store/language";
-
-const STEPS = [
-  { titleKey: "flowOneTitle", bodyKey: "flowOneBody" },
-  { titleKey: "flowTwoTitle", bodyKey: "flowTwoBody" },
-  { titleKey: "flowThreeTitle", bodyKey: "flowThreeBody" },
-  { titleKey: "flowFourTitle", bodyKey: "flowFourBody" }
-];
-
-export default function MuseumFlow() {
-  const { t } = useLang();
-  return (
-    <section id="museums" className="flex flex-col gap-4">
-      <header>
-        <h2 className="text-2xl font-bold">{t("museumTitle")}</h2>
-        <p className="text-sm text-muted">{t("museumBody")}</p>
-      </header>
-      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
-        {STEPS.map((step, i) => (
-          <li key={step.titleKey} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
-            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
-            <h3 className="text-base font-bold">{t(step.titleKey)}</h3>
-            <p className="text-sm text-muted">{t(step.bodyKey)}</p>
-          </li>
-        ))}
-      </ol>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/SourcesNote.tsx b/v2/src/components/sections/SourcesNote.tsx
deleted file mode 100644
index 8fbbff35733ef16fce104d48e5a8c61e32d25f39..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/SourcesNote.tsx
+++ /dev/null
@@ -1,20 +0,0 @@
-import { useLang } from "../../store/language";
-
-const RULES = ["ruleOne", "ruleTwo", "ruleThree", "ruleFour"];
-
-export default function SourcesNote() {
-  const { t } = useLang();
-  return (
-    <section id="sources" className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header>
-        <h2 className="text-2xl font-bold">{t("sourcesTitle")}</h2>
-        <p className="text-sm text-muted">{t("sourcesBody")}</p>
-      </header>
-      <ul className="grid list-inside list-disc gap-1 text-sm">
-        {RULES.map((key) => (
-          <li key={key}>{t(key)}</li>
-        ))}
-      </ul>
-    </section>
-  );
-}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$names = @('"'AtlasSection','ProvinceRail','CityList','CityProfile','PlaceSearch','CityHero','PageSources','EarthIntro','MuseumFlow','HistoryVideo','SourcesNote'); foreach ("'$name in $names) { Write-Output "### $name"; grep -RIn --include='"'*.ts' --include='*.tsx' --include='*.js' --include='*.jsx' --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=build --exclude-dir=.next --exclude-dir=.vite "'$name .'"\\src }" in c:\Users\h\Documents\New project 2\v2
 succeeded in 1590ms:
### AtlasSection
### ProvinceRail
### CityList
### CityProfile
### PlaceSearch
### CityHero
### PageSources
### EarthIntro
### MuseumFlow
### HistoryVideo
### SourcesNote
.\src/components/common/SourcesNote.tsx:4:export default function SourcesNote() {
.\src/pages/CityPage.tsx:10:import SourcesNote from "../components/common/SourcesNote";
.\src/pages/CityPage.tsx:73:          <SourcesNote />
.\src/pages/GuidePage.tsx:6:import SourcesNote from "../components/common/SourcesNote";
.\src/pages/GuidePage.tsx:80:      <SourcesNote />

diff --git a/v2/src/components/atlas/AtlasSection.tsx b/v2/src/components/atlas/AtlasSection.tsx
deleted file mode 100644
index 7dcfe4b7987081264b006a6a4324f5e074eda166..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/AtlasSection.tsx
+++ /dev/null
@@ -1,33 +0,0 @@
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import ProvinceRail from "./ProvinceRail";
-import CityList from "./CityList";
-import CityProfile from "./CityProfile";
-
-export default function AtlasSection() {
-  const { t } = useLang();
-  const { province } = useAtlas();
-
-  return (
-    <section id="atlas" className="flex flex-col gap-4">
-      <header className="flex flex-wrap items-end justify-between gap-3">
-        <div>
-          <h2 className="text-2xl font-bold">{t("atlasTitle")}</h2>
-          <p className="text-sm text-muted">{t("atlasBody")}</p>
-        </div>
-      </header>
-
-      <div className="grid gap-4 md:grid-cols-[260px_minmax(0,1fr)_360px]">
-        <ProvinceRail />
-        <div className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4">
-          <header className="flex items-baseline justify-between">
-            <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
-            <h3 className="text-lg font-bold">{province ? province.name : "China"}</h3>
-          </header>
-          <CityList cities={province?.cities ?? []} />
-        </div>
-        <CityProfile />
-      </div>
-    </section>
-  );
-}
diff --git a/v2/src/components/atlas/CityList.tsx b/v2/src/components/atlas/CityList.tsx
deleted file mode 100644
index de44fe01f30f6ccb8f3b518cdc5a9435c53c51e2..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityList.tsx
+++ /dev/null
@@ -1,69 +0,0 @@
-import clsx from "clsx";
-import type { CityRecord } from "../../data/atlas";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount, useRecordCityView } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityList({ cities }: { cities: CityRecord[] }) {
-  const { t, lang } = useLang();
-  const { selectedCityId, selectCity } = useAtlas();
-  const recordView = useRecordCityView();
-
-  if (!cities.length) {
-    return (
-      <div className="grid place-items-center rounded-xl border border-dashed border-line p-8 text-sm text-muted">
-        {t("mapHintPending")}
-      </div>
-    );
-  }
-
-  return (
-    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
-      {cities.map((city) => (
-        <CityCard
-          key={city.id}
-          city={city}
-          active={city.id === selectedCityId}
-          onSelect={() => {
-            recordView(city.id);
-            selectCity(city.id);
-          }}
-          viewsLabel={t("views")}
-          lang={lang}
-        />
-      ))}
-    </ul>
-  );
-}
-
-type CardProps = {
-  city: CityRecord;
-  active: boolean;
-  onSelect: () => void;
-  viewsLabel: string;
-  lang: "en" | "zh";
-};
-
-function CityCard({ city, active, onSelect, viewsLabel, lang }: CardProps) {
-  const total = useCityViewCount(city.id, city.baseViews);
-  return (
-    <li>
-      <button
-        type="button"
-        onClick={onSelect}
-        className={clsx(
-          "flex w-full flex-col gap-1 rounded-xl border bg-white px-4 py-3 text-left transition",
-          active ? "border-jade ring-1 ring-jade/40" : "border-line hover:border-jade/40"
-        )}
-      >
-        <strong className="text-base">{lang === "zh" ? city.zh : city.name}</strong>
-        <span className="text-xs text-muted">{lang === "zh" ? city.name : city.zh}</span>
-        <span className="text-sm">{lang === "zh" ? city.museumZh || city.museum : city.museum}</span>
-        <span className="mt-1 text-xs text-muted">
-          {formatNumber(total)} {viewsLabel}
-        </span>
-      </button>
-    </li>
-  );
-}
diff --git a/v2/src/components/atlas/CityProfile.tsx b/v2/src/components/atlas/CityProfile.tsx
deleted file mode 100644
index bc5fa519c71ef37ed4fa6b6dc973338eeb9674b1..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityProfile.tsx
+++ /dev/null
@@ -1,87 +0,0 @@
-import { accessLabels, statusLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityProfile() {
-  const { city, selectCity } = useAtlas();
-  const { t, lang } = useLang();
-  const views = useCityViewCount(city?.id ?? "", city?.baseViews ?? 0);
-
-  if (!city) {
-    return (
-      <aside className="flex flex-col items-start gap-2 rounded-xl border border-dashed border-line bg-white p-6">
-        <h3 className="text-lg font-bold">{t("selectCity")}</h3>
-        <p className="text-sm text-muted">{t("selectCityBody")}</p>
-      </aside>
-    );
-  }
-
-  const sites = lang === "zh" ? city.sitesZh : city.sites;
-
-  return (
-    <article className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header className="flex items-start justify-between gap-4">
-        <div>
-          <span className="text-xs font-bold uppercase tracking-widest text-muted">{city.province}</span>
-          <h3 className="text-2xl font-bold leading-tight">{lang === "zh" ? city.zh : city.name}</h3>
-          <p className="text-sm text-muted">{lang === "zh" ? city.name : city.zh}</p>
-        </div>
-        <span className="rounded-full bg-paper px-3 py-1 text-xs font-bold text-muted">
-          {statusLabels[lang][city.status] ?? city.status}
-        </span>
-      </header>
-
-      <section className="rounded-lg bg-paper p-4">
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("startHere")}</span>
-        <h4 className="text-lg font-bold">{lang === "zh" ? city.museumZh || city.museum : city.museum}</h4>
-        <p className="mt-1 text-sm leading-relaxed">
-          {lang === "zh" ? city.museumRoleZh || city.museumRole : city.museumRole}
-        </p>
-      </section>
-
-      <dl className="grid grid-cols-2 gap-3 text-sm">
-        <Stat label={t("pageViews")} value={formatNumber(views)} />
-        <Stat label={t("visitorNotes")} value={formatNumber(city.notes)} />
-        <Stat label={t("lastVerified")} value={city.verified} />
-        <Stat label={t("englishAccess")} value={accessLabels[lang][city.access] ?? city.access} />
-      </dl>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("historicalIdentity")}</h4>
-        <p className="text-sm leading-relaxed">{lang === "zh" ? city.historyZh || city.history : city.history}</p>
-      </section>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("thenExplore")}</h4>
-        <ul className="grid list-inside list-disc gap-1 text-sm">
-          {sites.map((site) => (
-            <li key={site}>{site}</li>
-          ))}
-        </ul>
-      </section>
-
-      <footer className="border-t border-line pt-3 text-xs text-muted">
-        <strong className="block text-ink">{t("sourcePolicy")}</strong>
-        <p className="mt-1">{t("sourcePolicyBody")}</p>
-        <button
-          type="button"
-          onClick={() => selectCity(null)}
-          className="mt-3 text-xs font-bold uppercase tracking-wider text-jade hover:underline"
-        >
-          {t("close")}
-        </button>
-      </footer>
-    </article>
-  );
-}
-
-function Stat({ label, value }: { label: string; value: string }) {
-  return (
-    <div className="rounded-lg bg-paper p-3">
-      <dt className="text-xs font-bold uppercase tracking-widest text-muted">{label}</dt>
-      <dd className="mt-1 text-base font-bold">{value}</dd>
-    </div>
-  );
-}
diff --git a/v2/src/components/atlas/ProvinceRail.tsx b/v2/src/components/atlas/ProvinceRail.tsx
deleted file mode 100644
index 02841ff50e8c93a001d7f1f21371eb7b98e7ce11..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/ProvinceRail.tsx
+++ /dev/null
@@ -1,43 +0,0 @@
-import clsx from "clsx";
-import { atlasData } from "../../data/atlas";
-import { typeLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-
-export default function ProvinceRail() {
-  const { lang, t } = useLang();
-  const { selectedProvinceId, selectProvince } = useAtlas();
-
-  return (
-    <aside aria-label={t("provinceLevelRegions")} className="flex flex-col gap-2">
-      <header className="flex items-baseline justify-between px-1">
-        <strong className="text-xs font-bold uppercase tracking-widest text-muted">{t("provinceLevelRegions")}</strong>
-        <span className="text-xs text-muted">{atlasData.length}</span>
-      </header>
-      <div className="flex max-h-[420px] flex-col gap-1 overflow-y-auto pr-1">
-        {atlasData.map((p) => {
-          const active = p.id === selectedProvinceId;
-          return (
-            <button
-              key={p.id}
-              type="button"
-              onClick={() => selectProvince(p.id)}
-              className={clsx(
-                "flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-left transition",
-                active ? "border-jade/40 bg-jade-soft" : "hover:bg-paper"
-              )}
-            >
-              <span className="leading-tight">
-                <strong className="block text-sm font-bold">{lang === "zh" ? p.zh : p.name}</strong>
-                <small className="block text-xs text-muted">
-                  {lang === "zh" ? `${p.name} · ${typeLabels.zh[p.type]}` : `${p.zh} · ${typeLabels.en[p.type]}`}
-                </small>
-              </span>
-              <span className="text-xs text-muted">{p.cities.length}</span>
-            </button>
-          );
-        })}
-      </div>
-    </aside>
-  );
-}
diff --git a/v2/src/components/city/CityHero.tsx b/v2/src/components/city/CityHero.tsx
deleted file mode 100644
index 7b6fef59b459c9e63845b4c806a2c9601b2cbb12..0000000000000000000000000000000000000000
--- a/v2/src/components/city/CityHero.tsx
+++ /dev/null
@@ -1,86 +0,0 @@
-import clsx from "clsx";
-import { attractionsByCity, type Attraction } from "../../data/city-attractions";
-import type { CityId } from "../../data/transport";
-import { useLang } from "../../store/language";
-
-type Props = { cityId: CityId };
-
-export default function CityHero({ cityId }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-  const attractions = attractionsByCity(cityId);
-  if (attractions.length === 0) return null;
-
-  return (
-    <section className="flex flex-col gap-3">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "本市标志景点" : "Signature attractions"}
-        </span>
-        <h2 className="text-2xl font-bold">
-          {isZh ? "去之前先认认这几个地方" : "Know these places before you go"}
-        </h2>
-      </header>
-      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
-        {attractions.map((a) => (
-          <AttractionCard key={a.id} attraction={a} isZh={isZh} />
-        ))}
-      </ul>
-    </section>
-  );
-}
-
-function AttractionCard({ attraction: a, isZh }: { attraction: Attraction; isZh: boolean }) {
-  return (
-    <li className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
-      <a
-        href={a.officialUrl}
-        target="_blank"
-        rel="noreferrer"
-        className="group flex flex-col gap-0"
-      >
-        <div className="aspect-[16/10] w-full overflow-hidden bg-paper">
-          <img
-            src={a.imageUrl}
-            alt={isZh ? a.nameZh : a.nameEn}
-            loading="lazy"
-            referrerPolicy="no-referrer"
-            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
-            onError={(e) => {
-              (e.currentTarget as HTMLImageElement).style.display = "none";
-            }}
-          />
-        </div>
-        <div className="flex flex-col gap-2 p-4">
-          <div className="flex items-center justify-between gap-2">
-            <span
-              className={clsx(
-                "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
-                a.tier === "must-visit"
-                  ? "bg-jade-soft text-jade"
-                  : "bg-amber-100 text-amber-900"
-              )}
-            >
-              {a.tier === "must-visit"
-                ? isZh ? "必去" : "Must-visit"
-                : isZh ? "值得去" : "Worth-it"}
-            </span>
-            <span className="text-[10px] text-muted">
-              {isZh ? a.districtZh : a.districtEn}
-            </span>
-          </div>
-          <strong className="text-sm leading-tight">
-            {isZh ? a.nameZh : a.nameEn}
-          </strong>
-          <p className="line-clamp-3 text-xs leading-relaxed text-ink/80">
-            {isZh ? a.whyZh : a.whyEn}
-          </p>
-          <span className="text-[10px] text-muted/70">
-            {isZh ? "图片：" : "Photo: "}
-            {a.imageCredit}
-          </span>
-        </div>
-      </a>
-    </li>
-  );
-}
diff --git a/v2/src/components/common/PageSources.tsx b/v2/src/components/common/PageSources.tsx
deleted file mode 100644
index 5510ffa6bd49c7a6c349e5e259054a0b05c499d6..0000000000000000000000000000000000000000
--- a/v2/src/components/common/PageSources.tsx
+++ /dev/null
@@ -1,53 +0,0 @@
-import { getSource, type SourceCitation } from "../../data/sources";
-import { useLang } from "../../store/language";
-
-type Props = { ids: string[] };
-
-export default function PageSources({ ids }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-
-  const sources = Array.from(new Set(ids))
-    .map((id) => getSource(id))
-    .filter((s): s is SourceCitation => Boolean(s));
-
-  if (sources.length === 0) return null;
-
-  return (
-    <footer className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "信息来源" : "Sources"}
-        </span>
-        <p className="text-xs text-muted">
-          {isZh
-            ? "本页所有信息均引自下列官方公开来源；点击查看原文。"
-            : "Every fact on this page is cited to one of the official sources below. Click to read the originals."}
-        </p>
-      </header>
-      <ol className="grid gap-1.5 text-xs leading-relaxed">
-        {sources.map((s, i) => (
-          <li key={s.id} className="flex gap-2">
-            <span className="shrink-0 tabular-nums text-muted">[{i + 1}]</span>
-            <a
-              href={s.url}
-              target="_blank"
-              rel="noreferrer"
-              className="flex-1 text-ink hover:text-jade hover:underline"
-            >
-              {s.community && (
-                <span className="mr-1.5 inline-block rounded-sm bg-amber-100 px-1 py-px text-[9px] font-bold uppercase tracking-wider text-amber-800 align-middle">
-                  blog
-                </span>
-              )}
-              <span className="font-bold">{s.publisher}</span>
-              <span className="text-muted"> · {s.pageTitleEn}</span>
-              {s.publishedDate && <span className="text-muted"> · {s.publishedDate}</span>}
-              <span className="ml-1 text-muted/60">— {s.domain}</span>
-            </a>
-          </li>
-        ))}
-      </ol>
-    </footer>
-  );
-}
diff --git a/v2/src/components/map/EarthIntro.tsx b/v2/src/components/map/EarthIntro.tsx
deleted file mode 100644
index e92f647816b6e07c354c0799b90a762dd5c0126b..0000000000000000000000000000000000000000
--- a/v2/src/components/map/EarthIntro.tsx
+++ /dev/null
@@ -1,149 +0,0 @@
-import { useEffect, useRef } from "react";
-import * as THREE from "three";
-
-type Props = { onDone: () => void };
-
-const SPIN_MS = 4000;
-const HOLD_MS = 1500;
-const ZOOM_MS = 1500;
-const TOTAL_MS = SPIN_MS + HOLD_MS + ZOOM_MS;
-
-// Verified against the actual asset (v2/public/assets/earth-bluemarble.jpg, 2:1 equirectangular,
-// prime meridian at horizontal centre, Africa centred). Three.js SphereGeometry default UV:
-// vertex.x = -r·cos(u·2π)·sin(v·π); vertex.y = r·cos(v·π); vertex.z = r·sin(u·2π)·sin(v·π).
-// At rotation = 0, +Z (camera-facing) point sits at u = 0.25, v = 0.5 → lon -90°, lat 0° (Americas).
-// To bring China centre (lon 105°E, lat 35°N → u = 0.79167, v = 0.30556) to the camera:
-//   1. Y-rotation: α_y = π/2 - u·2π = π/2 - 4.974 = -3.403 rad → puts China centre at world (0, +0.574, +0.819)
-//   2. X-rotation: α_x = arctan(0.574 / 0.819) = 0.611 rad ≈ 35° → tilts that point onto +Z exactly
-const CHINA_LON_DEG = 105;
-const CHINA_LAT_DEG = 35;
-const CHINA_U = (CHINA_LON_DEG + 180) / 360;
-const CHINA_V = (90 - CHINA_LAT_DEG) / 180;
-const CHINA_THETA_PHI = CHINA_U * 2 * Math.PI;
-const CHINA_THETA_LAT = CHINA_V * Math.PI;
-const TARGET_Y = Math.PI / 2 - CHINA_THETA_PHI; // -3.403 rad
-const TARGET_X = Math.atan2(Math.cos(CHINA_THETA_LAT), Math.sin(CHINA_THETA_LAT)); // 0.611 rad
-
-export default function EarthIntro({ onDone }: Props) {
-  const hostRef = useRef<HTMLDivElement | null>(null);
-  const doneRef = useRef(onDone);
-
-  useEffect(() => {
-    doneRef.current = onDone;
-  }, [onDone]);
-
-  useEffect(() => {
-    const host = hostRef.current;
-    if (!host) return;
-
-    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
-    renderer.setClearColor(0x000000, 0);
-    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
-    host.appendChild(renderer.domElement);
-    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });
-
-    const scene = new THREE.Scene();
-    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
-    camera.position.set(0, 0, 3.0);
-
-    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
-    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
-    sun.position.set(-2.5, 1.6, 4);
-    scene.add(sun);
-
-    const loader = new THREE.TextureLoader();
-    const earthTex = loader.load("/assets/earth-bluemarble.jpg");
-    earthTex.colorSpace = THREE.SRGBColorSpace;
-
-    const earth = new THREE.Mesh(
-      new THREE.SphereGeometry(1, 96, 64),
-      new THREE.MeshStandardMaterial({ map: earthTex, roughness: 0.92, metalness: 0 })
-    );
-    // 1.5 revolutions before landing on China (eastward visual direction = negative Y rotation)
-    const endY = TARGET_Y;
-    const startY = endY + Math.PI * 3;
-    earth.rotation.y = startY;
-    scene.add(earth);
-
-    const atmosphere = new THREE.Mesh(
-      new THREE.SphereGeometry(1.05, 64, 32),
-      new THREE.ShaderMaterial({
-        transparent: true,
-        side: THREE.BackSide,
-        blending: THREE.AdditiveBlending,
-        depthWrite: false,
-        vertexShader: `
-          varying vec3 vNormal;
-          void main() {
-            vNormal = normalize(normalMatrix * normal);
-            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
-          }`,
-        fragmentShader: `
-          varying vec3 vNormal;
-          void main() {
-            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
-            gl_FragColor = vec4(0.40, 0.68, 1.0, 1.0) * intensity;
-          }`
-      })
-    );
-    scene.add(atmosphere);
-
-    const resize = () => {
-      const rect = host.getBoundingClientRect();
-      const w = Math.max(1, Math.floor(rect.width));
-      const h = Math.max(1, Math.floor(rect.height));
-      renderer.setSize(w, h, false);
-      camera.aspect = w / h;
-      camera.updateProjectionMatrix();
-    };
-    const ro = new ResizeObserver(resize);
-    ro.observe(host);
-    resize();
-
-    let start: number | null = null;
-    let raf = 0;
-
-    const animate = (t: number) => {
-      if (start === null) start = t;
-      const elapsed = t - start;
-
-      const spinT = Math.min(elapsed, SPIN_MS) / SPIN_MS;
-      const spinEased = 1 - Math.pow(1 - spinT, 3); // ease-out cubic
-      const zoomRaw = Math.max(0, elapsed - SPIN_MS - HOLD_MS) / ZOOM_MS;
-      const zoomT = Math.min(1, zoomRaw);
-      const zoomEased = 1 - Math.pow(1 - zoomT, 3);
-
-      const yRot = startY + (endY - startY) * spinEased;
-      earth.rotation.y = yRot;
-      atmosphere.rotation.y = yRot;
-      earth.rotation.x = TARGET_X * spinEased;
-      atmosphere.rotation.x = TARGET_X * spinEased;
-
-      camera.position.z = 3.0 - zoomEased * 1.55;
-      host.style.opacity = String(1 - zoomEased);
-
-      renderer.render(scene, camera);
-
-      if (elapsed < TOTAL_MS) {
-        raf = requestAnimationFrame(animate);
-      } else {
-        doneRef.current();
-      }
-    };
-    raf = requestAnimationFrame(animate);
-
-    return () => {
-      cancelAnimationFrame(raf);
-      ro.disconnect();
-      earthTex.dispose();
-      earth.geometry.dispose();
-      (earth.material as THREE.Material).dispose();
-      atmosphere.geometry.dispose();
-      (atmosphere.material as THREE.Material).dispose();
-      renderer.dispose();
-      host.innerHTML = "";
-    };
-  }, []);
-
-  return <div ref={hostRef} aria-hidden className="pointer-events-none absolute inset-0 z-40" />;
-}
diff --git a/v2/src/components/search/PlaceSearch.tsx b/v2/src/components/search/PlaceSearch.tsx
deleted file mode 100644
index 4f83ec26fe5411e6d3650be3ad2b8fe0f3dba54c..0000000000000000000000000000000000000000
--- a/v2/src/components/search/PlaceSearch.tsx
+++ /dev/null
@@ -1,55 +0,0 @@
-import { useId, useMemo, useState } from "react";
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import { findBestMatch, getAllRecords } from "../../lib/search";
-import { placeTypeLabels } from "../../data/i18n";
-
-export default function PlaceSearch() {
-  const { t, lang } = useLang();
-  const { selectPlace } = useAtlas();
-  const [value, setValue] = useState("");
-  const [hint, setHint] = useState<string | null>(null);
-  const datalistId = useId();
-
-  const suggestions = useMemo(() => getAllRecords().slice(0, 120), []);
-
-  const submit = (event: React.FormEvent) => {
-    event.preventDefault();
-    const record = findBestMatch(value);
-    if (!record) {
-      setHint(t("searchNoMatch"));
-      return;
-    }
-    selectPlace(record.provinceId, record.cityId ?? null);
-    setHint(`${t("searchJumped")} ${lang === "zh" ? record.zh : record.en}`);
-    document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
-  };
-
-  return (
-    <form onSubmit={submit} className="flex flex-1 items-center gap-2">
-      <input
-        type="search"
-        list={datalistId}
-        autoComplete="off"
-        value={value}
-        onChange={(e) => setValue(e.target.value)}
-        placeholder={t("searchPlaceholder")}
-        className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2 text-sm focus:border-ink focus:outline-none"
-      />
-      <button
-        type="submit"
-        className="rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
-      >
-        {t("searchButton")}
-      </button>
-      <datalist id={datalistId}>
-        {suggestions.map((record, i) => {
-          const primary = lang === "zh" ? record.zh : record.en;
-          const typeLabel = placeTypeLabels[lang][record.type] ?? record.type;
-          return <option key={`${record.provinceId}-${record.cityId ?? ""}-${i}`} value={primary} label={`${primary} · ${typeLabel}`} />;
-        })}
-      </datalist>
-      {hint && <span className="ml-2 hidden text-xs text-muted lg:inline">{hint}</span>}
-    </form>
-  );
-}
diff --git a/v2/src/components/sections/HistoryVideo.tsx b/v2/src/components/sections/HistoryVideo.tsx
deleted file mode 100644
index fabd834e41f64ddccb40198d92c4759285dcb51b..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/HistoryVideo.tsx
+++ /dev/null
@@ -1,35 +0,0 @@
-import { useLang } from "../../store/language";
-
-export default function HistoryVideo() {
-  const { t } = useLang();
-  return (
-    <section id="video" className="grid items-start gap-6 md:grid-cols-[1fr_2fr]">
-      <div className="space-y-3">
-        <h2 className="text-2xl font-bold">{t("historyVideoTitle")}</h2>
-        <p className="text-sm leading-relaxed text-muted">{t("historyVideoBody")}</p>
-      </div>
-      <figure className="overflow-hidden rounded-xl border border-line bg-black">
-        <div className="aspect-video">
-          <iframe
-            className="h-full w-full"
-            src="https://www.youtube.com/embed/0DzZgBd4W1Q"
-            title="Discover a China Beyond Your Imagination"
-            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
-            allowFullScreen
-          />
-        </div>
-        <figcaption className="flex items-center justify-between gap-3 bg-white px-4 py-3 text-xs">
-          <strong>{t("historyVideoMeta")}</strong>
-          <a
-            className="text-muted hover:text-jade"
-            href="https://en.chinaculture.org/a/202206/07/WS629edf41a310fd2b29e61286.html"
-            target="_blank"
-            rel="noreferrer"
-          >
-            {t("historyVideoSource")}
-          </a>
-        </figcaption>
-      </figure>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/MuseumFlow.tsx b/v2/src/components/sections/MuseumFlow.tsx
deleted file mode 100644
index 7bcf8805fbbb34b019b679e0e3ca5ce056b94eb9..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/MuseumFlow.tsx
+++ /dev/null
@@ -1,29 +0,0 @@
-import { useLang } from "../../store/language";
-
-const STEPS = [
-  { titleKey: "flowOneTitle", bodyKey: "flowOneBody" },
-  { titleKey: "flowTwoTitle", bodyKey: "flowTwoBody" },
-  { titleKey: "flowThreeTitle", bodyKey: "flowThreeBody" },
-  { titleKey: "flowFourTitle", bodyKey: "flowFourBody" }
-];
-
-export default function MuseumFlow() {
-  const { t } = useLang();
-  return (
-    <section id="museums" className="flex flex-col gap-4">
-      <header>
-        <h2 className="text-2xl font-bold">{t("museumTitle")}</h2>
-        <p className="text-sm text-muted">{t("museumBody")}</p>
-      </header>
-      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
-        {STEPS.map((step, i) => (
-          <li key={step.titleKey} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
-            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
-            <h3 className="text-base font-bold">{t(step.titleKey)}</h3>
-            <p className="text-sm text-muted">{t(step.bodyKey)}</p>
-          </li>
-        ))}
-      </ol>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/SourcesNote.tsx b/v2/src/components/sections/SourcesNote.tsx
deleted file mode 100644
index 8fbbff35733ef16fce104d48e5a8c61e32d25f39..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/SourcesNote.tsx
+++ /dev/null
@@ -1,20 +0,0 @@
-import { useLang } from "../../store/language";
-
-const RULES = ["ruleOne", "ruleTwo", "ruleThree", "ruleFour"];
-
-export default function SourcesNote() {
-  const { t } = useLang();
-  return (
-    <section id="sources" className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header>
-        <h2 className="text-2xl font-bold">{t("sourcesTitle")}</h2>
-        <p className="text-sm text-muted">{t("sourcesBody")}</p>
-      </header>
-      <ul className="grid list-inside list-disc gap-1 text-sm">
-        {RULES.map((key) => (
-          <li key={key}>{t(key)}</li>
-        ))}
-      </ul>
-    </section>
-  );
-}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npx tsc --noEmit' in c:\Users\h\Documents\New project 2\v2
 succeeded in 1454ms:
diff --git a/v2/src/components/atlas/AtlasSection.tsx b/v2/src/components/atlas/AtlasSection.tsx
deleted file mode 100644
index 7dcfe4b7987081264b006a6a4324f5e074eda166..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/AtlasSection.tsx
+++ /dev/null
@@ -1,33 +0,0 @@
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import ProvinceRail from "./ProvinceRail";
-import CityList from "./CityList";
-import CityProfile from "./CityProfile";
-
-export default function AtlasSection() {
-  const { t } = useLang();
-  const { province } = useAtlas();
-
-  return (
-    <section id="atlas" className="flex flex-col gap-4">
-      <header className="flex flex-wrap items-end justify-between gap-3">
-        <div>
-          <h2 className="text-2xl font-bold">{t("atlasTitle")}</h2>
-          <p className="text-sm text-muted">{t("atlasBody")}</p>
-        </div>
-      </header>
-
-      <div className="grid gap-4 md:grid-cols-[260px_minmax(0,1fr)_360px]">
-        <ProvinceRail />
-        <div className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4">
-          <header className="flex items-baseline justify-between">
-            <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
-            <h3 className="text-lg font-bold">{province ? province.name : "China"}</h3>
-          </header>
-          <CityList cities={province?.cities ?? []} />
-        </div>
-        <CityProfile />
-      </div>
-    </section>
-  );
-}
diff --git a/v2/src/components/atlas/CityList.tsx b/v2/src/components/atlas/CityList.tsx
deleted file mode 100644
index de44fe01f30f6ccb8f3b518cdc5a9435c53c51e2..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityList.tsx
+++ /dev/null
@@ -1,69 +0,0 @@
-import clsx from "clsx";
-import type { CityRecord } from "../../data/atlas";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount, useRecordCityView } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityList({ cities }: { cities: CityRecord[] }) {
-  const { t, lang } = useLang();
-  const { selectedCityId, selectCity } = useAtlas();
-  const recordView = useRecordCityView();
-
-  if (!cities.length) {
-    return (
-      <div className="grid place-items-center rounded-xl border border-dashed border-line p-8 text-sm text-muted">
-        {t("mapHintPending")}
-      </div>
-    );
-  }
-
-  return (
-    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
-      {cities.map((city) => (
-        <CityCard
-          key={city.id}
-          city={city}
-          active={city.id === selectedCityId}
-          onSelect={() => {
-            recordView(city.id);
-            selectCity(city.id);
-          }}
-          viewsLabel={t("views")}
-          lang={lang}
-        />
-      ))}
-    </ul>
-  );
-}
-
-type CardProps = {
-  city: CityRecord;
-  active: boolean;
-  onSelect: () => void;
-  viewsLabel: string;
-  lang: "en" | "zh";
-};
-
-function CityCard({ city, active, onSelect, viewsLabel, lang }: CardProps) {
-  const total = useCityViewCount(city.id, city.baseViews);
-  return (
-    <li>
-      <button
-        type="button"
-        onClick={onSelect}
-        className={clsx(
-          "flex w-full flex-col gap-1 rounded-xl border bg-white px-4 py-3 text-left transition",
-          active ? "border-jade ring-1 ring-jade/40" : "border-line hover:border-jade/40"
-        )}
-      >
-        <strong className="text-base">{lang === "zh" ? city.zh : city.name}</strong>
-        <span className="text-xs text-muted">{lang === "zh" ? city.name : city.zh}</span>
-        <span className="text-sm">{lang === "zh" ? city.museumZh || city.museum : city.museum}</span>
-        <span className="mt-1 text-xs text-muted">
-          {formatNumber(total)} {viewsLabel}
-        </span>
-      </button>
-    </li>
-  );
-}
diff --git a/v2/src/components/atlas/CityProfile.tsx b/v2/src/components/atlas/CityProfile.tsx
deleted file mode 100644
index bc5fa519c71ef37ed4fa6b6dc973338eeb9674b1..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityProfile.tsx
+++ /dev/null
@@ -1,87 +0,0 @@
-import { accessLabels, statusLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityProfile() {
-  const { city, selectCity } = useAtlas();
-  const { t, lang } = useLang();
-  const views = useCityViewCount(city?.id ?? "", city?.baseViews ?? 0);
-
-  if (!city) {
-    return (
-      <aside className="flex flex-col items-start gap-2 rounded-xl border border-dashed border-line bg-white p-6">
-        <h3 className="text-lg font-bold">{t("selectCity")}</h3>
-        <p className="text-sm text-muted">{t("selectCityBody")}</p>
-      </aside>
-    );
-  }
-
-  const sites = lang === "zh" ? city.sitesZh : city.sites;
-
-  return (
-    <article className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header className="flex items-start justify-between gap-4">
-        <div>
-          <span className="text-xs font-bold uppercase tracking-widest text-muted">{city.province}</span>
-          <h3 className="text-2xl font-bold leading-tight">{lang === "zh" ? city.zh : city.name}</h3>
-          <p className="text-sm text-muted">{lang === "zh" ? city.name : city.zh}</p>
-        </div>
-        <span className="rounded-full bg-paper px-3 py-1 text-xs font-bold text-muted">
-          {statusLabels[lang][city.status] ?? city.status}
-        </span>
-      </header>
-
-      <section className="rounded-lg bg-paper p-4">
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("startHere")}</span>
-        <h4 className="text-lg font-bold">{lang === "zh" ? city.museumZh || city.museum : city.museum}</h4>
-        <p className="mt-1 text-sm leading-relaxed">
-          {lang === "zh" ? city.museumRoleZh || city.museumRole : city.museumRole}
-        </p>
-      </section>
-
-      <dl className="grid grid-cols-2 gap-3 text-sm">
-        <Stat label={t("pageViews")} value={formatNumber(views)} />
-        <Stat label={t("visitorNotes")} value={formatNumber(city.notes)} />
-        <Stat label={t("lastVerified")} value={city.verified} />
-        <Stat label={t("englishAccess")} value={accessLabels[lang][city.access] ?? city.access} />
-      </dl>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("historicalIdentity")}</h4>
-        <p className="text-sm leading-relaxed">{lang === "zh" ? city.historyZh || city.history : city.history}</p>
-      </section>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("thenExplore")}</h4>
-        <ul className="grid list-inside list-disc gap-1 text-sm">
-          {sites.map((site) => (
-            <li key={site}>{site}</li>
-          ))}
-        </ul>
-      </section>
-
-      <footer className="border-t border-line pt-3 text-xs text-muted">
-        <strong className="block text-ink">{t("sourcePolicy")}</strong>
-        <p className="mt-1">{t("sourcePolicyBody")}</p>
-        <button
-          type="button"
-          onClick={() => selectCity(null)}
-          className="mt-3 text-xs font-bold uppercase tracking-wider text-jade hover:underline"
-        >
-          {t("close")}
-        </button>
-      </footer>
-    </article>
-  );
-}
-
-function Stat({ label, value }: { label: string; value: string }) {
-  return (
-    <div className="rounded-lg bg-paper p-3">
-      <dt className="text-xs font-bold uppercase tracking-widest text-muted">{label}</dt>
-      <dd className="mt-1 text-base font-bold">{value}</dd>
-    </div>
-  );
-}
diff --git a/v2/src/components/atlas/ProvinceRail.tsx b/v2/src/components/atlas/ProvinceRail.tsx
deleted file mode 100644
index 02841ff50e8c93a001d7f1f21371eb7b98e7ce11..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/ProvinceRail.tsx
+++ /dev/null
@@ -1,43 +0,0 @@
-import clsx from "clsx";
-import { atlasData } from "../../data/atlas";
-import { typeLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-
-export default function ProvinceRail() {
-  const { lang, t } = useLang();
-  const { selectedProvinceId, selectProvince } = useAtlas();
-
-  return (
-    <aside aria-label={t("provinceLevelRegions")} className="flex flex-col gap-2">
-      <header className="flex items-baseline justify-between px-1">
-        <strong className="text-xs font-bold uppercase tracking-widest text-muted">{t("provinceLevelRegions")}</strong>
-        <span className="text-xs text-muted">{atlasData.length}</span>
-      </header>
-      <div className="flex max-h-[420px] flex-col gap-1 overflow-y-auto pr-1">
-        {atlasData.map((p) => {
-          const active = p.id === selectedProvinceId;
-          return (
-            <button
-              key={p.id}
-              type="button"
-              onClick={() => selectProvince(p.id)}
-              className={clsx(
-                "flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-left transition",
-                active ? "border-jade/40 bg-jade-soft" : "hover:bg-paper"
-              )}
-            >
-              <span className="leading-tight">
-                <strong className="block text-sm font-bold">{lang === "zh" ? p.zh : p.name}</strong>
-                <small className="block text-xs text-muted">
-                  {lang === "zh" ? `${p.name} · ${typeLabels.zh[p.type]}` : `${p.zh} · ${typeLabels.en[p.type]}`}
-                </small>
-              </span>
-              <span className="text-xs text-muted">{p.cities.length}</span>
-            </button>
-          );
-        })}
-      </div>
-    </aside>
-  );
-}
diff --git a/v2/src/components/city/CityHero.tsx b/v2/src/components/city/CityHero.tsx
deleted file mode 100644
index 7b6fef59b459c9e63845b4c806a2c9601b2cbb12..0000000000000000000000000000000000000000
--- a/v2/src/components/city/CityHero.tsx
+++ /dev/null
@@ -1,86 +0,0 @@
-import clsx from "clsx";
-import { attractionsByCity, type Attraction } from "../../data/city-attractions";
-import type { CityId } from "../../data/transport";
-import { useLang } from "../../store/language";
-
-type Props = { cityId: CityId };
-
-export default function CityHero({ cityId }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-  const attractions = attractionsByCity(cityId);
-  if (attractions.length === 0) return null;
-
-  return (
-    <section className="flex flex-col gap-3">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "本市标志景点" : "Signature attractions"}
-        </span>
-        <h2 className="text-2xl font-bold">
-          {isZh ? "去之前先认认这几个地方" : "Know these places before you go"}
-        </h2>
-      </header>
-      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
-        {attractions.map((a) => (
-          <AttractionCard key={a.id} attraction={a} isZh={isZh} />
-        ))}
-      </ul>
-    </section>
-  );
-}
-
-function AttractionCard({ attraction: a, isZh }: { attraction: Attraction; isZh: boolean }) {
-  return (
-    <li className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
-      <a
-        href={a.officialUrl}
-        target="_blank"
-        rel="noreferrer"
-        className="group flex flex-col gap-0"
-      >
-        <div className="aspect-[16/10] w-full overflow-hidden bg-paper">
-          <img
-            src={a.imageUrl}
-            alt={isZh ? a.nameZh : a.nameEn}
-            loading="lazy"
-            referrerPolicy="no-referrer"
-            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
-            onError={(e) => {
-              (e.currentTarget as HTMLImageElement).style.display = "none";
-            }}
-          />
-        </div>
-        <div className="flex flex-col gap-2 p-4">
-          <div className="flex items-center justify-between gap-2">
-            <span
-              className={clsx(
-                "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
-                a.tier === "must-visit"
-                  ? "bg-jade-soft text-jade"
-                  : "bg-amber-100 text-amber-900"
-              )}
-            >
-              {a.tier === "must-visit"
-                ? isZh ? "必去" : "Must-visit"
-                : isZh ? "值得去" : "Worth-it"}
-            </span>
-            <span className="text-[10px] text-muted">
-              {isZh ? a.districtZh : a.districtEn}
-            </span>
-          </div>
-          <strong className="text-sm leading-tight">
-            {isZh ? a.nameZh : a.nameEn}
-          </strong>
-          <p className="line-clamp-3 text-xs leading-relaxed text-ink/80">
-            {isZh ? a.whyZh : a.whyEn}
-          </p>
-          <span className="text-[10px] text-muted/70">
-            {isZh ? "图片：" : "Photo: "}
-            {a.imageCredit}
-          </span>
-        </div>
-      </a>
-    </li>
-  );
-}
diff --git a/v2/src/components/common/PageSources.tsx b/v2/src/components/common/PageSources.tsx
deleted file mode 100644
index 5510ffa6bd49c7a6c349e5e259054a0b05c499d6..0000000000000000000000000000000000000000
--- a/v2/src/components/common/PageSources.tsx
+++ /dev/null
@@ -1,53 +0,0 @@
-import { getSource, type SourceCitation } from "../../data/sources";
-import { useLang } from "../../store/language";
-
-type Props = { ids: string[] };
-
-export default function PageSources({ ids }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-
-  const sources = Array.from(new Set(ids))
-    .map((id) => getSource(id))
-    .filter((s): s is SourceCitation => Boolean(s));
-
-  if (sources.length === 0) return null;
-
-  return (
-    <footer className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "信息来源" : "Sources"}
-        </span>
-        <p className="text-xs text-muted">
-          {isZh
-            ? "本页所有信息均引自下列官方公开来源；点击查看原文。"
-            : "Every fact on this page is cited to one of the official sources below. Click to read the originals."}
-        </p>
-      </header>
-      <ol className="grid gap-1.5 text-xs leading-relaxed">
-        {sources.map((s, i) => (
-          <li key={s.id} className="flex gap-2">
-            <span className="shrink-0 tabular-nums text-muted">[{i + 1}]</span>
-            <a
-              href={s.url}
-              target="_blank"
-              rel="noreferrer"
-              className="flex-1 text-ink hover:text-jade hover:underline"
-            >
-              {s.community && (
-                <span className="mr-1.5 inline-block rounded-sm bg-amber-100 px-1 py-px text-[9px] font-bold uppercase tracking-wider text-amber-800 align-middle">
-                  blog
-                </span>
-              )}
-              <span className="font-bold">{s.publisher}</span>
-              <span className="text-muted"> · {s.pageTitleEn}</span>
-              {s.publishedDate && <span className="text-muted"> · {s.publishedDate}</span>}
-              <span className="ml-1 text-muted/60">— {s.domain}</span>
-            </a>
-          </li>
-        ))}
-      </ol>
-    </footer>
-  );
-}
diff --git a/v2/src/components/map/EarthIntro.tsx b/v2/src/components/map/EarthIntro.tsx
deleted file mode 100644
index e92f647816b6e07c354c0799b90a762dd5c0126b..0000000000000000000000000000000000000000
--- a/v2/src/components/map/EarthIntro.tsx
+++ /dev/null
@@ -1,149 +0,0 @@
-import { useEffect, useRef } from "react";
-import * as THREE from "three";
-
-type Props = { onDone: () => void };
-
-const SPIN_MS = 4000;
-const HOLD_MS = 1500;
-const ZOOM_MS = 1500;
-const TOTAL_MS = SPIN_MS + HOLD_MS + ZOOM_MS;
-
-// Verified against the actual asset (v2/public/assets/earth-bluemarble.jpg, 2:1 equirectangular,
-// prime meridian at horizontal centre, Africa centred). Three.js SphereGeometry default UV:
-// vertex.x = -r·cos(u·2π)·sin(v·π); vertex.y = r·cos(v·π); vertex.z = r·sin(u·2π)·sin(v·π).
-// At rotation = 0, +Z (camera-facing) point sits at u = 0.25, v = 0.5 → lon -90°, lat 0° (Americas).
-// To bring China centre (lon 105°E, lat 35°N → u = 0.79167, v = 0.30556) to the camera:
-//   1. Y-rotation: α_y = π/2 - u·2π = π/2 - 4.974 = -3.403 rad → puts China centre at world (0, +0.574, +0.819)
-//   2. X-rotation: α_x = arctan(0.574 / 0.819) = 0.611 rad ≈ 35° → tilts that point onto +Z exactly
-const CHINA_LON_DEG = 105;
-const CHINA_LAT_DEG = 35;
-const CHINA_U = (CHINA_LON_DEG + 180) / 360;
-const CHINA_V = (90 - CHINA_LAT_DEG) / 180;
-const CHINA_THETA_PHI = CHINA_U * 2 * Math.PI;
-const CHINA_THETA_LAT = CHINA_V * Math.PI;
-const TARGET_Y = Math.PI / 2 - CHINA_THETA_PHI; // -3.403 rad
-const TARGET_X = Math.atan2(Math.cos(CHINA_THETA_LAT), Math.sin(CHINA_THETA_LAT)); // 0.611 rad
-
-export default function EarthIntro({ onDone }: Props) {
-  const hostRef = useRef<HTMLDivElement | null>(null);
-  const doneRef = useRef(onDone);
-
-  useEffect(() => {
-    doneRef.current = onDone;
-  }, [onDone]);
-
-  useEffect(() => {
-    const host = hostRef.current;
-    if (!host) return;
-
-    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
-    renderer.setClearColor(0x000000, 0);
-    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
-    host.appendChild(renderer.domElement);
-    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });
-
-    const scene = new THREE.Scene();
-    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
-    camera.position.set(0, 0, 3.0);
-
-    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
-    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
-    sun.position.set(-2.5, 1.6, 4);
-    scene.add(sun);
-
-    const loader = new THREE.TextureLoader();
-    const earthTex = loader.load("/assets/earth-bluemarble.jpg");
-    earthTex.colorSpace = THREE.SRGBColorSpace;
-
-    const earth = new THREE.Mesh(
-      new THREE.SphereGeometry(1, 96, 64),
-      new THREE.MeshStandardMaterial({ map: earthTex, roughness: 0.92, metalness: 0 })
-    );
-    // 1.5 revolutions before landing on China (eastward visual direction = negative Y rotation)
-    const endY = TARGET_Y;
-    const startY = endY + Math.PI * 3;
-    earth.rotation.y = startY;
-    scene.add(earth);
-
-    const atmosphere = new THREE.Mesh(
-      new THREE.SphereGeometry(1.05, 64, 32),
-      new THREE.ShaderMaterial({
-        transparent: true,
-        side: THREE.BackSide,
-        blending: THREE.AdditiveBlending,
-        depthWrite: false,
-        vertexShader: `
-          varying vec3 vNormal;
-          void main() {
-            vNormal = normalize(normalMatrix * normal);
-            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
-          }`,
-        fragmentShader: `
-          varying vec3 vNormal;
-          void main() {
-            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
-            gl_FragColor = vec4(0.40, 0.68, 1.0, 1.0) * intensity;
-          }`
-      })
-    );
-    scene.add(atmosphere);
-
-    const resize = () => {
-      const rect = host.getBoundingClientRect();
-      const w = Math.max(1, Math.floor(rect.width));
-      const h = Math.max(1, Math.floor(rect.height));
-      renderer.setSize(w, h, false);
-      camera.aspect = w / h;
-      camera.updateProjectionMatrix();
-    };
-    const ro = new ResizeObserver(resize);
-    ro.observe(host);
-    resize();
-
-    let start: number | null = null;
-    let raf = 0;
-
-    const animate = (t: number) => {
-      if (start === null) start = t;
-      const elapsed = t - start;
-
-      const spinT = Math.min(elapsed, SPIN_MS) / SPIN_MS;
-      const spinEased = 1 - Math.pow(1 - spinT, 3); // ease-out cubic
-      const zoomRaw = Math.max(0, elapsed - SPIN_MS - HOLD_MS) / ZOOM_MS;
-      const zoomT = Math.min(1, zoomRaw);
-      const zoomEased = 1 - Math.pow(1 - zoomT, 3);
-
-      const yRot = startY + (endY - startY) * spinEased;
-      earth.rotation.y = yRot;
-      atmosphere.rotation.y = yRot;
-      earth.rotation.x = TARGET_X * spinEased;
-      atmosphere.rotation.x = TARGET_X * spinEased;
-
-      camera.position.z = 3.0 - zoomEased * 1.55;
-      host.style.opacity = String(1 - zoomEased);
-
-      renderer.render(scene, camera);
-
-      if (elapsed < TOTAL_MS) {
-        raf = requestAnimationFrame(animate);
-      } else {
-        doneRef.current();
-      }
-    };
-    raf = requestAnimationFrame(animate);
-
-    return () => {
-      cancelAnimationFrame(raf);
-      ro.disconnect();
-      earthTex.dispose();
-      earth.geometry.dispose();
-      (earth.material as THREE.Material).dispose();
-      atmosphere.geometry.dispose();
-      (atmosphere.material as THREE.Material).dispose();
-      renderer.dispose();
-      host.innerHTML = "";
-    };
-  }, []);
-
-  return <div ref={hostRef} aria-hidden className="pointer-events-none absolute inset-0 z-40" />;
-}
diff --git a/v2/src/components/search/PlaceSearch.tsx b/v2/src/components/search/PlaceSearch.tsx
deleted file mode 100644
index 4f83ec26fe5411e6d3650be3ad2b8fe0f3dba54c..0000000000000000000000000000000000000000
--- a/v2/src/components/search/PlaceSearch.tsx
+++ /dev/null
@@ -1,55 +0,0 @@
-import { useId, useMemo, useState } from "react";
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import { findBestMatch, getAllRecords } from "../../lib/search";
-import { placeTypeLabels } from "../../data/i18n";
-
-export default function PlaceSearch() {
-  const { t, lang } = useLang();
-  const { selectPlace } = useAtlas();
-  const [value, setValue] = useState("");
-  const [hint, setHint] = useState<string | null>(null);
-  const datalistId = useId();
-
-  const suggestions = useMemo(() => getAllRecords().slice(0, 120), []);
-
-  const submit = (event: React.FormEvent) => {
-    event.preventDefault();
-    const record = findBestMatch(value);
-    if (!record) {
-      setHint(t("searchNoMatch"));
-      return;
-    }
-    selectPlace(record.provinceId, record.cityId ?? null);
-    setHint(`${t("searchJumped")} ${lang === "zh" ? record.zh : record.en}`);
-    document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
-  };
-
-  return (
-    <form onSubmit={submit} className="flex flex-1 items-center gap-2">
-      <input
-        type="search"
-        list={datalistId}
-        autoComplete="off"
-        value={value}
-        onChange={(e) => setValue(e.target.value)}
-        placeholder={t("searchPlaceholder")}
-        className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2 text-sm focus:border-ink focus:outline-none"
-      />
-      <button
-        type="submit"
-        className="rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
-      >
-        {t("searchButton")}
-      </button>
-      <datalist id={datalistId}>
-        {suggestions.map((record, i) => {
-          const primary = lang === "zh" ? record.zh : record.en;
-          const typeLabel = placeTypeLabels[lang][record.type] ?? record.type;
-          return <option key={`${record.provinceId}-${record.cityId ?? ""}-${i}`} value={primary} label={`${primary} · ${typeLabel}`} />;
-        })}
-      </datalist>
-      {hint && <span className="ml-2 hidden text-xs text-muted lg:inline">{hint}</span>}
-    </form>
-  );
-}
diff --git a/v2/src/components/sections/HistoryVideo.tsx b/v2/src/components/sections/HistoryVideo.tsx
deleted file mode 100644
index fabd834e41f64ddccb40198d92c4759285dcb51b..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/HistoryVideo.tsx
+++ /dev/null
@@ -1,35 +0,0 @@
-import { useLang } from "../../store/language";
-
-export default function HistoryVideo() {
-  const { t } = useLang();
-  return (
-    <section id="video" className="grid items-start gap-6 md:grid-cols-[1fr_2fr]">
-      <div className="space-y-3">
-        <h2 className="text-2xl font-bold">{t("historyVideoTitle")}</h2>
-        <p className="text-sm leading-relaxed text-muted">{t("historyVideoBody")}</p>
-      </div>
-      <figure className="overflow-hidden rounded-xl border border-line bg-black">
-        <div className="aspect-video">
-          <iframe
-            className="h-full w-full"
-            src="https://www.youtube.com/embed/0DzZgBd4W1Q"
-            title="Discover a China Beyond Your Imagination"
-            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
-            allowFullScreen
-          />
-        </div>
-        <figcaption className="flex items-center justify-between gap-3 bg-white px-4 py-3 text-xs">
-          <strong>{t("historyVideoMeta")}</strong>
-          <a
-            className="text-muted hover:text-jade"
-            href="https://en.chinaculture.org/a/202206/07/WS629edf41a310fd2b29e61286.html"
-            target="_blank"
-            rel="noreferrer"
-          >
-            {t("historyVideoSource")}
-          </a>
-        </figcaption>
-      </figure>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/MuseumFlow.tsx b/v2/src/components/sections/MuseumFlow.tsx
deleted file mode 100644
index 7bcf8805fbbb34b019b679e0e3ca5ce056b94eb9..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/MuseumFlow.tsx
+++ /dev/null
@@ -1,29 +0,0 @@
-import { useLang } from "../../store/language";
-
-const STEPS = [
-  { titleKey: "flowOneTitle", bodyKey: "flowOneBody" },
-  { titleKey: "flowTwoTitle", bodyKey: "flowTwoBody" },
-  { titleKey: "flowThreeTitle", bodyKey: "flowThreeBody" },
-  { titleKey: "flowFourTitle", bodyKey: "flowFourBody" }
-];
-
-export default function MuseumFlow() {
-  const { t } = useLang();
-  return (
-    <section id="museums" className="flex flex-col gap-4">
-      <header>
-        <h2 className="text-2xl font-bold">{t("museumTitle")}</h2>
-        <p className="text-sm text-muted">{t("museumBody")}</p>
-      </header>
-      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
-        {STEPS.map((step, i) => (
-          <li key={step.titleKey} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
-            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
-            <h3 className="text-base font-bold">{t(step.titleKey)}</h3>
-            <p className="text-sm text-muted">{t(step.bodyKey)}</p>
-          </li>
-        ))}
-      </ol>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/SourcesNote.tsx b/v2/src/components/sections/SourcesNote.tsx
deleted file mode 100644
index 8fbbff35733ef16fce104d48e5a8c61e32d25f39..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/SourcesNote.tsx
+++ /dev/null
@@ -1,20 +0,0 @@
-import { useLang } from "../../store/language";
-
-const RULES = ["ruleOne", "ruleTwo", "ruleThree", "ruleFour"];
-
-export default function SourcesNote() {
-  const { t } = useLang();
-  return (
-    <section id="sources" className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header>
-        <h2 className="text-2xl font-bold">{t("sourcesTitle")}</h2>
-        <p className="text-sm text-muted">{t("sourcesBody")}</p>
-      </header>
-      <ul className="grid list-inside list-disc gap-1 text-sm">
-        {RULES.map((key) => (
-          <li key={key}>{t(key)}</li>
-        ))}
-      </ul>
-    </section>
-  );
-}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run build' in c:\Users\h\Documents\New project 2\v2
 succeeded in 7408ms:

> v2@0.0.0 build
> react-router build

[36mvite v8.0.11 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 1502 modules transformed.
rendering chunks...
[36m[vite-plugin-static-copy][39m [32mCopied 389 items.[39m
computing gzip size...
build/client/.vite/manifest.json                     6.52 kB │ gzip:     0.97 kB
build/client/assets/Map3D-B9DDZdqH.css              24.01 kB │ gzip:     5.37 kB
build/client/assets/root-BBuZXC1J.css               41.09 kB │ gzip:     7.74 kB
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
build/client/assets/root-0VdE96Yi.js                 9.51 kB │ gzip:     4.59 kB
build/client/assets/GuidePage-HegVYse7.js           10.85 kB │ gzip:     5.13 kB
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

[32m✓ built in 4.02s[39m
[36mvite v8.0.11 [32mbuilding ssr environment for production...[36m[39m
[2Ktransforming...✓ 65 modules transformed.
rendering chunks...

[32m✓[39m 2 assets cleaned from React Router server build.
[2mbuild\server\assets\Map3D-B9DDZdqH.css[22m
[2mbuild\server\assets\server-build-BBuZXC1J.css[22m

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
build/server/assets/server-build-BBuZXC1J.css   41.09 kB │ gzip:  7.74 kB
build/server/assets/Map3D-BFTEZmvF.js           13.10 kB │ gzip:  4.65 kB
build/server/assets/map-sources-vO4N3wgx.js     27.68 kB │ gzip:  9.45 kB
build/server/index.js                          312.24 kB │ gzip: 97.68 kB

[32m✓ built in 560ms[39m
[33m[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[33m[33m[PLUGIN_TIMINGS] Warning:[0m Your build spent significant time in plugins. Here is a breakdown:
  - react-router:virtual-modules (39%)
  - react-router:dot-server (38%)
  - react-router:inject-hmr-runtime (15%)
  - react-router:hmr-runtime (4%)
See https://rolldown.rs/options/checks#plugintimings for more details.
[39m

diff --git a/v2/src/components/atlas/AtlasSection.tsx b/v2/src/components/atlas/AtlasSection.tsx
deleted file mode 100644
index 7dcfe4b7987081264b006a6a4324f5e074eda166..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/AtlasSection.tsx
+++ /dev/null
@@ -1,33 +0,0 @@
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import ProvinceRail from "./ProvinceRail";
-import CityList from "./CityList";
-import CityProfile from "./CityProfile";
-
-export default function AtlasSection() {
-  const { t } = useLang();
-  const { province } = useAtlas();
-
-  return (
-    <section id="atlas" className="flex flex-col gap-4">
-      <header className="flex flex-wrap items-end justify-between gap-3">
-        <div>
-          <h2 className="text-2xl font-bold">{t("atlasTitle")}</h2>
-          <p className="text-sm text-muted">{t("atlasBody")}</p>
-        </div>
-      </header>
-
-      <div className="grid gap-4 md:grid-cols-[260px_minmax(0,1fr)_360px]">
-        <ProvinceRail />
-        <div className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4">
-          <header className="flex items-baseline justify-between">
-            <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
-            <h3 className="text-lg font-bold">{province ? province.name : "China"}</h3>
-          </header>
-          <CityList cities={province?.cities ?? []} />
-        </div>
-        <CityProfile />
-      </div>
-    </section>
-  );
-}
diff --git a/v2/src/components/atlas/CityList.tsx b/v2/src/components/atlas/CityList.tsx
deleted file mode 100644
index de44fe01f30f6ccb8f3b518cdc5a9435c53c51e2..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityList.tsx
+++ /dev/null
@@ -1,69 +0,0 @@
-import clsx from "clsx";
-import type { CityRecord } from "../../data/atlas";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount, useRecordCityView } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityList({ cities }: { cities: CityRecord[] }) {
-  const { t, lang } = useLang();
-  const { selectedCityId, selectCity } = useAtlas();
-  const recordView = useRecordCityView();
-
-  if (!cities.length) {
-    return (
-      <div className="grid place-items-center rounded-xl border border-dashed border-line p-8 text-sm text-muted">
-        {t("mapHintPending")}
-      </div>
-    );
-  }
-
-  return (
-    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
-      {cities.map((city) => (
-        <CityCard
-          key={city.id}
-          city={city}
-          active={city.id === selectedCityId}
-          onSelect={() => {
-            recordView(city.id);
-            selectCity(city.id);
-          }}
-          viewsLabel={t("views")}
-          lang={lang}
-        />
-      ))}
-    </ul>
-  );
-}
-
-type CardProps = {
-  city: CityRecord;
-  active: boolean;
-  onSelect: () => void;
-  viewsLabel: string;
-  lang: "en" | "zh";
-};
-
-function CityCard({ city, active, onSelect, viewsLabel, lang }: CardProps) {
-  const total = useCityViewCount(city.id, city.baseViews);
-  return (
-    <li>
-      <button
-        type="button"
-        onClick={onSelect}
-        className={clsx(
-          "flex w-full flex-col gap-1 rounded-xl border bg-white px-4 py-3 text-left transition",
-          active ? "border-jade ring-1 ring-jade/40" : "border-line hover:border-jade/40"
-        )}
-      >
-        <strong className="text-base">{lang === "zh" ? city.zh : city.name}</strong>
-        <span className="text-xs text-muted">{lang === "zh" ? city.name : city.zh}</span>
-        <span className="text-sm">{lang === "zh" ? city.museumZh || city.museum : city.museum}</span>
-        <span className="mt-1 text-xs text-muted">
-          {formatNumber(total)} {viewsLabel}
-        </span>
-      </button>
-    </li>
-  );
-}
diff --git a/v2/src/components/atlas/CityProfile.tsx b/v2/src/components/atlas/CityProfile.tsx
deleted file mode 100644
index bc5fa519c71ef37ed4fa6b6dc973338eeb9674b1..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityProfile.tsx
+++ /dev/null
@@ -1,87 +0,0 @@
-import { accessLabels, statusLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityProfile() {
-  const { city, selectCity } = useAtlas();
-  const { t, lang } = useLang();
-  const views = useCityViewCount(city?.id ?? "", city?.baseViews ?? 0);
-
-  if (!city) {
-    return (
-      <aside className="flex flex-col items-start gap-2 rounded-xl border border-dashed border-line bg-white p-6">
-        <h3 className="text-lg font-bold">{t("selectCity")}</h3>
-        <p className="text-sm text-muted">{t("selectCityBody")}</p>
-      </aside>
-    );
-  }
-
-  const sites = lang === "zh" ? city.sitesZh : city.sites;
-
-  return (
-    <article className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header className="flex items-start justify-between gap-4">
-        <div>
-          <span className="text-xs font-bold uppercase tracking-widest text-muted">{city.province}</span>
-          <h3 className="text-2xl font-bold leading-tight">{lang === "zh" ? city.zh : city.name}</h3>
-          <p className="text-sm text-muted">{lang === "zh" ? city.name : city.zh}</p>
-        </div>
-        <span className="rounded-full bg-paper px-3 py-1 text-xs font-bold text-muted">
-          {statusLabels[lang][city.status] ?? city.status}
-        </span>
-      </header>
-
-      <section className="rounded-lg bg-paper p-4">
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("startHere")}</span>
-        <h4 className="text-lg font-bold">{lang === "zh" ? city.museumZh || city.museum : city.museum}</h4>
-        <p className="mt-1 text-sm leading-relaxed">
-          {lang === "zh" ? city.museumRoleZh || city.museumRole : city.museumRole}
-        </p>
-      </section>
-
-      <dl className="grid grid-cols-2 gap-3 text-sm">
-        <Stat label={t("pageViews")} value={formatNumber(views)} />
-        <Stat label={t("visitorNotes")} value={formatNumber(city.notes)} />
-        <Stat label={t("lastVerified")} value={city.verified} />
-        <Stat label={t("englishAccess")} value={accessLabels[lang][city.access] ?? city.access} />
-      </dl>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("historicalIdentity")}</h4>
-        <p className="text-sm leading-relaxed">{lang === "zh" ? city.historyZh || city.history : city.history}</p>
-      </section>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("thenExplore")}</h4>
-        <ul className="grid list-inside list-disc gap-1 text-sm">
-          {sites.map((site) => (
-            <li key={site}>{site}</li>
-          ))}
-        </ul>
-      </section>
-
-      <footer className="border-t border-line pt-3 text-xs text-muted">
-        <strong className="block text-ink">{t("sourcePolicy")}</strong>
-        <p className="mt-1">{t("sourcePolicyBody")}</p>
-        <button
-          type="button"
-          onClick={() => selectCity(null)}
-          className="mt-3 text-xs font-bold uppercase tracking-wider text-jade hover:underline"
-        >
-          {t("close")}
-        </button>
-      </footer>
-    </article>
-  );
-}
-
-function Stat({ label, value }: { label: string; value: string }) {
-  return (
-    <div className="rounded-lg bg-paper p-3">
-      <dt className="text-xs font-bold uppercase tracking-widest text-muted">{label}</dt>
-      <dd className="mt-1 text-base font-bold">{value}</dd>
-    </div>
-  );
-}
diff --git a/v2/src/components/atlas/ProvinceRail.tsx b/v2/src/components/atlas/ProvinceRail.tsx
deleted file mode 100644
index 02841ff50e8c93a001d7f1f21371eb7b98e7ce11..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/ProvinceRail.tsx
+++ /dev/null
@@ -1,43 +0,0 @@
-import clsx from "clsx";
-import { atlasData } from "../../data/atlas";
-import { typeLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-
-export default function ProvinceRail() {
-  const { lang, t } = useLang();
-  const { selectedProvinceId, selectProvince } = useAtlas();
-
-  return (
-    <aside aria-label={t("provinceLevelRegions")} className="flex flex-col gap-2">
-      <header className="flex items-baseline justify-between px-1">
-        <strong className="text-xs font-bold uppercase tracking-widest text-muted">{t("provinceLevelRegions")}</strong>
-        <span className="text-xs text-muted">{atlasData.length}</span>
-      </header>
-      <div className="flex max-h-[420px] flex-col gap-1 overflow-y-auto pr-1">
-        {atlasData.map((p) => {
-          const active = p.id === selectedProvinceId;
-          return (
-            <button
-              key={p.id}
-              type="button"
-              onClick={() => selectProvince(p.id)}
-              className={clsx(
-                "flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-left transition",
-                active ? "border-jade/40 bg-jade-soft" : "hover:bg-paper"
-              )}
-            >
-              <span className="leading-tight">
-                <strong className="block text-sm font-bold">{lang === "zh" ? p.zh : p.name}</strong>
-                <small className="block text-xs text-muted">
-                  {lang === "zh" ? `${p.name} · ${typeLabels.zh[p.type]}` : `${p.zh} · ${typeLabels.en[p.type]}`}
-                </small>
-              </span>
-              <span className="text-xs text-muted">{p.cities.length}</span>
-            </button>
-          );
-        })}
-      </div>
-    </aside>
-  );
-}
diff --git a/v2/src/components/city/CityHero.tsx b/v2/src/components/city/CityHero.tsx
deleted file mode 100644
index 7b6fef59b459c9e63845b4c806a2c9601b2cbb12..0000000000000000000000000000000000000000
--- a/v2/src/components/city/CityHero.tsx
+++ /dev/null
@@ -1,86 +0,0 @@
-import clsx from "clsx";
-import { attractionsByCity, type Attraction } from "../../data/city-attractions";
-import type { CityId } from "../../data/transport";
-import { useLang } from "../../store/language";
-
-type Props = { cityId: CityId };
-
-export default function CityHero({ cityId }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-  const attractions = attractionsByCity(cityId);
-  if (attractions.length === 0) return null;
-
-  return (
-    <section className="flex flex-col gap-3">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "本市标志景点" : "Signature attractions"}
-        </span>
-        <h2 className="text-2xl font-bold">
-          {isZh ? "去之前先认认这几个地方" : "Know these places before you go"}
-        </h2>
-      </header>
-      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
-        {attractions.map((a) => (
-          <AttractionCard key={a.id} attraction={a} isZh={isZh} />
-        ))}
-      </ul>
-    </section>
-  );
-}
-
-function AttractionCard({ attraction: a, isZh }: { attraction: Attraction; isZh: boolean }) {
-  return (
-    <li className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
-      <a
-        href={a.officialUrl}
-        target="_blank"
-        rel="noreferrer"
-        className="group flex flex-col gap-0"
-      >
-        <div className="aspect-[16/10] w-full overflow-hidden bg-paper">
-          <img
-            src={a.imageUrl}
-            alt={isZh ? a.nameZh : a.nameEn}
-            loading="lazy"
-            referrerPolicy="no-referrer"
-            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
-            onError={(e) => {
-              (e.currentTarget as HTMLImageElement).style.display = "none";
-            }}
-          />
-        </div>
-        <div className="flex flex-col gap-2 p-4">
-          <div className="flex items-center justify-between gap-2">
-            <span
-              className={clsx(
-                "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
-                a.tier === "must-visit"
-                  ? "bg-jade-soft text-jade"
-                  : "bg-amber-100 text-amber-900"
-              )}
-            >
-              {a.tier === "must-visit"
-                ? isZh ? "必去" : "Must-visit"
-                : isZh ? "值得去" : "Worth-it"}
-            </span>
-            <span className="text-[10px] text-muted">
-              {isZh ? a.districtZh : a.districtEn}
-            </span>
-          </div>
-          <strong className="text-sm leading-tight">
-            {isZh ? a.nameZh : a.nameEn}
-          </strong>
-          <p className="line-clamp-3 text-xs leading-relaxed text-ink/80">
-            {isZh ? a.whyZh : a.whyEn}
-          </p>
-          <span className="text-[10px] text-muted/70">
-            {isZh ? "图片：" : "Photo: "}
-            {a.imageCredit}
-          </span>
-        </div>
-      </a>
-    </li>
-  );
-}
diff --git a/v2/src/components/common/PageSources.tsx b/v2/src/components/common/PageSources.tsx
deleted file mode 100644
index 5510ffa6bd49c7a6c349e5e259054a0b05c499d6..0000000000000000000000000000000000000000
--- a/v2/src/components/common/PageSources.tsx
+++ /dev/null
@@ -1,53 +0,0 @@
-import { getSource, type SourceCitation } from "../../data/sources";
-import { useLang } from "../../store/language";
-
-type Props = { ids: string[] };
-
-export default function PageSources({ ids }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-
-  const sources = Array.from(new Set(ids))
-    .map((id) => getSource(id))
-    .filter((s): s is SourceCitation => Boolean(s));
-
-  if (sources.length === 0) return null;
-
-  return (
-    <footer className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "信息来源" : "Sources"}
-        </span>
-        <p className="text-xs text-muted">
-          {isZh
-            ? "本页所有信息均引自下列官方公开来源；点击查看原文。"
-            : "Every fact on this page is cited to one of the official sources below. Click to read the originals."}
-        </p>
-      </header>
-      <ol className="grid gap-1.5 text-xs leading-relaxed">
-        {sources.map((s, i) => (
-          <li key={s.id} className="flex gap-2">
-            <span className="shrink-0 tabular-nums text-muted">[{i + 1}]</span>
-            <a
-              href={s.url}
-              target="_blank"
-              rel="noreferrer"
-              className="flex-1 text-ink hover:text-jade hover:underline"
-            >
-              {s.community && (
-                <span className="mr-1.5 inline-block rounded-sm bg-amber-100 px-1 py-px text-[9px] font-bold uppercase tracking-wider text-amber-800 align-middle">
-                  blog
-                </span>
-              )}
-              <span className="font-bold">{s.publisher}</span>
-              <span className="text-muted"> · {s.pageTitleEn}</span>
-              {s.publishedDate && <span className="text-muted"> · {s.publishedDate}</span>}
-              <span className="ml-1 text-muted/60">— {s.domain}</span>
-            </a>
-          </li>
-        ))}
-      </ol>
-    </footer>
-  );
-}
diff --git a/v2/src/components/map/EarthIntro.tsx b/v2/src/components/map/EarthIntro.tsx
deleted file mode 100644
index e92f647816b6e07c354c0799b90a762dd5c0126b..0000000000000000000000000000000000000000
--- a/v2/src/components/map/EarthIntro.tsx
+++ /dev/null
@@ -1,149 +0,0 @@
-import { useEffect, useRef } from "react";
-import * as THREE from "three";
-
-type Props = { onDone: () => void };
-
-const SPIN_MS = 4000;
-const HOLD_MS = 1500;
-const ZOOM_MS = 1500;
-const TOTAL_MS = SPIN_MS + HOLD_MS + ZOOM_MS;
-
-// Verified against the actual asset (v2/public/assets/earth-bluemarble.jpg, 2:1 equirectangular,
-// prime meridian at horizontal centre, Africa centred). Three.js SphereGeometry default UV:
-// vertex.x = -r·cos(u·2π)·sin(v·π); vertex.y = r·cos(v·π); vertex.z = r·sin(u·2π)·sin(v·π).
-// At rotation = 0, +Z (camera-facing) point sits at u = 0.25, v = 0.5 → lon -90°, lat 0° (Americas).
-// To bring China centre (lon 105°E, lat 35°N → u = 0.79167, v = 0.30556) to the camera:
-//   1. Y-rotation: α_y = π/2 - u·2π = π/2 - 4.974 = -3.403 rad → puts China centre at world (0, +0.574, +0.819)
-//   2. X-rotation: α_x = arctan(0.574 / 0.819) = 0.611 rad ≈ 35° → tilts that point onto +Z exactly
-const CHINA_LON_DEG = 105;
-const CHINA_LAT_DEG = 35;
-const CHINA_U = (CHINA_LON_DEG + 180) / 360;
-const CHINA_V = (90 - CHINA_LAT_DEG) / 180;
-const CHINA_THETA_PHI = CHINA_U * 2 * Math.PI;
-const CHINA_THETA_LAT = CHINA_V * Math.PI;
-const TARGET_Y = Math.PI / 2 - CHINA_THETA_PHI; // -3.403 rad
-const TARGET_X = Math.atan2(Math.cos(CHINA_THETA_LAT), Math.sin(CHINA_THETA_LAT)); // 0.611 rad
-
-export default function EarthIntro({ onDone }: Props) {
-  const hostRef = useRef<HTMLDivElement | null>(null);
-  const doneRef = useRef(onDone);
-
-  useEffect(() => {
-    doneRef.current = onDone;
-  }, [onDone]);
-
-  useEffect(() => {
-    const host = hostRef.current;
-    if (!host) return;
-
-    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
-    renderer.setClearColor(0x000000, 0);
-    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
-    host.appendChild(renderer.domElement);
-    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });
-
-    const scene = new THREE.Scene();
-    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
-    camera.position.set(0, 0, 3.0);
-
-    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
-    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
-    sun.position.set(-2.5, 1.6, 4);
-    scene.add(sun);
-
-    const loader = new THREE.TextureLoader();
-    const earthTex = loader.load("/assets/earth-bluemarble.jpg");
-    earthTex.colorSpace = THREE.SRGBColorSpace;
-
-    const earth = new THREE.Mesh(
-      new THREE.SphereGeometry(1, 96, 64),
-      new THREE.MeshStandardMaterial({ map: earthTex, roughness: 0.92, metalness: 0 })
-    );
-    // 1.5 revolutions before landing on China (eastward visual direction = negative Y rotation)
-    const endY = TARGET_Y;
-    const startY = endY + Math.PI * 3;
-    earth.rotation.y = startY;
-    scene.add(earth);
-
-    const atmosphere = new THREE.Mesh(
-      new THREE.SphereGeometry(1.05, 64, 32),
-      new THREE.ShaderMaterial({
-        transparent: true,
-        side: THREE.BackSide,
-        blending: THREE.AdditiveBlending,
-        depthWrite: false,
-        vertexShader: `
-          varying vec3 vNormal;
-          void main() {
-            vNormal = normalize(normalMatrix * normal);
-            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
-          }`,
-        fragmentShader: `
-          varying vec3 vNormal;
-          void main() {
-            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
-            gl_FragColor = vec4(0.40, 0.68, 1.0, 1.0) * intensity;
-          }`
-      })
-    );
-    scene.add(atmosphere);
-
-    const resize = () => {
-      const rect = host.getBoundingClientRect();
-      const w = Math.max(1, Math.floor(rect.width));
-      const h = Math.max(1, Math.floor(rect.height));
-      renderer.setSize(w, h, false);
-      camera.aspect = w / h;
-      camera.updateProjectionMatrix();
-    };
-    const ro = new ResizeObserver(resize);
-    ro.observe(host);
-    resize();
-
-    let start: number | null = null;
-    let raf = 0;
-
-    const animate = (t: number) => {
-      if (start === null) start = t;
-      const elapsed = t - start;
-
-      const spinT = Math.min(elapsed, SPIN_MS) / SPIN_MS;
-      const spinEased = 1 - Math.pow(1 - spinT, 3); // ease-out cubic
-      const zoomRaw = Math.max(0, elapsed - SPIN_MS - HOLD_MS) / ZOOM_MS;
-      const zoomT = Math.min(1, zoomRaw);
-      const zoomEased = 1 - Math.pow(1 - zoomT, 3);
-
-      const yRot = startY + (endY - startY) * spinEased;
-      earth.rotation.y = yRot;
-      atmosphere.rotation.y = yRot;
-      earth.rotation.x = TARGET_X * spinEased;
-      atmosphere.rotation.x = TARGET_X * spinEased;
-
-      camera.position.z = 3.0 - zoomEased * 1.55;
-      host.style.opacity = String(1 - zoomEased);
-
-      renderer.render(scene, camera);
-
-      if (elapsed < TOTAL_MS) {
-        raf = requestAnimationFrame(animate);
-      } else {
-        doneRef.current();
-      }
-    };
-    raf = requestAnimationFrame(animate);
-
-    return () => {
-      cancelAnimationFrame(raf);
-      ro.disconnect();
-      earthTex.dispose();
-      earth.geometry.dispose();
-      (earth.material as THREE.Material).dispose();
-      atmosphere.geometry.dispose();
-      (atmosphere.material as THREE.Material).dispose();
-      renderer.dispose();
-      host.innerHTML = "";
-    };
-  }, []);
-
-  return <div ref={hostRef} aria-hidden className="pointer-events-none absolute inset-0 z-40" />;
-}
diff --git a/v2/src/components/search/PlaceSearch.tsx b/v2/src/components/search/PlaceSearch.tsx
deleted file mode 100644
index 4f83ec26fe5411e6d3650be3ad2b8fe0f3dba54c..0000000000000000000000000000000000000000
--- a/v2/src/components/search/PlaceSearch.tsx
+++ /dev/null
@@ -1,55 +0,0 @@
-import { useId, useMemo, useState } from "react";
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import { findBestMatch, getAllRecords } from "../../lib/search";
-import { placeTypeLabels } from "../../data/i18n";
-
-export default function PlaceSearch() {
-  const { t, lang } = useLang();
-  const { selectPlace } = useAtlas();
-  const [value, setValue] = useState("");
-  const [hint, setHint] = useState<string | null>(null);
-  const datalistId = useId();
-
-  const suggestions = useMemo(() => getAllRecords().slice(0, 120), []);
-
-  const submit = (event: React.FormEvent) => {
-    event.preventDefault();
-    const record = findBestMatch(value);
-    if (!record) {
-      setHint(t("searchNoMatch"));
-      return;
-    }
-    selectPlace(record.provinceId, record.cityId ?? null);
-    setHint(`${t("searchJumped")} ${lang === "zh" ? record.zh : record.en}`);
-    document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
-  };
-
-  return (
-    <form onSubmit={submit} className="flex flex-1 items-center gap-2">
-      <input
-        type="search"
-        list={datalistId}
-        autoComplete="off"
-        value={value}
-        onChange={(e) => setValue(e.target.value)}
-        placeholder={t("searchPlaceholder")}
-        className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2 text-sm focus:border-ink focus:outline-none"
-      />
-      <button
-        type="submit"
-        className="rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
-      >
-        {t("searchButton")}
-      </button>
-      <datalist id={datalistId}>
-        {suggestions.map((record, i) => {
-          const primary = lang === "zh" ? record.zh : record.en;
-          const typeLabel = placeTypeLabels[lang][record.type] ?? record.type;
-          return <option key={`${record.provinceId}-${record.cityId ?? ""}-${i}`} value={primary} label={`${primary} · ${typeLabel}`} />;
-        })}
-      </datalist>
-      {hint && <span className="ml-2 hidden text-xs text-muted lg:inline">{hint}</span>}
-    </form>
-  );
-}
diff --git a/v2/src/components/sections/HistoryVideo.tsx b/v2/src/components/sections/HistoryVideo.tsx
deleted file mode 100644
index fabd834e41f64ddccb40198d92c4759285dcb51b..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/HistoryVideo.tsx
+++ /dev/null
@@ -1,35 +0,0 @@
-import { useLang } from "../../store/language";
-
-export default function HistoryVideo() {
-  const { t } = useLang();
-  return (
-    <section id="video" className="grid items-start gap-6 md:grid-cols-[1fr_2fr]">
-      <div className="space-y-3">
-        <h2 className="text-2xl font-bold">{t("historyVideoTitle")}</h2>
-        <p className="text-sm leading-relaxed text-muted">{t("historyVideoBody")}</p>
-      </div>
-      <figure className="overflow-hidden rounded-xl border border-line bg-black">
-        <div className="aspect-video">
-          <iframe
-            className="h-full w-full"
-            src="https://www.youtube.com/embed/0DzZgBd4W1Q"
-            title="Discover a China Beyond Your Imagination"
-            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
-            allowFullScreen
-          />
-        </div>
-        <figcaption className="flex items-center justify-between gap-3 bg-white px-4 py-3 text-xs">
-          <strong>{t("historyVideoMeta")}</strong>
-          <a
-            className="text-muted hover:text-jade"
-            href="https://en.chinaculture.org/a/202206/07/WS629edf41a310fd2b29e61286.html"
-            target="_blank"
-            rel="noreferrer"
-          >
-            {t("historyVideoSource")}
-          </a>
-        </figcaption>
-      </figure>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/MuseumFlow.tsx b/v2/src/components/sections/MuseumFlow.tsx
deleted file mode 100644
index 7bcf8805fbbb34b019b679e0e3ca5ce056b94eb9..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/MuseumFlow.tsx
+++ /dev/null
@@ -1,29 +0,0 @@
-import { useLang } from "../../store/language";
-
-const STEPS = [
-  { titleKey: "flowOneTitle", bodyKey: "flowOneBody" },
-  { titleKey: "flowTwoTitle", bodyKey: "flowTwoBody" },
-  { titleKey: "flowThreeTitle", bodyKey: "flowThreeBody" },
-  { titleKey: "flowFourTitle", bodyKey: "flowFourBody" }
-];
-
-export default function MuseumFlow() {
-  const { t } = useLang();
-  return (
-    <section id="museums" className="flex flex-col gap-4">
-      <header>
-        <h2 className="text-2xl font-bold">{t("museumTitle")}</h2>
-        <p className="text-sm text-muted">{t("museumBody")}</p>
-      </header>
-      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
-        {STEPS.map((step, i) => (
-          <li key={step.titleKey} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
-            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
-            <h3 className="text-base font-bold">{t(step.titleKey)}</h3>
-            <p className="text-sm text-muted">{t(step.bodyKey)}</p>
-          </li>
-        ))}
-      </ol>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/SourcesNote.tsx b/v2/src/components/sections/SourcesNote.tsx
deleted file mode 100644
index 8fbbff35733ef16fce104d48e5a8c61e32d25f39..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/SourcesNote.tsx
+++ /dev/null
@@ -1,20 +0,0 @@
-import { useLang } from "../../store/language";
-
-const RULES = ["ruleOne", "ruleTwo", "ruleThree", "ruleFour"];
-
-export default function SourcesNote() {
-  const { t } = useLang();
-  return (
-    <section id="sources" className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header>
-        <h2 className="text-2xl font-bold">{t("sourcesTitle")}</h2>
-        <p className="text-sm text-muted">{t("sourcesBody")}</p>
-      </header>
-      <ul className="grid list-inside list-disc gap-1 text-sm">
-        {RULES.map((key) => (
-          <li key={key}>{t(key)}</li>
-        ))}
-      </ul>
-    </section>
-  );
-}

  ✓ 确认候选文件路径存在
  ✓ 逐个 grep 验证外部引用
  ✓ 删除零引用组件
  ✓ 运行 tsc 和 build 验证
diff --git a/v2/src/components/atlas/AtlasSection.tsx b/v2/src/components/atlas/AtlasSection.tsx
deleted file mode 100644
index 7dcfe4b7987081264b006a6a4324f5e074eda166..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/AtlasSection.tsx
+++ /dev/null
@@ -1,33 +0,0 @@
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import ProvinceRail from "./ProvinceRail";
-import CityList from "./CityList";
-import CityProfile from "./CityProfile";
-
-export default function AtlasSection() {
-  const { t } = useLang();
-  const { province } = useAtlas();
-
-  return (
-    <section id="atlas" className="flex flex-col gap-4">
-      <header className="flex flex-wrap items-end justify-between gap-3">
-        <div>
-          <h2 className="text-2xl font-bold">{t("atlasTitle")}</h2>
-          <p className="text-sm text-muted">{t("atlasBody")}</p>
-        </div>
-      </header>
-
-      <div className="grid gap-4 md:grid-cols-[260px_minmax(0,1fr)_360px]">
-        <ProvinceRail />
-        <div className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4">
-          <header className="flex items-baseline justify-between">
-            <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
-            <h3 className="text-lg font-bold">{province ? province.name : "China"}</h3>
-          </header>
-          <CityList cities={province?.cities ?? []} />
-        </div>
-        <CityProfile />
-      </div>
-    </section>
-  );
-}
diff --git a/v2/src/components/atlas/CityList.tsx b/v2/src/components/atlas/CityList.tsx
deleted file mode 100644
index de44fe01f30f6ccb8f3b518cdc5a9435c53c51e2..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityList.tsx
+++ /dev/null
@@ -1,69 +0,0 @@
-import clsx from "clsx";
-import type { CityRecord } from "../../data/atlas";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount, useRecordCityView } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityList({ cities }: { cities: CityRecord[] }) {
-  const { t, lang } = useLang();
-  const { selectedCityId, selectCity } = useAtlas();
-  const recordView = useRecordCityView();
-
-  if (!cities.length) {
-    return (
-      <div className="grid place-items-center rounded-xl border border-dashed border-line p-8 text-sm text-muted">
-        {t("mapHintPending")}
-      </div>
-    );
-  }
-
-  return (
-    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
-      {cities.map((city) => (
-        <CityCard
-          key={city.id}
-          city={city}
-          active={city.id === selectedCityId}
-          onSelect={() => {
-            recordView(city.id);
-            selectCity(city.id);
-          }}
-          viewsLabel={t("views")}
-          lang={lang}
-        />
-      ))}
-    </ul>
-  );
-}
-
-type CardProps = {
-  city: CityRecord;
-  active: boolean;
-  onSelect: () => void;
-  viewsLabel: string;
-  lang: "en" | "zh";
-};
-
-function CityCard({ city, active, onSelect, viewsLabel, lang }: CardProps) {
-  const total = useCityViewCount(city.id, city.baseViews);
-  return (
-    <li>
-      <button
-        type="button"
-        onClick={onSelect}
-        className={clsx(
-          "flex w-full flex-col gap-1 rounded-xl border bg-white px-4 py-3 text-left transition",
-          active ? "border-jade ring-1 ring-jade/40" : "border-line hover:border-jade/40"
-        )}
-      >
-        <strong className="text-base">{lang === "zh" ? city.zh : city.name}</strong>
-        <span className="text-xs text-muted">{lang === "zh" ? city.name : city.zh}</span>
-        <span className="text-sm">{lang === "zh" ? city.museumZh || city.museum : city.museum}</span>
-        <span className="mt-1 text-xs text-muted">
-          {formatNumber(total)} {viewsLabel}
-        </span>
-      </button>
-    </li>
-  );
-}
diff --git a/v2/src/components/atlas/CityProfile.tsx b/v2/src/components/atlas/CityProfile.tsx
deleted file mode 100644
index bc5fa519c71ef37ed4fa6b6dc973338eeb9674b1..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityProfile.tsx
+++ /dev/null
@@ -1,87 +0,0 @@
-import { accessLabels, statusLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityProfile() {
-  const { city, selectCity } = useAtlas();
-  const { t, lang } = useLang();
-  const views = useCityViewCount(city?.id ?? "", city?.baseViews ?? 0);
-
-  if (!city) {
-    return (
-      <aside className="flex flex-col items-start gap-2 rounded-xl border border-dashed border-line bg-white p-6">
-        <h3 className="text-lg font-bold">{t("selectCity")}</h3>
-        <p className="text-sm text-muted">{t("selectCityBody")}</p>
-      </aside>
-    );
-  }
-
-  const sites = lang === "zh" ? city.sitesZh : city.sites;
-
-  return (
-    <article className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header className="flex items-start justify-between gap-4">
-        <div>
-          <span className="text-xs font-bold uppercase tracking-widest text-muted">{city.province}</span>
-          <h3 className="text-2xl font-bold leading-tight">{lang === "zh" ? city.zh : city.name}</h3>
-          <p className="text-sm text-muted">{lang === "zh" ? city.name : city.zh}</p>
-        </div>
-        <span className="rounded-full bg-paper px-3 py-1 text-xs font-bold text-muted">
-          {statusLabels[lang][city.status] ?? city.status}
-        </span>
-      </header>
-
-      <section className="rounded-lg bg-paper p-4">
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("startHere")}</span>
-        <h4 className="text-lg font-bold">{lang === "zh" ? city.museumZh || city.museum : city.museum}</h4>
-        <p className="mt-1 text-sm leading-relaxed">
-          {lang === "zh" ? city.museumRoleZh || city.museumRole : city.museumRole}
-        </p>
-      </section>
-
-      <dl className="grid grid-cols-2 gap-3 text-sm">
-        <Stat label={t("pageViews")} value={formatNumber(views)} />
-        <Stat label={t("visitorNotes")} value={formatNumber(city.notes)} />
-        <Stat label={t("lastVerified")} value={city.verified} />
-        <Stat label={t("englishAccess")} value={accessLabels[lang][city.access] ?? city.access} />
-      </dl>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("historicalIdentity")}</h4>
-        <p className="text-sm leading-relaxed">{lang === "zh" ? city.historyZh || city.history : city.history}</p>
-      </section>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("thenExplore")}</h4>
-        <ul className="grid list-inside list-disc gap-1 text-sm">
-          {sites.map((site) => (
-            <li key={site}>{site}</li>
-          ))}
-        </ul>
-      </section>
-
-      <footer className="border-t border-line pt-3 text-xs text-muted">
-        <strong className="block text-ink">{t("sourcePolicy")}</strong>
-        <p className="mt-1">{t("sourcePolicyBody")}</p>
-        <button
-          type="button"
-          onClick={() => selectCity(null)}
-          className="mt-3 text-xs font-bold uppercase tracking-wider text-jade hover:underline"
-        >
-          {t("close")}
-        </button>
-      </footer>
-    </article>
-  );
-}
-
-function Stat({ label, value }: { label: string; value: string }) {
-  return (
-    <div className="rounded-lg bg-paper p-3">
-      <dt className="text-xs font-bold uppercase tracking-widest text-muted">{label}</dt>
-      <dd className="mt-1 text-base font-bold">{value}</dd>
-    </div>
-  );
-}
diff --git a/v2/src/components/atlas/ProvinceRail.tsx b/v2/src/components/atlas/ProvinceRail.tsx
deleted file mode 100644
index 02841ff50e8c93a001d7f1f21371eb7b98e7ce11..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/ProvinceRail.tsx
+++ /dev/null
@@ -1,43 +0,0 @@
-import clsx from "clsx";
-import { atlasData } from "../../data/atlas";
-import { typeLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-
-export default function ProvinceRail() {
-  const { lang, t } = useLang();
-  const { selectedProvinceId, selectProvince } = useAtlas();
-
-  return (
-    <aside aria-label={t("provinceLevelRegions")} className="flex flex-col gap-2">
-      <header className="flex items-baseline justify-between px-1">
-        <strong className="text-xs font-bold uppercase tracking-widest text-muted">{t("provinceLevelRegions")}</strong>
-        <span className="text-xs text-muted">{atlasData.length}</span>
-      </header>
-      <div className="flex max-h-[420px] flex-col gap-1 overflow-y-auto pr-1">
-        {atlasData.map((p) => {
-          const active = p.id === selectedProvinceId;
-          return (
-            <button
-              key={p.id}
-              type="button"
-              onClick={() => selectProvince(p.id)}
-              className={clsx(
-                "flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-left transition",
-                active ? "border-jade/40 bg-jade-soft" : "hover:bg-paper"
-              )}
-            >
-              <span className="leading-tight">
-                <strong className="block text-sm font-bold">{lang === "zh" ? p.zh : p.name}</strong>
-                <small className="block text-xs text-muted">
-                  {lang === "zh" ? `${p.name} · ${typeLabels.zh[p.type]}` : `${p.zh} · ${typeLabels.en[p.type]}`}
-                </small>
-              </span>
-              <span className="text-xs text-muted">{p.cities.length}</span>
-            </button>
-          );
-        })}
-      </div>
-    </aside>
-  );
-}
diff --git a/v2/src/components/city/CityHero.tsx b/v2/src/components/city/CityHero.tsx
deleted file mode 100644
index 7b6fef59b459c9e63845b4c806a2c9601b2cbb12..0000000000000000000000000000000000000000
--- a/v2/src/components/city/CityHero.tsx
+++ /dev/null
@@ -1,86 +0,0 @@
-import clsx from "clsx";
-import { attractionsByCity, type Attraction } from "../../data/city-attractions";
-import type { CityId } from "../../data/transport";
-import { useLang } from "../../store/language";
-
-type Props = { cityId: CityId };
-
-export default function CityHero({ cityId }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-  const attractions = attractionsByCity(cityId);
-  if (attractions.length === 0) return null;
-
-  return (
-    <section className="flex flex-col gap-3">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "本市标志景点" : "Signature attractions"}
-        </span>
-        <h2 className="text-2xl font-bold">
-          {isZh ? "去之前先认认这几个地方" : "Know these places before you go"}
-        </h2>
-      </header>
-      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
-        {attractions.map((a) => (
-          <AttractionCard key={a.id} attraction={a} isZh={isZh} />
-        ))}
-      </ul>
-    </section>
-  );
-}
-
-function AttractionCard({ attraction: a, isZh }: { attraction: Attraction; isZh: boolean }) {
-  return (
-    <li className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
-      <a
-        href={a.officialUrl}
-        target="_blank"
-        rel="noreferrer"
-        className="group flex flex-col gap-0"
-      >
-        <div className="aspect-[16/10] w-full overflow-hidden bg-paper">
-          <img
-            src={a.imageUrl}
-            alt={isZh ? a.nameZh : a.nameEn}
-            loading="lazy"
-            referrerPolicy="no-referrer"
-            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
-            onError={(e) => {
-              (e.currentTarget as HTMLImageElement).style.display = "none";
-            }}
-          />
-        </div>
-        <div className="flex flex-col gap-2 p-4">
-          <div className="flex items-center justify-between gap-2">
-            <span
-              className={clsx(
-                "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
-                a.tier === "must-visit"
-                  ? "bg-jade-soft text-jade"
-                  : "bg-amber-100 text-amber-900"
-              )}
-            >
-              {a.tier === "must-visit"
-                ? isZh ? "必去" : "Must-visit"
-                : isZh ? "值得去" : "Worth-it"}
-            </span>
-            <span className="text-[10px] text-muted">
-              {isZh ? a.districtZh : a.districtEn}
-            </span>
-          </div>
-          <strong className="text-sm leading-tight">
-            {isZh ? a.nameZh : a.nameEn}
-          </strong>
-          <p className="line-clamp-3 text-xs leading-relaxed text-ink/80">
-            {isZh ? a.whyZh : a.whyEn}
-          </p>
-          <span className="text-[10px] text-muted/70">
-            {isZh ? "图片：" : "Photo: "}
-            {a.imageCredit}
-          </span>
-        </div>
-      </a>
-    </li>
-  );
-}
diff --git a/v2/src/components/common/PageSources.tsx b/v2/src/components/common/PageSources.tsx
deleted file mode 100644
index 5510ffa6bd49c7a6c349e5e259054a0b05c499d6..0000000000000000000000000000000000000000
--- a/v2/src/components/common/PageSources.tsx
+++ /dev/null
@@ -1,53 +0,0 @@
-import { getSource, type SourceCitation } from "../../data/sources";
-import { useLang } from "../../store/language";
-
-type Props = { ids: string[] };
-
-export default function PageSources({ ids }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-
-  const sources = Array.from(new Set(ids))
-    .map((id) => getSource(id))
-    .filter((s): s is SourceCitation => Boolean(s));
-
-  if (sources.length === 0) return null;
-
-  return (
-    <footer className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "信息来源" : "Sources"}
-        </span>
-        <p className="text-xs text-muted">
-          {isZh
-            ? "本页所有信息均引自下列官方公开来源；点击查看原文。"
-            : "Every fact on this page is cited to one of the official sources below. Click to read the originals."}
-        </p>
-      </header>
-      <ol className="grid gap-1.5 text-xs leading-relaxed">
-        {sources.map((s, i) => (
-          <li key={s.id} className="flex gap-2">
-            <span className="shrink-0 tabular-nums text-muted">[{i + 1}]</span>
-            <a
-              href={s.url}
-              target="_blank"
-              rel="noreferrer"
-              className="flex-1 text-ink hover:text-jade hover:underline"
-            >
-              {s.community && (
-                <span className="mr-1.5 inline-block rounded-sm bg-amber-100 px-1 py-px text-[9px] font-bold uppercase tracking-wider text-amber-800 align-middle">
-                  blog
-                </span>
-              )}
-              <span className="font-bold">{s.publisher}</span>
-              <span className="text-muted"> · {s.pageTitleEn}</span>
-              {s.publishedDate && <span className="text-muted"> · {s.publishedDate}</span>}
-              <span className="ml-1 text-muted/60">— {s.domain}</span>
-            </a>
-          </li>
-        ))}
-      </ol>
-    </footer>
-  );
-}
diff --git a/v2/src/components/map/EarthIntro.tsx b/v2/src/components/map/EarthIntro.tsx
deleted file mode 100644
index e92f647816b6e07c354c0799b90a762dd5c0126b..0000000000000000000000000000000000000000
--- a/v2/src/components/map/EarthIntro.tsx
+++ /dev/null
@@ -1,149 +0,0 @@
-import { useEffect, useRef } from "react";
-import * as THREE from "three";
-
-type Props = { onDone: () => void };
-
-const SPIN_MS = 4000;
-const HOLD_MS = 1500;
-const ZOOM_MS = 1500;
-const TOTAL_MS = SPIN_MS + HOLD_MS + ZOOM_MS;
-
-// Verified against the actual asset (v2/public/assets/earth-bluemarble.jpg, 2:1 equirectangular,
-// prime meridian at horizontal centre, Africa centred). Three.js SphereGeometry default UV:
-// vertex.x = -r·cos(u·2π)·sin(v·π); vertex.y = r·cos(v·π); vertex.z = r·sin(u·2π)·sin(v·π).
-// At rotation = 0, +Z (camera-facing) point sits at u = 0.25, v = 0.5 → lon -90°, lat 0° (Americas).
-// To bring China centre (lon 105°E, lat 35°N → u = 0.79167, v = 0.30556) to the camera:
-//   1. Y-rotation: α_y = π/2 - u·2π = π/2 - 4.974 = -3.403 rad → puts China centre at world (0, +0.574, +0.819)
-//   2. X-rotation: α_x = arctan(0.574 / 0.819) = 0.611 rad ≈ 35° → tilts that point onto +Z exactly
-const CHINA_LON_DEG = 105;
-const CHINA_LAT_DEG = 35;
-const CHINA_U = (CHINA_LON_DEG + 180) / 360;
-const CHINA_V = (90 - CHINA_LAT_DEG) / 180;
-const CHINA_THETA_PHI = CHINA_U * 2 * Math.PI;
-const CHINA_THETA_LAT = CHINA_V * Math.PI;
-const TARGET_Y = Math.PI / 2 - CHINA_THETA_PHI; // -3.403 rad
-const TARGET_X = Math.atan2(Math.cos(CHINA_THETA_LAT), Math.sin(CHINA_THETA_LAT)); // 0.611 rad
-
-export default function EarthIntro({ onDone }: Props) {
-  const hostRef = useRef<HTMLDivElement | null>(null);
-  const doneRef = useRef(onDone);
-
-  useEffect(() => {
-    doneRef.current = onDone;
-  }, [onDone]);
-
-  useEffect(() => {
-    const host = hostRef.current;
-    if (!host) return;
-
-    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
-    renderer.setClearColor(0x000000, 0);
-    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
-    host.appendChild(renderer.domElement);
-    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });
-
-    const scene = new THREE.Scene();
-    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
-    camera.position.set(0, 0, 3.0);
-
-    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
-    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
-    sun.position.set(-2.5, 1.6, 4);
-    scene.add(sun);
-
-    const loader = new THREE.TextureLoader();
-    const earthTex = loader.load("/assets/earth-bluemarble.jpg");
-    earthTex.colorSpace = THREE.SRGBColorSpace;
-
-    const earth = new THREE.Mesh(
-      new THREE.SphereGeometry(1, 96, 64),
-      new THREE.MeshStandardMaterial({ map: earthTex, roughness: 0.92, metalness: 0 })
-    );
-    // 1.5 revolutions before landing on China (eastward visual direction = negative Y rotation)
-    const endY = TARGET_Y;
-    const startY = endY + Math.PI * 3;
-    earth.rotation.y = startY;
-    scene.add(earth);
-
-    const atmosphere = new THREE.Mesh(
-      new THREE.SphereGeometry(1.05, 64, 32),
-      new THREE.ShaderMaterial({
-        transparent: true,
-        side: THREE.BackSide,
-        blending: THREE.AdditiveBlending,
-        depthWrite: false,
-        vertexShader: `
-          varying vec3 vNormal;
-          void main() {
-            vNormal = normalize(normalMatrix * normal);
-            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
-          }`,
-        fragmentShader: `
-          varying vec3 vNormal;
-          void main() {
-            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
-            gl_FragColor = vec4(0.40, 0.68, 1.0, 1.0) * intensity;
-          }`
-      })
-    );
-    scene.add(atmosphere);
-
-    const resize = () => {
-      const rect = host.getBoundingClientRect();
-      const w = Math.max(1, Math.floor(rect.width));
-      const h = Math.max(1, Math.floor(rect.height));
-      renderer.setSize(w, h, false);
-      camera.aspect = w / h;
-      camera.updateProjectionMatrix();
-    };
-    const ro = new ResizeObserver(resize);
-    ro.observe(host);
-    resize();
-
-    let start: number | null = null;
-    let raf = 0;
-
-    const animate = (t: number) => {
-      if (start === null) start = t;
-      const elapsed = t - start;
-
-      const spinT = Math.min(elapsed, SPIN_MS) / SPIN_MS;
-      const spinEased = 1 - Math.pow(1 - spinT, 3); // ease-out cubic
-      const zoomRaw = Math.max(0, elapsed - SPIN_MS - HOLD_MS) / ZOOM_MS;
-      const zoomT = Math.min(1, zoomRaw);
-      const zoomEased = 1 - Math.pow(1 - zoomT, 3);
-
-      const yRot = startY + (endY - startY) * spinEased;
-      earth.rotation.y = yRot;
-      atmosphere.rotation.y = yRot;
-      earth.rotation.x = TARGET_X * spinEased;
-      atmosphere.rotation.x = TARGET_X * spinEased;
-
-      camera.position.z = 3.0 - zoomEased * 1.55;
-      host.style.opacity = String(1 - zoomEased);
-
-      renderer.render(scene, camera);
-
-      if (elapsed < TOTAL_MS) {
-        raf = requestAnimationFrame(animate);
-      } else {
-        doneRef.current();
-      }
-    };
-    raf = requestAnimationFrame(animate);
-
-    return () => {
-      cancelAnimationFrame(raf);
-      ro.disconnect();
-      earthTex.dispose();
-      earth.geometry.dispose();
-      (earth.material as THREE.Material).dispose();
-      atmosphere.geometry.dispose();
-      (atmosphere.material as THREE.Material).dispose();
-      renderer.dispose();
-      host.innerHTML = "";
-    };
-  }, []);
-
-  return <div ref={hostRef} aria-hidden className="pointer-events-none absolute inset-0 z-40" />;
-}
diff --git a/v2/src/components/search/PlaceSearch.tsx b/v2/src/components/search/PlaceSearch.tsx
deleted file mode 100644
index 4f83ec26fe5411e6d3650be3ad2b8fe0f3dba54c..0000000000000000000000000000000000000000
--- a/v2/src/components/search/PlaceSearch.tsx
+++ /dev/null
@@ -1,55 +0,0 @@
-import { useId, useMemo, useState } from "react";
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import { findBestMatch, getAllRecords } from "../../lib/search";
-import { placeTypeLabels } from "../../data/i18n";
-
-export default function PlaceSearch() {
-  const { t, lang } = useLang();
-  const { selectPlace } = useAtlas();
-  const [value, setValue] = useState("");
-  const [hint, setHint] = useState<string | null>(null);
-  const datalistId = useId();
-
-  const suggestions = useMemo(() => getAllRecords().slice(0, 120), []);
-
-  const submit = (event: React.FormEvent) => {
-    event.preventDefault();
-    const record = findBestMatch(value);
-    if (!record) {
-      setHint(t("searchNoMatch"));
-      return;
-    }
-    selectPlace(record.provinceId, record.cityId ?? null);
-    setHint(`${t("searchJumped")} ${lang === "zh" ? record.zh : record.en}`);
-    document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
-  };
-
-  return (
-    <form onSubmit={submit} className="flex flex-1 items-center gap-2">
-      <input
-        type="search"
-        list={datalistId}
-        autoComplete="off"
-        value={value}
-        onChange={(e) => setValue(e.target.value)}
-        placeholder={t("searchPlaceholder")}
-        className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2 text-sm focus:border-ink focus:outline-none"
-      />
-      <button
-        type="submit"
-        className="rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
-      >
-        {t("searchButton")}
-      </button>
-      <datalist id={datalistId}>
-        {suggestions.map((record, i) => {
-          const primary = lang === "zh" ? record.zh : record.en;
-          const typeLabel = placeTypeLabels[lang][record.type] ?? record.type;
-          return <option key={`${record.provinceId}-${record.cityId ?? ""}-${i}`} value={primary} label={`${primary} · ${typeLabel}`} />;
-        })}
-      </datalist>
-      {hint && <span className="ml-2 hidden text-xs text-muted lg:inline">{hint}</span>}
-    </form>
-  );
-}
diff --git a/v2/src/components/sections/HistoryVideo.tsx b/v2/src/components/sections/HistoryVideo.tsx
deleted file mode 100644
index fabd834e41f64ddccb40198d92c4759285dcb51b..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/HistoryVideo.tsx
+++ /dev/null
@@ -1,35 +0,0 @@
-import { useLang } from "../../store/language";
-
-export default function HistoryVideo() {
-  const { t } = useLang();
-  return (
-    <section id="video" className="grid items-start gap-6 md:grid-cols-[1fr_2fr]">
-      <div className="space-y-3">
-        <h2 className="text-2xl font-bold">{t("historyVideoTitle")}</h2>
-        <p className="text-sm leading-relaxed text-muted">{t("historyVideoBody")}</p>
-      </div>
-      <figure className="overflow-hidden rounded-xl border border-line bg-black">
-        <div className="aspect-video">
-          <iframe
-            className="h-full w-full"
-            src="https://www.youtube.com/embed/0DzZgBd4W1Q"
-            title="Discover a China Beyond Your Imagination"
-            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
-            allowFullScreen
-          />
-        </div>
-        <figcaption className="flex items-center justify-between gap-3 bg-white px-4 py-3 text-xs">
-          <strong>{t("historyVideoMeta")}</strong>
-          <a
-            className="text-muted hover:text-jade"
-            href="https://en.chinaculture.org/a/202206/07/WS629edf41a310fd2b29e61286.html"
-            target="_blank"
-            rel="noreferrer"
-          >
-            {t("historyVideoSource")}
-          </a>
-        </figcaption>
-      </figure>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/MuseumFlow.tsx b/v2/src/components/sections/MuseumFlow.tsx
deleted file mode 100644
index 7bcf8805fbbb34b019b679e0e3ca5ce056b94eb9..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/MuseumFlow.tsx
+++ /dev/null
@@ -1,29 +0,0 @@
-import { useLang } from "../../store/language";
-
-const STEPS = [
-  { titleKey: "flowOneTitle", bodyKey: "flowOneBody" },
-  { titleKey: "flowTwoTitle", bodyKey: "flowTwoBody" },
-  { titleKey: "flowThreeTitle", bodyKey: "flowThreeBody" },
-  { titleKey: "flowFourTitle", bodyKey: "flowFourBody" }
-];
-
-export default function MuseumFlow() {
-  const { t } = useLang();
-  return (
-    <section id="museums" className="flex flex-col gap-4">
-      <header>
-        <h2 className="text-2xl font-bold">{t("museumTitle")}</h2>
-        <p className="text-sm text-muted">{t("museumBody")}</p>
-      </header>
-      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
-        {STEPS.map((step, i) => (
-          <li key={step.titleKey} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
-            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
-            <h3 className="text-base font-bold">{t(step.titleKey)}</h3>
-            <p className="text-sm text-muted">{t(step.bodyKey)}</p>
-          </li>
-        ))}
-      </ol>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/SourcesNote.tsx b/v2/src/components/sections/SourcesNote.tsx
deleted file mode 100644
index 8fbbff35733ef16fce104d48e5a8c61e32d25f39..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/SourcesNote.tsx
+++ /dev/null
@@ -1,20 +0,0 @@
-import { useLang } from "../../store/language";
-
-const RULES = ["ruleOne", "ruleTwo", "ruleThree", "ruleFour"];
-
-export default function SourcesNote() {
-  const { t } = useLang();
-  return (
-    <section id="sources" className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header>
-        <h2 className="text-2xl font-bold">{t("sourcesTitle")}</h2>
-        <p className="text-sm text-muted">{t("sourcesBody")}</p>
-      </header>
-      <ul className="grid list-inside list-disc gap-1 text-sm">
-        {RULES.map((key) => (
-          <li key={key}>{t(key)}</li>
-        ))}
-      </ul>
-    </section>
-  );
-}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short' in c:\Users\h\Documents\New project 2
 succeeded in 419ms:
 M .omc/project-memory.json
 D v2/src/components/atlas/AtlasSection.tsx
 D v2/src/components/atlas/CityList.tsx
 D v2/src/components/atlas/CityProfile.tsx
 D v2/src/components/atlas/ProvinceRail.tsx
 D v2/src/components/city/CityHero.tsx
 D v2/src/components/common/PageSources.tsx
 M v2/src/components/layout/LanguageSwitch.tsx
 D v2/src/components/map/EarthIntro.tsx
 M v2/src/components/pillar/EmergencyBriefing.tsx
 M v2/src/components/pillar/FoodGuide.tsx
 M v2/src/components/pillar/PaymentsChecklist.tsx
 M v2/src/components/pillar/TransportGuide.tsx
 D v2/src/components/search/PlaceSearch.tsx
 D v2/src/components/sections/HistoryVideo.tsx
 D v2/src/components/sections/MuseumFlow.tsx
 D v2/src/components/sections/SourcesNote.tsx
 M v2/src/pages/GuidePage.tsx
 M v2/src/pages/MapPage.tsx
?? .omc/artifacts/ask/codex-v2-workdir-edit-build-citypage-section-id-citypage-tsx-50-53-2026-05-12T02-55-49-934Z.md

diff --git a/v2/src/components/atlas/AtlasSection.tsx b/v2/src/components/atlas/AtlasSection.tsx
deleted file mode 100644
index 7dcfe4b7987081264b006a6a4324f5e074eda166..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/AtlasSection.tsx
+++ /dev/null
@@ -1,33 +0,0 @@
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import ProvinceRail from "./ProvinceRail";
-import CityList from "./CityList";
-import CityProfile from "./CityProfile";
-
-export default function AtlasSection() {
-  const { t } = useLang();
-  const { province } = useAtlas();
-
-  return (
-    <section id="atlas" className="flex flex-col gap-4">
-      <header className="flex flex-wrap items-end justify-between gap-3">
-        <div>
-          <h2 className="text-2xl font-bold">{t("atlasTitle")}</h2>
-          <p className="text-sm text-muted">{t("atlasBody")}</p>
-        </div>
-      </header>
-
-      <div className="grid gap-4 md:grid-cols-[260px_minmax(0,1fr)_360px]">
-        <ProvinceRail />
-        <div className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4">
-          <header className="flex items-baseline justify-between">
-            <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
-            <h3 className="text-lg font-bold">{province ? province.name : "China"}</h3>
-          </header>
-          <CityList cities={province?.cities ?? []} />
-        </div>
-        <CityProfile />
-      </div>
-    </section>
-  );
-}
diff --git a/v2/src/components/atlas/CityList.tsx b/v2/src/components/atlas/CityList.tsx
deleted file mode 100644
index de44fe01f30f6ccb8f3b518cdc5a9435c53c51e2..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityList.tsx
+++ /dev/null
@@ -1,69 +0,0 @@
-import clsx from "clsx";
-import type { CityRecord } from "../../data/atlas";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount, useRecordCityView } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityList({ cities }: { cities: CityRecord[] }) {
-  const { t, lang } = useLang();
-  const { selectedCityId, selectCity } = useAtlas();
-  const recordView = useRecordCityView();
-
-  if (!cities.length) {
-    return (
-      <div className="grid place-items-center rounded-xl border border-dashed border-line p-8 text-sm text-muted">
-        {t("mapHintPending")}
-      </div>
-    );
-  }
-
-  return (
-    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
-      {cities.map((city) => (
-        <CityCard
-          key={city.id}
-          city={city}
-          active={city.id === selectedCityId}
-          onSelect={() => {
-            recordView(city.id);
-            selectCity(city.id);
-          }}
-          viewsLabel={t("views")}
-          lang={lang}
-        />
-      ))}
-    </ul>
-  );
-}
-
-type CardProps = {
-  city: CityRecord;
-  active: boolean;
-  onSelect: () => void;
-  viewsLabel: string;
-  lang: "en" | "zh";
-};
-
-function CityCard({ city, active, onSelect, viewsLabel, lang }: CardProps) {
-  const total = useCityViewCount(city.id, city.baseViews);
-  return (
-    <li>
-      <button
-        type="button"
-        onClick={onSelect}
-        className={clsx(
-          "flex w-full flex-col gap-1 rounded-xl border bg-white px-4 py-3 text-left transition",
-          active ? "border-jade ring-1 ring-jade/40" : "border-line hover:border-jade/40"
-        )}
-      >
-        <strong className="text-base">{lang === "zh" ? city.zh : city.name}</strong>
-        <span className="text-xs text-muted">{lang === "zh" ? city.name : city.zh}</span>
-        <span className="text-sm">{lang === "zh" ? city.museumZh || city.museum : city.museum}</span>
-        <span className="mt-1 text-xs text-muted">
-          {formatNumber(total)} {viewsLabel}
-        </span>
-      </button>
-    </li>
-  );
-}
diff --git a/v2/src/components/atlas/CityProfile.tsx b/v2/src/components/atlas/CityProfile.tsx
deleted file mode 100644
index bc5fa519c71ef37ed4fa6b6dc973338eeb9674b1..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityProfile.tsx
+++ /dev/null
@@ -1,87 +0,0 @@
-import { accessLabels, statusLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityProfile() {
-  const { city, selectCity } = useAtlas();
-  const { t, lang } = useLang();
-  const views = useCityViewCount(city?.id ?? "", city?.baseViews ?? 0);
-
-  if (!city) {
-    return (
-      <aside className="flex flex-col items-start gap-2 rounded-xl border border-dashed border-line bg-white p-6">
-        <h3 className="text-lg font-bold">{t("selectCity")}</h3>
-        <p className="text-sm text-muted">{t("selectCityBody")}</p>
-      </aside>
-    );
-  }
-
-  const sites = lang === "zh" ? city.sitesZh : city.sites;
-
-  return (
-    <article className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header className="flex items-start justify-between gap-4">
-        <div>
-          <span className="text-xs font-bold uppercase tracking-widest text-muted">{city.province}</span>
-          <h3 className="text-2xl font-bold leading-tight">{lang === "zh" ? city.zh : city.name}</h3>
-          <p className="text-sm text-muted">{lang === "zh" ? city.name : city.zh}</p>
-        </div>
-        <span className="rounded-full bg-paper px-3 py-1 text-xs font-bold text-muted">
-          {statusLabels[lang][city.status] ?? city.status}
-        </span>
-      </header>
-
-      <section className="rounded-lg bg-paper p-4">
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("startHere")}</span>
-        <h4 className="text-lg font-bold">{lang === "zh" ? city.museumZh || city.museum : city.museum}</h4>
-        <p className="mt-1 text-sm leading-relaxed">
-          {lang === "zh" ? city.museumRoleZh || city.museumRole : city.museumRole}
-        </p>
-      </section>
-
-      <dl className="grid grid-cols-2 gap-3 text-sm">
-        <Stat label={t("pageViews")} value={formatNumber(views)} />
-        <Stat label={t("visitorNotes")} value={formatNumber(city.notes)} />
-        <Stat label={t("lastVerified")} value={city.verified} />
-        <Stat label={t("englishAccess")} value={accessLabels[lang][city.access] ?? city.access} />
-      </dl>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("historicalIdentity")}</h4>
-        <p className="text-sm leading-relaxed">{lang === "zh" ? city.historyZh || city.history : city.history}</p>
-      </section>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("thenExplore")}</h4>
-        <ul className="grid list-inside list-disc gap-1 text-sm">
-          {sites.map((site) => (
-            <li key={site}>{site}</li>
-          ))}
-        </ul>
-      </section>
-
-      <footer className="border-t border-line pt-3 text-xs text-muted">
-        <strong className="block text-ink">{t("sourcePolicy")}</strong>
-        <p className="mt-1">{t("sourcePolicyBody")}</p>
-        <button
-          type="button"
-          onClick={() => selectCity(null)}
-          className="mt-3 text-xs font-bold uppercase tracking-wider text-jade hover:underline"
-        >
-          {t("close")}
-        </button>
-      </footer>
-    </article>
-  );
-}
-
-function Stat({ label, value }: { label: string; value: string }) {
-  return (
-    <div className="rounded-lg bg-paper p-3">
-      <dt className="text-xs font-bold uppercase tracking-widest text-muted">{label}</dt>
-      <dd className="mt-1 text-base font-bold">{value}</dd>
-    </div>
-  );
-}
diff --git a/v2/src/components/atlas/ProvinceRail.tsx b/v2/src/components/atlas/ProvinceRail.tsx
deleted file mode 100644
index 02841ff50e8c93a001d7f1f21371eb7b98e7ce11..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/ProvinceRail.tsx
+++ /dev/null
@@ -1,43 +0,0 @@
-import clsx from "clsx";
-import { atlasData } from "../../data/atlas";
-import { typeLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-
-export default function ProvinceRail() {
-  const { lang, t } = useLang();
-  const { selectedProvinceId, selectProvince } = useAtlas();
-
-  return (
-    <aside aria-label={t("provinceLevelRegions")} className="flex flex-col gap-2">
-      <header className="flex items-baseline justify-between px-1">
-        <strong className="text-xs font-bold uppercase tracking-widest text-muted">{t("provinceLevelRegions")}</strong>
-        <span className="text-xs text-muted">{atlasData.length}</span>
-      </header>
-      <div className="flex max-h-[420px] flex-col gap-1 overflow-y-auto pr-1">
-        {atlasData.map((p) => {
-          const active = p.id === selectedProvinceId;
-          return (
-            <button
-              key={p.id}
-              type="button"
-              onClick={() => selectProvince(p.id)}
-              className={clsx(
-                "flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-left transition",
-                active ? "border-jade/40 bg-jade-soft" : "hover:bg-paper"
-              )}
-            >
-              <span className="leading-tight">
-                <strong className="block text-sm font-bold">{lang === "zh" ? p.zh : p.name}</strong>
-                <small className="block text-xs text-muted">
-                  {lang === "zh" ? `${p.name} · ${typeLabels.zh[p.type]}` : `${p.zh} · ${typeLabels.en[p.type]}`}
-                </small>
-              </span>
-              <span className="text-xs text-muted">{p.cities.length}</span>
-            </button>
-          );
-        })}
-      </div>
-    </aside>
-  );
-}
diff --git a/v2/src/components/city/CityHero.tsx b/v2/src/components/city/CityHero.tsx
deleted file mode 100644
index 7b6fef59b459c9e63845b4c806a2c9601b2cbb12..0000000000000000000000000000000000000000
--- a/v2/src/components/city/CityHero.tsx
+++ /dev/null
@@ -1,86 +0,0 @@
-import clsx from "clsx";
-import { attractionsByCity, type Attraction } from "../../data/city-attractions";
-import type { CityId } from "../../data/transport";
-import { useLang } from "../../store/language";
-
-type Props = { cityId: CityId };
-
-export default function CityHero({ cityId }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-  const attractions = attractionsByCity(cityId);
-  if (attractions.length === 0) return null;
-
-  return (
-    <section className="flex flex-col gap-3">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "本市标志景点" : "Signature attractions"}
-        </span>
-        <h2 className="text-2xl font-bold">
-          {isZh ? "去之前先认认这几个地方" : "Know these places before you go"}
-        </h2>
-      </header>
-      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
-        {attractions.map((a) => (
-          <AttractionCard key={a.id} attraction={a} isZh={isZh} />
-        ))}
-      </ul>
-    </section>
-  );
-}
-
-function AttractionCard({ attraction: a, isZh }: { attraction: Attraction; isZh: boolean }) {
-  return (
-    <li className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
-      <a
-        href={a.officialUrl}
-        target="_blank"
-        rel="noreferrer"
-        className="group flex flex-col gap-0"
-      >
-        <div className="aspect-[16/10] w-full overflow-hidden bg-paper">
-          <img
-            src={a.imageUrl}
-            alt={isZh ? a.nameZh : a.nameEn}
-            loading="lazy"
-            referrerPolicy="no-referrer"
-            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
-            onError={(e) => {
-              (e.currentTarget as HTMLImageElement).style.display = "none";
-            }}
-          />
-        </div>
-        <div className="flex flex-col gap-2 p-4">
-          <div className="flex items-center justify-between gap-2">
-            <span
-              className={clsx(
-                "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
-                a.tier === "must-visit"
-                  ? "bg-jade-soft text-jade"
-                  : "bg-amber-100 text-amber-900"
-              )}
-            >
-              {a.tier === "must-visit"
-                ? isZh ? "必去" : "Must-visit"
-                : isZh ? "值得去" : "Worth-it"}
-            </span>
-            <span className="text-[10px] text-muted">
-              {isZh ? a.districtZh : a.districtEn}
-            </span>
-          </div>
-          <strong className="text-sm leading-tight">
-            {isZh ? a.nameZh : a.nameEn}
-          </strong>
-          <p className="line-clamp-3 text-xs leading-relaxed text-ink/80">
-            {isZh ? a.whyZh : a.whyEn}
-          </p>
-          <span className="text-[10px] text-muted/70">
-            {isZh ? "图片：" : "Photo: "}
-            {a.imageCredit}
-          </span>
-        </div>
-      </a>
-    </li>
-  );
-}
diff --git a/v2/src/components/common/PageSources.tsx b/v2/src/components/common/PageSources.tsx
deleted file mode 100644
index 5510ffa6bd49c7a6c349e5e259054a0b05c499d6..0000000000000000000000000000000000000000
--- a/v2/src/components/common/PageSources.tsx
+++ /dev/null
@@ -1,53 +0,0 @@
-import { getSource, type SourceCitation } from "../../data/sources";
-import { useLang } from "../../store/language";
-
-type Props = { ids: string[] };
-
-export default function PageSources({ ids }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-
-  const sources = Array.from(new Set(ids))
-    .map((id) => getSource(id))
-    .filter((s): s is SourceCitation => Boolean(s));
-
-  if (sources.length === 0) return null;
-
-  return (
-    <footer className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "信息来源" : "Sources"}
-        </span>
-        <p className="text-xs text-muted">
-          {isZh
-            ? "本页所有信息均引自下列官方公开来源；点击查看原文。"
-            : "Every fact on this page is cited to one of the official sources below. Click to read the originals."}
-        </p>
-      </header>
-      <ol className="grid gap-1.5 text-xs leading-relaxed">
-        {sources.map((s, i) => (
-          <li key={s.id} className="flex gap-2">
-            <span className="shrink-0 tabular-nums text-muted">[{i + 1}]</span>
-            <a
-              href={s.url}
-              target="_blank"
-              rel="noreferrer"
-              className="flex-1 text-ink hover:text-jade hover:underline"
-            >
-              {s.community && (
-                <span className="mr-1.5 inline-block rounded-sm bg-amber-100 px-1 py-px text-[9px] font-bold uppercase tracking-wider text-amber-800 align-middle">
-                  blog
-                </span>
-              )}
-              <span className="font-bold">{s.publisher}</span>
-              <span className="text-muted"> · {s.pageTitleEn}</span>
-              {s.publishedDate && <span className="text-muted"> · {s.publishedDate}</span>}
-              <span className="ml-1 text-muted/60">— {s.domain}</span>
-            </a>
-          </li>
-        ))}
-      </ol>
-    </footer>
-  );
-}
diff --git a/v2/src/components/map/EarthIntro.tsx b/v2/src/components/map/EarthIntro.tsx
deleted file mode 100644
index e92f647816b6e07c354c0799b90a762dd5c0126b..0000000000000000000000000000000000000000
--- a/v2/src/components/map/EarthIntro.tsx
+++ /dev/null
@@ -1,149 +0,0 @@
-import { useEffect, useRef } from "react";
-import * as THREE from "three";
-
-type Props = { onDone: () => void };
-
-const SPIN_MS = 4000;
-const HOLD_MS = 1500;
-const ZOOM_MS = 1500;
-const TOTAL_MS = SPIN_MS + HOLD_MS + ZOOM_MS;
-
-// Verified against the actual asset (v2/public/assets/earth-bluemarble.jpg, 2:1 equirectangular,
-// prime meridian at horizontal centre, Africa centred). Three.js SphereGeometry default UV:
-// vertex.x = -r·cos(u·2π)·sin(v·π); vertex.y = r·cos(v·π); vertex.z = r·sin(u·2π)·sin(v·π).
-// At rotation = 0, +Z (camera-facing) point sits at u = 0.25, v = 0.5 → lon -90°, lat 0° (Americas).
-// To bring China centre (lon 105°E, lat 35°N → u = 0.79167, v = 0.30556) to the camera:
-//   1. Y-rotation: α_y = π/2 - u·2π = π/2 - 4.974 = -3.403 rad → puts China centre at world (0, +0.574, +0.819)
-//   2. X-rotation: α_x = arctan(0.574 / 0.819) = 0.611 rad ≈ 35° → tilts that point onto +Z exactly
-const CHINA_LON_DEG = 105;
-const CHINA_LAT_DEG = 35;
-const CHINA_U = (CHINA_LON_DEG + 180) / 360;
-const CHINA_V = (90 - CHINA_LAT_DEG) / 180;
-const CHINA_THETA_PHI = CHINA_U * 2 * Math.PI;
-const CHINA_THETA_LAT = CHINA_V * Math.PI;
-const TARGET_Y = Math.PI / 2 - CHINA_THETA_PHI; // -3.403 rad
-const TARGET_X = Math.atan2(Math.cos(CHINA_THETA_LAT), Math.sin(CHINA_THETA_LAT)); // 0.611 rad
-
-export default function EarthIntro({ onDone }: Props) {
-  const hostRef = useRef<HTMLDivElement | null>(null);
-  const doneRef = useRef(onDone);
-
-  useEffect(() => {
-    doneRef.current = onDone;
-  }, [onDone]);
-
-  useEffect(() => {
-    const host = hostRef.current;
-    if (!host) return;
-
-    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
-    renderer.setClearColor(0x000000, 0);
-    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
-    host.appendChild(renderer.domElement);
-    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });
-
-    const scene = new THREE.Scene();
-    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
-    camera.position.set(0, 0, 3.0);
-
-    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
-    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
-    sun.position.set(-2.5, 1.6, 4);
-    scene.add(sun);
-
-    const loader = new THREE.TextureLoader();
-    const earthTex = loader.load("/assets/earth-bluemarble.jpg");
-    earthTex.colorSpace = THREE.SRGBColorSpace;
-
-    const earth = new THREE.Mesh(
-      new THREE.SphereGeometry(1, 96, 64),
-      new THREE.MeshStandardMaterial({ map: earthTex, roughness: 0.92, metalness: 0 })
-    );
-    // 1.5 revolutions before landing on China (eastward visual direction = negative Y rotation)
-    const endY = TARGET_Y;
-    const startY = endY + Math.PI * 3;
-    earth.rotation.y = startY;
-    scene.add(earth);
-
-    const atmosphere = new THREE.Mesh(
-      new THREE.SphereGeometry(1.05, 64, 32),
-      new THREE.ShaderMaterial({
-        transparent: true,
-        side: THREE.BackSide,
-        blending: THREE.AdditiveBlending,
-        depthWrite: false,
-        vertexShader: `
-          varying vec3 vNormal;
-          void main() {
-            vNormal = normalize(normalMatrix * normal);
-            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
-          }`,
-        fragmentShader: `
-          varying vec3 vNormal;
-          void main() {
-            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
-            gl_FragColor = vec4(0.40, 0.68, 1.0, 1.0) * intensity;
-          }`
-      })
-    );
-    scene.add(atmosphere);
-
-    const resize = () => {
-      const rect = host.getBoundingClientRect();
-      const w = Math.max(1, Math.floor(rect.width));
-      const h = Math.max(1, Math.floor(rect.height));
-      renderer.setSize(w, h, false);
-      camera.aspect = w / h;
-      camera.updateProjectionMatrix();
-    };
-    const ro = new ResizeObserver(resize);
-    ro.observe(host);
-    resize();
-
-    let start: number | null = null;
-    let raf = 0;
-
-    const animate = (t: number) => {
-      if (start === null) start = t;
-      const elapsed = t - start;
-
-      const spinT = Math.min(elapsed, SPIN_MS) / SPIN_MS;
-      const spinEased = 1 - Math.pow(1 - spinT, 3); // ease-out cubic
-      const zoomRaw = Math.max(0, elapsed - SPIN_MS - HOLD_MS) / ZOOM_MS;
-      const zoomT = Math.min(1, zoomRaw);
-      const zoomEased = 1 - Math.pow(1 - zoomT, 3);
-
-      const yRot = startY + (endY - startY) * spinEased;
-      earth.rotation.y = yRot;
-      atmosphere.rotation.y = yRot;
-      earth.rotation.x = TARGET_X * spinEased;
-      atmosphere.rotation.x = TARGET_X * spinEased;
-
-      camera.position.z = 3.0 - zoomEased * 1.55;
-      host.style.opacity = String(1 - zoomEased);
-
-      renderer.render(scene, camera);
-
-      if (elapsed < TOTAL_MS) {
-        raf = requestAnimationFrame(animate);
-      } else {
-        doneRef.current();
-      }
-    };
-    raf = requestAnimationFrame(animate);
-
-    return () => {
-      cancelAnimationFrame(raf);
-      ro.disconnect();
-      earthTex.dispose();
-      earth.geometry.dispose();
-      (earth.material as THREE.Material).dispose();
-      atmosphere.geometry.dispose();
-      (atmosphere.material as THREE.Material).dispose();
-      renderer.dispose();
-      host.innerHTML = "";
-    };
-  }, []);
-
-  return <div ref={hostRef} aria-hidden className="pointer-events-none absolute inset-0 z-40" />;
-}
diff --git a/v2/src/components/search/PlaceSearch.tsx b/v2/src/components/search/PlaceSearch.tsx
deleted file mode 100644
index 4f83ec26fe5411e6d3650be3ad2b8fe0f3dba54c..0000000000000000000000000000000000000000
--- a/v2/src/components/search/PlaceSearch.tsx
+++ /dev/null
@@ -1,55 +0,0 @@
-import { useId, useMemo, useState } from "react";
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import { findBestMatch, getAllRecords } from "../../lib/search";
-import { placeTypeLabels } from "../../data/i18n";
-
-export default function PlaceSearch() {
-  const { t, lang } = useLang();
-  const { selectPlace } = useAtlas();
-  const [value, setValue] = useState("");
-  const [hint, setHint] = useState<string | null>(null);
-  const datalistId = useId();
-
-  const suggestions = useMemo(() => getAllRecords().slice(0, 120), []);
-
-  const submit = (event: React.FormEvent) => {
-    event.preventDefault();
-    const record = findBestMatch(value);
-    if (!record) {
-      setHint(t("searchNoMatch"));
-      return;
-    }
-    selectPlace(record.provinceId, record.cityId ?? null);
-    setHint(`${t("searchJumped")} ${lang === "zh" ? record.zh : record.en}`);
-    document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
-  };
-
-  return (
-    <form onSubmit={submit} className="flex flex-1 items-center gap-2">
-      <input
-        type="search"
-        list={datalistId}
-        autoComplete="off"
-        value={value}
-        onChange={(e) => setValue(e.target.value)}
-        placeholder={t("searchPlaceholder")}
-        className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2 text-sm focus:border-ink focus:outline-none"
-      />
-      <button
-        type="submit"
-        className="rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
-      >
-        {t("searchButton")}
-      </button>
-      <datalist id={datalistId}>
-        {suggestions.map((record, i) => {
-          const primary = lang === "zh" ? record.zh : record.en;
-          const typeLabel = placeTypeLabels[lang][record.type] ?? record.type;
-          return <option key={`${record.provinceId}-${record.cityId ?? ""}-${i}`} value={primary} label={`${primary} · ${typeLabel}`} />;
-        })}
-      </datalist>
-      {hint && <span className="ml-2 hidden text-xs text-muted lg:inline">{hint}</span>}
-    </form>
-  );
-}
diff --git a/v2/src/components/sections/HistoryVideo.tsx b/v2/src/components/sections/HistoryVideo.tsx
deleted file mode 100644
index fabd834e41f64ddccb40198d92c4759285dcb51b..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/HistoryVideo.tsx
+++ /dev/null
@@ -1,35 +0,0 @@
-import { useLang } from "../../store/language";
-
-export default function HistoryVideo() {
-  const { t } = useLang();
-  return (
-    <section id="video" className="grid items-start gap-6 md:grid-cols-[1fr_2fr]">
-      <div className="space-y-3">
-        <h2 className="text-2xl font-bold">{t("historyVideoTitle")}</h2>
-        <p className="text-sm leading-relaxed text-muted">{t("historyVideoBody")}</p>
-      </div>
-      <figure className="overflow-hidden rounded-xl border border-line bg-black">
-        <div className="aspect-video">
-          <iframe
-            className="h-full w-full"
-            src="https://www.youtube.com/embed/0DzZgBd4W1Q"
-            title="Discover a China Beyond Your Imagination"
-            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
-            allowFullScreen
-          />
-        </div>
-        <figcaption className="flex items-center justify-between gap-3 bg-white px-4 py-3 text-xs">
-          <strong>{t("historyVideoMeta")}</strong>
-          <a
-            className="text-muted hover:text-jade"
-            href="https://en.chinaculture.org/a/202206/07/WS629edf41a310fd2b29e61286.html"
-            target="_blank"
-            rel="noreferrer"
-          >
-            {t("historyVideoSource")}
-          </a>
-        </figcaption>
-      </figure>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/MuseumFlow.tsx b/v2/src/components/sections/MuseumFlow.tsx
deleted file mode 100644
index 7bcf8805fbbb34b019b679e0e3ca5ce056b94eb9..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/MuseumFlow.tsx
+++ /dev/null
@@ -1,29 +0,0 @@
-import { useLang } from "../../store/language";
-
-const STEPS = [
-  { titleKey: "flowOneTitle", bodyKey: "flowOneBody" },
-  { titleKey: "flowTwoTitle", bodyKey: "flowTwoBody" },
-  { titleKey: "flowThreeTitle", bodyKey: "flowThreeBody" },
-  { titleKey: "flowFourTitle", bodyKey: "flowFourBody" }
-];
-
-export default function MuseumFlow() {
-  const { t } = useLang();
-  return (
-    <section id="museums" className="flex flex-col gap-4">
-      <header>
-        <h2 className="text-2xl font-bold">{t("museumTitle")}</h2>
-        <p className="text-sm text-muted">{t("museumBody")}</p>
-      </header>
-      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
-        {STEPS.map((step, i) => (
-          <li key={step.titleKey} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
-            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
-            <h3 className="text-base font-bold">{t(step.titleKey)}</h3>
-            <p className="text-sm text-muted">{t(step.bodyKey)}</p>
-          </li>
-        ))}
-      </ol>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/SourcesNote.tsx b/v2/src/components/sections/SourcesNote.tsx
deleted file mode 100644
index 8fbbff35733ef16fce104d48e5a8c61e32d25f39..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/SourcesNote.tsx
+++ /dev/null
@@ -1,20 +0,0 @@
-import { useLang } from "../../store/language";
-
-const RULES = ["ruleOne", "ruleTwo", "ruleThree", "ruleFour"];
-
-export default function SourcesNote() {
-  const { t } = useLang();
-  return (
-    <section id="sources" className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header>
-        <h2 className="text-2xl font-bold">{t("sourcesTitle")}</h2>
-        <p className="text-sm text-muted">{t("sourcesBody")}</p>
-      </header>
-      <ul className="grid list-inside list-disc gap-1 text-sm">
-        {RULES.map((key) => (
-          <li key={key}>{t(key)}</li>
-        ))}
-      </ul>
-    </section>
-  );
-}

codex
删：AtlasSection、ProvinceRail、CityList、CityProfile、PlaceSearch、CityHero、PageSources、EarthIntro、MuseumFlow、HistoryVideo、sections/SourcesNote。  
留：common/SourcesNote，CityPage/GuidePage 仍引用。  
验证：`npx tsc --noEmit`、`npm run build` 均 0 error；build 仅有 chunk size 警告。
diff --git a/v2/src/components/atlas/AtlasSection.tsx b/v2/src/components/atlas/AtlasSection.tsx
deleted file mode 100644
index 7dcfe4b7987081264b006a6a4324f5e074eda166..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/AtlasSection.tsx
+++ /dev/null
@@ -1,33 +0,0 @@
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import ProvinceRail from "./ProvinceRail";
-import CityList from "./CityList";
-import CityProfile from "./CityProfile";
-
-export default function AtlasSection() {
-  const { t } = useLang();
-  const { province } = useAtlas();
-
-  return (
-    <section id="atlas" className="flex flex-col gap-4">
-      <header className="flex flex-wrap items-end justify-between gap-3">
-        <div>
-          <h2 className="text-2xl font-bold">{t("atlasTitle")}</h2>
-          <p className="text-sm text-muted">{t("atlasBody")}</p>
-        </div>
-      </header>
-
-      <div className="grid gap-4 md:grid-cols-[260px_minmax(0,1fr)_360px]">
-        <ProvinceRail />
-        <div className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4">
-          <header className="flex items-baseline justify-between">
-            <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
-            <h3 className="text-lg font-bold">{province ? province.name : "China"}</h3>
-          </header>
-          <CityList cities={province?.cities ?? []} />
-        </div>
-        <CityProfile />
-      </div>
-    </section>
-  );
-}
diff --git a/v2/src/components/atlas/CityList.tsx b/v2/src/components/atlas/CityList.tsx
deleted file mode 100644
index de44fe01f30f6ccb8f3b518cdc5a9435c53c51e2..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityList.tsx
+++ /dev/null
@@ -1,69 +0,0 @@
-import clsx from "clsx";
-import type { CityRecord } from "../../data/atlas";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount, useRecordCityView } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityList({ cities }: { cities: CityRecord[] }) {
-  const { t, lang } = useLang();
-  const { selectedCityId, selectCity } = useAtlas();
-  const recordView = useRecordCityView();
-
-  if (!cities.length) {
-    return (
-      <div className="grid place-items-center rounded-xl border border-dashed border-line p-8 text-sm text-muted">
-        {t("mapHintPending")}
-      </div>
-    );
-  }
-
-  return (
-    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
-      {cities.map((city) => (
-        <CityCard
-          key={city.id}
-          city={city}
-          active={city.id === selectedCityId}
-          onSelect={() => {
-            recordView(city.id);
-            selectCity(city.id);
-          }}
-          viewsLabel={t("views")}
-          lang={lang}
-        />
-      ))}
-    </ul>
-  );
-}
-
-type CardProps = {
-  city: CityRecord;
-  active: boolean;
-  onSelect: () => void;
-  viewsLabel: string;
-  lang: "en" | "zh";
-};
-
-function CityCard({ city, active, onSelect, viewsLabel, lang }: CardProps) {
-  const total = useCityViewCount(city.id, city.baseViews);
-  return (
-    <li>
-      <button
-        type="button"
-        onClick={onSelect}
-        className={clsx(
-          "flex w-full flex-col gap-1 rounded-xl border bg-white px-4 py-3 text-left transition",
-          active ? "border-jade ring-1 ring-jade/40" : "border-line hover:border-jade/40"
-        )}
-      >
-        <strong className="text-base">{lang === "zh" ? city.zh : city.name}</strong>
-        <span className="text-xs text-muted">{lang === "zh" ? city.name : city.zh}</span>
-        <span className="text-sm">{lang === "zh" ? city.museumZh || city.museum : city.museum}</span>
-        <span className="mt-1 text-xs text-muted">
-          {formatNumber(total)} {viewsLabel}
-        </span>
-      </button>
-    </li>
-  );
-}
diff --git a/v2/src/components/atlas/CityProfile.tsx b/v2/src/components/atlas/CityProfile.tsx
deleted file mode 100644
index bc5fa519c71ef37ed4fa6b6dc973338eeb9674b1..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/CityProfile.tsx
+++ /dev/null
@@ -1,87 +0,0 @@
-import { accessLabels, statusLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-import { useCityViewCount } from "../../hooks/useCityViews";
-import { formatNumber } from "../../lib/format";
-
-export default function CityProfile() {
-  const { city, selectCity } = useAtlas();
-  const { t, lang } = useLang();
-  const views = useCityViewCount(city?.id ?? "", city?.baseViews ?? 0);
-
-  if (!city) {
-    return (
-      <aside className="flex flex-col items-start gap-2 rounded-xl border border-dashed border-line bg-white p-6">
-        <h3 className="text-lg font-bold">{t("selectCity")}</h3>
-        <p className="text-sm text-muted">{t("selectCityBody")}</p>
-      </aside>
-    );
-  }
-
-  const sites = lang === "zh" ? city.sitesZh : city.sites;
-
-  return (
-    <article className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header className="flex items-start justify-between gap-4">
-        <div>
-          <span className="text-xs font-bold uppercase tracking-widest text-muted">{city.province}</span>
-          <h3 className="text-2xl font-bold leading-tight">{lang === "zh" ? city.zh : city.name}</h3>
-          <p className="text-sm text-muted">{lang === "zh" ? city.name : city.zh}</p>
-        </div>
-        <span className="rounded-full bg-paper px-3 py-1 text-xs font-bold text-muted">
-          {statusLabels[lang][city.status] ?? city.status}
-        </span>
-      </header>
-
-      <section className="rounded-lg bg-paper p-4">
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("startHere")}</span>
-        <h4 className="text-lg font-bold">{lang === "zh" ? city.museumZh || city.museum : city.museum}</h4>
-        <p className="mt-1 text-sm leading-relaxed">
-          {lang === "zh" ? city.museumRoleZh || city.museumRole : city.museumRole}
-        </p>
-      </section>
-
-      <dl className="grid grid-cols-2 gap-3 text-sm">
-        <Stat label={t("pageViews")} value={formatNumber(views)} />
-        <Stat label={t("visitorNotes")} value={formatNumber(city.notes)} />
-        <Stat label={t("lastVerified")} value={city.verified} />
-        <Stat label={t("englishAccess")} value={accessLabels[lang][city.access] ?? city.access} />
-      </dl>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("historicalIdentity")}</h4>
-        <p className="text-sm leading-relaxed">{lang === "zh" ? city.historyZh || city.history : city.history}</p>
-      </section>
-
-      <section className="flex flex-col gap-1">
-        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("thenExplore")}</h4>
-        <ul className="grid list-inside list-disc gap-1 text-sm">
-          {sites.map((site) => (
-            <li key={site}>{site}</li>
-          ))}
-        </ul>
-      </section>
-
-      <footer className="border-t border-line pt-3 text-xs text-muted">
-        <strong className="block text-ink">{t("sourcePolicy")}</strong>
-        <p className="mt-1">{t("sourcePolicyBody")}</p>
-        <button
-          type="button"
-          onClick={() => selectCity(null)}
-          className="mt-3 text-xs font-bold uppercase tracking-wider text-jade hover:underline"
-        >
-          {t("close")}
-        </button>
-      </footer>
-    </article>
-  );
-}
-
-function Stat({ label, value }: { label: string; value: string }) {
-  return (
-    <div className="rounded-lg bg-paper p-3">
-      <dt className="text-xs font-bold uppercase tracking-widest text-muted">{label}</dt>
-      <dd className="mt-1 text-base font-bold">{value}</dd>
-    </div>
-  );
-}
diff --git a/v2/src/components/atlas/ProvinceRail.tsx b/v2/src/components/atlas/ProvinceRail.tsx
deleted file mode 100644
index 02841ff50e8c93a001d7f1f21371eb7b98e7ce11..0000000000000000000000000000000000000000
--- a/v2/src/components/atlas/ProvinceRail.tsx
+++ /dev/null
@@ -1,43 +0,0 @@
-import clsx from "clsx";
-import { atlasData } from "../../data/atlas";
-import { typeLabels } from "../../data/i18n";
-import { useAtlas } from "../../store/atlas";
-import { useLang } from "../../store/language";
-
-export default function ProvinceRail() {
-  const { lang, t } = useLang();
-  const { selectedProvinceId, selectProvince } = useAtlas();
-
-  return (
-    <aside aria-label={t("provinceLevelRegions")} className="flex flex-col gap-2">
-      <header className="flex items-baseline justify-between px-1">
-        <strong className="text-xs font-bold uppercase tracking-widest text-muted">{t("provinceLevelRegions")}</strong>
-        <span className="text-xs text-muted">{atlasData.length}</span>
-      </header>
-      <div className="flex max-h-[420px] flex-col gap-1 overflow-y-auto pr-1">
-        {atlasData.map((p) => {
-          const active = p.id === selectedProvinceId;
-          return (
-            <button
-              key={p.id}
-              type="button"
-              onClick={() => selectProvince(p.id)}
-              className={clsx(
-                "flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-left transition",
-                active ? "border-jade/40 bg-jade-soft" : "hover:bg-paper"
-              )}
-            >
-              <span className="leading-tight">
-                <strong className="block text-sm font-bold">{lang === "zh" ? p.zh : p.name}</strong>
-                <small className="block text-xs text-muted">
-                  {lang === "zh" ? `${p.name} · ${typeLabels.zh[p.type]}` : `${p.zh} · ${typeLabels.en[p.type]}`}
-                </small>
-              </span>
-              <span className="text-xs text-muted">{p.cities.length}</span>
-            </button>
-          );
-        })}
-      </div>
-    </aside>
-  );
-}
diff --git a/v2/src/components/city/CityHero.tsx b/v2/src/components/city/CityHero.tsx
deleted file mode 100644
index 7b6fef59b459c9e63845b4c806a2c9601b2cbb12..0000000000000000000000000000000000000000
--- a/v2/src/components/city/CityHero.tsx
+++ /dev/null
@@ -1,86 +0,0 @@
-import clsx from "clsx";
-import { attractionsByCity, type Attraction } from "../../data/city-attractions";
-import type { CityId } from "../../data/transport";
-import { useLang } from "../../store/language";
-
-type Props = { cityId: CityId };
-
-export default function CityHero({ cityId }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-  const attractions = attractionsByCity(cityId);
-  if (attractions.length === 0) return null;
-
-  return (
-    <section className="flex flex-col gap-3">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "本市标志景点" : "Signature attractions"}
-        </span>
-        <h2 className="text-2xl font-bold">
-          {isZh ? "去之前先认认这几个地方" : "Know these places before you go"}
-        </h2>
-      </header>
-      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
-        {attractions.map((a) => (
-          <AttractionCard key={a.id} attraction={a} isZh={isZh} />
-        ))}
-      </ul>
-    </section>
-  );
-}
-
-function AttractionCard({ attraction: a, isZh }: { attraction: Attraction; isZh: boolean }) {
-  return (
-    <li className="flex flex-col overflow-hidden rounded-xl border border-line bg-white">
-      <a
-        href={a.officialUrl}
-        target="_blank"
-        rel="noreferrer"
-        className="group flex flex-col gap-0"
-      >
-        <div className="aspect-[16/10] w-full overflow-hidden bg-paper">
-          <img
-            src={a.imageUrl}
-            alt={isZh ? a.nameZh : a.nameEn}
-            loading="lazy"
-            referrerPolicy="no-referrer"
-            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
-            onError={(e) => {
-              (e.currentTarget as HTMLImageElement).style.display = "none";
-            }}
-          />
-        </div>
-        <div className="flex flex-col gap-2 p-4">
-          <div className="flex items-center justify-between gap-2">
-            <span
-              className={clsx(
-                "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
-                a.tier === "must-visit"
-                  ? "bg-jade-soft text-jade"
-                  : "bg-amber-100 text-amber-900"
-              )}
-            >
-              {a.tier === "must-visit"
-                ? isZh ? "必去" : "Must-visit"
-                : isZh ? "值得去" : "Worth-it"}
-            </span>
-            <span className="text-[10px] text-muted">
-              {isZh ? a.districtZh : a.districtEn}
-            </span>
-          </div>
-          <strong className="text-sm leading-tight">
-            {isZh ? a.nameZh : a.nameEn}
-          </strong>
-          <p className="line-clamp-3 text-xs leading-relaxed text-ink/80">
-            {isZh ? a.whyZh : a.whyEn}
-          </p>
-          <span className="text-[10px] text-muted/70">
-            {isZh ? "图片：" : "Photo: "}
-            {a.imageCredit}
-          </span>
-        </div>
-      </a>
-    </li>
-  );
-}
diff --git a/v2/src/components/common/PageSources.tsx b/v2/src/components/common/PageSources.tsx
deleted file mode 100644
index 5510ffa6bd49c7a6c349e5e259054a0b05c499d6..0000000000000000000000000000000000000000
--- a/v2/src/components/common/PageSources.tsx
+++ /dev/null
@@ -1,53 +0,0 @@
-import { getSource, type SourceCitation } from "../../data/sources";
-import { useLang } from "../../store/language";
-
-type Props = { ids: string[] };
-
-export default function PageSources({ ids }: Props) {
-  const { lang } = useLang();
-  const isZh = lang === "zh";
-
-  const sources = Array.from(new Set(ids))
-    .map((id) => getSource(id))
-    .filter((s): s is SourceCitation => Boolean(s));
-
-  if (sources.length === 0) return null;
-
-  return (
-    <footer className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
-      <header>
-        <span className="text-xs font-bold uppercase tracking-widest text-muted">
-          {isZh ? "信息来源" : "Sources"}
-        </span>
-        <p className="text-xs text-muted">
-          {isZh
-            ? "本页所有信息均引自下列官方公开来源；点击查看原文。"
-            : "Every fact on this page is cited to one of the official sources below. Click to read the originals."}
-        </p>
-      </header>
-      <ol className="grid gap-1.5 text-xs leading-relaxed">
-        {sources.map((s, i) => (
-          <li key={s.id} className="flex gap-2">
-            <span className="shrink-0 tabular-nums text-muted">[{i + 1}]</span>
-            <a
-              href={s.url}
-              target="_blank"
-              rel="noreferrer"
-              className="flex-1 text-ink hover:text-jade hover:underline"
-            >
-              {s.community && (
-                <span className="mr-1.5 inline-block rounded-sm bg-amber-100 px-1 py-px text-[9px] font-bold uppercase tracking-wider text-amber-800 align-middle">
-                  blog
-                </span>
-              )}
-              <span className="font-bold">{s.publisher}</span>
-              <span className="text-muted"> · {s.pageTitleEn}</span>
-              {s.publishedDate && <span className="text-muted"> · {s.publishedDate}</span>}
-              <span className="ml-1 text-muted/60">— {s.domain}</span>
-            </a>
-          </li>
-        ))}
-      </ol>
-    </footer>
-  );
-}
diff --git a/v2/src/components/map/EarthIntro.tsx b/v2/src/components/map/EarthIntro.tsx
deleted file mode 100644
index e92f647816b6e07c354c0799b90a762dd5c0126b..0000000000000000000000000000000000000000
--- a/v2/src/components/map/EarthIntro.tsx
+++ /dev/null
@@ -1,149 +0,0 @@
-import { useEffect, useRef } from "react";
-import * as THREE from "three";
-
-type Props = { onDone: () => void };
-
-const SPIN_MS = 4000;
-const HOLD_MS = 1500;
-const ZOOM_MS = 1500;
-const TOTAL_MS = SPIN_MS + HOLD_MS + ZOOM_MS;
-
-// Verified against the actual asset (v2/public/assets/earth-bluemarble.jpg, 2:1 equirectangular,
-// prime meridian at horizontal centre, Africa centred). Three.js SphereGeometry default UV:
-// vertex.x = -r·cos(u·2π)·sin(v·π); vertex.y = r·cos(v·π); vertex.z = r·sin(u·2π)·sin(v·π).
-// At rotation = 0, +Z (camera-facing) point sits at u = 0.25, v = 0.5 → lon -90°, lat 0° (Americas).
-// To bring China centre (lon 105°E, lat 35°N → u = 0.79167, v = 0.30556) to the camera:
-//   1. Y-rotation: α_y = π/2 - u·2π = π/2 - 4.974 = -3.403 rad → puts China centre at world (0, +0.574, +0.819)
-//   2. X-rotation: α_x = arctan(0.574 / 0.819) = 0.611 rad ≈ 35° → tilts that point onto +Z exactly
-const CHINA_LON_DEG = 105;
-const CHINA_LAT_DEG = 35;
-const CHINA_U = (CHINA_LON_DEG + 180) / 360;
-const CHINA_V = (90 - CHINA_LAT_DEG) / 180;
-const CHINA_THETA_PHI = CHINA_U * 2 * Math.PI;
-const CHINA_THETA_LAT = CHINA_V * Math.PI;
-const TARGET_Y = Math.PI / 2 - CHINA_THETA_PHI; // -3.403 rad
-const TARGET_X = Math.atan2(Math.cos(CHINA_THETA_LAT), Math.sin(CHINA_THETA_LAT)); // 0.611 rad
-
-export default function EarthIntro({ onDone }: Props) {
-  const hostRef = useRef<HTMLDivElement | null>(null);
-  const doneRef = useRef(onDone);
-
-  useEffect(() => {
-    doneRef.current = onDone;
-  }, [onDone]);
-
-  useEffect(() => {
-    const host = hostRef.current;
-    if (!host) return;
-
-    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
-    renderer.setClearColor(0x000000, 0);
-    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
-    host.appendChild(renderer.domElement);
-    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });
-
-    const scene = new THREE.Scene();
-    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
-    camera.position.set(0, 0, 3.0);
-
-    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
-    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
-    sun.position.set(-2.5, 1.6, 4);
-    scene.add(sun);
-
-    const loader = new THREE.TextureLoader();
-    const earthTex = loader.load("/assets/earth-bluemarble.jpg");
-    earthTex.colorSpace = THREE.SRGBColorSpace;
-
-    const earth = new THREE.Mesh(
-      new THREE.SphereGeometry(1, 96, 64),
-      new THREE.MeshStandardMaterial({ map: earthTex, roughness: 0.92, metalness: 0 })
-    );
-    // 1.5 revolutions before landing on China (eastward visual direction = negative Y rotation)
-    const endY = TARGET_Y;
-    const startY = endY + Math.PI * 3;
-    earth.rotation.y = startY;
-    scene.add(earth);
-
-    const atmosphere = new THREE.Mesh(
-      new THREE.SphereGeometry(1.05, 64, 32),
-      new THREE.ShaderMaterial({
-        transparent: true,
-        side: THREE.BackSide,
-        blending: THREE.AdditiveBlending,
-        depthWrite: false,
-        vertexShader: `
-          varying vec3 vNormal;
-          void main() {
-            vNormal = normalize(normalMatrix * normal);
-            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
-          }`,
-        fragmentShader: `
-          varying vec3 vNormal;
-          void main() {
-            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
-            gl_FragColor = vec4(0.40, 0.68, 1.0, 1.0) * intensity;
-          }`
-      })
-    );
-    scene.add(atmosphere);
-
-    const resize = () => {
-      const rect = host.getBoundingClientRect();
-      const w = Math.max(1, Math.floor(rect.width));
-      const h = Math.max(1, Math.floor(rect.height));
-      renderer.setSize(w, h, false);
-      camera.aspect = w / h;
-      camera.updateProjectionMatrix();
-    };
-    const ro = new ResizeObserver(resize);
-    ro.observe(host);
-    resize();
-
-    let start: number | null = null;
-    let raf = 0;
-
-    const animate = (t: number) => {
-      if (start === null) start = t;
-      const elapsed = t - start;
-
-      const spinT = Math.min(elapsed, SPIN_MS) / SPIN_MS;
-      const spinEased = 1 - Math.pow(1 - spinT, 3); // ease-out cubic
-      const zoomRaw = Math.max(0, elapsed - SPIN_MS - HOLD_MS) / ZOOM_MS;
-      const zoomT = Math.min(1, zoomRaw);
-      const zoomEased = 1 - Math.pow(1 - zoomT, 3);
-
-      const yRot = startY + (endY - startY) * spinEased;
-      earth.rotation.y = yRot;
-      atmosphere.rotation.y = yRot;
-      earth.rotation.x = TARGET_X * spinEased;
-      atmosphere.rotation.x = TARGET_X * spinEased;
-
-      camera.position.z = 3.0 - zoomEased * 1.55;
-      host.style.opacity = String(1 - zoomEased);
-
-      renderer.render(scene, camera);
-
-      if (elapsed < TOTAL_MS) {
-        raf = requestAnimationFrame(animate);
-      } else {
-        doneRef.current();
-      }
-    };
-    raf = requestAnimationFrame(animate);
-
-    return () => {
-      cancelAnimationFrame(raf);
-      ro.disconnect();
-      earthTex.dispose();
-      earth.geometry.dispose();
-      (earth.material as THREE.Material).dispose();
-      atmosphere.geometry.dispose();
-      (atmosphere.material as THREE.Material).dispose();
-      renderer.dispose();
-      host.innerHTML = "";
-    };
-  }, []);
-
-  return <div ref={hostRef} aria-hidden className="pointer-events-none absolute inset-0 z-40" />;
-}
diff --git a/v2/src/components/search/PlaceSearch.tsx b/v2/src/components/search/PlaceSearch.tsx
deleted file mode 100644
index 4f83ec26fe5411e6d3650be3ad2b8fe0f3dba54c..0000000000000000000000000000000000000000
--- a/v2/src/components/search/PlaceSearch.tsx
+++ /dev/null
@@ -1,55 +0,0 @@
-import { useId, useMemo, useState } from "react";
-import { useLang } from "../../store/language";
-import { useAtlas } from "../../store/atlas";
-import { findBestMatch, getAllRecords } from "../../lib/search";
-import { placeTypeLabels } from "../../data/i18n";
-
-export default function PlaceSearch() {
-  const { t, lang } = useLang();
-  const { selectPlace } = useAtlas();
-  const [value, setValue] = useState("");
-  const [hint, setHint] = useState<string | null>(null);
-  const datalistId = useId();
-
-  const suggestions = useMemo(() => getAllRecords().slice(0, 120), []);
-
-  const submit = (event: React.FormEvent) => {
-    event.preventDefault();
-    const record = findBestMatch(value);
-    if (!record) {
-      setHint(t("searchNoMatch"));
-      return;
-    }
-    selectPlace(record.provinceId, record.cityId ?? null);
-    setHint(`${t("searchJumped")} ${lang === "zh" ? record.zh : record.en}`);
-    document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
-  };
-
-  return (
-    <form onSubmit={submit} className="flex flex-1 items-center gap-2">
-      <input
-        type="search"
-        list={datalistId}
-        autoComplete="off"
-        value={value}
-        onChange={(e) => setValue(e.target.value)}
-        placeholder={t("searchPlaceholder")}
-        className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2 text-sm focus:border-ink focus:outline-none"
-      />
-      <button
-        type="submit"
-        className="rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
-      >
-        {t("searchButton")}
-      </button>
-      <datalist id={datalistId}>
-        {suggestions.map((record, i) => {
-          const primary = lang === "zh" ? record.zh : record.en;
-          const typeLabel = placeTypeLabels[lang][record.type] ?? record.type;
-          return <option key={`${record.provinceId}-${record.cityId ?? ""}-${i}`} value={primary} label={`${primary} · ${typeLabel}`} />;
-        })}
-      </datalist>
-      {hint && <span className="ml-2 hidden text-xs text-muted lg:inline">{hint}</span>}
-    </form>
-  );
-}
diff --git a/v2/src/components/sections/HistoryVideo.tsx b/v2/src/components/sections/HistoryVideo.tsx
deleted file mode 100644
index fabd834e41f64ddccb40198d92c4759285dcb51b..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/HistoryVideo.tsx
+++ /dev/null
@@ -1,35 +0,0 @@
-import { useLang } from "../../store/language";
-
-export default function HistoryVideo() {
-  const { t } = useLang();
-  return (
-    <section id="video" className="grid items-start gap-6 md:grid-cols-[1fr_2fr]">
-      <div className="space-y-3">
-        <h2 className="text-2xl font-bold">{t("historyVideoTitle")}</h2>
-        <p className="text-sm leading-relaxed text-muted">{t("historyVideoBody")}</p>
-      </div>
-      <figure className="overflow-hidden rounded-xl border border-line bg-black">
-        <div className="aspect-video">
-          <iframe
-            className="h-full w-full"
-            src="https://www.youtube.com/embed/0DzZgBd4W1Q"
-            title="Discover a China Beyond Your Imagination"
-            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
-            allowFullScreen
-          />
-        </div>
-        <figcaption className="flex items-center justify-between gap-3 bg-white px-4 py-3 text-xs">
-          <strong>{t("historyVideoMeta")}</strong>
-          <a
-            className="text-muted hover:text-jade"
-            href="https://en.chinaculture.org/a/202206/07/WS629edf41a310fd2b29e61286.html"
-            target="_blank"
-            rel="noreferrer"
-          >
-            {t("historyVideoSource")}
-          </a>
-        </figcaption>
-      </figure>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/MuseumFlow.tsx b/v2/src/components/sections/MuseumFlow.tsx
deleted file mode 100644
index 7bcf8805fbbb34b019b679e0e3ca5ce056b94eb9..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/MuseumFlow.tsx
+++ /dev/null
@@ -1,29 +0,0 @@
-import { useLang } from "../../store/language";
-
-const STEPS = [
-  { titleKey: "flowOneTitle", bodyKey: "flowOneBody" },
-  { titleKey: "flowTwoTitle", bodyKey: "flowTwoBody" },
-  { titleKey: "flowThreeTitle", bodyKey: "flowThreeBody" },
-  { titleKey: "flowFourTitle", bodyKey: "flowFourBody" }
-];
-
-export default function MuseumFlow() {
-  const { t } = useLang();
-  return (
-    <section id="museums" className="flex flex-col gap-4">
-      <header>
-        <h2 className="text-2xl font-bold">{t("museumTitle")}</h2>
-        <p className="text-sm text-muted">{t("museumBody")}</p>
-      </header>
-      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
-        {STEPS.map((step, i) => (
-          <li key={step.titleKey} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
-            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
-            <h3 className="text-base font-bold">{t(step.titleKey)}</h3>
-            <p className="text-sm text-muted">{t(step.bodyKey)}</p>
-          </li>
-        ))}
-      </ol>
-    </section>
-  );
-}
diff --git a/v2/src/components/sections/SourcesNote.tsx b/v2/src/components/sections/SourcesNote.tsx
deleted file mode 100644
index 8fbbff35733ef16fce104d48e5a8c61e32d25f39..0000000000000000000000000000000000000000
--- a/v2/src/components/sections/SourcesNote.tsx
+++ /dev/null
@@ -1,20 +0,0 @@
-import { useLang } from "../../store/language";
-
-const RULES = ["ruleOne", "ruleTwo", "ruleThree", "ruleFour"];
-
-export default function SourcesNote() {
-  const { t } = useLang();
-  return (
-    <section id="sources" className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
-      <header>
-        <h2 className="text-2xl font-bold">{t("sourcesTitle")}</h2>
-        <p className="text-sm text-muted">{t("sourcesBody")}</p>
-      </header>
-      <ul className="grid list-inside list-disc gap-1 text-sm">
-        {RULES.map((key) => (
-          <li key={key}>{t(key)}</li>
-        ))}
-      </ul>
-    </section>
-  );
-}

tokens used
90,105

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
