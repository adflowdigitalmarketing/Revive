import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  backgroundImage: string;
}

export function HeroSection({ backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Industrial engineering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        
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
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 
            className="text-white mb-6"
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 7rem)',
              fontWeight: 600,
              letterSpacing: '-0.04em',
              lineHeight: 0.95
            }}
          >
            Engineering Long-term
            <br />
            Value in Sewer Cleaning
          </h1>
          
          <p 
            className="text-white/90 max-w-3xl mx-auto mb-8"
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            Challenging the 'buy, use, replace' model with circular engineering
            <br />
            built for a 30+ year life.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#009C43] text-white px-10 py-4 hover:bg-[#007A34] transition-colors"
            style={{ 
              borderRadius: '20px',
              fontSize: '1.125rem',
              fontWeight: 600,
              letterSpacing: '0.02em'
            }}
          >
            EXPLORE OUR VISION
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
