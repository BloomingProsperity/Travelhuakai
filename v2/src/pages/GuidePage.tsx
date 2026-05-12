import { Link, useParams } from "react-router";
import TravelAlerts from "../components/policy/TravelAlerts";
import VisaChecker from "../components/pillar/VisaChecker";
import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
import TopQuestions from "../components/sections/TopQuestions";
import SourcesNote from "../components/common/SourcesNote";
import { topQuestions } from "../data/top-questions";
import { breadcrumbListJsonLd, stringifyJsonLd } from "../lib/jsonLd";
import { useLang } from "../store/language";

type GuideTopic = "entry" | "payments" | "notes";

const topicLabels: Record<GuideTopic, { en: string; zh: string; bodyEn: string; bodyZh: string }> = {
  entry: {
    en: "Entry & visa",
    zh: "入境签证",
    bodyEn: "Check the entry route first, then continue to city pages for local transport and emergencies.",
    bodyZh: "先确认入境方式，再进入城市页查看本地交通和应急信息。"
  },
  payments: {
    en: "Payments",
    zh: "支付准备",
    bodyEn: "Set up payment before departure and keep a cash backup for small vendors.",
    bodyZh: "出发前完成支付设置，并为小店和临时情况保留现金备选。"
  },
  notes: {
    en: "Travel notes",
    zh: "出行注意事项",
    bodyEn: "Policy changes and common pre-arrival questions are collected here.",
    bodyZh: "这里集中放政策变化和出发前常见问题。"
  }
};

const validTopics = new Set<GuideTopic>(["entry", "payments", "notes"]);

const notesFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: topQuestions.map((question) => ({
    "@type": "Question",
    name: question.questionEn,
    acceptedAnswer: {
      "@type": "Answer",
      text: question.answerEn
    }
  }))
};

const notesBreadcrumbJsonLd = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Guide", path: "/guide/notes" },
  { name: "Travel notes" }
]);

export default function GuidePage() {
  const { topic } = useParams<{ topic: string }>();
  const { lang } = useLang();
  const isZh = lang === "zh";
  const isValid = validTopics.has(topic as GuideTopic);

  if (!isValid) {
    return (
      <main id="top" className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-10">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
          {isZh ? "← 返回首页" : "← Home"}
        </Link>
        <h1 className="text-3xl font-bold">{isZh ? "未知主题" : "Unknown guide topic"}</h1>
        <p className="text-sm text-muted">
          {isZh
            ? `没有 "/guide/${topic}" 这个主题。可用主题：入境签证 / 支付准备 / 出行注意事项。`
            : `No such guide topic at "/guide/${topic}". Available: entry, payments, notes.`}
        </p>
      </main>
    );
  }

  const current = topic as GuideTopic;
  const label = topicLabels[current];

  return (
    <>
      {current === "notes" && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesFaqJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: stringifyJsonLd(notesBreadcrumbJsonLd) }}
          />
        </>
      )}
      <main id="top" className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:py-10">
      <header className="flex flex-col gap-2">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
          {isZh ? "← 返回首页" : "← Home"}
        </Link>
        <h1 className="text-3xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          {isZh ? label.bodyZh : label.bodyEn}
        </p>
      </header>

      {current === "entry" && <VisaChecker />}
      {current === "payments" && <PaymentsChecklist />}
      {current === "notes" && (
        <>
          <TravelAlerts />
          <TopQuestions />
        </>
      )}

      <SourcesNote />
      </main>
    </>
  );
}
