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
## Section C — Embedding Videos

### C1. Bilibili Official iframe

Bilibili operates an official external player at `https://player.bilibili.com/player.html`.

Technical implementation:

```html
<iframe
  src="//player.bilibili.com/player.html?bvid=BV1xx411c7mD&page=1&autoplay=0"
  width="800" height="450"
  scrolling="no" frameborder="no" allowfullscreen="true">
</iframe>
```

**Legal status**: The player is technically documented by Bilibili. However, unlike YouTube's Terms of Service (Section 6C, which explicitly permits embedding), Bilibili has never published a formal embed license. The existence of the tool is widely treated as implicit authorization for non-commercial informational use — an inference from practice, not a stated license.

**Risk profile for our site**: Non-commercial, informational, serves foreign tourists. Embedding a Bilibili travel video via the official player is technically tolerated (Bilibili provides and documents the tool), not formally licensed, low practical enforcement risk for a small non-commercial foreign info site, and drives traffic to Bilibili (creator-positive).

**Required for safe use**: (a) only embed videos whose creators have not disabled external embedding — Bilibili allows creators to toggle this; (b) include visible attribution naming Bilibili and the creator; (c) do not cache or re-host the video.

**Source (official player docs)**: https://player.bilibili.com/
**Source (embed implementation reference)**: https://leimao.github.io/blog/Embed-Bilibili-Video/

---

### C2. Douyin Embedding Rules

Douyin does **not** provide an official embed player for third-party websites. There is no player.douyin.com equivalent.

ToS Article 5.3(3) prohibits technical manipulation of platform content including "插入" (insertion into other pages) and "导流" (traffic diversion). Embedding a Douyin video via unofficial iframes or proxied URLs violates this clause.

**Safe pattern**: Link to the video's public page URL only. Do not iframe. Do not re-host. Douyin's "copy link" function produces a shareable web URL (v.douyin.com/...) that is appropriate to hyperlink.

**Source**: https://www.douyin.com/agreement (Article 5.3(3))

---

### C3. WeChat Channels (视频号) — Closed Ecosystem

WeChat Channels is a **closed platform** with no public embed infrastructure:

- No iframe embed code exists for external websites.
- WeChat prioritizes "data sovereignty and ecosystem retention."
- In 2024, MIIT encouraged platform interoperability, leading Tencent to allow limited in-app viewing of some external links. This applies within the WeChat app, not to external website embedding.
- WeChat Channels content has no canonical public URL shareable outside the WeChat ecosystem.

**Conclusion**: Do not attempt to embed WeChat Channels content. It is technically impossible via legitimate means. If relevant content exists on WeChat Channels, describe it and direct users to find it within the WeChat app (e.g., "Search [channel name] on WeChat Channels for video guides to this area").

**Source**: https://wechatwiki.com/wechat-resources/wechat-channels-short-video-feature-complete-guide/
**Source**: https://techbuzzchina.substack.com/p/wechat-channels-the-hope-of-tencent

---

### C4. Embedding Pattern Summary

| Pattern | Risk Level | Notes |
|---|---|---|
| Link to public video URL (any platform) | Low | Directs traffic to platform; not a media-stream deep link |
| Bilibili iframe via player.bilibili.com | Low-Medium | Tolerated, not formally licensed; non-commercial only |
| Douyin iframe via unofficial methods | High | ToS violation; no sanctioned embed path |
| WeChat Channels embed | Impossible | No embed infrastructure exists |
| Re-hosting / downloading and re-uploading | Very High | Clear copyright infringement |

**Overall safe pattern**: Link out, do not iframe — except for Bilibili's official player on non-commercial informational pages.

---

## Section D — Cross-Border Data Flow (PIPL Articles 38-39)

### D1. Does Our Use of Chinese Platform Data Trigger PIPL Cross-Border Transfer Rules?

**PIPL Article 38** requires one of four mechanisms before personal information can be transferred cross-border:
1. CAC-organized security assessment
2. Personal information protection certification by a qualified institution
3. Standard contract (SCC) with the foreign recipient (CAC Measures on Standard Contracts, effective June 1, 2023)
4. Other conditions specified by laws or regulations

**PIPL Article 4** defines personal information as: "any information related to an identified or identifiable natural person as recorded electronically or otherwise, excluding anonymized information."

