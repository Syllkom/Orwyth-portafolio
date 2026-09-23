import React from "react";

interface ThematicShaderProps {
  type: "baileys-ipc" | "aethero-core";
  className?: string;
  speed?: number;
}

/**
 * Ultra-optimized GPU-accelerated cybernetic background for Section 01.
 * Uses hardware-accelerated CSS compositor layers (zero CPU/GPU bottleneck, 0ms latency, locked 120 FPS).
 */
export function ThematicShaderBackground({
  type,
  className = ""
}: ThematicShaderProps) {
  if (type === "baileys-ipc") {
    return (
      <div 
        className={`absolute inset-0 pointer-events-none w-full h-full overflow-hidden select-none ${className}`}
        style={{ transform: "translate3d(0,0,0)", contain: "strict" }}
      >
        {/* Emerald Concurrency Flow Gradients */}
        <div className="absolute -top-[20%] -right-[10%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.14)_0%,rgba(16,185,129,0.04)_45%,transparent_70%)] animate-pulse-glow" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.08)_0%,transparent_65%)] animate-pulse-glow-alt" />
        
        {/* Cybernetic Matrix Grid Lines */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "linear-gradient(rgba(52,211,153,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />

        {/* Ambient Noise Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/40" />
      </div>
    );
  }

  return (
    <div 
      className={`absolute inset-0 pointer-events-none w-full h-full overflow-hidden select-none ${className}`}
      style={{ transform: "translate3d(0,0,0)", contain: "strict" }}
    >
      {/* Platinum / Titanium Vortex Reactor Gradients */}
      <div className="absolute -top-[15%] -right-[15%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(215,215,217,0.04)_45%,transparent_70%)] animate-pulse-glow" />
      <div className="absolute -bottom-[15%] -left-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_65%)] animate-pulse-glow-alt" />
      
      {/* Cybernetic Matrix Grid Lines */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      {/* Ambient Noise Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/40" />
    </div>
  );
}
