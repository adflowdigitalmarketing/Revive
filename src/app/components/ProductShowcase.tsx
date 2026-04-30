import { motion } from "motion/react";
import { Gauge, Droplet, Shield, Truck } from "lucide-react";

interface ProductShowcaseProps {
  productImage: string;
}

const specs = [
  { icon: Droplet, label: "Tank Capacity", value: "8,000 - 16,000L" },
  { icon: Truck, label: "Chassis", value: "Scania Platform" },
  { icon: Shield, label: "Tank Material", value: "8mm Steel" },
  { icon: Gauge, label: "Build Quality", value: "Industrial Grade" }
];

export function ProductShowcase({ productImage }: ProductShowcaseProps) {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white relative">
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
        >
          <div className="bg-white border border-gray-200/80 overflow-hidden shadow-2xl"
            style={{ borderRadius: '24px' }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-[500px] md:h-auto overflow-hidden">
                <img
                  src={productImage}
                  alt="Revive Warrior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              </div>

              {/* Content Side */}
              <div className="p-12 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
                <div className="inline-block px-4 py-2 bg-[#009C43]/10 text-[#009C43] mb-6 self-start"
                  style={{ 
                    borderRadius: '12px',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em'
                  }}
                >
                  FLAGSHIP PRODUCT
                </div>

                <h2 
                  className="mb-4"
                  style={{ 
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 600,
                    letterSpacing: '-0.03em',
                    lineHeight: 0.95
                  }}
                >
                  The Warrior
                </h2>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Built on a premium Scania chassis with 8,000 to 16,000 litre tank capacity. 
                  Engineered with 8mm steel for unmatched durability and a projected 30+ year operational lifespan.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {specs.map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="bg-[#009C43]/10 p-2.5 flex-shrink-0"
                        style={{ borderRadius: '10px' }}
                      >
                        <spec.icon className="text-[#009C43]" size={20} strokeWidth={2} />
                      </div>
                      <div>
                        <div 
                          className="text-gray-900 mb-0.5"
                          style={{ 
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase'
                          }}
                        >
                          {spec.label}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {spec.value}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 bg-[#009C43] text-white px-8 py-4 hover:bg-[#007A34] transition-colors self-start"
                  style={{ 
                    borderRadius: '16px',
                    fontWeight: 600,
                    letterSpacing: '0.02em'
                  }}
                >
                  LEARN MORE ABOUT THE WARRIOR
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
