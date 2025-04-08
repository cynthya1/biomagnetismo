import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo funciona el biomagnetismo?",
    answer: "El biomagnetismo funciona mediante la aplicación de imanes de mediana intensidad en puntos específicos del cuerpo. Estos imanes generan campos magnéticos que ayudan a equilibrar el pH del organismo, creando un ambiente donde los patógenos no pueden sobrevivir."
  },
  {
    question: "¿Qué condiciones se pueden tratar con biomagnetismo?",
    answer: "El biomagnetismo puede tratar una amplia variedad de condiciones, incluyendo problemas digestivos, respiratorios, circulatorios, hormonales, del sistema inmune, dolores crónicos, entre otros. Es especialmente efectivo como terapia complementaria."
  },
  {
    question: "¿Es doloroso el tratamiento?",
    answer: "No, el tratamiento de biomagnetismo no es doloroso. Solo implica la colocación de imanes sobre la ropa o directamente sobre la piel. Algunos pacientes pueden experimentar sensaciones leves como hormigueo o calor, pero son completamente normales."
  },
  {
    question: "¿Cuánto tiempo dura una sesión de biomagnetismo?",
    answer: "Una sesión típica de biomagnetismo dura aproximadamente entre 45 minutos y 1 hora. Este tiempo incluye la evaluación inicial y el tratamiento completo."
  },
  {
    question: "¿Cuántas sesiones son necesarias?",
    answer: "El número de sesiones varía según la condición y la respuesta individual del paciente. Algunas personas pueden experimentar mejoría desde la primera sesión, mientras que otras pueden necesitar varias sesiones para obtener resultados óptimos."
  },
  {
    question: "¿Hay efectos secundarios?",
    answer: "El biomagnetismo es una terapia segura y no invasiva que generalmente no produce efectos secundarios. Algunos pacientes pueden experimentar una ligera fatiga o cambios en los patrones de sueño durante los primeros días, lo cual es parte del proceso de desintoxicación."
  },
  {
    question: "¿Puede el biomagnetismo reemplazar la medicina convencional?",
    answer: "El biomagnetismo se considera una terapia complementaria y no debe reemplazar los tratamientos médicos convencionales. Es importante mantener una comunicación abierta con tu médico y terapeuta sobre todos los tratamientos que estés recibiendo."
  },
  {
    question: "¿Quién puede realizar terapia de biomagnetismo?",
    answer: "La terapia debe ser realizada por un profesional certificado en biomagnetismo. Nuestros terapeutas están certificados por instituciones reconocidas y tienen amplia experiencia en el campo."
  }
];

const FAQ = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Resolvemos tus dudas sobre la terapia de biomagnetismo
            </p>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Buscar una pregunta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pr-12 rounded-full border-2 border-gray-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <div className="mt-8 space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <div className={`p-2 rounded-full ${openQuestion === index ? 'bg-red-600/10' : 'bg-gray-50'} transition-colors duration-200`}>
                    {openQuestion === index ? (
                      <ChevronUp className={`w-5 h-5 ${openQuestion === index ? 'text-red-600' : 'text-gray-500'}`} />
                    ) : (
                      <ChevronDown className={`w-5 h-5 ${openQuestion === index ? 'text-red-600' : 'text-gray-500'}`} />
                    )}
                  </div>
                </button>
                {openQuestion === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">
                No se encontraron preguntas que coincidan con tu búsqueda.
                <a href="#contact" className="text-red-600 font-medium ml-2 hover:text-red-700 transition-colors">
                  Contáctanos directamente
                </a>
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;