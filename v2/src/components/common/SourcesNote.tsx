import { Link } from "react-router";
import { useLang } from "../../store/language";

export default function SourcesNote() {
  const { lang } = useLang();
  const isZh = lang === "zh";
  return (
    <p className="mt-6 border-t border-line pt-4 text-xs text-muted">
      {isZh ? (
        <>
          本页所有数字、政策、地址均引自官方公开来源，包括中国政府、城市机构与 NOAA/WMO 气候常值；实际注意事项引自外籍游客旅行社区博客，每条标注作者与日期。
          <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
            查看全部信息来源 →
          </Link>
        </>
      ) : (
        <>
          Every figure, policy, and address on this page is cited from official public sources, including Chinese government, city agencies, and NOAA/WMO climate normals. Practical pitfalls are cited from traveler community blogs, each shown with author and date.
          <Link to="/sources" className="ml-1 font-bold text-jade hover:underline">
            See all references →
          </Link>
        </>
      )}
    </p>
  );
}
