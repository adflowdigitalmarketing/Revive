import { motion } from "motion/react";
import { Award, TrendingDown, Target, Droplet, Wind, Download, CheckCircle } from "lucide-react";
import { Footer } from "../components/Footer";

export function GreenCredentialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#009C43]/10 text-[#009C43] mb-8 rounded-[12px] text-sm font-medium tracking-widest uppercase border border-[#009C43]/20">
              Your Green Passport
            </div>
            <h1 className="text-5xl md:text-6xl font-medium text-gray-900 mb-8" style={{ letterSpacing: "-0.03em" }}>
              Driving Sustainable Impact
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revive helps partners meet ESG and CSRD criteria while maximizing potential in public procurement tenders. Our solutions contribute up to 10-25% of award points in sustainability-focused scoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#009C43] text-white font-medium text-lg hover:bg-[#007A34] transition-colors inline-flex items-center gap-3" style={{ borderRadius: "16px" }}>
                <Download size={20} />
                Download Green Credentials PDF
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 font-medium text-lg hover:border-[#009C43] transition-colors" style={{ borderRadius: "16px" }}>
                View ISO Standards
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Scope 3 Advantage */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500 to-indigo-600 p-12 md:p-16 relative overflow-hidden group"
            style={{ borderRadius: "24px" }}
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-8" style={{ letterSpacing: "-0.03em" }}>
                Enhancing Your Scope 3 Emissions Performance
              </h2>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-12 max-w-4xl">
                Revive focuses on indirect emissions stemming from your value chain. By using the Revive Program and Warrior units, you significantly improve your sustainability metrics and meet ambitious decarbonisation goals.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[20px]">
                  <div className="text-4xl mb-4">♻️</div>
                  <h3 className="text-white font-medium mb-2 text-lg">Extended Lifespans</h3>
                  <p className="text-white/80 text-sm">Through reconditioning and regeneration</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[20px]">
                  <div className="text-4xl mb-4">🏭</div>
                  <h3 className="text-white font-medium mb-2 text-lg">Reduced Virgin Steel</h3>
                  <p className="text-white/80 text-sm">Minimizing demand for new materials</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[20px]">
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className="text-white font-medium mb-2 text-lg">Lower Carbon Footprint</h3>
                  <p className="text-white/80 text-sm">Cutting emissions in manufacturing</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Environmental Targets to 2030 */}
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
              Environmental Targets to 2030
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Measurable goals and proven impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 p-10 text-center hover:shadow-xl transition-shadow duration-300"
              style={{ borderRadius: "24px" }}
            >
              <div className="w-16 h-16 bg-[#009C43] rounded-[18px] flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="text-white" size={32} />
              </div>
              <div className="text-5xl font-medium text-[#009C43] mb-3">539</div>
              <div className="text-xl font-medium text-gray-900 mb-2">Tonnes CO₂e</div>
              <p className="text-gray-600 leading-relaxed">
                Total carbon savings of a Revive unit over its lifetime compared to a conventional unit
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 p-10 text-center hover:shadow-xl transition-shadow duration-300"
              style={{ borderRadius: "24px" }}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-[18px] flex items-center justify-center mx-auto mb-6">
                <Target className="text-white" size={32} />
              </div>
              <div className="text-5xl font-medium text-blue-600 mb-3">51%</div>
              <div className="text-xl font-medium text-gray-900 mb-2">Carbon Intensity Reduction</div>
              <p className="text-gray-600 leading-relaxed">
                By 2030 through our Off-Grid Manufacturing Strategy
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-white border border-amber-200 p-10 text-center hover:shadow-xl transition-shadow duration-300"
              style={{ borderRadius: "24px" }}
            >
              <div className="w-16 h-16 bg-amber-500 rounded-[18px] flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={32} />
              </div>
              <div className="text-5xl font-medium text-amber-500 mb-3">0%</div>
              <div className="text-xl font-medium text-gray-900 mb-2">Zero Waste</div>
              <p className="text-gray-600 leading-relaxed">
                Commitment to a zero-waste-to-landfill manufacturing process by 2030
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Eco-Innovation */}
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
              Technical Eco-Innovation
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Engineering proof of our environmental commitment
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Oil-Free Operations */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-10 hover:border-[#009C43] hover:shadow-xl transition-all duration-300"
              style={{ borderRadius: "24px" }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-purple-500 rounded-[16px] flex items-center justify-center flex-shrink-0">
                  <Droplet className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">Oil-Free Operations</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Utilization of <strong>Jurop PVT 400 vacuum pumps</strong>. Unlike traditional pumps, these are oil-free, eliminating the risk of environmental contamination during servicing.
                  </p>
                  <div className="flex items-center gap-2 text-[#009C43]">
                    <CheckCircle size={20} />
                    <span className="font-medium">Zero Oil Contamination Risk</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Water Resource Management */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-10 hover:border-[#009C43] hover:shadow-xl transition-all duration-300"
              style={{ borderRadius: "24px" }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-blue-500 rounded-[16px] flex items-center justify-center flex-shrink-0">
                  <Wind className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">Water Resource Management</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Integration of the <strong>Compact Recycling Piston system</strong>. Allows for the continuous reuse of technical water, drastically reducing clean water consumption on-site.
                  </p>
                  <div className="flex items-center gap-2 text-[#009C43]">
                    <CheckCircle size={20} />
                    <span className="font-medium">Continuous Water Recycling</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
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
              Certifications & Compliance
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Building trust through verified standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "ISO 14001",
                subtitle: "Environmental Management System",
                description: "High-standard risk mitigation",
                color: "from-green-500 to-emerald-600"
              },
              {
                title: "ISO 9001",
                subtitle: "Quality Management System",
                description: "Ensuring environmental goals don't compromise reliability",
                color: "from-blue-500 to-indigo-600"
              },
              {
                title: "The Revive Eco Park",
                subtitle: "Ireland's first 100% off-grid site",
                description: "Powered by 200kW solar and 150kW wind energy",
                color: "from-amber-500 to-orange-600"
              },
              {
                title: "Decarbonising Zone",
                subtitle: "Mid-Tipperary Initiative",
                description: "Active member and contributor to regional sustainability",
                color: "from-purple-500 to-pink-600"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${cert.color} p-8 h-full relative overflow-hidden`} style={{ borderRadius: "24px" }}>
                  <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative z-10">
                    <Award className="text-white mb-4" size={32} />
                    <h3 className="text-xl font-medium text-white mb-2">{cert.title}</h3>
                    <div className="text-white/90 text-sm font-medium mb-3">{cert.subtitle}</div>
                    <p className="text-white/80 text-sm leading-relaxed">{cert.description}</p>
                    <button className="mt-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View PDF →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Expert */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-700 aspect-square flex items-center justify-center"
              style={{ borderRadius: "24px" }}
            >
              <div className="text-center p-12">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                  <Award className="text-white" size={48} />
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide mb-2">Energy & Sustainability Consultant</div>
                <div className="text-2xl font-medium text-white">Barry O'Donovan</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-[#009C43]/10 text-[#009C43] mb-8 rounded-[12px] text-sm font-medium tracking-widest uppercase border border-[#009C43]/20">
                Meet the Expert
              </div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ letterSpacing: "-0.03em" }}>
                Leading Our Environmental Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "Our mission is to maximize sustainability across every manufacturing process."
              </p>
              <p className="text-gray-600 leading-relaxed">
                Barry O'Donovan is Revive's Energy & Sustainability Consultant. A specialist in decarbonisation assessments and resource efficiency, Barry leads our efforts to ensure every aspect of our operations meets the highest environmental standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
