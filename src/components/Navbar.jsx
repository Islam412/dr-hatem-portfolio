import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaLanguage, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleLang = () => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
  
  const navLinks = ['home', 'diseases', 'gallery', 'contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.5 }} 
      className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 py-4 px-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
        >
          Dr. Hatem Abdel Kafy
        </motion.h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link}
              href={`#${link}`} 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              {t(`nav.${link}`)}
            </a>
          ))}
          <button 
            onClick={toggleLang} 
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-all duration-300"
          >
            <FaLanguage className="text-blue-600" />
            <span className="font-medium">{i18n.language === 'ar' ? 'English' : 'العربية'}</span>
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 flex flex-col gap-4 pb-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link}
              href={`#${link}`} 
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t(`nav.${link}`)}
            </a>
          ))}
          <button 
            onClick={toggleLang} 
            className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full w-fit"
          >
            <FaLanguage /> {i18n.language === 'ar' ? 'English' : 'العربية'}
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;