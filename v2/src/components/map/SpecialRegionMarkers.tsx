import type { CSSProperties } from "react";
import { provinceHitAreas } from "../../data/map-sources";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";

const markerIds = new Set(["hong-kong", "macau"]);
const markerOffsets: Record<string, { desktopX: number; desktopY: number; mobileX: number; mobileY: number }> = {
  "hong-kong": { desktopX: 2.8, desktopY: -1.3, mobileX: 7.2, mobileY: -3.2 },
  macau: { desktopX: -2.6, desktopY: 1.4, mobileX: -7.2, mobileY: 2.4 }
};

type SpecialRegionMarkersProps = {
  enable3D: boolean;
};

export default function SpecialRegionMarkers({ enable3D }: SpecialRegionMarkersProps) {
  const { lang } = useLang();
  const { selectedProvinceId, selectPlace } = useAtlas();
  const visible = provinceHitAreas.filter((area) => markerIds.has(area.id));

  if (selectedProvinceId) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[25]">
      {visible.map((area) => {
        const offsets = markerOffsets[area.id];
        const style = {
          "--marker-left-desktop": `${area.x + (offsets?.desktopX ?? 0)}%`,
          "--marker-top-desktop": `${area.y + (offsets?.desktopY ?? 0)}%`,
          "--marker-left-mobile": `${area.x + (offsets?.mobileX ?? 0)}%`,
          "--marker-top-mobile": `${area.y + (offsets?.mobileY ?? 0)}%`
        } as CSSProperties;

        return (
          <button
            key={area.id}
            type="button"
            aria-label={lang === "zh" ? area.zh : area.en}
            onClick={() => selectPlace(area.id, null, enable3D)}
            className="special-region-marker pointer-events-auto absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-ink/25 bg-white/95 px-1.5 py-1 text-[10px] font-bold leading-none text-ink shadow-md transition hover:border-jade hover:text-jade sm:px-2"
            style={style}
          >
            <span className="h-2 w-2 rounded-full bg-jade shadow-[0_0_0_3px_rgba(23,112,97,0.16)]" />
            <span className="hidden sm:inline">{lang === "zh" ? area.zh : area.en}</span>
          </button>
        );
      })}
    </div>
  );
}
