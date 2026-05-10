# Legal and Ethical Constraints for a Foreign-Owned Website Referencing Chinese Platform Content

**Scope**: Foreign-hosted (Cloudflare Pages / VPS abroad), English-first, no ICP filing, no China entity. Information platform for foreign tourists visiting Beijing, Shanghai, Guangzhou, Shenzhen. Does not sell tours.

**Last updated**: 2026-05-10

---

## Section A — Copyright Basics

### A1. China Copyright Law: Facts vs. Expression

PRC Copyright Law (Third Amendment, effective 1 June 2021) follows an ideas/expression dichotomy similar to most jurisdictions, but with a precise statutory carve-out.

**Article 5 of the 2021 Copyright Law explicitly excludes from protection**:

> "(1) Laws and regulations, State organ resolutions, decisions, decrees and other documents having a legislative, administrative or judicial nature, and their official translations; **(2) Purely factual information**; (3) calendars, common numeral tables, common forms, and formulas."

Practical consequences for our site:

- A restaurant's **name, address, star category, opening hours** — factual data, not protected.
- A restaurant's **average rating score** (e.g., "4.8 stars") — a numerical fact, not protected.
- The **number of reviews** (e.g., "12,341 reviews") — a count, not protected.
- An **attraction's category or ticket price** — factual, not protected.
- A **user's written review text** — original expression, protected.
- A **photo uploaded by a user** — creative work, protected.
- A **platform-composed editorial description** — expression, protected.
- A **curated list name** like "必吃榜" or "黑珍珠" — the list selection itself may have thin compilation copyright, but the individual underlying facts are not protected.

The 2020 amendment specifically replaced "news on current affairs" with "purely factual information" (第五条第二款), making clear that news articles (as distinct from the raw facts they report) can be copyrighted. This matters: a Mafengwo travel diary is a copyrightable work; the underlying distances and attraction names it mentions are not.

**Source**: https://www.chinalawtranslate.com/en/Copyright-Law-of-the-PRC-(2021-Version)/
**Secondary analysis**: https://www.marks-clerk.com/insights/latest-insights/102ju75-the-third-amendment-to-the-copyright-law-of-china-takes-effect-from-1-june-2021/

---

### A2. UGC Copyright: User vs. Platform

Chinese platforms universally include broad sublicense grants from users to the platform in their ToS. The legal structure is:

1. **User retains moral rights and copyright** in the content they created (Articles 10-21, PRC Copyright Law).
2. **User grants the platform a sweeping license** — typically described as "worldwide, perpetual, irrevocable, royalty-free, sublicensable, and transferable" covering reproduction, distribution, modification, derivative works, and commercial promotion.
3. **The platform does NOT acquire copyright** from the user unless there is an explicit written assignment. Courts have been inconsistent on whether blanket ToS assignment clauses are enforceable. In the Dianping context, courts "recognised Dianping's exclusive copyright only in reviews where authors expressly affirmed assignment of copyright to Dianping in writing."
4. **Consequence for third parties**: A third party wishing to republish user content needs authorization from the **original user** (copyright holder), not just the platform — unless the platform has secured a valid copyright assignment. Practically, obtaining per-user authorization for UGC at platform scale is infeasible without a partnership agreement.

**Source (Dianping court ruling on copyright assignment)**: https://www.lexology.com/library/detail.aspx?g=777543cb-4a8e-4371-9921-1b9d8f64a206
**Source (UGC governance analysis)**: https://pmc.ncbi.nlm.nih.gov/articles/PMC9243325/

---

### A3. Fair Use (合理使用) Under PRC Law — Much Narrower Than US

PRC Article 24 (2021 law) sets out **twelve exhaustive categories** of permitted use without authorization. There is no open-ended balancing test comparable to US four-factor fair use.

**Article 24(1)** — personal study, research, or appreciation. This covers an individual reading for personal use; it does not cover a website serving thousands of visitors.

**Article 24(2)** — "Appropriately quoting from a published work of another in one's own work for the purpose of introducing or commenting a certain work, or illustrating a point." This is the closest analogue to the US quotation/commentary exception.

**Conditions for Article 24(2) to apply**:
- Must be in "one's own work" — embedded in original content, not standalone republication.
- Must serve introduction, commentary, or illustration — not mere aggregation.
- Quote must be "appropriate" — courts apply the "minimum necessary" standard.
- Must not serve as a substitute for the original (the "substantive substitution" test).
- Must include attribution: author name and work title.
- Must not "unreasonably harm the rights holder's lawful rights and interests" (three-step test, Article 24 final paragraph).

