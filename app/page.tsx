import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ROICalculator from "@/components/ROICalculator";
import { ArrowRight, BarChart3, Bot, Clapperboard, Globe2, Megaphone, Search, Star, Target, Video } from "lucide-react";

const services = [
  ["SEO & Local SEO", "Rank higher in Google and Maps for high-intent local searches.", Search],
  ["Google Ads", "Conversion-focused PPC campaigns with tracking and weekly optimization.", Target],
  ["Meta Ads", "Facebook and Instagram campaigns for leads, offers, retargeting, and brand awareness.", Megaphone],
  ["Web Design", "Premium websites and landing pages built to convert visitors into customers.", Globe2],
  ["Flyers & Branding", "High-end promotional creatives for offers, launches, events, and menus.", Clapperboard],
  ["Reels & Video Editing", "Short-form videos with captions, hooks, transitions, and social-first formatting.", Video],
  ["AI Automation", "Chatbots, missed lead follow-up, CRM workflows, and review automation.", Bot],
  ["Analytics Dashboard", "Clear reporting for leads, orders, calls, ROAS, rankings, and traffic.", BarChart3],
];

const industries = ["Restaurants", "Cloud Kitchens", "Hotels", "Dentists", "Doctors", "Law Firms", "Real Estate", "Roofing", "HVAC", "Construction", "Automotive", "Beauty Salons", "Fitness", "E-commerce", "Startups"];

