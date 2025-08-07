"use client";
import { motion } from "framer-motion";
import Container from "./Container";

const Section1 = () => {
  return (
    <motion.section
      id="inicio"
      className="w-full flex flex-col justify-center items-center py-10 sm:py-12 md:py-16 lg:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      <Container className="text-center">
        <p className="text-[var(--cGold)] text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 leading-[100%]">
          Para descargar la guía de propiedades el 1er paso es mirar el video
        </p>

        <h1 className="text-[var(--cWhite)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-[100%] mb-3 sm:mb-4 md:mb-6">
          No solo encuentro tu hogar; Te guío hacía el estilo de vida que
          mereces, simplificando lo complejo garantizandote un orden mental
          inigualable.
        </h1>

        <p className="text-[var(--cGold)] text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10">
          "Una experiencia más allá de la visita"
        </p>

        <div className="w-full  sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl border-2 border-[var(--cGold)]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/EI4x9a4SnRc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Section1;
