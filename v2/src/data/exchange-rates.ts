export const sourceCurrencies = ["USD", "EUR", "JPY", "GBP", "KRW", "AUD", "CAD", "HKD"] as const;

export type SourceCurrency = (typeof sourceCurrencies)[number];

export type ExchangeRate = {
  code: SourceCurrency;
  name: string;
  rateToCny: number;
};

export const exchangeRateBaseline = {
  lastUpdated: "2026-05-12",
  rates: {
    USD: { code: "USD", name: "US dollar", rateToCny: 7.23 },
    EUR: { code: "EUR", name: "Euro", rateToCny: 7.85 },
    JPY: { code: "JPY", name: "Japanese yen", rateToCny: 0.047 },
    GBP: { code: "GBP", name: "British pound", rateToCny: 9.25 },
    KRW: { code: "KRW", name: "South Korean won", rateToCny: 0.0052 },
    AUD: { code: "AUD", name: "Australian dollar", rateToCny: 4.72 },
    CAD: { code: "CAD", name: "Canadian dollar", rateToCny: 5.21 },
    HKD: { code: "HKD", name: "Hong Kong dollar", rateToCny: 0.93 }
  },
  disclaimer: {
    en: "For reference only. Banks and ATMs use their own rates with a 1-3% spread.",
    zh: "仅供参考。银行和 ATM 使用自己的汇率，并通常包含 1-3% 点差。"
  }
} as const satisfies {
  lastUpdated: string;
  rates: Record<SourceCurrency, ExchangeRate>;
  disclaimer: {
    en: string;
    zh: string;
  };
};
