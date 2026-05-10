/**
 * Phase 2 preview data — visual showcase of the Q&A and travel-share features
 * before the backend is built. All sample content is illustrative.
 */

export type BadgeTier = {
  id: 0 | 1 | 2 | 3;
  nameEn: string;
  nameZh: string;
  criteriaEn: string;
  criteriaZh: string;
  rightsEn: string;
  rightsZh: string;
  colorClass: string;
};

export const badgeLadder: BadgeTier[] = [
  {
    id: 0,
    nameEn: "Visitor",
    nameZh: "访客",
    criteriaEn: "Any logged-in user",
    criteriaZh: "任意登录用户",
    rightsEn: "Can ask questions, can vote on existing answers.",
    rightsZh: "可提问、可对已有答案投票。",
    colorClass: "bg-paper text-muted border-line"
  },
  {
    id: 1,
    nameEn: "Community Member",
    nameZh: "社区成员",
    criteriaEn: "3+ questions with net-positive votes + verified email",
    criteriaZh: "3 个被点赞问题 + 邮箱已验证",
    rightsEn: "Can post answers; cannot yet display a city-resident badge.",
    rightsZh: "可回答；暂不能展示本地常驻徽章。",
    colorClass: "bg-jade-soft text-jade border-jade/30"
  },
  {
    id: 2,
    nameEn: "Local Answerer",
    nameZh: "本地答主",
    criteriaEn: "Tier 1 + verified +86 phone number + 5 answers (≥3 with score ≥3)",
    criteriaZh: "T1 + 完成 +86 手机号 OTP + 累计 5 个答案，其中至少 3 个分数 ≥3",
    rightsEn: "Answers display a \"Local\" badge. Cannot vouch for others yet.",
    rightsZh: "答案旁显示\"本地\"徽章；暂不能为他人作担保。",
    colorClass: "bg-emerald-100 text-emerald-900 border-emerald-300"
  },
  {
    id: 3,
    nameEn: "Verified Local",
    nameZh: "认证本地",
    criteriaEn: "Tier 2 + vouched by 2 existing T3 users, OR 50 cumulative net-positive answer votes",
    criteriaZh: "T2 + 2 位 T3 用户担保，或累计 50 个净赞",
    rightsEn: "Answers display a verified-local badge. Can vouch for new T3 candidates (capped).",
    rightsZh: "显示\"认证本地\"徽章；可为新 T3 候选人作担保（每人有上限）。",
    colorClass: "bg-amber-100 text-amber-900 border-amber-300"
  }
];

export type SampleQA = {
  id: string;
  questionEn: string;
  questionZh: string;
  topic: string;
  cityScope?: "beijing" | "shanghai" | "guangzhou" | "shenzhen";
  answer: {
    answererTier: 0 | 1 | 2 | 3;
    answererCity: string;
    bodyEn: string;
    bodyZh: string;
    votes: number;
    postedDays: number;
    lastVerifiedAgainstPolicy: string;
  };
};

export const sampleQuestions: SampleQA[] = [
  {
    id: "q-bj-airport-late",
    questionEn: "Landing at PEK at 23:30 — will the Airport Express still be running?",
    questionZh: "晚上 23:30 落地首都机场，机场快线还有车吗？",
    topic: "Transport",
    cityScope: "beijing",
    answer: {
      answererTier: 3,
      answererCity: "Beijing · 9 yrs",
      bodyEn: "Last train from PEK T2/T3 to Dongzhimen leaves around 22:50. After that, take the airport shuttle bus or a Beijing B-plate taxi from the official rank — your hotel can confirm fare before you flag one.",
      bodyZh: "首都机场线 T2/T3 末班车约 22:50。之后只能坐机场大巴或在官方排队点打表京 B 出租车，提前问酒店大概多少钱。",
      votes: 24,
      postedDays: 4,
      lastVerifiedAgainstPolicy: "2026-04-15"
    }
  },
  {
    id: "q-sh-allergy-card",
    questionEn: "Severe peanut allergy — does the Mandarin allergy card actually work in small Shanghai restaurants?",
    questionZh: "严重花生过敏，中文过敏卡在上海小馆子真的有用吗？",
    topic: "Food / Allergy",
    cityScope: "shanghai",
    answer: {
      answererTier: 2,
      answererCity: "Shanghai · 4 yrs",
      bodyEn: "Mostly. Hand the card to the kitchen, not the waiter. Watch out for shared woks — peanut oil is poured in early. Stick to clearly-fried-to-order venues, avoid pre-prepped sauces. If the staff look uncertain, leave.",
      bodyZh: "基本能用。把卡递给后厨不是服务员。要注意共用炒锅—花生油很早就下锅。优先去明火现炒的店，避开预制酱料。员工答得含糊就别冒险。",
      votes: 17,
      postedDays: 12,
      lastVerifiedAgainstPolicy: "2026-03-22"
    }
  },
  {
    id: "q-sz-octopus",
    questionEn: "Coming from HK — what's the actual cheapest card setup for 3 days in Shenzhen?",
    questionZh: "从香港过去，深圳玩 3 天最便宜的交通卡组合是？",
    topic: "Transport",
    cityScope: "shenzhen",
    answer: {
      answererTier: 3,
      answererCity: "Shenzhen · 6 yrs",
      bodyEn: "Skip Octopus — doesn't work on SZ Metro. Three days = activate Alipay transit QR for Shenzhen (no deposit, refund unused balance). Need physical card? Shenzhen Tong at any service centre, ¥20 deposit refundable.",
      bodyZh: "别想八达通——深圳地铁不收。三天的话直接 Alipay 公交码开通深圳就行（无押金，余额可退）。要实体卡就在任意客服中心办深圳通，¥20 押金可退。",
      votes: 31,
      postedDays: 2,
      lastVerifiedAgainstPolicy: "2026-05-01"
    }
  }
];

