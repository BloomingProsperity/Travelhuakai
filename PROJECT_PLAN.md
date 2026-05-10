# China Atlas Museum — 项目计划 v1

**最后更新**: 2026-05-10  
**目标用户**: 来中国旅游的外国游客  
**产品定位**: 给外国游客做规划 + 推荐的中文/英文双语图鉴  
**研究来源**: [Codex 痛点研究](.omc/artifacts/ask/codex-pain-points-a-reddit-r-travelchina-r-china-r-expats-tripadvi-2026-05-09T10-20-08-156Z.md)、Sonnet document-specialist 研究（合并入本文档）

---

## 0. Phase 1 范围（聚焦决策 2026-05-09）

**只做四个城市**：北京 / 上海 / 广州 / 深圳  
**只解决五大实务痛点**（按主页优先级）：

1. **过境 / 签证** — 240h 过境、单方面免签、线上入境卡
2. **支付** — Alipay/WeChat Pay 出发前设置、外卡、现金、海关申报
3. **交通** — 机场到市区、地铁、12306 国际版、网约车
4. **吃饭** — 各城食物文化、外国友好餐区、过敏卡、外卖
5. **紧急 / 语言 / 医疗** — 外籍医院、领事馆、110/119/120、城市英文热线

**博物馆预约导航**（F2）→ Phase 1 只做调研，**不上线**，留 Phase 2

**全国地图**仍作为视觉入口，但**不是主导航**。所有交互聚焦四城。

---

## 0.1 不可逾越的红线（产品宪法）

| 规则 | 含义 |
|---|---|
| **官方源优先（2026-05-10 修正）** | 政策事实 / 数字 / 阈值 / 地址 / 营业时间 → 仅官方源（`*.gov.cn`、`mct.gov.cn`、`nia.gov.cn` 等）。**实操细节 / 坑点 / "怎么真的做"** → 允许私人博客、Reddit、老外社区，必须带署名 + 日期 + 域名标 `[BLOG]`。.gov.cn 不会公开这些操作层。 |
| **零商业推广** | 不接 Trip.com / Klook / Ctrip / Booking / Agoda / Viator / GetYourGuide。不卖票，不内嵌预订器，不赚佣金。链接只指向官方预约入口。 |
| **可追溯标记** | 每条事实显示 `[来源: domain.gov.cn] [核验: YYYY-MM-DD]`。无法核验的标"官方资料待核验"且 30 天内必须移除或更新。 |
| **游客笔记需授权** | 任何用户提交内容必须有明确授权流程；MVP 阶段**不上**用户提交通道。 |

---

## 1. 痛点矩阵（合并 Codex + Sonnet 研究）

| # | 维度 | 关键痛点 | 当前过期攻略陷阱 |
|---|---|---|---|
| 1 | **签证 / 入境** | 攻略仍讲 72/144 小时过境免签；实际从 2024-12 起升级到 **240 小时**，65 个口岸、24 省市；51 国 30 天单方面免签政策 2026-12-31 到期；2025-11-20 起入境卡可线上填报，已有假网站收费 | 旧博客全错 |
| 2 | **支付** | Alipay / WeChat Pay 必须出发前用外卡绑定；单笔上限 USD 2,000、年累 USD 50,000（PBOC）；旧攻略仍讲 TourPass，已不是主线 | 落地才发现付不了 |
| 3 | **信息可发现性** | 故宫 `intl.dpm.org.cn` / 国博 `pcticket.chnmuseum.cn/museum-en/` 各自一套；颐和园线上预约**强制要求中国大陆手机号**，外国号无解，只能现场买；省级博物馆基本是微信小程序 | 到了门口才知道要预约 |
| 4 | **通讯 / 网络** | Google Maps、Gmail、WhatsApp、Instagram 在大陆不可用；VPN 在境内不能下载；本地 SIM 受墙；国际漫游 eSIM 是绕墙的合规路径但必须出发前买 | 到了找不到地图 |
| 5 | **交通** | 12306 国际版要护照实名 + 3-5 天人脸识别审核或线下窗口；DiDi 国际卡支付成功率不稳定；地铁外卡支付城市差异大 | 临时买票来不及 |
| 6 | **语言 / 紧急** | 120 急救调度普通话为主；公立医院前台中文；菜单二维码点餐零英文；110/119/120 多数游客不知道 | 出事找不到人 |
| 7 | **博物馆 / 景点** | 故宫每日 4 万限流、零当日票；多数博物馆周一闭馆；OCR 闸机对部分护照失败；英文导览要单独租 | 排队进不去 |

