# Evaluation 03: Homepage vs China-Travel Competitors

Date: 2026-05-10

Scope:
- Our page: `v2/build/client/index.html`, rendered from the built SSR output via a temporary local static server because the browser tool blocked direct `file://` navigation.
- Competitors: China Highlights, TravelChinaGuide, Lonely Planet China, WildChina, Trip.com China Travel, Atlas Obscura.
- Source method: rendered viewport checks plus raw HTML source fetches for source-level metadata. TravelChinaGuide blocked the Node fetch once, so its source was fetched with browser-like `curl` headers.

Important local-build observations:
- The built homepage is not just the short five-section page in the brief. It already has a sticky global header with city links for Beijing, Shanghai, Guangzhou, Shenzhen, plus Ask, Share, desktop search, and EN/Chinese toggle.
- The rendered first viewport initially appears nearly blank/white before the China map state appears. At about 8 seconds the province map is visible. This creates a real first-impression risk for a fact-first product.
- The page has horizontal overflow in the rendered desktop viewport.
- The page title is `China Atlas Museum`; there is no meta description and no JSON-LD.
- The footer still says `China Atlas template. Demo data only.`
- The built `/sources` page states 102 total sources: 69 official government/institutional sources and 33 traveler/community sources. This is the strongest trust asset currently present, but it is only surfaced as a small one-line note at the bottom of the homepage.

## Side-by-side table

