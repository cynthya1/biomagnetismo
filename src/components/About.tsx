import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Magnet, Brain, Heart, Shield, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Sección Principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/foto11.jpg" 
                alt="Nuestra Terapeuta" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Qué es el Biomagnetismo?
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Es una disciplina terapéutica que utiliza imanes naturales de mediana intensidad para tratar distintos tipos de enfermedades o disfunciones en el organismo.
                </p>
                <p>
                  El Par biomagnético es un método creado por el Dr Goiz Durán basado en la impactación de imanes estáticos de 1000 gaus sobre el cuerpo. Según el Dr Goiz el Par Biomagnético tiene la capacidad de estudiar, detectar, clasificar, medir y corregir las alteraciones funcionales del pH de los órganos vivos.
                </p>
                <p>
                  Todos los habitantes del planeta estamos sometidos al magnetismo terrestre. Cada célula, tejido, órgano y sistema así como las sustancias químicas asimiladas o desechadas tiene su propio campo magnético.
                </p>
              </div>
            </div>
          </div>

          {/* Beneficios y Características */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Beneficios de la Terapia</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  El origen de muchas enfermedades se encuentra en las modificaciones magnéticas a las que nuestros estados de ánimo han sometido al organismo. Siempre se ha dicho que las emociones influyen en el desarrollo o curación de las enfermedades, y esta es la explicación: interfieren y alteran nuestro equilibrio magnético.
                </p>
                <p className="text-gray-700">
                  Esto se pudo comprobar de una manera particular cuando los primeros astronautas al volver a la tierra padecieron enfermedades debidas al cambio de la atracción magnética sobre el cuerpo. Entonces, se empezó a estudiar científica y clínicamente la interacción de los campos magnéticos sobre el cuerpo.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Características del Tratamiento</h3>
              <ul className="space-y-4">
                {[
                  "Desde la primera sesión verás los cambios en tu organismo",
                  "El terapeuta te dará indicaciones a seguir en casa",
                  "De acuerdo a tu afección, se personaliza el tratamiento",
                  "Puedes consultar cualquier duda con el terapeuta durante la sesión",
                  "Tiempo aproximado de la sesión en total es de 1 hora",
                  "No tiene efectos secundarios",
                  "Complementa la medicina convencional"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5" />
                  <span>Atención totalmente personalizada</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;