import { motion } from "motion/react";
import { Recycle, TrendingUp, Globe2 } from "lucide-react";

export function ValueProposition() {
  const values = [
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Engineering systems designed for a 30+ year lifecycle, challenging the traditional 'buy, use, replace' model"
    },
    {
      icon: TrendingUp,
      title: "Performance Excellence",
      description: "43,300 L/min capacity with 93% guaranteed vacuum efficiency across all our solutions"
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Delivering sustainable drainage infrastructure from Ireland to New Zealand and beyond"
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
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
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#1a1a1a'
            }}
          >
            Rethinking How Infrastructure
            <br />
            Is Built and Used
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Moving beyond the traditional replace model, Revive delivers circular,
            long-life systems for modern drainage networks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div
                  className="bg-white border border-gray-200 p-8 hover:shadow-2xl transition-all duration-500 h-full"
                  style={{ borderRadius: '24px' }}
                >
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#009C43] to-[#007A34] mb-6 group-hover:scale-110 transition-transform duration-500"
                    style={{ borderRadius: '16px' }}
                  >
                    <Icon className="text-white" size={32} strokeWidth={2.5} />
                  </div>

                  <h3
                    className="mb-4"
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      color: '#1a1a1a'
                    }}
                  >
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
