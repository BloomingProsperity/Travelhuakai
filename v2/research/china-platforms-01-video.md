# China domestic video platforms: tourism signals for Beijing, Shanghai, Guangzhou, Shenzhen

Research date: 2026-05-10  
Scope: Douyin public web, Douyin Open Platform docs, Bilibili public web/search/player, official tourism/government pages, and selected non-official media only where they document a platform trend or local viral spot.

## Executive findings

1. Douyin is useful as a trend-discovery signal, not as a reliable public data source. A non-logged-in Douyin search page such as `https://www.douyin.com/search/%E5%8C%97%E4%BA%AC%E6%97%85%E6%B8%B8?type=general` loads the search shell and tabs but prompts login before exposing meaningful results.
2. Douyin does expose some crawlable public pages: hashtag/challenge pages such as `https://www.douyin.com/hashtag/1609602638275588`, video pages such as `https://www.douyin.com/shipin/7286393198396770361`, user pages such as `https://www.douyin.com/user/MS4wLjABAAAAdcrStwSSMUaOINBOLnK0jgo0WCkjhVvcFeEu1A0OEm5YmVl4y6latLEFNiEBJAwU`, and sitemap-like topic lists such as `https://www.douyin.com/htmlmap/hotchallenge_0_1`.
3. Douyin hashtag pages can expose `chaName`, aggregate play count, user count, related topics, and video snippets in server-rendered HTML. Example: `#北京旅游攻略` showed about `199.9亿` plays on `https://www.douyin.com/hashtag/1609602638275588`.
4. Douyin does not expose a clean public, non-login, official "top tourism hashtags by city" feed. The tables below are therefore "publicly visible high-volume / currently surfaced candidates," not a defensible whole-platform ranking.
5. Bilibili is more viable for a foreign info site: public search, video pages, visible metadata, and a technical iframe player exist. Example external player: `https://player.bilibili.com/player.html?bvid=BV1VCAuejEKF&page=1`.
6. Bilibili is still not an unrestricted data source. Its user agreement allows public browsing but forbids automated acquisition of platform services/content/data without prior written permission.
7. Best project use: treat these platforms as a third category called "social/video trend signals." Use them to identify places, creator narratives, and current interest; do not use them as factual authority for opening hours, ticket prices, policy, safety, or legal details.

## Section A - Douyin

### A1. Public Douyin web exposure and URL patterns

Observed public patterns:

| Surface | Pattern | Public value | Limitation |
|---|---|---|---|
| Search | `https://www.douyin.com/search/<url-encoded keyword>?type=general` | Search shell, tabs, sometimes search-engine-indexed snippets | Fresh non-login browser is prompted to log in for more results |
| Hashtag/challenge | `https://www.douyin.com/hashtag/<challenge_id>` | Topic title, aggregate play count if available, video snippets | Need internal challenge ID; no public city-ranked index |
| Hot/new challenge sitemaps | `https://www.douyin.com/htmlmap/hotchallenge_0_1`, `https://www.douyin.com/htmlmap/newchallenge_0_1` | Official crawlable lists of some hot/new topics | Not city-filtered and not a tourism ranking |
| Video page | `https://www.douyin.com/video/<id>` or `https://www.douyin.com/shipin/<id>` | Title/snippet, creator, visible engagement in some pages | Playback/search can be limited; screenshots and descriptions remain copyrighted |
| User page | `https://www.douyin.com/user/<sec_uid>` | Public profile, certification, follower/like counts, recent works snippets | Not a stable API |

Examples used: Douyin user agreement, updated 2026-02-13 / effective 2026-02-20 (`https://www.douyin.com/agreements/?id=6773906068725565448`); Douyin hashtag pages for `#北京`, `#北京旅游攻略`, `#广州`, `#魔都上海`, `#深圳同城`; Douyin Open Platform docs (`https://open.douyin.com/platform/resource/docs/accession-guide/platform-introduction/`, `https://open.douyin.com/platform/resource/docs/accession-guide/type-and-permission`).

### A2. Tourism hashtag candidates by city

Important caveat: Douyin public web does not prove a true "top 10 currently trending" list for tourism by city. Counts below are only where I could verify a public hashtag/challenge page; otherwise the item is a public search/video-surfaced candidate with no aggregate public count.

#### Beijing

