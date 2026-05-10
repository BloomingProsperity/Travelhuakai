# UGC & Q&A Implementation Research
## Platform: Foreign-tourist-to-China (Phase 2)
## Stack: Hono + Bun, Postgres, MinIO, Email/Google/GitHub OAuth
## Compiled: 2026-05-10

---

## A. AI Moderation Pipeline Patterns

### A1. OpenAI omni-moderation-latest is free and covers text + images
Detects 13 categories (hate, harassment, self-harm, sexual, violence, sub-types) across text and image inputs. Free for any OpenAI API customer, no token quota consumed. Images capped at 20 MB. Binary flags plus 0-1 confidence scores returned per category. Model slug rolls forward automatically.
- Source: https://platform.openai.com/docs/guides/moderation
- Author/publication: OpenAI official documentation
- Date: current (continuously updated)
- Applicability: both

### A2. Confidence-threshold routing is the standard production pattern
Auto-approve below a low score (e.g. < 0.2), auto-reject above a high score (e.g. > 0.85), everything in between goes to a human review queue. Amazon Rekognition integrates this via Amazon Augmented AI (A2I), routing borderline images (40-60% confidence) to human reviewers by threshold or random sampling.
- Source: https://aws.amazon.com/rekognition/content-moderation/ ; https://docs.aws.amazon.com/rekognition/latest/dg/moderation-api.html
- Author/publication: AWS documentation
- Date: 2024 (Content Moderation v7)
- Applicability: both

### A3. Commercial APIs have severe false-positive problems on group-targeted content
A March 2025 study (arXiv 2503.01623) tested five commercial APIs against four English hate-speech datasets. Google Natural Language API reached a false-positive rate of 99% for content about Jewish and disability groups. All APIs under-moderated implicit hate speech. Scope was English-only -- no conclusions can be drawn for Chinese.
- Source: https://arxiv.org/html/2503.01623v1
- Author/publication: Rottger et al., arXiv, March 2025
- Date: March 2025
- Applicability: both

### A4. Perspective API fails catastrophically at high thresholds -- recall collapses to 0.018
January 2025 study on German newspaper comments (HOCON34k): Perspective API at threshold 0.8 achieved precision 0.857 but recall 0.018 -- missing 98% of hate speech. GPT-4o one-shot achieved precision 0.466 / recall 0.770 (best combined). Authors note recall matters more than precision when humans review all flagged items anyway.
- Source: https://arxiv.org/html/2501.01256v1
- Author/publication: Wiedemann et al., arXiv, January 2025
- Date: January 2025
- Applicability: both

### A5. Chinese offensive language detection is a separate, unsolved problem
No commercial moderation API covers Chinese adequately. Key obstacles: (1) Phonetic Cloaking Replacement (PCR) -- homophones stand in for slurs (e.g. cao ni ma sounds like a vulgarism). (2) Polysemous characters carry different meanings by context. (3) Neologisms emerge faster than lexicons update. (4) Cantonese vs. Mandarin readings of the same characters diverge. Fine-tuned Chinese models (COLD benchmark, ToxiCN dataset, XLM-R/COLDET) achieve F1 0.798-0.810 but are research systems, not production APIs.
- Source: https://arxiv.org/html/2403.18314v3
- Author/publication: Lu et al., arXiv, updated 2024
- Date: 2024
- Applicability: both

### A6. Detoxify open-source does NOT support Chinese
The unitaryai/detoxify multilingual model supports English, French, Spanish, Italian, Portuguese, Turkish, and Russian. Chinese is explicitly excluded. For Chinese text, a separate pipeline using a fine-tuned model on a Chinese dataset (ToxiCN, COLD) or a Chinese LLM with a moderation prompt is required.
- Source: https://github.com/unitaryai/detoxify
- Author/publication: Unitary AI, GitHub
- Date: repository active through 2024
- Applicability: both

### A7. AWS Rekognition v7 is the most feature-complete production image moderation API
Rekognition Content Moderation v7 (2024) detects nudity (explicit vs. suggestive with sub-labels like Graphic Male Nudity), violence, drugs, tobacco, alcohol, hate symbols, gambling, and disturbing content. Distinguishes animated/illustrated vs. photographic. Google Vision API does not natively separate explicit from suggestive nudity and returns likelihood buckets rather than numeric scores. Run face detection in parallel to flag photos with visible faces or ID cards for human review.
- Source: https://aws.amazon.com/rekognition/content-moderation/ ; https://docs.aws.amazon.com/rekognition/latest/dg/moderation-response-transform.html
- Author/publication: AWS documentation
- Date: 2024 (v7)
- Applicability: travel-share

