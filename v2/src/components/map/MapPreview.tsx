import { useMemo } from "react";
import { useProvinceShapes } from "../../hooks/useProvinceShapes";
import { computeUnionViewBox } from "../../lib/shapes";
import { useLang } from "../../store/language";
import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";

export default function MapPreview() {
  const { shapes, error } = useProvinceShapes();
  const { lang } = useLang();
  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-white/70 px-4 text-center text-sm font-semibold text-ink/70">
        {lang === "zh"
          ? "地图轮廓加载失败，刷新重试。"
          : "Map outline failed to load. Refresh to retry."}
      </div>
    );
  }

  if (!shapes || !viewBox) {
    return <div className="h-full w-full bg-white/70" />;
  }

  return (
    <svg
      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      aria-hidden
    >
      {Object.values(shapes).map((shape) =>
        shape.paths.map((path, index) => (
          <path
            key={`${shape.id}-${index}`}
            d={path}
            fill={PROVINCE_COLORS[shape.id] ?? DEFAULT_PROVINCE_FILL}
            stroke="rgba(78,91,85,0.72)"
            strokeWidth={0.85}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        ))
      )}
    </svg>
  );
}
