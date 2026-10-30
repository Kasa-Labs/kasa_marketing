import { NotesHero as Hero } from "@/components/NotesHero";
import { ProductDemo } from "@/components/ProductDemo";
import { NotesHowItWorks as HowItWorks } from "@/components/NotesHowItWorks";
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
