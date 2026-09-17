import { motion } from "motion/react";

export function OrbitalSphere() {
  return null;
}

export function NodeGraph() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-2">
      <svg viewBox="0 0 200 200" className="w-full h-full stroke-white/25 fill-none overflow-visible">
        {/* Subtle Outer Frame Chassis & Perimeter Beam */}
        <rect x="12" y="12" width="176" height="176" rx="16" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
        <rect
          x="12"
          y="12"
          width="176"
          height="176"
          rx="16"
          stroke="rgba(255, 255, 255, 0.75)"
          strokeWidth="1.25"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="14 86"
          className="animate-trace-beam-slow"
        />

        {/* Static Base Graph Lines */}
        <path d="M50 50 L150 80 L120 150 Z" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M20 100 L50 50 L100 20" strokeWidth="1" />
        <path d="M150 80 L180 120 L120 150" strokeWidth="1" />
        
        {/* Traveling Light Beams Along Graph Vectors */}
        <path 
          d="M50 50 L150 80 L120 150 Z" 
          stroke="rgba(255, 255, 255, 0.85)" 
          strokeWidth="1.25" 
          strokeLinecap="round" 
          pathLength="100" 
          strokeDasharray="18 82" 
          className="animate-trace-beam" 
        />
        <path 
          d="M20 100 L50 50 L100 20" 
          stroke="rgba(255, 255, 255, 0.7)" 
          strokeWidth="1.2" 
          strokeLinecap="round" 
          pathLength="100" 
          strokeDasharray="25 75" 
          className="animate-trace-beam-inner" 
        />

        {/* Nodes */}
        <circle cx="50" cy="50" r="4" className="fill-silver" />
        <circle cx="150" cy="80" r="3.5" className="fill-white" />
        <circle cx="120" cy="150" r="4.5" className="fill-white/80" />
        <circle cx="20" cy="100" r="2.5" className="fill-white/60" />
        <circle cx="100" cy="20" r="3.5" className="fill-silver" />
        <circle cx="180" cy="120" r="3" className="fill-white/40" />
        
        {/* Radiant Silver Pulse */}
        <circle cx="150" cy="80" r="8" className="stroke-white/60 animate-pulse" strokeWidth="1" />
        <circle cx="150" cy="80" r="14" className="stroke-white/20 animate-ping" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

export function OsintGraph() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Scanner Window with Perimeter Light Beam */}
      <div className="relative w-[88%] h-[88%] border border-white/10 rounded-xl p-3 flex flex-col justify-between font-mono text-[10px] text-white/40 bg-black/20 backdrop-blur-sm shadow-none">
        {/* Subtle traveling light beam on outer perimeter */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible" 
          aria-hidden="true"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx="12"
            fill="none"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="1.25"
            strokeLinecap="round"
            pathLength="100"
            strokeDasharray="14 86"
            className="animate-trace-beam"
          />
        </svg>

        {/* Header with scan line */}
        <div className="relative flex justify-between items-center pb-1">
          <span className="text-white/80 font-medium">INTEL // SCANNER</span>
          <span className="px-1.5 py-0.5 rounded bg-white/5 text-white/80 text-[9px] border border-white/10">ACTIVE</span>

          {/* Tracer along bottom border of header */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-white/10 overflow-hidden">
            <div className="w-20 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent animate-scan-divider" />
          </div>
        </div>

        {/* Radar Reticle with Orbital Tracer */}
        <div className="relative h-20 w-full overflow-hidden flex items-center justify-center">
          <div className="w-full h-px bg-white/10" />
          <div className="absolute h-full w-px bg-white/10" />
          
          {/* Central reticle circle with beam */}
          <div className="relative w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="23"
                fill="none"
                stroke="rgba(255, 255, 255, 0.85)"
                strokeWidth="1.25"
                strokeLinecap="round"
                pathLength="100"
                strokeDasharray="22 78"
                className="animate-trace-beam-inner"
              />
            </svg>
          </div>

          <div className="absolute w-20 h-20 rounded-full border border-white/10 border-dashed animate-slow-spin" />
          <div className="absolute w-2.5 h-2.5 rounded-full bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          <div className="absolute w-5 h-5 rounded-full border border-white/20 animate-ping" />
        </div>

        {/* Bottom Metrics with scan line */}
        <div className="relative flex justify-between text-[9px] text-silver/60 pt-1">
          {/* Tracer along top border of footer metrics */}
          <div className="absolute top-0 left-0 w-full h-px bg-white/10 overflow-hidden">
            <div 
              className="w-20 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent animate-scan-divider" 
              style={{ animationDelay: '2s' }}
            />
          </div>
          <span>NODES: 1,420</span>
          <span className="text-white/80 font-medium">QUERY: REALTIME</span>
        </div>
      </div>
    </div>
  );
}

