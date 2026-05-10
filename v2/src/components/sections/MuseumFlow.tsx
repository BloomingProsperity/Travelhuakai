import { useLang } from "../../store/language";

const STEPS = [
  { titleKey: "flowOneTitle", bodyKey: "flowOneBody" },
  { titleKey: "flowTwoTitle", bodyKey: "flowTwoBody" },
  { titleKey: "flowThreeTitle", bodyKey: "flowThreeBody" },
  { titleKey: "flowFourTitle", bodyKey: "flowFourBody" }
];

export default function MuseumFlow() {
  const { t } = useLang();
  return (
    <section id="museums" className="flex flex-col gap-4">
      <header>
        <h2 className="text-2xl font-bold">{t("museumTitle")}</h2>
        <p className="text-sm text-muted">{t("museumBody")}</p>
      </header>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <li key={step.titleKey} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-bold text-white">{i + 1}</span>
            <h3 className="text-base font-bold">{t(step.titleKey)}</h3>
            <p className="text-sm text-muted">{t(step.bodyKey)}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