| Candidate hashtag/topic | Public count if visible | Evidence |
|---|---:|---|
| `#北京` | ~1757.7亿 plays | `https://www.douyin.com/hashtag/1563738987591682` |
| `#北京旅游攻略` | ~199.9亿 plays | `https://www.douyin.com/hashtag/1609602638275588` |
| `#北京环球影城` | ~135.0亿 plays | `https://www.douyin.com/hashtag/1620540415958030` |
| `#北京烤鸭` | ~103.9亿 plays | `https://www.douyin.com/hashtag/1648175325353995` |
| `#北京dou知道` | ~90.6亿 plays | `https://www.douyin.com/hashtag/1710877597427726` |
| `#总要来一趟北京吧` | ~89.3亿 plays | `https://www.douyin.com/hashtag/1698824920086536` |
| `#北京中轴线` | aggregate not visible from public page in this pass | UNESCO / Beijing official tourism context: `https://whc.unesco.org/en/list/1714`, `https://english.visitbeijing.com.cn/article/4JOZqDncoyf` |
| `#钟鼓楼` / central-axis heritage check-ins | aggregate not visible | China News reported Bell and Drum Towers ranked second on a Douyin Beijing heritage hot-search list during 2024 May Day: `https://www.bj.chinanews.com.cn/news/2025/0110/97844.html` |
| `#中央电视塔` / skyline viewpoints | aggregate not visible | Public Douyin user/video snippet example from travel creator: `https://www.douyin.com/user/MS4wLjABAAAADXszKg4FadcruKOOppNMkpwj0JZVAjAgq1lBbfZmePk` |
| `#跟着抖音去旅行` | ~130.8亿 plays, national not Beijing-only | `https://www.douyin.com/hashtag/1573901696336926` |

#### Shanghai

| Candidate hashtag/topic | Public count if visible | Evidence |
|---|---:|---|
| `#上海美食` | ~110.9亿 plays | `https://www.douyin.com/hashtag/1590213286008839` |
| `#上海美好推荐官` | ~100.0亿 plays | `https://www.douyin.com/hashtag/1678058016476174` |
| `#上海dou知道` | ~96.1亿 plays | `https://www.douyin.com/hashtag/1697646246988803` |
| `#魔都上海` | ~90.4亿 plays | `https://www.douyin.com/hashtag/1583587955341326` |
| `#上海迪士尼` | aggregate not verified here | Official Douyin account: `https://www.douyin.com/user/MS4wLjABAAAAXjHAn5JalEMScCl30dVdlVbpMVvoULmPd4c7LBXjWAs` |
| `#上海citywalk` | aggregate not verified here | Official Shanghai City Walk product: `https://www.meet-in-shanghai.net/en/city-walk/`; Shanghai government H5 map: `https://english.shanghai.gov.cn/en-ShanghaiShowreel-Videos-WhatsNew/20250716/1a6828881fda49e982538df8454e1bed.html` |
| `#安福路` | aggregate not verified here | Shanghai tourism site calls Wukang-Anfu a Citywalk "top stream" area: `https://www.meet-in-shanghai.net/cn/news/the-center-of-the-universe-in-the-magic-capital-is-new-the-top-stream-returns-562595/` |
| `#武康路` | aggregate not verified here | Same as above |
| `#外滩` | aggregate not verified here | Official City Walk route context: `https://www.meet-in-shanghai.net/en/city-walk/` |
| `#豫园` / `#上海书城` / street-walk clusters | aggregate not verified here | Shanghai official citywalk references above |

#### Guangzhou

| Candidate hashtag/topic | Public count if visible | Evidence |
|---|---:|---|
| `#广州` | ~1125.8亿 plays | `https://www.douyin.com/hashtag/1568927144502274` |
| `#广州美食` | ~121.6亿 plays | `https://www.douyin.com/hashtag/1588178047929357` |
| `#广州塔` | ~92.2亿 plays | `https://www.douyin.com/hashtag/1571720867257346` |
| `#广州早茶` | aggregate not verified here | Guangzhou food/travel public search surface; use as signal only |
| `#广州永庆坊` | aggregate not verified here | Douyin creator/business snippets show `#广州永庆坊`; example: `https://www.douyin.com/user/MS4wLjABAAAAaXaBDilL61InnwbeUZk00M8xLAenpWNURjMkYdkDU2s-aJy8okG_y9BVwKR4yQHU` |
| `#永庆坊美食攻略小吃` | video/topic page, not aggregate hashtag | `https://www.douyin.com/shipin/7286393198396770361` |
| `#广州citywalk` | aggregate not verified here | Guangzhou government / local reporting on Yongqing Fang and nearby cultural routes: `https://www.gz.gov.cn/zt/zzyyzq/wlzx/content/post_10598225.html` |
| `#沙面岛` | aggregate not verified here | Douyin search snippets for Yongqing Fang + Shamian route: `https://www.douyin.com/search/%E5%8C%97%E4%BA%AC%E8%B7%AF%E6%AD%A5%E8%A1%8C%E8%A1%97%E7%A6%BB%E6%B0%B8%E5%BA%86%E5%9D%8A%E5%A4%9A%E8%BF%9C` |
| `#北京路步行街` | aggregate not verified here | Same as above |
| `#圣心大教堂` | aggregate not verified here | Guangdong official Douyin snippet references Guangzhou Sacred Heart Cathedral: `https://www.douyin.com/user/MS4wLjABAAAAdcrStwSSMUaOINBOLnK0jgo0WCkjhVvcFeEu1A0OEm5YmVl4y6latLEFNiEBJAwU` |

#### Shenzhen

