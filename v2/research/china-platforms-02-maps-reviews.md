# China domestic maps/reviews platforms for tourism intel

Last checked: 2026-05-10  
Scope: 大众点评 Dianping, 美团 Meituan, 高德地图 AMap, 携程 Ctrip China-side, 飞猪 Fliggy.  
Project use case: a foreign-tourist-to-China information site that wants to understand what locals actually visit without copying protected platform content.

## Executive read

Finding 1. The best "locals actually go here" signal is not a single source. It is a triangulation of Dianping/Meituan review behavior, AMap search/navigation heat, and Ctrip travel Q&A/reviews.

Finding 2. The most legally usable layer is outbound linking plus original editorial synthesis. Directly republishing ratings, review counts, photos, review text, top dishes, or ranked lists from Dianping/Meituan/Ctrip/Fliggy is high risk unless covered by an explicit license.

Finding 3. AMap is the only platform in this set with a broad public developer API suitable for production integration, but its terms still restrict extraction, standalone display, commercial use without permission, and cross-border handling of China map data.

Finding 4. The best open editorial patterns to imitate are: city/category list pages, "top 20 visible, full list in app" teaser rankings, short contextual tags, Q&A snippets, season/use-case sublists, and separate official/UGC/review modules.

Finding 5. For foreign tourists, Ctrip/Trip.com remains the safest booking layer. Dianping/Meituan/AMap are better as editor research inputs and link-out sources than as data sources to ingest.

## A. 大众点评 Dianping

### Public web access pattern

Finding 6. Dianping's desktop city pages are readable at:

- Beijing: https://www.dianping.com/beijing
- Shanghai: https://www.dianping.com/shanghai
- Guangzhou: https://www.dianping.com/guangzhou
- Shenzhen: https://www.dianping.com/shenzhen

Finding 7. Those city pages expose city IDs and English city slugs in page data. Observed IDs: Shanghai `1`, Beijing `2`, Guangzhou `4`, Shenzhen `7`.

Finding 8. The city pages expose broad IA categories that matter for tourism: 美食, 酒店, 周边游, 景点, 展馆展览, 动植物园, 温泉, 滑雪, 购物, 热门商圈, and subway-line browsing.

Finding 9. Individual shop pages are city-agnostic and use `/shop/{id}`. The mobile page is often the most indexable public surface, for example:

- https://m.dianping.com/shop/2116402?msource=applemaps
- https://m.dianping.com/shop/68075700?msource=applemaps
- https://m.dianping.com/shop/814921852?msource=applemaps
- https://m.dianping.com/shop/131544661?msource=applemaps

Finding 10. Search snippets and public HTML show the common page title pattern: `【店名】电话_地址_价格_营业时间_商圈/菜系团购 - 大众点评网`. The title suggests a rich merchant profile, but much of the actual page body is masked or app-gated.

### Visible to non-logged-in foreign users

Finding 11. On the observed mobile shop pages, non-logged-in users can often see: merchant name, star rating, per-capita price, neighborhood/category, list/ranking badges, open/closed state, photo count, discount/tuan-gou placeholders, recommended dishes, and per-dish recommendation counts.

Finding 12. Example: the public mobile page for 聚点串吧 showed rating, per-capita price, "新街口商圈 烤串", a local hot-list badge, a visible `2万+` photo/review-like count, and recommended dishes such as 老北京疙瘩汤, 爆香小嫩牛, 泰式蜜汁鸡翅.

Finding 13. Addresses are often partially masked on public mobile pages, e.g. `赵登禹路1******`, and hours can be replaced by app-gated copy such as `APP内查看商户信息`.

Finding 14. Phone numbers were not visible in the observed non-logged-in page body, despite "电话" appearing in the SEO page title.

Finding 15. Deep photos, complete menus, full review streams, full addresses, queue/wait signals, and some deal prices are pushed into the app or login flow.

### Hidden behind login/app walls

Finding 16. The strongest Dianping signals for "locals actually visit" are mostly not safely extractable from the public web: review text, reviewer identity/level, queueing, current popularity, deal conversion, detailed photos, and stable full address/phone data.

