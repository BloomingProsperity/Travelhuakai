import { useLang } from "../../store/language";
import { useAtlas } from "../../store/atlas";
import ProvinceRail from "./ProvinceRail";
import CityList from "./CityList";
import CityProfile from "./CityProfile";

export default function AtlasSection() {
  const { t } = useLang();
  const { province } = useAtlas();

  return (
    <section id="atlas" className="flex flex-col gap-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold">{t("atlasTitle")}</h2>
          <p className="text-sm text-muted">{t("atlasBody")}</p>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-[260px_minmax(0,1fr)_360px]">
        <ProvinceRail />
        <div className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4">
          <header className="flex items-baseline justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("currentView")}</span>
            <h3 className="text-lg font-bold">{province ? province.name : "China"}</h3>
          </header>
          <CityList cities={province?.cities ?? []} />
        </div>
        <CityProfile />
      </div>
    </section>
  );
}
