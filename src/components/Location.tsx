import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Award, BookOpen, Clipboard, CheckCircle } from 'lucide-react';

const Location = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="location" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conócenos
            </h2>
            <p className="text-xl text-gray-600">
              Conoce a nuestro equipo de profesionales dedicados a tu bienestar
            </p>
          </div>

          {/* Nuestra Filosofía - 50% texto / 50% imagen */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Columna de Texto - 50% */}
              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Filosofía</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    En BioMagnética creemos que cada persona merece una atención personalizada y un enfoque integral para su salud.
                  </p>
                  <p className="text-gray-700">
                    Nuestro equipo está formado por profesionales con amplia experiencia en biomagnetismo, certificados por las instituciones más prestigiosas del sector.
                  </p>
                  <p className="text-gray-700">
                    Con más de una década de experiencia en terapias de biomagnetismo, nos dedicamos a mejorar la calidad de vida de nuestros pacientes a través de tratamientos personalizados y efectivos. Nuestro compromiso es proporcionar un servicio de la más alta calidad, utilizando técnicas avanzadas y un enfoque holístico para cada tratamiento.
                  </p>
                  <ul className="space-y-3 mt-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5" />
                      <span>Atención totalmente personalizada</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5" />
                      <span>Más de 10 años de experiencia en el sector</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5" />
                      <span>Instalaciones modernas y confortables</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5" />
                      <span>Tecnología de última generación</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Columna de Imagen - 50% */}
              <div className="bg-white flex flex-col items-center justify-center relative">
                <img 
                  src="/20.jpg" 
                  alt="Consultorio BioMagnética" 
                  className="w-full h-full object-cover"
                  style={{ minHeight: "600px", maxHeight: "600px" }}
                />
                <div className="p-6 text-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Dra. María Sánchez</h4>
                  <p className="text-gray-700">Biomagnetista certificada por la Escuela oficial del Dr. Isaac Goiz en México.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location; 