import { motion } from "motion/react";
import { Handshake, Truck, Wrench, Award } from "lucide-react";
import { Footer } from "../components/Footer";
import scaniaLogo from "figma:asset/scania.png";
import tipLogo from "figma:asset/tip.png";
import acumecLogo from "figma:asset/acumec.png";

export function PartnersPage() {
  const trustedSuppliers = [
    {
      name: "URACA & Jurop",
      description: "The heart of our vacuum and high-pressure systems"
    },
    {
      name: "Akerstroms",
      description: "Reliable remote radio control systems"
    },
    {
      name: "USB Düsen",
      description: "Advanced nozzle technologies for cleaning"
    },
    {
      name: "Boschung",
      description: "Global expertise in surface maintenance technologies"
    },
    {
      name: "CVS",
      description: "Experts in compressor and vacuum solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#009C43]/10 text-[#009C43] mb-8 rounded-[12px] text-sm font-medium tracking-widest uppercase border border-[#009C43]/20">
              Global Network of Quality
            </div>
            <h1 className="text-5xl md:text-6xl font-medium text-gray-900 mb-8" style={{ letterSpacing: "-0.03em" }}>
              Our Partners
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We join forces with world leaders in engineering and distribution to ensure the seamless operation of your equipment from Europe to Oceania.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Acumec - Strategic Partner UK */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500 to-indigo-600 p-12 md:p-16 relative overflow-hidden group"
            style={{ borderRadius: "24px" }}
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-white mb-6 rounded-[12px] text-sm font-medium tracking-widest uppercase border border-white/20">
                  Strategic Partner
                </div>
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-6" style={{ letterSpacing: "-0.03em" }}>
                  Acumec
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  Our strategic partner in the United Kingdom, providing comprehensive sales and service support across the British market.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Sales & Distribution Network</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Technical Service Excellence</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Nationwide Coverage</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 rounded-[20px] flex items-center justify-center">
                <img src={acumecLogo} alt="Acumec" className="w-full max-w-sm h-auto" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chassis & Infrastructure */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ letterSpacing: "-0.03em" }}>
              Chassis & Infrastructure
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The foundation of every Revive unit
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-700 p-12 md:p-16 relative overflow-hidden group"
            style={{ borderRadius: "24px" }}
          >
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#009C43]/20 rounded-full blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-10 rounded-[20px] flex items-center justify-center order-2 lg:order-1">
                <img src={scaniaLogo} alt="Scania" className="w-full max-w-sm h-auto" />
              </div>

              <div className="order-1 lg:order-2">
                <Truck className="text-[#009C43] mb-6" size={48} />
                <h3 className="text-4xl md:text-5xl font-medium text-white mb-6" style={{ letterSpacing: "-0.03em" }}>
                  Scania
                </h3>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  Our key chassis partner. Every Warrior and Program is based on Scania's reliability, which guarantees service support anywhere in the world.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 bg-[#009C43] rounded-full" />
                    <span>Global Service Network</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 bg-[#009C43] rounded-full" />
                    <span>Heavy-Duty Performance</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 bg-[#009C43] rounded-full" />
                    <span>Proven Reliability</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Suppliers */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ letterSpacing: "-0.03em" }}>
              Trusted Suppliers
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our verified suppliers — the "iron-clad" guarantee of component quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustedSuppliers.map((supplier, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 hover:border-[#009C43] hover:shadow-xl transition-all duration-300"
                style={{ borderRadius: "24px" }}
              >
                <div className="w-14 h-14 bg-[#009C43]/10 rounded-[16px] flex items-center justify-center mb-6">
                  <Wrench className="text-[#009C43]" size={28} />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {supplier.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {supplier.description}
                </p>
              </motion.div>
            ))}

            {/* TIP Group Card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 p-8 hover:shadow-xl transition-all duration-300"
              style={{ borderRadius: "24px" }}
            >
              <div className="bg-white p-6 rounded-[16px] mb-6 border border-gray-200">
                <img src={tipLogo} alt="TIP Group" className="w-full h-auto" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                TIP Group
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Rental opportunities in UK and Ireland
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#009C43] to-[#007A34]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Handshake className="text-white mx-auto mb-8" size={64} />
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-8" style={{ letterSpacing: "-0.03em" }}>
              The Power of Partnership — Your Success Guarantee
            </h2>
            <p className="text-xl text-white/95 leading-relaxed">
              Revive Group is the center of a large ecosystem. Through our partnership with Scania, we provide the best chassis for our machines, while our partnership with TIP Group opens new rental opportunities in the UK and Ireland. Our presence in France, New Zealand, and Scandinavia through REI and regional Revive offices ensures that clients are never left alone with a problem. We choose suppliers like URACA, Jurop, and Boschung because their names are synonymous with reliability. Together, we create a standard that professionals trust.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
