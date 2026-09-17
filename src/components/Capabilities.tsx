import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { NodeGraph, OsintGraph, MobileFrames, InterfaceGrid } from "./Visuals";

const capabilities = [
  {
    num: "01",
    label: "DEVELOPMENT",
    title: "Software & Web",
    desc: "Aplicaciones, interfaces y sistemas digitales con atención a estructura, rendimiento y experiencia.",
    chips: ["JavaScript", "Node.js", "React", "Next.js", "Astro"],
    colSpan: "col-span-1 md:col-span-6",
    Visual: NodeGraph,
    isWide: false,
    isTopRow: true,
  },
  {
    num: "02",
    label: "OSINT",
    title: "Research & Intelligence",
    desc: "Fuentes abiertas, descubrimiento de información, análisis y automatización.",
    chips: ["Research", "Recon", "Analysis", "Automation"],
    colSpan: "col-span-1 md:col-span-6",
    Visual: OsintGraph,
    isWide: false,
    isTopRow: true,
  },
  {
    num: "03",
    label: "MOBILE",
    title: "Cross-platform",
    desc: "Aplicaciones y experiencias multiplataforma diseñadas para funcionar de forma consistente.",
    chips: ["Kotlin", "Flutter"],
    colSpan: "col-span-1 md:col-span-4",
    Visual: MobileFrames,
    isWide: false,
    isTopRow: false,
  },
  {
    num: "04",
    label: "INTERFACE",
    title: "Visual Systems",
    desc: "Interfaces responsive, motion y sistemas visuales que hacen que un producto se sienta vivo.",
    chips: ["HTML", "CSS", "Tailwind CSS"],
    colSpan: "col-span-1 md:col-span-8",
    Visual: InterfaceGrid,
    isWide: true,
    isTopRow: false,
  }
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto w-full">
        <SectionHeader 
          label="02 / CAPACIDADES" 
          category="VECTORES TÉCNICOS"
          title={<>Construir. <span className="text-dim">Investigar.</span> Experimentar.</>} 
          subtitle="Exploración metódica de sistemas, desarrollo de software escalable y diseño de interfaces con precisión y dinamismo."
          tags={["SOFTWARE", "OSINT", "SISTEMAS", "INTERFACES"]}
        />

        {/* Outer container for grid & laser horizon */}
        <div className="px-6 relative">
          
          {/* =========================================================================
              THE CAPABILITIES GRID
             ========================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative z-10">
            {capabilities.map((cap, i) => (
              <motion.article 
                key={cap.num}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`mat-panel rounded-3xl p-6 md:p-10 relative overflow-hidden group flex flex-col justify-between min-h-[350px] md:min-h-[380px] ${cap.colSpan} border border-white/10 hover:border-white/25 transition-all`}
              >
                {/* =====================================================================
                    ILUMINACIÓN INTERNA EN BORDES (Contenida estrictamente en las tarjetas)
                    - Fila superior: Iluminación en el borde inferior.
                    - Fila inferior: Iluminación en el borde superior.
                    - Sin líneas flotantes en el hueco ni puntos salientes.
                   ===================================================================== */}
                {cap.isTopRow ? (
                  /* Tarjetas Superiores: Iluminación suave que emana de la tarjeta hacia el borde inferior */
                  <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none overflow-hidden">
                    {/* Gradiente ascendente interno */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/[0.15] via-white/[0.03] to-transparent" />
                    {/* Resplandor suave concentrado en el borde inferior */}
                    <div 
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-16 pointer-events-none"
                      style={{
                        background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.45) 0%, rgba(220, 230, 250, 0.15) 50%, transparent 80%)",
                        filter: "blur(8px)"
                      }}
                    />
                    {/* Borde inferior suavemente iluminado (contenido dentro de la tarjeta) */}
                    <div className="absolute bottom-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                  </div>
                ) : (
                  /* Tarjetas Inferiores: Iluminación suave que emana de la tarjeta hacia el borde superior */
                  <div className="absolute top-0 inset-x-0 h-32 pointer-events-none overflow-hidden">
                    {/* Gradiente descendente interno */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.14] via-white/[0.025] to-transparent" />
                    {/* Resplandor suave concentrado en el borde superior */}
                    <div 
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-3/4 h-16 pointer-events-none"
                      style={{
                        background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, rgba(220, 230, 250, 0.12) 50%, transparent 80%)",
                        filter: "blur(8px)"
                      }}
                    />
                    {/* Borde superior suavemente iluminado (contenido dentro de la tarjeta) */}
                    <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                  </div>
                )}

                {cap.isWide ? (
                  /* Layout Expandido para Visual Systems */
                  <div className="grid md:grid-cols-[1.1fr_1.3fr] gap-8 items-center h-full relative z-10">
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <div className="text-xs font-mono tracking-widest text-silver mb-6 md:mb-10 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#fff]" />
                          {cap.num} — {cap.label}
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-3.5">
                          {cap.title}
                        </h3>
                        <p className="text-graphite text-sm md:text-base leading-relaxed max-w-sm mb-6">
                          {cap.desc}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-auto pt-4">
                        {cap.chips.map(chip => (
                          <span key={chip} className="px-3.5 py-1.5 rounded-lg border border-white/15 text-xs font-mono text-silver bg-white/[0.06] font-medium">
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-full relative opacity-35 group-hover:opacity-60 transition-opacity duration-500">
                      <cap.Visual />
                    </div>
                  </div>
                ) : (
                  /* Layout Estándar (Cards 01, 02, 03) */
                  <>
                    {/* Representación visual de arte técnico con mayor transparencia */}
                    <div className="absolute right-[-20px] bottom-[-20px] w-[250px] h-[250px] md:w-[290px] md:h-[290px] opacity-30 group-hover:opacity-55 transition-all duration-700 pointer-events-none">
                      <cap.Visual />
                    </div>

                    <div className="relative z-10">
                      <div className="text-xs font-mono tracking-widest text-silver mb-6 md:mb-10 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#fff]" />
                        {cap.num} — {cap.label}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-3.5">
                        {cap.title}
                      </h3>
                      <p className="text-graphite text-sm md:text-base leading-relaxed max-w-xs mb-8">
                        {cap.desc}
                      </p>
                    </div>

                    <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                      {cap.chips.map(chip => (
                        <span key={chip} className="px-3.5 py-1.5 rounded-lg border border-white/15 text-xs font-mono text-silver bg-white/[0.06] font-medium backdrop-blur-sm">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
