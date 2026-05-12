import { Link } from "react-router";
import HeroMap from "../components/map/HeroMap";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { attractionsByCity, type Attraction } from "../data/city-attractions";
import { CITY_LABELS, type CityId } from "../data/transport";
import { absoluteUrl, breadcrumbListJsonLd, SITE_URL, stringifyJsonLd } from "../lib/jsonLd";
import { unsplashSrcSet } from "../lib/unsplash";
import { useLang } from "../store/language";

const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];

const guideLinks = [
  { to: "/guide/entry", en: "Entry & visa", zh: "入境签证" },
  { to: "/guide/payments", en: "Payments", zh: "支付准备" },
  { to: "/plan", en: "3-day plan", zh: "3 天行程" },
  { to: "/guide/notes", en: "Travel notes", zh: "出行注意事项" },
  { to: "/phrasebook", en: "Essential phrases", zh: "应急短语" }
];

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: [
    { "@language": "en", "@value": "Travel China" },
    { "@language": "zh-CN", "@value": "旅行中国" }
  ],
  url: absoluteUrl("/"),
  inLanguage: ["en", "zh-CN"],
  description: [
    {
      "@language": "en",
      "@value":
        "Practical China travel guide for foreign visitors, covering major cities, landmark attractions, maps, entry, payments, transport, food, and travel notes."
    },
    {
      "@language": "zh-CN",
      "@value": "面向外国游客的中国旅行指南，覆盖城市、景点、地图、入境、支付、交通、餐饮和出行注意事项。"
    }
  ],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

const homeBreadcrumbJsonLd = breadcrumbListJsonLd([{ name: "Home", path: "/" }]);

function pickCityPhoto(cityId: CityId): Attraction {
  return attractionsByCity(cityId)[0];
}

export default function HomePage() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeBreadcrumbJsonLd) }}
      />
      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
      <header>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          {isZh ? "欢迎来到中国" : "Welcome to China"}
        </h1>
      </header>

      <HeroMap />

      <section aria-label={isZh ? "出行功能入口" : "Travel guide links"} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {guideLinks.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="group block"
          >
            <Card className="min-h-20 gap-0 rounded-lg border-line bg-card py-0 transition group-hover:border-jade group-hover:shadow-sm">
              <CardContent className="flex min-h-20 items-center justify-between gap-3 px-4 py-3">
            <span className="text-base font-bold">{isZh ? item.zh : item.en}</span>
            <span className="text-xl text-muted-foreground transition group-hover:translate-x-1 group-hover:text-jade" aria-hidden>
              →
            </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>

      <section aria-label={isZh ? "旅游城市" : "Cities"} className="flex flex-col gap-3">
        <header className="flex items-end justify-between">
          <h2 className="text-xl font-bold">{isZh ? "城市详情" : "City pages"}</h2>
          <span className="text-xs text-muted">{isZh ? "点击进入" : "Tap to enter"}</span>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CITY_IDS.map((cityId) => (
            <CityPhotoCard key={cityId} cityId={cityId} attraction={pickCityPhoto(cityId)} isZh={isZh} />
          ))}
        </div>
      </section>
      </main>
    </>
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
      className="group block"
    >
      <Card className="relative min-h-[220px] overflow-hidden rounded-lg border-line bg-ink py-0 text-white shadow-sm">
      <img
        src={attraction.imageUrl}
        srcSet={unsplashSrcSet(attraction.imageUrl)}
        sizes="(min-width: 768px) 50vw, 100vw"
        alt={isZh ? attraction.nameZh : attraction.nameEn}
        loading={cityId === "beijing" ? "eager" : "lazy"}
        fetchPriority={cityId === "beijing" ? "high" : "auto"}
        decoding="async"
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
        onError={(event) => {
          event.currentTarget.style.opacity = "0";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
      <CardContent className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
        <Badge className="w-fit border-white/15 bg-black/35 text-white/80 hover:bg-black/35">
          {isZh ? city.zh : city.en}
        </Badge>
        <strong className="block max-w-full break-words text-xl leading-tight text-white drop-shadow-sm sm:text-2xl">
          {isZh ? attraction.nameZh : attraction.nameEn}
        </strong>
        <span className="text-xs text-white/75">{isZh ? attraction.districtZh : attraction.districtEn}</span>
      </CardContent>
      </Card>
    </Link>
  );
}
