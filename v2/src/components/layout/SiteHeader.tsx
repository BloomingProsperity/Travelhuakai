import { Link, NavLink } from "react-router-dom";
import { CITY_LABELS, type CityId } from "../../data/transport";
import { useLang } from "../../store/language";
import LanguageSwitch from "./LanguageSwitch";
import PlaceSearch from "../search/PlaceSearch";

const CITY_IDS: CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];

const SECONDARY = [
  { path: "/ask", en: "Ask", zh: "提问" },
  { path: "/share", en: "Share", zh: "分享" }
];

const navClass = ({ isActive }: { isActive: boolean }) =>
  `shrink-0 rounded-full px-3 py-1 font-bold transition ${
    isActive ? "bg-ink text-white" : "text-ink/80 hover:bg-jade-soft hover:text-jade"
  }`;

export default function SiteHeader() {
  const { lang, t } = useLang();
  const isZh = lang === "zh";
  return (
    <header className="sticky top-0 z-30 flex flex-col gap-3 border-b border-line bg-paper/85 px-4 py-3 backdrop-blur lg:flex-row lg:items-center">
      <Link to="/" className="flex shrink-0 items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-white">中</span>
        <span className="leading-tight">
          <strong className="block text-base font-bold">China Atlas</strong>
          <small className="block text-xs text-muted">{t("brandSubtitle")}</small>
        </span>
      </Link>

      <nav className="-mx-1 flex flex-1 items-center gap-1 overflow-x-auto pb-1 text-sm lg:overflow-visible lg:pb-0">
        {CITY_IDS.map((id) => (
          <NavLink key={id} to={`/city/${id}`} className={navClass}>
            {isZh ? CITY_LABELS[id].zh : CITY_LABELS[id].en}
          </NavLink>
        ))}
        <span className="mx-1 h-4 w-px bg-line" aria-hidden />
        {SECONDARY.map((item) => (
          <NavLink key={item.path} to={item.path} className={navClass}>
            {isZh ? item.zh : item.en}
          </NavLink>
        ))}
      </nav>

      <div className="flex shrink-0 items-center gap-3">
        <div className="hidden md:block md:w-72">
          <PlaceSearch />
        </div>
        <LanguageSwitch />
      </div>
    </header>
  );
}
