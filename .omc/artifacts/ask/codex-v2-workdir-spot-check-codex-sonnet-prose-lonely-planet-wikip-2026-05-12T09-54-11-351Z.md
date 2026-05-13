# codex advisor artifact

- Provider: codex
- Exit code: 0
- Created at: 2026-05-12T09:54:11.353Z

## Original task

在 v2/ workdir 做文字原创性 spot-check（侵权风险检测）。

我担心 codex/sonnet 写出来的英文 prose 可能无意中模仿了 Lonely Planet / Wikipedia / Atlas Obscura 等的措辞，引发 copyright 风险。请抽查 10 段最长 / 最特征的英文文案，用 web 搜索找有无近乎逐字（>= 8 个连续单词命中）的来源。

待查文件：
1. v2/src/data/city-attractions.ts — 24 条 whyEn（景点介绍最长）
2. v2/src/data/food.ts — culturalNotes.en（北京/上海/广州/深圳 4 段长 prose）
3. v2/src/data/city-intro.ts 或类似（4 城 blurb）— 找一下文件路径
4. v2/src/data/itineraries.ts — 4 城 itineraryDays.morning/afternoon/evening.en
5. v2/src/data/city-seasons.ts — 各季节 summary.en + watchOuts.en
6. v2/src/data/phrasebook.ts — 跳过（短语都是通用，不可能侵权）

抽样策略：
- 抽 4 城 whyEn 各 1 条（4 段）
- 抽 4 城 culturalNotes.en（4 段）
- 抽 2 段 itinerary tip 或 season summary 较长的（2 段）

对每段：
- web 搜索段内 8-12 词的特征短语
- 如果 web 命中（Lonely Planet / Wikipedia / 国家旅游局 / 任何商业旅行网站）则记录 URL + 命中片段
- 如果只匹配到 Wikipedia 上事实性描述（如官方建造年份、面积等数字），不算抄袭

报告 600 字以内：每条 spot-check 的'有/无近乎逐字命中'结论；总评估（高/中/低风险）；如果有命中给具体建议。

不要修代码，只报告。

## Final prompt

在 v2/ workdir 做文字原创性 spot-check（侵权风险检测）。

我担心 codex/sonnet 写出来的英文 prose 可能无意中模仿了 Lonely Planet / Wikipedia / Atlas Obscura 等的措辞，引发 copyright 风险。请抽查 10 段最长 / 最特征的英文文案，用 web 搜索找有无近乎逐字（>= 8 个连续单词命中）的来源。

待查文件：
1. v2/src/data/city-attractions.ts — 24 条 whyEn（景点介绍最长）
2. v2/src/data/food.ts — culturalNotes.en（北京/上海/广州/深圳 4 段长 prose）
3. v2/src/data/city-intro.ts 或类似（4 城 blurb）— 找一下文件路径
4. v2/src/data/itineraries.ts — 4 城 itineraryDays.morning/afternoon/evening.en
5. v2/src/data/city-seasons.ts — 各季节 summary.en + watchOuts.en
6. v2/src/data/phrasebook.ts — 跳过（短语都是通用，不可能侵权）

抽样策略：
- 抽 4 城 whyEn 各 1 条（4 段）
- 抽 4 城 culturalNotes.en（4 段）
- 抽 2 段 itinerary tip 或 season summary 较长的（2 段）

对每段：
- web 搜索段内 8-12 词的特征短语
- 如果 web 命中（Lonely Planet / Wikipedia / 国家旅游局 / 任何商业旅行网站）则记录 URL + 命中片段
- 如果只匹配到 Wikipedia 上事实性描述（如官方建造年份、面积等数字），不算抄袭

报告 600 字以内：每条 spot-check 的'有/无近乎逐字命中'结论；总评估（高/中/低风险）；如果有命中给具体建议。

不要修代码，只报告。

## Raw output

