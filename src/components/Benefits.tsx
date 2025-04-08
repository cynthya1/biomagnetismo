import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Droplet, Brain, Heart, ShieldCheck, Activity, ArrowDown, PlusCircle, MinusCircle } from 'lucide-react';

const Benefits = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const northPoleEffects = [
    "Disminuye el dolor e inflamación",
    "Destruye microorganismos de tipo patógeno",
    "Desaparece ciertos tipos de tumores",
    "Reduce la hipertensión",
    "Atrae glóbulos rojos y blancos",
    "Reduce coágulos de sangre",
    "Reduce la fiebre"
  ];

  const southPoleEffects = [
    "Incrementa el dolor e inflamación",
    "Fomenta el crecimiento de microorganismos",
    "Fomenta el crecimiento acelerado de tejidos normales",
    "Reduce la hipotensión",
    "Incrementa la producción de glóbulos rojos",
    "Incrementa la flexibilidad en las venas, vénulas y arterias microscópicas"
  ];

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
              Beneficios del Biomagnetismo
            </h2>
            <p className="text-xl text-gray-600">
              Descubre cómo el biomagnetismo puede ayudarte a mejorar tu salud
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
              <h3 className="text-2xl font-bold text-gray-900">
                Equilibrio magnético y salud
              </h3>
              <p className="text-gray-700">
                Siempre se ha dicho que las emociones influyen en el desarrollo o curación de las enfermedades, y esta es la explicación: interfieren y alteran nuestro equilibrio magnético.
              </p>
              <p className="text-gray-700">
                Esto se pudo comprobar de una manera particular cuando los primeros astronautas al volver a la tierra padecieron enfermedades debidas al cambio de la atracción magnética sobre el cuerpo. Entonces, se empezó a estudiar científica y clínicamente la interacción de los campos magnéticos sobre el cuerpo.
              </p>
              <p className="text-gray-700">
                La terapia ayuda a restaurar el equilibrio magnético natural del cuerpo, promoviendo la salud y el bienestar general.
              </p>
              <p className="text-gray-700">
                Además, el biomagnetismo puede ser una herramienta eficaz para mejorar la calidad de vida y prevenir enfermedades.
              </p>
              <div className="pt-4">
                <h4 className="text-lg font-semibold text-gray-900">Restauración del equilibrio</h4>
                <p className="text-gray-600">La terapia ayuda a restaurar el equilibrio magnético natural del cuerpo</p>
              </div>
              <div className="pt-4">
                <h4 className="text-lg font-semibold text-gray-900">Impacto en la salud</h4>
                <p className="text-gray-600">Restaura el funcionamiento óptimo del organismo mediante la armonización de los campos magnéticos</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/foto2.jpg" 
                alt="Terapia de biomagnetismo" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Efectos de los imanes */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Efectos de los imanes por cada polo magnético
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Cada polo magnético tiene efectos específicos que se utilizan estratégicamente durante la terapia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Polo Norte */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="bg-black text-white p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <MinusCircle className="w-6 h-6 mr-3" />
                    <h4 className="text-xl font-bold">POLO NORTE NEGRO (-) SEDA</h4>
                  </div>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Alcaliniza</span>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {northPoleEffects.map((effect, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="min-w-6 pt-1">
                          <ArrowDown className="w-5 h-5 text-black" />
                        </div>
                        <span className="text-gray-700">{effect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Polo Sur */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="bg-red-600 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <PlusCircle className="w-6 h-6 mr-3" />
                    <h4 className="text-xl font-bold">POLO SUR ROJO (+) TONIFICA</h4>
                  </div>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Acidifica</span>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {southPoleEffects.map((effect, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="min-w-6 pt-1">
                          <ArrowDown className="w-5 h-5 text-red-600" />
                        </div>
                        <span className="text-gray-700">{effect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Ilustración del proceso */}
          <div className="bg-white">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Cómo actúa el biomagnetismo en tu cuerpo
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                La terapia trabaja de manera profunda para restaurar el equilibrio en todo el organismo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Equilibra el pH</h4>
                <p className="text-gray-600">
                  Restaura el equilibrio del pH en los órganos, creando un ambiente donde los patógenos no pueden sobrevivir
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Fortalece el sistema inmune</h4>
                <p className="text-gray-600">
                  Potencia las defensas naturales del cuerpo para combatir virus, bacterias y otros patógenos
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Promueve la regeneración</h4>
                <p className="text-gray-600">
                  Facilita la regeneración celular y la autorregulación del organismo para una recuperación más rápida
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;