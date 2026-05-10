import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBone, FaLungs, FaBrain, FaShieldAlt, FaJoint } from 'react-icons/fa';

const Diseases = () => {
  const { t } = useTranslation();
  
  const diseasesList = [
    { key: 'rheumatoid', icon: <FaBone />, color: 'from-red-500 to-red-600', image: '/rheumatoid.jpg' },
    { key: 'lupus', icon: <FaLungs />, color: 'from-purple-500 to-purple-600', image: '/lupus.jpg' },
    { key: 'fibro', icon: <FaBrain />, color: 'from-blue-500 to-blue-600', image: '/fibro.jpg' },
    { key: 'autoimmune', icon: <FaShieldAlt />, color: 'from-green-500 to-green-600', image: '/autoimmune.jpg' },
    { key: 'arthritis', icon: <FaJoint />, color: 'from-orange-500 to-orange-600', image: '/arthritis.jpg' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="diseases" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            {t('diseases.title')}
          </h2>
          <p className="text-gray-600 text-lg">{t('diseases.subtitle')}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {diseasesList.map((disease, index) => (
            <motion.div
              key={disease.key}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
            >
              <div className={`h-48 bg-gradient-to-r ${disease.color} relative overflow-hidden`}>
                {disease.image && (
                  <img 
                    src={disease.image} 
                    alt={t(`diseases.${disease.key}.name`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`text-3xl text-${disease.color.split('-')[2]}-600`}>
                    {disease.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {t(`diseases.${disease.key}.name`)}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t(`diseases.${disease.key}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Diseases;