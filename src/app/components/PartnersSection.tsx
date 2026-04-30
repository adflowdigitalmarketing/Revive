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
    <section className="bg-white py-20 px-6">
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

        <div className="overflow-x-auto">
          <div className="flex gap-12 justify-center items-center min-w-max px-4">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