```text
SUCCESS: The process with PID 653620 (child process of PID 648948) has been terminated.
SUCCESS: The process with PID 648948 (child process of PID 653552) has been terminated.
SUCCESS: The process with PID 653552 (child process of PID 652604) has been terminated.
SUCCESS: The process with PID 652604 (child process of PID 653800) has been terminated.
SUCCESS: The process with PID 653724 (child process of PID 653700) has been terminated.
SUCCESS: The process with PID 653700 (child process of PID 653488) has been terminated.
SUCCESS: The process with PID 653488 (child process of PID 653420) has been terminated.
SUCCESS: The process with PID 653420 (child process of PID 653800) has been terminated.
抽查 10 段，结论如下：

1. 北京 Lama Temple whyEn：有 8 词事实短语命中：Trip.com “Maitreya Buddha—carved from a single sandalwood tree” [源](https://vn.trip.com/moments/detail/beijing-1-132180379)。偏事实描述，低风险。
2. 上海 Wukang whyEn：无近乎逐字命中。
3. 广州 Chen Clan whyEn：有相近商业文案命中，Trip.com 有 “Built between 1888 and 1894…72 counties…Confucian academy and worship site” [源](https://us.trip.com/moments/detail/guangzhou-152-130959747/)。当前文本未见 8 词连续一致，但事实排列很接近。
4. 深圳 Dapeng whyEn：无近乎逐字命中。
5. 北京 culturalNotes.en：无。
6. 上海 culturalNotes.en：无。
7. 广州 culturalNotes.en：无。
8. 深圳 culturalNotes.en：无。
9. 北京 Mutianyu itinerary tip：无。
10. 上海 Bund/Yu Garden itinerary tip：无。

总评估：低风险。建议只改写 Chen Clan 段的事实顺序和 “Pearl of Lingnan Architecture” 附近措辞；Lama Temple 的 sandalwood Buddha 属通用事实，可保留或轻微改写。`city intro` 路径找到：`v2/src/components/city/CityIntro.tsx`。
SUCCESS: The process with PID 653924 (child process of PID 654056) has been terminated.
SUCCESS: The process with PID 654056 (child process of PID 653604) has been terminated.
SUCCESS: The process with PID 653604 (child process of PID 653816) has been terminated.
SUCCESS: The process with PID 653816 (child process of PID 653800) has been terminated.


OpenAI Codex v0.128.0 (research preview)
--------
workdir: c:\Users\h\Documents\New project 2
model: gpt-5.5
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e1b97-0431-7752-860d-335368506c61
--------
user
在 v2/ workdir 做文字原创性 spot-check（侵权风险检测）。

我担心 codex/sonnet 写出来的英文 prose 可能无意中模仿了 Lonely Planet / Wikipedia / Atlas Obscura 等的措辞，引发 copyright 风险。请抽查 10 段最长 / 最特征的英文文案，用 web 搜索找有无近乎逐字（>= 8 个连续单词命中）的来源。

待查文件：
1. v2/src/data/city-attractions.ts — 24 条 whyEn（景点介绍最长）
2. v2/src/data/food.ts — culturalNotes.en（北京/上海/广州/深圳 4 段长 prose）
3. v2/src/data/city-intro.ts 或类似（4 城 blurb）— 找一下文件路径
4. v2/src/data/itineraries.ts — 4 城 itineraryDays.morning/afternoon/evening.en
5. v2/src/data/city-seasons.ts — 各季节 summary.en + watchOuts.en
6. v2/src/data/phrasebook.ts — 跳过（短语都是通用，不可能侵权）

抽样策略：
- 抽 4 城 whyEn 各 1 条（4 段）
- 抽 4 城 culturalNotes.en（4 段）
- 抽 2 段 itinerary tip 或 season summary 较长的（2 段）

对每段：
- web 搜索段内 8-12 词的特征短语
- 如果 web 命中（Lonely Planet / Wikipedia / 国家旅游局 / 任何商业旅行网站）则记录 URL + 命中片段
- 如果只匹配到 Wikipedia 上事实性描述（如官方建造年份、面积等数字），不算抄袭

报告 600 字以内：每条 spot-check 的'有/无近乎逐字命中'结论；总评估（高/中/低风险）；如果有命中给具体建议。

不要修代码，只报告。
codex
我先在 `v2` 里定位这些数据文件并抽出最长、最有辨识度的英文段落，然后逐条拿 8-12 词短语做网页检索。不会改文件。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-ChildItem -Path .\\v2\\src\\data -File | Select-Object -ExpandProperty FullName" in c:\Users\h\Documents\New project 2
 succeeded in 702ms:
C:\Users\h\Documents\New project 2\v2\src\data\atlas.ts
C:\Users\h\Documents\New project 2\v2\src\data\city-attractions.ts
C:\Users\h\Documents\New project 2\v2\src\data\city-seasons.ts
C:\Users\h\Documents\New project 2\v2\src\data\city-tourism-portals.ts
C:\Users\h\Documents\New project 2\v2\src\data\emergency.ts
C:\Users\h\Documents\New project 2\v2\src\data\entry-policies.ts
C:\Users\h\Documents\New project 2\v2\src\data\exchange-rates.ts
C:\Users\h\Documents\New project 2\v2\src\data\food.ts
C:\Users\h\Documents\New project 2\v2\src\data\i18n.ts
C:\Users\h\Documents\New project 2\v2\src\data\itineraries.ts
C:\Users\h\Documents\New project 2\v2\src\data\map-sources.ts
C:\Users\h\Documents\New project 2\v2\src\data\payments.ts
C:\Users\h\Documents\New project 2\v2\src\data\phase2-preview.ts
C:\Users\h\Documents\New project 2\v2\src\data\phrasebook.ts
C:\Users\h\Documents\New project 2\v2\src\data\practical-other.ts
C:\Users\h\Documents\New project 2\v2\src\data\practical-payments.ts
C:\Users\h\Documents\New project 2\v2\src\data\sources.ts
C:\Users\h\Documents\New project 2\v2\src\data\top-questions.ts
C:\Users\h\Documents\New project 2\v2\src\data\transport.ts
C:\Users\h\Documents\New project 2\v2\src\data\types.ts

codex
数据文件都在预期目录里，但没有单独叫 `city-intro.ts` 的文件；我会在相邻数据里搜英文 blurb/intro 字段确认是否有类似内容。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"whyEn|culturalNotes|morning|afternoon|evening|summary|watchOuts|intro|blurb\" .\\v2\\src\\data\\city-attractions.ts .\\v2\\src\\data\\food.ts .\\v2\\src\\data\\itineraries.ts .\\v2\\src\\data\\city-seasons.ts .\\v2\\src\\data -g \"*.ts\"" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path .\\v2\\src\\data\\city-attractions.ts -TotalCount 220" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path .\\v2\\src\\data\\food.ts -TotalCount 260" in c:\Users\h\Documents\New project 2
 succeeded in 756ms:
.\v2\src\data\food.ts:11:    culturalNotes?: { en: string; zh: string };
.\v2\src\data\food.ts:27:      culturalNotes: {
.\v2\src\data\food.ts:63:      culturalNotes: {
.\v2\src\data\food.ts:96:      en: "Cantonese yum cha (morning dim sum), slow-simmered soups (lao-huo tang), char siu and roast meats, herbal tea (liang cha). Traditionally one of the most foreign-friendly food cities in China.",
.\v2\src\data\food.ts:99:      culturalNotes: {
.\v2\src\data\food.ts:140:      culturalNotes: {
.\v2\src\data\city-attractions.ts:13:  whyEn: string;
.\v2\src\data\city-attractions.ts:30:    whyEn: "The largest intact imperial palace complex in the world: 180 acres, 980 buildings, 8,728 rooms. 24 emperors lived here across the Ming and Qing dynasties (1420–1912). 7-day advance booking is mandatory; 40,000-person daily cap sells out within minutes for peak weekends.",
.\v2\src\data\city-attractions.ts:44:    whyEn: "The Great Wall section most recommended by experienced foreign travellers: well-restored Ming masonry, 23 watchtowers across a 2.25 km open stretch, cable car or chair lift up plus a toboggan descent. The official English website accepts international cards directly. 1 million foreign visitors in 2025.",
.\v2\src\data\city-attractions.ts:58:    whyEn: "The best-preserved imperial garden in China and a UNESCO World Heritage Site. 220-hectare Kunming Lake with Longevity Hill behind it, the 728 m painted Long Corridor, and a theatrical landscape designed for Qing imperial leisure. Audio guides in 19 languages.",
.\v2\src\data\city-attractions.ts:72:    whyEn: "The largest extant sacrificial altar complex in China (built 1406–1420), used by every Ming and Qing emperor to pray for harvest. The triple-eaved circular blue-roofed Hall of Prayer for Good Harvests is one of the most architecturally perfect timber structures in Chinese history. The park grounds double as a morning tai chi venue.",
.\v2\src\data\city-attractions.ts:86:    whyEn: "The most important Tibetan Buddhist temple in Beijing and one of the most significant Gelug monasteries outside Tibet. Originally an imperial princely mansion (1694), converted to a lamasery in 1744. The Wanfu Pavilion houses an 18 m Maitreya Buddha carved from a single sandalwood tree — the tallest sandalwood statue in the world.",
.\v2\src\data\city-attractions.ts:100:    whyEn: "The world's third-largest public square (440,000 sq m) and the symbolic centre of the People's Republic. Daily flag-raising ceremony at sunrise, flag-lowering at sunset. Free entry but mandatory advance reservation (1–7 days ahead) — walk-up visitors are turned back at the security checkpoint.",
.\v2\src\data\city-attractions.ts:116:    whyEn: "Shanghai's essential postcard view: a 1.5 km Huangpu River promenade where early-20th-century banks and trading houses face the Pudong skyline. The simplest place to read both Shanghai's treaty-port past and its vertical-finance present in one frame. Sunrise for low crowds; evening for the skyline lights.",
.\v2\src\data\city-attractions.ts:130:    whyEn: "Shanghai's best central classical Chinese garden: Ming-dynasty rockeries, pavilions, ponds, zigzag bridges, the City God Temple area, and the surrounding old-city bazaar streets all compressed into a walkable historic quarter. The clearest contrast to the Bund's European riverfront.",
.\v2\src\data\city-attractions.ts:144:    whyEn: "China's highest observation deck and the clearest \"future Shanghai\" attraction. The 118th-floor Top of Shanghai Observatory gives a 360° view over Lujiazui, the Bund, Suzhou Creek, and the city's full scale. Heavily affected by haze, rain, and low cloud — book close to the visit date.",
.\v2\src\data\city-attractions.ts:158:    whyEn: "The compact skyline cluster opposite the Bund: Oriental Pearl Tower, Shanghai Tower, World Financial Center, Jin Mao, IFC, riverside promenades. Iconic photos, sky decks, malls, and easy riverfront contrast with the Bund. Outdoor district free; sky-deck tickets via official ticketing.",
.\v2\src\data\city-attractions.ts:172:    whyEn: "The most visitor-friendly slice of the former French Concession: plane-tree streets, garden villas, writer residences, cafes, Ferguson Lane, and the flatiron Wukang Mansion photo spot. Better as a slow walk than a single attraction. Police barriers control the crowds at the photo intersection on weekends.",
.\v2\src\data\city-attractions.ts:186:    whyEn: "The strongest single stop for ancient Chinese art in central Shanghai: bronzes, ceramics, jade, calligraphy, painting, seals, furniture. Since 2025-09 individual visitors no longer need reservations for the People's Square site during normal periods — entry with passport. Closed Mondays.",
.\v2\src\data\city-attractions.ts:202:    whyEn: "At 600 m, the tallest TV/observation tower in China and third tallest in the world. The twisted-waist design is one of Guangzhou's most recognisable silhouettes. Indoor and outdoor observation decks; the glass sky walk and bubble tram revolving outside the structure offer extra thrills. Best at dusk for the daylight-to-LED transition.",
.\v2\src\data\city-attractions.ts:216:    whyEn: "A 0.3 km² sand-bar in the Pearl River that served as the British and French concession from 1859 to 1943. Over 150 European-style buildings — consulates, banks, churches, trading-house villas — shaded by 200-year-old banyan trees. No cars, no admission, no hawkers inside. Often described as the calmest 90 minutes in Guangzhou.",
.\v2\src\data\city-attractions.ts:230:    whyEn: "Built 1888–1894 by 72 Chen-surname clans as an exam-preparation hostel and worship site, this compound is the supreme surviving example of Lingnan decorative architecture. Every surface — ridge beams, screen walls, courtyards — is covered in polychrome ceramic figurines, wood carvings, stone reliefs, and brick carvings. \"The Pearl of Lingnan Architecture.\"",
.\v2\src\data\city-attractions.ts:244:    whyEn: "The Five Rams Statue (1959, 11 m, 130+ pieces of granite) is Guangzhou's civic symbol, rooted in the legend of five celestial rams who brought rice seeds to bless the city. Yuexiu Park (860,000 sq m) is the city's largest urban park and contains Zhenhai Tower (Ming-dynasty watchtower, now Guangzhou Museum) and remnants of the ancient city wall. Free entry; packed with locals doing tai chi from 6 AM.",
.\v2\src\data\city-attractions.ts:258:    whyEn: "The illuminated-skyline cruise is Guangzhou's signature evening activity. The 60–90 min route passes below Canton Tower, along Zhujiang New Town's glittering skyline, past the colonial Shamian shores, and through bridges lit in colour. The 8 PM departure catches the full LED show on Canton Tower.",
.\v2\src\data\city-attractions.ts:272:    whyEn: "A 5A national scenic area 12 km from the centre. The Moxing Ridge peak (382 m) gives panoramic views over Greater Guangzhou on clear days. 21 sq km park with cable car, Mingchun Valley aviary (5,000+ birds), Yunxi Botanical Garden, and the Sculpture Park. 20 million visitors per year. Popular for early-morning Cantonese exercise culture.",
.\v2\src\data\city-attractions.ts:288:    whyEn: "Shenzhen's classic theme-park shorthand: global landmarks rebuilt at miniature or reduced scale, evening shows, and a distinctly Shenzhen \"world showcase\" atmosphere. Useful for families, Hong Kong day-trippers, and visitors who want an unmistakably Shenzhen attraction rather than another mall. 09:00–22:30 daily.",
.\v2\src\data\city-attractions.ts:302:    whyEn: "Shenzhen's easiest creative-neighbourhood stop: converted industrial buildings, cafes, design shops, small galleries, bookstores, and periodic markets. Pairs well with the OCT theme-park cluster and works as a lower-pressure alternative to paid theme parks. Public district, free entry; shops Tuesday–Sunday.",
.\v2\src\data\city-attractions.ts:316:    whyEn: "Shekou Sea World is the most foreigner-friendly dining and nightlife node in Shenzhen: waterfront plaza, restaurants, bars, the Minghua ship landmark, and the Sea World Culture & Arts Center (Design Society) for design exhibitions. A strong first-night choice for visitors arriving from Hong Kong or by ferry.",
.\v2\src\data\city-attractions.ts:330:    whyEn: "The easiest named beaches from central Shenzhen, now reachable comfortably by Metro Line 8. Dameisha is the classic public beach; Xiaomeisha has been redeveloped and is more resort-like. Best for \"I want the coast and seafood without a full Dapeng day\". Avoid peak midday in summer.",
.\v2\src\data\city-attractions.ts:344:    whyEn: "The central Shenzhen orientation hill: free, easy by metro, good city views, and famous for the Deng Xiaoping statue overlooking the CBD. One of the cleanest ways to read Shenzhen's reform-era identity to a first-time visitor.",
.\v2\src\data\city-attractions.ts:358:    whyEn: "The closest thing Shenzhen has to a historic coastal village plus a beach/hiking day. The Ming/Qing-era fortress gives military-history texture; nearby Jiaochangwei, Yangmeikeng, Xichong/Dongchong and coastal routes make it a full-day nature trip. A private driver or tour reduces friction for foreign visitors.",
.\v2\src\data\city-seasons.ts:15:    summary: { en: string; zh: string };
.\v2\src\data\city-seasons.ts:19:  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
.\v2\src\data\city-seasons.ts:38:        summary: {
.\v2\src\data\city-seasons.ts:39:          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
.\v2\src\data\city-seasons.ts:49:        summary: {
.\v2\src\data\city-seasons.ts:60:        summary: {
.\v2\src\data\city-seasons.ts:71:        summary: {
.\v2\src\data\city-seasons.ts:72:          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
.\v2\src\data\city-seasons.ts:77:    watchOuts: [
.\v2\src\data\city-seasons.ts:110:        summary: {
.\v2\src\data\city-seasons.ts:121:        summary: {
.\v2\src\data\city-seasons.ts:132:        summary: {
.\v2\src\data\city-seasons.ts:143:        summary: {
.\v2\src\data\city-seasons.ts:149:    watchOuts: [
.\v2\src\data\city-seasons.ts:182:        summary: {
.\v2\src\data\city-seasons.ts:193:        summary: {
.\v2\src\data\city-seasons.ts:204:        summary: {
.\v2\src\data\city-seasons.ts:215:        summary: {
.\v2\src\data\city-seasons.ts:221:    watchOuts: [
.\v2\src\data\city-seasons.ts:254:        summary: {
.\v2\src\data\city-seasons.ts:265:        summary: {
.\v2\src\data\city-seasons.ts:276:        summary: {
.\v2\src\data\city-seasons.ts:287:        summary: {
.\v2\src\data\city-seasons.ts:293:    watchOuts: [
.\v2\src\data\city-seasons.ts:305:        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
.\v2\src\data\city-seasons.ts:327:    season.watchOuts.forEach((item) => ids.add(item.sourceId));
.\v2\src\data\itineraries.ts:7:  morning: { en: string; zh: string; attractionId?: string };
.\v2\src\data\itineraries.ts:8:  afternoon: { en: string; zh: string; attractionId?: string };
.\v2\src\data\itineraries.ts:9:  evening: { en: string; zh: string; attractionId?: string };
.\v2\src\data\itineraries.ts:24:    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
.\v2\src\data\itineraries.ts:31:        morning: {
.\v2\src\data\itineraries.ts:36:        afternoon: {
.\v2\src\data\itineraries.ts:41:        evening: {
.\v2\src\data\itineraries.ts:52:        morning: {
.\v2\src\data\itineraries.ts:57:        afternoon: {
.\v2\src\data\itineraries.ts:62:        evening: {
.\v2\src\data\itineraries.ts:63:          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
.\v2\src\data\itineraries.ts:66:        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
.\v2\src\data\itineraries.ts:73:        morning: {
.\v2\src\data\itineraries.ts:78:        afternoon: {
.\v2\src\data\itineraries.ts:83:        evening: {
.\v2\src\data\itineraries.ts:84:          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
.\v2\src\data\itineraries.ts:101:        morning: {
.\v2\src\data\itineraries.ts:106:        afternoon: {
.\v2\src\data\itineraries.ts:111:        evening: {
.\v2\src\data\itineraries.ts:115:        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
.\v2\src\data\itineraries.ts:122:        morning: {
.\v2\src\data\itineraries.ts:127:        afternoon: {
.\v2\src\data\itineraries.ts:128:          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
.\v2\src\data\itineraries.ts:132:        evening: {
.\v2\src\data\itineraries.ts:143:        morning: {
.\v2\src\data\itineraries.ts:148:        afternoon: {
.\v2\src\data\itineraries.ts:153:        evening: {
.\v2\src\data\itineraries.ts:171:        morning: {
.\v2\src\data\itineraries.ts:176:        afternoon: {
.\v2\src\data\itineraries.ts:181:        evening: {
.\v2\src\data\itineraries.ts:193:        morning: {
.\v2\src\data\itineraries.ts:198:        afternoon: {
.\v2\src\data\itineraries.ts:203:        evening: {
.\v2\src\data\itineraries.ts:214:        morning: {
.\v2\src\data\itineraries.ts:215:          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
.\v2\src\data\itineraries.ts:218:        afternoon: {
.\v2\src\data\itineraries.ts:219:          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
.\v2\src\data\itineraries.ts:222:        evening: {
.\v2\src\data\itineraries.ts:227:        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
.\v2\src\data\itineraries.ts:241:        morning: {
.\v2\src\data\itineraries.ts:246:        afternoon: {
.\v2\src\data\itineraries.ts:251:        evening: {
.\v2\src\data\itineraries.ts:263:        morning: {
.\v2\src\data\itineraries.ts:268:        afternoon: {
.\v2\src\data\itineraries.ts:273:        evening: {
.\v2\src\data\itineraries.ts:284:        morning: {
.\v2\src\data\itineraries.ts:289:        afternoon: {
.\v2\src\data\itineraries.ts:293:        evening: {
.\v2\src\data\city-attractions.ts:13:  whyEn: string;
.\v2\src\data\city-attractions.ts:30:    whyEn: "The largest intact imperial palace complex in the world: 180 acres, 980 buildings, 8,728 rooms. 24 emperors lived here across the Ming and Qing dynasties (1420–1912). 7-day advance booking is mandatory; 40,000-person daily cap sells out within minutes for peak weekends.",
.\v2\src\data\city-attractions.ts:44:    whyEn: "The Great Wall section most recommended by experienced foreign travellers: well-restored Ming masonry, 23 watchtowers across a 2.25 km open stretch, cable car or chair lift up plus a toboggan descent. The official English website accepts international cards directly. 1 million foreign visitors in 2025.",
.\v2\src\data\city-attractions.ts:58:    whyEn: "The best-preserved imperial garden in China and a UNESCO World Heritage Site. 220-hectare Kunming Lake with Longevity Hill behind it, the 728 m painted Long Corridor, and a theatrical landscape designed for Qing imperial leisure. Audio guides in 19 languages.",
.\v2\src\data\city-attractions.ts:72:    whyEn: "The largest extant sacrificial altar complex in China (built 1406–1420), used by every Ming and Qing emperor to pray for harvest. The triple-eaved circular blue-roofed Hall of Prayer for Good Harvests is one of the most architecturally perfect timber structures in Chinese history. The park grounds double as a morning tai chi venue.",
.\v2\src\data\city-attractions.ts:86:    whyEn: "The most important Tibetan Buddhist temple in Beijing and one of the most significant Gelug monasteries outside Tibet. Originally an imperial princely mansion (1694), converted to a lamasery in 1744. The Wanfu Pavilion houses an 18 m Maitreya Buddha carved from a single sandalwood tree — the tallest sandalwood statue in the world.",
.\v2\src\data\city-attractions.ts:100:    whyEn: "The world's third-largest public square (440,000 sq m) and the symbolic centre of the People's Republic. Daily flag-raising ceremony at sunrise, flag-lowering at sunset. Free entry but mandatory advance reservation (1–7 days ahead) — walk-up visitors are turned back at the security checkpoint.",
.\v2\src\data\city-attractions.ts:116:    whyEn: "Shanghai's essential postcard view: a 1.5 km Huangpu River promenade where early-20th-century banks and trading houses face the Pudong skyline. The simplest place to read both Shanghai's treaty-port past and its vertical-finance present in one frame. Sunrise for low crowds; evening for the skyline lights.",
.\v2\src\data\city-attractions.ts:130:    whyEn: "Shanghai's best central classical Chinese garden: Ming-dynasty rockeries, pavilions, ponds, zigzag bridges, the City God Temple area, and the surrounding old-city bazaar streets all compressed into a walkable historic quarter. The clearest contrast to the Bund's European riverfront.",
.\v2\src\data\city-attractions.ts:144:    whyEn: "China's highest observation deck and the clearest \"future Shanghai\" attraction. The 118th-floor Top of Shanghai Observatory gives a 360° view over Lujiazui, the Bund, Suzhou Creek, and the city's full scale. Heavily affected by haze, rain, and low cloud — book close to the visit date.",
.\v2\src\data\city-attractions.ts:158:    whyEn: "The compact skyline cluster opposite the Bund: Oriental Pearl Tower, Shanghai Tower, World Financial Center, Jin Mao, IFC, riverside promenades. Iconic photos, sky decks, malls, and easy riverfront contrast with the Bund. Outdoor district free; sky-deck tickets via official ticketing.",
.\v2\src\data\city-attractions.ts:172:    whyEn: "The most visitor-friendly slice of the former French Concession: plane-tree streets, garden villas, writer residences, cafes, Ferguson Lane, and the flatiron Wukang Mansion photo spot. Better as a slow walk than a single attraction. Police barriers control the crowds at the photo intersection on weekends.",
.\v2\src\data\city-attractions.ts:186:    whyEn: "The strongest single stop for ancient Chinese art in central Shanghai: bronzes, ceramics, jade, calligraphy, painting, seals, furniture. Since 2025-09 individual visitors no longer need reservations for the People's Square site during normal periods — entry with passport. Closed Mondays.",
.\v2\src\data\city-attractions.ts:202:    whyEn: "At 600 m, the tallest TV/observation tower in China and third tallest in the world. The twisted-waist design is one of Guangzhou's most recognisable silhouettes. Indoor and outdoor observation decks; the glass sky walk and bubble tram revolving outside the structure offer extra thrills. Best at dusk for the daylight-to-LED transition.",
.\v2\src\data\city-attractions.ts:216:    whyEn: "A 0.3 km² sand-bar in the Pearl River that served as the British and French concession from 1859 to 1943. Over 150 European-style buildings — consulates, banks, churches, trading-house villas — shaded by 200-year-old banyan trees. No cars, no admission, no hawkers inside. Often described as the calmest 90 minutes in Guangzhou.",
.\v2\src\data\city-attractions.ts:230:    whyEn: "Built 1888–1894 by 72 Chen-surname clans as an exam-preparation hostel and worship site, this compound is the supreme surviving example of Lingnan decorative architecture. Every surface — ridge beams, screen walls, courtyards — is covered in polychrome ceramic figurines, wood carvings, stone reliefs, and brick carvings. \"The Pearl of Lingnan Architecture.\"",
.\v2\src\data\city-attractions.ts:244:    whyEn: "The Five Rams Statue (1959, 11 m, 130+ pieces of granite) is Guangzhou's civic symbol, rooted in the legend of five celestial rams who brought rice seeds to bless the city. Yuexiu Park (860,000 sq m) is the city's largest urban park and contains Zhenhai Tower (Ming-dynasty watchtower, now Guangzhou Museum) and remnants of the ancient city wall. Free entry; packed with locals doing tai chi from 6 AM.",
.\v2\src\data\city-attractions.ts:258:    whyEn: "The illuminated-skyline cruise is Guangzhou's signature evening activity. The 60–90 min route passes below Canton Tower, along Zhujiang New Town's glittering skyline, past the colonial Shamian shores, and through bridges lit in colour. The 8 PM departure catches the full LED show on Canton Tower.",
.\v2\src\data\city-attractions.ts:272:    whyEn: "A 5A national scenic area 12 km from the centre. The Moxing Ridge peak (382 m) gives panoramic views over Greater Guangzhou on clear days. 21 sq km park with cable car, Mingchun Valley aviary (5,000+ birds), Yunxi Botanical Garden, and the Sculpture Park. 20 million visitors per year. Popular for early-morning Cantonese exercise culture.",
.\v2\src\data\city-attractions.ts:288:    whyEn: "Shenzhen's classic theme-park shorthand: global landmarks rebuilt at miniature or reduced scale, evening shows, and a distinctly Shenzhen \"world showcase\" atmosphere. Useful for families, Hong Kong day-trippers, and visitors who want an unmistakably Shenzhen attraction rather than another mall. 09:00–22:30 daily.",
.\v2\src\data\city-attractions.ts:302:    whyEn: "Shenzhen's easiest creative-neighbourhood stop: converted industrial buildings, cafes, design shops, small galleries, bookstores, and periodic markets. Pairs well with the OCT theme-park cluster and works as a lower-pressure alternative to paid theme parks. Public district, free entry; shops Tuesday–Sunday.",
.\v2\src\data\city-attractions.ts:316:    whyEn: "Shekou Sea World is the most foreigner-friendly dining and nightlife node in Shenzhen: waterfront plaza, restaurants, bars, the Minghua ship landmark, and the Sea World Culture & Arts Center (Design Society) for design exhibitions. A strong first-night choice for visitors arriving from Hong Kong or by ferry.",
.\v2\src\data\city-attractions.ts:330:    whyEn: "The easiest named beaches from central Shenzhen, now reachable comfortably by Metro Line 8. Dameisha is the classic public beach; Xiaomeisha has been redeveloped and is more resort-like. Best for \"I want the coast and seafood without a full Dapeng day\". Avoid peak midday in summer.",
.\v2\src\data\city-attractions.ts:344:    whyEn: "The central Shenzhen orientation hill: free, easy by metro, good city views, and famous for the Deng Xiaoping statue overlooking the CBD. One of the cleanest ways to read Shenzhen's reform-era identity to a first-time visitor.",
.\v2\src\data\city-attractions.ts:358:    whyEn: "The closest thing Shenzhen has to a historic coastal village plus a beach/hiking day. The Ming/Qing-era fortress gives military-history texture; nearby Jiaochangwei, Yangmeikeng, Xichong/Dongchong and coastal routes make it a full-day nature trip. A private driver or tour reduces friction for foreign visitors.",
.\v2\src\data\city-seasons.ts:15:    summary: { en: string; zh: string };
.\v2\src\data\city-seasons.ts:19:  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
.\v2\src\data\city-seasons.ts:38:        summary: {
.\v2\src\data\city-seasons.ts:39:          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
.\v2\src\data\city-seasons.ts:49:        summary: {
.\v2\src\data\city-seasons.ts:60:        summary: {
.\v2\src\data\city-seasons.ts:71:        summary: {
.\v2\src\data\city-seasons.ts:72:          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
.\v2\src\data\city-seasons.ts:77:    watchOuts: [
.\v2\src\data\city-seasons.ts:110:        summary: {
.\v2\src\data\city-seasons.ts:121:        summary: {
.\v2\src\data\city-seasons.ts:132:        summary: {
.\v2\src\data\city-seasons.ts:143:        summary: {
.\v2\src\data\city-seasons.ts:149:    watchOuts: [
.\v2\src\data\city-seasons.ts:182:        summary: {
.\v2\src\data\city-seasons.ts:193:        summary: {
.\v2\src\data\city-seasons.ts:204:        summary: {
.\v2\src\data\city-seasons.ts:215:        summary: {
.\v2\src\data\city-seasons.ts:221:    watchOuts: [
.\v2\src\data\city-seasons.ts:254:        summary: {
.\v2\src\data\city-seasons.ts:265:        summary: {
.\v2\src\data\city-seasons.ts:276:        summary: {
.\v2\src\data\city-seasons.ts:287:        summary: {
.\v2\src\data\city-seasons.ts:293:    watchOuts: [
.\v2\src\data\city-seasons.ts:305:        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
.\v2\src\data\city-seasons.ts:327:    season.watchOuts.forEach((item) => ids.add(item.sourceId));
.\v2\src\data\food.ts:11:    culturalNotes?: { en: string; zh: string };
.\v2\src\data\food.ts:27:      culturalNotes: {
.\v2\src\data\food.ts:63:      culturalNotes: {
.\v2\src\data\food.ts:96:      en: "Cantonese yum cha (morning dim sum), slow-simmered soups (lao-huo tang), char siu and roast meats, herbal tea (liang cha). Traditionally one of the most foreign-friendly food cities in China.",
.\v2\src\data\food.ts:99:      culturalNotes: {
.\v2\src\data\food.ts:140:      culturalNotes: {
.\v2\src\data\itineraries.ts:7:  morning: { en: string; zh: string; attractionId?: string };
.\v2\src\data\itineraries.ts:8:  afternoon: { en: string; zh: string; attractionId?: string };
.\v2\src\data\itineraries.ts:9:  evening: { en: string; zh: string; attractionId?: string };
.\v2\src\data\itineraries.ts:24:    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
.\v2\src\data\itineraries.ts:31:        morning: {
.\v2\src\data\itineraries.ts:36:        afternoon: {
.\v2\src\data\itineraries.ts:41:        evening: {
.\v2\src\data\itineraries.ts:52:        morning: {
.\v2\src\data\itineraries.ts:57:        afternoon: {
.\v2\src\data\itineraries.ts:62:        evening: {
.\v2\src\data\itineraries.ts:63:          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
.\v2\src\data\itineraries.ts:66:        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
.\v2\src\data\itineraries.ts:73:        morning: {
.\v2\src\data\itineraries.ts:78:        afternoon: {
.\v2\src\data\itineraries.ts:83:        evening: {
.\v2\src\data\itineraries.ts:84:          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
.\v2\src\data\itineraries.ts:101:        morning: {
.\v2\src\data\itineraries.ts:106:        afternoon: {
.\v2\src\data\itineraries.ts:111:        evening: {
.\v2\src\data\itineraries.ts:115:        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
.\v2\src\data\itineraries.ts:122:        morning: {
.\v2\src\data\itineraries.ts:127:        afternoon: {
.\v2\src\data\itineraries.ts:128:          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
.\v2\src\data\itineraries.ts:132:        evening: {
.\v2\src\data\itineraries.ts:143:        morning: {
.\v2\src\data\itineraries.ts:148:        afternoon: {
.\v2\src\data\itineraries.ts:153:        evening: {
.\v2\src\data\itineraries.ts:171:        morning: {
.\v2\src\data\itineraries.ts:176:        afternoon: {
.\v2\src\data\itineraries.ts:181:        evening: {
.\v2\src\data\itineraries.ts:193:        morning: {
.\v2\src\data\itineraries.ts:198:        afternoon: {
.\v2\src\data\itineraries.ts:203:        evening: {
.\v2\src\data\itineraries.ts:214:        morning: {
.\v2\src\data\itineraries.ts:215:          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
.\v2\src\data\itineraries.ts:218:        afternoon: {
.\v2\src\data\itineraries.ts:219:          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
.\v2\src\data\itineraries.ts:222:        evening: {
.\v2\src\data\itineraries.ts:227:        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
.\v2\src\data\itineraries.ts:241:        morning: {
.\v2\src\data\itineraries.ts:246:        afternoon: {
.\v2\src\data\itineraries.ts:251:        evening: {
.\v2\src\data\itineraries.ts:263:        morning: {
.\v2\src\data\itineraries.ts:268:        afternoon: {
.\v2\src\data\itineraries.ts:273:        evening: {
.\v2\src\data\itineraries.ts:284:        morning: {
.\v2\src\data\itineraries.ts:289:        afternoon: {
.\v2\src\data\itineraries.ts:293:        evening: {
.\v2\src\data\transport.ts:32:    summaryEn: string;
.\v2\src\data\transport.ts:33:    summaryZh: string;
.\v2\src\data\transport.ts:139:      summaryEn: "All 29 lines / 523 stations: Visa, Mastercard, UnionPay, JCB, Amex tap-to-ride at every gate (since 2025-06-15). World's first metro to support all 5 networks.",
.\v2\src\data\transport.ts:140:      summaryZh: "全 29 线 / 523 站：Visa/MC/UnionPay/JCB/Amex 全部支持闸机刷卡，2025-06-15 起。全球首个支持 5 大卡组织全网刷卡的地铁。",
.\v2\src\data\transport.ts:222:      summaryEn: "All 21 lines / 517 stations / 896 km: 5 networks + e-CNY tap-to-ride (since 2025-06-28). Card must support ODA. UnionPay channel takes priority on dual-brand cards.",
.\v2\src\data\transport.ts:223:      summaryZh: "全 21 线 / 517 站 / 896 km：5 大卡 + 数字人民币闸机刷卡（2025-06-28 起）。卡需支持 ODA 离线认证；双标卡优先走银联通道。",
.\v2\src\data\transport.ts:293:      summaryEn: "All Guangzhou Metro lines: Visa, Mastercard, UnionPay, JCB, Amex tap-to-ride (since 2025-10-12). AlipayHK QR code also works since 2024-03-04.",
.\v2\src\data\transport.ts:294:      summaryZh: "广州地铁全网：Visa/MC/UnionPay/JCB/Amex 闸机刷卡（2025-10-12 起）。AlipayHK 二维码自 2024-03-04 起可用。",
.\v2\src\data\transport.ts:359:      summaryEn: "Foreign-card POS at 391 service centres / 440 devices: Visa, Mastercard, Discover, Amex, Diners Club, JCB. Gate-level tap doesn't work at every turnstile yet — pay at the service centre POS or use cash.",
.\v2\src\data\transport.ts:360:      summaryZh: "深圳地铁 391 个客服中心 / 440 台 POS 收外卡：Visa/MC/Discover/Amex/Diners/JCB；闸机外卡刷卡尚未全网，先去客服中心 POS 或用现金。",

 succeeded in 834ms:
import type { CityId } from "./transport";

export type CityFood = {
  cityId: CityId;
  cityEn: string;
  cityZh: string;
  cuisine: {
    en: string;
    zh: string;
    sourceId: string;
    culturalNotes?: { en: string; zh: string };
  };
  districts: { en: string; zh: string; sourceId: string };
  deliveryNote: { en: string; zh: string; sourceId: string };
  pitfalls: Array<{ en: string; zh: string; sourceId: string }>;
};

export const cityFood: CityFood[] = [
  {
    cityId: "beijing",
    cityEn: "Beijing",
    cityZh: "鍖椾含",
    cuisine: {
      en: "Peking roast duck 鈥?carved tableside, paired with thin pancakes, scallion, and sweet bean sauce. Old-Beijing snacks: noodles with soybean paste, dou-zhi (fermented mung bean), tanghulu skewers, copper-pot mutton hotpot. Halal options widely available.",
      zh: "鍖椾含鐑ら腑鈥斺€旂幇鍦虹墖鐨紝閰嶈杽楗笺€佽懕涓濄€佺敎闈㈤叡銆傝€佸寳浜皬鍚冿細鐐搁叡闈€佽眴姹併€佺硸钁姦銆侀摐閿呮懂缇婅倝銆傛竻鐪熼€夋嫨鏅強銆?,
      sourceId: "beijing-roast-duck",
      culturalNotes: {
        en: "The duck is roasted whole until the skin is glassy, then sliced thin tableside. You wrap each slice in a delicate pancake with scallion, cucumber, and a dab of sweet bean sauce. Eating it is part performance, part shared meal 鈥?best with a small group ordering a whole duck. The classic version isn't halal; halal restaurants substitute chicken. Order chrysanthemum tea or a local beer with it; the tradition doesn't add chilli oil. Old-Beijing snacks (noodles with soybean paste, dou-zhi, tanghulu skewers) survive in walking-street stalls and small storefronts; pick one with locals queuing 鈥?that's your quality signal. Copper-pot mutton hotpot belongs to winter, served with sesame paste and pickled garlic on the side.",
        zh: "鏁撮腑鐑よ嚦澶栫毊鏄庝寒閰ヨ剢锛屾杈圭墖鎴愯杽鐗囥€傛瘡鐗囩敤鏋佽杽鐨勬槬楗艰９濂斤紝閰嶈懕涓濄€侀粍鐡滄潯銆佹姽涓€鍕虹敎闈㈤叡銆傚悆娉曟湰韬甫鏈変华寮忔劅锛岄€傚悎鍑犱汉鍏卞悓鐐逛竴鍙暣楦€傜粡鍏稿仛娉曠敤鐚补澶勭悊闈㈤ゼ锛屽苟闈炴竻鐪燂紱娓呯湡椁愬巺涓€鑸互楦′唬楦€傞厤鑿婅姳鑼舵垨鏈湴鍟ら厭杈冭嚜鐒讹紝浼犵粺鍚冩硶涓嶅姞杈ｆ补銆傝€佸寳浜皬鍚冿紙鐐搁叡闈€佽眴姹併€佺硸钁姦锛夊湪姝ヨ琛楁憡浣嶅拰鑰佸簵閲屼粛鑳芥壘鍒帮紱寤鸿閫夋嫨鏈湴椤惧杈冨鐨勬憡浣嶃€傞摐閿呮懂缇婅倝灞炰簬鍐鑿滃搧锛岃樃楹婚叡銆侀厤鑵婂叓钂溿€?
      }
    },
    districts: {
      en: "Sanlitun (foreign restaurants, English menus common); Guomao CBD (international hotel dining); Wangfujing snack street; Hutong areas of central axis.",
      zh: "涓夐噷灞紙瑗块澶氥€佽嫳鏂囪彍鍗曞父瑙侊級锛涘浗璐?CBD锛堥珮鏄熼厭搴楅楗級锛涚帇搴滀簳灏忓悆琛楋紱涓酱绾胯儭鍚岀墖鍖恒€?,
      sourceId: "beijing-axis-snacks"
    },
    deliveryNote: {
      en: "Meituan and Ele.me both require a Chinese mobile number for SMS verification plus a domestic payment method. Ask your hotel concierge to order for you, or stick to restaurants you can walk into.",
      zh: "缇庡洟/楗夸簡涔?App 娉ㄥ唽闇€涓浗澶ч檰鎵嬫満鍙?+ 鍥藉唴鏀粯鏂瑰紡锛堟敮浠樺疂/寰俊锛夛紝澶栧浗娓稿涓€鑸棤鏈湴鍗忓姪闅句互涓嬪崟銆?,
      sourceId: "beijing-roast-duck"
    },
    pitfalls: [
      {
        en: "Tea ceremony scams near tourist areas (Wangfujing/Houhai). Walk away if invited by 'students' to a tea house.",
        zh: "鐜嬪簻浜?鍚庢捣涓€甯︽湁'瀛︾敓閭€璇峰幓鑼堕'鐨勮尪鑹洪楠楀眬锛岄亣鍒伴檶鐢熶汉涓诲姩閭€璇疯鐩存帴绂诲紑銆?,
        sourceId: "beijing-roast-duck"
      },
      {
        en: "Some smaller hutong shops are cash-only; Visa swipe is rare outside hotels.",
        zh: "鑳″悓閲岀殑灏忓瀷搴楅摵澶氭敹鐜伴噾锛涢珮鏄熼厭搴椾箣澶栧埛澶栧崱姒傜巼浣庛€?,
        sourceId: "beijing-axis-snacks"
      }
    ]
  },
  {
    cityId: "shanghai",
    cityEn: "Shanghai",
    cityZh: "涓婃捣",
    cuisine: {
      en: "Benbang Shanghainese cuisine: red-braised pork (hong-shao rou), sweet-soy ribs, drunken chicken. Xiaolongbao soup dumplings. International cuisine concentrates around the Bund and the former French Concession.",
      zh: "鏈府鑿滐細绾㈢儳鑲夈€佺硸閱嬪皬鎺掋€侀唹楦★紱灏忕鍖呫€傚婊╀笌鍘熸硶绉熺晫鍥介檯鑿滅郴涓板瘜銆?,
      sourceId: "shanghai-xiaolongbao",
      culturalNotes: {
        en: "Shanghainese cooking leans sweet 鈥?soy reduces with rock sugar until it glazes pork belly mahogany red; sweet-soy ribs are a holiday staple; drunken chicken is poached cold and steeped in shaoxing wine for hours. Xiaolongbao is the everyday lunch icon 鈥?eighteen pleats, all about the broth inside. The technique: bite a tiny hole at the top, sip the broth out, then eat the wrapper and filling. Burning your tongue on the first try is a rite of passage. Compared with Beijing, Shanghainese tabletop manners feel gentler 鈥?smaller plates, more sharing, less ceremony. International dining (French, Japanese, Italian) has real depth here that you won't find as easily elsewhere in mainland China.",
        zh: "鏈府鑿滃亸鐢溾€斺€旈叡娌归厤鍐扮硸鏀舵眮锛岀孩鐑ц倝鍏変寒濡傜惀鐝€锛涚硸閱嬪皬鎺掓槸鑺傛棩甯歌彍锛涢唹楦″喎椋燂紝鍦ㄧ粛鍏撮粍閰掗噷娴告暟灏忔椂銆傚皬绗煎寘鏄棩甯稿崍椁愮殑浠ｈ〃鈥斺€斿崄鍏亾瑜舵崗濂斤紝閲嶇偣鍦ㄩ噷闈㈢殑姹ゆ眮銆傚悆娉曪細鍏堝湪椤剁鍜竴涓皬鍙ｏ紝鍚稿嚭姹ゆ眮锛屽啀鍚冪毊鍜岄銆傚垵娆￠鐢ㄨ娉ㄦ剰鐑彛銆傚拰鍖椾含鑿滅浉姣旓紝鏈府鑿滅殑妗岄潰绀间华鏇翠粠瀹光€斺€斿垎閲忔洿灏忋€佸叡浜洿澶氾紝鎺掑満鎰熻緝寮便€傚浗闄呴楗紙娉曘€佹棩銆佹剰锛夊湪杩欓噷绉疮杈冩繁锛屽湪涓浗澶ч檰鍏朵粬鍩庡競鐩稿灏戣銆?
      }
    },
    districts: {
      en: "Xintiandi (English menus standard); Jing'an (mid-range international); the Bund (high-end); Former French Concession (caf茅s and bistros).",
      zh: "鏂板ぉ鍦帮紙鑻辨枃鑿滃崟鏍囬厤锛夛紱闈欏畨锛堜腑绔浗闄呴楗級锛涘婊╋紙楂樼锛夛紱鍘熸硶绉熺晫锛堝挅鍟￠涓庡皬閰掗锛夈€?,
      sourceId: "shanghai-xiaolongbao"
    },
    deliveryNote: {
      en: "Same as Beijing 鈥?Meituan/Eleme need a Chinese mobile + domestic payment. Hotels often have curated room-service menus in English as a workaround.",
      zh: "鍚屽寳浜€斺€旂編鍥?楗夸簡涔堥渶鍥藉唴鎵嬫満鍙?+ 鏀粯銆傞厭搴楅€氬父鏈夎嫳鏂囪彍鍗曠殑瀹㈡埧閫侀鏇夸唬鏂规銆?,
      sourceId: "shanghai-xiaolongbao"
    },
    pitfalls: [
      {
        en: "Xiaolongbao broth is scalding hot. Bite a small hole first, sip the soup, then eat. Multiple ER visits per year for tourist burns.",
        zh: "灏忕鍖呮堡姹佹瀬鐑€斺€斿厛鍜皬鍙ｅ惛姹ゅ啀鍚冿紝姣忓勾閮芥湁澶栧浗娓稿鐑激灏卞尰鐨勬渚嬨€?,
        sourceId: "shanghai-xiaolongbao"
      },
      {
        en: "Confusing Hongqiao Airport (SHA) with Hongqiao Railway Station gates can lose 30 min. Plan dinner near where you'll actually depart from.",
        zh: "铏规ˉ鏈哄満鍜岃櫣妗ョ伀杞︾珯杩涚珯鍙ｅ鏄撴贩娣嗭紝鍙兘鐩稿樊 30 鍒嗛挓銆傝鏅氶鍓嶅厛纭瀹為檯鍑哄彂浣嶇疆銆?,
        sourceId: "shanghai-xiaolongbao"
      }
    ]
  },
  {
    cityId: "guangzhou",
    cityEn: "Guangzhou",
    cityZh: "骞垮窞",
    cuisine: {
      en: "Cantonese yum cha (morning dim sum), slow-simmered soups (lao-huo tang), char siu and roast meats, herbal tea (liang cha). Traditionally one of the most foreign-friendly food cities in China.",
      zh: "绮ゅ紡鏃╄尪锛堢偣蹇冿級銆佽€佺伀姹ゃ€佺儳鍛筹紙鍙夌儳銆佺儳楣咃級銆佸噳鑼讹紱浼犵粺涓婃槸鍥藉唴瀵瑰绫嶆父瀹㈡渶鍙嬪ソ鐨勭編椋熷煄甯備箣涓€銆?,
      sourceId: "gz-foreigner-guide-pdf",
      culturalNotes: {
        en: "Cantonese eating is a daylong rhythm. Yum cha (literally 'drink tea') starts at sunrise 鈥?families bring babies and grandparents, dim sum trays circle the table, conversations stretch for hours. Tea is bottomless; the small tea-seat fee (楼3鈥?0 per person) covers leaves and table service, and is normal across Cantonese restaurants 鈥?never a scam, even if it surprises you on the bill. Slow-simmered soup (lao-huo tang) opens dinner 鈥?bones and herbs simmered five hours. Herbal tea (liang cha, sold from corner shops) is closer to medicine than refreshment, especially in summer humidity. Char siu and roast goose hang in shop windows; the skin should crackle when cut. Order more than you think you need 鈥?empty plates embarrass the host. English menus are common in tourist areas but small neighbourhood places use picture menus or just Chinese 鈥?translation app in hand.",
        zh: "绮よ彍璐┛涓€澶╃殑椁愰ギ鑺傚銆傛棭鑼讹紙鍗?\"楗尪\"锛夋竻鏅ㄥ紑濮嬶紝甯歌涓€瀹朵笁浠ｅ洿鍧愪竴妗岋紝鐐瑰績杞︿笉鏂帹杩囷紝鑱婂ぉ鍙寔缁暣涓笂鍗堛€傝尪浣嶈垂锛堟瘡浜?楼3鈥?0锛夋槸鑼跺彾 + 妗岄潰鏈嶅姟鐨勮垂鐢紝绮よ彍椁愬巺鏅亶鏀跺彇锛屽睘浜庢甯告敹璐广€傛櫄椁愬父浠庤€佺伀姹ゅ紑濮嬧€斺€旈澶村拰鑽潗鐔簲灏忔椂銆傚噳鑼讹紙琛楄竟鍑夎尪閾哄敭鍗栵級鏇存帴杩戣嵂鐢ㄩギ鍝侊紝澶忓ぉ婀跨儹鏃跺挨鍏跺父瑙併€傜儳鍛冲簵閲屾寕鐫€鍙夌儳鍜岀儳楣咃紝澶栫毊搴斿湪鍒囧紑鏃舵湁鑴嗗搷銆傜偣鑿滆绌朵赴鐩涳紝绌虹洏浼氳涓讳汉鏄惧緱鎷涘緟涓嶅懆銆傝嫳鏂囪彍鍗曞湪娓稿鍖哄父瑙侊紝绀惧尯閲岀殑灏忓瀷椁愰澶氱敤鍥剧墖鑿滃崟鎴栫函涓枃鑿滃崟锛屽缓璁噯澶囧ソ缈昏瘧 App銆?
      }
    },
    districts: {
      en: "Shamian Island (historic concession area, English menus common); Tianhe (CBD international hotel dining); Beijing Road / Shangxiajiu pedestrian streets (snacks).",
      zh: "娌欓潰锛堝巻鍙茬鐣岋紝鑻辨枃鑿滃崟鏅強锛夛紱澶╂渤锛圕BD 鍥介檯閰掑簵锛夛紱鍖椾含璺?涓婁笅涔濇琛岃锛堝皬鍚冿級銆?,
      sourceId: "gz-foreigner-guide-pdf"
    },
    deliveryNote: {
      en: "Same Meituan/Eleme constraints. Hotel concierge can sometimes order on your behalf 鈥?ask at check-in.",
      zh: "缇庡洟/楗夸簡涔堝悓鏍峰彈闄愶紱閰掑簵绀煎鏈夋椂鍙唬鐐癸紝鍏ヤ綇鏃跺彲鐩存帴璇㈤棶銆?,
      sourceId: "gz-foreigner-guide-pdf"
    },
    pitfalls: [
      {
        en: "Tea-seat fee (cha-wei): Cantonese restaurants charge a small per-person fee for tea + service (typically 楼3鈥?0). It's normal, not a scam.",
        zh: "鑼朵綅璐癸細绮よ彍椁愬巺鎸変汉鏀惰尪浣嶈垂锛堜竴鑸?楼3-10锛夛紝鏄甯告敹璐癸紝涓嶆槸璇堥獥銆?,
        sourceId: "gz-foreigner-guide-pdf"
      },
      {
        en: "Avoid yum cha at the 10:00鈥?2:00 peak 鈥?wait can be 90+ minutes at famous places. Earlier (07:00鈥?9:00) is calmer and traditional.",
        zh: "10:00-12:00 鏄棭鑼堕珮宄帮紝鍚嶅簵绛変綅 90 鍒嗛挓浠ヤ笂銆?7:00-09:00 鏇村畨闈欍€佹洿浼犵粺銆?,
        sourceId: "gz-foreigner-guide-pdf"
      },
      {
        en: "Humid climate: easy to underestimate water needs. Dim sum tea + extra water is the local norm.",
        zh: "婀跨儹姘斿€欏鏄撳拷鐣ヨˉ姘达紱闄ょ偣蹇冭尪澶栧澶囦竴鐡舵按銆?,
        sourceId: "gz-foreigner-guide-pdf"
      }
    ]
  },
  {
    cityId: "shenzhen",
    cityEn: "Shenzhen",
    cityZh: "娣卞湷",
    cuisine: {
      en: "Hakka cuisine (salt-baked chicken, stuffed tofu) plus China-wide migrant cuisines 鈥?Sichuan, Hunan, Northeastern. Heavy Cantonese influence in older districts.",
      zh: "瀹㈠鑿滐紙鐩愮剹楦°€侀吙璞嗚厫锛? 鍏ㄥ浗杩佸緳鑿滅郴锛堝窛銆佹箻銆佷笢鍖楋級锛涜€佸煄鍖虹菠鑿滃奖鍝嶉噸銆?,
      sourceId: "sz-baoan-airport-plan",
      culturalNotes: {
        en: "Shenzhen has no native cuisine of its own 鈥?the city is 30 million people from every province cooking what they grew up with. The Hakka tradition that pre-dates the boom leans on salt and preservation: salt-baked chicken roasts whole inside coarse salt; stuffed tofu has minced pork tucked into bean curd squares; pounded fish-paste dishes are a daily staple in older Hakka neighbourhoods. The other 80% of the food scene is Sichuan, Hunan, Northeastern, Cantonese, and lately Yunnan 鈥?each clustered where its migrant wave settled. The newest layer is Hong Kong-style cha chaan teng (tea restaurants), recognisable by bilingual menus, stainless-steel milk-tea kettles, and meals that mix Cantonese, British, and Southeast Asian ideas (egg tarts, French toast, Hainan chicken rice). Spice tolerance varies wildly between restaurants 鈥?ask for 'mild' if you mean it.",
        zh: "娣卞湷鐨勯楗粨鏋勪互绉绘皯鍩庡競涓哄簳鑹诧紝鏉ヨ嚜鍏ㄥ浗鍚勭渷鐨勪汉甯︽潵鍚勮嚜楗浼犵粺銆傛棭浜庣粡娴庣壒鍖哄瓨鍦ㄧ殑瀹㈠浼犵粺鍋忛噸鐩愬懗鍜岃厡鍒讹細鐩愮剹楦′互绮楃洂鍖呰９鏁撮浮鐑樺埗锛涢吙璞嗚厫鎶婄尓鑲夌濉繘璞嗚厫鍧楋紱鑰佸瀹剁ぞ鍖洪噷浠嶈兘鍚冨埌鐜版墦鐨勯奔涓搁奔闈€傚叾浣欓楗被鍨嬩互宸濄€佹箻銆佷笢鍖椼€佺菠鑿滀负涓伙紝杩戝勾浜戝崡鑿滀篃杈冨父瑙侊紝澶ц嚧闅忓悇浠ｇЩ姘戣仛灞呭湴鍒嗗竷銆傛柊杩戠殑涓€灞傛槸娓紡鑼堕鍘咃紝鍙€氳繃鍙岃鑿滃崟銆佷笉閿堥挗濂惰尪澹讹紝浠ュ強绮ゅ紡 + 鑻卞紡 + 涓滃崡浜氭贩鎼彍鍝侊紙铔嬫尀銆佽タ澶氬＋銆佹捣鍗楅浮楗級璇嗗埆銆傚悇椁愬巺杈ｅ害宸紓杈冨ぇ锛屼笉鑳藉悆杈ｆ椂璇锋槑纭鏄?\"寰荆\"銆?
      }
    },
    districts: {
      en: "Futian CBD (international hotel dining, English menus); Sea World / Shekou (expat-oriented); Nanshan (tech-park lunch culture); OCT-LOFT (caf茅s and indie restaurants).",
      zh: "绂忕敯 CBD锛堝浗闄呴厭搴楅楗€佽嫳鏂囪彍鍗曪級锛涙捣涓婁笘鐣?铔囧彛锛堝绫嶇ぞ鍖洪楗級锛涘崡灞憋紙绉戞妧鍥崍椁愶級锛涘崕渚ㄥ煄 OCT-LOFT锛堝挅鍟′笌鐙珛椁愬巺锛夈€?,
      sourceId: "sz-baoan-airport-plan"
    },
    deliveryNote: {
      en: "Meituan/Eleme constraints same as other cities. Hong Kong cross-border tourists often use AlipayHK to order from Shenzhen restaurants directly.",
      zh: "缇庡洟/楗夸簡涔堥檺鍒跺悓鍏朵粬鍩庡競锛涢娓父瀹㈠父鐢?AlipayHK 鐩存帴鍦ㄦ繁鍦抽鍘呮壂鐮佺偣鍗曘€?,
      sourceId: "sz-tax-refund-alipayhk"
    },
    pitfalls: [
      {
        en: "Many small eateries lack English menus despite the city's modern image. Translation app + photo menu is essential.",
        zh: "灏界娣卞湷褰㈣薄鐜颁唬锛屼絾灏忓瀷椁愰鑻辨枃鑿滃崟浠嶅皯锛涚炕璇?App + 鍥剧墖鑿滃崟鏄父鐢ㄦ柟妗堛€?,
        sourceId: "sz-baoan-airport-plan"
      },
      {
        en: "Cross-border food haul: dairy, fresh meat, and fresh fruit can be restricted by HK customs on the way back. Check before buying gifts.",
        zh: "璺ㄥ甯﹂鍝侊細涔冲埗鍝併€佺敓椴滆倝绫汇€佹柊椴滄按鏋滃洖娓細琚捣鍏抽檺鍒讹紝璐墿鍓嶈鍏堟煡璇㈣鍒欍€?,
        sourceId: "sz-tax-refund-alipayhk"
      }
    ]
  }
];

import { pitfallSourceIds } from "./practical-other";

export function foodSourceIds(cityId?: CityId): string[] {
  const ids = new Set<string>();
  const cities = cityId ? cityFood.filter((c) => c.cityId === cityId) : cityFood;
  cities.forEach((c) => {
    ids.add(c.cuisine.sourceId);
    ids.add(c.districts.sourceId);
    ids.add(c.deliveryNote.sourceId);
    c.pitfalls.forEach((p) => ids.add(p.sourceId));
  });
  pitfallSourceIds("food", cityId).forEach((id) => ids.add(id));
  return [...ids];
}

export const allergyCardEn =
  "I am severely allergic to ____. I cannot eat or come into contact with any soup, sauce, oil, ingredients, or cookware that contain ____. Please do not include ____. If you are unsure, please tell me. Thank you.";

export const allergyCardZh =
  "鎴戝 ____ 涓ラ噸杩囨晱锛屼笉鑳藉悆锛屼篃涓嶈兘鎺ヨЕ鍚湁 ____ 鐨勬堡銆侀叡銆佹补銆侀厤鏂欐垨鍘ㄥ叿銆傝涓嶈鏀?____銆傚鏋滀笉纭畾锛岃鍛婅瘔鎴戙€傝阿璋€?;

 succeeded in 862ms:
import type { CityId } from "./transport";

export type AttractionTier = "must-visit" | "worth-it";

export type Attraction = {
  id: string;
  cityId: CityId;
  nameEn: string;
  nameZh: string;
  districtEn: string;
  districtZh: string;
  tier: AttractionTier;
  whyEn: string;
  whyZh: string;
  officialUrl: string;
  imageUrl: string;
  imageCredit: string;
};

export const cityAttractions: Attraction[] = [
  // BEIJING
  {
    id: "bj-forbidden-city",
    cityId: "beijing",
    nameEn: "Forbidden City / Palace Museum",
    nameZh: "鏁呭鍗氱墿闄?,
    districtEn: "Dongcheng",
    districtZh: "涓滃煄鍖?,
    tier: "must-visit",
    whyEn: "The largest intact imperial palace complex in the world: 180 acres, 980 buildings, 8,728 rooms. 24 emperors lived here across the Ming and Qing dynasties (1420鈥?912). 7-day advance booking is mandatory; 40,000-person daily cap sells out within minutes for peak weekends.",
    whyZh: "涓栫晫涓婃渶澶с€佹渶瀹屾暣鐨勫娈垮缓绛戠兢鈥斺€?80 鑻变憨銆?80 鏍嬪缓绛戙€?,728 闂存埧锛屾槑娓呬袱浠?24 浣嶇殗甯濆湪姝ゅ眳浣忥紙1420鈥?912锛夈€傚繀椤绘彁鍓?7 澶╅绾︼紝姣忔棩闄?4 涓囦汉锛屾椇瀛ｅ懆鏈父鍦ㄦ暟鍒嗛挓鍐呭敭缃勩€?,
    officialUrl: "https://intl.dpm.org.cn/visit.html?l=en",
    imageUrl: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Ling Tang on Unsplash"
  },
  {
    id: "bj-mutianyu",
    cityId: "beijing",
    nameEn: "Great Wall at Mutianyu",
    nameZh: "鎱曠敯宄暱鍩?,
    districtEn: "Huairou",
    districtZh: "鎬€鏌斿尯",
    tier: "must-visit",
    whyEn: "The Great Wall section most recommended by experienced foreign travellers: well-restored Ming masonry, 23 watchtowers across a 2.25 km open stretch, cable car or chair lift up plus a toboggan descent. The official English website accepts international cards directly. 1 million foreign visitors in 2025.",
    whyZh: "璁稿澶栫睄娓稿棣栭€夌殑闀垮煄娈碉細鏄庝唬淇籍瀹屾暣銆?3 搴ф晫鍙般€?.25 鍏噷寮€鏀炬锛岀紗杞?/ 绱㈤亾涓婂北锛屽彲閫夋嫨婊戦亾涓嬪北銆傚畼鏂硅嫳鏂囩綉绔欏彲鐩存帴浣跨敤澶栧崱鏀粯銆?025 骞村绫嶆父瀹?100 涓囥€?,
    officialUrl: "https://en.mutianyugreatwall.com",
    imageUrl: "https://images.unsplash.com/photo-1509624780899-f812439647e4?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Vincent Guth on Unsplash"
  },
  {
    id: "bj-summer-palace",
    cityId: "beijing",
    nameEn: "Summer Palace",
    nameZh: "棰愬拰鍥?,
    districtEn: "Haidian",
    districtZh: "娴锋穩鍖?,
    tier: "must-visit",
    whyEn: "The best-preserved imperial garden in China and a UNESCO World Heritage Site. 220-hectare Kunming Lake with Longevity Hill behind it, the 728 m painted Long Corridor, and a theatrical landscape designed for Qing imperial leisure. Audio guides in 19 languages.",
    whyZh: "涓浗淇濆瓨鏈€瀹屽ソ鐨勭殗瀹跺洯鏋楋紝UNESCO 涓栫晫閬椾骇銆?20 鍏》鏄嗘槑婀栬儗闈犱竾瀵垮北锛?28 绫冲僵缁橀暱寤婏紝娓呬唬鐨囧閬挎殤鍥灄銆?9 璇璇煶瀵艰銆?,
    officialUrl: "https://english.beijing.gov.cn/specials/parktours/guidevisitors/summerpalace/",
    imageUrl: "https://images.unsplash.com/photo-1619825479213-62e158b5a79d?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Nakaharu Line on Unsplash"
  },
  {
    id: "bj-temple-of-heaven",
    cityId: "beijing",
    nameEn: "Temple of Heaven",
    nameZh: "澶╁潧",
    districtEn: "Dongcheng",
    districtZh: "涓滃煄鍖?,
    tier: "must-visit",
    whyEn: "The largest extant sacrificial altar complex in China (built 1406鈥?420), used by every Ming and Qing emperor to pray for harvest. The triple-eaved circular blue-roofed Hall of Prayer for Good Harvests is one of the most architecturally perfect timber structures in Chinese history. The park grounds double as a morning tai chi venue.",
    whyZh: "涓浗鐜板瓨鏈€澶х殑绁寤虹瓚缇わ紙1406鈥?420 寤猴級锛屾槑娓呮瘡浣嶇殗甯濈璋蜂箣澶勩€備笁妾愬渾褰㈣摑椤剁殑绁堝勾娈挎槸涓浗鏈ㄦ瀯寤虹瓚鐨勫穮宄颁箣涓€銆傛竻鏅ㄥ洯鍖烘槸甯傛皯缁冨お鏋佺殑鍦烘墍銆?,
    officialUrl: "https://english.beijing.gov.cn/specials/parktours/guidevisitors/templeofheaven/",
    imageUrl: "https://images.unsplash.com/photo-1569165755139-296fac054979?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "ZQ Lee on Unsplash"
  },
  {
    id: "bj-lama-temple",
    cityId: "beijing",
    nameEn: "Lama Temple (Yonghe Gong)",
    nameZh: "闆嶅拰瀹?,
    districtEn: "Dongcheng",
    districtZh: "涓滃煄鍖?,
    tier: "must-visit",
    whyEn: "The most important Tibetan Buddhist temple in Beijing and one of the most significant Gelug monasteries outside Tibet. Originally an imperial princely mansion (1694), converted to a lamasery in 1744. The Wanfu Pavilion houses an 18 m Maitreya Buddha carved from a single sandalwood tree 鈥?the tallest sandalwood statue in the world.",
    whyZh: "鍖椾含鏈€閲嶈鐨勮棌浼犱經鏁欏闄紝涔熸槸瑗胯棌浠ュ鏈€閲嶈鐨勬牸椴佹淳瀵洪櫌涔嬩竴銆傚師涓虹殗瀛愬簻閭革紙1694锛夛紝1744 骞存敼涓哄枃鍢涘簷銆備竾绂忛榿鍐?18 绫抽珮鐨勫讥鍕掍經鐢卞崟鏍圭櫧妾€鏈ㄩ洉鎴愶紝鏄笘鐣屾渶楂樼殑妾€棣欐湪浣涘儚銆?,
    officialUrl: "https://english.beijing.gov.cn/specials/ticketing/",
    imageUrl: "https://images.unsplash.com/photo-1590301729964-23833732ee04?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Peter Zhou on Unsplash"
  },
  {
    id: "bj-tiananmen",
    cityId: "beijing",
    nameEn: "Tiananmen Square",
    nameZh: "澶╁畨闂ㄥ箍鍦?,
    districtEn: "Dongcheng",
    districtZh: "涓滃煄鍖?,
    tier: "must-visit",
    whyEn: "The world's third-largest public square (440,000 sq m) and the symbolic centre of the People's Republic. Daily flag-raising ceremony at sunrise, flag-lowering at sunset. Free entry but mandatory advance reservation (1鈥? days ahead) 鈥?walk-up visitors are turned back at the security checkpoint.",
    whyZh: "涓栫晫绗笁澶у箍鍦猴紙44 涓囧钩鏂圭背锛夛紝涓崕浜烘皯鍏卞拰鍥借薄寰佹€т腑蹇冦€傛瘡鏃ユ棩鍑哄崌鏃椼€佹棩钀介檷鏃椼€傚厤璐瑰叆鍦轰絾蹇呴』鎻愬墠 1鈥? 澶╃嚎涓婇绾︼紝鏈绾︿細琚畨妫€鎷︿笅銆?,
    officialUrl: "https://english.beijing.gov.cn/travellinginbeijing/",
    imageUrl: "https://images.unsplash.com/photo-1604844252839-f9c364adacdd?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Zixi Zhou on Unsplash"
  },

  // SHANGHAI
  {
    id: "sh-bund",
    cityId: "shanghai",
    nameEn: "The Bund",
    nameZh: "澶栨哗",
    districtEn: "Huangpu",
    districtZh: "榛勬郸鍖?,
    tier: "must-visit",
    whyEn: "Shanghai's essential postcard view: a 1.5 km Huangpu River promenade where early-20th-century banks and trading houses face the Pudong skyline. The simplest place to read both Shanghai's treaty-port past and its vertical-finance present in one frame. Sunrise for low crowds; evening for the skyline lights.",
    whyZh: "涓婃捣鐨勪唬琛ㄦ櫙瑙傦細1.5 鍏噷榛勬郸姹熷哺姝ラ亾锛?0 涓栫邯鍒濋摱琛?/ 鍟嗚寤虹瓚缇ゆ瀵规郸涓滃ぉ闄呯嚎銆傝繖閲屾槸鐞嗚В涓婃捣绉熺晫鍘嗗彶涓庣幇浠ｉ噾铻嶆櫙瑙傜殑鐩磋鍦扮偣銆傛棩鍑烘椂浜烘祦杈冨皯锛屽鏅氶€傚悎瑙傝祻鐏厜绉€銆?,
    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231205/584672cc6d044eabb5f7f6fc9049a19f.html",
    imageUrl: "https://images.unsplash.com/photo-1506158669146-619067262a00?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Hanny Naibaho on Unsplash"
  },
  {
    id: "sh-yu-garden",
    cityId: "shanghai",
    nameEn: "Yu Garden",
    nameZh: "璞洯",
    districtEn: "Huangpu",
    districtZh: "榛勬郸鍖?,
    tier: "must-visit",
    whyEn: "Shanghai's best central classical Chinese garden: Ming-dynasty rockeries, pavilions, ponds, zigzag bridges, the City God Temple area, and the surrounding old-city bazaar streets all compressed into a walkable historic quarter. The clearest contrast to the Bund's European riverfront.",
    whyZh: "涓婃捣甯備腑蹇冧唬琛ㄦ€х殑涓紡鍥灄锛氭槑浠ｅ亣灞便€佷涵鍙般€佹睜濉樸€佷節鏇叉ˉ锛屽姞涓婂煄闅嶅簷鍖轰笌鑰佸煄鍘㈠競闆嗐€傚彲涓庡婊╂寮忔睙宀稿舰鎴愰矞鏄庡鐓с€?,
    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231205/dc76893b94c248d195eaf7f4d44c6597.html",
    imageUrl: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Li Yang on Unsplash"
  },
  {
    id: "sh-shanghai-tower",
    cityId: "shanghai",
    nameEn: "Shanghai Tower",
    nameZh: "涓婃捣涓績澶у帵",
    districtEn: "Pudong",
    districtZh: "娴︿笢鏂板尯",
    tier: "must-visit",
    whyEn: "China's highest observation deck and the clearest \"future Shanghai\" attraction. The 118th-floor Top of Shanghai Observatory gives a 360掳 view over Lujiazui, the Bund, Suzhou Creek, and the city's full scale. Heavily affected by haze, rain, and low cloud 鈥?book close to the visit date.",
    whyZh: "涓浗鏈€楂樿鏅彴锛屼篃鏄洿瑙傛劅鍙梊"鏈潵涓婃捣\"鐨勬櫙鐐广€?18 灞?\"涓婃捣涔嬪穮\" 360掳 淇灠闄嗗鍢淬€佸婊┿€佽嫃宸炴渤鍜屽叏鍩庤妯°€傚彈闆鹃溇銆侀洦銆佷綆浜戝奖鍝嶆槑鏄撅紝寤鸿涓磋繎鏃ユ湡鍐嶈绁ㄣ€?,
    officialUrl: "https://www.shanghaitower.com/",
    imageUrl: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Denys Nevozhai on Unsplash"
  },
  {
    id: "sh-lujiazui",
    cityId: "shanghai",
    nameEn: "Lujiazui Skyline & Oriental Pearl Tower",
    nameZh: "闄嗗鍢?/ 涓滄柟鏄庣彔",
    districtEn: "Pudong",
    districtZh: "娴︿笢鏂板尯",
    tier: "must-visit",
    whyEn: "The compact skyline cluster opposite the Bund: Oriental Pearl Tower, Shanghai Tower, World Financial Center, Jin Mao, IFC, riverside promenades. Iconic photos, sky decks, malls, and easy riverfront contrast with the Bund. Outdoor district free; sky-deck tickets via official ticketing.",
    whyZh: "澶栨哗瀵归潰鐨勭揣鍑戝ぉ闄呯嚎锛氫笢鏂规槑鐝犮€佷笂娴蜂腑蹇冦€佺幆鐞冮噾铻嶄腑蹇冦€侀噾鑼傘€両FC銆佹花姹熸极閬撱€傞€傚悎鏍囧織鎬у悎褰便€佺櫥椤惰鏅拰鍟嗗満浼戞啯锛屼篃鍙笌澶栨哗褰㈡垚鐩存帴瀵圭収銆傚澶栧尯鍏嶈垂锛岀櫥椤堕€氳繃瀹樻柟绁ㄥ姟銆?,
    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231205/19a5f5184eca45728fd57a4d4c8efc61.html",
    imageUrl: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Edward He on Unsplash"
  },
  {
    id: "sh-wukang",
    cityId: "shanghai",
    nameEn: "Wukang Road & Wukang Mansion",
    nameZh: "姝﹀悍璺?/ 姝﹀悍澶фゼ",
    districtEn: "Xuhui",
    districtZh: "寰愭眹鍖?,
    tier: "must-visit",
    whyEn: "The most visitor-friendly slice of the former French Concession: plane-tree streets, garden villas, writer residences, cafes, Ferguson Lane, and the flatiron Wukang Mansion photo spot. Better as a slow walk than a single attraction. Police barriers control the crowds at the photo intersection on weekends.",
    whyZh: "鍘熸硶绉熺晫鏈€閫傚悎娓稿鐨勪竴娈碉細姊ф琛楅亾銆佽姳鍥磱鎴裤€佸悕浜烘晠灞呫€佸挅鍟￠銆佽垂灏旀牴宸枫€佷笁瑙掑舰鐨勬搴峰ぇ妤煎悎褰辩偣銆傛洿閫傚悎浠庡姝ヨ娓歌锛屼笉瀹滃彧涓烘媿鐓ф墦鍗°€傚懆鏈氦璀︿細鍦ㄦ媿鐓ц矾鍙ｅ垎娴併€?,
    officialUrl: "https://english.shanghai.gov.cn/en-ScenicSpots/20231218/596192f5f59048bbbc3fa54d92304e93.html",
    imageUrl: "https://images.unsplash.com/photo-1574504500022-de9a6309a501?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Katherine Gu on Unsplash"
  },
  {
    id: "sh-museum",
    cityId: "shanghai",
    nameEn: "Shanghai Museum (People's Square)",
    nameZh: "涓婃捣鍗氱墿棣?浜烘皯骞垮満棣?,
    districtEn: "Huangpu",
    districtZh: "榛勬郸鍖?,
    tier: "must-visit",
    whyEn: "The strongest single stop for ancient Chinese art in central Shanghai: bronzes, ceramics, jade, calligraphy, painting, seals, furniture. Since 2025-09 individual visitors no longer need reservations for the People's Square site during normal periods 鈥?entry with passport. Closed Mondays.",
    whyZh: "甯備腑蹇冮泦涓睍绀轰腑鍥藉彜浠ｈ壓鏈殑閲嶈鍦洪锛氶潚閾溿€侀櫠鐡枫€佺帀鍣ㄣ€佷功娉曘€佺粯鐢汇€佸嵃绔犮€佸鍏枫€?025-09 璧蜂汉姘戝箍鍦洪鏅€氭暎瀹笉闇€棰勭害锛屽嚟鎶ょ収鍏ラ銆傚懆涓€闂銆?,
    officialUrl: "https://english.shanghai.gov.cn/en-MuseumsGalleries/20231218/01fdd3f62d0c4877bc289ec0b1de6afa.html",
    imageUrl: "https://images.unsplash.com/photo-1508742066636-3b9fb738ee0e?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "zhang kaiyv on Unsplash"
  },

  // GUANGZHOU
  {
    id: "gz-canton-tower",
    cityId: "guangzhou",
    nameEn: "Canton Tower",
    nameZh: "骞垮窞濉?,
    districtEn: "Haizhu",
    districtZh: "娴风彔鍖?,
    tier: "must-visit",
    whyEn: "At 600 m, the tallest TV/observation tower in China and third tallest in the world. The twisted-waist design is one of Guangzhou's most recognisable silhouettes. Indoor and outdoor observation decks; the glass sky walk and bubble tram revolving outside the structure offer extra thrills. Best at dusk for the daylight-to-LED transition.",
    whyZh: "600 绫筹紝涓浗鏈€楂樼數瑙嗗锛屼笘鐣岀涓夈€俓"灏忚洰鑵癨" 鎵浆閫犲瀷鏄箍宸炵殑鏍囧織鎬ц疆寤撱€傚鍐呭瑙傛櫙鍙般€佹埛澶栫幓鐠冩爤閬撳拰澶栧湀 \"鎽╁ぉ杞甛" 澶┖鑸卞悇鍏风壒鑹层€傞粍鏄忔渶閫傚悎瑙傝祻浠庣櫧澶╁埌澶滅伅鐨勮繃娓°€?,
    officialUrl: "https://www.cantontower.com/en/",
    imageUrl: "https://images.unsplash.com/photo-1563090162-6b4c2a20d658?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "Lycheeart on Unsplash"
  },
  {
    id: "gz-shamian",
    cityId: "guangzhou",
    nameEn: "Shamian Island",
    nameZh: "娌欓潰宀?,
    districtEn: "Liwan",
    districtZh: "鑽旀咕鍖?,
    tier: "must-visit",
    whyEn: "A 0.3 km虏 sand-bar in the Pearl River that served as the British and French concession from 1859 to 1943. Over 150 European-style buildings 鈥?consulates, banks, churches, trading-house villas 鈥?shaded by 200-year-old banyan trees. No cars, no admission, no hawkers inside. Often described as the calmest 90 minutes in Guangzhou.",
    whyZh: "鐝犳睙涓?0.3 骞虫柟鍏噷鐨勬矙娲诧紝1859鈥?943 鏄嫳娉曠鐣屻€?50+ 鏍嬫寮忓缓绛戯紙棰嗕簨棣嗐€侀摱琛屻€佹暀鍫傘€佹磱琛屽埆澧咃級鎺╂槧鍦?200 宀佹鏍戜笅銆傛棤杞︺€佹棤闂ㄧエ锛屽皯鏈夊彨鍗栥€傚父琚舰瀹逛负骞垮窞鏈€瀹夐潤鐨?90 鍒嗛挓銆?,
    officialUrl: "https://www.gz.gov.cn/guangzhouinternational/",
    imageUrl: "https://images.unsplash.com/photo-1636259584602-5a3c9c0d05ff?w=1200&q=80&auto=format&fit=crop",
    imageCredit: "choi wingkin on Unsplash"

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"cityIntro|intro|blurb|subtitleEn|descriptionEn|summaryEn|hero|about|cityEn\" .\\v2\\src -g \"*.ts\" -g \"*.tsx\"" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path .\\v2\\src\\data\\itineraries.ts" in c:\Users\h\Documents\New project 2
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path .\\v2\\src\\data\\city-seasons.ts" in c:\Users\h\Documents\New project 2
 succeeded in 634ms:
.\v2\src\data\food.ts:5:  cityEn: string;
.\v2\src\data\food.ts:21:    cityEn: "Beijing",
.\v2\src\data\food.ts:57:    cityEn: "Shanghai",
.\v2\src\data\food.ts:64:        en: "Shanghainese cooking leans sweet — soy reduces with rock sugar until it glazes pork belly mahogany red; sweet-soy ribs are a holiday staple; drunken chicken is poached cold and steeped in shaoxing wine for hours. Xiaolongbao is the everyday lunch icon — eighteen pleats, all about the broth inside. The technique: bite a tiny hole at the top, sip the broth out, then eat the wrapper and filling. Burning your tongue on the first try is a rite of passage. Compared with Beijing, Shanghainese tabletop manners feel gentler — smaller plates, more sharing, less ceremony. International dining (French, Japanese, Italian) has real depth here that you won't find as easily elsewhere in mainland China.",
.\v2\src\data\food.ts:93:    cityEn: "Guangzhou",
.\v2\src\data\food.ts:134:    cityEn: "Shenzhen",
.\v2\src\data\itineraries.ts:16:  subtitleEn: string;
.\v2\src\data\itineraries.ts:24:    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
.\v2\src\data\itineraries.ts:94:    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
.\v2\src\data\itineraries.ts:164:    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
.\v2\src\data\itineraries.ts:234:    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
.\v2\src\data\payments.ts:110:  cityEn: string;
.\v2\src\data\payments.ts:118:    cityEn: "Beijing",
.\v2\src\data\payments.ts:135:    cityEn: "Shanghai",
.\v2\src\data\payments.ts:157:    cityEn: "Guangzhou",
.\v2\src\data\payments.ts:174:    cityEn: "Shenzhen",
.\v2\src\data\phase2-preview.ts:132:  cityEn: string;
.\v2\src\data\phase2-preview.ts:146:    cityEn: "Guangzhou",
.\v2\src\data\phase2-preview.ts:158:    cityEn: "Shanghai",
.\v2\src\components\city\CuisineDrawer.tsx:66:              {isZh ? city.cityZh : city.cityEn}
.\v2\src\data\practical-payments.ts:175:    bodyEn: "If you don't open Alipay for about three months after you fly home, your account locks itself. To reactivate, you'll need your passport, a selfie video, and a one-line note explaining the flagged transaction. Most repeat visitors hit this on Day 1 of their next trip — clear it before you fly back.",
.\v2\src\data\practical-other.ts:314:    bodyEn: "Hospitals will stabilise you in the ER, then ask for a CNY 5,000–20,000 deposit before any further treatment. Ambulances charge upfront too — about CNY 7 per km plus CNY 80 per hour of waiting. Most travel insurers reimburse you later, so check your insurer's direct-billing hospital list before you fly.",
.\v2\src\data\transport.ts:23:  cityEn: string;
.\v2\src\data\transport.ts:32:    summaryEn: string;
.\v2\src\data\transport.ts:70:    cityEn: "Beijing",
.\v2\src\data\transport.ts:139:      summaryEn: "All 29 lines / 523 stations: Visa, Mastercard, UnionPay, JCB, Amex tap-to-ride at every gate (since 2025-06-15). World's first metro to support all 5 networks.",
.\v2\src\data\transport.ts:163:    cityEn: "Shanghai",
.\v2\src\data\transport.ts:222:      summaryEn: "All 21 lines / 517 stations / 896 km: 5 networks + e-CNY tap-to-ride (since 2025-06-28). Card must support ODA. UnionPay channel takes priority on dual-brand cards.",
.\v2\src\data\transport.ts:251:    cityEn: "Guangzhou",
.\v2\src\data\transport.ts:293:      summaryEn: "All Guangzhou Metro lines: Visa, Mastercard, UnionPay, JCB, Amex tap-to-ride (since 2025-10-12). AlipayHK QR code also works since 2024-03-04.",
.\v2\src\data\transport.ts:317:    cityEn: "Shenzhen",
.\v2\src\data\transport.ts:359:      summaryEn: "Foreign-card POS at 391 service centres / 440 devices: Visa, Mastercard, Discover, Amex, Diners Club, JCB. Gate-level tap doesn't work at every turnstile yet — pay at the service centre POS or use cash.",
.\v2\src\components\city\CityIntro.tsx:61:  const blurb = CITY_BLURB[cityId];
.\v2\src\components\city\CityIntro.tsx:82:    <section id="intro" className="flex flex-col gap-6 scroll-mt-24">
.\v2\src\components\city\CityIntro.tsx:85:          {isZh ? blurb.zh : blurb.en}
.\v2\src\components\city\CityNav.tsx:8:  { id: "intro", en: "Attractions", zh: "景区" },
.\v2\src\components\city\CityNav.tsx:21:  const [active, setActive] = useState<string>("intro");
.\v2\src\pages\PlanPage.tsx:96:              {isZh ? activeItinerary.subtitleZh : activeItinerary.subtitleEn}
.\v2\src\pages\PlanPage.tsx:155:            to={`/city/${cityId}#intro`}
.\v2\src\components\pillar\PaymentsChecklist.tsx:75:              {!cityScoped && <strong className="text-sm">{isZh ? city.cityZh : city.cityEn}</strong>}
.\v2\src\pages\SharePage.tsx:48:            {isZh ? "你想分享哪个城市？" : "Which city are you writing about?"}
.\v2\src\pages\SharePage.tsx:121:                <span className="text-muted">{isZh ? s.cityZh : s.cityEn}</span>
.\v2\src\components\pillar\TransportGuide.tsx:91:          <p className="text-sm leading-relaxed">{isZh ? active.metro.summaryZh : active.metro.summaryEn}</p>

 succeeded in 679ms:
