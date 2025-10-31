"use client";
import { motion } from "framer-motion";
import Input from "./form/Input/Input";
import { useState } from "react";
import Select from "./form/Select/Select";
import TextArea from "./form/TextArea/TextArea";
import toast from "react-hot-toast";
import Container from "./Container";
import axios from "axios";

const Section2 = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    serviceType: "",
    propertyType: "",
    budget: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      toast.error("Ingresa un correo electrónico válido");
      return;
    }

    setIsSubmitting(true);
    toast.loading("Enviando formulario...");

    try {
      const res = await axios.post("https://firebrick-seahorse-100590.hostingersite.com/api/contact", {
        client: "noeliaortizc21.com",
        // client: "cristianblancoleandro@gmail.com",
        ...formState,
      });

      toast.dismiss();

      if (res.data?.success) {
        toast.success(
          res.data.message || "¡Tu mensaje ha sido enviado exitosamente!"
        );

        // Reiniciar el formulario
        setFormState({
          fullName: "",
          email: "",
          whatsapp: "",
          serviceType: "",
          propertyType: "",
          budget: "",
          message: "",
        });
      } else {
        // Si el backend devuelve success=false
        if (res.data?.data) {
          const errores = Object.entries(res.data.data)
            .map(([campo, mensajes]: any) => `${campo}: ${mensajes.join(", ")}`)
            .join("\n");
          toast.error(`Error de validación:\n${errores}`);
        } else {
          toast.error(res.data?.message || "Error al enviar el formulario.");
        }
      }
    } catch (error: any) {
      toast.dismiss();
      console.error(error);
      toast.error(
        "Hubo un error al enviar. Verifica tu conexión o inténtalo de nuevo."
      );
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
            Como paso 2, completa el formulario
          </p>

          <h2 className="text-[var(--cWhite)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-6 sm:mb-8 md:mb-10">
            Llena el formulario y obtén un asesoramiento con una experiencia más
            allá de la visita
          </h2>
        </div>

        {/* FORMULARIO POST A API */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto w-full">
          {/* Fila de nombre y correo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <Input
              label="Nombre completo*"
              type="text"
              name="fullName"
              value={formState.fullName}
              onChange={handleChange}
              required
            />
            <Input
              label="Correo electrónico*"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* WhatsApp */}
          <Input
            label="WhatsApp + Cód. país*"
            type="text"
            name="whatsapp"
            value={formState.whatsapp}
            onChange={handleChange}
            required
          />

          {/* Fila de selects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <Select
              label="Tipo de servicio que requieres*"
              name="serviceType"
              value={formState.serviceType}
              options={[
                { value: "Compra de propiedad", label: "Compra de propiedad" },
                { value: "Alquiler", label: "Alquiler" },
                { value: "Venta de propiedad", label: "Venta de propiedad" },
                { value: "Inversiones", label: "Inversiones" },
              ]}
              onChange={handleChange}
              required
            />
            <Select
              label="Tipo de propiedad*"
              name="propertyType"
              value={formState.propertyType}
              options={[
                { value: "Casa", label: "Casa" },
                { value: "Departamento", label: "Departamento" },
                { value: "Terreno", label: "Terreno" },
                { value: "Oficina", label: "Oficina" },
                { value: "Galpón", label: "Galpón" },
                { value: "Otro", label: "Otro" },
              ]}
              onChange={handleChange}
              required
            />
          </div>

          {/* Presupuesto */}
          <Input
            label="Presupuesto destinado Bs.*"
            type="text"
            name="budget"
            value={formState.budget}
            onChange={handleChange}
            required
          />

          {/* Mensaje */}
          <TextArea
            label="¿Específicamente cómo puedo ayudarte?*"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            rows={5}
          />

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
