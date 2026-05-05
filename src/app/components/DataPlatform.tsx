import { motion } from "motion/react";
import { Activity, BarChart3, Clock, TrendingUp } from "lucide-react";

interface DataPlatformProps {
  dashboardImage: string;
}

export function DataPlatform({ dashboardImage }: DataPlatformProps) {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 relative">
      {/* Grain Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 mb-6"
            style={{ 
              borderRadius: '12px',
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.05em'
            }}
          >
            REVIVE LIVE PLATFORM
          </div>

          <h2 
            className="mb-6"
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 0.95
            }}
          >
            Data-Driven
            <br />
            Drainage Operations
          </h2>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Real-time fleet monitoring and predictive maintenance powered by IoT sensors and AI analytics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: Activity, label: "Live Monitoring", value: "24/7", color: "emerald" },
            { icon: BarChart3, label: "Efficiency Gain", value: "+38%", color: "blue" },
            { icon: Clock, label: "Uptime", value: "99.2%", color: "violet" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100/50 border border-${stat.color}-200/50 p-8 text-center`}
              style={{ borderRadius: '24px' }}
            >
              <stat.icon className={`text-${stat.color}-600 mx-auto mb-4`} size={40} strokeWidth={1.5} />
              <div 
                className={`text-${stat.color}-700 mb-2`}
                style={{
                  fontSize: '3rem',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  lineHeight: 1
                }}
              >
                {stat.value}
              </div>
              <div className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200/80 overflow-hidden shadow-2xl relative"
          style={{ borderRadius: '24px' }}
        >
          {/* Glass Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 border-b border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white text-sm font-semibold uppercase tracking-wider mb-1">
                  Revive Live Dashboard
                </div>
                <div className="text-gray-400 text-xs">
                  Fleet Performance & Analytics
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
            </div>
          </div>

          {/* Dashboard Image */}
          <div className="relative h-[400px] bg-gradient-to-br from-gray-50 to-gray-100">
            <img
              src={dashboardImage}
              alt="Revive Live Dashboard"
              className="w-full h-full object-cover opacity-90"
            />
            
            {/* Floating Widget Example */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute top-6 right-6 bg-white/90 backdrop-blur-xl border border-white/40 shadow-xl p-4"
              style={{ borderRadius: '16px', minWidth: '200px' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="text-[#009C43]" size={20} />
                <span className="text-xs font-bold uppercase tracking-wide text-gray-700">
                  Live Status
                </span>
              </div>
              <div className="text-2xl font-semibold text-gray-900 mb-1">
                12 Active
              </div>
              <div className="text-xs text-gray-600">
                Fleet vehicles operational
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