import type { CityId } from "./transport";

export type ItineraryDay = {
  dayNumber: 1 | 2 | 3;
  themeEn: string;
  themeZh: string;
  morning: { en: string; zh: string; attractionId?: string };
  afternoon: { en: string; zh: string; attractionId?: string };
  evening: { en: string; zh: string; attractionId?: string };
  travelTipEn: string;
  travelTipZh: string;
};

export type CityItinerary = {
  cityId: CityId;
  subtitleEn: string;
  subtitleZh: string;
  days: ItineraryDay[];
};

export const cityItineraries: CityItinerary[] = [
  {
    cityId: "beijing",
    subtitleEn: "Imperial Beijing, the Great Wall, and old-city evening walks without backtracking across town.",
    subtitleZh: "鎶婄殗鍩庝腑杞寸嚎銆侀暱鍩庡拰鑰佸煄澶滄父鎸変氦閫氶『搴忔帓濂斤紝鍑忓皯璺ㄥ煄鎶樿繑銆?,
    days: [
      {
        dayNumber: 1,
        themeEn: "Imperial axis first",
        themeZh: "鍏堢湅鐨囧煄涓酱绾?,
        morning: {
          en: "Enter the Forbidden City early and move south through the main halls before tour groups peak.",
          zh: "涓€鏃╄繘鍏ユ晠瀹紝鍏堣蛋涓酱绾夸富娈匡紝閬垮紑涓婂崍鍚庢鐨勫ぇ瀹㈡祦銆?,
          attractionId: "bj-forbidden-city"
        },
        afternoon: {
          en: "Continue to Tiananmen Square after lunch, leaving time for security checks and photo stops.",
          zh: "鍗堝悗杞埌澶╁畨闂ㄥ箍鍦猴紝棰勭暀瀹夋鍜屾媿鐓ф椂闂淬€?,
          attractionId: "bj-tiananmen"
        },
        evening: {
          en: "Walk or ride to Wangfujing for dinner, bookstores, malls, and an easy first-night return.",
          zh: "鏅氫笂鍘荤帇搴滀簳姝ヨ琛楀悆楗€侀€涗功搴楀拰鍟嗗満锛岀涓€鏅氳繑绋嬫渶鐪佸績銆?
        },
        travelTipEn: "Forbidden City and Tiananmen both require advance real-name booking; carry the same passport used online.",
        travelTipZh: "鏁呭鍜屽ぉ瀹夐棬閮借瀹炲悕棰勭害锛涚幇鍦哄甫涓婁笌棰勭害涓€鑷寸殑鎶ょ収銆?
      },
      {
        dayNumber: 2,
        themeEn: "Temples, gardens, and hutongs",
        themeZh: "瀵哄簷銆佸洯鏋椾笌鑳″悓",
        morning: {
          en: "Start at Temple of Heaven while locals are exercising in the park, then visit the Hall of Prayer for Good Harvests.",
          zh: "鏃╂櫒鍘诲ぉ鍧涚湅鏈湴鏅ㄧ粌锛屽啀杩涘叆绁堝勾娈垮尯鍩熷弬瑙傘€?,
          attractionId: "bj-temple-of-heaven"
        },
        afternoon: {
          en: "Take the metro north for Lama Temple, then wander nearby hutongs and cafes around Guozijian Street.",
          zh: "鍗堝悗鍧愬湴閾佸埌闆嶅拰瀹紝鍐嶉『璺€涘浗瀛愮洃琛椾竴甯﹁儭鍚屽拰鍜栧暋棣嗐€?,
          attractionId: "bj-lama-temple"
        },
        evening: {
          en: "Have dinner around Houhai or Gulou, where lakeside bars and old alleys keep the evening compact.",
          zh: "鏅氫笂鍦ㄥ悗娴锋垨榧撴ゼ涓€甯︾敤椁愶紝婀栬竟閰掑惂鍜岃€佸煄鑳″悓閮藉緢闆嗕腑銆?
        },
        travelTipEn: "Use the metro today; taxis can crawl around Dongcheng during evening rush hour.",
        travelTipZh: "杩欎竴澶╀紭鍏堝潗鍦伴搧锛涗笢鍩庢櫄楂樺嘲鎵撹溅寰堝鏄撳牭鍦ㄨ矾涓娿€?
      },
      {
        dayNumber: 3,
        themeEn: "Great Wall day with a soft landing",
        themeZh: "闀垮煄涓€鏃ヤ笌杞绘澗鏀跺熬",
        morning: {
          en: "Leave early for Mutianyu Great Wall, taking the cable car or chairlift up to save energy.",
          zh: "娓呮櫒鍑哄彂鍘绘厱鐢板唱闀垮煄锛屼笂灞卞彲閫夌紗杞︽垨绱㈤亾锛屼繚鐣欎綋鍔涖€?,
          attractionId: "bj-mutianyu"
        },
        afternoon: {
          en: "Return to the city and, if energy allows, detour to Summer Palace for lake views before sunset.",
          zh: "鍥炲煄鍚庝綋鍔涘厑璁稿彲椤鸿矾鍘婚鍜屽洯锛岀湅鏄嗘槑婀栧拰鍌嶆櫄鍏夌嚎銆?,
          attractionId: "bj-summer-palace"
        },
        evening: {
          en: "Keep dinner close to your hotel; Great Wall traffic makes precise evening reservations risky.",
          zh: "鏅氶灏介噺瀹夋帓鍦ㄩ厭搴楅檮杩戯紱闀垮煄鍥炵▼璺喌涓嶇ǔ瀹氾紝涓嶉€傚悎鍗＄偣棰勮銆?
        },
        travelTipEn: "Book a direct bus, tour, or private car for Mutianyu; public transfers are doable but slow for first-time visitors.",
        travelTipZh: "鎱曠敯宄缓璁鐩磋揪宸村＋銆佽窡鍥㈡垨鍖呰溅锛涢娆℃潵浜敤鍏叡浜ら€氫細姣旇緝鑰楁椂銆?
      }
    ]
  },
  {
    cityId: "shanghai",
    subtitleEn: "Classic riverfront Shanghai, old-city gardens, French Concession streets, and Pudong skyline views.",
    subtitleZh: "瑕嗙洊澶栨哗姹熸櫙銆佽€佸煄鍥灄銆佹硶绉熺晫琛楀尯鍜屾郸涓滃ぉ闄呯嚎銆?,
    days: [
      {
        dayNumber: 1,
        themeEn: "Old Shanghai to neon Shanghai",
        themeZh: "浠庤€佷笂娴峰埌闇撹櫣涓婃捣",
        morning: {
          en: "Walk the Bund early for lower crowds and the cleanest view across to Pudong.",
          zh: "娓呮櫒鍏堣蛋澶栨哗锛屼汉灏戜篃鏇村鏄撶湅娓呮郸涓滃ぉ闄呯嚎銆?,
          attractionId: "sh-bund"
        },
        afternoon: {
          en: "Move to Yu Garden and the City God Temple bazaar for classical gardens, snacks, and old-city lanes.",
          zh: "鍗堝悗鍘昏鲍鍥拰鍩庨殟搴欏晢鍦堬紝鐪嬪洯鏋椼€佸悆灏忓悆銆侀€涜€佸煄琛楀贩銆?,
          attractionId: "sh-yu-garden"
        },
        evening: {
          en: "Finish on Nanjing Road, walking west from the river toward People's Square under the lights.",
          zh: "鏅氫笂浠庢睙杈规部鍗椾含璺線浜烘皯骞垮満鏂瑰悜璧帮紝鐪嬪鏅拰鍟嗚鐏厜銆?
        },
        travelTipEn: "The Bund and Yu Garden are close by metro, but crowds surge after lunch; keep your main photos for morning or dusk.",
        travelTipZh: "澶栨哗鍜岃鲍鍥湴閾佽鎺ユ柟渚匡紝浣嗗崍鍚庝汉娴佹槑鏄惧鍔狅紱涓昏鐓х墖鏀惧湪娓呮櫒鎴栭粍鏄忔媿銆?
      },
      {
        dayNumber: 2,
        themeEn: "Museums and plane-tree streets",
        themeZh: "鍗氱墿棣嗕笌姊ф琛楀尯",
        morning: {
          en: "Visit Shanghai Museum at People's Square for bronzes, ceramics, jade, calligraphy, and painting.",
          zh: "涓婂崍鍘讳汉姘戝箍鍦虹殑涓婃捣鍗氱墿棣嗭紝鐪嬮潚閾溿€侀櫠鐡枫€佺帀鍣ㄣ€佷功鐢汇€?,
          attractionId: "sh-museum"
        },
        afternoon: {
          en: "Spend the afternoon around Wukang Road, Wukang Mansion, Ferguson Lane, and nearby former French Concession streets.",
          zh: "涓嬪崍鎱㈣蛋姝﹀悍璺€佹搴峰ぇ妤笺€?Ferguson Lane 鍜屽懆杈规硶绉熺晫琛楀尯銆?,
          attractionId: "sh-wukang"
        },
        evening: {
          en: "Have dinner in Xintiandi or Hengshan Road, choosing a relaxed neighborhood rather than another riverfront rush.",
          zh: "鏅氶瀹夋帓鍦ㄦ柊澶╁湴鎴栬　灞辫矾涓€甯︼紝鎹竴涓洿浠庡鐨勮鍖鸿妭濂忋€?
        },
        travelTipEn: "Wukang Mansion photo corners are managed on busy weekends; be ready to move on quickly after taking photos.",
        travelTipZh: "姝﹀悍澶фゼ鍛ㄦ湯鎷嶇収璺彛浼氬垎娴佺鐞嗭紝鎷嶅畬鐓у敖蹇寮€璺彛銆?
      },
      {
        dayNumber: 3,
        themeEn: "Pudong skyline and river contrast",
        themeZh: "娴︿笢澶╅檯绾夸笌姹熷哺瀵圭収",
        morning: {
          en: "Cross to Lujiazui for the riverside promenade, skyline photos, malls, and elevated walkways.",
          zh: "涓婂崍鍒伴檰瀹跺槾锛岃蛋婊ㄦ睙姝ラ亾銆佹媿澶╅檯绾裤€侀€涘晢鍦哄拰绌轰腑杩炲粖銆?,
          attractionId: "sh-lujiazui"
        },
        afternoon: {
          en: "Go up Shanghai Tower only if visibility is good; otherwise keep it flexible with Pudong indoor options.",
          zh: "澶╂皵閫氶€忓啀涓婁笂娴蜂腑蹇冿紱鑻ヤ綆浜戞垨闆ㄥぉ锛屽氨鏀规垚娴︿笢瀹ゅ唴瀹夋帓銆?,
          attractionId: "sh-shanghai-tower"
        },
        evening: {
          en: "Return to the Bund or take a Huangpu River cruise to compare both skylines at night.",
          zh: "鏅氫笂鍥炲埌澶栨哗锛屾垨鍧愰粍娴︽睙娓歌埞锛屽鐓т袱宀稿鏅€?
        },
        travelTipEn: "Do not prepay a tower slot too early; haze and low cloud can erase the view.",
        travelTipZh: "涓婃捣涓績瑙傛櫙鍙板埆澶棭閿佸畾鏃舵锛涢浘闇俱€侀洦鍜屼綆浜戜細褰卞搷瑙嗛噹銆?
      }
    ]
  },
  {
    cityId: "guangzhou",
    subtitleEn: "Lingnan architecture, Cantonese food culture, Pearl River nights, and one green mountain break.",
    subtitleZh: "鎶婂箔鍗楀缓绛戙€佸箍搴滈ギ椋熴€佺彔姹熷鏅拰涓€娈靛煄甯傚北鏅覆璧锋潵銆?,
    days: [
      {
        dayNumber: 1,
        themeEn: "Lingnan craft and first skyline view",
        themeZh: "宀崡宸ヨ壓涓庣涓€鐪煎ぉ闄呯嚎",
        morning: {
          en: "Begin at Chen Clan Ancestral Hall for wood, brick, stone, and ceramic decoration at close range.",
          zh: "涓婂崍鍏堝幓闄堝绁狅紝杩戣窛绂荤湅鏈ㄩ洉銆佺爾闆曘€佺煶闆曞拰褰╃摲瑁呴グ銆?,
          attractionId: "gz-chen-clan"
        },
        afternoon: {
          en: "Head to Shamian Island for shaded colonial streets, riverside walks, and a slower coffee stop.",
          zh: "鍗堝悗鍘绘矙闈㈠矝锛岃蛋鏍戣崼涓嬬殑娆у紡寤虹瓚琛楀尯鍜屾睙杈规閬撱€?,
          attractionId: "gz-shamian"
        },
        evening: {
          en: "Finish at Canton Tower and the Haixinsha riverfront as the lights turn on.",
          zh: "鍌嶆櫄鍒板箍宸炲鍜屾捣蹇冩矙涓€甯︼紝绛夊煄甯傜伅鍏変寒璧枫€?,
          attractionId: "gz-canton-tower"
        },
        travelTipEn: "Canton Tower is strongest at dusk; book the observation deck only when the weather is clear.",
        travelTipZh: "骞垮窞濉旀渶閫傚悎榛勬槒鍒板闂达紱瑙傛櫙绁ㄥ缓璁湅娓呭ぉ姘斿悗鍐嶈銆?
      },
      {
        dayNumber: 2,
        themeEn: "Old city breakfast and civic landmarks",
        themeZh: "鑰佸煄鏃╄尪涓庡煄甯傚湴鏍?,
        morning: {
          en: "Start with yum cha in Liwan, then walk to Yuexiu Park and the Five Rams Statue.",
          zh: "鍏堝湪鑽旀咕鍠濇棭鑼讹紝鍐嶅幓瓒婄鍏洯鍜屼簲缇婇洉鍍忋€?,
          attractionId: "gz-yuexiu-park"
        },
        afternoon: {
          en: "Ride to Baiyun Mountain for an easy cable-car ascent and broad city views if the air is clear.",
          zh: "鍗堝悗鍘荤櫧浜戝北锛屽ぉ姘斿ソ鏃跺潗缂嗚溅涓婂北鐪嬪箍宸炲叏鏅€?,
          attractionId: "gz-baiyun-mountain"
        },
        evening: {
          en: "Return to Beijing Road or Xihua Road for casual Cantonese dinner and dessert shops.",
          zh: "鏅氫笂鍥炲寳浜矾鎴栬タ鍗庤矾涓€甯︼紝瀹夋帓绮よ彍灏忓簵鍜岀硸姘淬€?
        },
        travelTipEn: "Cantonese breakfast starts early; popular teahouses can have long waits after 9 AM.",
        travelTipZh: "骞垮紡鏃╄尪瓒婃棭瓒婂ソ锛涚儹闂ㄨ尪妤?9 鐐瑰悗鎺掗槦浼氭槑鏄惧彉闀裤€?
      },
      {
        dayNumber: 3,
        themeEn: "Markets, museums, and Pearl River night",
        themeZh: "甯傚満銆佸崥鐗╅涓庣彔姹熷鑹?,
        morning: {
          en: "Explore Qingping Market and Liwan Lake surroundings for a local old-city morning.",
          zh: "涓婂崍閫涙竻骞冲競鍦哄拰鑽旀咕婀栧懆杈癸紝鎰熷彈鑰佸煄鏃ュ父銆?
        },
        afternoon: {
          en: "Choose Guangdong Museum or Zhujiang New Town for an indoor break before the evening riverfront.",
          zh: "鍗堝悗閫夊箍涓滅渷鍗氱墿棣嗘垨鐝犳睙鏂板煄瀹ゅ唴绌洪棿锛岄伩寮€鏈€鐑椂娈点€?
        },
        evening: {
          en: "Take a Pearl River night cruise, ideally timed after Canton Tower and bridge lights are fully on.",
          zh: "鏅氫笂鍧愮彔姹熷娓革紝灏介噺閫夊箍宸炲鍜屾ˉ姊佺伅鍏夊叏寮€鍚庣殑鐝銆?,
          attractionId: "gz-pearl-river"
        },
        travelTipEn: "Summer afternoons are hot and humid; keep museum or mall time as a practical weather buffer.",
        travelTipZh: "骞垮窞澶忓鍗堝悗闂风儹锛屽畨鎺掑崥鐗╅鎴栧晢鍦轰綔涓哄ぉ姘旂紦鍐插緢瀹炵敤銆?
      }
    ]
  },
  {
    cityId: "shenzhen",
    subtitleEn: "Theme parks, creative neighborhoods, Shekou nights, modern CBD views, and a coastal escape.",
    subtitleZh: "缁撳悎涓婚鍏洯銆佸垱鎰忚鍖恒€佽泧鍙ｅ鐢熸椿銆佺幇浠?CBD 鍜屾捣宀镐竴鏃ャ€?,
    days: [
      {
        dayNumber: 1,
        themeEn: "OCT cluster and Shekou night",
        themeZh: "鍗庝鲸鍩庣粍鍥笌铔囧彛澶滄櫄",
        morning: {
          en: "Start at Window of the World for Shenzhen's classic global-landmark theme-park circuit.",
          zh: "涓婂崍鍏堝幓涓栫晫涔嬬獥锛屽畬鎴愭繁鍦虫渶缁忓吀鐨勫井缂╁湴鏍囦富棰樺叕鍥姩绾裤€?,
          attractionId: "sz-window-of-the-world"
        },
        afternoon: {
          en: "Walk or ride to OCT-LOFT for cafes, design shops, small galleries, and a slower creative-park pace.",
          zh: "鍗堝悗杞埌鍗庝鲸鍩庡垱鎰忔枃鍖栧洯锛岄€涘挅鍟￠銆佽璁″簵銆佸皬鐢诲粖鍜屽競闆嗐€?,
          attractionId: "sz-octloft"
        },
        evening: {
          en: "Finish at Sea World in Shekou for dinner, bars, the Minghua ship, and waterfront lights.",
          zh: "鏅氫笂鍘昏泧鍙ｆ捣涓婁笘鐣岋紝瀹夋帓鏅氶銆侀厭鍚с€佹槑鍗庤疆鍜屾捣杈圭伅鍏夈€?,
          attractionId: "sz-sea-world"
        },
        travelTipEn: "This day stays mostly in Nanshan; avoid adding Futian or Luohu stops unless you start very early.",
        travelTipZh: "杩欎竴澶╁熀鏈兘鍦ㄥ崡灞憋紝涓嶅缓璁啀纭绂忕敯鎴栫綏婀栵紝闄ら潪寰堟棭鍑哄彂銆?
      },
      {
        dayNumber: 2,
        themeEn: "Reform-era city views and beach air",
        themeZh: "鏀归潻鍩庡競瑙嗚涓庢捣杈圭┖姘?,
        morning: {
          en: "Climb the gentle path at Lianhuashan Park for CBD views and the Deng Xiaoping statue.",
          zh: "涓婂崍璧拌幉鑺卞北鍏洯缂撳潯锛岀湅绂忕敯 CBD 鍜岄倱灏忓钩闆曞儚銆?,
          attractionId: "sz-lianhuashan"
        },
        afternoon: {
          en: "Take Metro Line 8 toward Dameisha for a beach walk and seafood break if the weather is good.",
          zh: "鍗堝悗鍧愬湴閾?8 鍙风嚎鍘诲ぇ姊呮矙锛屽ぉ姘斿ソ灏辨暎姝ョ湅娴枫€佸悆娴烽矞銆?,
          attractionId: "sz-dameisha"
        },
        evening: {
          en: "Return to Futian or Coco Park for dinner, keeping the night central after the long coastal ride.",
          zh: "鏅氫笂鍥炵鐢版垨 Coco Park 鍚冮キ锛屾捣杈瑰洖鍩庡悗涓嶈鍐嶅畨鎺掑お杩溿€?
        },
        travelTipEn: "Beaches are busiest on sunny weekends; go on a weekday or keep a city-only backup.",
        travelTipZh: "鏅村ぉ鍛ㄦ湯娴疯竟浜哄緢澶氾紱灏介噺閫夊伐浣滄棩锛屾垨鍑嗗涓€涓競鍖哄閫夋柟妗堛€?
      },
      {
        dayNumber: 3,
        themeEn: "Dapeng coast and historic village",
        themeZh: "澶ч箯娴峰哺涓庡彜鍩?,
        morning: {
          en: "Leave early for Dapeng Fortress to see the Ming-Qing coastal garrison streets before midday heat.",
          zh: "娓呮櫒鍑哄彂鍘诲ぇ楣忔墍鍩庯紝璧跺湪姝ｅ崍鍓嶈蛋鏄庢竻娴烽槻鍙ゅ煄琛楀贩銆?,
          attractionId: "sz-dapeng"
        },
        afternoon: {
          en: "Continue to Jiaochangwei, Yangmeikeng, or a nearby coastal trail depending on weather and traffic.",
          zh: "鍗堝悗鎸夊ぉ姘斿拰浜ら€氶€夋嫨杈冨満灏俱€佹潹姊呭潙鎴栭檮杩戞捣宀告閬撱€?
        },
        evening: {
          en: "Return to the city before late-night traffic thins out, or stay overnight near the coast for a slower finish.",
          zh: "鏅氫笂灏介噺鍦ㄦ繁澶滀氦閫氬彉灏戝墠鍥炲煄锛屾垨骞茶剢浣忓湪娴疯竟鎱㈡參鏀跺熬銆?
        },
        travelTipEn: "Dapeng is far from central Shenzhen; a car or small tour is much easier than chaining buses.",
        travelTipZh: "澶ч箯绂诲競涓績杩滐紝鍖呰溅鎴栧皬鍥㈡瘮澶氭鍏氦鎹箻鏇撮€傚悎娓稿銆?
      }
    ]
  }
];

 succeeded in 661ms:
