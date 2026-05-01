import { motion } from "motion/react";
import { Building2, Users, Award, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-medium text-white mb-8" style={{ letterSpacing: "-0.03em" }}>
              About Revive Group
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Engineering excellence meets environmental responsibility. We're transforming the underground infrastructure industry through sustainable innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Our Story */}
            <Link to="/about/story">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-blue-500 to-indigo-600 p-12 min-h-[400px] flex flex-col justify-between overflow-hidden cursor-pointer"
                style={{ borderRadius: "24px" }}
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />

                <div className="relative z-10">
                  <Building2 className="text-white/80 mb-6" size={48} />
                  <h3 className="text-3xl md:text-4xl font-medium text-white mb-4">
                    Our Story
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    From a small group of enthusiasts to an international company. Discover the journey that shaped Revive Group.
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-3 text-white font-medium group-hover:gap-5 transition-all duration-300">
                  Read Our Story <ArrowRight size={20} />
                </div>
              </motion.div>
            </Link>

            {/* Leadership Team */}
            <Link to="/about/team">
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-[#009C43] to-[#007A34] p-12 min-h-[400px] flex flex-col justify-between overflow-hidden cursor-pointer"
                style={{ borderRadius: "24px" }}
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />

                <div className="relative z-10">
                  <Users className="text-white/90 mb-6" size={48} />
                  <h3 className="text-3xl md:text-4xl font-medium text-white mb-4">
                    Leadership Team
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Meet the experts driving innovation and sustainable growth at Revive Group.
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-3 text-white font-medium group-hover:gap-5 transition-all duration-300">
                  Meet the Team <ArrowRight size={20} />
                </div>
              </motion.div>
            </Link>

            {/* News */}
            <Link to="/about/news">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-purple-500 to-pink-600 p-12 min-h-[400px] flex flex-col justify-between overflow-hidden cursor-pointer"
                style={{ borderRadius: "24px" }}
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />

                <div className="relative z-10">
                  <TrendingUp className="text-white/90 mb-6" size={48} />
                  <h3 className="text-3xl md:text-4xl font-medium text-white mb-4">
                    News & Updates
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Stay informed about the latest developments, milestones, and announcements from Revive Group.
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-3 text-white font-medium group-hover:gap-5 transition-all duration-300">
                  Read Latest News <ArrowRight size={20} />
                </div>
              </motion.div>
            </Link>

            {/* Awards */}
            <Link to="/about/awards">
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-amber-500 to-orange-600 p-12 min-h-[400px] flex flex-col justify-between overflow-hidden cursor-pointer"
                style={{ borderRadius: "24px" }}
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />

                <div className="relative z-10">
                  <Award className="text-white/90 mb-6" size={48} />
                  <h3 className="text-3xl md:text-4xl font-medium text-white mb-4">
                    Awards & Recognition
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Celebrating our journey of excellence and recognition in sustainability and innovation.
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-3 text-white font-medium group-hover:gap-5 transition-all duration-300">
                  View Awards <ArrowRight size={20} />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8" style={{ letterSpacing: "-0.03em" }}>
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At Revive Group, we believe that sustainability and profitability are not mutually exclusive. Through the Revive Program and our innovative Warrior units, we extend the lifecycle of underground infrastructure equipment, reducing environmental impact while delivering exceptional value to our clients.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              From our off-grid manufacturing facility in Tipperary to our global service network, every aspect of our operation reflects our commitment to engineering a greener future.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
