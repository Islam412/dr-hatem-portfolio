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

  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} className="bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Diseases />
      <Procedures />
      <Gallery />
      <Contact />
      
      <footer className="relative bg-black/50 backdrop-blur-md py-8 text-center border-t border-white/10">
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              © 2025 Dr. Hatem Abdel Kafy - {t('footer.rights')}
              <span className="flex items-center gap-1">
                {t('footer.designed')} <FaHeart className="text-red-500 inline animate-pulse" />
              </span>
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-4 text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full"
            >
              <FaRocket /> العودة للأعلى
            </motion.button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;