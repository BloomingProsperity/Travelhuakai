import { useState } from "react";
import clsx from "clsx";
import { topQuestions } from "../../data/top-questions";
import { useLang } from "../../store/language";

export default function TopQuestions() {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const [openId, setOpenId] = useState<string | null>(topQuestions[0].id);

  return (
    <section id="top-questions" className="flex flex-col gap-3">
      <header>
        <span className="text-xs font-bold uppercase tracking-widest text-muted">
          {isZh ? "出行前最关心的问题" : "Pre-arrival FAQ"}
        </span>
        <h2 className="text-2xl font-bold">
          {isZh ? "最常被问到的问题" : "Top questions before you fly"}
        </h2>
        <p className="text-sm text-muted">
          {isZh ? "答案全部引自官方源；点开看详情和链接。" : "Every answer cites an official source. Tap to expand."}
        </p>
      </header>

      <ul className="flex flex-col gap-2">
        {topQuestions.map((q) => {
          const open = openId === q.id;
          return (
            <li key={q.id} className="rounded-xl border border-line bg-white">
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : q.id)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
              >
                <strong className="text-sm leading-tight">
                  {isZh ? q.questionZh : q.questionEn}
                </strong>
                <span
                  className={clsx(
                    "shrink-0 text-xl text-muted transition-transform",
                    open && "rotate-45"
                  )}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {open && (
                <div className="border-t border-line px-4 py-3">
                  <p className="text-sm leading-relaxed">{isZh ? q.answerZh : q.answerEn}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
