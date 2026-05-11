import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaSyringe, FaMicroscope, FaFlask, FaVial, FaMagic } from 'react-icons/fa';

const Procedures = () => {
  const { t } = useTranslation();
  
  const proceduresList = [
    { key: 'joint_injection', icon: <FaSyringe />, desc: t('procedures.joint_injection') },
    { key: 'muscle_biopsy', icon: <FaMicroscope />, desc: t('procedures.muscle_biopsy') },
    { key: 'lab_tests', icon: <FaFlask />, desc: t('procedures.lab_tests') },
    { key: 'immunotherapy', icon: <FaVial />, desc: t('procedures.immunotherapy') }
  ];

  return (
    <section id="procedures" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <FaMagic className="text-5xl text-purple-400 mx-auto mb-4 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animated-gradient-text">
            {t('procedures.title')}
          </h2>
          <p className="text-gray-400 text-lg">{t('procedures.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {proceduresList.map((procedure, index) => (
            <motion.div
              key={procedure.key}
              initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center group hover:glowing-card"
            >
              <div className="text-6xl text-blue-400 mb-4 group-hover:scale-110 group-hover:text-purple-400 transition-all inline-block">
                {procedure.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t(`procedures.${procedure.key}`)}
              </h3>
              <p className="text-gray-400 text-sm">
                {index === 0 && 'حقن دقيقة باستخدام الموجات فوق الصوتية'}
                {index === 1 && 'أخذ عينة لتشخيص دقيق'}
                {index === 2 && 'تحاليل شاملة لأمراض المناعة'}
                {index === 3 && 'علاج متقدم للمناعة الذاتية'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedures;