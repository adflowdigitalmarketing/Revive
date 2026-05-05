import { motion } from "motion/react";
import { Package, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";

export function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#009C43] to-[#007A34]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex justify-center">
              <Package className="text-white" size={64} />
            </div>
            <h1 className="text-white mb-8" style={{ fontSize: "48px", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.95 }}>
              Our Products
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-12" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 400, lineHeight: 1.6 }}>
              Innovative vacuum solutions, regeneration programs, and cutting-edge technology designed for maximum performance and sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Warrior */}
            <Link to="/products/warrior">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#009C43] to-[#007A34] p-12 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                style={{ borderRadius: "24px" }}
              >
                <h3 className="text-3xl font-medium text-white mb-4">
                  Revive Warrior
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Our flagship vacuum excavator truck. Built for maximum power, reliability, and operational efficiency.
                </p>
                <div className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={20} />
                </div>
              </motion.div>
            </Link>

            {/* Program */}
            <Link to="/products/program">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                style={{ borderRadius: "24px" }}
              >
                <h3 className="text-3xl font-medium text-white mb-4">
                  Revive Program
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Complete fleet regeneration service. Upgrade, refurbish, and extend the life of your vacuum equipment.
                </p>
                <div className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={20} />
                </div>
              </motion.div>
            </Link>

            {/* Piston */}
            <Link to="/products/piston">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-600 to-pink-700 p-12 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                style={{ borderRadius: "24px" }}
              >
                <h3 className="text-3xl font-medium text-white mb-4">
                  Compact Recycling Piston
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Advanced piston technology for efficient material handling and recycling operations.
                </p>
                <div className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={20} />
                </div>
              </motion.div>
            </Link>

            {/* Live */}
            <Link to="/products/live">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-amber-600 to-orange-700 p-12 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                style={{ borderRadius: "24px" }}
              >
                <h3 className="text-3xl font-medium text-white mb-4">
                  Revive Live
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Real-time fleet monitoring and telematics. Complete digital control over your equipment.
                </p>
                <div className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={20} />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
