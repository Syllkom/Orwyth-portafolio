import type { ReactNode } from "react";
import { motion } from "motion/react";

export function SectionHeader({ 
  label, 
  title, 
  subtitle,
  category,
  tags
}: { 
  label: string; 
  title: ReactNode; 
  subtitle?: string;
  category?: string;
  tags?: string[];
}) {
  return (
    <div className="max-w-4xl mx-auto text-center flex flex-col items-center mb-16 md:mb-20 px-6">
      {/* Centered Top Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 font-mono text-xs text-silver font-medium mb-6"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse" />
        <span className="tracking-widest uppercase">{label}</span>
        {category && (
          <>
            <span className="text-white/20">/</span>
            <span className="text-graphite uppercase tracking-wider">{category}</span>
          </>
        )}
      </motion.div>

      {/* Centered Title with Soft Elevation Reveal */}
      <motion.h2 
        initial={{ opacity: 0, y: 22, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="section-title text-[clamp(38px,6vw,76px)] leading-[0.94] tracking-[-0.04em] font-medium mb-6"
      >
        {title}
      </motion.h2>

      {/* Centered Subtitle */}
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="text-graphite text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Centered Tags with Staggered Fade */}
      {tags && tags.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-2 pt-1"
        >
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-silver/80 bg-white/[0.02]"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      )}
    </div>
  );
}
