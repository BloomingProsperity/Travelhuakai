export type ProvinceShape = {
  id: string;
  name: string;
  bounds: { left: number; right: number; bottom: number; top: number };
  viewBox: { x: number; y: number; width: number; height: number };
  paths: string[];
};

export type ShapeMap = Readonly<Record<string, ProvinceShape>>;

let cached: Promise<ShapeMap> | null = null;

export const loadProvinceShapes = (): Promise<ShapeMap> => {
  if (!cached) {
    cached = fetch("/assets/china-province-shapes.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load province shapes");
        return response.json();
      })
      .then((data) => Object.freeze((data?.provinces ?? {}) as Record<string, ProvinceShape>));
  }
  return cached;
};

export type UnionViewBox = { x: number; y: number; width: number; height: number };

export const computeUnionViewBox = (shapes: ShapeMap, padPercent = 0.02): UnionViewBox => {
  const list = Object.values(shapes);
  if (!list.length) return { x: 0, y: 0, width: 1, height: 1 };
  const left = Math.min(...list.map((s) => s.bounds.left));
  const right = Math.max(...list.map((s) => s.bounds.right));
  const bottom = Math.min(...list.map((s) => s.bounds.bottom));
  const top = Math.max(...list.map((s) => s.bounds.top));
  const width = right - left;
  const height = top - bottom;
  const padX = width * padPercent;
  const padY = height * padPercent;
  return {
    x: left - padX,
    y: -(top + padY),
    width: width + padX * 2,
    height: height + padY * 2
  };
};

export const computeFocusTransform = (
  shape: ProvinceShape | null,
  viewBox: UnionViewBox,
  zoomPad = 0.78
): { tx: number; ty: number; scale: number } => {
  if (!shape) return { tx: 0, ty: 0, scale: 1 };
  const b = shape.bounds;
  const provinceCenterX = (b.left + b.right) / 2;
  const provinceCenterY = -(b.top + b.bottom) / 2;
  const provinceWidth = b.right - b.left;
  const provinceHeight = b.top - b.bottom;
  const fitX = viewBox.width / provinceWidth;
  const fitY = viewBox.height / provinceHeight;
  const scale = Math.min(fitX, fitY) * zoomPad;
  const viewCenterX = viewBox.x + viewBox.width / 2;
  const viewCenterY = viewBox.y + viewBox.height / 2;
  return {
    tx: viewCenterX - provinceCenterX * scale,
    ty: viewCenterY - provinceCenterY * scale,
    scale
  };
};
