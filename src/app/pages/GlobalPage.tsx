import { motion } from "motion/react";
import { MapPin, Phone, Linkedin, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";

export function GlobalPage() {
  const regions = [
    {
      country: "Ireland",
      flag: "🇮🇪",
      tagline: "Global HQ & Manufacturing Heart",
      services: ["Manufacturing (EcoPark)", "Global Headquarters", "Sales & Service", "Training Center"],
      address: "Building 1, Revive Eco Park, Cooleeney, Moyne, Thurles, Tipperary, E41 X3P9",
      phone: "+353 (0)504 22422",
      linkedin: null,
      link: "/global/ireland",
      color: "from-emerald-500 to-green-600"
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      tagline: "Sales, Service & Rental Hub",
      services: ["Sales & Distribution", "Service Hub", "Fleet Rental", "Demonstrations"],
      partners: "Acumec (Sales/Service), Renmak (Rental)",
      phone: "+44",
      linkedin: "https://www.linkedin.com/in/chris-hughes-2309856a/",
      link: "/global/uk",
      color: "from-blue-500 to-indigo-600"
    },
    {
      country: "Nordic Region",
      flag: "🇩🇰",
      tagline: "Denmark Hub - Sustainable Solutions for the North",
      services: ["Sales", "Service & Rental Support", "Winter-Ready Equipment", "Cold Climate Solutions"],
      phone: "+45",
      linkedin: "https://www.linkedin.com/in/jesper-hejselb%C3%A6k-33aa5527/",
      link: "/global/nordic",
      color: "from-cyan-500 to-blue-600"
    },
    {
      country: "France",
      flag: "🇫🇷",
      tagline: "L'Excellence de l'Ingénierie",
      services: ["Regional Sales", "Technical Service Support", "Rental Solutions", "Circular Economy Partnership"],
      phone: "+33",
      linkedin: "https://www.linkedin.com/in/philippe-dresin-359b9498/",
      link: "/global/france",
      color: "from-purple-500 to-pink-600"
    },
    {
      country: "New Zealand",
      flag: "🇳🇿",
      tagline: "Irish Strength for Kiwi Industry",
      services: ["Sales & Support", "Parts Distribution", "Remote Monitoring", "Local Expertise"],
      phone: "+64",
      linkedin: "https://www.linkedin.com/in/roger-woods-347482ab/",
      link: "/global/nz",
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#009C43]/10 text-[#009C43] mb-8 rounded-[12px] text-sm font-medium tracking-widest uppercase border border-[#009C43]/20">
              Global Reach
            </div>
            <h1 className="text-5xl md:text-6xl font-medium text-gray-900 mb-8" style={{ letterSpacing: "-0.03em" }}>
              Global Representation
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Revive's operational network and support centers across the world. Local expertise with a global perspective.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Directory */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto space-y-8">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/60 backdrop-blur-md border border-gray-200 hover:border-[#009C43] hover:shadow-xl transition-all duration-300 p-8 md:p-10"
              style={{ borderRadius: "24px" }}
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Left Column - Identity */}
                <div className="lg:col-span-3">
                  <div className="text-6xl mb-4">{region.flag}</div>
                  <h3 className="text-3xl font-medium text-gray-900 mb-2">
                    {region.country}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {region.tagline}
                  </p>
                </div>

                {/* Center Column - Services */}
                <div className="lg:col-span-5">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                    Services & Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {region.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#009C43] rounded-full" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  {region.partners && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-[12px] border border-gray-200">
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                        Partners
                      </div>
                      <div className="text-sm text-gray-700">{region.partners}</div>
                    </div>
                  )}
                </div>

                {/* Right Column - Contact */}
                <div className="lg:col-span-4">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                    Contact Details
                  </h4>
                  <div className="space-y-4">
                    {region.address && (
                      <div className="flex items-start gap-3">
                        <MapPin className="text-gray-400 flex-shrink-0 mt-1" size={18} />
                        <div>
                          <div className="text-gray-700 text-sm leading-relaxed">
                            {region.address}
                          </div>
                          <button className="text-[#009C43] text-xs font-medium mt-1 inline-flex items-center gap-1 hover:underline">
                            View on Map <ExternalLink size={12} />
                          </button>
                        </div>
                      </div>
                    )}

                    {region.phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="text-gray-400" size={18} />
                        <a href={`tel:${region.phone}`} className="text-gray-700 hover:text-[#009C43] transition-colors">
                          {region.phone}
                        </a>
                      </div>
                    )}

                    {region.linkedin && (
                      <div className="flex items-center gap-3">
                        <Linkedin className="text-gray-400" size={18} />
                        <a
                          href={region.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#009C43] font-medium text-sm hover:underline inline-flex items-center gap-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Follow Region <ExternalLink size={12} />
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link to={region.link} className="text-[#009C43] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More About {region.country} →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Connectivity Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6" style={{ letterSpacing: "-0.03em" }}>
              Can't Find Your Region?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are constantly expanding our global network. Contact our HQ for international inquiries.
            </p>
            <button className="px-8 py-4 bg-[#009C43] text-white font-medium text-lg hover:bg-[#007A34] transition-colors" style={{ borderRadius: "16px" }}>
              Contact Global Headquarters
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
