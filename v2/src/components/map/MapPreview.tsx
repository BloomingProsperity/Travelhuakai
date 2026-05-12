import { useMemo } from "react";
import { useProvinceShapes } from "../../hooks/useProvinceShapes";
import { computeUnionViewBox } from "../../lib/shapes";
import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";

export default function MapPreview() {
  const shapes = useProvinceShapes();
  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);

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