Finding 17. Dianping anti-scraping is active. In one observed request, a public mobile shop URL redirected to a Meituan verification center with `spiderindefence` in the URL.

### 必吃榜

Finding 18. The official public URL https://www.dianping.com/biyingbang redirected to Dianping login/citylist in my non-logged-in check. Treat the full list as app/login-first.

Finding 19. The latest fully released 必吃榜 available in public media at the time of research was the 2025 list, released on 2025-06-25, with 144 cities/regions and 3,091 restaurants. Public reports say Shanghai, Beijing, Chengdu, Chongqing, and Shenzhen were top-five cities by listed restaurant count.

Finding 20. The 2026 必吃榜 was not final as of 2026-05-10. Public reports say the 2026 entrant/shortlist was announced on 2026-04-23, covering 264 cities/regions and 4,326 restaurants, with Shanghai, Beijing, Chengdu, Chongqing, Guangzhou, Shenzhen, Xi'an, Wuhan, Suzhou, and Nanjing in the top ten by entrant count. Final release was reported as scheduled for 2026-06-24.

Finding 21. For our four cities, the shortlist/final-list coverage is strong: Beijing, Shanghai, Guangzhou, and Shenzhen all appear in national top-city coverage for 必吃榜.

Finding 22. Update cadence: annual. The observed pattern is spring shortlist/publicity followed by a mid-year final release.

Useful URLs:

- https://www.dianping.com/biyingbang
- https://www.news.cn/tech/20250626/c4e830a0513147bf9505c9da54318067/c.html
- https://m.bjnews.com.cn/detail/1750911314168601.html
- https://www.dutenews.com/n/article/8913274
- https://www.bbtnews.com.cn/2026/0424/591528.shtml
- https://cbgc.scol.com.cn/news/7527616
- https://society.yunnan.cn/system/2026/04/23/033978393.shtml

### 黑珍珠餐厅指南

Finding 23. Black Pearl is a Meituan/Dianping-owned high-end restaurant guide, often described as China's domestic answer to Michelin.

Finding 24. The 2026 public official-ish Meituan Index report says the 2026 Black Pearl guide was released on 2026-01-28, with 263 mainland China restaurants, 7 upgraded restaurants, and 46 new entrants.

Finding 25. The report says the guide is published by Meituan/Dianping and assessed by professional judges across dish quality, service, environment, inheritance, and innovation.

Finding 26. The desktop `https://www.dianping.com/blackpearl` URL redirected to login/citylist in my check. The public web is usable for meta/report-level facts; the full browseable restaurant list is not reliably public without app/login.

Finding 27. Coverage in 北上广深 is strong, but the safest citable source is the official annual report/news release, not scraped restaurant cards.

Useful URLs:

- https://www.dianping.com/blackpearl
- https://index.meituan.com/reports/meituan-black-pearl-2026/
- https://about.meituan.com/news/NN260128167003529
- https://www.bjwmb.gov.cn/wmdt/cyq/10119347.html

### Citing Dianping ratings/review counts

Finding 28. Do not treat Dianping ratings as equivalent to Google Maps ratings for free third-party reuse. Meituan's IP statement says Meituan-provided content including pages, text, images, rankings, layout, data, and information belongs to Meituan unless otherwise stated.

Finding 29. The same IP statement says, absent legal exception or written permission, no entity/person may copy, reproduce, quote, link to, or scrape Meituan platform content or information in whole or in part.

Finding 30. Practical recommendation: use Dianping ratings/review counts as editor research only. On our site, write our own recommendation and link to the Dianping page or official report where useful. Avoid displaying "Dianping rating: 4.8 / 60k reviews" unless licensed.

Useful URLs:

- https://rules-center.meituan.com/m/detail/guize/69
- https://h5.dianping.com/app/m-static-base-page/agreement.html?product=dpapp
- https://open.dianping.com/
- https://developer.meituan.com/

### Open data / partnerships

Finding 31. There is no obvious public tourism/review open dataset for foreign publishers. The available official platform surfaces are business/merchant/integration oriented: 北极星开放平台 and 美团技术服务合作中心.

