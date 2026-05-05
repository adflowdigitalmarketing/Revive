import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";

export function ProgramCatalog() {
  const tiers = [
    {
      name: "Program Standard",
      tagline: "Essential Regeneration",
      description: "Renewal of main units with basic cosmetic repair and complete vacuum system replacement",
      features: [
        "Complete vacuum system replacement (Jurop PVT 400)",
        "Hydraulic system overhaul",
        "Electrical systems modernization",
        "Basic cosmetic restoration",
        "Safety systems upgrade",
        "Standard warranty coverage"
      ],
      accent: "#6B7280",
      recommended: false
    },
    {
      name: "Program Superior",
      tagline: "Full Modernization",
      description: "Comprehensive upgrade with heated aluminum cabinets, advanced lighting, and complete aesthetic restoration",
      features: [
        "All Standard features included",
        "Heated aluminum storage cabinets",
        "LED lighting system (800 lux)",
        "Advanced boom controls",
        "Revive Live basic integration",
        "Complete exterior refinishing",
        "Extended warranty package"
      ],
      accent: "#009C43",
      recommended: true
    },
    {
      name: "Program Advanced",
      tagline: "Like-New Transformation",
      description: "Full Warrior specification on your proven chassis — automation, pneumatic systems, complete rebrand",
      features: [
        "All Superior features included",
        "Full automation suite",
        "Pneumatic plug deployment system",
        "Complete vehicle repainting",
        "Custom brand integration",
        "Revive Live Pro with advanced analytics",
        "Premium 5-year warranty"
      ],
      accent: "#1F2937",
      recommended: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
            REGENERATION TIERS
          </div>
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
            Choose Your Level
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            From essential renewal to complete transformation — select the regeneration
            tier that matches your operational needs and budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative bg-white border-2 p-8 transition-all duration-500 hover:shadow-2xl group ${
                tier.recommended ? 'border-[#009C43] shadow-xl scale-105' : 'border-gray-200'
              }`}
              style={{ borderRadius: '24px' }}
            >
              {/* Recommended Badge */}
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#009C43] text-white px-6 py-2 flex items-center gap-2 shadow-lg"
                  style={{
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em'
                  }}
                >
                  <Zap size={16} fill="currentColor" />
                  MOST POPULAR
                </div>
              )}

              {/* Header */}
              <div className="mb-8">
                <div
                  className="inline-block px-3 py-1 border mb-4"
                  style={{
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    borderColor: tier.accent,
                    color: tier.accent
                  }}
                >
                  {tier.tagline.toUpperCase()}
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontSize: '2rem',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    color: tier.accent
                  }}
                >
                  {tier.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="flex-shrink-0 mt-0.5"
                      size={20}
                      style={{ color: tier.accent }}
                    />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 font-semibold flex items-center justify-center gap-2 transition-all group-hover:gap-4 ${
                  tier.recommended
                    ? 'bg-[#009C43] text-white hover:bg-[#007A34]'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
                style={{
                  borderRadius: '16px',
                  fontSize: '1rem',
                  letterSpacing: '0.02em'
                }}
              >
                GET STARTED
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Info Note */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm max-w-3xl mx-auto leading-relaxed">
            All tiers utilize your existing chassis (Scania, Volvo, etc.) as the foundation.
            Pricing and timeline depend on chassis condition, model year, and selected customizations.
            Contact our team for a detailed assessment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
