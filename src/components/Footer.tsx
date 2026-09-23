import React from "react";

const socials = [
  {
    name: "GitHub",
    handle: "@syllkom",
    url: "https://github.com/syllkom",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    )
  },
  {
    name: "Instagram",
    handle: "@orwyth",
    url: "https://instagram.com/orwyth",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    name: "Telegram",
    handle: "@orwyth",
    url: "https://t.me/orwyth",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.899-.968 4.542-1.365 6.425-.168.796-.497 1.062-.81 1.089-.68.061-1.196-.45-1.855-.882-1.031-.676-1.614-1.097-2.615-1.756-1.157-.762-.407-1.18.252-1.864.173-.18 3.177-2.912 3.235-3.161.007-.031.014-.149-.056-.211-.07-.062-.174-.041-.249-.024-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.098.155.231.171.326.016.096.037.312.02.483z"/>
      </svg>
    )
  },
  {
    name: "TikTok",
    handle: "@orwyth",
    url: "https://tiktok.com/@orwyth",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.25a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.47a8.28 8.28 0 0 0 4.91 1.62V6.69h-1z"/>
      </svg>
    )
  }
];

export function Footer() {
  return (
    <footer className="pt-20 pb-12 overflow-hidden relative bg-transparent">
      {/* Feathered top divider */}
      <div className="max-w-[1400px] mx-auto w-full px-6 mb-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-6">
        
        {/* Monumental Logo - Clash Display Bold with metallic depth */}
        <div className="relative mb-[-3vw] sm:mb-[-4vw] pt-6 pb-2 pointer-events-none overflow-visible">
          <h1 
            style={{ 
              fontFamily: "'Clash Display', 'ClashDisplay-Variable', 'ClashDisplay', sans-serif",
              fontWeight: 700 
            }}
            className="text-[clamp(90px,20vw,300px)] leading-[0.9] tracking-[0.025em] font-bold select-none text-center bg-gradient-to-b from-white/25 via-white/10 to-transparent bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(255,255,255,0.05)] pt-2 pb-4"
          >
            Orwyth
          </h1>
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/30 to-[#030303]/85 pointer-events-none" />
        </div>

        {/* Footer Panel - Clean, elegant 3-column obsidian metal card */}
        <div className="mat-metal rounded-[28px] md:rounded-[36px] p-6 sm:p-8 md:p-12 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          
          {/* Brand & Bio (Left Column) */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <a href="#" className="inline-block mb-3">
                <img 
                  src="https://raw.githubusercontent.com/Syllkom/Syllkom/refs/heads/main/orwyth-logo.svg" 
                  alt="Orwyth" 
                  className="w-28 sm:w-32 opacity-90 hover:opacity-100 transition-opacity"
                />
              </a>
              <p className="text-xs sm:text-sm text-graphite max-w-sm leading-relaxed">
                Software Developer / OSINT / Systems.<br />
                Construyendo en la intersección del diseño y la ingeniería de sistemas.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-white/50 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
              <span className="text-silver text-[11px] font-medium tracking-wide">ONLINE // SYLLKOM ECOSYSTEM</span>
            </div>
          </div>

          {/* Navigation (Center Column) */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono tracking-wider text-silver/80 mb-4 uppercase">
              Navegación
            </div>
            <div className="flex flex-col gap-2.5 text-xs font-mono text-graphite">
              <a href="#about" className="hover:text-white transition-colors w-fit">Sobre mí</a>
              <a href="#capabilities" className="hover:text-white transition-colors w-fit">Tecnologías</a>
              <a href="#projects" className="hover:text-white transition-colors w-fit">Proyectos</a>
              <a href="#contact" className="hover:text-white transition-colors w-fit">Contacto</a>
            </div>
          </div>

          {/* Socials & Networks (Right Column) */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono tracking-wider text-silver/80 mb-4 uppercase">
              Redes Sociales
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group/soc flex items-center justify-between px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-silver hover:text-white hover:border-white/25 hover:bg-white/[0.07] hover:shadow-[0_0_12px_rgba(255,255,255,0.06)] transition-all duration-200 text-xs font-mono"
                  title={`${s.name} (${s.handle})`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-white/70 group-hover/soc:text-white transition-colors shrink-0">{s.icon}</span>
                    <span className="text-[11px] font-medium truncate">{s.name}</span>
                  </div>
                  <span className="text-[10px] text-white/40 group-hover/soc:text-white/80 group-hover/soc:translate-x-0.5 group-hover/soc:-translate-y-0.5 transition-transform shrink-0">↗</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-8 text-xs font-mono tracking-wider text-graphite px-2">
          <span>ORWYTH — SOFTWARE / OSINT / SYSTEMS</span>
          <span>© 2026</span>
        </div>

      </div>
    </footer>
  );
}
