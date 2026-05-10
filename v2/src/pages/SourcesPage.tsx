import { Link } from "react-router-dom";
import { sources } from "../data/sources";
import { useLang } from "../store/language";

export default function SourcesPage() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  const all = Object.values(sources);
  const official = all.filter((s) => !s.community);
  const community = all.filter((s) => s.community);

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-12">
      <header className="flex flex-col gap-3">
        <span className="self-start text-xs font-bold uppercase tracking-widest text-muted">
          {isZh ? "信息来源汇总" : "Reference list"}
        </span>
        <h1 className="text-3xl font-bold leading-tight">
          {isZh ? "全部引用源" : "All references"}
        </h1>
        <p className="text-sm leading-relaxed text-muted">
          {isZh
            ? `本网站全部数据均来自下列 ${all.length} 个公开来源。其中 ${official.length} 条来自政府或机构官方网站，${community.length} 条来自旅行社区博客 / 论坛 / 老外住华博主，用于补充官方源不公开的实操坑。每条都带域名 + 出版日期 + 我们最近一次核验日期，可直接点击查看原文。`
            : `Every fact on this site traces to one of the ${all.length} sources below. ${official.length} come from official government and institutional websites; ${community.length} come from traveler community blogs and forums covering practical pitfalls that official sources do not publish. Each entry shows the domain, the publication date, and our last verification date — click to read the original.`}
        </p>
      </header>

      <Section
        titleEn={`Official sources (${official.length})`}
        titleZh={`官方源（${official.length} 条）`}
        descEn="Chinese government bodies, central ministries, city governments, hospitals, banks, payment networks, foreign embassies in China."
        descZh="中国政府部委、城市政府、医院、银行、支付组织、外国驻华使领馆。"
      >
        <ReferenceList items={official} isZh={isZh} />
      </Section>

      <Section
        titleEn={`Traveler community references (${community.length})`}
        titleZh={`旅行社区资料（${community.length} 条）`}
        descEn="Foreign travel bloggers, expat publications, Reddit threads and similar. Used only for operational pitfalls that .gov.cn does not publish; never used as authority for policy facts, prices, addresses, or hours."
        descZh="境外旅行博主、老外住华媒体、Reddit 等。仅用于政府不公开的实操坑；政策、价格、地址、营业时间不引用社区源。"
      >
        <ReferenceList items={community} isZh={isZh} />
      </Section>

      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
        {isZh ? "← 返回首页" : "← Back home"}
      </Link>
    </main>
  );
}

function Section({
  titleEn,
  titleZh,
  descEn,
  descZh,
  children
}: {
  titleEn: string;
  titleZh: string;
  descEn: string;
  descZh: string;
  children: React.ReactNode;
}) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  return (
    <section className="flex flex-col gap-3">
      <header>
        <h2 className="text-xl font-bold">{isZh ? titleZh : titleEn}</h2>
        <p className="text-xs text-muted">{isZh ? descZh : descEn}</p>
      </header>
      {children}
    </section>
  );
}

type Item = {
  id: string;
  url: string;
  publisher: string;
  pageTitleEn: string;
  publishedDate?: string;
  verifiedDate: string;
  domain: string;
};

function ReferenceList({ items, isZh }: { items: Item[]; isZh: boolean }) {
  const sorted = [...items].sort((a, b) => a.publisher.localeCompare(b.publisher));
  return (
    <ol className="grid gap-1.5 text-sm leading-relaxed">
      {sorted.map((s, i) => (
        <li key={s.id} className="flex gap-2">
          <span className="shrink-0 tabular-nums text-muted">[{i + 1}]</span>
          <a
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-ink hover:text-jade hover:underline"
          >
            <span className="font-bold">{s.publisher}</span>
            <span className="text-muted"> · {s.pageTitleEn}</span>
            {s.publishedDate && <span className="text-muted"> · {s.publishedDate}</span>}
            <span className="ml-1 text-xs text-muted/70">— {s.domain}</span>
            <span className="ml-2 text-[10px] uppercase tracking-wider text-muted/70">
              {isZh ? `核验 ${s.verifiedDate}` : `verified ${s.verifiedDate}`}
            </span>
          </a>
        </li>
      ))}
    </ol>
  );
}
