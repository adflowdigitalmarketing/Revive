import { motion } from "motion/react";
import { Award, Trophy, Leaf, Shield, Star } from "lucide-react";
import { Footer } from "../components/Footer";

export function AwardsPage() {
  const awards = [
    {
      title: "Green Awards 2026",
      category: "FINALISTS - The Green Manufacturer Award",
      description: "As we close the door on 2025, we reflect on a year of incredible progress and the successful scaling up of our operations. Following the news of our nomination for The Green Manufacturer Award, we now look forward to 2026 with great anticipation. It is an honour to see our commitment to sustainable manufacturing recognised as we continue to grow and expand our impact.",
      year: "2026",
      icon: Leaf,
      size: "large",
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "EY Entrepreneur Of The Year",
      category: "Emerging Finalist",
      description: "We're proud to share that The Revive Group has been recognised through our CEO, Liam Kearney, being named a 2026 finalist for the EY Entrepreneur Of The Year Ireland award.",
      year: "2026",
      icon: Trophy,
      size: "medium",
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "ESG Awards 2026",
      category: "Finalist in the ESG Company Award (SME)",
      description: "We are proud to share that The Revive Group has been named a finalist in the ESG Company Award (SME) category at the Business & Finance Media Group ESG Awards 2026. Thank you to our incredible team, partners and clients who help drive meaningful environmental and social impact every day. Looking forward to celebrating with the wider ESG community at the awards in April.",
      year: "2026",
      icon: Star,
      size: "medium",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Safety First Certification",
      category: "Safety & Standards",
      description: "For impeccable safety standards at Building One and Turnpike factories.",
      year: "2025",
      icon: Shield,
      size: "small",
      color: "from-gray-500 to-gray-700"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Award className="text-[#009C43] mx-auto mb-8" size={80} />
            <h1 className="text-5xl md:text-6xl font-semibold mb-6" style={{ letterSpacing: "-0.03em" }}>
              Awards & Recognition
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Every award we receive is the result of dedication to innovation, quality and the planet. We are proud that our efforts in decarbonisation and engineering are recognised internationally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Awards Gallery - Bento Grid */}
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
              Hall of Fame
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Celebrating our journey of excellence and innovation
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
            {awards.map((award, index) => {
              const Icon = award.icon;
              const colSpan = award.size === "large" ? "lg:col-span-2" : award.size === "medium" ? "lg:col-span-2" : "lg:col-span-1";
              const rowSpan = award.size === "large" ? "lg:row-span-2" : "lg:row-span-1";

              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${colSpan} ${rowSpan} group relative overflow-hidden cursor-pointer`}
                  style={{ borderRadius: "24px" }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    {/* Top Section */}
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-[16px] flex items-center justify-center border border-white/30">
                          <Icon className="text-white" size={28} />
                        </div>
                        <div className="text-white/90 font-semibold text-lg">
                          {award.year}
                        </div>
                      </div>

                      <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-[8px] text-white/90 text-xs font-semibold uppercase tracking-wide mb-4 border border-white/20">
                        {award.category}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 leading-tight">
                        {award.title}
                      </h3>
                    </div>

                    {/* Bottom Section */}
                    <p className="text-white/90 text-sm md:text-base leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                      {award.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recognition Timeline */}
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
              Our Journey
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Key milestones and recognitions throughout the years
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                year: "2026",
                events: [
                  "FINALIST - Green Manufacturer Award",
                  "FINALIST - EY Entrepreneur Of The Year",
                  "FINALIST - ESG Company Award (SME)"
                ]
              },
              {
                year: "2025",
                events: [
                  "Safety First Certification",
                  "Launched Revive Eco Park",
                  "Expanded to Nordic Region"
                ]
              }
            ].map((yearData, index) => (
              <motion.div
                key={index}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0 w-24">
                  <div className="text-4xl font-semibold text-[#009C43]">
                    {yearData.year}
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8" style={{ borderRadius: "24px" }}>
                  <ul className="space-y-3">
                    {yearData.events.map((event, eventIndex) => (
                      <li key={eventIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#009C43] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6" style={{ letterSpacing: "-0.03em" }}>
              Awards Are Just the Beginning
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              At Revive Group we don't work for awards, but each one reminds us we're moving in the right direction. From local recognitions in Tipperary to international prizes for innovation in green engineering — this proves that the circular economy can be not only responsible but leading.
            </p>
            <p className="text-xl text-white/90 mt-6 font-semibold">
              We are grateful to our partners and team for making these achievements possible.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
