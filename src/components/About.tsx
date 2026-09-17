import { motion } from "motion/react";

export function About() {
  const stats = [
    { value: "∞", label: "CURIOSIDAD" },
    { value: "04", label: "PROYECTOS" },
    { value: "10+", label: "TECNOLOGÍAS" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative">

          {/* Centered Top Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 font-mono text-xs text-silver font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse" />
            <span className="tracking-widest uppercase">04 / SOBRE MÍ</span>
            <span className="text-white/20">/</span>
            <span className="text-graphite uppercase tracking-wider">IDENTIDAD &amp; ENFOQUE</span>
          </motion.div>

          {/* Centered Statement with Soft Elevation Reveal */}
          <motion.h2 
            initial={{ opacity: 0, y: 22, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 text-[clamp(26px,3.8vw,48px)] leading-[1.3] tracking-[-0.035em] text-graphite mb-14 max-w-3xl"
          >
            Soy <strong className="text-luminous font-medium">Orwyth</strong>. Desarrollo software y exploro <strong className="text-luminous font-medium">OSINT, sistemas e investigación digital</strong>. Me interesa construir cosas que funcionen, entender cómo están hechas y descubrir nuevas formas de conectar tecnología e información.
          </motion.h2>
          
          {/* Centered Staggered Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 grid grid-cols-3 gap-8 md:gap-14 pt-8 border-t border-white/10 w-full max-w-xl mx-auto"
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-4xl md:text-5xl font-medium text-white mb-2">{stat.value}</div>
                <div className="text-xs font-mono text-silver/80 tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