Finding 32. A legitimate integration would need a commercial partnership or API terms that explicitly permit the desired display and geography. Do not use third-party scraping APIs.

## B. 高德地图 AMap / Gaode

### Public attraction/landmark pages

Finding 33. AMap place URL patterns observed:

- `https://www.amap.com/place/{POI_ID}`
- `https://gaode.com/poi/{POI_ID}`
- `https://ditu.amap.com/place/{POI_ID}`
- Search shell: `https://www.amap.com/search?query={encodedName}&city={adcode}`

Example checked: https://www.amap.com/place/B000A8UIN8 and https://gaode.com/poi/B000A8UIN8.

Finding 34. The public POI page shell is accessible, but the HTML response is a JavaScript app shell, not a stable indexable text profile. Do not rely on static HTML extraction for POI details.

Finding 35. AMap's official Web Service API provides the structured POI route. The Search POI docs include keyword search, around search, polygon search, and ID query by POI ID.

Finding 36. API-returnable POI fields include name/type/typecode, address, location, telephone, website, business area, indoor map data, tags, `biz_ext.rating`, `biz_ext.cost`, and photo URLs when `extensions=all`.

Finding 37. The API docs explicitly state that rating exists only for restaurants, hotels, attractions, and cinemas, and that photos are returned with `extensions=all`.

Useful URLs:

- https://www.amap.com/place/B000A8UIN8
- https://gaode.com/poi/B000A8UIN8
- https://ditu.amap.com/place/B000A8UIN8
- https://lbs.amap.com/api/webservice/summary
- https://lbs.amap.com/api/webservice/guide/api-advanced/search

### AMap web vs app crowd data

Finding 38. AMap web ranking pages expose curated rankings and scores, not live crowd density. The pages show "完整榜单请在高德地图APP内查看", which confirms the app is the deeper surface.

Finding 39. If AMap exposes crowding, queue, indoor navigation, or real-time scenic-area comfort signals, assume they are app/product-specific unless an official API endpoint says otherwise. I found official API docs for traffic status and bus inquiry, but not a public scenic crowd-density API suitable for embedding.

### 高德指南 / official travel recommendation

Finding 40. AMap's public ranking pages are highly relevant. URL pattern:

- Beijing scenic: https://www.amap.com/ranking/beijing/scenic
- Shanghai scenic: https://www.amap.com/ranking/shanghai/scenic
- Guangzhou scenic: https://www.amap.com/ranking/guangzhou/scenic
- Shenzhen scenic: https://www.amap.com/ranking/shenzhen/scenic
- Ranking plaza: https://ranks.amap.com/
- Ranking browse: https://ranks.amap.com/ranking

Finding 41. These pages show 2025 高德状元榜/扫街榜 style lists with "全年综合分", tags, and short editorial blurbs. Beijing's scenic page showed 64 total places but only top 20 on web; Shanghai 47; Guangzhou 43; Shenzhen 29.

Finding 42. Beijing examples from the public page: 故宫博物院, 中国国家博物馆, 天坛公园, 什刹海, 颐和园, each with a score and contextual tags. This is a strong "visited/search/navigation heat" editorial signal.

Finding 43. AMap's public/media explanation says 高德指南 rankings use real AMap search/navigation data plus user evaluations and merchant quality, which is exactly the "locals actually go here" pattern we want to emulate editorially.

Useful URLs:

- https://www.amap.com/ranking/beijing/scenic
- https://www.amap.com/ranking/shanghai/scenic
- https://www.amap.com/ranking/guangzhou/scenic
- https://www.amap.com/ranking/shenzhen/scenic
- https://ranks.amap.com/
- https://ranks.amap.com/ranking
- https://www.sznews.com/news/content/2025-01/20/content_31444248.htm
- https://www.pingwest.com/w/218091

### Transit / congestion / embed exposure

Finding 44. AMap Web Service API exposes traffic status query endpoints such as `https://restapi.amap.com/v3/traffic/status/road?parameters`, requiring a key.

Finding 45. AMap Web Service API exposes route planning, including walking, transit, driving, and distance calculation. The route docs caution that same-origin/destination results may change as road/data/algorithms change.

