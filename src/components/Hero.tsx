import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Signature Pixel / Dot Field Background with Radial Mask */}
      <div className="hero-pixel-field" />
      <div className="hero-ambient-glow" />

      <div className="max-w-[1240px] mx-auto w-full px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Top Centered Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md font-mono text-xs text-silver/90 tracking-[0.2em] uppercase mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse" />
          <span>SOFTWARE / OSINT / SYSTEMS</span>
        </motion.div>

        {/* Monumental Contour Title with Sweeping Illumination */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-full flex justify-center mb-10"
        >
          <h1 className="hero-title-container" aria-label="BUILD. INVESTIGATE. CREATE.">
            {/* Permanent Glyph Contour Base */}
            <div className="hero-title-base">
              <span className="hero-word-sans">BUILD.</span>
              <br />
              <span className="hero-word-serif">INVESTIGATE.</span>
              <br />
              <span className="hero-word-sans">CREATE.</span>
            </div>

            {/* Moving Illumination Light Band */}
            <div className="hero-title-light" aria-hidden="true">
              <span className="hero-word-sans">BUILD.</span>
              <br />
              <span className="hero-word-serif">INVESTIGATE.</span>
              <br />
              <span className="hero-word-sans">CREATE.</span>
            </div>
          </h1>
        </motion.div>

        {/* Centered Descriptive Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-graphite text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
        >
          Soy <strong className="text-white font-medium">Orwyth</strong>. Interfaces con movimiento refinado, desarrollo de software de alto rendimiento, arquitecturas modulares como <span className="text-silver font-medium">Aethero Framework</span> e investigación de sistemas y fuentes abiertas (OSINT).
        </motion.p>

        {/* Centered Tactical Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a 
            href="#projects" 
            className="btn-chrome-liquid group"
          >
            <span className="relative z-10 flex items-center gap-2">
              EXPLORAR TRABAJO
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-950/60 group-hover:scale-125 transition-transform" />
            </span>
          </a>
          <a 
            href="https://github.com/Syllkom" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-obsidian-liquid group"
          >
            <span className="relative z-10 flex items-center gap-2">
              GITHUB / SYLLKOM
              <span className="text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs">
                ↗
              </span>
            </span>
          </a>
        </motion.div>

        {/* Subtle Technical Capabilities / Stack Ribbon */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="pt-8 border-t border-white/8 w-full max-w-3xl mx-auto"
        >
          <div className="text-[10px] md:text-[11px] font-mono tracking-[0.25em] text-white/40 uppercase mb-4">
            ESPECIALIDADES // NÚCLEO TÉCNICO
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 text-xs sm:text-sm font-mono text-white/50">
            <span className="hover:text-silver transition-colors">AETHERO CORE</span>
            <span className="text-white/20 select-none">•</span>
            <span className="hover:text-silver transition-colors">WHATSAPP BOTS</span>
            <span className="text-white/20 select-none">•</span>
            <span className="hover:text-silver transition-colors">OSINT / RECON</span>
            <span className="text-white/20 select-none">•</span>
            <span className="hover:text-silver transition-colors">REACT &amp; MOTION</span>
            <span className="text-white/20 select-none">•</span>
            <span className="hover:text-silver transition-colors">POSIX READY</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
