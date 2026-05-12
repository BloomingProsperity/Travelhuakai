import { useEffect, useState } from "react";
import clsx from "clsx";
import { useLang } from "../../store/language";

type CityNavItem = { id: string; en: string; zh: string };

const CITY_NAV_ITEMS: CityNavItem[] = [
  { id: "intro", en: "City overview", zh: "城市介绍" },
  { id: "season", en: "When to visit", zh: "最佳季节" },
  { id: "visa", en: "Entry & Visa", zh: "入境签证" },
  { id: "payments", en: "Payments", zh: "支付" },
  { id: "transport", en: "Transport", zh: "交通" },
  { id: "food", en: "Food", zh: "美食" },
  { id: "emergency", en: "Emergency & Medical", zh: "紧急 / 医疗" },
  { id: "portals", en: "Official portals", zh: "官方延伸" }
];

export default function CityNav() {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const [active, setActive] = useState<string>("intro");

  useEffect(() => {
    const sections = CITY_NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label={isZh ? "城市页导航" : "City page navigation"}
      className="sticky top-20 z-20 -mx-4 flex flex-col self-start border-b border-line bg-paper/85 px-4 py-2 backdrop-blur lg:top-24 lg:mx-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none"
    >
      <ul className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-x-visible">
        {CITY_NAV_ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="shrink-0 lg:shrink">
              <a
                href={`#${item.id}`}
                className={clsx(
                  "block whitespace-nowrap rounded-lg px-3 py-2 text-sm transition lg:whitespace-normal",
                  isActive
                    ? "bg-jade-soft font-bold text-jade"
                    : "text-ink/80 hover:bg-paper hover:text-ink"
                )}
              >
                {isZh ? item.zh : item.en}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
