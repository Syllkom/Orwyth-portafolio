export function Background() {
  return (
    <div 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
      style={{
        contain: "paint",
        transform: "translate3d(0, 0, 0)",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden"
      }}
    >
      {/* Base deep atmospheric obsidian foundation */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* =========================================================================
          ATMOSPHERIC VOLUMETRIC LIGHTING & AMBIENT HALOS
         ========================================================================= */}
      {/* Volumetric Top Light Glow (Luz cenital difusa natural sin cortes geométricos) */}
      <div 
        className="absolute -top-28 left-1/2 -translate-x-1/2 w-[1100px] md:w-[1650px] h-[800px] md:h-[1050px] pointer-events-none animate-pulse-glow"
        style={{
          background: "radial-gradient(ellipse 75% 60% at 50% 0%, rgba(255, 255, 255, 0.16) 0%, rgba(225, 225, 235, 0.08) 30%, rgba(165, 170, 185, 0.03) 60%, rgba(140, 145, 160, 0.006) 80%, transparent 100%)",
          filter: "blur(64px)",
          transform: "translate3d(0, 0, 0)"
        }}
      />

      {/* Hero Ambient Volumetric Core */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] md:w-[1600px] h-[800px] md:h-[1000px] animate-pulse-glow"
        style={{
          background: `radial-gradient(ellipse 65% 50% at 50% 25%, rgba(255, 255, 255, 0.15) 0%, rgba(215, 215, 217, 0.08) 35%, rgba(160, 165, 175, 0.025) 65%, transparent 80%)`,
          transform: "translate3d(0, 0, 0)"
        }}
      />

      {/* Aethero / System Halo */}
      <div 
        className="absolute top-[18%] md:top-[20%] right-[-5%] md:right-[5%] w-[900px] md:w-[1300px] h-[750px] animate-pulse-glow-alt"
        style={{
          background: `radial-gradient(ellipse 55% 45% at 50% 50%, rgba(255, 255, 255, 0.12) 0%, rgba(200, 205, 215, 0.06) 45%, transparent 75%)`,
          transform: "translate3d(0, 0, 0)"
        }}
      />

      {/* Capabilities Ambient Core */}
      <div 
        className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[1000px] md:w-[1400px] h-[800px] animate-pulse-glow"
        style={{
          background: `radial-gradient(ellipse 65% 50% at 50% 50%, rgba(255, 255, 255, 0.11) 0%, rgba(190, 195, 205, 0.05) 48%, transparent 78%)`,
          transform: "translate3d(0, 0, 0)"
        }}
      />

      {/* Projects Soft Glow */}
      <div 
        className="absolute top-[65%] left-[20%] w-[900px] md:w-[1300px] h-[750px] animate-pulse-glow-alt"
        style={{
          background: `radial-gradient(ellipse 60% 45% at 50% 50%, rgba(255, 255, 255, 0.11) 0%, rgba(180, 185, 195, 0.045) 45%, transparent 75%)`,
          transform: "translate3d(0, 0, 0)"
        }}
      />

      {/* About & Contact Aura */}
      <div 
        className="absolute top-[85%] left-1/2 -translate-x-1/2 w-[950px] md:w-[1350px] h-[800px] animate-pulse-glow"
        style={{
          background: `radial-gradient(ellipse 60% 45% at 50% 50%, rgba(255, 255, 255, 0.11) 0%, rgba(180, 185, 195, 0.05) 45%, transparent 75%)`,
          transform: "translate3d(0, 0, 0)"
        }}
      />

      {/* =========================================================================
          CONTINUOUS SEAMLESS GRID (Subtle, crisp architectural lines)
         ========================================================================= */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.45) 25%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0.25) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.45) 25%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      {/* Subtle vertical architectural boundary guides */}
      <div className="absolute inset-0 max-w-[1400px] mx-auto pointer-events-none">
        <div className="absolute top-0 bottom-0 left-0 w-px bg-white/[0.03]" />
        <div className="absolute top-0 bottom-0 right-0 w-px bg-white/[0.03]" />
      </div>
    </div>
  );
}
