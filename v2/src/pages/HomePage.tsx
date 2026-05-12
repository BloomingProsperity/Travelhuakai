import HeroIntro from "../components/home/HeroIntro";
import CityPicker from "../components/home/CityPicker";
import HeroMap from "../components/map/HeroMap";
import TravelAlerts from "../components/policy/TravelAlerts";
import VisaChecker from "../components/pillar/VisaChecker";
import TopQuestions from "../components/sections/TopQuestions";

export default function HomePage() {
  return (
    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10">
      <HeroIntro />
      <HeroMap />
      <CityPicker />
      <TravelAlerts />
      <VisaChecker compact />
      <TopQuestions />
    </main>
  );
}
