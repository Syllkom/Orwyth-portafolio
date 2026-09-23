import React, { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

interface GlowItem {
  side: "top" | "bottom" | "left" | "right";
  offset: string;
  width?: string;
  flare?: boolean;
  intensity?: "high" | "medium" | "subtle";
}

interface Project {
  name: string;
  desc: string;
  tag: string;
  url: string;
  image: string;
  colSpan: string;
  glows: GlowItem[];
}

const projects: Project[] = [
  {
    name: "Aethero Framework",
    desc: "Framework para crear bots de WhatsApp modulares",
    tag: "WHATSAPP BOTS",
    url: "https://github.com/Syllkom/Aethero",
    image: "https://raw.githubusercontent.com/Syllkom/MyArchive/refs/heads/main/images/banners/banner-aethero-framework.png",
    colSpan: "col-span-1 md:col-span-7",
    glows: [
      { side: "top", offset: "36%", width: "130px", intensity: "medium" },
      { side: "left", offset: "30%", width: "90px", intensity: "subtle" }
    ]
  },
  {
    name: "Aethero App",
    desc: "Control y monitorización de actividad y plugins del repositorio",
    tag: "REPO & PLUGINS",
    url: "https://github.com/Syllkom/Aethero-App",
    image: "https://raw.githubusercontent.com/Syllkom/MyArchive/refs/heads/main/images/banners/banner-aethero-app.png",
    colSpan: "col-span-1 md:col-span-5",
    glows: [
      { side: "top", offset: "65%", width: "110px", intensity: "subtle" },
      { side: "right", offset: "40%", width: "80px", intensity: "subtle" }
    ]
  },
  {
    name: "HorekuOS",
    desc: "Framework modular para automatización",
    tag: "SYSTEM",
    url: "https://github.com/Syllkom/HorekuOs",
    image: "https://raw.githubusercontent.com/Syllkom/MyArchive/refs/heads/main/images/banners/banner-horekuos.png",
    colSpan: "col-span-1 md:col-span-5",
    glows: [
      { 
        side: "bottom", 
        offset: "28%", 
        width: "170px", 
        flare: true, 
        intensity: "high" 
      }
    ]
  },
  {
    name: "Astro Portfolio",
    desc: "Arquitectura web de alto rendimiento",
    tag: "WEB ARCH",
    url: "https://github.com/Syllkom/Astro-portafolio",
    image: "https://raw.githubusercontent.com/Syllkom/MyArchive/refs/heads/main/images/banners/banner-portafolio-astro.png",
    colSpan: "col-span-1 md:col-span-7",
    glows: [
      { side: "bottom", offset: "62%", width: "140px", intensity: "medium" },
      { side: "left", offset: "45%", width: "80px", intensity: "subtle" }
    ]
  }
];

interface CardEdgeGlowProps {
  glow: GlowItem;
  key?: string | number;
}

function CardEdgeGlow({ glow }: CardEdgeGlowProps) {
  const isHigh = glow.intensity === "high";
  const isMedium = glow.intensity === "medium";

  if (glow.side === "bottom") {
    return (
      <div 
        className="absolute -bottom-[1px] -translate-x-1/2 pointer-events-none z-20"
        style={{ left: glow.offset, width: glow.width || "130px" }}
      >
        {/* Línea de 1px perfectamente integrada en el borde original de la tarjeta, sin guiones ni cortes */}
        <div 
          className="w-full h-[1px]"
          style={{
            background: isHigh
              ? "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 15%, rgba(255,255,255,0.36) 50%, rgba(255,255,255,0.06) 85%, transparent 100%)"
              : "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 20%, rgba(255,255,255,0.24) 50%, rgba(255,255,255,0.04) 80%, transparent 100%)",
          }}
        />
        
        {/* Resplandor tenue ambiental sin cortes ni puntos duros */}
        <div 
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-3/4 h-3 pointer-events-none rounded-full opacity-40"
          style={{
            background: isHigh
              ? "radial-gradient(ellipse at center, rgba(255,255,255,0.12) 0%, transparent 70%)"
              : "radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 70%)",
            filter: "blur(2px)"
          }}
        />
      </div>
    );
  }

  if (glow.side === "top") {
    return (
      <div 
        className="absolute -top-[1px] -translate-x-1/2 pointer-events-none z-20"
        style={{ left: glow.offset, width: glow.width || "120px" }}
      >
        <div 
          className="w-full h-[1px]"
          style={{
            background: isHigh || isMedium
              ? "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 15%, rgba(255,255,255,0.28) 50%, rgba(255,255,255,0.05) 85%, transparent 100%)"
              : "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 20%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.03) 80%, transparent 100%)",
          }}
        />
        <div 
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-3 pointer-events-none rounded-full opacity-35"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)",
            filter: "blur(2px)"
          }}
        />
      </div>
    );
  }

  if (glow.side === "left") {
    return (
      <div 
        className="absolute -left-[1px] -translate-y-1/2 pointer-events-none z-20"
        style={{ top: glow.offset, height: glow.width || "70px" }}
      >
        <div 
          className="h-full w-[1px]"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.04) 20%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.04) 80%, transparent 100%)",
          }}
        />
        <div 
          className="absolute top-1/2 -right-1 -translate-y-1/2 h-3/4 w-3 pointer-events-none rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 70%)",
            filter: "blur(2px)"
          }}
        />
      </div>
    );
  }

  if (glow.side === "right") {
    return (
      <div 
        className="absolute -right-[1px] -translate-y-1/2 pointer-events-none z-20"
        style={{ top: glow.offset, height: glow.width || "70px" }}
      >
        <div 
          className="h-full w-[1px]"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.04) 20%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.04) 80%, transparent 100%)",
          }}
        />
        <div 
          className="absolute top-1/2 -left-1 -translate-y-1/2 h-3/4 w-3 pointer-events-none rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 70%)",
            filter: "blur(2px)"
          }}
        />
      </div>
    );
  }

  return null;
}

