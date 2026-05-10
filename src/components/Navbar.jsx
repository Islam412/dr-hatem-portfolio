import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaLanguage, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
  
  const navLinks = ['home', 'diseases', 'procedures', 'gallery', 'contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.5, type: 'spring' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg' : 'bg-white/80 dark:bg-gray-900/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            whileHover={{ scale: 1.05 }}
            className="text-2xl md:text-3xl font-bold text-gradient cursor-pointer"
          >
            Dr. Hatem Abdel Kafy
          </motion.h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link}
                href={`#${link}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium relative group"
              >
                {t(`nav.${link}`)}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </motion.a>
            ))}
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-all"
            >
              {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
            </button>
            
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transition-all hover:scale-105"
            >
              <FaLanguage />
              <span className="font-medium">{i18n.language === 'ar' ? 'English' : 'العربية'}</span>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex gap-2">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 flex flex-col gap-4 pb-4"
            >
              {navLinks.map((link) => (
                <a 
                  key={link}
                  href={`#${link}`} 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors py-2"
                >
                  {t(`nav.${link}`)}
                </a>
              ))}
              <button 
                onClick={toggleLang}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full"
              >
                <FaLanguage /> {i18n.language === 'ar' ? 'English' : 'العربية'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;