### A8. Cost at 1k-10k posts/day: text moderation free; image moderation ~$300/month
OpenAI omni-moderation-latest: free, no per-call charge, no token quota. AWS Rekognition: ~$0.001/image ($1.00/1,000 for first 1M/month); at 10k image submissions/day that is ~$300/month. Perspective API: free under 1 QPS; 10k/day = 0.12 QPS, within free tier. Recommended starting pipeline: OpenAI text moderation (free) + Rekognition image moderation (~$300/month).
- Source: https://openai.com/api/pricing/ ; https://aws.amazon.com/rekognition/pricing/
- Author/publication: OpenAI and AWS pricing pages
- Date: checked May 2026
- Applicability: both

### A9. Human review queue: 2-hour SLA, gray zone 5-15%, one part-time reviewer viable at this scale
The 2025 IFTAS Social Web Trust and Safety Report (Jan 2026) found the average moderator-to-account ratio worsened to 1:24,288 (up from 1:6,167 in 2023). More than half of respondents are sole moderators. One in five reports negative mental health impact. For a paid-staff model at 1k-10k posts/day, AI auto-handling 85-95% of content leaves the gray zone manageable by one part-time reviewer (~4h/day). Target: 2-hour SLA. Human review UI should show: original content, AI confidence score per category, policy links, approve/reject/escalate buttons.
- Source: https://about.iftas.org/2026/01/21/behind-the-numbers-who-moderates-the-social-web/
- Author/publication: IFTAS (Internet Freedom Trust and Accountability Service), January 2026
- Date: January 2026
- Applicability: both

### A10. Translate-then-moderate workaround for Chinese text
Because no commercial API delivers reliable Chinese hate-speech detection, a practical workaround is: (1) detect input language, (2) if non-English translate to English via LLM (GPT-4o-mini, Gemini Flash), (3) run translated text through the standard moderation API, (4) flag for human review if translated version scores above a low threshold. A 2024 Springer study found this approach degrades precision by 5-15% versus native-language detection, but is far better than running English-trained models directly on Chinese text.
- Source: https://link.springer.com/article/10.1007/s13278-024-01398-4
- Author/publication: Springer, Social Network Analysis and Mining, 2024
- Date: 2024
- Applicability: both

---

## B. Verified-Resident Badge System

### B1. Quora Top Writer: discontinued after 2018, gaming and scale failure -- cautionary
Quora launched Top Writer in 2012 (492 initial hand-picked recipients). The program was discontinued after 2018 with no formal announcement. Quora stated the core difficulty was scaling to a much larger base of good writers while resisting gaming. It was not replaced with a location-verification mechanism. Lesson: manually curated status programs that rely on editorial judgment do not scale and are abandoned under growth and gaming pressure.
- Source: https://quoraleadership.quora.com/Why-was-the-Top-Writer-feature-discontinued-Will-it-ever-make-a-comeback
- Author/publication: Quora Leadership blog (official)
- Date: post-2018 (program ended); reviewed 2025
- Applicability: Q&A

### B2. Reddit city flair: moderator-granted, no platform standard, lightweight and viable
Reddit flair system lets moderators with Manage flair permission assign user flair by username search and label assignment. On city subreddits (r/shanghai, r/beijing), some moderators grant local resident flair but each subreddit sets its own verification criteria -- ranging from post proof in modmail to just ask. Reddit launched grey-checkmark verified profiles in December 2025, but this is invitation-only for public figures and brands, not local-resident verification. The mod-grant model is a viable, zero-infrastructure pattern for a small platform.
- Source: https://mods.reddithelp.com/hc/en-us/articles/360028091332-Grant-User-Flair ; https://techcrunch.com/2025/12/10/reddit-is-testing-verification-badges/
- Author/publication: Reddit Mods Help; TechCrunch December 2025
- Date: Reddit docs current; TechCrunch Dec 2025
- Applicability: Q&A

