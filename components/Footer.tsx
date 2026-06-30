export function Footer() {
  return (
    <footer className="bg-navy py-12 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3 text-2xl font-black text-white">
            <span className="gradient-brand grid h-11 w-11 place-items-center rounded-2xl text-sm">AG</span>ApexGrowth.pro
          </div>
          <p className="text-sm leading-6">Premium digital marketing, creative content, ads, SEO, websites, AI automation, and lead generation systems.</p>
        </div>
        <div><h4 className="mb-3 font-black text-white">Services</h4><p>SEO</p><p>Google Ads</p><p>Meta Ads</p><p>Video Editing</p></div>
        <div><h4 className="mb-3 font-black text-white">Industries</h4><p>Restaurants</p><p>Cloud Kitchens</p><p>Medical</p><p>Home Services</p></div>
        <div><h4 className="mb-3 font-black text-white">Contact</h4><p>hello@apexgrowth.pro</p><p>sales@apexgrowth.pro</p><p className="mt-6 text-xs">© 2026 ApexGrowth.pro</p></div>
      </div>
    </footer>
  );
}
