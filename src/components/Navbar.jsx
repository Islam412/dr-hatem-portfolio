import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaLanguage } from 'react-icons/fa';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50 py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-700">Dr. Hatem</h1>
      <div className="flex gap-6 items-center">
        <a href="#home" className="hover:text-blue-600">{t('nav.home')}</a>
        <a href="#diseases" className="hover:text-blue-600">{t('nav.diseases')}</a>
        <a href="#operations" className="hover:text-blue-600">{t('nav.operations')}</a>
        <a href="#gallery" className="hover:text-blue-600">{t('nav.gallery')}</a>
        <a href="#contact" className="hover:text-blue-600">{t('nav.contact')}</a>
        <button onClick={toggleLang} className="flex items-center gap-1 bg-gray-200 p-2 rounded-full"><FaLanguage /> {i18n.language === 'ar' ? 'EN' : 'عربي'}</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;