import { Link } from "react-router";
import clsx from "clsx";
import { badgeLadder, sampleQuestions, type BadgeTier } from "../data/phase2-preview";
import { useLang } from "../store/language";

export default function AskPage() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12">
      <header className="flex flex-col gap-3">
        <span className="self-start rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
          {isZh ? "Phase 2 · 即将上线" : "Phase 2 · coming soon"}
        </span>
        <h1 className="text-4xl font-bold leading-tight">
          {isZh ? "向中国本地用户提问" : "Ask Chinese locals"}
        </h1>
        <p className="text-base leading-relaxed text-ink/80">
          {isZh
            ? "对北上广深的具体细节提问，由经过验证的本地长居用户回答。提问免费，浏览不需要登录。"
            : "Ask a specific question about Beijing, Shanghai, Guangzhou, or Shenzhen. Verified long-term residents answer. Browsing is free; login only when posting."}
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <header>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "答主等级（通过贡献获得）" : "Answerer tier ladder (earn-not-claim)"}
          </span>
          <h2 className="text-2xl font-bold">
            {isZh ? "本地徽章不能购买，只能通过贡献获得" : "Local badge cannot be bought — only earned"}
          </h2>
          <p className="text-sm text-muted">
            {isZh
              ? "答主等级靠贡献自动累积，不能购买。我们不会收集中国身份证或 WeChat / Alipay 实名信息。"
              : "Tiers accumulate from contribution, never purchased. We do not collect Chinese national ID, passport scans, or WeChat / Alipay real-name tokens."}
          </p>
        </header>
        <ol className="grid gap-3 md:grid-cols-2">
          {badgeLadder.map((tier) => (
            <BadgeCard key={tier.id} tier={tier} isZh={isZh} />
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-4">
        <header>
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "样例问答（占位预览）" : "Sample Q&A (mock preview)"}
          </span>
          <h2 className="text-2xl font-bold">
            {isZh ? "答案旁显示答主常驻城市与等级徽章" : "Answers show the answerer's city and tier badge"}
          </h2>
        </header>
        <ul className="flex flex-col gap-3">
          {sampleQuestions.map((qa) => {
            const tier = badgeLadder[qa.answer.answererTier];
            return (
              <li key={qa.id} className="flex flex-col gap-3 rounded-xl border border-line bg-white p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-paper px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">
                    {qa.topic}
                  </span>
                  {qa.cityScope && (
                    <span className="rounded-full bg-paper px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">
                      {qa.cityScope.toUpperCase()}
                    </span>
                  )}
                </div>
                <strong className="text-base leading-tight">
                  {isZh ? qa.questionZh : qa.questionEn}
                </strong>
                <div className="flex flex-col gap-2 rounded-lg border border-line bg-paper p-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className={clsx("rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", tier.colorClass)}>
                      {isZh ? `T${tier.id} ${tier.nameZh}` : `Tier ${tier.id} · ${tier.nameEn}`}
                    </span>
                    <span className="text-muted">{qa.answer.answererCity}</span>
                    <span className="text-muted">·</span>
                    <span className="text-muted">
                      {isZh ? `${qa.answer.votes} 净赞` : `${qa.answer.votes} net votes`}
                    </span>
                    <span className="text-muted">·</span>
                    <span className="text-muted">
                      {isZh ? `${qa.answer.postedDays} 天前` : `${qa.answer.postedDays} days ago`}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">
                    {isZh ? qa.answer.bodyZh : qa.answer.bodyEn}
                  </p>
                  <span className="self-start text-[10px] uppercase tracking-wider text-muted">
                    {isZh
                      ? `已对照官方政策核验：${qa.answer.lastVerifiedAgainstPolicy}`
                      : `Last verified against policy: ${qa.answer.lastVerifiedAgainstPolicy}`}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="flex flex-col gap-3 rounded-xl border border-line bg-paper p-6">
        <h2 className="text-lg font-bold">
          {isZh ? "怎么验证答主真的住在那个城市？" : "How is the answerer actually verified?"}
        </h2>
        <ul className="grid gap-2 md:grid-cols-2 text-sm leading-relaxed">
          <li className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
            <strong>{isZh ? "+86 手机号 OTP" : "+86 phone OTP"}</strong>
            <span className="text-xs text-muted">
              {isZh
                ? "中国 SIM 卡注册时实名上传到工信部。+86 OTP 只是软信号——但已能筛掉绝大多数非本地用户。"
                : "China SIMs are real-name registered with the Ministry of IT at activation. A +86 OTP is a soft but meaningful signal that filters out the vast majority of non-China users."}
            </span>
          </li>
          <li className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
            <strong>{isZh ? "答题分数累积" : "Cumulative answer score"}</strong>
            <span className="text-xs text-muted">
              {isZh
                ? "参照 Stack Overflow 的机制：被点赞的回答多了自动升级。可观察、可衡量，不依赖人工评判。"
                : "Stack Overflow approach: enough net-positive answers and you auto-promote. Observable, measurable, no editorial gating."}
            </span>
          </li>
          <li className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
            <strong>{isZh ? "T3 用户担保机制" : "T3 user vouching"}</strong>
            <span className="text-xs text-muted">
              {isZh
                ? "PGP web-of-trust 模式：两个已认证 T3 用户为新人担保。每个 T3 担保上限有限，避免小范围相互担保。"
                : "PGP web-of-trust pattern: two existing T3 users vouch for a new candidate. Each voucher has a cap to prevent cliques."}
            </span>
          </li>
          <li className="flex flex-col gap-1 rounded-lg border border-line bg-white p-3">
            <strong>
              {isZh ? "我们不会做的事" : "What we will NOT do"}
            </strong>
            <span className="text-xs text-muted">
              {isZh
                ? "不收中国身份证号、不收护照扫描、不绑定微信/支付宝实名 token。这是 PIPL 合规红线，外国平台跨境收集这类数据需安全评估，风险高于收益。"
                : "We will NOT collect Chinese national ID numbers, passport scans, or WeChat/Alipay real-name tokens. PIPL forbids cross-border collection without a security assessment — the risk far outweighs the benefit."}
            </span>
          </li>
        </ul>
      </section>

      <Link to="/" className="self-start text-sm font-bold text-jade hover:underline">
        {isZh ? "← 返回首页" : "← Back home"}
      </Link>
    </main>
  );
}

function BadgeCard({ tier, isZh }: { tier: BadgeTier; isZh: boolean }) {
  return (
    <li className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
      <div className="flex items-center justify-between">
        <span className={clsx("rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", tier.colorClass)}>
          {isZh ? `T${tier.id} · ${tier.nameZh}` : `Tier ${tier.id} · ${tier.nameEn}`}
        </span>
      </div>
      <strong className="text-sm leading-tight">
        {isZh ? "门槛：" : "Criteria: "}
        <span className="font-normal text-ink/80">{isZh ? tier.criteriaZh : tier.criteriaEn}</span>
      </strong>
      <p className="text-xs text-muted">
        {isZh ? "权限：" : "Rights: "}
        {isZh ? tier.rightsZh : tier.rightsEn}
      </p>
    </li>
  );
}
