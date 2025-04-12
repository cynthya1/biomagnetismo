import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDown, PlusCircle, MinusCircle } from 'lucide-react';

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

const MagnetEffects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="container mx-auto px-4 py-16">
       <div className="max-w-6xl mx-auto">
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
        </div>
    </div>
  );
};

export default MagnetEffects; 