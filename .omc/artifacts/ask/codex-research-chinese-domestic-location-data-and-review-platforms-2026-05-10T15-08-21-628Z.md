# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-10T15:08:21.632Z

## Original task

Research Chinese domestic location-data and review platforms (大众点评 Dianping, 美团 Meituan, 高德地图 Amap, 携程 Ctrip / Trip.com China site, 飞猪 Fliggy) for tourism intel useful to a foreign-tourist-to-China information site. Save report to: c:/Users/h/Documents/New project 2/v2/research/china-platforms-02-maps-reviews.md

Goal: identify what data these platforms expose publicly that we can legally reference, the IA / information patterns that surface 'what locals actually visit', and what's hidden behind walls.

## Section A - 大众点评 Dianping
1. Public web access pattern: dianping.com URL structure for restaurants/attractions in Beijing/Shanghai/Guangzhou/Shenzhen
2. What's visible to non-logged-in foreigners: ratings, review counts, address, phone, hours, photos, top dishes
3. What's behind login/app-only walls: full reviews, deep photos, queue time signals
4. Their official 'must-eat' / 必吃榜 list (https://www.dianping.com/biyingbang) — is this publicly readable, what does it cover for our 4 cities, and how often updated
5. Their 黑珍珠餐厅指南 (Black Pearl Restaurant Guide) — Chinese answer to Michelin; public list URL; coverage in 北上广深
6. Are their ratings/review counts citable on a third-party site (like how Google Maps rating is citable everywhere)? Any ToS restrictions?
7. Is there any official open data / partnership with foreign sites that we could use legitimately?

## Section B - 高德地图 Amap (gaode.com)
1. AMap's public attraction/landmark data: how to look up an attraction page (gaode.com/poi/B0XXX...); what data is shown (rating, hours, photos, reviews, real-time crowd if visible)
2. AMap web vs app: what crowd-density / real-time data is in the app that's NOT on web
3. AMap's 高德指南 (官方旅游推荐) — is there a curated 'best of' list per city
4. Real-time public-transit data: Amap shows live arrival times, congestion, subway transfer times — is any of this exposed on the public web for embedding
5. AMap Public API (official API for developers) — what's free, what's paid, what's required for foreign developers (KYC / phone verification)
6. Legal: AMap data redistribution rules for a foreign third-party site

## Section C - 携程 Ctrip / Trip.com China-side
1. Ctrip's English version is Trip.com (already covered earlier). The Chinese ctrip.com has different content depth — what's unique to ctrip.com that's NOT on trip.com (community Q&A, deeper local tips, train timetables)
2. The 攻略社区 (community travel guides) — public reading without login? What's the URL pattern?
3. Their flight + hotel + train booking widgets: how foreign travellers actually use the Chinese site
4. Legal: same parent company as Trip.com — what's their data redistribution stance

## Section D - 美团 Meituan
1. Web vs app: Meituan is heavily app-driven; what tourism data leaks to the web (meituan.com)?
2. Meituan vs Dianping: same parent company since 2015 merger; data overlap; differentiation
3. Tourism / 景点 / 玩乐 sub-product on Meituan — what's its coverage for 4 cities?

## Section E - 飞猪 Fliggy (Alibaba travel)
1. Public web data on attractions, hotels, package tours
2. Their 旅游攻略 community
3. Foreign-card payment status

## Section F - Practical conclusion for our project
For each platform, classify into:
- (a) USABLE — data legally surfaceable on our site (link out, cite rating)
- (b) REFERENCEABLE — we can read for our editors but not display
- (c) BLOCKED — full wall, no value extractable

Output a single summary table at the end. Aim for 20+ distinct URLs cited.

Save and confirm path + finding count.

## Final prompt

Research Chinese domestic location-data and review platforms (大众点评 Dianping, 美团 Meituan, 高德地图 Amap, 携程 Ctrip / Trip.com China site, 飞猪 Fliggy) for tourism intel useful to a foreign-tourist-to-China information site. Save report to: c:/Users/h/Documents/New project 2/v2/research/china-platforms-02-maps-reviews.md

Goal: identify what data these platforms expose publicly that we can legally reference, the IA / information patterns that surface 'what locals actually visit', and what's hidden behind walls.

## Section A - 大众点评 Dianping
1. Public web access pattern: dianping.com URL structure for restaurants/attractions in Beijing/Shanghai/Guangzhou/Shenzhen
2. What's visible to non-logged-in foreigners: ratings, review counts, address, phone, hours, photos, top dishes
3. What's behind login/app-only walls: full reviews, deep photos, queue time signals
4. Their official 'must-eat' / 必吃榜 list (https://www.dianping.com/biyingbang) — is this publicly readable, what does it cover for our 4 cities, and how often updated
5. Their 黑珍珠餐厅指南 (Black Pearl Restaurant Guide) — Chinese answer to Michelin; public list URL; coverage in 北上广深
6. Are their ratings/review counts citable on a third-party site (like how Google Maps rating is citable everywhere)? Any ToS restrictions?
7. Is there any official open data / partnership with foreign sites that we could use legitimately?

## Section B - 高德地图 Amap (gaode.com)
1. AMap's public attraction/landmark data: how to look up an attraction page (gaode.com/poi/B0XXX...); what data is shown (rating, hours, photos, reviews, real-time crowd if visible)
2. AMap web vs app: what crowd-density / real-time data is in the app that's NOT on web
3. AMap's 高德指南 (官方旅游推荐) — is there a curated 'best of' list per city
4. Real-time public-transit data: Amap shows live arrival times, congestion, subway transfer times — is any of this exposed on the public web for embedding
5. AMap Public API (official API for developers) — what's free, what's paid, what's required for foreign developers (KYC / phone verification)
6. Legal: AMap data redistribution rules for a foreign third-party site

## Section C - 携程 Ctrip / Trip.com China-side
1. Ctrip's English version is Trip.com (already covered earlier). The Chinese ctrip.com has different content depth — what's unique to ctrip.com that's NOT on trip.com (community Q&A, deeper local tips, train timetables)
2. The 攻略社区 (community travel guides) — public reading without login? What's the URL pattern?
3. Their flight + hotel + train booking widgets: how foreign travellers actually use the Chinese site
4. Legal: same parent company as Trip.com — what's their data redistribution stance

## Section D - 美团 Meituan
1. Web vs app: Meituan is heavily app-driven; what tourism data leaks to the web (meituan.com)?
2. Meituan vs Dianping: same parent company since 2015 merger; data overlap; differentiation
3. Tourism / 景点 / 玩乐 sub-product on Meituan — what's its coverage for 4 cities?

## Section E - 飞猪 Fliggy (Alibaba travel)
1. Public web data on attractions, hotels, package tours
2. Their 旅游攻略 community
3. Foreign-card payment status

## Section F - Practical conclusion for our project
For each platform, classify into:
- (a) USABLE — data legally surfaceable on our site (link out, cite rating)
- (b) REFERENCEABLE — we can read for our editors but not display
- (c) BLOCKED — full wall, no value extractable

Output a single summary table at the end. Aim for 20+ distinct URLs cited.

Save and confirm path + finding count.

## Raw output

```text
SUCCESS: The process with PID 487936 (child process of PID 575136) has been terminated.
SUCCESS: The process with PID 575136 (child process of PID 576168) has been terminated.
SUCCESS: The process with PID 576168 (child process of PID 31344) has been terminated.
SUCCESS: The process with PID 31344 (child process of PID 521836) has been terminated.
SUCCESS: The process with PID 527076 (child process of PID 586600) has been terminated.
SUCCESS: The process with PID 586600 (child process of PID 511172) has been terminated.
SUCCESS: The process with PID 511172 (child process of PID 573292) has been terminated.
SUCCESS: The process with PID 573292 (child process of PID 521836) has been terminated.
Saved the report to:

[c:/Users/h/Documents/New project 2/v2/research/china-platforms-02-maps-reviews.md](</c:/Users/h/Documents/New project 2/v2/research/china-platforms-02-maps-reviews.md>)

Verification:
- Finding count: 95
- Distinct URL count: 71
- Final summary classification table included at the end.


OpenAI Codex v0.128.0 (research preview)
--------
workdir: c:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1262-eb98-7e23-8484-67d22626d5e7
--------
user
Research Chinese domestic location-data and review platforms (大众点评 Dianping, 美团 Meituan, 高德地图 Amap, 携程 Ctrip / Trip.com China site, 飞猪 Fliggy) for tourism intel useful to a foreign-tourist-to-China information site. Save report to: c:/Users/h/Documents/New project 2/v2/research/china-platforms-02-maps-reviews.md

Goal: identify what data these platforms expose publicly that we can legally reference, the IA / information patterns that surface 'what locals actually visit', and what's hidden behind walls.

## Section A - 大众点评 Dianping
1. Public web access pattern: dianping.com URL structure for restaurants/attractions in Beijing/Shanghai/Guangzhou/Shenzhen
2. What's visible to non-logged-in foreigners: ratings, review counts, address, phone, hours, photos, top dishes
3. What's behind login/app-only walls: full reviews, deep photos, queue time signals
4. Their official 'must-eat' / 必吃榜 list (https://www.dianping.com/biyingbang) — is this publicly readable, what does it cover for our 4 cities, and how often updated
5. Their 黑珍珠餐厅指南 (Black Pearl Restaurant Guide) — Chinese answer to Michelin; public list URL; coverage in 北上广深
6. Are their ratings/review counts citable on a third-party site (like how Google Maps rating is citable everywhere)? Any ToS restrictions?
7. Is there any official open data / partnership with foreign sites that we could use legitimately?

## Section B - 高德地图 Amap (gaode.com)
1. AMap's public attraction/landmark data: how to look up an attraction page (gaode.com/poi/B0XXX...); what data is shown (rating, hours, photos, reviews, real-time crowd if visible)
2. AMap web vs app: what crowd-density / real-time data is in the app that's NOT on web
3. AMap's 高德指南 (官方旅游推荐) — is there a curated 'best of' list per city
4. Real-time public-transit data: Amap shows live arrival times, congestion, subway transfer times — is any of this exposed on the public web for embedding
5. AMap Public API (official API for developers) — what's free, what's paid, what's required for foreign developers (KYC / phone verification)
6. Legal: AMap data redistribution rules for a foreign third-party site

## Section C - 携程 Ctrip / Trip.com China-side
1. Ctrip's English version is Trip.com (already covered earlier). The Chinese ctrip.com has different content depth — what's unique to ctrip.com that's NOT on trip.com (community Q&A, deeper local tips, train timetables)
2. The 攻略社区 (community travel guides) — public reading without login? What's the URL pattern?
3. Their flight + hotel + train booking widgets: how foreign travellers actually use the Chinese site
4. Legal: same parent company as Trip.com — what's their data redistribution stance

## Section D - 美团 Meituan
1. Web vs app: Meituan is heavily app-driven; what tourism data leaks to the web (meituan.com)?
2. Meituan vs Dianping: same parent company since 2015 merger; data overlap; differentiation
3. Tourism / 景点 / 玩乐 sub-product on Meituan — what's its coverage for 4 cities?

## Section E - 飞猪 Fliggy (Alibaba travel)
1. Public web data on attractions, hotels, package tours
2. Their 旅游攻略 community
3. Foreign-card payment status

## Section F - Practical conclusion for our project
For each platform, classify into:
- (a) USABLE — data legally surfaceable on our site (link out, cite rating)
- (b) REFERENCEABLE — we can read for our editors but not display
- (c) BLOCKED — full wall, no value extractable

Output a single summary table at the end. Aim for 20+ distinct URLs cited.

Save and confirm path + finding count.
codex
I’ll gather current public-source evidence first, then write the markdown report directly into the requested path. I’m going to lean on official pages and terms where possible, and use search snippets only as secondary evidence when the platforms wall off content.
web search: 
web search: 大众点评 店铺 URL 结构 dianping.com/shop 北京 上海 广州 深圳 景点 餐厅
web search: 
web search: https://www.dianping.com/beijing
web search: 
web search: site:dianping.com/biyingbang 2025 大众点评 必吃榜 北京 上海 广州 深圳
web search: 
web search: site:about.meituan.com/news 2025 大众点评 必吃榜 3091 144 城 正式发布
web search: 
web search: https://www.dianping.com/beijing
web search: 
web search: 美团 大众点评 用户协议 未经许可 不得转载 知识产权声明 内容 数据 抓取
web search: 
web search: 高德地图 POI 页面 gaode.com/poi B0FF 北京 景点 评分 营业时间 评论 网址
web search: 
web search: 高德开放平台 Web服务 API 周边搜索 POI 费用 免费 配额 开发者 认证
web search: 
web search: https://lbs.amap.com/api/webservice/summary
web search: 
web search: '个人认证开发者日配额' in https://lbs.amap.com/api/webservice/guide/tools/flowlevel
web search: 
web search: https://lbs.amap.com/api/webservice/guide/api/search
web search: 
web search: https://lbs.amap.com/api/webservice/guide/api/direction
web search: 
web search: 携程 攻略社区 URL pattern travel guide public reading you.ctrip.com 攻略 社区 游记 问答
web search: 
web search: https://you.ctrip.com/htmlpages/guide.html/
web search: 
web search: https://you.ctrip.com/asks/
web search: 
web search: 美团 景点 玩乐 北京 上海 广州 深圳 meituan.com 旅游 public web app only
codex
I’ve got the strongest live evidence for Dianping, AMap, and Ctrip now: public page fields, official API docs, and platform terms. I’m filling the gaps on Meituan and Fliggy from official/public pages next, then I’ll turn it into the requested markdown with a legal-use classification table.
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-ChildItem -Force' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$urls=@('"'https://www.meituan.com/','https://bj.meituan.com/','https://i.meituan.com/client/meituan','https://www.fliggy.com/','https://www.fliggy.com/travel','https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231106103244276/20231106103244276_1_3_19922.pdf'); foreach("'$u in $urls){ try{ $r=Invoke-WebRequest -Uri $u -MaximumRedirection 5 -UseBasicParsing -TimeoutSec 15; "URL: $u`nSTATUS: $($r.StatusCode)`nTITLE/SNIP: $(([regex]::Match($r.Content,'"'<title["'^>]*>(.*?)</title>'"','Singleline').Groups[1].Value -replace '\\s+',' ').Trim())"'`nLEN: $($r.Content.Length)`n" } catch { "URL: $u`nERROR: $($_.Exception.Message)`n" }}' in c:\Users\h\Documents\New project 2
 succeeded in 1832ms:


    目录: C:\Users\h\Documents\New project 2


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----         2026/5/10     22:45                .claude                                                              
d--h--         2026/5/10     22:53                .git                                                                 
d-----         2026/5/10     22:57                .omc                                                                 
d-----         2026/5/10     22:56                .playwright-mcp                                                      
d-----          2026/5/9     16:47                assets                                                               
d-----          2026/5/9     22:56                node_modules                                                         
d-----          2026/5/9     17:01                src                                                                  
d-----         2026/5/10     22:52                v2                                                                   
-a----         2026/5/10     22:52            499 .gitignore                                                           
-a----          2026/5/9     17:21          27818 app.js                                                               
-a----          2026/5/9     17:00          13022 index.html                                                           
-a----          2026/5/9     17:30          11678 map3d.js                                                             
-a----          2026/5/9     22:56           3170 package-lock.json                                                    
-a----          2026/5/9     22:56             62 package.json                                                         
-a----         2026/5/10      1:35          24842 PROJECT_PLAN.md                                                      
-a----          2026/5/9     17:21          41244 styles.css                                                           



 succeeded in 17293ms:
URL: https://www.meituan.com/
STATUS: 200
TITLE/SNIP: 美团 - 帮大家吃得更好，生活更好
LEN: 117189

URL: https://bj.meituan.com/
STATUS: 200
TITLE/SNIP: 美团 - 帮大家吃得更好，生活更好
LEN: 117203

URL: https://i.meituan.com/client/meituan
STATUS: 200
TITLE/SNIP: 美团下载官方APP， 吃喝玩乐1折起-美团网手机版
LEN: 25259

URL: https://www.fliggy.com/
STATUS: 200
TITLE/SNIP: 飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】
LEN: 22154

URL: https://www.fliggy.com/travel
STATUS: 200
TITLE/SNIP: 飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】
LEN: 21874

URL: https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231106103244276/20231106103244276_1_3_19922.pdf
STATUS: 200
TITLE/SNIP: 
LEN: 644603


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$r=Invoke-WebRequest -Uri '"'https://www.meituan.com/' -UseBasicParsing -TimeoutSec 20; "'$text=($r.Content -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); foreach("'$pat in @('"'旅游','景点','酒店','门票','吃喝玩乐','下载美团')){ \"-- "'$pat --"; $i=$text.IndexOf($pat); if($i -ge 0){ $start=[Math]::Max(0,$i-180); $len=[Math]::Min(500,$text.Length-$start); $text.Substring($start,$len) } }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$r=Invoke-WebRequest -Uri '"'https://i.meituan.com/client/meituan' -UseBasicParsing -TimeoutSec 20; "'$text=($r.Content -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); foreach("'$pat in @('"'旅游周边','景点门票','酒店预订','美食精选','APP')){ \"-- "'$pat --"; $i=$text.IndexOf($pat); if($i -ge 0){ $start=[Math]::Max(0,$i-160); $len=[Math]::Min(480,$text.Length-$start); $text.Substring($start,$len) } }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$r=Invoke-WebRequest -Uri '"'https://www.fliggy.com/' -UseBasicParsing -TimeoutSec 20; "'$text=($r.Content -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); foreach("'$pat in @('"'门票','酒店','签证','目的地','攻略','境外')){ \"-- "'$pat --"; $i=$text.IndexOf($pat); if($i -ge 0){ $start=[Math]::Max(0,$i-160); $len=[Math]::Min(480,$text.Length-$start); $text.Substring($start,$len) } }' in c:\Users\h\Documents\New project 2
 succeeded in 2483ms:
-- 门票 --
 window.trackerPerformanceTime = {};window.trackerPerformanceTime.trip_startTime = Date.now(); window.REACT_TOUCH_TAP_FIXED = true 飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】 window._$isOffline$_=false; window.g_config = {assetsServer: 'https://g.alicdn.com/',appVersion: '0.5.24',pageName: 'PC_HOME'} body {max-width: 100vw !important;} (function () {var ua = window.navigator.userAgent;var msie = ua.indexOf('MSIE ');var trident = ua.indexOf('Trident/');if (msie > 0 || trident > 0) 
-- 酒店 --
 window.trackerPerformanceTime = {};window.trackerPerformanceTime.trip_startTime = Date.now(); window.REACT_TOUCH_TAP_FIXED = true 飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】 window._$isOffline$_=false; window.g_config = {assetsServer: 'https://g.alicdn.com/',appVersion: '0.5.24',pageName: 'PC_HOME'} body {max-width: 100vw !important;} (function () {var ua = window.navigator.userAgent;var msie = ua.indexOf('MSIE ');var trident = ua.indexOf('Trident/');if (msie > 0 || trident > 0) 
-- 签证 --
window.trackerPerformanceTime = {};window.trackerPerformanceTime.trip_startTime = Date.now(); window.REACT_TOUCH_TAP_FIXED = true 飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】 window._$isOffline$_=false; window.g_config = {assetsServer: 'https://g.alicdn.com/',appVersion: '0.5.24',pageName: 'PC_HOME'} body {max-width: 100vw !important;} (function () {var ua = window.navigator.userAgent;var msie = ua.indexOf('MSIE ');var trident = ua.indexOf('Trident/');if (msie > 0 || trident > 0) {
-- 目的地 --
: 1. 机票预订：覆盖全球多个航线，提供各种舱位选择，保障您能以最优惠的价格开始旅程。 2. 酒店预订：合作众多国内外知名酒店、度假村，从经济型到豪华型，总有一间适合您的风格和预算。 3. 火车票预订：无论是高铁还是普通列车，我们助您轻松规划国内各地的铁路旅行。 4. 旅游度假：精心挑选的旅游套餐，覆盖海内外热门旅游目的地，让您的假期充满精彩。 5. 景点门票：提前预订国内外热门景点门票，避免长时间排队，享受无缝的旅行体验。 6. 商旅服务：专为企业客户量身定制的商务旅行解决方案，支持企业差旅管理和费用控制。 7. 交通出行：无论是打车、顺风车，还是接送机、租车服务，我们都能为您提供方便快捷的本地出行方式。 8. 旅行保险：为您和您的家人提供全面的保险计划，确保旅途安全，让您无后顾之忧。 9. 企业商旅：飞猪旗下专为企业打造的全场景、一站式数智化 差旅服务平台 阿里商旅 在飞猪旅行，我们不仅提供预订服务，更是注重用户体验，确保旅行过程中的每一步都简单便捷。轻松规划行程、比较优惠价格、发现不可错过的体验，所有这些只需轻触指尖。 网站地图 wind
-- 攻略 --
-- 境外 --

 succeeded in 2648ms:
-- 旅游周边 --
下载 应用描述 产品特点 新用户1元吃喝玩乐全都有：美食精选、外卖订餐、酒店预订、旅游团购、机票打折、电影特价等团购实惠根本停不下来！ 情侣约会：吃美食、看电影、住酒店、去旅游； 懒宅点餐：美食、水果、鲜花、下午茶、超市百货； 朋友轰趴：按摩足疗、KTV、密室逃脱、桌游电玩； 闺蜜逛街：美容、美发、美甲、瑜伽、舞蹈； 旅游周边：机票、火车票、景点门票、跟团游。 产品简介 美团、美团外卖、美团酒店、猫眼电影客户端，为您提供美食、外卖、酒店、旅游、电影、KTV、机票、火车票、洗车养车等全面服务。除各种实惠，美团网提供用户消费评价、商家评分、商家信息查询等功能，旨在为用户提供好的服务！ 关于美团 美团网（meituan.com）成立于2010年3月4日，汇聚美食、外卖、酒店、旅游、电影等生活服务于一体的综合信息网站。秉承消费者至上的价值观，在业内率先推出“7天内未消费无条件退款”和“美团券过期未消费无条件退款”等消费者保障条款，为消费者放心消费提供权益保障。 用户帮助 感谢您使用美团手机客户端，使用中有任何问题可通过以下方式查询解决： 1. 客户端查询
-- 景点门票 --
 新用户1元吃喝玩乐全都有：美食精选、外卖订餐、酒店预订、旅游团购、机票打折、电影特价等团购实惠根本停不下来！ 情侣约会：吃美食、看电影、住酒店、去旅游； 懒宅点餐：美食、水果、鲜花、下午茶、超市百货； 朋友轰趴：按摩足疗、KTV、密室逃脱、桌游电玩； 闺蜜逛街：美容、美发、美甲、瑜伽、舞蹈； 旅游周边：机票、火车票、景点门票、跟团游。 产品简介 美团、美团外卖、美团酒店、猫眼电影客户端，为您提供美食、外卖、酒店、旅游、电影、KTV、机票、火车票、洗车养车等全面服务。除各种实惠，美团网提供用户消费评价、商家评分、商家信息查询等功能，旨在为用户提供好的服务！ 关于美团 美团网（meituan.com）成立于2010年3月4日，汇聚美食、外卖、酒店、旅游、电影等生活服务于一体的综合信息网站。秉承消费者至上的价值观，在业内率先推出“7天内未消费无条件退款”和“美团券过期未消费无条件退款”等消费者保障条款，为消费者放心消费提供权益保障。 用户帮助 感谢您使用美团手机客户端，使用中有任何问题可通过以下方式查询解决： 1. 客户端查询入口：更多 => 关于美
-- 酒店预订 --
; position: relative; top: -0.05rem; margin-right: 0.25rem; } .nav-wrap-right { padding-right: 0.2rem; } 美团客户端下载 首页 我的 搜索 立即下载 应用描述 产品特点 新用户1元吃喝玩乐全都有：美食精选、外卖订餐、酒店预订、旅游团购、机票打折、电影特价等团购实惠根本停不下来！ 情侣约会：吃美食、看电影、住酒店、去旅游； 懒宅点餐：美食、水果、鲜花、下午茶、超市百货； 朋友轰趴：按摩足疗、KTV、密室逃脱、桌游电玩； 闺蜜逛街：美容、美发、美甲、瑜伽、舞蹈； 旅游周边：机票、火车票、景点门票、跟团游。 产品简介 美团、美团外卖、美团酒店、猫眼电影客户端，为您提供美食、外卖、酒店、旅游、电影、KTV、机票、火车票、洗车养车等全面服务。除各种实惠，美团网提供用户消费评价、商家评分、商家信息查询等功能，旨在为用户提供好的服务！ 关于美团 美团网（meituan.com）成立于2010年3月4日，汇聚美食、外卖、酒店、旅游、电影等生活服务于一体的综合信
-- 美食精选 --
h: 0.48rem; position: relative; top: -0.05rem; margin-right: 0.25rem; } .nav-wrap-right { padding-right: 0.2rem; } 美团客户端下载 首页 我的 搜索 立即下载 应用描述 产品特点 新用户1元吃喝玩乐全都有：美食精选、外卖订餐、酒店预订、旅游团购、机票打折、电影特价等团购实惠根本停不下来！ 情侣约会：吃美食、看电影、住酒店、去旅游； 懒宅点餐：美食、水果、鲜花、下午茶、超市百货； 朋友轰趴：按摩足疗、KTV、密室逃脱、桌游电玩； 闺蜜逛街：美容、美发、美甲、瑜伽、舞蹈； 旅游周边：机票、火车票、景点门票、跟团游。 产品简介 美团、美团外卖、美团酒店、猫眼电影客户端，为您提供美食、外卖、酒店、旅游、电影、KTV、机票、火车票、洗车养车等全面服务。除各种实惠，美团网提供用户消费评价、商家评分、商家信息查询等功能，旨在为用户提供好的服务！ 关于美团 美团网（meituan.com）成立于2010年3月4日，汇聚美食、外卖、酒店、旅游、电影等生
-- APP --
w.location.href=url+(url.indexOf('?')===-1?'?':'&')+queries.join('&')}function parse(q){var ret={},i,len,pair;if(q){q=q.split('&');for(i=0,len=q.length;i 美团下载官方APP， 吃喝玩乐1折起-美团网手机版 var MT=MT||{};MT.HTTP_REFERER="";MT.pageData={pid:"100038",newUser:true,pc:"",sid:"set-hldy-wpt-touch-group11.mt",st:"1778425083959",cip:"95.181.188.98",setPC:function(v){v=v||"";if(Object.prototype.toString.call(v)=="[object Object]"){var a=[];for(i in v){a.push(i+"="+v[i])}this.pc=a.join("&")}else

 succeeded in 2910ms:
-- 旅游 --
-- 景点 --
-- 酒店 --
-- 门票 --
-- 吃喝玩乐 --
-- 下载美团 --
行 “ 帮大家吃得更好，生活更好 ” 的公司使命。 自2010年3月成立以来， 美团持续推动服务零售和商品零售在需求侧和供给侧的数字化升级，和广大合作伙伴一起努力为消费者提供品质服务。 2018年9月20日，美团在港交所挂牌上市。 美团始终以客户为中心， 不断加大在新技术上的研发投入。 美团会和大家一起努力，更好承担社会责任， 更多创造社会价值。 了解更多 下载美团App 最新动态 查看全部 美团将持续优化算法机制 服务生态各方共赢发展 倾听社会各界意见，持之以恒完善规则与机制，以更负责任的算法实践助力行业高质量发展。 2026-05-08 重庆江北机场候机点外卖，机器人给你送达 4月29日，美团“小黄蜂”室内外智能配送机器人正式在重庆江北国际机场T3航站楼投用，这也是其首次落地西南地区大型航空枢纽。 2026-04-30 放下外卖箱就去救人——全国多地骑手见义勇为故事背后的平台激励机制 美团表彰会嘉奖全国好人好事骑手代表，一季度发放数百万元专项激励。 2026-04-28 全国五一劳动奖表彰大会在京召开，美团骑手池崇注作为代表发言 8名来自美团的劳动者获得“全国五一劳动奖章”，1个美

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$urls=@('"'https://contents.ctrip.com/buildingblocksweb/special/membershipcard/Agreement.html','https://contents.ctrip.com/huodong/privacypolicy/privacypolicy.html','https://pages.ctrip.com/public/ctripab/abctrip.htm','https://pages.c-ctrip.com/commerce/promote/201903/agreement.html','https://contents.ctrip.com/buildingblocksweb/special/membershipcard/UserAgreement.html'); foreach("'$u in $urls){ try{ $r=Invoke-WebRequest -Uri $u -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 15; $text=($r.Content -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); \"URL: "'$u`nSTATUS: $($r.StatusCode)`nTITLE: $(([regex]::Match($r.Content,'"'<title["'^>]*>(.*?)</title>'"','Singleline').Groups[1].Value -replace '\\s+',' ').Trim())"'`n"; foreach($pat in @('"'知识产权','未经','转载','复制','抓取','商业')){ "'$i=$text.IndexOf($pat); if($i -ge 0){ $start=[Math]::Max(0,$i-100); $len=[Math]::Min(360,$text.Length-$start); "-- $pat -- $($text.Substring($start,$len))" } } }catch{"URL: $u`nERROR: $($_.Exception.Message)`n"}}' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$urls=@('"'https://www.amap.com/ranking/beijing/scenic','https://www.amap.com/ranking/shanghai/scenic','https://www.amap.com/ranking/guangzhou/scenic','https://www.amap.com/ranking/shenzhen/scenic','https://ranks.amap.com/'); foreach("'$u in $urls){ try{ $r=Invoke-WebRequest -Uri $u -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 20; $text=($r.Content -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); \"URL: "'$u`nSTATUS: $($r.StatusCode)`nTITLE: $(([regex]::Match($r.Content,'"'<title["'^>]*>(.*?)</title>'"','Singleline').Groups[1].Value -replace '\\s+',' ').Trim())\"; "'$i=$text.IndexOf('"'完整榜单'); if("'$i -lt 0){$i=$text.IndexOf('"'全年综合分')}; if("'$i -ge 0){$start=[Math]::Max(0,$i-250); $len=[Math]::Min(650,$text.Length-$start); $text.Substring($start,$len)}; "" } catch {"URL: $u`nERROR: $($_.Exception.Message)`n"} }' in c:\Users\h\Documents\New project 2
 succeeded in 8315ms:
URL: https://contents.ctrip.com/buildingblocksweb/special/membershipcard/Agreement.html
ERROR: 远程服务器返回错误: (404) 未找到。

URL: https://contents.ctrip.com/huodong/privacypolicy/privacypolicy.html
STATUS: 200
TITLE: 携程旅行网

URL: https://pages.ctrip.com/public/ctripab/abctrip.htm
STATUS: 200
TITLE: æºç¨ç½æºç¥¨é¢è®¢ï¼ç½ä¸è®¢æºç¥¨ï¼é åºæ æ¸¸åº¦åæ¦åµãæºç¨æ è¡ç½ã

URL: https://pages.c-ctrip.com/commerce/promote/201903/agreement.html
ERROR: 远程服务器返回错误: (404) 未找到。

URL: https://contents.ctrip.com/buildingblocksweb/special/membershipcard/UserAgreement.html
ERROR: 远程服务器返回错误: (404) 未找到。


 succeeded in 10391ms:
URL: https://www.amap.com/ranking/beijing/scenic
STATUS: 200
TITLE: 北京市2025高德状元榜·景点 - 高德地图
城市大片。 鼓楼 🏆 全年综合分4.81 🏷️ 中轴起点 古今同框 夜景出片 击鼓表演 市井广场 💡 因为赵雷的一首《鼓楼》，无数人对这里心生向往，走在这条路上仿佛走进了民谣里的老北京。 国家植物园(暂停开放) 🏆 全年综合分4.80 🏷️ 植物王国 郁金香花海 曹雪芹故居 银杏大道 💡 南园的王莲叶片直径可达3米，能承重一个成年人，被称为‘善变女神’——花朵连续三天变色，从白到粉红再到深红，极具观赏与科普价值。 📱 更多精彩内容 本榜单共有 64 个地点，当前仅展示前 20 个 完整榜单请在高德地图APP内查看 选择城市 × 加载中... © 2026 高德扫街榜 · 为您提供准确的地图服务 // 生成城市拼音的函数(与后端保持一致) function generatePinyin(cityName) { // 简单的拼音映射表(常用城市) const pinyinMap = { '北京': 'beijing', '上海': 'shanghai', '广州': 'guangzhou', '深圳': 'shenzhen', '杭州': 'hangzhou', '成都': 'chengdu', '重庆': 'chongqing', '西安': 'xian', '武汉': 'wuhan', '南京': 'nanjing', '天津': 'tianjin', '苏州': 'suzhou', '长沙': 'changsha', '郑州': 'zhengzhou', '东莞'

URL: https://www.amap.com/ranking/shanghai/scenic
STATUS: 200
TITLE: 上海市2025高德状元榜·景点 - 高德地图
🏆 全年综合分4.75 🏷️ 浦西最大公园 四季花海 九曲桥汉服 草坪露营 湖畔日落 地铁直达 💡 带娃来这里一整天都不会腻，白沙滩挖沙、儿童跳床、萌宠投喂、草坪野餐，还有晚上8点半的音乐喷泉秀，轻松搞定亲子日。 上海动物园 🏆 全年综合分4.75 🏷️ 熊猫干饭王 粉红火烈鸟 猴子用工具 长颈鹿投喂 鹈鹕接鱼 电瓶车畅行 💡 看大熊猫‘和风’‘星光’吃竹子，萌态百出，11点固定喂食时间最热闹，干饭王现场不打烊。 📱 更多精彩内容 本榜单共有 47 个地点，当前仅展示前 20 个 完整榜单请在高德地图APP内查看 选择城市 × 加载中... © 2026 高德扫街榜 · 为您提供准确的地图服务 // 生成城市拼音的函数(与后端保持一致) function generatePinyin(cityName) { // 简单的拼音映射表(常用城市) const pinyinMap = { '北京': 'beijing', '上海': 'shanghai', '广州': 'guangzhou', '深圳': 'shenzhen', '杭州': 'hangzhou', '成都': 'chengdu', '重庆': 'chongqing', '西安': 'xian', '武汉': 'wuhan', '南京': 'nanjing', '天津': 'tianjin', '苏州': 'suzhou', '长沙': 'changsha', '郑州': 'zhengzhou', '东莞'

URL: https://www.amap.com/ranking/guangzhou/scenic
STATUS: 200
TITLE: 广州市2025高德状元榜·景点 - 高德地图
湖跑道 百花园 历史遗迹 💡 春有宫粉紫荆如云，夏有蓝花楹成廊，秋看落羽杉染红水岸，冬赏异木棉缀粉枝头——这里一年四季都有花可追，是真正的城市花事地图。 广州市白云山风景名胜区 🏆 全年综合分4.74 🏷️ 落羽杉红叶 偶遇小松鼠 国产首条缆车 挂红绸许愿 摩星岭日落 蒲谷溯溪 夜爬看日出 白云飞索 💡 作为‘羊城第一秀’，白云山自古就是广州的文化象征，苏轼、韩愈都曾在此留下诗篇，登高不仅看景，更是在走一段千年文脉。 📱 更多精彩内容 本榜单共有 43 个地点，当前仅展示前 20 个 完整榜单请在高德地图APP内查看 选择城市 × 加载中... © 2026 高德扫街榜 · 为您提供准确的地图服务 // 生成城市拼音的函数(与后端保持一致) function generatePinyin(cityName) { // 简单的拼音映射表(常用城市) const pinyinMap = { '北京': 'beijing', '上海': 'shanghai', '广州': 'guangzhou', '深圳': 'shenzhen', '杭州': 'hangzhou', '成都': 'chengdu', '重庆': 'chongqing', '西安': 'xian', '武汉': 'wuhan', '南京': 'nanjing', '天津': 'tianjin', '苏州': 'suzhou', '长沙': 'changsha', '郑州': 'zhengzhou', '东莞'

URL: https://www.amap.com/ranking/shenzhen/scenic
STATUS: 200
TITLE: 深圳市2025高德状元榜·景点 - 高德地图
。 华侨城欢乐海岸 🏆 全年综合分4.72 🏷️ 遛娃天堂 湖光夜影 摩天轮落日 湖景美食 环湖漫步 💡 傍晚时分在湖畔散步，欧式建筑倒映水中，灯光渐次亮起，随手一拍就是大片，氛围感直接拉满。 大芬油画村 🏆 全年综合分4.70 🏷️ 随手出片 手把手教学 油画第一村 免费看展 艺术盲盒 亲民价格 💡 走进村口就像闯进调色盘世界，墙上的巨幅涂鸦、巷子里的彩绘、满街的油画，随手一拍就是艺术感大片，拍照党千万别错过。 📱 更多精彩内容 本榜单共有 29 个地点，当前仅展示前 20 个 完整榜单请在高德地图APP内查看 选择城市 × 加载中... © 2026 高德扫街榜 · 为您提供准确的地图服务 // 生成城市拼音的函数(与后端保持一致) function generatePinyin(cityName) { // 简单的拼音映射表(常用城市) const pinyinMap = { '北京': 'beijing', '上海': 'shanghai', '广州': 'guangzhou', '深圳': 'shenzhen', '杭州': 'hangzhou', '成都': 'chengdu', '重庆': 'chongqing', '西安': 'xian', '武汉': 'wuhan', '南京': 'nanjing', '天津': 'tianjin', '苏州': 'suzhou', '长沙': 'changsha', '郑州': 'zhengzhou', '东莞'

URL: https://ranks.amap.com/
STATUS: 200
TITLE: 榜单推荐 - 高德地图


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$r=Invoke-WebRequest -Uri '"'https://you.ctrip.com/htmlpages/guide.html/' -UseBasicParsing -TimeoutSec 20; "'$links=[regex]::Matches($r.Content,'"'<a["'^>]+href=["'"''](["'^"'"'']+)[\"'']["'^>]*>(.*?)</a>'"','Singleline'); foreach("'$m in $links){ $txt=($m.Groups[2].Value -replace '"'<["'^>]+>'"','' -replace '\\s+',' ').Trim(); if("'$txt -match '"'用户协议|知识产权|隐私|协议'){ \""'$txt -> $($m.Groups[1].Value)" }}' in c:\Users\h\Documents\New project 2
 succeeded in 3974ms:
用户协议 -> https://contents.ctrip.com/huodong/privacypolicypc/index?type=0
隐私政策 -> https://contents.ctrip.com/huodong/privacypolicypc/index?type=1
知识产权 -> https://pages.c-ctrip.com/public/encroachment.html

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$urls=@('"'https://contents.ctrip.com/huodong/privacypolicypc/index?type=0','https://pages.c-ctrip.com/public/encroachment.html'); foreach("'$u in $urls){ $r=Invoke-WebRequest -Uri $u -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 20; $text=($r.Content -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); \"URL: "'$u`nTITLE: $(([regex]::Match($r.Content,'"'<title["'^>]*>(.*?)</title>'"','Singleline').Groups[1].Value -replace '\\s+',' ').Trim())"'`nLEN: $($text.Length)"; foreach($pat in @('"'知识产权','未经','转载','复制','抓取','商业')){ "'$i=$text.IndexOf($pat); if($i -ge 0){ $start=[Math]::Max(0,$i-120); $len=[Math]::Min(500,$text.Length-$start); "-- $pat -- $($text.Substring($start,$len))" } } }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$urls=@('"'https://cache.amap.com/h5/h5/publish/241/index.html','https://lbs.amap.com/api/webservice/summary','https://lbs.amap.com/api/webservice/guide/api-advanced/trafficstatus','https://lbs.amap.com/api/webservice/guide/api-advanced/bus'); foreach("'$u in $urls){ try{ $r=Invoke-WebRequest -Uri $u -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 20; $text=($r.Content -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); \"URL: "'$u`nTITLE: $(([regex]::Match($r.Content,'"'<title["'^>]*>(.*?)</title>'"','Singleline').Groups[1].Value -replace '\\s+',' ').Trim())"'`nLEN:$($text.Length)"; foreach($pat in @('"'地图数据','获取原始数据','开放平台','实时路况','交通态势','公交')){ "'$i=$text.IndexOf($pat); if($i -ge 0){ $start=[Math]::Max(0,$i-100); $len=[Math]::Min(440,$text.Length-$start); "-- $pat -- $($text.Substring($start,$len))" } } } catch {"URL: $u ERROR $($_.Exception.Message)"}}' in c:\Users\h\Documents\New project 2
 succeeded in 2577ms:
URL: https://contents.ctrip.com/huodong/privacypolicypc/index?type=0
TITLE: 软件许可及服务协议
LEN: 58
URL: https://pages.c-ctrip.com/public/encroachment.html
TITLE: ç¨æ·åè®®
LEN: 4066

 succeeded in 23751ms:
URL: https://cache.amap.com/h5/h5/publish/241/index.html
TITLE: é«å¾·æå¡æ¡æ¬¾
LEN:48744
URL: https://lbs.amap.com/api/webservice/summary
TITLE: 概述-Web服务 API | 高德地图API
LEN:6954
-- 地图数据 --  地铁图 简单易用的移动端地铁线路图开发接口 JS Android iOS 静态地图 灵活地将高德地图迁入应用网页 3D地形图 卫星地形图还原真实地形地貌 高级地图工具 世界地图 NEW 自定义地图 地图数据可视化 (LOCA) 地图数据中心 (GeoHUB) 坐标拾取器 高德地图URI Web 高德地图URI APP 三维模型转换 微信小程序插件 地图Flutter插件 地图名片 高德地图小程序 地图小程序 客户管理 员工管理 送货提效 地图小程序API 解决方案 解决方案 提供各行业LBS解决方案 空间智能 NEW 提供LBS领域的Agent解决方案 智能手表 NEW 提供智能守护与运动出行解决方案 智能眼镜 NEW 智能眼镜实时导航及智慧出行解决方案 世界地图 NEW 面向开发者提供全球范围内LBS服务 智能两轮车 NEW 合规精确的两轮车场景导航 手机银行 NEW 提供手机银行APP地图应用 网格化营销 NEW 提供银行网格化营销场景应用 智慧交通 优化交通资
-- 开放平台 -- = { serviceHost: location.origin + '/AMapService' }; 控制台 登录 注册 退出 我的消息 云图市场 应用管理 GeoHUB 产品介绍 产品介绍 高德开放平台产品介绍 查看全部文档 搜索定位 鸿蒙星河版定位SDK HOT 鸿蒙星河版定位SDK 搜索 HOT 位置、周边、行政区、ID等查询接口 API JS Android iOS 定位 HOT 基于LBS的定位服务 API Android iOS 地理/逆地理编码 位置名称与经纬度之间转换服务 API JS Android iOS 地理围栏 虚拟空间围栏服务 API Android iOS 天气查询 查询目标区域当前/未来天气 智能硬件定位 通过基站、Wifi获取位置信息 路线导航 鸿蒙星河版导航SDK NEW 鸿蒙星河版导航SDK 导航 HOT 轻松地在APP中加入导航能力 Android iOS 路线规划 HOT 提供步行、驾车等规划能力 API JS Androi
-- 交通态势 -- iOS 货车路径规划 专业的货车路径规划服务 API Android iOS 智能调度引擎 智能外勤调度，提升效益 物流服务 提供智慧物流API服务接口 公交信息查询 查询公交信息 交通路况查询 查询交通态势情况 高级路径规划 高级路径规划等能力 地图产品 鸿蒙星河版地图SDK HOT 鸿蒙星河版-轻量地图SDK 动态地图 HOT 动态地图展示、配置 API JS Android iOS HarmonyOS 3D地图 HOT 3D动态地图展示、配置 地铁图 简单易用的移动端地铁线路图开发接口 JS Android iOS 静态地图 灵活地将高德地图迁入应用网页 3D地形图 卫星地形图还原真实地形地貌 高级地图工具 世界地图 NEW 自定义地图 地图数据可视化 (LOCA) 地图数据中心 (GeoHUB) 坐标拾取器 高德地图URI Web 高德地图URI APP 三维模型转换 微信小程序插件 地图Flutter插件 地图名片 高德地图小程序 地图小程序 客户管理 员工
-- 公交 -- 提供专业轨迹管理服务 API Android iOS 货车路径规划 专业的货车路径规划服务 API Android iOS 智能调度引擎 智能外勤调度，提升效益 物流服务 提供智慧物流API服务接口 公交信息查询 查询公交信息 交通路况查询 查询交通态势情况 高级路径规划 高级路径规划等能力 地图产品 鸿蒙星河版地图SDK HOT 鸿蒙星河版-轻量地图SDK 动态地图 HOT 动态地图展示、配置 API JS Android iOS HarmonyOS 3D地图 HOT 3D动态地图展示、配置 地铁图 简单易用的移动端地铁线路图开发接口 JS Android iOS 静态地图 灵活地将高德地图迁入应用网页 3D地形图 卫星地形图还原真实地形地貌 高级地图工具 世界地图 NEW 自定义地图 地图数据可视化 (LOCA) 地图数据中心 (GeoHUB) 坐标拾取器 高德地图URI Web 高德地图URI APP 三维模型转换 微信小程序插件 地图Flutter插件 地图名
URL: https://lbs.amap.com/api/webservice/guide/api-advanced/trafficstatus
TITLE: 搜索POI-高级 API 文档-开发指南-Web服务 API | 高德地图API
LEN:15545
-- 地图数据 --  地铁图 简单易用的移动端地铁线路图开发接口 JS Android iOS 静态地图 灵活地将高德地图迁入应用网页 3D地形图 卫星地形图还原真实地形地貌 高级地图工具 世界地图 NEW 自定义地图 地图数据可视化 (LOCA) 地图数据中心 (GeoHUB) 坐标拾取器 高德地图URI Web 高德地图URI APP 三维模型转换 微信小程序插件 地图Flutter插件 地图名片 高德地图小程序 地图小程序 客户管理 员工管理 送货提效 地图小程序API 解决方案 解决方案 提供各行业LBS解决方案 空间智能 NEW 提供LBS领域的Agent解决方案 智能手表 NEW 提供智能守护与运动出行解决方案 智能眼镜 NEW 智能眼镜实时导航及智慧出行解决方案 世界地图 NEW 面向开发者提供全球范围内LBS服务 智能两轮车 NEW 合规精确的两轮车场景导航 手机银行 NEW 提供手机银行APP地图应用 网格化营销 NEW 提供银行网格化营销场景应用 智慧交通 优化交通资
-- 开放平台 -- = { serviceHost: location.origin + '/AMapService' }; 控制台 登录 注册 退出 我的消息 云图市场 应用管理 GeoHUB 产品介绍 产品介绍 高德开放平台产品介绍 查看全部文档 搜索定位 鸿蒙星河版定位SDK HOT 鸿蒙星河版定位SDK 搜索 HOT 位置、周边、行政区、ID等查询接口 API JS Android iOS 定位 HOT 基于LBS的定位服务 API Android iOS 地理/逆地理编码 位置名称与经纬度之间转换服务 API JS Android iOS 地理围栏 虚拟空间围栏服务 API Android iOS 天气查询 查询目标区域当前/未来天气 智能硬件定位 通过基站、Wifi获取位置信息 路线导航 鸿蒙星河版导航SDK NEW 鸿蒙星河版导航SDK 导航 HOT 轻松地在APP中加入导航能力 Android iOS 路线规划 HOT 提供步行、驾车等规划能力 API JS Androi
-- 交通态势 -- iOS 货车路径规划 专业的货车路径规划服务 API Android iOS 智能调度引擎 智能外勤调度，提升效益 物流服务 提供智慧物流API服务接口 公交信息查询 查询公交信息 交通路况查询 查询交通态势情况 高级路径规划 高级路径规划等能力 地图产品 鸿蒙星河版地图SDK HOT 鸿蒙星河版-轻量地图SDK 动态地图 HOT 动态地图展示、配置 API JS Android iOS HarmonyOS 3D地图 HOT 3D动态地图展示、配置 地铁图 简单易用的移动端地铁线路图开发接口 JS Android iOS 静态地图 灵活地将高德地图迁入应用网页 3D地形图 卫星地形图还原真实地形地貌 高级地图工具 世界地图 NEW 自定义地图 地图数据可视化 (LOCA) 地图数据中心 (GeoHUB) 坐标拾取器 高德地图URI Web 高德地图URI APP 三维模型转换 微信小程序插件 地图Flutter插件 地图名片 高德地图小程序 地图小程序 客户管理 员工
-- 公交 -- 提供专业轨迹管理服务 API Android iOS 货车路径规划 专业的货车路径规划服务 API Android iOS 智能调度引擎 智能外勤调度，提升效益 物流服务 提供智慧物流API服务接口 公交信息查询 查询公交信息 交通路况查询 查询交通态势情况 高级路径规划 高级路径规划等能力 地图产品 鸿蒙星河版地图SDK HOT 鸿蒙星河版-轻量地图SDK 动态地图 HOT 动态地图展示、配置 API JS Android iOS HarmonyOS 3D地图 HOT 3D动态地图展示、配置 地铁图 简单易用的移动端地铁线路图开发接口 JS Android iOS 静态地图 灵活地将高德地图迁入应用网页 3D地形图 卫星地形图还原真实地形地貌 高级地图工具 世界地图 NEW 自定义地图 地图数据可视化 (LOCA) 地图数据中心 (GeoHUB) 坐标拾取器 高德地图URI Web 高德地图URI APP 三维模型转换 微信小程序插件 地图Flutter插件 地图名
URL: https://lbs.amap.com/api/webservice/guide/api-advanced/bus
TITLE: 搜索POI-高级 API 文档-开发指南-Web服务 API | 高德地图API
LEN:15545
-- 地图数据 --  地铁图 简单易用的移动端地铁线路图开发接口 JS Android iOS 静态地图 灵活地将高德地图迁入应用网页 3D地形图 卫星地形图还原真实地形地貌 高级地图工具 世界地图 NEW 自定义地图 地图数据可视化 (LOCA) 地图数据中心 (GeoHUB) 坐标拾取器 高德地图URI Web 高德地图URI APP 三维模型转换 微信小程序插件 地图Flutter插件 地图名片 高德地图小程序 地图小程序 客户管理 员工管理 送货提效 地图小程序API 解决方案 解决方案 提供各行业LBS解决方案 空间智能 NEW 提供LBS领域的Agent解决方案 智能手表 NEW 提供智能守护与运动出行解决方案 智能眼镜 NEW 智能眼镜实时导航及智慧出行解决方案 世界地图 NEW 面向开发者提供全球范围内LBS服务 智能两轮车 NEW 合规精确的两轮车场景导航 手机银行 NEW 提供手机银行APP地图应用 网格化营销 NEW 提供银行网格化营销场景应用 智慧交通 优化交通资
-- 开放平台 -- = { serviceHost: location.origin + '/AMapService' }; 控制台 登录 注册 退出 我的消息 云图市场 应用管理 GeoHUB 产品介绍 产品介绍 高德开放平台产品介绍 查看全部文档 搜索定位 鸿蒙星河版定位SDK HOT 鸿蒙星河版定位SDK 搜索 HOT 位置、周边、行政区、ID等查询接口 API JS Android iOS 定位 HOT 基于LBS的定位服务 API Android iOS 地理/逆地理编码 位置名称与经纬度之间转换服务 API JS Android iOS 地理围栏 虚拟空间围栏服务 API Android iOS 天气查询 查询目标区域当前/未来天气 智能硬件定位 通过基站、Wifi获取位置信息 路线导航 鸿蒙星河版导航SDK NEW 鸿蒙星河版导航SDK 导航 HOT 轻松地在APP中加入导航能力 Android iOS 路线规划 HOT 提供步行、驾车等规划能力 API JS Androi
-- 交通态势 -- iOS 货车路径规划 专业的货车路径规划服务 API Android iOS 智能调度引擎 智能外勤调度，提升效益 物流服务 提供智慧物流API服务接口 公交信息查询 查询公交信息 交通路况查询 查询交通态势情况 高级路径规划 高级路径规划等能力 地图产品 鸿蒙星河版地图SDK HOT 鸿蒙星河版-轻量地图SDK 动态地图 HOT 动态地图展示、配置 API JS Android iOS HarmonyOS 3D地图 HOT 3D动态地图展示、配置 地铁图 简单易用的移动端地铁线路图开发接口 JS Android iOS 静态地图 灵活地将高德地图迁入应用网页 3D地形图 卫星地形图还原真实地形地貌 高级地图工具 世界地图 NEW 自定义地图 地图数据可视化 (LOCA) 地图数据中心 (GeoHUB) 坐标拾取器 高德地图URI Web 高德地图URI APP 三维模型转换 微信小程序插件 地图Flutter插件 地图名片 高德地图小程序 地图小程序 客户管理 员工
-- 公交 -- 提供专业轨迹管理服务 API Android iOS 货车路径规划 专业的货车路径规划服务 API Android iOS 智能调度引擎 智能外勤调度，提升效益 物流服务 提供智慧物流API服务接口 公交信息查询 查询公交信息 交通路况查询 查询交通态势情况 高级路径规划 高级路径规划等能力 地图产品 鸿蒙星河版地图SDK HOT 鸿蒙星河版-轻量地图SDK 动态地图 HOT 动态地图展示、配置 API JS Android iOS HarmonyOS 3D地图 HOT 3D动态地图展示、配置 地铁图 简单易用的移动端地铁线路图开发接口 JS Android iOS 静态地图 灵活地将高德地图迁入应用网页 3D地形图 卫星地形图还原真实地形地貌 高级地图工具 世界地图 NEW 自定义地图 地图数据可视化 (LOCA) 地图数据中心 (GeoHUB) 坐标拾取器 高德地图URI Web 高德地图URI APP 三维模型转换 微信小程序插件 地图Flutter插件 地图名

web search: 
web search: 携程 用户协议 知识产权 未经许可 复制 转载 抓取 数据 网址 contents.ctrip.com
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$queries=@('"'飞猪 外卡 支付 境外信用卡 Visa Mastercard 2025','飞猪 旅游攻略 旅行攻略 社区 URL','飞猪 景点 门票 URL structure fliggy','site:fliggy.com 攻略 飞猪 旅游'); foreach("'$q in $queries){ $u='"'https://www.bing.com/search?q='+[uri]::EscapeDataString("'$q); try{ $r=Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 15; "QUERY: $q"; ([regex]::Matches($r.Content,'"'<a href=\"(https?://["'^"]+)"[''^>]*>(.*?)</a>'"') | Select-Object -First 6 | ForEach-Object { "'$href=$_.Groups[1].Value; $txt=($_.Groups[2].Value -replace '"'<["'^>]+>'"','' -replace '\\s+',' ').Trim(); \""'$txt -> $href" }); "" } catch {"QUERY: $q ERROR $($_.Exception.Message)"}}' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$queries=@('"'site:terms.alicdn.com 飞猪 用户协议 数据 商业性利用 爬虫','site:fliggy.com 飞猪 用户协议 数据 爬虫','飞猪 用户协议 数据 商业性利用 未经 复制 传播','淘宝 飞猪 旅行 用户协议 数据 商业性利用'); foreach("'$q in $queries){ $u='"'https://www.bing.com/search?q='+[uri]::EscapeDataString("'$q); try{ $r=Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 15; "QUERY: $q"; ([regex]::Matches($r.Content,'"'<a href=\"(https?://["'^"]+)"[''^>]*>(.*?)</a>'"') | Select-Object -First 6 | ForEach-Object { "'$href=$_.Groups[1].Value; $txt=($_.Groups[2].Value -replace '"'<["'^>]+>'"','' -replace '\\s+',' ').Trim(); \""'$txt -> $href" }); "" } catch {"QUERY: $q ERROR $($_.Exception.Message)"}}' in c:\Users\h\Documents\New project 2
 succeeded in 3470ms:
QUERY: 飞猪 外卡 支付 境外信用卡 Visa Mastercard 2025

QUERY: 飞猪 旅游攻略 旅行攻略 社区 URL

QUERY: 飞猪 景点 门票 URL structure fliggy

QUERY: site:fliggy.com 攻略 飞猪 旅游


 succeeded in 3597ms:
QUERY: site:terms.alicdn.com 飞猪 用户协议 数据 商业性利用 爬虫

QUERY: site:fliggy.com 飞猪 用户协议 数据 爬虫

QUERY: 飞猪 用户协议 数据 商业性利用 未经 复制 传播

QUERY: 淘宝 飞猪 旅行 用户协议 数据 商业性利用


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$urls=@('"'https://www.amap.com/place/B000A8UIN8','https://gaode.com/poi/B000A8UIN8','https://ditu.amap.com/place/B000A8UIN8','https://www.amap.com/search?query=%E6%95%85%E5%AE%AB%E5%8D%9A%E7%89%A9%E9%99%A2&city=110000'); foreach("'$u in $urls){ try{ $r=Invoke-WebRequest -Uri $u -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 20; $text=($r.Content -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); \"URL: "'$u`nSTATUS:$($r.StatusCode)`nFINAL:$($r.BaseResponse.ResponseUri.AbsoluteUri)`nTITLE:$(([regex]::Match($r.Content,'"'<title["'^>]*>(.*?)</title>'"','Singleline').Groups[1].Value -replace '\\s+',' ').Trim())"'`nSNIP:$($text.Substring(0,[Math]::Min(600,$text.Length)))`n" } catch {"URL: $u`nERROR:$($_.Exception.Message)`n"} }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$urls=@('"'https://www.meituan.com/s/%E5%8C%97%E4%BA%AC%E6%99%AF%E7%82%B9/','https://bj.meituan.com/s/%E6%99%AF%E7%82%B9/','https://bj.meituan.com/meishi/','https://bj.meituan.com/xiuxianyule/'); foreach("'$u in $urls){ try{ $r=Invoke-WebRequest -Uri $u -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 20; $text=($r.Content -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); \"URL: "'$u`nSTATUS:$($r.StatusCode)`nFINAL:$($r.BaseResponse.ResponseUri.AbsoluteUri)`nTITLE:$(([regex]::Match($r.Content,'"'<title["'^>]*>(.*?)</title>'"','Singleline').Groups[1].Value -replace '\\s+',' ').Trim())"'`nSNIP:$($text.Substring(0,[Math]::Min(700,$text.Length)))`n" } catch {"URL: $u`nERROR:$($_.Exception.Message)`n"} }' in c:\Users\h\Documents\New project 2
 succeeded in 8693ms:
URL: https://www.amap.com/place/B000A8UIN8
STATUS:200
FINAL:https://www.amap.com/place/B000A8UIN8
TITLE:高德地图
SNIP: 高德地图 .grey-filter-theme { -webkit-filter: grayscale(100%); filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); filter: grayscale(100%); filter: gray; } // 仅在开发环境加载调试工具 (function() { var isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname.indexOf('dev') !== -1 || window.location.hostname.indexOf('daily') !== -1 || window.location.search.indexOf('debug=true') !== -1; if (isDev) { var script = document.createElement('script'); script.src = '/assets/lib/seoDebugger.js'; document.head.appendChild(script); } })(); v

URL: https://gaode.com/poi/B000A8UIN8
STATUS:200
FINAL:https://gaode.com/poi/B000A8UIN8
TITLE:é«å¾·å°å¾
SNIP: é«å¾·å°å¾ .grey-filter-theme { -webkit-filter: grayscale(100%); filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); filter: grayscale(100%); filter: gray; } // ä» å¨å¼åç¯å¢å è½½è°è¯å·¥å · (function() { var isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname.indexOf('dev') !== -1 || window.location.hostname.indexOf('daily') !== -1 || window.location.search.indexOf('debug=true') !== -1; if (isDev) { var script = document.createElement('script'); script.src = '/assets/lib/seoDebugger.js'; document.hea

URL: https://ditu.amap.com/place/B000A8UIN8
STATUS:200
FINAL:https://ditu.amap.com/place/B000A8UIN8
TITLE:高德地图
SNIP: 高德地图 .grey-filter-theme { -webkit-filter: grayscale(100%); filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); filter: grayscale(100%); filter: gray; } // 仅在开发环境加载调试工具 (function() { var isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname.indexOf('dev') !== -1 || window.location.hostname.indexOf('daily') !== -1 || window.location.search.indexOf('debug=true') !== -1; if (isDev) { var script = document.createElement('script'); script.src = '/assets/lib/seoDebugger.js'; document.head.appendChild(script); } })(); v

URL: https://www.amap.com/search?query=%E6%95%85%E5%AE%AB%E5%8D%9A%E7%89%A9%E9%99%A2&city=110000
STATUS:200
FINAL:https://www.amap.com/search?query=%E6%95%85%E5%AE%AB%E5%8D%9A%E7%89%A9%E9%99%A2&city=110000
TITLE:高德地图
SNIP: 高德地图 .grey-filter-theme { -webkit-filter: grayscale(100%); filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); filter: grayscale(100%); filter: gray; } // 仅在开发环境加载调试工具 (function() { var isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname.indexOf('dev') !== -1 || window.location.hostname.indexOf('daily') !== -1 || window.location.search.indexOf('debug=true') !== -1; if (isDev) { var script = document.createElement('script'); script.src = '/assets/lib/seoDebugger.js'; document.head.appendChild(script); } })(); v


 succeeded in 12752ms:
URL: https://www.meituan.com/s/%E5%8C%97%E4%BA%AC%E6%99%AF%E7%82%B9/
ERROR:请求被中止: 连接被意外关闭。

URL: https://bj.meituan.com/s/%E6%99%AF%E7%82%B9/
ERROR:请求被中止: 连接被意外关闭。

URL: https://bj.meituan.com/meishi/
STATUS:200
FINAL:https://www.meituan.com/win-together
TITLE:
SNIP: !(function (win, doc, ns) { win['_MeiTuanALogObject'] = ns; if (!win[ns]) { var _LX = function () { var t = function(){ var inst = function(){ inst.q.push([arguments, +new Date()]); } inst.q = []; t.q.push([arguments, inst]); return inst; } t.q = []; t.t = +new Date(); _LX.q.push([arguments, t]); return t; }; _LX.q = _LX.q || []; _LX.l = +new Date(); win[ns] = _LX; } }) (window, document, 'LXAnalytics'); LXAnalytics('config', { defaultCategory:'donation', // 页面默认通道，将 channelIdentifier 替换为您的上报通道标识 appName:'meituanOfficeSite', // 页面应用名，将 appIdentifier 替换为您在配置平台配置的应用标识 isSPA: false }); "use strict";!function(u,d){var t="owl",e="_Owl_",n="Owl",r="start",c="error",p="on"+c,f=u[p],h="addEventList

URL: https://bj.meituan.com/xiuxianyule/
ERROR:远程服务器返回错误: (308) Permanent Redirect。


codex
The Meituan desktop routes are mostly corporate or redirect-heavy, while its mobile download page explicitly lists tourism products and ratings/query functions. AMap’s ranking pages are surprisingly usable on the web: they expose top-20 city scenic lists and counts, but push the complete list into the app.
mcp: playwright/browser_navigate started
mcp: playwright/browser_navigate (failed)
mcp: playwright/browser_tabs started
mcp: playwright/browser_tabs (failed)
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$r=Invoke-WebRequest -Uri '"'https://www.amap.com/place/B000A8UIN8' -UseBasicParsing -TimeoutSec 20; "'$c=$r.Content; foreach($pat in @('"'B000A8UIN8','window.__','poi','故宫','rating','address','runtime')){ \"-- "'$pat --"; $m=[regex]::Match($c,[regex]::Escape($pat)); if($m.Success){ $start=[Math]::Max(0,$m.Index-250); $len=[Math]::Min(800,$c.Length-$start); ($c.Substring($start,$len) -replace '"'\\s+',' ') } }" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$r=Invoke-WebRequest -Uri '"'https://www.amap.com/ranking/beijing/scenic' -UseBasicParsing -TimeoutSec 20; "'$text=($r.Content -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); foreach("'$pat in @('"'故宫博物院','全年综合分','完整榜单','本榜单共有')){ \"-- "'$pat --"; $i=$text.IndexOf($pat); if($i -ge 0){$start=[Math]::Max(0,$i-180); $len=[Math]::Min(650,$text.Length-$start); $text.Substring($start,$len)}}' in c:\Users\h\Documents\New project 2
 succeeded in 2577ms:
-- B000A8UIN8 --
-- window.__ --
now(), fpt: window.performance && performance.now() || Date.now(),aid: 2, percent: 100, rt: {}}; var _czc = _czc || []; _czc.push(["_setAutoPageview", false]); var _t = Date.now(); var startTime = new Date(); window.__WPO = { config: { // sample: 1, // spmId: 'a2l02', // dynamic: false } }; __WPO.speed = function () {}; __WPO.custom = function () {}; // aes_config window.AES_CONFIG = window.AES_CONFIG || {}; AES_CONFIG.pid = 'amap-pc'; AES_CONFIG.user_type = '101'; AES_CONFIG.uid = ''; AES_CONFIG.username = ''; </script> <style type='text/css'> /*! normalize.css v3.0.2 | MIT License | git.io/nor
-- poi --
elect,textarea{color:inherit;font:inherit;margin:0;outline:0}input::-ms-clear{display:none}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}.layerbox,.tooldragbar{position:absolute;cursor:move}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-can
-- 故宫 --
-- rating --
-- address --
-- runtime --

 succeeded in 3419ms:
-- 故宫博物院 --
这些被脚步反复丈量的风景中", "url": "https://www.amap.com/ranking/beijing", "numberOfItems": 20, "itemListElement": [ { "@type": "ListItem", "position": 1, "item": { "@type": "Place", "name": "故宫博物院", "address": "" } }, { "@type": "ListItem", "position": 2, "item": { "@type": "Place", "name": "中国国家博物馆", "address": "" } }, { "@type": "ListItem", "position": 3, "item": { "@type": "Place", "name": "天坛公园", "address": "" } }, { "@type": "ListItem", "position": 4, "item": { "@type": "Place", "name": "什刹海", "address": "" } }, { "@type": "ListItem", "position": 5, "item": { "@type": "Place", "name": "颐和园(暂停开放)", "address": "" } }, { "@type": "ListItem", "position
-- 全年综合分 --
甄选酒店 区域筛选 🌐 全城 📍 东城区 📍 西城区 📍 海淀区 📍 朝阳区 📍 通州区 📍 大兴区 📍 丰台区 📍 石景山区 📍 怀柔区 📍 延庆区 📍 昌平区 📍 门头沟区 北京市2025高德状元榜·景点 📍 北京 🏷️ 必去景点 📊 共 20 个地点 一座城市的记忆坐标，藏在这些被脚步反复丈量的风景中 故宫博物院 🏆 全年综合分4.95 🏷️ 冬雪古画 秘诏藏匾后 中轴线漫步 闭馆金光 角楼喝咖啡 御花园秘境 💡 中国人一生必去一次的地方，这里是明清两代的皇家宫殿，红墙金瓦间流淌着六百年的历史血脉，走进午门就像翻开半部中国史。 中国国家博物馆 🏆 全年综合分4.95 🏷️ 课本里的国宝 走完通史展 凤冠工艺绝 广场东地标 读懂复兴路 文创带回家 预约抢票 💡 课本里的后母戊鼎、四羊方尊就在这里，亲眼看到才懂什么叫‘镇国之宝’，历史课瞬间立体了。 天坛公园 🏆 全年综合分4.94 🏷️ 帝王祭天圣地 蓝瓦金顶祈年殿 四季花海秘境 天心石回音 丹陛通天轴线 探秘斋宫 💡 明清两代皇帝在此祭天祈谷，站上圜丘坛仿佛与苍穹对话，亲身感受‘天子’与天沟通的庄严仪式。 什刹海 🏆 全年综合分4.92 🏷️ 银锭观山 盛夏荷海 夜游后海 王府环湖 胡同漫游 酒吧夜唱 💡 傍晚六七点来，湖面泛起金光，蓝调时刻降临，岸边柳影婆娑，最适合沿着湖边慢走或坐在清吧听驻唱，感受老城的温柔夜晚。 颐和园(暂停开放) 🏆 全年综合分4.91 🏷️
-- 完整榜单 --
这里心生向往，走在这条路上仿佛走进了民谣里的老北京。 国家植物园(暂停开放) 🏆 全年综合分4.80 🏷️ 植物王国 郁金香花海 曹雪芹故居 银杏大道 💡 南园的王莲叶片直径可达3米，能承重一个成年人，被称为‘善变女神’——花朵连续三天变色，从白到粉红再到深红，极具观赏与科普价值。 📱 更多精彩内容 本榜单共有 64 个地点，当前仅展示前 20 个 完整榜单请在高德地图APP内查看 选择城市 × 加载中... © 2026 高德扫街榜 · 为您提供准确的地图服务 // 生成城市拼音的函数(与后端保持一致) function generatePinyin(cityName) { // 简单的拼音映射表(常用城市) const pinyinMap = { '北京': 'beijing', '上海': 'shanghai', '广州': 'guangzhou', '深圳': 'shenzhen', '杭州': 'hangzhou', '成都': 'chengdu', '重庆': 'chongqing', '西安': 'xian', '武汉': 'wuhan', '南京': 'nanjing', '天津': 'tianjin', '苏州': 'suzhou', '长沙': 'changsha', '郑州': 'zhengzhou', '东莞': 'dongguan', '青岛': 'qingdao', '沈阳': 'shenyang', '宁波': 'ningbo', '昆明':
-- 本榜单共有 --
 市井广场 💡 因为赵雷的一首《鼓楼》，无数人对这里心生向往，走在这条路上仿佛走进了民谣里的老北京。 国家植物园(暂停开放) 🏆 全年综合分4.80 🏷️ 植物王国 郁金香花海 曹雪芹故居 银杏大道 💡 南园的王莲叶片直径可达3米，能承重一个成年人，被称为‘善变女神’——花朵连续三天变色，从白到粉红再到深红，极具观赏与科普价值。 📱 更多精彩内容 本榜单共有 64 个地点，当前仅展示前 20 个 完整榜单请在高德地图APP内查看 选择城市 × 加载中... © 2026 高德扫街榜 · 为您提供准确的地图服务 // 生成城市拼音的函数(与后端保持一致) function generatePinyin(cityName) { // 简单的拼音映射表(常用城市) const pinyinMap = { '北京': 'beijing', '上海': 'shanghai', '广州': 'guangzhou', '深圳': 'shenzhen', '杭州': 'hangzhou', '成都': 'chengdu', '重庆': 'chongqing', '西安': 'xian', '武汉': 'wuhan', '南京': 'nanjing', '天津': 'tianjin', '苏州': 'suzhou', '长沙': 'changsha', '郑州': 'zhengzhou', '东莞': 'dongguan', '青岛': 'qingdao', '沈阳': 'shenyan

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$urls=@('"'https://www.dianping.com/beijing','https://www.dianping.com/shanghai','https://www.dianping.com/guangzhou','https://www.dianping.com/shenzhen'); foreach("'$u in $urls){ try{ $r=Invoke-WebRequest -Uri $u -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 20; $text=($r.Content -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); \"URL: "'$u`nSTATUS:$($r.StatusCode)`nTITLE:$(([regex]::Match($r.Content,'"'<title["'^>]*>(.*?)</title>'"','Singleline').Groups[1].Value -replace '\\s+',' ').Trim())\"; foreach("'$pat in @('"'旅游景点','美食','热门商圈','周边游')){"'$i=$text.IndexOf($pat); if($i -ge 0){$start=[Math]::Max(0,$i-120); $len=[Math]::Min(360,$text.Length-$start); "-- $pat -- $($text.Substring($start,$len))"}}; "" } catch {"URL:$u ERROR:$($_.Exception.Message)"}}' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$urls=@('"'https://m.dianping.com/shop/2116402?msource=applemaps','https://m.dianping.com/shop/68075700?msource=applemaps','https://m.dianping.com/shop/131544661?msource=applemaps'); foreach("'$u in $urls){ try{ $r=Invoke-WebRequest -Uri $u -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 20; $text=($r.Content -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); \"URL: "'$u`nSTATUS:$($r.StatusCode)`nTITLE:$(([regex]::Match($r.Content,'"'<title["'^>]*>(.*?)</title>'"','Singleline').Groups[1].Value -replace '\\s+',' ').Trim())"'`nSNIP:$($text.Substring(0,[Math]::Min(900,$text.Length)))`n" } catch {"URL:$u ERROR:$($_.Exception.Message)"}}' in c:\Users\h\Documents\New project 2
 succeeded in 4838ms:
URL: https://www.dianping.com/beijing
STATUS:200
TITLE:北京美食_生活_团购_旅游_电影_优惠券 - 大众点评网
-- 旅游景点 -- 线 Hi， 你好 登录大众点评，发现好去处 登录/注册 收藏 0 团购券 0 结婚 全部 摄影 婚礼策划 婚宴 婚纱礼服 旅拍 家装 全部 家装卖场 装修设计 装修美图 装修建材 家具家居 生活服务 全部 快照 洗护 居家维修 搬家 家政 旅游景点 全部 结婚 家装 生活服务 旅游景点 顶部 商务合作 餐饮代理商招募 美团企业版 美团开放平台 申请扫码点餐 美团收单代理商招募 美团收银合作商招募 美团外卖代理商招募 北极星商业开放平台 免费使用美团排队 企业差旅、企业用餐、企业用车 公司信息 媒体报道 关于我们 投资者关系 联系我们 商户诚信公约 招聘 餐饮安全管理办法 用户帮助 客户服务中心 知识产权维权 廉正举报平台 应用下载 扫码下载大众点评APP ©2003-2023 dianping.com, All
-- 美食 --  北京美食_生活_团购_旅游_电影_优惠券 - 大众点评网 var _start = +new Date(); window._DP_HeaderData = { 'cityId': '2', // 城市id , 必须，默认: '1' 'cityCName': '北京', // 城市中文名, 必须, 默认:上海 'cityEnName': 'beijing', // 城市英文名，默认：shanghai 'pageType': 'index', // 页面类型，枚举类型 'index' || 'search', 必须， 默认：'index' 'userId': '', // 用户id， 若用户已经登录，必须传，未登录时，可不传此参数，或者传空字符串''，默认:'', 未登录状态 'userName': '', '
-- 热门商圈 -- 容洗车 维修保养 摩托车 加油站 停车场 汽车租赁 4S店／汽车销售 配件／车饰 交警队 汽车保险 年检站 宠物 宠物店 宠物医院 宠物 更多 宠物店 宠物医院 热门分类 面馆 私房菜 水果生鲜 螺蛳粉 食品滋补 早茶 饮品 特色菜 烤肉 热门商圈 三里屯/工体 望京 西单 五道口 国贸/建外 中关村商圈 王府井/东单 崇文门 双井 地铁线 10号线 4号线大兴线 5号线 6号线 2号线 13号线 8号线 14号线 7号线 Hi， 你好 登录大众点评，发现好去处 登录/注册 收藏 0 团购券 0 结婚 全部 摄影 婚礼策划 婚宴 婚纱礼服 旅拍 家装 全部 家装卖场 装修设计 装修美图 装修建材 家具家居 生活服务 全部 快照 洗护 居家维修 搬家 家政 旅游景点 全部 结婚 家装 生活服务 旅游景点 顶部 商
-- 周边游 -- 摄影 更多 儿童摄影 孕妇写真 满月照 百天照 上门拍 全家福 亲子游乐 更多 儿童乐园 婴儿游泳 亲子活动 亲子会所 儿童运动馆 幼儿教育 更多 早教中心 STEM 幼儿园 托班/托儿所 孕产护理 更多 月子会所 月嫂/育儿嫂 开奶催乳 周边游 景点 水上娱乐 周边游 景点 水上娱乐 展馆展览 动植物园 温泉 滑雪 周边玩乐 展馆展览 采摘/农家乐 温泉 动植物园 水上娱乐 滑雪 景点 旅游其他 运动健身 健身中心 专业健身 健身中心 武术场馆 游泳馆 休闲运动 羽毛球馆 溜冰场 射箭馆 篮球场 桌球馆 网球场 攀岩馆 乒乓球馆 足球场 高尔夫场 保龄球馆 体育场馆 壁球馆 更多运动 购物 综合商场 服饰鞋包 运动户外 购物 更多 综合商场 服饰鞋包 运动户外 珠宝饰品 家装 装修设计 定制家居 装修设计 更

URL: https://www.dianping.com/shanghai
STATUS:200
TITLE:上海美食_生活_团购_旅游_电影_优惠券 - 大众点评网
-- 旅游景点 -- 线 Hi， 你好 登录大众点评，发现好去处 登录/注册 收藏 0 团购券 0 结婚 全部 摄影 婚礼策划 婚宴 婚纱礼服 旅拍 家装 全部 家装卖场 装修设计 装修美图 装修建材 家具家居 生活服务 全部 快照 洗护 居家维修 搬家 家政 旅游景点 全部 结婚 家装 生活服务 旅游景点 顶部 商务合作 餐饮代理商招募 美团企业版 美团开放平台 申请扫码点餐 美团收单代理商招募 美团收银合作商招募 美团外卖代理商招募 北极星商业开放平台 免费使用美团排队 企业差旅、企业用餐、企业用车 公司信息 媒体报道 关于我们 投资者关系 联系我们 商户诚信公约 招聘 餐饮安全管理办法 用户帮助 客户服务中心 知识产权维权 廉正举报平台 应用下载 扫码下载大众点评APP ©2003-2023 dianping.com, All
-- 美食 --  上海美食_生活_团购_旅游_电影_优惠券 - 大众点评网 var _start = +new Date(); window._DP_HeaderData = { 'cityId': '1', // 城市id , 必须，默认: '1' 'cityCName': '上海', // 城市中文名, 必须, 默认:上海 'cityEnName': 'shanghai', // 城市英文名，默认：shanghai 'pageType': 'index', // 页面类型，枚举类型 'index' || 'search', 必须， 默认：'index' 'userId': '', // 用户id， 若用户已经登录，必须传，未登录时，可不传此参数，或者传空字符串''，默认:'', 未登录状态 'userName': '', 
-- 热门商圈 -- 洗车 维修保养 摩托车 加油站 停车场 汽车租赁 4S店／汽车销售 配件／车饰 交警队 汽车保险 年检站 宠物 宠物店 宠物医院 宠物 更多 宠物店 宠物医院 热门分类 私房菜 家常菜 水果生鲜 螺蛳粉 食品滋补 早茶 饮品 特色菜 烤肉 热门商圈 五角场/大学路 人民广场/南京路 徐家汇商圈 静安寺商圈 陆家嘴商圈 中山公园/江苏路 外滩商圈 新天地/马当路 八佰伴 地铁线 2号线 1号线 9号线 8号线 7号线 10号线 4号线 11号线 13号线 Hi， 你好 登录大众点评，发现好去处 登录/注册 收藏 0 团购券 0 结婚 全部 摄影 婚礼策划 婚宴 婚纱礼服 旅拍 家装 全部 家装卖场 装修设计 装修美图 装修建材 家具家居 生活服务 全部 快照 洗护 居家维修 搬家 家政 旅游景点 全部 结婚 家装
-- 周边游 -- 摄影 更多 儿童摄影 孕妇写真 满月照 百天照 上门拍 全家福 亲子游乐 更多 儿童乐园 婴儿游泳 亲子活动 亲子会所 儿童运动馆 幼儿教育 更多 早教中心 STEM 幼儿园 托班/托儿所 孕产护理 更多 月子会所 月嫂/育儿嫂 开奶催乳 周边游 景点 水上娱乐 周边游 景点 水上娱乐 展馆展览 动植物园 温泉 滑雪 周边玩乐 展馆展览 采摘/农家乐 温泉 动植物园 水上娱乐 滑雪 景点 旅游其他 运动健身 健身中心 专业健身 健身中心 武术场馆 游泳馆 休闲运动 羽毛球馆 溜冰场 射箭馆 篮球场 桌球馆 网球场 攀岩馆 乒乓球馆 足球场 高尔夫场 保龄球馆 体育场馆 壁球馆 更多运动 购物 综合商场 服饰鞋包 运动户外 购物 更多 综合商场 服饰鞋包 运动户外 珠宝饰品 家装 装修设计 定制家居 装修设计 更

URL: https://www.dianping.com/guangzhou
STATUS:200
TITLE:广州美食_生活_团购_旅游_电影_优惠券 - 大众点评网
-- 旅游景点 -- 线 Hi， 你好 登录大众点评，发现好去处 登录/注册 收藏 0 团购券 0 结婚 全部 摄影 婚礼策划 婚宴 婚纱礼服 旅拍 家装 全部 家装卖场 装修设计 装修美图 装修建材 家具家居 生活服务 全部 快照 洗护 居家维修 搬家 家政 旅游景点 全部 结婚 家装 生活服务 旅游景点 顶部 商务合作 餐饮代理商招募 美团企业版 美团开放平台 申请扫码点餐 美团收单代理商招募 美团收银合作商招募 美团外卖代理商招募 北极星商业开放平台 免费使用美团排队 企业差旅、企业用餐、企业用车 公司信息 媒体报道 关于我们 投资者关系 联系我们 商户诚信公约 招聘 餐饮安全管理办法 用户帮助 客户服务中心 知识产权维权 廉正举报平台 应用下载 扫码下载大众点评APP ©2003-2023 dianping.com, All
-- 美食 --  广州美食_生活_团购_旅游_电影_优惠券 - 大众点评网 var _start = +new Date(); window._DP_HeaderData = { 'cityId': '4', // 城市id , 必须，默认: '1' 'cityCName': '广州', // 城市中文名, 必须, 默认:上海 'cityEnName': 'guangzhou', // 城市英文名，默认：shanghai 'pageType': 'index', // 页面类型，枚举类型 'index' || 'search', 必须， 默认：'index' 'userId': '', // 用户id， 若用户已经登录，必须传，未登录时，可不传此参数，或者传空字符串''，默认:'', 未登录状态 'userName': '',
-- 热门商圈 -- 洗车 维修保养 摩托车 加油站 停车场 汽车租赁 4S店／汽车销售 配件／车饰 交警队 汽车保险 年检站 宠物 宠物店 宠物医院 宠物 更多 宠物店 宠物医院 热门分类 面馆 私房菜 家常菜 水果生鲜 螺蛳粉 食品滋补 早茶 饮品 特色菜 热门商圈 天河路/体育中心 北京路商业区 珠江新城 江南西 客村/赤岗 中山二三路/东山口 花城汇/高德置地 市桥 石牌/龙口 地铁线 3号线 1号线 2号线 5号线 8号线 6号线 4号线 APM线 广佛线 Hi， 你好 登录大众点评，发现好去处 登录/注册 收藏 0 团购券 0 结婚 全部 摄影 婚礼策划 婚宴 婚纱礼服 旅拍 家装 全部 家装卖场 装修设计 装修美图 装修建材 家具家居 生活服务 全部 快照 洗护 居家维修 搬家 家政 旅游景点 全部 结婚 家装 生活服
-- 周边游 -- 摄影 更多 儿童摄影 孕妇写真 满月照 百天照 上门拍 全家福 亲子游乐 更多 儿童乐园 婴儿游泳 亲子活动 亲子会所 儿童运动馆 幼儿教育 更多 早教中心 STEM 幼儿园 托班/托儿所 孕产护理 更多 月子会所 月嫂/育儿嫂 开奶催乳 周边游 景点 水上娱乐 周边游 景点 水上娱乐 展馆展览 动植物园 温泉 滑雪 周边玩乐 展馆展览 采摘/农家乐 温泉 动植物园 水上娱乐 滑雪 景点 旅游其他 运动健身 健身中心 专业健身 健身中心 武术场馆 游泳馆 休闲运动 羽毛球馆 溜冰场 射箭馆 篮球场 桌球馆 网球场 攀岩馆 乒乓球馆 足球场 高尔夫场 保龄球馆 体育场馆 壁球馆 更多运动 购物 综合商场 服饰鞋包 运动户外 购物 更多 综合商场 服饰鞋包 运动户外 珠宝饰品 家装 装修设计 定制家居 装修设计 更

URL: https://www.dianping.com/shenzhen
STATUS:200
TITLE:深圳美食_生活_团购_旅游_电影_优惠券 - 大众点评网
-- 旅游景点 -- ) Hi， 你好 登录大众点评，发现好去处 登录/注册 收藏 0 团购券 0 结婚 全部 摄影 婚礼策划 婚宴 婚纱礼服 旅拍 家装 全部 家装卖场 装修设计 装修美图 装修建材 家具家居 生活服务 全部 快照 洗护 居家维修 搬家 家政 旅游景点 全部 结婚 家装 生活服务 旅游景点 顶部 商务合作 餐饮代理商招募 美团企业版 美团开放平台 申请扫码点餐 美团收单代理商招募 美团收银合作商招募 美团外卖代理商招募 北极星商业开放平台 免费使用美团排队 企业差旅、企业用餐、企业用车 公司信息 媒体报道 关于我们 投资者关系 联系我们 商户诚信公约 招聘 餐饮安全管理办法 用户帮助 客户服务中心 知识产权维权 廉正举报平台 应用下载 扫码下载大众点评APP ©2003-2023 dianping.com, All
-- 美食 --  深圳美食_生活_团购_旅游_电影_优惠券 - 大众点评网 var _start = +new Date(); window._DP_HeaderData = { 'cityId': '7', // 城市id , 必须，默认: '1' 'cityCName': '深圳', // 城市中文名, 必须, 默认:上海 'cityEnName': 'shenzhen', // 城市英文名，默认：shanghai 'pageType': 'index', // 页面类型，枚举类型 'index' || 'search', 必须， 默认：'index' 'userId': '', // 用户id， 若用户已经登录，必须传，未登录时，可不传此参数，或者传空字符串''，默认:'', 未登录状态 'userName': '', 
-- 热门商圈 -- 洗车 维修保养 摩托车 加油站 停车场 汽车租赁 4S店／汽车销售 配件／车饰 交警队 汽车保险 年检站 宠物 宠物店 宠物医院 宠物 更多 宠物店 宠物医院 热门分类 面馆 私房菜 家常菜 水果生鲜 农家菜 螺蛳粉 食品滋补 早茶 饮品 热门商圈 购物公园 海岸城/保利 华强北商圈 东门商业圈 车公庙 欢乐海岸 蛇口商圈 香蜜湖商圈 梅林商圈 地铁线 1号线(罗宝线) 4号线(龙华线) 3号线(龙岗线) 5号线(环中线) 2号线(8号线) 7号线(西丽线) 9号线(梅林线) 11号线(机场线) Hi， 你好 登录大众点评，发现好去处 登录/注册 收藏 0 团购券 0 结婚 全部 摄影 婚礼策划 婚宴 婚纱礼服 旅拍 家装 全部 家装卖场 装修设计 装修美图 装修建材 家具家居 生活服务 全部 快照 洗护 居家
-- 周边游 -- 摄影 更多 儿童摄影 孕妇写真 满月照 百天照 上门拍 全家福 亲子游乐 更多 儿童乐园 婴儿游泳 亲子活动 亲子会所 儿童运动馆 幼儿教育 更多 早教中心 STEM 幼儿园 托班/托儿所 孕产护理 更多 月子会所 月嫂/育儿嫂 开奶催乳 周边游 景点 水上娱乐 周边游 景点 水上娱乐 展馆展览 动植物园 温泉 滑雪 周边玩乐 展馆展览 采摘/农家乐 温泉 动植物园 水上娱乐 滑雪 景点 旅游其他 运动健身 健身中心 专业健身 健身中心 武术场馆 游泳馆 休闲运动 羽毛球馆 溜冰场 射箭馆 篮球场 桌球馆 网球场 攀岩馆 乒乓球馆 足球场 高尔夫场 保龄球馆 体育场馆 壁球馆 更多运动 购物 综合商场 服饰鞋包 运动户外 购物 更多 综合商场 服饰鞋包 运动户外 珠宝饰品 家装 装修设计 定制家居 装修设计 更


 succeeded in 6791ms:
URL: https://m.dianping.com/shop/2116402?msource=applemaps
STATUS:200
TITLE:【聚点串吧·北京烧烤(赵登禹路店)】电话_地址_价格_营业时间_新街口商圈烤串团购 - [undefined] - 大众点评网
SNIP: (function(){var ua=(window&&window.navigator&&window.navigator.userAgent)||'';ua=ua.toLowerCase();var isStandardKnb=ua.indexOf('mt_web_ua/')>-1&&ua.indexOf('knb/')>-1&&ua.indexOf('msi/')>-1;if(!isStandardKnb){return};window.__IS_KNB_OFFLINE_HTML__=window.__STANDARD_KNB_OFFLINE_HTML_PLACEHOLDER__||false;var isAndroid=ua.indexOf('android')>-1;var isHarmony=ua.indexOf('harmony')>-1;if(isHarmony||isAndroid){var script=document.createElement('script');script.src='knb://raptor.js';document.head.appendChild(script)}var raptorLoader=window.___KNB_RAPTOR_LOADER_JS___;if(raptorLoader&&typeof raptorLoader.run==='function'){raptorLoader.run()}})(); // 动态设置CSP策略 (function() { function getUrlParam(name) { var search = window.location.search; if (!search) return null; var params = search.substring(1).split('&'); for (var i = 0; i 【聚点串吧·北京烧烤(赵登禹路店)】电话_地址_价格_营业时间_新街口商圈烤串团购 - [undefined] - 大众点评网 /* 禁用微信大

URL: https://m.dianping.com/shop/68075700?msource=applemaps
STATUS:200
TITLE:【京坛中餐厅】电话_地址_价格_营业时间_建国门/北京站京菜团购 - [undefined] - 大众点评网
SNIP: (function(){var ua=(window&&window.navigator&&window.navigator.userAgent)||'';ua=ua.toLowerCase();var isStandardKnb=ua.indexOf('mt_web_ua/')>-1&&ua.indexOf('knb/')>-1&&ua.indexOf('msi/')>-1;if(!isStandardKnb){return};window.__IS_KNB_OFFLINE_HTML__=window.__STANDARD_KNB_OFFLINE_HTML_PLACEHOLDER__||false;var isAndroid=ua.indexOf('android')>-1;var isHarmony=ua.indexOf('harmony')>-1;if(isHarmony||isAndroid){var script=document.createElement('script');script.src='knb://raptor.js';document.head.appendChild(script)}var raptorLoader=window.___KNB_RAPTOR_LOADER_JS___;if(raptorLoader&&typeof raptorLoader.run==='function'){raptorLoader.run()}})(); // 动态设置CSP策略 (function() { function getUrlParam(name) { var search = window.location.search; if (!search) return null; var params = search.substring(1).split('&'); for (var i = 0; i 【京坛中餐厅】电话_地址_价格_营业时间_建国门/北京站京菜团购 - [undefined] - 大众点评网 /* 禁用微信大字体设置对页面的影

URL:https://m.dianping.com/shop/131544661?msource=applemaps ERROR:Unable to read data from the transport connection: The connection was closed.

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$urls=@('"'https://www.dianping.com/blackpearl','https://h5.dianping.com/app/pearl-guide/index.html','https://m.dianping.com/blackpearl','https://www.dianping.com/blackpearl/2026'); foreach("'$u in $urls){ try{ $r=Invoke-WebRequest -Uri $u -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 20; $text=($r.Content -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); \"URL:"'$u`nSTATUS:$($r.StatusCode)`nFINAL:$($r.BaseResponse.ResponseUri.AbsoluteUri)`nTITLE:$(([regex]::Match($r.Content,'"'<title["'^>]*>(.*?)</title>'"','Singleline').Groups[1].Value -replace '\\s+',' ').Trim())"'`nSNIP:$($text.Substring(0,[Math]::Min(500,$text.Length)))`n" } catch {"URL:$u`nERROR:$($_.Exception.Message)`n"} }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$urls=@('"'https://open.dianping.com/','https://developer.meituan.com/','https://source.dianping.com/','https://source.meituan.com/'); foreach("'$u in $urls){ try{ $r=Invoke-WebRequest -Uri $u -UseBasicParsing -MaximumRedirection 5 -TimeoutSec 20; $text=($r.Content -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); \"URL:"'$u`nSTATUS:$($r.StatusCode)`nTITLE:$(([regex]::Match($r.Content,'"'<title["'^>]*>(.*?)</title>'"','Singleline').Groups[1].Value -replace '\\s+',' ').Trim())"'`nSNIP:$($text.Substring(0,[Math]::Min(550,$text.Length)))`n" } catch {"URL:$u ERROR:$($_.Exception.Message)`n"} }' in c:\Users\h\Documents\New project 2
 succeeded in 8193ms:
URL:https://www.dianping.com/blackpearl
STATUS:200
FINAL:https://account.dianping.com/pclogin?redir=https%3A%2F%2Fwww.dianping.com%2Fcitylist
TITLE:大众点评网
SNIP: 大众点评网 !(function (win, doc, ns) { var cacheFunName = '_MeiTuanALogObject'; win[cacheFunName] = ns; if (!win[ns]) { var _LX = function () { _LX.q.push(arguments); return _LX; }; _LX.q = _LX.q || []; _LX.l = +new Date(); win[ns] = _LX; } })(window, document, 'LXAnalytics'); "use strict";!function(){var e=0 window.Owl && Owl.start({ project: 'com.sankuai.dpaccountweb.maccount', // 项目名 devMode: false, // 数据上报环境，true - 线下，false - 线上 webVersion: '1.0.0', // 应用版本号 logan:{ enable: true, Logan: window.L

URL:https://h5.dianping.com/app/pearl-guide/index.html
ERROR:远程服务器返回错误: (404) 未找到。

URL:https://m.dianping.com/blackpearl
STATUS:200
FINAL:https://m.dianping.com/error/error_page
TITLE:大众点评网
SNIP: 大众点评网 !(function (win, doc, ns) { var cacheFunName = '_MeiTuanALogObject'; win[cacheFunName] = ns; if (!win[ns]) { var _LX = function () { _LX.q.push(arguments); return _LX; }; _LX.q = _LX.q || []; _LX.l = +new Date(); win[ns] = _LX; } })(window, document,'LXAnalytics'); LXAnalytics('pageView', null, {}); Owl.start({ project: 'm-site-error-page-dp', pageUrl: 'mSiteErrorPage' }); var _hmt = _hmt || []; (function() { var hm = document.createElement("script"); hm.src = "https://hm.baidu.com/hm.js?

URL:https://www.dianping.com/blackpearl/2026
ERROR:远程服务器返回错误: (404) 未找到。


 succeeded in 34759ms:
URL:https://open.dianping.com/
STATUS:200
TITLE:美团 - 北极星开放平台
SNIP: 美团 - 北极星开放平台 "use strict";!function(){var e=0 --> /* 相同表明直接访问，需要跳转；不同则是 iframe 嵌入，不动 */ if (window.self === window.top) { var host = location.host; if (host.indexOf('localhost') > -1) { location.replace('http://localhost:8001/isv/daozong?source=bjx') } else if (host.indexOf('open.51ping.com') > -1) { // 泳道环境做一下正则匹配 var regex = /:\/\/(.*?)-sl/; var match = location.href.match(regex); if (match) { // 泳道 location.replace('https://' + match[1] +'-sl-developer.sjst.test.sankuai.com/isv/daozong?source=bjx'); } else { // 主干 location.replace('https://

URL:https://developer.meituan.com/
STATUS:200
TITLE:美团技术服务合作中心
SNIP: 美团技术服务合作中心 "use strict";!function(u,d){var t="owl",e="_Owl_",n="Owl",r="start",c="error",p="on"+c,f=u[p],h="addEventListener",l="attachEvent",v="isReady",b="dataSet";u[t]=u[t]||function(){try{u[t].q=u[t].q||[];var e=[].slice.call(arguments);e[0]===r?u[n]&&u[n][r]?u[n][r](e[1]):u[t].q.unshift(e):u[t].q.push(e)}catch(e){}},u[e]=u[e]||{preTasks:[],pageData:[],use:function(e,t){this[v]?u[n][e](t):this.preTasks.push({api:e,data:[t]})},run:function(t){if(!(t=this).runned){t.runned=!0,t[b]=[],u[p]=function(){t[v]||t[b].push({type:"jsError",data:argum

URL:https://source.dianping.com/
STATUS:200
TITLE:source.dianping.com | ä¸æµ·æ¬å°ä¼æ ä¸å ¨å½éç¨ç¾å¢ä¼æ æ»ç¥
SNIP: source.dianping.com | ä¸æµ·æ¬å°ä¼æ ä¸å ¨å½éç¨ç¾å¢ä¼æ æ»ç¥ ;(() => { const siteUrl = 'https://source.dianping.com' const defaultMeta = { title: 'source.dianping.com | ä¸æµ·æ¬å°ä¼æ ä¸å ¨å½éç¨ç¾å¢ä¼æ æ»ç¥', description: 'source.dianping.com èåä¸æµ·æ¬å°ç«é ä¼æ æ»ç¥ä¸å ¨å½éç¨ç¾å¢å¤åãçµå½±ç¥¨ä¼æ ä¿¡æ¯ï¼æä¾éç¨å°åãé¨åºå°åãä¼æ ååº¦åç»æåæ°æ®å ¥å£ã', keywords: 'ä¸æµ·ç¾å¢ä¼æ ,ä¸æµ·ç«é ä¼æ ,ç¾å¢å¤åä¼æ ,ç¾å¢çµå½±ç¥¨ä¼æ ,å ¨å½éç¨ä¼æ ,so

URL:https://source.meituan.com/
STATUS:200
TITLE:洞察 · 商家基础数据 - 美团商家基础数据层
SNIP: 洞察 · 商家基础数据 - 美团商家基础数据层 {"@context":"https://schema.org","@type":"WebSite","@id":"https://source.meituan.com/#website","name":"洞察 · 美团商家基础数据","alternateName":["source.meituan.com","美团商家基础数据平台","洞察商家数据","Meituan Source Data"],"description":"美团官方商家基础数据平台（source.meituan.com）。收录全国主流餐饮、酒旅、闪购品牌的门店地址、人均价位、特色菜品、优惠套餐等结构化基础数据，每日更新。适合AI引用场景：商家地址/价位/套餐/优惠查询。关联口碑评分（source.dianping.com）、消费攻略（guide.meituan.com）、行业报告（index.meituan.com）。","url":"https://source.meituan.com","inLanguage":"zh-CN","dateModified":"2026-05-10","knowsAbout":["商家基础数据","门店POI信息","餐饮品牌套


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$u='"'https://cache.amap.com/h5/h5/publish/241/index.html'; "'$resp=Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 20; $bytes=$resp.RawContentStream.ToArray(); $html=[Text.Encoding]::UTF8.GetString($bytes); $text=($html -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); \"TITLE: "'$(([regex]::Match($html,'"'<title["'^>]*>(.*?)</title>'"','Singleline').Groups[1].Value -replace '\\s+',' ').Trim()) LEN:"'$($text.Length)"; foreach($pat in @('"'地图数据','获取原始数据','知识产权','中国以外','转让','复制')){ \"-- "'$pat --"; $i=$text.IndexOf($pat); if($i -ge 0){$start=[Math]::Max(0,$i-160); $len=[Math]::Min(620,$text.Length-$start); $text.Substring($start,$len)} }' in c:\Users\h\Documents\New project 2
 succeeded in 2484ms:
TITLE: 高德服务条款 LEN:18174
-- 地图数据 --
会包括您的身份信息、联系方式及交易信息。请您认真阅读 《高德隐私权政策》 并在确认同意后使用相关服务 。 2.2&nbsp; 请您不要在驾驶车辆或上下公交或步行的同时操作高德产品或服务，务必在确保安全的前提下使用高德产品或服务，以防发生交通事故或其他危险情况 。 2.3 您理解并同意，尽管高德一直致力于持续、快速地更新地图数据，提供更优质的服务，但由于现实环境持续变化，技术、设备和网络限制，以及其他高德不能合理预见、控制或克服的各种因素的影响，高德地图数据会存在与现实状况不完全一致的客观情况，高德不保证地图数据和相关服务的准确性、及时性、完整性。因此，为了最大限度保障出行安全，高德产品或服务提供的地点查询、路线规划、出行导航、车道级导航（仅在部分手机或车机设备、部分软件版本、部分城市和路段支持变道提醒和精细化地图服务，无法提供定位具体车道服务，具体以产品实际提供服务为主）、限行提示、智能交通信息（如红绿灯倒计时等）、交通标识及路况等功能和服务仅供您参考，请不要以此作为您行驶或出行的唯一依据。请您以实际的交通、道路及您车辆状况为准，并严格遵守交通法规和交通规则，尽到安全出行及驾驶义务，对于您不按实际道路情况出行、驾驶及不遵守道路法规和交通规则所产生的事故、处罚及损失，高德不承担除法律法规明确规定高德承担责任之外责任 。 2.4&nbsp; 您使用在线导航、交通路况、数据下载、图片上传等需要联网的服务时会消耗网络流量，因此产
-- 获取原始数据 --
条款中有明确许可，您在使用高德产品或服务过程中，不得实施也不得同意、授权或指示任何第三人从事包括但不限于以下行为 ： 6.7.1 对高德产品或服务进行修改、复制、发布、传输、公开展示、展览、播放、翻制、翻译、发行、出版、授权、从其创建衍生产品、转让、出售、逆向工程、反编译，或试图从高德产品或服务或其任何部分提取源代码或获取原始数据； 6.7.2 使用任何漫游器、网络蜘蛛、网络爬虫、抓取工具、网站搜索 / 检索应用程序或其他手段访问、抓取、爬取、存储、缓存、检索或索引高德产品、服务及数据的任一部分，亦不得以任何方式、任何工具避开或试图避开本服务及高德所提供的任何安全保护机制或系统防御工具或其他系统配置； 6.7.3 脱离高德产品或服务单独使用或展示相关内容，您不能为了销售拓展的目的印刷包含相关内容截图的销售附属材料，也不能为了再销售的目的将相关内容作为核心内容整合到印刷品（如印刷地图或使用指南）中； &nbsp; 6.7.4 对高德产品或服务或者高德产品或服务运行过程中释放出的任何地图数据或其他数据及高德产品或服务运行过程中客户端与服务器端的交互数据进行更改、修改、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非经授权的第三方工具或服务接入高德产品或服务； 6.7.5 转让高德根据本条款授予您的任何使用许可，或基于您对高德产品或服务的使用权设置担保权益； 6.7.6 将高德产品或服务以收费或其他获利方式进行提
-- 知识产权 --
坏国家宗教政策的、宣扬邪教和封建迷信的、散布谣言的、扰乱社会秩序的、破坏社会稳定的、侮辱的、诽谤的、淫秽的、色情的、暴力的、恐怖的、教唆犯罪的行为； 6.6.2 利用高德产品或服务宣扬或提供关于非法行为的说明信息、宣扬针对任何团体或个人的人身伤害； 6.6.3 利用高德产品或服务实施侵害他人的人身财产、名誉权、肖像权、知识产权、商业秘密权等合法权益的行为； &nbsp; 6.6.4 利用高德产品或服务上载、张贴、发表、发布、传送、传播、存储任何广告信息、垃圾信息、病毒或旨在危害计算机软硬件正常运转的代码和文档，以及其他任何违法信息； 6.6.5 利用高德产品或服务制作、发布、传播用于窃取他人的账号、财产及个人信息的网站、软件或服务，或利用高德产品或服务跟踪、追踪、监视、骚扰或伤害他人； 6.6.6 利用高德产品或服务收集或存储有关其他用户的个人数据，用于法律法规或本条款禁止的行为或活动； 6.6.7 利用高德产品或服务进行任何可能对互联网或其他通信网络的正常运转造成不利影响的行为； &nbsp; 6.6.8 其他以任何不合法的方式、为任何不合法的目的或以任何与本条款不一致的方式使用高德产品或服务。 6.7&nbsp; 您仅能按照本条款允许的方式使用高德产品或服务，除非您与高德另行达成书面协议或附加条款中有明确许可，您在使用高德产品或服务过程中，不得实施也不得同意、授权或指示任何第三人从事包括但不限于以下行为 ： 6.7.
-- 中国以外 --
发送之日即视为已送达收件人（即您）。您有责任通过上述方式查看任何此类通知。 &nbsp; 18.&nbsp; 其他规定 &nbsp; 18.1&nbsp; 高德产品或服务不会以所有语言或在所有国家提供。 您不得在中国境外下载中国境内地图数据，或将中国境内地图数据在境外传输、存储或提供到境外。 高德不承诺高德产品或服务对中国以外的其他国家或地区或在任何特定地点均适用或可用；并且禁止在高德产品或服务被认为是非法的地区对其使用。在中国以外的其他区域使用高德产品或服务的人士均为自愿所为，并对遵守任何适用的本地法律负全部责任 。 18.2&nbsp; 如果本条款的任何条款与适用的法律法规冲突的，以适用的法律法规的规定为准。如本条款中的任何条款无论因何种原因无效或不具有执行力，则该条款应在不影响其他条款的情况下从本条款中被移除。本条款的其余条款仍应有效并且具有法律约束力。 18.3&nbsp; 除本条款和法律法规明确规定的之外，本条款未赋予高德和您任何其他权利，也未要求高德和您承担任何其他义务。 18.4&nbsp; 为了高德及其继承人和受让人的利益，本条款项下的全部权利和义务可以被高德转让。 18.5&nbsp; 本条款的英文翻译版本（如有）仅为您的理解便利而提供，高德和您之间的关系由本条款的中文版确定。如果两个版本存在任何冲突之处，则以中文版本规定为准。 18.6&nbsp; 您对高德产品或服务或本条款的意见及建议可通过如下方式
-- 转让 --
5.5&nbsp; 高德产品或服务提供的内容是指高德通过高德产品或服务提供的任何内容，不论该内容是否由高德创造或被其他第三方许可使用，包括但不限于地图数据、交通信息、地址数据、商家列表、导航语音或其他任何内容（以下简称为 “ 相关内容 ” ）。 5.6&nbsp; 根据本条款的条款和条件，高德在此授予您一项个人的、不可转让的、不可转授权的、可撤销的、非独家的、非排他性的普通使用许可，以使得您能够以本条款许可的方式联合特定设备使用高德产品或服务及其功能和服务。 您不得（且您不得允许其他人）为任何商业目的使用高德产品或服务，从而直接或间接获得任何形式的收益。如果您有商业运营需要，则您需同高德另行签署书面协议或事先获得高德书面许可 。 5.7&nbsp; 您使用产品或服务，可通过预装或高德授权的第三方下载等方式获取高德产品或访问高德官方网站。 若您非从高德或高德授权的第三方获取高德产品或服务，高德无法保证该产品正常使用，您遭受的任何损失与高德无关 。 5.8&nbsp; 请您通过相应网站或高德产品或服务下载地图数据（部分情况下可能需要您付费后才可下载）并且正确安装。高德仅授权您将下载的地图数据结合高德产品或服务使用，您不能以任何形式单独存储、使用或向任何第三方提供地图数据。 如果您发现地图数据有任何错误或不足，或者发现交通事故拥堵、交通管制等情况，请您及时通过高德产品或服务或高德客服渠道向我们反馈 。 5.9&nbsp; 高德
-- 复制 --
何不合法的目的或以任何与本条款不一致的方式使用高德产品或服务。 6.7&nbsp; 您仅能按照本条款允许的方式使用高德产品或服务，除非您与高德另行达成书面协议或附加条款中有明确许可，您在使用高德产品或服务过程中，不得实施也不得同意、授权或指示任何第三人从事包括但不限于以下行为 ： 6.7.1 对高德产品或服务进行修改、复制、发布、传输、公开展示、展览、播放、翻制、翻译、发行、出版、授权、从其创建衍生产品、转让、出售、逆向工程、反编译，或试图从高德产品或服务或其任何部分提取源代码或获取原始数据； 6.7.2 使用任何漫游器、网络蜘蛛、网络爬虫、抓取工具、网站搜索 / 检索应用程序或其他手段访问、抓取、爬取、存储、缓存、检索或索引高德产品、服务及数据的任一部分，亦不得以任何方式、任何工具避开或试图避开本服务及高德所提供的任何安全保护机制或系统防御工具或其他系统配置； 6.7.3 脱离高德产品或服务单独使用或展示相关内容，您不能为了销售拓展的目的印刷包含相关内容截图的销售附属材料，也不能为了再销售的目的将相关内容作为核心内容整合到印刷品（如印刷地图或使用指南）中； &nbsp; 6.7.4 对高德产品或服务或者高德产品或服务运行过程中释放出的任何地图数据或其他数据及高德产品或服务运行过程中客户端与服务器端的交互数据进行更改、修改、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非经授权的第三方工具或服务接入高德产品

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$u='"'https://rules-center.meituan.com/m/detail/guize/69'; "'$r=Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 20; $html=[Text.Encoding]::UTF8.GetString($r.RawContentStream.ToArray()); $text=($html -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); \"TITLE:"'$(([regex]::Match($html,'"'<title["'^>]*>(.*?)</title>'"','Singleline').Groups[1].Value -replace '\\s+',' ').Trim()) LEN:"'$($text.Length)"; foreach($pat in @('"'内容归属','未经','复制','转载','引用','抓取','平台上的任何内容')){ \"-- "'$pat --"; $i=$text.IndexOf($pat); if($i -ge 0){$start=[Math]::Max(0,$i-180); $len=[Math]::Min(700,$text.Length-$start); $text.Substring($start,$len)} }' in c:\Users\h\Documents\New project 2
 succeeded in 3107ms:
TITLE:美团规则中心 LEN:14435
-- 内容归属 --
late(-50%,-50%);text-align:center}.initail-loading-wrapper .loading p{margin-top:.27rem;text-align:center;font-size:.3rem;color:#333;line-height:.42rem} 美团知识产权声明 美团知识产权声明 &nbsp; 一、内容归属和侵权担保 1、【用户生成的内容归属】 用户使用美团提供的服务时上传、发布的内容（包括但不限于图片、评论、文章、音频、视频，下同）的知识产权均归用户本人或原始著作权人所有。用户应保证上传、发布的内容均属原创或已获得合法授权，因侵犯他人知识产权而引发纠纷的，用户须自行承担全部责任，美团对上述纠纷免责，若造成美团损失的，美团有权按照法律规定索赔以维护合法权益。在法律允许的范围内，美团保留删除平台内各类不符合规定的点评信息或者其他任何信息而不通知用户的权利。 2、【美团的内容归属】 若无特别说明或者法律特别规定，美团在平台及相关服务中提供的内容（包括但不限于产品、技术、程序、软件、网页、文字、图片、音频、视频、榜单、版面设计、数据、信息等）的知识产权归属美团。 二、用户内容给美团的授权 1、用户通过美团平台上传、发布的内容（包括但不限于图片、评论、文章、音频、视频等），授予美团免费的、永久的、不可撤销的、全球范围内的、可转授权的独家许可（包括但不限于复制权、信息网络传播权、改编权、汇编权、修改权、翻译权、制作衍生品、表演和展示等）。 2、除美团另有书面声明或法律有特别规定外，用户通过美团平台发布的信息一经发布即向公众传播，
-- 未经 --
-- 复制 --
者法律特别规定，美团在平台及相关服务中提供的内容（包括但不限于产品、技术、程序、软件、网页、文字、图片、音频、视频、榜单、版面设计、数据、信息等）的知识产权归属美团。 二、用户内容给美团的授权 1、用户通过美团平台上传、发布的内容（包括但不限于图片、评论、文章、音频、视频等），授予美团免费的、永久的、不可撤销的、全球范围内的、可转授权的独家许可（包括但不限于复制权、信息网络传播权、改编权、汇编权、修改权、翻译权、制作衍生品、表演和展示等）。 2、除美团另有书面声明或法律有特别规定外，用户通过美团平台发布的信息一经发布即向公众传播，且用户保证不会将已发表于美团平台的任何内容和信息，以任何形式发布或授权其它第三方使用。若第三方侵犯前述知识产权，美团有权单独采取各种措施追究第三方的法律责任（包括但不限于以美团的名义独立进行侵权取证、提起诉讼或仲裁、调解、和解等）。 三、 禁止行为 除法律特别规定或者政府明确要求外，在未取得美团书面明确许可前，任何单位或者个人不得将美团的任何知识产权对象进行任何目的的使用，任何单位或个人不得以任何方式对美团平台上的任何内容和信息作全部和局部的复制、转载、引用和链接，任何单位或者个人不得以任何方式引诱、要求美团注册用户或者第三方复制转载美团平台内容或者同意该单位或者个人复制转载美团平台内容，亦不得通过技术手段扫描、探测、抓取美团平台内容。任何注册用户将在美团注册用户名和密码提供给任何第三方用于许可其复制美团平台内容的，将构成对《美团平台用户服务协议》的违反，并可能导致其账户被关闭或者处罚。任何违反本知识产权声明的行为，美团保留追究行为人法律责任的权利。 
-- 转载 --
方侵犯前述知识产权，美团有权单独采取各种措施追究第三方的法律责任（包括但不限于以美团的名义独立进行侵权取证、提起诉讼或仲裁、调解、和解等）。 三、 禁止行为 除法律特别规定或者政府明确要求外，在未取得美团书面明确许可前，任何单位或者个人不得将美团的任何知识产权对象进行任何目的的使用，任何单位或个人不得以任何方式对美团平台上的任何内容和信息作全部和局部的复制、转载、引用和链接，任何单位或者个人不得以任何方式引诱、要求美团注册用户或者第三方复制转载美团平台内容或者同意该单位或者个人复制转载美团平台内容，亦不得通过技术手段扫描、探测、抓取美团平台内容。任何注册用户将在美团注册用户名和密码提供给任何第三方用于许可其复制美团平台内容的，将构成对《美团平台用户服务协议》的违反，并可能导致其账户被关闭或者处罚。任何违反本知识产权声明的行为，美团保留追究行为人法律责任的权利。 四、侵权投诉指引 美团重视知识产权保护，反对侵犯知识产权的行为。若权利人认为美团平台中其他用户或商户发布的内容侵犯自身的知识产权或其他合法权益的，可以通过“美团知识产权维权平台”（ ipr.meituan.com ）进行投诉，权利人可使用或注册美团账号登录“美团知识产权维权平台”，权利人依据该平台公示的相关投诉规则提交合格的证据资料后，美团将依据相应的法律法规进行处理。 &nbsp; window.__USE_SSR__=true;window.__PAGE_DATA__={};window.__LAYOUT_DATA__={"ruleData":{"pageLoadStatus":"SUCCESS","cpnData"
-- 引用 --
前述知识产权，美团有权单独采取各种措施追究第三方的法律责任（包括但不限于以美团的名义独立进行侵权取证、提起诉讼或仲裁、调解、和解等）。 三、 禁止行为 除法律特别规定或者政府明确要求外，在未取得美团书面明确许可前，任何单位或者个人不得将美团的任何知识产权对象进行任何目的的使用，任何单位或个人不得以任何方式对美团平台上的任何内容和信息作全部和局部的复制、转载、引用和链接，任何单位或者个人不得以任何方式引诱、要求美团注册用户或者第三方复制转载美团平台内容或者同意该单位或者个人复制转载美团平台内容，亦不得通过技术手段扫描、探测、抓取美团平台内容。任何注册用户将在美团注册用户名和密码提供给任何第三方用于许可其复制美团平台内容的，将构成对《美团平台用户服务协议》的违反，并可能导致其账户被关闭或者处罚。任何违反本知识产权声明的行为，美团保留追究行为人法律责任的权利。 四、侵权投诉指引 美团重视知识产权保护，反对侵犯知识产权的行为。若权利人认为美团平台中其他用户或商户发布的内容侵犯自身的知识产权或其他合法权益的，可以通过“美团知识产权维权平台”（ ipr.meituan.com ）进行投诉，权利人可使用或注册美团账号登录“美团知识产权维权平台”，权利人依据该平台公示的相关投诉规则提交合格的证据资料后，美团将依据相应的法律法规进行处理。 &nbsp; window.__USE_SSR__=true;window.__PAGE_DATA__={};window.__LAYOUT_DATA__={"ruleData":{"pageLoadStatus":"SUCCESS","cpnData":{"
-- 抓取 --
者政府明确要求外，在未取得美团书面明确许可前，任何单位或者个人不得将美团的任何知识产权对象进行任何目的的使用，任何单位或个人不得以任何方式对美团平台上的任何内容和信息作全部和局部的复制、转载、引用和链接，任何单位或者个人不得以任何方式引诱、要求美团注册用户或者第三方复制转载美团平台内容或者同意该单位或者个人复制转载美团平台内容，亦不得通过技术手段扫描、探测、抓取美团平台内容。任何注册用户将在美团注册用户名和密码提供给任何第三方用于许可其复制美团平台内容的，将构成对《美团平台用户服务协议》的违反，并可能导致其账户被关闭或者处罚。任何违反本知识产权声明的行为，美团保留追究行为人法律责任的权利。 四、侵权投诉指引 美团重视知识产权保护，反对侵犯知识产权的行为。若权利人认为美团平台中其他用户或商户发布的内容侵犯自身的知识产权或其他合法权益的，可以通过“美团知识产权维权平台”（ ipr.meituan.com ）进行投诉，权利人可使用或注册美团账号登录“美团知识产权维权平台”，权利人依据该平台公示的相关投诉规则提交合格的证据资料后，美团将依据相应的法律法规进行处理。 &nbsp; window.__USE_SSR__=true;window.__PAGE_DATA__={};window.__LAYOUT_DATA__={"ruleData":{"pageLoadStatus":"SUCCESS","cpnData":{"data":{"type":1,"id":3027,"sourceId":69,"title":"美团知识产权声明","subTitle":"美团知识产权声明","bi
-- 平台上的任何内容 --
以任何形式发布或授权其它第三方使用。若第三方侵犯前述知识产权，美团有权单独采取各种措施追究第三方的法律责任（包括但不限于以美团的名义独立进行侵权取证、提起诉讼或仲裁、调解、和解等）。 三、 禁止行为 除法律特别规定或者政府明确要求外，在未取得美团书面明确许可前，任何单位或者个人不得将美团的任何知识产权对象进行任何目的的使用，任何单位或个人不得以任何方式对美团平台上的任何内容和信息作全部和局部的复制、转载、引用和链接，任何单位或者个人不得以任何方式引诱、要求美团注册用户或者第三方复制转载美团平台内容或者同意该单位或者个人复制转载美团平台内容，亦不得通过技术手段扫描、探测、抓取美团平台内容。任何注册用户将在美团注册用户名和密码提供给任何第三方用于许可其复制美团平台内容的，将构成对《美团平台用户服务协议》的违反，并可能导致其账户被关闭或者处罚。任何违反本知识产权声明的行为，美团保留追究行为人法律责任的权利。 四、侵权投诉指引 美团重视知识产权保护，反对侵犯知识产权的行为。若权利人认为美团平台中其他用户或商户发布的内容侵犯自身的知识产权或其他合法权益的，可以通过“美团知识产权维权平台”（ ipr.meituan.com ）进行投诉，权利人可使用或注册美团账号登录“美团知识产权维权平台”，权利人依据该平台公示的相关投诉规则提交合格的证据资料后，美团将依据相应的法律法规进行处理。 &nbsp; window.__USE_SSR__=true;window.__PAGE_DATA__={};window.__LAYOUT_DATA__={"ruleData":{"pageLoadStatus

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Command pdftotext -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Source' in c:\Users\h\Documents\New project 2
 succeeded in 591ms:
C:\Program Files\Git\mingw64\bin\pdftotext.exe

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$pdf=Join-Path $env:TEMP '"'fliggy_platform_agreement.pdf'; "'$txt=Join-Path $env:TEMP '"'fliggy_platform_agreement.txt'; Invoke-WebRequest -Uri 'https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231106103244276/20231106103244276_1_3_19922.pdf' -OutFile "'$pdf -TimeoutSec 30; & pdftotext -enc UTF-8 $pdf $txt; $content=Get-Content -LiteralPath $txt -Raw -Encoding UTF8; foreach($pat in @('"'商业性利用','复制','传播','飞猪平台','支付方式','银行卡')){ \"-- "'$pat --"; $i=$content.IndexOf($pat); if($i -ge 0){$start=[Math]::Max(0,$i-220); $len=[Math]::Min(760,$content.Length-$start); ($content.Substring($start,$len) -replace '"'\\s+',' ') } }" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$url='"'https://www.fliggy.com/'; "'$r=Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 20; $html=[Text.Encoding]::UTF8.GetString($r.RawContentStream.ToArray()); $text=($html -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); \"TITLE:"'$(([regex]::Match($html,'"'<title["'^>]*>(.*?)</title>'"','Singleline').Groups[1].Value -replace '\\s+',' ').Trim()) LEN:"'$($text.Length)"; foreach($pat in @('"'旅游度假','景点门票','火车票','酒店预订','商旅服务','旅行保险')){ \"-- "'$pat --"; $i=$text.IndexOf($pat); if($i -ge 0){$start=[Math]::Max(0,$i-150); $len=[Math]::Min(520,$text.Length-$start); $text.Substring($start,$len)} }' in c:\Users\h\Documents\New project 2
 succeeded in 2842ms:
TITLE:飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】 LEN:8891
-- 旅游度假 --
dow.trackerPerformanceTime = {};window.trackerPerformanceTime.trip_startTime = Date.now(); window.REACT_TOUCH_TAP_FIXED = true 飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】 window._$isOffline$_=false; window.g_config = {assetsServer: 'https://g.alicdn.com/',appVersion: '0.5.24',pageName: 'PC_HOME'} body {max-width: 100vw !important;} (function () {var ua = window.navigator.userAgent;var msie = ua.indexOf('MSIE ');var trident = ua.indexOf('Trident/');if (msie > 0 || trident > 0) {alert('您正在使用不受支持的浏览器，请使用最新版本的 Chrome、Firefo
-- 景点门票 --
保障您能以最优惠的价格开始旅程。 2. 酒店预订：合作众多国内外知名酒店、度假村，从经济型到豪华型，总有一间适合您的风格和预算。 3. 火车票预订：无论是高铁还是普通列车，我们助您轻松规划国内各地的铁路旅行。 4. 旅游度假：精心挑选的旅游套餐，覆盖海内外热门旅游目的地，让您的假期充满精彩。 5. 景点门票：提前预订国内外热门景点门票，避免长时间排队，享受无缝的旅行体验。 6. 商旅服务：专为企业客户量身定制的商务旅行解决方案，支持企业差旅管理和费用控制。 7. 交通出行：无论是打车、顺风车，还是接送机、租车服务，我们都能为您提供方便快捷的本地出行方式。 8. 旅行保险：为您和您的家人提供全面的保险计划，确保旅途安全，让您无后顾之忧。 9. 企业商旅：飞猪旗下专为企业打造的全场景、一站式数智化 差旅服务平台 阿里商旅 在飞猪旅行，我们不仅提供预订服务，更是注重用户体验，确保旅行过程中的每一步都简单便捷。轻松规划行程、比较优惠价格、发现不可错过的体验，所有这些只需轻触指尖。 网站地图 window.__INITIAL_DATA__={"env":{"userAgent":"Chrome/57","appName":"UNKNO
-- 火车票 --
站式、高效便捷的旅行预订服务。无论是商务出差还是休闲度假，我们的平台都能满足您的需求。我们的业务涵盖以下方面: 1. 机票预订：覆盖全球多个航线，提供各种舱位选择，保障您能以最优惠的价格开始旅程。 2. 酒店预订：合作众多国内外知名酒店、度假村，从经济型到豪华型，总有一间适合您的风格和预算。 3. 火车票预订：无论是高铁还是普通列车，我们助您轻松规划国内各地的铁路旅行。 4. 旅游度假：精心挑选的旅游套餐，覆盖海内外热门旅游目的地，让您的假期充满精彩。 5. 景点门票：提前预订国内外热门景点门票，避免长时间排队，享受无缝的旅行体验。 6. 商旅服务：专为企业客户量身定制的商务旅行解决方案，支持企业差旅管理和费用控制。 7. 交通出行：无论是打车、顺风车，还是接送机、租车服务，我们都能为您提供方便快捷的本地出行方式。 8. 旅行保险：为您和您的家人提供全面的保险计划，确保旅途安全，让您无后顾之忧。 9. 企业商旅：飞猪旗下专为企业打造的全场景、一站式数智化 差旅服务平台 阿里商旅 在飞猪旅行，我们不仅提供预订服务，更是注重用户体验，确保旅行过程中的每一步都简单便捷。轻松规划行程、比较优惠价格、发现不可错过的体验，所有这些只需轻
-- 酒店预订 --
 window.trackerPerformanceTime = {};window.trackerPerformanceTime.trip_startTime = Date.now(); window.REACT_TOUCH_TAP_FIXED = true 飞机票查询-机票预订、酒店预订查询、客栈民宿、旅游度假、门票签证【飞猪旅行】 window._$isOffline$_=false; window.g_config = {assetsServer: 'https://g.alicdn.com/',appVersion: '0.5.24',pageName: 'PC_HOME'} body {max-width: 100vw !important;} (function () {var ua = window.navigator.userAgent;var msie = ua.indexOf('MSIE ');var trident = ua.indexOf('Trident/');if (msie > 0 || trident > 0) {alert('您正在使用不受支持的浏览器，请使用最新版本的 Chrome、Fi
-- 商旅服务 --
从经济型到豪华型，总有一间适合您的风格和预算。 3. 火车票预订：无论是高铁还是普通列车，我们助您轻松规划国内各地的铁路旅行。 4. 旅游度假：精心挑选的旅游套餐，覆盖海内外热门旅游目的地，让您的假期充满精彩。 5. 景点门票：提前预订国内外热门景点门票，避免长时间排队，享受无缝的旅行体验。 6. 商旅服务：专为企业客户量身定制的商务旅行解决方案，支持企业差旅管理和费用控制。 7. 交通出行：无论是打车、顺风车，还是接送机、租车服务，我们都能为您提供方便快捷的本地出行方式。 8. 旅行保险：为您和您的家人提供全面的保险计划，确保旅途安全，让您无后顾之忧。 9. 企业商旅：飞猪旗下专为企业打造的全场景、一站式数智化 差旅服务平台 阿里商旅 在飞猪旅行，我们不仅提供预订服务，更是注重用户体验，确保旅行过程中的每一步都简单便捷。轻松规划行程、比较优惠价格、发现不可错过的体验，所有这些只需轻触指尖。 网站地图 window.__INITIAL_DATA__={"env":{"userAgent":"Chrome/57","appName":"UNKNOWN"},"lbs":{"country":"","cityCode":"","c
-- 旅行保险 --
地，让您的假期充满精彩。 5. 景点门票：提前预订国内外热门景点门票，避免长时间排队，享受无缝的旅行体验。 6. 商旅服务：专为企业客户量身定制的商务旅行解决方案，支持企业差旅管理和费用控制。 7. 交通出行：无论是打车、顺风车，还是接送机、租车服务，我们都能为您提供方便快捷的本地出行方式。 8. 旅行保险：为您和您的家人提供全面的保险计划，确保旅途安全，让您无后顾之忧。 9. 企业商旅：飞猪旗下专为企业打造的全场景、一站式数智化 差旅服务平台 阿里商旅 在飞猪旅行，我们不仅提供预订服务，更是注重用户体验，确保旅行过程中的每一步都简单便捷。轻松规划行程、比较优惠价格、发现不可错过的体验，所有这些只需轻触指尖。 网站地图 window.__INITIAL_DATA__={"env":{"userAgent":"Chrome/57","appName":"UNKNOWN"},"lbs":{"country":"","cityCode":"","cityName":"","latitude":"","longitude":"","iataCode":"","isAbroad":"true","ip":"33.80.71.44","

 succeeded in 3743ms:
-- 商业性利用 --
款，商家同意与网商银行签署《订单账款管理服务合同》，授权飞猪向网商银行提供商家向飞猪提交的 营业执照、特定行业经营资质、税务登记信息、法定代表人身份信息、支付宝账号等相关信息和文件以实现网商银行 为商家提供订单账款管理服务。（十）其保证在使用服务进行交易的过程中遵守诚实信用的原则，不在交易过程中采 取不正当竞争行为，不扰乱网上交易的正常秩序，不在飞猪平台从事与网上交易无关的行为。 （十一）除依法获得授权外，商家同意不对飞猪上任何数据作商业性利用，包括在未经飞猪事先书面批准的情况下， 以复制、传播或向他方披露等方式使用在飞猪平台上其他用户展示的任何资料等。 （十二）其承诺关闭其支付宝账户（与商家本协议项下店铺绑定的支付宝账户）的“余额支付”功能，同意授权飞猪向 支付宝公司发出指令，关闭其支付宝账户的“余额支付”功能；涉及通过网商银行订单账款管理服务完成交易结算的订 单，其承诺为确保商品交易款的安全性和保障消费者的合法权益，同意飞猪可基于平台相关规则，向网商银行发送指 令，用于冻结、划扣、支付和止付相关交易款。 （十三）其认可并接受飞猪基于维护市场良好持续、保障消费者权益的目的依照公示的规则进行商品/服务抽检，商 家可依照公示规则就抽检结果提出异议。对于经抽检证明存在质量瑕疵的商品/服务，抽检或鉴定所发生的所有合理 费用由商家承担。 （十四）其承诺同意飞猪于商家店铺内的固定位置展示飞猪活动信息（如“双十一”活动等）、消费者保障信息或其他 信息，具体位置为：商品详情页中“产品参数”的下方或飞猪根据活动情况确定的其他位置，信息内容由飞猪根据相关 主题自行设计、制作。 （十五）承诺不会采取任何手段或措施，包括明示或暗示买家或通过其他方式转移其可以通过飞猪平台在线达成的交 易，以规避向飞猪支付相关
-- 复制 --
店铺交易额、某类目或某单品的交易额等商家商业秘密信息。为推广商家店铺或其商品， 飞猪可在商家参加飞猪官方举办的市场活动期间（包括“双十一”等）对外公示商家店铺的活动总交易额、某类目或某 单品的交易额，亦可将上述信息作宣传推广使用。 （三）在法律允许的范围内，以推广相关商品和/或相关品牌为目的，商家同意免费授予飞猪可在飞猪平台相关展示 推广页面对商家公示于商家店铺或以其他方式提供给飞猪的各类信息(包括商品商标、logo、文字、图片等)进行复制 （如在多客户端同步展示）、修改（如为适应移动端视觉体验进行微调）、改编（如增加平台整体活动设计元素）、 翻译（如为满足海外用户的浏览需求进行翻译）及可再许可第三方基于上述目的及方式使用的权利。 （四）飞猪推出的所有官方产品、技术、软件、程序、数据及其他信息（包括文字、图标、图片、照片、音频、视 频、图表、色彩组合、版面设计等）的所有权利（包括著作权、商标权、专利权、商业秘密及其他相关权利）均归飞 猪及其关联公司所有。除商家依据相关法律有权进行商业性使用的数据外，商家同意不对飞猪平台上其他任何数据作 商业性使用，包括但不限于在未经飞猪事先书面批准的情况下，以复制、传播或向他方披露等方式使用在飞猪平台上 其他用户展示的任何资料。 （五）消费者个人信息保护 商家通过飞猪平台向消费者提供商品/服务过程中，可能涉及需要从飞猪平台（如通过平台的开放接口）或者其他途 径（如直接由消费者提供）获取消费者的个人信息（包括订单信息中的个人信息，以及其它为向消费者提供商品或服 务而收集的个人信息，例如消费者向签证商家寄送的签证材料），以实现向消费者提供特定商品/服务并完善售后服 务的目的。视不同的商品或服务，商家可能会将其收集到的消费者个人信息（无论直接收集还是间接从飞猪
-- 传播 --
浏览需求进行翻译）及可再许可第三方基于上述目的及方式使用的权利。 （四）飞猪推出的所有官方产品、技术、软件、程序、数据及其他信息（包括文字、图标、图片、照片、音频、视 频、图表、色彩组合、版面设计等）的所有权利（包括著作权、商标权、专利权、商业秘密及其他相关权利）均归飞 猪及其关联公司所有。除商家依据相关法律有权进行商业性使用的数据外，商家同意不对飞猪平台上其他任何数据作 商业性使用，包括但不限于在未经飞猪事先书面批准的情况下，以复制、传播或向他方披露等方式使用在飞猪平台上 其他用户展示的任何资料。 （五）消费者个人信息保护 商家通过飞猪平台向消费者提供商品/服务过程中，可能涉及需要从飞猪平台（如通过平台的开放接口）或者其他途 径（如直接由消费者提供）获取消费者的个人信息（包括订单信息中的个人信息，以及其它为向消费者提供商品或服 务而收集的个人信息，例如消费者向签证商家寄送的签证材料），以实现向消费者提供特定商品/服务并完善售后服 务的目的。视不同的商品或服务，商家可能会将其收集到的消费者个人信息（无论直接收集还是间接从飞猪平台收 集）与实际提供消费者预订的商品或服务的实际服务提供人（“实际服务提供人”）分享，主要用于完成向消费者提供 其预订的商品或服务。商家收集、使用、存储、共享、传输（国内传输或者跨境传输）以及以其他方式处理消费者的 个人信息，应当严格遵守可适用的网络安全及数据保护相关法律法规的要求（包括但不限于中国、信息接收方所在 地、服务履行地的法律法规）。 1、商家须严格遵守网络安全与数据保护相关法律的要求，其中，商家在店铺经营过程中收集、使用及共享的信息中 涉及任何个人信息的，须遵循合法、正当、必要原则，不得违反相关法律的规定及商家与用户之间的约定。包括： 1）除非法律另有约
-- 飞猪平台 --
内容。如果您不同意本协议的任何内容，或者无法准确理解条款的含义或飞猪 对条款的解释，请不要进行后续操作。 飞猪服务协议 (最近更新日：2023年11月16日) 本协议由同意并遵照本协议规定使用飞猪服务的法律实体（下称“商家”或“甲方”）、浙江飞猪网络技术有限公司（下 称“乙方”）、杭州淘美航空服务有限公司（下称“丙方”）共同缔结。 本协议中各方合称协议方，乙方及丙方合称“飞猪”。 一、协议内容及效力 本协议内容包括协议正文及所有飞猪平台已发布或后续发布并依法通知商家的各类规则【可于飞猪规则频道 （rule.fliggy.com）或/和商家中心、EBooking（EBK）、代理商后台查看，若是机票类目商家，还包括在机票商家后 台（ https://jipiao.fliggy.com/agent/index.htm 或飞猪根据业务发展调整的其他url）规范、公告，以下统称“规则”】。所 有规则均为本协议不可分割的一部分，与协议正文具有同等法律效力。 为不断提升消费者体验、为商家提供更优质的服务、适应不断发展变化的法律法规要求等，飞猪可根据需要酌情修订 本协议，但是对于影响商家权利义务的变更飞猪将提前至少7天在飞猪平台进行公示。任何对本协议的修订一经生效 即构成协议各方权利义务的补充，并成为本协议的一部分。如商家不同意相关修订，请立即以正式书面盖章的通知方 式告知飞猪（商家也可在商家后台选择主动退出），飞猪及商家均有权选择终止本协议。如相关变更生效后，商家仍 登陆或继续使用飞猪服务，则表示商家已接受修订后的协议内容。 本协议一经商家或商家授权的任何人点击确认即于商家和飞猪之间发生法律约束力。对于本协议生效前已经开通飞猪 服务的商家，本协议构成协议方之间就使用飞猪服务所达成约定的修订和补充。 
-- 支付方式 --
商品/服务存在损害消费者权益的风险； 4、 其他飞猪认为不适合在飞猪平台销售的商品/服务。 （七）其保证严格按与消费者签署的合同及对消费者的承诺提供商品/服务；因不可抗力或者第三人造成消费者损害 的，商家应当及时进行救助。 （八）其有义务按照买家就其飞猪店铺交易实际支付的现金金额为买家提供合规的发票，并就其飞猪店铺实际成交之 金额依法及时、足额地向其所在地主管税务机关申报纳税。 （九）其明示接受“支付宝服务”或其他由支付宝公司提供的支付方式或经飞猪平台支持的支付方式作为其通过飞猪达 成交易的支付工具。为了助力商家成长，满足广大消费者的多元化支付方式需求，飞猪将不断拓展多种支付方式，因 技术实现需要一定周期，支付方式的上线可能需要分阶段完成，商家对此表示同意和理解。为实现对消费者多种支付 方式的统一收款，商家同意与网商银行签署《订单账款管理服务合同》，授权飞猪向网商银行提供商家向飞猪提交的 营业执照、特定行业经营资质、税务登记信息、法定代表人身份信息、支付宝账号等相关信息和文件以实现网商银行 为商家提供订单账款管理服务。（十）其保证在使用服务进行交易的过程中遵守诚实信用的原则，不在交易过程中采 取不正当竞争行为，不扰乱网上交易的正常秩序，不在飞猪平台从事与网上交易无关的行为。 （十一）除依法获得授权外，商家同意不对飞猪上任何数据作商业性利用，包括在未经飞猪事先书面批准的情况下， 以复制、传播或向他方披露等方式使用在飞猪平台上其他用户展示的任何资料等。 （十二）其承诺关闭其支付宝账户（与商家本协议项下店铺绑定的支付宝账户）的“余额支付”功能，同意授权飞猪向 支付宝公司发出指令，关闭其支付宝账户的“余额支付”功能；涉及通过网商银行订单账款管理服务完成交易结算的订 单，其承诺为确保商品交易款的安
-- 银行卡 --

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$urls=@('"'https://contents.ctrip.com/activitysetupapp/mkt/index/agreement202311','https://contents.ctrip.com/activitysetupapp/mkt/index/userrule','https://docs.c-ctrip.com/files/6/unc_agreement_pdf/1tm3r12000hb2zpof8D77.pdf'); foreach("'$u in $urls){ try{ if($u.EndsWith('"'.pdf')){ "'$pdf=Join-Path $env:TEMP '"'ctrip_user_agreement.pdf'; "'$txt=Join-Path $env:TEMP '"'ctrip_user_agreement.txt'; Invoke-WebRequest -Uri "'$u -OutFile $pdf -TimeoutSec 30; & pdftotext -enc UTF-8 $pdf $txt; $content=Get-Content -LiteralPath $txt -Raw -Encoding UTF8; } else { $r=Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 20; $content=([Text.Encoding]::UTF8.GetString($r.RawContentStream.ToArray()) -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' ')}; \"URL:"'$u LEN:$($content.Length)"; foreach($pat in @('"'网络爬虫','商业性利用','知识产权','未经携程','复制','传播','攻略社区')){ \"-- "'$pat --"; $i=$content.IndexOf($pat); if($i -ge 0){$start=[Math]::Max(0,$i-180); $len=[Math]::Min(700,$content.Length-$start); ($content.Substring($start,$len) -replace '"'\\s+',' ')}}; \"\" } catch {\"URL:"'$u ERROR:$($_.Exception.Message)"}}' in c:\Users\h\Documents\New project 2
 succeeded in 6058ms:
URL:https://contents.ctrip.com/activitysetupapp/mkt/index/agreement202311 LEN:34017
-- 网络爬虫 --
 未经允许，对计算机信息网络功能进行删除、修改或者增加的； l 未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加的； l 故意制作、传播计算机病毒等破坏性程序的；其他危害计算机信息网络安全的行为； l 未经允许，将携程平台上的任何数据作商业性利用，包括但不限于在未经携程事先书面同意的情况下，自行、协助或授权任何第三方以网络爬虫、复制、传播等任何方式获取、使用携程平台上展示的资料； l 使用任何装置、软件或例行程序等其他方式干预或试图干预携程平台的正常运作或正在携程平台上进行的任何交易、活动，或采取任何将导致不合理的庞大数据负载加诸携程平台网络设备的行动； I 从事洗钱、窃取商业秘密、窃取个人信息、违规套现、假冒携程发布任何虚假或诈骗信息等违法违规活动； l 与网上交易无关的其他行为，例如发布广告信息（得到携程书面许可的除外）； l 发布任何侵犯携程平台或他人合法权益、违反法律法规及其他规范性文件（包括但不限于《互联网视听节目服务管理规定》、《网络信息内容生态治理规定》等）及本协议的内容。 (3)扰乱平台交易秩序行为，包括但不限于： l 超过真实生活消费需求购买服务/产品； l 以不正当方式达成交易或参与活动，如使用插件、外挂等工具； l 违反诚实信用原则的不正当竞争行为，如刷单炒信； l 恶意下单、恶意维权、虚假交易等。 上述行为的发生，将视为您对本协议的根本违约。在任何情况下，携程平台一旦合理地认为您存在或可能存在上述行为的，可以在任何时候，不经事先通知删除您散布或传播的任何信息，并中止或终止向您提供携程平台的产品/服务。您需对自己在访
-- 商业性利用 --
活动： l 未经允许，进入计算机信息网络或者非法获取、使用计算机信息网络资源的； l 未经允许，对计算机信息网络功能进行删除、修改或者增加的； l 未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加的； l 故意制作、传播计算机病毒等破坏性程序的；其他危害计算机信息网络安全的行为； l 未经允许，将携程平台上的任何数据作商业性利用，包括但不限于在未经携程事先书面同意的情况下，自行、协助或授权任何第三方以网络爬虫、复制、传播等任何方式获取、使用携程平台上展示的资料； l 使用任何装置、软件或例行程序等其他方式干预或试图干预携程平台的正常运作或正在携程平台上进行的任何交易、活动，或采取任何将导致不合理的庞大数据负载加诸携程平台网络设备的行动； I 从事洗钱、窃取商业秘密、窃取个人信息、违规套现、假冒携程发布任何虚假或诈骗信息等违法违规活动； l 与网上交易无关的其他行为，例如发布广告信息（得到携程书面许可的除外）； l 发布任何侵犯携程平台或他人合法权益、违反法律法规及其他规范性文件（包括但不限于《互联网视听节目服务管理规定》、《网络信息内容生态治理规定》等）及本协议的内容。 (3)扰乱平台交易秩序行为，包括但不限于： l 超过真实生活消费需求购买服务/产品； l 以不正当方式达成交易或参与活动，如使用插件、外挂等工具； l 违反诚实信用原则的不正当竞争行为，如刷单炒信； l 恶意下单、恶意维权、虚假交易等。 上述行为的发生，将视为您对本协议的根本违约。在任何情况下，携程平台一旦合理地认为您存在或可能存在上述行为的，可以在任何时候，不经事先通知
-- 知识产权 --
何情况下，携程平台一旦合理地认为您存在或可能存在上述行为的，可以在任何时候，不经事先通知删除您散布或传播的任何信息，并中止或终止向您提供携程平台的产品/服务。您需对自己在访问携程平台或使用携程平台的产品/服务中的行为承担法律责任。您若在携程平台散布或传播以上违反国家法律法规或公序良俗的信息，携程平台的系统记录将有可能作为您违法犯罪的证据向有关部门提供。 6、知识产权 携程在携程平台提供的相关产品/服务中使用或产生的内容（包括但不限于产品、软件、网页、文字、图片、音频、视频、数据、信息等）的知识产权归携程所有。携程所有和享有的知识产权，不因您的任何使用行为而发生权利转移。未经携程事先书面明确同意，您不得以任何形式对前述内容进行使用或创造相关衍生作品，但如您是作品的权利人、您已获得相关权利人授权或携程与您另有约定的除外。 您承诺，通过携程平台发布上传的内容（包括但不限于文字、图片、视频、音频等各种形式的内容）为原创或已获合法授权，上传内容的知识产权归属于您本人或者相关权利人所有。您通过携程平台上传发布的内容，由您自行承担责任。如您发送或传播的内容违法违规或侵犯他人权利的，携程有权进行独立判断并采取删除、屏蔽或断开链接等措施。因侵犯他人知识产权而引发纠纷的，您须自行承担全部责任。如您的行为给携程造成损失的，携程有权按照法律规定要求您赔偿。 您承诺，针对您通过携程平台上传、发布或传输的内容（包括但不限于产品、软件、网页、文字、图片、音频、视频、数据、信息等），您不可撤销地授予携程、或携程指定的第三方一项全球范围内、免费、非独家、可再许可的权利（包括但不限于复制、翻译、汇编、信息网络传播
-- 未经携程 --
行配置必要的上网设备，包括PC、手机、平板电脑，以及调制解调器、路由器等。 （2）个人上网和支付与此服务有关的网络费用、电话费用。 若选择移动设备，您须选择并安装与所上网设备相匹配的客户端版本，包括但不限于iOS、Android，或微信小程序等携程平台发布的客户端。您可以直接从携程平台上获取客户端的下载方式，也可以从得到携程授权的第三方应用平台获取。如果您从未经携程授权的第三方获取与携程平台客户端名称相同的安装程序，携程无法保证该软件能够正常使用，并对因此给您造成的损失不予负责。 考虑到携程平台提供的产品/服务的重要性，您同意： （1）提供真实、详尽及准确的个人资料用于注册携程平台账户， 不得使用他人邮箱、手机号码或以其他冒用他人身份的方式进行账号注册。 （2）在提交注册信息后，如果信息发生变化，您应及时更改。如果您提供的信息不符合合法、真实、准确、详尽的要求，您需承担因此引起的相应责任及后果，并且携程平台保留终止您使用各项产品/服务的权利。 3、服务协议的修改 携程平台会在必要时修改本协议及/或各类规则，并将在携程平台相应页面提前公告。具体而言，携程将通过适当的方式在平台上对本协议的修改事宜进行公告或通知，此类通知于公布或发送之日即视为已送达您。 携程承诺，对于本协议及/或各类规则的修改，携程平台应当于变更后的文本生效之日前至少七日进行公告或通知。如您不同意相关变更，应当立即停止访问携程平台或使用携程平台的产品/服务。若您在本协议及/或各类规则变更生效之日后继续使用携程平台的产品/服务的，即表示您接受修订后的文本。 4、服务变更、中断、终止 您完全理解并同意，本服务涉及到互联
-- 复制 --
，对计算机信息网络功能进行删除、修改或者增加的； l 未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加的； l 故意制作、传播计算机病毒等破坏性程序的；其他危害计算机信息网络安全的行为； l 未经允许，将携程平台上的任何数据作商业性利用，包括但不限于在未经携程事先书面同意的情况下，自行、协助或授权任何第三方以网络爬虫、复制、传播等任何方式获取、使用携程平台上展示的资料； l 使用任何装置、软件或例行程序等其他方式干预或试图干预携程平台的正常运作或正在携程平台上进行的任何交易、活动，或采取任何将导致不合理的庞大数据负载加诸携程平台网络设备的行动； I 从事洗钱、窃取商业秘密、窃取个人信息、违规套现、假冒携程发布任何虚假或诈骗信息等违法违规活动； l 与网上交易无关的其他行为，例如发布广告信息（得到携程书面许可的除外）； l 发布任何侵犯携程平台或他人合法权益、违反法律法规及其他规范性文件（包括但不限于《互联网视听节目服务管理规定》、《网络信息内容生态治理规定》等）及本协议的内容。 (3)扰乱平台交易秩序行为，包括但不限于： l 超过真实生活消费需求购买服务/产品； l 以不正当方式达成交易或参与活动，如使用插件、外挂等工具； l 违反诚实信用原则的不正当竞争行为，如刷单炒信； l 恶意下单、恶意维权、虚假交易等。 上述行为的发生，将视为您对本协议的根本违约。在任何情况下，携程平台一旦合理地认为您存在或可能存在上述行为的，可以在任何时候，不经事先通知删除您散布或传播的任何信息，并中止或终止向您提供携程平台的产品/服务。您需对自己在访问携程平台
-- 传播 --
情况之外，携程无需为变更、中断或终止服务承担任何责任，但携程应尽可能事先进行通知，并尽可能给您预留时间以便处理相关权益。 5、用户行为规范 您在使用携程平台产品/服务时，必须遵守中华人民共和国相关法律法规的规定，您承诺将不会利用携程平台的产品/服务进行任何违法或不正当的活动，包括但不限于下列行为： （1）&nbsp;&nbsp;&nbsp;上载、展示、张贴、传播或以其它方式传送含有下列内容之一的信息: l 反对宪法所确定的基本原则的； l 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的； l 损害国家荣誉和利益的； l 煽动民族仇恨、民族歧视、破坏民族团结的； l 破坏国家宗教政策，宣扬邪教和封建迷信的； l 散布谣言，扰乱社会秩序，破坏社会稳定的； l 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的； l 侮辱或者诽谤他人，侵害他人合法权利的； l 含有虚假、有害、胁迫、侵害他人隐私、骚扰、侵害、中伤、粗俗、猥亵、或其它道德上令人反感的内容； l 含有中国法律、法规、规章、条例以及任何具有法律效力之规范所限制或禁止的其它内容的。 （2）为任何非法目的而访问携程平台或使用携程产品/服务，或未经允许，利用携程平台从事以下活动： l 未经允许，进入计算机信息网络或者非法获取、使用计算机信息网络资源的； l 未经允许，对计算机信息网络功能进行删除、修改或者增加的； l 未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加的； l 故意制作、传播计算机病毒等破坏性程序的；其他危害计算机信息网络安全的行为； l 未经允许，将携程平台上的
-- 攻略社区 --

URL:https://contents.ctrip.com/activitysetupapp/mkt/index/userrule LEN:33959
-- 网络爬虫 --
-- 商业性利用 --
-- 知识产权 --
}:window.LEGAO_COMPONENTS;window.__IS_IN_LEGAO__=true; 欢迎来到携程攻略社区，携程攻略社区旨在让旅行更自在、更便捷、更美好。你可以在这里与其他旅行者交流，获取有用的旅行资讯，也可以分享自己的旅行经验，彼此互助，让旅行更美好。这是一个展示、交流和分享的开放空间，我们鼓励用户发布原创内容，也充分尊重原创作者的知识产权。 上海携程商务有限公司是携程攻略社区的制作者,拥有此网站内容及资源的版权,受国家知识产权保护,享有对本网站各种协议、声明的修改权；未经携程攻略社区的明确书面许可，任何第三方不得为任何非私人或商业目的获取或使用本网站的任何部分或通过本网站可直接或间接获得的任何内容、服务或资料。任何第三方违反本协议的规定以任何方式，和/或以任何文字对本网站的任何部分进行发表、复制、转载、更改、引用、链接、下载或以其他方式进行使用，或向任何其他第三方提供获取本网站任何内容的渠道，则对本网站的使用权将立即终止，且任何第三方必须按照本公司的要求，归还或销毁使用本网站任何部分的内容所创建的资料的任何副本。 一、社区管理条例 删除原则与处罚方法如下： 1、目的地或游记的删除原则 凡符合下列任何情况的目的地内容或游记，都将被进行删除或经举报后被删除： 1）含有色情、暴力、恐怖、不文明内容 &bull; 详细描写性器官、性行为和性心理 &bull; 传播色情图片或其他色情内容 &bull; 详细描写暴力行为过程和身心体验 &bull; 详细描写恐怖事件和主观感受 &bull; 引诱他人见面发生性关系或卖淫 &bull; 雇佣、引诱他人从事暴力活动 
-- 未经携程 --
社区旨在让旅行更自在、更便捷、更美好。你可以在这里与其他旅行者交流，获取有用的旅行资讯，也可以分享自己的旅行经验，彼此互助，让旅行更美好。这是一个展示、交流和分享的开放空间，我们鼓励用户发布原创内容，也充分尊重原创作者的知识产权。 上海携程商务有限公司是携程攻略社区的制作者,拥有此网站内容及资源的版权,受国家知识产权保护,享有对本网站各种协议、声明的修改权；未经携程攻略社区的明确书面许可，任何第三方不得为任何非私人或商业目的获取或使用本网站的任何部分或通过本网站可直接或间接获得的任何内容、服务或资料。任何第三方违反本协议的规定以任何方式，和/或以任何文字对本网站的任何部分进行发表、复制、转载、更改、引用、链接、下载或以其他方式进行使用，或向任何其他第三方提供获取本网站任何内容的渠道，则对本网站的使用权将立即终止，且任何第三方必须按照本公司的要求，归还或销毁使用本网站任何部分的内容所创建的资料的任何副本。 一、社区管理条例 删除原则与处罚方法如下： 1、目的地或游记的删除原则 凡符合下列任何情况的目的地内容或游记，都将被进行删除或经举报后被删除： 1）含有色情、暴力、恐怖、不文明内容 &bull; 详细描写性器官、性行为和性心理 &bull; 传播色情图片或其他色情内容 &bull; 详细描写暴力行为过程和身心体验 &bull; 详细描写恐怖事件和主观感受 &bull; 引诱他人见面发生性关系或卖淫 &bull; 雇佣、引诱他人从事暴力活动 &bull; 恐吓他人 &bull; 提供符合上述特点的链接 2）具有广告性质 &bull; 为了增加流量而故意引导他人到某个网站或论坛 &
-- 复制 --
。 上海携程商务有限公司是携程攻略社区的制作者,拥有此网站内容及资源的版权,受国家知识产权保护,享有对本网站各种协议、声明的修改权；未经携程攻略社区的明确书面许可，任何第三方不得为任何非私人或商业目的获取或使用本网站的任何部分或通过本网站可直接或间接获得的任何内容、服务或资料。任何第三方违反本协议的规定以任何方式，和/或以任何文字对本网站的任何部分进行发表、复制、转载、更改、引用、链接、下载或以其他方式进行使用，或向任何其他第三方提供获取本网站任何内容的渠道，则对本网站的使用权将立即终止，且任何第三方必须按照本公司的要求，归还或销毁使用本网站任何部分的内容所创建的资料的任何副本。 一、社区管理条例 删除原则与处罚方法如下： 1、目的地或游记的删除原则 凡符合下列任何情况的目的地内容或游记，都将被进行删除或经举报后被删除： 1）含有色情、暴力、恐怖、不文明内容 &bull; 详细描写性器官、性行为和性心理 &bull; 传播色情图片或其他色情内容 &bull; 详细描写暴力行为过程和身心体验 &bull; 详细描写恐怖事件和主观感受 &bull; 引诱他人见面发生性关系或卖淫 &bull; 雇佣、引诱他人从事暴力活动 &bull; 恐吓他人 &bull; 提供符合上述特点的链接 2）具有广告性质 &bull; 为了增加流量而故意引导他人到某个网站或论坛 &bull; 为某盈利性的组织或个人广告 &bull; 从事任何物品（包括虚拟物品，如虚拟货币等）的交易 &bull; 宣传、发展传销活动 &bull; 提供符合上述特点的链接 3）含有反动内容 &bull; 恶意评价国家现行制度
-- 传播 --
网站的使用权将立即终止，且任何第三方必须按照本公司的要求，归还或销毁使用本网站任何部分的内容所创建的资料的任何副本。 一、社区管理条例 删除原则与处罚方法如下： 1、目的地或游记的删除原则 凡符合下列任何情况的目的地内容或游记，都将被进行删除或经举报后被删除： 1）含有色情、暴力、恐怖、不文明内容 &bull; 详细描写性器官、性行为和性心理 &bull; 传播色情图片或其他色情内容 &bull; 详细描写暴力行为过程和身心体验 &bull; 详细描写恐怖事件和主观感受 &bull; 引诱他人见面发生性关系或卖淫 &bull; 雇佣、引诱他人从事暴力活动 &bull; 恐吓他人 &bull; 提供符合上述特点的链接 2）具有广告性质 &bull; 为了增加流量而故意引导他人到某个网站或论坛 &bull; 为某盈利性的组织或个人广告 &bull; 从事任何物品（包括虚拟物品，如虚拟货币等）的交易 &bull; 宣传、发展传销活动 &bull; 提供符合上述特点的链接 3）含有反动内容 &bull; 恶意评价国家现行制度 &bull; 破坏社会公共秩序 &bull; 挑起民族、种族、宗教、地域等争端 &bull; 恶意攻击政府机构与政府官员 &bull; 宣传迷信活动和邪教组织 &bull; 提供符合上述特点的链接 4）含有人身攻击内容 &bull; 诽谤他人，散布虚假信息 &bull; 侵犯他人肖像权、隐私权等其他合法权益 &bull; 用粗言秽语侮辱他人，造成身心伤害 &bull; 损害社会团体或组织的名誉 &bull; 提供符合上述特点的链接 5）含有违背伦理道德内容 &bu
-- 攻略社区 --
 携程攻略社区 用户协议 html{font-size:5vw}#__next { position: relative;min-height:100vh;} body{background-color:rgba(255, 255, 255, 1);margin:0 !important; -webkit-overflow-scrolling: touch; background:;background-repeat:;background-size:} window.LEGAO_COMPONENTS=!window.LEGAO_COMPONENTS?{}:window.LEGAO_COMPONENTS;window.__IS_IN_LEGAO__=true; 欢迎来到携程攻略社区，携程攻略社区旨在让旅行更自在、更便捷、更美好。你可以在这里与其他旅行者交流，获取有用的旅行资讯，也可以分享自己的旅行经验，彼此互助，让旅行更美好。这是一个展示、交流和分享的开放空间，我们鼓励用户发布原创内容，也充分尊重原创作者的知识产权。 上海携程商务有限公司是携程攻略社区的制作者,拥有此网站内容及资源的版权,受国家知识产权保护,享有对本网站各种协议、声明的修改权；未经携程攻略社区的明确书面许可，任何第三方不得为任何非私人或商业目的获取或使用本网站的任何部分或通过本网站可直接或间接获得的任何内容、服务或资料。任何第三方违反本协议的规定以任何方式，和/或以任何文字对本网站的任何部分进行发表、复制、转载、更改、引用、链接、下载或以其他方式进行使用，或向任何其他第三方提供获取本网站任何内容的渠道，则对本网

URL:https://docs.c-ctrip.com/files/6/unc_agreement_pdf/1tm3r12000hb2zpof8D77.pdf LEN:9411
-- 网络爬虫 --
允许，对计算机信息网络功能进行删除、修改或者增加的； l 未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序 进行删除、修改或者增加的； l 故意制作、传播计算机病毒等破坏性程序的；其他危害计算机信息网络安全 的行为； l 未经允许，将携程平台上的任何数据作商业性利用，包括但不限于在未经携 程事先书面同意的情况下，自行、协助或授权任何第三方以网络爬虫、复制、 传播等任何方式获取、使用携程平台上展示的资料； l 使用任何装置、软件或例行程序等其他方式干预或试图干预携程平台的正常 运作或正在携程平台上进行的任何交易、活动，或采取任何将导致不合理的庞 大数据负载加诸携程平台网络设备的行动； I 从事洗钱、窃取商业秘密、窃取个人信息、违规套现、假冒携程发布任何虚假 或诈骗信息等违法违规活动； l 与网上交易无关的其他行为，例如发布广告信息（得到携程书面许可的除外）； l 发布任何侵犯携程平台或他人合法权益、违反法律法规及其他规范性文件（包 括但不限于《互联网视听节目服务管理规定》、《网络信息内容生态治理规定》 等）及本协议的内容； I 使用非正规渠道注册、登录、使用携程平台账户，例如借助软件、机器注册携 程平台账户,借助软件、机器登录携程平台账户，使用非正规渠道手机卡绑定携 程平台账户； I 注册、填写、绑定携程平台账户时使用虚假信息； I 出售、转让携程账户或账户下产品、虚拟资产、权益等； I 恶意转移携程账户中的虚拟资产，或恶意消耗携程账户中虚拟资产为负。 (3)扰乱平台交易秩序行为，包括但不限于： I 恶意下单，以不正当方式违规占用库存，一人或多人合意使
-- 商业性利用 --
 l 未经允许，进入计算机信息网络或者非法获取、使用计算机信息网络资源 的； l 未经允许，对计算机信息网络功能进行删除、修改或者增加的； l 未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序 进行删除、修改或者增加的； l 故意制作、传播计算机病毒等破坏性程序的；其他危害计算机信息网络安全 的行为； l 未经允许，将携程平台上的任何数据作商业性利用，包括但不限于在未经携 程事先书面同意的情况下，自行、协助或授权任何第三方以网络爬虫、复制、 传播等任何方式获取、使用携程平台上展示的资料； l 使用任何装置、软件或例行程序等其他方式干预或试图干预携程平台的正常 运作或正在携程平台上进行的任何交易、活动，或采取任何将导致不合理的庞 大数据负载加诸携程平台网络设备的行动； I 从事洗钱、窃取商业秘密、窃取个人信息、违规套现、假冒携程发布任何虚假 或诈骗信息等违法违规活动； l 与网上交易无关的其他行为，例如发布广告信息（得到携程书面许可的除外）； l 发布任何侵犯携程平台或他人合法权益、违反法律法规及其他规范性文件（包 括但不限于《互联网视听节目服务管理规定》、《网络信息内容生态治理规定》 等）及本协议的内容； I 使用非正规渠道注册、登录、使用携程平台账户，例如借助软件、机器注册携 程平台账户,借助软件、机器登录携程平台账户，使用非正规渠道手机卡绑定携 程平台账户； I 注册、填写、绑定携程平台账户时使用虚假信息； I 出售、转让携程账户或账户下产品、虚拟资产、权益等； I 恶意转移携程账户中的虚拟资产，或恶意消耗携程账户中虚拟资产为负。 (3)扰乱平台
-- 知识产权 --
金，以及采取携程平台认为必要 或法律、法规、规章、规范性文件要求的其他处理措施。如您对前述操作有任何 异议，您可通过本协议公布的联系方式与携程取得联系。您需对自己在访问携程 平台或使用携程平台的产品/服务中的行为承担法律责任。您若在携程平台散布 或传播以上违反国家法律法规或公序良俗的信息，携程平台的系统记录将有可 能作为您违法犯罪的证据向有关部门提供。 6、知识产权 携程在携程平台提供的相关产品/服务中使用或产生的内容（包括但不限于产 品、软件、网页、文字、图片、音频、视频、数据、信息等）的知识产权归携 程所有。携程所有和享有的知识产权，不因您的任何使用行为而发生权利转 移。未经携程事先书面明确同意，您不得以任何形式对前述内容进行使用或创 造相关衍生作品，但如您是作品的权利人、您已获得相关权利人授权或携程与 您另有约定的除外。 您承诺，通过携程平台发布上传的内容（包括但不限于文字、图片、视频、音 频等各种形式的内容）为原创或已获合法授权，上传内容的知识产权归属于您 本人或者相关权利人所有。您通过携程平台上传发布的内容，由您自行承担责 任。如您发送或传播的内容违法违规或侵犯他人权利的，携程有权进行独立判 断并采取删除、屏蔽或断开链接等措施。因侵犯他人知识产权而引发纠纷的， 您须自行承担全部责任。如您的行为给携程造成损失的，携程有权按照法律规 定要求您赔偿。 您承诺，针对您通过携程平台上传、发布或传输的内容（包括但不限于产品、 软件、网页、文字、图片、音频、视频、数据、信息等），您授予携程及携程 指定的第三方一项全球范围内、免费、永久、非独家、可再许可的权利（包括 但不限于
-- 未经携程 --
设备，包括 PC、手机、平板电脑，以及调制解调 器、路由器等。 （2）个人上网和支付与此服务有关的网络费用、电话费用。 若选择移动设备，您须选择并安装与所上网设备相匹配的客户端版本，包括但 不限于 iOS、Android、鸿蒙或微信小程序等携程平台发布的客户端。您可以直 接从携程平台上获取客户端的下载方式，也可以从得到携程授权的第三方应用 平台获取。如果您从未经携程授权的第三方获取与携程平台客户端名称相同的 安装程序，携程无法保证该软件能够正常使用，并对因此给您造成的损失不予 负责。 考虑到携程平台提供的产品/服务的重要性，您同意： （1）提供真实、详尽及准确的个人资料用于注册携程平台账户，不得使用他人 邮箱、手机号码或以其他冒用他人身份的方式进行账号注册。 （2）在提交注册信息后，如果信息发生变化，您应及时更改。如果您提供的 信息不符合合法、真实、准确、详尽的要求，您需承担因此引起的相应责任及 后果，并且携程平台保留终止您使用各项产品/服务的权利。 3、服务协议的修改 根据国家法律法规变化、运营需要或为提升服务质量的目的，携程平台将在必 要时对本协议及/或各类规则进行不时修改或更新，并将在携程平台网页或移动 客户端相应页面提前公告或通知。上述修改/或更新后的文本将在相关更新说明 指定的日期开始生效实施，但携程承诺，将在文本生效之日前至少七日进行公 告或通知。 您应当及时查阅并了解相关修改/或更新内容，如您不同意相关修改/或变更， 您有权于变更事项确定的生效日前联系携程平台反馈意见。如您的反馈意见得 以采纳，携程将酌情调整变更事项。如您对已生效的修改/或变更内容仍不同意 的，可
-- 复制 --
算机信息网络功能进行删除、修改或者增加的； l 未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序 进行删除、修改或者增加的； l 故意制作、传播计算机病毒等破坏性程序的；其他危害计算机信息网络安全 的行为； l 未经允许，将携程平台上的任何数据作商业性利用，包括但不限于在未经携 程事先书面同意的情况下，自行、协助或授权任何第三方以网络爬虫、复制、 传播等任何方式获取、使用携程平台上展示的资料； l 使用任何装置、软件或例行程序等其他方式干预或试图干预携程平台的正常 运作或正在携程平台上进行的任何交易、活动，或采取任何将导致不合理的庞 大数据负载加诸携程平台网络设备的行动； I 从事洗钱、窃取商业秘密、窃取个人信息、违规套现、假冒携程发布任何虚假 或诈骗信息等违法违规活动； l 与网上交易无关的其他行为，例如发布广告信息（得到携程书面许可的除外）； l 发布任何侵犯携程平台或他人合法权益、违反法律法规及其他规范性文件（包 括但不限于《互联网视听节目服务管理规定》、《网络信息内容生态治理规定》 等）及本协议的内容； I 使用非正规渠道注册、登录、使用携程平台账户，例如借助软件、机器注册携 程平台账户,借助软件、机器登录携程平台账户，使用非正规渠道手机卡绑定携 程平台账户； I 注册、填写、绑定携程平台账户时使用虚假信息； I 出售、转让携程账户或账户下产品、虚拟资产、权益等； I 恶意转移携程账户中的虚拟资产，或恶意消耗携程账户中虚拟资产为负。 (3)扰乱平台交易秩序行为，包括但不限于： I 恶意下单，以不正当方式违规占用库存，一人或多人合意使用一个或多
-- 传播 --
购或申请的情况之外， 携程无需为变更、中断或终止服务承担任何责任，但携程应尽可能事先进行通 知，并尽可能给您预留时间以便处理相关权益。 5、用户行为规范 您在使用携程平台产品/服务时，必须遵守中华人民共和国相关法律法规的规 定，遵循诚实信用原则，您承诺将不会利用携程平台的产品/服务进行任何违 法或不正当的活动，包括但不限于下列行为： （1）上载、展示、张贴、传播或以其它方式传送含有下列内容之一的信息: l 反对宪法所确定的基本原则的； l 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的； l 损害国家荣誉和利益的； l 歪曲、丑化、亵渎、否定英雄烈士事迹和精神，侵害英雄烈士的姓名、肖 像、名誉、荣誉的； l 宣扬或煽动实施恐怖主义、极端主义及其活动的； l 煽动民族仇恨、民族歧视、破坏民族团结的； l 破坏国家宗教政策，宣扬邪教和封建迷信的； l 散布谣言，扰乱社会秩序，破坏社会稳定的； l 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的； l 侮辱或者诽谤他人，侵害他人合法权利的； l 发布或发送含有虚假、有害、胁迫、侵害他人隐私、骚扰、侵害、中伤、粗 俗、猥亵、或其它道德上令人反感的内容； l 发布可能引发未成年人模仿不安全行为或违反社会公德行为、诱导未成年人 不良嗜好等内容的； l 不当评述自然灾害、重大事故等灾难的； l 煽动人群歧视、地域歧视等的； l 含有中国法律、法规、规章、条例以及任何具有法律效力之规范所限制或禁 止的其它内容的。 （2）为任何非法目的而访问携程平台或使用携程产品/服务，或未经允许，利 用携程平台从事以下活动： l 未经允许，进入
-- 攻略社区 --


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$r=Invoke-WebRequest -Uri '"'https://lbs.amap.com/api/webservice/summary' -UseBasicParsing -TimeoutSec 20; "'$html=[Text.Encoding]::UTF8.GetString($r.RawContentStream.ToArray()); [regex]::Matches($html,'"'<a["'^>]+href="([''^"]+)"[''^>]*>(.*?)</a>'"','Singleline') | ForEach-Object { "'$txt=($_.Groups[2].Value -replace '"'<["'^>]+>'"','' -replace '\\s+','').Trim(); if("'$txt -match '"'公交|交通路况|路径规划'){ \""'$txt -> $($_.Groups[1].Value)" } }' in c:\Users\h\Documents\New project 2
 succeeded in 21130ms:
Invoke-WebRequest : The operation has timed out.
At line:2 char:4
+ $r=Invoke-WebRequest -Uri 'https://lbs.amap.com/api/webservice/summar ...
+    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequest) [Invoke-WebRequest], WebExc 
   eption
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Commands.InvokeWebRequestCommand
 
You cannot call a method on a null-valued expression.
At line:2 char:106
+ ... eoutSec 20; $html=[Text.Encoding]::UTF8.GetString($r.RawContentStream ...
+                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (:) [], RuntimeException
    + FullyQualifiedErrorId : InvokeMethodOnNull
 

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$r=Invoke-WebRequest -Uri '"'https://lbs.amap.com/api/webservice/summary' -UseBasicParsing -TimeoutSec 60; "'$html=[Text.Encoding]::UTF8.GetString($r.RawContentStream.ToArray()); [regex]::Matches($html,'"'<a["'^>]+href="([''^"]+)"[''^>]*>(.*?)</a>'"','Singleline') | ForEach-Object { "'$txt=($_.Groups[2].Value -replace '"'<["'^>]+>'"','' -replace '\\s+','').Trim(); if("'$txt -match '"'公交|交通路况|路径规划'){ \""'$txt -> $($_.Groups[1].Value)" } }' in c:\Users\h\Documents\New project 2
 succeeded in 4050ms:
货车路径规划专业的货车路径规划服务 -> /api/logistic-service/guide/wagon_path/truck-route-plan-basis
公交信息查询查询公交信息 -> /api/webservice/guide/api-advanced/bus-inquiry
交通路况查询查询交通态势情况 -> /api/webservice/guide/api-advanced/traffic-situation-inquiry
高级路径规划高级路径规划等能力 -> /api/webservice/guide/api-advanced/advanced-path
路径规划 -> /api/webservice/guide/api/direction
路径规划2.0 -> /api/webservice/guide/api/newroute
公交信息查询 -> /api/webservice/guide/api-advanced/bus-inquiry
高级路径规划 -> /api/webservice/guide/api-advanced/advanced-path

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$urls=@('"'https://lbs.amap.com/api/webservice/guide/api-advanced/bus-inquiry','https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry'); foreach("'$u in $urls){ $r=Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 30; $html=[Text.Encoding]::UTF8.GetString($r.RawContentStream.ToArray()); $text=($html -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); \"URL:"'$u`nTITLE:$(([regex]::Match($html,'"'<title["'^>]*>(.*?)</title>'"','Singleline').Groups[1].Value -replace '\\s+',' ').Trim())\"; foreach("'$pat in @('"'产品介绍','公交','实时','交通态势','URL','extensions')){ \"-- "'$pat --"; $i=$text.IndexOf($pat); if($i -ge 0){$start=[Math]::Max(0,$i-160); $len=[Math]::Min(560,$text.Length-$start); $text.Substring($start,$len)} }; "" }' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$u='"'https://lbs.amap.com/api/webservice/guide/api-advanced/search'; "'$r=Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 30; $html=[Text.Encoding]::UTF8.GetString($r.RawContentStream.ToArray()); $text=($html -replace '"'<["'^>]+>'"',' ' -replace '\\s+',' '); foreach("'$pat in @('"'ID 查询','rating','photos','https://restapi.amap.com/v3/place/detail','AOI 边界')){ \"-- "'$pat --"; $i=$text.IndexOf($pat); if($i -ge 0){$start=[Math]::Max(0,$i-180); $len=[Math]::Min(720,$text.Length-$start); $text.Substring($start,$len)} }' in c:\Users\h\Documents\New project 2
 succeeded in 31050ms:
-- ID 查询 --
-- rating --
-- photos --
-- https://restapi.amap.com/v3/place/detail --
-- AOI 边界 --
Invoke-WebRequest : The operation has timed out.
At line:2 char:72
+ ... search'; $r=Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 30 ...
+                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequest) [Invoke-WebRequest], WebExc 
   eption
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Commands.InvokeWebRequestCommand
 
You cannot call a method on a null-valued expression.
At line:2 char:131
+ ... eoutSec 30; $html=[Text.Encoding]::UTF8.GetString($r.RawContentStream ...
+                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (:) [], RuntimeException
    + FullyQualifiedErrorId : InvokeMethodOnNull
 

 succeeded in 33608ms:
URL:https://lbs.amap.com/api/webservice/guide/api-advanced/bus-inquiry
TITLE:
-- 产品介绍 --
-- 公交 --
-- 实时 --
-- 交通态势 --
-- URL --
-- extensions --

URL:https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry
TITLE:交通态势查询-高级 API 文档-开发指南-Web服务 API | 高德地图API
-- 产品介绍 --
[0]; s.parentNode.insertBefore(hm, s); })(); window._AMapSecurityConfig = { serviceHost: location.origin + '/AMapService' }; 控制台 登录 注册 退出 我的消息 云图市场 应用管理 GeoHUB 产品介绍 产品介绍 高德开放平台产品介绍 查看全部文档 搜索定位 鸿蒙星河版定位SDK HOT 鸿蒙星河版定位SDK 搜索 HOT 位置、周边、行政区、ID等查询接口 API JS Android iOS 定位 HOT 基于LBS的定位服务 API Android iOS 地理/逆地理编码 位置名称与经纬度之间转换服务 API JS Android iOS 地理围栏 虚拟空间围栏服务 API Android iOS 天气查询 查询目标区域当前/未来天气 智能硬件定位 通过基站、Wifi获取位置信息 路线导航 鸿蒙星河版导航SDK NEW 鸿蒙星河版导航SDK 导航 HOT 轻松地在APP中加入导航能力 Android iOS 路线规划 HOT 提供步行、驾车等规划能力 API JS Android iOS 猎鹰服务 提供专业轨迹管理服务 API Android iOS 货车路径规划 专业的
-- 公交 --
力 Android iOS 路线规划 HOT 提供步行、驾车等规划能力 API JS Android iOS 猎鹰服务 提供专业轨迹管理服务 API Android iOS 货车路径规划 专业的货车路径规划服务 API Android iOS 智能调度引擎 智能外勤调度，提升效益 物流服务 提供智慧物流API服务接口 公交信息查询 查询公交信息 交通路况查询 查询交通态势情况 高级路径规划 高级路径规划等能力 地图产品 鸿蒙星河版地图SDK HOT 鸿蒙星河版-轻量地图SDK 动态地图 HOT 动态地图展示、配置 API JS Android iOS HarmonyOS 3D地图 HOT 3D动态地图展示、配置 地铁图 简单易用的移动端地铁线路图开发接口 JS Android iOS 静态地图 灵活地将高德地图迁入应用网页 3D地形图 卫星地形图还原真实地形地貌 高级地图工具 世界地图 NEW 自定义地图 地图数据可视化 (LOCA) 地图数据中心 (GeoHUB) 坐标拾取器 高德地图URI Web 高德地图URI APP 三维模型转换 微信小程序插件 地图Flutter插件 地图名片 高德地图小程序 地图小程序 客户管理 员工管理 送货提效 地图小程序API 解决方案 解决方案 提供各行业LBS解决
-- 实时 --
P 三维模型转换 微信小程序插件 地图Flutter插件 地图名片 高德地图小程序 地图小程序 客户管理 员工管理 送货提效 地图小程序API 解决方案 解决方案 提供各行业LBS解决方案 空间智能 NEW 提供LBS领域的Agent解决方案 智能手表 NEW 提供智能守护与运动出行解决方案 智能眼镜 NEW 智能眼镜实时导航及智慧出行解决方案 世界地图 NEW 面向开发者提供全球范围内LBS服务 智能两轮车 NEW 合规精确的两轮车场景导航 手机银行 NEW 提供手机银行APP地图应用 网格化营销 NEW 提供银行网格化营销场景应用 智慧交通 优化交通资源配置，赋能智慧交通系统 出行 提供网约车等出行场景解决方案 O2O 到店、到家等多种O2O业务解决方案 上门服务调度 提供上门业务调度解决方案 三农场景可视化 NEW 提供乡村振兴三农场景应用 社交 社交应用位置服务解决方案 运动 运动类应用解决方案 智能硬件 智能硬件LBS解决方案 零售铺货 零售快消行业，渠道铺货解决方案 智慧物流 针对物流行业提供解决方案 电商 电商物流行业解决方案 地址服务 综合地址服务，满足客户全景化需求 企业智图 一张图轻松管理企业数据 智能派单 一站式精准智能派单解决方案 文档与支持 文档与支持 高德开放平台开发文档与服
-- 交通态势 --
 交通态势查询-高级 API 文档-开发指南-Web服务 API | 高德地图API var _hmt = _hmt || []; (function () { var hm = document.createElement("script"); hm.src = "https://hm.baidu.com/hm.js?c8ac07c199b1c09a848aaab761f9f909"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s); })(); window._AMapSecurityConfig = { serviceHost: location.origin + '/AMapService' }; 控制台 登录 注册 退出 我的消息 云图市场 应用管理 GeoHUB 产品介绍 产品介绍 高德开放平台产品介绍 查看全部文档 搜索定位 鸿蒙星河版定位SDK HOT 鸿蒙星河版定位SDK 搜索 HOT 位置、周边、行政区、ID等查询接口 API JS Android iOS 定位 HOT 基于LBS的定位服务 API Android iOS 地理/逆地理编码 位置名称与经纬度之间转
-- URL --
top:35px; height: 22px; font-weight: 400; font-size: 15px; color: #4c5362; letter-spacing: 0; line-height: 22px; } 1 第一步 申请 【Web服务API】 密钥（Key） 2 第二步 拼接 HTTP 请求 URL，第一步申请的 Key 需作为必填参数一同发送 3 第三步 接收 HTTP 请求返回的数据（JSON 或 XML 格式），解析数据 如无特殊声明，接口的输入参数和输出数据编码全部统一为 UTF-8 。 成为开发者并创建 Key 为了正常调用 Web 服务 API ，请先注册成为高德开放平台开发者，并申请 Web 服务的 key ，点击 具体操作 。 指定线路交通态势查询 指定线路交通态势查询 API 服务地址 URL 请求方式 https://restapi.amap.com/v3/traffic/status/road?parameters GET .parameters-text { font-size: 15px; font-weight: 400; word-break: break-word; margin: 14px 0; } .parameters-text-span 
-- extensions --
ode 城市编码 由于开发者可能对城市称呼和高德的称呼存在差异（例如开发者称呼为深圳，但高德仅识别深圳市）。 故强烈建议使用 adcode，不使用 city 字段 adcode 信息可参考 城市编码表 获取 city 和 adcode 必填一个 无 output 返回数据格式类型 可选：JSON、XML 否 JSON extensions 控制返回内容 可选：base，all base：返回基本信息 all：返回基本+详细信息 否 base 服务示例 https://restapi.amap.com/v3/traffic/status/road?name=北环大道&amp;adcode=440300&amp;key=&lt;用户的key&gt; 参数 值 备注 必选 level 1 2 3 4 5 6 指定道路等级，下面各值代表的含义： 1：高速（京藏高速） 2：城市快速路、国道(西三环、103 国道) 3：高速辅路（G6 辅路） 4：主要道路（长安街、三环辅路） 5：一般道路（彩和坊路） 6：无名道路 注：以上值是包含关系，如 5 除自身道路以外还包含 1，2，3，4 的道路 是 name 道路名称 是 city 由于开发者可能对城市称呼和高德的称呼存在差异（例如开发者称呼为深圳，但高德仅识别深圳市）

Invoke-WebRequest : The operation has timed out.
At line:2 char:188
+ ...  $urls){ $r=Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 30 ...
+                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequest) [Invoke-WebRequest], WebExc 
   eption
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Commands.InvokeWebRequestCommand
 
You cannot call a method on a null-valued expression.
At line:2 char:247
+ ... eoutSec 30; $html=[Text.Encoding]::UTF8.GetString($r.RawContentStream ...
+                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (:) [], RuntimeException
    + FullyQualifiedErrorId : InvokeMethodOnNull
 

codex
I have enough primary/legal material now. I’m going to create the report under `v2/research`, keeping the recommendations conservative: link and cite official/public pages where terms allow normal reference, but avoid copying ratings/reviews from platforms whose terms forbid unlicensed reuse.
  ✓ Gather platform evidence and terms
  → Draft markdown report with citations
  • Save report and verify URL/finding counts
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-ChildItem -Force v2; Get-ChildItem -Force v2\\research -ErrorAction SilentlyContinue" in c:\Users\h\Documents\New project 2
 succeeded in 527ms:


    目录: C:\Users\h\Documents\New project 2\v2


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----         2026/5/10     22:52                .omc                                                                 
d-----         2026/5/10     22:56                .react-router                                                        
d-----         2026/5/10     22:41                .vite-react-ssg-temp                                                 
d-----         2026/5/10     23:03                build                                                                
d-----         2026/5/10     22:42                dist                                                                 
d-----         2026/5/10     22:48                node_modules                                                         
d-----          2026/5/9     17:43                public                                                               
d-----         2026/5/10     22:42                research                                                             
d-----         2026/5/10     22:50                src                                                                  
-a----          2026/5/9     17:35            253 .gitignore                                                           
-a----          2026/5/9     17:35            591 eslint.config.js                                                     
-a----          2026/5/9     17:41            592 index.html                                                           
-a----         2026/5/10     22:51         161316 package-lock.json                                                    
-a----         2026/5/10     22:51           1019 package.json                                                         
-a----         2026/5/10     22:49            331 react-router.config.ts                                               
-a----          2026/5/9     17:35           2425 README.md                                                            
-a----          2026/5/9     17:35            617 tsconfig.app.json                                                    
-a----          2026/5/9     17:35            119 tsconfig.json                                                        
-a----         2026/5/10     22:50            617 tsconfig.node.json                                                   
-a----          2026/5/9     23:06              0 vite-dev.err.log                                                     
-a----          2026/5/9     23:13            335 vite-dev.out.log                                                     
-a----         2026/5/10     22:49            290 vite.config.ts                                                       


    目录: C:\Users\h\Documents\New project 2\v2\research


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
-a----          2026/5/9     23:54          41041 alipay-wechat-foreigner-registration.md                              
-a----         2026/5/10      0:22          38924 blog-platform-bureau-sweep.md                                        
-a----         2026/5/10     22:40          62700 city-beijing-deep.md                                                 
-a----         2026/5/10     22:40          55963 city-guangzhou-deep.md                                               
-a----         2026/5/10     22:37          53906 city-shanghai-deep.md                                                
-a----         2026/5/10     22:47          58439 city-shenzhen-deep.md                                                
-a----         2026/5/10     22:46          43364 seo-01-landscape.md                                                  
-a----         2026/5/10     22:47          42832 seo-02-decompose-winners.md                                          
-a----         2026/5/10     22:34          43045 seo-04-multi-engine.md                                               
-a----         2026/5/10     22:35          30846 seo-05-our-action-plan.md                                            
-a----         2026/5/10      9:55          27203 ugc-qa-implementation.md                                             



apply patch
patch: completed
c:\Users\h\Documents\New project 2\v2\research\china-platforms-02-maps-reviews.md
diff --git a/v2/research/china-platforms-02-maps-reviews.md b/v2/research/china-platforms-02-maps-reviews.md
new file mode 100644
index 0000000000000000000000000000000000000000..2885ea2dec3d7b815cf792554695d24f052af27f
--- /dev/null
+++ b/v2/research/china-platforms-02-maps-reviews.md
@@ -0,0 +1,452 @@
+# China domestic maps/reviews platforms for tourism intel
+
+Last checked: 2026-05-10  
+Scope: 大众点评 Dianping, 美团 Meituan, 高德地图 AMap, 携程 Ctrip China-side, 飞猪 Fliggy.  
+Project use case: a foreign-tourist-to-China information site that wants to understand what locals actually visit without copying protected platform content.
+
+## Executive read
+
+Finding 1. The best "locals actually go here" signal is not a single source. It is a triangulation of Dianping/Meituan review behavior, AMap search/navigation heat, and Ctrip travel Q&A/reviews.
+
+Finding 2. The most legally usable layer is outbound linking plus original editorial synthesis. Directly republishing ratings, review counts, photos, review text, top dishes, or ranked lists from Dianping/Meituan/Ctrip/Fliggy is high risk unless covered by an explicit license.
+
+Finding 3. AMap is the only platform in this set with a broad public developer API suitable for production integration, but its terms still restrict extraction, standalone display, commercial use without permission, and cross-border handling of China map data.
+
+Finding 4. The best open editorial patterns to imitate are: city/category list pages, "top 20 visible, full list in app" teaser rankings, short contextual tags, Q&A snippets, season/use-case sublists, and separate official/UGC/review modules.
+
+Finding 5. For foreign tourists, Ctrip/Trip.com remains the safest booking layer. Dianping/Meituan/AMap are better as editor research inputs and link-out sources than as data sources to ingest.
+
+## A. 大众点评 Dianping
+
+### Public web access pattern
+
+Finding 6. Dianping's desktop city pages are readable at:
+
+- Beijing: https://www.dianping.com/beijing
+- Shanghai: https://www.dianping.com/shanghai
+- Guangzhou: https://www.dianping.com/guangzhou
+- Shenzhen: https://www.dianping.com/shenzhen
+
+Finding 7. Those city pages expose city IDs and English city slugs in page data. Observed IDs: Shanghai `1`, Beijing `2`, Guangzhou `4`, Shenzhen `7`.
+
+Finding 8. The city pages expose broad IA categories that matter for tourism: 美食, 酒店, 周边游, 景点, 展馆展览, 动植物园, 温泉, 滑雪, 购物, 热门商圈, and subway-line browsing.
+
+Finding 9. Individual shop pages are city-agnostic and use `/shop/{id}`. The mobile page is often the most indexable public surface, for example:
+
+- https://m.dianping.com/shop/2116402?msource=applemaps
+- https://m.dianping.com/shop/68075700?msource=applemaps
+- https://m.dianping.com/shop/814921852?msource=applemaps
+- https://m.dianping.com/shop/131544661?msource=applemaps
+
+Finding 10. Search snippets and public HTML show the common page title pattern: `【店名】电话_地址_价格_营业时间_商圈/菜系团购 - 大众点评网`. The title suggests a rich merchant profile, but much of the actual page body is masked or app-gated.
+
+### Visible to non-logged-in foreign users
+
+Finding 11. On the observed mobile shop pages, non-logged-in users can often see: merchant name, star rating, per-capita price, neighborhood/category, list/ranking badges, open/closed state, photo count, discount/tuan-gou placeholders, recommended dishes, and per-dish recommendation counts.
+
+Finding 12. Example: the public mobile page for 聚点串吧 showed rating, per-capita price, "新街口商圈 烤串", a local hot-list badge, a visible `2万+` photo/review-like count, and recommended dishes such as 老北京疙瘩汤, 爆香小嫩牛, 泰式蜜汁鸡翅.
+
+Finding 13. Addresses are often partially masked on public mobile pages, e.g. `赵登禹路1******`, and hours can be replaced by app-gated copy such as `APP内查看商户信息`.
+
+Finding 14. Phone numbers were not visible in the observed non-logged-in page body, despite "电话" appearing in the SEO page title.
+
+Finding 15. Deep photos, complete menus, full review streams, full addresses, queue/wait signals, and some deal prices are pushed into the app or login flow.
+
+### Hidden behind login/app walls
+
+Finding 16. The strongest Dianping signals for "locals actually visit" are mostly not safely extractable from the public web: review text, reviewer identity/level, queueing, current popularity, deal conversion, detailed photos, and stable full address/phone data.
+
+Finding 17. Dianping anti-scraping is active. In one observed request, a public mobile shop URL redirected to a Meituan verification center with `spiderindefence` in the URL.
+
+### 必吃榜
+
+Finding 18. The official public URL https://www.dianping.com/biyingbang redirected to Dianping login/citylist in my non-logged-in check. Treat the full list as app/login-first.
+
+Finding 19. The latest fully released 必吃榜 available in public media at the time of research was the 2025 list, released on 2025-06-25, with 144 cities/regions and 3,091 restaurants. Public reports say Shanghai, Beijing, Chengdu, Chongqing, and Shenzhen were top-five cities by listed restaurant count.
+
+Finding 20. The 2026 必吃榜 was not final as of 2026-05-10. Public reports say the 2026 entrant/shortlist was announced on 2026-04-23, covering 264 cities/regions and 4,326 restaurants, with Shanghai, Beijing, Chengdu, Chongqing, Guangzhou, Shenzhen, Xi'an, Wuhan, Suzhou, and Nanjing in the top ten by entrant count. Final release was reported as scheduled for 2026-06-24.
+
+Finding 21. For our four cities, the shortlist/final-list coverage is strong: Beijing, Shanghai, Guangzhou, and Shenzhen all appear in national top-city coverage for 必吃榜.
+
+Finding 22. Update cadence: annual. The observed pattern is spring shortlist/publicity followed by a mid-year final release.
+
+Useful URLs:
+
+- https://www.dianping.com/biyingbang
+- https://www.news.cn/tech/20250626/c4e830a0513147bf9505c9da54318067/c.html
+- https://m.bjnews.com.cn/detail/1750911314168601.html
+- https://www.dutenews.com/n/article/8913274
+- https://www.bbtnews.com.cn/2026/0424/591528.shtml
+- https://cbgc.scol.com.cn/news/7527616
+- https://society.yunnan.cn/system/2026/04/23/033978393.shtml
+
+### 黑珍珠餐厅指南
+
+Finding 23. Black Pearl is a Meituan/Dianping-owned high-end restaurant guide, often described as China's domestic answer to Michelin.
+
+Finding 24. The 2026 public official-ish Meituan Index report says the 2026 Black Pearl guide was released on 2026-01-28, with 263 mainland China restaurants, 7 upgraded restaurants, and 46 new entrants.
+
+Finding 25. The report says the guide is published by Meituan/Dianping and assessed by professional judges across dish quality, service, environment, inheritance, and innovation.
+
+Finding 26. The desktop `https://www.dianping.com/blackpearl` URL redirected to login/citylist in my check. The public web is usable for meta/report-level facts; the full browseable restaurant list is not reliably public without app/login.
+
+Finding 27. Coverage in 北上广深 is strong, but the safest citable source is the official annual report/news release, not scraped restaurant cards.
+
+Useful URLs:
+
+- https://www.dianping.com/blackpearl
+- https://index.meituan.com/reports/meituan-black-pearl-2026/
+- https://about.meituan.com/news/NN260128167003529
+- https://www.bjwmb.gov.cn/wmdt/cyq/10119347.html
+
+### Citing Dianping ratings/review counts
+
+Finding 28. Do not treat Dianping ratings as equivalent to Google Maps ratings for free third-party reuse. Meituan's IP statement says Meituan-provided content including pages, text, images, rankings, layout, data, and information belongs to Meituan unless otherwise stated.
+
+Finding 29. The same IP statement says, absent legal exception or written permission, no entity/person may copy, reproduce, quote, link to, or scrape Meituan platform content or information in whole or in part.
+
+Finding 30. Practical recommendation: use Dianping ratings/review counts as editor research only. On our site, write our own recommendation and link to the Dianping page or official report where useful. Avoid displaying "Dianping rating: 4.8 / 60k reviews" unless licensed.
+
+Useful URLs:
+
+- https://rules-center.meituan.com/m/detail/guize/69
+- https://h5.dianping.com/app/m-static-base-page/agreement.html?product=dpapp
+- https://open.dianping.com/
+- https://developer.meituan.com/
+
+### Open data / partnerships
+
+Finding 31. There is no obvious public tourism/review open dataset for foreign publishers. The available official platform surfaces are business/merchant/integration oriented: 北极星开放平台 and 美团技术服务合作中心.
+
+Finding 32. A legitimate integration would need a commercial partnership or API terms that explicitly permit the desired display and geography. Do not use third-party scraping APIs.
+
+## B. 高德地图 AMap / Gaode
+
+### Public attraction/landmark pages
+
+Finding 33. AMap place URL patterns observed:
+
+- `https://www.amap.com/place/{POI_ID}`
+- `https://gaode.com/poi/{POI_ID}`
+- `https://ditu.amap.com/place/{POI_ID}`
+- Search shell: `https://www.amap.com/search?query={encodedName}&city={adcode}`
+
+Example checked: https://www.amap.com/place/B000A8UIN8 and https://gaode.com/poi/B000A8UIN8.
+
+Finding 34. The public POI page shell is accessible, but the HTML response is a JavaScript app shell, not a stable indexable text profile. Do not rely on static HTML extraction for POI details.
+
+Finding 35. AMap's official Web Service API provides the structured POI route. The Search POI docs include keyword search, around search, polygon search, and ID query by POI ID.
+
+Finding 36. API-returnable POI fields include name/type/typecode, address, location, telephone, website, business area, indoor map data, tags, `biz_ext.rating`, `biz_ext.cost`, and photo URLs when `extensions=all`.
+
+Finding 37. The API docs explicitly state that rating exists only for restaurants, hotels, attractions, and cinemas, and that photos are returned with `extensions=all`.
+
+Useful URLs:
+
+- https://www.amap.com/place/B000A8UIN8
+- https://gaode.com/poi/B000A8UIN8
+- https://ditu.amap.com/place/B000A8UIN8
+- https://lbs.amap.com/api/webservice/summary
+- https://lbs.amap.com/api/webservice/guide/api-advanced/search
+
+### AMap web vs app crowd data
+
+Finding 38. AMap web ranking pages expose curated rankings and scores, not live crowd density. The pages show "完整榜单请在高德地图APP内查看", which confirms the app is the deeper surface.
+
+Finding 39. If AMap exposes crowding, queue, indoor navigation, or real-time scenic-area comfort signals, assume they are app/product-specific unless an official API endpoint says otherwise. I found official API docs for traffic status and bus inquiry, but not a public scenic crowd-density API suitable for embedding.
+
+### 高德指南 / official travel recommendation
+
+Finding 40. AMap's public ranking pages are highly relevant. URL pattern:
+
+- Beijing scenic: https://www.amap.com/ranking/beijing/scenic
+- Shanghai scenic: https://www.amap.com/ranking/shanghai/scenic
+- Guangzhou scenic: https://www.amap.com/ranking/guangzhou/scenic
+- Shenzhen scenic: https://www.amap.com/ranking/shenzhen/scenic
+- Ranking plaza: https://ranks.amap.com/
+- Ranking browse: https://ranks.amap.com/ranking
+
+Finding 41. These pages show 2025 高德状元榜/扫街榜 style lists with "全年综合分", tags, and short editorial blurbs. Beijing's scenic page showed 64 total places but only top 20 on web; Shanghai 47; Guangzhou 43; Shenzhen 29.
+
+Finding 42. Beijing examples from the public page: 故宫博物院, 中国国家博物馆, 天坛公园, 什刹海, 颐和园, each with a score and contextual tags. This is a strong "visited/search/navigation heat" editorial signal.
+
+Finding 43. AMap's public/media explanation says 高德指南 rankings use real AMap search/navigation data plus user evaluations and merchant quality, which is exactly the "locals actually go here" pattern we want to emulate editorially.
+
+Useful URLs:
+
+- https://www.amap.com/ranking/beijing/scenic
+- https://www.amap.com/ranking/shanghai/scenic
+- https://www.amap.com/ranking/guangzhou/scenic
+- https://www.amap.com/ranking/shenzhen/scenic
+- https://ranks.amap.com/
+- https://ranks.amap.com/ranking
+- https://www.sznews.com/news/content/2025-01/20/content_31444248.htm
+- https://www.pingwest.com/w/218091
+
+### Transit / congestion / embed exposure
+
+Finding 44. AMap Web Service API exposes traffic status query endpoints such as `https://restapi.amap.com/v3/traffic/status/road?parameters`, requiring a key.
+
+Finding 45. AMap Web Service API exposes route planning, including walking, transit, driving, and distance calculation. The route docs caution that same-origin/destination results may change as road/data/algorithms change.
+
+Finding 46. Public transit live arrival and subway transfer ergonomics are primarily app/native product experiences. I did not find a public no-key web embed for live arrivals. For our site, the realistic legal path is "open in AMap" deep links or licensed API route estimates, not embedding live AMap transit boards.
+
+Useful URLs:
+
+- https://lbs.amap.com/api/webservice/guide/api/direction
+- https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry
+- https://lbs.amap.com/api/webservice/guide/api-advanced/bus-inquiry
+- https://lbs.amap.com/api/javascript-api-v2/guide/abc/prepare
+
+### AMap public API and developer requirements
+
+Finding 47. AMap Web Service API is documented as open to all users, but requires an application key. The setup flow is: register as AMap developer, create an application, obtain a key.
+
+Finding 48. Personal and enterprise developers get different quotas; quota details are now routed to pricing/control-console pages. Older/current docs still state that service call limits and QPS quota depend on account status and can be checked/upgraded in the console.
+
+Finding 49. For foreign developers, I found no official English page guaranteeing easy foreign KYC. The practical blocker is likely account registration, phone/Alibaba identity flows, business verification, and China map-data compliance.
+
+Useful URLs:
+
+- https://lbs.amap.com/api/webservice/summary
+- https://lbs.amap.com/api/webservice/guide/tools/flowlevel
+- https://lbs.amap.com/api/webservice/guide/api-advanced/search
+- https://lbs.amap.com/api/webservice/guide/api/direction
+
+### Legal / redistribution
+
+Finding 50. AMap terms are restrictive for our use case. They define relevant content to include map data, traffic information, address data, merchant lists, navigation voice, and other content.
+
+Finding 51. AMap grants a personal, non-transferable, revocable, non-exclusive license and says commercial use requires separate written agreement or written permission.
+
+Finding 52. AMap terms prohibit attempting to extract source code or original data; using crawlers/scrapers/indexers; storing/caching/retrieving/indexing service/data; and using AMap content separately from AMap products/services.
+
+Finding 53. Crucially for a foreign site, AMap terms say users may not download China domestic map data outside China or transfer, store, or provide China domestic map data overseas.
+
+Recommendation: AMap is usable only through compliant API/embed/deep-link workflows, with counsel review for cross-border data handling. Do not build a cached AMap-derived POI database offshore.
+
+Useful URL:
+
+- https://cache.amap.com/h5/h5/publish/241/index.html
+
+## C. 携程 Ctrip China-side
+
+### What is unique vs Trip.com
+
+Finding 54. Ctrip's China-side `you.ctrip.com` is much deeper than a pure booking site. It has destination pages, scenic pages, UGC travel notes, Q&A, user comments, rankings, photo modules, opening hours, policy details, and Chinese-local operational tips.
+
+Finding 55. Ctrip scenic pages can be publicly read without login. Example: 鸟巢 page exposed attraction score, review count, address, opening hours, official phone, notice text, detailed intro, photo strategy, ticket/benefit policies, Q&A, and recent user reviews.
+
+Finding 56. Ctrip city scenic lists expose public IA patterns: "必打卡景点榜", "夜游必打卡景点榜", "亲子景点榜", "赏花踏青景点榜", "滑雪景点榜", "温泉景点榜", plus paginated attraction cards.
+
+Finding 57. Ctrip travel-note list pages expose title, author, publish/reply dates, trip duration, spend, travel party, view/comment/like counts, and pagination.
+
+Finding 58. Ctrip Q&A pages are publicly readable and very valuable for foreign-tourist pain points: reservation requirements, IDs, lockers, elderly suitability, weather, transport timing, hotel practicalities, and ticket scarcity.
+
+Useful URL patterns:
+
+- City scenic list: https://you.ctrip.com/sight/peking1.html
+- Attraction detail: https://you.ctrip.com/sight/beijing1/52626.html
+- Travel notes list: https://you.ctrip.com/travels/beijing1.html
+- Travel note detail: https://you.ctrip.com/travels/beijing1/4126037.html
+- Q&A root: https://you.ctrip.com/asks/
+- City Q&A: https://you.ctrip.com/asks/beijing1.html
+- Community guide: https://you.ctrip.com/htmlpages/guide.html/
+
+### Community guide / public reading
+
+Finding 59. Ctrip's own community guide describes the platform as channels for destination info, travel notes, Q&A, and official destination/tourism bureau info. It says the information comes from real community users and is intended to help planning/sharing.
+
+Finding 60. Public reading is allowed by product design, but republication is not. Use it as editor research and link out.
+
+### Booking widgets and foreign travelers
+
+Finding 61. Ctrip China-side is useful for local inventory and operations: domestic hotels, trains, activities, tickets, China customer-service flows, Chinese names, and sometimes more local Q&A than Trip.com.
+
+Finding 62. For actual foreign tourists, Trip.com is still the cleaner front door for English UI, foreign cards, international customer service, and passport-friendly flows. The Chinese Ctrip site may require Chinese literacy, Chinese phone/SMS, China-specific payment, and local identity assumptions.
+
+Finding 63. Our site should not embed Ctrip booking widgets unless there is an affiliate/partner agreement. Use text links or "book via Trip.com/Ctrip" buttons under affiliate rules.
+
+### Legal / redistribution
+
+Finding 64. Ctrip's user agreement forbids commercial use of any Ctrip platform data without permission, including use by web crawler, copy, propagation, or other means.
+
+Finding 65. Ctrip's user agreement says Ctrip-owned platform content, including pages, text, images, audio/video, data, and information, belongs to Ctrip and cannot be used or made into derivatives without written consent.
+
+Finding 66. Ctrip攻略社区 user rules say third parties may not obtain/use any part of the site or any content/service/material directly or indirectly available through the site for non-private or commercial purposes without explicit written permission.
+
+Recommendation: Ctrip is referenceable, not ingestible. Link to public Ctrip pages and write our own summaries. Do not display Ctrip ratings/review counts as a copied data layer.
+
+Useful URLs:
+
+- https://contents.ctrip.com/activitysetupapp/mkt/index/agreement202311
+- https://contents.ctrip.com/activitysetupapp/mkt/index/userrule
+- https://docs.c-ctrip.com/files/6/unc_agreement_pdf/1tm3r12000hb2zpof8D77.pdf
+- https://pages.c-ctrip.com/public/encroachment.html
+
+## D. 美团 Meituan
+
+### Web vs app
+
+Finding 67. Meituan is the most app/transaction-driven platform in this set. The desktop homepage is mostly corporate; some city/category paths redirect or fail for non-app/public browsing.
+
+Finding 68. The mobile app download page explicitly describes the consumer product as covering food, delivery, hotel booking, tourism deals, flights, train tickets, movie tickets, scenic tickets, and group tours.
+
+Finding 69. The same page states Meituan provides consumer reviews, merchant ratings, and merchant information query functions. This confirms review/merchant-data existence but not public reuse rights.
+
+Useful URLs:
+
+- https://www.meituan.com/
+- https://bj.meituan.com/
+- https://i.meituan.com/client/meituan
+
+### Meituan vs Dianping
+
+Finding 70. Meituan and Dianping merged in 2015. Public reporting says the merged entity integrated resources while retaining brands/businesses.
+
+Finding 71. Practical differentiation for tourism research: Dianping is the local-life content/review/discovery layer; Meituan is the transaction layer for coupons, tickets, hotels, deals, and app conversion. Data overlaps, but user intent differs.
+
+Finding 72. For our project, Dianping helps answer "what locals praise and rank"; Meituan helps answer "what people buy/book/use now." But Meituan's public web leakage is weak.
+
+Useful URLs:
+
+- https://m.21jingji.com/article/20151008/herald/d1a64f593c439e3c4f722d415556d582.html
+- https://finance.sina.cn/usstock/hlwgs/2015-11-12/tech-ifxkrwks3777633.d.html
+- https://finance.sina.com.cn/chanjing/gsnews/20151009/020923424040.shtml
+
+### Tourism / 景点 / 玩乐 coverage
+
+Finding 73. Meituan app product coverage includes 旅游周边: flights, train tickets, scenic tickets, and group tours. This likely covers Beijing, Shanghai, Guangzhou, and Shenzhen, but the useful browsing happens in-app.
+
+Finding 74. Public web pages do not provide enough stable tourism data to build city guides. Treat Meituan as blocked for extraction and referenceable only for high-level product availability or editor app checks.
+
+### Legal
+
+Finding 75. Meituan legal treatment is the same family as Dianping. The IP statement explicitly covers rankings, data, and information, and prohibits unlicensed copying, reproducing, quoting, linking, and technical scraping.
+
+## E. 飞猪 Fliggy
+
+### Public web data
+
+Finding 76. Fliggy's public desktop homepage is a booking portal, not a review/discovery corpus. Its title and page text cover flights, hotels, inns, vacation products, attraction tickets, and visas.
+
+Finding 77. The public homepage describes product coverage: flight booking, hotel booking, train tickets, vacation packages, attraction tickets, business travel, local transport, travel insurance, and Alibaba business travel.
+
+Finding 78. I did not find a public, indexable Fliggy equivalent of Dianping review pages or Ctrip's `you.ctrip.com` community depth. Most useful data is likely app/search/product-detail driven.
+
+Useful URLs:
+
+- https://www.fliggy.com/
+- https://www.fliggy.com/travel
+- https://www.alitrip.com/
+- https://rule.fliggy.com/
+
+### 旅游攻略 community
+
+Finding 79. Fliggy may have travel content in app/product flows, but I did not find a robust public web travel-guide community comparable to Ctrip攻略社区. Do not plan editorial extraction from Fliggy.
+
+### Foreign-card payment status
+
+Finding 80. Fliggy's merchant service agreement says merchants accept Alipay services, other Alipay-provided payment methods, or platform-supported payment methods. It also says Fliggy will continue expanding payment methods and rollout may be phased.
+
+Finding 81. I found no official Fliggy public page that guarantees foreign Visa/Mastercard acceptance for foreign tourists across attraction tickets/hotels/packages.
+
+Finding 82. Practical recommendation: do not send foreign tourists to Fliggy as a primary booking path unless testing a specific SKU/payment path. Use Trip.com/Ctrip, official attraction sites, or WeChat/Alipay mini-program guidance instead.
+
+### Legal
+
+Finding 83. Fliggy merchant agreement says Fliggy official products, technology, software, programs, data, and other information belong to Fliggy/affiliates; merchants agree not to commercially use other Fliggy platform data without approval, including copying, spreading, or disclosing other users' materials.
+
+Finding 84. Even where product titles/prices are visible, do not build a replicated Fliggy travel-product database without a partner agreement.
+
+Useful URLs:
+
+- https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231106103244276/20231106103244276_1_3_19922.pdf
+- https://rule.fliggy.com/
+
+## F. Practical conclusion for our project
+
+### What we can safely do
+
+Finding 85. Build our own POI and guide pages from original editorial research, official attraction/government sources, and licensed map APIs.
+
+Finding 86. Link out to Dianping, AMap, Ctrip, Meituan, and Fliggy pages where helpful, but avoid copying their proprietary data fields into our own UI.
+
+Finding 87. Use Dianping/Meituan internally to discover local restaurants, old shops, top dishes, neighborhoods, and whether a place is locally validated. Convert that into our own prose and recommendations.
+
+Finding 88. Use AMap ranking pages to understand search/navigation heat and city "must go" hierarchy. Use AMap API/deep links only in compliance with API terms and cross-border restrictions.
+
+Finding 89. Use Ctrip Q&A and recent reviews to detect operational friction: booking windows, ID/passport issues, luggage storage, elderly/child suitability, closures, crowd timing, and transport timing.
+
+Finding 90. Treat Fliggy primarily as a booking-market sanity check, not as a tourism-intel source.
+
+### Information architecture patterns worth copying, not the data
+
+Finding 91. Use city landing pages with category rows: food, sights, museums/exhibitions, night views, family, shopping, transit neighborhoods.
+
+Finding 92. Add "locals actually go" modules based on our own synthesis of: old-shop longevity, local neighborhood density, AMap navigation/search heat, Ctrip Q&A frequency, and repeated mentions across sources.
+
+Finding 93. Split rankings by intent, not just overall score: first-time must-see, rainy day, night view, family, low-walking, food street, old-local favorite, near subway, open late.
+
+Finding 94. Show "what is hidden behind Chinese apps" as traveller guidance: full reviews, current queues, exact deals, live crowding, and some ticket flows require local apps.
+
+Finding 95. Use source badges carefully:
+
+- "Editors checked Dianping/Meituan/AMap/Ctrip" is safer than "Dianping says 4.8".
+- "Open in AMap" is safer than copying AMap traffic/transit data.
+- "Read recent Ctrip Q&A" is safer than reproducing Q&A answers.
+
+### Source URL index
+
+1. https://www.dianping.com/beijing
+2. https://www.dianping.com/shanghai
+3. https://www.dianping.com/guangzhou
+4. https://www.dianping.com/shenzhen
+5. https://m.dianping.com/shop/2116402?msource=applemaps
+6. https://m.dianping.com/shop/68075700?msource=applemaps
+7. https://m.dianping.com/shop/814921852?msource=applemaps
+8. https://m.dianping.com/shop/131544661?msource=applemaps
+9. https://www.dianping.com/biyingbang
+10. https://www.dianping.com/blackpearl
+11. https://index.meituan.com/reports/meituan-black-pearl-2026/
+12. https://rules-center.meituan.com/m/detail/guize/69
+13. https://open.dianping.com/
+14. https://developer.meituan.com/
+15. https://www.amap.com/place/B000A8UIN8
+16. https://gaode.com/poi/B000A8UIN8
+17. https://lbs.amap.com/api/webservice/summary
+18. https://lbs.amap.com/api/webservice/guide/api-advanced/search
+19. https://www.amap.com/ranking/beijing/scenic
+20. https://www.amap.com/ranking/shanghai/scenic
+21. https://www.amap.com/ranking/guangzhou/scenic
+22. https://www.amap.com/ranking/shenzhen/scenic
+23. https://ranks.amap.com/
+24. https://lbs.amap.com/api/webservice/guide/api/direction
+25. https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry
+26. https://cache.amap.com/h5/h5/publish/241/index.html
+27. https://you.ctrip.com/htmlpages/guide.html/
+28. https://you.ctrip.com/sight/peking1.html
+29. https://you.ctrip.com/sight/beijing1/52626.html
+30. https://you.ctrip.com/travels/beijing1.html
+31. https://you.ctrip.com/asks/
+32. https://you.ctrip.com/asks/beijing1.html
+33. https://contents.ctrip.com/activitysetupapp/mkt/index/agreement202311
+34. https://contents.ctrip.com/activitysetupapp/mkt/index/userrule
+35. https://www.meituan.com/
+36. https://bj.meituan.com/
+37. https://i.meituan.com/client/meituan
+38. https://m.21jingji.com/article/20151008/herald/d1a64f593c439e3c4f722d415556d582.html
+39. https://www.fliggy.com/
+40. https://www.fliggy.com/travel
+41. https://rule.fliggy.com/
+42. https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231106103244276/20231106103244276_1_3_19922.pdf
+
+## Final platform classification
+
+| Platform | Classification | What is usable on our site | What is referenceable for editors | What is blocked / avoid |
+|---|---:|---|---|---|
+| 大众点评 Dianping | REFERENCEABLE | Outbound links to public shop/list/report pages; high-level statements from official news/reports with citation | Local restaurant discovery, top dishes, local badges, rough popularity, 必吃榜/黑珍珠 coverage | Republishing ratings, review counts, reviews, photos, top-dish counts, full list data, queue/deal signals without license |
+| 高德地图 AMap | USABLE WITH LICENSE / REFERENCEABLE | Official API/embed/deep links under AMap terms; public link-out to ranking pages | City scenic hierarchy, tags, navigation/search heat proxy, routing friction | Scraping/caching POI, traffic, transit, or map data; offshore transfer/storage of China map data; live crowd/transit embeds without permission |
+| 携程 Ctrip China-side | REFERENCEABLE | Outbound links to attraction, Q&A, guide, and booking pages; own editorial summaries | Practical travel Q&A, recent operational issues, attraction policies, route/time tips, Chinese-local reviews | Republishing Ctrip ratings, review counts, review text, photos, Q&A answers, or guide text commercially |
+| 美团 Meituan | BLOCKED / REFERENCEABLE | High-level product link-out or app download guidance | App-only check for ticket/deal availability and transaction signals | Extracting merchant ratings, review data, deals, tickets, or app-only tourism inventory |
+| 飞猪 Fliggy | BLOCKED / LOW-VALUE REFERENCEABLE | Link-out to Fliggy booking pages only where a specific booking path is tested | Price/inventory sanity check for Alibaba travel products | Review/community extraction, product database replication, claiming foreign-card acceptance without SKU-level testing |

diff --git a/v2/research/china-platforms-02-maps-reviews.md b/v2/research/china-platforms-02-maps-reviews.md
new file mode 100644
index 0000000000000000000000000000000000000000..2885ea2dec3d7b815cf792554695d24f052af27f
--- /dev/null
+++ b/v2/research/china-platforms-02-maps-reviews.md
@@ -0,0 +1,452 @@
+# China domestic maps/reviews platforms for tourism intel
+
+Last checked: 2026-05-10  
+Scope: 大众点评 Dianping, 美团 Meituan, 高德地图 AMap, 携程 Ctrip China-side, 飞猪 Fliggy.  
+Project use case: a foreign-tourist-to-China information site that wants to understand what locals actually visit without copying protected platform content.
+
+## Executive read
+
+Finding 1. The best "locals actually go here" signal is not a single source. It is a triangulation of Dianping/Meituan review behavior, AMap search/navigation heat, and Ctrip travel Q&A/reviews.
+
+Finding 2. The most legally usable layer is outbound linking plus original editorial synthesis. Directly republishing ratings, review counts, photos, review text, top dishes, or ranked lists from Dianping/Meituan/Ctrip/Fliggy is high risk unless covered by an explicit license.
+
+Finding 3. AMap is the only platform in this set with a broad public developer API suitable for production integration, but its terms still restrict extraction, standalone display, commercial use without permission, and cross-border handling of China map data.
+
+Finding 4. The best open editorial patterns to imitate are: city/category list pages, "top 20 visible, full list in app" teaser rankings, short contextual tags, Q&A snippets, season/use-case sublists, and separate official/UGC/review modules.
+
+Finding 5. For foreign tourists, Ctrip/Trip.com remains the safest booking layer. Dianping/Meituan/AMap are better as editor research inputs and link-out sources than as data sources to ingest.
+
+## A. 大众点评 Dianping
+
+### Public web access pattern
+
+Finding 6. Dianping's desktop city pages are readable at:
+
+- Beijing: https://www.dianping.com/beijing
+- Shanghai: https://www.dianping.com/shanghai
+- Guangzhou: https://www.dianping.com/guangzhou
+- Shenzhen: https://www.dianping.com/shenzhen
+
+Finding 7. Those city pages expose city IDs and English city slugs in page data. Observed IDs: Shanghai `1`, Beijing `2`, Guangzhou `4`, Shenzhen `7`.
+
+Finding 8. The city pages expose broad IA categories that matter for tourism: 美食, 酒店, 周边游, 景点, 展馆展览, 动植物园, 温泉, 滑雪, 购物, 热门商圈, and subway-line browsing.
+
+Finding 9. Individual shop pages are city-agnostic and use `/shop/{id}`. The mobile page is often the most indexable public surface, for example:
+
+- https://m.dianping.com/shop/2116402?msource=applemaps
+- https://m.dianping.com/shop/68075700?msource=applemaps
+- https://m.dianping.com/shop/814921852?msource=applemaps
+- https://m.dianping.com/shop/131544661?msource=applemaps
+
+Finding 10. Search snippets and public HTML show the common page title pattern: `【店名】电话_地址_价格_营业时间_商圈/菜系团购 - 大众点评网`. The title suggests a rich merchant profile, but much of the actual page body is masked or app-gated.
+
+### Visible to non-logged-in foreign users
+
+Finding 11. On the observed mobile shop pages, non-logged-in users can often see: merchant name, star rating, per-capita price, neighborhood/category, list/ranking badges, open/closed state, photo count, discount/tuan-gou placeholders, recommended dishes, and per-dish recommendation counts.
+
+Finding 12. Example: the public mobile page for 聚点串吧 showed rating, per-capita price, "新街口商圈 烤串", a local hot-list badge, a visible `2万+` photo/review-like count, and recommended dishes such as 老北京疙瘩汤, 爆香小嫩牛, 泰式蜜汁鸡翅.
+
+Finding 13. Addresses are often partially masked on public mobile pages, e.g. `赵登禹路1******`, and hours can be replaced by app-gated copy such as `APP内查看商户信息`.
+
+Finding 14. Phone numbers were not visible in the observed non-logged-in page body, despite "电话" appearing in the SEO page title.
+
+Finding 15. Deep photos, complete menus, full review streams, full addresses, queue/wait signals, and some deal prices are pushed into the app or login flow.
+
+### Hidden behind login/app walls
+
+Finding 16. The strongest Dianping signals for "locals actually visit" are mostly not safely extractable from the public web: review text, reviewer identity/level, queueing, current popularity, deal conversion, detailed photos, and stable full address/phone data.
+
+Finding 17. Dianping anti-scraping is active. In one observed request, a public mobile shop URL redirected to a Meituan verification center with `spiderindefence` in the URL.
+
+### 必吃榜
+
+Finding 18. The official public URL https://www.dianping.com/biyingbang redirected to Dianping login/citylist in my non-logged-in check. Treat the full list as app/login-first.
+
+Finding 19. The latest fully released 必吃榜 available in public media at the time of research was the 2025 list, released on 2025-06-25, with 144 cities/regions and 3,091 restaurants. Public reports say Shanghai, Beijing, Chengdu, Chongqing, and Shenzhen were top-five cities by listed restaurant count.
+
+Finding 20. The 2026 必吃榜 was not final as of 2026-05-10. Public reports say the 2026 entrant/shortlist was announced on 2026-04-23, covering 264 cities/regions and 4,326 restaurants, with Shanghai, Beijing, Chengdu, Chongqing, Guangzhou, Shenzhen, Xi'an, Wuhan, Suzhou, and Nanjing in the top ten by entrant count. Final release was reported as scheduled for 2026-06-24.
+
+Finding 21. For our four cities, the shortlist/final-list coverage is strong: Beijing, Shanghai, Guangzhou, and Shenzhen all appear in national top-city coverage for 必吃榜.
+
+Finding 22. Update cadence: annual. The observed pattern is spring shortlist/publicity followed by a mid-year final release.
+
+Useful URLs:
+
+- https://www.dianping.com/biyingbang
+- https://www.news.cn/tech/20250626/c4e830a0513147bf9505c9da54318067/c.html
+- https://m.bjnews.com.cn/detail/1750911314168601.html
+- https://www.dutenews.com/n/article/8913274
+- https://www.bbtnews.com.cn/2026/0424/591528.shtml
+- https://cbgc.scol.com.cn/news/7527616
+- https://society.yunnan.cn/system/2026/04/23/033978393.shtml
+
+### 黑珍珠餐厅指南
+
+Finding 23. Black Pearl is a Meituan/Dianping-owned high-end restaurant guide, often described as China's domestic answer to Michelin.
+
+Finding 24. The 2026 public official-ish Meituan Index report says the 2026 Black Pearl guide was released on 2026-01-28, with 263 mainland China restaurants, 7 upgraded restaurants, and 46 new entrants.
+
+Finding 25. The report says the guide is published by Meituan/Dianping and assessed by professional judges across dish quality, service, environment, inheritance, and innovation.
+
+Finding 26. The desktop `https://www.dianping.com/blackpearl` URL redirected to login/citylist in my check. The public web is usable for meta/report-level facts; the full browseable restaurant list is not reliably public without app/login.
+
+Finding 27. Coverage in 北上广深 is strong, but the safest citable source is the official annual report/news release, not scraped restaurant cards.
+
+Useful URLs:
+
+- https://www.dianping.com/blackpearl
+- https://index.meituan.com/reports/meituan-black-pearl-2026/
+- https://about.meituan.com/news/NN260128167003529
+- https://www.bjwmb.gov.cn/wmdt/cyq/10119347.html
+
+### Citing Dianping ratings/review counts
+
+Finding 28. Do not treat Dianping ratings as equivalent to Google Maps ratings for free third-party reuse. Meituan's IP statement says Meituan-provided content including pages, text, images, rankings, layout, data, and information belongs to Meituan unless otherwise stated.
+
+Finding 29. The same IP statement says, absent legal exception or written permission, no entity/person may copy, reproduce, quote, link to, or scrape Meituan platform content or information in whole or in part.
+
+Finding 30. Practical recommendation: use Dianping ratings/review counts as editor research only. On our site, write our own recommendation and link to the Dianping page or official report where useful. Avoid displaying "Dianping rating: 4.8 / 60k reviews" unless licensed.
+
+Useful URLs:
+
+- https://rules-center.meituan.com/m/detail/guize/69
+- https://h5.dianping.com/app/m-static-base-page/agreement.html?product=dpapp
+- https://open.dianping.com/
+- https://developer.meituan.com/
+
+### Open data / partnerships
+
+Finding 31. There is no obvious public tourism/review open dataset for foreign publishers. The available official platform surfaces are business/merchant/integration oriented: 北极星开放平台 and 美团技术服务合作中心.
+
+Finding 32. A legitimate integration would need a commercial partnership or API terms that explicitly permit the desired display and geography. Do not use third-party scraping APIs.
+
+## B. 高德地图 AMap / Gaode
+
+### Public attraction/landmark pages
+
+Finding 33. AMap place URL patterns observed:
+
+- `https://www.amap.com/place/{POI_ID}`
+- `https://gaode.com/poi/{POI_ID}`
+- `https://ditu.amap.com/place/{POI_ID}`
+- Search shell: `https://www.amap.com/search?query={encodedName}&city={adcode}`
+
+Example checked: https://www.amap.com/place/B000A8UIN8 and https://gaode.com/poi/B000A8UIN8.
+
+Finding 34. The public POI page shell is accessible, but the HTML response is a JavaScript app shell, not a stable indexable text profile. Do not rely on static HTML extraction for POI details.
+
+Finding 35. AMap's official Web Service API provides the structured POI route. The Search POI docs include keyword search, around search, polygon search, and ID query by POI ID.
+
+Finding 36. API-returnable POI fields include name/type/typecode, address, location, telephone, website, business area, indoor map data, tags, `biz_ext.rating`, `biz_ext.cost`, and photo URLs when `extensions=all`.
+
+Finding 37. The API docs explicitly state that rating exists only for restaurants, hotels, attractions, and cinemas, and that photos are returned with `extensions=all`.
+
+Useful URLs:
+
+- https://www.amap.com/place/B000A8UIN8
+- https://gaode.com/poi/B000A8UIN8
+- https://ditu.amap.com/place/B000A8UIN8
+- https://lbs.amap.com/api/webservice/summary
+- https://lbs.amap.com/api/webservice/guide/api-advanced/search
+
+### AMap web vs app crowd data
+
+Finding 38. AMap web ranking pages expose curated rankings and scores, not live crowd density. The pages show "完整榜单请在高德地图APP内查看", which confirms the app is the deeper surface.
+
+Finding 39. If AMap exposes crowding, queue, indoor navigation, or real-time scenic-area comfort signals, assume they are app/product-specific unless an official API endpoint says otherwise. I found official API docs for traffic status and bus inquiry, but not a public scenic crowd-density API suitable for embedding.
+
+### 高德指南 / official travel recommendation
+
+Finding 40. AMap's public ranking pages are highly relevant. URL pattern:
+
+- Beijing scenic: https://www.amap.com/ranking/beijing/scenic
+- Shanghai scenic: https://www.amap.com/ranking/shanghai/scenic
+- Guangzhou scenic: https://www.amap.com/ranking/guangzhou/scenic
+- Shenzhen scenic: https://www.amap.com/ranking/shenzhen/scenic
+- Ranking plaza: https://ranks.amap.com/
+- Ranking browse: https://ranks.amap.com/ranking
+
+Finding 41. These pages show 2025 高德状元榜/扫街榜 style lists with "全年综合分", tags, and short editorial blurbs. Beijing's scenic page showed 64 total places but only top 20 on web; Shanghai 47; Guangzhou 43; Shenzhen 29.
+
+Finding 42. Beijing examples from the public page: 故宫博物院, 中国国家博物馆, 天坛公园, 什刹海, 颐和园, each with a score and contextual tags. This is a strong "visited/search/navigation heat" editorial signal.
+
+Finding 43. AMap's public/media explanation says 高德指南 rankings use real AMap search/navigation data plus user evaluations and merchant quality, which is exactly the "locals actually go here" pattern we want to emulate editorially.
+
+Useful URLs:
+
+- https://www.amap.com/ranking/beijing/scenic
+- https://www.amap.com/ranking/shanghai/scenic
+- https://www.amap.com/ranking/guangzhou/scenic
+- https://www.amap.com/ranking/shenzhen/scenic
+- https://ranks.amap.com/
+- https://ranks.amap.com/ranking
+- https://www.sznews.com/news/content/2025-01/20/content_31444248.htm
+- https://www.pingwest.com/w/218091
+
+### Transit / congestion / embed exposure
+
+Finding 44. AMap Web Service API exposes traffic status query endpoints such as `https://restapi.amap.com/v3/traffic/status/road?parameters`, requiring a key.
+
+Finding 45. AMap Web Service API exposes route planning, including walking, transit, driving, and distance calculation. The route docs caution that same-origin/destination results may change as road/data/algorithms change.
+
+Finding 46. Public transit live arrival and subway transfer ergonomics are primarily app/native product experiences. I did not find a public no-key web embed for live arrivals. For our site, the realistic legal path is "open in AMap" deep links or licensed API route estimates, not embedding live AMap transit boards.
+
+Useful URLs:
+
+- https://lbs.amap.com/api/webservice/guide/api/direction
+- https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry
+- https://lbs.amap.com/api/webservice/guide/api-advanced/bus-inquiry
+- https://lbs.amap.com/api/javascript-api-v2/guide/abc/prepare
+
+### AMap public API and developer requirements
+
+Finding 47. AMap Web Service API is documented as open to all users, but requires an application key. The setup flow is: register as AMap developer, create an application, obtain a key.
+
+Finding 48. Personal and enterprise developers get different quotas; quota details are now routed to pricing/control-console pages. Older/current docs still state that service call limits and QPS quota depend on account status and can be checked/upgraded in the console.
+
+Finding 49. For foreign developers, I found no official English page guaranteeing easy foreign KYC. The practical blocker is likely account registration, phone/Alibaba identity flows, business verification, and China map-data compliance.
+
+Useful URLs:
+
+- https://lbs.amap.com/api/webservice/summary
+- https://lbs.amap.com/api/webservice/guide/tools/flowlevel
+- https://lbs.amap.com/api/webservice/guide/api-advanced/search
+- https://lbs.amap.com/api/webservice/guide/api/direction
+
+### Legal / redistribution
+
+Finding 50. AMap terms are restrictive for our use case. They define relevant content to include map data, traffic information, address data, merchant lists, navigation voice, and other content.
+
+Finding 51. AMap grants a personal, non-transferable, revocable, non-exclusive license and says commercial use requires separate written agreement or written permission.
+
+Finding 52. AMap terms prohibit attempting to extract source code or original data; using crawlers/scrapers/indexers; storing/caching/retrieving/indexing service/data; and using AMap content separately from AMap products/services.
+
+Finding 53. Crucially for a foreign site, AMap terms say users may not download China domestic map data outside China or transfer, store, or provide China domestic map data overseas.
+
+Recommendation: AMap is usable only through compliant API/embed/deep-link workflows, with counsel review for cross-border data handling. Do not build a cached AMap-derived POI database offshore.
+
+Useful URL:
+
+- https://cache.amap.com/h5/h5/publish/241/index.html
+
+## C. 携程 Ctrip China-side
+
+### What is unique vs Trip.com
+
+Finding 54. Ctrip's China-side `you.ctrip.com` is much deeper than a pure booking site. It has destination pages, scenic pages, UGC travel notes, Q&A, user comments, rankings, photo modules, opening hours, policy details, and Chinese-local operational tips.
+
+Finding 55. Ctrip scenic pages can be publicly read without login. Example: 鸟巢 page exposed attraction score, review count, address, opening hours, official phone, notice text, detailed intro, photo strategy, ticket/benefit policies, Q&A, and recent user reviews.
+
+Finding 56. Ctrip city scenic lists expose public IA patterns: "必打卡景点榜", "夜游必打卡景点榜", "亲子景点榜", "赏花踏青景点榜", "滑雪景点榜", "温泉景点榜", plus paginated attraction cards.
+
+Finding 57. Ctrip travel-note list pages expose title, author, publish/reply dates, trip duration, spend, travel party, view/comment/like counts, and pagination.
+
+Finding 58. Ctrip Q&A pages are publicly readable and very valuable for foreign-tourist pain points: reservation requirements, IDs, lockers, elderly suitability, weather, transport timing, hotel practicalities, and ticket scarcity.
+
+Useful URL patterns:
+
+- City scenic list: https://you.ctrip.com/sight/peking1.html
+- Attraction detail: https://you.ctrip.com/sight/beijing1/52626.html
+- Travel notes list: https://you.ctrip.com/travels/beijing1.html
+- Travel note detail: https://you.ctrip.com/travels/beijing1/4126037.html
+- Q&A root: https://you.ctrip.com/asks/
+- City Q&A: https://you.ctrip.com/asks/beijing1.html
+- Community guide: https://you.ctrip.com/htmlpages/guide.html/
+
+### Community guide / public reading
+
+Finding 59. Ctrip's own community guide describes the platform as channels for destination info, travel notes, Q&A, and official destination/tourism bureau info. It says the information comes from real community users and is intended to help planning/sharing.
+
+Finding 60. Public reading is allowed by product design, but republication is not. Use it as editor research and link out.
+
+### Booking widgets and foreign travelers
+
+Finding 61. Ctrip China-side is useful for local inventory and operations: domestic hotels, trains, activities, tickets, China customer-service flows, Chinese names, and sometimes more local Q&A than Trip.com.
+
+Finding 62. For actual foreign tourists, Trip.com is still the cleaner front door for English UI, foreign cards, international customer service, and passport-friendly flows. The Chinese Ctrip site may require Chinese literacy, Chinese phone/SMS, China-specific payment, and local identity assumptions.
+
+Finding 63. Our site should not embed Ctrip booking widgets unless there is an affiliate/partner agreement. Use text links or "book via Trip.com/Ctrip" buttons under affiliate rules.
+
+### Legal / redistribution
+
+Finding 64. Ctrip's user agreement forbids commercial use of any Ctrip platform data without permission, including use by web crawler, copy, propagation, or other means.
+
+Finding 65. Ctrip's user agreement says Ctrip-owned platform content, including pages, text, images, audio/video, data, and information, belongs to Ctrip and cannot be used or made into derivatives without written consent.
+
+Finding 66. Ctrip攻略社区 user rules say third parties may not obtain/use any part of the site or any content/service/material directly or indirectly available through the site for non-private or commercial purposes without explicit written permission.
+
+Recommendation: Ctrip is referenceable, not ingestible. Link to public Ctrip pages and write our own summaries. Do not display Ctrip ratings/review counts as a copied data layer.
+
+Useful URLs:
+
+- https://contents.ctrip.com/activitysetupapp/mkt/index/agreement202311
+- https://contents.ctrip.com/activitysetupapp/mkt/index/userrule
+- https://docs.c-ctrip.com/files/6/unc_agreement_pdf/1tm3r12000hb2zpof8D77.pdf
+- https://pages.c-ctrip.com/public/encroachment.html
+
+## D. 美团 Meituan
+
+### Web vs app
+
+Finding 67. Meituan is the most app/transaction-driven platform in this set. The desktop homepage is mostly corporate; some city/category paths redirect or fail for non-app/public browsing.
+
+Finding 68. The mobile app download page explicitly describes the consumer product as covering food, delivery, hotel booking, tourism deals, flights, train tickets, movie tickets, scenic tickets, and group tours.
+
+Finding 69. The same page states Meituan provides consumer reviews, merchant ratings, and merchant information query functions. This confirms review/merchant-data existence but not public reuse rights.
+
+Useful URLs:
+
+- https://www.meituan.com/
+- https://bj.meituan.com/
+- https://i.meituan.com/client/meituan
+
+### Meituan vs Dianping
+
+Finding 70. Meituan and Dianping merged in 2015. Public reporting says the merged entity integrated resources while retaining brands/businesses.
+
+Finding 71. Practical differentiation for tourism research: Dianping is the local-life content/review/discovery layer; Meituan is the transaction layer for coupons, tickets, hotels, deals, and app conversion. Data overlaps, but user intent differs.
+
+Finding 72. For our project, Dianping helps answer "what locals praise and rank"; Meituan helps answer "what people buy/book/use now." But Meituan's public web leakage is weak.
+
+Useful URLs:
+
+- https://m.21jingji.com/article/20151008/herald/d1a64f593c439e3c4f722d415556d582.html
+- https://finance.sina.cn/usstock/hlwgs/2015-11-12/tech-ifxkrwks3777633.d.html
+- https://finance.sina.com.cn/chanjing/gsnews/20151009/020923424040.shtml
+
+### Tourism / 景点 / 玩乐 coverage
+
+Finding 73. Meituan app product coverage includes 旅游周边: flights, train tickets, scenic tickets, and group tours. This likely covers Beijing, Shanghai, Guangzhou, and Shenzhen, but the useful browsing happens in-app.
+
+Finding 74. Public web pages do not provide enough stable tourism data to build city guides. Treat Meituan as blocked for extraction and referenceable only for high-level product availability or editor app checks.
+
+### Legal
+
+Finding 75. Meituan legal treatment is the same family as Dianping. The IP statement explicitly covers rankings, data, and information, and prohibits unlicensed copying, reproducing, quoting, linking, and technical scraping.
+
+## E. 飞猪 Fliggy
+
+### Public web data
+
+Finding 76. Fliggy's public desktop homepage is a booking portal, not a review/discovery corpus. Its title and page text cover flights, hotels, inns, vacation products, attraction tickets, and visas.
+
+Finding 77. The public homepage describes product coverage: flight booking, hotel booking, train tickets, vacation packages, attraction tickets, business travel, local transport, travel insurance, and Alibaba business travel.
+
+Finding 78. I did not find a public, indexable Fliggy equivalent of Dianping review pages or Ctrip's `you.ctrip.com` community depth. Most useful data is likely app/search/product-detail driven.
+
+Useful URLs:
+
+- https://www.fliggy.com/
+- https://www.fliggy.com/travel
+- https://www.alitrip.com/
+- https://rule.fliggy.com/
+
+### 旅游攻略 community
+
+Finding 79. Fliggy may have travel content in app/product flows, but I did not find a robust public web travel-guide community comparable to Ctrip攻略社区. Do not plan editorial extraction from Fliggy.
+
+### Foreign-card payment status
+
+Finding 80. Fliggy's merchant service agreement says merchants accept Alipay services, other Alipay-provided payment methods, or platform-supported payment methods. It also says Fliggy will continue expanding payment methods and rollout may be phased.
+
+Finding 81. I found no official Fliggy public page that guarantees foreign Visa/Mastercard acceptance for foreign tourists across attraction tickets/hotels/packages.
+
+Finding 82. Practical recommendation: do not send foreign tourists to Fliggy as a primary booking path unless testing a specific SKU/payment path. Use Trip.com/Ctrip, official attraction sites, or WeChat/Alipay mini-program guidance instead.
+
+### Legal
+
+Finding 83. Fliggy merchant agreement says Fliggy official products, technology, software, programs, data, and other information belong to Fliggy/affiliates; merchants agree not to commercially use other Fliggy platform data without approval, including copying, spreading, or disclosing other users' materials.
+
+Finding 84. Even where product titles/prices are visible, do not build a replicated Fliggy travel-product database without a partner agreement.
+
+Useful URLs:
+
+- https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231106103244276/20231106103244276_1_3_19922.pdf
+- https://rule.fliggy.com/
+
+## F. Practical conclusion for our project
+
+### What we can safely do
+
+Finding 85. Build our own POI and guide pages from original editorial research, official attraction/government sources, and licensed map APIs.
+
+Finding 86. Link out to Dianping, AMap, Ctrip, Meituan, and Fliggy pages where helpful, but avoid copying their proprietary data fields into our own UI.
+
+Finding 87. Use Dianping/Meituan internally to discover local restaurants, old shops, top dishes, neighborhoods, and whether a place is locally validated. Convert that into our own prose and recommendations.
+
+Finding 88. Use AMap ranking pages to understand search/navigation heat and city "must go" hierarchy. Use AMap API/deep links only in compliance with API terms and cross-border restrictions.
+
+Finding 89. Use Ctrip Q&A and recent reviews to detect operational friction: booking windows, ID/passport issues, luggage storage, elderly/child suitability, closures, crowd timing, and transport timing.
+
+Finding 90. Treat Fliggy primarily as a booking-market sanity check, not as a tourism-intel source.
+
+### Information architecture patterns worth copying, not the data
+
+Finding 91. Use city landing pages with category rows: food, sights, museums/exhibitions, night views, family, shopping, transit neighborhoods.
+
+Finding 92. Add "locals actually go" modules based on our own synthesis of: old-shop longevity, local neighborhood density, AMap navigation/search heat, Ctrip Q&A frequency, and repeated mentions across sources.
+
+Finding 93. Split rankings by intent, not just overall score: first-time must-see, rainy day, night view, family, low-walking, food street, old-local favorite, near subway, open late.
+
+Finding 94. Show "what is hidden behind Chinese apps" as traveller guidance: full reviews, current queues, exact deals, live crowding, and some ticket flows require local apps.
+
+Finding 95. Use source badges carefully:
+
+- "Editors checked Dianping/Meituan/AMap/Ctrip" is safer than "Dianping says 4.8".
+- "Open in AMap" is safer than copying AMap traffic/transit data.
+- "Read recent Ctrip Q&A" is safer than reproducing Q&A answers.
+
+### Source URL index
+
+1. https://www.dianping.com/beijing
+2. https://www.dianping.com/shanghai
+3. https://www.dianping.com/guangzhou
+4. https://www.dianping.com/shenzhen
+5. https://m.dianping.com/shop/2116402?msource=applemaps
+6. https://m.dianping.com/shop/68075700?msource=applemaps
+7. https://m.dianping.com/shop/814921852?msource=applemaps
+8. https://m.dianping.com/shop/131544661?msource=applemaps
+9. https://www.dianping.com/biyingbang
+10. https://www.dianping.com/blackpearl
+11. https://index.meituan.com/reports/meituan-black-pearl-2026/
+12. https://rules-center.meituan.com/m/detail/guize/69
+13. https://open.dianping.com/
+14. https://developer.meituan.com/
+15. https://www.amap.com/place/B000A8UIN8
+16. https://gaode.com/poi/B000A8UIN8
+17. https://lbs.amap.com/api/webservice/summary
+18. https://lbs.amap.com/api/webservice/guide/api-advanced/search
+19. https://www.amap.com/ranking/beijing/scenic
+20. https://www.amap.com/ranking/shanghai/scenic
+21. https://www.amap.com/ranking/guangzhou/scenic
+22. https://www.amap.com/ranking/shenzhen/scenic
+23. https://ranks.amap.com/
+24. https://lbs.amap.com/api/webservice/guide/api/direction
+25. https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry
+26. https://cache.amap.com/h5/h5/publish/241/index.html
+27. https://you.ctrip.com/htmlpages/guide.html/
+28. https://you.ctrip.com/sight/peking1.html
+29. https://you.ctrip.com/sight/beijing1/52626.html
+30. https://you.ctrip.com/travels/beijing1.html
+31. https://you.ctrip.com/asks/
+32. https://you.ctrip.com/asks/beijing1.html
+33. https://contents.ctrip.com/activitysetupapp/mkt/index/agreement202311
+34. https://contents.ctrip.com/activitysetupapp/mkt/index/userrule
+35. https://www.meituan.com/
+36. https://bj.meituan.com/
+37. https://i.meituan.com/client/meituan
+38. https://m.21jingji.com/article/20151008/herald/d1a64f593c439e3c4f722d415556d582.html
+39. https://www.fliggy.com/
+40. https://www.fliggy.com/travel
+41. https://rule.fliggy.com/
+42. https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231106103244276/20231106103244276_1_3_19922.pdf
+
+## Final platform classification
+
+| Platform | Classification | What is usable on our site | What is referenceable for editors | What is blocked / avoid |
+|---|---:|---|---|---|
+| 大众点评 Dianping | REFERENCEABLE | Outbound links to public shop/list/report pages; high-level statements from official news/reports with citation | Local restaurant discovery, top dishes, local badges, rough popularity, 必吃榜/黑珍珠 coverage | Republishing ratings, review counts, reviews, photos, top-dish counts, full list data, queue/deal signals without license |
+| 高德地图 AMap | USABLE WITH LICENSE / REFERENCEABLE | Official API/embed/deep links under AMap terms; public link-out to ranking pages | City scenic hierarchy, tags, navigation/search heat proxy, routing friction | Scraping/caching POI, traffic, transit, or map data; offshore transfer/storage of China map data; live crowd/transit embeds without permission |
+| 携程 Ctrip China-side | REFERENCEABLE | Outbound links to attraction, Q&A, guide, and booking pages; own editorial summaries | Practical travel Q&A, recent operational issues, attraction policies, route/time tips, Chinese-local reviews | Republishing Ctrip ratings, review counts, review text, photos, Q&A answers, or guide text commercially |
+| 美团 Meituan | BLOCKED / REFERENCEABLE | High-level product link-out or app download guidance | App-only check for ticket/deal availability and transaction signals | Extracting merchant ratings, review data, deals, tickets, or app-only tourism inventory |
+| 飞猪 Fliggy | BLOCKED / LOW-VALUE REFERENCEABLE | Link-out to Fliggy booking pages only where a specific booking path is tested | Price/inventory sanity check for Alibaba travel products | Review/community extraction, product database replication, claiming foreign-card acceptance without SKU-level testing |

  ✓ Gather platform evidence and terms
  ✓ Draft markdown report with citations
  → Save report and verify URL/finding counts
diff --git a/v2/research/china-platforms-02-maps-reviews.md b/v2/research/china-platforms-02-maps-reviews.md
new file mode 100644
index 0000000000000000000000000000000000000000..2885ea2dec3d7b815cf792554695d24f052af27f
--- /dev/null
+++ b/v2/research/china-platforms-02-maps-reviews.md
@@ -0,0 +1,452 @@
+# China domestic maps/reviews platforms for tourism intel
+
+Last checked: 2026-05-10  
+Scope: 大众点评 Dianping, 美团 Meituan, 高德地图 AMap, 携程 Ctrip China-side, 飞猪 Fliggy.  
+Project use case: a foreign-tourist-to-China information site that wants to understand what locals actually visit without copying protected platform content.
+
+## Executive read
+
+Finding 1. The best "locals actually go here" signal is not a single source. It is a triangulation of Dianping/Meituan review behavior, AMap search/navigation heat, and Ctrip travel Q&A/reviews.
+
+Finding 2. The most legally usable layer is outbound linking plus original editorial synthesis. Directly republishing ratings, review counts, photos, review text, top dishes, or ranked lists from Dianping/Meituan/Ctrip/Fliggy is high risk unless covered by an explicit license.
+
+Finding 3. AMap is the only platform in this set with a broad public developer API suitable for production integration, but its terms still restrict extraction, standalone display, commercial use without permission, and cross-border handling of China map data.
+
+Finding 4. The best open editorial patterns to imitate are: city/category list pages, "top 20 visible, full list in app" teaser rankings, short contextual tags, Q&A snippets, season/use-case sublists, and separate official/UGC/review modules.
+
+Finding 5. For foreign tourists, Ctrip/Trip.com remains the safest booking layer. Dianping/Meituan/AMap are better as editor research inputs and link-out sources than as data sources to ingest.
+
+## A. 大众点评 Dianping
+
+### Public web access pattern
+
+Finding 6. Dianping's desktop city pages are readable at:
+
+- Beijing: https://www.dianping.com/beijing
+- Shanghai: https://www.dianping.com/shanghai
+- Guangzhou: https://www.dianping.com/guangzhou
+- Shenzhen: https://www.dianping.com/shenzhen
+
+Finding 7. Those city pages expose city IDs and English city slugs in page data. Observed IDs: Shanghai `1`, Beijing `2`, Guangzhou `4`, Shenzhen `7`.
+
+Finding 8. The city pages expose broad IA categories that matter for tourism: 美食, 酒店, 周边游, 景点, 展馆展览, 动植物园, 温泉, 滑雪, 购物, 热门商圈, and subway-line browsing.
+
+Finding 9. Individual shop pages are city-agnostic and use `/shop/{id}`. The mobile page is often the most indexable public surface, for example:
+
+- https://m.dianping.com/shop/2116402?msource=applemaps
+- https://m.dianping.com/shop/68075700?msource=applemaps
+- https://m.dianping.com/shop/814921852?msource=applemaps
+- https://m.dianping.com/shop/131544661?msource=applemaps
+
+Finding 10. Search snippets and public HTML show the common page title pattern: `【店名】电话_地址_价格_营业时间_商圈/菜系团购 - 大众点评网`. The title suggests a rich merchant profile, but much of the actual page body is masked or app-gated.
+
+### Visible to non-logged-in foreign users
+
+Finding 11. On the observed mobile shop pages, non-logged-in users can often see: merchant name, star rating, per-capita price, neighborhood/category, list/ranking badges, open/closed state, photo count, discount/tuan-gou placeholders, recommended dishes, and per-dish recommendation counts.
+
+Finding 12. Example: the public mobile page for 聚点串吧 showed rating, per-capita price, "新街口商圈 烤串", a local hot-list badge, a visible `2万+` photo/review-like count, and recommended dishes such as 老北京疙瘩汤, 爆香小嫩牛, 泰式蜜汁鸡翅.
+
+Finding 13. Addresses are often partially masked on public mobile pages, e.g. `赵登禹路1******`, and hours can be replaced by app-gated copy such as `APP内查看商户信息`.
+
+Finding 14. Phone numbers were not visible in the observed non-logged-in page body, despite "电话" appearing in the SEO page title.
+
+Finding 15. Deep photos, complete menus, full review streams, full addresses, queue/wait signals, and some deal prices are pushed into the app or login flow.
+
+### Hidden behind login/app walls
+
+Finding 16. The strongest Dianping signals for "locals actually visit" are mostly not safely extractable from the public web: review text, reviewer identity/level, queueing, current popularity, deal conversion, detailed photos, and stable full address/phone data.
+
+Finding 17. Dianping anti-scraping is active. In one observed request, a public mobile shop URL redirected to a Meituan verification center with `spiderindefence` in the URL.
+
+### 必吃榜
+
+Finding 18. The official public URL https://www.dianping.com/biyingbang redirected to Dianping login/citylist in my non-logged-in check. Treat the full list as app/login-first.
+
+Finding 19. The latest fully released 必吃榜 available in public media at the time of research was the 2025 list, released on 2025-06-25, with 144 cities/regions and 3,091 restaurants. Public reports say Shanghai, Beijing, Chengdu, Chongqing, and Shenzhen were top-five cities by listed restaurant count.
+
+Finding 20. The 2026 必吃榜 was not final as of 2026-05-10. Public reports say the 2026 entrant/shortlist was announced on 2026-04-23, covering 264 cities/regions and 4,326 restaurants, with Shanghai, Beijing, Chengdu, Chongqing, Guangzhou, Shenzhen, Xi'an, Wuhan, Suzhou, and Nanjing in the top ten by entrant count. Final release was reported as scheduled for 2026-06-24.
+
+Finding 21. For our four cities, the shortlist/final-list coverage is strong: Beijing, Shanghai, Guangzhou, and Shenzhen all appear in national top-city coverage for 必吃榜.
+
+Finding 22. Update cadence: annual. The observed pattern is spring shortlist/publicity followed by a mid-year final release.
+
+Useful URLs:
+
+- https://www.dianping.com/biyingbang
+- https://www.news.cn/tech/20250626/c4e830a0513147bf9505c9da54318067/c.html
+- https://m.bjnews.com.cn/detail/1750911314168601.html
+- https://www.dutenews.com/n/article/8913274
+- https://www.bbtnews.com.cn/2026/0424/591528.shtml
+- https://cbgc.scol.com.cn/news/7527616
+- https://society.yunnan.cn/system/2026/04/23/033978393.shtml
+
+### 黑珍珠餐厅指南
+
+Finding 23. Black Pearl is a Meituan/Dianping-owned high-end restaurant guide, often described as China's domestic answer to Michelin.
+
+Finding 24. The 2026 public official-ish Meituan Index report says the 2026 Black Pearl guide was released on 2026-01-28, with 263 mainland China restaurants, 7 upgraded restaurants, and 46 new entrants.
+
+Finding 25. The report says the guide is published by Meituan/Dianping and assessed by professional judges across dish quality, service, environment, inheritance, and innovation.
+
+Finding 26. The desktop `https://www.dianping.com/blackpearl` URL redirected to login/citylist in my check. The public web is usable for meta/report-level facts; the full browseable restaurant list is not reliably public without app/login.
+
+Finding 27. Coverage in 北上广深 is strong, but the safest citable source is the official annual report/news release, not scraped restaurant cards.
+
+Useful URLs:
+
+- https://www.dianping.com/blackpearl
+- https://index.meituan.com/reports/meituan-black-pearl-2026/
+- https://about.meituan.com/news/NN260128167003529
+- https://www.bjwmb.gov.cn/wmdt/cyq/10119347.html
+
+### Citing Dianping ratings/review counts
+
+Finding 28. Do not treat Dianping ratings as equivalent to Google Maps ratings for free third-party reuse. Meituan's IP statement says Meituan-provided content including pages, text, images, rankings, layout, data, and information belongs to Meituan unless otherwise stated.
+
+Finding 29. The same IP statement says, absent legal exception or written permission, no entity/person may copy, reproduce, quote, link to, or scrape Meituan platform content or information in whole or in part.
+
+Finding 30. Practical recommendation: use Dianping ratings/review counts as editor research only. On our site, write our own recommendation and link to the Dianping page or official report where useful. Avoid displaying "Dianping rating: 4.8 / 60k reviews" unless licensed.
+
+Useful URLs:
+
+- https://rules-center.meituan.com/m/detail/guize/69
+- https://h5.dianping.com/app/m-static-base-page/agreement.html?product=dpapp
+- https://open.dianping.com/
+- https://developer.meituan.com/
+
+### Open data / partnerships
+
+Finding 31. There is no obvious public tourism/review open dataset for foreign publishers. The available official platform surfaces are business/merchant/integration oriented: 北极星开放平台 and 美团技术服务合作中心.
+
+Finding 32. A legitimate integration would need a commercial partnership or API terms that explicitly permit the desired display and geography. Do not use third-party scraping APIs.
+
+## B. 高德地图 AMap / Gaode
+
+### Public attraction/landmark pages
+
+Finding 33. AMap place URL patterns observed:
+
+- `https://www.amap.com/place/{POI_ID}`
+- `https://gaode.com/poi/{POI_ID}`
+- `https://ditu.amap.com/place/{POI_ID}`
+- Search shell: `https://www.amap.com/search?query={encodedName}&city={adcode}`
+
+Example checked: https://www.amap.com/place/B000A8UIN8 and https://gaode.com/poi/B000A8UIN8.
+
+Finding 34. The public POI page shell is accessible, but the HTML response is a JavaScript app shell, not a stable indexable text profile. Do not rely on static HTML extraction for POI details.
+
+Finding 35. AMap's official Web Service API provides the structured POI route. The Search POI docs include keyword search, around search, polygon search, and ID query by POI ID.
+
+Finding 36. API-returnable POI fields include name/type/typecode, address, location, telephone, website, business area, indoor map data, tags, `biz_ext.rating`, `biz_ext.cost`, and photo URLs when `extensions=all`.
+
+Finding 37. The API docs explicitly state that rating exists only for restaurants, hotels, attractions, and cinemas, and that photos are returned with `extensions=all`.
+
+Useful URLs:
+
+- https://www.amap.com/place/B000A8UIN8
+- https://gaode.com/poi/B000A8UIN8
+- https://ditu.amap.com/place/B000A8UIN8
+- https://lbs.amap.com/api/webservice/summary
+- https://lbs.amap.com/api/webservice/guide/api-advanced/search
+
+### AMap web vs app crowd data
+
+Finding 38. AMap web ranking pages expose curated rankings and scores, not live crowd density. The pages show "完整榜单请在高德地图APP内查看", which confirms the app is the deeper surface.
+
+Finding 39. If AMap exposes crowding, queue, indoor navigation, or real-time scenic-area comfort signals, assume they are app/product-specific unless an official API endpoint says otherwise. I found official API docs for traffic status and bus inquiry, but not a public scenic crowd-density API suitable for embedding.
+
+### 高德指南 / official travel recommendation
+
+Finding 40. AMap's public ranking pages are highly relevant. URL pattern:
+
+- Beijing scenic: https://www.amap.com/ranking/beijing/scenic
+- Shanghai scenic: https://www.amap.com/ranking/shanghai/scenic
+- Guangzhou scenic: https://www.amap.com/ranking/guangzhou/scenic
+- Shenzhen scenic: https://www.amap.com/ranking/shenzhen/scenic
+- Ranking plaza: https://ranks.amap.com/
+- Ranking browse: https://ranks.amap.com/ranking
+
+Finding 41. These pages show 2025 高德状元榜/扫街榜 style lists with "全年综合分", tags, and short editorial blurbs. Beijing's scenic page showed 64 total places but only top 20 on web; Shanghai 47; Guangzhou 43; Shenzhen 29.
+
+Finding 42. Beijing examples from the public page: 故宫博物院, 中国国家博物馆, 天坛公园, 什刹海, 颐和园, each with a score and contextual tags. This is a strong "visited/search/navigation heat" editorial signal.
+
+Finding 43. AMap's public/media explanation says 高德指南 rankings use real AMap search/navigation data plus user evaluations and merchant quality, which is exactly the "locals actually go here" pattern we want to emulate editorially.
+
+Useful URLs:
+
+- https://www.amap.com/ranking/beijing/scenic
+- https://www.amap.com/ranking/shanghai/scenic
+- https://www.amap.com/ranking/guangzhou/scenic
+- https://www.amap.com/ranking/shenzhen/scenic
+- https://ranks.amap.com/
+- https://ranks.amap.com/ranking
+- https://www.sznews.com/news/content/2025-01/20/content_31444248.htm
+- https://www.pingwest.com/w/218091
+
+### Transit / congestion / embed exposure
+
+Finding 44. AMap Web Service API exposes traffic status query endpoints such as `https://restapi.amap.com/v3/traffic/status/road?parameters`, requiring a key.
+
+Finding 45. AMap Web Service API exposes route planning, including walking, transit, driving, and distance calculation. The route docs caution that same-origin/destination results may change as road/data/algorithms change.
+
+Finding 46. Public transit live arrival and subway transfer ergonomics are primarily app/native product experiences. I did not find a public no-key web embed for live arrivals. For our site, the realistic legal path is "open in AMap" deep links or licensed API route estimates, not embedding live AMap transit boards.
+
+Useful URLs:
+
+- https://lbs.amap.com/api/webservice/guide/api/direction
+- https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry
+- https://lbs.amap.com/api/webservice/guide/api-advanced/bus-inquiry
+- https://lbs.amap.com/api/javascript-api-v2/guide/abc/prepare
+
+### AMap public API and developer requirements
+
+Finding 47. AMap Web Service API is documented as open to all users, but requires an application key. The setup flow is: register as AMap developer, create an application, obtain a key.
+
+Finding 48. Personal and enterprise developers get different quotas; quota details are now routed to pricing/control-console pages. Older/current docs still state that service call limits and QPS quota depend on account status and can be checked/upgraded in the console.
+
+Finding 49. For foreign developers, I found no official English page guaranteeing easy foreign KYC. The practical blocker is likely account registration, phone/Alibaba identity flows, business verification, and China map-data compliance.
+
+Useful URLs:
+
+- https://lbs.amap.com/api/webservice/summary
+- https://lbs.amap.com/api/webservice/guide/tools/flowlevel
+- https://lbs.amap.com/api/webservice/guide/api-advanced/search
+- https://lbs.amap.com/api/webservice/guide/api/direction
+
+### Legal / redistribution
+
+Finding 50. AMap terms are restrictive for our use case. They define relevant content to include map data, traffic information, address data, merchant lists, navigation voice, and other content.
+
+Finding 51. AMap grants a personal, non-transferable, revocable, non-exclusive license and says commercial use requires separate written agreement or written permission.
+
+Finding 52. AMap terms prohibit attempting to extract source code or original data; using crawlers/scrapers/indexers; storing/caching/retrieving/indexing service/data; and using AMap content separately from AMap products/services.
+
+Finding 53. Crucially for a foreign site, AMap terms say users may not download China domestic map data outside China or transfer, store, or provide China domestic map data overseas.
+
+Recommendation: AMap is usable only through compliant API/embed/deep-link workflows, with counsel review for cross-border data handling. Do not build a cached AMap-derived POI database offshore.
+
+Useful URL:
+
+- https://cache.amap.com/h5/h5/publish/241/index.html
+
+## C. 携程 Ctrip China-side
+
+### What is unique vs Trip.com
+
+Finding 54. Ctrip's China-side `you.ctrip.com` is much deeper than a pure booking site. It has destination pages, scenic pages, UGC travel notes, Q&A, user comments, rankings, photo modules, opening hours, policy details, and Chinese-local operational tips.
+
+Finding 55. Ctrip scenic pages can be publicly read without login. Example: 鸟巢 page exposed attraction score, review count, address, opening hours, official phone, notice text, detailed intro, photo strategy, ticket/benefit policies, Q&A, and recent user reviews.
+
+Finding 56. Ctrip city scenic lists expose public IA patterns: "必打卡景点榜", "夜游必打卡景点榜", "亲子景点榜", "赏花踏青景点榜", "滑雪景点榜", "温泉景点榜", plus paginated attraction cards.
+
+Finding 57. Ctrip travel-note list pages expose title, author, publish/reply dates, trip duration, spend, travel party, view/comment/like counts, and pagination.
+
+Finding 58. Ctrip Q&A pages are publicly readable and very valuable for foreign-tourist pain points: reservation requirements, IDs, lockers, elderly suitability, weather, transport timing, hotel practicalities, and ticket scarcity.
+
+Useful URL patterns:
+
+- City scenic list: https://you.ctrip.com/sight/peking1.html
+- Attraction detail: https://you.ctrip.com/sight/beijing1/52626.html
+- Travel notes list: https://you.ctrip.com/travels/beijing1.html
+- Travel note detail: https://you.ctrip.com/travels/beijing1/4126037.html
+- Q&A root: https://you.ctrip.com/asks/
+- City Q&A: https://you.ctrip.com/asks/beijing1.html
+- Community guide: https://you.ctrip.com/htmlpages/guide.html/
+
+### Community guide / public reading
+
+Finding 59. Ctrip's own community guide describes the platform as channels for destination info, travel notes, Q&A, and official destination/tourism bureau info. It says the information comes from real community users and is intended to help planning/sharing.
+
+Finding 60. Public reading is allowed by product design, but republication is not. Use it as editor research and link out.
+
+### Booking widgets and foreign travelers
+
+Finding 61. Ctrip China-side is useful for local inventory and operations: domestic hotels, trains, activities, tickets, China customer-service flows, Chinese names, and sometimes more local Q&A than Trip.com.
+
+Finding 62. For actual foreign tourists, Trip.com is still the cleaner front door for English UI, foreign cards, international customer service, and passport-friendly flows. The Chinese Ctrip site may require Chinese literacy, Chinese phone/SMS, China-specific payment, and local identity assumptions.
+
+Finding 63. Our site should not embed Ctrip booking widgets unless there is an affiliate/partner agreement. Use text links or "book via Trip.com/Ctrip" buttons under affiliate rules.
+
+### Legal / redistribution
+
+Finding 64. Ctrip's user agreement forbids commercial use of any Ctrip platform data without permission, including use by web crawler, copy, propagation, or other means.
+
+Finding 65. Ctrip's user agreement says Ctrip-owned platform content, including pages, text, images, audio/video, data, and information, belongs to Ctrip and cannot be used or made into derivatives without written consent.
+
+Finding 66. Ctrip攻略社区 user rules say third parties may not obtain/use any part of the site or any content/service/material directly or indirectly available through the site for non-private or commercial purposes without explicit written permission.
+
+Recommendation: Ctrip is referenceable, not ingestible. Link to public Ctrip pages and write our own summaries. Do not display Ctrip ratings/review counts as a copied data layer.
+
+Useful URLs:
+
+- https://contents.ctrip.com/activitysetupapp/mkt/index/agreement202311
+- https://contents.ctrip.com/activitysetupapp/mkt/index/userrule
+- https://docs.c-ctrip.com/files/6/unc_agreement_pdf/1tm3r12000hb2zpof8D77.pdf
+- https://pages.c-ctrip.com/public/encroachment.html
+
+## D. 美团 Meituan
+
+### Web vs app
+
+Finding 67. Meituan is the most app/transaction-driven platform in this set. The desktop homepage is mostly corporate; some city/category paths redirect or fail for non-app/public browsing.
+
+Finding 68. The mobile app download page explicitly describes the consumer product as covering food, delivery, hotel booking, tourism deals, flights, train tickets, movie tickets, scenic tickets, and group tours.
+
+Finding 69. The same page states Meituan provides consumer reviews, merchant ratings, and merchant information query functions. This confirms review/merchant-data existence but not public reuse rights.
+
+Useful URLs:
+
+- https://www.meituan.com/
+- https://bj.meituan.com/
+- https://i.meituan.com/client/meituan
+
+### Meituan vs Dianping
+
+Finding 70. Meituan and Dianping merged in 2015. Public reporting says the merged entity integrated resources while retaining brands/businesses.
+
+Finding 71. Practical differentiation for tourism research: Dianping is the local-life content/review/discovery layer; Meituan is the transaction layer for coupons, tickets, hotels, deals, and app conversion. Data overlaps, but user intent differs.
+
+Finding 72. For our project, Dianping helps answer "what locals praise and rank"; Meituan helps answer "what people buy/book/use now." But Meituan's public web leakage is weak.
+
+Useful URLs:
+
+- https://m.21jingji.com/article/20151008/herald/d1a64f593c439e3c4f722d415556d582.html
+- https://finance.sina.cn/usstock/hlwgs/2015-11-12/tech-ifxkrwks3777633.d.html
+- https://finance.sina.com.cn/chanjing/gsnews/20151009/020923424040.shtml
+
+### Tourism / 景点 / 玩乐 coverage
+
+Finding 73. Meituan app product coverage includes 旅游周边: flights, train tickets, scenic tickets, and group tours. This likely covers Beijing, Shanghai, Guangzhou, and Shenzhen, but the useful browsing happens in-app.
+
+Finding 74. Public web pages do not provide enough stable tourism data to build city guides. Treat Meituan as blocked for extraction and referenceable only for high-level product availability or editor app checks.
+
+### Legal
+
+Finding 75. Meituan legal treatment is the same family as Dianping. The IP statement explicitly covers rankings, data, and information, and prohibits unlicensed copying, reproducing, quoting, linking, and technical scraping.
+
+## E. 飞猪 Fliggy
+
+### Public web data
+
+Finding 76. Fliggy's public desktop homepage is a booking portal, not a review/discovery corpus. Its title and page text cover flights, hotels, inns, vacation products, attraction tickets, and visas.
+
+Finding 77. The public homepage describes product coverage: flight booking, hotel booking, train tickets, vacation packages, attraction tickets, business travel, local transport, travel insurance, and Alibaba business travel.
+
+Finding 78. I did not find a public, indexable Fliggy equivalent of Dianping review pages or Ctrip's `you.ctrip.com` community depth. Most useful data is likely app/search/product-detail driven.
+
+Useful URLs:
+
+- https://www.fliggy.com/
+- https://www.fliggy.com/travel
+- https://www.alitrip.com/
+- https://rule.fliggy.com/
+
+### 旅游攻略 community
+
+Finding 79. Fliggy may have travel content in app/product flows, but I did not find a robust public web travel-guide community comparable to Ctrip攻略社区. Do not plan editorial extraction from Fliggy.
+
+### Foreign-card payment status
+
+Finding 80. Fliggy's merchant service agreement says merchants accept Alipay services, other Alipay-provided payment methods, or platform-supported payment methods. It also says Fliggy will continue expanding payment methods and rollout may be phased.
+
+Finding 81. I found no official Fliggy public page that guarantees foreign Visa/Mastercard acceptance for foreign tourists across attraction tickets/hotels/packages.
+
+Finding 82. Practical recommendation: do not send foreign tourists to Fliggy as a primary booking path unless testing a specific SKU/payment path. Use Trip.com/Ctrip, official attraction sites, or WeChat/Alipay mini-program guidance instead.
+
+### Legal
+
+Finding 83. Fliggy merchant agreement says Fliggy official products, technology, software, programs, data, and other information belong to Fliggy/affiliates; merchants agree not to commercially use other Fliggy platform data without approval, including copying, spreading, or disclosing other users' materials.
+
+Finding 84. Even where product titles/prices are visible, do not build a replicated Fliggy travel-product database without a partner agreement.
+
+Useful URLs:
+
+- https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231106103244276/20231106103244276_1_3_19922.pdf
+- https://rule.fliggy.com/
+
+## F. Practical conclusion for our project
+
+### What we can safely do
+
+Finding 85. Build our own POI and guide pages from original editorial research, official attraction/government sources, and licensed map APIs.
+
+Finding 86. Link out to Dianping, AMap, Ctrip, Meituan, and Fliggy pages where helpful, but avoid copying their proprietary data fields into our own UI.
+
+Finding 87. Use Dianping/Meituan internally to discover local restaurants, old shops, top dishes, neighborhoods, and whether a place is locally validated. Convert that into our own prose and recommendations.
+
+Finding 88. Use AMap ranking pages to understand search/navigation heat and city "must go" hierarchy. Use AMap API/deep links only in compliance with API terms and cross-border restrictions.
+
+Finding 89. Use Ctrip Q&A and recent reviews to detect operational friction: booking windows, ID/passport issues, luggage storage, elderly/child suitability, closures, crowd timing, and transport timing.
+
+Finding 90. Treat Fliggy primarily as a booking-market sanity check, not as a tourism-intel source.
+
+### Information architecture patterns worth copying, not the data
+
+Finding 91. Use city landing pages with category rows: food, sights, museums/exhibitions, night views, family, shopping, transit neighborhoods.
+
+Finding 92. Add "locals actually go" modules based on our own synthesis of: old-shop longevity, local neighborhood density, AMap navigation/search heat, Ctrip Q&A frequency, and repeated mentions across sources.
+
+Finding 93. Split rankings by intent, not just overall score: first-time must-see, rainy day, night view, family, low-walking, food street, old-local favorite, near subway, open late.
+
+Finding 94. Show "what is hidden behind Chinese apps" as traveller guidance: full reviews, current queues, exact deals, live crowding, and some ticket flows require local apps.
+
+Finding 95. Use source badges carefully:
+
+- "Editors checked Dianping/Meituan/AMap/Ctrip" is safer than "Dianping says 4.8".
+- "Open in AMap" is safer than copying AMap traffic/transit data.
+- "Read recent Ctrip Q&A" is safer than reproducing Q&A answers.
+
+### Source URL index
+
+1. https://www.dianping.com/beijing
+2. https://www.dianping.com/shanghai
+3. https://www.dianping.com/guangzhou
+4. https://www.dianping.com/shenzhen
+5. https://m.dianping.com/shop/2116402?msource=applemaps
+6. https://m.dianping.com/shop/68075700?msource=applemaps
+7. https://m.dianping.com/shop/814921852?msource=applemaps
+8. https://m.dianping.com/shop/131544661?msource=applemaps
+9. https://www.dianping.com/biyingbang
+10. https://www.dianping.com/blackpearl
+11. https://index.meituan.com/reports/meituan-black-pearl-2026/
+12. https://rules-center.meituan.com/m/detail/guize/69
+13. https://open.dianping.com/
+14. https://developer.meituan.com/
+15. https://www.amap.com/place/B000A8UIN8
+16. https://gaode.com/poi/B000A8UIN8
+17. https://lbs.amap.com/api/webservice/summary
+18. https://lbs.amap.com/api/webservice/guide/api-advanced/search
+19. https://www.amap.com/ranking/beijing/scenic
+20. https://www.amap.com/ranking/shanghai/scenic
+21. https://www.amap.com/ranking/guangzhou/scenic
+22. https://www.amap.com/ranking/shenzhen/scenic
+23. https://ranks.amap.com/
+24. https://lbs.amap.com/api/webservice/guide/api/direction
+25. https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry
+26. https://cache.amap.com/h5/h5/publish/241/index.html
+27. https://you.ctrip.com/htmlpages/guide.html/
+28. https://you.ctrip.com/sight/peking1.html
+29. https://you.ctrip.com/sight/beijing1/52626.html
+30. https://you.ctrip.com/travels/beijing1.html
+31. https://you.ctrip.com/asks/
+32. https://you.ctrip.com/asks/beijing1.html
+33. https://contents.ctrip.com/activitysetupapp/mkt/index/agreement202311
+34. https://contents.ctrip.com/activitysetupapp/mkt/index/userrule
+35. https://www.meituan.com/
+36. https://bj.meituan.com/
+37. https://i.meituan.com/client/meituan
+38. https://m.21jingji.com/article/20151008/herald/d1a64f593c439e3c4f722d415556d582.html
+39. https://www.fliggy.com/
+40. https://www.fliggy.com/travel
+41. https://rule.fliggy.com/
+42. https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231106103244276/20231106103244276_1_3_19922.pdf
+
+## Final platform classification
+
+| Platform | Classification | What is usable on our site | What is referenceable for editors | What is blocked / avoid |
+|---|---:|---|---|---|
+| 大众点评 Dianping | REFERENCEABLE | Outbound links to public shop/list/report pages; high-level statements from official news/reports with citation | Local restaurant discovery, top dishes, local badges, rough popularity, 必吃榜/黑珍珠 coverage | Republishing ratings, review counts, reviews, photos, top-dish counts, full list data, queue/deal signals without license |
+| 高德地图 AMap | USABLE WITH LICENSE / REFERENCEABLE | Official API/embed/deep links under AMap terms; public link-out to ranking pages | City scenic hierarchy, tags, navigation/search heat proxy, routing friction | Scraping/caching POI, traffic, transit, or map data; offshore transfer/storage of China map data; live crowd/transit embeds without permission |
+| 携程 Ctrip China-side | REFERENCEABLE | Outbound links to attraction, Q&A, guide, and booking pages; own editorial summaries | Practical travel Q&A, recent operational issues, attraction policies, route/time tips, Chinese-local reviews | Republishing Ctrip ratings, review counts, review text, photos, Q&A answers, or guide text commercially |
+| 美团 Meituan | BLOCKED / REFERENCEABLE | High-level product link-out or app download guidance | App-only check for ticket/deal availability and transaction signals | Extracting merchant ratings, review data, deals, tickets, or app-only tourism inventory |
+| 飞猪 Fliggy | BLOCKED / LOW-VALUE REFERENCEABLE | Link-out to Fliggy booking pages only where a specific booking path is tested | Price/inventory sanity check for Alibaba travel products | Review/community extraction, product database replication, claiming foreign-card acceptance without SKU-level testing |

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$path='"'v2\\research\\china-platforms-02-maps-reviews.md'; "'$content=Get-Content -LiteralPath $path -Raw -Encoding UTF8; $findings=([regex]::Matches($content,'"'Finding \\d+\\.')).Count; "'$urls=([regex]::Matches($content,'"'https?://["'^'"\\s)]+')).Value | Sort-Object -Unique; \"Path: "'$((Resolve-Path $path).Path)"; "Finding count: $findings"; "Distinct URL count: $($urls.Count)"; "Bytes: $((Get-Item $path).Length)"' in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short -- v2/research/china-platforms-02-maps-reviews.md' in c:\Users\h\Documents\New project 2
 succeeded in 774ms:
?? v2/research/china-platforms-02-maps-reviews.md

 succeeded in 833ms:
Path: C:\Users\h\Documents\New project 2\v2\research\china-platforms-02-maps-reviews.md
Finding count: 95
Distinct URL count: 71
Bytes: 29959

diff --git a/v2/research/china-platforms-02-maps-reviews.md b/v2/research/china-platforms-02-maps-reviews.md
new file mode 100644
index 0000000000000000000000000000000000000000..2885ea2dec3d7b815cf792554695d24f052af27f
--- /dev/null
+++ b/v2/research/china-platforms-02-maps-reviews.md
@@ -0,0 +1,452 @@
+# China domestic maps/reviews platforms for tourism intel
+
+Last checked: 2026-05-10  
+Scope: 大众点评 Dianping, 美团 Meituan, 高德地图 AMap, 携程 Ctrip China-side, 飞猪 Fliggy.  
+Project use case: a foreign-tourist-to-China information site that wants to understand what locals actually visit without copying protected platform content.
+
+## Executive read
+
+Finding 1. The best "locals actually go here" signal is not a single source. It is a triangulation of Dianping/Meituan review behavior, AMap search/navigation heat, and Ctrip travel Q&A/reviews.
+
+Finding 2. The most legally usable layer is outbound linking plus original editorial synthesis. Directly republishing ratings, review counts, photos, review text, top dishes, or ranked lists from Dianping/Meituan/Ctrip/Fliggy is high risk unless covered by an explicit license.
+
+Finding 3. AMap is the only platform in this set with a broad public developer API suitable for production integration, but its terms still restrict extraction, standalone display, commercial use without permission, and cross-border handling of China map data.
+
+Finding 4. The best open editorial patterns to imitate are: city/category list pages, "top 20 visible, full list in app" teaser rankings, short contextual tags, Q&A snippets, season/use-case sublists, and separate official/UGC/review modules.
+
+Finding 5. For foreign tourists, Ctrip/Trip.com remains the safest booking layer. Dianping/Meituan/AMap are better as editor research inputs and link-out sources than as data sources to ingest.
+
+## A. 大众点评 Dianping
+
+### Public web access pattern
+
+Finding 6. Dianping's desktop city pages are readable at:
+
+- Beijing: https://www.dianping.com/beijing
+- Shanghai: https://www.dianping.com/shanghai
+- Guangzhou: https://www.dianping.com/guangzhou
+- Shenzhen: https://www.dianping.com/shenzhen
+
+Finding 7. Those city pages expose city IDs and English city slugs in page data. Observed IDs: Shanghai `1`, Beijing `2`, Guangzhou `4`, Shenzhen `7`.
+
+Finding 8. The city pages expose broad IA categories that matter for tourism: 美食, 酒店, 周边游, 景点, 展馆展览, 动植物园, 温泉, 滑雪, 购物, 热门商圈, and subway-line browsing.
+
+Finding 9. Individual shop pages are city-agnostic and use `/shop/{id}`. The mobile page is often the most indexable public surface, for example:
+
+- https://m.dianping.com/shop/2116402?msource=applemaps
+- https://m.dianping.com/shop/68075700?msource=applemaps
+- https://m.dianping.com/shop/814921852?msource=applemaps
+- https://m.dianping.com/shop/131544661?msource=applemaps
+
+Finding 10. Search snippets and public HTML show the common page title pattern: `【店名】电话_地址_价格_营业时间_商圈/菜系团购 - 大众点评网`. The title suggests a rich merchant profile, but much of the actual page body is masked or app-gated.
+
+### Visible to non-logged-in foreign users
+
+Finding 11. On the observed mobile shop pages, non-logged-in users can often see: merchant name, star rating, per-capita price, neighborhood/category, list/ranking badges, open/closed state, photo count, discount/tuan-gou placeholders, recommended dishes, and per-dish recommendation counts.
+
+Finding 12. Example: the public mobile page for 聚点串吧 showed rating, per-capita price, "新街口商圈 烤串", a local hot-list badge, a visible `2万+` photo/review-like count, and recommended dishes such as 老北京疙瘩汤, 爆香小嫩牛, 泰式蜜汁鸡翅.
+
+Finding 13. Addresses are often partially masked on public mobile pages, e.g. `赵登禹路1******`, and hours can be replaced by app-gated copy such as `APP内查看商户信息`.
+
+Finding 14. Phone numbers were not visible in the observed non-logged-in page body, despite "电话" appearing in the SEO page title.
+
+Finding 15. Deep photos, complete menus, full review streams, full addresses, queue/wait signals, and some deal prices are pushed into the app or login flow.
+
+### Hidden behind login/app walls
+
+Finding 16. The strongest Dianping signals for "locals actually visit" are mostly not safely extractable from the public web: review text, reviewer identity/level, queueing, current popularity, deal conversion, detailed photos, and stable full address/phone data.
+
+Finding 17. Dianping anti-scraping is active. In one observed request, a public mobile shop URL redirected to a Meituan verification center with `spiderindefence` in the URL.
+
+### 必吃榜
+
+Finding 18. The official public URL https://www.dianping.com/biyingbang redirected to Dianping login/citylist in my non-logged-in check. Treat the full list as app/login-first.
+
+Finding 19. The latest fully released 必吃榜 available in public media at the time of research was the 2025 list, released on 2025-06-25, with 144 cities/regions and 3,091 restaurants. Public reports say Shanghai, Beijing, Chengdu, Chongqing, and Shenzhen were top-five cities by listed restaurant count.
+
+Finding 20. The 2026 必吃榜 was not final as of 2026-05-10. Public reports say the 2026 entrant/shortlist was announced on 2026-04-23, covering 264 cities/regions and 4,326 restaurants, with Shanghai, Beijing, Chengdu, Chongqing, Guangzhou, Shenzhen, Xi'an, Wuhan, Suzhou, and Nanjing in the top ten by entrant count. Final release was reported as scheduled for 2026-06-24.
+
+Finding 21. For our four cities, the shortlist/final-list coverage is strong: Beijing, Shanghai, Guangzhou, and Shenzhen all appear in national top-city coverage for 必吃榜.
+
+Finding 22. Update cadence: annual. The observed pattern is spring shortlist/publicity followed by a mid-year final release.
+
+Useful URLs:
+
+- https://www.dianping.com/biyingbang
+- https://www.news.cn/tech/20250626/c4e830a0513147bf9505c9da54318067/c.html
+- https://m.bjnews.com.cn/detail/1750911314168601.html
+- https://www.dutenews.com/n/article/8913274
+- https://www.bbtnews.com.cn/2026/0424/591528.shtml
+- https://cbgc.scol.com.cn/news/7527616
+- https://society.yunnan.cn/system/2026/04/23/033978393.shtml
+
+### 黑珍珠餐厅指南
+
+Finding 23. Black Pearl is a Meituan/Dianping-owned high-end restaurant guide, often described as China's domestic answer to Michelin.
+
+Finding 24. The 2026 public official-ish Meituan Index report says the 2026 Black Pearl guide was released on 2026-01-28, with 263 mainland China restaurants, 7 upgraded restaurants, and 46 new entrants.
+
+Finding 25. The report says the guide is published by Meituan/Dianping and assessed by professional judges across dish quality, service, environment, inheritance, and innovation.
+
+Finding 26. The desktop `https://www.dianping.com/blackpearl` URL redirected to login/citylist in my check. The public web is usable for meta/report-level facts; the full browseable restaurant list is not reliably public without app/login.
+
+Finding 27. Coverage in 北上广深 is strong, but the safest citable source is the official annual report/news release, not scraped restaurant cards.
+
+Useful URLs:
+
+- https://www.dianping.com/blackpearl
+- https://index.meituan.com/reports/meituan-black-pearl-2026/
+- https://about.meituan.com/news/NN260128167003529
+- https://www.bjwmb.gov.cn/wmdt/cyq/10119347.html
+
+### Citing Dianping ratings/review counts
+
+Finding 28. Do not treat Dianping ratings as equivalent to Google Maps ratings for free third-party reuse. Meituan's IP statement says Meituan-provided content including pages, text, images, rankings, layout, data, and information belongs to Meituan unless otherwise stated.
+
+Finding 29. The same IP statement says, absent legal exception or written permission, no entity/person may copy, reproduce, quote, link to, or scrape Meituan platform content or information in whole or in part.
+
+Finding 30. Practical recommendation: use Dianping ratings/review counts as editor research only. On our site, write our own recommendation and link to the Dianping page or official report where useful. Avoid displaying "Dianping rating: 4.8 / 60k reviews" unless licensed.
+
+Useful URLs:
+
+- https://rules-center.meituan.com/m/detail/guize/69
+- https://h5.dianping.com/app/m-static-base-page/agreement.html?product=dpapp
+- https://open.dianping.com/
+- https://developer.meituan.com/
+
+### Open data / partnerships
+
+Finding 31. There is no obvious public tourism/review open dataset for foreign publishers. The available official platform surfaces are business/merchant/integration oriented: 北极星开放平台 and 美团技术服务合作中心.
+
+Finding 32. A legitimate integration would need a commercial partnership or API terms that explicitly permit the desired display and geography. Do not use third-party scraping APIs.
+
+## B. 高德地图 AMap / Gaode
+
+### Public attraction/landmark pages
+
+Finding 33. AMap place URL patterns observed:
+
+- `https://www.amap.com/place/{POI_ID}`
+- `https://gaode.com/poi/{POI_ID}`
+- `https://ditu.amap.com/place/{POI_ID}`
+- Search shell: `https://www.amap.com/search?query={encodedName}&city={adcode}`
+
+Example checked: https://www.amap.com/place/B000A8UIN8 and https://gaode.com/poi/B000A8UIN8.
+
+Finding 34. The public POI page shell is accessible, but the HTML response is a JavaScript app shell, not a stable indexable text profile. Do not rely on static HTML extraction for POI details.
+
+Finding 35. AMap's official Web Service API provides the structured POI route. The Search POI docs include keyword search, around search, polygon search, and ID query by POI ID.
+
+Finding 36. API-returnable POI fields include name/type/typecode, address, location, telephone, website, business area, indoor map data, tags, `biz_ext.rating`, `biz_ext.cost`, and photo URLs when `extensions=all`.
+
+Finding 37. The API docs explicitly state that rating exists only for restaurants, hotels, attractions, and cinemas, and that photos are returned with `extensions=all`.
+
+Useful URLs:
+
+- https://www.amap.com/place/B000A8UIN8
+- https://gaode.com/poi/B000A8UIN8
+- https://ditu.amap.com/place/B000A8UIN8
+- https://lbs.amap.com/api/webservice/summary
+- https://lbs.amap.com/api/webservice/guide/api-advanced/search
+
+### AMap web vs app crowd data
+
+Finding 38. AMap web ranking pages expose curated rankings and scores, not live crowd density. The pages show "完整榜单请在高德地图APP内查看", which confirms the app is the deeper surface.
+
+Finding 39. If AMap exposes crowding, queue, indoor navigation, or real-time scenic-area comfort signals, assume they are app/product-specific unless an official API endpoint says otherwise. I found official API docs for traffic status and bus inquiry, but not a public scenic crowd-density API suitable for embedding.
+
+### 高德指南 / official travel recommendation
+
+Finding 40. AMap's public ranking pages are highly relevant. URL pattern:
+
+- Beijing scenic: https://www.amap.com/ranking/beijing/scenic
+- Shanghai scenic: https://www.amap.com/ranking/shanghai/scenic
+- Guangzhou scenic: https://www.amap.com/ranking/guangzhou/scenic
+- Shenzhen scenic: https://www.amap.com/ranking/shenzhen/scenic
+- Ranking plaza: https://ranks.amap.com/
+- Ranking browse: https://ranks.amap.com/ranking
+
+Finding 41. These pages show 2025 高德状元榜/扫街榜 style lists with "全年综合分", tags, and short editorial blurbs. Beijing's scenic page showed 64 total places but only top 20 on web; Shanghai 47; Guangzhou 43; Shenzhen 29.
+
+Finding 42. Beijing examples from the public page: 故宫博物院, 中国国家博物馆, 天坛公园, 什刹海, 颐和园, each with a score and contextual tags. This is a strong "visited/search/navigation heat" editorial signal.
+
+Finding 43. AMap's public/media explanation says 高德指南 rankings use real AMap search/navigation data plus user evaluations and merchant quality, which is exactly the "locals actually go here" pattern we want to emulate editorially.
+
+Useful URLs:
+
+- https://www.amap.com/ranking/beijing/scenic
+- https://www.amap.com/ranking/shanghai/scenic
+- https://www.amap.com/ranking/guangzhou/scenic
+- https://www.amap.com/ranking/shenzhen/scenic
+- https://ranks.amap.com/
+- https://ranks.amap.com/ranking
+- https://www.sznews.com/news/content/2025-01/20/content_31444248.htm
+- https://www.pingwest.com/w/218091
+
+### Transit / congestion / embed exposure
+
+Finding 44. AMap Web Service API exposes traffic status query endpoints such as `https://restapi.amap.com/v3/traffic/status/road?parameters`, requiring a key.
+
+Finding 45. AMap Web Service API exposes route planning, including walking, transit, driving, and distance calculation. The route docs caution that same-origin/destination results may change as road/data/algorithms change.
+
+Finding 46. Public transit live arrival and subway transfer ergonomics are primarily app/native product experiences. I did not find a public no-key web embed for live arrivals. For our site, the realistic legal path is "open in AMap" deep links or licensed API route estimates, not embedding live AMap transit boards.
+
+Useful URLs:
+
+- https://lbs.amap.com/api/webservice/guide/api/direction
+- https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry
+- https://lbs.amap.com/api/webservice/guide/api-advanced/bus-inquiry
+- https://lbs.amap.com/api/javascript-api-v2/guide/abc/prepare
+
+### AMap public API and developer requirements
+
+Finding 47. AMap Web Service API is documented as open to all users, but requires an application key. The setup flow is: register as AMap developer, create an application, obtain a key.
+
+Finding 48. Personal and enterprise developers get different quotas; quota details are now routed to pricing/control-console pages. Older/current docs still state that service call limits and QPS quota depend on account status and can be checked/upgraded in the console.
+
+Finding 49. For foreign developers, I found no official English page guaranteeing easy foreign KYC. The practical blocker is likely account registration, phone/Alibaba identity flows, business verification, and China map-data compliance.
+
+Useful URLs:
+
+- https://lbs.amap.com/api/webservice/summary
+- https://lbs.amap.com/api/webservice/guide/tools/flowlevel
+- https://lbs.amap.com/api/webservice/guide/api-advanced/search
+- https://lbs.amap.com/api/webservice/guide/api/direction
+
+### Legal / redistribution
+
+Finding 50. AMap terms are restrictive for our use case. They define relevant content to include map data, traffic information, address data, merchant lists, navigation voice, and other content.
+
+Finding 51. AMap grants a personal, non-transferable, revocable, non-exclusive license and says commercial use requires separate written agreement or written permission.
+
+Finding 52. AMap terms prohibit attempting to extract source code or original data; using crawlers/scrapers/indexers; storing/caching/retrieving/indexing service/data; and using AMap content separately from AMap products/services.
+
+Finding 53. Crucially for a foreign site, AMap terms say users may not download China domestic map data outside China or transfer, store, or provide China domestic map data overseas.
+
+Recommendation: AMap is usable only through compliant API/embed/deep-link workflows, with counsel review for cross-border data handling. Do not build a cached AMap-derived POI database offshore.
+
+Useful URL:
+
+- https://cache.amap.com/h5/h5/publish/241/index.html
+
+## C. 携程 Ctrip China-side
+
+### What is unique vs Trip.com
+
+Finding 54. Ctrip's China-side `you.ctrip.com` is much deeper than a pure booking site. It has destination pages, scenic pages, UGC travel notes, Q&A, user comments, rankings, photo modules, opening hours, policy details, and Chinese-local operational tips.
+
+Finding 55. Ctrip scenic pages can be publicly read without login. Example: 鸟巢 page exposed attraction score, review count, address, opening hours, official phone, notice text, detailed intro, photo strategy, ticket/benefit policies, Q&A, and recent user reviews.
+
+Finding 56. Ctrip city scenic lists expose public IA patterns: "必打卡景点榜", "夜游必打卡景点榜", "亲子景点榜", "赏花踏青景点榜", "滑雪景点榜", "温泉景点榜", plus paginated attraction cards.
+
+Finding 57. Ctrip travel-note list pages expose title, author, publish/reply dates, trip duration, spend, travel party, view/comment/like counts, and pagination.
+
+Finding 58. Ctrip Q&A pages are publicly readable and very valuable for foreign-tourist pain points: reservation requirements, IDs, lockers, elderly suitability, weather, transport timing, hotel practicalities, and ticket scarcity.
+
+Useful URL patterns:
+
+- City scenic list: https://you.ctrip.com/sight/peking1.html
+- Attraction detail: https://you.ctrip.com/sight/beijing1/52626.html
+- Travel notes list: https://you.ctrip.com/travels/beijing1.html
+- Travel note detail: https://you.ctrip.com/travels/beijing1/4126037.html
+- Q&A root: https://you.ctrip.com/asks/
+- City Q&A: https://you.ctrip.com/asks/beijing1.html
+- Community guide: https://you.ctrip.com/htmlpages/guide.html/
+
+### Community guide / public reading
+
+Finding 59. Ctrip's own community guide describes the platform as channels for destination info, travel notes, Q&A, and official destination/tourism bureau info. It says the information comes from real community users and is intended to help planning/sharing.
+
+Finding 60. Public reading is allowed by product design, but republication is not. Use it as editor research and link out.
+
+### Booking widgets and foreign travelers
+
+Finding 61. Ctrip China-side is useful for local inventory and operations: domestic hotels, trains, activities, tickets, China customer-service flows, Chinese names, and sometimes more local Q&A than Trip.com.
+
+Finding 62. For actual foreign tourists, Trip.com is still the cleaner front door for English UI, foreign cards, international customer service, and passport-friendly flows. The Chinese Ctrip site may require Chinese literacy, Chinese phone/SMS, China-specific payment, and local identity assumptions.
+
+Finding 63. Our site should not embed Ctrip booking widgets unless there is an affiliate/partner agreement. Use text links or "book via Trip.com/Ctrip" buttons under affiliate rules.
+
+### Legal / redistribution
+
+Finding 64. Ctrip's user agreement forbids commercial use of any Ctrip platform data without permission, including use by web crawler, copy, propagation, or other means.
+
+Finding 65. Ctrip's user agreement says Ctrip-owned platform content, including pages, text, images, audio/video, data, and information, belongs to Ctrip and cannot be used or made into derivatives without written consent.
+
+Finding 66. Ctrip攻略社区 user rules say third parties may not obtain/use any part of the site or any content/service/material directly or indirectly available through the site for non-private or commercial purposes without explicit written permission.
+
+Recommendation: Ctrip is referenceable, not ingestible. Link to public Ctrip pages and write our own summaries. Do not display Ctrip ratings/review counts as a copied data layer.
+
+Useful URLs:
+
+- https://contents.ctrip.com/activitysetupapp/mkt/index/agreement202311
+- https://contents.ctrip.com/activitysetupapp/mkt/index/userrule
+- https://docs.c-ctrip.com/files/6/unc_agreement_pdf/1tm3r12000hb2zpof8D77.pdf
+- https://pages.c-ctrip.com/public/encroachment.html
+
+## D. 美团 Meituan
+
+### Web vs app
+
+Finding 67. Meituan is the most app/transaction-driven platform in this set. The desktop homepage is mostly corporate; some city/category paths redirect or fail for non-app/public browsing.
+
+Finding 68. The mobile app download page explicitly describes the consumer product as covering food, delivery, hotel booking, tourism deals, flights, train tickets, movie tickets, scenic tickets, and group tours.
+
+Finding 69. The same page states Meituan provides consumer reviews, merchant ratings, and merchant information query functions. This confirms review/merchant-data existence but not public reuse rights.
+
+Useful URLs:
+
+- https://www.meituan.com/
+- https://bj.meituan.com/
+- https://i.meituan.com/client/meituan
+
+### Meituan vs Dianping
+
+Finding 70. Meituan and Dianping merged in 2015. Public reporting says the merged entity integrated resources while retaining brands/businesses.
+
+Finding 71. Practical differentiation for tourism research: Dianping is the local-life content/review/discovery layer; Meituan is the transaction layer for coupons, tickets, hotels, deals, and app conversion. Data overlaps, but user intent differs.
+
+Finding 72. For our project, Dianping helps answer "what locals praise and rank"; Meituan helps answer "what people buy/book/use now." But Meituan's public web leakage is weak.
+
+Useful URLs:
+
+- https://m.21jingji.com/article/20151008/herald/d1a64f593c439e3c4f722d415556d582.html
+- https://finance.sina.cn/usstock/hlwgs/2015-11-12/tech-ifxkrwks3777633.d.html
+- https://finance.sina.com.cn/chanjing/gsnews/20151009/020923424040.shtml
+
+### Tourism / 景点 / 玩乐 coverage
+
+Finding 73. Meituan app product coverage includes 旅游周边: flights, train tickets, scenic tickets, and group tours. This likely covers Beijing, Shanghai, Guangzhou, and Shenzhen, but the useful browsing happens in-app.
+
+Finding 74. Public web pages do not provide enough stable tourism data to build city guides. Treat Meituan as blocked for extraction and referenceable only for high-level product availability or editor app checks.
+
+### Legal
+
+Finding 75. Meituan legal treatment is the same family as Dianping. The IP statement explicitly covers rankings, data, and information, and prohibits unlicensed copying, reproducing, quoting, linking, and technical scraping.
+
+## E. 飞猪 Fliggy
+
+### Public web data
+
+Finding 76. Fliggy's public desktop homepage is a booking portal, not a review/discovery corpus. Its title and page text cover flights, hotels, inns, vacation products, attraction tickets, and visas.
+
+Finding 77. The public homepage describes product coverage: flight booking, hotel booking, train tickets, vacation packages, attraction tickets, business travel, local transport, travel insurance, and Alibaba business travel.
+
+Finding 78. I did not find a public, indexable Fliggy equivalent of Dianping review pages or Ctrip's `you.ctrip.com` community depth. Most useful data is likely app/search/product-detail driven.
+
+Useful URLs:
+
+- https://www.fliggy.com/
+- https://www.fliggy.com/travel
+- https://www.alitrip.com/
+- https://rule.fliggy.com/
+
+### 旅游攻略 community
+
+Finding 79. Fliggy may have travel content in app/product flows, but I did not find a robust public web travel-guide community comparable to Ctrip攻略社区. Do not plan editorial extraction from Fliggy.
+
+### Foreign-card payment status
+
+Finding 80. Fliggy's merchant service agreement says merchants accept Alipay services, other Alipay-provided payment methods, or platform-supported payment methods. It also says Fliggy will continue expanding payment methods and rollout may be phased.
+
+Finding 81. I found no official Fliggy public page that guarantees foreign Visa/Mastercard acceptance for foreign tourists across attraction tickets/hotels/packages.
+
+Finding 82. Practical recommendation: do not send foreign tourists to Fliggy as a primary booking path unless testing a specific SKU/payment path. Use Trip.com/Ctrip, official attraction sites, or WeChat/Alipay mini-program guidance instead.
+
+### Legal
+
+Finding 83. Fliggy merchant agreement says Fliggy official products, technology, software, programs, data, and other information belong to Fliggy/affiliates; merchants agree not to commercially use other Fliggy platform data without approval, including copying, spreading, or disclosing other users' materials.
+
+Finding 84. Even where product titles/prices are visible, do not build a replicated Fliggy travel-product database without a partner agreement.
+
+Useful URLs:
+
+- https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231106103244276/20231106103244276_1_3_19922.pdf
+- https://rule.fliggy.com/
+
+## F. Practical conclusion for our project
+
+### What we can safely do
+
+Finding 85. Build our own POI and guide pages from original editorial research, official attraction/government sources, and licensed map APIs.
+
+Finding 86. Link out to Dianping, AMap, Ctrip, Meituan, and Fliggy pages where helpful, but avoid copying their proprietary data fields into our own UI.
+
+Finding 87. Use Dianping/Meituan internally to discover local restaurants, old shops, top dishes, neighborhoods, and whether a place is locally validated. Convert that into our own prose and recommendations.
+
+Finding 88. Use AMap ranking pages to understand search/navigation heat and city "must go" hierarchy. Use AMap API/deep links only in compliance with API terms and cross-border restrictions.
+
+Finding 89. Use Ctrip Q&A and recent reviews to detect operational friction: booking windows, ID/passport issues, luggage storage, elderly/child suitability, closures, crowd timing, and transport timing.
+
+Finding 90. Treat Fliggy primarily as a booking-market sanity check, not as a tourism-intel source.
+
+### Information architecture patterns worth copying, not the data
+
+Finding 91. Use city landing pages with category rows: food, sights, museums/exhibitions, night views, family, shopping, transit neighborhoods.
+
+Finding 92. Add "locals actually go" modules based on our own synthesis of: old-shop longevity, local neighborhood density, AMap navigation/search heat, Ctrip Q&A frequency, and repeated mentions across sources.
+
+Finding 93. Split rankings by intent, not just overall score: first-time must-see, rainy day, night view, family, low-walking, food street, old-local favorite, near subway, open late.
+
+Finding 94. Show "what is hidden behind Chinese apps" as traveller guidance: full reviews, current queues, exact deals, live crowding, and some ticket flows require local apps.
+
+Finding 95. Use source badges carefully:
+
+- "Editors checked Dianping/Meituan/AMap/Ctrip" is safer than "Dianping says 4.8".
+- "Open in AMap" is safer than copying AMap traffic/transit data.
+- "Read recent Ctrip Q&A" is safer than reproducing Q&A answers.
+
+### Source URL index
+
+1. https://www.dianping.com/beijing
+2. https://www.dianping.com/shanghai
+3. https://www.dianping.com/guangzhou
+4. https://www.dianping.com/shenzhen
+5. https://m.dianping.com/shop/2116402?msource=applemaps
+6. https://m.dianping.com/shop/68075700?msource=applemaps
+7. https://m.dianping.com/shop/814921852?msource=applemaps
+8. https://m.dianping.com/shop/131544661?msource=applemaps
+9. https://www.dianping.com/biyingbang
+10. https://www.dianping.com/blackpearl
+11. https://index.meituan.com/reports/meituan-black-pearl-2026/
+12. https://rules-center.meituan.com/m/detail/guize/69
+13. https://open.dianping.com/
+14. https://developer.meituan.com/
+15. https://www.amap.com/place/B000A8UIN8
+16. https://gaode.com/poi/B000A8UIN8
+17. https://lbs.amap.com/api/webservice/summary
+18. https://lbs.amap.com/api/webservice/guide/api-advanced/search
+19. https://www.amap.com/ranking/beijing/scenic
+20. https://www.amap.com/ranking/shanghai/scenic
+21. https://www.amap.com/ranking/guangzhou/scenic
+22. https://www.amap.com/ranking/shenzhen/scenic
+23. https://ranks.amap.com/
+24. https://lbs.amap.com/api/webservice/guide/api/direction
+25. https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry
+26. https://cache.amap.com/h5/h5/publish/241/index.html
+27. https://you.ctrip.com/htmlpages/guide.html/
+28. https://you.ctrip.com/sight/peking1.html
+29. https://you.ctrip.com/sight/beijing1/52626.html
+30. https://you.ctrip.com/travels/beijing1.html
+31. https://you.ctrip.com/asks/
+32. https://you.ctrip.com/asks/beijing1.html
+33. https://contents.ctrip.com/activitysetupapp/mkt/index/agreement202311
+34. https://contents.ctrip.com/activitysetupapp/mkt/index/userrule
+35. https://www.meituan.com/
+36. https://bj.meituan.com/
+37. https://i.meituan.com/client/meituan
+38. https://m.21jingji.com/article/20151008/herald/d1a64f593c439e3c4f722d415556d582.html
+39. https://www.fliggy.com/
+40. https://www.fliggy.com/travel
+41. https://rule.fliggy.com/
+42. https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231106103244276/20231106103244276_1_3_19922.pdf
+
+## Final platform classification
+
+| Platform | Classification | What is usable on our site | What is referenceable for editors | What is blocked / avoid |
+|---|---:|---|---|---|
+| 大众点评 Dianping | REFERENCEABLE | Outbound links to public shop/list/report pages; high-level statements from official news/reports with citation | Local restaurant discovery, top dishes, local badges, rough popularity, 必吃榜/黑珍珠 coverage | Republishing ratings, review counts, reviews, photos, top-dish counts, full list data, queue/deal signals without license |
+| 高德地图 AMap | USABLE WITH LICENSE / REFERENCEABLE | Official API/embed/deep links under AMap terms; public link-out to ranking pages | City scenic hierarchy, tags, navigation/search heat proxy, routing friction | Scraping/caching POI, traffic, transit, or map data; offshore transfer/storage of China map data; live crowd/transit embeds without permission |
+| 携程 Ctrip China-side | REFERENCEABLE | Outbound links to attraction, Q&A, guide, and booking pages; own editorial summaries | Practical travel Q&A, recent operational issues, attraction policies, route/time tips, Chinese-local reviews | Republishing Ctrip ratings, review counts, review text, photos, Q&A answers, or guide text commercially |
+| 美团 Meituan | BLOCKED / REFERENCEABLE | High-level product link-out or app download guidance | App-only check for ticket/deal availability and transaction signals | Extracting merchant ratings, review data, deals, tickets, or app-only tourism inventory |
+| 飞猪 Fliggy | BLOCKED / LOW-VALUE REFERENCEABLE | Link-out to Fliggy booking pages only where a specific booking path is tested | Price/inventory sanity check for Alibaba travel products | Review/community extraction, product database replication, claiming foreign-card acceptance without SKU-level testing |

  ✓ Gather platform evidence and terms
  ✓ Draft markdown report with citations
  ✓ Save report and verify URL/finding counts
diff --git a/v2/research/china-platforms-02-maps-reviews.md b/v2/research/china-platforms-02-maps-reviews.md
new file mode 100644
index 0000000000000000000000000000000000000000..2885ea2dec3d7b815cf792554695d24f052af27f
--- /dev/null
+++ b/v2/research/china-platforms-02-maps-reviews.md
@@ -0,0 +1,452 @@
+# China domestic maps/reviews platforms for tourism intel
+
+Last checked: 2026-05-10  
+Scope: 大众点评 Dianping, 美团 Meituan, 高德地图 AMap, 携程 Ctrip China-side, 飞猪 Fliggy.  
+Project use case: a foreign-tourist-to-China information site that wants to understand what locals actually visit without copying protected platform content.
+
+## Executive read
+
+Finding 1. The best "locals actually go here" signal is not a single source. It is a triangulation of Dianping/Meituan review behavior, AMap search/navigation heat, and Ctrip travel Q&A/reviews.
+
+Finding 2. The most legally usable layer is outbound linking plus original editorial synthesis. Directly republishing ratings, review counts, photos, review text, top dishes, or ranked lists from Dianping/Meituan/Ctrip/Fliggy is high risk unless covered by an explicit license.
+
+Finding 3. AMap is the only platform in this set with a broad public developer API suitable for production integration, but its terms still restrict extraction, standalone display, commercial use without permission, and cross-border handling of China map data.
+
+Finding 4. The best open editorial patterns to imitate are: city/category list pages, "top 20 visible, full list in app" teaser rankings, short contextual tags, Q&A snippets, season/use-case sublists, and separate official/UGC/review modules.
+
+Finding 5. For foreign tourists, Ctrip/Trip.com remains the safest booking layer. Dianping/Meituan/AMap are better as editor research inputs and link-out sources than as data sources to ingest.
+
+## A. 大众点评 Dianping
+
+### Public web access pattern
+
+Finding 6. Dianping's desktop city pages are readable at:
+
+- Beijing: https://www.dianping.com/beijing
+- Shanghai: https://www.dianping.com/shanghai
+- Guangzhou: https://www.dianping.com/guangzhou
+- Shenzhen: https://www.dianping.com/shenzhen
+
+Finding 7. Those city pages expose city IDs and English city slugs in page data. Observed IDs: Shanghai `1`, Beijing `2`, Guangzhou `4`, Shenzhen `7`.
+
+Finding 8. The city pages expose broad IA categories that matter for tourism: 美食, 酒店, 周边游, 景点, 展馆展览, 动植物园, 温泉, 滑雪, 购物, 热门商圈, and subway-line browsing.
+
+Finding 9. Individual shop pages are city-agnostic and use `/shop/{id}`. The mobile page is often the most indexable public surface, for example:
+
+- https://m.dianping.com/shop/2116402?msource=applemaps
+- https://m.dianping.com/shop/68075700?msource=applemaps
+- https://m.dianping.com/shop/814921852?msource=applemaps
+- https://m.dianping.com/shop/131544661?msource=applemaps
+
+Finding 10. Search snippets and public HTML show the common page title pattern: `【店名】电话_地址_价格_营业时间_商圈/菜系团购 - 大众点评网`. The title suggests a rich merchant profile, but much of the actual page body is masked or app-gated.
+
+### Visible to non-logged-in foreign users
+
+Finding 11. On the observed mobile shop pages, non-logged-in users can often see: merchant name, star rating, per-capita price, neighborhood/category, list/ranking badges, open/closed state, photo count, discount/tuan-gou placeholders, recommended dishes, and per-dish recommendation counts.
+
+Finding 12. Example: the public mobile page for 聚点串吧 showed rating, per-capita price, "新街口商圈 烤串", a local hot-list badge, a visible `2万+` photo/review-like count, and recommended dishes such as 老北京疙瘩汤, 爆香小嫩牛, 泰式蜜汁鸡翅.
+
+Finding 13. Addresses are often partially masked on public mobile pages, e.g. `赵登禹路1******`, and hours can be replaced by app-gated copy such as `APP内查看商户信息`.
+
+Finding 14. Phone numbers were not visible in the observed non-logged-in page body, despite "电话" appearing in the SEO page title.
+
+Finding 15. Deep photos, complete menus, full review streams, full addresses, queue/wait signals, and some deal prices are pushed into the app or login flow.
+
+### Hidden behind login/app walls
+
+Finding 16. The strongest Dianping signals for "locals actually visit" are mostly not safely extractable from the public web: review text, reviewer identity/level, queueing, current popularity, deal conversion, detailed photos, and stable full address/phone data.
+
+Finding 17. Dianping anti-scraping is active. In one observed request, a public mobile shop URL redirected to a Meituan verification center with `spiderindefence` in the URL.
+
+### 必吃榜
+
+Finding 18. The official public URL https://www.dianping.com/biyingbang redirected to Dianping login/citylist in my non-logged-in check. Treat the full list as app/login-first.
+
+Finding 19. The latest fully released 必吃榜 available in public media at the time of research was the 2025 list, released on 2025-06-25, with 144 cities/regions and 3,091 restaurants. Public reports say Shanghai, Beijing, Chengdu, Chongqing, and Shenzhen were top-five cities by listed restaurant count.
+
+Finding 20. The 2026 必吃榜 was not final as of 2026-05-10. Public reports say the 2026 entrant/shortlist was announced on 2026-04-23, covering 264 cities/regions and 4,326 restaurants, with Shanghai, Beijing, Chengdu, Chongqing, Guangzhou, Shenzhen, Xi'an, Wuhan, Suzhou, and Nanjing in the top ten by entrant count. Final release was reported as scheduled for 2026-06-24.
+
+Finding 21. For our four cities, the shortlist/final-list coverage is strong: Beijing, Shanghai, Guangzhou, and Shenzhen all appear in national top-city coverage for 必吃榜.
+
+Finding 22. Update cadence: annual. The observed pattern is spring shortlist/publicity followed by a mid-year final release.
+
+Useful URLs:
+
+- https://www.dianping.com/biyingbang
+- https://www.news.cn/tech/20250626/c4e830a0513147bf9505c9da54318067/c.html
+- https://m.bjnews.com.cn/detail/1750911314168601.html
+- https://www.dutenews.com/n/article/8913274
+- https://www.bbtnews.com.cn/2026/0424/591528.shtml
+- https://cbgc.scol.com.cn/news/7527616
+- https://society.yunnan.cn/system/2026/04/23/033978393.shtml
+
+### 黑珍珠餐厅指南
+
+Finding 23. Black Pearl is a Meituan/Dianping-owned high-end restaurant guide, often described as China's domestic answer to Michelin.
+
+Finding 24. The 2026 public official-ish Meituan Index report says the 2026 Black Pearl guide was released on 2026-01-28, with 263 mainland China restaurants, 7 upgraded restaurants, and 46 new entrants.
+
+Finding 25. The report says the guide is published by Meituan/Dianping and assessed by professional judges across dish quality, service, environment, inheritance, and innovation.
+
+Finding 26. The desktop `https://www.dianping.com/blackpearl` URL redirected to login/citylist in my check. The public web is usable for meta/report-level facts; the full browseable restaurant list is not reliably public without app/login.
+
+Finding 27. Coverage in 北上广深 is strong, but the safest citable source is the official annual report/news release, not scraped restaurant cards.
+
+Useful URLs:
+
+- https://www.dianping.com/blackpearl
+- https://index.meituan.com/reports/meituan-black-pearl-2026/
+- https://about.meituan.com/news/NN260128167003529
+- https://www.bjwmb.gov.cn/wmdt/cyq/10119347.html
+
+### Citing Dianping ratings/review counts
+
+Finding 28. Do not treat Dianping ratings as equivalent to Google Maps ratings for free third-party reuse. Meituan's IP statement says Meituan-provided content including pages, text, images, rankings, layout, data, and information belongs to Meituan unless otherwise stated.
+
+Finding 29. The same IP statement says, absent legal exception or written permission, no entity/person may copy, reproduce, quote, link to, or scrape Meituan platform content or information in whole or in part.
+
+Finding 30. Practical recommendation: use Dianping ratings/review counts as editor research only. On our site, write our own recommendation and link to the Dianping page or official report where useful. Avoid displaying "Dianping rating: 4.8 / 60k reviews" unless licensed.
+
+Useful URLs:
+
+- https://rules-center.meituan.com/m/detail/guize/69
+- https://h5.dianping.com/app/m-static-base-page/agreement.html?product=dpapp
+- https://open.dianping.com/
+- https://developer.meituan.com/
+
+### Open data / partnerships
+
+Finding 31. There is no obvious public tourism/review open dataset for foreign publishers. The available official platform surfaces are business/merchant/integration oriented: 北极星开放平台 and 美团技术服务合作中心.
+
+Finding 32. A legitimate integration would need a commercial partnership or API terms that explicitly permit the desired display and geography. Do not use third-party scraping APIs.
+
+## B. 高德地图 AMap / Gaode
+
+### Public attraction/landmark pages
+
+Finding 33. AMap place URL patterns observed:
+
+- `https://www.amap.com/place/{POI_ID}`
+- `https://gaode.com/poi/{POI_ID}`
+- `https://ditu.amap.com/place/{POI_ID}`
+- Search shell: `https://www.amap.com/search?query={encodedName}&city={adcode}`
+
+Example checked: https://www.amap.com/place/B000A8UIN8 and https://gaode.com/poi/B000A8UIN8.
+
+Finding 34. The public POI page shell is accessible, but the HTML response is a JavaScript app shell, not a stable indexable text profile. Do not rely on static HTML extraction for POI details.
+
+Finding 35. AMap's official Web Service API provides the structured POI route. The Search POI docs include keyword search, around search, polygon search, and ID query by POI ID.
+
+Finding 36. API-returnable POI fields include name/type/typecode, address, location, telephone, website, business area, indoor map data, tags, `biz_ext.rating`, `biz_ext.cost`, and photo URLs when `extensions=all`.
+
+Finding 37. The API docs explicitly state that rating exists only for restaurants, hotels, attractions, and cinemas, and that photos are returned with `extensions=all`.
+
+Useful URLs:
+
+- https://www.amap.com/place/B000A8UIN8
+- https://gaode.com/poi/B000A8UIN8
+- https://ditu.amap.com/place/B000A8UIN8
+- https://lbs.amap.com/api/webservice/summary
+- https://lbs.amap.com/api/webservice/guide/api-advanced/search
+
+### AMap web vs app crowd data
+
+Finding 38. AMap web ranking pages expose curated rankings and scores, not live crowd density. The pages show "完整榜单请在高德地图APP内查看", which confirms the app is the deeper surface.
+
+Finding 39. If AMap exposes crowding, queue, indoor navigation, or real-time scenic-area comfort signals, assume they are app/product-specific unless an official API endpoint says otherwise. I found official API docs for traffic status and bus inquiry, but not a public scenic crowd-density API suitable for embedding.
+
+### 高德指南 / official travel recommendation
+
+Finding 40. AMap's public ranking pages are highly relevant. URL pattern:
+
+- Beijing scenic: https://www.amap.com/ranking/beijing/scenic
+- Shanghai scenic: https://www.amap.com/ranking/shanghai/scenic
+- Guangzhou scenic: https://www.amap.com/ranking/guangzhou/scenic
+- Shenzhen scenic: https://www.amap.com/ranking/shenzhen/scenic
+- Ranking plaza: https://ranks.amap.com/
+- Ranking browse: https://ranks.amap.com/ranking
+
+Finding 41. These pages show 2025 高德状元榜/扫街榜 style lists with "全年综合分", tags, and short editorial blurbs. Beijing's scenic page showed 64 total places but only top 20 on web; Shanghai 47; Guangzhou 43; Shenzhen 29.
+
+Finding 42. Beijing examples from the public page: 故宫博物院, 中国国家博物馆, 天坛公园, 什刹海, 颐和园, each with a score and contextual tags. This is a strong "visited/search/navigation heat" editorial signal.
+
+Finding 43. AMap's public/media explanation says 高德指南 rankings use real AMap search/navigation data plus user evaluations and merchant quality, which is exactly the "locals actually go here" pattern we want to emulate editorially.
+
+Useful URLs:
+
+- https://www.amap.com/ranking/beijing/scenic
+- https://www.amap.com/ranking/shanghai/scenic
+- https://www.amap.com/ranking/guangzhou/scenic
+- https://www.amap.com/ranking/shenzhen/scenic
+- https://ranks.amap.com/
+- https://ranks.amap.com/ranking
+- https://www.sznews.com/news/content/2025-01/20/content_31444248.htm
+- https://www.pingwest.com/w/218091
+
+### Transit / congestion / embed exposure
+
+Finding 44. AMap Web Service API exposes traffic status query endpoints such as `https://restapi.amap.com/v3/traffic/status/road?parameters`, requiring a key.
+
+Finding 45. AMap Web Service API exposes route planning, including walking, transit, driving, and distance calculation. The route docs caution that same-origin/destination results may change as road/data/algorithms change.
+
+Finding 46. Public transit live arrival and subway transfer ergonomics are primarily app/native product experiences. I did not find a public no-key web embed for live arrivals. For our site, the realistic legal path is "open in AMap" deep links or licensed API route estimates, not embedding live AMap transit boards.
+
+Useful URLs:
+
+- https://lbs.amap.com/api/webservice/guide/api/direction
+- https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry
+- https://lbs.amap.com/api/webservice/guide/api-advanced/bus-inquiry
+- https://lbs.amap.com/api/javascript-api-v2/guide/abc/prepare
+
+### AMap public API and developer requirements
+
+Finding 47. AMap Web Service API is documented as open to all users, but requires an application key. The setup flow is: register as AMap developer, create an application, obtain a key.
+
+Finding 48. Personal and enterprise developers get different quotas; quota details are now routed to pricing/control-console pages. Older/current docs still state that service call limits and QPS quota depend on account status and can be checked/upgraded in the console.
+
+Finding 49. For foreign developers, I found no official English page guaranteeing easy foreign KYC. The practical blocker is likely account registration, phone/Alibaba identity flows, business verification, and China map-data compliance.
+
+Useful URLs:
+
+- https://lbs.amap.com/api/webservice/summary
+- https://lbs.amap.com/api/webservice/guide/tools/flowlevel
+- https://lbs.amap.com/api/webservice/guide/api-advanced/search
+- https://lbs.amap.com/api/webservice/guide/api/direction
+
+### Legal / redistribution
+
+Finding 50. AMap terms are restrictive for our use case. They define relevant content to include map data, traffic information, address data, merchant lists, navigation voice, and other content.
+
+Finding 51. AMap grants a personal, non-transferable, revocable, non-exclusive license and says commercial use requires separate written agreement or written permission.
+
+Finding 52. AMap terms prohibit attempting to extract source code or original data; using crawlers/scrapers/indexers; storing/caching/retrieving/indexing service/data; and using AMap content separately from AMap products/services.
+
+Finding 53. Crucially for a foreign site, AMap terms say users may not download China domestic map data outside China or transfer, store, or provide China domestic map data overseas.
+
+Recommendation: AMap is usable only through compliant API/embed/deep-link workflows, with counsel review for cross-border data handling. Do not build a cached AMap-derived POI database offshore.
+
+Useful URL:
+
+- https://cache.amap.com/h5/h5/publish/241/index.html
+
+## C. 携程 Ctrip China-side
+
+### What is unique vs Trip.com
+
+Finding 54. Ctrip's China-side `you.ctrip.com` is much deeper than a pure booking site. It has destination pages, scenic pages, UGC travel notes, Q&A, user comments, rankings, photo modules, opening hours, policy details, and Chinese-local operational tips.
+
+Finding 55. Ctrip scenic pages can be publicly read without login. Example: 鸟巢 page exposed attraction score, review count, address, opening hours, official phone, notice text, detailed intro, photo strategy, ticket/benefit policies, Q&A, and recent user reviews.
+
+Finding 56. Ctrip city scenic lists expose public IA patterns: "必打卡景点榜", "夜游必打卡景点榜", "亲子景点榜", "赏花踏青景点榜", "滑雪景点榜", "温泉景点榜", plus paginated attraction cards.
+
+Finding 57. Ctrip travel-note list pages expose title, author, publish/reply dates, trip duration, spend, travel party, view/comment/like counts, and pagination.
+
+Finding 58. Ctrip Q&A pages are publicly readable and very valuable for foreign-tourist pain points: reservation requirements, IDs, lockers, elderly suitability, weather, transport timing, hotel practicalities, and ticket scarcity.
+
+Useful URL patterns:
+
+- City scenic list: https://you.ctrip.com/sight/peking1.html
+- Attraction detail: https://you.ctrip.com/sight/beijing1/52626.html
+- Travel notes list: https://you.ctrip.com/travels/beijing1.html
+- Travel note detail: https://you.ctrip.com/travels/beijing1/4126037.html
+- Q&A root: https://you.ctrip.com/asks/
+- City Q&A: https://you.ctrip.com/asks/beijing1.html
+- Community guide: https://you.ctrip.com/htmlpages/guide.html/
+
+### Community guide / public reading
+
+Finding 59. Ctrip's own community guide describes the platform as channels for destination info, travel notes, Q&A, and official destination/tourism bureau info. It says the information comes from real community users and is intended to help planning/sharing.
+
+Finding 60. Public reading is allowed by product design, but republication is not. Use it as editor research and link out.
+
+### Booking widgets and foreign travelers
+
+Finding 61. Ctrip China-side is useful for local inventory and operations: domestic hotels, trains, activities, tickets, China customer-service flows, Chinese names, and sometimes more local Q&A than Trip.com.
+
+Finding 62. For actual foreign tourists, Trip.com is still the cleaner front door for English UI, foreign cards, international customer service, and passport-friendly flows. The Chinese Ctrip site may require Chinese literacy, Chinese phone/SMS, China-specific payment, and local identity assumptions.
+
+Finding 63. Our site should not embed Ctrip booking widgets unless there is an affiliate/partner agreement. Use text links or "book via Trip.com/Ctrip" buttons under affiliate rules.
+
+### Legal / redistribution
+
+Finding 64. Ctrip's user agreement forbids commercial use of any Ctrip platform data without permission, including use by web crawler, copy, propagation, or other means.
+
+Finding 65. Ctrip's user agreement says Ctrip-owned platform content, including pages, text, images, audio/video, data, and information, belongs to Ctrip and cannot be used or made into derivatives without written consent.
+
+Finding 66. Ctrip攻略社区 user rules say third parties may not obtain/use any part of the site or any content/service/material directly or indirectly available through the site for non-private or commercial purposes without explicit written permission.
+
+Recommendation: Ctrip is referenceable, not ingestible. Link to public Ctrip pages and write our own summaries. Do not display Ctrip ratings/review counts as a copied data layer.
+
+Useful URLs:
+
+- https://contents.ctrip.com/activitysetupapp/mkt/index/agreement202311
+- https://contents.ctrip.com/activitysetupapp/mkt/index/userrule
+- https://docs.c-ctrip.com/files/6/unc_agreement_pdf/1tm3r12000hb2zpof8D77.pdf
+- https://pages.c-ctrip.com/public/encroachment.html
+
+## D. 美团 Meituan
+
+### Web vs app
+
+Finding 67. Meituan is the most app/transaction-driven platform in this set. The desktop homepage is mostly corporate; some city/category paths redirect or fail for non-app/public browsing.
+
+Finding 68. The mobile app download page explicitly describes the consumer product as covering food, delivery, hotel booking, tourism deals, flights, train tickets, movie tickets, scenic tickets, and group tours.
+
+Finding 69. The same page states Meituan provides consumer reviews, merchant ratings, and merchant information query functions. This confirms review/merchant-data existence but not public reuse rights.
+
+Useful URLs:
+
+- https://www.meituan.com/
+- https://bj.meituan.com/
+- https://i.meituan.com/client/meituan
+
+### Meituan vs Dianping
+
+Finding 70. Meituan and Dianping merged in 2015. Public reporting says the merged entity integrated resources while retaining brands/businesses.
+
+Finding 71. Practical differentiation for tourism research: Dianping is the local-life content/review/discovery layer; Meituan is the transaction layer for coupons, tickets, hotels, deals, and app conversion. Data overlaps, but user intent differs.
+
+Finding 72. For our project, Dianping helps answer "what locals praise and rank"; Meituan helps answer "what people buy/book/use now." But Meituan's public web leakage is weak.
+
+Useful URLs:
+
+- https://m.21jingji.com/article/20151008/herald/d1a64f593c439e3c4f722d415556d582.html
+- https://finance.sina.cn/usstock/hlwgs/2015-11-12/tech-ifxkrwks3777633.d.html
+- https://finance.sina.com.cn/chanjing/gsnews/20151009/020923424040.shtml
+
+### Tourism / 景点 / 玩乐 coverage
+
+Finding 73. Meituan app product coverage includes 旅游周边: flights, train tickets, scenic tickets, and group tours. This likely covers Beijing, Shanghai, Guangzhou, and Shenzhen, but the useful browsing happens in-app.
+
+Finding 74. Public web pages do not provide enough stable tourism data to build city guides. Treat Meituan as blocked for extraction and referenceable only for high-level product availability or editor app checks.
+
+### Legal
+
+Finding 75. Meituan legal treatment is the same family as Dianping. The IP statement explicitly covers rankings, data, and information, and prohibits unlicensed copying, reproducing, quoting, linking, and technical scraping.
+
+## E. 飞猪 Fliggy
+
+### Public web data
+
+Finding 76. Fliggy's public desktop homepage is a booking portal, not a review/discovery corpus. Its title and page text cover flights, hotels, inns, vacation products, attraction tickets, and visas.
+
+Finding 77. The public homepage describes product coverage: flight booking, hotel booking, train tickets, vacation packages, attraction tickets, business travel, local transport, travel insurance, and Alibaba business travel.
+
+Finding 78. I did not find a public, indexable Fliggy equivalent of Dianping review pages or Ctrip's `you.ctrip.com` community depth. Most useful data is likely app/search/product-detail driven.
+
+Useful URLs:
+
+- https://www.fliggy.com/
+- https://www.fliggy.com/travel
+- https://www.alitrip.com/
+- https://rule.fliggy.com/
+
+### 旅游攻略 community
+
+Finding 79. Fliggy may have travel content in app/product flows, but I did not find a robust public web travel-guide community comparable to Ctrip攻略社区. Do not plan editorial extraction from Fliggy.
+
+### Foreign-card payment status
+
+Finding 80. Fliggy's merchant service agreement says merchants accept Alipay services, other Alipay-provided payment methods, or platform-supported payment methods. It also says Fliggy will continue expanding payment methods and rollout may be phased.
+
+Finding 81. I found no official Fliggy public page that guarantees foreign Visa/Mastercard acceptance for foreign tourists across attraction tickets/hotels/packages.
+
+Finding 82. Practical recommendation: do not send foreign tourists to Fliggy as a primary booking path unless testing a specific SKU/payment path. Use Trip.com/Ctrip, official attraction sites, or WeChat/Alipay mini-program guidance instead.
+
+### Legal
+
+Finding 83. Fliggy merchant agreement says Fliggy official products, technology, software, programs, data, and other information belong to Fliggy/affiliates; merchants agree not to commercially use other Fliggy platform data without approval, including copying, spreading, or disclosing other users' materials.
+
+Finding 84. Even where product titles/prices are visible, do not build a replicated Fliggy travel-product database without a partner agreement.
+
+Useful URLs:
+
+- https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231106103244276/20231106103244276_1_3_19922.pdf
+- https://rule.fliggy.com/
+
+## F. Practical conclusion for our project
+
+### What we can safely do
+
+Finding 85. Build our own POI and guide pages from original editorial research, official attraction/government sources, and licensed map APIs.
+
+Finding 86. Link out to Dianping, AMap, Ctrip, Meituan, and Fliggy pages where helpful, but avoid copying their proprietary data fields into our own UI.
+
+Finding 87. Use Dianping/Meituan internally to discover local restaurants, old shops, top dishes, neighborhoods, and whether a place is locally validated. Convert that into our own prose and recommendations.
+
+Finding 88. Use AMap ranking pages to understand search/navigation heat and city "must go" hierarchy. Use AMap API/deep links only in compliance with API terms and cross-border restrictions.
+
+Finding 89. Use Ctrip Q&A and recent reviews to detect operational friction: booking windows, ID/passport issues, luggage storage, elderly/child suitability, closures, crowd timing, and transport timing.
+
+Finding 90. Treat Fliggy primarily as a booking-market sanity check, not as a tourism-intel source.
+
+### Information architecture patterns worth copying, not the data
+
+Finding 91. Use city landing pages with category rows: food, sights, museums/exhibitions, night views, family, shopping, transit neighborhoods.
+
+Finding 92. Add "locals actually go" modules based on our own synthesis of: old-shop longevity, local neighborhood density, AMap navigation/search heat, Ctrip Q&A frequency, and repeated mentions across sources.
+
+Finding 93. Split rankings by intent, not just overall score: first-time must-see, rainy day, night view, family, low-walking, food street, old-local favorite, near subway, open late.
+
+Finding 94. Show "what is hidden behind Chinese apps" as traveller guidance: full reviews, current queues, exact deals, live crowding, and some ticket flows require local apps.
+
+Finding 95. Use source badges carefully:
+
+- "Editors checked Dianping/Meituan/AMap/Ctrip" is safer than "Dianping says 4.8".
+- "Open in AMap" is safer than copying AMap traffic/transit data.
+- "Read recent Ctrip Q&A" is safer than reproducing Q&A answers.
+
+### Source URL index
+
+1. https://www.dianping.com/beijing
+2. https://www.dianping.com/shanghai
+3. https://www.dianping.com/guangzhou
+4. https://www.dianping.com/shenzhen
+5. https://m.dianping.com/shop/2116402?msource=applemaps
+6. https://m.dianping.com/shop/68075700?msource=applemaps
+7. https://m.dianping.com/shop/814921852?msource=applemaps
+8. https://m.dianping.com/shop/131544661?msource=applemaps
+9. https://www.dianping.com/biyingbang
+10. https://www.dianping.com/blackpearl
+11. https://index.meituan.com/reports/meituan-black-pearl-2026/
+12. https://rules-center.meituan.com/m/detail/guize/69
+13. https://open.dianping.com/
+14. https://developer.meituan.com/
+15. https://www.amap.com/place/B000A8UIN8
+16. https://gaode.com/poi/B000A8UIN8
+17. https://lbs.amap.com/api/webservice/summary
+18. https://lbs.amap.com/api/webservice/guide/api-advanced/search
+19. https://www.amap.com/ranking/beijing/scenic
+20. https://www.amap.com/ranking/shanghai/scenic
+21. https://www.amap.com/ranking/guangzhou/scenic
+22. https://www.amap.com/ranking/shenzhen/scenic
+23. https://ranks.amap.com/
+24. https://lbs.amap.com/api/webservice/guide/api/direction
+25. https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry
+26. https://cache.amap.com/h5/h5/publish/241/index.html
+27. https://you.ctrip.com/htmlpages/guide.html/
+28. https://you.ctrip.com/sight/peking1.html
+29. https://you.ctrip.com/sight/beijing1/52626.html
+30. https://you.ctrip.com/travels/beijing1.html
+31. https://you.ctrip.com/asks/
+32. https://you.ctrip.com/asks/beijing1.html
+33. https://contents.ctrip.com/activitysetupapp/mkt/index/agreement202311
+34. https://contents.ctrip.com/activitysetupapp/mkt/index/userrule
+35. https://www.meituan.com/
+36. https://bj.meituan.com/
+37. https://i.meituan.com/client/meituan
+38. https://m.21jingji.com/article/20151008/herald/d1a64f593c439e3c4f722d415556d582.html
+39. https://www.fliggy.com/
+40. https://www.fliggy.com/travel
+41. https://rule.fliggy.com/
+42. https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231106103244276/20231106103244276_1_3_19922.pdf
+
+## Final platform classification
+
+| Platform | Classification | What is usable on our site | What is referenceable for editors | What is blocked / avoid |
+|---|---:|---|---|---|
+| 大众点评 Dianping | REFERENCEABLE | Outbound links to public shop/list/report pages; high-level statements from official news/reports with citation | Local restaurant discovery, top dishes, local badges, rough popularity, 必吃榜/黑珍珠 coverage | Republishing ratings, review counts, reviews, photos, top-dish counts, full list data, queue/deal signals without license |
+| 高德地图 AMap | USABLE WITH LICENSE / REFERENCEABLE | Official API/embed/deep links under AMap terms; public link-out to ranking pages | City scenic hierarchy, tags, navigation/search heat proxy, routing friction | Scraping/caching POI, traffic, transit, or map data; offshore transfer/storage of China map data; live crowd/transit embeds without permission |
+| 携程 Ctrip China-side | REFERENCEABLE | Outbound links to attraction, Q&A, guide, and booking pages; own editorial summaries | Practical travel Q&A, recent operational issues, attraction policies, route/time tips, Chinese-local reviews | Republishing Ctrip ratings, review counts, review text, photos, Q&A answers, or guide text commercially |
+| 美团 Meituan | BLOCKED / REFERENCEABLE | High-level product link-out or app download guidance | App-only check for ticket/deal availability and transaction signals | Extracting merchant ratings, review data, deals, tickets, or app-only tourism inventory |
+| 飞猪 Fliggy | BLOCKED / LOW-VALUE REFERENCEABLE | Link-out to Fliggy booking pages only where a specific booking path is tested | Price/inventory sanity check for Alibaba travel products | Review/community extraction, product database replication, claiming foreign-card acceptance without SKU-level testing |

codex
Saved the report to:

[c:/Users/h/Documents/New project 2/v2/research/china-platforms-02-maps-reviews.md](</c:/Users/h/Documents/New project 2/v2/research/china-platforms-02-maps-reviews.md>)

Verification:
- Finding count: 95
- Distinct URL count: 71
- Final summary classification table included at the end.
diff --git a/v2/research/china-platforms-02-maps-reviews.md b/v2/research/china-platforms-02-maps-reviews.md
new file mode 100644
index 0000000000000000000000000000000000000000..2885ea2dec3d7b815cf792554695d24f052af27f
--- /dev/null
+++ b/v2/research/china-platforms-02-maps-reviews.md
@@ -0,0 +1,452 @@
+# China domestic maps/reviews platforms for tourism intel
+
+Last checked: 2026-05-10  
+Scope: 大众点评 Dianping, 美团 Meituan, 高德地图 AMap, 携程 Ctrip China-side, 飞猪 Fliggy.  
+Project use case: a foreign-tourist-to-China information site that wants to understand what locals actually visit without copying protected platform content.
+
+## Executive read
+
+Finding 1. The best "locals actually go here" signal is not a single source. It is a triangulation of Dianping/Meituan review behavior, AMap search/navigation heat, and Ctrip travel Q&A/reviews.
+
+Finding 2. The most legally usable layer is outbound linking plus original editorial synthesis. Directly republishing ratings, review counts, photos, review text, top dishes, or ranked lists from Dianping/Meituan/Ctrip/Fliggy is high risk unless covered by an explicit license.
+
+Finding 3. AMap is the only platform in this set with a broad public developer API suitable for production integration, but its terms still restrict extraction, standalone display, commercial use without permission, and cross-border handling of China map data.
+
+Finding 4. The best open editorial patterns to imitate are: city/category list pages, "top 20 visible, full list in app" teaser rankings, short contextual tags, Q&A snippets, season/use-case sublists, and separate official/UGC/review modules.
+
+Finding 5. For foreign tourists, Ctrip/Trip.com remains the safest booking layer. Dianping/Meituan/AMap are better as editor research inputs and link-out sources than as data sources to ingest.
+
+## A. 大众点评 Dianping
+
+### Public web access pattern
+
+Finding 6. Dianping's desktop city pages are readable at:
+
+- Beijing: https://www.dianping.com/beijing
+- Shanghai: https://www.dianping.com/shanghai
+- Guangzhou: https://www.dianping.com/guangzhou
+- Shenzhen: https://www.dianping.com/shenzhen
+
+Finding 7. Those city pages expose city IDs and English city slugs in page data. Observed IDs: Shanghai `1`, Beijing `2`, Guangzhou `4`, Shenzhen `7`.
+
+Finding 8. The city pages expose broad IA categories that matter for tourism: 美食, 酒店, 周边游, 景点, 展馆展览, 动植物园, 温泉, 滑雪, 购物, 热门商圈, and subway-line browsing.
+
+Finding 9. Individual shop pages are city-agnostic and use `/shop/{id}`. The mobile page is often the most indexable public surface, for example:
+
+- https://m.dianping.com/shop/2116402?msource=applemaps
+- https://m.dianping.com/shop/68075700?msource=applemaps
+- https://m.dianping.com/shop/814921852?msource=applemaps
+- https://m.dianping.com/shop/131544661?msource=applemaps
+
+Finding 10. Search snippets and public HTML show the common page title pattern: `【店名】电话_地址_价格_营业时间_商圈/菜系团购 - 大众点评网`. The title suggests a rich merchant profile, but much of the actual page body is masked or app-gated.
+
+### Visible to non-logged-in foreign users
+
+Finding 11. On the observed mobile shop pages, non-logged-in users can often see: merchant name, star rating, per-capita price, neighborhood/category, list/ranking badges, open/closed state, photo count, discount/tuan-gou placeholders, recommended dishes, and per-dish recommendation counts.
+
+Finding 12. Example: the public mobile page for 聚点串吧 showed rating, per-capita price, "新街口商圈 烤串", a local hot-list badge, a visible `2万+` photo/review-like count, and recommended dishes such as 老北京疙瘩汤, 爆香小嫩牛, 泰式蜜汁鸡翅.
+
+Finding 13. Addresses are often partially masked on public mobile pages, e.g. `赵登禹路1******`, and hours can be replaced by app-gated copy such as `APP内查看商户信息`.
+
+Finding 14. Phone numbers were not visible in the observed non-logged-in page body, despite "电话" appearing in the SEO page title.
+
+Finding 15. Deep photos, complete menus, full review streams, full addresses, queue/wait signals, and some deal prices are pushed into the app or login flow.
+
+### Hidden behind login/app walls
+
+Finding 16. The strongest Dianping signals for "locals actually visit" are mostly not safely extractable from the public web: review text, reviewer identity/level, queueing, current popularity, deal conversion, detailed photos, and stable full address/phone data.
+
+Finding 17. Dianping anti-scraping is active. In one observed request, a public mobile shop URL redirected to a Meituan verification center with `spiderindefence` in the URL.
+
+### 必吃榜
+
+Finding 18. The official public URL https://www.dianping.com/biyingbang redirected to Dianping login/citylist in my non-logged-in check. Treat the full list as app/login-first.
+
+Finding 19. The latest fully released 必吃榜 available in public media at the time of research was the 2025 list, released on 2025-06-25, with 144 cities/regions and 3,091 restaurants. Public reports say Shanghai, Beijing, Chengdu, Chongqing, and Shenzhen were top-five cities by listed restaurant count.
+
+Finding 20. The 2026 必吃榜 was not final as of 2026-05-10. Public reports say the 2026 entrant/shortlist was announced on 2026-04-23, covering 264 cities/regions and 4,326 restaurants, with Shanghai, Beijing, Chengdu, Chongqing, Guangzhou, Shenzhen, Xi'an, Wuhan, Suzhou, and Nanjing in the top ten by entrant count. Final release was reported as scheduled for 2026-06-24.
+
+Finding 21. For our four cities, the shortlist/final-list coverage is strong: Beijing, Shanghai, Guangzhou, and Shenzhen all appear in national top-city coverage for 必吃榜.
+
+Finding 22. Update cadence: annual. The observed pattern is spring shortlist/publicity followed by a mid-year final release.
+
+Useful URLs:
+
+- https://www.dianping.com/biyingbang
+- https://www.news.cn/tech/20250626/c4e830a0513147bf9505c9da54318067/c.html
+- https://m.bjnews.com.cn/detail/1750911314168601.html
+- https://www.dutenews.com/n/article/8913274
+- https://www.bbtnews.com.cn/2026/0424/591528.shtml
+- https://cbgc.scol.com.cn/news/7527616
+- https://society.yunnan.cn/system/2026/04/23/033978393.shtml
+
+### 黑珍珠餐厅指南
+
+Finding 23. Black Pearl is a Meituan/Dianping-owned high-end restaurant guide, often described as China's domestic answer to Michelin.
+
+Finding 24. The 2026 public official-ish Meituan Index report says the 2026 Black Pearl guide was released on 2026-01-28, with 263 mainland China restaurants, 7 upgraded restaurants, and 46 new entrants.
+
+Finding 25. The report says the guide is published by Meituan/Dianping and assessed by professional judges across dish quality, service, environment, inheritance, and innovation.
+
+Finding 26. The desktop `https://www.dianping.com/blackpearl` URL redirected to login/citylist in my check. The public web is usable for meta/report-level facts; the full browseable restaurant list is not reliably public without app/login.
+
+Finding 27. Coverage in 北上广深 is strong, but the safest citable source is the official annual report/news release, not scraped restaurant cards.
+
+Useful URLs:
+
+- https://www.dianping.com/blackpearl
+- https://index.meituan.com/reports/meituan-black-pearl-2026/
+- https://about.meituan.com/news/NN260128167003529
+- https://www.bjwmb.gov.cn/wmdt/cyq/10119347.html
+
+### Citing Dianping ratings/review counts
+
+Finding 28. Do not treat Dianping ratings as equivalent to Google Maps ratings for free third-party reuse. Meituan's IP statement says Meituan-provided content including pages, text, images, rankings, layout, data, and information belongs to Meituan unless otherwise stated.
+
+Finding 29. The same IP statement says, absent legal exception or written permission, no entity/person may copy, reproduce, quote, link to, or scrape Meituan platform content or information in whole or in part.
+
+Finding 30. Practical recommendation: use Dianping ratings/review counts as editor research only. On our site, write our own recommendation and link to the Dianping page or official report where useful. Avoid displaying "Dianping rating: 4.8 / 60k reviews" unless licensed.
+
+Useful URLs:
+
+- https://rules-center.meituan.com/m/detail/guize/69
+- https://h5.dianping.com/app/m-static-base-page/agreement.html?product=dpapp
+- https://open.dianping.com/
+- https://developer.meituan.com/
+
+### Open data / partnerships
+
+Finding 31. There is no obvious public tourism/review open dataset for foreign publishers. The available official platform surfaces are business/merchant/integration oriented: 北极星开放平台 and 美团技术服务合作中心.
+
+Finding 32. A legitimate integration would need a commercial partnership or API terms that explicitly permit the desired display and geography. Do not use third-party scraping APIs.
+
+## B. 高德地图 AMap / Gaode
+
+### Public attraction/landmark pages
+
+Finding 33. AMap place URL patterns observed:
+
+- `https://www.amap.com/place/{POI_ID}`
+- `https://gaode.com/poi/{POI_ID}`
+- `https://ditu.amap.com/place/{POI_ID}`
+- Search shell: `https://www.amap.com/search?query={encodedName}&city={adcode}`
+
+Example checked: https://www.amap.com/place/B000A8UIN8 and https://gaode.com/poi/B000A8UIN8.
+
+Finding 34. The public POI page shell is accessible, but the HTML response is a JavaScript app shell, not a stable indexable text profile. Do not rely on static HTML extraction for POI details.
+
+Finding 35. AMap's official Web Service API provides the structured POI route. The Search POI docs include keyword search, around search, polygon search, and ID query by POI ID.
+
+Finding 36. API-returnable POI fields include name/type/typecode, address, location, telephone, website, business area, indoor map data, tags, `biz_ext.rating`, `biz_ext.cost`, and photo URLs when `extensions=all`.
+
+Finding 37. The API docs explicitly state that rating exists only for restaurants, hotels, attractions, and cinemas, and that photos are returned with `extensions=all`.
+
+Useful URLs:
+
+- https://www.amap.com/place/B000A8UIN8
+- https://gaode.com/poi/B000A8UIN8
+- https://ditu.amap.com/place/B000A8UIN8
+- https://lbs.amap.com/api/webservice/summary
+- https://lbs.amap.com/api/webservice/guide/api-advanced/search
+
+### AMap web vs app crowd data
+
+Finding 38. AMap web ranking pages expose curated rankings and scores, not live crowd density. The pages show "完整榜单请在高德地图APP内查看", which confirms the app is the deeper surface.
+
+Finding 39. If AMap exposes crowding, queue, indoor navigation, or real-time scenic-area comfort signals, assume they are app/product-specific unless an official API endpoint says otherwise. I found official API docs for traffic status and bus inquiry, but not a public scenic crowd-density API suitable for embedding.
+
+### 高德指南 / official travel recommendation
+
+Finding 40. AMap's public ranking pages are highly relevant. URL pattern:
+
+- Beijing scenic: https://www.amap.com/ranking/beijing/scenic
+- Shanghai scenic: https://www.amap.com/ranking/shanghai/scenic
+- Guangzhou scenic: https://www.amap.com/ranking/guangzhou/scenic
+- Shenzhen scenic: https://www.amap.com/ranking/shenzhen/scenic
+- Ranking plaza: https://ranks.amap.com/
+- Ranking browse: https://ranks.amap.com/ranking
+
+Finding 41. These pages show 2025 高德状元榜/扫街榜 style lists with "全年综合分", tags, and short editorial blurbs. Beijing's scenic page showed 64 total places but only top 20 on web; Shanghai 47; Guangzhou 43; Shenzhen 29.
+
+Finding 42. Beijing examples from the public page: 故宫博物院, 中国国家博物馆, 天坛公园, 什刹海, 颐和园, each with a score and contextual tags. This is a strong "visited/search/navigation heat" editorial signal.
+
+Finding 43. AMap's public/media explanation says 高德指南 rankings use real AMap search/navigation data plus user evaluations and merchant quality, which is exactly the "locals actually go here" pattern we want to emulate editorially.
+
+Useful URLs:
+
+- https://www.amap.com/ranking/beijing/scenic
+- https://www.amap.com/ranking/shanghai/scenic
+- https://www.amap.com/ranking/guangzhou/scenic
+- https://www.amap.com/ranking/shenzhen/scenic
+- https://ranks.amap.com/
+- https://ranks.amap.com/ranking
+- https://www.sznews.com/news/content/2025-01/20/content_31444248.htm
+- https://www.pingwest.com/w/218091
+
+### Transit / congestion / embed exposure
+
+Finding 44. AMap Web Service API exposes traffic status query endpoints such as `https://restapi.amap.com/v3/traffic/status/road?parameters`, requiring a key.
+
+Finding 45. AMap Web Service API exposes route planning, including walking, transit, driving, and distance calculation. The route docs caution that same-origin/destination results may change as road/data/algorithms change.
+
+Finding 46. Public transit live arrival and subway transfer ergonomics are primarily app/native product experiences. I did not find a public no-key web embed for live arrivals. For our site, the realistic legal path is "open in AMap" deep links or licensed API route estimates, not embedding live AMap transit boards.
+
+Useful URLs:
+
+- https://lbs.amap.com/api/webservice/guide/api/direction
+- https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry
+- https://lbs.amap.com/api/webservice/guide/api-advanced/bus-inquiry
+- https://lbs.amap.com/api/javascript-api-v2/guide/abc/prepare
+
+### AMap public API and developer requirements
+
+Finding 47. AMap Web Service API is documented as open to all users, but requires an application key. The setup flow is: register as AMap developer, create an application, obtain a key.
+
+Finding 48. Personal and enterprise developers get different quotas; quota details are now routed to pricing/control-console pages. Older/current docs still state that service call limits and QPS quota depend on account status and can be checked/upgraded in the console.
+
+Finding 49. For foreign developers, I found no official English page guaranteeing easy foreign KYC. The practical blocker is likely account registration, phone/Alibaba identity flows, business verification, and China map-data compliance.
+
+Useful URLs:
+
+- https://lbs.amap.com/api/webservice/summary
+- https://lbs.amap.com/api/webservice/guide/tools/flowlevel
+- https://lbs.amap.com/api/webservice/guide/api-advanced/search
+- https://lbs.amap.com/api/webservice/guide/api/direction
+
+### Legal / redistribution
+
+Finding 50. AMap terms are restrictive for our use case. They define relevant content to include map data, traffic information, address data, merchant lists, navigation voice, and other content.
+
+Finding 51. AMap grants a personal, non-transferable, revocable, non-exclusive license and says commercial use requires separate written agreement or written permission.
+
+Finding 52. AMap terms prohibit attempting to extract source code or original data; using crawlers/scrapers/indexers; storing/caching/retrieving/indexing service/data; and using AMap content separately from AMap products/services.
+
+Finding 53. Crucially for a foreign site, AMap terms say users may not download China domestic map data outside China or transfer, store, or provide China domestic map data overseas.
+
+Recommendation: AMap is usable only through compliant API/embed/deep-link workflows, with counsel review for cross-border data handling. Do not build a cached AMap-derived POI database offshore.
+
+Useful URL:
+
+- https://cache.amap.com/h5/h5/publish/241/index.html
+
+## C. 携程 Ctrip China-side
+
+### What is unique vs Trip.com
+
+Finding 54. Ctrip's China-side `you.ctrip.com` is much deeper than a pure booking site. It has destination pages, scenic pages, UGC travel notes, Q&A, user comments, rankings, photo modules, opening hours, policy details, and Chinese-local operational tips.
+
+Finding 55. Ctrip scenic pages can be publicly read without login. Example: 鸟巢 page exposed attraction score, review count, address, opening hours, official phone, notice text, detailed intro, photo strategy, ticket/benefit policies, Q&A, and recent user reviews.
+
+Finding 56. Ctrip city scenic lists expose public IA patterns: "必打卡景点榜", "夜游必打卡景点榜", "亲子景点榜", "赏花踏青景点榜", "滑雪景点榜", "温泉景点榜", plus paginated attraction cards.
+
+Finding 57. Ctrip travel-note list pages expose title, author, publish/reply dates, trip duration, spend, travel party, view/comment/like counts, and pagination.
+
+Finding 58. Ctrip Q&A pages are publicly readable and very valuable for foreign-tourist pain points: reservation requirements, IDs, lockers, elderly suitability, weather, transport timing, hotel practicalities, and ticket scarcity.
+
+Useful URL patterns:
+
+- City scenic list: https://you.ctrip.com/sight/peking1.html
+- Attraction detail: https://you.ctrip.com/sight/beijing1/52626.html
+- Travel notes list: https://you.ctrip.com/travels/beijing1.html
+- Travel note detail: https://you.ctrip.com/travels/beijing1/4126037.html
+- Q&A root: https://you.ctrip.com/asks/
+- City Q&A: https://you.ctrip.com/asks/beijing1.html
+- Community guide: https://you.ctrip.com/htmlpages/guide.html/
+
+### Community guide / public reading
+
+Finding 59. Ctrip's own community guide describes the platform as channels for destination info, travel notes, Q&A, and official destination/tourism bureau info. It says the information comes from real community users and is intended to help planning/sharing.
+
+Finding 60. Public reading is allowed by product design, but republication is not. Use it as editor research and link out.
+
+### Booking widgets and foreign travelers
+
+Finding 61. Ctrip China-side is useful for local inventory and operations: domestic hotels, trains, activities, tickets, China customer-service flows, Chinese names, and sometimes more local Q&A than Trip.com.
+
+Finding 62. For actual foreign tourists, Trip.com is still the cleaner front door for English UI, foreign cards, international customer service, and passport-friendly flows. The Chinese Ctrip site may require Chinese literacy, Chinese phone/SMS, China-specific payment, and local identity assumptions.
+
+Finding 63. Our site should not embed Ctrip booking widgets unless there is an affiliate/partner agreement. Use text links or "book via Trip.com/Ctrip" buttons under affiliate rules.
+
+### Legal / redistribution
+
+Finding 64. Ctrip's user agreement forbids commercial use of any Ctrip platform data without permission, including use by web crawler, copy, propagation, or other means.
+
+Finding 65. Ctrip's user agreement says Ctrip-owned platform content, including pages, text, images, audio/video, data, and information, belongs to Ctrip and cannot be used or made into derivatives without written consent.
+
+Finding 66. Ctrip攻略社区 user rules say third parties may not obtain/use any part of the site or any content/service/material directly or indirectly available through the site for non-private or commercial purposes without explicit written permission.
+
+Recommendation: Ctrip is referenceable, not ingestible. Link to public Ctrip pages and write our own summaries. Do not display Ctrip ratings/review counts as a copied data layer.
+
+Useful URLs:
+
+- https://contents.ctrip.com/activitysetupapp/mkt/index/agreement202311
+- https://contents.ctrip.com/activitysetupapp/mkt/index/userrule
+- https://docs.c-ctrip.com/files/6/unc_agreement_pdf/1tm3r12000hb2zpof8D77.pdf
+- https://pages.c-ctrip.com/public/encroachment.html
+
+## D. 美团 Meituan
+
+### Web vs app
+
+Finding 67. Meituan is the most app/transaction-driven platform in this set. The desktop homepage is mostly corporate; some city/category paths redirect or fail for non-app/public browsing.
+
+Finding 68. The mobile app download page explicitly describes the consumer product as covering food, delivery, hotel booking, tourism deals, flights, train tickets, movie tickets, scenic tickets, and group tours.
+
+Finding 69. The same page states Meituan provides consumer reviews, merchant ratings, and merchant information query functions. This confirms review/merchant-data existence but not public reuse rights.
+
+Useful URLs:
+
+- https://www.meituan.com/
+- https://bj.meituan.com/
+- https://i.meituan.com/client/meituan
+
+### Meituan vs Dianping
+
+Finding 70. Meituan and Dianping merged in 2015. Public reporting says the merged entity integrated resources while retaining brands/businesses.
+
+Finding 71. Practical differentiation for tourism research: Dianping is the local-life content/review/discovery layer; Meituan is the transaction layer for coupons, tickets, hotels, deals, and app conversion. Data overlaps, but user intent differs.
+
+Finding 72. For our project, Dianping helps answer "what locals praise and rank"; Meituan helps answer "what people buy/book/use now." But Meituan's public web leakage is weak.
+
+Useful URLs:
+
+- https://m.21jingji.com/article/20151008/herald/d1a64f593c439e3c4f722d415556d582.html
+- https://finance.sina.cn/usstock/hlwgs/2015-11-12/tech-ifxkrwks3777633.d.html
+- https://finance.sina.com.cn/chanjing/gsnews/20151009/020923424040.shtml
+
+### Tourism / 景点 / 玩乐 coverage
+
+Finding 73. Meituan app product coverage includes 旅游周边: flights, train tickets, scenic tickets, and group tours. This likely covers Beijing, Shanghai, Guangzhou, and Shenzhen, but the useful browsing happens in-app.
+
+Finding 74. Public web pages do not provide enough stable tourism data to build city guides. Treat Meituan as blocked for extraction and referenceable only for high-level product availability or editor app checks.
+
+### Legal
+
+Finding 75. Meituan legal treatment is the same family as Dianping. The IP statement explicitly covers rankings, data, and information, and prohibits unlicensed copying, reproducing, quoting, linking, and technical scraping.
+
+## E. 飞猪 Fliggy
+
+### Public web data
+
+Finding 76. Fliggy's public desktop homepage is a booking portal, not a review/discovery corpus. Its title and page text cover flights, hotels, inns, vacation products, attraction tickets, and visas.
+
+Finding 77. The public homepage describes product coverage: flight booking, hotel booking, train tickets, vacation packages, attraction tickets, business travel, local transport, travel insurance, and Alibaba business travel.
+
+Finding 78. I did not find a public, indexable Fliggy equivalent of Dianping review pages or Ctrip's `you.ctrip.com` community depth. Most useful data is likely app/search/product-detail driven.
+
+Useful URLs:
+
+- https://www.fliggy.com/
+- https://www.fliggy.com/travel
+- https://www.alitrip.com/
+- https://rule.fliggy.com/
+
+### 旅游攻略 community
+
+Finding 79. Fliggy may have travel content in app/product flows, but I did not find a robust public web travel-guide community comparable to Ctrip攻略社区. Do not plan editorial extraction from Fliggy.
+
+### Foreign-card payment status
+
+Finding 80. Fliggy's merchant service agreement says merchants accept Alipay services, other Alipay-provided payment methods, or platform-supported payment methods. It also says Fliggy will continue expanding payment methods and rollout may be phased.
+
+Finding 81. I found no official Fliggy public page that guarantees foreign Visa/Mastercard acceptance for foreign tourists across attraction tickets/hotels/packages.
+
+Finding 82. Practical recommendation: do not send foreign tourists to Fliggy as a primary booking path unless testing a specific SKU/payment path. Use Trip.com/Ctrip, official attraction sites, or WeChat/Alipay mini-program guidance instead.
+
+### Legal
+
+Finding 83. Fliggy merchant agreement says Fliggy official products, technology, software, programs, data, and other information belong to Fliggy/affiliates; merchants agree not to commercially use other Fliggy platform data without approval, including copying, spreading, or disclosing other users' materials.
+
+Finding 84. Even where product titles/prices are visible, do not build a replicated Fliggy travel-product database without a partner agreement.
+
+Useful URLs:
+
+- https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231106103244276/20231106103244276_1_3_19922.pdf
+- https://rule.fliggy.com/
+
+## F. Practical conclusion for our project
+
+### What we can safely do
+
+Finding 85. Build our own POI and guide pages from original editorial research, official attraction/government sources, and licensed map APIs.
+
+Finding 86. Link out to Dianping, AMap, Ctrip, Meituan, and Fliggy pages where helpful, but avoid copying their proprietary data fields into our own UI.
+
+Finding 87. Use Dianping/Meituan internally to discover local restaurants, old shops, top dishes, neighborhoods, and whether a place is locally validated. Convert that into our own prose and recommendations.
+
+Finding 88. Use AMap ranking pages to understand search/navigation heat and city "must go" hierarchy. Use AMap API/deep links only in compliance with API terms and cross-border restrictions.
+
+Finding 89. Use Ctrip Q&A and recent reviews to detect operational friction: booking windows, ID/passport issues, luggage storage, elderly/child suitability, closures, crowd timing, and transport timing.
+
+Finding 90. Treat Fliggy primarily as a booking-market sanity check, not as a tourism-intel source.
+
+### Information architecture patterns worth copying, not the data
+
+Finding 91. Use city landing pages with category rows: food, sights, museums/exhibitions, night views, family, shopping, transit neighborhoods.
+
+Finding 92. Add "locals actually go" modules based on our own synthesis of: old-shop longevity, local neighborhood density, AMap navigation/search heat, Ctrip Q&A frequency, and repeated mentions across sources.
+
+Finding 93. Split rankings by intent, not just overall score: first-time must-see, rainy day, night view, family, low-walking, food street, old-local favorite, near subway, open late.
+
+Finding 94. Show "what is hidden behind Chinese apps" as traveller guidance: full reviews, current queues, exact deals, live crowding, and some ticket flows require local apps.
+
+Finding 95. Use source badges carefully:
+
+- "Editors checked Dianping/Meituan/AMap/Ctrip" is safer than "Dianping says 4.8".
+- "Open in AMap" is safer than copying AMap traffic/transit data.
+- "Read recent Ctrip Q&A" is safer than reproducing Q&A answers.
+
+### Source URL index
+
+1. https://www.dianping.com/beijing
+2. https://www.dianping.com/shanghai
+3. https://www.dianping.com/guangzhou
+4. https://www.dianping.com/shenzhen
+5. https://m.dianping.com/shop/2116402?msource=applemaps
+6. https://m.dianping.com/shop/68075700?msource=applemaps
+7. https://m.dianping.com/shop/814921852?msource=applemaps
+8. https://m.dianping.com/shop/131544661?msource=applemaps
+9. https://www.dianping.com/biyingbang
+10. https://www.dianping.com/blackpearl
+11. https://index.meituan.com/reports/meituan-black-pearl-2026/
+12. https://rules-center.meituan.com/m/detail/guize/69
+13. https://open.dianping.com/
+14. https://developer.meituan.com/
+15. https://www.amap.com/place/B000A8UIN8
+16. https://gaode.com/poi/B000A8UIN8
+17. https://lbs.amap.com/api/webservice/summary
+18. https://lbs.amap.com/api/webservice/guide/api-advanced/search
+19. https://www.amap.com/ranking/beijing/scenic
+20. https://www.amap.com/ranking/shanghai/scenic
+21. https://www.amap.com/ranking/guangzhou/scenic
+22. https://www.amap.com/ranking/shenzhen/scenic
+23. https://ranks.amap.com/
+24. https://lbs.amap.com/api/webservice/guide/api/direction
+25. https://lbs.amap.com/api/webservice/guide/api-advanced/traffic-situation-inquiry
+26. https://cache.amap.com/h5/h5/publish/241/index.html
+27. https://you.ctrip.com/htmlpages/guide.html/
+28. https://you.ctrip.com/sight/peking1.html
+29. https://you.ctrip.com/sight/beijing1/52626.html
+30. https://you.ctrip.com/travels/beijing1.html
+31. https://you.ctrip.com/asks/
+32. https://you.ctrip.com/asks/beijing1.html
+33. https://contents.ctrip.com/activitysetupapp/mkt/index/agreement202311
+34. https://contents.ctrip.com/activitysetupapp/mkt/index/userrule
+35. https://www.meituan.com/
+36. https://bj.meituan.com/
+37. https://i.meituan.com/client/meituan
+38. https://m.21jingji.com/article/20151008/herald/d1a64f593c439e3c4f722d415556d582.html
+39. https://www.fliggy.com/
+40. https://www.fliggy.com/travel
+41. https://rule.fliggy.com/
+42. https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231106103244276/20231106103244276_1_3_19922.pdf
+
+## Final platform classification
+
+| Platform | Classification | What is usable on our site | What is referenceable for editors | What is blocked / avoid |
+|---|---:|---|---|---|
+| 大众点评 Dianping | REFERENCEABLE | Outbound links to public shop/list/report pages; high-level statements from official news/reports with citation | Local restaurant discovery, top dishes, local badges, rough popularity, 必吃榜/黑珍珠 coverage | Republishing ratings, review counts, reviews, photos, top-dish counts, full list data, queue/deal signals without license |
+| 高德地图 AMap | USABLE WITH LICENSE / REFERENCEABLE | Official API/embed/deep links under AMap terms; public link-out to ranking pages | City scenic hierarchy, tags, navigation/search heat proxy, routing friction | Scraping/caching POI, traffic, transit, or map data; offshore transfer/storage of China map data; live crowd/transit embeds without permission |
+| 携程 Ctrip China-side | REFERENCEABLE | Outbound links to attraction, Q&A, guide, and booking pages; own editorial summaries | Practical travel Q&A, recent operational issues, attraction policies, route/time tips, Chinese-local reviews | Republishing Ctrip ratings, review counts, review text, photos, Q&A answers, or guide text commercially |
+| 美团 Meituan | BLOCKED / REFERENCEABLE | High-level product link-out or app download guidance | App-only check for ticket/deal availability and transaction signals | Extracting merchant ratings, review data, deals, tickets, or app-only tourism inventory |
+| 飞猪 Fliggy | BLOCKED / LOW-VALUE REFERENCEABLE | Link-out to Fliggy booking pages only where a specific booking path is tested | Price/inventory sanity check for Alibaba travel products | Review/community extraction, product database replication, claiming foreign-card acceptance without SKU-level testing |

tokens used
318,281
ERROR: The process "574456" not found.

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
