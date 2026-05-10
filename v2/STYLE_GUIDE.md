# English Travel Copy Style Guide — China for Foreign Visitors

Goal: read like a clear native travel editor, not a translated brochure or AI draft.
Source: synthesis of codex external-voice research (Lonely Planet / NYT Travel / Atlas Obscura / Time Out / Condé Nast Traveler) + sonnet audit of `v2/src/data/` actual EN strings.

---

## 1. Anti-patterns we actually have in this codebase

These are the four problems sonnet confirmed in our own files. Rules are imperative and mechanical.

**A. Passive institutional distance** — `must be declared`, `are advised`, `is required`
Rule: rewrite as second-person imperative or active voice. Passive is fine only for history (`was built`, `was restored`).
Example: `payments.ts:35` "Foreign currency above the equivalent of USD 5,000 must be declared in writing on arrival." → "Declare any foreign cash above USD 5,000 equivalent when you land. Customs gives you a paper form."

**B. Nominalization of simple actions** — `reactivation needs`, `require duty assessment`, `identity-verification system`
Rule: convert noun-phrase actions back to verbs. `to reactivate` not `reactivation`; `declare X` not `X requires declaration`.
Example: `practical-payments.ts:175` "Reactivation needs passport + selfie video + transaction explanation." → "To reactivate, send your passport, a selfie video, and a one-line explanation of the flagged transaction."

**C. Formal sentence-fronting** — `Beyond X,` `Without X,` `In addition,` `Furthermore`
Rule: lead with the action or consequence; cut connectors in short tourism copy (max one per page).
Example: `practical-other.ts:314` "Beyond emergency stabilisation, hospitalisation requires a CNY 5,000–20,000 deposit BEFORE treatment." → "Hospitals stabilise you first, then ask for a CNY 5,000–20,000 deposit before any non-emergency treatment. Have funds ready."

**D. Hedge fillers** — `is a known failure scenario`, `is a common foreigner mistake`, `is the practical fallback`
Rule: state the consequence directly. Same length, more punch.
Example: `practical-payments.ts:22` "Doing it all on landing day is a known failure scenario." → "Try to set this up before you land. Doing it on arrival day usually fails."

## 2. Anti-patterns to keep avoiding (codex's brochure-Chinglish list)

We don't have these now — guard against drift in future strings:

- **Couplet symmetry**: "history and modernity, nature and humanity"
- **Floating subject**: "Here has many snacks", "There has..."
- **Empty formal verbs**: `conduct / perform / utilize / facilitate`
- **Adjective stack**: "famous beautiful ancient cultural street"
- **Inflated superlatives**: `world-famous / must-see / profound` without proof
- **Universal enjoy/experience**: "experience the local food culture"
- **Back-translated idioms**: `deeply loved by tourists`, `enjoy high reputation`
- **It-cleft overuse**: "It is in Chengdu that you can taste hotpot"
- **Definite-article drift**: "the tourists", "the Alipay"

## 3. Site-wide anti-patterns sonnet found that aren't on codex's list

Specific to our procedural sections:

- **Status-tag prose**: `Foreign-language support pending`, `Universal gate-tap not yet confirmed citywide`. Convert to action: "the tap-to-ride gates don't accept foreign cards everywhere yet — use the service-centre POS or pay cash."
- **Verbless fragment telegrams**: `Email magic link OR Chinese mobile SMS. Online auto-verify; if it fails, upload passport...`. Every traveller-warning sentence needs a finite verb.
- **Compound-adjective noun stacks**: `Full-hospital international model`. Expand to plain prose: "English-speaking doctors throughout, no separate international desk."

## 4. Native travel-writer voice we're aiming for

From codex's source pattern reading:

| Outlet | Lead pattern |
|---|---|
| Lonely Planet | Why the place matters → motion verbs (get lost, marvel, feast) |
| NYT 36 Hours | What's changing now → exact logistics (transport, distance, price) |
| Atlas Obscura | Strange concrete physical detail first → history second |
| Time Out | Conversational, mild personality, short punch lines |
| Condé Nast | Polished but anchored in price / texture / setting |

