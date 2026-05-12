import { Link } from "react-router";
import { useLang } from "../../store/language";

export default function SourcesNote() {
  const { lang } = useLang();
  const isZh = lang === "zh";
  return (
    <p className="mt-6 border-t border-line pt-4 text-xs text-muted">
      <Link to="/sources" className="font-bold text-jade hover:underline">
        {isZh ? "查看全部信息来源 →" : "See all references →"}
      </Link>
    </p>
  );
}
