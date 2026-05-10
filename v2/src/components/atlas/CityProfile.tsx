import { accessLabels, statusLabels } from "../../data/i18n";
import { useAtlas } from "../../store/atlas";
import { useLang } from "../../store/language";
import { useCityViewCount } from "../../hooks/useCityViews";
import { formatNumber } from "../../lib/format";

export default function CityProfile() {
  const { city, selectCity } = useAtlas();
  const { t, lang } = useLang();
  const views = useCityViewCount(city?.id ?? "", city?.baseViews ?? 0);

  if (!city) {
    return (
      <aside className="flex flex-col items-start gap-2 rounded-xl border border-dashed border-line bg-white p-6">
        <h3 className="text-lg font-bold">{t("selectCity")}</h3>
        <p className="text-sm text-muted">{t("selectCityBody")}</p>
      </aside>
    );
  }

  const sites = lang === "zh" ? city.sitesZh : city.sites;

  return (
    <article className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">{city.province}</span>
          <h3 className="text-2xl font-bold leading-tight">{lang === "zh" ? city.zh : city.name}</h3>
          <p className="text-sm text-muted">{lang === "zh" ? city.name : city.zh}</p>
        </div>
        <span className="rounded-full bg-paper px-3 py-1 text-xs font-bold text-muted">
          {statusLabels[lang][city.status] ?? city.status}
        </span>
      </header>

      <section className="rounded-lg bg-paper p-4">
        <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("startHere")}</span>
        <h4 className="text-lg font-bold">{lang === "zh" ? city.museumZh || city.museum : city.museum}</h4>
        <p className="mt-1 text-sm leading-relaxed">
          {lang === "zh" ? city.museumRoleZh || city.museumRole : city.museumRole}
        </p>
      </section>

      <dl className="grid grid-cols-2 gap-3 text-sm">
        <Stat label={t("pageViews")} value={formatNumber(views)} />
        <Stat label={t("visitorNotes")} value={formatNumber(city.notes)} />
        <Stat label={t("lastVerified")} value={city.verified} />
        <Stat label={t("englishAccess")} value={accessLabels[lang][city.access] ?? city.access} />
      </dl>

      <section className="flex flex-col gap-1">
        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("historicalIdentity")}</h4>
        <p className="text-sm leading-relaxed">{lang === "zh" ? city.historyZh || city.history : city.history}</p>
      </section>

      <section className="flex flex-col gap-1">
        <h4 className="text-xs font-bold uppercase tracking-widest text-muted">{t("thenExplore")}</h4>
        <ul className="grid list-inside list-disc gap-1 text-sm">
          {sites.map((site) => (
            <li key={site}>{site}</li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-line pt-3 text-xs text-muted">
        <strong className="block text-ink">{t("sourcePolicy")}</strong>
        <p className="mt-1">{t("sourcePolicyBody")}</p>
        <button
          type="button"
          onClick={() => selectCity(null)}
          className="mt-3 text-xs font-bold uppercase tracking-wider text-jade hover:underline"
        >
          {t("close")}
        </button>
      </footer>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-paper p-3">
      <dt className="text-xs font-bold uppercase tracking-widest text-muted">{label}</dt>
      <dd className="mt-1 text-base font-bold">{value}</dd>
    </div>
  );
}
