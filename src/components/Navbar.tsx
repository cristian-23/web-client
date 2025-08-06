"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "./Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Controla el cambio de estilo al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cierra el menú móvil cuando se hace clic en un enlace
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--cBlack)] shadow-md' : 'bg-[var(--cBlack)]'}`}
    >
      <Container>
        <nav className="py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-[var(--cGold)]">Noelia</div>
          
          {/* Menú de escritorio */}
          <ul className="hidden md:flex gap-6 text-[var(--cWhite)] font-medium">
            <li>
              <Link 
                href="#inicio" 
                className="hover:text-[var(--cGold)] transition-colors"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                href="#servicios" 
                className="hover:text-[var(--cGold)] transition-colors"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link 
                href="#contacto" 
                className="hover:text-[var(--cGold)] transition-colors"
              >
                Contacto
              </Link>
            </li>
          </ul>

          {/* Botón de menú móvil */}
          <button 
            className="md:hidden text-[var(--cGold)] focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      {/* Menú móvil desplegable */}
      <div 
        className={`md:hidden bg-[var(--cBlack)] overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-60' : 'max-h-0'}`}
      >
        <Container>
          <ul className="py-4 flex flex-col gap-4 text-[var(--cWhite)] font-medium">
            <li>
              <Link 
                href="#inicio" 
                className="block py-2 hover:text-[var(--cGold)] transition-colors"
                onClick={handleLinkClick}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                href="#servicios" 
                className="block py-2 hover:text-[var(--cGold)] transition-colors"
                onClick={handleLinkClick}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link 
                href="#contacto" 
                className="block py-2 hover:text-[var(--cGold)] transition-colors"
                onClick={handleLinkClick}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
