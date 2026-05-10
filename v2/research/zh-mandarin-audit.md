# zh Mandarin Copy Audit

Scope: all current `.ts` and `.tsx` files under `v2/src`.

Rules applied: converted regional dialect, northern colloquial phrasing, Cantonese/HK-style borrowed wording outside proper cultural nouns, and informal web/community wording into standard Putonghua / modern written Chinese. English strings, identifiers, type names, and entry counts were not intentionally changed by this audit. Research source notes were not edited.

Build verification: `npm run build` from `v2` passed. Vite emitted only the existing large-chunk warning.

## Files Touched

| File | Chinese strings rewritten |
| --- | ---: |
| `components/city/CityIntro.tsx` | 7 |
| `components/common/CityFurtherReading.tsx` | 1 |
| `components/common/PracticalBlock.tsx` | 3 |
| `components/common/SourcesNote.tsx` | 1 |
| `components/pillar/FoodGuide.tsx` | 3 |
| `components/pillar/PaymentsPractical.tsx` | 2 |
| `components/pillar/TransportGuide.tsx` | 3 |
| `components/pillar/VisaChecker.tsx` | 1 |
| `components/policy/TravelAlerts.tsx` | 1 |
| `data/atlas.ts` | 1 |
| `data/city-attractions.ts` | 19 |
| `data/city-tourism-portals.ts` | 2 |
| `data/emergency.ts` | 3 |
| `data/food.ts` | 12 |
| `data/i18n.ts` | 1 |
| `data/payments.ts` | 2 |
| `data/phase2-preview.ts` | 12 |
| `data/practical-other.ts` | 53 |
| `data/practical-payments.ts` | 24 |
| `data/top-questions.ts` | 5 |
| `data/transport.ts` | 10 |
| `pages/AskPage.tsx` | 6 |
| `pages/CityPage.tsx` | 1 |
| `pages/SharePage.tsx` | 4 |
| `pages/SourcesPage.tsx` | 2 |

Total rewritten Chinese strings: 179.

Also reviewed: `components/city/CuisineDrawer.tsx`; its Chinese UI labels were already standard and required no source rewrite.

## Representative Before / After

1. `data/city-attractions.ts`
   - Before: `老外公认首选的长城段`
   - After: `许多外籍游客首选的长城段`

2. `data/practical-other.ts`
   - Before: `T3 询问台附近有人冒充工作人员专挑老外报 3–4 倍价。`
   - After: `T3 询问台附近有人冒充工作人员，专向外籍旅客报 3–4 倍价格。`

3. `pages/SharePage.tsx`
   - Before: `写下你的真实经历——什么有用、什么坑、出发前希望知道的事…`
   - After: `写下你的真实经历——哪些信息有用、遇到哪些问题、出发前希望知道的事…`

4. `data/practical-payments.ts`
   - Before: `微信支付能用归能用，但微信里那个 Didi / 美团 / 饿了么小程序要求注册时填 +86 中国号，外国号注册不进。`
   - After: `即使微信支付可用，微信内 Didi / 美团 / 饿了么小程序注册时仍要求填写 +86 中国手机号，外国手机号无法注册。`

5. `data/food.ts`
   - Before: `粤菜是一整天的节奏。早茶（字面 "饮茶"）天蒙蒙亮就开始——一家三代围一桌，点心车一轮一轮推，闲聊一上午。`
   - After: `粤菜贯穿一天的餐饮节奏。早茶（即 "饮茶"）清晨开始，常见一家三代围坐一桌，点心车不断推过，聊天可持续整个上午。`

## Kept Terms

Kept legitimate cultural or official terms where appropriate: `早茶`, `饮茶`, `茶餐厅`, `烧味`, `客家菜`, `胡同`, `大众点评`, `沙面`, official place names, dish names, road names, and established cross-strait/common Chinese terms.

