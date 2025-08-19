import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';

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
            <div
              ref={ref}
              className={`bg-white p-4 sm:p-6 rounded-xl shadow-lg transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              <div className="bg-red-600 text-white p-3 sm:p-4 rounded-lg mb-4 flex items-center">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                <h3 className="text-lg sm:text-xl font-bold">Nuestra Ubicación</h3>
              </div>

              <div className="h-64 sm:h-96 md:h-[500px] relative">
                <iframe
                  src="https://www.google.com/maps?q=Av.%20Jos%C3%A9%20Pardo%20557%2C%20Miraflores%2C%20Lima%2C%20Per%C3%BA&output=embed"
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
                <p className="text-gray-600">Av. José Pardo 557, Miraflores, Lima, Perú</p>
                <p className="text-gray-500 text-sm mt-1">
                  Fácil acceso y ubicación céntrica en el corazón de Miraflores
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
