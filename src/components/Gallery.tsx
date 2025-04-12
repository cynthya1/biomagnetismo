import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Youtube, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  description: string;
  category: string;
}

const videos: Video[] = [
  {
    id: "K2sF24C3eFY",
    title: "Rastreo Bioenergético",
    thumbnail: `https://img.youtube.com/vi/K2sF24C3eFY/maxresdefault.jpg`,
    url: "https://www.youtube.com/watch?v=K2sF24C3eFY",
    description: "Descubre cómo funciona el rastreo bioenergético en nuestra terapia",
    category: "Técnicas"
  },
  {
    id: "JQI35qPc-Ho",
    title: "¿Cómo funciona el Biomagnetismo?",
    thumbnail: `https://img.youtube.com/vi/JQI35qPc-Ho/maxresdefault.jpg`,
    url: "https://www.youtube.com/watch?v=JQI35qPc-Ho",
    description: "Explicación detallada del proceso de Biomagnetismo",
    category: "Educativo"
  },
  {
    id: "vQ18kMEHsR8",
    title: "Biomagnetismo para estrés crónico",
    thumbnail: `https://img.youtube.com/vi/vQ18kMEHsR8/maxresdefault.jpg`,
    url: "https://www.youtube.com/watch?v=vQ18kMEHsR8",
    description: "Tratamiento efectivo para el estrés crónico",
    category: "Tratamientos"
  },
  {
    id: "olRzXf6f3Q0",
    title: "Testimonio: Insomnio y espolón calcáneo",
    thumbnail: `https://img.youtube.com/vi/olRzXf6f3Q0/maxresdefault.jpg`,
    url: "https://www.youtube.com/watch?v=olRzXf6f3Q0",
    description: "Experiencias reales de nuestros pacientes",
    category: "Testimonios"
  },
  {
    id: "SYZTTKJ_pWw",
    title: "Testimonio: Lumbalgia",
    thumbnail: `https://img.youtube.com/vi/SYZTTKJ_pWw/maxresdefault.jpg`,
    url: "https://www.youtube.com/watch?v=SYZTTKJ_pWw",
    description: "Casos de éxito en tratamiento de dolor lumbar",
    category: "Testimonios"
  }
];

const categories = ["Todos", "Técnicas", "Educativo", "Tratamientos", "Testimonios"];

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [isMuted, setIsMuted] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const filteredVideos = selectedCategory === "Todos" 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % filteredVideos.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [filteredVideos.length, isAutoplay]);

  const handlePrev = () => {
    setIsAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex - 1 + filteredVideos.length) % filteredVideos.length);
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % filteredVideos.length);
  };

  const handleThumbnailClick = (index: number) => {
    setIsAutoplay(false);
    setActiveIndex(index);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section id="gallery" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Galería de Videos
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explora nuestra colección de videos educativos, testimonios y técnicas
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveIndex(0);
                }}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-red-600 text-white"
                    : "bg-red-50 text-red-600 hover:bg-red-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Video Carousel */}
        <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl bg-white">
          <div ref={carouselRef} className="relative aspect-video bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${filteredVideos[activeIndex].id}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${filteredVideos[activeIndex].id}`}
              title={filteredVideos[activeIndex].title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
              <div className="max-w-3xl">
                <span className="inline-block px-3 py-1 bg-red-600/20 rounded-full text-sm text-white mb-3 backdrop-blur-sm">
                  {filteredVideos[activeIndex].category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{filteredVideos[activeIndex].title}</h3>
                <p className="text-gray-200 text-lg">{filteredVideos[activeIndex].description}</p>
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={toggleMute} 
                  className="p-2 rounded-full bg-red-600/20 backdrop-blur-sm hover:bg-red-600/30 transition-colors"
                >
                  {isMuted ? 
                    <VolumeX className="w-6 h-6 text-white" /> : 
                    <Volume2 className="w-6 h-6 text-white" />
                  }
                </button>
                <a 
                  href={filteredVideos[activeIndex].url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 backdrop-blur-sm hover:bg-red-700 transition-colors text-white"
                >
                  <Youtube className="w-5 h-5" />
                  <span className="text-sm">Ver en YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Pagination Indicators */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {filteredVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-red-600 scale-125" : "bg-red-600/30 hover:bg-red-600/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`relative cursor-pointer rounded-lg overflow-hidden transform transition-all duration-300 ${
                activeIndex === index 
                  ? "ring-4 ring-red-600 scale-105" 
                  : "hover:scale-105 opacity-70 hover:opacity-100"
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className={`w-8 h-8 ${activeIndex === index ? "text-white" : "text-white"}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;