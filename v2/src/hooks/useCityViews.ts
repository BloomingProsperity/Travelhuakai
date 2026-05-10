import { useCallback, useSyncExternalStore } from "react";

const KEY_PREFIX = "chinaAtlas:views:";
const listeners = new Set<() => void>();

const isBrowser = typeof window !== "undefined";

const subscribe = (listener: () => void): (() => void) => {
  listeners.add(listener);
  if (isBrowser) window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    if (isBrowser) window.removeEventListener("storage", listener);
  };
};

const notify = () => listeners.forEach((listener) => listener());

const readCount = (cityId: string): number => {
  if (!isBrowser) return 0;
  const stored = Number(window.localStorage.getItem(KEY_PREFIX + cityId) ?? 0);
  return Number.isFinite(stored) ? stored : 0;
};

export function useCityViewCount(cityId: string, baseViews: number): number {
  const stored = useSyncExternalStore(
    subscribe,
    () => readCount(cityId),
    () => 0
  );
  return baseViews + stored;
}

export function useRecordCityView(): (cityId: string) => void {
  return useCallback((cityId: string) => {
    if (!isBrowser) return;
    const next = readCount(cityId) + 1;
    window.localStorage.setItem(KEY_PREFIX + cityId, String(next));
    notify();
  }, []);
}
