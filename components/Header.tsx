import Link from "next/link";

const nav = [
  ["Services", "#services"],
  ["Industries", "#industries"],
  ["Pricing", "#pricing"],
  ["Portfolio", "#portfolio"],
  ["FAQ", "#faq"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-3 text-2xl font-black">
          <span className="gradient-brand grid h-11 w-11 place-items-center rounded-2xl text-sm font-black text-white shadow-glow">AG</span>
          <span>ApexGrowth<span className="text-brand">.pro</span></span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-700 md:flex">
          {nav.map(([label, href]) => <a key={label} href={href} className="hover:text-brand">{label}</a>)}
        </nav>
        <a href="#contact" className="gradient-brand rounded-full px-5 py-3 text-sm font-black text-white shadow-glow">Get Free Proposal</a>
      </div>
    </header>
  );
}
