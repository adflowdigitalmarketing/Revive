import { motion } from "motion/react";
import { MapPin, Users, Target, Zap, GraduationCap, TrendingUp, Leaf, Award, Recycle, Sprout, Truck } from "lucide-react";
import { Footer } from "../components/Footer";
import decZoneImage from "figma:asset/dec-zone.jpg";
import decZoneMap from "figma:asset/dec-zone-map.png";

export function DecarboZonePage() {
  const milestones = [
    {
      year: "2024",
      title: "Launch of Off-Grid Production",
      description: "Building One becomes fully operational with 100% renewable energy",
      icon: Zap
    },
    {
      year: "2026",
      title: "Expansion of Service Network",
      description: "Growing our regeneration capabilities across Ireland and beyond",
      icon: TrendingUp
    },
    {
      year: "2030",
      title: "140 Green Jobs Created",
      description: "Achieving our ambitious employment and sustainability targets",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={decZoneMap}
            alt="Mid-Tipperary Decarbonising Zone"
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
              Leading the Transition
            </div>
            <h1 className="text-white mb-8" style={{ fontSize: "48px", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.95 }}>
              Mid-Tipperary Decarbonising Zone
            </h1>
            <p className="text-white/90 max-w-4xl mx-auto mb-8" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 400, lineHeight: 1.6 }}>
              The Centre of Change
            </p>
            <p className="text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              We don't just build equipment — we transform the region. Revive Group is at the core of the decarbonisation initiative, turning Tipperary into a global hub of eco-engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#009C43] text-white font-medium text-lg hover:bg-[#007A34] transition-colors" style={{ borderRadius: "16px" }}>
                Our Community Impact
              </button>
              <button className="px-8 py-4 bg-white/10 border-2 border-white text-white font-medium text-lg hover:bg-white/20 transition-colors" style={{ borderRadius: "16px" }}>
                Strategy 2030
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Vision: Tipperary as a Hub */}
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
              The Vision
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Tipperary is not just a location, it's a testing ground for zero-emission technologies
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: "Geography of Change",
                description: "Tipperary as a pioneering testing ground for zero-emission technologies and sustainable industrial practices"
              },
              {
                icon: Leaf,
                title: "Industrial Ecosystem",
                description: "How Revive EcoPark interacts with local infrastructure, farms and businesses to reduce regional carbon footprint"
              },
              {
                icon: Award,
                title: "Global Leadership",
                description: "Setting an example for industrial regions worldwide in sustainable manufacturing and circular economy"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 p-10 hover:shadow-xl transition-all duration-300"
                  style={{ borderRadius: "24px" }}
                >
                  <div className="w-14 h-14 bg-[#009C43]/10 rounded-[16px] flex items-center justify-center mb-6">
                    <Icon className="text-[#009C43]" size={28} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Zone Map */}
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
              The Decarbonising Zone
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Solar panels, wind stations, Revive EcoPark, and bio-refinery working in harmony
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 shadow-xl"
            style={{ borderRadius: "24px" }}
          >
            <img
              src={decZoneMap}
              alt="Decarbonising Zone Map"
              className="w-full h-auto"
              style={{ borderRadius: "16px" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Concrete Impact */}
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
              Concrete Impact
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Measurable results and ambitious targets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 140 Green Jobs */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 p-10 relative overflow-hidden group"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                <Users className="text-white mb-6" size={48} />
                <div className="text-6xl font-medium text-white mb-3">140</div>
                <h3 className="text-2xl font-medium text-white mb-3">Green Jobs</h3>
                <p className="text-white/90 leading-relaxed">
                  Creating employment for high-calibre specialists by 2030, strengthening the regional economy
                </p>
              </div>
            </motion.div>

            {/* Zero Carbon Target */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#009C43] to-[#007A34] p-10 relative overflow-hidden group"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                <Target className="text-white mb-6" size={48} />
                <div className="text-6xl font-medium text-white mb-3">0%</div>
                <h3 className="text-2xl font-medium text-white mb-3">Zero Carbon</h3>
                <p className="text-white/90 leading-relaxed">
                  How our plants help Tipperary achieve status as a low-emission zone
                </p>
              </div>
            </motion.div>

            {/* Energy Symbiosis */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-500 to-orange-600 p-10 relative overflow-hidden group"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                <Zap className="text-white mb-6" size={48} />
                <div className="text-6xl font-medium text-white mb-3">350</div>
                <h3 className="text-2xl font-medium text-white mb-3">kW Renewable</h3>
                <p className="text-white/90 leading-relaxed">
                  Combined solar and wind energy powering production and community integration
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Circular Economy at Scale */}
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
                At Scale
              </div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ letterSpacing: "-0.03em" }}>
                Circular Economy at Regional Scale
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Every truck refurbished through the Revive Program is a step toward decarbonisation. We prove that heavy industry can be part of the environmental solution, not the problem.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#009C43]/10 rounded-[12px] flex items-center justify-center flex-shrink-0">
                    <Recycle className="text-[#009C43]" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Regeneration Hub</div>
                    <div className="text-gray-600 text-sm">Turnpike Plant serves the entire region</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#009C43]/10 rounded-[12px] flex items-center justify-center flex-shrink-0">
                    <Sprout className="text-[#009C43]" size={28} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Clean Manufacturing</div>
                    <div className="text-gray-600 text-sm">Building One operates 100% off-grid</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#009C43]/10 rounded-[12px] flex items-center justify-center flex-shrink-0">
                    <Truck className="text-[#009C43]" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Extended Lifecycles</div>
                    <div className="text-gray-600 text-sm">30+ years of operational value per unit</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-10"
              style={{ borderRadius: "24px" }}
            >
              <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">Journey to Clean Air</h3>
              <div className="space-y-6">
                {[
                  "Old Equipment Collected",
                  "Diagnostics & Assessment",
                  "Full Regeneration at Turnpike",
                  "Modern Tech Integration",
                  "Clean Deployment in Mid-Tipperary"
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#009C43] text-white rounded-[12px] flex items-center justify-center font-medium flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-white border border-gray-200 p-4 rounded-[12px]">
                      <div className="text-gray-700 font-medium">{step}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Partnership */}
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
              Education & Partnership
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              We work with local partners, educational institutions and authorities to create the knowledge and skills needed for the economy of the future. The Decarbonising Zone is about people ready to change the world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-10"
              style={{ borderRadius: "24px" }}
            >
              <GraduationCap className="text-[#009C43] mb-6" size={48} />
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Educational Programs</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Collaboration with technical institutes to train the next generation of green engineers and sustainability specialists.
              </p>
              <ul className="space-y-3">
                {[
                  "Apprenticeship programs",
                  "Industry partnerships",
                  "Sustainability workshops",
                  "Technical certifications"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-[#009C43] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-10"
              style={{ borderRadius: "24px" }}
            >
              <Users className="text-blue-600 mb-6" size={48} />
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Community Engagement</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Active participation in regional initiatives to drive carbon neutrality and sustainable industrial development.
              </p>
              <ul className="space-y-3">
                {[
                  "Local business partnerships",
                  "Government collaboration",
                  "Community outreach",
                  "Regional planning"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones to 2030 */}
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
              Milestones to 2030
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our roadmap to a carbon-neutral future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300" style={{ borderRadius: "24px" }}>
                    <div className="w-14 h-14 bg-[#009C43] rounded-[16px] flex items-center justify-center mb-6">
                      <Icon className="text-white" size={28} />
                    </div>
                    <div className="text-4xl font-medium text-[#009C43] mb-3">{milestone.year}</div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#009C43] to-transparent" />
                  )}
                </motion.div>
              );
            })}
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
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-8" style={{ letterSpacing: "-0.03em" }}>
              Local Action, Global Impact
            </h2>
            <p className="text-xl text-white/95 leading-relaxed">
              The Decarbonising Zone in Mid-Tipperary is more than a project, it is our commitment. At Revive Group we believe global change starts at home. Our EcoPark is the heart of this zone, where every day we prove that heavy engineering can be clean, energy-efficient and beneficial to the community. We are creating new standards of living and working, turning our region into a beacon for the whole industry. Together we demonstrate that zero emissions are not a dream, but a real plan we are implementing right here in Tipperary.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
