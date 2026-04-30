import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import warriorImage from "../../../imports/hiro-warrior1.jpeg";

export function WarriorHero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={warriorImage}
          alt="Revive Warrior"
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
            className="inline-block px-6 py-3 bg-[#009C43]/20 backdrop-blur-md border border-[#009C43]/30 text-[#009C43] mb-8"
            style={{ 
              borderRadius: '16px',
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.1em'
            }}
          >
            REVIVE WARRIOR SERIES
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
            Engineering for a
            <br />
            30-Year Lifecycle
          </h1>

          <p
            className="text-white/90 max-w-3xl mx-auto mb-10"
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              fontWeight: 400,
              lineHeight: 1.7,
              textShadow: '0 2px 15px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.4)'
            }}
          >
            Challenging the traditional "buy, use, replace" model with circular engineering
            <br />
            designed to be built, refurbished, and redeployed repeatedly.
          </p>

          <motion.button
            onClick={scrollToContent}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 hover:bg-white/20 transition-all group"
            style={{ 
              borderRadius: '20px',
              fontSize: '1.125rem',
              fontWeight: 600,
              letterSpacing: '0.02em'
            }}
          >
            SCROLL TO EXPLORE
            <ChevronDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform" size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-white/60" size={40} />
      </motion.div>
    </section>
  );
}