**Key judicial interpretation**: Beijing Internet Court found that using a painting as a prop in a TV drama was appropriate quotation when it occupied only 0.3-4% of the frame and was not the purpose of the scene. Principle: quoted content must be subordinate to, not the main attraction of, the new work.

**Conclusion for our site**: Quoting one or two sentences from a Zhihu answer to illustrate a point in an original article about Beijing transport is likely permissible under Article 24(2). Displaying ten Dianping user reviews on a restaurant page is not — this constitutes republication of protected expression with no transformative purpose.

**Source (Article 24 text)**: https://www.chinalawtranslate.com/en/Copyright-Law-of-the-PRC-(2021-Version)/
**Academic analysis**: https://www.mondaq.com/china/copyright/1666874/exploring-copyright-law-issues-in-film-clip-commentaries-mainland-china
**Three-step test framework**: https://fordhamipinstitute.com/wp-content/uploads/Third-ammendment-to-Chinese-Copyright-Law-Peter-Yu.pdf

---
## Section B — Per-Platform ToS Clauses

General note on research methodology: Several platform ToS pages (Bilibili, Xiaohongshu, Dianping) render as JavaScript-only or return 404/403 to non-mainland IP addresses, making automated full-text extraction impossible without a China-based browser session. Where direct extraction succeeded, it is quoted. Where it did not, key clauses are reconstructed from verified secondary legal analyses.

---

### B1. Douyin (抖音) — ByteDance

**ToS primary source**: https://www.douyin.com/agreement (accessible from outside China at time of research)

**Scraping (爬虫)**:
- Article 5.3(4): Prohibits "爬虫抓取、模拟下载" (web scraping and simulated downloading) of platform information or content.
- Article 5.1: Users cannot use automation tools to "接入抖音，收集或处理其中信息、内容" (access the platform to collect or process information/content).

**Republishing (再发布/转载)**:
- Article 5.3(2): Bans "擅自编辑、整理、改编抖音中的信息或内容后，在抖音的源页面以外的渠道或平台进行展示" — unauthorized editing, organizing, or adapting of platform content for display outside the original source page.
- Article 5.3(7): Restricts using platform content "用于任何形式的销售和商业使用，或以任何形式向第三方提供" — for any commercial purpose or provision to third parties.

**Embedding (iframe/嵌入)**:
- Article 5.3(3): Prohibits technical manipulation including "修改、劫持、导流、遮挡、插入、弹窗" — modification, hijacking, diversion, obstruction, insertion, or pop-ups applied to platform content.
- No official third-party iframe embed tool is provided by Douyin. There is no sanctioned player.douyin.com equivalent.

**Commercial use**:
- Article 2.4: Users receive only "个人的、可撤销的、不可转让的、非独占的和非商业的" (personal, revocable, non-transferable, non-exclusive, non-commercial) rights.

**Deep linking**:
- Article 5.3(4): Bans "深度链接" (deep linking) among unauthorized content access methods.

**Practical implication**: Linking to a Douyin video's public URL is distinct from deep linking into the media stream. A surface-level link to the public page is safer, but Douyin's broad language creates uncertainty. Embedding is clearly prohibited. Scraping is clearly prohibited.

**Secondary source**: https://technode.com/2024/05/14/douyin-to-stop-third-party-advertisers-posting-on-influencers-channels/

---

### B2. Bilibili (哔哩哔哩)

**ToS references**:
- User Agreement: https://www.bilibili.com/protocal/licence.html (JS-rendered; not extractable from outside China)
- Developer Agreement: https://open.bilibili.com/agreement/developer-service

**Scraping**: Bilibili's platform terms explicitly prohibit "using robots, web spiders or other automated devices or manual operations to monitor or copy content without prior written permission."

**Republishing**: Bilibili grants itself a "global, free, permanent, irrevocable license" over user-submitted content for platform purposes. Third-party republication requires separate authorization. Bilibili has actively enforced copyright in court against AIGC content aggregators.

**Embedding (iframe)**: Bilibili operates an **official external player** at https://player.bilibili.com/player.html with documented parameters (bvid, aid, cid, autoplay, danmaku, etc.). However, the player documentation is **purely technical** and includes no explicit licensing terms, commercial use restrictions, or attribution requirements. Bilibili has never published a formal "embed license." The existence of the tool implies permission for non-commercial informational use — an inference from practice, not a stated license.

