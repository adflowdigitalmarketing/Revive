import { motion } from "motion/react";
import { Wrench, DollarSign, Lightbulb, Truck, Zap, Cog, Hammer, FileText, Users, CheckCircle, Award } from "lucide-react";
import { Footer } from "../components/Footer";

export function ApprenticeshipsPage() {
  const benefits = [
    {
      icon: Wrench,
      title: "Hands-on Experience",
      description: "No boring theory without practice. Work with real vacuum pump systems and hydraulics from day one."
    },
    {
      icon: DollarSign,
      title: "Earn While You Learn",
      description: "Receive a competitive wage while you gain certification as a qualified specialist."
    },
    {
      icon: Lightbulb,
      title: "Future-Proof Skills",
      description: "Learn data systems via Revive Live and understand Circular Economy principles."
    }
  ];

  const paths = [
    {
      icon: Truck,
      title: "Heavy Vehicle Mechanics",
      description: "Maintenance and regeneration of premium chassis (Scania, Volvo)",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Cog,
      title: "Industrial Systems Engineering",
      description: "Working with high-pressure systems (Uraca) and vacuum systems (Jurop)",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Electrical & Automation",
      description: "Installing monitoring systems, 360° cameras and automating pneumatic plugs",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Hammer,
      title: "Precision Metalwork",
      description: "Assembling aluminium cabinets, boom arms and metalwork in Building One",
      color: "from-red-500 to-pink-500"
    }
  ];

  const roadmap = [
    {
      step: "1",
      title: "Application",
      description: "Submit your application via our form"
    },
    {
      step: "2",
      title: "Interview",
      description: "Visit us at Eco Park for an introduction"
    },
    {
      step: "3",
      title: "Training",
      description: "4 years of training under mentor supervision"
    },
    {
      step: "4",
      title: "Graduation",
      description: "Receive certification and a guaranteed job offer"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-[#009C43] to-[#007A34] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6" style={{ letterSpacing: "-0.03em" }}>
              Your Start in Heavy Engineering
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Learn from the best, work with the most powerful iron in the world and become part of the Revive Group team in Tipperary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#009C43] font-semibold text-lg hover:bg-gray-100 transition-colors" style={{ borderRadius: "16px" }}>
                Apply for 2026
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white font-semibold text-lg hover:bg-white/20 transition-colors" style={{ borderRadius: "16px" }}>
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
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
              What You Get
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Three powerful reasons to join our apprenticeship program
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#009C43]/10 to-emerald-50 border border-emerald-200 p-10 hover:shadow-xl transition-shadow duration-300"
                  style={{ borderRadius: "24px" }}
                >
                  <div className="w-16 h-16 bg-[#009C43] rounded-[18px] flex items-center justify-center mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Paths */}
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
              Choose Your Path
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Four specialized training tracks to match your passion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {paths.map((path, index) => {
              const Icon = path.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative bg-gradient-to-br ${path.color} p-10 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden`}
                  style={{ borderRadius: "24px" }}
                >
                  <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative z-10">
                    <Icon className="text-white/90 mb-6" size={40} />
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {path.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {path.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Roadmap */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-6" style={{ letterSpacing: "-0.03em" }}>
              The Roadmap
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your journey from application to qualified professional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {roadmap.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#009C43] to-[#007A34] text-white text-3xl font-semibold rounded-full flex items-center justify-center mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
                {index < roadmap.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#009C43] to-gray-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Your Mentors */}
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
              Meet Your Mentors
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Our masters have decades of industry experience. They are not just teachers — they are your partners who will help you become the professional you dream to be.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I started as an apprentice 15 years ago. Now I'm leading our production team.",
                name: "Team Member",
                role: "Production Lead"
              },
              {
                quote: "Best decision of my life. The hands-on training was invaluable.",
                name: "Team Member",
                role: "Senior Mechanic"
              },
              {
                quote: "From day one, I felt part of the Revive family. The support is incredible.",
                name: "Team Member",
                role: "Systems Engineer"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8"
                style={{ borderRadius: "24px" }}
              >
                <Users className="text-[#009C43] mb-4" size={32} />
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#009C43] to-[#007A34]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6" style={{ letterSpacing: "-0.03em" }}>
              Apply Now
            </h2>
            <p className="text-xl text-white/90 mb-12">
              We are waiting for you. Take the first step toward a career at Revive Group today.
            </p>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 max-w-2xl mx-auto" style={{ borderRadius: "24px" }}>
              <form className="space-y-6">
                <div className="text-left">
                  <label className="block text-white font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    style={{ borderRadius: "12px" }}
                    placeholder="Your name"
                  />
                </div>
                <div className="text-left">
                  <label className="block text-white font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    style={{ borderRadius: "12px" }}
                    placeholder="+353"
                  />
                </div>
                <div className="text-left">
                  <label className="block text-white font-semibold mb-2">School/College</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    style={{ borderRadius: "12px" }}
                    placeholder="Your current school or college"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-[#009C43] font-semibold text-lg hover:bg-gray-100 transition-colors"
                  style={{ borderRadius: "12px" }}
                >
                  Submit Application
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
