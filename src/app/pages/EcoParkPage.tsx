import { motion } from "motion/react";
import { Factory, Zap, Sun, Wind, Droplet, Leaf, Users, TrendingUp } from "lucide-react";
import { Footer } from "../components/Footer";
import ecoparkImage from "figma:asset/revive-ecopark-3d.png";

export function EcoParkPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#009C43] to-[#007A34]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-white mb-8 rounded-[12px] text-sm font-medium tracking-widest uppercase border border-white/20">
              The Green Heart of Tipperary
            </div>
            <h1 className="text-5xl md:text-7xl font-medium text-white mb-8" style={{ letterSpacing: "-0.03em" }}>
              Revive EcoPark: Where the Future is Born
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              The first-of-its-kind industrial hub in Tipperary, Ireland. We have created an ecosystem where innovative manufacturing operates in full harmony with the environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#009C43] font-medium text-lg hover:bg-gray-100 transition-colors" style={{ borderRadius: "16px" }}>
                Book a Visit
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white font-medium text-lg hover:bg-white/20 transition-colors" style={{ borderRadius: "16px" }}>
                Learn About the Decarbonising Zone
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3D Map Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ letterSpacing: "-0.03em" }}>
              Our Facilities
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A complete ecosystem of sustainable manufacturing
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 p-8 shadow-xl"
            style={{ borderRadius: "24px" }}
          >
            <img
              src={ecoparkImage}
              alt="Revive EcoPark 3D Map"
              className="w-full h-auto"
              style={{ borderRadius: "16px" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Dual Engines - Building One & Turnpike */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ letterSpacing: "-0.03em" }}>
              The Dual Engines
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Two specialized facilities working in perfect harmony
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Building One */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-blue-500 to-blue-600 p-12 overflow-hidden"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-[18px] flex items-center justify-center mb-8 border border-white/20">
                  <Factory className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-medium text-white mb-4">Building One</h3>
                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-[8px] text-white text-sm font-medium uppercase tracking-wide mb-6 border border-white/20">
                  Off-Grid Manufacturer
                </div>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  Our advanced manufacturing site where the Revive Warrior is created. Complete energy independence through renewable sources, making every truck produced as clean as possible right from assembly.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/90">
                    <Zap className="text-white" size={20} />
                    <span>100% Off-Grid Operations</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <Sun className="text-white" size={20} />
                    <span>200kW Solar Array</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <Wind className="text-white" size={20} />
                    <span>150kW Wind Turbines</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Turnpike Plant */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-emerald-500 to-emerald-600 p-12 overflow-hidden"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-[18px] flex items-center justify-center mb-8 border border-white/20">
                  <Leaf className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-medium text-white mb-4">Turnpike Plant</h3>
                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-[8px] text-white text-sm font-medium uppercase tracking-wide mb-6 border border-white/20">
                  The Regeneration Center
                </div>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  Home of the Revive Program. A specialized plant for regenerating and upgrading used equipment. A place where the circular economy becomes real action.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/90">
                    <span className="text-2xl">♻️</span>
                    <span>Full Refurbishment Services</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <span className="text-2xl">🔧</span>
                    <span>Advanced Diagnostics</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <span className="text-2xl">✨</span>
                    <span>Technology Upgrades</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability in Action */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ letterSpacing: "-0.03em" }}>
              Sustainability in Action
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Why this is eco: concrete facts from our strategy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🌱",
                title: "Zero Waste Vision",
                description: "Minimizing production waste through smart material use"
              },
              {
                icon: "⚡",
                title: "Renewable Energy",
                description: "Solar and wind solutions powering our plants"
              },
              {
                icon: "💧",
                title: "Water Management",
                description: "Collecting and recycling technical water for pump testing"
              },
              {
                icon: "🌍",
                title: "Decarbonising Zone",
                description: "Central element of Mid-Tipperary carbon-neutral zone"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-md border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
                style={{ borderRadius: "24px" }}
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Growth */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-[#009C43]/10 text-[#009C43] mb-8 rounded-[12px] text-sm font-medium tracking-widest uppercase border border-[#009C43]/20">
                Social Impact
              </div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ letterSpacing: "-0.03em" }}>
                Community & Growth
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We are building a hub that will provide employment for 140 high-calibre specialists by 2030. Collaboration with technical institutes and training new generations of engineers in sustainable development principles.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#009C43]/10 to-emerald-50 p-6 rounded-[16px] border border-emerald-200">
                  <Users className="text-[#009C43] mb-3" size={32} />
                  <div className="text-3xl font-medium text-gray-900 mb-1">140</div>
                  <div className="text-gray-600 text-sm">Jobs by 2030</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-[16px] border border-blue-100">
                  <TrendingUp className="text-blue-600 mb-3" size={32} />
                  <div className="text-3xl font-medium text-gray-900 mb-1">100%</div>
                  <div className="text-gray-600 text-sm">Local Hiring</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-700 p-12 relative overflow-hidden group"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-48 h-48 bg-[#009C43]/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-3xl font-medium text-white mb-6">
                  More than a factory. It's a manifesto.
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Revive EcoPark in Tipperary is the physical embodiment of our belief that heavy industry can be ecological. We don't just assemble trucks in Building One or refurbish them at the Turnpike Plant — we prove that high-tech manufacturing can be energy-independent and zero-waste.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#009C43] to-[#007A34]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed italic">
              "Every visitor to our EcoPark sees a future where industrial capacity doesn't take from nature, but exists alongside it. This is our roots, our base and our contribution to the global fight for a cleaner environment."
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
