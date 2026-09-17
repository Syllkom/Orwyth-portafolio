import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { AetheroArchitectureVisual } from "./Visuals";

export function AetherFeatured() {
  const telemetryBars = [45, 75, 60, 90, 80, 55, 95, 70, 85, 65, 100, 75, 60, 90, 85, 70];

  return (
    <section id="aethero" className="py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto w-full">
        <SectionHeader 
          label="01 / DESTACADO" 
          category="SISTEMA CENTRAL"
          title={<>Aethero Framework.<br/><span className="text-dim">Creación de bots de WhatsApp y ecosistema modular.</span></>} 
          subtitle="Framework de alto rendimiento diseñado para la creación y orquestación de bots de WhatsApp. Cuenta con Aethero App para monitorizar y controlar la actividad del repositorio, plugins y actualizaciones del núcleo."
          tags={["AETHERO FRAMEWORK", "WHATSAPP BOTS", "PLUGINS & COMMITS", "AETHERO-APP"]}
        />
        
        <div className="px-6">
          <motion.div 
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[28px] md:rounded-[36px] overflow-hidden mat-metal border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col justify-between min-h-[580px] md:min-h-[660px]"
          >
            {/* Brillo en el borde superior (Rim Light) */}
            <div 
              className="absolute -top-[1px] left-[28%] -translate-x-1/2 w-48 h-[1px] pointer-events-none z-20"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 15%, rgba(255,255,255,0.38) 50%, rgba(255,255,255,0.06) 85%, transparent 100%)",
              }}
            />
            <div 
              className="absolute -top-1 left-[28%] -translate-x-1/2 w-32 h-3 pointer-events-none rounded-full opacity-35"
              style={{
                background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)",
                filter: "blur(2px)"
              }}
            />

            {/* Brillo en el borde inferior (Rim Light) */}
            <div 
              className="absolute -bottom-[1px] left-[70%] -translate-x-1/2 w-52 h-[1px] pointer-events-none z-20"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 15%, rgba(255,255,255,0.40) 50%, rgba(255,255,255,0.06) 85%, transparent 100%)",
              }}
            />
            <div 
              className="absolute -bottom-1 left-[70%] -translate-x-1/2 w-36 h-3 pointer-events-none rounded-full opacity-35"
              style={{
                background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)",
                filter: "blur(2px)"
              }}
            />

            {/* Brillo sutil en el borde lateral derecho */}
            <div 
              className="absolute -right-[1px] top-[40%] -translate-y-1/2 h-28 w-[1px] pointer-events-none z-20"
              style={{
                background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.04) 20%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.04) 80%, transparent 100%)",
              }}
            />

            {/* Ambient subtle satin specular sheen */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none" />

            {/* Top Bar: Categorical Badges & Live Status */}
            <div className="flex flex-wrap items-center justify-between gap-3 relative z-10 mb-4">
              <div className="flex flex-wrap gap-2.5">
                <span className="px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-mono text-silver bg-white/[0.05] font-medium tracking-wide">
                  FEATURED
                </span>
                <span className="px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-white/60 bg-white/[0.02]">
                  WHATSAPP BOTS
                </span>
                <span className="px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-white/40 bg-white/[0.02]">
                  FRAMEWORK
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-white/50">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                <span className="text-white/80 font-medium">CORE // v2.4</span>
                <span className="hidden sm:inline text-white/30">• POSIX READY</span>
              </div>
            </div>

            {/* Center Area: Technical Vector Architecture Visual in the style of "Construir. Investigar. Experimentar" */}
            <div className="relative my-4 md:my-6 flex-1 flex items-center justify-center">
              <AetheroArchitectureVisual />
            </div>

            {/* Bottom Area: Monumental Title + Telemetry Console (Anterior Diseño de Aether) */}
            <div className="relative z-10 pt-6 border-t border-white/8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
              
              {/* Left Column: Title, Description & Repositories */}
              <div className="max-w-xl">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-2.5">
                  Aethero Framework
                </h3>
                <p className="text-graphite text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                  Framework modular reactivo de alto rendimiento para crear bots de WhatsApp. Ofrece arquitectura orientada a eventos, gestión flexible de plugins y sincronización con <strong className="text-white font-medium">Aethero App</strong> para monitorizar y controlar la actividad del repositorio, plugins añadidos y actualizaciones del núcleo.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://github.com/Syllkom/Aethero" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-white text-space font-mono text-xs font-medium tracking-wider hover:bg-silver transition-colors flex items-center gap-2"
                  >
                    <span>GITHUB REPO (BOTS)</span>
                    <span>↗</span>
                  </a>
                  <a 
                    href="https://github.com/Syllkom/Aethero-App" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl border border-white/15 text-silver font-mono text-xs font-medium tracking-wider hover:border-white/30 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>AETHERO-APP (CONTROL ACTIVIDAD)</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Signature Telemetry Box (Anterior Aether Layout) */}
              <div className="relative w-full md:w-[320px] lg:w-[360px] mat-panel rounded-2xl border border-white/10 p-4 md:p-5 font-mono shadow-xl shrink-0 overflow-hidden">
                {/* Borde superior iluminado en Telemetría */}
                <div 
                  className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-32 h-[1px] pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 15%, rgba(255,255,255,0.32) 50%, rgba(255,255,255,0.06) 85%, transparent 100%)",
                  }}
                />
                <div className="flex justify-between items-center text-xs text-white/50 mb-3 border-b border-white/8 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-white font-medium tracking-wider">AETHERO // TELEMETRY</span>
                  </div>
                  <span className="text-silver/60">01.SYS</span>
                </div>

                {/* Animated Spectrum / Equalizer Bars */}
                <div className="flex items-end justify-between gap-1.5 h-12 my-2 py-1">
                  {telemetryBars.map((val, idx) => (
                    <div 
                      key={idx} 
                      className="flex-1 rounded-sm bg-gradient-to-t from-white/15 via-silver/70 to-white transition-all duration-500" 
                      style={{ 
                        height: `${val}%`,
                        opacity: 0.4 + (val / 100) * 0.6
                      }} 
                    />
                  ))}
                </div>

                <div className="flex justify-between items-center text-xs pt-2 border-t border-white/8 text-white/60">
                  <span className="text-graphite">BUFFER: <strong className="text-white font-medium">99.8%</strong></span>
                  <a 
                    href="https://github.com/Syllkom/Aethero" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-medium tracking-wider flex items-center gap-1 transition-colors"
                  >
                    REALTIME ↗
                  </a>
                </div>
              </div>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
