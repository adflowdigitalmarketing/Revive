import { motion } from "motion/react";
import { Users, TrendingUp, Globe, Lightbulb, Target, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import findJobImage from "../../imports/find-job-1.jpg";
import apprenticeshipsImage from "../../imports/Apprenticeships-1.jpg";

export function CareersPage() {
  const stats = [
    { label: "Current Team", value: "50", description: "Specialists changing the industry today" },
    { label: "Growth Target", value: "140", description: "Professionals by 2030" },
    { label: "Global Scale", value: "5", description: "Regions from Ireland to New Zealand" }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Work with top equipment (Scania, Uraca) and our own system Revive Live"
    },
    {
      icon: Target,
      title: "Mission",
      description: "Real contribution to decarbonisation. Your work helps save 539 tonnes CO₂e per machine"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Work at Revive Eco Park (Tipperary) — a modern, energy-independent hub"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6" style={{ letterSpacing: "-0.03em" }}>
              Build the Future with Revive Group
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              We create technologies for the planet. Join the team that turns engineering into the art of sustainable development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Revive in Numbers */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-6" style={{ letterSpacing: "-0.03em" }}>
              Revive in Numbers
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Current state and ambitious vision for growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 p-10 text-center hover:shadow-xl transition-shadow duration-300"
                style={{ borderRadius: "24px" }}
              >
                <div className="text-6xl font-semibold text-[#009C43] mb-3" style={{ letterSpacing: "-0.02em" }}>
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Revive */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-6" style={{ letterSpacing: "-0.03em" }}>
              Why Revive?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              What you get as a Revive employee
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-8 hover:shadow-xl transition-shadow duration-300"
                  style={{ borderRadius: "24px" }}
                >
                  <div className="w-14 h-14 bg-[#009C43]/10 rounded-[16px] flex items-center justify-center mb-6">
                    <Icon className="text-[#009C43]" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Navigation */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Professional Development */}
            <Link to="/careers/vacancies">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative min-h-[500px] flex flex-col justify-end overflow-hidden cursor-pointer"
                style={{ borderRadius: "24px" }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={findJobImage}
                    alt="Experienced Professionals"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-10">
                  <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                    Досвідчені професіонали
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    Are you already a master of your craft? We are looking for engineers, mechanics and managers ready for large-scale challenges.
                  </p>
                  <div className="flex items-center gap-3 text-[#009C43] font-semibold group-hover:gap-5 transition-all duration-300">
                    View Vacancies <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Apprenticeships */}
            <Link to="/careers/apprenticeships">
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative min-h-[500px] flex flex-col justify-end overflow-hidden cursor-pointer"
                style={{ borderRadius: "24px" }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={apprenticeshipsImage}
                    alt="Apprenticeships"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-10">
                  <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                    Практиканти
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    Are you a young talent who wants to learn how to build the world's best trucks? Our program is a ticket into the profession.
                  </p>
                  <div className="flex items-center gap-3 text-[#009C43] font-semibold group-hover:gap-5 transition-all duration-300">
                    Learn About Training <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-8" style={{ letterSpacing: "-0.03em" }}>
              Your Career at the Heart of Decarbonisation
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Revive Group today is a team of professionals united around the idea of the circular economy. We are actively growing: from a small group of enthusiasts to an international company aiming to unite 140 specialists by 2030.
              </p>
              <p>
                We offer not just a job, but the opportunity to become part of intellectual manufacturing in the heart of Ireland. Whether you are an experienced professional or just dreaming of your first step into engineering — we have a place for your growth.
              </p>
              <p className="text-2xl font-semibold text-[#009C43] pt-6">
                We are the Revive family. We value precision, courage and responsibility to the environment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
