import { useState } from "react";
import { Link } from "react-router";
import clsx from "clsx";
import { cityItineraries, type ItineraryDay } from "../data/itineraries";
import { CITY_LABELS, type CityId } from "../data/transport";
import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
import { useLang } from "../store/language";

type TimeSlotKey = "morning" | "afternoon" | "evening";

const TIME_SLOTS: Array<{ key: TimeSlotKey; labelEn: string; labelZh: string }> = [
  { key: "morning", labelEn: "Morning", labelZh: "上午" },
  { key: "afternoon", labelEn: "Afternoon", labelZh: "下午" },
  { key: "evening", labelEn: "Evening", labelZh: "晚上" }
];

const planBreadcrumbJsonLd = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "3-day plan", path: "/plan" }
]);

export default function PlanPage() {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const [activeCityId, setActiveCityId] = useState<CityId>("beijing");
  const activeItinerary = cityItineraries.find((itinerary) => itinerary.cityId === activeCityId) ?? cityItineraries[0];
  const activeCity = CITY_LABELS[activeItinerary.cityId];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(planBreadcrumbJsonLd) }}
      />
      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-8 sm:py-10">
        <header className="flex flex-col gap-3">
          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary">
            {isZh ? "← 返回首页" : "← Home"}
          </Link>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {isZh ? "Trip Planner" : "Trip Planner"}
            </span>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
              {isZh ? "3 天行程" : "3-day plan"}
            </h1>
          </div>
        </header>

        <div
          role="tablist"
          aria-label={isZh ? "选择城市行程" : "Choose a city itinerary"}
          className="flex gap-2 overflow-x-auto rounded-lg border border-border bg-card p-2"
        >
          {cityItineraries.map((itinerary) => {
            const city = CITY_LABELS[itinerary.cityId];
            const isActive = itinerary.cityId === activeCityId;

            return (
              <button
                key={itinerary.cityId}
                type="button"
                role="tab"
                id={`plan-tab-${itinerary.cityId}`}
                aria-selected={isActive}
                aria-controls={`plan-panel-${itinerary.cityId}`}
                onClick={() => setActiveCityId(itinerary.cityId)}
                className={clsx(
                  "min-w-28 rounded-md border px-4 py-2 text-left text-sm font-bold transition",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-transparent bg-secondary text-secondary-foreground hover:border-primary hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <span className="block">{isZh ? city.zh : city.en}</span>
                <span className={clsx("block text-[11px] font-normal", isActive ? "text-primary-foreground/80" : "text-muted-foreground")}>
                  {isZh ? city.en : city.zh}
                </span>
              </button>
            );
          })}
        </div>

        <section
          role="tabpanel"
          id={`plan-panel-${activeItinerary.cityId}`}
          aria-labelledby={`plan-tab-${activeItinerary.cityId}`}
          className="flex flex-col gap-6"
        >
          <header className="flex flex-col gap-1">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {isZh ? "当前城市" : "Current city"}
            </p>
            <h2 className="text-2xl font-bold">{isZh ? activeCity.zh : activeCity.en}</h2>
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {isZh ? activeItinerary.subtitleZh : activeItinerary.subtitleEn}
            </p>
          </header>

          <div className="flex flex-col gap-8">
            {activeItinerary.days.map((day) => (
              <section key={day.dayNumber} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1 border-b border-border pb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {isZh ? `第 ${day.dayNumber} 天` : `Day ${day.dayNumber}`}
                  </span>
                  <h3 className="text-xl font-bold">{isZh ? day.themeZh : day.themeEn}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {TIME_SLOTS.map((slot) => (
                    <PlanActivityCard
                      key={slot.key}
                      cityId={activeItinerary.cityId}
                      day={day}
                      slot={slot}
                      isZh={isZh}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

function PlanActivityCard({
  cityId,
  day,
  slot,
  isZh
}: {
  cityId: CityId;
  day: ItineraryDay;
  slot: { key: TimeSlotKey; labelEn: string; labelZh: string };
  isZh: boolean;
}) {
  const activity = day[slot.key];

  return (
    <article className="flex flex-col gap-3 rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="flex min-w-0 flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {isZh ? slot.labelZh : slot.labelEn}
          </span>
          <h4 className="break-words text-lg font-bold leading-tight">
            {isZh ? day.themeZh : day.themeEn}
          </h4>
        </div>
        {activity.attractionId && (
          <Link
            to={`/city/${cityId}#intro`}
            className="shrink-0 text-xs font-bold uppercase tracking-widest text-primary hover:underline"
          >
            {isZh ? "查看景点" : "Attraction"}
          </Link>
        )}
      </div>

      <p className="text-sm leading-relaxed text-card-foreground">{isZh ? activity.zh : activity.en}</p>

      <div className="rounded-md border border-border bg-accent px-3 py-2 text-sm leading-relaxed text-accent-foreground">
        <strong className="mr-1">{isZh ? "提示：" : "Tip:"}</strong>
        {isZh ? day.travelTipZh : day.travelTipEn}
      </div>
    </article>
  );
}
