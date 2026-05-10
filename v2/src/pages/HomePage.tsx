import HeroMap from "../components/map/HeroMap";
import TravelAlerts from "../components/policy/TravelAlerts";
import VisaChecker from "../components/pillar/VisaChecker";
import TopQuestions from "../components/sections/TopQuestions";
import SourcesNote from "../components/common/SourcesNote";

export default function HomePage() {
  return (
    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10">
      <HeroMap />
      <TravelAlerts />
      <VisaChecker />
      <TopQuestions />
      <SourcesNote />
    </main>
  );
}