import type { CityId } from "./transport";

export type RainfallLevel = "low" | "med" | "high";
export type CrowdLevel = "low" | "med" | "high";

export type CitySeason = {
  cityId: CityId;
  bestMonths: { en: string; zh: string };
  reason: { en: string; zh: string };
  sourceId: string;
  monthlyClimate: Array<{
    monthRange: string;
    tempC: { low: number; high: number };
    rainfall: RainfallLevel;
    summary: { en: string; zh: string };
    crowdLevel: CrowdLevel;
    sourceId: string;
  }>;
  watchOuts: Array<{ en: string; zh: string; sourceId: string }>;
};

export const citySeasons: CitySeason[] = [
  {
    cityId: "beijing",
    bestMonths: { en: "Sep - Nov, Mar - Apr", zh: "9-11 鏈堛€?-4 鏈? },
    reason: {
      en: "Autumn is the clearest and driest window; early spring is mild before the summer heat, but watch wind and dust.",
      zh: "绉嬪鏈€骞茬埥娓呴€忥紱鏃╂槬灏氭湭杩涘叆鏆戠儹锛屼絾瑕佺暀鎰忓ぇ椋庡拰娌欏皹銆?
    },
    sourceId: "noaa-wmo-beijing-54511",
    monthlyClimate: [
      {
        monthRange: "Mar-May",
        tempC: { low: 2, high: 27 },
        rainfall: "low",
        crowdLevel: "high",
        sourceId: "noaa-wmo-beijing-54511",
        summary: {
          en: "Fast warm-up from chilly mornings to warm afternoons; dry, windy, and popular for parks and hutongs.",
          zh: "浠庢竻鍐锋棭鏅ㄨ繀閫熻浆鏆栵紝鏁翠綋灏戦洦澶氶锛屾槸鍏洯鍜岃儭鍚屾父鐨勭儹闂ㄥ銆?
        }
      },
      {
        monthRange: "Jun-Aug",
        tempC: { low: 20, high: 32 },
        rainfall: "high",
        crowdLevel: "med",
        sourceId: "noaa-wmo-beijing-54511",
        summary: {
          en: "Hot monsoon summer; most annual rain concentrates in July and August, so leave schedule buffers.",
          zh: "瀛ｉ鏆戠儹鏄庢樉锛屽叏骞撮檷闆ㄩ泦涓湪 7-8 鏈堬紝鏈哄満鍜岄搧璺绋嬭鐣欑紦鍐层€?
        }
      },
      {
        monthRange: "Sep-Nov",
        tempC: { low: 1, high: 27 },
        rainfall: "med",
        crowdLevel: "high",
        sourceId: "noaa-wmo-beijing-54511",
        summary: {
          en: "Dry, clear autumn with cooler nights; October foliage and National Day demand push crowds up.",
          zh: "绉嬮珮姘旂埥銆佹樇澶滄俯宸姞澶э紱10 鏈堢孩鍙跺拰鍥藉簡闇€姹備細鎺ㄩ珮浜烘祦銆?
        }
      },
      {
        monthRange: "Dec-Feb",
        tempC: { low: -7, high: 6 },
        rainfall: "low",
        crowdLevel: "low",
        sourceId: "noaa-wmo-beijing-54511",
        summary: {
          en: "Cold, very dry winter with quiet sights outside holiday weeks and icy mornings at outdoor sites.",
          zh: "瀵掑喎骞茬嚗锛岄潪鑺傚亣鏃ユ櫙鐐硅緝娓呴潤锛屾埛澶栨櫙鐐规竻鏅ㄥ彲鑳界粨鍐般€?
        }
      }
    ],
    watchOuts: [
      {
        en: "Spring cold fronts can bring strong northerly wind and blowing sand; pack eye protection for Great Wall days.",
        zh: "鏄ュ鍐风┖姘斿彲鑳藉甫鏉ュ亸鍖楀ぇ椋庡拰鎵矙锛屽幓闀垮煄绛夋埛澶栫偣浣嶅缓璁鎶ょ洰鍜屽彛缃┿€?,
        sourceId: "beijing-spring-dust"
      },
      {
        en: "Summer rain is concentrated in July-August; short cloudbursts can slow taxis, rail transfers, and airport access.",
        zh: "澶忓闄嶉洦闆嗕腑鍦?7-8 鏈堬紝鐭椂寮洪檷闆ㄤ細鎷栨參鎵撹溅銆佹崲涔樺拰鏈哄満杩涘嚭銆?,
        sourceId: "beijing-climate-geography"
      },
      {
        en: "Heavy PM2.5 episodes are now uncommon but still covered by official alert plans; check AQI on still winter days.",
        zh: "閲嶆薄鏌撳ぉ宸叉槑鏄惧噺灏戯紝浣嗗畼鏂逛粛淇濈暀棰勮鏈哄埗锛涘啲瀛ｉ潤绋冲ぉ寤鸿鏌ョ湅 AQI銆?,
        sourceId: "beijing-heavy-air-pollution-plan"
      }
    ]
  },
  {
    cityId: "shanghai",
    bestMonths: { en: "Oct - Nov, Mar - May", zh: "10-11 鏈堛€?-5 鏈? },
    reason: {
      en: "Shoulder seasons are mild and walkable, avoiding the humid plum-rain peak and the hottest typhoon-risk weeks.",
      zh: "鏄ョ娓╁拰閫傚悎姝ヨ锛屽彲閬垮紑姊呴洦楂樻箍鏈熷拰鏈€闂风儹鐨勫彴椋庨闄╁懆銆?
    },
    sourceId: "noaa-wmo-shanghai-baoshan-58362",
    monthlyClimate: [
      {
        monthRange: "Mar-May",
        tempC: { low: 7, high: 25 },
        rainfall: "med",
        crowdLevel: "high",
        sourceId: "noaa-wmo-shanghai-baoshan-58362",
        summary: {
          en: "Comfortable for walking the Bund and former concession streets, with frequent light rain by late spring.",
          zh: "閫傚悎澶栨哗鍜岃€佽鍖烘琛岋紝鏅氭槬灏忛洦澧炲锛岄殢韬甫杞讳究闆ㄥ叿銆?
        }
      },
      {
        monthRange: "Jun-Aug",
        tempC: { low: 22, high: 32 },
        rainfall: "high",
        crowdLevel: "med",
        sourceId: "noaa-wmo-shanghai-baoshan-58362",
        summary: {
          en: "Humid summer; June-July plum rain and August downpours make indoor backup plans useful.",
          zh: "澶忓闂风儹娼箍锛?-7 鏈堟闆ㄥ拰 8 鏈堝己闄嶉洦澶氾紝寤鸿鍑嗗瀹ゅ唴澶囬€夎绋嬨€?
        }
      },
      {
        monthRange: "Sep-Nov",
        tempC: { low: 11, high: 28 },
        rainfall: "med",
        crowdLevel: "high",
        sourceId: "noaa-wmo-shanghai-baoshan-58362",
        summary: {
          en: "Warm September gives way to crisp October-November; hotel demand rises around conferences and holidays.",
          zh: "9 鏈堜粛鍋忔殩锛?0-11 鏈堣浆涓烘竻鐖斤紱浼氬睍鍜屽亣鏃ヤ細鎺ㄩ珮浣忓闇€姹傘€?
        }
      },
      {
        monthRange: "Dec-Feb",
        tempC: { low: 2, high: 11 },
        rainfall: "med",
        crowdLevel: "low",
        sourceId: "noaa-wmo-shanghai-baoshan-58362",
        summary: {
          en: "Damp cold rather than deep freeze; museums and food streets stay easy to plan with fewer tourists.",
          zh: "婀垮喎鎰熸槑鏄句絾灏戞湁娣卞喕锛屽崥鐗╅鍜岄楗鍖烘洿瀹规槗瀹夋帓銆?
        }
      }
    ],
    watchOuts: [
      {
        en: "Plum rain usually falls in June-July, bringing long cloudy, rainy, humid spells and mold-prone rooms.",
        zh: "姊呴洦閫氬父鍦?6-7 鏈堬紝杩炵画闃撮洦鍜岄珮婀夸細璁╄。鐗┿€佹埧闂存洿鏄撹繑娼彂闇夈€?,
        sourceId: "shanghai-plum-rain"
      },
      {
        en: "Late-summer rainstorms, gales, and typhoon effects can disrupt riverfront walks and flights.",
        zh: "澶忔湯鐨勬毚闆ㄣ€佸ぇ椋庡拰鍙伴澶栧洿褰卞搷鍙兘鎵撴柇婊ㄦ睙姝ヨ涓庤埅鐝€?,
        sourceId: "shanghai-meteorological-regulations"
      },
      {
        en: "Winter temperatures look moderate, but humidity makes 4-11 C days feel colder than the number suggests.",
        zh: "鍐鏁板€间笉绠楁瀬浣庯紝浣嗘箍鍐蜂細璁?4-11 C 鐨勪綋鎰熸槑鏄惧亸鍐枫€?,
        sourceId: "noaa-wmo-shanghai-baoshan-58362"
      }
    ]
  },
  {
    cityId: "guangzhou",
    bestMonths: { en: "Nov - Dec, Mar", zh: "11-12 鏈堛€? 鏈? },
    reason: {
      en: "The driest, mildest windows avoid the April-June rain peak, midsummer heat, and the main typhoon season.",
      zh: "杩欏嚑娈垫洿骞茬埥娓╁拰锛屽彲閬垮紑 4-6 鏈堥洦宄般€佺洓澶忛珮娓╁拰涓昏鍙伴瀛ｃ€?
    },
    sourceId: "noaa-wmo-guangzhou-59287",
    monthlyClimate: [
      {
        monthRange: "Mar-May",
        tempC: { low: 16, high: 30 },
        rainfall: "high",
        crowdLevel: "high",
        sourceId: "noaa-wmo-guangzhou-59287",
        summary: {
          en: "Warm and increasingly wet; April starts the flood season and Canton Fair weeks tighten hotel supply.",
          zh: "姘旀俯鍥炲崌涓旈洦閲忓揩閫熷鍔狅紝4 鏈堝叆鍓嶆睕鏈燂紝骞夸氦浼氬懆浣忓鏇寸揣寮犮€?
        }
      },
      {
        monthRange: "Jun-Aug",
        tempC: { low: 25, high: 33 },
        rainfall: "high",
        crowdLevel: "low",
        sourceId: "noaa-wmo-guangzhou-59287",
        summary: {
          en: "Hot, very wet summer with heavy rain peaks and frequent thunderstorm breaks.",
          zh: "鏆戠儹鍜屽己闄嶉洦鍙犲姞锛屾毚闆ㄥ嘲鍊兼槑鏄撅紝鐭椂闆烽洦鎵撴柇鎴峰琛岀▼寰堝父瑙併€?
        }
      },
      {
        monthRange: "Sep-Nov",
        tempC: { low: 17, high: 32 },
        rainfall: "med",
        crowdLevel: "high",
        sourceId: "noaa-wmo-guangzhou-59287",
        summary: {
          en: "September is still hot and typhoon-aware; October-November turns drier but fair-season crowds return.",
          zh: "9 鏈堜粛鐑笖闇€鐣欐剰鍙伴锛?0-11 鏈堣浆骞茬埥锛屼絾绉嬪骞夸氦浼氬甫鏉ラ珮浜烘祦銆?
        }
      },
      {
        monthRange: "Dec-Feb",
        tempC: { low: 11, high: 21 },
        rainfall: "low",
        crowdLevel: "med",
        sourceId: "noaa-wmo-guangzhou-59287",
        summary: {
          en: "Mild dry season with bright days; cold snaps are brief but can feel damp indoors.",
          zh: "娓╁拰灏戦洦銆佹櫞澶╁锛涘喎绌烘皵杩囩▼閫氬父鐭殏锛屼絾瀹ゅ唴浼氭湁婀垮喎鎰熴€?
        }
      }
    ],
    watchOuts: [
      {
        en: "April-June frontal rain can be intense; the Dragon Boat Water period often brings repeated heavy showers.",
        zh: "4-6 鏈堝墠姹涙湡闄嶉洦寮哄害楂橈紝榫欒垷姘存湡闂村鏄撳嚭鐜板杞己闄嶉洦銆?,
        sourceId: "guangzhou-climate-geography"
      },
      {
        en: "July-August is the main tropical-cyclone influence period, and September can still see storm effects.",
        zh: "7-8 鏈堟槸鐑甫姘旀棆褰卞搷涓昏鏃舵锛? 鏈堜粛鍙兘鍙楀彴椋庨闆ㄥ奖鍝嶃€?,
        sourceId: "guangzhou-climate-geography"
      },
      {
        en: "Heat and humidity peak together in summer; schedule indoor breaks between old-town food stops.",
        zh: "澶忓楂樻俯楂樻箍鍙犲姞锛岃€佸煄缇庨姝ヨ涔嬮棿鏈€濂藉畨鎺掑鍐呴檷娓╀紤鎭€?,
        sourceId: "noaa-wmo-guangzhou-59287"
      }
    ]
  },
  {
    cityId: "shenzhen",
    bestMonths: { en: "Oct - Dec, Mar", zh: "10-12 鏈堛€? 鏈? },
    reason: {
      en: "Late autumn into early winter is the most settled and dry; March is mild but can turn damp after cold fronts.",
      zh: "娣辩鍒板垵鍐渶绋冲畾骞茬埥锛? 鏈堟俯鍜岋紝浣嗗喎绌烘皵鍚庡彲鑳藉嚭鐜板洖鍗楁疆婀裤€?
    },
    sourceId: "shenzhen-climate-seasons",
    monthlyClimate: [
      {
        monthRange: "Mar-May",
        tempC: { low: 17, high: 30 },
        rainfall: "high",
        crowdLevel: "med",
        sourceId: "shenzhen-climate-seasons",
        summary: {
          en: "Warm, changeable spring; rain ramps up by April-May and return-south damp can hit after cold spells.",
          zh: "鏄ュ杞殩浣嗗鍙橈紝4-5 鏈堥洦閲忔槑鏄惧鍔狅紝鍐峰悗鍥炴殩鏃跺彲鑳藉洖鍗楄繑娼€?
        }
      },
      {
        monthRange: "Jun-Aug",
        tempC: { low: 26, high: 32 },
        rainfall: "high",
        crowdLevel: "low",
        sourceId: "shenzhen-climate-seasons",
        summary: {
          en: "Long, hot, very wet summer; typhoons, monsoon rain, and local downpours are the main planning risk.",
          zh: "闀垮楂樻俯澶氶洦锛屽彴椋庛€佸椋庨洦鍜屽眬鍦扮煭鏃跺己闄嶉洦鏄富瑕佸嚭琛岄闄┿€?
        }
      },
      {
        monthRange: "Sep-Nov",
        tempC: { low: 19, high: 32 },
        rainfall: "med",
        crowdLevel: "high",
        sourceId: "shenzhen-climate-seasons",
        summary: {
          en: "September remains hot and wet, then October-November becomes clearer, drier, and better for coast trips.",
          zh: "9 鏈堜粛鐑笖婀匡紝10-11 鏈堟槑鏄捐浆鏅磋浆骞诧紝鏇撮€傚悎娴峰哺鍜屽煄甯傛琛屻€?
        }
      },
      {
        monthRange: "Dec-Feb",
        tempC: { low: 13, high: 22 },
        rainfall: "low",
        crowdLevel: "med",
        sourceId: "shenzhen-climate-seasons",
        summary: {
          en: "Mild, dry winter overall; short cold fronts and the Lunar New Year border-travel peak are the main variables.",
          zh: "鏁翠綋娓╁拰灏戦洦锛涚煭鏆傚喎绌烘皵鍜屾槬鑺傚墠鍚庢繁娓€氬叧楂樺嘲鏄富瑕佸彉閲忋€?
        }
      }
    ],
    watchOuts: [
      {
        en: "Return-south damp usually appears in February-March after cold weather turns suddenly warm and humid.",
        zh: "鍥炲崡澶╁瑙佷簬 2-3 鏈堬紝鍐风┖姘斿悗绐佺劧杞殩杞箍鏃跺闈€佸湴闈㈠鏄撹繑娼€?,
        sourceId: "shenzhen-back-south"
      },
      {
        en: "July-September averages 3-4 tropical cyclones affecting Shenzhen; ferries, beaches, and flights can pause quickly.",
        zh: "7-9 鏈堝钩鍧囨湁 3-4 涓儹甯︽皵鏃嬪奖鍝嶆繁鍦筹紝杞浮銆佹捣杈瑰拰鑸彮鍙兘蹇€熸殏鍋溿€?,
        sourceId: "shenzhen-climate-seasons"
      },
      {
        en: "April-June strong convection can bring sudden urban waterlogging even when the morning looks clear.",
        zh: "4-6 鏈堝己瀵规祦娲昏穬锛屽嵆浣挎棭鏅ㄦ櫞鏈楋紝鍗堝悗涔熷彲鑳界獊鍙戠煭鏃跺己闄嶉洦鍜屽眬鍦扮Н姘淬€?,
        sourceId: "shenzhen-climate-seasons"
      }
    ]
  }
];

export function seasonByCity(cityId: CityId): CitySeason {
  const season = citySeasons.find((item) => item.cityId === cityId);
  if (!season) {
    throw new Error(`Missing season data for city: ${cityId}`);
  }
  return season;
}

export function seasonSourceIds(cityId?: CityId): string[] {
  const ids = new Set<string>();
  const seasons = cityId ? citySeasons.filter((item) => item.cityId === cityId) : citySeasons;
  seasons.forEach((season) => {
    ids.add(season.sourceId);
    season.monthlyClimate.forEach((item) => ids.add(item.sourceId));
    season.watchOuts.forEach((item) => ids.add(item.sourceId));
  });
  return [...ids];
}

codex
`city-intro` 的英文 blurb 不是数据文件，而是在 `v2/src/components/city/CityIntro.tsx` 的 `CITY_BLURB` 常量里；这次用户指定抽样 10 段里不强制纳入，我会按给定策略抽 why/cultural/itinerary-season。
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -Path .\\v2\\src\\components\\city\\CityIntro.tsx -TotalCount 120" in c:\Users\h\Documents\New project 2
 succeeded in 858ms:
import { useMemo, useState } from "react";
import clsx from "clsx";
import { attractionsByCity } from "../../data/city-attractions";
import type { CityId } from "../../data/transport";
import { useLang } from "../../store/language";

type Props = { cityId: CityId };

const CITY_BLURB: Record<CityId, { en: string; zh: string }> = {
  beijing: {
    en: "Beijing is the imperial capital 鈥?600 years of palace, temple, and tomb sit on a single north鈥搒outh axis through the city. The Great Wall is an hour out. Hutong alleys hide the best dumplings. Plan 4鈥? days; you will not be bored.",
    zh: "鍖椾含鏄腑鍥界殑鏀挎不涓庢枃鍖栭閮解€斺€?00 骞寸殗鍩庝腑杞寸嚎銆佹晠瀹€佸寳閮婄殑闀垮煄銆佽€佸煄鑳″悓銆佸叏鍥芥渶瀵嗛泦鐨勫崥鐗╅涓庡搴欍€傚鍥芥父瀹㈤璁块€氬父鍋滅暀 4鈥? 澶┿€?
  },
  shanghai: {
    en: "Shanghai is China at its most international. The Bund 鈥?old European banks on the river 鈥?stares at the glass towers of Pudong. The former French Concession is plane trees, garden villas, and good coffee. Hangzhou and Suzhou are an hour away by high-speed rail. 3鈥? days does it.",
    zh: "涓婃捣鏄腑鍥界殑鍟嗚锤闂ㄦ埛鈥斺€斿婊╃鐣岄摱琛岀兢姝ｅ娴︿笢閲戣瀺澶╅檯绾匡紱鍘熸硶绉熺晫姊ф琛楅亾涓庡挅鍟￠鏂囧寲锛涗竴灏忔椂楂橀搧鍙揪鏉窞瑗挎箹涓庤嫃宸炲洯鏋椼€傞璁垮缓璁?3鈥? 澶┿€?
  },
  guangzhou: {
    en: "Guangzhou has been a trading port for 2,200 years and still works that way. Yum cha at dawn, Cantonese spoken on the street, Lingnan-style courtyards, and the Pearl River through it all. Twice a year (April and October) the Canton Fair fills the city; prices spike. Hong Kong is 47 minutes away by HSR. 2鈥? days is enough for a first trip.",
    zh: "骞垮窞鏄崕鍗?2200 骞村晢閮解€斺€旀竻鏅ㄩギ鑼躲€佸箔鍗楀缓绛戙€佺彔姹熴€佺菠璇煄甯傛皵璐紝鍗婂勾涓€灞婄殑骞夸氦浼氾紙4 鏈?/ 10 鏈堬級鏈熼棿浠锋牸鏄庢樉涓婃定銆傞珮閾?47 鍒嗛挓鍒伴娓タ涔濋緳銆傞璁垮畨鎺?2鈥? 澶╄緝鍚堥€傘€?
  },
  shenzhen: {
    en: "Shenzhen went from fishing village to one of the world's top tech cities in 40 years. It's also Hong Kong's backyard 鈥?five border crossings, an hour by metro from Causeway Bay. Most foreigners come for a 1鈥? day shopping/eating run rather than a stand-alone trip. Window of the World, the OCT creative district, and Dapeng's old coast are the main draws.",
    zh: "娣卞湷鏄腑鍥芥渶骞磋交鐨勪竴绾垮煄甯傗€斺€?0 骞翠粠娓旀潙鍒板叏鐞冪鎶€涓績銆備笘鐣屼箣绐椼€佸崕渚ㄥ煄鍒涙剰鍥€佽泧鍙ｅ绫嶅弸濂芥捣婊ㄣ€佸ぇ楣忓彜鍩庛€? 涓繁娓檰娴峰彛宀糕€斺€旀洿甯歌瀹夋帓涓烘繁娓法澧?1鈥? 澶╄绋嬶紝鑰岄潪鍗曠嫭鐩殑鍦般€?
  }
};

const CITY_FACTS: Record<CityId, Array<{ en: string; zh: string }>> = {
  beijing: [
    { en: "16 districts", zh: "16 涓鏀垮尯" },
    { en: "21.9 M residents", zh: "甯镐綇浜哄彛 2,190 涓? },
    { en: "PEK + PKX airports", zh: "棣栭兘 + 澶у叴 鍙屾満鍦? },
    { en: "29 metro lines / 523 stations", zh: "29 鏉″湴閾佺嚎 / 523 绔? }
  ],
  shanghai: [
    { en: "16 districts", zh: "16 涓鏀垮尯" },
    { en: "24.9 M residents", zh: "甯镐綇浜哄彛 2,490 涓? },
    { en: "PVG + SHA airports", zh: "娴︿笢 + 铏规ˉ 鍙屾満鍦? },
    { en: "21 metro lines / 517 stations", zh: "21 鏉″湴閾佺嚎 / 517 绔? }
  ],
  guangzhou: [
    { en: "11 districts", zh: "11 涓鏀垮尯" },
    { en: "18.7 M residents", zh: "甯镐綇浜哄彛 1,870 涓? },
    { en: "CAN (Baiyun) 鈥?T3 opened 2025-10", zh: "鐧戒簯鏈哄満 鈥?T3 2025-10 鍚敤" },
    { en: "16 metro lines + Foshan + intercity rail", zh: "16 鏉″湴閾?+ 浣涘北绾?+ 鍩庨檯" }
  ],
  shenzhen: [
    { en: "10 districts", zh: "10 涓鏀垮尯" },
    { en: "17.8 M residents", zh: "甯镐綇浜哄彛 1,780 涓? },
    { en: "SZX (Bao'an) airport", zh: "瀹濆畨鏈哄満" },
    { en: "5 HK border crossings", zh: "5 涓繁娓彛宀? }
  ]
};

const ALL_KEY = "__all";

export default function CityIntro({ cityId }: Props) {
  const { lang } = useLang();
  const isZh = lang === "zh";
  const attractions = attractionsByCity(cityId);
  const blurb = CITY_BLURB[cityId];
  const facts = CITY_FACTS[cityId];

  const districts = useMemo(() => {
    const seen = new Map<string, { en: string; zh: string; count: number }>();
    for (const a of attractions) {
      const key = a.districtEn;
      const existing = seen.get(key);
      if (existing) existing.count += 1;
      else seen.set(key, { en: a.districtEn, zh: a.districtZh, count: 1 });
    }
    return Array.from(seen.entries()).map(([key, value]) => ({ key, ...value }));
  }, [attractions]);

  const [selected, setSelected] = useState<string>(ALL_KEY);

  const visible = selected === ALL_KEY
    ? attractions
    : attractions.filter((a) => a.districtEn === selected);

  return (
    <section id="intro" className="flex flex-col gap-6 scroll-mt-24">
      <div className="flex flex-col gap-3">
        <p className="text-base leading-relaxed text-ink/85">
          {isZh ? blurb.zh : blurb.en}
        </p>
        <ul className="flex flex-wrap gap-2">
          {facts.map((f) => (
            <li
              key={f.en}
              className="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-muted"
            >
              {isZh ? f.zh : f.en}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <header className="flex flex-col gap-1">
          <span className="text-xs font-bold uppercase tracking-widest text-muted">
            {isZh ? "鏍囧織鏅偣 路 鎸夊尯绛涢€? : "Signature attractions 路 filter by district"}
          </span>
          <h2 className="text-xl font-bold">
            {isZh ? "鎸夊尯鏌ョ湅鏅偣" : "Pick a district to see what's there"}
          </h2>
        </header>

        <div role="tablist" aria-label={isZh ? "鍖虹瓫閫? : "District filter"} className="flex flex-wrap gap-2">
          <DistrictChip
            label={isZh ? "鍏ㄩ儴" : "All"}
            count={attractions.length}
            active={selected === ALL_KEY}
            onClick={() => setSelected(ALL_KEY)}
          />
          {districts.map((d) => (
            <DistrictChip
              key={d.key}
              label={isZh ? d.zh : d.en}
              count={d.count}

web search: 
web search: "Maitreya Buddha carved from a single sandalwood tree"
web search: 
web search: "this compound is the supreme surviving example of Lingnan decorative architecture"
web search: 
web search: "The duck is roasted whole until the skin is glassy"
web search: 
web search: "dim sum trays circle the table, conversations stretch for hours"
web search: 
web search: "public transfers are doable but slow for first-time visitors"
web search: 
web search: "The Pearl of Lingnan Architecture" "Chen Clan"
web search: 
web search: "Built between 1888 and 1894" "72" "Chen" "worship site"
web search: 
web search: "tallest sandalwood statue in the world" "Lama Temple"
web search: 
web search: "Wukang Mansion photo spot"
web search: 
web search: https://vn.trip.com/moments/detail/beijing-1-132180379
codex
抽查 10 段，结论如下：

1. 北京 Lama Temple whyEn：有 8 词事实短语命中：Trip.com “Maitreya Buddha—carved from a single sandalwood tree” [源](https://vn.trip.com/moments/detail/beijing-1-132180379)。偏事实描述，低风险。
2. 上海 Wukang whyEn：无近乎逐字命中。
3. 广州 Chen Clan whyEn：有相近商业文案命中，Trip.com 有 “Built between 1888 and 1894…72 counties…Confucian academy and worship site” [源](https://us.trip.com/moments/detail/guangzhou-152-130959747/)。当前文本未见 8 词连续一致，但事实排列很接近。
4. 深圳 Dapeng whyEn：无近乎逐字命中。
5. 北京 culturalNotes.en：无。
6. 上海 culturalNotes.en：无。
7. 广州 culturalNotes.en：无。
8. 深圳 culturalNotes.en：无。
9. 北京 Mutianyu itinerary tip：无。
10. 上海 Bund/Yu Garden itinerary tip：无。

总评估：低风险。建议只改写 Chen Clan 段的事实顺序和 “Pearl of Lingnan Architecture” 附近措辞；Lama Temple 的 sandalwood Buddha 属通用事实，可保留或轻微改写。`city intro` 路径找到：`v2/src/components/city/CityIntro.tsx`。
tokens used
124,733

```

## Concise summary

Provider completed successfully. Review the raw output for details.

## Action items

- Review the response and extract decisions you want to apply.
- Capture follow-up implementation tasks if needed.
