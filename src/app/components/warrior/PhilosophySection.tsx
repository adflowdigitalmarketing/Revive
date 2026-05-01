import { motion } from "motion/react";

export function PhilosophySection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white via-emerald-50/20 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#009C43]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl" />

      {/* Grain Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 
            className="mb-12"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              color: '#1a1a1a'
            }}
          >
            A Strategy,
            <br />
            Not a Compromise
          </h2>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p 
              className="text-gray-700 max-w-4xl mx-auto leading-relaxed"
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                fontWeight: 400,
                lineHeight: 1.8,
                letterSpacing: '-0.01em'
              }}
            >
              At the center of our portfolio is the <span className="text-[#009C43] font-semibold">Revive Warrior</span> — a newly manufactured combination sewer cleaning unit engineered from the outset for multiple operational lifecycles.
            </p>

            <p 
              className="text-gray-700 max-w-4xl mx-auto leading-relaxed mt-8"
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                fontWeight: 400,
                lineHeight: 1.8,
                letterSpacing: '-0.01em'
              }}
            >
              Featuring an <span className="text-[#009C43] font-semibold">8mm steel tank</span> and a reinforced, galvanised detachable subframe, we ensure your asset remains productive for <span className="text-[#009C43] font-semibold">decades, not just years</span>.
            </p>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 mx-auto bg-gradient-to-r from-transparent via-[#009C43]/30 to-transparent"
            style={{ height: '2px', maxWidth: '400px' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
