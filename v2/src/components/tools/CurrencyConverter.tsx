"use client";

import { useMemo, useState } from "react";
import {
  exchangeRateBaseline,
  sourceCurrencies,
  type SourceCurrency
} from "../../data/exchange-rates";

const formatCny = (value: number) =>
  `¥${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })} CNY`;

const formatRate = (value: number) =>
  value.toLocaleString("en-US", {
    minimumFractionDigits: value < 0.01 ? 4 : 2,
    maximumFractionDigits: value < 0.01 ? 4 : 3
  });

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("100");
  const [currency, setCurrency] = useState<SourceCurrency>("USD");

  const numericAmount = Number.parseFloat(amount);
  const rate = exchangeRateBaseline.rates[currency].rateToCny;
  const converted = Number.isFinite(numericAmount) && numericAmount > 0 ? numericAmount * rate : 0;

  const currencyOptions = useMemo(
    () => sourceCurrencies.map((code) => exchangeRateBaseline.rates[code]),
    []
  );

  return (
    <section className="flex flex-col gap-4 rounded-xl border border-line bg-white p-5 shadow-sm">
      <header className="flex flex-col gap-1">
        <span className="text-xs font-bold uppercase tracking-widest text-muted">
          Payments tool
        </span>
        <h2 className="text-2xl font-bold leading-tight">Currency converter / 货币换算</h2>
        <p className="text-sm leading-relaxed text-muted">
          Rates updated periodically; verify at bank before transactions.
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_12rem]">
        <label className="flex flex-col gap-1.5 text-sm font-bold">
          Amount
          <input
            className="h-11 rounded-lg border border-line bg-white px-3 text-base font-semibold outline-none transition focus:border-jade focus:ring-2 focus:ring-jade/20"
            inputMode="decimal"
            min="0"
            onChange={(event) => setAmount(event.target.value)}
            placeholder="100"
            type="number"
            value={amount}
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-bold">
          From
          <select
            className="h-11 rounded-lg border border-line bg-white px-3 text-base font-semibold outline-none transition focus:border-jade focus:ring-2 focus:ring-jade/20"
            onChange={(event) => setCurrency(event.target.value as SourceCurrency)}
            value={currency}
          >
            {currencyOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.code}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex flex-col gap-1 rounded-lg bg-cream p-4">
        <span className="text-xs font-bold uppercase tracking-widest text-muted">
          Result to CNY
        </span>
        <strong className="text-3xl leading-tight sm:text-4xl">{formatCny(converted)}</strong>
        <span className="text-xs leading-relaxed text-muted">
          1 {currency} ≈ {formatRate(rate)} CNY (mid-market). Last updated{" "}
          {exchangeRateBaseline.lastUpdated}.
        </span>
      </div>

      <p className="text-xs leading-relaxed text-muted">
        {exchangeRateBaseline.disclaimer.en} {exchangeRateBaseline.disclaimer.zh}
      </p>
    </section>
  );
}