Finding 46. Public transit live arrival and subway transfer ergonomics are primarily app/native product experiences. I did not find a public no-key web embed for live arrivals. For our site, the realistic legal path is "open in AMap" deep links or licensed API route estimates, not embedding live AMap transit boards.

Useful URLs:

- https://lbs.amap.com/api/webservice/guide/api/direction
- https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry
- https://lbs.amap.com/api/webservice/guide/api-advanced/bus-inquiry
- https://lbs.amap.com/api/javascript-api-v2/guide/abc/prepare

### AMap public API and developer requirements

Finding 47. AMap Web Service API is documented as open to all users, but requires an application key. The setup flow is: register as AMap developer, create an application, obtain a key.

Finding 48. Personal and enterprise developers get different quotas; quota details are now routed to pricing/control-console pages. Older/current docs still state that service call limits and QPS quota depend on account status and can be checked/upgraded in the console.

Finding 49. For foreign developers, I found no official English page guaranteeing easy foreign KYC. The practical blocker is likely account registration, phone/Alibaba identity flows, business verification, and China map-data compliance.

Useful URLs:

- https://lbs.amap.com/api/webservice/summary
- https://lbs.amap.com/api/webservice/guide/tools/flowlevel
- https://lbs.amap.com/api/webservice/guide/api-advanced/search
- https://lbs.amap.com/api/webservice/guide/api/direction

### Legal / redistribution

Finding 50. AMap terms are restrictive for our use case. They define relevant content to include map data, traffic information, address data, merchant lists, navigation voice, and other content.

Finding 51. AMap grants a personal, non-transferable, revocable, non-exclusive license and says commercial use requires separate written agreement or written permission.

Finding 52. AMap terms prohibit attempting to extract source code or original data; using crawlers/scrapers/indexers; storing/caching/retrieving/indexing service/data; and using AMap content separately from AMap products/services.

Finding 53. Crucially for a foreign site, AMap terms say users may not download China domestic map data outside China or transfer, store, or provide China domestic map data overseas.

Recommendation: AMap is usable only through compliant API/embed/deep-link workflows, with counsel review for cross-border data handling. Do not build a cached AMap-derived POI database offshore.

Useful URL:

- https://cache.amap.com/h5/h5/publish/241/index.html

## C. 携程 Ctrip China-side

### What is unique vs Trip.com

Finding 54. Ctrip's China-side `you.ctrip.com` is much deeper than a pure booking site. It has destination pages, scenic pages, UGC travel notes, Q&A, user comments, rankings, photo modules, opening hours, policy details, and Chinese-local operational tips.

Finding 55. Ctrip scenic pages can be publicly read without login. Example: 鸟巢 page exposed attraction score, review count, address, opening hours, official phone, notice text, detailed intro, photo strategy, ticket/benefit policies, Q&A, and recent user reviews.

Finding 56. Ctrip city scenic lists expose public IA patterns: "必打卡景点榜", "夜游必打卡景点榜", "亲子景点榜", "赏花踏青景点榜", "滑雪景点榜", "温泉景点榜", plus paginated attraction cards.

Finding 57. Ctrip travel-note list pages expose title, author, publish/reply dates, trip duration, spend, travel party, view/comment/like counts, and pagination.

Finding 58. Ctrip Q&A pages are publicly readable and very valuable for foreign-tourist pain points: reservation requirements, IDs, lockers, elderly suitability, weather, transport timing, hotel practicalities, and ticket scarcity.

Useful URL patterns:

- City scenic list: https://you.ctrip.com/sight/peking1.html
- Attraction detail: https://you.ctrip.com/sight/beijing1/52626.html
- Travel notes list: https://you.ctrip.com/travels/beijing1.html
- Travel note detail: https://you.ctrip.com/travels/beijing1/4126037.html
- Q&A root: https://you.ctrip.com/asks/
- City Q&A: https://you.ctrip.com/asks/beijing1.html
- Community guide: https://you.ctrip.com/htmlpages/guide.html/

### Community guide / public reading

Finding 59. Ctrip's own community guide describes the platform as channels for destination info, travel notes, Q&A, and official destination/tourism bureau info. It says the information comes from real community users and is intended to help planning/sharing.

Finding 60. Public reading is allowed by product design, but republication is not. Use it as editor research and link out.

### Booking widgets and foreign travelers

Finding 61. Ctrip China-side is useful for local inventory and operations: domestic hotels, trains, activities, tickets, China customer-service flows, Chinese names, and sometimes more local Q&A than Trip.com.

Finding 62. For actual foreign tourists, Trip.com is still the cleaner front door for English UI, foreign cards, international customer service, and passport-friendly flows. The Chinese Ctrip site may require Chinese literacy, Chinese phone/SMS, China-specific payment, and local identity assumptions.

Finding 63. Our site should not embed Ctrip booking widgets unless there is an affiliate/partner agreement. Use text links or "book via Trip.com/Ctrip" buttons under affiliate rules.

### Legal / redistribution

Finding 64. Ctrip's user agreement forbids commercial use of any Ctrip platform data without permission, including use by web crawler, copy, propagation, or other means.

Finding 65. Ctrip's user agreement says Ctrip-owned platform content, including pages, text, images, audio/video, data, and information, belongs to Ctrip and cannot be used or made into derivatives without written consent.

Finding 66. Ctrip攻略社区 user rules say third parties may not obtain/use any part of the site or any content/service/material directly or indirectly available through the site for non-private or commercial purposes without explicit written permission.

Recommendation: Ctrip is referenceable, not ingestible. Link to public Ctrip pages and write our own summaries. Do not display Ctrip ratings/review counts as a copied data layer.

Useful URLs:

- https://contents.ctrip.com/activitysetupapp/mkt/index/agreement202311
- https://contents.ctrip.com/activitysetupapp/mkt/index/userrule
- https://docs.c-ctrip.com/files/6/unc_agreement_pdf/1tm3r12000hb2zpof8D77.pdf
- https://pages.c-ctrip.com/public/encroachment.html

## D. 美团 Meituan

### Web vs app

Finding 67. Meituan is the most app/transaction-driven platform in this set. The desktop homepage is mostly corporate; some city/category paths redirect or fail for non-app/public browsing.

Finding 68. The mobile app download page explicitly describes the consumer product as covering food, delivery, hotel booking, tourism deals, flights, train tickets, movie tickets, scenic tickets, and group tours.

Finding 69. The same page states Meituan provides consumer reviews, merchant ratings, and merchant information query functions. This confirms review/merchant-data existence but not public reuse rights.

Useful URLs:

- https://www.meituan.com/
- https://bj.meituan.com/
- https://i.meituan.com/client/meituan

### Meituan vs Dianping

Finding 70. Meituan and Dianping merged in 2015. Public reporting says the merged entity integrated resources while retaining brands/businesses.

Finding 71. Practical differentiation for tourism research: Dianping is the local-life content/review/discovery layer; Meituan is the transaction layer for coupons, tickets, hotels, deals, and app conversion. Data overlaps, but user intent differs.

Finding 72. For our project, Dianping helps answer "what locals praise and rank"; Meituan helps answer "what people buy/book/use now." But Meituan's public web leakage is weak.

Useful URLs:

- https://m.21jingji.com/article/20151008/herald/d1a64f593c439e3c4f722d415556d582.html
- https://finance.sina.cn/usstock/hlwgs/2015-11-12/tech-ifxkrwks3777633.d.html
- https://finance.sina.com.cn/chanjing/gsnews/20151009/020923424040.shtml

### Tourism / 景点 / 玩乐 coverage

Finding 73. Meituan app product coverage includes 旅游周边: flights, train tickets, scenic tickets, and group tours. This likely covers Beijing, Shanghai, Guangzhou, and Shenzhen, but the useful browsing happens in-app.

Finding 74. Public web pages do not provide enough stable tourism data to build city guides. Treat Meituan as blocked for extraction and referenceable only for high-level product availability or editor app checks.

### Legal

Finding 75. Meituan legal treatment is the same family as Dianping. The IP statement explicitly covers rankings, data, and information, and prohibits unlicensed copying, reproducing, quoting, linking, and technical scraping.

