import clsx from "clsx";
import { useTheme, type Theme } from "../../store/ThemeProvider";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.99 12.82A8.5 8.5 0 1 1 11.18 3.01 6.6 6.6 0 0 0 20.99 12.82Z" />
    </svg>
  );
}

function AutoIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1.75v1.5" />
      <path d="M8 12.75v1.5" />
      <path d="M1.75 8h1.5" />
      <path d="M12.75 8h1.5" />
      <path d="M16.5 10.5a6 6 0 1 0 7 7 4.75 4.75 0 0 1-7-7Z" transform="translate(-2 -2)" />
    </svg>
  );
}

const OPTIONS = [
  { value: "light", label: "Light", ariaLabel: "Use light theme", Icon: SunIcon },
  { value: "dark", label: "Dark", ariaLabel: "Use dark theme", Icon: MoonIcon },
  { value: "system", label: "Auto", ariaLabel: "Use system theme", Icon: AutoIcon }
] satisfies Array<{ value: Theme; label: string; ariaLabel: string; Icon: typeof SunIcon }>;

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Theme"
      className="inline-flex shrink-0 overflow-hidden rounded-full border border-line bg-white"
    >
      {OPTIONS.map((option) => {
        const active = option.value === theme;
        const Icon = option.Icon;

        return (
          <button
            key={option.value}
            type="button"
            aria-label={option.ariaLabel}
            aria-pressed={active}
            onClick={() => setTheme(option.value)}
            className={clsx(
              "inline-flex min-w-0 items-center gap-1.5 px-2 py-1 text-xs font-bold transition sm:px-3",
              active ? "bg-ink text-white" : "bg-white text-muted hover:text-ink dark:bg-paper"
            )}
          >
            <Icon className="h-3.5 w-3.5 shrink-0" />
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
