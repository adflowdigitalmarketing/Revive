import { motion } from "motion/react";
import { Snowflake, Wind, Leaf, MapPin, Linkedin, ExternalLink, Flag, ShoppingCart, Wrench, Package } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";

export function NordicPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-600 to-blue-700">
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
              Revive Nordics
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-12" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 400, lineHeight: 1.6 }}>
              Sustainable Development for the North. Innovative solutions for Denmark and Scandinavia. Combining Irish durability with Scandinavian ambition for zero emissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-cyan-600 font-medium text-lg hover:bg-gray-100 transition-colors" style={{ borderRadius: "16px" }}>
                Contact Denmark Office
              </button>
              <button className="px-8 py-4 bg-white/10 border-2 border-white text-white font-medium text-lg hover:bg-white/20 transition-colors" style={{ borderRadius: "16px" }}>
                Learn About Service
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Nordic Vision */}
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
              The Nordic Vision
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Current hub and expansion plans across Scandinavia
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500 to-blue-600 p-12 md:p-16 relative overflow-hidden"
            style={{ borderRadius: "24px" }}
          >
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-white/20 text-white mb-6 rounded-[12px] text-sm font-medium tracking-widest uppercase border border-white/20">
                Current Hub
              </div>
              <h3 className="text-4xl md:text-5xl font-medium text-white mb-6" style={{ letterSpacing: "-0.03em" }}>
                Denmark
              </h3>
              <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-3xl">
                Our central hub in the region. Sales, full service maintenance and flexible rental terms for Danish contractors. The gateway to Scandinavian excellence.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "Sales Support", icon: ShoppingCart },
                  { label: "Service Center", icon: Wrench },
                  { label: "Rental Fleet", icon: Package }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-white/10 border border-white/20 p-6 rounded-[16px]">
                      <Icon className="text-white mb-3" size={40} />
                      <div className="text-white font-medium">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Built for the North */}
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
              Built for the North
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Technical features designed for Scandinavian conditions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Snowflake,
                title: "Cold Climate Performance",
                description: "Heated aluminum cabinets and system freeze protection (ideal for Danish winters)",
                color: "from-cyan-500 to-blue-600"
              },
              {
                icon: Wind,
                title: "Winter-Ready Systems",
                description: "Robust hydraulics designed to operate in extreme Nordic conditions",
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: Leaf,
                title: "Zero-Emission Focus",
                description: "Oil-free pumps and sustainable operations aligned with Nordic environmental goals",
                color: "from-emerald-500 to-green-600"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden"
                  style={{ borderRadius: "24px" }}
                >
                  <div className={`bg-gradient-to-br ${feature.color} p-10 h-full`}>
                    <div className="relative z-10">
                      <Icon className="text-white mb-6" size={48} />
                      <h3 className="text-2xl font-medium text-white mb-4">{feature.title}</h3>
                      <p className="text-white/90 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
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
                Services: Sales, Service & Rental
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We offer comprehensive solutions adapted to the Nordic market's high standards and demanding conditions.
              </p>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 p-6 rounded-[16px]">
                  <h4 className="font-medium text-gray-900 mb-2">Try Before You Buy</h4>
                  <p className="text-gray-600 text-sm">Rental opportunity to try Revive equipment before purchase commitment</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-[16px]">
                  <h4 className="font-medium text-gray-900 mb-2">Local Support</h4>
                  <p className="text-gray-600 text-sm">Maintenance in Denmark to ensure uninterrupted operation</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-600 to-blue-700 p-12 relative overflow-hidden"
              style={{ borderRadius: "24px" }}
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-medium text-white mb-6">
                  A New Standard for Scandinavian Roads
                </h3>
                <p className="text-white/90 leading-relaxed">
                  We began our journey in Scandinavia with Denmark because this market understands the value of resources. Revive Warrior and Program are the perfect answer to Danish business demands for reliability and environmental responsibility. We understand the specifics of the northern climate and the strictness of local standards.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability & Decarbonisation */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Leaf className="text-[#009C43] mx-auto mb-8" size={64} />
            <h2 className="text-4xl md:text-5xl font-medium mb-8" style={{ letterSpacing: "-0.03em" }}>
              Sustainability & Decarbonisation
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Denmark sets the pace in the fight against climate change. Revive Group supports these ambitions through the Revive Program — we don't just sell trucks, we help Danish companies implement a circular economy by refurbishing their existing fleet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-200 p-10"
            style={{ borderRadius: "24px" }}
          >
            <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">
              Contact Revive Nordic
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Linkedin className="text-cyan-600" size={24} />
                <div>
                  <div className="font-medium text-gray-900 mb-1">Connect on LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/jesper-hejselb%C3%A6k-33aa5527/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:underline inline-flex items-center gap-2"
                  >
                    Jesper Hejselbæk - Nordic Representative <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Global Locations */}
          <div className="mt-12 text-center">
            <h4 className="text-lg font-medium text-gray-600 mb-6">Other Global Locations</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {["Ireland", "UK", "France", "New Zealand"].map((location, idx) => (
                <Link key={idx} to={`/global/${location.toLowerCase().replace(" ", "-")}`}>
                  <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium hover:border-cyan-600 hover:text-cyan-600 transition-colors" style={{ borderRadius: "12px" }}>
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
