import { motion } from "motion/react";
import { Wifi, BarChart3, Bell, Map, Activity, Shield } from "lucide-react";
import { Footer } from "../components/Footer";

export function LivePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-600 to-orange-700">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex justify-center">
              <Wifi className="text-white" size={64} />
            </div>
            <h1 className="text-white mb-8" style={{ fontSize: "48px", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.95 }}>
              Revive Live
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-12" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 400, lineHeight: 1.6 }}>
              Real-time fleet monitoring and telematics platform. Complete digital control, predictive maintenance, and operational insights for your entire equipment fleet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
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
              Platform Features
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Complete visibility and control of your equipment fleet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Real-Time Analytics",
                description: "Live performance data, fuel consumption, and operational metrics at your fingertips"
              },
              {
                icon: Bell,
                title: "Predictive Alerts",
                description: "Advanced diagnostics warn you before issues become problems, reducing downtime"
              },
              {
                icon: Map,
                title: "GPS Tracking",
                description: "Track your entire fleet in real-time with geolocation and route optimization"
              },
              {
                icon: Activity,
                title: "Performance Monitoring",
                description: "Monitor vacuum pressure, tank levels, and all critical systems remotely"
              },
              {
                icon: Shield,
                title: "Secure Cloud Platform",
                description: "Enterprise-grade security with encrypted data transmission and storage"
              },
              {
                icon: Wifi,
                title: "Remote Diagnostics",
                description: "Our engineers can diagnose issues remotely, anywhere in the world"
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
                  className="bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
                  style={{ borderRadius: "24px" }}
                >
                  <div className="mb-6 flex justify-center">
                    <Icon className="text-amber-600" size={48} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
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

      {/* Benefits */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-8" style={{ letterSpacing: "-0.03em" }}>
              Data-Driven Operations
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Revive Live transforms your equipment from standalone machines into a connected, intelligent fleet. Monitor performance across continents, predict maintenance needs before breakdowns occur, and optimize operations with real-time insights. Our cloud-based platform ensures your team has complete visibility, whether you're managing one truck or hundreds.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