**Critical threshold question**: Are we "transferring" Chinese personal information when we display data sourced from Chinese platforms?

**Analysis**: The PIPL cross-border transfer rules are triggered when a personal information processor (an entity that determines the purpose and means of processing) provides personal information to an overseas recipient. The paradigm case is a company that holds personal data about Chinese individuals and sends it abroad.

Our site's position is structurally different: we are not a Chinese entity holding personal data. We read publicly available information from Chinese platforms and display derived or referenced information to users outside China. This is analogous to a journalist writing about Chinese restaurant ratings — not a data processor transferring a database.

However:
- If we **scrape** user reviews containing names, profile photos, or other identifiers, we create a cross-border copy of personal information — PIPL applies.
- If we display a **restaurant's name and rating score**, these are facts about a business entity, not a natural person — PIPL does not apply.
- If we display a **user's name, photo, or identifiable review text** sourced from a Chinese platform — PIPL risk arises.

**The March 2024 CAC New Provisions** (Provisions on Promoting and Regulating the Cross-border Flow of Data, effective March 22, 2024) introduced safe harbor exemptions including: transfers of fewer than 100,000 non-sensitive personal data records annually are exempt from CAC security assessment; contract performance transfers are exempt. These exemptions help companies that legitimately hold Chinese personal data — they do not create a new license for foreign sites to scrape Chinese platform data.

**Source (PIPL Article 38)**: https://pipl.xllawconsulting.com/personal-information-protection-law-of-the-peoples-republic-of-china-pipl/chapter-iii-rules-on-provision-of-personal-information-across-the-border/article-38/
**Source (March 2024 relaxation)**: https://www.gtlaw.com/en/insights/2024/3/china-relaxes-requirements-for-cross-border-data-transfers
**Source (PIPL overview)**: https://www.china-briefing.com/doing-business-guide/china/company-establishment/pipl-personal-information-protection-law

---

### D2. Displaying a Beijing Restaurant's Dianping Rating — Personal Data?

**Answer: No, if handled correctly.**

A restaurant's name, address, rating score (e.g., 4.8), and review count (e.g., 12,341) are data about a **business entity**, not a natural person. These are aggregated numerical facts; no individual is identified. They do not constitute "personal information" under PIPL Article 4.

By contrast, the following from the same platform page are personal data: a reviewer's username alongside their review text (potentially identifiable), a reviewer's photo (identifiable), a reviewer's check-in history (behavioral data about a natural person).

**Safe rule**: Display business-level facts (name, rating, count, address, category). Never display user-level data (usernames, review text, reviewer photos) sourced from Chinese platforms.

**Source**: https://www.chinafy.com/blog/what-is-data-anonymization-and-de-identification-in-china

---

### D3. The "No Personal Data" Threshold

**Safe to display (factual, non-personal)**: Platform name + rating score ("Dianping: 4.8"); review count as a number; restaurant/attraction name; category, price range; official platform-published list entry names; attraction addresses and metro directions; ticket prices from official sources.

**Unsafe (personal data or protected expression)**: Individual review text; user photos; usernames or profile identifiers; behavioral patterns aggregated to reveal individual activity.

---

### D4. The Guangzhou Internet Court 2024 PIPL Ruling

**Case facts**: A Chinese consumer sued a French hotel group's China affiliate. The plaintiff booked a hotel in Myanmar via the group's app; the company transferred the plaintiff's personal data (name, phone, email, address, nationality, bank card number) to overseas entities including a marketing database.

**Ruling** (September 2024 — first-ever PIPL cross-border transfer decision):
- Transfer to the Myanmar hotel for booking: lawful (contractual necessity under Article 38(2)).
- Transfer to overseas entities for marketing: unlawful. Violated PIPL Article 39.
- "Checkbox consent to a general privacy policy" is **not** sufficient "separate consent" under Article 39.
- The court required "specific, explicit authorization for a certain processing purpose."
- Damages: approximately USD 2,840, plus data erasure and written apology.

**Relevance to our site**: (1) Confirms PIPL has extraterritorial reach when a foreign entity processes Chinese individuals' personal data via a China affiliate. (2) Our site does not collect personal data from Chinese users and has no China affiliate — the ruling is not directly applicable to display of aggregated factual restaurant data. (3) The ruling would become relevant if we ever: collected personal data from Chinese nationals, ran a booking or registration function for Chinese users, or tracked Chinese visitors' behavior on our site.

