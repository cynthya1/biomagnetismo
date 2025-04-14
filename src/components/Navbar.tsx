import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Terapia Biomagnética", href: "#about" },
  { name: "Galería", href: "#gallery" },
  { name: "Preguntas Frecuentes", href: "#faq" },
  { name: "Contacto", href: "#contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");
  const NAVBAR_HEIGHT = 70; // Ajustado de 80 a 70

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      let currentSection = "#inicio"; // Default to #inicio

      navItems.forEach((item) => {
        const section = document.querySelector(item.href) as HTMLElement; // Type assertion
        if (section) {
          const sectionTop = section.offsetTop - NAVBAR_HEIGHT;
          const sectionBottom = sectionTop + section.offsetHeight;

          // Check if scroll position is within the section boundaries
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = item.href;
          }
        }
      });

      // Special check for the end of the page to ensure #contacto is highlighted
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      // Check if we are very close to the bottom (e.g., within 50px)
      if (scrollPosition + winHeight >= docHeight - 50) { 
          // Find the contact section explicitly and set it if found
          const contactSectionExists = navItems.some(item => item.href === "#contacto");
          if (contactSectionExists) {
             currentSection = "#contacto";
          } else if (navItems.length > 0) {
            // Fallback to the last item in navItems if #contacto doesn't exist
            currentSection = navItems[navItems.length - 1].href;
          }
      }

      setActiveSection(currentSection);
    };

    handleScroll(); // Call once on mount to set initial state

    window.addEventListener("scroll", handleScroll, { passive: true }); // Use passive listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array

  const closeMenu = () => setIsOpen(false);
  
  const scrollToSection = (href: string) => {
    closeMenu(); // Close menu first before scrolling
    
    setTimeout(() => {
      const targetElement = document.querySelector(href) as HTMLElement;
      if (targetElement) {
          // Calculate offset based on whether navbar is scrolled (compact)
          const offset = scrolled ? 64 : NAVBAR_HEIGHT; 
          
          // Use both methods for better compatibility across browsers and devices
          try {
            // Modern method
            targetElement.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
            
            // Additional window.scrollTo for iOS Safari compatibility
            window.scrollTo({
              top: targetElement.offsetTop - offset,
              behavior: 'smooth'
            });
          } catch (error) {
            // Fallback for older browsers
            window.scrollTo(0, targetElement.offsetTop - offset);
          }
      }
    }, 100); // Small delay to ensure menu closes first on mobile
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full relative">
          <div className={`absolute left-[6.5rem] sm:left-[7rem] md:left-8 top-20 md:top-2 transition-all duration-300 ${
            scrolled ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"
          }`}>
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('#inicio'); }}>
              <img src="/logo1.png" alt="BioMagnética" className="h-48 w-auto" />
            </a>
          </div>

          <div className="hidden md:flex flex-grow items-center justify-center md:justify-end space-x-4 text-lg"> {/* Reducido space-x y text-size */} 
            {navItems.map((item) => (
              <div key={item.href} className="relative py-2">
                <a 
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className={`px-3 py-1 rounded-md transition-colors duration-200 ${ // Mantenido font-normal por defecto
                    activeSection === item.href
                      ? 'text-red-600 font-semibold' // Usar font-semibold para activo
                      : scrolled
                        ? 'text-gray-800 hover:text-red-600'
                        : 'text-white hover:text-red-600'
                  }`}
                >
                  {item.name}
                </a>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeSection === item.href ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ originX: 0.5 }}
                />
              </div>
            ))} 
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-200 ${
                scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */} 
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`md:hidden overflow-hidden ${scrolled ? 'bg-white/95 shadow-lg' : 'bg-black/80 backdrop-blur-sm'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { 
                e.preventDefault();
                e.stopPropagation(); // Previene propagación de eventos
                scrollToSection(item.href); 
              }}
              className={`block w-full px-3 py-4 rounded-md text-base font-medium transition-colors duration-200 ${
                activeSection === item.href
                  ? 'bg-red-600 text-white'
                  : scrolled
                    ? 'text-gray-800 hover:bg-gray-100'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