| Element | Us | China Highlights | TCG | Lonely Planet | WildChina | Trip.com | Atlas Obscura |
|---|---|---|---|---|---|---|---|
| Hero element type | Three.js Earth animation that fades into SVG China province map. Rendered first viewport can look blank until map appears. | Large photographic hero/brand image with travel-award overlay and red "Start Your Journey" CTA. | Full-width static photo hero of foreign travelers on Great Wall with headline and search/planning input. | Split editorial/product hero: dark left panel, large China title and guidebook CTA, image on right. | Large scenic video/slider hero with play-video affordance; journey filter/search appears just below. | Blue editorial hero with embedded video collage. | Editorial/discovery homepage: ad, nav, state check-off widget, then image-led "Place of the Day" and "Search the Atlas." |
| Above-the-fold modules, in order | Sticky header; city nav; desktop search; language toggle; large map/animation hero. Travel Alerts usually begin after first fold. | Header/logo; hero image; floating/hamburger nav; "Start Your Journey" CTA; travel-award/trust imagery. | Utility top bar; nav; image hero; headline "70,000+ guests travel with us every year"; destination/planning search; benefit bullets. | Global nav/search/sign-in; Asia label; China title; China guidebook shop CTA; large destination photo. | Header/nav/CTA; video hero; cookie banner; "Your Journey Starts Here" search/filter partially visible. | Global Trip.com nav; China Travel Guide 2026 hero; social/share icons; video; "Entry requirements" starts in first fold. | Ad; main nav; sign-in/search; state-map engagement CTA; cookie modal; Place of the Day starts below. |
| Below-fold modules, top 5 | Travel Alerts; Visa Checker; 3 stats cards; phase-1 city/port list; practical arrival pitfalls; FAQ; SourcesNote. | Visa-free news alert; Top China Tours; Travelers Love China Highlights; Popular China Tour Destinations; How to Plan a Trip to China; trust/recognition; newsletter. | Best Private China Tours; Small Group Tours; Mini Group Day Tours; More China Destinations; China Travel Guide; attraction/culture/weather/visa/news modules. | Why visit China; travel-insurance CTA; Top places to visit; expert travel tips; guidebook/product cards; China and beyond; app/newsletter/footer. | Tour slider; tailored journey search/filter; trending/highlight journeys; destination/interest journey cards; why WildChina/press style content; newsletter; member logos. | Entry requirements; Wi-Fi/SIM; payment; tours/experiences; transportation; accommodation; Trip.com services; popular cities; downloadable checklist. | Place of the Day; podcast; newsletter; destination cards; stories; hidden wonders grid; community CTA; plan adventure; books/app/social/footer. |
| Primary CTA above fold | No explicit above-fold CTA beyond search and nav. Highest-utility action (Visa Checker) is below the map fold. | "Start Your Journey" / custom tour inquiry. | Search / "I want to travel to..." planning input; "Tailor My Trip" in nav. | "Shop Book" and global search/sign-in. | "Plan Your Journey" / video play / journey search filters. | Sign in/register, video play, social/share; commerce nav for hotels/flights/trains/attractions. | "Start Your Map!" and search icon; "Search the Atlas" in hero. |
| Trust signals visible | Small bottom note: every figure/policy/address cited; `/sources` has 102 sources, 69 official. No visible above-fold trust. Footer says demo data only, which damages trust. | World Travel Awards, Tripadvisor Travelers' Choice, 10,000+ reviews, 98.8% 5-star rating, company-managed local services. | 70,000+ guests/year; 28th anniversary; no-trap/no optional tours; 1-800 phone; New York Times endorsement near bottom. | Lonely Planet brand authority; expert contributor framing; guidebook product; insurance disclosure. | Luxury positioning, TripAdvisor icon, awards/press/member networks, offices/addresses, sustainability. | Trip.com global brand, account/support, service guarantee footer, downloadable checklist, product ecosystem. | Community scale signals: 24,000+ places in app copy, editors, contributors, membership, app, podcast, social, newsletter. |
| SEO title + meta description | Title: `China Atlas Museum`. Meta description: none. | Title: `China Highlights | Best-Rated Personalized Travel`. Meta: "Discover China with the award-winning and best-rated tour company for personalized travel in China." | Title: `China Travel Agency, Small Group & Private Tour Service`. Meta: "TravelChinaGuide, a leading China travel agency offering private & small group packages to Beijing, Xian, Shanghai with lowest price..." | Title: `China travel - Lonely Planet | Asia`. Meta: "From the Forbidden City to the Great Wall, discover ancient sites, modern skyscrapers and more in our China travel guide..." | Title: `Luxury Travel Experiences in China | WildChina`. Meta: "WildChina crafts unique and exclusive luxury travel experiences in China..." | Title: `China Travel Guide 2026 - Top Things to Do, Best Cities to Visit & Tips | Trip.com`. Meta: "Top things to do in China, Trip.com offers abundant guide resource..." | Title: `Curious and Wondrous Travel Destinations - Atlas Obscura`. Meta: "Definitive guidebook and friendly tour-guide to the world's most wondrous places..." |
| Schema.org JSON-LD types emitted | None. | Organization, PostalAddress, ContactPoint, AggregateRating, WebSite, SearchAction, EntryPoint, BreadcrumbList, ListItem. | None detected in fetched source. | WebPage, ImageObject, Country, PostalAddress, BreadcrumbList, ListItem, ItemList, FAQPage, Question, Answer. | Place, PostalAddress, TravelAgency, Organization, ImageObject, WebSite, SearchAction, WebPage, Person, Article. | None detected in fetched source. | Organization, ImageObject, Person, PostalAddress, ContactPoint. |
| Footer columns | Minimal: demo text, References, Back to top. | Highlights family/brands, languages, Follow Us, Company links, reviews/contact/privacy/terms. | About Us, Contact Us, Privacy, Loyalty & Referral, Customer Service, Booking Terms, Affiliate. | Travel with the app, Follow us, Join our Newsletter, Top destinations, Travel Interests, Shop, About Us, language. | Member logos, Travel Advisors, Useful Info, Contact with Beijing/Shanghai/Chengdu/Yangshuo/Huizhou addresses. | Contact us, About, Other services, Payment methods, partners, operator/legal. | Newsletter, Follow Us, app, Places, Editorial, Trips, Community, Company, contact. |
| Newsletter signup | No. | Yes: "Let the Journey Come to You" below trust/recognition. | No obvious homepage newsletter. | Yes: footer and global newsletter CTA. | Yes: "Keep me updated!" above footer, with first/last/email fields. | No obvious newsletter on this guide page. | Yes: midpage "Sign up for our Newsletter" and footer "Get Our Email Newsletter." |
| Search bar | Yes, desktop header only. Searches city/county/town/village/scenic area via datalist. Not visible as homepage value prop and likely weak on mobile. | No obvious hero search; menu/search may exist but CTA is tour inquiry. | Yes, hero search/planning input: "I want to travel to..." plus top search. | Yes, global search icon/search all Lonely Planet. | Yes, journey search/filter for destination/activity near top; not a generic info search. | No guide-page search; Trip.com global product navigation is commerce-first. | Yes, search icon and "Search the Atlas"; searches places/destinations. |