**Sources**:
- https://www.mayerbrown.com/en/insights/publications/2024/12/guangzhou-internet-court-issues-the-first-decision-on-cross-border-transfer-of-personal-data-under-pipl
- https://www.morganlewis.com/pubs/2024/11/chinese-court-concluded-landmark-case-on-cross-border-transfer-of-personal-information
- https://natlawreview.com/article/court-ruling-china-personal-data-transfer-international-hotel-chain

---
## Section E — Cybersecurity Law / Data Security Law

### E1. As a Foreign Site, Do We Need to Worry About Chinese Platforms Blocking Our IP?

Yes, but **only if we are scraping**.

Chinese platforms routinely block IPs that exhibit scraping behavior: high request rates from a single IP, non-browser user agent strings, requests for data in structured patterns (sequential IDs, systematic pagination), requests that bypass login walls or anti-scraping mechanisms.

For a site that merely links to or references Chinese platforms, there is no IP exposure — the site's server never makes requests to the Chinese platform. The end user's browser follows the link directly.

IP blocking risk arises only if our server-side code fetches Chinese platform data to display on our pages, makes unauthorized API calls, or runs a scraper to build our database.

**Practical conclusion**: Never make server-side requests to Chinese platforms without authorization. All platform-sourced data must be either manually curated by editors, obtained via official API with authorization, or linked-out so the user's browser contacts the platform directly.

---

### E2. Scraping Public Data — Technical and Legal Risk

**Technical risk**: High. Dianping uses CSS font encryption and IP rate limiting. Xiaohongshu uses TLS fingerprinting (JA3/JA4). Bilibili uses challenge-response authentication. Even "public" pages require session tokens or encounter active bot detection.

**Criminal exposure** (Article 285, PRC Criminal Law): Prohibits "illegally obtaining data" from computer information systems. Chinese courts have held that bypassing anti-scraping measures constitutes unauthorized access. The "Cheng Mao" precedent: defendant used "proxy pools and broadband dialling to avoid anti-crawling strategies" — convicted, sentenced to four years' imprisonment and RMB 500,000 fine.

**Civil exposure** (Anti-Unfair Competition Law, Article 13(3) as amended October 2025): Courts protect platforms' investment in aggregated datasets. A foreign site that scrapes and republishes Dianping data would meet the "substantive substitution" test if users could obtain restaurant information from our site without visiting Dianping, diverting traffic and undermining Dianping's commercial model.

**As a foreign entity**: China's laws explicitly cover foreign actors. The Data Security Law (Article 2) applies to activities outside China that "harm the national security of the PRC, the public interest, or the lawful rights and interests of citizens and organizations." The Cybersecurity Law (amended, effective January 1, 2026) now covers "any overseas institution, organization, or individual that engages in activities endangering the cybersecurity of the People's Republic of China."

**Practical enforcement against small foreign sites**: No publicly documented case of CAC enforcement specifically against a small foreign tourism aggregator for data scraping through early 2026. The cases prosecuted involve large-scale commercial operations. However, civil litigation risk from platforms themselves (Dianping, Bilibili) is real and does not require CAC involvement.

**Source (Criminal Law Article 285 / Cheng Mao case)**: https://iclg.com/practice-areas/cybersecurity-laws-and-regulations/china
**Source (Data Security Law extraterritorial scope)**: https://www.chinalawtranslate.com/en/datasecuritylaw/
**Source (2026 Cybersecurity Law amendment)**: https://www.china-briefing.com/news/china-cybersecurity-law-amendment/
**Source (Anti-Unfair Competition Law 2025 amendment)**: https://intellectual-property-helpdesk.ec.europa.eu/news-events/news/evolving-chinas-judicial-practice-anti-unfair-competition-eight-typical-cases-2025-09-29_en

---

### E3. CAC Actions Against Foreign Tourism Sites — Known Record

No publicly documented CAC enforcement action specifically against a foreign tourism aggregator website has been identified in available legal sources through early 2026.

CAC's 2024 reported enforcement (interviewing 11,159 websites, fining 4,046 platforms, removing 200 apps, suspending 585 sites) was directed at domestic platforms for data security lapses. Foreign sites without Chinese users or China-hosted servers are largely beyond the CAC's practical enforcement reach.

