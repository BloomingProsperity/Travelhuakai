import { Link } from "react-router";
import { sources } from "../data/sources";
import { useLang } from "../store/language";

export default function SourcesPage() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  const entries = Object.values(sources);
  const official = entries.filter((s) => !s.community);
  const community = entries.filter((s) => s.community);

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-12">
      <header className="flex flex-col gap-3">
        <span className="self-start text-xs font-bold uppercase tracking-widest text-muted">
          {isZh ? "信息来源汇总" : "Reference list"}
        </span>
        <h1 className="text-3xl font-bold leading-tight">
          {isZh ? "全部引用源" : "All references"}
        </h1>
      </header>

      <Section
        titleEn={`Official sources (${official.length})`}
        titleZh={`官方源（${official.length} 条）`}
      >
        <ReferenceList items={official} isZh={isZh} />
      </Section>

      <Section
        titleEn={`Traveler community references (${community.length})`}
        titleZh={`旅行社区资料（${community.length} 条）`}
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
  children
}: {
  titleEn: string;
  titleZh: string;
  children: React.ReactNode;
}) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  return (
    <section className="flex flex-col gap-3">
      <header>
        <h2 className="text-xl font-bold">{isZh ? titleZh : titleEn}</h2>
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
