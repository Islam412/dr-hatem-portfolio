import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Diseases from './components/Diseases';
import Procedures from './components/Procedures';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { FaHeart } from 'react-icons/fa';

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
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Diseases />
      <Procedures />
      <Gallery />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © 2025 Dr. Hatem Abdel Kafy - {t('footer.rights')}
            <span className="flex items-center gap-1">
              {t('footer.designed')} <FaHeart className="text-red-500 inline animate-pulse" />
            </span>
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 text-gray-400 hover:text-white transition-colors"
          >
            ↑ العودة للأعلى
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;