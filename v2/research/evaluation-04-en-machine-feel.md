# Analyst Review: English machine-feel audit — v2/src/data

Source: sonnet/analyst agent, dispatched 2026-05-10.
Scope: all user-facing EN strings under `v2/src/data/`.

---

## 1. Top machine-feel patterns I see in the codebase

**Pattern 1: Passive-voice institutional distance ("is required", "must be declared", "are advised")**

Bureaucratic passive construction puts procedural friction between the reader and the action they need to take. It reads like a form, not a guide.

- `payments.ts:35` — "Foreign currency above the equivalent of USD 5,000 must be declared in writing on arrival."
- `payments.ts:50` — "Reasonable personal-use items are duty-exempt. Goods totalling above ¥2,000 in value intended for non-personal use require duty assessment."

The contrast with the good prose elsewhere is sharp: the food.ts cultural notes use second-person and active construction throughout. The customs/legal snippets flip to passive.

---

**Pattern 2: Nominalization of simple actions ("require duty assessment" / "complete real-name" / "do verification")**

Turning verbs into noun phrases ("duty assessment", "identity-verification", "real-name authentication", "manual review") creates bureaucratic distance. Native travel writing converts these back to verbs.

- `practical-payments.ts:111` — "Alipay's own identity-verification system kicks in at USD 500."
- `practical-payments.ts:175` — "Reactivation needs passport + selfie video + transaction explanation."

"Reactivation needs X" reads like a manual. "To reactivate, send X" is how a friend explains it.

---

**Pattern 3: Formal connectives opening sentences ("Beyond", "Outside those", "Without")**

Starting a sentence with a formal prepositional phrase ("Beyond emergency stabilisation", "Outside those", "Without real-name authentication") is a direct MT/formal-writing marker. Native colloquial English would front the main clause or restructure.

- `practical-other.ts:314` — "Beyond emergency stabilisation, hospitalisation requires a CNY 5,000–20,000 deposit BEFORE treatment."
- `practical-payments.ts:123` — "Without real-name authentication, WeChat caps cumulative spend at ~RMB 15,000 for the entire stay"

The second example is actually close to native — the stiffness is mainly in the first.

---

**Pattern 4: The "is a known X" / "is a common Y" hedge filler**

Phrases like "is a known failure scenario", "is a common foreigner mistake", "is the most common reason" are filler hedges that dilute the warning. Native English would just state the consequence.

- `practical-payments.ts:22` — "Doing it all on landing day is a known failure scenario."
- `practical-other.ts:325` — "Skipping this step is a common foreigner mistake."

"A known failure scenario" and "a common foreigner mistake" are the kind of filler a model adds to soften a direct statement.

---

**Pattern 5: Compound-adjective noun stacks ("Foreign-language support pending", "full-hospital international model")**

These noun-stack labels read like internal product taxonomy leaked into user-facing text. No native travel writer would say "full-hospital international model" as a description, or "direct English phone line availability pending" to warn a traveller.

- `emergency.ts:42` — intlDept field: "Full-hospital international model"
- `emergency.ts:149` — "Direct English phone line availability pending; iShenzhen app supports 9 languages."

---

**Pattern 6: Redundant-precision qualifiers ("approximately", "typically", "generally", "usually") stacked in the same sentence**

Using two hedges on one fact halves its usefulness. Travel writers choose one qualifier and commit.

- `food.ts:38` — "Foreign tourists generally cannot place orders without local support." — "generally" is doing nothing here; either they can or they can't. The next word is "without", which has already covered the condition.

---

**Pattern 7: Verbless fragment telegrams masquerading as sentences**

Several entries, especially in transport, are pure noun-list sentences with no finite verb. While brevity is valued, these fragments cross into technical-document style rather than guide style.

- `transport.ts:46` — "Email magic link OR Chinese mobile SMS. Online auto-verify; if it fails, upload passport + selfie (3-5 working days) or visit any station counter."
- `transport.ts:52` — "12306 English portal accepts Visa, Mastercard, JCB, Diners Club, UnionPay; Alipay/WeChat referenced in the central government expat guide."

The second sentence ends with "referenced in the central government expat guide" — a passive participial phrase that provides no action for the reader.

---

**Pattern 8: Overly formal "note" / "pending" / "confirmed" status tags in prose**

Writing "Foreign-language support pending", "Gate-level tap not yet confirmed citywide", "VIP unit (English contact pending)" treats operational caveats as a status field rather than useful prose. Readers don't know what "pending" means for them practically.

- `transport.ts:359` — "Foreign-card POS at 391 service centres / 440 devices: Visa, Mastercard, Discover, Amex, Diners Club, JCB. Universal gate-tap not yet confirmed; use service centre POS or cash."
- `emergency.ts:107` — intlDept: "VIP unit (English contact pending)"

