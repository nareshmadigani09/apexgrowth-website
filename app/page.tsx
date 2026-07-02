import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ROICalculator from "@/components/ROICalculator";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Clapperboard,
  Globe2,
  Megaphone,
  Search,
  Star,
  Target,
  Video,
} from "lucide-react";

const services = [
  {
    title: "SEO & Local SEO",
    desc: "Rank higher in Google and Maps for high-intent local searches.",
    Icon: Search,
    details:
      "We optimize your website and Google Business Profile so customers nearby can find you when they search for your service. We improve keywords, pages, reviews, local listings, photos, posts, and ranking signals.",
  },
  {
    title: "Google Ads",
    desc: "High-intent campaigns built for calls, leads, and sales.",
    Icon: Target,
    details:
      "We create Google Ads for people actively searching for your service. We manage keywords, ads, landing pages, call tracking, budgets, and weekly improvements to reduce wasted spend and increase leads.",
  },
  {
    title: "Meta Ads",
    desc: "Facebook and Instagram ads for offers, leads, and retargeting.",
    Icon: Megaphone,
    details:
      "We run Facebook and Instagram campaigns with strong offers, creative designs, videos, and retargeting. The goal is to reach new customers and bring back people who already showed interest.",
  },
  {
    title: "Web Design",
    desc: "Premium websites and landing pages built to convert.",
    Icon: Globe2,
    details:
      "We build websites that look premium and guide visitors to take action: call, book, order, or submit a form. We focus on speed, mobile design, clear offers, trust, and conversion.",
  },
  {
    title: "Flyers & Branding",
    desc: "High-end creatives for offers, launches, events, and menus.",
    Icon: Clapperboard,
    details:
      "We create professional flyers, posters, menus, banners, and brand graphics that make your business look established and help your offers stand out online and offline.",
  },
  {
    title: "Reels & Video Editing",
    desc: "Short videos with hooks, captions, transitions, and CTAs.",
    Icon: Video,
    details:
      "We create short videos for Instagram, Facebook, TikTok, and YouTube Shorts. We add hooks, captions, music, transitions, and call-to-actions to help customers stop scrolling.",
  },
  {
    title: "AI Automation",
    desc: "Chatbots, missed lead follow-up, CRM workflows, and review automation.",
    Icon: Bot,
    details:
      "We automate follow-ups, missed calls, website chats, review requests, and customer reactivation. This helps you respond faster and recover leads that usually get lost.",
  },
  {
    title: "Analytics Dashboard",
    desc: "Clear reporting for leads, orders, calls, ROAS, rankings, and traffic.",
    Icon: BarChart3,
    details:
      "We build a clear dashboard so you can see what is working: leads, calls, orders, ad spend, revenue, rankings, and ROI. No confusing reports — just business numbers.",
  },
];

const industries = [
  "Restaurants",
  "Cloud Kitchens",
  "Hotels",
  "Dentists",
  "Doctors",
  "Law Firms",
  "Real Estate",
  "Roofing",
  "HVAC",
  "Construction",
  "Automotive",
  "Beauty Salons",
  "Fitness",
  "E-commerce",
  "Startups",
];

const plans = [
  {
    name: "Starter Growth",
    price: "$499",
    desc: "For new businesses that need a stronger online presence.",
    badge: "Start Here",
    items: [
      "Google Business Profile optimization",
      "Basic local SEO",
      "8 social media posts/month",
      "Review growth system",
      "1 campaign flyer/month",
      "Monthly performance report",
      "Email support",
    ],
  },
  {
    name: "Local Domination",
    price: "$999",
    desc: "Best for restaurants and local businesses that need more calls, orders, and visits.",
    highlight: true,
    badge: "Most Popular",
    items: [
      "Everything in Starter Growth",
      "Google Ads management",
      "Meta Ads management",
      "12 reels/posts per month",
      "Competitor tracking",
      "Landing page optimization",
      "Missed call/text follow-up",
      "Weekly growth report",
    ],
  },
  {
    name: "Revenue Engine",
    price: "$1,999",
    desc: "For businesses ready to scale with ads, automation, CRM, and retention.",
    badge: "Best Value",
    items: [
      "Everything in Local Domination",
      "AI chatbot for website",
      "CRM and lead tracking setup",
      "SMS/email reactivation campaigns",
      "30 creatives per month",
      "Monthly offer builder",
      "ROI dashboard",
      "Bi-weekly strategy call",
    ],
  },
  {
    name: "Apex Pro AI",
    price: "$3,999+",
    desc: "For multi-location businesses, franchises, and serious growth teams.",
    badge: "Premium",
    items: [
      "Everything in Revenue Engine",
      "AI Marketing Manager",
      "Advanced competitor war room",
      "Unlimited campaign requests",
      "Video testimonial system",
      "Custom automation workflows",
      "Weekly CEO report",
      "Priority support",
    ],
  },
];

