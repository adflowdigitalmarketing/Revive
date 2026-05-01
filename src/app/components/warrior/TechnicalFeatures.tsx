import { motion } from "motion/react";
import { Shield, Wrench, Recycle, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "8mm Steel Tank",
    description: "Military-grade construction engineered for decades of intensive daily use",
    color: "emerald"
  },
  {
    icon: Wrench,
    title: "Detachable Subframe",
    description: "Reinforced galvanised design enables complete refurbishment and chassis upgrades",
    color: "blue"
  },
  {
    icon: Recycle,
    title: "Circular Design",
    description: "54% material reuse by weight across multiple lifecycle iterations",
    color: "teal"
  },
  {
    icon: Award,
    title: "Scania Platform",
    description: "Premium chassis with global service network and proven reliability",
    color: "violet"
  }
];

export function TechnicalFeatures() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white relative">
      {/* Grain Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
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
            className="mb-6"
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1
            }}
          >
            Built to Last Generations
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Every Warrior is engineered with longevity and sustainability at its core
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-200/60 p-10 group"
              style={{ borderRadius: '24px' }}
            >
              <div className={`bg-gradient-to-br from-${feature.color}-50 to-${feature.color}-100/50 p-4 inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}
                style={{ borderRadius: '16px' }}
              >
                <feature.icon 
                  className={`text-${feature.color}-600`}
                  size={32} 
                  strokeWidth={2} 
                />
              </div>

              <h3 
                className="mb-3"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  letterSpacing: '-0.01em'
                }}
              >
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
