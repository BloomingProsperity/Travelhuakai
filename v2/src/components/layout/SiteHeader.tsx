import { Link } from "react-router";
import LanguageSwitch from "./LanguageSwitch";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 overflow-hidden border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
      <Link to="/" className="flex min-w-0 shrink items-center gap-2">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-white">旅</span>
        <strong className="truncate text-xl font-bold leading-none">旅行中国</strong>
      </Link>
      <LanguageSwitch />
    </header>
  );
}