**Risk reality for our site**: The primary legal risk is platform civil litigation (copyright and unfair competition), not CAC criminal enforcement. A foreign tourism info site that links out, references facts, and does not scrape is at very low enforcement risk from Chinese regulators.

**Source**: https://iapp.org/news/a/china-issues-the-regulations-on-network-data-security-management-what-s-important-to-know

---

## Section F — Practical Safe Patterns

### F1. Link Out to Public URL Only (No Scraping, No Caching)

Display a text reference with a hyperlink to the platform's public page.

Example: "Wangfujing Quanjude — [View on Dianping](https://www.dianping.com/shop/[id]) | [Book on Ctrip](https://www.ctrip.com/...)"

Why safe: no server-side requests to Chinese platforms; no copying of protected expression; traffic directed to the platform; standard internet hyperlinking practice. ToS prohibitions on "deep linking" target media-stream URLs, not canonical public web pages.

---

### F2. Display Platform Name + Rating as a Fact

Cite the platform's name and a specific factual data point, with a link and a freshness caveat.

Example: "Dianping rating: 4.8 from 12,341 reviews — see current rating at dianping.com/shop/... (manually verified May 2026; ratings change)"

Why safe: rating number and review count are "purely factual information" under PRC Copyright Law Article 5(2); attribution to Dianping is given; link drives traffic to Dianping; freshness caveat avoids presenting stale data as authoritative.

Limitation: data must be manually curated by an editor, not programmatically scraped.

---

### F3. Reference Official Platform-Curated Lists (必吃榜, 黑珍珠)

Cite the list by name, reference the official announcement, and link to the platform's list page.

Example: "Listed on Dianping's 2025 必吃榜 (Must-Eat List) — Dianping's annual selection across 144 cities. [View the full list on Dianping]"

Why safe: list announcements are issued as press releases via PR Newswire — intended for media pick-up. The underlying fact (restaurant X is on list Y) is a fact, not protected expression. These lists are designed to be referenced in media to increase restaurant visibility.

**Source**: https://www.prnewswire.com/news/meituan/

---

### F4. Embed Bilibili Videos via Official iframe (With Attribution)

Use Bilibili's official player.bilibili.com embed code for travel and tourism videos. Include visible source attribution.

```html
<div class="video-embed">
  <iframe src="//player.bilibili.com/player.html?bvid=BV1xxXXXXXX&autoplay=0"
    width="100%" style="aspect-ratio:16/9;" frameborder="0" allowfullscreen>
  </iframe>
  <p class="video-credit">Video by <a href="[creator profile URL]">@creator</a>,
  hosted on <a href="https://www.bilibili.com">Bilibili</a></p>
</div>
```

Required: only embed videos not disabled for external embedding by the creator; include visible attribution; do not re-host or cache the video. If the site ever generates meaningful revenue, seek a formal API partnership with Bilibili Open Platform.

---

### F5. Reference Platform-Published Press Content

Many platforms publish editorial content intended for citation: Meituan Research Institute publishes market reports; Trip.com publishes travel guides via PR Newswire; Zhihu has verified institutional accounts publishing long-form articles. These are press content — platforms publish them to be read and cited. Quoting one paragraph under Article 24(2) for commentary purposes is permissible with attribution and a link to the source.

---

### F6. Never: Scrape User Reviews and Republish

Prohibited because: (a) user review text is copyrighted expression; (b) platform holds anti-unfair competition rights over its aggregated review corpus; (c) technical scraping bypasses anti-scraping measures — criminal exposure under Article 285 PRC Criminal Law; (d) ToS violation on all platforms reviewed; (e) PIPL risk if review text contains identifiable user information.

This includes copying reviews into our database, displaying excerpts from multiple user reviews, and aggregating review sentiment without authorization.

---

### F7. Never: Cache User Photos or Claim Platform Data as Our Own

User photos are copyrighted works. Caching them on our server creates an unauthorized reproduction. Many contain identifiable faces (PIPL personal data risk). Platform photos may include platform watermarks (additional trademark issues).

Do not represent Chinese platform data as independently gathered or "our own research." Always attribute: "Source: Dianping" / "Via Bilibili" / "From Ctrip." Attribution is required for the Article 24(2) quotation exception and essential for transparency.

---
## Section G — Concrete Checklist