---

## 2. Phase 1 优先 Feature（按主页五大支柱）

| # | Feature | 状态 |
|---|---|---|
| F1 | 入境资格校验器（Visa Checker） | Phase 1 必做 |
| F3 | 出发前支付清单（Payments Checklist） | Phase 1 必做 |
| F-Transport | 四城交通实务页（Transport Guide × 4 城） | Phase 1 必做（替代旧 F2 位置） |
| F-Food | 四城餐饮实务页（Food Guide × 4 城）+ 过敏中文卡 | Phase 1 必做 |
| F4 | 出发前网络与应急简报（Connectivity & Emergency） | Phase 1 必做 |
| F5 | 政策时效仪表盘（Travel Alerts） | Phase 1 必做 |
| ~~F2~~ | ~~博物馆预约导航器~~ | **Phase 1 仅调研，Phase 2 实现** |

### F1. 入境资格校验器（Visa Eligibility Checker）

**解决**：51 国 30 天单方面免签 + 240 小时过境免签 + 双边免签三套规则混淆；2026-12-31 到期日盲区。

**官方源**：
- `en.nia.gov.cn/n147418/n147463/c183390/content.html` — 单方面免签国家清单
- `en.nia.gov.cn/n147418/n147463/c156094/content.html` — 过境免签清单 + 65 口岸
- `english.www.gov.cn/news/202511/04/content_WS69094ae0c6d00ca5f9a07472.html` — 2025-11 240h 升级公告
- `visaforchina.org` — 仍需签证国家的官方申请入口

**验证**：每月人工 diff NIA 英文页；过期日 60 天前编辑提醒；典型行程跑单元测试。

**MVP**：国籍 → 入境口岸 → 离境口岸 → 第三地选择器，输出"是否免签 / 类型 / 到期 / 官方链接"。**不**做申请代办、**不**跳第三方签证服务。

---

### F-Transport. 四城交通实务页（替代旧 F2 位置）

**解决**：每城地铁外卡接受度不同；机场到市区怎么走；12306 国际版护照实名审核要 3-5 天；DiDi 国际卡支付不稳定。

**官方源**：
- `12306.cn/en/faq.html` — 高铁国际版购票
- 各城地铁官网：`bjsubway.com/en/`、`shmetro.com/en/`、`gzmtr.com/en/`、`szmc.net/en/`
- 各机场官网：`en.bcia.com.cn`、`shanghaiairport.com`、`baiyunairport.com`、`szairport.com`
- 各城交通局 `*.gov.cn`

**验证**：每条票价/时刻/支付支持每季度复查；接受官方公告日期戳。

**MVP**：每城一页，5 块内容：(1) 机场到市区 3 选项（最便宜 / 最快 / 最稳） (2) 地铁外卡/Alipay 实测支持现状 (3) 12306 国际版购票 + 护照实名指引 (4) DiDi 中文叫车 + 上车点中文模板 (5) 出租车现金/扫码差异。

---

### F-Food. 四城餐饮实务页

**解决**：菜单二维码点餐零英文；过敏/忌口沟通失败；不知道哪个区有英文菜单。

**官方源**：
- 各城文旅厅 / 文旅局餐饮指引页（`wlt.beijing.gov.cn` 等）
- `english.beijing.gov.cn` / `english.shanghai.gov.cn` / `english.gz.gov.cn` / `english.sz.gov.cn` 城市英文门户
- 国家市场监管 `samr.gov.cn` 食品安全规范

**红线**：**不**做餐厅排名 / 推荐 / 团购码。只做事实性指南（食物文化 + 区域 + 中文卡模板）。

**MVP**：每城一页：(1) 食物文化 1 段（如北京烤鸭历史 / 广州早茶礼仪） (2) 外国人友好餐区列表（带官方英文门户引用，无具体餐厅） (3) 中文过敏卡 PDF 模板（"我对XX过敏，吃后会..."双语） (4) 美团/饿了么外国人能否使用（基于官方公告） (5) 自来水可饮性 + 餐厅水温习俗（实务事实）。

---

### F2.（推迟到 Phase 2）博物馆预约导航器

Phase 1 **不实现**，但**先调研**——需要为四城每个核心博物馆收集：(1) 预约方式 (2) 是否要中国手机号 (3) 是否接受外国护照数字预约 (4) 日限流量 (5) 闭馆日 (6) 官方联系电话/邮箱。调研产物存 `data/research/museum-bookings.md`，Phase 2 实施时直接转 ts。

调研已请求 Codex（task ID `bmh67xduz`），完成后会注入此处。

---

### F3. 出发前支付准备清单（Pre-Arrival Payments Checklist）

**解决**：到了中国才发现付不了；旧攻略讲 TourPass 已过期；现金海关申报盲区。

**官方源**：
- `english.www.gov.cn/news/202404/11/content_WS6617c858c6d0868f4e8e5f4d.html` — 国务院支付便利化指引
- `english.customs.gov.cn` — 海关出入境现金申报规则（USD 5,000 阈值）
- `intl.alipay.com` — Alipay 国际官方
- `pay.weixin.qq.com` — WeChat Pay 官方

**验证**：单笔/年限额季度复查；任何金额标注"截至 YYYY-MM"；游客反馈仅作"未验证提醒"不作主源。

**MVP**：四步清单：(1) 出发前绑外卡到 Alipay/WeChat (2) 知道单笔 USD 2,000 / 年 USD 50,000 限额 (3) 现金 > USD 5,000 海关申报 (4) UnionPay ATM 网点。每条一个官方链接。

---

### F4. 出发前网络与应急简报（Connectivity & Emergency Briefing）

**解决**：到了发现 Google Maps 用不了；不知道 110/120/119；不知道大使馆。

**官方源**：
- `english.www.gov.cn/services/visitchina` — 国务院"来华旅游"实务页
- `gaode.com` / `map.baidu.com` — 国家测绘局许可的本地地图（替代 Google Maps）
- `english.beijing.gov.cn/quickguideservices/medicalguide/index.html` — 北京外籍医疗指南（其它省同位）
- `mfa.gov.cn` 领事司 — 各国驻华使领馆联系方式

**红线**：**只**说本地可用应用（高德、百度翻译、微信），**不**讨论 VPN / 翻墙 / Google 服务。法律风险。

**MVP**：单页"出发前清单"：(1) 装高德 + 百度翻译 (2) 设好 Alipay/WeChat (3) 国际漫游 SIM/eSIM 类目级建议（不点名品牌） (4) 110 / 119 / 120 应急号 (5) 自己国家的驻华大使馆电话（按国籍展开）。

---

### F5. 政策时效仪表盘（Policy Status Dashboard）

**解决**：政策跑得比攻略快；2026-12-31 单方面免签到期；博物馆国假日临时闭馆。

**官方源**：NIA / 国务院新闻办 / MCT / 各景点官方公告页。

**验证**：每条政策项目有"核验日"；> 30 天显示"出行前请重新确认"；硬到期日（如免签 2026-12-31）显示倒计时；改动用"已被取代"标签 + 新源 URL，不静默删除旧条目。

**MVP**：站点 Header 加 "Travel Alerts" 链接，三栏：(A) 当前免签清单 + 到期日 (B) 240h 过境免签 65 口岸 (C) 主要博物馆未来 30 天闭馆日。每条来源链接。

---

## 3. 信息架构调整（v2 当前 → Phase 1 目标）

```
当前 v2:                                Phase 1 目标:
─────────────────                       ─────────────────────────────
Hero: 中国地图                          Hero: 中国地图（仅四城高亮 +
Video: 历史演变                                Travel Alerts 横幅）
Atlas: 全国 33 省 + 6 省的城市档案      ─────────────────────────────
Museums: 博物馆优先模板                   主导航五大实务支柱：
Sources: 来源规则                          1. Entry & Visa  (F1)
                                          2. Payments      (F3)
                                          3. Transport     (F-Transport)
                                          4. Food          (F-Food)
                                          5. Emergency     (F4)
                                       ─────────────────────────────
                                       City Hub: 北京 / 上海 / 广州 / 深圳
                                          每城页 = 上述 5 大支柱的本地版
                                       ─────────────────────────────
                                       Travel Alerts (顶 nav 入口, F5)
                                       History Video → 城市页历史 tab
                                       Sources → 散落每条事实的内联 badge
```

**砍**：
- "Sources Note" 单独成页 → 内联 badge
- "History Video" 主导航 → 城市页历史 tab
- 全国 33 省 atlas → 仅四城为主，地图保留作可视入口

**加**：
- 五大支柱主导航
- 北上广深四城 Hub 页（每页五大支柱本地化）
- "Travel Alerts" 仪表盘
- 全站事实级来源 badge

---

## 4. 数据可追溯协议（Source Traceability Protocol）

| 规则 | 内容 |
|---|---|
| R1 | 每条事实带 `[Source: domain] [Verified: YYYY-MM-DD]` 行内 badge。 |
| R2 | 找不到官方源 → 标"Official-Pending"琥珀色 badge；30 天内必须解决。 |
| R3 | 政策有官方到期日 → 显示倒计时，到期前 60 天编辑团队收到提醒。 |
| R4 | 双语翻译 → "Translated from [official URL] — translation not certified by issuing authority"。高敏感（签证/海关）必须中英对照。 |
| R5 | 禁止"引用洗白"——博客/视频可作发现路径，不能作引用源。 |
| R6 | URL 注册表（项目内部 spreadsheet，不展示）维护：URL + 抓取日 + 双语标题 + 该 URL 支撑的具体事实。 |

---

## 5. 风险

| # | 风险 | 缓解 |
|---|---|---|
| R1 | **签证政策剧烈变动**（2024-2025 已多次调整，2026-12-31 单方面免签到期） | F5 仪表盘 + 60 天前编辑提醒；网站显示"to be confirmed"区块 |
| R2 | **官方 URL 改版无 301**（NIA / 故宫 / 国博 都改过 URL） | URL 注册表 + 月度自动 link check + 72h 失效降级 |
| R3 | **翻译错误**（签证/海关法律术语） | 高敏感页面双语对照展示原文，不用我们的译文做权威 |
| R4 | **博物馆系统碎片化**（颐和园规则只在北京 12345 FAQ 提了一句） | 每个博物馆卡显示"last tested"日 + 官方电话/邮箱兜底 |
| R5 | **网络章节被误读为 VPN 教程** | 章节框架完全围绕"用什么本地应用"，不列禁用清单；上线前法务复核 |
| R6 | **用户提交内容授权问题** | MVP 不上用户提交通道；将来上必须先做授权流程，不补丁式后加 |
| R7 | **"商业中立"被边缘破坏**（如官方页面里有付费体验） | 只链官方"参观/预约"主页，不链具体付费档；票价作为事实展示 + 来源链接，不做"推荐" |

---

## 6. Phase 1 立即可做的下一步

按现有 React + Vite + Tailwind v4 + 天地图底图栈，按依赖顺序：

