import { SiteHeader } from "@/components/layouts/site-header";
import { HeroSection } from "./_components/hero-section";
import { TrendingSection } from "./_components/trending-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      <TrendingSection />
      <Footer />
    </main>
  );
}
