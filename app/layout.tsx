import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ApexGrowth.pro | Digital Marketing Agency",
  description: "Premium digital marketing agency for SEO, Google Ads, Meta Ads, websites, flyers, reels, video editing, AI automation, and local business growth.",
  openGraph: {
    title: "ApexGrowth.pro",
    description: "Grow faster. Rank higher. Convert more customers.",
    url: "https://apexgrowth.pro",
    siteName: "ApexGrowth.pro",
    type: "website"
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%232563eb'/%3E%3Cstop offset='.5' stop-color='%2306b6d4'/%3E%3Cstop offset='1' stop-color='%2310b981'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='64' height='64' rx='16' fill='url(%23g)'/%3E%3Ctext x='32' y='41' font-family='Arial' font-size='24' font-weight='900' fill='white' text-anchor='middle'%3EAG%3C/text%3E%3C/svg%3E"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
