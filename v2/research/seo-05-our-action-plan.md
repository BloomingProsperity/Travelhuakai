# SEO Action Plan — China Tourist Platform
Last updated: 2026-05-10

This document translates the findings from seo-01-landscape.md, seo-02-decompose-winners.md,
seo-03-technical-factors.md, and seo-04-multi-engine.md into numbered, owner-assignable tasks
for our specific stack (React 19 + react-router-dom 7.15 + Vite 8 + Tailwind v4 + Cloudflare Pages).

Items are grouped by phase. Each has a priority tag: [P0] = blocking launch, [P1] = pre-launch
week-one, [P2] = first month.

---

## A. Day-1 — Before Any Page Goes Public

### Domain

1. [P0] Register a .com domain. Preferred name patterns: `china-tourist-guide.com`,
   `visitchinainfo.com`, `chinatravelfacts.com`. Rules: no brand names (WeChat, Alipay,
   Ctrip, Meituan), no government-sounding terms implying official affiliation ("gov",
   "official"), no pinyin that overlaps with registered travel brands. Check WIPO Global
   Brand Database before purchase: https://branddb.wipo.int/en/quicksearch
   Do NOT register a .cn domain. A .cn requires an ICP filing (MIIT licence) to serve from
   mainland China infrastructure. Our hosting is Cloudflare Pages (US CDN edge), so no ICP
   is required.
   Source: https://www.markmonitor.com/blog/how-domain-names-are-regulated-in-china-administration-of-the-internet/

2. [P0] After registration, point the domain to Cloudflare Pages. In the Cloudflare
   dashboard set SSL/TLS mode to "Full (strict)" and enable "Always Use HTTPS". This forces
   HTTPS on all requests with no code change needed.

### HTTPS + HSTS

3. [P0] Enable HSTS: Cloudflare dashboard > SSL/TLS > Edge Certificates > HTTP Strict
   Transport Security. Start with max-age = 1 month (2592000 s) before launch. After 30
   days with zero HTTPS errors, raise to 12 months (31536000 s). Do NOT enable
   includeSubDomains until every subdomain (api.*, staging.*) has a valid certificate.
   Do NOT enable preload until max-age >= 12 months and all subdomains are HTTPS-clean.
   Source: https://developers.cloudflare.com/ssl/edge-certificates/additional-options/http-strict-transport-security/

4. [P0] IPv6: Cloudflare proxy automatically provides dual-stack (IPv4 + IPv6) on all
   proxied DNS records. Set the DNS A record to "Proxied" (orange cloud) — no further
   configuration needed.

### robots.txt

5. [P0] Create public/robots.txt (Vite copies public/ to the build root verbatim):

   ```
   User-agent: *
   Disallow: /share
   Disallow: /ask
   Sitemap: https://YOUR-DOMAIN.com/sitemap.xml
   ```

   Block /share and /ask — login-gated UGC pages that must not be indexed until Phase 2.
   All 4 city pages, homepage, and /sources remain crawlable.
   Source: https://developers.google.com/search/docs/crawling-indexing/robots/intro

### sitemap.xml

6. [P0] Generate sitemap.xml at build time. The current stack uses react-router-dom
   (no @react-router/dev framework), so write a scripts/generate-sitemap.mjs that runs
   as a Vite postbuild step. Hardcode Phase 1 static routes:
   /, /city/beijing, /city/shanghai, /city/guangzhou, /city/shenzhen, /sources.
   Include <lastmod> with the build date in ISO 8601 (YYYY-MM-DD). Omit <priority> and
   <changefreq> — Google ignores both fields entirely.
   Limit per file: 50 MB / 50,000 URLs. Phase 1 is well within scope.
   Source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

7. [P0] For the bilingual sitemap (needed for hreflang — see item 24), extend the same
   script to emit xhtml:link annotations per URL:

   ```xml
   <url>
     <loc>https://YOUR-DOMAIN.com/city/beijing</loc>
     <xhtml:link rel="alternate" hreflang="en"
                 href="https://YOUR-DOMAIN.com/city/beijing"/>
     <xhtml:link rel="alternate" hreflang="zh-Hans"
                 href="https://YOUR-DOMAIN.com/zh/city/beijing"/>
     <xhtml:link rel="alternate" hreflang="x-default"
                 href="https://YOUR-DOMAIN.com/city/beijing"/>
   </url>
   ```

   Add xmlns:xhtml="http://www.w3.org/1999/xhtml" to the <urlset> opening tag.
   Source: https://developers.google.com/search/docs/specialty/international/localized-versions

