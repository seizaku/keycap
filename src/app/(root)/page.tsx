import { SiteHeader } from "@/components/layouts/site-header";
import { HeroSection } from "./_components/hero-section";
import { TrendingSection } from "./_components/trending-section";
import { ServicePromotion } from "./_components/service-promotion";
import { Footer } from "@/components/layouts/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      <TrendingSection />
      <ServicePromotion />
      <Footer />
    </main>
  );
}
