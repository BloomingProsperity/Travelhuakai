import { useEffect, useState } from "react";
import { loadProvinceShapes, type ShapeMap } from "../lib/shapes";

export function useProvinceShapes(): ShapeMap | null {
  const [shapes, setShapes] = useState<ShapeMap | null>(null);
  useEffect(() => {
    let cancelled = false;
    loadProvinceShapes()
      .then((data) => {
        if (!cancelled) setShapes(data);
      })
      .catch((error) => {
        console.warn("Province shapes failed to load:", error);
      });
    return () => {
      cancelled = true;
    };
  }, []);
  return shapes;
}