### B3. Stack Overflow earn-not-claim: behavior-triggered badges, reputation gates privileges
Stack Overflow awards badges automatically when measurable thresholds are crossed (e.g. Informed for reading the tour, Nice Answer for 10 upvotes). Users cannot claim badges. Reputation points gate privileges (edit at 2,000 rep, close/reopen votes at 3,000). Research (arXiv 2008.06125) shows badges steer contributions: users increase activity before earning a target badge and decrease briefly after. The earn-not-claim design principle -- observable actions unlock status rather than self-declaration -- directly maps to the verified-local-answerer problem and is resistant to gaming.
- Source: https://stackoverflow.blog/2021/04/12/stack-overflow-badges-explained/ ; https://arxiv.org/pdf/2008.06125
- Author/publication: Stack Overflow Blog (April 2021); Vasilescu et al., arXiv
- Date: 2021 blog; badge study 2020 (design principle is evergreen)
- Applicability: Q&A

### B4. Chinese platforms use government-ID real-name registration -- not replicable cross-border
China Internet real-name system, strengthened through 2023, requires domestic platforms to verify user identity against national ID. Zhihu and Xiaohongshu require accounts with 500k+ followers in sensitive fields to display verified real names. On July 15, 2025, China launched a national online identity authentication system. A foreign-owned platform cannot legally collect Chinese national ID numbers -- this is a PIPL violation (collecting more data than necessary, cross-border transfer without security assessment). Do not replicate this mechanism.
- Source: https://en.wikipedia.org/wiki/Internet_real-name_system_in_China ; https://www.technologyreview.com/2023/12/22/1085820/death-of-anonymity-online-china/ ; https://www.octoplusmedia.com/xiaohongshu-2023-latest-account-verification-rules/
- Author/publication: Wikipedia; MIT Technology Review (Dec 2023); OctoplusMedia (2023)
- Date: MIT Tech Review Dec 2023; Xiaohongshu rules 2023
- Applicability: Q&A

### B5. Chinese carrier phone numbers (+86 OTP) as a soft residency signal -- imperfect but viable
All SIM cards in China (CMCC, Unicom, Telecom) require real-name registration with passport or national ID; the carrier uploads the record to the Ministry of Industry and IT within 60 seconds of activation. A mainland China +86 number implies the holder physically registered a SIM in China. SMS OTP to a +86 number filters out the vast majority of non-China-based users. Limitation: tourists and short-term visitors can also obtain Chinese SIMs with a passport, so the signal is imperfect but meaningful as a first-tier friction gate.
- Source: https://www.registrationchina.com/articles/china-mobile-phone-numbers/ ; https://thechina.travel/guides/mobile-number/ ; https://us.cuniq.com/en/faq
- Author/publication: RegistrationChina.com; TheChinaTravel; Cuniq FAQ
- Date: 2024
- Applicability: Q&A

### B6. Acceptable vs. not-acceptable verification documents under PIPL for a foreign platform
Acceptable (low privacy risk, operationally safe):
- Phone OTP to a +86 number (imperfect but PIPL-safe)
- User self-declaration with community vouching (two existing verified members vouch)
- Answer history scoring: if N answers accumulate net positive votes with no disputes, auto-promote

Not acceptable (PIPL and legal liability):
- Chinese national ID number -- collecting cross-border requires a PIPL security assessment
- Passport scans of Chinese nationals -- same PIPL exposure
- WeChat or Alipay real-name tokens -- contain personal data tied to the Chinese real-name system

The Guangzhou Internet Court September 2024 PIPL ruling confirms cross-border personal data transfer requires separate, unbundled consent naming the foreign receiver. For a startup, the risk-to-benefit ratio of collecting any Chinese government ID data is prohibitive.
- Source: https://www.paulweiss.com/insights/client-memos/chinese-court-releases-landmark-decision-on-requirements-for-cross-border-transfer-of-personal-information-under-the-pipl ; https://trustarc.com/wp-content/uploads/2024/03/PIPL-FAQs.pdf
- Author/publication: Paul Weiss LLP (Nov 2024); TrustArc PIPL FAQ (March 2024)
- Date: November 2024; March 2024
- Applicability: Q&A

