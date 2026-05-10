import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaSyringe, FaMicroscope, FaFlask, FaVial } from 'react-icons/fa';

const Procedures = () => {
  const { t } = useTranslation();
  
  const proceduresList = [
    { key: 'joint_injection', icon: <FaSyringe />, color: 'bg-blue-500', image: '/joint-injection.jpg' },
    { key: 'muscle_biopsy', icon: <FaMicroscope />, color: 'bg-green-500', image: '/muscle-biopsy.jpg' },
    { key: 'lab_tests', icon: <FaFlask />, color: 'bg-purple-500', image: '/lab-tests.jpg' },
    { key: 'immunotherapy', icon: <FaVial />, color: 'bg-red-500', image: '/immunotherapy.jpg' }
  ];

  return (
    <section id="procedures" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {t('procedures.title')}
          </h2>
          <p className="text-gray-600 text-lg">{t('procedures.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {proceduresList.map((procedure, index) => (
            <motion.div
              key={procedure.key}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg group"
            >
              <div className={`${procedure.color} h-32 flex items-center justify-center`}>
                <div className="text-5xl text-white">
                  {procedure.icon}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {t(`procedures.${procedure.key}`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {procedure.key === 'joint_injection' && 'حقن دقيقة باستخدام الموجات فوق الصوتية'}
                  {procedure.key === 'muscle_biopsy' && 'أخذ عينة لتشخيص دقيق'}
                  {procedure.key === 'lab_tests' && 'تحاليل شاملة لأمراض المناعة'}
                  {procedure.key === 'immunotherapy' && 'علاج متقدم للمناعة الذاتية'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedures;