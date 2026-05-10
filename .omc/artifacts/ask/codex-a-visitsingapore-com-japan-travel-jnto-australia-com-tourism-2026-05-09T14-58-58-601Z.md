# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-09T14:58:58.603Z

## Original task

调研'正规'/官方/非商业旅行信息平台的二级页面设计。研究对象（每个看具体页面，不要泛泛）：

A. 国家级官方旅行门户：
- visitsingapore.com（新加坡旅游局官方）
- japan.travel（日本国家旅游局 JNTO）
- australia.com（澳大利亚旅游局）
- tourismthailand.org（泰国国家旅游局）
- visitkorea.or.kr（韩国官方）
- en.unwto.org（联合国旅游组织）

B. 公共/非商业知识平台：
- en.wikivoyage.org（典型城市页：Beijing / Shanghai / Tokyo / Singapore）
- en.wikipedia.org Travel and tourism in [city] 类页面
- BBC Travel / NPR Travel（公共广播媒体的旅游栏目）
- Lonely Planet（虽然商业但城市信息组织最经典）

C. 政府公共服务页：
- gov.uk/foreign-travel-advice/china（英国外交部对华旅行建议）
- travel.state.gov（美国国务院国别页）
- swissinfo.ch / canada.ca/travel（公共广播的旅行版块）

针对每个城市二级页（如新加坡 visitsingapore.com 上的 Marina Bay 区域页 / japan.travel 的 Tokyo 页 / wikivoyage 的 Beijing 页），输出：
1) 页面信息架构（一级模块顺序：Hero → Top sights → Practical → Getting around → Food → Where to stay → 等等）
2) Practical 实务模块怎么做（签证/支付/紧急号一般在城市页 vs. 全站页？）
3) 'Top sights / 景点'怎么呈现：是否带门票/预约链接、是否带官方版权照片、是否避免私家团广告
4) '问答 / Q&A'板块：哪些平台有？是怎么管理的（自由发帖 vs. 编辑筛选）？
5) '用户分享'板块：哪些平台允许？提交流程、审核机制、署名规则
6) '捐赠 / 资助'板块：维基类如何透明展示资金去向？是否曾向地方政府或景区捐赠？
7) 商业污染水平打分（0-10）

最后 3 个问题：
- 我们要做'主页只保留中国地图 + 入境准备；4 城各开二级页含景点/交通/餐饮/紧急'，按这些正规平台模式应该照搬什么？避免什么？
- 城市二级页的最终模块清单（按权重排序，5-10 个模块）
- 'Q&A 问中国人 / 用户旅游分享 / 城市定向捐赠'三个用户生成功能，最像哪个正规平台的什么模块？怎么组合实现？

返回 markdown 4500 字以内，所有引用必须是 .gov / .org / 国家旅游局官域名。

## Final prompt

调研'正规'/官方/非商业旅行信息平台的二级页面设计。研究对象（每个看具体页面，不要泛泛）：

A. 国家级官方旅行门户：
- visitsingapore.com（新加坡旅游局官方）
- japan.travel（日本国家旅游局 JNTO）
- australia.com（澳大利亚旅游局）
- tourismthailand.org（泰国国家旅游局）
- visitkorea.or.kr（韩国官方）
- en.unwto.org（联合国旅游组织）

B. 公共/非商业知识平台：
- en.wikivoyage.org（典型城市页：Beijing / Shanghai / Tokyo / Singapore）
- en.wikipedia.org Travel and tourism in [city] 类页面
- BBC Travel / NPR Travel（公共广播媒体的旅游栏目）
- Lonely Planet（虽然商业但城市信息组织最经典）

C. 政府公共服务页：
- gov.uk/foreign-travel-advice/china（英国外交部对华旅行建议）
- travel.state.gov（美国国务院国别页）
- swissinfo.ch / canada.ca/travel（公共广播的旅行版块）

针对每个城市二级页（如新加坡 visitsingapore.com 上的 Marina Bay 区域页 / japan.travel 的 Tokyo 页 / wikivoyage 的 Beijing 页），输出：
1) 页面信息架构（一级模块顺序：Hero → Top sights → Practical → Getting around → Food → Where to stay → 等等）
2) Practical 实务模块怎么做（签证/支付/紧急号一般在城市页 vs. 全站页？）
3) 'Top sights / 景点'怎么呈现：是否带门票/预约链接、是否带官方版权照片、是否避免私家团广告
4) '问答 / Q&A'板块：哪些平台有？是怎么管理的（自由发帖 vs. 编辑筛选）？
5) '用户分享'板块：哪些平台允许？提交流程、审核机制、署名规则
6) '捐赠 / 资助'板块：维基类如何透明展示资金去向？是否曾向地方政府或景区捐赠？
7) 商业污染水平打分（0-10）

最后 3 个问题：
- 我们要做'主页只保留中国地图 + 入境准备；4 城各开二级页含景点/交通/餐饮/紧急'，按这些正规平台模式应该照搬什么？避免什么？
- 城市二级页的最终模块清单（按权重排序，5-10 个模块）
- 'Q&A 问中国人 / 用户旅游分享 / 城市定向捐赠'三个用户生成功能，最像哪个正规平台的什么模块？怎么组合实现？

返回 markdown 4500 字以内，所有引用必须是 .gov / .org / 国家旅游局官域名。

## Raw output

```text
�ɹ�: ����ֹ PID 121748 (���� PID 552068 �ӽ���)�Ľ��̡�
�ɹ�: ����ֹ PID 552068 (���� PID 553320 �ӽ���)�Ľ��̡�
�ɹ�: ����ֹ PID 553320 (���� PID 553548 �ӽ���)�Ľ��̡�
�ɹ�: ����ֹ PID 553548 (���� PID 553348 �ӽ���)�Ľ��̡�
�ɹ�: ����ֹ PID 28448 (���� PID 506984 �ӽ���)�Ľ��̡�
�ɹ�: ����ֹ PID 506984 (���� PID 513100 �ӽ���)�Ľ��̡�
�ɹ�: ����ֹ PID 513100 (���� PID 537852 �ӽ���)�Ľ��̡�
�ɹ�: ����ֹ PID 537852 (���� PID 553348 �ӽ���)�Ľ��̡�
�ɹ�: ����ֹ PID 555424 (���� PID 490992 �ӽ���)�Ľ��̡�
�ɹ�: ����ֹ PID 490992 (���� PID 529016 �ӽ���)�Ľ��̡�
�ɹ�: ����ֹ PID 529016 (���� PID 551712 �ӽ���)�Ľ��̡�
�ɹ�: ����ֹ PID 551712 (���� PID 553348 �ӽ���)�Ľ��̡�
以下按“具体二级页/模板”归纳，引用只用官方旅游局、`.gov`、`.org`。

| 平台/具体页 | IA 顺序 | Practical 做法 | 景点呈现/Q&A/UGC/商业污染 |
|---|---|---|---|
| Visit Singapore：[Marina Bay](https://www.visitsingapore.com/neighbourhood/featured-neighbourhood/marina-bay/) | Hero → 区域叙事 → 建筑/自然 → 美食 → 购物 → 住宿 → 旅客中心/Useful info | 签证、支付、交通放在全站 [Essential Information](https://www.visitsingapore.com/travel-tips/essential-travel-information/)，城市/区域页只放“到哪玩、吃、住、求助”。 | 官方图+品牌地标；有酒店/购物/餐厅露出但无私家团广告。无开放 Q&A。商业污染 4/10。 |
| JNTO：[Tokyo](https://www.japan.travel/en/destinations/kanto/tokyo/) | Hero → 简介/天气 → How to get there → Don’t miss → 推荐 → 分区 → Trending attractions → Local specialties → Seasonal highlights → Related links | 签证、安全热线、保险等在全站 Plan/Essential；城市页只放机场入城、天气、区域。 | 景点卡多为官方/目的地链接，部分提示查官网；不做私团广告；底部有 #visitjapanjp 照片分享号召。商业污染 1/10。 |
| Tourism Australia：[Sydney](https://www.australia.com/en-gb/places/sydney-and-surrounds/guide-to-sydney.html) | Hero → Welcome → Aboriginal context → Getting to Sydney → When to visit → Accessibility → Top things → Restaurants → Trip essentials | 城市页保留机场、季节、无障碍；签证/健康安全在全站 planning。另有 [Getting around Sydney](https://www.australia.com/en/places/sydney-and-surrounds/getting-around-sydney.html)。 | 图有版权署名；Top things、餐厅、住宿、旅行社强运营化；官网声明第三方产品不由 Tourism Australia 拥有/背书。商业污染 6/10。 |
| Tourism Thailand：[Bangkok](https://www.tourismthailand.org/Destinations/Provinces/Bangkok/219) | Hero → Highlights → 简介 → Explore tabs: See & Do/Shop/Food/Stay/Event/Spa/Tour Agent/Transportation → How to get there → Nearby | 全站 Plan Your Trip/FAQ/Traveling Around；城市页以分类目录为主。 | 有 Tour Agent 类目，商业入口较明显；景点偏目录式。FAQ 是全站型，不是城市开放问答。商业污染 5/10。 |
| VisitKorea：Seoul/点位页，如 [Gangnam](https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=105260)、[Gyeongbokgung](https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=108422) | 图片 → Introduction → Basic info → Map → What’s nearby | 很强的点位实务：地址、官网、营业时间、费用、电话、停车、厕所、1330。签证、交通、紧急在全站 [Travel Basics](https://english.visitkorea.or.kr/svc/planYourTravel/travelInfo/subTravelBasics.do)、[Transportation](https://english.visitkorea.or.kr/svc/planYourTravel/travelInfo/subTransportation.do)、[Emergency](https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140042)。 | 有费用/官网/周边，但不做私团广告；有 FAQ、Travel Planner、促销券，不是城市页自由发帖。商业污染 3/10。 |
| UN Tourism：[Urban Tourism](https://www.unwto.org/urban-tourism) | 定义 → 城市旅游治理议题 → 活动 → 研究报告/案例 | 非消费者页，不放签证/景点；强调治理、监测、居民感知、可持续。 | 无景点售卖、无 UGC。适合作为“城市旅游公共性”原则来源。商业污染 0/10。 |
| Wikivoyage：[Beijing](https://en.wikivoyage.org/wiki/Beijing)、Shanghai/Tokyo/Singapore | Districts → Understand → Talk → Get in → Get around → See → Do → Buy/Eat/Drink/Sleep → Stay safe/healthy → Cope → Go next | 最“城市页内置实务”：北京页含签证、交通卡、出租骗局、紧急、移动支付、网络、使馆等。 | 景点在 See/Do，少售卖；社区政策限制 spam/self-promotion；有 [Travel forum](https://en.wikivoyage.org/wiki/Wikivoyage:Travel_forum) 可提问/分享，Talk 页用于编辑协作而非评论区。商业污染 0-1/10。 |
| Wikipedia：[Tourism in Tokyo](https://en.wikipedia.org/wiki/Tourism_in_Tokyo)、[Tourism in Singapore](https://en.wikipedia.org/wiki/Tourism_in_Singapore) | 产业/历史/数据 → destination lists → dining/nature 等百科段落 | 不做旅行实务，不适合作城市服务页。 | 无门票 CTA、无 UGC 评论、无广告；适合借“中立背景+统计”而不是 IA。商业污染 0/10。 |
| 政府旅行建议：[GOV.UK China](https://www.gov.uk/foreign-travel-advice/china)、[Travel.State.gov China](https://travel.state.gov/en/international-travel/travel-advisories/china.html)、[Canada China](https://travel.gc.ca/destinations/china) | 风险级别/更新时间 → Entry → Safety → Health → Laws → Natural disasters → Getting help/consular | 最标准公共服务 IA：国家级、可订阅更新、只讲风险和求助，不讲景点。Canada 明列 110/120/119/122；US 页按入境、安全、法律、健康、交通等主题展开。 | 无景点、无商业、无 UGC。商业污染 0/10。 |

BBC/NPR/Swissinfo 更像编辑栏目流，Lonely Planet 更像商业城市指南；在你限定引用来源下，不建议把它们作为主模板，只作为“要避免商业化和内容营销口吻”的反例。

**捐赠/资助**
维基类不是给某城市、政府或景区“定向捐赠”。Wikimedia 公开年度预算：2025-26 预算按 Infrastructure 47%、Volunteer Support 29%、Effectiveness 24%，并说明有 400+ grants 支持社群和运动伙伴；这是知识基础设施/社群资助，不是目的地分账或景区赞助。见 [Wikimedia budget](https://meta.wikimedia.org/wiki/Wikimedia_Foundation_Annual_Plan/2025-2026/Budget_Overview/en) 与 [donation explanation](https://wikimediafoundation.org/news/2025/11/26/how-does-the-wikimedia-foundation-use-donations-to-wikipedia/)。

**你们该照搬什么，避免什么**
照搬：主页只做“中国地图 + 入境准备”是对的，接近政府旅行建议和官方旅游局的分层。签证、支付、通信、紧急号、入境材料放全站“入境准备”；城市页只放城市差异：机场/高铁入城、市内交通、核心景点、餐饮区、紧急求助、游客中心。景点只链接官方景区/博物馆/交通/预约页，图片用官方授权或清晰版权署名。

避免：私家团、酒店返佣、餐厅软文、Top 10 榜单腔、未审核评论、商家付费置顶、把“问答”做成小红书式自由流。

**城市二级页模块清单**
1. 城市概览：一句定位、最佳停留天数、地图入口  
2. 入城与市内交通：机场/高铁/地铁/公交/打车/支付  
3. 必看景点：官方图、开放时间、预约/门票官方链接、无障碍  
4. 分区导览：按城区组织，而不是纯榜单  
5. 餐饮与本地食物：菜系、街区、支付/排队提示  
6. 实务卡片：支付、SIM/eSIM、厕所、天气、语言、无障碍  
7. 安全与紧急：110/119/120、使领馆、医院、诈骗提醒  
8. 1-3 日行程：低强度、亲子、首次来华  
9. 季节/活动：节假日闭馆、人流、天气风险  
10. 官方帮助：游客中心、投诉、页面更新日期

**三个 UGC 功能怎么组合**
“问中国人”最像 Wikivoyage Travel forum + VisitKorea FAQ：用户可问，但回答由编辑/认证志愿者筛选，答案带更新时间和来源，不允许商家回复。

“用户旅游分享”像 Wikivoyage 可编辑经验 + JNTO hashtag + VisitKorea Travel Planner：做结构化行程卡，字段固定为路线、时间、费用、避坑、照片授权、署名；默认禁商家链接。

“城市定向捐赠”只能借 Wikimedia 的透明账本，不要学成“给景区捐款”。可设城市公共信息基金：用于翻译、无障碍采集、地图校对、志愿者热线、公共厕所/急救点数据维护。公开预算、收支、受助方、利益冲突和季度结果；捐赠不影响景点排序。


OpenAI Codex v0.128.0 (research preview)
--------
workdir: c:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e0d3c-9e67-7381-9e03-27f772e2b8e4
--------
user
调研'正规'/官方/非商业旅行信息平台的二级页面设计。研究对象（每个看具体页面，不要泛泛）：

A. 国家级官方旅行门户：
- visitsingapore.com（新加坡旅游局官方）
- japan.travel（日本国家旅游局 JNTO）
- australia.com（澳大利亚旅游局）
- tourismthailand.org（泰国国家旅游局）
- visitkorea.or.kr（韩国官方）
- en.unwto.org（联合国旅游组织）

B. 公共/非商业知识平台：
- en.wikivoyage.org（典型城市页：Beijing / Shanghai / Tokyo / Singapore）
- en.wikipedia.org Travel and tourism in [city] 类页面
- BBC Travel / NPR Travel（公共广播媒体的旅游栏目）
- Lonely Planet（虽然商业但城市信息组织最经典）

C. 政府公共服务页：
- gov.uk/foreign-travel-advice/china（英国外交部对华旅行建议）
- travel.state.gov（美国国务院国别页）
- swissinfo.ch / canada.ca/travel（公共广播的旅行版块）

针对每个城市二级页（如新加坡 visitsingapore.com 上的 Marina Bay 区域页 / japan.travel 的 Tokyo 页 / wikivoyage 的 Beijing 页），输出：
1) 页面信息架构（一级模块顺序：Hero → Top sights → Practical → Getting around → Food → Where to stay → 等等）
2) Practical 实务模块怎么做（签证/支付/紧急号一般在城市页 vs. 全站页？）
3) 'Top sights / 景点'怎么呈现：是否带门票/预约链接、是否带官方版权照片、是否避免私家团广告
4) '问答 / Q&A'板块：哪些平台有？是怎么管理的（自由发帖 vs. 编辑筛选）？
5) '用户分享'板块：哪些平台允许？提交流程、审核机制、署名规则
6) '捐赠 / 资助'板块：维基类如何透明展示资金去向？是否曾向地方政府或景区捐赠？
7) 商业污染水平打分（0-10）

最后 3 个问题：
- 我们要做'主页只保留中国地图 + 入境准备；4 城各开二级页含景点/交通/餐饮/紧急'，按这些正规平台模式应该照搬什么？避免什么？
- 城市二级页的最终模块清单（按权重排序，5-10 个模块）
- 'Q&A 问中国人 / 用户旅游分享 / 城市定向捐赠'三个用户生成功能，最像哪个正规平台的什么模块？怎么组合实现？

返回 markdown 4500 字以内，所有引用必须是 .gov / .org / 国家旅游局官域名。
codex
我会按“页面级”而不是品牌概览来查，引用只放 `.gov`、`.org` 和官方旅游局域名；商业媒体/商业指南只能作为未引用的对照判断，避免破坏你的引用约束。
web search: 
web search: site:visitsingapore.com Marina Bay Singapore official travel page practical sights
web search: 
web search: site:visitsingapore.com/en/see-do-singapore/places-to-see/marina-bay/ visitsingapore Marina Bay official
web search: 
web search: https://www.visitsingapore.com/see-do-singapore/places-to-see/marina-bay-area/
web search: 
web search: https://www.visitsingapore.com/neighbourhood/featured-neighbourhood/marina-bay/
web search: 
web search: site:australia.com/en/places/sydney-and-surrounds/guide-to-sydney.html Tourism Australia official Sydney guide sections
web search: 
web search: https://www.australia.com/en-gb/places/sydney-and-surrounds/guide-to-sydney.html
web search: 
web search: site:tourismthailand.org Bangkok tourism guide official things to do getting around
web search: 
web search: https://www.tourismthailand.org/Destinations/Provinces/Bangkok/219
web search: 
web search: site:tourismthailand.org Plan Your Trip Getting to Thailand Traveling Around Facts Tourism Authority of Thailand visa
web search: 
web search: site:english.visitkorea.or.kr Seoul city official travel guide sections attractions food transportation visitkorea
web search: 
web search: site:english.visitkorea.or.kr/svc/whereToGo/locIntrdn Seoul VISITKOREA
web search: 
web search: site:unwto.org tourism city guide official page urban tourism practical information
web search: 
web search: https://www.gov.uk/foreign-travel-advice/china
web search: 
web search: 'Quick Facts' in https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/China.html
web search: 
web search: https://en.wikivoyage.org/wiki/Beijing
web search: 
web search: site:wikimediafoundation.org annual report revenue expenses donations transparency funds distribution
web search: 
web search: site:en.wikivoyage.org wiki travel forum Wikivoyage free posting discussion policy
web search: 
web search: site:en.wikipedia.org "Travel and tourism in Beijing"
codex
以下按“具体二级页/模板”归纳，引用只用官方旅游局、`.gov`、`.org`。

| 平台/具体页 | IA 顺序 | Practical 做法 | 景点呈现/Q&A/UGC/商业污染 |
|---|---|---|---|
| Visit Singapore：[Marina Bay](https://www.visitsingapore.com/neighbourhood/featured-neighbourhood/marina-bay/) | Hero → 区域叙事 → 建筑/自然 → 美食 → 购物 → 住宿 → 旅客中心/Useful info | 签证、支付、交通放在全站 [Essential Information](https://www.visitsingapore.com/travel-tips/essential-travel-information/)，城市/区域页只放“到哪玩、吃、住、求助”。 | 官方图+品牌地标；有酒店/购物/餐厅露出但无私家团广告。无开放 Q&A。商业污染 4/10。 |
| JNTO：[Tokyo](https://www.japan.travel/en/destinations/kanto/tokyo/) | Hero → 简介/天气 → How to get there → Don’t miss → 推荐 → 分区 → Trending attractions → Local specialties → Seasonal highlights → Related links | 签证、安全热线、保险等在全站 Plan/Essential；城市页只放机场入城、天气、区域。 | 景点卡多为官方/目的地链接，部分提示查官网；不做私团广告；底部有 #visitjapanjp 照片分享号召。商业污染 1/10。 |
| Tourism Australia：[Sydney](https://www.australia.com/en-gb/places/sydney-and-surrounds/guide-to-sydney.html) | Hero → Welcome → Aboriginal context → Getting to Sydney → When to visit → Accessibility → Top things → Restaurants → Trip essentials | 城市页保留机场、季节、无障碍；签证/健康安全在全站 planning。另有 [Getting around Sydney](https://www.australia.com/en/places/sydney-and-surrounds/getting-around-sydney.html)。 | 图有版权署名；Top things、餐厅、住宿、旅行社强运营化；官网声明第三方产品不由 Tourism Australia 拥有/背书。商业污染 6/10。 |
| Tourism Thailand：[Bangkok](https://www.tourismthailand.org/Destinations/Provinces/Bangkok/219) | Hero → Highlights → 简介 → Explore tabs: See & Do/Shop/Food/Stay/Event/Spa/Tour Agent/Transportation → How to get there → Nearby | 全站 Plan Your Trip/FAQ/Traveling Around；城市页以分类目录为主。 | 有 Tour Agent 类目，商业入口较明显；景点偏目录式。FAQ 是全站型，不是城市开放问答。商业污染 5/10。 |
| VisitKorea：Seoul/点位页，如 [Gangnam](https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=105260)、[Gyeongbokgung](https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=108422) | 图片 → Introduction → Basic info → Map → What’s nearby | 很强的点位实务：地址、官网、营业时间、费用、电话、停车、厕所、1330。签证、交通、紧急在全站 [Travel Basics](https://english.visitkorea.or.kr/svc/planYourTravel/travelInfo/subTravelBasics.do)、[Transportation](https://english.visitkorea.or.kr/svc/planYourTravel/travelInfo/subTransportation.do)、[Emergency](https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140042)。 | 有费用/官网/周边，但不做私团广告；有 FAQ、Travel Planner、促销券，不是城市页自由发帖。商业污染 3/10。 |
| UN Tourism：[Urban Tourism](https://www.unwto.org/urban-tourism) | 定义 → 城市旅游治理议题 → 活动 → 研究报告/案例 | 非消费者页，不放签证/景点；强调治理、监测、居民感知、可持续。 | 无景点售卖、无 UGC。适合作为“城市旅游公共性”原则来源。商业污染 0/10。 |
| Wikivoyage：[Beijing](https://en.wikivoyage.org/wiki/Beijing)、Shanghai/Tokyo/Singapore | Districts → Understand → Talk → Get in → Get around → See → Do → Buy/Eat/Drink/Sleep → Stay safe/healthy → Cope → Go next | 最“城市页内置实务”：北京页含签证、交通卡、出租骗局、紧急、移动支付、网络、使馆等。 | 景点在 See/Do，少售卖；社区政策限制 spam/self-promotion；有 [Travel forum](https://en.wikivoyage.org/wiki/Wikivoyage:Travel_forum) 可提问/分享，Talk 页用于编辑协作而非评论区。商业污染 0-1/10。 |
| Wikipedia：[Tourism in Tokyo](https://en.wikipedia.org/wiki/Tourism_in_Tokyo)、[Tourism in Singapore](https://en.wikipedia.org/wiki/Tourism_in_Singapore) | 产业/历史/数据 → destination lists → dining/nature 等百科段落 | 不做旅行实务，不适合作城市服务页。 | 无门票 CTA、无 UGC 评论、无广告；适合借“中立背景+统计”而不是 IA。商业污染 0/10。 |
| 政府旅行建议：[GOV.UK China](https://www.gov.uk/foreign-travel-advice/china)、[Travel.State.gov China](https://travel.state.gov/en/international-travel/travel-advisories/china.html)、[Canada China](https://travel.gc.ca/destinations/china) | 风险级别/更新时间 → Entry → Safety → Health → Laws → Natural disasters → Getting help/consular | 最标准公共服务 IA：国家级、可订阅更新、只讲风险和求助，不讲景点。Canada 明列 110/120/119/122；US 页按入境、安全、法律、健康、交通等主题展开。 | 无景点、无商业、无 UGC。商业污染 0/10。 |

BBC/NPR/Swissinfo 更像编辑栏目流，Lonely Planet 更像商业城市指南；在你限定引用来源下，不建议把它们作为主模板，只作为“要避免商业化和内容营销口吻”的反例。

**捐赠/资助**
维基类不是给某城市、政府或景区“定向捐赠”。Wikimedia 公开年度预算：2025-26 预算按 Infrastructure 47%、Volunteer Support 29%、Effectiveness 24%，并说明有 400+ grants 支持社群和运动伙伴；这是知识基础设施/社群资助，不是目的地分账或景区赞助。见 [Wikimedia budget](https://meta.wikimedia.org/wiki/Wikimedia_Foundation_Annual_Plan/2025-2026/Budget_Overview/en) 与 [donation explanation](https://wikimediafoundation.org/news/2025/11/26/how-does-the-wikimedia-foundation-use-donations-to-wikipedia/)。

**你们该照搬什么，避免什么**
照搬：主页只做“中国地图 + 入境准备”是对的，接近政府旅行建议和官方旅游局的分层。签证、支付、通信、紧急号、入境材料放全站“入境准备”；城市页只放城市差异：机场/高铁入城、市内交通、核心景点、餐饮区、紧急求助、游客中心。景点只链接官方景区/博物馆/交通/预约页，图片用官方授权或清晰版权署名。

避免：私家团、酒店返佣、餐厅软文、Top 10 榜单腔、未审核评论、商家付费置顶、把“问答”做成小红书式自由流。

**城市二级页模块清单**
1. 城市概览：一句定位、最佳停留天数、地图入口  
2. 入城与市内交通：机场/高铁/地铁/公交/打车/支付  
3. 必看景点：官方图、开放时间、预约/门票官方链接、无障碍  
4. 分区导览：按城区组织，而不是纯榜单  
5. 餐饮与本地食物：菜系、街区、支付/排队提示  
6. 实务卡片：支付、SIM/eSIM、厕所、天气、语言、无障碍  
7. 安全与紧急：110/119/120、使领馆、医院、诈骗提醒  
8. 1-3 日行程：低强度、亲子、首次来华  
9. 季节/活动：节假日闭馆、人流、天气风险  
10. 官方帮助：游客中心、投诉、页面更新日期

**三个 UGC 功能怎么组合**
“问中国人”最像 Wikivoyage Travel forum + VisitKorea FAQ：用户可问，但回答由编辑/认证志愿者筛选，答案带更新时间和来源，不允许商家回复。

“用户旅游分享”像 Wikivoyage 可编辑经验 + JNTO hashtag + VisitKorea Travel Planner：做结构化行程卡，字段固定为路线、时间、费用、避坑、照片授权、署名；默认禁商家链接。

“城市定向捐赠”只能借 Wikimedia 的透明账本，不要学成“给景区捐款”。可设城市公共信息基金：用于翻译、无障碍采集、地图校对、志愿者热线、公共厕所/急救点数据维护。公开预算、收支、受助方、利益冲突和季度结果；捐赠不影响景点排序。
tokens used
122,050

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
