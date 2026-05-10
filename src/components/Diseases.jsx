import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBone, FaLungs, FaBrain } from 'react-icons/fa';

const diseases = [
  { nameKey: 'rheumatoid', icon: <FaBone />, img: '/rheumatoid.jpg', desc: 'التهاب مزمن يصيب المفاصل' },
  { nameKey: 'lupus', icon: <FaLungs />, img: '/lupus.jpg', desc: 'مرض مناعي ذاتي متعدد الأعضاء' },
  { nameKey: 'fibro', icon: <FaBrain />, img: '/fibro.jpg', desc: 'آلام عضلية منتشرة مع تعب' }
];

const Diseases = () => {
  const { t } = useTranslation();
  return (
    <section id="diseases" className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">{t('diseases.title')}</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {diseases.map((d, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} transition={{ type: 'spring' }} className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img src={d.img} alt={t(`diseases.${d.nameKey}`)} className="h-48 w-full object-cover" />
            <div className="p-6 flex items-center gap-3 text-2xl text-blue-600">{d.icon} <h3 className="text-xl font-semibold">{t(`diseases.${d.nameKey}`)}</h3></div>
            <p className="px-6 pb-6 text-gray-600">{d.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Diseases;