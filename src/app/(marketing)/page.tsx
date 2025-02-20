import Features from "@/components/features";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div className="space-y-4">
      <HeroSection />
      <Features />
      {/* <Pricing /> */}
    </div>
  );
}
