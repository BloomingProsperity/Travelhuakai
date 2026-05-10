import { lazy, Suspense, useEffect, useState } from "react";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";
import ProvinceShapeLayer from "./ProvinceShapeLayer";
import ProvinceLabelLayer from "./ProvinceLabelLayer";
import ProvinceInfoCard from "./ProvinceInfoCard";
import Province3DOverlay from "./Province3DOverlay";

const EarthIntro = lazy(() => import("./EarthIntro"));

const REVEAL_MS = 600;

export default function HeroMap() {
  const { t, lang } = useLang();
  const { selectedProvinceId, province, is3DEnabled, toggle3D, reset } = useAtlas();
  const focused = Boolean(selectedProvinceId);
  const provinceLabel = province ? (lang === "zh" ? province.zh : province.name) : "";
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    if (!focused) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") reset();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [focused, reset]);

  return (
    <section aria-label="China interactive map" className="flex flex-col gap-3">
      {focused && (
        <header className="flex items-end justify-between">
          <h2 className="text-2xl font-bold leading-tight">{provinceLabel}</h2>
          <button
            type="button"
            onClick={toggle3D}
            className="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink hover:border-jade hover:text-jade"
          >
            {is3DEnabled ? t("exit3D") : t("viewIn3D")}
          </button>
        </header>
      )}

      <div
        aria-live="polite"
        className="relative"
        style={{ aspectRatio: "9463 / 6675" }}
      >
        <div
          className="absolute inset-0"
          style={{
            opacity: introDone ? 1 : 0,
            transform: introDone ? "scale(1)" : "scale(0.94)",
            transition: `opacity ${REVEAL_MS}ms ease, transform ${REVEAL_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
          }}
        >
          <ProvinceShapeLayer />
          <ProvinceLabelLayer />
          <ProvinceInfoCard />
          <Province3DOverlay />
        </div>
        {!introDone && (
          <Suspense fallback={null}>
            <EarthIntro onDone={() => setIntroDone(true)} />
          </Suspense>
        )}
        {focused && (
          <button
            type="button"
            onClick={reset}
            className="absolute right-3 top-3 z-30 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-ink/90"
          >
            {t("reset")}
          </button>
        )}
      </div>
    </section>
  );
}
