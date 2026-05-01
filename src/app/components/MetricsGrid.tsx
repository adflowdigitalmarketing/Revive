import { motion } from "motion/react";
import { Calendar, Recycle, Droplets } from "lucide-react";

const metrics = [
  {
    icon: Calendar,
    value: "30+",
    label: "Years",
    description: "Projected lifespan per unit",
    gradient: "from-emerald-50 to-green-50"
  },
  {
    icon: Recycle,
    value: "54%",
    label: "Material Reuse",
    description: "By weight",
    gradient: "from-teal-50 to-cyan-50"
  },
  {
    icon: Droplets,
    value: "95%",
    label: "Water Purity",
    description: "Via Patented Recycling Piston",
    gradient: "from-blue-50 to-indigo-50"
  }
];

export function MetricsGrid() {
  return (
    <section className="py-24 px-6 bg-white relative">
      {/* Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
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
          <h2 
            className="mb-4"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1
            }}
          >
            Strategic Metrics
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Engineered for sustainability and longevity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`bg-gradient-to-br ${metric.gradient} border border-gray-200/50 p-10 relative overflow-hidden group`}
              style={{ borderRadius: '24px' }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#009C43]/0 to-[#009C43]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <metric.icon 
                  className="text-[#009C43] mb-6" 
                  size={48} 
                  strokeWidth={1.5}
                />
                
                <div 
                  className="mb-2"
                  style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    fontWeight: 600,
                    letterSpacing: '-0.04em',
                    lineHeight: 0.9,
                    color: '#009C43'
                  }}
                >
                  {metric.value}
                </div>
                
                <div 
                  className="text-gray-800 mb-3"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    letterSpacing: '-0.01em'
                  }}
                >
                  {metric.label}
                </div>
                
                <p className="text-gray-600 text-base">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
