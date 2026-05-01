import { motion } from "motion/react";
import { Truck, Shield, TrendingUp, MapPin, Phone, Linkedin, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";

export function UKPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-7xl mb-8">🇬🇧</div>
            <h1 className="text-5xl md:text-7xl font-medium text-white mb-8" style={{ letterSpacing: "-0.03em" }}>
              Revive UK
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-6 max-w-4xl mx-auto">
              Powerful Solutions for British Infrastructure
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Sales, service support, and rental of premium Revive equipment throughout the United Kingdom. Engineering trusted by professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-medium text-lg hover:bg-gray-100 transition-colors" style={{ borderRadius: "16px" }}>
                View Available Fleet
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white font-medium text-lg hover:bg-white/20 transition-colors" style={{ borderRadius: "16px" }}>
                Order Service in the UK
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
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
              Core Services in UK
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive solutions for the British market
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sales & Distribution */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 p-10 relative overflow-hidden group"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <Truck className="text-white mb-6" size={48} />
                <h3 className="text-2xl font-medium text-white mb-4">Sales & Distribution</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Full access to the Warrior and Program lineup. Direct deliveries from the Irish factory to your UK location.
                </p>
                <ul className="space-y-2">
                  {["Complete product range", "Factory-direct pricing", "Fast UK delivery"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Specialized Rental */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-500 to-green-600 p-10 relative overflow-hidden group"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <TrendingUp className="text-white mb-6" size={48} />
                <h3 className="text-2xl font-medium text-white mb-4">Specialized Rental Fleet</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Equipment rental for large projects. Get Warrior for temporary use with full technical support.
                </p>
                <ul className="space-y-2">
                  {["Flexible terms", "Try before you buy", "Project-based rentals"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* UK-Wide Service */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500 to-pink-600 p-10 relative overflow-hidden group"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <Shield className="text-white mb-6" size={48} />
                <h3 className="text-2xl font-medium text-white mb-4">UK-Wide Service</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Mobile service teams and partner service centers. Minimal downtime for your equipment.
                </p>
                <ul className="space-y-2">
                  {["Nationwide coverage", "Rapid response", "Genuine parts"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value for UK Customers */}
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
              Why Revive for UK Customers?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Compliance & Safety",
                description: "Full compliance with British workplace safety standards and environmental regulations (including ULEZ requirements)"
              },
              {
                title: "Efficiency for Contractors",
                description: "The power of the Jurop PVT 400 pump helps complete projects faster in busy British cities"
              },
              {
                title: "Sustainability Goals",
                description: "Helping British companies achieve their Net Zero goals through equipment with a smaller carbon footprint"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
                style={{ borderRadius: "24px" }}
              >
                <h3 className="text-xl font-medium text-gray-900 mb-4">
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

      {/* Seamless Logistics */}
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
                Seamless Logistics
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Thanks to the proximity of our factories in Tipperary, we ensure the fastest delivery of equipment and spare parts to the UK. No complex supply chains — direct manufacturer-to-client connection.
              </p>
              <div className="space-y-4">
                {[
                  "Direct Ireland-UK shipping routes",
                  "Minimal transit times",
                  "Real-time tracking",
                  "Customs-cleared deliveries"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#009C43] rounded-[8px] flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 relative overflow-hidden"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-3xl font-medium text-white mb-6">
                  Your Productivity — Our Priority in the UK
                </h3>
                <p className="text-white/90 leading-relaxed">
                  The UK market demands reliability and speed. At Revive UK, we understand that every hour of downtime costs money. That's why we offer not just trucks, but a complete support ecosystem. From new Warrior to refurbished Program machines — we equip British contractors with tools that work longer, quieter, and more efficiently.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 p-10"
            style={{ borderRadius: "24px" }}
          >
            <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">
              Contact Revive UK
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Linkedin className="text-blue-600" size={24} />
                <div>
                  <div className="font-medium text-gray-900 mb-1">Connect on LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/chris-hughes-2309856a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline inline-flex items-center gap-2"
                  >
                    Chris Hughes - UK Representative <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Global Locations */}
          <div className="mt-12 text-center">
            <h4 className="text-lg font-medium text-gray-600 mb-6">Other Global Locations</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {["Ireland", "Nordic", "France", "New Zealand"].map((location, idx) => (
                <Link key={idx} to={`/global/${location.toLowerCase().replace(" ", "-")}`}>
                  <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-colors" style={{ borderRadius: "12px" }}>
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