Safe interpretation: iframe embedding via the official player is tolerated for non-commercial informational use but is not formally licensed. Commercial sites should seek a written API partnership via Bilibili Open Platform.

**Source (player docs)**: https://player.bilibili.com/
**Source (developer agreement)**: https://open.bilibili.com/agreement/developer-service
**Secondary (AIGC enforcement)**: https://faxinatingchina.substack.com/p/bilibili-cie-v-ai-generated-content-aigc

---

### B3. Dianping (大众点评) — Meituan

**ToS reference**: https://www.dianping.com/info/useragreement (returns 404 outside China)

**From judicial record and legal analysis**: Dianping has the most aggressively litigated data protection posture of any Chinese consumer platform.

**Scraping**: Dianping uses CSS font-encryption anti-scraping, IP rate limiting, and 404 traps. The Shanghai Intellectual Property Court held that "customer reviews collected and sorted on dianping.com are Dianping's fruits of labour with high commercial value and should be protected under the Anti-Unfair Competition Law."

**Copyright in reviews**: Dianping updated its ToS to require users to assign copyright in reviews exclusively to Dianping, though courts enforce this only where the user gave "express written affirmation." Dianping claims exclusive rights over its review corpus and has successfully enforced that claim in court.

**Third-party display**: Any display of Dianping review text, photos, or aggregated editorial content on a third-party site without authorization constitutes both copyright infringement and potential unfair competition.

**What Dianping does not protect**: The underlying facts — restaurant names, addresses, categories, number-of-reviews counts — remain factual and unprotected by copyright. The rating number (4.8) is a fact. The user-written review text that generated that rating is protected expression.

**Source (anti-scraping/unfair competition)**: https://law.asia/platform-data-capture-unfair-competition/
**Source (Dianping copyright assignment)**: https://www.lexology.com/library/detail.aspx?g=777543cb-4a8e-4371-9921-1b9d8f64a206

---

### B4. Meituan (美团)

**ToS reference**: https://pages.c-ctrip.com/cbp/policy/v2.5.0/policy.html

Automated collection is prohibited. Meituan holds Ministry of Public Security level-3 information security certification and actively monitors for scraping activity. Meituan's privacy policy restricts data sharing to parties with a direct contractual relationship. No general public license for third-party data use.

**Practical position**: Meituan merchant data (restaurant name, category, operating hours) is factual and referenceable. The "必吃榜" (Must-Eat List) is announced annually via official press releases on PR Newswire — citing the list by name with a link to the official announcement is a safe referencing pattern.

**Source (必吃榜 press distribution)**: https://www.prnewswire.com/news/meituan/
**Secondary**: https://technode.com/2021/10/11/meituan-faces-data-privacy-controversy-after-antitrust-fine/

---

### B5. Amap / AutoNavi (高德地图) — Alibaba

**ToS reference**: https://www.amap.com/terms (not accessible outside China)

**Key structural facts**:
- Amap was acquired by Alibaba in 2014. Its mapping data is classified as "surveying and mapping data" under China's Surveying and Mapping Law (测绘法, 2017 revision) — national strategic data subject to strict controls independent of copyright.
- The Surveying and Mapping Law prohibits foreign entities from collecting, storing, or transmitting Chinese geographical data without regulatory approval. Location coordinates, map tiles, and navigation routes generated within China are regulated under both this law and the Data Security Law.
- Amap offers a commercial API requiring developer registration; non-Chinese entities face significant barriers to obtaining API keys.
- Embedding an Amap map on a foreign site is extremely high-risk: serving Chinese geographical data internationally may require CAC and surveying authority approval.

**Safe alternative**: Use Google Maps, Apple Maps, or OpenStreetMap for a foreign-facing site. Reference Amap location names as facts without embedding Amap tiles.

**Source**: https://www.chinafy.com/blog/mapbox-alternatives-for-china
**Source (AutoNavi background)**: https://en.wikipedia.org/wiki/AutoNavi

---

### B6. Xiaohongshu / RedNote (小红书)

**ToS reference**: https://agree.xiaohongshu.com/h5/terms/ZXXY20250119002/-1 (renders as JS shell outside China)

**Scraping**: RedNote "has one of the more aggressive anti-scraping stacks in Chinese social media," using TLS fingerprinting (JA3/JA4) to identify and block non-browser requests. The platform prohibits automation that violates the user agreement.

