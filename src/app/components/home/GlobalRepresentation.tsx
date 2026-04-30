import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import ieImage from "../../../imports/Revive_IE-1.png";
import ukImage from "../../../imports/revive_UK.png";
import nordicImage from "../../../imports/Revive_Nordic-1.png";
import frImage from "../../../imports/Revive_FR-1.png";
import nzImage from "../../../imports/Revive_NZ-1.png";

export function GlobalRepresentation() {
  const regions = [
    {
      country: "Ireland",
      image: ieImage,
      tag: "Headquarters & Off-grid Manufacturing (Eco Park)",
      icon: MapPin,
      colSpan: "lg:col-span-2",
      rowSpan: "lg:row-span-2",
    },
    {
      country: "United Kingdom",
      image: ukImage,
      tag: "Sales, Service & Fleet Rental",
      icon: MapPin,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
    },
    {
      country: "Nordic Region",
      image: nordicImage,
      tag: "Sales, Service & Fleet Rental (Winter-ready configurations)",
      icon: MapPin,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
    },
    {
      country: "France",
      image: frImage,
      tag: "Sales & Specialist Service",
      icon: MapPin,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
    },
    {
      country: "New Zealand",
      image: nzImage,
      tag: "Sales & Service Hub",
      icon: MapPin,
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white text-gray-800 mb-6 rounded-[12px] text-sm font-bold tracking-widest uppercase border border-gray-200 shadow-sm">
            Our Reach
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-gray-900"
            style={{ letterSpacing: "-0.03em" }}
          >
            Global Representation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Delivering sustainable engineering and premium service across the world, 
            anchored by our off-grid manufacturing headquarters in Ireland.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px] lg:auto-rows-[300px]">
          {regions.map((region, index) => {
            const Icon = region.icon;
            const isMain = index === 0;

            return (
              <motion.div
                key={region.country}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`${region.colSpan} ${region.rowSpan} group relative rounded-[24px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200/50 bg-white`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 bg-gray-100">
                  {region.image ? (
                    <img
                      src={region.image}
                      alt={region.country}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-90"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
                  )}
                  {/* Overlay Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      isMain
                        ? "from-black/80 via-black/30 to-transparent"
                        : "from-black/80 to-transparent"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-[16px] bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white mb-4">
                      <Icon size={24} />
                    </div>
                    <h3
                      className={`font-semibold text-white ${
                        isMain ? "text-4xl md:text-5xl" : "text-2xl"
                      } mb-2 tracking-tight group-hover:text-emerald-400 transition-colors duration-300`}
                    >
                      {region.country}
                    </h3>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-[12px] p-3 border border-white/20 inline-block w-fit">
                    <span className="text-white/90 text-sm font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#009C43] animate-pulse" />
                      {region.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