### 404 and 500 Pages

8. [P0] Create src/pages/NotFound.tsx. Must include a plain-language message, links back
   to Home and each of the 4 city pages, and the same site header. Wire as catch-all in
   react-router-dom:

   ```tsx
   <Route path="*" element={<NotFound />} />
   ```

   Add public/_redirects for Cloudflare Pages SPA fallback:
   ```
   /* /index.html 200
   ```

9. [P0] Wrap the router tree in a React ErrorBoundary with a fallback that includes
   navigation links. In a Vite SPA there is no separate 500.html — the ErrorBoundary
   handles runtime errors client-side.

### Canonical Tags

10. [P0] Every page must emit a canonical link tag. In React 19, title/meta/link elements
    in component trees are automatically hoisted to <head> — no external library needed:

    ```tsx
    <link rel="canonical" href="https://YOUR-DOMAIN.com/city/beijing" />
    ```

    Place this inside every page component. The canonical must be an absolute URL.

### Open Graph + Twitter Card Meta Tags

11. [P0] Create a reusable src/components/PageMeta.tsx component using React 19 native
    head hoisting:

    ```tsx
    interface PageMetaProps {
      title: string;
      description: string;
      canonicalUrl: string;
      ogImage?: string;  // absolute HTTPS URL, defaults to site og image
      ogType?: "website" | "article";
    }
    export function PageMeta({ title, description, canonicalUrl,
      ogImage = "https://YOUR-DOMAIN.com/og-default.jpg",
      ogType = "website" }: PageMetaProps) {
      return (
        <>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:type" content={ogType} />
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={ogImage} />
        </>
      );
    }
    ```

    og:image: 1200x630 px, absolute HTTPS URL, max 5 MB, WebP accepted.
    Source: https://myogimage.com/blog/og-image-size-meta-tags-complete-guide

12. [P0] Produce og:image assets. Minimum set at launch:
    - public/og-default.jpg — site-wide fallback (1200x630, China map + site name)
    - public/og-beijing.jpg, og-shanghai.jpg, og-guangzhou.jpg, og-shenzhen.jpg
    Export as WebP or JPEG at exactly 1200x630.

### Schema.org JSON-LD

13. [P0] Homepage — two JSON-LD blocks:

    a. Organization:
    ```json
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "YOUR SITE NAME",
      "url": "https://YOUR-DOMAIN.com",
      "logo": "https://YOUR-DOMAIN.com/logo.png",
      "sameAs": []
    }
    ```

    b. FAQPage for the existing 8-FAQ block (see deprecation note in item 29).
    Source: https://developers.google.com/search/docs/appearance/structured-data/organization

14. [P0] Each city page — three JSON-LD blocks:

    a. BreadcrumbList:
    ```json
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",
          "item": "https://YOUR-DOMAIN.com/" },
        { "@type": "ListItem", "position": 2, "name": "Beijing",
          "item": "https://YOUR-DOMAIN.com/city/beijing" }
      ]
    }
    ```
    Required fields: position (integer, 1-based), name, item (URL). Final item may omit item.
    Source: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb

    b. TouristAttraction for the city:
    ```json
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "name": "Beijing",
      "description": "...",
      "url": "https://YOUR-DOMAIN.com/city/beijing",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CN",
        "addressLocality": "Beijing"
      },
      "touristType": "International tourists",
      "availableLanguage": ["en", "zh-Hans"]
    }
    ```
    Source: https://schema.org/TouristAttraction

    c. FAQPage for the city FAQ block (subject to deprecation caveat — see item 29).

15. [P0] /sources page — Article JSON-LD:
    ```json
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Sources and Editorial Policy",
      "datePublished": "2026-05-10",
      "dateModified": "2026-05-10",
      "author": {
        "@type": "Organization",
        "name": "YOUR SITE NAME",
        "url": "https://YOUR-DOMAIN.com"
      },
      "image": "https://YOUR-DOMAIN.com/og-default.jpg"
    }
    ```
    No fields are strictly required by Google, but headline + datePublished + author +
    image are strongly recommended for rich result eligibility.
    Source: https://developers.google.com/search/docs/appearance/structured-data/article

