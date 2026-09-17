import React, { useEffect, useRef, useState } from "react";
import { liquidMetalFragmentShader, ShaderMount } from "@paper-design/shaders";
import { motion } from "motion/react";

const navItems = [
  { id: "about", label: "SOBRE MÍ", href: "#about" },
  { id: "capabilities", label: "TECNOLOGÍAS", href: "#capabilities" },
  { id: "projects", label: "PROYECTOS", href: "#projects" },
  { id: "contact", label: "CONTACTO", href: "#contact" },
];

export function LiquidNavPill() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shaderWrapperRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState<string>("capabilities");

  useEffect(() => {
    const container = shaderWrapperRef.current;
    const pill = containerRef.current;
    if (!container || !pill) return;

    let shader: ShaderMount | null = null;
    try {
      shader = new ShaderMount(
        container,
        liquidMetalFragmentShader,
        {
          u_repetition: 4,
          u_softness: 0.5,
          u_shiftRed: 0.3,
          u_shiftBlue: 0.3,
          u_distortion: 0,
          u_contour: 0,
          u_angle: 45,
          u_scale: 14,
          u_shape: 1,
          u_originX: 0.5,
          u_originY: 0.5,
          u_offsetX: 0,
          u_offsetY: 0
        },
        undefined,
        0.6
      );

      // Prevent shader from pausing on scroll inside iframes or mobile
      const internalShader = shader as unknown as {
        intersectionObserver?: IntersectionObserver | null;
        isInViewport?: boolean;
        updateCurrentSpeed?: () => void;
        setCurrentSpeed?: (speed: number) => void;
        speed?: number;
      };
      if (internalShader.intersectionObserver) {
        internalShader.intersectionObserver.disconnect();
      }
      internalShader.isInViewport = true;
      internalShader.updateCurrentSpeed = function() {
        if (internalShader.setCurrentSpeed && internalShader.speed !== undefined) {
          internalShader.setCurrentSpeed(document.hidden ? 0 : internalShader.speed);
        }
      };
      shader.setSpeed(0.6);
    } catch (err) {
      console.error("Error initializing LiquidNavPill ShaderMount:", err);
    }

    const handleMouseEnter = () => {
      shader?.setSpeed?.(1);
    };

    const handleMouseLeave = () => {
      shader?.setSpeed?.(0.6);
    };

    const handleVisibilityChange = () => {
      if (!document.hidden && shader) {
        shader.setSpeed(0.6);
      }
    };

    pill.addEventListener("mouseenter", handleMouseEnter);
    pill.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      pill.removeEventListener("mouseenter", handleMouseEnter);
      pill.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      try {
        shader?.dispose?.();
      } catch (e) {
        // Safe cleanup
      }
    };
  }, []);

  // Dynamic active section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Bottom of page -> Contact
      if (scrollY + windowHeight >= docHeight - 80) {
        setActiveSection("contact");
        return;
      }

      // Check section bounding rects
      const sectionIds = ["capabilities", "projects", "about", "contact"];
      let currentId = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.45 && rect.bottom >= windowHeight * 0.15) {
            currentId = id;
            break;
          }
        }
      }

      if (currentId) {
        setActiveSection(currentId);
      } else if (scrollY < 300) {
        setActiveSection("capabilities");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, href: string) => {
    e.preventDefault();
    setActiveSection(id);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="liquid-pill-container"
    >
      <div ref={shaderWrapperRef} className="shader-wrapper" />
      <div className="inner" />
      <nav className="relative z-10 flex items-center gap-1.5 sm:gap-2.5 md:gap-3 px-3 sm:px-4 md:px-6 h-[46px] text-[10px] sm:text-xs font-mono tracking-wider font-medium">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id, item.href)}
              className={`relative px-1.5 sm:px-2.5 py-1 transition-colors duration-200 whitespace-nowrap select-none ${
                isActive ? "text-white font-semibold" : "text-neutral-400 hover:text-white"
              }`}
            >
              {/* Animated active pill background */}
              {isActive && (
                <motion.span
                  layoutId="navPillActiveHighlight"
                  className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.12] -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 32
                  }}
                />
              )}

              {item.label}

              {/* Animated active bottom light beam */}
              {isActive && (
                <motion.span
                  layoutId="navPillActiveBeam"
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-[1.5px] bg-gradient-to-r from-transparent via-silver via-white to-transparent shadow-[0_0_8px_rgba(255,255,255,0.9),0_0_16px_rgba(255,255,255,0.5)]"
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 32
                  }}
                />
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

