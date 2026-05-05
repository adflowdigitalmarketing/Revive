import { motion } from "motion/react";
import { Briefcase, ExternalLink, Users, Target } from "lucide-react";
import { Footer } from "../components/Footer";

export function HirePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#009C43] to-[#007A34]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex justify-center">
              <Briefcase className="text-white" size={64} />
            </div>
            <h1 className="text-white mb-8" style={{ fontSize: "48px", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.95 }}>
              HireHive / HireLocker
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-12" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 400, lineHeight: 1.6 }}>
              Our recruitment platform for managing applications, tracking candidates, and building the teams that drive Revive Group forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform Overview */}
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
              Recruitment Platform
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Streamlined hiring process for exceptional talent
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Candidate Management",
                description: "Track applications, schedule interviews, and manage candidates throughout the hiring process with our integrated platform."
              },
              {
                icon: Target,
                title: "Talent Pipeline",
                description: "Build relationships with top talent and maintain a pipeline of qualified candidates for current and future positions."
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
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
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-8" style={{ letterSpacing: "-0.03em" }}>
              Join Our Team
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              We're always looking for talented individuals who share our passion for engineering excellence and sustainable innovation. Explore current opportunities and submit your application through our recruitment platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#009C43] text-white font-medium text-lg hover:bg-[#007A34] transition-colors inline-flex items-center justify-center gap-2" style={{ borderRadius: "16px" }}>
                View Open Positions <ExternalLink size={20} />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-medium text-lg hover:border-[#009C43] hover:text-[#009C43] transition-colors" style={{ borderRadius: "16px" }}>
                Learn About Careers
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
