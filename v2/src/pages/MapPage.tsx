import { useEffect } from "react";
import { Link } from "react-router";
import HeroMap from "../components/map/HeroMap";
import { useAtlas } from "../store/atlas";
import { useLang } from "../store/language";

export default function MapPage() {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const { reset } = useAtlas();

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <main id="top" className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:py-10">
      <header className="flex flex-col gap-2">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-jade">
          {isZh ? "← 返回首页" : "← Home"}
        </Link>
        <h1 className="text-3xl font-bold leading-tight">{isZh ? "地标地图" : "Landmark map"}</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          {isZh ? "点击省份进入 3D 实景地图；港澳使用独立标记，3D 内包含城市和景区标注。" : "Click a province to open the 3D scene; Hong Kong and Macau use separate markers, with city and attraction labels inside 3D."}
        </p>
      </header>

      <HeroMap />
    </main>
  );
}
