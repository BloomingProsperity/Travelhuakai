import { Link } from "react-router";
import { useLang } from "../../store/language";

export default function SourcesNote() {
  const { lang } = useLang();
  const isZh = lang === "zh";
  return (
    <p className="mt-6 border-t border-line pt-4 text-xs text-muted">
      {isZh ? (
        <>
          本页所有数字、政策、地址均引自中国政府官方公开来源；实操坑点引自老外旅行社区博客，每条标注作者与日期。
          <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
            查看全部信息来源 →
          </Link>
        </>
      ) : (
        <>
          Every figure, policy, and address on this page is cited from official Chinese government sources. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
          <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
            See all references →
          </Link>
        </>
      )}
    </p>
  );
}
