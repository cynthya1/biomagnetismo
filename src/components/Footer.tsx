import React from 'react';
import { Facebook, MapPin } from 'lucide-react';

// Componente SVG para WhatsApp
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor" 
    viewBox="0 0 16 16"
    className={className} // Aplicar clases aquí
  >
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
  </svg>
);

const Footer = () => {
  // Define los enlaces aquí para mayor claridad
  const facebookUrl = "#"; // Reemplaza con tu URL de Facebook
  const whatsappUrl = "https://wa.me/51972700890"; // Actualizado con el número correcto

  return (
    <>
      <hr className="border-0 border-t border-red-500" />
      <footer className="bg-[#E1C09E] py-16">
        <div className="container mx-auto px-4">
          {/* Logo centrado */}
          <div className="flex justify-center mb-12">
            <div className="text-center">
              <img src="/logo1.png" alt="BioMagnética" className="h-48 mx-auto" />
              <p className="text-gray-600 mt-4">
                Metodología de alta precisión para el equilibrio de tu cuerpo a través de la terapia con imanes.
              </p>
            </div>
          </div>

          {/* Dos columnas para enlaces y contacto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
            <div>
              <h4 className="text-lg font-semibold text-red-600 mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-600 hover:text-red-600 transition-colors">Inicio</a></li>
                <li><a href="#servicios" className="text-gray-600 hover:text-red-600 transition-colors">Servicios</a></li>
                <li><a href="#nosotros" className="text-gray-600 hover:text-red-600 transition-colors">Nosotros</a></li>
                <li><a href="#contacto" className="text-gray-600 hover:text-red-600 transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-red-600 mb-4">Contacto</h4>
              <div className="flex flex-col items-start">
                <ul className="space-y-3 mb-4">
                  <li className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 text-red-600 mr-3" />
                    Malecón Balta 758, Miraflores
                  </li>
                  <li className="flex items-center text-gray-600">
                    {/* Usando SVG para WhatsApp */}
                    <WhatsAppIcon className="w-5 h-5 text-red-600 mr-3" />
                    +51 972 700 890
                  </li>
                </ul>
                <div className="flex space-x-4 items-center mt-4">
                  <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 transition-colors" aria-label="Facebook">
                    <Facebook className="w-7 h-7" />
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 transition-colors" aria-label="WhatsApp">
                    {/* Usando SVG para WhatsApp */}
                    <WhatsAppIcon className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-red-100">
            <p className="text-center text-gray-600">
              © {new Date().getFullYear()} BioMagnética. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 