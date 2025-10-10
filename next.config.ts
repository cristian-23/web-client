import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // genera la carpeta 'out' al hacer build
  images: {
    unoptimized: true, // evita errores con el optimizador de imágenes
  },
  basePath: "", 
  assetPrefix: "",
};

export default nextConfig;
