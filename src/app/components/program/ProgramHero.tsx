import { motion } from "motion/react";
import { ChevronDown, FileText, Play } from "lucide-react";
import newTruck from "../../../imports/new.png";

export function ProgramHero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Split Effect */}
      <div className="absolute inset-0">
        <img
          src={newTruck}
          alt="Revive Program"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        
        {/* Grain Texture */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Product Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-block px-6 py-3 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-400 mb-8"
            style={{ 
              borderRadius: '16px',
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.1em'
            }}
          >
            REVIVE PROGRAM
          </motion.div>

          <h1
            className="text-white mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 7rem)',
              fontWeight: 600,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)'
            }}
          >
            Regenerating
            <br />
            Your Fleet
          </h1>

          <p
            className="text-white/90 max-w-3xl mx-auto mb-4"
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              fontWeight: 400,
              lineHeight: 1.7,
              textShadow: '0 2px 15px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.4)'
            }}
          >
            We transform your existing assets into modern powerful machines.
          </p>

          <p
            className="text-emerald-400 max-w-3xl mx-auto mb-10 font-semibold"
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              lineHeight: 1.7,
              textShadow: '0 2px 15px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.4)'
            }}
          >
            Savings up to 30% compared to a new truck without compromising on quality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#009C43] text-white px-8 py-4 hover:bg-[#007A34] transition-all flex items-center gap-2"
              style={{ 
                borderRadius: '20px',
                fontSize: '1.125rem',
                fontWeight: 600,
                letterSpacing: '0.02em'
              }}
            >
              <FileText size={20} />
              ASSESS MY TRUCK
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 hover:bg-white/20 transition-all flex items-center gap-2"
              style={{ 
                borderRadius: '20px',
                fontSize: '1.125rem',
                fontWeight: 600,
                letterSpacing: '0.02em'
              }}
            >
              <Play size={20} />
              VIEW CASES
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-white/60" size={40} />
      </motion.button>
    </section>
  );
}