### 10-Item Compliance Checklist: Surfacing Chinese Platform Signals

**1. Fact vs. Expression Test — Apply Before Every Data Point**
Before displaying any data sourced from a Chinese platform, ask: is this a fact (name, number, address, date) or expression (review text, photo, editorial copy)? Display facts only. Never display expression without explicit authorization.

**2. No Server-Side Platform Requests Without API Authorization**
Our backend must never make HTTP requests to Douyin, Bilibili, Dianping, Meituan, Xiaohongshu, Mafengwo, Zhihu, or Ctrip to fetch data for display. All platform-sourced data must be (a) manually entered by editors, (b) obtained via official API with authorization, or (c) linked out so the user's browser fetches it directly.

**3. All Platform Data Is Manually Curated and Timestamped**
Any rating, review count, or list membership displayed on our site must be manually verified and entered by a human editor. Include a visible "verified as of [date]" note. Do not automate data ingestion from Chinese platforms.

**4. Hyperlinks to Platform Pages, Not Deep Links to Media**
All links to Chinese platform content must point to the canonical public web page (e.g., dianping.com/shop/12345), not to API endpoints, media file URLs, or native-app deep links.

**5. Bilibili Embeds via Official Player Only, With Attribution**
For video content, only embed Bilibili videos via player.bilibili.com. Never embed Douyin, Xiaohongshu, or WeChat Channels via iframe. Always include visible attribution naming Bilibili and the creator.

**6. Never Reproduce Review Text or User Photos**
Do not display any user-written review text from any platform on our pages. Do not display photos sourced from platform user content. This applies regardless of length — even a single sentence of a user review is protected expression.

**7. Official Lists Referenced by Name and Linked — Not Reproduced**
When citing 必吃榜, 黑珍珠, or similar platform-curated lists, state the restaurant's inclusion as a fact and link to the official list page. Do not reproduce the list itself, rankings, or editorial commentary.

**8. No Personal Data From Chinese Platforms**
Never collect, display, or store usernames, profile photos, reviewer identities, or any information that could identify a Chinese individual who posted content on a Chinese platform. Display only business-entity data (restaurant names, addresses) and aggregated statistics.

**9. Source Attribution on All Platform-Referenced Information**
Every platform signal shown on our site must be attributed: "Source: Dianping," "Via Bilibili," "From Ctrip." Attribution is required for the Article 24(2) quotation exception and essential for transparency. Never present platform data as "our own" research.

**10. Freshness Caveat and Disclaimer on All Platform Data Pages**
Display a clear disclaimer: "Ratings and information sourced from third-party Chinese platforms and manually verified. Prices and ratings change frequently. Check the platform directly for current information." This reduces liability for stale data and makes clear we do not claim ownership of platform information.

---

## Source Index (29 Distinct Sources Cited)

