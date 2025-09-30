"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./Container";

const Section4 = () => {
  return (
    <motion.section
      id="testimonios"
      className="w-full py-10 sm:py-12 md:py-16 lg:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}>
      <Container>
        <h2 className="text-[var(--cWhite)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-[100%] mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto text-center">
          Al igual que tú, ellos llegaron con un sueño de hogar soñado, y lo
          convertimos en realidad. Mi enfoque de
          <span className="font-bold">
            {" "}
            "Una experiencia más allá de la visita"{" "}
          </span>
          me ha llevado a ser una de las referentes en confianza y calidad de
          asesoramiento del hogar soñado
        </h2>

        {/* Imágenes de propiedades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-12 md:mb-16">
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-video rounded-lg ">
              <Image
                alt="firstImage"
                src="/firstImage.png"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[var(--cGold)] text-sm sm:text-base mt-3 sm:mt-4 text-center">
              Ana Paola y Marco lograron encontrar su hogar soñado.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-video rounded-lg ">
              <Image
                alt="secondImage"
                src="/secondImage.png"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[var(--cGold)] text-sm sm:text-base mt-3 sm:mt-4 text-center">
              La familia se les creció y juntos encontramos el hogar ideal.
            </p>
          </div>
        </div>

        {/* Testimonios */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {/* Testimonio 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0 relative rounded-full overflow-hidden">
              <Image
                alt="JavierImage"
                src="/JavierImage.png"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-grow">
              <blockquote className="text-[var(--cWhite)] text-base sm:text-lg md:text-xl leading-[100%]">
                <span className="font-bold mb-2">“ Javier Andrés:</span> Me
                dedico a rentar departamentos y la verdad que el conocimiento de
                Noelia facilitó mis procesos de inversión y aseguró el
                crecimiento de mis nuevas inversiones ”
              </blockquote>
            </div>
          </div>

          {/* Testimonio 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex-shrink-0 relative rounded-full overflow-hidden">
              <Image
                alt="AnaImage"
                src="/AnaImage.png"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-grow">
              <blockquote className="text-[var(--cWhite)] text-base sm:text-lg md:text-xl leading-[100%]">
                <span className="font-bold mb-2">“ Ana María:</span> Gracias a
                la asesoría personalizada de Noelia, encontramos el hogar
                perfecto para nuestra familia en crecimiento. Su atención al
                detalle y comprensión de nuestras necesidades hizo toda la
                diferencia. ”
              </blockquote>
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Section4;