| 序 | 工作 | 涉及文件 / 位置 | 估时 |
|---|---|---|---|
| 1 | URL 注册表 `src/data/sources.ts`，所有官方源在此一份（id + url + 核验日 + 描述） | 新文件 | 半天 |
| 2 | 来源 badge 组件 `components/common/SourceBadge.tsx`（接收 source id，渲染统一样式） | 新文件 | 半天 |
| 3 | `src/data/entry-policies.ts`：51 国单方面免签 + 240h 过境清单 + 65 口岸 | 新文件 | 半天 |
| 4 | F1 `components/pillar/VisaChecker.tsx` | 新文件 | 1 天 |
| 5 | F3 `components/pillar/PaymentsChecklist.tsx` | 新文件 | 半天 |
| 6 | F4 `components/pillar/EmergencyBriefing.tsx`（连同应急号 + 大使馆查询） | 新文件 | 1 天 |
| 7 | F-Transport：`data/transport-by-city.ts` + `components/pillar/TransportGuide.tsx`（按城市切换） | 新文件 | 1.5 天（含数据） |
| 8 | F-Food：`data/food-by-city.ts` + `components/pillar/FoodGuide.tsx` + 过敏卡 PDF 模板 | 新文件 | 1.5 天 |
| 9 | F5 `components/policy/TravelAlerts.tsx`（横幅 + 仪表盘，全站可见） | 新文件 + `SiteHeader.tsx` 改 | 1 天 |
| 10 | 主导航重构：五大支柱 nav + 四城 hub，去掉 Atlas 主导航位 | `App.tsx` + `SiteHeader.tsx` + 新增 `pages/` | 1 天 |
| 11 | 四城 hub 页：每页用 5 大支柱组件本地化展示 | `pages/CityHub.tsx` + 路由 | 1 天 |
| 12 | 砍掉旧主导航的 Atlas / History Video 主入口，归档城市档案到 hub | 多处删/迁 | 半天 |

**总计**：约 10-11 个工作日 Phase 1 MVP（不含数据填充和法务复核）。

**Phase 2 backlog**（不在本次估时内）：博物馆预约导航器（F2）、用户笔记授权流程、更多省份扩展。

---

## 7. Phase 1 不做清单（防止范围蔓延）

- 不做酒店/机票/景点票务预订器
- 不做用户笔记/评论/打卡发布通道（直到授权流程上线）
- 不做"中国十大xxx"榜单
- 不做支付商业返佣
- 不做 VPN / 翻墙相关任何内容
- 不做付费导览推销
- 不在主流程引入第三方追踪 SDK / 分析工具（先用静态生成 + Vercel/Cloudflare 自有日志）
- **Phase 1 不上博物馆预约导航**（仅调研）
- **Phase 1 不扩展四城以外**（北上广深固定）
- **Phase 1 不做主观推荐**（连"建议先去A再去B"都不写——只给事实+官方链接）

---

**附**：完整研究材料保留在 `.omc/artifacts/ask/codex-pain-points-*.md` 和本次会话 sonnet agent 完整输出（在会话日志中）。

---

## 8. Phase 2 — 用户分享与后端（决策已锁，2026-05-09）

**触发**：游客文字 + 图片投稿、按"游客笔记需授权"红线发布。

### 8.1 部署架构

| 组件 | 选择 | 理由 |
|---|---|---|
| 主站静态 | Cloudflare Pages（全球 CDN） | 免费、国内访问比 Vercel 顺 |
| 后端 API | 自有 VPS：4 核 / 16 GB / 200 GB（境外） | 用户已购、可自控、未来可升级 |
| 反向代理 | Caddy | 自动 HTTPS / Let's Encrypt |
| API 框架 | Hono on Bun（或 Fastify on Node 22） | 轻量、TS 同栈、性能足够 |
| 数据库 | Postgres 16 | 主流、事务可靠、JSON 字段 |
| 对象存储 | MinIO（S3 兼容，VPS 同机部署） | 自托管、零外部费用 |
| ORM | Drizzle | TS-first、迁移清晰 |
| 鉴权 | better-auth / Auth.js（Email magic link + Google + GitHub OAuth） | 不要求实名、覆盖国际游客 |
| 进程管理 | systemd | 系统原生、启动顺序可控 |
| 备份 | 每日 pg_dump → 异地存储 | 200 GB 盘也得有外备 |
| AI 审核 | Anthropic Claude API | 评分 + 原因，低分进人工 queue |

### 8.2 投稿流程（不可省任一环节）

1. 用户登录（Email magic link / Google / GitHub OAuth）
2. POST `/api/submissions`：文本 ≤ 1500 字符 + 最多 5 张图（每张 ≤ 2 MB，JPEG/PNG/WEBP）
3. 服务端剥 EXIF，存进 MinIO `submissions/<userId>/<submissionId>/`
4. **强制授权勾选**："I authorize publication and translation of this content."
   - 没勾 → 验证层拒绝
   - 勾了 → 存 `authorized_at` 时间戳 + IP hash（法律证据）
