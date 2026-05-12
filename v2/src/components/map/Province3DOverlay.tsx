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
            {lang === "zh" ? "天地图 3D" : "Tianditu 3D"}
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
            {lang === "zh" ? "返回 2D" : "Back to 2D"}
          </button>
          <button
            type="button"
            aria-label={lang === "zh" ? "关闭 3D 地图" : "Close 3D map"}
            onClick={reset}
            className="grid h-8 w-8 place-items-center rounded-full border border-line bg-white text-lg font-bold leading-none text-ink shadow-sm hover:border-jade hover:text-jade"
          >
            ×
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
                    ? "3D 视图加载失败，点击重置返回二维地图。"
                    : "The 3D view couldn't load. Click reset to go back to the 2D map."}
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink hover:bg-white/90"
                >
                  {lang === "zh" ? "重置" : "Reset"}
                </button>
              </div>
            </div>
          }
        >
          <Suspense
            fallback={
              <div className="grid h-full min-h-[360px] place-items-center bg-[#071512] text-sm font-semibold text-white/80">
              {lang === "zh" ? "正在加载天地图..." : "Loading Tianditu..."}
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
