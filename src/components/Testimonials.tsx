import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "María García",
    condition: "Estrés Crónico",
    text: "Después de meses de estrés constante, el biomagnetismo me ayudó a recuperar mi equilibrio. Las sesiones son relajantes y los resultados, sorprendentes.",
    rating: 5
  },
  {
    name: "Carlos Rodríguez",
    condition: "Insomnio",
    text: "Llevaba años con problemas para dormir. Gracias a esta terapia, ahora puedo descansar mejor. El cambio fue notable desde la primera sesión.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    condition: "Dolor Lumbar",
    text: "El tratamiento me ayudó enormemente con mi dolor de espalda crónico. La terapeuta es muy profesional y explica todo el proceso detalladamente.",
    rating: 5
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-white">
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
              Testimonios de Pacientes
            </h2>
            <p className="text-xl text-gray-600">
              Experiencias reales de nuestros pacientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-red-600">{testimonial.condition}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;