5. **关键词硬拦截**：URL、电话、价格（¥/$/€/£+数字）、邮箱、微信号、联系类词。命中即拒。
6. **AI 审核**：Claude API 给商业意图 / 离题 / 有害程度评分 + 简要原因
7. 高分自动发布；低分进人工 queue；管理员后台一键通过/驳回
8. 发布或驳回邮件通知投稿者

### 8.3 数据表（Phase 1 类型定义就要预留）

```sql
users          (id, email, display_name, country_code, oauth_provider, created_at)
submissions    (id, user_id, city_id, text, image_keys[], status, ai_score, ai_notes, authorized_at, published_at, created_at)
moderation_log (id, submission_id, action, by, reason, created_at)
```

**公开读**：仅 `status='published'`，对外只暴露 `country_code、display_name、published_at、text、images`，**不**暴露 `user_id / email`。

### 8.4 Phase 1 必须留好的边界（防止 Phase 2 大改）

| 防坑措施 | 落地方式 |
|---|---|
| 数据形态不耦合后端 | 现有 `src/data/*.ts` 是"官方事实数据底座"，不要在里面塞用户内容字段 |
| 共享类型 | 加 `src/data/types.ts`，Phase 1 + Phase 2 import 同一份 |
| API 调用抽象 | 加 `src/services/notes.ts`，Phase 1 实现 `getUserNotes(cityId): Promise<UserNote[]> = async () => []`；Phase 2 改成 fetch 调 VPS |
| UI 占位 | 城市档案下方现在就放 `<VisitorNotesPanel cityId={...} />`，Phase 1 渲染空 state（"还没有游客笔记"），Phase 2 接 API 即可 |
| 来源标签 | 用户笔记必须显示 "Visitor note · authorized by author · not officially verified"，与 .gov.cn 事实在视觉和语义上**严格区分** |

### 8.5 域名与 CORS

- 主站：`atlas.<domain>` → Cloudflare Pages（静态）
- API：`api.<domain>` → 用户 VPS
- CORS：`api.*` 只接受 `Origin: https://atlas.<domain>` 一处
- 备案：API 在境外不需备案；如未来主站要部国内 CDN 再单独处理

### 8.6 Phase 2 工程量估算（待 Phase 1 收尾后启动）

| # | 任务 | 估时 |
|---|---|---|
| 1 | VPS 初始化（Caddy + Postgres + MinIO + 自动备份） | 1 天 |
| 2 | Hono + Drizzle 项目骨架 + better-auth OAuth 三家 | 1.5 天 |
| 3 | submissions API（POST + 列表 + 公开读） | 1 天 |
| 4 | 关键词过滤 + Claude API 审核接入 + 人工 queue 后台 | 1.5 天 |
| 5 | 邮件通知（Resend or 自建 SMTP） | 半天 |
| 6 | 前端登录态 + 投稿对话框 + VisitorNotesPanel 接 API | 1 天 |
| 7 | 法务：服务条款 + 授权措辞英中双语 | 半天 |

**Phase 2 估时**：约 6.5-7 工作日（不含 VPS 初次配置环境复杂度）。

**~~捐赠 (donation) 模块~~** —— 2026-05-10 用户决定砍掉，不做。Phase 2 范围现在 = UGC 投稿 + Q&A，不含捐赠 / 慈善 / 资金路由。

---

## 9. Phase 1.5 实际进度 + 路线调整 (2026-05-10)

Phase 1 已基本落地（按 §6 的清单），同时做了几处偏离原计划的调整：

### 9.1 已经实现（v2/）