| Candidate hashtag/topic | Public count if visible | Evidence |
|---|---:|---|
| `#深圳同城` | ~113.4亿 plays | `https://www.douyin.com/hashtag/1589228242037763` |
| `#深圳万象天地` | aggregate not verified here | Public Douyin search/video snippets: `https://www.douyin.com/search/%E6%B7%B1%E5%9C%B3%E4%B8%87%E8%B1%A1%E5%89%8D%E6%B5%B7nike`; Bilibili travel guide: `https://www.bilibili.com/video/BV1zEEHzsEyn/` |
| `#万象天地` | aggregate not verified here | Same as above |
| `#深圳旅游` | aggregate not verified here | Search/video snippets; no official public aggregate ranking found |
| `#深圳夜景` | aggregate not verified here | Bilibili/Douyin surfaced videos; example `https://www.bilibili.com/video/BV1Tou4zaErn/` |
| `#深圳必去` | aggregate not verified here | Search-surface signal only |
| `#深圳dou知道` | aggregate not verified here | Appears in Douyin public search snippets for Shenzhen/MixC World |
| `#深圳之眼` | aggregate not verified here | 2026 Douyin video surfaced around movie-location check-in: `https://www.douyin.com/video/7608831725951561206` |
| `#欢乐港湾` | aggregate not verified here | Shenzhen visitor context; MixC/Happy Harbor route in Bilibili travel guide: `https://www.bilibili.com/video/BV1zEEHzsEyn/` |
| `#华强北` | aggregate not verified here | Shenzhen tech-tourism / shopping topic; example Shenzhen travel guide above |

### A3. Dominant creator types on Douyin

1. Official tourism/government accounts: `文旅北京`, `北京旅游/Visitbeijing`, `广东文旅`, `上海发布`, city/district accounts, and scenic-area accounts. Examples: Beijing Tourism official Douyin launch (`https://www.visitbeijing.com.cn/article/47QmCuviLRn`), Beijing government livestream note (`https://www.beijing.gov.cn/fuwu/bmfw/sy/jrts/202205/t20220517_2714068.html`), Guangdong Culture and Tourism official Douyin (`https://www.douyin.com/user/MS4wLjABAAAAdcrStwSSMUaOINBOLnK0jgo0WCkjhVvcFeEu1A0OEm5YmVl4y6latLEFNiEBJAwU`).
2. Food and "探店" accounts: restaurant/tea/dessert creators dominate Guangzhou and Shanghai city-walk content; high-volume generic hashtags include `#美食探店` (~2553.5亿 plays, `https://www.douyin.com/hashtag/1591486437085198`) and `#抖音探店团` (~395.7亿 plays, `https://www.douyin.com/hashtag/1689854389728267`).
3. Vlog/travel-route creators: `#旅行推荐官` (~7146.9亿 plays, `https://www.douyin.com/hashtag/1666634254425100`) and `#旅游推荐官` style accounts produce route, transport, ticketing, and "one-day itinerary" content.
4. Photo/citywalk/street-style accounts: especially Shanghai Anfu/Wukang and Guangzhou Yongqing Fang, where the content is often more "how it looks on camera" than guidebook facts.
5. Commercial venue and brand accounts: Shanghai Disney, MixC/Mall stores, cafes, hotels, and paid "life service" merchants use short video as local discovery and transaction funnel.

### A4. Viral or fast-rising spots likely unfamiliar to many foreign tourists

1. Beijing Central Axis / Bell and Drum Towers / Wanning Bridge / Temple of Heaven axis: UNESCO inscription in 2024 turned the axis into a 2025-2026 heritage route rather than just a symbolic line. Use official heritage facts from UNESCO and Beijing tourism, not Douyin captions (`https://whc.unesco.org/en/list/1714`, `https://english.visitbeijing.com.cn/article/4JOZqDncoyf`, `https://whlyj.beijing.gov.cn/zwgk/xwzx/hycz/202407/t20240729_3761648.html`).
2. Shanghai Wukang Road - Anfu Road citywalk: the official Shanghai travel site promotes City Walk routes, while local tourism coverage describes Wukang-Anfu as a top Citywalk area with trend stores and brand first shops (`https://www.meet-in-shanghai.net/en/city-walk/`, `https://www.meet-in-shanghai.net/cn/news/the-center-of-the-universe-in-the-magic-capital-is-new-the-top-stream-returns-562595/`).
3. Guangzhou Yongqing Fang / Moon Bridge / Enning Road / Shamian extension: 2025 coverage frames Yongqing Fang as a Lingnan culture, intangible-heritage, and social-photo district (`https://cn.chinadaily.com.cn/a/202507/13/WS68733556a3106af2b3c73c89.html`, `https://www.gd.gov.cn/gdywdt/zwzt/lyqs/lygd/content/post_4789544.html`, `https://www.gz.gov.cn/zt/zzyyzq/wlzx/content/post_10598225.html`).
4. Shenzhen MixC World / HAUS NOWHERE giant installation / MXTR street blocks: a strong photo-shopping-tech route for foreign visitors who otherwise default to Futian skyline or OCT Loft. Nanshan government describes MixC World as a "street + mall" complex with independent flagships (`https://www.szns.gov.cn/mlns/nsgk_113865/lg/content/post_9364223.html`); public Bilibili travel guide foregrounds MixC World, Happy Harbor, and Zhongshuge (`https://www.bilibili.com/video/BV1zEEHzsEyn/`).
5. Shenzhen "Eye of Shenzhen" and metro/movie check-ins: 2026 Douyin pages surfaced movie-location check-ins (`https://www.douyin.com/video/7608831725951561206`); treat as a short-lived social trend until corroborated by official transit/tourism sources.

