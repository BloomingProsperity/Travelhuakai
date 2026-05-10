import { getSource, type SourceCitation } from "../../data/sources";
import { useLang } from "../../store/language";

type Props = { ids: string[] };

export default function PageSources({ ids }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";

  const sources = Array.from(new Set(ids))
    .map((id) => getSource(id))
    .filter((s): s is SourceCitation => Boolean(s));

  if (sources.length === 0) return null;

  return (
    <footer className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
      <header>
        <span className="text-xs font-bold uppercase tracking-widest text-muted">
          {isZh ? "信息来源" : "Sources"}
        </span>
        <p className="text-xs text-muted">
          {isZh
            ? "本页所有信息均引自下列官方公开来源；点击查看原文。"
            : "Every fact on this page is cited to one of the official sources below. Click to read the originals."}
        </p>
      </header>
      <ol className="grid gap-1.5 text-xs leading-relaxed">
        {sources.map((s, i) => (
          <li key={s.id} className="flex gap-2">
            <span className="shrink-0 tabular-nums text-muted">[{i + 1}]</span>
            <a
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-ink hover:text-jade hover:underline"
            >
              {s.community && (
                <span className="mr-1.5 inline-block rounded-sm bg-amber-100 px-1 py-px text-[9px] font-bold uppercase tracking-wider text-amber-800 align-middle">
                  blog
                </span>
              )}
              <span className="font-bold">{s.publisher}</span>
              <span className="text-muted"> · {s.pageTitleEn}</span>
              {s.publishedDate && <span className="text-muted"> · {s.publishedDate}</span>}
              <span className="ml-1 text-muted/60">— {s.domain}</span>
            </a>
          </li>
        ))}
      </ol>
    </footer>
  );
}