const plans = [
  { name: "Starter", price: "$499", desc: "For new businesses that need strong online presence.", items: ["12 social media posts", "4 professional reels", "2 flyer designs", "1 video edit", "Google Business optimization", "Monthly reporting", "Email support"] },
  { name: "Growth", price: "$999", desc: "Most popular for steady local lead generation.", highlight: true, items: ["20 social media posts", "8 reels", "6 flyer designs", "4 video edits", "Google Ads management", "Facebook & Instagram Ads", "Local SEO", "Landing page", "Analytics dashboard", "Weekly meeting"] },
  { name: "Elite", price: "$1,999", desc: "For aggressive growth, automation, and scaling.", items: ["Unlimited posts", "20 reels", "12 flyer designs", "10 premium video edits", "Complete SEO", "Google Ads + Meta Ads", "Website maintenance", "AI chatbot", "Email marketing", "Dedicated manager"] },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="gradient-dark overflow-hidden text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black text-emerald-200">Premium digital marketing agency</div>
              <h1 className="text-5xl font-black leading-[.98] tracking-[-2px] md:text-7xl">Grow Faster. Rank Higher. Convert More Customers.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">ApexGrowth.pro helps restaurants, local businesses, law firms, medical clinics, home services, and startups dominate Google and social media with SEO, ads, creative content, websites, and automation.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="gradient-brand inline-flex items-center gap-2 rounded-full px-7 py-4 font-black text-white shadow-glow">Get Free Proposal <ArrowRight size={18}/></a>
                <a href="#pricing" className="rounded-full bg-white px-7 py-4 font-black text-ink">View Pricing</a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="mb-5 flex justify-between"><b>Live Growth Dashboard</b><span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-black text-emerald-200">Campaigns Active</span></div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-cyan-400/20 to-blue-600/10 p-5">
                <div className="flex h-56 items-end justify-around gap-3">
                  {[70,95,130,165,190,155].map((h,i)=><div key={i} className="w-12 rounded-2xl bg-gradient-to-b from-cyan-300 to-brand" style={{height:h}} />)}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white/10 p-4"><b className="block text-2xl">3.8x</b><span className="text-xs text-slate-300">Target ROAS</span></div>
                <div className="rounded-2xl bg-white/10 p-4"><b className="block text-2xl">42%</b><span className="text-xs text-slate-300">Lower CPL</span></div>
                <div className="rounded-2xl bg-white/10 p-4"><b className="block text-2xl">24/7</b><span className="text-xs text-slate-300">AI Follow-up</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-soft py-8">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-5">
            {["Google Partner Ready", "Meta Campaigns", "Microsoft Ads", "HubSpot CRM", "Semrush SEO"].map(x=><div key={x} className="rounded-2xl bg-white p-4 text-center font-black text-slate-600 shadow-sm">{x}</div>)}
          </div>
        </section>

        <section id="services" className="py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="font-black text-brand">FULL-SERVICE MARKETING</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Everything your business needs to get more leads and sales.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-500">One team for strategy, content, ads, website, tracking, automation, reporting, and conversion improvement.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              {services.map(([title, desc, Icon]: any)=><div className="card p-6" key={title}><div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-brand"><Icon /></div><h3 className="mb-2 text-xl font-black">{title}</h3><p className="leading-7 text-slate-500">{desc}</p></div>)}
            </div>
          </div>
        </section>

        <section id="industries" className="bg-soft py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto mb-12 max-w-3xl text-center"><h2 className="text-4xl font-black tracking-tight md:text-5xl">Industry-specific growth systems.</h2><p className="mt-4 text-lg text-slate-500">No generic marketing. We build offers, ads, pages, and content for your exact market.</p></div>
            <div className="grid gap-4 md:grid-cols-5">{industries.map(i=><div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 text-center font-black shadow-sm">{i}</div>)}</div>
          </div>
        </section>

        <section id="portfolio" className="py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto mb-12 max-w-3xl text-center"><p className="font-black text-brand">PORTFOLIO</p><h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Creative that makes your brand look established.</h2></div>
            <div className="grid gap-5 md:grid-cols-3">
              {["Restaurant Offer Flyers", "Professional Reels", "Landing Pages", "Logo & Branding", "Ad Creatives", "Video Edits"].map((x,idx)=><div key={x} className="card overflow-hidden"><div className="h-48 bg-gradient-to-br from-blue-100 via-cyan-100 to-emerald-100 p-6"><div className="flex h-full items-center justify-center rounded-3xl border border-white/70 bg-white/55 text-2xl font-black text-slate-700">{x}</div></div><div className="p-6"><h3 className="text-xl font-black">{x}</h3><p className="mt-2 text-slate-500">Premium design system ready for client work and agency portfolio.</p></div></div>)}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-soft py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto mb-12 max-w-3xl text-center"><p className="font-black text-brand">PLANS & PRICING</p><h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Clear monthly packages.</h2><p className="mt-4 text-slate-500">Ad spend is separate. Custom enterprise packages available.</p></div>
            <div className="grid gap-6 md:grid-cols-3">
              {plans.map(p=><div key={p.name} className={`relative rounded-[2rem] border bg-white p-8 shadow-sm ${p.highlight ? "border-brand ring-4 ring-blue-100 md:-translate-y-4" : "border-slate-200"}`}>{p.highlight && <span className="absolute -top-4 left-8 rounded-full bg-orange-500 px-4 py-2 text-xs font-black text-white">MOST POPULAR</span>}<h3 className="text-2xl font-black">{p.name}</h3><p className="mt-2 min-h-12 text-slate-500">{p.desc}</p><div className="my-6 text-5xl font-black">{p.price}<span className="text-base text-slate-500">/mo</span></div><ul className="space-y-3">{p.items.map(x=><li key={x} className="flex gap-2"><Star className="mt-1 h-4 w-4 fill-emerald text-emerald" /> <span>{x}</span></li>)}</ul><a href="#contact" className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-4 font-black ${p.highlight ? "gradient-brand text-white" : "bg-navy text-white"}`}>Choose {p.name}</a></div>)}
            </div>
          </div>
        </section>

        <ROICalculator />

        <section id="faq" className="bg-soft py-24">
          <div className="mx-auto max-w-4xl px-5">
            <h2 className="mb-8 text-center text-4xl font-black tracking-tight md:text-5xl">Frequently asked questions</h2>
            {["Is ad spend included?", "How fast can campaigns launch?", "Do you create flyers, reels, and video edits?", "Can you market restaurants and cloud kitchens?", "Can you connect forms to CRM or email?"].map((q,i)=><details key={q} className="mb-3 rounded-2xl border border-slate-200 bg-white p-5"><summary className="cursor-pointer font-black">{q}</summary><p className="mt-3 leading-7 text-slate-500">{i===0?"No. Management fee and ad spend are separate.":i===1?"Most campaigns can launch within 7–14 days after onboarding.":i===2?"Yes. Our packages clearly include monthly flyers, reels, and short video edits.":i===3?"Yes. Restaurants and cloud kitchens are one of our strongest niches.":"Yes. We can connect to Gmail, Google Sheets, HubSpot, Zoho, or other CRMs."}</p></details>)}
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
            <div><p className="font-black text-brand">FREE AUDIT</p><h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Get your free growth proposal.</h2><p className="mt-5 text-lg leading-8 text-slate-500">Tell us about your business. We will prepare a plan for ads, SEO, creative content, website improvements, and automation.</p><div className="mt-8 rounded-3xl bg-soft p-6"><b>Email:</b> hello@apexgrowth.pro<br/><b>Sales:</b> sales@apexgrowth.pro</div></div>
            <form className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <div className="grid gap-4 md:grid-cols-2"><input className="rounded-2xl border border-slate-200 p-4" placeholder="Name"/><input className="rounded-2xl border border-slate-200 p-4" placeholder="Phone"/></div>
              <input className="mt-4 w-full rounded-2xl border border-slate-200 p-4" placeholder="Email"/>
              <input className="mt-4 w-full rounded-2xl border border-slate-200 p-4" placeholder="Business / Website URL"/>
              <textarea className="mt-4 w-full rounded-2xl border border-slate-200 p-4" rows={5} placeholder="What do you want help with?"/>
              <button type="button" className="gradient-brand mt-4 w-full rounded-full px-6 py-4 font-black text-white">Request Free Proposal</button>
              <p className="mt-3 text-xs text-slate-500">Ready to connect to your CRM, email, or Google Sheets.</p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