### B7. Community vouching (trust web): zero-PII alternative to document verification
Trust propagation via a seed group of verified users vouching for new members has been used by PGP web of trust, Couchsurfing, and Keybase. Failure mode: clique-capture (small groups vouching for each other with no external anchor). Mitigation: require at least two vouchers from independent accounts with distinct IP and login histories; cap vouching power per account. Collects zero sensitive personal data and is fully PIPL-safe.
- Source: https://en.wikipedia.org/wiki/Web_of_trust (evergreen pattern)
- Author/publication: Wikipedia; established cryptographic/community literature
- Date: evergreen
- Applicability: Q&A

### B8. Recommended 3-tier earn-not-claim ladder for this platform
Synthesized from Stack Overflow and Reddit patterns:

- Tier 0 (any logged-in user): can post questions; cannot post answers
- Tier 1 "Community Member" (earned): 3+ questions with net positive votes + verified email
- Tier 2 "Local Answerer" (earned): Tier 1 + +86 SMS OTP verified + 5 answers posted, at least 3 with net score >= 3
- Tier 3 "Verified Local" (earned or vouched): Tier 2 + vouched by two existing Tier 3 users, OR 50 cumulative net-positive answer votes

Badge is displayed automatically; it cannot be claimed or purchased. The +86 OTP is the only PII collected beyond email.
- Source: synthesized from https://stackoverflow.blog/2021/04/12/stack-overflow-badges-explained/ and https://mods.reddithelp.com/hc/en-us/articles/360028091332-Grant-User-Flair
- Applicability: Q&A

---

## C. UGC Submission Consent + Authorization Checkbox Patterns

### C1. Wikimedia uses blunt copyright-warning language, not a separate scary consent flow
Wikipedia/Commons make the publishing grant visible at the edit/save moment. Commons' copyright warning starts: "By saving changes, you agree to the Terms of Use..." and then says the contributor irrevocably releases the contribution under CC BY-SA 4.0 and GFDL. Wikimedia Terms separately require CC BY-SA 4.0/GFDL text contributions and allow attribution through a hyperlink or URL to the article. UploadWizard-style Commons file grants use the same plain pattern: the uploader, as copyright holder, irrevocably grants anyone the right to use the work under the selected CC license.
- Source: https://commons.wikimedia.org/wiki/MediaWiki:Wikimedia-copyrightwarning ; https://foundation.wikimedia.org/wiki/Terms_of_Use ; https://commons.wikimedia.org/wiki/Commons:Copyright_tags/Commonly_used_licenses/en
- Author/publication: Wikimedia Commons MediaWiki message; Wikimedia Foundation Terms of Use; Wikimedia Commons licensing docs
- Date: Terms updated 2025; Commons docs current
- Applicability: both

### C2. Medium and Substack both require translation rights inside the general user-content license
Medium's Terms say users retain ownership, but grant Medium a nonexclusive, royalty-free, worldwide, sublicensable license that explicitly includes use, reproduction, modification, adaptation, publication, translation, derivative works, distribution, public performance, and display on Medium services. Substack's April 21, 2025 Terms are narrower operationally but still explicitly grant Substack a license to translate, modify, reproduce, and otherwise act on posts to provide and improve Substack; public posts also grant display, performance, and distribution rights. Pattern: put translation in the content license, then repeat the key point near submission.
- Source: https://help.medium.com/hc/en-us/articles/213481318-Medium-Terms-of-Service ; https://substack.com/tos
- Author/publication: Medium Help Center; Substack Terms of Use
- Date: Medium effective September 1, 2020 (current terms); Substack effective April 21, 2025
- Applicability: both

### C3. Fediverse/Mastodon has no network-wide content license; licensing is instance- or object-level
Mastodon is decentralized, so there is no single platform-wide clickwrap grant for every Fediverse post. Mastodon 4.4 added legal-compliance features for instance operators, including managed Terms of Service and translations of server rules. The emerging Fediverse licensing pattern is object/post-level metadata: FEP-c118 discusses attaching a license to each ActivityPub object, while individual instances can set their own default license rules. For this platform, do not assume "federated" means reusable; make the post license explicit at submission.
- Source: https://blog.joinmastodon.org/2025/05/legal-features-updates/ ; https://docs.joinmastodon.org/entities/TermsOfService/ ; https://socialhub.activitypub.rocks/t/fep-c118-content-licensing-support/2903?page=2
- Author/publication: Mastodon Blog; Mastodon API documentation; SocialHub Fediverse Enhancement Proposal discussion
- Date: May 23, 2025; April 16, 2025; January-February 2023 (evergreen standards discussion)
- Applicability: both

