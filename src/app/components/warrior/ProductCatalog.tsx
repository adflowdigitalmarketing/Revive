import { motion } from "motion/react";
import { ArrowRight, Settings } from "lucide-react";
import warrior123 from "../../../imports/Revive_Warrior_12-3_-_Studio.jpeg";
import warrior144 from "../../../imports/Revive_Warrior_14-4_-_Studio.jpeg";
import warriorXL from "../../../imports/Revive_XLWarrior_16-5_-_Studio.jpeg";

interface Product {
  name: string;
  subtitle: string;
  specs: string[];
  image: string;
  primaryButton: string;
  secondaryButton: string;
}

const products: Product[] = [
  {
    name: "Warrior 12-3",
    subtitle: "Compact Power Solution",
    specs: [
      "Scania P320 chassis",
      "8,000L tank capacity",
      "320HP power output",
      "Pratissoli HMP-40 high-pressure pump",
      "Jurop PVT 40 vacuum system",
      "Revive 3 ARMINS operating system"
    ],
    image: warrior123,
    primaryButton: "Explore Specs",
    secondaryButton: "Build Your Warrior"
  },
  {
    name: "Warrior 14-4",
    subtitle: "Enhanced Performance",
    specs: [
      "Scania P320 6x4/4*4NB chassis",
      "12,000L tank capacity",
      "320HP power output",
      "Jurop PVT-40 high-pressure pump",
      "Jurop PVT-45 vacuum system",
      "Revive 3 ARMINS operating system"
    ],
    image: warrior144,
    primaryButton: "Explore Specs",
    secondaryButton: "Build Your Warrior"
  },
  {
    name: "Warrior Custom",
    subtitle: "Fully Configurable",
    specs: [
      "Tank capacity: 8,000L - 16,000L+",
      "Chassis power: 320HP - 500HP+",
      "Multiple Scania chassis configurations",
      "Customizable pump systems",
      "Specialized market configurations",
      "Bespoke engineering solutions"
    ],
    image: warriorXL,
    primaryButton: "View Configurations",
    secondaryButton: "Start Custom Build"
  }
];

export function ProductCatalog() {
  return (
    <section className="py-24 px-6 bg-white relative">
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
          className="text-center mb-20"
        >
          <h2 
            className="mb-6"
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.04em',
              lineHeight: 1
            }}
          >
            Choose Your Warrior
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Three configurations engineered for excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div 
                className="bg-white border border-gray-200/80 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
                style={{ borderRadius: '24px' }}
              >
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Product Badge */}
                  <div className="absolute top-6 left-6">
                    <div 
                      className="bg-white/90 backdrop-blur-md px-4 py-2"
                      style={{ 
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        color: '#009C43'
                      }}
                    >
                      {product.name.toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 
                    className="mb-3"
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      color: '#1a1a1a'
                    }}
                  >
                    {product.subtitle}
                  </h3>

                  {/* Specs List */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {product.specs.map((spec, specIndex) => (
                      <li 
                        key={specIndex}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-[#009C43] mt-2 flex-shrink-0"
                          style={{ borderRadius: '50%' }}
                        />
                        <span className="text-sm leading-relaxed">{spec}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="space-y-3">
                    {/* Primary Button (Dark/Solid) */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#009C43] text-white px-6 py-4 hover:bg-[#007A34] transition-all group/btn flex items-center justify-center gap-2"
                      style={{ 
                        borderRadius: '16px',
                        fontWeight: 600,
                        fontSize: '0.9375rem',
                        letterSpacing: '0.01em'
                      }}
                    >
                      {product.primaryButton}
                      <ArrowRight 
                        size={18} 
                        className="group-hover/btn:translate-x-1 transition-transform" 
                      />
                    </motion.button>

                    {/* Secondary Button (Glassmorphism/Outline) */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white/40 backdrop-blur-sm border-2 border-[#009C43]/30 text-[#009C43] px-6 py-4 hover:bg-[#009C43]/5 hover:border-[#009C43]/50 transition-all group/btn flex items-center justify-center gap-2 relative overflow-hidden"
                      style={{ 
                        borderRadius: '16px',
                        fontWeight: 600,
                        fontSize: '0.9375rem',
                        letterSpacing: '0.01em'
                      }}
                    >
                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#009C43]/0 via-[#009C43]/10 to-[#009C43]/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                      
                      <Settings 
                        size={18} 
                        className="relative z-10 group-hover/btn:rotate-90 transition-transform duration-500" 
                      />
                      <span className="relative z-10">
                        {product.secondaryButton}
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
