import { Link, useParams } from "react-router";
import { CITY_LABELS, type CityId } from "../data/transport";
import { useLang } from "../store/language";
import VisaChecker from "../components/pillar/VisaChecker";
import PaymentsChecklist from "../components/pillar/PaymentsChecklist";
import TransportGuide from "../components/pillar/TransportGuide";
import FoodGuide from "../components/pillar/FoodGuide";
import EmergencyBriefing from "../components/pillar/EmergencyBriefing";
import CityFurtherReading from "../components/common/CityFurtherReading";
import SourcesNote from "../components/common/SourcesNote";

const VALID_IDS: readonly CityId[] = ["beijing", "shanghai", "guangzhou", "shenzhen"];

export default function CityPage() {
  const { cityId } = useParams<{ cityId: string }>();
  const { lang } = useLang();
  const isZh = lang === "zh";

  if (!cityId || !VALID_IDS.includes(cityId as CityId)) {
    return (
      <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10">
        <h1 className="text-2xl font-bold">{isZh ? "未知城市" : "Unknown city"}</h1>
        <Link to="/" className="text-jade hover:underline">{isZh ? "返回首页" : "← Home"}</Link>
      </main>
    );
  }

  const id = cityId as CityId;
  const label = CITY_LABELS[id];

  return (
    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10">
      <header className="flex flex-col gap-2">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
          {isZh ? "← 全部城市" : "← All cities"}
        </Link>
        <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
        <p className="text-sm text-muted">
          {isZh ? label.en : label.zh}
        </p>
      </header>

      <VisaChecker />
      <PaymentsChecklist cityId={id} />
      <TransportGuide cityId={id} />
      <FoodGuide cityId={id} />
      <EmergencyBriefing cityId={id} />
      <CityFurtherReading cityId={id} />

      <section className="flex flex-col gap-3 rounded-xl border border-dashed border-line bg-paper p-6">
        <h2 className="text-base font-bold">{isZh ? "Phase 2 即将上线" : "Phase 2 — coming soon"}</h2>
        <p className="text-sm text-muted">
          {isZh
            ? "向中国本地用户提问、分享你的旅行经验功能正在开发。"
            : "Ask Chinese locals and share-your-trip features are in development."}
        </p>
        <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest">
          <Link to="/ask" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
            {isZh ? "向中国人提问" : "Ask Chinese locals"}
          </Link>
          <Link to="/share" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
            {isZh ? "分享旅行" : "Share your trip"}
          </Link>
        </div>
      </section>

      <SourcesNote />
    </main>
  );
}