### Search Console Verification

16. [P0] Google Search Console: add the HTML meta tag to the root layout component:
    ```tsx
    <meta name="google-site-verification" content="YOUR_CODE_HERE" />
    ```
    Console: https://search.google.com/search-console

17. [P0] Bing Webmaster Tools: same approach, add Bing meta tag to root layout.
    URL: https://www.bing.com/webmasters

18. [P0] Yandex Webmaster: HTML meta tag (easiest) or DNS TXT record. Yandex takes up to
    one week to confirm ownership after the tag is live.
    URL: https://webmaster.yandex.com
    Source: https://searchfacts.com/yandex-webmaster-tools/

---

## B. Pre-Launch — Within First Week After Domain Goes Live

### Sitemap Submission

19. [P1] Google Search Console: Sitemaps report > enter
    https://YOUR-DOMAIN.com/sitemap.xml. No standalone submission API endpoint exists
    separate from the Search Console UI.
    Source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

20. [P1] Bing Webmaster Tools: left nav > Sitemaps > enter full sitemap URL.

21. [P1] Yandex Webmaster: Indexing > Sitemap files > add URL. The robot processes
    within two weeks of submission.
    Source: https://yandex.com/support/webmaster/en/indexing-options/sitemap.html

### IndexNow

22. [P1] Set up IndexNow. Generate a key (8-128 hex characters). Host the key file:
    create public/[YOUR-HEX-KEY].txt — Vite serves it at
    https://YOUR-DOMAIN.com/[YOUR-HEX-KEY].txt. Use the global endpoint for batch
    submission on every deploy:

    ```
    POST https://api.indexnow.org/indexnow
    Content-Type: application/json; charset=utf-8

    {
      "host": "YOUR-DOMAIN.com",
      "key": "YOUR-HEX-KEY",
      "urlList": [
        "https://YOUR-DOMAIN.com/",
        "https://YOUR-DOMAIN.com/city/beijing",
        "https://YOUR-DOMAIN.com/city/shanghai",
        "https://YOUR-DOMAIN.com/city/guangzhou",
        "https://YOUR-DOMAIN.com/city/shenzhen",
        "https://YOUR-DOMAIN.com/sources"
      ]
    }
    ```

    Participating engines (2026): Bing, Yandex, Naver, Seznam, Yep, Amazon.
    One POST to api.indexnow.org notifies all participants simultaneously.
    Source: https://www.indexnow.org/documentation
    Source: https://www.indexnow.org/faq

23. [P1] Automate the IndexNow ping as part of the Cloudflare Pages deploy. Add a
    postbuild script (Node.js fetch call) that fires the POST to api.indexnow.org after
    each successful build. Store the key as a Cloudflare Pages environment variable.

### hreflang

24. [P1] Add hreflang link tags to every page via PageMeta. Every language variant must
    self-reference AND reference all alternates (bidirectional requirement — if one side
    is missing, Google ignores the annotation):

    ```tsx
    <link rel="alternate" hreflang="en"
          href="https://YOUR-DOMAIN.com/city/beijing" />
    <link rel="alternate" hreflang="zh-Hans"
          href="https://YOUR-DOMAIN.com/zh/city/beijing" />
    <link rel="alternate" hreflang="x-default"
          href="https://YOUR-DOMAIN.com/city/beijing" />
    ```

    Use zh-Hans (not zh-CN) — this is what Google's own localization documentation
    uses for mainland Simplified Chinese content.
    Source: https://developers.google.com/search/docs/specialty/international/localized-versions
    Source: https://developers.google.com/search/blog/2013/04/x-default-hreflang-for-international-pages

