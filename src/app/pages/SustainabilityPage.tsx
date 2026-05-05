import { motion } from "motion/react";
import { Leaf, Factory, Award, TrendingUp, ArrowRight, Download, Wrench, Recycle, Clock } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import decZoneImage from "figma:asset/dec-zone.jpg";

export function SustainabilityPage() {
  const credentials = [
    {
      icon: Award,
      title: "ISO 14001",
      description: "Environmental Management excellence"
    },
    {
      icon: Award,
      title: "ISO 9001",
      description: "Quality-driven sustainability"
    },
    {
      icon: Leaf,
      title: "539 Tonnes CO₂e",
      description: "Saved per unit life-cycle"
    },
    {
      icon: TrendingUp,
      title: "Public Tenders",
      description: "10-25% scoring advantage for partners"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={decZoneImage}
            alt="Sustainability"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#009C43]/20 backdrop-blur-md text-[#009C43] mb-8 rounded-[12px] text-sm font-medium tracking-widest uppercase border border-[#009C43]/30">
              The Vision
            </div>
            <h1 className="text-white mb-8" style={{ fontSize: "48px", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.95 }}>
              Engineering a Greener Future for Underground Infrastructure
            </h1>
            <p className="text-white/90 max-w-4xl mx-auto mb-12" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 400, lineHeight: 1.6 }}>
              From Ireland's first off-grid manufacturing hub to global circular economy leadership. We don't just build machines; we engineer lifecycles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/sustainability/credentials">
                <button className="px-8 py-4 bg-[#009C43] text-white font-medium text-lg hover:bg-[#007A34] transition-colors" style={{ borderRadius: "16px" }}>
                  Explore Our Impact
                </button>
              </Link>
              <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 font-medium text-lg hover:border-[#009C43] transition-colors inline-flex items-center gap-3" style={{ borderRadius: "16px" }}>
                <Download size={20} />
                Sustainability Report
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revive EcoPark Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Main Card - 60% */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-gradient-to-br from-[#009C43] to-[#007A34] p-12 relative overflow-hidden group"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-[18px] flex items-center justify-center mb-8 border border-white/20">
                  <Factory className="text-white" size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-6" style={{ letterSpacing: "-0.03em" }}>
                  100% Off-Grid Manufacturing
                </h2>
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  Featuring 200kW Solar array and advanced Wind energy infrastructure. Located at the historic Lisheen Mine site.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-[16px] border border-white/20">
                    <div className="text-3xl font-medium text-white mb-1">200kW</div>
                    <div className="text-white/80 text-sm">Solar Power</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-[16px] border border-white/20">
                    <div className="text-3xl font-medium text-white mb-1">100%</div>
                    <div className="text-white/80 text-sm">Wind Infrastructure</div>
                  </div>
                </div>
                <Link to="/sustainability/ecopark">
                  <div className="mt-8 inline-flex items-center gap-3 text-white font-medium group-hover:gap-5 transition-all duration-300">
                    Explore EcoPark <ArrowRight size={20} />
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Side Card - 40% */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-10 flex flex-col justify-center"
              style={{ borderRadius: "24px" }}
            >
              <Leaf className="text-[#009C43] mb-6" size={48} />
              <h3 className="text-3xl font-medium text-gray-900 mb-4">
                Zero-Waste-to-Landfill
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our commitment to achieving zero waste by 2030.
              </p>
              <div className="bg-[#009C43]/10 p-6 rounded-[16px] border border-[#009C43]/20">
                <div className="text-4xl font-medium text-[#009C43] mb-2">2030</div>
                <div className="text-gray-700">Target Year</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Green Credentials Grid */}
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
              The Proof
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              ISO Standards & Environmental Metrics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, index) => {
              const Icon = cred.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/60 backdrop-blur-md border border-gray-200 p-8 hover:border-[#009C43] hover:shadow-xl transition-all duration-300"
                  style={{ borderRadius: "24px" }}
                >
                  <div className="w-14 h-14 bg-[#009C43]/10 rounded-[16px] flex items-center justify-center mb-6 group-hover:bg-[#009C43] transition-colors">
                    <Icon className="text-[#009C43] group-hover:text-white transition-colors" size={28} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {cred.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {cred.description}
                  </p>
                  <button className="mt-6 text-[#009C43] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    View Certificate →
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Circular Economy Process */}
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
              The Circular Economy Process
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Moving from "Buy-Use-Replace" to "Build-Refurbish-Redeploy"
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-10 text-center"
              style={{ borderRadius: "24px" }}
            >
              <div className="mb-6"><Wrench className="text-white" size={48} /></div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">8mm Steel Tanks</h3>
              <p className="text-gray-600 leading-relaxed">
                Engineered to outlast the chassis for decades of service
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-10 text-center"
              style={{ borderRadius: "24px" }}
            >
              <div className="mb-6"><Recycle className="text-white" size={48} /></div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Revive Program</h3>
              <p className="text-gray-600 leading-relaxed">
                Remounting backend units for 2nd, 3rd, and 4th lifecycles
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-white border border-amber-100 p-10 text-center"
              style={{ borderRadius: "24px" }}
            >
              <div className="mb-6"><Clock className="text-white" size={48} /></div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">30+ Years</h3>
              <p className="text-gray-600 leading-relaxed">
                Operational value through continuous regeneration
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link to="/sustainability/circular-economy">
              <button className="px-8 py-4 bg-gray-900 text-white font-medium text-lg hover:bg-[#009C43] transition-colors inline-flex items-center gap-3" style={{ borderRadius: "16px" }}>
                Learn About Circular Economy <ArrowRight size={20} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Decarbonising Zone */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-[#009C43]/20 text-[#009C43] mb-8 rounded-[12px] text-sm font-medium tracking-widest uppercase border border-[#009C43]/30 backdrop-blur-md">
                The Community
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6" style={{ letterSpacing: "-0.03em" }}>
                The Decarbonising Zone
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Proud members of the Mid-Tipperary Decarbonising Zone. Collaborative innovation for regional carbon neutrality.
              </p>
              <Link to="/sustainability/decarbonising-zone">
                <button className="px-8 py-4 bg-[#009C43] text-white font-medium text-lg hover:bg-[#007A34] transition-colors inline-flex items-center gap-3" style={{ borderRadius: "16px" }}>
                  Explore the Zone <ArrowRight size={20} />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[24px]"
            >
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-medium text-white mb-2">140</div>
                  <div className="text-white/80">Green Jobs by 2030</div>
                </div>
                <div>
                  <div className="text-4xl font-medium text-[#009C43] mb-2">100%</div>
                  <div className="text-white/80">Renewable Energy</div>
                </div>
                <div>
                  <div className="text-4xl font-medium text-white mb-2">0%</div>
                  <div className="text-white/80">Carbon Emissions</div>
                </div>
                <div>
                  <div className="text-4xl font-medium text-[#009C43] mb-2">2030</div>
                  <div className="text-white/80">Net Zero Target</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6" style={{ letterSpacing: "-0.03em" }}>
              Partner in Sustainability
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to decarbonise your fleet?
            </p>
            <button className="px-8 py-4 bg-[#009C43] text-white font-medium text-lg hover:bg-[#007A34] transition-colors" style={{ borderRadius: "16px" }}>
              Consult with our Experts
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
