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
                {lang === "zh" ? "查看 3D" : "View in 3D"}
              </button>
            )}
            <button
              type="button"
              onClick={reset}
              className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
            >
              {lang === "zh" ? "重置" : "Reset"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
