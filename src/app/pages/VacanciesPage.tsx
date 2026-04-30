import { motion } from "motion/react";
import { Briefcase, MapPin, Clock, DollarSign } from "lucide-react";
import { Footer } from "../components/Footer";

export function VacanciesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6" style={{ letterSpacing: "-0.03em" }}>
              Join Our Team
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Be part of the team that's revolutionising sustainable engineering. Explore current opportunities at Revive Group.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              What We Offer
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Briefcase,
                title: "Professional Growth",
                description: "Work with cutting-edge technology and industry leaders"
              },
              {
                icon: MapPin,
                title: "Ireland Location",
                description: "Based at our off-grid Eco Park in Tipperary"
              },
              {
                icon: Clock,
                title: "Work-Life Balance",
                description: "Flexible working arrangements and competitive leave"
              },
              {
                icon: DollarSign,
                title: "Competitive Package",
                description: "Salary, benefits and pension scheme"
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow duration-300"
                  style={{ borderRadius: "24px" }}
                >
                  <div className="w-14 h-14 bg-[#009C43]/10 rounded-[16px] flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-[#009C43]" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
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
              Current Openings
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore available positions and apply through our HireHive platform
            </p>
          </motion.div>

          {/* HireHive Widget Placeholder */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 border-2 border-dashed border-gray-300 p-16 text-center"
            style={{ borderRadius: "24px" }}
          >
            <Briefcase className="text-gray-400 mx-auto mb-6" size={64} />
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              HireHive Integration
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              This section will display live job listings from your HireHive account.
              Configure the widget by adding your HireHive embed code below.
            </p>
            <div className="bg-white p-8 max-w-3xl mx-auto text-left" style={{ borderRadius: "20px" }}>
              <p className="text-sm text-gray-600 mb-4 font-mono">
                {`<!-- Add your HireHive widget code here -->`}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Instructions:</strong>
              </p>
              <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
                <li>Log in to your HireHive dashboard</li>
                <li>Navigate to Settings → Career Site → Widget</li>
                <li>Copy the embed code</li>
                <li>Replace this placeholder with the HireHive script</li>
              </ol>
            </div>
          </motion.div>

          {/* Alternative: Manual Job Listings */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900">
              Featured Positions
            </h3>

            <div className="grid gap-6">
              {[
                {
                  title: "Senior Mechanical Engineer",
                  department: "Engineering",
                  location: "Tipperary, Ireland",
                  type: "Full-time"
                },
                {
                  title: "Production Manager",
                  department: "Manufacturing",
                  location: "Tipperary, Ireland",
                  type: "Full-time"
                },
                {
                  title: "Fleet Service Technician",
                  department: "Service & Maintenance",
                  location: "Multiple Locations",
                  type: "Full-time"
                }
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-200 p-8 hover:border-[#009C43] hover:shadow-lg transition-all duration-300 cursor-pointer"
                  style={{ borderRadius: "24px" }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-[#009C43] transition-colors">
                        {job.title}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-2">
                          <Briefcase size={16} />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin size={16} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock size={16} />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-[#009C43] text-white font-semibold hover:bg-[#007A34] transition-colors" style={{ borderRadius: "12px" }}>
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#009C43] to-[#007A34]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6" style={{ letterSpacing: "-0.03em" }}>
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We're always looking for talented individuals. Send us your CV and we'll keep you in mind for future opportunities.
            </p>
            <button className="px-8 py-4 bg-white text-[#009C43] font-semibold text-lg hover:bg-gray-100 transition-colors" style={{ borderRadius: "16px" }}>
              Submit General Application
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
