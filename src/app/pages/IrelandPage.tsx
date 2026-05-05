import { motion } from "motion/react";
import { Factory, Award, Users, MapPin, Phone, TrendingUp, Flag, Truck, Wrench, GraduationCap, Package } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";

export function IrelandPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-600 to-green-700">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex justify-center">
              <Flag className="text-white" size={64} />
            </div>
            <h1 className="text-white mb-8" style={{ fontSize: "48px", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.95 }}>
              Revive Ireland
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-12" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 400, lineHeight: 1.6 }}>
              Center of Innovation and Manufacturing. Revive Group Headquarters. Where Warrior technologies are born and the future of circular economy is realized.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#009C43] font-medium text-lg hover:bg-gray-100 transition-colors" style={{ borderRadius: "16px" }}>
                Contact HQ
              </button>
              <button className="px-8 py-4 bg-white/10 border-2 border-white text-white font-medium text-lg hover:bg-white/20 transition-colors" style={{ borderRadius: "16px" }}>
                Book Factory Visit
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Powerhouse */}
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
              Manufacturing Powerhouse
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The heart of Revive production and innovation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Building One */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 p-10 relative overflow-hidden group"
              style={{ borderRadius: "24px" }}
            >
              <div className="relative z-10">
                <Factory className="text-white mb-6" size={48} />
                <h3 className="text-3xl font-medium text-white mb-4">Building One</h3>
                <div className="inline-block px-3 py-1 bg-white/20 rounded-[8px] text-white text-sm font-medium uppercase tracking-wide mb-6 border border-white/20">
                  Off-Grid Manufacturer
                </div>
                <p className="text-white/90 leading-relaxed mb-6">
                  A unique production facility operating independently from the main grid. Complete energy independence through renewable sources.
                </p>
                <ul className="space-y-3">
                  {[
                    "100% renewable energy powered",
                    "200kW solar array",
                    "150kW wind turbines",
                    "Advanced assembly systems"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Turnpike Plant */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#009C43] to-[#007A34] p-10 relative overflow-hidden group"
              style={{ borderRadius: "24px" }}
            >
              <div className="relative z-10">
                <Award className="text-white mb-6" size={48} />
                <h3 className="text-3xl font-medium text-white mb-4">Turnpike Plant</h3>
                <div className="inline-block px-3 py-1 bg-white/20 rounded-[8px] text-white text-sm font-medium uppercase tracking-wide mb-6 border border-white/20">
                  Regeneration Center
                </div>
                <p className="text-white/90 leading-relaxed mb-6">
                  Home of the Revive Program. Specialized facility for regenerating and upgrading used equipment.
                </p>
                <ul className="space-y-3">
                  {[
                    "Full refurbishment services",
                    "Advanced diagnostics",
                    "Technology upgrades",
                    "Quality assurance testing"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services for Irish Market */}
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
              Services for the Irish Market
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Full spectrum of support from our home base
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Truck,
                title: "Sales",
                description: "New Warrior equipment direct from factory"
              },
              {
                icon: Wrench,
                title: "Service & Maintenance",
                description: "Technical service at factory base"
              },
              {
                icon: GraduationCap,
                title: "Training Center",
                description: "Operator training on advanced systems"
              },
              {
                icon: Package,
                title: "Parts & Support",
                description: "Immediate access to genuine parts"
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-300"
                  style={{ borderRadius: "24px" }}
                >
                  <div className="mb-6 flex justify-center">
                    <Icon className="text-[#009C43]" size={48} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Impact */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ letterSpacing: "-0.03em" }}>
                Mid-Tipperary Decarbonising Zone
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We don't just build trucks—we build an ecosystem. Revive is the core of Tipperary's decarbonization zone, creating jobs and implementing green technologies in local infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-[16px]">
                  <Users className="text-[#009C43] mb-3" size={32} />
                  <div className="text-3xl font-medium text-gray-900 mb-1">140</div>
                  <div className="text-gray-600 text-sm">Specialists by 2030</div>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-[16px]">
                  <TrendingUp className="text-blue-600 mb-3" size={32} />
                  <div className="text-3xl font-medium text-gray-900 mb-1">100%</div>
                  <div className="text-gray-600 text-sm">Off-Grid Energy</div>
                </div>
              </div>
              <Link to="/sustainability/decarbonising-zone">
                <button className="mt-8 px-8 py-4 bg-[#009C43] text-white font-medium hover:bg-[#007A34] transition-colors" style={{ borderRadius: "16px" }}>
                  Learn About the Decarbonising Zone
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-700 p-12 relative overflow-hidden"
              style={{ borderRadius: "24px" }}
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-medium text-white mb-6">
                  Irish Engineering — Global Standard
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Ireland is home to Revive. At our Tipperary facility, we combine traditional Irish craftsmanship with cutting-edge automation technologies. Every component of the Warrior, every line of code in Revive Live is created here to set standards for the entire industry.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 p-10"
            style={{ borderRadius: "24px" }}
          >
            <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">
              Contact Revive Ireland HQ
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#009C43] flex-shrink-0 mt-1" size={24} />
                <div>
                  <div className="font-medium text-gray-900 mb-1">Address</div>
                  <div className="text-gray-600 leading-relaxed">
                    Building 1, Revive Eco Park<br />
                    Cooleeney, Moyne, Thurles<br />
                    Tipperary, E41 X3P9<br />
                    Ireland
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#009C43]" size={24} />
                <div>
                  <div className="font-medium text-gray-900 mb-1">Phone</div>
                  <a href="tel:+353504022422" className="text-[#009C43] hover:underline">
                    +353 (0)504 22422
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Global Locations */}
          <div className="mt-12 text-center">
            <h4 className="text-lg font-medium text-gray-600 mb-6">Other Global Locations</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {["UK", "Nordic", "France", "New Zealand"].map((location, idx) => (
                <Link key={idx} to={`/global/${location.toLowerCase().replace(" ", "-")}`}>
                  <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium hover:border-[#009C43] hover:text-[#009C43] transition-colors" style={{ borderRadius: "12px" }}>
                    {location}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