| 模块 | 实现位置 | 备注 |
|---|---|---|
| 五大支柱组件（VisaChecker / PaymentsChecklist / TransportGuide / FoodGuide / EmergencyBriefing） | `v2/src/components/pillar/` | 接受 `cityId` 可选 prop，无 prop = 全局多城 tab，有 prop = 本城作用域 |
| 政策时效 (Travel Alerts) | `v2/src/components/policy/TravelAlerts.tsx` | 入境政策 3 项 alerts |
| 入境最关心 8 题 FAQ | `v2/src/components/sections/TopQuestions.tsx` + `data/top-questions.ts` | 首页 only |
| 信息可追溯（来源系统） | `v2/src/data/sources.ts`、`components/common/PageSources.tsx` | inline SourceBadge 已废弃；改成页面底部统一编号引用列表，社区源带 `[BLOG]` 标签 |
| 4 城市路由 | `v2/src/pages/CityPage.tsx`，路径 `/city/:cityId` | 北上广深，每页五大支柱本地化 |
| 实操避坑（社区源） | `v2/src/data/practical-payments.ts` (18 条) + `v2/src/data/practical-other.ts` (35 条) | 按 `pillar` + 可选 `cityScope` 索引；通用 `PracticalBlock` 组件挂在各支柱底部 |
| 4 城官方文旅延伸阅读 | `v2/src/data/city-tourism-portals.ts` + `components/common/CityFurtherReading.tsx` | CityPage 底部链接卡 |
| Phase 2 路由占位 | `App.tsx` 的 `/share`、`/ask` （已派出 sonnet 调研 UGC + Q&A 实现细节） | 浏览不需登录；登录只在投稿/回答时要求 |
| 地球进场动画 | `v2/src/components/map/EarthIntro.tsx`（懒加载，~2KB） | 真 NASA Blue Marble 贴图 + Three.js 球体 + 自定义 fresnel 大气；7 秒 spin/hold/zoom 后淡出 → SVG 中国省份图淡入 |

### 9.2 偏离原计划

| 偏离 | 原因 |
|---|---|
| **取消"官方源唯一"绝对规则** | 用户实操中发现 `.gov.cn` 不公布"个人收款码不收外卡"、"12306 审核要 3-7 天"这一类操作层细节。改成"政策事实官方 / 操作坑点社区"双轨。社区源用 `community: true` 标志 + UI 上 `[BLOG]` chip 区分。 |
| **首页极简化** | 原计划首页有 5 大支柱 nav。实际改成首页 = 地球→中国动画 + 入境提醒 + 签证校验 + 8 题 FAQ。城市具体内容全部下沉到 `/city/:id`。 |
| **inline source badge 全部撤掉** | 原 R1 规则要每条事实带 `[来源]` 内联 badge。视觉太挤；改成页面底部统一编号引用清单（PageSources），各组件通过 `xxxSourceIds()` helper 自动汇总。 |
| **取消捐赠模块** | 用户 2026-05-10 决定砍掉。Phase 2 现在只做 UGC + Q&A。 |

### 9.3 当前研究状态

| Agent | 范围 | 状态 |
|---|---|---|
| doc-specialist #1 | Alipay / 微信外籍注册实操坑 | 完成 → `v2/research/alipay-wechat-foreigner-registration.md`，46 条 findings 已集成 |
| doc-specialist #2 | 综合博客 + 旅游平台 IA + 4 城文旅局门户 | 完成 → `v2/research/blog-platform-bureau-sweep.md`，54 条 findings 已集成 |
| sonnet (re-dispatched 2026-05-10) | UGC 投稿 + Q&A 实现模式（AI 审核管线 / 验证徽章 / 授权措辞 / 答案质量） | 后台跑中 |

### 9.4 接下来的工程项

按依赖顺序，等 sonnet 报告回来后：

1. UGC 投稿对话框 + `<VisitorNotesPanel>` 占位接 API stub `services/notes.ts`（已存在）
2. Q&A 数据形态 + 答题验证徽章设计（取决于 sonnet 调研）
3. AI 审核管线选型（OpenAI Moderation / Claude / 开源 Detoxify 等）
4. VPS 初始化 + Hono+Bun 骨架（参见 §8.1）

主页 + 4 城页内容现在已经够初步 launch（Phase 1.5 完成度 ≥ 90%）；Phase 2 启动前最后还要做：(a) `services/notes.ts` 的真实实现 (b) 简单后台 (c) 服务条款 + 隐私政策双语文案。