## E. 飞猪 Fliggy

### Public web data

Finding 76. Fliggy's public desktop homepage is a booking portal, not a review/discovery corpus. Its title and page text cover flights, hotels, inns, vacation products, attraction tickets, and visas.

Finding 77. The public homepage describes product coverage: flight booking, hotel booking, train tickets, vacation packages, attraction tickets, business travel, local transport, travel insurance, and Alibaba business travel.

Finding 78. I did not find a public, indexable Fliggy equivalent of Dianping review pages or Ctrip's `you.ctrip.com` community depth. Most useful data is likely app/search/product-detail driven.

Useful URLs:

- https://www.fliggy.com/
- https://www.fliggy.com/travel
- https://www.alitrip.com/
- https://rule.fliggy.com/

### 旅游攻略 community

Finding 79. Fliggy may have travel content in app/product flows, but I did not find a robust public web travel-guide community comparable to Ctrip攻略社区. Do not plan editorial extraction from Fliggy.

### Foreign-card payment status

Finding 80. Fliggy's merchant service agreement says merchants accept Alipay services, other Alipay-provided payment methods, or platform-supported payment methods. It also says Fliggy will continue expanding payment methods and rollout may be phased.

Finding 81. I found no official Fliggy public page that guarantees foreign Visa/Mastercard acceptance for foreign tourists across attraction tickets/hotels/packages.

Finding 82. Practical recommendation: do not send foreign tourists to Fliggy as a primary booking path unless testing a specific SKU/payment path. Use Trip.com/Ctrip, official attraction sites, or WeChat/Alipay mini-program guidance instead.

### Legal

Finding 83. Fliggy merchant agreement says Fliggy official products, technology, software, programs, data, and other information belong to Fliggy/affiliates; merchants agree not to commercially use other Fliggy platform data without approval, including copying, spreading, or disclosing other users' materials.

Finding 84. Even where product titles/prices are visible, do not build a replicated Fliggy travel-product database without a partner agreement.

Useful URLs:

- https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231106103244276/20231106103244276_1_3_19922.pdf
- https://rule.fliggy.com/

## F. Practical conclusion for our project

### What we can safely do

Finding 85. Build our own POI and guide pages from original editorial research, official attraction/government sources, and licensed map APIs.

Finding 86. Link out to Dianping, AMap, Ctrip, Meituan, and Fliggy pages where helpful, but avoid copying their proprietary data fields into our own UI.

Finding 87. Use Dianping/Meituan internally to discover local restaurants, old shops, top dishes, neighborhoods, and whether a place is locally validated. Convert that into our own prose and recommendations.

Finding 88. Use AMap ranking pages to understand search/navigation heat and city "must go" hierarchy. Use AMap API/deep links only in compliance with API terms and cross-border restrictions.

Finding 89. Use Ctrip Q&A and recent reviews to detect operational friction: booking windows, ID/passport issues, luggage storage, elderly/child suitability, closures, crowd timing, and transport timing.

Finding 90. Treat Fliggy primarily as a booking-market sanity check, not as a tourism-intel source.

### Information architecture patterns worth copying, not the data

Finding 91. Use city landing pages with category rows: food, sights, museums/exhibitions, night views, family, shopping, transit neighborhoods.

Finding 92. Add "locals actually go" modules based on our own synthesis of: old-shop longevity, local neighborhood density, AMap navigation/search heat, Ctrip Q&A frequency, and repeated mentions across sources.

Finding 93. Split rankings by intent, not just overall score: first-time must-see, rainy day, night view, family, low-walking, food street, old-local favorite, near subway, open late.

Finding 94. Show "what is hidden behind Chinese apps" as traveller guidance: full reviews, current queues, exact deals, live crowding, and some ticket flows require local apps.

Finding 95. Use source badges carefully:

- "Editors checked Dianping/Meituan/AMap/Ctrip" is safer than "Dianping says 4.8".
- "Open in AMap" is safer than copying AMap traffic/transit data.
- "Read recent Ctrip Q&A" is safer than reproducing Q&A answers.

