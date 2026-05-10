import { useLang } from "../../store/language";

export default function HistoryVideo() {
  const { t } = useLang();
  return (
    <section id="video" className="grid items-start gap-6 md:grid-cols-[1fr_2fr]">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">{t("historyVideoTitle")}</h2>
        <p className="text-sm leading-relaxed text-muted">{t("historyVideoBody")}</p>
      </div>
      <figure className="overflow-hidden rounded-xl border border-line bg-black">
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/0DzZgBd4W1Q"
            title="Discover a China Beyond Your Imagination"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <figcaption className="flex items-center justify-between gap-3 bg-white px-4 py-3 text-xs">
          <strong>{t("historyVideoMeta")}</strong>
          <a
            className="text-muted hover:text-jade"
            href="https://en.chinaculture.org/a/202206/07/WS629edf41a310fd2b29e61286.html"
            target="_blank"
            rel="noreferrer"
          >
            {t("historyVideoSource")}
          </a>
        </figcaption>
      </figure>
    </section>
  );
}