25. [P1] If /zh/* routes do not exist yet, still add the hreflang pointing to the English
    canonical with x-default. This signals bilingual intent without breaking validation.
    Build actual /zh/* routes in Phase 1.5.

### Schema Validation

26. [P1] Test all JSON-LD with Google Rich Results Test before publishing any page:
    https://search.google.com/test/rich-results
    Test: homepage, one city page, /sources. Fix all "Invalid value" errors.

27. [P1] Cross-validate with the Schema.org validator: https://validator.schema.org
    This catches structural errors that the Rich Results Test may not surface.

### Core Web Vitals

28. [P1] Run PageSpeed Insights on mobile for each page: https://pagespeed.web.dev/
    Targets (75th-percentile thresholds per web.dev):
    - LCP <= 2.5 s
    - INP <= 200 ms
    - CLS <= 0.1
    - PageSpeed mobile score >= 85
    Do not launch until all 5 pages (home + 4 cities) pass mobile targets.

### FAQPage Deprecation Note

29. [P1] IMPORTANT: Google deprecated FAQPage rich results for non-government and
    non-health sites effective May 7, 2026. Our site is not government or health content,
    so FAQPage JSON-LD will not generate rich SERP snippets on Google. Keep the markup
    for Bing compatibility and entity disambiguation, but do not treat FAQ schema as a
    ranking lever. Redirect that effort to HowTo schema (item 46) which is not deprecated.
    Source: https://developers.google.com/search/docs/appearance/structured-data/faqpage

---

## C. Post-Launch — First Month

### Analytics

30. [P2] Enable Cloudflare Web Analytics (included free with Cloudflare). Cookie-free, no
    personal data collected, no consent banner required. Add the Cloudflare-provided
    beacon script tag to index.html. This covers page views, referrers, and country data.

31. [P2] For richer funnel data in Phase 2, self-host Umami on the Phase 2 VPS alongside
    the Hono+Bun API. Umami collects no personal data, sets no cookies, and does not
    transfer data to third parties — this avoids both GDPR and PIPL exposure.
    Do NOT install Google Analytics. GA transfers data to US servers; serving any visitor
    from mainland China while using GA creates PIPL cross-border data transfer risk.
    Source: https://scripts.nuxt.com/learn/privacy-first-analytics-compared

### Backlink Seeding

32. [P2] Wikipedia external links: find Wikipedia articles for Beijing, Shanghai, Guangzhou,
    Shenzhen tourism sections. Where our /sources page cites an official .gov.cn source
    that Wikipedia's article does not already reference, submit a citation edit. Wikipedia
    external link policy requires the link to verifiably support the cited claim — our
    official-source-only policy means every fact qualifies by definition.

33. [P2] Expat and travel forums: post a factual, non-promotional announcement in
    r/China, r/Chinavisa, Shanghai Expat, The Nanfang. Lead with the official-source
    differentiator. Do not frame it as "my website" — frame it as a resource.

34. [P2] Q&A sites: answer 5-10 specific questions on TripAdvisor forums, Lonely Planet
    Thorn Tree, Quora. Link only when the answer directly cites an official source and our
    page provides more detail than the inline answer can contain.

### Content Velocity

35. [P2] Minimum two content updates per month. Updates that signal freshness to Google:
    update dateModified in the Article JSON-LD, update lastmod in sitemap.xml, and change
    actual body copy (even a single verified-fact correction counts). Google uses <lastmod>
    only if it "consistently and verifiably reflects significant changes" — do not update
    it for cosmetic changes.
    Source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

36. [P2] Do not create new city pages beyond the 4 planned for Phase 1. Thin pages for
    Chengdu, Xi'an, etc. without the full 5-pillar structure will dilute domain authority.
    Expand only when a new city has complete 5-pillar content ready.

---

## D. Code-Level Changes in the React App

### Pre-Rendering / SSG Strategy

37. [P0] CRITICAL: The current setup uses react-router-dom (browser-router, CSR only).
    Each page ships as an empty <div id="root"> shell until JavaScript runs. Search engines
    that do not execute JS will see no content. Pre-rendering is required for SEO.

    Recommended path: switch to @react-router/dev (React Router 7 framework mode) with
    ssr: false + prerender: true in react-router.config.ts. This generates flat HTML files
    at build time with no runtime server, deployable directly to Cloudflare Pages.

    ```typescript
    // react-router.config.ts
    import type { Config } from "@react-router/dev/config";
    export default {
      ssr: false,
      prerender: true,
    } satisfies Config;
    ```

    Build output goes to build/client/ — deploy that directory to Cloudflare Pages.
    Source: https://reactrouter.com/how-to/pre-rendering

38. [P0] If migrating to @react-router/dev before launch is too disruptive, use
    vite-react-ssg as a faster interim. It wraps react-router-dom and produces pre-rendered
    HTML. Install: npm install vite-react-ssg.
    Source: https://github.com/Daydreamer-riri/vite-react-ssg
    Migration plan: vite-react-ssg now -> @react-router/dev framework mode in Phase 2.

### Meta Tags

39. [P0] Do NOT install react-helmet-async for a new React 19 project unless SSR context
    serialization or titleTemplate is needed. React 19 natively hoists <title>, <meta>,
    and <link> elements from component trees to <head>. Use the PageMeta component from
    item 11. No additional library needed.
    Caveat: React 19 native hoisting requires the component to render server-side or during
    pre-render. In a pure CSR build with no pre-rendering, crawlers see empty head tags.
    This is the second reason item 37 is P0.
    Source: https://medium.com/@ogundipe.eniola/react-19-updates-metadata-stylesheets-and-async-scripts-dd546191ff6c

### Image Pipeline

40. [P1] Add WebP conversion to the Vite build. Options: vite-plugin-imagemin or a custom
    sharp-based script run as a postbuild step. All JPG/PNG in src/assets/ should produce
    WebP equivalents. For public/ og:image files, export directly as WebP at source.

41. [P1] Add loading="lazy" to all <img> elements outside the above-the-fold zone. Add
    explicit width and height attributes to every <img>. Missing dimensions are a direct
    CLS source. Do NOT lazy-load the first visible image on any page — lazy-loading the
    hero image delays LCP.

### Critical CSS

42. [P1] Tailwind v4 + Vite already tree-shakes unused CSS. For above-the-fold LCP
    improvement, add vite-plugin-critical to inline critical CSS for city page hero
    sections. Enable CSS code splitting: build.cssCodeSplit is true by default in Vite.

### Lazy-Loading

43. [P1] Audit current lazy-loading. Map3D and EarthIntro are already lazy (correct).
    Additionally lazy-load: city-page pillar sections below the fold, /share form
    components, /ask form components. Do NOT lazy-load: site header, nav, above-the-fold
    hero, or JSON-LD script tags (schema must be in initial pre-rendered HTML).

### Font Loading

44. [P1] If using any external font CDN (Google Fonts, etc.), replace with self-hosted
    fonts in public/fonts/ with font-display: swap. Add a preload hint in index.html:

    ```html
    <link rel="preload" href="/fonts/your-font.woff2"
          as="font" type="font/woff2" crossorigin />
    ```

    Self-hosted fonts eliminate one third-party DNS lookup, directly improving LCP on
    first visit.

---

## E. Content Patterns to Adopt

### FAQ Q&A Per Pillar

45. [P1] Each pillar section (visa, payments, transport, food, emergency) within a city
    page should include 3-5 FAQ items as visible question/answer pairs in the DOM.
    Even though FAQPage rich results are deprecated for non-gov sites (item 29), the
    Q&A format increases dwell time, matches voice-search query patterns, and supports
    Bing FAQ display. Mark up with FAQPage JSON-LD per item 14c.

### HowTo Schema for Practical-Pitfalls Block

46. [P1] The practical-pitfalls block maps naturally to HowTo schema. Each pitfall is a
    procedural step the traveller navigates. HowTo rich results are NOT deprecated as of
    May 2026 and appear for non-authoritative sites.

    ```json
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to set up Alipay as a foreign tourist in China",
      "step": [
        { "@type": "HowToStep", "position": 1,
          "name": "Prepare documents",
          "text": "Have your passport and a non-Chinese phone number ready." },
        { "@type": "HowToStep", "position": 2,
          "name": "Download the Alipay app",
          "text": "Download from the App Store or Google Play outside China." }
      ]
    }
    ```

### Date Stamps

47. [P1] Add a visible "Last verified: YYYY-MM-DD" line to each pillar section. This is
    both a user trust signal and a crawl-freshness signal. Implement as a per-pillar
    metadata field in the data layer, not a hardcoded string. Update dateModified in
    Article JSON-LD to match on every content revision.

### Author / Editorial Team Page

48. [P2] Create /about (or /editorial) with: named contributors, a description of the
    editorial policy (official-source-only + community verification for pitfalls), how
    facts are reviewed and when they are updated, and a contact email. Link from site
    footer and from /sources. This is a Google E-E-A-T signal.
    Add Person schema for each named contributor:
    ```json
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Contributor Name",
      "url": "https://YOUR-DOMAIN.com/about#contributor-name"
    }
    ```
    Source: https://www.lsdigital.com/blog/e-e-a-t-guidelines-2025/

---

## F. Anti-Patterns to Avoid

49. Do not keyword-stuff URL slugs. /city/beijing is correct.
    /city/beijing-china-travel-guide-visa-tips is keyword stuffing and provides no modern
    ranking benefit. Keep URL segments short.

50. Do not clone boilerplate across city pages and change only the city name. Google
    quality rater guidelines flag templated thin content as low quality. Each city page
    must contain city-specific facts — Beijing's 144-hour transit visa conditions differ
    from Shanghai's; this difference must be explicit in the copy.

51. Do not add affiliate links, hotel widgets, or tour booking CTAs. A single affiliate
    link is enough to trigger commercial intent classification, which degrades trust
    signals on information-seeking queries — our core competitive position.

52. Do not render canonical, hreflang, or JSON-LD tags only via JavaScript if the page
    is not pre-rendered. Client-side-only meta has no effect on search engines that
    inspect the raw HTML response. Pre-rendering (item 37) must ship before any meta
    investment has SEO value.

53. Do not set noindex on city pages during development. Use a Cloudflare Pages access
    policy or a password on the preview URL instead. Accidental noindex can take weeks
    to reverse in search engine indexes.

---

## G. 90-Day SEO Roadmap

### Honest Baseline Expectation

A brand-new domain with zero backlinks should not expect page-1 rankings on competitive
head terms ("China travel guide", "Beijing tourist") within 90 days. Realistic 90-day
goals:
- Indexed in Google, Bing, Yandex: achievable in days 7-14 via IndexNow + sitemap
- BreadcrumbList and HowTo snippets visible in SERP: 4-8 weeks after indexing
- Page 1 for specific long-tail queries ("144-hour transit visa Beijing requirements",
  "Alipay setup foreign tourist China"): 30-60 days if content matches search intent
- Page 1 for mid-tail queries ("Beijing travel guide for tourists"): 6-12 months
- Meaningful organic traffic: month 2-3 at the earliest

### Week-by-Week Plan

**Week 1 — Day-1 launch prep**
- Item 1: Register domain
- Items 2-4: Cloudflare DNS, HTTPS, initial HSTS config
- Items 5-6: public/robots.txt + sitemap generation script
- Items 8-9: 404 (NotFound) page + root ErrorBoundary
- Item 11: PageMeta component
- Item 12: Produce 5 og:image assets (1200x630)
- Items 13-15: Add all JSON-LD blocks to homepage, city pages, /sources
- Items 16-18: Add Google, Bing, Yandex verification meta tags
- Items 37-38: Implement pre-rendering (do not skip — this is the structural blocker)

**Week 2 — Go live and submit**
- Items 19-21: Submit sitemap.xml to Google Search Console, Bing, Yandex
- Items 22-23: IndexNow key file + first batch ping + deploy hook automation
- Items 24-25: hreflang tags in PageMeta for all pages
- Items 26-27: Validate all schema with Rich Results Test and schema.org validator
- Item 28: PageSpeed Insights pass on mobile (fix any CLS/LCP blockers first)
- Item 30: Enable Cloudflare Web Analytics
- Item 39: Verify React 19 meta hoisting is present in pre-rendered HTML output

**Week 3 — Performance**
- Item 40: WebP image pipeline in Vite build
- Item 41: img loading="lazy" audit + explicit width/height on every image
- Item 42: Critical CSS inlining with vite-plugin-critical
- Item 43: Lazy-load audit for below-fold pillar sections
- Item 44: Self-host fonts + preload link in index.html
- Item 45: Add 3-5 FAQ Q&A pairs to each pillar section on all 4 city pages
- Item 46: HowTo schema on practical-pitfalls blocks (Beijing as pilot, then roll out)
- Item 47: "Last verified" date stamps on each pillar section

**Week 4 — Authority signals**
- Item 7: Verify bilingual sitemap with xhtml:link hreflang entries is generating correctly
- Item 32: Wikipedia citation submissions for verifiable official-source facts
- Item 33: Expat/travel forum announcements (target: r/China, r/Chinavisa, ShanghaiExpat)
- Item 34: Answer 5-10 specific questions on Quora / TripAdvisor forums with source links
- Item 46: Roll HowTo schema to remaining 3 city pages if Beijing pilot looks clean

**Month 2 — E-E-A-T and content depth**
- Item 48: Build /about editorial page with Person schema for contributors
- Item 35: First content update cycle — update dateModified on all reviewed pages
- Items 49-53: Audit all city pages against anti-pattern checklist
- Check Search Console Coverage report for "Crawled — currently not indexed" pages;
  improve thin content on any flagged pages
- Review IndexNow HTTP response logs — confirm 200 OK from api.indexnow.org on deploys

**Month 3 — Measure and iterate**
- Pull first search performance data from Search Console (Queries, Impressions, Position)
- Identify long-tail queries already ranking positions 11-30 — expand those pillar
  sections with more specific official-source content to move them to page 1
- For any page with high impressions but low CTR: rewrite <title> and meta description
  to match the actual query intent visible in Search Console data
- If Chinese-language query impressions appear in Search Console, begin scoping
  Phase 1.5 /zh/* routes

---

## Source Reference Index

The following URLs are cited throughout this document:

1. Google Sitemaps guide:
   https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
2. Google hreflang localized versions:
   https://developers.google.com/search/docs/specialty/international/localized-versions
3. Google FAQPage structured data (includes deprecation notice effective May 7, 2026):
   https://developers.google.com/search/docs/appearance/structured-data/faqpage
4. Google BreadcrumbList structured data:
   https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
5. Google Article structured data:
   https://developers.google.com/search/docs/appearance/structured-data/article
6. Google Organization structured data:
   https://developers.google.com/search/docs/appearance/structured-data/organization
7. Google robots.txt introduction:
   https://developers.google.com/search/docs/crawling-indexing/robots/intro
8. Schema.org TouristAttraction:
   https://schema.org/TouristAttraction
9. Core Web Vitals thresholds:
   https://web.dev/articles/vitals
10. IndexNow documentation:
    https://www.indexnow.org/documentation
11. IndexNow FAQ (participating engines list):
    https://www.indexnow.org/faq
12. Google Rich Results Test:
    https://search.google.com/test/rich-results
13. Cloudflare HSTS configuration:
    https://developers.cloudflare.com/ssl/edge-certificates/additional-options/http-strict-transport-security/
14. Cloudflare Pages _headers file:
    https://developers.cloudflare.com/pages/configuration/headers/
15. React Router 7 pre-rendering:
    https://reactrouter.com/how-to/pre-rendering
16. vite-react-ssg (interim SSG option):
    https://github.com/Daydreamer-riri/vite-react-ssg
17. React 19 native metadata hoisting:
    https://medium.com/@ogundipe.eniola/react-19-updates-metadata-stylesheets-and-async-scripts-dd546191ff6c
18. OG image size guide 2026:
    https://myogimage.com/blog/og-image-size-meta-tags-complete-guide
19. Yandex sitemap submission documentation:
    https://yandex.com/support/webmaster/en/indexing-options/sitemap.html
20. Yandex Webmaster verification guide:
    https://searchfacts.com/yandex-webmaster-tools/
21. Google hreflang x-default announcement:
    https://developers.google.com/search/blog/2013/04/x-default-hreflang-for-international-pages
22. China domain/ICP regulations:
    https://www.markmonitor.com/blog/how-domain-names-are-regulated-in-china-administration-of-the-internet/
23. Google E-E-A-T author/editorial guidance 2025:
    https://www.lsdigital.com/blog/e-e-a-t-guidelines-2025/
24. Privacy-first analytics comparison (Umami / Plausible / Cloudflare):
    https://scripts.nuxt.com/learn/privacy-first-analytics-compared
25. Bing Webmaster Tools:
    https://www.bing.com/webmasters
26. Google Search Console:
    https://search.google.com/search-console
