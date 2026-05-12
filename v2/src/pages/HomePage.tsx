import { Link } from "react-router";
import MapPreview from "../components/map/MapPreview";
import { attractionsByCity, type Attraction } from "../data/city-attractions";
import { CITY_LABELS, type CityId } from "../data/transport";
import { useLang } from "../store/language";

const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];

const guideLinks = [
  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" }
];

function pickCityPhoto(cityId: CityId): Attraction {
  return attractionsByCity(cityId)[0];
}

export default function HomePage() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  return (
    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          {isZh ? "欢迎来中国" : "Travel China"}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {isZh
            ? "先从城市和景区照片开始，再进入地图、签证、支付和注意事项。"
            : "Start with city landmark photos, then open the map, visa, payment, and travel-note pages."}
        </p>
        <p className="text-xs text-muted">
          {isZh ? "所有数据均来自中国官方。" : "All data sourced from China's official agencies."}
        </p>
      </header>

      <section aria-label={isZh ? "城市景区照片" : "City attraction photos"} className="grid gap-4 md:grid-cols-2">
        {CITY_IDS.map((cityId) => (
          <CityPhotoCard key={cityId} cityId={cityId} attraction={pickCityPhoto(cityId)} isZh={isZh} />
        ))}
      </section>

      <Link
        to="/map"
        aria-label={isZh ? "打开地标地图" : "Open landmark map"}
        className="group grid overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:border-jade hover:shadow-md lg:grid-cols-[minmax(0,1fr)_420px]"
      >
        <div className="flex min-w-0 flex-col justify-center gap-3 p-5 sm:p-6">
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "地图入口" : "Map"}
          </span>
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
            {isZh ? "地标地图" : "Landmark map"}
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            {isZh
              ? "按省份查看城市、港澳和景区地标，点击后进入 3D 实景地图。"
              : "Browse cities, Hong Kong, Macau, and landmark regions by province, then open the 3D scene."}
          </p>
          <span className="text-sm font-bold text-jade">
            {isZh ? "进入地图 →" : "Open map →"}
          </span>
        </div>
        <div className="h-64 min-w-0 border-t border-line bg-paper/60 p-3 lg:h-auto lg:border-l lg:border-t-0">
          <MapPreview />
        </div>
      </Link>

      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-3">
        {guideLinks.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="group flex min-h-20 items-center justify-between gap-3 rounded-lg border border-line bg-white px-4 py-3 transition hover:border-jade hover:shadow-sm"
          >
            <span className="text-base font-bold">{isZh ? item.zh : item.en}</span>
            <span className="text-xl text-muted transition group-hover:translate-x-1 group-hover:text-jade" aria-hidden>
              →
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}

function CityPhotoCard({
  cityId,
  attraction,
  isZh
}: {
  cityId: CityId;
  attraction: Attraction;
  isZh: boolean;
}) {
  const city = CITY_LABELS[cityId];

  return (
    <Link
      to={`/city/${cityId}`}
      className="group relative min-h-[260px] overflow-hidden rounded-lg border border-line bg-ink text-white shadow-sm"
    >
      <img
        src={attraction.imageUrl}
        alt={isZh ? attraction.nameZh : attraction.nameEn}
        loading={cityId === "beijing" ? "eager" : "lazy"}
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
        onError={(event) => {
          event.currentTarget.style.opacity = "0";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
        <span className="text-sm font-bold text-white/80">{isZh ? city.zh : city.en}</span>
        <strong className="block max-w-full break-words text-xl leading-tight text-white drop-shadow-sm sm:text-2xl">
          {isZh ? attraction.nameZh : attraction.nameEn}
        </strong>
        <span className="text-xs text-white/75">{isZh ? attraction.districtZh : attraction.districtEn}</span>
      </div>
    </Link>
  );
}
