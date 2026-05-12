import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";
import { provinceAttractionSeed } from "../../data/atlas";
import { useRecordCityView } from "../../hooks/useCityViews";

export default function ProvinceInfoCard() {
  const { selectedProvinceId, province, selectPlace, is3DEnabled } = useAtlas();
  const { lang, t } = useLang();
  const recordView = useRecordCityView();

  if (!selectedProvinceId || !province || is3DEnabled) return null;

  const attractions = provinceAttractionSeed[selectedProvinceId] ?? [];
  const hasCities = province.cities.length > 0;
  const hasAttractions = attractions.length > 0;

  const goToCity = (cityId: string) => {
    recordView(cityId);
    selectPlace(province.id, cityId);
    document.querySelector("#atlas")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside
      className="absolute bottom-3 left-3 z-20 flex max-h-[78%] w-[300px] flex-col gap-3 overflow-auto rounded-xl border border-line bg-white/95 p-4 shadow-xl backdrop-blur animate-[fadeUp_400ms_ease-out]"
      aria-label={lang === "zh" ? province.zh : province.name}
    >
      <header>
        <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
        <h3 className="text-xl font-bold leading-tight">{lang === "zh" ? province.zh : province.name}</h3>
        <p className="text-xs text-muted">{lang === "zh" ? province.name : province.zh}</p>
      </header>

      {hasCities && (
        <section className="flex flex-col gap-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("cityProfiles")}</h4>
          <ul className="flex flex-col gap-1">
            {province.cities.map((city) => (
              <li key={city.id}>
                <button
                  type="button"
                  onClick={() => goToCity(city.id)}
                  className="flex w-full flex-col rounded-md px-2 py-1.5 text-left transition hover:bg-paper"
                >
                  <strong className="text-sm">{lang === "zh" ? city.zh : city.name}</strong>
                  <span className="text-xs text-muted">{lang === "zh" ? city.museumZh || city.museum : city.museum}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {hasAttractions && (
        <section className="flex flex-col gap-1">
          <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("famousAttractions")}</h4>
          <ul className="flex flex-wrap gap-1">
            {attractions.map((attraction) => (
              <li
                key={attraction.zh}
                className="rounded-full bg-paper px-2 py-1 text-xs text-muted"
              >
                {lang === "zh" ? attraction.zh : attraction.en}
              </li>
            ))}
          </ul>
        </section>
      )}

      {!hasCities && !hasAttractions && (
        <p className="text-sm text-muted">{t("provinceDataPending")}</p>
      )}
    </aside>
  );
}
