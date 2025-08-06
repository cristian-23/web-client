import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--cBlack)] py-6 sm:py-8 md:py-10 text-center mt-auto">
      <Container>
        <h2 className="font-bold text-[var(--cWhite)] text-2xl sm:text-3xl md:text-4xl leading-none mb-4 sm:mb-6">
          Redes sociales y contacto
        </h2>

        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Instagram">
            <FaInstagram
              size={24}
              className="sm:text-3xl md:text-4xl text-[var(--cGold)]"
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Facebook">
            <FaFacebookF
              size={24}
              className="sm:text-3xl md:text-4xl text-[var(--cGold)]"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="LinkedIn">
            <FaLinkedin
              size={24}
              className="sm:text-3xl md:text-4xl text-[var(--cGold)]"
            />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="WhatsApp">
            <FaWhatsapp
              size={24}
              className="sm:text-3xl md:text-4xl text-[var(--cGold)]"
            />
          </a>
        </div>

        <p className="text-[var(--cGold)] text-lg sm:text-xl md:text-2xl mt-6 sm:mt-8 md:mt-10 leading-none">
          © {new Date().getFullYear()} Todos los derechos reservados | Noelia
          Ortíz.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
