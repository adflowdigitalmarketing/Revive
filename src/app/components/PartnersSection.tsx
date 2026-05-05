import { motion } from "motion/react";
import scaniaLogo from "../../imports/scania.png";
import tipLogo from "../../imports/tip.png";
import acumecLogo from "../../imports/acumec.png";

const partners = [
  { name: "Scania", logo: scaniaLogo },
  { name: "TIP Group", logo: tipLogo },
  { name: "Acumec", logo: acumecLogo },
  { name: "URACA", logo: scaniaLogo },
  { name: "Jurop", logo: tipLogo },
  { name: "Boschung", logo: acumecLogo }
];

export function PartnersSection() {
  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-3" style={{ fontSize: '1.75rem', fontWeight: 300, letterSpacing: '-0.01em' }}>
            Global Network & Partners
          </h2>
        </motion.div>

        <div className="relative">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-20 items-center"
              animate={{
                x: [0, -1000]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
              style={{ width: "max-content" }}
            >
              {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-24 w-auto object-contain grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
