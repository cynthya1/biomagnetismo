import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Conditions from './components/Conditions';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import WhatsAppButton from './components/WhatsAppButton';
import { Activity, Brain, Heart, Shield } from 'lucide-react';

function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    // Precargar el logo
    const img = new Image();
    img.src = '/logobio.svg';
    img.onload = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    };
  }, []);

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
      {loading && <Preloader />}
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Benefits />
            <Conditions />
            <Gallery />
            <Testimonials />
            <FAQ />
            <Location />
            <Contact />
          </main>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
}

export default App;