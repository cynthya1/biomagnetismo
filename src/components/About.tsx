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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/foto2.jpg"
                alt="Terapia de Biomagnetismo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Qué es el Biomagnetismo?
              </h2>
              <div className="space-y-6 text-gray-700">
                <div className="min-h-[120px] overflow-hidden">
                  <p className="text-base md:text-lg leading-relaxed font-normal">
                    Es una disciplina terapéutica que utiliza imanes naturales de mediana intensidad para tratar distintos tipos de enfermedades o disfunciones en el organismo.
                  </p>
                </div>
                <div className="min-h-[120px] overflow-hidden">
                  <p className="text-base md:text-lg leading-relaxed font-normal">
                    El Par biomagnético es un método creado por el Dr Goiz Durán basado en la impactación de imanes estáticos de 1000 gaus sobre el cuerpo. Según el Dr Goiz el Par Biomagnético tiene la capacidad de estudiar, detectar, clasificar, medir y corregir las alteraciones funcionales del pH de los órganos vivos.
                  </p>
                </div>
                <div className="min-h-[120px] overflow-hidden">
                  <p className="text-base md:text-lg leading-relaxed font-normal">
                    La terapia Biomagnética actúa como un sistema de diagnóstico y tratamiento que detecta alteraciones energéticas en los órganos. Mediante la colocación de imanes en puntos específicos, se logra neutralizar patógenos y restablecer el estado natural de salud. Este enfoque holístico considera el cuerpo como un sistema integral, donde cada punto biomagnético está relacionado con múltiples funciones corporales.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;