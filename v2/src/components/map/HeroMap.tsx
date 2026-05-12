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
            {lang === "zh" ? "重置" : "Reset"}
          </button>
        )}
      </div>
    </section>
  );
}