### A5. Official Douyin data products / APIs

Douyin Open Platform is legitimate but permissioned. The platform introduction says it offers open services/API capabilities for institutions, creators, and service providers, with nearly 200 APIs and capabilities including user management, data statistics, and vertical content flows (`https://open.douyin.com/platform/resource/docs/accession-guide/platform-introduction/`).

The permissions page lists relevant scopes:

| Capability | Scope / status | Implication |
|---|---|---|
| Query authorized user's video data | `video.data`, application required | Useful only for accounts/videos you are authorized to manage |
| Query specific Douyin video data | `video.list`, application required | Permissioned, not public scraping |
| Keyword video management/search | `video.search`, special permission, application required | Potentially useful for approved partners, not a free hashtag feed |
| Data services: user/item/fan data | `data.external.user`, `data.external.item`, `fans.data`, application required | Authorized analytics, not public tourism data |
| Douyin hot content | `hotsearch`, "Douyin data permission", default closed, application required | Closest official trend endpoint found; still permissioned |

Source: `https://open.douyin.com/platform/resource/docs/accession-guide/type-and-permission`.

Conclusion: no public official tourism trend API was found. A foreign info site should either use Open Platform with approved scopes, cite public government reports, or negotiate business access. It should not scrape public pages to build a statistics product.

### A6. Cultural and Tourism ministry + Douyin partnership

The Ministry of Culture and Tourism relationship with Douyin appears project-based and campaign-based, not a public data feed:

1. 2024 rural tourism digital improvement: MCT Resource Development Department guided Douyin, Fliggy, Xiaohongshu and others to launch action plans (`https://www.mct.gov.cn/wlbphone/wlbydd/xxfb/gzxx/202406/t20240611_953430.html`).
2. 2023 onward: MCT-guided platforms including Douyin implemented rural tourism digital improvement actions; MCT reported that Douyin's "美好乡村等你来" / "遇见春天" / "知秋向山行" topics exceeded 108.8亿 plays and 458,000 creator posts (`https://www.mct.gov.cn/wlbphone/wlbydd/xxfb/gzxx/202409/t20240914_955295.html`).
3. Beijing Pinggu 2024 launch: MCT Resource Development officials, Beijing culture/tourism officials, ByteDance/Douyin representatives, and Douyin creators participated in the rural tourism digital improvement launch (`https://www.beijing.gov.cn/ywdt/gqrd/202404/t20240411_3616137.html`).
4. Related cultural cooperation: MCT, Beijing University, and Douyin Group co-built a national smart-library system, which is cultural infrastructure rather than tourism trend data (`https://www.mct.gov.cn/preview/whzx/whyw/202306/t20230612_944424.htm`).
5. Live performance support: MCT-linked theater/livestream programs show Douyin cooperation in culture, not travel trend data (`https://www.gov.cn/lianbo/bumen/202505/content_7044342.htm`, `https://www.xinhuanet.com/tech/20250928/f7aa9b9d98df425a86cda5d9c0b3ca32/c.html`).

### A7. Douyin legal / copyright limits

Key terms from the Douyin user agreement:

1. Douyin grants users only a personal, revocable, non-transferable, non-exclusive, non-commercial use right. Without prior written authorization, users may not use Douyin in unauthorized forms including copying, crawling, vertical search, mirroring, or trading (`https://www.douyin.com/agreements/?id=6773906068725565448`, section 2.4).
2. Automated tools that access Douyin to collect or process information/content are prohibited (`section 5.1`).
3. Without written permission, third parties may not edit/organize/adapt Douyin information/content and display it outside the original Douyin source page (`section 5.3(2)`).
4. The agreement explicitly prohibits improper methods including hotlinking, crawling, simulated downloading, deep linking, mirroring, uploading/downloading/using Douyin information/content (`section 5.3(4)`).
5. It explicitly prohibits using unauthorized Douyin information/content to compute or publish hot words, hit rate, classification, search volume, click rate, or read volume (`section 5.3(6)`).
6. Douyin and its service UI/software/data rights remain with Douyin; users retain rights in their uploaded content but grant Douyin broad rights, not third-party sites (`section 10`).

Practical result: do not republish screenshots, thumbnails, video clips, transcripts, full descriptions, or large scraped tables. Safer surface: link to the Douyin page, paraphrase the visible title briefly, name the creator/account, and say "observed on [date]" for any visible count.

## Section B - Bilibili

### B1. Travel UP creators relevant to foreign visitors