## Gap analysis

Ranked by combined impact on SEO, foreigner trust, and acquisition.

1. Fix the homepage title and add a meta description.
   - Why it matters: Google says title links are often the primary information people use to decide which result to click, and meta descriptions can be used for snippets when they better describe the page. We are the only compared page with no meta description, while all six competitors have one. Effort: S. Zero-commercial conflict: No.

2. Replace `China Atlas Museum` with a foreigner-intent title.
   - Why it matters: The current title undersells the actual utility. Competitors all include "China travel," "China guide," "China tours," or the brand promise in the title. A better title could be `China Travel Entry Guide: Visa, Arrival Card, Payments & City Basics | China Atlas`. Effort: S. Conflict: No.

3. Make the Visa Checker visible in the first meaningful viewport.
   - Why it matters: The strongest differentiated module is currently below the large map. NN/g reports users often leave pages in 10-20 seconds and the first 10 seconds are critical. TCG puts search/planning inside the hero; Trip.com starts with entry requirements immediately below its hero. Effort: M. Conflict: No.

4. Turn the hero into a useful first paint: static China map + headline + "Check my entry status" CTA, with animation as enhancement.
   - Why it matters: In the viewport test, our first screenshot was mostly blank and only the map was clear around 8 seconds. Core Web Vitals targets LCP within 2.5s, INP <=200ms, and CLS <=0.1 at the 75th percentile. A 7-second blank-feeling intro competes with the user's triage window. Effort: M. Conflict: No.

5. Add an above-the-fold trust strip: "102 sources, 69 official, last verified May 9, 2026, no ads/no affiliate links."
   - Why it matters: Competitors use awards, reviews, 70,000+ guests, guidebook brand, or member logos. Stanford's credibility guidelines specifically recommend third-party support, citations, references, and source material. Google also says trust is the most important part of E-E-A-T. Effort: S. Conflict: No.

6. Remove or replace `China Atlas template. Demo data only.` before any public launch.
   - Why it matters: It directly contradicts the fact-first positioning and undermines the 102-source trust signal. This is a high-trust domain: entry, payment, emergency, customs, and visa content can affect traveler safety and money. Effort: S. Conflict: No.

7. Add JSON-LD for Organization/WebSite/WebPage/BreadcrumbList, and ItemList for key city/practical pages.
   - Why it matters: Four of six competitors emit JSON-LD. Google says structured data gives explicit clues about page meaning and can enable richer search results; its case studies cite +25% CTR for Rotten Tomatoes pages and +35% visits for Food Network pages after structured-data adoption. Effort: M. Conflict: No.

8. Add FAQPage only if it matches current Google behavior and user value.
   - Why it matters: Lonely Planet emits FAQPage, but Google documented on May 8, 2026 that FAQ rich results stop appearing starting May 7, 2026. FAQ markup may still help machine understanding, but do not expect FAQ SERP real estate. Effort: S. Conflict: No.

9. Add a compact "Popular city guides" navigation grid in the first two screens.
   - Why it matters: Every China-specific competitor surfaces destinations or city routes somewhere prominent. Google says every page you care about should have a link from at least one other page, and descriptive internal anchor text helps people and Google understand linked pages. Header links to four cities are helpful but not enough for long-tail discovery. Effort: S/M. Conflict: No.

10. Keep city navigation informational, not destination-card commerce.
    - Why it matters: The zero-commercial constraint is a differentiator. A city grid can link to `/city/beijing`, `/city/shanghai`, etc. with practical labels like "Airport entry, metro, payment, scams" rather than tour cards. This captures the competitor discovery pattern without becoming a booking funnel. Effort: S. Conflict: No.

11. Promote homepage search, but define it as a practical China search, not generic site search.
    - Why it matters: TCG, Lonely Planet, WildChina, and Atlas Obscura all have search or finder behavior near the top. Baymard's search UX research found 700+ search-specific usability issues across 19 leading ecommerce sites, which is a warning that search only helps if scoped well. Search should cover cities, ports, visa/payment/internet/rail topics, attractions, museums, and source records. Effort: M. Conflict: No.