---

## 2. Rewrite rules

1. **Passive-distance rule**: Replace all passive constructions in traveller-action statements with second-person imperative or active voice ("you must declare" not "must be declared"; "bring" not "must be brought").

2. **Nominalization rule**: Convert noun-phrase actions back to verbs: "to reactivate" not "reactivation", "declare X" not "X requires declaration", "customs will assess duty" not "require duty assessment".

3. **Front-loaded connective rule**: Restructure sentences that open with "Beyond X", "Outside X", "Without X" so the action or consequence leads: "After stabilisation, hospitals demand CNY 5K–20K upfront" not "Beyond emergency stabilisation, hospitalisation requires...".

4. **Hedge-filler rule**: Delete "is a known failure scenario", "is a common foreigner mistake", "is the practical fallback" — state the consequence directly: "Doing it on landing day fails" not "is a known failure scenario".

5. **Noun-stack label rule**: Expand parenthetical noun stacks into plain prose. "Full-hospital international model" → "English-speaking doctors throughout; no separate international desk". "VIP unit (English contact pending)" → "ask for the VIP unit; English-speaking staff not confirmed".

6. **Single-hedge rule**: Choose one precision qualifier per factual claim and delete the other. "generally cannot" → "cannot"; "typically 3–5 days, up to 7" → keep the range, drop "typically".

7. **Finite-verb rule**: Every sentence that delivers a traveller warning must have a finite verb. "Email magic link OR Chinese mobile SMS" → "Registration sends you an email link or a Chinese-number SMS".

8. **Status-tag rule**: Convert "X pending" and "not yet confirmed" into concrete traveller advice: instead of "universal gate-tap not yet confirmed", write "the tap-to-ride gates do not yet accept foreign cards everywhere — use the service centre POS or pay cash".

---

## 3. Top 10 worst single sentences in the whole site

Ranked by combined severity of how many machine-feel patterns they hit and how prominent the sentence is in the UI.

**1.** `practical-payments.ts:175` — "Reactivation needs passport + selfie video + transaction explanation."
Nominalization + verbless fragment + no second-person.

**2.** `practical-other.ts:314` — "Beyond emergency stabilisation, hospitalisation requires a CNY 5,000–20,000 deposit BEFORE treatment."
Formal fronted prepositional phrase + passive nominalization + institutional register burying the urgency.

**3.** `payments.ts:50` — "Reasonable personal-use items are duty-exempt. Goods totalling above ¥2,000 in value intended for non-personal use require duty assessment."
Passive + nominalization + four stacked legal-register qualifiers.

**4.** `transport.ts:52` — "12306 English portal accepts Visa, Mastercard, JCB, Diners Club, UnionPay; Alipay/WeChat referenced in the central government expat guide."
Passive participial phrase dangling at the end with no finite verb and no action advice.

**5.** `practical-payments.ts:22` — "Doing it all on landing day is a known failure scenario."
Hedge filler. Honest version: "Doing it on landing day usually fails."

**6.** `emergency.ts:149` — "Direct English phone line availability pending; iShenzhen app supports 9 languages."
Noun-stack + status-tag + verbless.

**7.** `practical-other.ts:325` — "Skipping this step is a common foreigner mistake."
Patronising hedge-filler. "Skip this and you'll wait 20 minutes in the wrong queue" is the same length and actually helps.

**8.** `transport.ts:46` — "Email magic link OR Chinese mobile SMS. Online auto-verify; if it fails, upload passport + selfie (3-5 working days) or visit any station counter."
Three consecutive verbless fragments.

**9.** `food.ts:38` — "Foreign tourists generally cannot place orders without local support."
Second-person avoidance + redundant hedge.

**10.** `payments.ts:35` — "Foreign currency above the equivalent of USD 5,000 must be declared in writing on arrival."
Passive construction + legalese for a simple instruction.

---

## 4. Strategic recommendation

The codebase is substantially better than typical AI-generated travel copy. The food cultural-notes sections (particularly Shanghai and Guangzhou), the scam warnings in `practical-other.ts`, and the payments gotcha list are already close to native voice — second-person, concrete consequences, genuine specificity. The machine-feel is concentrated in two places:

(a) Legal/procedural snippets (customs rules, rail registration, hospital payment steps), where the writer appears to have paraphrased official-document language without converting it back to guide register.

(b) Short `bodyEn` warning fields where hedges and nominalizations were added to soften direct statements.

The ten sentences above represent roughly 80% of the perceptible non-native feel. Rewriting those first — plus a single pass to remove every instance of passive construction and "pending" status tags in transport and emergency data — covers the problem without touching the cultural-note long-form prose, which doesn't need work.