const process = [
  [
    "01",
    "Audit",
    "We review your website, Google profile, ads, competitors, reviews, and conversion gaps.",
  ],
  [
    "02",
    "Strategy",
    "We build your offer, audience, funnel, creative direction, and lead tracking plan.",
  ],
  [
    "03",
    "Launch",
    "We launch ads, landing pages, creatives, automations, and reporting dashboards.",
  ],
  [
    "04",
    "Optimize",
    "We improve campaigns weekly based on calls, leads, sales, ROAS, and customer data.",
  ],
];

const proof = [
  ["3.8x", "Target ROAS"],
  ["42%", "Lower CPL"],
  ["24/7", "AI Follow-up"],
  ["30+", "Creatives/month"],
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="gradient-dark overflow-hidden text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black text-emerald-200">
                AI-powered digital marketing agency
              </div>

              <h1 className="text-5xl font-black leading-[.98] tracking-[-2px] md:text-7xl">
                More Leads. More Calls. More Customers.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                ApexGrowth.pro builds complete growth systems for restaurants,
                local businesses, medical clinics, law firms, home services,
                real estate, beauty salons, and startups.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="gradient-brand inline-flex items-center gap-2 rounded-full px-7 py-4 font-black text-white shadow-glow"
                >
                  Get Free Proposal <ArrowRight size={18} />
                </a>
                <a
                  href="#pricing"
                  className="rounded-full bg-white px-7 py-4 font-black text-ink"
                >
                  View Packages
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {proof.map(([num, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4"
                  >
                    <b className="block text-2xl">{num}</b>
                    <span className="text-xs text-slate-300">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="mb-5 flex justify-between">
                <b>Live Growth Dashboard</b>
                <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-black text-emerald-200">
                  Campaigns Active
                </span>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-cyan-400/20 to-blue-600/10 p-5">
                <div className="flex h-56 items-end justify-around gap-3">
                  {[70, 95, 130, 165, 190, 155].map((h, i) => (
                    <div
                      key={i}
                      className="w-12 rounded-2xl bg-gradient-to-b from-cyan-300 to-brand"
                      style={{ height: h }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-3xl bg-white/10 p-5">
                <p className="text-sm text-slate-300">This Week</p>
                <h3 className="mt-2 text-3xl font-black">
                  Leads, calls, rankings, and revenue in one dashboard.
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-soft py-8">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-5">
            {["Google Ads", "Meta Ads", "Local SEO", "CRM Automation", "AI Creative"].map(
              (x) => (
                <div
                  key={x}
                  className="rounded-2xl bg-white p-4 text-center font-black text-slate-600 shadow-sm"
                >
                  {x}
                </div>
              )
            )}
          </div>
        </section>

        <section id="services" className="py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="font-black text-brand">FULL-SERVICE GROWTH SYSTEM</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                We don’t just run ads. We build your complete customer engine.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-500">
                Traffic, conversion, automation, creative, retention, and
                reporting — all handled by one team.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-4">
              {services.map(({ title, desc, Icon, details }) => (
                <details
                  key={title}
                  className="card p-6 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-brand">
                    <Icon />
                  </div>

                  <h3 className="mb-2 text-xl font-black">{title}</h3>
                  <p className="leading-7 text-slate-500">{desc}</p>

                  <summary className="mt-5 cursor-pointer rounded-full bg-navy px-5 py-3 text-center text-sm font-black text-white">
                    See How This Works
                  </summary>

                  <p className="mt-4 rounded-2xl bg-soft p-4 text-sm leading-7 text-slate-600">
                    {details}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-24 text-white">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="font-black text-emerald-300">WHY APEXGROWTH</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Built for business owners who care about revenue, not vanity
                metrics.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                [
                  "Revenue-first strategy",
                  "We focus on calls, leads, bookings, orders, and actual business growth.",
                ],
                [
                  "AI-powered execution",
                  "Automations help recover missed leads, follow up faster, and improve conversion.",
                ],
                [
                  "Clear weekly reporting",
                  "You see what worked, what failed, and what we are improving next.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[2rem] border border-white/10 bg-white/10 p-8"
                >
                  <h3 className="text-2xl font-black">{title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="bg-soft py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Industry-specific growth systems.
              </h2>
              <p className="mt-4 text-lg text-slate-500">
                No generic marketing. We build offers, ads, pages, and content
                for your exact market.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-5">
              {industries.map((i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center font-black shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {i}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="font-black text-brand">PORTFOLIO</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Creative that makes your brand look premium.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                "Restaurant Offer Flyers",
                "Professional Reels",
                "Landing Pages",
                "Logo & Branding",
                "Ad Creatives",
                "Video Edits",
              ].map((x) => (
                <div
                  key={x}
                  className="card overflow-hidden transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-100 via-cyan-100 to-emerald-100 p-6">
                    <div className="flex h-full items-center justify-center rounded-3xl border border-white/70 bg-white/55 text-center text-2xl font-black text-slate-700">
                      {x}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black">{x}</h3>
                    <p className="mt-2 text-slate-500">
                      Premium design system ready for ads, websites, social
                      media, and print.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-soft py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="font-black text-brand">OUR PROCESS</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Simple process. Serious execution.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {process.map(([num, title, text]) => (
                <div
                  key={title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div className="mb-6 inline-flex rounded-full bg-blue-50 px-4 py-2 font-black text-brand">
                    {num}
                  </div>
                  <h3 className="text-2xl font-black">{title}</h3>
                  <p className="mt-4 leading-7 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="font-black text-brand">PLANS & PRICING</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Choose your growth package.
              </h2>
              <p className="mt-4 text-slate-500">
                Ad spend is separate. Custom packages available for franchises
                and multi-location businesses.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {plans.map((p) => (
                <div
                  key={p.name}
                  className={`relative rounded-[2rem] border bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl ${
                    p.highlight
                      ? "border-brand ring-4 ring-blue-100"
                      : "border-slate-200"
                  }`}
                >
                  <span
                    className={`absolute -top-4 left-7 rounded-full px-4 py-2 text-xs font-black text-white ${
                      p.highlight ? "bg-orange-500" : "bg-navy"
                    }`}
                  >
                    {p.badge}
                  </span>

                  <h3 className="mt-3 text-2xl font-black">{p.name}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-slate-500">
                    {p.desc}
                  </p>

                  <div className="my-6 text-4xl font-black">
                    {p.price}
                    <span className="text-base text-slate-500">/mo</span>
                  </div>

                  <ul className="space-y-3">
                    {p.items.map((x) => (
                      <li key={x} className="flex gap-2 text-sm">
                        <Star className="mt-1 h-4 w-4 shrink-0 fill-emerald text-emerald" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-4 font-black ${
                      p.highlight
                        ? "gradient-brand text-white"
                        : "bg-navy text-white"
                    }`}
                  >
                    Choose {p.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ROICalculator />

        <section id="faq" className="bg-soft py-24">
          <div className="mx-auto max-w-4xl px-5">
            <h2 className="mb-8 text-center text-4xl font-black tracking-tight md:text-5xl">
              Frequently asked questions
            </h2>

            {[
              ["Is ad spend included?", "No. Management fee and ad spend are separate."],
              ["How fast can campaigns launch?", "Most campaigns can launch within 7–14 days after onboarding."],
              ["Do you create flyers, reels, and video edits?", "Yes. Our packages include monthly flyers, reels, videos, and campaign creatives."],
              ["Can you market restaurants and cloud kitchens?", "Yes. Restaurants and cloud kitchens are one of our strongest niches."],
              ["Can you connect forms to CRM or email?", "Yes. We can connect to Gmail, Google Sheets, HubSpot, Zoho, or other CRMs."],
            ].map(([q, a]) => (
              <details
                key={q}
                className="mb-3 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <summary className="cursor-pointer font-black">{q}</summary>
                <p className="mt-3 leading-7 text-slate-500">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
            <div>
              <p className="font-black text-brand">FREE AUDIT</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Get your free growth proposal.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-500">
                Tell us about your business. We will prepare a plan for ads,
                SEO, creative content, website improvements, and automation.
              </p>

              <div className="mt-8 rounded-3xl bg-soft p-6">
                <b>Email:</b> hello@apexgrowth.pro
                <br />
                <b>Sales:</b> sales@apexgrowth.pro
              </div>
            </div>

            <form className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-slate-200 p-4"
                  placeholder="Name"
                />
                <input
                  className="rounded-2xl border border-slate-200 p-4"
                  placeholder="Phone"
                />
              </div>

              <input
                className="mt-4 w-full rounded-2xl border border-slate-200 p-4"
                placeholder="Email"
              />
              <input
                className="mt-4 w-full rounded-2xl border border-slate-200 p-4"
                placeholder="Business / Website URL"
              />

              <textarea
                className="mt-4 w-full rounded-2xl border border-slate-200 p-4"
                rows={5}
                placeholder="What do you want help with?"
              />

              <button
                type="button"
                className="gradient-brand mt-4 w-full rounded-full px-6 py-4 font-black text-white"
              >
                Request Free Proposal
              </button>

              <p className="mt-3 text-xs text-slate-500">
                Ready to connect to your CRM, email, or Google Sheets.
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
