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
  
  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} className="font-sans">
      <Navbar />
      <Hero />
      <Diseases />
      <Procedures />
      <Gallery />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="flex items-center justify-center gap-2">
          © 2025 Dr. Hatem Abdel Kafy - {t('footer.rights')}
          <span className="flex items-center gap-1">
            {t('footer.designed')} <FaHeart className="text-red-500 inline animate-pulse" />
          </span>
        </p>
      </footer>
    </div>
  );
}

export default App;