export function MobileFrames() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Device Frame (Translucent with soft trace) */}
      <div className="relative w-[120px] h-[200px] -mr-8 -mt-3 border border-white/10 rounded-[18px] bg-black/20 backdrop-blur-sm p-2 shadow-none opacity-40">
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" 
          aria-hidden="true"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx="18"
            fill="none"
            stroke="rgba(255, 255, 255, 0.45)"
            strokeWidth="1"
            strokeLinecap="round"
            pathLength="100"
            strokeDasharray="16 84"
            className="animate-trace-beam-slow"
          />
        </svg>
        <div className="w-8 h-1 rounded-full bg-white/15 mx-auto mb-2" />
        <div className="w-full h-16 rounded-md bg-white/[0.03] mb-2 border border-white/5" />
        <div className="w-full h-8 rounded-md bg-white/[0.02]" />
      </div>

      {/* Foreground Device Frame (Translucent Satin with Perimeter Beam) */}
      <div className="relative w-[124px] h-[212px] border border-white/10 rounded-[18px] bg-black/30 backdrop-blur-sm p-2.5 shadow-none z-10 overflow-hidden">
        {/* Perimeter Light Beam */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible" 
          aria-hidden="true"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx="18"
            fill="none"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="1.25"
            strokeLinecap="round"
            pathLength="100"
            strokeDasharray="14 86"
            className="animate-trace-beam"
          />
        </svg>

        <div className="w-10 h-1.5 rounded-full bg-white/20 mx-auto mb-3" />
        
        {/* Inner Screen Card with Micro-tracer */}
        <div className="relative w-full h-20 rounded-md border border-white/10 bg-white/[0.03] p-2 flex flex-col justify-between mb-2">
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" 
            aria-hidden="true"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              rx="6"
              fill="none"
              stroke="rgba(255, 255, 255, 0.7)"
              strokeWidth="1"
              strokeLinecap="round"
              pathLength="100"
              strokeDasharray="20 80"
              className="animate-trace-beam-inner"
            />
          </svg>
          <div className="w-10 h-1.5 rounded bg-white/50 relative z-10" />
          <div className="w-18 h-1.5 rounded bg-white/20 relative z-10" />
        </div>

        <div className="w-full h-10 rounded-md border border-white/10 bg-white/[0.03] p-1.5 flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 rounded-full bg-white/40 shadow-[0_0_4px_rgba(255,255,255,0.3)]" />
          <div className="flex-1 h-1.5 rounded bg-white/15" />
        </div>
      </div>
    </div>
  );
}

