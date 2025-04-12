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
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center">
              {/* Columna de Texto - 50% */}
              <div className="p-8 md:p-12">
                <div className="space-y-5 text-gray-700">
                  <p>
                    Biomagnetista certificada por la Escuela oficial del Dr. Isaac Goiz en México.
                  </p>
                  <p>
                    Con más de 13 años de experiencia, especialista en terapia de Biomagnetismo para casos crónicos y difíciles.
                  </p>
                  <p>
                    Utilizamos metodología de alta efectividad y precisión con imanes de distintos gausajes para cada caso en específico.
                  </p>
                  <h4 className="text-xl font-semibold text-gray-900 pt-4">¿Cómo inició el Centro Mejórate HOY?</h4> 
                  <p>
                    La terapeuta empezó los estudios de Biomagnetismo a raíz de una afección propia en las extremidades superiores, al ver que ningún tratamiento tradicional ni programas de rehabilitación física le daban los resultados esperados, se puso a disposición de un Biomagnetista profesional para su completa sanación. Al día de hoy brinda esta terapia alternativa con plena convicción de su eficacia a toda la gente que tampoco obtiene resultados en los problemas que enfrenta día a día.
                  </p>
                  <p>
                    Los mas de 2000 clientes atendidos en Latinoamérica dan fe que esta terapia puede ser la solución que necesitas.
                  </p>
                </div>
              </div>
              
              {/* Columna de Imagen - 50% */}
              <div className="p-8 md:p-12 flex justify-center items-center">
                <img 
                  src="/20.jpg" 
                  alt="Terapeuta Certificada Biomagnetismo"
                  className="max-w-sm w-full h-auto object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Sección de Estadísticas Añadida */}
          <div className="mb-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Estadística 1 */}
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-[#E1C09E] mb-2">2000+</p>
                <h4 className="text-lg font-semibold text-[#E1C09E] mb-1">Clientes satisfechos</h4>
                <p className="text-gray-600 text-sm">Estamos orgullosos de ofrecer un servicio al cliente de primera clase y personalizado.</p>
              </div>
              {/* Estadística 2 */}
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-[#E1C09E] mb-2">3+</p>
                <h4 className="text-lg font-semibold text-[#E1C09E] mb-1">Certificaciones</h4>
                <p className="text-gray-600 text-sm">Tenemos más de 3 certificados en estudios del Par Biomagnético, Bioenergética y magnetoterapia.</p>
              </div>
              {/* Estadística 3 */}
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-[#E1C09E] mb-2">10+</p>
                <h4 className="text-lg font-semibold text-[#E1C09E] mb-1">Años de experiencia</h4>
                <p className="text-gray-600 text-sm">Realizando las mejores terapias holísticas, cursos y talleres para el desarrollo integral y bienestar de nuestros clientes.</p>
              </div>
            </div>
          </div>

          {/* Sección Terapia Biomagnética */}
          <div className="mb-16 max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-4 sm:p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Terapia Biomagnética
            </h3>
            <div className="space-y-6 text-gray-700">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full text-white flex items-center justify-center font-semibold mx-auto sm:mx-0 mb-2 sm:mb-0">1</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 text-center sm:text-left">Principios básicos:</h4>
                  <p>El biomagnetismo se fundamenta en la teoría de que muchas enfermedades son causadas por desequilibrios en el pH del cuerpo y por la presencia de patógenos. La aplicación de imanes pretende restablecer este equilibrio y ayudar al cuerpo a eliminar toxinas y microorganismos perjudiciales.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full text-white flex items-center justify-center font-semibold mx-auto sm:mx-0 mb-2 sm:mb-0">2</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 text-center sm:text-left">Uso de imanes:</h4>
                  <p>Durante una sesión de biomagnetismo, un terapeuta coloca imanes de diferentes tamaños y polaridades en áreas específicas del cuerpo. Los imanes pueden variar en su fuerza y el tiempo que se dejan puestos son de 20 minutos para esta latitud donde estamos ubicados, Perú.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full text-white flex items-center justify-center font-semibold mx-auto sm:mx-0 mb-2 sm:mb-0">3</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 text-center sm:text-left">Duración de las sesiones:</h4>
                  <p>Las sesiones pueden durar entre 30 minutos y una hora, y el número total de sesiones dependerá de la condición que se esté tratando y la respuesta del paciente.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full text-white flex items-center justify-center font-semibold mx-auto sm:mx-0 mb-2 sm:mb-0">4</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 text-center sm:text-left">Condiciones tratadas:</h4>
                  <p>Algunos defensores de esta terapia afirman que puede ser útil para tratar una amplia gama de problemas, incluidos dolores crónicos, trastornos digestivos, problemas respiratorios y otros desequilibrios de salud.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full text-white flex items-center justify-center font-semibold mx-auto sm:mx-0 mb-2 sm:mb-0">5</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 text-center sm:text-left">Consideraciones:</h4>
                  <p>Como con cualquier terapia alternativa, es fundamental consultar con un profesional de la salud antes de comenzar un tratamiento de biomagnetismo, especialmente si se tiene una condición de salud preexistente o se están tomando medicamentos.</p>
                </div>
              </div>

              <p className="mt-6 pt-4 border-t border-gray-100">
                En resumen, la terapia de biomagnetismo es un enfoque alternativo que utiliza imanes con el objetivo de equilibrar la energía del cuerpo y tratar enfermedades, aunque su efectividad no está ampliamente comprobada y debe ser abordada con precaución.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Location; 