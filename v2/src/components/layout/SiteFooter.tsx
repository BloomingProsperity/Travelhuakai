import { Link } from "react-router-dom";
import { useLang } from "../../store/language";

export default function SiteFooter() {
  const { t, lang } = useLang();
  const isZh = lang === "zh";
  return (
    <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>{t("footerNote")}</p>
      <div className="flex items-center gap-4">
        <Link to="/sources" className="hover:text-jade">
          {isZh ? "信息来源" : "References"}
        </Link>
        <a href="#top" className="hover:text-jade">{t("backToTop")}</a>
      </div>
    </footer>
  );
}