12. Make search available on mobile.
    - Why it matters: Our search is hidden on smaller screens (`hidden md:block`). For travel planning, mobile usage is a core context. If search remains desktop-only, one of the few acquisition/discovery tools disappears for a large share of users. Effort: S/M. Conflict: No.

13. Add "latest policy changes" as a dated module with source links, not just alert cards.
    - Why it matters: China Highlights and Trip.com both lead with visa/entry updates; our Travel Alerts are relevant but need stronger dates, source links, and "last verified" labels. Google's helpful content guidance asks whether content provides original information, reporting, research, or analysis and is reliable. Effort: S/M. Conflict: No.

14. Add a short "How this site is verified" methodology section.
    - Why it matters: A young site cannot claim awards. It can claim a process: official source first, community pitfall second, verification date, correction policy. Stanford credibility guidelines also recommend making contact information and credibility signals easy to find. Effort: S. Conflict: No.

15. Add a correction/contact route from the homepage and footer.
    - Why it matters: Competitors expose contact, support, phone, offices, or membership. For a fact-first site, "Report an outdated policy" is more trust-aligned than a phone number. It also creates feedback loops for freshness. Effort: S/M. Conflict: No.

16. Add a non-commercial newsletter only as "China entry policy alerts."
    - Why it matters: Three competitors use newsletter capture. Litmus reports average email ROI of $36 per $1 spent; for us the value is not sales ROI but return visits and policy-change distribution. Place it after the FAQ or SourcesNote, not above the Visa Checker. Effort: M. Conflict: No if explicitly no ads/affiliate/promotions.

17. Add "no ads, no tours, no affiliate links" near the trust strip.
    - Why it matters: The competitors' primary CTAs are mostly commercial: tours, books, insurance, hotels, flights, trips, or memberships. A zero-commercial promise is a positioning advantage if made explicit. Effort: S. Conflict: No; it reinforces the constraint.

18. Add source-linked answer pages for each FAQ item, not only accordion text.
    - Why it matters: Google's snippet documentation says "read more" deep links are more likely when content is immediately visible, not hidden behind expandable sections or tabs. Current FAQ content is mostly collapsed. Dedicated pages also create crawlable long-tail entry points for visa, arrival card, payments, customs, internet, emergency, rail, and water. Effort: M. Conflict: No.

19. Add city/port eligibility routing from the Visa Checker result.
    - Why it matters: The checker answers passport eligibility, but travelers also need where they can enter. Trip.com structures the page by entry, Wi-Fi/SIM, payment, tours, transportation, accommodation; TCG structures by tours/destinations/visa/weather. Linking the result to relevant city/port pages makes the tool a navigation engine. Effort: M. Conflict: No.

20. Add a visible update log for policy claims.
    - Why it matters: Visa-free rules, online entry cards, and transit ports change often. "Last verified" per claim and a changelog turn freshness into a trust signal and reduce liability risk. The local `/sources` page already has verification dates, so the data exists. Effort: M. Conflict: No.

21. Keep the map, but make it task-oriented.
    - Why it matters: A static province map can support discovery if clicking China regions leads to city/port coverage. As pure spectacle, it is less aligned with the top competitor patterns, where hero modules route users to tours, destinations, entry requirements, or search. Effort: M/L depending on interactivity. Conflict: No.

22. Add footer information architecture.
    - Why it matters: Our footer is far thinner than every competitor. Add columns for Entry & Visa, Practical Basics, City Guides, Sources & Methodology, About/Contact. This creates crawlable internal links and makes the site feel maintained. Effort: S/M. Conflict: No.

23. Add author/editor attribution for practical content.
    - Why it matters: Competitors use brand, experts, contributors, offices, or community identities. Google's helpful-content guidance emphasizes experience, expertise, authoritativeness, and trustworthiness, especially when content can affect safety or money. Use "Reviewed by China Atlas research desk" with source methodology if no named expert is available yet. Effort: M. Conflict: No.

24. Add an acquisition-safe "Save this checklist" asset.
    - Why it matters: Trip.com uses a downloadable China travel checklist near the bottom. A neutral PDF or printable checklist for "Before you fly to China" can capture return visits and newsletter signups without commerce. Effort: M. Conflict: No.