| Creator / account | Type | Why relevant | Example |
|---|---|---|---|
| Ponto Azul / 巴西博主 Ponto Azul | Foreign creators traveling China | Shenzhen-first 90-day China trip, Portuguese-origin content with China travel tags | `https://www.bilibili.com/video/BV19PVkzoE5k/`, `https://www.bilibili.com/video/BV1aLEVzsEdW/` |
| Craig也叫快克 | Foreign creator living in China | US photographer/documentary creator in Shenzhen, bilingual travel and place stories | `https://www.bilibili.com/list/3546559465654866?bvid=BV1Yr32zcE5d&oid=114812075905969` |
| 李格Greg | Foreign creator living in China | French/Swiss Shanghai-based creator; China lifestyle and Shanghai travel content | `https://www.bilibili.com/list/434157581?bvid=BV1mT421y7vQ&oid=1703493629` |
| DanteMunoz大儒 | Foreign creator living in China | Profile says goal is sharing real China with the West; China-living and food/life topics | `https://www.bilibili.com/list/3546614083880992?bvid=BV1awqGYDEtB&oid=113627302531900` |
| 田纳西Jay和Ari | Foreign-family / China life | Food/life videos that help foreigners decode local experiences | `https://www.bilibili.com/video/BV16KdhYvEVg/` |
| 韩AMSEIS | Foreign/overseas creator | Shenzhen night video explicitly says it is for foreign viewers | `https://www.bilibili.com/video/BV1Tou4zaErn/` |
| 镜哥的世界 | Chinese commentary / foreign-web translation | Dominates high-view Bilibili search results for foreign bloggers in China; useful for discovery, less useful as primary source | `https://www.bilibili.com/video/BV1VCAuejEKF/` |
| 油管老外游新手村 | Chinese translation/curation account | Foreign travel-to-China videos by city, including Beijing/Shanghai/Guangzhou | `https://www.bilibili.com/video/BV1vSEFz9EY2/` |
| M喵哥看世界 | Chinese translation/curation account | Foreign visitor travel series, including Guangzhou | `https://www.bilibili.com/video/BV1bCEdzKEqm/` |
| 京智范儿 | Official/municipal-facing Beijing content | Beijing promotional videos including 2025 "Here is Beijing" and world-heritage clips | `https://www.bilibili.com/video/BV1un6zYPEW9` |

### B2. High-view "foreigners travel / experience China" Bilibili videos, 2025-2026

Method: Bilibili public search for `外国人 中国旅游`, sorted by "最多播放", date-bounded to 2025-2026. This is not an official Bilibili annual ranking; it is the public search ranking observed on 2026-05-10. Search URL: `https://search.bilibili.com/all?keyword=%E5%A4%96%E5%9B%BD%E4%BA%BA%20%E4%B8%AD%E5%9B%BD%E6%97%85%E6%B8%B8&order=click&pubtime_begin_s=1735660800&pubtime_end_s=1798732799`.

| Rank | Video | UP | Date | Observed views | URL |
|---:|---|---|---|---:|---|
| 1 | 英国博主游上海，一天哭8回！有外国网友问：这是中国吗？ | 镜哥的世界 | 2025-02-16 | ~339.7万 | `https://www.bilibili.com/video/BV1VCAuejEKF/` |
| 2 | 英国小哥爬华山，吓到自闭，外国网友跟着被吓到腿发软 | 镜哥的世界 | 2025-02-05 | ~293.2万 | `https://www.bilibili.com/video/BV1PMPreWENP/` |
| 3 | 英国博主在中国搭顺风车，卡车司机送水请吃饭，外国网友秒破防 | 镜哥的世界 | 2025-05-16 | ~283.6万 | `https://www.bilibili.com/video/BV155EszREz2/` |
| 4 | 意大利博主骑行湖南，遇老板娘睡觉而自助买水，惊呆外国网友 | 镜哥的世界 | 2025-07-20 | ~279.9万 | `https://www.bilibili.com/video/BV1VXgxzuEHw/` |
| 5 | 英国博主的地狱和天堂旅行：从吃进医院被绑架，到天堂中国 | 镜哥的世界 | 2025-02-24 | ~275.1万 | `https://www.bilibili.com/video/BV1YrAXeiE67/` |
| 6 | 甲亢哥成都行，全程被成都和中国文化震惊，保镖狂吃火锅 | 镜哥的世界 | 2025-04-01 | ~240.5万 | `https://www.bilibili.com/video/BV12tZtY6EUS/` |
| 7 | 给国外人看看中国深圳夜晚的画风 | 韩AMSEIS | 2025-07-16 | ~186.6万 in search snapshot | `https://www.bilibili.com/video/BV1Tou4zaErn/` |
| 8 | 英国老爷子凌晨在中国走夜路连续遇到危险，外国网友集体破防 | 镜哥的世界 | 2025-06-29 | ~181.8万 | `https://www.bilibili.com/video/BV1nigZzgEYk/` |
| 9 | 白菜再来中国 被海关单独盘问“你来中国什么目的”直接慌了 | 绯吧official | 2025-05-30 | ~144.6万 | `https://www.bilibili.com/video/BV1jS7EzCEwy/` |
| 10 | 重庆小面 / 重庆旅游 / 外国人在中国 | 瑞哥英语_RyanChen | 2025-04-11 | ~140.8万 | `https://www.bilibili.com/video/BV1p3d2Y7EmK/` |

City-specific examples for this project:

| City | Example | URL |
|---|---|---|
| Beijing | `2025北京城市宣传片——这里是北京` | `https://www.bilibili.com/video/BV1un6zYPEW9` |
| Shanghai | `英国博主游上海，一天哭8回！` | `https://www.bilibili.com/video/BV1VCAuejEKF/` |
| Guangzhou | `日本博主：“孤独的旅行家”广州篇...` | `https://www.bilibili.com/video/BV1vSEFz9EY2/` |
| Shenzhen | `深圳漫游指南：万象天地→欢乐港湾→钟书阁` | `https://www.bilibili.com/video/BV1zEEHzsEyn/` |
| Shenzhen | Ponto Azul Shenzhen series | `https://www.bilibili.com/video/BV19PVkzoE5k/` |

### B3. Bilibili categorization

Current public PC behavior observed:

1. `https://www.bilibili.com/v/life/travel/` redirects to `https://www.bilibili.com/c/travel/`, titled `旅游出行-哔哩哔哩`.
2. Bilibili top navigation exposes broad channels including `美食` at `https://www.bilibili.com/c/food/` and `旅游出行` at `https://www.bilibili.com/c/travel/`.
3. The old or creator-side taxonomy terms `出境游 / 国内游 / 旅拍 / 户外` are useful content concepts, but I did not find them exposed as first-class public PC subcategory tabs on the current `旅游出行` page. A third-party Bilibili API category table can help decode historical TIDs, but it should not be treated as official documentation (`https://lxb007981.github.io/bilibili-API-collect/video/video_zone.html`).
4. Food vlogs often sit under the separate Food channel rather than Travel. For our project, Guangzhou morning tea, Shanghai cafes, Beijing roast duck, and Shenzhen mall food should be tagged as both "food" and "place experience" in our own taxonomy.

### B4. Embedding Bilibili content on a foreign English-language site

Bilibili videos are technically embeddable via:

```html
<iframe
  src="https://player.bilibili.com/player.html?bvid=BV1VCAuejEKF&page=1"
  allowfullscreen="true"
  scrolling="no"
  frameborder="0">
</iframe>
```

The endpoint returned `External Player - 哔哩哔哩嵌入式外链播放器` for a public video. For live/activity players, Bilibili has official iframe documentation for activity live players and notes manual sizing / 16:9 behavior (`https://live.bilibili.com/p/html/bilibili-live-player/docs/player-activity.html`).

Legal interpretation: iframe the Bilibili-hosted player, do not download, proxy, strip UI, remove watermarks, or rehost files. Some videos may fail abroad because of account, region, deletion, copyright, or external-playback limits.

### B5. Public metadata per video

Publicly visible or obtainable from a video page / Bilibili's web endpoints:

| Metadata | Example |
|---|---|
| Title | `英国博主游上海，一天哭8回！有外国网友问：这是中国吗？` |
| BV ID / URL | `BV1VCAuejEKF`, `https://www.bilibili.com/video/BV1VCAuejEKF/` |
| Creator / mid | `镜哥的世界`, `space.bilibili.com/519678691` |
| Upload date | 2025-02-16 in Bilibili page/search |
| View count | ~339.7万 observed via public search / web interface |
| Danmaku count | visible in search/player metadata |
| Likes, favorites, coins, shares, comments | public on page/API for many videos |
| Tags | Example tags for the Shanghai video: 上海, 英国, 歪果仁, 外国人, 旅游, 生活, 日常, 外国人看中国, 外国网友 |

Example web endpoints observed:

```text
https://api.bilibili.com/x/web-interface/view?bvid=BV1VCAuejEKF
https://api.bilibili.com/x/tag/archive/tags?bvid=BV1VCAuejEKF
```

Use caution: these endpoints are publicly reachable, but Bilibili's agreement restricts automated data acquisition without written permission. A foreign site can safely cite a video manually as: title, UP name, upload date, observed view count with date, link, and optional iframe.

### B6. Foreign-creator cohorts

1. Foreigners living in China: 李格Greg, Craig也叫快克, DanteMunoz大儒, 田纳西Jay和Ari. These accounts are best for lived experience, local friction points, and the "what surprises foreigners" angle.
2. Foreign travelers visiting China and reuploaded/translated by Chinese accounts: Ponto Azul, Shige Travel, UK/Italian/Belgian/Korean creators. These are strong for discovery but weak legally unless the Bilibili uploader has rights.
3. Chinese translator/commentary accounts: 镜哥的世界, 油管老外游新手村, M喵哥看世界, BonifacioWang. These dominate search but often summarize or translate external-platform content. Link and cite them as Bilibili commentary, not as original travel evidence unless rights are clear.
4. Official/municipal video accounts: 京智范儿, Beijing/Shanghai city promotion accounts, tourism bureaus. These are better for official narratives and campaign spots.
5. Food/lifestyle UPs: strongest for Guangzhou morning tea, Shanghai cafes, Beijing roast duck/hotpot, and Shenzhen mall/shopping routes. Treat as experience/pitfall signals, not factual listings.

### B7. Bilibili legal / embedding limits

Key Bilibili agreement points:

1. Bilibili states public pages are generally freely browsable except restricted-age pages (`https://www.bilibili.com/blackboard/protocal/international_hans.html`, section 2.4).
2. User-uploaded content remains owned by the user or rights holder, while the uploader grants Bilibili a broad license; that license is not a license to third-party sites (`section 3.3`).
3. Users may not upload/transmit content that infringes others' copyright, trademarks, trade secrets, etc. (`section 4.3.9`).
4. Without prior written permission, users may not use robots/spiders/crawlers/scripts/software to obtain Bilibili services/content/data (`section 4.3.15`).
5. Bilibili's service, software, technology, trademarks, and materials are protected by intellectual-property law (`section 6`).
6. Bilibili has an infringement complaint portal in the site footer (`https://www.bilibili.com/v/copyright/intro/`).

Practical result: iframe embedding is the safest reuse mode because playback remains on Bilibili. Do not copy thumbnails, screenshots, danmaku streams, transcripts, or video descriptions beyond short factual references.

## Section C - Practical implications for our project

### C1. Are these platforms viable as a third source category?

Yes, but only as "social/video trend signals." Recommended policy:

| Use | Allow? | Notes |
|---|---|---|
| Link to original Douyin/Bilibili video or hashtag page | Yes | Use canonical public URL and date observed |
| Paraphrase a short video title | Yes | Keep it factual and short |
| List creator name / account name | Yes | Attribute and link |
| Embed Bilibili official player | Yes, with caution | Use Bilibili-hosted iframe; expect availability issues |
| Embed Douyin videos | Avoid unless official embed/share terms are clear | Direct iframe pattern not established as a public right |
| Republish screenshots/thumbnails/video frames | Avoid | Copyright and platform terms risk |
| Repost captions, AI transcripts, comments, danmaku | Avoid | Copyright, privacy, and ToS risk |
| Use visible hashtag play counts | Limited | Only quote small manually observed counts, with date and URL |
| Build a refreshed trend database by scraping | No | Douyin and Bilibili terms both restrict this |

### C2. Does showing trending hashtags violate platform terms?

Manual editorial references to public hashtag names and links are low risk. Publishing a large, regularly updated ranked hashtag database is high risk. Douyin's agreement specifically prohibits using unauthorized Douyin information/content to calculate or publish hot words, classification, search volume, click rate, read volume, etc. Bilibili prohibits automated acquisition of platform content/data without written permission.

### C3. Is there a legal way to consume official MCT + Douyin partnership data?

Only through:

1. Public MCT/government announcements and reports (`mct.gov.cn`, `gov.cn`, local government pages).
2. Douyin Open Platform scopes after approval, especially `hotsearch`, `video.search`, `data.external.item`, and related permissions.
3. Direct business/data cooperation with Douyin/Ocean Engine/Juliang Engine.

No open public tourism trend feed from the MCT + Douyin partnership was found.

### C4. Can we scrape/list trending tourism hashtags from public Douyin pages?

Do not scrape. Douyin terms prohibit automated access, crawling, copying, mirroring, and using unauthorized content/data for hot-word/statistical outputs. A safer approach is a human-curated "what locals are posting about" section with a few linked examples, refreshed manually or through approved APIs.

### C5. Recommended implementation for our site

1. Add source badge: `Video trend signal`.
2. Each item should store: platform, URL, title paraphrase, creator/account, observed date, observed count if visible, city, topic tags, and a note that the item is not a factual authority.
3. For Bilibili only, optionally store `bvid` and iframe URL. Do not store downloaded media.
4. For Douyin, store only source URL and a short editorial summary. Do not store screenshots or scraped descriptions.
5. Use official sources for facts: visa, attraction names, opening hours, transit, tickets, safety, official events.
6. Use community blogs/forums for pitfalls: access problems, crowding, payment issues, route mistakes.
7. Use Douyin/Bilibili for trend discovery: where locals are filming, what route patterns are gaining attention, and which places may be useful to explain to foreign visitors before they appear in English guidebooks.

## Source URL inventory

Distinct URLs used or cited:

