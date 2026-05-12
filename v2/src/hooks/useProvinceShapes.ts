import { useEffect, useState } from "react";
import { loadProvinceShapes, type ShapeMap } from "../lib/shapes";

export type ProvinceShapesState = {
  shapes: ShapeMap | null;
  error: Error | null;
};

export function useProvinceShapes(): ProvinceShapesState {
  const [state, setState] = useState<ProvinceShapesState>({
    shapes: null,
    error: null
  });

  useEffect(() => {
    let cancelled = false;
    loadProvinceShapes()
      .then((data) => {
        if (!cancelled) setState({ shapes: data, error: null });
      })
      .catch((error) => {
        if (cancelled) return;
        const loadError = error instanceof Error ? error : new Error(String(error));
        console.warn("Province shapes failed to load:", loadError);
        setState({ shapes: null, error: loadError });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
