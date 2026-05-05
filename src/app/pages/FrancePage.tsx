import { motion } from "motion/react";
import { Award, Recycle, Shield, Linkedin, ExternalLink, Flag, ShoppingCart, Wrench, Package, Handshake } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";

export function FrancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 to-pink-700">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex justify-center">
              <Flag className="text-white" size={64} />
            </div>
            <h1 className="text-white mb-8" style={{ fontSize: "48px", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.95 }}>
              Revive France
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-12" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)", fontWeight: 400, lineHeight: 1.6 }}>
              L'Excellence de l'Ingénierie pour vos Projets. Powerful vacuum solutions and fleet regeneration. Full range of rental, sales, and service services in France.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 font-medium text-lg hover:bg-gray-100 transition-colors" style={{ borderRadius: "16px" }}>
                Demander un Devis
              </button>
              <button className="px-8 py-4 bg-white/10 border-2 border-white text-white font-medium text-lg hover:bg-white/20 transition-colors" style={{ borderRadius: "16px" }}>
                Nos Solutions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services & Réseau */}
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
              Services & Réseau
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Support complet pour le marché français
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Vente et Location",
                description: "Supply of the Warrior line and flexible rental terms for short-term and long-term contracts",
                icon: ShoppingCart
              },
              {
                title: "Maintenance et Support",
                description: "Local service support to ensure uninterrupted operation (Service après-vente)",
                icon: Wrench
              },
              {
                title: "Location Directe",
                description: "Ability to rent equipment for large infrastructure projects in France",
                icon: Package
              }
            ].map((service, index) => {
              const Icon = service.icon;
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
                  <Icon className="text-purple-600" size={48} />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
          </div>
        </div>
      </section>

      {/* Économie Circulaire et Réglementation */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-500 to-pink-600 p-12 md:p-16 relative overflow-hidden"
            style={{ borderRadius: "24px" }}
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Recycle className="text-white mb-6" size={64} />
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-6" style={{ letterSpacing: "-0.03em" }}>
                  Économie Circulaire et Réglementation
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  France is actively implementing circular economy laws. The Revive Program fits perfectly into the French strategy of resource reuse.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[16px]">
                  <h4 className="text-white font-medium mb-2">Loi Anti-Gaspillage</h4>
                  <p className="text-white/80 text-sm">Anti-Waste Law compliance through equipment regeneration</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[16px]">
                  <h4 className="text-white font-medium mb-2">Réduction des Émissions</h4>
                  <p className="text-white/80 text-sm">Low CO₂ emissions and water recycling systems for urban operations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Excellence */}
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
              Les Atouts Techniques
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Technical excellence for the French market
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-10"
              style={{ borderRadius: "24px" }}
            >
              <Award className="text-purple-600 mb-6" size={48} />
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                Composants de Classe Mondiale
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Use of Jurop pumps (Italy) and Uraca (Germany) combined with Irish assembly excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-10"
              style={{ borderRadius: "24px" }}
            >
              <Shield className="text-blue-600 mb-6" size={48} />
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                Technologie Revive Live
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Complete digital control over the equipment fleet (Surveillance des données en temps réel).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partenariat France-Irlande */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8 flex justify-center">
              <Handshake className="text-purple-600" size={64} />
            </div>
            <h2 className="text-4xl md:text-5xl font-medium mb-8" style={{ letterSpacing: "-0.03em" }}>
              Une Nouvelle Force pour l'Industrie Française
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Revive France brings to the market not just equipment, but a strategic advantage. Our Warrior trucks and regeneration Program are the answer to modern France's challenges: the need for maximum power with minimal environmental impact. We understand the importance of every project, from municipal services to large-scale construction, so we offer solutions that combine the reliability of iron and the intelligence of data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 p-10"
            style={{ borderRadius: "24px" }}
          >
            <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">
              Contact Revive France
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Linkedin className="text-purple-600" size={24} />
                <div>
                  <div className="font-medium text-gray-900 mb-1">Connect on LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/philippe-dresin-359b9498/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline inline-flex items-center gap-2"
                  >
                    Philippe Dresin - France Representative <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Global Locations */}
          <div className="mt-12 text-center">
            <h4 className="text-lg font-medium text-gray-600 mb-6">Other Global Locations</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {["Ireland", "UK", "Nordic", "New Zealand"].map((location, idx) => (
                <Link key={idx} to={`/global/${location.toLowerCase().replace(" ", "-")}`}>
                  <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium hover:border-purple-600 hover:text-purple-600 transition-colors" style={{ borderRadius: "12px" }}>
                    {location}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
