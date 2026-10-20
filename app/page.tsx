import { Hero } from "@/components/Hero";
import { ProductDemo } from "@/components/ProductDemo";
import { HowItWorks } from "@/components/HowItWorks";
import { FeaturesOverview } from "@/components/FeaturesOverview";
import { PrivacySection } from "@/components/PrivacySection";
import { CtaSection } from "@/components/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductDemo />
      <HowItWorks />
      <FeaturesOverview />
      <PrivacySection />
      <CtaSection />
    </>
  );
}
