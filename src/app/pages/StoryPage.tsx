import { motion } from "motion/react";
import { BookOpen, Target, Award, TrendingUp } from "lucide-react";
import { Footer } from "../components/Footer";

export function StoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex justify-center">
              <BookOpen className="text-white" size={64} />
            </div>
            <h1 className="text-white mb-8" style={{ fontSize: "48px", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.95 }}>
              Our Story
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-12" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 400, lineHeight: 1.6 }}>
              From a vision in rural Ireland to a global leader in sustainable vacuum technology. The journey of innovation, determination, and engineering excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ letterSpacing: "-0.03em" }}>
              Our Journey
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Milestones that shaped Revive Group
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Foundation",
                description: "Revive Group was founded in Tipperary, Ireland, with a vision to transform the vacuum excavation industry through sustainable engineering and circular economy principles."
              },
              {
                icon: Award,
                title: "Innovation",
                description: "Launch of the Warrior platform and Revive Program, establishing new standards for power, efficiency, and equipment regeneration in the industry."
              },
              {
                icon: TrendingUp,
                title: "Global Expansion",
                description: "Expansion into UK, Nordic, France, and New Zealand markets, bringing Irish engineering excellence to customers worldwide."
              },
              {
                icon: BookOpen,
                title: "Today",
                description: "A global leader in sustainable vacuum technology, with state-of-the-art manufacturing facilities and a commitment to decarbonization and circular economy."
              }
            ].map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 p-10 hover:shadow-xl transition-all duration-300"
                  style={{ borderRadius: "24px" }}
                >
                  <div className="mb-6">
                    <Icon className="text-[#009C43]" size={48} />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-8" style={{ letterSpacing: "-0.03em" }}>
              Building the Future
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Our mission is simple: to build the world's most powerful, sustainable, and reliable vacuum equipment. We believe in engineering that respects the environment, technology that empowers operators, and business practices that support circular economy principles. From our headquarters in Tipperary to customers across five continents, we're committed to innovation that matters.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
