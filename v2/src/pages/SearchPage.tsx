import { useDeferredValue, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { buildSearchIndex, type SearchIndexEntry } from "../lib/search";
import { useLang } from "../store/language";

const searchEntries = buildSearchIndex();

const TYPE_ORDER: SearchIndexEntry["type"][] = ["attraction", "phrase", "faq", "pitfall", "visa"];

const TYPE_LABELS: Record<SearchIndexEntry["type"], { en: string; zh: string }> = {
  attraction: { en: "Attractions", zh: "景点" },
  phrase: { en: "Phrasebook", zh: "短语" },
  faq: { en: "FAQ", zh: "常见问题" },
  pitfall: { en: "Pitfalls", zh: "避坑提醒" },
  visa: { en: "Visa rules", zh: "签证规则" }
};

const normalizeSearchValue = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();

const compact = (value: string): string => normalizeSearchValue(value).replace(/\s+/g, "");

const isSubsequence = (needle: string, haystack: string): boolean => {
  if (!needle) return true;
  let index = 0;
  for (const char of haystack) {
    if (char === needle[index]) index += 1;
    if (index === needle.length) return true;
  }
  return false;
};

const matchScore = (entry: SearchIndexEntry, query: string): number => {
  const normalizedQuery = normalizeSearchValue(query);
  if (!normalizedQuery) return 1;

  const fields = [entry.titleEn, entry.titleZh, entry.snippetEn, entry.snippetZh];
  const haystack = normalizeSearchValue(fields.join(" "));
  const compactQuery = normalizedQuery.replace(/\s+/g, "");
  const compactHaystack = compact(fields.join(" "));
  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

  if (haystack === normalizedQuery || compactHaystack === compactQuery) return 100;
  if (haystack.startsWith(normalizedQuery) || compactHaystack.startsWith(compactQuery)) return 75;
  if (haystack.includes(normalizedQuery) || compactHaystack.includes(compactQuery)) return 50;
  if (tokens.every((token) => haystack.includes(token) || isSubsequence(token, compactHaystack))) return 25;
  if (isSubsequence(compactQuery, compactHaystack)) return 10;
  return 0;
};

export default function SearchPage() {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const deferredQuery = useDeferredValue(query);

  const matches = useMemo(
    () =>
      searchEntries
        .map((entry) => ({ entry, score: matchScore(entry, deferredQuery) }))
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .map(({ entry }) => entry),
    [deferredQuery]
  );

  const grouped = useMemo(
    () =>
      TYPE_ORDER.map((type) => ({
        type,
        items: matches.filter((entry) => entry.type === type)
      })).filter((group) => group.items.length > 0),
    [matches]
  );

  const handleQueryChange = (nextQuery: string) => {
    setQuery(nextQuery);
    setSearchParams(nextQuery ? { q: nextQuery } : {}, { replace: true });
  };

  return (
    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 pt-8 pb-28 sm:pt-10 lg:pb-10">
      <header className="flex flex-col gap-2">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary">
          {isZh ? "← 返回首页" : "← Home"}
        </Link>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          {isZh ? "全站搜索" : "Site search"}
        </h1>
      </header>

      <section className="flex flex-col gap-3" aria-label={isZh ? "搜索输入" : "Search input"}>
        <label htmlFor="site-search" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {isZh ? "关键词" : "Keywords"}
        </label>
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-card-foreground shadow-sm focus-within:border-primary">
          <span className="text-lg text-muted-foreground" aria-hidden>
            ⌕
          </span>
          <input
            id="site-search"
            type="search"
            value={query}
            onChange={(event) => handleQueryChange(event.currentTarget.value)}
            placeholder={isZh ? "搜城市、景点、支付、过境免签、应急短语..." : "Search cities, attractions, payments, transit visa, emergency phrases..."}
            className="min-h-10 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
            autoComplete="off"
          />
        </div>
        <p className="text-xs text-muted-foreground">
          {isZh ? `${matches.length} 条匹配` : `${matches.length} matches`}
        </p>
      </section>

      {grouped.length > 0 ? (
        <div className="flex flex-col gap-6">
          {grouped.map((group) => (
            <section key={group.type} className="flex flex-col gap-3">
              <header className="flex items-end justify-between gap-3 border-b border-border pb-2">
                <h2 className="text-xl font-bold leading-tight">
                  {isZh ? TYPE_LABELS[group.type].zh : TYPE_LABELS[group.type].en}
                </h2>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {group.items.length}
                </span>
              </header>
              <ul className="grid gap-3">
                {group.items.map((entry) => (
                  <li key={entry.id}>
                    <Link
                      to={entry.href}
                      className="group block rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm transition hover:border-primary hover:shadow-md"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        {isZh ? TYPE_LABELS[entry.type].zh : TYPE_LABELS[entry.type].en}
                      </span>
                      <h3 className="mt-1 break-words text-base font-bold leading-tight group-hover:text-primary">
                        {isZh ? entry.titleZh : entry.titleEn}
                      </h3>
                      <p className="mt-2 line-clamp-3 break-words text-sm leading-relaxed text-muted-foreground">
                        {isZh ? entry.snippetZh : entry.snippetEn}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-dashed border-border bg-card p-5 text-sm text-muted-foreground">
          {isZh ? "没找到。" : "No matches."}
        </p>
      )}
    </main>
  );
}
