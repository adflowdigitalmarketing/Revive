import { ProgramHero } from "../components/program/ProgramHero";
import { BeforeAfterSlider } from "../components/program/BeforeAfterSlider";
import { EconomicsSection } from "../components/program/EconomicsSection";
import { RegenerationProcess } from "../components/program/RegenerationProcess";
import { ProgramCatalog } from "../components/program/ProgramCatalog";
import { InfrastructureSection } from "../components/program/InfrastructureSection";
import { WhyChooseSection } from "../components/program/WhyChooseSection";
import { Footer } from "../components/Footer";

export function ProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProgramHero />
      <BeforeAfterSlider />
      <EconomicsSection />
      <RegenerationProcess />
      <ProgramCatalog />
      <InfrastructureSection />
      <WhyChooseSection />
      <Footer />
    </div>
  );
}
