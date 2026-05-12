import { useSyncExternalStore } from "react";

const DESKTOP_QUERY = "(min-width: 768px)";

const getMediaQueryList = () => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return null;
  }

  return window.matchMedia(DESKTOP_QUERY);
};

const getSnapshot = () => getMediaQueryList()?.matches ?? false;

const getServerSnapshot = () => false;

const subscribe = (onStoreChange: () => void) => {
  const mediaQueryList = getMediaQueryList();
  if (!mediaQueryList) return () => {};

  mediaQueryList.addEventListener("change", onStoreChange);
  return () => mediaQueryList.removeEventListener("change", onStoreChange);
};

export function useIsDesktop() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
