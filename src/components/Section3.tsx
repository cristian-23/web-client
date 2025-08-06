"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Container from "./Container";

const Section3 = () => {
  useEffect(() => {
    // Cargar el script de Instagram cuando se monta el componente
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Limpieza opcional (si desmontaras este componente en algún punto)
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.section
      id="contacto"
      className="w-full py-10 sm:py-12 md:py-16 lg:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}>
      <Container className="text-center">
        <h2 className="text-[var(--cWhite)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-[100%] mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto">
          No solo encuentro tu hogar; Te guío hacía el estilo de vida que
          mereces, simplificando lo complejo garantizandote un orden mental
          inigualable.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            "https://www.instagram.com/reel/DLiFZPCxWlb/",
            "https://www.instagram.com/reel/DLQ-WfARkSV/",
            "https://www.instagram.com/reel/DLdPVv5x2ML/",
          ].map((url, idx) => (
            <div key={idx} className="aspect-[9/16] w-full max-w-xs mx-auto">
              <div className="relative h-0 pb-[177.78%] w-full overflow-hidden rounded-lg">
                <blockquote
                  className="instagram-media absolute inset-0"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}></blockquote>
              </div>
              <p className="text-[var(--cGold)] text-sm sm:text-base mt-2 sm:mt-3 truncate">
                Descubre más en nuestro Instagram
              </p>
            </div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Section3;
