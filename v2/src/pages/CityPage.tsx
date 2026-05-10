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
import CityNav from "../components/city/CityNav";
import CityIntro from "../components/city/CityIntro";
import CityImagePanel from "../components/city/CityImagePanel";

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
    <main id="top" className="mx-auto max-w-7xl px-4 py-10">
      <header className="mb-6 flex flex-col gap-2">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
          {isZh ? "← 全部城市" : "← All cities"}
        </Link>
        <h1 className="text-4xl font-bold leading-tight">{isZh ? label.zh : label.en}</h1>
        <p className="text-sm text-muted">{isZh ? label.en : label.zh}</p>
      </header>

      <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr_300px]">
        <CityNav />

        <div className="flex min-w-0 flex-col gap-12">
          <CityIntro cityId={id} />
          <section id="visa" className="scroll-mt-24"><VisaChecker /></section>
          <section id="payments" className="scroll-mt-24"><PaymentsChecklist cityId={id} /></section>
          <section id="transport" className="scroll-mt-24"><TransportGuide cityId={id} /></section>
          <section id="food" className="scroll-mt-24"><FoodGuide cityId={id} /></section>
          <section id="emergency" className="scroll-mt-24"><EmergencyBriefing cityId={id} /></section>
          <section id="portals" className="scroll-mt-24"><CityFurtherReading cityId={id} /></section>

          <section className="flex flex-col gap-3 rounded-xl border border-dashed border-line bg-paper p-6">
            <h2 className="text-base font-bold">{isZh ? "Phase 2 即将上线" : "Phase 2 — coming soon"}</h2>
            <p className="text-sm text-muted">
              {isZh
                ? "向中国本地用户提问、分享你的旅行经验功能正在开发。"
                : "Ask Chinese locals and share-your-trip features are in development."}
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest">
              <Link to="/ask" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
                {isZh ? "向中国本地用户提问" : "Ask Chinese locals"}
              </Link>
              <Link to="/share" className="rounded-full bg-white border border-line px-3 py-1 hover:border-jade hover:text-jade">
                {isZh ? "分享旅行" : "Share your trip"}
              </Link>
            </div>
          </section>

          <SourcesNote />
        </div>

        <CityImagePanel cityId={id} />
      </div>
    </main>
  );
}
