export type PracticalGotchaPhase = "before-fly" | "setup" | "day-one" | "post-trip";
export type PracticalGotchaApp = "alipay" | "wechat" | "both";

export type PracticalGotcha = {
  id: string;
  phase: PracticalGotchaPhase;
  app: PracticalGotchaApp;
  titleEn: string;
  titleZh: string;
  bodyEn: string;
  bodyZh: string;
  sourceId: string;
};

export const practicalPayments: PracticalGotcha[] = [
  {
    id: "timing",
    phase: "before-fly",
    app: "both",
    titleEn: "Set up both apps 2–4 weeks before you fly",
    titleZh: "出发前 2–4 周完成两个 App 的设置",
    bodyEn: "KYC can take up to 24h, WeChat may need a friend-scan, and your home bank needs time to whitelist Chinese merchants. Doing it all on landing day is a known failure scenario.",
    bodyZh: "实名最长可能要 24 小时；微信可能需要熟人扫码协助；银行需要时间为中国商户加白名单。落地当天临时搞定是高频翻车场景。",
    sourceId: "blog-fanketravel-payments"
  },
  {
    id: "tour-card-dead",
    phase: "before-fly",
    app: "alipay",
    titleEn: "Don't bother with Tour Card — shutting down 2026-05-29",
    titleZh: "Tour Card（即将关停 2026-05-29），不要再用",
    bodyEn: "The Alipay Tour Card mini-program stops accepting new applications on May 29, 2026. Older guides still recommend it; ignore them and bind your Visa/Mastercard directly to the regular Alipay app instead.",
    bodyZh: "Alipay Tour Card 小程序 2026-05-29 停止新申请。旧攻略还在推荐它，不要用——直接在标准 Alipay App 内绑定 Visa / Mastercard。",
    sourceId: "blog-chinaguidelines-tourcard"
  },
  {
    id: "bank-whitelist",
    phase: "before-fly",
    app: "both",
    titleEn: "Call your bank: whitelist China + enable international online purchases",
    titleZh: "提前打电话给发卡行：China 加白名单 + 开启国际在线交易",
    bodyEn: "The #1 card-binding failure is your home bank fraud system blocking the first attempt. The app shows ambiguous \"payment failed\" with no hint that the bank is the cause. Some debit cards also need 3D Secure / international online purchases manually enabled.",
    bodyZh: "绑卡失败首要原因是发卡行风控自动拦截首次中国扣款。App 只显示一句模糊的\"支付失败\"，不提是银行拦的。部分借记卡还需要手动开启 3D Secure / 国际在线交易。",
    sourceId: "blog-wanderinchina-alipay"
  },
  {
    id: "wechat-friend-scan-prearrange",
    phase: "before-fly",
    app: "wechat",
    titleEn: "WeChat friend-scan: line one up before you fly",
    titleZh: "微信熟人扫码：出发前先安排好",
    bodyEn: "About 80% of new WeChat accounts hit a mandatory \"have a friend scan this QR\" screen. The verifier must have used WeChat 6+ months, have WeChat Pay active, and not have verified anyone else this month. Remote scan via screen-share works — solo travellers should ask a friend in advance.",
    bodyZh: "约 80% 的新微信账号会卡在\"找熟人扫码验证\"那一步。验证人必须用微信 6 个月以上、开了微信支付、本月没帮别人验证过。可远程让对方截图扫码——独行旅客出发前先找好人。",
    sourceId: "blog-realchinatrip-wechat"
  },
  {
    id: "wechat-register-prefly",
    phase: "before-fly",
    app: "wechat",
    titleEn: "Register WeChat before boarding — SMS unreliable on roaming/eSIM",
    titleZh: "出发前先注册微信——漫游 / eSIM 收 SMS 不稳",
    bodyEn: "International roaming SMS into China is unreliable and eSIM data access does not guarantee SMS delivery. Complete WeChat registration on home-country signal, not after landing.",
    bodyZh: "中国境内国际漫游 SMS 不稳定，eSIM 有数据不代表能收短信。注册要在出发地的本地网络完成，落地后再注册容易卡在收不到验证码的死循环。",
    sourceId: "blog-baoziinchina-wechat"
  },

  {
    id: "alipay-app-name",
    phase: "setup",
    app: "alipay",
    titleEn: "Install the standard Alipay (blue icon) — not AlipayHK",
    titleZh: "安装标准支付宝（蓝色图标）——不是 AlipayHK",
    bodyEn: "There is one app for foreign tourists: standard Alipay (Hangzhou Technology Co., bundle id com.eg.android.AlipayGphone). AlipayHK is a separate Hong Kong product that does NOT work on the mainland.",
    bodyZh: "只用一个 App：标准支付宝（杭州蚂蚁，bundle id com.eg.android.AlipayGphone）。AlipayHK 是香港独立产品，在大陆用不了。",
    sourceId: "blog-wanderinchina-alipay"
  },
  {
    id: "vpn-off",
    phase: "setup",
    app: "both",
    titleEn: "Turn VPN OFF during KYC, card binding, and payments",
    titleZh: "实名 / 绑卡 / 付款时必须关 VPN",
    bodyEn: "Both Alipay and WeChat compare GPS (Beijing) against IP location (e.g. Los Angeles). The mismatch triggers fraud flags that can freeze the account mid-KYC and require a manual support ticket to recover.",
    bodyZh: "两个 App 都会比对 GPS（北京）和 IP 定位（比如 LA）。不一致直接触发风控冻结，最容易在实名上传那一步卡死，要走客服工单解。",
    sourceId: "blog-hiddenchina-payments"
  },
  {
    id: "alipay-name-mrz",
    phase: "setup",
    app: "alipay",
    titleEn: "Use your passport MRZ name exactly — uppercase, no nicknames",
    titleZh: "实名姓名严格按护照机读区（MRZ）填——大写，不要用昵称",
    bodyEn: "Real-name verification rejects mismatched names: middle names, hyphenated surnames, double-barrelled names. The app gives no specific reason — it just says \"verification failed\".",
    bodyZh: "实名校验对姓名匹配很严：中间名、连字符姓、双姓常被拒。App 只回一句\"实名失败\"，不说为啥失败。",
    sourceId: "blog-letstravel-alipay"
  },
  {
    id: "wechat-microcharge",
    phase: "setup",
    app: "wechat",
    titleEn: "WeChat's USD 0.05 verification charge will trigger your bank's fraud alert",
    titleZh: "微信绑卡那笔 0.05 美元验证扣款会触发发卡行风控",
    bodyEn: "WeChat charges ~$0.05 USD to validate the card during binding. This tiny charge is the most common reason the binding fails. If you see the charge get rejected, immediately approve it in your banking app and retry the binding within the same session.",
    bodyZh: "微信绑卡时会扣约 0.05 美元做验证。这笔小额扣款是绑卡失败的高频原因。在 App 里看到这笔被拒后，立刻去网银里通过它，再重新绑卡。",
    sourceId: "blog-wildchina-wechat"
  },
  {
    id: "alipay-kyc-500",
    phase: "setup",
    app: "alipay",
    titleEn: "USD 500 is the real KYC threshold — not the PBOC USD 5,000 figure",
    titleZh: "实名审核真正的门槛是 500 美元——不是央行公告的 5,000",
    bodyEn: "PBOC raised the policy limit to USD 5,000/tx in 2024, but Alipay's own identity-verification system kicks in at USD 500. Plan for the lower number when budgeting big-ticket items (hotel deposits, high-speed rail).",
    bodyZh: "央行 2024 年把政策上限提到 5,000 美元/笔，但 Alipay 自家系统在 500 美元就开始要求二次验证。预算大额（酒店押金、高铁票）按 500 来算。",
    sourceId: "blog-wildchina-alipay"
  },
  {
    id: "wechat-15k-cap",
    phase: "setup",
    app: "wechat",
    titleEn: "WeChat: hard RMB 15,000 stay-total cap until you finish real-name auth",
    titleZh: "微信：实名前整次行程累计上限 RMB 15,000",
    bodyEn: "Without real-name authentication, WeChat caps cumulative spend at ~RMB 15,000 for the entire stay (not per transaction, not per day). Hits sooner than most people expect. Complete real-name early.",
    bodyZh: "没完成实名时，微信对你这次在中国累计支出上限约 RMB 15,000——不是单笔不是单日，整次行程的累计。比想象中快用完，先完成实名再大额消费。",
    sourceId: "blog-wildchina-wechat"
  },

  {
    id: "personal-qr-reverse-scan",
    phase: "day-one",
    app: "both",
    titleEn: "Personal QR codes reject foreign cards — let merchant scan you instead",
    titleZh: "个人收款码不收外卡——改让商家扫你的码",
    bodyEn: "Street vendors and small restaurants almost always show a personal collection QR (个人收款码), not a business merchant code. These only accept payment from RMB wallet balance or a Chinese bank card — your foreign-card-backed Alipay/WeChat is rejected. Workaround: open YOUR app's payment barcode and ask them to scan you. Reverse direction usually works.",
    bodyZh: "街边小店、馆子用的几乎都是\"个人收款码\"，不是\"商家收款码\"。个人码只接受 RMB 余额或中国银行卡，外卡绑的 Alipay / 微信会被拒。变通：打开自己 App 里的付款条码，让对方扫你。反向扫描多半能成。",
    sourceId: "blog-travelchinawith-alipay"
  },
  {
    id: "split-200",
    phase: "day-one",
    app: "alipay",
    titleEn: "Over RMB 200? Split the bill — Alipay charges 3% above that",
    titleZh: "超过 RMB 200 拆单付——Alipay 这条线以上收 3% 手续费",
    bodyEn: "Alipay foreign-card transactions: 0% fee under RMB 200, 3% over. Splitting a 400 RMB bill into two 200 RMB scans eliminates the fee. Cashiers in China understand split payment without explanation.",
    bodyZh: "Alipay 外卡：单笔 RMB 200 以内免手续费，超过收 3%。把一笔 400 拆成两笔 200，手续费全省。中国收银员对拆单很习惯，不用解释。",
    sourceId: "blog-wanderinchina-alipay"
  },
  {
    id: "cash-backup",
    phase: "day-one",
    app: "both",
    titleEn: "Carry RMB 200–500 cash — by law (since 2026-02-01) merchants must accept it",
    titleZh: "随身备 RMB 200–500 现金——2026-02-01 起法律强制商家收现金",
    bodyEn: "Since 2026-02-01 Chinese law requires merchants to accept physical RMB; refusing now carries penalties. Reliable cash sources: 7-Eleven / FamilyMart / Lawson; ICBC / BOC / CCB ATMs accept Visa/Mastercard with English UI.",
    bodyZh: "2026-02-01 起法律强制商家收人民币现金，拒收会被罚。可靠取/付现金渠道：7-11 / 全家 / 罗森；中行 / 工行 / 建行 ATM 接受 Visa/MC，有英文界面。",
    sourceId: "blog-hiddenchina-payments"
  },
  {
    id: "minigram-sim-required",
    phase: "day-one",
    app: "wechat",
    titleEn: "Didi / Meituan / Ele.me mini-programs need a +86 SIM",
    titleZh: "微信里的 Didi / 美团 / 饿了么小程序，要 +86 中国手机号",
    bodyEn: "Even with WeChat Pay working, the Didi / Meituan / Ele.me mini-programs INSIDE WeChat require a Chinese mainland phone number to register. Use the standalone Didi app instead (which accepts foreign numbers + foreign cards).",
    bodyZh: "微信支付能用归能用，但微信里那个 Didi / 美团 / 饿了么小程序要求注册时填 +86 中国号，外国号注册不进。改用独立的 Didi App（接受外国号 + 外卡）。",
    sourceId: "blog-wildchina-wechat"
  },

  {
    id: "alipay-3month-freeze",
    phase: "post-trip",
    app: "alipay",
    titleEn: "Alipay freezes after ~3 months of inactivity",
    titleZh: "Alipay 闲置约 3 个月会自动冻结",
    bodyEn: "If you don't use Alipay for ~3 months after returning home, the account enters a restricted state. Reactivation needs passport + selfie video + transaction explanation. Returning visitors hit a locked account on Day 1 of their next trip — start unlocking before you fly back.",
    bodyZh: "回国后约 3 个月不用，Alipay 自动进入受限状态。重新激活要传护照 + 自拍视频 + 写最近一笔交易。下次再来中国第一天才发现被锁就晚了——下次出发前提前解。",
    sourceId: "blog-letstravel-alipay"
  },
  {
    id: "refund-3-7-days",
    phase: "post-trip",
    app: "alipay",
    titleEn: "Refunds take 3–7 business days to your card — not instant to wallet",
    titleZh: "退款 3–7 个工作日回信用卡——不是立刻回钱包",
    bodyEn: "Foreign-card-backed Alipay refunds go back to the issuing card on a 3–7 business day cycle, not instantly to your Alipay wallet. A failed train booking will show \"refunding\" for days with no balance in the app — that's normal.",
    bodyZh: "外卡 Alipay 的退款 3–7 个工作日回到原信用卡，不是立刻回 Alipay 钱包。订票失败显示\"退款中\"好几天 App 里没钱回——这是正常流程。",
    sourceId: "blog-hiddenchina-payments"
  },
  {
    id: "wechat-redpacket-blocked",
    phase: "post-trip",
    app: "wechat",
    titleEn: "Foreign WeChat: red packets and P2P transfers are permanently blocked",
    titleZh: "外卡微信：红包和好友转账永久禁用",
    bodyEn: "Foreign-card-backed WeChat accounts cannot send OR receive red packets, and cannot transfer money to other users — only merchant QR payments work. If a Chinese friend wants to split dinner via WeChat transfer, you'll need an alternative (cash, Alipay merchant scan).",
    bodyZh: "外卡微信账号不能发也不能收红包，也不能给好友转账，只能扫商家收款码。中国朋友要发红包 / 转账给你 AA，得换别的方式（现金、Alipay 商家码）。",
    sourceId: "blog-ltl-wechat"
  }
];

export const practicalPaymentsSourceIds = (): string[] =>
  Array.from(new Set(practicalPayments.map((g) => g.sourceId)));