export function InterfaceGrid() {
  return (
    <div className="relative w-full h-full p-4 md:p-6 flex flex-col justify-center">
      {/* Blueprint Grid & Architecture Preview (Translucent Glassmorphic with Subtle Perimeter Light Path) */}
      <div className="relative w-full rounded-xl border border-white/10 bg-black/25 backdrop-blur-sm p-4 shadow-none flex flex-col gap-3">
        {/* Subtle traveling light beam on outer perimeter */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible" 
          aria-hidden="true"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx="12"
            fill="none"
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="1.25"
            strokeLinecap="round"
            pathLength="100"
            strokeDasharray="14 86"
            className="animate-trace-beam"
          />
        </svg>

        {/* Top UI System Bar */}
        <div className="relative flex items-center justify-between pb-2 text-[10px] md:text-xs font-mono tracking-wider text-silver/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white/80 shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
            <span className="w-2 h-2 rounded-full bg-white/30" />
            <span className="w-2 h-2 rounded-full bg-white/15" />
            <span className="ml-2 text-white/80 font-medium">DESIGN SYSTEM / V3.2</span>
          </div>
          <span className="text-white/80 font-medium">GRID 12-COL</span>

          {/* Tracer along bottom border of header */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-white/10 overflow-hidden">
            <div className="w-24 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent animate-scan-divider" />
          </div>
        </div>

        {/* Modular Layout Columns */}
        <div className="grid grid-cols-12 gap-2.5 h-28">
          {/* Sidebar Area */}
          <div className="col-span-3 rounded-lg border border-white/10 bg-white/[0.03] p-2 flex flex-col gap-2">
            <div className="w-full h-2.5 rounded bg-white/30" />
            <div className="w-3/4 h-2 rounded bg-white/15" />
            <div className="w-1/2 h-2 rounded bg-white/15" />
            <div className="mt-auto w-full h-5 rounded border border-white/10 bg-white/[0.04]" />
          </div>

          {/* Main Content Area with Component Layers (with inner subtle perimeter tracer) */}
          <div className="relative col-span-6 rounded-lg border border-white/10 bg-white/[0.02] p-3 flex flex-col gap-2.5">
            {/* Inner micro-tracer on active workspace */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" 
              aria-hidden="true"
            >
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                rx="8"
                fill="none"
                stroke="rgba(255, 255, 255, 0.7)"
                strokeWidth="1"
                strokeLinecap="round"
                pathLength="100"
                strokeDasharray="18 82"
                className="animate-trace-beam-inner"
              />
            </svg>

            <div className="flex gap-2 items-center relative z-10">
              <div className="w-5 h-5 rounded-md border border-white/20 bg-white/10 flex items-center justify-center text-[10px] text-white/90 font-mono font-semibold">01</div>
              <div className="flex-1 h-2.5 rounded bg-white/30" />
            </div>
            <div className="grid grid-cols-3 gap-2 flex-1 relative z-10">
              <div className="rounded border border-white/10 bg-white/[0.04] p-1.5 flex flex-col justify-end">
                <div className="w-full h-1.5 rounded bg-white/30" />
              </div>
              <div className="rounded border border-white/10 bg-white/[0.04] p-1.5 flex flex-col justify-end">
                <div className="w-full h-1.5 rounded bg-white/30" />
              </div>
              <div className="rounded border border-white/15 bg-white/[0.08] p-1.5 flex flex-col justify-end">
                <div className="w-full h-1.5 rounded bg-white shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
              </div>
            </div>
          </div>

          {/* Inspector Panel */}
          <div className="col-span-3 rounded-lg border border-white/10 bg-white/[0.02] p-2.5 flex flex-col gap-2">
            <div className="flex justify-between items-center text-[10px] font-mono text-silver/80">
              <span>TOKEN</span>
              <span className="text-white/90 font-medium">4px</span>
            </div>
            <div className="w-full h-1.5 rounded bg-white/25" />
            <div className="w-full h-1.5 rounded bg-white/15" />
            <div className="w-full h-1.5 rounded bg-white/15" />
            <div className="mt-auto flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/25" />
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="relative flex items-center justify-between text-[10px] md:text-xs font-mono text-silver/80 pt-2">
          {/* Divider with subtle beam tracer */}
          <div className="absolute top-0 left-0 w-full h-px bg-white/10 overflow-hidden">
            <div 
              className="w-24 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent animate-scan-divider" 
              style={{ animationDelay: '2.4s' }}
            />
          </div>
          <span>PX ACCURACY : 100%</span>
          <span>FLUID VIEWPORT</span>
          <span className="text-white/90 font-medium">DARK SATIN</span>
        </div>
      </div>
    </div>
  );
}

export function AbstractGeometry() {
  return (
    <div className="relative w-full h-full flex items-center justify-center animate-float">
       <svg viewBox="0 0 200 200" className="w-[80%] h-[80%] overflow-visible">
         <defs>
           <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
             <stop offset="100%" stopColor="#777" stopOpacity="0" />
           </linearGradient>
         </defs>
         <rect x="50" y="50" width="100" height="100" fill="url(#silver-grad)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" transform="rotate(45 100 100)" />
         {/* Perimeter light beam along diamond contour */}
         <rect 
           x="50" 
           y="50" 
           width="100" 
           height="100" 
           fill="none" 
           stroke="rgba(255,255,255,0.85)" 
           strokeWidth="1.25" 
           strokeLinecap="round" 
           transform="rotate(45 100 100)" 
           pathLength="100" 
           strokeDasharray="16 84" 
           className="animate-trace-beam" 
         />

         <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="4 4" />
         {/* Orbital light beam along inner circle */}
         <circle 
           cx="100" 
           cy="100" 
           r="40" 
           fill="none" 
           stroke="rgba(255,255,255,0.75)" 
           strokeWidth="1.2" 
           strokeLinecap="round" 
           pathLength="100" 
           strokeDasharray="20 80" 
           className="animate-trace-beam-inner" 
         />

         <path d="M100 20 L100 180 M20 100 L180 100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
       </svg>
    </div>
  );
}

// Sub-nodes for Aethero Architecture (Static, clean, high-contrast)
function SchedulerNode({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-xl border border-white/10 bg-[#0e0e11]/95 px-3 py-2 shadow-xl flex items-center justify-between gap-2.5 font-mono text-[10px] ${className}`}>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <div className="text-left">
          <div className="text-white font-medium text-[10px]">SCHEDULER // EVENT LOOP</div>
          <div className="text-graphite text-[9px]">Lock-Free Arena • 60 FPS Sync</div>
        </div>
      </div>
      <span className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] text-silver border border-white/10 shrink-0">0.18ms</span>
    </div>
  );
}

function CoreNode({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/20 bg-[#121216]/95 p-3 sm:p-3.5 shadow-2xl font-mono text-center backdrop-blur-md ${className}`}>
      <div className="w-6 h-6 rounded-lg border border-white/20 bg-white/5 mx-auto mb-1.5 flex items-center justify-center">
        <span className="w-2 h-2 rounded-full bg-white" />
      </div>
      <div className="text-white font-medium text-[11px] sm:text-xs tracking-wider">AETHERO CORE</div>
      <div className="text-[9px] text-silver/70 mt-0.5">ENGINE v2.4</div>
      <div className="mt-2 pt-1.5 border-t border-white/10 flex justify-between text-[8px] sm:text-[9px] text-graphite">
        <span>THREADS: 12</span>
        <span className="text-emerald-400 font-medium">99.9%</span>
      </div>
    </div>
  );
}

function EventBusNode({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-xl border border-white/10 bg-[#0e0e11]/95 p-2.5 sm:p-3 shadow-xl font-mono text-[10px] ${className}`}>
      <div className="flex justify-between items-center text-white/50 mb-1">
        <span className="text-silver font-semibold text-[9px]">EVENT BUS</span>
        <span className="text-emerald-400 text-[8px]">ONLINE</span>
      </div>
      <div className="text-white/80 font-medium text-[10px] mb-1 truncate">Zero-Copy Dispatch</div>
      <div className="w-full h-1 bg-white/10 rounded overflow-hidden mb-1">
        <div className="w-4/5 h-full bg-silver/70 rounded" />
      </div>
      <div className="flex justify-between text-[8px] text-graphite">
        <span>LATENCY</span>
        <span className="text-white">&lt; 0.25ms</span>
      </div>
    </div>
  );
}

function SandboxNode({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-xl border border-white/10 bg-[#0e0e11]/95 p-2.5 sm:p-3 shadow-xl font-mono text-[10px] ${className}`}>
      <div className="flex justify-between items-center text-white/50 mb-1">
        <span className="text-silver font-semibold text-[9px]">SANDBOX ARENA</span>
        <span className="text-white/40 text-[8px]">POSIX</span>
      </div>
      <div className="text-white/80 font-medium text-[10px] mb-1 truncate">Process Isolation</div>
      <div className="w-full h-1 bg-white/10 rounded overflow-hidden mb-1">
        <div className="w-3/4 h-full bg-silver/70 rounded" />
      </div>
      <div className="flex justify-between text-[8px] text-graphite">
        <span>BUFFER</span>
        <span className="text-white">ISOLATED</span>
      </div>
    </div>
  );
}

function IpcNode({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-xl border border-white/10 bg-[#0e0e11]/95 px-3 py-2 shadow-xl flex items-center justify-between gap-2.5 font-mono text-[10px] ${className}`}>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-white/70" />
        <div className="text-left">
          <div className="text-white font-medium text-[10px]">IPC BRIDGE &rarr; AETHERO-APP</div>
          <div className="text-graphite text-[9px]">Companion socket &amp; telemetry</div>
        </div>
      </div>
      <span className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] text-emerald-400 border border-white/10 shrink-0">SYNC</span>
    </div>
  );
}

export function AetheroArchitectureVisual() {
  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[380px] flex items-center justify-center p-1 sm:p-4 select-none overflow-hidden">
      {/* Background architectural blueprint grid & static concentric telemetry rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="w-[280px] sm:w-[380px] md:w-[480px] h-[280px] sm:h-[380px] md:h-[480px] rounded-full border border-white/[0.04] pointer-events-none" />
        <div className="w-[180px] sm:w-[260px] md:w-[320px] h-[180px] sm:h-[260px] md:h-[320px] rounded-full border border-white/[0.07] border-dashed pointer-events-none" />
      </div>

      {/* MOBILE / TABLET FLOW (< md): Perfectly centered vertical architectural hierarchy */}
      <div className="relative w-full max-w-[320px] sm:max-w-[360px] mx-auto flex flex-col items-center gap-2 py-2 md:hidden z-10">
        {/* Top: Scheduler */}
        <SchedulerNode className="w-full" />

        {/* Vertical connector line */}
        <div className="w-px h-3 bg-white/20" />

        {/* Center: Aethero Core */}
        <CoreNode className="w-full max-w-[190px]" />

        {/* Vertical connector line */}
        <div className="w-px h-3 bg-white/20" />

        {/* Flanking Satellite Nodes in 2 balanced columns */}
        <div className="grid grid-cols-2 gap-2 w-full">
          <EventBusNode />
          <SandboxNode />
        </div>

        {/* Vertical connector line */}
        <div className="w-px h-3 bg-white/20" />

        {/* Bottom: IPC Bridge */}
        <IpcNode className="w-full" />
      </div>

      {/* DESKTOP SPATIAL CANVAS (>= md): Static, pristine architectural vector network */}
      <div className="relative w-full max-w-[760px] h-[360px] hidden md:block select-none z-10">
        {/* Main Vector Schematic Traces (Clean, static, crisp - no moving beam animations) */}
        <svg 
          viewBox="0 0 800 360" 
          className="absolute inset-0 w-full h-full select-none pointer-events-none z-0"
        >
          {/* Central pipelines connecting to Core (center at 400, 180) */}
          <path d="M 220 180 L 320 180" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 480 180 L 580 180" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 400 70 L 400 130" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 400 230 L 400 290" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Diagonal telemetry bus lines */}
          <path d="M 210 135 L 340 165" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <path d="M 590 135 L 460 165" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <path d="M 210 225 L 340 195" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <path d="M 590 225 L 460 195" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

          {/* Static telemetry nodes */}
          <circle cx="270" cy="180" r="3" fill="#ffffff" fillOpacity="0.8" />
          <circle cx="530" cy="180" r="3" fill="#d7d7d9" fillOpacity="0.8" />
          <circle cx="400" cy="100" r="3" fill="#34d399" fillOpacity="0.8" />
          <circle cx="400" cy="260" r="3" fill="#ffffff" fillOpacity="0.8" />
        </svg>

        {/* Top Node: Task Scheduler & Event Loop */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-fit">
          <SchedulerNode />
        </div>

        {/* Left Node: Zero-Copy EventBus */}
        <div className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 w-[160px] lg:w-[185px]">
          <EventBusNode />
        </div>

        {/* Center Monumental Node: Aethero Core Engine */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] lg:w-[185px] z-10">
          <CoreNode />
        </div>

        {/* Right Node: Sandbox Process Arena */}
        <div className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 w-[160px] lg:w-[185px]">
          <SandboxNode />
        </div>

        {/* Bottom Node: Client Companion Bridge (Aethero-App) */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-fit">
          <IpcNode />
        </div>
      </div>
    </div>
  );
}