1. `https://www.douyin.com/agreements/?id=6773906068725565448`
2. `https://open.douyin.com/platform/resource/docs/accession-guide/platform-introduction/`
3. `https://open.douyin.com/platform/resource/docs/accession-guide/type-and-permission`
4. `https://www.douyin.com/htmlmap/hotchallenge_0_1`
5. `https://www.douyin.com/hashtag/1563738987591682`
6. `https://www.douyin.com/hashtag/1609602638275588`
7. `https://www.douyin.com/hashtag/1620540415958030`
8. `https://www.douyin.com/hashtag/1698824920086536`
9. `https://www.douyin.com/hashtag/1710877597427726`
10. `https://www.douyin.com/hashtag/1568927144502274`
11. `https://www.douyin.com/hashtag/1588178047929357`
12. `https://www.douyin.com/hashtag/1571720867257346`
13. `https://www.douyin.com/hashtag/1583587955341326`
14. `https://www.douyin.com/hashtag/1697646246988803`
15. `https://www.douyin.com/hashtag/1678058016476174`
16. `https://www.douyin.com/hashtag/1590213286008839`
17. `https://www.douyin.com/hashtag/1589228242037763`
18. `https://www.douyin.com/hashtag/1591486437085198`
19. `https://www.douyin.com/hashtag/1689854389728267`
20. `https://www.douyin.com/hashtag/1666634254425100`
21. `https://www.douyin.com/hashtag/1573901696336926`
22. `https://www.douyin.com/shipin/7286393198396770361`
23. `https://www.douyin.com/video/7608831725951561206`
24. `https://www.mct.gov.cn/wlbphone/wlbydd/xxfb/gzxx/202406/t20240611_953430.html`
25. `https://www.mct.gov.cn/wlbphone/wlbydd/xxfb/gzxx/202409/t20240914_955295.html`
26. `https://www.beijing.gov.cn/ywdt/gqrd/202404/t20240411_3616137.html`
27. `https://www.mct.gov.cn/preview/whzx/whyw/202306/t20230612_944424.htm`
28. `https://www.gov.cn/lianbo/bumen/202505/content_7044342.htm`
29. `https://www.xinhuanet.com/tech/20250928/f7aa9b9d98df425a86cda5d9c0b3ca32/c.html`
30. `https://whc.unesco.org/en/list/1714`
31. `https://english.visitbeijing.com.cn/article/4JOZqDncoyf`
32. `https://whlyj.beijing.gov.cn/zwgk/xwzx/hycz/202407/t20240729_3761648.html`
33. `https://www.bj.chinanews.com.cn/news/2025/0110/97844.html`
34. `https://www.visitbeijing.com.cn/article/47QmCuviLRn`
35. `https://www.beijing.gov.cn/fuwu/bmfw/sy/jrts/202205/t20220517_2714068.html`
36. `https://www.meet-in-shanghai.net/en/city-walk/`
37. `https://english.shanghai.gov.cn/en-ShanghaiShowreel-Videos-WhatsNew/20250716/1a6828881fda49e982538df8454e1bed.html`
38. `https://www.meet-in-shanghai.net/cn/news/the-center-of-the-universe-in-the-magic-capital-is-new-the-top-stream-returns-562595/`
39. `https://cn.chinadaily.com.cn/a/202507/13/WS68733556a3106af2b3c73c89.html`
40. `https://www.gd.gov.cn/gdywdt/zwzt/lyqs/lygd/content/post_4789544.html`
41. `https://www.gz.gov.cn/zt/zzyyzq/wlzx/content/post_10598225.html`
42. `https://www.szns.gov.cn/mlns/nsgk_113865/lg/content/post_9364223.html`
43. `https://www.bilibili.com/blackboard/protocal/international_hans.html`
44. `https://www.bilibili.com/c/travel/`
45. `https://www.bilibili.com/c/food/`
46. `https://player.bilibili.com/player.html?bvid=BV1VCAuejEKF&page=1`
47. `https://live.bilibili.com/p/html/bilibili-live-player/docs/player-activity.html`
48. `https://search.bilibili.com/all?keyword=%E5%A4%96%E5%9B%BD%E4%BA%BA%20%E4%B8%AD%E5%9B%BD%E6%97%85%E6%B8%B8&order=click&pubtime_begin_s=1735660800&pubtime_end_s=1798732799`
49. `https://www.bilibili.com/video/BV1VCAuejEKF/`
50. `https://www.bilibili.com/video/BV1PMPreWENP/`
51. `https://www.bilibili.com/video/BV155EszREz2/`
52. `https://www.bilibili.com/video/BV1VXgxzuEHw/`
53. `https://www.bilibili.com/video/BV1YrAXeiE67/`
54. `https://www.bilibili.com/video/BV12tZtY6EUS/`
55. `https://www.bilibili.com/video/BV1Tou4zaErn/`
56. `https://www.bilibili.com/video/BV1nigZzgEYk/`
57. `https://www.bilibili.com/video/BV1jS7EzCEwy/`
58. `https://www.bilibili.com/video/BV1p3d2Y7EmK/`
59. `https://www.bilibili.com/video/BV1un6zYPEW9`
60. `https://www.bilibili.com/video/BV1vSEFz9EY2/`
61. `https://www.bilibili.com/video/BV1zEEHzsEyn/`
62. `https://www.bilibili.com/video/BV19PVkzoE5k/`
63. `https://www.bilibili.com/video/BV1aLEVzsEdW/`
64. `https://www.bilibili.com/list/3546559465654866?bvid=BV1Yr32zcE5d&oid=114812075905969`
65. `https://www.bilibili.com/list/434157581?bvid=BV1mT421y7vQ&oid=1703493629`
66. `https://www.bilibili.com/list/3546614083880992?bvid=BV1awqGYDEtB&oid=113627302531900`
67. `https://www.bilibili.com/v/copyright/intro/`
68. `https://lxb007981.github.io/bilibili-API-collect/video/video_zone.html`

## Confirmation

Saved path: `c:/Users/h/Documents/New project 2/v2/research/china-platforms-01-video.md`  
Finding count: 42 substantive findings, with 68 distinct source URLs inventoried.
