import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

/**
 * Componente contenedor responsivo que mantiene un ancho máximo consistente
 * y márgenes responsivos en todo el sitio.
 */
const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  fluid = false,
}) => {
  const baseClasses = "w-full px-4 sm:px-6 md:px-8 mx-auto";
  const maxWidthClass = fluid ? "" : "max-w-[1080px]";

  return (
    <div className={`${baseClasses} ${maxWidthClass} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
