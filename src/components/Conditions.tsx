import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Circle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { name: "Sistema Digestivo", conditions: ["Gastritis", "Helicobacter Pilory", "Colon irritable", "Estreñimiento"] },
  { name: "Sistema Nervioso", conditions: ["Ansiedad", "Estrés", "Nerviosismo", "Insomnio", "Migrañas"] },
  { name: "Sistema Muscular", conditions: ["Dolor de columna/ciática", "Tendinitis", "Dolor pélvico", "Rodillas"] },
  { name: "Sistema Inmunológico", conditions: ["Virus", "Bacterias", "Hongos", "Parásitos"] },
  { name: "Sistema Respiratorio", conditions: ["Asma", "Bronquitis", "Rinitis"] },
  { name: "Otros", conditions: ["Acné vulgar", "Disfunción eréctil", "Problemas reproductivos", "Ovarios poliquísticos", "Próstata", "Útero", "Vegiga", "Acido Úrico", "Cistitis", "Dolor de cabeza", "Mareos/ vértigo", "Disfunción primaria del hígado", "Ira"] }
];

const Conditions = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  return (
    <section id="conditions" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            ¿Qué afecciones tratamos? 
          </h2>
          
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.name} className="overflow-hidden rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full flex justify-between items-center px-6 py-4 bg-white text-red-600 hover:bg-gray-50 focus:outline-none text-left"
                >
                  <span className="text-lg font-medium">{category.name}</span>
                  {openCategory === category.name ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {openCategory === category.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-white"
                  >
                    <ul className="space-y-2">
                      {category.conditions.map((condition) => (
                        <li key={condition} className="flex items-center text-gray-700">
                          <Circle className="w-2 h-2 mr-3 fill-current text-red-600" />
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Conditions;