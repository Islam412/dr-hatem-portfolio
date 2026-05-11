import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaBone, FaLungs, FaBrain, FaShieldAlt, FaJoint, FaHeartbeat, 
  FaStethoscope, FaSyringe, FaClipboardList, FaCheckCircle, 
  FaTimes, FaArrowRight 
} from 'react-icons/fa';
import { useState } from 'react';

const Diseases = () => {
  const { t } = useTranslation();
  const [selectedDisease, setSelectedDisease] = useState(null);

  const diseasesList = [
    { 
      key: 'rheumatoid', 
      icon: <FaBone />, 
      color: 'from-red-500 to-red-600', 
      glow: 'rgba(239,68,68,0.4)',
      symptoms: [t('diseases.rheumatoid.symptom1') || 'آلام المفاصل', t('diseases.rheumatoid.symptom2') || 'تيبس الصباح', t('diseases.rheumatoid.symptom3') || 'تورم واحمرار'],
      treatment: t('diseases.rheumatoid.treatment') || 'العلاج البيولوجي + الأدوية المضادة للروماتيزم',
      recoveryRate: 85
    },
    { 
      key: 'lupus', 
      icon: <FaLungs />, 
      color: 'from-purple-500 to-purple-600', 
      glow: 'rgba(168,85,247,0.4)',
      symptoms: [t('diseases.lupus.symptom1') || 'طفح جلدي', t('diseases.lupus.symptom2') || 'آلام المفاصل', t('diseases.lupus.symptom3') || 'التعب المزمن'],
      treatment: t('diseases.lupus.treatment') || 'الكورتيكوستيرويدات + مثبطات المناعة',
      recoveryRate: 75
    },
    { 
      key: 'fibro', 
      icon: <FaBrain />, 
      color: 'from-blue-500 to-blue-600', 
      glow: 'rgba(59,130,246,0.4)',
      symptoms: [t('diseases.fibro.symptom1') || 'ألم عضلي منتشر', t('diseases.fibro.symptom2') || 'اضطرابات النوم', t('diseases.fibro.symptom3') || 'الصداع'],
      treatment: t('diseases.fibro.treatment') || 'العلاج السلوكي + الأدوية المسكنة',
      recoveryRate: 70
    },
    { 
      key: 'autoimmune', 
      icon: <FaShieldAlt />, 
      color: 'from-green-500 to-green-600', 
      glow: 'rgba(34,197,94,0.4)',
      symptoms: [t('diseases.autoimmune.symptom1') || 'التهاب مزمن', t('diseases.autoimmune.symptom2') || 'فقدان الوزن', t('diseases.autoimmune.symptom3') || 'الحمى'],
      treatment: t('diseases.autoimmune.treatment') || 'العلاج المناعي + الأدوية المثبطة',
      recoveryRate: 80
    },
    { 
      key: 'arthritis', 
      icon: <FaJoint />, 
      color: 'from-orange-500 to-orange-600', 
      glow: 'rgba(249,115,22,0.4)',
      symptoms: [t('diseases.arthritis.symptom1') || 'تصلب المفاصل', t('diseases.arthritis.symptom2') || 'احمرار', t('diseases.arthritis.symptom3') || 'صعوبة الحركة'],
      treatment: t('diseases.arthritis.treatment') || 'العلاج الطبيعي + مضادات الالتهاب',
      recoveryRate: 90
    }
  ];

  const openModal = (disease) => {
    setSelectedDisease(disease);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedDisease(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="diseases" className="py-20 px-6 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-blue-900/30"></div>
        
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 150, -150, 0],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-48 w-96 h-96 rounded-full bg-blue-500/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            y: [0, -80, 0],
            opacity: [0.05, 0.2, 0.05]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 -right-48 w-96 h-96 rounded-full bg-purple-500/30 blur-3xl"
        />
        
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${['#3b82f6', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 3)]}, transparent)`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 360]
            }}
            transition={{ 
              scale: { duration: 2, repeat: Infinity },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/30">
              <FaHeartbeat className="text-4xl text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="animated-gradient-text">{t('diseases.title')}</span>
          </h2>
          
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            {t('diseases.subtitle')}
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diseasesList.map((disease, index) => (
            <motion.div
              key={disease.key}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative cursor-pointer group"
            >
              <div 
                className="absolute -inset-0.5 bg-gradient-to-r rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, ${disease.glow}, transparent)`,
                }}
              />
              
              <div className="relative glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
                <div className="p-6">
                  <div className="relative mb-5">
                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${disease.color} flex items-center justify-center text-white text-4xl shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:rotate-6`}>
                      {disease.icon}
                    </div>
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${disease.color} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                    {t(`diseases.${disease.key}.name`)}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-4 line-clamp-2">
                    {t(`diseases.${disease.key}.desc`)}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {disease.symptoms.slice(0, 2).map((symptom, i) => (
                      <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-blue-400 border border-blue-500/20">
                        {symptom}
                      </span>
                    ))}
                    {disease.symptoms.length > 2 && (
                      <span className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-400">
                        +{disease.symptoms.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3 mt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openModal(disease)}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <FaClipboardList />
                      {t('diseases.details')}
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.location.href = '#contact'}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2 border border-white/10"
                    >
                      <FaStethoscope />
                      {t('diseases.consultation')}
                    </motion.button>
                  </div>
                </div>
                
                <div className="h-1 bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${disease.recoveryRate}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full bg-gradient-to-r ${disease.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-3xl mx-auto border border-blue-500/30 hover:border-purple-500/50 transition-all duration-300">
            <FaCheckCircle className="text-4xl text-green-400 mx-auto mb-4" />
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('diseases.moreInfo') || 'نحن نقدم أحدث الأساليب العلاجية والتقنيات المتقدمة في علاج أمراض الروماتيزم والمناعة'}
            </p>
            <div className="flex gap-4 justify-center mt-6">
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-all"
              >
                {t('diseases.bookConsult')}
                <FaArrowRight />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedDisease && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-2xl w-full glass-card rounded-2xl p-8 border border-blue-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl"
              >
                <FaTimes />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedDisease.color} flex items-center justify-center text-white text-3xl`}>
                  {selectedDisease.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t(`diseases.${selectedDisease.key}.name`)}
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-blue-400 font-semibold mb-2">{t('diseases.overview')} 📋</p>
                  <p className="text-gray-300 leading-relaxed">{t(`diseases.${selectedDisease.key}.desc`)}</p>
                </div>
                
                <div>
                  <p className="text-purple-400 font-semibold mb-2">{t('diseases.symptoms')} ⚠️</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedDisease.symptoms.map((symptom, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full bg-white/10 text-gray-300 text-sm">
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-green-400 font-semibold mb-2">{t('diseases.treatment')} 💊</p>
                  <p className="text-gray-300 leading-relaxed">{selectedDisease.treatment}</p>
                </div>
                
                <div>
                  <p className="text-yellow-400 font-semibold mb-2">{t('diseases.recoveryRate')} 📊</p>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-3 text-xs flex rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedDisease.recoveryRate}%` }}
                        transition={{ duration: 1 }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${selectedDisease.color}`}
                      />
                    </div>
                    <p className="text-right text-sm text-gray-400 mt-2">{selectedDisease.recoveryRate}% {t('diseases.recoveryRate')}</p>
                  </div>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  closeModal();
                  window.location.href = '#contact';
                }}
                className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <FaStethoscope />
                {t('diseases.bookConsult')}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Diseases;