import { WarriorHero } from "../components/warrior/WarriorHero";
import { PhilosophySection } from "../components/warrior/PhilosophySection";
import { ProductCatalog } from "../components/warrior/ProductCatalog";
import { TechnicalFeatures } from "../components/warrior/TechnicalFeatures";
import { Footer } from "../components/Footer";

export function WarriorPage() {
  return (
    <div className="min-h-screen bg-white">
      <WarriorHero />
      <PhilosophySection />
      <ProductCatalog />
      <TechnicalFeatures />
      <Footer />
    </div>
  );
}