 "use client";
import { useMemo, useState } from "react";

export function ROICalculator() {
  const [budget, setBudget] = useState(2000);
  const [aov, setAov] = useState(50);
  const [roas, setRoas] = useState(3.5);
  const revenue = useMemo(() => Math.round(budget * roas), [budget, roas]);
  const orders = useMemo(() => Math.round(revenue / Math.max(aov, 1)), [revenue, aov]);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="gradient-dark grid gap-8 rounded-[2rem] p-8 text-white md:grid-cols-2 md:p-12">
          <div>
            <p className="mb-3 text-sm font-black text-emerald-300">INTERACTIVE ROI CALCULATOR</p>
            <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">Estimate your growth potential.</h2>
            <p className="text-slate-300">Use this as a planning tool. Final results depend on your offer, location, creative quality, landing page, and follow-up speed.</p>
            <div className="mt-8 space-y-4">
              <label className="block rounded-2xl bg-white/10 p-4">Monthly ad budget
                <input className="mt-2 w-full rounded-xl border-0 p-3 text-ink" type="number" value={budget} onChange={e=>setBudget(+e.target.value)} />
              </label>
              <label className="block rounded-2xl bg-white/10 p-4">Average sale/order value
                <input className="mt-2 w-full rounded-xl border-0 p-3 text-ink" type="number" value={aov} onChange={e=>setAov(+e.target.value)} />
              </label>
              <label className="block rounded-2xl bg-white/10 p-4">Target ROAS
                <input className="mt-2 w-full rounded-xl border-0 p-3 text-ink" type="number" step=".1" value={roas} onChange={e=>setRoas(+e.target.value)} />
              </label>
            </div>
          </div>
          <div className="rounded-[1.6rem] bg-white p-8 text-ink">
            <p className="font-bold text-slate-500">Estimated monthly revenue opportunity</p>
            <div className="my-5 text-6xl font-black text-brand">${revenue.toLocaleString()}</div>
            <p className="text-lg font-bold">{orders.toLocaleString()} estimated orders / leads-to-sales equivalent</p>
            <p className="mt-4 text-sm leading-6 text-slate-500">This is a directional projection, not a guarantee. We prepare a realistic forecast during your free audit.</p>
            <a href="#contact" className="gradient-brand mt-8 inline-flex rounded-full px-6 py-4 font-black text-white">Get My Real Forecast</a>
          </div>
        </div>
      </div>
    </section>
  );
}
