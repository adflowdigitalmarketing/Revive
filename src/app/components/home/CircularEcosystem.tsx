import { motion } from "motion/react";
import warrior from "../../../imports/revive_warrior-2.png";
import program from "../../../imports/revive_program-2.png";
import ecoPark from "../../../imports/eco_park-2.png";

export function CircularEcosystem() {
  const pillars = [
    {
      title: "Revive Warrior",
      description: "A brand new unit featuring an 8mm steel tank and Scania chassis.",
      image: warrior,
    },
    {
      title: "Revive Program",
      description: "Remounting reconditioned tanks onto new chassis, saving up to 25-tonnes of CO2.",
      image: program,
    },
    {
      title: "Revive Eco Park",
      description: "Ireland's first completely off-grid manufacturing facility.",
      image: ecoPark,
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-emerald-50/20 to-white relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="inline-block px-4 py-2 bg-emerald-50 text-[#009C43] mb-6 rounded-[12px] text-sm font-bold tracking-widest uppercase border border-emerald-100"
          >
            The Circular Ecosystem
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
            style={{ letterSpacing: "-0.03em", color: "#1a1a1a" }}
          >
            The Revive Group
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer relative"
            >
              <div
                className="overflow-hidden bg-white shadow-lg border border-gray-100 h-full flex flex-col transition-all duration-300 group-hover:shadow-2xl group-hover:border-emerald-100"
                style={{ borderRadius: "24px" }}
              >
                <div className="relative h-[320px] overflow-hidden bg-gray-100">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                </div>
                
                <div className="p-8 flex-grow flex flex-col justify-center bg-white">
                  <h3
                    className="text-2xl font-bold mb-3 text-[#1a1a1a] transition-colors duration-300 group-hover:text-[#009C43]"
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