### Source URL index

1. https://www.dianping.com/beijing
2. https://www.dianping.com/shanghai
3. https://www.dianping.com/guangzhou
4. https://www.dianping.com/shenzhen
5. https://m.dianping.com/shop/2116402?msource=applemaps
6. https://m.dianping.com/shop/68075700?msource=applemaps
7. https://m.dianping.com/shop/814921852?msource=applemaps
8. https://m.dianping.com/shop/131544661?msource=applemaps
9. https://www.dianping.com/biyingbang
10. https://www.dianping.com/blackpearl
11. https://index.meituan.com/reports/meituan-black-pearl-2026/
12. https://rules-center.meituan.com/m/detail/guize/69
13. https://open.dianping.com/
14. https://developer.meituan.com/
15. https://www.amap.com/place/B000A8UIN8
16. https://gaode.com/poi/B000A8UIN8
17. https://lbs.amap.com/api/webservice/summary
18. https://lbs.amap.com/api/webservice/guide/api-advanced/search
19. https://www.amap.com/ranking/beijing/scenic
20. https://www.amap.com/ranking/shanghai/scenic
21. https://www.amap.com/ranking/guangzhou/scenic
22. https://www.amap.com/ranking/shenzhen/scenic
23. https://ranks.amap.com/
24. https://lbs.amap.com/api/webservice/guide/api/direction
25. https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry
26. https://cache.amap.com/h5/h5/publish/241/index.html
27. https://you.ctrip.com/htmlpages/guide.html/
28. https://you.ctrip.com/sight/peking1.html
29. https://you.ctrip.com/sight/beijing1/52626.html
30. https://you.ctrip.com/travels/beijing1.html
31. https://you.ctrip.com/asks/
32. https://you.ctrip.com/asks/beijing1.html
33. https://contents.ctrip.com/activitysetupapp/mkt/index/agreement202311
34. https://contents.ctrip.com/activitysetupapp/mkt/index/userrule
35. https://www.meituan.com/
36. https://bj.meituan.com/
37. https://i.meituan.com/client/meituan
38. https://m.21jingji.com/article/20151008/herald/d1a64f593c439e3c4f722d415556d582.html
39. https://www.fliggy.com/
40. https://www.fliggy.com/travel
41. https://rule.fliggy.com/
42. https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231106103244276/20231106103244276_1_3_19922.pdf

## Final platform classification

| Platform | Classification | What is usable on our site | What is referenceable for editors | What is blocked / avoid |
|---|---:|---|---|---|
| 大众点评 Dianping | REFERENCEABLE | Outbound links to public shop/list/report pages; high-level statements from official news/reports with citation | Local restaurant discovery, top dishes, local badges, rough popularity, 必吃榜/黑珍珠 coverage | Republishing ratings, review counts, reviews, photos, top-dish counts, full list data, queue/deal signals without license |
| 高德地图 AMap | USABLE WITH LICENSE / REFERENCEABLE | Official API/embed/deep links under AMap terms; public link-out to ranking pages | City scenic hierarchy, tags, navigation/search heat proxy, routing friction | Scraping/caching POI, traffic, transit, or map data; offshore transfer/storage of China map data; live crowd/transit embeds without permission |
| 携程 Ctrip China-side | REFERENCEABLE | Outbound links to attraction, Q&A, guide, and booking pages; own editorial summaries | Practical travel Q&A, recent operational issues, attraction policies, route/time tips, Chinese-local reviews | Republishing Ctrip ratings, review counts, review text, photos, Q&A answers, or guide text commercially |
| 美团 Meituan | BLOCKED / REFERENCEABLE | High-level product link-out or app download guidance | App-only check for ticket/deal availability and transaction signals | Extracting merchant ratings, review data, deals, tickets, or app-only tourism inventory |
| 飞猪 Fliggy | BLOCKED / LOW-VALUE REFERENCEABLE | Link-out to Fliggy booking pages only where a specific booking path is tested | Price/inventory sanity check for Alibaba travel products | Review/community extraction, product database replication, claiming foreign-card acceptance without SKU-level testing |