### C4. GDPR/PIPL treatment: translating and republishing user text is both copyright use and personal-data processing
If a post can identify a person directly or indirectly, GDPR treats translation, storage, alteration, dissemination, and making available as processing. GDPR consent must be freely given, specific, informed, and unambiguous, though contract or legitimate interest may sometimes be the lawful basis for ordinary publishing. For Mainland China users, PIPL cross-border rules are stricter: Article 39 requires notice of the overseas recipient, purpose, method, categories of personal information, rights procedures, and separate consent for cross-border transfer; the Guangzhou Internet Court's 2024 decision treated bundled general consent as insufficient. The checkbox should cover copyright permission, while the privacy notice covers data processing and overseas vendors.
- Source: https://gdpr-info.eu/art-4-gdpr/ ; https://gdpr-info.eu/art-6-gdpr/ ; https://www.mayerbrown.com/en/insights/publications/2024/12/guangzhou-internet-court-issues-the-first-decision-on-cross-border-transfer-of-personal-data-under-pipl ; https://pipl.xllawconsulting.com/personal-information-protection-law-of-the-peoples-republic-of-china-pipl/chapter-iii-rules-on-provision-of-personal-information-across-the-border/article-39/
- Author/publication: GDPR text via Intersoft Consulting; Mayer Brown; PIPL Article 39 translation by Xia & Lin Law Consulting
- Date: GDPR current; Mayer Brown December 19, 2024; PIPL translation current
- Applicability: both

### C5. Must the platform retain the original-language version too? No public-retention duty, but keep an internal source record
No mainstream rule requires a platform to publicly keep the original-language version next to a translation. Copyright law cares that translation is authorized; CC BY-SA treats translation as adapted material and requires attribution, license notice, source URI where reasonably practicable, and an indication that the material was modified. GDPR/PIPL care about transparency, access, correction, erasure, and proof of consent. Recommended implementation: store the original privately while the translated post is live, show "translated from [language]" and an optional "view original" link when privacy-safe, and delete/anonymize both versions together when the user deletes the post unless retention is needed for disputes or legal compliance.
- Source: https://creativecommons.org/licenses/by-sa/4.0/legalcode.en ; https://gdpr-info.eu/art-13-gdpr/ ; https://gdpr-info.eu/art-30-gdpr/
- Author/publication: Creative Commons legal code; GDPR text via Intersoft Consulting
- Date: CC BY-SA 4.0 current; GDPR current
- Applicability: both

### C6. Plain-language checkbox copy should be specific, short, and ownership-preserving
Concrete checkbox examples: (1) "I own or have permission to post this. I agree that China Guide may publish it and translate it for readers. I keep my rights." (2) "I agree to publish my question/answer publicly, including translated versions, with my username shown." (3) For higher-risk posts: "I understand my post and its translation may be visible outside my country. I can edit or delete it later, subject to cached or already-shared copies." This is legally stronger than vague "I agree" text because it names publication, translation, attribution, ownership, and deletion limits without sounding like an IP assignment.
- Source: synthesized from https://help.medium.com/hc/en-us/articles/213481318-Medium-Terms-of-Service ; https://substack.com/tos ; https://commons.wikimedia.org/wiki/MediaWiki:Wikimedia-copyrightwarning ; https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-052020-consent-under-regulation-2016679_en
- Author/publication: synthesized from Medium, Substack, Wikimedia, and EDPB consent guidance
- Date: synthesized May 2026 from current terms/guidance
- Applicability: both

---

## D. Q&A Platform Answer-Quality Patterns

### D1. Use voting for ranking, editing for maintenance, and avoid automatic answer expiry
Stack Overflow's core quality loop is voting plus reputation: upvotes signal useful, well-researched posts; downvotes signal wrong or poorly researched posts; reputation then unlocks moderation capacity. Editing is the maintenance layer because posts can be corrected and improved without replacing the answer. Hard answer expiry is a bad default for travel/policy Q&A because old answers may still apply; prefer "last verified" and "needs update" states over hiding answers solely by age.
- Source: https://stackoverflow.com/help/why-vote ; https://stackoverflow.com/help/whats-reputation ; https://stackoverflow.com/help/editing
- Author/publication: Stack Overflow Help Center
- Date: current
- Applicability: Q&A

