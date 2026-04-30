import { motion } from "motion/react";
import { Factory, Wrench, RefreshCw, Leaf } from "lucide-react";

export function CircularProcess() {
  const steps = [
    {
      icon: Factory,
      title: "Build",
      description: "Premium engineering with 30+ year design life"
    },
    {
      icon: Wrench,
      title: "Refurbish",
      description: "Complete regeneration through Revive Program"
    },
    {
      icon: RefreshCw,
      title: "Redeploy",
      description: "Return to service with warranty equivalence"
    },
    {
      icon: Leaf,
      title: "Sustain",
      description: "Reduce carbon footprint, extend asset value"
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white via-emerald-50/30 to-white">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23009C43' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
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
            THE REVIVE TRIANGLE
          </div>
          <h2
            className="mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#1a1a1a'
            }}
          >
            Circular Engineering Process
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Our unique approach to infrastructure lifecycle management,
            designed to maximize value while minimizing environmental impact
          </p>
        </motion.div>

        {/* Process Circle */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="none"
              stroke="#009C43"
              strokeWidth="2"
              strokeDasharray="8 8"
              opacity="0.2"
            />
          </svg>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className="relative w-28 h-28 bg-white border-4 border-[#009C43] rounded-full flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300"
                  >
                    <Icon className="text-[#009C43]" size={40} strokeWidth={2.5} />
                    <div
                      className="absolute -bottom-3 bg-[#009C43] text-white px-3 py-1"
                      style={{
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 700
                      }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <h3
                    className="mb-2"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#1a1a1a'
                    }}
                  >
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { value: "539T", label: "CO₂ Saved", sublabel: "Through circular approach" },
            { value: "252", label: "Units by 2030", sublabel: "Regeneration target" },
            { value: "31%", label: "CAGR Growth", sublabel: "Market expansion" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-gradient-to-br from-[#009C43] to-[#007A34] text-white p-8 text-center"
              style={{ borderRadius: '20px' }}
            >
              <div
                className="mb-2"
                style={{
                  fontSize: '3rem',
                  fontWeight: 600,
                  letterSpacing: '-0.02em'
                }}
              >
                {stat.value}
              </div>
              <div className="font-bold text-lg mb-1">{stat.label}</div>
              <div className="text-white/80 text-sm">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
