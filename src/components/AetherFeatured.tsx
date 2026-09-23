import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { AetheroArchitectureVisual, BaileysIpcVisual } from "./Visuals";
import { ThematicShaderBackground } from "./ThemedShaders";

export function AetherFeatured() {
  return (
    <section id="aethero" className="py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto w-full">
        <SectionHeader 
          label="01 / DESTACADOS" 
          category="SISTEMAS CENTRALES & FRAMEWORKS"
          title={<>Sistemas & Frameworks WhatsApp.<br/><span className="text-dim">Arquitectura multi-hilo, IPC y ecosistemas modulares.</span></>} 
          subtitle="Proyectos de infraestructura y desarrollo de alto rendimiento para WhatsApp: desde aislamiento de procesos en worker threads con SQLite WAL hasta frameworks modulares y suites de control."
          tags={["BAILEYS-IPC", "AETHERO FRAMEWORK", "WORKER THREADS", "SQLITE WAL", "AETHERO-APP"]}
        />
        
        <div className="px-6">
          <div className="grid grid-cols-1 min-[650px]:grid-cols-2 gap-6 md:gap-8 items-stretch">
            
            {/* =========================================================
                CARD 01: BAILEYS-IPC (Colab with Zeppth)
                Shader Theme: Neuro-Noise Concurrency Streams
               ========================================================= */}
            <motion.article 
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 hover:border-emerald-500/40 p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] min-h-[500px] md:min-h-[540px] transition-all duration-500 bg-[#070709]/95"
            >
              {/* WebGL Thematic Shader: Neuro-Noise (Threads & IPC Streams) */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 group-hover:opacity-35 transition-opacity duration-700 z-0">
                <ThematicShaderBackground type="baileys-ipc" speed={0.4} />
                {/* Gradient vignette protecting typography */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/85 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/70 to-transparent" />
              </div>

              {/* High-tech CSS Chassis & Blueprint Background strictly flush at bottom-right */}
              <div className="absolute right-0 bottom-0 pointer-events-none overflow-hidden opacity-35 sm:opacity-40 group-hover:opacity-65 transition-opacity duration-500 z-[1] w-full max-w-[420px] flex items-end justify-end">
                <BaileysIpcVisual />
              </div>

              {/* Rim light top with Emerald/Cyan cybernetic glow */}
              <div 
                className="absolute -top-[1px] left-[35%] -translate-x-1/2 w-48 h-[1.5px] pointer-events-none z-30"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(52,211,153,0.3) 20%, rgba(255,255,255,0.9) 50%, rgba(52,211,153,0.3) 80%, transparent 100%)",
                }}
              />

              {/* Ambient specular sheen */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.06)_0%,transparent_60%)] pointer-events-none z-10" />

              {/* Top Bar: Badges & Live Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 relative z-20 mb-6">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3.5 py-1.5 rounded-full border border-emerald-400/30 text-xs font-mono text-emerald-300 bg-emerald-500/10 font-medium tracking-wide flex items-center gap-1.5 backdrop-blur-md shadow-[0_0_12px_rgba(52,211,153,0.2)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    COLAB // @Zeppth × @Orwyth
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-white/60 bg-white/[0.03] backdrop-blur-md">
                    IPC & WORKERS
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-white/50">
                  <span className="text-white/80 font-medium">SQLITE WAL</span>
                  <span className="text-emerald-400/80">• LIVE</span>
                </div>
              </div>

              {/* Center / Body: Typography & Features */}
              <div className="relative z-20 my-auto py-4">
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
                    Baileys-IPC
                  </h3>
                  <span className="text-[10px] sm:text-[11px] font-mono text-emerald-300/90 border border-emerald-500/30 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 bg-emerald-500/5 backdrop-blur-sm whitespace-nowrap shrink-0">
                    MULTI-THREADED
                  </span>
                </div>

                <p className="text-graphite text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                  Arquitectura IPC multi-hilo y motor de sesiones SQLite de alto rendimiento para WhatsApp (<span className="text-white font-mono text-xs">@whiskeysockets/baileys</span>). Aísla cada sesión en <strong className="text-white font-medium">worker_threads</strong> dedicados, transmitiendo streams binarios por ArrayBuffers sin bloquear el Event Loop.
                </p>

                {/* Technical Feature Chips */}
                <div className="flex flex-wrap gap-2">
                  {["Worker Threads", "IPC Streaming", "SQLite WAL", "Recursive Proxy", "Auto-Restart"].map((chip) => (
                    <span 
                      key={chip} 
                      className="px-3 py-1 rounded-lg border border-white/10 text-xs font-mono text-silver bg-white/[0.04] backdrop-blur-sm group-hover:border-emerald-500/30 group-hover:text-emerald-200 transition-colors"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Area: Actions */}
              <div className="relative z-20 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 mt-6">
                <a 
                  href="https://github.com/Zeppth/Baileys-IPC" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group/btn relative px-5 py-2.5 rounded-xl bg-gradient-to-b from-white via-[#f2f2f5] to-[#d8d8de] text-space font-mono text-xs font-semibold tracking-wider flex items-center gap-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1.5px_0_rgba(0,0,0,0.25),0_4px_14px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_24px_rgba(52,211,153,0.35),0_8px_24px_rgba(0,0,0,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <span className="relative z-10">GITHUB REPO</span>
                  <span className="relative z-10 text-emerald-950 font-bold transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                </a>
                
                <div className="text-xs font-mono text-white/40 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                  <span>CO-AUTHORED BY ORWYTH</span>
                </div>
              </div>
            </motion.article>


            {/* =========================================================
                CARD 02: AETHERO FRAMEWORK
                Shader Theme: Swirl / 60FPS Event-Loop Kernel
               ========================================================= */}
            <motion.article 
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[28px] md:rounded-[36px] overflow-hidden border border-white/10 hover:border-white/30 p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] min-h-[500px] md:min-h-[540px] transition-all duration-500 bg-[#070709]/95"
            >
              {/* WebGL Thematic Shader: Swirl / Event Loop Reactor */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15 group-hover:opacity-30 transition-opacity duration-700 z-0">
                <ThematicShaderBackground type="aethero-core" speed={0.35} />
                {/* Gradient vignette protecting typography */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/85 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/70 to-transparent" />
              </div>

              {/* High-tech CSS Chassis & Blueprint Background strictly flush at bottom-right */}
              <div className="absolute right-0 bottom-0 pointer-events-none overflow-hidden opacity-35 sm:opacity-40 group-hover:opacity-65 transition-opacity duration-500 z-[1] w-full max-w-[420px] flex items-end justify-end">
                <AetheroArchitectureVisual />
              </div>

              {/* Rim light top with Platinum glow */}
              <div 
                className="absolute -top-[1px] left-[65%] -translate-x-1/2 w-48 h-[1.5px] pointer-events-none z-30"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.15) 80%, transparent 100%)",
                }}
              />

              {/* Ambient specular sheen */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none z-10" />

              {/* Top Bar: Badges & Live Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 relative z-20 mb-6">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-mono text-silver bg-white/[0.05] font-medium tracking-wide backdrop-blur-md">
                    CORE // v2.4
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-white/60 bg-white/[0.03] backdrop-blur-md">
                    WHATSAPP BOTS
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-white/50">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                  <span className="text-white/80 font-medium">ECOSYSTEM</span>
                  <span className="text-white/30">• POSIX</span>
                </div>
              </div>

              {/* Center / Body: Typography & Features */}
              <div className="relative z-20 my-auto py-4">
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
                    Aethero Framework
                  </h3>
                  <span className="text-[10px] sm:text-[11px] font-mono text-silver/80 border border-white/10 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 bg-white/[0.04] backdrop-blur-sm whitespace-nowrap shrink-0">
                    MODULAR ENGINE
                  </span>
                </div>

                <p className="text-graphite text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                  Framework modular reactivo de alto rendimiento para crear bots de WhatsApp. Ofrece arquitectura orientada a eventos, gestión flexible de plugins y sincronización con <strong className="text-white font-medium">Aethero App</strong> para monitorizar la actividad del repositorio y actualizar el núcleo.
                </p>

                {/* Technical Feature Chips */}
                <div className="flex flex-wrap gap-2">
                  {["Aethero Core", "EventBus", "Scheduler", "Plugins System", "Aethero-App"].map((chip) => (
                    <span 
                      key={chip} 
                      className="px-3 py-1 rounded-lg border border-white/10 text-xs font-mono text-silver bg-white/[0.04] backdrop-blur-sm group-hover:border-white/25 group-hover:text-white transition-colors"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Area: Actions */}
              <div className="relative z-20 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 mt-6">
                <a 
                  href="https://github.com/Syllkom/Aethero" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group/btn relative px-5 py-2.5 rounded-xl bg-gradient-to-b from-white via-[#f2f2f5] to-[#d8d8de] text-space font-mono text-xs font-semibold tracking-wider flex items-center gap-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1.5px_0_rgba(0,0,0,0.25),0_4px_14px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_24px_rgba(255,255,255,0.35),0_8px_24px_rgba(0,0,0,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <span className="relative z-10">GITHUB REPO</span>
                  <span className="relative z-10 font-bold transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                </a>
                <a 
                  href="https://github.com/Syllkom/Aethero-App" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group/app relative px-4 py-2.5 rounded-xl border border-white/20 bg-gradient-to-b from-white/[0.08] to-white/[0.02] text-white font-mono text-xs font-medium tracking-wider hover:border-white/40 hover:bg-white/[0.12] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_0_20px_rgba(255,255,255,0.12),0_4px_14px_rgba(0,0,0,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 backdrop-blur-md"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                  <span>AETHERO-APP</span>
                  <span className="text-white/60 group-hover/app:text-white transition-transform duration-200 group-hover/app:translate-x-0.5 group-hover/app:-translate-y-0.5">↗</span>
                </a>
              </div>
            </motion.article>

          </div>
        </div>
      </div>
    </section>
  );
}