### D2. Duplicate detection should run before submission, not only after community review
Stack Overflow's Ask Wizard guides first-time askers through title, details, attempted solution, tags, duplicate detection, and review. The duplicate step is based on title and tags, and the asker must confirm that no suggested match answers the question before proceeding. For a 500-questions/day travel platform, this should be a required submission step with a "why this is different" field when a near-match exists.
- Source: https://stackoverflow.com/help/askwizard
- Author/publication: Stack Overflow Help Center
- Date: current
- Applicability: Q&A

### D3. Taxonomy sweet spot: shallow categories plus controlled tags, not a deep category tree
Stack Overflow treats tags as the expert-routing layer: tags describe the question topic, connect experts to answerable questions, and have editable tag wikis; new tag creation is discouraged. Questions allow up to five tags. For ~500 questions/day initial scale, use about 12-20 top-level categories (Visa, Payments, Transport, Telecom, Hotels, Apps, Food, Health, Safety, Shopping, Culture, Itineraries, etc.) plus a controlled tag set of roughly 100-200 tags, with 2-5 tags per question. Fewer categories causes mixed queues; too many categories fragments answerer attention.
- Source: https://stackoverflow.com/help/tagging ; https://stackoverflow.co/advertising/resources/topic-tag-targeting/ ; https://meta.discourse.org/t/guidance-about-category-creation/18540?tl=en
- Author/publication: Stack Overflow Help Center; Stack Overflow advertising docs; Discourse Meta community guidance
- Date: Stack Overflow docs current; Discourse guidance evergreen
- Applicability: Q&A

### D4. Stale answers need visible recency metadata and revalidation workflows
Stack Overflow exposes edited timestamps and revision history rather than expiring answers automatically. Research on obsolete Stack Overflow answers found that once obsolescence is observed, only a minority are updated, and a 2025 study of edited answers shows edits can improve quality but outcomes are inconsistent. For travel policy answers, show "answered", "last edited", and "last verified against policy on [date]"; trigger revalidation when linked official sources change, when a policy tag has a major update, or when users flag "outdated".
- Source: https://internal.stackoverflow.help/en/articles/8858605-edit-a-question-or-answer ; https://arxiv.org/abs/2507.21329 ; https://arxiv.org/abs/1903.12282
- Author/publication: Stack Overflow Internal Help Center; arXiv study "Does Editing Improve Answer Quality on Stack Overflow?"; arXiv study "An Empirical Study of Obsolete Answers on Stack Overflow"
- Date: Stack Overflow docs current; July 2025; 2019 empirical study (evergreen stale-answer pattern)
- Applicability: Q&A

### D5. Anonymous browse is fine; asking should require a trusted account with rate limits
Stack Overflow allows anonymous users to read, answer, and suggest edits, but requires registration to ask new questions or vote. It also uses question bans, asking rate limits, one-question-per-week limits for poorly received histories, and network-level spam/abuse throttles. For this platform: allow anonymous browsing for SEO and traveler utility; require login, verified email, device/IP risk checks, CAPTCHA on risk, and escalating rate limits before asking.
- Source: https://stackoverflow.com/help/why-register ; https://stackoverflow.com/help/question-bans ; https://stackoverflow.com/help/asking-rate-limited ; https://stackoverflow.com/help/abuse-block
- Author/publication: Stack Overflow Help Center
- Date: current
- Applicability: Q&A

### D6. Review queues scale quality control after submission without relying on staff-only moderation
Stack Overflow review queues route system-flagged or user-flagged posts to experienced community reviewers: first posts, low-quality posts, suggested edits, close votes, reopen votes, late answers, and similar workflows. This lets the platform catch unclear questions, non-answers, duplicate answers, and spam after publication without making every answer wait for staff approval. For launch scale, combine automated quality scoring with queues for "first post by user", "answer to policy-sensitive tag", "late answer to old question", and "flagged as outdated".
- Source: https://stackoverflow.com/help/reviews-intro ; https://stackoverflow.com/help/privileges/close-questions ; https://stackoverflow.com/help/deleted-answers
- Author/publication: Stack Overflow Help Center
- Date: current
- Applicability: Q&A
