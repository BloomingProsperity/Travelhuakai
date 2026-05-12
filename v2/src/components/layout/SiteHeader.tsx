import { Link, useNavigate } from "react-router";
import LanguageSwitch from "./LanguageSwitch";
import ThemeSwitch from "./ThemeSwitch";
import { useLang } from "../../store/language";

export default function SiteHeader() {
  const { lang } = useLang();
  const navigate = useNavigate();
  const isZh = lang === "zh";

  return (
    <header className="site-header sticky top-0 z-30 flex flex-wrap items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
      </Link>
      <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-nowrap sm:gap-3">
        <button
          type="button"
          aria-label={isZh ? "打开全站搜索" : "Open site search"}
          onClick={() => navigate("/search")}
          className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-white text-ink transition hover:border-jade hover:text-jade focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m16.5 16.5 4 4" />
          </svg>
        </button>
        <nav aria-label={isZh ? "主导航" : "Main navigation"}>
          <Link
            to="/phrasebook"
            className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted transition hover:border-jade hover:text-jade"
          >
            {isZh ? "应急短语" : "Phrases"}
          </Link>
        </nav>
        <ThemeSwitch />
        <LanguageSwitch />
      </div>
    </header>
  );
}
