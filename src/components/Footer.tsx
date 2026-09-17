export function Footer() {
  return (
    <footer className="pt-20 pb-12 overflow-hidden relative bg-transparent">
      {/* Feathered top divider that smoothly dissolves on edges */}
      <div className="max-w-[1400px] mx-auto w-full px-6 mb-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-6">
        
        {/* Monumental Logo - Reverted to authentic dark solid silhouette */}
        <div className="relative mb-[-2vw] pointer-events-none">
          <h1 className="text-[clamp(100px,22vw,320px)] leading-[0.7] tracking-[-0.08em] font-bold text-[#0c0c0e] select-none text-center">
            Orwyth
          </h1>
          {/* Subtle overlay gradient over the massive text that dissolves seamlessly into page foundation */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/60 to-[#030303]" />
        </div>

        {/* Footer Panel - Clean, elegant dark obsidian metal (without luminous sheen) */}
        <div className="mat-metal rounded-[28px] md:rounded-[36px] p-8 md:p-12 relative z-10 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          {/* Brand column with Official SVG Logo */}
          <div className="relative z-10">
            <a href="#" className="inline-block mb-4">
              <img 
                src="https://raw.githubusercontent.com/Syllkom/Syllkom/refs/heads/main/orwyth-logo.svg" 
                alt="Orwyth" 
                className="w-32 sm:w-36 opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-sm text-graphite max-w-sm leading-relaxed">
              Software Developer / OSINT / Systems.<br/>Construyendo en la intersección del diseño y la ingeniería de sistemas.
            </p>
          </div>
          
          {/* Mobile: 2 balanced columns side-by-side (==== ====). Desktop: expands into columns 2 and 3 */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:contents relative z-10">
            <div>
              <div className="text-xs font-mono tracking-wider text-silver/80 mb-5">NAVEGACIÓN</div>
              <div className="flex flex-col gap-3 text-sm text-graphite">
                <a href="#about" className="hover:text-white transition-colors w-fit">Sobre mí</a>
                <a href="#capabilities" className="hover:text-white transition-colors w-fit">Tecnologías</a>
                <a href="#projects" className="hover:text-white transition-colors w-fit">Proyectos</a>
                <a href="#contact" className="hover:text-white transition-colors w-fit">Contacto</a>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono tracking-wider text-silver/80 mb-5">RECURSOS</div>
              <div className="flex flex-col gap-3 text-sm text-graphite">
                <a href="https://github.com/Syllkom" target="_blank" rel="noreferrer" className="hover:text-white transition-colors w-fit">GitHub ↗</a>
                <a href="mailto:orwyth@mail.ru" className="hover:text-white transition-colors w-fit">Email ↗</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 text-xs font-mono tracking-wider text-graphite px-2">
          <span>ORWYTH — SOFTWARE / OSINT / SYSTEMS</span>
          <span>© 2026</span>
        </div>

      </div>
    </footer>
  );
}
