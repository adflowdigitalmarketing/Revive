import { motion } from "motion/react";
import { RefreshCw, TrendingUp, DollarSign, Leaf, ArrowRight, Factory, Truck, Trash2, Search, Recycle, Sparkles, Wrench, Droplet } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Footer } from "../components/Footer";

const impactData = [
  { id: "year-0", year: "Year 0", traditional: 100, revive: 100 },
  { id: "year-10", year: "Year 10", traditional: 0, revive: 85 },
  { id: "year-20", year: "Year 20", traditional: 0, revive: 70 },
  { id: "year-30", year: "Year 30+", traditional: 0, revive: 60 },
];

export function CircularEconomyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#009C43" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="#009C43" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="#009C43" strokeWidth="0.5" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#009C43]/10 text-[#009C43] mb-8 rounded-[12px] text-sm font-medium tracking-widest uppercase border border-[#009C43]/20">
              The Loop of Innovation
            </div>
            <h1 className="text-gray-900 mb-8" style={{ fontSize: "48px", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.95 }}>
              Circular Economy: Rethinking the Lifecycle
            </h1>
            <p className="text-gray-600 max-w-4xl mx-auto mb-12" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 400, lineHeight: 1.6 }}>
              We stop the linear "make-use-dispose" model. At Revive Group we give assets a second life, preserving the planet's resources and your investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#009C43] text-white font-medium text-lg hover:bg-[#007A34] transition-colors" style={{ borderRadius: "16px" }}>
                Our Approach to Regeneration
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 font-medium text-lg hover:border-[#009C43] transition-colors" style={{ borderRadius: "16px" }}>
                Environmental Impact
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Linear vs Circular */}
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
              Linear vs Circular
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The difference between traditional and Revive approaches
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traditional Linear Model */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 p-10"
              style={{ borderRadius: "24px" }}
            >
              <h3 className="text-2xl font-medium text-gray-900 mb-8">Traditional Model</h3>
              <div className="space-y-6">
                {[
                  { step: "1", label: "Metal Extraction", icon: Factory },
                  { step: "2", label: "Manufacturing", icon: Factory },
                  { step: "3", label: "Operation", icon: Truck },
                  { step: "4", label: "Scrap", icon: Trash2 }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-400 rounded-[12px] flex items-center justify-center text-white font-medium flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1 bg-white/60 p-4 rounded-[12px] border border-gray-300">
                        <div className="flex items-center gap-3">
                          <Icon className="text-gray-700" size={28} />
                          <span className="text-gray-700 font-medium">{item.label}</span>
                        </div>
                      </div>
                      {index < 3 && (
                        <div className="w-8 text-center text-gray-400 text-2xl">↓</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Revive Circular Model */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#009C43] to-[#007A34] p-10 relative overflow-hidden"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-medium text-white mb-8">Revive Model</h3>
                <div className="space-y-6">
                  {[
                    { step: "1", label: "Operation", icon: Truck },
                    { step: "2", label: "Diagnostics", icon: Search },
                    { step: "3", label: "Regeneration", icon: Recycle },
                    { step: "4", label: "Second Life (30+ years)", icon: Sparkles }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-[12px] flex items-center justify-center text-[#009C43] font-medium flex-shrink-0">
                          {item.step}
                        </div>
                        <div className="flex-1 bg-white/10 backdrop-blur-md p-4 rounded-[12px] border border-white/20">
                          <div className="flex items-center gap-3">
                            <Icon className="text-white" size={28} />
                            <span className="text-white font-medium">{item.label}</span>
                          </div>
                        </div>
                        {index < 3 && (
                          <div className="w-8 text-center text-white text-2xl">↓</div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 p-6 bg-white/10 backdrop-blur-md rounded-[16px] border border-white/20">
                  <p className="text-white/90 text-sm leading-relaxed">
                    <strong>Impact:</strong> Regenerating one truck saves the energy and raw material needed to produce 10 tonnes of new steel.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Three R's of Revive */}
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
              The Three R's of Revive
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our three pillars of circular economy action
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Refurbish",
                description: "Complete refurbishment of mechanical assemblies to like-new condition",
                icon: Wrench,
                color: "from-blue-500 to-indigo-600"
              },
              {
                title: "Repurpose",
                description: "Installing modern vacuum systems on time-tested chassis",
                icon: RefreshCw,
                color: "from-purple-500 to-pink-600"
              },
              {
                title: "Recycle",
                description: "Our Compact Recycling Piston allows water to be reused during operation",
                icon: Droplet,
                color: "from-cyan-500 to-blue-600"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden"
                  style={{ borderRadius: "24px" }}
                >
                  <div className={`bg-gradient-to-br ${item.color} p-10 h-full`}>
                    <div className="relative z-10">
                      <Icon className="text-white mb-6" size={48} />
                      <h3 className="text-3xl font-medium text-white mb-4">{item.title}</h3>
                      <p className="text-white/90 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Carbon Impact */}
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
              Carbon Impact
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Measurable decarbonisation results
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Chart */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-8"
              style={{ borderRadius: "24px" }}
            >
              <h3 className="text-xl font-medium text-gray-900 mb-6">Asset Value Retention Over Time</h3>
              <div className="w-full" style={{ height: '400px' }}>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={impactData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid key="grid" strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis
                      key="x-axis"
                      dataKey="year"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#6b7280", fontSize: 12, fontWeight: 600 }}
                      dy={10}
                    />
                    <YAxis
                      key="y-axis"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#6b7280", fontSize: 12, fontWeight: 600 }}
                      tickFormatter={(value) => `${value}%`}
                      dx={-10}
                    />
                    <Tooltip key="tooltip" />
                    <Line
                      key="line-traditional"
                      type="monotone"
                      dataKey="traditional"
                      name="Traditional"
                      stroke="#9ca3af"
                      strokeWidth={3}
                      dot={{ r: 5, fill: "#9ca3af" }}
                    />
                    <Line
                      key="line-revive"
                      type="monotone"
                      dataKey="revive"
                      name="Revive Program"
                      stroke="#009C43"
                      strokeWidth={3}
                      dot={{ r: 5, fill: "#009C43" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 p-8" style={{ borderRadius: "24px" }}>
                <Leaf className="text-[#009C43] mb-4" size={40} />
                <div className="text-5xl font-medium text-[#009C43] mb-2">539T</div>
                <div className="text-xl font-medium text-gray-900 mb-2">CO₂e Savings</div>
                <p className="text-gray-600">By avoiding full replacement of old fleet units</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 p-8" style={{ borderRadius: "24px" }}>
                <TrendingUp className="text-blue-600 mb-4" size={40} />
                <div className="text-5xl font-medium text-blue-600 mb-2">252</div>
                <div className="text-xl font-medium text-gray-900 mb-2">Refurbished Units</div>
                <p className="text-gray-600">Our contribution to the circular economy by 2030</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Asset Management */}
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
                For CFOs
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6" style={{ letterSpacing: "-0.03em" }}>
                The Circular Economy is Profitable
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                You're not just helping the environment, you're optimizing Total Cost of Ownership. Your assets retain their value twice as long.
              </p>
              <div className="flex items-center gap-4 text-white">
                <DollarSign className="text-[#009C43]" size={48} />
                <div>
                  <div className="text-3xl font-medium">2x</div>
                  <div className="text-white/80">Asset Lifespan</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-10"
              style={{ borderRadius: "24px" }}
            >
              <h3 className="text-2xl font-medium text-white mb-6">Real-Life Cycle Example</h3>
              <div className="space-y-4 text-white/90">
                <p className="leading-relaxed">
                  <strong className="text-white">This truck worked 10 years in Dublin.</strong>
                </p>
                <p className="leading-relaxed">
                  In 2025 it went through the Revive Program at our EcoPark.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[#009C43]">Today it works as a Warrior Advanced, saving 500 tonnes of CO₂ emissions.</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <RefreshCw className="text-[#009C43] mx-auto mb-8" size={64} />
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8" style={{ letterSpacing: "-0.03em" }}>
              Waste is Just Resources We Haven't Learned to Use Yet
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed italic">
              "At Revive Group we believe the best way to reduce environmental impact is to create things that don't become rubbish. Our Revive Program is the embodiment of circularity. We take reliable components that have already stood the test of time and combine them with the innovations of tomorrow. This allows our clients to get modern equipment while minimizing the extraction of new raw materials. We are building a future where industry follows the principles of nature — where every finish is a new start."
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
