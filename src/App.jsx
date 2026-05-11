import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Diseases from './components/Diseases';
import Procedures from './components/Procedures';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { FaHeart, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} className="bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Diseases />
      <Procedures />
      <Gallery />
      <Contact />
      
      {/* Footer with animated gradient */}
      <footer className="relative bg-black/50 backdrop-blur-md py-8 text-center border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              {t('footer.rights')} - {t('doctorName')} © 2026
            </p>
            <p className="flex items-center justify-center gap-2 flex-wrap mt-2">
              <span className="flex items-center gap-1">
                {t('footer.designed')} 
                <a 
                  href="https://github.com/Islam412" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-purple-400 transition-colors duration-300 mx-1 hover:underline"
                >
                  <FaHeart className="text-red-500 inline animate-pulse" />
                  {t('designerName')}
                </a>
                
              </span>
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-4 text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full"
            >
              <FaRocket /> {t('backToTop')}
            </motion.button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;