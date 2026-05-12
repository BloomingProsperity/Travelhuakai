const WIDTHS = [600, 900, 1200, 1800] as const;

export function unsplashSrcSet(url: string): string {
  const base = url.split("?")[0];
  return WIDTHS.map((w) => `${base}?w=${w}&q=80&auto=format&fit=crop ${w}w`).join(", ");
}
