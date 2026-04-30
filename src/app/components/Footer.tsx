import { motion } from "motion/react";
import scaniaLogo from "../../imports/scania.png";
import tipLogo from "../../imports/tip.png";
import acumecLogo from "../../imports/acumec.png";

const partners = [
  { name: "Scania", description: "Premium Chassis Partner", logo: scaniaLogo },
  { name: "TIP Group", description: "Logistics & Fleet Solutions", logo: tipLogo },
  { name: "Acumec", description: "Engineering Technology", logo: acumecLogo }
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Partners Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 
            className="text-gray-400 mb-12"
            style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}
          >
            Partners in Sustainability
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white border border-gray-200/60 overflow-hidden relative flex flex-col items-center justify-center"
                style={{ borderRadius: '20px', minHeight: '220px' }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover absolute inset-0 transition-all duration-300"
                  style={{ borderRadius: '20px' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="text-white text-sm text-center font-medium">
                    {partner.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div 
                className="mb-4"
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em'
                }}
              >
                REVIVE<span className="text-[#009C43]">.</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Engineering circular economy solutions for the sewer cleaning industry with a commitment to 30+ year product lifecycles.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 
                className="mb-4"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                Solutions
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#009C43] transition-colors">
                    The Warrior Fleet
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#009C43] transition-colors">
                    Revive Live Platform
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#009C43] transition-colors">
                    Maintenance Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#009C43] transition-colors">
                    Circular Economy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 
                className="mb-4"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Revive Eco Park</li>
                <li>County Tipperary, Ireland</li>
                <li className="pt-2">
                  <a href="mailto:info@revivegroup.com" className="hover:text-[#009C43] transition-colors">
                    info@revivegroup.com
                  </a>
                </li>
                <li>
                  <a href="tel:+353" className="hover:text-[#009C43] transition-colors">
                    +353 (0) 123 4567
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2026 Revive Group. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-[#009C43] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#009C43] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#009C43] transition-colors">Sustainability Report</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
