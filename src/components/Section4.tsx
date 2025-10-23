"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./Container";

const Section4 = () => {
  return (
    <motion.section
      id="testimonios"
      className="w-full py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}>
      <Container>
        {/* Título principal */}
        <h2 className="text-[var(--cWhite)] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-[120%] sm:leading-[110%] md:leading-[100%] mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl mx-auto text-center px-2">
          Al igual que tú, ellos llegaron con un sueño de hogar soñado, y lo
          convertimos en realidad. Mi enfoque de
          <span className="font-bold">
            {" "}
            "Una experiencia más allá de la visita"{" "}
          </span>
          me ha llevado a ser una de las referentes en confianza y calidad de
          asesoramiento del hogar soñado
        </h2>

        {/* Imagen principal con testimonial */}
        {/* <div className="flex flex-col mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              alt="firstImage"
              src="/ana_and_marco.png"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[var(--cGold)] text-sm sm:text-base md:text-lg mt-3 ml-0 sm:ml-4 md:ml-12 text-center sm:text-left">
            Ana Paola y Marco lograron encontrar su hogar soñado.
          </p>
        </div> */}
          <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-full mx-auto mb-20">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl border-2 border-[var(--cGold)]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/g3yaJr5AUfQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
        </div>

        {/* Testimonios */}
        <div className="space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20">
          {/* Testimonio 1 - Javier */}
          <div className="flex flex-col md:flex-row items-center  gap-6 md:gap-8 ">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex-shrink-0 relative rounded-full overflow-hidden shadow-xl">
              <Image
                alt="AlexeiImage"
                src="/Alexei.png"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <blockquote className="text-[var(--cWhite)] text-sm sm:text-base md:text-lg lg:text-xl leading-[140%] sm:leading-[130%] md:leading-[120%] lg:leading-[110%]">
                <span className="font-bold  mb-2 sm:mb-3 md:mb-4">
                  “ Alexei Aneiva Jemio:{" "}
                </span>
                <span className="">
                  Quiero recomendar a Noelia Ortiz por su excepcional
                  profesionalismo, simpatía y éxito en su trabajo, siendo una
                  agente inmobiliario confiable y altamente competente, todas
                  mis experiencias fueron de mucha eficiencia.”
                </span>
              </blockquote>
            </div>
          </div>

          {/* Testimonio 2 - Ana María */}
          {/* <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8 ">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex-shrink-0 relative rounded-full overflow-hidden shadow-xl">
              <Image
                alt="AnaImage"
                src="/AnaImage.png"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <blockquote className="text-[var(--cWhite)] text-sm sm:text-base md:text-lg lg:text-xl leading-[140%] sm:leading-[130%] md:leading-[120%] lg:leading-[110%]">
                <span className="font-bold  mb-2 sm:mb-3 md:mb-4">
                  " Ana María:{" "}
                </span>
                <span className="">
                  Noelia no solo me llevo a conocer mi departamento, me ayudó a
                  encontrar y elegir el adecuado en base a mis necesidades “
                </span>
              </blockquote>
            </div>
          </div> */}
        </div>
      </Container>
    </motion.section>
  );
};

export default Section4;
