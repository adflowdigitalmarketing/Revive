import { motion } from "motion/react";
import { Newspaper, Download, ExternalLink } from "lucide-react";
import { Footer } from "../components/Footer";

export function PressPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex justify-center">
              <Newspaper className="text-white" size={64} />
            </div>
            <h1 className="text-white mb-8" style={{ fontSize: "48px", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.95 }}>
              Press Releases
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-12" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 400, lineHeight: 1.6 }}>
              Latest news, announcements, and media resources from Revive Group. Stay informed about our innovations, partnerships, and industry leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
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
              Recent Press Releases
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Official announcements and media coverage
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                date: "May 2026",
                title: "Revive Group Expands Global Presence with New Zealand Launch",
                excerpt: "Irish vacuum technology leader announces strategic expansion into Oceania market with local parts inventory and technical support."
              },
              {
                date: "April 2026",
                title: "Mid-Tipperary Decarbonising Zone Reaches Major Milestone",
                excerpt: "Revive's off-grid manufacturing facility demonstrates viability of renewable-powered industrial operations."
              },
              {
                date: "March 2026",
                title: "Warrior Platform Achieves Record Performance Metrics",
                excerpt: "Latest generation vacuum excavators set new industry standards for power and efficiency."
              },
              {
                date: "February 2026",
                title: "Revive Program Surpasses 500 Equipment Regenerations",
                excerpt: "Circular economy initiative saves thousands of tons of manufacturing materials through fleet refurbishment."
              }
            ].map((release, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
                style={{ borderRadius: "24px" }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-2">{release.date}</div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-3">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {release.excerpt}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center gap-2" style={{ borderRadius: "12px" }}>
                      <Download size={18} />
                      PDF
                    </button>
                    <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center gap-2" style={{ borderRadius: "12px" }}>
                      <ExternalLink size={18} />
                      Read
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 p-10 text-center"
            style={{ borderRadius: "24px" }}
          >
            <h3 className="text-2xl font-medium text-gray-900 mb-4">
              Media Inquiries
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              For press inquiries, interview requests, or media resources, please contact our communications team.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors" style={{ borderRadius: "16px" }}>
              Contact Media Relations
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
