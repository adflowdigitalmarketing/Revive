import { motion } from "motion/react";
import { Factory, Users, Award, MapPin } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function InfrastructureSection() {
  const highlights = [
    {
      icon: Factory,
      label: "Specialized Facility",
      value: "Turnpike Plant"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tipperary, Ireland"
    },
    {
      icon: Users,
      label: "Expert Team",
      value: "25+ Engineers"
    },
    {
      icon: Award,
      label: "Quality Standard",
      value: "ISO Certified"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
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
            MANUFACTURING EXCELLENCE
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
            Turnpike Plant
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Your equipment is regenerated at our specialized Turnpike facility in Tipperary.
            A center of engineering excellence where experienced craftsmen assemble every detail by hand.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 p-6 text-center hover:shadow-lg transition-all duration-300"
                style={{ borderRadius: '20px' }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-50 mb-4"
                  style={{ borderRadius: '12px' }}
                >
                  <Icon className="text-[#009C43]" size={24} strokeWidth={2.5} />
                </div>
                <div
                  className="text-gray-500 text-xs mb-2"
                  style={{
                    fontWeight: 600,
                    letterSpacing: '0.05em'
                  }}
                >
                  {item.label.toUpperCase()}
                </div>
                <div
                  className="text-gray-900"
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    letterSpacing: '-0.01em'
                  }}
                >
                  {item.value}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Image Showcase */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative overflow-hidden shadow-2xl"
          style={{ borderRadius: '24px' }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&h=600&fit=crop"
            alt="Turnpike Manufacturing Plant"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-2xl">
              <h3
                className="mb-3"
                style={{
                  fontSize: '2rem',
                  fontWeight: 600,
                  letterSpacing: '-0.02em'
                }}
              >
                Precision Engineering
              </h3>
              <p className="text-white/90 leading-relaxed">
                State-of-the-art facility equipped with advanced diagnostic tools,
                hydraulic testing stations, and quality control systems ensuring every
                regenerated unit meets Warrior-level standards.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Process Stats */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: "Average Regeneration Time", value: "6-8 weeks" },
            { label: "Quality Control Points", value: "127 checks" },
            { label: "Customer Satisfaction", value: "98.5%" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6 text-center"
              style={{ borderRadius: '20px' }}
            >
              <div
                className="text-[#009C43] mb-2"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 600,
                  letterSpacing: '-0.02em'
                }}
              >
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
