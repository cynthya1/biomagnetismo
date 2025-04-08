import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search } from 'lucide-react';
import { useState } from 'react';

const conditions = [
  "Virus", "Bacterias", "Hongos", "Parásitos", "Acido Úrico",
  "Asma", "Bronquitis", "Acné vulgar", "Ansiedad", "Dolor de columna/ciática",
  "Colon irritable", "Irritabilidad", "Tendinitis", "Cistitis", "Dolor de cabeza",
  "Disfunción eréctil", "Nerviosismo", "Estrés", "Problemas reproductivos",
  "Ovarios poliquísticos", "Estreñimiento", "Gastritis", "Helicobacter Pilory",
  "Mareos/ vértigo", "Migrañas", "Disfunción primaria del hígado", "Próstata",
  "Dolor pélvico", "Rodillas", "Rinitis", "Insonnio", "Útero", "Vegiga", "Ira"
];

const categories = [
  { name: "Sistema Digestivo", conditions: ["Gastritis", "Helicobacter Pilory", "Colon irritable", "Estreñimiento"] },
  { name: "Sistema Nervioso", conditions: ["Ansiedad", "Estrés", "Nerviosismo", "Insomnio", "Migrañas"] },
  { name: "Sistema Muscular", conditions: ["Dolor de columna/ciática", "Tendinitis", "Dolor pélvico", "Rodillas"] },
  { name: "Sistema Inmunológico", conditions: ["Virus", "Bacterias", "Hongos", "Parásitos"] },
  { name: "Sistema Respiratorio", conditions: ["Asma", "Bronquitis", "Rinitis"] },
  { name: "Otros", conditions: ["Acné vulgar", "Disfunción eréctil", "Problemas reproductivos", "Ovarios poliquísticos", "Próstata", "Útero", "Vegiga"] }
];

const Conditions = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredConditions = conditions.filter(condition =>
    condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredByCategory = selectedCategory === "Todos"
    ? filteredConditions
    : categories.find(cat => cat.name === selectedCategory)?.conditions.filter(condition =>
        condition.toLowerCase().includes(searchTerm.toLowerCase())
      ) || [];

  return (
    <section id="conditions" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Afecciones que Tratamos
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Consulta por tu caso en particular con nuestra especialista
        </p>
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar afección..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
            />
            <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button
            onClick={() => setSelectedCategory("Todos")}
            className={`px-6 py-2 rounded-full transition-colors duration-200 ${
              selectedCategory === "Todos"
                ? "bg-red-600 text-white"
                : "bg-white border border-red-600/10 hover:bg-red-600/5"
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                selectedCategory === category.name
                  ? "bg-red-600 text-white"
                  : "bg-white border border-red-600/10 hover:bg-red-600/5"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredByCategory.map((condition, index) => (
            <motion.div
              key={condition}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white border border-red-600/10 p-6 rounded-xl shadow-sm hover:bg-red-600/5 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900">{condition}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conditions;