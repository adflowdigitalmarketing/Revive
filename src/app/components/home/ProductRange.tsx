import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import warrior from "../../../imports/Revive_Warrior_14-4_-_Studio.jpeg";
import program from "../../../imports/new.png";

export function ProductRange() {
  const products = [
    {
      name: "Revive Warrior",
      tagline: "Premium New Build",
      description: "Engineering for a 30-year lifecycle. Premium Scania chassis with advanced vacuum and jetting systems, designed to be built, refurbished, and redeployed repeatedly.",
      image: warrior,
      features: ["8,000L - 16,000L capacity", "43,300 L/min performance", "93% vacuum efficiency", "Revive ARMINS system"],
      link: "/products/warrior",
      accent: "#1a1a1a"
    },
    {
      name: "Revive Program",
      tagline: "Regeneration & Savings",
      description: "Transform your existing assets into modern powerful machines. Same Warrior-level performance at 20-30% cost savings with measurable environmental benefits.",
      image: program,
      features: ["Your proven chassis", "Warrior technology heart", "6-8 week turnaround", "Full warranty coverage"],
      link: "/products/program",
      accent: "#009C43"
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
          <div
            className="inline-block px-4 py-2 bg-white border border-gray-300 text-gray-700 mb-6 shadow-sm"
            style={{
              borderRadius: '12px',
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.1em'
            }}
          >
            OUR SOLUTIONS
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
            Product Range
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Choose between premium new builds or cost-effective regeneration—both
            engineered for decades of reliable service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className="bg-white border-2 border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
                style={{ borderRadius: '24px' }}
              >
                {/* Image */}
                <div className="relative h-96 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Name Badge */}
                  <div className="absolute top-6 left-6">
                    <div
                      className="bg-white/90 backdrop-blur-md px-6 py-3"
                      style={{
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        color: product.accent
                      }}
                    >
                      {product.name.toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3
                    className="mb-3"
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      color: product.accent
                    }}
                  >
                    {product.tagline}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6 flex-grow">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 px-4 py-3 text-center"
                        style={{ borderRadius: '12px' }}
                      >
                        <span className="text-sm font-semibold text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a href={product.link}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 font-semibold flex items-center justify-center gap-2 transition-all group-hover:gap-4"
                      style={{
                        borderRadius: '16px',
                        fontSize: '1rem',
                        letterSpacing: '0.02em',
                        backgroundColor: product.accent,
                        color: 'white'
                      }}
                    >
                      LEARN MORE
                      <ArrowRight size={18} />
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
