import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBone, FaLungs, FaBrain, FaShieldAlt, FaJoint, FaHeartbeat } from 'react-icons/fa';
import { useState } from 'react';

const Diseases = () => {
  const { t } = useTranslation();
  const [flipped, setFlipped] = useState({});
  
  const diseasesList = [
    { key: 'rheumatoid', icon: <FaBone />, color: 'from-red-500 to-red-600', gradient: 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20' },
    { key: 'lupus', icon: <FaLungs />, color: 'from-purple-500 to-purple-600', gradient: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20' },
    { key: 'fibro', icon: <FaBrain />, color: 'from-blue-500 to-blue-600', gradient: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20' },
    { key: 'autoimmune', icon: <FaShieldAlt />, color: 'from-green-500 to-green-600', gradient: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20' },
    { key: 'arthritis', icon: <FaJoint />, color: 'from-orange-500 to-orange-600', gradient: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20' }
  ];

  const toggleFlip = (index) => {
    setFlipped(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="diseases" className="py-20 px-6 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-gray-900/50 dark:to-gray-800/50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <FaHeartbeat className="text-5xl text-gradient" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {t('diseases.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t('diseases.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {diseasesList.map((disease, index) => (
            <motion.div
              key={disease.key}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative cursor-pointer"
              onClick={() => toggleFlip(index)}
            >
              <div className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ${flipped[index] ? 'rotate-y-180' : ''}`}>
                {/* Front Side */}
                <div className={`${disease.gradient} p-6 min-h-[280px] transform transition-all duration-500 ${flipped[index] ? 'opacity-0' : 'opacity-100'}`}>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${disease.color} flex items-center justify-center text-white text-3xl mb-4 shadow-lg`}>
                    {disease.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {t(`diseases.${disease.key}.name`)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t(`diseases.${disease.key}.desc`)}
                  </p>
                  <div className="mt-4 text-blue-600 dark:text-blue-400 font-semibold">
                    اضغط للمزيد ←
                  </div>
                </div>
                
                {/* Back Side */}
                <div className={`absolute inset-0 bg-gradient-to-br ${disease.color} p-6 rounded-2xl transform rotate-y-180 transition-all duration-500 ${flipped[index] ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex flex-col items-center justify-center h-full text-white text-center">
                    <div className="text-6xl mb-4">{disease.icon}</div>
                    <h3 className="text-2xl font-bold mb-3">
                      {t(`diseases.${disease.key}.name`)}
                    </h3>
                    <p className="text-white/90">
                      نسبة الشفاء: 85%
                    </p>
                    <p className="text-white/80 text-sm mt-2">
                      أحدث الأساليب العلاجية
                    </p>
                    <button className="mt-4 px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition">
                      اعرف أكثر
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diseases;