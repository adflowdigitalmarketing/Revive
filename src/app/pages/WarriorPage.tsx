import { motion } from "motion/react";
import { Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router";
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

      {/* Build Your Warrior CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#009C43] to-[#007A34] p-12 md:p-16 relative overflow-hidden"
            style={{ borderRadius: "24px" }}
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-[20px] flex items-center justify-center border border-white/20">
                  <Settings className="text-white" size={40} />
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6" style={{ letterSpacing: "-0.03em" }}>
                Configure Your Perfect Warrior
              </h2>

              <p className="text-white/90 text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                Build your custom specification with our interactive configurator. Choose your tank, pumps, hose reels, and optional modules to match your exact requirements.
              </p>

              <Link to="/products/warrior/configure">
                <button className="px-10 py-5 bg-white text-[#009C43] font-medium text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-3 shadow-xl" style={{ borderRadius: "16px" }}>
                  <Settings size={24} />
                  Build Your Warrior
                  <ArrowRight size={24} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}