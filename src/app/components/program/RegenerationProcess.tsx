import { motion } from "motion/react";
import { Search, Wrench, Cpu, Activity, Award } from "lucide-react";

export function RegenerationProcess() {
  const steps = [
    {
      icon: Search,
      title: "Chassis Diagnostics",
      description: "Complete technical inspection of your base vehicle (Scania, Volvo, etc.) to assess structural integrity and compatibility"
    },
    {
      icon: Wrench,
      title: "Full Rebuild",
      description: "Systematic removal of obsolete equipment and comprehensive preparation for modern systems integration"
    },
    {
      icon: Cpu,
      title: "Revive Technologies",
      description: "Installation of new systems: Jurop PVT 400 pumps (43,300 L/min), Uraca high-pressure systems, advanced booms"
    },
    {
      icon: Activity,
      title: "Digitalization",
      description: "Integration of Revive Live monitoring system for real-time fleet data, diagnostics, and performance analytics"
    },
    {
      icon: Award,
      title: "Final Testing",
      description: "Rigorous quality control and performance verification. Delivery with warranty equivalent to new equipment"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23009C43' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div
            className="inline-block px-4 py-2 bg-white border border-gray-300 text-gray-700 mb-6 shadow-sm"
            style={{
              borderRadius: '12px',
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.1em'
            }}
          >
            THE PROCESS
          </div>
          <h2
            className="mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#1a1a1a'
            }}
          >
            Regeneration Journey
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            A systematic 5-step transformation process that takes your proven chassis
            and integrates cutting-edge Revive technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-[#009C43] to-gray-200"
            style={{ top: '80px' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step Number Circle */}
                  <div className="flex flex-col items-center mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.12 + 0.3, type: "spring" }}
                      viewport={{ once: true }}
                      className="relative w-24 h-24 bg-white border-4 border-[#009C43] rounded-full flex items-center justify-center mb-4 shadow-lg z-10"
                    >
                      <Icon className="text-[#009C43]" size={36} strokeWidth={2.5} />
                    </motion.div>
                    <div
                      className="text-[#009C43] px-4 py-1 bg-emerald-50 border border-emerald-200"
                      style={{
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em'
                      }}
                    >
                      STEP {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3
                      className="mb-3"
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#1a1a1a',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Performance Guarantee */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-br from-[#009C43] to-[#007A34] text-white p-12 relative overflow-hidden"
          style={{ borderRadius: '24px' }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
          <div className="relative">
            <div className="text-5xl font-semibold mb-4" style={{ letterSpacing: '-0.02em' }}>
              43,300 L/min
            </div>
            <div className="text-xl font-semibold mb-2">
              Guaranteed Performance
            </div>
            <p className="text-white/90 max-w-2xl mx-auto">
              Same vacuum performance (93% guaranteed) and operational capacity as Warrior —
              on your existing, proven chassis
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
