// Utilidades para manejo de responsive design

// Breakpoints estándar para el diseño responsive
export const breakpoints = {
  xs: 0,      // Extra small devices (phones)
  sm: 640,    // Small devices (tablets)
  md: 768,    // Medium devices (small laptops)
  lg: 1024,   // Large devices (desktops)
  xl: 1280,   // Extra large devices (large desktops)
  xxl: 1536   // Extra extra large devices
};

// Hook personalizado para media queries (para usar en componentes)
export const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs}px)`,
  sm: `@media (min-width: ${breakpoints.sm}px)`,
  md: `@media (min-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
  xl: `@media (min-width: ${breakpoints.xl}px)`,
  xxl: `@media (min-width: ${breakpoints.xxl}px)`
};

// Función para generar clases condicionales basadas en breakpoints
export const getResponsiveClasses = (baseClass: string, breakpointClasses: Record<string, string>) => {
  const classes = [baseClass];
  
  Object.entries(breakpointClasses).forEach(([breakpoint, className]) => {
    classes.push(`${breakpoint}:${className}`);
  });
  
  return classes.join(' ');
};