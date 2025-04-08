import React from 'react';
import { Facebook, Instagram, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <hr className="border-0 border-t border-red-500" />
      <footer className="bg-red-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img src="/logo1.png" alt="BioMagnética" className="h-64 -mt-20" />
              <p className="text-gray-600 mt-4 max-w-md">
                Metodología de alta precisión para el equilibrio de tu cuerpo a través de la terapia con imanes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-16">
              <div className="-ml-24">
                <h4 className="text-lg font-semibold text-red-600 mb-4">Enlaces Rápidos</h4>
                <ul className="space-y-2">
                  <li><a href="#inicio" className="text-gray-600 hover:text-red-600 transition-colors">Inicio</a></li>
                  <li><a href="#servicios" className="text-gray-600 hover:text-red-600 transition-colors">Servicios</a></li>
                  <li><a href="#nosotros" className="text-gray-600 hover:text-red-600 transition-colors">Nosotros</a></li>
                  <li><a href="#contacto" className="text-gray-600 hover:text-red-600 transition-colors">Contacto</a></li>
                </ul>
              </div>

              <div className="-ml-24">
                <h4 className="text-lg font-semibold text-red-600 mb-4">Contacto</h4>
                <div className="flex justify-between items-start">
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 text-red-600 mr-3" />
                      Malecón Balta 758, Miraflores
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Phone className="w-5 h-5 text-red-600 mr-3" />
                      +51 999 888 777
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Mail className="w-5 h-5 text-red-600 mr-3" />
                      contacto@biomagnetica.com
                    </li>
                  </ul>
                  <div className="flex flex-col space-y-4 ml-4">
                    <a href="#" className="text-red-600 hover:text-red-700 transition-colors" aria-label="Facebook">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-red-600 hover:text-red-700 transition-colors" aria-label="Instagram">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-red-600 hover:text-red-700 transition-colors" aria-label="WhatsApp">
                      <Phone className="w-6 h-6" />
                    </a>
                  </div>
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