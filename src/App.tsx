import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Conditions from './components/Conditions';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MagnetEffects from './components/MagnetEffects';
import { Activity, Brain, Heart, Shield } from 'lucide-react';

function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="relative">
      <>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Benefits />
          <Location />
          <MagnetEffects />
          <Conditions />
          <Gallery />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </>
    </div>
  );
}

export default App;