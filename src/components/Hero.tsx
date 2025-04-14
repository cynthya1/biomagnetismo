import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background with Video */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/foto5.jpg')",
            transform: "scale(1)",
            height: "100vh",
            width: "100%",
            objectFit: "cover"
          }}
        />
      </div>
      
      {/* Sutil Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-64"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow-lg"
          >
            Biomagnetismo <br /> Mejórate <span className="text-red-600">HOY</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto text-shadow"
          >
            Curación con imanes – Metodología de alta precisión
          </motion.p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#about"
              className="px-8 py-3 text-lg font-medium bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-full hover:bg-white/20 transition-colors"
            >
              Conoce más
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;