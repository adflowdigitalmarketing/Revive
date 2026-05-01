import { motion } from "motion/react";
import { TrendingDown, Leaf, CheckCircle2 } from "lucide-react";

export function EconomicsSection() {
  const metrics = [
    {
      icon: TrendingDown,
      value: "20-30%",
      label: "Lifetime Savings",
      description: "Refurbishing existing chassis yields significant CapEx savings compared to new purchases",
      color: "#009C43"
    },
    {
      icon: Leaf,
      value: "539T",
      label: "CO2e Reduction",
      description: "Extending metal structure life instead of melting reduces carbon footprint dramatically",
      color: "#009C43"
    },
    {
      icon: CheckCircle2,
      value: "252",
      label: "Units by 2030",
      description: "Proven track record with ambitious regeneration targets across global markets",
      color: "#009C43"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-block px-4 py-2 bg-emerald-50 border border-emerald-200 text-[#009C43] mb-6"
            style={{
              borderRadius: '12px',
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.1em'
            }}
          >
            VALUE PROPOSITION
          </div>
          <h2
            className="mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#1a1a1a'
            }}
          >
            Economics & Ecology
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Circular economy in action. The Revive Program combines financial efficiency
            with environmental responsibility, delivering Warrior-level performance while
            preserving capital and reducing carbon impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 hover:shadow-2xl transition-all duration-500 group"
                style={{ borderRadius: '24px' }}
              >
                {/* Accent Corner */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${metric.color}20 0%, transparent 100%)`,
                    borderTopRightRadius: '24px'
                  }}
                />

                <div className="relative">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 mb-6 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${metric.color} 0%, ${metric.color}DD 100%)`,
                      borderRadius: '16px'
                    }}
                  >
                    <Icon className="text-white" size={28} strokeWidth={2.5} />
                  </div>

                  <div
                    className="mb-3"
                    style={{
                      fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      color: metric.color,
                      lineHeight: 1
                    }}
                  >
                    {metric.value}
                  </div>

                  <div
                    className="mb-4"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#1a1a1a',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {metric.label}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                {/* CAGR Badge for first metric */}
                {index === 0 && (
                  <motion.div
                    initial={{ scale: 0, rotate: -12 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                    className="absolute -top-4 -right-4 bg-[#009C43] text-white px-4 py-2 shadow-lg"
                    style={{
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em'
                    }}
                  >
                    CAGR 31%
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
