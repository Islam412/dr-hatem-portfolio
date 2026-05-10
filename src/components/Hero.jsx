import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaStethoscope, FaAward, FaHospital } from 'react-icons/fa';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen pt-24 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            <p className="text-2xl text-gray-600 mb-4">{t('hero.subtitle')}</p>
            <p className="text-lg text-blue-600 mb-8">{t('hero.credentials')}</p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <FaStethoscope className="text-3xl text-blue-600" />
                <span className="text-gray-700">استشاري أول</span>
              </div>
              <div className="flex items-center gap-3">
                <FaAward className="text-3xl text-blue-600" />
                <span className="text-gray-700">زميل الكلية الملكية</span>
              </div>
              <div className="flex items-center gap-3">
                <FaHospital className="text-3xl text-blue-600" />
                <span className="text-gray-700">المستشفى السعودي الألماني</span>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              احجز موعداً الآن
            </a>
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/doctor-main.jpg" 
                alt="Dr. Hatem Abdel Kafy"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;