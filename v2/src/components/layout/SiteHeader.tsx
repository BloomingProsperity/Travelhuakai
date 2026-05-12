import { Link } from "react-router";
import LanguageSwitch from "./LanguageSwitch";
import { useLang } from "../../store/language";

export default function SiteHeader() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  return (
    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
      </Link>
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <nav aria-label={isZh ? "主导航" : "Main navigation"}>
          <Link
            to="/phrasebook"
            className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted transition hover:border-jade hover:text-jade"
          >
            {isZh ? "应急短语" : "Phrases"}
          </Link>
        </nav>
        <LanguageSwitch />
      </div>
    </header>
  );
}
