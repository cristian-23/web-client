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

  const videoData = [
    {
      id: "TCaKlll1HSM",
      title:
        "Mi intención no es solo vender, sino compartir mis conocimientos los cuales ayuden a cuidar tu bolsillo.",
    },
    {
      id: "SNgefcqD9g8",
      title:
        "Durante mis servicios te revelo estrategias probadas para que tu inversión genere renta e incremente su valor.",
    },
    {
      id: "nTzvB8Va3uA",
      title:
        "Me aseguro de asesorarte al 100% en todos los puntos claves que necesitas saber para vender tu propiedad ",
    },
  ];

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
          Mi experiencia y conocimiento en tus manos, acompañándote en cada paso
          hacia tu hogar soñado
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {videoData.map(({ id, title }, idx) => (
            <div key={idx} className="aspect-[9/16] w-full max-w-xs mx-auto">
              <div className="relative h-0 pb-[177.78%] w-full overflow-hidden ">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`YouTube video ${idx}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-[var(--cGold)] text-sm sm:text-[24px] mt-2 sm:mt-3 text-left leading-[100%]">
                {title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Section3;
