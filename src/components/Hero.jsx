import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaStethoscope, FaAward, FaHospital, FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { t } = useTranslation();
  const { darkMode } = useTheme();

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity }
  };

  return (
    <section id="home" className="min-h-screen pt-24 flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse top-20 -left-48"></div>
        <div className="absolute w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000 bottom-20 -right-48"></div>
        <div className="absolute w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-700 top-1/2 left-1/2 transform -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={pulseAnimation}
              className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6"
            >
              <span className="text-blue-600 dark:text-blue-400 font-semibold">⭐ استشاري متميز</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">{t('hero.title')}</span>
            </h1>
            
            <p className="text-2xl text-gray-600 dark:text-gray-400 mb-4">{t('hero.subtitle')}</p>
            <p className="text-lg text-blue-600 dark:text-blue-400 mb-8">{t('hero.credentials')}</p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6 mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 glass-effect px-6 py-3 rounded-full shadow-lg">
                <FaStethoscope className="text-3xl text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300 font-semibold">استشاري أول</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 glass-effect px-6 py-3 rounded-full shadow-lg">
                <FaAward className="text-3xl text-purple-600" />
                <span className="text-gray-700 dark:text-gray-300 font-semibold">زميل الكلية الملكية</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 glass-effect px-6 py-3 rounded-full shadow-lg">
                <FaHospital className="text-3xl text-green-600" />
                <span className="text-gray-700 dark:text-gray-300 font-semibold">المستشفى السعودي الألماني</span>
              </motion.div>
            </motion.div>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              احجز موعداً الآن
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0, rotateY: 90 }}
            animate={{ x: 0, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative"
          >
            <motion.div 
              animate={floatingAnimation}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
              <img 
                src="/doctor-main.jpg" 
                alt="Dr. Hatem Abdel Kafy"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            
            {/* Floating badges */}
            <motion.div 
              animate={floatingAnimation}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg"
              style={{ animationDelay: '1s' }}
            >
              🌟 20+ سنوات خبرة
            </motion.div>
            <motion.div 
              animate={floatingAnimation}
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
              style={{ animationDelay: '2s' }}
            >
              🏥 5000+ مريض
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;