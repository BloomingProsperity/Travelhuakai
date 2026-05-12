# Evaluation 04 — Rewrites Applied

## 10 Acid-Test Rewrites

1. `practical-payments.ts` (alipay-3month-freeze) — "If you don't open Alipay for about three months"
2. `practical-other.ts` (emerg-cash-deposit) — "Hospitals will stabilise you in the ER, then ask"
3. `payments.ts` (personal-goods) — "Personal-use items you're bringing for yourself clear customs"
4. `transport.ts` (railBooking.payment) — "The 12306 English portal accepts Visa, Mastercard, JCB"
5. `practical-payments.ts` (timing) — "KYC can take a full day, WeChat may need a friend"
6. `emergency.ts` (cityHotlines shenzhen) — "The 0755-12345 hotline may not route to a live English"
7. `practical-other.ts` (emerg-medical-card) — "New patients can't walk in directly. Go to the registration"
8. `transport.ts` (railBooking.registration) — "Register at 12306.cn/en using your passport. You'll get"
9. `food.ts` (beijing deliveryNote) — "Meituan and Ele.me both require a Chinese mobile number"
10. `payments.ts` (foreign-cash) — "Declare any foreign cash above the USD 5,000 equivalent"

## Global-Sweep Edits (12 additional changes)

- `transport.ts`: Beijing airport shuttle "Cash; foreign card support pending" → concrete advice
- `transport.ts`: Shanghai Airport Link costCNY "fare pending" → "fare not yet published"
- `transport.ts`: Guangzhou intercity rail costCNY "fare pending" → "fare not yet published"
- `transport.ts`: Shenzhen metro paymentEn "gate-tap pending" → concrete workaround
- `transport.ts`: Shenzhen metro summaryEn "Universal gate-tap not yet confirmed" → concrete advice
- `transport.ts`: Shenzhen pitfall "not yet confirmed citywide" → direct instruction
- `emergency.ts`: 122 traffic police "Foreign-language support pending" → concrete redirect
- `emergency.ts`: Shenzhen People's Hospital intlDept "English contact pending" → actionable
- `emergency.ts`: "Full-hospital international model" (3 instances) → "English-speaking doctors throughout; no separate international desk"
- `practical-other.ts`: "is the practical fallback" (Trip.com) → active construction
- `practical-other.ts`: "Without direct-billing insurance" sentence-front → action-led rewrite
- `payments.ts`: RMB cash rule "must be remitted via banking channels" → active voice
- `payments.ts`: preArrivalChecklist "must be declared on the arrival form" → imperative
- `practical-payments.ts`: "Without real-name authentication" sentence-front → action-led rewrite

Total global-sweep edits: 14

## Rules Bent or Noted

- `costCNY` fields are short data labels, not prose sentences — "fare not yet published — check operator site" bends the no-status-tag rule slightly, but is the best option without fabricating a price. The zh fields were left untouched (out of scope).
- The 122 traffic police `noteZh` was left unchanged (zh fields are out of scope per brief).
- `top-questions.ts` contains "must be declared" but is outside the declared scope files — left untouched.
- Build: `npx tsc --noEmit` — zero errors, zero warnings.