function ProjectImageScreen({ src, alt }: { src: string; alt: string; name?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="relative w-full h-[180px] rounded-[10px] border border-[#242424] overflow-hidden bg-[#111114] z-10"
      style={{
        boxShadow: "inset 0 0 25px rgba(255,255,255,.012)"
      }}
    >
      {/* Classic Clean Skeleton Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 bg-[#121215] overflow-hidden">
          {/* Subtle Skeleton Pulse & Shimmer */}
          <div className="w-full h-full animate-pulse bg-white/[0.03]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full animate-shimmer" />
        </div>
      )}

      {/* Actual Project Image with Smooth Fade-in */}
      <img 
        src={src} 
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-500 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Ambient shadow gradient at bottom of viewer */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto w-full">
        <SectionHeader 
          label="03 / PROYECTOS" 
          category="SELECCIÓN DE TRABAJO"
          title={<>Cosas que<br/><span className="text-dim">he construido.</span></>} 
          subtitle="Una selección de herramientas, interfaces y experimentos de software desarrollados con foco en arquitectura y rendimiento."
          tags={["SOFTWARE", "HERRAMIENTAS", "CÓDIGO ABIERTO"]}
        />

        <div className="px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {projects.map((proj, i) => (
              <motion.a
                key={proj.name}
                href={proj.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-[18px] border border-[#292929] h-[285px] p-[20px] md:p-[24px] flex flex-col justify-start transition-all duration-300 hover:border-[#3a3a3a] ${proj.colSpan}`}
                style={{
                  background: "radial-gradient(circle at 68% 42%, rgba(255,255,255,.035), transparent 25%), linear-gradient(145deg, #111111, #0a0a0a 70%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,.025), 0 20px 50px rgba(0,0,0,.35)"
                }}
              >
                {/* Cuadrícula sutil recortada al interior de la tarjeta */}
                <div 
                  className="absolute inset-0 rounded-[17px] opacity-[0.18] pointer-events-none overflow-hidden"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
                    backgroundSize: "34px 34px"
                  }}
                />

                {/* Iluminaciones en bordes (Edge glows y flares ópticos según la referencia) */}
                {proj.glows.map((glow, idx) => (
                  <CardEdgeGlow key={`${glow.side}-${idx}`} glow={glow} />
                ))}

                {/* .screen: Recuadro superior con animación HUD cybernetic placeholder */}
                <ProjectImageScreen 
                  src={proj.image} 
                  alt={`Banner de ${proj.name}`}
                  name={proj.name}
                />

                {/* .info: Contenedor flotante inferior según el diseño fiel original */}
                <div 
                  className="absolute left-[13px] right-[13px] bottom-[14px] min-h-[76px] px-[16px] py-[17px] flex items-center justify-between gap-[12px] border border-[#272727] rounded-[14px] z-20"
                  style={{
                    background: "linear-gradient(145deg, #111111, #0d0d0d)",
                    boxShadow: "0 14px 28px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.025)"
                  }}
                >
                  <div className="min-w-0">
                    <h2 className="m-0 mb-[6px] text-[16px] leading-none font-[650] tracking-[-0.025em] text-[#f2f2f2] group-hover:text-white transition-colors truncate">
                      {proj.name}
                    </h2>
                    <p className="m-0 text-[11px] leading-[1.35] text-[#777777] truncate">
                      {proj.desc}
                    </p>
                  </div>

                  <span className="shrink-0 px-[10px] py-[7px] border border-[#2a2a2a] rounded-full bg-[#191919] text-[#bcbcbc] text-[9px] font-mono tracking-[0.06em] whitespace-nowrap group-hover:border-[#383838] group-hover:text-white transition-colors">
                    {proj.tag} <span className="text-[#777777]">↗</span>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