1. https://www.chinalawtranslate.com/en/Copyright-Law-of-the-PRC-(2021-Version/) — PRC Copyright Law 2021 (Articles 5, 24); primary legislative text
2. https://www.marks-clerk.com/insights/latest-insights/102ju75-the-third-amendment-to-the-copyright-law-of-china-takes-effect-from-1-june-2021/ — 2021 amendment analysis (Marks & Clerk)
3. https://www.hoganlovells.com/en/publications/china-what-you-need-to-know-about-the-amended-copyright-law — Hogan Lovells amended law analysis
4. https://pmc.ncbi.nlm.nih.gov/articles/PMC9243325/ — Chinese platform UGC copyright governance (peer-reviewed academic)
5. https://www.mondaq.com/china/copyright/1666874/exploring-copyright-law-issues-in-film-clip-commentaries-mainland-china — Article 24 judicial application (Mondaq)
6. https://fordhamipinstitute.com/wp-content/uploads/Third-ammendment-to-Chinese-Copyright-Law-Peter-Yu.pdf — Three-step test analysis (Fordham IP Institute)
7. https://www.douyin.com/agreement — Douyin User Agreement (primary source, direct extraction)
8. https://www.bilibili.com/protocal/licence.html — Bilibili User Agreement (primary source, JS-rendered)
9. https://open.bilibili.com/agreement/developer-service — Bilibili Open Platform Developer Agreement
10. https://player.bilibili.com/ — Bilibili official external player documentation
11. https://faxinatingchina.substack.com/p/bilibili-cie-v-ai-generated-content-aigc — Bilibili AIGC copyright enforcement analysis
12. https://pages.english.ctrip.com/terms/service-clause-en.html — Ctrip Terms of Service (English, primary source, directly accessible)
13. https://www.trip.com/sale/3089/communityrule.html?locale=en-us — Trip.com Community Rules (primary source, direct extraction)
14. https://www.lexology.com/library/detail.aspx?g=777543cb-4a8e-4371-9921-1b9d8f64a206 — Platform data scraping and Dianping copyright assignment case analysis
15. https://law.asia/platform-data-capture-unfair-competition/ — Anti-unfair competition and data scraping (China)
16. https://intellectual-property-helpdesk.ec.europa.eu/news-events/news/evolving-chinas-judicial-practice-anti-unfair-competition-eight-typical-cases-2025-09-29_en — Eight anti-unfair competition typical cases (EU IP Helpdesk, 2025)
17. https://pipl.xllawconsulting.com/personal-information-protection-law-of-the-peoples-republic-of-china-pipl/chapter-iii-rules-on-provision-of-personal-information-across-the-border/article-38/ — PIPL Articles 38-39 text
18. https://www.gtlaw.com/en/insights/2024/3/china-relaxes-requirements-for-cross-border-data-transfers — March 2024 CAC cross-border data relaxation (Greenberg Traurig)
19. https://www.mayerbrown.com/en/insights/publications/2024/12/guangzhou-internet-court-issues-the-first-decision-on-cross-border-transfer-of-personal-data-under-pipl — Mayer Brown analysis of Guangzhou Internet Court PIPL ruling (December 2024)
20. https://www.morganlewis.com/pubs/2024/11/chinese-court-concluded-landmark-case-on-cross-border-transfer-of-personal-information — Morgan Lewis PIPL ruling analysis
21. https://natlawreview.com/article/court-ruling-china-personal-data-transfer-international-hotel-chain — National Law Review PIPL ruling analysis
22. https://www.chinalawtranslate.com/en/datasecuritylaw/ — Data Security Law of PRC (full text)
23. https://iclg.com/practice-areas/cybersecurity-laws-and-regulations/china — ICLG China cybersecurity law (criminal liability, Cheng Mao case)
24. https://www.china-briefing.com/news/china-cybersecurity-law-amendment/ — 2026 Cybersecurity Law amendment (China Briefing)
25. https://www.chinafy.com/blog/what-is-data-anonymization-and-de-identification-in-china — PIPL anonymization and de-identification threshold
26. https://www.huxiu.com/article/267941.html — Mafengwo content fabrication scandal (Huxiu, 2018)
27. https://prizmdigital.co.nz/xiaohongshu-rules-community-guidelines/ — Xiaohongshu community guidelines (English summary)
28. https://www.prnewswire.com/news/meituan/ — Meituan press release channel (必吃榜/黑珍珠 official distribution)
29. https://www.nobodydigital.co/blog/2026-q1-rednote-xiaohongshu-official-rule-updates-the-essential-risk-avoidance-and-compliance-guide-for-overseas-brands/ — Xiaohongshu Q1 2026 rule updates

---

## Version Notes

- PRC Copyright Law: Third Amendment, effective 1 June 2021. Current version.
- PIPL: Effective 1 November 2021. March 2024 CAC Provisions relax cross-border transfer requirements for non-sensitive data under 100,000 records/year.
- Data Security Law: Effective 1 September 2021.
- Cybersecurity Law: Amended version effective 1 January 2026; expands extraterritorial scope to cover all foreign actors endangering PRC cybersecurity.
- Anti-Unfair Competition Law: Third amendment effective 15 October 2025; Article 13(3) specifically targets data scraping via technical circumvention.
- Platform ToS: All platforms update ToS frequently. Dianping, Bilibili, and Xiaohongshu ToS pages are not accessible from outside China without a VPN. Verify current terms via a China-based browser session before launching.

---

*Sections: A (copyright basics, 3 sub-topics), B (9 platforms), C (video embedding, 4 sub-topics), D (PIPL cross-border, 4 sub-topics), E (cybersecurity/data law, 3 sub-topics), F (safe patterns, 7 patterns), G (10-item checklist)*
*Sources cited: 29 distinct URLs*
*Research date: 2026-05-10*
