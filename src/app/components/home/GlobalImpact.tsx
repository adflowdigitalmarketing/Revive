import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import reviveIE from "../../../imports/Revive_IE.png";
import reviveUK from "../../../imports/UK.png";
import reviveFR from "../../../imports/Revive_FR.png";
import reviveNordic from "../../../imports/Revive_Nordic.png";
import reviveNZ from "../../../imports/Revive_NZ.png";

export function GlobalImpact() {
  const locations = [
    { country: "Ireland", status: "Headquarters & Manufacturing", logo: reviveIE },
    { country: "United Kingdom", status: "Sales & Service & Rent", logo: reviveUK },
    { country: "France", status: "Sales & Service", logo: reviveFR },
    { country: "Nordic Region", status: "Sales & Service & Rent", logo: reviveNordic },
    { country: "New Zealand", status: "Sales & Service & Rent", logo: reviveNZ }
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white via-emerald-50/20 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
              GLOBAL PRESENCE
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
              Serving Communities
              <br />
              Worldwide
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              From Ireland to New Zealand, we deliver sustainable drainage
              infrastructure solutions across global markets, supporting
              municipalities and contractors with reliable, long-life equipment.
            </p>

            {/* Locations */}
            <div className="space-y-4">
              {locations.map((location, index) => (
                <motion.div
                  key={location.country}
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 bg-white border border-gray-200 p-4"
                  style={{ borderRadius: '16px' }}
                >
                  <div className="w-20 h-16 bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0 p-2" style={{ borderRadius: '12px' }}>
                    <img src={location.logo} alt={location.country} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{location.country}</div>
                    <div className="text-sm text-gray-600">{location.status}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="relative overflow-hidden shadow-2xl"
              style={{ borderRadius: '24px' }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop"
                alt="Global Operations"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/90 backdrop-blur-md p-4 text-center" style={{ borderRadius: '12px' }}>
                    <div className="text-2xl font-semibold text-[#009C43]">5+</div>
                    <div className="text-xs font-semibold text-gray-700">Markets</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-md p-4 text-center" style={{ borderRadius: '12px' }}>
                    <div className="text-2xl font-semibold text-[#009C43]">100+</div>
                    <div className="text-xs font-semibold text-gray-700">Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
