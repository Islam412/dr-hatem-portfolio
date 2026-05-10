import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();
  
  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://www.facebook.com/share/18kkYqig5N/', color: 'bg-blue-600', hover: 'hover:bg-blue-700' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/dr.hatem.abdelkafy', color: 'bg-pink-600', hover: 'hover:bg-pink-700' },
    { icon: <FaTiktok />, url: 'https://www.tiktok.com/@hatemabdelkafy', color: 'bg-black', hover: 'hover:bg-gray-800' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/201069927168', color: 'bg-green-600', hover: 'hover:bg-green-700' }
  ];

  const contactInfo = [
    { icon: <FaPhoneAlt />, label: t('contact.phone'), value: '+20 106 992 7168', href: 'tel:+201069927168' },
    { icon: <FaWhatsapp />, label: t('contact.whatsapp'), value: '+20 106 992 7168', href: 'https://wa.me/201069927168' },
    { icon: <FaEnvelope />, label: t('contact.email'), value: 'info@drhatem.com', href: 'mailto:info@drhatem.com' },
    { icon: <FaMapMarkerAlt />, label: t('contact.location'), value: 'Saudi German Hospital - Egypt', href: '#' }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-gray-600 text-lg">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-3xl text-blue-600 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500">{info.label}</p>
                  <p className="text-lg font-semibold text-gray-800">{info.value}</p>
                </div>
              </a>
            ))}
            
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
              <div className="text-3xl text-blue-600">
                <FaClock />
              </div>
              <div>
                <p className="text-sm text-gray-500">ساعات العمل</p>
                <p className="text-lg font-semibold text-gray-800">{t('contact.working_hours')}</p>
              </div>
            </div>
          </motion.div>

          {/* Social Media & Map */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">تابع الدكتور على وسائل التواصل</h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${social.color} ${social.hover} text-white p-4 rounded-full text-2xl transition-all duration-300 shadow-lg`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">موقع المستشفى</h3>
              <div className="rounded-lg overflow-hidden h-64 bg-gray-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1x3453.5!2d31.235!3d30.044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840d5e2a6c6c7%3A0x5b6c8c9f4e6d7e8f!2sSaudi%20German%20Hospital%20Cairo!5e0!3m2!1sen!2seg!4v1699999999999!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Hospital Location"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;