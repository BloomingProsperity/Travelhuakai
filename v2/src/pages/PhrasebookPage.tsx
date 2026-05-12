import { useState } from "react";
import { Link } from "react-router";
import clsx from "clsx";
import { phraseCategories, phrasebookTotal, type Phrase } from "../data/phrasebook";
import { useLang } from "../store/language";

const defaultCategory = phraseCategories[0];

function copyText(text: string): Promise<void> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }

  return new Promise((resolve, reject) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-1000px";
    document.body.appendChild(textarea);
    textarea.select();

    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);

    if (copied) {
      resolve();
      return;
    }
    reject(new Error("Copy failed"));
  });
}

export default function PhrasebookPage() {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const [activeKey, setActiveKey] = useState(defaultCategory.key);
  const [copiedZh, setCopiedZh] = useState<string | null>(null);
  const [speakingZh, setSpeakingZh] = useState<string | null>(null);
  const activeCategory = phraseCategories.find((category) => category.key === activeKey) ?? defaultCategory;

  async function handleCopy(phrase: Phrase) {
    try {
      await copyText(phrase.zh);
      setCopiedZh(phrase.zh);
      window.setTimeout(() => {
        setCopiedZh((current) => (current === phrase.zh ? null : current));
      }, 1400);
    } catch {
      setCopiedZh(null);
    }
  }

  function handleSpeak(phrase: Phrase) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(phrase.zh);
    utterance.lang = "zh-CN";
    utterance.rate = 0.85;
    utterance.onstart = () => setSpeakingZh(phrase.zh);
    const clearIfActive = () =>
      setSpeakingZh((current) => (current === phrase.zh ? null : current));
    utterance.onend = clearIfActive;
    utterance.onerror = clearIfActive;
    window.speechSynthesis.speak(utterance);
  }

  return (
    <main id="top" className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:py-10">
      <header className="flex flex-col gap-3">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
          {isZh ? "← 返回首页" : "← Home"}
        </Link>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            Essential phrases / 应急短语
          </span>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            Essential Phrasebook / 应急短语手册
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            English, pinyin, and Chinese for taxis, hotels, food, payments, shopping, and emergencies. / 覆盖打车、住宿、点餐、支付、购物和紧急情况。
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-jade">
            {phrasebookTotal} phrases / {phrasebookTotal} 句
          </p>
        </div>
      </header>

      <section className="flex flex-col gap-4" aria-label="Phrase categories">
        <div
          role="tablist"
          aria-label="Phrase categories / 短语场景"
          className="flex gap-2 overflow-x-auto pb-1"
        >
          {phraseCategories.map((category) => {
            const active = category.key === activeCategory.key;
            return (
              <button
                key={category.key}
                id={`phrasebook-tab-${category.key}`}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls={`phrasebook-panel-${category.key}`}
                onClick={() => setActiveKey(category.key)}
                className={clsx(
                  "flex min-w-36 shrink-0 flex-col gap-1 rounded-lg border px-3 py-2 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
                  active
                    ? "border-ink bg-ink text-white shadow-sm"
                    : "border-line bg-white text-ink hover:border-jade"
                )}
              >
                <span className={clsx("text-[10px] font-bold uppercase tracking-widest", active ? "text-white/70" : "text-muted")}>
                  {category.iconHint}
                </span>
                <span className="text-sm font-bold leading-tight">{category.titleEn}</span>
                <span className={clsx("text-xs leading-tight", active ? "text-white/80" : "text-muted")}>
                  {category.titleZh} · {category.phrases.length}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id={`phrasebook-panel-${activeCategory.key}`}
          role="tabpanel"
          aria-labelledby={`phrasebook-tab-${activeCategory.key}`}
          className="flex flex-col gap-3"
        >
          <header className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-2">
            <div>
              <h2 className="text-2xl font-bold leading-tight">
                {activeCategory.titleEn} / {activeCategory.titleZh}
              </h2>
              <p className="text-xs text-muted">
                {activeCategory.phrases.length} phrases / {activeCategory.phrases.length} 句
              </p>
            </div>
          </header>

          <ul className="grid gap-3">
            {activeCategory.phrases.map((phrase) => {
              const copied = copiedZh === phrase.zh;
              const speaking = speakingZh === phrase.zh;
              return (
                <li key={`${activeCategory.key}-${phrase.zh}`}>
                  <article className="grid gap-3 rounded-lg border border-line bg-white p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                    <div className="min-w-0">
                      <p className="break-words text-base font-bold leading-snug">{phrase.en}</p>
                      <p className="mt-1 break-words text-sm font-semibold leading-snug text-jade">
                        {phrase.pinyin}
                      </p>
                      <p className="mt-1 break-words text-lg font-bold leading-snug">{phrase.zh}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        aria-label={isZh ? `朗读: ${phrase.zh}` : `Speak Chinese phrase: ${phrase.zh}`}
                        aria-pressed={speaking}
                        onClick={() => handleSpeak(phrase)}
                        className={clsx(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
                          speaking
                            ? "border-jade bg-jade text-white"
                            : "border-line bg-paper text-ink hover:border-jade hover:bg-jade-soft"
                        )}
                      >
                        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
                          <path
                            d="M4 8h2.5l4-3v10l-4-3H4V8z"
                            fill="currentColor"
                          />
                          <path
                            d="M13.5 7.5c0.83 0.83 0.83 4.17 0 5M15.5 5.5c1.83 1.83 1.83 7.17 0 9"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        aria-label={`Copy Chinese phrase: ${phrase.zh}`}
                        onClick={() => {
                          void handleCopy(phrase);
                        }}
                        className={clsx(
                          "h-10 rounded-lg border px-4 text-xs font-bold uppercase tracking-widest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade",
                          copied
                            ? "border-jade bg-jade text-white"
                            : "border-line bg-paper text-ink hover:border-jade hover:bg-jade-soft"
                        )}
                      >
                        {copied ? (isZh ? "已复制" : "Copied") : isZh ? "复制" : "Copy"}
                      </button>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