**Commercial use (2026 Q1 update)**: Xiaohongshu entered "an unprecedentedly strict phase" of commercialization governance entering 2026. Many formerly tolerated growth tactics now lead directly to account bans.

**UGC**: All user notes (图文/视频笔记) are subject to the platform's broad sublicense. Third-party republication without authorization violates both the user's copyright and the platform's operational rights.

**Practical position**: Link to a specific public note URL, describe it as "a Xiaohongshu post by user X recommending Y," do not reproduce the text or images, do not scrape.

**Source**: https://prizmdigital.co.nz/xiaohongshu-rules-community-guidelines/
**Source (anti-scraping)**: https://dev.to/sami_8858131362756585e4f4/how-to-scrape-rednote-xiaohongshu-with-python-in-2026-the-authsigning-problem-and-how-to-3f9e
**Source (Q1 2026 rules)**: https://www.nobodydigital.co/blog/2026-q1-rednote-xiaohongshu-official-rule-updates-the-essential-risk-avoidance-and-compliance-guide-for-overseas-brands/

---

### B7. Mafengwo (马蜂窝)

**ToS reference**: https://www.mafengwo.cn/user/agreement.php (not accessible outside China)

Mafengwo was publicly exposed in 2018 as having scraped approximately 572 million restaurant reviews and 1.22 billion hotel reviews from Ctrip, Meituan, and other competitors ("假内容捅了马蜂窝"). This means: (1) Mafengwo's content quality is structurally unreliable — many "user reviews" are fabricated or copied; (2) legally, Mafengwo's operational data interests remain protectable under Chinese anti-unfair competition law regardless of its own scraping history.

Standard platform rules apply: scraping prohibited, republication requires authorization, commercial use prohibited without license.

**Source (scraping scandal)**: https://www.huxiu.com/article/267941.html
**Source (platform overview)**: https://medium.com/@tony_57148/what-is-mafengwo-where-long-form-content-meets-chinese-ota-709bf1ac89fa

---

### B8. Zhihu (知乎)

**ToS reference**: https://www.zhihu.com/terms (2023 revised edition)

**Scraping**: "Strictly prohibits unauthorized technical means like plug-ins and crawling tools." Reverse engineering, data scraping, and unapproved commercial usages are "strictly forbidden."

**Content license**: Zhihu grants itself "a global free permanent irrevocable license" encompassing "copying, modifying, derivative creations, and commercial promotions."

**Third-party reprinting**: Third parties reprinting Zhihu materials must (a) clearly indicate original authors and source details, and (b) obtain separate authorization from the rights holders (the users, not just Zhihu). The platform cannot authorize what the user did not authorize it to sublicense for third-party use.

**Practical use**: Our site can reference a Zhihu answer by linking to it and quoting one or two sentences with full attribution under Article 24(2), provided the quote is subordinate to original commentary.

**Source**: https://www.zhihu.com/terms

---

### B9. Ctrip / Trip.com (携程)

**ToS reference**: https://pages.english.ctrip.com/terms/service-clause-en.html (directly accessible — primary source)

**Scraping** (exact text, Section 2):
> "Using any device, software, procedure or other means to intervene or attempt to intervene in the normal operation, or any transaction or activity, of Ctrip, or committing any behavior leading to an unreasonable load of large data to Ctrip network devices."

**Commercial use of data** (exact text, Section 2):
> "Commercial use of any data display on Ctrip websites or belonging to Ctrip, including but not limited to copying, disseminating or by any means using such information without written consent in advance."

**Community Rules** (exact text):
- Grant of Rights: "you grant us a perpetual, worldwide, non-exclusive, royalty-free, sub-licensable, transferable license to (a) use, reproduce, distribute, prepare derivative works of and display such Content..."
- Prohibited: "Using automated tools or scripts for mass participation" and "Misappropriating, reposting, or plagiarizing the content of others."

**Practical implication**: The commercial-use clause technically prohibits displaying even a hotel's name sourced from Ctrip without written consent. In practice, courts focus on substantive substitution and competitive harm. Safe pattern: reference Ctrip as a booking source with a link rather than reproducing Ctrip data on your own pages.

**Source (ToS direct extraction)**: https://pages.english.ctrip.com/terms/service-clause-en.html
**Source (Community Rules direct extraction)**: https://www.trip.com/sale/3089/communityrule.html?locale=en-us

---
