import { Suspense, lazy } from "react";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";

const Map3D = lazy(() => import("./Map3D"));

export default function Province3DOverlay() {
  const { selectedProvinceId, province, is3DEnabled } = useAtlas();
  const { lang } = useLang();

  if (!is3DEnabled || !selectedProvinceId) return null;

  const label = province ? (lang === "zh" ? province.zh : province.name) : selectedProvinceId;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 grid place-items-center bg-paper/55 backdrop-blur-sm">
      <div className="pointer-events-auto relative h-[80%] w-[60%]">
        <Suspense fallback={<div className="grid h-full place-items-center text-xs text-muted">Loading 3D…</div>}>
          <Map3D provinceId={selectedProvinceId} provinceName={label} />
        </Suspense>
      </div>
    </div>
  );
}
