import { HeroSlider } from "../components/HeroSlider";
import { ImpactGrid } from "../components/home/ImpactGrid";
import { CircularEcosystem } from "../components/home/CircularEcosystem";
import { SustainabilitySection } from "../components/home/SustainabilitySection";
import { DepreciationStrategies } from "../components/home/DepreciationStrategies";
import { GlobalRepresentation } from "../components/home/GlobalRepresentation";
import { LatestInsights } from "../components/home/LatestInsights";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <HeroSlider />
      <ImpactGrid />
      <CircularEcosystem />
      <SustainabilitySection />
      <DepreciationStrategies />
      <GlobalRepresentation />
      <LatestInsights />
      <Footer />
    </>
  );
}
