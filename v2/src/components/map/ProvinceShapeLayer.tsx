import { useMemo } from "react";
import clsx from "clsx";
import { useProvinceShapes } from "../../hooks/useProvinceShapes";
import { computeFocusTransform, computeUnionViewBox, type ProvinceShape } from "../../lib/shapes";
import { provinceHitAreas } from "../../data/map-sources";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";
import { DEFAULT_PROVINCE_FILL, PROVINCE_COLORS } from "./provinceColors";

const labelMap = new Map(provinceHitAreas.map((a) => [a.id, a]));

const TRANSITION = "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)";
const PATH_TRANSITION = "fill 400ms ease, stroke 400ms ease, stroke-width 400ms ease";

type ShapeButtonProps = {
  shape: ProvinceShape;
  active: boolean;
  focused: boolean;
  label: string;
  onSelect: () => void;
};

function ProvinceShapeButton({ shape, active, focused, label, onSelect }: ShapeButtonProps) {
  const dimmed = focused && !active;
  const baseFill = PROVINCE_COLORS[shape.id] ?? DEFAULT_PROVINCE_FILL;

  const fill = !focused
    ? baseFill
    : active
      ? "#70b7a8"
      : `${baseFill}cc`;
  const stroke = !focused
    ? "rgba(78,91,85,0.72)"
    : active
      ? "rgba(23,112,97,1)"
      : "rgba(24,32,29,0.25)";
  const strokeWidth = active ? 2.4 : 0.85;

  return (
    <g
      tabIndex={dimmed ? -1 : 0}
      role="button"
      aria-pressed={active}
      aria-label={label}
      onClick={(event) => {
        event.stopPropagation();
        onSelect();
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      className={clsx(
        "cursor-pointer outline-none transition-opacity duration-300 focus-visible:[&>path]:fill-jade-soft focus-visible:[&>path]:stroke-jade focus-visible:[&>path]:[stroke-width:2.8]",
        dimmed && "opacity-90"
      )}
      style={{ pointerEvents: "all" }}
    >
      <title>{label}</title>
      {shape.paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          style={{ transition: PATH_TRANSITION }}
        />
      ))}
    </g>
  );
}

export default function ProvinceShapeLayer() {
  const { shapes, error } = useProvinceShapes();
  const { lang } = useLang();
  const { selectedProvinceId, selectPlace, selectProvince } = useAtlas();

  const viewBox = useMemo(() => (shapes ? computeUnionViewBox(shapes) : null), [shapes]);

  const cssTransform = useMemo(() => {
    if (!shapes || !viewBox || !selectedProvinceId) return "translate(0%, 0%) scale(1)";
    const shape = shapes[selectedProvinceId];
    if (!shape) return "translate(0%, 0%) scale(1)";
    const focus = computeFocusTransform(shape, viewBox);
    const txPct = (((focus.scale - 1) * viewBox.x + focus.tx) / viewBox.width) * 100;
    const tyPct = (((focus.scale - 1) * viewBox.y + focus.ty) / viewBox.height) * 100;
    return `translate(${txPct}%, ${tyPct}%) scale(${focus.scale})`;
  }, [shapes, viewBox, selectedProvinceId]);

  if (error) {
    return (
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-sm font-semibold text-ink/70">
        {lang === "zh"
          ? "地图轮廓加载失败，刷新重试。"
          : "Map outline failed to load. Refresh to retry."}
      </div>
    );
  }

  if (!shapes || !viewBox) return null;

  const focused = Boolean(selectedProvinceId);
  const vb = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
  const ordered = Object.values(shapes).sort((a, b) =>
    a.id === selectedProvinceId ? 1 : b.id === selectedProvinceId ? -1 : 0
  );

  return (
    <div
      className="absolute inset-0 z-10"
      style={{
        transform: cssTransform,
        transformOrigin: "0 0",
        transition: TRANSITION
      }}
    >
      <svg
        viewBox={vb}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        role="group"
        aria-label="China provinces"
      >
        {ordered.map((shape) => {
          const active = shape.id === selectedProvinceId;
          const label = labelMap.get(shape.id);
          const title = label ? (lang === "zh" ? label.zh : label.en) : shape.name;
          return (
            <ProvinceShapeButton
              key={shape.id}
              shape={shape}
              active={active}
              focused={focused}
              label={title}
              onSelect={() => (active ? selectProvince(null) : selectPlace(shape.id, null))}
            />
          );
        })}
      </svg>
    </div>
  );
}
