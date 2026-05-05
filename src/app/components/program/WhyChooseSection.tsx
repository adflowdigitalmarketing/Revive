import { motion } from "motion/react";
import { DollarSign, Clock, Leaf, TrendingUp } from "lucide-react";

export function WhyChooseSection() {
  const comparisons = [
    {
      icon: DollarSign,
      warrior: "Full purchase price",
      program: "20-30% cost savings",
      advantage: "program"
    },
    {
      icon: Clock,
      warrior: "12-16 week build",
      program: "6-8 week regeneration",
      advantage: "program"
    },
    {
      icon: Leaf,
      warrior: "New chassis production",
      program: "Existing chassis reuse",
      advantage: "program"
    },
    {
      icon: TrendingUp,
      warrior: "43,300 L/min @ 93%",
      program: "43,300 L/min @ 93%",
      advantage: "equal"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5"
        style={{
          background: 'radial-gradient(circle, #009C43 0%, transparent 70%)'
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 opacity-5"
        style={{
          background: 'radial-gradient(circle, #009C43 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative">
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
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#1a1a1a'
            }}
          >
            Why Choose Revive Program?
          </h2>
        </motion.div>

        {/* Main Value Proposition */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#009C43] to-[#007A34] text-white p-12 mb-16 relative overflow-hidden"
          style={{ borderRadius: '24px' }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
          <div className="relative max-w-4xl mx-auto">
            <h3
              className="mb-6 text-center"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: 600,
                letterSpacing: '-0.02em'
              }}
            >
              Circular Economy in Action
            </h3>
            <p
              className="text-white/95 leading-relaxed text-center"
              style={{ fontSize: '1.125rem' }}
            >
              "It's not just words, it's the Revive Program business model. We take your reliable
              chassis and integrate the 'heart' from Warrior. You get the same performance at 43,300 L/min
              and guaranteed 93% vacuum, while preserving a significant portion of investment. It's the
              smartest way to renew your fleet in line with modern environmental standards."
            </p>
          </div>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {comparisons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
                style={{ borderRadius: '20px' }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 mb-4"
                  style={{ borderRadius: '12px' }}
                >
                  <Icon className="text-[#009C43]" size={22} strokeWidth={2.5} />
                </div>

                {/* Warrior */}
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="text-gray-500 text-xs font-semibold mb-2" style={{ letterSpacing: '0.05em' }}>
                    WARRIOR
                  </div>
                  <div className="text-gray-700 text-sm font-medium">
                    {item.warrior}
                  </div>
                </div>

                {/* Program */}
                <div>
                  <div className="text-[#009C43] text-xs font-semibold mb-2" style={{ letterSpacing: '0.05em' }}>
                    PROGRAM
                  </div>
                  <div
                    className="font-bold"
                    style={{
                      fontSize: '0.875rem',
                      color: item.advantage === 'program' ? '#009C43' : '#1a1a1a'
                    }}
                  >
                    {item.program}
                  </div>
                </div>

                {/* Advantage Badge */}
                {item.advantage === 'program' && (
                  <div className="mt-3 inline-block px-3 py-1 bg-emerald-50 border border-emerald-200 text-[#009C43] text-xs font-bold"
                    style={{
                      borderRadius: '8px',
                      letterSpacing: '0.05em'
                    }}
                  >
                    ADVANTAGE
                  </div>
                )}
                {item.advantage === 'equal' && (
                  <div className="mt-3 inline-block px-3 py-1 bg-gray-100 border border-gray-300 text-gray-700 text-xs font-bold"
                    style={{
                      borderRadius: '8px',
                      letterSpacing: '0.05em'
                    }}
                  >
                    EQUAL
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Target Customer */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gray-50 border border-gray-300 px-8 py-6 max-w-3xl"
            style={{ borderRadius: '20px' }}
          >
            <div
              className="mb-3"
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#1a1a1a'
              }}
            >
              Perfect For
            </div>
            <p className="text-gray-700 leading-relaxed">
              Fleet owners who want Warrior-level performance at a lower investment,
              faster delivery, and measurable environmental impact. Save budget while
              receiving ready equipment that meets modern sustainability standards.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
