import { motion, useScroll, useSpring } from "motion/react";
import { LiquidMetalButton } from "./LiquidMetalButton";
import { LiquidNavPill } from "./LiquidNavPill";

export function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001
  });

  return (
    <>
      {/* Option 3: Laser Scroll Progress Track (Top Edge) */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/[0.04] z-50 pointer-events-none">
        <motion.div 
          className="h-full bg-gradient-to-r from-transparent via-silver/70 to-white origin-left relative"
          style={{ scaleX }}
        >
          {/* Micro laser spark at the leading edge */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white/70 blur-[2px]" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
        </motion.div>
      </div>

      <motion.header 
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 h-24 z-40 pointer-events-none pt-4"
      >
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 flex items-center justify-between pointer-events-auto">
          <div className="flex-1 flex justify-start">
            <a href="#" className="flex items-center gap-2">
              <img 
                src="https://raw.githubusercontent.com/Syllkom/Syllkom/refs/heads/main/orwyth-logo.svg" 
                alt="Orwyth" 
                className="w-28 sm:w-32 opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
          
          {/* Navigation links inside Liquid Metal Pill */}
          <div className="hidden md:flex justify-center">
            <LiquidNavPill />
          </div>

          {/* Contact Button */}
          <div className="flex-1 flex justify-end">
            <LiquidMetalButton label="Contactar" />
          </div>
        </div>
      </motion.header>
    </>
  );
}