**Targets for our copy:**

- Opening sentence: place + contrast/surprise/practical reason. Avoid `Located in...`
- Sentence length: 12–24 words. One longer is OK if followed by a short one.
- Paragraph rhythm: 2–4 sentences. Scene → useful detail → action or caveat.
- Verb shortlist: `walk, scan, book, climb, slurp, board, tap, wander, duck into, look for`.
- Person: `you` for instructions, `travelers` for general facts. Never `the tourists`.
- Active/passive: ≥80% active. Passive OK for history/construction/restoration/official rules.
- Second person: 0–1 `you` per attraction card; 1–2 in practical tips. Imperatives often cleaner.

## 5. Mechanical detection checklist

Run this on every EN string before publishing:

1. No sentence over 32 words.
2. No more than two adjectives before a noun.
3. No `conduct / perform / utilize / facilitate / deeply loved / enjoy high reputation`.
4. No `Here has...`, `There has...`, or `the tourists`.
5. No sentence starting with `It is ... that` unless contrast is intentional.
6. Max one formal connector per page (`furthermore`, `moreover`, `in addition`).
7. Every attraction or food card has at least one concrete detail: dish, street, view, time, app, price, route.
8. Practical tips use imperative verbs: `Book`, `Bring`, `Scan`, `Ask`, `Arrive`.
9. Every passive sentence is about history, construction, restoration, or official rules.
10. No `pending` or `not yet confirmed` as a status tag in user-facing prose — rewrite as concrete advice.

## 6. The 10 worst sentences in the site right now (acid test)

Sonnet ranked these from the actual codebase. Rewriting them is the first wave.

1. `practical-payments.ts:175` — "Reactivation needs passport + selfie video + transaction explanation."
2. `practical-other.ts:314` — "Beyond emergency stabilisation, hospitalisation requires a CNY 5,000–20,000 deposit BEFORE treatment."
3. `payments.ts:50` — "Reasonable personal-use items are duty-exempt. Goods totalling above ¥2,000 in value intended for non-personal use require duty assessment."
4. `transport.ts:52` — "12306 English portal accepts Visa, Mastercard, JCB, Diners Club, UnionPay; Alipay/WeChat referenced in the central government expat guide."
5. `practical-payments.ts:22` — "Doing it all on landing day is a known failure scenario."
6. `emergency.ts:149` — "Direct English phone line availability pending; iShenzhen app supports 9 languages."
7. `practical-other.ts:325` — "Skipping this step is a common foreigner mistake."
8. `transport.ts:46` — "Email magic link OR Chinese mobile SMS. Online auto-verify; if it fails, upload passport + selfie..."
9. `food.ts:38` — "Foreign tourists generally cannot place orders without local support."
10. `payments.ts:35` — "Foreign currency above the equivalent of USD 5,000 must be declared in writing on arrival."

## 7. Strategic plan

Per sonnet's audit, the cultural-notes prose (food culture drawer, scam warnings in `practical-other.ts`, payments gotcha list) is already close to native voice. The machine-feel concentrates in legal/procedural snippets and short `bodyEn` warnings.

Two-phase fix, total ~30–40 strings rewritten:

**Phase 1** — rewrite the 10 acid-test sentences above, validate the rules.
**Phase 2** — global sweep:
  - all passive constructions in `transport.ts`, `payments.ts`, `emergency.ts`, `practical-payments.ts`, `practical-other.ts` procedural fields → second-person imperative
  - all `pending` / `not yet confirmed` status tags → concrete advice
  - all sentence-front `Beyond` / `Without` / `In addition` → restructure

**Leave alone**: `food.ts` cultural notes, scam-warning narrative, all `whyEn` attraction descriptions (already audited by sonnet, none in worst-10).

## 8. Future translation languages (JA / DE / RU)

When this site grows: each language gets a native-speaker review pass before publish. No direct character-by-character translation. Same anti-pattern audit per language (each language has its own brochure-tells).
