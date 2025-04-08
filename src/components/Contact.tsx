import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contacto
            </h2>
            <p className="text-xl text-gray-600">
              Estamos aquí para atenderte. Contáctanos para programar tu consulta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {/* Mapa */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-red-600 text-white p-4 rounded-lg mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                <h3 className="text-xl font-bold">Nuestra Ubicación</h3>
              </div>
              <div style={{ height: "500px", position: "relative" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.650456456789!2d-77.033073!3d-12.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f8a4d3804b%3A0x1f1a2f2f2f2f2f2f!2sMalecon%20Balta%20758%2C%20Miraflores%2C%20Lima!5e0!3m2!1ses-419!2spe!4v1234567890!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900">Dirección:</h4>
                <p className="text-gray-600">Malecón Balta 758, Miraflores, Lima, Perú</p>
                <p className="text-gray-500 text-sm mt-1">Fácil acceso y ubicación céntrica en el corazón de Miraflores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;