export type SampleShare = {
  id: string;
  authorAlias: string;
  authorCountry: string;
  cityEn: string;
  cityZh: string;
  daysAgo: number;
  textEn: string;
  textZh: string;
  imageCount: number;
  status: "published" | "in-review";
};

export const sampleShares: SampleShare[] = [
  {
    id: "share-1",
    authorAlias: "Ana M.",
    authorCountry: "ES",
    cityEn: "Guangzhou",
    cityZh: "广州",
    daysAgo: 3,
    textEn: "Three things I wish I'd known before flying to Guangzhou: (1) Canton Fair was on, restaurant prices were 40% up — book Pazhou hotels weeks early. (2) The yum cha tea-seat fee surprised me until a local explained — it's normal, not a scam. (3) Metro foreign-card tap actually works fine since October 2025; was way easier than I read in 2024 blogs.",
    textZh: "去广州前希望知道的三件事：(1) 广交会期间餐厅涨 40%，琶洲酒店要提前几周订。(2) 早茶茶位费一开始我以为被宰，后来本地朋友说是正常的。(3) 地铁外卡刷闸 2025-10 起就能用了，2024 年攻略说不行其实早过期了。",
    imageCount: 3,
    status: "published"
  },
  {
    id: "share-2",
    authorAlias: "Daniel K.",
    authorCountry: "DE",
    cityEn: "Shanghai",
    cityZh: "上海",
    daysAgo: 9,
    textEn: "PSA for fellow Germans: do NOT try to register WeChat after landing — German T-Mobile roaming SMS just doesn't deliver in China. I was stuck for 6 hours. My hotel concierge eventually did the friend-scan in 30 seconds. Set this up before boarding next time.",
    textZh: "提醒德国同胞：千万别落地后再注册微信。T-Mobile 漫游短信在中国就是收不到。我卡了 6 小时，最后酒店前台 30 秒帮我扫码搞定。下次一定出发前在德国本地搞好。",
    imageCount: 1,
    status: "published"
  }
];

export type ModerationStep = {
  id: string;
  titleEn: string;
  titleZh: string;
  bodyEn: string;
  bodyZh: string;
};

export const moderationFlow: ModerationStep[] = [
  {
    id: "submit",
    titleEn: "1. You write & authorize",
    titleZh: "1. 写完并勾选授权",
    bodyEn: "Up to 1500 chars + 5 photos. You explicitly tick \"I authorize publication and translation of this content\". Both EXIF and original language are stored.",
    bodyZh: "1500 字 + 最多 5 张图。必须勾选\"我授权发布和翻译这条内容\"。EXIF 会被剥掉，原始语言版本会被保留。"
  },
  {
    id: "keyword",
    titleEn: "2. Keyword filter",
    titleZh: "2. 关键词硬拦截",
    bodyEn: "Hard reject: URLs, phone numbers, prices in ¥/$/€/£, email addresses, WeChat IDs, contact-soliciting words. No commercial leakage path.",
    bodyZh: "URL / 手机号 / 含 ¥/$/€/£ 的价格 / 邮箱 / 微信号 / 联系类用语 → 命中即拒。封死商业引流路径。"
  },
  {
    id: "ai",
    titleEn: "3. AI moderation",
    titleZh: "3. AI 审核",
    bodyEn: "OpenAI omni-moderation (text + image, 13 categories) scores the post. Chinese text is auto-translated to English first because no production API handles Chinese well. Score < 0.2 → auto-publish; > 0.85 → auto-reject; 0.2–0.85 → human queue.",
    bodyZh: "OpenAI omni-moderation 给文本 + 图片 13 类打分。中文先自动翻成英文再过 API（目前没有生产级中文审核 API）。<0.2 直发；>0.85 直拒；0.2–0.85 进人工队列。"
  },
  {
    id: "review",
    titleEn: "4. Human review (gray zone)",
    titleZh: "4. 人工复核（灰区）",
    bodyEn: "About 5–15% lands here. Reviewer sees original content + AI scores per category + policy links + approve / reject / escalate. Target SLA 2 hours. Decision is logged with reviewer ID.",
    bodyZh: "约 5–15% 进这层。审核员看原文 + AI 各类分数 + 政策条款 + 通过/拒/上报。目标 SLA 2 小时。决策带审核员 ID 写入日志。"
  },
  {
    id: "publish",
    titleEn: "5. Publish or notify",
    titleZh: "5. 发布或通知",
    bodyEn: "Approved → published with city tag, country code, and \"visitor note · authored by [alias] · not officially verified\" badge. Rejected → email with reason.",
    bodyZh: "通过 → 带城市 tag、国家码、\"访客笔记 · [署名] · 非官方核验\"标签发布。拒绝 → 邮件说明原因。"
  }
];
