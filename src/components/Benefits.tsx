import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

const Benefits = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="benefits" className="bg-white py-16">
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
              ¿Qué esperar de esta terapia Biomagnética?
            </h2>
            <p className="text-xl text-gray-600">
              Descubre cómo el Biomagnetismo puede ayudarte a mejorar tu salud
            </p>
          </div>

          {/* Explicación del origen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-gray-700 text-lg">
                El origen de muchas enfermedades se encuentra en las modificaciones magnéticas a las que nuestros estados de ánimo han sometido al organismo. Siempre se ha dicho que las emociones influyen en el desarrollo o curación de las enfermedades, y esta es la explicación: interfieren y alteran nuestro equilibrio magnético.
              </p>
              
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-7 h-7 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">Desde la primera sesión verás los cambios en tu organismo</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-7 h-7 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">El terapeuta te dará indicaciones a seguir en casa</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-7 h-7 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">De acuerdo a tu afección, se personaliza el tratamiento</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-7 h-7 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">Puedes consultar cualquier duda con el terapeuta durante la sesión</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-7 h-7 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">Tiempo aproximado de la sesión en total es de 1 hora</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Imagen - mantener la misma */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/24.jpg"
                alt="Terapia Biomagnética"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Efectos de los imanes - MOVED TO MagnetEffects.tsx */}

          {/* Ilustración del proceso - REMOVED */}

        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;