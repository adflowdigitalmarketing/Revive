import { motion } from "motion/react";
import { Wind, Sun, Leaf, MapPin } from "lucide-react";
import offGridSvg from "../../../imports/off_grid.png";
import co2Logo from "../../../imports/co2.png";

const features = [
  {
    icon: Sun,
    label: "Solar Energy",
    description: "Multi-array solar installation",
  },
  {
    icon: Wind,
    label: "Wind Power",
    description: "Onsite turbine generation",
  },
  {
    icon: Leaf,
    label: "Zero Emissions",
    description: "100% renewable operations",
  },
  {
    icon: MapPin,
    label: "County Tipperary",
    description: "Ireland's green heartland",
  },
];

export function SustainabilitySection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#009C43]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-block px-4 py-2 bg-emerald-100 text-[#009C43] mb-6 shadow-sm border border-emerald-200"
            style={{
              borderRadius: "12px",
              fontSize: "0.875rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            SUSTAINABILITY
          </div>

          <h2
            className="mb-6"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
            }}
          >
            Off-Grid Manufacturing
            <br />
            at Revive Eco Park
          </h2>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed flex items-center justify-center gap-3">
            Powered 100% by onsite wind and solar energy in
            County Tipperary
            <img
              src={co2Logo}
              alt="CO2 reduction"
              className="h-8 w-auto inline-block ml-2 opacity-80"
            />
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-gray-300 to-emerald-50/60 backdrop-blur-sm border border-emerald-100/80 overflow-hidden shadow-xl order-2 md:order-1 flex items-center justify-center p-8"
            style={{ borderRadius: "24px" }}
          >
            <div className="relative w-full aspect-square md:aspect-auto md:h-[400px] flex items-center justify-center group">
              <img
                src={offGridSvg}
                alt="Off Grid Factory Vector"
                className="w-full h-full max-h-[300px] object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-6 rounded-[20px] shadow-sm transform translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="text-[#009C43] text-sm font-semibold uppercase tracking-wider mb-1 flex items-center gap-2">
                  <Leaf size={16} />
                  100% Renewable Energy
                </div>
                <div className="text-gray-600 text-xs font-medium">
                  Wind & Solar Powered Facility
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 md:order-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200/60 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ borderRadius: "20px" }}
              >
                <div
                  className="bg-gradient-to-br from-[#009C43]/10 to-emerald-100/50 p-3 inline-block mb-4"
                  style={{ borderRadius: "14px" }}
                >
                  <feature.icon
                    className="text-[#009C43]"
                    size={28}
                    strokeWidth={2}
                  />
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: "#1a1a1a",
                  }}
                >
                  {feature.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}