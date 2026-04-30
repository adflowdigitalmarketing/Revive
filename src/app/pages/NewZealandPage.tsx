import { motion } from "motion/react";
import { Globe, Shield, Wifi, Package, Linkedin, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";

export function NewZealandPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-600 to-orange-700">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-7xl mb-8">🇳🇿</div>
            <h1 className="text-5xl md:text-7xl font-medium text-white mb-8" style={{ letterSpacing: "-0.03em" }}>
              Revive New Zealand
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-6 max-w-4xl mx-auto">
              Irish Strength for Kiwi Industry
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Premium vacuum solutions built for the harshest conditions. Direct access to Revive Warrior and Program technologies on the other side of the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-amber-600 font-medium text-lg hover:bg-gray-100 transition-colors" style={{ borderRadius: "16px" }}>
                Request NZ Consultation
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white font-medium text-lg hover:bg-white/20 transition-colors" style={{ borderRadius: "16px" }}>
                Technical Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Excellence, Local Presence */}
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
              Global Excellence, Local Presence
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Customers in New Zealand often fear that spare parts will take months to arrive. We're here to change that.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Sales & Support",
                description: "Clear understanding of how sales and service work on the islands with dedicated local expertise"
              },
              {
                icon: Package,
                title: "Parts Inventory",
                description: "Local spare parts warehouse (Critical Spares) to minimize downtime and ensure rapid response"
              },
              {
                icon: Shield,
                title: "Expertise on the Ground",
                description: "Our specialists in New Zealand know local conditions and operational specifics"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
                  style={{ borderRadius: "24px" }}
                >
                  <div className="w-14 h-14 bg-amber-500/10 rounded-[16px] flex items-center justify-center mb-6">
                    <Icon className="text-amber-600" size={28} />
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

      {/* Built for the Rugged Terrain */}
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
              Built for the Rugged Terrain
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Durability designed for New Zealand's unique landscape and climate
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-500 to-orange-600 p-10 relative overflow-hidden"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-3xl font-medium text-white mb-6">
                  Heavy-Duty Engineering
                </h3>
                <ul className="space-y-4">
                  {[
                    "Scania chassis withstands intensive 24/7 operation",
                    "Jurop/Uraca components for maximum reliability",
                    "Dust & terrain protection systems",
                    "Reinforced boom arm hydraulics"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/90">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 relative overflow-hidden"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <Wifi className="text-white mb-6" size={48} />
                <h3 className="text-3xl font-medium text-white mb-4">
                  Remote Monitoring (Revive Live)
                </h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Thanks to Revive Live, engineers from Ireland can remotely diagnose a truck in New Zealand.
                </p>
                <p className="text-white/80 italic">
                  "We see your machine's condition, even if we're on the other hemisphere."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability: Keeping NZ Green */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-6">🌿</div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ letterSpacing: "-0.03em" }}>
                Keeping NZ Green
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                New Zealand cares deeply about ecology (Clean Green Image). Our strategy works perfectly here.
              </p>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 p-6 rounded-[16px]">
                  <h4 className="font-medium text-gray-900 mb-2">Circular Solutions</h4>
                  <p className="text-gray-600 text-sm">Revive Program upgrades fleet without importing massive amounts of new metal</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-[16px]">
                  <h4 className="font-medium text-gray-900 mb-2">Zero-Oil Vacuum</h4>
                  <p className="text-gray-600 text-sm">Oil-free pumps prevent soil contamination</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-600 to-orange-700 p-12 relative overflow-hidden"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-3xl font-medium text-white mb-6">
                  A Bridge Between Two Islands of Innovation
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Ireland and New Zealand are separated by thousands of kilometers, but united by a shared love of quality engineering and respect for nature. Revive New Zealand brings the best of Irish machinery manufacturing to the Oceania market. Our Warrior is not just a machine, it's the result of global experience, adapted to New Zealand's challenges.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logistics & Delivery */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Package className="text-amber-600 mx-auto mb-8" size={64} />
            <h2 className="text-4xl md:text-5xl font-medium mb-8" style={{ letterSpacing: "-0.03em" }}>
              Logistics & Delivery
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We've established a reliable supply chain from our factory in Ireland to New Zealand's main ports. Every unit of equipment undergoes complete pre-sale preparation directly before handover to the client.
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
            className="bg-gradient-to-br from-amber-50 to-white border border-amber-200 p-10"
            style={{ borderRadius: "24px" }}
          >
            <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">
              Contact Revive New Zealand
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Linkedin className="text-amber-600" size={24} />
                <div>
                  <div className="font-medium text-gray-900 mb-1">Connect on LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/roger-woods-347482ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:underline inline-flex items-center gap-2"
                  >
                    Roger Woods - NZ Representative <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Time Zone Indicator */}
            <div className="mt-8 pt-8 border-t border-amber-200">
              <div className="text-center">
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Time Zone Advantage</div>
                <p className="text-gray-700 italic">
                  "Our office in Tipperary wakes up when you're finishing your day—we work on your requests while you rest."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Other Global Locations */}
          <div className="mt-12 text-center">
            <h4 className="text-lg font-medium text-gray-600 mb-6">Other Global Locations</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {["Ireland", "UK", "Nordic", "France"].map((location, idx) => (
                <Link key={idx} to={`/global/${location.toLowerCase()}`}>
                  <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium hover:border-amber-600 hover:text-amber-600 transition-colors" style={{ borderRadius: "12px" }}>
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
