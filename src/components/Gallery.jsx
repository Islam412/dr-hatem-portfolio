import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryImages = [
    { id: 1, src: '/gallery1.jpg', title: t('محاضرة علمية') || 'محاضرة علمية', category: 'Scientific Lecture' },
    { id: 2, src: '/gallery2.jpg', title: t('مع مريض') || 'مع مريض', category: 'Medical Consultation' },
    { id: 3, src: '/gallery3.jpg', title: t('ورشة عمل') || 'ورشة عمل', category: 'Medical Workshop' },
    { id: 4, src: '/gallery4.jpg', title: t('استلام شهادة') || 'استلام شهادة', category: 'Attaining a certificate' },
    { id: 5, src: '/gallery5.jpg', title: t('المستشفى السعودي الألماني') || 'المستشفى السعودي الألماني', category: 'Saudi German Hospital - Cairo, Egypt' },
    { id: 6, src: '/gallery6.jpg', title: t('مؤتمر طبي') || 'مؤتمر طبي', category: 'Scientific Medical Forum' }
  ];

  return (
    <section id="gallery" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('gallery.title')}
          </h2>
          <p className="text-gray-300 text-lg">{t('gallery.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(image)}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Image'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-bold">{image.title}</p>
                  <p className="text-sm text-gray-300">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for full image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300"
            >
              <FaTimes />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/800x600?text=Image'; }}
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;