"use client";
import { motion } from "framer-motion";
import Input from "./form/Input/Input";
import { useState } from "react";
import Select from "./form/Select/Select";
import TextArea from "./form/TextArea/TextArea";
import toast from "react-hot-toast";
import Container from "./Container";

const Section2 = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    Nombre: "",
    Correo_electronico: "",
    Whatsapp: "",
    Tipo_de_propiedad: "",
    Servicio: "",
    Presupuesto_destinado: "",
    Descripcion: "",
  });

  const handleChange = (e: any) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.Correo_electronico)) {
      toast.error("Ingresa un correo electrónico válido");
      return;
    }

    setIsSubmitting(true);
    toast.loading("Enviando formulario...");

    const formData = new FormData();
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append("_subject", "Nuevo mensaje del formulario de tu sitio web");

    try {
      const res = await fetch(
        "https://formsubmit.co/noeliaortiz.c21@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      toast.dismiss();

      if (res?.ok) {
        toast.success("Formulario enviado correctamente");

        setFormState({
          Nombre: "",
          Correo_electronico: "",
          Whatsapp: "",
          Tipo_de_propiedad: "",
          Servicio: "",
          Presupuesto_destinado: "",
          Descripcion: "",
        });
      } else {
        toast.error("Error al enviar el formulario. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error(error);
      toast.dismiss();
      toast.error("Hubo un error. Verifica tu conexión.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="servicios"
      className="w-full py-10 sm:py-12 md:py-16 lg:py-20 bg-[var(--cBlack)]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      }}>
      <Container className="text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[var(--cGold)] text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
            Como paso 2, completa el formulario y tendrás la guía de propiedades
            exclusivas
          </p>

          <h2 className="text-[var(--cWhite)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-6 sm:mb-8 md:mb-10">
            Llena el formulario y obtén tu guía de propiedades exclusivas y
            descubre el regalo que tengo para tí dentro del correo
          </h2>
        </div>

        {/* FORMULARIO POST A FORMSUBMIT */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto w-full">
          {/* Fila de nombre y correo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <div className="w-full">
              <Input
                label="Nombre completo*"
                type="text"
                name="Nombre"
                value={formState.Nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <Input
                label="Correo electrónico*"
                type="email"
                name="Correo_electronico"
                value={formState.Correo_electronico}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* WhatsApp */}
          <div className="w-full">
            <Input
              label="WhatsApp + Cód. país*"
              type="number"
              name="Whatsapp"
              value={formState.Whatsapp}
              onChange={handleChange}
              required
            />
          </div>

          {/* Fila de selects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <div className="w-full">
              <Select
                label="Tipo de servicio que requieres*"
                name="Servicio"
                value={formState.Servicio}
                options={[
                  { value: "comprar", label: "Comprar" },
                  { value: "alquilar", label: "Alquilar" },
                  { value: "inversiones", label: "Inversiones" },
                ]}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <Select
                label="Tipo de propiedad*"
                name="Tipo_de_propiedad"
                value={formState.Tipo_de_propiedad}
                options={[
                  { value: "casa", label: "Casa" },
                  { value: "departamento", label: "Departamento" },
                  { value: "terreno", label: "Terreno" },
                  { value: "oficina", label: "Oficina" },
                  { value: "galpones", label: "Galpones" },
                  { value: "otro", label: "Otro" },
                ]}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="w-full">
            <Input
              label="Presupuesto destinado Bs.*"
              type="number"
              name="Presupuesto_destinado"
              value={formState.Presupuesto_destinado}
              onChange={handleChange}
              required
            />
          </div>
          {/* Mensaje */}
          <div className="w-full">
            <TextArea
              label="¿Específicamente cómo puedo ayudarte?*"
              name="Descripcion"
              value={formState.Descripcion}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>

          {/* Botón de envío */}
          <div className="mt-2 sm:mt-3 md:mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[var(--cGold)] text-[var(--cBlack)] text-sm sm:text-base font-bold py-3 sm:py-4 w-full  mx-auto rounded-xl transition-all ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:opacity-80"
              }`}>
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </Container>
    </motion.section>
  );
};

export default Section2;
