import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Acerca del Biomagnetismo", href: "#about" },
  { name: "Beneficios", href: "#benefits" },
  { name: "Tratamientos", href: "#conditions" },
  { name: "Galería", href: "#gallery" },
  { name: "Preguntas Frecuentes", href: "#faq" },
  { name: "Contacto", href: "#contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");
  const [isAtFooter, setIsAtFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detectar si estamos en el footer
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollBottom = scrollTop + windowHeight;

      // Si estamos cerca del final de la página (footer)
      if (documentHeight - scrollBottom < 100) {
        setIsAtFooter(true);
        return;
      } else {
        setIsAtFooter(false);
      }

      // Si no estamos en el footer, detectar la sección actual
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Si estamos al inicio de la página
      if (window.scrollY < 100) {
        setActiveSection("#inicio");
        return;
      }

      // Encontrar la sección actual
      let found = false;
      sections.forEach((section) => {
        if (section instanceof HTMLElement) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(`#${section.id}`);
            found = true;
          }
        }
      });

      if (!found && window.scrollY >= 100) {
        let nearestSection = null;
        let minDistance = Infinity;

        sections.forEach((section) => {
          if (section instanceof HTMLElement) {
            const distance = Math.abs(section.offsetTop - scrollPosition);
            if (distance < minDistance) {
              minDistance = distance;
              nearestSection = section;
            }
          }
        });

        if (nearestSection) {
          setActiveSection(`#${nearestSection.id}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Contenedor que abarca todo el ancho */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 w-full relative">
          {/* LOGO A LA IZQUIERDA */}
          <div className={`absolute left-8 top-2 transition-all duration-300 ${
            scrolled ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
          }`}>
            <img src="/logo1.png" alt="BioMagnética" className="h-48 w-auto" />
          </div>

          {/* ENLACES DE ESCRITORIO, EMPUJADOS A LA DERECHA */}
          <div className="hidden md:flex ml-auto space-x-6 text-xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  closeMenu();
                }}
                className={`relative px-3 py-2 transition-colors duration-300 ${
                  isAtFooter
                    ? "text-red-600"
                    : activeSection === item.href
                      ? item.href === "#inicio"
                        ? scrolled
                          ? "text-gray-800"
                          : "text-white"
                        : scrolled
                          ? "text-red-600"
                          : "text-red-600"
                      : scrolled
                        ? "text-gray-800 hover:text-red-600"
                        : "text-white hover:text-red-600"
                }`}
              >
                {item.name}
                {!isAtFooter && activeSection === item.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* BOTÓN DEL MENÚ MÓVIL */}
          <div className="md:hidden ml-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  closeMenu();
                }}
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isAtFooter
                    ? "text-red-600 bg-red-50"
                    : activeSection === item.href
                      ? "text-red-600 bg-red-50"
                      : "text-gray-800 hover:bg-gray-50 hover:text-red-600"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
