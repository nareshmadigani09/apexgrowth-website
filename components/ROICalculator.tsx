"use client";

import { useMemo, useState } from "react";

export default function ROICalculator() {
  const [monthlyVisitors, setMonthlyVisitors] = useState(5000);
  const [conversionRate, setConversionRate] = useState(3);
  const [averageOrderValue, setAverageOrderValue] = useState(75);
  const [adSpend, setAdSpend] = useState(1500);
  const [improvementRate, setImprovementRate] = useState(25);

  const results = useMemo(() => {
    const currentLeads = monthlyVisitors * (conversionRate / 100);
    const currentRevenue = currentLeads * averageOrderValue;

    const improvedConversionRate =
      conversionRate + conversionRate * (improvementRate / 100);

    const improvedLeads = monthlyVisitors * (improvedConversionRate / 100);
    const improvedRevenue = improvedLeads * averageOrderValue;

    const extraRevenue = improvedRevenue - currentRevenue;
    const roi = adSpend > 0 ? ((extraRevenue - adSpend) / adSpend) * 100 : 0;

    return {
      currentLeads,
      currentRevenue,
      improvedLeads,
      improvedRevenue,
      extraRevenue,
      roi,
    };
  }, [monthlyVisitors, conversionRate, averageOrderValue, adSpend, improvementRate]);

  const money = (value: number) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  return (
    <section id="roi-calculator" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-cyan-400 font-semibold mb-3">
            Interactive ROI Calculator
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            See how much extra revenue better marketing can create.
          </h2>
          <p className="text-slate-300">
            Enter your current traffic, conversion rate, average order value,
            and marketing spend. The calculator updates instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/10 border border-white/10 rounded-3xl p-8">
            <CalculatorInput
              label="Monthly Website Visitors"
              value={monthlyVisitors}
              setValue={setMonthlyVisitors}
              min={100}
              max={100000}
              step={100}
            />

            <CalculatorInput
              label="Current Conversion Rate (%)"
              value={conversionRate}
              setValue={setConversionRate}
              min={0.5}
              max={25}
              step={0.5}
            />

            <CalculatorInput
              label="Average Customer Value ($)"
              value={averageOrderValue}
              setValue={setAverageOrderValue}
              min={10}
              max={1000}
              step={5}
            />

            <CalculatorInput
              label="Monthly Marketing Spend ($)"
              value={adSpend}
              setValue={setAdSpend}
              min={0}
              max={50000}
              step={100}
            />

            <CalculatorInput
              label="Expected Improvement (%)"
              value={improvementRate}
              setValue={setImprovementRate}
              min={5}
              max={200}
              step={5}
            />
          </div>

          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Your Estimated Results</h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <ResultCard
                label="Current Monthly Revenue"
                value={money(results.currentRevenue)}
              />
              <ResultCard
                label="Projected Monthly Revenue"
                value={money(results.improvedRevenue)}
              />
              <ResultCard
                label="Extra Monthly Revenue"
                value={money(results.extraRevenue)}
              />
              <ResultCard
                label="Estimated ROI"
                value={`${results.roi.toFixed(0)}%`}
              />
            </div>

            <div className="bg-slate-900/70 rounded-2xl p-6 border border-white/10">
              <p className="text-slate-300 mb-2">Estimated extra annual revenue</p>
              <div className="text-4xl font-extrabold text-cyan-300">
                {money(results.extraRevenue * 12)}
              </div>
              <p className="text-sm text-slate-400 mt-4">
                This is an estimate only. Actual results depend on your offer,
                website quality, ad strategy, reviews, location, competition,
                and follow-up process.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex w-full justify-center rounded-full bg-cyan-400 text-slate-950 font-bold px-6 py-4 hover:bg-cyan-300 transition"
            >
              Get My Free Growth Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalculatorInput({
  label,
  value,
  setValue,
  min,
  max,
  step,
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <div className="mb-7">
      <div className="flex justify-between gap-4 mb-2">
        <label className="font-semibold">{label}</label>
        <span className="text-cyan-300 font-bold">
          {label.includes("$")
            ? `$${value.toLocaleString()}`
            : value.toLocaleString()}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full"
      />

      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-3 w-full rounded-xl bg-slate-900 border border-white/10 px-4 py-3 text-white outline-none focus:border-cyan-400"
      />
    </div>
  );
}

function ResultCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-slate-900/70 rounded-2xl p-5 border border-white/10">
      <p className="text-sm text-slate-400 mb-2">{label}</p>
      <p className="text-2xl font-extrabold">{value}</p>
    </div>
  );
}
