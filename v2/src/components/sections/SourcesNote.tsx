import { useLang } from "../../store/language";

const RULES = ["ruleOne", "ruleTwo", "ruleThree", "ruleFour"];

export default function SourcesNote() {
  const { t } = useLang();
  return (
    <section id="sources" className="flex flex-col gap-4 rounded-xl border border-line bg-white p-6">
      <header>
        <h2 className="text-2xl font-bold">{t("sourcesTitle")}</h2>
        <p className="text-sm text-muted">{t("sourcesBody")}</p>
      </header>
      <ul className="grid list-inside list-disc gap-1 text-sm">
        {RULES.map((key) => (
          <li key={key}>{t(key)}</li>
        ))}
      </ul>
    </section>
  );
}