25. Measure and fix layout overflow before launch.
    - Why it matters: Both our local render and China Highlights showed horizontal scrollbars in the viewport, but ours affects the utility product before launch. Core Web Vitals includes visual stability; layout issues also hurt perceived polish and trust. Effort: S/M. Conflict: No.

## Key questions

### Q1. Should our homepage have a city navigation grid above the fold?

Yes, but not as large destination cards and not above the Visa Checker. Add a compact "Popular city guides" strip or grid within the first two screens, with crawlable links to Beijing, Shanghai, Guangzhou, Shenzhen, Xi'an, Chengdu, Hangzhou, Suzhou, Guilin, Zhangjiajie, Tibet, Hong Kong, etc. The current header links to four cities are useful, but they do not communicate the site's breadth or create enough contextual internal linking.

### Q2. Should we add a search bar? What would it search?

Yes. Keep the current header search, make it mobile-visible, and add a more prominent "Search China travel facts" control near the Visa Checker. It should search:
- Cities and city pages.
- Airports, ports, and 240h transit cities.
- Attractions, museums, and scenic areas.
- Practical topics: visa, arrival card, Alipay, WeChat Pay, cash, SIM/eSIM, VPN/internet, rail, customs, emergency, water.
- Source records and official links.

Do not build generic web search. The value is a scoped travel-facts search.

### Q3. Should we add a newsletter signup CTA on the homepage? Where?

Yes, but only as a policy/update alert product. Place it after the FAQ or just above the footer, not above the Visa Checker. CTA copy should be factual: "Get China entry and payment policy updates. No tours, no ads." This avoids conflict with zero-commercial positioning while still building a return channel.

### Q4. Is our animation hero too gimmicky for a fact-first information site?

In its current rendered behavior, yes. The concept can stay, but the first paint must show useful content immediately. A 7-second animation that can look blank before the map appears is too much friction for a traveler trying to answer "Can I enter China?" Use a static map/headline/checker first, then run the Earth animation as a short optional/progressive enhancement.

### Q5. Should the Visa Checker be even more prominent?

Yes. It is the highest-utility homepage module and the clearest differentiator against commercial competitors. Put it adjacent to or immediately below a concise hero headline, with an anchor CTA such as "Check my passport." Travel Alerts can sit beside it as secondary context.

### Q6. What are young-site trust signals equivalent to awards?

Use evidence and process:
- "102 sources cited; 69 official government/institutional sources."
- "Every claim has a source and last verification date."
- "No ads, no bookings, no affiliate links."
- "Corrections welcome: report outdated policy."
- "Official source first; traveler pitfall second."
- "Change log for visa-free, arrival card, payment, rail, and customs updates."

These are more aligned with a zero-commercial fact site than borrowed review/award language.

## Source notes and citations

Competitor homepages:
- China Highlights: https://www.chinahighlights.com/
- TravelChinaGuide: https://www.travelchinaguide.com/
- Lonely Planet China: https://www.lonelyplanet.com/destinations/china
- WildChina: https://wildchina.com/
- Trip.com China Travel: https://www.trip.com/china-travel/
- Atlas Obscura: https://www.atlasobscura.com/

Raw source observations:
- view-source:https://www.chinahighlights.com/
- view-source:https://www.travelchinaguide.com/
- view-source:https://www.lonelyplanet.com/destinations/china
- view-source:https://wildchina.com/
- view-source:https://www.trip.com/china-travel/
- view-source:https://www.atlasobscura.com/

SEO, UX, and trust references:
- Google title links: https://developers.google.com/search/docs/appearance/title-link
- Google snippets/meta descriptions: https://developers.google.com/search/docs/appearance/snippet
- Google structured data intro: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google link best practices: https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- Google helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google documentation update on FAQ rich result deprecation: https://developers.google.com/search/updates#bye-sitelinkbox
- Web Vitals thresholds: https://web.dev/articles/vitals
- NN/g page-leaving behavior: https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/
- Baymard ecommerce search UX research: https://baymard.com/research/ecommerce-search
- Litmus email marketing ROI: https://www.litmus.com/resources/email-marketing-roi
- Stanford Web Credibility Guidelines: https://credibility.stanford.edu/guidelines/index.html

Finding count:
- 10 comparison rows in the side-by-side table.
- 25 prioritized recommendations.
- 6 key questions answered.
- 23 distinct cited URLs.
