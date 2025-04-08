import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-red-950 overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Efecto de partículas en espiral */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-600 rounded-full"
            initial={{
              x: 0,
              y: 0,
              scale: 0,
              opacity: 0
            }}
            animate={{
              x: Math.cos(i * 18 * (Math.PI / 180)) * (100 + i * 10),
              y: Math.sin(i * 18 * (Math.PI / 180)) * (100 + i * 10),
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Contenedor central */}
        <div className="relative">
          {/* Anillos giratorios */}
          <motion.div
            className="absolute inset-0 border-8 border-red-600/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 border-4 border-red-600/50 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          {/* Logo con efectos */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="relative z-10 w-48 h-48"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src="/logobio.svg" 
                alt="Logo" 
                className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,0,0,0.5)]"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Texto animado */}
        <div className="absolute bottom-32 left-0 right-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center space-y-4"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 8px rgba(255,0,0,0.5)",
                  "0 0 16px rgba(255,0,0,0.8)",
                  "0 0 8px rgba(255,0,0,0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl font-black tracking-widest text-red-600"
            >
              TU SALUD
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center space-x-4"
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.span
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-3 h-3 bg-red-600 rounded-full"
              />
              <motion.p
                animate={{ 
                  color: ['#FF0000', '#DC2626', '#FF0000'],
                  y: [-2, 2, -2]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl font-bold"
              >
                ES NUESTRA PASIÓN
              </motion.p>
              <motion.span
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-3 h-3 bg-red-600 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader; 