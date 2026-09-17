import { motion } from "motion/react";

export function TransitionOrbital() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-12 relative overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Subtle feathered divider */}
      <div className="max-w-[1400px] w-full px-6 mb-6">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-[1400px] w-full px-6 flex items-center justify-between font-mono text-[10px] md:text-xs text-dim">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
          <span className="tracking-widest text-silver/80">SYS_INDEX // 03.SECT</span>
        </div>

        <div className="hidden sm:flex items-center gap-8 text-[11px] text-white/30 tracking-wider">
          <span>PIPELINE: ACTIVE</span>
          <span className="w-12 h-px bg-white/10" />
          <span>FREQ: 60.00 FPS</span>
          <span className="w-12 h-px bg-white/10" />
          <span>STATUS: OPTIMIZED</span>
        </div>

        <div className="tracking-widest text-silver/60">
          PROYECTOS ↘
        </div>
      </div>
    </motion.div>
  );
}

export function TransitionWireframe() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-12 relative overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Subtle feathered divider */}
      <div className="max-w-[1400px] w-full px-6 mb-6">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-[1400px] w-full px-6 flex items-center justify-between font-mono text-[10px] md:text-xs text-dim">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-silver/80" />
          <span className="tracking-widest text-silver/80">SYSTEM / 04.PERSPECTIVE</span>
        </div>

        <div className="hidden sm:flex items-center gap-8 text-[11px] text-white/30 tracking-wider">
          <span>LATENCY: ZERO</span>
          <span className="w-12 h-px bg-white/10" />
          <span>HARDWARE ACCELERATED</span>
        </div>

        <div className="tracking-widest text-silver/60">
          IDENTIDAD // PERFIL ↘
        </div>
      </div>
    </motion.div>
  );
}
