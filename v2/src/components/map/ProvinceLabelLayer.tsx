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
              "absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-bold tracking-tight leading-none",
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
