import { motion } from "motion/react";
import { useState, useRef } from "react";
import oldTruck from "../../../imports/old.png";
import newTruck from "../../../imports/new.png";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="mb-4"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.1
            }}
          >
            The Transformation
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Drag the slider to see how we regenerate your fleet
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] overflow-hidden cursor-col-resize select-none shadow-2xl"
            style={{ borderRadius: '24px' }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* Before Image (Old) */}
            <div className="absolute inset-0">
              <img
                src={oldTruck}
                alt="Before restoration"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-6 left-6 bg-red-500/90 backdrop-blur-sm px-6 py-3 text-white"
                style={{ 
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em'
                }}
              >
                BEFORE
              </div>
            </div>

            {/* After Image (New) - Clipped */}
            <div 
              className="absolute inset-0 transition-none"
              style={{ 
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` 
              }}
            >
              <img
                src={newTruck}
                alt="After restoration"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-6 right-6 bg-[#009C43]/90 backdrop-blur-sm px-6 py-3 text-white"
                style={{ 
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em'
                }}
              >
                AFTER
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-10"
              style={{ 
                left: `${sliderPosition}%`,
                transform: 'translateX(-50%)'
              }}
              onMouseDown={handleMouseDown}
              onTouchStart={() => setIsDragging(true)}
            >
              {/* Slider Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-[#009C43]">
                <div className="flex gap-1">
                  <div className="w-0.5 h-6 bg-gray-400" />
                  <div className="w-0.5 h-6 bg-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-6 text-gray-500 text-sm"
          >
            ← Drag the slider to compare →
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
