import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import warrior from "../../imports/hiro-warrior1.jpeg";
import program from "../../imports/hiro-revive-program.png";
import dublin from "../../imports/dublin_street1.png";
import sustainability from "../../imports/IMG_6479.JPG";
import data from "../../imports/co2.png";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: warrior,
    title: "WELCOME TO REVIVE GROUP",
    subtitle:
      "At The Revive Group, we create Partners in Sustainability, not customers.",
  },
  {
    image: dublin,
    title: "Built-to-Last",
    subtitle:
      "The Revive Warrior Program is designed to\nmaximise longevity and sustainability, providing\nan extended life-cycle for each unit we produce.",
  },
  {
    image: program,
    title: "Revive Program",
    subtitle:
      "By reducing the demand for virgin steel\nour Revive units save up to 25-tonnes of\nCO₂ from being produced.",
  },
  {
    image: sustainability,
    title: "Sustainability\nin Action",
    subtitle:
      "Ireland's first completely off-grid manufacturing facility\npowered by renewable energy",
  },
  {
    image: data,
    title: "Data-Driven\nDrainage Operations",
    subtitle:
      "Real-time fleet monitoring and predictive maintenance\npowered by Revive Live",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length,
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen w-full flex items-end justify-start overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <motion.img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 8, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

          {/* Grain Texture */}
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 lg:px-12 pb-32 text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-white mb-6 whitespace-pre-line"
              style={{
                fontSize: "48px",
                fontWeight: 600,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                textShadow:
                  "0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.5)",
              }}
            >
              {slides[currentSlide].title}
            </h1>

            <p
              className="text-white/90 max-w-3xl mb-8 whitespace-pre-line"
              style={{
                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                fontWeight: 400,
                lineHeight: 1.6,
                textShadow:
                  "0 2px 15px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.4)",
              }}
            >
              {slides[currentSlide].subtitle}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#009C43] text-white px-10 py-4 hover:bg-[#007A34] transition-colors"
              style={{
                borderRadius: "20px",
                fontSize: "1.125rem",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              EXPLORE OUR VISION
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? "bg-white w-12 h-2"
                : "bg-white/40 hover:bg-white/60 w-2 h-2"
            }`}
            style={{ borderRadius: "4px" }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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