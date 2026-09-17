import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, Copy, Check, Mail } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", message: "" });
      }, 3500);
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("orwyth@mail.ru");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="contact" className="py-28 md:py-36 relative overflow-hidden">
      
      {/* Subtle Background Radial Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1100px] h-[550px] md:h-[700px] pointer-events-none -z-10"
        style={{
          background: "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(255, 255, 255, 0.05) 0%, rgba(220, 220, 235, 0.015) 45%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-[1400px] mx-auto w-full px-6 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          label="05 / CONTACTO"
          category="CANAL DIRECTO"
          title={
            <>
              Hablemos de <span className="text-dim">la próxima idea.</span>
            </>
          }
          subtitle="Si tienes un proyecto, una colaboración o quieres conversar sobre desarrollo de software, arquitectura u OSINT, puedes escribirme."
        />

        {/* Clean Email Link & Copy (No bulky pill badge) */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 -mt-8 mb-12"
        >
          <a
            href="mailto:orwyth@mail.ru"
            className="inline-flex items-center gap-2 font-mono text-sm md:text-base text-silver hover:text-white transition-colors border-b border-white/20 hover:border-white pb-0.5"
          >
            <Mail className="w-4 h-4 text-graphite" />
            <span>orwyth@mail.ru</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.07] text-xs font-mono text-graphite hover:text-white transition-all"
            title="Copiar email"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Premium Liquid Chrome Chassis Container */}
        <motion.div 
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="card-liquid-chrome max-w-2xl mx-auto p-7 md:p-10 relative"
        >
          {/* Ethereal diagonal light sheen sweep */}
          <div className="card-liquid-chrome-sheen" />

          {/* Internal ambient corner glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.06)_0%,transparent_65%)] pointer-events-none" />

          {/* Bottom internal soft illumination */}
          <div className="absolute bottom-0 inset-x-0 h-28 pointer-events-none overflow-hidden z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-white/[0.12] via-white/[0.02] to-transparent" />
            <div 
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-14 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.35) 0%, rgba(220, 230, 250, 0.1) 50%, transparent 80%)",
                filter: "blur(10px)"
              }}
            />
            <div className="absolute bottom-0 inset-x-8 h-[1.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>

          {/* Clean Interactive Form */}
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">
            
            <div className="grid md:grid-cols-2 gap-5">
              {/* Field: Name */}
              <div className="space-y-2">
                <label className="text-xs font-mono tracking-wider text-silver/80 uppercase px-1">
                  Nombre
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Tu nombre o alias" 
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input-obsidian-liquid"
                />
              </div>

              {/* Field: Email */}
              <div className="space-y-2">
                <label className="text-xs font-mono tracking-wider text-silver/80 uppercase px-1">
                  Correo electrónico
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="ejemplo@dominio.com" 
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input-obsidian-liquid"
                />
              </div>
            </div>

            {/* Field: Message */}
            <div className="space-y-2">
              <label className="text-xs font-mono tracking-wider text-silver/80 uppercase px-1">
                Mensaje
              </label>
              <textarea 
                placeholder="Describe tu proyecto o consulta..." 
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input-obsidian-liquid resize-y min-h-[130px] leading-relaxed"
              />
            </div>
            
            {/* Action Bar with Liquid Chrome Button */}
            <div className="flex items-center justify-end pt-3">
              <button 
                type="submit"
                disabled={status !== "idle"}
                className={`btn-chrome-liquid group w-full sm:w-auto px-9 ${
                  status !== "idle" ? "opacity-90 cursor-default" : ""
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2.5 font-medium tracking-wide">
                  {status === "submitting" && (
                    <>
                      <span className="w-2 h-2 rounded-full bg-neutral-900 animate-ping" />
                      <span>Enviando...</span>
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>Mensaje enviado</span>
                    </>
                  )}
                  {status === "idle" && (
                    <>
                      <span>Enviar mensaje</span>
                      <Send className="w-3.5 h-3.5 text-neutral-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Clean Direct Access Links */}
        <div className="flex items-center justify-center gap-6 mt-12 text-xs font-mono text-graphite">
          <a href="https://github.com/Syllkom" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            GitHub ↗
          </a>
          <span className="text-white/10 select-none">•</span>
          <a href="mailto:orwyth@mail.ru" className="hover:text-white transition-colors">
            orwyth@mail.ru ↗
          </a>
        </div>

      </div>
    </section>
  );
}
