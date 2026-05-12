import { provinceHitAreas } from "../../data/map-sources";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";

const specialMarkerIds = new Set(["hong-kong", "macau"]);

type ProvinceHitAreaLayerProps = {
  enable3D: boolean;
};

export default function ProvinceHitAreaLayer({ enable3D }: ProvinceHitAreaLayerProps) {
  const { lang } = useLang();
  const { selectedProvinceId, selectPlace } = useAtlas();

  if (selectedProvinceId) return null;

  return (
    <div className="absolute inset-0 z-[24]">
      {provinceHitAreas
        .filter((area) => !specialMarkerIds.has(area.id))
        .map((area) => (
          <button
            key={area.id}
            type="button"
            tabIndex={-1}
            data-province-hit={area.id}
            aria-label={lang === "zh" ? area.zh : area.en}
            onClick={() => selectPlace(area.id, null, enable3D)}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md opacity-0"
            style={{
              left: `${area.x}%`,
              top: `${area.y}%`,
              width: `${area.w}%`,
              height: `${area.h}%`
            }}
          />
        ))}
    </div>
  );
}
