import React, { useEffect, useRef } from "react";
import { liquidMetalFragmentShader, ShaderMount } from "@paper-design/shaders";

interface LiquidMetalButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export function LiquidMetalButton({
  label = "Contactar",
  onClick,
  className = ""
}: LiquidMetalButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const shaderContainerRef = useRef<HTMLDivElement | null>(null);
  const onClickRef = useRef(onClick);
  onClickRef.current = onClick;

  useEffect(() => {
    const container = shaderContainerRef.current;
    const button = buttonRef.current;
    if (!container || !button) return;

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
          u_scale: 8,
          u_shape: 1,
          u_originX: 0.5,
          u_originY: 0.5,
          u_offsetX: 0,
          u_offsetY: 0
        },
        undefined,
        0.6
      );

      // Prevent the shader from pausing when scrolling inside iframe or on mobile
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
      console.error("Error initializing ShaderMount:", err);
    }

    const handleMouseEnter = () => {
      shader?.setSpeed?.(1);
    };

    const handleMouseLeave = () => {
      shader?.setSpeed?.(0.6);
      button.classList.remove("pressed");
    };

    const handleMouseDown = () => {
      button.classList.add("pressed");
      shader?.setSpeed?.(2.4);
    };

    const handleMouseUp = () => {
      button.classList.remove("pressed");
      shader?.setSpeed?.(1);
    };

    const handleTouchStart = () => {
      button.classList.add("pressed");
      shader?.setSpeed?.(2.4);
    };

    const handleTouchEnd = () => {
      button.classList.remove("pressed");
      shader?.setSpeed?.(0.6);
    };

    const handleClick = (event: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;

      button.appendChild(ripple);

      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });

      if (onClickRef.current) {
        onClickRef.current();
      } else {
        window.location.href = "mailto:syllkom.proto@gmail.com";
      }
    };

    const handleVisibilityChange = () => {
      if (!document.hidden && shader) {
        shader.setSpeed(0.6);
      }
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("mousedown", handleMouseDown);
    button.addEventListener("mouseup", handleMouseUp);
    button.addEventListener("touchstart", handleTouchStart, { passive: true });
    button.addEventListener("touchend", handleTouchEnd, { passive: true });
    button.addEventListener("touchcancel", handleTouchEnd, { passive: true });
    button.addEventListener("click", handleClick);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("mousedown", handleMouseDown);
      button.removeEventListener("mouseup", handleMouseUp);
      button.removeEventListener("touchstart", handleTouchStart);
      button.removeEventListener("touchend", handleTouchEnd);
      button.removeEventListener("touchcancel", handleTouchEnd);
      button.removeEventListener("click", handleClick);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      try {
        shader?.dispose?.();
      } catch (e) {
        // Safe disposal
      }
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`liquid-button ${className}`}
      data-liquid-metal
      aria-label={label}
    >
      <div ref={shaderContainerRef} className="shader-wrapper" />
      <div className="inner" />
      <span className="label font-mono font-medium text-xs tracking-wider">{label}</span>
    </button>
  );
}
