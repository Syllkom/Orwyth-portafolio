/**
 * Utility to safely detect WebGL capabilities before initializing canvas shaders.
 * Prevents runtime errors in environments where WebGL/hardware acceleration is disabled.
 */
export function isWebGLAvailable(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl = 
      canvas.getContext("webgl2") || 
      canvas.getContext("webgl") || 
      canvas.getContext("experimental-webgl");
    return Boolean(gl);
  } catch {
    return false;
  }
}
