import { useLang } from "../../store/language";

const TAGS_EN = ["Non-commercial", "No ads", "Official sources cited", "Community tips attributed"];
const TAGS_ZH = ["非商业", "无广告", "官方源出处", "社区经验注明来源"];

export default function HeroIntro() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  return (
    <section aria-label={isZh ? "网站简介" : "Site intro"} className="flex flex-col gap-3">
      <span className="text-xs font-bold uppercase tracking-widest text-jade">
        {isZh ? "面向外国旅客的中国实用指南" : "A practical guide for foreign visitors to China"}
      </span>
      <h1 className="text-3xl font-bold leading-tight md:text-4xl">
        {isZh
          ? "出行前先把规则、支付、交通和应急理清楚。"
          : "Sort out the rules, payments, transport and emergencies before you fly."}
      </h1>
      <p className="max-w-3xl text-sm leading-relaxed text-ink/85 md:text-base">
        {isZh
          ? "覆盖 4 个城市（北京 · 上海 · 广州 · 深圳）和 5 项支柱（入境签证、支付、交通、餐饮、紧急）。每条政策答案都附官方出处，每条操作经验都标注来源。"
          : "Four cities (Beijing · Shanghai · Guangzhou · Shenzhen) and five pillars: entry & visa, payments, transport, food, emergencies. Every policy answer cites an official source; every operational tip lists where it came from."}
      </p>
      <ul className="flex flex-wrap gap-2 pt-1">
        {(isZh ? TAGS_ZH : TAGS_EN).map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
}
