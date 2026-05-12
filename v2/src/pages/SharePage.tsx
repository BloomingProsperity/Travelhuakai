import { Link } from "react-router";
import { moderationFlow, sampleShares } from "../data/phase2-preview";
import { useLang } from "../store/language";

export default function SharePage() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12">
      <header className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold leading-tight">
          {isZh ? "分享你的旅行" : "Share your trip"}
        </h1>
      </header>

      <section className="flex flex-col gap-4">
        <header>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "审核管线（投稿到发布）" : "Moderation pipeline (submit → publish)"}
          </span>
          <h2 className="text-2xl font-bold">
            {isZh ? "每条投稿 5 步流程" : "Every submission goes through 5 steps"}
          </h2>
        </header>
        <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {moderationFlow.map((step) => (
            <li key={step.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
              <strong className="text-sm leading-tight">
                {isZh ? step.titleZh : step.titleEn}
              </strong>
              <p className="text-xs leading-relaxed text-ink/80">
                {isZh ? step.bodyZh : step.bodyEn}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-4">
        <header>
          <h2 className="text-2xl font-bold">
            {isZh ? "授权复选框为必选项" : "The consent checkbox is non-skippable"}
          </h2>
        </header>
        <div className="flex flex-col gap-3 rounded-xl border border-dashed border-line bg-paper p-6 opacity-90">
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "你想分享哪个城市？" : "Which city are you writing about?"}
            <select disabled className="rounded-lg border border-line bg-white px-3 py-2 text-sm">
              <option>{isZh ? "北京 · Beijing" : "Beijing"}</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "你的国家（公开显示为 2 字母代码）" : "Your country (public, shown as 2-letter code)"}
            <input
              disabled
              type="text"
              placeholder="DE / US / JP / FR …"
              className="rounded-lg border border-line bg-white px-3 py-2 text-sm placeholder-muted"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "正文（最多 1500 字）" : "Body (≤ 1500 chars)"}
            <textarea
              disabled
              rows={5}
              placeholder={
                isZh
                  ? "写下你的真实经历——哪些信息有用、遇到哪些问题、出发前希望知道的事…"
                  : "What worked, what didn't, what you wish you'd known before flying…"
              }
              className="rounded-lg border border-line bg-white px-3 py-2 text-sm placeholder-muted"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "照片（最多 5 张，每张 ≤ 2 MB）" : "Photos (up to 5, ≤ 2 MB each)"}
            <div className="flex h-24 items-center justify-center rounded-lg border-2 border-dashed border-line bg-white text-xs text-muted">
              {isZh ? "照片上传" : "Photo upload"}
            </div>
          </label>
          <label className="mt-2 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 p-3">
            <input type="checkbox" disabled className="mt-0.5 h-4 w-4" />
            <span className="text-xs leading-relaxed">
              {isZh
                ? "我拥有或有权发布此内容。我同意本站发布它，并为外国读者翻译。我保留对作品的版权。"
                : "I own or have permission to post this. I agree that this site may publish it and translate it for readers. I keep my rights."}
            </span>
          </label>
          <label className="flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 p-3">
            <input type="checkbox" disabled className="mt-0.5 h-4 w-4" />
            <span className="text-xs leading-relaxed">
              {isZh
                ? "我理解这条内容（含翻译版本）会在中国境外展示。提供商：本站托管在境外服务器，AI 审核会调用境外 API。我可以随时编辑或删除，但已分发的翻译副本可能仍然存在。"
                : "I understand this content (including translations) may be displayed outside China. The site is hosted on overseas servers and AI moderation calls overseas APIs. I can edit or delete it later, subject to cached or already-distributed copies."}
            </span>
          </label>
          <button
            disabled
            className="self-start rounded-full bg-ink px-5 py-2 text-xs font-bold uppercase tracking-widest text-white opacity-60"
          >
            {isZh ? "提交" : "Submit"}
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <header>
          <h2 className="text-2xl font-bold">
            {isZh ? "正文 + 照片 + 国家码 + 城市标签" : "Text + photos + country + city tag"}
          </h2>
        </header>
        <ul className="grid gap-3 md:grid-cols-2">
          {sampleShares.map((s) => (
            <li key={s.id} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-5">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-paper px-2 py-0.5 font-bold uppercase tracking-wider text-muted">
                  {s.authorCountry}
                </span>
                <span className="font-bold">{s.authorAlias}</span>
                <span className="text-muted">·</span>
                <span className="text-muted">{isZh ? s.cityZh : s.cityEn}</span>
                <span className="text-muted">·</span>
                <span className="text-muted">
                  {isZh ? `${s.daysAgo} 天前` : `${s.daysAgo} days ago`}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-ink/85">
                {isZh ? s.textZh : s.textEn}
              </p>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted">
                <span className="rounded-full bg-paper px-2 py-0.5 font-bold">
                  {s.imageCount} {isZh ? "张图" : s.imageCount === 1 ? "photo" : "photos"}
                </span>
                <span className="rounded-full bg-amber-50 px-2 py-0.5 font-bold text-amber-800">
                  {isZh ? "访客笔记" : "visitor note"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
        {isZh ? "← 返回首页" : "← Back home"}
      </Link>
    </main>
  );
}
